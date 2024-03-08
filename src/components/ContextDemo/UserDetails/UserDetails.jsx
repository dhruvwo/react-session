import React from "react";
import UsersNames from "./UsersNames";
import ComponentWrapper from "../../ComponentWrapper/ComponentWrapper";
import UsersTable from "./UsersTable";

const UserDetails = () => {
  return (
    <ComponentWrapper label={`Table`}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 10,
        }}
      >
        <div>
          <UsersNames />
          <UsersTable />
        </div>
      </div>
    </ComponentWrapper>
  );
};
export default UserDetails;
