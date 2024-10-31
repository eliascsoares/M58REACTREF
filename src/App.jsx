import { useEffect } from 'react'
import './App.css'
import Box from './components/box'
import Post from './components/post'
import { useState } from 'react'


function App() {
const [arrayOfPictures, setArrayOfPictures] = useState([]);
const [isLoggedIn, setIsLoggedIn] = useState(false);

async function fetchImages() {
  const fetchImages = await fetch("https://picsum.photos/v2/list?page=3&limit=25");
  const dataReceived = await fetchImages.json();
  setArrayOfPictures(dataReceived);
}

function loginLogout() {
  setIsLoggedIn(!isLoggedIn);
  console.log(isLoggedIn);
}


useEffect(() => {
  fetchImages()
},[])

  return (
    <>
      <button onClick={() => loginLogout()}>{isLoggedIn ? <p>Logout</p> : <p>Login</p>}</button>
      <br />
      <h1>My React Refresh App</h1>
    {isLoggedIn && 
    <> 
      {arrayOfPictures.map((item, index) => {
        return (
          <Post url={item.download_url} author={item.author}></Post>
        )
      })}
    </>  
    }
    </>
  )
  }

export default App
