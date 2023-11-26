import supertest from "supertest";
import { app } from "..";

describe("index", () => {
  afterAll(() => {
    app.close();
  });

  it('should return { a: "Hello World!" }', async () => {
    const response = await supertest("http://localhost:3000").get("/");

    expect(response.body).toEqual({ a: "Hello World!" });
  });
});
