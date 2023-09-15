'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "26212a611221ec4c4159b0d73499bb08",
"index.html": "ccb229a64d318908c9f370026fd787ce",
"/": "ccb229a64d318908c9f370026fd787ce",
"main.dart.js": "2e0b1fbd750d931d47ab2513de19052f",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"favicon.png": "946cded120674fc2dc184174af84a7e9",
"icons/Icon-192.png": "63343ada61c2f41d27f13a01e4eb01ab",
"icons/Icon-maskable-192.png": "63343ada61c2f41d27f13a01e4eb01ab",
"icons/Icon-maskable-512.png": "21e37165e5b2043de31c65280dd13008",
"icons/Icon-512.png": "21e37165e5b2043de31c65280dd13008",
"manifest.json": "15c03d9e4474f733bc31231fb6110031",
"assets/AssetManifest.json": "5df7d46d0b0391256bb218129007b2a9",
"assets/NOTICES": "56965dc6a3e6603b35a32bdb5f249333",
"assets/FontManifest.json": "bebe4eb8bd319ccdd592294170302e7b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_sound_web/howler/howler.js": "2bba823e6b4d71ea019d81d384672823",
"assets/packages/flutter_sound_web/src/flutter_sound_recorder.js": "f7ac74c4e0fd5cd472d86c3fe93883fc",
"assets/packages/flutter_sound_web/src/flutter_sound_player.js": "6bf84579813fd481ec5e24e73927500d",
"assets/packages/flutter_sound_web/src/flutter_sound.js": "aecd83c80bf4faace0bcea4cd47ab307",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/images/chat_camera_image.svg": "13537106679ddfb3f23d43589ab93b53",
"assets/assets/images/profile_delete.svg": "e729dfcff6235ff4f2aa5cd6e80830ae",
"assets/assets/images/send_icon.svg": "cf1db0581239d02e74a40845ec8a4791",
"assets/assets/images/down_arrow_icon.svg": "214b8bd6998a08e17a49ffb0d3d43341",
"assets/assets/images/ic_right_arrow.svg": "3f841b8315988b0cbc051a76f6510c2a",
"assets/assets/images/profile_user.svg": "65c52021d6a4500a4e32040fb010e25d",
"assets/assets/images/new_chat_icon.svg": "0434312d1d4f630dc4cb4ce50943b767",
"assets/assets/images/back_arrow_icon.svg": "eb16c31a2f487504aa91178b322e81b7",
"assets/assets/images/common_plus.svg": "66d54698d4d840792df8c56b8d6ca193",
"assets/assets/images/common_close.svg": "01201d828832c85b4a8b5d2483fbde6d",
"assets/assets/images/expand_icon.svg": "9a68c694a88eb42ca32a51cd228fdb6d",
"assets/assets/images/chat_refresh.svg": "2200f3a31dd06f1fec9aa999d31f7578",
"assets/assets/images/profile_tick.svg": "6d8b631d05cc068666f21dc503faf280",
"assets/assets/images/location_hollow.svg": "6901b557e6bf2aec68ff8d784cc4e247",
"assets/assets/images/navbar_icon.svg": "580a9f4bba126fdcb253eda603a86082",
"assets/assets/images/common_up_arrow.svg": "1477165c1cff48422a5118965331537b",
"assets/assets/images/new_chat.svg": "b35553daa684eb44fe35c8887c6e2fb6",
"assets/assets/images/common_down_arrow.svg": "e355e1512b102fe99c3d7bad77d5dd3a",
"assets/assets/images/profile_chat.svg": "538106558ee352055b30e5ca662b10ac",
"assets/assets/images/cross_icon.svg": "ea26d652ed1badfbbaf2d66554e129ce",
"assets/assets/images/common_left_arrow.svg": "b05cd1e90828c5f4fc8ed2e6b3273780",
"assets/assets/images/google_logo.svg": "df269be4835b6bd608995af0a35a5c12",
"assets/assets/images/mic_icon.svg": "b444ce2af463666b09269d3e62d73bfd",
"assets/assets/images/chat_edit.svg": "afd292a1c173d0d703b58c26b6f2be53",
"assets/assets/images/image_loading_error.svg": "4672b7f3faa510dbb8c9faf46fd157f2",
"assets/assets/fonts/MierA/MierATest-Regular.otf": "9119fb2163725f51c5b3c266e74582ab",
"assets/assets/fonts/MierA/MierATest-Light.otf": "931c2136cfbaab9eb4e56de6113d495f",
"assets/assets/fonts/MierA/MierATest-Book.otf": "2318369310ec370b3698729c66dd7056",
"assets/assets/fonts/MierA/MierATest-Bold.otf": "1a995f49e1565f249fb17ba85cfba7d2",
"assets/assets/fonts/MierA/MierATest-Demi.otf": "2d3dca70f4c189d09b071c7e6ff51293",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
