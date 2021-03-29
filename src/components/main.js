import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_PRODUCTS } from "../gql/product/query";

const Main = () => {
  const [amount, setAmount] = useState(0);
  const { data, loading } = useQuery(GET_PRODUCTS);
  console.log(data);

  return (
    <div>
      <div className="grid grid-cols-12">
        <div className="mx-10 md:mx-2 col-span-12 md:col-span-6 md:col-start-3">
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
                      <span className="text-semibold"> ${product.price}</span>{" "}
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
                      <img
                        src="https://www.svgrepo.com/show/55711/cart.svg"
                        width="20"
                        className="my-auto"
                      />
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default Main;
