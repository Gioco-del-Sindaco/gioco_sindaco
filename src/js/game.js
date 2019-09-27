//const urlParams = new URLSearchParams(window.location.search);
//const language = urlParams.get('language');

var rangeslider = document.getElementById("sliderRange");
var output = document.getElementById("demo");
output.innerHTML = rangeslider.value;

rangeslider.oninput = function() {
  output.innerHTML = this.value;
};

//var output = document.getElementById("numGruppi");

//setTitle();
//displayText();
//generateForms();
