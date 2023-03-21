import '../Styles/App.scss';
import Login from './Login';
import Landing from './Landing';
import Register from './Register';
import { HashRouter, Route, Routes } from 'react-router-dom';


function App() {

  return (
    <HashRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/Register" element={<Register/>} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
