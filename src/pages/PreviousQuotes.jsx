import { useEffect, useState } from 'react';
import Menu from '../components/Menu';

const PreviousQuotes = () => {
    const [previousQuotes, setPreviousQuotes] = useState([]);

    useEffect(() => {
        // Haetaan aiemmat lainaukset localStorage:stä
        const savedQuotes = JSON.parse(localStorage.getItem('quotes')) || [];
        setPreviousQuotes(savedQuotes);
    }, []);

    return (
        <div className="container">
            <Menu />
            <div className="mt-4">
                <h1 className="text-center text-info mb-4">Aiempia Lainauksia</h1>
                {previousQuotes.length === 0 ? (
                    <div className="alert alert-info text-center" role="alert">
                        Ei aiempia lainauksia tallennettu.
                    </div>
                ) : (
                    <div className="row">
                        {previousQuotes.map((quote, index) => (
                            <div key={index} className="col-md-4 mb-4">
                                <div className="card shadow-sm">
                                    <div className="card-body">
                                        <blockquote className="blockquote mb-0">
                                            <p>"{quote.q}"</p>
                                            <footer className="blockquote-footer">{quote.a || 'Tuntematon'}</footer>
                                        </blockquote>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default PreviousQuotes;
