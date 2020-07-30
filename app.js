var count=0;
function generator(){
    var numberInput=Number(document.getElementById("nums").value);
    var color=document.getElementById("color").value;
    var boxContainer=document.querySelector(".boxContainer");
    for(var i=0;i<numberInput;i++){
        count++;
        var box=document.createElement("button");
        box.className="boxes";
        box.innerHTML=`New Button Box ${count}`;
        box.style.backgroundColor=color;
        boxContainer.appendChild(box)
    }
}