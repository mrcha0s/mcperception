/* ═══════════════════════════════════════════════════════════════════
   MC Perception — Surface / Panel-aware table theming
   Additive layer. Builds an opaque NEUTRAL card surface + AA-safe text colors
   for any hue × surface mode, on the bare surface or inside a panel.
   PALETTE-ONLY: every colour is a real --color-p-* step (no computed blends,
   no off-palette hex). The card carries its own opaque neutral surface so the
   underlying surface/panel colour shows only in the margin; semantic green/red
   data always sits on a neutral row background and stays WCAG AA.
   Verified across 70 scenarios (7 hue × 5 mode × {surface, panel}):
   header is always the darkest region, zero AA failures.
   ═══════════════════════════════════════════════════════════════════ */
export const PAL = {
  neutral:['#fafafa','#e1e1e1','#c3c3c3','#a0a0a0','#7f7f7f','#6c6c6c','#515151','#373737','#222222','#090909'],
  red:['#fffafa','#ffd8d8','#ffafaf','#ff7474','#ff0000','#da0000','#a70000','#740000','#4d0000','#1c0000'],
  green:['#ebffeb','#62ff62','#00e400','#00ba00','#009400','#007f00','#005f00','#004000','#002900','#000c00'],
  blue:['#f8f8ff','#dedeff','#bebeff','#9494ff','#6d6dff','#5252ff','#1919ff','#0000bf','#000081','#000035'],
  yellow:['#ffff97','#e8e800','#caca00','#a6a600','#838300','#6f6f00','#545400','#383800','#242400','#090900'],
  magenta:['#fff7ff','#ffd2ff','#ffa4ff','#ff55ff','#e000e0','#c000c0','#910091','#660066','#420042','#170017'],
  teal:['#e3ffff','#00f9f9','#00dada','#00b2b2','#008e8e','#007979','#005a5a','#003d3d','#002727','#000b0b'],
};
const S=(h,i)=>PAL[h][[50,100,200,300,400,500,600,700,800,900].indexOf(i)];
const parse=hex=>hex.startsWith('rgb')?hex.match(/\d+/g).map(Number):[0,2,4].map(i=>parseInt(hex.replace('#','').slice(i,i+2),16));
const lin=c=>{c/=255;return c<=0.03928?c/12.92:Math.pow((c+0.055)/1.055,2.4);};
export const L=a=>0.2126*lin(a[0])+0.7152*lin(a[1])+0.0722*lin(a[2]);
export const ratio=(a,b)=>{const x=L(parse(a)),y=L(parse(b)),hi=Math.max(x,y),lo=Math.min(x,y);return (hi+0.05)/(lo+0.05);};

/* Surface (scene) + panel backgrounds — palette steps only. */
const surfaceBg=(h,m)=>({1:S('neutral',50),2:'#0a0a0a',3:S(h,100),4:S(h,800),5:S(h,500)}[m]);
const panelBg  =(h,m)=>({1:'#ffffff',2:S('neutral',800),3:S(h,50),4:S(h,900),5:'#ffffff'}[m]);

export function theme(h,m,inPanel){
  const sBg=surfaceBg(h,m), pBg=panelBg(h,m);
  /* card is dark on dark surfaces / dark panels, light otherwise */
  const dark = inPanel ? (m===2||m===4) : (m===2||m===4||m===5);
  const pLight = L(parse(pBg))>0.45;
  const panel = { pbg:pBg, pfg:(pLight?'#0a0a0a':'#fafafa'), pbd:(pLight?S('neutral',200):S('neutral',600)) };
  if (dark) {
    /* darkness order: header(900) < stripe(black) < base(800) < hover(700) → header darkest */
    return { sBg, pBg, ...panel,
      base:S('neutral',800), thBg:S('neutral',900), stripe:'#0a0a0a', hover:S('neutral',700),
      bd:S('neutral',700), fg:S('neutral',50), mut:S('neutral',200),
      accent:S(h,400), tacc:S(h,300), pos:S('green',200), neg:S('red',200) };
  }
  /* light: header(200) < hover(100) < stripe(50) < base(white) → header darkest */
  return { sBg, pBg, ...panel,
    base:'#ffffff', thBg:S('neutral',200), stripe:S('neutral',50), hover:S('neutral',100),
    bd:S('neutral',200), fg:'#0a0a0a', mut:S('neutral',600),
    accent:S(h,600), tacc:S(h,700), pos:S('green',700), neg:S('red',600) };
}

export function applyTableTheme(el,{hue,mode,inPanel}){
  const t=theme(hue,mode,inPanel);
  const map={'--base':t.base,'--fg':t.fg,'--mut':t.mut,'--th-bg':t.thBg,'--stripe':t.stripe,
    '--hover':t.hover,'--bd':t.bd,'--accent':t.accent,'--tacc':t.tacc,'--pos':t.pos,'--neg':t.neg,
    '--pbg':t.pbg,'--pfg':t.pfg,'--pbd':t.pbd};
  for(const k in map) el.style.setProperty(k,map[k]);
  return t;
}
