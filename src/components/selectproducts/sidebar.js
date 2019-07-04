import React, { Component } from "react"
import Action from "../../action";
import { connect } from "react-redux"

class SideBar extends Component {
    constructor() {
        super()
        this.state = {};
    }

    removeProduct = e => {
        let select_product = [...this.props.getProducts]
        console.log(e.target.getAttribute("index"))
        let index = e.target.getAttribute("index")
        select_product.splice(index, 1)
        this.props.setProduct(select_product)
    }

    productsTable = () => {
        let myProducts = this.props.getProducts
        let table = []
        myProducts.forEach(product => {
            let { id, img, name,index } = product
            table.push(<div className="my-products" key={id}>
                <button className="remove-product" index={index} onClick={this.removeProduct.bind(this)}>X</button>
                <img src={img} alt={name} />
                <span>{name}</span>
            </div>
            )
        })
        return table
    }

    render() {
        return (
            <div className="side-bar-container">
                <div className="how-to">howto</div>
                <div className="number">{this.props.getProducts.length}/4</div>
                <div className="side-bar-title">{this.props.getProductsType.toUpperCase()}</div>
                {this.productsTable()}
            </div>
        )
    }
}


const mapDispatchToProps = dispatch => ({
    setProduct: products => dispatch({ type: Action.SELECTPRODUCT, products })
})
const mapStateToProps = state => ({
    getProductsType: state.compare.select_product_type,
    getProducts: state.select.products
})
export default connect(mapStateToProps, mapDispatchToProps)(SideBar);