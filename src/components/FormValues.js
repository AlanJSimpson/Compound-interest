/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";

export default function FormValues({
  mountInitial,
  interestInitial,
  periodInitial,
  onFormChange,
}) {
  const handleMountChange = (event) => {
    if (event.target.id === "mountValue") {
      return onFormChange(+event.target.value, null, null);
    }
    if (event.target.id === "interest") {
      return onFormChange(null, +event.target.value, null);
    }
    if (event.target.id === "period") {
      return onFormChange(null, null, +event.target.value);
    }
  };

  return (
    <div className="row">
      <form className="center">
        <div className="col l4">
          <label htmlFor="mountValue">Montante inicial</label>
          <input
            value={mountInitial}
            id="mountValue"
            type="number"
            step="100"
            min="100"
            onChange={handleMountChange}
          />
        </div>
        <div className="col l4">
          <label htmlFor="interest">Taxa de juros Mensal</label>
          <input
            value={interestInitial}
            type="number"
            step="0.1"
            min="-12"
            max="12"
            id="interest"
            onChange={handleMountChange}
          />
        </div>
        <div className="col l4">
          <label htmlFor="period">Períodos (meses)</label>
          <input
            id="period"
            value={periodInitial}
            type="number"
            min="1"
            onChange={handleMountChange}
          />
        </div>
      </form>
    </div>
  );
}
