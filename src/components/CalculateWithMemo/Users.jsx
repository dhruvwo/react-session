import React from "react";

const UserNames = ({ userNames, addUser }) => {
  console.log("***************11UserNames rerendering...");
  return (
    <div>
      <button onClick={addUser}>Add User</button>
      <div>Users Names: {userNames}</div>
    </div>
  );
};
const Users = React.memo(UserNames, (prev, newVal) => {
  console.log("newVal", { newVal, prev }, newVal.userNames.length);
  return newVal.userNames.length < 30;
});
export default Users;
