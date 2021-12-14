import { ProdutoEstoqueModel } from "../../models/estoque/produtoEstoque";

export interface ListarProdutoEstoquePorEstoqueUseCase {
    listar: (idEstoque: number) => Promise<ProdutoEstoqueModel[]>
}