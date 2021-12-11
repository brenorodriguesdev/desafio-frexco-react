import { DeletarProdutoService } from "../../../../data/services/produto/deletar-produto"
import { Axios } from "../../../../infra/axios"

export const makeDeletarProdutoService = (): DeletarProdutoService => {
    const axios = new Axios('deletarProduto')
    return new DeletarProdutoService(axios)
}