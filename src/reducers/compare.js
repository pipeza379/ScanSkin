import Action from '../action'

const initialState = {
    select_product_type: "",
    select_brand: [],
    select_skin_type: ["", "", "", ""]
}

const { SELECTBRANDS, SELECTTYPE, SELECTSKINTYPE, SELECTPROPERTIES, CLEAR } = Action

export default function selectCompare(state = initialState, action) {
    switch (action.type) {
        case SELECTTYPE:
            return ({
                ...state,
                select_product_type: action.name,
            })
        case SELECTBRANDS:
            return ({
                ...state,
                select_brand: action.name,
            })
        case SELECTSKINTYPE:
            return ({
                ...state,
                select_skin_type: action.select,
            })
        case SELECTPROPERTIES:
            return ({

            })
        case CLEAR:
            return ({
                select_type: "",
                select_brand: [],
                select_skin_type: ["", "", "", ""]
            })
        default:
            return state

    }

}