const express = require('express');
const axios = require('axios');
const router = new express.Router();

// Router parse message and send to page according to value stored in button
router.route('/process/pageSelect').post((req, res) => {
    console.log("/process/pageSelected Router Called");
    var paramValue = req.body.page || req.query.page // Post Method || Get Method
    switch(paramValue){
        case 'BMI Calculator':
            res.redirect('../bmi.html');
            break;
        case 'Unit Convertor':
            res.redirect('../unit.html');
            break;
        case 'Simple Calculator':
            res.redirect('../simple.html');
            break;
        case 'Currency Converter' :
            res.redirect('../currency.html');
            break;
    }
});

// Router for Simple Calculation
router.route('/process/simple').post((req, res) => {
    console.log('/process/simple Router Called');
    var num1 = req.body.num1;
    var operation = req.body.operation;
    var num2 = req.body.num2;
    var result;
    switch(operation){
        case "+":
            result = Calc.add(num1, num2);
            break;
        case "-":
            result = Calc.sub(num1, num2);
            break;
        case "*":
            result = Calc.mul(num1, num2);
            break;
        case "/":
            result = Calc.div(num1, num2);
            break;
    }
    res.send(result);
});


// Router for BMI Calculation
router.route('/process/bmi').post((req, res) => {
    console.log('process/bmi Router Called');
    var weight = req.body.weight;
    var height = req.body.height;

    var result = Calc.bmi(weight, height);
    var resultString = `BMI = ${result}`

    res.send(resultString);
});

router.route('/process/unit').post((req, res) => {
    console.log('/process/unit Router Called');
});

module.exports= router;