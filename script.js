

Notification.requestPermission().then((permissionResult) => {
    if (permissionResult === 'granted') {
      console.log('Can show notifications')
    } 
  })
  
  
async function run() {
    console.log("Running")

    // navigator.serviceWorker.ready
    // .then((reg)=>{
    //     console.log("rdy")
    //     reg.pushManager.getSubscription()
    //     .then((sub) => {
    //         console.log("sub", sub)
    //         if (sub) {
    //             console.log("done")
    //             // unsubscribe
    //             sub.unsubscribe()
    //             .then(() => {
    //                 console.log("Unsub")
    //             })
    //         }
    //     })
    // } )

    const registration = await navigator.serviceWorker.register('/sw.js')

    const permissionResult = await Notification.requestPermission()

    if (permissionResult !== 'granted') {
        return
    }

    const pushSubscription = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: "BKaG1ILddP_8R9fhH7nd2gtZ3aFCrSzVWs3ELZV6yB-wLotRHX5WCXsDFIp60B7_uVkA_fm1yKZqBhyHrBeOR1Q"
    })

    console.log('pushSubscription', JSON.stringify(pushSubscription))
}

run()

// setInterval(() => {
//     run()
// }, 1000)
  