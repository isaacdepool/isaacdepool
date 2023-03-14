import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Hooks/Navbar';
import { HomeScreen } from './components/Home';
import 'animate.css';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/isaacdepool'
      element={
        <HomeScreen
        executeScroll
        />
      }
      />
    </Routes>
    </>
  );
}

export default App;
