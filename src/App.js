import './App.css';
import Home from './components/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import MakeAppointment from './components/MakeAppointment/MakeAppointment/MakeAppointment';
import { createContext, useState } from "react";
import Login from './components/Login/Login/Login';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import Prescriptions from './components/Dashboard/Prescriptions/Prescriptions';
import Appointments from './components/Dashboard/Appointments/Appointments';
import AllPatients from './components/Dashboard/AllPatients/AllPatients';
import AddDoctor from './components/Dashboard/AddDoctor/AddDoctor';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import NotFound from './components/Notfound/NotFound';
import Contact from './components/Home/Contact/Contact';
import Services from './components/Home/Services/Services';
import Navbar from './components/Shared/Navbar/Navbar';
import Footer from './components/Shared/Footer/Footer';
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
            <PrivateRoute path="/makeAppointment">
               <MakeAppointment></MakeAppointment>
            </PrivateRoute>
            <Route path="/dashboard">
               <Dashboard></Dashboard>
            </Route>
             <Route path="/allPatients">
               <AllPatients></AllPatients>
            </Route>
            <Route path="/contact">
               <Navbar></Navbar>
               <Contact></Contact>
               <Footer></Footer>
            </Route>
            <Route path="/dentalServices">
              <div className="pb-5">
                  <Navbar></Navbar>
              </div>
               <Services></Services>
               <Footer></Footer>
            </Route>
            <Route path="/home">
               <Home></Home>
            </Route>
             <Route path="/prescriptions">
               <Prescriptions></Prescriptions>
            </Route>
             <PrivateRoute path="/appointments">
               <Appointments></Appointments>
            </PrivateRoute>
             <Route path="/addDoctor">
               <AddDoctor></AddDoctor>
            </Route>
             <Route path="*">
               <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
     </UserContext.Provider>
  );
}

export default App;
