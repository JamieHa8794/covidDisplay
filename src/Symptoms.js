import React, {Component} from 'react'

import MasksIcon from '@mui/icons-material/Masks';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';


class Symptoms extends Component{
    constructor(){
        super();
    }
    render(){

        const symptoms = ['Fever', 'Cough', 'Tiredness', 'Shortness of breath or difficulty breathing', 'Muscle aches', 
        'Chills', 'Sore throat', 'Runny nose', 'Headache', 'Chest pain', 'Pink eye (conjunctivitis)', 'Nausea,Vomiting', 'Diarrhea', 'Rash']

        const warningSigns= ['Trouble breathing',
            'Persistent chest pain or pressure',
            'Inability to stay awake',
            'New confusion',
            'Pale, gray or blue-colored skin, lips or nail beds — depending on skin tone']

        return(
            <div className='main-box'>
                <div className='symptoms-main-container'>

                    <div className='symptoms-title-container'>
                        <MasksIcon
                        sx={{
                            fontSize: '50',
                            mr: '10'
                        }}
                        />
                        <div className='symptoms-title'>

                        Symptoms of COVID-19
                        </div>
                    </div>

                    <div className='symptoms-description'>
                    Signs and symptoms of coronavirus disease 2019 (COVID-19) may appear 2 to 14 days after exposure. This time after exposure and before having symptoms is called the incubation period. You can still spread COVID-19 before you have symptoms (presymptomatic transmission). Common signs and symptoms can include:                
                    </div>
                    <div className='symptoms-symptom-list-container'>
                        <ul className='symptoms-symptom-list-ul'>
                            {symptoms.map( (symptom, idx) =>{
                                if(idx < symptoms.length/2){
                                    return(
                                        <li key={idx} className='symptoms-symptom-list-li'>
                                            {symptom}
                                        </li>
                                    )
                                }
                            })}
                        </ul>
                        <ul className='symptoms-symptom-list-ul'>
                            {symptoms.map( (symptom, idx) =>{
                                if(idx >= symptoms.length/2){
                                    return(
                                        <li key={idx} className='symptoms-symptom-list-li'>
                                            {symptom}
                                        </li>
                                    )
                                }
                            })}
                        </ul>
                    </div>
                </div>

                <div className='symptoms-medical-attention-container'>
                    <div className='symptoms-medical-attention-tile-container'>
                        <LocalHospitalIcon
                        sx={{
                            fontSize: '50',
                            mr: '10'
                        }}
                        />
                        <div className='symptoms-medical-attention-title'>
                        When to seak medical attention:
                        </div>
                    </div>
                    <div className='symptoms-medical-attention-description'>
                    If you have emergency COVID-19 signs and symptoms, seek care immediately. Emergency signs and symptoms can include*:
                    </div>
                    <div className='symptoms-medical-attention-list'>
                        <ul>
                            {warningSigns.map(sign=>{
                                return(
                                    <li>
                                        {sign}
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div>
                    *This list is not all possible symptoms. Please call your medical provider for any other symptoms that are severe or concerning to you.
                    </div>
                </div>
            </div>
        )
    }



}


export default Symptoms