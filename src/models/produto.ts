export default class Produto {
  private id?: number;
  constructor(private nome: string, private valor: number) {}

  getId() {
    return this.id;
  }

  getNome() {
    return this.nome;
  }

  getValor() {
    return this.valor;
  }

  setId(id: number) {
    this.id = id;
    return this;
  }
}
