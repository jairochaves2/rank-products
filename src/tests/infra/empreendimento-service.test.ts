import { faker } from "@faker-js/faker/locale/pt_BR";
import EmpreendimentoRepository from "../../domain/interfaces/repositories/empreendimento-repository";
import Empreendimento from "../../domain/models/empreendimento";
import EmpreendimentoService from "../../infra/servicies/empreendimento-service";

const empreendimentoAdapter: EmpreendimentoRepository = {
  add: jest.fn(),
  getAll: jest.fn(),
  get: jest.fn(),
  update: jest.fn(),
  delete: jest.fn(),
};
const empreendimentoService = new EmpreendimentoService(empreendimentoAdapter);

describe("EmpreendimentoService", () => {
  it("should be defined", () => {
    expect(empreendimentoService).toBeDefined();
  });

  it("should add an empreendimento", async () => {
    const empreendimento = new Empreendimento("Teste");
    await empreendimentoService.add(empreendimento);

    expect(empreendimentoAdapter.add).toHaveBeenCalledWith(empreendimento);
  });

  it("should get an empreendimento", async () => {
    const fakerId = faker.number.int();

    await empreendimentoService.get(fakerId);

    expect(empreendimentoAdapter.get).toHaveBeenCalledWith(fakerId);
  });

  it("should update an empreendimento", async () => {
    const empreendimento = new Empreendimento("Teste");
    await empreendimentoService.update(empreendimento);

    expect(empreendimentoAdapter.update).toHaveBeenCalledWith(empreendimento);
  });

  it("should delete an empreendimento", async () => {
    const fakerId = faker.number.int();

    empreendimentoService.delete(fakerId);

    expect(empreendimentoAdapter.delete).toHaveBeenCalledWith(fakerId);
  });

  it("should get all empreendimentos", async () => {
    await empreendimentoService.getAll();

    expect(empreendimentoAdapter.getAll).toHaveBeenCalled();
  });
});
