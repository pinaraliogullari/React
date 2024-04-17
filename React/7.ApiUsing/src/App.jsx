import { useEffect } from 'react';
import './App.css'
import axios from 'axios'


const baseUrl = "http://localhost:3005";
function App() {

  const getAllUsers = async () => {
    const response = await axios.get(`${baseUrl}/users`);
  }

  const getUserById = async (userId) => {
    const response = await axios.get(`${baseUrl}/users/${userId}`);
  }

  const createUser = async (newUser) => {
    const response = await axios.post(`${baseUrl}/users`, newUser);
    console.log("response", response.data);

  }

  const updateUser = async (userId, updatedUser) => {
    await axios.put(`${baseUrl}/users/${userId}`, updatedUser);
  }

  const deleteUserById = async (userId) => {
    await axios.delete(`${baseUrl}/users/${userId}`)
  }
  useEffect(() => {
    //getAllUsers()

    //getUserById(1)

    // const newUser={
    //   "username":"bilal",
    //   "password":"3636"
    // }
    // createUser(newUser)

    // updateUser("2",{
    //   "username":"serkan",
    //   "password":"1234"
    // })

    deleteUserById("1")
  }, [])

  return (
    <>

    </>
  )
}

export default App
