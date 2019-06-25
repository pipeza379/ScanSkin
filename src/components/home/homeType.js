import React, { Component } from "react"
import { connect } from "react-redux"
import Action from '../../action'

import TYPES from './type'
import choose from '../../asset/img/select.svg'


class HomeType extends Component {
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
        //want false->true 
        toggle = !toggle
        if (toggle) {
            //set all toggle to false
            new_types.map((e) => e.toggle = false)
            this.props.setType(name)
        }
        else
            this.props.setType("")

        new_types[index].toggle = toggle
        this.setState({
            types: new_types,
        })
    }

    createType = () => {
        let types = this.state.types
        let type = []
        for (let i = 0; i < 8; i++) {
            type.push(
                <div key={i}>
                    <div className="img-type">
                        <img alt={types[i].name} src={types[i].src} onClick={this.hiddenCheck} index={i} className="img-center" />
                        {this.state.types[i].toggle && <img alt="choose" src={choose} onClick={this.hiddenCheck} index={i} className="img-center" />}
                    </div>
                    <h6 className="type-name">{types[i].name}</h6>
                </div>
            )
        }
        return (<div className="select-type">{type}</div>)
    }


    render() {
        return (
            <>
                <header className="select-type-home">
                    <h2 className="select-head">SELECT</h2>
                    <span className="select-detail fontth">เลือกประเภทผลิตภัณฑ์ที่คุณต้องการเปรียบเทียบ</span>
                </header>
                {this.createType()}
            </>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    setType: (name) => dispatch({ type: Action.SELECTTYPE, name }),
})
const mapStateToProps = state => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(HomeType)
