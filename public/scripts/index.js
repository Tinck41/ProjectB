import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js"
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js"

const firebaseApp = initializeApp({
    apiKey: "AIzaSyCQJ5a8ZcUka826IjvLnWbfgWeCyJj39HA",
    authDomain: "projectb-4f745.firebaseapp.com",
    projectId: "projectb-4f745",
    storageBucket: "projectb-4f745.appspot.com",
    messagingSenderId: "33681960752",
    appId: "1:33681960752:web:cb0dbab9068c47daa7e2f5",
    measurementId: "G-K050XC019C"
})

let db = getFirestore();

let modal = document.getElementById('agreement-modal')

let tariffBtn1 = document.getElementById('tariff-btn-1')
let tariffBtn2 = document.getElementById('tariff-btn-2')
let tariffBtn3 = document.getElementById('tariff-btn-3')
let chosenTariff = -1
// let formBtn = document.getElementById('form-button')
let closeBtn = document.getElementById("close-btn")

tariffBtn1.onclick = async () => {
    modal.style .display = "block"
    chosenTariff = 0

    try {
        const docRef = await addDoc(collection(db, 'banking'), {
            first_name: "test",
            last_name: "test",
            father_name: "test",
            birth_date: "test",
            address: "test",
            tariff: chosenTariff
        })
        console.log('Document written with ID: ', docRef.id)
    } catch(e) {
        console.error('Error adding document: ', error)
    }
}

tariffBtn2.onclick = () => {
    modal.style .display = "block"
    chosenTariff = 1
}

tariffBtn3.onclick = () => {
    modal.style .display = "block"
    chosenTariff = 2
}

closeBtn.onclick = () => {
    modal.style.display = "none"
}

window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = "none"
    }
}