import{r as m,A as c,b as s}from"./lit-element-Cn7T8F1W.js";import{e as x}from"./class-map-CwBx3DFz.js";import{o as w}from"./style-map-C_AK3hrM.js";import{r as a}from"./message-bus-Cdj7KN6I.js";import{W as y,r as v,a as g}from"./base-widget-xiXHSNh_.js";import{r as k}from"./recolor-image-Cnwuiur4.js";import{submitButtonClick as $}from"./api-client-CDB2DH5T.js";import"./wlab-copyright-DS2BbYjn.js";import{a as h}from"./color-utils-CXJK6gtN.js";const T=":host{display:block;font-family:var(--wl-font-family);left:0;right:0;z-index:2147483000}:host([data-sticky=true]){position:fixed}:host([data-sticky=true][data-anchor=top]){top:0;bottom:auto}:host([data-sticky=true][data-anchor=bottom]){bottom:0;top:auto}:host([data-sticky=false]){position:relative;top:auto;bottom:auto}.banner{position:relative;width:100%;max-width:var(--wl-preview-width, 100vw);display:flex;flex-direction:column;align-items:center;container-type:inline-size}.bar{position:relative;z-index:2;width:100%}.bg{position:absolute;inset:0;overflow:hidden;background:var(--color-bar-bg)}.bg-pattern{position:absolute;inset:0;width:100%;height:100%}.bg-image{position:absolute;inset:0;background-size:cover;background-position:center;background-repeat:no-repeat}.bg-overlay{position:absolute;inset:0;background:var(--color-bg-overlay)}.content{position:relative;z-index:1;display:flex;align-items:center;width:100%;box-sizing:border-box;padding:12px 32px}.icon{flex-shrink:0;width:40px;height:40px;border-radius:0;object-fit:contain;margin-right:16px}.text{flex:1;min-width:0;display:flex;align-items:center;justify-content:center;gap:8px;flex-wrap:wrap}.accent{font-size:20px;font-weight:700;color:var(--color-primary);white-space:nowrap}.main{font-size:20px;color:var(--color-text);white-space:nowrap}.marked{font-size:14px;font-weight:500;color:var(--color-marked-text);background:var(--color-marked-bg);padding:4px 12px;white-space:nowrap;line-height:1.3;margin-left:8px}.marked{border-radius:var(--wl-marked-radius, 0px)}.countdown{flex-shrink:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;padding:4px 16px;background:var(--color-background);border:1.5px solid var(--color-background);margin-left:20px;margin-right:11px;align-self:stretch}.countdown-values{display:flex;align-items:baseline;gap:6px;font-size:16px;line-height:24px;color:var(--color-text);white-space:nowrap}.countdown-num{font-weight:700;font-variant-numeric:tabular-nums}.countdown-unit{font-weight:400;font-size:14px}.countdown-sep{font-weight:400;opacity:.5}.countdown-caption{font-size:13px;line-height:16px;color:var(--color-countdown-caption);white-space:nowrap}.countdown{border-radius:var(--wl-btn-radius, 0px)}.button{flex-shrink:0;padding:4px 16px;font-size:16px;line-height:24px;font-weight:500;font-family:var(--wl-font-family);cursor:pointer;white-space:nowrap;border:1.5px solid var(--color-button-border);background:var(--color-button-bg);color:var(--color-button-text);transition:background .2s ease,opacity .2s ease;align-self:stretch;display:flex;align-items:center;justify-content:center}.button:hover{background:var(--color-button-hover-bg)}.button:active{opacity:.8}.button{border-radius:var(--wl-btn-radius, 0px)}.badge{position:absolute;left:50%;z-index:1;display:inline-flex;opacity:0;pointer-events:none;transition:transform .3s ease,opacity .3s ease}:host([data-anchor=top]) .badge{top:calc(100% + 4px);bottom:auto;transform:translate(-50%) translateY(calc(-100% - 8px))}:host([data-anchor=bottom]) .badge{bottom:calc(100% + 4px);top:auto;transform:translate(-50%) translateY(calc(100% + 8px))}:host([data-anchor=top]) .badge--visible,:host([data-anchor=bottom]) .badge--visible{opacity:1;pointer-events:auto;transform:translate(-50%) translateY(0)}@media(max-width:576px){:host([data-anchor=top]) .badge,:host([data-anchor=bottom]) .badge{opacity:1;pointer-events:auto;transform:translate(-50%) translateY(0)}}@container (max-width: 768px){.content{flex-wrap:wrap;padding:12px 16px 10px;justify-content:space-between;gap:0}.text{order:2;flex-basis:100%;justify-content:center;margin-top:12px}.accent,.main{font-size:16px;line-height:20px}.marked{font-size:12px;display:none}.countdown{order:0;flex-shrink:1;margin-left:0;margin-right:8px;padding:2px 10px}.countdown-values{font-size:14px;line-height:20px}.countdown-caption{display:none}.button{order:1;font-size:14px;line-height:20px;padding:2px 10px}.icon{display:none}}@container (max-width: 360px){.content{padding:8px 10px}.countdown{padding:2px 6px;margin-right:6px}.countdown-values{font-size:12px;gap:3px}.button{font-size:12px;padding:2px 8px}.accent,.main{font-size:14px}}";var B=Object.defineProperty,d=(p,t,e,o)=>{for(var i=void 0,n=p.length-1,l;n>=0;n--)(l=p[n])&&(i=l(t,e,i)||i);return i&&B(t,e,i),i};class r extends y{constructor(){super(...arguments),this._days=0,this._hours=0,this._minutes=0,this._seconds=0,this._bgIconW=0,this._bgIconH=0,this._recoloredIconUrl="",this._countdownTimer=null,this._loadedBgIconUrl="",this._recolorSrc="",this._recolorColor="",this._resizeObs=null,this._bodyPadProp=null,this._badgeVisible=!1,this._overWidget=!1,this._overBadge=!1,this._hideTimer=null}static{this.styles=[m(T)]}getMetricWidgetType(){return"promoBanner"}_handleBannerClick(){v("wlab_promoBanner_click"),this.config?.uid&&$(this.config.uid,"accept"),this.isEditMode||this.close()}buildColorPalette(){const t=super.buildColorPalette();if(!this.config?.design?.colors)return t;const e=g(this.config);return{...t,"bar-bg":e.background,"button-bg":e.primary,"button-text":e.background,"button-border":e.primary,"button-hover-bg":h(e.primary,.85),"marked-bg":e.primary,"marked-text":e.background,"countdown-border":h(e.text,.2),"countdown-caption":h(e.text,.72),"bg-overlay":h(e.background,.92)}}get _borderRadius(){return this.config?.settings?.borderRadius??50}_readImageUrl(t){if(typeof t=="string")return t;if(!t||typeof t!="object")return"";const e=t.url;if(typeof e=="string")return e;if(!e||typeof e!="object")return"";const o=e.url;return typeof o=="string"?o:""}get _backgroundType(){return this.config?.settings?.background?.type||"icon"}get _backgroundUrl(){const t=this.config?.settings?.background;return this._readImageUrl(t?.image)||this._readImageUrl(t?.url)}get _iconUrl(){return this._readImageUrl(this.config?.settings?.icon)}get _iconTintColor(){if(!this.config?.design?.colors)return"";const t=g(this.config);return this.config.design.colorMode==="dark"?"#ffffff":t.primary}get _endDate(){return this.config?.settings?.endDate||""}get _showEndDate(){return this.config?.settings?.showEndDate!==!1}get _anchor(){return String(this.config?.settings?.layout?.position||"top-center").startsWith("bottom")?"bottom":"top"}get _sticky(){return this._anchor==="bottom"?!0:this.config?.settings?.layout?.sticky!==!1}get _hideLogo(){return this.config?.design?.hideLogo===!0}_computeBtnRadius(t){return t===0?"0px":`${Math.max(4,Math.round(t*.3))}px`}_computeMarkedRadius(t){return t===0?"0px":`${Math.max(2,Math.round(t*.13))}px`}_showBadge(){this._hideTimer!==null&&(clearTimeout(this._hideTimer),this._hideTimer=null),this._badgeVisible=!0}_cancelHideTimer(){this._hideTimer!==null&&(clearTimeout(this._hideTimer),this._hideTimer=null)}_startHideTimer(t){this._hideTimer!==null&&clearTimeout(this._hideTimer),this._hideTimer=setTimeout(()=>{this._badgeVisible=!1,this._hideTimer=null},t)}_onWidgetEnter(){this._overWidget=!0,this._showBadge()}_onWidgetLeave(){this._overWidget=!1,this._overBadge||this._startHideTimer(150)}_onBadgeEnter(){this._overBadge=!0,this._cancelHideTimer()}_onBadgeLeave(){this._overBadge=!1,this._overWidget||this._startHideTimer(300)}_syncPlacement(){if(typeof document>"u"||!document.body)return;const t=this._anchor,e=this._sticky;if(this.setAttribute("data-anchor",t),this.setAttribute("data-sticky",String(e)),this._clearBodyPad(),!this.isOpen){this._teardownResize();return}if(e&&t==="bottom"){this._teardownResize();return}if(e){this._bodyPadProp="paddingTop",this._applyBodyPad(),this._ensureResizeObserver();return}this._teardownResize(),this._ensureDomSlot(t)}_ensureDomSlot(t){const e=document.body;t==="top"?e.firstElementChild!==this&&e.insertBefore(this,e.firstElementChild):e.lastElementChild!==this&&e.appendChild(this)}_applyBodyPad(){if(!this._bodyPadProp)return;const t=this.offsetHeight;t>0&&(document.body.style[this._bodyPadProp]=`${t}px`)}_clearBodyPad(){this._bodyPadProp&&(document.body.style[this._bodyPadProp]="",this._bodyPadProp=null)}_ensureResizeObserver(){this._resizeObs||typeof ResizeObserver>"u"||(this._resizeObs=new ResizeObserver(()=>this._applyBodyPad()),this._resizeObs.observe(this))}_teardownResize(){this._resizeObs&&(this._resizeObs.disconnect(),this._resizeObs=null)}connectedCallback(){super.connectedCallback(),this._updateCountdown(),this._countdownTimer=setInterval(()=>this._updateCountdown(),1e3),this._loadBgIcon(),this._recolorIcon()}disconnectedCallback(){super.disconnectedCallback(),this._countdownTimer!==null&&(clearInterval(this._countdownTimer),this._countdownTimer=null),this._hideTimer!==null&&(clearTimeout(this._hideTimer),this._hideTimer=null),this._teardownResize(),this._clearBodyPad()}willUpdate(t){super.willUpdate(t),t.has("config")&&(this._loadBgIcon(),this._recolorIcon())}updated(t){super.updated(t),this._syncPlacement()}_loadBgIcon(){const t=this._backgroundUrl;if(!t||this._backgroundType!=="icon"||t===this._loadedBgIconUrl)return;this._loadedBgIconUrl=t;const e=new Image;e.onload=()=>{let o=e.naturalWidth,i=e.naturalHeight;if(o>24||i>24){const n=Math.min(24/o,24/i);o=Math.round(o*n),i=Math.round(i*n)}this._bgIconW=o,this._bgIconH=i},e.src=t}_pad(t){return String(t).padStart(2,"0")}_updateCountdown(){if(!this._endDate){this._days=0,this._hours=0,this._minutes=0,this._seconds=0;return}const t=Date.now(),e=new Date(this._endDate).getTime(),o=Math.max(0,e-t),i=Math.floor(o/1e3);this._seconds=i%60,this._minutes=Math.floor(i/60)%60,this._hours=Math.floor(i/3600)%24,this._days=Math.floor(i/86400)}_renderBadge(){if(this._hideLogo)return c;const t={badge:!0,"badge--visible":this._badgeVisible};return s`
      <div
        class=${x(t)}
        @mouseenter=${()=>this._onBadgeEnter()}
        @mouseleave=${()=>this._onBadgeLeave()}
        @click=${e=>e.stopPropagation()}
      >
        <wl-copyright></wl-copyright>
      </div>
    `}_recolorIcon(){const t=this._iconUrl,e=this.config?.design?.colors?g(this.config):null,o=e?e.primary:"";if(!t||!o){this._recoloredIconUrl="";return}t===this._recolorSrc&&o===this._recolorColor||(this._recolorSrc=t,this._recolorColor=o,k(t,o).then(i=>{this._recoloredIconUrl=i}).catch(()=>{this._recoloredIconUrl=""}))}_renderIcon(){const t=this._recoloredIconUrl||this._iconUrl;return s`<img class="icon" src="${t}" alt="" />`}_renderBackground(){const t=this._backgroundUrl;if(!t)return c;if(this._backgroundType==="image")return s`
        <div class="bg">
          <div class="bg-image" style="background-image: url(${t})"></div>
          <div class="bg-overlay"></div>
        </div>
      `;const e=this._bgIconW,o=this._bgIconH;if(e===0||o===0)return s`<div class="bg"><div class="bg-overlay"></div></div>`;const i=e+12,n=o+16,l=i,_=n*2,f=i/2,b=this._iconTintColor,u=b?"url(#icon-tint)":void 0;return s`
      <div class="bg">
        <svg class="bg-pattern" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <defs>
            <filter id="icon-tint" color-interpolation-filters="sRGB">
              <feFlood flood-color="${b||"#000"}" result="color" />
              <feComposite in="color" in2="SourceAlpha" operator="in" />
            </filter>
            <pattern id="bg-icons" x="0" y="0" width="${l}" height="${_}" patternUnits="userSpaceOnUse">
              <image href="${t}" x="0" y="0" width="${e}" height="${o}" filter="${u}" />
              <image href="${t}" x="${f}" y="${n}" width="${e}" height="${o}" filter="${u}" />
              <image href="${t}" x="${f-l}" y="${n}" width="${e}" height="${o}" filter="${u}" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#bg-icons)" />
        </svg>
        <div class="bg-overlay"></div>
      </div>
    `}_renderCountdown(){return s`
      <div class="countdown">
        <div class="countdown-values">
          <span class="countdown-num">${this._pad(this._days)}</span>
          <span class="countdown-unit">д</span>
          <span class="countdown-sep">:</span>
          <span class="countdown-num">${this._pad(this._hours)}</span>
          <span class="countdown-unit">ч</span>
          <span class="countdown-sep">:</span>
          <span class="countdown-num">${this._pad(this._minutes)}</span>
          <span class="countdown-unit">м</span>
          <span class="countdown-sep">:</span>
          <span class="countdown-num">${this._pad(this._seconds)}</span>
          <span class="countdown-unit">с</span>
        </div>
        <span class="countdown-caption">до конца акции</span>
      </div>
    `}render(){if(!this.isOpen)return s`${c}`;const t=this._iconUrl!=="",e=this._borderRadius,o={"--wl-btn-radius":this._computeBtnRadius(e),"--wl-marked-radius":this._computeMarkedRadius(e)};return s`
      <div
        class="banner"
        style=${w(o)}
        @click=${()=>this._handleBannerClick()}
        @mouseenter=${()=>this._onWidgetEnter()}
        @mouseleave=${()=>this._onWidgetLeave()}
      >
        <div class="bar">
          ${this._renderBackground()}
          <div class="content">
            ${t?this._renderIcon():c}
            <div class="text">
              <span class="accent">${this.config?.texts?.accentText||""}</span>
              <span class="main">${this.config?.texts?.text||""}</span>
              ${this.config?.texts?.markedText?s`<span class="marked">${this.config.texts.markedText}</span>`:c}
            </div>
            ${this._showEndDate?this._renderCountdown():c}
            <button class="button" @click=${i=>{i.stopPropagation(),this._handleBannerClick()}}>
              ${this.config?.texts?.buttonText||""}
            </button>
          </div>
        </div>
        ${this._renderBadge()}
      </div>
    `}}d([a()],r.prototype,"_days");d([a()],r.prototype,"_hours");d([a()],r.prototype,"_minutes");d([a()],r.prototype,"_seconds");d([a()],r.prototype,"_bgIconW");d([a()],r.prototype,"_bgIconH");d([a()],r.prototype,"_recoloredIconUrl");d([a()],r.prototype,"_badgeVisible");customElements.get("wl-promo-banner-skin1")||customElements.define("wl-promo-banner-skin1",r);const D={tagName:"wl-promo-banner-skin1"};export{r as PromoBannerSkin1,D as skinRegistration};
