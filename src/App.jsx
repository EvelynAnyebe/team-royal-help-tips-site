import StateProvider from "./components/StateProvider";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

// Style import
import "./css/App.css";


// Font awesome import
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";


// Pages
import Notes from "./pages/notespage/Notes";
import UserNote from "./pages/notespage/UserNote";
import Login from "../src/pages/login/login";
import Register from "../src/pages/login/register";
// import loginapp from "./pages/login/loginapp"

library.add(fas);

function App() {
  return (
    <StateProvider>
      <Router>
        <ScrollToTop />
          <Switch>
          {/* <Route exact path="/">
                <loginapp />  
              </Route> */}
              <Route path="/usernote">
                <UserNote />  
              </Route> 
              <Route path="/notes">
                <Notes />  
              </Route>
              <Route path="/login">
                <Login />  
              </Route> 
              <Route exact path="/">
                <Register />  
              </Route> 
          </Switch>
      </Router>
    </StateProvider>
  );
}

export default App;
