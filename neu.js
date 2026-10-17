// terrain-beach.jpg als Canvas Background
const img = new Image();
img.src = "./terrain-beach.jpg";

img.onload = () => {
  // Cover wie CSS background-size: cover
  const scale = Math.max(WW / img.width, WH / img.height);
  const w = img.width * scale;
  const h = img.height * scale;
  const x = (WW - w) / 2;
  const y = (WH - h) / 2;
  wctx.globalAlpha = 0.35; // Beach leicht transparent über Sternen
  wctx.drawImage(img, x, y, w, h);
  wctx.globalAlpha = 1;
};

img.onerror = () => {
  console.warn("terrain-beach.jpg nicht gefunden in city.live/");
};
