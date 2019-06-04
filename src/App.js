import React, { Component } from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import Header from './components/Header';
import Help from './components/Help';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import Dashboard from './components/Dashboard';
import MoviesToWatch from './components/MoviesToWatch';
import MTVForm from './components/MTWForm';
import MTVEditForm from './components/MTVEditForm';
import Movies from './components/Movies';
import MoviesForm from './components/MoviesForm';
import MoviesEditForm from './components/MoviesEditForm';
import Top10 from './components/Top10';
import Worst10 from './components/Worst10';
import Documentation from './components/Documentation';
import 'react-toastify/dist/ReactToastify.css';

class Main extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <ToastContainer />
                <Switch>
                    <Route path="/contact" component={ Contact }/>
                    <Route path="/help" component={ Help }/>
                    <Route path="/top10" component={ Top10 }/>
                    <Route path="/worst10" component={ Worst10 }/>
                    <Route path="/mtv-form" component={ MTVForm }/>
                    <Route path="/movies-to-watch/edit/:id" component={ MTVEditForm } />
                    <Route path="/movies-to-watch" component={ MoviesToWatch } />
                    <Route path="/movies-form" component={ MoviesForm }/>
                    <Route path="/movies/edit/:id" component={ MoviesEditForm } />
                    <Route path="/movies" component={ Movies } />
                    <Route path="/" exact component={ Dashboard }/>
                    <Route ptah="/documentation" component={ Documentation } />
                    <Route path="/not-found" component={ NotFound } />
                    <Redirect to="/not-found" />
                </Switch>
            </React.Fragment>
        );
    }
}

export default Main;