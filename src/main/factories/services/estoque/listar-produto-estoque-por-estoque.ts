import { ListarEstoquesServiceListarProdutoEstoquePorEstoqueService } from "../../../../data/services/estoque/listar-produto-estoque-por-estoque"
import { Axios } from "../../../../infra/axios"

export const makeListarEstoquesServiceListarProdutoEstoquePorEstoqueService = (): ListarEstoquesServiceListarProdutoEstoquePorEstoqueService => {
    const axios = new Axios('listarProdutoEstoquePorEstoque')
    return new ListarEstoquesServiceListarProdutoEstoquePorEstoqueService(axios)
}