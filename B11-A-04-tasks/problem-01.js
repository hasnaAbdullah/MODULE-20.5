function calculateVAT(price) {
  // input validation
  if (typeof price !== "number" || price <= 0) {
    return "Invalid";
  }
  let rate = 7.5 / 100;
  let VAT = price * rate;
  return VAT;
}
