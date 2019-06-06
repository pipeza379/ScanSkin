import React, { Component } from 'react'
import { Select, Row, Col } from 'antd'
import mylogo from '../data/img/mylogo.png'
import '../asset/css/head.css'

class HeadBar extends Component {
    render() {
        return (
            <div className="head-bar">
                <Row type="flex" align="middle">
                    <Col span={3} align="middle">
                        <img src={mylogo} alt="logo" />
                    </Col>
                    <Col span={18}>
                        <Select style={{ width: "100%" }} />
                    </Col>
                    <Col span={3} align="middle">
                        <h6>Login Register</h6>
                    </Col>
                </Row>
            </div>
        )
    }

}
export default HeadBar