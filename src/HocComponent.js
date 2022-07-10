import React from "react";
var UpdatedComponent = OriginalComponent =>{
    class NewComponent extends React.Component{
        state = {count:0}
        incrementCount = () =>{
            this.setState( previousState => {return{count:previousState.count+1}});
        }
        render(){
            return <OriginalComponent count ={this.state.count} incrementCount={this.incrementCount} />
        }
    }
    return NewComponent;
}
export default UpdatedComponent;