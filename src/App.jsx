
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SearchQuotes from './pages/SearchQuotes';
import PreviousQuotes from './pages/PreviousQuotes';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search" element={<SearchQuotes />} />
                <Route path="/previous" element={<PreviousQuotes />} />
            </Routes>
        </Router>
    );
};

export default App;
