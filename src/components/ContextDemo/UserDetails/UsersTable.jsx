import { useContext } from "react";
import ComponentWrapper from "../../ComponentWrapper/ComponentWrapper";
import { UsersContext } from "../../../contexts/UsersProvider";
import ThemeButton from "./ThemeButton";

const UsersTable = () => {
  const { users } = useContext(UsersContext);
  console.log("***************UsersTable rerendering...", users);
  return (
    <ComponentWrapper label={`User Table Section`}>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <ThemeButton />
    </ComponentWrapper>
  );
};
export default UsersTable;
