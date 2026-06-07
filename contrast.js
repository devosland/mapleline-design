// Calcul de contraste WCAG 2.1. Fonctions pures, aucune dependance.

function parseHex(hex) {
  const m = String(hex).trim().replace('#', '');
  const full = m.length === 3 ? m.split('').map((c) => c + c).join('') : m;
  return {
    r: parseInt(full.slice(0, 2), 16),
    g: parseInt(full.slice(2, 4), 16),
    b: parseInt(full.slice(4, 6), 16),
  };
}

function channelLum(c) {
  const s = c / 255;
  return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
}

function luminance(hex) {
  const { r, g, b } = parseHex(hex);
  return 0.2126 * channelLum(r) + 0.7152 * channelLum(g) + 0.0722 * channelLum(b);
}

function contrastRatio(hexA, hexB) {
  const la = luminance(hexA);
  const lb = luminance(hexB);
  const hi = Math.max(la, lb);
  const lo = Math.min(la, lb);
  return (hi + 0.05) / (lo + 0.05);
}

// large = true pour texte large (>= 18.66px gras ou 24px) : seuil 3:1, sinon 4.5:1
function meetsAA(hexA, hexB, large) {
  return contrastRatio(hexA, hexB) >= (large ? 3 : 4.5);
}

module.exports = { contrastRatio, meetsAA, luminance };
