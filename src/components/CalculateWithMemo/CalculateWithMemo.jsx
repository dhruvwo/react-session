import { useCallback, useEffect, useMemo, useState } from "react";
import Counter from "../CounterManager/CounterManager";
import Users from "./Users";
import { generateRandomId, getNewName } from "../../services/common";

export default function CalculateWithMemo() {
  const [counterParent, setCounterParent] = useState(0);
  const [users, setUsers] = useState([
    {
      name: "Initial User",
      id: 1234,
    },
  ]);
  console.log("***************CalculateWithMemo rerendering...");

  useEffect(() => {
    console.log("useEffect => users rerendering", users);
  }, [users]);

  const userNames = useCallback(() => {
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
        name: userName,
        id: userId,
      },
    ]);
  }, []);

  useEffect(() => {
    addUser();
  }, [addUser]);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 15,
      }}
    >
      <Counter
        label={"Counter"}
        setCounter={setCounterParent}
        counter={counterParent}
      />
      <Users addUser={addUser} userNames={userNames} />
    </div>
  );
}
