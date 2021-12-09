var voicecheck = window.webkitSpeechRecognition;
var recognition = new voicecheck();

function start(){
    document.getElementById("textbox").innerHTML=" ";
    recognition.start();
}

recognition.onresult =  function(event){
    console.log(event);

    var content= event.results[0][0].transcript;
    
    console.log(content);
    document.getElementById("textbox").innerHTML= content;
    if(content=="take my selfie"){
        speak();
        console.log("taking your selfie");
        
    }
}

function speak(){
    var synth= window.speechSynthesis;

    speak_data= "Taking your selfie in 5 seconds. Smile!";

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    Webcam.attach(camera);

    setTimeout(function(){
    takeSpapshot();
    save();
    }, 5000);
}

camera =document.getElementById("camera");

Webcam.set({
    width: 360,
    height: 250,
    image_format: 'jpeg',
    jpeg_quality: 90
});

function takeSpapshot(){
Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML= "<img id='mySelfie' src='"+ data_uri +"'>";
});
}

function save(){
    link = document.getElementById("link");
    image = document.getElementById("mySelfie").src;
    link.href=image;
    link.click();
}