import React, { Component } from "react"
import Action from '../../action'
import { connect } from "react-redux"

class Main extends Component {
    constructor() {
        super()
        this.state = {};
    }

    refCallback = element => {
        if (element) {
            // this.elementRef = element;
            let height = element.getBoundingClientRect().height
            console.log(height)
            this.props.getHeight(height);
        }
    }

    render() {
        return (
            <div ref={this.refCallback} className="select">

            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    getHeight: (height) => dispatch({ type: Action.GETHEIGHT, value:height }),
})
const mapStateToProps = state =>({

})

export default connect(mapStateToProps,mapDispatchToProps)(Main)