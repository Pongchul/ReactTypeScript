import { proxy, useSnapshot } from "valtio";
import User from "../entity/user/User";
import { useRef } from "react";
import LoginViewModel from "../viewmodel/LoginViewModel";
import { container } from "tsyringe";
import UserRepository from "../repository/UserRepository";

export default function Login() {
  const model = useRef(proxy(new LoginViewModel())).current;
  const state = useSnapshot(model);
  const userRepository = container.resolve(UserRepository);

  const edit = () => {
    userRepository.getUser();
  };

  const login = () => {};

  return (
    <div>
      <p>{state.loading ? "로딩중" : "로딩아님"}</p>
      <div>id: {state.user.id}</div>
      <div>name: {state.user.name}</div>
      <div>email: {state.user.email}</div>
      <div>level: {state.user.level}</div>
      <div>gender: {state.user.gender.title}</div>
      <div>age: {state.user.age}</div>

      <p>{state.user.getAdultLabel()}</p>

      <button onClick={() => edit()}> 수정 </button>
    </div>
  );
}
