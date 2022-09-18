window.onscroll = function() {
    onScrollFunction();
}


function onScrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementsByClassName("navbar")[0].style.backgroundColor = "white";
    } else {
        document.getElementsByClassName("navbar")[0].style.backgroundColor = "transparent";
    }
}