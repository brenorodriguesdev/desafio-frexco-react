import { DeletarProdutoUseCase } from "../../../domain/useCases/produto/deletar-produto";
import { HttpClient } from "../../contracts/http-client";

export class DeletarProdutoService implements DeletarProdutoUseCase {
    constructor (private readonly httpClient: HttpClient) {}
    async deletar(id: number): Promise<void | Error> {
        const result = await this.httpClient.delete('deletarProduto/' + id)
        if (result instanceof Error) {
            throw result
        }
    }
}