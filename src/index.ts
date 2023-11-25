import Express from "express";

const server = Express();

server.get("/", (req, res) => {
  res.send({ a: "Hello World!" });
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
