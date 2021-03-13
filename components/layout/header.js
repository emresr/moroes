import Link from "next/link";
import { useState } from "react";
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCart, setIsCart] = useState(false);
  return (
    <div>
      <div className="bg-red-700 flex justify-between">
        <Link href="/">
          <a className="py-2 mx-2 md:mx-5 flex text-bold text-2xl">Moroes</a>
        </Link>

        <div className=" my-auto flex space-x-10 mr-10">
          <Link href="/">
            <a className="my-auto ">Sign Up</a>
          </Link>
          <button onClick={() => setIsCart(!isCart)}>
            <img
              src="https://www.svgrepo.com/show/55711/cart.svg"
              width="20"
              className="my-auto"
            />
          </button>
        </div>
        <div class="relative inline-block text-left">
          {isCart && (
            <div class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div class="py-1" role="none">
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                >
                  Cart
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
      {isCartOpen && <div>lmao</div>}
    </div>
  );
}

export default Header;
