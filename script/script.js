function addValue(){
    // get the operands value

    // parse to integer. You can use: parseInt(input, 10);

    // perform operation

    // creating the text output

    // (if you want to check) print out in console

    // change the text area
    var num1=parseInt(document.mycalculator.input_a.value);
    var num2=parseInt(document.mycalculator.input_b.value);
    var num3=num1+num2;

    var text = num1 + " + " + num2 + " = " + num3;
    document.mycalculator.output.value = text;
}


function mulValue(){
    var num1=parseInt(document.mycalculator.input_a.value);
    var num2=parseInt(document.mycalculator.input_b.value);
    var num3=num1*num2;

    var text = num1 + " x " + num2 + " = " + num3;
    document.mycalculator.output.value = text;
}

function divValue(){
    var num1=parseInt(document.mycalculator.input_a.value);
    var num2=parseInt(document.mycalculator.input_b.value);
    var num3=num1/num2;

    var text = num1 + " : " + num2 + " = " + num3;
    document.mycalculator.output.value = text;
}
