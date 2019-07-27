import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Home, CompareProduct, Review, SelectProducts, Product } from './components'

import HeadBar from './features/head'

class Rounter extends Component {

  render() {
    return (
      <div>
        <HeadBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/compare" component={CompareProduct} />
          <Route exact path="/selectproducts" component={SelectProducts} />
          <Route exact path="/review" component={Review} />
          <Route exact path="/allproduct" component={Product} />
        </Switch>
      </div>
    )
  }
}

export default Rounter
