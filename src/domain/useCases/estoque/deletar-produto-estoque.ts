import { AdicionarProdutoEstoqueModel } from "../../models/estoque/adicionar-produto-estoque";

export interface DeletarProdutoEstoqueUseCase {
    deletar: (data: AdicionarProdutoEstoqueModel) => Promise<void | Error>
}