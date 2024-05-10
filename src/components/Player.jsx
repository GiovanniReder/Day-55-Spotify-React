import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import shuffle from "../assets/images/shuffle.png";
import prev from "../assets/images/prev.png";
import play from "../assets/images/play.png";
import next from "../assets/images/next.png";
import repeat from "../assets/images/repeat.png";
import { Button } from "react-bootstrap";

function Player() {
  return (
    <>
      <Navbar className="bg-dark  fixed-bottom">
        <Container className="mx-auto d-flex flex-column">
          <div className="row  mx-auto p-3">
            <div className="mx-auto">
              <div className="col-2 d-flex mx-auto align-self-center ">
                <Button className="bg-dark border-0">
                  <img src={shuffle} width="10" height="10" className="d-inline-block " alt="React Bootstrap logo" />
                </Button>
                <Button className="bg-dark border-0">
                  <img src={prev} width="10" height="10" className="d-inline-block " alt="React Bootstrap logo" />
                </Button>
                <Button className="bg-dark border-0" href="#home">
                  <img src={play} width="15" height="15" className="d-inline-block " alt="React Bootstrap logo" />
                </Button>
                <Button className="bg-dark border-0" href="#home">
                  <img src={next} width="10" height="10" className="d-inline-block " alt="React Bootstrap logo" />
                </Button>
                <Button className="bg-dark border-0" href="#home">
                  <img src={repeat} width="10" height="10" className="d-inline-block " alt="React Bootstrap logo" />
                </Button>
              </div>

              <div className="progress d-flex  align-self-center mx-auto">
                <div role="progressbar"></div>
              </div>
            </div>
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default Player;
