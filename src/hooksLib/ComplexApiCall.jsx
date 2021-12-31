export const useMountStatusRef = () => {
  const mountingStatusRef = useRef(false)
  useEffect(() => {
    mountingStatusRef.current = true
    return () => {
      mountingStatusRef.current = false
    }
  })
  return mountingStatusRef
}

// React-Query apicall

export const apiHttpCall = async ({ endPoint, data, token, headers, ...customConfig }) => {
  const config = {
    method: "GET",
    url: `${apiUrlData}/${endPoint}`,
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
      "Content-Type": data ? "application/json" : "",
    },
    body: {},
    data: {},
    ...customConfig,
  }

  if (config.method.toUpperCase() === "GET") {
    endPoint += `${qs.stringify(data)}`
  } else {
    config.body = JSON.stringify(data || {})
  }

  return axios.request({ config }).then(async (response) => {
    if (response.status === 401) {
      // if authorization fail, force logout, then refresh
      await auth.Logout()
      window.location.reload()
      return Promise.reject({ messsage: "Please re-login" })
    }
    if (response.data) {
      return response.data
    } else {
      throw new Error("Connection failed! Please check your internet.")
    }
  })
}

export const useApiCall = () => {
  const { operator } = useAuth()
  return ({ config }) => apiHttpCall({ ...config, token: operator?.token })
}
