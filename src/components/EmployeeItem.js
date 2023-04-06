import React from 'react';
import { NavLink } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { deleteEmployee, getListOfEmployees } from '../services/localstorage';

function EmployeeItem({ employee, setEmployees }) {
  const { id, name, email, address, phone} = employee
  const navigate = useNavigate();

  const removeEmployee = () => {
    deleteEmployee(id);
    setEmployees(getListOfEmployees());
  }

  return (
    <tr>
        <th>{name}</th>
        <th>{email}</th>
        <th>{address}</th>
        <th>{phone}</th>
        <th>
            <div className='d-flex gap-3'>
                <span role="button" className='badge bg-success' onClick={() => navigate(`/edit/${id}`)}>Edit</span>
                <span role="button" className='badge bg-danger' onClick={() => removeEmployee()}>Delete</span>
            </div>
        </th>
    </tr>
  )
}

export default EmployeeItem