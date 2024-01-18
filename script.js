

Notification.requestPermission().then((permissionResult) => {
    if (permissionResult === 'granted') {
      console.log('Can show notifications')
    } 
  })
  
  const button = document.querySelector('.show-notification-button')
  
  function run() {
    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
        Notification.requestPermission().then((permissionResult) => {
          if (permissionResult === 'granted') {
            registration.showNotification(
              'My first notification',
              { body: 'More details about this notification' }
            )
          }
        })
      })
  }
  
  setTimeout(() => {
    run()
  }, 1000)
  
  