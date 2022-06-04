import{INCREAMENT,DECREAMENT} from './types'


export const increament = (dispatch)=>{
    return dispatch({type: INCREAMENT})
}

export const decreament = (dispatch)=>{
    return dispatch({type: DECREAMENT})
}