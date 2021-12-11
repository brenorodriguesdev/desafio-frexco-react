import { CategoriaModel } from "../../../domain/models/produto/categoria";
import { ListarCategoriasUseCase } from "../../../domain/useCases/produto/listar-categorias";
import { HttpClient } from "../../contracts/http-client";

export class ListarCategoriasService implements ListarCategoriasUseCase {
    constructor (private readonly httpClient: HttpClient) {}
    async listar(): Promise<CategoriaModel[]> {
        const categorias = await this.httpClient.get({})
        if (categorias instanceof Error) {
            throw categorias
        }
        return categorias
    }
}