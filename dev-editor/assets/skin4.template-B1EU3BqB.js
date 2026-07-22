import{A as c,b as t}from"./lit-element-Cn7T8F1W.js";import{e as s}from"./class-map-CwBx3DFz.js";import{o as d}from"./style-map-C_AK3hrM.js";import{renderCookie as a}from"./icons-CLuBLSyx.js";import"./wlab-copyright-DS2BbYjn.js";import"./cookie-asset-Bos8jRuX.js";function u(o,e){return t`<button
    class="ck-accept ck-accept--pill"
    type="button"
    aria-label="Принять использование cookie"
    @click=${()=>o.onAccept()}
  >
    <span class="ck-accept__label">${e}</span>
  </button>`}function i(o,e){const n=o.config,r=n?.policy?.url||n?.policy?.customUrl||"#";return t`<a
    class="ck-body ck-body--link"
    href=${r}
    target="_blank"
    rel="noopener"
    >${e}</a
  >`}function l(o){if(o.config?.design?.hideLogo)return c;const e={badge:!0,"badge--visible":o._badgeVisible};return t`
    <div
      class=${s(e)}
      @mouseenter=${()=>o._onBadgeEnter()}
      @mouseleave=${()=>o._onBadgeLeave()}
    >
      <wl-copyright></wl-copyright>
    </div>
  `}function p(o){const e=o.config?.design;return String(e?.icon?.url??"")}function $(o){const e=o.resolveSettings(),n=u(o,e.acceptLabel),r=p(o);return e.variant==="cookie"?t`
      ${i(o,e.cookieText)}
      <span class="ck-cookie-wrap" aria-hidden="true">${a(r)}</span>
      ${n}
    `:e.variant==="icon-left"?t`
      <span class="ck-lead" aria-hidden="true">${a(r)}</span>
      ${i(o,e.cookieText)}
      ${n}
    `:e.variant==="icon-big"?t`
      <span class="ck-lead ck-lead--big" aria-hidden="true">${a(r)}</span>
      ${i(o,e.cookieText)}
      ${n}
    `:t`
    ${i(o,e.cookieText)}
    ${n}
  `}function y(o){if(!o.isOpen)return t`${c}`;const e=o.resolveSettings(),n=d({"--ck-offset-x":`${e.offsetX}px`,"--ck-offset-y":`${e.offsetY}px`,"--ck-radius-scale":`${e.borderRadius/100}`});return t`
    <div
      class="ck"
      role="region"
      aria-label="Согласие на использование cookie"
      style=${n}
      data-variant=${e.variant}
      data-position=${e.position}
      ?data-closing=${o._closing}
      @mouseenter=${()=>o._onBarEnter()}
      @mouseleave=${()=>o._onBarLeave()}
    >
      ${l(o)}
      <div class="ck-card">${$(o)}</div>
    </div>
  `}export{l as renderBadge,$ as renderBody,y as renderRoot};
