const secondHand = document.querySelector('.second-hand')
const minuteHand = document.querySelector('.minute-hand')
const hourHand = document.querySelector('.hour-hand')

const setTime = () => {
  const now = new Date()
  const seconds = now.getSeconds()
  const minutes = now.getMinutes()
  const hours = now.getHours()
  
  const secondsToDegrees = ((seconds / 60) * 360) + 90
  const minutesToDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90
  const hoursToDegrees = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90

  secondHand.style.transform = `rotate(${secondsToDegrees}deg)`
  minuteHand.style.transform = `rotate(${minutesToDegrees}deg)`
  hourHand.style.transform = `rotate(${hoursToDegrees}deg)`
  
  setTimeout(setTime, 1000)
}

setTime()