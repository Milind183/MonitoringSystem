import './App.css'
import AddNotice from './component/AddNotice'
import Navbar from './component/Navbar.jsx'
import Notice from './component/Notice.jsx'
import ToDoList from './component/ToDoList'

function App() {
  return (
    <div>
      <Navbar/>
      <Notice/>
      <ToDoList/>
      <AddNotice/>
    </div>
  )
}

export default App
