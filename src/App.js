import logo from './logo.svg'
import './App.css'
import { ToastContainer, toast } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'
import Sidebar from './Sidebar'

function App() {
  const notify = () => toast('Wow so easy !')

  return (
    <div className="flex justify-center">
      <Sidebar />
      <h1>Dumb header test</h1>
      <button onClick={notify} style={{ backgroundColor: 'red' }}>
        Notify !
      </button>
      <ToastContainer />
    </div>
  )
}

export default App
