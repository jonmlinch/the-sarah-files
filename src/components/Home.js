import React, { Component } from 'react';
import '../App.css';

class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {
      timeOfDay: 'test'
    }
  }

  componentDidMount() {
    this.changeTimeOfDay()
  }

  changeTimeOfDay = () => {
    let time = new Date().getHours()
    let morning = 'Good Morning!'
    let afternoon = 'Good Afternoon!'
    let evening = 'Good Evening!'
    if (time >= 0 && time < 12){
      this.setState({
        timeOfDay: morning
      })
    } else if (time >= 12 && time < 17) {
      this.setState({
        timeOfDay: afternoon
      })
    } else {
      this.setState({
        timeOfDay: evening
      })
    }
  }

  
  render() {
    return (
      <div>
        {/* <div id="triangle"></div> */}
        <p>This will be the main page</p>
        <p>{this.state.timeOfDay}</p>
      </div>
    );
  }
}

export default Home;
