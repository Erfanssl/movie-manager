import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Dashboard extends Component {

    render() {
        return (
            <div className="dashboard__container container d-flex flex-column justify-content-center align-items-center mt-4">
                <div className="dashboard__text text-center mt-4">
                    <p className="dashboard__text--one">
                        Welcome to "Movie Manager" App
                    </p>
                    <p className="dashboard__text--two">
                        Create your own Movie Database
                    </p>
                </div>
                <div className="row">
                    <div className="col-12 col-md-6 text-center">
                        <Link to="/movies" className="btn dashboard__btn btn-outline-primary p-5">My Movie Database</Link>
                    </div>
                    <div className="col-12 col-md-6 text-center">
                        <Link to="/movies-to-watch" className="btn dashboard__btn btn-outline-primary p-5">Movies to Watch List</Link>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-6 text-center">
                        <Link to="/top10" className="btn dashboard__btn btn-outline-primary p-5">My Top 10 Movies</Link>
                    </div>
                    <div className="col-12 col-md-6 text-center">
                        <Link to="/worst10" className="btn dashboard__btn btn-outline-primary p-5">My Worst 10 Movies</Link>
                    </div>
                </div>
                <div className="row">
                    <div className="col-10">
                        <Link to="/documentation" className="btn dashboard__btn btn-outline-primary p-5">Documentation</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;