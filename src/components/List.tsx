import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { handleEditUser, handleDeleteUser } from "../actions/action";
import { IUserInput } from './Form';

const List: React.FC = () => {
  
  const dispatch = useDispatch();
  const userList = useSelector((state:any)=>state.crudReducer.userList)

  console.log(userList);


  return (
    <div className='right'>
      <ul>
        {userList.map((it: IUserInput) => (
          <li key={it.id}>
            Name:{it.name}   {it.age}   {it.email} <br/>
            <button onClick={() => dispatch(handleDeleteUser(it.id!))}>Delete</button>  <br/>
            <button onClick={() => dispatch(handleEditUser(it.id!))}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default List;
