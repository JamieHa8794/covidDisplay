import React, {Component} from 'react';
import { Link } from 'react-router-dom';


import VaccinesIcon from '@mui/icons-material/Vaccines';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';


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

                    <div className='vaccines-list-description'>
                    Four COVID-19 vaccines are approved or authorized in the United States:
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


                <div className='vaccines-main-container'>


                <div className='vaccines-title-container'>
                    <AddCircleOutlineIcon
                        sx={{
                            fontSize: '45',
                            mr: '10'
                        }}
                        />
                    <div className='vaccines-title'>
                    Booster
                    </div>
                    </div>
                    <div className='vaccines-description'>
                    Updated Pfizer and Moderna COVID-19 vaccine boosters are now available. The updated boosters are called “bivalent” because they protect against both the original virus that causes COVID-19 and the omicron variant BA.4 and BA.5. These boosters increase your immunity from your prior doses.
                    </div>

                    <div className='vaccines-list-container'>
                        <div className='vaccines-description'>
                        People ages 6 and older can get either the Pfizer or Moderna booster, regardless of which brand of vaccine they previously received.
                        </div>
                        <ul className='vaccines-list-ul'>
                            <li className='vaccines-list-li'>
                                <b>Moderna:</b>
                                    <div>
                                        <ul>
                                            <li className='vaccines-list-li-li'>
                                            Everyone 6 months and older who received the Moderna primary series should receive a bivalent booster dose at least two months after their last vaccine dose (even if they have received prior booster shots).
                                            </li>
                                        </ul>
                                    </div>
                            </li>
                            <li className='vaccines-list-li'>
                                <b>Pfizer:</b>
                                    <div>
                                        <ul>
                                            <li className='vaccines-list-li-li'>
                                            Everyone 5 years and older who received the Pfizer primary series should receive a bivalent booster dose at least two months after their last vaccine dose (even if they have received prior booster shots).
                                            </li>
                                            <li className='vaccines-list-li-li'>
                                            Children 6 months to 4 years who received the Pfizer primary series are not eligible for a booster dose at this time. However, people in this age group that have not received all three doses of the Pfizer primary series will now receive a bivalent shot for their third dose.
                                            </li>
                                        </ul>
                                    </div>
                            </li>
                            
                        </ul>
                    </div>



                    <div className='vaccines-list-container'>
                        <div className='vaccines-description'>
                            Updated (bivalent) boosters became available on:
                        </div>
                        <ul className='vaccines-list-ul'>
                            <li className='vaccines-list-li'>
                            <b>September 2, 2022,</b> for people aged 12 years and older
                            </li>
                            <li className='vaccines-list-li'>
                            <b>October 12, 2022,</b> for people aged 5–11 years
                            </li>
                            <li className='vaccines-list-li'>
                            <b>December 9, 2022,</b> for children aged 6 months–4 years who completed the Moderna COVID-19 vaccine primary series
                            </li>
                        </ul>
                    </div>


                </div>

                <div className='vaccines-sick-container'>
                    <div className='vaccines-sick-title'>
                        Feeling Sick? 
                    </div>
                    <div className='vaccines-sick-description'>
                        Read more about the list of currently known <Link className='vaccines-sick-description-link' to='/symptoms'>symptoms</Link>.
                    </div>
                </div>



            </div>
        )
    }
}

export default Vaccines