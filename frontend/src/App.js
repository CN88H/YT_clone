// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";

import {KEY} from "./localKey"
import DisplayVideosThumbnails from "./components/DisplayVideosThumbnails/DisplayVideosThumbnails";
import SearchForVideos from "./components/SearchForVideos/SearchForVideos";
import { useState, useEffect } from "react";
import axios from "axios";
import {DATA} from "./localData";

function App() {

  const [videos, setVideos] = useState(DATA.items);
  
  // const key = {KEY}
  
  // let url = `'https://www.googleapis.com/youtube/v3/search?q=&key==snippet&maxResults=10'`

  // useEffect(() => {
  //   getVideos();
  // }, []);

  // async function getVideos(){
  //   const response = await axios.get('https://jsonplaceholder.typicode.com/users');
  //   console.log(response.data);
  //   setVideos(response.data)
  // }

  useEffect(() => {
    // comment out fetchVideo when using local DATA.
    // fetchVideos()
  }, [])

  const fetchVideos = async () => {
    try {
      let response = await axios.get('https://jsonplaceholder.typicode.com/users');
      console.log(response.data)
      setVideos(response.data)
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <SearchForVideos />
      {/* <div>
          {videos && videos.map(video => {
            return <li>{video.snippet.title}</li>
          })}
      </div> */}
      
      <DisplayVideosThumbnails videos={videos}/>

      <Footer />
    </div>
  );
}

export default App;
