import { CriarEstoqueService } from "../../../../data/services/estoque/criar-estoque"
import { Axios } from "../../../../infra/axios"

export const makeCriarEstoqueService = (): CriarEstoqueService => {
    const axios = new Axios('criarEstoque')
    return new CriarEstoqueService(axios)
}