import React from "react";

const Profile = () => {
  return (
    <div className="mx-5 md:mx-10">
      <div className="md:grid md:grid-cols-12 flex ">
        <div className="md:col-span-8 ">
          <ul className="bg-yellow-900 rounded-lg flex space-x-3 ">
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
        </div>
        <div className="md:col-span-4 ">Info</div>
      </div>
    </div>
  );
};
export default Profile;
