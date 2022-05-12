import React, { useState } from "react";

const Response = (props) => {
    let userPrompt = props.prompt

    const data = {

    prompt: "Write a poem about a dog wearing skis",
    temperature: 0.5,
    max_tokens: 64,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
   };
    
   fetch("https://api.openai.com/v1/engines/text-curie-001/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer `,
    },
    body: JSON.stringify(data),
   });
   


  return (
      <div>
<div>User said: {userPrompt}</div>
<div>Bot said: </div>
      </div>
    
  )
}

export default Response