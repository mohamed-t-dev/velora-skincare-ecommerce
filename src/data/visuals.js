const createVisual = (label, background, accent, shape = 'bottle') => {
  const productShape = shape === 'jar'
    ? '<rect x="205" y="190" width="230" height="210" rx="48" fill="rgba(255,255,255,.84)"/><rect x="190" y="150" width="260" height="72" rx="28" fill="rgba(56,49,41,.78)"/>'
    : '<rect x="245" y="130" width="150" height="300" rx="42" fill="rgba(255,255,255,.86)"/><rect x="275" y="76" width="90" height="82" rx="22" fill="rgba(56,49,41,.78)"/><rect x="296" y="35" width="48" height="58" rx="20" fill="rgba(255,255,255,.82)"/>';

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="640" height="640" viewBox="0 0 640 640">
    <defs><linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop stop-color="${background}"/><stop offset="1" stop-color="${accent}"/></linearGradient></defs>
    <rect width="640" height="640" fill="url(#bg)"/>
    <circle cx="86" cy="108" r="92" fill="rgba(255,255,255,.18)"/>
    <circle cx="566" cy="522" r="140" fill="rgba(255,255,255,.14)"/>
    ${productShape}
    <rect x="268" y="268" width="104" height="78" rx="12" fill="rgba(247,243,234,.92)"/>
    <text x="320" y="302" text-anchor="middle" font-family="Georgia,serif" font-size="16" letter-spacing="3" fill="#39352f">VELORA</text>
    <text x="320" y="326" text-anchor="middle" font-family="Arial,sans-serif" font-size="10" letter-spacing="2" fill="#686157">SKIN</text>
    <text x="320" y="506" text-anchor="middle" font-family="Georgia,serif" font-size="25" fill="#39352f">${label}</text>
  </svg>`;

  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
};

export const VISUALS = {
  serum: createVisual('Barrier Serum', '#eee7dc', '#c4ad86'),
  balm: createVisual('Cleansing Balm', '#dfe4d7', '#aab795', 'jar'),
  cream: createVisual('Barrier Cream', '#ece8df', '#c9bca8', 'jar'),
  nightOil: createVisual('Night Oil', '#c7c0b6', '#6e7665'),
  collection: createVisual('Daily Collection', '#e6dfd2', '#a8b59a', 'jar'),
  restored: createVisual('Restored', '#eee2d9', '#c7a995', 'jar'),
  baseline: createVisual('Baseline', '#d9c5bc', '#aa8176', 'jar'),
};
