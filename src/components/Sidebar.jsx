import { Form, NavLink } from "react-bootstrap";
import logo from "../assets/images/logo.png";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
const Sidebar = () => {
  return (
    <>
      <Navbar className="bg-black fixed-left d-none d-lg-flex ">
        <Container className="d-flex  flex-column align-items-start">
          <Navbar.Brand className="text-center" href="#home">
            <img src={logo} width="131" height="40" className="d-inline-block align-top" alt="React Bootstrap logo" />
          </Navbar.Brand>
          <NavLink style={{ fontSize: "18px" }} className="text-secondary p-1 my-0 " href="#home">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              className="bi bi-house-door-fill"
              viewBox="0 0 16 16"
            >
              <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5" />
            </svg>
            &nbsp; Home
          </NavLink>
          <Navbar.Brand style={{ fontSize: "18px" }} className="text-secondary " href="#home">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              className="bi bi-book-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783" />
            </svg>
            &nbsp; Your Library
          </Navbar.Brand>
          <Form className="d-flex">
            <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
            <Button className="text-secondary  border border-secondary" variant="black">
              Go
            </Button>
          </Form>
        </Container>
        <Container className="d-flex flex-column justify-content-end align-items-start text-end mb-0 my-auto">
          <Button className="signup-btn rounded-pill my-2 mx-auto px-5" variant="light">
            Sign Up
          </Button>
          <Button className="login-btn rounded-pill my-2 border text-white mx-auto px-5" variant="black">
            Log In
          </Button>
          <Navbar.Brand style={{ fontSize: "18px" }} className="text-secondary">
            Cookie Policy | Privacy
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};
export default Sidebar;
