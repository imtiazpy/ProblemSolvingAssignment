// Solution #1
function seerToMon(seer) {
    // checking if the user passes invalid value
    if (seer < 0) {
        return "Invalid amount!";
    } else if (typeof (seer) == 'string') {
        return "String is not acceptable, pass Number value";
    }
    // Calculation
    const seerPerMon = 40
    const mon = seer / seerPerMon;
    return mon
}


// Solution #2
function totalSales(tshirtSold, pantSold, shoeSold) {
    // checking if the parameters are valid
    if ((tshirtSold < 0) || (typeof (tshirtSold) == 'string')) {
        return "Invalid input";
    }
    if ((pantSold < 0) || (typeof (pantSold) == 'string')) {
        return "Invalid input";
    }
    if ((shoeSold < 0) || (typeof (shoeSold) == 'string')) {
        return "Invalid input";
    }
    // declaring all the items price 
    const tshirtPrice = 100;
    const pantPrice = 200;
    const shoePrice = 500;

    // calculating total sales
    const totalSold = (tshirtSold * tshirtPrice) + (pantSold * pantPrice) + (shoeSold * shoePrice);
    return totalSold;
}


// Solution #3
function deliveryCost(tshirtAmount) {
    // validation 
    if (tshirtAmount < 0 || typeof (tshirtAmount) == 'string') {
        return "Please provide a valid number"
    }

    // costing 
    const first100Cost = 100;
    const second100Cost = 80;
    const bulkCost = 50;

    let totalDeliveryCost;

    // Condition checking
    if (tshirtAmount <= 100) {
        totalDeliveryCost = tshirtAmount * first100Cost;
    } else if (tshirtAmount <= 200) {
        const first100 = 100 * first100Cost;
        const rest = (tshirtAmount - 100) * second100Cost;
        totalDeliveryCost = first100 + rest;
    } else {
        /*first hundred and second hundred got the exact same 100 Number, so we're multiplyig 100 with it's corresponding rate. */
        const first100 = 100 * first100Cost;
        const second100 = 100 * second100Cost;
        const rest = (tshirtAmount - 200) * bulkCost;
        totalDeliveryCost = first100 + second100 + rest;
    }
    return totalDeliveryCost;
}


// Solution #4
function perfectFriend(friendNames) {
    // validation
    if (typeof (friendNames) == 'number' || typeof (friendNames) == 'string') {
        return "please provide valid input."
    }
    // checking condition with each name 
    for (friendName of friendNames) {
        if (friendName.length == 5) {
            return friendName;
        }
    }
}

