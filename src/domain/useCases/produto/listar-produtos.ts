import { ProdutoModel } from "../../models/produto/produto";

export interface ListarProdutosUseCase {
    listar: () => Promise<ProdutoModel[]>
}