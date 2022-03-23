import Head from "next/head";
import { useRouter } from "next/router";

const recepieID = ({ recepies }) => {
  const router = useRouter();
  const {
    query: { recepieID },
  } = router;

  return (
    <div className="container">
      <Head>
        <title>Recepies By Id</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
          <h2>Recepies By Id</h2>
            <>
              <h2>{recepies._id}</h2>
              <h2>{recepies.title}</h2>
              <h2>{recepies.desc}</h2>
              <h2>{recepies.price}</h2>
              <h1>**************************</h1>
            </>
      </div>
    </div>
  );
};

export default recepieID;
export async function getServerSideProps(context) {
    //const URL=process.env.NODE_ENV ==='PRODUCTION'? process.env.PROD_URL : process.env.NEXT_LOCAL_URL
  const data = await fetch(`https://api-routes-demo1.vercel.app/api/recepieslib/${context.query.recepieID}`)
  //console.log(`http://localhost:3000/api/recepieslib/${context.query.recepieID}`)
  const recepies = await data.json();
  return {
    props: { recepies },
  };
}
