import Header from "./header";

import Image from "next/image";

function Layout({ children }) {
  return (
    <div className="h-screen flex flex-col h-screen justify-between">
      <Header />
      <main className="mb-auto h-10 bg-green-500 flex-grow">{children}</main>
    </div>
  );
}
export default Layout;
