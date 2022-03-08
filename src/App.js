import { Routes, Route} from "react-router-dom";
import Login from "./components/Login";
import Search from "./components/Search";

export default function App() {

  // const PrivateRoute = ({ children}) => {
  //   const isAuthenticated = true;
        
  //   if (isAuthenticated ) {
  //     return children
  //   }
      
  //   return <Navigate to="/" />
  // }

  return (
    <Routes>
      {/* <Route
          path="/"
          element={
            <PrivateRoute>
              <Login />
            </PrivateRoute>
          }/> */}
      
          <Route path="/" element={<Login />} />
      <Route path="/search" element={<Search />} />
    </Routes>
  );
}
// import {
//   Route,
//   Redirect, BrowserRouter, useAuth
// } from 'react-router-dom';
// import Login from "./components/Login";
// import Search from "./components/Search";

// function PrivateRoute({ children, ...rest }) {
//   let auth = useAuth();
//   return (
//     <Route
//       {...rest}
//       render={() => auth
//         ? children
//         : <Redirect to="/login" />
//       }
//     />
//   );
// }

// function App() {
//   return (
//     <BrowserRouter>
//       <Route path="/" element={<Login />}></Route>
//       <PrivateRoute path="/search" element={<Search />} />
//     </BrowserRouter>
//   );
// }

// export default App;