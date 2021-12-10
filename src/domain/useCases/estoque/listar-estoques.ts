import { EstoqueModel } from "../../models/estoque/estoque";

export interface ListarEstoquesUseCase {
    listar: () => Promise<EstoqueModel[]>
}