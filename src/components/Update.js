import React,{useState,useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Employee from '../Employee';
import {useNavigate} from 'react-router-dom'


function Update() {
  const [empName,setName] = useState('')
  const [empDesg,setDesg] = useState('')
  const [empSalary,setSalary] = useState(0)
  const [empId,setId] = useState('')


  const navigate = useNavigate()
  const handleUpdate =(event)=>{
    //to prevent auto refresh
    event.preventDefault()
      //find index no of empid tht should updated
  var index = Employee.map((item)=>item.empId).indexOf(empId)
  let emp = Employee[index]
  emp.empId = empId
  emp.empName = empName
  emp.empDesg = empDesg
  emp.empSalary = empSalary
  navigate('/')

  }


  useEffect(()=>{
    setName(localStorage.getItem("empName"))
    setDesg(localStorage.getItem("empDesg"))
    setSalary(JSON.parse(localStorage.getItem("empSalary")))
    setId(localStorage.getItem("empId"))

  },[])

  return (
    <div className='my-5 p-5'>
      <h1 className='text-primary'>Update Employee Details</h1>
      <p >Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

      The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.

It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)</p>

<div className='row'>
  <div className='col-4'>
    <img src='https://toppng.com/public/uploads/thumbnail/new-employee-icon-people-transparent-background-employee-icon-11553428881vm9qeqzxaz.png'></img>
  </div>
<div className='col-8'>
    <Form className='border mt-3 p-5'>

    
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Control type="text" value={empName} placeholder="Enter Employee Name" 
             onChange={(event)=>setName(event.target.value)}

            />
    
          </Form.Group>
    
          <Form.Group className="mb-3" controlId="formBasicDesg">
            <Form.Control type="text" value={empDesg} placeholder="Enter Employee Designation" 
            onChange={(event)=>setDesg(event.target.value)}
            />
    
          </Form.Group>
    
          <Form.Group className="mb-3" controlId="formBasicSalary">
            <Form.Control type="text" value={empSalary} placeholder="Enter Employee Salary"
            onChange={(event)=>setSalary(event.target.value)}
             />
    
          </Form.Group>
    
    
          <Button onClick={(event)=>handleUpdate(event)}  variant="primary" type="submit" >
            Update
          </Button>
        </Form>
</div>
</div>
    </div>
  )
}

export default Update