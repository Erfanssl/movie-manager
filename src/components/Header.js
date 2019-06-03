import React from 'react';
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="container d-flex justify-content-center">
            <nav className="navbar navbar-expand-md navbar-dark px-5 rounded">
                <img src="../assets/images/MovieManagementSmall.png" alt="logo" className="top-logo mr-2"/>
                <a className="navbar-brand mr-lg-5" href="/">Movie Manager</a>
                <div className="collapse navbar-collapse ml-5" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to="/">Home <span className="sr-only">(current)</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/movies">My DB<span className="sr-only">(current)</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/movies-to-watch">Movies to watch</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/top10">Top 10</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/worst10">Worst 10</NavLink>
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