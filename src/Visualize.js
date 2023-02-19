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
                    marginTop: '100',
                    marginBottom: '100'
                }}
                >
                    <div className='deseaseInfo-container'>
                        <div className='deseaseInfo-container-sub'>
                            <div className='deseaseInfo-title'>
                                Visualize the Spread:
                            </div>
                            <Button
                            onClick={()=> toLink('symptoms')}
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
                                Symptoms
                            </Button>
                            <Button
                            onClick={()=> toLink('vaccines')}
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
                                Vaccines
                            </Button>
                        </div>
                        <img className='deseaseInfo-img' src='./public/covid-19-scientist-cartoon.jpeg'/>
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