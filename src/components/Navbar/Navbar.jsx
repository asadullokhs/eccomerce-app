import React from "react";
import { Link } from "react-router-dom";
import { useMyStore } from "../../context/Mystore";

const Navbar = () => {
  const { selectedProd } = useMyStore();
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-white  navbar-light p-3 shadow-sm fixed-top ">
        <div className="container">
          <a className="navbar-brand" href="#">
            <i className="fa-solid fa-shop me-2"></i>{" "}
            <strong>Eccomerce-shop</strong>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="mx-auto my-3 d-lg-none d-sm-block d-xs-block">
            <div className="input-group">
              <span className="border-info input-group-text bg-info text-white">
                <i className="fa-solid fa-magnifying-glass"></i>
              </span>
              <input type="text" className="form-control border-info" />
              <button className="btn btn-info text-white">Search</button>
            </div>
          </div>
          <div className=" collapse navbar-collapse" id="navbarNavDropdown">
            <div className="ms-auto d-none d-lg-block">
              <div className="input-group">
                <span className="border-info input-group-text bg-info text-white">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </span>
                <input
                  type="text"
                  className="form-control border-info"
                  style={{ color: "#444" }}
                />
                <button className="btn btn-info text-white">Search</button>
              </div>
            </div>
            <ul className="navbar-nav ms-auto ">
              <li className="nav-item">
                <a
                  className="nav-link mx-2 text-uppercase active"
                  aria-current="page"
                  href="#"
                >
                  Offers
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-2 text-uppercase" href="#">
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-2 text-uppercase" href="#">
                  Catalog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-2 text-uppercase" href="#">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-2 text-uppercase" href="#">
                  About
                </a>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto ">
              <li className="nav-item">
                <Link to={"/order-list"} className="btn">
                  <span
                    className="fa-solid fa-shopping-cart text-lg"
                    style={{ color: "#444" }}
                  ></span>
                  <span
                    className="badge  "
                    style={{ color: "#444", fontSize: "15px" }}
                  >
                    {selectedProd.length}
                  </span>
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-2 text-uppercase" href="#">
                  <i className="fa-solid fa-circle-user me-1"></i> Account
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
