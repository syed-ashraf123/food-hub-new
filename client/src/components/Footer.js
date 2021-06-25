import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <MDBFooter
      style={{ color: "black", backgroundColor: "#f8f9fa" }}
      color="blue"
      className="font-small pt-4 mt-4"
    >
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h1 className="title">Food Hub</h1>
            <strong>Hungry? Food Hub is here!!</strong>
            <br />
            <br />
            <Link to="/sellerregisteration" style={{ textDecoration: "none" }}>
              <span
                class="btn btn-danger btn-lg"
                style={{ width: "300px" }}
                href="/sellerregisteration"
                role="button"
              >
                Sell WIth Us
              </span>
            </Link>
          </MDBCol>
          <MDBCol md="3">
            <h5 className="title">Follow Us On</h5>
            <ul>
              <li className="list-unstyled">
                <span>Instagram</span>
              </li>
              <li className="list-unstyled">
                <span>Facebook</span>
              </li>
              <li className="list-unstyled">
                <span>Twitter</span>
              </li>
              <li className="list-unstyled">
                <span>G-Chat</span>
              </li>
            </ul>
          </MDBCol>
          <MDBCol md="3">
            <h5 className="title">Links</h5>
            <ul>
              <li className="list-unstyled">
                <span>Home</span>
              </li>
              <li className="list-unstyled">
                <span>About</span>
              </li>
              <li className="list-unstyled">
                <span>Services</span>
              </li>
              <li className="list-unstyled">
                <span>Contact Us</span>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href="https://www.mdbootstrap.com"> MDBootstrap.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default Footer;
