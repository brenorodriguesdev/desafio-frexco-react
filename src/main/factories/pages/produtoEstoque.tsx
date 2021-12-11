import { ProdutoEstoqueProvider } from "../../../presentation/contexts/produtoEstoque";
import { makeDeletarProdutoService } from "../services/produto/deletar-produto";
import { makeListarProdutosService } from "../services/produto/listar-produtos";
import ProdutoEstoquePage from "../../../presentation/pages/produtoEstoque";

export function makeProdutoEstoquePage() {
    return (
        <ProdutoEstoqueProvider>
            <ProdutoEstoquePage listarProdutosUseCase={makeListarProdutosService()} deletarProdutoUseCase={makeDeletarProdutoService()} />
        </ProdutoEstoqueProvider>
    )
}