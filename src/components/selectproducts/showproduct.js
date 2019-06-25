import React, { Component } from "react";
import Filter from '../../features/filter'
import { connect } from "react-redux"


// const brand = ["SK-II", "LANEIGE", "BOBBI BROWN", "INNISFREE"]

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  selectFilter = () => {

  }

  createBrand = () => {
    let brandTable = []
    const brands = this.props.getBrand
    brands.forEach((brand) => brandTable.push(
      <div className="brand-filter" key={brand}>
        <Filter select={this.selectFilter} title={`${brand} ความต้องการ`} filter={["แบบ OIL", "แบบ CREAM", "แบบ MILK", "แบบเนื้อ JELL", "แบบน้ำ"]} />
      </div>
    ))

    return (brandTable)
  }

  render() {
    return (
      <>
        <h1>ผลการค้นหา</h1>
        {this.createBrand()}
      </>
    );
  }
}

const mapDispatchToProps = dispatch => ({

})
const mapStateToProps = state => ({
  getBrand: state.compare.select_brand,
})

export default connect(mapStateToProps, mapDispatchToProps)(Product);
