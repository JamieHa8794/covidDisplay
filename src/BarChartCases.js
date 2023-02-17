import React, {Component} from "react";
import {connect} from 'react-redux'
import { Bar } from "react-chartjs-2";
import {Chart as ChartJS} from 'chart.js/auto'


import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';



const USAStateList = ['Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia','Wisconsin','Wyoming']
const USAStateAbrv = [{"name":"Alabama","abbreviation":"AL"},{"name":"Alaska","abbreviation":"AK"},{"name":"Arizona","abbreviation":"AZ"},{"name":"Arkansas","abbreviation":"AR"},{"name":"California","abbreviation":"CA"},{"name":"Colorado","abbreviation":"CO"},{"name":"Connecticut","abbreviation":"CT"},{"name":"Delaware","abbreviation":"DE"},{"name":"Florida","abbreviation":"FL"},{"name":"Georgia","abbreviation":"GA"},{"name":"Hawaii","abbreviation":"HI"},{"name":"Idaho","abbreviation":"ID"},{"name":"Illinois","abbreviation":"IL"},{"name":"Indiana","abbreviation":"IN"},{"name":"Iowa","abbreviation":"IA"},{"name":"Kansas","abbreviation":"KS"},{"name":"Kentucky","abbreviation":"KY"},{"name":"Louisiana","abbreviation":"LA"},{"name":"Maine","abbreviation":"ME"},{"name":"Maryland","abbreviation":"MD"},{"name":"Massachusetts","abbreviation":"MA"},{"name":"Michigan","abbreviation":"MI"},{"name":"Minnesota","abbreviation":"MN"},{"name":"Mississippi","abbreviation":"MS"},{"name":"Missouri","abbreviation":"MO"},{"name":"Montana","abbreviation":"MT"},{"name":"Nebraska","abbreviation":"NE"},{"name":"Nevada","abbreviation":"NV"},{"name":"New Hampshire","abbreviation":"NH"},{"name":"New Jersey","abbreviation":"NJ"},{"name":"New Mexico","abbreviation":"NM"},{"name":"New York","abbreviation":"NY"},{"name":"North Carolina","abbreviation":"NC"},{"name":"North Dakota","abbreviation":"ND"},{"name":"Ohio","abbreviation":"OH"},{"name":"Oklahoma","abbreviation":"OK"},{"name":"Oregon","abbreviation":"OR"},{"name":"Pennsylvania","abbreviation":"PA"},{"name":"Rhode Island","abbreviation":"RI"},{"name":"South Carolina","abbreviation":"SC"},{"name":"South Dakota","abbreviation":"SD"},{"name":"Tennessee","abbreviation":"TN"},{"name":"Texas","abbreviation":"TX"},{"name":"Utah","abbreviation":"UT"},{"name":"Vermont","abbreviation":"VT"},{"name":"Virginia","abbreviation":"VA"},{"name":"Washington","abbreviation":"WA"},{"name":"West Virginia","abbreviation":"WV"},{"name":"Wisconsin","abbreviation":"WI"},{"name":"Wyoming","abbreviation":"WY"}]









