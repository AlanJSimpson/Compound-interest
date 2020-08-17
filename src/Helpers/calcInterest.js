const calculateInterest = (initialValue, monthlyInterest, monthlyPeriod) => {
  const newInstallments = [];

  let currentId = 1;
  let currentValue = initialValue;
  let percentage = 0;

  for (let i = 1; i <= monthlyPeriod; i++) {
    const percentValue = (currentValue * Math.abs(monthlyInterest)) / 100;

    currentValue =
      monthlyInterest >= 0
        ? currentValue + percentValue
        : currentValue - percentValue;

    percentage = (currentValue / initialValue - 1) * 100;

    newInstallments.push({
      id: currentId++,
      value: currentValue,
      difference: currentValue - initialValue,
      percentage,
      profit: monthlyInterest > 0,
    });
  }
};
