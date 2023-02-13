import React, {Component} from "react";
import {connect} from 'react-redux'
import { Bar } from "react-chartjs-2";
import {Chart as ChartJS} from 'chart.js/auto'


import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';


const USAStateList = ['Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia','Wisconsin','Wyoming']
const USAStateAbrv = [{"name":"Alabama","abbreviation":"AL"},{"name":"Alaska","abbreviation":"AK"},{"name":"Arizona","abbreviation":"AZ"},{"name":"Arkansas","abbreviation":"AR"},{"name":"California","abbreviation":"CA"},{"name":"Colorado","abbreviation":"CO"},{"name":"Connecticut","abbreviation":"CT"},{"name":"Delaware","abbreviation":"DE"},{"name":"Florida","abbreviation":"FL"},{"name":"Georgia","abbreviation":"GA"},{"name":"Hawaii","abbreviation":"HI"},{"name":"Idaho","abbreviation":"ID"},{"name":"Illinois","abbreviation":"IL"},{"name":"Indiana","abbreviation":"IN"},{"name":"Iowa","abbreviation":"IA"},{"name":"Kansas","abbreviation":"KS"},{"name":"Kentucky","abbreviation":"KY"},{"name":"Louisiana","abbreviation":"LA"},{"name":"Maine","abbreviation":"ME"},{"name":"Maryland","abbreviation":"MD"},{"name":"Massachusetts","abbreviation":"MA"},{"name":"Michigan","abbreviation":"MI"},{"name":"Minnesota","abbreviation":"MN"},{"name":"Mississippi","abbreviation":"MS"},{"name":"Missouri","abbreviation":"MO"},{"name":"Montana","abbreviation":"MT"},{"name":"Nebraska","abbreviation":"NE"},{"name":"Nevada","abbreviation":"NV"},{"name":"New Hampshire","abbreviation":"NH"},{"name":"New Jersey","abbreviation":"NJ"},{"name":"New Mexico","abbreviation":"NM"},{"name":"New York","abbreviation":"NY"},{"name":"North Carolina","abbreviation":"NC"},{"name":"North Dakota","abbreviation":"ND"},{"name":"Ohio","abbreviation":"OH"},{"name":"Oklahoma","abbreviation":"OK"},{"name":"Oregon","abbreviation":"OR"},{"name":"Pennsylvania","abbreviation":"PA"},{"name":"Rhode Island","abbreviation":"RI"},{"name":"South Carolina","abbreviation":"SC"},{"name":"South Dakota","abbreviation":"SD"},{"name":"Tennessee","abbreviation":"TN"},{"name":"Texas","abbreviation":"TX"},{"name":"Utah","abbreviation":"UT"},{"name":"Vermont","abbreviation":"VT"},{"name":"Virginia","abbreviation":"VA"},{"name":"Washington","abbreviation":"WA"},{"name":"West Virginia","abbreviation":"WV"},{"name":"Wisconsin","abbreviation":"WI"},{"name":"Wyoming","abbreviation":"WY"}]


class BarChart extends Component{
    constructor(){
        super();
        this.state = {


            year2020: true,
            year2021: true,
            year2022: true,
            USAState: 'USA',
            selectedIndex: 0,

            covidDataArr : [],
            covidData2020: [],
            covidData2021: [],
            covidData2022: [],


        }

        this.handleYearChange = this.handleYearChange.bind(this)
        this.changeDataState = this.changeDataState.bind(this)
    }
    componentDidUpdate(prevProps){
        if(prevProps.statesInfo.length == 0 && this.props.statesInfo.length > 0){
            this.setState({covidDataArr: this.props.statesInfo})
        }
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
        this.changeCovidData();
    }
    changeDataState(event){
        const change = {}
        change[event.target.name] = event.target.value;
        this.setState(change)


        const {statesInfo} = this.props


        if(statesInfo.length > 0){
            if(event.target.value === ''){

            }
            else if(event.target.value === 'USA') {
                this.setState({covidDataArr: statesInfo})
            }
            else{
                const currentStateInfo = statesInfo.filter(info => info.state === event.target.value)
                this.setState({covidDataArr : currentStateInfo})
                console.log(this.state)
            }
        }
        this.changeCovidData();
    

    }
    changeCovidData(){
        const {covidData2020, covidData2021, covidData2022} = this.state
        const temp = {}
        if(this.state.year2020 === true){
            console.log(this.state.year2020)
            this.state.covidDataArr.map(dataEntry =>{
                if(dataEntry.year === '2020'){
                    if(temp[dataEntry.month]){
                        temp[dataEntry.month] = temp[dataEntry.month] + dataEntry.cases * 1
                    }
                    else{
                        temp[dataEntry.month] = dataEntry.cases * 1 
                    }
                }
                console.log(temp)
            })
            this.setState({covidData2020: Object.values(temp)})
        }
        if(this.state.year2021 === true){
            this.state.covidDataArr.map(dataEntry =>{
                if(dataEntry.year === '2021'){
                    if(temp[dataEntry.month]){
                        temp[dataEntry.month] = temp[dataEntry.month] + dataEntry.cases * 1
                    }
                    else{
                        temp[dataEntry.month] = dataEntry.cases * 1 
                    }
                }
                console.log(temp)
            })
            this.setState({covidData2021: Object.values(temp)})
        }
        if(this.state.year2022 === true){
            this.state.covidDataArr.map(dataEntry =>{
                if(dataEntry.year === '2022'){
                    if(temp[dataEntry.month]){
                        temp[dataEntry.month] = temp[dataEntry.month] + dataEntry.cases * 1
                    }
                    else{
                        temp[dataEntry.month] = dataEntry.cases * 1 
                    }
                }
                console.log(temp)
            })
            this.setState({covidData2022: Object.values(temp)})
        }
        console.log(this.state)
    }



    render(){
        const { year2020, year2021, year2022, USAState, covidDataArr} = this.state
        const {covidData2020, covidData2021, covidData2022} = this.state
        const {handleYearChange, changeDataState} = this
        const {statesInfo} = this.props;



        const labels =  ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
        const datasets = [{
            label: "2020", 
            data: covidData2020
        }, 
        {
            label: "2021", 
            data: covidData2021
        }, 
        {
            label: "2022", 
            data: covidData2022
        }, 
        ]


        return(
            <div className='main-box'>
                
                <Bar data={{labels, datasets}}/>
                
                <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
                <FormLabel component="legend">Years:</FormLabel>

                    <FormGroup>
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

                <select value={USAState} name='USAState' onChange={changeDataState}>
                    <option value='USA'>USA</option>

                    {USAStateList.map(stateName =>{
                        return(
                            <option value={stateName}>{stateName}</option>
                        )
                    })
                    }
                </select>
                
            </div>
        )
    }
}


const mapStateToProps = (state) =>{
    return state;
}


export default connect(mapStateToProps)(BarChart)

