// import { Routes, Route } from "react-router-dom";
// import Login from "./components/Login";
// import Search from "./components/Search";

// export default function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<Login />}></Route>
//       <Route path="/search" element={<Search />} />
//     </Routes>
//   );
// }
import {
  Route,
  Redirect
} from 'react-router-dom';

function App({ search, isAuthenticated }) {
  return (
    <Route
      render={
        ({ password, email }) => (
          isAuthenticated
            ? (
              search
            ) : (
              <Redirect
                to={{
                  pathname: '/login',
                  state: { from: password, email }
                }}
              />
            ))
      }
    />
  );
}

export default App;