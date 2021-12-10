import { ListarProdutosService } from "../../../../data/services/produto/listar-produtos"
import { Axios } from "../../../../infra/axios"

export const makeListarProdutosService = (): ListarProdutosService => {
    const axios = new Axios('listarProdutos')
    return new ListarProdutosService(axios)
}