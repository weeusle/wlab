import{A as a,b as r}from"./lit-element-Cn7T8F1W.js";import{e as h}from"./class-map-CwBx3DFz.js";import{renderMessengerGlyph as x,renderPhoneGlyph as v}from"./icons-CTu5bcYH.js";import{brandOf as k}from"./design-tokens-mD5NZJPQ.js";import"./wlab-copyright-DS2BbYjn.js";import"./color-utils-CXJK6gtN.js";function w(s){if(s.config?.design?.hideLogo)return a;const e={"wl-badge":!0,"wl-badge--visible":s._badgeVisible};return r`
    <div
      class=${h(e)}
      @mouseenter=${()=>s._onBadgeEnter()}
      @mouseleave=${()=>s._onBadgeLeave()}
    >
      <wl-copyright></wl-copyright>
    </div>
  `}function R(s){if(!s.isOpen)return r`${a}`;const e=s.resolved(),n=s.config?.texts??{},o=k(e.messenger).label,l=n.messengerText||`Написать в ${o}`,m=n.callText||"Позвонить",t=n.phone||"",c=n.customText||"Подробнее",i=t.replace(/[^\d+]/g,""),p=i.length>0,d=Math.round(e.borderRadius/2),$=Math.max(0,d-10),g=`--bar-radius:${d}px;--disc-radius:${$}px;--off-x:${e.offsetX}px;--off-y:${e.offsetY}px;`,b=r`
    <a
      class="item item--msg"
      href=${e.messengerUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label=${`${l} — ${o}`}
      @click=${()=>s.trackAction("messenger")}
    >
      <span class="disc disc--msg" aria-hidden="true">${x(e.messenger)}</span>
      <span class="label label--msg">${l}</span>
    </a>
  `,u=p?r`
        <a
          class="item item--call"
          href=${`tel:${i}`}
          aria-label=${`Позвонить по номеру ${t}`}
          @click=${()=>s.trackAction("call")}
        >
          <span class="disc disc--call" aria-hidden="true">${v()}</span>
          <span class="label label--number">${t}</span>
          <span class="label label--call">${m}</span>
        </a>
      `:a,f=r`
    <a
      class="item item--custom"
      href=${e.customUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label=${c}
      @click=${()=>s.trackAction("call")}
    >
      <span class="label label--custom">${c}</span>
    </a>
  `;return r`
    <div
      class="bar-wrap"
      data-position=${e.position}
      style=${g}
      @mouseenter=${()=>s._onWidgetEnter()}
      @mouseleave=${()=>s._onWidgetLeave()}
    >
      ${w(s)}
      <div
        class="bar"
        role="region"
        aria-label="Связаться с нами"
        data-messenger=${e.messenger}
        data-compact=${e.compact}
      >
        ${e.showCustom?f:a}
        ${e.showMessenger?b:a}
        ${e.showCall?u:a}
      </div>
    </div>
  `}export{w as renderBadge,R as renderRoot};
