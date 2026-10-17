// 729.js - Top Layer: 729 = 9*9*9 Adressräume - max Tiefe, nicht zu weit runter
const ADDR_729 = 729;
const Layer729 = {
  parent81: typeof Layer81 !== 'undefined' ? Layer81 : null,
  parent9: typeof Layer9 !== 'undefined' ? Layer9 : null,
  blocks: Array.from({length: 729}, (_, i) => ({
    id: i,
    l9: Math.floor(i/81),
    l81: Math.floor((i%81)/9),
    l729: i%9,
    key: `729_${Math.floor(i/81)}_${Math.floor((i%81)/9)}_${i%9}`,
    path: `Y:/${Math.floor(i/81)}/${Math.floor((i%81)/9)}/${i%9}`
  })),
  // mappt 50GB in 729 Chunks = ~68.5MB pro Chunk - ideal für RAM-Disk
  chunkSizeMB: (50*1024/729).toFixed(2),
  resolveFull: (addr) => ({
    top: Math.floor(addr/81),
    mid: Math.floor((addr%81)/9),
    low: addr%9,
    fullPath: `Y:/${Math.floor(addr/81)}/${Math.floor((addr%81)/9)}/${addr%9}`
  }),
  init() { 
    console.log(`Layer 729 init: ${this.blocks.length} Blöcke à ${this.chunkSizeMB} MB`);
    return this.blocks; 
  }
};
if (typeof window !== 'undefined') window.Layer729 = Layer729;
console.log("729.js geladen - Adressraum sicher, nicht zu tief");
