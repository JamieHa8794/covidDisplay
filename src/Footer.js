import React, {Component} from "react";
import { Link } from "react-router-dom";

class Footer extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div className="footer-container">
                <div className="footer-disclaimer">
                    This website is intended to share information about COVID-19. 
                    The information provided should not be used for diagnosing or treating a health problem or disease, and those seeking personal medical advice should consult with a licensed physician. 
                    Always seek the advice of your doctor or other qualified health provider regarding a medical condition.
                </div>
                <div className="footer-disclaimer">
                For more information please visit: <Link className='footer-disclaimer-link' to='https://www.cdc.gov/'>cdc.gov</Link> or <Link className='footer-disclaimer-link' to='https://www.nyc.gov/site/doh/covid/covid-19-main.page'>NYC Health</Link>
                </div>

            </div>
        )
    }



}


export default Footer;


