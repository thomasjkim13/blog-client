import Navbar from "./components/Navbar/Navbar"
import Home from "./components/Links/Home/Homepage"
import Publish from "./components/Links/Publish/Publish"
import AccountSettings from "./components/AccountSettings/AccountSettings"
import SignIn from "./components/SignIn/SignIn"
import SignUp from "./components/SignUp/SignUp"
import PostShow from "./components/Show/Show"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  const user = false;
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/"><Home /></Route>
        {/* take user to signup page */}
        <Route path="/signup">{user ? <Home /> :<SignUp />}</Route>
        {/* take user to signin page */}
        <Route path="/signin">{user ? <Home /> :<SignIn />}</Route>
        {/* if user is not signed in, take them to the signUp page */}
        <Route path="/publish">{user ? <Publish /> :<SignUp />}</Route>
        {/* if user exist, take them to settings, if not, signup page */}
        <Route path="/accountsettings">{user ? <AccountSettings /> :<SignUp />}</Route>
        <Route path="/post/:postId">
          <PostShow />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
