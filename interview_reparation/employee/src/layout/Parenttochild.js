import React from "react";
import { useState } from "react";
import ChildComponent from './ChildComponent';

const Parenttochild = () =>{
const name ='Giri';
const [user, setUser] = useState("Tamil");

return(

<div>
<Component1 user={user}/>
<ChildComponent name={name} />
</div>

);

}


function Component1({user}){

    return(
        <>
        <div>
        <p>My Name is {user}</p>
        </div>
        </>
        );
}



export default Parenttochild;