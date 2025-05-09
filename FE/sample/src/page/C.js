import React, { useState } from "react";


const C =({sendMessage})=>{
  
    const sendData = () => {
        sendMessage("Hello from Child");
    };


    return(
        <div>
            <button onClick={sendData}></button>
        </div>


    );

}

export  default C;