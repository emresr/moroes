import Layout from "../components/layout/layout";
import Content from "../components/main/content";
import PriceChart from "../components/main/pricechart";
import { ApolloClient, gql, InMemoryCache } from "@apollo/client";
import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
function HomePage() {
  return (
    <div>
      <Head>
        <title>Moroes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout className="">
        <div className="grid grid-cols-12">
          <div className="ml-40 mt-5 col-span-8">
            <h1> Pick Your Meal</h1>

            <div className="w-5/6">
              <div className="bg-purple-500">
                <h1>Coffees</h1>
              </div>
            </div>
          </div>
          <div className="col-span-4">
            <PriceChart />
          </div>
        </div>
      </Layout>
    </div>
  );
}
export default HomePage;
