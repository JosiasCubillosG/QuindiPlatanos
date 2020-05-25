const CACHE_NAME = 'cache_quindiplatanos'
urlsToCache = [
    './',
    './index.html',
    './bundle.js',
    './main.css',
    './images'
]

self.addEventListener('install', e => {
    e.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(urlsToCache)
                .then(()=>self.skipWaiting()) 
            })
            .catch(err => console.log('Fallo las urls de cache',err))
    )
})

self.addEventListener('activate', e =>{
    const cacheWhiteList = [CACHE_NAME]

    e.waitUntil(
        caches.keys()
            .then(cachesNames =>{
                cachesNames.map(cacheName =>{
                    if(cacheWhiteList.indexOf(cacheName) === -1){
                        return caches.delete(cacheName)
                    } 
                })
            })
            .then(() => self.clients.claim())
    )
})

self.addEventListener('fetch', e => {
    e.respondWith(
        caches.match(e.request)
            .then(res => {
                if(res){
                    return res
                }
                return fetch(e.request)
            })
    )
})

self.addEventListener('push', e => {
    const data = e.data.json()
    console.log(data)
    self.registration.showNotification(data.title, {
        body: data.message,
        icon: 'https://quindiplatanos.s3.amazonaws.com/5ec08c82e07c773c4c78e792-logo.png',
        badge: 'https://quindiplatanos.s3.us-east-2.amazonaws.com/5ec32d6c990c1102f1371c6b-logo%20%281%29%20%281%29.png',
        image: 'https://quindiplatanos.s3.amazonaws.com/5ec08c82e07c773c4c78e792-logo.png',
        sound: 'https://quindiplatanos.s3.us-east-2.amazonaws.com/5ec17266e345f31cbcf6eaec-alarma.mp3',
        vibrate: [200, 100, 200, 100, 200, 100, 200],
    })
})
