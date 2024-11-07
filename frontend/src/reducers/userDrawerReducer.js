export const userDrawerReducer = (state = false, action)=>{
    switch(action.type){
        case "USER_DRAWER":
            return action.payload
        default:
            return state
    }

}