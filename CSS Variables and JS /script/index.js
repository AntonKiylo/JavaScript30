const inputList = document.querySelectorAll('input')

function hadlerUpdate() {
  const suffix = this.dataset.sizing || ''
  document.documentElement.style.setProperty(`--${this.name}`, `${this.value}${suffix}`)
}

inputList.forEach(input => input.addEventListener('change', hadlerUpdate))
inputList.forEach(input => input.addEventListener('mousemove', hadlerUpdate))

