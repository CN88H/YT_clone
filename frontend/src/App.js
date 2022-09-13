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

function App() {

  const [thumbnails, setThumbnails] = useState([{info: 'breif discription', thumbnails: 'Thumbnail'}]);
  
  const key = {KEY}
  
  let url = `'https://www.googleapis.com/youtube/v3/search?q=&key=${key}=snippet&maxResults=10'`

  // async function getVideos(){
  //   const response = await axios.get(url);
  //   console.log(response.data);
  //   setVideos(response.data)
  // }

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

      <DisplayVideosThumbnails parentThumbnails={thumbnails}/>
      <Footer />
    </div>
  );
}

export default App;
