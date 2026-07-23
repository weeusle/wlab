import{r as k,A as l,b as a,w as h}from"./lit-element-Cn7T8F1W.js";import{e as w}from"./class-map-CwBx3DFz.js";import{o as b}from"./style-map-C_AK3hrM.js";import{r as d}from"./message-bus-Cdj7KN6I.js";import{W as C,a as $,r as S}from"./base-widget-xiXHSNh_.js";import{submitButtonClick as M}from"./api-client-CDB2DH5T.js";import"./wlab-copyright-DS2BbYjn.js";import{h as P,a as x}from"./color-utils-CXJK6gtN.js";const L=':host{display:block;font-family:var(--wl-font-family, sans-serif)}.stories{position:relative;overflow:visible;font-family:var(--wl-font-family, sans-serif)}.stories[data-display-mode=strip]{position:fixed;left:0;right:0;z-index:999997;padding-left:var(--wl-offset-x, 16px);padding-right:var(--wl-offset-x, 16px)}.stories[data-display-mode=strip][data-position^=top]{top:var(--wl-offset-y, 16px)}.stories[data-display-mode=strip][data-position^=bottom]{bottom:var(--wl-offset-y, 16px)}.stories[data-display-mode=launcher]{position:fixed;right:var(--wl-offset-x, 16px);z-index:999997}.stories[data-display-mode=launcher][data-position^=top]{top:var(--wl-offset-y, 16px)}.stories[data-display-mode=launcher][data-position^=bottom]{bottom:var(--wl-offset-y, 16px)}.arrow,.card,.card--launcher,.viewer__progress-seg,.viewer__volume,.viewer__cta,.viewer-form__submit,.viewer-form__close,.viewer-overlay__close{margin:0;padding:0;border:none;background:none;font-family:inherit;cursor:pointer;-webkit-tap-highlight-color:transparent}.arrow:focus-visible,.card:focus-visible,.card--launcher:focus-visible,.viewer__progress-seg:focus-visible,.viewer__volume:focus-visible,.viewer__cta:focus-visible,.viewer-form__submit:focus-visible,.viewer-overlay__close:focus-visible{outline:2px solid var(--color-text);outline-offset:2px;box-shadow:0 0 0 6px var(--color-icon-glyph)}.viewer-form__input:focus-visible{outline:2px solid var(--color-primary);outline-offset:2px}.strip{position:relative;height:162px}.strip__viewport{overflow:hidden;width:100%;height:100%;--strip-fade: 90px;mask-image:linear-gradient(to right,transparent 0,#000 var(--strip-fade),#000 calc(100% - var(--strip-fade)),transparent 100%);-webkit-mask-image:linear-gradient(to right,transparent 0,#000 var(--strip-fade),#000 calc(100% - var(--strip-fade)),transparent 100%)}.stories[data-edge-fade=off] .strip__viewport{mask-image:none;-webkit-mask-image:none}.strip__track{display:flex;gap:15px;align-items:center;height:100%;width:max-content;transition:transform .35s ease;will-change:transform}.strip__track--instant{transition:none}.strip .arrow{position:absolute;top:calc(50% - 20px);z-index:2}.strip .arrow.arrow--prev{left:0}.strip .arrow.arrow--next{right:0}.arrow{width:40px;height:40px;display:inline-flex;align-items:center;justify-content:center}.arrow svg{display:block;width:40px;height:40px}.arrow--plate{background:var(--color-background);border-radius:9.7561px;color:var(--color-arrow-chevron);transition:background-color .2s ease}.arrow--plate:hover{background:var(--color-arrow-bg-hover)}.arrow--free{color:#ffffff4d;transition:color .2s ease}.arrow--free:hover{color:#ffffff73}.arrow--prev{transform:rotate(180deg) scaleY(-1)}.card{position:relative;width:134px;height:162px;flex-shrink:0;cursor:pointer}.card__border{position:absolute;inset:2px;border:2px solid var(--color-primary);border-radius:16px;pointer-events:none}.card__image{position:absolute;inset:4px;border-radius:15px;overflow:hidden;background:#000}.card__image img{display:block;width:100%;height:100%;object-fit:cover;border-radius:15px}.card__scrim{position:absolute;inset:4px;border-radius:15px;pointer-events:none;background:linear-gradient(to bottom,#0000 70.779%,#000 103.25%)}.card__label{position:absolute;left:14px;bottom:14px;margin:0;font-size:16px;line-height:normal;letter-spacing:-.48px;color:#fff;white-space:nowrap;word-break:break-word}.card__icon{position:absolute;top:14px;right:14px;width:30px;height:30px;pointer-events:none}.card__icon svg{display:block;width:30px;height:30px}.card__icon img{display:block;width:30px;height:30px;border-radius:50%;object-fit:cover}.card--passive .card__border{border-color:var(--color-card-passive-border)}.launcher{position:relative}.card--launcher{display:block;text-align:left}.card--launcher .card__border{border:none}.card__border--segmented{position:absolute;inset:0;border:none;border-radius:0;color:var(--color-primary);pointer-events:none}.card__border--segmented svg{display:block;width:100%;height:100%}.viewer-overlay{position:fixed;inset:0;z-index:999998;display:flex;align-items:center;justify-content:center;background:#00000080}.viewer-stage{position:relative;width:427px;height:676px;flex-shrink:0;transform:scale(var(--viewer-scale, 1));transform-origin:center center}.viewer{position:relative;width:427px;height:676px;border-radius:15px}.viewer[data-form=open] .viewer__story-title,.viewer[data-form=open] .viewer__story-desc,.viewer[data-form=open] .viewer__cta,.viewer[data-form=open] .viewer__nav{opacity:0;visibility:hidden}.viewer[data-form=open] .viewer__tap{pointer-events:none}.viewer__media{position:absolute;inset:0;border-radius:15px;overflow:hidden;background:#000}.viewer__media img,.viewer__media video{display:block;width:100%;height:100%;object-fit:cover;border-radius:15px}.viewer__media iframe{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);height:100%;width:auto;aspect-ratio:16/9;border:0;pointer-events:none}.viewer__scrim{position:absolute;inset:0;border-radius:15px;pointer-events:none;background:linear-gradient(0deg,#000 2.9586%,#0000 28.772%),linear-gradient(180deg,#000 4.2899%,#0000 19.083%)}.viewer__progress{position:absolute;top:70px;left:20px;right:20px;display:flex;gap:5px;align-items:center}.viewer__progress-seg{position:relative;flex:1;height:4px;border-radius:15px;background:#ffffff4d;transition:background-color .2s ease}.viewer__progress-seg:before{content:"";position:absolute;inset:-8px 0}.viewer__progress-seg:hover{background:#ffffff73}.viewer__progress-fill{position:absolute;left:0;top:0;bottom:0;width:0;border-radius:15px;background:#fff;pointer-events:none}.viewer__head{position:absolute;top:20px;left:20px;right:20px;display:flex;align-items:center;justify-content:space-between}.viewer__head-title{display:flex;gap:10px;align-items:center;min-width:0}.viewer__head-icon{width:34px;height:34px;flex-shrink:0}.viewer__head-icon svg{display:block;width:34px;height:34px}.viewer__head-icon img{display:block;width:34px;height:34px;border-radius:50%;object-fit:cover}.viewer__head-text{margin:0;font-size:20px;font-weight:700;line-height:normal;letter-spacing:-.6px;color:#fff;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.viewer__volume{width:24px;height:24px;flex-shrink:0;color:#ffffff4d;transition:color .2s ease}.viewer__volume:hover{color:#fff}.viewer__volume svg{display:block;width:24px;height:24px}.viewer__story-title{position:absolute;left:20px;top:calc(50% + 174px);margin:0;font-size:20px;font-weight:700;line-height:normal;letter-spacing:-.6px;color:#fff;white-space:nowrap}.viewer__story-desc{position:absolute;left:20px;top:calc(50% + 207px);width:247px;margin:0;font-size:16px;line-height:normal;letter-spacing:-.48px;color:#fff;white-space:pre-wrap}.viewer__cta{position:absolute;left:20px;top:603px;width:247px;height:43px;box-sizing:border-box;display:flex;gap:10px;align-items:center;justify-content:center;padding:12px 26px;border-radius:10px;background:var(--color-primary);backdrop-filter:blur(24.494px);-webkit-backdrop-filter:blur(24.494px);color:var(--color-background);text-decoration:none;transition:background-color .2s ease}.viewer__cta:hover{background:var(--color-primary-hover)}.viewer__cta-text{margin:0;font-size:16px;line-height:normal;letter-spacing:-.48px;text-align:center;color:var(--color-background);white-space:nowrap}.viewer__cta-icon{width:16px;height:13px;flex-shrink:0;color:var(--color-background)}.viewer__cta-icon svg{display:block;width:16px;height:13px}.viewer__nav-prev{position:absolute;left:327px;top:605px}.viewer__nav-next{position:absolute;left:367px;top:605px}.viewer__tap{position:absolute;top:88px;bottom:172px;width:50%;padding:0;margin:0;border:none;background:transparent;cursor:pointer;-webkit-tap-highlight-color:transparent}.viewer__tap--prev{left:0}.viewer__tap--next{right:0}.viewer-form{position:absolute;left:0;right:0;bottom:0;z-index:3;box-sizing:border-box;padding:24px 20px 20px;border-radius:15px;background:linear-gradient(180deg,#0000,#000 32%);animation:viewer-form-in .25s ease}.viewer-form__close{position:absolute;top:8px;right:12px;width:28px;height:28px;display:inline-flex;align-items:center;justify-content:center;color:var(--color-text);opacity:.85}.viewer-form__close svg{display:block;width:18px;height:18px}.viewer-form__close:hover{opacity:1}.viewer-form__title{margin:0 0 12px;font-size:16px;font-weight:700;line-height:1.25;letter-spacing:-.48px;color:var(--color-text)}.viewer-form__row{display:flex;gap:8px;align-items:stretch}.viewer-form__input{flex:1;min-width:0;height:43px;box-sizing:border-box;padding:12px 14px;border:none;border-radius:10px;background:var(--color-background);color:var(--color-primary);font-family:inherit;font-size:16px;letter-spacing:-.48px}.viewer-form__input::placeholder{color:var(--color-volume-muted)}.viewer-form__submit{flex-shrink:0;height:43px;display:inline-flex;gap:8px;align-items:center;justify-content:center;padding:12px 20px;border-radius:10px;background:var(--color-primary);color:var(--color-text);font-size:16px;letter-spacing:-.48px;white-space:nowrap;transition:background-color .2s ease}.viewer-form__submit:hover{background:var(--color-primary-hover)}.viewer-form__submit-icon{width:16px;height:13px;display:inline-flex;color:var(--color-text)}.viewer-form__submit-icon svg{display:block;width:16px;height:13px}.viewer-form__success{margin:0;padding:4px 0;font-size:16px;font-weight:700;line-height:1.3;letter-spacing:-.48px;color:var(--color-text)}@keyframes viewer-form-in{0%{transform:translateY(16px);opacity:0}to{transform:translateY(0);opacity:1}}.viewer-overlay__close{position:absolute;top:24px;right:24px;width:40px;height:40px;display:inline-flex;align-items:center;justify-content:center;color:#fff;transition:opacity .2s ease}.viewer-overlay__close svg{display:block;width:24px;height:24px}.viewer-overlay__close:hover{opacity:.8}@media(max-width:576px){.strip .arrow{display:none}.strip__viewport{overflow-x:auto;overflow-y:hidden;-webkit-overflow-scrolling:touch;scrollbar-width:none}.strip__viewport::-webkit-scrollbar{display:none}.strip__track{transform:none!important;width:max-content}}@media(prefers-reduced-motion:reduce){.strip__track,.arrow,.card,.viewer-overlay,.viewer,.viewer__volume,.viewer__cta,.viewer__progress-seg,.viewer-form,.viewer-form__submit,.viewer-overlay__close,.badge{transition:none!important;animation:none!important}}.badge{position:absolute;top:calc(100% + 4px);left:50%;transform:translate(-50%) translateY(8px);opacity:0;pointer-events:none;transition:transform .3s ease,opacity .3s ease;z-index:1}.badge--visible{opacity:1;pointer-events:auto;transform:translate(-50%) translateY(0)}.stories[data-display-mode=launcher] .badge{top:auto;bottom:calc(100% + 4px);transform:translate(-50%) translateY(-8px)}.stories[data-display-mode=launcher] .badge--visible{transform:translate(-50%) translateY(0)}.stories[data-position=bottom] .badge{top:auto;bottom:calc(100% + 4px);transform:translate(-50%) translateY(-8px)}.stories[data-position=bottom] .badge--visible{transform:translate(-50%) translateY(0)}@media(max-width:576px){.badge{position:fixed;bottom:16px;left:50%;top:auto;transform:translate(-50%);opacity:1;pointer-events:auto}}';var A=Object.defineProperty,p=(o,e,t,r)=>{for(var i=void 0,s=o.length-1,c;s>=0;s--)(c=o[s])&&(i=c(e,t,i)||i);return i&&A(e,t,i),i};const u=149,O=5e3,T="M14.5 9.5L23.9844 18.5533C24.8098 19.3412 24.8098 20.6588 23.9844 21.4467L14.5 30.5",v=()=>h`
  <svg class="arrow__glyph" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="${T}" stroke="currentColor" stroke-linecap="round"/>
  </svg>
`,V=()=>h`
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M22 8.99993L16 14.9999M16 8.99993L22 14.9999M9.63432 4.36561L6.46863 7.5313C6.29568 7.70425 6.2092 7.79073 6.10828 7.85257C6.01881 7.9074 5.92127 7.9478 5.81923 7.9723C5.70414 7.99993 5.58185 7.99993 5.33726 7.99993H3.6C3.03995 7.99993 2.75992 7.99993 2.54601 8.10892C2.35785 8.20479 2.20487 8.35777 2.10899 8.54594C2 8.75985 2 9.03987 2 9.59993V14.3999C2 14.96 2 15.24 2.10899 15.4539C2.20487 15.6421 2.35785 15.7951 2.54601 15.8909C2.75992 15.9999 3.03995 15.9999 3.6 15.9999H5.33726C5.58185 15.9999 5.70414 15.9999 5.81923 16.0276C5.92127 16.0521 6.01881 16.0925 6.10828 16.1473C6.2092 16.2091 6.29568 16.2956 6.46863 16.4686L9.63431 19.6342C10.0627 20.0626 10.2769 20.2768 10.4608 20.2913C10.6203 20.3038 10.7763 20.2392 10.8802 20.1175C11 19.9773 11 19.6744 11 19.0686V4.9313C11 4.32548 11 4.02257 10.8802 3.88231C10.7763 3.76061 10.6203 3.69602 10.4608 3.70858C10.2769 3.72305 10.0627 3.93724 9.63432 4.36561Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`,I=()=>h`
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M2 9.59993C2 9.03987 2 8.75985 2.10899 8.54594C2.20487 8.35777 2.35785 8.20479 2.54601 8.10892C2.75992 7.99993 3.03995 7.99993 3.6 7.99993H5.33726C5.58185 7.99993 5.70414 7.99993 5.81923 7.9723C5.92127 7.9478 6.01881 7.9074 6.10828 7.85257C6.2092 7.79073 6.29568 7.70425 6.46863 7.5313L9.63432 4.36561C10.0627 3.93724 10.2769 3.72305 10.4608 3.70858C10.6203 3.69602 10.7763 3.76061 10.8802 3.88231C11 4.02257 11 4.32548 11 4.9313V19.0686C11 19.6744 11 19.9773 10.8802 20.1175C10.7763 20.2392 10.6203 20.3038 10.4608 20.2913C10.2769 20.2768 10.0627 20.0626 9.63431 19.6342L6.46863 16.4686C6.29568 16.2956 6.2092 16.2091 6.10828 16.1473C6.01881 16.0925 5.92127 16.0521 5.81923 16.0276C5.70414 15.9999 5.58185 15.9999 5.33726 15.9999H3.6C3.03995 15.9999 2.75992 15.9999 2.54601 15.8909C2.35785 15.7951 2.20487 15.6421 2.10899 15.4539C2 15.24 2 14.96 2 14.3999V9.59993Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M23.2426 12L14.7574 12M19 7.75732L19 16.2426" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`,W=o=>{const e=`stories-skin1-cardicon-${o}`;return h`
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <foreignObject x="-36.9" y="-36.9" width="103.8" height="103.8"><div xmlns="http://www.w3.org/1999/xhtml" style="backdrop-filter:blur(18.45px);clip-path:url(#${e});height:100%;width:100%"></div></foreignObject><circle data-figma-bg-blur-radius="36.9" cx="15" cy="15" r="15" fill="white"/>
      <path d="M12.75 12.75H12.7575M17.25 17.25H17.2575M18 12L12 18M11.5003 8.86402C12.1032 8.81591 12.6755 8.57884 13.1359 8.18656C14.21 7.27115 15.79 7.27115 16.8641 8.18656C17.3245 8.57884 17.8968 8.81591 18.4997 8.86402C19.9065 8.97629 21.0237 10.0935 21.136 11.5003C21.1841 12.1032 21.4212 12.6755 21.8134 13.1359C22.7289 14.21 22.7289 15.79 21.8134 16.8641C21.4212 17.3245 21.1841 17.8968 21.136 18.4997C21.0237 19.9065 19.9065 21.0237 18.4997 21.136C17.8968 21.1841 17.3245 21.4212 16.8641 21.8134C15.79 22.7289 14.21 22.7289 13.1359 21.8134C12.6755 21.4212 12.1032 21.1841 11.5003 21.136C10.0935 21.0237 8.97629 19.9065 8.86402 18.4997C8.81591 17.8968 8.57884 17.3245 8.18656 16.8641C7.27115 15.79 7.27115 14.21 8.18656 13.1359C8.57884 12.6755 8.81591 12.1032 8.86402 11.5003C8.97629 10.0935 10.0935 8.97629 11.5003 8.86402ZM13.125 12.75C13.125 12.9571 12.9571 13.125 12.75 13.125C12.5429 13.125 12.375 12.9571 12.375 12.75C12.375 12.5429 12.5429 12.375 12.75 12.375C12.9571 12.375 13.125 12.5429 13.125 12.75ZM17.625 17.25C17.625 17.4571 17.4571 17.625 17.25 17.625C17.0429 17.625 16.875 17.4571 16.875 17.25C16.875 17.0429 17.0429 16.875 17.25 16.875C17.4571 16.875 17.625 17.0429 17.625 17.25Z" stroke="#323232" stroke-linecap="round" stroke-linejoin="round"/>
      <defs>
        <clipPath id="${e}" transform="translate(36.9 36.9)"><circle cx="15" cy="15" r="15"/></clipPath>
      </defs>
    </svg>
  `},z=()=>{const o="stories-skin1-headicon";return h`
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <foreignObject x="-41.82" y="-41.82" width="117.64" height="117.64"><div xmlns="http://www.w3.org/1999/xhtml" style="backdrop-filter:blur(20.91px);clip-path:url(#${o});height:100%;width:100%"></div></foreignObject><circle data-figma-bg-blur-radius="41.82" cx="17" cy="17" r="17" fill="white"/>
      <path d="M14.5 14.5H14.5083M19.5 19.5H19.5083M20.3333 13.6667L13.6666 20.3334M13.1114 10.1823C13.7813 10.1288 14.4172 9.8654 14.9287 9.42954C16.1222 8.4124 17.8777 8.4124 19.0712 9.42954C19.5827 9.8654 20.2186 10.1288 20.8885 10.1823C22.4517 10.307 23.693 11.5483 23.8177 13.1115C23.8712 13.7814 24.1346 14.4173 24.5704 14.9287C25.5876 16.1223 25.5876 17.8777 24.5704 19.0713C24.1346 19.5828 23.8712 20.2187 23.8177 20.8885C23.693 22.4517 22.4517 23.693 20.8885 23.8178C20.2186 23.8712 19.5827 24.1346 19.0712 24.5705C17.8777 25.5876 16.1222 25.5876 14.9287 24.5705C14.4172 24.1346 13.7813 23.8712 13.1114 23.8178C11.5482 23.693 10.3069 22.4517 10.1822 20.8885C10.1287 20.2187 9.86534 19.5828 9.42948 19.0713C8.41234 17.8777 8.41234 16.1223 9.42948 14.9287C9.86534 14.4173 10.1288 13.7814 10.1822 13.1115C10.3069 11.5483 11.5482 10.307 13.1114 10.1823ZM14.9166 14.5C14.9166 14.7301 14.7301 14.9167 14.5 14.9167C14.2698 14.9167 14.0833 14.7301 14.0833 14.5C14.0833 14.2699 14.2698 14.0834 14.5 14.0834C14.7301 14.0834 14.9166 14.2699 14.9166 14.5ZM19.9166 19.5C19.9166 19.7301 19.7301 19.9167 19.5 19.9167C19.2698 19.9167 19.0833 19.7301 19.0833 19.5C19.0833 19.2699 19.2698 19.0834 19.5 19.0834C19.7301 19.0834 19.9166 19.2699 19.9166 19.5Z" stroke="#323232" stroke-linecap="round" stroke-linejoin="round"/>
      <defs>
        <clipPath id="${o}" transform="translate(41.82 41.82)"><circle cx="17" cy="17" r="17"/></clipPath>
      </defs>
    </svg>
  `},E=()=>h`
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M4 4L20 20M20 4L4 20" stroke="currentColor" stroke-linecap="round"/>
  </svg>
`;function m(o){return o?/\.(mp4|webm|ogg|ogv|mov|m4v)(\?|#|$)/i.test(o)?"file":/(?:youtube\.com|youtu\.be)/i.test(o)?"youtube":/vimeo\.com/i.test(o)?"vimeo":/(?:vk\.com|vkvideo\.ru|vk\.ru)/i.test(o)?"vk":/rutube\.ru/i.test(o)?"rutube":"embed":"none"}function j(o,e,t){const r=typeof location<"u"&&location.origin?location.origin:"";if(e==="youtube"){const i=o.match(/(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/|v\/)|youtu\.be\/)([\w-]{11})/);if(!i)return"";const s={autoplay:"1",mute:"1",controls:"0",playsinline:"1",enablejsapi:"1",modestbranding:"1",rel:"0",iv_load_policy:"3",fs:"0",disablekb:"1"};return r&&(s.origin=r),`https://www.youtube.com/embed/${i[1]}?${new URLSearchParams(s).toString()}&_wl=${t}`}if(e==="vimeo"){const i=o.match(/vimeo\.com\/(?:video\/)?(\d+)/);if(!i)return"";const s=new URLSearchParams({autoplay:"1",muted:"1",loop:"1",controls:"0",playsinline:"1"});return`https://player.vimeo.com/video/${i[1]}?${s.toString()}&_wl=${t}`}if(e==="vk"){const i=o.match(/video(-?\d+)_(\d+)/);return i?`https://vk.com/video_ext.php?${new URLSearchParams({oid:i[1],id:i[2],hd:"2",autoplay:"1"}).toString()}`:o}if(e==="rutube"){const i=o.match(/rutube\.ru\/(?:video|play\/embed)\/([0-9a-f]+)/i);return i?`https://rutube.ru/play/embed/${i[1]}?autoplay=1`:o}return o}class n extends C{constructor(){super(...arguments),this._badgeVisible=!1,this._overWidget=!1,this._overBadge=!1,this._hideTimer=null,this._viewerOpen=!1,this._storyIndex=0,this._stripOffset=0,this._stripInstant=!0,this._viewportW=0,this._muted=!0,this._viewed=new Set,this._viewerScale=1,this._updateViewerScale=()=>{if(!this._viewerOpen)return;const e=Math.min(1,(window.innerHeight-32)/676,(window.innerWidth-32)/427);this._viewerScale=Math.max(.1,e)},this._measureStrip=()=>{const e=this.renderRoot?.querySelector(".strip__viewport");e&&(this._viewportW=e.clientWidth)},this._progressRaf=null,this._embedDur=0,this._embedPos=0,this._embedPosAt=0,this._storyStartAt=0,this._lastAdvanceAt=0,this._embedReloadKey=0,this._onIframeLoad=()=>{const e=this._embedWin;e&&(this._currentKind==="youtube"?(e.postMessage(JSON.stringify({event:"listening",id:1,channel:"widget"}),"*"),this._muted||(this._ytCmd("unMute"),this._ytCmd("setVolume",[100]),this._ytCmd("playVideo"))):this._currentKind==="vimeo"&&(e.postMessage(JSON.stringify({method:"addEventListener",value:"timeupdate"}),"*"),e.postMessage(JSON.stringify({method:"addEventListener",value:"ended"}),"*"),this._muted||this._vimeoCmd("setMuted",!1)))},this._onEmbedMessage=e=>{if(e.source!==this._embedWin)return;let t=e.data;if(typeof t=="string")try{t=JSON.parse(t)}catch{return}const r=t;if(this._currentKind==="youtube"){const i=r?.info;i&&typeof i=="object"&&(typeof i.duration=="number"&&i.duration>0&&(this._embedDur=i.duration),typeof i.currentTime=="number"&&(this._embedPos=i.currentTime,this._embedPosAt=performance.now()));const s=typeof i=="number"?i:i?.playerState;(r?.event==="onStateChange"||r?.event==="infoDelivery")&&s===0&&this._advanceFromProgress()}else if(this._currentKind==="vimeo")if(r?.event==="timeupdate"&&r.data&&typeof r.data=="object"){const i=r.data;typeof i.duration=="number"&&i.duration>0&&(this._embedDur=i.duration),typeof i.seconds=="number"&&(this._embedPos=i.seconds,this._embedPosAt=performance.now())}else r?.event==="ended"&&this._advanceFromProgress()},this._onKeyDown=e=>{this._viewerOpen&&(e.key==="Escape"?(e.preventDefault(),this._closeViewer()):e.key==="ArrowRight"?(e.preventDefault(),this._nextStory()):e.key==="ArrowLeft"&&(e.preventDefault(),this._prevStory()))}}static{this.styles=[k(L)]}get _iframeEl(){return this.renderRoot?.querySelector(".viewer__media iframe")??null}get _embedWin(){return this._iframeEl?.contentWindow??null}get _currentStory(){const e=this._stories;return e.length?e[Math.min(this._storyIndex,e.length-1)]??null:null}get _currentKind(){const e=this._currentStory;return e?m(e.video):"none"}_ytCmd(e,t=[]){this._embedWin?.postMessage(JSON.stringify({event:"command",func:e,args:t}),"*")}_vimeoCmd(e,t){this._embedWin?.postMessage(JSON.stringify(t===void 0?{method:e}:{method:e,value:t}),"*")}_toggleSound(){this._muted=!this._muted;const e=this._currentKind;e==="youtube"?this._muted?this._ytCmd("mute"):(this._ytCmd("unMute"),this._ytCmd("setVolume",[100]),this._ytCmd("playVideo")):e==="vimeo"&&this._vimeoCmd("setMuted",this._muted)}getMetricWidgetType(){return"stories"}buildColorPalette(){const e=super.buildColorPalette();if(!this.config?.design?.colors)return e;const t=$(this.config);return{...e,"text-30":x(t.text,.3),"text-45":x(t.text,.45),"primary-hover":P("#FFFFFF",.45,t.primary),"card-passive-border":"#DFDFDF","arrow-chevron":"#3A3A3A","arrow-bg-hover":"#DBDBDB","volume-muted":"#919191","icon-glyph":"#323232"}}_showBadge(){this._hideTimer!==null&&(clearTimeout(this._hideTimer),this._hideTimer=null),this._badgeVisible=!0}_cancelHideTimer(){this._hideTimer!==null&&(clearTimeout(this._hideTimer),this._hideTimer=null)}_startHideTimer(e){this._hideTimer!==null&&clearTimeout(this._hideTimer),this._hideTimer=setTimeout(()=>{this._badgeVisible=!1,this._hideTimer=null},e)}_onWidgetEnter(){this._overWidget=!0,this._showBadge()}_onWidgetLeave(){this._overWidget=!1,this._overBadge||this._startHideTimer(250)}_onBadgeEnter(){this._overBadge=!0,this._cancelHideTimer()}_onBadgeLeave(){this._overBadge=!1,this._overWidget||this._startHideTimer(250)}connectedCallback(){const e=this.config?.design?.colorMode;super.connectedCallback(),e&&this.config?.design?.colorMode!==e&&(this.config={...this.config,design:{...this.config.design,colorMode:e}}),window.addEventListener("keydown",this._onKeyDown),window.addEventListener("resize",this._updateViewerScale),window.addEventListener("resize",this._measureStrip),window.addEventListener("message",this._onEmbedMessage)}firstUpdated(){this.config&&(this.config={...this.config}),this._measureStrip(),this._stripOffset=this._stories.length*u,this.updateComplete.then(()=>{requestAnimationFrame(()=>{this._stripInstant=!1})})}disconnectedCallback(){super.disconnectedCallback(),this._hideTimer!==null&&(clearTimeout(this._hideTimer),this._hideTimer=null),this._stopProgressLoop(),window.removeEventListener("keydown",this._onKeyDown),window.removeEventListener("resize",this._updateViewerScale),window.removeEventListener("resize",this._measureStrip),window.removeEventListener("message",this._onEmbedMessage)}get _settings(){return this.config?.settings??{}}get _playback(){return this._settings.playback??{}}get _button(){return this._settings.button??{}}get _edgeFade(){return this._playback.edgeFade!==!1}get _autoplay(){return this._playback.autoplay!==!1}get _layout(){const e=this._settings.layout??{};return{position:e.position==="top"?"top":"bottom",offsetX:e.offsetX??16,offsetY:e.offsetY??16}}get _stories(){const e=this._settings.stories;return(Array.isArray(e)?e:e?Object.values(e):[]).filter(r=>r&&r.enabled!==!1).map((r,i)=>({video:(r.videoUrl||"").trim(),poster:(r.poster||"").trim(),icon:this._resolveMediaUrl(r.icon),name:r.name||`История ${i+1}`,title:r.title||r.name||"",subtitle:r.subtitle||""}))}_resolveMediaUrl(e){if(typeof e=="string")return e.trim();if(e&&typeof e=="object"){const t=e.url;if(typeof t=="string")return t.trim()}return""}get _setWidth(){return this._stories.length*u}_normalizeOffset(e){const t=this._setWidth;return t<=0?0:(e%t+t)%t+t}_scrollStrip(e){const t=this._setWidth;if(t<=0)return;const r=Math.min(u*2,t);this._stripInstant=!0;const i=this._normalizeOffset(this._stripOffset);this._stripOffset=i,this.updateComplete.then(()=>{requestAnimationFrame(()=>{this._stripInstant=!1,this._stripOffset=i+e*r})})}_onStripSettled(e){if(e.propertyName!=="transform")return;const t=this._normalizeOffset(this._stripOffset);Math.abs(t-this._stripOffset)<.5||(this._stripInstant=!0,this._stripOffset=t,this.updateComplete.then(()=>{requestAnimationFrame(()=>{this._stripInstant=!1})}))}_openViewer(e){const t=this._stories.length;this._storyIndex=Math.min(t-1,Math.max(0,e)),this._muted=this._playback.muted!==!1,this._embedReloadKey+=1,this._markViewed(this._storyIndex),this._viewerOpen=!0,this._updateViewerScale(),this._resetProgress(),this._startProgressLoop(),this.updateComplete.then(()=>{this.renderRoot.querySelector(".viewer-overlay__close")?.focus()})}_closeViewer(){this._viewerOpen=!1,this._stopProgressLoop()}_markViewed(e){if(this._viewed.has(e))return;const t=new Set(this._viewed);t.add(e),this._viewed=t}_goToStory(e){const t=Math.min(this._stories.length-1,Math.max(0,e));this._storyIndex=t,this._resetProgress(),this._markViewed(t)}_nextStory(){this._storyIndex>=this._stories.length-1||(this._storyIndex+=1,this._resetProgress(),this._markViewed(this._storyIndex))}_prevStory(){this._storyIndex<=0||(this._storyIndex-=1,this._resetProgress())}_resetProgress(){this._embedDur=0,this._embedPos=0,this._embedPosAt=performance.now(),this._storyStartAt=performance.now()}_startProgressLoop(){if(this._progressRaf!=null)return;const e=()=>{this._paintProgress(),this._progressRaf=requestAnimationFrame(e)};this._progressRaf=requestAnimationFrame(e)}_stopProgressLoop(){this._progressRaf!=null&&(cancelAnimationFrame(this._progressRaf),this._progressRaf=null)}_currentProgress(){const e=this._currentStory;if(!e)return 0;const t=m(e.video);let r=0;if(t==="file"){const i=this.renderRoot?.querySelector(".viewer__media video");i&&isFinite(i.duration)&&i.duration>0&&(r=i.currentTime/i.duration)}else t==="youtube"||t==="vimeo"?this._embedDur>0&&(r=(this._embedPos+(performance.now()-this._embedPosAt)/1e3)/this._embedDur):r=(performance.now()-this._storyStartAt)/O;return r<0?0:r>1?1:r}_paintProgress(){if(!this._viewerOpen)return;const e=this._stories.length;if(e===0)return;const t=Math.min(this._storyIndex,e-1),r=this._currentProgress();this.renderRoot?.querySelectorAll(".viewer__progress-fill")?.forEach((s,c)=>{const g=c<t?1:c>t?0:r;s.style.width=`${g*100}%`}),r>=1&&this._advanceFromProgress()}_advanceFromProgress(){if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;const e=performance.now();if(!(e-this._lastAdvanceAt<400)){if(this._lastAdvanceAt=e,this._storyIndex>=this._stories.length-1){this._closeViewer();return}this._nextStory()}}render(){if(!this.isOpen)return a`${l}`;const e=this._layout,t={"--wl-offset-x":`${e.offsetX}px`,"--wl-offset-y":`${e.offsetY}px`};return a`
      <div
        class="stories"
        data-display-mode="strip"
        data-position=${e.position}
        data-edge-fade=${this._edgeFade?"on":"off"}
        data-viewer-open=${this._viewerOpen?"true":"false"}
        style=${b(t)}
        @mouseenter=${()=>this._onWidgetEnter()}
        @mouseleave=${()=>this._onWidgetLeave()}
      >
        ${this._renderStrip()}
        ${this._viewerOpen?this._renderViewer():l}
        ${this._renderBadge()}
      </div>
    `}_renderBadge(){if(this.config?.design?.hideLogo)return l;const e={badge:!0,"badge--visible":this._badgeVisible};return a`
      <div
        class=${w(e)}
        @mouseenter=${()=>this._onBadgeEnter()}
        @mouseleave=${()=>this._onBadgeLeave()}
      >
        <wl-copyright></wl-copyright>
      </div>
    `}_renderStrip(){const e=this._stories,t=e.length,r=t*u,i=this._viewportW||1200,s=t>0?Math.max(5,Math.ceil(i/r)+4):1,c=[];for(let _=0;_<s;_++)for(let f=0;f<t;f++)c.push(this._renderCard(e[f],f,`${_}-${f}`));const g={transform:`translateX(${-this._stripOffset}px)`},y={strip__track:!0,"strip__track--instant":this._stripInstant};return a`
      <div class="strip">
        <div class="strip__viewport">
          <div
            class=${w(y)}
            style=${b(g)}
            @transitionend=${_=>this._onStripSettled(_)}
          >
            ${c}
          </div>
        </div>
        <button
          class="arrow arrow--plate arrow--prev"
          aria-label="Предыдущие истории"
          @click=${()=>this._scrollStrip(-1)}
        >${v()}</button>
        <button
          class="arrow arrow--plate arrow--next"
          aria-label="Следующие истории"
          @click=${()=>this._scrollStrip(1)}
        >${v()}</button>
      </div>
    `}_renderCard(e,t,r){const i={card:!0,"card--passive":this._viewed.has(t)};return a`
      <button
        class=${w(i)}
        aria-label=${`История ${t+1}: ${e.name}`}
        @click=${()=>this._openViewer(t)}
      >
        <span class="card__border" aria-hidden="true"></span>
        <span class="card__image">${e.poster?a`<img src=${e.poster} alt="" loading="lazy" />`:l}</span>
        <span class="card__scrim" aria-hidden="true"></span>
        <span class="card__label">${e.name}</span>
        <span class="card__icon" aria-hidden="true">${e.icon?a`<img src=${e.icon} alt="" loading="lazy" />`:W(`card-${r}`)}</span>
      </button>
    `}_renderViewer(){const e=this._stories;if(e.length===0)return l;const t=Math.min(this._storyIndex,e.length-1),r=e[t];return a`
      <div
        class="viewer-overlay"
        role="dialog"
        aria-modal="true"
        aria-label=${r.name}
        @click=${()=>this._closeViewer()}
      >
        <div class="viewer-stage" style=${b({"--viewer-scale":String(this._viewerScale)})}>
        <div class="viewer" @click=${i=>i.stopPropagation()}>
          <div class="viewer__media" aria-hidden="true">
            ${this._renderMedia(r)}
          </div>
          <div class="viewer__scrim" aria-hidden="true"></div>

          <button
            class="viewer__tap viewer__tap--prev"
            aria-label="Предыдущий сюжет"
            tabindex="-1"
            @click=${()=>this._prevStory()}
          ></button>
          <button
            class="viewer__tap viewer__tap--next"
            aria-label="Следующий сюжет"
            tabindex="-1"
            @click=${()=>this._nextStory()}
          ></button>

          <div class="viewer__progress" role="tablist" aria-label="Сюжеты">
            ${e.map((i,s)=>a`
              <button
                class="viewer__progress-seg"
                role="tab"
                aria-selected=${s===t}
                aria-label=${`Сюжет ${s+1}`}
                @click=${()=>this._goToStory(s)}
              ><span class="viewer__progress-fill" aria-hidden="true"></span></button>
            `)}
          </div>

          <div class="viewer__head">
            <div class="viewer__head-title">
              <span class="viewer__head-icon" aria-hidden="true">
                ${r.icon?a`<img src=${r.icon} alt="" />`:z()}
              </span>
              <span class="viewer__head-text">${r.name}</span>
            </div>
            ${(()=>{const i=m(r.video);return i==="file"||i==="youtube"||i==="vimeo"?a`
                <button
                  class="viewer__volume"
                  aria-label=${this._muted?"Включить звук":"Выключить звук"}
                  aria-pressed=${!this._muted}
                  @click=${()=>this._toggleSound()}
                >${this._muted?V():I()}</button>
              `:l})()}
          </div>

          <p class="viewer__story-title">${r.title}</p>
          <p class="viewer__story-desc">${r.subtitle}</p>

          ${this._renderCta()}

          <div class="viewer__nav">
            <button
              class="arrow arrow--free arrow--prev viewer__nav-prev"
              aria-label="Предыдущий сюжет"
              ?disabled=${t===0}
              @click=${()=>this._prevStory()}
            >${v()}</button>
            <button
              class="arrow arrow--free viewer__nav-next"
              aria-label="Следующий сюжет"
              ?disabled=${t>=e.length-1}
              @click=${()=>this._nextStory()}
            >${v()}</button>
          </div>
        </div>
        </div>

        <button
          class="viewer-overlay__close"
          aria-label="Закрыть"
          @click=${()=>this._closeViewer()}
        >${E()}</button>
      </div>
    `}_renderMedia(e){const t=m(e.video);if(t==="file")return a`<video
        src=${e.video}
        poster=${e.poster||l}
        ?autoplay=${this._autoplay}
        playsinline
        ?muted=${this._muted}
        .muted=${this._muted}
      ></video>`;if(t!=="none"){const r=j(e.video,t,this._embedReloadKey);if(r)return a`<iframe
          class="viewer__media-embed"
          src=${r}
          allow="autoplay; encrypted-media; picture-in-picture"
          allowfullscreen
          frameborder="0"
          @load=${()=>this._onIframeLoad()}
        ></iframe>`}return e.poster?a`<img src=${e.poster} alt="" />`:l}_renderCta(){const{text:e,link:t}=this._button;return e?a`
      <a
        class="viewer__cta"
        href=${t||"#"}
        target="_blank"
        rel="noopener noreferrer"
        @click=${()=>this._onCtaActivate()}
      >
        <span class="viewer__cta-text">${e}</span>
      </a>
    `:l}_onCtaActivate(){S("wlab_stories_click"),this.config?.uid&&M(this.config.uid,"cta")}}p([d()],n.prototype,"_badgeVisible");p([d()],n.prototype,"_viewerOpen");p([d()],n.prototype,"_storyIndex");p([d()],n.prototype,"_stripOffset");p([d()],n.prototype,"_stripInstant");p([d()],n.prototype,"_viewportW");p([d()],n.prototype,"_muted");p([d()],n.prototype,"_viewed");p([d()],n.prototype,"_viewerScale");customElements.get("wl-stories-skin1")||customElements.define("wl-stories-skin1",n);const N={tagName:"wl-stories-skin1"};export{n as StoriesSkin1,N as skinRegistration};
