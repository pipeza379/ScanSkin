import Action from '../action'

const initialState = {
    height: 0,
}
const { GETHEIGHT } = Action

export default function selectReducer(state = initialState, action) {
    let { value } = action
    switch (action.type) {
        case GETHEIGHT:
            return {
                ...state,
                height:value,
            }
        default:
            return state
    }
}