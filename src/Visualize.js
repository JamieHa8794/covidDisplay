import React , {Component} from 'react';
import { connect } from 'react-redux'


import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';


class Visualize extends Component{
    constructor(){
        super();
        this.toLink = this.toLink.bind(this)
    }
    toLink(pageName){
        const {history} = this.props;
        history.push(`/${pageName}`)
    }
    render(){
        const {toLink} = this
        return(
            <div className='main-box'>
                <Paper elevation={6}
                sx={{
                    marginTop: '80',
                    marginBottom: '80',
                    marginLeft: '80',
                    marginRight: '80',

                }}
                >
                    <div className='visualize-container'>
                        <div className='visualize-container-sub'>
                            <div className='visualize-title'>
                                Visualize the Spread:
                            </div>

                            {/*
                            
                            BAR CHARTS
                            
                            */}

                            <div className='visualize-chart-sub-container'>
                                <div className='visualize-chart-sub-title'>
                                    Bar Charts:
                                </div>
                                <Button
                                onClick={()=> toLink('CasesMontly')}
                                sx={{ 
                                    color: 'black', 
                                    display: 'block',
                                    fontFamily: 'Times, Times New Roman, serif',
                                    '&:hover': {
                                        textDecoration: 'underline',
                                        backgroundColor: 'rgb(222, 202, 176, .60);',
                                    },
                                    
                                }}
                                >
                                    Cases Monthly
                                </Button>
                                <Button
                                onClick={()=> toLink('DeathsMonthly')}
                                sx={{ 
                                    color: 'black', 
                                    display: 'block',
                                    fontFamily: 'Times, Times New Roman, serif',
                                    '&:hover': {
                                        textDecoration: 'underline',
                                        backgroundColor: 'rgb(222, 202, 176, .60);',
                                    },
                                    
                                }}
                                >
                                    Deaths Monthly
                                </Button>
                                <Button
                                onClick={()=> toLink('CasesDailyTotal')}
                                sx={{ 
                                    color: 'black', 
                                    display: 'block',
                                    fontFamily: 'Times, Times New Roman, serif',
                                    '&:hover': {
                                        textDecoration: 'underline',
                                        backgroundColor: 'rgb(222, 202, 176, .60);',
                                    },
                                    
                                }}
                                >
                                    Cases - Daily Total
                                </Button>
                            </div>

                            {/*
                            
                            PIE CHARTS
                            
                            */}
                            <div className='visualize-chart-sub-container'>
                                <div className='visualize-chart-sub-title'>
                                    Bar Charts:
                                </div>
                                <Button
                                onClick={()=> toLink('CasesMontly')}
                                sx={{ 
                                    color: 'black', 
                                    display: 'block',
                                    fontFamily: 'Times, Times New Roman, serif',
                                    '&:hover': {
                                        textDecoration: 'underline',
                                        backgroundColor: 'rgb(222, 202, 176, .60);',
                                    },
                                    
                                }}
                                >
                                    Cases Monthly
                                </Button>
                                <Button
                                onClick={()=> toLink('DeathsMonthly')}
                                sx={{ 
                                    color: 'black', 
                                    display: 'block',
                                    fontFamily: 'Times, Times New Roman, serif',
                                    '&:hover': {
                                        textDecoration: 'underline',
                                        backgroundColor: 'rgb(222, 202, 176, .60);',
                                    },
                                    
                                }}
                                >
                                    Deaths Monthly
                                </Button>
                                <Button
                                onClick={()=> toLink('CasesDailyTotal')}
                                sx={{ 
                                    color: 'black', 
                                    display: 'block',
                                    fontFamily: 'Times, Times New Roman, serif',
                                    '&:hover': {
                                        textDecoration: 'underline',
                                        backgroundColor: 'rgb(222, 202, 176, .60);',
                                    },
                                    
                                }}
                                >
                                    Cases - Daily Total
                                </Button>
                            </div>
                        </div>
                        <img className='visualize-img' src='./public/covid-19-scientist-cartoon.jpeg'/>
                    </div>
                </Paper>
            </div>
        )
    }


}

const mapStateToProps = (state) =>{
    return{
        state
    }
}
const mapDispatchToProps = (dispatch) =>{
 return{}
}

export default connect(mapStateToProps, mapDispatchToProps)(Visualize)