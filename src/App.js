import React, {Component} from 'react';
import { connect } from 'react-redux';
import BarChart from './BarChart';
import PieChartByState from './PieChartByState';
import { loading, loadCountries, loadStates } from './store';



class _App extends Component{
    constructor(){
        super();
        this.state = {
        }
    }
    async componentDidMount(){
        this.props.load();
    }
    render(){
        const {statesInfo} = this.props.state

        return(
            <div className='main-box'>
                <h1>
                    Covid Data
                </h1>
                <PieChartByState/>
                <BarChart/>
            </div>
        )
    }
}


const mapStateToProps = (state) =>{
    return {
        state
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        load: ()=>{
            dispatch(loadStates());
            dispatch(loadCountries());

            dispatch(loading());
        }
    }
}


const App = connect(mapStateToProps, mapDispatchToProps)(_App);

export default App;