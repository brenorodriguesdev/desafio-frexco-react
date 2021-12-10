import { EstoqueModel } from "../../models/estoque/estoque";

export interface CriarEstoqueUseCase {
    criar: (data: EstoqueModel) => Promise<EstoqueModel | Error>
}