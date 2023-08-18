import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

class NavBar extends Component {

    render() {
        return (
            <BrowserRouter>
                <div>
                    <h5>Tipo de Cadastro:</h5>
                </div>
                <br>
                </br>
                <div class="btn-group">
                    &nbsp;<div>
                        <a href="/CadTicket" type="button" class="btn btn-outline-secondary  btn-lg"><h5>Ticket</h5></a>
                    </div>
                    &nbsp;&nbsp;<div>
                        <a href="/CadEmp" type="button" class="btn btn-outline-secondary  btn-lg"><h5>Empresa</h5></a>
                    </div>
                    &nbsp;&nbsp; <div>
                        <a href="/CadRec" type="button" class="btn btn-outline-secondary  btn-lg"><h5>Recurso</h5></a>
                    </div>
                </div >
                <div>
                </div>
            </BrowserRouter >
        );
    }
}

export default NavBar;