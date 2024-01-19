self.addEventListener('push', (event) => {
  const data = event.data
  const pushMessage = data.json()
  console.log(pushMessage, " pushed ")
  event.waitUntil(
    self.registration.showNotification(pushMessage.message)
  )
})
