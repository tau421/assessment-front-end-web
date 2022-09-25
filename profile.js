let favoriteColor = document.querySelector('#color')

let favoritePlace = document.querySelector('#place')

let favoriteRitual = document.querySelector('#ritual')

function colorAlert(evt) {
    alert('My favorite color is black.')
}

function placeAlert(evt) {
    alert('My favorite place is Denmark.')
}

function ritualAlert(evt) {
    alert('My favorite ritual is Friday Night Pizza and Movie Night.')
}

favoriteColor.addEventListener('click', colorAlert)

favoritePlace.addEventListener('click', placeAlert)

favoriteRitual.addEventListener('click', ritualAlert)