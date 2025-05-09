import React, { useState } from "react";

function ProbsDrilling() {
  const [user, setUser] = useState("Tamil");

  return (
    <>
      <h1> {`Hello${user}`}</h1>
      <Component2 user={user} />
    </>
  );
}

function Component2({ user }) {
  return (
    <>
      <h1> {`Hello${user}`}</h1>
      <Component3 user={user} />
    </>
  );
}

function Component3({ user }) {
  return (
    <>
      <h1> {`Hello${user}`}</h1>
    </>
  );
}

export default ProbsDrilling;

// import React from 'react';
// import ChildComponent from './ChildComponent';

// const ParentComponent = () => {
//   const greeting = 'Hello from Parent!';

//   return (
//     <div>
//       <ChildComponent greeting={greeting} />
//     </div>
//   );
// };

// export default ParentComponent;

// import React from 'react';

// const ChildComponent = (props) => {
//   return (
//     <div>
//       <p>{props.greeting}</p>
//     </div>
//   );
// };

// export default ChildComponent;



// import React, { useState } from 'react';
// import ChildComponent from './ChildComponent';

// const ParentComponent = () => {
//   const [message, setMessage] = useState('');

//   const handleMessage = (childMessage) => {
//     setMessage(childMessage);
//   };

//   return (
//     <div>
//       <p>Message from Child: {message}</p>
//       <ChildComponent onMessage={handleMessage} />
//     </div>
//   );
// };

// export default ParentComponent;


// import React, { useState } from 'react';
// import ChildComponent from './ChildComponent';

// const ParentComponent = () => {
//   const [message, setMessage] = useState('');

//   const handleMessage = (childMessage) => {
//     setMessage(childMessage);
//   };

//   return (
//     <div>
//       <p>Message from Child: {message}</p>
//       <ChildComponent onMessage={handleMessage} />
//     </div>
//   );
// };

// export default ParentComponent;

