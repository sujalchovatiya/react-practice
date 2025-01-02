import { Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Form from './components/Form'
import Layout from './components/Layout'
import Table from './components/Table'
import Dashboard from './components/Dashboard'
import React from 'react'

function App() {
   
const [formData, setFormData] = React.useState([]);
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
            <Route element={<Layout />} >
              <Route path="/dash"  element={<Dashboard />} />
              <Route path="/form" element={<Form formData={formData} setFormData={setFormData} />} />
              <Route path="/table" element={<Table formData={formData} setFormData={setFormData} />} />
            </Route>
        </Routes>

      </div>
    </>

  )
}

export default App
