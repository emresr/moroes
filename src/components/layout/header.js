import React from "react";
import { useState } from "react";
import { AUTH_TOKEN } from "../../constants";
import { ImCross } from "react-icons/im";
import { useQuery } from "@apollo/client";
import { GET_CART } from "../../gql/cart/query";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const authToken = localStorage.getItem(AUTH_TOKEN);
  const [isCartOpen, setIsCartOpen] = useState(true);
  const { data, loading } = useQuery(GET_CART, {
    variables: {
      id: 9,
    },
  });
  console.log(data);
  return (
    <div className="px-2 py-5 mx-auto w-full md:px-24 lg:px-4 bg-blue-300">
      <div className="relative flex items-center justify-between">
        <a href="/" className="inline-flex items-center">
          <svg
            className="w-6 text-deep-purple-accent-400"
            viewBox="0 0 24 24"
            strokeLinejoin="round"
            strokeWidth="1"
            strokeLinecap="round"
            strokeMiterlimit="10"
            stroke="currentColor"
            fill="black"
          >
            <rect x="3" y="1" width="7" height="12" />
            <rect x="3" y="17" width="7" height="6" />
          </svg>
          <span className=" text-xl font-bold tracking-wide text-gray-800 ">
            {" "}
            Moroes
          </span>
        </a>

        <div className="flex flex-fixed">
          {authToken ? (
            <div className="flex space-x-10 mr-10">
              <div className="ml-1 pointer black">
                <input
                  className="bg-green-600 hover-bg-green-500 p-2 uppercase border-2 border-black rounded "
                  value="logout"
                  type="button"
                  onClick={() => {
                    localStorage.removeItem(AUTH_TOKEN);
                  }}
                />
              </div>
              <div className="my-auto ">
                {" "}
                <button
                  onClick={() => {
                    setIsCartOpen(!isCartOpen);
                  }}
                  className="focus:outline-none"
                >
                  <img
                    src="https://www.svgrepo.com/show/55711/cart.svg"
                    width="25"
                    className="my-auto "
                  />
                </button>
                {isCartOpen && (
                  <div className="absolute right-0 mr-5 bg-blue-500 p-2 rounded-lg bg-opacity-75">
                    <h1 className="text-lg font-bold ">Cart</h1>
                    <br />
                    <div className="flex justify-between space-x-4 p-1">
                      <div>
                        {" "}
                        <img
                          className="rounded w-full"
                          src="https://picsum.photos/50/50/?random"
                        />{" "}
                      </div>
                      <h1 className="my-auto">Mocha x2</h1>
                      <div className="bg-red-600 my-auto p-1 rounded-md">
                        <ImCross />
                      </div>
                    </div>
                    {!loading &&
                      data &&
                      data.cart.cartproducts.map((cartproduct) => (
                        <div className="flex justify-between space-x-4 p-1">
                          <div>
                            {" "}
                            <img
                              className="rounded w-full"
                              src="https://picsum.photos/50/50/?random"
                            />{" "}
                          </div>
                          <h1 className="my-auto">
                            {cartproduct.product.name} x{cartproduct.amount}
                          </h1>
                          <div className="bg-red-600 my-auto p-1 rounded-md">
                            <ImCross />
                          </div>
                        </div>
                      ))}
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div>
              <a
                href="/"
                className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
              >
                Sign up
              </a>
              <a href="/login" className="ml1 no-underline black">
                login
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Header;
