import { DeletarProdutoEstoqueService } from "../../../../data/services/estoque/deletar-produto-estoque"
import { Axios } from "../../../../infra/axios"

export const makeDeletarProdutoEstoqueService = (): DeletarProdutoEstoqueService => {
    const axios = new Axios('deletarProdutoEstoque')
    return new DeletarProdutoEstoqueService(axios)
}