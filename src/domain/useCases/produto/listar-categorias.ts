import { CategoriaModel } from "../../models/produto/categoria";

export interface ListarCategoriasUseCase {
    listar: () => Promise<CategoriaModel[]>
}