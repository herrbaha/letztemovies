import { Routes, Route, Navigate, BrowserRouter} from "react-router-dom";
import Login from "./components/Login";
import Search from "./components/Search";

const PrivateRoute = ({ children }) => {
  const password =  localStorage.getItem("password");
  const email =  localStorage.getItem("email");
  
      
  if ( password && email ) {
    return  children
  }
    return <Navigate to="/" />

}

export default function App() {

 



  return (
    <BrowserRouter>
    <Routes>
      
      <Route path="/" element={<Login />} />
      {/* <Route path="/search" element={<PrivateRoute><Search /></PrivateRoute>}/> */}
    </Routes>
    </BrowserRouter>
  );
}
