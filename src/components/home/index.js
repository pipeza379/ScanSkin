import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import 'antd/dist/antd.css';
import '../../asset/css/home.css'
import HomeType from './homeType'
import HomeCarousel from './homeCarousel'
import HomeBrands from './homeBrands'

class Home extends Component {
  constructor() {
    super()
    this.state = {
    }
  }
  render() {
    return (
      <div className="home">
        <HomeCarousel />
        <div className="content">
          <HomeType />
          <br />
          <HomeBrands />
          <Link to="./allproduct"><span className="goto-allproducts">ดูผลิตภัณฑ์ทั้งหมด>></span></Link>
          <br />
        </div>
      </div>
    )
  }
}


export default Home;
