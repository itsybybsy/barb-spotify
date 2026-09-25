import "../styles/footer.css";

import instagram from '../images/icons/instagram.png';
import twitter from '../images/icons/twitter.png';
import facebook from '../images/icons/facebook.png';

function Footer() {
    return (
        <>
            <div className="footer-container">
                <div className="footer-wrapper">
                    <div className="footer-contact">

                        <div className="company">
                            <h4>Company</h4>
                            <ul>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Jobs</a></li>
                                <li><a href="#">For the record</a></li>
                            </ul>
                        </div>
                        <div className="communities">
                            <h4>Communities</h4>
                            <ul>
                                <li><a href="#">For Artists</a></li>
                                <li><a href="#">Developers</a></li>
                                <li><a href="#">Advertising</a></li>
                                <li><a href="#">Investors</a></li>
                                <li><a href="#">Vendors</a></li>
                            </ul>
                        </div>
                        <div className="info">
                            <h4>Useful Links</h4>
                            <ul>
                                <li><a href="#">Supoort</a></li>
                                <li><a href="#">Free Mobile App</a></li>
                            </ul>
                        </div>
                        <div className="plans">
                            <h4>Spotify Plans</h4>
                            <ul>
                                <li><a href="#">Premium Individual</a></li>
                                <li><a href="#">Premium Duo</a></li>
                                <li><a href="#">Premium Family</a></li>
                                <li><a href="#">Premium Student</a></li>
                                <li><a href="#">Spotify Free</a></li>
                            </ul>
                        </div>
                        <div className="social">
                            <ul>
                                <li>
                                    <a href="#"><img src={instagram} className="icon icon-s icon-r"/></a>
                                    <a href="#"><img src={twitter} className="icon icon-s icon-r" /></a>
                                    <a href="#"><img src={facebook} className="icon icon-s icon-r" /></a>
                                </li>
                            </ul>
                        </div>
                        
                    </div>

                    <div className="extra-footer">
                        <ul>
                            <li><a>Legal</a></li>
                            <li><a>Safety & Privacy Center</a></li>
                            <li><a>Privacy Policy</a></li>
                            <li><a>Cookies</a></li>
                            <li><a>About Ads</a></li>
                            <li><a>Accessibility</a></li>
                        </ul>
                        <div className="copyright">
                            <p>© 2024 Spotify AB</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
  





