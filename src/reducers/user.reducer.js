import { userContants } from "../actions/constants";

const initState = {
    error: null,
    message: '',
    loading: false
};

const userRegistrationReducer = (state = initState, action) => {
    switch(action.type){
        case userContants.USER_REGISTER_REQUEST:
            return {
                ...state,
                loading: true
            };
        case userContants.USER_REGISTER_SUCCESS:
            return {
                ...state,
                loading: false,
                message: action.payload.message
            };
        case userContants.USER_REGISTER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };
        default:
            return state;
    }
};

export default userRegistrationReducer;
