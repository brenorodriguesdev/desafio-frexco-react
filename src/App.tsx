import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import EstoquePage from "./presentation/pages/estoque";
import HomePage from './presentation/pages/home';
import ProdutoPage from "./presentation/pages/produto";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/produto" element={<ProdutoPage />} />
        <Route path="/estoque" element={<EstoquePage />} />
      </Routes>
    </BrowserRouter>
  )
}