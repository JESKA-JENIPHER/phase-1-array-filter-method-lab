// Code your solution here
function findMatching(arrayOfDrivers, stringToMatch)
{   
    const newArrayOfDrivers = arrayOfDrivers.filter(x => x.toUpperCase() === stringToMatch.toUpperCase());

    return newArrayOfDrivers;
}

//const names = ["sally", "sammy", "bobby"];
//debugger;
//const letters = "sa"

function fuzzyMatch(arrayOfDrivers, stringOfLetters){
    const newArray = arrayOfDrivers.filter(x => x[0] + x[1] === stringOfLetters);
    return newArray;
    }

function matchName(arrayOfObjects, stringToMatch){
    //look through array for name object properties
    const newArray = arrayOfObjects.filter(x => x["name"] === stringToMatch);
    return newArray;
    
}
