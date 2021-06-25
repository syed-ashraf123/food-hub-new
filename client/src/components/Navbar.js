// import React from "react";
// import { Link } from "react-router-dom";

// function Navbar() {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light p-4">
//       <a className="navbar-brand" href="www.google.com">
//         Navbar
//       </a>
//       <button
//         className="navbar-toggler"
//         type="button"
//         data-toggle="collapse"
//         data-target="#navbarSupportedContent"
//         aria-controls="navbarSupportedContent"
//         aria-expanded="false"
//         aria-label="Toggle navigation"
//       >
//         <span className="navbar-toggler-icon"></span>
//       </button>

//       <div className="collapse navbar-collapse" id="navbarSupportedContent">
//         <ul className="navbar-nav ml-auto">
//           <li className="nav-item active">
//             <a className="nav-link" href="www.google.com">
//               Home <span className="sr-only">(current)</span>
//             </a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="www.google.com">
//               Link
//             </a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="www.google.com">
//               About
//             </a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="www.google.com">
//               Services
//             </a>
//           </li>
//           <Link to="/signup" style={{ textDecoration: "none" }}>
//             <li className="nav-item">
//               <a className="nav-link" href="/signup">
//                 Sign Up
//               </a>
//             </li>
//           </Link>
//           <Link to="/sellerdashboard" style={{ textDecoration: "none" }}>
//             <li className="nav-item">
//               <a className="nav-link" href="/admin">
//                 Dashboard
//               </a>
//             </li>
//           </Link>
//           <Link to="/sellerlogin" style={{ textDecoration: "none" }}>
//             <li className="nav-item">
//               <a className="nav-link" href="/sellerlogin">
//                 Seller Login
//               </a>
//             </li>
//           </Link>
//         </ul>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
function Navbar1() {
  return (
    <Navbar collapseOnSelect expand="lg">
      <h3> Food Hub </h3>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className="ml-auto d-line">
          <Nav.Item>
            {localStorage.getItem("user-auth-token") ? (
              <Nav.Link eventKey="1" as={Link} to="/logout">
                Logout
              </Nav.Link>
            ) : (
              <Nav.Link eventKey="2" as={Link} to="/login">
                Login
              </Nav.Link>
            )}
          </Nav.Item>
          {/* <Nav.Item>
            <Nav.Link eventKey="2" as={Link} to="/logout">
              Logout
            </Nav.Link>
          </Nav.Item> */}
          <Nav.Item>
            <Nav.Link eventKey="3" as={Link} to="/">
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="4" as={Link} to="/checkout">
              Checkout
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default Navbar1;
