import React from 'react';

export default function Header () {
    return (
      <nav className="border-bottom navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <a data-testid="logo" href="/#" className="navbar-brand ml-4">
            <img src="images/main-logo.png" alt="main logo" width="60" />
          </a>
          <form data-testid="search" className="mr-auto w-50 form-inline">
            <input placeholder="Search for homes" type="text" className="w-50 form-control" />
          </form>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbartoggler" aria-controls="navbartoggler" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div data-testid="menu" className="collapse navbar-collapse d-flex justify-content-center text-uppercase navbar-nav" id="navbartoggler">
            <a href="#home" className="nav-link">
              Become a host
            </a>
            <a href="#link" className="nav-link">
              Help
            </a>
            <a href="#link" className="nav-link">
              Sign Up
            </a>
            <button href="#link" type="button" className="btn btn-outline-success">
              Login
            </button>
          </div>
        </div>
      </nav>
    );
};