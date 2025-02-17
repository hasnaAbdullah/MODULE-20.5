/*function signature/sample */
function validContact(contact) {
  if (typeof contact !== "string") {
    return "Invalid";
  }
  if (contact.length === 11) {
    if (contact.startsWith("01") && !contact.includes(" ")) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}
