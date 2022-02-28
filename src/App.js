import { Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import Search from './pages/Search';

export default function App() {
  return (
  <Routes>
    <Route path="/" element={<Login />}/>
    <Route path="/search" element={<Search />} />
   
  </Routes>
  
  );
}