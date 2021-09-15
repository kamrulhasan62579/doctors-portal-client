import './App.css';
import Home from './components/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import MakeAppointment from './components/MakeAppointment/MakeAppointment/MakeAppointment';
import BookingModal from './components/MakeAppointment/BookingModal/BookingModal';
import { createContext, useContext, useState } from "react";
import Login from './components/Login/Login/Login';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import Prescriptions from './components/Dashboard/Prescriptions/Prescriptions';
// import Patients from './components/Dashboard/Patients/Patients';
import Appointments from './components/Dashboard/Appointments/Appointments';
import Settings from './components/Dashboard/Settings/Settings';
import AllPatients from './components/Dashboard/AllPatients/AllPatients';
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <Switch>
            <Route exact path="/">
               <Home></Home>
            </Route>
            <Route path="/login">
               <Login></Login>
            </Route>
            <Route path="/makeAppointment">
               <MakeAppointment></MakeAppointment>
            </Route>
            <Route path="/dashboard">
               <Dashboard></Dashboard>
            </Route>
             <Route path="/allPatients">
               <AllPatients></AllPatients>
            </Route>
             <Route path="/prescriptions">
               <Prescriptions></Prescriptions>
            </Route>
             <Route path="/appointments">
               <Appointments></Appointments>
            </Route>
             <Route path="/setting">
               <Settings></Settings>
            </Route>
          </Switch>
        </Router>
     </UserContext.Provider>
  );
}

export default App;
