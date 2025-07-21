// App.jsx
import React from "react";
import FileUploader from "./Components/FileUploader";
import Signup from './Components/Signup'
import Navbar from './Components/Navbar'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./Pages/Home";

import Mycapsul from "./Components/Mycapsul";
import Login from "./Components/Login";
import Footer from "./Components/Footer";
import TotalCapsule from "./Components/Mycapsul/TotalCapsule";
import CreateCapsulForm from "./Components/Mycapsul/CreateCapsulForm";

function App() {
  return (

<BrowserRouter>

<Routes>
  <Route path="/"element={<Home/>}></Route>

<Route path="/mycapsul" element={<Mycapsul/>}></Route>
 <Route path='/login' element={<Login/>} ></Route> 
<Route path="/signup" element={<Signup/>}></Route>
<Route path="/total" element={<TotalCapsule/>}></Route>
<Route path="/create" element={<CreateCapsulForm/>}></Route>
</Routes>

<Footer/>
</BrowserRouter>

  );
}

export default App;
