import Layout from "../components/layout/layout";

import { ApolloClient, gql, InMemoryCache } from "@apollo/client";
import { useState } from "react";
import Head from "next/head";
import Image from "next/image";

function HomePage() {
  const [amount, setAmount] = useState(1);
  return (
    <div>
      <Head>
        <title>Moroes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout className="">
        <div className="grid grid-cols-12">
          <div className="ml-40 mt-5 col-span-8">
            <div className="flex justify-between mx-10">
              <h1 className="text-bold text-2xl"> Pick Your Meal</h1>
              <button className="p-1 bg-red-600 rounded-lg"> Approve</button>
            </div>
            <div className="w-5/6">
              <div className="bg-purple-500">
                <h1 className="text-bold text-2xl mt-2 md:mt-5 ml-2 md:ml-5">
                  Coffees
                </h1>
                <div className="grid grid-cols-12 gap-4">
                  <div className="col-span-4 bg-white rounded">
                    {" "}
                    <img
                      className="rounded"
                      src="https://picsum.photos/200/200/?random"
                    />
                    <div className="flex justify-center">
                      {" "}
                      <h1 className="text-bold">
                        Donut <span className="text-semibold">$2.99</span>{" "}
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
                  <div className="col-span-4 bg-white">
                    {" "}
                    <img
                      className="block "
                      src="https://picsum.photos/200/200/?random"
                    />
                  </div>
                  <div className="col-span-4 bg-white">
                    {" "}
                    <img
                      className="block "
                      src="https://picsum.photos/200/200/?random"
                    />
                  </div>
                  <div className="col-span-4 bg-white">
                    {" "}
                    <img
                      className="block "
                      src="https://picsum.photos/200/200/?random"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-4">
            <h1>Best Moro Couples</h1>
          </div>
        </div>
      </Layout>
    </div>
  );
}
export default HomePage;
