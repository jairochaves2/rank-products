import supertest from "supertest";

describe("index", () => {
  it('should return { a: "Hello World!" }', async () => {
    const response = await supertest("http://localhost:3000").get("/");

    expect(response.body).toEqual({ a: "Hello World!" });
  });
});
