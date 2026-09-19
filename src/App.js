import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar";
import Hero from "./components/main";
import Sobre from "./components/Sobre";
import Formacao from "./components/Formacao";
import Experiencia from "./components/Experiencia";
import Habilidades from "./components/Habilidades";
import Contato from "./components/Contato";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Sobre />
      <Formacao />
      <Experiencia />
      <Habilidades />
      <Contato />
    </>
  );
}

export default App;
