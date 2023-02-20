import React, {Component} from 'react';


import VaccinesIcon from '@mui/icons-material/Vaccines';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import BiotechIcon from '@mui/icons-material/Biotech';
import SickIcon from '@mui/icons-material/Sick';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import { Link } from 'react-router-dom';


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
                        Testing remains an important part of reducing the spread of COVID-19. All New Yorkers should get tested for COVID-19 if they have <Link className='link' to='>symptoms'>symptoms</Link>or were recently exposed to someone with COVID-19.
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
                    <div className='testing-list-description'>
                        <b><i>At Home Testing:</i></b>
                        <ul className='testing-list-ul'>
                            <li className='testing-list-li'>
                                Most at-home tests allow you to test the sample yourself and get results in minutes. Some tests have you collect a nasal or saliva sample and send it to a laboratory.
                            </li>
                            <li className='testing-list-li'>
                            Be sure to carefully read and closely follow the manufacturer’s instructions. You can also watch the below online instructional videos provided by the manufacturers before taking the test.
                            </li>
                            <li className='testing-list-li'>
                            At-home testing may be less accurate than tests performed by a health care provider. The FDA recommends repeat testing after a negative result, even if you do not have symptoms. In some cases, you should go to a provider for a test to confirm your initial results.
                            </li>
                        </ul>
                    </div>

                </div>
                

                <div className='symptoms-medical-attention-container'>
                    <div className='testing-resources-title-container'>
                        <CollectionsBookmarkIcon
                        sx={{
                            fontSize: '50',
                            mr: '10'
                        }}
                        />
                        <div className='testing-resources-title'>
                        Testing Resources:
                        </div>
                    </div>
                    <div className='testing-resources-description'>
                    </div>
                    <div className='testing-resources-list'>
                        <ul>
                            <li className='testing-resources-li'>
                            Every U.S. household is eligible to order 4 free at-home COVID-⁠19 tests. <Link className='link' to='https://www.covid.gov/tests'>Click Here</Link> to order.
                            </li>
                            <li className='testing-resources-li'>
                                The U.S. Department of Health & Human Services provides makes it easy to find a testing site near you. <Link className='link' to='https://www.hhs.gov/coronavirus/community-based-testing-sites/index.html'>Click Here</Link> to find a site near you.
                            </li>
                            <li className='testing-resources-li'>
                                Located in NYC? Use <Link className='link' to='https://www.nyc.gov/site/coronavirus/get-tested/covid-19-testing.page'>this portal</Link> to find a testing site. 
                            </li>
                        </ul>
                    </div>
                    <div>
                    </div>
                </div>











                <div className='testing-main-container'>
                    <div className='testing-title-container'>
                        <SickIcon
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
                    With molecular tests, such as PCR tests, you may continue to test positive for COVID-19, even though you are no longer contagious. If you develop new symptoms, talk to your health care provider.
                    </div>
                

                </div>


            </div>
        )
    }
}

export default Testing