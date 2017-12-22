//functions

function area(length, width){
    return length * width;
}

var area1 = area(10, 15);
console.log(area1);

var area2 = area(15, 12);
console.log(area1);

var rectangleAreas = []
rectangleAreas.push(area(10, 15));
rectangleAreas.push(area(8, 15));
rectangleAreas.push(area(10, 5));
console.log(rectangleAreas);

var bankBalance = 500;
function makeTransaction(priceOfSale, ){
    if(priceOfSale <= bankBalance){
        bankBalance -= priceOfSale;
        console.log("Purchase Successful");
    }else{
        console.log("Insufficient Funds");
    }
}

makeTransaction(79.00);
makeTransaction(2.32);
makeTransaction(10.45);
console.log(bankBalance);