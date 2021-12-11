import { EstoqueModel } from "../../../domain/models/estoque/estoque";
import { AtualizarEstoqueUseCase } from "../../../domain/useCases/estoque/atualizar-estoque";
import { HttpClient } from "../../contracts/http-client";

export class AtualizarEstoqueService implements AtualizarEstoqueUseCase {
    constructor (private readonly httpClient: HttpClient) {}
    async atualizar(data: EstoqueModel): Promise<void | Error> {
        const result = await this.httpClient.put(data)
        if (result instanceof Error) {
            throw result
        }
    }
}