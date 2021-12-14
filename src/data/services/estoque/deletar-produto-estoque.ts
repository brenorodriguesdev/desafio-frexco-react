import { AdicionarProdutoEstoqueModel } from "../../../domain/models/estoque/adicionar-produto-estoque";
import { DeletarProdutoEstoqueUseCase } from "../../../domain/useCases/estoque/deletar-produto-estoque";
import { HttpClient } from "../../contracts/http-client";

export class DeletarProdutoEstoqueService implements DeletarProdutoEstoqueUseCase {
    constructor (private readonly httpClient: HttpClient) {}
    async deletar(data: AdicionarProdutoEstoqueModel): Promise<void | Error> {
        const result = await this.httpClient.delete(`deletarProdutoEstoque/${data.idProduto}/${data.idEstoque}`)
        if (result instanceof Error) {
            throw result
        }
    }
}