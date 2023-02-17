import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Hooks/Navbar';
import { HomeScreen } from './components/Home';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/'
      element={
        <HomeScreen/>
      }
      />
    </Routes>
    </>
  );
}

export default App;
