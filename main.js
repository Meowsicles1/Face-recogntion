Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality: 90

})
camera = document.getElementById("tape")
Webcam.attach(camera)
function capture(){
    Webcam.snap(function(data_uri){
        document.getElementById("book").innerHTML = "<img id = 'capturedImage' src = '"+data_uri+"'>"
    })
}
console.log(ml5.version)
classfier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/ZF77zmAsO/model.json",modelloader)
function modelloader(){
    console.log("Model is Loaded")
}
function identify(){
    ing = document.getElementById("capturedImage")
    classfier.classify(ing,gotresult)
}
function gotresult(error,results){
    if(error){
        console.error(error)
    }else{
        console.log(results)
        document.getElementById("Object").innerHTML = results[0].label
        document.getElementById("Accuracy").innerHTML = results[0].confidence.toFixed(3)
    }
}