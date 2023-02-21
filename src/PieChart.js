import React , {Component} from 'react';
import { connect } from 'react-redux';
import { Pie } from 'react-chartjs-2';



class PieChart extends Component{
    constructor(){
        super();
        this.state ={
            covidDataArr : [],

        }
    }
    componentDidMount(){

    }
    componentDidUpdate(prevProps){
        const {statesInfo} = this.props
        if(prevProps.statesInfo.length == 0 && this.props.statesInfo.length > 0){
            this.setState({
                covidDataArr: this.props.statesInfo,
            })
        }
    }
    render(){
        const {covidDataArr} = this.state;

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
        console.log(covidDataArr)




        const data = {
            labels: stateNames,
            datasets: [
              {
                label: '# of Cases',
                data: caseNumbers,
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
                <Pie data={data} />
            </div>
        )
    }

}



const mapStateToProps = (state) =>{
    return state;
}


export default connect(mapStateToProps)(PieChart)
