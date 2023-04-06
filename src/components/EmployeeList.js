import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { getListOfEmployees } from '../services/localstorage';
import EmployeeItem from './EmployeeItem'

function EmployeeList() {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        setEmployees(getListOfEmployees());
    }, [])

  return (
    <Container className="list-container  mt-3 p-2">
        <h3 className='text-center'>List of Employees</h3>

        {
            employees.length > 0 ? (
                <div className='card bg-secondary p-3'>
                    <table className='table table-hober'>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Address</th>
                                <th>Phone</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {employees.map(employee => 
                                <EmployeeItem 
                                    employee={employee} 
                                    key={employee.id}
                                    setEmployees={setEmployees}
                                />)}
                        </tbody>
                    </table>

                </div>
            ) : (
                <h3 className='text-center text-bold'>No Employees</h3>
            )
        }

        
    </Container>
  )
}

export default EmployeeList