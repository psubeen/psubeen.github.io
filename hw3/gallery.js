var images=[];
images.push("soccer/player1.jpg");
images.push("soccer/player2.jpg");
images.push("soccer/player3.jpg");
images.push("soccer/player4.jpg");

currentImage=0;
document.querySelector("#previous").addEventListener("click",
    function(){
        currentImage--;
        if(currentImage<0)
currentImage=images.length-1;
        showImage();

 });
 document.querySelector("#next").addEventListener("click",
    function(){
        currentImage++;
        if(currentImage>images.length)
currentImage=0;
        showImage();

 });
function showImage(){
    pc=document.getElementById("soccerplayer1");
    pc.src=images[currentImage];

}