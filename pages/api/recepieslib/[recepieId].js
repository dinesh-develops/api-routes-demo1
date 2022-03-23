import { ObjectId } from "mongodb";
import clientPromise from "../../../lib/mongodb";
export default async function handler(req, res) {
  const {recepieId} = req.query;
  const client =await clientPromise
  const db = client.db("ak-restaurant");
  const data = await db.collection("products").findOne({_id: new ObjectId(recepieId)});
  //console.log(data)
  res.json(data);
}
