import Head from "next/head";
import clientPromise from "../lib/mongodb";

export default function Home({ recepies }) {
  return (
    <div className="container">
      <Head>
        <title>API-Routes Demo APP</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        {recepies &&
          recepies.map((recepie) => (
            <>
              <h2>{recepie._id}</h2>
              <h2>{recepie.title}</h2>
              <h2>{recepie.desc}</h2>
              <h2>{recepie.price}</h2>
              <h1>**************************</h1>
            </>
          ))}
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const client = await clientPromise;
  const db = client.db("ak-restaurant");
  const data = await db.collection("products").find({}).toArray();
  const recepies = JSON.parse(JSON.stringify(data));
  return {
    props: { recepies },
  };
}
