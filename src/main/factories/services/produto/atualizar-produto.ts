import { AtualizarProdutoService } from "../../../../data/services/produto/atualizar-produto"
import { Axios } from "../../../../infra/axios"

export const makeAtualizarProdutoService = (): AtualizarProdutoService => {
    const axios = new Axios('atualizarProduto')
    return new AtualizarProdutoService(axios)
}