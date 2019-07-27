import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../../asset/css/compareproduct.scss'
import properties from './props.json'
import firebase from '../../firebaseDB'

class CompareProduct extends Component {
  constructor(props) {
    super(props)
    this.state = { getData: [] }
  }
  componentDidMount() {
    if (this.props.getProducts.length !== 0) {
      let database = firebase.database().ref('allproducts')
      database.once('value').then(async snapshot => {
        let ids = this.props.getProducts.map(product => product.id)
        let data = []
        ids.forEach(id => data.push(snapshot.child(`${id}`).val()))
        this.setState({ getData: data })
      })
    }
  }

  createCompareTable = () => {
    let table = []
    Object.keys(properties).forEach(title => {
      let products = []
      this.state.getData.forEach(product => {
        if (title === 'img') {
          products.push(
            <img
              className={`${title}-compare`}
              src={product[title]}
              alt="compare"
            />
          )
        } else {
          products.push(
            <div className={`${title}-compare`}>{product[title]}</div>
          )
        }
      })

      table.push(
        <div className="title" key={title}>
          <div className="title-head">{properties[title]}</div>
          <div className="show-compare-products">{products}</div>
        </div>
      )
    })
    return (
      <>
        <header>{this.props.getProductsType}</header>
        <div className="table-compare">{table}</div>
      </>
    )
  }
  render() {
    return <div className="compare-products">{this.createCompareTable()}</div>
  }
}
const mapStateToProps = state => ({
  getProductsType: state.compare.select_product_type,
  getProducts: state.select.products
})
export default connect(mapStateToProps)(CompareProduct)
