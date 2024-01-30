import { Outlet } from 'react-router-dom'
import './App.css'
import Navber from './components/shared/Navber'
function App() {

  return (
    <div>
      <Navber />
      <Outlet />
    </div>
  )
}

export default App
