function calculateVAT(price) {
  if (typeof price !== "number" || price <= 0) {
    return "Invalid";
  }
  let rate = 7.5 / 100;
  let VAT = price * rate;
  return VAT;
}

function validContact(contact) {
  if (typeof contact !== "string") {
    return "Invalid";
  }

  if (contact.length === 11) {
    if (contact.slice(0, 2) === "01" && !contact.includes(" ")) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

function willSuccess(marks) {
  if (!Array.isArray(marks)) {
    return "Invalid";
  } else {
    for (const mark of marks) {
      if (typeof mark !== "number") {
        return "Invalid";
      }
    }
  }

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

function validProposal(person1, person2) {
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

function calculateSleepTime(times) {
  if (!Array.isArray(times)) {
    return "Invalid";
  } else {
    for (const time of times) {
      if (typeof time !== "number") {
        return "Invalid";
      }
    }
  }

  let sumOfTime = 0;
  for (const time of times) {
    sumOfTime += time;
  }
  let s = sumOfTime % 60;
  let m = sumOfTime / 60;
  let h = m / 60;
  m = m % 60;
  const timeObj = {
    hour: parseInt(h),
    minute: parseInt(m),
    second: parseInt(s),
  };
  return timeObj;
}
