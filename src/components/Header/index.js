import './header.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <Link className='logo' to="/">IceCream</Link>

            <div>
                <Link className='navegacao' to="/">Home</Link>
                <Link className='navegacao' to="/produtos">Produtos</Link>
                <Link className='navegacao' to="/historia">Historia</Link>
                <Link className='navegacao' to="/contato">Contato</Link>
            </div>
        </header>
    )
}

export default Header;