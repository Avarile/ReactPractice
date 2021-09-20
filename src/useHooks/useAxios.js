import { useState, useEffect } from "react"
import axios from "axios"

axios.defaults.baseURL = ""

export const useAxios = ({ url, method, body = null, headers = null }) => {
  const [response, setResponse] = useState(null)
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(true)

  //receive { url, method, body = null, headers = null } as props, init 3 State, response as the data we expect to receive, error will bounce back if sth wrong happened during the process, loading, will is loading, just a state to let you know is loading or not.

  const fetchData = () => {
    axios[method](url, JSON.parse(headers), JSON.parse(body))
      .then((res) => {
        setResponse(res.data)
      })
      //if Data is got , response = res.data, now we can return response, main goal is achieved.

      .catch((err) => {
        setError(err)
      })
      //if the Data is unreachable for any reason, return the error, set Error = err from the server.

      .finally(() => {
        setIsLoading(false)
      })
    //after Data is got(compeletely) from the server, we can now set the loading to false.
  }

  //fetchData is the main logics for this hook to get the data

  useEffect(() => {
    fetchData()
  }, [method, url, body, headers])
  //if anything changes, reload!!! mother fucker!!

  return { response, error, isLoading }
  //pick the fruit.
}

export default useAxios

// example:

// const App = () => {
//     const { response, loading, error } = useAxios({
//         method: 'post',
//         url: '/posts',
//         headers: JSON.stringify({ accept: '*/*' }),
//         body: JSON.stringify({
//             userId: 1,
//             id: 19392,
//             title: 'title',
//             body: 'Sample text',
//         }),
//     });
//     const [data, setData] = useState([]);

//     useEffect(() => {
//         if (response !== null) {
//             setData(response);
//         }
//     }, [response]);

//     return (
//         <div className='App'>
//             <h1>Posts</h1>

//             {loading ? (
//                 <p>loading...</p>
//             ) : (
//                 <div>
//                     {error && (
//                         <div>
//                             <p>{error.message}</p>
//                         </div>
//                     )}
//                     <div>{data && <p>{data.id}</p>}</div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default App;
