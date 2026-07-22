import{A as y,b as $}from"./lit-element-Cn7T8F1W.js";import{e as E}from"./class-map-CwBx3DFz.js";import{o as R}from"./style-map-C_AK3hrM.js";import"./wlab-copyright-DS2BbYjn.js";let M=null;function T(){if(M)return M;try{const o=document.createElement("canvas").getContext("2d");return o&&(M=o),M}catch{return null}}function X(t,o){const e=T();return e?(e.font=`400 16px ${o}, system-ui, sans-serif`,e.measureText(t).width):t.length*9}function B(t,o,e,p=!1){const r=t.split(" ");if(r.length===0)return t;const s=[];for(let c=0;c<r.length-1;c++){const f=r[c],i=r[c+1]??"",n=f.length<=3,a=n?X(f+" "+i,o):1/0,m=n&&a<=e?" ":" ";s.push(f+m)}const u=r[r.length-1]??"",d=p&&u.length<=3?" ":"";return s.push(u+d),s.join("")}function Y(t){return t===0?"0px":`${Math.max(16,Math.round(t*.4))}px`}function k(t){return t===0?"0px":`${Math.max(4,Math.round(t*.24))}px`}function H(t,o,e,p,g){const r=o.split("-"),s=r[0]??"bottom",u=r[1]??"right";if(t==="fullwidth")return s==="top"?{top:"0"}:{bottom:"0"};const d=document.documentElement.clientWidth,c=Math.max(288,Math.min(Math.floor(d*.5),670)),i=(d-c)/3,n={},a=[];if(i<=0)n.left="50%",a.push("translateX(-50%)");else if(u==="center"){const l=i/2,b=Math.max(-l,Math.min(e,l));n.left="50%",a.push(`translateX(calc(-50% + ${Math.round(b)}px))`)}else if(u==="left"){const l=Math.max(0,Math.min(e,i));n.left=`${Math.round(l)}px`}else{const l=Math.max(0,Math.min(e,i));n.right=`${Math.round(l)}px`}const m=document.documentElement.clientHeight,x=s==="center"?0:16,w=s==="center"?Math.floor(m/6):Math.floor(m/3)-g,h=Math.max(x,Math.min(p,Math.max(x,w)));return s==="top"?n.top=`${h}px`:s==="center"?(n.top="50%",a.push(`translateY(calc(-50% + ${h}px))`)):n.bottom=`${h}px`,a.length>0&&(n.transform=a.join(" ")),n}function C(t){if(t.config.design.hideLogo)return y;const o={badge:!0,"badge--visible":t._badgeVisible};return $`
    <div
      class=${E(o)}
      @mouseenter=${()=>t._onBadgeEnter()}
      @mouseleave=${()=>t._onBadgeLeave()}
    >
      <wl-copyright></wl-copyright>
    </div>
  `}function q(t){if(!t.isOpen)return $`${y}`;const o=t.config.settings.layout,e=o?.mode??"compact",p=o?.position??"bottom-right",g=o?.offsetX??16,r=o?.offsetY??16,s=t.renderRoot?.querySelector(".bar"),u=s?Math.ceil(s.offsetHeight/2):40,d=H(e,p,g,r,u),c=p.startsWith("top"),f=t.config.settings.borderRadius??50,i=Y(f),n=k(f),a=t.config.design.shadow!==!1,x=(t.config.design.colorMode??"light")==="dark"?"#000000B8":"#11111152",w=a?`0px 8px 32px -16px ${x}`:"none",h=t.config.design.icon?.url,l=t.config.policy?.url||t.config.policy?.customUrl||"",b=t.renderRoot?.querySelector(".bar__text"),v=b?b.clientWidth:9999,_=t.config.design.font?.family??"system-ui",S=t.config.texts.mainText??t.config.texts.text??"",W=B(S,_,v,!0),P=B(t.config.texts.policy,_,v);return $`
    <div class="wrapper wrapper--${e} ${c?"wrapper--badge-below":""}" style=${R({...d,...{"--wl-bar-radius":i,"--wl-btn-radius":n,"--wl-bar-shadow":w}})}>
      ${C(t)}
      <div
        class="bar"
        @mouseenter=${()=>t._onBarEnter()}
        @mouseleave=${()=>t._onBarLeave()}
      >
        ${h?$`<img class="bar__image" src="${h}" alt="" />`:y}
        <div class="bar__text">${W}<a class="bar__link" href="${l}" target="_blank" rel="noopener">${P}</a></div>
        <button class="bar__button" @click=${()=>t.close()}>
          ${t.config.texts.buttonText}
        </button>
      </div>
    </div>
  `}export{C as renderBadge,q as renderRoot};
