import React from 'react'
import ReactDOM from 'react-dom'
import ReactCalender from 'react-calendar'
import Axios from 'axios';


class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            calendar: 'hello for now Im not a calendar yet!'
        }
    }


    componentDidMount(){
        Axios.get('/')
        .then(() => {
            console.log('here is te home page')
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    render() {
        return (
            <div>
                <h1>Hello World!</h1>
            </div>
        )
    }
};

ReactDOM.render(<App/>, document.getElementById('app'));