import { setUser } from '../action/actions'

const initialState={
    user: {},
}
const userReducers=(state=initialState,action)=>{
    switch (action.type) {
        case "SetUser":
            return {...state , user: action.payload};
            break;
        case "RemoveUser":
            return {...state , user: {}};
            break;
        default:
            return {...state , user: state.user};
            break;
    }
}

export default userReducers