import React from "react";
import UpdatedComponent from "./HocComponent";
class ClickCounter extends React.Component {
    
  render() {
        var {count,incrementCount} = this.props;
        return (
            <div>
                <h1 onMouseOver={()=>incrementCount()}>Hover Component</h1>
                Mouse Hover = {count} Times
            </div>
        );
  }
  }

  export default UpdatedComponent (ClickCounter); 