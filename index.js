// Code your solution in this file!
 
const allDrivers = (['Antonia', 'Nuru', 'Amari', 'Mo'])

const returnFirstTwoDrivers = (allDrivers) => {
    return allDrivers.slice(0, 2);   
}
returnFirstTwoDrivers(allDrivers)

const returnLastTwoDrivers = (allDrivers) => {
    return allDrivers.slice(2,4);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(interger){
    return function(fare){
        return fare * interger
    }
}

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(allDrivers, returnDrivers){
    return returnDrivers(allDrivers)
}
