import React, { Component } from "react";
import { Col, Row, Pagination } from "antd";
import HeadBar from '../../features/head'
import '../../asset/css/allproduct.css'
import * as data from './data'

var { products: all_products, hot_products } = data

class AllProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    createTable = (products, name = "item") => {
        let table = []
        products.forEach(d => {
            let x = 1
            table.push(
                <div className={`${name}${x}`} index={x}>
                    <h6>{d.name}</h6>
                </div>
            )
            x++
        })
        return table
    }

    render() {
        return (
            <div>
                <HeadBar/>
                <div>
                    <Row align="middle">
                        <Col md={{span:18,offset:3}}>
                            <h2 style={{ textAlign: "center" }}>สินค้ายอดฮิต</h2>
                            <div className="hot-products">
                                {this.createTable(hot_products, "hot")}
                            </div>
                        </Col>
                    </Row>
                </div>
                <div>
                    <Row align="middle">
                        <Col md={{span:18,offset:3}}>
                            <h2>ผลิตภัณฑ์ทั้งหมด</h2>
                            <div className="all-products">
                                {this.createTable(all_products)}
                            </div>
                        </Col>
                    </Row>
                    <br />
                    <Row align="middle">
                        <Col md={{span:12,offset:6}} align="middle">
                            <Pagination ize="small" defaultCurrent={1} total={50} />
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default AllProduct;
