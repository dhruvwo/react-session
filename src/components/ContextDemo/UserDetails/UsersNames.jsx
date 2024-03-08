import { useCallback, useContext } from "react";
import ComponentWrapper from "../../ComponentWrapper/ComponentWrapper";
import { UsersContext } from "../../../contexts/UsersProvider";
import { ThemeContext } from "../../../contexts/ThemeProvider";

const UsersNames = () => {
  const { users } = useContext(UsersContext);
  const { theme } = useContext(ThemeContext);
  console.log("***************UsersNames rerendering...", users, theme);
  const getUserNames = useCallback(() => {
    return users.map((user) => user.name).join(",");
  }, [users]);
  return <ComponentWrapper label={`Name`}>{getUserNames()}</ComponentWrapper>;
};
export default UsersNames;
