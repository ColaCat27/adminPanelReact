import './App.css';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import List from './pages/list/List';
import Single from './pages/single/Single';
import New from './pages/new/New';
import './style/dark.scss';
import { useContext} from 'react';
import {
  Route,
  Routes,
  BrowserRouter
} from "react-router-dom";

import { productInputs, userInputs } from './formSource';
import { DarkModeContext } from './context/darkModeContext';
import { AuthContext } from './context/authContext';

function App() {

  const { darkMode } = useContext(DarkModeContext);
  const { user } = useContext(AuthContext);
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={!user ? <Login/> : <Home/>}></Route>
          <Route path="login" element={!user ? <Login/> : <Home/>}></Route>
          <Route path="users">
            <Route index element={!user ? <Login/> : <List/>}></Route>
            <Route path=":userId" element={!user ? <Login/> : <Single/>}></Route>
            <Route path="new" element={!user ? <Login/> : <New inputs={userInputs} title="Add new user"/>}></Route>
          </Route>
          <Route path="products">
            <Route index element={!user ? <Login/> : <List/>}></Route>
            <Route path=":userId" element={!user ? <Login/> : <Single/>}></Route>
            <Route path="new" element={!user ? <Login/> : <New inputs={productInputs} title="Add new product"/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
