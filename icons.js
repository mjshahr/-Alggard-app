// آیکون‌های SVG و پالت رنگ هر دسته — مشترک بین index.html و admin.html
/* ============ icons ============ */
function iconSvg(name){
  const icons = {
    mountain:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 20l6-11 4 6 2-3 6 8H3z"/></svg>',
    waterfall:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 3h16M6 3v9c0 2 1 3 3 3M12 3v6c0 2 1 3 3 3M18 3v13c0 2-1 3-3 3M6 21h12"/></svg>',
    dam:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 10h18M3 10l3-6h12l3 6M3 10v4a6 6 0 0012 0M15 14a6 6 0 006-4"/></svg>',
    shrine:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2c2 2 3 4 3 6a3 3 0 01-6 0c0-2 1-4 3-6zM5 21V12l7-4 7 4v9M9 21v-6h6v6"/></svg>',
    tulip:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 12c-3 0-4-3-3-6 1 2 2 2 3 1-1-2 0-4 3-4-1 2 0 3 1 3 2-1 4 1 3 3-2-1-3 0-3 2 3-1 5 1 4 3-3-1-5 0-5 3M12 12v9"/></svg>',
    lion:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 3-7 8-7s8 3 8 7M9 8a1 1 0 102 0 1 1 0 00-2 0zM13 8a1 1 0 102 0 1 1 0 00-2 0z"/></svg>',
    fire:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2c1 4-3 5-3 9a3 3 0 006 0c0-1-1-2-1-3 2 1 3 3 3 5a5 5 0 01-10 0c0-5 3-6 5-11z"/></svg>',
    lake:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 18c2-2 3-2 5 0s3 2 5 0 3-2 5 0 3-2 5 0M7 12l4-8 3 5 2-3 3 6"/></svg>',
    road:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 3L4 21M15 3l5 18M12 8v2m0 4v2"/></svg>',
    signal:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 20h2v-4H3v4zM8 20h2v-9H8v9zM13 20h2v-14h-2v14zM18 20h2V4h-2v16z"/></svg>',
    calendar:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/></svg>',
    gear:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19 12a7 7 0 00-.2-1.6l2-1.5-2-3.4-2.3.9a7 7 0 00-2.8-1.6L13.3 2h-2.6l-.4 2.8a7 7 0 00-2.8 1.6l-2.3-.9-2 3.4 2 1.5A7 7 0 005 12c0 .5 0 1.1.2 1.6l-2 1.6 2 3.4 2.3-1a7 7 0 002.8 1.7l.4 2.7h2.6l.4-2.7a7 7 0 002.8-1.7l2.3 1 2-3.4-2-1.6c.2-.5.2-1.1.2-1.6z"/></svg>',
    pin:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 21s7-6.5 7-12a7 7 0 10-14 0c0 5.5 7 12 7 12z"/><circle cx="12" cy="9" r="2.5"/></svg>',
    info:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 16v-5M12 8h.01"/></svg>'
  };
  return icons[name] || icons.pin;
}
const CAT_COLORS = {
  mountain:['#2b3a55','#7c9a7e'], waterfall:['#123f4f','#2ba7c7'], dam:['#1b3b5f','#3f8fc0'],
  shrine:['#4a2c1a','#b9803f'], tulip:['#5c1a1a','#c0272b'], lion:['#3a3226','#a9793c'],
  fire:['#4a1f12','#d9762e'], lake:['#16324a','#3fa796']
};
function bannerHTML(icon){
  const c = CAT_COLORS[icon] || ['#333','#777'];
  return `<div class="banner" style="background:linear-gradient(150deg,${c[0]},${c[1]})">
    <div class="watermark">${iconSvg(icon)}</div>
    <div class="ridge"></div>
    <div class="badge-ico">${iconSvg(icon)}</div>
  </div>`;
}
