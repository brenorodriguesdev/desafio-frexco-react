import { ProdutoEstoqueModel } from "../../../domain/models/estoque/produtoEstoque";
import { ListarProdutoEstoquePorEstoqueUseCase } from "../../../domain/useCases/estoque/listar-produto-estoque-por-estoque";
import { HttpClient } from "../../contracts/http-client";

export class ListarEstoquesServiceListarProdutoEstoquePorEstoqueService implements ListarProdutoEstoquePorEstoqueUseCase {
    constructor (private readonly httpClient: HttpClient) {}
    async listar(idEstoque: number): Promise<ProdutoEstoqueModel[]> {
        const produtosEstoque = await this.httpClient.getByRoute('listarProdutoEstoquePorEstoque/' + idEstoque)
        if (produtosEstoque instanceof Error) {
            throw produtosEstoque
        }
        return produtosEstoque
    }
}