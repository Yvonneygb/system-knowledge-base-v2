import { resolveComponent, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.6ab74304.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"\u5DE5\u7A0B\u7BA1\u7406/\u9879\u76EE\u5F80\u6765/\u9879\u76EE\u5230\u6B3E\u8BA4\u9886/index.md"}');
const _sfc_main = { name: "\u5DE5\u7A0B\u7BA1\u7406/\u9879\u76EE\u5F80\u6765/\u9879\u76EE\u5230\u6B3E\u8BA4\u9886/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_BreadcrumbTabs = resolveComponent("BreadcrumbTabs");
  const _component_KbCard = resolveComponent("KbCard");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_BreadcrumbTabs, null, null, _parent));
  _push(`<div id="biz-intro" style="${ssrRenderStyle({ "display": "none" })}"><div class="tab-pad"><div class="kl-wrap"><div class="kl-card"><div class="biz-kl-hdr"><span class="biz-tag" style="${ssrRenderStyle({ "background": "rgba(124,58,237,0.08)", "color": "#7C3AED", "border-color": "rgba(124,58,237,0.18)" })}">\u4E1A\u52A1\u662F\u4EC0\u4E48</span><h2>\u9879\u76EE\u5230\u6B3E\u8BA4\u9886</h2><p>\u5C06\u5DF2\u5F15\u5165\u7684\u5230\u6B3E\u6309\u9879\u76EE\u9010\u7B14\u8BA4\u9886\uFF0C\u786E\u8BA4\u8D44\u91D1\u5F52\u5C5E\uFF0C\u5E76\u63A8\u9001ERP\u5B8C\u6210\u6838\u9500</p></div><div class="biz-2col-inner"><div class="kl-col-box"><div style="${ssrRenderStyle({ "display": "flex", "align-items": "center", "gap": "10px", "margin-bottom": "12px" })}"><div style="${ssrRenderStyle({ "width": "40px", "height": "40px", "border-radius": "10px", "display": "flex", "align-items": "center", "justify-content": "center", "flex-shrink": "0", "background": "linear-gradient(135deg,#7C3AED,#A78BFA)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" stroke-width="1.5"><circle cx="8" cy="8" r="6"></circle><path d="M5 8H11"></path></svg></div><h4 style="${ssrRenderStyle({ "font-size": "1rem", "font-weight": "800", "color": "#1F2937", "margin": "0" })}">\u4E3A\u4F55\u8981\u8BA4\u9886\u5230\u6B3E</h4></div><p style="${ssrRenderStyle({ "font-size": "0.78rem", "font-weight": "600", "color": "#6B7280", "margin": "0 0 10px" })}">\u89E3\u51B3\u4E24\u4E2A\u4E1A\u52A1\u8BC9\u6C42</p><div style="${ssrRenderStyle({ "display": "flex", "flex-direction": "column", "gap": "8px" })}"><div style="${ssrRenderStyle({ "display": "flex", "align-items": "flex-start", "gap": "8px", "padding": "8px 10px", "background": "#F5F3FF", "border-radius": "8px" })}"><div style="${ssrRenderStyle({ "font-size": ".75rem" })}"><strong>\u660E\u786E\u5F52\u5C5E</strong> \u2014 \u5230\u6B3E\u9700\u5BF9\u5E94\u5230\u5177\u4F53\u9879\u76EE\uFF0C\u65B9\u80FD\u8BA1\u5165\u9879\u76EE\u56DE\u6B3E</div></div><div style="${ssrRenderStyle({ "display": "flex", "align-items": "flex-start", "gap": "8px", "padding": "8px 10px", "background": "#F5F3FF", "border-radius": "8px" })}"><div style="${ssrRenderStyle({ "font-size": ".75rem" })}"><strong>\u95ED\u73AF\u6838\u9500</strong> \u2014 \u8BA4\u9886\u540E\u63A8\u9001ERP\uFF0C\u4E0E\u5F80\u6765\u8D26\u76EE\u5BF9\u51B2</div></div></div></div><div class="kl-col-box alt"><div style="${ssrRenderStyle({ "display": "flex", "align-items": "center", "gap": "10px", "margin-bottom": "12px" })}"><div style="${ssrRenderStyle({ "width": "40px", "height": "40px", "border-radius": "10px", "display": "flex", "align-items": "center", "justify-content": "center", "flex-shrink": "0", "background": "linear-gradient(135deg,#7C3AED,#A78BFA)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" stroke-width="1.5"><path d="M3 4H13V12H3Z"></path><path d="M6 7L8 9L10 6"></path></svg></div><h4 style="${ssrRenderStyle({ "font-size": "1rem", "font-weight": "800", "color": "#1F2937", "margin": "0" })}">\u8BA4\u9886\u57FA\u4E8E\u4EC0\u4E48</h4></div><p style="${ssrRenderStyle({ "font-size": "0.78rem", "font-weight": "600", "color": "#6B7280", "margin": "0 0 10px" })}">\u4E24\u7C7B\u524D\u7F6E\u6570\u636E</p><div style="${ssrRenderStyle({ "display": "flex", "flex-direction": "column", "gap": "8px" })}"><div style="${ssrRenderStyle({ "display": "flex", "align-items": "flex-start", "gap": "8px", "padding": "8px 10px", "background": "#F0FDF4", "border-radius": "8px" })}"><div style="${ssrRenderStyle({ "font-size": ".75rem" })}"><strong>\u5230\u6B3E\u5F15\u5165\u6570\u636E</strong> \u2014 \u9009\u53D6\u672A\u8BA4\u9886\u7684\u5230\u6B3E\u8BB0\u5F55</div></div><div style="${ssrRenderStyle({ "display": "flex", "align-items": "flex-start", "gap": "8px", "padding": "8px 10px", "background": "#F0FDF4", "border-radius": "8px" })}"><div style="${ssrRenderStyle({ "font-size": ".75rem" })}"><strong>\u9879\u76EE\u4FE1\u606F</strong> \u2014 \u6307\u5B9A\u8D44\u91D1\u5F52\u5C5E\u7684\u9879\u76EE\u7EF4\u5EA6</div></div></div></div></div></div><div class="kl-card"><div class="biz-kl-hdr"><span class="biz-tag" style="${ssrRenderStyle({ "background": "rgba(124,58,237,0.08)", "color": "#7C3AED", "border-color": "rgba(124,58,237,0.18)" })}">\u6D41\u7A0B</span><h2>\u5230\u6B3E\u8BA4\u9886\u6D41\u7A0B</h2><p>\u4ECE\u9009\u53D6\u5230\u6B3E\u6570\u636E\u5230\u63D0\u4EA4\u5BA1\u6279\uFF0C\u901A\u8FC7\u540E\u63A8\u9001ERP\u5B8C\u6210\u6838\u9500</p></div><div class="biz-steps"><div class="biz-step-item"><div class="biz-step-circle" style="${ssrRenderStyle({ "background": "linear-gradient(135deg,#7C3AED,#6D28D9)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" stroke-width="1.5"><circle cx="8" cy="8" r="6"></circle><path d="M5 8H11"></path></svg></div><h5>\u9009\u53D6\u5230\u6B3E\u6570\u636E</h5><small>\u4ECE\u5F15\u5165\u6C60\u9009<br>\u672A\u8BA4\u9886\u5230\u6B3E</small></div><div class="biz-step-arrow">\u2192</div><div class="biz-step-item"><div class="biz-step-circle" style="${ssrRenderStyle({ "background": "linear-gradient(135deg,#7C3AED,#6D28D9)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" stroke-width="1.5"><path d="M3 4H13V12H3Z"></path><path d="M6 8H10"></path></svg></div><h5>\u65B0\u5EFA\u8BA4\u9886\u5355</h5><small>\u6307\u5B9A\u9879\u76EE\u4E0E<br>\u8BA4\u9886\u91D1\u989D\u5E76\u4FDD\u5B58</small></div><div class="biz-step-arrow">\u2192</div><div class="biz-step-item"><div class="biz-step-circle" style="${ssrRenderStyle({ "background": "linear-gradient(135deg,#7C3AED,#6D28D9)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" stroke-width="1.5"><circle cx="8" cy="8" r="6"></circle><path d="M5 8H11"></path></svg></div><h5>\u63D0\u4EA4\u5BA1\u6279</h5><small>\u5BA1\u6279\u901A\u8FC7\u540E<br>\u63A8\u9001ERP\u6838\u9500</small></div><div class="biz-step-arrow">\u2192</div><div class="biz-step-item"><div class="biz-step-circle" style="${ssrRenderStyle({ "background": "linear-gradient(135deg,#7C3AED,#6D28D9)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" stroke-width="1.5"><path d="M2 12L6 8L10 10L14 4"></path><path d="M11 4H14V7"></path></svg></div><h5>ERP\u6838\u9500</h5><small>\u5230\u8D26\u786E\u8BA4<br>\u5B8C\u6210\u95ED\u73AF</small></div></div><div class="kl-tip" style="${ssrRenderStyle({ "margin-top": "14px" })}"><strong>\u6CE8\u610F\uFF1A</strong>\u8BA4\u9886\u91D1\u989D\u4E0D\u5F97\u8D85\u8FC7\u5230\u6B3E\u5269\u4F59\u53EF\u8BA4\u6B3E\uFF0C\u63D0\u4EA4\u540E\u63A8\u9001ERP\uFF0CERP\u4FA7\u5B8C\u6210\u5F80\u6765\u6838\u9500\u65B9\u624D\u95ED\u73AF\u3002 </div></div><div class="kl-card"><div class="biz-kl-hdr"><span class="biz-tag" style="${ssrRenderStyle({ "background": "rgba(124,58,237,0.08)", "color": "#7C3AED", "border-color": "rgba(124,58,237,0.18)" })}">\u5173\u952E\u89C4\u5219</span><h2>\u5230\u6B3E\u8BA4\u9886\u7684\u5173\u952E\u7EA6\u675F</h2><p>\u8BA4\u9886\u4E0D\u8D85\u989D\uFF0C\u63A8\u9001ERP\u6838\u9500\u540E\u65B9\u53EF\u95ED\u73AF</p></div><div class="biz-3col"><div class="kl-col-box" style="${ssrRenderStyle({ "margin-bottom": "0" })}"><div style="${ssrRenderStyle({ "display": "flex", "gap": "12px", "align-items": "flex-start" })}"><div style="${ssrRenderStyle({ "width": "36px", "height": "36px", "border-radius": "10px", "display": "flex", "align-items": "center", "justify-content": "center", "flex-shrink": "0", "background": "linear-gradient(135deg,#7C3AED,#A78BFA)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" stroke-width="1.5"><rect x="3" y="3" width="10" height="10" rx="2"></rect><path d="M6 8L7 9L10 6"></path></svg></div><div><h5 style="${ssrRenderStyle({ "font-size": "0.88rem", "font-weight": "800", "color": "#1F2937", "margin": "0 0 6px" })}">\u57FA\u4E8E\u5230\u6B3E\u5F15\u5165</h5><p style="${ssrRenderStyle({ "font-size": "0.73rem", "color": "#6B7280", "margin": "0", "line-height": "1.6" })}">\u8BA4\u9886\u5355\u53EA\u80FD\u9009\u53D6\u5DF2\u5F15\u5165\u4E14\u672A\u8BA4\u9886\u7684\u5230\u6B3E\uFF0C\u786E\u4FDD\u6570\u636E\u540C\u6E90\u3002</p></div></div></div><div class="kl-col-box alt" style="${ssrRenderStyle({ "margin-bottom": "0" })}"><div style="${ssrRenderStyle({ "display": "flex", "gap": "12px", "align-items": "flex-start" })}"><div style="${ssrRenderStyle({ "width": "36px", "height": "36px", "border-radius": "10px", "display": "flex", "align-items": "center", "justify-content": "center", "flex-shrink": "0", "background": "linear-gradient(135deg,#7C3AED,#A78BFA)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" stroke-width="1.5"><path d="M4 8L8 4L12 8"></path><path d="M8 4V12"></path></svg></div><div><h5 style="${ssrRenderStyle({ "font-size": "0.88rem", "font-weight": "800", "color": "#1F2937", "margin": "0 0 6px" })}">\u4E0D\u8D85\u989D\u8BA4\u9886</h5><p style="${ssrRenderStyle({ "font-size": "0.73rem", "color": "#6B7280", "margin": "0", "line-height": "1.6" })}">\u8BA4\u9886\u91D1\u989D\u53D7\u5269\u4F59\u53EF\u8BA4\u6B3E\u7EA6\u675F\uFF0C\u8D85\u989D\u5C06\u88AB\u7CFB\u7EDF\u62E6\u622A\u3002</p></div></div></div><div class="kl-col-box" style="${ssrRenderStyle({ "margin-bottom": "0" })}"><div style="${ssrRenderStyle({ "display": "flex", "gap": "12px", "align-items": "flex-start" })}"><div style="${ssrRenderStyle({ "width": "36px", "height": "36px", "border-radius": "10px", "display": "flex", "align-items": "center", "justify-content": "center", "flex-shrink": "0", "background": "linear-gradient(135deg,#7C3AED,#A78BFA)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" stroke-width="1.5"><circle cx="8" cy="8" r="6"></circle><path d="M5 8H11"></path></svg></div><div><h5 style="${ssrRenderStyle({ "font-size": "0.88rem", "font-weight": "800", "color": "#1F2937", "margin": "0 0 6px" })}">\u63A8\u9001ERP\u6838\u9500</h5><p style="${ssrRenderStyle({ "font-size": "0.73rem", "color": "#6B7280", "margin": "0", "line-height": "1.6" })}">\u5BA1\u6279\u901A\u8FC7\u5373\u63A8\u9001ERP\u5B8C\u6210\u5F80\u6765\u6838\u9500\uFF0C\u5230\u8D26\u72B6\u6001\u5B9E\u65F6\u56DE\u5199\u3002</p></div></div></div></div></div></div></div></div><div id="biz-flow" style="${ssrRenderStyle({ "display": "none" })}"><div class="tab-pad"><div class="bf-truth-flow"><h4 class="bf-main-title">\u9879\u76EE\u5230\u6B3E\u8BA4\u9886 \u2014 \u5168\u94FE\u8DEF\u6D41\u7A0B\u56FE</h4><p class="bf-main-sub">\u5F00\u59CB \u2192 \u5230\u6B3E\u5F15\u5165\u6570\u636E \u2192 \u2605\u65B0\u5EFA\u5230\u6B3E\u8BA4\u9886\u5355\u2605 \u2192 \u63D0\u4EA4\u5BA1\u6279(\u63A8\u9001ERP\u6838\u9500) \u2192 \u2696\u5BA1\u6279\u901A\u8FC7\uFF1F \u2192 ERP\u6838\u9500\u5B8C\u6210(APPROVED) / \u9A73\u56DE\u4E2D\u65AD \u2192 \u7ED3\u675F</p><div class="bf-fc-svg-wrap"><svg class="bf-fc-svg" style="${ssrRenderStyle({ "max-height": "none" })}" viewBox="0 0 1200 760" xmlns="http://www.w3.org/2000/svg"><defs><marker id="arr-green" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#16A34A"></path></marker><marker id="arr-gray" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#9CA3AF"></path></marker><marker id="arr-blue" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#3B82F6"></path></marker><marker id="arr-red" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#EF4444"></path></marker><filter id="shadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000" flood-opacity="0.15"></feDropShadow></filter></defs><rect x="50" y="20" width="1100" height="95" rx="8" fill="#EFF6FF" stroke="#3B82F6" stroke-width="1.5" stroke-dasharray="6,4"></rect><text x="600" y="42" text-anchor="middle" fill="#1D4ED8" font-size="13" font-weight="600">\u4E0A\u6E38\u652F\u6491</text><rect x="105" y="56" width="98" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"></rect><text x="154" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">\u5230\u6B3E\u5F15\u5165</text><rect x="213" y="56" width="98" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"></rect><text x="262" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">\u9879\u76EE\u5408\u540C</text><rect x="321" y="56" width="98" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"></rect><text x="370" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">\u51FA\u5E93\u786E\u8BA4</text><rect x="429" y="56" width="98" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"></rect><text x="478" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">ERP\u6838\u9500</text><rect x="537" y="56" width="98" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"></rect><text x="586" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">\u7F16\u7801\u89C4\u5219</text><rect x="645" y="56" width="98" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"></rect><text x="694" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">\u5DE5\u4F5C\u6D41</text><line x1="235" y1="115" x2="235" y2="150" stroke="#3B82F6" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#arr-blue)"></line><rect x="195" y="150" width="80" height="44" rx="6" fill="#FAF5FF" stroke="#9333EA" stroke-width="1.5" stroke-dasharray="5,3"></rect><text x="235" y="177" text-anchor="middle" fill="#7C3AED" font-size="13" font-weight="600">\u5F00\u59CB</text><line x1="235" y1="194" x2="235" y2="210" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"></line><rect x="145" y="210" width="180" height="40" rx="6" fill="#F0FDF4" stroke="#16A34A" stroke-width="2"></rect><text x="235" y="235" text-anchor="middle" fill="#166534" font-size="12" font-weight="600">\u5230\u6B3E\u5F15\u5165\u6570\u636E(EPM_PAYMENT_IMPORT)</text><line x1="235" y1="250" x2="235" y2="266" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"></line><rect x="155" y="266" width="160" height="54" rx="6" fill="#16A34A" stroke="#15803D" stroke-width="2" filter="url(#shadow)"></rect><text x="235" y="290" text-anchor="middle" fill="#FFFFFF" font-size="13" font-weight="700">\u2605\u65B0\u5EFA\u5230\u6B3E\u8BA4\u9886\u5355\u2605</text><text x="235" y="308" text-anchor="middle" fill="#DCFCE7" font-size="10">\u9009\u5BA2\u6237/\u9879\u76EE/\u5408\u540C/\u51FA\u5E93\u660E\u7EC6\xB7\u586B\u91D1\u989D\u4FDD\u5B58</text><line x1="235" y1="320" x2="235" y2="336" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"></line><rect x="150" y="336" width="170" height="40" rx="6" fill="#F0FDF4" stroke="#16A34A" stroke-width="2"></rect><text x="235" y="361" text-anchor="middle" fill="#166534" font-size="12" font-weight="600">\u63D0\u4EA4\u5BA1\u6279(\u63A8\u9001ERP\u6838\u9500)</text><line x1="235" y1="376" x2="235" y2="392" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"></line><polygon points="235,392 305,432 235,472 165,432" fill="#FAF5FF" stroke="#9333EA" stroke-width="1.5" stroke-dasharray="5,3"></polygon><text x="235" y="436" text-anchor="middle" fill="#7C3AED" font-size="12" font-weight="600">\u2696 \u5BA1\u6279\u901A\u8FC7\uFF1F</text><line x1="235" y1="472" x2="235" y2="488" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"></line><rect x="150" y="488" width="170" height="40" rx="6" fill="#F0FDF4" stroke="#16A34A" stroke-width="2"></rect><text x="235" y="513" text-anchor="middle" fill="#166534" font-size="12" font-weight="600">ERP\u6838\u9500\u5B8C\u6210(APPROVED)</text><line x1="235" y1="528" x2="235" y2="544" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"></line><rect x="180" y="544" width="110" height="40" rx="6" fill="#FAF5FF" stroke="#9333EA" stroke-width="1.5" stroke-dasharray="5,3"></rect><text x="235" y="569" text-anchor="middle" fill="#7C3AED" font-size="13" font-weight="600">\u7ED3\u675F</text><line x1="235" y1="584" x2="235" y2="600" stroke="#16A34A" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#arr-green)"></line><line x1="305" y1="432" x2="430" y2="432" stroke="#EF4444" stroke-width="2" marker-end="url(#arr-red)"></line><rect x="380" y="417" width="100" height="28" rx="4" fill="#FEF2F2" stroke="#EF4444" stroke-width="1"></rect><text x="430" y="436" text-anchor="middle" fill="#DC2626" font-size="11" font-weight="600">\u9A73\u56DE\u4E2D\u65AD\u2717</text><line x1="430" y1="432" x2="430" y2="293" stroke="#EF4444" stroke-width="1.5"></line><line x1="430" y1="293" x2="315" y2="293" stroke="#EF4444" stroke-width="1.5" marker-end="url(#arr-red)"></line><rect x="50" y="600" width="1100" height="95" rx="8" fill="#F0FDF4" stroke="#16A34A" stroke-width="1.5" stroke-dasharray="6,4"></rect><text x="600" y="622" text-anchor="middle" fill="#166534" font-size="13" font-weight="600">\u4E0B\u6E38\u5F71\u54CD</text><rect x="200" y="638" width="150" height="36" rx="5" fill="#FFFFFF" stroke="#16A34A" stroke-width="1.2"></rect><text x="275" y="661" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">\u5230\u6B3E\u5355\xB7\u53EF\u8BA4\u9886\u56DE\u5199</text><rect x="375" y="638" width="150" height="36" rx="5" fill="#FFFFFF" stroke="#16A34A" stroke-width="1.2"></rect><text x="450" y="661" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">ERP\u7CFB\u7EDF\xB7\u6838\u9500\u63A8\u9001</text><rect x="550" y="638" width="150" height="36" rx="5" fill="#FFFFFF" stroke="#16A34A" stroke-width="1.2"></rect><text x="625" y="661" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">\u9879\u76EE\u5408\u540C\xB7\u56DE\u6B3E\u66F4\u65B0</text><rect x="725" y="638" width="150" height="36" rx="5" fill="#FFFFFF" stroke="#16A34A" stroke-width="1.2"></rect><text x="800" y="661" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">\u51FA\u5E93\u786E\u8BA4\xB7\u64A4\u9500\u6807\u8BB0</text></svg></div><div class="bf-fc-legend"><span class="bf-fc-legend-item"><span class="bf-fc-dot bf-fc-dot-green"></span> \u4E3B\u6D41\u7A0B\u6B65\u9AA4</span><span class="bf-fc-legend-item"><span class="bf-fc-dot bf-fc-dot-purple"></span> \u5F00\u59CB/\u7ED3\u675F/\u5224\u65AD</span><span class="bf-fc-legend-item"><span class="bf-fc-dot bf-fc-dot-blue"></span> \u4E0A\u6E38\u652F\u6491</span><span class="bf-fc-legend-item"><span style="${ssrRenderStyle({ "display": "inline-block", "width": "22px", "height": "2px", "background": "#EF4444" })}"></span> \u5BA1\u6279\u9A73\u56DE/\u4E2D\u65AD</span></div></div></div></div><div id="key-logic" style="${ssrRenderStyle({ "display": "none" })}"><div class="tab-pad"><div class="kl-wrap">`);
  _push(ssrRenderComponent(_component_KbCard, {
    num: "1",
    title: "\u91CD\u70B9\u903B\u8F911\uFF1A\u8BA4\u9886\u91D1\u989D\u6821\u9A8C {\u6838\u5FC3\u6821\u9A8C}"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u610F\u4E49</strong>\uFF1A\u786E\u4FDD\u8BA4\u9886\u91D1\u989D\u4E0D\u8D85\u8FC7\u5230\u6B3E\u5355\u5269\u4F59\u53EF\u8BA4\u9886\u91D1\u989D\uFF0C\u9632\u6B62\u8D85\u8BA4\u9886</li></ul><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u5177\u4F53\u903B\u8F91\u63CF\u8FF0</strong></li></ul><ul${_scopeId}><li${_scopeId}>\u7B2C1\u70B9\uFF1A\u865A\u62DF\u5230\u6B3E\u5355\uFF08VIRTUAL_RECEIPT\uFF09\u67E5\u6570\u636E\u5E93\u8BA1\u7B97\u5269\u4F59\u53EF\u8BA4\u9886\u91D1\u989D\uFF0C\u8BA4\u9886\u91D1\u989D\u5408\u8BA1\u4E0D\u80FD\u8D85\u8FC7\u8BE5\u503C</li></ul><ul${_scopeId}><li${_scopeId}>\u7B2C2\u70B9\uFF1A\u771F\u5B9E\u5230\u6B3E\u5355\u5B9E\u65F6\u8C03\u7528ERP\u63A5\u53E3\u67E5\u8BE2\u6700\u65B0\u5269\u4F59\u53EF\u8BA4\u9886\u91D1\u989D\uFF0C\u8BA4\u9886\u91D1\u989D\u5408\u8BA1\u4E0D\u80FD\u8D85\u8FC7ERP\u8FD4\u56DE\u503C</li></ul><ul${_scopeId}><li${_scopeId}>\u7B2C3\u70B9\uFF1A\u6BCF\u884C\u51FA\u5E93\u660E\u7EC6\u7684\u5DF2\u8BA4\u9886\u91D1\u989D+\u672C\u6B21\u8BA4\u9886\u91D1\u989D\u4E0D\u80FD\u8D85\u8FC7\u5DE5\u7A0B\u65B9\u91D1\u989D</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u610F\u4E49"),
              createTextVNode("\uFF1A\u786E\u4FDD\u8BA4\u9886\u91D1\u989D\u4E0D\u8D85\u8FC7\u5230\u6B3E\u5355\u5269\u4F59\u53EF\u8BA4\u9886\u91D1\u989D\uFF0C\u9632\u6B62\u8D85\u8BA4\u9886")
            ])
          ]),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u5177\u4F53\u903B\u8F91\u63CF\u8FF0")
            ])
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u7B2C1\u70B9\uFF1A\u865A\u62DF\u5230\u6B3E\u5355\uFF08VIRTUAL_RECEIPT\uFF09\u67E5\u6570\u636E\u5E93\u8BA1\u7B97\u5269\u4F59\u53EF\u8BA4\u9886\u91D1\u989D\uFF0C\u8BA4\u9886\u91D1\u989D\u5408\u8BA1\u4E0D\u80FD\u8D85\u8FC7\u8BE5\u503C")
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u7B2C2\u70B9\uFF1A\u771F\u5B9E\u5230\u6B3E\u5355\u5B9E\u65F6\u8C03\u7528ERP\u63A5\u53E3\u67E5\u8BE2\u6700\u65B0\u5269\u4F59\u53EF\u8BA4\u9886\u91D1\u989D\uFF0C\u8BA4\u9886\u91D1\u989D\u5408\u8BA1\u4E0D\u80FD\u8D85\u8FC7ERP\u8FD4\u56DE\u503C")
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u7B2C3\u70B9\uFF1A\u6BCF\u884C\u51FA\u5E93\u660E\u7EC6\u7684\u5DF2\u8BA4\u9886\u91D1\u989D+\u672C\u6B21\u8BA4\u9886\u91D1\u989D\u4E0D\u80FD\u8D85\u8FC7\u5DE5\u7A0B\u65B9\u91D1\u989D")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, {
    num: "2",
    title: "\u91CD\u70B9\u903B\u8F912\uFF1A\u5DE5\u4F5C\u6D41\u6309\u533A\u57DF\u5206\u533A {\u591A\u5DE5\u4F5C\u6D41}"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u610F\u4E49</strong>\uFF1A\u4E0D\u540C\u533A\u57DF\u7684\u5230\u6B3E\u8BA4\u9886\u8D70\u4E0D\u540C\u7684\u5BA1\u6279\u6D41\u7A0B</li></ul><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u5177\u4F53\u903B\u8F91\u63CF\u8FF0</strong></li></ul><ul${_scopeId}><li${_scopeId}>\u7B2C1\u70B9\uFF1A\u6839\u636E\u9879\u76EE\u6240\u5728\u533A\u57DF\u9009\u62E9\u5BF9\u5E94\u5DE5\u4F5C\u6D41\uFF08EPM_PAYMENT_ALLOT_SOUTH/NORTH/WEST/EAST\uFF09</li></ul><ul${_scopeId}><li${_scopeId}>\u7B2C2\u70B9\uFF1A\u63D0\u4EA4\u65F6\u5148\u6821\u9A8C\u5230\u6B3E\u5355\u72B6\u6001\u548C\u53EF\u8BA4\u9886\u91D1\u989D\uFF0C\u63A8\u9001ERP SUBMIT\uFF0C\u518D\u53D1\u8D77\u5DE5\u4F5C\u6D41</li></ul><ul${_scopeId}><li${_scopeId}>\u7B2C3\u70B9\uFF1A\u5BA1\u6279\u901A\u8FC7\u63A8\u9001ERP APPROVE\uFF0C\u72B6\u6001\u6539\u4E3AAPPROVED\uFF1B\u9A73\u56DE\u63A8\u9001ERP CANCEL</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u610F\u4E49"),
              createTextVNode("\uFF1A\u4E0D\u540C\u533A\u57DF\u7684\u5230\u6B3E\u8BA4\u9886\u8D70\u4E0D\u540C\u7684\u5BA1\u6279\u6D41\u7A0B")
            ])
          ]),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u5177\u4F53\u903B\u8F91\u63CF\u8FF0")
            ])
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u7B2C1\u70B9\uFF1A\u6839\u636E\u9879\u76EE\u6240\u5728\u533A\u57DF\u9009\u62E9\u5BF9\u5E94\u5DE5\u4F5C\u6D41\uFF08EPM_PAYMENT_ALLOT_SOUTH/NORTH/WEST/EAST\uFF09")
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u7B2C2\u70B9\uFF1A\u63D0\u4EA4\u65F6\u5148\u6821\u9A8C\u5230\u6B3E\u5355\u72B6\u6001\u548C\u53EF\u8BA4\u9886\u91D1\u989D\uFF0C\u63A8\u9001ERP SUBMIT\uFF0C\u518D\u53D1\u8D77\u5DE5\u4F5C\u6D41")
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u7B2C3\u70B9\uFF1A\u5BA1\u6279\u901A\u8FC7\u63A8\u9001ERP APPROVE\uFF0C\u72B6\u6001\u6539\u4E3AAPPROVED\uFF1B\u9A73\u56DE\u63A8\u9001ERP CANCEL")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, {
    num: "3",
    title: "\u91CD\u70B9\u903B\u8F913\uFF1A\u624B\u5DE5\u53D1\u7968\u8BA4\u9886\u4E0E\u81EA\u52A8\u8BA4\u9886\u533A\u5206 {\u8BA4\u9886\u65B9\u5F0F}"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u610F\u4E49</strong>\uFF1A\u652F\u6301\u624B\u5DE5\u53D1\u7968\u8BA4\u9886\u548C\u51FA\u5E93\u5355\u8BA4\u9886\u4E24\u79CD\u6A21\u5F0F\uFF0C\u6570\u636E\u67E5\u8BE2\u548C\u63A8\u9001\u903B\u8F91\u4E0D\u540C</li></ul><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u5177\u4F53\u903B\u8F91\u63CF\u8FF0</strong></li></ul><ul${_scopeId}><li${_scopeId}>\u7B2C1\u70B9\uFF1A\u624B\u5DE5\u53D1\u7968\u8BA4\u9886\uFF08manualInvoiceClaim=Y\uFF09\u8D70selectDetailsByProject\u67E5\u8BE2\u51FA\u5E93\u660E\u7EC6\uFF0C\u63A8\u9001ERP\u8D70queryManualAllotDetailDataToErp</li></ul><ul${_scopeId}><li${_scopeId}>\u7B2C2\u70B9\uFF1A\u975E\u624B\u5DE5\u53D1\u7968\u8BA4\u9886\u8D70selectDetailsByProjectTwo\u67E5\u8BE2\uFF0C\u63A8\u9001ERP\u8D70queryNotManualAllotDetailDataToErp</li></ul><ul${_scopeId}><li${_scopeId}>\u7B2C3\u70B9\uFF1A\u8BA4\u9886\u65B9\u5F0F\u5B57\u6BB5claimType\u533A\u5206auto\uFF08\u81EA\u52A8\u8BA4\u9886\uFF09\u548Cmanual\uFF08\u624B\u52A8\u8BA4\u9886\uFF09</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u610F\u4E49"),
              createTextVNode("\uFF1A\u652F\u6301\u624B\u5DE5\u53D1\u7968\u8BA4\u9886\u548C\u51FA\u5E93\u5355\u8BA4\u9886\u4E24\u79CD\u6A21\u5F0F\uFF0C\u6570\u636E\u67E5\u8BE2\u548C\u63A8\u9001\u903B\u8F91\u4E0D\u540C")
            ])
          ]),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u5177\u4F53\u903B\u8F91\u63CF\u8FF0")
            ])
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u7B2C1\u70B9\uFF1A\u624B\u5DE5\u53D1\u7968\u8BA4\u9886\uFF08manualInvoiceClaim=Y\uFF09\u8D70selectDetailsByProject\u67E5\u8BE2\u51FA\u5E93\u660E\u7EC6\uFF0C\u63A8\u9001ERP\u8D70queryManualAllotDetailDataToErp")
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u7B2C2\u70B9\uFF1A\u975E\u624B\u5DE5\u53D1\u7968\u8BA4\u9886\u8D70selectDetailsByProjectTwo\u67E5\u8BE2\uFF0C\u63A8\u9001ERP\u8D70queryNotManualAllotDetailDataToErp")
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u7B2C3\u70B9\uFF1A\u8BA4\u9886\u65B9\u5F0F\u5B57\u6BB5claimType\u533A\u5206auto\uFF08\u81EA\u52A8\u8BA4\u9886\uFF09\u548Cmanual\uFF08\u624B\u52A8\u8BA4\u9886\uFF09")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, {
    num: "4",
    title: "\u91CD\u70B9\u903B\u8F914\uFF1A\u8FD8\u6B3E\u91D1\u989D\u81EA\u52A8\u8BA1\u7B97 {\u91D1\u989D\u8BA1\u7B97}"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u610F\u4E49</strong>\uFF1A\u6839\u636E\u5DE5\u7A0B\u65B9\u4E0E\u7ECF\u9500\u5546\u91D1\u989D\u6BD4\u4F8B\u81EA\u52A8\u8BA1\u7B97\u7ECF\u9500\u5546\u56DE\u6B3E\u91D1\u989D</li></ul><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u5177\u4F53\u903B\u8F91\u63CF\u8FF0</strong></li></ul><ul${_scopeId}><li${_scopeId}>\u7B2C1\u70B9\uFF1A\u82E5\u672C\u6B21\u8BA4\u6B3E\u91D1\u989D\u7B49\u4E8E\u5269\u4F59\u8BA4\u6B3E\u91D1\u989D\uFF0C\u5219\u8FD8\u6B3E\u91D1\u989D=\u7ECF\u9500\u5546\u91D1\u989D-\u5DF2\u8FD8\u6B3E\u91D1\u989D</li></ul><ul${_scopeId}><li${_scopeId}>\u7B2C2\u70B9\uFF1A\u5426\u5219\u8FD8\u6B3E\u91D1\u989D=\uFF08\u7ECF\u9500\u5546\u91D1\u989D/\u5DE5\u7A0B\u65B9\u91D1\u989D\uFF09\xD7\u672C\u6B21\u8BA4\u9886\u91D1\u989D\uFF0C\u4FDD\u75592\u4F4D\u5C0F\u6570</li></ul><ul${_scopeId}><li${_scopeId}>\u7B2C3\u70B9\uFF1A\u5546\u7968/\u94F6\u7968\u7C7B\u578B\u4E14\u672A\u5151\u4ED8\u7684\u5230\u6B3E\u5355\uFF0C\u6807\u8BB0\u4E3A\u4E0D\u53EF\u5151\u73B0\uFF08allowCashFlag=false\uFF09</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u610F\u4E49"),
              createTextVNode("\uFF1A\u6839\u636E\u5DE5\u7A0B\u65B9\u4E0E\u7ECF\u9500\u5546\u91D1\u989D\u6BD4\u4F8B\u81EA\u52A8\u8BA1\u7B97\u7ECF\u9500\u5546\u56DE\u6B3E\u91D1\u989D")
            ])
          ]),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u5177\u4F53\u903B\u8F91\u63CF\u8FF0")
            ])
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u7B2C1\u70B9\uFF1A\u82E5\u672C\u6B21\u8BA4\u6B3E\u91D1\u989D\u7B49\u4E8E\u5269\u4F59\u8BA4\u6B3E\u91D1\u989D\uFF0C\u5219\u8FD8\u6B3E\u91D1\u989D=\u7ECF\u9500\u5546\u91D1\u989D-\u5DF2\u8FD8\u6B3E\u91D1\u989D")
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u7B2C2\u70B9\uFF1A\u5426\u5219\u8FD8\u6B3E\u91D1\u989D=\uFF08\u7ECF\u9500\u5546\u91D1\u989D/\u5DE5\u7A0B\u65B9\u91D1\u989D\uFF09\xD7\u672C\u6B21\u8BA4\u9886\u91D1\u989D\uFF0C\u4FDD\u75592\u4F4D\u5C0F\u6570")
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u7B2C3\u70B9\uFF1A\u5546\u7968/\u94F6\u7968\u7C7B\u578B\u4E14\u672A\u5151\u4ED8\u7684\u5230\u6B3E\u5355\uFF0C\u6807\u8BB0\u4E3A\u4E0D\u53EF\u5151\u73B0\uFF08allowCashFlag=false\uFF09")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, {
    num: "5",
    title: "\u91CD\u70B9\u903B\u8F915\uFF1A\u5220\u9664\u9650\u5236 {\u72B6\u6001\u63A7\u5236}"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u610F\u4E49</strong>\uFF1A\u4EC5\u65B0\u5EFA\u548C\u9A73\u56DE\u72B6\u6001\u7684\u8BA4\u9886\u5355\u53EF\u5220\u9664\uFF0C\u9632\u6B62\u5DF2\u5BA1\u6279\u6570\u636E\u88AB\u8BEF\u5220</li></ul><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u5177\u4F53\u903B\u8F91\u63CF\u8FF0</strong></li></ul><ul${_scopeId}><li${_scopeId}>\u7B2C1\u70B9\uFF1A\u4EC5\u5BA1\u6279\u72B6\u6001\u4E3ANEW\u6216INTERRUPT\u7684\u8BA4\u9886\u5355\u53EF\u5220\u9664</li></ul><ul${_scopeId}><li${_scopeId}>\u7B2C2\u70B9\uFF1A\u5220\u9664\u65F6\u7EA7\u8054\u5220\u9664\u5408\u540C\u884C\u548C\u51FA\u5E93\u660E\u7EC6\u884C</li></ul><ul${_scopeId}><li${_scopeId}>\u7B2C3\u70B9\uFF1A\u5220\u9664\u540E\u66F4\u65B0\u5230\u6B3E\u5F15\u5165\u5355\u7684\u53EF\u8BA4\u9886\u91D1\u989D\uFF08\u865A\u62DF\u5355\u67E5DB\uFF0C\u771F\u5B9E\u5355\u67E5ERP\uFF09</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u610F\u4E49"),
              createTextVNode("\uFF1A\u4EC5\u65B0\u5EFA\u548C\u9A73\u56DE\u72B6\u6001\u7684\u8BA4\u9886\u5355\u53EF\u5220\u9664\uFF0C\u9632\u6B62\u5DF2\u5BA1\u6279\u6570\u636E\u88AB\u8BEF\u5220")
            ])
          ]),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u5177\u4F53\u903B\u8F91\u63CF\u8FF0")
            ])
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u7B2C1\u70B9\uFF1A\u4EC5\u5BA1\u6279\u72B6\u6001\u4E3ANEW\u6216INTERRUPT\u7684\u8BA4\u9886\u5355\u53EF\u5220\u9664")
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u7B2C2\u70B9\uFF1A\u5220\u9664\u65F6\u7EA7\u8054\u5220\u9664\u5408\u540C\u884C\u548C\u51FA\u5E93\u660E\u7EC6\u884C")
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u7B2C3\u70B9\uFF1A\u5220\u9664\u540E\u66F4\u65B0\u5230\u6B3E\u5F15\u5165\u5355\u7684\u53EF\u8BA4\u9886\u91D1\u989D\uFF08\u865A\u62DF\u5355\u67E5DB\uFF0C\u771F\u5B9E\u5355\u67E5ERP\uFF09")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div><div id="detail-logic" style="${ssrRenderStyle({ "display": "none" })}"><div class="tab-pad"><div class="kl-wrap">`);
  _push(ssrRenderComponent(_component_KbCard, { title: "\u754C\u9762\u6A21\u57571\uFF1A\u8BA4\u9886\u5355\u5217\u8868\u9875" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5B57\u6BB5\u540D</th><th${_scopeId}>\u6570\u636E\u5E93\u5217\u540D</th><th${_scopeId}>\u7EC4\u4EF6</th><th${_scopeId}>\u4E1A\u52A1\u91CA\u4E49</th><th${_scopeId}>\u663E\u9690\u6761\u4EF6</th><th${_scopeId}>\u53D6\u503C/\u8D4B\u503C\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u8BA4\u9886\u5355\u53F7</td><td${_scopeId}>EPM_PAYMENT_ALLOT.PAYMENT_ALLOT_CODE</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u8BA4\u9886\u5355\u7F16\u53F7</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u4FDD\u5B58\u65F6\u6309\u7F16\u7801\u89C4\u5219AE.EPM_PAYMENT_ALLOT\u81EA\u52A8\u751F\u6210</td></tr><tr${_scopeId}><td${_scopeId}>\u5230\u6B3E\u8BB0\u5F55\u5355\u53F7</td><td${_scopeId}>EPM_PAYMENT_ALLOT.PAYMENT_IMPORT_CODE</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u5173\u8054\u7684\u5230\u6B3E\u5F15\u5165\u5355\u53F7</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u6765\u6E90\u5230\u6B3E\u5F15\u5165\u5355</td></tr><tr${_scopeId}><td${_scopeId}>\u94F6\u884C\u6D41\u6C34\u53F7</td><td${_scopeId}>EPM_PAYMENT_ALLOT.SERIAL_NUMBER</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u94F6\u884C\u6D41\u6C34\u53F7</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u6765\u6E90\u5230\u6B3E\u5F15\u5165\u5355</td></tr><tr${_scopeId}><td${_scopeId}>\u5BA2\u6237\u7F16\u7801</td><td${_scopeId}>EPM_PAYMENT_ALLOT.CUSTOMER_CODE</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u5BA2\u6237\u7F16\u7801</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u6765\u6E90\u5230\u6B3E\u5F15\u5165\u5355</td></tr><tr${_scopeId}><td${_scopeId}>\u5BA2\u6237\u540D\u79F0</td><td${_scopeId}>EPM_PAYMENT_ALLOT.CUSTOMER_NAME</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u5BA2\u6237\u540D\u79F0</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u6765\u6E90\u5230\u6B3E\u5F15\u5165\u5355</td></tr><tr${_scopeId}><td${_scopeId}>\u672C\u6B21\u8BA4\u6B3E\u5408\u8BA1\u91D1\u989D</td><td${_scopeId}>EPM_PAYMENT_ALLOT.ALLOT_AMT</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u6240\u6709\u884C\u8BA4\u6B3E\u91D1\u989D\u5408\u8BA1</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u81EA\u52A8\u8BA1\u7B97=\u5404\u884C\u8BA4\u6B3E\u91D1\u989D\u4E4B\u548C</td></tr><tr${_scopeId}><td${_scopeId}>\u8BA4\u6B3E\u72B6\u6001</td><td${_scopeId}>EPM_PAYMENT_ALLOT.PAYMENT_ALLOT_STAT</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u8BA4\u9886\u5355\u5BA1\u6279\u72B6\u6001</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>APPLYING/APPROVED/TRANSFER/ACCOUNTED/CANCEL</td></tr><tr${_scopeId}><td${_scopeId}>\u5BA1\u6279\u72B6\u6001</td><td${_scopeId}>EPM_PAYMENT_ALLOT.HZ_APPROVE_STATUS</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u5DE5\u4F5C\u6D41\u5BA1\u6279\u72B6\u6001</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>NEW/RUN/APPROVED/INTERRUPT</td></tr><tr${_scopeId}><td${_scopeId}>\u521B\u5EFA\u4EBA</td><td${_scopeId}>EPM_PAYMENT_ALLOT.CREATOR</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u521B\u5EFA\u4EBA</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u7CFB\u7EDF\u81EA\u52A8\u8BB0\u5F55</td></tr><tr${_scopeId}><td${_scopeId}>\u521B\u5EFA\u65F6\u95F4</td><td${_scopeId}>EPM_PAYMENT_ALLOT.CREATION_DATE</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u521B\u5EFA\u65F6\u95F4</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u7CFB\u7EDF\u81EA\u52A8\u8BB0\u5F55</td></tr></tbody></table>`);
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
                createVNode("td", null, "\u8BA4\u9886\u5355\u53F7"),
                createVNode("td", null, "EPM_PAYMENT_ALLOT.PAYMENT_ALLOT_CODE"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u8BA4\u9886\u5355\u7F16\u53F7"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u4FDD\u5B58\u65F6\u6309\u7F16\u7801\u89C4\u5219AE.EPM_PAYMENT_ALLOT\u81EA\u52A8\u751F\u6210")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5230\u6B3E\u8BB0\u5F55\u5355\u53F7"),
                createVNode("td", null, "EPM_PAYMENT_ALLOT.PAYMENT_IMPORT_CODE"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u5173\u8054\u7684\u5230\u6B3E\u5F15\u5165\u5355\u53F7"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u6765\u6E90\u5230\u6B3E\u5F15\u5165\u5355")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u94F6\u884C\u6D41\u6C34\u53F7"),
                createVNode("td", null, "EPM_PAYMENT_ALLOT.SERIAL_NUMBER"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u94F6\u884C\u6D41\u6C34\u53F7"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u6765\u6E90\u5230\u6B3E\u5F15\u5165\u5355")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5BA2\u6237\u7F16\u7801"),
                createVNode("td", null, "EPM_PAYMENT_ALLOT.CUSTOMER_CODE"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u5BA2\u6237\u7F16\u7801"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u6765\u6E90\u5230\u6B3E\u5F15\u5165\u5355")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5BA2\u6237\u540D\u79F0"),
                createVNode("td", null, "EPM_PAYMENT_ALLOT.CUSTOMER_NAME"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u5BA2\u6237\u540D\u79F0"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u6765\u6E90\u5230\u6B3E\u5F15\u5165\u5355")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u672C\u6B21\u8BA4\u6B3E\u5408\u8BA1\u91D1\u989D"),
                createVNode("td", null, "EPM_PAYMENT_ALLOT.ALLOT_AMT"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u6240\u6709\u884C\u8BA4\u6B3E\u91D1\u989D\u5408\u8BA1"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u81EA\u52A8\u8BA1\u7B97=\u5404\u884C\u8BA4\u6B3E\u91D1\u989D\u4E4B\u548C")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u8BA4\u6B3E\u72B6\u6001"),
                createVNode("td", null, "EPM_PAYMENT_ALLOT.PAYMENT_ALLOT_STAT"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u8BA4\u9886\u5355\u5BA1\u6279\u72B6\u6001"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "APPLYING/APPROVED/TRANSFER/ACCOUNTED/CANCEL")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5BA1\u6279\u72B6\u6001"),
                createVNode("td", null, "EPM_PAYMENT_ALLOT.HZ_APPROVE_STATUS"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u5DE5\u4F5C\u6D41\u5BA1\u6279\u72B6\u6001"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "NEW/RUN/APPROVED/INTERRUPT")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u521B\u5EFA\u4EBA"),
                createVNode("td", null, "EPM_PAYMENT_ALLOT.CREATOR"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u521B\u5EFA\u4EBA"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u7CFB\u7EDF\u81EA\u52A8\u8BB0\u5F55")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u521B\u5EFA\u65F6\u95F4"),
                createVNode("td", null, "EPM_PAYMENT_ALLOT.CREATION_DATE"),
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
  _push(ssrRenderComponent(_component_KbCard, { title: "\u754C\u9762\u6A21\u57572\uFF1A\u8BA4\u9886\u5355\u8BE6\u60C5\u9875\uFF08\u5934\u8868\u5355\uFF09" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5B57\u6BB5\u540D</th><th${_scopeId}>\u6570\u636E\u5E93\u5217\u540D</th><th${_scopeId}>\u7EC4\u4EF6</th><th${_scopeId}>\u4E1A\u52A1\u91CA\u4E49</th><th${_scopeId}>\u663E\u9690\u6761\u4EF6</th><th${_scopeId}>\u53D6\u503C/\u8D4B\u503C\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u8BA4\u9886\u5355\u53F7</td><td${_scopeId}>EPM_PAYMENT_ALLOT.PAYMENT_ALLOT_CODE</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u8BA4\u9886\u5355\u7F16\u53F7</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u65B0\u5EFA\u65F6\u81EA\u52A8\u751F\u6210\uFF0C\u4E0D\u53EF\u7F16\u8F91</td></tr><tr${_scopeId}><td${_scopeId}>\u5230\u6B3E\u8BB0\u5F55\u5355\u53F7</td><td${_scopeId}>EPM_PAYMENT_ALLOT.PAYMENT_IMPORT_CODE</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u5173\u8054\u5230\u6B3E\u5F15\u5165\u5355</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u4ECE\u5230\u6B3E\u5F15\u5165\u5355\u5E26\u5165\uFF0C\u4E0D\u53EF\u7F16\u8F91</td></tr><tr${_scopeId}><td${_scopeId}>\u5BA2\u6237\u7F16\u7801</td><td${_scopeId}>EPM_PAYMENT_ALLOT.CUSTOMER_CODE</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u5BA2\u6237\u7F16\u7801</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u4ECE\u5230\u6B3E\u5F15\u5165\u5355\u5E26\u5165</td></tr><tr${_scopeId}><td${_scopeId}>\u5BA2\u6237\u540D\u79F0</td><td${_scopeId}>EPM_PAYMENT_ALLOT.CUSTOMER_NAME</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u5BA2\u6237\u540D\u79F0</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u4ECE\u5230\u6B3E\u5F15\u5165\u5355\u5E26\u5165</td></tr><tr${_scopeId}><td${_scopeId}>\u8BA4\u6B3E\u524D\u53EF\u8BA4\u6B3E\u91D1\u989D</td><td${_scopeId}>EPM_PAYMENT_ALLOT.UNALLOT_AMT_BEFORE</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u8BA4\u9886\u524D\u7684\u53EF\u8BA4\u9886\u91D1\u989D</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u4FDD\u5B58\u65F6\u81EA\u52A8\u8BA1\u7B97=\u5230\u6B3E\u5355\u5269\u4F59\u53EF\u8BA4\u9886\u91D1\u989D</td></tr><tr${_scopeId}><td${_scopeId}>\u672C\u6B21\u8BA4\u6B3E\u5408\u8BA1\u91D1\u989D</td><td${_scopeId}>EPM_PAYMENT_ALLOT.ALLOT_AMT</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u672C\u6B21\u8BA4\u9886\u91D1\u989D\u5408\u8BA1</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u81EA\u52A8\u8BA1\u7B97=\u5404\u884C\u8BA4\u6B3E\u91D1\u989D\u4E4B\u548C</td></tr><tr${_scopeId}><td${_scopeId}>\u8BA4\u6B3E\u540E\u53EF\u8BA4\u6B3E\u91D1\u989D</td><td${_scopeId}>EPM_PAYMENT_ALLOT.UNALLOT_AMT_AFTER</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u8BA4\u9886\u540E\u7684\u53EF\u8BA4\u9886\u91D1\u989D</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u81EA\u52A8\u8BA1\u7B97=\u8BA4\u6B3E\u524D\u53EF\u8BA4\u6B3E\u91D1\u989D-\u672C\u6B21\u8BA4\u6B3E\u5408\u8BA1\u91D1\u989D</td></tr><tr${_scopeId}><td${_scopeId}>\u8BA4\u9886\u65B9\u5F0F</td><td${_scopeId}>EPM_PAYMENT_ALLOT.CLAIM_TYPE</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u81EA\u52A8/\u624B\u52A8\u8BA4\u9886</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u624B\u52A8\u4FDD\u5B58\u65F6\u4E3Amanual</td></tr><tr${_scopeId}><td${_scopeId}>\u624B\u5DE5\u53D1\u7968\u8BA4\u9886</td><td${_scopeId}>EPM_PAYMENT_ALLOT.MANUAL_INVOICE_CLAIM</td><td${_scopeId}>\u5355\u9009\u6846</td><td${_scopeId}>\u662F\u5426\u624B\u5DE5\u53D1\u7968\u8BA4\u9886</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>Y/N\uFF0C\u5F71\u54CD\u51FA\u5E93\u660E\u7EC6\u67E5\u8BE2\u903B\u8F91</td></tr><tr${_scopeId}><td${_scopeId}>\u5907\u6CE8</td><td${_scopeId}>EPM_PAYMENT_ALLOT.REMARK</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u5907\u6CE8</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u53EF\u7F16\u8F91</td></tr><tr${_scopeId}><td${_scopeId}>\u662F\u5426\u5BB6\u88C5</td><td${_scopeId}>EPM_PAYMENT_ALLOT.IS_HOME</td><td${_scopeId}>\u9690\u85CF</td><td${_scopeId}>\u533A\u5206\u5DE5\u7A0B/\u5BB6\u88C5</td><td${_scopeId}>\u9690\u85CF</td><td${_scopeId}>\u5DE5\u7A0B\u4E3A0\uFF0C\u5BB6\u88C5\u4E3A2</td></tr></tbody></table>`);
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
                createVNode("td", null, "\u8BA4\u9886\u5355\u53F7"),
                createVNode("td", null, "EPM_PAYMENT_ALLOT.PAYMENT_ALLOT_CODE"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u8BA4\u9886\u5355\u7F16\u53F7"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u65B0\u5EFA\u65F6\u81EA\u52A8\u751F\u6210\uFF0C\u4E0D\u53EF\u7F16\u8F91")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5230\u6B3E\u8BB0\u5F55\u5355\u53F7"),
                createVNode("td", null, "EPM_PAYMENT_ALLOT.PAYMENT_IMPORT_CODE"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u5173\u8054\u5230\u6B3E\u5F15\u5165\u5355"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u4ECE\u5230\u6B3E\u5F15\u5165\u5355\u5E26\u5165\uFF0C\u4E0D\u53EF\u7F16\u8F91")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5BA2\u6237\u7F16\u7801"),
                createVNode("td", null, "EPM_PAYMENT_ALLOT.CUSTOMER_CODE"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u5BA2\u6237\u7F16\u7801"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u4ECE\u5230\u6B3E\u5F15\u5165\u5355\u5E26\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5BA2\u6237\u540D\u79F0"),
                createVNode("td", null, "EPM_PAYMENT_ALLOT.CUSTOMER_NAME"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u5BA2\u6237\u540D\u79F0"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u4ECE\u5230\u6B3E\u5F15\u5165\u5355\u5E26\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u8BA4\u6B3E\u524D\u53EF\u8BA4\u6B3E\u91D1\u989D"),
                createVNode("td", null, "EPM_PAYMENT_ALLOT.UNALLOT_AMT_BEFORE"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u8BA4\u9886\u524D\u7684\u53EF\u8BA4\u9886\u91D1\u989D"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u4FDD\u5B58\u65F6\u81EA\u52A8\u8BA1\u7B97=\u5230\u6B3E\u5355\u5269\u4F59\u53EF\u8BA4\u9886\u91D1\u989D")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u672C\u6B21\u8BA4\u6B3E\u5408\u8BA1\u91D1\u989D"),
                createVNode("td", null, "EPM_PAYMENT_ALLOT.ALLOT_AMT"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u672C\u6B21\u8BA4\u9886\u91D1\u989D\u5408\u8BA1"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u81EA\u52A8\u8BA1\u7B97=\u5404\u884C\u8BA4\u6B3E\u91D1\u989D\u4E4B\u548C")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u8BA4\u6B3E\u540E\u53EF\u8BA4\u6B3E\u91D1\u989D"),
                createVNode("td", null, "EPM_PAYMENT_ALLOT.UNALLOT_AMT_AFTER"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u8BA4\u9886\u540E\u7684\u53EF\u8BA4\u9886\u91D1\u989D"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u81EA\u52A8\u8BA1\u7B97=\u8BA4\u6B3E\u524D\u53EF\u8BA4\u6B3E\u91D1\u989D-\u672C\u6B21\u8BA4\u6B3E\u5408\u8BA1\u91D1\u989D")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u8BA4\u9886\u65B9\u5F0F"),
                createVNode("td", null, "EPM_PAYMENT_ALLOT.CLAIM_TYPE"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u81EA\u52A8/\u624B\u52A8\u8BA4\u9886"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u624B\u52A8\u4FDD\u5B58\u65F6\u4E3Amanual")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u624B\u5DE5\u53D1\u7968\u8BA4\u9886"),
                createVNode("td", null, "EPM_PAYMENT_ALLOT.MANUAL_INVOICE_CLAIM"),
                createVNode("td", null, "\u5355\u9009\u6846"),
                createVNode("td", null, "\u662F\u5426\u624B\u5DE5\u53D1\u7968\u8BA4\u9886"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "Y/N\uFF0C\u5F71\u54CD\u51FA\u5E93\u660E\u7EC6\u67E5\u8BE2\u903B\u8F91")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5907\u6CE8"),
                createVNode("td", null, "EPM_PAYMENT_ALLOT.REMARK"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u5907\u6CE8"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u53EF\u7F16\u8F91")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u662F\u5426\u5BB6\u88C5"),
                createVNode("td", null, "EPM_PAYMENT_ALLOT.IS_HOME"),
                createVNode("td", null, "\u9690\u85CF"),
                createVNode("td", null, "\u533A\u5206\u5DE5\u7A0B/\u5BB6\u88C5"),
                createVNode("td", null, "\u9690\u85CF"),
                createVNode("td", null, "\u5DE5\u7A0B\u4E3A0\uFF0C\u5BB6\u88C5\u4E3A2")
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, { title: "\u754C\u9762\u6A21\u57573\uFF1A\u8BA4\u9886\u5355\u8BE6\u60C5\u9875\uFF08\u5408\u540C\u884C\u8868\u683C\uFF09" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5B57\u6BB5\u540D</th><th${_scopeId}>\u6570\u636E\u5E93\u5217\u540D</th><th${_scopeId}>\u7EC4\u4EF6</th><th${_scopeId}>\u4E1A\u52A1\u91CA\u4E49</th><th${_scopeId}>\u663E\u9690\u6761\u4EF6</th><th${_scopeId}>\u53D6\u503C/\u8D4B\u503C\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u5408\u540C\u7F16\u7801</td><td${_scopeId}>EPM_PAYMENT_ALLOT_LINE.CONTRACT_CODE</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u5408\u540C\u7F16\u53F7</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u4ECE\u53EF\u8BA4\u9886\u5408\u540C\u5F39\u7A97\u9009\u62E9\u5E26\u5165</td></tr><tr${_scopeId}><td${_scopeId}>\u5408\u540C\u540D\u79F0</td><td${_scopeId}>EPM_PAYMENT_ALLOT_LINE.CONTRACT_NAME</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u5408\u540C\u540D\u79F0</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u4ECE\u53EF\u8BA4\u9886\u5408\u540C\u5F39\u7A97\u9009\u62E9\u5E26\u5165</td></tr><tr${_scopeId}><td${_scopeId}>\u9879\u76EE\u7F16\u7801</td><td${_scopeId}>EPM_PAYMENT_ALLOT_LINE.PROJECT_CODE</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u9879\u76EE\u7F16\u53F7</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u4ECE\u9879\u76EE\u9009\u62E9\u5E26\u5165</td></tr><tr${_scopeId}><td${_scopeId}>\u9879\u76EE\u540D\u79F0</td><td${_scopeId}>EPM_PAYMENT_ALLOT_LINE.PROJECT_NAME</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u9879\u76EE\u540D\u79F0</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u4ECE\u9879\u76EE\u9009\u62E9\u5E26\u5165</td></tr><tr${_scopeId}><td${_scopeId}>\u8BA4\u6B3E\u524D\u5F85\u56DE\u6B3E\u91D1\u989D</td><td${_scopeId}>EPM_PAYMENT_ALLOT_LINE.UNRECEIVE_AMT_BEFORE</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u8BA4\u9886\u524D\u5408\u540C\u5F85\u56DE\u6B3E\u91D1\u989D</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u81EA\u52A8\u5E26\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>\u672C\u6B21\u8BA4\u6B3E\u91D1\u989D</td><td${_scopeId}>EPM_PAYMENT_ALLOT_LINE.ALLOT_AMT</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u672C\u6B21\u8BE5\u5408\u540C\u8BA4\u6B3E\u91D1\u989D</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u53EF\u7F16\u8F91\uFF0C\u9700&gt;0</td></tr><tr${_scopeId}><td${_scopeId}>\u8BA4\u6B3E\u540E\u5F85\u56DE\u6B3E\u91D1\u989D</td><td${_scopeId}>EPM_PAYMENT_ALLOT_LINE.UNRECEIVE_AMT_AFTER</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u8BA4\u9886\u540E\u5408\u540C\u5F85\u56DE\u6B3E\u91D1\u989D</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u81EA\u52A8\u8BA1\u7B97=\u8BA4\u6B3E\u524D-\u672C\u6B21\u8BA4\u6B3E</td></tr><tr${_scopeId}><td${_scopeId}>\u8BA4\u6B3E\u6B3E\u9879</td><td${_scopeId}>EPM_PAYMENT_ALLOT_LINE.PAYMENT_TYPE</td><td${_scopeId}>\u4E0B\u62C9\u9009\u62E9\u6846</td><td${_scopeId}>\u6B3E\u9879\u7C7B\u578B</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u6765\u6E90\u503C\u96C6pem.payment_type</td></tr><tr${_scopeId}><td${_scopeId}>\u8BA4\u9886\u65B9\u5F0F</td><td${_scopeId}>EPM_PAYMENT_ALLOT_LINE.CLAIM_WAY</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u8BA4\u9886\u65B9\u5F0F</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>-</td></tr><tr${_scopeId}><td${_scopeId}>\u8BA4\u9886\u6BD4\u4F8B</td><td${_scopeId}>EPM_PAYMENT_ALLOT_LINE.CLAIM_PERCENT</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u8BA4\u9886\u6BD4\u4F8B</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>-</td></tr><tr${_scopeId}><td${_scopeId}>\u884C\u5907\u6CE8</td><td${_scopeId}>EPM_PAYMENT_ALLOT_LINE.REMARK</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u884C\u5907\u6CE8</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u53EF\u7F16\u8F91</td></tr></tbody></table>`);
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
                createVNode("td", null, "\u5408\u540C\u7F16\u7801"),
                createVNode("td", null, "EPM_PAYMENT_ALLOT_LINE.CONTRACT_CODE"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u5408\u540C\u7F16\u53F7"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u4ECE\u53EF\u8BA4\u9886\u5408\u540C\u5F39\u7A97\u9009\u62E9\u5E26\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5408\u540C\u540D\u79F0"),
                createVNode("td", null, "EPM_PAYMENT_ALLOT_LINE.CONTRACT_NAME"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u5408\u540C\u540D\u79F0"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u4ECE\u53EF\u8BA4\u9886\u5408\u540C\u5F39\u7A97\u9009\u62E9\u5E26\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u9879\u76EE\u7F16\u7801"),
                createVNode("td", null, "EPM_PAYMENT_ALLOT_LINE.PROJECT_CODE"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u9879\u76EE\u7F16\u53F7"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u4ECE\u9879\u76EE\u9009\u62E9\u5E26\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u9879\u76EE\u540D\u79F0"),
                createVNode("td", null, "EPM_PAYMENT_ALLOT_LINE.PROJECT_NAME"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u9879\u76EE\u540D\u79F0"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u4ECE\u9879\u76EE\u9009\u62E9\u5E26\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u8BA4\u6B3E\u524D\u5F85\u56DE\u6B3E\u91D1\u989D"),
                createVNode("td", null, "EPM_PAYMENT_ALLOT_LINE.UNRECEIVE_AMT_BEFORE"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u8BA4\u9886\u524D\u5408\u540C\u5F85\u56DE\u6B3E\u91D1\u989D"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u81EA\u52A8\u5E26\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u672C\u6B21\u8BA4\u6B3E\u91D1\u989D"),
                createVNode("td", null, "EPM_PAYMENT_ALLOT_LINE.ALLOT_AMT"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u672C\u6B21\u8BE5\u5408\u540C\u8BA4\u6B3E\u91D1\u989D"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u53EF\u7F16\u8F91\uFF0C\u9700>0")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u8BA4\u6B3E\u540E\u5F85\u56DE\u6B3E\u91D1\u989D"),
                createVNode("td", null, "EPM_PAYMENT_ALLOT_LINE.UNRECEIVE_AMT_AFTER"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u8BA4\u9886\u540E\u5408\u540C\u5F85\u56DE\u6B3E\u91D1\u989D"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u81EA\u52A8\u8BA1\u7B97=\u8BA4\u6B3E\u524D-\u672C\u6B21\u8BA4\u6B3E")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u8BA4\u6B3E\u6B3E\u9879"),
                createVNode("td", null, "EPM_PAYMENT_ALLOT_LINE.PAYMENT_TYPE"),
                createVNode("td", null, "\u4E0B\u62C9\u9009\u62E9\u6846"),
                createVNode("td", null, "\u6B3E\u9879\u7C7B\u578B"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u6765\u6E90\u503C\u96C6pem.payment_type")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u8BA4\u9886\u65B9\u5F0F"),
                createVNode("td", null, "EPM_PAYMENT_ALLOT_LINE.CLAIM_WAY"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u8BA4\u9886\u65B9\u5F0F"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "-")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u8BA4\u9886\u6BD4\u4F8B"),
                createVNode("td", null, "EPM_PAYMENT_ALLOT_LINE.CLAIM_PERCENT"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u8BA4\u9886\u6BD4\u4F8B"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "-")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u884C\u5907\u6CE8"),
                createVNode("td", null, "EPM_PAYMENT_ALLOT_LINE.REMARK"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u884C\u5907\u6CE8"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u53EF\u7F16\u8F91")
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, { title: "\u754C\u9762\u6A21\u57574\uFF1A\u8BA4\u9886\u5355\u8BE6\u60C5\u9875\uFF08\u51FA\u5E93\u660E\u7EC6\u884C\u8868\u683C\uFF09" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5B57\u6BB5\u540D</th><th${_scopeId}>\u6570\u636E\u5E93\u5217\u540D</th><th${_scopeId}>\u7EC4\u4EF6</th><th${_scopeId}>\u4E1A\u52A1\u91CA\u4E49</th><th${_scopeId}>\u663E\u9690\u6761\u4EF6</th><th${_scopeId}>\u53D6\u503C/\u8D4B\u503C\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u7B7E\u6536\u660E\u7EC6ID</td><td${_scopeId}>EPM_PAYMENT_ALLOT_DETAIL.SOURCE_ID</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u7B7E\u6536\u660E\u7EC6ID</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u4ECE\u51FA\u5E93\u660E\u7EC6\u9009\u62E9\u5E26\u5165</td></tr><tr${_scopeId}><td${_scopeId}>ERP\u51FA\u5E93\u5355\u660E\u7EC6ID</td><td${_scopeId}>EPM_PAYMENT_ALLOT_DETAIL.LINE_NUMBER</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>ERP\u51FA\u5E93\u5355\u660E\u7EC6\u884CID</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u4ECE\u51FA\u5E93\u660E\u7EC6\u9009\u62E9\u5E26\u5165</td></tr><tr${_scopeId}><td${_scopeId}>\u6570\u636E\u6765\u6E90</td><td${_scopeId}>EPM_PAYMENT_ALLOT_DETAIL.SOURCE_TYPE</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u6570\u636E\u6765\u6E90\u7C7B\u578B</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>-</td></tr><tr${_scopeId}><td${_scopeId}>\u672C\u6B21\u8BA4\u6B3E\u91D1\u989D</td><td${_scopeId}>EPM_PAYMENT_ALLOT_DETAIL.CLAIM_AMT</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u672C\u6B21\u8BE5\u660E\u7EC6\u8BA4\u6B3E\u91D1\u989D</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u53EF\u7F16\u8F91\uFF0C\u9700&gt;0\u4E14\u4E0D\u8D85\u8FC7\u5269\u4F59\u53EF\u8BA4\u9886\u91D1\u989D</td></tr><tr${_scopeId}><td${_scopeId}>\u8FD8\u6B3E\u91D1\u989D</td><td${_scopeId}>EPM_PAYMENT_ALLOT_DETAIL.RETURN_AMT</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u7ECF\u9500\u5546\u56DE\u6B3E\u91D1\u989D</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u81EA\u52A8\u8BA1\u7B97=\uFF08\u7ECF\u9500\u5546\u91D1\u989D/\u5DE5\u7A0B\u65B9\u91D1\u989D\uFF09\xD7\u672C\u6B21\u8BA4\u9886\u91D1\u989D</td></tr><tr${_scopeId}><td${_scopeId}>\u8BA4\u6B3E\u6BD4\u4F8B</td><td${_scopeId}>EPM_PAYMENT_ALLOT_DETAIL.CLAIM_PERCENT</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u8BA4\u9886\u6BD4\u4F8B</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>-</td></tr><tr${_scopeId}><td${_scopeId}>\u80FD\u5426\u5151\u73B0</td><td${_scopeId}>EPM_PAYMENT_ALLOT_DETAIL.ALLOW_CASH_FLAG</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u662F\u5426\u53EF\u5151\u73B0</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u5546\u7968/\u94F6\u7968\u672A\u5151\u4ED8\u65F6\u4E3AN\uFF0C\u5426\u5219\u4E3AY</td></tr><tr${_scopeId}><td${_scopeId}>\u672C\u6B21\u8BA4\u9886\u5DE5\u7A0B\u670D\u52A1\u8D39</td><td${_scopeId}>EPM_PAYMENT_ALLOT_DETAIL.CLAIM_SERVICE_AMT</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u672C\u6B21\u8BA4\u9886\u7684\u5DE5\u7A0B\u670D\u52A1\u8D39\u91D1\u989D</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u53EF\u7F16\u8F91</td></tr></tbody></table>`);
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
                createVNode("td", null, "\u7B7E\u6536\u660E\u7EC6ID"),
                createVNode("td", null, "EPM_PAYMENT_ALLOT_DETAIL.SOURCE_ID"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u7B7E\u6536\u660E\u7EC6ID"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u4ECE\u51FA\u5E93\u660E\u7EC6\u9009\u62E9\u5E26\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "ERP\u51FA\u5E93\u5355\u660E\u7EC6ID"),
                createVNode("td", null, "EPM_PAYMENT_ALLOT_DETAIL.LINE_NUMBER"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "ERP\u51FA\u5E93\u5355\u660E\u7EC6\u884CID"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u4ECE\u51FA\u5E93\u660E\u7EC6\u9009\u62E9\u5E26\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6570\u636E\u6765\u6E90"),
                createVNode("td", null, "EPM_PAYMENT_ALLOT_DETAIL.SOURCE_TYPE"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u6570\u636E\u6765\u6E90\u7C7B\u578B"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "-")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u672C\u6B21\u8BA4\u6B3E\u91D1\u989D"),
                createVNode("td", null, "EPM_PAYMENT_ALLOT_DETAIL.CLAIM_AMT"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u672C\u6B21\u8BE5\u660E\u7EC6\u8BA4\u6B3E\u91D1\u989D"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u53EF\u7F16\u8F91\uFF0C\u9700>0\u4E14\u4E0D\u8D85\u8FC7\u5269\u4F59\u53EF\u8BA4\u9886\u91D1\u989D")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u8FD8\u6B3E\u91D1\u989D"),
                createVNode("td", null, "EPM_PAYMENT_ALLOT_DETAIL.RETURN_AMT"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u7ECF\u9500\u5546\u56DE\u6B3E\u91D1\u989D"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u81EA\u52A8\u8BA1\u7B97=\uFF08\u7ECF\u9500\u5546\u91D1\u989D/\u5DE5\u7A0B\u65B9\u91D1\u989D\uFF09\xD7\u672C\u6B21\u8BA4\u9886\u91D1\u989D")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u8BA4\u6B3E\u6BD4\u4F8B"),
                createVNode("td", null, "EPM_PAYMENT_ALLOT_DETAIL.CLAIM_PERCENT"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u8BA4\u9886\u6BD4\u4F8B"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "-")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u80FD\u5426\u5151\u73B0"),
                createVNode("td", null, "EPM_PAYMENT_ALLOT_DETAIL.ALLOW_CASH_FLAG"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u662F\u5426\u53EF\u5151\u73B0"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u5546\u7968/\u94F6\u7968\u672A\u5151\u4ED8\u65F6\u4E3AN\uFF0C\u5426\u5219\u4E3AY")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u672C\u6B21\u8BA4\u9886\u5DE5\u7A0B\u670D\u52A1\u8D39"),
                createVNode("td", null, "EPM_PAYMENT_ALLOT_DETAIL.CLAIM_SERVICE_AMT"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u672C\u6B21\u8BA4\u9886\u7684\u5DE5\u7A0B\u670D\u52A1\u8D39\u91D1\u989D"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u53EF\u7F16\u8F91")
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
        _push2(`<h4${_scopeId}>\u5F39\u7A971\uFF1A\u53EF\u8BA4\u9886\u9879\u76EE\u9009\u62E9\u5F39\u7A97\uFF08\u5355\u9009\uFF09</h4><table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5165\u53C2</th><th${_scopeId}></th><th${_scopeId}></th><th${_scopeId}></th><th${_scopeId}>\u6570\u636E\u8303\u56F4</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u5B57\u6BB5\u540D</td><td${_scopeId}>\u4E2D\u6587\u540D</td><td${_scopeId}>\u91CA\u4E49</td><td${_scopeId}>\u793A\u4F8B</td><td${_scopeId}></td></tr><tr${_scopeId}><td${_scopeId}>customerId</td><td${_scopeId}>\u5BA2\u6237ID</td><td${_scopeId}>\u5230\u6B3E\u5355\u5BF9\u5E94\u7684\u5BA2\u6237</td><td${_scopeId}>12345</td><td${_scopeId}>\u540C\u5BA2\u6237\u3001\u540C\u4EA4\u6613\u516C\u53F8\u3001\u540C\u6536\u6B3E\u516C\u53F8\u4E14\u6709\u672A\u8BA4\u9886\u91D1\u989D\u7684\u9879\u76EE</td></tr><tr${_scopeId}><td${_scopeId}>receiveUnitId</td><td${_scopeId}>\u4EA4\u6613\u516C\u53F8ID</td><td${_scopeId}>\u5230\u6B3E\u5355\u7684\u4EA4\u6613\u516C\u53F8</td><td${_scopeId}>100</td><td${_scopeId}></td></tr><tr${_scopeId}><td${_scopeId}>remitUnitId</td><td${_scopeId}>\u6536\u6B3E\u516C\u53F8ID</td><td${_scopeId}>\u5230\u6B3E\u5355\u7684\u6536\u6B3E\u516C\u53F8</td><td${_scopeId}>200</td><td${_scopeId}></td></tr><tr${_scopeId}><td${_scopeId}>paymentAllotId</td><td${_scopeId}>\u8BA4\u9886\u5355ID</td><td${_scopeId}>\u5F53\u524D\u8BA4\u9886\u5355ID\uFF08\u7F16\u8F91\u65F6\u6392\u9664\u5DF2\u9009\uFF09</td><td${_scopeId}>0</td><td${_scopeId}></td></tr></tbody></table><blockquote${_scopeId}>\u67E5\u8BE2SQL\uFF08\u540E\u7AEF\u63A5\u53E3Mapper\uFF1AEpmPaymentAllotDetailRepository.queryCanAllotProject\uFF09\uFF1A</blockquote><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT DISTINCT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> p.project_id, p.project_code, p.project_name</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> epm_project p</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>JOIN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> epm_project_contract pc </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ON</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> p.project_id </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> pc.project_id</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> pc.customer_id </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> #{customerId}</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> pc.trading_company_id </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> #{receiveUnitId}</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> pc.billing_unit_id </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> #{remitUnitId}</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> pc.contract_type </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>1</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (pc.hz_approve_status </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>APPROVED</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>OR</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> pc.stat </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>7</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>)</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u5F39\u7A972\uFF1A\u53EF\u8BA4\u9886\u5408\u540C\u9009\u62E9\u5F39\u7A97\uFF08\u5355\u9009\uFF09</h4><table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5165\u53C2</th><th${_scopeId}></th><th${_scopeId}></th><th${_scopeId}></th><th${_scopeId}>\u6570\u636E\u8303\u56F4</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u5B57\u6BB5\u540D</td><td${_scopeId}>\u4E2D\u6587\u540D</td><td${_scopeId}>\u91CA\u4E49</td><td${_scopeId}>\u793A\u4F8B</td><td${_scopeId}></td></tr><tr${_scopeId}><td${_scopeId}>projectId</td><td${_scopeId}>\u9879\u76EEID</td><td${_scopeId}>\u9009\u5B9A\u7684\u9879\u76EE</td><td${_scopeId}>67890</td><td${_scopeId}>\u8BE5\u9879\u76EE\u4E0B\u5DF2\u5BA1\u6279\u901A\u8FC7\u4E14\u6709\u672A\u8BA4\u9886\u91D1\u989D\u7684\u5408\u540C</td></tr><tr${_scopeId}><td${_scopeId}>customerId</td><td${_scopeId}>\u5BA2\u6237ID</td><td${_scopeId}>\u5BA2\u6237ID</td><td${_scopeId}>12345</td><td${_scopeId}></td></tr><tr${_scopeId}><td${_scopeId}>paymentAllotId</td><td${_scopeId}>\u8BA4\u9886\u5355ID</td><td${_scopeId}>\u5F53\u524D\u8BA4\u9886\u5355ID</td><td${_scopeId}>0</td><td${_scopeId}></td></tr></tbody></table><blockquote${_scopeId}>\u67E5\u8BE2SQL\uFF08\u540E\u7AEF\u63A5\u53E3Mapper\uFF1AEpmPaymentAllotDetailRepository.queryCanAllotContract\uFF09\uFF1A</blockquote><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> pc.contract_id, pc.contract_code, pc.contract_name,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>       pc.contract_amount, pc.contract_amt_received</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> epm_project_contract pc</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> pc.project_id </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> #{projectId}</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> pc.contract_type </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>1</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> pc.hz_approve_status </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>APPROVED</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u5F39\u7A973\uFF1A\u53EF\u8BA4\u9886\u51FA\u5E93\u660E\u7EC6\u9009\u62E9\u5F39\u7A97\uFF08\u591A\u9009\uFF09</h4><table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5165\u53C2</th><th${_scopeId}></th><th${_scopeId}></th><th${_scopeId}></th><th${_scopeId}>\u6570\u636E\u8303\u56F4</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u5B57\u6BB5\u540D</td><td${_scopeId}>\u4E2D\u6587\u540D</td><td${_scopeId}>\u91CA\u4E49</td><td${_scopeId}>\u793A\u4F8B</td><td${_scopeId}></td></tr><tr${_scopeId}><td${_scopeId}>projectId</td><td${_scopeId}>\u9879\u76EEID</td><td${_scopeId}>\u9879\u76EEID</td><td${_scopeId}>67890</td><td${_scopeId}>\u8BE5\u9879\u76EE\u4E0B\u5408\u540C\u5BF9\u5E94\u7684\u51FA\u5E93\u7B7E\u6536\u660E\u7EC6\uFF0C\u4E14\u6709\u672A\u8BA4\u9886\u91D1\u989D</td></tr><tr${_scopeId}><td${_scopeId}>contractIds</td><td${_scopeId}>\u5408\u540CID\u5217\u8868</td><td${_scopeId}>\u9009\u5B9A\u7684\u5408\u540CID</td><td${_scopeId}>[101,102]</td><td${_scopeId}></td></tr><tr${_scopeId}><td${_scopeId}>manualInvoiceClaim</td><td${_scopeId}>\u624B\u5DE5\u53D1\u7968\u8BA4\u9886</td><td${_scopeId}>Y/N</td><td${_scopeId}>N</td><td${_scopeId}>Y\u8D70selectDetailsByProject\uFF0CN\u8D70selectDetailsByProjectTwo</td></tr><tr${_scopeId}><td${_scopeId}>paymentAllotId</td><td${_scopeId}>\u8BA4\u9886\u5355ID</td><td${_scopeId}>\u5F53\u524D\u8BA4\u9886\u5355ID</td><td${_scopeId}>0</td><td${_scopeId}></td></tr></tbody></table><blockquote${_scopeId}>\u67E5\u8BE2SQL\uFF08\u540E\u7AEF\u63A5\u53E3Mapper\uFF1AEpmPaymentAllotDetailRepository.selectDetailsByProject / selectDetailsByProjectTwo\uFF09\uFF1A</blockquote><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> d.delivery_line_id, d.inv_bill_no, d.item_code, d.contract_amount,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>       d.dealer_amount, d.total_claim_amt, d.total_return_amt</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> epm_delivery_detail d</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> d.project_id </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> #{projectId}</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> d.contract_id </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (#{contractIds})</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> d.total_claim_amt </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&lt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> d.contract_amount</span></span>
<span class="line"${_scopeId}></span></code></pre></div>`);
      } else {
        return [
          createVNode("h4", null, "\u5F39\u7A971\uFF1A\u53EF\u8BA4\u9886\u9879\u76EE\u9009\u62E9\u5F39\u7A97\uFF08\u5355\u9009\uFF09"),
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
                createVNode("td", null, "customerId"),
                createVNode("td", null, "\u5BA2\u6237ID"),
                createVNode("td", null, "\u5230\u6B3E\u5355\u5BF9\u5E94\u7684\u5BA2\u6237"),
                createVNode("td", null, "12345"),
                createVNode("td", null, "\u540C\u5BA2\u6237\u3001\u540C\u4EA4\u6613\u516C\u53F8\u3001\u540C\u6536\u6B3E\u516C\u53F8\u4E14\u6709\u672A\u8BA4\u9886\u91D1\u989D\u7684\u9879\u76EE")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "receiveUnitId"),
                createVNode("td", null, "\u4EA4\u6613\u516C\u53F8ID"),
                createVNode("td", null, "\u5230\u6B3E\u5355\u7684\u4EA4\u6613\u516C\u53F8"),
                createVNode("td", null, "100"),
                createVNode("td")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "remitUnitId"),
                createVNode("td", null, "\u6536\u6B3E\u516C\u53F8ID"),
                createVNode("td", null, "\u5230\u6B3E\u5355\u7684\u6536\u6B3E\u516C\u53F8"),
                createVNode("td", null, "200"),
                createVNode("td")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "paymentAllotId"),
                createVNode("td", null, "\u8BA4\u9886\u5355ID"),
                createVNode("td", null, "\u5F53\u524D\u8BA4\u9886\u5355ID\uFF08\u7F16\u8F91\u65F6\u6392\u9664\u5DF2\u9009\uFF09"),
                createVNode("td", null, "0"),
                createVNode("td")
              ])
            ])
          ]),
          createVNode("blockquote", null, "\u67E5\u8BE2SQL\uFF08\u540E\u7AEF\u63A5\u53E3Mapper\uFF1AEpmPaymentAllotDetailRepository.queryCanAllotProject\uFF09\uFF1A"),
          createVNode("div", { class: "language-sql" }, [
            createVNode("button", {
              title: "Copy Code",
              class: "copy"
            }),
            createVNode("span", { class: "lang" }, "sql"),
            createVNode("pre", { class: "shiki" }, [
              createVNode("code", null, [
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "SELECT DISTINCT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " p.project_id, p.project_code, p.project_name")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " epm_project p")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "JOIN"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " epm_project_contract pc "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ON"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " p.project_id "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " pc.project_id")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " pc.customer_id "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " #{customerId}")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " pc.trading_company_id "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " #{receiveUnitId}")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " pc.billing_unit_id "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " #{remitUnitId}")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " pc.contract_type "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "1")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " (pc.hz_approve_status "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "APPROVED"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "OR"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " pc.stat "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "7"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ")")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u5F39\u7A972\uFF1A\u53EF\u8BA4\u9886\u5408\u540C\u9009\u62E9\u5F39\u7A97\uFF08\u5355\u9009\uFF09"),
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
                createVNode("td", null, "\u9009\u5B9A\u7684\u9879\u76EE"),
                createVNode("td", null, "67890"),
                createVNode("td", null, "\u8BE5\u9879\u76EE\u4E0B\u5DF2\u5BA1\u6279\u901A\u8FC7\u4E14\u6709\u672A\u8BA4\u9886\u91D1\u989D\u7684\u5408\u540C")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "customerId"),
                createVNode("td", null, "\u5BA2\u6237ID"),
                createVNode("td", null, "\u5BA2\u6237ID"),
                createVNode("td", null, "12345"),
                createVNode("td")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "paymentAllotId"),
                createVNode("td", null, "\u8BA4\u9886\u5355ID"),
                createVNode("td", null, "\u5F53\u524D\u8BA4\u9886\u5355ID"),
                createVNode("td", null, "0"),
                createVNode("td")
              ])
            ])
          ]),
          createVNode("blockquote", null, "\u67E5\u8BE2SQL\uFF08\u540E\u7AEF\u63A5\u53E3Mapper\uFF1AEpmPaymentAllotDetailRepository.queryCanAllotContract\uFF09\uFF1A"),
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " pc.contract_id, pc.contract_code, pc.contract_name,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "       pc.contract_amount, pc.contract_amt_received")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " epm_project_contract pc")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " pc.project_id "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " #{projectId}")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " pc.contract_type "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "1")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " pc.hz_approve_status "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "APPROVED"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u5F39\u7A973\uFF1A\u53EF\u8BA4\u9886\u51FA\u5E93\u660E\u7EC6\u9009\u62E9\u5F39\u7A97\uFF08\u591A\u9009\uFF09"),
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
                createVNode("td", null, "\u8BE5\u9879\u76EE\u4E0B\u5408\u540C\u5BF9\u5E94\u7684\u51FA\u5E93\u7B7E\u6536\u660E\u7EC6\uFF0C\u4E14\u6709\u672A\u8BA4\u9886\u91D1\u989D")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "contractIds"),
                createVNode("td", null, "\u5408\u540CID\u5217\u8868"),
                createVNode("td", null, "\u9009\u5B9A\u7684\u5408\u540CID"),
                createVNode("td", null, "[101,102]"),
                createVNode("td")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "manualInvoiceClaim"),
                createVNode("td", null, "\u624B\u5DE5\u53D1\u7968\u8BA4\u9886"),
                createVNode("td", null, "Y/N"),
                createVNode("td", null, "N"),
                createVNode("td", null, "Y\u8D70selectDetailsByProject\uFF0CN\u8D70selectDetailsByProjectTwo")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "paymentAllotId"),
                createVNode("td", null, "\u8BA4\u9886\u5355ID"),
                createVNode("td", null, "\u5F53\u524D\u8BA4\u9886\u5355ID"),
                createVNode("td", null, "0"),
                createVNode("td")
              ])
            ])
          ]),
          createVNode("blockquote", null, "\u67E5\u8BE2SQL\uFF08\u540E\u7AEF\u63A5\u53E3Mapper\uFF1AEpmPaymentAllotDetailRepository.selectDetailsByProject / selectDetailsByProjectTwo\uFF09\uFF1A"),
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " d.delivery_line_id, d.inv_bill_no, d.item_code, d.contract_amount,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "       d.dealer_amount, d.total_claim_amt, d.total_return_amt")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " epm_delivery_detail d")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " d.project_id "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " #{projectId}")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " d.contract_id "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IN"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " (#{contractIds})")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " d.total_claim_amt "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " d.contract_amount")
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
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u6309\u94AE\u540D\u79F0</th><th${_scopeId}>\u6309\u94AE\u4F5C\u7528</th><th${_scopeId}>\u6240\u5728\u4F4D\u7F6E</th><th${_scopeId}>\u663E\u9690\u6761\u4EF6/\u53EF\u70B9\u51FB\u6761\u4EF6</th><th${_scopeId}>\u5F71\u54CD</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u65B0\u5EFA</td><td${_scopeId}>\u65B0\u5EFA\u8BA4\u9886\u5355</td><td${_scopeId}>\u5217\u8868\u9875</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u8DF3\u8F6C\u65B0\u5EFA\u9875\u9762</td></tr><tr${_scopeId}><td${_scopeId}>\u4FDD\u5B58</td><td${_scopeId}>\u4FDD\u5B58\u8BA4\u9886\u5355</td><td${_scopeId}>\u8BE6\u60C5\u9875</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u8C03\u7528saveAllot/updateAllot\u63A5\u53E3</td></tr><tr${_scopeId}><td${_scopeId}>\u63D0\u4EA4</td><td${_scopeId}>\u63D0\u4EA4\u5BA1\u6279</td><td${_scopeId}>\u8BE6\u60C5\u9875</td><td${_scopeId}>\u5BA1\u6279\u72B6\u6001\u4E3ANEW\u6216INTERRUPT</td><td${_scopeId}>\u53D1\u8D77\u5DE5\u4F5C\u6D41\uFF0C\u63A8\u9001ERP SUBMIT</td></tr><tr${_scopeId}><td${_scopeId}>\u5220\u9664</td><td${_scopeId}>\u5220\u9664\u8BA4\u9886\u5355</td><td${_scopeId}>\u8BE6\u60C5\u9875</td><td${_scopeId}>\u5BA1\u6279\u72B6\u6001\u4E3ANEW\u6216INTERRUPT</td><td${_scopeId}>\u7EA7\u8054\u5220\u9664\u5934\u884C\u660E\u7EC6\uFF0C\u56DE\u52A0\u53EF\u8BA4\u9886\u91D1\u989D</td></tr><tr${_scopeId}><td${_scopeId}>\u5BFC\u51FA</td><td${_scopeId}>\u5BFC\u51FA\u5217\u8868</td><td${_scopeId}>\u5217\u8868\u9875</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u8C03\u7528\u5BFC\u51FA\u63A5\u53E3</td></tr><tr${_scopeId}><td${_scopeId}>\u67E5\u8BE2\u5408\u540C\u8BA4\u7F34\u91D1\u989D</td><td${_scopeId}>\u67E5\u8BE2\u5408\u540C\u5DF2\u56DE\u6B3E\u91D1\u989D</td><td${_scopeId}>\u8BE6\u60C5\u9875</td><td${_scopeId}>\u5DF2\u9009\u5408\u540C</td><td${_scopeId}>\u8C03\u7528selectContractAmt\u63A5\u53E3</td></tr></tbody></table><h4${_scopeId}>\u6309\u94AE1\uFF1A\u63D0\u4EA4\uFF08\u8BE6\u60C5\u9875\uFF09</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u5BA1\u6279\u72B6\u6001\u4E3ANEW\u6216INTERRUPT</li><li${_scopeId}><strong${_scopeId}>\u6267\u884C\u903B\u8F91</strong>\uFF1A</li><li${_scopeId}>\u7B2C1\u70B9\uFF1A\u6821\u9A8C\u5230\u6B3E\u5355\u72B6\u6001\u662F\u5426\u5141\u8BB8\u8BA4\u9886\uFF08verifyImportStat\uFF09</li><li${_scopeId}>\u7B2C2\u70B9\uFF1A\u6821\u9A8C\u672C\u6B21\u8BA4\u9886\u91D1\u989D\u4E0D\u8D85\u8FC7\u5230\u6B3E\u5355\u5269\u4F59\u53EF\u8BA4\u9886\u91D1\u989D\uFF08\u865A\u62DF\u5355\u67E5DB\uFF0C\u771F\u5B9E\u5355\u67E5ERP\uFF09</li><li${_scopeId}>\u7B2C3\u70B9\uFF1A\u63A8\u9001ERP\u6838\u9500\u6570\u636E\uFF0C\u72B6\u6001\u4E3ASUBMIT</li><li${_scopeId}>\u7B2C4\u70B9\uFF1A\u53D1\u8D77\u5DE5\u4F5C\u6D41\uFF0C\u6309\u533A\u57DF\u9009\u62E9\u5BF9\u5E94\u6D41\u7A0BKey</li><li${_scopeId}>\u7B2C5\u70B9\uFF1A\u66F4\u65B0\u5BA1\u6279\u72B6\u6001\u4E3ARUN\uFF0C\u8BB0\u5F55\u5DE5\u4F5C\u6D41\u5B9E\u4F8BID</li><li${_scopeId}><strong${_scopeId}>\u63A5\u53E3\u8C03\u7528</strong>\uFF1APOST /v1/{organizationId}/epmPaymentAllot/wfProcSubmit</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> payment_allot_id, payment_allot_code, payment_allot_stat, hz_approve_status, hz_instance_id</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> epm_payment_allot </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> payment_allot_id </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> {id}</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u6309\u94AE2\uFF1A\u5220\u9664\uFF08\u8BE6\u60C5\u9875\uFF09</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u5BA1\u6279\u72B6\u6001\u4E3ANEW\u6216INTERRUPT</li><li${_scopeId}><strong${_scopeId}>\u6267\u884C\u903B\u8F91</strong>\uFF1A</li><li${_scopeId}>\u7B2C1\u70B9\uFF1A\u6821\u9A8C\u5BA1\u6279\u72B6\u6001\u5FC5\u987B\u4E3ANEW\u6216INTERRUPT\uFF0C\u5426\u5219\u62A5\u9519</li><li${_scopeId}>\u7B2C2\u70B9\uFF1A\u7EA7\u8054\u5220\u9664\u5408\u540C\u884C\uFF08EPM_PAYMENT_ALLOT_LINE\uFF09\u548C\u51FA\u5E93\u660E\u7EC6\u884C\uFF08EPM_PAYMENT_ALLOT_DETAIL\uFF09</li><li${_scopeId}>\u7B2C3\u70B9\uFF1A\u5220\u9664\u8BA4\u9886\u5934\uFF08EPM_PAYMENT_ALLOT\uFF09</li><li${_scopeId}>\u7B2C4\u70B9\uFF1A\u66F4\u65B0\u5230\u6B3E\u5F15\u5165\u5355\u53EF\u8BA4\u9886\u91D1\u989D\uFF08\u865A\u62DF\u5355\u67E5DB\u8BA1\u7B97\uFF0C\u771F\u5B9E\u5355\u67E5ERP\u5B9E\u65F6\u6570\u636E\uFF09</li><li${_scopeId}><strong${_scopeId}>\u63A5\u53E3\u8C03\u7528</strong>\uFF1APOST /v1/{organizationId}/epmPaymentAllot/deleteAllot</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>*</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> epm_payment_allot </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> payment_allot_id </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> {id};</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>*</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> epm_payment_allot_line </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> payment_allot_id </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> {id};</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>*</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> epm_payment_allot_detail d </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>JOIN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> epm_payment_allot_line l </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ON</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> d.payment_allot_line_id </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> l.payment_allot_line_id </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> l.payment_allot_id </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> {id};</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u6309\u94AE3\uFF1A\u5BFC\u51FA\uFF08\u5217\u8868\u9875\uFF09</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u5E38\u663E</li><li${_scopeId}><strong${_scopeId}>\u6267\u884C\u903B\u8F91</strong>\uFF1A</li><li${_scopeId}>\u7B2C1\u70B9\uFF1A\u6309\u5F53\u524D\u67E5\u8BE2\u6761\u4EF6\u5BFC\u51FA\u8BA4\u9886\u5355\u5217\u8868\u6570\u636E</li><li${_scopeId}>\u7B2C2\u70B9\uFF1A\u5BFC\u51FA\u5B57\u6BB5\u5305\u62EC\u8BA4\u9886\u5355\u53F7\u3001\u5230\u6B3E\u5355\u53F7\u3001\u5BA2\u6237\u3001\u8BA4\u6B3E\u91D1\u989D\u3001\u72B6\u6001\u7B49</li><li${_scopeId}><strong${_scopeId}>\u63A5\u53E3\u8C03\u7528</strong>\uFF1AGET /v1/{organizationId}/epmPaymentAllot/list/export</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A\u65E0</li></ul><h4${_scopeId}>\u6309\u94AE4\uFF1A\u67E5\u8BE2\u5408\u540C\u8BA4\u7F34\u91D1\u989D\uFF08\u8BE6\u60C5\u9875\uFF09</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u5DF2\u9009\u62E9\u5408\u540C</li><li${_scopeId}><strong${_scopeId}>\u6267\u884C\u903B\u8F91</strong>\uFF1A</li><li${_scopeId}>\u7B2C1\u70B9\uFF1A\u67E5\u8BE2\u5408\u540C\u5DF2\u56DE\u6B3E\u603B\u91D1\u989D\uFF08contractAmtReceived\uFF09</li><li${_scopeId}>\u7B2C2\u70B9\uFF1A\u67E5\u8BE2\u5408\u540C\u53D1\u8D27\u603B\u91D1\u989D\uFF08contractAmt\uFF09</li><li${_scopeId}>\u7B2C3\u70B9\uFF1A\u8FD4\u56DE\u5408\u540C\u91D1\u989D\u4FE1\u606F\u4F9B\u524D\u7AEF\u5C55\u793A</li><li${_scopeId}><strong${_scopeId}>\u63A5\u53E3\u8C03\u7528</strong>\uFF1APOST /v1/{organizationId}/epmPaymentAllot/select-contract-amt</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> contract_id, contract_code, contract_amount, contract_amt_received </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> epm_project_contract </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> contract_id </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> ({contractIds});</span></span>
<span class="line"${_scopeId}></span></code></pre></div>`);
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
                createVNode("td", null, "\u65B0\u5EFA\u8BA4\u9886\u5355"),
                createVNode("td", null, "\u5217\u8868\u9875"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u8DF3\u8F6C\u65B0\u5EFA\u9875\u9762")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u4FDD\u5B58"),
                createVNode("td", null, "\u4FDD\u5B58\u8BA4\u9886\u5355"),
                createVNode("td", null, "\u8BE6\u60C5\u9875"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u8C03\u7528saveAllot/updateAllot\u63A5\u53E3")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u63D0\u4EA4"),
                createVNode("td", null, "\u63D0\u4EA4\u5BA1\u6279"),
                createVNode("td", null, "\u8BE6\u60C5\u9875"),
                createVNode("td", null, "\u5BA1\u6279\u72B6\u6001\u4E3ANEW\u6216INTERRUPT"),
                createVNode("td", null, "\u53D1\u8D77\u5DE5\u4F5C\u6D41\uFF0C\u63A8\u9001ERP SUBMIT")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5220\u9664"),
                createVNode("td", null, "\u5220\u9664\u8BA4\u9886\u5355"),
                createVNode("td", null, "\u8BE6\u60C5\u9875"),
                createVNode("td", null, "\u5BA1\u6279\u72B6\u6001\u4E3ANEW\u6216INTERRUPT"),
                createVNode("td", null, "\u7EA7\u8054\u5220\u9664\u5934\u884C\u660E\u7EC6\uFF0C\u56DE\u52A0\u53EF\u8BA4\u9886\u91D1\u989D")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5BFC\u51FA"),
                createVNode("td", null, "\u5BFC\u51FA\u5217\u8868"),
                createVNode("td", null, "\u5217\u8868\u9875"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u8C03\u7528\u5BFC\u51FA\u63A5\u53E3")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u67E5\u8BE2\u5408\u540C\u8BA4\u7F34\u91D1\u989D"),
                createVNode("td", null, "\u67E5\u8BE2\u5408\u540C\u5DF2\u56DE\u6B3E\u91D1\u989D"),
                createVNode("td", null, "\u8BE6\u60C5\u9875"),
                createVNode("td", null, "\u5DF2\u9009\u5408\u540C"),
                createVNode("td", null, "\u8C03\u7528selectContractAmt\u63A5\u53E3")
              ])
            ])
          ]),
          createVNode("h4", null, "\u6309\u94AE1\uFF1A\u63D0\u4EA4\uFF08\u8BE6\u60C5\u9875\uFF09"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u5BA1\u6279\u72B6\u6001\u4E3ANEW\u6216INTERRUPT")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u6267\u884C\u903B\u8F91"),
              createTextVNode("\uFF1A")
            ]),
            createVNode("li", null, "\u7B2C1\u70B9\uFF1A\u6821\u9A8C\u5230\u6B3E\u5355\u72B6\u6001\u662F\u5426\u5141\u8BB8\u8BA4\u9886\uFF08verifyImportStat\uFF09"),
            createVNode("li", null, "\u7B2C2\u70B9\uFF1A\u6821\u9A8C\u672C\u6B21\u8BA4\u9886\u91D1\u989D\u4E0D\u8D85\u8FC7\u5230\u6B3E\u5355\u5269\u4F59\u53EF\u8BA4\u9886\u91D1\u989D\uFF08\u865A\u62DF\u5355\u67E5DB\uFF0C\u771F\u5B9E\u5355\u67E5ERP\uFF09"),
            createVNode("li", null, "\u7B2C3\u70B9\uFF1A\u63A8\u9001ERP\u6838\u9500\u6570\u636E\uFF0C\u72B6\u6001\u4E3ASUBMIT"),
            createVNode("li", null, "\u7B2C4\u70B9\uFF1A\u53D1\u8D77\u5DE5\u4F5C\u6D41\uFF0C\u6309\u533A\u57DF\u9009\u62E9\u5BF9\u5E94\u6D41\u7A0BKey"),
            createVNode("li", null, "\u7B2C5\u70B9\uFF1A\u66F4\u65B0\u5BA1\u6279\u72B6\u6001\u4E3ARUN\uFF0C\u8BB0\u5F55\u5DE5\u4F5C\u6D41\u5B9E\u4F8BID"),
            createVNode("li", null, [
              createVNode("strong", null, "\u63A5\u53E3\u8C03\u7528"),
              createTextVNode("\uFF1APOST /v1/{organizationId}/epmPaymentAllot/wfProcSubmit")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " payment_allot_id, payment_allot_code, payment_allot_stat, hz_approve_status, hz_instance_id")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " epm_payment_allot "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " payment_allot_id "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " {id}")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u6309\u94AE2\uFF1A\u5220\u9664\uFF08\u8BE6\u60C5\u9875\uFF09"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u5BA1\u6279\u72B6\u6001\u4E3ANEW\u6216INTERRUPT")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u6267\u884C\u903B\u8F91"),
              createTextVNode("\uFF1A")
            ]),
            createVNode("li", null, "\u7B2C1\u70B9\uFF1A\u6821\u9A8C\u5BA1\u6279\u72B6\u6001\u5FC5\u987B\u4E3ANEW\u6216INTERRUPT\uFF0C\u5426\u5219\u62A5\u9519"),
            createVNode("li", null, "\u7B2C2\u70B9\uFF1A\u7EA7\u8054\u5220\u9664\u5408\u540C\u884C\uFF08EPM_PAYMENT_ALLOT_LINE\uFF09\u548C\u51FA\u5E93\u660E\u7EC6\u884C\uFF08EPM_PAYMENT_ALLOT_DETAIL\uFF09"),
            createVNode("li", null, "\u7B2C3\u70B9\uFF1A\u5220\u9664\u8BA4\u9886\u5934\uFF08EPM_PAYMENT_ALLOT\uFF09"),
            createVNode("li", null, "\u7B2C4\u70B9\uFF1A\u66F4\u65B0\u5230\u6B3E\u5F15\u5165\u5355\u53EF\u8BA4\u9886\u91D1\u989D\uFF08\u865A\u62DF\u5355\u67E5DB\u8BA1\u7B97\uFF0C\u771F\u5B9E\u5355\u67E5ERP\u5B9E\u65F6\u6570\u636E\uFF09"),
            createVNode("li", null, [
              createVNode("strong", null, "\u63A5\u53E3\u8C03\u7528"),
              createTextVNode("\uFF1APOST /v1/{organizationId}/epmPaymentAllot/deleteAllot")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " epm_payment_allot "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " payment_allot_id "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " {id};")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "SELECT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "*"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " epm_payment_allot_line "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " payment_allot_id "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " {id};")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "SELECT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "*"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " epm_payment_allot_detail d "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "JOIN"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " epm_payment_allot_line l "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ON"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " d.payment_allot_line_id "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " l.payment_allot_line_id "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " l.payment_allot_id "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " {id};")
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
            createVNode("li", null, "\u7B2C1\u70B9\uFF1A\u6309\u5F53\u524D\u67E5\u8BE2\u6761\u4EF6\u5BFC\u51FA\u8BA4\u9886\u5355\u5217\u8868\u6570\u636E"),
            createVNode("li", null, "\u7B2C2\u70B9\uFF1A\u5BFC\u51FA\u5B57\u6BB5\u5305\u62EC\u8BA4\u9886\u5355\u53F7\u3001\u5230\u6B3E\u5355\u53F7\u3001\u5BA2\u6237\u3001\u8BA4\u6B3E\u91D1\u989D\u3001\u72B6\u6001\u7B49"),
            createVNode("li", null, [
              createVNode("strong", null, "\u63A5\u53E3\u8C03\u7528"),
              createTextVNode("\uFF1AGET /v1/{organizationId}/epmPaymentAllot/list/export")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u6392\u67E5SQL"),
              createTextVNode("\uFF1A\u65E0")
            ])
          ]),
          createVNode("h4", null, "\u6309\u94AE4\uFF1A\u67E5\u8BE2\u5408\u540C\u8BA4\u7F34\u91D1\u989D\uFF08\u8BE6\u60C5\u9875\uFF09"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u5DF2\u9009\u62E9\u5408\u540C")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u6267\u884C\u903B\u8F91"),
              createTextVNode("\uFF1A")
            ]),
            createVNode("li", null, "\u7B2C1\u70B9\uFF1A\u67E5\u8BE2\u5408\u540C\u5DF2\u56DE\u6B3E\u603B\u91D1\u989D\uFF08contractAmtReceived\uFF09"),
            createVNode("li", null, "\u7B2C2\u70B9\uFF1A\u67E5\u8BE2\u5408\u540C\u53D1\u8D27\u603B\u91D1\u989D\uFF08contractAmt\uFF09"),
            createVNode("li", null, "\u7B2C3\u70B9\uFF1A\u8FD4\u56DE\u5408\u540C\u91D1\u989D\u4FE1\u606F\u4F9B\u524D\u7AEF\u5C55\u793A"),
            createVNode("li", null, [
              createVNode("strong", null, "\u63A5\u53E3\u8C03\u7528"),
              createTextVNode("\uFF1APOST /v1/{organizationId}/epmPaymentAllot/select-contract-amt")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " contract_id, contract_code, contract_amount, contract_amt_received "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " epm_project_contract "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " contract_id "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IN"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " ({contractIds});")
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
  _push(ssrRenderComponent(_component_KbCard, { title: "\u4FDD\u5B58\u6821\u9A8C" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}>\u6821\u9A8C1\uFF1A\u5230\u6B3E\u5355\u72B6\u6001\u6821\u9A8C \u2014\u2014 \u786E\u4FDD\u5230\u6B3E\u5355\u5904\u4E8E\u53EF\u8BA4\u9886\u72B6\u6001</li></ul><ul${_scopeId}><li${_scopeId}>\u8BE6\u7EC6\u903B\u8F91</li></ul><p${_scopeId}>- \u7B2C1\u70B9\uFF1A\u8C03\u7528verifyImportStat\u6821\u9A8C\u5230\u6B3E\u5F15\u5165\u5355\u72B6\u6001</p><p${_scopeId}>- \u7B2C2\u70B9\uFF1A\u5230\u6B3E\u5355\u4E0D\u5B58\u5728\u65F6\u62A5\u9519&quot;\u672A\u627E\u5230\u8BE5\u5230\u6B3E\u5355&quot;</p><ul${_scopeId}><li${_scopeId}>\u7CFB\u7EDF\u4F53\u73B0\uFF1A\u963B\u65AD\u6027\u62A5\u9519</li></ul><ul${_scopeId}><li${_scopeId}>\u6392\u67E5SQL\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> payment_import_id, payment_import_code, bill_type, unallot_amt, allot_status</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> epm_payment_import </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> payment_import_id </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> {paymentImportId};</span></span>
<span class="line"${_scopeId}></span></code></pre></div><ul${_scopeId}><li${_scopeId}>\u6821\u9A8C2\uFF1A\u53EF\u8BA4\u9886\u91D1\u989D\u6821\u9A8C \u2014\u2014 \u786E\u4FDD\u8BA4\u9886\u91D1\u989D\u4E0D\u8D85\u8FC7\u5269\u4F59\u53EF\u8BA4\u9886\u91D1\u989D</li></ul><ul${_scopeId}><li${_scopeId}>\u8BE6\u7EC6\u903B\u8F91</li></ul><p${_scopeId}>- \u7B2C1\u70B9\uFF1A\u865A\u62DF\u5230\u6B3E\u5355\uFF08VIRTUAL_RECEIPT\uFF09\u67E5\u6570\u636E\u5E93\u8BA1\u7B97\u5269\u4F59\u53EF\u8BA4\u9886\u91D1\u989D</p><p${_scopeId}>- \u7B2C2\u70B9\uFF1A\u771F\u5B9E\u5230\u6B3E\u5355\u5B9E\u65F6\u8C03ERP\u63A5\u53E3\u67E5\u8BE2\u6700\u65B0\u5269\u4F59\u53EF\u8BA4\u9886\u91D1\u989D</p><p${_scopeId}>- \u7B2C3\u70B9\uFF1A\u672C\u6B21\u8BA4\u6B3E\u91D1\u989D\u5408\u8BA1&gt;\u5269\u4F59\u53EF\u8BA4\u9886\u91D1\u989D\u65F6\u62A5\u9519</p><ul${_scopeId}><li${_scopeId}>\u7CFB\u7EDF\u4F53\u73B0\uFF1A\u963B\u65AD\u6027\u62A5\u9519</li></ul><ul${_scopeId}><li${_scopeId}>\u6392\u67E5SQL\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- \u865A\u62DF\u5355\u67E5DB</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> unallot_amt </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> epm_payment_import </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> payment_import_id </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> {id};</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- \u771F\u5B9E\u5355\u67E5ERP\uFF08\u901A\u8FC7ERP\u63A5\u53E3\uFF0C\u65E0\u76F4\u63A5SQL\uFF09</span></span>
<span class="line"${_scopeId}></span></code></pre></div><ul${_scopeId}><li${_scopeId}>\u6821\u9A8C3\uFF1A\u51FA\u5E93\u660E\u7EC6\u91D1\u989D\u6821\u9A8C \u2014\u2014 \u786E\u4FDD\u4E0D\u8D85\u5DE5\u7A0B\u91D1\u989D</li></ul><ul${_scopeId}><li${_scopeId}>\u8BE6\u7EC6\u903B\u8F91</li></ul><p${_scopeId}>- \u7B2C1\u70B9\uFF1A\u6BCF\u884C\u51FA\u5E93\u660E\u7EC6\u7684\u5DF2\u8BA4\u9886\u91D1\u989D+\u672C\u6B21\u8BA4\u9886\u91D1\u989D\u4E0D\u80FD\u8D85\u8FC7\u5DE5\u7A0B\u65B9\u91D1\u989D</p><p${_scopeId}>- \u7B2C2\u70B9\uFF1A\u8D85\u51FA\u65F6\u62A5\u9519&quot;\u5DF2\u8BA4\u9886\u91D1\u989D+\u672C\u6B21\u8BA4\u9886\u91D1\u989D\u5DF2\u8D85\u5DE5\u7A0B\u91D1\u989D&quot;</p><ul${_scopeId}><li${_scopeId}>\u7CFB\u7EDF\u4F53\u73B0\uFF1A\u963B\u65AD\u6027\u62A5\u9519</li></ul><ul${_scopeId}><li${_scopeId}>\u6392\u67E5SQL\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> d.claim_amt, d.contract_amount,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>           (</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}>SUM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>(claim_amt) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> epm_payment_allot_detail </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> source_id </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> d.source_id </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> cancel_flag </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>N</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> total_claim_amt</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> epm_payment_allot_detail d </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> payment_allot_line_id </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>      </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> payment_allot_line_id </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> epm_payment_allot_line </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> payment_allot_id </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> {id}</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    );</span></span>
<span class="line"${_scopeId}></span></code></pre></div><ul${_scopeId}><li${_scopeId}>\u6821\u9A8C4\uFF1A\u4E8B\u4E1A\u90E8\u4FE1\u606F\u6821\u9A8C \u2014\u2014 \u786E\u4FDD\u7528\u6237\u6709\u4E8B\u4E1A\u90E8\u4FE1\u606F</li></ul><ul${_scopeId}><li${_scopeId}>\u8BE6\u7EC6\u903B\u8F91</li></ul><p${_scopeId}>- \u7B2C1\u70B9\uFF1A\u4ECE\u7528\u6237\u9644\u52A0\u4FE1\u606F\u4E2D\u83B7\u53D6DEPT\uFF08\u4E8B\u4E1A\u90E8\uFF09</p><p${_scopeId}>- \u7B2C2\u70B9\uFF1A\u4E8B\u4E1A\u90E8\u4E3A\u7A7A\u65F6\u62A5\u9519&quot;\u4E8B\u4E1A\u90E8\u4FE1\u606F\u4E3A\u7A7A&quot;</p><ul${_scopeId}><li${_scopeId}>\u7CFB\u7EDF\u4F53\u73B0\uFF1A\u963B\u65AD\u6027\u62A5\u9519</li></ul><ul${_scopeId}><li${_scopeId}>\u6392\u67E5SQL\uFF1A\u65E0\uFF08\u4ECE\u7528\u6237\u4E0A\u4E0B\u6587\u83B7\u53D6\uFF09</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, "\u6821\u9A8C1\uFF1A\u5230\u6B3E\u5355\u72B6\u6001\u6821\u9A8C \u2014\u2014 \u786E\u4FDD\u5230\u6B3E\u5355\u5904\u4E8E\u53EF\u8BA4\u9886\u72B6\u6001")
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u8BE6\u7EC6\u903B\u8F91")
          ]),
          createVNode("p", null, "- \u7B2C1\u70B9\uFF1A\u8C03\u7528verifyImportStat\u6821\u9A8C\u5230\u6B3E\u5F15\u5165\u5355\u72B6\u6001"),
          createVNode("p", null, '- \u7B2C2\u70B9\uFF1A\u5230\u6B3E\u5355\u4E0D\u5B58\u5728\u65F6\u62A5\u9519"\u672A\u627E\u5230\u8BE5\u5230\u6B3E\u5355"'),
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " payment_import_id, payment_import_code, bill_type, unallot_amt, allot_status")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " epm_payment_import "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " payment_import_id "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " {paymentImportId};")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u6821\u9A8C2\uFF1A\u53EF\u8BA4\u9886\u91D1\u989D\u6821\u9A8C \u2014\u2014 \u786E\u4FDD\u8BA4\u9886\u91D1\u989D\u4E0D\u8D85\u8FC7\u5269\u4F59\u53EF\u8BA4\u9886\u91D1\u989D")
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u8BE6\u7EC6\u903B\u8F91")
          ]),
          createVNode("p", null, "- \u7B2C1\u70B9\uFF1A\u865A\u62DF\u5230\u6B3E\u5355\uFF08VIRTUAL_RECEIPT\uFF09\u67E5\u6570\u636E\u5E93\u8BA1\u7B97\u5269\u4F59\u53EF\u8BA4\u9886\u91D1\u989D"),
          createVNode("p", null, "- \u7B2C2\u70B9\uFF1A\u771F\u5B9E\u5230\u6B3E\u5355\u5B9E\u65F6\u8C03ERP\u63A5\u53E3\u67E5\u8BE2\u6700\u65B0\u5269\u4F59\u53EF\u8BA4\u9886\u91D1\u989D"),
          createVNode("p", null, "- \u7B2C3\u70B9\uFF1A\u672C\u6B21\u8BA4\u6B3E\u91D1\u989D\u5408\u8BA1>\u5269\u4F59\u53EF\u8BA4\u9886\u91D1\u989D\u65F6\u62A5\u9519"),
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
                  createVNode("span", { style: { "color": "#676E95" } }, "-- \u865A\u62DF\u5355\u67E5DB")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "SELECT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " unallot_amt "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " epm_payment_import "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " payment_import_id "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " {id};")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#89DDFF" } }, "    "),
                  createVNode("span", { style: { "color": "#676E95" } }, "-- \u771F\u5B9E\u5355\u67E5ERP\uFF08\u901A\u8FC7ERP\u63A5\u53E3\uFF0C\u65E0\u76F4\u63A5SQL\uFF09")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u6821\u9A8C3\uFF1A\u51FA\u5E93\u660E\u7EC6\u91D1\u989D\u6821\u9A8C \u2014\u2014 \u786E\u4FDD\u4E0D\u8D85\u5DE5\u7A0B\u91D1\u989D")
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u8BE6\u7EC6\u903B\u8F91")
          ]),
          createVNode("p", null, "- \u7B2C1\u70B9\uFF1A\u6BCF\u884C\u51FA\u5E93\u660E\u7EC6\u7684\u5DF2\u8BA4\u9886\u91D1\u989D+\u672C\u6B21\u8BA4\u9886\u91D1\u989D\u4E0D\u80FD\u8D85\u8FC7\u5DE5\u7A0B\u65B9\u91D1\u989D"),
          createVNode("p", null, '- \u7B2C2\u70B9\uFF1A\u8D85\u51FA\u65F6\u62A5\u9519"\u5DF2\u8BA4\u9886\u91D1\u989D+\u672C\u6B21\u8BA4\u9886\u91D1\u989D\u5DF2\u8D85\u5DE5\u7A0B\u91D1\u989D"'),
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " d.claim_amt, d.contract_amount,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "           ("),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "SELECT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#82AAFF" } }, "SUM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "(claim_amt) "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " epm_payment_allot_detail "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " source_id "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " d.source_id "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " cancel_flag "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "N"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " total_claim_amt")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " epm_payment_allot_detail d "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " payment_allot_line_id "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IN"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " (")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "SELECT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " payment_allot_line_id "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " epm_payment_allot_line "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " payment_allot_id "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " {id}")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    );")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u6821\u9A8C4\uFF1A\u4E8B\u4E1A\u90E8\u4FE1\u606F\u6821\u9A8C \u2014\u2014 \u786E\u4FDD\u7528\u6237\u6709\u4E8B\u4E1A\u90E8\u4FE1\u606F")
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u8BE6\u7EC6\u903B\u8F91")
          ]),
          createVNode("p", null, "- \u7B2C1\u70B9\uFF1A\u4ECE\u7528\u6237\u9644\u52A0\u4FE1\u606F\u4E2D\u83B7\u53D6DEPT\uFF08\u4E8B\u4E1A\u90E8\uFF09"),
          createVNode("p", null, '- \u7B2C2\u70B9\uFF1A\u4E8B\u4E1A\u90E8\u4E3A\u7A7A\u65F6\u62A5\u9519"\u4E8B\u4E1A\u90E8\u4FE1\u606F\u4E3A\u7A7A"'),
          createVNode("ul", null, [
            createVNode("li", null, "\u7CFB\u7EDF\u4F53\u73B0\uFF1A\u963B\u65AD\u6027\u62A5\u9519")
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u6392\u67E5SQL\uFF1A\u65E0\uFF08\u4ECE\u7528\u6237\u4E0A\u4E0B\u6587\u83B7\u53D6\uFF09")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, { title: "\u63D0\u4EA4\u6821\u9A8C" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}>\u6821\u9A8C1\uFF1A\u5230\u6B3E\u5355\u72B6\u6001\u6821\u9A8C \u2014\u2014 \u63D0\u4EA4\u524D\u518D\u6B21\u6821\u9A8C\u5230\u6B3E\u5355\u72B6\u6001</li></ul><ul${_scopeId}><li${_scopeId}>\u8BE6\u7EC6\u903B\u8F91</li></ul><p${_scopeId}>- \u7B2C1\u70B9\uFF1A\u8C03\u7528paymentImportService.verifyImportStat\u6821\u9A8C</p><p${_scopeId}>- \u7B2C2\u70B9\uFF1A\u5230\u6B3E\u5355\u4E0D\u5B58\u5728\u65F6\u62A5\u9519&quot;\u6D41\u7A0B\u53D1\u8D77\u5F02\u5E38\uFF0C\u5230\u6B3E\u5355\u4E0D\u5B58\u5728\uFF01&quot;</p><ul${_scopeId}><li${_scopeId}>\u7CFB\u7EDF\u4F53\u73B0\uFF1A\u963B\u65AD\u6027\u62A5\u9519</li></ul><ul${_scopeId}><li${_scopeId}>\u6392\u67E5SQL\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> payment_import_id, allot_status </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> epm_payment_import </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> payment_import_id </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> {id};</span></span>
<span class="line"${_scopeId}></span></code></pre></div><ul${_scopeId}><li${_scopeId}>\u6821\u9A8C2\uFF1A\u53EF\u8BA4\u9886\u91D1\u989D\u6821\u9A8C \u2014\u2014 \u63D0\u4EA4\u524D\u518D\u6B21\u6821\u9A8C\u91D1\u989D</li></ul><ul${_scopeId}><li${_scopeId}>\u8BE6\u7EC6\u903B\u8F91</li></ul><p${_scopeId}>- \u7B2C1\u70B9\uFF1A\u4E0E\u4FDD\u5B58\u6821\u9A8C2\u76F8\u540C\u7684validPaymentImportCanAllotAmt\u903B\u8F91</p><p${_scopeId}>- \u7B2C2\u70B9\uFF1A\u786E\u4FDD\u63D0\u4EA4\u65F6\u91D1\u989D\u4ECD\u53EF\u7528\uFF08\u9632\u6B62\u5E76\u53D1\u8BA4\u9886\uFF09</p><ul${_scopeId}><li${_scopeId}>\u7CFB\u7EDF\u4F53\u73B0\uFF1A\u963B\u65AD\u6027\u62A5\u9519</li></ul><ul${_scopeId}><li${_scopeId}>\u6392\u67E5SQL\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> unallot_amt </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> epm_payment_import </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> payment_import_id </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> {id};</span></span>
<span class="line"${_scopeId}></span></code></pre></div><ul${_scopeId}><li${_scopeId}>\u6821\u9A8C3\uFF1AERP\u63A8\u9001\u6821\u9A8C \u2014\u2014 \u63A8\u9001ERP\u6838\u9500\u6570\u636E\u5E76\u6821\u9A8C\u8FD4\u56DE</li></ul><ul${_scopeId}><li${_scopeId}>\u8BE6\u7EC6\u903B\u8F91</li></ul><p${_scopeId}>- \u7B2C1\u70B9\uFF1A\u7EC4\u88C5AR_APPLY\u3001OM_CLAIM\u3001OM_APPLY\u4E09\u7EC4\u6570\u636E\u63A8\u9001ERP</p><p${_scopeId}>- \u7B2C2\u70B9\uFF1AERP\u8FD4\u56DE\u72B6\u6001\u975ES\u65F6\u62A5\u9519&quot;\u8BA4\u9886\u63A8\u9001erp\u5F02\u5E38&quot;</p><p${_scopeId}>- \u7B2C3\u70B9\uFF1AERP\u8FD4\u56DE\u6570\u636E\u4E3A\u7A7A\u65F6\u62A5\u9519&quot;erp\u8FD4\u56DE\u8BA4\u9886\u7ED3\u679C\u4E3A\u7A7A&quot;</p><ul${_scopeId}><li${_scopeId}>\u7CFB\u7EDF\u4F53\u73B0\uFF1A\u963B\u65AD\u6027\u62A5\u9519</li></ul><ul${_scopeId}><li${_scopeId}>\u6392\u67E5SQL\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>*</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> sys_exception_msg </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>objid</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> {paymentAllotId} </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> objtypename </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>\u5230\u6B3E\u8BA4\u9886</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, "\u6821\u9A8C1\uFF1A\u5230\u6B3E\u5355\u72B6\u6001\u6821\u9A8C \u2014\u2014 \u63D0\u4EA4\u524D\u518D\u6B21\u6821\u9A8C\u5230\u6B3E\u5355\u72B6\u6001")
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u8BE6\u7EC6\u903B\u8F91")
          ]),
          createVNode("p", null, "- \u7B2C1\u70B9\uFF1A\u8C03\u7528paymentImportService.verifyImportStat\u6821\u9A8C"),
          createVNode("p", null, '- \u7B2C2\u70B9\uFF1A\u5230\u6B3E\u5355\u4E0D\u5B58\u5728\u65F6\u62A5\u9519"\u6D41\u7A0B\u53D1\u8D77\u5F02\u5E38\uFF0C\u5230\u6B3E\u5355\u4E0D\u5B58\u5728\uFF01"'),
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " payment_import_id, allot_status "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " epm_payment_import "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " payment_import_id "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " {id};")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u6821\u9A8C2\uFF1A\u53EF\u8BA4\u9886\u91D1\u989D\u6821\u9A8C \u2014\u2014 \u63D0\u4EA4\u524D\u518D\u6B21\u6821\u9A8C\u91D1\u989D")
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u8BE6\u7EC6\u903B\u8F91")
          ]),
          createVNode("p", null, "- \u7B2C1\u70B9\uFF1A\u4E0E\u4FDD\u5B58\u6821\u9A8C2\u76F8\u540C\u7684validPaymentImportCanAllotAmt\u903B\u8F91"),
          createVNode("p", null, "- \u7B2C2\u70B9\uFF1A\u786E\u4FDD\u63D0\u4EA4\u65F6\u91D1\u989D\u4ECD\u53EF\u7528\uFF08\u9632\u6B62\u5E76\u53D1\u8BA4\u9886\uFF09"),
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " unallot_amt "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " epm_payment_import "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " payment_import_id "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " {id};")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u6821\u9A8C3\uFF1AERP\u63A8\u9001\u6821\u9A8C \u2014\u2014 \u63A8\u9001ERP\u6838\u9500\u6570\u636E\u5E76\u6821\u9A8C\u8FD4\u56DE")
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u8BE6\u7EC6\u903B\u8F91")
          ]),
          createVNode("p", null, "- \u7B2C1\u70B9\uFF1A\u7EC4\u88C5AR_APPLY\u3001OM_CLAIM\u3001OM_APPLY\u4E09\u7EC4\u6570\u636E\u63A8\u9001ERP"),
          createVNode("p", null, '- \u7B2C2\u70B9\uFF1AERP\u8FD4\u56DE\u72B6\u6001\u975ES\u65F6\u62A5\u9519"\u8BA4\u9886\u63A8\u9001erp\u5F02\u5E38"'),
          createVNode("p", null, '- \u7B2C3\u70B9\uFF1AERP\u8FD4\u56DE\u6570\u636E\u4E3A\u7A7A\u65F6\u62A5\u9519"erp\u8FD4\u56DE\u8BA4\u9886\u7ED3\u679C\u4E3A\u7A7A"'),
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " {paymentAllotId} "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " objtypename "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "\u5230\u6B3E\u8BA4\u9886"),
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
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    \u2191                    \u2502                        \u2502</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    \u2502\u9A73\u56DE                 \u2502\u7EC8\u6B62                    \u2502\u63A8\u9001ERP</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    \u2502                    \u2193                        \u2193</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    \u2514\u2500\u2500 INTERRUPT(\u9A73\u56DE) \u2500\u2500\u2192 \u63A8\u9001ERP CANCEL    TRANSFER(\u5DF2\u63A8\u9001)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>                                                    \u2502</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>                                                    \u2193</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>                                              ACCOUNTED(\u5DF2\u8BA4\u9886)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}></span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>APPROVED \u2500\u2500\u64A4\u9500\u2500\u2500\u2192 CANCEL(\u5DF2\u64A4\u9500)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}></span></span></code></pre></div><h4${_scopeId}>\u72B6\u6001\u673A\u5217\u8868</h4><table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u72B6\u6001\u673A\u540D\u79F0</th><th${_scopeId}>\u72B6\u6001\u91CA\u4E49</th><th${_scopeId}>\u53EF\u6267\u884C\u7684\u64CD\u4F5C</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>NEW</td><td${_scopeId}>\u65B0\u5EFA\uFF0C\u672A\u63D0\u4EA4</td><td${_scopeId}>\u7F16\u8F91\u3001\u4FDD\u5B58\u3001\u63D0\u4EA4\u3001\u5220\u9664</td></tr><tr${_scopeId}><td${_scopeId}>RUN</td><td${_scopeId}>\u5BA1\u6279\u4E2D\uFF0C\u5DE5\u4F5C\u6D41\u8FD0\u884C\u4E2D</td><td${_scopeId}>\u65E0\uFF08\u7B49\u5F85\u5BA1\u6279\u7ED3\u679C\uFF09</td></tr><tr${_scopeId}><td${_scopeId}>APPROVED</td><td${_scopeId}>\u5DF2\u5BA1\u6838\uFF0C\u5BA1\u6279\u901A\u8FC7</td><td${_scopeId}>\u64A4\u9500</td></tr><tr${_scopeId}><td${_scopeId}>INTERRUPT</td><td${_scopeId}>\u9A73\u56DE/\u4E2D\u65AD</td><td${_scopeId}>\u7F16\u8F91\u3001\u4FDD\u5B58\u3001\u91CD\u65B0\u63D0\u4EA4\u3001\u5220\u9664</td></tr><tr${_scopeId}><td${_scopeId}>TRANSFER</td><td${_scopeId}>\u5DF2\u63A8\u9001ERP</td><td${_scopeId}>\u65E0</td></tr><tr${_scopeId}><td${_scopeId}>ACCOUNTED</td><td${_scopeId}>\u5DF2\u8BA4\u9886\uFF0CERP\u6838\u9500\u5B8C\u6210</td><td${_scopeId}>\u65E0</td></tr><tr${_scopeId}><td${_scopeId}>CANCEL</td><td${_scopeId}>\u5DF2\u64A4\u9500</td><td${_scopeId}>\u65E0</td></tr></tbody></table>`);
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    \u2191                    \u2502                        \u2502")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    \u2502\u9A73\u56DE                 \u2502\u7EC8\u6B62                    \u2502\u63A8\u9001ERP")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    \u2502                    \u2193                        \u2193")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    \u2514\u2500\u2500 INTERRUPT(\u9A73\u56DE) \u2500\u2500\u2192 \u63A8\u9001ERP CANCEL    TRANSFER(\u5DF2\u63A8\u9001)")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "                                                    \u2502")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "                                                    \u2193")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "                                              ACCOUNTED(\u5DF2\u8BA4\u9886)")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } })
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "APPROVED \u2500\u2500\u64A4\u9500\u2500\u2500\u2192 CANCEL(\u5DF2\u64A4\u9500)")
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
                createVNode("td", null, "\u7F16\u8F91\u3001\u4FDD\u5B58\u3001\u63D0\u4EA4\u3001\u5220\u9664")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "RUN"),
                createVNode("td", null, "\u5BA1\u6279\u4E2D\uFF0C\u5DE5\u4F5C\u6D41\u8FD0\u884C\u4E2D"),
                createVNode("td", null, "\u65E0\uFF08\u7B49\u5F85\u5BA1\u6279\u7ED3\u679C\uFF09")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "APPROVED"),
                createVNode("td", null, "\u5DF2\u5BA1\u6838\uFF0C\u5BA1\u6279\u901A\u8FC7"),
                createVNode("td", null, "\u64A4\u9500")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "INTERRUPT"),
                createVNode("td", null, "\u9A73\u56DE/\u4E2D\u65AD"),
                createVNode("td", null, "\u7F16\u8F91\u3001\u4FDD\u5B58\u3001\u91CD\u65B0\u63D0\u4EA4\u3001\u5220\u9664")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "TRANSFER"),
                createVNode("td", null, "\u5DF2\u63A8\u9001ERP"),
                createVNode("td", null, "\u65E0")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "ACCOUNTED"),
                createVNode("td", null, "\u5DF2\u8BA4\u9886\uFF0CERP\u6838\u9500\u5B8C\u6210"),
                createVNode("td", null, "\u65E0")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "CANCEL"),
                createVNode("td", null, "\u5DF2\u64A4\u9500"),
                createVNode("td", null, "\u65E0")
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, { title: "\u88681\uFF1AEPM_PAYMENT_ALLOT\uFF08\u56DE\u6B3E\u8BA4\u9886\u5355\u5934\u8868\uFF09" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5B57\u6BB5\u540D</th><th${_scopeId}>\u7C7B\u578B</th><th${_scopeId}>\u91CA\u4E49</th><th${_scopeId}>\u5BF9\u5E94\u754C\u9762\u5B57\u6BB5</th><th${_scopeId}>\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>PAYMENT_ALLOT_ID</td><td${_scopeId}>NUMBER</td><td${_scopeId}>\u8BA4\u9886\u5355ID</td><td${_scopeId}>-</td><td${_scopeId}>\u4E3B\u952E\uFF0C\u81EA\u589E</td></tr><tr${_scopeId}><td${_scopeId}>PAYMENT_ALLOT_CODE</td><td${_scopeId}>VARCHAR2</td><td${_scopeId}>\u8BA4\u9886\u5355\u53F7</td><td${_scopeId}>\u8BA4\u9886\u5355\u53F7</td><td${_scopeId}>\u6309\u7F16\u7801\u89C4\u5219AE.EPM_PAYMENT_ALLOT\u751F\u6210</td></tr><tr${_scopeId}><td${_scopeId}>ORGANIZATION_ID</td><td${_scopeId}>NUMBER</td><td${_scopeId}>\u7EC4\u7EC7ID</td><td${_scopeId}>-</td><td${_scopeId}>\u5F53\u524D\u7528\u6237\u4E8B\u4E1A\u90E8ID</td></tr><tr${_scopeId}><td${_scopeId}>PAYMENT_IMPORT_CODE</td><td${_scopeId}>VARCHAR2</td><td${_scopeId}>\u5230\u6B3E\u8BB0\u5F55\u5355\u53F7</td><td${_scopeId}>\u5230\u6B3E\u8BB0\u5F55\u5355\u53F7</td><td${_scopeId}>\u6765\u6E90\u5230\u6B3E\u5F15\u5165\u5355</td></tr><tr${_scopeId}><td${_scopeId}>SERIAL_NUMBER</td><td${_scopeId}>VARCHAR2</td><td${_scopeId}>\u94F6\u884C\u6D41\u6C34\u53F7</td><td${_scopeId}>\u94F6\u884C\u6D41\u6C34\u53F7</td><td${_scopeId}>\u6765\u6E90\u5230\u6B3E\u5F15\u5165\u5355</td></tr><tr${_scopeId}><td${_scopeId}>CUSTOMER_ID</td><td${_scopeId}>NUMBER</td><td${_scopeId}>\u5BA2\u6237ID</td><td${_scopeId}>-</td><td${_scopeId}>\u6765\u6E90\u5230\u6B3E\u5F15\u5165\u5355</td></tr><tr${_scopeId}><td${_scopeId}>CUSTOMER_CODE</td><td${_scopeId}>VARCHAR2</td><td${_scopeId}>\u5BA2\u6237\u7F16\u7801</td><td${_scopeId}>\u5BA2\u6237\u7F16\u7801</td><td${_scopeId}>\u6765\u6E90\u5230\u6B3E\u5F15\u5165\u5355</td></tr><tr${_scopeId}><td${_scopeId}>CUSTOMER_NAME</td><td${_scopeId}>VARCHAR2</td><td${_scopeId}>\u5BA2\u6237\u540D\u79F0</td><td${_scopeId}>\u5BA2\u6237\u540D\u79F0</td><td${_scopeId}>\u6765\u6E90\u5230\u6B3E\u5F15\u5165\u5355</td></tr><tr${_scopeId}><td${_scopeId}>UNALLOT_AMT_BEFORE</td><td${_scopeId}>NUMBER</td><td${_scopeId}>\u8BA4\u6B3E\u524D\u53EF\u8BA4\u6B3E\u91D1\u989D</td><td${_scopeId}>\u8BA4\u6B3E\u524D\u53EF\u8BA4\u6B3E\u91D1\u989D</td><td${_scopeId}>\u4FDD\u5B58\u65F6=\u5230\u6B3E\u5355\u5269\u4F59\u53EF\u8BA4\u9886\u91D1\u989D</td></tr><tr${_scopeId}><td${_scopeId}>ALLOT_AMT</td><td${_scopeId}>NUMBER</td><td${_scopeId}>\u672C\u6B21\u8BA4\u6B3E\u5408\u8BA1\u91D1\u989D</td><td${_scopeId}>\u672C\u6B21\u8BA4\u6B3E\u5408\u8BA1\u91D1\u989D</td><td${_scopeId}>\u81EA\u52A8\u8BA1\u7B97=\u5404\u884C\u8BA4\u6B3E\u91D1\u989D\u4E4B\u548C</td></tr><tr${_scopeId}><td${_scopeId}>UNALLOT_AMT_AFTER</td><td${_scopeId}>NUMBER</td><td${_scopeId}>\u8BA4\u6B3E\u540E\u53EF\u8BA4\u6B3E\u91D1\u989D</td><td${_scopeId}>\u8BA4\u6B3E\u540E\u53EF\u8BA4\u6B3E\u91D1\u989D</td><td${_scopeId}>=\u8BA4\u6B3E\u524D-\u672C\u6B21\u8BA4\u6B3E\u5408\u8BA1</td></tr><tr${_scopeId}><td${_scopeId}>REMARK</td><td${_scopeId}>VARCHAR2</td><td${_scopeId}>\u5907\u6CE8</td><td${_scopeId}>\u5907\u6CE8</td><td${_scopeId}>\u7528\u6237\u8F93\u5165</td></tr><tr${_scopeId}><td${_scopeId}>STAT</td><td${_scopeId}>NUMBER</td><td${_scopeId}>\u5355\u636E\u72B6\u6001</td><td${_scopeId}>-</td><td${_scopeId}>\u65E7\u72B6\u6001\u5B57\u6BB5</td></tr><tr${_scopeId}><td${_scopeId}>WFID</td><td${_scopeId}>NUMBER</td><td${_scopeId}>\u6D41\u7A0BID</td><td${_scopeId}>-</td><td${_scopeId}>\u5DE5\u4F5C\u6D41ID</td></tr><tr${_scopeId}><td${_scopeId}>WFFLAG</td><td${_scopeId}>NUMBER</td><td${_scopeId}>\u6D41\u7A0B\u72B6\u6001</td><td${_scopeId}>-</td><td${_scopeId}>\u5DE5\u4F5C\u6D41\u72B6\u6001</td></tr><tr${_scopeId}><td${_scopeId}>IS_HOME</td><td${_scopeId}>NUMBER</td><td${_scopeId}>\u662F\u5426\u5BB6\u88C5</td><td${_scopeId}>\u662F\u5426\u5BB6\u88C5</td><td${_scopeId}>\u5DE5\u7A0B=0\uFF0C\u5BB6\u88C5=2</td></tr><tr${_scopeId}><td${_scopeId}>CLIENTNAME</td><td${_scopeId}>VARCHAR2</td><td${_scopeId}>\u533A\u5206APP\u4E0EPC</td><td${_scopeId}>-</td><td${_scopeId}>-</td></tr><tr${_scopeId}><td${_scopeId}>PAYMENT_IMPORT_ID</td><td${_scopeId}>NUMBER</td><td${_scopeId}>\u5230\u6B3E\u8BB0\u5F55\u5355ID</td><td${_scopeId}>-</td><td${_scopeId}>\u5173\u8054\u5230\u6B3E\u5F15\u5165\u5355</td></tr><tr${_scopeId}><td${_scopeId}>CLAIM_TYPE</td><td${_scopeId}>VARCHAR2</td><td${_scopeId}>\u8BA4\u9886\u65B9\u5F0F</td><td${_scopeId}>\u8BA4\u9886\u65B9\u5F0F</td><td${_scopeId}>auto/manual</td></tr><tr${_scopeId}><td${_scopeId}>PAYMENT_ALLOT_STAT</td><td${_scopeId}>VARCHAR2</td><td${_scopeId}>\u8BA4\u6B3E\u72B6\u6001</td><td${_scopeId}>\u8BA4\u6B3E\u72B6\u6001</td><td${_scopeId}>APPLYING/APPROVED/TRANSFER/ACCOUNTED/CANCEL</td></tr><tr${_scopeId}><td${_scopeId}>MANUAL_INVOICE_CLAIM</td><td${_scopeId}>VARCHAR2</td><td${_scopeId}>\u624B\u5DE5\u53D1\u7968\u8BA4\u9886\u6807\u8BC6</td><td${_scopeId}>\u624B\u5DE5\u53D1\u7968\u8BA4\u9886</td><td${_scopeId}>Y/N</td></tr><tr${_scopeId}><td${_scopeId}>HZ_APPROVE_STATUS</td><td${_scopeId}>VARCHAR2</td><td${_scopeId}>\u5BA1\u6279\u72B6\u6001</td><td${_scopeId}>\u5BA1\u6279\u72B6\u6001</td><td${_scopeId}>NEW/RUN/APPROVED/INTERRUPT</td></tr><tr${_scopeId}><td${_scopeId}>HZ_INSTANCE_ID</td><td${_scopeId}>NUMBER</td><td${_scopeId}>\u5BA1\u6279\u5B9E\u4F8BID</td><td${_scopeId}>-</td><td${_scopeId}>\u5DE5\u4F5C\u6D41\u5B9E\u4F8BID</td></tr></tbody></table>`);
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
                createVNode("td", null, "PAYMENT_ALLOT_ID"),
                createVNode("td", null, "NUMBER"),
                createVNode("td", null, "\u8BA4\u9886\u5355ID"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u4E3B\u952E\uFF0C\u81EA\u589E")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "PAYMENT_ALLOT_CODE"),
                createVNode("td", null, "VARCHAR2"),
                createVNode("td", null, "\u8BA4\u9886\u5355\u53F7"),
                createVNode("td", null, "\u8BA4\u9886\u5355\u53F7"),
                createVNode("td", null, "\u6309\u7F16\u7801\u89C4\u5219AE.EPM_PAYMENT_ALLOT\u751F\u6210")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "ORGANIZATION_ID"),
                createVNode("td", null, "NUMBER"),
                createVNode("td", null, "\u7EC4\u7EC7ID"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u5F53\u524D\u7528\u6237\u4E8B\u4E1A\u90E8ID")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "PAYMENT_IMPORT_CODE"),
                createVNode("td", null, "VARCHAR2"),
                createVNode("td", null, "\u5230\u6B3E\u8BB0\u5F55\u5355\u53F7"),
                createVNode("td", null, "\u5230\u6B3E\u8BB0\u5F55\u5355\u53F7"),
                createVNode("td", null, "\u6765\u6E90\u5230\u6B3E\u5F15\u5165\u5355")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "SERIAL_NUMBER"),
                createVNode("td", null, "VARCHAR2"),
                createVNode("td", null, "\u94F6\u884C\u6D41\u6C34\u53F7"),
                createVNode("td", null, "\u94F6\u884C\u6D41\u6C34\u53F7"),
                createVNode("td", null, "\u6765\u6E90\u5230\u6B3E\u5F15\u5165\u5355")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "CUSTOMER_ID"),
                createVNode("td", null, "NUMBER"),
                createVNode("td", null, "\u5BA2\u6237ID"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u6765\u6E90\u5230\u6B3E\u5F15\u5165\u5355")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "CUSTOMER_CODE"),
                createVNode("td", null, "VARCHAR2"),
                createVNode("td", null, "\u5BA2\u6237\u7F16\u7801"),
                createVNode("td", null, "\u5BA2\u6237\u7F16\u7801"),
                createVNode("td", null, "\u6765\u6E90\u5230\u6B3E\u5F15\u5165\u5355")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "CUSTOMER_NAME"),
                createVNode("td", null, "VARCHAR2"),
                createVNode("td", null, "\u5BA2\u6237\u540D\u79F0"),
                createVNode("td", null, "\u5BA2\u6237\u540D\u79F0"),
                createVNode("td", null, "\u6765\u6E90\u5230\u6B3E\u5F15\u5165\u5355")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "UNALLOT_AMT_BEFORE"),
                createVNode("td", null, "NUMBER"),
                createVNode("td", null, "\u8BA4\u6B3E\u524D\u53EF\u8BA4\u6B3E\u91D1\u989D"),
                createVNode("td", null, "\u8BA4\u6B3E\u524D\u53EF\u8BA4\u6B3E\u91D1\u989D"),
                createVNode("td", null, "\u4FDD\u5B58\u65F6=\u5230\u6B3E\u5355\u5269\u4F59\u53EF\u8BA4\u9886\u91D1\u989D")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "ALLOT_AMT"),
                createVNode("td", null, "NUMBER"),
                createVNode("td", null, "\u672C\u6B21\u8BA4\u6B3E\u5408\u8BA1\u91D1\u989D"),
                createVNode("td", null, "\u672C\u6B21\u8BA4\u6B3E\u5408\u8BA1\u91D1\u989D"),
                createVNode("td", null, "\u81EA\u52A8\u8BA1\u7B97=\u5404\u884C\u8BA4\u6B3E\u91D1\u989D\u4E4B\u548C")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "UNALLOT_AMT_AFTER"),
                createVNode("td", null, "NUMBER"),
                createVNode("td", null, "\u8BA4\u6B3E\u540E\u53EF\u8BA4\u6B3E\u91D1\u989D"),
                createVNode("td", null, "\u8BA4\u6B3E\u540E\u53EF\u8BA4\u6B3E\u91D1\u989D"),
                createVNode("td", null, "=\u8BA4\u6B3E\u524D-\u672C\u6B21\u8BA4\u6B3E\u5408\u8BA1")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "REMARK"),
                createVNode("td", null, "VARCHAR2"),
                createVNode("td", null, "\u5907\u6CE8"),
                createVNode("td", null, "\u5907\u6CE8"),
                createVNode("td", null, "\u7528\u6237\u8F93\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "STAT"),
                createVNode("td", null, "NUMBER"),
                createVNode("td", null, "\u5355\u636E\u72B6\u6001"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u65E7\u72B6\u6001\u5B57\u6BB5")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "WFID"),
                createVNode("td", null, "NUMBER"),
                createVNode("td", null, "\u6D41\u7A0BID"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u5DE5\u4F5C\u6D41ID")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "WFFLAG"),
                createVNode("td", null, "NUMBER"),
                createVNode("td", null, "\u6D41\u7A0B\u72B6\u6001"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u5DE5\u4F5C\u6D41\u72B6\u6001")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "IS_HOME"),
                createVNode("td", null, "NUMBER"),
                createVNode("td", null, "\u662F\u5426\u5BB6\u88C5"),
                createVNode("td", null, "\u662F\u5426\u5BB6\u88C5"),
                createVNode("td", null, "\u5DE5\u7A0B=0\uFF0C\u5BB6\u88C5=2")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "CLIENTNAME"),
                createVNode("td", null, "VARCHAR2"),
                createVNode("td", null, "\u533A\u5206APP\u4E0EPC"),
                createVNode("td", null, "-"),
                createVNode("td", null, "-")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "PAYMENT_IMPORT_ID"),
                createVNode("td", null, "NUMBER"),
                createVNode("td", null, "\u5230\u6B3E\u8BB0\u5F55\u5355ID"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u5173\u8054\u5230\u6B3E\u5F15\u5165\u5355")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "CLAIM_TYPE"),
                createVNode("td", null, "VARCHAR2"),
                createVNode("td", null, "\u8BA4\u9886\u65B9\u5F0F"),
                createVNode("td", null, "\u8BA4\u9886\u65B9\u5F0F"),
                createVNode("td", null, "auto/manual")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "PAYMENT_ALLOT_STAT"),
                createVNode("td", null, "VARCHAR2"),
                createVNode("td", null, "\u8BA4\u6B3E\u72B6\u6001"),
                createVNode("td", null, "\u8BA4\u6B3E\u72B6\u6001"),
                createVNode("td", null, "APPLYING/APPROVED/TRANSFER/ACCOUNTED/CANCEL")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "MANUAL_INVOICE_CLAIM"),
                createVNode("td", null, "VARCHAR2"),
                createVNode("td", null, "\u624B\u5DE5\u53D1\u7968\u8BA4\u9886\u6807\u8BC6"),
                createVNode("td", null, "\u624B\u5DE5\u53D1\u7968\u8BA4\u9886"),
                createVNode("td", null, "Y/N")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "HZ_APPROVE_STATUS"),
                createVNode("td", null, "VARCHAR2"),
                createVNode("td", null, "\u5BA1\u6279\u72B6\u6001"),
                createVNode("td", null, "\u5BA1\u6279\u72B6\u6001"),
                createVNode("td", null, "NEW/RUN/APPROVED/INTERRUPT")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "HZ_INSTANCE_ID"),
                createVNode("td", null, "NUMBER"),
                createVNode("td", null, "\u5BA1\u6279\u5B9E\u4F8BID"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u5DE5\u4F5C\u6D41\u5B9E\u4F8BID")
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, { title: "\u88682\uFF1AEPM_PAYMENT_ALLOT_LINE\uFF08\u56DE\u6B3E\u8BA4\u9886\u660E\u7EC6\u8868-\u5408\u540C\u884C\uFF09" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5B57\u6BB5\u540D</th><th${_scopeId}>\u7C7B\u578B</th><th${_scopeId}>\u91CA\u4E49</th><th${_scopeId}>\u5BF9\u5E94\u754C\u9762\u5B57\u6BB5</th><th${_scopeId}>\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>PAYMENT_ALLOT_LINE_ID</td><td${_scopeId}>NUMBER</td><td${_scopeId}>\u8BA4\u9886\u660E\u7EC6\u884CID</td><td${_scopeId}>-</td><td${_scopeId}>\u4E3B\u952E\uFF0C\u81EA\u589E</td></tr><tr${_scopeId}><td${_scopeId}>PAYMENT_ALLOT_ID</td><td${_scopeId}>NUMBER</td><td${_scopeId}>\u8BA4\u9886\u5355ID</td><td${_scopeId}>-</td><td${_scopeId}>\u5173\u8054\u5934\u8868</td></tr><tr${_scopeId}><td${_scopeId}>PAYMENT_PLAN_LINE_ID</td><td${_scopeId}>NUMBER</td><td${_scopeId}>\u56DE\u6B3E\u8BA1\u5212\u884CID</td><td${_scopeId}>-</td><td${_scopeId}>\u5173\u8054\u56DE\u6B3E\u8BA1\u5212</td></tr><tr${_scopeId}><td${_scopeId}>UNRECEIVE_AMT_BEFORE</td><td${_scopeId}>NUMBER</td><td${_scopeId}>\u8BA4\u6B3E\u524D\u5F85\u56DE\u6B3E\u91D1\u989D</td><td${_scopeId}>\u8BA4\u6B3E\u524D\u5F85\u56DE\u6B3E\u91D1\u989D</td><td${_scopeId}>\u81EA\u52A8\u5E26\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>ALLOT_AMT</td><td${_scopeId}>NUMBER</td><td${_scopeId}>\u672C\u6B21\u8BA4\u6B3E\u91D1\u989D</td><td${_scopeId}>\u672C\u6B21\u8BA4\u6B3E\u91D1\u989D</td><td${_scopeId}>\u7528\u6237\u8F93\u5165\uFF0C\u9700&gt;0</td></tr><tr${_scopeId}><td${_scopeId}>UNRECEIVE_AMT_AFTER</td><td${_scopeId}>NUMBER</td><td${_scopeId}>\u8BA4\u6B3E\u540E\u5F85\u56DE\u6B3E\u91D1\u989D</td><td${_scopeId}>\u8BA4\u6B3E\u540E\u5F85\u56DE\u6B3E\u91D1\u989D</td><td${_scopeId}>=\u8BA4\u6B3E\u524D-\u672C\u6B21\u8BA4\u6B3E</td></tr><tr${_scopeId}><td${_scopeId}>REMARK</td><td${_scopeId}>VARCHAR2</td><td${_scopeId}>\u884C\u5907\u6CE8</td><td${_scopeId}>\u884C\u5907\u6CE8</td><td${_scopeId}>\u7528\u6237\u8F93\u5165</td></tr><tr${_scopeId}><td${_scopeId}>PAYMENT_TYPE</td><td${_scopeId}>NUMBER</td><td${_scopeId}>\u8BA4\u6B3E\u6B3E\u9879</td><td${_scopeId}>\u8BA4\u6B3E\u6B3E\u9879</td><td${_scopeId}>\u6765\u6E90\u503C\u96C6pem.payment_type</td></tr><tr${_scopeId}><td${_scopeId}>CONTRACT_ID</td><td${_scopeId}>NUMBER</td><td${_scopeId}>\u5408\u540CID</td><td${_scopeId}>-</td><td${_scopeId}>\u5173\u8054\u9879\u76EE\u5408\u540C</td></tr><tr${_scopeId}><td${_scopeId}>CONTRACT_AMT_RECEIVED</td><td${_scopeId}>NUMBER</td><td${_scopeId}>\u5F53\u65F6\u5DF2\u56DE\u6B3E\u91D1\u989D</td><td${_scopeId}>-</td><td${_scopeId}>\u4FDD\u5B58\u65F6\u7684\u5DF2\u56DE\u6B3E\u91D1\u989D\u5FEB\u7167</td></tr><tr${_scopeId}><td${_scopeId}>ACTUAL_AMOUNT</td><td${_scopeId}>NUMBER</td><td${_scopeId}>\u5B9E\u9645\u7ED3\u7B97\u603B\u91D1\u989D</td><td${_scopeId}>-</td><td${_scopeId}>-</td></tr><tr${_scopeId}><td${_scopeId}>HAS_ALLOT_AMOUNT</td><td${_scopeId}>NUMBER</td><td${_scopeId}>\u5DF2\u8BA4\u9886\u91D1\u989D</td><td${_scopeId}>-</td><td${_scopeId}>-</td></tr><tr${_scopeId}><td${_scopeId}>CLAIM_WAY</td><td${_scopeId}>VARCHAR2</td><td${_scopeId}>\u8BA4\u9886\u65B9\u5F0F</td><td${_scopeId}>\u8BA4\u9886\u65B9\u5F0F</td><td${_scopeId}>-</td></tr><tr${_scopeId}><td${_scopeId}>CLAIM_PERCENT</td><td${_scopeId}>NUMBER</td><td${_scopeId}>\u8BA4\u9886\u6BD4\u4F8B</td><td${_scopeId}>\u8BA4\u9886\u6BD4\u4F8B</td><td${_scopeId}>-</td></tr><tr${_scopeId}><td${_scopeId}>CONTRACT_CODE</td><td${_scopeId}>VARCHAR2</td><td${_scopeId}>\u5408\u540C\u7F16\u7801</td><td${_scopeId}>\u5408\u540C\u7F16\u7801</td><td${_scopeId}>\u4ECE\u5408\u540C\u9009\u62E9\u5E26\u5165</td></tr><tr${_scopeId}><td${_scopeId}>CONTRACT_NAME</td><td${_scopeId}>VARCHAR2</td><td${_scopeId}>\u5408\u540C\u540D\u79F0</td><td${_scopeId}>\u5408\u540C\u540D\u79F0</td><td${_scopeId}>\u4ECE\u5408\u540C\u9009\u62E9\u5E26\u5165</td></tr><tr${_scopeId}><td${_scopeId}>PROJECT_CODE</td><td${_scopeId}>VARCHAR2</td><td${_scopeId}>\u9879\u76EE\u7F16\u7801</td><td${_scopeId}>\u9879\u76EE\u7F16\u7801</td><td${_scopeId}>\u4ECE\u9879\u76EE\u9009\u62E9\u5E26\u5165</td></tr><tr${_scopeId}><td${_scopeId}>PROJECT_NAME</td><td${_scopeId}>VARCHAR2</td><td${_scopeId}>\u9879\u76EE\u540D\u79F0</td><td${_scopeId}>\u9879\u76EE\u540D\u79F0</td><td${_scopeId}>\u4ECE\u9879\u76EE\u9009\u62E9\u5E26\u5165</td></tr></tbody></table>`);
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
                createVNode("td", null, "PAYMENT_ALLOT_LINE_ID"),
                createVNode("td", null, "NUMBER"),
                createVNode("td", null, "\u8BA4\u9886\u660E\u7EC6\u884CID"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u4E3B\u952E\uFF0C\u81EA\u589E")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "PAYMENT_ALLOT_ID"),
                createVNode("td", null, "NUMBER"),
                createVNode("td", null, "\u8BA4\u9886\u5355ID"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u5173\u8054\u5934\u8868")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "PAYMENT_PLAN_LINE_ID"),
                createVNode("td", null, "NUMBER"),
                createVNode("td", null, "\u56DE\u6B3E\u8BA1\u5212\u884CID"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u5173\u8054\u56DE\u6B3E\u8BA1\u5212")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "UNRECEIVE_AMT_BEFORE"),
                createVNode("td", null, "NUMBER"),
                createVNode("td", null, "\u8BA4\u6B3E\u524D\u5F85\u56DE\u6B3E\u91D1\u989D"),
                createVNode("td", null, "\u8BA4\u6B3E\u524D\u5F85\u56DE\u6B3E\u91D1\u989D"),
                createVNode("td", null, "\u81EA\u52A8\u5E26\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "ALLOT_AMT"),
                createVNode("td", null, "NUMBER"),
                createVNode("td", null, "\u672C\u6B21\u8BA4\u6B3E\u91D1\u989D"),
                createVNode("td", null, "\u672C\u6B21\u8BA4\u6B3E\u91D1\u989D"),
                createVNode("td", null, "\u7528\u6237\u8F93\u5165\uFF0C\u9700>0")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "UNRECEIVE_AMT_AFTER"),
                createVNode("td", null, "NUMBER"),
                createVNode("td", null, "\u8BA4\u6B3E\u540E\u5F85\u56DE\u6B3E\u91D1\u989D"),
                createVNode("td", null, "\u8BA4\u6B3E\u540E\u5F85\u56DE\u6B3E\u91D1\u989D"),
                createVNode("td", null, "=\u8BA4\u6B3E\u524D-\u672C\u6B21\u8BA4\u6B3E")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "REMARK"),
                createVNode("td", null, "VARCHAR2"),
                createVNode("td", null, "\u884C\u5907\u6CE8"),
                createVNode("td", null, "\u884C\u5907\u6CE8"),
                createVNode("td", null, "\u7528\u6237\u8F93\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "PAYMENT_TYPE"),
                createVNode("td", null, "NUMBER"),
                createVNode("td", null, "\u8BA4\u6B3E\u6B3E\u9879"),
                createVNode("td", null, "\u8BA4\u6B3E\u6B3E\u9879"),
                createVNode("td", null, "\u6765\u6E90\u503C\u96C6pem.payment_type")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "CONTRACT_ID"),
                createVNode("td", null, "NUMBER"),
                createVNode("td", null, "\u5408\u540CID"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u5173\u8054\u9879\u76EE\u5408\u540C")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "CONTRACT_AMT_RECEIVED"),
                createVNode("td", null, "NUMBER"),
                createVNode("td", null, "\u5F53\u65F6\u5DF2\u56DE\u6B3E\u91D1\u989D"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u4FDD\u5B58\u65F6\u7684\u5DF2\u56DE\u6B3E\u91D1\u989D\u5FEB\u7167")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "ACTUAL_AMOUNT"),
                createVNode("td", null, "NUMBER"),
                createVNode("td", null, "\u5B9E\u9645\u7ED3\u7B97\u603B\u91D1\u989D"),
                createVNode("td", null, "-"),
                createVNode("td", null, "-")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "HAS_ALLOT_AMOUNT"),
                createVNode("td", null, "NUMBER"),
                createVNode("td", null, "\u5DF2\u8BA4\u9886\u91D1\u989D"),
                createVNode("td", null, "-"),
                createVNode("td", null, "-")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "CLAIM_WAY"),
                createVNode("td", null, "VARCHAR2"),
                createVNode("td", null, "\u8BA4\u9886\u65B9\u5F0F"),
                createVNode("td", null, "\u8BA4\u9886\u65B9\u5F0F"),
                createVNode("td", null, "-")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "CLAIM_PERCENT"),
                createVNode("td", null, "NUMBER"),
                createVNode("td", null, "\u8BA4\u9886\u6BD4\u4F8B"),
                createVNode("td", null, "\u8BA4\u9886\u6BD4\u4F8B"),
                createVNode("td", null, "-")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "CONTRACT_CODE"),
                createVNode("td", null, "VARCHAR2"),
                createVNode("td", null, "\u5408\u540C\u7F16\u7801"),
                createVNode("td", null, "\u5408\u540C\u7F16\u7801"),
                createVNode("td", null, "\u4ECE\u5408\u540C\u9009\u62E9\u5E26\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "CONTRACT_NAME"),
                createVNode("td", null, "VARCHAR2"),
                createVNode("td", null, "\u5408\u540C\u540D\u79F0"),
                createVNode("td", null, "\u5408\u540C\u540D\u79F0"),
                createVNode("td", null, "\u4ECE\u5408\u540C\u9009\u62E9\u5E26\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "PROJECT_CODE"),
                createVNode("td", null, "VARCHAR2"),
                createVNode("td", null, "\u9879\u76EE\u7F16\u7801"),
                createVNode("td", null, "\u9879\u76EE\u7F16\u7801"),
                createVNode("td", null, "\u4ECE\u9879\u76EE\u9009\u62E9\u5E26\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "PROJECT_NAME"),
                createVNode("td", null, "VARCHAR2"),
                createVNode("td", null, "\u9879\u76EE\u540D\u79F0"),
                createVNode("td", null, "\u9879\u76EE\u540D\u79F0"),
                createVNode("td", null, "\u4ECE\u9879\u76EE\u9009\u62E9\u5E26\u5165")
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, { title: "\u88683\uFF1AEPM_PAYMENT_ALLOT_DETAIL\uFF08\u8BA4\u6B3E\u51FA\u5E93\u5355\u660E\u7EC6\u8868\uFF09" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5B57\u6BB5\u540D</th><th${_scopeId}>\u7C7B\u578B</th><th${_scopeId}>\u91CA\u4E49</th><th${_scopeId}>\u5BF9\u5E94\u754C\u9762\u5B57\u6BB5</th><th${_scopeId}>\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>PAYMENT_ALLOT_DETAIL_ID</td><td${_scopeId}>NUMBER</td><td${_scopeId}>\u8BA4\u9886\u51FA\u5E93\u660E\u7EC6ID</td><td${_scopeId}>-</td><td${_scopeId}>\u4E3B\u952E\uFF0C\u81EA\u589E</td></tr><tr${_scopeId}><td${_scopeId}>PAYMENT_ALLOT_LINE_ID</td><td${_scopeId}>NUMBER</td><td${_scopeId}>\u8BA4\u9886\u660E\u7EC6\u884CID</td><td${_scopeId}>-</td><td${_scopeId}>\u5173\u8054\u5408\u540C\u884C</td></tr><tr${_scopeId}><td${_scopeId}>SOURCE_ID</td><td${_scopeId}>NUMBER</td><td${_scopeId}>\u7B7E\u6536\u660E\u7EC6ID</td><td${_scopeId}>\u7B7E\u6536\u660E\u7EC6ID</td><td${_scopeId}>\u5173\u8054\u7B7E\u6536\u660E\u7EC6</td></tr><tr${_scopeId}><td${_scopeId}>LINE_NUMBER</td><td${_scopeId}>NUMBER</td><td${_scopeId}>ERP\u51FA\u5E93\u5355\u660E\u7EC6ID</td><td${_scopeId}>ERP\u51FA\u5E93\u5355\u660E\u7EC6ID</td><td${_scopeId}>ERP\u7CFB\u7EDF\u660E\u7EC6\u884CID</td></tr><tr${_scopeId}><td${_scopeId}>SOURCE_TYPE</td><td${_scopeId}>VARCHAR2</td><td${_scopeId}>\u6570\u636E\u6765\u6E90</td><td${_scopeId}>\u6570\u636E\u6765\u6E90</td><td${_scopeId}>-</td></tr><tr${_scopeId}><td${_scopeId}>CLAIM_AMT</td><td${_scopeId}>NUMBER</td><td${_scopeId}>\u672C\u6B21\u8BA4\u6B3E\u91D1\u989D</td><td${_scopeId}>\u672C\u6B21\u8BA4\u6B3E\u91D1\u989D</td><td${_scopeId}>\u7528\u6237\u8F93\u5165\uFF0C\u9700&gt;0\u4E14\u4E0D\u8D85\u5DE5\u7A0B\u91D1\u989D</td></tr><tr${_scopeId}><td${_scopeId}>RETURN_AMT</td><td${_scopeId}>NUMBER</td><td${_scopeId}>\u8FD8\u6B3E\u91D1\u989D</td><td${_scopeId}>\u8FD8\u6B3E\u91D1\u989D</td><td${_scopeId}>\u81EA\u52A8\u8BA1\u7B97=\uFF08\u7ECF\u9500\u5546\u91D1\u989D/\u5DE5\u7A0B\u65B9\u91D1\u989D\uFF09\xD7\u672C\u6B21\u8BA4\u9886\u91D1\u989D</td></tr><tr${_scopeId}><td${_scopeId}>CLAIM_PERCENT</td><td${_scopeId}>NUMBER</td><td${_scopeId}>\u8BA4\u6B3E\u6BD4\u4F8B</td><td${_scopeId}>\u8BA4\u6B3E\u6BD4\u4F8B</td><td${_scopeId}>-</td></tr><tr${_scopeId}><td${_scopeId}>ALLOW_CASH_FLAG</td><td${_scopeId}>VARCHAR2</td><td${_scopeId}>\u80FD\u5426\u5151\u73B0</td><td${_scopeId}>\u80FD\u5426\u5151\u73B0</td><td${_scopeId}>\u5546\u7968/\u94F6\u7968\u672A\u5151\u4ED8=N\uFF0C\u5426\u5219=Y</td></tr><tr${_scopeId}><td${_scopeId}>CANCEL_FLAG</td><td${_scopeId}>VARCHAR2</td><td${_scopeId}>\u662F\u5426\u64A4\u9500</td><td${_scopeId}>-</td><td${_scopeId}>\u64A4\u9500\u65F6\u7F6E\u4E3AY\uFF0C\u9ED8\u8BA4N</td></tr><tr${_scopeId}><td${_scopeId}>CLAIM_SERVICE_AMT</td><td${_scopeId}>NUMBER</td><td${_scopeId}>\u672C\u6B21\u8BA4\u9886\u5DE5\u7A0B\u670D\u52A1\u8D39</td><td${_scopeId}>\u672C\u6B21\u8BA4\u9886\u5DE5\u7A0B\u670D\u52A1\u8D39</td><td${_scopeId}>\u7528\u6237\u8F93\u5165</td></tr></tbody></table>`);
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
                createVNode("td", null, "PAYMENT_ALLOT_DETAIL_ID"),
                createVNode("td", null, "NUMBER"),
                createVNode("td", null, "\u8BA4\u9886\u51FA\u5E93\u660E\u7EC6ID"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u4E3B\u952E\uFF0C\u81EA\u589E")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "PAYMENT_ALLOT_LINE_ID"),
                createVNode("td", null, "NUMBER"),
                createVNode("td", null, "\u8BA4\u9886\u660E\u7EC6\u884CID"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u5173\u8054\u5408\u540C\u884C")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "SOURCE_ID"),
                createVNode("td", null, "NUMBER"),
                createVNode("td", null, "\u7B7E\u6536\u660E\u7EC6ID"),
                createVNode("td", null, "\u7B7E\u6536\u660E\u7EC6ID"),
                createVNode("td", null, "\u5173\u8054\u7B7E\u6536\u660E\u7EC6")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "LINE_NUMBER"),
                createVNode("td", null, "NUMBER"),
                createVNode("td", null, "ERP\u51FA\u5E93\u5355\u660E\u7EC6ID"),
                createVNode("td", null, "ERP\u51FA\u5E93\u5355\u660E\u7EC6ID"),
                createVNode("td", null, "ERP\u7CFB\u7EDF\u660E\u7EC6\u884CID")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "SOURCE_TYPE"),
                createVNode("td", null, "VARCHAR2"),
                createVNode("td", null, "\u6570\u636E\u6765\u6E90"),
                createVNode("td", null, "\u6570\u636E\u6765\u6E90"),
                createVNode("td", null, "-")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "CLAIM_AMT"),
                createVNode("td", null, "NUMBER"),
                createVNode("td", null, "\u672C\u6B21\u8BA4\u6B3E\u91D1\u989D"),
                createVNode("td", null, "\u672C\u6B21\u8BA4\u6B3E\u91D1\u989D"),
                createVNode("td", null, "\u7528\u6237\u8F93\u5165\uFF0C\u9700>0\u4E14\u4E0D\u8D85\u5DE5\u7A0B\u91D1\u989D")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "RETURN_AMT"),
                createVNode("td", null, "NUMBER"),
                createVNode("td", null, "\u8FD8\u6B3E\u91D1\u989D"),
                createVNode("td", null, "\u8FD8\u6B3E\u91D1\u989D"),
                createVNode("td", null, "\u81EA\u52A8\u8BA1\u7B97=\uFF08\u7ECF\u9500\u5546\u91D1\u989D/\u5DE5\u7A0B\u65B9\u91D1\u989D\uFF09\xD7\u672C\u6B21\u8BA4\u9886\u91D1\u989D")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "CLAIM_PERCENT"),
                createVNode("td", null, "NUMBER"),
                createVNode("td", null, "\u8BA4\u6B3E\u6BD4\u4F8B"),
                createVNode("td", null, "\u8BA4\u6B3E\u6BD4\u4F8B"),
                createVNode("td", null, "-")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "ALLOW_CASH_FLAG"),
                createVNode("td", null, "VARCHAR2"),
                createVNode("td", null, "\u80FD\u5426\u5151\u73B0"),
                createVNode("td", null, "\u80FD\u5426\u5151\u73B0"),
                createVNode("td", null, "\u5546\u7968/\u94F6\u7968\u672A\u5151\u4ED8=N\uFF0C\u5426\u5219=Y")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "CANCEL_FLAG"),
                createVNode("td", null, "VARCHAR2"),
                createVNode("td", null, "\u662F\u5426\u64A4\u9500"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u64A4\u9500\u65F6\u7F6E\u4E3AY\uFF0C\u9ED8\u8BA4N")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "CLAIM_SERVICE_AMT"),
                createVNode("td", null, "NUMBER"),
                createVNode("td", null, "\u672C\u6B21\u8BA4\u9886\u5DE5\u7A0B\u670D\u52A1\u8D39"),
                createVNode("td", null, "\u672C\u6B21\u8BA4\u9886\u5DE5\u7A0B\u670D\u52A1\u8D39"),
                createVNode("td", null, "\u7528\u6237\u8F93\u5165")
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
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u62A5\u9519\u4FE1\u606F</th><th${_scopeId}>\u63D0\u793A\u8282\u70B9</th><th${_scopeId}>\u6839\u56E0\u4E0E\u89E3\u51B3\u65B9\u6848</th><th${_scopeId}>\u7B49\u7EA7</th><th${_scopeId}>\u8BE6\u7EC6\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u4E8B\u4E1A\u90E8\u4FE1\u606F\u4E3A\u7A7A</td><td${_scopeId}>\u4FDD\u5B58</td><td${_scopeId}>\u7528\u6237\u4E0A\u4E0B\u6587\u7F3A\u5C11\u4E8B\u4E1A\u90E8\u4FE1\u606F\uFF0C\u8054\u7CFB\u7BA1\u7406\u5458\u8865\u5145\u4E8B\u4E1A\u90E8\u914D\u7F6E</td><td${_scopeId}>\u963B\u65AD\u6027\u62A5\u9519</td><td${_scopeId}>[\u67E5\u770B]</td></tr><tr${_scopeId}><td${_scopeId}>\u672A\u627E\u5230\u8BE5\u5230\u6B3E\u5355</td><td${_scopeId}>\u4FDD\u5B58/\u63D0\u4EA4</td><td${_scopeId}>\u5230\u6B3E\u5F15\u5165\u5355\u4E0D\u5B58\u5728\u6216\u5DF2\u5220\u9664\uFF0C\u68C0\u67E5paymentImportId</td><td${_scopeId}>\u963B\u65AD\u6027\u62A5\u9519</td><td${_scopeId}>[\u67E5\u770B]</td></tr><tr${_scopeId}><td${_scopeId}>\u672C\u6B21\u8BA4\u6B3E\u91D1\u989D\u5408\u8BA1\u5927\u4E8E\u5230\u6B3E\u63A5\u53E3\u5269\u4F59\u8BA4\u6B3E\u91D1\u989D</td><td${_scopeId}>\u4FDD\u5B58/\u63D0\u4EA4</td><td${_scopeId}>\u5E76\u53D1\u8BA4\u9886\u6216\u91D1\u989D\u8D85\u9650\uFF0C\u5237\u65B0\u540E\u91CD\u65B0\u8BA4\u9886</td><td${_scopeId}>\u963B\u65AD\u6027\u62A5\u9519</td><td${_scopeId}>[\u67E5\u770B]</td></tr><tr${_scopeId}><td${_scopeId}>\u5DF2\u8BA4\u9886\u91D1\u989D+\u672C\u6B21\u8BA4\u9886\u91D1\u989D\u5DF2\u8D85\u5DE5\u7A0B\u91D1\u989D</td><td${_scopeId}>\u4FDD\u5B58</td><td${_scopeId}>\u51FA\u5E93\u660E\u7EC6\u8BA4\u9886\u91D1\u989D\u8D85\u9650\uFF0C\u51CF\u5C11\u672C\u6B21\u8BA4\u9886\u91D1\u989D</td><td${_scopeId}>\u963B\u65AD\u6027\u62A5\u9519</td><td${_scopeId}>[\u67E5\u770B]</td></tr><tr${_scopeId}><td${_scopeId}>\u5220\u9664\u5F02\u5E38\uFF1A\u65B0\u5EFA\u72B6\u6001\u4E0B\u7684\u8BA4\u9886\u624D\u53EF\u5220\u9664</td><td${_scopeId}>\u5220\u9664</td><td${_scopeId}>\u8BA4\u9886\u5355\u5DF2\u63D0\u4EA4\u6216\u5DF2\u5BA1\u6279\uFF0C\u4E0D\u53EF\u5220\u9664</td><td${_scopeId}>\u963B\u65AD\u6027\u62A5\u9519</td><td${_scopeId}>[\u67E5\u770B]</td></tr><tr${_scopeId}><td${_scopeId}>\u6D41\u7A0B\u53D1\u8D77\u5F02\u5E38\uFF0C\u5355\u636E\u4E3B\u952E\u4E3A\u7A7A</td><td${_scopeId}>\u63D0\u4EA4</td><td${_scopeId}>\u5DE5\u4F5C\u6D41\u56DE\u8C03\u7F3A\u5C11\u5355\u636EID\uFF0C\u68C0\u67E5\u5DE5\u4F5C\u6D41\u914D\u7F6E</td><td${_scopeId}>\u963B\u65AD\u6027\u62A5\u9519</td><td${_scopeId}>[\u67E5\u770B]</td></tr><tr${_scopeId}><td${_scopeId}>\u6D41\u7A0B\u53D1\u8D77\u5F02\u5E38\uFF0C\u5355\u636E\u4E0D\u5B58\u5728</td><td${_scopeId}>\u63D0\u4EA4</td><td${_scopeId}>\u8BA4\u9886\u5355\u5DF2\u88AB\u5220\u9664\uFF0C\u5237\u65B0\u5217\u8868</td><td${_scopeId}>\u963B\u65AD\u6027\u62A5\u9519</td><td${_scopeId}>[\u67E5\u770B]</td></tr><tr${_scopeId}><td${_scopeId}>\u6D41\u7A0B\u53D1\u8D77\u5F02\u5E38\uFF0C\u5230\u6B3E\u5355\u4E0D\u5B58\u5728</td><td${_scopeId}>\u63D0\u4EA4</td><td${_scopeId}>\u5230\u6B3E\u5F15\u5165\u5355\u5DF2\u88AB\u5220\u9664\uFF0C\u68C0\u67E5\u6570\u636E</td><td${_scopeId}>\u963B\u65AD\u6027\u62A5\u9519</td><td${_scopeId}>[\u67E5\u770B]</td></tr><tr${_scopeId}><td${_scopeId}>\u67E5\u8BE2\u8BA4\u9886\u6570\u636E\u4E3A\u7A7A</td><td${_scopeId}>\u63A8\u9001ERP</td><td${_scopeId}>\u8BA4\u9886\u5355\u6570\u636E\u5F02\u5E38\uFF0C\u68C0\u67E5\u5934\u884C\u6570\u636E\u5B8C\u6574\u6027</td><td${_scopeId}>\u963B\u65AD\u6027\u62A5\u9519</td><td${_scopeId}>[\u67E5\u770B]</td></tr><tr${_scopeId}><td${_scopeId}>erp\u8FD4\u56DE\u8BA4\u9886\u7ED3\u679C\u4E3A\u7A7A</td><td${_scopeId}>\u63A8\u9001ERP</td><td${_scopeId}>ERP\u63A5\u53E3\u5F02\u5E38\uFF0C\u68C0\u67E5ERP\u670D\u52A1\u72B6\u6001</td><td${_scopeId}>\u963B\u65AD\u6027\u62A5\u9519</td><td${_scopeId}>[\u67E5\u770B]</td></tr><tr${_scopeId}><td${_scopeId}>\u8BA4\u9886\u63A8\u9001erp\u5F02\u5E38</td><td${_scopeId}>\u63A8\u9001ERP</td><td${_scopeId}>ERP\u8FD4\u56DE\u9519\u8BEF\u4FE1\u606F\uFF0C\u67E5\u770B\u5177\u4F53\u9519\u8BEF\u5185\u5BB9</td><td${_scopeId}>\u963B\u65AD\u6027\u62A5\u9519</td><td${_scopeId}>[\u67E5\u770B]</td></tr><tr${_scopeId}><td${_scopeId}>\u67E5\u8BE2\u9879\u76EE\u5217\u8868\u5F02\u5E38\uFF0C\u672A\u6307\u5B9A\u5BA2\u6237id</td><td${_scopeId}>\u67E5\u8BE2\u53EF\u8BA4\u9886\u9879\u76EE</td><td${_scopeId}>\u5230\u6B3E\u5355\u7F3A\u5C11\u5BA2\u6237\u4FE1\u606F\uFF0C\u68C0\u67E5\u5230\u6B3E\u5F15\u5165\u6570\u636E</td><td${_scopeId}>\u963B\u65AD\u6027\u62A5\u9519</td><td${_scopeId}>[\u67E5\u770B]</td></tr><tr${_scopeId}><td${_scopeId}>\u9879\u76EE\u5230\u6B3E\u5F15\u5165\u6570\u636E\u5F02\u5E38</td><td${_scopeId}>\u67E5\u8BE2\u51FA\u5E93\u660E\u7EC6</td><td${_scopeId}>\u5230\u6B3E\u5F15\u5165\u5355\u4E0D\u5B58\u5728\uFF0C\u68C0\u67E5paymentImportId</td><td${_scopeId}>\u963B\u65AD\u6027\u62A5\u9519</td><td${_scopeId}>[\u67E5\u770B]</td></tr><tr${_scopeId}><td${_scopeId}>\u9879\u76EE\u5408\u540C\u76F8\u5173\u4FE1\u606F\u5F02\u5E38</td><td${_scopeId}>\u67E5\u8BE2\u51FA\u5E93\u660E\u7EC6</td><td${_scopeId}>\u8BE5\u9879\u76EE\u4E0B\u65E0\u5DF2\u5BA1\u6279\u901A\u8FC7\u7684\u5408\u540C\uFF0C\u68C0\u67E5\u5408\u540C\u5BA1\u6279\u72B6\u6001</td><td${_scopeId}>\u963B\u65AD\u6027\u62A5\u9519</td><td${_scopeId}>[\u67E5\u770B]</td></tr><tr${_scopeId}><td${_scopeId}>\u5355\u636Eid\u5F02\u5E38\uFF0C\u6838\u9500\u63A5\u53E3\u8FD4\u56DE\u4FE1\u606F</td><td${_scopeId}>\u63A8\u9001ERP</td><td${_scopeId}>ERP\u6838\u9500\u63A5\u53E3\u8FD4\u56DE\u975ES\u72B6\u6001\uFF0C\u67E5\u770B\u5177\u4F53\u8FD4\u56DE\u4FE1\u606F</td><td${_scopeId}>\u963B\u65AD\u6027\u62A5\u9519</td><td${_scopeId}>[\u67E5\u770B]</td></tr><tr${_scopeId}><td${_scopeId}>\u6D41\u7A0B\u5B8C\u7ED3\u5F02\u5E38\uFF0C\u5355\u636E\u4E3B\u952E\u4E3A\u7A7A</td><td${_scopeId}>\u5BA1\u6279\u5B8C\u7ED3</td><td${_scopeId}>\u5DE5\u4F5C\u6D41\u56DE\u8C03\u7F3A\u5C11\u5355\u636EID\uFF0C\u68C0\u67E5\u5DE5\u4F5C\u6D41\u914D\u7F6E</td><td${_scopeId}>\u963B\u65AD\u6027\u62A5\u9519</td><td${_scopeId}>[\u67E5\u770B]</td></tr><tr${_scopeId}><td${_scopeId}>\u6D41\u7A0B\u5B8C\u7ED3\u5F02\u5E38\uFF0C\u5355\u636E\u4E0D\u5B58\u5728</td><td${_scopeId}>\u5BA1\u6279\u5B8C\u7ED3</td><td${_scopeId}>\u8BA4\u9886\u5355\u5DF2\u88AB\u5220\u9664\uFF0C\u5237\u65B0\u5217\u8868</td><td${_scopeId}>\u963B\u65AD\u6027\u62A5\u9519</td><td${_scopeId}>[\u67E5\u770B]</td></tr><tr${_scopeId}><td${_scopeId}>\u6D41\u7A0B\u7EC8\u6B62\u5F02\u5E38\uFF0C\u5355\u636E\u4E3B\u952E\u4E3A\u7A7A</td><td${_scopeId}>\u6D41\u7A0B\u7EC8\u6B62</td><td${_scopeId}>\u5DE5\u4F5C\u6D41\u7EC8\u6B62\u56DE\u8C03\u7F3A\u5C11\u5355\u636EID\uFF0C\u68C0\u67E5\u5DE5\u4F5C\u6D41\u914D\u7F6E</td><td${_scopeId}>\u963B\u65AD\u6027\u62A5\u9519</td><td${_scopeId}>[\u67E5\u770B]</td></tr><tr${_scopeId}><td${_scopeId}>\u5230\u6B3E\u8BA4\u9886\u5F02\u5E38\uFF0C\u672A\u6307\u5B9A\u5230\u6B3E\u5355id</td><td${_scopeId}>\u67E5\u8BE2\u8BA4\u9886</td><td${_scopeId}>\u5230\u6B3E\u5355ID\u672A\u6307\u5B9A\uFF0C\u4F20\u5165\u6709\u6548\u5230\u6B3E\u5355ID</td><td${_scopeId}>\u963B\u65AD\u6027\u62A5\u9519</td><td${_scopeId}>[\u67E5\u770B]</td></tr><tr${_scopeId}><td${_scopeId}>\u67E5\u8BE2\u5230\u6B3E\u8BA4\u9886\u5355\u6570\u636E\u4E3A\u7A7A</td><td${_scopeId}>\u67E5\u8BE2\u8BA4\u9886</td><td${_scopeId}>\u8BA4\u9886\u5355\u6570\u636E\u4E3A\u7A7A\uFF0C\u68C0\u67E5\u8BA4\u9886\u5355ID</td><td${_scopeId}>\u963B\u65AD\u6027\u62A5\u9519</td><td${_scopeId}>[\u67E5\u770B]</td></tr><tr${_scopeId}><td${_scopeId}>\u67E5\u8BE2\u9879\u76EE\u5217\u8868\u5F02\u5E38\uFF0C\u672A\u6307\u5B9A\u4EA4\u6613\u516C\u53F8id</td><td${_scopeId}>\u67E5\u8BE2\u53EF\u8BA4\u9886\u9879\u76EE</td><td${_scopeId}>\u5230\u6B3E\u5355\u7F3A\u5C11\u4EA4\u6613\u516C\u53F8\u4FE1\u606F\uFF0C\u68C0\u67E5\u5230\u6B3E\u5F15\u5165\u6570\u636E</td><td${_scopeId}>\u963B\u65AD\u6027\u62A5\u9519</td><td${_scopeId}>[\u67E5\u770B]</td></tr><tr${_scopeId}><td${_scopeId}>\u67E5\u8BE2\u9879\u76EE\u5217\u8868\u5F02\u5E38\uFF0C\u672A\u6307\u5B9A\u6536\u6B3E\u516C\u53F8id</td><td${_scopeId}>\u67E5\u8BE2\u53EF\u8BA4\u9886\u9879\u76EE</td><td${_scopeId}>\u5230\u6B3E\u5355\u7F3A\u5C11\u6536\u6B3E\u516C\u53F8\u4FE1\u606F\uFF0C\u68C0\u67E5\u5230\u6B3E\u5F15\u5165\u6570\u636E</td><td${_scopeId}>\u963B\u65AD\u6027\u62A5\u9519</td><td${_scopeId}>[\u67E5\u770B]</td></tr><tr${_scopeId}><td${_scopeId}>\u67E5\u8BE2\u5408\u540C\u5217\u8868\u5F02\u5E38\uFF0C\u672A\u6307\u5B9A\u9879\u76EEid</td><td${_scopeId}>\u67E5\u8BE2\u53EF\u8BA4\u9886\u5408\u540C</td><td${_scopeId}>\u672A\u6307\u5B9A\u9879\u76EEID\uFF0C\u5148\u9009\u62E9\u9879\u76EE</td><td${_scopeId}>\u963B\u65AD\u6027\u62A5\u9519</td><td${_scopeId}>[\u67E5\u770B]</td></tr><tr${_scopeId}><td${_scopeId}>\u67E5\u8BE2\u53EF\u8BA4\u9886\u660E\u7EC6\u5F02\u5E38\uFF0C\u672A\u6307\u5B9A\u9879\u76EEid</td><td${_scopeId}>\u67E5\u8BE2\u53EF\u8BA4\u9886\u660E\u7EC6</td><td${_scopeId}>\u672A\u6307\u5B9A\u9879\u76EEID\uFF0C\u5148\u9009\u62E9\u9879\u76EE</td><td${_scopeId}>\u963B\u65AD\u6027\u62A5\u9519</td><td${_scopeId}>[\u67E5\u770B]</td></tr><tr${_scopeId}><td${_scopeId}>\u672A\u6307\u5B9A\u5230\u6B3E\u8BA4\u9886id</td><td${_scopeId}>\u83B7\u53D6\u5269\u4F59\u91D1\u989D</td><td${_scopeId}>\u8BA4\u9886\u5355ID\u672A\u6307\u5B9A\uFF0C\u4F20\u5165\u6709\u6548\u8BA4\u9886\u5355ID</td><td${_scopeId}>\u963B\u65AD\u6027\u62A5\u9519</td><td${_scopeId}>[\u67E5\u770B]</td></tr><tr${_scopeId}><td${_scopeId}>\u672A\u627E\u5230\u8BE5\u5230\u6B3E\u8BA4\u9886</td><td${_scopeId}>\u83B7\u53D6\u5269\u4F59\u91D1\u989D</td><td${_scopeId}>\u8BA4\u9886\u5355\u4E0D\u5B58\u5728\u6216\u5DF2\u5220\u9664\uFF0C\u68C0\u67E5\u8BA4\u9886\u5355ID</td><td${_scopeId}>\u963B\u65AD\u6027\u62A5\u9519</td><td${_scopeId}>[\u67E5\u770B]</td></tr><tr${_scopeId}><td${_scopeId}>\u5220\u9664\u5F02\u5E38\uFF1A\u672A\u6307\u5B9A\u5230\u6B3E\u8BA4\u9886id</td><td${_scopeId}>\u5220\u9664</td><td${_scopeId}>\u8BA4\u9886\u5355ID\u672A\u6307\u5B9A\uFF0C\u4F20\u5165\u6709\u6548\u8BA4\u9886\u5355ID</td><td${_scopeId}>\u963B\u65AD\u6027\u62A5\u9519</td><td${_scopeId}>[\u67E5\u770B]</td></tr><tr${_scopeId}><td${_scopeId}>\u5220\u9664\u5F02\u5E38\uFF1A\u672A\u67E5\u8BE2\u5230\u8BE5\u8BA4\u9886\u5355</td><td${_scopeId}>\u5220\u9664</td><td${_scopeId}>\u8BA4\u9886\u5355\u4E0D\u5B58\u5728\uFF0C\u5237\u65B0\u5217\u8868</td><td${_scopeId}>\u963B\u65AD\u6027\u62A5\u9519</td><td${_scopeId}>[\u67E5\u770B]</td></tr><tr${_scopeId}><td${_scopeId}>\u5220\u9664\u5F02\u5E38\uFF1A\u672A\u627E\u5230\u8BE5\u5230\u6B3E\u5355</td><td${_scopeId}>\u5220\u9664</td><td${_scopeId}>\u5230\u6B3E\u5F15\u5165\u5355\u4E0D\u5B58\u5728\uFF0C\u68C0\u67E5\u5230\u6B3E\u5F15\u5165\u6570\u636E</td><td${_scopeId}>\u963B\u65AD\u6027\u62A5\u9519</td><td${_scopeId}>[\u67E5\u770B]</td></tr></tbody></table><h4${_scopeId}>\u62A5\u95191\uFF1A\u4E8B\u4E1A\u90E8\u4FE1\u606F\u4E3A\u7A7A</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u4FDD\u5B58\u8BA4\u9886\u5355\u65F6\uFF0C\u5F53\u524D\u7528\u6237\u4E0A\u4E0B\u6587\u7F3A\u5C11\u4E8B\u4E1A\u90E8(ORGANIZATION_ID)\u4FE1\u606F</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u4FDD\u5B58\u65B9\u6CD5\u4E2D\u901A\u8FC7DetailsHelper.getUserDetail()\u83B7\u53D6\u7528\u6237\u4E8B\u4E1A\u90E8\u4FE1\u606F\uFF0C\u82E5\u4E3A\u7A7A\u5219\u629B\u51FA\u963B\u65AD\u6027\u62A5\u9519\u3002\u9700\u8054\u7CFB\u7BA1\u7406\u5458\u8865\u5145\u4E8B\u4E1A\u90E8\u914D\u7F6E</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> iu.USER_ID, iu.LOGIN_NAME, iu.REAL_NAME, iu.ORGANIZATION_ID, iu.DEPT_ID</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> IAM_USER iu</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> iu.USER_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> :currentUserId</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- \u82E5ORGANIZATION_ID\u4E3A\u7A7A\uFF0C\u5219\u9700\u8865\u5145\u7528\u6237\u4E8B\u4E1A\u90E8\u914D\u7F6E</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95192\uFF1A\u672A\u627E\u5230\u8BE5\u5230\u6B3E\u5355</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u4FDD\u5B58\u6216\u63D0\u4EA4\u8BA4\u9886\u5355\u65F6\uFF0C\u5230\u6B3E\u5F15\u5165\u5355(PAYMENT_IMPORT_ID)\u4E0D\u5B58\u5728\u6216\u5DF2\u5220\u9664</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u4FDD\u5B58/\u63D0\u4EA4\u65B9\u6CD5\u4E2D\u6309PAYMENT_IMPORT_ID\u67E5\u8BE2EPM_PAYMENT_IMPORT\uFF0C\u82E5\u8FD4\u56DEnull\u5219\u629B\u51FA\u963B\u65AD\u6027\u62A5\u9519\u3002\u9700\u68C0\u67E5paymentImportId\u6709\u6548\u6027</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> epi.PAYMENT_IMPORT_ID, epi.PAYMENT_IMPORT_CODE, epi.PAYMENT_STATUS, epi.IS_CASHOUT, epi.VALID</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> EPM_PAYMENT_IMPORT epi</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> epi.PAYMENT_IMPORT_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> :paymentImportId</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- \u82E5\u8FD4\u56DE\u7A7A\uFF0C\u8BF4\u660E\u5230\u6B3E\u5355\u4E0D\u5B58\u5728</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95193\uFF1A\u672C\u6B21\u8BA4\u6B3E\u91D1\u989D\u5408\u8BA1\u5927\u4E8E\u5230\u6B3E\u63A5\u53E3\u5269\u4F59\u8BA4\u6B3E\u91D1\u989D</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u4FDD\u5B58\u6216\u63D0\u4EA4\u8BA4\u9886\u5355\u65F6\uFF0C\u672C\u6B21\u8BA4\u6B3E\u91D1\u989D\u5408\u8BA1\u8D85\u8FC7\u5230\u6B3E\u5355\u5269\u4F59\u53EF\u8BA4\u9886\u91D1\u989D</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u4FDD\u5B58/\u63D0\u4EA4\u6821\u9A8C\u4E2D\u67E5\u8BE2\u5230\u6B3E\u5355\u5269\u4F59\u53EF\u8BA4\u9886\u91D1\u989D(\u865A\u62DF\u5355\u67E5DB/\u5B9E\u9645\u5355\u5B9E\u65F6\u67E5ERP)\uFF0C\u82E5\u672C\u6B21\u8BA4\u9886\u91D1\u989D\u5408\u8BA1&gt;\u5269\u4F59\u91D1\u989D\u5219\u629B\u51FA\u963B\u65AD\u6027\u62A5\u9519\u3002\u53EF\u80FD\u539F\u56E0\uFF1A\u5E76\u53D1\u8BA4\u9886\u5360\u7528\u91D1\u989D\u3001\u91D1\u989D\u8D85\u9650\u3002\u9700\u5237\u65B0\u540E\u91CD\u65B0\u8BA4\u9886</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> epi.PAYMENT_IMPORT_ID, epi.PAYMENT_IMPORT_CODE, epi.RECEIVE_AMT, epi.ALLOTED_AMT,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         epi.UNALLOT_AMT, epi.RECEIVE_AMT </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>-</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> epi.ALLOTED_AMT </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5269\u4F59\u53EF\u8BA4\u9886\u91D1\u989D</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> EPM_PAYMENT_IMPORT epi</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> epi.PAYMENT_IMPORT_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> :paymentImportId</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- \u5BF9\u6BD4\u672C\u6B21\u8BA4\u9886\u91D1\u989D\u5408\u8BA1\u4E0E\u5269\u4F59\u53EF\u8BA4\u9886\u91D1\u989D</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95194\uFF1A\u5DF2\u8BA4\u9886\u91D1\u989D+\u672C\u6B21\u8BA4\u9886\u91D1\u989D\u5DF2\u8D85\u5DE5\u7A0B\u91D1\u989D</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u4FDD\u5B58\u8BA4\u9886\u5355\u65F6\uFF0C\u51FA\u5E93\u660E\u7EC6\u7684\u5DF2\u8BA4\u9886\u91D1\u989D+\u672C\u6B21\u8BA4\u9886\u91D1\u989D\u8D85\u8FC7\u5DE5\u7A0B\u91D1\u989D</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u4FDD\u5B58\u6821\u9A8C\u4E2D\u6309\u51FA\u5E93\u660E\u7EC6\u67E5\u8BE2\u5DF2\u8BA4\u9886\u91D1\u989D\uFF0C\u52A0\u4E0A\u672C\u6B21\u8BA4\u9886\u91D1\u989D\u82E5\u8D85\u8FC7\u5DE5\u7A0B\u91D1\u989D\u5219\u629B\u51FA\u963B\u65AD\u6027\u62A5\u9519\u3002\u9700\u51CF\u5C11\u672C\u6B21\u8BA4\u9886\u91D1\u989D</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> epad.PAYMENT_ALLOT_DETAIL_ID, epad.INV_BILL_NO, epad.ITEM_CODE,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         epad.CONTRACT_AMT, epad.ALLOTTED_AMT, epad.THIS_ALLOT_AMT,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         epad.ALLOTTED_AMT </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>+</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> epad.THIS_ALLOT_AMT </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u8BA4\u9886\u540E\u91D1\u989D</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> EPM_PAYMENT_ALLOT_DETAIL epad</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> epad.PAYMENT_ALLOT_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> :paymentAllotId</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> epad.ALLOTTED_AMT </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>+</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> epad.THIS_ALLOT_AMT </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> epad.CONTRACT_AMT</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- \u67E5\u51FA\u8BA4\u9886\u91D1\u989D\u8D85\u5DE5\u7A0B\u91D1\u989D\u7684\u660E\u7EC6</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95195\uFF1A\u5220\u9664\u5F02\u5E38\uFF1A\u65B0\u5EFA\u72B6\u6001\u4E0B\u7684\u8BA4\u9886\u624D\u53EF\u5220\u9664</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u5220\u9664\u8BA4\u9886\u5355\u65F6\uFF0C\u8BA4\u9886\u5355\u72B6\u6001(HZ_APPROVE_STATUS)\u975ENEW(\u65B0\u5EFA)\u6216INTERRUPT(\u9A73\u56DE)</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1Adelete\u65B9\u6CD5\u4E2D\u6821\u9A8C\u8BA4\u9886\u5355\u72B6\u6001\u4E3ANEW\u6216INTERRUPT\uFF0C\u5176\u4ED6\u72B6\u6001(\u5BA1\u6279\u4E2D/\u5DF2\u901A\u8FC7)\u4E0D\u5141\u8BB8\u5220\u9664\u3002\u5DF2\u5BA1\u6279\u901A\u8FC7\u7684\u8BA4\u9886\u5355\u9700\u8D70\u64A4\u9500\u6D41\u7A0B</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> epa.PAYMENT_ALLOT_ID, epa.PAYMENT_ALLOT_CODE, epa.HZ_APPROVE_STATUS, epa.VALID</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> EPM_PAYMENT_ALLOT epa</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> epa.PAYMENT_ALLOT_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> :paymentAllotId</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- \u671F\u671B HZ_APPROVE_STATUS IN (&#39;NEW&#39;, &#39;INTERRUPT&#39;)\uFF0C\u5426\u5219\u4E0D\u5141\u8BB8\u5220\u9664</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95196\uFF1A\u6D41\u7A0B\u53D1\u8D77\u5F02\u5E38\uFF0C\u5355\u636E\u4E3B\u952E\u4E3A\u7A7A</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u63D0\u4EA4\u8BA4\u9886\u5355\u65F6\uFF0C\u5DE5\u4F5C\u6D41\u56DE\u8C03\u7F3A\u5C11\u5355\u636EID(objId\u4E3A\u7A7A)</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u5DE5\u4F5C\u6D41\u56DE\u8C03\u65B9\u6CD5\u4E2D\u6821\u9A8CobjId\u975E\u7A7A\uFF0C\u56E0\u9700\u6309\u5355\u636EID\u5B9A\u4F4D\u8BA4\u9886\u5355\u8BB0\u5F55\u3002\u8BE5\u62A5\u9519\u4E3A\u963B\u65AD\u6027\u62A5\u9519\uFF0C\u9700\u68C0\u67E5\u5DE5\u4F5C\u6D41\u914D\u7F6E</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> epa.PAYMENT_ALLOT_ID, epa.PAYMENT_ALLOT_CODE, epa.HZ_INSTANCE_ID, epa.HZ_APPROVE_STATUS</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> EPM_PAYMENT_ALLOT epa</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> epa.PAYMENT_ALLOT_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> :paymentAllotId</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- \u6821\u9A8C\u8BA4\u9886\u5355ID\u662F\u5426\u5B58\u5728</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95197\uFF1A\u6D41\u7A0B\u53D1\u8D77\u5F02\u5E38\uFF0C\u5355\u636E\u4E0D\u5B58\u5728</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u63D0\u4EA4\u8BA4\u9886\u5355\u65F6\uFF0C\u6309\u5355\u636EID\u67E5\u8BE2EPM_PAYMENT_ALLOT\u8FD4\u56DEnull</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u5DE5\u4F5C\u6D41\u56DE\u8C03\u65B9\u6CD5\u4E2D\u6309PAYMENT_ALLOT_ID\u67E5\u8BE2\u8BA4\u9886\u5355\uFF0C\u82E5\u8FD4\u56DEnull\u5219\u629B\u51FA\u963B\u65AD\u6027\u62A5\u9519\u3002\u53EF\u80FD\u539F\u56E0\uFF1A\u8BA4\u9886\u5355\u5DF2\u88AB\u5220\u9664\u3001ID\u4F20\u9012\u9519\u8BEF\u3002\u9700\u5237\u65B0\u5217\u8868</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> epa.PAYMENT_ALLOT_ID, epa.PAYMENT_ALLOT_CODE, epa.HZ_APPROVE_STATUS, epa.VALID</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> EPM_PAYMENT_ALLOT epa</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> epa.PAYMENT_ALLOT_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> :paymentAllotId</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- \u82E5\u8FD4\u56DE\u7A7A\uFF0C\u8BF4\u660E\u8BA4\u9886\u5355\u4E0D\u5B58\u5728</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95198\uFF1A\u6D41\u7A0B\u53D1\u8D77\u5F02\u5E38\uFF0C\u5230\u6B3E\u5355\u4E0D\u5B58\u5728</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u63D0\u4EA4\u8BA4\u9886\u5355\u65F6\uFF0C\u5173\u8054\u7684\u5230\u6B3E\u5F15\u5165\u5355(PAYMENT_IMPORT_ID)\u5DF2\u88AB\u5220\u9664</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u5DE5\u4F5C\u6D41\u56DE\u8C03\u65B9\u6CD5\u4E2D\u6309PAYMENT_IMPORT_ID\u67E5\u8BE2EPM_PAYMENT_IMPORT\uFF0C\u82E5\u8FD4\u56DEnull\u5219\u629B\u51FA\u963B\u65AD\u6027\u62A5\u9519\u3002\u9700\u68C0\u67E5\u5230\u6B3E\u5F15\u5165\u6570\u636E</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> epa.PAYMENT_ALLOT_ID, epa.PAYMENT_IMPORT_ID, epi.PAYMENT_IMPORT_CODE, epi.VALID</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> EPM_PAYMENT_ALLOT epa</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>LEFT JOIN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> EPM_PAYMENT_IMPORT epi </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ON</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> epa.PAYMENT_IMPORT_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> epi.PAYMENT_IMPORT_ID</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> epa.PAYMENT_ALLOT_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> :paymentAllotId</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- \u82E5PAYMENT_IMPORT_CODE\u4E3A\u7A7A\uFF0C\u8BF4\u660E\u5230\u6B3E\u5355\u4E0D\u5B58\u5728</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95199\uFF1A\u67E5\u8BE2\u8BA4\u9886\u6570\u636E\u4E3A\u7A7A</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u63A8\u9001ERP\u65F6\uFF0C\u8BA4\u9886\u5355\u5934\u884C\u6570\u636E\u67E5\u8BE2\u4E3A\u7A7A</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1AERP\u63A8\u9001\u65B9\u6CD5\u4E2D\u6309PAYMENT_ALLOT_ID\u67E5\u8BE2\u8BA4\u9886\u5355\u5934\u884C\u6570\u636E\uFF0C\u82E5\u4E3A\u7A7A\u5219\u629B\u51FA\u963B\u65AD\u6027\u62A5\u9519\u3002\u9700\u68C0\u67E5\u5934\u884C\u6570\u636E\u5B8C\u6574\u6027</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> epa.PAYMENT_ALLOT_ID, epa.PAYMENT_ALLOT_CODE, epa.HZ_APPROVE_STATUS,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         (</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}>COUNT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>*</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> EPM_PAYMENT_ALLOT_DETAIL epad</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>          </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> epad.PAYMENT_ALLOT_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> epa.PAYMENT_ALLOT_ID) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u660E\u7EC6\u884C\u6570</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> EPM_PAYMENT_ALLOT epa</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> epa.PAYMENT_ALLOT_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> :paymentAllotId</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- \u82E5\u660E\u7EC6\u884C\u6570\u4E3A0\uFF0C\u5219\u89E6\u53D1\u8BE5\u62A5\u9519</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u951910\uFF1Aerp\u8FD4\u56DE\u8BA4\u9886\u7ED3\u679C\u4E3A\u7A7A</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u63A8\u9001ERP\u65F6\uFF0CERP\u63A5\u53E3\u8FD4\u56DE\u8BA4\u9886\u7ED3\u679C\u4E3A\u7A7A</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1AERP\u63A8\u9001\u65B9\u6CD5\u4E2D\u8C03\u7528ERP\u63A5\u53E3\u83B7\u53D6\u8BA4\u9886\u7ED3\u679C\uFF0C\u82E5\u8FD4\u56DEnull\u5219\u629B\u51FA\u963B\u65AD\u6027\u62A5\u9519\u3002\u53EF\u80FD\u539F\u56E0\uFF1AERP\u670D\u52A1\u4E0D\u53EF\u7528\u3001\u7F51\u7EDC\u5F02\u5E38\u3002\u9700\u68C0\u67E5ERP\u670D\u52A1\u72B6\u6001</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> sem.OBJID, sem.OBJTYPENAME, sem.ERROR_MSG, sem.CREATION_DATE</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> SYS_EXCEPTION_MSG sem</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> sem.OBJID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> :paymentAllotId</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> sem.OBJTYPENAME </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>\u5230\u6B3E\u8BA4\u9886</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ORDER BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> sem.CREATION_DATE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>DESC</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- \u67E5\u8BE2ERP\u63A8\u9001\u5F02\u5E38\u8BB0\u5F55</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u951911\uFF1A\u8BA4\u9886\u63A8\u9001erp\u5F02\u5E38</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u63A8\u9001ERP\u65F6\uFF0CERP\u63A5\u53E3\u8FD4\u56DE\u9519\u8BEF\u4FE1\u606F</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1AERP\u63A8\u9001\u65B9\u6CD5\u4E2D\u8C03\u7528ERP\u63A5\u53E3\uFF0C\u82E5\u8FD4\u56DE\u9519\u8BEF\u4FE1\u606F\u5219\u629B\u51FA\u963B\u65AD\u6027\u62A5\u9519\u3002\u9700\u67E5\u770B\u5177\u4F53\u9519\u8BEF\u5185\u5BB9\u5E76\u4FEE\u590D\u540E\u91CD\u65B0\u63D0\u4EA4</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> sem.OBJID, sem.OBJTYPENAME, sem.ERROR_MSG, sem.CREATION_DATE, sem.CREATED_BY</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> SYS_EXCEPTION_MSG sem</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> sem.OBJID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> :paymentAllotId</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> sem.OBJTYPENAME </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>\u5230\u6B3E\u8BA4\u9886</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ORDER BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> sem.CREATION_DATE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>DESC</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- \u67E5\u8BE2ERP\u63A8\u9001\u5F02\u5E38\u8BE6\u60C5</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u951912\uFF1A\u67E5\u8BE2\u9879\u76EE\u5217\u8868\u5F02\u5E38\uFF0C\u672A\u6307\u5B9A\u5BA2\u6237id</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u67E5\u8BE2\u53EF\u8BA4\u9886\u9879\u76EE\u65F6\uFF0C\u5230\u6B3E\u5355\u7F3A\u5C11\u5BA2\u6237\u4FE1\u606F(CUSTOMER_ID\u4E3A\u7A7A)</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u67E5\u8BE2\u53EF\u8BA4\u9886\u9879\u76EE\u65B9\u6CD5\u4E2D\u6309CUSTOMER_ID\u67E5\u8BE2\u9879\u76EE\u5217\u8868\uFF0C\u82E5CUSTOMER_ID\u4E3A\u7A7A\u5219\u629B\u51FA\u963B\u65AD\u6027\u62A5\u9519\u3002\u9700\u68C0\u67E5\u5230\u6B3E\u5F15\u5165\u6570\u636E</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> epi.PAYMENT_IMPORT_ID, epi.PAYMENT_IMPORT_CODE, epi.CUSTOMER_ID, epi.CUSTOMER_CODE, epi.CUSTOMER_NAME</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> EPM_PAYMENT_IMPORT epi</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> epi.PAYMENT_IMPORT_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> :paymentImportId</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> epi.CUSTOMER_ID </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- \u67E5\u51FA\u5BA2\u6237ID\u4E3A\u7A7A\u7684\u5230\u6B3E\u5355</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u951913\uFF1A\u9879\u76EE\u5230\u6B3E\u5F15\u5165\u6570\u636E\u5F02\u5E38</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u67E5\u8BE2\u51FA\u5E93\u660E\u7EC6\u65F6\uFF0C\u5230\u6B3E\u5F15\u5165\u5355(PAYMENT_IMPORT_ID)\u4E0D\u5B58\u5728</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u67E5\u8BE2\u51FA\u5E93\u660E\u7EC6\u65B9\u6CD5\u4E2D\u6309PAYMENT_IMPORT_ID\u67E5\u8BE2EPM_PAYMENT_IMPORT\uFF0C\u82E5\u8FD4\u56DEnull\u5219\u629B\u51FA\u963B\u65AD\u6027\u62A5\u9519\u3002\u9700\u68C0\u67E5paymentImportId\u6709\u6548\u6027</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> epi.PAYMENT_IMPORT_ID, epi.PAYMENT_IMPORT_CODE, epi.PAYMENT_STATUS, epi.VALID</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> EPM_PAYMENT_IMPORT epi</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> epi.PAYMENT_IMPORT_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> :paymentImportId</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- \u82E5\u8FD4\u56DE\u7A7A\uFF0C\u8BF4\u660E\u5230\u6B3E\u5F15\u5165\u5355\u4E0D\u5B58\u5728</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u951914\uFF1A\u9879\u76EE\u5408\u540C\u76F8\u5173\u4FE1\u606F\u5F02\u5E38</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u67E5\u8BE2\u51FA\u5E93\u660E\u7EC6\u65F6\uFF0C\u8BE5\u9879\u76EE\u4E0B\u65E0\u5DF2\u5BA1\u6279\u901A\u8FC7(HZ_APPROVE_STATUS=APPROVED)\u7684\u5408\u540C</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u67E5\u8BE2\u51FA\u5E93\u660E\u7EC6\u65B9\u6CD5\u4E2D\u6309PROJECT_ID\u67E5\u8BE2EPM_PROJECT_CONTRACT\uFF0C\u7B5B\u9009HZ_APPROVE_STATUS=&#39;APPROVED&#39;\u7684\u5408\u540C\uFF0C\u82E5\u4E3A\u7A7A\u5219\u629B\u51FA\u963B\u65AD\u6027\u62A5\u9519\u3002\u9700\u68C0\u67E5\u5408\u540C\u5BA1\u6279\u72B6\u6001</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> epc.CONTRACT_ID, epc.CONTRACT_CODE, epc.CONTRACT_NAME, epc.PROJECT_ID,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         epc.HZ_APPROVE_STATUS, epc.VALID</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> EPM_PROJECT_CONTRACT epc</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> epc.PROJECT_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> :projectId</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> epc.HZ_APPROVE_STATUS </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>APPROVED</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- \u82E5\u8FD4\u56DE\u7A7A\uFF0C\u8BF4\u660E\u8BE5\u9879\u76EE\u4E0B\u65E0\u5DF2\u5BA1\u6279\u901A\u8FC7\u7684\u5408\u540C</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u951915\uFF1A\u5355\u636Eid\u5F02\u5E38\uFF0C\u6838\u9500\u63A5\u53E3\u8FD4\u56DE\u4FE1\u606F</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u63A8\u9001ERP\u6838\u9500\u6570\u636E\u65F6\uFF0CERP\u63A5\u53E3\u8FD4\u56DE\u72B6\u6001(RETURN_STATUS)\u975ES(\u6210\u529F)</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1ApushAllotDataToErp\u65B9\u6CD5\u4E2D\u8C03\u7528ERP\u6838\u9500\u63A5\u53E3\uFF0C\u904D\u5386\u8FD4\u56DE\u7ED3\u679C\uFF0C\u82E5RETURN_STATUS\u975ES\u5219\u629B\u51FA\u963B\u65AD\u6027\u62A5\u9519\uFF0C\u63D0\u793A\u5355\u636EID\u548CERP\u8FD4\u56DE\u4FE1\u606F(RETURN_MESSAGE)\u3002\u9700\u67E5\u770B\u5177\u4F53\u9519\u8BEF\u5185\u5BB9\u5E76\u4FEE\u590D\u540E\u91CD\u65B0\u63D0\u4EA4</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> sem.OBJID, sem.OBJTYPENAME, sem.ERROR_MSG, sem.CREATION_DATE</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> SYS_EXCEPTION_MSG sem</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> sem.OBJID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> :paymentAllotId</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> sem.OBJTYPENAME </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>\u5230\u6B3E\u8BA4\u9886</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ORDER BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> sem.CREATION_DATE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>DESC</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- \u67E5\u8BE2ERP\u6838\u9500\u63A5\u53E3\u5F02\u5E38\u8BB0\u5F55</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u951916\uFF1A\u6D41\u7A0B\u5B8C\u7ED3\u5F02\u5E38\uFF0C\u5355\u636E\u4E3B\u952E\u4E3A\u7A7A</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u5BA1\u6279\u5B8C\u7ED3(wfComplete)\u65F6\uFF0C\u5DE5\u4F5C\u6D41\u56DE\u8C03\u7F3A\u5C11\u5355\u636EID(objId\u4E3A\u7A7A\u6216\u4E3A0)</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1AwfComplete\u65B9\u6CD5\u4E2D\u6821\u9A8CobjId\u975E\u7A7A\u4E14\u975E0\uFF0C\u56E0\u9700\u6309\u5355\u636EID\u5B9A\u4F4D\u8BA4\u9886\u5355\u8BB0\u5F55\u3002\u8BE5\u62A5\u9519\u4E3A\u963B\u65AD\u6027\u62A5\u9519\uFF0C\u9700\u68C0\u67E5\u5DE5\u4F5C\u6D41\u914D\u7F6E</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> epa.PAYMENT_ALLOT_ID, epa.PAYMENT_ALLOT_CODE, epa.HZ_INSTANCE_ID, epa.HZ_APPROVE_STATUS</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> EPM_PAYMENT_ALLOT epa</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> epa.PAYMENT_ALLOT_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> :paymentAllotId</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- \u6821\u9A8C\u8BA4\u9886\u5355ID\u662F\u5426\u5B58\u5728</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u951917\uFF1A\u6D41\u7A0B\u5B8C\u7ED3\u5F02\u5E38\uFF0C\u5355\u636E\u4E0D\u5B58\u5728</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u5BA1\u6279\u5B8C\u7ED3(wfComplete)\u65F6\uFF0C\u6309\u5355\u636EID\u67E5\u8BE2EPM_PAYMENT_ALLOT\u8FD4\u56DEnull</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1AwfComplete\u65B9\u6CD5\u4E2D\u6309PAYMENT_ALLOT_ID\u67E5\u8BE2\u8BA4\u9886\u5355\uFF0C\u82E5\u8FD4\u56DEnull\u5219\u629B\u51FA\u963B\u65AD\u6027\u62A5\u9519\u3002\u53EF\u80FD\u539F\u56E0\uFF1A\u8BA4\u9886\u5355\u5DF2\u88AB\u5220\u9664\u3001ID\u4F20\u9012\u9519\u8BEF\u3002\u9700\u5237\u65B0\u5217\u8868</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> epa.PAYMENT_ALLOT_ID, epa.PAYMENT_ALLOT_CODE, epa.HZ_APPROVE_STATUS, epa.VALID</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> EPM_PAYMENT_ALLOT epa</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> epa.PAYMENT_ALLOT_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> :paymentAllotId</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- \u82E5\u8FD4\u56DE\u7A7A\uFF0C\u8BF4\u660E\u8BA4\u9886\u5355\u4E0D\u5B58\u5728</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u951918\uFF1A\u6D41\u7A0B\u7EC8\u6B62\u5F02\u5E38\uFF0C\u5355\u636E\u4E3B\u952E\u4E3A\u7A7A</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u6D41\u7A0B\u7EC8\u6B62(eventExecute)\u65F6\uFF0C\u5DE5\u4F5C\u6D41\u56DE\u8C03\u7F3A\u5C11\u5355\u636EID(objId\u4E3A\u7A7A\u6216\u4E3A0)</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1AeventExecute\u65B9\u6CD5\u4E2D\u6821\u9A8CobjId\u975E\u7A7A\u4E14\u975E0\uFF0C\u56E0\u9700\u6309\u5355\u636EID\u5B9A\u4F4D\u8BA4\u9886\u5355\u8BB0\u5F55\u5E76\u53D1\u9001ERP CANCEL\u3002\u8BE5\u62A5\u9519\u4E3A\u963B\u65AD\u6027\u62A5\u9519\uFF0C\u9700\u68C0\u67E5\u5DE5\u4F5C\u6D41\u914D\u7F6E</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> epa.PAYMENT_ALLOT_ID, epa.PAYMENT_ALLOT_CODE, epa.HZ_APPROVE_STATUS, epa.HZ_INSTANCE_ID</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> EPM_PAYMENT_ALLOT epa</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> epa.PAYMENT_ALLOT_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> :paymentAllotId</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- \u6821\u9A8C\u8BA4\u9886\u5355ID\u662F\u5426\u5B58\u5728</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u951919\uFF1A\u5230\u6B3E\u8BA4\u9886\u5F02\u5E38\uFF0C\u672A\u6307\u5B9A\u5230\u6B3E\u5355id</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u67E5\u8BE2\u8BA4\u9886\u4FE1\u606F\u65F6\uFF0C\u5230\u6B3E\u5355ID(paymentImportId)\u672A\u6307\u5B9A</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u67E5\u8BE2\u65B9\u6CD5\u4E2D\u6821\u9A8CpaymentImportId\u975E\u7A7A\uFF0C\u56E0\u9700\u6309\u5230\u6B3E\u5355ID\u67E5\u8BE2\u8BA4\u9886\u6570\u636E\u3002\u9700\u4F20\u5165\u6709\u6548\u5230\u6B3E\u5355ID</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> epi.PAYMENT_IMPORT_ID, epi.PAYMENT_IMPORT_CODE, epi.PAYMENT_STATUS, epi.UNALLOT_AMT</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> EPM_PAYMENT_IMPORT epi</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> epi.PAYMENT_IMPORT_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> :paymentImportId</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- \u6821\u9A8C\u5230\u6B3E\u5355ID\u662F\u5426\u6709\u6548</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u951920\uFF1A\u67E5\u8BE2\u5230\u6B3E\u8BA4\u9886\u5355\u6570\u636E\u4E3A\u7A7A</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u67E5\u8BE2\u8BA4\u9886\u4FE1\u606F\u65F6\uFF0C\u6309\u5230\u6B3E\u5355ID\u67E5\u8BE2\u8BA4\u9886\u5355\u6570\u636E\u8FD4\u56DE\u7A7A</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u67E5\u8BE2\u65B9\u6CD5\u4E2D\u6309paymentImportId\u67E5\u8BE2EPM_PAYMENT_ALLOT\uFF0C\u82E5\u8FD4\u56DE\u7A7A\u5219\u629B\u51FA\u963B\u65AD\u6027\u62A5\u9519\u3002\u9700\u68C0\u67E5\u8BA4\u9886\u5355ID\u6709\u6548\u6027</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> epa.PAYMENT_ALLOT_ID, epa.PAYMENT_ALLOT_CODE, epa.PAYMENT_IMPORT_ID, epa.HZ_APPROVE_STATUS</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> EPM_PAYMENT_ALLOT epa</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> epa.PAYMENT_IMPORT_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> :paymentImportId</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- \u82E5\u8FD4\u56DE\u7A7A\uFF0C\u8BF4\u660E\u8BE5\u5230\u6B3E\u5355\u4E0B\u65E0\u8BA4\u9886\u5355</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u951921\uFF1A\u67E5\u8BE2\u9879\u76EE\u5217\u8868\u5F02\u5E38\uFF0C\u672A\u6307\u5B9A\u4EA4\u6613\u516C\u53F8id</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u67E5\u8BE2\u53EF\u8BA4\u9886\u9879\u76EE\u65F6\uFF0C\u5230\u6B3E\u5355\u7F3A\u5C11\u4EA4\u6613\u516C\u53F8\u4FE1\u606F(RECEIVE_UNIT_ID\u4E3A\u7A7A)</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u67E5\u8BE2\u53EF\u8BA4\u9886\u9879\u76EE\u65B9\u6CD5\u4E2D\u6309RECEIVE_UNIT_ID\u7B5B\u9009\u9879\u76EE\uFF0C\u82E5\u4E3A\u7A7A\u5219\u629B\u51FA\u963B\u65AD\u6027\u62A5\u9519\u3002\u9700\u68C0\u67E5\u5230\u6B3E\u5F15\u5165\u6570\u636E</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> epi.PAYMENT_IMPORT_ID, epi.PAYMENT_IMPORT_CODE, epi.RECEIVE_UNIT_ID, epi.RECEIVE_UNIT_NAME</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> EPM_PAYMENT_IMPORT epi</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> epi.PAYMENT_IMPORT_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> :paymentImportId</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> epi.RECEIVE_UNIT_ID </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- \u67E5\u51FA\u4EA4\u6613\u516C\u53F8ID\u4E3A\u7A7A\u7684\u5230\u6B3E\u5355</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u951922\uFF1A\u67E5\u8BE2\u9879\u76EE\u5217\u8868\u5F02\u5E38\uFF0C\u672A\u6307\u5B9A\u6536\u6B3E\u516C\u53F8id</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u67E5\u8BE2\u53EF\u8BA4\u9886\u9879\u76EE\u65F6\uFF0C\u5230\u6B3E\u5355\u7F3A\u5C11\u6536\u6B3E\u516C\u53F8\u4FE1\u606F(REMIT_UNIT_ID\u4E3A\u7A7A)</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u67E5\u8BE2\u53EF\u8BA4\u9886\u9879\u76EE\u65B9\u6CD5\u4E2D\u6309REMIT_UNIT_ID\u7B5B\u9009\u9879\u76EE\uFF0C\u82E5\u4E3A\u7A7A\u5219\u629B\u51FA\u963B\u65AD\u6027\u62A5\u9519\u3002\u9700\u68C0\u67E5\u5230\u6B3E\u5F15\u5165\u6570\u636E</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> epi.PAYMENT_IMPORT_ID, epi.PAYMENT_IMPORT_CODE, epi.REMIT_UNIT_ID, epi.REMIT_UNIT_NAME</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> EPM_PAYMENT_IMPORT epi</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> epi.PAYMENT_IMPORT_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> :paymentImportId</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> epi.REMIT_UNIT_ID </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- \u67E5\u51FA\u6536\u6B3E\u516C\u53F8ID\u4E3A\u7A7A\u7684\u5230\u6B3E\u5355</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u951923\uFF1A\u67E5\u8BE2\u5408\u540C\u5217\u8868\u5F02\u5E38\uFF0C\u672A\u6307\u5B9A\u9879\u76EEid</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u67E5\u8BE2\u53EF\u8BA4\u9886\u5408\u540C\u65F6\uFF0C\u672A\u6307\u5B9A\u9879\u76EEID(projectId\u4E3A\u7A7A)</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u67E5\u8BE2\u53EF\u8BA4\u9886\u5408\u540C\u65B9\u6CD5\u4E2D\u6821\u9A8CprojectId\u975E\u7A7A\uFF0C\u56E0\u9700\u6309\u9879\u76EEID\u67E5\u8BE2\u8BE5\u9879\u76EE\u4E0B\u5DF2\u5BA1\u6279\u901A\u8FC7\u7684\u5408\u540C\u3002\u9700\u5148\u9009\u62E9\u9879\u76EE</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> epa.PAYMENT_ALLOT_ID, epa.PAYMENT_ALLOT_CODE, epa.PROJECT_ID</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> EPM_PAYMENT_ALLOT epa</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> epa.PAYMENT_ALLOT_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> :paymentAllotId</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> epa.PROJECT_ID </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- \u67E5\u51FA\u9879\u76EEID\u4E3A\u7A7A\u7684\u8BA4\u9886\u5355</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u951924\uFF1A\u67E5\u8BE2\u53EF\u8BA4\u9886\u660E\u7EC6\u5F02\u5E38\uFF0C\u672A\u6307\u5B9A\u9879\u76EEid</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u67E5\u8BE2\u53EF\u8BA4\u9886\u51FA\u5E93\u660E\u7EC6\u65F6\uFF0C\u672A\u6307\u5B9A\u9879\u76EEID(projectId\u4E3A\u7A7A)</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u67E5\u8BE2\u53EF\u8BA4\u9886\u660E\u7EC6\u65B9\u6CD5\u4E2D\u6821\u9A8CprojectId\u975E\u7A7A\uFF0C\u56E0\u9700\u6309\u9879\u76EEID\u67E5\u8BE2\u51FA\u5E93\u7B7E\u6536\u660E\u7EC6\u3002\u9700\u5148\u9009\u62E9\u9879\u76EE</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> epa.PAYMENT_ALLOT_ID, epa.PAYMENT_ALLOT_CODE, epa.PROJECT_ID</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> EPM_PAYMENT_ALLOT epa</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> epa.PAYMENT_ALLOT_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> :paymentAllotId</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> epa.PROJECT_ID </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- \u67E5\u51FA\u9879\u76EEID\u4E3A\u7A7A\u7684\u8BA4\u9886\u5355</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u951925\uFF1A\u672A\u6307\u5B9A\u5230\u6B3E\u8BA4\u9886id</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u83B7\u53D6\u5269\u4F59\u53EF\u8BA4\u6B3E\u91D1\u989D\u65F6\uFF0C\u8BA4\u9886\u5355ID(paymentAllotId)\u672A\u6307\u5B9A</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1AgetPaymentImportCanAllotAmt\u65B9\u6CD5\u4E2D\u6821\u9A8CpaymentAllotId\u975E\u7A7A\uFF0C\u56E0\u9700\u6309\u8BA4\u9886\u5355ID\u67E5\u8BE2\u5173\u8054\u7684\u5230\u6B3E\u5355\u3002\u9700\u4F20\u5165\u6709\u6548\u8BA4\u9886\u5355ID</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> epa.PAYMENT_ALLOT_ID, epa.PAYMENT_ALLOT_CODE, epa.PAYMENT_IMPORT_ID</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> EPM_PAYMENT_ALLOT epa</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> epa.PAYMENT_ALLOT_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> :paymentAllotId</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- \u6821\u9A8C\u8BA4\u9886\u5355ID\u662F\u5426\u6709\u6548</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u951926\uFF1A\u672A\u627E\u5230\u8BE5\u5230\u6B3E\u8BA4\u9886</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u83B7\u53D6\u5269\u4F59\u53EF\u8BA4\u6B3E\u91D1\u989D\u65F6\uFF0C\u6309\u8BA4\u9886\u5355ID\u67E5\u8BE2EPM_PAYMENT_ALLOT\u8FD4\u56DEnull</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1AgetPaymentImportCanAllotAmt\u65B9\u6CD5\u4E2D\u6309PAYMENT_ALLOT_ID\u67E5\u8BE2\u8BA4\u9886\u5355\uFF0C\u82E5\u8FD4\u56DEnull\u5219\u629B\u51FA\u963B\u65AD\u6027\u62A5\u9519\u3002\u53EF\u80FD\u539F\u56E0\uFF1A\u8BA4\u9886\u5355\u5DF2\u5220\u9664\u3001ID\u4F20\u9012\u9519\u8BEF\u3002\u9700\u68C0\u67E5\u8BA4\u9886\u5355ID</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> epa.PAYMENT_ALLOT_ID, epa.PAYMENT_ALLOT_CODE, epa.HZ_APPROVE_STATUS, epa.VALID</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> EPM_PAYMENT_ALLOT epa</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> epa.PAYMENT_ALLOT_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> :paymentAllotId</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- \u82E5\u8FD4\u56DE\u7A7A\uFF0C\u8BF4\u660E\u8BA4\u9886\u5355\u4E0D\u5B58\u5728</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u951927\uFF1A\u5220\u9664\u5F02\u5E38\uFF1A\u672A\u6307\u5B9A\u5230\u6B3E\u8BA4\u9886id</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u5220\u9664\u8BA4\u9886\u5355\u65F6\uFF0C\u8BA4\u9886\u5355ID(paymentAllotId)\u672A\u6307\u5B9A</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1AdeleteAllot\u65B9\u6CD5\u4E2D\u6821\u9A8CpaymentAllotId\u975E\u7A7A\uFF0C\u56E0\u9700\u6309ID\u5B9A\u4F4D\u8BA4\u9886\u5355\u8BB0\u5F55\u3002\u9700\u4F20\u5165\u6709\u6548\u8BA4\u9886\u5355ID</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> epa.PAYMENT_ALLOT_ID, epa.PAYMENT_ALLOT_CODE, epa.HZ_APPROVE_STATUS</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> EPM_PAYMENT_ALLOT epa</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> epa.PAYMENT_ALLOT_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> :paymentAllotId</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- \u6821\u9A8C\u8BA4\u9886\u5355ID\u662F\u5426\u6709\u6548</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u951928\uFF1A\u5220\u9664\u5F02\u5E38\uFF1A\u672A\u67E5\u8BE2\u5230\u8BE5\u8BA4\u9886\u5355</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u5220\u9664\u8BA4\u9886\u5355\u65F6\uFF0C\u6309\u8BA4\u9886\u5355ID\u67E5\u8BE2EPM_PAYMENT_ALLOT\u8FD4\u56DEnull</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1AdeleteAllot\u65B9\u6CD5\u4E2D\u6309PAYMENT_ALLOT_ID\u67E5\u8BE2\u8BA4\u9886\u5355\uFF0C\u82E5\u8FD4\u56DEnull\u5219\u629B\u51FA\u963B\u65AD\u6027\u62A5\u9519\u3002\u53EF\u80FD\u539F\u56E0\uFF1A\u8BA4\u9886\u5355\u5DF2\u88AB\u5220\u9664\u3002\u9700\u5237\u65B0\u5217\u8868</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> epa.PAYMENT_ALLOT_ID, epa.PAYMENT_ALLOT_CODE, epa.HZ_APPROVE_STATUS, epa.VALID</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> EPM_PAYMENT_ALLOT epa</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> epa.PAYMENT_ALLOT_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> :paymentAllotId</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- \u82E5\u8FD4\u56DE\u7A7A\uFF0C\u8BF4\u660E\u8BA4\u9886\u5355\u4E0D\u5B58\u5728</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u951929\uFF1A\u5220\u9664\u5F02\u5E38\uFF1A\u672A\u627E\u5230\u8BE5\u5230\u6B3E\u5355</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u5220\u9664\u8BA4\u9886\u5355\u65F6\uFF0C\u5173\u8054\u7684\u5230\u6B3E\u5F15\u5165\u5355(PAYMENT_IMPORT_ID)\u4E0D\u5B58\u5728</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1AdeleteAllot\u65B9\u6CD5\u4E2D\u6309PAYMENT_IMPORT_ID\u67E5\u8BE2EPM_PAYMENT_IMPORT\uFF0C\u82E5\u8FD4\u56DEnull\u5219\u629B\u51FA\u963B\u65AD\u6027\u62A5\u9519\u3002\u9700\u68C0\u67E5\u5230\u6B3E\u5F15\u5165\u6570\u636E</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> epa.PAYMENT_ALLOT_ID, epa.PAYMENT_IMPORT_ID, epi.PAYMENT_IMPORT_CODE, epi.VALID</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> EPM_PAYMENT_ALLOT epa</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>LEFT JOIN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> EPM_PAYMENT_IMPORT epi </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ON</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> epa.PAYMENT_IMPORT_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> epi.PAYMENT_IMPORT_ID</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> epa.PAYMENT_ALLOT_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> :paymentAllotId</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- \u82E5PAYMENT_IMPORT_CODE\u4E3A\u7A7A\uFF0C\u8BF4\u660E\u5230\u6B3E\u5355\u4E0D\u5B58\u5728</span></span>
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
                createVNode("td", null, "\u4E8B\u4E1A\u90E8\u4FE1\u606F\u4E3A\u7A7A"),
                createVNode("td", null, "\u4FDD\u5B58"),
                createVNode("td", null, "\u7528\u6237\u4E0A\u4E0B\u6587\u7F3A\u5C11\u4E8B\u4E1A\u90E8\u4FE1\u606F\uFF0C\u8054\u7CFB\u7BA1\u7406\u5458\u8865\u5145\u4E8B\u4E1A\u90E8\u914D\u7F6E"),
                createVNode("td", null, "\u963B\u65AD\u6027\u62A5\u9519"),
                createVNode("td", null, "[\u67E5\u770B]")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u672A\u627E\u5230\u8BE5\u5230\u6B3E\u5355"),
                createVNode("td", null, "\u4FDD\u5B58/\u63D0\u4EA4"),
                createVNode("td", null, "\u5230\u6B3E\u5F15\u5165\u5355\u4E0D\u5B58\u5728\u6216\u5DF2\u5220\u9664\uFF0C\u68C0\u67E5paymentImportId"),
                createVNode("td", null, "\u963B\u65AD\u6027\u62A5\u9519"),
                createVNode("td", null, "[\u67E5\u770B]")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u672C\u6B21\u8BA4\u6B3E\u91D1\u989D\u5408\u8BA1\u5927\u4E8E\u5230\u6B3E\u63A5\u53E3\u5269\u4F59\u8BA4\u6B3E\u91D1\u989D"),
                createVNode("td", null, "\u4FDD\u5B58/\u63D0\u4EA4"),
                createVNode("td", null, "\u5E76\u53D1\u8BA4\u9886\u6216\u91D1\u989D\u8D85\u9650\uFF0C\u5237\u65B0\u540E\u91CD\u65B0\u8BA4\u9886"),
                createVNode("td", null, "\u963B\u65AD\u6027\u62A5\u9519"),
                createVNode("td", null, "[\u67E5\u770B]")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5DF2\u8BA4\u9886\u91D1\u989D+\u672C\u6B21\u8BA4\u9886\u91D1\u989D\u5DF2\u8D85\u5DE5\u7A0B\u91D1\u989D"),
                createVNode("td", null, "\u4FDD\u5B58"),
                createVNode("td", null, "\u51FA\u5E93\u660E\u7EC6\u8BA4\u9886\u91D1\u989D\u8D85\u9650\uFF0C\u51CF\u5C11\u672C\u6B21\u8BA4\u9886\u91D1\u989D"),
                createVNode("td", null, "\u963B\u65AD\u6027\u62A5\u9519"),
                createVNode("td", null, "[\u67E5\u770B]")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5220\u9664\u5F02\u5E38\uFF1A\u65B0\u5EFA\u72B6\u6001\u4E0B\u7684\u8BA4\u9886\u624D\u53EF\u5220\u9664"),
                createVNode("td", null, "\u5220\u9664"),
                createVNode("td", null, "\u8BA4\u9886\u5355\u5DF2\u63D0\u4EA4\u6216\u5DF2\u5BA1\u6279\uFF0C\u4E0D\u53EF\u5220\u9664"),
                createVNode("td", null, "\u963B\u65AD\u6027\u62A5\u9519"),
                createVNode("td", null, "[\u67E5\u770B]")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6D41\u7A0B\u53D1\u8D77\u5F02\u5E38\uFF0C\u5355\u636E\u4E3B\u952E\u4E3A\u7A7A"),
                createVNode("td", null, "\u63D0\u4EA4"),
                createVNode("td", null, "\u5DE5\u4F5C\u6D41\u56DE\u8C03\u7F3A\u5C11\u5355\u636EID\uFF0C\u68C0\u67E5\u5DE5\u4F5C\u6D41\u914D\u7F6E"),
                createVNode("td", null, "\u963B\u65AD\u6027\u62A5\u9519"),
                createVNode("td", null, "[\u67E5\u770B]")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6D41\u7A0B\u53D1\u8D77\u5F02\u5E38\uFF0C\u5355\u636E\u4E0D\u5B58\u5728"),
                createVNode("td", null, "\u63D0\u4EA4"),
                createVNode("td", null, "\u8BA4\u9886\u5355\u5DF2\u88AB\u5220\u9664\uFF0C\u5237\u65B0\u5217\u8868"),
                createVNode("td", null, "\u963B\u65AD\u6027\u62A5\u9519"),
                createVNode("td", null, "[\u67E5\u770B]")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6D41\u7A0B\u53D1\u8D77\u5F02\u5E38\uFF0C\u5230\u6B3E\u5355\u4E0D\u5B58\u5728"),
                createVNode("td", null, "\u63D0\u4EA4"),
                createVNode("td", null, "\u5230\u6B3E\u5F15\u5165\u5355\u5DF2\u88AB\u5220\u9664\uFF0C\u68C0\u67E5\u6570\u636E"),
                createVNode("td", null, "\u963B\u65AD\u6027\u62A5\u9519"),
                createVNode("td", null, "[\u67E5\u770B]")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u67E5\u8BE2\u8BA4\u9886\u6570\u636E\u4E3A\u7A7A"),
                createVNode("td", null, "\u63A8\u9001ERP"),
                createVNode("td", null, "\u8BA4\u9886\u5355\u6570\u636E\u5F02\u5E38\uFF0C\u68C0\u67E5\u5934\u884C\u6570\u636E\u5B8C\u6574\u6027"),
                createVNode("td", null, "\u963B\u65AD\u6027\u62A5\u9519"),
                createVNode("td", null, "[\u67E5\u770B]")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "erp\u8FD4\u56DE\u8BA4\u9886\u7ED3\u679C\u4E3A\u7A7A"),
                createVNode("td", null, "\u63A8\u9001ERP"),
                createVNode("td", null, "ERP\u63A5\u53E3\u5F02\u5E38\uFF0C\u68C0\u67E5ERP\u670D\u52A1\u72B6\u6001"),
                createVNode("td", null, "\u963B\u65AD\u6027\u62A5\u9519"),
                createVNode("td", null, "[\u67E5\u770B]")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u8BA4\u9886\u63A8\u9001erp\u5F02\u5E38"),
                createVNode("td", null, "\u63A8\u9001ERP"),
                createVNode("td", null, "ERP\u8FD4\u56DE\u9519\u8BEF\u4FE1\u606F\uFF0C\u67E5\u770B\u5177\u4F53\u9519\u8BEF\u5185\u5BB9"),
                createVNode("td", null, "\u963B\u65AD\u6027\u62A5\u9519"),
                createVNode("td", null, "[\u67E5\u770B]")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u67E5\u8BE2\u9879\u76EE\u5217\u8868\u5F02\u5E38\uFF0C\u672A\u6307\u5B9A\u5BA2\u6237id"),
                createVNode("td", null, "\u67E5\u8BE2\u53EF\u8BA4\u9886\u9879\u76EE"),
                createVNode("td", null, "\u5230\u6B3E\u5355\u7F3A\u5C11\u5BA2\u6237\u4FE1\u606F\uFF0C\u68C0\u67E5\u5230\u6B3E\u5F15\u5165\u6570\u636E"),
                createVNode("td", null, "\u963B\u65AD\u6027\u62A5\u9519"),
                createVNode("td", null, "[\u67E5\u770B]")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u9879\u76EE\u5230\u6B3E\u5F15\u5165\u6570\u636E\u5F02\u5E38"),
                createVNode("td", null, "\u67E5\u8BE2\u51FA\u5E93\u660E\u7EC6"),
                createVNode("td", null, "\u5230\u6B3E\u5F15\u5165\u5355\u4E0D\u5B58\u5728\uFF0C\u68C0\u67E5paymentImportId"),
                createVNode("td", null, "\u963B\u65AD\u6027\u62A5\u9519"),
                createVNode("td", null, "[\u67E5\u770B]")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u9879\u76EE\u5408\u540C\u76F8\u5173\u4FE1\u606F\u5F02\u5E38"),
                createVNode("td", null, "\u67E5\u8BE2\u51FA\u5E93\u660E\u7EC6"),
                createVNode("td", null, "\u8BE5\u9879\u76EE\u4E0B\u65E0\u5DF2\u5BA1\u6279\u901A\u8FC7\u7684\u5408\u540C\uFF0C\u68C0\u67E5\u5408\u540C\u5BA1\u6279\u72B6\u6001"),
                createVNode("td", null, "\u963B\u65AD\u6027\u62A5\u9519"),
                createVNode("td", null, "[\u67E5\u770B]")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5355\u636Eid\u5F02\u5E38\uFF0C\u6838\u9500\u63A5\u53E3\u8FD4\u56DE\u4FE1\u606F"),
                createVNode("td", null, "\u63A8\u9001ERP"),
                createVNode("td", null, "ERP\u6838\u9500\u63A5\u53E3\u8FD4\u56DE\u975ES\u72B6\u6001\uFF0C\u67E5\u770B\u5177\u4F53\u8FD4\u56DE\u4FE1\u606F"),
                createVNode("td", null, "\u963B\u65AD\u6027\u62A5\u9519"),
                createVNode("td", null, "[\u67E5\u770B]")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6D41\u7A0B\u5B8C\u7ED3\u5F02\u5E38\uFF0C\u5355\u636E\u4E3B\u952E\u4E3A\u7A7A"),
                createVNode("td", null, "\u5BA1\u6279\u5B8C\u7ED3"),
                createVNode("td", null, "\u5DE5\u4F5C\u6D41\u56DE\u8C03\u7F3A\u5C11\u5355\u636EID\uFF0C\u68C0\u67E5\u5DE5\u4F5C\u6D41\u914D\u7F6E"),
                createVNode("td", null, "\u963B\u65AD\u6027\u62A5\u9519"),
                createVNode("td", null, "[\u67E5\u770B]")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6D41\u7A0B\u5B8C\u7ED3\u5F02\u5E38\uFF0C\u5355\u636E\u4E0D\u5B58\u5728"),
                createVNode("td", null, "\u5BA1\u6279\u5B8C\u7ED3"),
                createVNode("td", null, "\u8BA4\u9886\u5355\u5DF2\u88AB\u5220\u9664\uFF0C\u5237\u65B0\u5217\u8868"),
                createVNode("td", null, "\u963B\u65AD\u6027\u62A5\u9519"),
                createVNode("td", null, "[\u67E5\u770B]")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6D41\u7A0B\u7EC8\u6B62\u5F02\u5E38\uFF0C\u5355\u636E\u4E3B\u952E\u4E3A\u7A7A"),
                createVNode("td", null, "\u6D41\u7A0B\u7EC8\u6B62"),
                createVNode("td", null, "\u5DE5\u4F5C\u6D41\u7EC8\u6B62\u56DE\u8C03\u7F3A\u5C11\u5355\u636EID\uFF0C\u68C0\u67E5\u5DE5\u4F5C\u6D41\u914D\u7F6E"),
                createVNode("td", null, "\u963B\u65AD\u6027\u62A5\u9519"),
                createVNode("td", null, "[\u67E5\u770B]")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5230\u6B3E\u8BA4\u9886\u5F02\u5E38\uFF0C\u672A\u6307\u5B9A\u5230\u6B3E\u5355id"),
                createVNode("td", null, "\u67E5\u8BE2\u8BA4\u9886"),
                createVNode("td", null, "\u5230\u6B3E\u5355ID\u672A\u6307\u5B9A\uFF0C\u4F20\u5165\u6709\u6548\u5230\u6B3E\u5355ID"),
                createVNode("td", null, "\u963B\u65AD\u6027\u62A5\u9519"),
                createVNode("td", null, "[\u67E5\u770B]")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u67E5\u8BE2\u5230\u6B3E\u8BA4\u9886\u5355\u6570\u636E\u4E3A\u7A7A"),
                createVNode("td", null, "\u67E5\u8BE2\u8BA4\u9886"),
                createVNode("td", null, "\u8BA4\u9886\u5355\u6570\u636E\u4E3A\u7A7A\uFF0C\u68C0\u67E5\u8BA4\u9886\u5355ID"),
                createVNode("td", null, "\u963B\u65AD\u6027\u62A5\u9519"),
                createVNode("td", null, "[\u67E5\u770B]")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u67E5\u8BE2\u9879\u76EE\u5217\u8868\u5F02\u5E38\uFF0C\u672A\u6307\u5B9A\u4EA4\u6613\u516C\u53F8id"),
                createVNode("td", null, "\u67E5\u8BE2\u53EF\u8BA4\u9886\u9879\u76EE"),
                createVNode("td", null, "\u5230\u6B3E\u5355\u7F3A\u5C11\u4EA4\u6613\u516C\u53F8\u4FE1\u606F\uFF0C\u68C0\u67E5\u5230\u6B3E\u5F15\u5165\u6570\u636E"),
                createVNode("td", null, "\u963B\u65AD\u6027\u62A5\u9519"),
                createVNode("td", null, "[\u67E5\u770B]")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u67E5\u8BE2\u9879\u76EE\u5217\u8868\u5F02\u5E38\uFF0C\u672A\u6307\u5B9A\u6536\u6B3E\u516C\u53F8id"),
                createVNode("td", null, "\u67E5\u8BE2\u53EF\u8BA4\u9886\u9879\u76EE"),
                createVNode("td", null, "\u5230\u6B3E\u5355\u7F3A\u5C11\u6536\u6B3E\u516C\u53F8\u4FE1\u606F\uFF0C\u68C0\u67E5\u5230\u6B3E\u5F15\u5165\u6570\u636E"),
                createVNode("td", null, "\u963B\u65AD\u6027\u62A5\u9519"),
                createVNode("td", null, "[\u67E5\u770B]")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u67E5\u8BE2\u5408\u540C\u5217\u8868\u5F02\u5E38\uFF0C\u672A\u6307\u5B9A\u9879\u76EEid"),
                createVNode("td", null, "\u67E5\u8BE2\u53EF\u8BA4\u9886\u5408\u540C"),
                createVNode("td", null, "\u672A\u6307\u5B9A\u9879\u76EEID\uFF0C\u5148\u9009\u62E9\u9879\u76EE"),
                createVNode("td", null, "\u963B\u65AD\u6027\u62A5\u9519"),
                createVNode("td", null, "[\u67E5\u770B]")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u67E5\u8BE2\u53EF\u8BA4\u9886\u660E\u7EC6\u5F02\u5E38\uFF0C\u672A\u6307\u5B9A\u9879\u76EEid"),
                createVNode("td", null, "\u67E5\u8BE2\u53EF\u8BA4\u9886\u660E\u7EC6"),
                createVNode("td", null, "\u672A\u6307\u5B9A\u9879\u76EEID\uFF0C\u5148\u9009\u62E9\u9879\u76EE"),
                createVNode("td", null, "\u963B\u65AD\u6027\u62A5\u9519"),
                createVNode("td", null, "[\u67E5\u770B]")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u672A\u6307\u5B9A\u5230\u6B3E\u8BA4\u9886id"),
                createVNode("td", null, "\u83B7\u53D6\u5269\u4F59\u91D1\u989D"),
                createVNode("td", null, "\u8BA4\u9886\u5355ID\u672A\u6307\u5B9A\uFF0C\u4F20\u5165\u6709\u6548\u8BA4\u9886\u5355ID"),
                createVNode("td", null, "\u963B\u65AD\u6027\u62A5\u9519"),
                createVNode("td", null, "[\u67E5\u770B]")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u672A\u627E\u5230\u8BE5\u5230\u6B3E\u8BA4\u9886"),
                createVNode("td", null, "\u83B7\u53D6\u5269\u4F59\u91D1\u989D"),
                createVNode("td", null, "\u8BA4\u9886\u5355\u4E0D\u5B58\u5728\u6216\u5DF2\u5220\u9664\uFF0C\u68C0\u67E5\u8BA4\u9886\u5355ID"),
                createVNode("td", null, "\u963B\u65AD\u6027\u62A5\u9519"),
                createVNode("td", null, "[\u67E5\u770B]")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5220\u9664\u5F02\u5E38\uFF1A\u672A\u6307\u5B9A\u5230\u6B3E\u8BA4\u9886id"),
                createVNode("td", null, "\u5220\u9664"),
                createVNode("td", null, "\u8BA4\u9886\u5355ID\u672A\u6307\u5B9A\uFF0C\u4F20\u5165\u6709\u6548\u8BA4\u9886\u5355ID"),
                createVNode("td", null, "\u963B\u65AD\u6027\u62A5\u9519"),
                createVNode("td", null, "[\u67E5\u770B]")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5220\u9664\u5F02\u5E38\uFF1A\u672A\u67E5\u8BE2\u5230\u8BE5\u8BA4\u9886\u5355"),
                createVNode("td", null, "\u5220\u9664"),
                createVNode("td", null, "\u8BA4\u9886\u5355\u4E0D\u5B58\u5728\uFF0C\u5237\u65B0\u5217\u8868"),
                createVNode("td", null, "\u963B\u65AD\u6027\u62A5\u9519"),
                createVNode("td", null, "[\u67E5\u770B]")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5220\u9664\u5F02\u5E38\uFF1A\u672A\u627E\u5230\u8BE5\u5230\u6B3E\u5355"),
                createVNode("td", null, "\u5220\u9664"),
                createVNode("td", null, "\u5230\u6B3E\u5F15\u5165\u5355\u4E0D\u5B58\u5728\uFF0C\u68C0\u67E5\u5230\u6B3E\u5F15\u5165\u6570\u636E"),
                createVNode("td", null, "\u963B\u65AD\u6027\u62A5\u9519"),
                createVNode("td", null, "[\u67E5\u770B]")
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95191\uFF1A\u4E8B\u4E1A\u90E8\u4FE1\u606F\u4E3A\u7A7A"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u4FDD\u5B58\u8BA4\u9886\u5355\u65F6\uFF0C\u5F53\u524D\u7528\u6237\u4E0A\u4E0B\u6587\u7F3A\u5C11\u4E8B\u4E1A\u90E8(ORGANIZATION_ID)\u4FE1\u606F")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u4FDD\u5B58\u65B9\u6CD5\u4E2D\u901A\u8FC7DetailsHelper.getUserDetail()\u83B7\u53D6\u7528\u6237\u4E8B\u4E1A\u90E8\u4FE1\u606F\uFF0C\u82E5\u4E3A\u7A7A\u5219\u629B\u51FA\u963B\u65AD\u6027\u62A5\u9519\u3002\u9700\u8054\u7CFB\u7BA1\u7406\u5458\u8865\u5145\u4E8B\u4E1A\u90E8\u914D\u7F6E")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " iu.USER_ID, iu.LOGIN_NAME, iu.REAL_NAME, iu.ORGANIZATION_ID, iu.DEPT_ID")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " IAM_USER iu")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " iu.USER_ID "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " :currentUserId")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#89DDFF" } }, "  "),
                  createVNode("span", { style: { "color": "#676E95" } }, "-- \u82E5ORGANIZATION_ID\u4E3A\u7A7A\uFF0C\u5219\u9700\u8865\u5145\u7528\u6237\u4E8B\u4E1A\u90E8\u914D\u7F6E")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95192\uFF1A\u672A\u627E\u5230\u8BE5\u5230\u6B3E\u5355"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u4FDD\u5B58\u6216\u63D0\u4EA4\u8BA4\u9886\u5355\u65F6\uFF0C\u5230\u6B3E\u5F15\u5165\u5355(PAYMENT_IMPORT_ID)\u4E0D\u5B58\u5728\u6216\u5DF2\u5220\u9664")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u4FDD\u5B58/\u63D0\u4EA4\u65B9\u6CD5\u4E2D\u6309PAYMENT_IMPORT_ID\u67E5\u8BE2EPM_PAYMENT_IMPORT\uFF0C\u82E5\u8FD4\u56DEnull\u5219\u629B\u51FA\u963B\u65AD\u6027\u62A5\u9519\u3002\u9700\u68C0\u67E5paymentImportId\u6709\u6548\u6027")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " epi.PAYMENT_IMPORT_ID, epi.PAYMENT_IMPORT_CODE, epi.PAYMENT_STATUS, epi.IS_CASHOUT, epi.VALID")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " EPM_PAYMENT_IMPORT epi")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " epi.PAYMENT_IMPORT_ID "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " :paymentImportId")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#89DDFF" } }, "  "),
                  createVNode("span", { style: { "color": "#676E95" } }, "-- \u82E5\u8FD4\u56DE\u7A7A\uFF0C\u8BF4\u660E\u5230\u6B3E\u5355\u4E0D\u5B58\u5728")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95193\uFF1A\u672C\u6B21\u8BA4\u6B3E\u91D1\u989D\u5408\u8BA1\u5927\u4E8E\u5230\u6B3E\u63A5\u53E3\u5269\u4F59\u8BA4\u6B3E\u91D1\u989D"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u4FDD\u5B58\u6216\u63D0\u4EA4\u8BA4\u9886\u5355\u65F6\uFF0C\u672C\u6B21\u8BA4\u6B3E\u91D1\u989D\u5408\u8BA1\u8D85\u8FC7\u5230\u6B3E\u5355\u5269\u4F59\u53EF\u8BA4\u9886\u91D1\u989D")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u4FDD\u5B58/\u63D0\u4EA4\u6821\u9A8C\u4E2D\u67E5\u8BE2\u5230\u6B3E\u5355\u5269\u4F59\u53EF\u8BA4\u9886\u91D1\u989D(\u865A\u62DF\u5355\u67E5DB/\u5B9E\u9645\u5355\u5B9E\u65F6\u67E5ERP)\uFF0C\u82E5\u672C\u6B21\u8BA4\u9886\u91D1\u989D\u5408\u8BA1>\u5269\u4F59\u91D1\u989D\u5219\u629B\u51FA\u963B\u65AD\u6027\u62A5\u9519\u3002\u53EF\u80FD\u539F\u56E0\uFF1A\u5E76\u53D1\u8BA4\u9886\u5360\u7528\u91D1\u989D\u3001\u91D1\u989D\u8D85\u9650\u3002\u9700\u5237\u65B0\u540E\u91CD\u65B0\u8BA4\u9886")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " epi.PAYMENT_IMPORT_ID, epi.PAYMENT_IMPORT_CODE, epi.RECEIVE_AMT, epi.ALLOTED_AMT,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         epi.UNALLOT_AMT, epi.RECEIVE_AMT "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "-"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " epi.ALLOTED_AMT "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5269\u4F59\u53EF\u8BA4\u9886\u91D1\u989D")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " EPM_PAYMENT_IMPORT epi")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " epi.PAYMENT_IMPORT_ID "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " :paymentImportId")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#89DDFF" } }, "  "),
                  createVNode("span", { style: { "color": "#676E95" } }, "-- \u5BF9\u6BD4\u672C\u6B21\u8BA4\u9886\u91D1\u989D\u5408\u8BA1\u4E0E\u5269\u4F59\u53EF\u8BA4\u9886\u91D1\u989D")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95194\uFF1A\u5DF2\u8BA4\u9886\u91D1\u989D+\u672C\u6B21\u8BA4\u9886\u91D1\u989D\u5DF2\u8D85\u5DE5\u7A0B\u91D1\u989D"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u4FDD\u5B58\u8BA4\u9886\u5355\u65F6\uFF0C\u51FA\u5E93\u660E\u7EC6\u7684\u5DF2\u8BA4\u9886\u91D1\u989D+\u672C\u6B21\u8BA4\u9886\u91D1\u989D\u8D85\u8FC7\u5DE5\u7A0B\u91D1\u989D")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u4FDD\u5B58\u6821\u9A8C\u4E2D\u6309\u51FA\u5E93\u660E\u7EC6\u67E5\u8BE2\u5DF2\u8BA4\u9886\u91D1\u989D\uFF0C\u52A0\u4E0A\u672C\u6B21\u8BA4\u9886\u91D1\u989D\u82E5\u8D85\u8FC7\u5DE5\u7A0B\u91D1\u989D\u5219\u629B\u51FA\u963B\u65AD\u6027\u62A5\u9519\u3002\u9700\u51CF\u5C11\u672C\u6B21\u8BA4\u9886\u91D1\u989D")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " epad.PAYMENT_ALLOT_DETAIL_ID, epad.INV_BILL_NO, epad.ITEM_CODE,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         epad.CONTRACT_AMT, epad.ALLOTTED_AMT, epad.THIS_ALLOT_AMT,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         epad.ALLOTTED_AMT "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "+"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " epad.THIS_ALLOT_AMT "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u8BA4\u9886\u540E\u91D1\u989D")
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
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " epad.PAYMENT_ALLOT_ID "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " :paymentAllotId")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " epad.ALLOTTED_AMT "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "+"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " epad.THIS_ALLOT_AMT "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " epad.CONTRACT_AMT")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#89DDFF" } }, "  "),
                  createVNode("span", { style: { "color": "#676E95" } }, "-- \u67E5\u51FA\u8BA4\u9886\u91D1\u989D\u8D85\u5DE5\u7A0B\u91D1\u989D\u7684\u660E\u7EC6")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95195\uFF1A\u5220\u9664\u5F02\u5E38\uFF1A\u65B0\u5EFA\u72B6\u6001\u4E0B\u7684\u8BA4\u9886\u624D\u53EF\u5220\u9664"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u5220\u9664\u8BA4\u9886\u5355\u65F6\uFF0C\u8BA4\u9886\u5355\u72B6\u6001(HZ_APPROVE_STATUS)\u975ENEW(\u65B0\u5EFA)\u6216INTERRUPT(\u9A73\u56DE)")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1Adelete\u65B9\u6CD5\u4E2D\u6821\u9A8C\u8BA4\u9886\u5355\u72B6\u6001\u4E3ANEW\u6216INTERRUPT\uFF0C\u5176\u4ED6\u72B6\u6001(\u5BA1\u6279\u4E2D/\u5DF2\u901A\u8FC7)\u4E0D\u5141\u8BB8\u5220\u9664\u3002\u5DF2\u5BA1\u6279\u901A\u8FC7\u7684\u8BA4\u9886\u5355\u9700\u8D70\u64A4\u9500\u6D41\u7A0B")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " epa.PAYMENT_ALLOT_ID, epa.PAYMENT_ALLOT_CODE, epa.HZ_APPROVE_STATUS, epa.VALID")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " EPM_PAYMENT_ALLOT epa")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " epa.PAYMENT_ALLOT_ID "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " :paymentAllotId")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#89DDFF" } }, "  "),
                  createVNode("span", { style: { "color": "#676E95" } }, "-- \u671F\u671B HZ_APPROVE_STATUS IN ('NEW', 'INTERRUPT')\uFF0C\u5426\u5219\u4E0D\u5141\u8BB8\u5220\u9664")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95196\uFF1A\u6D41\u7A0B\u53D1\u8D77\u5F02\u5E38\uFF0C\u5355\u636E\u4E3B\u952E\u4E3A\u7A7A"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u63D0\u4EA4\u8BA4\u9886\u5355\u65F6\uFF0C\u5DE5\u4F5C\u6D41\u56DE\u8C03\u7F3A\u5C11\u5355\u636EID(objId\u4E3A\u7A7A)")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u5DE5\u4F5C\u6D41\u56DE\u8C03\u65B9\u6CD5\u4E2D\u6821\u9A8CobjId\u975E\u7A7A\uFF0C\u56E0\u9700\u6309\u5355\u636EID\u5B9A\u4F4D\u8BA4\u9886\u5355\u8BB0\u5F55\u3002\u8BE5\u62A5\u9519\u4E3A\u963B\u65AD\u6027\u62A5\u9519\uFF0C\u9700\u68C0\u67E5\u5DE5\u4F5C\u6D41\u914D\u7F6E")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " epa.PAYMENT_ALLOT_ID, epa.PAYMENT_ALLOT_CODE, epa.HZ_INSTANCE_ID, epa.HZ_APPROVE_STATUS")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " EPM_PAYMENT_ALLOT epa")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " epa.PAYMENT_ALLOT_ID "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " :paymentAllotId")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#89DDFF" } }, "  "),
                  createVNode("span", { style: { "color": "#676E95" } }, "-- \u6821\u9A8C\u8BA4\u9886\u5355ID\u662F\u5426\u5B58\u5728")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95197\uFF1A\u6D41\u7A0B\u53D1\u8D77\u5F02\u5E38\uFF0C\u5355\u636E\u4E0D\u5B58\u5728"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u63D0\u4EA4\u8BA4\u9886\u5355\u65F6\uFF0C\u6309\u5355\u636EID\u67E5\u8BE2EPM_PAYMENT_ALLOT\u8FD4\u56DEnull")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u5DE5\u4F5C\u6D41\u56DE\u8C03\u65B9\u6CD5\u4E2D\u6309PAYMENT_ALLOT_ID\u67E5\u8BE2\u8BA4\u9886\u5355\uFF0C\u82E5\u8FD4\u56DEnull\u5219\u629B\u51FA\u963B\u65AD\u6027\u62A5\u9519\u3002\u53EF\u80FD\u539F\u56E0\uFF1A\u8BA4\u9886\u5355\u5DF2\u88AB\u5220\u9664\u3001ID\u4F20\u9012\u9519\u8BEF\u3002\u9700\u5237\u65B0\u5217\u8868")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " epa.PAYMENT_ALLOT_ID, epa.PAYMENT_ALLOT_CODE, epa.HZ_APPROVE_STATUS, epa.VALID")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " EPM_PAYMENT_ALLOT epa")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " epa.PAYMENT_ALLOT_ID "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " :paymentAllotId")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#89DDFF" } }, "  "),
                  createVNode("span", { style: { "color": "#676E95" } }, "-- \u82E5\u8FD4\u56DE\u7A7A\uFF0C\u8BF4\u660E\u8BA4\u9886\u5355\u4E0D\u5B58\u5728")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95198\uFF1A\u6D41\u7A0B\u53D1\u8D77\u5F02\u5E38\uFF0C\u5230\u6B3E\u5355\u4E0D\u5B58\u5728"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u63D0\u4EA4\u8BA4\u9886\u5355\u65F6\uFF0C\u5173\u8054\u7684\u5230\u6B3E\u5F15\u5165\u5355(PAYMENT_IMPORT_ID)\u5DF2\u88AB\u5220\u9664")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u5DE5\u4F5C\u6D41\u56DE\u8C03\u65B9\u6CD5\u4E2D\u6309PAYMENT_IMPORT_ID\u67E5\u8BE2EPM_PAYMENT_IMPORT\uFF0C\u82E5\u8FD4\u56DEnull\u5219\u629B\u51FA\u963B\u65AD\u6027\u62A5\u9519\u3002\u9700\u68C0\u67E5\u5230\u6B3E\u5F15\u5165\u6570\u636E")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " epa.PAYMENT_ALLOT_ID, epa.PAYMENT_IMPORT_ID, epi.PAYMENT_IMPORT_CODE, epi.VALID")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " EPM_PAYMENT_ALLOT epa")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "LEFT JOIN"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " EPM_PAYMENT_IMPORT epi "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ON"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " epa.PAYMENT_IMPORT_ID "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " epi.PAYMENT_IMPORT_ID")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " epa.PAYMENT_ALLOT_ID "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " :paymentAllotId")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#89DDFF" } }, "  "),
                  createVNode("span", { style: { "color": "#676E95" } }, "-- \u82E5PAYMENT_IMPORT_CODE\u4E3A\u7A7A\uFF0C\u8BF4\u660E\u5230\u6B3E\u5355\u4E0D\u5B58\u5728")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95199\uFF1A\u67E5\u8BE2\u8BA4\u9886\u6570\u636E\u4E3A\u7A7A"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u63A8\u9001ERP\u65F6\uFF0C\u8BA4\u9886\u5355\u5934\u884C\u6570\u636E\u67E5\u8BE2\u4E3A\u7A7A")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1AERP\u63A8\u9001\u65B9\u6CD5\u4E2D\u6309PAYMENT_ALLOT_ID\u67E5\u8BE2\u8BA4\u9886\u5355\u5934\u884C\u6570\u636E\uFF0C\u82E5\u4E3A\u7A7A\u5219\u629B\u51FA\u963B\u65AD\u6027\u62A5\u9519\u3002\u9700\u68C0\u67E5\u5934\u884C\u6570\u636E\u5B8C\u6574\u6027")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " epa.PAYMENT_ALLOT_ID, epa.PAYMENT_ALLOT_CODE, epa.HZ_APPROVE_STATUS,")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " EPM_PAYMENT_ALLOT_DETAIL epad")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "          "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " epad.PAYMENT_ALLOT_ID "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " epa.PAYMENT_ALLOT_ID) "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u660E\u7EC6\u884C\u6570")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " EPM_PAYMENT_ALLOT epa")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " epa.PAYMENT_ALLOT_ID "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " :paymentAllotId")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#89DDFF" } }, "  "),
                  createVNode("span", { style: { "color": "#676E95" } }, "-- \u82E5\u660E\u7EC6\u884C\u6570\u4E3A0\uFF0C\u5219\u89E6\u53D1\u8BE5\u62A5\u9519")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u951910\uFF1Aerp\u8FD4\u56DE\u8BA4\u9886\u7ED3\u679C\u4E3A\u7A7A"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u63A8\u9001ERP\u65F6\uFF0CERP\u63A5\u53E3\u8FD4\u56DE\u8BA4\u9886\u7ED3\u679C\u4E3A\u7A7A")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1AERP\u63A8\u9001\u65B9\u6CD5\u4E2D\u8C03\u7528ERP\u63A5\u53E3\u83B7\u53D6\u8BA4\u9886\u7ED3\u679C\uFF0C\u82E5\u8FD4\u56DEnull\u5219\u629B\u51FA\u963B\u65AD\u6027\u62A5\u9519\u3002\u53EF\u80FD\u539F\u56E0\uFF1AERP\u670D\u52A1\u4E0D\u53EF\u7528\u3001\u7F51\u7EDC\u5F02\u5E38\u3002\u9700\u68C0\u67E5ERP\u670D\u52A1\u72B6\u6001")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " :paymentAllotId")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " sem.OBJTYPENAME "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "\u5230\u6B3E\u8BA4\u9886"),
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
          createVNode("h4", null, "\u62A5\u951911\uFF1A\u8BA4\u9886\u63A8\u9001erp\u5F02\u5E38"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u63A8\u9001ERP\u65F6\uFF0CERP\u63A5\u53E3\u8FD4\u56DE\u9519\u8BEF\u4FE1\u606F")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " :paymentAllotId")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " sem.OBJTYPENAME "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "\u5230\u6B3E\u8BA4\u9886"),
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
          ]),
          createVNode("h4", null, "\u62A5\u951912\uFF1A\u67E5\u8BE2\u9879\u76EE\u5217\u8868\u5F02\u5E38\uFF0C\u672A\u6307\u5B9A\u5BA2\u6237id"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u67E5\u8BE2\u53EF\u8BA4\u9886\u9879\u76EE\u65F6\uFF0C\u5230\u6B3E\u5355\u7F3A\u5C11\u5BA2\u6237\u4FE1\u606F(CUSTOMER_ID\u4E3A\u7A7A)")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u67E5\u8BE2\u53EF\u8BA4\u9886\u9879\u76EE\u65B9\u6CD5\u4E2D\u6309CUSTOMER_ID\u67E5\u8BE2\u9879\u76EE\u5217\u8868\uFF0C\u82E5CUSTOMER_ID\u4E3A\u7A7A\u5219\u629B\u51FA\u963B\u65AD\u6027\u62A5\u9519\u3002\u9700\u68C0\u67E5\u5230\u6B3E\u5F15\u5165\u6570\u636E")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " epi.PAYMENT_IMPORT_ID, epi.PAYMENT_IMPORT_CODE, epi.CUSTOMER_ID, epi.CUSTOMER_CODE, epi.CUSTOMER_NAME")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " EPM_PAYMENT_IMPORT epi")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " epi.PAYMENT_IMPORT_ID "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " :paymentImportId")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " epi.CUSTOMER_ID "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NULL")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#89DDFF" } }, "  "),
                  createVNode("span", { style: { "color": "#676E95" } }, "-- \u67E5\u51FA\u5BA2\u6237ID\u4E3A\u7A7A\u7684\u5230\u6B3E\u5355")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u951913\uFF1A\u9879\u76EE\u5230\u6B3E\u5F15\u5165\u6570\u636E\u5F02\u5E38"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u67E5\u8BE2\u51FA\u5E93\u660E\u7EC6\u65F6\uFF0C\u5230\u6B3E\u5F15\u5165\u5355(PAYMENT_IMPORT_ID)\u4E0D\u5B58\u5728")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u67E5\u8BE2\u51FA\u5E93\u660E\u7EC6\u65B9\u6CD5\u4E2D\u6309PAYMENT_IMPORT_ID\u67E5\u8BE2EPM_PAYMENT_IMPORT\uFF0C\u82E5\u8FD4\u56DEnull\u5219\u629B\u51FA\u963B\u65AD\u6027\u62A5\u9519\u3002\u9700\u68C0\u67E5paymentImportId\u6709\u6548\u6027")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " epi.PAYMENT_IMPORT_ID, epi.PAYMENT_IMPORT_CODE, epi.PAYMENT_STATUS, epi.VALID")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " EPM_PAYMENT_IMPORT epi")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " epi.PAYMENT_IMPORT_ID "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " :paymentImportId")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#89DDFF" } }, "  "),
                  createVNode("span", { style: { "color": "#676E95" } }, "-- \u82E5\u8FD4\u56DE\u7A7A\uFF0C\u8BF4\u660E\u5230\u6B3E\u5F15\u5165\u5355\u4E0D\u5B58\u5728")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u951914\uFF1A\u9879\u76EE\u5408\u540C\u76F8\u5173\u4FE1\u606F\u5F02\u5E38"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u67E5\u8BE2\u51FA\u5E93\u660E\u7EC6\u65F6\uFF0C\u8BE5\u9879\u76EE\u4E0B\u65E0\u5DF2\u5BA1\u6279\u901A\u8FC7(HZ_APPROVE_STATUS=APPROVED)\u7684\u5408\u540C")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u67E5\u8BE2\u51FA\u5E93\u660E\u7EC6\u65B9\u6CD5\u4E2D\u6309PROJECT_ID\u67E5\u8BE2EPM_PROJECT_CONTRACT\uFF0C\u7B5B\u9009HZ_APPROVE_STATUS='APPROVED'\u7684\u5408\u540C\uFF0C\u82E5\u4E3A\u7A7A\u5219\u629B\u51FA\u963B\u65AD\u6027\u62A5\u9519\u3002\u9700\u68C0\u67E5\u5408\u540C\u5BA1\u6279\u72B6\u6001")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " epc.CONTRACT_ID, epc.CONTRACT_CODE, epc.CONTRACT_NAME, epc.PROJECT_ID,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         epc.HZ_APPROVE_STATUS, epc.VALID")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " EPM_PROJECT_CONTRACT epc")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " epc.PROJECT_ID "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " :projectId")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " epc.HZ_APPROVE_STATUS "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "APPROVED"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#89DDFF" } }, "  "),
                  createVNode("span", { style: { "color": "#676E95" } }, "-- \u82E5\u8FD4\u56DE\u7A7A\uFF0C\u8BF4\u660E\u8BE5\u9879\u76EE\u4E0B\u65E0\u5DF2\u5BA1\u6279\u901A\u8FC7\u7684\u5408\u540C")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u951915\uFF1A\u5355\u636Eid\u5F02\u5E38\uFF0C\u6838\u9500\u63A5\u53E3\u8FD4\u56DE\u4FE1\u606F"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u63A8\u9001ERP\u6838\u9500\u6570\u636E\u65F6\uFF0CERP\u63A5\u53E3\u8FD4\u56DE\u72B6\u6001(RETURN_STATUS)\u975ES(\u6210\u529F)")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1ApushAllotDataToErp\u65B9\u6CD5\u4E2D\u8C03\u7528ERP\u6838\u9500\u63A5\u53E3\uFF0C\u904D\u5386\u8FD4\u56DE\u7ED3\u679C\uFF0C\u82E5RETURN_STATUS\u975ES\u5219\u629B\u51FA\u963B\u65AD\u6027\u62A5\u9519\uFF0C\u63D0\u793A\u5355\u636EID\u548CERP\u8FD4\u56DE\u4FE1\u606F(RETURN_MESSAGE)\u3002\u9700\u67E5\u770B\u5177\u4F53\u9519\u8BEF\u5185\u5BB9\u5E76\u4FEE\u590D\u540E\u91CD\u65B0\u63D0\u4EA4")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " :paymentAllotId")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " sem.OBJTYPENAME "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "\u5230\u6B3E\u8BA4\u9886"),
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
                  createVNode("span", { style: { "color": "#676E95" } }, "-- \u67E5\u8BE2ERP\u6838\u9500\u63A5\u53E3\u5F02\u5E38\u8BB0\u5F55")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u951916\uFF1A\u6D41\u7A0B\u5B8C\u7ED3\u5F02\u5E38\uFF0C\u5355\u636E\u4E3B\u952E\u4E3A\u7A7A"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u5BA1\u6279\u5B8C\u7ED3(wfComplete)\u65F6\uFF0C\u5DE5\u4F5C\u6D41\u56DE\u8C03\u7F3A\u5C11\u5355\u636EID(objId\u4E3A\u7A7A\u6216\u4E3A0)")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1AwfComplete\u65B9\u6CD5\u4E2D\u6821\u9A8CobjId\u975E\u7A7A\u4E14\u975E0\uFF0C\u56E0\u9700\u6309\u5355\u636EID\u5B9A\u4F4D\u8BA4\u9886\u5355\u8BB0\u5F55\u3002\u8BE5\u62A5\u9519\u4E3A\u963B\u65AD\u6027\u62A5\u9519\uFF0C\u9700\u68C0\u67E5\u5DE5\u4F5C\u6D41\u914D\u7F6E")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " epa.PAYMENT_ALLOT_ID, epa.PAYMENT_ALLOT_CODE, epa.HZ_INSTANCE_ID, epa.HZ_APPROVE_STATUS")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " EPM_PAYMENT_ALLOT epa")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " epa.PAYMENT_ALLOT_ID "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " :paymentAllotId")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#89DDFF" } }, "  "),
                  createVNode("span", { style: { "color": "#676E95" } }, "-- \u6821\u9A8C\u8BA4\u9886\u5355ID\u662F\u5426\u5B58\u5728")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u951917\uFF1A\u6D41\u7A0B\u5B8C\u7ED3\u5F02\u5E38\uFF0C\u5355\u636E\u4E0D\u5B58\u5728"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u5BA1\u6279\u5B8C\u7ED3(wfComplete)\u65F6\uFF0C\u6309\u5355\u636EID\u67E5\u8BE2EPM_PAYMENT_ALLOT\u8FD4\u56DEnull")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1AwfComplete\u65B9\u6CD5\u4E2D\u6309PAYMENT_ALLOT_ID\u67E5\u8BE2\u8BA4\u9886\u5355\uFF0C\u82E5\u8FD4\u56DEnull\u5219\u629B\u51FA\u963B\u65AD\u6027\u62A5\u9519\u3002\u53EF\u80FD\u539F\u56E0\uFF1A\u8BA4\u9886\u5355\u5DF2\u88AB\u5220\u9664\u3001ID\u4F20\u9012\u9519\u8BEF\u3002\u9700\u5237\u65B0\u5217\u8868")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " epa.PAYMENT_ALLOT_ID, epa.PAYMENT_ALLOT_CODE, epa.HZ_APPROVE_STATUS, epa.VALID")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " EPM_PAYMENT_ALLOT epa")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " epa.PAYMENT_ALLOT_ID "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " :paymentAllotId")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#89DDFF" } }, "  "),
                  createVNode("span", { style: { "color": "#676E95" } }, "-- \u82E5\u8FD4\u56DE\u7A7A\uFF0C\u8BF4\u660E\u8BA4\u9886\u5355\u4E0D\u5B58\u5728")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u951918\uFF1A\u6D41\u7A0B\u7EC8\u6B62\u5F02\u5E38\uFF0C\u5355\u636E\u4E3B\u952E\u4E3A\u7A7A"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u6D41\u7A0B\u7EC8\u6B62(eventExecute)\u65F6\uFF0C\u5DE5\u4F5C\u6D41\u56DE\u8C03\u7F3A\u5C11\u5355\u636EID(objId\u4E3A\u7A7A\u6216\u4E3A0)")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1AeventExecute\u65B9\u6CD5\u4E2D\u6821\u9A8CobjId\u975E\u7A7A\u4E14\u975E0\uFF0C\u56E0\u9700\u6309\u5355\u636EID\u5B9A\u4F4D\u8BA4\u9886\u5355\u8BB0\u5F55\u5E76\u53D1\u9001ERP CANCEL\u3002\u8BE5\u62A5\u9519\u4E3A\u963B\u65AD\u6027\u62A5\u9519\uFF0C\u9700\u68C0\u67E5\u5DE5\u4F5C\u6D41\u914D\u7F6E")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " epa.PAYMENT_ALLOT_ID, epa.PAYMENT_ALLOT_CODE, epa.HZ_APPROVE_STATUS, epa.HZ_INSTANCE_ID")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " EPM_PAYMENT_ALLOT epa")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " epa.PAYMENT_ALLOT_ID "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " :paymentAllotId")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#89DDFF" } }, "  "),
                  createVNode("span", { style: { "color": "#676E95" } }, "-- \u6821\u9A8C\u8BA4\u9886\u5355ID\u662F\u5426\u5B58\u5728")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u951919\uFF1A\u5230\u6B3E\u8BA4\u9886\u5F02\u5E38\uFF0C\u672A\u6307\u5B9A\u5230\u6B3E\u5355id"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u67E5\u8BE2\u8BA4\u9886\u4FE1\u606F\u65F6\uFF0C\u5230\u6B3E\u5355ID(paymentImportId)\u672A\u6307\u5B9A")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u67E5\u8BE2\u65B9\u6CD5\u4E2D\u6821\u9A8CpaymentImportId\u975E\u7A7A\uFF0C\u56E0\u9700\u6309\u5230\u6B3E\u5355ID\u67E5\u8BE2\u8BA4\u9886\u6570\u636E\u3002\u9700\u4F20\u5165\u6709\u6548\u5230\u6B3E\u5355ID")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " epi.PAYMENT_IMPORT_ID, epi.PAYMENT_IMPORT_CODE, epi.PAYMENT_STATUS, epi.UNALLOT_AMT")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " EPM_PAYMENT_IMPORT epi")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " epi.PAYMENT_IMPORT_ID "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " :paymentImportId")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#89DDFF" } }, "  "),
                  createVNode("span", { style: { "color": "#676E95" } }, "-- \u6821\u9A8C\u5230\u6B3E\u5355ID\u662F\u5426\u6709\u6548")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u951920\uFF1A\u67E5\u8BE2\u5230\u6B3E\u8BA4\u9886\u5355\u6570\u636E\u4E3A\u7A7A"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u67E5\u8BE2\u8BA4\u9886\u4FE1\u606F\u65F6\uFF0C\u6309\u5230\u6B3E\u5355ID\u67E5\u8BE2\u8BA4\u9886\u5355\u6570\u636E\u8FD4\u56DE\u7A7A")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u67E5\u8BE2\u65B9\u6CD5\u4E2D\u6309paymentImportId\u67E5\u8BE2EPM_PAYMENT_ALLOT\uFF0C\u82E5\u8FD4\u56DE\u7A7A\u5219\u629B\u51FA\u963B\u65AD\u6027\u62A5\u9519\u3002\u9700\u68C0\u67E5\u8BA4\u9886\u5355ID\u6709\u6548\u6027")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " epa.PAYMENT_ALLOT_ID, epa.PAYMENT_ALLOT_CODE, epa.PAYMENT_IMPORT_ID, epa.HZ_APPROVE_STATUS")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " EPM_PAYMENT_ALLOT epa")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " epa.PAYMENT_IMPORT_ID "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " :paymentImportId")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#89DDFF" } }, "  "),
                  createVNode("span", { style: { "color": "#676E95" } }, "-- \u82E5\u8FD4\u56DE\u7A7A\uFF0C\u8BF4\u660E\u8BE5\u5230\u6B3E\u5355\u4E0B\u65E0\u8BA4\u9886\u5355")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u951921\uFF1A\u67E5\u8BE2\u9879\u76EE\u5217\u8868\u5F02\u5E38\uFF0C\u672A\u6307\u5B9A\u4EA4\u6613\u516C\u53F8id"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u67E5\u8BE2\u53EF\u8BA4\u9886\u9879\u76EE\u65F6\uFF0C\u5230\u6B3E\u5355\u7F3A\u5C11\u4EA4\u6613\u516C\u53F8\u4FE1\u606F(RECEIVE_UNIT_ID\u4E3A\u7A7A)")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u67E5\u8BE2\u53EF\u8BA4\u9886\u9879\u76EE\u65B9\u6CD5\u4E2D\u6309RECEIVE_UNIT_ID\u7B5B\u9009\u9879\u76EE\uFF0C\u82E5\u4E3A\u7A7A\u5219\u629B\u51FA\u963B\u65AD\u6027\u62A5\u9519\u3002\u9700\u68C0\u67E5\u5230\u6B3E\u5F15\u5165\u6570\u636E")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " epi.PAYMENT_IMPORT_ID, epi.PAYMENT_IMPORT_CODE, epi.RECEIVE_UNIT_ID, epi.RECEIVE_UNIT_NAME")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " EPM_PAYMENT_IMPORT epi")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " epi.PAYMENT_IMPORT_ID "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " :paymentImportId")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " epi.RECEIVE_UNIT_ID "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NULL")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#89DDFF" } }, "  "),
                  createVNode("span", { style: { "color": "#676E95" } }, "-- \u67E5\u51FA\u4EA4\u6613\u516C\u53F8ID\u4E3A\u7A7A\u7684\u5230\u6B3E\u5355")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u951922\uFF1A\u67E5\u8BE2\u9879\u76EE\u5217\u8868\u5F02\u5E38\uFF0C\u672A\u6307\u5B9A\u6536\u6B3E\u516C\u53F8id"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u67E5\u8BE2\u53EF\u8BA4\u9886\u9879\u76EE\u65F6\uFF0C\u5230\u6B3E\u5355\u7F3A\u5C11\u6536\u6B3E\u516C\u53F8\u4FE1\u606F(REMIT_UNIT_ID\u4E3A\u7A7A)")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u67E5\u8BE2\u53EF\u8BA4\u9886\u9879\u76EE\u65B9\u6CD5\u4E2D\u6309REMIT_UNIT_ID\u7B5B\u9009\u9879\u76EE\uFF0C\u82E5\u4E3A\u7A7A\u5219\u629B\u51FA\u963B\u65AD\u6027\u62A5\u9519\u3002\u9700\u68C0\u67E5\u5230\u6B3E\u5F15\u5165\u6570\u636E")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " epi.PAYMENT_IMPORT_ID, epi.PAYMENT_IMPORT_CODE, epi.REMIT_UNIT_ID, epi.REMIT_UNIT_NAME")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " EPM_PAYMENT_IMPORT epi")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " epi.PAYMENT_IMPORT_ID "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " :paymentImportId")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " epi.REMIT_UNIT_ID "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NULL")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#89DDFF" } }, "  "),
                  createVNode("span", { style: { "color": "#676E95" } }, "-- \u67E5\u51FA\u6536\u6B3E\u516C\u53F8ID\u4E3A\u7A7A\u7684\u5230\u6B3E\u5355")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u951923\uFF1A\u67E5\u8BE2\u5408\u540C\u5217\u8868\u5F02\u5E38\uFF0C\u672A\u6307\u5B9A\u9879\u76EEid"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u67E5\u8BE2\u53EF\u8BA4\u9886\u5408\u540C\u65F6\uFF0C\u672A\u6307\u5B9A\u9879\u76EEID(projectId\u4E3A\u7A7A)")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u67E5\u8BE2\u53EF\u8BA4\u9886\u5408\u540C\u65B9\u6CD5\u4E2D\u6821\u9A8CprojectId\u975E\u7A7A\uFF0C\u56E0\u9700\u6309\u9879\u76EEID\u67E5\u8BE2\u8BE5\u9879\u76EE\u4E0B\u5DF2\u5BA1\u6279\u901A\u8FC7\u7684\u5408\u540C\u3002\u9700\u5148\u9009\u62E9\u9879\u76EE")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " epa.PAYMENT_ALLOT_ID, epa.PAYMENT_ALLOT_CODE, epa.PROJECT_ID")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " EPM_PAYMENT_ALLOT epa")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " epa.PAYMENT_ALLOT_ID "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " :paymentAllotId")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " epa.PROJECT_ID "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NULL")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#89DDFF" } }, "  "),
                  createVNode("span", { style: { "color": "#676E95" } }, "-- \u67E5\u51FA\u9879\u76EEID\u4E3A\u7A7A\u7684\u8BA4\u9886\u5355")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u951924\uFF1A\u67E5\u8BE2\u53EF\u8BA4\u9886\u660E\u7EC6\u5F02\u5E38\uFF0C\u672A\u6307\u5B9A\u9879\u76EEid"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u67E5\u8BE2\u53EF\u8BA4\u9886\u51FA\u5E93\u660E\u7EC6\u65F6\uFF0C\u672A\u6307\u5B9A\u9879\u76EEID(projectId\u4E3A\u7A7A)")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u67E5\u8BE2\u53EF\u8BA4\u9886\u660E\u7EC6\u65B9\u6CD5\u4E2D\u6821\u9A8CprojectId\u975E\u7A7A\uFF0C\u56E0\u9700\u6309\u9879\u76EEID\u67E5\u8BE2\u51FA\u5E93\u7B7E\u6536\u660E\u7EC6\u3002\u9700\u5148\u9009\u62E9\u9879\u76EE")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " epa.PAYMENT_ALLOT_ID, epa.PAYMENT_ALLOT_CODE, epa.PROJECT_ID")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " EPM_PAYMENT_ALLOT epa")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " epa.PAYMENT_ALLOT_ID "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " :paymentAllotId")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " epa.PROJECT_ID "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NULL")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#89DDFF" } }, "  "),
                  createVNode("span", { style: { "color": "#676E95" } }, "-- \u67E5\u51FA\u9879\u76EEID\u4E3A\u7A7A\u7684\u8BA4\u9886\u5355")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u951925\uFF1A\u672A\u6307\u5B9A\u5230\u6B3E\u8BA4\u9886id"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u83B7\u53D6\u5269\u4F59\u53EF\u8BA4\u6B3E\u91D1\u989D\u65F6\uFF0C\u8BA4\u9886\u5355ID(paymentAllotId)\u672A\u6307\u5B9A")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1AgetPaymentImportCanAllotAmt\u65B9\u6CD5\u4E2D\u6821\u9A8CpaymentAllotId\u975E\u7A7A\uFF0C\u56E0\u9700\u6309\u8BA4\u9886\u5355ID\u67E5\u8BE2\u5173\u8054\u7684\u5230\u6B3E\u5355\u3002\u9700\u4F20\u5165\u6709\u6548\u8BA4\u9886\u5355ID")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " epa.PAYMENT_ALLOT_ID, epa.PAYMENT_ALLOT_CODE, epa.PAYMENT_IMPORT_ID")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " EPM_PAYMENT_ALLOT epa")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " epa.PAYMENT_ALLOT_ID "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " :paymentAllotId")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#89DDFF" } }, "  "),
                  createVNode("span", { style: { "color": "#676E95" } }, "-- \u6821\u9A8C\u8BA4\u9886\u5355ID\u662F\u5426\u6709\u6548")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u951926\uFF1A\u672A\u627E\u5230\u8BE5\u5230\u6B3E\u8BA4\u9886"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u83B7\u53D6\u5269\u4F59\u53EF\u8BA4\u6B3E\u91D1\u989D\u65F6\uFF0C\u6309\u8BA4\u9886\u5355ID\u67E5\u8BE2EPM_PAYMENT_ALLOT\u8FD4\u56DEnull")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1AgetPaymentImportCanAllotAmt\u65B9\u6CD5\u4E2D\u6309PAYMENT_ALLOT_ID\u67E5\u8BE2\u8BA4\u9886\u5355\uFF0C\u82E5\u8FD4\u56DEnull\u5219\u629B\u51FA\u963B\u65AD\u6027\u62A5\u9519\u3002\u53EF\u80FD\u539F\u56E0\uFF1A\u8BA4\u9886\u5355\u5DF2\u5220\u9664\u3001ID\u4F20\u9012\u9519\u8BEF\u3002\u9700\u68C0\u67E5\u8BA4\u9886\u5355ID")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " epa.PAYMENT_ALLOT_ID, epa.PAYMENT_ALLOT_CODE, epa.HZ_APPROVE_STATUS, epa.VALID")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " EPM_PAYMENT_ALLOT epa")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " epa.PAYMENT_ALLOT_ID "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " :paymentAllotId")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#89DDFF" } }, "  "),
                  createVNode("span", { style: { "color": "#676E95" } }, "-- \u82E5\u8FD4\u56DE\u7A7A\uFF0C\u8BF4\u660E\u8BA4\u9886\u5355\u4E0D\u5B58\u5728")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u951927\uFF1A\u5220\u9664\u5F02\u5E38\uFF1A\u672A\u6307\u5B9A\u5230\u6B3E\u8BA4\u9886id"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u5220\u9664\u8BA4\u9886\u5355\u65F6\uFF0C\u8BA4\u9886\u5355ID(paymentAllotId)\u672A\u6307\u5B9A")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1AdeleteAllot\u65B9\u6CD5\u4E2D\u6821\u9A8CpaymentAllotId\u975E\u7A7A\uFF0C\u56E0\u9700\u6309ID\u5B9A\u4F4D\u8BA4\u9886\u5355\u8BB0\u5F55\u3002\u9700\u4F20\u5165\u6709\u6548\u8BA4\u9886\u5355ID")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " epa.PAYMENT_ALLOT_ID, epa.PAYMENT_ALLOT_CODE, epa.HZ_APPROVE_STATUS")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " EPM_PAYMENT_ALLOT epa")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " epa.PAYMENT_ALLOT_ID "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " :paymentAllotId")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#89DDFF" } }, "  "),
                  createVNode("span", { style: { "color": "#676E95" } }, "-- \u6821\u9A8C\u8BA4\u9886\u5355ID\u662F\u5426\u6709\u6548")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u951928\uFF1A\u5220\u9664\u5F02\u5E38\uFF1A\u672A\u67E5\u8BE2\u5230\u8BE5\u8BA4\u9886\u5355"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u5220\u9664\u8BA4\u9886\u5355\u65F6\uFF0C\u6309\u8BA4\u9886\u5355ID\u67E5\u8BE2EPM_PAYMENT_ALLOT\u8FD4\u56DEnull")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1AdeleteAllot\u65B9\u6CD5\u4E2D\u6309PAYMENT_ALLOT_ID\u67E5\u8BE2\u8BA4\u9886\u5355\uFF0C\u82E5\u8FD4\u56DEnull\u5219\u629B\u51FA\u963B\u65AD\u6027\u62A5\u9519\u3002\u53EF\u80FD\u539F\u56E0\uFF1A\u8BA4\u9886\u5355\u5DF2\u88AB\u5220\u9664\u3002\u9700\u5237\u65B0\u5217\u8868")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " epa.PAYMENT_ALLOT_ID, epa.PAYMENT_ALLOT_CODE, epa.HZ_APPROVE_STATUS, epa.VALID")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " EPM_PAYMENT_ALLOT epa")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " epa.PAYMENT_ALLOT_ID "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " :paymentAllotId")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#89DDFF" } }, "  "),
                  createVNode("span", { style: { "color": "#676E95" } }, "-- \u82E5\u8FD4\u56DE\u7A7A\uFF0C\u8BF4\u660E\u8BA4\u9886\u5355\u4E0D\u5B58\u5728")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u951929\uFF1A\u5220\u9664\u5F02\u5E38\uFF1A\u672A\u627E\u5230\u8BE5\u5230\u6B3E\u5355"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u5220\u9664\u8BA4\u9886\u5355\u65F6\uFF0C\u5173\u8054\u7684\u5230\u6B3E\u5F15\u5165\u5355(PAYMENT_IMPORT_ID)\u4E0D\u5B58\u5728")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1AdeleteAllot\u65B9\u6CD5\u4E2D\u6309PAYMENT_IMPORT_ID\u67E5\u8BE2EPM_PAYMENT_IMPORT\uFF0C\u82E5\u8FD4\u56DEnull\u5219\u629B\u51FA\u963B\u65AD\u6027\u62A5\u9519\u3002\u9700\u68C0\u67E5\u5230\u6B3E\u5F15\u5165\u6570\u636E")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " epa.PAYMENT_ALLOT_ID, epa.PAYMENT_IMPORT_ID, epi.PAYMENT_IMPORT_CODE, epi.VALID")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " EPM_PAYMENT_ALLOT epa")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "LEFT JOIN"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " EPM_PAYMENT_IMPORT epi "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ON"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " epa.PAYMENT_IMPORT_ID "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " epi.PAYMENT_IMPORT_ID")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " epa.PAYMENT_ALLOT_ID "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " :paymentAllotId")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#89DDFF" } }, "  "),
                  createVNode("span", { style: { "color": "#676E95" } }, "-- \u82E5PAYMENT_IMPORT_CODE\u4E3A\u7A7A\uFF0C\u8BF4\u660E\u5230\u6B3E\u5355\u4E0D\u5B58\u5728")
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
        _push2(`<ul${_scopeId}><li${_scopeId}>\u95EE\u98981\uFF1A\u8BA4\u9886\u91D1\u989D\u4E0E\u5230\u6B3E\u5355\u53EF\u8BA4\u9886\u91D1\u989D\u4E0D\u4E00\u81F4</li><li${_scopeId}>\u539F\u56E0\uFF1A\u5E76\u53D1\u8BA4\u9886\u5BFC\u81F4\u53EF\u8BA4\u9886\u91D1\u989D\u88AB\u5176\u4ED6\u8BA4\u9886\u5355\u5360\u7528\uFF0C\u771F\u5B9E\u5230\u6B3E\u5355\u4EE5ERP\u5B9E\u65F6\u6570\u636E\u4E3A\u51C6</li><li${_scopeId}>\u89E3\u51B3\u601D\u8DEF\uFF1A1.\u5237\u65B0\u9875\u9762\u91CD\u65B0\u83B7\u53D6\u6700\u65B0\u53EF\u8BA4\u9886\u91D1\u989D\uFF1B2.\u51CF\u5C11\u672C\u6B21\u8BA4\u9886\u91D1\u989D\uFF1B3.\u771F\u5B9E\u5230\u6B3E\u5355\u4F1A\u81EA\u52A8\u67E5ERP\u6700\u65B0\u6570\u636E</li></ul><ul${_scopeId}><li${_scopeId}>\u95EE\u98982\uFF1AERP\u63A8\u9001\u5931\u8D25</li><li${_scopeId}>\u539F\u56E0\uFF1AERP\u63A5\u53E3\u4E0D\u53EF\u7528\u6216\u63A8\u9001\u6570\u636E\u5F02\u5E38</li><li${_scopeId}>\u89E3\u51B3\u601D\u8DEF\uFF1A1.\u68C0\u67E5ERP\u63A5\u53E3\u72B6\u6001\uFF1B2.\u68C0\u67E5\u63A8\u9001\u6570\u636E\u662F\u5426\u5B8C\u6574\uFF1B3.\u4FEE\u590D\u540E\u91CD\u65B0\u63D0\u4EA4</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>*</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> sys_exception_msg </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>objid</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> {paymentAllotId} </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> objtypename </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>\u5230\u6B3E\u8BA4\u9886</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><ul${_scopeId}><li${_scopeId}>\u95EE\u98983\uFF1A\u53EF\u8BA4\u9886\u9879\u76EE/\u5408\u540C/\u660E\u7EC6\u67E5\u8BE2\u4E3A\u7A7A</li><li${_scopeId}>\u539F\u56E0\uFF1A\u5408\u540C\u672A\u5BA1\u6279\u901A\u8FC7\u3001\u5BA2\u6237/\u4EA4\u6613\u516C\u53F8/\u6536\u6B3E\u516C\u53F8\u4E0D\u5339\u914D\u3001\u5408\u540C\u91D1\u989D\u5DF2\u5168\u90E8\u8BA4\u9886</li><li${_scopeId}>\u89E3\u51B3\u601D\u8DEF\uFF1A1.\u68C0\u67E5\u5408\u540C\u662F\u5426\u5BA1\u6279\u901A\u8FC7\uFF1B2.\u68C0\u67E5\u5230\u6B3E\u5355\u5BA2\u6237\u4E0E\u5408\u540C\u5BA2\u6237\u662F\u5426\u4E00\u81F4\uFF1B3.\u68C0\u67E5\u5408\u540C\u662F\u5426\u8FD8\u6709\u5269\u4F59\u53EF\u8BA4\u9886\u91D1\u989D</li></ul><ul${_scopeId}><li${_scopeId}>\u95EE\u98984\uFF1A\u5220\u9664\u8BA4\u9886\u5355\u5931\u8D25</li><li${_scopeId}>\u539F\u56E0\uFF1A\u4EC5NEW\u548CINTERRUPT\u72B6\u6001\u7684\u8BA4\u9886\u5355\u53EF\u5220\u9664</li><li${_scopeId}>\u89E3\u51B3\u601D\u8DEF\uFF1A\u786E\u8BA4\u8BA4\u9886\u5355\u72B6\u6001\u4E3A\u65B0\u5EFA\u6216\u9A73\u56DE\u540E\u518D\u5220\u9664\uFF1B\u82E5\u5DF2\u5BA1\u6279\u901A\u8FC7\u9700\u8D70\u64A4\u9500\u6D41\u7A0B</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, "\u95EE\u98981\uFF1A\u8BA4\u9886\u91D1\u989D\u4E0E\u5230\u6B3E\u5355\u53EF\u8BA4\u9886\u91D1\u989D\u4E0D\u4E00\u81F4"),
            createVNode("li", null, "\u539F\u56E0\uFF1A\u5E76\u53D1\u8BA4\u9886\u5BFC\u81F4\u53EF\u8BA4\u9886\u91D1\u989D\u88AB\u5176\u4ED6\u8BA4\u9886\u5355\u5360\u7528\uFF0C\u771F\u5B9E\u5230\u6B3E\u5355\u4EE5ERP\u5B9E\u65F6\u6570\u636E\u4E3A\u51C6"),
            createVNode("li", null, "\u89E3\u51B3\u601D\u8DEF\uFF1A1.\u5237\u65B0\u9875\u9762\u91CD\u65B0\u83B7\u53D6\u6700\u65B0\u53EF\u8BA4\u9886\u91D1\u989D\uFF1B2.\u51CF\u5C11\u672C\u6B21\u8BA4\u9886\u91D1\u989D\uFF1B3.\u771F\u5B9E\u5230\u6B3E\u5355\u4F1A\u81EA\u52A8\u67E5ERP\u6700\u65B0\u6570\u636E")
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u95EE\u98982\uFF1AERP\u63A8\u9001\u5931\u8D25"),
            createVNode("li", null, "\u539F\u56E0\uFF1AERP\u63A5\u53E3\u4E0D\u53EF\u7528\u6216\u63A8\u9001\u6570\u636E\u5F02\u5E38"),
            createVNode("li", null, "\u89E3\u51B3\u601D\u8DEF\uFF1A1.\u68C0\u67E5ERP\u63A5\u53E3\u72B6\u6001\uFF1B2.\u68C0\u67E5\u63A8\u9001\u6570\u636E\u662F\u5426\u5B8C\u6574\uFF1B3.\u4FEE\u590D\u540E\u91CD\u65B0\u63D0\u4EA4")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " {paymentAllotId} "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " objtypename "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "\u5230\u6B3E\u8BA4\u9886"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u95EE\u98983\uFF1A\u53EF\u8BA4\u9886\u9879\u76EE/\u5408\u540C/\u660E\u7EC6\u67E5\u8BE2\u4E3A\u7A7A"),
            createVNode("li", null, "\u539F\u56E0\uFF1A\u5408\u540C\u672A\u5BA1\u6279\u901A\u8FC7\u3001\u5BA2\u6237/\u4EA4\u6613\u516C\u53F8/\u6536\u6B3E\u516C\u53F8\u4E0D\u5339\u914D\u3001\u5408\u540C\u91D1\u989D\u5DF2\u5168\u90E8\u8BA4\u9886"),
            createVNode("li", null, "\u89E3\u51B3\u601D\u8DEF\uFF1A1.\u68C0\u67E5\u5408\u540C\u662F\u5426\u5BA1\u6279\u901A\u8FC7\uFF1B2.\u68C0\u67E5\u5230\u6B3E\u5355\u5BA2\u6237\u4E0E\u5408\u540C\u5BA2\u6237\u662F\u5426\u4E00\u81F4\uFF1B3.\u68C0\u67E5\u5408\u540C\u662F\u5426\u8FD8\u6709\u5269\u4F59\u53EF\u8BA4\u9886\u91D1\u989D")
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u95EE\u98984\uFF1A\u5220\u9664\u8BA4\u9886\u5355\u5931\u8D25"),
            createVNode("li", null, "\u539F\u56E0\uFF1A\u4EC5NEW\u548CINTERRUPT\u72B6\u6001\u7684\u8BA4\u9886\u5355\u53EF\u5220\u9664"),
            createVNode("li", null, "\u89E3\u51B3\u601D\u8DEF\uFF1A\u786E\u8BA4\u8BA4\u9886\u5355\u72B6\u6001\u4E3A\u65B0\u5EFA\u6216\u9A73\u56DE\u540E\u518D\u5220\u9664\uFF1B\u82E5\u5DF2\u5BA1\u6279\u901A\u8FC7\u9700\u8D70\u64A4\u9500\u6D41\u7A0B")
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
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u65E5\u671F</th><th${_scopeId}>\u63D0\u4EA4ID</th><th${_scopeId}>\u63D0\u4EA4\u4EBA</th><th${_scopeId}>\u63D0\u4EA4\u5185\u5BB9</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>2026-08-30</td><td${_scopeId}>-</td><td${_scopeId}>-</td><td${_scopeId}>\u6309skill\u89C4\u8303\u91CD\u5199\u77E5\u8BC6\u5E93\u6587\u6863</td></tr><tr${_scopeId}><td${_scopeId}>2026-07-31</td><td${_scopeId}>-</td><td${_scopeId}>-</td><td${_scopeId}>\u521D\u59CB\u751F\u6210\u77E5\u8BC6\u5E93\u6587\u6863</td></tr><tr${_scopeId}><td${_scopeId}>2025-12-06</td><td${_scopeId}>-</td><td${_scopeId}>tzx</td><td${_scopeId}>\u65B0\u589E\u5230\u6B3E\u5F15\u5165\u5B9E\u65F6\u83B7\u53D6\u5269\u4F59\u53EF\u8BA4\u6B3E\u91D1\u989D</td></tr><tr${_scopeId}><td${_scopeId}>2025-12-02</td><td${_scopeId}>-</td><td${_scopeId}>tzx</td><td${_scopeId}>\u521D\u59CB\u521B\u5EFA\u5230\u6B3E\u8BA4\u9886\u529F\u80FD</td></tr></tbody></table>`);
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
                createVNode("td", null, "2025-12-06"),
                createVNode("td", null, "-"),
                createVNode("td", null, "tzx"),
                createVNode("td", null, "\u65B0\u589E\u5230\u6B3E\u5F15\u5165\u5B9E\u65F6\u83B7\u53D6\u5269\u4F59\u53EF\u8BA4\u6B3E\u91D1\u989D")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "2025-12-02"),
                createVNode("td", null, "-"),
                createVNode("td", null, "tzx"),
                createVNode("td", null, "\u521D\u59CB\u521B\u5EFA\u5230\u6B3E\u8BA4\u9886\u529F\u80FD")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("\u5DE5\u7A0B\u7BA1\u7406/\u9879\u76EE\u5F80\u6765/\u9879\u76EE\u5230\u6B3E\u8BA4\u9886/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
