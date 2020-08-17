import React, { useEffect, useState } from "react";
import "materialize-css";
import FormValues from "./components/FormValues";
import CalcBox from "./components/CalcBox";

function App() {
  const [calValues, setCalValues] = useState({});
  const handleChangeForm = (currentValues) => {
    return setCalValues(currentValues);
  };
  return (
    <div className="container">
      <h1 className="center">React - Juros Compostos</h1>
      <FormValues onFormChange={handleChangeForm} />
      <CalcBox calcValues={calValues} />
    </div>
  );
}

export default App;
