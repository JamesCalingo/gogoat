const staticDev = "dev-gogoat-v1"
const assets = [
    "/",
    "/index.html",
    "/subway.html",
    "/commuter.html",
    "/assets/style.css",
    "/assets/subway.js",
    "assets/commuter.js"
]

self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(staticDev).then(cache => {
            cache.addAll(assets)
        })
    )
})

self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request).then(res => {
            return res || fetch(event.request)
        })
    )
})