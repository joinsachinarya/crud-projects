import { User } from "../components/HomePage";
import { action } from "easy-peasy";

export interface State {
  userList: User[];
}

export const state = {
  userList: [],
  addUser: action<State, User>((state, user) => {
    state.userList.unshift(user);
  }),

  deleteUser: action<State, number>((state, userId) => {
    state.userList = state.userList.filter((it: User) => it.id !== userId);
  }),

  updateUser: action<State, User>((state, user) => {
    const updatedUserData = state.userList.map((userList: User) => {
      if (userList.id === user.id) {
        userList = user;
      }
      return userList;
    });
    state.userList = updatedUserData;
  }),
};
