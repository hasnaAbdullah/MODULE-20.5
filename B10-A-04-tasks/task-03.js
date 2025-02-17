/*
step 1: define a function
step 2: take input value
step 3: validated input value
 */
function checkDigitsInName(name) {
    if(typeof name !== 'string') {
        return "Invalid Input";
    }
    let splittedName = name.split('');
    for(const letter of splittedName) {
        if(Number(letter)) {
            return true;
        }
    }
    return false
}