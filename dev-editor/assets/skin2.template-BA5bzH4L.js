import{A as a,b as n}from"./lit-element-Cn7T8F1W.js";import{e as T}from"./class-map-CwBx3DFz.js";import{renderMessengerGlyph as y,renderPhoneGlyph as L}from"./icons-CTu5bcYH.js";import{brandOf as _}from"./design-tokens-CpZqxxmU.js";import"./wlab-copyright-DS2BbYjn.js";import"./color-utils-CXJK6gtN.js";function B(s){if(s.config?.design?.hideLogo)return a;const e={"wl-badge":!0,"wl-badge--visible":s._badgeVisible};return n`
    <div
      class=${T(e)}
      @mouseenter=${()=>s._onBadgeEnter()}
      @mouseleave=${()=>s._onBadgeLeave()}
    >
      <wl-copyright></wl-copyright>
    </div>
  `}function G(s){if(!s.isOpen)return n`${a}`;const e=s.resolved(),t=s.config?.texts??{},d=_(e.messenger).label,m=t.messengerText||`Написать в ${d}`,h=t.callText||"Позвонить",r=t.phone||"",p=t.customText||"Подробнее",g=t.badgeText||"",$=r.replace(/[^\d+]/g,""),b=$.length>0,c=e.showBadge&&!!g,o=[];e.showCustom&&o.push("custom"),e.showMessenger&&o.push("messenger"),e.showCall&&b&&o.push("call");const l=o[0],i=n`<span class="badge">${g}</span>`,u=Math.round(e.borderRadius/2),f=Math.max(0,u-10),x=`--bar-radius:${u}px;--disc-radius:${f}px;--off-x:${e.offsetX}px;--off-y:${e.offsetY}px;`,w=n`
    <a
      class="item item--msg"
      href=${e.messengerUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label=${`${m} — ${d}`}
      @click=${()=>s.trackAction("messenger")}
    >
      <span class="disc disc--msg" aria-hidden="true">${y(e.messenger)}</span>
      <span class="label label--msg">${m}</span>
      ${c&&l==="messenger"?i:a}
    </a>
  `,v=b?n`
        <a
          class="item item--call"
          href=${`tel:${$}`}
          aria-label=${`Позвонить по номеру ${r}`}
          @click=${()=>s.trackAction("call")}
        >
          <span class="disc disc--call" aria-hidden="true">${L()}</span>
          <span class="label label--number">${r}</span>
          <span class="label label--call">${h}</span>
          ${c&&l==="call"?i:a}
        </a>
      `:a,k=n`
    <a
      class="item item--custom"
      href=${e.customUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label=${p}
      @click=${()=>s.trackAction("call")}
    >
      <span class="label label--custom">${p}</span>
      ${c&&l==="custom"?i:a}
    </a>
  `;return n`
    <div
      class="bar-wrap"
      data-position=${e.position}
      style=${x}
      @mouseenter=${()=>s._onWidgetEnter()}
      @mouseleave=${()=>s._onWidgetLeave()}
    >
      ${B(s)}
      <div
        class="bar"
        role="region"
        aria-label="Связаться с нами"
        data-messenger=${e.messenger}
        data-compact=${e.compact}
      >
        ${e.showCustom?k:a}
        ${e.showMessenger?w:a}
        ${e.showCall?v:a}
      </div>
    </div>
  `}export{B as renderBadge,G as renderRoot};
