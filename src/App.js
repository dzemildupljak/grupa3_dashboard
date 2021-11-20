import logo from "./logo.svg";
import "./App.css";
import Cards from "./Components/customCard/Cards";
import Sidebar from "./Components/sidebar/Sidebar"

function App() {

  return (
    <div className="flex justify-center">
      <Sidebar />
      {/* <h1>Dumb header test</h1> */}
      <Cards></Cards>
    </div>
  )
}

export default App;
