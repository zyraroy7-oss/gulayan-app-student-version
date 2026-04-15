import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import AuthenticatedUserLayout from './layout/AuthenticatedUserLayout'
import NotFound from './pages/NotFound'
import Dashboard from './pages/Dashboard'
import Records from './pages/Records'
import Settings from './pages/Settings'

function App() {
  const [currentPage, setCurrentPage] = useState('login')

  return (
    <BrowserRouter>
      <Routes>  
        <Route path="/login" element={<Login onNavigate={setCurrentPage} />} />
        <Route path="/signup" element={<Signup onNavigate={setCurrentPage} />} />
        <Route path="/*" element={<NotFound/>} />

        <Route path="/" element={ <AuthenticatedUserLayout />} >
          <Route path="/" element={<Dashboard />} />
          <Route path="/records" element={<Records />} />
          <Route path="/settings" element={<Settings />} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
