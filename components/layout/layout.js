import Header from "./header";
import Image from "next/image";

function Layout({ children }) {
  return (
    <div className="h-screen bg-green-600">
      <Header />
      <main className="">{children}</main>
    </div>
  );
}
export default Layout;
