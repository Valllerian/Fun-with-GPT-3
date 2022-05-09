import React, { useState } from "react";

const Response = (props) => {
    let userPrompt = props.prompt
  return (
      <div>
<div>User said: {userPrompt}</div>
<div>Bot said: </div>
      </div>
    
  )
}

export default Response