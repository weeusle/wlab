import{A as r,b as e}from"./lit-element-Cn7T8F1W.js";import{e as u}from"./class-map-CwBx3DFz.js";import"./wlab-copyright-DS2BbYjn.js";const $="Вы соглашаетесь с использованием cookies и";function b(t){return String(t.config?.texts?.mainText??"").trim()}function g(t){return t.config?.texts?.buttonText||"Принять"}function f(t,o){return e`<button class="btn btn--accept" type="button" @click=${()=>t.close()}>
    ${o}
  </button>`}function p(t,o){const i=String(t.config?.texts?.policy??"").trim(),n=$.split(/\s+/).filter(Boolean);let s=n.join(" "),c="";return i&&n.length>=2&&n[n.length-1].length<=3&&(c=n[n.length-1],s=n.slice(0,-1).join(" ")),e`<p class="policy">${s}${s&&i?e`<br />`:r}${c?`${c} `:""}${i?e`<a
        class="policy__link"
        href=${o.policyUrl}
        target="_blank"
        rel="noopener noreferrer"
        >${i}</a
      >`:r}</p>`}function _(t){return t?e`<img class="bar__glyph-img" src=${t} alt="" aria-hidden="true" />`:r}function v(t){if(t.config?.design?.hideLogo)return r;const o={"wl-badge":!0,"wl-badge--visible":t._badgeVisible};return e`<div
    class=${u(o)}
    @mouseenter=${()=>t._onBadgeEnter()}
    @mouseleave=${()=>t._onBadgeLeave()}
  >
    <wl-copyright></wl-copyright>
  </div>`}function m(t,o){const i=o.barWidth==="full",n=o.barWidth==="mini",s=o.icon?e`<div class="bar__lead">${_(o.icon)}</div>`:r,c=e`<p class="title">${b(t)}</p>`,a=o.showPolicy?p(t,o):r,l=e`<div class="bar__actions">
    ${f(t,g(t))}
  </div>`,d=i?e`<div class="bar__text">${c}${a}</div>
        <div class="bar__spacer"></div>`:e`<div class="bar__text">${c}${a}</div>`;return e`<div
    class="root root--bar ${i?"root--full":"root--auto"}"
    role="region"
    aria-label="Согласие на использование cookies"
    data-position=${o.position}
    data-fit=${i?"full":n?"stack":"auto"}
    @mouseenter=${()=>t._onRootEnter()}
    @mouseleave=${()=>t._onRootLeave()}
  >
    ${s}${d}${l}${v(t)}
  </div>`}function x(t){return t.isOpen?m(t,t.resolvedSettings):r}export{x as renderRoot};
