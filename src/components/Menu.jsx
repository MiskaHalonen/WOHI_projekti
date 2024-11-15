import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <nav style={{ marginBottom: '20px' }}>
            <Link to="/" style={{ marginRight: '10px' }}>Etusivu</Link>
            <Link to="/search" style={{ marginRight: '10px' }}>Hae Lainauksia</Link>
            <Link to="/previous">Aiemmat Lainaukset</Link>
        </nav>
    );
};

export default Menu;