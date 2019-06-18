import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../../asset/css/selectproducts.css'
import SelectSkin from './selectSkin';
import Product from './showproduct';

class SelectProducts extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div className="select-products">
        <SelectSkin />
        <Product/>
      </div>
    )
  }
}
const mapDispatchToProps = dispatch => ({
})
const mapStateToProps = state => ({

})


export default connect(mapStateToProps, mapDispatchToProps)(SelectProducts)
