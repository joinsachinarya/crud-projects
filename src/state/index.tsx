import { action } from "easy-peasy";
import { User } from "../App";

export interface State {
    userList: User[];
}


export const state = {
    userList: [],


    addUser: action<State, User>((state, user) => {
        state.userList.unshift(user);
    }),

    deleteUser: action<State, number>((state, userId) => {
        state.userList = state.userList.filter((item: User) => item.id !== userId)

    }),

    updateUser: action<State, User>((state, user) => {
        let updatedUserData = state.userList.map((userList: User) => {
            if (userList.id === user.id) {
                userList = user;
            }
            return userList
        })
        state.userList = updatedUserData
    }),
}
export default state;