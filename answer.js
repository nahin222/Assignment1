//Question 1
function describeValue(value){
    return `${typeof(value)} | ${(value)?"truthy":"falsy"}`;
};


//Question 2
function getDayType(day){
    let date = day.toLowerCase();
    
    switch(date){
        case "friday": 
        case "saturday":
            return "Weekend";
            break;
        case "sunday":
        case "monday":
        case "wednesday":
        case "thursday":
            return "Working Day";
            break;
        default:
            return "Invalid Day";
    }   
};


//Question 3
function validateUsername(usrName){
    if(usrName.length<4)
        return "Too Short";
    else if(usrName.includes(" "))
        return "No Space Allowed";
    else if((usrName.toLowerCase().includes("admin")))
        return "Reserved Word";
    else
        return "Available";
};
//I would add another check to make sure the input is a string cause inputting a number will break this but that is not part of the requirements


//Question 4
