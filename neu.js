// in neu.js — für NUTZRAUM OS wall Canvas + terrain.html
const terrainImg = new Image();
terrainImg.src = "./terrain-beach.jpg"; // dein Strand mit Tor aus dem Screenshot
terrainImg.onload = () => {
  // WW, WH aus resizeWall()
  wctx.globalAlpha = 0.85;
  wctx.drawImage(terrainImg, 0, 0, WW, WH);
  wctx.globalAlpha = 1;
  // dann Sterne + 729 Sektoren drüber
  renderStars();
  render729Grid();
};
terrainImg.onerror = () => {
  console.warn("terrain-beach.jpg nicht gefunden — fallback gradient");
};
