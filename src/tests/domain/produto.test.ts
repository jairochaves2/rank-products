import Produto from "../../domain/produto";

describe("Produto", () => {
  it("should create an 'produto'", () => {
    const produto = new Produto("Gasolina", 5.8).setId(1);

    expect(produto.getId()).toBe(1);
    expect(produto.getNome()).toBe("Gasolina");
    expect(produto.getValor()).toBe(5.8);
  });
});
