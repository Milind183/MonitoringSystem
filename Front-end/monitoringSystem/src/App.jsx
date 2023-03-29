import './App.css'
import AddNotice from './component/AddNotice'
import Navbar from './component/Navbar.jsx'
import Notice from './component/Notice.jsx'
import OnGoing from './component/ongoing'
import ToDoList from './component/ToDoList'

function App() {
  return (
    <div>
      <Navbar/>
      <Notice/>
      <ToDoList/>
      <AddNotice/>
      <OnGoing/>
    </div>
  )
}

export default App
