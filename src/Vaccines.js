import React, {Component} from 'react';


import VaccinesIcon from '@mui/icons-material/Vaccines';

class Vaccines extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div className='main-box'>

                <div className='vaccines-main-container'>


                    <div className='vaccines-title-container'>
                        <VaccinesIcon
                            sx={{
                                fontSize: '50',
                                mr: '10'
                            }}
                            />
                        <div className='vaccines-title'>
                        About COVID-19 Vaccines
                        </div>
                        </div>
                        <div className='vaccines-description'>
                        COVID-19 vaccines available in the United States are effective at protecting people from getting seriously ill, being hospitalized, and dying. As with other vaccine-preventable diseases, you are protected best from COVID-19 when you stay up to date with the recommended vaccinations, including recommended boosters.                
                    </div>

                    <div className='vaccines-list-container'>
                        <ul className='vaccines-list-ul'>
                            <li className='vaccines-list-li'>
                                Pfizer-BioNTech
                            </li>
                            <li className='vaccines-list-li'>
                                Moderna
                            </li>
                            <li className='vaccines-list-li'>
                                Novavax
                            </li>
                            <li className='vaccines-list-li'>
                                Johnson & Johnson’s Janssen
                            </li>
                        </ul>
                    </div>

                </div>

            </div>
        )
    }
}

export default Vaccines