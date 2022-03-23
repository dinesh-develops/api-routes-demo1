import clientPromise from "../../lib/mongodb";
export default async function handler(req,res) {
  const client =await clientPromise
  const db = client.db("ak-restaurant");
  const data = await db.collection("products").find({}).toArray();
  res.json(data)
}