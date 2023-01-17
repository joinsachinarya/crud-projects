import React, { useState } from 'react'
import List from "./components/List";
import Form from './components/Form';
import "./App.css";
import { useStoreActions } from "easy-peasy";
import { useStoreState } from "easy-peasy";
import { State } from "./state/index";



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



const Homepage: React.FC = () => {

    const [user, setUser] = useState<User>({
        name: '',
        age: 0,
        email: '',
    });

    const { addUser, deleteUser, updateUser } = useStoreActions((actions: UserActions) => actions);
    const userList = useStoreState((state: State) => state.userList)
    console.log(userList)

    const handleAddUser = () => {
        

        if (user.name === '' && user.age === 0 && user.email === '') {
            alert("Please enter some details!");
        }
        else if (user.id) {
            updateUser(user);
            setUser({
                name: '',
                age: 0,
                email: '',
            })
        }
        else {
            addUser({ ...user, id: Date.now() });
            setUser({
                name: '',
                age: 0,
                email: '',
            })
        };
    };


    const handleDeleteUser = (id: number) => {
        deleteUser(id);
    }

    const handleEditUser = (id: number) => {
        const updatedUserData = userList.find((it: User) => {
            return it.id === id;
        })
        if (updatedUserData) setUser(updatedUserData);
    }


    const ListProps = {
        handleEditUser,
        handleDeleteUser
    };

    const FormProps = {
        user,
        handleAddUser,
        setUser
    };


    return (
        <div className='App'>
            <h2>CRUD APP</h2>
            <div>
                <List {...ListProps} />
                <Form {...FormProps} />
            </div >
        </div >

    )
}

export default Homepage