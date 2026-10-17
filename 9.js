// 9.js - Basis Layer: 9 Adressräume
const ADDR_9 = 9;
const Layer9 = {
  blocks: Array.from({length: 9}, (_, i) => `block_${i}`),
  getBlock: (idx) => Layer9.blocks[idx % 9],
  init() { console.log("Layer 9 init:", this.blocks); return this.blocks; }
};
if (typeof window !== 'undefined') window.Layer9 = Layer9;
console.log("9.js geladen");
