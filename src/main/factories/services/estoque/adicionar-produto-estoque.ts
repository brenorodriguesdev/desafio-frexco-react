import { AdicionarProdutoEstoqueService } from "../../../../data/services/estoque/adicionar-produto-estoque"
import { Axios } from "../../../../infra/axios"

export const makeAdicionarProdutoEstoqueService = (): AdicionarProdutoEstoqueService => {
    const axios = new Axios('adicionarProdutoEstoque')
    return new AdicionarProdutoEstoqueService(axios)
}