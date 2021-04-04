import React, { useState } from "react";

const Profile = () => {
  const [isOrdersOpen, setIsOrdersOpen] = useState(true);
  return (
    <div className="mx-5 md:mx-10">
      <div className="md:grid md:grid-cols-12 flex ">
        <div className="md:col-span-8 ">
          <ul className="bg-yellow-900 rounded-lg flex space-x-3 mt-6">
            <li>
              <button className="hover:bg-yellow-800 transition rounded p-1">
                Latest Orders
              </button>
            </li>
            <li>
              {" "}
              <button className="hover:bg-yellow-800 transition rounded p-1">
                My Favorites{" "}
              </button>
            </li>
          </ul>
          <div className="mt-10">
            {isOrdersOpen && (
              <div>
                <div className="rounded-md p-2 flex justify-between mx-20">
                  <div>
                    <h1 className="text-lg "> x2 Mocha,x3 Donut</h1>
                    <h1 className="flex justify-center"> $3.99</h1>{" "}
                  </div>
                  <h1 className="my-auto">Yesterday</h1>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="md:col-span-4 p-6">
          <div className="flex  space-x-3">
            <img
              className="rounded "
              src="https://picsum.photos/75/75/?random"
            />
            <h1 className="my-auto font-bold text-3xl">Emre</h1>
          </div>
          <h1 className="mt-5"> Member since May 18</h1>
          <h1>Last order April 19</h1>
        </div>
      </div>
    </div>
  );
};
export default Profile;
