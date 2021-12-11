import { BuscarProdutoService } from "../../../../data/services/produto/buscar-produto"
import { Axios } from "../../../../infra/axios"

export const makeBuscarProdutoService = (): BuscarProdutoService => {
    const axios = new Axios('buscarProduto')
    return new BuscarProdutoService(axios)
}