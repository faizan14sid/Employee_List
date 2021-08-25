import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home';
import Header from './Components/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Employee from './Components/Employee';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Route exact path="/">
          <Home />
        </Route>
        <Switch>
          <Route path="/employeedetails">
            <Employee />
          </Route>
        </Switch>


      </BrowserRouter>
    </div>
  );
}

export default App;
