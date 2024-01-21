import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Home from "../pages/Home";
import Menu from "./Menu";
import Profile from "./Profile/Profile";
import AuthRoute from "./AuthRoute";
import { useEffect, useState } from "react";
import axios from "axios";
import ListMovies from "./ListMovies";


function App() {
  const [ movies , setMovies ] = useState([]);

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5001/marvels');
      console.log(response.data);
      setMovies(response.data);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  fetchData();
}, []);
  return (
    <div>
      <Menu/>
      
      <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/login" element={<Login/>}/>
         <Route path="/register" element={<Register/>}/>
         <Route path="/profile" 
         element={<AuthRoute  component={<Profile/>}/>}/>
         
         <Route path="/list" 
         element={<AuthRoute  component={<ListMovies movies={movies}/>}/>}/>
      </Routes>
      
    </div>
  )
}

export default App;
