import { AtualizarEstoqueService } from "../../../../data/services/estoque/atualizar-estoque"
import { Axios } from "../../../../infra/axios"

export const makeAtualizarEstoqueService = (): AtualizarEstoqueService => {
    const axios = new Axios('atualizarEstoque')
    return new AtualizarEstoqueService(axios)
}