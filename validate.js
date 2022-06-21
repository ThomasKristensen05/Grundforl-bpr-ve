var form = document.querySelector("form")
console.log(form)

function hasError(formElement, errorMessage) {
    formElement.closest(".formgroup").querySelector(".formgroup__errormsg").innerHTML = errorMessage
    // alert(errorMessage)
    formElement.focus()
    formElement.style.backgroundColor = "#ffdede"
}

function isValid(formElement) {
    formElement.style.backgroundColor ="transparent"
    formElement.closest(".formgroup").querySelector(".formgroup__errormsg").innerHTML = ""
}

function checkEmail(email) {
    var filter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if (filter.test(email)) {
        return true
    }
    else {
        return false
    }
}

function validate(event) {
    event.preventDefault()

    var fullNameValid = false
    var emailValid = false
    var reasonValid = false



    console.log(event.target.fullName.value)

    var form = event.target

    if (form.fullName.value.length == 0) {
        hasError(form.fullName, "Skriv venligst dit navn...")
    }
    else {
        isValid(form.fullName)
        fullNameValid = true
    }

    event.preventDefault()

    console.log(event.target.reason.value)

    var form = event.target

    if (form.reason.value.length == 0) {
        hasError(form.reason, "Skriv venligst en besked...")
    }
    else {
        isValid(form.reason)
        reasonValid = true
    }

    if (form.email.value.length == 0) {
        hasError(form.email, "Skriv venligst din email...")
    }
    else if (!checkEmail(form.email.value)) {
        hasError(form.email, "Wrong email")
    }
    else {
        isValid(form.email)
        emailValid = true
    }
}




form.addEventListener("submit", validate)