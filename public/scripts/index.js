let modal = document.getElementById('agreement-modal')

let tariffBtn1 = document.getElementById('tariff-btn-1')
let tariffBtn2 = document.getElementById('tariff-btn-2')
let tariffBtn3 = document.getElementById('tariff-btn-3')
let chosenTariff = -1

let closeBtn = document.getElementsById("close-btn")

tariffBtn1.onclick = () => {
    modal.style .display = "block"
    chosenTariff = 0
}
tariffBtn2.onclick = () => {
    modal.style .display = "block"
    chosenTariff = 1
}
tariffBtn3.onclick = function() {
    modal.style .display = "block"
    chosenTariff = 2
}
closeBtn.onclick = function() {
    modal.style.display = "none"
}
window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = "none"
    }
}