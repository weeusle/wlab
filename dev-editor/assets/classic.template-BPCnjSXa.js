import{b as i,A as t}from"./lit-element-Cn7T8F1W.js";import{l as c}from"./countdown-C9UoJOQn.js";import{e as g}from"./class-map-CwBx3DFz.js";import"./wlab-copyright-DS2BbYjn.js";import"./message-bus-Cdj7KN6I.js";function u(e){const n=new Date(e);return`Только до ${new Intl.DateTimeFormat("ru-RU",{day:"numeric",month:"long"}).format(n)}`}function p(e){if(e.config.design.hideLogo)return t;const n={badge:!0,"badge--visible":e._badgeVisible};return i`
    <div
      class=${g(n)}
      @mouseenter=${()=>e._onBadgeEnter()}
      @mouseleave=${()=>e._onBadgeLeave()}
    >
      <wl-copyright></wl-copyright>
    </div>
  `}function S(e){if(!e.isOpen)return i`${d()}`;const n=["wheel-holder"];e.widgetState==="spinning"&&n.push("wheel-holder--centered"),e.widgetState==="win"&&n.push("wheel-holder--win");let a="";const l=window.innerWidth<576,s=8,r=l?45:0;return e.widgetState==="spinning"&&e.isAnimating&&e.spinFinalAngleDeg===null?a="":e.spinFinalAngleDeg!==null&&e.spinSector!==null?a=`transform: rotate(${e.spinFinalAngleDeg}deg);`:e.spinSector!==null&&e.wheelLockedToSector?a=`transform: rotate(${360/s*e.spinSector+r}deg);`:e.wheelAngle!==null&&(a=`transform: rotate(${e.wheelAngle+r}deg); transition: transform 250ms ease-out;`),i`
    <div class="widget widget--modal widget-fortune-2 widget-fortune-2--skin-2">
      <div class="widget-overlay"></div>
      <div
        class="widget-back"
        @mouseenter=${()=>e._onWidgetEnter()}
        @mouseleave=${()=>e._onWidgetLeave()}
      >
        ${e.orderData?.isTest&&e.widgetState==="win"&&!e.isEditMode?i`<div class="test-watermark" aria-hidden="true">
              <span class="test-watermark__text">Это тестовая версия виджета, призы недействительны</span>
            </div>`:t}
        <div class="animation-wrapper ${e.widgetState==="spinning"&&e.isAnimating?"animation-wrapper--active":""}">
          <div class="wheel-circle-animation"></div>
        </div>
        <div class="widget-content widget-content--${e.widgetState}">
          <a class="widget-close btn-square" @click=${o=>{o.preventDefault(),e.close()}}>
            <i class="icon-24"><svg><use href="#wl-icon-x-close"></use></svg></i>
          </a>

          ${p(e)}

          <div class="widget-container ${e.config.design.hideLogo?"no-logo":""} ${e.isContentFading?"widget-container--fading":""}">
            ${e.widgetState==="main"?w(e):t}
            ${e.widgetState==="spinning"?v():t}
            ${e.widgetState==="win"?f(e):t}
            ${e.widgetState==="deactivated"?m(e):t}
          </div>

          <div class="${n.join(" ")}">
            <div class="wheel-frame">
              <div class="wheel ${e.widgetState!=="spinning"&&!e.wheelIdleStopped&&!(e.widgetState==="win"&&e.spinSector!==null&&e.wheelLockedToSector)?"wheel--waiting":""}">
                <img
                  src="${e.builtWheelUrl??""}"
                  alt=""
                  style="${a}"
                >
              </div>
            </div>
            <div class="selector">
              <svg><use href="#wl-icon-selector"></use></svg>
            </div>
          </div>
        </div>
      </div>
    </div>

    ${d()}
  `}function w(e){const n=e.config.texts;return i`
    <div class="wlab-fortune__step-1">
      ${e.config.spinCountDown||e.config.countdownEndDate?i`<div class="wlab-fortune__tags">
            <span class="tags-string">
              ${e.config.spinCountDown?i`<span class="tag tag--primary">${e.config.spinCountDown}</span>`:t}
              ${e.config.countdownEndDate?i`<span class="tag">${u(e.config.countdownEndDate)}</span>`:t}
              ${e.config.countdownEndDate?i`<wl-countdown
                    target-time="${e.config.countdownEndDate}"
                    end-text="Акция закончилась"
                    tag-class="tag"
                  ></wl-countdown>`:t}
            </span>
          </div>`:t}

      <div class="h1">
        ${n.mainHeader||""}
        ${n.secondHeader?i`<span class="h2">${n.secondHeader}</span>`:t}
      </div>

      ${n.thirdHeader?i`<div class="h3">${n.thirdHeader}</div>`:t}

      <form @submit=${a=>a.preventDefault()}>
        <div class="form">
          ${e.config.settings.phone.enabled?i`<div class="input-row">
                <input
                  type="tel"
                  inputmode="tel"
                  autocomplete="tel"
                  class="form-control form-input js-phone ${e.phoneError?"error":""}"
                  placeholder=${e.phone.placeholder||"Номер телефона"}
                  .value=${c(e.phone.formatted)}
                  @input=${a=>e.handlePhoneInput(a)}
                >
                <label class="error">${e.phoneError||"Обязательно для заполнения"}</label>
              </div>`:t}

          ${e.config.settings.email.enabled?i`<div class="input-row">
                <input
                  type="email"
                  class="form-control form-input ${e.emailError?"error":""}"
                  placeholder="Email"
                  .value=${e.formEmail}
                  @input=${a=>e.handleEmailInput(a.target.value)}
                >
                <label class="error">${e.emailError||"Обязательно для заполнения"}</label>
              </div>`:t}

          ${e.builtWheelUrl?i`<a
                class="button button--accent button--lg button--full-width ${e.isSubmitting?"button--disabled":""}"
                @click=${()=>e.handleSpin()}
              >
                ${e.isSubmitting?i`<i class="icon-24 animation--rotate">
                  <svg><use href="#wl-icon-refresh"></use></svg>
                </i>`:t}
                ${n.buttonText||"Крутить колесо"}
              </a>`:t}
        </div>
      </form>

      <div class="agree">
        <div class="input-checkbox ${e.agreeError?"error":""}">
          <label class="error">Согласие обязательно</label>
          <input
            type="checkbox"
            id="wl-rules-agree"
            .checked=${e.agreeChecked}
            @change=${a=>e.handleAgreeChange(a.target.checked)}
          >
          <label for="wl-rules-agree">
            <svg><use href="#wl-icon-check-2"></use></svg>
          </label>
          <label for="wl-rules-agree" class="input-checkbox__caption">
            Нажимая на&nbsp;кнопку «<span>${n.buttonText||"Крутить колесо"}</span>»,
            вы&nbsp;соглашаетесь с&nbsp;<a href="${e.config.policy?.url||e.config.policy?.customUrl||""}" class="underlined" target="_blank">обработкой данных</a>
            и&nbsp;правилами проведения рекламной акции
          </label>
        </div>
      </div>
    </div>
  `}function v(e){return i`<div class="wlab-fortune__step-2"></div>`}function f(e){const n=e.orderData;if(!n)return i`${t}`;const a=n.closeButton?.text||e.config.texts.winCloseText||"Закрыть",l=n.closeButton?.link||"",s=!!l&&l!=="javascript:void(0);",r=n.winHeader||e.config.texts.winHeader||"";return i`
    <div class="step-3">
      <div class="h1">
        ${r} <span class="text-primary">${n.prize||""}</span>
      </div>

      ${n.promoCode||n.text||n.countDownDate||n.note?i`<div class="h3 instructions">
            ${n.promoCode?i`<p>
                  Ваш промокод: <span class="text-primary">${n.promoCode}</span>
                  ${n.promoCodeTimeout?i`<div class="promo-code-timeout">
                        <wl-countdown
                          target-time="${n.promoCodeTimeout}"
                          label-text="Промокод действителен"
                          end-text="промокод больше не действителен"
                          tag-class="tag"
                        ></wl-countdown>
                      </div>`:t}
                </p>`:t}

            ${n.text?i`<p>${n.text}</p>`:t}

            ${n.countDownDate?i`<div class="countdown-date">
                  <wl-countdown
                    target-time="${n.countDownDate}"
                    label-text="Следующая попытка через"
                    end-text="Обновите страницу"
                    tag-class="tag"
                  ></wl-countdown>
                </div>`:t}

            ${n.note?i`<p class="note">${n.note}</p>`:t}
          </div>`:e.config.texts.winText?i`<p class="h3">${e.config.texts.winText}</p>`:t}

      <div class="form">
        ${s?i`<a
              class="button button--ghost button--lg button--full-width"
              href="${l}"
              target="_blank"
              @click=${()=>e.handleFinish()}
            >${a}</a>`:i`<a
              class="button button--ghost button--lg button--full-width"
              @click=${o=>{o.preventDefault(),e.handleFinish()}}
            >${a}</a>`}
      </div>
    </div>
  `}function m(e){return i`
    <div class="wlab-fortune__deactivated">
      <div class="h1">${e.deactivationMessage}</div>
    </div>
  `}function d(){return i`
    <div style="height:0;overflow:hidden;position:absolute;">
      <svg xmlns="http://www.w3.org/2000/svg">
        <symbol fill="none" viewBox="0 0 24 24" id="wl-icon-refresh">
          <path d="M14 22s.85-.121 4.364-3.636A9 9 0 0014 3.224M14 22h6m-6 0v-6M10 2s-.85.122-4.364 3.636A9 9 0 0010 20.776M10 2H4m6 0v6" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
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
      </svg>
    </div>
  `}export{m as renderDeactivated,w as renderMainScreen,S as renderRoot,v as renderSpinning,f as renderWinScreen};
