import React , {Component} from 'react';
import { connect } from 'react-redux';
import { Pie } from 'react-chartjs-2';



class PieChartStatesHighestCases extends Component{
    constructor(){
        super();
        this.state ={
            covidDataArr : [],
            numOfStates: '10',
        }
        this.numOfStatesChange = this.numOfStatesChange.bind(this)
    }
    componentDidMount(){
        const {statesInfo} = this.props
        this.setState({
            covidDataArr: this.props.statesInfo,
        })
    }
    componentDidUpdate(prevProps){
        const {statesInfo} = this.props
        if(prevProps.statesInfo.length == 0 && this.props.statesInfo.length > 0){
            this.setState({
                covidDataArr: this.props.statesInfo,
            })
        }
    }
    numOfStatesChange(event){
        const change = {}
        change[event.target.name] = event.target.value;
        this.setState(change)
    }
    render(){
        const {covidDataArr, numOfStates} = this.state;
        const {numOfStatesChange} = this

        const byState = {}
        covidDataArr.map(entry =>{
            if(byState[entry.state]){
                byState[entry.state] = byState[entry.state] + entry.cases * 1;
            }
            else{
                byState[entry.state] = entry.cases * 1;
            }
        })


        const stateNames = Object.keys(byState);
        const caseNumbers = Object.values(byState);


        const caseNumbersSorted = [...caseNumbers];
        caseNumbersSorted.sort(function(a, b) {
            return b - a;
          });



        const stateNamesTop5 = []
        const caseNumbersTop5 = []
        for(let i = 0; i < numOfStates * 1; i++){
            const stateName = Object.keys(byState).find(key => byState[key] === caseNumbersSorted[i])
            stateNamesTop5.push(stateName)
            caseNumbersTop5.push(caseNumbersSorted[i])
        }




        const data = {
            labels: stateNamesTop5,
            datasets: [
              {
                label: '# of Cases',
                data: caseNumbersTop5,
                backgroundColor: [
                    "rgb(253, 128, 111, 0.5)", 
                    "rgb(126, 175, 213, 0.5)", 
                    "rgb(177, 224, 97, 0.5)", 
                    "rgb(189, 126, 190, 0.5)", 
                    "rgb(255, 181, 90, 0.5)", 
                    "rgb(255, 237, 101, 0.5)", 
                    "rgb(190, 185, 219, 0.5)", 
                    "rgb(253, 204, 229, 0.5)", 
                    "rgb(139, 211, 199, 0.5)",
                    "rgb(179, 191, 209, 0.5)",
                ],
                    borderColor: [
                    "rgb(253, 128, 111, 1)", 
                    "rgb(126, 175, 213, 1)", 
                    "rgb(177, 224, 97, 1)", 
                    "rgb(189, 126, 190, 1)", 
                    "rgb(255, 181, 90, 1)", 
                    "rgb(255, 237, 101, 1)", 
                    "rgb(190, 185, 219, 1)", 
                    "rgb(253, 204, 229, 1)", 
                    "rgb(139, 211, 199, 1)",
                    "rgb(179, 191, 209, 1)",
                ],
                borderWidth: 1,
              },
            ],
          };
          
        const options =  {
            plugins: {
                legend: {
                position: 'bottom'
                }
            }
        }



        return(
            <div className='main-box'>
                <div className='PieChart-Title'>Highest Cases by State & Territory</div>
                <div className='chartContainerPieChart'>

                <Pie data={data} options={options}/>

                </div>
                <div className="options-container">
                    <div className="select-container">
                        <label className="select-label"># of States:</label>
                        <select name='numOfStates' value={numOfStates} onChange={numOfStatesChange}>
                            <option value='5'>5</option>
                            <option value='10'>10</option>
                            <option value='25'>25</option>
                            <option value='50'>50</option>
                            <option value='56'>All</option>
                        </select>
                    </div>
                </div>
            </div>
        )
    }

}



const mapStateToProps = (state) =>{
    return state;
}


export default connect(mapStateToProps)(PieChartStatesHighestCases)
