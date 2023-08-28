import { client } from "..";


export default async function mongodbConnection(req, res) {
    try {

        const category = req?.query?.category

  



      await client.connect();
      const productsCollection = await client
        .db("pc-builder")
        .collection("products");
      if (req?.method === "GET") {
        const products = await productsCollection.find({category}).toArray()
        res.send({ message: "success", status: 200,  data: products });
      }
    } finally {
    
    }
  }
  mongodbConnection()