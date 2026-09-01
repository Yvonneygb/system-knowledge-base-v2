import { resolveComponent, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.6ab74304.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"\u5DE5\u7A0B\u7BA1\u7406/\u5408\u540C\u4E0E\u6298\u6263/\u5DE5\u7A0B\u6298\u6263\u5355/index.md"}');
const _sfc_main = { name: "\u5DE5\u7A0B\u7BA1\u7406/\u5408\u540C\u4E0E\u6298\u6263/\u5DE5\u7A0B\u6298\u6263\u5355/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_BreadcrumbTabs = resolveComponent("BreadcrumbTabs");
  const _component_KbCard = resolveComponent("KbCard");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_BreadcrumbTabs, null, null, _parent));
  _push(`<div id="biz-intro" style="${ssrRenderStyle({ "display": "none" })}"><div class="tab-pad"><div class="kl-wrap"><div class="kl-card"><div class="biz-kl-hdr"><span class="biz-tag" style="${ssrRenderStyle({ "background": "rgba(124,58,237,0.08)", "color": "#7C3AED", "border-color": "rgba(124,58,237,0.18)" })}"> \u5B9A\u4E49</span><h2>\u5DE5\u7A0B\u6298\u6263\u5355\u662F\u4EC0\u4E48</h2><p>\u5DE5\u7A0B\u9879\u76EE\u53EF\u4EAB\u53D7\u7684\u4EA7\u54C1\u6298\u6263\u51ED\u8BC1\uFF0C\u7ECF\u5BA1\u6279\u751F\u6548\u540E\u4F9B\u8981\u8D27\u8BA2\u5355\u3001\u5EF6\u671F\u4E0E\u5408\u540C\u53D8\u66F4\u5F15\u7528</p></div><div class="biz-2col-inner"><div class="kl-col-box"><div style="${ssrRenderStyle({ "display": "flex", "align-items": "center", "gap": "10px", "margin-bottom": "12px" })}"><div style="${ssrRenderStyle({ "width": "40px", "height": "40px", "border-radius": "10px", "display": "flex", "align-items": "center", "justify-content": "center", "background": "linear-gradient(135deg,#7c3aed,#6d28d9)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 2v3a4 4 0 008 0V2" stroke="white" stroke-width="1.5"></path><path d="M2 6h12l-1 8H3z" stroke="white" stroke-width="1.5" stroke-linejoin="round"></path></svg></div><h4 style="${ssrRenderStyle({ "font-size": "1rem", "font-weight": "800", "color": "#1F2937", "margin": "0" })}">\u4E1A\u52A1\u5B9A\u4F4D</h4></div><p style="${ssrRenderStyle({ "font-size": "0.78rem", "font-weight": "600", "color": "#6B7280", "margin": "0 0 10px" })}">\u4E3A\u4EC0\u4E48\u5B58\u5728</p><div style="${ssrRenderStyle({ "display": "flex", "flex-direction": "column", "gap": "8px" })}"><div style="${ssrRenderStyle({ "display": "flex", "align-items": "flex-start", "gap": "8px", "padding": "8px 10px", "background": "#F5F3FF", "border-radius": "8px" })}"><div style="${ssrRenderStyle({ "font-size": ".75rem" })}"><strong>\u6298\u6263\u51ED\u8BC1</strong> \u2014 \u56FA\u5316\u5DE5\u7A0B\u4EA7\u54C1\u7684\u6298\u6263\u7387\u4E0E\u6709\u6548\u671F</div></div><div style="${ssrRenderStyle({ "display": "flex", "align-items": "flex-start", "gap": "8px", "padding": "8px 10px", "background": "#F5F3FF", "border-radius": "8px" })}"><div style="${ssrRenderStyle({ "font-size": ".75rem" })}"><strong>\u63A7\u4EF7\u4F9D\u636E</strong> \u2014 \u8981\u8D27\u8BA2\u5355\u636E\u6B64\u8BA1\u7B97\u6298\u540E\u4EF7\u683C</div></div></div></div><div class="kl-col-box alt"><div style="${ssrRenderStyle({ "display": "flex", "align-items": "center", "gap": "10px", "margin-bottom": "12px" })}"><div style="${ssrRenderStyle({ "width": "40px", "height": "40px", "border-radius": "10px", "display": "flex", "align-items": "center", "justify-content": "center", "background": "linear-gradient(135deg,#16a34a,#15803d)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 3h10v10H3z" stroke="white" stroke-width="1.5"></path><path d="M5 6h6M5 9h6" stroke="white" stroke-width="1.5"></path></svg></div><h4 style="${ssrRenderStyle({ "font-size": "1rem", "font-weight": "800", "color": "#1F2937", "margin": "0" })}">\u4E0B\u6E38\u5F15\u7528</h4></div><p style="${ssrRenderStyle({ "font-size": "0.78rem", "font-weight": "600", "color": "#6B7280", "margin": "0 0 10px" })}">\u751F\u6548\u540E\u88AB\u4EE5\u4E0B\u5F15\u7528</p><div style="${ssrRenderStyle({ "display": "flex", "flex-direction": "column", "gap": "8px" })}"><div style="${ssrRenderStyle({ "display": "flex", "align-items": "flex-start", "gap": "8px", "padding": "8px 10px", "background": "#F0FDF4", "border-radius": "8px" })}"><div style="${ssrRenderStyle({ "font-size": ".75rem" })}"><strong>\u8981\u8D27\u8BA2\u5355</strong> \u2014 \u5173\u8054\u6298\u6263\u5355\u83B7\u53D6\u4EF7\u683C</div></div><div style="${ssrRenderStyle({ "display": "flex", "align-items": "flex-start", "gap": "8px", "padding": "8px 10px", "background": "#F0FDF4", "border-radius": "8px" })}"><div style="${ssrRenderStyle({ "font-size": ".75rem" })}"><strong>\u5EF6\u671F/\u53D8\u66F4</strong> \u2014 \u5EF6\u671F\u4E0E\u5408\u540C\u4EA7\u54C1\u53D8\u66F4\u57FA\u4E8E\u6298\u6263\u5355</div></div></div></div></div></div><div class="kl-card"><div class="biz-kl-hdr"><span class="biz-tag" style="${ssrRenderStyle({ "background": "rgba(124,58,237,0.08)", "color": "#7C3AED", "border-color": "rgba(124,58,237,0.18)" })}"> \u6D41\u7A0B</span><h2>\u6298\u6263\u5355\u6D41\u8F6C\u56DB\u6B65</h2><p>\u751F\u6210\u6298\u6263\u5355\u5230\u751F\u6548\uFF0C\u7ECF\u5BA1\u6279\u540E\u4F9B\u4E0B\u6E38\u5F15\u7528</p></div><div class="biz-steps"><div class="biz-step-item"><div class="biz-step-circle" style="${ssrRenderStyle({ "background": "linear-gradient(135deg,#7C3AED,#6D28D9)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 3h10v10H3z" stroke="white" stroke-width="1.5"></path><path d="M5 6h6M5 9h6" stroke="white" stroke-width="1.5"></path></svg></div><h5>\u751F\u6210\u6298\u6263\u5355</h5><small>\u57FA\u4E8E\u653F\u7B56/\u5408\u540C<br>\u751F\u6210\u5355\u5934\u4E0E\u884C</small></div><div class="biz-step-arrow">\u2192</div><div class="biz-step-item"><div class="biz-step-circle" style="${ssrRenderStyle({ "background": "linear-gradient(135deg,#7C3AED,#6D28D9)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 2l1.5 3 3.5.5-2.5 2.5.6 3.5L8 10l-3.1 1.5.6-3.5L3 5.5 6.5 5z" stroke="white" stroke-width="1.2" stroke-linejoin="round"></path></svg></div><h5>\u63D0\u4EA4\u5BA1\u6279</h5><small>\u542F\u52A8\u5BA1\u6279\u6D41<br>\u901A\u8FC7\u540E\u751F\u6548</small></div><div class="biz-step-arrow">\u2192</div><div class="biz-step-item"><div class="biz-step-circle" style="${ssrRenderStyle({ "background": "linear-gradient(135deg,#7C3AED,#6D28D9)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 8l3 3 7-7" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></div><h5>\u6298\u6263\u5355\u751F\u6548</h5><small>\u72B6\u6001\u7F6E\u4E3A\u5DF2\u5BA1\u6279<br>\u53EF\u4F9B\u5F15\u7528</small></div><div class="biz-step-arrow">\u2192</div><div class="biz-step-item"><div class="biz-step-circle" style="${ssrRenderStyle({ "background": "linear-gradient(135deg,#16a34a,#15803d)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 8h7" stroke="white" stroke-width="1.5" stroke-linecap="round"></path><path d="M8 4l4 4-4 4" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 3v10" stroke="white" stroke-width="1.5"></path></svg></div><h5>\u4E0B\u6E38\u5F15\u7528</h5><small>\u8981\u8D27/\u5EF6\u671F<br>\u5F15\u7528\u5B9A\u4EF7</small></div></div></div><div class="kl-card"><div class="biz-kl-hdr"><span class="biz-tag" style="${ssrRenderStyle({ "background": "rgba(124,58,237,0.08)", "color": "#7C3AED", "border-color": "rgba(124,58,237,0.18)" })}"> \u89C4\u5219</span><h2>\u5173\u952E\u4E1A\u52A1\u89C4\u5219</h2><p>\u6298\u6263\u5355\u987B\u9075\u5FAA\u7684\u6838\u5FC3\u7EA6\u675F</p></div><div class="biz-3col"><div class="kl-col-box" style="${ssrRenderStyle({ "margin-bottom": "0" })}"><div style="${ssrRenderStyle({ "display": "flex", "gap": "12px", "align-items": "flex-start" })}"><div style="${ssrRenderStyle({ "width": "36px", "height": "36px", "border-radius": "10px", "display": "flex", "align-items": "center", "justify-content": "center", "flex-shrink": "0", "background": "linear-gradient(135deg,#7C3AED,#A78BFA)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="5" stroke="white" stroke-width="1.5"></circle><path d="M8 5v3l2 1.5" stroke="white" stroke-width="1.5" stroke-linecap="round"></path></svg></div><div><h5 style="${ssrRenderStyle({ "font-size": "0.88rem", "font-weight": "800", "color": "#1F2937", "margin": "0 0 6px" })}">\u6709\u6548\u671F</h5><p style="${ssrRenderStyle({ "font-size": "0.73rem", "color": "#6B7280", "margin": "0", "line-height": "1.6" })}">\u6298\u6263\u5355\u8BBE\u6709\u6548\u671F\uFF0C\u8D85\u671F\u4E0D\u53EF\u518D\u88AB\u5F15\u7528</p></div></div></div><div class="kl-col-box alt" style="${ssrRenderStyle({ "margin-bottom": "0" })}"><div style="${ssrRenderStyle({ "display": "flex", "gap": "12px", "align-items": "flex-start" })}"><div style="${ssrRenderStyle({ "width": "36px", "height": "36px", "border-radius": "10px", "display": "flex", "align-items": "center", "justify-content": "center", "flex-shrink": "0", "background": "linear-gradient(135deg,#16a34a,#15803d)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 4h12v8H2z" stroke="white" stroke-width="1.5"></path><path d="M5 8h6" stroke="white" stroke-width="1.5" stroke-linecap="round"></path></svg></div><div><h5 style="${ssrRenderStyle({ "font-size": "0.88rem", "font-weight": "800", "color": "#1F2937", "margin": "0 0 6px" })}">\u4EF7\u683C\u6765\u6E90</h5><p style="${ssrRenderStyle({ "font-size": "0.73rem", "color": "#6B7280", "margin": "0", "line-height": "1.6" })}">\u8981\u8D27\u8BA2\u5355\u6309\u6298\u6263\u5355\u884C\u4EF7\u683C\u8BA1\u7B97\u6298\u540E\u91D1\u989D</p></div></div></div><div class="kl-col-box" style="${ssrRenderStyle({ "margin-bottom": "0" })}"><div style="${ssrRenderStyle({ "display": "flex", "gap": "12px", "align-items": "flex-start" })}"><div style="${ssrRenderStyle({ "width": "36px", "height": "36px", "border-radius": "10px", "display": "flex", "align-items": "center", "justify-content": "center", "flex-shrink": "0", "background": "linear-gradient(135deg,#F97316,#EA580C)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 3h10v10H3z" stroke="white" stroke-width="1.5"></path><path d="M6 6l4 4M10 6l-4 4" stroke="white" stroke-width="1.5" stroke-linecap="round"></path></svg></div><div><h5 style="${ssrRenderStyle({ "font-size": "0.88rem", "font-weight": "800", "color": "#1F2937", "margin": "0 0 6px" })}">\u5931\u6548\u8054\u52A8</h5><p style="${ssrRenderStyle({ "font-size": "0.73rem", "color": "#6B7280", "margin": "0", "line-height": "1.6" })}">\u5EF6\u671F\u6216\u5931\u6548\u64CD\u4F5C\u4F1A\u6539\u53D8\u6298\u6263\u5355\u72B6\u6001</p></div></div></div></div><div class="kl-tip" style="${ssrRenderStyle({ "margin-top": "14px" })}"><strong>\u89C4\u5219\u63D0\u793A\uFF1A</strong>\u6298\u6263\u5355\u662F\u5DE5\u7A0B\u5B9A\u4EF7\u7684\u6838\u5FC3\u4E3B\u6570\u636E\uFF0C\u5176\u751F\u6548\u5E94\u3001\u6709\u6548\u671F\u4E0E\u72B6\u6001\u53D8\u66F4\u76F4\u63A5\u5F71\u54CD\u6240\u6709\u4E0B\u6E38\u8981\u8D27\u4E0E\u53D8\u66F4\u5355\u636E\u3002</div></div></div></div></div><div id="biz-flow" style="${ssrRenderStyle({ "display": "none" })}"><div class="tab-pad"><div class="bf-truth-flow"><h4 class="bf-main-title">\u5DE5\u7A0B\u6298\u6263\u5355 \u2014 \u5168\u94FE\u8DEF\u6D41\u7A0B\u56FE</h4><p class="bf-main-sub">\u5F00\u59CB \u2192 \u2605\u751F\u6210\u5DE5\u7A0B\u6298\u6263\u5355\u2605 \u2192 \u2696\u5BA1\u6279\u901A\u8FC7\uFF1F(\u62D2\u7EDD\u5219\u91CD\u63D0) \u2192 \u6298\u6263\u5355\u751F\u6548(\u5DF2\u5BA1\u6279) \u2192 \u7ED3\u675F\uFF08\u4E0B\u6E38\uFF1A\u8981\u8D27\u8BA2\u5355/\u5EF6\u671F\u7533\u8BF7/\u5408\u540C\u53D8\u66F4\u5F15\u7528\uFF09</p><div class="bf-fc-svg-wrap"><svg class="bf-fc-svg" style="${ssrRenderStyle({ "max-height": "none" })}" viewBox="0 0 1200 760" xmlns="http://www.w3.org/2000/svg"><defs><marker id="arr-green" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#16A34A"></path></marker><marker id="arr-gray" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#9CA3AF"></path></marker><marker id="arr-blue" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#3B82F6"></path></marker><marker id="arr-red" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#EF4444"></path></marker><filter id="shadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000" flood-opacity="0.15"></feDropShadow></filter></defs><rect x="50" y="20" width="1100" height="95" rx="8" fill="#EFF6FF" stroke="#3B82F6" stroke-width="1.5" stroke-dasharray="6,4"></rect><text x="600" y="42" text-anchor="middle" fill="#1D4ED8" font-size="13" font-weight="600">\u4E0A\u6E38\u652F\u6491</text><rect x="175" y="56" width="150" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"></rect><text x="250" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">\u5DE5\u7A0B\u6298\u6263\u653F\u7B56\u7533\u8BF7</text><rect x="345" y="56" width="150" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"></rect><text x="420" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">\u5DE5\u7A0B\u9879\u76EE\u5408\u540C</text><rect x="515" y="56" width="150" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"></rect><text x="590" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">\u5DE5\u7A0B\u9879\u76EE\u62A5\u5907</text><rect x="685" y="56" width="150" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"></rect><text x="760" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">\u7F16\u7801\u89C4\u5219\u914D\u7F6E</text><rect x="855" y="56" width="150" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"></rect><text x="930" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">\u4EA7\u54C1\u4E3B\u6570\u636E</text><line x1="235" y1="115" x2="235" y2="150" stroke="#3B82F6" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#arr-blue)"></line><rect x="195" y="150" width="80" height="44" rx="6" fill="#FAF5FF" stroke="#9333EA" stroke-width="1.5" stroke-dasharray="5,3"></rect><text x="235" y="177" text-anchor="middle" fill="#7C3AED" font-size="13" font-weight="600">\u5F00\u59CB</text><line x1="235" y1="194" x2="235" y2="230" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"></line><rect x="155" y="230" width="160" height="54" rx="6" fill="#16A34A" stroke="#15803D" stroke-width="2" filter="url(#shadow)"></rect><text x="235" y="254" text-anchor="middle" fill="#FFFFFF" font-size="13" font-weight="700">\u2605\u751F\u6210\u5DE5\u7A0B\u6298\u6263\u5355\u2605</text><text x="235" y="272" text-anchor="middle" fill="#DCFCE7" font-size="10">\u653F\u7B56\u5BA1\u6279\u89E6\u53D1\xB7\u5173\u8054\u5408\u540C/\u9879\u76EE</text><line x1="235" y1="284" x2="235" y2="300" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"></line><polygon points="235,300 305,340 235,380 165,340" fill="#FAF5FF" stroke="#9333EA" stroke-width="1.5" stroke-dasharray="5,3"></polygon><text x="235" y="344" text-anchor="middle" fill="#7C3AED" font-size="12" font-weight="600">\u2696 \u5BA1\u6279\u901A\u8FC7\uFF1F</text><line x1="305" y1="340" x2="430" y2="340" stroke="#EF4444" stroke-width="2" marker-end="url(#arr-red)"></line><rect x="385" y="325" width="80" height="28" rx="4" fill="#FEF2F2" stroke="#EF4444" stroke-width="1"></rect><text x="425" y="344" text-anchor="middle" fill="#DC2626" font-size="11" font-weight="600">\u62D2\u7EDD \u2717</text><line x1="430" y1="340" x2="430" y2="257" stroke="#EF4444" stroke-width="1.5"></line><line x1="430" y1="257" x2="315" y2="257" stroke="#EF4444" stroke-width="1.5" marker-end="url(#arr-red)"></line><line x1="235" y1="380" x2="235" y2="400" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"></line><rect x="150" y="400" width="170" height="40" rx="6" fill="#F0FDF4" stroke="#16A34A" stroke-width="2"></rect><text x="235" y="425" text-anchor="middle" fill="#166534" font-size="13" font-weight="600">\u6298\u6263\u5355\u751F\u6548(\u5DF2\u5BA1\u6279)</text><line x1="235" y1="440" x2="235" y2="540" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"></line><rect x="180" y="540" width="110" height="40" rx="6" fill="#FAF5FF" stroke="#9333EA" stroke-width="1.5" stroke-dasharray="5,3"></rect><text x="235" y="565" text-anchor="middle" fill="#7C3AED" font-size="13" font-weight="600">\u7ED3\u675F</text><line x1="235" y1="580" x2="235" y2="600" stroke="#16A34A" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#arr-green)"></line><rect x="50" y="600" width="1100" height="95" rx="8" fill="#F0FDF4" stroke="#16A34A" stroke-width="1.5" stroke-dasharray="6,4"></rect><text x="600" y="622" text-anchor="middle" fill="#166534" font-size="13" font-weight="600">\u4E0B\u6E38\u5F71\u54CD</text><rect x="345" y="638" width="150" height="36" rx="5" fill="#FFFFFF" stroke="#16A34A" stroke-width="1.2"></rect><text x="420" y="661" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">\u5DE5\u7A0B\u8981\u8D27\u8BA2\u5355</text><rect x="515" y="638" width="150" height="36" rx="5" fill="#FFFFFF" stroke="#16A34A" stroke-width="1.2"></rect><text x="590" y="661" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">\u6298\u6263\u5EF6\u671F\u7533\u8BF7</text><rect x="685" y="638" width="150" height="36" rx="5" fill="#FFFFFF" stroke="#16A34A" stroke-width="1.2"></rect><text x="760" y="661" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">\u5408\u540C\u4EA7\u54C1\u53D8\u66F4</text></svg></div><div class="bf-fc-legend"><span class="bf-fc-legend-item"><span class="bf-fc-dot bf-fc-dot-green"></span> \u4E3B\u6D41\u7A0B\u6B65\u9AA4</span><span class="bf-fc-legend-item"><span class="bf-fc-dot bf-fc-dot-purple"></span> \u5F00\u59CB/\u7ED3\u675F/\u5224\u65AD</span><span class="bf-fc-legend-item"><span class="bf-fc-dot bf-fc-dot-blue"></span> \u4E0A\u6E38\u652F\u6491</span><span class="bf-fc-legend-item"><span style="${ssrRenderStyle({ "display": "inline-block", "width": "22px", "height": "2px", "background": "#EF4444" })}"></span> \u5BA1\u6279\u62D2\u7EDD/\u9A73\u56DE</span></div></div></div></div><div id="key-logic" style="${ssrRenderStyle({ "display": "none" })}"><div class="tab-pad"><div class="kl-wrap">`);
  _push(ssrRenderComponent(_component_KbCard, {
    num: "1",
    title: "\u91CD\u70B9\u903B\u8F911\uFF1A\u5DE5\u7A0B\u6298\u6263\u5355\u4E0E\u5BB6\u88C5\u6298\u6263\u653F\u7B56\u5171\u7528\u540E\u7AEF `\u5171\u7528\u4EE3\u7801`"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u610F\u4E49</strong>\uFF1A\u5DE5\u7A0B\u6298\u6263\u5355\u4E0E\u5BB6\u88C5\u6298\u6263\u653F\u7B56\u7533\u8BF7\u5171\u7528EpmDiscountPolicyController\uFF0C\u901A\u8FC7\u53C2\u6570\u533A\u5206</li></ul><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u5177\u4F53\u903B\u8F91\u63CF\u8FF0</strong></li></ul><ul${_scopeId}><li${_scopeId}>\u7B2C1\u70B9\uFF1A\u5171\u7528\u540E\u7AEFController EpmDiscountPolicyController\uFF0CAPI\u8DEF\u5F84/v1/{orgId}/epm-discount-policy</li></ul><ul${_scopeId}><li${_scopeId}>\u7B2C2\u70B9\uFF1A\u5DE5\u7A0B\u6298\u6263\u5355\u4F7F\u7528\u5DE5\u7A0B\u6E20\u9053\u53C2\u6570\uFF0C\u5BB6\u88C5\u6298\u6263\u653F\u7B56\u4F7F\u7528\u5BB6\u88C5\u6E20\u9053\uFF08channel=3\uFF09</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u610F\u4E49"),
              createTextVNode("\uFF1A\u5DE5\u7A0B\u6298\u6263\u5355\u4E0E\u5BB6\u88C5\u6298\u6263\u653F\u7B56\u7533\u8BF7\u5171\u7528EpmDiscountPolicyController\uFF0C\u901A\u8FC7\u53C2\u6570\u533A\u5206")
            ])
          ]),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u5177\u4F53\u903B\u8F91\u63CF\u8FF0")
            ])
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u7B2C1\u70B9\uFF1A\u5171\u7528\u540E\u7AEFController EpmDiscountPolicyController\uFF0CAPI\u8DEF\u5F84/v1/{orgId}/epm-discount-policy")
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u7B2C2\u70B9\uFF1A\u5DE5\u7A0B\u6298\u6263\u5355\u4F7F\u7528\u5DE5\u7A0B\u6E20\u9053\u53C2\u6570\uFF0C\u5BB6\u88C5\u6298\u6263\u653F\u7B56\u4F7F\u7528\u5BB6\u88C5\u6E20\u9053\uFF08channel=3\uFF09")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, {
    num: "2",
    title: "\u91CD\u70B9\u903B\u8F912\uFF1A\u653F\u7B56\u7C7B\u578B\u51B3\u5B9A\u9002\u7528\u8303\u56F4 `\u52A8\u6001\u5FC5\u586B`"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u610F\u4E49</strong>\uFF1A\u4E0D\u540C\u653F\u7B56\u7C7B\u578B\u5BF9\u5E94\u4E0D\u540C\u7684\u9002\u7528\u8303\u56F4\u5B57\u6BB5</li></ul><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u5177\u4F53\u903B\u8F91\u63CF\u8FF0</strong></li></ul><ul${_scopeId}><li${_scopeId}>\u7B2C1\u70B9\uFF1A\u653F\u7B56\u7C7B\u578B=1\uFF08\u6309\u5BA2\u6237\uFF09\u65F6\uFF0C\u9002\u7528\u5BA2\u6237\u5FC5\u586B</li></ul><ul${_scopeId}><li${_scopeId}>\u7B2C2\u70B9\uFF1A\u653F\u7B56\u7C7B\u578B=2\uFF08\u6309\u533A\u57DF\uFF09\u65F6\uFF0C\u9002\u7528\u533A\u57DF\u5FC5\u586B</li></ul><ul${_scopeId}><li${_scopeId}>\u7B2C3\u70B9\uFF1A\u653F\u7B56\u7C7B\u578B=3\uFF08\u6309\u5BA2\u6237\u5206\u7C7B\uFF09\u65F6\uFF0C\u9002\u7528\u5BA2\u6237\u5206\u7C7B\u5FC5\u586B</li></ul><ul${_scopeId}><li${_scopeId}>\u7B2C4\u70B9\uFF1A\u653F\u7B56\u7C7B\u578B=4\uFF08\u6309\u7701\u4EFD\uFF09\u65F6\uFF0C\u9002\u7528\u7701\u4EFD\u5FC5\u586B</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u610F\u4E49"),
              createTextVNode("\uFF1A\u4E0D\u540C\u653F\u7B56\u7C7B\u578B\u5BF9\u5E94\u4E0D\u540C\u7684\u9002\u7528\u8303\u56F4\u5B57\u6BB5")
            ])
          ]),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u5177\u4F53\u903B\u8F91\u63CF\u8FF0")
            ])
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u7B2C1\u70B9\uFF1A\u653F\u7B56\u7C7B\u578B=1\uFF08\u6309\u5BA2\u6237\uFF09\u65F6\uFF0C\u9002\u7528\u5BA2\u6237\u5FC5\u586B")
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u7B2C2\u70B9\uFF1A\u653F\u7B56\u7C7B\u578B=2\uFF08\u6309\u533A\u57DF\uFF09\u65F6\uFF0C\u9002\u7528\u533A\u57DF\u5FC5\u586B")
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u7B2C3\u70B9\uFF1A\u653F\u7B56\u7C7B\u578B=3\uFF08\u6309\u5BA2\u6237\u5206\u7C7B\uFF09\u65F6\uFF0C\u9002\u7528\u5BA2\u6237\u5206\u7C7B\u5FC5\u586B")
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u7B2C4\u70B9\uFF1A\u653F\u7B56\u7C7B\u578B=4\uFF08\u6309\u7701\u4EFD\uFF09\u65F6\uFF0C\u9002\u7528\u7701\u4EFD\u5FC5\u586B")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div><div id="detail-logic" style="${ssrRenderStyle({ "display": "none" })}"><div class="tab-pad"><div class="kl-wrap">`);
  _push(ssrRenderComponent(_component_KbCard, { title: "\u754C\u9762\u6A21\u57571\uFF1A\u5217\u8868\u9875-\u67E5\u8BE2\u6761\u4EF6" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5B57\u6BB5\u540D</th><th${_scopeId}>\u6570\u636E\u5E93\u5217\u540D</th><th${_scopeId}>\u7EC4\u4EF6</th><th${_scopeId}>\u4E1A\u52A1\u91CA\u4E49</th><th${_scopeId}>\u663E\u9690\u6761\u4EF6</th><th${_scopeId}>\u53D6\u503C/\u8D4B\u503C\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u653F\u7B56\u7533\u8BF7\u7F16\u53F7</td><td${_scopeId}>EPM_DISCOUNT_POLICY.DISCOUNT_POLICY_CODE</td><td${_scopeId}>\u6587\u672C\u8F93\u5165\u6846</td><td${_scopeId}>\u653F\u7B56\u7533\u8BF7\u7F16\u53F7\u6A21\u7CCA\u67E5\u8BE2</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u624B\u52A8\u8F93\u5165\uFF1B\u9ED8\u8BA4\u65E0</td></tr><tr${_scopeId}><td${_scopeId}>\u5BA1\u6838\u72B6\u6001</td><td${_scopeId}>EPM_DISCOUNT_POLICY.HZ_APPROVE_STATUS</td><td${_scopeId}>\u4E0B\u62C9\u9009\u62E9\u6846</td><td${_scopeId}>\u5BA1\u6279\u72B6\u6001</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u6765\u6E90\u503C\u96C6HWKF.APPROVE_STATUS\uFF1B\u9ED8\u8BA4\u65E0</td></tr><tr${_scopeId}><td${_scopeId}>\u6709\u6548\u72B6\u6001</td><td${_scopeId}>EPM_DISCOUNT_POLICY.VALID</td><td${_scopeId}>\u4E0B\u62C9\u9009\u62E9\u6846</td><td${_scopeId}>\u6709\u6548\u72B6\u6001</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u6765\u6E90\u503C\u96C6AE.VALID\uFF1B\u9ED8\u8BA4\u65E0</td></tr><tr${_scopeId}><td${_scopeId}>\u653F\u7B56\u7C7B\u578B</td><td${_scopeId}>EPM_DISCOUNT_POLICY.POLICY_TYPE</td><td${_scopeId}>\u4E0B\u62C9\u9009\u62E9\u6846</td><td${_scopeId}>\u653F\u7B56\u9002\u7528\u7C7B\u578B</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u6765\u6E90\u503C\u96C6AE.EPM.POLICY_TYPE\uFF1B\u9ED8\u8BA4\u65E0</td></tr><tr${_scopeId}><td${_scopeId}>\u653F\u7B56\u540D\u79F0</td><td${_scopeId}>EPM_DISCOUNT_POLICY.DISCOUNT_POLICY_NAME</td><td${_scopeId}>\u6587\u672C\u8F93\u5165\u6846</td><td${_scopeId}>\u653F\u7B56\u540D\u79F0\u6A21\u7CCA\u67E5\u8BE2</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u624B\u52A8\u8F93\u5165\uFF1B\u9ED8\u8BA4\u65E0</td></tr><tr${_scopeId}><td${_scopeId}>\u6709\u6548\u5F00\u59CB\u65E5\u671F</td><td${_scopeId}>EPM_DISCOUNT_POLICY.EFFECTIVE_DATE_START</td><td${_scopeId}>\u65E5\u671F\u9009\u62E9\u5668</td><td${_scopeId}>\u6709\u6548\u5F00\u59CB\u65E5\u671F</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u9ED8\u8BA4\u65E0</td></tr><tr${_scopeId}><td${_scopeId}>\u6709\u6548\u7ED3\u675F\u65E5\u671F</td><td${_scopeId}>EPM_DISCOUNT_POLICY.EFFECTIVE_DATE_END</td><td${_scopeId}>\u65E5\u671F\u9009\u62E9\u5668</td><td${_scopeId}>\u6709\u6548\u7ED3\u675F\u65E5\u671F</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u9ED8\u8BA4\u65E0</td></tr><tr${_scopeId}><td${_scopeId}>\u7533\u8BF7\u4EBA</td><td${_scopeId}>EPM_DISCOUNT_POLICY.CREATED_BY_NAME</td><td${_scopeId}>\u6587\u672C\u8F93\u5165\u6846</td><td${_scopeId}>\u7533\u8BF7\u4EBA\u6A21\u7CCA\u67E5\u8BE2</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u624B\u52A8\u8F93\u5165\uFF1B\u9ED8\u8BA4\u65E0</td></tr><tr${_scopeId}><td${_scopeId}>\u9002\u7528\u5BA2\u6237</td><td${_scopeId}>EPM_DISCOUNT_POLICY.CUSTOMER_ALL_NAME</td><td${_scopeId}>\u6587\u672C\u8F93\u5165\u6846</td><td${_scopeId}>\u9002\u7528\u5BA2\u6237\u6A21\u7CCA\u67E5\u8BE2</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u624B\u52A8\u8F93\u5165\uFF1B\u9ED8\u8BA4\u65E0</td></tr><tr${_scopeId}><td${_scopeId}>\u9002\u7528\u533A\u57DF</td><td${_scopeId}>EPM_DISCOUNT_POLICY.SALE_AREA_NAME</td><td${_scopeId}>LOV\u5F39\u7A97</td><td${_scopeId}>\u9002\u7528\u533A\u57DF</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>LOV\u7F16\u7801AE.SALE_SALEAREAS\uFF1B\u9ED8\u8BA4\u65E0</td></tr><tr${_scopeId}><td${_scopeId}>\u653F\u7B56\u63CF\u8FF0</td><td${_scopeId}>EPM_DISCOUNT_POLICY.NOTE</td><td${_scopeId}>\u6587\u672C\u8F93\u5165\u6846</td><td${_scopeId}>\u653F\u7B56\u63CF\u8FF0\u6A21\u7CCA\u67E5\u8BE2</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u624B\u52A8\u8F93\u5165\uFF1B\u9ED8\u8BA4\u65E0</td></tr></tbody></table><blockquote${_scopeId}>\u5217\u8868\u67E5\u8BE2\u65F6\u524D\u7AEF\u56FA\u5B9A\u4F20isMakt=0\u3001suitableType=normal\uFF08\u5DE5\u7A0B\u6298\u6263\u5355\u6807\u8BC6\uFF09\uFF0CAPI: <code${_scopeId}>GET /v1/{organizationId}/epm-discount-policy</code></blockquote>`);
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
                createVNode("td", null, "\u653F\u7B56\u7533\u8BF7\u7F16\u53F7"),
                createVNode("td", null, "EPM_DISCOUNT_POLICY.DISCOUNT_POLICY_CODE"),
                createVNode("td", null, "\u6587\u672C\u8F93\u5165\u6846"),
                createVNode("td", null, "\u653F\u7B56\u7533\u8BF7\u7F16\u53F7\u6A21\u7CCA\u67E5\u8BE2"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u624B\u52A8\u8F93\u5165\uFF1B\u9ED8\u8BA4\u65E0")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5BA1\u6838\u72B6\u6001"),
                createVNode("td", null, "EPM_DISCOUNT_POLICY.HZ_APPROVE_STATUS"),
                createVNode("td", null, "\u4E0B\u62C9\u9009\u62E9\u6846"),
                createVNode("td", null, "\u5BA1\u6279\u72B6\u6001"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u6765\u6E90\u503C\u96C6HWKF.APPROVE_STATUS\uFF1B\u9ED8\u8BA4\u65E0")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6709\u6548\u72B6\u6001"),
                createVNode("td", null, "EPM_DISCOUNT_POLICY.VALID"),
                createVNode("td", null, "\u4E0B\u62C9\u9009\u62E9\u6846"),
                createVNode("td", null, "\u6709\u6548\u72B6\u6001"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u6765\u6E90\u503C\u96C6AE.VALID\uFF1B\u9ED8\u8BA4\u65E0")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u653F\u7B56\u7C7B\u578B"),
                createVNode("td", null, "EPM_DISCOUNT_POLICY.POLICY_TYPE"),
                createVNode("td", null, "\u4E0B\u62C9\u9009\u62E9\u6846"),
                createVNode("td", null, "\u653F\u7B56\u9002\u7528\u7C7B\u578B"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u6765\u6E90\u503C\u96C6AE.EPM.POLICY_TYPE\uFF1B\u9ED8\u8BA4\u65E0")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u653F\u7B56\u540D\u79F0"),
                createVNode("td", null, "EPM_DISCOUNT_POLICY.DISCOUNT_POLICY_NAME"),
                createVNode("td", null, "\u6587\u672C\u8F93\u5165\u6846"),
                createVNode("td", null, "\u653F\u7B56\u540D\u79F0\u6A21\u7CCA\u67E5\u8BE2"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u624B\u52A8\u8F93\u5165\uFF1B\u9ED8\u8BA4\u65E0")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6709\u6548\u5F00\u59CB\u65E5\u671F"),
                createVNode("td", null, "EPM_DISCOUNT_POLICY.EFFECTIVE_DATE_START"),
                createVNode("td", null, "\u65E5\u671F\u9009\u62E9\u5668"),
                createVNode("td", null, "\u6709\u6548\u5F00\u59CB\u65E5\u671F"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u9ED8\u8BA4\u65E0")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6709\u6548\u7ED3\u675F\u65E5\u671F"),
                createVNode("td", null, "EPM_DISCOUNT_POLICY.EFFECTIVE_DATE_END"),
                createVNode("td", null, "\u65E5\u671F\u9009\u62E9\u5668"),
                createVNode("td", null, "\u6709\u6548\u7ED3\u675F\u65E5\u671F"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u9ED8\u8BA4\u65E0")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7533\u8BF7\u4EBA"),
                createVNode("td", null, "EPM_DISCOUNT_POLICY.CREATED_BY_NAME"),
                createVNode("td", null, "\u6587\u672C\u8F93\u5165\u6846"),
                createVNode("td", null, "\u7533\u8BF7\u4EBA\u6A21\u7CCA\u67E5\u8BE2"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u624B\u52A8\u8F93\u5165\uFF1B\u9ED8\u8BA4\u65E0")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u9002\u7528\u5BA2\u6237"),
                createVNode("td", null, "EPM_DISCOUNT_POLICY.CUSTOMER_ALL_NAME"),
                createVNode("td", null, "\u6587\u672C\u8F93\u5165\u6846"),
                createVNode("td", null, "\u9002\u7528\u5BA2\u6237\u6A21\u7CCA\u67E5\u8BE2"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u624B\u52A8\u8F93\u5165\uFF1B\u9ED8\u8BA4\u65E0")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u9002\u7528\u533A\u57DF"),
                createVNode("td", null, "EPM_DISCOUNT_POLICY.SALE_AREA_NAME"),
                createVNode("td", null, "LOV\u5F39\u7A97"),
                createVNode("td", null, "\u9002\u7528\u533A\u57DF"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "LOV\u7F16\u7801AE.SALE_SALEAREAS\uFF1B\u9ED8\u8BA4\u65E0")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u653F\u7B56\u63CF\u8FF0"),
                createVNode("td", null, "EPM_DISCOUNT_POLICY.NOTE"),
                createVNode("td", null, "\u6587\u672C\u8F93\u5165\u6846"),
                createVNode("td", null, "\u653F\u7B56\u63CF\u8FF0\u6A21\u7CCA\u67E5\u8BE2"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u624B\u52A8\u8F93\u5165\uFF1B\u9ED8\u8BA4\u65E0")
              ])
            ])
          ]),
          createVNode("blockquote", null, [
            createTextVNode("\u5217\u8868\u67E5\u8BE2\u65F6\u524D\u7AEF\u56FA\u5B9A\u4F20isMakt=0\u3001suitableType=normal\uFF08\u5DE5\u7A0B\u6298\u6263\u5355\u6807\u8BC6\uFF09\uFF0CAPI: "),
            createVNode("code", null, "GET /v1/{organizationId}/epm-discount-policy")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, { title: "\u754C\u9762\u6A21\u57572\uFF1A\u5217\u8868\u9875-\u7ED3\u679C\u8868\u683C" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5B57\u6BB5\u540D</th><th${_scopeId}>\u6570\u636E\u5E93\u5217\u540D</th><th${_scopeId}>\u7EC4\u4EF6</th><th${_scopeId}>\u4E1A\u52A1\u91CA\u4E49</th><th${_scopeId}>\u663E\u9690\u6761\u4EF6</th><th${_scopeId}>\u53D6\u503C/\u8D4B\u503C\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u5BA1\u6838\u72B6\u6001</td><td${_scopeId}>EPM_DISCOUNT_POLICY.HZ_APPROVE_STATUS</td><td${_scopeId}>\u6587\u672C</td><td${_scopeId}>\u5BA1\u6279\u72B6\u6001</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>LOV\u7FFB\u8BD1HWKF.APPROVE_STATUS</td></tr><tr${_scopeId}><td${_scopeId}>\u6709\u6548\u72B6\u6001</td><td${_scopeId}>EPM_DISCOUNT_POLICY.VALID</td><td${_scopeId}>\u6587\u672C</td><td${_scopeId}>\u6709\u6548\u72B6\u6001</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>LOV\u7FFB\u8BD1AE.VALID</td></tr><tr${_scopeId}><td${_scopeId}>\u653F\u7B56\u7533\u8BF7\u7F16\u53F7</td><td${_scopeId}>EPM_DISCOUNT_POLICY.DISCOUNT_POLICY_CODE</td><td${_scopeId}>\u6587\u672C</td><td${_scopeId}>\u653F\u7B56\u7533\u8BF7\u7F16\u53F7</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u5217\u8868\u67E5\u8BE2\u8FD4\u56DE</td></tr><tr${_scopeId}><td${_scopeId}>\u7533\u8BF7\u4EBA</td><td${_scopeId}>EPM_DISCOUNT_POLICY.CREATED_BY_NAME</td><td${_scopeId}>\u6587\u672C</td><td${_scopeId}>\u7533\u8BF7\u4EBA</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u5217\u8868\u67E5\u8BE2\u8FD4\u56DE</td></tr><tr${_scopeId}><td${_scopeId}>\u7533\u8BF7\u65F6\u95F4</td><td${_scopeId}>EPM_DISCOUNT_POLICY.CREATION_DATE</td><td${_scopeId}>\u6587\u672C</td><td${_scopeId}>\u7533\u8BF7\u65F6\u95F4</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u5217\u8868\u67E5\u8BE2\u8FD4\u56DE</td></tr><tr${_scopeId}><td${_scopeId}>\u653F\u7B56\u7C7B\u578B</td><td${_scopeId}>EPM_DISCOUNT_POLICY.POLICY_TYPE</td><td${_scopeId}>\u6587\u672C</td><td${_scopeId}>\u653F\u7B56\u7C7B\u578B</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>LOV\u7FFB\u8BD1AE.EPM.POLICY_TYPE</td></tr><tr${_scopeId}><td${_scopeId}>\u653F\u7B56\u540D\u79F0</td><td${_scopeId}>EPM_DISCOUNT_POLICY.DISCOUNT_POLICY_NAME</td><td${_scopeId}>\u6587\u672C</td><td${_scopeId}>\u653F\u7B56\u540D\u79F0</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u5217\u8868\u67E5\u8BE2\u8FD4\u56DE</td></tr><tr${_scopeId}><td${_scopeId}>\u9002\u7528\u5BA2\u6237</td><td${_scopeId}>EPM_DISCOUNT_POLICY.CUSTOMER_ALL_NAME</td><td${_scopeId}>\u6587\u672C</td><td${_scopeId}>\u9002\u7528\u5BA2\u6237</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u5217\u8868\u67E5\u8BE2\u8FD4\u56DE</td></tr><tr${_scopeId}><td${_scopeId}>\u9002\u7528\u533A\u57DF</td><td${_scopeId}>EPM_DISCOUNT_POLICY.SALE_AREA_NAME</td><td${_scopeId}>\u6587\u672C</td><td${_scopeId}>\u9002\u7528\u533A\u57DF</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u5217\u8868\u67E5\u8BE2\u8FD4\u56DE</td></tr><tr${_scopeId}><td${_scopeId}>\u9002\u7528\u7701\u4EFD</td><td${_scopeId}>EPM_DISCOUNT_POLICY.PROVINCE_NAME</td><td${_scopeId}>\u6587\u672C</td><td${_scopeId}>\u9002\u7528\u7701\u4EFD</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u5217\u8868\u67E5\u8BE2\u8FD4\u56DE</td></tr><tr${_scopeId}><td${_scopeId}>\u9002\u7528\u5BA2\u6237\u5206\u7C7B</td><td${_scopeId}>EPM_DISCOUNT_POLICY.CUSTOMER_CLASS</td><td${_scopeId}>\u6587\u672C</td><td${_scopeId}>\u9002\u7528\u5BA2\u6237\u5206\u7C7B</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>LOV\u7FFB\u8BD1AE.EPM.MAKT.BUSINESS_TYPE\uFF1B\u503C\u4E3A0\u65F6\u663E\u793A\u7A7A</td></tr><tr${_scopeId}><td${_scopeId}>\u5E01\u79CD</td><td${_scopeId}>EPM_DISCOUNT_POLICY.CURRENCY</td><td${_scopeId}>\u6587\u672C</td><td${_scopeId}>\u5E01\u79CD</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u5217\u8868\u67E5\u8BE2\u8FD4\u56DE</td></tr><tr${_scopeId}><td${_scopeId}>\u6709\u6548\u5F00\u59CB\u65E5\u671F</td><td${_scopeId}>EPM_DISCOUNT_POLICY.EFFECTIVE_DATE_START</td><td${_scopeId}>\u65E5\u671F</td><td${_scopeId}>\u6709\u6548\u5F00\u59CB\u65E5\u671F</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u5217\u8868\u67E5\u8BE2\u8FD4\u56DE</td></tr><tr${_scopeId}><td${_scopeId}>\u6709\u6548\u7ED3\u675F\u65E5\u671F</td><td${_scopeId}>EPM_DISCOUNT_POLICY.EFFECTIVE_DATE_END</td><td${_scopeId}>\u65E5\u671F</td><td${_scopeId}>\u6709\u6548\u7ED3\u675F\u65E5\u671F</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u5217\u8868\u67E5\u8BE2\u8FD4\u56DE</td></tr><tr${_scopeId}><td${_scopeId}>\u6279\u6B21\u5F00\u59CB\u65E5\u671F</td><td${_scopeId}>EPM_DISCOUNT_POLICY.BATCH_START_DATE</td><td${_scopeId}>\u65E5\u671F</td><td${_scopeId}>\u6279\u6B21\u5F00\u59CB\u65E5\u671F</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u5217\u8868\u67E5\u8BE2\u8FD4\u56DE</td></tr><tr${_scopeId}><td${_scopeId}>\u6279\u6B21\u7ED3\u675F\u65E5\u671F</td><td${_scopeId}>EPM_DISCOUNT_POLICY.BATCH_END_DATE</td><td${_scopeId}>\u65E5\u671F</td><td${_scopeId}>\u6279\u6B21\u7ED3\u675F\u65E5\u671F</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u5217\u8868\u67E5\u8BE2\u8FD4\u56DE</td></tr><tr${_scopeId}><td${_scopeId}>\u7D2F\u8BA1\u4FC3\u9500\u4EFB\u52A1\u91CF</td><td${_scopeId}>EPM_DISCOUNT_POLICY.CUMULATIVE_PROMOTION</td><td${_scopeId}>\u6587\u672C</td><td${_scopeId}>\u7D2F\u8BA1\u4FC3\u9500\u4EFB\u52A1\u91CF</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u5217\u8868\u67E5\u8BE2\u8FD4\u56DE</td></tr><tr${_scopeId}><td${_scopeId}>\u7D2F\u8BA1\u53D1\u8D27\u7C7B\u578B</td><td${_scopeId}>EPM_DISCOUNT_POLICY.CUMULATIVE_SHIPMENT</td><td${_scopeId}>\u6587\u672C</td><td${_scopeId}>\u7D2F\u8BA1\u53D1\u8D27\u7C7B\u578B</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>LOV\u7FFB\u8BD1AE.MKT.ARRCUMULATIVESHIPMENT</td></tr><tr${_scopeId}><td${_scopeId}>\u7D2F\u8BA1\u53D1\u8D27\u91D1\u989D</td><td${_scopeId}>EPM_DISCOUNT_POLICY.CUMULATIVE_AMT</td><td${_scopeId}>\u6587\u672C</td><td${_scopeId}>\u7D2F\u8BA1\u53D1\u8D27\u91D1\u989D(\u4E07)</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u5217\u8868\u67E5\u8BE2\u8FD4\u56DE</td></tr><tr${_scopeId}><td${_scopeId}>\u9500\u552E\u6E20\u9053</td><td${_scopeId}>EPM_DISCOUNT_POLICY.CHANNEL</td><td${_scopeId}>\u6587\u672C</td><td${_scopeId}>\u9500\u552E\u6E20\u9053</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>LOV\u7FFB\u8BD1AE.MKT.SALES_CHANNEL</td></tr><tr${_scopeId}><td${_scopeId}>\u8BA1\u5E7F\u544A\u8D39</td><td${_scopeId}>EPM_DISCOUNT_POLICY.IS_CAL_AD</td><td${_scopeId}>\u5F00\u5173</td><td${_scopeId}>\u662F\u5426\u8BA1\u5E7F\u544A\u8D39</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>trueValue=2\uFF0CfalseValue=1\uFF1B\u9ED8\u8BA41</td></tr><tr${_scopeId}><td${_scopeId}>\u653F\u7B56\u63CF\u8FF0</td><td${_scopeId}>EPM_DISCOUNT_POLICY.NOTE</td><td${_scopeId}>\u6587\u672C</td><td${_scopeId}>\u653F\u7B56\u63CF\u8FF0</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u5217\u8868\u67E5\u8BE2\u8FD4\u56DE</td></tr><tr${_scopeId}><td${_scopeId}>\u6700\u540E\u66F4\u65B0\u4EBA</td><td${_scopeId}>EPM_DISCOUNT_POLICY.LAST_UPDATED_BY_NAME</td><td${_scopeId}>\u6587\u672C</td><td${_scopeId}>\u6700\u540E\u66F4\u65B0\u4EBA</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u5217\u8868\u67E5\u8BE2\u8FD4\u56DE</td></tr><tr${_scopeId}><td${_scopeId}>\u6700\u540E\u66F4\u65B0\u65F6\u95F4</td><td${_scopeId}>EPM_DISCOUNT_POLICY.LAST_UPDATE_DATE</td><td${_scopeId}>\u6587\u672C</td><td${_scopeId}>\u6700\u540E\u66F4\u65B0\u65F6\u95F4</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u5217\u8868\u67E5\u8BE2\u8FD4\u56DE</td></tr></tbody></table>`);
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
                createVNode("td", null, "\u5BA1\u6838\u72B6\u6001"),
                createVNode("td", null, "EPM_DISCOUNT_POLICY.HZ_APPROVE_STATUS"),
                createVNode("td", null, "\u6587\u672C"),
                createVNode("td", null, "\u5BA1\u6279\u72B6\u6001"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "LOV\u7FFB\u8BD1HWKF.APPROVE_STATUS")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6709\u6548\u72B6\u6001"),
                createVNode("td", null, "EPM_DISCOUNT_POLICY.VALID"),
                createVNode("td", null, "\u6587\u672C"),
                createVNode("td", null, "\u6709\u6548\u72B6\u6001"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "LOV\u7FFB\u8BD1AE.VALID")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u653F\u7B56\u7533\u8BF7\u7F16\u53F7"),
                createVNode("td", null, "EPM_DISCOUNT_POLICY.DISCOUNT_POLICY_CODE"),
                createVNode("td", null, "\u6587\u672C"),
                createVNode("td", null, "\u653F\u7B56\u7533\u8BF7\u7F16\u53F7"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u5217\u8868\u67E5\u8BE2\u8FD4\u56DE")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7533\u8BF7\u4EBA"),
                createVNode("td", null, "EPM_DISCOUNT_POLICY.CREATED_BY_NAME"),
                createVNode("td", null, "\u6587\u672C"),
                createVNode("td", null, "\u7533\u8BF7\u4EBA"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u5217\u8868\u67E5\u8BE2\u8FD4\u56DE")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7533\u8BF7\u65F6\u95F4"),
                createVNode("td", null, "EPM_DISCOUNT_POLICY.CREATION_DATE"),
                createVNode("td", null, "\u6587\u672C"),
                createVNode("td", null, "\u7533\u8BF7\u65F6\u95F4"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u5217\u8868\u67E5\u8BE2\u8FD4\u56DE")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u653F\u7B56\u7C7B\u578B"),
                createVNode("td", null, "EPM_DISCOUNT_POLICY.POLICY_TYPE"),
                createVNode("td", null, "\u6587\u672C"),
                createVNode("td", null, "\u653F\u7B56\u7C7B\u578B"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "LOV\u7FFB\u8BD1AE.EPM.POLICY_TYPE")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u653F\u7B56\u540D\u79F0"),
                createVNode("td", null, "EPM_DISCOUNT_POLICY.DISCOUNT_POLICY_NAME"),
                createVNode("td", null, "\u6587\u672C"),
                createVNode("td", null, "\u653F\u7B56\u540D\u79F0"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u5217\u8868\u67E5\u8BE2\u8FD4\u56DE")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u9002\u7528\u5BA2\u6237"),
                createVNode("td", null, "EPM_DISCOUNT_POLICY.CUSTOMER_ALL_NAME"),
                createVNode("td", null, "\u6587\u672C"),
                createVNode("td", null, "\u9002\u7528\u5BA2\u6237"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u5217\u8868\u67E5\u8BE2\u8FD4\u56DE")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u9002\u7528\u533A\u57DF"),
                createVNode("td", null, "EPM_DISCOUNT_POLICY.SALE_AREA_NAME"),
                createVNode("td", null, "\u6587\u672C"),
                createVNode("td", null, "\u9002\u7528\u533A\u57DF"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u5217\u8868\u67E5\u8BE2\u8FD4\u56DE")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u9002\u7528\u7701\u4EFD"),
                createVNode("td", null, "EPM_DISCOUNT_POLICY.PROVINCE_NAME"),
                createVNode("td", null, "\u6587\u672C"),
                createVNode("td", null, "\u9002\u7528\u7701\u4EFD"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u5217\u8868\u67E5\u8BE2\u8FD4\u56DE")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u9002\u7528\u5BA2\u6237\u5206\u7C7B"),
                createVNode("td", null, "EPM_DISCOUNT_POLICY.CUSTOMER_CLASS"),
                createVNode("td", null, "\u6587\u672C"),
                createVNode("td", null, "\u9002\u7528\u5BA2\u6237\u5206\u7C7B"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "LOV\u7FFB\u8BD1AE.EPM.MAKT.BUSINESS_TYPE\uFF1B\u503C\u4E3A0\u65F6\u663E\u793A\u7A7A")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5E01\u79CD"),
                createVNode("td", null, "EPM_DISCOUNT_POLICY.CURRENCY"),
                createVNode("td", null, "\u6587\u672C"),
                createVNode("td", null, "\u5E01\u79CD"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u5217\u8868\u67E5\u8BE2\u8FD4\u56DE")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6709\u6548\u5F00\u59CB\u65E5\u671F"),
                createVNode("td", null, "EPM_DISCOUNT_POLICY.EFFECTIVE_DATE_START"),
                createVNode("td", null, "\u65E5\u671F"),
                createVNode("td", null, "\u6709\u6548\u5F00\u59CB\u65E5\u671F"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u5217\u8868\u67E5\u8BE2\u8FD4\u56DE")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6709\u6548\u7ED3\u675F\u65E5\u671F"),
                createVNode("td", null, "EPM_DISCOUNT_POLICY.EFFECTIVE_DATE_END"),
                createVNode("td", null, "\u65E5\u671F"),
                createVNode("td", null, "\u6709\u6548\u7ED3\u675F\u65E5\u671F"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u5217\u8868\u67E5\u8BE2\u8FD4\u56DE")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6279\u6B21\u5F00\u59CB\u65E5\u671F"),
                createVNode("td", null, "EPM_DISCOUNT_POLICY.BATCH_START_DATE"),
                createVNode("td", null, "\u65E5\u671F"),
                createVNode("td", null, "\u6279\u6B21\u5F00\u59CB\u65E5\u671F"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u5217\u8868\u67E5\u8BE2\u8FD4\u56DE")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6279\u6B21\u7ED3\u675F\u65E5\u671F"),
                createVNode("td", null, "EPM_DISCOUNT_POLICY.BATCH_END_DATE"),
                createVNode("td", null, "\u65E5\u671F"),
                createVNode("td", null, "\u6279\u6B21\u7ED3\u675F\u65E5\u671F"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u5217\u8868\u67E5\u8BE2\u8FD4\u56DE")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7D2F\u8BA1\u4FC3\u9500\u4EFB\u52A1\u91CF"),
                createVNode("td", null, "EPM_DISCOUNT_POLICY.CUMULATIVE_PROMOTION"),
                createVNode("td", null, "\u6587\u672C"),
                createVNode("td", null, "\u7D2F\u8BA1\u4FC3\u9500\u4EFB\u52A1\u91CF"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u5217\u8868\u67E5\u8BE2\u8FD4\u56DE")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7D2F\u8BA1\u53D1\u8D27\u7C7B\u578B"),
                createVNode("td", null, "EPM_DISCOUNT_POLICY.CUMULATIVE_SHIPMENT"),
                createVNode("td", null, "\u6587\u672C"),
                createVNode("td", null, "\u7D2F\u8BA1\u53D1\u8D27\u7C7B\u578B"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "LOV\u7FFB\u8BD1AE.MKT.ARRCUMULATIVESHIPMENT")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7D2F\u8BA1\u53D1\u8D27\u91D1\u989D"),
                createVNode("td", null, "EPM_DISCOUNT_POLICY.CUMULATIVE_AMT"),
                createVNode("td", null, "\u6587\u672C"),
                createVNode("td", null, "\u7D2F\u8BA1\u53D1\u8D27\u91D1\u989D(\u4E07)"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u5217\u8868\u67E5\u8BE2\u8FD4\u56DE")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u9500\u552E\u6E20\u9053"),
                createVNode("td", null, "EPM_DISCOUNT_POLICY.CHANNEL"),
                createVNode("td", null, "\u6587\u672C"),
                createVNode("td", null, "\u9500\u552E\u6E20\u9053"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "LOV\u7FFB\u8BD1AE.MKT.SALES_CHANNEL")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u8BA1\u5E7F\u544A\u8D39"),
                createVNode("td", null, "EPM_DISCOUNT_POLICY.IS_CAL_AD"),
                createVNode("td", null, "\u5F00\u5173"),
                createVNode("td", null, "\u662F\u5426\u8BA1\u5E7F\u544A\u8D39"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "trueValue=2\uFF0CfalseValue=1\uFF1B\u9ED8\u8BA41")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u653F\u7B56\u63CF\u8FF0"),
                createVNode("td", null, "EPM_DISCOUNT_POLICY.NOTE"),
                createVNode("td", null, "\u6587\u672C"),
                createVNode("td", null, "\u653F\u7B56\u63CF\u8FF0"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u5217\u8868\u67E5\u8BE2\u8FD4\u56DE")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6700\u540E\u66F4\u65B0\u4EBA"),
                createVNode("td", null, "EPM_DISCOUNT_POLICY.LAST_UPDATED_BY_NAME"),
                createVNode("td", null, "\u6587\u672C"),
                createVNode("td", null, "\u6700\u540E\u66F4\u65B0\u4EBA"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u5217\u8868\u67E5\u8BE2\u8FD4\u56DE")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6700\u540E\u66F4\u65B0\u65F6\u95F4"),
                createVNode("td", null, "EPM_DISCOUNT_POLICY.LAST_UPDATE_DATE"),
                createVNode("td", null, "\u6587\u672C"),
                createVNode("td", null, "\u6700\u540E\u66F4\u65B0\u65F6\u95F4"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u5217\u8868\u67E5\u8BE2\u8FD4\u56DE")
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, { title: "\u754C\u9762\u6A21\u57573\uFF1A\u8BE6\u60C5\u9875-\u5934\u4FE1\u606F" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5B57\u6BB5\u540D</th><th${_scopeId}>\u6570\u636E\u5E93\u5217\u540D</th><th${_scopeId}>\u7EC4\u4EF6</th><th${_scopeId}>\u4E1A\u52A1\u91CA\u4E49</th><th${_scopeId}>\u663E\u9690\u6761\u4EF6</th><th${_scopeId}>\u53D6\u503C/\u8D4B\u503C\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u653F\u7B56\u7533\u8BF7\u7F16\u53F7</td><td${_scopeId}>EPM_DISCOUNT_POLICY.DISCOUNT_POLICY_CODE</td><td${_scopeId}>\u6587\u672C</td><td${_scopeId}>\u653F\u7B56\u7533\u8BF7\u7F16\u53F7</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u53EA\u8BFB\uFF1B\u4FDD\u5B58\u65F6\u81EA\u52A8\u751F\u6210</td></tr><tr${_scopeId}><td${_scopeId}>\u7533\u8BF7\u4EBA</td><td${_scopeId}>EPM_DISCOUNT_POLICY.CREATED_BY_NAME</td><td${_scopeId}>\u6587\u672C</td><td${_scopeId}>\u7533\u8BF7\u4EBA</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u9ED8\u8BA4\u5F53\u524D\u7528\u6237realName</td></tr><tr${_scopeId}><td${_scopeId}>\u7533\u8BF7\u65F6\u95F4</td><td${_scopeId}>EPM_DISCOUNT_POLICY.CREATION_DATE</td><td${_scopeId}>\u65E5\u671F</td><td${_scopeId}>\u7533\u8BF7\u65F6\u95F4</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u9ED8\u8BA4\u5F53\u524D\u65E5\u671F</td></tr><tr${_scopeId}><td${_scopeId}>\u5BA1\u6838\u72B6\u6001</td><td${_scopeId}>EPM_DISCOUNT_POLICY.HZ_APPROVE_STATUS</td><td${_scopeId}>\u4E0B\u62C9\u9009\u62E9\u6846</td><td${_scopeId}>\u5BA1\u6838\u72B6\u6001</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u6765\u6E90\u503C\u96C6HWKF.APPROVE_STATUS\uFF1B\u503C\u4E3A0\u65F6\u663E\u793A\u7A7A\uFF1B\u9ED8\u8BA4NEW</td></tr><tr${_scopeId}><td${_scopeId}>\u653F\u7B56\u7C7B\u578B</td><td${_scopeId}>EPM_DISCOUNT_POLICY.POLICY_TYPE</td><td${_scopeId}>\u4E0B\u62C9\u9009\u62E9\u6846</td><td${_scopeId}>\u653F\u7B56\u9002\u7528\u7C7B\u578B</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u5FC5\u586B\uFF1B\u6765\u6E90\u503C\u96C6AE.EPM.POLICY_TYPE\uFF1B\u503C\u4E3A0\u65F6\u663E\u793A\u7A7A\uFF1B\u53D8\u66F4\u65F6\u6E05\u7A7A\u4E0D\u9002\u7528\u7684\u8303\u56F4\u5B57\u6BB5</td></tr><tr${_scopeId}><td${_scopeId}>\u653F\u7B56\u540D\u79F0</td><td${_scopeId}>EPM_DISCOUNT_POLICY.DISCOUNT_POLICY_NAME</td><td${_scopeId}>\u6587\u672C\u8F93\u5165\u6846</td><td${_scopeId}>\u653F\u7B56\u540D\u79F0</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u5FC5\u586B\uFF1B\u6700\u5927\u957F\u5EA630</td></tr><tr${_scopeId}><td${_scopeId}>\u8BA2\u5355\u7C7B\u578B</td><td${_scopeId}>EPM_DISCOUNT_POLICY.BILL_TYPE</td><td${_scopeId}>\u4E0B\u62C9\u9009\u62E9\u6846</td><td${_scopeId}>\u8BA2\u5355\u7C7B\u578B</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u5FC5\u586B\uFF1B\u4E8B\u4E1A\u90E8=111\u65F6\u6765\u6E90AE.EPM.ORDER_CHOOSE_OVERSEAS\uFF0C\u5426\u5219AE.EPM.ORDER_CHOOSE</td></tr><tr${_scopeId}><td${_scopeId}>\u9500\u552E\u6E20\u9053</td><td${_scopeId}>EPM_DISCOUNT_POLICY.CHANNEL</td><td${_scopeId}>\u4E0B\u62C9\u9009\u62E9\u6846</td><td${_scopeId}>\u9500\u552E\u6E20\u9053</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u6765\u6E90\u503C\u96C6AE.MKT.SALES_CHANNEL\uFF1B\u9ED8\u8BA44(\u5DE5\u7A0B)\uFF1B\u53EA\u8BFB</td></tr><tr${_scopeId}><td${_scopeId}>\u4E1A\u52A1\u7C7B\u578B</td><td${_scopeId}>EPM_DISCOUNT_POLICY.BUSINESS_TYPE</td><td${_scopeId}>\u4E0B\u62C9\u9009\u62E9\u6846</td><td${_scopeId}>\u4E1A\u52A1\u7C7B\u578B</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u5FC5\u586B\uFF1B\u6765\u6E90\u503C\u96C6AE.EPM.ENGINEER.BUSINESS_TYPE\uFF1B\u9ED8\u8BA41\uFF1B\u53EA\u8BFB</td></tr><tr${_scopeId}><td${_scopeId}>\u9002\u7528\u5BA2\u6237</td><td${_scopeId}>EPM_DISCOUNT_POLICY.CUSTOMER_STR</td><td${_scopeId}>\u6587\u672C\u8F93\u5165\u6846</td><td${_scopeId}>\u9002\u7528\u5BA2\u6237</td><td${_scopeId}>\u653F\u7B56\u7C7B\u578B=1\u65F6</td><td${_scopeId}>\u653F\u7B56\u7C7B\u578B=1\u65F6\u5FC5\u586B</td></tr><tr${_scopeId}><td${_scopeId}>\u9002\u7528\u533A\u57DF</td><td${_scopeId}>EPM_DISCOUNT_POLICY.SALE_AREA_OBJ</td><td${_scopeId}>LOV\u5F39\u7A97</td><td${_scopeId}>\u9002\u7528\u533A\u57DF</td><td${_scopeId}>\u653F\u7B56\u7C7B\u578B=2\u65F6</td><td${_scopeId}>LOV\u7F16\u7801AE.SALE_SALEAREAS\uFF1B\u653F\u7B56\u7C7B\u578B=2\u65F6\u5FC5\u586B\uFF1B\u975E\u653F\u7B56\u7C7B\u578B=2\u65F6\u7981\u7528</td></tr><tr${_scopeId}><td${_scopeId}>\u9002\u7528\u7701\u4EFD</td><td${_scopeId}>EPM_DISCOUNT_POLICY.PROVINCE_OBJ</td><td${_scopeId}>LOV\u5F39\u7A97</td><td${_scopeId}>\u9002\u7528\u7701\u4EFD</td><td${_scopeId}>\u653F\u7B56\u7C7B\u578B=4\u65F6</td><td${_scopeId}>LOV\u7F16\u7801AE.APPLY_SCPAREA\uFF1B\u653F\u7B56\u7C7B\u578B=4\u65F6\u5FC5\u586B\uFF1B\u975E\u653F\u7B56\u7C7B\u578B=4\u65F6\u7981\u7528</td></tr><tr${_scopeId}><td${_scopeId}>\u9002\u7528\u5BA2\u6237\u5206\u7C7B</td><td${_scopeId}>EPM_DISCOUNT_POLICY.CUSTOMER_CLASS</td><td${_scopeId}>\u4E0B\u62C9\u9009\u62E9\u6846</td><td${_scopeId}>\u9002\u7528\u5BA2\u6237\u5206\u7C7B</td><td${_scopeId}>\u653F\u7B56\u7C7B\u578B=3\u65F6</td><td${_scopeId}>\u6765\u6E90\u503C\u96C6AE.APPLICABLE_CUSTOMER_CLASS\uFF1B\u653F\u7B56\u7C7B\u578B=3\u65F6\u5FC5\u586B\uFF1B\u975E\u653F\u7B56\u7C7B\u578B=3\u65F6\u7981\u7528</td></tr><tr${_scopeId}><td${_scopeId}>\u6709\u6548\u5F00\u59CB\u65E5\u671F</td><td${_scopeId}>EPM_DISCOUNT_POLICY.EFFECTIVE_DATE_START</td><td${_scopeId}>\u65E5\u671F\u9009\u62E9\u5668</td><td${_scopeId}>\u6709\u6548\u5F00\u59CB\u65E5\u671F</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u5FC5\u586B\uFF1B\u6700\u5C0F\u503C\u4ECA\u5929</td></tr><tr${_scopeId}><td${_scopeId}>\u6709\u6548\u7ED3\u675F\u65E5\u671F</td><td${_scopeId}>EPM_DISCOUNT_POLICY.EFFECTIVE_DATE_END</td><td${_scopeId}>\u65E5\u671F\u9009\u62E9\u5668</td><td${_scopeId}>\u6709\u6548\u7ED3\u675F\u65E5\u671F</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u5FC5\u586B\uFF1B\u6700\u5C0F\u503C\u4E3A\u6709\u6548\u5F00\u59CB\u65E5\u671F+1\u5929</td></tr><tr${_scopeId}><td${_scopeId}>\u653F\u7B56\u63CF\u8FF0</td><td${_scopeId}>EPM_DISCOUNT_POLICY.NOTE</td><td${_scopeId}>\u6587\u672C\u57DF</td><td${_scopeId}>\u653F\u7B56\u63CF\u8FF0</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u5FC5\u586B</td></tr><tr${_scopeId}><td${_scopeId}>\u8BA1\u5E7F\u544A\u8D39</td><td${_scopeId}>EPM_DISCOUNT_POLICY.IS_CAL_AD</td><td${_scopeId}>\u5F00\u5173</td><td${_scopeId}>\u662F\u5426\u8BA1\u5E7F\u544A\u8D39</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>trueValue=2\uFF0CfalseValue=1\uFF1B\u9ED8\u8BA41\uFF1B\u63D0\u4EA4\u65F6\u5F3A\u5236\u8F6C\u6362</td></tr><tr${_scopeId}><td${_scopeId}>\u5E01\u79CD</td><td${_scopeId}>EPM_DISCOUNT_POLICY.CURRENCY_OBJ</td><td${_scopeId}>LOV\u5F39\u7A97</td><td${_scopeId}>\u5E01\u79CD</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u5FC5\u586B\uFF1BLOV\u7F16\u7801HPFM.CURRENCY</td></tr><tr${_scopeId}><td${_scopeId}>\u6279\u6B21\u5F00\u59CB\u65E5\u671F</td><td${_scopeId}>EPM_DISCOUNT_POLICY.BATCH_START_DATE</td><td${_scopeId}>\u65E5\u671F\u9009\u62E9\u5668</td><td${_scopeId}>\u6279\u6B21\u5F00\u59CB\u65E5\u671F</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u6700\u5927\u503C\u4E3A\u6279\u6B21\u7ED3\u675F\u65E5\u671F</td></tr><tr${_scopeId}><td${_scopeId}>\u6279\u6B21\u7ED3\u675F\u65E5\u671F</td><td${_scopeId}>EPM_DISCOUNT_POLICY.BATCH_END_DATE</td><td${_scopeId}>\u65E5\u671F\u9009\u62E9\u5668</td><td${_scopeId}>\u6279\u6B21\u7ED3\u675F\u65E5\u671F</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u6700\u5C0F\u503C\u4E3A\u6279\u6B21\u5F00\u59CB\u65E5\u671F</td></tr><tr${_scopeId}><td${_scopeId}>\u54C1\u7C7B</td><td${_scopeId}>EPM_DISCOUNT_POLICY.PROD_ATTRIBUTION_CHANNEL</td><td${_scopeId}>\u6587\u672C</td><td${_scopeId}>\u54C1\u7C7B</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u53EA\u8BFB</td></tr><tr${_scopeId}><td${_scopeId}>\u653F\u7B56\u5206\u6790\u8BF4\u660E</td><td${_scopeId}>EPM_DISCOUNT_POLICY.POLICY_ANALYSIS_DESCRIPTION</td><td${_scopeId}>\u6587\u672C</td><td${_scopeId}>\u653F\u7B56\u5206\u6790\u8BF4\u660E</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u53EA\u8BFB</td></tr><tr${_scopeId}><td${_scopeId}>\u9002\u7528\u4E8B\u4E1A\u90E8</td><td${_scopeId}>EPM_DISCOUNT_POLICY.DIVISION_NAME</td><td${_scopeId}>\u6587\u672C</td><td${_scopeId}>\u9002\u7528\u4E8B\u4E1A\u90E8</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u9ED8\u8BA4\u5F53\u524D\u7528\u6237\u4E8B\u4E1A\u90E8\uFF1B\u53EA\u8BFB</td></tr></tbody></table>`);
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
                createVNode("td", null, "\u653F\u7B56\u7533\u8BF7\u7F16\u53F7"),
                createVNode("td", null, "EPM_DISCOUNT_POLICY.DISCOUNT_POLICY_CODE"),
                createVNode("td", null, "\u6587\u672C"),
                createVNode("td", null, "\u653F\u7B56\u7533\u8BF7\u7F16\u53F7"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u53EA\u8BFB\uFF1B\u4FDD\u5B58\u65F6\u81EA\u52A8\u751F\u6210")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7533\u8BF7\u4EBA"),
                createVNode("td", null, "EPM_DISCOUNT_POLICY.CREATED_BY_NAME"),
                createVNode("td", null, "\u6587\u672C"),
                createVNode("td", null, "\u7533\u8BF7\u4EBA"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u9ED8\u8BA4\u5F53\u524D\u7528\u6237realName")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7533\u8BF7\u65F6\u95F4"),
                createVNode("td", null, "EPM_DISCOUNT_POLICY.CREATION_DATE"),
                createVNode("td", null, "\u65E5\u671F"),
                createVNode("td", null, "\u7533\u8BF7\u65F6\u95F4"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u9ED8\u8BA4\u5F53\u524D\u65E5\u671F")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5BA1\u6838\u72B6\u6001"),
                createVNode("td", null, "EPM_DISCOUNT_POLICY.HZ_APPROVE_STATUS"),
                createVNode("td", null, "\u4E0B\u62C9\u9009\u62E9\u6846"),
                createVNode("td", null, "\u5BA1\u6838\u72B6\u6001"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u6765\u6E90\u503C\u96C6HWKF.APPROVE_STATUS\uFF1B\u503C\u4E3A0\u65F6\u663E\u793A\u7A7A\uFF1B\u9ED8\u8BA4NEW")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u653F\u7B56\u7C7B\u578B"),
                createVNode("td", null, "EPM_DISCOUNT_POLICY.POLICY_TYPE"),
                createVNode("td", null, "\u4E0B\u62C9\u9009\u62E9\u6846"),
                createVNode("td", null, "\u653F\u7B56\u9002\u7528\u7C7B\u578B"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u5FC5\u586B\uFF1B\u6765\u6E90\u503C\u96C6AE.EPM.POLICY_TYPE\uFF1B\u503C\u4E3A0\u65F6\u663E\u793A\u7A7A\uFF1B\u53D8\u66F4\u65F6\u6E05\u7A7A\u4E0D\u9002\u7528\u7684\u8303\u56F4\u5B57\u6BB5")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u653F\u7B56\u540D\u79F0"),
                createVNode("td", null, "EPM_DISCOUNT_POLICY.DISCOUNT_POLICY_NAME"),
                createVNode("td", null, "\u6587\u672C\u8F93\u5165\u6846"),
                createVNode("td", null, "\u653F\u7B56\u540D\u79F0"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u5FC5\u586B\uFF1B\u6700\u5927\u957F\u5EA630")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u8BA2\u5355\u7C7B\u578B"),
                createVNode("td", null, "EPM_DISCOUNT_POLICY.BILL_TYPE"),
                createVNode("td", null, "\u4E0B\u62C9\u9009\u62E9\u6846"),
                createVNode("td", null, "\u8BA2\u5355\u7C7B\u578B"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u5FC5\u586B\uFF1B\u4E8B\u4E1A\u90E8=111\u65F6\u6765\u6E90AE.EPM.ORDER_CHOOSE_OVERSEAS\uFF0C\u5426\u5219AE.EPM.ORDER_CHOOSE")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u9500\u552E\u6E20\u9053"),
                createVNode("td", null, "EPM_DISCOUNT_POLICY.CHANNEL"),
                createVNode("td", null, "\u4E0B\u62C9\u9009\u62E9\u6846"),
                createVNode("td", null, "\u9500\u552E\u6E20\u9053"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u6765\u6E90\u503C\u96C6AE.MKT.SALES_CHANNEL\uFF1B\u9ED8\u8BA44(\u5DE5\u7A0B)\uFF1B\u53EA\u8BFB")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u4E1A\u52A1\u7C7B\u578B"),
                createVNode("td", null, "EPM_DISCOUNT_POLICY.BUSINESS_TYPE"),
                createVNode("td", null, "\u4E0B\u62C9\u9009\u62E9\u6846"),
                createVNode("td", null, "\u4E1A\u52A1\u7C7B\u578B"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u5FC5\u586B\uFF1B\u6765\u6E90\u503C\u96C6AE.EPM.ENGINEER.BUSINESS_TYPE\uFF1B\u9ED8\u8BA41\uFF1B\u53EA\u8BFB")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u9002\u7528\u5BA2\u6237"),
                createVNode("td", null, "EPM_DISCOUNT_POLICY.CUSTOMER_STR"),
                createVNode("td", null, "\u6587\u672C\u8F93\u5165\u6846"),
                createVNode("td", null, "\u9002\u7528\u5BA2\u6237"),
                createVNode("td", null, "\u653F\u7B56\u7C7B\u578B=1\u65F6"),
                createVNode("td", null, "\u653F\u7B56\u7C7B\u578B=1\u65F6\u5FC5\u586B")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u9002\u7528\u533A\u57DF"),
                createVNode("td", null, "EPM_DISCOUNT_POLICY.SALE_AREA_OBJ"),
                createVNode("td", null, "LOV\u5F39\u7A97"),
                createVNode("td", null, "\u9002\u7528\u533A\u57DF"),
                createVNode("td", null, "\u653F\u7B56\u7C7B\u578B=2\u65F6"),
                createVNode("td", null, "LOV\u7F16\u7801AE.SALE_SALEAREAS\uFF1B\u653F\u7B56\u7C7B\u578B=2\u65F6\u5FC5\u586B\uFF1B\u975E\u653F\u7B56\u7C7B\u578B=2\u65F6\u7981\u7528")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u9002\u7528\u7701\u4EFD"),
                createVNode("td", null, "EPM_DISCOUNT_POLICY.PROVINCE_OBJ"),
                createVNode("td", null, "LOV\u5F39\u7A97"),
                createVNode("td", null, "\u9002\u7528\u7701\u4EFD"),
                createVNode("td", null, "\u653F\u7B56\u7C7B\u578B=4\u65F6"),
                createVNode("td", null, "LOV\u7F16\u7801AE.APPLY_SCPAREA\uFF1B\u653F\u7B56\u7C7B\u578B=4\u65F6\u5FC5\u586B\uFF1B\u975E\u653F\u7B56\u7C7B\u578B=4\u65F6\u7981\u7528")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u9002\u7528\u5BA2\u6237\u5206\u7C7B"),
                createVNode("td", null, "EPM_DISCOUNT_POLICY.CUSTOMER_CLASS"),
                createVNode("td", null, "\u4E0B\u62C9\u9009\u62E9\u6846"),
                createVNode("td", null, "\u9002\u7528\u5BA2\u6237\u5206\u7C7B"),
                createVNode("td", null, "\u653F\u7B56\u7C7B\u578B=3\u65F6"),
                createVNode("td", null, "\u6765\u6E90\u503C\u96C6AE.APPLICABLE_CUSTOMER_CLASS\uFF1B\u653F\u7B56\u7C7B\u578B=3\u65F6\u5FC5\u586B\uFF1B\u975E\u653F\u7B56\u7C7B\u578B=3\u65F6\u7981\u7528")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6709\u6548\u5F00\u59CB\u65E5\u671F"),
                createVNode("td", null, "EPM_DISCOUNT_POLICY.EFFECTIVE_DATE_START"),
                createVNode("td", null, "\u65E5\u671F\u9009\u62E9\u5668"),
                createVNode("td", null, "\u6709\u6548\u5F00\u59CB\u65E5\u671F"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u5FC5\u586B\uFF1B\u6700\u5C0F\u503C\u4ECA\u5929")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6709\u6548\u7ED3\u675F\u65E5\u671F"),
                createVNode("td", null, "EPM_DISCOUNT_POLICY.EFFECTIVE_DATE_END"),
                createVNode("td", null, "\u65E5\u671F\u9009\u62E9\u5668"),
                createVNode("td", null, "\u6709\u6548\u7ED3\u675F\u65E5\u671F"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u5FC5\u586B\uFF1B\u6700\u5C0F\u503C\u4E3A\u6709\u6548\u5F00\u59CB\u65E5\u671F+1\u5929")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u653F\u7B56\u63CF\u8FF0"),
                createVNode("td", null, "EPM_DISCOUNT_POLICY.NOTE"),
                createVNode("td", null, "\u6587\u672C\u57DF"),
                createVNode("td", null, "\u653F\u7B56\u63CF\u8FF0"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u5FC5\u586B")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u8BA1\u5E7F\u544A\u8D39"),
                createVNode("td", null, "EPM_DISCOUNT_POLICY.IS_CAL_AD"),
                createVNode("td", null, "\u5F00\u5173"),
                createVNode("td", null, "\u662F\u5426\u8BA1\u5E7F\u544A\u8D39"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "trueValue=2\uFF0CfalseValue=1\uFF1B\u9ED8\u8BA41\uFF1B\u63D0\u4EA4\u65F6\u5F3A\u5236\u8F6C\u6362")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5E01\u79CD"),
                createVNode("td", null, "EPM_DISCOUNT_POLICY.CURRENCY_OBJ"),
                createVNode("td", null, "LOV\u5F39\u7A97"),
                createVNode("td", null, "\u5E01\u79CD"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u5FC5\u586B\uFF1BLOV\u7F16\u7801HPFM.CURRENCY")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6279\u6B21\u5F00\u59CB\u65E5\u671F"),
                createVNode("td", null, "EPM_DISCOUNT_POLICY.BATCH_START_DATE"),
                createVNode("td", null, "\u65E5\u671F\u9009\u62E9\u5668"),
                createVNode("td", null, "\u6279\u6B21\u5F00\u59CB\u65E5\u671F"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u6700\u5927\u503C\u4E3A\u6279\u6B21\u7ED3\u675F\u65E5\u671F")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6279\u6B21\u7ED3\u675F\u65E5\u671F"),
                createVNode("td", null, "EPM_DISCOUNT_POLICY.BATCH_END_DATE"),
                createVNode("td", null, "\u65E5\u671F\u9009\u62E9\u5668"),
                createVNode("td", null, "\u6279\u6B21\u7ED3\u675F\u65E5\u671F"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u6700\u5C0F\u503C\u4E3A\u6279\u6B21\u5F00\u59CB\u65E5\u671F")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u54C1\u7C7B"),
                createVNode("td", null, "EPM_DISCOUNT_POLICY.PROD_ATTRIBUTION_CHANNEL"),
                createVNode("td", null, "\u6587\u672C"),
                createVNode("td", null, "\u54C1\u7C7B"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u53EA\u8BFB")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u653F\u7B56\u5206\u6790\u8BF4\u660E"),
                createVNode("td", null, "EPM_DISCOUNT_POLICY.POLICY_ANALYSIS_DESCRIPTION"),
                createVNode("td", null, "\u6587\u672C"),
                createVNode("td", null, "\u653F\u7B56\u5206\u6790\u8BF4\u660E"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u53EA\u8BFB")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u9002\u7528\u4E8B\u4E1A\u90E8"),
                createVNode("td", null, "EPM_DISCOUNT_POLICY.DIVISION_NAME"),
                createVNode("td", null, "\u6587\u672C"),
                createVNode("td", null, "\u9002\u7528\u4E8B\u4E1A\u90E8"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u9ED8\u8BA4\u5F53\u524D\u7528\u6237\u4E8B\u4E1A\u90E8\uFF1B\u53EA\u8BFB")
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, { title: "\u754C\u9762\u6A21\u57574\uFF1A\u8BE6\u60C5\u9875-\u4EA7\u54C1\u660E\u7EC6\u884C" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5B57\u6BB5\u540D</th><th${_scopeId}>\u6570\u636E\u5E93\u5217\u540D</th><th${_scopeId}>\u7EC4\u4EF6</th><th${_scopeId}>\u4E1A\u52A1\u91CA\u4E49</th><th${_scopeId}>\u663E\u9690\u6761\u4EF6</th><th${_scopeId}>\u53D6\u503C/\u8D4B\u503C\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u7533\u8BF7\u7C7B\u578B</td><td${_scopeId}>EPM_DISCOUNT_POLICY_ITEM.APPLICATION_TYPE</td><td${_scopeId}>\u4E0B\u62C9\u9009\u62E9\u6846</td><td${_scopeId}>\u7533\u8BF7\u7C7B\u578B</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u5FC5\u586B\uFF1B\u6765\u6E90\u503C\u96C6AE.EPM.APPLICATION_TYPE</td></tr><tr${_scopeId}><td${_scopeId}>\u4F18\u60E0\u65B9\u5F0F</td><td${_scopeId}>EPM_DISCOUNT_POLICY_ITEM.PREFERENTIAL_TYPE</td><td${_scopeId}>\u4E0B\u62C9\u9009\u62E9\u6846</td><td${_scopeId}>\u4F18\u60E0\u65B9\u5F0F</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u5FC5\u586B\uFF1B\u6765\u6E90\u503C\u96C6AE.EPM.PREFERENTIAL_TYPE</td></tr><tr${_scopeId}><td${_scopeId}>\u65B0\u54C1</td><td${_scopeId}>EPM_DISCOUNT_POLICY_ITEM.NEW_PROD_FLAG</td><td${_scopeId}>\u6587\u672C</td><td${_scopeId}>\u65B0\u54C1\u6807\u8BC6</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u81EA\u52A8\u5E26\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>\u4EA7\u54C1\u5B9A\u4F4D</td><td${_scopeId}>EPM_DISCOUNT_POLICY_ITEM.PROD_POSITIONING</td><td${_scopeId}>\u6587\u672C</td><td${_scopeId}>\u4EA7\u54C1\u5B9A\u4F4D</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u81EA\u52A8\u5E26\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>\u96F6\u552E\u6298\u6263\u5E95\u9650</td><td${_scopeId}>EPM_DISCOUNT_POLICY_ITEM.PROD_DISCOUNT</td><td${_scopeId}>\u6587\u672C</td><td${_scopeId}>\u96F6\u552E\u6298\u6263\u5E95\u9650</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u81EA\u52A8\u5E26\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>\u5E95\u9650\u6E20\u9053</td><td${_scopeId}>EPM_DISCOUNT_POLICY_ITEM.PROD_DISC_CHANNEL</td><td${_scopeId}>\u6587\u672C</td><td${_scopeId}>\u5E95\u9650\u6E20\u9053</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u81EA\u52A8\u5E26\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>\u4EA7\u54C1\u7F16\u7801</td><td${_scopeId}>EPM_DISCOUNT_POLICY_ITEM.ITEM_CODE</td><td${_scopeId}>LOV\u5F39\u7A97</td><td${_scopeId}>\u4EA7\u54C1\u7F16\u7801</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>LOV\u7F16\u7801AE.GET_CRM_ITEM\uFF1B\u7533\u8BF7\u7C7B\u578B=1\u65F6\u5FC5\u586B\uFF1B\u7533\u8BF7\u7C7B\u578B=2/3\u65F6\u7981\u7528\uFF1B\u53C2\u6570channel/currency/divisionId/customerId</td></tr><tr${_scopeId}><td${_scopeId}>\u4EA7\u54C1\u540D\u79F0</td><td${_scopeId}>EPM_DISCOUNT_POLICY_ITEM.ITEM_NAME</td><td${_scopeId}>\u6587\u672C</td><td${_scopeId}>\u4EA7\u54C1\u540D\u79F0</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u81EA\u52A8\u5E26\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>\u4EA7\u54C1\u578B\u53F7</td><td${_scopeId}>EPM_DISCOUNT_POLICY_ITEM.ITEM_MODEL</td><td${_scopeId}>LOV\u5F39\u7A97</td><td${_scopeId}>\u4EA7\u54C1\u578B\u53F7</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>LOV\u7F16\u7801AE.GET_MODEL\uFF1B\u7533\u8BF7\u7C7B\u578B=2\u65F6\u5FC5\u586B\uFF1B\u7533\u8BF7\u7C7B\u578B=1/3\u65F6\u7981\u7528</td></tr><tr${_scopeId}><td${_scopeId}>\u751F\u547D\u5468\u671F</td><td${_scopeId}>EPM_DISCOUNT_POLICY_ITEM.SM_STATE</td><td${_scopeId}>\u6587\u672C</td><td${_scopeId}>\u4EA7\u54C1SM\u751F\u547D\u72B6\u6001</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u81EA\u52A8\u5E26\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>\u5E93\u9F84\u533A\u95F4</td><td${_scopeId}>EPM_DISCOUNT_POLICY_ITEM.STOCK_AGE_NUM_STR</td><td${_scopeId}>\u6587\u672C</td><td${_scopeId}>\u5E93\u9F84\u533A\u95F4</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u81EA\u52A8\u5E26\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>\u6708\u5E73\u5747\u52A8\u9500\u6570\u91CF</td><td${_scopeId}>EPM_DISCOUNT_POLICY_ITEM.AVG_MONTH_DYNAMIC_SALE_NUM</td><td${_scopeId}>\u6587\u672C</td><td${_scopeId}>\u6708\u5E73\u5747\u52A8\u9500\u6570\u91CF</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u7533\u8BF7\u7C7B\u578B=1\u65F6\u663E\u793A</td></tr><tr${_scopeId}><td${_scopeId}>\u5E93\u5B58\u6D88\u5316\u5468\u671F</td><td${_scopeId}>EPM_DISCOUNT_POLICY_ITEM.INVENTORY_DIGESTION_MONTHS</td><td${_scopeId}>\u6587\u672C</td><td${_scopeId}>\u5E93\u5B58\u6D88\u5316\u5468\u671F</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u7533\u8BF7\u7C7B\u578B=1\u65F6\u663E\u793A</td></tr><tr${_scopeId}><td${_scopeId}>\u8BA1\u5E7F\u544A\u8D39</td><td${_scopeId}>EPM_DISCOUNT_POLICY_ITEM.CAL_ADVERTISE_EXPENSES</td><td${_scopeId}>\u5F00\u5173</td><td${_scopeId}>\u662F\u5426\u8BA1\u5E7F\u544A\u8D39</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>trueValue=2\uFF0CfalseValue=1\uFF1B\u9ED8\u8BA41</td></tr><tr${_scopeId}><td${_scopeId}>\u8BA1\u5F00\u5355\u6298\u6263</td><td${_scopeId}>EPM_DISCOUNT_POLICY_ITEM.CAL_BILLING_DISCOUNT</td><td${_scopeId}>\u5F00\u5173</td><td${_scopeId}>\u662F\u5426\u8BA1\u5F00\u5355\u6298\u6263</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>trueValue=2\uFF0CfalseValue=1\uFF1B\u9ED8\u8BA41</td></tr><tr${_scopeId}><td${_scopeId}>\u5355\u4F4D</td><td${_scopeId}>EPM_DISCOUNT_POLICY_ITEM.UOM_NAME</td><td${_scopeId}>\u6587\u672C</td><td${_scopeId}>\u5355\u4F4D</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u81EA\u52A8\u5E26\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>\u6807\u51C6\u5355\u4EF7(\u542B\u5B89\u88C5)</td><td${_scopeId}>EPM_DISCOUNT_POLICY_ITEM.STAND_PRICE</td><td${_scopeId}>\u6570\u503C\u6846</td><td${_scopeId}>\u6807\u51C6\u5355\u4EF7(\u542B\u5B89\u88C5)</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u503C\u4E3A0\u65F6\u663E\u793A\u7A7A</td></tr><tr${_scopeId}><td${_scopeId}>\u4EA7\u54C1\u5F52\u5C5E\u6E20\u9053</td><td${_scopeId}>EPM_DISCOUNT_POLICY_ITEM.PROD_ATTRIBUTION_CHANNEL</td><td${_scopeId}>\u4E0B\u62C9\u9009\u62E9\u6846</td><td${_scopeId}>\u4EA7\u54C1\u5F52\u5C5E\u6E20\u9053</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>LOV\u7F16\u7801AE.PROD_ATTRIBUTION_CHANNEL</td></tr><tr${_scopeId}><td${_scopeId}>\u5B89\u88C5\u5355\u4EF7</td><td${_scopeId}>EPM_DISCOUNT_POLICY_ITEM.INSTALL_UNIT_PRICE</td><td${_scopeId}>\u6570\u503C\u6846</td><td${_scopeId}>\u5B89\u88C5\u5355\u4EF7</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u503C\u4E3Anull\u65F6\u53D60</td></tr><tr${_scopeId}><td${_scopeId}>\u6807\u51C6\u5355\u4EF7(\u4E0D\u542B\u5B89\u88C5)</td><td${_scopeId}>EPM_DISCOUNT_POLICY_ITEM.STANDARD_PRICE</td><td${_scopeId}>\u6570\u503C\u6846</td><td${_scopeId}>\u6807\u51C6\u5355\u4EF7(\u4E0D\u542B\u5B89\u88C5)</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u503C\u4E3A0\u65F6\u663E\u793A\u7A7A</td></tr><tr${_scopeId}><td${_scopeId}>\u6210\u672C</td><td${_scopeId}>EPM_DISCOUNT_POLICY_ITEM.ITEM_COST</td><td${_scopeId}>\u6570\u503C\u6846</td><td${_scopeId}>\u6210\u672C</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u503C\u4E3A0\u65F6\u663E\u793A\u7A7A</td></tr><tr${_scopeId}><td${_scopeId}>\u4EFB\u52A1\u8FD4\u70B9\u7387</td><td${_scopeId}>EPM_DISCOUNT_POLICY_ITEM.TASKDISCOUNT</td><td${_scopeId}>\u6587\u672C</td><td${_scopeId}>\u4EFB\u52A1\u8FD4\u70B9\u7387</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u81EA\u52A8\u5E26\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>\u653F\u7B56\u5C01\u9876\u603B\u6570\u91CF\u884C</td><td${_scopeId}>EPM_DISCOUNT_POLICY_ITEM.TOTAL_CAP_NUMBER</td><td${_scopeId}>\u6570\u503C\u6846</td><td${_scopeId}>\u653F\u7B56\u5C01\u9876\u603B\u6570\u91CF\u884C</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u503C\u4E3A0\u65F6\u663E\u793A\u7A7A\uFF1B\u7CBE\u5EA60\uFF1B\u6700\u5C0F\u503C1</td></tr><tr${_scopeId}><td${_scopeId}>\u5355\u4E2A\u7ECF\u9500\u5546\u5C01\u9876\u6570\u91CF\u6821\u9A8C</td><td${_scopeId}>EPM_DISCOUNT_POLICY_ITEM.CAPPING</td><td${_scopeId}>\u5F00\u5173</td><td${_scopeId}>\u662F\u5426\u6821\u9A8C\u5355\u4E2A\u7ECF\u9500\u5546\u5C01\u9876\u6570\u91CF</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>trueValue=2\uFF0CfalseValue=1\uFF1B\u9ED8\u8BA41</td></tr><tr${_scopeId}><td${_scopeId}>\u5355\u4E2A\u7ECF\u9500\u5546\u5C01\u9876\u6570\u91CF</td><td${_scopeId}>EPM_DISCOUNT_POLICY_ITEM.CUSTOMER_CAPS_NUMBER</td><td${_scopeId}>\u6570\u503C\u6846</td><td${_scopeId}>\u5355\u4E2A\u7ECF\u9500\u5546\u5C01\u9876\u6570\u91CF</td><td${_scopeId}>capping=2\u65F6</td><td${_scopeId}>capping=2\u65F6\u5FC5\u586B\uFF1B\u987B\u2264\u653F\u7B56\u5C01\u9876\u603B\u6570\u91CF\u884C</td></tr><tr${_scopeId}><td${_scopeId}>\u662F\u5426\u5DF2\u7EC8\u6B62</td><td${_scopeId}>EPM_DISCOUNT_POLICY_ITEM.VALID_STAT</td><td${_scopeId}>\u6587\u672C</td><td${_scopeId}>\u662F\u5426\u5DF2\u7EC8\u6B62</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u9ED8\u8BA40</td></tr></tbody></table>`);
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
                createVNode("td", null, "\u7533\u8BF7\u7C7B\u578B"),
                createVNode("td", null, "EPM_DISCOUNT_POLICY_ITEM.APPLICATION_TYPE"),
                createVNode("td", null, "\u4E0B\u62C9\u9009\u62E9\u6846"),
                createVNode("td", null, "\u7533\u8BF7\u7C7B\u578B"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u5FC5\u586B\uFF1B\u6765\u6E90\u503C\u96C6AE.EPM.APPLICATION_TYPE")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u4F18\u60E0\u65B9\u5F0F"),
                createVNode("td", null, "EPM_DISCOUNT_POLICY_ITEM.PREFERENTIAL_TYPE"),
                createVNode("td", null, "\u4E0B\u62C9\u9009\u62E9\u6846"),
                createVNode("td", null, "\u4F18\u60E0\u65B9\u5F0F"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u5FC5\u586B\uFF1B\u6765\u6E90\u503C\u96C6AE.EPM.PREFERENTIAL_TYPE")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u65B0\u54C1"),
                createVNode("td", null, "EPM_DISCOUNT_POLICY_ITEM.NEW_PROD_FLAG"),
                createVNode("td", null, "\u6587\u672C"),
                createVNode("td", null, "\u65B0\u54C1\u6807\u8BC6"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u81EA\u52A8\u5E26\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u4EA7\u54C1\u5B9A\u4F4D"),
                createVNode("td", null, "EPM_DISCOUNT_POLICY_ITEM.PROD_POSITIONING"),
                createVNode("td", null, "\u6587\u672C"),
                createVNode("td", null, "\u4EA7\u54C1\u5B9A\u4F4D"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u81EA\u52A8\u5E26\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u96F6\u552E\u6298\u6263\u5E95\u9650"),
                createVNode("td", null, "EPM_DISCOUNT_POLICY_ITEM.PROD_DISCOUNT"),
                createVNode("td", null, "\u6587\u672C"),
                createVNode("td", null, "\u96F6\u552E\u6298\u6263\u5E95\u9650"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u81EA\u52A8\u5E26\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5E95\u9650\u6E20\u9053"),
                createVNode("td", null, "EPM_DISCOUNT_POLICY_ITEM.PROD_DISC_CHANNEL"),
                createVNode("td", null, "\u6587\u672C"),
                createVNode("td", null, "\u5E95\u9650\u6E20\u9053"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u81EA\u52A8\u5E26\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u4EA7\u54C1\u7F16\u7801"),
                createVNode("td", null, "EPM_DISCOUNT_POLICY_ITEM.ITEM_CODE"),
                createVNode("td", null, "LOV\u5F39\u7A97"),
                createVNode("td", null, "\u4EA7\u54C1\u7F16\u7801"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "LOV\u7F16\u7801AE.GET_CRM_ITEM\uFF1B\u7533\u8BF7\u7C7B\u578B=1\u65F6\u5FC5\u586B\uFF1B\u7533\u8BF7\u7C7B\u578B=2/3\u65F6\u7981\u7528\uFF1B\u53C2\u6570channel/currency/divisionId/customerId")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u4EA7\u54C1\u540D\u79F0"),
                createVNode("td", null, "EPM_DISCOUNT_POLICY_ITEM.ITEM_NAME"),
                createVNode("td", null, "\u6587\u672C"),
                createVNode("td", null, "\u4EA7\u54C1\u540D\u79F0"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u81EA\u52A8\u5E26\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u4EA7\u54C1\u578B\u53F7"),
                createVNode("td", null, "EPM_DISCOUNT_POLICY_ITEM.ITEM_MODEL"),
                createVNode("td", null, "LOV\u5F39\u7A97"),
                createVNode("td", null, "\u4EA7\u54C1\u578B\u53F7"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "LOV\u7F16\u7801AE.GET_MODEL\uFF1B\u7533\u8BF7\u7C7B\u578B=2\u65F6\u5FC5\u586B\uFF1B\u7533\u8BF7\u7C7B\u578B=1/3\u65F6\u7981\u7528")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u751F\u547D\u5468\u671F"),
                createVNode("td", null, "EPM_DISCOUNT_POLICY_ITEM.SM_STATE"),
                createVNode("td", null, "\u6587\u672C"),
                createVNode("td", null, "\u4EA7\u54C1SM\u751F\u547D\u72B6\u6001"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u81EA\u52A8\u5E26\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5E93\u9F84\u533A\u95F4"),
                createVNode("td", null, "EPM_DISCOUNT_POLICY_ITEM.STOCK_AGE_NUM_STR"),
                createVNode("td", null, "\u6587\u672C"),
                createVNode("td", null, "\u5E93\u9F84\u533A\u95F4"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u81EA\u52A8\u5E26\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6708\u5E73\u5747\u52A8\u9500\u6570\u91CF"),
                createVNode("td", null, "EPM_DISCOUNT_POLICY_ITEM.AVG_MONTH_DYNAMIC_SALE_NUM"),
                createVNode("td", null, "\u6587\u672C"),
                createVNode("td", null, "\u6708\u5E73\u5747\u52A8\u9500\u6570\u91CF"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u7533\u8BF7\u7C7B\u578B=1\u65F6\u663E\u793A")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5E93\u5B58\u6D88\u5316\u5468\u671F"),
                createVNode("td", null, "EPM_DISCOUNT_POLICY_ITEM.INVENTORY_DIGESTION_MONTHS"),
                createVNode("td", null, "\u6587\u672C"),
                createVNode("td", null, "\u5E93\u5B58\u6D88\u5316\u5468\u671F"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u7533\u8BF7\u7C7B\u578B=1\u65F6\u663E\u793A")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u8BA1\u5E7F\u544A\u8D39"),
                createVNode("td", null, "EPM_DISCOUNT_POLICY_ITEM.CAL_ADVERTISE_EXPENSES"),
                createVNode("td", null, "\u5F00\u5173"),
                createVNode("td", null, "\u662F\u5426\u8BA1\u5E7F\u544A\u8D39"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "trueValue=2\uFF0CfalseValue=1\uFF1B\u9ED8\u8BA41")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u8BA1\u5F00\u5355\u6298\u6263"),
                createVNode("td", null, "EPM_DISCOUNT_POLICY_ITEM.CAL_BILLING_DISCOUNT"),
                createVNode("td", null, "\u5F00\u5173"),
                createVNode("td", null, "\u662F\u5426\u8BA1\u5F00\u5355\u6298\u6263"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "trueValue=2\uFF0CfalseValue=1\uFF1B\u9ED8\u8BA41")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5355\u4F4D"),
                createVNode("td", null, "EPM_DISCOUNT_POLICY_ITEM.UOM_NAME"),
                createVNode("td", null, "\u6587\u672C"),
                createVNode("td", null, "\u5355\u4F4D"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u81EA\u52A8\u5E26\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6807\u51C6\u5355\u4EF7(\u542B\u5B89\u88C5)"),
                createVNode("td", null, "EPM_DISCOUNT_POLICY_ITEM.STAND_PRICE"),
                createVNode("td", null, "\u6570\u503C\u6846"),
                createVNode("td", null, "\u6807\u51C6\u5355\u4EF7(\u542B\u5B89\u88C5)"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u503C\u4E3A0\u65F6\u663E\u793A\u7A7A")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u4EA7\u54C1\u5F52\u5C5E\u6E20\u9053"),
                createVNode("td", null, "EPM_DISCOUNT_POLICY_ITEM.PROD_ATTRIBUTION_CHANNEL"),
                createVNode("td", null, "\u4E0B\u62C9\u9009\u62E9\u6846"),
                createVNode("td", null, "\u4EA7\u54C1\u5F52\u5C5E\u6E20\u9053"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "LOV\u7F16\u7801AE.PROD_ATTRIBUTION_CHANNEL")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5B89\u88C5\u5355\u4EF7"),
                createVNode("td", null, "EPM_DISCOUNT_POLICY_ITEM.INSTALL_UNIT_PRICE"),
                createVNode("td", null, "\u6570\u503C\u6846"),
                createVNode("td", null, "\u5B89\u88C5\u5355\u4EF7"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u503C\u4E3Anull\u65F6\u53D60")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6807\u51C6\u5355\u4EF7(\u4E0D\u542B\u5B89\u88C5)"),
                createVNode("td", null, "EPM_DISCOUNT_POLICY_ITEM.STANDARD_PRICE"),
                createVNode("td", null, "\u6570\u503C\u6846"),
                createVNode("td", null, "\u6807\u51C6\u5355\u4EF7(\u4E0D\u542B\u5B89\u88C5)"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u503C\u4E3A0\u65F6\u663E\u793A\u7A7A")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6210\u672C"),
                createVNode("td", null, "EPM_DISCOUNT_POLICY_ITEM.ITEM_COST"),
                createVNode("td", null, "\u6570\u503C\u6846"),
                createVNode("td", null, "\u6210\u672C"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u503C\u4E3A0\u65F6\u663E\u793A\u7A7A")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u4EFB\u52A1\u8FD4\u70B9\u7387"),
                createVNode("td", null, "EPM_DISCOUNT_POLICY_ITEM.TASKDISCOUNT"),
                createVNode("td", null, "\u6587\u672C"),
                createVNode("td", null, "\u4EFB\u52A1\u8FD4\u70B9\u7387"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u81EA\u52A8\u5E26\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u653F\u7B56\u5C01\u9876\u603B\u6570\u91CF\u884C"),
                createVNode("td", null, "EPM_DISCOUNT_POLICY_ITEM.TOTAL_CAP_NUMBER"),
                createVNode("td", null, "\u6570\u503C\u6846"),
                createVNode("td", null, "\u653F\u7B56\u5C01\u9876\u603B\u6570\u91CF\u884C"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u503C\u4E3A0\u65F6\u663E\u793A\u7A7A\uFF1B\u7CBE\u5EA60\uFF1B\u6700\u5C0F\u503C1")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5355\u4E2A\u7ECF\u9500\u5546\u5C01\u9876\u6570\u91CF\u6821\u9A8C"),
                createVNode("td", null, "EPM_DISCOUNT_POLICY_ITEM.CAPPING"),
                createVNode("td", null, "\u5F00\u5173"),
                createVNode("td", null, "\u662F\u5426\u6821\u9A8C\u5355\u4E2A\u7ECF\u9500\u5546\u5C01\u9876\u6570\u91CF"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "trueValue=2\uFF0CfalseValue=1\uFF1B\u9ED8\u8BA41")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5355\u4E2A\u7ECF\u9500\u5546\u5C01\u9876\u6570\u91CF"),
                createVNode("td", null, "EPM_DISCOUNT_POLICY_ITEM.CUSTOMER_CAPS_NUMBER"),
                createVNode("td", null, "\u6570\u503C\u6846"),
                createVNode("td", null, "\u5355\u4E2A\u7ECF\u9500\u5546\u5C01\u9876\u6570\u91CF"),
                createVNode("td", null, "capping=2\u65F6"),
                createVNode("td", null, "capping=2\u65F6\u5FC5\u586B\uFF1B\u987B\u2264\u653F\u7B56\u5C01\u9876\u603B\u6570\u91CF\u884C")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u662F\u5426\u5DF2\u7EC8\u6B62"),
                createVNode("td", null, "EPM_DISCOUNT_POLICY_ITEM.VALID_STAT"),
                createVNode("td", null, "\u6587\u672C"),
                createVNode("td", null, "\u662F\u5426\u5DF2\u7EC8\u6B62"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u9ED8\u8BA40")
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, { title: "\u5176\u4ED6\u6309\u94AE" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u6309\u94AE\u540D\u79F0</th><th${_scopeId}>\u6309\u94AE\u4F5C\u7528</th><th${_scopeId}>\u6240\u5728\u4F4D\u7F6E</th><th${_scopeId}>\u663E\u9690\u6761\u4EF6/\u53EF\u70B9\u51FB\u6761\u4EF6</th><th${_scopeId}>\u5F71\u54CD</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u65B0\u5EFA</td><td${_scopeId}>\u65B0\u5EFA\u6298\u6263\u5355</td><td${_scopeId}>\u5217\u8868\u9875</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u8DF3\u8F6C\u8BE6\u60C5\u9875\u65B0\u5EFA\u6001</td></tr><tr${_scopeId}><td${_scopeId}>\u4FDD\u5B58</td><td${_scopeId}>\u4FDD\u5B58\u6298\u6263\u5355</td><td${_scopeId}>\u8BE6\u60C5\u9875</td><td${_scopeId}>\u7F16\u8F91\u6001\u663E\u793A</td><td${_scopeId}>\u4FDD\u5B58\u6298\u6263\u4FE1\u606F</td></tr><tr${_scopeId}><td${_scopeId}>\u63D0\u4EA4</td><td${_scopeId}>\u63D0\u4EA4\u5BA1\u6279</td><td${_scopeId}>\u8BE6\u60C5\u9875</td><td${_scopeId}>\u72B6\u6001\u4E3ANEW\u6216REJECTED\u65F6\u663E\u793A</td><td${_scopeId}>\u89E6\u53D1\u5DE5\u4F5C\u6D41</td></tr><tr${_scopeId}><td${_scopeId}>\u7F16\u8F91</td><td${_scopeId}>\u8FDB\u5165\u7F16\u8F91\u6001</td><td${_scopeId}>\u8BE6\u60C5\u9875</td><td${_scopeId}>\u975E\u7F16\u8F91\u6001\u4E14\u72B6\u6001\u5141\u8BB8\u65F6\u663E\u793A</td><td${_scopeId}>\u5207\u6362\u4E3A\u7F16\u8F91\u6001</td></tr><tr${_scopeId}><td${_scopeId}>\u5220\u9664</td><td${_scopeId}>\u5220\u9664\u6298\u6263\u5355</td><td${_scopeId}>\u8BE6\u60C5\u9875</td><td${_scopeId}>\u65B0\u5EFA\u72B6\u6001\u663E\u793A</td><td${_scopeId}>\u5220\u9664\u5F53\u524D\u8BB0\u5F55</td></tr></tbody></table>`);
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
                createVNode("td", null, "\u65B0\u5EFA"),
                createVNode("td", null, "\u65B0\u5EFA\u6298\u6263\u5355"),
                createVNode("td", null, "\u5217\u8868\u9875"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u8DF3\u8F6C\u8BE6\u60C5\u9875\u65B0\u5EFA\u6001")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u4FDD\u5B58"),
                createVNode("td", null, "\u4FDD\u5B58\u6298\u6263\u5355"),
                createVNode("td", null, "\u8BE6\u60C5\u9875"),
                createVNode("td", null, "\u7F16\u8F91\u6001\u663E\u793A"),
                createVNode("td", null, "\u4FDD\u5B58\u6298\u6263\u4FE1\u606F")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u63D0\u4EA4"),
                createVNode("td", null, "\u63D0\u4EA4\u5BA1\u6279"),
                createVNode("td", null, "\u8BE6\u60C5\u9875"),
                createVNode("td", null, "\u72B6\u6001\u4E3ANEW\u6216REJECTED\u65F6\u663E\u793A"),
                createVNode("td", null, "\u89E6\u53D1\u5DE5\u4F5C\u6D41")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7F16\u8F91"),
                createVNode("td", null, "\u8FDB\u5165\u7F16\u8F91\u6001"),
                createVNode("td", null, "\u8BE6\u60C5\u9875"),
                createVNode("td", null, "\u975E\u7F16\u8F91\u6001\u4E14\u72B6\u6001\u5141\u8BB8\u65F6\u663E\u793A"),
                createVNode("td", null, "\u5207\u6362\u4E3A\u7F16\u8F91\u6001")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5220\u9664"),
                createVNode("td", null, "\u5220\u9664\u6298\u6263\u5355"),
                createVNode("td", null, "\u8BE6\u60C5\u9875"),
                createVNode("td", null, "\u65B0\u5EFA\u72B6\u6001\u663E\u793A"),
                createVNode("td", null, "\u5220\u9664\u5F53\u524D\u8BB0\u5F55")
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
        _push2(`<h4${_scopeId}>\u72B6\u6001\u673A\u6D41\u8F6C\u56FE</h4><div class="language-text"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>text</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>NEW\uFF08\u65B0\u5EFA\uFF09 \u2500\u2500\u63D0\u4EA4\u2500\u2500\u2192 RUN\uFF08\u5BA1\u6279\u4E2D\uFF09 \u2500\u2500\u5BA1\u6279\u901A\u8FC7\u2500\u2500\u2192 APPROVED\uFF08\u5DF2\u5BA1\u6838\uFF09</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>                         \u2502</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>                         \u251C\u2500\u2500\u5BA1\u6838\u62D2\u7EDD\u2500\u2500\u2192 REJECTED \u2500\u2500\u63D0\u4EA4\u2500\u2500\u2192 RUN</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>                         \u2514\u2500\u2500\u64A4\u56DE\u2500\u2500\u2192 NEW</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}></span></span></code></pre></div><h4${_scopeId}>\u72B6\u6001\u673A\u5217\u8868</h4><table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u72B6\u6001\u673A\u540D\u79F0</th><th${_scopeId}>\u72B6\u6001\u91CA\u4E49</th><th${_scopeId}>\u53EF\u6267\u884C\u7684\u64CD\u4F5C</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>NEW</td><td${_scopeId}>\u65B0\u5EFA</td><td${_scopeId}>\u7F16\u8F91\u3001\u4FDD\u5B58\u3001\u63D0\u4EA4\u3001\u5220\u9664</td></tr><tr${_scopeId}><td${_scopeId}>RUN</td><td${_scopeId}>\u5BA1\u6279\u4E2D</td><td${_scopeId}>\u67E5\u770B</td></tr><tr${_scopeId}><td${_scopeId}>APPROVED</td><td${_scopeId}>\u5DF2\u5BA1\u6838</td><td${_scopeId}>\u67E5\u770B</td></tr><tr${_scopeId}><td${_scopeId}>REJECTED</td><td${_scopeId}>\u5BA1\u6838\u62D2\u7EDD</td><td${_scopeId}>\u7F16\u8F91\u3001\u4FDD\u5B58\u3001\u63D0\u4EA4</td></tr></tbody></table>`);
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "NEW\uFF08\u65B0\u5EFA\uFF09 \u2500\u2500\u63D0\u4EA4\u2500\u2500\u2192 RUN\uFF08\u5BA1\u6279\u4E2D\uFF09 \u2500\u2500\u5BA1\u6279\u901A\u8FC7\u2500\u2500\u2192 APPROVED\uFF08\u5DF2\u5BA1\u6838\uFF09")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "                         \u2502")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "                         \u251C\u2500\u2500\u5BA1\u6838\u62D2\u7EDD\u2500\u2500\u2192 REJECTED \u2500\u2500\u63D0\u4EA4\u2500\u2500\u2192 RUN")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "                         \u2514\u2500\u2500\u64A4\u56DE\u2500\u2500\u2192 NEW")
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
                createVNode("td", null, "\u65B0\u5EFA"),
                createVNode("td", null, "\u7F16\u8F91\u3001\u4FDD\u5B58\u3001\u63D0\u4EA4\u3001\u5220\u9664")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "RUN"),
                createVNode("td", null, "\u5BA1\u6279\u4E2D"),
                createVNode("td", null, "\u67E5\u770B")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "APPROVED"),
                createVNode("td", null, "\u5DF2\u5BA1\u6838"),
                createVNode("td", null, "\u67E5\u770B")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "REJECTED"),
                createVNode("td", null, "\u5BA1\u6838\u62D2\u7EDD"),
                createVNode("td", null, "\u7F16\u8F91\u3001\u4FDD\u5B58\u3001\u63D0\u4EA4")
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, { title: "\u88681\uFF1AEPM_DISCOUNT_POLICY\uFF08\u6298\u6263\u653F\u7B56\u5934\u8868\uFF09" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5B57\u6BB5\u540D</th><th${_scopeId}>\u7C7B\u578B</th><th${_scopeId}>\u91CA\u4E49</th><th${_scopeId}>\u5BF9\u5E94\u754C\u9762\u5B57\u6BB5</th><th${_scopeId}>\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>DISCOUNT_POLICY_ID</td><td${_scopeId}>NUMBER</td><td${_scopeId}>\u4E3B\u952E</td><td${_scopeId}>\u65E0\uFF08\u9690\u85CF\uFF09</td><td${_scopeId}>\u81EA\u589E\u751F\u6210</td></tr><tr${_scopeId}><td${_scopeId}>DISCOUNT_POLICY_CODE</td><td${_scopeId}>VARCHAR</td><td${_scopeId}>\u653F\u7B56\u7533\u8BF7\u7F16\u53F7</td><td${_scopeId}>\u653F\u7B56\u7533\u8BF7\u7F16\u53F7</td><td${_scopeId}>\u4FDD\u5B58\u65F6\u81EA\u52A8\u751F\u6210</td></tr><tr${_scopeId}><td${_scopeId}>DISCOUNT_POLICY_NAME</td><td${_scopeId}>VARCHAR(30)</td><td${_scopeId}>\u653F\u7B56\u540D\u79F0</td><td${_scopeId}>\u653F\u7B56\u540D\u79F0</td><td${_scopeId}>\u5FC5\u586B</td></tr><tr${_scopeId}><td${_scopeId}>HZ_APPROVE_STATUS</td><td${_scopeId}>VARCHAR</td><td${_scopeId}>\u5BA1\u6838\u72B6\u6001</td><td${_scopeId}>\u5BA1\u6838\u72B6\u6001</td><td${_scopeId}>\u9ED8\u8BA4NEW</td></tr><tr${_scopeId}><td${_scopeId}>POLICY_TYPE</td><td${_scopeId}>VARCHAR</td><td${_scopeId}>\u653F\u7B56\u7C7B\u578B</td><td${_scopeId}>\u653F\u7B56\u7C7B\u578B</td><td${_scopeId}>\u503C\u96C6AE.EPM.POLICY_TYPE</td></tr><tr${_scopeId}><td${_scopeId}>BILL_TYPE</td><td${_scopeId}>VARCHAR</td><td${_scopeId}>\u8BA2\u5355\u7C7B\u578B</td><td${_scopeId}>\u8BA2\u5355\u7C7B\u578B</td><td${_scopeId}>\u503C\u96C6AE.EPM.ORDER_CHOOSE</td></tr><tr${_scopeId}><td${_scopeId}>EFFECTIVE_DATE_START</td><td${_scopeId}>DATE</td><td${_scopeId}>\u6709\u6548\u5F00\u59CB\u65E5\u671F</td><td${_scopeId}>\u6709\u6548\u5F00\u59CB\u65E5\u671F</td><td${_scopeId}>\u5FC5\u586B</td></tr><tr${_scopeId}><td${_scopeId}>EFFECTIVE_DATE_END</td><td${_scopeId}>DATE</td><td${_scopeId}>\u6709\u6548\u7ED3\u675F\u65E5\u671F</td><td${_scopeId}>\u6709\u6548\u7ED3\u675F\u65E5\u671F</td><td${_scopeId}>\u5FC5\u586B\uFF0C&gt;\u5F00\u59CB\u65E5\u671F</td></tr><tr${_scopeId}><td${_scopeId}>NOTE</td><td${_scopeId}>VARCHAR</td><td${_scopeId}>\u653F\u7B56\u63CF\u8FF0</td><td${_scopeId}>\u653F\u7B56\u63CF\u8FF0</td><td${_scopeId}>\u5FC5\u586B</td></tr><tr${_scopeId}><td${_scopeId}>CREATION_DATE</td><td${_scopeId}>TIMESTAMP</td><td${_scopeId}>\u521B\u5EFA\u65F6\u95F4</td><td${_scopeId}>\u7533\u8BF7\u65F6\u95F4</td><td${_scopeId}>\u6846\u67B6\u81EA\u52A8\u586B\u5145</td></tr><tr${_scopeId}><td${_scopeId}>CREATED_BY</td><td${_scopeId}>NUMBER</td><td${_scopeId}>\u521B\u5EFA\u4EBA</td><td${_scopeId}>\u65E0</td><td${_scopeId}>\u6846\u67B6\u81EA\u52A8\u586B\u5145</td></tr></tbody></table>`);
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
                createVNode("td", null, "DISCOUNT_POLICY_ID"),
                createVNode("td", null, "NUMBER"),
                createVNode("td", null, "\u4E3B\u952E"),
                createVNode("td", null, "\u65E0\uFF08\u9690\u85CF\uFF09"),
                createVNode("td", null, "\u81EA\u589E\u751F\u6210")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "DISCOUNT_POLICY_CODE"),
                createVNode("td", null, "VARCHAR"),
                createVNode("td", null, "\u653F\u7B56\u7533\u8BF7\u7F16\u53F7"),
                createVNode("td", null, "\u653F\u7B56\u7533\u8BF7\u7F16\u53F7"),
                createVNode("td", null, "\u4FDD\u5B58\u65F6\u81EA\u52A8\u751F\u6210")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "DISCOUNT_POLICY_NAME"),
                createVNode("td", null, "VARCHAR(30)"),
                createVNode("td", null, "\u653F\u7B56\u540D\u79F0"),
                createVNode("td", null, "\u653F\u7B56\u540D\u79F0"),
                createVNode("td", null, "\u5FC5\u586B")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "HZ_APPROVE_STATUS"),
                createVNode("td", null, "VARCHAR"),
                createVNode("td", null, "\u5BA1\u6838\u72B6\u6001"),
                createVNode("td", null, "\u5BA1\u6838\u72B6\u6001"),
                createVNode("td", null, "\u9ED8\u8BA4NEW")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "POLICY_TYPE"),
                createVNode("td", null, "VARCHAR"),
                createVNode("td", null, "\u653F\u7B56\u7C7B\u578B"),
                createVNode("td", null, "\u653F\u7B56\u7C7B\u578B"),
                createVNode("td", null, "\u503C\u96C6AE.EPM.POLICY_TYPE")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "BILL_TYPE"),
                createVNode("td", null, "VARCHAR"),
                createVNode("td", null, "\u8BA2\u5355\u7C7B\u578B"),
                createVNode("td", null, "\u8BA2\u5355\u7C7B\u578B"),
                createVNode("td", null, "\u503C\u96C6AE.EPM.ORDER_CHOOSE")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "EFFECTIVE_DATE_START"),
                createVNode("td", null, "DATE"),
                createVNode("td", null, "\u6709\u6548\u5F00\u59CB\u65E5\u671F"),
                createVNode("td", null, "\u6709\u6548\u5F00\u59CB\u65E5\u671F"),
                createVNode("td", null, "\u5FC5\u586B")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "EFFECTIVE_DATE_END"),
                createVNode("td", null, "DATE"),
                createVNode("td", null, "\u6709\u6548\u7ED3\u675F\u65E5\u671F"),
                createVNode("td", null, "\u6709\u6548\u7ED3\u675F\u65E5\u671F"),
                createVNode("td", null, "\u5FC5\u586B\uFF0C>\u5F00\u59CB\u65E5\u671F")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "NOTE"),
                createVNode("td", null, "VARCHAR"),
                createVNode("td", null, "\u653F\u7B56\u63CF\u8FF0"),
                createVNode("td", null, "\u653F\u7B56\u63CF\u8FF0"),
                createVNode("td", null, "\u5FC5\u586B")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "CREATION_DATE"),
                createVNode("td", null, "TIMESTAMP"),
                createVNode("td", null, "\u521B\u5EFA\u65F6\u95F4"),
                createVNode("td", null, "\u7533\u8BF7\u65F6\u95F4"),
                createVNode("td", null, "\u6846\u67B6\u81EA\u52A8\u586B\u5145")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "CREATED_BY"),
                createVNode("td", null, "NUMBER"),
                createVNode("td", null, "\u521B\u5EFA\u4EBA"),
                createVNode("td", null, "\u65E0"),
                createVNode("td", null, "\u6846\u67B6\u81EA\u52A8\u586B\u5145")
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
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u62A5\u9519\u4FE1\u606F</th><th${_scopeId}>\u63D0\u793A\u8282\u70B9</th><th${_scopeId}>\u6839\u56E0\u4E0E\u89E3\u51B3\u65B9\u6848</th><th${_scopeId}>\u7B49\u7EA7</th><th${_scopeId}>\u8BE6\u7EC6\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u653F\u7B56\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A</td><td${_scopeId}>\u4FDD\u5B58</td><td${_scopeId}>\u653F\u7B56\u540D\u79F0\u672A\u586B\u5199</td><td${_scopeId}>toast\u63D0\u9192</td><td${_scopeId}>[\u67E5\u770B]</td></tr><tr${_scopeId}><td${_scopeId}>\u8BF7\u5148\u7EF4\u62A4OA\u7CFB\u7EDF\u4FE1\u606F</td><td${_scopeId}>\u63D0\u4EA4</td><td${_scopeId}>OA\u7CFB\u7EDF\u4FE1\u606F\u672A\u914D\u7F6E\u3002\u8054\u7CFB\u7BA1\u7406\u5458\u7EF4\u62A4OA\u7CFB\u7EDF\u914D\u7F6E</td><td${_scopeId}>\u9AD8</td><td${_scopeId}>[\u67E5\u770B]</td></tr><tr${_scopeId}><td${_scopeId}>\u4EA7\u54C1\u884C\u4E0D\u80FD\u4E3A\u7A7A\uFF0C\u8BF7\u68C0\u67E5\uFF01</td><td${_scopeId}>\u4FDD\u5B58/\u63D0\u4EA4</td><td${_scopeId}>\u6298\u6263\u5355\u4EA7\u54C1\u660E\u7EC6\u884CEPM_DISCOUNT_POLICY_ITEM\u4E3A\u7A7A\u3002\u9700\u7EF4\u62A4\u4EA7\u54C1\u660E\u7EC6</td><td${_scopeId}>\u9AD8</td><td${_scopeId}>[\u67E5\u770B]</td></tr><tr${_scopeId}><td${_scopeId}>\u7533\u8BF7\u7C7B\u578B\uFF1A&quot;\u5168\u4EA7\u54C1\u7C7B\u578B&quot; \u4E0E (&quot;\u578B\u53F7&quot;\u6216&quot;\u4EA7\u54C1&quot;)\u7C7B\u578B \u4E0D\u80FD\u540C\u65F6\u5B58\u5728\uFF0C\u8BF7\u68C0\u67E5\uFF01</td><td${_scopeId}>\u4FDD\u5B58</td><td${_scopeId}>\u4EA7\u54C1\u660E\u7EC6\u4E2D\u540C\u65F6\u5B58\u5728\u5168\u4EA7\u54C1\u7C7B\u578B(APPLICATION_TYPE=3)\u548C\u578B\u53F7/\u4EA7\u54C1\u7C7B\u578B\u3002\u9700\u7EDF\u4E00\u7533\u8BF7\u7C7B\u578B</td><td${_scopeId}>\u9AD8</td><td${_scopeId}>[\u67E5\u770B]</td></tr><tr${_scopeId}><td${_scopeId}>\u6298\u6263\u653F\u7B56\u540D\u79F0\u6700\u5927\u8F93\u516530\u4E2A\u5B57\u7B26</td><td${_scopeId}>\u4FDD\u5B58</td><td${_scopeId}>DISCOUNT_POLICY_NAME\u8D85\u8FC730\u5B57\u7B26\u3002\u7F29\u77ED\u653F\u7B56\u540D\u79F0</td><td${_scopeId}>\u4E2D</td><td${_scopeId}>[\u67E5\u770B]</td></tr><tr${_scopeId}><td${_scopeId}>\u4EC5\u65B0\u5EFA\u72B6\u6001\u5355\u636E\u5141\u8BB8\u5220\u9664.</td><td${_scopeId}>\u5220\u9664</td><td${_scopeId}>\u5355\u636EHZ_APPROVE_STATUS\u975ENEW\u3002\u4EC5\u65B0\u5EFA\u72B6\u6001\u53EF\u5220\u9664</td><td${_scopeId}>\u9AD8</td><td${_scopeId}>[\u67E5\u770B]</td></tr><tr${_scopeId}><td${_scopeId}>\u672A\u627E\u5230\u8BE5\u5355\u636E</td><td${_scopeId}>\u67E5\u8BE2\u8BE6\u60C5</td><td${_scopeId}>\u6309DISCOUNT_POLICY_ID\u67E5\u8BE2EPM_DISCOUNT_POLICY\u4E3A\u7A7A\u3002\u68C0\u67E5\u5355\u636EID\u6709\u6548\u6027</td><td${_scopeId}>\u9AD8</td><td${_scopeId}>[\u67E5\u770B]</td></tr><tr${_scopeId}><td${_scopeId}>\u7269\u6599\u660E\u7EC6\u4E0D\u80FD\u4E3A\u7A7A</td><td${_scopeId}>\u4FDD\u5B58</td><td${_scopeId}>\u4EA7\u54C1\u660E\u7EC6\u884C\u7269\u6599\u4FE1\u606F\u4E3A\u7A7A\u3002\u9700\u7EF4\u62A4\u7269\u6599\u660E\u7EC6</td><td${_scopeId}>\u9AD8</td><td${_scopeId}>[\u67E5\u770B]</td></tr><tr${_scopeId}><td${_scopeId}>\u8BF7\u5148\u9009\u62E9\u9500\u552E\u6E20\u9053</td><td${_scopeId}>\u65B0\u5EFA\u4EA7\u54C1\u660E\u7EC6</td><td${_scopeId}>\u5934\u8868CHANNEL\u5B57\u6BB5\u4E3A\u7A7A\u3002\u5148\u9009\u62E9\u9500\u552E\u6E20\u9053\u518D\u65B0\u589E\u4EA7\u54C1\u660E\u7EC6</td><td${_scopeId}>\u4E2D</td><td${_scopeId}>[\u67E5\u770B]</td></tr><tr${_scopeId}><td${_scopeId}>\u8BF7\u5148\u9009\u62E9\u653F\u7B56\u7C7B\u578B</td><td${_scopeId}>\u65B0\u5EFA\u4EA7\u54C1\u660E\u7EC6</td><td${_scopeId}>\u5934\u8868POLICY_TYPE\u5B57\u6BB5\u4E3A\u7A7A\u3002\u5148\u9009\u62E9\u653F\u7B56\u7C7B\u578B\u518D\u65B0\u589E\u4EA7\u54C1\u660E\u7EC6</td><td${_scopeId}>\u4E2D</td><td${_scopeId}>[\u67E5\u770B]</td></tr><tr${_scopeId}><td${_scopeId}>\u8BF7\u5148\u9009\u62E9\u5E01\u79CD</td><td${_scopeId}>\u65B0\u5EFA\u4EA7\u54C1\u660E\u7EC6</td><td${_scopeId}>\u5934\u8868CURRENCY\u5B57\u6BB5\u4E3A\u7A7A\u3002\u5148\u9009\u62E9\u5E01\u79CD\u518D\u65B0\u589E\u4EA7\u54C1\u660E\u7EC6</td><td${_scopeId}>\u4E2D</td><td${_scopeId}>[\u67E5\u770B]</td></tr><tr${_scopeId}><td${_scopeId}>\u81F3\u5C11\u9009\u62E9\u4E00\u6761\u6570\u636E</td><td${_scopeId}>\u9009\u62E9\u4EA7\u54C1LOV</td><td${_scopeId}>\u4EA7\u54C1LOV\u5F39\u7A97\u672A\u9009\u62E9\u4EFB\u4F55\u8BB0\u5F55\u3002\u9700\u81F3\u5C11\u9009\u62E9\u4E00\u6761\u4EA7\u54C1</td><td${_scopeId}>\u4E2D</td><td${_scopeId}>[\u67E5\u770B]</td></tr><tr${_scopeId}><td${_scopeId}>\u9636\u68AF\u653F\u7B56\u7684\u5C01\u9876\u6570\u91CF\u4E0D\u80FD\u5927\u4E8E\u653F\u7B56\u5C01\u9876\u603B\u6570\u91CF\u884C</td><td${_scopeId}>\u7F16\u8F91\u5C01\u9876\u6570\u91CF</td><td${_scopeId}>\u9636\u68AF\u653F\u7B56CAPPING_QTY\u5927\u4E8ETOTAL_CAP_NUMBER\u3002\u8C03\u6574\u9636\u68AF\u5C01\u9876\u6570\u91CF</td><td${_scopeId}>\u4E2D</td><td${_scopeId}>[\u67E5\u770B]</td></tr><tr${_scopeId}><td${_scopeId}>\u4EC5\u652F\u6301 .xlsx\u3001.xls \u683C\u5F0F\u6587\u4EF6</td><td${_scopeId}>\u5BFC\u5165\u4EA7\u54C1\u660E\u7EC6</td><td${_scopeId}>\u5BFC\u5165\u6587\u4EF6\u683C\u5F0F\u975Exlsx/xls\u3002\u4F7F\u7528\u6B63\u786E\u683C\u5F0F\u6587\u4EF6</td><td${_scopeId}>\u4E2D</td><td${_scopeId}>[\u67E5\u770B]</td></tr><tr${_scopeId}><td${_scopeId}>\u8BF7\u5148\u4FDD\u5B58\u5355\u636E</td><td${_scopeId}>\u5BFC\u5165\u4EA7\u54C1\u660E\u7EC6</td><td${_scopeId}>\u5355\u636E\u672A\u4FDD\u5B58\u5373\u5BFC\u5165\u4EA7\u54C1\u3002\u5148\u4FDD\u5B58\u5355\u636E\u518D\u5BFC\u5165</td><td${_scopeId}>\u4E2D</td><td${_scopeId}>[\u67E5\u770B]</td></tr></tbody></table><h4${_scopeId}>\u62A5\u95191\uFF1A\u653F\u7B56\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u4FDD\u5B58\u6298\u6263\u5355\u65F6\uFF0CDISCOUNT_POLICY_NAME\u5B57\u6BB5\u4E3A\u7A7A</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u5728\u4FDD\u5B58\u6821\u9A8C\u4E2D\u68C0\u67E5\u6298\u6263\u653F\u7B56\u5934EPM_DISCOUNT_POLICY\u7684DISCOUNT_POLICY_NAME\u5B57\u6BB5\uFF0C\u8BE5\u5B57\u6BB5\u4E3A\u5FC5\u586B\u9879(\u6570\u636E\u5E93\u5B9A\u4E49\u4E3AVARCHAR(30))\u3002\u82E5\u7528\u6237\u672A\u586B\u5199\u653F\u7B56\u540D\u79F0\u5219\u5F39\u51FAtoast\u63D0\u9192\u3002\u8BE5\u62A5\u9519\u4E3A\u524D\u7AEFtoast\u63D0\u9192\u7EA7\u522B\uFF0C\u4E0D\u963B\u65AD\u4FDD\u5B58\u6D41\u7A0B</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> edp.DISCOUNT_POLICY_ID, edp.DISCOUNT_POLICY_CODE, edp.DISCOUNT_POLICY_NAME,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         edp.HZ_APPROVE_STATUS, edp.VALID</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> EPM_DISCOUNT_POLICY edp</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> edp.CHANNEL </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>4</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (edp.DISCOUNT_POLICY_NAME </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>OR</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}>TRIM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>(edp.DISCOUNT_POLICY_NAME) </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>)</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95192\uFF1A\u8BF7\u5148\u7EF4\u62A4OA\u7CFB\u7EDF\u4FE1\u606F</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u63D0\u4EA4\u6298\u6263\u5355\u5BA1\u6279\u65F6\uFF0COA\u7CFB\u7EDF\u4FE1\u606F\u672A\u914D\u7F6E</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u5728EpmDiscountPolicyServiceImpl\u63D0\u4EA4\u65B9\u6CD5\u4E2D(line 315)\uFF0C\u63D0\u4EA4\u5BA1\u6279\u524D\u6821\u9A8COA\u7CFB\u7EDF\u914D\u7F6E\u4FE1\u606F\uFF0C\u82E5\u672A\u914D\u7F6E\u5219\u629B\u51FACommonException(&quot;\u8BF7\u5148\u7EF4\u62A4OA\u7CFB\u7EDF\u4FE1\u606F&quot;)\u3002\u8BE5\u62A5\u9519\u4E3A\u963B\u65AD\u6027\u62A5\u9519\uFF0C\u9700\u8054\u7CFB\u7BA1\u7406\u5458\u7EF4\u62A4OA\u7CFB\u7EDF\u914D\u7F6E\u540E\u91CD\u65B0\u63D0\u4EA4</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> edp.DISCOUNT_POLICY_ID, edp.DISCOUNT_POLICY_CODE, edp.HZ_APPROVE_STATUS,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         edp.CHANNEL</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> EPM_DISCOUNT_POLICY edp</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> edp.DISCOUNT_POLICY_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> :policyId</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> edp.CHANNEL </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>4</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- \u68C0\u67E5OA\u914D\u7F6E\u8868\u662F\u5426\u5B58\u5728\u8BE5\u4E8B\u4E1A\u90E8\u914D\u7F6E</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95193\uFF1A\u4EA7\u54C1\u884C\u4E0D\u80FD\u4E3A\u7A7A\uFF0C\u8BF7\u68C0\u67E5\uFF01</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u4FDD\u5B58\u6216\u63D0\u4EA4\u6298\u6263\u5355\u65F6\uFF0C\u4EA7\u54C1\u660E\u7EC6\u884CEPM_DISCOUNT_POLICY_ITEM\u4E3A\u7A7A</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u5728EpmDiscountPolicyServiceImpl\u4FDD\u5B58\u6821\u9A8C\u4E2D(line 884/888/894/1028)\uFF0C\u68C0\u67E5\u4EA7\u54C1\u660E\u7EC6\u884C\u5217\u8868\u662F\u5426\u4E3A\u7A7A\uFF0C\u82E5\u4E3A\u7A7A\u5219\u629B\u51FACommonException(&quot;\u4EA7\u54C1\u884C\u4E0D\u80FD\u4E3A\u7A7A\uFF0C\u8BF7\u68C0\u67E5\uFF01&quot;)\u3002\u9700\u5148\u7EF4\u62A4\u4EA7\u54C1\u660E\u7EC6\u884C\u540E\u518D\u4FDD\u5B58\u63D0\u4EA4</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> edp.DISCOUNT_POLICY_ID, edp.DISCOUNT_POLICY_CODE,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         (</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}>COUNT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>1</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> EPM_DISCOUNT_POLICY_ITEM edpi</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>          </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> edpi.DISCOUNT_POLICY_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> edp.DISCOUNT_POLICY_ID) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u4EA7\u54C1\u660E\u7EC6\u884C\u6570</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> EPM_DISCOUNT_POLICY edp</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> edp.DISCOUNT_POLICY_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> :policyId</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> edp.CHANNEL </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>4</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- \u671F\u671B \u4EA7\u54C1\u660E\u7EC6\u884C\u6570 &gt; 0</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95194\uFF1A\u7533\u8BF7\u7C7B\u578B\uFF1A&quot;\u5168\u4EA7\u54C1\u7C7B\u578B&quot; \u4E0E (&quot;\u578B\u53F7&quot;\u6216&quot;\u4EA7\u54C1&quot;)\u7C7B\u578B \u4E0D\u80FD\u540C\u65F6\u5B58\u5728\uFF0C\u8BF7\u68C0\u67E5\uFF01</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u4FDD\u5B58\u6298\u6263\u5355\u65F6\uFF0C\u4EA7\u54C1\u660E\u7EC6\u4E2D\u540C\u65F6\u5B58\u5728\u5168\u4EA7\u54C1\u7C7B\u578B(APPLICATION_TYPE=3)\u548C\u578B\u53F7\u7C7B\u578B(=2)\u6216\u4EA7\u54C1\u7C7B\u578B(=1)</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u5728EpmDiscountPolicyServiceImpl\u6821\u9A8C\u65B9\u6CD5\u4E2D(line 922/3436)\uFF0C\u904D\u5386\u4EA7\u54C1\u660E\u7EC6\u884C\u68C0\u67E5\u7533\u8BF7\u7C7B\u578B\uFF0C\u82E5\u540C\u65F6\u5B58\u5728\u5168\u4EA7\u54C1\u7C7B\u578B\u548C\u5176\u4ED6\u7C7B\u578B\u5219\u629B\u51FACommonException\u3002\u9700\u7EDF\u4E00\u7533\u8BF7\u7C7B\u578B\uFF0C\u5168\u4EA7\u54C1\u7C7B\u578B\u4E0D\u80FD\u4E0E\u578B\u53F7/\u4EA7\u54C1\u7C7B\u578B\u6DF7\u7528</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> edpi.DISCOUNT_POLICY_ITEM_ID, edpi.ITEM_CODE, edpi.APPLICATION_TYPE</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> EPM_DISCOUNT_POLICY_ITEM edpi</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> edpi.DISCOUNT_POLICY_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> :policyId</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> edpi.APPLICATION_TYPE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>1</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>2</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>3</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- \u68C0\u67E5\u662F\u5426\u5B58\u5728APPLICATION_TYPE=3\u4E0E\u5176\u4ED6\u7C7B\u578B\u540C\u65F6\u5B58\u5728</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95195\uFF1A\u6298\u6263\u653F\u7B56\u540D\u79F0\u6700\u5927\u8F93\u516530\u4E2A\u5B57\u7B26</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u4FDD\u5B58\u6298\u6263\u5355\u65F6\uFF0CDISCOUNT_POLICY_NAME\u5B57\u6BB5\u957F\u5EA6\u8D85\u8FC730\u4E2A\u5B57\u7B26</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u5728EpmDiscountPolicyServiceImpl\u4FDD\u5B58\u6821\u9A8C\u4E2D(line 3409)\uFF0C\u68C0\u67E5\u653F\u7B56\u540D\u79F0\u957F\u5EA6\uFF0C\u82E5\u8D85\u8FC730\u5B57\u7B26\u5219\u629B\u51FACommonException(&quot;\u6298\u6263\u653F\u7B56\u540D\u79F0\u6700\u5927\u8F93\u516530\u4E2A\u5B57\u7B26&quot;)\u3002\u9700\u7F29\u77ED\u653F\u7B56\u540D\u79F0\u81F330\u5B57\u7B26\u4EE5\u5185</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> edp.DISCOUNT_POLICY_ID, edp.DISCOUNT_POLICY_CODE, edp.DISCOUNT_POLICY_NAME,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>LENGTH</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>(edp.DISCOUNT_POLICY_NAME) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u540D\u79F0\u957F\u5EA6</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> EPM_DISCOUNT_POLICY edp</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> edp.DISCOUNT_POLICY_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> :policyId</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>LENGTH</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>(edp.DISCOUNT_POLICY_NAME) </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>30</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95196\uFF1A\u4EC5\u65B0\u5EFA\u72B6\u6001\u5355\u636E\u5141\u8BB8\u5220\u9664.</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u5220\u9664\u6298\u6263\u5355\u65F6\uFF0C\u5355\u636EHZ_APPROVE_STATUS\u975ENEW</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u5728EpmDiscountPolicyServiceImpl\u5220\u9664\u65B9\u6CD5\u4E2D(line 3776)\uFF0C\u6821\u9A8C\u5355\u636E\u72B6\u6001\u4E3ANEW\uFF0C\u5176\u4ED6\u72B6\u6001(\u5BA1\u6279\u4E2D/\u5DF2\u901A\u8FC7/\u5DF2\u62D2\u7EDD)\u4E0D\u5141\u8BB8\u5220\u9664\uFF0C\u629B\u51FACommonException(&quot;\u4EC5\u65B0\u5EFA\u72B6\u6001\u5355\u636E\u5141\u8BB8\u5220\u9664.&quot;)\u3002\u8BE5\u62A5\u9519\u4E3A\u963B\u65AD\u6027\u62A5\u9519</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> edp.DISCOUNT_POLICY_ID, edp.DISCOUNT_POLICY_CODE, edp.HZ_APPROVE_STATUS</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> EPM_DISCOUNT_POLICY edp</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> edp.DISCOUNT_POLICY_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> :policyId</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- \u671F\u671B HZ_APPROVE_STATUS = &#39;NEW&#39;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95197\uFF1A\u672A\u627E\u5230\u8BE5\u5355\u636E</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u67E5\u8BE2\u6298\u6263\u5355\u8BE6\u60C5\u65F6\uFF0C\u6309DISCOUNT_POLICY_ID\u67E5\u8BE2EPM_DISCOUNT_POLICY\u8FD4\u56DEnull</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u5728EpmDiscountPolicyServiceImpl\u8BE6\u60C5\u65B9\u6CD5\u4E2D(line 3772)\uFF0C\u6309DISCOUNT_POLICY_ID\u67E5\u8BE2\u6298\u6263\u5355\uFF0C\u82E5\u8FD4\u56DEnull\u5219\u629B\u51FACommonException(&quot;\u672A\u627E\u5230\u8BE5\u5355\u636E&quot;)\u3002\u9700\u68C0\u67E5\u5355\u636EID\u6709\u6548\u6027</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> edp.DISCOUNT_POLICY_ID, edp.DISCOUNT_POLICY_CODE, edp.HZ_APPROVE_STATUS</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> EPM_DISCOUNT_POLICY edp</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> edp.DISCOUNT_POLICY_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> :policyId</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- \u82E5\u8FD4\u56DE\u7A7A\uFF0C\u8BF4\u660E\u5355\u636E\u4E0D\u5B58\u5728</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95198\uFF1A\u7269\u6599\u660E\u7EC6\u4E0D\u80FD\u4E3A\u7A7A</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u4FDD\u5B58\u6298\u6263\u5355\u65F6\uFF0C\u4EA7\u54C1\u660E\u7EC6\u884C\u7269\u6599\u4FE1\u606F\u4E3A\u7A7A</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u5728EpmDiscountPolicyServiceImpl\u4FDD\u5B58\u6821\u9A8C\u4E2D(line 3259/3426)\uFF0C\u68C0\u67E5\u7269\u6599\u660E\u7EC6\u662F\u5426\u4E3A\u7A7A\uFF0C\u82E5\u4E3A\u7A7A\u5219\u629B\u51FACommonException(&quot;\u7269\u6599\u660E\u7EC6\u4E0D\u80FD\u4E3A\u7A7A&quot;)\u3002\u9700\u5148\u7EF4\u62A4\u7269\u6599\u660E\u7EC6\u884C</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> edpi.DISCOUNT_POLICY_ITEM_ID, edpi.ITEM_CODE, edpi.ITEM_NAME</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> EPM_DISCOUNT_POLICY_ITEM edpi</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> edpi.DISCOUNT_POLICY_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> :policyId</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (edpi.ITEM_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>OR</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}>TRIM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>(edpi.ITEM_CODE) </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>)</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95199\uFF1A\u8BF7\u5148\u9009\u62E9\u9500\u552E\u6E20\u9053</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u65B0\u5EFA\u4EA7\u54C1\u660E\u7EC6\u884C\u65F6\uFF0C\u5934\u8868CHANNEL\u5B57\u6BB5\u4E3A\u7A7A</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u5728\u524D\u7AEFSampleDiscountPolicy/views/DetailPage/index.tsx\u7684handleLineCreate\u65B9\u6CD5\u4E2D(line 1138)\uFF0C\u65B0\u5EFA\u4EA7\u54C1\u660E\u7EC6\u524D\u6821\u9A8C\u5934\u8868CHANNEL\u5B57\u6BB5\uFF0C\u82E5\u4E3A\u7A7A\u5219\u5F39\u51FAnotification.error(&quot;\u8BF7\u5148\u9009\u62E9\u9500\u552E\u6E20\u9053&quot;)\u3002\u9700\u5148\u9009\u62E9\u9500\u552E\u6E20\u9053\u518D\u65B0\u589E\u4EA7\u54C1\u660E\u7EC6</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> edp.DISCOUNT_POLICY_ID, edp.DISCOUNT_POLICY_CODE, edp.CHANNEL</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> EPM_DISCOUNT_POLICY edp</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> edp.DISCOUNT_POLICY_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> :policyId</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (edp.CHANNEL </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>OR</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> edp.CHANNEL </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>)</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u951910\uFF1A\u8BF7\u5148\u9009\u62E9\u653F\u7B56\u7C7B\u578B</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u65B0\u5EFA\u4EA7\u54C1\u660E\u7EC6\u884C\u65F6\uFF0C\u5934\u8868POLICY_TYPE\u5B57\u6BB5\u4E3A\u7A7A</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u5728\u524D\u7AEFSampleDiscountPolicy/views/DetailPage/index.tsx\u7684handleLineCreate\u65B9\u6CD5\u4E2D(line 1144)\uFF0C\u65B0\u5EFA\u4EA7\u54C1\u660E\u7EC6\u524D\u6821\u9A8C\u5934\u8868POLICY_TYPE\u5B57\u6BB5\uFF0C\u82E5\u4E3A\u7A7A\u5219\u5F39\u51FAnotification.error(&quot;\u8BF7\u5148\u9009\u62E9\u653F\u7B56\u7C7B\u578B&quot;)\u3002\u9700\u5148\u9009\u62E9\u653F\u7B56\u7C7B\u578B\u518D\u65B0\u589E\u4EA7\u54C1\u660E\u7EC6</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> edp.DISCOUNT_POLICY_ID, edp.DISCOUNT_POLICY_CODE, edp.POLICY_TYPE</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> EPM_DISCOUNT_POLICY edp</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> edp.DISCOUNT_POLICY_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> :policyId</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (edp.POLICY_TYPE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>OR</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> edp.POLICY_TYPE </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>OR</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> edp.POLICY_TYPE </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>0</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>)</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u951911\uFF1A\u8BF7\u5148\u9009\u62E9\u5E01\u79CD</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u65B0\u5EFA\u4EA7\u54C1\u660E\u7EC6\u884C\u6216\u5BFC\u5165\u4EA7\u54C1\u65F6\uFF0C\u5934\u8868CURRENCY\u5B57\u6BB5\u4E3A\u7A7A</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u5728\u524D\u7AEFSampleDiscountPolicy/views/DetailPage/index.tsx\u7684handleLineCreate\u65B9\u6CD5\u4E2D(line 1150)\u53CA\u5BFC\u5165\u6309\u94AE\u70B9\u51FB\u4E8B\u4EF6\u4E2D(line 1467)\uFF0C\u6821\u9A8C\u5934\u8868CURRENCY\u5B57\u6BB5\uFF0C\u82E5\u4E3A\u7A7A\u5219\u5F39\u51FAnotification.error(&quot;\u8BF7\u5148\u9009\u62E9\u5E01\u79CD&quot;)\u3002\u9700\u5148\u9009\u62E9\u5E01\u79CD\u518D\u65B0\u589E\u4EA7\u54C1\u660E\u7EC6\u6216\u5BFC\u5165</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> edp.DISCOUNT_POLICY_ID, edp.DISCOUNT_POLICY_CODE, edp.CURRENCY</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> EPM_DISCOUNT_POLICY edp</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> edp.DISCOUNT_POLICY_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> :policyId</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (edp.CURRENCY </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>OR</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> edp.CURRENCY </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>)</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u951912\uFF1A\u81F3\u5C11\u9009\u62E9\u4E00\u6761\u6570\u636E</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u5728\u4EA7\u54C1LOV\u5F39\u7A97\u4E2D\u9009\u62E9\u4EA7\u54C1\u65F6\uFF0C\u672A\u9009\u62E9\u4EFB\u4F55\u8BB0\u5F55\u5373\u70B9\u51FB\u786E\u5B9A</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u5728\u524D\u7AEFSampleDiscountPolicy/views/DetailPage/index.tsx\u7684\u4EA7\u54C1LOV\u5F39\u7A97onOk\u56DE\u8C03\u4E2D(line 587)\uFF0C\u6821\u9A8CproductLovDs.selected\u662F\u5426\u4E3A\u7A7A\uFF0C\u82E5\u4E3A\u7A7A\u5219\u5F39\u51FAnotification.error(&quot;\u81F3\u5C11\u9009\u62E9\u4E00\u6761\u6570\u636E&quot;)\u3002\u9700\u81F3\u5C11\u9009\u62E9\u4E00\u6761\u4EA7\u54C1\u8BB0\u5F55</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- \u524D\u7AEF\u6821\u9A8C\uFF0C\u65E0\u5BF9\u5E94SQL</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> edp.DISCOUNT_POLICY_ID, edp.DISCOUNT_POLICY_CODE</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> EPM_DISCOUNT_POLICY edp</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> edp.DISCOUNT_POLICY_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> :policyId</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u951913\uFF1A\u9636\u68AF\u653F\u7B56\u7684\u5C01\u9876\u6570\u91CF\u4E0D\u80FD\u5927\u4E8E\u653F\u7B56\u5C01\u9876\u603B\u6570\u91CF\u884C</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u7F16\u8F91\u9636\u68AF\u653F\u7B56\u5C01\u9876\u6570\u91CF\u65F6\uFF0C\u9636\u68AFCAPPING_QTY\u5927\u4E8E\u653F\u7B56\u5C01\u9876\u603B\u6570\u91CF\u884CTOTAL_CAP_NUMBER</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u5728\u524D\u7AEFSampleDiscountPolicy/views/DetailPage/index.tsx\u7684totalCapNumberChange\u65B9\u6CD5\u4E2D(line 235)\uFF0C\u53D8\u66F4\u5C01\u9876\u6570\u91CF\u65F6\u6821\u9A8C\u9636\u68AF\u5C01\u9876\u6570\u91CF\u662F\u5426\u5927\u4E8E\u653F\u7B56\u5C01\u9876\u603B\u6570\u91CF\u884C\uFF0C\u82E5\u5927\u4E8E\u5219\u5F39\u51FAnotification.error\u5E76\u6062\u590D\u65E7\u503C\u3002\u9700\u8C03\u6574\u9636\u68AF\u5C01\u9876\u6570\u91CF\u4F7F\u5176\u4E0D\u8D85\u8FC7\u653F\u7B56\u5C01\u9876\u603B\u6570\u91CF\u884C</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> edpi.DISCOUNT_POLICY_ITEM_ID, edpi.ITEM_CODE, edpi.TOTAL_CAP_NUMBER,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         edpil.CAPPING_QTY</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> EPM_DISCOUNT_POLICY_ITEM edpi</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>LEFT JOIN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> EPM_DISCOUNT_POLICY_ITEM_LINE edpil</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ON</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> edpi.DISCOUNT_POLICY_ITEM_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> edpil.DISCOUNT_POLICY_ITEM_ID</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> edpi.DISCOUNT_POLICY_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> :policyId</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> edpil.CAPPING_QTY </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> edpi.TOTAL_CAP_NUMBER</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u951914\uFF1A\u4EC5\u652F\u6301 .xlsx\u3001.xls \u683C\u5F0F\u6587\u4EF6</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u5BFC\u5165\u4EA7\u54C1\u660E\u7EC6\u65F6\uFF0C\u4E0A\u4F20\u6587\u4EF6\u683C\u5F0F\u975Exlsx/xls</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u5728\u524D\u7AEFSampleDiscountPolicy/views/DetailPage/index.tsx\u7684\u5BFC\u5165\u6587\u4EF6\u6821\u9A8C\u4E2D(line 1186)\uFF0C\u68C0\u67E5\u6587\u4EF6\u540E\u7F00\u540D\uFF0C\u82E5\u975Exlsx/xls\u683C\u5F0F\u5219\u5F39\u51FAnotification.error(&quot;\u4EC5\u652F\u6301 .xlsx\u3001.xls \u683C\u5F0F\u6587\u4EF6&quot;)\u3002\u9700\u4F7F\u7528\u6B63\u786E\u683C\u5F0F\u7684\u6587\u4EF6</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- \u524D\u7AEF\u6587\u4EF6\u683C\u5F0F\u6821\u9A8C\uFF0C\u65E0\u5BF9\u5E94SQL</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> edp.DISCOUNT_POLICY_ID, edp.DISCOUNT_POLICY_CODE</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> EPM_DISCOUNT_POLICY edp</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> edp.DISCOUNT_POLICY_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> :policyId</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u951915\uFF1A\u8BF7\u5148\u4FDD\u5B58\u5355\u636E</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u5BFC\u5165\u4EA7\u54C1\u660E\u7EC6\u65F6\uFF0C\u5355\u636E\u672A\u4FDD\u5B58(\u65E0DISCOUNT_POLICY_ID)</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u5728\u524D\u7AEFSampleDiscountPolicy/views/DetailPage/index.tsx\u7684\u5BFC\u5165\u65B9\u6CD5\u4E2D(line 1089/1202)\uFF0C\u6821\u9A8C\u5355\u636E\u662F\u5426\u5DF2\u4FDD\u5B58\uFF0C\u82E5\u672A\u4FDD\u5B58\u5219\u5F39\u51FAnotification.error(&quot;\u8BF7\u5148\u4FDD\u5B58\u5355\u636E&quot;)\u3002\u9700\u5148\u4FDD\u5B58\u5355\u636E\u518D\u5BFC\u5165\u4EA7\u54C1\u660E\u7EC6</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> edp.DISCOUNT_POLICY_ID, edp.DISCOUNT_POLICY_CODE, edp.HZ_APPROVE_STATUS</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> EPM_DISCOUNT_POLICY edp</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> edp.DISCOUNT_POLICY_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> :policyId</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- \u82E5\u8FD4\u56DE\u7A7A\uFF0C\u8BF4\u660E\u5355\u636E\u672A\u4FDD\u5B58</span></span>
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
                createVNode("td", null, "\u653F\u7B56\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A"),
                createVNode("td", null, "\u4FDD\u5B58"),
                createVNode("td", null, "\u653F\u7B56\u540D\u79F0\u672A\u586B\u5199"),
                createVNode("td", null, "toast\u63D0\u9192"),
                createVNode("td", null, "[\u67E5\u770B]")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u8BF7\u5148\u7EF4\u62A4OA\u7CFB\u7EDF\u4FE1\u606F"),
                createVNode("td", null, "\u63D0\u4EA4"),
                createVNode("td", null, "OA\u7CFB\u7EDF\u4FE1\u606F\u672A\u914D\u7F6E\u3002\u8054\u7CFB\u7BA1\u7406\u5458\u7EF4\u62A4OA\u7CFB\u7EDF\u914D\u7F6E"),
                createVNode("td", null, "\u9AD8"),
                createVNode("td", null, "[\u67E5\u770B]")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u4EA7\u54C1\u884C\u4E0D\u80FD\u4E3A\u7A7A\uFF0C\u8BF7\u68C0\u67E5\uFF01"),
                createVNode("td", null, "\u4FDD\u5B58/\u63D0\u4EA4"),
                createVNode("td", null, "\u6298\u6263\u5355\u4EA7\u54C1\u660E\u7EC6\u884CEPM_DISCOUNT_POLICY_ITEM\u4E3A\u7A7A\u3002\u9700\u7EF4\u62A4\u4EA7\u54C1\u660E\u7EC6"),
                createVNode("td", null, "\u9AD8"),
                createVNode("td", null, "[\u67E5\u770B]")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, '\u7533\u8BF7\u7C7B\u578B\uFF1A"\u5168\u4EA7\u54C1\u7C7B\u578B" \u4E0E ("\u578B\u53F7"\u6216"\u4EA7\u54C1")\u7C7B\u578B \u4E0D\u80FD\u540C\u65F6\u5B58\u5728\uFF0C\u8BF7\u68C0\u67E5\uFF01'),
                createVNode("td", null, "\u4FDD\u5B58"),
                createVNode("td", null, "\u4EA7\u54C1\u660E\u7EC6\u4E2D\u540C\u65F6\u5B58\u5728\u5168\u4EA7\u54C1\u7C7B\u578B(APPLICATION_TYPE=3)\u548C\u578B\u53F7/\u4EA7\u54C1\u7C7B\u578B\u3002\u9700\u7EDF\u4E00\u7533\u8BF7\u7C7B\u578B"),
                createVNode("td", null, "\u9AD8"),
                createVNode("td", null, "[\u67E5\u770B]")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6298\u6263\u653F\u7B56\u540D\u79F0\u6700\u5927\u8F93\u516530\u4E2A\u5B57\u7B26"),
                createVNode("td", null, "\u4FDD\u5B58"),
                createVNode("td", null, "DISCOUNT_POLICY_NAME\u8D85\u8FC730\u5B57\u7B26\u3002\u7F29\u77ED\u653F\u7B56\u540D\u79F0"),
                createVNode("td", null, "\u4E2D"),
                createVNode("td", null, "[\u67E5\u770B]")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u4EC5\u65B0\u5EFA\u72B6\u6001\u5355\u636E\u5141\u8BB8\u5220\u9664."),
                createVNode("td", null, "\u5220\u9664"),
                createVNode("td", null, "\u5355\u636EHZ_APPROVE_STATUS\u975ENEW\u3002\u4EC5\u65B0\u5EFA\u72B6\u6001\u53EF\u5220\u9664"),
                createVNode("td", null, "\u9AD8"),
                createVNode("td", null, "[\u67E5\u770B]")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u672A\u627E\u5230\u8BE5\u5355\u636E"),
                createVNode("td", null, "\u67E5\u8BE2\u8BE6\u60C5"),
                createVNode("td", null, "\u6309DISCOUNT_POLICY_ID\u67E5\u8BE2EPM_DISCOUNT_POLICY\u4E3A\u7A7A\u3002\u68C0\u67E5\u5355\u636EID\u6709\u6548\u6027"),
                createVNode("td", null, "\u9AD8"),
                createVNode("td", null, "[\u67E5\u770B]")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7269\u6599\u660E\u7EC6\u4E0D\u80FD\u4E3A\u7A7A"),
                createVNode("td", null, "\u4FDD\u5B58"),
                createVNode("td", null, "\u4EA7\u54C1\u660E\u7EC6\u884C\u7269\u6599\u4FE1\u606F\u4E3A\u7A7A\u3002\u9700\u7EF4\u62A4\u7269\u6599\u660E\u7EC6"),
                createVNode("td", null, "\u9AD8"),
                createVNode("td", null, "[\u67E5\u770B]")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u8BF7\u5148\u9009\u62E9\u9500\u552E\u6E20\u9053"),
                createVNode("td", null, "\u65B0\u5EFA\u4EA7\u54C1\u660E\u7EC6"),
                createVNode("td", null, "\u5934\u8868CHANNEL\u5B57\u6BB5\u4E3A\u7A7A\u3002\u5148\u9009\u62E9\u9500\u552E\u6E20\u9053\u518D\u65B0\u589E\u4EA7\u54C1\u660E\u7EC6"),
                createVNode("td", null, "\u4E2D"),
                createVNode("td", null, "[\u67E5\u770B]")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u8BF7\u5148\u9009\u62E9\u653F\u7B56\u7C7B\u578B"),
                createVNode("td", null, "\u65B0\u5EFA\u4EA7\u54C1\u660E\u7EC6"),
                createVNode("td", null, "\u5934\u8868POLICY_TYPE\u5B57\u6BB5\u4E3A\u7A7A\u3002\u5148\u9009\u62E9\u653F\u7B56\u7C7B\u578B\u518D\u65B0\u589E\u4EA7\u54C1\u660E\u7EC6"),
                createVNode("td", null, "\u4E2D"),
                createVNode("td", null, "[\u67E5\u770B]")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u8BF7\u5148\u9009\u62E9\u5E01\u79CD"),
                createVNode("td", null, "\u65B0\u5EFA\u4EA7\u54C1\u660E\u7EC6"),
                createVNode("td", null, "\u5934\u8868CURRENCY\u5B57\u6BB5\u4E3A\u7A7A\u3002\u5148\u9009\u62E9\u5E01\u79CD\u518D\u65B0\u589E\u4EA7\u54C1\u660E\u7EC6"),
                createVNode("td", null, "\u4E2D"),
                createVNode("td", null, "[\u67E5\u770B]")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u81F3\u5C11\u9009\u62E9\u4E00\u6761\u6570\u636E"),
                createVNode("td", null, "\u9009\u62E9\u4EA7\u54C1LOV"),
                createVNode("td", null, "\u4EA7\u54C1LOV\u5F39\u7A97\u672A\u9009\u62E9\u4EFB\u4F55\u8BB0\u5F55\u3002\u9700\u81F3\u5C11\u9009\u62E9\u4E00\u6761\u4EA7\u54C1"),
                createVNode("td", null, "\u4E2D"),
                createVNode("td", null, "[\u67E5\u770B]")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u9636\u68AF\u653F\u7B56\u7684\u5C01\u9876\u6570\u91CF\u4E0D\u80FD\u5927\u4E8E\u653F\u7B56\u5C01\u9876\u603B\u6570\u91CF\u884C"),
                createVNode("td", null, "\u7F16\u8F91\u5C01\u9876\u6570\u91CF"),
                createVNode("td", null, "\u9636\u68AF\u653F\u7B56CAPPING_QTY\u5927\u4E8ETOTAL_CAP_NUMBER\u3002\u8C03\u6574\u9636\u68AF\u5C01\u9876\u6570\u91CF"),
                createVNode("td", null, "\u4E2D"),
                createVNode("td", null, "[\u67E5\u770B]")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u4EC5\u652F\u6301 .xlsx\u3001.xls \u683C\u5F0F\u6587\u4EF6"),
                createVNode("td", null, "\u5BFC\u5165\u4EA7\u54C1\u660E\u7EC6"),
                createVNode("td", null, "\u5BFC\u5165\u6587\u4EF6\u683C\u5F0F\u975Exlsx/xls\u3002\u4F7F\u7528\u6B63\u786E\u683C\u5F0F\u6587\u4EF6"),
                createVNode("td", null, "\u4E2D"),
                createVNode("td", null, "[\u67E5\u770B]")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u8BF7\u5148\u4FDD\u5B58\u5355\u636E"),
                createVNode("td", null, "\u5BFC\u5165\u4EA7\u54C1\u660E\u7EC6"),
                createVNode("td", null, "\u5355\u636E\u672A\u4FDD\u5B58\u5373\u5BFC\u5165\u4EA7\u54C1\u3002\u5148\u4FDD\u5B58\u5355\u636E\u518D\u5BFC\u5165"),
                createVNode("td", null, "\u4E2D"),
                createVNode("td", null, "[\u67E5\u770B]")
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95191\uFF1A\u653F\u7B56\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u4FDD\u5B58\u6298\u6263\u5355\u65F6\uFF0CDISCOUNT_POLICY_NAME\u5B57\u6BB5\u4E3A\u7A7A")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u5728\u4FDD\u5B58\u6821\u9A8C\u4E2D\u68C0\u67E5\u6298\u6263\u653F\u7B56\u5934EPM_DISCOUNT_POLICY\u7684DISCOUNT_POLICY_NAME\u5B57\u6BB5\uFF0C\u8BE5\u5B57\u6BB5\u4E3A\u5FC5\u586B\u9879(\u6570\u636E\u5E93\u5B9A\u4E49\u4E3AVARCHAR(30))\u3002\u82E5\u7528\u6237\u672A\u586B\u5199\u653F\u7B56\u540D\u79F0\u5219\u5F39\u51FAtoast\u63D0\u9192\u3002\u8BE5\u62A5\u9519\u4E3A\u524D\u7AEFtoast\u63D0\u9192\u7EA7\u522B\uFF0C\u4E0D\u963B\u65AD\u4FDD\u5B58\u6D41\u7A0B")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " edp.DISCOUNT_POLICY_ID, edp.DISCOUNT_POLICY_CODE, edp.DISCOUNT_POLICY_NAME,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         edp.HZ_APPROVE_STATUS, edp.VALID")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " EPM_DISCOUNT_POLICY edp")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " edp.CHANNEL "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "4")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " (edp.DISCOUNT_POLICY_NAME "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NULL"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "OR"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#82AAFF" } }, "TRIM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "(edp.DISCOUNT_POLICY_NAME) "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "''"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ")")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95192\uFF1A\u8BF7\u5148\u7EF4\u62A4OA\u7CFB\u7EDF\u4FE1\u606F"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u63D0\u4EA4\u6298\u6263\u5355\u5BA1\u6279\u65F6\uFF0COA\u7CFB\u7EDF\u4FE1\u606F\u672A\u914D\u7F6E")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode('\uFF1A\u5728EpmDiscountPolicyServiceImpl\u63D0\u4EA4\u65B9\u6CD5\u4E2D(line 315)\uFF0C\u63D0\u4EA4\u5BA1\u6279\u524D\u6821\u9A8COA\u7CFB\u7EDF\u914D\u7F6E\u4FE1\u606F\uFF0C\u82E5\u672A\u914D\u7F6E\u5219\u629B\u51FACommonException("\u8BF7\u5148\u7EF4\u62A4OA\u7CFB\u7EDF\u4FE1\u606F")\u3002\u8BE5\u62A5\u9519\u4E3A\u963B\u65AD\u6027\u62A5\u9519\uFF0C\u9700\u8054\u7CFB\u7BA1\u7406\u5458\u7EF4\u62A4OA\u7CFB\u7EDF\u914D\u7F6E\u540E\u91CD\u65B0\u63D0\u4EA4')
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " edp.DISCOUNT_POLICY_ID, edp.DISCOUNT_POLICY_CODE, edp.HZ_APPROVE_STATUS,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         edp.CHANNEL")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " EPM_DISCOUNT_POLICY edp")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " edp.DISCOUNT_POLICY_ID "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " :policyId")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " edp.CHANNEL "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "4")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#89DDFF" } }, "  "),
                  createVNode("span", { style: { "color": "#676E95" } }, "-- \u68C0\u67E5OA\u914D\u7F6E\u8868\u662F\u5426\u5B58\u5728\u8BE5\u4E8B\u4E1A\u90E8\u914D\u7F6E")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95193\uFF1A\u4EA7\u54C1\u884C\u4E0D\u80FD\u4E3A\u7A7A\uFF0C\u8BF7\u68C0\u67E5\uFF01"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u4FDD\u5B58\u6216\u63D0\u4EA4\u6298\u6263\u5355\u65F6\uFF0C\u4EA7\u54C1\u660E\u7EC6\u884CEPM_DISCOUNT_POLICY_ITEM\u4E3A\u7A7A")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode('\uFF1A\u5728EpmDiscountPolicyServiceImpl\u4FDD\u5B58\u6821\u9A8C\u4E2D(line 884/888/894/1028)\uFF0C\u68C0\u67E5\u4EA7\u54C1\u660E\u7EC6\u884C\u5217\u8868\u662F\u5426\u4E3A\u7A7A\uFF0C\u82E5\u4E3A\u7A7A\u5219\u629B\u51FACommonException("\u4EA7\u54C1\u884C\u4E0D\u80FD\u4E3A\u7A7A\uFF0C\u8BF7\u68C0\u67E5\uFF01")\u3002\u9700\u5148\u7EF4\u62A4\u4EA7\u54C1\u660E\u7EC6\u884C\u540E\u518D\u4FDD\u5B58\u63D0\u4EA4')
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " edp.DISCOUNT_POLICY_ID, edp.DISCOUNT_POLICY_CODE,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         ("),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "SELECT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#82AAFF" } }, "COUNT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "("),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "1"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " EPM_DISCOUNT_POLICY_ITEM edpi")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "          "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " edpi.DISCOUNT_POLICY_ID "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " edp.DISCOUNT_POLICY_ID) "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u4EA7\u54C1\u660E\u7EC6\u884C\u6570")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " EPM_DISCOUNT_POLICY edp")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " edp.DISCOUNT_POLICY_ID "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " :policyId")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " edp.CHANNEL "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "4")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#89DDFF" } }, "  "),
                  createVNode("span", { style: { "color": "#676E95" } }, "-- \u671F\u671B \u4EA7\u54C1\u660E\u7EC6\u884C\u6570 > 0")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, '\u62A5\u95194\uFF1A\u7533\u8BF7\u7C7B\u578B\uFF1A"\u5168\u4EA7\u54C1\u7C7B\u578B" \u4E0E ("\u578B\u53F7"\u6216"\u4EA7\u54C1")\u7C7B\u578B \u4E0D\u80FD\u540C\u65F6\u5B58\u5728\uFF0C\u8BF7\u68C0\u67E5\uFF01'),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u4FDD\u5B58\u6298\u6263\u5355\u65F6\uFF0C\u4EA7\u54C1\u660E\u7EC6\u4E2D\u540C\u65F6\u5B58\u5728\u5168\u4EA7\u54C1\u7C7B\u578B(APPLICATION_TYPE=3)\u548C\u578B\u53F7\u7C7B\u578B(=2)\u6216\u4EA7\u54C1\u7C7B\u578B(=1)")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u5728EpmDiscountPolicyServiceImpl\u6821\u9A8C\u65B9\u6CD5\u4E2D(line 922/3436)\uFF0C\u904D\u5386\u4EA7\u54C1\u660E\u7EC6\u884C\u68C0\u67E5\u7533\u8BF7\u7C7B\u578B\uFF0C\u82E5\u540C\u65F6\u5B58\u5728\u5168\u4EA7\u54C1\u7C7B\u578B\u548C\u5176\u4ED6\u7C7B\u578B\u5219\u629B\u51FACommonException\u3002\u9700\u7EDF\u4E00\u7533\u8BF7\u7C7B\u578B\uFF0C\u5168\u4EA7\u54C1\u7C7B\u578B\u4E0D\u80FD\u4E0E\u578B\u53F7/\u4EA7\u54C1\u7C7B\u578B\u6DF7\u7528")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " edpi.DISCOUNT_POLICY_ITEM_ID, edpi.ITEM_CODE, edpi.APPLICATION_TYPE")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " EPM_DISCOUNT_POLICY_ITEM edpi")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " edpi.DISCOUNT_POLICY_ID "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " :policyId")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " edpi.APPLICATION_TYPE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IN"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " ("),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "1"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ", "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "2"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ", "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "3"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ")")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#89DDFF" } }, "  "),
                  createVNode("span", { style: { "color": "#676E95" } }, "-- \u68C0\u67E5\u662F\u5426\u5B58\u5728APPLICATION_TYPE=3\u4E0E\u5176\u4ED6\u7C7B\u578B\u540C\u65F6\u5B58\u5728")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95195\uFF1A\u6298\u6263\u653F\u7B56\u540D\u79F0\u6700\u5927\u8F93\u516530\u4E2A\u5B57\u7B26"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u4FDD\u5B58\u6298\u6263\u5355\u65F6\uFF0CDISCOUNT_POLICY_NAME\u5B57\u6BB5\u957F\u5EA6\u8D85\u8FC730\u4E2A\u5B57\u7B26")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode('\uFF1A\u5728EpmDiscountPolicyServiceImpl\u4FDD\u5B58\u6821\u9A8C\u4E2D(line 3409)\uFF0C\u68C0\u67E5\u653F\u7B56\u540D\u79F0\u957F\u5EA6\uFF0C\u82E5\u8D85\u8FC730\u5B57\u7B26\u5219\u629B\u51FACommonException("\u6298\u6263\u653F\u7B56\u540D\u79F0\u6700\u5927\u8F93\u516530\u4E2A\u5B57\u7B26")\u3002\u9700\u7F29\u77ED\u653F\u7B56\u540D\u79F0\u81F330\u5B57\u7B26\u4EE5\u5185')
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " edp.DISCOUNT_POLICY_ID, edp.DISCOUNT_POLICY_CODE, edp.DISCOUNT_POLICY_NAME,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "LENGTH"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "(edp.DISCOUNT_POLICY_NAME) "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u540D\u79F0\u957F\u5EA6")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " EPM_DISCOUNT_POLICY edp")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " edp.DISCOUNT_POLICY_ID "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " :policyId")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "LENGTH"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "(edp.DISCOUNT_POLICY_NAME) "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "30")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95196\uFF1A\u4EC5\u65B0\u5EFA\u72B6\u6001\u5355\u636E\u5141\u8BB8\u5220\u9664."),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u5220\u9664\u6298\u6263\u5355\u65F6\uFF0C\u5355\u636EHZ_APPROVE_STATUS\u975ENEW")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode('\uFF1A\u5728EpmDiscountPolicyServiceImpl\u5220\u9664\u65B9\u6CD5\u4E2D(line 3776)\uFF0C\u6821\u9A8C\u5355\u636E\u72B6\u6001\u4E3ANEW\uFF0C\u5176\u4ED6\u72B6\u6001(\u5BA1\u6279\u4E2D/\u5DF2\u901A\u8FC7/\u5DF2\u62D2\u7EDD)\u4E0D\u5141\u8BB8\u5220\u9664\uFF0C\u629B\u51FACommonException("\u4EC5\u65B0\u5EFA\u72B6\u6001\u5355\u636E\u5141\u8BB8\u5220\u9664.")\u3002\u8BE5\u62A5\u9519\u4E3A\u963B\u65AD\u6027\u62A5\u9519')
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " edp.DISCOUNT_POLICY_ID, edp.DISCOUNT_POLICY_CODE, edp.HZ_APPROVE_STATUS")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " EPM_DISCOUNT_POLICY edp")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " edp.DISCOUNT_POLICY_ID "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " :policyId")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#89DDFF" } }, "  "),
                  createVNode("span", { style: { "color": "#676E95" } }, "-- \u671F\u671B HZ_APPROVE_STATUS = 'NEW'")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95197\uFF1A\u672A\u627E\u5230\u8BE5\u5355\u636E"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u67E5\u8BE2\u6298\u6263\u5355\u8BE6\u60C5\u65F6\uFF0C\u6309DISCOUNT_POLICY_ID\u67E5\u8BE2EPM_DISCOUNT_POLICY\u8FD4\u56DEnull")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode('\uFF1A\u5728EpmDiscountPolicyServiceImpl\u8BE6\u60C5\u65B9\u6CD5\u4E2D(line 3772)\uFF0C\u6309DISCOUNT_POLICY_ID\u67E5\u8BE2\u6298\u6263\u5355\uFF0C\u82E5\u8FD4\u56DEnull\u5219\u629B\u51FACommonException("\u672A\u627E\u5230\u8BE5\u5355\u636E")\u3002\u9700\u68C0\u67E5\u5355\u636EID\u6709\u6548\u6027')
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " edp.DISCOUNT_POLICY_ID, edp.DISCOUNT_POLICY_CODE, edp.HZ_APPROVE_STATUS")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " EPM_DISCOUNT_POLICY edp")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " edp.DISCOUNT_POLICY_ID "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " :policyId")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#89DDFF" } }, "  "),
                  createVNode("span", { style: { "color": "#676E95" } }, "-- \u82E5\u8FD4\u56DE\u7A7A\uFF0C\u8BF4\u660E\u5355\u636E\u4E0D\u5B58\u5728")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95198\uFF1A\u7269\u6599\u660E\u7EC6\u4E0D\u80FD\u4E3A\u7A7A"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u4FDD\u5B58\u6298\u6263\u5355\u65F6\uFF0C\u4EA7\u54C1\u660E\u7EC6\u884C\u7269\u6599\u4FE1\u606F\u4E3A\u7A7A")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode('\uFF1A\u5728EpmDiscountPolicyServiceImpl\u4FDD\u5B58\u6821\u9A8C\u4E2D(line 3259/3426)\uFF0C\u68C0\u67E5\u7269\u6599\u660E\u7EC6\u662F\u5426\u4E3A\u7A7A\uFF0C\u82E5\u4E3A\u7A7A\u5219\u629B\u51FACommonException("\u7269\u6599\u660E\u7EC6\u4E0D\u80FD\u4E3A\u7A7A")\u3002\u9700\u5148\u7EF4\u62A4\u7269\u6599\u660E\u7EC6\u884C')
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " edpi.DISCOUNT_POLICY_ITEM_ID, edpi.ITEM_CODE, edpi.ITEM_NAME")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " EPM_DISCOUNT_POLICY_ITEM edpi")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " edpi.DISCOUNT_POLICY_ID "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " :policyId")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " (edpi.ITEM_CODE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NULL"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "OR"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#82AAFF" } }, "TRIM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "(edpi.ITEM_CODE) "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "''"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ")")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95199\uFF1A\u8BF7\u5148\u9009\u62E9\u9500\u552E\u6E20\u9053"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u65B0\u5EFA\u4EA7\u54C1\u660E\u7EC6\u884C\u65F6\uFF0C\u5934\u8868CHANNEL\u5B57\u6BB5\u4E3A\u7A7A")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode('\uFF1A\u5728\u524D\u7AEFSampleDiscountPolicy/views/DetailPage/index.tsx\u7684handleLineCreate\u65B9\u6CD5\u4E2D(line 1138)\uFF0C\u65B0\u5EFA\u4EA7\u54C1\u660E\u7EC6\u524D\u6821\u9A8C\u5934\u8868CHANNEL\u5B57\u6BB5\uFF0C\u82E5\u4E3A\u7A7A\u5219\u5F39\u51FAnotification.error("\u8BF7\u5148\u9009\u62E9\u9500\u552E\u6E20\u9053")\u3002\u9700\u5148\u9009\u62E9\u9500\u552E\u6E20\u9053\u518D\u65B0\u589E\u4EA7\u54C1\u660E\u7EC6')
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " edp.DISCOUNT_POLICY_ID, edp.DISCOUNT_POLICY_CODE, edp.CHANNEL")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " EPM_DISCOUNT_POLICY edp")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " edp.DISCOUNT_POLICY_ID "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " :policyId")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " (edp.CHANNEL "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NULL"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "OR"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " edp.CHANNEL "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "''"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ")")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u951910\uFF1A\u8BF7\u5148\u9009\u62E9\u653F\u7B56\u7C7B\u578B"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u65B0\u5EFA\u4EA7\u54C1\u660E\u7EC6\u884C\u65F6\uFF0C\u5934\u8868POLICY_TYPE\u5B57\u6BB5\u4E3A\u7A7A")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode('\uFF1A\u5728\u524D\u7AEFSampleDiscountPolicy/views/DetailPage/index.tsx\u7684handleLineCreate\u65B9\u6CD5\u4E2D(line 1144)\uFF0C\u65B0\u5EFA\u4EA7\u54C1\u660E\u7EC6\u524D\u6821\u9A8C\u5934\u8868POLICY_TYPE\u5B57\u6BB5\uFF0C\u82E5\u4E3A\u7A7A\u5219\u5F39\u51FAnotification.error("\u8BF7\u5148\u9009\u62E9\u653F\u7B56\u7C7B\u578B")\u3002\u9700\u5148\u9009\u62E9\u653F\u7B56\u7C7B\u578B\u518D\u65B0\u589E\u4EA7\u54C1\u660E\u7EC6')
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " edp.DISCOUNT_POLICY_ID, edp.DISCOUNT_POLICY_CODE, edp.POLICY_TYPE")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " EPM_DISCOUNT_POLICY edp")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " edp.DISCOUNT_POLICY_ID "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " :policyId")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " (edp.POLICY_TYPE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NULL"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "OR"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " edp.POLICY_TYPE "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "''"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "OR"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " edp.POLICY_TYPE "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "0"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ")")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u951911\uFF1A\u8BF7\u5148\u9009\u62E9\u5E01\u79CD"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u65B0\u5EFA\u4EA7\u54C1\u660E\u7EC6\u884C\u6216\u5BFC\u5165\u4EA7\u54C1\u65F6\uFF0C\u5934\u8868CURRENCY\u5B57\u6BB5\u4E3A\u7A7A")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode('\uFF1A\u5728\u524D\u7AEFSampleDiscountPolicy/views/DetailPage/index.tsx\u7684handleLineCreate\u65B9\u6CD5\u4E2D(line 1150)\u53CA\u5BFC\u5165\u6309\u94AE\u70B9\u51FB\u4E8B\u4EF6\u4E2D(line 1467)\uFF0C\u6821\u9A8C\u5934\u8868CURRENCY\u5B57\u6BB5\uFF0C\u82E5\u4E3A\u7A7A\u5219\u5F39\u51FAnotification.error("\u8BF7\u5148\u9009\u62E9\u5E01\u79CD")\u3002\u9700\u5148\u9009\u62E9\u5E01\u79CD\u518D\u65B0\u589E\u4EA7\u54C1\u660E\u7EC6\u6216\u5BFC\u5165')
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " edp.DISCOUNT_POLICY_ID, edp.DISCOUNT_POLICY_CODE, edp.CURRENCY")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " EPM_DISCOUNT_POLICY edp")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " edp.DISCOUNT_POLICY_ID "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " :policyId")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " (edp.CURRENCY "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NULL"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "OR"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " edp.CURRENCY "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "''"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ")")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u951912\uFF1A\u81F3\u5C11\u9009\u62E9\u4E00\u6761\u6570\u636E"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u5728\u4EA7\u54C1LOV\u5F39\u7A97\u4E2D\u9009\u62E9\u4EA7\u54C1\u65F6\uFF0C\u672A\u9009\u62E9\u4EFB\u4F55\u8BB0\u5F55\u5373\u70B9\u51FB\u786E\u5B9A")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode('\uFF1A\u5728\u524D\u7AEFSampleDiscountPolicy/views/DetailPage/index.tsx\u7684\u4EA7\u54C1LOV\u5F39\u7A97onOk\u56DE\u8C03\u4E2D(line 587)\uFF0C\u6821\u9A8CproductLovDs.selected\u662F\u5426\u4E3A\u7A7A\uFF0C\u82E5\u4E3A\u7A7A\u5219\u5F39\u51FAnotification.error("\u81F3\u5C11\u9009\u62E9\u4E00\u6761\u6570\u636E")\u3002\u9700\u81F3\u5C11\u9009\u62E9\u4E00\u6761\u4EA7\u54C1\u8BB0\u5F55')
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
                  createVNode("span", { style: { "color": "#676E95" } }, "-- \u524D\u7AEF\u6821\u9A8C\uFF0C\u65E0\u5BF9\u5E94SQL")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "SELECT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " edp.DISCOUNT_POLICY_ID, edp.DISCOUNT_POLICY_CODE")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " EPM_DISCOUNT_POLICY edp")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " edp.DISCOUNT_POLICY_ID "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " :policyId")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u951913\uFF1A\u9636\u68AF\u653F\u7B56\u7684\u5C01\u9876\u6570\u91CF\u4E0D\u80FD\u5927\u4E8E\u653F\u7B56\u5C01\u9876\u603B\u6570\u91CF\u884C"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u7F16\u8F91\u9636\u68AF\u653F\u7B56\u5C01\u9876\u6570\u91CF\u65F6\uFF0C\u9636\u68AFCAPPING_QTY\u5927\u4E8E\u653F\u7B56\u5C01\u9876\u603B\u6570\u91CF\u884CTOTAL_CAP_NUMBER")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u5728\u524D\u7AEFSampleDiscountPolicy/views/DetailPage/index.tsx\u7684totalCapNumberChange\u65B9\u6CD5\u4E2D(line 235)\uFF0C\u53D8\u66F4\u5C01\u9876\u6570\u91CF\u65F6\u6821\u9A8C\u9636\u68AF\u5C01\u9876\u6570\u91CF\u662F\u5426\u5927\u4E8E\u653F\u7B56\u5C01\u9876\u603B\u6570\u91CF\u884C\uFF0C\u82E5\u5927\u4E8E\u5219\u5F39\u51FAnotification.error\u5E76\u6062\u590D\u65E7\u503C\u3002\u9700\u8C03\u6574\u9636\u68AF\u5C01\u9876\u6570\u91CF\u4F7F\u5176\u4E0D\u8D85\u8FC7\u653F\u7B56\u5C01\u9876\u603B\u6570\u91CF\u884C")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " edpi.DISCOUNT_POLICY_ITEM_ID, edpi.ITEM_CODE, edpi.TOTAL_CAP_NUMBER,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         edpil.CAPPING_QTY")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " EPM_DISCOUNT_POLICY_ITEM edpi")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "LEFT JOIN"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " EPM_DISCOUNT_POLICY_ITEM_LINE edpil")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ON"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " edpi.DISCOUNT_POLICY_ITEM_ID "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " edpil.DISCOUNT_POLICY_ITEM_ID")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " edpi.DISCOUNT_POLICY_ID "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " :policyId")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " edpil.CAPPING_QTY "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " edpi.TOTAL_CAP_NUMBER")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u951914\uFF1A\u4EC5\u652F\u6301 .xlsx\u3001.xls \u683C\u5F0F\u6587\u4EF6"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u5BFC\u5165\u4EA7\u54C1\u660E\u7EC6\u65F6\uFF0C\u4E0A\u4F20\u6587\u4EF6\u683C\u5F0F\u975Exlsx/xls")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode('\uFF1A\u5728\u524D\u7AEFSampleDiscountPolicy/views/DetailPage/index.tsx\u7684\u5BFC\u5165\u6587\u4EF6\u6821\u9A8C\u4E2D(line 1186)\uFF0C\u68C0\u67E5\u6587\u4EF6\u540E\u7F00\u540D\uFF0C\u82E5\u975Exlsx/xls\u683C\u5F0F\u5219\u5F39\u51FAnotification.error("\u4EC5\u652F\u6301 .xlsx\u3001.xls \u683C\u5F0F\u6587\u4EF6")\u3002\u9700\u4F7F\u7528\u6B63\u786E\u683C\u5F0F\u7684\u6587\u4EF6')
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
                  createVNode("span", { style: { "color": "#676E95" } }, "-- \u524D\u7AEF\u6587\u4EF6\u683C\u5F0F\u6821\u9A8C\uFF0C\u65E0\u5BF9\u5E94SQL")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "SELECT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " edp.DISCOUNT_POLICY_ID, edp.DISCOUNT_POLICY_CODE")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " EPM_DISCOUNT_POLICY edp")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " edp.DISCOUNT_POLICY_ID "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " :policyId")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u951915\uFF1A\u8BF7\u5148\u4FDD\u5B58\u5355\u636E"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u5BFC\u5165\u4EA7\u54C1\u660E\u7EC6\u65F6\uFF0C\u5355\u636E\u672A\u4FDD\u5B58(\u65E0DISCOUNT_POLICY_ID)")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode('\uFF1A\u5728\u524D\u7AEFSampleDiscountPolicy/views/DetailPage/index.tsx\u7684\u5BFC\u5165\u65B9\u6CD5\u4E2D(line 1089/1202)\uFF0C\u6821\u9A8C\u5355\u636E\u662F\u5426\u5DF2\u4FDD\u5B58\uFF0C\u82E5\u672A\u4FDD\u5B58\u5219\u5F39\u51FAnotification.error("\u8BF7\u5148\u4FDD\u5B58\u5355\u636E")\u3002\u9700\u5148\u4FDD\u5B58\u5355\u636E\u518D\u5BFC\u5165\u4EA7\u54C1\u660E\u7EC6')
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " edp.DISCOUNT_POLICY_ID, edp.DISCOUNT_POLICY_CODE, edp.HZ_APPROVE_STATUS")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " EPM_DISCOUNT_POLICY edp")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " edp.DISCOUNT_POLICY_ID "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " :policyId")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#89DDFF" } }, "  "),
                  createVNode("span", { style: { "color": "#676E95" } }, "-- \u82E5\u8FD4\u56DE\u7A7A\uFF0C\u8BF4\u660E\u5355\u636E\u672A\u4FDD\u5B58")
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
        _push2(`<ul${_scopeId}><li${_scopeId}>\u95EE\u98981\uFF1A\u5DE5\u7A0B\u6298\u6263\u5355\u4E0E\u5BB6\u88C5\u6298\u6263\u653F\u7B56\u7533\u8BF7\u7684\u533A\u522B</li><li${_scopeId}>\u539F\u56E0\uFF1A\u5171\u7528\u540E\u7AEFController\uFF0C\u901A\u8FC7\u6E20\u9053\u53C2\u6570\u533A\u5206</li><li${_scopeId}>\u89E3\u51B3\u601D\u8DEF\uFF1A\u5DE5\u7A0B\u6298\u6263\u5355\u4F7F\u7528\u5DE5\u7A0B\u6E20\u9053\uFF0C\u5BB6\u88C5\u6298\u6263\u653F\u7B56\u4F7F\u7528\u5BB6\u88C5\u6E20\u9053\uFF08channel=3\uFF09</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, "\u95EE\u98981\uFF1A\u5DE5\u7A0B\u6298\u6263\u5355\u4E0E\u5BB6\u88C5\u6298\u6263\u653F\u7B56\u7533\u8BF7\u7684\u533A\u522B"),
            createVNode("li", null, "\u539F\u56E0\uFF1A\u5171\u7528\u540E\u7AEFController\uFF0C\u901A\u8FC7\u6E20\u9053\u53C2\u6570\u533A\u5206"),
            createVNode("li", null, "\u89E3\u51B3\u601D\u8DEF\uFF1A\u5DE5\u7A0B\u6298\u6263\u5355\u4F7F\u7528\u5DE5\u7A0B\u6E20\u9053\uFF0C\u5BB6\u88C5\u6298\u6263\u653F\u7B56\u4F7F\u7528\u5BB6\u88C5\u6E20\u9053\uFF08channel=3\uFF09")
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
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u65E5\u671F</th><th${_scopeId}>\u63D0\u4EA4ID</th><th${_scopeId}>\u63D0\u4EA4\u4EBA</th><th${_scopeId}>\u63D0\u4EA4\u5185\u5BB9</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>2026-08-29</td><td${_scopeId}>-</td><td${_scopeId}>-</td><td${_scopeId}>\u6309skill\u89C4\u8303\u5B8C\u6574\u91CD\u5199\uFF0C\u57FA\u4E8E\u524D\u540E\u7AEF\u4EE3\u7801\u68B3\u7406</td></tr></tbody></table>`);
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
                createVNode("td", null, "2026-08-29"),
                createVNode("td", null, "-"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u6309skill\u89C4\u8303\u5B8C\u6574\u91CD\u5199\uFF0C\u57FA\u4E8E\u524D\u540E\u7AEF\u4EE3\u7801\u68B3\u7406")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("\u5DE5\u7A0B\u7BA1\u7406/\u5408\u540C\u4E0E\u6298\u6263/\u5DE5\u7A0B\u6298\u6263\u5355/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
