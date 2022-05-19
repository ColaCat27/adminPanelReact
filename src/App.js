import './App.css';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import List from './pages/list/List';
import Single from './pages/single/Single';
import New from './pages/new/New';
import './style/dark.scss';
import { useContext } from 'react';
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import { userColumns, productColumns } from './datatablesource';
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
                    <Route path="/">
                        <Route path="login" element={<Login />} />
                        <Route
                            index
                            element={
                                <ProtectedRoute>
                                    <Home />
                                </ProtectedRoute>
                            }
                        />
                        <Route path="users">
                            <Route
                                index
                                element={
                                    <ProtectedRoute>
                                        <List columns={userColumns} />
                                    </ProtectedRoute>
                                }
                            />
                            <Route
                                path=":userId"
                                element={
                                    <ProtectedRoute>
                                        <Single />
                                    </ProtectedRoute>
                                }
                            />
                            <Route
                                path="new"
                                element={
                                    <ProtectedRoute>
                                        <New
                                            inputs={userInputs}
                                            title="Add new user"
                                        />
                                    </ProtectedRoute>
                                }
                            />
                        </Route>
                        <Route path="products">
                            <Route
                                index
                                element={
                                    <ProtectedRoute>
                                        <List columns={productColumns} />
                                    </ProtectedRoute>
                                }
                            />
                            <Route
                                path=":userId"
                                element={
                                    <ProtectedRoute>
                                        <Single />
                                    </ProtectedRoute>
                                }
                            />
                            <Route
                                path="new"
                                element={
                                    <ProtectedRoute>
                                        <New
                                            inputs={productInputs}
                                            title="Add new product"
                                        />
                                    </ProtectedRoute>
                                }
                            />
                        </Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
