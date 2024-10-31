import { useEffect } from 'react'
import './App.css'
import Box from './components/box'
import Post from './components/post'
import { useState } from 'react'


function App() {
const [arrayOfPictures, setArrayofPictures] = useState([]);

async function fetchImages() {
  const fetchImages = await fetch("https://picsum.photos/v2/list?page=3&limit=25");
  const dataReceived = await fetchImages.json();
  setArrayofPictures(dataReceived);
}

useEffect(() => {
  fetchImages()
},[])

  return (
    <>
      <button onClick={(event) => fetchImages()}>Get Images</button>
      <h1>My React Refresh App</h1>
      {arrayOfPictures.map((item, index) => {
        return (
          <Post url={item.download_url} author={item.author}></Post>
        )
      })}      

    </>
  )
}

export default App
