import React, { useState, useEffect } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { NavLink, useParams } from 'react-router-dom'
import { useForm } from '../hooks/useForm'
import { addEmployee, getEmployeeById, editEmployee } from '../services/localstorage';


function EmployeeForm() {
    const [showAlert, setShowAlert] = useState(false)
    const { id } = useParams();
    const { inputValues, handleInputChange, resetForm, setForm } = useForm({
        name: '',
        email: '',
        address: '',
        phone: ''
    });

    useEffect(() => {
        if (id) {
            const employee = getEmployeeById(id)
            setForm(employee);
        }
    }, [id])
    
    const handleSubmit = (e) => {
        e.preventDefault();
        id ? editEmployee(id, inputValues) : addEmployee(inputValues)
        setShowAlert(true)
        resetForm();
        setTimeout(() => {
            setShowAlert(false);
        }, 3000);
    }

  return (
    <Container className='mt-3 p-2'>
        <NavLink className='link' to="/">
        <button className='btn btn-outline-secondary'>Back</button>
        </NavLink>
        <div className='my-5 text-center'>
        <h3 className='text-center'>{ id ? "Edit" : "Add"} Employee</h3>
        </div>
        
        
        <Form className='card border-secondary p-5' onSubmit={handleSubmit}>
            <Form.Group className='mb-3' controlId='employeeForm'>
            <Form.Label>Employee Name</Form.Label>
                <Form.Control 
                // id="name"
                name="name"
                value={inputValues.name}
                onChange={handleInputChange}
                type="text" 
                placeholder="Enter Full Name" 
                />
            </Form.Group>

            <Form.Group className='mb-3' controlId='employeeForm'>
            <Form.Label>Email Address</Form.Label>
                <Form.Control 
                // id="email"
                name="email"
                value={inputValues.email}
                onChange={handleInputChange}
                type="email" 
                placeholder="Enter Email Address" 
                />
            </Form.Group>

            <Form.Group className='mb-3' controlId='employeeForm'>
            <Form.Label>Address</Form.Label>
                <Form.Control 
                // id="address"
                name="address"
                value={inputValues.address}
                onChange={handleInputChange}
                type="text" 
                placeholder="Enter Full Address" 
                />
            </Form.Group>

            <Form.Group className='mb-3' controlId='employeeForm'>
            <Form.Label>Phone</Form.Label>
                <Form.Control 
                // id='phone' 
                name="phone"
                value={inputValues.phone}
                onChange={handleInputChange}
                type="text" 
                placeholder="Enter Phone Number" 
                />
            </Form.Group>

            <div className='text-center pt-3'>
            <Button type='submit'>{id ? "Edit" : "Add"} Employee</Button>
            </div>

        </Form>

        {
            showAlert && id && (
                <div className='py-5'>
                    <div className='alert alert-success text-center' role="alert">
                        Success! New information has been saved.
                    </div>
                </div>
            )
        }

        {
            showAlert && (
                <div className='py-5'>
                    <div className='alert alert-success text-center' role="alert">
                        Success! New Employee has been added.
                    </div>
                </div>
            )
        }
    </Container>
  )
}

export default EmployeeForm