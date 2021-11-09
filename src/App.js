import logo from "./logo.svg";
import "./App.css";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

function App() {
  const notify = () => toast("Wow so easy !");

  return (
    <div className="App">
      <h1>Dumb header test</h1>
      <button onClick={notify} style={{backgroundColor: "red"}}>Notify !</button>
      <ToastContainer />
    </div>
  );
}

export default App;