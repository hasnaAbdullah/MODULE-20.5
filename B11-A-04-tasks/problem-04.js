function validProposal(person1, person2) {
  // input validation
  if (typeof person1 !== "object" || typeof person2 !== "object") {
    return "Invalid";
  } else {
    if (Array.isArray(person1) || Array.isArray(person2)) {
      return "Invalid";
    }
  }
  
  let ageDiff = Math.abs(person1.age - person2.age);
  if (ageDiff <= 7 && person1.gender !== person2.gender) {
    return true;
  }
  return false;
}

