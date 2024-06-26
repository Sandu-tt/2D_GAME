

//boxes
let boxMarginLeft = 2040;

function createBoxes() {
    for (let i = 0; i <= 30; i++) {
        $("#background").append("<div class='box' style='margin-left: " + boxMarginLeft + "px' id='box" + i + "'></div>");

        if (i < 15) {
            boxMarginLeft = boxMarginLeft + 2200;
        }
        if (i >= 15) {
            boxMarginLeft = boxMarginLeft + 1200;
        }
    }
}

function boxAnimation() {
    for (let i = 0; i < 30; i++) {
        let box = parseInt($("#box" + i).css("margin-left"));

        let newMarginLeft = box - 25;
        $("#box" + i).css("margin-left", newMarginLeft - 25 + "px");

        if (newMarginLeft >= -110 & newMarginLeft <= 100) {
            if (boyMarginTop > 500) {
                clearInterval(boxAnimationId);

                clearInterval(runAnimationNumber);
                runAnimationNumber = -1;

                clearInterval(jumpAnimationNumber);
                jumpAnimationNumber = -1;

                clearInterval(moveBackgroundAnimationId);
                moveBackgroundAnimationId = -1;

                deadAnimationNumber = setInterval(boyDeadAnimation, 100);
            }
        }
    }
}

$("#btnNext").click(function (e) {
    window.location.href = "indexTwo.html";
});
