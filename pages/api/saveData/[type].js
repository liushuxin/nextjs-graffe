var MongoClient = require('mongodb').MongoClient;
var uri =
  'mongodb://lanxin:lanxin12345@lanxin-shard-00-00.fct8v.mongodb.net:27017,lanxin-shard-00-01.fct8v.mongodb.net:27017,lanxin-shard-00-02.fct8v.mongodb.net:27017/lanxin?ssl=true&replicaSet=atlas-fue8a8-shard-0&authSource=admin&retryWrites=true&w=majority';
export default async function handler(req, res) {
  // 2.0
  const { type } = req.query;

  if (type === 'add') {
    MongoClient.connect(uri, async function (err, client) {
      if (err) {
        console.log(err);
        return;
      }
      const collection = client.db('lanxin').collection('user');
      try {
        console.log(req.body);
        const data = JSON.parse(req.body);
        await collection.insertOne(data);
        // console.log('Found documents =>', findResult);
        res.status(200).json({ code: 200, msg: 'SUCCESS' });
      } catch (e) {
        console.log('错误');
        console.log(e);
      }

      // perform actions on the collection object
      client.close();
    });
  } else if (type === 'query') {
    MongoClient.connect(uri, async function (err, client) {
      if (err) {
        console.log(err);
        return;
      }
      const collection = client.db('lanxin').collection('user');
      try {
        const findResult = await collection.find().toArray();
        // console.log('Found documents =>', findResult);
        res.status(200).json(findResult);
      } catch (e) {
        console.log('错误');
        console.log(e);
      }

      // perform actions on the collection object
      client.close();
    });
  }
}
