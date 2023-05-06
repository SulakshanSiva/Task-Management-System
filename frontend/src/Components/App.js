import '../Styles/App.scss';
import Login from './Login';
import Landing from './Landing';
import Register from './Register';
import Error404 from './Error404';
import Contact from './Contact';
import About from './About';
import Home from './Home'
import { HashRouter, Route, Routes } from 'react-router-dom';
import { AuthContextProvider } from '../Context/AuthContext';


function App() {

  return (
    <AuthContextProvider>
        <HashRouter>
        <div className="App">
            <Routes>
            <Route path="/" element={<Landing/>} />
            <Route path="/Login" element={<Login/>} />
            <Route path="/Register" element={<Register/>} />
            <Route path="/Contact" element={<Contact/>}/>
            <Route path="/About" element={<About/>}/>
            <Route path="/Home" element={<Home/>}/>
            <Route path="*" element={<Error404/>} />
            </Routes>
        </div>
        </HashRouter>
    </AuthContextProvider>
  );
}

export default App;
