/**
 * Apicall config
 *
 */

import axios from "axios"
import Storage from "@DATA-STORE/session.cache"
import { openNotificationWithIcon } from "@COMMON/utils"
import { ACCESS_TOKEN } from "@COMMON/constants"

const { NODE_ENV } = process.env // retrive env value from process.env

const publicPath = "" // init the public path as empty
if (NODE_ENV === "development") {
  // if the host support cors.
  // publicPath = "http:// *.*.*.*:*/api";
}

const ERROR_CODE_CONSTANTS = {
  // Errors lists
  [400]: "request failed!",
  [401]: "failed to login or already login",
  [403]: "access denied!",
  [404]: "cannot found!",
  [408]: "request timeout!",
  [500]: "Server Internal error!",
  [501]: "Service not avaliable!",
  [502]: "gateway Error!",
  [503]: "Service not avaliable!",
  [504]: "gateway timeout!",
  [505]: "Http version not supported!",
}

class Request {
  _axiosInstance: any
  /**
   *
   */
  constructor() {
    // create a singleton axios instance as universal api access
    this._axiosInstance = axios.create({
      timeout: 10000, // 10s timeout ,
      baseURL: publicPath,
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        "X-Requested-With": "XMLHttpRequest", // todo: for ajax request, unfamiliar with this option,
      },
    })
    this.interceptRequest()
    this.interceptResponse()
  }

  // interceptors for Request
  public interceptRequest() {
    this._axiosInstance.interceptors.request.use((config: any) => {
      config.headers["token"] = Storage.getCachedDate(ACCESS_TOKEN) || "" // token is either the Access token or empty string
      if (config.url.includes("pur/contract/upload")) {
        config.headers["Content-Type"] = "multipart/form-data"
      }
      return config
    })
  }
  // interceptor for response
  public interceptResponse() {
    this._axiosInstance.interceptors.response.use(
      (response: any) => {
        if (response?.data) {
          const { code = "200" } = response.data // this depends on how to interact with backends, afterall not all backends is restful.
          if (code === "200" || response.statusText.toLocalLowerCase() === "ok") {
            return Promise.resolve(response) // todo: why not directly return the response???
          } else {
            return Promise.reject(response)
          }
        } else {
          openNotificationWithIcon("error", "no data")
          return Promise.reject("no data")
        }
      },
      (error: any) => {
        if (error.response) {
          const { status = "" } = error.response // set the default value of status to "", incase there is a error.response.status = undefined
          if (error.response.status === 401) {
            //window.history.push(LOGIN) //if token is not avaliable or login failed, jump to login page
          }
          openNotificationWithIcon("error", ERROR_CODE_CONSTANTS[status as keyof typeof ERROR_CODE_CONSTANTS])
          return Promise.reject(error)
        } else {
          return Promise.reject("request timeout, please refresh to try again") // todo: is this using reject as { throw new Error("xxx") } ?
        }
      }
    )
  }

  /**
   * abstract get methods
   * @param url
   * @param params
   * @returns {Promise}
   */

  public get(url: string, params = Object) {
    return new Promise((resolve, reject) => {
      this._axiosInstance
        .get(url, {
          params: params,
        })
        .then((response: any) => {
          resolve(response.data)
        })
        .catch((error: any) => {
          reject(error)
        })
    })
  }

  /**
   * Post
   * @param url
   * @param params
   * @returns {Promise}
   */
  public post(url: string, params = {}, config: { [key: string]: any } = {}) {
    // config : {[key:string]: any} = {} means config is an obj with key is string, value is any type, then after type declaration give the config a init value = {}
    return new Promise((resolve, reject) => {
      if (typeof params === "object") {
        if (params.constructor.name === "FormData") {
          config["Content-Type"] = "multipart/form-data"
        }
      }
      this._axiosInstance
        .post(url, params, config)
        .then((response: any) => {
          resolve(dispatch(setResponse(response.data)))
        })
        .catch((error: any) => {
          reject(error)
        })
    })
  }

  /**
   * Patch
   * @param url
   * @param params
   * @return {Promise}
   */
  public patch(url: string, params = {}) {
    return new Promise((resolve, reject) => {
      this._axiosInstance
        .patch(url, params)
        .then((response: any) => {
          resolve(response.data)
        })
        .catch((error: any) => {
          reject(error)
        })
    })
  }

  /**
   * Put
   * @param url
   * @param params
   * @return {Promise}
   */
  public put(url: string, params = {}) {
    return new Promise((resolve, reject) => {
      this._axiosInstance
        .put(url, params)
        .then((response: any) => {
          resolve(response.data)
        })
        .catch((error: any) => {
          reject(error)
        })
    })
  }
}

export default new Request() // export the singleton
