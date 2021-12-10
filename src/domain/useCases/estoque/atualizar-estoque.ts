import { EstoqueModel } from "../../models/estoque/estoque";

export interface AtualizarEstoqueUseCase {
    atualizar: (data: EstoqueModel) => Promise<void | Error>
}