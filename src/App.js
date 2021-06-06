import Navbar from "./components/Navbar/Navbar"
import Home from "./components/Links/Home/Homepage"
import Publish from "./components/Links/Publish/Publish"
import AccountSettings from "./components/AccountSettings/AccountSettings"
import SignIn from "./components/SignIn/SignIn"
import PostShow from "./components/Show/Show"


function App() {
  return (
    <div>
      <Navbar />
      <SignIn />
    </div>
  );
}

export default App;
