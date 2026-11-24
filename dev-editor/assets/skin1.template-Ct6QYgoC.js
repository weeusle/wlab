import{A as i,b as n}from"./lit-element-Cn7T8F1W.js";import{e as u}from"./class-map-Cz4dDfRf.js";import{renderIcon as l}from"./icons-BvP0EE4M.js";import"./wlab-copyright-DTYIeDEb.js";import"./directive-DTH0hksN.js";function $(e,t,a){const s=e.posterOf(t),r=e.currentSrc(t);return r?n`
      <video
        class="wl-media"
        part="media"
        src=${r}
        ?autoplay=${t.autoplay}
        ?loop=${a}
        .muted=${e._muted}
        playsinline
        preload="metadata"
        @loadedmetadata=${o=>e._onMetadataLoaded(o)}
        @loadeddata=${o=>e._onLoadedData(o)}
        @error=${()=>e._onMediaError()}
        @timeupdate=${o=>e._onTimeUpdate(o)}
        @ended=${()=>e._onEnded()}
        @play=${()=>e._markPlaying()}
      ></video>
    `:n`<img class="wl-media" src=${s} alt="" />`}function p(e,t,a,s){return n`
    <button
      class="wl-chip ${a}"
      type="button"
      aria-label=${t}
      @click=${r=>{r.stopPropagation(),s()}}
    >
      ${l(e)}
    </button>
  `}function _(e){if(e.config?.design?.hideLogo===!0)return i;const t={badge:!0,"badge--visible":e._badgeVisible};return n`
    <div
      class=${u(t)}
      @pointerenter=${a=>{a.pointerType==="mouse"&&e._onBadgeEnter()}}
      @pointerleave=${a=>{a.pointerType==="mouse"&&e._onBadgeLeave()}}
    >
      <wl-copyright></wl-copyright>
    </div>
  `}function m(e,t){const a=`${e._uid}-offer`;return n`
    <div class="wl-card wl-card--offer" role="group" aria-labelledby=${a}>
      <h3 id=${a} class="wl-card__title">${t.offerTitle}</h3>
      <p class="wl-card__subtitle">${t.offerSubtitle}</p>
      ${t.showPrimary?n`
            <a
              class="wl-btn wl-btn--primary"
              href=${t.primaryUrl}
              target="_blank"
              rel="noopener noreferrer"
              @click=${()=>e._onCtaActivate()}
            >
              <span class="wl-btn__label">${t.primaryLabel}</span>
              <span class="wl-btn__icon" aria-hidden="true">${l("ruble")}</span>
            </a>
          `:i}
      ${t.showSecondary?n`
            <a
              class="wl-btn wl-btn--secondary"
              href=${t.secondaryUrl}
              target="_blank"
              rel="noopener noreferrer"
              @click=${()=>e._onCtaActivate()}
            >
              <span class="wl-btn__label">${t.secondaryLabel}</span>
              <span class="wl-btn__icon" aria-hidden="true">${l("edit")}</span>
            </a>
          `:i}
    </div>
  `}function b(e,t){const a=t.skin;return n`
    <button
      class="wl-bubble__open"
      type="button"
      aria-label="Развернуть видео"
      aria-expanded="false"
      @click=${()=>e._expand()}
    ></button>
    ${a==="rect"?n`
          <span class="wl-mini-progress" aria-hidden="true">
            <span class="wl-mini-progress__fill" style=${`width:${e._progress*100}%`}></span>
          </span>
        `:i}
    ${t.muted?i:p(e._muted?"volume-x":"volume-2",e._muted?"Включить звук":"Выключить звук","wl-chip--mute",()=>e._toggleMute())}
    ${p("x-close","Закрыть","wl-chip--close",()=>e._dismiss())}
  `}function w(e,t){const a=e.playlist(t),s=t.showPrimary||t.showSecondary,r=a.length>1;return n`
    <div class="wl-scrim" aria-hidden="true"></div>

      ${r?n`
            <div class="wl-segments" role="presentation">
              ${a.map((o,d)=>n`
                  <span
                    class="wl-segments__seg"
                    @click=${c=>{c.stopPropagation(),e._goToVideo(d)}}
                  >
                    <span
                      class="wl-segments__fill"
                      style=${`width:${d<e._videoIndex?100:d===e._videoIndex?e._progress*100:0}%`}
                    ></span>
                  </span>
                `)}
            </div>
          `:i}

      ${r?n`
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
          `:i}

      <div class="wl-controls wl-controls--left">
        ${p(e._playing?"pause":"play",e._playing?"Пауза":"Воспроизвести","wl-chip--play",()=>e._togglePlay())}
        ${t.muted?i:p(e._muted?"volume-x":"volume-2",e._muted?"Включить звук":"Выключить звук","wl-chip--mute",()=>e._toggleMute())}
      </div>

      ${p("minimize","Свернуть","wl-chip--min",()=>e._collapse())}

      ${!t.muted&&(!s||!e._ctaVisible)&&e._muted?n`
            <button
              class="wl-unmute"
              type="button"
              aria-label="Включить звук"
              @click=${()=>e._toggleMute()}
            >
              ${l("volume-x")}
            </button>
          `:i}

      ${s&&e._ctaVisible?m(e,t):i}

      ${_(e)}

    <div class="wl-scrubber" aria-hidden="true">
      <span class="wl-scrubber__fill" style=${`width:${e._progress*100}%`}></span>
    </div>
  `}function f(e,t){const a=e.playlist(t),s=e._expanded?a.length<=1?t.loop:!1:!0,r={"wl-stage":!0,"wl-player":e._expanded,"wl-bubble":!e._expanded};return n`
    <section
      class=${u(r)}
      data-skin=${t.skin}
      data-cta=${t.showPrimary||t.showSecondary?"offer":"none"}
      aria-label=${e._expanded?"Видеоплеер":i}
      @mouseenter=${()=>{e._expanded||e._onBubbleHover()}}
      @pointerenter=${o=>{e._expanded&&o.pointerType==="mouse"&&e._onWidgetEnter()}}
      @pointerleave=${o=>{e._expanded&&o.pointerType==="mouse"&&e._onWidgetLeave()}}
      @pointerup=${o=>{e._expanded&&e._onWidgetTap(o)}}
    >
      ${$(e,t,s)}
      ${e._expanded?w(e,t):b(e,t)}
    </section>
  `}function k(e){if(!e.config?.design||e._dismissed)return n`${i}`;if(!e.isOpen)return n`${i}`;const t=e.resolved(),a=e.currentMode(),s=e._expanded&&t.position==="center",r=e._mediaAspectRatio,o=e.mediaBox(),d=o.miniWidth,c=o.playerWidth;return n`
    ${s?n`<div class="wl-backdrop" @click=${()=>e._collapse()}></div>`:i}
    <div class="wl-host"
      style=${`--wl-offset-x:${t.offsetX}px;--wl-offset-y:${t.offsetY}px;--wl-media-aspect:${r};--wl-mini-width:${d}px;--wl-player-width:${c}px`}
      data-position=${t.position} data-mode=${a} data-open=${e._expanded}
      data-media-ready=${e._mediaAspectReady}>
      ${f(e,t)}
    </div>
  `}export{_ as renderBadge,p as renderChip,b as renderCollapsedChrome,w as renderExpandedChrome,$ as renderMedia,m as renderOfferCard,k as renderRoot,f as renderStage};
