import React from "react";

const UserNames = ({ userNames, addUser }) => {
  console.log("***************UserNames rerendering...");
  return (
    <div>
      <button onClick={addUser}>Add User</button>
      <div>Users Names: {userNames}</div>
    </div>
  );
};
// const Users = React.memo(UserNames);
export default UserNames;
