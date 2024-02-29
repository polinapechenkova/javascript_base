
const addressLat = 15; 
const addressLong = 30; 
const positionLat = 5; 
const positionLong = 10; 
 
const distance = Math.sqrt(((addressLat - positionLat)**2) + ((addressLong - positionLong)**2)); 
console.log( `Дистанция от объекта равна: ${distance}.`);