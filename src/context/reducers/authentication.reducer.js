import {SET_CURRENT_USER} from '../actions/authentication.action'
import isEmpty from '../validations/isEmpty'

const initialState = {
    isAuthenticated: false,
    user: {}
}

export const authReducer = (state = initialState, action ) =>{
    console.log(action)
    switch(action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                isAuthenticated: !isEmpty(action.payload),
                user: action.payload
            }

        default: 
            return state;
    }
}