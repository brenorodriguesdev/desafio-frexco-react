import { ProdutoEstoqueProvider } from "../../../presentation/contexts/produtoEstoque";
import { makeDeletarProdutoService } from "../services/produto/deletar-produto";
import ProdutoEstoquePage from "../../../presentation/pages/produtoEstoque";
import { makeListarEstoquesService } from "../services/estoque/listar-estoques";

export function makeProdutoEstoquePage() {
    return (
        <ProdutoEstoqueProvider>
            <ProdutoEstoquePage listarEstoquesUseCase={makeListarEstoquesService()} deletarProdutoUseCase={makeDeletarProdutoService()} />
        </ProdutoEstoqueProvider>
    )
}