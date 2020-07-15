
window.setTimeout(function () {

    var p1button = document.getElementById("p1button")
    var p2button = document.getElementById("p2button")
    var p1display = document.getElementById("p1display");
    var p2display = document.getElementById("p2display");
    var resetButton = document.getElementById("resetButton");
    var p1score = 0;
    var p2score = 0;
    var gameOver = false;
    var limitDisplay = document.getElementById("limitDisplay")
    var limit = document.getElementsByTagName("input")[0];
    var winningScore = 5;


    p1button.addEventListener("click", function () {
        if (!gameOver) {
            p1score++;
            if (p1score === winningScore) {
                p1display.classList.toggle("winner")
                gameOver = true;
              
            }
            p1display.textContent = p1score;
        } 
    })


    p2button.addEventListener("click", function () {
        if (!gameOver) {
            p2score++;
            if (p2score === winningScore) {
                p2display.classList.toggle("winner")
                gameOver = true;
          
            }
            p2display.textContent = p2score;
        } 
    })

    resetButton.addEventListener("click",function(){
        reset()
    })

    




    limit.addEventListener("change", function () {
        limitDisplay.textContent = this.value;
        winningScore = Number (this.value);
        reset();
    });

    function reset () {
        p1score = 0;
        p2score = 0;
        p1display.textContent = p1score;
        p2display.textContent = p2score;
        p1display.classList.remove("winner");
        p2display.classList.remove("winner");
        gameOver = false;
    }

}, 500)

