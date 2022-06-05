const setUser =(user)=>{
    return{
        type : "SetUser",
        payload: user,
    };
};
const removeUser = ()=>{
    return{
        type : "RemoveUser",
    };
};
const setToken = (token)=>{
    return{
        type : "SetToken",
        payload: token,
    };
};
const removeToken = ()=>{
    return{
        type : "RemoveToken",
    };
};

export{setUser , removeUser , setToken , removeToken}