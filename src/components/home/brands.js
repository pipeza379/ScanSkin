import AVEDA from '../../asset/img/brands/1.jpg'
import LOCCITANE from '../../asset/img/brands/2.jpg'
import LANCOME from '../../asset/img/brands/3.jpg'
import SHISEIDO from '../../asset/img/brands/4.jpg'
import SULWHASOO from '../../asset/img/brands/5.jpg'
import CLARINS from '../../asset/img/brands/6.jpg'
import BOBBIBROWN from '../../asset/img/brands/7.jpg'
import FRESH from '../../asset/img/brands/8.jpg'
import CLINIQUE from '../../asset/img/brands/9.jpg'
import URBANDECAY from '../../asset/img/brands/10.jpg'
import PHILOSOPHY from '../../asset/img/brands/11.jpg'
import JOMALONE from '../../asset/img/brands/12.jpg'
import THREE from '../../asset/img/brands/13.jpg'
import LAURAMERCIER from '../../asset/img/brands/14.jpg'
import KIEHLS from '../../asset/img/brands/15.jpg'
import ESTEELAUDER from '../../asset/img/brands/16.jpg'

const NAME = ["AVEDA", "LOCCITANE", "LANCOME", "SHISEIDO", "SULWHASOO", "CLARINS", "BOBBIBROWN", "FRESH", "CLINIQUE", "URBANDECAY", "PHILOSOPHY", "JOMALONE", "THREE", "LAURAMERCIER", "KIEHLS", "ESTEELAUDER"]
const BRANDS = [AVEDA, LOCCITANE, LANCOME, SHISEIDO, SULWHASOO, CLARINS, BOBBIBROWN, FRESH, CLINIQUE, URBANDECAY, PHILOSOPHY, JOMALONE, THREE, LAURAMERCIER, KIEHLS, ESTEELAUDER]

//example
// brands=[
//     {
//         name:,
//         src:,
//         toggle:false,
//     }
// ]

function brandJSON() {
    let brands_table = []
    for (let i = 0; i < BRANDS.length; i++) {
        let brand = {}
        brand.name = NAME[i]
        brand.src = BRANDS[i]
        brand.toggle = false
        brands_table.push(brand)
    }
    return brands_table
}
export default brandJSON()