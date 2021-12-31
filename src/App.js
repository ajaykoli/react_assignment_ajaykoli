import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import { useSelector } from "react-redux";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Dashboard from "./components/reservations/List";
import PlanJourney from "./components/reservations/Form";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";
import NotFound from "./components/notFound/NotFound";
import Header from './components/header/Header'
import "./App.css";

const history = createBrowserHistory();

function App() {
    const { isLoggedIn } = useSelector(({ auth }) => auth);
    const checkToken = localStorage.getItem('token');
    const token = checkToken !== '' && checkToken !== null;
    const [checkLogIn, setLogIn] = useState(token);
    
    useEffect(() => {
        if(isLoggedIn === true){
            setLogIn(isLoggedIn);
        }
    }, [isLoggedIn])

    const handleLogout = () => {
        localStorage.setItem('token', '');
        setLogIn(false);
    }

    function PrivateRoute ({component: Component, authed, ...rest}) {
        return (
          <Route
            {...rest}
            render={(props) => authed === true
              ? <Component {...props} />
              : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
          />
        )
      }

    return (
        <div className="page-wrapper">
            <ToastContainer autoClose={5000} />
            { checkLogIn && <Header handleLogout={handleLogout} /> }
            <Router history={history}>
                <Switch>
                    <Route
                        path="/"
                        exact
                        component={(props) => <Login {...props} />}
                    />

                    <Route
                        path="/login"
                        exact
                        component={(props) => <Login {...props} />}
                    />

                    <Route
                        path="/register"
                        exact
                        component={(props) => <Register {...props} />}
                    />

                    <Route
                        path="/test"
                        exact
                        component={(props) => (
                            <PlanJourney {...props} />
                        )}
                    />

                    <PrivateRoute authed={checkLogIn} path='/dashboard' component={(props) => ( <Dashboard {...props} /> )} />

                    <Route
                        path="*"
                        component={(props) => <NotFound {...props} />}
                    />

                </Switch>
            </Router>
        </div>
    );
}

export default App;
