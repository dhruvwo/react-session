import { useContext } from "react";
import ComponentWrapper from "../../ComponentWrapper/ComponentWrapper";
import { UsersContext } from "../../../contexts/UsersProvider";
import { generateRandomId, getNewName } from "../../../services/common";

const AddUsers = () => {
  const { addUser } = useContext(UsersContext);
  console.log("***************AddUsers rerendering...");
  return (
    <ComponentWrapper label={"Add User"}>
      <button
        onClick={() => {
          addUser({
            id: generateRandomId(),
            name: getNewName(),
          });
        }}
      >
        Add User
      </button>
    </ComponentWrapper>
  );
};
export default AddUsers;
