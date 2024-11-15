import { useState, useEffect } from 'react';
import Menu from '../components/Menu';

const SearchQuotes = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [quotes, setQuotes] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        fetch('https://cors-anywhere.herokuapp.com/zenquotes.io/api/quotes')
            .then((response) => response.json())
            .then((data) => setQuotes(data))
            .catch((error) => {
                console.error('Error fetching quotes:', error);
                setError('Lainauksia ei voitu ladata. Tarkista yhteys tai yritä myöhemmin.');
            });
    }, []);

    const handleSearch = () => {
        const filteredQuotes = quotes.filter((quote) =>
            quote.q.toLowerCase().includes(query.toLowerCase())
        );
        setResults(filteredQuotes);

        // Tallennetaan haettu lainaus localStorageen
        const savedQuotes = JSON.parse(localStorage.getItem('quotes')) || [];
        filteredQuotes.forEach((quote) => savedQuotes.push(quote));
        localStorage.setItem('quotes', JSON.stringify(savedQuotes));
    };

    return (
        <div className="container">
            <Menu />
            <div className="mt-4">
                <h1>Hae Lainauksia</h1>
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Kirjoita avainsana"
                    />
                    <button
                        className="btn btn-primary"
                        onClick={handleSearch}
                    >
                        Hae
                    </button>
                </div>
                {error && <div className="alert alert-danger">{error}</div>}
                <ul className="list-group">
                    {results.map((quote, index) => (
                        <li key={index} className="list-group-item">
                            {quote.q} - {quote.a || 'Tuntematon'}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default SearchQuotes;
