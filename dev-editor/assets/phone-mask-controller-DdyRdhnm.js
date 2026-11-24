import{i as x,a as y,b as g}from"./lit-element-Cn7T8F1W.js";import{n as p}from"./state-DXFthFZC.js";import{a as _,t as v}from"./trigger-placement-12sUEe1H.js";import{p as w}from"./message-bus-KbWaFWkL.js";var M=Object.defineProperty,u=(n,t,e,s)=>{for(var i=void 0,o=n.length-1,r;o>=0;o--)(r=n[o])&&(i=r(t,e,i)||i);return i&&M(t,e,i),i};class d extends x{constructor(){super(...arguments),this.color=null,this.iconColor=null,this.shape="circle",this.size="md",this.icon=null,this.position="bottom-right",this.offsetX=null,this.offsetY=null,this.animated=!1,this.widgetCode="",this._onClick=()=>{w("trigger-click",{widgetCode:this.widgetCode})}}static{this.styles=y`
    :host {
      --btn-size: 75px;
      --btn-bg: #0047FF;
      /* BUG_FIX_CONTEXT: раньше цвет иконки был захардкожен #fff, потом
         вычислялся по WCAG-контрасту к фону кнопки. Оба варианта расходились с
         дизайном: иконка должна повторять background активной цветовой схемы
         виджета. Теперь это переменная, значение приходит извне (iconColor). */
      --btn-fg: #ffffff;
      position: fixed;
      z-index: 2147483646;
      display: flex;
      align-items: center;
      justify-content: center;
      width: var(--btn-size);
      height: var(--btn-size);
      background-color: var(--btn-bg);
      color: var(--btn-fg);
      font-size: calc(var(--btn-size) * 0.4);
      line-height: 1;
      cursor: pointer;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }

    :host(:hover) {
      transform: scale(1.1);
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
    }

    /* Modifier classes (lg/md/sm, circle/square/rounded, animated, position)
       are applied dynamically in render() via this.classList — IDE cannot see
       that, hence the noinspection hint. */
    /*noinspection CssUnusedSymbol*/
    :host(.lg) { --btn-size: 100px; }
    /*noinspection CssUnusedSymbol*/
    :host(.md) { --btn-size: 75px; }
    /*noinspection CssUnusedSymbol*/
    :host(.sm) { --btn-size: 50px; }

    /*noinspection CssUnusedSymbol*/
    :host(.circle) { border-radius: 50%; }
    /*noinspection CssUnusedSymbol*/
    :host(.square) { border-radius: 0; }
    /*noinspection CssUnusedSymbol*/
    :host(.rounded) { border-radius: calc(var(--btn-size) / 3); }

    /*noinspection CssUnusedSymbol*/
    :host(.animated) { animation: wl-pulse 1s infinite ease; }

    /*noinspection CssUnusedSymbol*/
    :host(.bottom-right) {
      bottom: calc(var(--btn-size) * 0.6);
      right: calc(var(--btn-size) * 0.6);
    }
    /*noinspection CssUnusedSymbol*/
    :host(.bottom-left) {
      bottom: calc(var(--btn-size) * 0.6);
      left: calc(var(--btn-size) * 0.6);
    }
    /*noinspection CssUnusedSymbol*/
    :host(.bottom-center) {
      bottom: calc(var(--btn-size) * 0.6);
      left: 50%;
      /* BUG_FIX_CONTEXT: используем свойство translate (а не transform: translateX),
         чтобы центрирование не конфликтовало с transform: scale из wl-pulse. */
      translate: -50% 0;
    }
    /*noinspection CssUnusedSymbol*/
    :host(.top-right) {
      top: calc(var(--btn-size) * 0.6);
      right: calc(var(--btn-size) * 0.6);
    }
    /*noinspection CssUnusedSymbol*/
    :host(.top-left) {
      top: calc(var(--btn-size) * 0.6);
      left: calc(var(--btn-size) * 0.6);
    }

    img, svg {
      width: calc(var(--btn-size) * 0.4);
      height: calc(var(--btn-size) * 0.4);
    }

    /* BUG_FIX_CONTEXT: прежний wl-pulse качал только box-shadow, из-за чего
       кнопка перестала пульсировать размером (в оригинале pulse делал
       transform: scale3d 1 → 1.05). Возвращаем масштаб + тень в одном keyframe. */
    @keyframes wl-pulse {
      0% { transform: scale3d(1, 1, 1); box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15); }
      50% { transform: scale3d(1.05, 1.05, 1.05); box-shadow: 0 4px 24px rgba(0, 0, 0, 0.3); }
      100% { transform: scale3d(1, 1, 1); box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15); }
    }
  `}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this._onClick)}disconnectedCallback(){this.removeEventListener("click",this._onClick),super.disconnectedCallback()}render(){["sm","md","lg","circle","square","rounded",..._,"animated"].forEach(s=>this.classList.remove(s)),this.classList.add(this.size),this.classList.add(this.shape),this.classList.add(this.position),this.animated&&this.classList.add("animated");const e=v(this.position,this.offsetX,this.offsetY);for(const[s,i]of Object.entries(e))this.style.setProperty(s,i);return this._applyColorProps(),g`
      ${this.icon?g`<img src=${this.icon} alt="" />`:g`<svg fill="none" viewBox="0 0 80 80">
            <path
              d="M40 23.334H25a8.333 8.333 0 010-16.667c11.666 0 15 16.667 15 16.667zm0 0h15a8.333 8.333 0 000-16.667c-11.667 0-15 16.667-15 16.667zm0 0v50M6.665 46.667h66.667M6.666 34v28.667c0 3.734 0 5.6.727 7.027a6.666 6.666 0 002.913 2.913c1.426.727 3.293.727 7.027.727h45.333c3.734 0 5.6 0 7.027-.727a6.667 6.667 0 002.913-2.913c.727-1.427.727-3.293.727-7.027V34c0-3.733 0-5.6-.727-7.026a6.667 6.667 0 00-2.913-2.914c-1.427-.726-3.293-.726-7.027-.726H17.333c-3.734 0-5.6 0-7.027.726a6.666 6.666 0 00-2.913 2.914C6.666 28.4 6.666 30.267 6.666 34z"
              stroke="currentColor"
              stroke-width="6"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>`}
    `}_applyColorProps(){if(!!this.iconColor?this.style.setProperty("--btn-fg",this.iconColor):this.style.removeProperty("--btn-fg"),!this.color){this.style.removeProperty("--btn-bg");return}this.style.setProperty("--btn-bg",this.color)}}u([p()],d.prototype,"color");u([p()],d.prototype,"iconColor");u([p()],d.prototype,"shape");u([p()],d.prototype,"size");u([p()],d.prototype,"icon");u([p()],d.prototype,"position");u([p({type:Number})],d.prototype,"offsetX");u([p({type:Number})],d.prototype,"offsetY");u([p({type:Boolean})],d.prototype,"animated");u([p({type:String,attribute:!1})],d.prototype,"widgetCode");customElements.get("wl-trigger-button")||customElements.define("wl-trigger-button",d);function z(n){const t=[],e=[];let s=0;for(;s<n.length;){const a=n[s];if(a==="["&&n[s+1]==="#"&&n[s+2]==="]"){const h=t.length;t.push({kind:"optional"}),e.push({kind:"digit",tokenIndex:h}),s+=3;continue}if(a==="#"){const h=t.length;t.push({kind:"required"}),e.push({kind:"digit",tokenIndex:h}),s+=1;continue}if(a>="0"&&a<="9"){const h=t.length;t.push({kind:"fixed",char:a}),e.push({kind:"digit",tokenIndex:h}),s+=1;continue}e.push({kind:"literal",char:a}),s+=1}let i="";for(const a of t)if(a.kind==="fixed")i+=a.char;else break;let o="",r=!1;for(const a of e){if(a.kind==="literal"){if(r)break;continue}const h=t[a.tokenIndex];if(h.kind!=="fixed")break;o+=h.char,r=!0}let l=0,c=0;for(const a of t)c+=1,a.kind!=="optional"&&(l+=1);return{raw:n,tokens:t,pattern:e,start:i,dialCode:o,minDigits:l,maxDigits:c}}function U(n){return!n||n.length===0?[]:n.map(t=>z(t))}function m(n,t){if(n.length>t.maxDigits)return!1;for(let e=0;e<n.length;e++){const s=t.tokens[e];if(s.kind==="fixed"&&s.char!==n[e])return!1}return!0}function C(n,t){for(const i of t)if(m(n,i)){const o=Math.min(i.start.length,n.length);return{mask:i,matchLength:o,compatible:!0}}let e=null,s=0;for(const i of t){let o=0;for(let r=0;r<i.start.length&&n[r]===i.start[r];r++)o+=1;o>s&&(s=o,e=i)}return{mask:e??t[0],matchLength:s,compatible:!1}}function I(n,t){const e=t.filter(l=>l.dialCode!==""&&n.startsWith(l.dialCode));if(e.length>0){const l=e[0],c=l.dialCode.length;let a=n.substring(0,c);return a+=l.start.substring(c),a+=n.substring(c),{mask:l,digits:a}}for(const l of t){const c=l.start+n;if(m(c,l))return{mask:l,digits:c}}const s=C(n,t),i=s.mask,o=s.matchLength;let r=i.start.substring(0,o);return n.length>o&&(r+=i.start.substring(o),r+=n.substring(o)),{mask:i,digits:r}}function D(n,t,e){if(e.length===0)return{digits:t,mask:null,rewritten:!1};if(t.length===0)return{digits:"",mask:e[0],rewritten:!1};let s=t,i=!1;const o=n.length===0,r=s.length===1&&s==="8",l=e.some(f=>f.start==="7");o&&r&&l&&(s="7",i=!0);const c=C(s,e);if(c.compatible){const f=s.slice(0,c.mask.maxDigits);return{digits:f,mask:c.mask,rewritten:i||f!==s}}const a=e.find(f=>s.length>f.maxDigits&&m(s.slice(0,f.maxDigits),f));if(a)return{digits:s.slice(0,a.maxDigits),mask:a,rewritten:!0};const h=I(s,e);return{digits:h.digits.slice(0,h.mask.maxDigits),mask:h.mask,rewritten:!0}}function P(n,t){let e="",s="";for(const i of t.pattern){if(i.kind==="literal"){s+=i.char;continue}if(i.tokenIndex>=n.length)break;const o=t.tokens[i.tokenIndex],r=o.kind==="fixed"?o.char:n[i.tokenIndex];e+=s+r,s=""}return e}function S(n){let t="";for(const e of n.pattern){if(e.kind==="literal"){t+=e.char;continue}const s=n.tokens[e.tokenIndex];s.kind==="fixed"?t+=s.char:s.kind==="required"&&(t+="_")}return t.trimEnd()}function k(n){const t=n.rawValue.replace(/\D+/g,""),e=Math.max(0,Math.min(n.rawValue.length,n.rawCaret)),s=n.rawValue.substring(0,e).replace(/\D+/g,"").length,i=D(n.previousDigits,t,n.masks),o=i.mask??n.masks[0],r=P(i.digits,o),l=i.rewritten?i.digits.length:Math.min(s,i.digits.length),c=L(r,o,l);return{formatted:r,digits:i.digits,mask:o,caret:c}}function L(n,t,e){if(e<=0){let o=0;for(const r of t.pattern){if(o>=n.length)break;if(r.kind==="literal"){o+=1;continue}if(t.tokens[r.tokenIndex].kind==="fixed"){o+=1;continue}break}return o}let s=0,i=0;for(const o of t.pattern){if(i>=n.length)break;if(o.kind==="literal"){i+=1;continue}const r=t.tokens[o.tokenIndex];if(s+=1,i+=1,r.kind!=="fixed"&&s>=e)break}return i}function b(n){return n.replace(/[^+\d()\-\s]/g,"")}class F{constructor(t,e){this.formatted="",this.digits="",this.mask=null,this.placeholder="",this._pendingCaret=null,this._parsedMasks=[],this._lastMasksSource=void 0,this._host=t,this._options=e,t.addController(this)}hostConnected(){this._syncMasks()}_syncMasks(){const t=this.placeholder;this._getMasks(),this.placeholder!==t&&this._host.requestUpdate()}hostUpdated(){if(this._syncMasks(),this._pendingCaret===null)return;const t=this._options.getInput();if(!t){this._pendingCaret=null;return}const e=this._pendingCaret;this._pendingCaret=null;try{t.setSelectionRange(e,e)}catch{}}onInput(t){const e=t.target;if(!e)return;const s=this._getMasks();if(s.length===0){const o=b(e.value);this.digits=o.replace(/\D+/g,""),this.formatted=o,this.mask=null,this._host.requestUpdate();return}const i=k({previousDigits:this.digits,rawValue:e.value,rawCaret:e.selectionStart??e.value.length,masks:s});this.digits=i.digits,this.formatted=i.formatted,this.mask=i.mask,this._pendingCaret=i.caret,this._host.requestUpdate()}seed(t){const e=this._getMasks();if(e.length===0){const i=b(t);this.digits=i.replace(/\D+/g,""),this.formatted=i,this.mask=null,this._host.requestUpdate();return}const s=k({previousDigits:"",rawValue:t,rawCaret:t.length,masks:e});this.digits=s.digits,this.formatted=s.formatted,this.mask=s.mask,this._host.requestUpdate()}reset(){this.digits="",this.formatted="",this.mask=null,this._pendingCaret=null,this._host.requestUpdate()}_getMasks(){const t=this._options.getMasks();return t!==this._lastMasksSource&&(this._lastMasksSource=t,this._parsedMasks=U(t),this._refreshPlaceholder()),this._parsedMasks}_refreshPlaceholder(){if(this._parsedMasks.length===0){this.placeholder="";return}this.placeholder=S(this._parsedMasks[0])}}export{F as P,d as W};
