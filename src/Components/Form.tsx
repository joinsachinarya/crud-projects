import React from "react";

type FormProps = {
  user:{name:string, age:string, email:string};
  handleChange:(event:React.ChangeEvent<HTMLInputElement>)=>void;
  addDetails:()=>void;
};

function Form({user, handleChange, addDetails}:FormProps){
  return(
    <div className="right-side">
      Name: <input type="text" name="name" value={user.name} onChange={handleChange} placeholder="Enter name"></input><br/>
      Age: <input type="number" name="age" value={user.age} onChange={handleChange} placeholder="Enter age"></input><br/>
      Email: <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter email"></input><br/>
      <button onClick={addDetails}>Add</button>
    </div>
  )
};
export default Form;

