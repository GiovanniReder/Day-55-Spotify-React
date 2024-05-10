import { Container, Navbar } from "react-bootstrap";

const Main = () => {
  return (
    <>
      <Navbar className="bg-transparent ">
        <Container className="d-flex flex-wrap">
          <Navbar.Brand style={{ fontSize: "15px" }} className="text-secondary ms-5">
            TRENDING
          </Navbar.Brand>
          <Navbar.Brand style={{ fontSize: "15px" }} className="text-secondary m">
            PODCAST
          </Navbar.Brand>
          <Navbar.Brand style={{ fontSize: "15px" }} className="text-secondary m">
            MOODS AND GENRES
          </Navbar.Brand>
          <Navbar.Brand style={{ fontSize: "15px" }} className="text-secondary m">
            NEW RELEASES
          </Navbar.Brand>
          <Navbar.Brand style={{ fontSize: "15px" }} className="text-secondary me-5">
            DISCOVER
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};
export default Main;
