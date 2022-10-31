import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Users from "./pages/users/Users";
import Profile from "./pages/profile/Profile";
import Data from "./pages/data/Data";
import New from "./pages/new/New";
import Talk from "./pages/talk/Talk";

import "./style/dark.scss";
import { userInputs } from "./formSource";
import { DarkModeContext } from "./context/darkModeContext";
import { useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import { useUserAuth } from "./context/UserAuthContext";
import ProtectedRoute from "./context/ProtectedRoute";
import "./style/style.scss";
function App() {
  const { darkMode } = useContext(DarkModeContext);

  // const RequireAuth = ({ children}) => {
  //   const { user } = useUserAuth();
  //   console.log("Check user in Private: ", user);
  //   if (!user) {
  //     return <Navigate to="/login" />;
  //   }
  //   return children;
  // };

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/">
          <Route
            index
            element={
              <ProtectedRoute>
                <Talk/>
              </ProtectedRoute>
            }
          />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route> */}
          <Route path="/">
            <Route
              index
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route
                index
                element={
                  <ProtectedRoute>
                    <Users />
                  </ProtectedRoute>
                }
              />
              <Route path="test">
                <Route
                  index
                  element={
                    <ProtectedRoute>
                      <Profile />
                    </ProtectedRoute>
                  }
                />
              </Route>
              <Route
                path="data"
                element={
                  <ProtectedRoute>
                    <Data />
                  </ProtectedRoute>
                }
              />
              <Route
                path="new"
                element={
                  <ProtectedRoute>
                    <New inputs={userInputs} title="Add New User" />
                  </ProtectedRoute>
                }
              />
            </Route>
            <Route
              path="talk"
            element={
              <ProtectedRoute>
                <Talk/>
              </ProtectedRoute>
            }
          />

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
