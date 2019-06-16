import React, { Component } from "react"
import { Row, Col } from "antd"
import choose from '../../asset/img/select.svg'
import BRANDS from './brands'
class HomeCompare extends Component {
    constructor() {
        super()
        this.state = {
            brands: [...BRANDS],
        };
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.state !== nextState
    }

    hiddenCheck = (element) => {
        let index = element.target.getAttribute("index")
        let { toggle, src, name } = this.state.brands[index]
        let new_brands = this.state.brands
        new_brands[index].name = name
        new_brands[index].src = src
        new_brands[index].toggle = !toggle

        // console.log(new_brands)
        this.setState({
            brands: new_brands,
        })
    }

    createBrands = () => {
        let brands = this.state.brands
        let table = []
        for (let i = 0; i < brands.length; i++) {
            table.push(
                <div className="img-brands" key={i}>
                    <img alt={brands[i].name} src={brands[i].src} onClick={this.hiddenCheck} index={i} className="overlap" />
                    {this.state.brands[i].toggle && <img alt="choose" src={choose} onClick={this.hiddenCheck} index={i} className="overlap" />}
                </div>
            )
        }
        return (
            <div className="select-brands">
                {table}
            </div>
        )
    }

    render() {
        return (
            <>
                <header className="select-type-home">
                    <h1 className="compare-head">Compare</h1>
                    <span className="compare-detail">เลือกแบรนด์ที่คุณต้องการเปรียบเทียบ</span>
                </header>
                {this.createBrands()}
            </>
        )
    }
}

export default HomeCompare