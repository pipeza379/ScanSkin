import React, { Component,useState } from "react"
import { Col, Row, Pagination } from "antd"
// import { ceil } from "mathjs"
import '../../asset/css/allproduct.css'
import * as data from './data'

var { products: all_products, hot_products, fake_products } = data
const TOTAL = fake_products.length
const PAGESIZE = 40

function filterProducts(pageNumber) {
    let products_next_page = []
    let start_product = 0
    for (let i = 0; i < pageNumber - 1; i++)
        start_product += PAGESIZE
    let end_product = start_product + PAGESIZE
    end_product = end_product > fake_products.length ? fake_products.length : end_product
    for (let i = start_product; i < end_product; i++) {
        products_next_page.push(fake_products[i])
    }
    return products_next_page
}

class AllProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            total: TOTAL,
            current_page: 1,
            products_page: filterProducts(1),
        };
    }

    createTable = (products, name = "item", page = 0) => {
        let table = []
        let classname = name === "hot" ? "hot-products" : "all-products"

        let x = 1
        products.forEach(d => {
            table.push(
                <div className={`${name}${x}`} key={x}>
                    <h6>{d.name}</h6>
                </div>
            )
            x += 1
        })
        return (
            <div>
                <Row align="middle">
                    <Col md={{ span: 18, offset: 3 }}>
                        {name === "hot" && <h2 style={{ textAlign: "center" }}>สินค้ายอดฮิต</h2>}
                        {name !== "hot" && <h2>ผลิตภัณฑ์ทั้งหมด</h2>}
                        <div className={classname}>
                            {table}
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }

    changePage = pageNumber => {
        console.log(pageNumber)
        let products_next_page = filterProducts(pageNumber)
        this.setState({
            current_page: pageNumber,
            products_page: products_next_page
        })
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.state.current_page !== nextState.current_page
    }

    render() {
        return (
            <div>
                {/* {console.log(PAGESIZE)} */}
                {this.state.current_page === 1 && this.createTable(hot_products, "hot")}
                {/* {this.createTable(all_products, "item", 1)} */}
                {this.createTable(this.state.products_page, "item")}
                <br />
                <Row align="middle">
                    <Col md={{ span: 12, offset: 6 }} align="middle">
                        <Pagination
                            size="small"
                            defaultCurrent={1}
                            showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
                            total={this.state.total}
                            pageSize={PAGESIZE}
                            onChange={this.changePage}
                        />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default AllProduct;
