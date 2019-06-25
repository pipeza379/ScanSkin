import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Home, Compare, Review, SelectProducts, Select, Product } from './components'

import HeadBar from './features/head'

class Rounter extends Component {

  render() {
    return (
      <div>
        <HeadBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/compare" component={Compare} />
          <Route exact path="/selectproducts" component={SelectProducts} />
          <Route exact path="/review" component={Review} />
          <Route exact path="/allproduct" component={Product} />
          <Route exact path="/select" component={Select} />
        </Switch>
      </div>
    )
  }
}

export default Rounter
