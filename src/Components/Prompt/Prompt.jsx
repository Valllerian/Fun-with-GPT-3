import React, { useState } from "react";
import useInputState from "../hooks/useInputState";
import Response from "../Response/Response";

const Prompt = () => {
  // custom hook for inputs:
  const [prompt, updatePrompt, resetPrompt] = useInputState("");

  // storing our prompts:
  const [prompts, setPrompts] = useState([]);
  

  // handling the form here:
  const handleSubmit = (e) => {
    e.preventDefault();
    if (prompt !== "") {
      // console.log(prompt);
      let currentPrompt = prompt;
      setPrompts([...prompts, currentPrompt]);
      resetPrompt("");
    } else {
      alert("Type in a prompt please!");
    }
  };

  return (
    <div>
      {/* Main form for handling users input */}
      <form className="" onSubmit={(e) => handleSubmit(e)}>
        <div className="">
          <label className="">
            Enter Prompt:
            <input
              type="text"
              name="prompt"
              value={prompt.value}
              onChange={(e) => updatePrompt(e)}
              className=""
            />
          </label>
        </div>
      </form>
     
     {/* mapping through all prompts and displaying them on the page */}
      <div>
        {prompts[0] ? (
          <div>
            {" "}
            {/* <h3>Responses:</h3> */}
            {prompts.map((prompt) => {
              return (
                <div key={prompt.value}>
                  {prompt}
                  <div>
                    <Response prompt={prompt} />
                  </div>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Prompt;
