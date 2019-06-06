import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './route/home/home'
import Compare from './route/compare/compare'
import Review from './route/review/review'
import Brand from './route/brand/brand'
import Product from './route/product/allproduct'

// import logo from './data/img/mylogo.png'

class Rounter extends Component {
  render() {
    return (
      <div>
        {/* <img src={logo} alt="logo" /> */}
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
