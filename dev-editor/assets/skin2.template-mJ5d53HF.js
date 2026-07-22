import{A as a,b as e}from"./lit-element-Cn7T8F1W.js";import{e as $}from"./class-map-CwBx3DFz.js";import{o as m}from"./style-map-C_AK3hrM.js";import"./wlab-copyright-DS2BbYjn.js";function v(){return e`<svg
    class="banner__arrow"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path d="M4 12H20M14 18L20 12L14 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
  </svg>`}function f(n){return n<=0?"0px":`${Math.max(2,Math.round(n*.12))}px`}function y(n){if(!n.isOpen)return e`${a}`;const s=n.config?.texts??{},r=n.config?.settings??{},c=n.anchorEdge,t=r.linkEnabled!==!1?(r.link??"").trim():"",o=(s.badgeText??"").trim(),i=s.mainText??"",l=!o&&!t?"textOnly":"default",g=typeof r.borderRadius=="number"?r.borderRadius:50,b=m({"--wl-badge-radius":f(g)}),d=e`
    ${t?e`<span class="banner__overlay"></span>`:a}
    ${o?e`
          <span class="banner__badge">
            <span class="banner__badge-text">${o}</span>
          </span>
        `:a}
    <span class="banner__message">${i}</span>
    ${t?v():a}
  `,p=t?e`
        <a
          class="banner"
          href=${t}
          target="_blank"
          rel="noopener noreferrer"
          aria-label=${i}
          @click=${()=>n._onBannerClick()}
        >${d}</a>
      `:e`<div class="banner">${d}</div>`,u={badge:!0,"badge--visible":n._badgeVisible};return e`
    <div
      class="banner-root"
      data-position=${c}
      data-variant=${l}
      style=${b}
      @mouseenter=${()=>n._onWidgetEnter()}
      @mouseleave=${()=>n._onWidgetLeave()}
    >
      ${p}

      ${n.config?.design?.hideLogo?a:e`
            <div
              class=${$(u)}
              @mouseenter=${()=>n._onBadgeEnter()}
              @mouseleave=${()=>n._onBadgeLeave()}
            >
              <wl-copyright></wl-copyright>
            </div>
          `}
    </div>
  `}export{y as renderRoot};
