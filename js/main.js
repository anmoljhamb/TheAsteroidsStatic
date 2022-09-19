arr = [1, 2, 3, 4]
localStorage.setItem('arr', JSON.stringify(arr));

function onReady() {
    let text = document.getElementById("text");
    let bird1 = document.getElementById("bird1");
    let bird2 = document.getElementById("bird2");
    let btn = document.getElementById("btn");
    let stones = document.getElementById("stones");
    let forest = document.getElementById("forest");
    let water = document.getElementById("water");
    let header = document.getElementById("header");

    console.log("default values: ");
    console.log("text.style.top" + text.style.top)

    window.addEventListener('scroll', function() {

        let value = window.scrollY;

        console.log("value: " + value)

        if (value <= 10) {
            text.style.top = '';
        } else {
            text.style.top = 50 + value * -.1 + '%';
            bird2.style.top = value * -1.5 + 'px';
            bird2.style.left = value * 2 + 'px';
            bird1.style.top = value * -1.5 + 'px';
            bird1.style.left = value * -5 + 'px';
            btn.style.marginTop = value * 1.5 + 'px';
            stones.style.top = value * -.12 + 'px';
            forest.style.top = value * .25 + 'px';
            header.style.top = value * .5 + 'px';
        }
    })
}