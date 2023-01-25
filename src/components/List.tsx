import React from "react";
import { useStoreState } from "easy-peasy";
import { User } from "./HomePage";
import { State } from "../state/state";
import { Link } from "react-router-dom";

interface Props {
  handleEditUser: (id: number) => void;
  handleDeleteUser: (id: number) => void;
}

const List: React.FC<Props> = ({ handleDeleteUser, handleEditUser }) => {
  const userList = useStoreState((state: State) => state.userList);

  return (
    <div className="float-right w-1/3 m-10 p-5">
      <ul>
        {userList.map((it: User) => (
          <li key={it.id}>
            <Link to={"/user/" + it.id}>
              Name:{it.name} Age:{it.age} Email:{it.email} <br />
            </Link>
            <button onClick={() => handleDeleteUser(it.id ?? -1)}>
              Delete
            </button>
            <br />
            <button onClick={() => handleEditUser(it.id ?? -1)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
