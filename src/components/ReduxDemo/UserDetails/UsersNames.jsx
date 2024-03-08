import { useCallback } from "react";
import ComponentWrapper from "../../ComponentWrapper/ComponentWrapper";
import { useSelector } from "react-redux";

const UsersNames = () => {
  const users = useSelector((state) => state.users.users);
  console.log("***************UsersNames rerendering...");
  const getUserNames = useCallback(() => {
    return users.map((user) => user.name).join(",");
  }, [users]);
  return <ComponentWrapper label={`Name`}>{getUserNames()}</ComponentWrapper>;
};
export default UsersNames;
