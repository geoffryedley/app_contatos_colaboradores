import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

class NavBar extends Component {

    render() {
        return (
            <BrowserRouter>
                <div>
                    <nav className="navbar navbar-expand-lg  navbar-dark bg-primary">
                        <a className="navbar-brand" href="/cad"><h4>FCDR </h4></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li class="nav-item active">
                                    <a className="nav-link" href="/cad"><h6>| Cadastros |</h6></a>
                                </li>
                                <li class="nav-item">
                                    <a className="nav-link" href="/Locate"><h6>| Encontrar Recursos |</h6></a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <p></p>
                </div >
            </BrowserRouter >
        );
    }
}

export default NavBar;