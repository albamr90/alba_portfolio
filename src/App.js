import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import Header from './Header';
import Background from './Background';
import About from './About';
import Education from './Education';
import Work from './Work';
import Languages from './Languages';
import Footer from './Footer';
import Projects from './Projects';



function App() {
  return (
    <div className="App bg-dark text-white min-vh-100 flex-column">
      <Navbar></Navbar>
      <Header></Header>
      <Background></Background>
      <About></About>
      <Education></Education>
      <Work></Work>
      <Languages></Languages>
      <Projects></Projects>
      <Footer></Footer>
    
    </div>
    
  );
}

export default App;
