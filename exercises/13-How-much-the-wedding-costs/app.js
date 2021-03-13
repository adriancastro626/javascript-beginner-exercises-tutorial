let guests = prompt('How many people are coming to your wedding?');
let guests1 = parseInt(guests);

function getPrice(pax){
    let price = 0;
    // Your code here
    if (pax <= 50) {
        price = 4000;
    } 
    else if (pax <= 100) {
        price = 10000;
    }
    else if (pax <= 200) {
        price = 15000;
    }
    else if (pax > 200) {
        price = 20000;
    }

    return price;
}

let price = getPrice(guests1);
console.log('Your wedding will price '+price+' dollars');
