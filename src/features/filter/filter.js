import React, { Component } from "react"
import './filter.css'

class Filter extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    createFilter = (title = "", filter) => {
        let type = []
        for (let i = 0; i < filter.length; i++)
            type.push(<div className="select-filter" index={i} click="false" key={i} onClick={this.selectFilter}>{filter[i]}</div>)
        return (
            <div className="filter">
                <span className="title-filter">{title}</span>
                {type}
            </div>
        )
    }

    selectFilter = (element) => {
        let click = element.target.getAttribute("click") === "false" ? "true" : "false"
        element.target.setAttribute("click", click)
        let select = element.target.getAttribute("index") //"index" pointing index position
        this.props.select(parseInt(select), click)
    }

    render() {
        return (
            <>
                {this.createFilter(this.props.title, this.props.filter)}
            </>
        )
    }
}

export default Filter