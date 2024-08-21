import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./components/main";
import Navbar from "./components/navbar";
import Redes from "./components/redes";
import Button from "./components/button";
function App() {
  return (
    <>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
        crossorigin="anonymous"
      ></link>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
        crossorigin="anonymous"
      ></script>
      <div className="body">
        <Navbar />
        <div className="container">
          <div className="row align-items-center ">
            <div className="col icon-redes " data-bs-toggle="collapse">
              <Redes />
            </div>
            <div className="col-11 main ">
              <Main />
            </div>
            <div className="containe">
              <Button />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
