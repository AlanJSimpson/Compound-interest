import React from "react";
import calcInterest from "../Helpers/calcInterest";
import * as formatter from "../Helpers/formatters";

export default function CalcBox({ calcValues }) {
  const { mountValue, interest, periods } = calcValues;

  const classGoodValue = "green-text darken-4";
  const classGoodPercent = "blue-text darken-4";
  const classBadValue = "red-text darken-4";
  const classBadPercent = "deep-orange-text accent-4";

  return (
    <div className="row">
      {calcInterest(mountValue, interest, periods).map((element) => {
        const classValue = element.profit ? classGoodValue : classBadValue;
        const classPercent = element.profit
          ? classGoodPercent
          : classBadPercent;
        return (
          <div className="col s6 m4 l2" key={element.id}>
            <div style={style.flexRow}>
              <span style={{ marginRight: "7px" }}>
                <strong>{element.id}</strong>
              </span>

              <div style={style.flexColumn}>
                <span className={classValue}>
                  {formatter.formatMoney(element.value)}
                </span>
                <span>
                  {formatter.formatMoneyPositiveNegative(element.difference)}
                </span>
                <span className={classPercent}>
                  {formatter.formatPercent(element.percentage)}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

const style = {
  flexRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",

    border: "1px solid lightgray",
    backgroundColor: "#fbf7ec",
    borderRadius: "5px",
    padding: "5px 10px",
    marginBottom: "10px",
  },
  flexColumn: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
};
