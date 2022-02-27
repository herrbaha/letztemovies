// import './App.css';
import { Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import Movie from './pages/Movie';
import Search from './pages/Search';

export default function App() {
  return (
    <Routes>
    <Route path="/" element={<Login />}/>
    <Route path="/search" element={<Search />}/>
    <Route path="/movie" element={<Movie />} />
   
  </Routes>
  
  );
}