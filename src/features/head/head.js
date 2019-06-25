import React from 'react'
import { Select, Row, Col } from 'antd'
import { Link } from 'react-router-dom'
import mylogo from '../../data/img/mylogo.png'
import './head.css'

const HeadBar = () => {
    return (
        <div className="head-bar">
            <Row type="flex" align="middle">
                <Col span={3} align="middle">
                    <Link to="/"><img src={mylogo} alt="logo" /></Link>
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
export default HeadBar