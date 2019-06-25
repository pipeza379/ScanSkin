import React from 'react'
import '../../asset/css/selectproducts.css'
import SelectSkin from './selectSkin';
import Product from './showproduct';

function SelectProducts() {
  return (
    <div className="select-products">
      <SelectSkin />
      <Product />
    </div>
  )
}

export default SelectProducts
