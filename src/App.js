import React, { useState } from "react";

import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
import Demo from "./components/demo";
import HocCounter from "./components/HOC/HOC-Counter";
import MouseHoverCounter from "./components/HOC/MouseHoverCount";
import ClickCounter from "./components/HOC/ClickCounter";
const UpdatedClickCounter = HocCounter(ClickCounter);
const UpdatedHoverCounter = HocCounter(MouseHoverCounter);
function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge, ucollege) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        {
          name: uName,
          age: uAge,
          collegename: ucollege,
          id: Math.random().toString(),
        },
      ];
    });
  };

  return (
    <React.Fragment>
      <AddUser onAddUser={addUserHandler} />

      <UsersList users={usersList} />
      {/* <Demo></Demo> */}
      <UpdatedClickCounter />
      <UpdatedHoverCounter />
    </React.Fragment>
  );
}

export default App;
