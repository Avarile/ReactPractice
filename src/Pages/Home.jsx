import axios from 'axios';
import React from 'react'

export default function Home() {

  const config = {
    data: {
      name: "Anastasia",
      job: "Primary Students",
      age: 6
    },
    headers: {
      "content-type": "application/json"
    }
  }

  axios.defaults.baseURL="https://reqres.in/api"

  const getInfo = () => {
    axios.get("/unknown")
      .then( res => console.log(res.data.data[5]))
  }

  const postData = () => {
    axios.post('/users', config)
      .then( res => console.log(res))
      .catch( err => console.log(err))
  } 

  const updateData = async () => {
    try {
      const res = await axios.put('/5', {
        name: "Aurelia",
        job: "Baby",
        age: "8 weeks"
      }
  )
      console.log(res);
    } catch (error) {
      console.log(error)
    }
  } 

  const deleteData = () => {
    axios.delete('/4')
      .then( res => console.log(res.status))
  }

  return(
    <>
    <button onClick={ () => deleteData()}>Get Info</button>
    <p></p>
    </>
  )
}























// axios.defaults.baseURL = "https://reqres.in/api"
  
// const config = {
//   data: {
//     name: "Avarile",
//     job: "Newbie Programmer",
//     age: "37",
//     email: "Availe@gmail.com"
//   },
//   headers: {
//     "content-type": "application/json"
//   }

// }

// const instanceData = () => {};

// const getData = () => {
//   axios.get("/users")     
//     .then( ({data: data}) => { console.log(data)})
// };

// const postData = () => {
//   axios.post("/users", config)
//   .then( res => console.log(res) )
//   .catch( err => console.log(err))
   
// };

// const updateData = async() => {
//   try {
//     const res = await axios.put('/2', {
//       name: "Anastsia",
//       job: "Primary Students"
//     })
//     console.log(res.data)
//   } 
//   catch (error) {
//     console.log(error);  
//   }
// }

// const deleteData = () => {
//   axios.delete("/2")
//   .then( res => console.log(res.status) )
// };

// const multiple = () => {
//   Promise.all([axios.get("https://reqres.in/api/users?page=2")])
// };

// return (
//   <>
//     <div >
//       <button onClick={getData} >Fetch Data</button>
//       <br />
//       <button onClick={postData}>Post Data</button>
//       <br />
//       <button onClick={updateData}>Update Data</button>
//       <br />
//       <button onClick={deleteData}>Delete Data</button>
//       <br />
//       <button onClick={multiple}>multiple</button>
//       <br />
//       <button onClick={instanceData}>Instance Data</button>
//       <br />
//     </div>
//   </>
// )