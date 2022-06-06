
const initialState={
    token: null,
}

const tokenReducers=(state=initialState,action)=>{
    switch (action.type) {
        case "SetToken":
            return {...state , token: action.payload};
            break;
        case "RemoveToken":
            return {...state , token: null};
            break;
        default:
            return {...state , token: null};
            break;
    }
}

export default tokenReducers