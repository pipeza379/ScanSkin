import React, { Component } from "react"
import { StickyContainer, Sticky } from 'react-sticky'
import { connect } from "react-redux"


class ChooseSidebar extends Component {
    constructor(props) {
        super(props)
        this.state = {};
    }

    render() {
        console.log(this.props.select)
        return (
            <StickyContainer>
                <Sticky topOffset={80}>
                    {({ style }) => <div className="select-box" style={style}>
                        <h2>test</h2>
                        <br />
                    </div>}
                </Sticky>
                <div style={{ height: this.props.select.height }}></div>
            </StickyContainer>
        )
    }
}

const mapStateToProps = state => ({
    select: state.select
})

export default connect(mapStateToProps)(ChooseSidebar)