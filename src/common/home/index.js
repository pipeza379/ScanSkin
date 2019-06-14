import React, { Component } from 'react'
import { Row, Col, Carousel, Button } from 'antd'
import { Link } from 'react-router-dom'

import SearchInput from '../../features/Serch'
// import Compare from '../compare/compare'
// import Brand from '../brand/brand'

import 'antd/dist/antd.css';
// import './home.css'

import moisturizer from '../../data/img/home/select/moisturizer.svg'
import nightcream from '../../data/img/home/select/night-cream.svg'
import toner from '../../data/img/home/select/toner.svg'
import foam from '../../data/img/home/select/foam.svg'
import mask from '../../data/img/home/select/mask.svg'
import sunscreen from '../../data/img/home/select/sunscreen.svg'
import oil from '../../data/img/home/select/oil.svg'
import beauty from '../../data/img/home/select/beauty.svg'

// import item1 from '../../data/img/home/hotitem/hotitem1.png'
// import item2 from '../../data/img/home/hotitem/hotitem2.png'
// import item3 from '../../data/img/home/hotitem/hotitem3.png'
// import item4 from '../../data/img/home/hotitem/hotitem4.png'
// import item5 from '../../data/img/home/hotitem/hotitem5.png'
// import item6 from '../../data/img/home/hotitem/item6.svg'

import slide1 from '../../data/img/home/banner4.png'
// import slide2 from '../../data/img/home/banner1.PNG'
// import slide3 from '../../data/img/home/banner2.png'
// import slide4 from '../../data/img/home/banner3.png'

import rev from '../../data/img/home/review/1.PNG'
import rev2 from '../../data/img/home/review/2.PNG'
import rev3 from '../../data/img/home/review/3.PNG'
import rev4 from '../../data/img/home/review/4.PNG'

