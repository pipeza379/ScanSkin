import React, { Component } from "react"
import { connect } from "react-redux"
import { Link } from 'react-router-dom'
import choose from '../../asset/img/select.svg'
import BRANDS from './brands'
import Action from '../../action'

class HomeBrands extends Component {
    constructor() {
        super()
        this.state = {
            brands: [...BRANDS],
        };
    }

    hiddenCheck = (element) => {
        let select_brands = this.props.getBrand
        let index = element.target.getAttribute("index")
        let { toggle, name } = this.state.brands[index]
        let new_brands = this.state.brands


        !toggle ? select_brands.push(name) : select_brands = select_brands.filter(e => e !== name)
        this.props.setBrand(select_brands)
        new_brands[index].toggle = !toggle
        this.setState({
            brands: new_brands,
        })

        // if (select_brands.length <= 4) { //check element <5 because we check amount of brands before add brand 
        //     if (!toggle && select_brands.length + 1 <= 4) { //select when brand in store <=4  
        //         select_brands.push(name)
        //         this.props.setBrand(select_brands)
        //         toggle = !toggle
        //     }
        //     else if (toggle) { //remove from store when change to false (true->false)
        //         select_brands = select_brands.filter(e => e !== name)
        //         this.props.setBrand(select_brands)
        //         toggle = !toggle
        //     }
        //     //last case maybe have condition that store==4 and toggle change FALSE to TRUE so previous case is "else if" not else 
        //     new_brands[index].toggle = toggle
        //     console.log(toggle)
        //     this.setState({
        //         brands: new_brands,
        //     })
        // }
    }

    shouldComponentUpdate(nextProps, nextState) {
        return (this.props !== nextProps || this.state !== nextState)
    }

    createBrands = () => {
        let brands = this.state.brands
        let table = []
        for (let i = 0; i < brands.length; i++) {
            table.push(
                <div className="img-brands" key={i}>
                    <img alt={brands[i].name} src={brands[i].src} onClick={this.hiddenCheck} index={i} className="overlap" />
                    {this.state.brands[i].toggle && <img alt="choose" src={choose} onClick={this.hiddenCheck} index={i} className="overlap choose" />}
                </div>
            )
        }
        return (
            <div className="select-brands">
                {table}
            </div>
        )
    }

    checkCompare = () => {
        let { getBrand, getType } = this.props
        if (getBrand !== [] && getType !== "")
            return <Link to="./selectproducts"><button className="compare-btn">เปรียบเทียบ</button></Link>
        else
            return <button className="compare-btn">เปรียบเทียบ</button>
    }

    render() {
        return (
            <>
                <header className="select-brands-home">
                    <h2 className="compare-head">COMPARE</h2>
                    <span className="compare-detail fontth">เลือกแบรนด์ที่คุณต้องการเปรียบเทียบ</span>
                </header>
                <div className="compare-home">
                    {this.createBrands()}
                    {this.checkCompare()}
                </div>
            </>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    setBrand: (name) => dispatch({ type: Action.SELECTBRANDS, name }),
})
const mapStateToProps = state => ({
    getBrand: state.compare.select_brand,
    getType: state.compare.select_type
})


export default connect(mapStateToProps, mapDispatchToProps)(HomeBrands)