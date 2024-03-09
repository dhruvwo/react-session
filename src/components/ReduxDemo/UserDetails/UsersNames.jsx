import { useCallback } from "react";
import ComponentWrapper from "../../ComponentWrapper/ComponentWrapper";
import { useSelector } from "react-redux";

const UsersNames = () => {
  const users = useSelector((state) => state.users.users);
  // const users = useSelector(
  //   (state) => state.users.users,
  //   (prev, next) => {
  //     console.log("prev, next", { prev, next });
  //     if (next.length) {
  //       const lastAdded = next[next.length - 1];
  //       return lastAdded.name.length > 3; // Do NOT rerender if name is longer than 3 characters
  //     }
  //   }
  // );
  console.log("***************UsersNames rerendering...", users);
  const getUserNames = useCallback(() => {
    return users.map((user) => user.name).join(",");
  }, [users]);
  return <ComponentWrapper label={`Name`}>{getUserNames()}</ComponentWrapper>;
};
export default UsersNames;
