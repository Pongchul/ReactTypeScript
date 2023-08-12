import { useState } from "react";

export default function Login() {
  const [user, setUser] = useState({
    id: 1,
    name: "pongchul",
    email: "asdfg12@google.com",
    level: 10, // There are 1 to 10 and 1 is the best.
    gender: "MALE",
    age: 29,
    address: "",
  });

  const edit = () => {
    setUser({ ...user, name: "poooongchul" });
  };

  const login = () => {};

  return (
    <div>
      <div>id: {user.id}</div>
      <div>name: {user.name}</div>
      <div>email: {user.email}</div>
      <div>level: {user.level}</div>
      <div>gender: {user.gender}</div>
      <div>age: {user.age}</div>

      {user.age >= 30 ? (
        <div style={{ backgroundColor: "blue" }}> age: {user.age}</div>
      ) : (
        <div style={{ backgroundColor: "black" }}> age : {user.age}</div>
      )}
      <button onClick={() => edit()}> 수정 </button>
    </div>
  );
}
