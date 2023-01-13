import React, {Component} from "react";
import { Bar } from "react-chartjs-2";
import {Chart as ChartJS} from 'chart.js/auto'


import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';


class BarChart extends Component{
    constructor(){
        super();
        this.state = {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
            datasets: [{
                label: "Users Gained", 
                data: [100, 150, 200, 250]
            }, 
            {
                label: "Users Gained", 
                data: [100, 150, 200, 250]
            }],

            year2019: true,
            year2020: true,
            year2021: true,
            year2022: true,

        }
        this.handleYearChange = this.handleYearChange.bind(this)
    }
    handleYearChange(year){
        if(this.state[year]){
            this.setState({
                [year]: false
            })
        }
        else{
            this.setState({
                [year]: true
            })
        }
    }
    render(){
        const {labels, datasets, year2019, year2020, year2021, year2022} = this.state
        const {handleYearChange} = this

        return(
            <div className='main-box'>
                
                <Bar data={{labels, datasets}}/>
                
                <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
                <FormLabel component="legend">Years:</FormLabel>

                    <FormGroup>
                    <FormControlLabel
                        control={
                        <Checkbox checked={year2019} onChange={()=>handleYearChange('year2019')} name="year2019" />
                        }
                        label="2019"
                    />
                    <FormControlLabel
                        control={
                        <Checkbox checked={year2020} onChange={()=>handleYearChange('year2020')} name="year2020" />
                        }
                        label="2020"
                    />
                    <FormControlLabel
                        control={
                        <Checkbox checked={year2021} onChange={()=>handleYearChange('year2021')} name="year2021" />
                        }
                        label="2021"
                    />
                    <FormControlLabel
                        control={
                        <Checkbox checked={year2022} onChange={()=>handleYearChange('year2022')} name="year2022" />
                        }
                        label="2022"
                    />
                    </FormGroup>
                </FormControl>


            </div>
        )
    }
}

export default BarChart;