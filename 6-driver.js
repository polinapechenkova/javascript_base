
const hasLicence = true; 
const age = 22; 
const isDrunk = false; 
 
const canDrive = hasLicence && age > 18 && !isDrunk; 
console.log(`Может ли пользователь вести машину: ${canDrive ? 'может' : 'не может'}.`);