import React from 'react';
import { NavLink, Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="container d-flex justify-content-center">
            <nav className="navbar navbar-expand navbar-dark px-5 rounded">
                <Link to="/">
                    <img src="../assets/images/MovieManagementSmall.png" alt="logo" className="top-logo mr-2"/>
                </Link>
                <Link className="navbar-brand mr-lg-5" to="/">Movie Manager</Link>
                <div className="collapse navbar-collapse ml-5" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to="/">Home <span className="sr-only">(current)</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link header__mdb" to="/movies">My DB<span className="sr-only">(current)</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link d-none d-md-inline-block" to="/movies-to-watch">Movies to watch</NavLink>
                            <NavLink className="nav-link d-md-none" to="/movies-to-watch">MtV</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link d-none d-md-inline-block" to="/top10">Top 10</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link d-none d-md-inline-block" to="/worst10">Worst 10</NavLink>
                        </li>
                        <li className="nav-item d-none d-lg-inline-block">
                            <NavLink className="nav-link" to="/documentation">Documentation</NavLink>
                        </li>
                        <li className="nav-item d-none d-lg-inline-block">
                            <NavLink className="nav-link" to="/help">Help</NavLink>
                        </li>
                        <li className="nav-item d-none d-lg-inline-block">
                            <NavLink className="nav-link" to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Header;