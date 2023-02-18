import React, {Component} from 'react'


class Symptoms extends Component{
    constructor(){
        super();
    }
    render(){

        const sympotoms = ['Fever', 'Cough', 'Tiredness', 'Shortness of breath or difficulty breathing', 'Muscle aches', 
        'Chills', 'Sore throat', 'Runny nose', 'Headache', 'Chest pain', 'Pink eye (conjunctivitis)', 'Nausea,Vomiting', 'Diarrhea', 'Rash']



        return(
            <div className='main-box'>
                <div className='symptoms-title'>
                    Symptoms of COVID-19
                </div>

                <div className='symptoms-description'>
                Signs and symptoms of coronavirus disease 2019 (COVID-19) may appear 2 to 14 days after exposure. This time after exposure and before having symptoms is called the incubation period. You can still spread COVID-19 before you have symptoms (presymptomatic transmission). Common signs and symptoms can include:                
                </div>
                <div className='symptoms-symptom-list-container'>
                    <ul>
                        {sympotoms.map( symptom =>{
                            return(
                                <li>
                                    {symptom}
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        )
    }



}


export default Symptoms