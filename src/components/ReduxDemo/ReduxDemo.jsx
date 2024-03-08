import { Provider } from "react-redux";
import AddUsers from "./UserDetails/AddUsers";
import UserDetails from "./UserDetails/UserDetails";
import store from "../../store/store";

const ReduxDemo = () => {
  console.log("***************ReduxDemo rerendering...");
  return (
    <Provider store={store}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 10,
        }}
      >
        <AddUsers />
        <UserDetails />
      </div>
    </Provider>
  );
};
// const Users = React.memo(UserNames);
export default ReduxDemo;
