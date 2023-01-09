function Form({ name, age, email, handleName, handleAge, handleEmail, addDetails }) {
    return (
      <div className="right-side">
        Name:{" "}
        <input type="text" value={name} onChange={handleName}></input>
        <br />
        Age: <input type="number" value={age} onChange={handleAge}></input>
        <br />
        Email:{" "}
        <input type="email" value={email} onChange={handleEmail}></input>
        <br />
        <button onClick={addDetails}>Add</button>
      </div>
    );
  }
  export default Form;