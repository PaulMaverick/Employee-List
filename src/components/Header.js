import React from 'react'
import { Routes, Route, NavLink} from 'react-router-dom';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';

function Header() {
 
  return (
    <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Employee CRUD</Navbar.Brand>

            <Container>
              <NavLink className="link" to="/">Employees</NavLink>
              <NavLink className="link" to="/add">
                <button 
                className='btn btn-secondary'
                >
                  Add Employee
                </button>
              </NavLink>
          </Container>
        </Navbar>
  )
}

export default Header