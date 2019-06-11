import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './route/home'
import Compare from './route/compare'
import Review from './route/review'
import Brand from './route/brand'
import Product from './route/product'

import Header from './features/head'

class Rounter extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/compare" component={Compare} />
          <Route exact path="/brand" component={Brand} />
          <Route exact path="/review" component={Review} />
          <Route exact path="/allproduct" component={Product} />
        </Switch>
      </div>
    )
  }
}

export default Rounter
