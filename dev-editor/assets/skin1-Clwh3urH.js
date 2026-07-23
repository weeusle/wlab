import{r as b,A as _,b as i,w as c}from"./lit-element-Cn7T8F1W.js";import{e as u}from"./class-map-CwBx3DFz.js";import{o as w}from"./style-map-C_AK3hrM.js";import{r as n}from"./message-bus-Cdj7KN6I.js";import{W as y,a as C,r as k}from"./base-widget-xiXHSNh_.js";import{submitButtonClick as $}from"./api-client-CDB2DH5T.js";import"./wlab-copyright-DS2BbYjn.js";import{h as M,a as g}from"./color-utils-CXJK6gtN.js";const T=':host{display:block;font-family:var(--wl-font-family, sans-serif)}.stories{position:relative;overflow:visible;font-family:var(--wl-font-family, sans-serif)}.stories[data-display-mode=strip]{width:auto;margin:var(--wl-offset-y, 16px) var(--wl-offset-x, 16px)}.stories[data-display-mode=launcher]{position:fixed;z-index:999997}.stories[data-display-mode=launcher][data-position=bottom-right]{right:var(--wl-offset-x, 16px);bottom:var(--wl-offset-y, 16px)}.stories[data-display-mode=launcher][data-position=bottom-left]{left:var(--wl-offset-x, 16px);bottom:var(--wl-offset-y, 16px)}.stories[data-display-mode=launcher][data-position=top-right]{right:var(--wl-offset-x, 16px);top:var(--wl-offset-y, 16px)}.stories[data-display-mode=launcher][data-position=top-left]{left:var(--wl-offset-x, 16px);top:var(--wl-offset-y, 16px)}.arrow,.card,.card--launcher,.viewer__progress-seg,.viewer__volume,.viewer__cta,.viewer-form__submit,.viewer-form__close,.viewer-overlay__close{margin:0;padding:0;border:none;background:none;font-family:inherit;cursor:pointer;-webkit-tap-highlight-color:transparent}.arrow:focus-visible,.card:focus-visible,.card--launcher:focus-visible,.viewer__progress-seg:focus-visible,.viewer__volume:focus-visible,.viewer__cta:focus-visible,.viewer-form__submit:focus-visible,.viewer-overlay__close:focus-visible{outline:2px solid var(--color-text);outline-offset:2px;box-shadow:0 0 0 6px var(--color-icon-glyph)}.viewer-form__input:focus-visible{outline:2px solid var(--color-primary);outline-offset:2px}.strip{position:relative;height:162px}.strip__viewport{overflow:hidden;width:100%;height:100%;--strip-fade: 90px;mask-image:linear-gradient(to right,transparent 0,#000 var(--strip-fade),#000 calc(100% - var(--strip-fade)),transparent 100%);-webkit-mask-image:linear-gradient(to right,transparent 0,#000 var(--strip-fade),#000 calc(100% - var(--strip-fade)),transparent 100%)}.stories[data-edge-fade=off] .strip__viewport{mask-image:none;-webkit-mask-image:none}.strip__track{display:flex;gap:15px;align-items:center;height:100%;transition:transform .35s ease;will-change:transform}.strip .arrow{position:absolute;top:calc(50% - 20px);z-index:2}.strip .arrow.arrow--prev{left:0}.strip .arrow.arrow--next{right:0}.arrow{width:40px;height:40px;display:inline-flex;align-items:center;justify-content:center}.arrow svg{display:block;width:40px;height:40px}.arrow--plate{background:var(--color-background);border-radius:9.7561px;color:var(--color-arrow-chevron);transition:background-color .2s ease}.arrow--plate:hover{background:var(--color-arrow-bg-hover)}.arrow--free{color:var(--color-text-30);transition:color .2s ease}.arrow--free:hover{color:var(--color-text-45)}.arrow--prev{transform:rotate(180deg) scaleY(-1)}.card{position:relative;width:134px;height:162px;flex-shrink:0;cursor:pointer}.card__border{position:absolute;inset:2px;border:2px solid var(--color-primary);border-radius:16px;pointer-events:none}.card__image{position:absolute;inset:4px;border-radius:15px;overflow:hidden}.card__image img{display:block;width:100%;height:100%;object-fit:cover;border-radius:15px}.card__scrim{position:absolute;inset:4px;border-radius:15px;pointer-events:none;background:linear-gradient(to bottom,#0000 70.779%,#000 103.25%)}.card__label{position:absolute;left:14px;bottom:14px;margin:0;font-size:16px;line-height:normal;letter-spacing:-.48px;color:var(--color-text);white-space:nowrap;word-break:break-word}.card__icon{position:absolute;top:14px;right:14px;width:30px;height:30px;pointer-events:none}.card__icon svg{display:block;width:30px;height:30px}.card--passive .card__border{border-color:var(--color-card-passive-border)}.launcher{position:relative}.card--launcher{display:block;text-align:left}.card--launcher .card__border{border:none}.card__border--segmented{position:absolute;inset:0;border:none;border-radius:0;color:var(--color-primary);pointer-events:none}.card__border--segmented svg{display:block;width:100%;height:100%}.viewer-overlay{position:fixed;inset:0;z-index:999998;display:flex;align-items:center;justify-content:center;background:#00000080}.viewer-stage{position:relative;width:427px;height:676px;flex-shrink:0;transform:scale(var(--viewer-scale, 1));transform-origin:center center}.viewer{position:relative;width:427px;height:676px;border-radius:15px}.viewer[data-form=open] .viewer__story-title,.viewer[data-form=open] .viewer__story-desc,.viewer[data-form=open] .viewer__cta,.viewer[data-form=open] .viewer__nav{opacity:0;visibility:hidden}.viewer__media{position:absolute;inset:0;border-radius:15px;overflow:hidden}.viewer__media img,.viewer__media video{display:block;width:100%;height:100%;object-fit:cover;border-radius:15px}.viewer__scrim{position:absolute;inset:0;border-radius:15px;pointer-events:none;background:linear-gradient(0deg,#000 2.9586%,#0000 28.772%),linear-gradient(180deg,#000 4.2899%,#0000 19.083%)}.viewer__progress{position:absolute;top:70px;left:20px;right:20px;display:flex;gap:5px;align-items:center}.viewer__progress-seg{position:relative;flex:1;height:4px;border-radius:15px;background:var(--color-text-30);transition:background-color .2s ease}.viewer__progress-seg:before{content:"";position:absolute;inset:-8px 0}.viewer__progress-seg.is-active,.viewer__progress-seg:hover{background:var(--color-text)}.viewer__head{position:absolute;top:20px;left:20px;right:20px;display:flex;align-items:center;justify-content:space-between}.viewer__head-title{display:flex;gap:10px;align-items:center;min-width:0}.viewer__head-icon{width:34px;height:34px;flex-shrink:0}.viewer__head-icon svg{display:block;width:34px;height:34px}.viewer__head-text{margin:0;font-size:20px;font-weight:700;line-height:normal;letter-spacing:-.6px;color:var(--color-text);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.viewer__volume{width:24px;height:24px;flex-shrink:0;color:var(--color-volume-muted);transition:color .2s ease}.viewer__volume:hover{color:var(--color-text)}.viewer__volume svg{display:block;width:24px;height:24px}.viewer__story-title{position:absolute;left:20px;top:calc(50% + 174px);margin:0;font-size:20px;font-weight:700;line-height:normal;letter-spacing:-.6px;color:var(--color-text);white-space:nowrap}.viewer__story-desc{position:absolute;left:20px;top:calc(50% + 207px);width:247px;margin:0;font-size:16px;line-height:normal;letter-spacing:-.48px;color:var(--color-text);white-space:pre-wrap}.viewer__cta{position:absolute;left:20px;top:603px;width:247px;height:43px;box-sizing:border-box;display:flex;gap:10px;align-items:center;justify-content:center;padding:12px 26px;border-radius:10px;background:var(--color-primary);backdrop-filter:blur(24.494px);-webkit-backdrop-filter:blur(24.494px);color:var(--color-text);text-decoration:none;transition:background-color .2s ease}.viewer__cta:hover{background:var(--color-primary-hover)}.viewer__cta-text{margin:0;font-size:16px;line-height:normal;letter-spacing:-.48px;text-align:center;color:var(--color-text);white-space:nowrap}.viewer__cta-icon{width:16px;height:13px;flex-shrink:0;color:var(--color-text)}.viewer__cta-icon svg{display:block;width:16px;height:13px}.viewer__nav-prev{position:absolute;left:327px;top:605px}.viewer__nav-next{position:absolute;left:367px;top:605px}.viewer-form{position:absolute;left:0;right:0;bottom:0;z-index:3;box-sizing:border-box;padding:24px 20px 20px;border-radius:15px;background:linear-gradient(180deg,#0000,#000 32%);animation:viewer-form-in .25s ease}.viewer-form__close{position:absolute;top:8px;right:12px;width:28px;height:28px;display:inline-flex;align-items:center;justify-content:center;color:var(--color-text);opacity:.85}.viewer-form__close svg{display:block;width:18px;height:18px}.viewer-form__close:hover{opacity:1}.viewer-form__title{margin:0 0 12px;font-size:16px;font-weight:700;line-height:1.25;letter-spacing:-.48px;color:var(--color-text)}.viewer-form__row{display:flex;gap:8px;align-items:stretch}.viewer-form__input{flex:1;min-width:0;height:43px;box-sizing:border-box;padding:12px 14px;border:none;border-radius:10px;background:var(--color-background);color:var(--color-primary);font-family:inherit;font-size:16px;letter-spacing:-.48px}.viewer-form__input::placeholder{color:var(--color-volume-muted)}.viewer-form__submit{flex-shrink:0;height:43px;display:inline-flex;gap:8px;align-items:center;justify-content:center;padding:12px 20px;border-radius:10px;background:var(--color-primary);color:var(--color-text);font-size:16px;letter-spacing:-.48px;white-space:nowrap;transition:background-color .2s ease}.viewer-form__submit:hover{background:var(--color-primary-hover)}.viewer-form__submit-icon{width:16px;height:13px;display:inline-flex;color:var(--color-text)}.viewer-form__submit-icon svg{display:block;width:16px;height:13px}.viewer-form__success{margin:0;padding:4px 0;font-size:16px;font-weight:700;line-height:1.3;letter-spacing:-.48px;color:var(--color-text)}@keyframes viewer-form-in{0%{transform:translateY(16px);opacity:0}to{transform:translateY(0);opacity:1}}.viewer-overlay__close{position:absolute;top:24px;right:24px;width:40px;height:40px;display:inline-flex;align-items:center;justify-content:center;color:var(--color-text);transition:opacity .2s ease}.viewer-overlay__close svg{display:block;width:24px;height:24px}.viewer-overlay__close:hover{opacity:.8}@media(max-width:576px){.strip .arrow{display:none}.strip__viewport{overflow-x:auto;overflow-y:hidden;-webkit-overflow-scrolling:touch;scrollbar-width:none}.strip__viewport::-webkit-scrollbar{display:none}.strip__track{transform:none!important;width:max-content}}@media(prefers-reduced-motion:reduce){.strip__track,.arrow,.card,.viewer-overlay,.viewer,.viewer__volume,.viewer__cta,.viewer__progress-seg,.viewer-form,.viewer-form__submit,.viewer-overlay__close,.badge{transition:none!important;animation:none!important}}.badge{position:absolute;top:calc(100% + 4px);left:50%;transform:translate(-50%) translateY(8px);opacity:0;pointer-events:none;transition:transform .3s ease,opacity .3s ease;z-index:1}.badge--visible{opacity:1;pointer-events:auto;transform:translate(-50%) translateY(0)}.stories[data-display-mode=launcher] .badge{top:auto;bottom:calc(100% + 4px);transform:translate(-50%) translateY(-8px)}.stories[data-display-mode=launcher] .badge--visible{transform:translate(-50%) translateY(0)}@media(max-width:576px){.badge{position:fixed;bottom:16px;left:50%;top:auto;transform:translate(-50%);opacity:1;pointer-events:auto}}',L=""+new URL("story-1-I264mo2p.jpg",import.meta.url).href,S=""+new URL("story-2-DTkDQoAH.jpg",import.meta.url).href,j=""+new URL("story-3-BT-1JWP4.jpg",import.meta.url).href,O=""+new URL("story-4-BGI9i0bU.jpg",import.meta.url).href,A=""+new URL("story-5-B6rrae_S.jpg",import.meta.url).href,B=""+new URL("story-6-CQja4U9Y.jpg",import.meta.url).href,V=""+new URL("story-7-D9swRjmn.jpg",import.meta.url).href,I=""+new URL("story-8-Dj2j_n9n.jpg",import.meta.url).href,R=""+new URL("story-9-C5jXeyZJ.jpg",import.meta.url).href,H=""+new URL("story-10-Cg8OtyD7.jpg",import.meta.url).href,U=""+new URL("story-11-CBu5U73-.jpg",import.meta.url).href,D=""+new URL("story-video-Cz2i1NsZ.mp4",import.meta.url).href,z=""+new URL("card-photo-BnAh6oWd.jpg",import.meta.url).href;var P=Object.defineProperty,l=(d,e,t,o)=>{for(var r=void 0,s=d.length-1,h;s>=0;s--)(h=d[s])&&(r=h(e,t,r)||r);return r&&P(e,t,r),r};const p=[{type:"image",src:L},{type:"video",src:D,poster:S},{type:"image",src:j},{type:"image",src:O},{type:"image",src:A},{type:"image",src:B},{type:"image",src:V},{type:"image",src:I},{type:"image",src:R},{type:"image",src:H},{type:"image",src:U}],W=z,E=149,F=5e3,G="M14.5 9.5L23.9844 18.5533C24.8098 19.3412 24.8098 20.6588 23.9844 21.4467L14.5 30.5",v=()=>c`
  <svg class="arrow__glyph" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="${G}" stroke="currentColor" stroke-linecap="round"/>
  </svg>
`,Y=()=>c`
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M22 8.99993L16 14.9999M16 8.99993L22 14.9999M9.63432 4.36561L6.46863 7.5313C6.29568 7.70425 6.2092 7.79073 6.10828 7.85257C6.01881 7.9074 5.92127 7.9478 5.81923 7.9723C5.70414 7.99993 5.58185 7.99993 5.33726 7.99993H3.6C3.03995 7.99993 2.75992 7.99993 2.54601 8.10892C2.35785 8.20479 2.20487 8.35777 2.10899 8.54594C2 8.75985 2 9.03987 2 9.59993V14.3999C2 14.96 2 15.24 2.10899 15.4539C2.20487 15.6421 2.35785 15.7951 2.54601 15.8909C2.75992 15.9999 3.03995 15.9999 3.6 15.9999H5.33726C5.58185 15.9999 5.70414 15.9999 5.81923 16.0276C5.92127 16.0521 6.01881 16.0925 6.10828 16.1473C6.2092 16.2091 6.29568 16.2956 6.46863 16.4686L9.63431 19.6342C10.0627 20.0626 10.2769 20.2768 10.4608 20.2913C10.6203 20.3038 10.7763 20.2392 10.8802 20.1175C11 19.9773 11 19.6744 11 19.0686V4.9313C11 4.32548 11 4.02257 10.8802 3.88231C10.7763 3.76061 10.6203 3.69602 10.4608 3.70858C10.2769 3.72305 10.0627 3.93724 9.63432 4.36561Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`,Z=()=>c`
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M2 9.59993C2 9.03987 2 8.75985 2.10899 8.54594C2.20487 8.35777 2.35785 8.20479 2.54601 8.10892C2.75992 7.99993 3.03995 7.99993 3.6 7.99993H5.33726C5.58185 7.99993 5.70414 7.99993 5.81923 7.9723C5.92127 7.9478 6.01881 7.9074 6.10828 7.85257C6.2092 7.79073 6.29568 7.70425 6.46863 7.5313L9.63432 4.36561C10.0627 3.93724 10.2769 3.72305 10.4608 3.70858C10.6203 3.69602 10.7763 3.76061 10.8802 3.88231C11 4.02257 11 4.32548 11 4.9313V19.0686C11 19.6744 11 19.9773 10.8802 20.1175C10.7763 20.2392 10.6203 20.3038 10.4608 20.2913C10.2769 20.2768 10.0627 20.0626 9.63431 19.6342L6.46863 16.4686C6.29568 16.2956 6.2092 16.2091 6.10828 16.1473C6.01881 16.0925 5.92127 16.0521 5.81923 16.0276C5.70414 15.9999 5.58185 15.9999 5.33726 15.9999H3.6C3.03995 15.9999 2.75992 15.9999 2.54601 15.8909C2.35785 15.7951 2.20487 15.6421 2.10899 15.4539C2 15.24 2 14.96 2 14.3999V9.59993Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M23.2426 12L14.7574 12M19 7.75732L19 16.2426" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`,m=()=>c`
  <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M1.09981 5.5964C5.39558 3.76196 8.25938 2.55247 9.6913 1.96814C13.7845 0.29959 14.6339 0.00980028 15.1888 9.54455e-05C15.3108 -0.0019358 15.5824 0.0276298 15.7597 0.168237C15.907 0.286726 15.9485 0.446968 15.9692 0.559364C15.9876 0.671759 16.013 0.927922 15.9922 1.12789C15.7712 3.41191 14.8113 8.9545 14.3232 11.5127C14.1183 12.5952 13.7108 12.9581 13.3172 12.9936C12.4608 13.0707 11.8115 12.4393 10.9828 11.9068C9.68667 11.0733 8.95464 10.5547 7.69538 9.74149C6.24044 8.8017 7.18428 8.28509 8.01305 7.44099C8.22945 7.22004 12.0003 3.85833 12.0717 3.55342C12.0809 3.51528 12.0901 3.37309 12.0026 3.29816C11.9175 3.223 11.7908 3.24873 11.6987 3.26904C11.5675 3.29793 9.49786 4.64036 5.48296 7.2961C4.89591 7.69196 4.36414 7.88493 3.88529 7.87478C3.36041 7.86372 2.34754 7.58318 1.59475 7.34349C0.673896 7.04941 -0.0605175 6.89391 0.00394201 6.39445C0.0361718 6.13445 0.402268 5.86836 1.09981 5.5964Z" fill="currentColor"/>
  </svg>
`,X=()=>c`
  <svg class="card__border-glyph" width="134" height="162" viewBox="0 0 134 162" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="none">
    <path d="M133 77.962V18C133 8.61116 125.389 1 116 1H70.0462M133 84.038V144C133 153.389 125.389 161 116 161H70.0462M63.9538 161H18C8.61116 161 1 153.389 1 144V84.038M1 77.962V18C1 8.61118 8.61116 1 18 1H63.9538" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
  </svg>
`,f=d=>{const e=`stories-skin1-cardicon-${d}`;return c`
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <foreignObject x="-36.9" y="-36.9" width="103.8" height="103.8"><div xmlns="http://www.w3.org/1999/xhtml" style="backdrop-filter:blur(18.45px);clip-path:url(#${e});height:100%;width:100%"></div></foreignObject><circle data-figma-bg-blur-radius="36.9" cx="15" cy="15" r="15" fill="white"/>
      <path d="M12.75 12.75H12.7575M17.25 17.25H17.2575M18 12L12 18M11.5003 8.86402C12.1032 8.81591 12.6755 8.57884 13.1359 8.18656C14.21 7.27115 15.79 7.27115 16.8641 8.18656C17.3245 8.57884 17.8968 8.81591 18.4997 8.86402C19.9065 8.97629 21.0237 10.0935 21.136 11.5003C21.1841 12.1032 21.4212 12.6755 21.8134 13.1359C22.7289 14.21 22.7289 15.79 21.8134 16.8641C21.4212 17.3245 21.1841 17.8968 21.136 18.4997C21.0237 19.9065 19.9065 21.0237 18.4997 21.136C17.8968 21.1841 17.3245 21.4212 16.8641 21.8134C15.79 22.7289 14.21 22.7289 13.1359 21.8134C12.6755 21.4212 12.1032 21.1841 11.5003 21.136C10.0935 21.0237 8.97629 19.9065 8.86402 18.4997C8.81591 17.8968 8.57884 17.3245 8.18656 16.8641C7.27115 15.79 7.27115 14.21 8.18656 13.1359C8.57884 12.6755 8.81591 12.1032 8.86402 11.5003C8.97629 10.0935 10.0935 8.97629 11.5003 8.86402ZM13.125 12.75C13.125 12.9571 12.9571 13.125 12.75 13.125C12.5429 13.125 12.375 12.9571 12.375 12.75C12.375 12.5429 12.5429 12.375 12.75 12.375C12.9571 12.375 13.125 12.5429 13.125 12.75ZM17.625 17.25C17.625 17.4571 17.4571 17.625 17.25 17.625C17.0429 17.625 16.875 17.4571 16.875 17.25C16.875 17.0429 17.0429 16.875 17.25 16.875C17.4571 16.875 17.625 17.0429 17.625 17.25Z" stroke="#323232" stroke-linecap="round" stroke-linejoin="round"/>
      <defs>
        <clipPath id="${e}" transform="translate(36.9 36.9)"><circle cx="15" cy="15" r="15"/></clipPath>
      </defs>
    </svg>
  `},q=()=>{const d="stories-skin1-headicon";return c`
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <foreignObject x="-41.82" y="-41.82" width="117.64" height="117.64"><div xmlns="http://www.w3.org/1999/xhtml" style="backdrop-filter:blur(20.91px);clip-path:url(#${d});height:100%;width:100%"></div></foreignObject><circle data-figma-bg-blur-radius="41.82" cx="17" cy="17" r="17" fill="white"/>
      <path d="M14.5 14.5H14.5083M19.5 19.5H19.5083M20.3333 13.6667L13.6666 20.3334M13.1114 10.1823C13.7813 10.1288 14.4172 9.8654 14.9287 9.42954C16.1222 8.4124 17.8777 8.4124 19.0712 9.42954C19.5827 9.8654 20.2186 10.1288 20.8885 10.1823C22.4517 10.307 23.693 11.5483 23.8177 13.1115C23.8712 13.7814 24.1346 14.4173 24.5704 14.9287C25.5876 16.1223 25.5876 17.8777 24.5704 19.0713C24.1346 19.5828 23.8712 20.2187 23.8177 20.8885C23.693 22.4517 22.4517 23.693 20.8885 23.8178C20.2186 23.8712 19.5827 24.1346 19.0712 24.5705C17.8777 25.5876 16.1222 25.5876 14.9287 24.5705C14.4172 24.1346 13.7813 23.8712 13.1114 23.8178C11.5482 23.693 10.3069 22.4517 10.1822 20.8885C10.1287 20.2187 9.86534 19.5828 9.42948 19.0713C8.41234 17.8777 8.41234 16.1223 9.42948 14.9287C9.86534 14.4173 10.1288 13.7814 10.1822 13.1115C10.3069 11.5483 11.5482 10.307 13.1114 10.1823ZM14.9166 14.5C14.9166 14.7301 14.7301 14.9167 14.5 14.9167C14.2698 14.9167 14.0833 14.7301 14.0833 14.5C14.0833 14.2699 14.2698 14.0834 14.5 14.0834C14.7301 14.0834 14.9166 14.2699 14.9166 14.5ZM19.9166 19.5C19.9166 19.7301 19.7301 19.9167 19.5 19.9167C19.2698 19.9167 19.0833 19.7301 19.0833 19.5C19.0833 19.2699 19.2698 19.0834 19.5 19.0834C19.7301 19.0834 19.9166 19.2699 19.9166 19.5Z" stroke="#323232" stroke-linecap="round" stroke-linejoin="round"/>
      <defs>
        <clipPath id="${d}" transform="translate(41.82 41.82)"><circle cx="17" cy="17" r="17"/></clipPath>
      </defs>
    </svg>
  `},x=()=>c`
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M4 4L20 20M20 4L4 20" stroke="currentColor" stroke-linecap="round"/>
  </svg>
`;class a extends y{constructor(){super(...arguments),this._badgeVisible=!1,this._overWidget=!1,this._overBadge=!1,this._hideTimer=null,this._viewerOpen=!1,this._storyIndex=0,this._stripOffset=0,this._muted=!0,this._viewed=new Set,this._formOpen=!1,this._submitted=!1,this._phone="",this._viewerScale=1,this._updateViewerScale=()=>{if(!this._viewerOpen)return;const e=Math.min(1,(window.innerHeight-32)/676,(window.innerWidth-32)/427);this._viewerScale=Math.max(.1,e)},this._autoTimer=null,this._autoPaused=!1,this._onKeyDown=e=>{this._viewerOpen&&(e.key==="Escape"?(e.preventDefault(),this._closeViewer()):e.key==="ArrowRight"?(e.preventDefault(),this._nextStory()):e.key==="ArrowLeft"&&(e.preventDefault(),this._prevStory()))}}static{this.styles=[b(T)]}getMetricWidgetType(){return"stories"}buildColorPalette(){const e=super.buildColorPalette();if(!this.config?.design?.colors)return e;const t=C(this.config);return{...e,"text-30":g(t.text,.3),"text-45":g(t.text,.45),"primary-hover":M("#FFFFFF",.45,t.primary),"card-passive-border":"#DFDFDF","arrow-chevron":"#3A3A3A","arrow-bg-hover":"#DBDBDB","volume-muted":"#919191","icon-glyph":"#323232"}}_showBadge(){this._hideTimer!==null&&(clearTimeout(this._hideTimer),this._hideTimer=null),this._badgeVisible=!0}_cancelHideTimer(){this._hideTimer!==null&&(clearTimeout(this._hideTimer),this._hideTimer=null)}_startHideTimer(e){this._hideTimer!==null&&clearTimeout(this._hideTimer),this._hideTimer=setTimeout(()=>{this._badgeVisible=!1,this._hideTimer=null},e)}_onWidgetEnter(){this._overWidget=!0,this._showBadge()}_onWidgetLeave(){this._overWidget=!1,this._overBadge||this._startHideTimer(250)}_onBadgeEnter(){this._overBadge=!0,this._cancelHideTimer()}_onBadgeLeave(){this._overBadge=!1,this._overWidget||this._startHideTimer(250)}connectedCallback(){const e=this.config?.design?.colorMode;super.connectedCallback(),e&&this.config?.design?.colorMode!==e&&(this.config={...this.config,design:{...this.config.design,colorMode:e}}),window.addEventListener("keydown",this._onKeyDown),window.addEventListener("resize",this._updateViewerScale)}firstUpdated(){this.config&&(this.config={...this.config})}disconnectedCallback(){super.disconnectedCallback(),this._hideTimer!==null&&(clearTimeout(this._hideTimer),this._hideTimer=null),this._stopAutoAdvance(),window.removeEventListener("keydown",this._onKeyDown),window.removeEventListener("resize",this._updateViewerScale)}get _settings(){return this.config?.settings??{}}get _displayMode(){return this._settings.displayMode==="launcher"?"launcher":"strip"}get _showCardMeta(){return this._settings.showCardMeta!==!1}get _edgeFade(){return this._settings.edgeFade!==!1}get _cta(){const e=this._settings.cta??{};return{mode:e.mode==="link"?"link":"form",linkUrl:e.linkUrl??""}}get _layout(){const e=this._settings.layout??{};return{position:e.position??"bottom-right",offsetX:e.offsetX??16,offsetY:e.offsetY??16}}_text(e,t){return this.config?.texts?.[e]||t}_scrollStrip(e){const t=this.renderRoot.querySelector(".strip__viewport"),o=this.renderRoot.querySelector(".strip__track");if(!t||!o)return;const r=Math.max(0,o.scrollWidth-t.clientWidth),s=this._stripOffset+e*E*2;this._stripOffset=Math.min(r,Math.max(0,s))}_openViewer(e){this._storyIndex=Math.min(p.length-1,Math.max(0,e)),this._markViewed(this._storyIndex),this._viewerOpen=!0,this._formOpen=!1,this._submitted=!1,this._updateViewerScale(),this._startAutoAdvance(),this.updateComplete.then(()=>{this.renderRoot.querySelector(".viewer-overlay__close")?.focus()})}_closeViewer(){this._viewerOpen=!1,this._formOpen=!1,this._stopAutoAdvance()}_markViewed(e){if(this._viewed.has(e))return;const t=new Set(this._viewed);t.add(e),this._viewed=t}_goToStory(e){const t=Math.min(p.length-1,Math.max(0,e));this._storyIndex=t,this._markViewed(t)}_nextStory(){this._storyIndex>=p.length-1||(this._storyIndex+=1,this._markViewed(this._storyIndex))}_prevStory(){this._storyIndex<=0||(this._storyIndex-=1)}_startAutoAdvance(){this._stopAutoAdvance(),!window.matchMedia("(prefers-reduced-motion: reduce)").matches&&(this._autoTimer=setInterval(()=>{if(!(this._autoPaused||!this._viewerOpen||this._formOpen)){if(this._storyIndex>=p.length-1){this._closeViewer();return}this._nextStory()}},F))}_stopAutoAdvance(){this._autoTimer!==null&&(clearInterval(this._autoTimer),this._autoTimer=null)}_openForm(){this._onCtaActivate(),this._formOpen=!0,this._submitted=!1,this.updateComplete.then(()=>{this.renderRoot.querySelector(".viewer-form__input")?.focus()})}_onCtaActivate(){k("wlab_stories_click"),this.config?.uid&&$(this.config.uid,"cta")}_onSubmit(e){e.preventDefault(),this._phone.trim()&&(this._submitted=!0)}render(){if(!this.isOpen)return i`${_}`;const e=this._layout,t={"--wl-offset-x":`${e.offsetX}px`,"--wl-offset-y":`${e.offsetY}px`};return i`
      <div
        class="stories"
        data-display-mode=${this._displayMode}
        data-position=${e.position}
        data-card-meta=${this._showCardMeta?"on":"off"}
        data-edge-fade=${this._edgeFade?"on":"off"}
        data-viewer-open=${this._viewerOpen?"true":"false"}
        style=${w(t)}
        @mouseenter=${()=>this._onWidgetEnter()}
        @mouseleave=${()=>this._onWidgetLeave()}
      >
        ${this._displayMode==="strip"?this._renderStrip():this._renderLauncher()}
        ${this._viewerOpen?this._renderViewer():_}
        ${this._renderBadge()}
      </div>
    `}_renderBadge(){if(this.config?.design?.hideLogo)return _;const e={badge:!0,"badge--visible":this._badgeVisible};return i`
      <div
        class=${u(e)}
        @mouseenter=${()=>this._onBadgeEnter()}
        @mouseleave=${()=>this._onBadgeLeave()}
      >
        <wl-copyright></wl-copyright>
      </div>
    `}_renderStrip(){const e={transform:`translateX(${-this._stripOffset}px)`};return i`
      <div class="strip">
        <div class="strip__viewport">
          <div class="strip__track" style=${w(e)}>
            ${p.map((t,o)=>this._renderCard(t,o))}
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
    `}_cardThumb(e){return e.type==="video"?e.poster??e.src:e.src}_renderCard(e,t){const o=this._showCardMeta,r=this._text("cardLabel","Акция"),s={card:!0,"card--passive":this._viewed.has(t),"card--plain":!o};return i`
      <button
        class=${u(s)}
        aria-label=${`История ${t+1}${o?`: ${r}`:""}`}
        @click=${()=>this._openViewer(t)}
      >
        <span class="card__border" aria-hidden="true"></span>
        <span class="card__image"><img src=${this._cardThumb(e)} alt="" loading="lazy" /></span>
        ${o?i`
          <span class="card__scrim" aria-hidden="true"></span>
          <span class="card__label">${r}</span>
          <span class="card__icon" aria-hidden="true">${f(`card-${t}`)}</span>
        `:_}
      </button>
    `}_renderLauncher(){const e=this._text("cardLabel","Акция");return i`
      <div class="launcher">
        <button
          class="card card--launcher"
          aria-label=${`Открыть истории: ${e}`}
          @click=${()=>this._openViewer(0)}
        >
          <span class="card__border card__border--segmented" aria-hidden="true">${X()}</span>
          <span class="card__image"><img src=${W} alt="" /></span>
          <span class="card__scrim" aria-hidden="true"></span>
          <span class="card__label">${e}</span>
          <span class="card__icon" aria-hidden="true">${f("launcher")}</span>
        </button>
      </div>
    `}_renderViewer(){const e=this._text("collectionTitle","Необычная коллекция"),t=this._text("storyTitle","Пушистые диваны"),o=this._text("storyDescription","Необычный пушистый диван для вашего  интерьера уже у нас"),r=p[this._storyIndex];return i`
      <div
        class="viewer-overlay"
        role="dialog"
        aria-modal="true"
        aria-label=${e}
        @mouseenter=${()=>{this._autoPaused=!0}}
        @mouseleave=${()=>{this._autoPaused=!1}}
        @focusin=${()=>{this._autoPaused=!0}}
        @focusout=${()=>{this._autoPaused=!1}}
      >
        <div class="viewer-stage" style=${w({"--viewer-scale":String(this._viewerScale)})}>
        <div class="viewer" data-form=${this._formOpen?"open":"closed"}>
          <div class="viewer__media" aria-hidden="true">
            ${r.type==="video"?i`<video
                  src=${r.src}
                  poster=${r.poster??""}
                  autoplay
                  loop
                  playsinline
                  ?muted=${this._muted}
                  .muted=${this._muted}
                ></video>`:i`<img src=${r.src} alt="" />`}
          </div>
          <div class="viewer__scrim" aria-hidden="true"></div>

          <div class="viewer__progress" role="tablist" aria-label="Сюжеты">
            ${p.map((s,h)=>i`
              <button
                class=${u({"viewer__progress-seg":!0,"is-active":h<=this._storyIndex})}
                role="tab"
                aria-selected=${h===this._storyIndex}
                aria-label=${`Сюжет ${h+1}`}
                @click=${()=>this._goToStory(h)}
              ></button>
            `)}
          </div>

          <div class="viewer__head">
            <div class="viewer__head-title">
              <span class="viewer__head-icon" aria-hidden="true">${q()}</span>
              <span class="viewer__head-text">${e}</span>
            </div>
            <button
              class="viewer__volume"
              aria-label=${this._muted?"Включить звук":"Выключить звук"}
              aria-pressed=${!this._muted}
              @click=${()=>{this._muted=!this._muted}}
            >${this._muted?Y():Z()}</button>
          </div>

          <p class="viewer__story-title">${t}</p>
          <p class="viewer__story-desc">${o}</p>

          ${this._renderCta()}

          <div class="viewer__nav">
            <button
              class="arrow arrow--free arrow--prev viewer__nav-prev"
              aria-label="Предыдущий сюжет"
              ?disabled=${this._storyIndex===0}
              @click=${()=>this._prevStory()}
            >${v()}</button>
            <button
              class="arrow arrow--free viewer__nav-next"
              aria-label="Следующий сюжет"
              ?disabled=${this._storyIndex>=p.length-1}
              @click=${()=>this._nextStory()}
            >${v()}</button>
          </div>

          ${this._formOpen?this._renderForm():_}
        </div>
        </div>

        <button
          class="viewer-overlay__close"
          aria-label="Закрыть"
          @click=${()=>this._closeViewer()}
        >${x()}</button>
      </div>
    `}_renderCta(){const e=this._text("buttonText","Хочу такой же!"),t=this._cta;return t.mode==="link"&&t.linkUrl?i`
        <a
          class="viewer__cta"
          href=${t.linkUrl}
          target="_blank"
          rel="noopener noreferrer"
          @click=${()=>this._onCtaActivate()}
        >
          <span class="viewer__cta-text">${e}</span>
          <span class="viewer__cta-icon" aria-hidden="true">${m()}</span>
        </a>
      `:i`
      <button
        class="viewer__cta"
        aria-haspopup="dialog"
        aria-expanded=${this._formOpen}
        @click=${()=>this._openForm()}
      >
        <span class="viewer__cta-text">${e}</span>
        <span class="viewer__cta-icon" aria-hidden="true">${m()}</span>
      </button>
    `}_renderForm(){const e=this._text("formTitle","Оставьте номер телефона"),t=this._text("phonePlaceholder","+7 (___) ___-__-__"),o=this._text("submitText","Отправить"),r=this._text("successText","Спасибо! Мы скоро свяжемся с вами.");return i`
      <div class="viewer-form" role="dialog" aria-label=${e}>
        <button
          class="viewer-form__close"
          aria-label="Закрыть форму"
          @click=${()=>{this._formOpen=!1}}
        >${x()}</button>
        ${this._submitted?i`<p class="viewer-form__success">${r}</p>`:i`
            <p class="viewer-form__title">${e}</p>
            <form class="viewer-form__row" @submit=${s=>this._onSubmit(s)}>
              <input
                class="viewer-form__input"
                type="tel"
                inputmode="tel"
                autocomplete="tel"
                placeholder=${t}
                .value=${this._phone}
                @input=${s=>{this._phone=s.target.value}}
                required
              />
              <button class="viewer-form__submit" type="submit">
                <span>${o}</span>
                <span class="viewer-form__submit-icon" aria-hidden="true">${m()}</span>
              </button>
            </form>
          `}
      </div>
    `}}l([n()],a.prototype,"_badgeVisible");l([n()],a.prototype,"_viewerOpen");l([n()],a.prototype,"_storyIndex");l([n()],a.prototype,"_stripOffset");l([n()],a.prototype,"_muted");l([n()],a.prototype,"_viewed");l([n()],a.prototype,"_formOpen");l([n()],a.prototype,"_submitted");l([n()],a.prototype,"_phone");l([n()],a.prototype,"_viewerScale");customElements.get("wl-stories-skin1")||customElements.define("wl-stories-skin1",a);const oe={tagName:"wl-stories-skin1"};export{a as StoriesSkin1,oe as skinRegistration};
