import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import MusicCards from "./components/MusicCards";
import MusicCards2 from "./components/MusicCard2";
import MusicCards3 from "./components/MusicCard3";
import Player from "./components/Player";
function App() {
  return (
    <div className="App  body bg-dark">
      <div className="container">
        <div className="row ">
          <div className="col col-2">
            <Sidebar />
          </div>
          <div className="  col-10">
            <Main />
            <MusicCards />
            <MusicCards2 />
            <MusicCards3 />
          </div>
          <Player />
        </div>
      </div>
    </div>
  );
}

export default App;
