let currentCalc = "";
let elementsArray = document.querySelectorAll("#num");
let display = document.querySelector("#display");
let decimal = document.querySelector("#decimal");
let plus = document.querySelector("#plus");
let subtract = document.querySelector("#subtract");
let multiply = document.querySelector("#multiply");
let divide = document.querySelector("#divide");
let AC = document.querySelector("#AC");
let equals = document.querySelector("#equals");
let delete_btn = document.querySelector("#delete");

delete_btn.addEventListener("click", function(e){
    currentCalc = currentCalc.substring(0, currentCalc.length - 1)
    display.textContent = currentCalc; })
    
    elementsArray.forEach(function(elem){ elem.addEventListener("click", 
    function(e){(currentCalc = currentCalc + e.target.textContent); display.textContent = currentCalc; })})
    
decimal.addEventListener("click", function(e){ (currentCalc = currentCalc + e.target.textContent); display.textContent = currentCalc; })
plus.addEventListener("click", function(e){ (currentCalc = currentCalc + e.target.textContent); display.textContent = currentCalc; })
subtract.addEventListener("click", function(e){ (currentCalc = currentCalc + e.target.textContent); display.textContent = currentCalc; })
multiply.addEventListener("click", function(e){ (currentCalc = currentCalc + e.target.textContent); display.textContent = currentCalc; })
divide.addEventListener("click", function(e){ (currentCalc = currentCalc + e.target.textContent); display.textContent = currentCalc; })
AC.addEventListener("click", function(e){ currentCalc = ""; display.textContent = currentCalc; })
equals.addEventListener("click", function(e){ (display.textContent = eval(currentCalc)); currentCalc = ""; })