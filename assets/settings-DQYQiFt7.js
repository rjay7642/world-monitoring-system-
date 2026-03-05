var ee=Object.defineProperty;var te=(s,e,t)=>e in s?ee(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var I=(s,e,t)=>te(s,typeof e!="symbol"?e+"":e,t);import"./modulepreload-polyfill-B5Qt9EMX.js";/* empty css             */import{ef as S,eg as V,eh as _,ei as B,ej as M,bZ as H,ek as C,el as E,em as se,en as G,dY as ae,ec as ne,eo as ie,eb as oe,t as g,ep as W,eq as Y,e as v,de as O,er as N,es as re,et as le,eu as de,a1 as ce,az as ge,j as ue,bQ as ve}from"./panels-B7qL6Ath.js";import{e as pe,i as fe}from"./settings-persistence-CgEqQVlg.js";import"./deck-stack-emDwE5ga.js";import"./d3-DYQjYRjj.js";import"./i18n-VWbTNjcU.js";class me{constructor(){I(this,"pendingSecrets",new Map);I(this,"validatedKeys",new Map);I(this,"validationMessages",new Map)}captureUnsavedInputs(e){e.querySelectorAll("input[data-secret]").forEach(a=>{var d;const o=a.dataset.secret;if(!o)return;const r=a.value.trim();if(!r||r===S)return;if(V.has(o)&&!this.pendingSecrets.has(o)){const c=((d=_().secrets[o])==null?void 0:d.value)||"";if(r===c)return}this.pendingSecrets.set(o,r);const l=B(o,r);l.valid||(this.validatedKeys.set(o,!1),this.validationMessages.set(o,l.hint||"Invalid format"))});const t=e.querySelector("select[data-model-select]"),n=e.querySelector("input[data-model-manual]"),i=(n&&!n.classList.contains("hidden-input")?n.value.trim():t==null?void 0:t.value)||"";i&&!this.pendingSecrets.has("OLLAMA_MODEL")&&(this.pendingSecrets.set("OLLAMA_MODEL",i),this.validatedKeys.set("OLLAMA_MODEL",!0))}hasPendingChanges(){return this.pendingSecrets.size>0}getMissingRequiredSecrets(){const e=[];for(const t of M){if(!H(t.id))continue;const n=C(t);if(n.some(a=>this.pendingSecrets.has(a)))for(const a of n)!E(a).valid&&!this.pendingSecrets.has(a)&&e.push(a)}return e}getValidationErrors(){const e=[];for(const[t,n]of this.pendingSecrets){const i=B(t,n);i.valid||e.push(`${t}: ${i.hint||"Invalid format"}`)}return e}async verifyPendingSecrets(){const e=[],t=Object.fromEntries(this.pendingSecrets.entries()),n=[];for(const[i,a]of this.pendingSecrets){const o=B(i,a);o.valid?n.push([i,a]):(this.validatedKeys.set(i,!1),this.validationMessages.set(i,o.hint||"Invalid format"),e.push(`${i}: ${o.hint||"Invalid format"}`))}if(n.length>0){const i=await Promise.race([Promise.all(n.map(async([a,o])=>{const r=await se(a,o,t);return{key:a,result:r}})),new Promise(a=>setTimeout(()=>a(n.map(([o])=>({key:o,result:{valid:!0,message:"Saved (verification timed out)"}}))),15e3))]);for(const{key:a,result:o}of i)this.validatedKeys.set(a,o.valid),o.valid?this.validationMessages.delete(a):(this.validationMessages.set(a,o.message||"Verification failed"),e.push(`${a}: ${o.message||"Verification failed"}`))}return e}async commitVerifiedSecrets(){for(const[e,t]of this.pendingSecrets)this.validatedKeys.get(e)!==!1&&(await G(e,t),this.pendingSecrets.delete(e),this.validatedKeys.delete(e),this.validationMessages.delete(e))}setPending(e,t){this.pendingSecrets.set(e,t)}getPending(e){return this.pendingSecrets.get(e)}hasPending(e){return this.pendingSecrets.has(e)}deletePending(e){this.pendingSecrets.delete(e),this.validatedKeys.delete(e),this.validationMessages.delete(e)}setValidation(e,t,n){this.validatedKeys.set(e,t),n?this.validationMessages.set(e,n):this.validationMessages.delete(e)}getValidationState(e){return{validated:this.validatedKeys.get(e),message:this.validationMessages.get(e)}}destroy(){this.pendingSecrets.clear(),this.validatedKeys.clear(),this.validationMessages.clear()}}function F(s){if(typeof AbortSignal.timeout=="function")return AbortSignal.timeout(s);const e=new AbortController;return setTimeout(()=>e.abort(),s),e.signal}async function he(s){var e,t;if(!s)return[];try{const n=await fetch(new URL("/api/tags",s).toString(),{signal:F(5e3)});if(n.ok){const a=(((e=(await n.json()).models)==null?void 0:e.map(o=>o.name))||[]).filter(o=>!o.includes("embed"));if(a.length>0)return a}}catch{}try{const n=await fetch(new URL("/v1/models",s).toString(),{signal:F(5e3)});if(n.ok)return(((t=(await n.json()).data)==null?void 0:t.map(a=>a.id))||[]).filter(a=>!a.includes("embed"))}catch{}return[]}let L="overview",u,P=null;function h(s,e="ok"){const t=document.getElementById("settingsActionStatus");t&&(t.textContent=s,t.classList.remove("ok","error"),t.classList.add(e))}async function j(s,e){const t=await N(s);if(t){h(`${e}: ${t}`,"ok");return}h(g("modals.settingsWindow.invokeFail",{command:s}),"error")}function R(){N("close_settings_window").then(()=>{},()=>window.close())}function we(){return ve()||""}let T=null;async function k(s,e){if(!T)try{T=await N("get_local_api_token")}catch{}const t=new Headers(e==null?void 0:e.headers);return T&&t.set("Authorization",`Bearer ${T}`),fetch(`${we()}${s}`,{...e,headers:t})}const q={overview:'<svg viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95a15.65 15.65 0 00-1.38-3.56A8.03 8.03 0 0118.92 8zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56A7.987 7.987 0 015.08 16zm2.95-8H5.08a7.987 7.987 0 014.33-3.56A15.65 15.65 0 008.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 01-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"/></svg>',ai:'<svg viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M21 10.12h-6.78l2.74-2.82c-2.73-2.7-7.15-2.8-9.88-.1s-2.73 7.08 0 9.79 7.15 2.71 9.88 0C18.32 15.65 19 14.08 19 12.1h2c0 1.98-.88 4.55-2.64 6.29-3.51 3.48-9.21 3.48-12.72 0-3.5-3.47-3.53-9.11-.02-12.58s9.14-3.49 12.65 0L21 3v7.12zM12.5 8v4.25l3.5 2.08-.72 1.21L11 13V8h1.5z"/></svg>',economy:'<svg viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z"/></svg>',markets:'<svg viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M5 9.2h3V19H5V9.2zM10.6 5h2.8v14h-2.8V5zm5.6 8H19v6h-2.8v-6z"/></svg>',security:'<svg viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/></svg>',tracking:'<svg viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>',debug:'<svg viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M20 8h-2.81c-.45-.78-1.07-1.45-1.82-1.96L17 4.41 15.59 3l-2.17 2.17C12.96 5.06 12.49 5 12 5c-.49 0-.96.06-1.41.17L8.41 3 7 4.41l1.62 1.63C7.88 6.55 7.26 7.22 6.81 8H4v2h2.09c-.05.33-.09.66-.09 1v1H4v2h2v1c0 .34.04.67.09 1H4v2h2.81c1.04 1.79 2.97 3 5.19 3s4.15-1.21 5.19-3H20v-2h-2.09c.05-.33.09-.66.09-1v-1h2v-2h-2v-1c0-.34-.04-.67-.09-1H20V8zm-6 8h-4v-2h4v2zm0-4h-4v-2h4v2z"/></svg>'};function Q(s){let e=0;for(const t of s.features)O(t)&&e++;return{ready:e,total:s.features.length}}function Z(){let s=0;for(const e of M)O(e.id)&&s++;return{ready:s,total:M.length}}function A(){const s=document.getElementById("sidebarNav");if(!s)return;const e=[],t=Z(),n=t.ready===t.total?"dot-ok":t.ready>0?"dot-partial":"dot-warn";e.push(`
    <button class="settings-nav-item${L==="overview"?" active":""}" data-section="overview" role="tab" aria-selected="${L==="overview"}">
      ${q.overview}
      <span class="settings-nav-label">Overview</span>
      <span class="settings-nav-dot ${n}"></span>
    </button>
  `),e.push('<div class="settings-nav-sep"></div>');for(const i of W){const{ready:a,total:o}=Q(i),r=a===o?"dot-ok":a>0?"dot-partial":"dot-warn";e.push(`
      <button class="settings-nav-item${L===i.id?" active":""}" data-section="${i.id}" role="tab" aria-selected="${L===i.id}">
        ${q[i.id]||""}
        <span class="settings-nav-label">${v(i.label)}</span>
        <span class="settings-nav-count">${a}/${o}</span>
        <span class="settings-nav-dot ${r}"></span>
      </button>
    `)}e.push('<div class="settings-nav-sep"></div>'),e.push(`
    <button class="settings-nav-item${L==="debug"?" active":""}" data-section="debug" role="tab" aria-selected="${L==="debug"}">
      ${q.debug}
      <span class="settings-nav-label">Debug &amp; Logs</span>
    </button>
  `),s.innerHTML=e.join("")}function x(s){const e=document.getElementById("contentArea");e&&(P&&(P(),P=null),L=s,A(),e.classList.add("fade-out"),e.classList.remove("fade-in"),requestAnimationFrame(()=>{if(s==="overview")ye(e);else if(s==="debug")Le(e);else{const t=W.find(n=>n.id===s);t&&Se(e,t)}requestAnimationFrame(()=>{e.classList.remove("fade-out"),e.classList.add("fade-in")})}))}function ye(s){const{ready:e,total:t}=Z(),n=t>0?e/t*100:0,i=2*Math.PI*40,a=i-n/100*i,o=e===t?"var(--settings-green)":e>0?"var(--settings-blue)":"var(--settings-yellow)",r=E("WORLDMONITOR_API_KEY"),l=r.present?"Active":"Not set",d=r.present?"ok":"warn",c=W.map(f=>{const{ready:p,total:m}=Q(f);return`<button class="settings-ov-cat ${p===m?"ov-cat-ok":p>0?"ov-cat-partial":"ov-cat-warn"}" data-section="${f.id}">
      <span class="settings-ov-cat-label">${v(f.label)}</span>
      <span class="settings-ov-cat-count">${p}/${m} ready</span>
    </button>`}).join("");s.innerHTML=`
    <div class="settings-overview">
      <div class="settings-ov-progress">
        <svg class="settings-ov-ring" viewBox="0 0 100 100" width="120" height="120">
          <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="8"/>
          <circle cx="50" cy="50" r="40" fill="none" stroke="${o}" stroke-width="8"
            stroke-linecap="round" stroke-dasharray="${i}" stroke-dashoffset="${a}"
            transform="rotate(-90 50 50)" style="transition:stroke-dashoffset 0.6s ease"/>
        </svg>
        <div class="settings-ov-ring-text">
          <span class="settings-ov-ring-num">${e}</span>
          <span class="settings-ov-ring-label">of ${t} ready</span>
        </div>
      </div>
      <div class="settings-ov-cats">${c}</div>
      <div class="settings-ov-actions">
        <button type="button" class="settings-btn settings-btn-secondary" id="exportSettingsBtn">
          ${g("components.settings.exportSettings")}
        </button>
        <button type="button" class="settings-btn settings-btn-secondary" id="importSettingsBtn">
          ${g("components.settings.importSettings")}
        </button>
        <input type="file" id="importSettingsInput" accept=".json" style="display: none;" />
      </div>
    </div>

    <div class="settings-ov-license">
      <section class="wm-section">
        <h2 class="wm-section-title">${g("modals.settingsWindow.worldMonitor.apiKey.title")}</h2>
        <p class="wm-section-desc">${g("modals.settingsWindow.worldMonitor.apiKey.description")}</p>
        <div class="wm-key-row">
          <div class="wm-input-wrap">
            <input type="password" class="wm-input" data-wm-key-input
              placeholder="${g("modals.settingsWindow.worldMonitor.apiKey.placeholder")}"
              autocomplete="off" spellcheck="false"
              ${r.present?`value="${S}"`:""} />
            <button type="button" class="wm-toggle-vis" data-wm-toggle title="Show/hide">&#x1f441;</button>
          </div>
          <span class="wm-badge ${d}">${l}</span>
        </div>
      </section>

      <div class="wm-divider"><span>${g("modals.settingsWindow.worldMonitor.dividerOr")}</span></div>

      <section class="wm-section">
        <h2 class="wm-section-title">${g("modals.settingsWindow.worldMonitor.register.title")}</h2>
        <p class="wm-section-desc">${g("modals.settingsWindow.worldMonitor.register.description")}</p>
        ${`
        <div class="wm-register-row">
          <input type="email" class="wm-input wm-email" data-wm-email
            placeholder="${g("modals.settingsWindow.worldMonitor.register.emailPlaceholder")}" />
          <button type="button" class="wm-submit-btn" data-wm-register>
            ${g("modals.settingsWindow.worldMonitor.register.submitBtn")}
          </button>
        </div>
        <p class="wm-reg-status" data-wm-reg-status></p>
        `}
      </section>
    </div>
  `,be(s)}function be(s){var t,n,i,a,o;(t=s.querySelector("#exportSettingsBtn"))==null||t.addEventListener("click",()=>{pe()});const e=s.querySelector("#importSettingsInput");(n=s.querySelector("#importSettingsBtn"))==null||n.addEventListener("click",()=>{e==null||e.click()}),e==null||e.addEventListener("change",async r=>{var d;const l=(d=r.target.files)==null?void 0:d[0];if(l){try{const c=await fe(l);h(g("components.settings.importSuccess",{count:String(c.keysImported)}),"ok")}catch(c){c instanceof DOMException?c.name==="QuotaExceededError"||c.name==="NS_ERROR_DOM_QUOTA_REACHED"?h(g("components.settings.importFailed")+": storage limit reached","error"):c.name==="SecurityError"?h(g("components.settings.importFailed")+": storage blocked","error"):h(`${g("components.settings.importFailed")}: ${c.message||c.name}`,"error"):c instanceof Error&&c.message?h(`${g("components.settings.importFailed")}: ${c.message}`,"error"):h(g("components.settings.importFailed"),"error")}e.value=""}}),(i=s.querySelector("[data-wm-toggle]"))==null||i.addEventListener("click",()=>{const r=s.querySelector("[data-wm-key-input]");r&&(r.type=r.type==="password"?"text":"password")}),(a=s.querySelector("[data-wm-key-input]"))==null||a.addEventListener("input",r=>{const l=r.target;l.value.startsWith(S)&&(l.value=l.value.slice(S.length))}),(o=s.querySelector("[data-wm-register]"))==null||o.addEventListener("click",async()=>{const r=s.querySelector("[data-wm-email]"),l=s.querySelector("[data-wm-reg-status]"),d=s.querySelector("[data-wm-register]");if(!r||!l||!d)return;const c=r.value.trim();if(!c||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(c)){l.textContent=g("modals.settingsWindow.worldMonitor.register.invalidEmail"),l.className="wm-reg-status error";return}d.disabled=!0,d.textContent=g("modals.settingsWindow.worldMonitor.register.submitting");try{const p=await(await k("/api/register-interest",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:c,source:"desktop-settings"})})).json();p.status==="already_registered"||p.status==="registered"?(localStorage.setItem("wm-waitlist-registered","1"),l.textContent=p.status==="already_registered"?g("modals.settingsWindow.worldMonitor.register.alreadyRegistered"):g("modals.settingsWindow.worldMonitor.register.success"),l.className="wm-reg-status ok"):(l.textContent=p.error||g("modals.settingsWindow.worldMonitor.register.error"),l.className="wm-reg-status error")}catch{l.textContent=g("modals.settingsWindow.worldMonitor.register.error"),l.className="wm-reg-status error"}finally{d.disabled=!1,d.textContent=g("modals.settingsWindow.worldMonitor.register.submitBtn")}}),s.querySelectorAll(".settings-ov-cat[data-section]").forEach(r=>{r.addEventListener("click",()=>{const l=r.dataset.section;l&&x(l)})})}function Se(s,e){const n=e.features.map(i=>M.find(a=>a.id===i)).filter(Boolean).map(i=>{const a=H(i.id),o=O(i.id),r=C(i),l=!o&&r.every(w=>E(w).valid||u.hasPending(w)&&u.getValidationState(w).validated!==!1),d=o?"ready":l?"staged":"needs",c=o?"ok":l?"staged":"warn",f=o?"Ready":l?"Staged":"Needs keys",p=r.map(w=>J(w,i.id)).join(""),m=o||l?"":`<p class="settings-feat-fallback">${v(i.fallback)}</p>`;return`
      <div class="settings-feat ${d}" data-feature-id="${i.id}">
        <div class="settings-feat-header" data-feat-toggle-expand="${i.id}">
          <label class="settings-feat-toggle-label" data-click-stop>
            <div class="settings-feat-switch">
              <input type="checkbox" data-toggle="${i.id}" ${a?"checked":""} />
              <span class="settings-feat-slider"></span>
            </div>
          </label>
          <div class="settings-feat-info">
            <span class="settings-feat-name">${v(i.name)}</span>
            <span class="settings-feat-desc">${v(i.description)}</span>
          </div>
          <span class="settings-feat-pill ${c}">${f}</span>
          <span class="settings-feat-chevron">&#x25B8;</span>
        </div>
        <div class="settings-feat-body">
          ${p}
          ${m}
        </div>
      </div>
    `}).join("");s.innerHTML=`
    <div class="settings-section-header">
      <h2>${v(e.label)}</h2>
    </div>
    <div class="settings-feat-list">${n}</div>
  `,X(s)}function J(s,e){var b,y;const t=E(s),n=u.hasPending(s),{validated:i,message:a}=u.getValidationState(s),o=Y[s]||s,r=re[s],l=V.has(s),d=r&&!t.present&&!n,c=n?i===!1?"Invalid":"Staged":t.present?t.valid?"Valid":"Looks invalid":"Missing",f=n?i===!1?"warn":"staged":t.valid?"ok":"warn",p=n?i===!1?"invalid":"valid-staged":"",m=n&&i===!1?a||"Invalid value":null;if(s==="OLLAMA_MODEL"){const $=n?u.getPending(s)||"":((b=_().secrets[s])==null?void 0:b.value)||"";return`
      <div class="settings-secret-row">
        <div class="settings-secret-label">${v(o)}</div>
        <span class="settings-secret-status ${f}">${v(c)}</span>
        <select data-model-select data-feature="${e}" class="${p}">
          ${$?`<option value="${v($)}" selected>${v($)}</option>`:'<option value="" selected disabled>Loading models...</option>'}
        </select>
        <input type="text" data-model-manual data-feature="${e}" class="${p} hidden-input"
          placeholder="Or type model name" autocomplete="off"
          ${$?`value="${v($)}"`:""}>
        ${m?`<span class="settings-secret-hint">${v(m)}</span>`:""}
      </div>
    `}const w=d?`<a href="#" data-signup-url="${r}" class="settings-secret-link">Get key</a>`:"";return`
    <div class="settings-secret-row">
      <div class="settings-secret-label">${v(o)}</div>
      <span class="settings-secret-status ${f}">${v(c)}</span>
      <div class="settings-input-wrapper${d?" has-suffix":""}">
        <input type="${l?"text":"password"}" data-secret="${s}" data-feature="${e}"
          placeholder="${n?"Staged":"Enter value..."}" autocomplete="off" class="${p}"
          ${n?`value="${l?v(u.getPending(s)||""):S}"`:l&&t.present?`value="${v(((y=_().secrets[s])==null?void 0:y.value)||"")}"`:""}>
        ${w}
      </div>
      ${m?`<span class="settings-secret-hint">${v(m)}</span>`:""}
    </div>
  `}function X(s){s.querySelectorAll("[data-feat-toggle-expand]").forEach(t=>{t.addEventListener("click",n=>{if(n.target.closest("[data-click-stop]"))return;const i=t.closest(".settings-feat");i==null||i.classList.toggle("expanded")})}),s.querySelectorAll("input[data-toggle]").forEach(t=>{t.addEventListener("change",()=>{const n=t.dataset.toggle;n&&(le(n,t.checked),de(n,t.checked),A())})}),s.querySelectorAll("input[data-secret]").forEach(t=>{t.addEventListener("input",()=>{var a;const n=t.dataset.secret;if(!n)return;u.hasPending(n)&&t.value.startsWith(S)&&(t.value=t.value.slice(S.length)),u.setValidation(n,!0),t.classList.remove("valid-staged","invalid");const i=(a=t.closest(".settings-secret-row"))==null?void 0:a.querySelector(".settings-secret-hint");i&&i.remove()}),t.addEventListener("blur",()=>{var d;const n=t.dataset.secret;if(!n)return;const i=t.value.trim();if(!i){u.hasPending(n)&&(u.deletePending(n),x(L));return}if(i===S)return;u.setPending(n,i);const a=B(n,i);a.valid?u.setValidation(n,!0):u.setValidation(n,!1,a.hint||"Invalid format"),V.has(n)?t.value=i:(t.type="password",t.value=S),t.classList.remove("valid-staged","invalid"),t.classList.add(a.valid?"valid-staged":"invalid");const o=(d=t.closest(".settings-secret-row"))==null?void 0:d.querySelector(".settings-secret-status");o&&(o.textContent=a.valid?"Staged":"Invalid",o.className=`settings-secret-status ${a.valid?"staged":"warn"}`);const r=t.closest(".settings-secret-row"),l=r==null?void 0:r.querySelector(".settings-secret-hint");if(l&&l.remove(),!a.valid&&a.hint){const c=document.createElement("span");c.className="settings-secret-hint",c.textContent=a.hint,r==null||r.appendChild(c)}if(D(t.dataset.feature),n==="OLLAMA_API_URL"&&a.valid){const c=s.querySelector("select[data-model-select]");c&&K(c)}A()})}),s.querySelectorAll("a[data-signup-url]").forEach(t=>{t.addEventListener("click",n=>{n.preventDefault();const i=t.dataset.signupUrl;i&&(ce()?ge("open_url",{url:i}).catch(()=>window.open(i,"_blank")):window.open(i,"_blank"))})});const e=s.querySelector("select[data-model-select]");e&&(e.addEventListener("change",()=>{const t=e.value;t&&(u.setPending("OLLAMA_MODEL",t),u.setValidation("OLLAMA_MODEL",!0),e.classList.remove("invalid"),e.classList.add("valid-staged"),D("aiOllama"),A())}),K(e))}function D(s){const e=document.querySelector(`.settings-feat[data-feature-id="${s}"]`);if(!e)return;const t=M.find(l=>l.id===s);if(!t)return;const n=O(s),i=C(t),a=!n&&i.every(l=>E(l).valid||u.hasPending(l)&&u.getValidationState(l).validated!==!1),o=e.classList.contains("expanded");e.className=`settings-feat ${n?"ready":a?"staged":"needs"}${o?" expanded":""}`;const r=e.querySelector(".settings-feat-pill");r&&(r.className=`settings-feat-pill ${n?"ok":a?"staged":"warn"}`,r.textContent=n?"Ready":a?"Staged":"Needs keys")}async function K(s){var o,r,l;const e=_(),t=u.getPending("OLLAMA_API_URL")||((o=e.secrets.OLLAMA_API_URL)==null?void 0:o.value)||"";if(!t){s.innerHTML='<option value="" disabled selected>Set Ollama URL first</option>';return}const n=u.getPending("OLLAMA_MODEL")||((r=e.secrets.OLLAMA_MODEL)==null?void 0:r.value)||"",i=await he(t);if(i.length===0){const d=(l=s.parentElement)==null?void 0:l.querySelector("input[data-model-manual]");d&&(s.style.display="none",d.classList.remove("hidden-input"),d.dataset.listenerAttached||(d.dataset.listenerAttached="1",d.addEventListener("blur",()=>{const c=d.value.trim();c&&(u.setPending("OLLAMA_MODEL",c),u.setValidation("OLLAMA_MODEL",!0),d.classList.remove("invalid"),d.classList.add("valid-staged"),D("aiOllama"),A())})));return}const a=n?"":'<option value="" selected disabled>Select a model...</option>';s.innerHTML=a+i.map(d=>`<option value="${v(d)}" ${d===n?"selected":""}>${v(d)}</option>`).join("")}function Le(s){var e,t;s.innerHTML=`
    <div class="settings-section-header">
      <h2>Debug &amp; Logs</h2>
    </div>
    <div class="debug-actions">
      <button id="openLogsBtn" type="button">Open Logs Folder</button>
      <button id="openSidecarLogBtn" type="button">Open API Log</button>
    </div>
    <section class="settings-diagnostics" id="diagnosticsSection">
      <header class="diag-header">
        <h2>Diagnostics</h2>
        <div class="diag-toggles">
          <label><input type="checkbox" id="verboseApiLog"> Verbose Sidecar Log</label>
          <label><input type="checkbox" id="fetchDebugLog"> Frontend Fetch Debug</label>
        </div>
      </header>
      <div class="diag-traffic-bar">
        <h3>API Traffic <span id="trafficCount"></span></h3>
        <div class="diag-traffic-controls">
          <label><input type="checkbox" id="autoRefreshLog" checked> Auto</label>
          <button id="refreshLogBtn" type="button">Refresh</button>
          <button id="clearLogBtn" type="button">Clear</button>
        </div>
      </div>
      <div id="trafficLog" class="diag-traffic-log"></div>
    </section>
  `,(e=s.querySelector("#openLogsBtn"))==null||e.addEventListener("click",()=>{j("open_logs_folder",g("modals.settingsWindow.openLogs"))}),(t=s.querySelector("#openSidecarLogBtn"))==null||t.addEventListener("click",()=>{j("open_sidecar_log_file",g("modals.settingsWindow.openApiLog"))}),$e()}function $e(){const s=document.getElementById("verboseApiLog"),e=document.getElementById("fetchDebugLog"),t=document.getElementById("autoRefreshLog"),n=document.getElementById("refreshLogBtn"),i=document.getElementById("clearLogBtn"),a=document.getElementById("trafficLog"),o=document.getElementById("trafficCount");e&&(e.checked=localStorage.getItem("wm-debug-log")==="1",e.addEventListener("change",()=>{localStorage.setItem("wm-debug-log",e.checked?"1":"0")}));async function r(){if(s)try{const m=await(await k("/api/local-debug-toggle")).json();s.checked=m.verboseMode}catch{}}s==null||s.addEventListener("change",async()=>{try{const m=await(await k("/api/local-debug-toggle",{method:"POST"})).json();s&&(s.checked=m.verboseMode),h(m.verboseMode?g("modals.settingsWindow.verboseOn"):g("modals.settingsWindow.verboseOff"),"ok")}catch{h(g("modals.settingsWindow.sidecarError"),"error")}}),r();async function l(){if(a)try{const w=(await(await k("/api/local-traffic-log")).json()).entries||[];if(o&&(o.textContent=`(${w.length})`),w.length===0){a.innerHTML=`<p class="diag-empty">${g("modals.settingsWindow.noTraffic")}</p>`;return}const b=w.slice().reverse().map(y=>{var z;const $=((z=y.timestamp.split("T")[1])==null?void 0:z.replace("Z",""))||y.timestamp;return`<tr class="diag-${y.status<300?"ok":y.status<500?"warn":"err"}"><td>${v($)}</td><td>${y.method}</td><td title="${v(y.path)}">${v(y.path)}</td><td>${y.status}</td><td>${y.durationMs}ms</td></tr>`}).join("");a.innerHTML=`<table class="diag-table"><thead><tr><th>${g("modals.settingsWindow.table.time")}</th><th>${g("modals.settingsWindow.table.method")}</th><th>${g("modals.settingsWindow.table.path")}</th><th>${g("modals.settingsWindow.table.status")}</th><th>${g("modals.settingsWindow.table.duration")}</th></tr></thead><tbody>${b}</tbody></table>`}catch{a.innerHTML=`<p class="diag-empty">${g("modals.settingsWindow.sidecarUnreachable")}</p>`}}n==null||n.addEventListener("click",()=>void l()),i==null||i.addEventListener("click",async()=>{try{await k("/api/local-traffic-log",{method:"DELETE"})}catch{}a&&(a.innerHTML=`<p class="diag-empty">${g("modals.settingsWindow.logCleared")}</p>`),o&&(o.textContent="(0)")});let d=null;function c(){f(),d=ue(()=>l(),{intervalMs:3e3,pauseWhenHidden:!0,refreshOnVisible:!0,runImmediately:!0,jitterFraction:0})}function f(){d&&(d.stop(),d=null)}t==null||t.addEventListener("change",()=>{t.checked?c():f()}),c(),P=f}function U(s,e){const t=v(s),n=v(e);if(!n)return t;const i=new RegExp(`(${n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")})`,"gi");return t.replace(i,"<mark>$1</mark>")}function Me(s){const e=document.getElementById("contentArea");if(!e)return;if(!s.trim()){x(L);return}const t=s.toLowerCase(),n=[];for(const a of W)for(const o of a.features){const r=M.find(d=>d.id===o);if(!r)continue;[r.name,r.description,...C(r).map(d=>Y[d]||d)].join(" ").toLowerCase().includes(t)&&n.push({feature:r,catLabel:a.label})}if(n.length===0){e.innerHTML=`<div class="settings-search-empty"><p>No features match "${v(s)}"</p></div>`;return}const i=n.map(({feature:a,catLabel:o})=>{const r=H(a.id),l=O(a.id),d=C(a),c=!l&&d.every(b=>E(b).valid||u.hasPending(b)&&u.getValidationState(b).validated!==!1),f=l?"ready":c?"staged":"needs",p=l?"ok":c?"staged":"warn",m=l?"Ready":c?"Staged":"Needs keys",w=d.map(b=>J(b,a.id)).join("");return`
      <div class="settings-feat ${f} expanded" data-feature-id="${a.id}">
        <div class="settings-feat-header" data-feat-toggle-expand="${a.id}">
          <label class="settings-feat-toggle-label" data-click-stop>
            <div class="settings-feat-switch">
              <input type="checkbox" data-toggle="${a.id}" ${r?"checked":""} />
              <span class="settings-feat-slider"></span>
            </div>
          </label>
          <div class="settings-feat-info">
            <span class="settings-feat-name">${U(a.name,s)}</span>
            <span class="settings-feat-desc">${U(a.description,s)}</span>
          </div>
          <span class="settings-feat-pill ${p}">${m}</span>
          <span class="settings-feat-chevron">&#x25B8;</span>
        </div>
        <div class="settings-feat-body">
          <div class="settings-feat-cat-tag">${v(o)}</div>
          ${w}
        </div>
      </div>
    `}).join("");e.innerHTML=`
    <div class="settings-section-header">
      <h2>Search results for "${v(s)}"</h2>
    </div>
    <div class="settings-feat-list">${i}</div>
  `,X(e)}async function Ee(){var t,n,i;await ae(),ne();try{await ie()}catch{}requestAnimationFrame(()=>{document.documentElement.classList.remove("no-transition")}),await oe(),u=new me,x("overview"),(t=document.getElementById("sidebarNav"))==null||t.addEventListener("click",a=>{const o=a.target.closest("[data-section]");o!=null&&o.dataset.section&&x(o.dataset.section)});const s=document.getElementById("settingsSearch");let e;s==null||s.addEventListener("input",()=>{clearTimeout(e),e=setTimeout(()=>Me(s.value),200)}),(n=document.getElementById("okBtn"))==null||n.addEventListener("click",()=>{(async()=>{try{const a=document.querySelector("[data-wm-key-input]"),o=a==null?void 0:a.value.trim(),r=!!(o&&o!==S&&o.length>0),l=document.getElementById("contentArea");l&&u.captureUnsavedInputs(l);const d=u.hasPendingChanges();if(!d&&!r){R();return}if(r&&o&&await G("WORLDMONITOR_API_KEY",o),d){h(g("modals.settingsWindow.validating"),"ok");const c=u.getMissingRequiredSecrets();if(c.length>0){h(`Missing required: ${c.join(", ")}`,"error");return}const f=await u.verifyPendingSecrets();if(f.length>0){h(g("modals.settingsWindow.verifyFailed",{errors:f.join(", ")}),"error");return}await u.commitVerifiedSecrets()}h(g("modals.settingsWindow.saved"),"ok"),R()}catch(a){console.error("[settings] save error:",a),h(g("modals.settingsWindow.failed",{error:String(a)}),"error")}})()}),(i=document.getElementById("cancelBtn"))==null||i.addEventListener("click",()=>{R()}),window.addEventListener("beforeunload",()=>{u.destroy()})}localStorage.setItem("wm-settings-open","1");window.addEventListener("beforeunload",()=>localStorage.removeItem("wm-settings-open"));Ee();
