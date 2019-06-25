import React, { Component } from "react"
import { connect } from 'react-redux'
import Filter from "../../features/filter";


class SelectSkin extends Component {
    constructor(props) {
        super(props)
        this.state = { width: "0px" };
    }
    getWidth = (element) => {
        if (element) {
            let width = element.getBoundingClientRect().width
            this.setState({ width })
        }
    }

    selectSkinType = () => {

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
                <Filter select={this.selectSkinType} title="โปรดเลือกประเภทผิว" filter={["ผิวปกติ", "ผิวมัน", "ผิวแห้ง", "ผิวบอบบาง"]} />
                <br />
                <div className="underline" ><span style={{ width: this.state.width }} /></div>
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