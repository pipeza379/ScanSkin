import React from "react"
import "../../asset/css/selectproducts.css"
import SelectSkin from "./selectskin"
import Product from "./showproduct"
import SideBar from "./sidebar"

function SelectProducts() {
  return (
    <div className="select-products">
      <SelectSkin />
      <div className="show-products">
        <Product />
        <div className="side-bar">
          <SideBar />
        </div>
      </div>
    </div>
  )
}

export default SelectProducts
