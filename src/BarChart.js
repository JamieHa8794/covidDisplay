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
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
            datasets: [{
                label: "Users Gained", 
                data: [150, 200, 250]
            }, 
            {
                label: "Users Gained", 
                data: [150, 200, 250]
            }],

            year2020: true,
            year2021: true,
            year2022: true,
            USAState: 'New York',
            selectedIndex: 0
        }

        this.handleYearChange = this.handleYearChange.bind(this)
        this.handleListItemClick = this.handleListItemClick.bind(this)
        this.setSelectedIndex = this.setSelectedIndex.bind(this)
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
    changeDataState(){
        
    }
    setSelectedIndex(index){
        this.setState({
            selectedIndex: index
        })
    }
    handleListItemClick(event, index){
        const {setSelectedIndex} = this
        setSelectedIndex(index)
    }
    render(){
        const {labels, datasets, year2020, year2021, year2022, USAState, selectedIndex} = this.state
        const {handleYearChange, handleListItemClick} = this
        const {statesInfo} = this.props;


        console.log(this.props)
        console.log(this.state)
        // console.log(statesInfo)

        if(statesInfo){
            if(USAState === ''){

            }
            else{
                const currentStateInfo = statesInfo.filter(info => info.state === USAState)
                console.log(currentStateInfo)
            }
        }
        console.log(USAStateList)

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

                <select>
                    {USAStateList.map(stateName =>{
                        return(
                            <option value={stateName}>{stateName}</option>
                        )
                    })
                    }
                </select>


                <List component="nav" aria-label="main mailbox folders">
                    <ListItemButton
                    selected={selectedIndex === 0}
                    onClick={(event) => handleListItemClick(event, 0)}
                    >
                        <ListItemIcon>
                        <Avatar>H</Avatar>
                        </ListItemIcon>
                        <ListItemText primary="Inbox" />
                    </ListItemButton>
                    <ListItemButton
                    selected={selectedIndex === 1}
                    onClick={(event) => handleListItemClick(event, 1)}
                    >
                        <ListItemIcon>
                        <Avatar>H</Avatar>
                        </ListItemIcon>
                        <ListItemText primary="Drafts" />
                    </ListItemButton>
                </List>



            </div>
        )
    }
}


const mapStateToProps = (state) =>{
    return state;
}


export default connect(mapStateToProps)(BarChart)

