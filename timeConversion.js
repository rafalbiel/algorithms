let s = "02:01:00PM";
function timeConversion(s) {

    let partOfDay = s.charAt(8);
    let hours = s.substr(0, 2);
    let newHours = hours;

    if (partOfDay === 'P') {
        newHours = parseInt(hours) + 12;
        newHours = newHours.toString();
    }
    if (partOfDay === 'P' && hours === "12") {
        newHours = hours;
        newHours = newHours.toString();
    }
    if (hours === "12" && partOfDay === "A") {
        newHours = parseInt(hours) - 12;
        newHours = "0" + newHours.toString();
    }
    let newTime = s.slice(2, 8);
    newTime = newHours + newTime;
    return newTime;
}
console.log(timeConversion(s));