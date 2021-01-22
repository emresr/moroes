import Header from "./header";
import Header1 from "./header1";
import Sidebar from "./sidebar";
import Image from "next/image";
import Header2 from "./header2";

function Layout({ children }) {
  return (
    <div className="h-screen flex flex-col h-screen justify-between">
      <Header2 />
      <Sidebar />
      <main className="container shadow-lg mx-auto bg-white mt-24 md:mt-18">
        {children}
      </main>
    </div>
  );
}
export default Layout;
