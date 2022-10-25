import './Tag.scss'
import PropTypes from 'prop-types';

/**
 * 
 * @param {*} props création composant Tag 
 * @returns retourne le nom du tag
 */
const Tag = (props) => {
    return(
        <div className="tag">
            <p className='tag__name'>
                {props.name}
            </p>
        </div>
    )
}

Tag.propTypes={
    name:PropTypes.string,
}

export default Tag