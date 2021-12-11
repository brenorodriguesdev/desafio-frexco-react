import { EstoqueProvider } from "../../../presentation/contexts/estoque";
import EstoquePage from "../../../presentation/pages/estoque";
import { makeDeletarEstoqueService } from "../services/estoque/deletar-estoque";
import { makeListarEstoquesService } from "../services/estoque/listar-estoques";

export function makeEstoquePage() {
    return (
        <EstoqueProvider>
            <EstoquePage listarEstoquesUseCase={makeListarEstoquesService()} deletarEstoqueUsecase={makeDeletarEstoqueService()} />
        </EstoqueProvider>
    )
}