class BarChartCases extends Component{
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
        this.resetCovidData = this.resetCovidData.bind(this)
    }
    componentDidUpdate(prevProps){
        const {statesInfo} = this.props
        if(prevProps.statesInfo.length == 0 && this.props.statesInfo.length > 0){
            this.setState({covidDataArr: this.props.statesInfo})

            const data2020 = this.props.statesInfo.filter(entry => entry.year === '2020')
            const data2021 = this.props.statesInfo.filter(entry => entry.year === '2021')
            const data2022 = this.props.statesInfo.filter(entry => entry.year === '2022')
            this.setState({
                covidData2020: data2020,
                covidData2021: data2021,
                covidData2022: data2022,
            })
        }
        
    }
    handleYearChange(year){

        const changeYear = year.slice(4);
        const stringCovidYear = 'covidData' + changeYear


        if(this.state[year]){

            this.setState({
                [year]: false,
                [stringCovidYear]: []
            })

        }
        else{
            const {USAState} = this.state;
            const {statesInfo} = this.props;

            const temp = statesInfo.filter(entry => entry.year === changeYear);
            if(USAState === 'USA'){
                this.setState({
                    [year]: true,
                    [stringCovidYear]: temp
                })
            }
            else{
                const tempState = temp.filter(entry=> entry.state === USAState);
    
                this.setState({
                    [year]: true,
                    [stringCovidYear]: tempState
                })
            }
        }
    }
    resetCovidData(resetYear){

        return this.props.statesInfo.filter(entry => entry.year === resetYear)

    }
    changeDataState(event){
        const change = {}
        change[event.target.name] = event.target.value;
        this.setState(change)

        
        const {year2020, year2021, year2022} = this.state;
        let {covidData2020, covidData2021, covidData2022} = this.state;


        covidData2020 = this.resetCovidData('2020')
        covidData2021 = this.resetCovidData('2021')
        covidData2022 = this.resetCovidData('2022')




        if(year2020){
            if(event.target.value === 'USA'){
                let temp = covidData2020
                this.setState({covidData2020: temp})
            }
            else{
                let temp = covidData2020.filter(entry => entry.state === event.target.value)
                this.setState({covidData2020: temp})
            }
        }
        if(year2021){
            if(event.target.value === 'USA'){
                let temp = covidData2021
                this.setState({covidData2021: temp})
            }
            else{
                let temp = covidData2021.filter(entry => entry.state === event.target.value)
                this.setState({covidData2021: temp})
            }
        }
        if(year2022){
            if(event.target.value === 'USA'){
                let temp = covidData2022
                this.setState({covidData2022: temp})
            }
            else{
                let temp = covidData2022.filter(entry => entry.state === event.target.value)
                this.setState({covidData2022: temp})
            }
        }

    }



    render(){
        const { year2020, year2021, year2022, USAState, covidDataArr} = this.state
        const {covidData2020, covidData2021, covidData2022} = this.state
        const {handleYearChange, changeDataState} = this
        const {statesInfo} = this.props;



        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']

        const temp = new Array(365).fill(' ')
        const daysOfYear = []
        let date = new Date('January 1');

        function addDays(date, days) {
            date.setDate(date.getDate() + days);
            // console.log(date)
            return date;
        }


        let bar2020 = {}
        let bar2021 = {}
        let bar2022 = {}

        
        temp.map(_ =>{
            const newDate = addDays(date, 1);
            daysOfYear.push(months[newDate.getMonth()]+ '. ' + newDate.getDate())

            const shortDate20 = (newDate.getMonth()+1)+'/'+newDate.getDate()+'/'+'20'
            const shortDate21 = (newDate.getMonth()+1)+'/'+newDate.getDate()+'/'+'21'
            const shortDate22 = (newDate.getMonth()+1)+'/'+newDate.getDate()+'/'+'22'

            bar2020[shortDate20] = 0;
            bar2021[shortDate21] = 0;
            bar2022[shortDate22] = 0;

        })


        if(covidData2020){
            covidData2020.map(entry =>{

                if(bar2020[entry.date]){
                    bar2020[entry.date] = bar2020[entry.date] + entry.cases * 1
                }
                else{
                    bar2020[entry.date] = entry.cases * 1
                }

            })
        }

        console.log(bar2020)
        if(covidData2021){
            covidData2021.map(entry =>{
    


                if(bar2021[entry.month]){
                    bar2021[entry.month] = bar2021[entry.month] + entry.cases * 1
                }
                else{
                    bar2021[entry.month] = entry.cases * 1
                }
    
            })
        }

        if(covidData2022){
            covidData2022.map(entry =>{
    
                if(bar2022[entry.month]){
                    bar2022[entry.month] = bar2022[entry.month] + entry.cases * 1
                }
                else{
                    bar2022[entry.month] = entry.cases * 1
                }
    
            })
        }

        const labels =  daysOfYear

        console.log(daysOfYear)

        const datasets = [{
            label: "2020", 
            data: Object.values(bar2020),
        }, 
        // {
        //     label: "2021", 
        //     data: Object.values(bar2021)
        // }, 
        // {
        //     label: "2022", 
        //     data: Object.values(bar2022)
        // }, 
        ]
        const options = {
            layout:{
                padding: 0
            },
            scales:{
                x:{
                    ticks:{
                        callback: (value, index, values) =>{
                            if(labels[index].slice(-2) === '15'){
                                return labels[index]
                            }
                            console.log(labels[index])
                        }
                    }
                }
            }
        }

        return(
            <div className='main-box'>
                <h1>Bar Chart - Cases</h1>
                <Bar data={{labels, datasets}} options={options}/>
                
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


export default connect(mapStateToProps)(BarChartCases)

