import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from 'redux-thunk'
import axios from "axios";

const LOAD = 'LOAD';
const LOAD_STATES = 'LOAD_STATES';
const LOAD_COUNTRIES = 'LOAD_COUNTRIES';

const loadReducers = (state = true, action) =>{
    if(action.type === LOAD){
        state = false;
    }
    return state;
}

const statesReducers = (state = [], action) =>{
    if(action.type === LOAD_STATES){
        state = action.statesInfo
    }
    return state;
}

const countriesReducers = (state = [], action) =>{
    if(action.type === LOAD_COUNTRIES){
        state = action.countriesInfo
    }
    return state;
}

const reducer = combineReducers({
    loading: loadReducers,
    statesInfo: statesReducers,
    countriesInfo: countriesReducers
})

const store = createStore(reducer, applyMiddleware(thunk))

//action creators
const _loading = () =>{
    return {
        type: LOAD
    }
}

const _loadStates = (statesInfo) =>{
    return{
        type: LOAD_STATES,
        statesInfo
    }
}

const _loadCountries = (countriesInfo) =>{
    return{
        type: LOAD_COUNTRIES,
        countriesInfo
    }
}


//thunks

const loading = () =>{
    return (dispatch) =>{
        dispatch(_loading())
    }
}

const loadStates = () =>{
    return async (dispatch) =>{
        const statesInfo = (await axios.get('/api/byState')).data
        dispatch(_loadStates(statesInfo))
    }
}

const loadCountries = () =>{
    return async (dispatch) =>{
        const countriesInfo = (await axios.get('/api/byCountry')).data
        dispatch(_loadCountries(countriesInfo))
    }
}

export default store;
export {loading, loadStates, loadCountries}