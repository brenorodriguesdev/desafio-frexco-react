import { CriarProdutoService } from "../../../../data/services/produto/criar-produto"
import { Axios } from "../../../../infra/axios"

export const makeCriarProdutoService = (): CriarProdutoService => {
    const axios = new Axios('criarProduto')
    return new CriarProdutoService(axios)
}