import Layout from "../../components/dashboard/layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
function Orders() {
  return (
    <div>
      <Head>
        <title>Dashboard | Moroes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div>
          <div className="mt-5 mx-3  ">
            <table className="min-w-full leading-normal mx-auto">
              <thead>
                <tr>
                  <th>User</th>
                  <th>Items</th>
                  <th>Pickup Date</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                <Link href="/order/">
                  <tr>
                    <td>
                      {" "}
                      <a>Emre</a>
                    </td>
                    <td>Mocha x2</td>
                    <td>13:38</td>
                    <td>9.55</td>
                  </tr>
                </Link>
              </tbody>
            </table>
          </div>
        </div>
      </Layout>
    </div>
  );
}
export default Orders;
