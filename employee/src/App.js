import './App.css';
import React, { createContext, useReducer, useContext } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home';
import Header from './Components/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Employee from './Components/Employee';
import { initialState, reducer } from "./reducer";
import Login from './Components/Login';
import Logout from './Components/Logout';

export const UserContext = createContext();

export const Routing = () => {
  const { state, dispatch } = useContext(UserContext);
  if (state) {
    return (
      <>
        <Header />
        <Route exact path="/">
          <Home />
        </Route>
        <Switch>
          <Route path="/employeedetails">
            <Employee />
          </Route>
          <Route path="/logout">
            <Logout />
          </Route>
        </Switch>
      </>
    )
  }
  else {
    return (
      <Login />
    )
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="App">
      <UserContext.Provider value={{ state, dispatch }}>
        <BrowserRouter>
          <Routing />
        </BrowserRouter>
      </UserContext.Provider>

    </div>
  );
}

export default App;
