this.car = "Global";

var erickGarage = {
    car: "Funcao",
    getCar: function(){
        return this.car;
    }
};

console.log(erickGarage.getCar());
var guardarCarro = erickGarage.getCar;

console.log(guardarCarro());

//var oCarroReal = guardarCarro.blind(erickGarage);
var oCarroReal = erickGarage.getCar.bind(erickGarage);
console.log(oCarroReal());