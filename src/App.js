import { useState } from 'react';
import './App.css';
// import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './pages/Home/Home';

function App() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="App">
      <Header isOpen = {isOpen} setIsOpen = {setIsOpen}/>
      <Home isOpen = {isOpen} setIsOpen = {setIsOpen}/>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
