import ProdutoPage from "../../../presentation/pages/produto";
import { makeListarProdutosService } from "../services/produto/listar-produtos";

export function makeProdutoPage() {
    return (
        <ProdutoPage listarProdutosUseCase={makeListarProdutosService()} />
    )
}