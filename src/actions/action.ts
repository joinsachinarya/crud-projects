import { IUserInput } from "../components/Form";

export interface IAddUserPayload{
    id:number,
    inputData:IUserInput
}
interface IAddUser{
    type:string,
    payload:IAddUserPayload
}

interface IDeleteUser{
    type:string,
    payload:number
}

interface IEditUser{
    type:string,
    payload:number
}

interface IUpdateUser{
    type:string,
    payload:IUserInput
}

export const handleAddUser = (inputData:IUserInput):IAddUser=>{
    return{
        type:"add_user",
        payload:{
            id:Date.now(),
            inputData:inputData
        }
    }
}

export const handleDeleteUser = (id:number)=>{
    console.log(id)
    return{
        type:"delete_user",
        payload:id
    }
}

export const handleEditUser = (id: number)=>{
    return {
        type:"edit_user",
        payload:id
    }
}

export const handleUpdateUser = (inputData:IUserInput):IUpdateUser=>{
    return{
        type:"update_user",
        payload:inputData
    }
}


export type IUserAction = IAddUser | IDeleteUser | IEditUser | IUpdateUser;