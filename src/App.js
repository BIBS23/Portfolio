import './App.css';
import Nav from './components/Nav';
import Contact from './pages/contact/Contact';
import Home from './pages/home/Home';
import Projects from './pages/projects/Projects';
import Skill from './pages/skill/Skill';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Home/>
      <Skill/>
      <Projects/>
      <Contact/>
     
   
     
    </div>
  );
}

export default App;
