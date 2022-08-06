import {useState} from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import './App.css';

function App() {
  
  const [page, setPage] = useState("about")
  function render () {
    if (page === "about") {
      return < About/ > 
      
    } 
    else if (page === "projects")
    {
      return <Projects />
    }
    else if (page === "Contact")
    {
      return <Contact />
    }
  }

  return (
    <div className="App">
    <Header setPage = {setPage}/>
    {render()} 
    <Footer />
    </div>
  );
}

export default App;
