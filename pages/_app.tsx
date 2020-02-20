import React, { useState } from "react";
import { AppProps } from "next/app";

// Contexts
import { AppContext } from "../context/";

// ==============================================
const MyApp = ({ Component, pageProps }: AppProps) => {
  const [name, setName] = useState<string>("Next-Test");

  return (
    <AppContext.Provider
      value={{
        name: name,
        setName: setName
      }}
    >
      <Component {...pageProps} />
    </AppContext.Provider>
  );
};

export default MyApp;
