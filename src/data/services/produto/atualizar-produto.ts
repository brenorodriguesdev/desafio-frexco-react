import { AtualizarProdutoModel } from "../../../domain/models/produto/atualizar-produto";
import { AtualizarProdutoUseCase } from "../../../domain/useCases/produto/atualizar-produto";
import { HttpClient } from "../../contracts/http-client";

export class AtualizarProdutoService implements AtualizarProdutoUseCase {
    constructor (private readonly httpClient: HttpClient) {}
    async atualizar(data: AtualizarProdutoModel): Promise<void | Error> {
        const result = await this.httpClient.put(data)
        if (result instanceof Error) {
            throw result
        }
    }
}