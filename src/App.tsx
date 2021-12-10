import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { makeEstoquePage } from "./main/factories/pages/estoque";
import { makeProdutoPage } from "./main/factories/pages/produto";
import HomePage from './presentation/pages/home';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/produto" element={makeProdutoPage()} />
        <Route path="/estoque" element={makeEstoquePage()} />
      </Routes>
    </BrowserRouter>
  )
}