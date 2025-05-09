import React, { useState, createContext, useContext, useEffect } from "react";

//React Context is a way to manage state globally.
//It can be used together with the useState Hook to share state between deeply nested components more easily than with useState alone.
// State should be held by the highest parent component in the stack that requires access to the state.
//To illustrate, we have many nested components. The component at the top and bottom of the stack need access to the state.
//To do this without Context, we will need to pass the state as "props" through each nested component. This is called "prop drilling".

const UserContext = createContext();
const Usecontexthook = () => {


return(
<div>
    <Component1/>
</div>
);

  }


  function Component1() {
    const [user, setUser] = useState("Giri");

    return (
      <UserContext.Provider value={user}>
        <h1>{`Hello ${user}!`}</h1>
        <Component2/>
      </UserContext.Provider>
    );
  }

  function Component2() {


    return (
        <>
        <h1>Component2</h1>
        <Component3/>
        </>
    );
  }

  function Component3() {
  const user = useContext(UserContext);

    return (
        <>
        <h1>Component2</h1>
       <h2> {`Hello ${user} world`}</h2>
        </>
    );
};

export default Usecontexthook;
