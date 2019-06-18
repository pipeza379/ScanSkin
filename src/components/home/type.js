import TONNER from '../../asset/img/typesvg/tonner.svg'
import MOSITURIZER from '../../asset/img/typesvg/mositorizer.svg'
import ESSENCE from '../../asset/img/typesvg/essence.svg'
import SERUME from '../../asset/img/typesvg/serume.svg'
import NIGHTCREAME from '../../asset/img/typesvg/night creame.svg'
import CLEANSER from '../../asset/img/typesvg/cleanser.svg'
import SUNSCREEN from '../../asset/img/typesvg/sunscreen.svg'
import MASK from '../../asset/img/typesvg/mask.svg'

const TYPE = ["TONNER", "MOSITURIZER", "ESSENCE", "SERUME", "NIGHT CREAME", "CLEANSER", "SUNSCREEN", "MASK"]
const IMGTYPE = [TONNER, MOSITURIZER, ESSENCE, SERUME, NIGHTCREAME, CLEANSER, SUNSCREEN, MASK]

//example
// const TYPE = [
//     {
//         name:"TONNER",
//         src:TONNER,
//         toggle:false,    
//     },
// ]

function typeJSON() {
    let type_table = []
    for (let i = 0; i < TYPE.length; i++) {
        let type = {}
        type.name = TYPE[i]
        type.src = IMGTYPE[i]
        type.toggle = false
        type_table.push(type)
    }
    return type_table
}

export default typeJSON()