import Layout from "../components/layout/layout";
import Content from "../components/main/content";
import Head from "next/head";

function HomePage() {
  return (
    <div>
      <Head>
        <title>Gesova</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Content />
      </Layout>
    </div>
  );
}
export default HomePage;
