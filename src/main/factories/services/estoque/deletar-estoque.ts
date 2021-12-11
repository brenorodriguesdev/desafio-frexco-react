import { DeletarEstoqueService } from "../../../../data/services/estoque/deletar-estoque"
import { Axios } from "../../../../infra/axios"

export const makeDeletarEstoqueService = (): DeletarEstoqueService => {
    const axios = new Axios('deletarEstoque')
    return new DeletarEstoqueService(axios)
}