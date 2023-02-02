import React from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Employee from '../Employee';
import {useNavigate,Link} from 'react-router-dom'

function Home() {

  const navigate = useNavigate();

  const handleDelete = (empId)=>{
    let index = Employee.map((item)=>item.empId).indexOf(empId)
    Employee.splice(index,1)
    navigate('/');
  }

  const handleEdit = (empId,empName,empDesg,empSalary)=>{
    localStorage.setItem("empId",empId)
    localStorage.setItem("empName",empName)
    localStorage.setItem("empDesg",empDesg)
    localStorage.setItem("empSalary",empSalary)

  }
  return (
    <>
    <h1 className='text-center text-primary my-5 '>List Of Employees &nbsp;
    <Link to={'/add'}><Button><i class="fa-solid fa-user-plus"></i>Add</Button></Link>
    </h1>
<div style={{margin:"8rem"}} >
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Employee Name</th>
              <th>Employee Designation</th>
              <th>Employee Salary</th>
              <th>Actions</th>

            </tr>
          </thead>
          <tbody>
            {
              Employee && Employee.length>0 ?
              Employee.map((item)=>(
              <tr>
              <td>{item.empName}</td>
              <td>{item.empDesg}</td>
              <td>{item.empSalary}</td>
              <td>
              &nbsp;&nbsp;<Link to={'/update'}>
                <Button onClick={()=>handleEdit(item.empId,item.empName,item.empDesg,item.empSalary)}><i class="fa-solid fa-user-pen"></i></Button>
                </Link> &nbsp;
              <Button onClick={()=>handleDelete(item.empId)}><i class="fa-solid fa-trash"></i></Button>
              </td>
            </tr>
              ))
              : "No data to display"
            }
          </tbody>
        </Table>

</div> 
 </>
  )
}

export default Home