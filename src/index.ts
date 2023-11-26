import server from "./server";

server.get("/", (req, res) => {
  res.send({ a: "Hello World!" });
});

const app = server.listen(3000, () => {
  console.log("Server is running on port 3000");
});

export { app };
