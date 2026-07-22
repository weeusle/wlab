import{A as n,b as a}from"./lit-element-Cn7T8F1W.js";import{e as y}from"./class-map-CwBx3DFz.js";import{renderMessengerGlyph as T,renderPhoneGlyph as C}from"./icons-HRsI-AR5.js";import{brandOf as h}from"./design-tokens-CtanWdF9.js";import"./wlab-copyright-DS2BbYjn.js";import"./color-utils-CXJK6gtN.js";function L(s){if(s.config?.design?.hideLogo)return n;const e={"wl-badge":!0,"wl-badge--visible":s._badgeVisible};return a`
    <div
      class=${y(e)}
      @mouseenter=${()=>s._onBadgeEnter()}
      @mouseleave=${()=>s._onBadgeLeave()}
    >
      <wl-copyright></wl-copyright>
    </div>
  `}function E(s){if(!s.isOpen)return a`${n}`;const e=s.resolved(),t=s.config?.texts??{},p=t.messengerText||`Написать в ${h(e.messenger).label}`,u=t.callText||"Позвонить",r=t.phone||"",b=t.customText||"Подробнее",d=t.badgeText||"",m=r.replace(/[^\d+]/g,""),g=m.length>0,f=`${p} — ${h(e.messenger).label}`,c=e.showBadge&&!!d,o=[];e.showCustom&&o.push("custom"),e.showMessenger&&o.push("messenger"),e.showCall&&g&&o.push("call");const l=o[0],i=a`<span class="badge">${d}</span>`,$=Math.round(e.borderRadius/2),_=Math.max(0,$-4),x=`--bar-radius:${$}px;--item-radius:${_}px;--off-x:${e.offsetX}px;--off-y:${e.offsetY}px;`,k=a`
    <a
      class="btn btn--msg"
      href=${e.messengerUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label=${f}
      @click=${()=>s._trackMessengerClick()}
    >
      <span class="btn__icon" aria-hidden="true">${T(e.messenger)}</span>
      <span class="btn__label">${p}</span>
      ${c&&l==="messenger"?i:n}
    </a>
  `,w=g?a`
        <a
          class="btn btn--phone"
          href=${`tel:${m}`}
          aria-label=${`Позвонить по номеру ${r}`}
          @click=${()=>s._trackPhoneClick()}
        >
          <span class="btn__icon" aria-hidden="true">${C()}</span>
          <span class="btn__label btn__label--number">${r}</span>
          <span class="btn__label btn__label--call">${u}</span>
          ${c&&l==="call"?i:n}
        </a>
      `:n,v=a`
    <a
      class="btn btn--custom"
      href=${e.customUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label=${b}
      @click=${()=>s._trackPhoneClick()}
    >
      <span class="btn__label">${b}</span>
      ${c&&l==="custom"?i:n}
    </a>
  `;return a`
    <div class="bar-wrap" data-position=${e.position} style=${x}>
      ${L(s)}
      <div
        class="bar"
        role="region"
        aria-label="Связаться с нами"
        data-messenger=${e.messenger}
        data-phone=${e.phoneStyle}
        data-compact=${e.compact}
        @mouseenter=${()=>s._onWidgetEnter()}
        @mouseleave=${()=>s._onWidgetLeave()}
      >
        ${e.showCustom?v:n}
        ${e.showMessenger?k:n}
        ${e.showCall?w:n}
      </div>
    </div>
  `}export{L as renderBadge,E as renderRoot};
