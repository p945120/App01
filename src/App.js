import './App.css';
import React from 'react';
import ClickCounter from './ClickCounter';
import UpdatedComponent from './HocComponent';
import HoverComponent from './HoverComponent';
import EmpComponent from './EmpComponent';
import ReduxDemo from './reduxDemo';
function App() {
  return (
    <div >
      <h1>Root Component</h1>
      <ReduxDemo msg="First Component"/>

      <ReduxDemo msg="Second Component"/>
      <EmpComponent/>
      <HoverComponent/>
      <UpdatedComponent/>
      <ClickCounter/>
    </div>
  );
}
export default App;