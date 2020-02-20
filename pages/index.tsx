import React, { FC, useContext } from "react";

// Context
import { AppContext } from "../context";

// ==============================================
const Home: FC = () => {
  const { name } = useContext(AppContext);

  return (
    <div>
      <h1>This is the Home</h1>
      <p>{name}</p>
    </div>
  );
};

export default Home;
