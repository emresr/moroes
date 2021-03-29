import React from "react";
import Header from "./header";
import Footer from "./footer";
const Layout = ({ children }) => {
  return (
    <div className="">
      <main>
        <Header className="" />

        <div class="h-screen bg-yellow-700">{children}</div>
        <Footer />
      </main>
    </div>
  );
};
export default Layout;
