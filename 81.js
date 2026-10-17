// 81.js - Mittel Layer: 81 = 9*9 Adressräume
const ADDR_81 = 81;
const Layer81 = {
  parent: typeof Layer9 !== 'undefined' ? Layer9 : null,
  blocks: Array.from({length: 81}, (_, i) => ({
    id: i,
    parent: Math.floor(i/9),
    child: i % 9,
    key: `81_${Math.floor(i/9)}_${i%9}`
  })),
  getParentBlock: (idx) => Math.floor(idx / 9),
  getChildBlock: (idx) => idx % 9,
  resolve: (addr) => ({ y: Math.floor(addr/9), x: addr%9 }),
  init() { console.log("Layer 81 init:", this.blocks.length); return this.blocks; }
};
if (typeof window !== 'undefined') window.Layer81 = Layer81;
console.log("81.js geladen");
