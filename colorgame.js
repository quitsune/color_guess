var colors = genColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");

colorDisplay.textContent = pickedColor;
var message = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
strip = document.getElementById("stripe");
var es = document.querySelector("#easy");
var ha = document.querySelector("#hard");
es.addEventListener("click",function(){
   this.classList.add("selected");
   ha.classList.remove("selected");
   colors = genColors(3);
   pickedColor = pickColor();
   colorDisplay.textContent = pickedColor;
   for (var i = 0; i < 3; i++) {
    
    squares[i].style.backgroundColor=colors[i];
}
     squares[3].style.display="none";
     squares[4].style.display="none";
     squares[5].style.display="none";
});

ha.addEventListener("click",function(){
    this.classList.add("selected");
    es.classList.remove("selected");
    colors = genColors(6);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < 6; i++) {
     
     squares[i].style.backgroundColor=colors[i];
     squares[3].style.display="block";
     squares[4].style.display="block";
     squares[5].style.display="block";
 }


    
});
resetButton.addEventListener("click",function(){
    if(es.classList.contains("selected"))
    colors = genColors(3);
    else
    colors = genColors(6);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
       if(colors[i])
        squares[i].style.backgroundColor=colors[i];
    }
    h1.style.backgroundColor = "DarkSlateBlue";
    resetButton.innerHTML ="New Colors";
    message.textContent="";

});

for (var i = 0; i < squares.length; i++) {
    
    squares[i].style.backgroundColor=colors[i];
    squares[i].addEventListener("click",function(){

        var clickedColor =this.style.backgroundColor;
        
        if( clickedColor === pickedColor){
            message.innerHTML="Correct!"
            for (var j = 0; j < squares.length; j++) {
                squares[j].style.backgroundColor = pickedColor;
                

        }
        h1.style.backgroundColor = pickedColor;
        resetButton.innerHTML ="Play Again";
    }
        else{
            this.style.backgroundColor= "#232323";
            message.innerHTML ="Try again";
        }
    });
    
}

function pickColor(){
    var random =Math.floor(Math.random()* colors.length);
    return colors[random];

}

function genColors(num){
    var arr= []
    for(var i= 0;i<num ;i++){
         var r = Math.floor(Math.random()* 256);
         var g = Math.floor(Math.random()* 256);
         var b = Math.floor(Math.random()* 256);
         arr[i] ="rgb(" + r +", " + g +", "+ b + ")";

    }
    return arr;
}