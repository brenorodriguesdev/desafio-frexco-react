import { ListarEstoquesService } from "../../../../data/services/estoque/listar-estoques"
import { Axios } from "../../../../infra/axios"

export const makeListarEstoquesService = (): ListarEstoquesService => {
    const axios = new Axios('listarEstoques')
    return new ListarEstoquesService(axios)
}