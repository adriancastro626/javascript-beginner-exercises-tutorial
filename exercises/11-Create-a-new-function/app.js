/* This exercise is almost identical to 15-Random numbers - consider merging them here and using another concept for 15? */

// Declare your function here

function generateRandom(a) {

     return Math.floor((Math.random() * a) + 1);
    
}

console.log(generateRandom(9));