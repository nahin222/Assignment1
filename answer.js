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