var input1 = document.querySelector(".color1");
var input2 = document.querySelector(".color2");
var h3 = document.querySelector("h3");
var body = document.getElementById("bdy");
//body.style.background="red";
//console.log(h3);
//console.log(input1);
//console.log(input2);

function setGradient() {
  body.style.background =
    "linear-gradient(to right, " + input1.value + "," + input2.value + ")";

  h3.textContent = body.style.background;
}
//we also can add this function as input property e.g., onClick="setGradient()" but for seperation of concern, we dont do that.

//console.log(input1.value);
input1.addEventListener("input", setGradient);
input2.addEventListener("input", setGradient);
// we dont need to call second parameter(function here) by using (). It will automatically gets run with the event 'input'.
