fetch("./terrain-beach.jpg").then(r=>console.log("terrain-beach.jpg:", r.status, r.ok)).catch(e=>console.error("terrain fehlt", e));
fetch("./chrome/155.0.8059.85/chrome.exe", {method:"HEAD"}).then(r=>console.log("chrome.exe:", r.status, r.headers.get("content-type"))).catch(e=>console.error("chrome.exe fehlt", e));
fetch("./Bio-Tel-Ramdisk-729.html").then(r=>console.log("Bio-Tel:", r.status)).catch(e=>console.error(e));
