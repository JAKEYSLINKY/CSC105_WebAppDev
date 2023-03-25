import "./App.css";
import FavoriteSite from "./components/FavoriteSites";
import Profile from "./components/Profile";
import Gallery from "./components/Gallery";
import StateAssignment1 from "./components/StateAssignmentOne";
import StateAssignment2 from "./components/StateAssignmentTwo";

function App() {
  return (
    <div className="App">
      <FavoriteSite />
      <Profile />
      <Gallery />
      <StateAssignment1 />
      <StateAssignment2 />
    </div>
  );
}
export default App;
