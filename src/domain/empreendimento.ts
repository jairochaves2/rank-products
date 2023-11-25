import Produto from "./produto";

export default class Empreendimento {
  private id?: number;
  private produtos?: Produto[];
  constructor(private nome: string) {}

  getId() {
    return this.id;
  }

  getNome() {
    return this.nome;
  }

  getProdutos() {
    return this.produtos;
  }

  setId(id: number) {
    this.id = id;
    return this;
  }

  setNome(nome: string) {
    this.nome = nome;
    return this;
  }

  addProduto(produto: Produto) {
    if (!this.produtos) {
      this.produtos = [];
    }
    this.produtos.push(produto);
    return this;
  }
}
