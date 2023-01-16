import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleAddUser, handleUpdateUser } from "../actions/action";

export interface IUserInput{
  name:string,
  age:number,
  email:string
  id?:number,
  editUser?:{}
}

const Form : React.FC = () => {
  const dispatch = useDispatch();
  const editingUser = useSelector((state:any)=>state.crudReducer.editUser);
  
  const [inputFields, setInputFields]=useState<IUserInput>({name:"", age:0, email:"", editUser:{}});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputFields({...inputFields, [e.target.name]:e.target.value});
  }

  
  const onAddUser = () => {
    

    if (inputFields.name === "" && inputFields.age === 0  && inputFields.email === "") {
        alert("Please fill the details");
    }
    else {
      dispatch(handleAddUser(inputFields))
      
        setInputFields({
            editUser:{},
            name:"",
            age:0,
            email:"",
        }
        )
    }
  }   
 
  
  useEffect(() => {
    if(editingUser){
      setInputFields(editingUser)
    }},[editingUser])

  return (
    <div className='left'>

      <div>
      <input name="name" value={inputFields.name} onChange={handleChange} placeholder="Enter name" /><br/>
      <input name="age" value={inputFields.age === 0 ? "" : inputFields.age} onChange={handleChange} placeholder="Enter age" /><br/>
      <input name="email" value={inputFields.email} onChange={handleChange} placeholder="Enter email" /><br/>

      </div>
      
      {(editingUser===undefined)? 
      <button onClick={onAddUser}>Add</button>:
      
      <button onClick={()=>{
        dispatch(handleUpdateUser(inputFields));
        setInputFields({
          name:"",
          age:0,
          email:"",
          editUser:{}
        })
      }}>Update</button>}
    </div>
  )
}

export default Form;
