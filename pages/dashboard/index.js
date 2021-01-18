import Layout from "../../components/dashboard/layout";
import { ApolloClient, gql, InMemoryCache } from "@apollo/client";
import { useState } from "react";
import Head from "next/head";
import Image from "next/image";

function Dashboard() {
  return (
    <div>
      <Head>
        <title>Dashboard | Moroes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <h1> Moroes best menu system</h1>
      </Layout>
    </div>
  );
}
export default Dashboard;
