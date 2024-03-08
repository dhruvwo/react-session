import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import UserNames from "../CalculateWithMemo/Users";
import { generateRandomId, getNewName } from "../../services/common";

export default function LifeCycleConcept() {
  console.log("***************LifeCycleConcept rerendering...");
  const myDiv = useRef();
  const [users, setUsers] = useState([
    {
      name: "Initial User",
      id: 123,
    },
  ]);

  useEffect(() => {
    myDiv.current.style.backgroundColor = "red";
    console.log("useEffect => called");
  }, []);

  useLayoutEffect(() => {
    myDiv.current.style.backgroundColor = "green";
    console.log("useLayoutEffect => called");
  }, []);

  useEffect(() => {
    console.log("useEffect => users rerendering", users);
  }, [users]);

  const userNames = useMemo(() => {
    console.log("useMemo => userNames called");
    return users.map((user) => user.name).join(", ");
  }, [users]);

  const addUser = useCallback(() => {
    console.log("useCallback => addUser called");
    const userName = getNewName();
    const userId = generateRandomId();
    setUsers((prev) => [
      ...prev,
      {
        id: userId,
        name: userName,
      },
    ]);
  }, []);

  return (
    <div
      ref={myDiv}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 15,
      }}
    >
      <UserNames addUser={addUser} userNames={userNames} />
    </div>
  );
}
