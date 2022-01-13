Webcam.set({
    width : '225',
    height : '250',
    image_format : 'jpg',
    jpg_quality : 90
}
)

camera =document.getElementById('camera');
Webcam.attach('#camera');

function Capture()    
{
    Webcam.snap(function(data_uri){
        document.getElementById('result').innerHTML = "<img src="+data_uri+" id='pic' >"
    })
}
console.log("ml5 version is",ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/AqKzFVMog/model.json",modelLoaded);
function modelLoaded(){
    console.log("model is loaded");
}
function Recognize(){
    img = document.getElementById('pic');
    classifier.classify(img,gotResult);
}
function gotResult(error,results){
    if(error){
console.error(error);
    }
    else{
        console.log(results);
        document.getElementById('object').innerHTML = results[0].label;
        percentage = results[0].confidence * 100;
        document.getElementById('acurracy').innerHTML =percentage.toFixed(2) + " % " ;
    }
}