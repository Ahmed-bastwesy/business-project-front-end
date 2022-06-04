const setUser =(user)=>{
    return{
        type : "SetUser",
        payload: user,
    };
};

export{setUser}