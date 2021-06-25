import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
function SellerNavbar() {
  return (
    <Navbar collapseOnSelect expand="lg">
      <h3> Food Hub </h3>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className="ml-auto d-line">
          <Nav.Item>
            <Nav.Link eventKey="1" as={Link} to="/items">
              Items
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="2" as={Link} to="/additems">
              Add Items{" "}
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="3" as={Link} to="/orders">
              Orders{" "}
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="4" as={Link} to="/logout">
              Logout{" "}
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default SellerNavbar;
