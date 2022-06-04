import { setUser } from '../action/actions'

const initialState={
    user: {},
}
const userReducers=(state=initialState,action)=>{
    if(action.type == "SetUser"){
        return {...state , user: action.payload};
    }
    else{
        return {...state , user: state.user};
    }
}

export default userReducers