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
function getCngFare(distance, isNight, waitingMinutes){
    let night = false;
    let wait = 0;
    night = isNight;
    wait = waitingMinutes;
    let fare = 0;
    if(distance<=2)
        fare = 50;
    else
        fare = 50+15*(distance-2);

    if(wait>0)
        fare = fare + wait*2;

    if(night)
        return fare*1.2;     
    else
        return fare;
};
//Typechecking at first would have been better but out of scope



//Question 5
const getChaseVerdict = (target, scored, ballsLeft) => {
    let runsNeeded = target-scored;
    let verdict = "";
    if(runsNeeded<=0)
        return "Won";
    else if(ballsLeft<=0)
        return "Lost";
    else
    {
        let requiredRate = (runsNeeded / ballsLeft) * 6;
        if(requiredRate<=6)
            verdict = "Comfortable";
        else if(requiredRate<=12)
            verdict = "Tough";
        else
            verdict = "Almost Impossible";        
    
        return `Need ${runsNeeded} runs in ${ballsLeft} balls | ${verdict}`;

    }

};