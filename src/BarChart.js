import React, {Component} from "react";
import { Bar } from "react-chartjs-2";
import {Chart as ChartJS} from 'chart.js/auto'


class BarChart extends Component{
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
    
        return(
            <div className='main-box'>
                <Bar data={{labels, datasets}}/>
            </div>
        )
    }
}

export default BarChart;