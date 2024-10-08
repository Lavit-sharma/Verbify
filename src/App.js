import { useState } from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Textform from './component/Textform';
import About from './component/About';
import Alert from './component/Alert';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import necessary routing components
import Footer from './component/Footer';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode enabled", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode enabled", "success");
    }
  };

  return (
    <>
    <Router>
      <Navbar title="Verbify" about="About" mode={mode} togglemode={toggleMode} />
      <Alert alert={alert} />
     
        <Routes>
          <Route path="/" element={<Textform heading='Enter the text to analyze' showAlert={showAlert} mode={mode} />} />
          <Route path="/about" element={<About />} />
        </Routes>
     <Footer/>
    </Router>
    </>
  );
}

export default App;
