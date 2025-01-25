import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import EmployeeList from './components/EmployeeList'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
        <EmployeeList />
        
      <Footer />
    </>
  );
}

export default App;
