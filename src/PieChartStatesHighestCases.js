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

        console.log(byState)

        const stateNames = Object.keys(byState);
        const caseNumbers = Object.values(byState);


        console.log(stateNames)
        console.log(caseNumbers)


        const caseNumbersSorted = [...caseNumbers];
        caseNumbersSorted.sort(function(a, b) {
            return b - a;
          });

        console.log(caseNumbers)
        console.log(caseNumbersSorted)

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
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
              },
            ],
          };
          



        return(
            <div className='main-box'>
                <div className='PieChart-Title'>Highest Cases by State & Territory</div>
                <div className='chartContainerPieChart'>

                <Pie data={data} />

                </div>
                <select name='numOfStates' value={numOfStates} onChange={numOfStatesChange}>
                    <option value='5'>5</option>
                    <option value='10'>10</option>
                    <option value='25'>25</option>
                    <option value='50'>50</option>
                    <option value='56'>All</option>
                </select>
            </div>
        )
    }

}



const mapStateToProps = (state) =>{
    return state;
}


export default connect(mapStateToProps)(PieChartStatesHighestCases)
