import './App.css'

import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'

function App() {


  return (

    
      <section className="app">
       <Sidebar></Sidebar>
       <section className="main-content">
       <Navbar></Navbar>
       <Dashboard />
       </section>
      </section>

    

  )
}

export default App
