import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Login from './Pages/Login'
import Cadastro from './Pages/Cadastro'
import Escolha from './Pages/Escolha'
import Pedido from './Pages/Pedido'
import Pagamento from './Pages/Pagamento'
import './global.css'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/cadastrar" component={Cadastro} />
        <Route exact path="/escolha" component={Escolha} />
        <Route exact path="/pedido" component={Pedido} />
        <Route exact path="/pedido/pag" component={Pagamento} />
      </Switch>
    </Router>
  )
}

export default App;
