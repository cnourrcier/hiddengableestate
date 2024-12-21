import { Phone, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {

    return (
        <>
            <footer className='resort-footer'>
                <div className="footer-content">
                    <div className='top-footer-group'>
                        <p className="manager">Exclusively Managed by Natural Retreats</p>
                        <p className="contact">
                            <Phone className="icon" /> <span>888.451.0156</span>
                        </p>
                        <p className="contact">
                            <Mail className="icon" /> <span>concierge@naturalretreats.com</span>
                        </p>
                    </div>
                    <div className='bottom-footer-group'>
                    <div className='bottom-footer-group-left'>
                            <p className='web-designer'>Website by DevRise Studio</p>
                            <p className="contact">
                                <Mail className="icon" /> <span>contact@devrisestudio.com</span>
                            </p>
                        </div>
                        <div className='bottom-footer-group-right'>
                            <p className="permit">City of Palm Springs Rental Permit #1039</p>
                            {/* <p>Locations760.com</p> */}
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;