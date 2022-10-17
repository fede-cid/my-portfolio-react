import './App.css';
import Cover from './componets/cover/Cover.js';
import NavBar from './componets/navBar/NavBar';
import React, {useState , useEffect} from 'react';
import About from './componets/about/About';
import Slide from './componets/slider/Slides';

function App() {
const [scrollHeight, setScrollHeight] = useState(0)

const handleScroll = () => {
  const position = window.pageYOffset;
  setScrollHeight(position)
}

useEffect(()=> {
  window.addEventListener('scroll', handleScroll);
}, [scrollHeight])

  return (
    <div className="App">
      <NavBar isScrolling={scrollHeight}/>
      <Cover />
      <About />
      <Slide/>
    </div>
  );
}

export default App;
