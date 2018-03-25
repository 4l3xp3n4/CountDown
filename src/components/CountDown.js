  import React, { Component } from 'react';
  import '../CountDown.css';


  class CountDown extends Component {
    constructor(props){
      super(props);
      this.state = {
        leftTime : new Date(),
        startTime : new Date()
      }

      setInterval(() => {
        this.setState({leftTime:new Date(this.state.startTime-( new Date()- this.state.startTime))})
      }, 1000);
    }

    render() {
      return (
          <div className="Timer">
            <div className="Timer-box">
              <p className="Timer-value"> {this.addLeadingZero(this.state.leftTime.getDay())}</p>
              <p className="Timer-denomination">DAYS</p>
            </div>
            <div className="Timer-box">
              <p className="Timer-value"> {this.addLeadingZero(this.state.leftTime.getHours())}</p>
              <p className="Timer-denomination">HOURS</p>
            </div>
            <div className="Timer-box">
              <p className="Timer-value">{this.addLeadingZero(this.state.leftTime.getMinutes())}</p>
              <p className="Timer-denomination">MINUTES</p>
            </div>
            <div className="Timer-box">
              <p className="Timer-value">{this.addLeadingZero(this.state.leftTime.getSeconds())}</p>
              <p className="Timer-denomination" >SECONDS</p>
            </div>
          </div>
      );
    }

    addLeadingZero(value){
      return value>9 ? value: '0' + value;
    }

  }

  export default CountDown;
