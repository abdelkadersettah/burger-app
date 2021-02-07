import React, { Component } from 'react';
import Layout from './containers/hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import { Switch, Route, Link } from 'react-router-dom';
import Orders from './containers/Orders/Orders';
class App extends Component {
  state = {};
  render() {
    return (
      <Layout>
        <Switch>
          <Route path={'/checkout'} component={Checkout} />
          <Route path={'/Orders'} component={Orders} />
          <Route exact path={'/'} component={BurgerBuilder} />
        </Switch>
      </Layout>
    );
  }
}

export default App;
