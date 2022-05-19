import './App.css';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import List from './pages/list/List';
import Single from './pages/single/Single';
import New from './pages/new/New';
import './style/dark.scss';
import { useContext } from 'react';
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';

import { productInputs, userInputs } from './formSource';
import { DarkModeContext } from './context/darkModeContext';
import { AuthContext } from './context/authContext';

function App() {
    const { darkMode } = useContext(DarkModeContext);

    const ProtectedRoute = ({ children }) => {
        const { user } = useContext(AuthContext);

        if (!user) {
            return <Navigate to="/login" />;
        }
        return children;
    };

    return (
        <div className={darkMode ? 'app dark' : 'app'}>
            <BrowserRouter>
                <Routes>
                    <Route path="login" element={<Login />}></Route>
                    <Route
                        path="/"
                        element={
                            <ProtectedRoute>
                                <Home />
                            </ProtectedRoute>
                        }
                    ></Route>

                    <Route path="users">
                        <Route index element={<List />}></Route>
                        <Route path=":userId" element={<Single />}></Route>
                        <Route
                            path="new"
                            element={
                                <New inputs={userInputs} title="Add new user" />
                            }
                        ></Route>
                    </Route>
                    <Route path="products">
                        <Route index element={<List />}></Route>
                        <Route path=":userId" element={<Single />}></Route>
                        <Route
                            path="new"
                            element={
                                <New
                                    inputs={productInputs}
                                    title="Add new product"
                                />
                            }
                        ></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
