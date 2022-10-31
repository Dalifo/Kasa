import '../House/House.scss';
import React from 'react';
import Carrousel from '../../components/carrousel/Carrousel'
import Tag from '../../components/tag/Tag';
import Rating from '../../components/rating/Rating';
import Dropdown from '../../components/dropdown/Dropdown';
import { useParams } from 'react-router-dom'
import { data } from '../../data/logements';
import Error404 from '../Error404/Error404'

/**
 * 
 * @returns page d'appartement
 */
const House= () => {
    window.scrollTo(0,0)
    let {id} = useParams();
    const house = data.find(house=>house.id===id)
    document.title = !!house ? house.title : "invalid";
    if(!!house === false){
        return <Error404 />
    }
    return(
        <main>
            <Carrousel image={house.pictures[0]} key={house.pictures[0]} pictures={house.pictures} />
            <section className='infos'>
                <div className="infos__title_localisation_tags">
                    <div className="infos__title_localisation">
                        <h2 className="infos__title">{house.title}</h2>
                        <h5 className="infos__localisation">{house.location}</h5>
                    </div>
                    <div className="infos__tags">
                        {house.tags.map((tag)=>( <Tag name={tag} key={tag} /> ))}
                    </div>
                </div>
                <div className="infos__host_rate">
                    <div className="infos__host">
                        <p className="infos__hostName">{house.host.name}</p>
                        <img className='infos__hostPicture' src={house.host.picture} alt={house.host.name}/>
                    </div>
                    <div className="infos__rate" id='rating'>
                        <Rating rate={house.rating} />
                    </div>
                </div>
            </section>
            <section className='dropdowns'>
                <Dropdown type='equipements_description' name='Description' content={house.description} />
                <Dropdown type='equipements_description' name='Equipements' content={house.equipments}/>
            </section>
        </main>
    )
}

export default House