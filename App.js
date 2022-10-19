import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login1 from './Login/Login1';
import Home from './Feed/Home';
import Perfil from './Perfil/Perfil';
import './App.css';


function App() {
  return (
    <Router>
      <div className="All">
        <body>
          <main>
            <Routes>
              <Route exact path="/" element={<Login1/>}/>
              <Route path="/Home" element={<Home/>}/>
              <Route path="/Perfil" element={<Perfil/>}/>
            </Routes>
          </main>
        </body>
      </div>
    </Router>
  );
}

export default App;
