import { resolveComponent, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.6ab74304.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"\u7ECF\u9500\u5408\u540C\u7BA1\u7406/\u9500\u552E\u5408\u540C/\u5E74\u5EA6\u7ECF\u9500\u5408\u540C/index.md"}');
const _sfc_main = { name: "\u7ECF\u9500\u5408\u540C\u7BA1\u7406/\u9500\u552E\u5408\u540C/\u5E74\u5EA6\u7ECF\u9500\u5408\u540C/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_BreadcrumbTabs = resolveComponent("BreadcrumbTabs");
  const _component_KbCard = resolveComponent("KbCard");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_BreadcrumbTabs, null, null, _parent));
  _push(`<div id="biz-intro" style="${ssrRenderStyle({ "display": "none" })}"><div class="tab-pad"><div class="kl-wrap"><div class="kl-card"><div class="biz-kl-hdr"><span class="biz-tag" style="${ssrRenderStyle({ "background": "rgba(124,58,237,0.08)", "color": "#7C3AED", "border-color": "rgba(124,58,237,0.18)" })}"> \u5B9A\u4E49</span><h2>\u5E74\u5EA6\u7ECF\u9500\u5408\u540C\u662F\u4EC0\u4E48</h2><p>\u7ECF\u9500\u5546\u4E0E\u4EA4\u6613\u516C\u53F8\u4E4B\u95F4\u6309\u9500\u552E\u5E74\u5EA6\u7B7E\u8BA2\u7684\u4E3B\u5408\u540C\uFF0C\u662F\u4EFB\u52A1\u3001\u4FDD\u8BC1\u91D1\u4E0E\u6E20\u9053\u653F\u7B56\u7684\u8F7D\u4F53</p></div><div class="biz-2col-inner"><div class="kl-col-box"><div style="${ssrRenderStyle({ "display": "flex", "align-items": "center", "gap": "10px", "margin-bottom": "12px" })}"><div style="${ssrRenderStyle({ "width": "40px", "height": "40px", "border-radius": "10px", "display": "flex", "align-items": "center", "justify-content": "center", "background": "linear-gradient(135deg,#7c3aed,#6d28d9)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="2" width="10" height="12" rx="1.5" stroke="white" stroke-width="1.5"></rect><path d="M5.5 6L7 7.5L10.5 4.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M5.5 9.5H10.5" stroke="white" stroke-width="1.5" stroke-linecap="round"></path></svg></div><h4 style="${ssrRenderStyle({ "font-size": "1rem", "font-weight": "800", "color": "#1F2937", "margin": "0" })}">\u5408\u540C\u627F\u8F7D\u5185\u5BB9</h4></div><p style="${ssrRenderStyle({ "font-size": "0.78rem", "font-weight": "600", "color": "#6B7280", "margin": "0 0 10px" })}">\u4E00\u4EFD\u5408\u540C\u5305\u542B\u7684\u6838\u5FC3\u4FE1\u606F</p><div style="${ssrRenderStyle({ "display": "flex", "flex-direction": "column", "gap": "8px" })}"><div style="${ssrRenderStyle({ "display": "flex", "align-items": "flex-start", "gap": "8px", "padding": "8px 10px", "background": "#F5F3FF", "border-radius": "8px" })}"><div style="${ssrRenderStyle({ "font-size": ".75rem" })}"><strong>\u4E3B\u4F53\u4E0E\u671F\u9650</strong> \u2014 \u7ECF\u9500\u5546\u3001\u4EA4\u6613\u516C\u53F8\u3001\u6CD5\u4EBA\u3001\u5408\u540C\u8D77\u6B62\u65E5\u671F</div></div><div style="${ssrRenderStyle({ "display": "flex", "align-items": "flex-start", "gap": "8px", "padding": "8px 10px", "background": "#F5F3FF", "border-radius": "8px" })}"><div style="${ssrRenderStyle({ "font-size": ".75rem" })}"><strong>\u4EFB\u52A1\u4E0E\u8D39\u7528</strong> \u2014 \u9500\u552E\u4EFB\u52A1\u603B\u989D\u3001\u4FDD\u8BC1\u91D1\u3001\u63A8\u5E7F\u8D39\u7387\u7B49</div></div></div></div><div class="kl-col-box alt"><div style="${ssrRenderStyle({ "display": "flex", "align-items": "center", "gap": "10px", "margin-bottom": "12px" })}"><div style="${ssrRenderStyle({ "width": "40px", "height": "40px", "border-radius": "10px", "display": "flex", "align-items": "center", "justify-content": "center", "background": "linear-gradient(135deg,#059669,#047857)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 13L6 9L9 11L13 5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></div><h4 style="${ssrRenderStyle({ "font-size": "1rem", "font-weight": "800", "color": "#1F2937", "margin": "0" })}">\u5B58\u5728\u610F\u4E49</h4></div><p style="${ssrRenderStyle({ "font-size": "0.78rem", "font-weight": "600", "color": "#6B7280", "margin": "0 0 10px" })}">\u4E3A\u4EC0\u4E48\u4EE5\u5E74\u4E3A\u5355\u4F4D\u7B7E\u8BA2</p><div style="${ssrRenderStyle({ "display": "flex", "flex-direction": "column", "gap": "8px" })}"><div style="${ssrRenderStyle({ "display": "flex", "align-items": "flex-start", "gap": "8px", "padding": "8px 10px", "background": "#F0FDF4", "border-radius": "8px" })}"><div style="${ssrRenderStyle({ "font-size": ".75rem" })}"><strong>\u6E20\u9053\u7BA1\u63A7</strong> \u2014 \u660E\u786E\u6388\u6743\u533A\u57DF\u4E0E\u5408\u540C\u7C7B\u578B\uFF0C\u9632\u6B62\u591A\u5934\u7B7E\u7EA6</div></div><div style="${ssrRenderStyle({ "display": "flex", "align-items": "flex-start", "gap": "8px", "padding": "8px 10px", "background": "#F0FDF4", "border-radius": "8px" })}"><div style="${ssrRenderStyle({ "font-size": ".75rem" })}"><strong>\u4E0B\u6E38\u57FA\u77F3</strong> \u2014 \u9A71\u52A8\u4FDD\u8BC1\u91D1\u8BA4\u7F34\u3001\u53D8\u66F4\u4E0E CRM \u5408\u540C\u540C\u6B65</div></div></div></div></div></div><div class="kl-card"><div class="biz-kl-hdr"><span class="biz-tag" style="${ssrRenderStyle({ "background": "rgba(124,58,237,0.08)", "color": "#7C3AED", "border-color": "rgba(124,58,237,0.18)" })}"> \u6D41\u7A0B</span><h2>\u5408\u540C\u600E\u4E48\u7B7E\u8BA2\u751F\u6548</h2><p>\u65B0\u5EFA\u914D\u7F6E \u2192 \u63D0\u4EA4\u5BA1\u6279 \u2192 \u901A\u8FC7\u540E\u751F\u6548\u5E76\u63A8\u9001 CRM</p></div><div class="biz-steps"><div class="biz-step-item"><div class="biz-step-circle" style="${ssrRenderStyle({ "background": "linear-gradient(135deg,#7C3AED,#6D28D9)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 8h10M8 3v10" stroke="white" stroke-width="1.5" stroke-linecap="round"></path></svg></div><h5>\u65B0\u5EFA\u5408\u540C</h5><small>\u9009\u7ECF\u9500\u5546/\u4EA4\u6613\u516C\u53F8<br>\u914D\u7F6E\u533A\u57DF\u4E0E\u4EFB\u52A1</small></div><div class="biz-step-arrow">\u2192</div><div class="biz-step-item"><div class="biz-step-circle" style="${ssrRenderStyle({ "background": "linear-gradient(135deg,#7C3AED,#6D28D9)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 8h10M8 3v10" stroke="white" stroke-width="1.5" stroke-linecap="round"></path></svg></div><h5>\u4FDD\u5B58\u5E76\u63D0\u4EA4</h5><small>\u9009\u5BA1\u6279\u6D41\u7A0B<br>\u542F\u52A8\u5DE5\u4F5C\u6D41\u5BA1\u6279</small></div><div class="biz-step-arrow">\u2192</div><div class="biz-step-item"><div class="biz-step-circle" style="${ssrRenderStyle({ "background": "linear-gradient(135deg,#7C3AED,#6D28D9)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 2L3 4V8C3 11 8 14 8 14C8 14 13 11 13 8V4L8 2Z" stroke="white" stroke-width="1.5" stroke-linejoin="round"></path></svg></div><h5>\u5BA1\u6279\u5224\u65AD</h5><small>\u901A\u8FC7\u5219\u5408\u540C\u751F\u6548<br>\u9A73\u56DE\u53EF\u56DE\u9000\u4FEE\u6539</small></div><div class="biz-step-arrow">\u2192</div><div class="biz-step-item"><div class="biz-step-circle" style="${ssrRenderStyle({ "background": "linear-gradient(135deg,#059669,#047857)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 13L6 9L9 11L13 5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></div><h5>\u751F\u6548\u540C\u6B65</h5><small>\u63A8\u9001 CRM \u5408\u540C\u4FE1\u606F<br>\u652F\u6491\u540E\u7EED\u8BA4\u7F34</small></div></div></div><div class="kl-card"><div class="biz-kl-hdr"><span class="biz-tag" style="${ssrRenderStyle({ "background": "rgba(124,58,237,0.08)", "color": "#7C3AED", "border-color": "rgba(124,58,237,0.18)" })}"> \u89C4\u5219</span><h2>\u5173\u952E\u89C4\u5219\u4E0E\u8FB9\u754C</h2><p>\u65E5\u671F\u53E3\u5F84\u3001\u533A\u57DF\u51B2\u7A81\u4E0E\u72B6\u6001\u7EA6\u675F</p></div><div class="biz-3col"><div class="kl-col-box" style="${ssrRenderStyle({ "margin-bottom": "0" })}"><div style="${ssrRenderStyle({ "display": "flex", "gap": "12px", "align-items": "flex-start" })}"><div style="${ssrRenderStyle({ "width": "36px", "height": "36px", "border-radius": "10px", "display": "flex", "align-items": "center", "justify-content": "center", "flex-shrink": "0", "background": "linear-gradient(135deg,#7C3AED,#A78BFA)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="3" width="12" height="11" rx="1.5" stroke="white" stroke-width="1.5"></rect><path d="M2 6H14M5 2V4M11 2V4" stroke="white" stroke-width="1.5" stroke-linecap="round"></path></svg></div><div><h5 style="${ssrRenderStyle({ "font-size": "0.88rem", "font-weight": "800", "color": "#1F2937", "margin": "0 0 6px" })}">\u65E5\u671F\u53E3\u5F84</h5><p style="${ssrRenderStyle({ "font-size": "0.73rem", "color": "#6B7280", "margin": "0", "line-height": "1.6" })}">\u5408\u540C\u5F00\u59CB\u65E5\u671F\u987B\u4E3A\u9500\u552E\u5E74\u5EA6\u7B2C\u4E00\u5929\uFF0C\u7ED3\u675F\u65E5\u671F\u987B\u4E3A\u5E74\u5EA6\u6700\u540E\u4E00\u5929\u3002</p></div></div></div><div class="kl-col-box alt" style="${ssrRenderStyle({ "margin-bottom": "0" })}"><div style="${ssrRenderStyle({ "display": "flex", "gap": "12px", "align-items": "flex-start" })}"><div style="${ssrRenderStyle({ "width": "36px", "height": "36px", "border-radius": "10px", "display": "flex", "align-items": "center", "justify-content": "center", "flex-shrink": "0", "background": "linear-gradient(135deg,#7C3AED,#A78BFA)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 5L8 2L13 5V11L8 14L3 11V5Z" stroke="white" stroke-width="1.5" stroke-linejoin="round"></path></svg></div><div><h5 style="${ssrRenderStyle({ "font-size": "0.88rem", "font-weight": "800", "color": "#1F2937", "margin": "0 0 6px" })}">\u533A\u57DF\u6821\u9A8C</h5><p style="${ssrRenderStyle({ "font-size": "0.73rem", "color": "#6B7280", "margin": "0", "line-height": "1.6" })}">\u4FDD\u5B58\u65F6\u6821\u9A8C\u6388\u6743\u533A\u57DF\u662F\u5426\u4E0E\u5176\u4ED6\u751F\u6548\u5408\u540C\u51B2\u7A81\uFF0C\u51B2\u7A81\u4EC5\u63D0\u793A\u4E0D\u963B\u65AD\u4FDD\u5B58\u3002</p></div></div></div><div class="kl-col-box" style="${ssrRenderStyle({ "margin-bottom": "0" })}"><div style="${ssrRenderStyle({ "display": "flex", "gap": "12px", "align-items": "flex-start" })}"><div style="${ssrRenderStyle({ "width": "36px", "height": "36px", "border-radius": "10px", "display": "flex", "align-items": "center", "justify-content": "center", "flex-shrink": "0", "background": "linear-gradient(135deg,#7C3AED,#A78BFA)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="5.5" stroke="white" stroke-width="1.5"></circle><path d="M8 5.5V8" stroke="white" stroke-width="1.5" stroke-linecap="round"></path></svg></div><div><h5 style="${ssrRenderStyle({ "font-size": "0.88rem", "font-weight": "800", "color": "#1F2937", "margin": "0 0 6px" })}">\u72B6\u6001\u8FB9\u754C</h5><p style="${ssrRenderStyle({ "font-size": "0.73rem", "color": "#6B7280", "margin": "0", "line-height": "1.6" })}">\u4EC5&quot;\u65B0\u5EFA&quot;\u72B6\u6001\u53EF\u7F16\u8F91\u3001\u63D0\u4EA4\u6216\u5220\u9664\uFF1B\u751F\u6548\u540E\u4EC5\u53EF\u53D1\u8D77\u53D8\u66F4\u3002</p></div></div></div></div><div class="kl-tip" style="${ssrRenderStyle({ "margin-top": "14px" })}"><strong>\u4E1A\u52A1\u539F\u5219\uFF1A</strong>\u5408\u540C\u4EE5\u6574\u9500\u552E\u5E74\u5EA6\u7B7E\u8BA2\uFF0C\u6388\u6743\u533A\u57DF\u987B\u907F\u514D\u4E0E\u540C\u7ECF\u9500\u5546\u5176\u4ED6\u751F\u6548\u5408\u540C\u91CD\u53E0\uFF1B\u5BA1\u6279\u901A\u8FC7\u540E\u624D\u63A8\u9001 CRM \u5E76\u5141\u8BB8\u53D1\u8D77\u540E\u7EED\u8BA4\u7F34\u4E0E\u53D8\u66F4\u3002 </div></div></div></div></div><div id="biz-flow" style="${ssrRenderStyle({ "display": "none" })}"><div class="tab-pad"><div class="bf-truth-flow"><h4 class="bf-main-title">\u5E74\u5EA6\u7ECF\u9500\u5408\u540C \u2014 \u5168\u94FE\u8DEF\u6D41\u7A0B\u56FE</h4><p class="bf-main-sub">\u5F00\u59CB \u2192 \u2605\u65B0\u5EFA\u5E74\u5EA6\u7ECF\u9500\u5408\u540C\u2605 \u2192 \u2696\u5BA1\u6279\u901A\u8FC7\uFF1F \u2192 \u5408\u540C\u751F\u6548(\u63A8\u9001CRM) \u2192 \u7ED3\u675F\uFF08\u9A73\u56DE\u5219\u56DE\u9000\u4FEE\u6539\uFF09</p><div class="bf-fc-svg-wrap"><svg class="bf-fc-svg" style="${ssrRenderStyle({ "max-height": "none" })}" viewBox="0 0 1200 640" xmlns="http://www.w3.org/2000/svg"><defs><marker id="arr-green" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon points="0,0 10,5 0,10" fill="#16A34A"></polygon></marker><marker id="arr-gray" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon points="0,0 10,5 0,10" fill="#9CA3AF"></polygon></marker><marker id="arr-blue" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon points="0,0 10,5 0,10" fill="#3B82F6"></polygon></marker><marker id="arr-red" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon points="0,0 10,5 0,10" fill="#EF4444"></polygon></marker><filter id="shadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000" flood-opacity="0.15"></feDropShadow></filter></defs><rect x="50" y="20" width="1100" height="95" rx="8" fill="#EFF6FF" stroke="#3B82F6" stroke-width="1.5" stroke-dasharray="6,4"></rect><text x="600" y="42" text-anchor="middle" fill="#1D4ED8" font-size="13" font-weight="600">\u4E0A\u6E38\u652F\u6491</text><rect x="112" y="56" width="150" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"></rect><text x="187" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">\u7ECF\u9500\u5546\u4E3B\u6570\u636E</text><rect x="277" y="56" width="150" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"></rect><text x="352" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">\u4EA4\u6613\u516C\u53F8</text><rect x="442" y="56" width="150" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"></rect><text x="517" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">\u9500\u552E\u533A\u57DF</text><rect x="607" y="56" width="150" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"></rect><text x="682" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">\u5408\u540C\u7C7B\u578B\u6E20\u9053</text><rect x="772" y="56" width="150" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"></rect><text x="847" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">\u5DE5\u4F5C\u6D41\u5F15\u64CE</text><rect x="937" y="56" width="150" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"></rect><text x="1012" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">CRM\u7CFB\u7EDF</text><line x1="600" y1="115" x2="600" y2="150" stroke="#3B82F6" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#arr-blue)"></line><rect x="560" y="150" width="80" height="44" rx="6" fill="#FAF5FF" stroke="#9333EA" stroke-width="1.5" stroke-dasharray="5,3"></rect><text x="600" y="177" text-anchor="middle" fill="#7C3AED" font-size="13" font-weight="600">\u5F00\u59CB</text><line x1="600" y1="194" x2="600" y2="230" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"></line><rect x="470" y="230" width="260" height="54" rx="6" fill="#16A34A" stroke="#15803D" stroke-width="2" filter="url(#shadow)"></rect><text x="600" y="254" text-anchor="middle" fill="#FFFFFF" font-size="13" font-weight="700">\u2605\u65B0\u5EFA\u5E74\u5EA6\u7ECF\u9500\u5408\u540C\u2605</text><text x="600" y="272" text-anchor="middle" fill="#DCFCE7" font-size="10">\u9009\u7ECF\u9500\u5546/\u914D\u7F6E\u533A\u57DF\u4EFB\u52A1/\u4FDD\u5B58</text><line x1="600" y1="284" x2="600" y2="300" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"></line><polygon points="600,300 680,340 600,380 520,340" fill="#FAF5FF" stroke="#9333EA" stroke-width="1.5" stroke-dasharray="5,3"></polygon><text x="600" y="344" text-anchor="middle" fill="#7C3AED" font-size="12" font-weight="600">\u2696 \u5BA1\u6279\u901A\u8FC7\uFF1F</text><line x1="680" y1="340" x2="755" y2="340" stroke="#EF4444" stroke-width="2" marker-end="url(#arr-red)"></line><rect x="755" y="325" width="90" height="28" rx="4" fill="#FEF2F2" stroke="#EF4444" stroke-width="1"></rect><text x="800" y="344" text-anchor="middle" fill="#DC2626" font-size="11" font-weight="600">\u9A73\u56DE \u2717</text><line x1="800" y1="325" x2="800" y2="200" stroke="#EF4444" stroke-width="1.5"></line><line x1="800" y1="200" x2="700" y2="200" stroke="#EF4444" stroke-width="1.5"></line><line x1="700" y1="200" x2="700" y2="257" stroke="#EF4444" stroke-width="1.5" marker-end="url(#arr-red)"></line><line x1="600" y1="380" x2="600" y2="400" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"></line><rect x="520" y="400" width="160" height="40" rx="6" fill="#F0FDF4" stroke="#16A34A" stroke-width="2"></rect><text x="600" y="425" text-anchor="middle" fill="#166534" font-size="13" font-weight="600">\u5408\u540C\u751F\u6548</text><line x1="600" y1="440" x2="600" y2="460" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"></line><rect x="545" y="460" width="110" height="40" rx="6" fill="#FAF5FF" stroke="#9333EA" stroke-width="1.5" stroke-dasharray="5,3"></rect><text x="600" y="485" text-anchor="middle" fill="#7C3AED" font-size="13" font-weight="600">\u7ED3\u675F</text><line x1="600" y1="500" x2="600" y2="520" stroke="#16A34A" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#arr-green)"></line><rect x="50" y="520" width="1100" height="95" rx="8" fill="#F0FDF4" stroke="#16A34A" stroke-width="1.5" stroke-dasharray="6,4"></rect><text x="600" y="542" text-anchor="middle" fill="#166534" font-size="13" font-weight="600">\u4E0B\u6E38\u5F71\u54CD</text><rect x="270" y="558" width="200" height="36" rx="5" fill="#FFFFFF" stroke="#16A34A" stroke-width="1.2"></rect><text x="370" y="581" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">\u540E\u7EED\u4FDD\u8BC1\u91D1\u8BA4\u7F34</text><rect x="500" y="558" width="200" height="36" rx="5" fill="#FFFFFF" stroke="#16A34A" stroke-width="1.2"></rect><text x="600" y="581" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">\u63A8\u9001CRM\u5408\u540C\u4FE1\u606F</text><rect x="730" y="558" width="200" height="36" rx="5" fill="#FFFFFF" stroke="#16A34A" stroke-width="1.2"></rect><text x="830" y="581" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">\u5408\u540C\u53D8\u66F4\u5F15\u7528</text></svg></div><div class="bf-fc-legend"><span class="bf-fc-legend-item"><span class="bf-fc-dot bf-fc-dot-green"></span> \u4E3B\u6D41\u7A0B\u6B65\u9AA4</span><span class="bf-fc-legend-item"><span class="bf-fc-dot bf-fc-dot-purple"></span> \u5F00\u59CB/\u7ED3\u675F/\u5224\u65AD</span><span class="bf-fc-legend-item"><span class="bf-fc-dot bf-fc-dot-blue"></span> \u4E0A\u6E38\u652F\u6491\u7CFB\u7EDF</span><span class="bf-fc-legend-item"><span style="${ssrRenderStyle({ "display": "inline-block", "width": "22px", "height": "2px", "background": "#EF4444" })}"></span> \u5BA1\u6279\u62D2\u7EDD/\u9A73\u56DE</span></div></div></div></div><div id="key-logic" style="${ssrRenderStyle({ "display": "none" })}"><div class="tab-pad"><div class="kl-wrap">`);
  _push(ssrRenderComponent(_component_KbCard, {
    num: "1",
    title: "\u91CD\u70B9\u903B\u8F911\uFF1AOA\u5BA1\u6279\u6D41\u7A0B {\u5BA1\u6279\u6D41\u8F6C}"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u610F\u4E49</strong>\uFF1A\u5E74\u5EA6\u7ECF\u9500\u5408\u540C\u9700\u7ECFOA\u5BA1\u6279\uFF0C\u786E\u4FDD\u5408\u540C\u5408\u89C4</li></ul><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u5177\u4F53\u903B\u8F91\u63CF\u8FF0</strong></li></ul><ul${_scopeId}><li${_scopeId}>\u7B2C1\u70B9\uFF1A\u4FDD\u5B58\u5E76\u63D0\u4EA4\u65F6\u901A\u8FC7workFlowStart\u53D1\u8D77OA\u5BA1\u6279(DISTRIBUTION_CONTRACT_DKHB)</li></ul><ul${_scopeId}><li${_scopeId}>\u7B2C2\u70B9\uFF1AworkFlowStartValid\u65B9\u6CD5\u8FDB\u884C\u6D41\u7A0B\u542F\u52A8\u524D\u6821\u9A8C</li></ul><ul${_scopeId}><li${_scopeId}>\u7B2C3\u70B9\uFF1A\u5BA1\u6279\u901A\u8FC7\u540E\u5408\u540C\u751F\u6548\uFF0C\u53EF\u8FDB\u884C\u5F52\u6863\u548C\u53D8\u66F4</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u610F\u4E49"),
              createTextVNode("\uFF1A\u5E74\u5EA6\u7ECF\u9500\u5408\u540C\u9700\u7ECFOA\u5BA1\u6279\uFF0C\u786E\u4FDD\u5408\u540C\u5408\u89C4")
            ])
          ]),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u5177\u4F53\u903B\u8F91\u63CF\u8FF0")
            ])
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u7B2C1\u70B9\uFF1A\u4FDD\u5B58\u5E76\u63D0\u4EA4\u65F6\u901A\u8FC7workFlowStart\u53D1\u8D77OA\u5BA1\u6279(DISTRIBUTION_CONTRACT_DKHB)")
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u7B2C2\u70B9\uFF1AworkFlowStartValid\u65B9\u6CD5\u8FDB\u884C\u6D41\u7A0B\u542F\u52A8\u524D\u6821\u9A8C")
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u7B2C3\u70B9\uFF1A\u5BA1\u6279\u901A\u8FC7\u540E\u5408\u540C\u751F\u6548\uFF0C\u53EF\u8FDB\u884C\u5F52\u6863\u548C\u53D8\u66F4")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, {
    num: "2",
    title: "\u91CD\u70B9\u903B\u8F912\uFF1A\u5408\u540C\u533A\u57DF\u6821\u9A8C {\u533A\u57DF\u6821\u9A8C}"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u610F\u4E49</strong>\uFF1A\u5408\u540C\u9700\u6821\u9A8C\u9500\u552E\u533A\u57DF\u5408\u6CD5\u6027</li></ul><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u5177\u4F53\u903B\u8F91\u63CF\u8FF0</strong></li></ul><ul${_scopeId}><li${_scopeId}>\u7B2C1\u70B9\uFF1A\u901A\u8FC7doCheckAreaNew/doCheckArea\u65B9\u6CD5\u6821\u9A8C\u533A\u57DF</li></ul><ul${_scopeId}><li${_scopeId}>\u7B2C2\u70B9\uFF1A\u6821\u9A8C\u7ECF\u9500\u5546\u5728\u9009\u5B9A\u533A\u57DF\u5185\u7684\u5408\u6CD5\u6027</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u610F\u4E49"),
              createTextVNode("\uFF1A\u5408\u540C\u9700\u6821\u9A8C\u9500\u552E\u533A\u57DF\u5408\u6CD5\u6027")
            ])
          ]),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u5177\u4F53\u903B\u8F91\u63CF\u8FF0")
            ])
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u7B2C1\u70B9\uFF1A\u901A\u8FC7doCheckAreaNew/doCheckArea\u65B9\u6CD5\u6821\u9A8C\u533A\u57DF")
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u7B2C2\u70B9\uFF1A\u6821\u9A8C\u7ECF\u9500\u5546\u5728\u9009\u5B9A\u533A\u57DF\u5185\u7684\u5408\u6CD5\u6027")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div><div id="detail-logic" style="${ssrRenderStyle({ "display": "none" })}"><div class="tab-pad"><div class="kl-wrap">`);
  _push(ssrRenderComponent(_component_KbCard, { title: "\u754C\u9762\u6A21\u57571\uFF1A\u5E74\u5EA6\u7ECF\u9500\u5408\u540C\u5217\u8868\u9875" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5B57\u6BB5\u540D</th><th${_scopeId}>\u6570\u636E\u5E93\u5217\u540D</th><th${_scopeId}>\u7EC4\u4EF6</th><th${_scopeId}>\u4E1A\u52A1\u91CA\u4E49</th><th${_scopeId}>\u663E\u9690\u6761\u4EF6</th><th${_scopeId}>\u53D6\u503C/\u8D4B\u503C\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u5408\u540C\u7F16\u53F7</td><td${_scopeId}>SA_SALE_CONTRACT_HEAD.CONTRACT_NO</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u5408\u540C\u7F16\u53F7</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u81EA\u52A8\u751F\u6210</td></tr><tr${_scopeId}><td${_scopeId}>\u7ECF\u9500\u5546</td><td${_scopeId}>SA_SALE_CONTRACT_HEAD.CUSTOMER_NAME</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u7ECF\u9500\u5546\u540D\u79F0</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u9009\u62E9\u7ECF\u9500\u5546\u5E26\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>\u5408\u540C\u5E74\u5EA6</td><td${_scopeId}>SA_SALE_CONTRACT_HEAD.CONTRACT_YEAR</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u5408\u540C\u5E74\u5EA6</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u624B\u52A8\u9009\u62E9</td></tr><tr${_scopeId}><td${_scopeId}>\u4E8B\u4E1A\u90E8</td><td${_scopeId}>SA_SALE_CONTRACT_HEAD.ENTNAME</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u4E8B\u4E1A\u90E8\u540D\u79F0</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u9009\u62E9\u4E8B\u4E1A\u90E8\u5E26\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>\u4EA4\u6613\u516C\u53F8</td><td${_scopeId}>SA_SALE_CONTRACT_HEAD.TRADING_COMPANY_NAME</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u4EA4\u6613\u516C\u53F8\u540D\u79F0</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u9009\u62E9\u4EA4\u6613\u516C\u53F8\u5E26\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>H0\u6D41\u7A0B\u5BA1\u6279\u72B6\u6001</td><td${_scopeId}>SA_SALE_CONTRACT_HEAD.HZ_APPROVE_STATUS</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u6D41\u7A0B\u5BA1\u6279\u72B6\u6001</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u6D41\u7A0B\u56DE\u8C03\u66F4\u65B0</td></tr><tr${_scopeId}><td${_scopeId}>\u5F52\u6863\u72B6\u6001</td><td${_scopeId}>SA_SALE_CONTRACT_HEAD.STATE_PIGEONHOLE</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u5408\u540C\u5F52\u6863\u72B6\u6001</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u5F52\u6863\u540E\u66F4\u65B0</td></tr></tbody></table>`);
      } else {
        return [
          createVNode("table", { class: "kb-field-tbl" }, [
            createVNode("thead", null, [
              createVNode("tr", null, [
                createVNode("th", null, "\u5B57\u6BB5\u540D"),
                createVNode("th", null, "\u6570\u636E\u5E93\u5217\u540D"),
                createVNode("th", null, "\u7EC4\u4EF6"),
                createVNode("th", null, "\u4E1A\u52A1\u91CA\u4E49"),
                createVNode("th", null, "\u663E\u9690\u6761\u4EF6"),
                createVNode("th", null, "\u53D6\u503C/\u8D4B\u503C\u903B\u8F91")
              ])
            ]),
            createVNode("tbody", null, [
              createVNode("tr", null, [
                createVNode("td", null, "\u5408\u540C\u7F16\u53F7"),
                createVNode("td", null, "SA_SALE_CONTRACT_HEAD.CONTRACT_NO"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u5408\u540C\u7F16\u53F7"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u81EA\u52A8\u751F\u6210")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7ECF\u9500\u5546"),
                createVNode("td", null, "SA_SALE_CONTRACT_HEAD.CUSTOMER_NAME"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u7ECF\u9500\u5546\u540D\u79F0"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u9009\u62E9\u7ECF\u9500\u5546\u5E26\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5408\u540C\u5E74\u5EA6"),
                createVNode("td", null, "SA_SALE_CONTRACT_HEAD.CONTRACT_YEAR"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u5408\u540C\u5E74\u5EA6"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u624B\u52A8\u9009\u62E9")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u4E8B\u4E1A\u90E8"),
                createVNode("td", null, "SA_SALE_CONTRACT_HEAD.ENTNAME"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u4E8B\u4E1A\u90E8\u540D\u79F0"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u9009\u62E9\u4E8B\u4E1A\u90E8\u5E26\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u4EA4\u6613\u516C\u53F8"),
                createVNode("td", null, "SA_SALE_CONTRACT_HEAD.TRADING_COMPANY_NAME"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u4EA4\u6613\u516C\u53F8\u540D\u79F0"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u9009\u62E9\u4EA4\u6613\u516C\u53F8\u5E26\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "H0\u6D41\u7A0B\u5BA1\u6279\u72B6\u6001"),
                createVNode("td", null, "SA_SALE_CONTRACT_HEAD.HZ_APPROVE_STATUS"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u6D41\u7A0B\u5BA1\u6279\u72B6\u6001"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u6D41\u7A0B\u56DE\u8C03\u66F4\u65B0")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5F52\u6863\u72B6\u6001"),
                createVNode("td", null, "SA_SALE_CONTRACT_HEAD.STATE_PIGEONHOLE"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u5408\u540C\u5F52\u6863\u72B6\u6001"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u5F52\u6863\u540E\u66F4\u65B0")
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, { title: "\u9009\u62E9\u5F39\u7A97" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<blockquote${_scopeId}>\u672C\u9875\u9762\u67E5\u8BE2\u6761\u4EF6\u4F7F\u7528\u6587\u672C\u8F93\u5165\u548C\u4E0B\u62C9\u9009\u62E9\uFF0C\u65E0\u72EC\u7ACB\u5F39\u7A97\u3002</blockquote>`);
      } else {
        return [
          createVNode("blockquote", null, "\u672C\u9875\u9762\u67E5\u8BE2\u6761\u4EF6\u4F7F\u7528\u6587\u672C\u8F93\u5165\u548C\u4E0B\u62C9\u9009\u62E9\uFF0C\u65E0\u72EC\u7ACB\u5F39\u7A97\u3002")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, { title: "\u5BFC\u5165" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<blockquote${_scopeId}>\u672C\u9875\u9762\u65E0\u5BFC\u5165\u529F\u80FD\u3002</blockquote>`);
      } else {
        return [
          createVNode("blockquote", null, "\u672C\u9875\u9762\u65E0\u5BFC\u5165\u529F\u80FD\u3002")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, { title: "\u5176\u4ED6\u6309\u94AE" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u6309\u94AE\u540D\u79F0</th><th${_scopeId}>\u6309\u94AE\u4F5C\u7528</th><th${_scopeId}>\u6240\u5728\u4F4D\u7F6E</th><th${_scopeId}>\u663E\u9690\u6761\u4EF6/\u53EF\u70B9\u51FB\u6761\u4EF6</th><th${_scopeId}>\u5F71\u54CD</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u65B0\u589E</td><td${_scopeId}>\u65B0\u5EFA\u5E74\u5EA6\u7ECF\u9500\u5408\u540C</td><td${_scopeId}>\u5217\u8868\u9875</td><td${_scopeId}>\u59CB\u7EC8\u53EF\u7528</td><td${_scopeId}>\u6253\u5F00\u65B0\u5EFA\u9875\u9762</td></tr><tr${_scopeId}><td${_scopeId}>\u4FDD\u5B58</td><td${_scopeId}>\u4FDD\u5B58\u5408\u540C\u4FE1\u606F</td><td${_scopeId}>\u7F16\u8F91\u9875</td><td${_scopeId}>\u7F16\u8F91\u72B6\u6001</td><td${_scopeId}>\u8C03\u7528save\u63A5\u53E3</td></tr><tr${_scopeId}><td${_scopeId}>\u4FDD\u5B58\u5E76\u63D0\u4EA4</td><td${_scopeId}>\u53D1\u8D77OA\u5BA1\u6279</td><td${_scopeId}>\u7F16\u8F91\u9875</td><td${_scopeId}>\u4FDD\u5B58\u540E</td><td${_scopeId}>\u53D1\u8D77DISTRIBUTION_CONTRACT_DKHB\u6D41\u7A0B</td></tr><tr${_scopeId}><td${_scopeId}>\u5220\u9664</td><td${_scopeId}>\u5220\u9664\u5408\u540C</td><td${_scopeId}>\u5217\u8868\u9875</td><td${_scopeId}>\u9009\u4E2D\u672A\u63D0\u4EA4\u8BB0\u5F55</td><td${_scopeId}>\u8C03\u7528remove\u63A5\u53E3</td></tr><tr${_scopeId}><td${_scopeId}>\u5BFC\u51FA</td><td${_scopeId}>\u5BFC\u51FA\u5408\u540C\u5217\u8868</td><td${_scopeId}>\u5217\u8868\u9875</td><td${_scopeId}>\u6709\u6570\u636E\u65F6</td><td${_scopeId}>\u8C03\u7528selectExportList\u63A5\u53E3</td></tr></tbody></table>`);
      } else {
        return [
          createVNode("table", { class: "kb-field-tbl" }, [
            createVNode("thead", null, [
              createVNode("tr", null, [
                createVNode("th", null, "\u6309\u94AE\u540D\u79F0"),
                createVNode("th", null, "\u6309\u94AE\u4F5C\u7528"),
                createVNode("th", null, "\u6240\u5728\u4F4D\u7F6E"),
                createVNode("th", null, "\u663E\u9690\u6761\u4EF6/\u53EF\u70B9\u51FB\u6761\u4EF6"),
                createVNode("th", null, "\u5F71\u54CD")
              ])
            ]),
            createVNode("tbody", null, [
              createVNode("tr", null, [
                createVNode("td", null, "\u65B0\u589E"),
                createVNode("td", null, "\u65B0\u5EFA\u5E74\u5EA6\u7ECF\u9500\u5408\u540C"),
                createVNode("td", null, "\u5217\u8868\u9875"),
                createVNode("td", null, "\u59CB\u7EC8\u53EF\u7528"),
                createVNode("td", null, "\u6253\u5F00\u65B0\u5EFA\u9875\u9762")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u4FDD\u5B58"),
                createVNode("td", null, "\u4FDD\u5B58\u5408\u540C\u4FE1\u606F"),
                createVNode("td", null, "\u7F16\u8F91\u9875"),
                createVNode("td", null, "\u7F16\u8F91\u72B6\u6001"),
                createVNode("td", null, "\u8C03\u7528save\u63A5\u53E3")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u4FDD\u5B58\u5E76\u63D0\u4EA4"),
                createVNode("td", null, "\u53D1\u8D77OA\u5BA1\u6279"),
                createVNode("td", null, "\u7F16\u8F91\u9875"),
                createVNode("td", null, "\u4FDD\u5B58\u540E"),
                createVNode("td", null, "\u53D1\u8D77DISTRIBUTION_CONTRACT_DKHB\u6D41\u7A0B")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5220\u9664"),
                createVNode("td", null, "\u5220\u9664\u5408\u540C"),
                createVNode("td", null, "\u5217\u8868\u9875"),
                createVNode("td", null, "\u9009\u4E2D\u672A\u63D0\u4EA4\u8BB0\u5F55"),
                createVNode("td", null, "\u8C03\u7528remove\u63A5\u53E3")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5BFC\u51FA"),
                createVNode("td", null, "\u5BFC\u51FA\u5408\u540C\u5217\u8868"),
                createVNode("td", null, "\u5217\u8868\u9875"),
                createVNode("td", null, "\u6709\u6570\u636E\u65F6"),
                createVNode("td", null, "\u8C03\u7528selectExportList\u63A5\u53E3")
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, { title: "\u4FDD\u5B58\u6821\u9A8C" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}>\u6821\u9A8C1\uFF1A\u7ECF\u9500\u5546\u4E0D\u80FD\u4E3A\u7A7A \u2014\u2014 \u786E\u4FDD\u5408\u540C\u5173\u8054\u660E\u786E\u7ECF\u9500\u5546</li></ul><ul${_scopeId}><li${_scopeId}>\u8BE6\u7EC6\u903B\u8F91</li></ul><p${_scopeId}>- \u7B2C1\u70B9\uFF1A\u4FDD\u5B58\u65F6\u6821\u9A8C\u7ECF\u9500\u5546ID\u4E0D\u4E3A\u7A7A</p><ul${_scopeId}><li${_scopeId}>\u7CFB\u7EDF\u4F53\u73B0\uFF1Atoast\u63D0\u9192</li></ul><ul${_scopeId}><li${_scopeId}>\u6392\u67E5SQL\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>*</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> SA_SALE_CONTRACT_HEAD </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> CUSTOMER_ID </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, "\u6821\u9A8C1\uFF1A\u7ECF\u9500\u5546\u4E0D\u80FD\u4E3A\u7A7A \u2014\u2014 \u786E\u4FDD\u5408\u540C\u5173\u8054\u660E\u786E\u7ECF\u9500\u5546")
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u8BE6\u7EC6\u903B\u8F91")
          ]),
          createVNode("p", null, "- \u7B2C1\u70B9\uFF1A\u4FDD\u5B58\u65F6\u6821\u9A8C\u7ECF\u9500\u5546ID\u4E0D\u4E3A\u7A7A"),
          createVNode("ul", null, [
            createVNode("li", null, "\u7CFB\u7EDF\u4F53\u73B0\uFF1Atoast\u63D0\u9192")
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u6392\u67E5SQL\uFF1A")
          ]),
          createVNode("div", { class: "language-sql" }, [
            createVNode("button", {
              title: "Copy Code",
              class: "copy"
            }),
            createVNode("span", { class: "lang" }, "sql"),
            createVNode("pre", { class: "shiki" }, [
              createVNode("code", null, [
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "SELECT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "*"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " SA_SALE_CONTRACT_HEAD "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " CUSTOMER_ID "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NULL"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, { title: "\u63D0\u4EA4\u6821\u9A8C" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}>\u6821\u9A8C1\uFF1A\u6D41\u7A0B\u542F\u52A8\u6821\u9A8C \u2014\u2014 \u786E\u4FDD\u5408\u540C\u6570\u636E\u5B8C\u6574</li></ul><ul${_scopeId}><li${_scopeId}>\u8BE6\u7EC6\u903B\u8F91</li></ul><p${_scopeId}>- \u7B2C1\u70B9\uFF1A\u901A\u8FC7workFlowStartValid\u65B9\u6CD5\u8FDB\u884C\u6D41\u7A0B\u542F\u52A8\u524D\u6821\u9A8C</p><p${_scopeId}>- \u7B2C2\u70B9\uFF1A\u6821\u9A8C\u533A\u57DF\u5408\u6CD5\u6027(doCheckArea)</p><ul${_scopeId}><li${_scopeId}>\u7CFB\u7EDF\u4F53\u73B0\uFF1A\u963B\u65AD\u6027\u62A5\u9519</li></ul><ul${_scopeId}><li${_scopeId}>\u6392\u67E5SQL\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>*</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> SA_SALE_CONTRACT_HEAD </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> SALE_CONTRACT_HEAD_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> #{id} </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (CUSTOMER_ID </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>OR</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> CONTRACT_YEAR </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>);</span></span>
<span class="line"${_scopeId}></span></code></pre></div>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, "\u6821\u9A8C1\uFF1A\u6D41\u7A0B\u542F\u52A8\u6821\u9A8C \u2014\u2014 \u786E\u4FDD\u5408\u540C\u6570\u636E\u5B8C\u6574")
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u8BE6\u7EC6\u903B\u8F91")
          ]),
          createVNode("p", null, "- \u7B2C1\u70B9\uFF1A\u901A\u8FC7workFlowStartValid\u65B9\u6CD5\u8FDB\u884C\u6D41\u7A0B\u542F\u52A8\u524D\u6821\u9A8C"),
          createVNode("p", null, "- \u7B2C2\u70B9\uFF1A\u6821\u9A8C\u533A\u57DF\u5408\u6CD5\u6027(doCheckArea)"),
          createVNode("ul", null, [
            createVNode("li", null, "\u7CFB\u7EDF\u4F53\u73B0\uFF1A\u963B\u65AD\u6027\u62A5\u9519")
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u6392\u67E5SQL\uFF1A")
          ]),
          createVNode("div", { class: "language-sql" }, [
            createVNode("button", {
              title: "Copy Code",
              class: "copy"
            }),
            createVNode("span", { class: "lang" }, "sql"),
            createVNode("pre", { class: "shiki" }, [
              createVNode("code", null, [
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "SELECT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "*"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " SA_SALE_CONTRACT_HEAD "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " SALE_CONTRACT_HEAD_ID "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " #{id} "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " (CUSTOMER_ID "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NULL"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "OR"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " CONTRACT_YEAR "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NULL"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ");")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, { title: "\u72B6\u6001\u673A" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h4${_scopeId}>\u72B6\u6001\u673A\u6D41\u8F6C\u56FE</h4><div class="language-text"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>text</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>\u65B0\u5EFA \u2500\u2500\u4FDD\u5B58\u2500\u2500\u2192 \u5DF2\u4FDD\u5B58 \u2500\u2500\u63D0\u4EA4\u2500\u2500\u2192 \u5BA1\u6279\u4E2D \u2500\u2500OA\u5BA1\u6279\u901A\u8FC7\u2500\u2500\u2192 \u5DF2\u5BA1\u6279 \u2500\u2500\u5F52\u6863\u2500\u2500\u2192 \u5DF2\u5F52\u6863</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>                                \u2502</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>                                \u2514\u2500\u2500OA\u5BA1\u6279\u62D2\u7EDD\u2500\u2500\u2192 \u5DF2\u62D2\u7EDD</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}></span></span></code></pre></div><h4${_scopeId}>\u72B6\u6001\u673A\u5217\u8868</h4><table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u72B6\u6001\u673A\u540D\u79F0</th><th${_scopeId}>\u72B6\u6001\u91CA\u4E49</th><th${_scopeId}>\u53EF\u6267\u884C\u7684\u64CD\u4F5C</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>NEW</td><td${_scopeId}>\u5DF2\u4FDD\u5B58\u672A\u63D0\u4EA4</td><td${_scopeId}>\u7F16\u8F91\u3001\u4FDD\u5B58\u3001\u63D0\u4EA4\u3001\u5220\u9664</td></tr><tr${_scopeId}><td${_scopeId}>RUN</td><td${_scopeId}>OA\u5BA1\u6279\u4E2D</td><td${_scopeId}>\u65E0\uFF08\u7B49\u5F85\u5BA1\u6279\u7ED3\u679C\uFF09</td></tr><tr${_scopeId}><td${_scopeId}>APPROVED</td><td${_scopeId}>OA\u5BA1\u6279\u901A\u8FC7</td><td${_scopeId}>\u67E5\u770B\u3001\u5F52\u6863\u3001\u53D8\u66F4</td></tr><tr${_scopeId}><td${_scopeId}>REJECTED</td><td${_scopeId}>OA\u5BA1\u6279\u62D2\u7EDD</td><td${_scopeId}>\u4FEE\u6539\u3001\u91CD\u65B0\u63D0\u4EA4</td></tr><tr${_scopeId}><td${_scopeId}>ARCHIVED</td><td${_scopeId}>\u5DF2\u5F52\u6863</td><td${_scopeId}>\u67E5\u770B</td></tr></tbody></table>`);
      } else {
        return [
          createVNode("h4", null, "\u72B6\u6001\u673A\u6D41\u8F6C\u56FE"),
          createVNode("div", { class: "language-text" }, [
            createVNode("button", {
              title: "Copy Code",
              class: "copy"
            }),
            createVNode("span", { class: "lang" }, "text"),
            createVNode("pre", { class: "shiki" }, [
              createVNode("code", null, [
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "\u65B0\u5EFA \u2500\u2500\u4FDD\u5B58\u2500\u2500\u2192 \u5DF2\u4FDD\u5B58 \u2500\u2500\u63D0\u4EA4\u2500\u2500\u2192 \u5BA1\u6279\u4E2D \u2500\u2500OA\u5BA1\u6279\u901A\u8FC7\u2500\u2500\u2192 \u5DF2\u5BA1\u6279 \u2500\u2500\u5F52\u6863\u2500\u2500\u2192 \u5DF2\u5F52\u6863")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "                                \u2502")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "                                \u2514\u2500\u2500OA\u5BA1\u6279\u62D2\u7EDD\u2500\u2500\u2192 \u5DF2\u62D2\u7EDD")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } })
                ])
              ])
            ])
          ]),
          createVNode("h4", null, "\u72B6\u6001\u673A\u5217\u8868"),
          createVNode("table", { class: "kb-field-tbl" }, [
            createVNode("thead", null, [
              createVNode("tr", null, [
                createVNode("th", null, "\u72B6\u6001\u673A\u540D\u79F0"),
                createVNode("th", null, "\u72B6\u6001\u91CA\u4E49"),
                createVNode("th", null, "\u53EF\u6267\u884C\u7684\u64CD\u4F5C")
              ])
            ]),
            createVNode("tbody", null, [
              createVNode("tr", null, [
                createVNode("td", null, "NEW"),
                createVNode("td", null, "\u5DF2\u4FDD\u5B58\u672A\u63D0\u4EA4"),
                createVNode("td", null, "\u7F16\u8F91\u3001\u4FDD\u5B58\u3001\u63D0\u4EA4\u3001\u5220\u9664")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "RUN"),
                createVNode("td", null, "OA\u5BA1\u6279\u4E2D"),
                createVNode("td", null, "\u65E0\uFF08\u7B49\u5F85\u5BA1\u6279\u7ED3\u679C\uFF09")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "APPROVED"),
                createVNode("td", null, "OA\u5BA1\u6279\u901A\u8FC7"),
                createVNode("td", null, "\u67E5\u770B\u3001\u5F52\u6863\u3001\u53D8\u66F4")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "REJECTED"),
                createVNode("td", null, "OA\u5BA1\u6279\u62D2\u7EDD"),
                createVNode("td", null, "\u4FEE\u6539\u3001\u91CD\u65B0\u63D0\u4EA4")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "ARCHIVED"),
                createVNode("td", null, "\u5DF2\u5F52\u6863"),
                createVNode("td", null, "\u67E5\u770B")
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, { title: "\u88681\uFF1ASA_SALE_CONTRACT_HEAD\uFF08\u5E74\u5EA6\u7ECF\u9500\u5408\u540C\u5934\u8868\uFF09" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5B57\u6BB5\u540D</th><th${_scopeId}>\u7C7B\u578B</th><th${_scopeId}>\u91CA\u4E49</th><th${_scopeId}>\u5BF9\u5E94\u754C\u9762\u5B57\u6BB5</th><th${_scopeId}>\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>SALE_CONTRACT_HEAD_ID</td><td${_scopeId}>BIGINT</td><td${_scopeId}>\u4E3B\u952EID</td><td${_scopeId}>\u5408\u540CID</td><td${_scopeId}>\u81EA\u589E\u4E3B\u952E</td></tr><tr${_scopeId}><td${_scopeId}>CONTRACT_NO</td><td${_scopeId}>VARCHAR</td><td${_scopeId}>\u5408\u540C\u7F16\u53F7</td><td${_scopeId}>\u5408\u540C\u7F16\u53F7</td><td${_scopeId}>\u81EA\u52A8\u751F\u6210</td></tr><tr${_scopeId}><td${_scopeId}>CUSTOMER_ID</td><td${_scopeId}>BIGINT</td><td${_scopeId}>\u7ECF\u9500\u5546ID</td><td${_scopeId}>-</td><td${_scopeId}>\u9009\u62E9\u7ECF\u9500\u5546\u5E26\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>CUSTOMER_NAME</td><td${_scopeId}>VARCHAR</td><td${_scopeId}>\u7ECF\u9500\u5546\u540D\u79F0</td><td${_scopeId}>\u7ECF\u9500\u5546</td><td${_scopeId}>\u9009\u62E9\u7ECF\u9500\u5546\u5E26\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>CONTRACT_YEAR</td><td${_scopeId}>VARCHAR</td><td${_scopeId}>\u5408\u540C\u5E74\u5EA6</td><td${_scopeId}>\u5408\u540C\u5E74\u5EA6</td><td${_scopeId}>\u624B\u52A8\u9009\u62E9</td></tr><tr${_scopeId}><td${_scopeId}>ENTID</td><td${_scopeId}>BIGINT</td><td${_scopeId}>\u4E8B\u4E1A\u90E8ID</td><td${_scopeId}>-</td><td${_scopeId}>\u9009\u62E9\u4E8B\u4E1A\u90E8\u5E26\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>ENTNAME</td><td${_scopeId}>VARCHAR</td><td${_scopeId}>\u4E8B\u4E1A\u90E8\u540D\u79F0</td><td${_scopeId}>\u4E8B\u4E1A\u90E8</td><td${_scopeId}>\u9009\u62E9\u4E8B\u4E1A\u90E8\u5E26\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>TRADING_COMPANY_NAME</td><td${_scopeId}>VARCHAR</td><td${_scopeId}>\u4EA4\u6613\u516C\u53F8\u540D\u79F0</td><td${_scopeId}>\u4EA4\u6613\u516C\u53F8</td><td${_scopeId}>\u9009\u62E9\u4EA4\u6613\u516C\u53F8\u5E26\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>HZ_APPROVE_STATUS</td><td${_scopeId}>VARCHAR</td><td${_scopeId}>H0\u6D41\u7A0B\u5BA1\u6279\u72B6\u6001</td><td${_scopeId}>H0\u6D41\u7A0B\u5BA1\u6279\u72B6\u6001</td><td${_scopeId}>\u6D41\u7A0B\u56DE\u8C03\u66F4\u65B0</td></tr><tr${_scopeId}><td${_scopeId}>STATE_PIGEONHOLE</td><td${_scopeId}>VARCHAR</td><td${_scopeId}>\u5408\u540C\u5F52\u6863\u72B6\u6001</td><td${_scopeId}>\u5F52\u6863\u72B6\u6001</td><td${_scopeId}>\u5F52\u6863\u540E\u66F4\u65B0</td></tr><tr${_scopeId}><td${_scopeId}>PIGEONHOLE_DATE</td><td${_scopeId}>DATE</td><td${_scopeId}>\u5E94\u5F52\u6863\u65F6\u95F4</td><td${_scopeId}>-</td><td${_scopeId}>\u7CFB\u7EDF\u5E26\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>ACTUAL_PIGEONHOLE_DATE</td><td${_scopeId}>DATE</td><td${_scopeId}>\u5B9E\u9645\u5F52\u6863\u65F6\u95F4</td><td${_scopeId}>-</td><td${_scopeId}>\u5F52\u6863\u540E\u66F4\u65B0</td></tr><tr${_scopeId}><td${_scopeId}>PIGEONHOLE_BY</td><td${_scopeId}>VARCHAR</td><td${_scopeId}>\u5F52\u6863\u4EBA</td><td${_scopeId}>-</td><td${_scopeId}>\u5F52\u6863\u540E\u66F4\u65B0</td></tr></tbody></table>`);
      } else {
        return [
          createVNode("table", { class: "kb-field-tbl" }, [
            createVNode("thead", null, [
              createVNode("tr", null, [
                createVNode("th", null, "\u5B57\u6BB5\u540D"),
                createVNode("th", null, "\u7C7B\u578B"),
                createVNode("th", null, "\u91CA\u4E49"),
                createVNode("th", null, "\u5BF9\u5E94\u754C\u9762\u5B57\u6BB5"),
                createVNode("th", null, "\u903B\u8F91")
              ])
            ]),
            createVNode("tbody", null, [
              createVNode("tr", null, [
                createVNode("td", null, "SALE_CONTRACT_HEAD_ID"),
                createVNode("td", null, "BIGINT"),
                createVNode("td", null, "\u4E3B\u952EID"),
                createVNode("td", null, "\u5408\u540CID"),
                createVNode("td", null, "\u81EA\u589E\u4E3B\u952E")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "CONTRACT_NO"),
                createVNode("td", null, "VARCHAR"),
                createVNode("td", null, "\u5408\u540C\u7F16\u53F7"),
                createVNode("td", null, "\u5408\u540C\u7F16\u53F7"),
                createVNode("td", null, "\u81EA\u52A8\u751F\u6210")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "CUSTOMER_ID"),
                createVNode("td", null, "BIGINT"),
                createVNode("td", null, "\u7ECF\u9500\u5546ID"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u9009\u62E9\u7ECF\u9500\u5546\u5E26\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "CUSTOMER_NAME"),
                createVNode("td", null, "VARCHAR"),
                createVNode("td", null, "\u7ECF\u9500\u5546\u540D\u79F0"),
                createVNode("td", null, "\u7ECF\u9500\u5546"),
                createVNode("td", null, "\u9009\u62E9\u7ECF\u9500\u5546\u5E26\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "CONTRACT_YEAR"),
                createVNode("td", null, "VARCHAR"),
                createVNode("td", null, "\u5408\u540C\u5E74\u5EA6"),
                createVNode("td", null, "\u5408\u540C\u5E74\u5EA6"),
                createVNode("td", null, "\u624B\u52A8\u9009\u62E9")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "ENTID"),
                createVNode("td", null, "BIGINT"),
                createVNode("td", null, "\u4E8B\u4E1A\u90E8ID"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u9009\u62E9\u4E8B\u4E1A\u90E8\u5E26\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "ENTNAME"),
                createVNode("td", null, "VARCHAR"),
                createVNode("td", null, "\u4E8B\u4E1A\u90E8\u540D\u79F0"),
                createVNode("td", null, "\u4E8B\u4E1A\u90E8"),
                createVNode("td", null, "\u9009\u62E9\u4E8B\u4E1A\u90E8\u5E26\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "TRADING_COMPANY_NAME"),
                createVNode("td", null, "VARCHAR"),
                createVNode("td", null, "\u4EA4\u6613\u516C\u53F8\u540D\u79F0"),
                createVNode("td", null, "\u4EA4\u6613\u516C\u53F8"),
                createVNode("td", null, "\u9009\u62E9\u4EA4\u6613\u516C\u53F8\u5E26\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "HZ_APPROVE_STATUS"),
                createVNode("td", null, "VARCHAR"),
                createVNode("td", null, "H0\u6D41\u7A0B\u5BA1\u6279\u72B6\u6001"),
                createVNode("td", null, "H0\u6D41\u7A0B\u5BA1\u6279\u72B6\u6001"),
                createVNode("td", null, "\u6D41\u7A0B\u56DE\u8C03\u66F4\u65B0")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "STATE_PIGEONHOLE"),
                createVNode("td", null, "VARCHAR"),
                createVNode("td", null, "\u5408\u540C\u5F52\u6863\u72B6\u6001"),
                createVNode("td", null, "\u5F52\u6863\u72B6\u6001"),
                createVNode("td", null, "\u5F52\u6863\u540E\u66F4\u65B0")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "PIGEONHOLE_DATE"),
                createVNode("td", null, "DATE"),
                createVNode("td", null, "\u5E94\u5F52\u6863\u65F6\u95F4"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u7CFB\u7EDF\u5E26\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "ACTUAL_PIGEONHOLE_DATE"),
                createVNode("td", null, "DATE"),
                createVNode("td", null, "\u5B9E\u9645\u5F52\u6863\u65F6\u95F4"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u5F52\u6863\u540E\u66F4\u65B0")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "PIGEONHOLE_BY"),
                createVNode("td", null, "VARCHAR"),
                createVNode("td", null, "\u5F52\u6863\u4EBA"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u5F52\u6863\u540E\u66F4\u65B0")
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div><div id="faq" style="${ssrRenderStyle({ "display": "none" })}"><div class="tab-pad"><div class="kl-wrap">`);
  _push(ssrRenderComponent(_component_KbCard, { title: "\u62A5\u9519\u4E00\u89C8\u8868" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u62A5\u9519\u4FE1\u606F</th><th${_scopeId}>\u63D0\u793A\u8282\u70B9</th><th${_scopeId}>\u6839\u56E0\u4E0E\u89E3\u51B3\u65B9\u6848</th><th${_scopeId}>\u7B49\u7EA7</th><th${_scopeId}>\u8BE6\u7EC6\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u7ECF\u9500\u5546\u4E0D\u80FD\u4E3A\u7A7A</td><td${_scopeId}>\u4FDD\u5B58\u65F6</td><td${_scopeId}>\u672A\u9009\u62E9\u7ECF\u9500\u5546</td><td${_scopeId}>toast\u63D0\u9192</td><td${_scopeId}>[\u67E5\u770B]</td></tr><tr${_scopeId}><td${_scopeId}>\u533A\u57DF\u6821\u9A8C\u5931\u8D25</td><td${_scopeId}>\u63D0\u4EA4\u65F6</td><td${_scopeId}>\u7ECF\u9500\u5546\u5728\u9009\u5B9A\u533A\u57DF\u4E0D\u5408\u6CD5\uFF0C\u91CD\u65B0\u9009\u62E9\u533A\u57DF</td><td${_scopeId}>\u963B\u65AD\u6027\u62A5\u9519</td><td${_scopeId}>[\u67E5\u770B]</td></tr><tr${_scopeId}><td${_scopeId}>\u6D41\u7A0B\u7F16\u7801\u7F3A\u5931\uFF0C\u8BF7\u9009\u62E9\u6D41\u7A0B</td><td${_scopeId}>\u63D0\u4EA4\u65F6</td><td${_scopeId}>OA\u6D41\u7A0B\u7F16\u7801\u672A\u914D\u7F6E</td><td${_scopeId}>\u963B\u65AD\u6027\u62A5\u9519</td><td${_scopeId}>[\u67E5\u770B]</td></tr><tr${_scopeId}><td${_scopeId}>\u5408\u540CID\u4E3A\u7A7A\uFF0C\u8BF7\u68C0\u67E5</td><td${_scopeId}>\u4FDD\u5B58/\u63D0\u4EA4\u65F6</td><td${_scopeId}>\u5408\u540CID\u53C2\u6570\u4E22\u5931</td><td${_scopeId}>toast\u63D0\u9192</td><td${_scopeId}>[\u67E5\u770B]</td></tr><tr${_scopeId}><td${_scopeId}>\u5F53\u524D\u5408\u540C\u6709\u6548\u7ED3\u675F\u65F6\u95F4\u5C0F\u4E8E\u5F53\u524D\u65F6\u95F4\uFF0C\u4E0D\u5141\u8BB8\u65B0\u5EFA</td><td${_scopeId}>\u4FDD\u5B58\u65F6</td><td${_scopeId}>\u5408\u540C\u7ED3\u675F\u65E5\u671F\u5DF2\u8FC7\u671F</td><td${_scopeId}>toast\u63D0\u9192</td><td${_scopeId}>[\u67E5\u770B]</td></tr><tr${_scopeId}><td${_scopeId}>\u5408\u540C\u6709\u6548\u5F00\u59CB\u65F6\u95F4\u5FC5\u987B\u5C0F\u4E8E\u7B49\u4E8E\u7ED3\u675F\u65F6\u95F4</td><td${_scopeId}>\u4FDD\u5B58\u65F6</td><td${_scopeId}>\u5F00\u59CB\u65E5\u671F\u5927\u4E8E\u7ED3\u675F\u65E5\u671F</td><td${_scopeId}>toast\u63D0\u9192</td><td${_scopeId}>[\u67E5\u770B]</td></tr><tr${_scopeId}><td${_scopeId}>\u5408\u540C\u5F00\u59CB\u65E5\u671F\u987B\u4E3A\u6708\u5EA6\u7B2C\u4E00\u5929</td><td${_scopeId}>\u4FDD\u5B58\u65F6</td><td${_scopeId}>\u5F00\u59CB\u65E5\u671F\u975E\u6708\u521D</td><td${_scopeId}>toast\u63D0\u9192</td><td${_scopeId}>[\u67E5\u770B]</td></tr><tr${_scopeId}><td${_scopeId}>\u6CD5\u4EBA\u7F16\u7801\u4E0D\u5B58\u5728</td><td${_scopeId}>\u4FDD\u5B58\u65F6</td><td${_scopeId}>\u7ECF\u9500\u5546\u6CD5\u4EBA\u7F16\u7801\u4E3B\u6570\u636E\u7F3A\u5931</td><td${_scopeId}>toast\u63D0\u9192</td><td${_scopeId}>[\u67E5\u770B]</td></tr><tr${_scopeId}><td${_scopeId}>\u5173\u8054\u5408\u540C\u4E0D\u5B58\u5728\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5</td><td${_scopeId}>\u4FDD\u5B58\u65F6</td><td${_scopeId}>\u5173\u8054\u7684\u6BCD\u5408\u540C\u4E0D\u5B58\u5728</td><td${_scopeId}>toast\u63D0\u9192</td><td${_scopeId}>[\u67E5\u770B]</td></tr><tr${_scopeId}><td${_scopeId}>\u63D0\u524D\u7ED3\u675F\u5408\u540C\uFF0C\u5FC5\u987B\u4E3A\u5408\u540C\u7ED3\u675F\u65E5\u671F\u524D\u81F3\u5C11\u4E00\u6574\u6708</td><td${_scopeId}>\u4FDD\u5B58\u65F6</td><td${_scopeId}>\u63D0\u524D\u7ED3\u675F\u65E5\u671F\u4E0D\u6EE1\u8DB3\u6574\u6708\u8981\u6C42</td><td${_scopeId}>toast\u63D0\u9192</td><td${_scopeId}>[\u67E5\u770B]</td></tr><tr${_scopeId}><td${_scopeId}>\u5F53\u524D\u5DF2\u5B58\u5728\u540C\u7C7B\u578B\u7ECF\u9500\u5408\u540C\uFF0C\u65E0\u6CD5\u518D\u7B7E\u8BA2</td><td${_scopeId}>\u4FDD\u5B58\u65F6</td><td${_scopeId}>\u7ECF\u9500\u671F\u9650\u5185\u5DF2\u5B58\u5728\u540C\u7C7B\u578B\u5408\u540C</td><td${_scopeId}>\u963B\u65AD\u6027\u62A5\u9519</td><td${_scopeId}>[\u67E5\u770B]</td></tr><tr${_scopeId}><td${_scopeId}>\u672A\u80FD\u83B7\u53D6\u5408\u540C\u4FDD\u8BC1\u91D1\u6807\u51C6\uFF0C\u4E0D\u80FD\u521B\u5EFA\u5408\u540C</td><td${_scopeId}>\u4FDD\u5B58\u65F6</td><td${_scopeId}>\u4FDD\u8BC1\u91D1\u6807\u51C6\u672A\u914D\u7F6E</td><td${_scopeId}>\u963B\u65AD\u6027\u62A5\u9519</td><td${_scopeId}>[\u67E5\u770B]</td></tr><tr${_scopeId}><td${_scopeId}>\u672A\u914D\u7F6E\u7ECF\u9500\u5408\u540C\u5EF6\u671F\u5F52\u6863\u5929\u6570\uFF0C\u8BF7\u8054\u7CFB\u7BA1\u7406\u5458</td><td${_scopeId}>\u5F52\u6863\u65F6</td><td${_scopeId}>\u7CFB\u7EDF\u53C2\u6570\u672A\u914D\u7F6E</td><td${_scopeId}>toast\u63D0\u9192</td><td${_scopeId}>[\u67E5\u770B]</td></tr><tr${_scopeId}><td${_scopeId}>\u8BE5\u5408\u540C\u5E94\u5F52\u6863\u65E5\u671F\u4E3A\u7A7A\uFF0C\u8BF7\u8054\u7CFB\u7BA1\u7406\u5458</td><td${_scopeId}>\u5F52\u6863\u65F6</td><td${_scopeId}>\u5408\u540C\u5E94\u5F52\u6863\u65E5\u671F\u7F3A\u5931</td><td${_scopeId}>toast\u63D0\u9192</td><td${_scopeId}>[\u67E5\u770B]</td></tr><tr${_scopeId}><td${_scopeId}>\u7ECF\u9500\u5546\u7F16\u7801\u4E0D\u80FD\u4E3A\u7A7A</td><td${_scopeId}>\u6821\u9A8C\u65F6</td><td${_scopeId}>\u7ECF\u9500\u5546\u7F16\u7801\u53C2\u6570\u7F3A\u5931</td><td${_scopeId}>toast\u63D0\u9192</td><td${_scopeId}>[\u67E5\u770B]</td></tr><tr${_scopeId}><td${_scopeId}>\u7F51\u7EDC\u8BF7\u6C42\u5931\u8D25</td><td${_scopeId}>\u5168\u5C40</td><td${_scopeId}>\u540E\u7AEF\u670D\u52A1\u4E0D\u53EF\u8FBE\u6216\u8D85\u65F6</td><td${_scopeId}>toast\u63D0\u9192</td><td${_scopeId}>[\u67E5\u770B]</td></tr><tr${_scopeId}><td${_scopeId}>\u6743\u9650\u4E0D\u8DB3\uFF0C\u65E0\u6CD5\u64CD\u4F5C</td><td${_scopeId}>\u5168\u5C40</td><td${_scopeId}>\u5F53\u524D\u7528\u6237\u65E0\u5BF9\u5E94\u64CD\u4F5C\u6743\u9650</td><td${_scopeId}>toast\u63D0\u9192</td><td${_scopeId}>[\u67E5\u770B]</td></tr></tbody></table><h4${_scopeId}>\u62A5\u95191\uFF1A\u7ECF\u9500\u5546\u4E0D\u80FD\u4E3A\u7A7A</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u7528\u6237\u5728\u65B0\u5EFA/\u7F16\u8F91\u9875\u672A\u9009\u62E9\u7ECF\u9500\u5546\u76F4\u63A5\u70B9\u51FB\u4FDD\u5B58</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u4FDD\u5B58\u63A5\u53E3sa-sale-contract-heads/save\u5728\u5199\u5165SA_SALE_CONTRACT_HEAD\u524D\u6821\u9A8CCUSTOMER_ID\u975E\u7A7A\u3002\u7ECF\u9500\u5546\u662F\u5E74\u5EA6\u7ECF\u9500\u5408\u540C\u7684\u6838\u5FC3\u4E3B\u4F53\uFF0C\u672A\u9009\u62E9\u7ECF\u9500\u5546\u5C06\u5BFC\u81F4\u540E\u7EED\u4EA4\u6613\u516C\u53F8\u3001\u4E8B\u4E1A\u90E8\u3001\u9500\u552E\u533A\u57DF\u65E0\u6CD5\u5E26\u51FA\uFF0C\u5408\u540C\u4EFB\u52A1\u62C6\u5206\u548C\u4FDD\u8BC1\u91D1\u5173\u8054\u4E5F\u65E0\u4ECE\u6267\u884C\u3002\u6821\u9A8C\u5728Controller\u5C42\u524D\u7F6E\u62E6\u622A\uFF0Ctoast\u63D0\u793A\u540E\u963B\u65AD\u4FDD\u5B58</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> SALE_CONTRACT_HEAD_ID, CONTRACT_NO, CUSTOMER_ID, CUSTOMER_NAME,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         CONTRACT_YEAR, HZ_APPROVE_STATUS</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> SA_SALE_CONTRACT_HEAD</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> CUSTOMER_ID </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>OR</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> CUSTOMER_NAME </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95192\uFF1A\u533A\u57DF\u6821\u9A8C\u5931\u8D25</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u7528\u6237\u70B9\u51FB&quot;\u4FDD\u5B58\u5E76\u63D0\u4EA4&quot;\uFF0CworkFlowStartValid\u65B9\u6CD5\u8C03\u7528doCheckAreaNew/doCheckArea\u6821\u9A8C\u533A\u57DF\u4E0D\u901A\u8FC7</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u63D0\u4EA4\u524D\u901A\u8FC7doCheckAreaNew/doCheckArea\u65B9\u6CD5\u6821\u9A8C\u7ECF\u9500\u5546\u5728\u9009\u5B9A\u9500\u552E\u533A\u57DF\uFF08SALE_AREA\uFF09\u5185\u7684\u5408\u6CD5\u6027\uFF0C\u786E\u4FDD\u5408\u540C\u6388\u6743\u533A\u57DF\u4E0E\u7ECF\u9500\u5546\u5B9E\u9645\u6388\u6743\u533A\u57DF\u4E00\u81F4\u3002\u6821\u9A8C\u5931\u8D25\u6839\u56E0\u6709\u4E09\u7C7B\uFF1A(1)\u7ECF\u9500\u5546\u5728\u9009\u5B9A\u533A\u57DF\u65E0\u9500\u552E\u6388\u6743\uFF08\u7ECF\u9500\u5546\u4E3B\u6570\u636E\u4E2D\u672A\u914D\u7F6E\u8BE5\u533A\u57DF\uFF09\uFF1B(2)\u5408\u540C\u9500\u552E\u533A\u57DF\u4E0E\u7ECF\u9500\u5546\u6388\u6743\u533A\u57DF\u4E0D\u5339\u914D\uFF1B(3)\u533A\u57DF\u6570\u636E\u672A\u7EF4\u62A4\u6216\u5DF2\u5931\u6548\u3002\u6B64\u4E3A\u963B\u65AD\u6027\u62A5\u9519\uFF0C\u963B\u6B62OA\u6D41\u7A0B\uFF08DISTRIBUTION_CONTRACT_DKHB\uFF09\u53D1\u8D77\uFF0C\u9700\u91CD\u65B0\u9009\u62E9\u533A\u57DF\u6216\u8054\u7CFB\u4E3B\u6570\u636E\u7EF4\u62A4\u7ECF\u9500\u5546\u6388\u6743\u533A\u57DF</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> S.SALE_CONTRACT_HEAD_ID, S.CONTRACT_NO, S.CUSTOMER_NAME, S.SALE_AREA, S.HZ_APPROVE_STATUS</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> SA_SALE_CONTRACT_HEAD S</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> S.SALE_CONTRACT_HEAD_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> #{id}</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> S.HZ_APPROVE_STATUS </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>NEW</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>RUN</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>);</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- \u6838\u67E5\u7ECF\u9500\u5546\u6388\u6743\u533A\u57DF\uFF08\u7ECF\u9500\u5546\u4E3B\u6570\u636E\uFF0C\u5177\u4F53\u8868\u540D\u4EE5\u4E3B\u6570\u636E\u4E3A\u51C6\uFF09</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> CUSTOMER_CODE, CUSTOMER_NAME, SALE_AREA, </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ENABLED</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> CUSTOMER_SALE_AREA</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> CUSTOMER_CODE </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> #{customerCode};</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95193\uFF1A\u6D41\u7A0B\u7F16\u7801\u7F3A\u5931\uFF0C\u8BF7\u9009\u62E9\u6D41\u7A0B</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u7528\u6237\u70B9\u51FB&quot;\u4FDD\u5B58\u5E76\u63D0\u4EA4&quot;\uFF0CworkFlowStartValid\u65B9\u6CD5\u6821\u9A8COA\u6D41\u7A0B\u7F16\u7801\u4E3A\u7A7A</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u5E74\u5EA6\u7ECF\u9500\u5408\u540C\u63D0\u4EA4\u9700\u53D1\u8D77OA\u5BA1\u6279\u6D41\u7A0B\uFF08DISTRIBUTION_CONTRACT_DKHB\uFF09\u3002SaSaleContractHeadServiceImpl\u5728saveAndSubmit\u4E2D\u6821\u9A8C\u6D41\u7A0B\u7F16\u7801\u975E\u7A7A\uFF0C\u6D41\u7A0B\u7F16\u7801\u7F3A\u5931\u5C06\u5BFC\u81F4OA\u6D41\u7A0B\u65E0\u6CD5\u542F\u52A8\u3002\u6839\u56E0\u6709\u4E8C\uFF1A(1)\u7CFB\u7EDF\u672A\u914D\u7F6EDISTRIBUTION_CONTRACT_DKHB\u6D41\u7A0B\u7F16\u7801\uFF1B(2)\u5408\u540C\u7C7B\u578B\u672A\u5173\u8054\u5BF9\u5E94\u6D41\u7A0B\u7F16\u7801\u3002\u9700\u5728\u6D41\u7A0B\u914D\u7F6E\u4E2D\u7EF4\u62A4\u5BF9\u5E94\u5173\u7CFB</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> SALE_CONTRACT_HEAD_ID, CONTRACT_NO, CONTRACT_TYPE, HZ_APPROVE_STATUS</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> SA_SALE_CONTRACT_HEAD</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> SALE_CONTRACT_HEAD_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> #{id}</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> HZ_APPROVE_STATUS </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>NEW</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95194\uFF1A\u5408\u540CID\u4E3A\u7A7A\uFF0C\u8BF7\u68C0\u67E5</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u7528\u6237\u7F16\u8F91\u6216\u63D0\u4EA4\u5408\u540C\u65F6\uFF0CSALE_CONTRACT_HEAD_ID\u53C2\u6570\u4E3A\u7A7A</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1ASaSaleContractHeadServiceImpl\u5728\u66F4\u65B0\u3001\u63D0\u4EA4\u3001\u5F52\u6863\u7B49\u64CD\u4F5C\u524D\u6821\u9A8C\u5408\u540CID\u975E\u7A7A\u3002\u5408\u540CID\u662F\u4E3B\u952E\uFF0C\u7F3A\u5931\u5C06\u5BFC\u81F4\u65E0\u6CD5\u5B9A\u4F4D\u5408\u540C\u8BB0\u5F55\uFF0C\u540E\u7EED\u6240\u6709\u64CD\u4F5C\u5747\u65E0\u6CD5\u6267\u884C\u3002\u901A\u5E38\u7531\u524D\u7AEF\u672A\u6B63\u786E\u4F20\u5165\u9009\u4E2D\u8BB0\u5F55ID\u5BFC\u81F4</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> SALE_CONTRACT_HEAD_ID, CONTRACT_NO, HZ_APPROVE_STATUS</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> SA_SALE_CONTRACT_HEAD</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> SALE_CONTRACT_HEAD_ID </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>OR</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> SALE_CONTRACT_HEAD_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>0</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95195\uFF1A\u5F53\u524D\u5408\u540C\u6709\u6548\u7ED3\u675F\u65F6\u95F4\u5C0F\u4E8E\u5F53\u524D\u65F6\u95F4\uFF0C\u4E0D\u5141\u8BB8\u65B0\u5EFA</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u7528\u6237\u65B0\u5EFA\u5408\u540C\u65F6\uFF0C\u586B\u5199\u7684\u5408\u540C\u7ED3\u675F\u65E5\u671F\u5C0F\u4E8E\u5F53\u524D\u7CFB\u7EDF\u65E5\u671F</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1ASaSaleContractHeadServiceImpl\u6821\u9A8C\u5408\u540C\u7ED3\u675F\u65E5\u671F\uFF08END_DATE\uFF09\u5FC5\u987B\u5927\u4E8E\u7B49\u4E8E\u5F53\u524D\u65E5\u671F\u3002\u7ED3\u675F\u65E5\u671F\u5DF2\u8FC7\u671F\u610F\u5473\u7740\u5408\u540C\u751F\u6548\u5373\u5931\u6548\uFF0C\u65E0\u4E1A\u52A1\u610F\u4E49\u3002\u6821\u9A8C\u5728\u4FDD\u5B58\u524D\u62E6\u622A\uFF0Ctoast\u63D0\u793A\u540E\u963B\u65AD\u4FDD\u5B58\u3002\u9700\u4FEE\u6539\u5408\u540C\u7ED3\u675F\u65E5\u671F\u4E3A\u672A\u6765\u65E5\u671F</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> SALE_CONTRACT_HEAD_ID, CONTRACT_NO, </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>START_DATE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>, END_DATE,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         HZ_APPROVE_STATUS, </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>SYSDATE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5F53\u524D\u65E5\u671F</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> SA_SALE_CONTRACT_HEAD</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> END_DATE </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&lt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>SYSDATE</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> HZ_APPROVE_STATUS </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>NEW</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95196\uFF1A\u5408\u540C\u6709\u6548\u5F00\u59CB\u65F6\u95F4\u5FC5\u987B\u5C0F\u4E8E\u7B49\u4E8E\u7ED3\u675F\u65F6\u95F4</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u7528\u6237\u586B\u5199\u7684\u5408\u540C\u5F00\u59CB\u65E5\u671F\u5927\u4E8E\u7ED3\u675F\u65E5\u671F</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1ASaSaleContractHeadServiceImpl\u6821\u9A8CSTART_DATE &lt;= END_DATE\u3002\u5F00\u59CB\u65E5\u671F\u5927\u4E8E\u7ED3\u675F\u65E5\u671F\u8FDD\u53CD\u65F6\u95F4\u903B\u8F91\uFF0C\u5408\u540C\u6709\u6548\u671F\u533A\u95F4\u4E3A\u7A7A\u3002\u6821\u9A8C\u5728\u4FDD\u5B58\u524D\u62E6\u622A\uFF0C\u9700\u91CD\u65B0\u786E\u8BA4\u5408\u540C\u8D77\u6B62\u65E5\u671F</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> SALE_CONTRACT_HEAD_ID, CONTRACT_NO, </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>START_DATE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>, END_DATE, HZ_APPROVE_STATUS</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> SA_SALE_CONTRACT_HEAD</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>START_DATE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> END_DATE;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95197\uFF1A\u5408\u540C\u5F00\u59CB\u65E5\u671F\u987B\u4E3A\u6708\u5EA6\u7B2C\u4E00\u5929</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u7528\u6237\u586B\u5199\u7684\u5408\u540C\u5F00\u59CB\u65E5\u671F\u975E\u6708\u521D\uFF08\u59822026-08-15\uFF09</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1ASaSaleContractHeadServiceImpl\u6821\u9A8C\u5408\u540C\u5F00\u59CB\u65E5\u671F\u5FC5\u987B\u4E3A\u6708\u5EA6\u7B2C\u4E00\u5929\uFF08\u5982yyyy-MM-01\uFF09\u3002\u7ECF\u9500\u5408\u540C\u6309\u6708\u5EA6\u7EF4\u5EA6\u62C6\u5206\u4EFB\u52A1\u548C\u7ED3\u7B97\uFF0C\u975E\u6708\u521D\u5C06\u5BFC\u81F4\u6708\u5EA6\u4EFB\u52A1\u62C6\u5206\u5F02\u5E38\u3002\u6821\u9A8C\u5728\u4FDD\u5B58\u524D\u62E6\u622A\uFF0C\u9700\u5C06\u5F00\u59CB\u65E5\u671F\u8C03\u6574\u4E3A\u6708\u521D</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> SALE_CONTRACT_HEAD_ID, CONTRACT_NO, </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>START_DATE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         EXTRACT(</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}>DAY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>START_DATE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5F00\u59CB\u65E5</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> SA_SALE_CONTRACT_HEAD</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> EXTRACT(</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}>DAY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>START_DATE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>!=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>1</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95198\uFF1A\u6CD5\u4EBA\u7F16\u7801\u4E0D\u5B58\u5728</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u7528\u6237\u9009\u62E9\u7ECF\u9500\u5546\u540E\u4FDD\u5B58\u5408\u540C\uFF0C\u6839\u636E\u7ECF\u9500\u5546\u67E5\u8BE2\u6CD5\u4EBA\u7F16\u7801\u8FD4\u56DE\u7A7A</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1ASaSaleContractHeadServiceImpl\u6839\u636E\u7ECF\u9500\u5546CUSTOMER_ID\u67E5\u8BE2\u6CD5\u4EBA\u4E3B\u6570\u636E\uFF0C\u82E5\u7ECF\u9500\u5546\u672A\u914D\u7F6E\u6CD5\u4EBA\u5173\u8054\u6216\u6CD5\u4EBA\u7F16\u7801\uFF08CORPORATE_CODE\uFF09\u5728\u4E3B\u6570\u636E\u4E2D\u4E0D\u5B58\u5728\uFF0C\u5C06\u629B\u51FA\u6B64\u5F02\u5E38\u3002\u6CD5\u4EBA\u7F16\u7801\u662F\u5408\u540C\u5F52\u6863\u3001CRM\u63A8\u9001\u7684\u5173\u952E\u6807\u8BC6\u3002\u9700\u5728\u7ECF\u9500\u5546\u4E3B\u6570\u636E\u4E2D\u7EF4\u62A4\u6CD5\u4EBA\u5173\u8054</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> S.SALE_CONTRACT_HEAD_ID, S.CONTRACT_NO, S.CUSTOMER_ID, S.CUSTOMER_NAME,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         C.CORPORATE_CODE, C.CORPORATE_NAME</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> SA_SALE_CONTRACT_HEAD S</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>LEFT JOIN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> CUSTOMER C </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ON</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> S.CUSTOMER_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> C.CUSTOMER_ID</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> C.CORPORATE_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95199\uFF1A\u5173\u8054\u5408\u540C\u4E0D\u5B58\u5728\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u7528\u6237\u4FDD\u5B58\u5408\u540C\u65F6\uFF0C\u5173\u8054\u7684\u6BCD\u5408\u540C\u6216\u5173\u8054\u5408\u540C\u5728SA_SALE_CONTRACT_HEAD\u4E2D\u67E5\u8BE2\u4E0D\u5230</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1ASaSaleContractHeadServiceImpl\u6821\u9A8C\u5173\u8054\u5408\u540C\u5B58\u5728\u6027\u3002\u5173\u8054\u5408\u540C\u4E0D\u5B58\u5728\u6839\u56E0\u6709\u4E09\u7C7B\uFF1A(1)\u6BCD\u5408\u540C\u5DF2\u88AB\u5220\u9664\uFF1B(2)\u6BCD\u5408\u540CID\u4F20\u5165\u9519\u8BEF\uFF1B(3)\u6570\u636E\u540C\u6B65\u5EF6\u8FDF\uFF08\u6BCD\u5408\u540C\u5728CRM\u4FA7\u521B\u5EFA\u4F46\u672A\u540C\u6B65\u5230AE\uFF09\u3002\u9700\u786E\u8BA4\u6BCD\u5408\u540C\u5B58\u5728\u4E14\u5DF2\u540C\u6B65</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> S.SALE_CONTRACT_HEAD_ID, S.CONTRACT_NO, S.PARENT_CONTRACT_ID,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         P.CONTRACT_NO </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u6BCD\u5408\u540C\u7F16\u53F7, P.HZ_APPROVE_STATUS </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u6BCD\u5408\u540C\u72B6\u6001</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> SA_SALE_CONTRACT_HEAD S</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>LEFT JOIN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> SA_SALE_CONTRACT_HEAD P </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ON</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> S.PARENT_CONTRACT_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> P.SALE_CONTRACT_HEAD_ID</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> S.PARENT_CONTRACT_ID </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NOT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> P.SALE_CONTRACT_HEAD_ID </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u951910\uFF1A\u63D0\u524D\u7ED3\u675F\u5408\u540C\uFF0C\u5FC5\u987B\u4E3A\u5408\u540C\u7ED3\u675F\u65E5\u671F\u524D\u81F3\u5C11\u4E00\u6574\u6708</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u7528\u6237\u5BF9\u5DF2\u751F\u6548\u5408\u540C\u6267\u884C\u63D0\u524D\u7ED3\u675F\u64CD\u4F5C\uFF0C\u63D0\u524D\u7ED3\u675F\u65E5\u671F\u4E0D\u6EE1\u8DB3\u6574\u6708\u8981\u6C42</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1ASaSaleContractHeadServiceImpl\u6821\u9A8C\u63D0\u524D\u7ED3\u675F\u5408\u540C\u7684\u64CD\u4F5C\uFF0C\u8981\u6C42\u63D0\u524D\u7ED3\u675F\u65E5\u671F\u5FC5\u987B\u5728\u539F\u5408\u540C\u7ED3\u675F\u65E5\u671F\u524D\u81F3\u5C11\u4E00\u6574\u6708\u3002\u6B64\u6821\u9A8C\u786E\u4FDD\u6708\u5EA6\u4EFB\u52A1\u62C6\u5206\u548C\u7ED3\u7B97\u5B8C\u6574\u3002\u9700\u8C03\u6574\u63D0\u524D\u7ED3\u675F\u65E5\u671F\u81F3\u6574\u6708\u524D</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> SALE_CONTRACT_HEAD_ID, CONTRACT_NO, </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>START_DATE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>, END_DATE,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         ACTUAL_END_DATE, HZ_APPROVE_STATUS</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> SA_SALE_CONTRACT_HEAD</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> ACTUAL_END_DATE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NOT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> ADD_MONTHS(ACTUAL_END_DATE, </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>1</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> END_DATE;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u951911\uFF1A\u5F53\u524D\u5DF2\u5B58\u5728\u540C\u7C7B\u578B\u7ECF\u9500\u5408\u540C\uFF0C\u65E0\u6CD5\u518D\u7B7E\u8BA2</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u7528\u6237\u65B0\u5EFA\u5408\u540C\u65F6\uFF0C\u6821\u9A8C\u53D1\u73B0\u5F53\u524D\u7ECF\u9500\u5546\u5728\u7ECF\u9500\u671F\u9650\u5185\u5DF2\u5B58\u5728\u540C\u5408\u540C\u7C7B\u578B\u7684\u6709\u6548\u5408\u540C</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1ASaSaleContractHeadServiceImpl\u6821\u9A8C\u540C\u4E00\u7ECF\u9500\u5546\u5728\u540C\u4E00\u7ECF\u9500\u671F\u9650\u5185\u4E0D\u5141\u8BB8\u7B7E\u8BA2\u540C\u7C7B\u578B\u7684\u591A\u4E2A\u7ECF\u9500\u5408\u540C\u3002\u91CD\u590D\u7B7E\u8BA2\u5C06\u5BFC\u81F4\u4FDD\u8BC1\u91D1\u91CD\u590D\u8BA1\u7B97\u3001\u4EFB\u52A1\u91CD\u590D\u62C6\u5206\u3002\u9700\u8C03\u6574\u5408\u540C\u671F\u9650\u6216\u53D8\u66F4\u5408\u540C\u7C7B\u578B\uFF0C\u6216\u5148\u7EC8\u6B62\u5DF2\u6709\u5408\u540C</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> CUSTOMER_ID, CUSTOMER_NAME, CONTRACT_TYPE, CONTRACT_NO,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>START_DATE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>, END_DATE, HZ_APPROVE_STATUS</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> SA_SALE_CONTRACT_HEAD</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> CUSTOMER_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> #{customerId}</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> CONTRACT_TYPE </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> #{contractType}</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> HZ_APPROVE_STATUS </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>APPROVED</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>START_DATE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&lt;=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> #{newEndDate}</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> END_DATE </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> #{newStartDate};</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u951912\uFF1A\u672A\u80FD\u83B7\u53D6\u5408\u540C\u4FDD\u8BC1\u91D1\u6807\u51C6\uFF0C\u4E0D\u80FD\u521B\u5EFA\u5408\u540C</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u7528\u6237\u65B0\u5EFA\u5408\u540C\u65F6\uFF0C\u6839\u636E\u4E8B\u4E1A\u90E8\u3001\u5408\u540C\u7C7B\u578B\u67E5\u8BE2\u4FDD\u8BC1\u91D1\u6807\u51C6\uFF08CM_DEPOSITS_PAY_STANDARD\uFF09\u8FD4\u56DE\u7A7A</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1ASaSaleContractHeadServiceImpl\u5728\u521B\u5EFA\u5408\u540C\u524D\u67E5\u8BE2\u4FDD\u8BC1\u91D1\u6807\u51C6\uFF0C\u4FDD\u8BC1\u91D1\u6807\u51C6\u662F\u8BA1\u7B97\u5408\u540C\u5E94\u7F34\u4FDD\u8BC1\u91D1\u7684\u4F9D\u636E\u3002\u6807\u51C6\u672A\u914D\u7F6E\u5C06\u5BFC\u81F4\u5408\u540C\u4FDD\u8BC1\u91D1\u91D1\u989D\u65E0\u6CD5\u8BA1\u7B97\u3002\u9700\u5148\u5728\u4FDD\u8BC1\u91D1\u6807\u51C6\u914D\u7F6E\u4E2D\u7EF4\u62A4\u5BF9\u5E94\u4E8B\u4E1A\u90E8\u548C\u5408\u540C\u7C7B\u578B\u7684\u6807\u51C6</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> S.SALE_CONTRACT_HEAD_ID, S.CONTRACT_NO, S.ENTID, S.CONTRACT_TYPE,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         P.PAY_STANDARD_ID, P.STANDARD_AMT</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> SA_SALE_CONTRACT_HEAD S</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>LEFT JOIN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> CM_DEPOSITS_PAY_STANDARD P </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ON</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> S.ENTID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> P.ENTID </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> S.CONTRACT_TYPE </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> P.CONTRACT_TYPE</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> P.PAY_STANDARD_ID </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> S.HZ_APPROVE_STATUS </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>NEW</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u951913\uFF1A\u672A\u914D\u7F6E\u7ECF\u9500\u5408\u540C\u5EF6\u671F\u5F52\u6863\u5929\u6570\uFF0C\u8BF7\u8054\u7CFB\u7BA1\u7406\u5458</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u5408\u540C\u5F52\u6863\u65F6\uFF0C\u7CFB\u7EDF\u53C2\u6570\u4E2D\u672A\u914D\u7F6E\u5EF6\u671F\u5F52\u6863\u5929\u6570</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1ASaSaleContractHeadServiceImpl\u5728\u5F52\u6863\u65F6\u8BFB\u53D6\u7CFB\u7EDF\u53C2\u6570\uFF08\u7ECF\u9500\u5408\u540C\u5EF6\u671F\u5F52\u6863\u5929\u6570\uFF09\uFF0C\u53C2\u6570\u7F3A\u5931\u5C06\u5BFC\u81F4\u65E0\u6CD5\u8BA1\u7B97\u5E94\u5F52\u6863\u65E5\u671F\u3002\u9700\u8054\u7CFB\u7BA1\u7406\u5458\u5728\u7CFB\u7EDF\u53C2\u6570\u4E2D\u914D\u7F6E</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> PARAM_CODE, PARAM_NAME, PARAM_VALUE</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> SYS_PARAM</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> PARAM_CODE </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>SALE_CONTRACT_DELAY_PIGEONHOLE_DAYS</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u951914\uFF1A\u8BE5\u5408\u540C\u5E94\u5F52\u6863\u65E5\u671F\u4E3A\u7A7A\uFF0C\u8BF7\u8054\u7CFB\u7BA1\u7406\u5458</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u5408\u540C\u5F52\u6863\u65F6\uFF0CPIGEONHOLE_DATE\uFF08\u5E94\u5F52\u6863\u65F6\u95F4\uFF09\u5B57\u6BB5\u4E3A\u7A7A</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1ASaSaleContractHeadServiceImpl\u6821\u9A8C\u5408\u540C\u5E94\u5F52\u6863\u65E5\u671F\u975E\u7A7A\u3002\u5E94\u5F52\u6863\u65E5\u671F\u7531\u5408\u540C\u5BA1\u6279\u901A\u8FC7\u65F6\u95F4\u52A0\u5EF6\u671F\u5F52\u6863\u5929\u6570\u8BA1\u7B97\u5F97\u51FA\uFF0C\u4E3A\u7A7A\u5C06\u5BFC\u81F4\u5F52\u6863\u6D41\u7A0B\u65E0\u6CD5\u5224\u65AD\u5F52\u6863\u65F6\u673A\u3002\u9700\u8054\u7CFB\u7BA1\u7406\u5458\u8865\u5145\u5E94\u5F52\u6863\u65E5\u671F</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> SALE_CONTRACT_HEAD_ID, CONTRACT_NO, HZ_APPROVE_STATUS,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         PIGEONHOLE_DATE, ACTUAL_PIGEONHOLE_DATE, PIGEONHOLE_BY</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> SA_SALE_CONTRACT_HEAD</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> HZ_APPROVE_STATUS </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>APPROVED</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> PIGEONHOLE_DATE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u951915\uFF1A\u7ECF\u9500\u5546\u7F16\u7801\u4E0D\u80FD\u4E3A\u7A7A</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u6821\u9A8C\u5408\u540C\u6216\u51FA\u5E93\u5355\u65F6\uFF0C\u7ECF\u9500\u5546\u7F16\u7801\uFF08CUSTOMER_CODE\uFF09\u53C2\u6570\u4E3A\u7A7A</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1ASaSaleContractHeadServiceImpl\u5728\u591A\u5904\u6821\u9A8C\u7ECF\u9500\u5546\u7F16\u7801\u975E\u7A7A\u3002\u7ECF\u9500\u5546\u7F16\u7801\u662F\u5173\u8054\u7ECF\u9500\u5546\u4E3B\u6570\u636E\u7684\u5173\u952E\u5B57\u6BB5\uFF0C\u4E3A\u7A7A\u5C06\u5BFC\u81F4\u7ECF\u9500\u5546\u4FE1\u606F\u65E0\u6CD5\u5E26\u51FA\uFF0C\u5408\u540C\u4E0E\u51FA\u5E93\u5355\u5173\u8054\u65E0\u6CD5\u5EFA\u7ACB\u3002\u9700\u524D\u7AEF\u6B63\u786E\u4F20\u5165\u7ECF\u9500\u5546\u7F16\u7801</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> SALE_CONTRACT_HEAD_ID, CONTRACT_NO, CUSTOMER_ID, CUSTOMER_NAME, CUST_CODE</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> SA_SALE_CONTRACT_HEAD</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> CUST_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>OR</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> CUST_CODE </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u951916\uFF1A\u7F51\u7EDC\u8BF7\u6C42\u5931\u8D25</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u524D\u7AEF\u8C03\u7528sa-sale-contract-heads\u76F8\u5173\u63A5\u53E3\u65F6\uFF0C\u540E\u7AEF\u670D\u52A1\u4E0D\u53EF\u8FBE\u6216\u8BF7\u6C42\u8D85\u65F6</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u524D\u7AEF\u901A\u8FC7axios\u8C03\u7528AE_BUSINESS\u670D\u52A1\uFF0C\u7F51\u7EDC\u5F02\u5E38\u3001\u670D\u52A1\u5B95\u673A\u3001\u7F51\u5173\u8D85\u65F6\u5747\u4F1A\u89E6\u53D1\u3002\u524D\u7AEF\u62E6\u622A\u5668\u7EDF\u4E00\u6355\u83B7\u5E76toast\u63D0\u793A\u3002\u9700\u68C0\u67E5AE_BUSINESS\u670D\u52A1\u72B6\u6001\u3001\u7F51\u7EDC\u8FDE\u901A\u6027\u3001\u7F51\u5173\u914D\u7F6E</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>\u7F51\u7EDC\u5C42\u5F02\u5E38\uFF0C\u65E0SQL\u6392\u67E5</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u63D0\u793A </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> DUAL;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u951917\uFF1A\u6743\u9650\u4E0D\u8DB3\uFF0C\u65E0\u6CD5\u64CD\u4F5C</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u5F53\u524D\u7528\u6237\u5BF9\u5408\u540C\u4FDD\u5B58\u3001\u63D0\u4EA4\u3001\u5F52\u6863\u7B49\u64CD\u4F5C\u65E0\u5BF9\u5E94\u529F\u80FD\u6743\u9650\u6216\u6570\u636E\u6743\u9650</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u540E\u7AEF\u901A\u8FC7\u6743\u9650\u6CE8\u89E3\u6821\u9A8C\u7528\u6237\u89D2\u8272\uFF0C\u524D\u7AEF\u901A\u8FC7\u83DC\u5355\u548C\u6309\u94AE\u6743\u9650\u63A7\u5236\u663E\u9690\u3002\u7528\u6237\u65E0\u6743\u9650\u65F6\u540E\u7AEF\u8FD4\u56DE403\uFF0C\u524D\u7AEF\u62E6\u622A\u5668toast\u63D0\u793A\u3002\u9700\u5728\u6743\u9650\u7BA1\u7406\u4E2D\u4E3A\u7528\u6237\u5206\u914D\u5BF9\u5E94\u89D2\u8272</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>\u6743\u9650\u5C42\u5F02\u5E38\uFF0C\u8BF7\u6838\u67E5\u7528\u6237\u89D2\u8272\u914D\u7F6E</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u63D0\u793A </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> DUAL;</span></span>
<span class="line"${_scopeId}></span></code></pre></div>`);
      } else {
        return [
          createVNode("table", { class: "kb-field-tbl" }, [
            createVNode("thead", null, [
              createVNode("tr", null, [
                createVNode("th", null, "\u62A5\u9519\u4FE1\u606F"),
                createVNode("th", null, "\u63D0\u793A\u8282\u70B9"),
                createVNode("th", null, "\u6839\u56E0\u4E0E\u89E3\u51B3\u65B9\u6848"),
                createVNode("th", null, "\u7B49\u7EA7"),
                createVNode("th", null, "\u8BE6\u7EC6\u903B\u8F91")
              ])
            ]),
            createVNode("tbody", null, [
              createVNode("tr", null, [
                createVNode("td", null, "\u7ECF\u9500\u5546\u4E0D\u80FD\u4E3A\u7A7A"),
                createVNode("td", null, "\u4FDD\u5B58\u65F6"),
                createVNode("td", null, "\u672A\u9009\u62E9\u7ECF\u9500\u5546"),
                createVNode("td", null, "toast\u63D0\u9192"),
                createVNode("td", null, "[\u67E5\u770B]")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u533A\u57DF\u6821\u9A8C\u5931\u8D25"),
                createVNode("td", null, "\u63D0\u4EA4\u65F6"),
                createVNode("td", null, "\u7ECF\u9500\u5546\u5728\u9009\u5B9A\u533A\u57DF\u4E0D\u5408\u6CD5\uFF0C\u91CD\u65B0\u9009\u62E9\u533A\u57DF"),
                createVNode("td", null, "\u963B\u65AD\u6027\u62A5\u9519"),
                createVNode("td", null, "[\u67E5\u770B]")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6D41\u7A0B\u7F16\u7801\u7F3A\u5931\uFF0C\u8BF7\u9009\u62E9\u6D41\u7A0B"),
                createVNode("td", null, "\u63D0\u4EA4\u65F6"),
                createVNode("td", null, "OA\u6D41\u7A0B\u7F16\u7801\u672A\u914D\u7F6E"),
                createVNode("td", null, "\u963B\u65AD\u6027\u62A5\u9519"),
                createVNode("td", null, "[\u67E5\u770B]")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5408\u540CID\u4E3A\u7A7A\uFF0C\u8BF7\u68C0\u67E5"),
                createVNode("td", null, "\u4FDD\u5B58/\u63D0\u4EA4\u65F6"),
                createVNode("td", null, "\u5408\u540CID\u53C2\u6570\u4E22\u5931"),
                createVNode("td", null, "toast\u63D0\u9192"),
                createVNode("td", null, "[\u67E5\u770B]")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5F53\u524D\u5408\u540C\u6709\u6548\u7ED3\u675F\u65F6\u95F4\u5C0F\u4E8E\u5F53\u524D\u65F6\u95F4\uFF0C\u4E0D\u5141\u8BB8\u65B0\u5EFA"),
                createVNode("td", null, "\u4FDD\u5B58\u65F6"),
                createVNode("td", null, "\u5408\u540C\u7ED3\u675F\u65E5\u671F\u5DF2\u8FC7\u671F"),
                createVNode("td", null, "toast\u63D0\u9192"),
                createVNode("td", null, "[\u67E5\u770B]")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5408\u540C\u6709\u6548\u5F00\u59CB\u65F6\u95F4\u5FC5\u987B\u5C0F\u4E8E\u7B49\u4E8E\u7ED3\u675F\u65F6\u95F4"),
                createVNode("td", null, "\u4FDD\u5B58\u65F6"),
                createVNode("td", null, "\u5F00\u59CB\u65E5\u671F\u5927\u4E8E\u7ED3\u675F\u65E5\u671F"),
                createVNode("td", null, "toast\u63D0\u9192"),
                createVNode("td", null, "[\u67E5\u770B]")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5408\u540C\u5F00\u59CB\u65E5\u671F\u987B\u4E3A\u6708\u5EA6\u7B2C\u4E00\u5929"),
                createVNode("td", null, "\u4FDD\u5B58\u65F6"),
                createVNode("td", null, "\u5F00\u59CB\u65E5\u671F\u975E\u6708\u521D"),
                createVNode("td", null, "toast\u63D0\u9192"),
                createVNode("td", null, "[\u67E5\u770B]")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6CD5\u4EBA\u7F16\u7801\u4E0D\u5B58\u5728"),
                createVNode("td", null, "\u4FDD\u5B58\u65F6"),
                createVNode("td", null, "\u7ECF\u9500\u5546\u6CD5\u4EBA\u7F16\u7801\u4E3B\u6570\u636E\u7F3A\u5931"),
                createVNode("td", null, "toast\u63D0\u9192"),
                createVNode("td", null, "[\u67E5\u770B]")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5173\u8054\u5408\u540C\u4E0D\u5B58\u5728\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5"),
                createVNode("td", null, "\u4FDD\u5B58\u65F6"),
                createVNode("td", null, "\u5173\u8054\u7684\u6BCD\u5408\u540C\u4E0D\u5B58\u5728"),
                createVNode("td", null, "toast\u63D0\u9192"),
                createVNode("td", null, "[\u67E5\u770B]")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u63D0\u524D\u7ED3\u675F\u5408\u540C\uFF0C\u5FC5\u987B\u4E3A\u5408\u540C\u7ED3\u675F\u65E5\u671F\u524D\u81F3\u5C11\u4E00\u6574\u6708"),
                createVNode("td", null, "\u4FDD\u5B58\u65F6"),
                createVNode("td", null, "\u63D0\u524D\u7ED3\u675F\u65E5\u671F\u4E0D\u6EE1\u8DB3\u6574\u6708\u8981\u6C42"),
                createVNode("td", null, "toast\u63D0\u9192"),
                createVNode("td", null, "[\u67E5\u770B]")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5F53\u524D\u5DF2\u5B58\u5728\u540C\u7C7B\u578B\u7ECF\u9500\u5408\u540C\uFF0C\u65E0\u6CD5\u518D\u7B7E\u8BA2"),
                createVNode("td", null, "\u4FDD\u5B58\u65F6"),
                createVNode("td", null, "\u7ECF\u9500\u671F\u9650\u5185\u5DF2\u5B58\u5728\u540C\u7C7B\u578B\u5408\u540C"),
                createVNode("td", null, "\u963B\u65AD\u6027\u62A5\u9519"),
                createVNode("td", null, "[\u67E5\u770B]")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u672A\u80FD\u83B7\u53D6\u5408\u540C\u4FDD\u8BC1\u91D1\u6807\u51C6\uFF0C\u4E0D\u80FD\u521B\u5EFA\u5408\u540C"),
                createVNode("td", null, "\u4FDD\u5B58\u65F6"),
                createVNode("td", null, "\u4FDD\u8BC1\u91D1\u6807\u51C6\u672A\u914D\u7F6E"),
                createVNode("td", null, "\u963B\u65AD\u6027\u62A5\u9519"),
                createVNode("td", null, "[\u67E5\u770B]")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u672A\u914D\u7F6E\u7ECF\u9500\u5408\u540C\u5EF6\u671F\u5F52\u6863\u5929\u6570\uFF0C\u8BF7\u8054\u7CFB\u7BA1\u7406\u5458"),
                createVNode("td", null, "\u5F52\u6863\u65F6"),
                createVNode("td", null, "\u7CFB\u7EDF\u53C2\u6570\u672A\u914D\u7F6E"),
                createVNode("td", null, "toast\u63D0\u9192"),
                createVNode("td", null, "[\u67E5\u770B]")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u8BE5\u5408\u540C\u5E94\u5F52\u6863\u65E5\u671F\u4E3A\u7A7A\uFF0C\u8BF7\u8054\u7CFB\u7BA1\u7406\u5458"),
                createVNode("td", null, "\u5F52\u6863\u65F6"),
                createVNode("td", null, "\u5408\u540C\u5E94\u5F52\u6863\u65E5\u671F\u7F3A\u5931"),
                createVNode("td", null, "toast\u63D0\u9192"),
                createVNode("td", null, "[\u67E5\u770B]")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7ECF\u9500\u5546\u7F16\u7801\u4E0D\u80FD\u4E3A\u7A7A"),
                createVNode("td", null, "\u6821\u9A8C\u65F6"),
                createVNode("td", null, "\u7ECF\u9500\u5546\u7F16\u7801\u53C2\u6570\u7F3A\u5931"),
                createVNode("td", null, "toast\u63D0\u9192"),
                createVNode("td", null, "[\u67E5\u770B]")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7F51\u7EDC\u8BF7\u6C42\u5931\u8D25"),
                createVNode("td", null, "\u5168\u5C40"),
                createVNode("td", null, "\u540E\u7AEF\u670D\u52A1\u4E0D\u53EF\u8FBE\u6216\u8D85\u65F6"),
                createVNode("td", null, "toast\u63D0\u9192"),
                createVNode("td", null, "[\u67E5\u770B]")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6743\u9650\u4E0D\u8DB3\uFF0C\u65E0\u6CD5\u64CD\u4F5C"),
                createVNode("td", null, "\u5168\u5C40"),
                createVNode("td", null, "\u5F53\u524D\u7528\u6237\u65E0\u5BF9\u5E94\u64CD\u4F5C\u6743\u9650"),
                createVNode("td", null, "toast\u63D0\u9192"),
                createVNode("td", null, "[\u67E5\u770B]")
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95191\uFF1A\u7ECF\u9500\u5546\u4E0D\u80FD\u4E3A\u7A7A"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u7528\u6237\u5728\u65B0\u5EFA/\u7F16\u8F91\u9875\u672A\u9009\u62E9\u7ECF\u9500\u5546\u76F4\u63A5\u70B9\u51FB\u4FDD\u5B58")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u4FDD\u5B58\u63A5\u53E3sa-sale-contract-heads/save\u5728\u5199\u5165SA_SALE_CONTRACT_HEAD\u524D\u6821\u9A8CCUSTOMER_ID\u975E\u7A7A\u3002\u7ECF\u9500\u5546\u662F\u5E74\u5EA6\u7ECF\u9500\u5408\u540C\u7684\u6838\u5FC3\u4E3B\u4F53\uFF0C\u672A\u9009\u62E9\u7ECF\u9500\u5546\u5C06\u5BFC\u81F4\u540E\u7EED\u4EA4\u6613\u516C\u53F8\u3001\u4E8B\u4E1A\u90E8\u3001\u9500\u552E\u533A\u57DF\u65E0\u6CD5\u5E26\u51FA\uFF0C\u5408\u540C\u4EFB\u52A1\u62C6\u5206\u548C\u4FDD\u8BC1\u91D1\u5173\u8054\u4E5F\u65E0\u4ECE\u6267\u884C\u3002\u6821\u9A8C\u5728Controller\u5C42\u524D\u7F6E\u62E6\u622A\uFF0Ctoast\u63D0\u793A\u540E\u963B\u65AD\u4FDD\u5B58")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u6392\u67E5SQL"),
              createTextVNode("\uFF1A")
            ])
          ]),
          createVNode("div", { class: "language-sql" }, [
            createVNode("button", {
              title: "Copy Code",
              class: "copy"
            }),
            createVNode("span", { class: "lang" }, "sql"),
            createVNode("pre", { class: "shiki" }, [
              createVNode("code", null, [
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "SELECT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " SALE_CONTRACT_HEAD_ID, CONTRACT_NO, CUSTOMER_ID, CUSTOMER_NAME,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         CONTRACT_YEAR, HZ_APPROVE_STATUS")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " SA_SALE_CONTRACT_HEAD")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " CUSTOMER_ID "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NULL"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "OR"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " CUSTOMER_NAME "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NULL"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95192\uFF1A\u533A\u57DF\u6821\u9A8C\u5931\u8D25"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode('\uFF1A\u7528\u6237\u70B9\u51FB"\u4FDD\u5B58\u5E76\u63D0\u4EA4"\uFF0CworkFlowStartValid\u65B9\u6CD5\u8C03\u7528doCheckAreaNew/doCheckArea\u6821\u9A8C\u533A\u57DF\u4E0D\u901A\u8FC7')
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u63D0\u4EA4\u524D\u901A\u8FC7doCheckAreaNew/doCheckArea\u65B9\u6CD5\u6821\u9A8C\u7ECF\u9500\u5546\u5728\u9009\u5B9A\u9500\u552E\u533A\u57DF\uFF08SALE_AREA\uFF09\u5185\u7684\u5408\u6CD5\u6027\uFF0C\u786E\u4FDD\u5408\u540C\u6388\u6743\u533A\u57DF\u4E0E\u7ECF\u9500\u5546\u5B9E\u9645\u6388\u6743\u533A\u57DF\u4E00\u81F4\u3002\u6821\u9A8C\u5931\u8D25\u6839\u56E0\u6709\u4E09\u7C7B\uFF1A(1)\u7ECF\u9500\u5546\u5728\u9009\u5B9A\u533A\u57DF\u65E0\u9500\u552E\u6388\u6743\uFF08\u7ECF\u9500\u5546\u4E3B\u6570\u636E\u4E2D\u672A\u914D\u7F6E\u8BE5\u533A\u57DF\uFF09\uFF1B(2)\u5408\u540C\u9500\u552E\u533A\u57DF\u4E0E\u7ECF\u9500\u5546\u6388\u6743\u533A\u57DF\u4E0D\u5339\u914D\uFF1B(3)\u533A\u57DF\u6570\u636E\u672A\u7EF4\u62A4\u6216\u5DF2\u5931\u6548\u3002\u6B64\u4E3A\u963B\u65AD\u6027\u62A5\u9519\uFF0C\u963B\u6B62OA\u6D41\u7A0B\uFF08DISTRIBUTION_CONTRACT_DKHB\uFF09\u53D1\u8D77\uFF0C\u9700\u91CD\u65B0\u9009\u62E9\u533A\u57DF\u6216\u8054\u7CFB\u4E3B\u6570\u636E\u7EF4\u62A4\u7ECF\u9500\u5546\u6388\u6743\u533A\u57DF")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u6392\u67E5SQL"),
              createTextVNode("\uFF1A")
            ])
          ]),
          createVNode("div", { class: "language-sql" }, [
            createVNode("button", {
              title: "Copy Code",
              class: "copy"
            }),
            createVNode("span", { class: "lang" }, "sql"),
            createVNode("pre", { class: "shiki" }, [
              createVNode("code", null, [
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "SELECT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " S.SALE_CONTRACT_HEAD_ID, S.CONTRACT_NO, S.CUSTOMER_NAME, S.SALE_AREA, S.HZ_APPROVE_STATUS")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " SA_SALE_CONTRACT_HEAD S")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " S.SALE_CONTRACT_HEAD_ID "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " #{id}")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " S.HZ_APPROVE_STATUS "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IN"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " ("),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "NEW"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ", "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "RUN"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ");")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#89DDFF" } }, "  "),
                  createVNode("span", { style: { "color": "#676E95" } }, "-- \u6838\u67E5\u7ECF\u9500\u5546\u6388\u6743\u533A\u57DF\uFF08\u7ECF\u9500\u5546\u4E3B\u6570\u636E\uFF0C\u5177\u4F53\u8868\u540D\u4EE5\u4E3B\u6570\u636E\u4E3A\u51C6\uFF09")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "SELECT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " CUSTOMER_CODE, CUSTOMER_NAME, SALE_AREA, "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ENABLED")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " CUSTOMER_SALE_AREA")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " CUSTOMER_CODE "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " #{customerCode};")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95193\uFF1A\u6D41\u7A0B\u7F16\u7801\u7F3A\u5931\uFF0C\u8BF7\u9009\u62E9\u6D41\u7A0B"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode('\uFF1A\u7528\u6237\u70B9\u51FB"\u4FDD\u5B58\u5E76\u63D0\u4EA4"\uFF0CworkFlowStartValid\u65B9\u6CD5\u6821\u9A8COA\u6D41\u7A0B\u7F16\u7801\u4E3A\u7A7A')
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u5E74\u5EA6\u7ECF\u9500\u5408\u540C\u63D0\u4EA4\u9700\u53D1\u8D77OA\u5BA1\u6279\u6D41\u7A0B\uFF08DISTRIBUTION_CONTRACT_DKHB\uFF09\u3002SaSaleContractHeadServiceImpl\u5728saveAndSubmit\u4E2D\u6821\u9A8C\u6D41\u7A0B\u7F16\u7801\u975E\u7A7A\uFF0C\u6D41\u7A0B\u7F16\u7801\u7F3A\u5931\u5C06\u5BFC\u81F4OA\u6D41\u7A0B\u65E0\u6CD5\u542F\u52A8\u3002\u6839\u56E0\u6709\u4E8C\uFF1A(1)\u7CFB\u7EDF\u672A\u914D\u7F6EDISTRIBUTION_CONTRACT_DKHB\u6D41\u7A0B\u7F16\u7801\uFF1B(2)\u5408\u540C\u7C7B\u578B\u672A\u5173\u8054\u5BF9\u5E94\u6D41\u7A0B\u7F16\u7801\u3002\u9700\u5728\u6D41\u7A0B\u914D\u7F6E\u4E2D\u7EF4\u62A4\u5BF9\u5E94\u5173\u7CFB")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u6392\u67E5SQL"),
              createTextVNode("\uFF1A")
            ])
          ]),
          createVNode("div", { class: "language-sql" }, [
            createVNode("button", {
              title: "Copy Code",
              class: "copy"
            }),
            createVNode("span", { class: "lang" }, "sql"),
            createVNode("pre", { class: "shiki" }, [
              createVNode("code", null, [
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "SELECT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " SALE_CONTRACT_HEAD_ID, CONTRACT_NO, CONTRACT_TYPE, HZ_APPROVE_STATUS")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " SA_SALE_CONTRACT_HEAD")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " SALE_CONTRACT_HEAD_ID "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " #{id}")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " HZ_APPROVE_STATUS "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "NEW"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95194\uFF1A\u5408\u540CID\u4E3A\u7A7A\uFF0C\u8BF7\u68C0\u67E5"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u7528\u6237\u7F16\u8F91\u6216\u63D0\u4EA4\u5408\u540C\u65F6\uFF0CSALE_CONTRACT_HEAD_ID\u53C2\u6570\u4E3A\u7A7A")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1ASaSaleContractHeadServiceImpl\u5728\u66F4\u65B0\u3001\u63D0\u4EA4\u3001\u5F52\u6863\u7B49\u64CD\u4F5C\u524D\u6821\u9A8C\u5408\u540CID\u975E\u7A7A\u3002\u5408\u540CID\u662F\u4E3B\u952E\uFF0C\u7F3A\u5931\u5C06\u5BFC\u81F4\u65E0\u6CD5\u5B9A\u4F4D\u5408\u540C\u8BB0\u5F55\uFF0C\u540E\u7EED\u6240\u6709\u64CD\u4F5C\u5747\u65E0\u6CD5\u6267\u884C\u3002\u901A\u5E38\u7531\u524D\u7AEF\u672A\u6B63\u786E\u4F20\u5165\u9009\u4E2D\u8BB0\u5F55ID\u5BFC\u81F4")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u6392\u67E5SQL"),
              createTextVNode("\uFF1A")
            ])
          ]),
          createVNode("div", { class: "language-sql" }, [
            createVNode("button", {
              title: "Copy Code",
              class: "copy"
            }),
            createVNode("span", { class: "lang" }, "sql"),
            createVNode("pre", { class: "shiki" }, [
              createVNode("code", null, [
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "SELECT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " SALE_CONTRACT_HEAD_ID, CONTRACT_NO, HZ_APPROVE_STATUS")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " SA_SALE_CONTRACT_HEAD")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " SALE_CONTRACT_HEAD_ID "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NULL"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "OR"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " SALE_CONTRACT_HEAD_ID "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95195\uFF1A\u5F53\u524D\u5408\u540C\u6709\u6548\u7ED3\u675F\u65F6\u95F4\u5C0F\u4E8E\u5F53\u524D\u65F6\u95F4\uFF0C\u4E0D\u5141\u8BB8\u65B0\u5EFA"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u7528\u6237\u65B0\u5EFA\u5408\u540C\u65F6\uFF0C\u586B\u5199\u7684\u5408\u540C\u7ED3\u675F\u65E5\u671F\u5C0F\u4E8E\u5F53\u524D\u7CFB\u7EDF\u65E5\u671F")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1ASaSaleContractHeadServiceImpl\u6821\u9A8C\u5408\u540C\u7ED3\u675F\u65E5\u671F\uFF08END_DATE\uFF09\u5FC5\u987B\u5927\u4E8E\u7B49\u4E8E\u5F53\u524D\u65E5\u671F\u3002\u7ED3\u675F\u65E5\u671F\u5DF2\u8FC7\u671F\u610F\u5473\u7740\u5408\u540C\u751F\u6548\u5373\u5931\u6548\uFF0C\u65E0\u4E1A\u52A1\u610F\u4E49\u3002\u6821\u9A8C\u5728\u4FDD\u5B58\u524D\u62E6\u622A\uFF0Ctoast\u63D0\u793A\u540E\u963B\u65AD\u4FDD\u5B58\u3002\u9700\u4FEE\u6539\u5408\u540C\u7ED3\u675F\u65E5\u671F\u4E3A\u672A\u6765\u65E5\u671F")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u6392\u67E5SQL"),
              createTextVNode("\uFF1A")
            ])
          ]),
          createVNode("div", { class: "language-sql" }, [
            createVNode("button", {
              title: "Copy Code",
              class: "copy"
            }),
            createVNode("span", { class: "lang" }, "sql"),
            createVNode("pre", { class: "shiki" }, [
              createVNode("code", null, [
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "SELECT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " SALE_CONTRACT_HEAD_ID, CONTRACT_NO, "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "START_DATE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ", END_DATE,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         HZ_APPROVE_STATUS, "),
                  createVNode("span", { style: { "color": "#C792EA" } }, "SYSDATE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5F53\u524D\u65E5\u671F")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " SA_SALE_CONTRACT_HEAD")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " END_DATE "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#C792EA" } }, "SYSDATE")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " HZ_APPROVE_STATUS "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "NEW"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95196\uFF1A\u5408\u540C\u6709\u6548\u5F00\u59CB\u65F6\u95F4\u5FC5\u987B\u5C0F\u4E8E\u7B49\u4E8E\u7ED3\u675F\u65F6\u95F4"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u7528\u6237\u586B\u5199\u7684\u5408\u540C\u5F00\u59CB\u65E5\u671F\u5927\u4E8E\u7ED3\u675F\u65E5\u671F")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1ASaSaleContractHeadServiceImpl\u6821\u9A8CSTART_DATE <= END_DATE\u3002\u5F00\u59CB\u65E5\u671F\u5927\u4E8E\u7ED3\u675F\u65E5\u671F\u8FDD\u53CD\u65F6\u95F4\u903B\u8F91\uFF0C\u5408\u540C\u6709\u6548\u671F\u533A\u95F4\u4E3A\u7A7A\u3002\u6821\u9A8C\u5728\u4FDD\u5B58\u524D\u62E6\u622A\uFF0C\u9700\u91CD\u65B0\u786E\u8BA4\u5408\u540C\u8D77\u6B62\u65E5\u671F")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u6392\u67E5SQL"),
              createTextVNode("\uFF1A")
            ])
          ]),
          createVNode("div", { class: "language-sql" }, [
            createVNode("button", {
              title: "Copy Code",
              class: "copy"
            }),
            createVNode("span", { class: "lang" }, "sql"),
            createVNode("pre", { class: "shiki" }, [
              createVNode("code", null, [
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "SELECT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " SALE_CONTRACT_HEAD_ID, CONTRACT_NO, "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "START_DATE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ", END_DATE, HZ_APPROVE_STATUS")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " SA_SALE_CONTRACT_HEAD")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "START_DATE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " END_DATE;")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95197\uFF1A\u5408\u540C\u5F00\u59CB\u65E5\u671F\u987B\u4E3A\u6708\u5EA6\u7B2C\u4E00\u5929"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u7528\u6237\u586B\u5199\u7684\u5408\u540C\u5F00\u59CB\u65E5\u671F\u975E\u6708\u521D\uFF08\u59822026-08-15\uFF09")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1ASaSaleContractHeadServiceImpl\u6821\u9A8C\u5408\u540C\u5F00\u59CB\u65E5\u671F\u5FC5\u987B\u4E3A\u6708\u5EA6\u7B2C\u4E00\u5929\uFF08\u5982yyyy-MM-01\uFF09\u3002\u7ECF\u9500\u5408\u540C\u6309\u6708\u5EA6\u7EF4\u5EA6\u62C6\u5206\u4EFB\u52A1\u548C\u7ED3\u7B97\uFF0C\u975E\u6708\u521D\u5C06\u5BFC\u81F4\u6708\u5EA6\u4EFB\u52A1\u62C6\u5206\u5F02\u5E38\u3002\u6821\u9A8C\u5728\u4FDD\u5B58\u524D\u62E6\u622A\uFF0C\u9700\u5C06\u5F00\u59CB\u65E5\u671F\u8C03\u6574\u4E3A\u6708\u521D")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u6392\u67E5SQL"),
              createTextVNode("\uFF1A")
            ])
          ]),
          createVNode("div", { class: "language-sql" }, [
            createVNode("button", {
              title: "Copy Code",
              class: "copy"
            }),
            createVNode("span", { class: "lang" }, "sql"),
            createVNode("pre", { class: "shiki" }, [
              createVNode("code", null, [
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "SELECT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " SALE_CONTRACT_HEAD_ID, CONTRACT_NO, "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "START_DATE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         EXTRACT("),
                  createVNode("span", { style: { "color": "#82AAFF" } }, "DAY"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "START_DATE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5F00\u59CB\u65E5")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " SA_SALE_CONTRACT_HEAD")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " EXTRACT("),
                  createVNode("span", { style: { "color": "#82AAFF" } }, "DAY"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "START_DATE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "!="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "1"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95198\uFF1A\u6CD5\u4EBA\u7F16\u7801\u4E0D\u5B58\u5728"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u7528\u6237\u9009\u62E9\u7ECF\u9500\u5546\u540E\u4FDD\u5B58\u5408\u540C\uFF0C\u6839\u636E\u7ECF\u9500\u5546\u67E5\u8BE2\u6CD5\u4EBA\u7F16\u7801\u8FD4\u56DE\u7A7A")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1ASaSaleContractHeadServiceImpl\u6839\u636E\u7ECF\u9500\u5546CUSTOMER_ID\u67E5\u8BE2\u6CD5\u4EBA\u4E3B\u6570\u636E\uFF0C\u82E5\u7ECF\u9500\u5546\u672A\u914D\u7F6E\u6CD5\u4EBA\u5173\u8054\u6216\u6CD5\u4EBA\u7F16\u7801\uFF08CORPORATE_CODE\uFF09\u5728\u4E3B\u6570\u636E\u4E2D\u4E0D\u5B58\u5728\uFF0C\u5C06\u629B\u51FA\u6B64\u5F02\u5E38\u3002\u6CD5\u4EBA\u7F16\u7801\u662F\u5408\u540C\u5F52\u6863\u3001CRM\u63A8\u9001\u7684\u5173\u952E\u6807\u8BC6\u3002\u9700\u5728\u7ECF\u9500\u5546\u4E3B\u6570\u636E\u4E2D\u7EF4\u62A4\u6CD5\u4EBA\u5173\u8054")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u6392\u67E5SQL"),
              createTextVNode("\uFF1A")
            ])
          ]),
          createVNode("div", { class: "language-sql" }, [
            createVNode("button", {
              title: "Copy Code",
              class: "copy"
            }),
            createVNode("span", { class: "lang" }, "sql"),
            createVNode("pre", { class: "shiki" }, [
              createVNode("code", null, [
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "SELECT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " S.SALE_CONTRACT_HEAD_ID, S.CONTRACT_NO, S.CUSTOMER_ID, S.CUSTOMER_NAME,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         C.CORPORATE_CODE, C.CORPORATE_NAME")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " SA_SALE_CONTRACT_HEAD S")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "LEFT JOIN"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " CUSTOMER C "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ON"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " S.CUSTOMER_ID "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " C.CUSTOMER_ID")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " C.CORPORATE_CODE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NULL"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95199\uFF1A\u5173\u8054\u5408\u540C\u4E0D\u5B58\u5728\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u7528\u6237\u4FDD\u5B58\u5408\u540C\u65F6\uFF0C\u5173\u8054\u7684\u6BCD\u5408\u540C\u6216\u5173\u8054\u5408\u540C\u5728SA_SALE_CONTRACT_HEAD\u4E2D\u67E5\u8BE2\u4E0D\u5230")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1ASaSaleContractHeadServiceImpl\u6821\u9A8C\u5173\u8054\u5408\u540C\u5B58\u5728\u6027\u3002\u5173\u8054\u5408\u540C\u4E0D\u5B58\u5728\u6839\u56E0\u6709\u4E09\u7C7B\uFF1A(1)\u6BCD\u5408\u540C\u5DF2\u88AB\u5220\u9664\uFF1B(2)\u6BCD\u5408\u540CID\u4F20\u5165\u9519\u8BEF\uFF1B(3)\u6570\u636E\u540C\u6B65\u5EF6\u8FDF\uFF08\u6BCD\u5408\u540C\u5728CRM\u4FA7\u521B\u5EFA\u4F46\u672A\u540C\u6B65\u5230AE\uFF09\u3002\u9700\u786E\u8BA4\u6BCD\u5408\u540C\u5B58\u5728\u4E14\u5DF2\u540C\u6B65")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u6392\u67E5SQL"),
              createTextVNode("\uFF1A")
            ])
          ]),
          createVNode("div", { class: "language-sql" }, [
            createVNode("button", {
              title: "Copy Code",
              class: "copy"
            }),
            createVNode("span", { class: "lang" }, "sql"),
            createVNode("pre", { class: "shiki" }, [
              createVNode("code", null, [
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "SELECT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " S.SALE_CONTRACT_HEAD_ID, S.CONTRACT_NO, S.PARENT_CONTRACT_ID,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         P.CONTRACT_NO "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u6BCD\u5408\u540C\u7F16\u53F7, P.HZ_APPROVE_STATUS "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u6BCD\u5408\u540C\u72B6\u6001")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " SA_SALE_CONTRACT_HEAD S")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "LEFT JOIN"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " SA_SALE_CONTRACT_HEAD P "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ON"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " S.PARENT_CONTRACT_ID "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " P.SALE_CONTRACT_HEAD_ID")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " S.PARENT_CONTRACT_ID "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NOT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NULL"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " P.SALE_CONTRACT_HEAD_ID "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NULL"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u951910\uFF1A\u63D0\u524D\u7ED3\u675F\u5408\u540C\uFF0C\u5FC5\u987B\u4E3A\u5408\u540C\u7ED3\u675F\u65E5\u671F\u524D\u81F3\u5C11\u4E00\u6574\u6708"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u7528\u6237\u5BF9\u5DF2\u751F\u6548\u5408\u540C\u6267\u884C\u63D0\u524D\u7ED3\u675F\u64CD\u4F5C\uFF0C\u63D0\u524D\u7ED3\u675F\u65E5\u671F\u4E0D\u6EE1\u8DB3\u6574\u6708\u8981\u6C42")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1ASaSaleContractHeadServiceImpl\u6821\u9A8C\u63D0\u524D\u7ED3\u675F\u5408\u540C\u7684\u64CD\u4F5C\uFF0C\u8981\u6C42\u63D0\u524D\u7ED3\u675F\u65E5\u671F\u5FC5\u987B\u5728\u539F\u5408\u540C\u7ED3\u675F\u65E5\u671F\u524D\u81F3\u5C11\u4E00\u6574\u6708\u3002\u6B64\u6821\u9A8C\u786E\u4FDD\u6708\u5EA6\u4EFB\u52A1\u62C6\u5206\u548C\u7ED3\u7B97\u5B8C\u6574\u3002\u9700\u8C03\u6574\u63D0\u524D\u7ED3\u675F\u65E5\u671F\u81F3\u6574\u6708\u524D")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u6392\u67E5SQL"),
              createTextVNode("\uFF1A")
            ])
          ]),
          createVNode("div", { class: "language-sql" }, [
            createVNode("button", {
              title: "Copy Code",
              class: "copy"
            }),
            createVNode("span", { class: "lang" }, "sql"),
            createVNode("pre", { class: "shiki" }, [
              createVNode("code", null, [
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "SELECT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " SALE_CONTRACT_HEAD_ID, CONTRACT_NO, "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "START_DATE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ", END_DATE,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         ACTUAL_END_DATE, HZ_APPROVE_STATUS")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " SA_SALE_CONTRACT_HEAD")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " ACTUAL_END_DATE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NOT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NULL")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " ADD_MONTHS(ACTUAL_END_DATE, "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "1"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " END_DATE;")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u951911\uFF1A\u5F53\u524D\u5DF2\u5B58\u5728\u540C\u7C7B\u578B\u7ECF\u9500\u5408\u540C\uFF0C\u65E0\u6CD5\u518D\u7B7E\u8BA2"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u7528\u6237\u65B0\u5EFA\u5408\u540C\u65F6\uFF0C\u6821\u9A8C\u53D1\u73B0\u5F53\u524D\u7ECF\u9500\u5546\u5728\u7ECF\u9500\u671F\u9650\u5185\u5DF2\u5B58\u5728\u540C\u5408\u540C\u7C7B\u578B\u7684\u6709\u6548\u5408\u540C")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1ASaSaleContractHeadServiceImpl\u6821\u9A8C\u540C\u4E00\u7ECF\u9500\u5546\u5728\u540C\u4E00\u7ECF\u9500\u671F\u9650\u5185\u4E0D\u5141\u8BB8\u7B7E\u8BA2\u540C\u7C7B\u578B\u7684\u591A\u4E2A\u7ECF\u9500\u5408\u540C\u3002\u91CD\u590D\u7B7E\u8BA2\u5C06\u5BFC\u81F4\u4FDD\u8BC1\u91D1\u91CD\u590D\u8BA1\u7B97\u3001\u4EFB\u52A1\u91CD\u590D\u62C6\u5206\u3002\u9700\u8C03\u6574\u5408\u540C\u671F\u9650\u6216\u53D8\u66F4\u5408\u540C\u7C7B\u578B\uFF0C\u6216\u5148\u7EC8\u6B62\u5DF2\u6709\u5408\u540C")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u6392\u67E5SQL"),
              createTextVNode("\uFF1A")
            ])
          ]),
          createVNode("div", { class: "language-sql" }, [
            createVNode("button", {
              title: "Copy Code",
              class: "copy"
            }),
            createVNode("span", { class: "lang" }, "sql"),
            createVNode("pre", { class: "shiki" }, [
              createVNode("code", null, [
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "SELECT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " CUSTOMER_ID, CUSTOMER_NAME, CONTRACT_TYPE, CONTRACT_NO,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "START_DATE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ", END_DATE, HZ_APPROVE_STATUS")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " SA_SALE_CONTRACT_HEAD")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " CUSTOMER_ID "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " #{customerId}")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " CONTRACT_TYPE "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " #{contractType}")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " HZ_APPROVE_STATUS "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "APPROVED"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "START_DATE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "<="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " #{newEndDate}")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " END_DATE "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, ">="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " #{newStartDate};")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u951912\uFF1A\u672A\u80FD\u83B7\u53D6\u5408\u540C\u4FDD\u8BC1\u91D1\u6807\u51C6\uFF0C\u4E0D\u80FD\u521B\u5EFA\u5408\u540C"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u7528\u6237\u65B0\u5EFA\u5408\u540C\u65F6\uFF0C\u6839\u636E\u4E8B\u4E1A\u90E8\u3001\u5408\u540C\u7C7B\u578B\u67E5\u8BE2\u4FDD\u8BC1\u91D1\u6807\u51C6\uFF08CM_DEPOSITS_PAY_STANDARD\uFF09\u8FD4\u56DE\u7A7A")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1ASaSaleContractHeadServiceImpl\u5728\u521B\u5EFA\u5408\u540C\u524D\u67E5\u8BE2\u4FDD\u8BC1\u91D1\u6807\u51C6\uFF0C\u4FDD\u8BC1\u91D1\u6807\u51C6\u662F\u8BA1\u7B97\u5408\u540C\u5E94\u7F34\u4FDD\u8BC1\u91D1\u7684\u4F9D\u636E\u3002\u6807\u51C6\u672A\u914D\u7F6E\u5C06\u5BFC\u81F4\u5408\u540C\u4FDD\u8BC1\u91D1\u91D1\u989D\u65E0\u6CD5\u8BA1\u7B97\u3002\u9700\u5148\u5728\u4FDD\u8BC1\u91D1\u6807\u51C6\u914D\u7F6E\u4E2D\u7EF4\u62A4\u5BF9\u5E94\u4E8B\u4E1A\u90E8\u548C\u5408\u540C\u7C7B\u578B\u7684\u6807\u51C6")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u6392\u67E5SQL"),
              createTextVNode("\uFF1A")
            ])
          ]),
          createVNode("div", { class: "language-sql" }, [
            createVNode("button", {
              title: "Copy Code",
              class: "copy"
            }),
            createVNode("span", { class: "lang" }, "sql"),
            createVNode("pre", { class: "shiki" }, [
              createVNode("code", null, [
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "SELECT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " S.SALE_CONTRACT_HEAD_ID, S.CONTRACT_NO, S.ENTID, S.CONTRACT_TYPE,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         P.PAY_STANDARD_ID, P.STANDARD_AMT")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " SA_SALE_CONTRACT_HEAD S")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "LEFT JOIN"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " CM_DEPOSITS_PAY_STANDARD P "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ON"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " S.ENTID "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " P.ENTID "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " S.CONTRACT_TYPE "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " P.CONTRACT_TYPE")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " P.PAY_STANDARD_ID "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NULL")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " S.HZ_APPROVE_STATUS "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "NEW"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u951913\uFF1A\u672A\u914D\u7F6E\u7ECF\u9500\u5408\u540C\u5EF6\u671F\u5F52\u6863\u5929\u6570\uFF0C\u8BF7\u8054\u7CFB\u7BA1\u7406\u5458"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u5408\u540C\u5F52\u6863\u65F6\uFF0C\u7CFB\u7EDF\u53C2\u6570\u4E2D\u672A\u914D\u7F6E\u5EF6\u671F\u5F52\u6863\u5929\u6570")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1ASaSaleContractHeadServiceImpl\u5728\u5F52\u6863\u65F6\u8BFB\u53D6\u7CFB\u7EDF\u53C2\u6570\uFF08\u7ECF\u9500\u5408\u540C\u5EF6\u671F\u5F52\u6863\u5929\u6570\uFF09\uFF0C\u53C2\u6570\u7F3A\u5931\u5C06\u5BFC\u81F4\u65E0\u6CD5\u8BA1\u7B97\u5E94\u5F52\u6863\u65E5\u671F\u3002\u9700\u8054\u7CFB\u7BA1\u7406\u5458\u5728\u7CFB\u7EDF\u53C2\u6570\u4E2D\u914D\u7F6E")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u6392\u67E5SQL"),
              createTextVNode("\uFF1A")
            ])
          ]),
          createVNode("div", { class: "language-sql" }, [
            createVNode("button", {
              title: "Copy Code",
              class: "copy"
            }),
            createVNode("span", { class: "lang" }, "sql"),
            createVNode("pre", { class: "shiki" }, [
              createVNode("code", null, [
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "SELECT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " PARAM_CODE, PARAM_NAME, PARAM_VALUE")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " SYS_PARAM")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " PARAM_CODE "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "SALE_CONTRACT_DELAY_PIGEONHOLE_DAYS"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u951914\uFF1A\u8BE5\u5408\u540C\u5E94\u5F52\u6863\u65E5\u671F\u4E3A\u7A7A\uFF0C\u8BF7\u8054\u7CFB\u7BA1\u7406\u5458"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u5408\u540C\u5F52\u6863\u65F6\uFF0CPIGEONHOLE_DATE\uFF08\u5E94\u5F52\u6863\u65F6\u95F4\uFF09\u5B57\u6BB5\u4E3A\u7A7A")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1ASaSaleContractHeadServiceImpl\u6821\u9A8C\u5408\u540C\u5E94\u5F52\u6863\u65E5\u671F\u975E\u7A7A\u3002\u5E94\u5F52\u6863\u65E5\u671F\u7531\u5408\u540C\u5BA1\u6279\u901A\u8FC7\u65F6\u95F4\u52A0\u5EF6\u671F\u5F52\u6863\u5929\u6570\u8BA1\u7B97\u5F97\u51FA\uFF0C\u4E3A\u7A7A\u5C06\u5BFC\u81F4\u5F52\u6863\u6D41\u7A0B\u65E0\u6CD5\u5224\u65AD\u5F52\u6863\u65F6\u673A\u3002\u9700\u8054\u7CFB\u7BA1\u7406\u5458\u8865\u5145\u5E94\u5F52\u6863\u65E5\u671F")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u6392\u67E5SQL"),
              createTextVNode("\uFF1A")
            ])
          ]),
          createVNode("div", { class: "language-sql" }, [
            createVNode("button", {
              title: "Copy Code",
              class: "copy"
            }),
            createVNode("span", { class: "lang" }, "sql"),
            createVNode("pre", { class: "shiki" }, [
              createVNode("code", null, [
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "SELECT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " SALE_CONTRACT_HEAD_ID, CONTRACT_NO, HZ_APPROVE_STATUS,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         PIGEONHOLE_DATE, ACTUAL_PIGEONHOLE_DATE, PIGEONHOLE_BY")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " SA_SALE_CONTRACT_HEAD")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " HZ_APPROVE_STATUS "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "APPROVED"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " PIGEONHOLE_DATE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NULL"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u951915\uFF1A\u7ECF\u9500\u5546\u7F16\u7801\u4E0D\u80FD\u4E3A\u7A7A"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u6821\u9A8C\u5408\u540C\u6216\u51FA\u5E93\u5355\u65F6\uFF0C\u7ECF\u9500\u5546\u7F16\u7801\uFF08CUSTOMER_CODE\uFF09\u53C2\u6570\u4E3A\u7A7A")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1ASaSaleContractHeadServiceImpl\u5728\u591A\u5904\u6821\u9A8C\u7ECF\u9500\u5546\u7F16\u7801\u975E\u7A7A\u3002\u7ECF\u9500\u5546\u7F16\u7801\u662F\u5173\u8054\u7ECF\u9500\u5546\u4E3B\u6570\u636E\u7684\u5173\u952E\u5B57\u6BB5\uFF0C\u4E3A\u7A7A\u5C06\u5BFC\u81F4\u7ECF\u9500\u5546\u4FE1\u606F\u65E0\u6CD5\u5E26\u51FA\uFF0C\u5408\u540C\u4E0E\u51FA\u5E93\u5355\u5173\u8054\u65E0\u6CD5\u5EFA\u7ACB\u3002\u9700\u524D\u7AEF\u6B63\u786E\u4F20\u5165\u7ECF\u9500\u5546\u7F16\u7801")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u6392\u67E5SQL"),
              createTextVNode("\uFF1A")
            ])
          ]),
          createVNode("div", { class: "language-sql" }, [
            createVNode("button", {
              title: "Copy Code",
              class: "copy"
            }),
            createVNode("span", { class: "lang" }, "sql"),
            createVNode("pre", { class: "shiki" }, [
              createVNode("code", null, [
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "SELECT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " SALE_CONTRACT_HEAD_ID, CONTRACT_NO, CUSTOMER_ID, CUSTOMER_NAME, CUST_CODE")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " SA_SALE_CONTRACT_HEAD")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " CUST_CODE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NULL"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "OR"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " CUST_CODE "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "''"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u951916\uFF1A\u7F51\u7EDC\u8BF7\u6C42\u5931\u8D25"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u524D\u7AEF\u8C03\u7528sa-sale-contract-heads\u76F8\u5173\u63A5\u53E3\u65F6\uFF0C\u540E\u7AEF\u670D\u52A1\u4E0D\u53EF\u8FBE\u6216\u8BF7\u6C42\u8D85\u65F6")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u524D\u7AEF\u901A\u8FC7axios\u8C03\u7528AE_BUSINESS\u670D\u52A1\uFF0C\u7F51\u7EDC\u5F02\u5E38\u3001\u670D\u52A1\u5B95\u673A\u3001\u7F51\u5173\u8D85\u65F6\u5747\u4F1A\u89E6\u53D1\u3002\u524D\u7AEF\u62E6\u622A\u5668\u7EDF\u4E00\u6355\u83B7\u5E76toast\u63D0\u793A\u3002\u9700\u68C0\u67E5AE_BUSINESS\u670D\u52A1\u72B6\u6001\u3001\u7F51\u7EDC\u8FDE\u901A\u6027\u3001\u7F51\u5173\u914D\u7F6E")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u6392\u67E5SQL"),
              createTextVNode("\uFF1A")
            ])
          ]),
          createVNode("div", { class: "language-sql" }, [
            createVNode("button", {
              title: "Copy Code",
              class: "copy"
            }),
            createVNode("span", { class: "lang" }, "sql"),
            createVNode("pre", { class: "shiki" }, [
              createVNode("code", null, [
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "SELECT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "\u7F51\u7EDC\u5C42\u5F02\u5E38\uFF0C\u65E0SQL\u6392\u67E5"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u63D0\u793A "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " DUAL;")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u951917\uFF1A\u6743\u9650\u4E0D\u8DB3\uFF0C\u65E0\u6CD5\u64CD\u4F5C"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u5F53\u524D\u7528\u6237\u5BF9\u5408\u540C\u4FDD\u5B58\u3001\u63D0\u4EA4\u3001\u5F52\u6863\u7B49\u64CD\u4F5C\u65E0\u5BF9\u5E94\u529F\u80FD\u6743\u9650\u6216\u6570\u636E\u6743\u9650")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u540E\u7AEF\u901A\u8FC7\u6743\u9650\u6CE8\u89E3\u6821\u9A8C\u7528\u6237\u89D2\u8272\uFF0C\u524D\u7AEF\u901A\u8FC7\u83DC\u5355\u548C\u6309\u94AE\u6743\u9650\u63A7\u5236\u663E\u9690\u3002\u7528\u6237\u65E0\u6743\u9650\u65F6\u540E\u7AEF\u8FD4\u56DE403\uFF0C\u524D\u7AEF\u62E6\u622A\u5668toast\u63D0\u793A\u3002\u9700\u5728\u6743\u9650\u7BA1\u7406\u4E2D\u4E3A\u7528\u6237\u5206\u914D\u5BF9\u5E94\u89D2\u8272")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u6392\u67E5SQL"),
              createTextVNode("\uFF1A")
            ])
          ]),
          createVNode("div", { class: "language-sql" }, [
            createVNode("button", {
              title: "Copy Code",
              class: "copy"
            }),
            createVNode("span", { class: "lang" }, "sql"),
            createVNode("pre", { class: "shiki" }, [
              createVNode("code", null, [
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "SELECT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "\u6743\u9650\u5C42\u5F02\u5E38\uFF0C\u8BF7\u6838\u67E5\u7528\u6237\u89D2\u8272\u914D\u7F6E"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u63D0\u793A "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " DUAL;")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, { title: "\u5E38\u89C1\u95EE\u9898" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}>\u95EE\u98981\uFF1A\u5408\u540C\u65E0\u6CD5\u5F52\u6863</li><li${_scopeId}>\u539F\u56E0\uFF1A\u5408\u540C\u672A\u5BA1\u6279\u901A\u8FC7\u6216\u4E0D\u6EE1\u8DB3\u5F52\u6863\u6761\u4EF6</li><li${_scopeId}>\u89E3\u51B3\u601D\u8DEF\uFF1A\u68C0\u67E5SQL <code${_scopeId}>SELECT HZ_APPROVE_STATUS, STATE_PIGEONHOLE FROM SA_SALE_CONTRACT_HEAD WHERE SALE_CONTRACT_HEAD_ID = #{id}</code></li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, "\u95EE\u98981\uFF1A\u5408\u540C\u65E0\u6CD5\u5F52\u6863"),
            createVNode("li", null, "\u539F\u56E0\uFF1A\u5408\u540C\u672A\u5BA1\u6279\u901A\u8FC7\u6216\u4E0D\u6EE1\u8DB3\u5F52\u6863\u6761\u4EF6"),
            createVNode("li", null, [
              createTextVNode("\u89E3\u51B3\u601D\u8DEF\uFF1A\u68C0\u67E5SQL "),
              createVNode("code", null, "SELECT HZ_APPROVE_STATUS, STATE_PIGEONHOLE FROM SA_SALE_CONTRACT_HEAD WHERE SALE_CONTRACT_HEAD_ID = #{id}")
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div><div id="changelog" style="${ssrRenderStyle({ "display": "none" })}"><div class="tab-pad"><div class="kl-wrap">`);
  _push(ssrRenderComponent(_component_KbCard, { title: "\u66F4\u65B0\u8BB0\u5F55" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u65E5\u671F</th><th${_scopeId}>\u63D0\u4EA4ID</th><th${_scopeId}>\u63D0\u4EA4\u4EBA</th><th${_scopeId}>\u63D0\u4EA4\u5185\u5BB9</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>2026-08-30</td><td${_scopeId}>-</td><td${_scopeId}>AI</td><td${_scopeId}>\u6309skill\u89C4\u8303\u91CD\u5199</td></tr></tbody></table>`);
      } else {
        return [
          createVNode("table", { class: "kb-field-tbl" }, [
            createVNode("thead", null, [
              createVNode("tr", null, [
                createVNode("th", null, "\u65E5\u671F"),
                createVNode("th", null, "\u63D0\u4EA4ID"),
                createVNode("th", null, "\u63D0\u4EA4\u4EBA"),
                createVNode("th", null, "\u63D0\u4EA4\u5185\u5BB9")
              ])
            ]),
            createVNode("tbody", null, [
              createVNode("tr", null, [
                createVNode("td", null, "2026-08-30"),
                createVNode("td", null, "-"),
                createVNode("td", null, "AI"),
                createVNode("td", null, "\u6309skill\u89C4\u8303\u91CD\u5199")
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div><div id="history" style="${ssrRenderStyle({ "display": "none" })}"><div class="tab-pad"><div class="kl-wrap">`);
  _push(ssrRenderComponent(_component_KbCard, { title: "\u5386\u53F2\u6392\u67E5\u8BB0\u5F55" }, null, _parent));
  _push(`</div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("\u7ECF\u9500\u5408\u540C\u7BA1\u7406/\u9500\u552E\u5408\u540C/\u5E74\u5EA6\u7ECF\u9500\u5408\u540C/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
