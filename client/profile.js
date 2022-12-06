const foodBtn = document.querySelector('#food')
 const placeBtn = document.querySelector('#place')
 const activityBtn = document.querySelector('#activity')


function foodClick() {
    alert('ITALIAN FOOD')
}
function placeClick() {
    alert('TULUM MEXICO')
}
function activityClick() {
    alert('SWIMMING')
}

placeBtn.addEventListener('click', placeClick)
foodBtn.addEventListener('click', foodClick)
activityBtn.addEventListener('click', activityClick)
