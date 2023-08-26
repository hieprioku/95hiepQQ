import React, { Component } from 'react'

class Tables extends Component {
  constructor(props) {
    super(props)
    this.state = {
      students: [
        {id: 1, name: "StudentA", age: 25, address: "HN", phone: "02458643"},
        {id: 2, name: "StudentB", age: 20, address: "HCM", phone: "02321515"},
        {id: 3, name: "StudentC", age: 22, address: "DN", phone: "09825314"},
        {id: 4, name: "StudentD", age: 23, address: "HP", phone: "031515554"},
        {id: 5, name: "StudentE", age: 19, address: "HN", phone: "0358786454"},
     ],
    }
  }

  renderTableData() {
    return this.state.students.map((student, index) => {
      const { id, name, age, address, phone } = student
      return (
        <tr key={id}>
          <td>{id}</td>
          <td>{name}</td>
          <td>{age}</td>
          <td>{address}</td>
          <td>{phone}</td>
        </tr>
      )
    })
  }
  render() {
    return (
       <div>
          
          <table id='students'>
             <tbody>
                {this.renderTableData()}
             </tbody>
          </table>
       </div>
    )
 }
 
  
}


