// write your code here
function onPageLoad() {
    fetch('http://localhost:3000/ramens')
    .then(res => res.json())
    .then(function(data) {
        data.forEach((element) => {
            const ramenMenu = document.querySelector("#ramen-menu")
            const ramenImgs = document.createElement("img")

            ramenImgs.src = element.image

            ramenMenu.appendChild(ramenImgs)
        })
    })
}

onPageLoad()