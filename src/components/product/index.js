import React, { useState } from "react"
import { Col, Row, Pagination } from "antd"
import '../../asset/css/allproduct.css'
import * as data from './data'

const { products: all_products, hot_products, fake_products } = data
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

function createTable(products, name, title) {
    let table = []
    let x = 1
    products.forEach(d => {
        table.push(
            <div className={`${name}${x}`} key={x}>
                {/* <img src={d.img} alt="product"/> */}
                <h6>{d.name}</h6>
            </div>
        )
        x += 1
    })
    return (
        <div>
            <Row align="middle">
                <Col md={{ span: 18, offset: 3 }}>
                    <h2 className={`h2-${name}`}>{title}</h2>
                    <div className={name}>
                        {table}
                    </div>
                </Col>
            </Row>
        </div>
    )
}

function AllProduct() {
    const [current, setPage] = useState(1)
    const [products, setProduct] = useState(filterProducts(1))
    function changePage(pageNumber) {
        console.log(pageNumber)
        setPage(pageNumber)
        setProduct(filterProducts(pageNumber))
    }
    return (
        <div>
            {current === 1 && createTable(hot_products, "hot-products", "ผลิตภัณฑ์ยอดฮิต")}
            {createTable(products, "all-products", "ผลิตภัณฑ์ทั้งหมด")}
            <br />
            <Row align="middle">
                <Col md={{ span: 12, offset: 6 }} align="middle">
                    <Pagination
                        size="small"
                        defaultCurrent={1}
                        showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
                        total={TOTAL}
                        pageSize={PAGESIZE}
                        onChange={changePage}
                    />
                </Col>
            </Row>
        </div>
    )

}
export default AllProduct
