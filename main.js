function preload(){
}
function setup() {
  canvas = createCanvas(350, 210);
  canvas.center();
  classifier = ml5.imageClassifier("mobilenet" , modelLoaded);
  video = createCapture(VIDEO);
  video.hide();
}
function draw(){
  image(video,0,0,350,210);
  classifier.classify(video , gotResult);
}
function modelLoaded(){
  console.log("Model Loaded");
}
function gotResult(error,result){
  if(error){
    console.error(error);
  }
  else{
    console.log(result);
    document.getElementById("object_name").innerHTML = result[0].label;
    document.getElementById("accuracy_value").innerHTML = result[0].confidence.toFixed(3);
  }
}