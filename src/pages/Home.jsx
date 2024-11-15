import { useEffect, useState } from 'react';
import Menu from '../components/Menu';

const Home = () => {
    const [quote, setQuote] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        // Hae lainaus alussa ja tallenna se
        fetch('https://cors-anywhere.herokuapp.com/zenquotes.io/api/random')
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`API error: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                if (data && data[0]) {
                    const newQuote = `${data[0].q} - ${data[0].a}`;
                    setQuote(newQuote); // Päivitä state

                    // Tallenna lainaus localStorageen
                    const savedQuotes = JSON.parse(localStorage.getItem('quotes')) || [];
                    savedQuotes.push(data[0]);
                    localStorage.setItem('quotes', JSON.stringify(savedQuotes));
                } else {
                    setError('Lainauksen haku epäonnistui.');
                }
            })
            .catch((error) => {
                console.error('Fetch error:', error);
                setError('Lainauksen haku epäonnistui. Yritä myöhemmin uudelleen.');
            });
    }, []); // Tämä varmistaa, että haku tapahtuu vain komponentin latautuessa

    return (
        <div className="container">
            <Menu />
            <div className="jumbotron mt-4 text-center">
                <h1 className="display-4">Päivän Lainaus</h1>
                {error ? (
                    <div className="alert alert-danger" role="alert">
                        {error}
                    </div>
                ) : (
                    <p className="lead">{quote || 'Ladataan...'}</p>
                )}
            </div>
        </div>
    );
};

export default Home;
