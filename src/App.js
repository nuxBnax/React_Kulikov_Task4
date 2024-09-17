import './components/Pages/style.scss';
import { Link } from "react-router-dom";
import AboutPage from './components/Pages/AboutPage';
import HomePage from './components/Pages/Homepage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  
  return (
    <div className="app"> 
      <Router>
        <div className="block-header">
          <Link to="/">
            <h1 className='block-logo'>Инкут-насос</h1>
          </Link>
          <div className='block-access'>
            <button>Вход</button>
            <button>Регистрация</button>
          </div>
        </div>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
