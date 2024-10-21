function changelight(){
    if(document.getElementById("yellow").className === "light yellow"){
        document.getElementById("red").className = "light red";
        document.getElementById("yellow").className = "light off";
    }
    else if(document.getElementById("green").className === "light green"){
        document.getElementById("yellow").className = "light yellow";
        document.getElementById("green").className = "light off";
    }
    else if(document.getElementById("red").className === "light red"){
        document.getElementById("green").className = "light green";
        document.getElementById("red").className = "light off";
    }
}