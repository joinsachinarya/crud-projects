import React from 'react'
import { useStoreState } from "easy-peasy";
import { User } from "../App";
import { State } from "../state/index";


interface Props {
    handleEditUser: (id: number) => void
    handleDeleteUser: (id: number) => void
}


const List: React.FC<Props> = ({ handleDeleteUser, handleEditUser }) => {

    const userList = useStoreState((state: State) => state.userList)



    return (
    <div className='right'>
      <ul>
        {userList.map((it:User) => (
          <li key={it.id}>

            Name:{it.name}  Age:{it.age}  Email:{it.email} <br/>
            <button onClick={() => handleDeleteUser(it.id!)}>Delete</button>  <br/>
            <button onClick={() => handleEditUser(it.id!)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
    )
}

export default List;