import express from "express";
import {graphqlHTTP} from "express-graphql";
import schema from "./schema.js";
import {connected} from "./database.js"

const app = express();

connected()

app.get("/", (req, res) => {
  res.json("Hola");
});

app.use("/graphql",graphqlHTTP({
    graphiql: true,
    schema: schema,
    context:{
      messageId: 'test'
    }
  })
);

app.listen(3000, () => {
  console.log(`Example app listening on port 3000`);
});
