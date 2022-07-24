import './App.css';
import Main from './component/Main';
import About from './component/About';
import Portfolio from './component/Portfolio';
import Howtomake from './component/Howtomake';
import Contact from './component/Contact';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path='/' element={<Main />}/>
                    <Route path='/about' element={<About />}/>
                    <Route path='/portfolio' element={<Portfolio />}/>
                    <Route path='/howtomake' element={<Howtomake />}/>
                    <Route path='/contact' element={<Contact />}/>
                </Routes>
            </Router>
        </>
    );
}

export default App;
