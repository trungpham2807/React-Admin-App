import NavBar from "../src/components/navBar/NavBar"
import SideBar from "./components/sideBar/SideBar"
import HomePage from "../src/pages/homePage/homePage"

import "./App.css"
function App() {
  return (
    <div className="App">
     <NavBar />
     <div className="container">
       <SideBar />
       <HomePage />
     </div>
     
    </div>
  );
}

export default App;
