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
          <div className="row align-items-center justify-content-center ">
            <div className="col icon-redes ">
              <Redes />
            </div>
            <div className="col-12 col-md-11 main ">
              <Main />
            </div>
            <div className="containe d-flex justify-content-center mt-3">
              <Button />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
