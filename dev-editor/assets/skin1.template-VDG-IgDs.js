import{b as t,A as n}from"./lit-element-Cn7T8F1W.js";import{l as v}from"./countdown-C9UoJOQn.js";import{e as w}from"./class-map-CwBx3DFz.js";import"./wlab-copyright-DS2BbYjn.js";import"./message-bus-Cdj7KN6I.js";function $(e){const i=new Date(e);return`Только до ${new Intl.DateTimeFormat("ru-RU",{day:"numeric",month:"long"}).format(i)}`}function b(e){return e.config.design.hideLogo?n:t`<div class="badge--mobile"><wl-copyright></wl-copyright></div>`}function h(e){if(e.config.design.hideLogo)return n;const i={"badge--desktop":!0,"badge--visible":e._badgeVisible};return t`
    <div
      class=${w(i)}
      @mouseenter=${()=>e._onBadgeEnter()}
      @mouseleave=${()=>e._onBadgeLeave()}
    >
      <wl-copyright></wl-copyright>
    </div>
  `}function L(e){const i=e.config?.triggers?.button,r=i?.enabled??!1,o=i?.viewVariant||"",d=i?.size||"",s=i?.animation?"animated":"",c=["wlab-widget-button",o,d,s].filter(Boolean).join(" ");return e.isOpen?t`
    <a
      class="${c}"
      ?hidden=${!r}
      @click=${l=>{l.preventDefault(),e.openTrigger="button",e.open()}}
    >
      <i class="icon-gift"><svg><use href="#wl-icon-gift"></use></svg></i>
    </a>

    <div class="widget widget--modal widget-carousel widget-carousel--skin-1">
      <div class="widget-overlay"></div>
      <div class="widget-modal-wrap">
        <div
          class="widget-back ${e.spinBackground?"widget-back--spinning":""}"
          @mouseenter=${()=>e._onWidgetEnter()}
          @mouseleave=${()=>e._onWidgetLeave()}
        >
          ${e.orderData?.isTest&&e.widgetState==="win"&&!e.isEditMode?t`<div class="test-watermark" aria-hidden="true">
                <span class="test-watermark__text">Это тестовая версия виджета, призы недействительны</span>
              </div>`:n}
          <div class="animation-wrapper ${e.widgetState==="spinning"&&e.isAnimating&&!e.isHorizontal||e.spinBackground?"animation-wrapper--active":""} ${e.isAnimating?"animation-wrapper--spinning":""}"></div>
          <div class="widget-content">
            <a class="widget-close btn-square" @click=${l=>{l.preventDefault(),e.close()}}>
              <i class="icon-24"><svg><use href="#wl-icon-x-close"></use></svg></i>
            </a>

            <div class="widget-container ${e.config.design.hideLogo?"no-logo":""}">
              ${e.widgetState==="main"?_(e):n}
              ${e.widgetState==="spinning"?k():n}
              ${e.widgetState==="win"?y(e):n}
              ${e.widgetState==="deactivated"?x(e):n}
            </div>

            ${C(e)}

            ${b(e)}
          </div>
        </div>

        ${h(e)}
      </div>
    </div>

    ${m()}
  `:t`
      <a
        class="${c}"
        ?hidden=${!r}
        @click=${l=>{l.preventDefault(),e.openTrigger="button",e.open()}}
      >
        <i class="icon-gift"><svg><use href="#wl-icon-gift"></use></svg></i>
      </a>

      ${m()}
    `}function _(e){const i=e.config.texts;return t`
    <div class="carousel__step-1">
      ${e.config.spinCountDown||e.config.countdownEndDate?t`<div class="carousel__tags">
            <span class="tags-string">
              ${e.config.spinCountDown?t`<span class="tag tag--primary">${e.config.spinCountDown}</span>`:n}
              ${e.config.countdownEndDate?t`<span class="tag">${$(e.config.countdownEndDate)}</span>`:n}
              ${e.config.countdownEndDate?t`<wl-countdown
                    target-time="${e.config.countdownEndDate}"
                    end-text="Акция закончилась"
                    tag-class="tag"
                  ></wl-countdown>`:n}
            </span>
          </div>`:n}

      <div class="h1">
        ${i.mainHeader||""}
        ${i.secondHeader?t`<div class="h2">${i.secondHeader}</div>`:n}
      </div>

      ${i.thirdHeader?t`<div class="h3">${i.thirdHeader}</div>`:n}

      <form @submit=${r=>r.preventDefault()}>
        <div class="form">
          ${e.config.settings.phone.enabled?t`<div class="input-row">
                <input
                  type="tel"
                  inputmode="tel"
                  autocomplete="tel"
                  class="form-control form-input js-phone ${e.phoneError?"error":""}"
                  placeholder=${e.phone.placeholder||"Номер телефона"}
                  .value=${v(e.phone.formatted)}
                  @input=${r=>e.handlePhoneInput(r)}
                >
                <label class="error">${e.phoneError||"Обязательно для заполнения"}</label>
              </div>`:n}

          ${e.config.settings.email.enabled?t`<div class="input-row">
                <input
                  type="email"
                  class="form-control form-input ${e.emailError?"error":""}"
                  placeholder="Email"
                  .value=${e.formEmail}
                  @input=${r=>e.handleEmailInput(r.target.value)}
                >
                <label class="error">${e.emailError||"Обязательно для заполнения"}</label>
              </div>`:n}

          <a
            class="button button--accent button--lg button--full-width ${e.isSubmitting?"button--disabled":""}"
            @click=${()=>e.handleSpin()}
          >
            ${e.isSubmitting?t`<i class="icon-24 animation--rotate">
              <svg><use href="#wl-icon-refresh"></use></svg>
            </i>`:n}
            ${i.buttonText||"Крутить барабан"}
          </a>
        </div>
      </form>

      <div class="agree">
        <div class="input-checkbox ${e.agreeError?"error":""}">
          <label class="error">Согласие обязательно</label>
          <input
            type="checkbox"
            id="wl-rules-agree"
            .checked=${e.agreeChecked}
            @change=${r=>e.handleAgreeChange(r.target.checked)}
          >
          <label for="wl-rules-agree">
            <svg><use href="#wl-icon-check-2"></use></svg>
          </label>
          <label for="wl-rules-agree" class="input-checkbox__caption">
            Нажимая на&nbsp;кнопку «<span>${i.buttonText||"Крутить барабан"}</span>»,
            вы&nbsp;соглашаетесь с&nbsp;<a href="${e.config.policy?.url||e.config.policy?.customUrl||""}" class="underlined" target="_blank">обработкой данных</a>
            и&nbsp;правилами проведения рекламной акции
          </label>
        </div>
      </div>
    </div>
  `}function k(e){return t`<div class="carousel__step-2"></div>`}function y(e){const i=e.orderData;if(!i)return t`${n}`;const r=i.closeButton?.text||"Закрыть",o=i.closeButton?.link||"",d=!!o&&o!=="javascript:void(0);",s=i.winHeader||e.config.texts.winHeader||"";return t`
    <div class="step-3">
      <div class="h1">
        ${s} <span class="text-primary">${i.prize||""}</span>
      </div>

      <div class="h3 instructions">
        ${i.promoCode?t`<p>
              Ваш промокод: <span class="text-primary">${i.promoCode}</span>
              ${i.promoCodeTimeout?t`<div class="promo-code-timeout">
                    <wl-countdown
                      target-time="${i.promoCodeTimeout}"
                      label-text="Промокод действителен"
                      end-text="промокод больше не действителен"
                      tag-class="tag"
                    ></wl-countdown>
                  </div>`:n}
            </p>`:n}

        ${i.text?t`<p>${i.text}</p>`:n}

        ${i.countDownDate?t`<div class="countdown-date">
              <wl-countdown
                target-time="${i.countDownDate}"
                label-text="Следующая попытка через"
                end-text="Обновите страницу"
                tag-class="tag"
              ></wl-countdown>
            </div>`:n}

        ${i.note?t`<p class="note">${i.note}</p>`:n}
      </div>

      <div class="form">
        ${d?t`<a
              class="button button--lg button--full-width"
              href="${o}"
              target="_blank"
              @click=${()=>e.handleFinish()}
            >${r}</a>`:t`<a
              class="button button--lg button--full-width"
              @click=${c=>{c.preventDefault(),e.handleFinish()}}
            >${r}</a>`}
      </div>
    </div>
  `}function x(e){return t`
    <div class="carousel__deactivated">
      <div class="h1">${e.deactivationMessage}</div>
    </div>
  `}function C(e){const i=["carousel__container"],r=!e.isHorizontal&&e.widgetState==="spinning"&&!e.carouselExiting,o=e.isHorizontal&&e.isMobileCentered;(r||o)&&(i.push("carousel__container--centered"),e.isAnimating&&i.push("carousel__container--run-game")),!e.isHorizontal&&e.carouselExiting&&i.push("carousel__container--exiting");const s=e.config?.wheel?.gifts??[],c=e.config?.design?.colors?.light??null,l={primary:c?.primary??"",accent:c?.accent??""},u=new Map;for(const a of s)a.id!==void 0&&u.set(a.id,a);const f=a=>{if(a.duplicate===void 0)return a;const p=u.get(a.duplicate);return p?{...p,order:a.order,id:a.id,duplicate:a.duplicate}:a},g=s.map((a,p)=>D(f(a),p,e.recoloredIcons,l));return t`
    <div class="${i.join(" ")}">
      <div class="carousel__circle-animation"></div>
      <div class="carousel__track-outer">
        <div class="carousel__track-wrapper">
          <div class="carousel__track">
            ${g}
          </div>
        </div>
        <div class="selector">
          <svg><use href="#wl-icon-selector"></use></svg>
        </div>
      </div>
    </div>
  `}function D(e,i,r,o){const d=["carousel__item"],s=e.image?.url??"",l=e.image?.recolor===!0?e.isMain===!0?"#111111":i%2===0?o.accent:o.primary:"",u=s&&l?`${s}__${l}`:"",g=(u?r.get(u)??"":"")||s,a=e.background?.url?"color: var(--color-prize-text-light)":"";return t`
    <div class="${d.join(" ")}" data-item="${i}" data-is-main="${e.isMain===!0?"true":n}">
      ${e.background?.url?t`<img class="carousel__item-background" src="${e.background.url}" alt="">`:t`<svg class="carousel__item-diamond" aria-hidden="true">
            <defs>
              <linearGradient id="dmd-g" x1="0" y1="0" x2="500" y2="500" gradientUnits="userSpaceOnUse">
                <stop style="stop-color: #ffffff"/>
                <stop offset="0.384615" style="stop-color: #ffffff" stop-opacity="0.32"/>
                <stop offset="0.629808" style="stop-color: #ffffff" stop-opacity="0.24"/>
                <stop offset="1" style="stop-color: #ffffff" stop-opacity="0.16"/>
              </linearGradient>
            </defs>
            <use href="#wl-icon-diamond"></use>
          </svg>`}
      ${g?t`<span class="carousel__item-image">
            <img src="${g}" alt="">
          </span>`:n}
      ${e.header?t`<div class="carousel__item-text" style="${a}">${e.header}</div>`:n}
    </div>
  `}function m(){return t`
    <div style="height:0;overflow:hidden;position:absolute;">
      <svg xmlns="http://www.w3.org/2000/svg">
        <symbol fill="none" viewBox="0 0 24 24" id="wl-icon-refresh">
          <path d="M14 22s.85-.121 4.364-3.636A9 9 0 0014 3.224M14 22h6m-6 0v-6M10 2s-.85.122-4.364 3.636A9 9 0 0010 20.776M10 2H4m6 0v6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </symbol>
        <symbol viewBox="0 0 67 60" id="wl-icon-selector">
          <path d="M56.594 2.62L6.574 24.502C1.78 26.6 1.78 33.4 6.574 35.497l50.02 21.884C60.558 59.115 65 56.21 65 51.884V8.116c0-4.327-4.44-7.231-8.405-5.497z" stroke="#fff" stroke-width="4"/>
        </symbol>
        <symbol viewBox="0 0 24 24" id="wl-icon-x-close">
          <path d="M5.722 5.045a1.016 1.016 0 00-.616 1.388c.043.094 1.047 1.13 2.77 2.857L10.578 12l-2.702 2.71c-1.822 1.827-2.728 2.762-2.778 2.87-.1.212-.102.626-.004.826.091.187.313.409.5.5.2.098.614.096.826-.004.108-.05 1.043-.956 2.87-2.778L12 13.422l2.71 2.702c1.827 1.822 2.762 2.728 2.87 2.778.211.1.626.102.824.005.19-.093.382-.284.488-.485.112-.213.117-.615.01-.842-.05-.108-.956-1.043-2.778-2.87L13.422 12l2.685-2.69c1.853-1.856 2.713-2.746 2.777-2.87.118-.229.128-.629.022-.846a1.253 1.253 0 00-.5-.5c-.2-.098-.614-.096-.826.004-.108.05-1.043.956-2.87 2.778L12 10.578 9.29 7.876C7.494 6.085 6.528 5.149 6.427 5.103c-.19-.086-.522-.114-.705-.058" fill-rule="evenodd"/>
        </symbol>
        <symbol width="16" height="16" id="wl-icon-check-2">
          <path d="M 13.333984,3 A 1,1 0 0 0 12.626953,3.2929688 L 6,9.9199219 3.3730469,7.2929687 a 1,1 0 0 0 -1.4140625,0 1,1 0 0 0 0,1.4140626 l 3.3339843,3.3339847 a 1.0001,1.0001 0 0 0 1.4140625,0 L 14.041016,4.7070312 a 1,1 0 0 0 0,-1.4140624 A 1,1 0 0 0 13.333984,3 Z"/>
        </symbol>
        <symbol fill="none" viewBox="0 0 80 80" id="wl-icon-gift">
          <path d="M40 23.334H25a8.333 8.333 0 010-16.667c11.666 0 15 16.667 15 16.667zm0 0h15a8.333 8.333 0 000-16.667c-11.667 0-15 16.667-15 16.667zm0 0v50M6.665 46.667h66.667M6.666 34v28.667c0 3.734 0 5.6.727 7.027a6.666 6.666 0 002.913 2.913c1.426.727 3.293.727 7.027.727h45.333c3.734 0 5.6 0 7.027-.727a6.667 6.667 0 002.913-2.913c.727-1.427.727-3.293.727-7.027V34c0-3.733 0-5.6-.727-7.026a6.667 6.667 0 00-2.913-2.914c-1.427-.726-3.293-.726-7.027-.726H17.333c-3.734 0-5.6 0-7.027.726a6.666 6.666 0 00-2.913 2.914C6.666 28.4 6.666 30.267 6.666 34z" stroke="#fff" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
        </symbol>
        <symbol viewBox="0 0 224 224" id="wl-icon-diamond" overflow="hidden">
          <g transform="matrix(-0.0578209 0.134584 -0.300135 -0.233988 112 80.973)">
            <rect width="1292" height="436.472" fill="url(#dmd-g)"/>
            <rect width="1292" height="436.472" transform="scale(1 -1)" fill="url(#dmd-g)"/>
            <rect width="1292" height="436.472" transform="scale(-1 1)" fill="url(#dmd-g)"/>
            <rect width="1292" height="436.472" transform="scale(-1)" fill="url(#dmd-g)"/>
          </g>
          <g transform="matrix(0.0817297 0.149081 -0.428517 0.107175 112 80.973)">
            <rect width="1016.32" height="393.946" fill="url(#dmd-g)"/>
            <rect width="1016.32" height="393.946" transform="scale(1 -1)" fill="url(#dmd-g)"/>
            <rect width="1016.32" height="393.946" transform="scale(-1 1)" fill="url(#dmd-g)"/>
            <rect width="1016.32" height="393.946" transform="scale(-1)" fill="url(#dmd-g)"/>
          </g>
          <g transform="matrix(0.149081 0.031027 -0.176203 0.354224 112 80.973)">
            <rect width="1122.35" height="428.618" fill="url(#dmd-g)"/>
            <rect width="1122.35" height="428.618" transform="scale(1 -1)" fill="url(#dmd-g)"/>
            <rect width="1122.35" height="428.618" transform="scale(-1 1)" fill="url(#dmd-g)"/>
            <rect width="1122.35" height="428.618" transform="scale(-1)" fill="url(#dmd-g)"/>
          </g>
        </symbol>
      </svg>
    </div>
  `}export{x as renderDeactivated,_ as renderMainScreen,L as renderRoot,k as renderSpinning,y as renderWinScreen};
