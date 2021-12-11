import { CriarProdutoModel } from "../../../domain/models/produto/criar-produto";
import { ProdutoModel } from "../../../domain/models/produto/produto";
import { CriarProdutoUseCase } from "../../../domain/useCases/produto/criar-produto";
import { HttpClient } from "../../contracts/http-client";

export class CriarProdutoService implements CriarProdutoUseCase {
    constructor (private readonly httpClient: HttpClient) {}
    async criar(data: CriarProdutoModel): Promise<ProdutoModel | Error> {
        const produto = await this.httpClient.post(data)
        if (produto instanceof Error) {
            throw produto
        }
        return produto
    }
}