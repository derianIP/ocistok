import { ICSearch, ImgLogo } from "assets";
import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <section className="header bg-primary">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light px-0">
          <a className="navbar-brand" href="/">
            <img src={ImgLogo} alt="logo" height="50" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navb"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <form className="form-inline w-100 form-mobile">
            <div className="input-icons w-100">
              <input
                className="form-control mr-sm-2 search"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              {/* <img src={ICSearch} alt="search" className="icon" /> */}
            </div>
          </form>

          <div className="collapse navbar-collapse" id="navb">
            <form className="form-inline ml-auto mr-auto form-desktop">
              <div className="input-icons">
                <input
                  className="form-control mr-sm-2 search"
                  style={{ width: 500 }}
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <img src={ICSearch} alt="search" className="icon" />
              </div>
            </form>
            <ul className="navbar-nav ml-auto mt-1 mt-md-0">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Login
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Daftar
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Header;
