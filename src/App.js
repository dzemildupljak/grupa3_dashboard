import logo from "./logo.svg";
import "./App.css";
import Card from "./Components/customCard/Card";

function App() {
  const notify = () => toast('Wow so easy !')

  return (
    <div className="flex justify-center">
      <Sidebar />
      <h1>Dumb header test</h1>
      <Card></Card>
    </div>
  )
}

export default App
