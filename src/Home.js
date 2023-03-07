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
                        <Link className='link' to='/symptoms'>
                        Symptoms
                        </Link>
                        <Link className='link' to='/vaccines'>
                        Vaccines
                        </Link>
                        <Link className='link' to='/testing'>
                        Testing
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
                        <Link className='link' to='/CasesDailyTotal'>
                        Total Cases Daily
                        </Link>
                        <Link className='link' to='/DeathsMonthly'>
                        Total Monthly Deaths
                        </Link>
                        <Link className='link' to='/CasesMontly'>
                        Total Monthly Cases
                        </Link>
                        <Link className='link' to='/StatesHighestCases'>
                        States - Highest Cases
                        </Link>
                        <Link className='link' to='/StatesLowestCases'>
                        States - Lowest Cases
                        </Link>
                    </div>
                </div>
                        

            </div>
        )
    }
}

export default Home
