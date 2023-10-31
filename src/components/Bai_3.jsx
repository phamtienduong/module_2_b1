import React, { Component } from 'react'

export default class Bai_3 extends Component {
    constructor(){
        super()
        this.state={
            data:[],
            time:new Date().toLocaleTimeString()
        }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({time: new Date().toLocaleTimeString()})
            },1000)

    }
  render() {
    
    return (
      <>
        <p>Xin chào các bạn!</p>
        <p>Bây giờ là:{this.state.time}</p>
      </>
    )
  }
}
