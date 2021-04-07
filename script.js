let menuItems = document.querySelectorAll('.menuItem .innerText')

console.log(menuItems)

function resetDelay(delay) {
  delay.style.transitionDelay = '0s'
}

window.addEventListener('click', () => {

  for (let i = 0; i < menuItems.length; i++) {
    let animationDelay = 0 + (i / 5)
    menuItems[i].style.transitionDelay = animationDelay + 's'
    menuItems[i].classList.toggle('animated')
    setTimeout(function () {
      resetDelay(menuItems[i])
    }, (i + (i * 1000)));
  }
})
