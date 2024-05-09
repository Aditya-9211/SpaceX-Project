
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import History from './components/pages/History';
import Navigation from './components/pages/Navigation';
import Status from './components/pages/Status';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/navigation' element={<Navigation/>}></Route>
        <Route path='/status' element={<Status/>}></Route>
        <Route path='/launches' element={<History/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
