import { ListarCategoriasService } from "../../../../data/services/produto/listar-categorias"
import { Axios } from "../../../../infra/axios"

export const makeListarCategoriasService = (): ListarCategoriasService => {
    const axios = new Axios('listarCategorias')
    return new ListarCategoriasService(axios)
}