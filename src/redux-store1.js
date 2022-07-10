import { createStore } from "redux";

export const increment = ()=> {
    return{type:'INCREMENT'}   
}

export const decrement = () => {
    return {type:'DECREMENT'}  
}

var reducer = (state = 0 , action) => {
    switch(action.type){
        case "INCREMENT":
            return state+1;
        case "DECREMENT":
            return state-1;
        default:
            return state;
    }
}
export const store = createStore(reducer);
store.subscribe( () => console.log(store.getState()));

export default store;