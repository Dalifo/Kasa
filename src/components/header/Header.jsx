/* eslint-disable no-useless-constructor */
import '../header/Header.scss';
import logo from '../../assets/logo_header.png';
import { Link } from 'react-router-dom';
import setUnderline from '../../app/active_element';
import React from 'react';

/**
 * 
 * @returns création composant Header
 */
 class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        setUnderline('');
    }
    render () {
        return(
            <header className='header'>
                <Link to='/' onClick={() => {setUnderline('home')}}>
                    <img src={logo} className='header__logo' alt='header' />
                </Link>
                <nav className="header__nav">
                    <Link to='/' className='header__element underline' id='home' onClick={() => {setUnderline('home')}}>Accueil</Link>
                    <Link to='/about' className='header__element' id='about' onClick={()=>{setUnderline('about')}}>A propos</Link>
                </nav>
            </header>
        )
    }
}




export default Header
