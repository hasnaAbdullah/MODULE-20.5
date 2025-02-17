function calculateTax(income, expense) {
  if (!(income >= 0 && expense >= 0 && income >= expense)) {
    return "Invalid Input";
  }

  let difference = income - expense;
  let tax = difference * (20 / 100);
  return tax;
}
