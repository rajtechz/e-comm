import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLayout from "./Components/Layout/UserLayout";
import Home from "./Pages/Home";
import { Toaster } from "sonner";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Toaster position="top-right" />
        <Routes>
          {/*User Layout*/}
          <Route path="/" element={<UserLayout />}>
            <Route index element={<Home />} />
          </Route>
          <Route> {/*Admin Layout*/} </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
