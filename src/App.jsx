import { useEffect, useState } from 'react';
import './App.css'
import Cover from './components/Cover';
import Navbar from './components/Navbar';
import About from './components/About';

function App() {
const [scrollHeight, setscrollHeight] = useState(0);

const handleScroll= () => {
   const position = window.pageYOffset;
   setscrollHeight(position);
   }

useEffect(() => {
  window.addEventListener("scroll", handleScroll);
}, [setscrollHeight])

  
  return (
    <div className="App">
     <Navbar isScrolling={scrollHeight}/>
     <Cover/>
    <About/>
      
       
    </div>
  )
}

export default App
