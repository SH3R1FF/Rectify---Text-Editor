import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar title="RECTIFY" />
        <div>
          <Routes>
            <Route exact path="/" element = {<TextForm heading="MANIPULATE THE TEXT" />} /> 
    
            <Route exact path="/About" element = {<About heading="ABOUT US" />} />
              
          </Routes>
        </div>
        <Footer />
      </Router>
    </>

  );
}

export default App;
