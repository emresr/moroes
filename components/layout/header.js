import Link from "next/link";
import { useState } from "react";
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div>
      <div className="bg-red-700 flex justify-between">
        <Link href="/">
          <a className="py-2 mx-2 md:mx-5 flex text-bold text-2xl">Moroes</a>
        </Link>

        <div className=" my-auto">
          <Link href="/">
            <a className="my-auto ">Sign Up</a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
