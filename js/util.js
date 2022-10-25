function navBar() {

    site_name = document.querySelector("#header .logo")

    fetch("./data.json")
        .then((resp) => resp.json())
        .then((data) => {
            website = data["website"]
            navbar = website["navbar"]
            site_name.innerHTML = navbar["name"]
        })
}

function jsonOnReady() {
    console.log("Called From index.html")
    navBar();
}