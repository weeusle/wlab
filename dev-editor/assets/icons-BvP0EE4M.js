import{b as d,w as t}from"./lit-element-Cn7T8F1W.js";const a={play:{paint:"fill",body:t`<path d="M6 4.2 19.5 12 6 19.8z" />`},pause:{paint:"fill",body:t`<rect x="6.5" y="5" width="3.6" height="14" rx="1.4" /><rect x="13.9" y="5" width="3.6" height="14" rx="1.4" />`},"volume-x":{paint:"stroke",body:t`<path d="M11 5 6 9H2v6h4l5 4z" /><path d="M22 9l-6 6" /><path d="M16 9l6 6" />`},"volume-2":{paint:"stroke",body:t`<path d="M11 5 6 9H2v6h4l5 4z" /><path d="M15.54 8.46a5 5 0 0 1 0 7.07" /><path d="M19.07 4.93a10 10 0 0 1 0 14.14" />`},"x-close":{paint:"stroke",body:t`<path d="M18 6 6 18M6 6l12 12" />`},minimize:{paint:"stroke",body:t`<path d="M6 12h12" />`},"chevron-right":{paint:"stroke",body:t`<path d="M9 6l6 6-6 6" />`},ruble:{paint:"stroke",body:t`<path d="M8 21V3h4.5a4 4 0 0 1 0 8H8M5 15h7" />`},edit:{paint:"stroke",body:t`<path d="M17 3a2.83 2.83 0 0 1 4 4L7.5 20.5 2 22l1.5-5.5z" /><path d="M15 5l4 4" />`},"arrow-right":{paint:"stroke",body:t`<path d="M5 12h14M13 6l6 6-6 6" />`},shield:{paint:"stroke",body:t`<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M9 12l2 2 4-4" />`}};function n(e){const r=a[e]??a["x-close"],o=r.paint==="stroke";return d`
    <svg
      class="wl-icon wl-icon--${e}"
      viewBox="0 0 24 24"
      fill=${o?"none":"currentColor"}
      stroke=${o?"currentColor":"none"}
      stroke-width=${o?"2":"0"}
      stroke-linecap="round"
      stroke-linejoin="round"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      ${r.body}
    </svg>
  `}export{n as renderIcon};
