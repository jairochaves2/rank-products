import Empreendimento from "../../domain/models/empreendimento";
import EmpreendimentoRepository from "../../domain/interfaces/repositories/empreendimento-repository";

const inMemory = new Map<number, Empreendimento>();

export class EmpreendimentoInMemoryAdapter implements EmpreendimentoRepository {
  add(empreendimento: Empreendimento): Promise<Empreendimento> {
    const id = inMemory.size + 1;

    empreendimento.setId(id);
    inMemory.set(id, empreendimento);
    return Promise.resolve(empreendimento);
  }
  getAll(): Promise<Empreendimento[]> {
    return Promise.resolve([...inMemory.values()]);
  }
  get(id: number): Promise<Empreendimento | undefined> {
    return Promise.resolve(inMemory.get(id));
  }
  update(empreendimento: Empreendimento): Promise<Empreendimento> {
    const id = empreendimento.getId();
    if (!id) {
      throw new Error("Id não informado");
    }

    inMemory.set(id, empreendimento);
    return Promise.resolve(empreendimento);
  }
  delete(id: number): Promise<void> {
    inMemory.delete(id);
    return Promise.resolve();
  }
}
