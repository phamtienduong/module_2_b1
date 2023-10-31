import React, { Component } from 'react'

export default class Bai_1 extends Component {
  render() {
    let arr = ["HTML","Javascrip","Python","C#"]
    return (
      <>
        <h1>DANH SÁCH KHOÁ HỌC</h1>
      <ul>
        {arr.map((item,index)=>(
          <li key={index}>{item}</li>
        ))}
      </ul>
      </>
      
    )
  }
}
