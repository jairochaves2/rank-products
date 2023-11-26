import Empreendimento from "../../domain/models/empreendimento";
import { EmpreendimentoInMemoryAdapter } from "../../infra/adapters/empreendimento-in-memory-adapter";

let empreendimentosAdicionados: Empreendimento[] = [];
let empreendimentoAdapter = new EmpreendimentoInMemoryAdapter();

function removeEmpreendimentos() {
  empreendimentosAdicionados.forEach(async (empreendimento) => {
    await empreendimentoAdapter.delete(empreendimento.getId()!);
  });
}

function addToRemove(empreendimento: Empreendimento) {
  empreendimentosAdicionados.push(empreendimento);
}

describe("EmpreendimentoInMemoryAdapter", () => {
  afterEach(() => {
    removeEmpreendimentos();
  });

  it("should add an empreendimento", async () => {
    const empreendimento = new Empreendimento("Teste");
    addToRemove(empreendimento);
    await empreendimentoAdapter.add(empreendimento);
    const empreendimentos = await empreendimentoAdapter.getAll();

    expect(empreendimentos).toContain(empreendimento);
  });

  it("should get an empreendimento", async () => {
    const empreendimento = new Empreendimento("Teste");
    addToRemove(empreendimento);
    await empreendimentoAdapter.add(empreendimento);
    const empreendimentoEncontrado = await empreendimentoAdapter.get(
      empreendimento.getId()!
    );

    expect(empreendimentoEncontrado).toEqual(empreendimento);
  });

  it("should update an empreendimento", async () => {
    const empreendimento = new Empreendimento("Teste");
    addToRemove(empreendimento);
    const added = await empreendimentoAdapter.add(empreendimento);
    const id = added.getId();

    const updated = new Empreendimento("Desconhecido");
    updated.setId(id!);

    await empreendimentoAdapter.update(updated);
    const found = await empreendimentoAdapter.get(id!);

    expect(found?.getNome()).toEqual("Desconhecido");
  });

  it("should handle exception when update is call without id", async () => {
    const empreendimento = new Empreendimento("Teste");
    addToRemove(empreendimento);

    await expect(
      async () => await empreendimentoAdapter.update(empreendimento)
    ).rejects.toThrow("Id não informado");
  });

  it("should delete an empreendimento", async () => {
    const empreendimento = new Empreendimento("Teste");
    addToRemove(empreendimento);
    const added = await empreendimentoAdapter.add(empreendimento);
    const id = added.getId();

    await empreendimentoAdapter.delete(id!);
    const found = await empreendimentoAdapter.get(id!);

    expect(found).toBeUndefined();
  });

  it("should get all empreendimentos", async () => {
    const empreendimento = new Empreendimento("Teste");
    const empreendimento2 = new Empreendimento("Teste2");

    addToRemove(empreendimento);
    addToRemove(empreendimento2);

    await empreendimentoAdapter.add(empreendimento);
    await empreendimentoAdapter.add(empreendimento2);

    const empreendimentos = await empreendimentoAdapter.getAll();

    expect(empreendimentos).toContain(empreendimento);
    expect(empreendimentos).toContain(empreendimento2);
  });
});
