x = 0;
y = 0;
phantompoopy = "";
var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
function start(){
  document.getElementById("pps").innerHTML = "Ayo dis tingy on";  
  recognition.start();
}
recognition.onresult = function(event) {
    var canvas= createCanvas(900, 600);
 console.log(event); 
 content = event.results[0][0].transcript;
    document.getElementById("pps").innerHTML = "Whadeva u said has been recognised as : " + content; 
}
function setup(){ 
}
function draw(){
  if(phantompoopy == "set")
  {
    document.getElementById("pps").innerHTML = to_number + " Phantompoopies drawn";
    phantompoopy = "";
  }
}
function speak(){
    var synth = window.speechSynthesis;
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    speak_data = "";
}