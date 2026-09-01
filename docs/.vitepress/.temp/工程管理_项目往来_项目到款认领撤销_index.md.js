import { resolveComponent, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.6ab74304.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"\u5DE5\u7A0B\u7BA1\u7406/\u9879\u76EE\u5F80\u6765/\u9879\u76EE\u5230\u6B3E\u8BA4\u9886\u64A4\u9500/index.md"}');
const _sfc_main = { name: "\u5DE5\u7A0B\u7BA1\u7406/\u9879\u76EE\u5F80\u6765/\u9879\u76EE\u5230\u6B3E\u8BA4\u9886\u64A4\u9500/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_BreadcrumbTabs = resolveComponent("BreadcrumbTabs");
  const _component_KbCard = resolveComponent("KbCard");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_BreadcrumbTabs, null, null, _parent));
  _push(`<div id="biz-intro" style="${ssrRenderStyle({ "display": "none" })}"><div class="tab-pad"><div class="kl-wrap"><div class="kl-card"><div class="biz-kl-hdr"><span class="biz-tag" style="${ssrRenderStyle({ "background": "rgba(124,58,237,0.08)", "color": "#7C3AED", "border-color": "rgba(124,58,237,0.18)" })}">\u4E1A\u52A1\u662F\u4EC0\u4E48</span><h2>\u9879\u76EE\u5230\u6B3E\u8BA4\u9886\u64A4\u9500</h2><p>\u5BF9\u8BEF\u8BA4\u9886\u6216\u9700\u8C03\u6574\u7684\u5DF2\u8BA4\u9886\u660E\u7EC6\u53D1\u8D77\u64A4\u9500\uFF0C\u56DE\u52A0\u91D1\u989D\u5E76\u63A8\u9001ERP\u51B2\u9500</p></div><div class="biz-2col-inner"><div class="kl-col-box"><div style="${ssrRenderStyle({ "display": "flex", "align-items": "center", "gap": "10px", "margin-bottom": "12px" })}"><div style="${ssrRenderStyle({ "width": "40px", "height": "40px", "border-radius": "10px", "display": "flex", "align-items": "center", "justify-content": "center", "flex-shrink": "0", "background": "linear-gradient(135deg,#7C3AED,#A78BFA)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" stroke-width="1.5"><path d="M4 8L8 4L12 8"></path><path d="M8 4V12"></path></svg></div><h4 style="${ssrRenderStyle({ "font-size": "1rem", "font-weight": "800", "color": "#1F2937", "margin": "0" })}">\u4E3A\u4F55\u8981\u64A4\u9500\u8BA4\u9886</h4></div><p style="${ssrRenderStyle({ "font-size": "0.78rem", "font-weight": "600", "color": "#6B7280", "margin": "0 0 10px" })}">\u89E3\u51B3\u4E24\u4E2A\u4E1A\u52A1\u573A\u666F</p><div style="${ssrRenderStyle({ "display": "flex", "flex-direction": "column", "gap": "8px" })}"><div style="${ssrRenderStyle({ "display": "flex", "align-items": "flex-start", "gap": "8px", "padding": "8px 10px", "background": "#F5F3FF", "border-radius": "8px" })}"><div style="${ssrRenderStyle({ "font-size": ".75rem" })}"><strong>\u8BA4\u9886\u6709\u8BEF</strong> \u2014 \u9879\u76EE\u6216\u91D1\u989D\u8BA4\u9519\uFF0C\u9700\u64A4\u9500\u7EA0\u6B63</div></div><div style="${ssrRenderStyle({ "display": "flex", "align-items": "flex-start", "gap": "8px", "padding": "8px 10px", "background": "#F5F3FF", "border-radius": "8px" })}"><div style="${ssrRenderStyle({ "font-size": ".75rem" })}"><strong>\u4E1A\u52A1\u8C03\u6574</strong> \u2014 \u5230\u6B3E\u9700\u91CD\u65B0\u5206\u914D\uFF0C\u5148\u64A4\u9500\u518D\u8BA4\u9886</div></div></div></div><div class="kl-col-box alt"><div style="${ssrRenderStyle({ "display": "flex", "align-items": "center", "gap": "10px", "margin-bottom": "12px" })}"><div style="${ssrRenderStyle({ "width": "40px", "height": "40px", "border-radius": "10px", "display": "flex", "align-items": "center", "justify-content": "center", "flex-shrink": "0", "background": "linear-gradient(135deg,#7C3AED,#A78BFA)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" stroke-width="1.5"><circle cx="8" cy="8" r="6"></circle><path d="M8 5V8L10 10"></path></svg></div><h4 style="${ssrRenderStyle({ "font-size": "1rem", "font-weight": "800", "color": "#1F2937", "margin": "0" })}">\u64A4\u9500\u9488\u5BF9\u4EC0\u4E48</h4></div><p style="${ssrRenderStyle({ "font-size": "0.78rem", "font-weight": "600", "color": "#6B7280", "margin": "0 0 10px" })}">\u5DF2\u8BA4\u9886\u660E\u7EC6</p><div style="${ssrRenderStyle({ "display": "flex", "flex-direction": "column", "gap": "8px" })}"><div style="${ssrRenderStyle({ "display": "flex", "align-items": "flex-start", "gap": "8px", "padding": "8px 10px", "background": "#F0FDF4", "border-radius": "8px" })}"><div style="${ssrRenderStyle({ "font-size": ".75rem" })}"><strong>\u5DF2\u8BA4\u9886\u660E\u7EC6</strong> \u2014 \u9009\u53D6\u9700\u64A4\u9500\u7684\u8BA4\u9886\u8BB0\u5F55</div></div><div style="${ssrRenderStyle({ "display": "flex", "align-items": "flex-start", "gap": "8px", "padding": "8px 10px", "background": "#F0FDF4", "border-radius": "8px" })}"><div style="${ssrRenderStyle({ "font-size": ".75rem" })}"><strong>\u56DE\u52A0\u91D1\u989D</strong> \u2014 \u64A4\u9500\u540E\u5C06\u91D1\u989D\u9000\u56DE\u53EF\u8BA4\u9886\u6C60</div></div></div></div></div></div><div class="kl-card"><div class="biz-kl-hdr"><span class="biz-tag" style="${ssrRenderStyle({ "background": "rgba(124,58,237,0.08)", "color": "#7C3AED", "border-color": "rgba(124,58,237,0.18)" })}">\u6D41\u7A0B</span><h2>\u8BA4\u9886\u64A4\u9500\u6D41\u7A0B</h2><p>\u4ECE\u9009\u53D6\u5DF2\u8BA4\u9886\u660E\u7EC6\u5230\u63D0\u4EA4\u5BA1\u6279\uFF0C\u901A\u8FC7\u540E\u63A8\u9001ERP\u51B2\u9500\u5E76\u56DE\u52A0\u91D1\u989D</p></div><div class="biz-steps"><div class="biz-step-item"><div class="biz-step-circle" style="${ssrRenderStyle({ "background": "linear-gradient(135deg,#7C3AED,#6D28D9)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" stroke-width="1.5"><circle cx="8" cy="8" r="6"></circle><path d="M5 8H11"></path></svg></div><h5>\u9009\u53D6\u8BA4\u9886\u660E\u7EC6</h5><small>\u4ECE\u5DF2\u8BA4\u9886\u8BB0\u5F55<br>\u9009\u53D6\u64A4\u9500\u9879</small></div><div class="biz-step-arrow">\u2192</div><div class="biz-step-item"><div class="biz-step-circle" style="${ssrRenderStyle({ "background": "linear-gradient(135deg,#7C3AED,#6D28D9)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" stroke-width="1.5"><path d="M3 4H13V12H3Z"></path><path d="M6 8H10"></path></svg></div><h5>\u65B0\u5EFA\u64A4\u9500\u5355</h5><small>\u767B\u8BB0\u64A4\u9500\u660E\u7EC6<br>\u5E76\u4FDD\u5B58</small></div><div class="biz-step-arrow">\u2192</div><div class="biz-step-item"><div class="biz-step-circle" style="${ssrRenderStyle({ "background": "linear-gradient(135deg,#7C3AED,#6D28D9)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" stroke-width="1.5"><circle cx="8" cy="8" r="6"></circle><path d="M5 8H11"></path></svg></div><h5>\u63D0\u4EA4\u5BA1\u6279</h5><small>\u5BA1\u6279\u901A\u8FC7\u540E<br>\u63A8\u9001ERP\u64A4\u9500</small></div><div class="biz-step-arrow">\u2192</div><div class="biz-step-item"><div class="biz-step-circle" style="${ssrRenderStyle({ "background": "linear-gradient(135deg,#7C3AED,#6D28D9)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" stroke-width="1.5"><path d="M4 8L8 4L12 8"></path><path d="M8 4V12"></path></svg></div><h5>\u56DE\u52A0\u91D1\u989D</h5><small>\u51B2\u9500ERP<br>\u91D1\u989D\u9000\u56DE\u53EF\u8BA4</small></div></div><div class="kl-tip" style="${ssrRenderStyle({ "margin-top": "14px" })}"><strong>\u6CE8\u610F\uFF1A</strong>\u64A4\u9500\u5355\u63D0\u4EA4\u524D\u6821\u9A8C\u662F\u5426\u5B58\u5728\u91CD\u590D\u64A4\u9500\uFF0C\u907F\u514D\u540C\u4E00\u7B14\u8BA4\u9886\u88AB\u591A\u6B21\u51B2\u9500\u3002 </div></div><div class="kl-card"><div class="biz-kl-hdr"><span class="biz-tag" style="${ssrRenderStyle({ "background": "rgba(124,58,237,0.08)", "color": "#7C3AED", "border-color": "rgba(124,58,237,0.18)" })}">\u5173\u952E\u89C4\u5219</span><h2>\u8BA4\u9886\u64A4\u9500\u7684\u5173\u952E\u7EA6\u675F</h2><p>\u9632\u8D85\u989D\u3001\u9632\u91CD\u590D\uFF0C\u5BA1\u6279\u901A\u8FC7\u624D\u771F\u6B63\u56DE\u52A0</p></div><div class="biz-3col"><div class="kl-col-box" style="${ssrRenderStyle({ "margin-bottom": "0" })}"><div style="${ssrRenderStyle({ "display": "flex", "gap": "12px", "align-items": "flex-start" })}"><div style="${ssrRenderStyle({ "width": "36px", "height": "36px", "border-radius": "10px", "display": "flex", "align-items": "center", "justify-content": "center", "flex-shrink": "0", "background": "linear-gradient(135deg,#7C3AED,#A78BFA)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" stroke-width="1.5"><path d="M8 2L3 4V8C3 11 8 14 8 14C8 14 13 11 13 8V4Z"></path></svg></div><div><h5 style="${ssrRenderStyle({ "font-size": "0.88rem", "font-weight": "800", "color": "#1F2937", "margin": "0 0 6px" })}">\u670D\u52A1\u8D39\u6821\u9A8C</h5><p style="${ssrRenderStyle({ "font-size": "0.73rem", "color": "#6B7280", "margin": "0", "line-height": "1.6" })}">\u64A4\u9500\u65F6\u6821\u9A8C\u5DF2\u6263\u670D\u52A1\u8D39\uFF0C\u9632\u6B62\u56DE\u52A0\u540E\u91D1\u989D\u8D85\u51FA\u5B9E\u9645\u53EF\u8BA4\u8303\u56F4\u3002</p></div></div></div><div class="kl-col-box alt" style="${ssrRenderStyle({ "margin-bottom": "0" })}"><div style="${ssrRenderStyle({ "display": "flex", "gap": "12px", "align-items": "flex-start" })}"><div style="${ssrRenderStyle({ "width": "36px", "height": "36px", "border-radius": "10px", "display": "flex", "align-items": "center", "justify-content": "center", "flex-shrink": "0", "background": "linear-gradient(135deg,#7C3AED,#A78BFA)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" stroke-width="1.5"><rect x="3" y="3" width="10" height="10" rx="2"></rect><path d="M6 8L7 9L10 6"></path></svg></div><div><h5 style="${ssrRenderStyle({ "font-size": "0.88rem", "font-weight": "800", "color": "#1F2937", "margin": "0 0 6px" })}">\u9632\u91CD\u590D\u64A4\u9500</h5><p style="${ssrRenderStyle({ "font-size": "0.73rem", "color": "#6B7280", "margin": "0", "line-height": "1.6" })}">\u63D0\u4EA4\u524D\u6821\u9A8C\u540C\u4E00\u7B14\u8BA4\u9886\u662F\u5426\u5DF2\u88AB\u64A4\u9500\uFF0C\u91CD\u590D\u63D0\u4EA4\u5C06\u88AB\u62E6\u622A\u3002</p></div></div></div><div class="kl-col-box" style="${ssrRenderStyle({ "margin-bottom": "0" })}"><div style="${ssrRenderStyle({ "display": "flex", "gap": "12px", "align-items": "flex-start" })}"><div style="${ssrRenderStyle({ "width": "36px", "height": "36px", "border-radius": "10px", "display": "flex", "align-items": "center", "justify-content": "center", "flex-shrink": "0", "background": "linear-gradient(135deg,#7C3AED,#A78BFA)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" stroke-width="1.5"><circle cx="8" cy="8" r="6"></circle><path d="M5 8H11"></path></svg></div><div><h5 style="${ssrRenderStyle({ "font-size": "0.88rem", "font-weight": "800", "color": "#1F2937", "margin": "0 0 6px" })}">\u5BA1\u6279\u540E\u56DE\u52A0</h5><p style="${ssrRenderStyle({ "font-size": "0.73rem", "color": "#6B7280", "margin": "0", "line-height": "1.6" })}">\u5BA1\u6279\u901A\u8FC7\u5373\u63A8\u9001ERP\u51B2\u9500\uFF0C\u5E76\u5C06\u91D1\u989D\u56DE\u52A0\u5230\u539F\u5230\u6B3E\u5355\u53EF\u8BA4\u6C60\u3002</p></div></div></div></div></div></div></div></div><div id="biz-flow" style="${ssrRenderStyle({ "display": "none" })}"><div class="tab-pad"><div class="bf-truth-flow"><h4 class="bf-main-title">\u9879\u76EE\u5230\u6B3E\u8BA4\u9886\u64A4\u9500 \u2014 \u5168\u94FE\u8DEF\u6D41\u7A0B\u56FE</h4><p class="bf-main-sub">\u5F00\u59CB \u2192 \u5DF2\u8BA4\u9886\u660E\u7EC6 \u2192 \u2605\u65B0\u5EFA\u64A4\u9500\u8BA4\u9886\u5355\u2605 \u2192 \u63D0\u4EA4\u5BA1\u6279(\u5DE5\u4F5C\u6D41CANCEL) \u2192 \u2696\u5BA1\u6279\u901A\u8FC7\uFF1F \u2192 \u63A8\u9001ERP\u64A4\u9500/\u56DE\u52A0\u53EF\u8BA4\u9886\u91D1\u989D / \u9A73\u56DE\u4E2D\u65AD \u2192 \u7ED3\u675F</p><div class="bf-fc-svg-wrap"><svg class="bf-fc-svg" style="${ssrRenderStyle({ "max-height": "none" })}" viewBox="0 0 1200 760" xmlns="http://www.w3.org/2000/svg"><defs><marker id="arr-green" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#16A34A"></path></marker><marker id="arr-gray" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#9CA3AF"></path></marker><marker id="arr-blue" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#3B82F6"></path></marker><marker id="arr-red" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#EF4444"></path></marker><filter id="shadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000" flood-opacity="0.15"></feDropShadow></filter></defs><rect x="50" y="20" width="1100" height="95" rx="8" fill="#EFF6FF" stroke="#3B82F6" stroke-width="1.5" stroke-dasharray="6,4"></rect><text x="600" y="42" text-anchor="middle" fill="#1D4ED8" font-size="13" font-weight="600">\u4E0A\u6E38\u652F\u6491</text><rect x="120" y="56" width="110" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"></rect><text x="175" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">\u5230\u6B3E\u8BA4\u9886</text><rect x="250" y="56" width="110" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"></rect><text x="305" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">\u5230\u6B3E\u5F15\u5165</text><rect x="380" y="56" width="110" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"></rect><text x="435" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">ERP\u6838\u9500</text><rect x="510" y="56" width="110" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"></rect><text x="565" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">\u7F16\u7801\u89C4\u5219</text><rect x="640" y="56" width="110" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"></rect><text x="695" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">\u5DE5\u4F5C\u6D41</text><line x1="235" y1="115" x2="235" y2="150" stroke="#3B82F6" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#arr-blue)"></line><rect x="195" y="150" width="80" height="44" rx="6" fill="#FAF5FF" stroke="#9333EA" stroke-width="1.5" stroke-dasharray="5,3"></rect><text x="235" y="177" text-anchor="middle" fill="#7C3AED" font-size="13" font-weight="600">\u5F00\u59CB</text><line x1="235" y1="194" x2="235" y2="210" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"></line><rect x="145" y="210" width="180" height="40" rx="6" fill="#F0FDF4" stroke="#16A34A" stroke-width="2"></rect><text x="235" y="235" text-anchor="middle" fill="#166534" font-size="12" font-weight="600">\u5DF2\u8BA4\u9886\u660E\u7EC6(EPM_PAYMENT_ALLOT)</text><line x1="235" y1="250" x2="235" y2="266" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"></line><rect x="155" y="266" width="160" height="54" rx="6" fill="#16A34A" stroke="#15803D" stroke-width="2" filter="url(#shadow)"></rect><text x="235" y="290" text-anchor="middle" fill="#FFFFFF" font-size="13" font-weight="700">\u2605\u65B0\u5EFA\u64A4\u9500\u8BA4\u9886\u5355\u2605</text><text x="235" y="308" text-anchor="middle" fill="#DCFCE7" font-size="10">\u9009\u9879\u76EE/\u660E\u7EC6\xB7\u586B\u64A4\u9500\u539F\u56E0\xB7\u4FDD\u5B58</text><line x1="235" y1="320" x2="235" y2="336" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"></line><rect x="150" y="336" width="170" height="40" rx="6" fill="#F0FDF4" stroke="#16A34A" stroke-width="2"></rect><text x="235" y="361" text-anchor="middle" fill="#166534" font-size="12" font-weight="600">\u63D0\u4EA4\u5BA1\u6279(\u5DE5\u4F5C\u6D41CANCEL)</text><line x1="235" y1="376" x2="235" y2="392" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"></line><polygon points="235,392 305,432 235,472 165,432" fill="#FAF5FF" stroke="#9333EA" stroke-width="1.5" stroke-dasharray="5,3"></polygon><text x="235" y="436" text-anchor="middle" fill="#7C3AED" font-size="12" font-weight="600">\u2696 \u5BA1\u6279\u901A\u8FC7\uFF1F</text><line x1="235" y1="472" x2="235" y2="488" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"></line><rect x="140" y="488" width="190" height="40" rx="6" fill="#F0FDF4" stroke="#16A34A" stroke-width="2"></rect><text x="235" y="513" text-anchor="middle" fill="#166534" font-size="12" font-weight="600">\u63A8\u9001ERP\u64A4\u9500/\u56DE\u52A0\u53EF\u8BA4\u9886\u91D1\u989D</text><line x1="235" y1="528" x2="235" y2="544" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"></line><rect x="180" y="544" width="110" height="40" rx="6" fill="#FAF5FF" stroke="#9333EA" stroke-width="1.5" stroke-dasharray="5,3"></rect><text x="235" y="569" text-anchor="middle" fill="#7C3AED" font-size="13" font-weight="600">\u7ED3\u675F</text><line x1="235" y1="584" x2="235" y2="600" stroke="#16A34A" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#arr-green)"></line><line x1="305" y1="432" x2="430" y2="432" stroke="#EF4444" stroke-width="2" marker-end="url(#arr-red)"></line><rect x="380" y="417" width="100" height="28" rx="4" fill="#FEF2F2" stroke="#EF4444" stroke-width="1"></rect><text x="430" y="436" text-anchor="middle" fill="#DC2626" font-size="11" font-weight="600">\u9A73\u56DE\u4E2D\u65AD\u2717</text><line x1="430" y1="432" x2="430" y2="293" stroke="#EF4444" stroke-width="1.5"></line><line x1="430" y1="293" x2="315" y2="293" stroke="#EF4444" stroke-width="1.5" marker-end="url(#arr-red)"></line><rect x="50" y="600" width="1100" height="95" rx="8" fill="#F0FDF4" stroke="#16A34A" stroke-width="1.5" stroke-dasharray="6,4"></rect><text x="600" y="622" text-anchor="middle" fill="#166534" font-size="13" font-weight="600">\u4E0B\u6E38\u5F71\u54CD</text><rect x="200" y="638" width="150" height="36" rx="5" fill="#FFFFFF" stroke="#16A34A" stroke-width="1.2"></rect><text x="275" y="661" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">\u5230\u6B3E\u5355\xB7\u56DE\u52A0\u91D1\u989D</text><rect x="375" y="638" width="150" height="36" rx="5" fill="#FFFFFF" stroke="#16A34A" stroke-width="1.2"></rect><text x="450" y="661" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">\u8BA4\u9886\u660E\u7EC6\xB7\u64A4\u9500\u6807\u8BB0Y</text><rect x="550" y="638" width="150" height="36" rx="5" fill="#FFFFFF" stroke="#16A34A" stroke-width="1.2"></rect><text x="625" y="661" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">ERP\u7CFB\u7EDF\xB7\u63A8\u9001\u64A4\u9500</text><rect x="725" y="638" width="150" height="36" rx="5" fill="#FFFFFF" stroke="#16A34A" stroke-width="1.2"></rect><text x="800" y="661" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">\u8BA4\u9886\u5355\xB7\u64A4\u9500\u65F6\u95F4</text></svg></div><div class="bf-fc-legend"><span class="bf-fc-legend-item"><span class="bf-fc-dot bf-fc-dot-green"></span> \u4E3B\u6D41\u7A0B\u6B65\u9AA4</span><span class="bf-fc-legend-item"><span class="bf-fc-dot bf-fc-dot-purple"></span> \u5F00\u59CB/\u7ED3\u675F/\u5224\u65AD</span><span class="bf-fc-legend-item"><span class="bf-fc-dot bf-fc-dot-blue"></span> \u4E0A\u6E38\u652F\u6491</span><span class="bf-fc-legend-item"><span style="${ssrRenderStyle({ "display": "inline-block", "width": "22px", "height": "2px", "background": "#EF4444" })}"></span> \u5BA1\u6279\u9A73\u56DE/\u4E2D\u65AD</span></div></div></div></div><div id="key-logic" style="${ssrRenderStyle({ "display": "none" })}"><div class="tab-pad"><div class="kl-wrap">`);
  _push(ssrRenderComponent(_component_KbCard, {
    num: "1",
    title: "\u91CD\u70B9\u903B\u8F911\uFF1A\u64A4\u9500\u540E\u53EF\u7ED3\u7B97\u5DE5\u7A0B\u670D\u52A1\u8D39\u6821\u9A8C {\u6838\u5FC3\u6821\u9A8C}"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u610F\u4E49</strong>\uFF1A\u9632\u6B62\u64A4\u9500\u540E\u5DF2\u8BA4\u9886\u5DE5\u7A0B\u670D\u52A1\u8D39\u4E0D\u8DB3\u4EE5\u8986\u76D6\u5DF2\u7533\u8BF7\u5151\u73B0\u91D1\u989D</li></ul><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u5177\u4F53\u903B\u8F91\u63CF\u8FF0</strong></li></ul><ul${_scopeId}><li${_scopeId}>\u7B2C1\u70B9\uFF1A\u6309\u62A5\u9500\u5355\u5206\u7EC4\uFF0C\u8BA1\u7B97\u6BCF\u7EC4\u64A4\u9500\u7684\u5DE5\u7A0B\u670D\u52A1\u8D39\u91D1\u989D\u5408\u8BA1</li></ul><ul${_scopeId}><li${_scopeId}>\u7B2C2\u70B9\uFF1A\u53EF\u7ED3\u7B97\u5151\u73B0\u91D1\u989D=\u5DF2\u8BA4\u9886\u5DE5\u7A0B\u670D\u52A1\u8D39-\u672C\u6B21\u64A4\u9500\u5DE5\u7A0B\u670D\u52A1\u8D39-\u5DF2\u9000\u8D27\u5DE5\u7A0B\u670D\u52A1\u8D39-\u5DF2\u7533\u8BF7\u5151\u73B0\u91D1\u989D</li></ul><ul${_scopeId}><li${_scopeId}>\u7B2C3\u70B9\uFF1A\u53EF\u7ED3\u7B97\u5151\u73B0\u91D1\u989D\u5C0F\u4E8E0\u65F6\u4E0D\u5141\u8BB8\u64A4\u9500\uFF0C\u62A5\u9519\u63D0\u793A\u62A5\u9500\u5355\u53F7</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u610F\u4E49"),
              createTextVNode("\uFF1A\u9632\u6B62\u64A4\u9500\u540E\u5DF2\u8BA4\u9886\u5DE5\u7A0B\u670D\u52A1\u8D39\u4E0D\u8DB3\u4EE5\u8986\u76D6\u5DF2\u7533\u8BF7\u5151\u73B0\u91D1\u989D")
            ])
          ]),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u5177\u4F53\u903B\u8F91\u63CF\u8FF0")
            ])
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u7B2C1\u70B9\uFF1A\u6309\u62A5\u9500\u5355\u5206\u7EC4\uFF0C\u8BA1\u7B97\u6BCF\u7EC4\u64A4\u9500\u7684\u5DE5\u7A0B\u670D\u52A1\u8D39\u91D1\u989D\u5408\u8BA1")
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u7B2C2\u70B9\uFF1A\u53EF\u7ED3\u7B97\u5151\u73B0\u91D1\u989D=\u5DF2\u8BA4\u9886\u5DE5\u7A0B\u670D\u52A1\u8D39-\u672C\u6B21\u64A4\u9500\u5DE5\u7A0B\u670D\u52A1\u8D39-\u5DF2\u9000\u8D27\u5DE5\u7A0B\u670D\u52A1\u8D39-\u5DF2\u7533\u8BF7\u5151\u73B0\u91D1\u989D")
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u7B2C3\u70B9\uFF1A\u53EF\u7ED3\u7B97\u5151\u73B0\u91D1\u989D\u5C0F\u4E8E0\u65F6\u4E0D\u5141\u8BB8\u64A4\u9500\uFF0C\u62A5\u9519\u63D0\u793A\u62A5\u9500\u5355\u53F7")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, {
    num: "2",
    title: "\u91CD\u70B9\u903B\u8F912\uFF1A\u64A4\u9500\u660E\u7EC6\u91CD\u590D\u6821\u9A8C {\u9632\u91CD\u590D\u64A4\u9500}"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u610F\u4E49</strong>\uFF1A\u9632\u6B62\u540C\u4E00\u8BA4\u9886\u660E\u7EC6\u88AB\u91CD\u590D\u64A4\u9500</li></ul><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u5177\u4F53\u903B\u8F91\u63CF\u8FF0</strong></li></ul><ul${_scopeId}><li${_scopeId}>\u7B2C1\u70B9\uFF1A\u63D0\u4EA4\u65F6\u67E5\u8BE2\u6240\u6709\u64A4\u9500\u660E\u7EC6\u5BF9\u5E94\u7684\u8BA4\u9886\u660E\u7EC6\uFF0C\u68C0\u67E5cancelFlag\u662F\u5426\u5DF2\u4E3AY</li></ul><ul${_scopeId}><li${_scopeId}>\u7B2C2\u70B9\uFF1A\u5DF2\u64A4\u9500\u7684\u660E\u7EC6\u5217\u51FA\u8BA4\u9886\u5355\u53F7\u3001\u51FA\u5E93\u5355\u53F7\u3001\u4EA7\u54C1\u7F16\u7801\uFF0C\u63D0\u793A\u7528\u6237\u5254\u9664\u540E\u518D\u63D0\u4EA4</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u610F\u4E49"),
              createTextVNode("\uFF1A\u9632\u6B62\u540C\u4E00\u8BA4\u9886\u660E\u7EC6\u88AB\u91CD\u590D\u64A4\u9500")
            ])
          ]),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u5177\u4F53\u903B\u8F91\u63CF\u8FF0")
            ])
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u7B2C1\u70B9\uFF1A\u63D0\u4EA4\u65F6\u67E5\u8BE2\u6240\u6709\u64A4\u9500\u660E\u7EC6\u5BF9\u5E94\u7684\u8BA4\u9886\u660E\u7EC6\uFF0C\u68C0\u67E5cancelFlag\u662F\u5426\u5DF2\u4E3AY")
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u7B2C2\u70B9\uFF1A\u5DF2\u64A4\u9500\u7684\u660E\u7EC6\u5217\u51FA\u8BA4\u9886\u5355\u53F7\u3001\u51FA\u5E93\u5355\u53F7\u3001\u4EA7\u54C1\u7F16\u7801\uFF0C\u63D0\u793A\u7528\u6237\u5254\u9664\u540E\u518D\u63D0\u4EA4")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, {
    num: "3",
    title: "\u91CD\u70B9\u903B\u8F913\uFF1AERP\u8D1F\u6570\u51B2\u9500\u63A8\u9001 {ERP\u96C6\u6210}"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u610F\u4E49</strong>\uFF1A\u901A\u8FC7\u63A8\u9001\u8D1F\u6570\u6570\u636E\u5B9E\u73B0ERP\u4FA7\u7684\u51B2\u9500\u6838\u9500</li></ul><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u5177\u4F53\u903B\u8F91\u63CF\u8FF0</strong></li></ul><ul${_scopeId}><li${_scopeId}>\u7B2C1\u70B9\uFF1A\u6309\u8BA4\u9886\u5355\u5206\u7EC4\uFF0C\u6BCF\u7EC4\u7EC4\u88C5AR_APPLY\u3001OM_CLAIM\u3001OM_APPLY\u4E09\u7EC4\u6570\u636E</li></ul><ul${_scopeId}><li${_scopeId}>\u7B2C2\u70B9\uFF1A\u6240\u6709\u91D1\u989D\u53D6\u8D1F\u6570\uFF08negate\uFF09\uFF0C\u5B9E\u73B0\u51B2\u9500\u6548\u679C</li></ul><ul${_scopeId}><li${_scopeId}>\u7B2C3\u70B9\uFF1AactionStatus\u8BBE\u4E3AAPPROVE\uFF0CsourceType\u8BBE\u4E3AREVOKE_CLAIM\uFF0CrevokeSourceId\u6307\u5411\u539F\u8BA4\u9886\u5355</li></ul><ul${_scopeId}><li${_scopeId}>\u7B2C4\u70B9\uFF1A\u865A\u62DF\u5230\u6B3E\u5355\u989D\u5916\u4F20creditMemoId</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u610F\u4E49"),
              createTextVNode("\uFF1A\u901A\u8FC7\u63A8\u9001\u8D1F\u6570\u6570\u636E\u5B9E\u73B0ERP\u4FA7\u7684\u51B2\u9500\u6838\u9500")
            ])
          ]),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u5177\u4F53\u903B\u8F91\u63CF\u8FF0")
            ])
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u7B2C1\u70B9\uFF1A\u6309\u8BA4\u9886\u5355\u5206\u7EC4\uFF0C\u6BCF\u7EC4\u7EC4\u88C5AR_APPLY\u3001OM_CLAIM\u3001OM_APPLY\u4E09\u7EC4\u6570\u636E")
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u7B2C2\u70B9\uFF1A\u6240\u6709\u91D1\u989D\u53D6\u8D1F\u6570\uFF08negate\uFF09\uFF0C\u5B9E\u73B0\u51B2\u9500\u6548\u679C")
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u7B2C3\u70B9\uFF1AactionStatus\u8BBE\u4E3AAPPROVE\uFF0CsourceType\u8BBE\u4E3AREVOKE_CLAIM\uFF0CrevokeSourceId\u6307\u5411\u539F\u8BA4\u9886\u5355")
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u7B2C4\u70B9\uFF1A\u865A\u62DF\u5230\u6B3E\u5355\u989D\u5916\u4F20creditMemoId")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, {
    num: "4",
    title: "\u91CD\u70B9\u903B\u8F914\uFF1A\u5BA1\u6279\u901A\u8FC7\u56DE\u52A0\u53EF\u8BA4\u9886\u91D1\u989D {\u91D1\u989D\u56DE\u5199}"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u610F\u4E49</strong>\uFF1A\u64A4\u9500\u5BA1\u6279\u901A\u8FC7\u540E\uFF0C\u5C06\u64A4\u9500\u7684\u91D1\u989D\u9000\u56DE\u5230\u6B3E\u5355\u7684\u53EF\u8BA4\u9886\u91D1\u989D\u6C60</li></ul><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u5177\u4F53\u903B\u8F91\u63CF\u8FF0</strong></li></ul><ul${_scopeId}><li${_scopeId}>\u7B2C1\u70B9\uFF1A\u67E5\u8BE2\u64A4\u9500\u5355\u5173\u8054\u7684\u6240\u6709\u8BA4\u9886\u660E\u7EC6\u53CA\u5176\u8BA4\u9886\u91D1\u989D</li></ul><ul${_scopeId}><li${_scopeId}>\u7B2C2\u70B9\uFF1A\u6309\u5230\u6B3E\u5F15\u5165\u5355\u5206\u7EC4\uFF0C\u5C06\u8BA4\u9886\u91D1\u989D\u7D2F\u52A0\u56DEunallotAmt</li></ul><ul${_scopeId}><li${_scopeId}>\u7B2C3\u70B9\uFF1A\u540C\u65F6\u66F4\u65B0\u8BA4\u9886\u660E\u7EC6\u7684cancelFlag=Y\u548C\u64A4\u9500\u5355\u7684\u64A4\u9500\u65F6\u95F4</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u610F\u4E49"),
              createTextVNode("\uFF1A\u64A4\u9500\u5BA1\u6279\u901A\u8FC7\u540E\uFF0C\u5C06\u64A4\u9500\u7684\u91D1\u989D\u9000\u56DE\u5230\u6B3E\u5355\u7684\u53EF\u8BA4\u9886\u91D1\u989D\u6C60")
            ])
          ]),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u5177\u4F53\u903B\u8F91\u63CF\u8FF0")
            ])
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u7B2C1\u70B9\uFF1A\u67E5\u8BE2\u64A4\u9500\u5355\u5173\u8054\u7684\u6240\u6709\u8BA4\u9886\u660E\u7EC6\u53CA\u5176\u8BA4\u9886\u91D1\u989D")
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u7B2C2\u70B9\uFF1A\u6309\u5230\u6B3E\u5F15\u5165\u5355\u5206\u7EC4\uFF0C\u5C06\u8BA4\u9886\u91D1\u989D\u7D2F\u52A0\u56DEunallotAmt")
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u7B2C3\u70B9\uFF1A\u540C\u65F6\u66F4\u65B0\u8BA4\u9886\u660E\u7EC6\u7684cancelFlag=Y\u548C\u64A4\u9500\u5355\u7684\u64A4\u9500\u65F6\u95F4")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, {
    num: "5",
    title: "\u91CD\u70B9\u903B\u8F915\uFF1A\u64A4\u9500\u5355\u53F7\u751F\u6210\u89C4\u5219 {\u7F16\u7801\u89C4\u5219}"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u610F\u4E49</strong>\uFF1A\u64A4\u9500\u5355\u53F7\u7531\u4E8B\u4E1A\u90E8\u7F16\u7801+\u89C4\u5219\u7F16\u53F7\u7EC4\u6210\uFF0C\u786E\u4FDD\u552F\u4E00\u6027</li></ul><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u5177\u4F53\u903B\u8F91\u63CF\u8FF0</strong></li></ul><ul${_scopeId}><li${_scopeId}>\u7B2C1\u70B9\uFF1A\u8C03\u7528\u7F16\u7801\u89C4\u5219AE.EPM_PAYMENT_ALLOT_CANCEL_NO\u751F\u6210\u89C4\u5219\u7F16\u53F7</li></ul><ul${_scopeId}><li${_scopeId}>\u7B2C2\u70B9\uFF1A\u64A4\u9500\u5355\u53F7=\u4E8B\u4E1A\u90E8\u7F16\u7801\uFF08deptCode\uFF09+\u89C4\u5219\u7F16\u53F7</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u610F\u4E49"),
              createTextVNode("\uFF1A\u64A4\u9500\u5355\u53F7\u7531\u4E8B\u4E1A\u90E8\u7F16\u7801+\u89C4\u5219\u7F16\u53F7\u7EC4\u6210\uFF0C\u786E\u4FDD\u552F\u4E00\u6027")
            ])
          ]),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u5177\u4F53\u903B\u8F91\u63CF\u8FF0")
            ])
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u7B2C1\u70B9\uFF1A\u8C03\u7528\u7F16\u7801\u89C4\u5219AE.EPM_PAYMENT_ALLOT_CANCEL_NO\u751F\u6210\u89C4\u5219\u7F16\u53F7")
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u7B2C2\u70B9\uFF1A\u64A4\u9500\u5355\u53F7=\u4E8B\u4E1A\u90E8\u7F16\u7801\uFF08deptCode\uFF09+\u89C4\u5219\u7F16\u53F7")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div><div id="detail-logic" style="${ssrRenderStyle({ "display": "none" })}"><div class="tab-pad"><div class="kl-wrap">`);
  _push(ssrRenderComponent(_component_KbCard, { title: "\u754C\u9762\u6A21\u57571\uFF1A\u64A4\u9500\u5355\u5217\u8868\u9875" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5B57\u6BB5\u540D</th><th${_scopeId}>\u6570\u636E\u5E93\u5217\u540D</th><th${_scopeId}>\u7EC4\u4EF6</th><th${_scopeId}>\u4E1A\u52A1\u91CA\u4E49</th><th${_scopeId}>\u663E\u9690\u6761\u4EF6</th><th${_scopeId}>\u53D6\u503C/\u8D4B\u503C\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u64A4\u9500\u5355\u53F7</td><td${_scopeId}>EPM_PAYMENT_ALLOT_CANCEL.CANCEL_NO</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u64A4\u9500\u5355\u7F16\u53F7</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u4FDD\u5B58\u65F6=\u4E8B\u4E1A\u90E8\u7F16\u7801+\u89C4\u5219\u7F16\u53F7\u81EA\u52A8\u751F\u6210</td></tr><tr${_scopeId}><td${_scopeId}>\u64A4\u9500\u65F6\u95F4</td><td${_scopeId}>EPM_PAYMENT_ALLOT_CANCEL.CANCEL_DATE</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u64A4\u9500\u65F6\u95F4</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u4FDD\u5B58\u65F6\u7528\u6237\u8F93\u5165\uFF0C\u5BA1\u6279\u901A\u8FC7\u540E\u66F4\u65B0\u4E3A\u5F53\u524D\u65F6\u95F4</td></tr><tr${_scopeId}><td${_scopeId}>\u9879\u76EEID</td><td${_scopeId}>EPM_PAYMENT_ALLOT_CANCEL.PROJECT_ID</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u5173\u8054\u9879\u76EE</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u7528\u6237\u9009\u62E9</td></tr><tr${_scopeId}><td${_scopeId}>\u64A4\u9500\u539F\u56E0</td><td${_scopeId}>EPM_PAYMENT_ALLOT_CANCEL.CANCEL_REASON</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u64A4\u9500\u539F\u56E0\u8BF4\u660E</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u7528\u6237\u8F93\u5165</td></tr><tr${_scopeId}><td${_scopeId}>\u5BA1\u6279\u72B6\u6001</td><td${_scopeId}>EPM_PAYMENT_ALLOT_CANCEL.HZ_APPROVE_STATUS</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u5DE5\u4F5C\u6D41\u5BA1\u6279\u72B6\u6001</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>NEW/RUN/APPROVED</td></tr><tr${_scopeId}><td${_scopeId}>\u521B\u5EFA\u4EBA</td><td${_scopeId}>EPM_PAYMENT_ALLOT_CANCEL.CREATED_BY_BAK</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u521B\u5EFA\u4EBA</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u7CFB\u7EDF\u81EA\u52A8\u8BB0\u5F55</td></tr><tr${_scopeId}><td${_scopeId}>\u521B\u5EFA\u65F6\u95F4</td><td${_scopeId}>EPM_PAYMENT_ALLOT_CANCEL.CREATED_BAK</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u521B\u5EFA\u65F6\u95F4</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u7CFB\u7EDF\u81EA\u52A8\u8BB0\u5F55</td></tr></tbody></table>`);
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
                createVNode("td", null, "\u64A4\u9500\u5355\u53F7"),
                createVNode("td", null, "EPM_PAYMENT_ALLOT_CANCEL.CANCEL_NO"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u64A4\u9500\u5355\u7F16\u53F7"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u4FDD\u5B58\u65F6=\u4E8B\u4E1A\u90E8\u7F16\u7801+\u89C4\u5219\u7F16\u53F7\u81EA\u52A8\u751F\u6210")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u64A4\u9500\u65F6\u95F4"),
                createVNode("td", null, "EPM_PAYMENT_ALLOT_CANCEL.CANCEL_DATE"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u64A4\u9500\u65F6\u95F4"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u4FDD\u5B58\u65F6\u7528\u6237\u8F93\u5165\uFF0C\u5BA1\u6279\u901A\u8FC7\u540E\u66F4\u65B0\u4E3A\u5F53\u524D\u65F6\u95F4")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u9879\u76EEID"),
                createVNode("td", null, "EPM_PAYMENT_ALLOT_CANCEL.PROJECT_ID"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u5173\u8054\u9879\u76EE"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u7528\u6237\u9009\u62E9")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u64A4\u9500\u539F\u56E0"),
                createVNode("td", null, "EPM_PAYMENT_ALLOT_CANCEL.CANCEL_REASON"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u64A4\u9500\u539F\u56E0\u8BF4\u660E"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u7528\u6237\u8F93\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5BA1\u6279\u72B6\u6001"),
                createVNode("td", null, "EPM_PAYMENT_ALLOT_CANCEL.HZ_APPROVE_STATUS"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u5DE5\u4F5C\u6D41\u5BA1\u6279\u72B6\u6001"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "NEW/RUN/APPROVED")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u521B\u5EFA\u4EBA"),
                createVNode("td", null, "EPM_PAYMENT_ALLOT_CANCEL.CREATED_BY_BAK"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u521B\u5EFA\u4EBA"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u7CFB\u7EDF\u81EA\u52A8\u8BB0\u5F55")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u521B\u5EFA\u65F6\u95F4"),
                createVNode("td", null, "EPM_PAYMENT_ALLOT_CANCEL.CREATED_BAK"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u521B\u5EFA\u65F6\u95F4"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u7CFB\u7EDF\u81EA\u52A8\u8BB0\u5F55")
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, { title: "\u754C\u9762\u6A21\u57572\uFF1A\u64A4\u9500\u5355\u8BE6\u60C5\u9875\uFF08\u5934\u8868\u5355\uFF09" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5B57\u6BB5\u540D</th><th${_scopeId}>\u6570\u636E\u5E93\u5217\u540D</th><th${_scopeId}>\u7EC4\u4EF6</th><th${_scopeId}>\u4E1A\u52A1\u91CA\u4E49</th><th${_scopeId}>\u663E\u9690\u6761\u4EF6</th><th${_scopeId}>\u53D6\u503C/\u8D4B\u503C\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u64A4\u9500\u5355\u53F7</td><td${_scopeId}>EPM_PAYMENT_ALLOT_CANCEL.CANCEL_NO</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u64A4\u9500\u5355\u7F16\u53F7</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u65B0\u5EFA\u65F6\u81EA\u52A8\u751F\u6210\uFF0C\u4E0D\u53EF\u7F16\u8F91</td></tr><tr${_scopeId}><td${_scopeId}>\u64A4\u9500\u65F6\u95F4</td><td${_scopeId}>EPM_PAYMENT_ALLOT_CANCEL.CANCEL_DATE</td><td${_scopeId}>\u65E5\u671F\u9009\u62E9\u6846</td><td${_scopeId}>\u64A4\u9500\u65F6\u95F4</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u53EF\u7F16\u8F91\uFF0C\u5BA1\u6279\u901A\u8FC7\u540E\u7CFB\u7EDF\u66F4\u65B0\u4E3A\u5F53\u524D\u65F6\u95F4</td></tr><tr${_scopeId}><td${_scopeId}>\u9879\u76EE</td><td${_scopeId}>EPM_PAYMENT_ALLOT_CANCEL.PROJECT_ID</td><td${_scopeId}>\u4E0B\u62C9\u9009\u62E9\u6846</td><td${_scopeId}>\u5173\u8054\u9879\u76EE</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u53EF\u7F16\u8F91\uFF0C\u4ECE\u9879\u76EE\u9009\u62E9</td></tr><tr${_scopeId}><td${_scopeId}>\u64A4\u9500\u539F\u56E0</td><td${_scopeId}>EPM_PAYMENT_ALLOT_CANCEL.CANCEL_REASON</td><td${_scopeId}>\u6587\u672C\u57DF</td><td${_scopeId}>\u64A4\u9500\u539F\u56E0</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u53EF\u7F16\u8F91</td></tr><tr${_scopeId}><td${_scopeId}>\u4E8B\u4E1A\u90E8ID</td><td${_scopeId}>EPM_PAYMENT_ALLOT_CANCEL.ORGANIZATION_ID</td><td${_scopeId}>\u9690\u85CF</td><td${_scopeId}>\u4E8B\u4E1A\u90E8</td><td${_scopeId}>\u9690\u85CF</td><td${_scopeId}>\u4ECE\u7528\u6237\u4E0A\u4E0B\u6587\u83B7\u53D6</td></tr><tr${_scopeId}><td${_scopeId}>\u5BA1\u6279\u72B6\u6001</td><td${_scopeId}>EPM_PAYMENT_ALLOT_CANCEL.HZ_APPROVE_STATUS</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u5BA1\u6279\u72B6\u6001</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>NEW/RUN/APPROVED</td></tr><tr${_scopeId}><td${_scopeId}>\u5BA1\u6279\u5B9E\u4F8BID</td><td${_scopeId}>EPM_PAYMENT_ALLOT_CANCEL.HZ_INSTANCE_ID</td><td${_scopeId}>\u9690\u85CF</td><td${_scopeId}>\u5DE5\u4F5C\u6D41\u5B9E\u4F8BID</td><td${_scopeId}>\u9690\u85CF</td><td${_scopeId}>\u53D1\u8D77\u5DE5\u4F5C\u6D41\u65F6\u81EA\u52A8\u5199\u5165</td></tr></tbody></table>`);
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
                createVNode("td", null, "\u64A4\u9500\u5355\u53F7"),
                createVNode("td", null, "EPM_PAYMENT_ALLOT_CANCEL.CANCEL_NO"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u64A4\u9500\u5355\u7F16\u53F7"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u65B0\u5EFA\u65F6\u81EA\u52A8\u751F\u6210\uFF0C\u4E0D\u53EF\u7F16\u8F91")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u64A4\u9500\u65F6\u95F4"),
                createVNode("td", null, "EPM_PAYMENT_ALLOT_CANCEL.CANCEL_DATE"),
                createVNode("td", null, "\u65E5\u671F\u9009\u62E9\u6846"),
                createVNode("td", null, "\u64A4\u9500\u65F6\u95F4"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u53EF\u7F16\u8F91\uFF0C\u5BA1\u6279\u901A\u8FC7\u540E\u7CFB\u7EDF\u66F4\u65B0\u4E3A\u5F53\u524D\u65F6\u95F4")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u9879\u76EE"),
                createVNode("td", null, "EPM_PAYMENT_ALLOT_CANCEL.PROJECT_ID"),
                createVNode("td", null, "\u4E0B\u62C9\u9009\u62E9\u6846"),
                createVNode("td", null, "\u5173\u8054\u9879\u76EE"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u53EF\u7F16\u8F91\uFF0C\u4ECE\u9879\u76EE\u9009\u62E9")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u64A4\u9500\u539F\u56E0"),
                createVNode("td", null, "EPM_PAYMENT_ALLOT_CANCEL.CANCEL_REASON"),
                createVNode("td", null, "\u6587\u672C\u57DF"),
                createVNode("td", null, "\u64A4\u9500\u539F\u56E0"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u53EF\u7F16\u8F91")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u4E8B\u4E1A\u90E8ID"),
                createVNode("td", null, "EPM_PAYMENT_ALLOT_CANCEL.ORGANIZATION_ID"),
                createVNode("td", null, "\u9690\u85CF"),
                createVNode("td", null, "\u4E8B\u4E1A\u90E8"),
                createVNode("td", null, "\u9690\u85CF"),
                createVNode("td", null, "\u4ECE\u7528\u6237\u4E0A\u4E0B\u6587\u83B7\u53D6")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5BA1\u6279\u72B6\u6001"),
                createVNode("td", null, "EPM_PAYMENT_ALLOT_CANCEL.HZ_APPROVE_STATUS"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u5BA1\u6279\u72B6\u6001"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "NEW/RUN/APPROVED")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5BA1\u6279\u5B9E\u4F8BID"),
                createVNode("td", null, "EPM_PAYMENT_ALLOT_CANCEL.HZ_INSTANCE_ID"),
                createVNode("td", null, "\u9690\u85CF"),
                createVNode("td", null, "\u5DE5\u4F5C\u6D41\u5B9E\u4F8BID"),
                createVNode("td", null, "\u9690\u85CF"),
                createVNode("td", null, "\u53D1\u8D77\u5DE5\u4F5C\u6D41\u65F6\u81EA\u52A8\u5199\u5165")
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, { title: "\u754C\u9762\u6A21\u57573\uFF1A\u64A4\u9500\u5355\u8BE6\u60C5\u9875\uFF08\u64A4\u9500\u660E\u7EC6\u884C\u8868\u683C\uFF09" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5B57\u6BB5\u540D</th><th${_scopeId}>\u6570\u636E\u5E93\u5217\u540D</th><th${_scopeId}>\u7EC4\u4EF6</th><th${_scopeId}>\u4E1A\u52A1\u91CA\u4E49</th><th${_scopeId}>\u663E\u9690\u6761\u4EF6</th><th${_scopeId}>\u53D6\u503C/\u8D4B\u503C\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u64A4\u9500\u660E\u7EC6ID</td><td${_scopeId}>EPM_PAD_CANCEL.ID</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u64A4\u9500\u660E\u7EC6\u884CID</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u4E3B\u952E\uFF0C\u81EA\u589E</td></tr><tr${_scopeId}><td${_scopeId}>\u8BA4\u9886\u660E\u7EC6ID</td><td${_scopeId}>EPM_PAD_CANCEL.PAYMENT_ALLOT_DETAIL_ID</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u5173\u8054\u8BA4\u9886\u51FA\u5E93\u660E\u7EC6ID</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u4ECE\u53EF\u64A4\u9500\u660E\u7EC6\u9009\u62E9\u5E26\u5165</td></tr><tr${_scopeId}><td${_scopeId}>\u8BA4\u9886\u5355\u53F7</td><td${_scopeId}>-</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u5173\u8054\u7684\u8BA4\u9886\u5355\u53F7</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u4ECE\u8BA4\u9886\u660E\u7EC6\u5E26\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>\u51FA\u5E93\u5355\u53F7</td><td${_scopeId}>-</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u5173\u8054\u7684\u51FA\u5E93\u5355\u53F7</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u4ECE\u8BA4\u9886\u660E\u7EC6\u5E26\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>\u4EA7\u54C1\u7F16\u7801</td><td${_scopeId}>-</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u5173\u8054\u7684\u4EA7\u54C1\u7F16\u7801</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u4ECE\u8BA4\u9886\u660E\u7EC6\u5E26\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>\u672C\u6B21\u8BA4\u6B3E\u91D1\u989D</td><td${_scopeId}>-</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u539F\u8BA4\u9886\u91D1\u989D</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u4ECE\u8BA4\u9886\u660E\u7EC6\u5E26\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>\u5DE5\u7A0B\u670D\u52A1\u8D39\u91D1\u989D</td><td${_scopeId}>-</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u539F\u8BA4\u9886\u5DE5\u7A0B\u670D\u52A1\u8D39</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u4ECE\u8BA4\u9886\u660E\u7EC6\u5E26\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>\u62A5\u9500\u5355\u53F7</td><td${_scopeId}>-</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u5173\u8054\u7684\u62A5\u9500\u5355\u53F7</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u4ECE\u8BA4\u9886\u660E\u7EC6\u5E26\u51FA\uFF0C\u7528\u4E8E\u6821\u9A8C</td></tr></tbody></table>`);
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
                createVNode("td", null, "\u64A4\u9500\u660E\u7EC6ID"),
                createVNode("td", null, "EPM_PAD_CANCEL.ID"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u64A4\u9500\u660E\u7EC6\u884CID"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u4E3B\u952E\uFF0C\u81EA\u589E")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u8BA4\u9886\u660E\u7EC6ID"),
                createVNode("td", null, "EPM_PAD_CANCEL.PAYMENT_ALLOT_DETAIL_ID"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u5173\u8054\u8BA4\u9886\u51FA\u5E93\u660E\u7EC6ID"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u4ECE\u53EF\u64A4\u9500\u660E\u7EC6\u9009\u62E9\u5E26\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u8BA4\u9886\u5355\u53F7"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u5173\u8054\u7684\u8BA4\u9886\u5355\u53F7"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u4ECE\u8BA4\u9886\u660E\u7EC6\u5E26\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u51FA\u5E93\u5355\u53F7"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u5173\u8054\u7684\u51FA\u5E93\u5355\u53F7"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u4ECE\u8BA4\u9886\u660E\u7EC6\u5E26\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u4EA7\u54C1\u7F16\u7801"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u5173\u8054\u7684\u4EA7\u54C1\u7F16\u7801"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u4ECE\u8BA4\u9886\u660E\u7EC6\u5E26\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u672C\u6B21\u8BA4\u6B3E\u91D1\u989D"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u539F\u8BA4\u9886\u91D1\u989D"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u4ECE\u8BA4\u9886\u660E\u7EC6\u5E26\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5DE5\u7A0B\u670D\u52A1\u8D39\u91D1\u989D"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u539F\u8BA4\u9886\u5DE5\u7A0B\u670D\u52A1\u8D39"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u4ECE\u8BA4\u9886\u660E\u7EC6\u5E26\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u62A5\u9500\u5355\u53F7"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u5173\u8054\u7684\u62A5\u9500\u5355\u53F7"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u4ECE\u8BA4\u9886\u660E\u7EC6\u5E26\u51FA\uFF0C\u7528\u4E8E\u6821\u9A8C")
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
        _push2(`<h4${_scopeId}>\u5F39\u7A971\uFF1A\u53EF\u64A4\u9500\u8BA4\u9886\u660E\u7EC6\u9009\u62E9\u5F39\u7A97\uFF08\u591A\u9009\uFF09</h4><table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5165\u53C2</th><th${_scopeId}></th><th${_scopeId}></th><th${_scopeId}></th><th${_scopeId}>\u6570\u636E\u8303\u56F4</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u5B57\u6BB5\u540D</td><td${_scopeId}>\u4E2D\u6587\u540D</td><td${_scopeId}>\u91CA\u4E49</td><td${_scopeId}>\u793A\u4F8B</td><td${_scopeId}></td></tr><tr${_scopeId}><td${_scopeId}>projectId</td><td${_scopeId}>\u9879\u76EEID</td><td${_scopeId}>\u9879\u76EEID</td><td${_scopeId}>67890</td><td${_scopeId}>\u8BE5\u9879\u76EE\u4E0B\u5DF2\u5BA1\u6279\u901A\u8FC7\u7684\u8BA4\u9886\u5355\u4E2DcancelFlag=N\u7684\u51FA\u5E93\u660E\u7EC6</td></tr><tr${_scopeId}><td${_scopeId}>cancelId</td><td${_scopeId}>\u64A4\u9500\u5355ID</td><td${_scopeId}>\u5F53\u524D\u64A4\u9500\u5355ID\uFF08\u7F16\u8F91\u65F6\u6392\u9664\u5DF2\u9009\uFF09</td><td${_scopeId}>0</td><td${_scopeId}></td></tr></tbody></table><blockquote${_scopeId}>\u67E5\u8BE2SQL\uFF08\u540E\u7AEF\u63A5\u53E3Mapper\uFF1AEpmPaymentAllotDetailRepository.queryAllotDetails\uFF09\uFF1A</blockquote><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> d.payment_allot_detail_id, d.payment_allot_line_id, d.claim_amt,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>       d.claim_service_amt, d.cancel_flag, l.payment_allot_id,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>       pa.payment_allot_code, d.inv_bill_no, d.item_code</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> epm_payment_allot_detail d</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>JOIN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> epm_payment_allot_line l </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ON</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> d.payment_allot_line_id </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> l.payment_allot_line_id</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>JOIN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> epm_payment_allot pa </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ON</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> l.payment_allot_id </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> pa.payment_allot_id</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> pa.project_id </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> #{projectId}</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> pa.payment_allot_stat </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>APPROVED</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> d.cancel_flag </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>N</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span></span>
<span class="line"${_scopeId}></span></code></pre></div>`);
      } else {
        return [
          createVNode("h4", null, "\u5F39\u7A971\uFF1A\u53EF\u64A4\u9500\u8BA4\u9886\u660E\u7EC6\u9009\u62E9\u5F39\u7A97\uFF08\u591A\u9009\uFF09"),
          createVNode("table", { class: "kb-field-tbl" }, [
            createVNode("thead", null, [
              createVNode("tr", null, [
                createVNode("th", null, "\u5165\u53C2"),
                createVNode("th"),
                createVNode("th"),
                createVNode("th"),
                createVNode("th", null, "\u6570\u636E\u8303\u56F4")
              ])
            ]),
            createVNode("tbody", null, [
              createVNode("tr", null, [
                createVNode("td", null, "\u5B57\u6BB5\u540D"),
                createVNode("td", null, "\u4E2D\u6587\u540D"),
                createVNode("td", null, "\u91CA\u4E49"),
                createVNode("td", null, "\u793A\u4F8B"),
                createVNode("td")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "projectId"),
                createVNode("td", null, "\u9879\u76EEID"),
                createVNode("td", null, "\u9879\u76EEID"),
                createVNode("td", null, "67890"),
                createVNode("td", null, "\u8BE5\u9879\u76EE\u4E0B\u5DF2\u5BA1\u6279\u901A\u8FC7\u7684\u8BA4\u9886\u5355\u4E2DcancelFlag=N\u7684\u51FA\u5E93\u660E\u7EC6")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "cancelId"),
                createVNode("td", null, "\u64A4\u9500\u5355ID"),
                createVNode("td", null, "\u5F53\u524D\u64A4\u9500\u5355ID\uFF08\u7F16\u8F91\u65F6\u6392\u9664\u5DF2\u9009\uFF09"),
                createVNode("td", null, "0"),
                createVNode("td")
              ])
            ])
          ]),
          createVNode("blockquote", null, "\u67E5\u8BE2SQL\uFF08\u540E\u7AEF\u63A5\u53E3Mapper\uFF1AEpmPaymentAllotDetailRepository.queryAllotDetails\uFF09\uFF1A"),
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " d.payment_allot_detail_id, d.payment_allot_line_id, d.claim_amt,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "       d.claim_service_amt, d.cancel_flag, l.payment_allot_id,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "       pa.payment_allot_code, d.inv_bill_no, d.item_code")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " epm_payment_allot_detail d")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "JOIN"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " epm_payment_allot_line l "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ON"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " d.payment_allot_line_id "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " l.payment_allot_line_id")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "JOIN"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " epm_payment_allot pa "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ON"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " l.payment_allot_id "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " pa.payment_allot_id")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " pa.project_id "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " #{projectId}")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " pa.payment_allot_stat "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "APPROVED"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " d.cancel_flag "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "N"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'")
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
  _push(ssrRenderComponent(_component_KbCard, { title: "\u5176\u4ED6\u6309\u94AE" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u6309\u94AE\u540D\u79F0</th><th${_scopeId}>\u6309\u94AE\u4F5C\u7528</th><th${_scopeId}>\u6240\u5728\u4F4D\u7F6E</th><th${_scopeId}>\u663E\u9690\u6761\u4EF6/\u53EF\u70B9\u51FB\u6761\u4EF6</th><th${_scopeId}>\u5F71\u54CD</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u65B0\u5EFA</td><td${_scopeId}>\u65B0\u5EFA\u64A4\u9500\u5355</td><td${_scopeId}>\u5217\u8868\u9875</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u8DF3\u8F6C\u65B0\u5EFA\u9875\u9762</td></tr><tr${_scopeId}><td${_scopeId}>\u4FDD\u5B58</td><td${_scopeId}>\u4FDD\u5B58\u64A4\u9500\u5355</td><td${_scopeId}>\u8BE6\u60C5\u9875</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u8C03\u7528save\u63A5\u53E3\uFF0C\u542B\u6821\u9A8C\u53EF\u7ED3\u7B97\u5DE5\u7A0B\u670D\u52A1\u8D39</td></tr><tr${_scopeId}><td${_scopeId}>\u63D0\u4EA4</td><td${_scopeId}>\u63D0\u4EA4\u5BA1\u6279</td><td${_scopeId}>\u8BE6\u60C5\u9875</td><td${_scopeId}>\u5BA1\u6279\u72B6\u6001\u4E3ANEW</td><td${_scopeId}>\u6821\u9A8C\u660E\u7EC6\u672A\u91CD\u590D\u64A4\u9500\uFF0C\u53D1\u8D77\u5DE5\u4F5C\u6D41</td></tr><tr${_scopeId}><td${_scopeId}>\u5BFC\u51FA</td><td${_scopeId}>\u5BFC\u51FA\u5217\u8868</td><td${_scopeId}>\u5217\u8868\u9875</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u8C03\u7528\u5BFC\u51FA\u63A5\u53E3</td></tr></tbody></table><h4${_scopeId}>\u6309\u94AE1\uFF1A\u4FDD\u5B58\uFF08\u8BE6\u60C5\u9875\uFF09</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u5E38\u663E</li><li${_scopeId}><strong${_scopeId}>\u6267\u884C\u903B\u8F91</strong>\uFF1A</li><li${_scopeId}>\u7B2C1\u70B9\uFF1A\u65B0\u5EFA\u65F6\u751F\u6210\u64A4\u9500\u5355\u53F7\uFF08\u4E8B\u4E1A\u90E8\u7F16\u7801+\u89C4\u5219\u7F16\u53F7\uFF09\uFF0C\u8BBE\u7F6E\u72B6\u6001\u4E3A1</li><li${_scopeId}>\u7B2C2\u70B9\uFF1A\u8C03\u7528verifyBeforeInsert\u6821\u9A8C\u64A4\u9500\u540E\u53EF\u7ED3\u7B97\u5DE5\u7A0B\u670D\u52A1\u8D39\u662F\u5426&gt;=0</li><li${_scopeId}>\u7B2C3\u70B9\uFF1A\u63D2\u5165\u64A4\u9500\u5934\u548C\u64A4\u9500\u660E\u7EC6\u884C\uFF08EPM_PAD_CANCEL\uFF09</li><li${_scopeId}>\u7B2C4\u70B9\uFF1A\u7F16\u8F91\u65F6\u5148\u5220\u9664\u65E7\u660E\u7EC6\u518D\u63D2\u5165\u65B0\u660E\u7EC6</li><li${_scopeId}><strong${_scopeId}>\u63A5\u53E3\u8C03\u7528</strong>\uFF1APOST /v1/{organizationId}/epm-payment-allot-cancels/save</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>*</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> epm_payment_allot_cancel </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> id </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> {cancelId};</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>*</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> epm_pad_cancel </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> cancel_id </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> {cancelId};</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u6309\u94AE2\uFF1A\u63D0\u4EA4\uFF08\u8BE6\u60C5\u9875\uFF09</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u5BA1\u6279\u72B6\u6001\u4E3ANEW</li><li${_scopeId}><strong${_scopeId}>\u6267\u884C\u903B\u8F91</strong>\uFF1A</li><li${_scopeId}>\u7B2C1\u70B9\uFF1A\u67E5\u8BE2\u64A4\u9500\u660E\u7EC6\u5BF9\u5E94\u7684\u8BA4\u9886\u660E\u7EC6\uFF0C\u68C0\u67E5\u662F\u5426\u6709cancelFlag=Y\u7684</li><li${_scopeId}>\u7B2C2\u70B9\uFF1A\u5DF2\u64A4\u9500\u7684\u660E\u7EC6\u62A5\u9519\uFF0C\u5217\u51FA\u8BA4\u9886\u5355\u53F7\u3001\u51FA\u5E93\u5355\u53F7\u3001\u4EA7\u54C1\u7F16\u7801</li><li${_scopeId}>\u7B2C3\u70B9\uFF1A\u6821\u9A8C\u901A\u8FC7\u540E\u53D1\u8D77\u5DE5\u4F5C\u6D41EPM_PAYMENT_ALLOT_CANCEL</li><li${_scopeId}>\u7B2C4\u70B9\uFF1A\u66F4\u65B0\u5BA1\u6279\u72B6\u6001\u4E3ARUN\uFF0C\u8BB0\u5F55\u5DE5\u4F5C\u6D41\u5B9E\u4F8BID</li><li${_scopeId}><strong${_scopeId}>\u63A5\u53E3\u8C03\u7528</strong>\uFF1APOST /v1/{organizationId}/epm-payment-allot-cancels/wfProcSubmit</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> d.cancel_flag, pa.payment_allot_code, d.inv_bill_no, d.item_code</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> epm_payment_allot_detail d</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>JOIN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> epm_pad_cancel pc </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ON</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> d.payment_allot_detail_id </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> pc.payment_allot_detail_id</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>JOIN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> epm_payment_allot_line l </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ON</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> d.payment_allot_line_id </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> l.payment_allot_line_id</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>JOIN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> epm_payment_allot pa </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ON</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> l.payment_allot_id </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> pa.payment_allot_id</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> pc.cancel_id </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> {cancelId} </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> d.cancel_flag </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>Y</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u6309\u94AE3\uFF1A\u5BFC\u51FA\uFF08\u5217\u8868\u9875\uFF09</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u5E38\u663E</li><li${_scopeId}><strong${_scopeId}>\u6267\u884C\u903B\u8F91</strong>\uFF1A</li><li${_scopeId}>\u7B2C1\u70B9\uFF1A\u6309\u5F53\u524D\u67E5\u8BE2\u6761\u4EF6\u5BFC\u51FA\u64A4\u9500\u5355\u5217\u8868\u6570\u636E</li><li${_scopeId}><strong${_scopeId}>\u63A5\u53E3\u8C03\u7528</strong>\uFF1AGET /v1/{organizationId}/epm-payment-allot-cancels/list/export</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A\u65E0</li></ul>`);
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
                createVNode("td", null, "\u65B0\u5EFA\u64A4\u9500\u5355"),
                createVNode("td", null, "\u5217\u8868\u9875"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u8DF3\u8F6C\u65B0\u5EFA\u9875\u9762")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u4FDD\u5B58"),
                createVNode("td", null, "\u4FDD\u5B58\u64A4\u9500\u5355"),
                createVNode("td", null, "\u8BE6\u60C5\u9875"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u8C03\u7528save\u63A5\u53E3\uFF0C\u542B\u6821\u9A8C\u53EF\u7ED3\u7B97\u5DE5\u7A0B\u670D\u52A1\u8D39")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u63D0\u4EA4"),
                createVNode("td", null, "\u63D0\u4EA4\u5BA1\u6279"),
                createVNode("td", null, "\u8BE6\u60C5\u9875"),
                createVNode("td", null, "\u5BA1\u6279\u72B6\u6001\u4E3ANEW"),
                createVNode("td", null, "\u6821\u9A8C\u660E\u7EC6\u672A\u91CD\u590D\u64A4\u9500\uFF0C\u53D1\u8D77\u5DE5\u4F5C\u6D41")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5BFC\u51FA"),
                createVNode("td", null, "\u5BFC\u51FA\u5217\u8868"),
                createVNode("td", null, "\u5217\u8868\u9875"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u8C03\u7528\u5BFC\u51FA\u63A5\u53E3")
              ])
            ])
          ]),
          createVNode("h4", null, "\u6309\u94AE1\uFF1A\u4FDD\u5B58\uFF08\u8BE6\u60C5\u9875\uFF09"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u5E38\u663E")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u6267\u884C\u903B\u8F91"),
              createTextVNode("\uFF1A")
            ]),
            createVNode("li", null, "\u7B2C1\u70B9\uFF1A\u65B0\u5EFA\u65F6\u751F\u6210\u64A4\u9500\u5355\u53F7\uFF08\u4E8B\u4E1A\u90E8\u7F16\u7801+\u89C4\u5219\u7F16\u53F7\uFF09\uFF0C\u8BBE\u7F6E\u72B6\u6001\u4E3A1"),
            createVNode("li", null, "\u7B2C2\u70B9\uFF1A\u8C03\u7528verifyBeforeInsert\u6821\u9A8C\u64A4\u9500\u540E\u53EF\u7ED3\u7B97\u5DE5\u7A0B\u670D\u52A1\u8D39\u662F\u5426>=0"),
            createVNode("li", null, "\u7B2C3\u70B9\uFF1A\u63D2\u5165\u64A4\u9500\u5934\u548C\u64A4\u9500\u660E\u7EC6\u884C\uFF08EPM_PAD_CANCEL\uFF09"),
            createVNode("li", null, "\u7B2C4\u70B9\uFF1A\u7F16\u8F91\u65F6\u5148\u5220\u9664\u65E7\u660E\u7EC6\u518D\u63D2\u5165\u65B0\u660E\u7EC6"),
            createVNode("li", null, [
              createVNode("strong", null, "\u63A5\u53E3\u8C03\u7528"),
              createTextVNode("\uFF1APOST /v1/{organizationId}/epm-payment-allot-cancels/save")
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
                  createVNode("span", { style: { "color": "#89DDFF" } }, "*"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " epm_payment_allot_cancel "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " id "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " {cancelId};")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "SELECT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "*"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " epm_pad_cancel "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " cancel_id "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " {cancelId};")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u6309\u94AE2\uFF1A\u63D0\u4EA4\uFF08\u8BE6\u60C5\u9875\uFF09"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u5BA1\u6279\u72B6\u6001\u4E3ANEW")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u6267\u884C\u903B\u8F91"),
              createTextVNode("\uFF1A")
            ]),
            createVNode("li", null, "\u7B2C1\u70B9\uFF1A\u67E5\u8BE2\u64A4\u9500\u660E\u7EC6\u5BF9\u5E94\u7684\u8BA4\u9886\u660E\u7EC6\uFF0C\u68C0\u67E5\u662F\u5426\u6709cancelFlag=Y\u7684"),
            createVNode("li", null, "\u7B2C2\u70B9\uFF1A\u5DF2\u64A4\u9500\u7684\u660E\u7EC6\u62A5\u9519\uFF0C\u5217\u51FA\u8BA4\u9886\u5355\u53F7\u3001\u51FA\u5E93\u5355\u53F7\u3001\u4EA7\u54C1\u7F16\u7801"),
            createVNode("li", null, "\u7B2C3\u70B9\uFF1A\u6821\u9A8C\u901A\u8FC7\u540E\u53D1\u8D77\u5DE5\u4F5C\u6D41EPM_PAYMENT_ALLOT_CANCEL"),
            createVNode("li", null, "\u7B2C4\u70B9\uFF1A\u66F4\u65B0\u5BA1\u6279\u72B6\u6001\u4E3ARUN\uFF0C\u8BB0\u5F55\u5DE5\u4F5C\u6D41\u5B9E\u4F8BID"),
            createVNode("li", null, [
              createVNode("strong", null, "\u63A5\u53E3\u8C03\u7528"),
              createTextVNode("\uFF1APOST /v1/{organizationId}/epm-payment-allot-cancels/wfProcSubmit")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " d.cancel_flag, pa.payment_allot_code, d.inv_bill_no, d.item_code")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " epm_payment_allot_detail d")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "JOIN"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " epm_pad_cancel pc "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ON"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " d.payment_allot_detail_id "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " pc.payment_allot_detail_id")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "JOIN"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " epm_payment_allot_line l "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ON"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " d.payment_allot_line_id "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " l.payment_allot_line_id")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "JOIN"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " epm_payment_allot pa "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ON"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " l.payment_allot_id "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " pa.payment_allot_id")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " pc.cancel_id "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " {cancelId} "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " d.cancel_flag "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "Y"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u6309\u94AE3\uFF1A\u5BFC\u51FA\uFF08\u5217\u8868\u9875\uFF09"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u5E38\u663E")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u6267\u884C\u903B\u8F91"),
              createTextVNode("\uFF1A")
            ]),
            createVNode("li", null, "\u7B2C1\u70B9\uFF1A\u6309\u5F53\u524D\u67E5\u8BE2\u6761\u4EF6\u5BFC\u51FA\u64A4\u9500\u5355\u5217\u8868\u6570\u636E"),
            createVNode("li", null, [
              createVNode("strong", null, "\u63A5\u53E3\u8C03\u7528"),
              createTextVNode("\uFF1AGET /v1/{organizationId}/epm-payment-allot-cancels/list/export")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u6392\u67E5SQL"),
              createTextVNode("\uFF1A\u65E0")
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
        _push2(`<ul${_scopeId}><li${_scopeId}>\u6821\u9A8C1\uFF1A\u64A4\u9500\u540E\u53EF\u7ED3\u7B97\u5DE5\u7A0B\u670D\u52A1\u8D39\u6821\u9A8C \u2014\u2014 \u786E\u4FDD\u64A4\u9500\u540E\u5DF2\u8BA4\u9886\u5DE5\u7A0B\u670D\u52A1\u8D39\u8DB3\u4EE5\u8986\u76D6\u5DF2\u7533\u8BF7\u5151\u73B0\u91D1\u989D</li></ul><ul${_scopeId}><li${_scopeId}>\u8BE6\u7EC6\u903B\u8F91</li></ul><p${_scopeId}>- \u7B2C1\u70B9\uFF1A\u6309\u62A5\u9500\u5355\uFF08svcExpAccId\uFF09\u5206\u7EC4\uFF0C\u8BA1\u7B97\u6BCF\u7EC4\u64A4\u9500\u7684\u5DE5\u7A0B\u670D\u52A1\u8D39\u91D1\u989D\u5408\u8BA1</p><p${_scopeId}>- \u7B2C2\u70B9\uFF1A\u53EF\u7ED3\u7B97\u5151\u73B0\u91D1\u989D=\u5DF2\u8BA4\u9886\u5DE5\u7A0B\u670D\u52A1\u8D39-\u672C\u6B21\u64A4\u9500\u5DE5\u7A0B\u670D\u52A1\u8D39-\u5DF2\u9000\u8D27\u5DE5\u7A0B\u670D\u52A1\u8D39-\u5DF2\u7533\u8BF7\u5151\u73B0\u91D1\u989D</p><p${_scopeId}>- \u7B2C3\u70B9\uFF1A\u53EF\u7ED3\u7B97\u5151\u73B0\u91D1\u989D&lt;0\u65F6\u62A5\u9519\uFF0C\u63D0\u793A\u62A5\u9500\u5355\u53F7</p><ul${_scopeId}><li${_scopeId}>\u7CFB\u7EDF\u4F53\u73B0\uFF1A\u963B\u65AD\u6027\u62A5\u9519</li></ul><ul${_scopeId}><li${_scopeId}>\u6392\u67E5SQL\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- \u67E5\u8BE2\u62A5\u9500\u5173\u8054\u7684\u8BA4\u9886\u4FE1\u606F</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> total_claim_amt, total_claim_service_amt, return_service_amt</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> epm_pad_cancel_query </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> svc_exp_acc_id </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> {svcExpAccId};</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- \u67E5\u8BE2\u5DF2\u7533\u8BF7\u5151\u73B0\u91D1\u989D</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> applied_amt </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> epm_applied_amt </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> svc_exp_acc_id </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> {svcExpAccId};</span></span>
<span class="line"${_scopeId}></span></code></pre></div>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, "\u6821\u9A8C1\uFF1A\u64A4\u9500\u540E\u53EF\u7ED3\u7B97\u5DE5\u7A0B\u670D\u52A1\u8D39\u6821\u9A8C \u2014\u2014 \u786E\u4FDD\u64A4\u9500\u540E\u5DF2\u8BA4\u9886\u5DE5\u7A0B\u670D\u52A1\u8D39\u8DB3\u4EE5\u8986\u76D6\u5DF2\u7533\u8BF7\u5151\u73B0\u91D1\u989D")
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u8BE6\u7EC6\u903B\u8F91")
          ]),
          createVNode("p", null, "- \u7B2C1\u70B9\uFF1A\u6309\u62A5\u9500\u5355\uFF08svcExpAccId\uFF09\u5206\u7EC4\uFF0C\u8BA1\u7B97\u6BCF\u7EC4\u64A4\u9500\u7684\u5DE5\u7A0B\u670D\u52A1\u8D39\u91D1\u989D\u5408\u8BA1"),
          createVNode("p", null, "- \u7B2C2\u70B9\uFF1A\u53EF\u7ED3\u7B97\u5151\u73B0\u91D1\u989D=\u5DF2\u8BA4\u9886\u5DE5\u7A0B\u670D\u52A1\u8D39-\u672C\u6B21\u64A4\u9500\u5DE5\u7A0B\u670D\u52A1\u8D39-\u5DF2\u9000\u8D27\u5DE5\u7A0B\u670D\u52A1\u8D39-\u5DF2\u7533\u8BF7\u5151\u73B0\u91D1\u989D"),
          createVNode("p", null, "- \u7B2C3\u70B9\uFF1A\u53EF\u7ED3\u7B97\u5151\u73B0\u91D1\u989D<0\u65F6\u62A5\u9519\uFF0C\u63D0\u793A\u62A5\u9500\u5355\u53F7"),
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
                  createVNode("span", { style: { "color": "#676E95" } }, "-- \u67E5\u8BE2\u62A5\u9500\u5173\u8054\u7684\u8BA4\u9886\u4FE1\u606F")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "SELECT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " total_claim_amt, total_claim_service_amt, return_service_amt")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " epm_pad_cancel_query "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " svc_exp_acc_id "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " {svcExpAccId};")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#89DDFF" } }, "    "),
                  createVNode("span", { style: { "color": "#676E95" } }, "-- \u67E5\u8BE2\u5DF2\u7533\u8BF7\u5151\u73B0\u91D1\u989D")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "SELECT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " applied_amt "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " epm_applied_amt "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " svc_exp_acc_id "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " {svcExpAccId};")
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
        _push2(`<ul${_scopeId}><li${_scopeId}>\u6821\u9A8C1\uFF1A\u64A4\u9500\u660E\u7EC6\u91CD\u590D\u6821\u9A8C \u2014\u2014 \u786E\u4FDD\u9009\u4E2D\u7684\u8BA4\u9886\u660E\u7EC6\u672A\u88AB\u5176\u4ED6\u64A4\u9500\u5355\u64A4\u9500</li></ul><ul${_scopeId}><li${_scopeId}>\u8BE6\u7EC6\u903B\u8F91</li></ul><p${_scopeId}>- \u7B2C1\u70B9\uFF1A\u67E5\u8BE2\u64A4\u9500\u660E\u7EC6\u5BF9\u5E94\u7684\u8BA4\u9886\u660E\u7EC6\uFF0C\u8FC7\u6EE4cancelFlag=Y\u7684</p><p${_scopeId}>- \u7B2C2\u70B9\uFF1A\u5B58\u5728\u5DF2\u64A4\u9500\u660E\u7EC6\u65F6\u62A5\u9519\uFF0C\u5217\u51FA\u8BA4\u9886\u5355\u53F7\u3001\u51FA\u5E93\u5355\u53F7\u3001\u4EA7\u54C1\u7F16\u7801</p><ul${_scopeId}><li${_scopeId}>\u7CFB\u7EDF\u4F53\u73B0\uFF1A\u963B\u65AD\u6027\u62A5\u9519</li></ul><ul${_scopeId}><li${_scopeId}>\u6392\u67E5SQL\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> pa.payment_allot_code, d.inv_bill_no, d.item_code</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> epm_payment_allot_detail d</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>JOIN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> epm_pad_cancel pc </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ON</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> d.payment_allot_detail_id </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> pc.payment_allot_detail_id</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>JOIN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> epm_payment_allot_line l </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ON</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> d.payment_allot_line_id </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> l.payment_allot_line_id</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>JOIN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> epm_payment_allot pa </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ON</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> l.payment_allot_id </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> pa.payment_allot_id</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> pc.cancel_id </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> {cancelId} </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> d.cancel_flag </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>Y</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><ul${_scopeId}><li${_scopeId}>\u6821\u9A8C2\uFF1A\u64A4\u9500\u660E\u7EC6\u975E\u7A7A\u6821\u9A8C \u2014\u2014 \u786E\u4FDD\u64A4\u9500\u5355\u6709\u660E\u7EC6\u884C</li></ul><ul${_scopeId}><li${_scopeId}>\u8BE6\u7EC6\u903B\u8F91</li></ul><p${_scopeId}>- \u7B2C1\u70B9\uFF1A\u67E5\u8BE2EPM_PAD_CANCEL\u8868\u4E2DcancelId\u5BF9\u5E94\u7684\u660E\u7EC6</p><p${_scopeId}>- \u7B2C2\u70B9\uFF1A\u660E\u7EC6\u4E3A\u7A7A\u65F6\u62A5\u9519&quot;\u6D41\u7A0B\u542F\u52A8\u5F02\u5E38\uFF0C\u64A4\u9500\u660E\u7EC6\u4E0D\u5B58\u5728&quot;</p><ul${_scopeId}><li${_scopeId}>\u7CFB\u7EDF\u4F53\u73B0\uFF1A\u963B\u65AD\u6027\u62A5\u9519</li></ul><ul${_scopeId}><li${_scopeId}>\u6392\u67E5SQL\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}>COUNT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>*</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> epm_pad_cancel </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> cancel_id </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> {cancelId};</span></span>
<span class="line"${_scopeId}></span></code></pre></div><ul${_scopeId}><li${_scopeId}>\u6821\u9A8C3\uFF1AERP\u51B2\u9500\u63A8\u9001\u6821\u9A8C \u2014\u2014 \u63A8\u9001ERP\u8D1F\u6570\u51B2\u9500\u5E76\u6821\u9A8C\u8FD4\u56DE</li></ul><ul${_scopeId}><li${_scopeId}>\u8BE6\u7EC6\u903B\u8F91</li></ul><p${_scopeId}>- \u7B2C1\u70B9\uFF1A\u6309\u8BA4\u9886\u5355\u5206\u7EC4\u7EC4\u88C5\u51B2\u9500\u6570\u636E\uFF0C\u6240\u6709\u91D1\u989D\u53D6\u8D1F</p><p${_scopeId}>- \u7B2C2\u70B9\uFF1A\u63A8\u9001ERP\uFF0CactionStatus=APPROVE\uFF0CsourceType=REVOKE_CLAIM</p><p${_scopeId}>- \u7B2C3\u70B9\uFF1AERP\u8FD4\u56DE\u72B6\u6001\u975ES\u65F6\u62A5\u9519</p><ul${_scopeId}><li${_scopeId}>\u7CFB\u7EDF\u4F53\u73B0\uFF1A\u963B\u65AD\u6027\u62A5\u9519</li></ul><ul${_scopeId}><li${_scopeId}>\u6392\u67E5SQL\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>*</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> sys_exception_msg </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>objid</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> {cancelId} </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> objtypename </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>\u5230\u6B3E\u8BA4\u9886\u64A4\u9500</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, "\u6821\u9A8C1\uFF1A\u64A4\u9500\u660E\u7EC6\u91CD\u590D\u6821\u9A8C \u2014\u2014 \u786E\u4FDD\u9009\u4E2D\u7684\u8BA4\u9886\u660E\u7EC6\u672A\u88AB\u5176\u4ED6\u64A4\u9500\u5355\u64A4\u9500")
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u8BE6\u7EC6\u903B\u8F91")
          ]),
          createVNode("p", null, "- \u7B2C1\u70B9\uFF1A\u67E5\u8BE2\u64A4\u9500\u660E\u7EC6\u5BF9\u5E94\u7684\u8BA4\u9886\u660E\u7EC6\uFF0C\u8FC7\u6EE4cancelFlag=Y\u7684"),
          createVNode("p", null, "- \u7B2C2\u70B9\uFF1A\u5B58\u5728\u5DF2\u64A4\u9500\u660E\u7EC6\u65F6\u62A5\u9519\uFF0C\u5217\u51FA\u8BA4\u9886\u5355\u53F7\u3001\u51FA\u5E93\u5355\u53F7\u3001\u4EA7\u54C1\u7F16\u7801"),
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " pa.payment_allot_code, d.inv_bill_no, d.item_code")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " epm_payment_allot_detail d")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "JOIN"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " epm_pad_cancel pc "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ON"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " d.payment_allot_detail_id "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " pc.payment_allot_detail_id")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "JOIN"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " epm_payment_allot_line l "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ON"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " d.payment_allot_line_id "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " l.payment_allot_line_id")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "JOIN"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " epm_payment_allot pa "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ON"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " l.payment_allot_id "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " pa.payment_allot_id")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " pc.cancel_id "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " {cancelId} "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " d.cancel_flag "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "Y"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u6821\u9A8C2\uFF1A\u64A4\u9500\u660E\u7EC6\u975E\u7A7A\u6821\u9A8C \u2014\u2014 \u786E\u4FDD\u64A4\u9500\u5355\u6709\u660E\u7EC6\u884C")
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u8BE6\u7EC6\u903B\u8F91")
          ]),
          createVNode("p", null, "- \u7B2C1\u70B9\uFF1A\u67E5\u8BE2EPM_PAD_CANCEL\u8868\u4E2DcancelId\u5BF9\u5E94\u7684\u660E\u7EC6"),
          createVNode("p", null, '- \u7B2C2\u70B9\uFF1A\u660E\u7EC6\u4E3A\u7A7A\u65F6\u62A5\u9519"\u6D41\u7A0B\u542F\u52A8\u5F02\u5E38\uFF0C\u64A4\u9500\u660E\u7EC6\u4E0D\u5B58\u5728"'),
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
                  createVNode("span", { style: { "color": "#82AAFF" } }, "COUNT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "("),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "*"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " epm_pad_cancel "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " cancel_id "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " {cancelId};")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u6821\u9A8C3\uFF1AERP\u51B2\u9500\u63A8\u9001\u6821\u9A8C \u2014\u2014 \u63A8\u9001ERP\u8D1F\u6570\u51B2\u9500\u5E76\u6821\u9A8C\u8FD4\u56DE")
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u8BE6\u7EC6\u903B\u8F91")
          ]),
          createVNode("p", null, "- \u7B2C1\u70B9\uFF1A\u6309\u8BA4\u9886\u5355\u5206\u7EC4\u7EC4\u88C5\u51B2\u9500\u6570\u636E\uFF0C\u6240\u6709\u91D1\u989D\u53D6\u8D1F"),
          createVNode("p", null, "- \u7B2C2\u70B9\uFF1A\u63A8\u9001ERP\uFF0CactionStatus=APPROVE\uFF0CsourceType=REVOKE_CLAIM"),
          createVNode("p", null, "- \u7B2C3\u70B9\uFF1AERP\u8FD4\u56DE\u72B6\u6001\u975ES\u65F6\u62A5\u9519"),
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " sys_exception_msg "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "objid"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " {cancelId} "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " objtypename "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "\u5230\u6B3E\u8BA4\u9886\u64A4\u9500"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
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
  _push(ssrRenderComponent(_component_KbCard, { title: "\u72B6\u6001\u673A" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h4${_scopeId}>\u72B6\u6001\u673A\u6D41\u8F6C\u56FE</h4><div class="language-text"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>text</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>NEW(\u65B0\u5EFA) \u2500\u2500\u63D0\u4EA4\u2500\u2500\u2192 RUN(\u5BA1\u6279\u4E2D) \u2500\u2500\u5BA1\u6279\u901A\u8FC7\u2500\u2500\u2192 APPROVED(\u5DF2\u5BA1\u6838)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>                        \u2502</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>                        \u2502\u5BA1\u6279\u9A73\u56DE</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>                        \u2193</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>                     \u56DE\u5230NEW</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}></span></span></code></pre></div><h4${_scopeId}>\u72B6\u6001\u673A\u5217\u8868</h4><table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u72B6\u6001\u673A\u540D\u79F0</th><th${_scopeId}>\u72B6\u6001\u91CA\u4E49</th><th${_scopeId}>\u53EF\u6267\u884C\u7684\u64CD\u4F5C</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>NEW</td><td${_scopeId}>\u65B0\u5EFA\uFF0C\u672A\u63D0\u4EA4</td><td${_scopeId}>\u7F16\u8F91\u3001\u4FDD\u5B58\u3001\u63D0\u4EA4</td></tr><tr${_scopeId}><td${_scopeId}>RUN</td><td${_scopeId}>\u5BA1\u6279\u4E2D\uFF0C\u5DE5\u4F5C\u6D41\u8FD0\u884C\u4E2D</td><td${_scopeId}>\u65E0\uFF08\u7B49\u5F85\u5BA1\u6279\u7ED3\u679C\uFF09</td></tr><tr${_scopeId}><td${_scopeId}>APPROVED</td><td${_scopeId}>\u5DF2\u5BA1\u6838\uFF0C\u5BA1\u6279\u901A\u8FC7</td><td${_scopeId}>\u65E0\uFF08\u5DF2\u5B8C\u6210\u64A4\u9500\uFF0C\u91D1\u989D\u5DF2\u56DE\u52A0\uFF09</td></tr></tbody></table>`);
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "NEW(\u65B0\u5EFA) \u2500\u2500\u63D0\u4EA4\u2500\u2500\u2192 RUN(\u5BA1\u6279\u4E2D) \u2500\u2500\u5BA1\u6279\u901A\u8FC7\u2500\u2500\u2192 APPROVED(\u5DF2\u5BA1\u6838)")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "                        \u2502")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "                        \u2502\u5BA1\u6279\u9A73\u56DE")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "                        \u2193")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "                     \u56DE\u5230NEW")
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
                createVNode("td", null, "\u65B0\u5EFA\uFF0C\u672A\u63D0\u4EA4"),
                createVNode("td", null, "\u7F16\u8F91\u3001\u4FDD\u5B58\u3001\u63D0\u4EA4")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "RUN"),
                createVNode("td", null, "\u5BA1\u6279\u4E2D\uFF0C\u5DE5\u4F5C\u6D41\u8FD0\u884C\u4E2D"),
                createVNode("td", null, "\u65E0\uFF08\u7B49\u5F85\u5BA1\u6279\u7ED3\u679C\uFF09")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "APPROVED"),
                createVNode("td", null, "\u5DF2\u5BA1\u6838\uFF0C\u5BA1\u6279\u901A\u8FC7"),
                createVNode("td", null, "\u65E0\uFF08\u5DF2\u5B8C\u6210\u64A4\u9500\uFF0C\u91D1\u989D\u5DF2\u56DE\u52A0\uFF09")
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, { title: "\u88681\uFF1AEPM_PAYMENT_ALLOT_CANCEL\uFF08\u64A4\u9500\u8BA4\u9886\u5934\u8868\uFF09" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5B57\u6BB5\u540D</th><th${_scopeId}>\u7C7B\u578B</th><th${_scopeId}>\u91CA\u4E49</th><th${_scopeId}>\u5BF9\u5E94\u754C\u9762\u5B57\u6BB5</th><th${_scopeId}>\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>ID</td><td${_scopeId}>NUMBER</td><td${_scopeId}>\u64A4\u9500\u5355ID</td><td${_scopeId}>-</td><td${_scopeId}>\u4E3B\u952E\uFF0C\u81EA\u589E</td></tr><tr${_scopeId}><td${_scopeId}>CANCEL_NO</td><td${_scopeId}>VARCHAR2</td><td${_scopeId}>\u64A4\u9500\u5355\u53F7</td><td${_scopeId}>\u64A4\u9500\u5355\u53F7</td><td${_scopeId}>=\u4E8B\u4E1A\u90E8\u7F16\u7801+\u89C4\u5219\u7F16\u53F7(AE.EPM_PAYMENT_ALLOT_CANCEL_NO)</td></tr><tr${_scopeId}><td${_scopeId}>CANCEL_DATE</td><td${_scopeId}>DATE</td><td${_scopeId}>\u64A4\u9500\u65F6\u95F4</td><td${_scopeId}>\u64A4\u9500\u65F6\u95F4</td><td${_scopeId}>\u4FDD\u5B58\u65F6\u7528\u6237\u8F93\u5165\uFF0C\u5BA1\u6279\u901A\u8FC7\u540E\u66F4\u65B0\u4E3A\u5F53\u524D\u65F6\u95F4</td></tr><tr${_scopeId}><td${_scopeId}>PROJECT_ID</td><td${_scopeId}>NUMBER</td><td${_scopeId}>\u9879\u76EEID</td><td${_scopeId}>\u9879\u76EE</td><td${_scopeId}>\u7528\u6237\u9009\u62E9</td></tr><tr${_scopeId}><td${_scopeId}>STAT</td><td${_scopeId}>NUMBER</td><td${_scopeId}>\u64A4\u9500\u72B6\u6001</td><td${_scopeId}>-</td><td${_scopeId}>\u65B0\u5EFA\u65F6=1</td></tr><tr${_scopeId}><td${_scopeId}>WFID</td><td${_scopeId}>NUMBER</td><td${_scopeId}>\u6D41\u7A0BID</td><td${_scopeId}>-</td><td${_scopeId}>\u65B0\u5EFA\u65F6=0</td></tr><tr${_scopeId}><td${_scopeId}>WFFLAG</td><td${_scopeId}>NUMBER</td><td${_scopeId}>\u6D41\u7A0B\u6807\u5FD7</td><td${_scopeId}>-</td><td${_scopeId}>\u65B0\u5EFA\u65F6=0</td></tr><tr${_scopeId}><td${_scopeId}>CANCEL_REASON</td><td${_scopeId}>VARCHAR2</td><td${_scopeId}>\u64A4\u9500\u539F\u56E0</td><td${_scopeId}>\u64A4\u9500\u539F\u56E0</td><td${_scopeId}>\u7528\u6237\u8F93\u5165</td></tr><tr${_scopeId}><td${_scopeId}>ORGANIZATION_ID</td><td${_scopeId}>NUMBER</td><td${_scopeId}>\u4E8B\u4E1A\u90E8ID</td><td${_scopeId}>-</td><td${_scopeId}>\u4ECE\u7528\u6237\u4E0A\u4E0B\u6587\u83B7\u53D6</td></tr><tr${_scopeId}><td${_scopeId}>HZ_APPROVE_STATUS</td><td${_scopeId}>VARCHAR2</td><td${_scopeId}>\u5BA1\u6279\u72B6\u6001</td><td${_scopeId}>\u5BA1\u6279\u72B6\u6001</td><td${_scopeId}>NEW/RUN/APPROVED</td></tr><tr${_scopeId}><td${_scopeId}>HZ_INSTANCE_ID</td><td${_scopeId}>NUMBER</td><td${_scopeId}>\u5BA1\u6279\u5B9E\u4F8BID</td><td${_scopeId}>-</td><td${_scopeId}>\u53D1\u8D77\u5DE5\u4F5C\u6D41\u65F6\u5199\u5165</td></tr><tr${_scopeId}><td${_scopeId}>CREATED_BY_BAK</td><td${_scopeId}>VARCHAR2</td><td${_scopeId}>\u521B\u5EFA\u4EBA</td><td${_scopeId}>\u521B\u5EFA\u4EBA</td><td${_scopeId}>\u7CFB\u7EDF\u81EA\u52A8\u8BB0\u5F55</td></tr><tr${_scopeId}><td${_scopeId}>CREATED_BAK</td><td${_scopeId}>DATE</td><td${_scopeId}>\u521B\u5EFA\u65F6\u95F4</td><td${_scopeId}>\u521B\u5EFA\u65F6\u95F4</td><td${_scopeId}>\u7CFB\u7EDF\u81EA\u52A8\u8BB0\u5F55</td></tr><tr${_scopeId}><td${_scopeId}>LAST_UPD_BY_BAK</td><td${_scopeId}>VARCHAR2</td><td${_scopeId}>\u6700\u540E\u66F4\u65B0\u4EBA</td><td${_scopeId}>-</td><td${_scopeId}>\u7CFB\u7EDF\u81EA\u52A8\u8BB0\u5F55</td></tr><tr${_scopeId}><td${_scopeId}>LAST_UPD_BAK</td><td${_scopeId}>DATE</td><td${_scopeId}>\u6700\u540E\u66F4\u65B0\u65F6\u95F4</td><td${_scopeId}>-</td><td${_scopeId}>\u7CFB\u7EDF\u81EA\u52A8\u8BB0\u5F55</td></tr></tbody></table>`);
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
                createVNode("td", null, "ID"),
                createVNode("td", null, "NUMBER"),
                createVNode("td", null, "\u64A4\u9500\u5355ID"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u4E3B\u952E\uFF0C\u81EA\u589E")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "CANCEL_NO"),
                createVNode("td", null, "VARCHAR2"),
                createVNode("td", null, "\u64A4\u9500\u5355\u53F7"),
                createVNode("td", null, "\u64A4\u9500\u5355\u53F7"),
                createVNode("td", null, "=\u4E8B\u4E1A\u90E8\u7F16\u7801+\u89C4\u5219\u7F16\u53F7(AE.EPM_PAYMENT_ALLOT_CANCEL_NO)")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "CANCEL_DATE"),
                createVNode("td", null, "DATE"),
                createVNode("td", null, "\u64A4\u9500\u65F6\u95F4"),
                createVNode("td", null, "\u64A4\u9500\u65F6\u95F4"),
                createVNode("td", null, "\u4FDD\u5B58\u65F6\u7528\u6237\u8F93\u5165\uFF0C\u5BA1\u6279\u901A\u8FC7\u540E\u66F4\u65B0\u4E3A\u5F53\u524D\u65F6\u95F4")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "PROJECT_ID"),
                createVNode("td", null, "NUMBER"),
                createVNode("td", null, "\u9879\u76EEID"),
                createVNode("td", null, "\u9879\u76EE"),
                createVNode("td", null, "\u7528\u6237\u9009\u62E9")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "STAT"),
                createVNode("td", null, "NUMBER"),
                createVNode("td", null, "\u64A4\u9500\u72B6\u6001"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u65B0\u5EFA\u65F6=1")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "WFID"),
                createVNode("td", null, "NUMBER"),
                createVNode("td", null, "\u6D41\u7A0BID"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u65B0\u5EFA\u65F6=0")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "WFFLAG"),
                createVNode("td", null, "NUMBER"),
                createVNode("td", null, "\u6D41\u7A0B\u6807\u5FD7"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u65B0\u5EFA\u65F6=0")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "CANCEL_REASON"),
                createVNode("td", null, "VARCHAR2"),
                createVNode("td", null, "\u64A4\u9500\u539F\u56E0"),
                createVNode("td", null, "\u64A4\u9500\u539F\u56E0"),
                createVNode("td", null, "\u7528\u6237\u8F93\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "ORGANIZATION_ID"),
                createVNode("td", null, "NUMBER"),
                createVNode("td", null, "\u4E8B\u4E1A\u90E8ID"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u4ECE\u7528\u6237\u4E0A\u4E0B\u6587\u83B7\u53D6")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "HZ_APPROVE_STATUS"),
                createVNode("td", null, "VARCHAR2"),
                createVNode("td", null, "\u5BA1\u6279\u72B6\u6001"),
                createVNode("td", null, "\u5BA1\u6279\u72B6\u6001"),
                createVNode("td", null, "NEW/RUN/APPROVED")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "HZ_INSTANCE_ID"),
                createVNode("td", null, "NUMBER"),
                createVNode("td", null, "\u5BA1\u6279\u5B9E\u4F8BID"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u53D1\u8D77\u5DE5\u4F5C\u6D41\u65F6\u5199\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "CREATED_BY_BAK"),
                createVNode("td", null, "VARCHAR2"),
                createVNode("td", null, "\u521B\u5EFA\u4EBA"),
                createVNode("td", null, "\u521B\u5EFA\u4EBA"),
                createVNode("td", null, "\u7CFB\u7EDF\u81EA\u52A8\u8BB0\u5F55")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "CREATED_BAK"),
                createVNode("td", null, "DATE"),
                createVNode("td", null, "\u521B\u5EFA\u65F6\u95F4"),
                createVNode("td", null, "\u521B\u5EFA\u65F6\u95F4"),
                createVNode("td", null, "\u7CFB\u7EDF\u81EA\u52A8\u8BB0\u5F55")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "LAST_UPD_BY_BAK"),
                createVNode("td", null, "VARCHAR2"),
                createVNode("td", null, "\u6700\u540E\u66F4\u65B0\u4EBA"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u7CFB\u7EDF\u81EA\u52A8\u8BB0\u5F55")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "LAST_UPD_BAK"),
                createVNode("td", null, "DATE"),
                createVNode("td", null, "\u6700\u540E\u66F4\u65B0\u65F6\u95F4"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u7CFB\u7EDF\u81EA\u52A8\u8BB0\u5F55")
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, { title: "\u88682\uFF1AEPM_PAD_CANCEL\uFF08\u64A4\u9500\u8BA4\u9886\u660E\u7EC6\u8868\uFF09" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5B57\u6BB5\u540D</th><th${_scopeId}>\u7C7B\u578B</th><th${_scopeId}>\u91CA\u4E49</th><th${_scopeId}>\u5BF9\u5E94\u754C\u9762\u5B57\u6BB5</th><th${_scopeId}>\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>ID</td><td${_scopeId}>NUMBER</td><td${_scopeId}>\u64A4\u9500\u660E\u7EC6ID</td><td${_scopeId}>\u64A4\u9500\u660E\u7EC6ID</td><td${_scopeId}>\u4E3B\u952E\uFF0C\u81EA\u589E</td></tr><tr${_scopeId}><td${_scopeId}>CANCEL_ID</td><td${_scopeId}>NUMBER</td><td${_scopeId}>\u64A4\u9500\u5355ID</td><td${_scopeId}>-</td><td${_scopeId}>\u5173\u8054\u64A4\u9500\u5934\u8868</td></tr><tr${_scopeId}><td${_scopeId}>PAYMENT_ALLOT_DETAIL_ID</td><td${_scopeId}>NUMBER</td><td${_scopeId}>\u8BA4\u9886\u660E\u7EC6ID</td><td${_scopeId}>\u8BA4\u9886\u660E\u7EC6ID</td><td${_scopeId}>\u5173\u8054EPM_PAYMENT_ALLOT_DETAIL</td></tr><tr${_scopeId}><td${_scopeId}>CREATED_BY_BAK</td><td${_scopeId}>VARCHAR2</td><td${_scopeId}>\u521B\u5EFA\u4EBA</td><td${_scopeId}>-</td><td${_scopeId}>\u7CFB\u7EDF\u81EA\u52A8\u8BB0\u5F55</td></tr><tr${_scopeId}><td${_scopeId}>CREATED_BAK</td><td${_scopeId}>DATE</td><td${_scopeId}>\u521B\u5EFA\u65F6\u95F4</td><td${_scopeId}>-</td><td${_scopeId}>\u7CFB\u7EDF\u81EA\u52A8\u8BB0\u5F55</td></tr><tr${_scopeId}><td${_scopeId}>LAST_UPD_BY_BAK</td><td${_scopeId}>VARCHAR2</td><td${_scopeId}>\u6700\u540E\u66F4\u65B0\u4EBA</td><td${_scopeId}>-</td><td${_scopeId}>\u7CFB\u7EDF\u81EA\u52A8\u8BB0\u5F55</td></tr><tr${_scopeId}><td${_scopeId}>CLAST_UPD_BAK</td><td${_scopeId}>DATE</td><td${_scopeId}>\u6700\u540E\u66F4\u65B0\u65F6\u95F4</td><td${_scopeId}>-</td><td${_scopeId}>\u7CFB\u7EDF\u81EA\u52A8\u8BB0\u5F55</td></tr></tbody></table>`);
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
                createVNode("td", null, "ID"),
                createVNode("td", null, "NUMBER"),
                createVNode("td", null, "\u64A4\u9500\u660E\u7EC6ID"),
                createVNode("td", null, "\u64A4\u9500\u660E\u7EC6ID"),
                createVNode("td", null, "\u4E3B\u952E\uFF0C\u81EA\u589E")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "CANCEL_ID"),
                createVNode("td", null, "NUMBER"),
                createVNode("td", null, "\u64A4\u9500\u5355ID"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u5173\u8054\u64A4\u9500\u5934\u8868")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "PAYMENT_ALLOT_DETAIL_ID"),
                createVNode("td", null, "NUMBER"),
                createVNode("td", null, "\u8BA4\u9886\u660E\u7EC6ID"),
                createVNode("td", null, "\u8BA4\u9886\u660E\u7EC6ID"),
                createVNode("td", null, "\u5173\u8054EPM_PAYMENT_ALLOT_DETAIL")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "CREATED_BY_BAK"),
                createVNode("td", null, "VARCHAR2"),
                createVNode("td", null, "\u521B\u5EFA\u4EBA"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u7CFB\u7EDF\u81EA\u52A8\u8BB0\u5F55")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "CREATED_BAK"),
                createVNode("td", null, "DATE"),
                createVNode("td", null, "\u521B\u5EFA\u65F6\u95F4"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u7CFB\u7EDF\u81EA\u52A8\u8BB0\u5F55")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "LAST_UPD_BY_BAK"),
                createVNode("td", null, "VARCHAR2"),
                createVNode("td", null, "\u6700\u540E\u66F4\u65B0\u4EBA"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u7CFB\u7EDF\u81EA\u52A8\u8BB0\u5F55")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "CLAST_UPD_BAK"),
                createVNode("td", null, "DATE"),
                createVNode("td", null, "\u6700\u540E\u66F4\u65B0\u65F6\u95F4"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u7CFB\u7EDF\u81EA\u52A8\u8BB0\u5F55")
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, { title: "\u76F8\u5173\u8868\uFF1AEPM_PAYMENT_ALLOT_DETAIL\uFF08\u8BA4\u9886\u51FA\u5E93\u5355\u660E\u7EC6\u8868-\u76F8\u5173\u5B57\u6BB5\uFF09" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5B57\u6BB5\u540D</th><th${_scopeId}>\u7C7B\u578B</th><th${_scopeId}>\u91CA\u4E49</th><th${_scopeId}>\u5BF9\u5E94\u754C\u9762\u5B57\u6BB5</th><th${_scopeId}>\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>CANCEL_FLAG</td><td${_scopeId}>VARCHAR2</td><td${_scopeId}>\u662F\u5426\u64A4\u9500</td><td${_scopeId}>-</td><td${_scopeId}>\u64A4\u9500\u5BA1\u6279\u901A\u8FC7\u540E\u7F6E\u4E3AY\uFF0C\u9ED8\u8BA4N</td></tr></tbody></table>`);
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
                createVNode("td", null, "CANCEL_FLAG"),
                createVNode("td", null, "VARCHAR2"),
                createVNode("td", null, "\u662F\u5426\u64A4\u9500"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u64A4\u9500\u5BA1\u6279\u901A\u8FC7\u540E\u7F6E\u4E3AY\uFF0C\u9ED8\u8BA4N")
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
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u62A5\u9519\u4FE1\u606F</th><th${_scopeId}>\u63D0\u793A\u8282\u70B9</th><th${_scopeId}>\u6839\u56E0\u4E0E\u89E3\u51B3\u65B9\u6848</th><th${_scopeId}>\u7B49\u7EA7</th><th${_scopeId}>\u8BE6\u7EC6\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u64A4\u9500\u660E\u7EC6\u4E2D\uFF0C\u542B\u6709\u5DF2\u7ECF\u62A5\u9500\u7684\u8BA4\u9886\u660E\u7EC6\uFF0C\u4E14\u64A4\u9500\u540E\u53EF\u7ED3\u7B97\u5DE5\u7A0B\u670D\u52A1\u8D39\u5C0F\u4E8E\u96F6\uFF0C\u4E0D\u5141\u8BB8\u64A4\u9500</td><td${_scopeId}>\u4FDD\u5B58</td><td${_scopeId}>\u64A4\u9500\u540E\u5DF2\u8BA4\u9886\u5DE5\u7A0B\u670D\u52A1\u8D39\u4E0D\u8DB3\u4EE5\u8986\u76D6\u5DF2\u7533\u8BF7\u5151\u73B0\u91D1\u989D\uFF0C\u51CF\u5C11\u64A4\u9500\u660E\u7EC6\u4E2D\u5DE5\u7A0B\u670D\u52A1\u8D39\u91D1\u989D</td><td${_scopeId}>\u963B\u65AD\u6027\u62A5\u9519</td><td${_scopeId}>[\u67E5\u770B]</td></tr><tr${_scopeId}><td${_scopeId}>\u660E\u7EC6\u4E2D\u4EE5\u4E0B\u8BA4\u9886\u660E\u7EC6\u5DF2\u88AB\u64A4\u9500\uFF0C\u8BF7\u5254\u9664\u540E\u518D\u91CD\u65B0\u63D0\u4EA4\u64A4\u9500</td><td${_scopeId}>\u63D0\u4EA4</td><td${_scopeId}>\u9009\u4E2D\u7684\u8BA4\u9886\u660E\u7EC6\u5DF2\u88AB\u5176\u4ED6\u64A4\u9500\u5355\u64A4\u9500\uFF0C\u5254\u9664\u5DF2\u64A4\u9500\u660E\u7EC6</td><td${_scopeId}>\u963B\u65AD\u6027\u62A5\u9519</td><td${_scopeId}>[\u67E5\u770B]</td></tr><tr${_scopeId}><td${_scopeId}>\u6D41\u7A0B\u542F\u52A8\u5F02\u5E38\uFF0C\u5355\u636Eid\u4E0D\u80FD\u4E3A\u7A7A</td><td${_scopeId}>\u63D0\u4EA4/\u5B8C\u7ED3</td><td${_scopeId}>\u5DE5\u4F5C\u6D41\u56DE\u8C03\u7F3A\u5C11\u5355\u636EID\uFF0C\u68C0\u67E5\u5DE5\u4F5C\u6D41\u914D\u7F6E</td><td${_scopeId}>\u963B\u65AD\u6027\u62A5\u9519</td><td${_scopeId}>[\u67E5\u770B]</td></tr><tr${_scopeId}><td${_scopeId}>\u6D41\u7A0B\u542F\u52A8\u5F02\u5E38\uFF0C\u5355\u636E\u4E0D\u5B58\u5728</td><td${_scopeId}>\u63D0\u4EA4/\u5B8C\u7ED3</td><td${_scopeId}>\u64A4\u9500\u5355\u5DF2\u88AB\u5220\u9664\uFF0C\u5237\u65B0\u5217\u8868</td><td${_scopeId}>\u963B\u65AD\u6027\u62A5\u9519</td><td${_scopeId}>[\u67E5\u770B]</td></tr><tr${_scopeId}><td${_scopeId}>\u6D41\u7A0B\u542F\u52A8\u5F02\u5E38\uFF0C\u64A4\u9500\u660E\u7EC6\u4E0D\u5B58\u5728</td><td${_scopeId}>\u63D0\u4EA4/\u5B8C\u7ED3</td><td${_scopeId}>\u64A4\u9500\u5355\u7F3A\u5C11\u660E\u7EC6\u884C\uFF0C\u68C0\u67E5\u660E\u7EC6\u6570\u636E</td><td${_scopeId}>\u963B\u65AD\u6027\u62A5\u9519</td><td${_scopeId}>[\u67E5\u770B]</td></tr><tr${_scopeId}><td${_scopeId}>erp\u8FD4\u56DE\u8BA4\u9886\u7ED3\u679C\u4E3A\u7A7A</td><td${_scopeId}>ERP\u63A8\u9001</td><td${_scopeId}>ERP\u63A5\u53E3\u5F02\u5E38\uFF0C\u68C0\u67E5ERP\u670D\u52A1\u72B6\u6001</td><td${_scopeId}>\u963B\u65AD\u6027\u62A5\u9519</td><td${_scopeId}>[\u67E5\u770B]</td></tr><tr${_scopeId}><td${_scopeId}>\u8BA4\u9886\u63A8\u9001erp\u5F02\u5E38</td><td${_scopeId}>ERP\u63A8\u9001</td><td${_scopeId}>ERP\u8FD4\u56DE\u9519\u8BEF\u4FE1\u606F\uFF0C\u67E5\u770B\u5177\u4F53\u9519\u8BEF\u5185\u5BB9</td><td${_scopeId}>\u963B\u65AD\u6027\u62A5\u9519</td><td${_scopeId}>[\u67E5\u770B]</td></tr></tbody></table><h4${_scopeId}>\u62A5\u95191\uFF1A\u64A4\u9500\u660E\u7EC6\u4E2D\uFF0C\u542B\u6709\u5DF2\u7ECF\u62A5\u9500\u7684\u8BA4\u9886\u660E\u7EC6\uFF0C\u4E14\u64A4\u9500\u540E\u53EF\u7ED3\u7B97\u5DE5\u7A0B\u670D\u52A1\u8D39\u5C0F\u4E8E\u96F6\uFF0C\u4E0D\u5141\u8BB8\u64A4\u9500</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u4FDD\u5B58\u64A4\u9500\u5355\u65F6\uFF0C\u64A4\u9500\u660E\u7EC6\u4E2D\u542B\u5DF2\u62A5\u9500\u7684\u8BA4\u9886\u660E\u7EC6\uFF0C\u4E14\u64A4\u9500\u540E\u53EF\u7ED3\u7B97\u5DE5\u7A0B\u670D\u52A1\u8D39(total_claim_service_amt - cancelServiceChargeAmt - return_service_amt - applied_amt) &lt; 0</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u4FDD\u5B58\u6821\u9A8C\u4E2D\u67E5\u8BE2epm_pad_cancel_query\u6309svcExpAccId\u83B7\u53D6\u5DF2\u8BA4\u9886\u5DE5\u7A0B\u670D\u52A1\u8D39\u603B\u989D\uFF0C\u51CF\u53BB\u672C\u6B21\u64A4\u9500\u91D1\u989D\u3001\u5DF2\u9000\u56DE\u91D1\u989D\u3001\u5DF2\u7533\u8BF7\u5151\u73B0\u91D1\u989D\u540E\u82E5&lt;0\u5219\u629B\u51FA\u963B\u65AD\u6027\u62A5\u9519\u3002\u9700\u51CF\u5C11\u64A4\u9500\u660E\u7EC6\u4E2D\u5DE5\u7A0B\u670D\u52A1\u8D39\u91D1\u989D</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> epcq.SVC_EXP_ACC_ID, epcq.TOTAL_CLAIM_SERVICE_AMT, epcq.RETURN_SERVICE_AMT, epcq.APPLIED_AMT,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         epcq.TOTAL_CLAIM_SERVICE_AMT </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>-</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> :cancelServiceChargeAmt </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>-</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> epcq.RETURN_SERVICE_AMT </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>-</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> epcq.APPLIED_AMT </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u64A4\u9500\u540E\u53EF\u7ED3\u7B97\u91D1\u989D</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> EPM_PAD_CANCEL_QUERY epcq</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> epcq.SVC_EXP_ACC_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> :svcExpAccId</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- \u82E5\u64A4\u9500\u540E\u53EF\u7ED3\u7B97\u91D1\u989D &lt; 0\uFF0C\u5219\u89E6\u53D1\u8BE5\u62A5\u9519</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95192\uFF1A\u660E\u7EC6\u4E2D\u4EE5\u4E0B\u8BA4\u9886\u660E\u7EC6\u5DF2\u88AB\u64A4\u9500\uFF0C\u8BF7\u5254\u9664\u540E\u518D\u91CD\u65B0\u63D0\u4EA4\u64A4\u9500</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u63D0\u4EA4\u64A4\u9500\u5355\u65F6\uFF0C\u9009\u4E2D\u7684\u8BA4\u9886\u660E\u7EC6\u5DF2\u88AB\u5176\u4ED6\u64A4\u9500\u5355\u64A4\u9500(CANCEL_FLAG=Y)</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u63D0\u4EA4\u6821\u9A8C\u4E2D\u6309CANCEL_ID\u5173\u8054EPM_PAD_CANCEL\u548CEPM_PAYMENT_ALLOT_DETAIL\uFF0C\u82E5CANCEL_FLAG=Y\u5219\u6536\u96C6\u5230\u5DF2\u64A4\u9500\u660E\u7EC6\u5217\u8868\u5E76\u629B\u51FA\u963B\u65AD\u6027\u62A5\u9519\u3002\u9700\u5254\u9664\u5DF2\u64A4\u9500\u660E\u7EC6\u540E\u91CD\u65B0\u63D0\u4EA4</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> epad.PAYMENT_ALLOT_DETAIL_ID, epad.PAYMENT_ALLOT_CODE, epad.INV_BILL_NO, epad.ITEM_CODE,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         epad.CANCEL_FLAG, epc.CANCEL_ID, epc.CANCEL_CODE</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> EPM_PAYMENT_ALLOT_DETAIL epad</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>JOIN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> EPM_PAD_CANCEL epc </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ON</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> epad.PAYMENT_ALLOT_DETAIL_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> epc.PAYMENT_ALLOT_DETAIL_ID</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> epc.CANCEL_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> :cancelId</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> epad.CANCEL_FLAG </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>Y</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- \u67E5\u51FA\u5DF2\u88AB\u64A4\u9500\u7684\u8BA4\u9886\u660E\u7EC6</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95193\uFF1A\u6D41\u7A0B\u542F\u52A8\u5F02\u5E38\uFF0C\u5355\u636Eid\u4E0D\u80FD\u4E3A\u7A7A</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u63D0\u4EA4\u6216\u5B8C\u7ED3\u64A4\u9500\u5355\u65F6\uFF0C\u5DE5\u4F5C\u6D41\u56DE\u8C03\u7F3A\u5C11\u5355\u636EID(objId\u4E3A\u7A7A)</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u5DE5\u4F5C\u6D41\u56DE\u8C03\u65B9\u6CD5\u4E2D\u6821\u9A8CobjId\u975E\u7A7A\uFF0C\u56E0\u9700\u6309\u5355\u636EID\u5B9A\u4F4D\u64A4\u9500\u5355\u8BB0\u5F55\u3002\u8BE5\u62A5\u9519\u4E3A\u963B\u65AD\u6027\u62A5\u9519\uFF0C\u9700\u68C0\u67E5\u5DE5\u4F5C\u6D41\u914D\u7F6E</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> epc.CANCEL_ID, epc.CANCEL_CODE, epc.HZ_INSTANCE_ID, epc.HZ_APPROVE_STATUS</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> EPM_PAD_CANCEL epc</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> epc.CANCEL_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> :cancelId</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- \u6821\u9A8C\u64A4\u9500\u5355ID\u662F\u5426\u5B58\u5728</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95194\uFF1A\u6D41\u7A0B\u542F\u52A8\u5F02\u5E38\uFF0C\u5355\u636E\u4E0D\u5B58\u5728</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u63D0\u4EA4\u6216\u5B8C\u7ED3\u64A4\u9500\u5355\u65F6\uFF0C\u6309\u5355\u636EID\u67E5\u8BE2EPM_PAD_CANCEL\u8FD4\u56DEnull</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u5DE5\u4F5C\u6D41\u56DE\u8C03\u65B9\u6CD5\u4E2D\u6309CANCEL_ID\u67E5\u8BE2\u64A4\u9500\u5355\uFF0C\u82E5\u8FD4\u56DEnull\u5219\u629B\u51FA\u963B\u65AD\u6027\u62A5\u9519\u3002\u53EF\u80FD\u539F\u56E0\uFF1A\u64A4\u9500\u5355\u5DF2\u88AB\u5220\u9664\u3001ID\u4F20\u9012\u9519\u8BEF\u3002\u9700\u5237\u65B0\u5217\u8868</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> epc.CANCEL_ID, epc.CANCEL_CODE, epc.HZ_APPROVE_STATUS, epc.VALID</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> EPM_PAD_CANCEL epc</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> epc.CANCEL_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> :cancelId</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- \u82E5\u8FD4\u56DE\u7A7A\uFF0C\u8BF4\u660E\u64A4\u9500\u5355\u4E0D\u5B58\u5728</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95195\uFF1A\u6D41\u7A0B\u542F\u52A8\u5F02\u5E38\uFF0C\u64A4\u9500\u660E\u7EC6\u4E0D\u5B58\u5728</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u63D0\u4EA4\u6216\u5B8C\u7ED3\u64A4\u9500\u5355\u65F6\uFF0C\u64A4\u9500\u5355\u7F3A\u5C11\u660E\u7EC6\u884C(EPM_PAD_CANCEL_DETAIL\u4E3A\u7A7A)</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u5DE5\u4F5C\u6D41\u56DE\u8C03\u65B9\u6CD5\u4E2D\u6309CANCEL_ID\u67E5\u8BE2\u64A4\u9500\u660E\u7EC6\uFF0C\u82E5\u4E3A\u7A7A\u5219\u629B\u51FA\u963B\u65AD\u6027\u62A5\u9519\u3002\u9700\u68C0\u67E5\u660E\u7EC6\u6570\u636E</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> epc.CANCEL_ID, epc.CANCEL_CODE, epc.HZ_APPROVE_STATUS,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         (</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}>COUNT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>*</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> EPM_PAD_CANCEL_DETAIL epcd</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>          </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> epcd.CANCEL_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> epc.CANCEL_ID) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u64A4\u9500\u660E\u7EC6\u6570</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> EPM_PAD_CANCEL epc</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> epc.CANCEL_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> :cancelId</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- \u82E5\u64A4\u9500\u660E\u7EC6\u6570\u4E3A0\uFF0C\u5219\u89E6\u53D1\u8BE5\u62A5\u9519</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95196\uFF1Aerp\u8FD4\u56DE\u8BA4\u9886\u7ED3\u679C\u4E3A\u7A7A</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1AERP\u63A8\u9001\u65F6\uFF0CERP\u63A5\u53E3\u8FD4\u56DE\u8BA4\u9886\u7ED3\u679C\u4E3A\u7A7A</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1AERP\u63A8\u9001\u65B9\u6CD5\u4E2D\u8C03\u7528ERP\u63A5\u53E3\u83B7\u53D6\u8BA4\u9886\u7ED3\u679C\uFF0C\u82E5\u8FD4\u56DEnull\u5219\u629B\u51FA\u963B\u65AD\u6027\u62A5\u9519\u3002\u53EF\u80FD\u539F\u56E0\uFF1AERP\u670D\u52A1\u4E0D\u53EF\u7528\u3001\u7F51\u7EDC\u5F02\u5E38\u3001ERP\u63A5\u53E3\u5F02\u5E38\u3002\u9700\u68C0\u67E5ERP\u670D\u52A1\u72B6\u6001</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> sem.OBJID, sem.OBJTYPENAME, sem.ERROR_MSG, sem.CREATION_DATE</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> SYS_EXCEPTION_MSG sem</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> sem.OBJID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> :cancelId</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> sem.OBJTYPENAME </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>\u5230\u6B3E\u8BA4\u9886\u64A4\u9500</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ORDER BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> sem.CREATION_DATE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>DESC</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- \u67E5\u8BE2ERP\u63A8\u9001\u5F02\u5E38\u8BB0\u5F55</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95197\uFF1A\u8BA4\u9886\u63A8\u9001erp\u5F02\u5E38</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1AERP\u63A8\u9001\u65F6\uFF0CERP\u63A5\u53E3\u8FD4\u56DE\u9519\u8BEF\u4FE1\u606F</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1AERP\u63A8\u9001\u65B9\u6CD5\u4E2D\u8C03\u7528ERP\u63A5\u53E3\uFF0C\u82E5\u8FD4\u56DE\u9519\u8BEF\u4FE1\u606F\u5219\u629B\u51FA\u963B\u65AD\u6027\u62A5\u9519\u3002\u9700\u67E5\u770B\u5177\u4F53\u9519\u8BEF\u5185\u5BB9\u5E76\u4FEE\u590D\u540E\u91CD\u65B0\u63D0\u4EA4</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> sem.OBJID, sem.OBJTYPENAME, sem.ERROR_MSG, sem.CREATION_DATE, sem.CREATED_BY</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> SYS_EXCEPTION_MSG sem</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> sem.OBJID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> :cancelId</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> sem.OBJTYPENAME </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>\u5230\u6B3E\u8BA4\u9886\u64A4\u9500</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ORDER BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> sem.CREATION_DATE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>DESC</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- \u67E5\u8BE2ERP\u63A8\u9001\u5F02\u5E38\u8BE6\u60C5</span></span>
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
                createVNode("td", null, "\u64A4\u9500\u660E\u7EC6\u4E2D\uFF0C\u542B\u6709\u5DF2\u7ECF\u62A5\u9500\u7684\u8BA4\u9886\u660E\u7EC6\uFF0C\u4E14\u64A4\u9500\u540E\u53EF\u7ED3\u7B97\u5DE5\u7A0B\u670D\u52A1\u8D39\u5C0F\u4E8E\u96F6\uFF0C\u4E0D\u5141\u8BB8\u64A4\u9500"),
                createVNode("td", null, "\u4FDD\u5B58"),
                createVNode("td", null, "\u64A4\u9500\u540E\u5DF2\u8BA4\u9886\u5DE5\u7A0B\u670D\u52A1\u8D39\u4E0D\u8DB3\u4EE5\u8986\u76D6\u5DF2\u7533\u8BF7\u5151\u73B0\u91D1\u989D\uFF0C\u51CF\u5C11\u64A4\u9500\u660E\u7EC6\u4E2D\u5DE5\u7A0B\u670D\u52A1\u8D39\u91D1\u989D"),
                createVNode("td", null, "\u963B\u65AD\u6027\u62A5\u9519"),
                createVNode("td", null, "[\u67E5\u770B]")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u660E\u7EC6\u4E2D\u4EE5\u4E0B\u8BA4\u9886\u660E\u7EC6\u5DF2\u88AB\u64A4\u9500\uFF0C\u8BF7\u5254\u9664\u540E\u518D\u91CD\u65B0\u63D0\u4EA4\u64A4\u9500"),
                createVNode("td", null, "\u63D0\u4EA4"),
                createVNode("td", null, "\u9009\u4E2D\u7684\u8BA4\u9886\u660E\u7EC6\u5DF2\u88AB\u5176\u4ED6\u64A4\u9500\u5355\u64A4\u9500\uFF0C\u5254\u9664\u5DF2\u64A4\u9500\u660E\u7EC6"),
                createVNode("td", null, "\u963B\u65AD\u6027\u62A5\u9519"),
                createVNode("td", null, "[\u67E5\u770B]")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6D41\u7A0B\u542F\u52A8\u5F02\u5E38\uFF0C\u5355\u636Eid\u4E0D\u80FD\u4E3A\u7A7A"),
                createVNode("td", null, "\u63D0\u4EA4/\u5B8C\u7ED3"),
                createVNode("td", null, "\u5DE5\u4F5C\u6D41\u56DE\u8C03\u7F3A\u5C11\u5355\u636EID\uFF0C\u68C0\u67E5\u5DE5\u4F5C\u6D41\u914D\u7F6E"),
                createVNode("td", null, "\u963B\u65AD\u6027\u62A5\u9519"),
                createVNode("td", null, "[\u67E5\u770B]")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6D41\u7A0B\u542F\u52A8\u5F02\u5E38\uFF0C\u5355\u636E\u4E0D\u5B58\u5728"),
                createVNode("td", null, "\u63D0\u4EA4/\u5B8C\u7ED3"),
                createVNode("td", null, "\u64A4\u9500\u5355\u5DF2\u88AB\u5220\u9664\uFF0C\u5237\u65B0\u5217\u8868"),
                createVNode("td", null, "\u963B\u65AD\u6027\u62A5\u9519"),
                createVNode("td", null, "[\u67E5\u770B]")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6D41\u7A0B\u542F\u52A8\u5F02\u5E38\uFF0C\u64A4\u9500\u660E\u7EC6\u4E0D\u5B58\u5728"),
                createVNode("td", null, "\u63D0\u4EA4/\u5B8C\u7ED3"),
                createVNode("td", null, "\u64A4\u9500\u5355\u7F3A\u5C11\u660E\u7EC6\u884C\uFF0C\u68C0\u67E5\u660E\u7EC6\u6570\u636E"),
                createVNode("td", null, "\u963B\u65AD\u6027\u62A5\u9519"),
                createVNode("td", null, "[\u67E5\u770B]")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "erp\u8FD4\u56DE\u8BA4\u9886\u7ED3\u679C\u4E3A\u7A7A"),
                createVNode("td", null, "ERP\u63A8\u9001"),
                createVNode("td", null, "ERP\u63A5\u53E3\u5F02\u5E38\uFF0C\u68C0\u67E5ERP\u670D\u52A1\u72B6\u6001"),
                createVNode("td", null, "\u963B\u65AD\u6027\u62A5\u9519"),
                createVNode("td", null, "[\u67E5\u770B]")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u8BA4\u9886\u63A8\u9001erp\u5F02\u5E38"),
                createVNode("td", null, "ERP\u63A8\u9001"),
                createVNode("td", null, "ERP\u8FD4\u56DE\u9519\u8BEF\u4FE1\u606F\uFF0C\u67E5\u770B\u5177\u4F53\u9519\u8BEF\u5185\u5BB9"),
                createVNode("td", null, "\u963B\u65AD\u6027\u62A5\u9519"),
                createVNode("td", null, "[\u67E5\u770B]")
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95191\uFF1A\u64A4\u9500\u660E\u7EC6\u4E2D\uFF0C\u542B\u6709\u5DF2\u7ECF\u62A5\u9500\u7684\u8BA4\u9886\u660E\u7EC6\uFF0C\u4E14\u64A4\u9500\u540E\u53EF\u7ED3\u7B97\u5DE5\u7A0B\u670D\u52A1\u8D39\u5C0F\u4E8E\u96F6\uFF0C\u4E0D\u5141\u8BB8\u64A4\u9500"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u4FDD\u5B58\u64A4\u9500\u5355\u65F6\uFF0C\u64A4\u9500\u660E\u7EC6\u4E2D\u542B\u5DF2\u62A5\u9500\u7684\u8BA4\u9886\u660E\u7EC6\uFF0C\u4E14\u64A4\u9500\u540E\u53EF\u7ED3\u7B97\u5DE5\u7A0B\u670D\u52A1\u8D39(total_claim_service_amt - cancelServiceChargeAmt - return_service_amt - applied_amt) < 0")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u4FDD\u5B58\u6821\u9A8C\u4E2D\u67E5\u8BE2epm_pad_cancel_query\u6309svcExpAccId\u83B7\u53D6\u5DF2\u8BA4\u9886\u5DE5\u7A0B\u670D\u52A1\u8D39\u603B\u989D\uFF0C\u51CF\u53BB\u672C\u6B21\u64A4\u9500\u91D1\u989D\u3001\u5DF2\u9000\u56DE\u91D1\u989D\u3001\u5DF2\u7533\u8BF7\u5151\u73B0\u91D1\u989D\u540E\u82E5<0\u5219\u629B\u51FA\u963B\u65AD\u6027\u62A5\u9519\u3002\u9700\u51CF\u5C11\u64A4\u9500\u660E\u7EC6\u4E2D\u5DE5\u7A0B\u670D\u52A1\u8D39\u91D1\u989D")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " epcq.SVC_EXP_ACC_ID, epcq.TOTAL_CLAIM_SERVICE_AMT, epcq.RETURN_SERVICE_AMT, epcq.APPLIED_AMT,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         epcq.TOTAL_CLAIM_SERVICE_AMT "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "-"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " :cancelServiceChargeAmt "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "-"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " epcq.RETURN_SERVICE_AMT "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "-"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " epcq.APPLIED_AMT "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u64A4\u9500\u540E\u53EF\u7ED3\u7B97\u91D1\u989D")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " EPM_PAD_CANCEL_QUERY epcq")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " epcq.SVC_EXP_ACC_ID "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " :svcExpAccId")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#89DDFF" } }, "  "),
                  createVNode("span", { style: { "color": "#676E95" } }, "-- \u82E5\u64A4\u9500\u540E\u53EF\u7ED3\u7B97\u91D1\u989D < 0\uFF0C\u5219\u89E6\u53D1\u8BE5\u62A5\u9519")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95192\uFF1A\u660E\u7EC6\u4E2D\u4EE5\u4E0B\u8BA4\u9886\u660E\u7EC6\u5DF2\u88AB\u64A4\u9500\uFF0C\u8BF7\u5254\u9664\u540E\u518D\u91CD\u65B0\u63D0\u4EA4\u64A4\u9500"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u63D0\u4EA4\u64A4\u9500\u5355\u65F6\uFF0C\u9009\u4E2D\u7684\u8BA4\u9886\u660E\u7EC6\u5DF2\u88AB\u5176\u4ED6\u64A4\u9500\u5355\u64A4\u9500(CANCEL_FLAG=Y)")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u63D0\u4EA4\u6821\u9A8C\u4E2D\u6309CANCEL_ID\u5173\u8054EPM_PAD_CANCEL\u548CEPM_PAYMENT_ALLOT_DETAIL\uFF0C\u82E5CANCEL_FLAG=Y\u5219\u6536\u96C6\u5230\u5DF2\u64A4\u9500\u660E\u7EC6\u5217\u8868\u5E76\u629B\u51FA\u963B\u65AD\u6027\u62A5\u9519\u3002\u9700\u5254\u9664\u5DF2\u64A4\u9500\u660E\u7EC6\u540E\u91CD\u65B0\u63D0\u4EA4")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " epad.PAYMENT_ALLOT_DETAIL_ID, epad.PAYMENT_ALLOT_CODE, epad.INV_BILL_NO, epad.ITEM_CODE,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         epad.CANCEL_FLAG, epc.CANCEL_ID, epc.CANCEL_CODE")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " EPM_PAYMENT_ALLOT_DETAIL epad")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "JOIN"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " EPM_PAD_CANCEL epc "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ON"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " epad.PAYMENT_ALLOT_DETAIL_ID "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " epc.PAYMENT_ALLOT_DETAIL_ID")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " epc.CANCEL_ID "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " :cancelId")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " epad.CANCEL_FLAG "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "Y"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#89DDFF" } }, "  "),
                  createVNode("span", { style: { "color": "#676E95" } }, "-- \u67E5\u51FA\u5DF2\u88AB\u64A4\u9500\u7684\u8BA4\u9886\u660E\u7EC6")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95193\uFF1A\u6D41\u7A0B\u542F\u52A8\u5F02\u5E38\uFF0C\u5355\u636Eid\u4E0D\u80FD\u4E3A\u7A7A"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u63D0\u4EA4\u6216\u5B8C\u7ED3\u64A4\u9500\u5355\u65F6\uFF0C\u5DE5\u4F5C\u6D41\u56DE\u8C03\u7F3A\u5C11\u5355\u636EID(objId\u4E3A\u7A7A)")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u5DE5\u4F5C\u6D41\u56DE\u8C03\u65B9\u6CD5\u4E2D\u6821\u9A8CobjId\u975E\u7A7A\uFF0C\u56E0\u9700\u6309\u5355\u636EID\u5B9A\u4F4D\u64A4\u9500\u5355\u8BB0\u5F55\u3002\u8BE5\u62A5\u9519\u4E3A\u963B\u65AD\u6027\u62A5\u9519\uFF0C\u9700\u68C0\u67E5\u5DE5\u4F5C\u6D41\u914D\u7F6E")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " epc.CANCEL_ID, epc.CANCEL_CODE, epc.HZ_INSTANCE_ID, epc.HZ_APPROVE_STATUS")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " EPM_PAD_CANCEL epc")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " epc.CANCEL_ID "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " :cancelId")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#89DDFF" } }, "  "),
                  createVNode("span", { style: { "color": "#676E95" } }, "-- \u6821\u9A8C\u64A4\u9500\u5355ID\u662F\u5426\u5B58\u5728")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95194\uFF1A\u6D41\u7A0B\u542F\u52A8\u5F02\u5E38\uFF0C\u5355\u636E\u4E0D\u5B58\u5728"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u63D0\u4EA4\u6216\u5B8C\u7ED3\u64A4\u9500\u5355\u65F6\uFF0C\u6309\u5355\u636EID\u67E5\u8BE2EPM_PAD_CANCEL\u8FD4\u56DEnull")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u5DE5\u4F5C\u6D41\u56DE\u8C03\u65B9\u6CD5\u4E2D\u6309CANCEL_ID\u67E5\u8BE2\u64A4\u9500\u5355\uFF0C\u82E5\u8FD4\u56DEnull\u5219\u629B\u51FA\u963B\u65AD\u6027\u62A5\u9519\u3002\u53EF\u80FD\u539F\u56E0\uFF1A\u64A4\u9500\u5355\u5DF2\u88AB\u5220\u9664\u3001ID\u4F20\u9012\u9519\u8BEF\u3002\u9700\u5237\u65B0\u5217\u8868")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " epc.CANCEL_ID, epc.CANCEL_CODE, epc.HZ_APPROVE_STATUS, epc.VALID")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " EPM_PAD_CANCEL epc")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " epc.CANCEL_ID "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " :cancelId")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#89DDFF" } }, "  "),
                  createVNode("span", { style: { "color": "#676E95" } }, "-- \u82E5\u8FD4\u56DE\u7A7A\uFF0C\u8BF4\u660E\u64A4\u9500\u5355\u4E0D\u5B58\u5728")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95195\uFF1A\u6D41\u7A0B\u542F\u52A8\u5F02\u5E38\uFF0C\u64A4\u9500\u660E\u7EC6\u4E0D\u5B58\u5728"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u63D0\u4EA4\u6216\u5B8C\u7ED3\u64A4\u9500\u5355\u65F6\uFF0C\u64A4\u9500\u5355\u7F3A\u5C11\u660E\u7EC6\u884C(EPM_PAD_CANCEL_DETAIL\u4E3A\u7A7A)")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u5DE5\u4F5C\u6D41\u56DE\u8C03\u65B9\u6CD5\u4E2D\u6309CANCEL_ID\u67E5\u8BE2\u64A4\u9500\u660E\u7EC6\uFF0C\u82E5\u4E3A\u7A7A\u5219\u629B\u51FA\u963B\u65AD\u6027\u62A5\u9519\u3002\u9700\u68C0\u67E5\u660E\u7EC6\u6570\u636E")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " epc.CANCEL_ID, epc.CANCEL_CODE, epc.HZ_APPROVE_STATUS,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         ("),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "SELECT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#82AAFF" } }, "COUNT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "("),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "*"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " EPM_PAD_CANCEL_DETAIL epcd")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "          "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " epcd.CANCEL_ID "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " epc.CANCEL_ID) "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u64A4\u9500\u660E\u7EC6\u6570")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " EPM_PAD_CANCEL epc")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " epc.CANCEL_ID "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " :cancelId")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#89DDFF" } }, "  "),
                  createVNode("span", { style: { "color": "#676E95" } }, "-- \u82E5\u64A4\u9500\u660E\u7EC6\u6570\u4E3A0\uFF0C\u5219\u89E6\u53D1\u8BE5\u62A5\u9519")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95196\uFF1Aerp\u8FD4\u56DE\u8BA4\u9886\u7ED3\u679C\u4E3A\u7A7A"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1AERP\u63A8\u9001\u65F6\uFF0CERP\u63A5\u53E3\u8FD4\u56DE\u8BA4\u9886\u7ED3\u679C\u4E3A\u7A7A")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1AERP\u63A8\u9001\u65B9\u6CD5\u4E2D\u8C03\u7528ERP\u63A5\u53E3\u83B7\u53D6\u8BA4\u9886\u7ED3\u679C\uFF0C\u82E5\u8FD4\u56DEnull\u5219\u629B\u51FA\u963B\u65AD\u6027\u62A5\u9519\u3002\u53EF\u80FD\u539F\u56E0\uFF1AERP\u670D\u52A1\u4E0D\u53EF\u7528\u3001\u7F51\u7EDC\u5F02\u5E38\u3001ERP\u63A5\u53E3\u5F02\u5E38\u3002\u9700\u68C0\u67E5ERP\u670D\u52A1\u72B6\u6001")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " sem.OBJID, sem.OBJTYPENAME, sem.ERROR_MSG, sem.CREATION_DATE")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " SYS_EXCEPTION_MSG sem")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " sem.OBJID "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " :cancelId")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " sem.OBJTYPENAME "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "\u5230\u6B3E\u8BA4\u9886\u64A4\u9500"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ORDER BY"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " sem.CREATION_DATE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "DESC")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#89DDFF" } }, "  "),
                  createVNode("span", { style: { "color": "#676E95" } }, "-- \u67E5\u8BE2ERP\u63A8\u9001\u5F02\u5E38\u8BB0\u5F55")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95197\uFF1A\u8BA4\u9886\u63A8\u9001erp\u5F02\u5E38"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1AERP\u63A8\u9001\u65F6\uFF0CERP\u63A5\u53E3\u8FD4\u56DE\u9519\u8BEF\u4FE1\u606F")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1AERP\u63A8\u9001\u65B9\u6CD5\u4E2D\u8C03\u7528ERP\u63A5\u53E3\uFF0C\u82E5\u8FD4\u56DE\u9519\u8BEF\u4FE1\u606F\u5219\u629B\u51FA\u963B\u65AD\u6027\u62A5\u9519\u3002\u9700\u67E5\u770B\u5177\u4F53\u9519\u8BEF\u5185\u5BB9\u5E76\u4FEE\u590D\u540E\u91CD\u65B0\u63D0\u4EA4")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " sem.OBJID, sem.OBJTYPENAME, sem.ERROR_MSG, sem.CREATION_DATE, sem.CREATED_BY")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " SYS_EXCEPTION_MSG sem")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " sem.OBJID "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " :cancelId")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " sem.OBJTYPENAME "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "\u5230\u6B3E\u8BA4\u9886\u64A4\u9500"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ORDER BY"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " sem.CREATION_DATE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "DESC")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#89DDFF" } }, "  "),
                  createVNode("span", { style: { "color": "#676E95" } }, "-- \u67E5\u8BE2ERP\u63A8\u9001\u5F02\u5E38\u8BE6\u60C5")
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
        _push2(`<ul${_scopeId}><li${_scopeId}>\u95EE\u98981\uFF1A\u64A4\u9500\u540E\u53EF\u7ED3\u7B97\u5DE5\u7A0B\u670D\u52A1\u8D39\u5C0F\u4E8E0</li><li${_scopeId}>\u539F\u56E0\uFF1A\u64A4\u9500\u7684\u5DE5\u7A0B\u670D\u52A1\u8D39\u8FC7\u5927\uFF0C\u5BFC\u81F4\u5DF2\u8BA4\u9886\u5DE5\u7A0B\u670D\u52A1\u8D39\u65E0\u6CD5\u8986\u76D6\u5DF2\u7533\u8BF7\u5151\u73B0\u91D1\u989D</li><li${_scopeId}>\u89E3\u51B3\u601D\u8DEF\uFF1A\u51CF\u5C11\u64A4\u9500\u660E\u7EC6\u4E2D\u5DE5\u7A0B\u670D\u52A1\u8D39\u91D1\u989D\uFF0C\u786E\u4FDD\u64A4\u9500\u540E\u53EF\u7ED3\u7B97\u91D1\u989D&gt;=0</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> total_claim_service_amt </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>-</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> #{cancelServiceChargeAmt} </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>-</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> return_service_amt </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>-</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> applied_amt </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> settleable_amt</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> epm_pad_cancel_query </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> svc_exp_acc_id </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> {svcExpAccId};</span></span>
<span class="line"${_scopeId}></span></code></pre></div><ul${_scopeId}><li${_scopeId}>\u95EE\u98982\uFF1AERP\u64A4\u9500\u63A8\u9001\u5931\u8D25</li><li${_scopeId}>\u539F\u56E0\uFF1AERP\u63A5\u53E3\u4E0D\u53EF\u7528\u6216\u63A8\u9001\u6570\u636E\u5F02\u5E38</li><li${_scopeId}>\u89E3\u51B3\u601D\u8DEF\uFF1A\u68C0\u67E5ERP\u63A5\u53E3\u72B6\u6001\u548C\u63A8\u9001\u6570\u636E\uFF0C\u4FEE\u590D\u540E\u91CD\u65B0\u63D0\u4EA4</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>*</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> sys_exception_msg </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>objid</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> {cancelId} </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> objtypename </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>\u5230\u6B3E\u8BA4\u9886\u64A4\u9500</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><ul${_scopeId}><li${_scopeId}>\u95EE\u98983\uFF1A\u63D0\u4EA4\u65F6\u63D0\u793A\u660E\u7EC6\u5DF2\u88AB\u64A4\u9500</li><li${_scopeId}>\u539F\u56E0\uFF1A\u9009\u4E2D\u7684\u8BA4\u9886\u660E\u7EC6\u5DF2\u88AB\u5176\u4ED6\u64A4\u9500\u5355\u64A4\u9500\uFF08cancelFlag=Y\uFF09</li><li${_scopeId}>\u89E3\u51B3\u601D\u8DEF\uFF1A\u5254\u9664\u5DF2\u64A4\u9500\u7684\u660E\u7EC6\u540E\u91CD\u65B0\u63D0\u4EA4</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> d.cancel_flag, pa.payment_allot_code, d.inv_bill_no, d.item_code</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> epm_payment_allot_detail d</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>JOIN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> epm_pad_cancel pc </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ON</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> d.payment_allot_detail_id </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> pc.payment_allot_detail_id</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> pc.cancel_id </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> {cancelId} </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> d.cancel_flag </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>Y</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, "\u95EE\u98981\uFF1A\u64A4\u9500\u540E\u53EF\u7ED3\u7B97\u5DE5\u7A0B\u670D\u52A1\u8D39\u5C0F\u4E8E0"),
            createVNode("li", null, "\u539F\u56E0\uFF1A\u64A4\u9500\u7684\u5DE5\u7A0B\u670D\u52A1\u8D39\u8FC7\u5927\uFF0C\u5BFC\u81F4\u5DF2\u8BA4\u9886\u5DE5\u7A0B\u670D\u52A1\u8D39\u65E0\u6CD5\u8986\u76D6\u5DF2\u7533\u8BF7\u5151\u73B0\u91D1\u989D"),
            createVNode("li", null, "\u89E3\u51B3\u601D\u8DEF\uFF1A\u51CF\u5C11\u64A4\u9500\u660E\u7EC6\u4E2D\u5DE5\u7A0B\u670D\u52A1\u8D39\u91D1\u989D\uFF0C\u786E\u4FDD\u64A4\u9500\u540E\u53EF\u7ED3\u7B97\u91D1\u989D>=0")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " total_claim_service_amt "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "-"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " #{cancelServiceChargeAmt} "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "-"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " return_service_amt "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "-"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " applied_amt "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " settleable_amt")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " epm_pad_cancel_query "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " svc_exp_acc_id "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " {svcExpAccId};")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u95EE\u98982\uFF1AERP\u64A4\u9500\u63A8\u9001\u5931\u8D25"),
            createVNode("li", null, "\u539F\u56E0\uFF1AERP\u63A5\u53E3\u4E0D\u53EF\u7528\u6216\u63A8\u9001\u6570\u636E\u5F02\u5E38"),
            createVNode("li", null, "\u89E3\u51B3\u601D\u8DEF\uFF1A\u68C0\u67E5ERP\u63A5\u53E3\u72B6\u6001\u548C\u63A8\u9001\u6570\u636E\uFF0C\u4FEE\u590D\u540E\u91CD\u65B0\u63D0\u4EA4")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " sys_exception_msg "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "objid"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " {cancelId} "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " objtypename "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "\u5230\u6B3E\u8BA4\u9886\u64A4\u9500"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u95EE\u98983\uFF1A\u63D0\u4EA4\u65F6\u63D0\u793A\u660E\u7EC6\u5DF2\u88AB\u64A4\u9500"),
            createVNode("li", null, "\u539F\u56E0\uFF1A\u9009\u4E2D\u7684\u8BA4\u9886\u660E\u7EC6\u5DF2\u88AB\u5176\u4ED6\u64A4\u9500\u5355\u64A4\u9500\uFF08cancelFlag=Y\uFF09"),
            createVNode("li", null, "\u89E3\u51B3\u601D\u8DEF\uFF1A\u5254\u9664\u5DF2\u64A4\u9500\u7684\u660E\u7EC6\u540E\u91CD\u65B0\u63D0\u4EA4")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " d.cancel_flag, pa.payment_allot_code, d.inv_bill_no, d.item_code")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " epm_payment_allot_detail d")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "JOIN"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " epm_pad_cancel pc "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ON"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " d.payment_allot_detail_id "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " pc.payment_allot_detail_id")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " pc.cancel_id "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " {cancelId} "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " d.cancel_flag "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "Y"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
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
  _push(`</div></div></div><div id="changelog" style="${ssrRenderStyle({ "display": "none" })}"><div class="tab-pad"><div class="kl-wrap">`);
  _push(ssrRenderComponent(_component_KbCard, { title: "\u66F4\u65B0\u8BB0\u5F55" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u65E5\u671F</th><th${_scopeId}>\u63D0\u4EA4ID</th><th${_scopeId}>\u63D0\u4EA4\u4EBA</th><th${_scopeId}>\u63D0\u4EA4\u5185\u5BB9</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>2026-08-30</td><td${_scopeId}>-</td><td${_scopeId}>-</td><td${_scopeId}>\u6309skill\u89C4\u8303\u91CD\u5199\u77E5\u8BC6\u5E93\u6587\u6863</td></tr><tr${_scopeId}><td${_scopeId}>2026-07-31</td><td${_scopeId}>-</td><td${_scopeId}>-</td><td${_scopeId}>\u521D\u59CB\u751F\u6210\u77E5\u8BC6\u5E93\u6587\u6863</td></tr><tr${_scopeId}><td${_scopeId}>2025-10-31</td><td${_scopeId}>-</td><td${_scopeId}>jianwei.ma</td><td${_scopeId}>\u521D\u59CB\u521B\u5EFA\u5230\u6B3E\u8BA4\u9886\u64A4\u9500\u529F\u80FD</td></tr></tbody></table>`);
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
                createVNode("td", null, "-"),
                createVNode("td", null, "\u6309skill\u89C4\u8303\u91CD\u5199\u77E5\u8BC6\u5E93\u6587\u6863")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "2026-07-31"),
                createVNode("td", null, "-"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u521D\u59CB\u751F\u6210\u77E5\u8BC6\u5E93\u6587\u6863")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "2025-10-31"),
                createVNode("td", null, "-"),
                createVNode("td", null, "jianwei.ma"),
                createVNode("td", null, "\u521D\u59CB\u521B\u5EFA\u5230\u6B3E\u8BA4\u9886\u64A4\u9500\u529F\u80FD")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("\u5DE5\u7A0B\u7BA1\u7406/\u9879\u76EE\u5F80\u6765/\u9879\u76EE\u5230\u6B3E\u8BA4\u9886\u64A4\u9500/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
