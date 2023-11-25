import Empreendimento from "../models/empreendimento";

export default interface EmpreendimentoRepository {
  add(empreendimento: Empreendimento): Promise<Empreendimento>;
  getAll(): Promise<Empreendimento[]>;
  get(id: number): Promise<Empreendimento | undefined>;
  update(empreendimento: Empreendimento): Promise<Empreendimento>;
  delete(id: number): Promise<void>;
}
