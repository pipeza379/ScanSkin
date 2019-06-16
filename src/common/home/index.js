import React, { Component } from 'react'
import { Row, Col } from 'antd'
import { Link } from 'react-router-dom'

import 'antd/dist/antd.css';
import '../../asset/css/home.css'
import HomeSelect from './homeSelect'
import HomeCarousel from './homeCarousel'
import HomeCompare from './homeCompare'

class Home extends Component {
  constructor() {
    super()
    this.state = {
    }
  }
  render() {
    return (
      <div>
        <Row>
          <Col lg={{span:14 ,offset:5}}  md={{ span: 20, offset: 2 }}>
            <HomeCarousel />
            <br />
            <HomeSelect />
            <br />
            <HomeCompare />
            <br />

            
          </Col>
        </Row>
      </div>
    )
  }
}


export default Home;
