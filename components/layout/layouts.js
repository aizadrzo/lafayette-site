import React from "react";
import Footer from "./footer";
import Nav from "./nav";

const Layout = ({ children }) => (
  <div className="min-h-screen flex flex-col">
    <Nav />
    <main className="flex-1">{children}</main>
    <Footer />
  </div>
);

export default Layout;
