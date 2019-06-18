import React, { Component } from "react"
import { connect } from 'react-redux'


class SelectSkin extends Component {
    constructor() {
        super()
        this.state = { width: "0px" };
    }

    selectSkin = (element) => {
        let click = element.target.getAttribute("click") === "false" ? "true" : "false"
        element.target.setAttribute("click", click)

    }

    getWidth = (element) => {
        if (element) {
            let width = element.getBoundingClientRect().width
            console.log(width)
            this.setState({ width })
        }
    }

    render() {
        const type = this.props.getType === "" ? "Please Select Type" : this.props.getType
        return (
            <>
                <div ref={this.getWidth} className="title-type">
                    <span className="line" />
                    <h1>{type}</h1>
                    <span className="line" />
                </div>
                <div className="select-skin-type">
                    <span className="title">โปรดเลือกประเภทผิว</span>
                    <div className="select-skin" skin="normal" click="false" onClick={this.selectSkin}>ผิวปกติ</div>
                    <div className="select-skin" skin="" click="false" onClick={this.selectSkin}>ผิวมัน</div>
                    <div className="select-skin" skin="" click="false" onClick={this.selectSkin}>ผิวแห้ง</div>
                    <div className="select-skin" skin="" click="false" onClick={this.selectSkin}>ผิวบอบบาง</div>
                </div>
                <br/>   
                <div className="underline" ><span style={{ width: this.state.width }}/></div>
            </>
        )
    }
}

const mapDispatchToProps = dispatch => ({
})
const mapStateToProps = state => ({
    getType: state.compare.select_type
})
export default connect(mapStateToProps, mapDispatchToProps)(SelectSkin)