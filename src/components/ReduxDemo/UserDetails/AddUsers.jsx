import ComponentWrapper from "../../ComponentWrapper/ComponentWrapper";
import { generateRandomId, getNewName } from "../../../services/common";
import { addUser } from "../../../store/actions/usersActions";
import { useDispatch } from "react-redux";

const AddUsers = () => {
  const dispatch = useDispatch();
  return (
    <ComponentWrapper label={"Add User"}>
      <button
        onClick={() => {
          dispatch(
            addUser({
              id: generateRandomId(),
              name: getNewName(),
            })
          );
        }}
      >
        Add User
      </button>
    </ComponentWrapper>
  );
};
export default AddUsers;
