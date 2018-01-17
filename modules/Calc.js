var Calc = {};

var result;

Calc.add = (num1, num2) => {
    if(isNaN(num1) || isNaN(num2)){
        return "Not a Number!";
    }
    result = parseFloat(num1)+parseFloat(num2);
    return num1 + " + " + num2 + " = " + result;
};

Calc.sub = (num1, num2) => {
    if(isNaN(num1) || isNaN(num2)){
        return "Not a Number!";
    }
    result = parseFloat(num1)-parseFloat(num2);
    return num1 + " - " + num2 + " = " + result;
};

Calc.mul = (num1, num2) => {
    if(isNaN(num1) || isNaN(num2)){
        return "Not a Number!";
    }
    result = parseFloat(num1)*parseFloat(num2);
    return num1 + " * " + num2 + " = " + result;
};

Calc.div = (num1, num2) => {
    if(isNaN(num1) || isNaN(num2)){
        return "Not a Number!";
    }
    if(num2 == 0){
        return "It can not divide with 0";
    }else{
        result = parseFloat(num1)/parseFloat(num2);
        return num1 + " / " + num2 + " = " +  result;
    }
}

module.exports = Calc;