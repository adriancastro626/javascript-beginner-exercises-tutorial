let total = prompt('How many km are left to go?');
let convert = parseInt(total);

// Your code below:

function distance(a) {
let result;
    if (a > 100) {
        result = "Are we there yet?";
    }
    else if (convert > 50) {
        result = "Well be there in 5 minutes";
    }
    else if (convert < 50) {
        result = "Im parking, I see you right now";
    }
    return result;
};

console.log(distance(convert))



