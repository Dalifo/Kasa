import '../thumb/Thumb.scss'
import PropTypes from 'prop-types';

/**
 * 
 * @param {*} props création composant Thumb
 * @returns retourne une miniature
 */
const Thumb = (props) =>{
    return (
        <div className="thumb">
            <img src={props.cover} alt="logo" className="thumb__img"/>
            <p className="thumb__title"> {props.name} </p>
        </div>
    )
}

Thumb.propTypes={
    cover:PropTypes.string,
    name:PropTypes.string,
}

export default Thumb