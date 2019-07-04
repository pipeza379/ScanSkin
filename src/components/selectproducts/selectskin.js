import React, { Component } from "react"
import { connect } from "react-redux"
import Filter from "../../features/filter"
import Action from '../../action'

class SelectSkin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            width: "0px",
        };
    }

    getWidth = (element) => {
        if (element) {
            let width = element.getBoundingClientRect().width
            this.setState({ width })
        }
    }

    selectSkinType = (index, click) => {
        let type = ["normal", "oily", "dry", "sensitive"]
        let sel = [...this.props.getSkinType]
        sel[index] = (click === "true") ? type[index] : ""
        this.props.setSkinFilter(sel)
    }

    render() {
        const type = this.props.getProductType === "" ? "Please Select Type" : this.props.getProductType
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
    setSkinFilter: (select) => dispatch({ type: Action.SELECTSKINTYPE,select })
})
const mapStateToProps = state => ({
    getProductType: state.compare.select_product_type,
    getSkinType: state.compare.select_skin_type,
})
export default connect(mapStateToProps, mapDispatchToProps)(SelectSkin)