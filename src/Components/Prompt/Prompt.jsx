import React, { useState } from "react";
import useInputState from "../hooks/useInputState";
import Response from "../Response/Response";

const Prompt = () => {
  // custom hook for inputs:
  const [prompt, updatePrompt, resetPrompt] = useInputState("");

  // storing our prompts and responses:
  const [prompts, setPrompts] = useState([]);
  const [responces, setResponces] = useState([]);

  // handling the form here:
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
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
      <h3>Responses:</h3>
      <div>
        {prompts[0]
          ? prompts.map((prompt) => {
              return (
                <div key={prompt.value}>
                  {prompt.value}
                </div>
              );
            })
          : null}
      </div>
      <div>
        {responces[0]
          ? responces.map((responce) => {
              return (
                <div key={prompt.value}>
                  <Response
                    // use new library for uuid for each key!
                  />
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default Prompt;
