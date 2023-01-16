import { IAddUserPayload, IUserAction } from "../actions/action";
import { IUserInput } from "../components/Form";

export interface IState{
  editUser:IUserInput | undefined,
  userList:IUserInput[]
}

const initialstate = {
  editUser:undefined,
  userList:[]
}

export const crudReducer = (state: IState = initialstate, action:IUserAction) => {
  
    switch (action.type) {

      case "add_user":
        
        const {id, inputData} = action.payload as IAddUserPayload;
        return {
          ...state,
          userList:[...state.userList, {
            id:id,
            name:inputData.name,
            age:inputData.age,
            email:inputData.email
          }]
        }
        
      case "delete_user":
        // console.log(payload)
        const newUserList= state.userList.filter((it:IUserInput)=>it.id!==action.payload);
        console.log(newUserList);
        return {
          ...state,
          userList:newUserList
        }

      case "edit_user":
        const updetedUserData=state.userList.find((it:IUserInput)=>it.id===action.payload);
        return {
          ...state,
          editUser:updetedUserData
        }

      case "update_user":
        const {name, age, email} = action.payload as IUserInput;
        const updetedUserList = state.userList.map((it:IUserInput)=>{
          if(it.id === state.editUser?.id){
            it.id = state.editUser?.id;
            it.name = name;
            it.age = age;
            it.email = email;
          }
          return it;
        })
          return {
            ...state,
            userList:updetedUserList,
            editUser:undefined
        }
          
      default:
          return state;
      }
    }

export default crudReducer;
  