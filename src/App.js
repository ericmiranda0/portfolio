import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./components/main";
import Navbar from "./components/navbar";
import Redes from "./components/redes";
import Button from "./components/button";
function App() {
  return (
    <>
      <div className="bg">
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
