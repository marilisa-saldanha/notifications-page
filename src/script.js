const buttonAllRead = document.getElementById('btnAllRead');
const messagesNotRead = document.querySelectorAll('.notRead');
const messages = document.querySelectorAll('.messages');
const circle = document.querySelectorAll('.circle');
const number = document.getElementById('numberOfNotifications');

buttonAllRead.addEventListener('click', () => {
  messages.forEach(message => {
    message.classList.remove('notRead');
  })

  circle.forEach(circleRed => {
    circleRed.style.visibility = 'hidden';
  })

  number.textContent = '0';
})
