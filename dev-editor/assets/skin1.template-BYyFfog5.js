import{A as o,b as a}from"./lit-element-Cn7T8F1W.js";import{e as $}from"./class-map-CwBx3DFz.js";import{renderIcon as d}from"./icons-BvP0EE4M.js";import"./wlab-copyright-DS2BbYjn.js";function p(e,t,n){const s=e.posterOf(t),r=e.currentSrc(t);return r?a`
      <video
        class="wl-media"
        part="media"
        src=${r}
        ?autoplay=${t.autoplay}
        ?loop=${n}
        .muted=${e._muted}
        playsinline
        preload="metadata"
        @loadedmetadata=${i=>e._onMetadataLoaded(i)}
        @loadeddata=${i=>e._onLoadedData(i)}
        @timeupdate=${i=>e._onTimeUpdate(i)}
        @ended=${()=>e._onEnded()}
        @play=${()=>e._markPlaying()}
      ></video>
    `:a`<img class="wl-media" src=${s} alt="" />`}function l(e,t,n,s){return a`
    <button
      class="wl-chip ${n}"
      type="button"
      aria-label=${t}
      @click=${r=>{r.stopPropagation(),s()}}
    >
      ${d(e)}
    </button>
  `}function _(e){if(e.config?.design?.hideLogo===!0)return o;const t={badge:!0,"badge--visible":e._badgeVisible};return a`
    <div
      class=${$(t)}
      @mouseenter=${()=>e._onBadgeEnter()}
      @mouseleave=${()=>e._onBadgeLeave()}
    >
      <wl-copyright></wl-copyright>
    </div>
  `}function b(e,t){const n=`${e._uid}-offer`;return a`
    <div class="wl-card wl-card--offer" role="group" aria-labelledby=${n}>
      <h3 id=${n} class="wl-card__title">${t.offerTitle}</h3>
      <p class="wl-card__subtitle">${t.offerSubtitle}</p>
      ${t.showPrimary?a`
            <a
              class="wl-btn wl-btn--primary"
              href=${t.primaryUrl}
              target="_blank"
              rel="noopener noreferrer"
              @click=${()=>e._onCtaActivate()}
            >
              <span class="wl-btn__label">${t.primaryLabel}</span>
              <span class="wl-btn__icon" aria-hidden="true">${d("ruble")}</span>
            </a>
          `:o}
      ${t.showSecondary?a`
            <a
              class="wl-btn wl-btn--secondary"
              href=${t.secondaryUrl}
              target="_blank"
              rel="noopener noreferrer"
              @click=${()=>e._onCtaActivate()}
            >
              <span class="wl-btn__label">${t.secondaryLabel}</span>
              <span class="wl-btn__icon" aria-hidden="true">${d("edit")}</span>
            </a>
          `:o}
    </div>
  `}function m(e,t){const n=t.skin;return a`
    <div class="wl-bubble" data-skin=${n} @mouseenter=${()=>e._onBubbleHover()}>
      <button
        class="wl-bubble__open"
        type="button"
        aria-label="Развернуть видео"
        aria-expanded="false"
        @click=${()=>e._expand()}
      >
        ${p(e,t,!0)}
        ${n==="rect"?a`
              <span class="wl-mini-progress" aria-hidden="true">
                <span class="wl-mini-progress__fill" style=${`width:${e._progress*100}%`}></span>
              </span>
            `:o}
      </button>

      ${t.muted?o:l(e._muted?"volume-x":"volume-2",e._muted?"Включить звук":"Выключить звук","wl-chip--mute",()=>e._toggleMute())}
      ${l("x-close","Закрыть","wl-chip--close",()=>e._dismiss())}
    </div>
  `}function w(e,t){const n=e.playlist(t),s=t.showPrimary||t.showSecondary,r=n.length>1,i=n.length<=1?t.loop:!1;return a`
    <section
      class="wl-player"
      aria-label="Видеоплеер"
      data-cta=${s?"offer":"none"}
      @mouseenter=${()=>e._onWidgetEnter()}
      @mouseleave=${()=>e._onWidgetLeave()}
    >
      ${p(e,t,i)}
      <div class="wl-scrim" aria-hidden="true"></div>

      ${r?a`
            <div class="wl-segments" role="presentation">
              ${n.map((f,c)=>a`
                  <span
                    class="wl-segments__seg"
                    @click=${u=>{u.stopPropagation(),e._goToVideo(c)}}
                  >
                    <span
                      class="wl-segments__fill"
                      style=${`width:${c<e._videoIndex?100:c===e._videoIndex?e._progress*100:0}%`}
                    ></span>
                  </span>
                `)}
            </div>
          `:o}

      ${r?a`
            <button
              class="wl-nav wl-nav--prev"
              type="button"
              aria-label="Предыдущее видео"
              @click=${()=>e._prevVideo()}
            ></button>
            <button
              class="wl-nav wl-nav--next"
              type="button"
              aria-label="Следующее видео"
              @click=${()=>e._nextVideo()}
            ></button>
          `:o}

      <div class="wl-controls wl-controls--left">
        ${l(e._playing?"pause":"play",e._playing?"Пауза":"Воспроизвести","wl-chip--play",()=>e._togglePlay())}
        ${t.muted?o:l(e._muted?"volume-x":"volume-2",e._muted?"Включить звук":"Выключить звук","wl-chip--mute",()=>e._toggleMute())}
      </div>

      ${l("minimize","Свернуть","wl-chip--min",()=>e._collapse())}

      ${!t.muted&&(!s||!e._ctaVisible)&&e._muted?a`
            <button
              class="wl-unmute"
              type="button"
              aria-label="Включить звук"
              @click=${()=>e._toggleMute()}
            >
              ${d("volume-x")}
            </button>
          `:o}

      ${s&&e._ctaVisible?b(e,t):o}

      ${_(e)}

      <div class="wl-scrubber" aria-hidden="true">
        <span class="wl-scrubber__fill" style=${`width:${e._progress*100}%`}></span>
      </div>
    </section>
  `}function k(e){if(!e.config?.design||e._dismissed)return a`${o}`;const t=e.resolved(),n=e.currentMode(),s=e.isOpen&&t.position==="center";return a`
    ${s?a`<div class="wl-backdrop" @click=${()=>e._collapse()}></div>`:o}
    <div class="wl-host"
      style=${`--wl-offset-x:${t.offsetX}px;--wl-offset-y:${t.offsetY}px`}
      data-position=${t.position} data-mode=${n} data-open=${e.isOpen}>
      ${e.isOpen?w(e,t):m(e,t)}
    </div>
  `}export{_ as renderBadge,l as renderChip,m as renderCollapsed,w as renderExpanded,p as renderMedia,b as renderOfferCard,k as renderRoot};
