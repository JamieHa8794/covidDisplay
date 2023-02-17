import React, {Component} from 'react'
import { Line } from 'react-chartjs-2';
import {connect} from 'react-redux'



class LineChartByState extends Component{
    constructor(){
        super();
        this.state = {

        }
    }
    render(){
        const {statesInfo} = this.props

        console.log(statesInfo)


        const labels =  ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
        const datasets = [{
            labels: ['blue', 'red', 'green', 'purple', 'orange'],
            data: [10, 2, 1, 6, 20]
        }]



        return(
            <div className='main-box'>
                <h1>Pie Chart</h1>
                <Line data={{labels, datasets}}/>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return state;
}


export default connect(mapStateToProps)(LineChartByState)
