import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home';
import EmployeeList from './Components/EmployeeList';
import Header from './Components/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Employee from './Components/Employee';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <EmployeeList />
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
