import React, { useState } from "react";
import List from "./List";
import Form from "./Form";
import { useStoreActions, useStoreState } from "easy-peasy";
import { State } from "../state/state";

export interface User {
  name: string;
  age: number;
  email: string;
  id?: number;
}

interface UserActions {
  addUser: (user: User) => void;
  deleteUser: (userId: number) => void;
  updateUser: (user: User) => void;
}

const App: React.FC = () => {
  const [user, setUser] = useState<User>({
    name: "",
    age: 0,
    email: "",
  });

  const { addUser, deleteUser, updateUser } = useStoreActions(
    (actions: UserActions) => actions
  );
  const userList = useStoreState((state: State) => state.userList);
  console.log(userList);

  const handleAddUser = () => {
    if (user.name === "" && user.age === 0 && user.email === "") {
      alert("Please enter some details!");
    } else if (user.id) {
      updateUser(user);
      setUser({
        name: "",
        age: 0,
        email: "",
      });
    } else {
      addUser({ ...user, id: Date.now() });
      setUser({
        name: "",
        age: 0,
        email: "",
      });
      console.log(user);
    }
  };

  const handleDeleteUser = (id: number) => {
    deleteUser(id);
  };

  const handleEditUser = (id: number) => {
    const updatedUserData = userList.find((it: User) => {
      return it.id === id;
    });
    if (updatedUserData) setUser(updatedUserData);
  };

  const ListProps = {
    handleEditUser,
    handleDeleteUser,
  };

  const FormProps = {
    user,
    handleAddUser,
    setUser,
  };

  return (
    <div>
      <h2 className="text-center text-2xl text-sky-500">CRUD APP</h2>

      <List {...ListProps} />
      <Form {...FormProps} />
    </div>
  );
};

export default App;
