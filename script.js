const card1 = document.getElementById('card-1')

const card2 = document.getElementById('card-2')

const card3 = document.getElementById('card-3')

const card4 = document.getElementById('card-4')

const card5 = document.getElementById('card-5')



function hasClass(element, className) {
  if (element.classList.contains(className)) {
    return true
  } else {
    return false
  }
  
}

function styles(e) {
  const divArr = [card1, card2, card3, card4, card5];
  let cardClass = divArr.filter((div) => hasClass(div, 'card')==true)
  cardClass[0].classList.remove('card')
  cardClass[0].classList.add('small-card')
  e.classList.add('card')
  e.classList.remove('small-card')
}