function cashOut(money) {
  if (typeof money !== "number" || money <= 0) {
    return "Invalid";
  }
  let charge = (money * 1.75) / 100;
  return charge;
}

// const chargeTotal = cashOut(500);
// console.log(chargeTotal);
