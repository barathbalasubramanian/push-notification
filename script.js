

Notification.requestPermission().then((permissionResult) => {
    if (permissionResult === 'granted') {
      console.log('Can show notifications')
    } 
  })
  
  
function run() {
    console.log("Running")
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


setInterval(() => {
    run()
}, 1000)
  
  