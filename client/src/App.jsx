import './App.css'

import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'

function App() {


  return (

    
      <section className="app">
       <Sidebar></Sidebar>
       <section className="main-content">
       <Navbar></Navbar>
       </section>
      </section>

    

  )
}

export default App
