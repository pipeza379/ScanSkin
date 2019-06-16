import Action from '../action'

const initialState = {
    select_type: "",
    select_brand: [],
}

const { SELECTBRANDS, SELECTTYPE } = Action

export default function selectCompare(state = initialState, action) {
    switch (action.type) {
        case SELECTTYPE:
            return ({
                ...state,
                select_type: action.name,
            })
        case SELECTBRANDS:
            return ({
                ...state,
                select_brand: action.name,
            })
        default:
            return state

    }

}