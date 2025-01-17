'use strict'

// check out try and catch
// try {
    
// } catch (error) {
    
// }


let id = document.querySelector('p')
let adviceText = document.querySelector('h1')
let btn = document.querySelector('#advice-btn')

async function getAdvice() {
    try {
        let url = "https://api.adviceslip.com/advice"
        let request = await fetch (url)
        let response = await request.json();
        console.log(response.slip.id);
        adviceText.innerText = `"${response.slip.advice}"`
        id.innerText = `ADVICE #${response.slip.id}`
        
    } catch (error) {
        console.log(error);
    }
}
btn.addEventListener('click', getAdvice)
window.addEventListener('load', getAdvice)