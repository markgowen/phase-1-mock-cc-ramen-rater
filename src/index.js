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
            ramenDetails(element, ramenImgs)
        })
    })
}

function ramenDetails(element, ramenImgs) {
    const ramenName = document.querySelector(".name")
    const rest = document.querySelector(".restaurant")
    const img = document.querySelector(".detail-image")
    const rating = document.querySelector("#rating-display")
    const comment = document.querySelector("#comment-display")
    
    
    ramenImgs.addEventListener("click", (e) => {
        ramenName.textContent = element.name
        img.src = element.image 
        rest.textContent = element.restaurant
        rating.textContent = element.rating
        comment.textContent = element.comment
    })
}

onPageLoad()