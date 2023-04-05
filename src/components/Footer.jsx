import facebook from "../assets/images/fb.svg"
import instagram from "../assets/images/insta.svg"
import twitter from "../assets/images/twitter.svg"
import linkedin from "../assets/images/Linkedin.svg"

const Footer = () => {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="footer-wrapper">
                        <div className="footer__socials">
                            <a href="#">
                                <img src={facebook} alt="facebook icon" />
                            </a>
                            <a href="#">
                                <img src={instagram} alt="instagram icon" />
                            </a>
                            <a href="#">
                                <img src={twitter} alt="twitter icon" />
                            </a>
                            <a href="#">
                                <img src={linkedin} alt="linkedin icon" />
                            </a>
                        </div>
                        <p className="footer__info">Copyright ©2020 All rights reserved </p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer