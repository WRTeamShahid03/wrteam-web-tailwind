"use client";
import React, { useEffect, useState } from "react";
import Header from "./Header";
// import Footer from "./Footer";
import NewFooter from "../Footer";
import { useRouter } from "next/router";

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
