import '../dropdown/Dropdown.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react'
import PropTypes from 'prop-types';

/**
 * 
 * @param {*} props charge un dropdown  
 * @returns dropdown
 */
const Dropdown = (props) => {
    const [isOpen, toggle]=useState(false)
    
    const toggleDropdown = (e) => {
        e.preventDefault();
        toggle(!isOpen);
        dropdownView(props,isOpen)
    }

    const dropdownView = (props,isOpen) =>{
        if(isOpen){
            document.getElementById(props.name).classList.add('closed')
            document.getElementById(props.name).classList.remove('open')
            document.getElementById('chevron_'+props.name).classList.remove('dropdown__open')
        }else{
            document.getElementById(props.name).classList.add('open')
            document.getElementById(props.name).classList.remove('closed')
            document.getElementById('chevron_'+props.name).classList.add('dropdown__open')
        }
    }

    return (
        <div className='dropdown_wrap'>
            <div className={`dropdown ${props.type}`} onClick={(e)=>toggleDropdown(e)}>
                <p className="dropdown__name">{props.name}</p>
                <FontAwesomeIcon icon={faChevronDown} className="dropdown__icon" id={'chevron_'+ props.name} />
            </div>
            <div id={props.name} className={`dropdown__list ${props.type} closed`}>
                {
                    Array.isArray(props.content) ? props.content.map((element) => {
                        return <li className="dropdown__elementName" key={element}>{element}</li>
                    }) : <p className="dropdown__content">{props.content}</p>
                }
            </div>
        </div>
    )
}

Dropdown.propTypes={
    type:PropTypes.string,
    name:PropTypes.string,
    content:PropTypes.oneOfType([PropTypes.string,PropTypes.arrayOf(PropTypes.string)]),
}

export default Dropdown