class Home extends Component {
  constructor() {
    super()
    this.state = {
      other: false
    }
  }
  render() {
    return (
      <div>
        <Row style={{ margin: "15px", width: "70%", marginLeft: "15%", marginRight: "15%" }} >
          <Col align="middle">
            <Carousel autoplay={true}>
              <div className="slide1">
                <img style={{ width:"1300px" }} alt="curousel"src={slide1} />
              </div>
              {/* <div className="slide2">
                <img style={{ width: "1300px" }} src={slide1} />
              </div>
              <div className="slide3">
                <img style={{ width: "1300px" }} src={slide1} />
              </div>
              <div className="slide4">
                <img style={{ width: "1300px" }} src={slide1} />
              </div> */}
            </Carousel>
          </Col>
        </Row>
        <br />
        <Row>
          <Col align="middle"><h1 style={{ color: "#DE648B", margin: "20px" }}>COMPARE SKIN CARE</h1></Col>
        </Row>
        <Row >
          <div style={{ backgroundColor: "#DCF2F0", margin: "15px", width: "70%", marginLeft: "15%", marginRight: "15%", borderRadius: "5px" }}>
            <Row gutter={16}>
              <Col align="middle" style={{ width: "40%", margin: "15px", marginBottom: "0", marginLeft: "7%" }} span={11}>
                <SearchInput />
              </Col>
              <Col align="middle" style={{ width: "40%", margin: "15px", marginBottom: "0" }} span={11}>
                <SearchInput />
              </Col>
            </Row>
            <Row gutter={16}>
              <Col align="middle" style={{ width: "40%", marginRight: "15px", marginLeft: "7%" }} span={11}>
                <SearchInput />
              </Col>
              <Col align="middle" style={{ width: "40%", marginLeft: "15px", marginRight: "15px" }} span={11}>
                <SearchInput />
              </Col>
            </Row>
            <Row>
              <br />
              <Col align="middle" >
                <Button className="btn-compare" style={{ width: "20%", backgroundColor: "#FBDDDD", border: "none" }} onClick={() => this.setState({ compare: true })} type="primary" shape="round" size="large">
                  <Link to="/compare"><h5 style={{ color: "black" }}>เปรียบเทียบ</h5></Link>
                </Button>
              </Col>
            </Row>
            <br />
          </div>
        </Row>
        <div className="select" >
          <Row>
            <Col align="middle"><h1 style={{ color: "#DE648B", margin: "20px" }}>CATEGORIES</h1></Col>
          </Row>
          <Row gutter={16}>
            <Col span={3} ><Link to="/brand"><div className="box"><img className="center" src={foam} alt="select" /></div></Link></Col>
            <Col span={3} ><Link to="/brand"><div className="box"><img className="center" src={toner} alt="select" /></div></Link></Col>
            <Col span={3} ><Link to="/brand"><div className="box"><img className="center" src={oil} alt="select" /></div></Link></Col>
            <Col span={3} ><Link to="/brand"><div className="box"><img className="center" src={nightcream} alt="select" /></div></Link></Col>
            <Col span={3} ><Link to="/brand"><div className="box"><img className="center" src={beauty} alt="select" /></div></Link></Col>
            <Col span={3} ><Link to="/brand"><div className="box"><img className="center" src={mask} alt="select" /></div></Link></Col>
            <Col span={3} ><Link to="/brand"><div className="box"><img className="center" src={moisturizer} alt="select" /></div></Link></Col>
            <Col span={3} ><Link to="/brand"><div className="box"><img className="center" src={sunscreen} alt="select" /></div></Link></Col>
          </Row>
          <Row gutter={16}>
            <Col span={3} ><Link to="/brand"><h4 style={{ textAlign: "center" }}>Foam</h4></Link></Col>
            <Col span={3} ><Link to="/brand"><h4 style={{ textAlign: "center" }}>Toner</h4></Link></Col>
            <Col span={3} ><Link to="/brand"><h4 style={{ textAlign: "center" }}>Oil</h4></Link></Col>
            <Col span={3} ><Link to="/brand"><h4 style={{ textAlign: "center" }}>Nightcream</h4></Link></Col>
            <Col span={3} ><Link to="/brand"><h4 style={{ textAlign: "center" }}>Beauty</h4></Link></Col>
            <Col span={3} ><Link to="/brand"><h4 style={{ textAlign: "center" }}>Mask</h4></Link></Col>
            <Col span={3} ><Link to="/brand"><h4 style={{ textAlign: "center" }}>Moisturizer</h4></Link></Col>
            <Col span={3} ><Link to="/brand"><h4 style={{ textAlign: "center" }}>Sunscreen</h4></Link></Col>
          </Row>
          <br />
        </div>
        <Row>
          <Col align="middle"><h1 style={{ color: "#DE648B", margin: "20px" }}>HOT ITEMS</h1></Col>
        </Row>
        {/* <div className="hotitem">
          <Row gutter={32}>
            <Col span={4} ><Link to="/compare2"><div className="box2"><img src={item1} className="ch" alt="item" /></div></Link></Col>
            <Col span={4} ><Link to="/compare2"><div className="box2"><img src={item2} className="ch" alt="item" /></div></Link></Col>
            <Col span={4} ><Link to="/compare2"><div className="box2"><img src={item3} className="ch" alt="item" /></div></Link></Col>
            <Col span={4} ><Link to="/compare2"><div className="box2"><img src={item4} className="ch" alt="item" /></div></Link></Col>
            <Col span={4} ><Link to="/compare2"><div className="box2"><img src={item5} className="ch" alt="item" /></div></Link></Col>
            <Col span={4} ><Link to="/compare2"><div className="box2"><img src={item6} className="ch" alt="item" /></div></Link></Col>
          </Row>
        </div>
        <br/> */}
        <div className="content">
          <Row>
            <Col align="middle"><h1 style={{ color: "#DE648B", margin: "20px" }}>BLOG</h1></Col>
          </Row>
          <div>
            <Row gutter={16}>
              <Col align="right" span={12}>
                <img src={rev} alt="content"/>
                {/* <div style={{ background: "grey", height: "100px", margin: "10px", width: "60%" }}></div> */}
              </Col>
              <Col align="left" span={12}>
                <img src={rev2} alt="content"/>
                {/* <div style={{ background: "grey", height: "100px", margin: "10px", width: "60%" }}></div> */}
              </Col>
            </Row>
            <Row gutter={16}>
              <Col align="right" span={12}>
                <img src={rev3} alt="content"/>
                {/* <div style={{ background: "grey", height: "100px", margin: "10px", width: "60%" }}></div> */}
              </Col>
              <Col align="left" span={12}>
                <img src={rev4} alt="content" style={{ width: "406px", height: "110px" }} />
                {/* <div style={{ background: "grey", height: "100px", margin: "10px", width: "60%" }}></div> */}
              </Col>
            </Row>
            <Row>
              <Col align="middle" >
                <br />
                <Button style={{ backgroundColor: "#FBDDDD", border: "none" }} onClick={() => this.setState({ other: true })} type="primary" shape="round" size="large">
                  <h5 style={{ color: "black" }}>อ่านเพิ่มเติม</h5>
                </Button>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    )
  }
}


export default Home;
