import { ProdutoModel } from "../../../domain/models/produto/produto";
import { ListarProdutosUseCase } from "../../../domain/useCases/produto/listar-produtos";
import { HttpClient } from "../../contracts/http-client";

export class ListarProdutosService implements ListarProdutosUseCase {
    constructor (private readonly httpClient: HttpClient) {}
    async listar(): Promise<ProdutoModel[]> {
        const produtos = await this.httpClient.get({})
        if (produtos instanceof Error) {
            throw produtos
        }
        return produtos
    }
}