import Empreendimento from "./empreendimento";
import Produto from "./produto";

describe("Empreendimento", () => {
  it("should create an 'empreendimento'", () => {
    const empreendimento = new Empreendimento("Empreendimento");
    expect(empreendimento.getNome()).toBe("Empreendimento");
  });

  it("should create an 'empreendimento' with id", () => {
    const empreendimento = new Empreendimento("Empreendimento").setId(1);
    expect(empreendimento.getId()).toBe(1);
  });

  it("should create an 'empreendimento' with produtos", () => {
    const produto1 = new Produto("Gasolina", 5.8);
    const produto2 = new Produto("Diesel", 7.8);
    const empreendimento = new Empreendimento("Empreendimento")
      .addProduto(produto1)
      .addProduto(produto2);

    expect(empreendimento.getProdutos()).toHaveLength(2);
    expect(empreendimento.getProdutos()).toContain(produto1);
    expect(empreendimento.getProdutos()).toContain(produto2);
  });

  it("should create an 'empreendimento' with id and produtos", () => {
    const produto1 = new Produto("Gasolina", 5.8);
    const produto2 = new Produto("Diesel", 7.8);
    const empreendimento = new Empreendimento("Empreendimento")
      .setId(5)
      .addProduto(produto1)
      .addProduto(produto2);

    expect(empreendimento.getId()).toBe(5);
    expect(empreendimento.getProdutos()).toHaveLength(2);
  })

  it("should create an 'empreendimento' nome and change it", () => {
    const empreendimento = new Empreendimento("Empreendimento");
    empreendimento.setNome("Novo nome");
    expect(empreendimento.getNome()).toBe("Novo nome");
    
  })
});
