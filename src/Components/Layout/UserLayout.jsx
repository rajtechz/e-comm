import React from "react";
import Header from "../Common/Header";
import Footer from "../Common/Footer";
import { Outlet } from "react-router-dom";

function UserLayout() {
  return (
    <>
      {/* Header section  */}
      <Header />
      {/* Hero/Main section  */}
      <main>
        <Outlet />
      </main>
      {/* Footer section  */}
      <Footer />
    </>
  );
}

export default UserLayout;
