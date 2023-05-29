import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./componentes/Paginas/Inicio";
import SobreMim from "./componentes/Paginas/SobreMim";
import Post from "./componentes/Paginas/Post"
import Menu from "./componentes/Menu/index.js"
import Rodape from "componentes/Rodape";
import PaginaPadrao from "componentes/PaginaPadrao";
import NaoEncontrada from "componentes/Paginas/NaoEncontrada";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu/>
      <Routes>
        {/* Rotas aninhadas */}
        <Route path="/" element={<PaginaPadrao/>}>
          <Route index element={<Inicio/>}/>
          <Route path="sobremim" element={<SobreMim/>}/>
        </Route>

        <Route path="posts/:id/*" element={<Post />} />
        <Route path="*" element={<NaoEncontrada/>}/>
      </Routes>
      <Rodape/>
    </BrowserRouter>
  );
}

export default AppRoutes;
