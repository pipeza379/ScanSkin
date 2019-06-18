import React, { Component } from "react"
import { Col, Row } from "antd"
import Main from './main'
import ChooseSidebar from './sidebar'
import '../../asset/css/select.css'

class Select extends Component {
    constructor() {
        super()
        this.state = {
            size: {
                height: 0,
            },
        };
    }

    render() {
        return (
            <>
                <Row>
                    <Col md={{ span: 18, offset: 3 }}>
                        <Main getSize={size => this.setState({ size })} />
                    </Col>
                    <Col md={{ span: 3 }}>
                        <ChooseSidebar height={this.state.size.height}/>
                    </Col>
                </Row>
            </>
        )
    }
}

export default Select