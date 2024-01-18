

self.addEventListener('push', (event) => {
    const data = event.data
    const message = data.text()
    self.registration.showNotification(message)
  })