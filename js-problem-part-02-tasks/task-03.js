/*
Task-3:
Your task is to calculate the total budget required to buy electronics:
laptop = 35000 tk
tablet = 15000 tk
mobile = 20000 tk
Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.
*/
function calculateElectronicsBudget(quantity1, quantity2, quantity3) {
  const perLaptopPrice = 35000;
  const perTabletPrice = 15000;
  const perMobilePrice = 20000;
  let totalLaptopBudget = perLaptopPrice * quantity1;
  let totalTabletBudget = perTabletPrice * quantity2;
  let totalMobileBudget = perMobilePrice * quantity3;
  let totalBudget = totalLaptopBudget + totalTabletBudget + totalMobileBudget;
  return totalBudget;
}
let laptop = 2;
let tablet = 3;
let mobile = 5;
const totalBudget = calculateElectronicsBudget(laptop, tablet, mobile);
console.log(totalBudget);
