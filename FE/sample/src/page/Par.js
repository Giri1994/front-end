import React, { useState } from "react";
import C from "./C";

const Par =()=>{
const [message,setMessage] =useState("");

const handleMesage= (message) =>{
    setMessage(message);
};

return(
    <div>
        <p>Message from child {message}</p>
        <C sendMessage={handleMesage}/>
    </div>
);
}

export default Par;