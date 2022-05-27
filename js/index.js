const elForm = document.querySelector(".form");
const elFormInput = document.querySelector(".form-control");
const elText = document.querySelector(".text");

elForm.addEventListener("submit",function(evt) {
    evt.preventDefault()
    const inputValue = elFormInput.value;

    const calcNumber = function(numbers){
        if(numbers == 1) {
            return "Dushanba"
        } else if(numbers === "2") {
            return "Seshanba"
        } else if(numbers === "3"){
            return "Chorshanba"
        } else if(numbers === "4"){
            return "Payshanba"
        } else if(numbers === "5") {
            return "Juma"
        } else if(numbers === "6") {
            return "Shanba"
        } else if(numbers === "7") {
            return "Yakshanba"
        } else {
            return "Bunday hafta kuni yo'q"
        }
    }

    elText.textContent = `${calcNumber(inputValue)}`

})

