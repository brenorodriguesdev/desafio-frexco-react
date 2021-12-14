import { EstoqueModel } from "../../models/estoque/estoque";

export interface BuscarEstoqueUseCase {
    buscar: (id: number) => Promise<EstoqueModel | Error>
}