import { BuscarEstoqueService } from "../../../../data/services/estoque/buscar-estoque"
import { Axios } from "../../../../infra/axios"

export const makeBuscarEstoqueService = (): BuscarEstoqueService => {
    const axios = new Axios('buscarEstoque')
    return new BuscarEstoqueService(axios)
}