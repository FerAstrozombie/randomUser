import './App.css';
import User from './components/User/User';
import NotFoundPage from "./components/NotFoundPage/NotFoundPage"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Usuarios from './components/Usuarios/Usuarios';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={ <User /> } />
        <Route path="*" element={ <NotFoundPage /> } />
        <Route path="/usuarios" element={ <Usuarios /> } />
      </Routes>
    </Router>
  )
}

export default App
