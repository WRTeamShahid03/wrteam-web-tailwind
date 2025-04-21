"use client";
import React from "react";
import Header from "./Header";
// import Footer from "./Footer";
import NewFooter from "../Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      {children}
      {/* <Footer /> */}
      <NewFooter />
    </div>
  );
};

export default Layout;
