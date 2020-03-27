import React, { useState, useEffect } from 'react';
import { Router, Route, Link, Switch } from 'react-router-dom';
import { history } from '../../helpers/history';
import { Header } from '../header/Header';
import { Footer } from '../footer/Footer';
import { Home } from '../home/Home';
import { Edit } from '../edit/Edit';

export const App = () => {
    return (
        <div className="App-Conteiner" data-testid="App-Conteiner">
            <Header></Header>
            <Router history={history}>
                <>
                    <nav
                        className="navbar navbar-expand navbar-dark bg-dark"
                        data-testid="Navegation"
                    >
                        <div className="navbar-nav">
                            <Link to="/" className="nav-item nav-link linked">
                                <h2>Heroes</h2>
                            </Link>
                            <Link
                                to="/edit"
                                className="nav-item nav-link linked"
                            >
                                <h2>Edit Heroe</h2>
                            </Link>
                        </div>
                    </nav>
                    <div className="box">
                        <Switch>
                            <Route path="/edit">
                                <Edit />
                            </Route>
                            <Route path="/">
                                <Home />
                            </Route>
                        </Switch>
                    </div>
                </>
            </Router>
            <Footer></Footer>
        </div>
    );
};
