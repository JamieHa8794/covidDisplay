import React, {Component} from 'react';


import VaccinesIcon from '@mui/icons-material/Vaccines';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import BiotechIcon from '@mui/icons-material/Biotech';


class Testing extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div className='main-box'>

                <div className='testing-main-container'>
                    <div className='testing-title-container'>
                        <BiotechIcon
                            sx={{
                                fontSize: '50',
                                mr: '10'
                            }}
                        />
                        <div className='testing-title'>
                        COVID-19 Testing
                        </div>
                    </div>
                    <div className='testing-description'>
                        Testing remains an important part of reducing the spread of COVID-19. All New Yorkers should get tested for COVID-19 if they have symptoms or were recently exposed to someone with COVID-19.
                    </div>
                    <div className='testing-list-description'>
                        <b><i>Even if you are vaccinated, you should get tested:</i></b>
                    </div>
                    <div className='testing-list-container'>
                        <ul className='testing-list-ul'>
                            <li className='testing-list-li'>
                            <b>Immediately</b> if you have symptoms of COVID-19.
                            </li>
                            <li className='testing-list-li'>
                            <b>Five days after</b> having close contact (being within 6 feet for at least 15 minutes over a 24-hour period) with someone while they had COVID-19.
                            </li>
                            <li className='testing-list-li'>
                            <b>Before and after</b> travel or attending a gathering, especially if you or others are not vaccinated or up to date with your vaccine shots, or are at risk of severe COVID-19.
                            </li>
                        </ul>
                    </div>

                </div>
                


                <div className='testing-main-container'>
                    <div className='testing-title-container'>
                        <BiotechIcon
                            sx={{
                                fontSize: '50',
                                mr: '10'
                            }}
                        />
                        <div className='testing-title'>
                            Retesting After a Positive Diagnostic Test
                        </div>
                    </div>
                    <div className='testing-description'>
                        If you recently recovered from COVID-19, you generally should not get retested for COVID-19 for three months after your symptoms began of, if you had no symptoms, from the date you were tested, unless you develop new symptoms.
                    </div>
                    <div className='testing-description'>
                    With molecular tests, such as PCR tests, you may continue to test positive for COVID-19, even though you are no longer contagious. If you develop new symptoms, talk to your health care provider.                    </div>
                

                </div>


            </div>
        )
    }
}

export default Testing