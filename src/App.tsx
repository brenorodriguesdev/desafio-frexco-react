import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { makeProdutoPage } from "./main/factories/pages/produto";
import EstoquePage from "./presentation/pages/estoque";
import HomePage from './presentation/pages/home';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/produto" element={makeProdutoPage()} />
        <Route path="/estoque" element={<EstoquePage />} />
      </Routes>
    </BrowserRouter>
  )
}