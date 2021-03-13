import Layout from "../components/layout/layout";
import Head from "next/head";

function Cart() {
  return (
    <div>
      <Head>
        <title>Cart | Moroes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div className="">
          <h1> Items in Cart</h1>
        </div>
      </Layout>
    </div>
  );
}
export default Cart;
