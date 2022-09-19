distance = 0;

function randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function random(arr) {
    return arr[randomNumber(0, arr.length)];
}


function move(i, d = 200) {

    distance = distance + d * i

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
    left = document.getElementById("left");
    right = document.getElementById("right");

    function setTemplate(place) {
        text = document.querySelector(".text");
        video = document.querySelector(".video");

        text.style.transform = "translateX(0px)"
        video.style.transform = "translateX(0px)"
        mini_title.innerHTML = place.place_name
        big_title.innerHTML = place.place_name
        if (quote_text.length)
            quote_text.innerHTML = place.quote_text
        else
            quote_text.innerHTML = ""
        video.style.backgroundImage = `url("${place.image_link}")`
        bgImage.style.backgroundImage = `url("${place.image_link}")`
        document.querySelector('.btn').addEventListener('click', () => {
            window.open(place.wiki_link);
        })
    }


    fetch("assets/data.json")
        .then((response) => response.json())
        .then((data) => {
            arr = data.places
            curr_index = randomNumber(0, arr.length - 1);
            console.log("curr_index: " + curr_index)
            place = arr[curr_index];
            setTemplate(place)
            right.addEventListener('click', () => {
                curr_index = curr_index + 1 + arr.length;
                curr_index = curr_index % arr.length;
                place = arr[curr_index]
                setTemplate(place)
            })

            left.addEventListener('click', () => {
                curr_index = curr_index - 1 + arr.length;
                curr_index = curr_index % arr.length;
                place = arr[curr_index]
                setTemplate(place)
                console.log("left click")
            })
        });


    text = document.querySelector(".text");
    video = document.querySelector(".video");

    text.style.transform = "translateY(" + distance + "px)"
    video.style.transform = "translateY(" + distance + "px)"

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