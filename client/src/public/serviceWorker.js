const PUBLIC_VAPID_KEY = 'BL0Yhgk0t9MjLwGqqTHN5mNQSfUV1dX3jB022ftIiBerNw4XtzvBKVRYHyrjMDqZ4Ynbr-SNn_0XJEOk1oLQaF8'

function urlBase64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding)
    .replace(/-/g, '+')
    .replace(/_/g, '/');
 
  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);
 
  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

const subscription = async() => {

  //Service worker
  const register = await navigator.serviceWorker.register('/sw.js',{
    scope: "/"
  });
  console.log('New service worker')

  const subscription = await register.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: urlBase64ToUint8Array(PUBLIC_VAPID_KEY)
  })

  await fetch('/api/pushNotifications/subscription', {
    method: 'POST',
    body: JSON.stringify(subscription),
    headers: {
      "Content-Type": "application/json"
    }
  })
  console.log('Subscribed!')
}




// if ('serviceWorker' in navigator && 'PushManager' in window) {
//     console.log('Service Worker and Push is supported');

//     navigator.serviceWorker.register('./sw.js')
//     .then(function(swReg) {
//         console.log('Service Worker is registered', swReg);

//         swRegistration = swReg;
//         initialiseUI();
//     })
//     .catch(function(error) {
//         console.error('Service Worker Error', error);
//     });
// }else{
//     console.warn('Push messaging is not supported');
//     pushButton.textContent = 'Push Not Supported';
// }



// function initialiseUI() {
//     if (isSubscribed) {
//         // TODO: Unsubscribe user
//     } else {
//         subscribeUser();
//     }
//     // Set the initial subscription value
//     swRegistration.pushManager.getSubscription()
//     .then(function(subscription) {
//       isSubscribed = !(subscription === null);
  
//       if (isSubscribed) {
//         console.log('User IS subscribed.');
//       } else {
//         console.log('User is NOT subscribed.');
//       }
  
//       updateBtn();
//     });
//   }

//   function updateBtn() {
//     if (isSubscribed) {
//       pushButton.textContent = 'Disable Push Messaging';
//     } else {
//       pushButton.textContent = 'Enable Push Messaging';
//     }
  
//     pushButton.disabled = false;
//   }