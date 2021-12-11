import { ProdutoModel } from "../../../domain/models/produto/produto";
import { BuscarProdutoUseCase } from "../../../domain/useCases/produto/buscar-produto";
import { HttpClient } from "../../contracts/http-client";

export class BuscarProdutoService implements BuscarProdutoUseCase {
    constructor (private readonly httpClient: HttpClient) {}
    async buscar(id: number): Promise<ProdutoModel | Error> {
        const produto = await this.httpClient.getByRoute('buscarProduto/' + id)
        if (produto instanceof Error) {
            throw produto
        }
        return produto
    }
}