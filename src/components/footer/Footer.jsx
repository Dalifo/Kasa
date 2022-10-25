import './Footer.scss';
import logo from '../../assets/logo_footer.png'

/**
 * 
 * @returns composant Footer
 */
const Footer = () => {
    const year= new Date().getFullYear();
    return(
        <footer className="footer">
            <img src={logo} alt="footer_logo" className="footer__logo" />
            <p className='footer__copyrights'>© {year} Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer