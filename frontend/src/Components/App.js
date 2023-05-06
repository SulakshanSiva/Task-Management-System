import '../Styles/App.scss';
import Login from './Login';
import Landing from './Landing';
import Register from './Register';
import Error404 from './Error404';
import Contact from './Contact';
import About from './About';
import { HashRouter, Route, Routes } from 'react-router-dom';


function App() {

  return (
    <HashRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/Register" element={<Register/>} />
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="*" element={<Error404/>} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
