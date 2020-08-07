
self.addEventListener("install" , e =>{
    console.log("Install the web app in your machine");
    e.waitUntil(
        caches.open("static").then(
            cache => {
            return cache.addAll(['./' , './index.html' , './info.html' , './other.html' , './css/materialize.css' , 
            './css/materialize.min.css' , './js/jquery.js' , './js/materialize.js' , './js/materialize.min.js' , './images/logo.png'
        ])    
            }
        )
    )
});

self.addEventListener('fetch' , e=> {
    console.log("Intercepting fetch" , e.request.url);
    e.respondWith(
        caches.match(e.request).then( response => {
            return response || fetch(e.request)
        })
    )
});
