const panels = document.querySelectorAll('.panel')

function addClass() {
  panels.forEach(panel => panel.classList.remove('open'))
  panels.forEach(panel => panel.classList.remove('open-active'))
  this.classList.add('open')
  this.classList.add('open-active')
}

panels.forEach(panel => panel.addEventListener('click', addClass))