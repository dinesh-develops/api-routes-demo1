import Head from "next/head";


export default function Recepies({ recepies }) {
  return (
    <div className="container">
      <Head>
        <title>Recepies Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
          <h2>Recepies Page</h2>
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
    //const URL=process.env.NODE_ENV ==='PRODUCTION'? process.env.PROD_URL : process.env.NEXT_LOCAL_URL
  const data = await fetch(`https://api-routes-demo1.vercel.app/api/recepies`)
  const recepies = await data.json();
  return {
    props: { recepies },
  };
}
