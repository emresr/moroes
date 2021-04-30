import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { GET_PRODUCTS } from "../gql/product/query";
import { ADD_CART_PRODUCT } from "../gql/cart/mutation";

const Main = () => {
   const [amount, setAmount] = useState(0);
   const { data, loading } = useQuery(GET_PRODUCTS);
   console.log(data);

   const [addNew] = useMutation(ADD_CART_PRODUCT, {
      variables: {
         cartId: 1,
         cartproductId: 7,
      },
   });

   return (
      <div>
         <div className="grid grid-cols-12">
            <div className="mx-10 md:mx-2 col-span-12 md:col-span-6 md:col-start-2  ">
               <h1 className="font-bold text-2xl">Pick your snacks</h1>
               <div className="grid grid-cols-3 gap-3">
                  {!loading &&
                     data &&
                     data.products.map((product) => (
                        <div className="bg-white rounded">
                           {" "}
                           <img
                              className="rounded w-full"
                              src="https://picsum.photos/200/200/?random"
                           />
                           <div className="flex justify-center">
                              {" "}
                              <h1 className="text-bold">
                                 {product.name}{" "}
                                 <span className="text-semibold">
                                    {" "}
                                    ${product.price}
                                 </span>{" "}
                              </h1>
                           </div>
                           <div className="bg-yellow-500 ">
                              <div className="flex justify-evenly">
                                 <button
                                    className="p-1 pr-2 rounded-l-xl text-bold bg-red-500 text-white text-2xl"
                                    onClick={() => setAmount(amount - 1)}
                                    disabled={amount <= 1}
                                 >
                                    -
                                 </button>
                                 <h1 className="my-auto "> {amount}</h1>
                                 <button
                                    className="p-1 pl-2 rounded-r-xl text-bold bg-red-500 text-white text-2xl"
                                    onClick={() => setAmount(amount + 1)}
                                 >
                                    +
                                 </button>
                                 <button onClick={addNew}>
                                    <img
                                       src="https://www.svgrepo.com/show/55711/cart.svg"
                                       width="20"
                                       className="my-auto"
                                    />
                                 </button>
                              </div>
                           </div>
                        </div>
                     ))}
               </div>
            </div>
            <div className="col-span-4 text-center">
               <h1 className="text-lg my-1 font-bold">Todays Deals</h1>
               <div className="grid grid-cols-2 gap-1">
                  <div
                     className="border bg-gray-900 text-center py-3 text-gray-50 shadow-5xl hover:bg-gray-700 transition duration-400"
                     style={{
                        backgroundImage: `url(https://images.unsplash.com/photo-1612392166886-ee8475b03af2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80) bottom center no-repeat`,
                     }}
                  >
                     <h1>x2 Hot Dog</h1>
                     <h1 className="text-xs">&</h1>
                     <h1>Mocha</h1>
                     <h1>Only for $4</h1>
                  </div>
                  <div className="border bg-gray-900 text-center py-3 text-gray-50 shadow-5xl hover:bg-gray-700 transition duration-400">
                     <h1>x2 Hot Dog</h1>
                     <h1 className="text-xs">&</h1>
                     <h1>Mocha</h1>
                     <h1>Only for $4</h1>
                  </div>
                  <div className="border bg-gray-600 text-center py-1 text-gray-50">
                     <h1>x2 Hot Dog</h1>
                     <h1 className="text-xs">&</h1>
                     <h1>Mocha</h1>
                     <h1>Only for $4</h1>
                  </div>
                  <div className="border bg-gray-600 text-center py-1 text-gray-50">
                     <h1>x2 Hot Dog</h1>
                     <h1 className="text-xs">&</h1>
                     <h1>Mocha</h1>
                     <h1>Only for $4</h1>
                  </div>
               </div>
            </div>{" "}
         </div>{" "}
      </div>
   );
};

export default Main;
