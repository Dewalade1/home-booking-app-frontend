import React from 'react';

export default function Header () {
    return (
      <div>
        <nav className="border-bottom navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <a data-testid="logo" href="/#" className="navbar-brand m-l-4">
              <img src="images/main-logo.png" alt="main logo" width="60" />
            </a>
            <form data-testid="search" className="mr-auto w-50 form-inline">
              <input placeholder="Search for homes" type="text" className="w-50 form-control" />
            </form>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbartoggler" aria-controls="navbartoggler" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div data-testid="menu" className=" m-r-4 collapse navbar-collapse d-flex justify-content-end text-uppercase navbar-nav" id="navbartoggler">
              <a href="#home" className="nav-link">
                Become a host
              </a>
              <a href="#link" className="nav-link">
                Help
              </a>
              <a href="#link" className="nav-link m-r-1">
                Sign Up
              </a>
              <button href="#link" type="button" className="btn btn-outline-success">
                Login
              </button>
            </div>
          </div>
        </nav>
        <div className="m-0 px-4 py-2 container-fluid mw-100 border-bottom container d-flex justify-content-center">
          <button data-testid="home-type" type="button" className="text-nowrap m-r-2 py-1 btn btn-outline-secondary">
            Home Type
          </button>
          <button data-testid="dates" type="button" className="text-nowrap m-r-2 py-1 btn btn-outline-secondary">
            Dates
          </button>
          <button data-testid="guests" type="button" className="text-nowrap m-r-2 py-1 btn btn-outline-secondary">
            Guests
          </button>
          <button data-testid="price" type="button" className="text-nowrap m-r-2 py-1 btn btn-outline-secondary">
            Price
          </button>
          <button data-testid="rooms" type="button" className="text-nowrap m-r-2 py-1 btn btn-outline-secondary">
            Rooms
          </button>
          <button data-testid="amenities" type="button" className="text-nowrap m-r-2 py-1 btn btn-outline-secondary">
            Amenities
          </button>
        </div>
      </div>
    );
};