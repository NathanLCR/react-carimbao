import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ProductList from './components/ProductList';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={ProductList} />
      </Switch>
    </BrowserRouter>
  );
}
