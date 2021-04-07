//getting all the menu items
let menuItems = document.querySelectorAll('.menuItem .innerText')
let body = document.querySelector('body')


//this creates a delay that resets the animation delay
function resetDelay(delay) {
  delay.style.transitionDelay = '0s'
}

window.addEventListener('click', () => {

  //transition the BG color
  body.classList.toggle('blackBG')

  for (let i = 0; i < menuItems.length; i++) {
    //increasing each delay per menuItem
    let animationDelay = 0 + (i / 10)

    //setting the transition delay
    menuItems[i].style.transitionDelay = animationDelay + 's'

    //toggling the class
    menuItems[i].classList.toggle('animated')

    //reseting the transition delay
    setTimeout(function () {
      resetDelay(menuItems[i])
    }, (i + (i * 1000)));
  }
})
