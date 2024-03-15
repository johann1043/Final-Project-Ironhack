import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './pages/home'
import About from './pages/aboutUs'
import PredictPage from './pages/prediction'
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  return (
    <div className="App">

    
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/prediction' element={<PredictPage />} />
        
      </Routes>


    </div>
  );
}

export default App;
