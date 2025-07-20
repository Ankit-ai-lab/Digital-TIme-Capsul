// App.jsx
import React from "react";
import FileUploader from "./Components/FileUploader";
import Signup from './Components/Signup'
import Navbar from './Components/Navbar'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Mycapsul from "./Components/Mycapsul";
import Login from "./Components/Login";
import Footer from "./Components/Footer";


function App() {
  return (

<BrowserRouter>
<Navbar/>
<Routes>
  <Route path="/"element={<Home/>}></Route>
<Route path="/about"element={<About/>}></Route>
<Route path="/mycapsul" element={<Mycapsul/>}></Route>
 <Route path='/login' element={<Login/>} ></Route> 
<Route path="/signup" element={<Signup/>}></Route>
</Routes>
<Footer/>
</BrowserRouter>

  );
}

export default App;
