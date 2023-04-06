import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from '../components/Header.js'
import EmployeeList from '../components/EmployeeList'
import EmployeeForm from '../components/EmployeeForm.js'

function AppRouter() {
  return (
    <div>
        <Header />
        <div>
            <Routes>
                <Route path="/" element={<EmployeeList />}></Route>
                <Route path="/add" element={<EmployeeForm />}></Route>
                <Route path="/edit/:id" element={<EmployeeForm />} />
            </Routes>
        </div>
    </div>
  )
}

export default AppRouter