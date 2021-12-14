import { AdicionarProdutoEstoqueModel } from "../../models/estoque/adicionar-produto-estoque";

export interface AdicionarProdutoEstoqueUseCase {
    adicionar: (data: AdicionarProdutoEstoqueModel) => Promise<void | Error>
}