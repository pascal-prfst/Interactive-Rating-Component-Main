const ratingButtons = document.querySelectorAll(".rating-btn")
const submitButton = document.querySelector(".submit-btn")
const ratingCounter = document.getElementById("rating-counter")

let rating = 0;

ratingButtons.forEach(btn => {
    btn.addEventListener("click", event => {
        rating = event.target.value
    })
})

submitButton.addEventListener("click", () => {
    ratingCounter.innerHTML = rating
    document.getElementById("main-container").style.display = "none"
    document.querySelector(".submitted-container").style.display = "flex"
})