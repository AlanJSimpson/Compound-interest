/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";

export default function FormValues({ onFormChange }) {
  const [mountValue, setMountValue] = useState(100);
  const [interest, setInterest] = useState(0.5);
  const [periods, setPeriods] = useState(1);

  useEffect(() => {
    onFormChange({ mountValue, interest, periods });
  }, [interest, mountValue, periods]);

  const handleMountChange = (event) => {
    setMountValue(event.target.value);
  };

  const handleInterestChange = (event) => {
    setInterest(event.target.value);
  };

  const handlePeriodsChange = (event) => {
    setPeriods(event.target.value);
  };

  return (
    <div className="row">
      <form className="center">
        <div className="col l4">
          <label htmlFor="InitialMount">Montante inicial</label>
          <input
            value={mountValue}
            id="InitialMount"
            type="number"
            step="100"
            min="100"
            onChange={handleMountChange}
          />
        </div>
        <div className="col l4">
          <label>Taxa de juros Mensal</label>
          <input
            value={interest}
            type="number"
            step="0.1"
            min="-12"
            max="12"
            onChange={handleInterestChange}
          />
        </div>
        <div className="col l4">
          <label>Períodos (meses)</label>
          <input
            value={periods}
            type="number"
            min="1"
            onChange={handlePeriodsChange}
          />
        </div>
      </form>
    </div>
  );
}
