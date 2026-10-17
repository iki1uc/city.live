// Beach Terrain (wenn geladen)
if(window.beachImg && window.beachImg.complete){
  const img = window.beachImg;
  const scale = Math.max(WW / img.width, WH / img.height);
  wctx.globalAlpha = 0.22;
  wctx.drawImage(img, (WW - img.width*scale)/2, (WH - img.height*scale)/2, img.width*scale, img.height*scale);
  wctx.globalAlpha = 1;
}
