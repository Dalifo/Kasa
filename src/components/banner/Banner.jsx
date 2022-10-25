import '../banner/Banner.scss';
import PropTypes from 'prop-types';

/**
 * 
 * @param {*} props charge la bannière
 * @returns bannière
 */
const Banner = (props) => {
    if(props.type==="about"){
        return (
            <section className="banner">
                <img src={props.image} className="banner__image"  alt="about" />
            </section>    
            )
    }else if(props.type==="home"){
        return (
            <section className="banner">
                <img src={props.image} className="banner__image home"  alt="about" />
                <p className="banner__text">Chez vous, partout et ailleurs</p>
            </section>    
            )
    }
}

Banner.propTypes={
    image: PropTypes.string,
    type: PropTypes.string,
}

export default Banner