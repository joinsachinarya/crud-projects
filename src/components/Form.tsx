import React from "react";
import { User } from "./HomePage";

interface Props {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
  handleAddUser: () => void;
}

const Form: React.FC<Props> = ({ user, setUser, handleAddUser }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div className="float-left w-1/3 m-10 p-5">
      <div>
        <input
          name="name"
          value={user.name}
          onChange={handleChange}
          placeholder="Enter name"
        />
        <br />
        <input
          name="age"
          value={user.age === 0 ? "" : user.age}
          onChange={handleChange}
          placeholder="Enter age"
        />
        <br />
        <input
          name="email"
          value={user.email}
          onChange={handleChange}
          placeholder="Enter email"
        />
        <br />
      </div>

      {!user.id ? (
        <button onClick={handleAddUser}>Add</button>
      ) : (
        <button onClick={handleAddUser}>Update</button>
      )}
    </div>
  );
};

export default Form;
