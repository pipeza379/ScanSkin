import React, { Component } from "react"
import Action from '../../action'
import { connect } from "react-redux"
import correct from '../../data/img/correct.png'
import logo from '../../data/img/mylogo.png'

const brand = [
    {
        src: logo,
        toggle: false,
    }
]

class Main extends Component {
    constructor() {
        super()
        this.state = {
            brand,
        };
    }

    refCallback = element => {
        if (element) {
            let height = element.getBoundingClientRect().height
            // console.log(height)
            this.props.getHeight(height);
        }
    }

    toggle = (element) => {
        let toggle = element.target.getAttribute("toggle") === "false" ? "true" : "false"
        element.target.setAttribute("toggle", `${toggle}`)
    }

    hiddenIMG = (element) => {
        let index = parseInt(element.target.getAttribute("index"))
        let {toggle,src} = this.state.brand[index]
        toggle = !toggle
        // console.log(index,toggle,src)
        this.setState({
            brand:[
                // ...this.state.brand,
                {
                    toggle,
                    src,
                }
            ]
        })
    }   

    componentDidUpdate

    render() {
        return (
            <div ref={this.refCallback} className="select">
                <div className="brand-products">
                    <h5>ss</h5>
                    <div className="test" onClick={this.toggle} toggle="false">
                        test
                    </div>
                    <div className="collape" onClick={this.toggle} toggle="false">
                        <img className="test-logo" src={brand[0].src} style={{width:"100%"}}index="0" onClick={this.hiddenIMG} />
                        {this.state.brand[0].toggle && <img className="test-correct" onClick={this.hiddenIMG} index="0" src={correct} />}
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    getHeight: (height) => dispatch({ type: Action.GETHEIGHT, value: height }),
})
const mapStateToProps = state => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Main)