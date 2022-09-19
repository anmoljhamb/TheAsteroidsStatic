distance = 0;

function move(i) {

    distance = distance + 200 * i

    text = document.querySelector(".text");
    video = document.querySelector(".video");

    text.style.transform = "translateX(" + distance + "px)"
    video.style.transform = "translateX(" + distance + "px)"
}




function onReady() {

    city_names = ["Sahara"]
    wiki_link = ["https://en.wikipedia.org/wiki/Sahara"]
    image_links = ["https://images.unsplash.com/photo-1613169620329-6785c004d900?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"]
    quote_texts = ["Let the dessert set you free."]


    mini_title = document.querySelector(".mini-title")
    big_title = document.querySelector(".big-title strong")
    quote_text = document.querySelector(".quote-text")
    video = document.querySelector(".landing-page .video")
    bgImage = document.querySelector(".background-landing-page")



    mini_title.innerHTML = city_names[0]
    big_title.innerHTML = city_names[0]
    quote_text.innerHTML = quote_texts[0]
    video.style.backgroundImage = `url("${image_links[0]}")`
    bgImage.style.backgroundImage = `url("${image_links[0]}")`


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