import { CriarProdutoModel } from "../../models/produto/criar-produto";
import { ProdutoModel } from "../../models/produto/produto";

export interface CriarProdutoUseCase {
    criar: (data: CriarProdutoModel) => Promise<ProdutoModel | Error>
}