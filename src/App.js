import React, {Component, useState} from 'react';
import BarChart from './BarChart';

const labels = ['2018', '2019', '2020', '2021']
const data = [100, 150, 200, 250]

class App extends Component{
    constructor(){
        super();
        this.state = {
            labels: ['2018', '2019', '2020', '2021'],
            datasets: [{
                label: "Users Gained", 
                data: [100, 150, 200, 250]
            }]
        }
    }


    render(){
        const {labels, datasets} = this.state
    // this.setState({
    //     labels: ['2018', '2019', '2020', '2021'],
    //     datasets: [{
    //         label: "Users Gained", 
    //         data: [100, 150, 200, 250]
    //     }]
    // })
    
        return(
            <div className='main-box'>
                <h1>
                    Hello World
                </h1>
                <BarChart chartData={{labels, datasets}}/>
            </div>
        )
    }
}





export default App