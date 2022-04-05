import React, { useContext } from "react";
import { UserContext } from "../App_backup2";
const Third = () => {
  // Step3: useContext()
  const user = useContext(UserContext);
  return (
    <div>
      Hello {user.name}, age: {user.age}
    </div>
  );
};

export default Third;
