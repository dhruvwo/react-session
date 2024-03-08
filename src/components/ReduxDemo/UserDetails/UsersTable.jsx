import ComponentWrapper from "../../ComponentWrapper/ComponentWrapper";
import { useSelector } from "react-redux";

const UsersTable = () => {
  const users = useSelector((state) => state.users.users);
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
    </ComponentWrapper>
  );
};
export default UsersTable;
