import "./App.css";
import { Component } from 'react'
export default class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            time : new Date().toLocaleTimeString()
        };
    }
    componentDidMount(){    //to update the time every second
        this.timeId = setInterval(()=>{
            this.setState({time: new Date().toLocaleTimeString()})
        },1000);
    }
    render(){
        return(
            <div className='clk-container' >
                <div className='clock'>
                    {this.state.time}
                </div>
            </div>
        )
    }
}
