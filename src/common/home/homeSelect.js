import React, { Component } from "react"
import { Row, Col } from "antd"
import TYPES from './type'
import choose from '../../asset/img/select.svg'


class HomeSelect extends Component {
    constructor() {
        super()
        this.state = {
            types: [...TYPES],
            select: {},  
        };
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.state !== nextState
    }

    hiddenCheck = (element) => {
        let index = element.target.getAttribute("index")
        let { toggle, name } = this.state.types[index]
        let new_types = this.state.types
        new_types.map((e) => {
            e.toggle = false
        })
        new_types[index].toggle = !toggle
        this.setState({
            types: new_types,
            select: {
                ...this.state.select,
                brand:name,
            }
        })
    }

    createType = () => {
        let types = this.state.types
        let type = []
        for (let i = 0; i < 8; i++) {
            type.push(
                <Col className="select-type" key={`type-${i}`} lg={{ span: 3 }} md={{ span: 6 }}>
                    <div className="img-type">
                        <img alt={types[i].name} src={types[i].src} onClick={this.hiddenCheck} index={i} className="img-center" />
                        {this.state.types[i].toggle && <img alt="choose" src={choose} onClick={this.hiddenCheck} index={i} className="img-center" />}
                    </div>
                    <h4 className="type-name">{types[i].name}</h4>
                </Col >
            )
        }
        return (
            <Row gutter={8} align="middle" type="flex" justify="center" >
                {type}
            </Row>
        )
    }


    render() {
        return (
            <>
                <header className="select-type-home">
                    <h1 className="select-head">SELECT</h1>
                    <span className="select-detail">เลือกประเภทผลิตภัณฑ์ที่คุณต้องการเปรียบเทียบ</span>
                </header>
                {this.createType()}
            </>
        )
    }
}

export default HomeSelect