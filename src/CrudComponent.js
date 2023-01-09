import React, { useState } from "react";
import Card from "./componnets/Card";
import Form from "./componnets/Form";
import "./App.css"

function CrudComponent() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [details, setDetails] = useState([]);
  const [uid, setUid] = useState(1);

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleAge = (e) => {
    setAge(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const addDetails = () => {
    name === "" || age === "" || email === ""
      ? window.alert("All fields are required!")
      : details.find((it) => it.name === name && it.age === age && it.email === email)
      ? window.alert("Details already exist!")
      : setDetails([{ id: uid, name, age, email }, ...details]);
    setUid(uid + 1);
    setName("");
    setAge("");
    setEmail("");
  };
  const deleteDetails = (id) => {
    if (window.confirm("Are you sure ?")) {
      const newDetails = details.filter((it) => it.id !== id);
      setDetails(newDetails);
    }
  };
  const editDetails = (id) => {
    const newDetails = details.find((it) => it.id === id);
    setName(newDetails.name);
    setAge(newDetails.age);
    setEmail(newDetails.email);
    setDetails(details.filter((it) => it.id !== id));
  };

  return (
    <div className="App">
      <h1>CRUD APP</h1>
      <Form
        name={name}
        age={age}
        email={email}
        handleName={handleName}
        handleAge={handleAge}
        handleEmail={handleEmail}
        addDetails={addDetails}
      />
      <Card details={details} deleteDetails={deleteDetails} editDetails={editDetails} />
    </div>
  );
}

export default CrudComponent;
