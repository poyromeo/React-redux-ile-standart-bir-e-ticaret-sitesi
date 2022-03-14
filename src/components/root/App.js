import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'alertifyjs/build/css/alertify.css';
import Navi from '../navi/Navi';
import Dashboard from './Dashboard';
import CartDetail from '../cart/CartDetail';
import { Container } from 'reactstrap';
import { BrowserRouter as Switch, Route } from 'react-router-dom';


export default function App() {
  return (
    <div>
      <Container>
        <Navi/>
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route exact path="/cart" component={CartDetail} />
        </Switch>
      </Container>
    </div>
  )
}
