import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker'

class home extends React.Component{
    constructor(){
        super()
        this.state = {
            project= []

        }
    }



    render(){
        console.log('I was triggered during render')

        return(
            <div className="home">
            <h1>test</h1>
            </div>

        )
    }
}
export default home