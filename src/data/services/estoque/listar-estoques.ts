import { EstoqueModel } from "../../../domain/models/estoque/estoque";
import { ListarEstoquesUseCase } from "../../../domain/useCases/estoque/listar-estoques";
import { HttpClient } from "../../contracts/http-client";

export class ListarEstoquesService implements ListarEstoquesUseCase {
    constructor (private readonly httpClient: HttpClient) {}
    async listar(): Promise<EstoqueModel[]> {
        const estoques = await this.httpClient.get({})
        if (estoques instanceof Error) {
            throw estoques
        }
        return estoques
    }
}