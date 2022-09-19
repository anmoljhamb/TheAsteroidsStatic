distance = 0;


function random(arr) {
    return arr[Math.random() * arr.length | 0];
}


function move(i) {

    distance = distance + 200 * i

    text = document.querySelector(".text");
    video = document.querySelector(".video");

    text.style.transform = "translateX(" + distance + "px)"
    video.style.transform = "translateX(" + distance + "px)"
}




function onReady() {

    mini_title = document.querySelector(".mini-title")
    big_title = document.querySelector(".big-title strong")
    quote_text = document.querySelector(".quote-text")
    video = document.querySelector(".landing-page .video")
    bgImage = document.querySelector(".background-landing-page")

    fetch("/assets/data.json")
        .then((response) => response.json())
        .then((data) => {
            place = random(data.places);
            mini_title.innerHTML = place.place_name
            big_title.innerHTML = place.place_name
            if (quote_text.length)
                quote_text.innerHTML = place.quote_text
            else
                quote_text.innerHTML = ""
            video.style.backgroundImage = `url("${place.image_link}")`
            bgImage.style.backgroundImage = `url("${place.image_link}")`
        });

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