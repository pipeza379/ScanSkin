import React, { Component } from "react"
import { Link} from "react-router-dom"
import { Row, Col, Typography } from "antd"
import HeadBar from '../../features/head'
import '../../asset/css/compare.css'
import props from './props.json'

const { Text } = Typography
const products = [{
  index: 1,
  img: "",
  name: "SK-II Facial Treatment Essence",
  rating: 4,
  type: "",
  description: {
    brand: "",
    price: 100,
    quantities: "10g",
    skin: "",
    using: "ss"
  },
  filter: [
    "fil4"
  ],
  hot: true
},
{
  index: 2,
  img: "",
  name: "BIOTHERM Life Plankton Essence",
  rating: 5,
  type: "",
  description: {
    brand: "",
    price: 150,
    quantities: "10g",
    skin: "",
    using: "ss"
  },
  filter: [
    "fil2",
    "fil3"
  ],
  hot: true
},
{
  index: 3,
  img: "",
  name: "ESTEE LAUDER Advanced Night Repair Synchronized Recovery Complex II",
  rating: 3.5,
  type: "",
  description: {
    brand: "",
    price: 70,
    quantities: "10g",
    skin: "",
    using: "ss"
  },
  filter: [
    "fil1",
    "fil4"
  ],
  hot: true
}]

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
      let { img, name, rating, type, description } = product
      let { brand, price, quantities, skin, using } = description
      let newProp = {
        img,
        brand,
        rating,
        name,
        type,
        properties: "",
        skin,
        using,
        quantities,
        price
      }
      return newProp
    })

    return (
      <React.Fragment>
        <HeadBar />
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
