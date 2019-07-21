import React, { Component } from "react";
import Filter from "../../features/filter";
import { connect } from "react-redux";
import firebase from "../../firebaseDB";
import Action from "../../action";
import Carousel from "../../features/carousel";

const brands = ["innisfree"];

class Product extends Component {
  constructor(props) {
    super(props);

    // let brands = {}
    // this.props.getBrand.forEach(brand => {
    //   brands[brand] = []//set subfilter
    // })

    this.state = {
      brands,
      products: {},
      products_filter: {}
    };
  }

  // fetch data from all brands that is skin that you choose
  componentDidMount() {
    let type = this.props.getProductsType.toLowerCase();
    if (type !== "") {
      console.log("Fetching");
      let database = firebase.database().ref("brands");
      database.once("value").then(snapshot => {
        let brands = ["innisfree"];
        let products = {};
        // let brands = this.props.getBrand

        //it choose each skin type of brand
        brands.forEach(brand => {
          let product = snapshot.child(`${brand}/${type}`).val();
          // if cann't find it will null
          if (product !== null)
            // set product >>> products{"brand":{product} }
            products[brand] = product;
        });
        // console.log(products)
        let products_filter = this.filterSkin(this.props.getSkinType, products);
        // console.log(products_filter)
        this.setState({ products, products_filter });
      });
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      this.props.getSkinType !== nextProps.getSkinType ||
      this.state.products_filter !== nextState.products_filter
    );
  }

  // when filter of skin change it will recieve new props (new filter ["","","",""])
  componentWillReceiveProps(nextProps) {
    if (this.props.getSkinType !== nextProps.getSkinType) {
      let select_skin_type = nextProps.getSkinType;
      let products_filter = this.filterSkin(
        select_skin_type,
        this.state.products
      );
      console.log(products_filter);
      this.setState({
        products_filter
      });
    }
  }

  filterSkin = (sel, products) => {
    // products >> {
    //                brand:{id,id,id},
    //                brand:{id,id,id},
    //             }
    // each id has "skin,id,name,link img"

    let [normal, oily, dry, sensitive] = sel;
    let products_filter = {};
    let brands = Object.keys(products);
    brands.forEach(brand => {
      let key = Object.keys(products[brand]);
      let products_brand_filter = {};
      key.forEach(id => {
        for (let i = 0; i < sel.length; i++) {
          let type = products[brand][id].skin[i];
          // console.log(type, type === normal, type === dry, type === oily)

          // case that you donn't select filter
          if (normal === "" && dry === "" && oily === "" && sensitive === "") {
            products_brand_filter[id] = products[brand][id];
            break;
          }
          // type !== "" of each product
          else if (
            type !== "" &&
            (type === normal ||
              type === dry ||
              type === oily ||
              type === sensitive)
          ) {
            products_brand_filter[id] = products[brand][id];
            break;
          }
        }
      });
      products_filter[brand] = products_brand_filter;
    });
    return products_filter;
  };

  selectFilter = () => {};

  hasIDSelect = (select_product, id) => {
    //if you was select return false and remove,return true for push product
    for (let i = 0; i < select_product.length; i++) {
      if (select_product[i].id === id) {
        return i;
      }
    }
    return -1;
  };

  selectProduct = e => {
    e = e.target;
    let id = e.hasAttribute("id")
      ? e.getAttribute("id")
      : e.parentElement.getAttribute("id");
    let select_product = [...this.props.getProducts];
    console.log(id);
    console.log(e);
    let find = this.hasIDSelect(select_product, id);
    if (find === -1 && select_product.length < 4) {
      let brand = e.hasAttribute("brand")
        ? e.getAttribute("brand")
        : e.parentElement.getAttribute("brand");
      let product = this.state.products[brand][id];
      let index = select_product.length;
      select_product.push({ id, img: product.img, name: product.name, index });
      this.props.selectProduct(select_product);
    } else if (find !== -1) {
      select_product.splice(find, 1);
      this.props.selectProduct(select_product);
    }
  };

  createBrand = () => {
    let brandTable = [];
    // const brands = this.props.getBrand
    brands.forEach(brand => {
      brand = brand.toLowerCase();
      let product_from_brand = this.state.products_filter[brand];
      let productTable = [];
      if (product_from_brand !== undefined) {
        Object.keys(product_from_brand).forEach(id => {
          let product = product_from_brand[id]; //product{id:{name:,img:,brand:}}
          productTable.push(
            <div
              className="product"
              brand={brand}
              key={id}
              id={id}
              onClick={this.selectProduct.bind(this)}
            >
              <img src={product.img} alt={product.brand} />
              <h3>{product.name}</h3>
            </div>
          );
        });
        brandTable.push(
          <div className="brand-filter" key={brand}>
            <Filter
              select={this.selectFilter}
              title={`${brand} ความต้องการ`}
              filter={[
                "แบบ OIL",
                "แบบ CREAM",
                "แบบ MILK",
                "แบบเนื้อ JELL",
                "แบบน้ำ"
              ]}
            />
            {/* <div className="product-filter" brand={brand}> */}
              {/* {productTable} */}
              {/* {console.log("test")} */}
              <Carousel amount={4} listItem={productTable} />
            {/* </div> */}
          </div>
        );
      }
    });

    return brandTable;
  };

  render() {
    return (
      <div className="show-select-products">
        <span className="find">ผลการค้นหา</span>
        {this.createBrand()}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  selectProduct: products => dispatch({ type: Action.SELECTPRODUCT, products })
});
const mapStateToProps = state => ({
  getBrand: state.compare.select_brand,
  getProductsType: state.compare.select_product_type,
  getSkinType: state.compare.select_skin_type,
  getProducts: state.select.products
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Product);
