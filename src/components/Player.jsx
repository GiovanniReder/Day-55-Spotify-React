import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import shuffle from "../assets/images/shuffle.png";
import prev from "../assets/images/prev.png";
import play from "../assets/images/play.png";
import next from "../assets/images/next.png";
import repeat from "../assets/images/repeat.png";
import { Button } from "react-bootstrap";

const Player = () => {
  return (
    <>
      <Navbar className="bg-dark  fixed-bottom">
        <Container className="mx-auto d-flex flex-column">
          <div className="row   mx-auto p-3">
            <div className="">
              <div className=" d-flex mx-auto w-75 align-self-center ">
                <Button className="bg-dark mx-2 border-0">
                  <img src={shuffle} width="10" height="10" className="d-inline-block " alt="React Bootstrap logo" />
                </Button>
                <Button className="bg-dark mx-2 border-0">
                  <img src={prev} width="10" height="10" className="d-inline-block " alt="React Bootstrap logo" />
                </Button>
                <Button className="bg-dark mx-2 border-0" href="#home">
                  <img src={play} width="15" height="15" className="d-inline-block " alt="React Bootstrap logo" />
                </Button>
                <Button className="bg-dark mx-2 border-0" href="#home">
                  <img src={next} width="10" height="10" className="d-inline-block " alt="React Bootstrap logo" />
                </Button>
                <Button className="bg-dark mx-2 border-0" href="#home">
                  <img src={repeat} width="10" height="10" className="d-inline-block " alt="React Bootstrap logo" />
                </Button>
              </div>

              <div className="progress d-flex mt-2 align-self-center mx-auto">
                <div role="progressbar"></div>
              </div>
            </div>
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default Player;
