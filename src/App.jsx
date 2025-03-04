import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLayout from "./Components/Layout/UserLayout";
import Hero from "./Components/Layout/Hero";
import Home from "./Pages/Home";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/*User Layout*/}
          <Route path="/" element={<UserLayout/>}>
          <Route index element={<Home/>}/>
          
          </Route>
          <Route> {/*Admin Layout*/} </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
