
function validContact(contact) {
  //input validation
  if (typeof contact !== "string") {
    return "Invalid";
  }

  //condition for valid contact number
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
