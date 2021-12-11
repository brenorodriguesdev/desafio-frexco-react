import { ProdutoProvider } from "../../../presentation/contexts/produto";
import ProdutoPage from "../../../presentation/pages/produto";
import { makeDeletarProdutoService } from "../services/produto/deletar-produto";
import { makeListarProdutosService } from "../services/produto/listar-produtos";

export function makeProdutoPage() {
    return (
        <ProdutoProvider>
            <ProdutoPage listarProdutosUseCase={makeListarProdutosService()} deletarProdutoUseCase={makeDeletarProdutoService()} />
        </ProdutoProvider>
    )
}