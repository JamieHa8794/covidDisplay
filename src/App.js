import React, {Component} from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';


import Nav from './Nav';
import Home from './Home';
import Footer from './Footer'
import BarChartCasesDailyTotal from './BarChartCasesDailyToal';
import BarChartDeathsMonthly from './BarChartDeathsMonthly';
import BarChartCasesMonthly from './BarChartCasesMonthly'
import LineChartByState from './LineChartByState';

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
            <Router>
                {/* <Route path='/' component={Nav}/> */}
                <Route exact path='/' component={Home}/>
                <Route exact path='/CasesDailyTotal' component={BarChartCasesDailyTotal}/>
                <Route exact path='/CasesMontly' component={BarChartCasesMonthly}/>
                <Route exact path='/DeathsMonthly' component={BarChartDeathsMonthly}/>
                <Route path='/' component={Footer}/>

            </Router>

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