const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.gist0kn.mongodb.net/?retryWrites=true&w=majority`;


export const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export default async function mongodbConnection(req, res) {
  try {
    await client.connect();


    const productsCollection = await client
      .db("pc-builder")
      .collection("products");
    if (req.method === "GET") {
      const products = await productsCollection.find().toArray()
      res.send({ message: "success", status: 200,  data: products });
    }
  } finally {

  }
}
mongodbConnection()