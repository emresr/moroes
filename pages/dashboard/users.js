import Layout from "../../components/dashboard/layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
function Users() {
  return (
    <div>
      <Head>
        <title>Dashboard | Moroes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div className="mt-5 mx-3">
          <h1> All Users</h1>
          <ul>
            <li>
              <div className="my-2 border-solid border-2  w-40 	 mx-8 ">
                <Link href="#">
                  <a> Emre</a>
                </Link>
                <p> ADMIN </p>
                <p> Signup Date : 10.12.1998</p>
              </div>
            </li>
          </ul>
        </div>
      </Layout>
    </div>
  );
}
export default Users;
