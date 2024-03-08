import { UsersProvider } from "../../contexts/UsersProvider";
import AddUsers from "./UserDetails/AddUsers";
import ThemeButton from "./UserDetails/ThemeButton";
import UserDetails from "./UserDetails/UserDetails";

const ContextDemo = () => {
  console.log("***************ContextDemo rerendering...");
  return (
    <UsersProvider>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 10,
        }}
      >
        <AddUsers />
        <UserDetails />
        <ThemeButton />
      </div>
    </UsersProvider>
  );
};
// const Users = React.memo(UserNames);
export default ContextDemo;
