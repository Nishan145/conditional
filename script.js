// if (1>0){
//     console.log("1 is greater than 0")
// }


//this will not work because the age is lower than legal
// let age = 10;
// let legalDrivingAge = 17;

// if (age > legalDrivingAge)
// {
//     console.log("You can drive!")
// }

let isRoadLegal = false; 
const age = 18;
const legalDrivingAge = 17;

if (age > legalDrivingAge){
    isRoadLegal = true;
}
console.log("Am I road Legal?", isRoadLegal);

