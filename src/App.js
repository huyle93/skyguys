import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './assets/sass/App.css';
import { Button } from 'react-bootstrap'
import registerServiceWorker from './registerServiceWorker'



class App extends Component {
  constructor(){
    super()
    this.state = {
      projects: []

    }
  }
  componentDidMount() {
  let url = "http://18.219.22.166/wp-json/wp/v2/pages"
  console.log(url)
  fetch(url)
    .then(response => response.json())
    .then(response => {
      this.setState({
        projects: response
      })
    })
  }

  render() {
    console.log('I was triggered during render')
    // Declare a new variable and loop it using map
    let projects = this.state.projects.map((project, index) => {4
      // return each index and rendered it at the bottom of the second return
      return(
        <div key={index}>
        <p> {project.content.rendered}</p>
            </div>

      )
    })
    return (
      <div className="App">
      <h1>test</h1>
      {projects}
      </div>
    );
  }
}



export default App;
