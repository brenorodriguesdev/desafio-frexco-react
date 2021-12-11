import { DeletarEstoqueUseCase } from "../../../domain/useCases/estoque/deletar-estoque";
import { HttpClient } from "../../contracts/http-client";

export class DeletarEstoqueService implements DeletarEstoqueUseCase {
    constructor (private readonly httpClient: HttpClient) {}
    async deletar(id: number): Promise<void | Error> {
        const result = await this.httpClient.delete('deletarEstoque/' + id)
        if (result instanceof Error) {
            throw result
        }
    }
}