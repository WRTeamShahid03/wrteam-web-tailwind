"use client";
import React, { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {

  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (pathname === "/portfolio") {
      router.replace("/our-work/development");
    } 
    if (pathname === "/blog/why-choose-a-flutter-news-app-source-code-for-your-next-project-2") {
      router.replace("/blog/why-choose-a-flutter-news-app-source-code-for-your-next-project");
    }
  }, [pathname]);

  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
