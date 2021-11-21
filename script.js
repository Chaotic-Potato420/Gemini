var score = 1;

function up(){
    score += (.2 * score);
    document.getElementById("scoreOutput").innerHTML = "Score: " + Math.round(score);
}

window.onload = function(){
    document.getElementById("game").style.display = "none";
}
function next(){
    document.getElementById("instrucitons").style.display = "none";
    document.getElementById("game").style.display = "block";
    timer();
}

function timer(){
    setTimeout(() => {
        alert("Time is Up!! Your score: " + Math.round(score))
        window.location.replace("2048/index.html")
    }, 10000);
}