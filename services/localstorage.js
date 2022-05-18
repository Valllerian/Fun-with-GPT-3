export const loadState = () => {
    try {
      const allResponses = localStorage.getItem('responses');
      if (allResponses === null) {
        return undefined;
      }
      const responseList = JSON.parse(allResponses);
      return { responseList, error: '' };
    } catch (err) {
      return undefined;
    }
  };
  
  export const saveAllResponses = (allResponses) => {
    try {
      const allResponsesStringified = JSON.stringify(allResponses.responseList);
      localStorage.setItem('responses', allResponsesStringified);
    } catch (err) {
      // ignore write errors
    }
  };