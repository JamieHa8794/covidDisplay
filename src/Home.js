import React, {Component} from 'react';


import Paper from '@mui/material/Paper';
import BarChartIcon from '@mui/icons-material/BarChart';
import InfoIcon from '@mui/icons-material/Info';
import { Link } from 'react-router-dom';

class Home extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div >
                {/* <Paper elevation={6} className='home-paper'>

                
                <div>
                "COVID-19 is a respiratory disease caused by SARS-CoV-2, a coronavirus discovered in 2019. 
                The virus spreads mainly from person to person through respiratory droplets and small particles produced when an infected person coughs, sneezes, or talks."
                </div>
                <a href='https://www.cdc.gov/dotw/covid-19/index.html'>
                    -cdc.gov
                </a>

                </Paper> */}


                <div className="container">
                    <img className='home-covid-img' src='./public/covid-19.jpeg'/>
                    <div className="content">
                        <h1 className='home-h1'>COVID-19</h1>
                        <div className='home-description'>COVID-19 is a respiratory disease caused by SARS-CoV-2, a coronavirus discovered in 2019. 
                        The virus spreads mainly from person to person through respiratory droplets and small particles produced when an infected person coughs, sneezes, or talks.
                        </div>
                    </div>
                </div>
                <div className='home-nav'>
                    <div className='home-nav-sub-container'>
                        <div className='home-nav-sub-title'>
                            More Info
                        </div>
                    <InfoIcon 
                        sx={{
                            fontSize:'80',
                            color: '#B0C4DE'
                        }}
                        />
                        <Link to='/'>
                        Symptoms
                        </Link>
                        <Link to='/CasesDailyTotal'>
                        Variants
                        </Link>
                        <Link to='/CasesMontly'>
                        Vaccines
                        </Link>
                    </div>
                    <div className='home-nav-sub-container'>
                        <div className='home-nav-sub-title'>
                            Visualize the Spread
                        </div>
                        <BarChartIcon 
                        sx={{
                            fontSize:'80',
                            color: '#B0C4DE'
                        }}
                        />
                        <Link to='/DeathsMonthly'>
                        Total Monthly Deaths
                        </Link>
                        <Link to='/CasesMontly'>
                        Total Monthly Cases
                        </Link>
                        <Link to='/CasesDailyTotal'>
                        Total Cases Daily
                        </Link>
                    </div>
                </div>
                        

            </div>
        )
    }
}

export default Home
