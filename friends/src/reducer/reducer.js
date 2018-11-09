import { LOADING, SUCCESS, FAILURE } from '../actions/actions'

const initialState = {
 friends: [],
 loading: false, 
 error: ''
}

export default (state = initialState, action) =>{
    switch(action.type){
        case LOADING:
        return Object.assign({}, state, { loading: true })
        default:
            return state;
    }
}