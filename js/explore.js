distance = 0;

function move(i) {

    distance = distance + 200 * i

    text = document.querySelector(".text");
    video = document.querySelector(".video");

    text.style.transform = "translateX(" + distance + "px)"
    video.style.transform = "translateX(" + distance + "px)"
}


function onReady() {

    text = document.querySelector(".text");
    video = document.querySelector(".video");

    text.style.transform = "translateY(" + distance + "px)"
    video.style.transform = "translateY(" + distance + "px)"


    left = document.getElementById("left");
    right = document.getElementById("right");

    left.addEventListener('mouseover', function() {
        console.log("left supremacy")
        move(-1);
    })

    left.addEventListener('mouseout', function() {
        console.log("left supremacy")
        move(1);
    })

    right.addEventListener('mouseover', function() {
        console.log("right supremacy")
        move(1);
    })

    right.addEventListener('mouseout', function() {
        console.log("right supremacy")
        move(-1);
    })
}