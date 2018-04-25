import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { Button } from 'react-bootstrap'
import registerServiceWorker from './registerServiceWorker'



class App extends Component {
  constructor(){
    super()
    this.state = {
        project: []

    }
  }
componentDidMount(){
  let url = "http://18.219.22.166/wp-json/wp/v2/pages/16"
  console.log(url)
  fetch(url)
  .then(response => response.json())
  .then(response => {
    this.setState({
      project: response

    })
  })



}

  render() {
    console.log('I was triggered during render')

    return (
      <div className="App">
      <h1>test</h1>
      </div>
    );
  }
}



export default App;
