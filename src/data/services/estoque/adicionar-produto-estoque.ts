import { AdicionarProdutoEstoqueModel } from "../../../domain/models/estoque/adicionar-produto-estoque";
import { AdicionarProdutoEstoqueUseCase } from "../../../domain/useCases/estoque/adicionar-produto-estoque";
import { HttpClient } from "../../contracts/http-client";

export class AdicionarProdutoEstoqueService implements AdicionarProdutoEstoqueUseCase {
    constructor (private readonly httpClient: HttpClient) {}
    async adicionar(data: AdicionarProdutoEstoqueModel): Promise<void | Error> {
        const result = await this.httpClient.post(data)
        if (result instanceof Error) {
            throw result
        }
    }
}