import { customAlphabet } from "nanoid"

// determine if an object have value
export const objectExistValue = (obj: object) => {
  Object.keys(obj).length > 0
}

/**
 * get params from redirect
 * eg. search `?title=brand&id=avarile`
   unescape() function decypher escape() coded strings
 */
export const getUrlParams = (url: string, name: string) => {
  const reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)")
  const search = url.split("?")[1]
  /**
 * 
const url = 'http://api/users?name=Avarile&sex=mail&age>30'
const search = url.split('?')[1]
console.log(search); 
output: name=Avarile&sex=mail&age>30
 * 
 */

  // WARNING use encodeURI and decodeURL instead of unescape / escape

  if (search) {
    const r = search.substring(0).match(reg)
    if (r !== null) {
      return encodeURI(r[2])
    } else {
      return ""
    }
  }
}

export const hasErrors = (fieldsError: any) => {
  // get all the
  return Object.keys(fieldsError).some((field) => fieldsError[field])
}

export const generateNanoid = async () => {
  const nanoid = customAlphabet("1234567890abcdef", 10)
  return await nanoid()
}

/**
 * determine if its IE for they has quite a different way to post message
 * @returns {boolean}
 */
export const checkIfIe = () => {
  const userAgent = navigator.userAgent // get browser's userAgent string
  const isIE = userAgent.indexOf("compatible")
  userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 //determine if IE < 11
  // const isEdge = userAgent.indexOf("Edge") > -1 && !isIE; //determine if IE Edge
  const isIE11 = userAgent.indexOf("Trident") > -1 && userAgent.indexOf("rv:11.0") > -1
  if (isIE || isIE11) {
    return false
  } else {
    return true
  }
}

/**
 * Create Map Object according to the Object
 * in order to get rid of the replica
 */
export const mapByObject = <T1, T2>(object = {}) => {
  const temp: any[] = []
  let key: string
  for (key in object) {
    const keyMap = Number(key) ? Number(key) : key
    temp.push([keyMap, object[key as keyof typeof object]])
  }
  return new Map<T1, T2>(temp)
}

/**
 * refine the empty values in Object
 * @param {object | {}}
 * @returns {object | {}}
 */
export const refineObject = (object: any) => {
  const response = { ...object }
  Object.keys(response).forEach((key: any) => {
    const value = response[key]
    if (isVoid(value)) {
      delete response[key]
    }
  })
  return response
}

/**
 * determine if the value is undefined || null || ""
 * @param value
 * @returns {boolean}
 */
export const isVoid = (value: any) => {
  if (value === undefined || value === null || value === "") {
    return true
  } else return false
}

/**
 * get rid of empty elements from array
 * @param {array}
 * @returns {array}
 */
export const refineArray = (array: []) => {
  return array.filter((a) => a)
}

