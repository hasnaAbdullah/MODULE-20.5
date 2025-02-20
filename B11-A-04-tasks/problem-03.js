function willSuccess(marks) {
  // input validation
  if (!Array.isArray(marks)) {
    return "Invalid";
  } else {
    for (const mark of marks) {
      if (typeof mark !== "number") {
        return "Invalid";
      }
    }
  }
  // checking that he/she will be able to prepare or not
  let passExam = 0;
  let failExam = 0;
  for (const mark of marks) {
    if (mark >= 50) {
      passExam++;
    } else {
      failExam++;
    }
  }
  if (passExam > failExam) {
    return true;
  }
  return false;
}
