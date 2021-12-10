import EstoquePage from "../../../presentation/pages/estoque";
import { makeListarEstoquesService } from "../services/estoque/listar-estoques";

export function makeEstoquePage() {
    return (
        <EstoquePage listarEstoquesUseCase={makeListarEstoquesService()} />
    )
}