importScripts("/precache-manifest.702c4526ac23c03c3b11fcec996dc3b8.js", "/workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "/workbox-v4.3.1"});
self.__precacheManifest = [].concat(self.__precacheManifest || [])
workbox.precaching.suppressWarnings()
workbox.precaching.precacheAndRoute(self.__precacheManifest, {})

workbox.routing.registerRoute(
  /\.(?:png|gif|jpg|jpeg|svg)$/,
  workbox.strategies.staleWhileRevalidate(0),
)

workbox.routing.registerRoute(
  new RegExp('https://reqres.in'),
  workbox.strategies.networkFirst(),
)

