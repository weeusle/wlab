import{A as r,b as e}from"./lit-element-Cn7T8F1W.js";import{e as l}from"./class-map-Cz4dDfRf.js";import{o as d}from"./style-map-Dtks8l3O.js";import"./wlab-copyright-DTYIeDEb.js";import"./directive-DTH0hksN.js";function p(o){if(o.config?.design?.hideLogo)return r;const t={badge:!0,"badge--visible":o._badgeVisible};return e`
    <div
      class=${l(t)}
      @mouseenter=${()=>o._onBadgeEnter()}
      @mouseleave=${()=>o._onBadgeLeave()}
    >
      <wl-copyright></wl-copyright>
    </div>
  `}function b(o){if(!o.isOpen)return e`${r}`;const t=o.resolveSettings(),i=o.currentMode(),c={...o.wlVars(t),"--wl-offset-x":`${t.offsetX}px`,"--wl-offset-y":`${t.offsetY}px`},a=o.compactAttr(t),n=o.config,s=n?.policy?.url||n?.policy?.customUrl||"#";return e`
    <div
      class="cookie-wrap"
      style=${d(c)}
      data-layout=${t.layout}
      data-mode=${i}
      data-position=${t.position}
      data-compact=${a}
      ?data-closing=${o._closing}
    >
      ${p(o)}
      <div
        class="cookie"
        role="region"
        aria-label="Согласие на использование cookie"
        data-layout=${t.layout}
        data-compact=${a}
        @mouseenter=${()=>o._onBarEnter()}
        @mouseleave=${()=>o._onBarLeave()}
      >
        <a
          class="cookie__text cookie__text--link"
          href=${s}
          target="_blank"
          rel="noopener"
          >${t.mainText}</a
        >
        <button
          class="cookie__btn"
          type="button"
          @click=${()=>o.onAccept()}
          aria-label=${t.buttonText}
        >
          <span class="cookie__btn-label">${t.buttonText}</span>
        </button>
      </div>
    </div>
  `}export{p as renderBadge,b as renderRoot};
