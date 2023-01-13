import React, {Component} from 'react';
import BarChart from './BarChart';



class App extends Component{
    constructor(){
        super();
        this.state = {
        }
    }


    render(){
        return(
            <div className='main-box'>
                <h1>
                    Hello World
                </h1>
                <BarChart/>
            </div>
        )
    }
}





export default App