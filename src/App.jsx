import { Routes, Route } from "react-router-dom";
import { Header } from "./Componentes/Hearder";
import { Footer } from "./Componentes/Footer";
import { Home } from "./Componentes/Home";
import { Missao } from "./Componentes/Missao";
import { NossaHistoria } from "./Componentes/NossaHistoria";
import { Produtos } from "./Componentes/Produtos";
import { Contato } from "./Componentes/Contato";
import './Componentes/arquivocss/style.global.css';

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route
          path="/"
          element={<Home inicio="Pagina 1" nome="Romulo" sobreNome="Valente" />}
        />
        <Route
          path="/Missao"
          element={<Missao titulo="Pagina 2" subTitulo="Titulo" />}
        />
        <Route
          path="/Produtos"
          element={<Produtos titulo="Pagina 3" subTitulo="Titulo" />}
        />
        <Route
          path="/NossaHistoria"
          element={<NossaHistoria titulo="Pagina 4" subTitulo="Titulo" />}
        />
        <Route path="/Contato" element={<Contato titulo="Pagina 5" subTitulo="Titulo" />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
