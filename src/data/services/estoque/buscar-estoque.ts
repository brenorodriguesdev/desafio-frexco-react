import { ProdutoModel } from "../../../domain/models/produto/produto";
import { BuscarEstoqueUseCase } from "../../../domain/useCases/estoque/buscar-produto";
import { HttpClient } from "../../contracts/http-client";

export class BuscarEstoqueService implements BuscarEstoqueUseCase {
    constructor (private readonly httpClient: HttpClient) {}
    async buscar(id: number): Promise<ProdutoModel | Error> {
        const estoque = await this.httpClient.getByRoute('buscarEstoque/' + id)
        if (estoque instanceof Error) {
            throw estoque
        }
        return estoque
    }
}