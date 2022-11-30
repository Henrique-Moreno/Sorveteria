import './rodape.css';
import {Link} from 'react-router-dom'; 


function Rodape() {
    return(
        <div className='rodape'>
            <Link className='logo' to="/">IceCream</Link>
            <h4>Criação e perfomance Henrique.Web</h4>
        </div>
    )
}

export default Rodape;