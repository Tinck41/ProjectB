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
let chosenTariff = -1

const tariffBtn1 = document.getElementById('tariff-btn-1')
const tariffBtn2 = document.getElementById('tariff-btn-2')
const tariffBtn3 = document.getElementById('tariff-btn-3')
const formBtn = document.getElementById('form-button')
const closeBtn = document.getElementById("close-btn")
const whatsAppBtn = document.getElementById('whatsapp-btn')

tariffBtn1.onclick = async () => {
    modal.style .display = "block"
    chosenTariff = 0
}

tariffBtn2.onclick = () => {
    modal.style .display = "block"
    chosenTariff = 1
}

tariffBtn3.onclick = () => {
    modal.style .display = "block"
    chosenTariff = 2
}

formBtn.onclick = async () => {
    const firstName = document.getElementById('first-name').value
    const lastName = document.getElementById('last-name').value
    const fatherName = document.getElementById('father-name').value
    const birthDay = document.getElementById('birth-day').value
    const address = document.getElementById('address').value
    console.log('Form button is pressed')

    try {
        const docRef = await addDoc(collection(db, 'banking'), {
            first_name: firstName,
            last_name: lastName,
            father_name: fatherName,
            birth_date: birthDay,
            address: address,
            tariff: chosenTariff
        })
        console.log('Document written with ID: ', docRef.id)
        formBtn.innerText = 'Выполнено'
        formBtn.disabled = true
        formBtn.style.backgroundColor = '#bbbbbb'
    } catch(e) {
        console.log('Error adding document: ', error)
    }
}

whatsAppBtn.onclick = async () => {
    const phone = document.getElementById('phone-number').value
    console.log('WhatsApp button is pressed')
    try {
        const docRef = await addDoc(collection(db, 'whatsapp'), {
            phone_number: phone,
        })
        console.log('Document written with ID: ', docRef.id)
        whatsAppBtn.innerText = 'Выполнено'
        whatsAppBtn.disabled = true
        whatsAppBtn.style.backgroundColor = '#bbbbbb'

    } catch(e) {
        console.log('Error adding document: ', error)
    }
}

closeBtn.onclick = () => {
    modal.style.display = "none"
}

window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = "none"
    }
}