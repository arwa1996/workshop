import express from "express";
import expressGraphQL from "express-graphql";
const app = express();
app.use(
  "/graphql",
  schema,
  expressGraphQL({
    graphiql: true,
  })
);
app.listen(4000, () => {
  console.log("listening on 4000");
});
