import{A as s,b as o}from"./lit-element-Cn7T8F1W.js";import{e as i}from"./class-map-Cz4dDfRf.js";import{o as b}from"./style-map-Dtks8l3O.js";import"./wlab-copyright-DTYIeDEb.js";import"./directive-DTH0hksN.js";function g(){return o`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" />
  </svg>`}function _(){return o`<svg class="wl-code__copy" width="20" height="20" viewBox="0 0 22 22" fill="none">
    <rect x="7.2" y="7.2" width="11.6" height="11.6" rx="3" stroke="currentColor" stroke-width="1.8" />
    <path
      d="M14.6 4.4a2.2 2.2 0 0 0-1.6-.7H6.2a2.5 2.5 0 0 0-2.5 2.5v6.8c0 .62.25 1.18.66 1.58"
      stroke="currentColor"
      stroke-width="1.8"
      stroke-linecap="round"
    />
  </svg>`}function d(t,e){return o`<svg class=${t} width=${e} height=${e} viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path
      d="M3.4 8.3l3.1 3.1 6.1-6.7"
      stroke="currentColor"
      stroke-width="2.2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>`}function x(t){if(!t.isOpen)return o`${s}`;const e=t.config?.texts??{},p=e.title??"",u=e.subtitle??"",l=t.promoCode,r=t.iconUrl,n=t.ctaUrl,a=r!=="",c=t.hasCta,h=b({"--wl-radius":`${t.radius}px`}),w={"wl-popup":!0,"is-flat":!a},$={"wl-code-wrap":!0,"is-copied":t._copied,"no-cta":!c},v={"wl-badge":!0,"is-shown":t._badgeVisible};return o`
    <div class="wl-scope" data-mode=${t.colorMode} style=${h}>
      <div class="wl-overlay" @click=${()=>t._onClose()}></div>

      <div
        class=${i(w)}
        role="dialog"
        aria-modal="true"
        aria-labelledby="wl-promo-code-title"
        @mouseenter=${()=>t._onPopupEnter()}
        @mouseleave=${()=>t._onPopupLeave()}
      >
        ${a?o`<span class="wl-glow" aria-hidden="true"></span>`:s}

        <button type="button" class="wl-close" aria-label="Закрыть" @click=${()=>t._onClose()}>
          ${g()}
        </button>

        <div class="wl-body">
          <h2 class="wl-title" id="wl-promo-code-title">${p}</h2>
          <p class="wl-text">${u}</p>

          <div class=${i($)}>
            <button
              type="button"
              class="wl-code"
              aria-label=${`Скопировать промокод ${l}`}
              @click=${()=>t._onCopy()}
            >
              <span class="wl-code__value">${l}</span>
              <span class="wl-code__btn" aria-hidden="true">
                ${_()}
                ${d("wl-code__check",20)}
              </span>
            </button>

            <p class="wl-status" role="status">
              ${t._copied?o`${d("wl-status__check",16)}<span>Промокод скопирован</span>`:s}
            </p>
          </div>

          ${c?o`
                ${n?o`<a
                  class="wl-cta"
                  href=${n}
                  target="_blank"
                  rel="noopener noreferrer"
                  @click=${()=>t._onCtaClick()}
                >${t.ctaLabel}</a>`:o`<button
                  class="wl-cta"
                  type="button"
                  disabled
                  title="Добавьте ссылку в настройках кнопки"
                >${t.ctaLabel}</button>`}
              `:s}
        </div>

        ${a?o`
              <div class="wl-art">
                <img
                  class="wl-art__img"
                  src=${r}
                  alt=""
                  aria-hidden="true"
                  @error=${()=>t._onIconError(r)}
                />
              </div>
            `:s}

        ${t.config?.design?.hideLogo?s:o`
              <div class=${i(v)}>
                <wl-copyright></wl-copyright>
              </div>
            `}
      </div>
    </div>
  `}export{x as renderRoot};
