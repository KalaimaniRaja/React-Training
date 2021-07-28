import React from "react";

const Users = [
    { id: 1, name: "Leanne Graham" },
    { id: 2, name: "Ervin Howell" },
    { id: 3, name: "Clementine Bauch" },
    { id: 4, name: "Patricia Lebsack" }
  ];

class UserList extends React.Component {
  render() {
    const UserList = Users.map((user) => {
        return <li key={user.id}> {user.name} </li>;
    })

    console.log(this.UserList)
    return <ul>{UserList}</ul>;
  }
}

export default UserList;
