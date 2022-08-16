

export const actionType ={
    SER_USER: 'SET_USER'
}

const reducer = (state,action)=>{
    console.log(action)

    switch(action.type){
        case actionType.SER_USER:
            return {
                ...state,
                user: action.user
            };

        default:
            return state    
    }
}

export default reducer