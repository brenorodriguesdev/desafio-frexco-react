import { EstoqueModel } from "../../../domain/models/estoque/estoque";
import { CriarEstoqueUseCase } from "../../../domain/useCases/estoque/criar-estoque";
import { HttpClient } from "../../contracts/http-client";

export class CriarEstoqueService implements CriarEstoqueUseCase {
    constructor (private readonly httpClient: HttpClient) {}
    async criar(data: EstoqueModel): Promise<EstoqueModel | Error> {
        const estoque = await this.httpClient.post(data)
        if (estoque instanceof Error) {
            throw estoque
        }
        return estoque
    }
}