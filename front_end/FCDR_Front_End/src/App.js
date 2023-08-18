import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import FormLocate from './Forms/FormLocate';
import FormCadRec from './Forms/FormCadRec';
import NavBarItens from './components/NavBarItens';
import FormCadEmp from './Forms/FormCadEmp';
import FormCadTicket from './Forms/FormCadTicket';

class App extends Component {

  render() {

    return (
      
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Switch>
            <Route path="/cad" component={NavBarItens} />
            <Route path="/Locate" component={FormLocate} />
            <Route path="/CadRec" component={FormCadRec} />
            <Route path="/CadEmp" component={FormCadEmp} />
            <Route path="/CadTicket" component={FormCadTicket} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;



