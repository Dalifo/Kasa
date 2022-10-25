import '../carrousel/Carrousel.scss'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types';

/**
 * 
 * @param {*} props charge le composant Carrousel 
 * @returns Carrousel
 */
const Carrousel = (props) => {
    const [activeIndex, setActiveIndex]=useState(0);
    const pictures=props.pictures;
    const picturesLength=pictures.length;
    const className= picturesLength > 1 ? '' : 'none';
        const previous=()=>{
            setActiveIndex((index) => (index - 1 < 0 ? pictures.length - 1 : index - 1))
        }
        const next=()=>{
            setActiveIndex((index) => (index + 1 > pictures.length - 1 ? 0 : index + 1));
        }

        return(
        <section className="carrousel">
            <FontAwesomeIcon icon={faChevronLeft} className={`carrousel__chevronLeft chevron ${className}`} onClick={previous} />
             <img src={pictures[activeIndex]} className="carrousel__image" alt="cover"/>
            <FontAwesomeIcon icon={faChevronRight} className={`carrousel__chevronRight chevron ${className}`} onClick={next} />
            <p className="carrousel__index">{activeIndex+1}/{props.pictures.length}</p>
        </section>
        )
}

Carrousel.propTypes={
    image:PropTypes.string,
}

export default Carrousel