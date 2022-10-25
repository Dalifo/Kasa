import './Error404.scss'
import Error from '../../components/error/Error';

/**
 * 
 * @returns page d'erreur
 */
const Error404 = () => {
    document.title="Erreur"
    return(<main><Error /></main>)
}

export default Error404