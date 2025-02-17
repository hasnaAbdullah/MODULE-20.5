function sendNotification(email) {
    if(!email.includes('@') ) {
        return "Invalid Input";
    }
    let splittedEmail = email.split('@');
    let userName = splittedEmail[0];
    let domainName = splittedEmail[1];
    let notifyMessage = userName.concat(" sent you an email from ", domainName);
    return notifyMessage;
}
// console.log(sendNotification('farhan34@yahoo.com'))
