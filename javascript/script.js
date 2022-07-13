const openModalButton = document.querySelector(".hotel-search-button")
const modal = document.querySelector(".modal")
const cloceModalButton = document.querySelector(".search-window-close")


openModalButton.addEventListener("click", function (evt) {
    evt.preventDefault()
    modal.classList.add("modal--show")
})

cloceModalButton.addEventListener("click", function (evt) {
    evt.preventDefault()
    modal.classList.remove("modal--show")
})