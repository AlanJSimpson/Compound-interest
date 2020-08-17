import React, { useState } from "react";
import "materialize-css";
import FormValues from "./components/FormValues";
import CalcBox from "./components/CalcBox";

function App() {
  const [mountValue, setMountValue] = useState(100);
  const [interest, setInterest] = useState(0.5);
  const [periods, setPeriods] = useState(1);

  let handleChangeForm = (newValue, newInterest, newPeriod) => {
    if (newValue !== null) return setMountValue(newValue);
    if (newInterest !== null) return setInterest(newInterest);
    if (newPeriod !== null) return setPeriods(newPeriod);
  };

  let calcValuesCur = { mountValue, interest, periods };

  return (
    <div className="container">
      <h1 className="center">React - Juros Compostos</h1>
      <FormValues
        mountInitial={mountValue}
        interestInitial={interest}
        periodInitial={periods}
        onFormChange={handleChangeForm}
      />
      <CalcBox calcValues={calcValuesCur} />
    </div>
  );
}

export default App;
