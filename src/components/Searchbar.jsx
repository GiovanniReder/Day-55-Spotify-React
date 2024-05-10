import { Button, Form } from "react-bootstrap";

const Searchbar = () => {
  return (
    <Form className="d-flex">
      <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
      <Button className="text-secondary  border border-secondary" variant="black">
        Go
      </Button>
    </Form>
  );
};
export default Searchbar;
