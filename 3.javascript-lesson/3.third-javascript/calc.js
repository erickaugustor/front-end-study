
var num1 = document.getElementById('num1');
var num2 = document.getElementById('num2');
var resultField = document.getElementById('result');

var form = document.getElementById('xIsWhatPercentOfy')


//resultField.innerText = "Hi";
//num1.value = "Hey";


form.addEventListener('submit', function(event){
    //alert("click");
    if(!num1.value || !num2.value){
        alert("Coloque dados nos campos!");
    }else{
        var x = parseFloat(num1.value);
        var y = parseFloat(num2.value);

        var result = x / y;
        var percent = result * 100;
        
        resultField.innerText = "Answer: " + percent + "%!";
        event.preventDefault();
    }
});

