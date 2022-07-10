import React from "react";

class EmpComponent extends React.Component{
    state={
        employees:[]
    }
    componentDidMount(){
        var url = 'http://localhost:3001/employees';
        fetch(url)
            .then(result=>result.json())
            .then(result=>this.setState({employees:result}));
    }
    render(){
        return<div>
            <h1>Employees List</h1>
            <table className = 'table table-bordered table-hover'>
                <thead>
                    <tr>
                        <th>ID</th><th>Ename</th><th>Job</th><th>Salary</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.employees.map(x=><tr>
                        <td>{x.id}</td><td>{x.ename}</td><td>{x.job}</td><td>{x.Salary}</td>
                    </tr>)}
                </tbody>
            </table>
        </div>
    }
}
export default EmpComponent;