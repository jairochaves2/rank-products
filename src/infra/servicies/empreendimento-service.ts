import Empreendimento from "../../domain/models/empreendimento";
import EmpreendimentoRepository from "../../domain/interfaces/repositories/empreendimento-repository";
import EmpreendimentoServiceRepo from "../../domain/interfaces/repositories/servicies/empreendimento-service-repo";

export default class EmpreendimentoService
  implements EmpreendimentoServiceRepo
{
  constructor(private readonly empreendimentoRepo: EmpreendimentoRepository) {}

  add(empreendimento: Empreendimento): Promise<Empreendimento> {
    return this.empreendimentoRepo.add(empreendimento);
  }
  getAll(): Promise<Empreendimento[]> {
    return this.empreendimentoRepo.getAll();
  }
  get(id: number): Promise<Empreendimento | undefined> {
    return this.empreendimentoRepo.get(id);
  }
  update(empreendimento: Empreendimento): Promise<Empreendimento> {
    return this.empreendimentoRepo.update(empreendimento);
  }
  delete(id: number): Promise<void> {
    return this.empreendimentoRepo.delete(id);
  }
}
