import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Search from "./components/Search";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/search" element={<Search />} />
    </Routes>
  );
}
