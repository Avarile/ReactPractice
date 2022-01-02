import React, { useState } from "react"
import axios from "axios"
import qs from "query-string"

// Infomation Display

export const UniversalLogDisplayer = (dataSource, logSetter) => {
  React.useEffect(() => {
    for (let i = 0; i <= dataSource.length; i++) {
      setTimeout(() => {
        logSetter((previousState) => [...previousState, dataSource[i]])
      }, i * 3000)
    }
  }, [])
}
// Usage Example:
// export const TextDisplayWindow = ({ dataSource, logPrintFunc }) => {
//   const [logArray, setLogArray] = useState([])

//   logPrintFunc(dataSource, setLogArray)
//   return (
//     <>
//       <TextWindow>
//         {logArray.map((logItem, index) => {
//           return <p key={index}>{logItem}</p>
//         })}
//       </TextWindow>
//     </>
//   )
// }

// const TextWindow = styled.div`
//   height: calc(100vh - 0px);
//   margin: 10px, 10px;
//   display: flex;
//   flex-direction: column;
//   justify-content: flex-start;
// `
// const SingleLog = styled.p``

// APIUtility

export const ApiHttpCall = ({ apiUrl, endPoint, data, token, headers, ...customConfig }) => {
  const config = {
    method: "GET",
    baseURL: "http://localhost:4000/",
    url: endPoint,
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
      "Content-Type": data ? "application/json" : "",
    },
    ...customConfig,
  }

  return axios.request({ config })
}

export const testAxiosCall = () => {
  axios({
    method: "get",
    url: "http://localhost:4000/players?name=Avarile",
  }).then(function (response) {
    return response
  })
}
// I dont want to do anything to the response of the axios.request
// {
//   // `data` is the response that was provided by the server
//   data: {},

//   // `status` is the HTTP status code from the server response
//   status: 200,

//   // `statusText` is the HTTP status message from the server response
//   statusText: 'OK',

//   // `headers` the HTTP headers that the server responded with
//   // All header names are lower cased and can be accessed using the bracket notation.
//   // Example: `response.headers['content-type']`
//   headers: {},

//   // `config` is the config that was provided to `axios` for the request
//   config: {},

//   // `request` is the request that generated this response
//   // It is the last ClientRequest instance in node.js (in redirects)
//   // and an XMLHttpRequest instance in the browser
//   request: {}
// }

// When using then, you will receive the response as follows:

// axios.get('/user/12345')
//   .then(function (response) {
//     console.log(response.data);
//     console.log(response.status);
//     console.log(response.statusText);
//     console.log(response.headers);
//     console.log(response.config);
//   });

// Control Components of the ApiCalls

// export const ApiCallController = (callback) => {
//   const [error, setError] = useState(undefined)
//   const [response, setResponse] = useState(undefined)
//   const [isLoading, setIsLoading] = useState(true)

//   const Execute = callback()
//     .then((response) => {
//       if (response.statusText === "OK") {
//         setResponse(response.data)
//         setError("")
//         setIsLoading(false)
//       } else {
//         setResponse(null)
//         setIsLoading(false)
//       }
//     })
//     .catch((error) => {
//       setError(error)
//     })

//   return [Execute, response, error, isLoading]
// }

export const useComponentWillMount = (callback) => {
  const willMount = React.useRef(true)
  if (willMount.current) {
    callback()
    willMount.current = false
  }
}

export const useComponentDidMount = (callback) => {
  React.useEffect(callback(), [])
}

// test APICALL
