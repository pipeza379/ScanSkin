import Action from '../action'

const initialState = {
    height: 0,
    products:[],
}
const { GETHEIGHT,SELECTPRODUCT } = Action

export default function selectReducer(state = initialState, action) {
    let { value,products } = action
    switch (action.type) {
        case GETHEIGHT:
            return {
                ...state,
                height:value,
            }
        case SELECTPRODUCT:
            return{
                ...state,
                products,
            }
        default:
            return state
    }
}