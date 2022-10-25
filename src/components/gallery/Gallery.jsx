import '../gallery/Gallery.scss'
import PropTypes from 'prop-types';
import Thumb from '../thumb/Thumb';
import { Link } from 'react-router-dom';
import setUnderline from '../../app/active_element';

/**
 * 
 * @param {*} props création composant Gallery 
 * @returns galerie comportant des miniatures
 */
const Gallery = (props) => {
    return (
        <section className="gallery">
            {props.data.map((data)=>(
                <Link to={`/house/${data.id}`} key={data.id} className="link" onClick={()=>setUnderline('house')}>
                    <Thumb cover={data.cover} name={data.title} key={data.id} />
                </Link>
            ))}
        </section>
    )
}

Gallery.propTypes={
    data:PropTypes.array
}

export default Gallery