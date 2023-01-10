import React, { useState } from "react";
import Card from "./Components/Card";
import Form from "./Components/Form";
import "./App.css";

// interface IUser {
//     id?: number;
//     age: number;
//     email: string;
//     name: string;
// }

const CrudComponent: React.FunctionComponent =()=>{
    const [user,setUser] =useState<{name:string, age:string, email:string}>({name:"", age:"", email:""});
    const [uid, setUid] =useState<number>(1);
    const [details, setDetails] = useState<{id:number, user:{name:string,age:string,email:string}}[]>([]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setUser({...user,[e.target.name]:e.target.value});
    }

    const addDetails = ()=>{
        if(Object.values(user).every((value)=> value==="")){
            window.alert("Please enter some details!");
        }else if(details.find((it)=>(it.user.name===user.name && it.user.age===user.age && it.user.email===user.age))){
            window.alert("Details already exist!");
        }else{
            setDetails([{id:uid, user}, ...details]);
            setUid(uid+1);
            setUser({name:"", age:"", email:""});
        }
    };

    const deleteDetails =(id:number)=>{
        if(window.confirm("Are you sure?")){
            setDetails(details.filter((it)=>it.id!==id))
        }
    };

    const editDetails =(id: number)=>{
        const selectedUser = details.find((it)=>it.id===id);
        if(selectedUser){
            setUser(selectedUser.user);
            setDetails(details.filter((it)=>it.id!==id));
        }
    };

    return(
        <div className="App">
            <h1>CRUD APP</h1>
            <Form 
            user={user}
            handleChange={handleChange}
            addDetails={addDetails}
            />
            <Card
            details={details}
            deleteDetails={deleteDetails}
            editDetails={editDetails}
            />
        </div>
    )

};
export default CrudComponent;
