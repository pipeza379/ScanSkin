import React, { Component } from "react"
import { Link} from "react-router-dom"
import { Row, Col, Typography } from "antd"
import '../../asset/css/compare.css'
import props from './props.json'
import {products} from './data'

const { Text } = Typography

class Compare extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  compareTable = (data) => {
    let compare = []
    for (let x in data[0]) {
      let col = []
      for (let i = 0; i < data.length; i++) {
        col.push(<Col span={6}><Text type="secondary">{data[i][x]}</Text></Col>)
      }
      compare.push(
        <div className={`table-${x}`}>
          <Row type="flex" justify="center">
            <Col span={6 * data.length}>
              <h3 className="title-compare">{props[x]}</h3>
            </Col>
          </Row>
          <div className="information">
            <Row type="flex" justify="center">
              {col}
            </Row>
          </div>
          <br />
        </div>
      )
    }
    return compare
  }

  render() {
    const filterProduct = products.map(product => {
      let { img, name, rating, type, brand, price, quantities, using } = product
      // let { brand, price, quantities, skin, using } = description
      return ({
        img,
        brand,
        rating,
        name,
        type,
        properties: "",
        using,
        quantities,
        price
      })
    })

    return (
      <React.Fragment>
        <Row align="middle">
          <Col span={20} offset={2}>
            <div className="compare-table">
              {this.compareTable(filterProduct)}
            </div>
            <br/>
            <button className="btn-other-compare"><Link to="../">เปรียบเทียบสินค้าอื่น</Link></button>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default Compare;
