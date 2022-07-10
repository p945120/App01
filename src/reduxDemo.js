import store, {increment,decrement} from "./redux-store1";
import React from "react";

class ReduxDemo extends React.Component{
    constructor(props){
        super(props);
    }
    state = {msg:store.getState()};
    increment(){
        store.dispatch(increment());
        this.setState({msg:store.getState()});
    }
    decrement(){
        store.dispatch(decrement());
        this.setState({msg:store.getState()})
    }
    render(){
        return<div>
            <h1>Redux Demo Component {this.props.msg}</h1>
            <button onClick={()=>this.increment()}>Increment</button> |
            <button onClick={()=>this.decrement()}>Decrement</button> <br/>
            {this.state.msg}
        </div>
    }
}
export default ReduxDemo;