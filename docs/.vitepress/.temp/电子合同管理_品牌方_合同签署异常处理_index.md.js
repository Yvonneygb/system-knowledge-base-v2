import { resolveComponent, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.6ab74304.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"\u7535\u5B50\u5408\u540C\u7BA1\u7406/\u54C1\u724C\u65B9/\u5408\u540C\u7B7E\u7F72\u5F02\u5E38\u5904\u7406/index.md"}');
const _sfc_main = { name: "\u7535\u5B50\u5408\u540C\u7BA1\u7406/\u54C1\u724C\u65B9/\u5408\u540C\u7B7E\u7F72\u5F02\u5E38\u5904\u7406/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_BreadcrumbTabs = resolveComponent("BreadcrumbTabs");
  const _component_KbCard = resolveComponent("KbCard");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_BreadcrumbTabs, null, null, _parent));
  _push(`<div id="biz-intro" style="${ssrRenderStyle({ "display": "none" })}"><div class="tab-pad"><div class="kl-wrap"><div class="kl-card"><div class="biz-kl-hdr"><span class="biz-tag" style="${ssrRenderStyle({ "background": "rgba(124,58,237,0.08)", "color": "#7C3AED", "border-color": "rgba(124,58,237,0.18)" })}">\u4E1A\u52A1\u662F\u4EC0\u4E48</span><h2>\u5408\u540C\u7B7E\u7F72\u5F02\u5E38\u5904\u7406</h2><p>\u5728\u7535\u5B50\u5408\u540C\u7B7E\u7F72\u8FC7\u7A0B\u4E2D\u51FA\u73B0\u5F02\u5E38\u65F6\uFF0C\u6309\u7C7B\u578B\u6062\u590D\u6216\u7EC8\u6B62\uFF0C\u4FDD\u969C\u5408\u540C\u6D41\u7A0B\u4E0D\u5361\u6B7B</p></div><div class="biz-2col-inner"><div class="kl-col-box"><div style="${ssrRenderStyle({ "display": "flex", "align-items": "center", "gap": "10px", "margin-bottom": "12px" })}"><div style="${ssrRenderStyle({ "width": "40px", "height": "40px", "border-radius": "10px", "display": "flex", "align-items": "center", "justify-content": "center", "flex-shrink": "0", "background": "linear-gradient(135deg,#7C3AED,#A78BFA)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" stroke-width="1.5"><circle cx="8" cy="8" r="6"></circle><path d="M8 5V8L10 10"></path></svg></div><h4 style="${ssrRenderStyle({ "font-size": "1rem", "font-weight": "800", "color": "#1F2937", "margin": "0" })}">\u4E3A\u4F55\u8981\u5904\u7406\u5F02\u5E38</h4></div><p style="${ssrRenderStyle({ "font-size": "0.78rem", "font-weight": "600", "color": "#6B7280", "margin": "0 0 10px" })}">\u89E3\u51B3\u4E24\u4E2A\u4E1A\u52A1\u75DB\u70B9</p><div style="${ssrRenderStyle({ "display": "flex", "flex-direction": "column", "gap": "8px" })}"><div style="${ssrRenderStyle({ "display": "flex", "align-items": "flex-start", "gap": "8px", "padding": "8px 10px", "background": "#F5F3FF", "border-radius": "8px" })}"><div style="${ssrRenderStyle({ "font-size": ".75rem" })}"><strong>\u6D41\u7A0B\u4E0D\u5361\u6B7B</strong> \u2014 \u7B7E\u7F72\u5F02\u5E38\u9700\u6709\u51FA\u53E3\uFF0C\u5426\u5219\u5408\u540C\u957F\u671F\u6302\u8D77</div></div><div style="${ssrRenderStyle({ "display": "flex", "align-items": "flex-start", "gap": "8px", "padding": "8px 10px", "background": "#F5F3FF", "border-radius": "8px" })}"><div style="${ssrRenderStyle({ "font-size": ".75rem" })}"><strong>\u72B6\u6001\u53EF\u6062\u590D</strong> \u2014 \u53EF\u91CD\u8BD5\u7684\u5F02\u5E38\u5E94\u652F\u6301\u6062\u590D\uFF0C\u51CF\u5C11\u91CD\u7B7E\u6210\u672C</div></div></div></div><div class="kl-col-box alt"><div style="${ssrRenderStyle({ "display": "flex", "align-items": "center", "gap": "10px", "margin-bottom": "12px" })}"><div style="${ssrRenderStyle({ "width": "40px", "height": "40px", "border-radius": "10px", "display": "flex", "align-items": "center", "justify-content": "center", "flex-shrink": "0", "background": "linear-gradient(135deg,#7C3AED,#A78BFA)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" stroke-width="1.5"><path d="M3 4H13V12H3Z"></path><path d="M6 7L8 9L10 6"></path></svg></div><h4 style="${ssrRenderStyle({ "font-size": "1rem", "font-weight": "800", "color": "#1F2937", "margin": "0" })}">\u5F02\u5E38\u5206\u51E0\u7C7B</h4></div><p style="${ssrRenderStyle({ "font-size": "0.78rem", "font-weight": "600", "color": "#6B7280", "margin": "0 0 10px" })}">\u56DB\u7C7B\u5E38\u89C1\u5F02\u5E38</p><div style="${ssrRenderStyle({ "display": "flex", "flex-direction": "column", "gap": "8px" })}"><div style="${ssrRenderStyle({ "display": "flex", "align-items": "flex-start", "gap": "8px", "padding": "8px 10px", "background": "#F0FDF4", "border-radius": "8px" })}"><div style="${ssrRenderStyle({ "font-size": ".75rem" })}"><strong>\u62D2\u7B7E/ OA\u9A73\u56DE</strong> \u2014 \u5BF9\u65B9\u62D2\u7EDD\u6216\u5185\u90E8\u5BA1\u6279\u672A\u901A\u8FC7</div></div><div style="${ssrRenderStyle({ "display": "flex", "align-items": "flex-start", "gap": "8px", "padding": "8px 10px", "background": "#F0FDF4", "border-radius": "8px" })}"><div style="${ssrRenderStyle({ "font-size": ".75rem" })}"><strong>\u7528\u5370\u5F02\u5E38/\u95E8\u6237\u63A8\u9001\u5931\u8D25</strong> \u2014 \u7B7E\u7AE0\u6216\u63A8\u9001\u73AF\u8282\u51FA\u9519</div></div></div></div></div></div><div class="kl-card"><div class="biz-kl-hdr"><span class="biz-tag" style="${ssrRenderStyle({ "background": "rgba(124,58,237,0.08)", "color": "#7C3AED", "border-color": "rgba(124,58,237,0.18)" })}">\u6D41\u7A0B</span><h2>\u5F02\u5E38\u5904\u7406\u6D41\u7A0B</h2><p>\u4ECE\u5F02\u5E38\u53D1\u751F\u5230\u5224\u65AD\u53EF\u6062\u590D\u6027\uFF0C\u518D\u8D70\u6062\u590D\u6216\u7EC8\u6B62</p></div><div class="biz-steps"><div class="biz-step-item"><div class="biz-step-circle" style="${ssrRenderStyle({ "background": "linear-gradient(135deg,#7C3AED,#6D28D9)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" stroke-width="1.5"><circle cx="8" cy="8" r="6"></circle><path d="M8 5V8L10 10"></path></svg></div><h5>\u7B7E\u7F72\u5F02\u5E38</h5><small>\u62D2\u7B7E/OA\u9A73\u56DE<br>\u7528\u5370/\u95E8\u6237\u5F02\u5E38</small></div><div class="biz-step-arrow">\u2192</div><div class="biz-step-item"><div class="biz-step-circle" style="${ssrRenderStyle({ "background": "linear-gradient(135deg,#7C3AED,#6D28D9)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" stroke-width="1.5"><path d="M8 3L14 8L8 13L2 8Z"></path><path d="M8 6V8"></path></svg></div><h5>\u5224\u65AD\u53EF\u6062\u590D\u6027</h5><small>\u533A\u5206\u53EF\u91CD\u8BD5<br>\u4E0E\u9700\u7EC8\u6B62</small></div><div class="biz-step-arrow">\u2192</div><div class="biz-step-item"><div class="biz-step-circle" style="${ssrRenderStyle({ "background": "linear-gradient(135deg,#7C3AED,#6D28D9)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" stroke-width="1.5"><path d="M4 8L8 4L12 8"></path><path d="M8 4V12"></path></svg></div><h5>\u6062\u590D\u6D41\u8F6C</h5><small>\u91CD\u65B0\u63D0\u4EA4/\u7528\u5370<br>\u63A8\u9001\u95E8\u6237</small></div><div class="biz-step-arrow">\u2192</div><div class="biz-step-item"><div class="biz-step-circle" style="${ssrRenderStyle({ "background": "linear-gradient(135deg,#7C3AED,#6D28D9)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" stroke-width="1.5"><path d="M3 4H13V12H3Z"></path><path d="M6 8H10"></path></svg></div><h5>\u7EC8\u6B62\u5408\u540C</h5><small>\u4E0D\u53EF\u6062\u590D\u65F6<br>\u7EC8\u6B62\u6536\u5C3E</small></div></div><div class="kl-tip" style="${ssrRenderStyle({ "margin-top": "14px" })}"><strong>\u8BF4\u660E\uFF1A</strong>\u5F02\u5E38\u5904\u7406\u7531\u5408\u540C\u72B6\u6001\u673A\u9A71\u52A8\uFF0C\u65E0\u72EC\u7ACB\u5DE5\u4F5C\u6D41\uFF1B\u53EF\u6062\u590D\u7684\u5F02\u5E38\u63D0\u4F9B\u91CD\u63D0\u4EA4\u3001\u91CD\u7B7E\u3001\u91CD\u63A8\u7B49\u6062\u590D\u6309\u94AE\u3002 </div></div><div class="kl-card"><div class="biz-kl-hdr"><span class="biz-tag" style="${ssrRenderStyle({ "background": "rgba(124,58,237,0.08)", "color": "#7C3AED", "border-color": "rgba(124,58,237,0.18)" })}">\u5173\u952E\u89C4\u5219</span><h2>\u5F02\u5E38\u5904\u7406\u7684\u5173\u952E\u89C4\u5219</h2><p>\u5F02\u5E38\u5206\u7C7B\u5904\u7F6E\uFF0C\u6062\u590D\u4E0E\u7EC8\u6B62\u5404\u6709\u660E\u786E\u64CD\u4F5C</p></div><div class="biz-3col"><div class="kl-col-box" style="${ssrRenderStyle({ "margin-bottom": "0" })}"><div style="${ssrRenderStyle({ "display": "flex", "gap": "12px", "align-items": "flex-start" })}"><div style="${ssrRenderStyle({ "width": "36px", "height": "36px", "border-radius": "10px", "display": "flex", "align-items": "center", "justify-content": "center", "flex-shrink": "0", "background": "linear-gradient(135deg,#7C3AED,#A78BFA)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" stroke-width="1.5"><path d="M8 3L14 8L8 13L2 8Z"></path><path d="M8 6V8"></path></svg></div><div><h5 style="${ssrRenderStyle({ "font-size": "0.88rem", "font-weight": "800", "color": "#1F2937", "margin": "0 0 6px" })}">\u5F02\u5E38\u5206\u7C7B\u5904\u7F6E</h5><p style="${ssrRenderStyle({ "font-size": "0.73rem", "color": "#6B7280", "margin": "0", "line-height": "1.6" })}">\u62D2\u7B7E\u3001OA\u9A73\u56DE\u3001\u7528\u5370\u5F02\u5E38\u3001\u95E8\u6237\u63A8\u9001\u5931\u8D25\u5206\u522B\u5339\u914D\u5BF9\u5E94\u6062\u590D\u52A8\u4F5C\u3002</p></div></div></div><div class="kl-col-box alt" style="${ssrRenderStyle({ "margin-bottom": "0" })}"><div style="${ssrRenderStyle({ "display": "flex", "gap": "12px", "align-items": "flex-start" })}"><div style="${ssrRenderStyle({ "width": "36px", "height": "36px", "border-radius": "10px", "display": "flex", "align-items": "center", "justify-content": "center", "flex-shrink": "0", "background": "linear-gradient(135deg,#7C3AED,#A78BFA)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" stroke-width="1.5"><path d="M4 8L8 4L12 8"></path><path d="M8 4V12"></path></svg></div><div><h5 style="${ssrRenderStyle({ "font-size": "0.88rem", "font-weight": "800", "color": "#1F2937", "margin": "0 0 6px" })}">\u53EF\u6062\u590D\u52A8\u4F5C</h5><p style="${ssrRenderStyle({ "font-size": "0.73rem", "color": "#6B7280", "margin": "0", "line-height": "1.6" })}">\u91CD\u65B0\u63D0\u4EA4OA\u3001\u786E\u8BA4\u62D2\u7B7E\u3001\u91CD\u65B0\u7528\u5370\u3001\u91CD\u65B0\u63A8\u9001\u95E8\u6237\u7B49\u64CD\u4F5C\u6309\u9700\u89E6\u53D1\u3002</p></div></div></div><div class="kl-col-box" style="${ssrRenderStyle({ "margin-bottom": "0" })}"><div style="${ssrRenderStyle({ "display": "flex", "gap": "12px", "align-items": "flex-start" })}"><div style="${ssrRenderStyle({ "width": "36px", "height": "36px", "border-radius": "10px", "display": "flex", "align-items": "center", "justify-content": "center", "flex-shrink": "0", "background": "linear-gradient(135deg,#7C3AED,#A78BFA)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" stroke-width="1.5"><path d="M3 4H13V12H3Z"></path><path d="M6 8H10"></path></svg></div><div><h5 style="${ssrRenderStyle({ "font-size": "0.88rem", "font-weight": "800", "color": "#1F2937", "margin": "0 0 6px" })}">\u53EF\u7EC8\u6B62\u6536\u5C3E</h5><p style="${ssrRenderStyle({ "font-size": "0.73rem", "color": "#6B7280", "margin": "0", "line-height": "1.6" })}">\u4E0D\u53EF\u6062\u590D\u7684\u5F02\u5E38\u6267\u884C\u7EC8\u6B62\uFF0C\u5408\u540C\u72B6\u6001\u6536\u5C3E\uFF0C\u4E0D\u518D\u5360\u7528\u7B7E\u7F72\u6D41\u7A0B\u3002</p></div></div></div></div></div></div></div></div><div id="biz-flow" style="${ssrRenderStyle({ "display": "none" })}"><div class="tab-pad"><div class="bf-truth-flow"><h4 class="bf-main-title">\u5408\u540C\u7B7E\u7F72\u5F02\u5E38\u5904\u7406 \u2014 \u5168\u94FE\u8DEF\u6D41\u7A0B\u56FE</h4><p class="bf-main-sub">\u5F00\u59CB \u2192 \u2605\u5408\u540C\u7B7E\u7F72\u5F02\u5E38\u5904\u7406\u2605 \u2192 \u2696\u662F\u5426\u53EF\u6062\u590D\uFF1F \u2192 \u72B6\u6001\u6D41\u8F6C\u6062\u590D/\u7EC8\u6B62\u5408\u540C \u2192 \u7ED3\u675F</p><div class="bf-fc-svg-wrap"><svg class="bf-fc-svg" style="${ssrRenderStyle({ "max-height": "none" })}" viewBox="0 0 1200 760" xmlns="http://www.w3.org/2000/svg"><defs><marker id="arr-green" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon points="0,0 10,5 0,10" fill="#16A34A"></polygon></marker><marker id="arr-gray" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon points="0,0 10,5 0,10" fill="#9CA3AF"></polygon></marker><marker id="arr-blue" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon points="0,0 10,5 0,10" fill="#3B82F6"></polygon></marker><marker id="arr-red" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon points="0,0 10,5 0,10" fill="#EF4444"></polygon></marker><filter id="shadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000" flood-opacity="0.15"></feDropShadow></filter></defs><rect x="50" y="20" width="1100" height="95" rx="8" fill="#EFF6FF" stroke="#3B82F6" stroke-width="1.5" stroke-dasharray="6,4"></rect><text x="600" y="42" text-anchor="middle" fill="#1D4ED8" font-size="13" font-weight="600">\u4E0A\u6E38\u652F\u6491</text><rect x="193" y="56" width="150" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"></rect><text x="268" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">\u5408\u540C\u7B7E\u7F72\u6D41\u7A0B</text><rect x="359" y="56" width="150" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"></rect><text x="434" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">\u503C\u96C6(\u5408\u540C\u7C7B\u578B/\u72B6\u6001)</text><rect x="525" y="56" width="150" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"></rect><text x="600" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">OA\u7CFB\u7EDF</text><rect x="691" y="56" width="150" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"></rect><text x="766" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">\u7528\u5370\u7CFB\u7EDF</text><rect x="857" y="56" width="150" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"></rect><text x="932" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">\u5408\u540C\u6A21\u677F</text><line x1="600" y1="115" x2="600" y2="150" stroke="#3B82F6" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#arr-blue)"></line><rect x="560" y="150" width="80" height="44" rx="6" fill="#FAF5FF" stroke="#9333EA" stroke-width="1.5" stroke-dasharray="5,3"></rect><text x="600" y="177" text-anchor="middle" fill="#7C3AED" font-size="13" font-weight="600">\u5F00\u59CB</text><line x1="600" y1="194" x2="600" y2="290" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"></line><rect x="460" y="290" width="280" height="54" rx="6" fill="#16A34A" stroke="#15803D" stroke-width="2" filter="url(#shadow)"></rect><text x="600" y="315" text-anchor="middle" fill="#FFFFFF" font-size="13" font-weight="700">\u2605\u5408\u540C\u7B7E\u7F72\u5F02\u5E38\u5904\u7406\u2605</text><text x="600" y="335" text-anchor="middle" fill="#DCFCE7" font-size="10">\u67E5\u770B\u5F02\u5E38\u5217\u8868\xB7\u9009\u5F02\u5E38\u5408\u540C\xB7\u6309\u7C7B\u578B\u5904\u7406</text><line x1="600" y1="344" x2="600" y2="372" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"></line><polygon points="600,372 670,410 600,448 530,410" fill="#FAF5FF" stroke="#9333EA" stroke-width="1.5" stroke-dasharray="5,3"></polygon><text x="600" y="414" text-anchor="middle" fill="#7C3AED" font-size="12" font-weight="600">\u2696 \u662F\u5426\u53EF\u6062\u590D\uFF1F</text><line x1="600" y1="448" x2="600" y2="470" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"></line><rect x="510" y="470" width="180" height="44" rx="6" fill="#F0FDF4" stroke="#16A34A" stroke-width="2"></rect><text x="600" y="497" text-anchor="middle" fill="#166534" font-size="13" font-weight="600">\u72B6\u6001\u6D41\u8F6C\u6062\u590D</text><line x1="670" y1="410" x2="750" y2="410" stroke="#9CA3AF" stroke-width="2" marker-end="url(#arr-gray)"></line><rect x="750" y="392" width="150" height="40" rx="6" fill="#FFFFFF" stroke="#9CA3AF" stroke-width="1.5"></rect><text x="825" y="417" text-anchor="middle" fill="#4B5563" font-size="12" font-weight="600">\u7EC8\u6B62\u5408\u540C</text><line x1="825" y1="432" x2="825" y2="580" stroke="#9CA3AF" stroke-width="1.5"></line><line x1="825" y1="580" x2="645" y2="580" stroke="#9CA3AF" stroke-width="1.5" marker-end="url(#arr-gray)"></line><line x1="600" y1="514" x2="600" y2="560" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"></line><rect x="555" y="560" width="90" height="40" rx="6" fill="#FAF5FF" stroke="#9333EA" stroke-width="1.5" stroke-dasharray="5,3"></rect><text x="600" y="585" text-anchor="middle" fill="#7C3AED" font-size="13" font-weight="600">\u7ED3\u675F</text><line x1="600" y1="600" x2="600" y2="660" stroke="#16A34A" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#arr-green)"></line><rect x="50" y="660" width="1100" height="95" rx="8" fill="#F0FDF4" stroke="#16A34A" stroke-width="1.5" stroke-dasharray="6,4"></rect><text x="600" y="682" text-anchor="middle" fill="#166534" font-size="13" font-weight="600">\u4E0B\u6E38\u5F71\u54CD</text><rect x="270" y="712" width="150" height="36" rx="5" fill="#FFFFFF" stroke="#16A34A" stroke-width="1.2"></rect><text x="345" y="735" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">\u7ECF\u9500\u5546\u5408\u540C\u7BA1\u7406</text><rect x="440" y="712" width="150" height="36" rx="5" fill="#FFFFFF" stroke="#16A34A" stroke-width="1.2"></rect><text x="515" y="735" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">OA\u7CFB\u7EDF(\u91CD\u63A8)</text><rect x="610" y="712" width="150" height="36" rx="5" fill="#FFFFFF" stroke="#16A34A" stroke-width="1.2"></rect><text x="685" y="735" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">\u7528\u5370\u7CFB\u7EDF(\u91CD\u7528\u5370)</text><rect x="780" y="712" width="150" height="36" rx="5" fill="#FFFFFF" stroke="#16A34A" stroke-width="1.2"></rect><text x="855" y="735" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">\u95E8\u6237\u7CFB\u7EDF(\u63A8\u9001)</text></svg></div><div class="bf-fc-legend"><span class="bf-fc-legend-item"><span class="bf-fc-dot bf-fc-dot-green"></span> \u4E3B\u6D41\u7A0B\u6B65\u9AA4</span><span class="bf-fc-legend-item"><span class="bf-fc-dot bf-fc-dot-purple"></span> \u5F00\u59CB/\u7ED3\u675F/\u5224\u65AD</span><span class="bf-fc-legend-item"><span class="bf-fc-dot bf-fc-dot-blue"></span> \u4E0A\u6E38\u652F\u6491\u670D\u52A1</span><span class="bf-fc-legend-item"><span style="${ssrRenderStyle({ "display": "inline-block", "width": "22px", "height": "2px", "background": "#9CA3AF" })}"></span> \u7EC8\u6B62/\u5F02\u5E38\u5206\u652F</span></div></div></div></div><div id="key-logic" style="${ssrRenderStyle({ "display": "none" })}"><div class="tab-pad"><div class="kl-wrap">`);
  _push(ssrRenderComponent(_component_KbCard, {
    num: "1",
    title: "\u91CD\u70B9\u903B\u8F911\uFF1A\u5F02\u5E38\u5206\u7C7B\u5904\u7F6E"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u610F\u4E49</strong>\uFF1A\u4E0D\u540C\u5F02\u5E38\u7C7B\u578B\u5339\u914D\u5BF9\u5E94\u6062\u590D\u52A8\u4F5C\uFF0C\u786E\u4FDD\u5F02\u5E38\u6709\u51FA\u53E3\u4E0D\u5361\u6B7B</li><li${_scopeId}><strong${_scopeId}>\u5177\u4F53\u903B\u8F91\u63CF\u8FF0</strong>\uFF1A\u5F02\u5E38\u7C7B\u578B\u5305\u62EC\u7B7E\u7F72\u8D85\u65F6\u3001\u7B7E\u7F72\u5931\u8D25\u3001\u5F52\u6863\u5931\u8D25\u3001\u56DE\u8C03\u5931\u8D25\u7B49\uFF0C\u5206\u522B\u5339\u914D\u91CD\u65B0\u5F52\u6863\u3001\u4FEE\u6539\u5408\u540C\u72B6\u6001\u3001\u91CD\u53D1\u7B7E\u7F72\u77ED\u4FE1\u3001\u5408\u540C\u540C\u6B65\u7B49\u6062\u590D\u52A8\u4F5C</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u610F\u4E49"),
              createTextVNode("\uFF1A\u4E0D\u540C\u5F02\u5E38\u7C7B\u578B\u5339\u914D\u5BF9\u5E94\u6062\u590D\u52A8\u4F5C\uFF0C\u786E\u4FDD\u5F02\u5E38\u6709\u51FA\u53E3\u4E0D\u5361\u6B7B")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u5177\u4F53\u903B\u8F91\u63CF\u8FF0"),
              createTextVNode("\uFF1A\u5F02\u5E38\u7C7B\u578B\u5305\u62EC\u7B7E\u7F72\u8D85\u65F6\u3001\u7B7E\u7F72\u5931\u8D25\u3001\u5F52\u6863\u5931\u8D25\u3001\u56DE\u8C03\u5931\u8D25\u7B49\uFF0C\u5206\u522B\u5339\u914D\u91CD\u65B0\u5F52\u6863\u3001\u4FEE\u6539\u5408\u540C\u72B6\u6001\u3001\u91CD\u53D1\u7B7E\u7F72\u77ED\u4FE1\u3001\u5408\u540C\u540C\u6B65\u7B49\u6062\u590D\u52A8\u4F5C")
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, {
    num: "2",
    title: "\u91CD\u70B9\u903B\u8F912\uFF1A\u91CD\u65B0\u5F52\u6863"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u610F\u4E49</strong>\uFF1A\u5F52\u6863\u5931\u8D25\u7684\u5408\u540C\u9700\u91CD\u65B0\u89E6\u53D1\u5F52\u6863\u6D41\u7A0B\uFF0C\u786E\u4FDD\u5408\u540C\u5F52\u6863\u5B8C\u6210</li><li${_scopeId}><strong${_scopeId}>\u5177\u4F53\u903B\u8F91\u63CF\u8FF0</strong>\uFF1A\u8C03\u7528 fddContractFiling \u63A5\u53E3\uFF0C\u4F20\u5165 electronicContractId\uFF0C\u91CD\u65B0\u89E6\u53D1\u6CD5\u5927\u5927\u5F52\u6863</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u610F\u4E49"),
              createTextVNode("\uFF1A\u5F52\u6863\u5931\u8D25\u7684\u5408\u540C\u9700\u91CD\u65B0\u89E6\u53D1\u5F52\u6863\u6D41\u7A0B\uFF0C\u786E\u4FDD\u5408\u540C\u5F52\u6863\u5B8C\u6210")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u5177\u4F53\u903B\u8F91\u63CF\u8FF0"),
              createTextVNode("\uFF1A\u8C03\u7528 fddContractFiling \u63A5\u53E3\uFF0C\u4F20\u5165 electronicContractId\uFF0C\u91CD\u65B0\u89E6\u53D1\u6CD5\u5927\u5927\u5F52\u6863")
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, {
    num: "3",
    title: "\u91CD\u70B9\u903B\u8F913\uFF1A\u4FEE\u6539\u5408\u540C\u72B6\u6001"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u610F\u4E49</strong>\uFF1A\u7B7E\u7F72\u5F02\u5E38\u65F6\u54C1\u724C\u65B9\u53EF\u624B\u52A8\u4FEE\u6B63\u5408\u540C\u72B6\u6001\uFF0C\u4F7F\u6D41\u7A0B\u7EE7\u7EED\u63A8\u8FDB</li><li${_scopeId}><strong${_scopeId}>\u5177\u4F53\u903B\u8F91\u63CF\u8FF0</strong>\uFF1A\u8C03\u7528 modify/contractStatus \u63A5\u53E3\uFF0C\u624B\u52A8\u4FEE\u6539\u5408\u540C\u72B6\u6001\u81F3\u76EE\u6807\u72B6\u6001</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u610F\u4E49"),
              createTextVNode("\uFF1A\u7B7E\u7F72\u5F02\u5E38\u65F6\u54C1\u724C\u65B9\u53EF\u624B\u52A8\u4FEE\u6B63\u5408\u540C\u72B6\u6001\uFF0C\u4F7F\u6D41\u7A0B\u7EE7\u7EED\u63A8\u8FDB")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u5177\u4F53\u903B\u8F91\u63CF\u8FF0"),
              createTextVNode("\uFF1A\u8C03\u7528 modify/contractStatus \u63A5\u53E3\uFF0C\u624B\u52A8\u4FEE\u6539\u5408\u540C\u72B6\u6001\u81F3\u76EE\u6807\u72B6\u6001")
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, {
    num: "4",
    title: "\u91CD\u70B9\u903B\u8F914\uFF1A\u91CD\u53D1\u7B7E\u7F72\u77ED\u4FE1"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u610F\u4E49</strong>\uFF1A\u7B7E\u7F72\u8D85\u65F6\u6216\u77ED\u4FE1\u672A\u9001\u8FBE\u65F6\uFF0C\u91CD\u65B0\u5411\u7ECF\u9500\u5546\u53D1\u9001\u7B7E\u7F72\u77ED\u4FE1</li><li${_scopeId}><strong${_scopeId}>\u5177\u4F53\u903B\u8F91\u63CF\u8FF0</strong>\uFF1A\u8C03\u7528 noticeDistributor/rePush \u63A5\u53E3\uFF0C\u4F20\u5165 electronicContractId\uFF0C\u91CD\u65B0\u63A8\u9001\u7B7E\u7F72\u901A\u77E5\u77ED\u4FE1</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u610F\u4E49"),
              createTextVNode("\uFF1A\u7B7E\u7F72\u8D85\u65F6\u6216\u77ED\u4FE1\u672A\u9001\u8FBE\u65F6\uFF0C\u91CD\u65B0\u5411\u7ECF\u9500\u5546\u53D1\u9001\u7B7E\u7F72\u77ED\u4FE1")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u5177\u4F53\u903B\u8F91\u63CF\u8FF0"),
              createTextVNode("\uFF1A\u8C03\u7528 noticeDistributor/rePush \u63A5\u53E3\uFF0C\u4F20\u5165 electronicContractId\uFF0C\u91CD\u65B0\u63A8\u9001\u7B7E\u7F72\u901A\u77E5\u77ED\u4FE1")
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, {
    num: "5",
    title: "\u91CD\u70B9\u903B\u8F915\uFF1A\u5408\u540C\u540C\u6B65"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u610F\u4E49</strong>\uFF1A\u56DE\u8C03\u5931\u8D25\u65F6\u7B7E\u7F72\u72B6\u6001\u4E0E\u5916\u90E8\u7CFB\u7EDF\u4E0D\u4E00\u81F4\uFF0C\u9700\u624B\u52A8\u89E6\u53D1\u540C\u6B65</li><li${_scopeId}><strong${_scopeId}>\u5177\u4F53\u903B\u8F91\u63CF\u8FF0</strong>\uFF1A\u8C03\u7528 callback/retry/update-signature \u63A5\u53E3\uFF0C\u4F20\u5165 unifyContractCode\uFF0C\u91CD\u65B0\u540C\u6B65\u7B7E\u7F72\u72B6\u6001</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u610F\u4E49"),
              createTextVNode("\uFF1A\u56DE\u8C03\u5931\u8D25\u65F6\u7B7E\u7F72\u72B6\u6001\u4E0E\u5916\u90E8\u7CFB\u7EDF\u4E0D\u4E00\u81F4\uFF0C\u9700\u624B\u52A8\u89E6\u53D1\u540C\u6B65")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u5177\u4F53\u903B\u8F91\u63CF\u8FF0"),
              createTextVNode("\uFF1A\u8C03\u7528 callback/retry/update-signature \u63A5\u53E3\uFF0C\u4F20\u5165 unifyContractCode\uFF0C\u91CD\u65B0\u540C\u6B65\u7B7E\u7F72\u72B6\u6001")
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div><div id="detail-logic" style="${ssrRenderStyle({ "display": "none" })}"><div class="tab-pad"><div class="kl-wrap">`);
  _push(ssrRenderComponent(_component_KbCard, { title: "\u754C\u9762\u6A21\u5757" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h4${_scopeId}>\u67E5\u8BE2\u6761\u4EF6</h4><blockquote${_scopeId}>\u524D\u7AEF\u4EE3\u7801\uFF1A<code${_scopeId}>contract/processing/stores/listConfig.tsx</code> \u7684 <code${_scopeId}>listDS.queryFields</code>\u3002DataSet \u901A\u8FC7 <code${_scopeId}>transport.read</code> \u8C03\u7528 <code${_scopeId}>contractProcessingApi.query</code>\uFF08POST <code${_scopeId}>ch/contract/process/page</code>\uFF09\u3002</blockquote><table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5B57\u6BB5\u540D</th><th${_scopeId}>\u6570\u636E\u5E93\u5217\u540D</th><th${_scopeId}>\u7EC4\u4EF6</th><th${_scopeId}>\u4E1A\u52A1\u91CA\u4E49</th><th${_scopeId}>\u663E\u9690\u6761\u4EF6</th><th${_scopeId}>\u53D6\u503C/\u8D4B\u503C\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u6765\u6E90\u5408\u540C\u7F16\u53F7</td><td${_scopeId}>SOURCE_DOCUMENT_CODE</td><td${_scopeId}>TextField</td><td${_scopeId}>\u6309\u6765\u6E90\u5408\u540C\u7F16\u53F7\u67E5\u8BE2</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u624B\u52A8\u8F93\u5165\uFF0C\u6A21\u7CCA\u67E5\u8BE2</td></tr><tr${_scopeId}><td${_scopeId}>\u5408\u540C\u7F16\u53F7</td><td${_scopeId}>ELECTRONIC_CONTRACT_CODE</td><td${_scopeId}>TextField</td><td${_scopeId}>\u6309\u5408\u540C\u7F16\u53F7\u67E5\u8BE2</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u624B\u52A8\u8F93\u5165\uFF0C\u6A21\u7CCA\u67E5\u8BE2</td></tr><tr${_scopeId}><td${_scopeId}>\u7ECF\u9500\u5546\u7F16\u7801</td><td${_scopeId}>AGENT_CODE</td><td${_scopeId}>TextField</td><td${_scopeId}>\u6309\u7ECF\u9500\u5546\u7F16\u7801\u67E5\u8BE2</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u624B\u52A8\u8F93\u5165\uFF0C\u6A21\u7CCA\u67E5\u8BE2</td></tr><tr${_scopeId}><td${_scopeId}>\u5408\u540C\u7C7B\u578B</td><td${_scopeId}>CONTRACT_TYPE</td><td${_scopeId}>Select</td><td${_scopeId}>\u6309\u5408\u540C\u7C7B\u578B\u7B5B\u9009</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u503C\u96C6 MBO.CONTRACT_TYPE</td></tr><tr${_scopeId}><td${_scopeId}>\u5B50\u5408\u540C\u7C7B\u578B</td><td${_scopeId}>CONTRACT_SUB_TYPE</td><td${_scopeId}>Select</td><td${_scopeId}>\u6309\u5B50\u5408\u540C\u7C7B\u578B\u7B5B\u9009</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u503C\u96C6 MBO.CONTRACT_SUB_TEMPLATE\uFF08\u52A8\u6001\u503C\u96C6\uFF0ClookupAxiosConfig \u6279\u91CF\u67E5\u8BE2\uFF09</td></tr><tr${_scopeId}><td${_scopeId}>\u5408\u540C\u72B6\u6001</td><td${_scopeId}>CONTRACT_STATUS</td><td${_scopeId}>Select</td><td${_scopeId}>\u6309\u5408\u540C\u72B6\u6001\u7B5B\u9009</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u503C\u96C6 MBO.CONTRACT_STATUS</td></tr></tbody></table><h4${_scopeId}>\u5217\u8868\u8868\u683C</h4><blockquote${_scopeId}>\u524D\u7AEF\u4EE3\u7801\uFF1A<code${_scopeId}>contract/processing/stores/listConfig.tsx</code> \u7684 <code${_scopeId}>listDScolumns</code>\u3002Table \u4F7F\u7528 <code${_scopeId}>queryBar={TableQueryBarType.professionalBar}</code>\uFF0C<code${_scopeId}>customizedCode=&quot;column-group&quot;</code>\uFF0C\u5217\u53EF\u62D6\u62FD/\u81EA\u5B9A\u4E49\u3002</blockquote><table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5B57\u6BB5\u540D</th><th${_scopeId}>\u6570\u636E\u5E93\u5217\u540D</th><th${_scopeId}>\u7EC4\u4EF6</th><th${_scopeId}>\u4E1A\u52A1\u91CA\u4E49</th><th${_scopeId}>\u663E\u9690\u6761\u4EF6</th><th${_scopeId}>\u53D6\u503C/\u8D4B\u503C\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u5408\u540C\u7EDF\u4E00\u7F16\u53F7</td><td${_scopeId}>UNIFY_CONTRACT_CODE</td><td${_scopeId}>Button(link)</td><td${_scopeId}>\u5408\u540C\u7EDF\u4E00\u7F16\u53F7</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u5DE6\u9501\u5B9A\u5217\uFF0C\u70B9\u51FB\u8C03\u7528 \`handleAction\` \u8DF3\u8F6C\u8BE6\u60C5\u9875</td></tr><tr${_scopeId}><td${_scopeId}>\u5408\u540C\u7F16\u53F7</td><td${_scopeId}>ELECTRONIC_CONTRACT_CODE</td><td${_scopeId}>Button(link)</td><td${_scopeId}>\u5408\u540C\u4E1A\u52A1\u7F16\u53F7</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u5DE6\u9501\u5B9A\u5217\uFF0C\u70B9\u51FB\u8C03\u7528 \`handleAction\` \u8DF3\u8F6C\u8BE6\u60C5\u9875</td></tr><tr${_scopeId}><td${_scopeId}>\u6765\u6E90\u5408\u540C\u7F16\u53F7</td><td${_scopeId}>SOURCE_DOCUMENT_CODE</td><td${_scopeId}>TextField</td><td${_scopeId}>\u6765\u6E90\u5408\u540C\u7F16\u53F7</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>-</td></tr><tr${_scopeId}><td${_scopeId}>\u5408\u540C\u7C7B\u578B</td><td${_scopeId}>CONTRACT_TYPE_NAME</td><td${_scopeId}>TextField</td><td${_scopeId}>\u5408\u540C\u7C7B\u578B\u540D\u79F0</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u540E\u7AEF\u8FD4\u56DE contractTypeName</td></tr><tr${_scopeId}><td${_scopeId}>\u7ECF\u9500\u5546</td><td${_scopeId}>AGENT_NAME</td><td${_scopeId}>TextField</td><td${_scopeId}>\u7ECF\u9500\u5546\u540D\u79F0</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>-</td></tr><tr${_scopeId}><td${_scopeId}>\u7ECF\u9500\u5546\u7B80\u79F0</td><td${_scopeId}>SHORT_NAME</td><td${_scopeId}>TextField</td><td${_scopeId}>\u7ECF\u9500\u5546\u7B80\u79F0</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>-</td></tr><tr${_scopeId}><td${_scopeId}>\u4EA4\u6613\u516C\u53F8</td><td${_scopeId}>TRADE_COMPANY_NAME</td><td${_scopeId}>TextField</td><td${_scopeId}>\u4EA4\u6613\u516C\u53F8\u540D\u79F0</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>-</td></tr><tr${_scopeId}><td${_scopeId}>\u5408\u540C\u6709\u6548\u671F</td><td${_scopeId}>BEGIN_DATE</td><td${_scopeId}>TextField</td><td${_scopeId}>\u5408\u540C\u6709\u6548\u671F\uFF08\u8D77-\u6B62\uFF09</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u6E32\u67D3\u4E3A \`\${moment(beginDate).format(&#39;YYYY-MM-DD&#39;)} ~ \${moment(endDate).format(&#39;YYYY-MM-DD&#39;)}\`</td></tr><tr${_scopeId}><td${_scopeId}>\u6CD5\u4EBA\u7F16\u7801</td><td${_scopeId}>BILL_ACCT_CODE</td><td${_scopeId}>TextField</td><td${_scopeId}>\u6CD5\u4EBA\u7F16\u7801</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>-</td></tr><tr${_scopeId}><td${_scopeId}>\u6CD5\u4EBA\u540D\u79F0</td><td${_scopeId}>BILL_ACCT_NAME</td><td${_scopeId}>TextField</td><td${_scopeId}>\u6CD5\u4EBA\u540D\u79F0</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>-</td></tr><tr${_scopeId}><td${_scopeId}>\u72B6\u6001</td><td${_scopeId}>CONTRACT_STATUS_NAME</td><td${_scopeId}>TextField</td><td${_scopeId}>\u5408\u540C\u72B6\u6001\u540D\u79F0</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u540E\u7AEF\u8FD4\u56DE contractStatusName</td></tr><tr${_scopeId}><td${_scopeId}>\u9A73\u56DE\u539F\u56E0</td><td${_scopeId}>REJECT_REASON</td><td${_scopeId}>TextField</td><td${_scopeId}>\u9A73\u56DE\u539F\u56E0</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>-</td></tr><tr${_scopeId}><td${_scopeId}>\u521B\u5EFA\u4EBA</td><td${_scopeId}>CREATE_USER_CODE</td><td${_scopeId}>TextField</td><td${_scopeId}>\u521B\u5EFA\u4EBA\u7F16\u7801</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>-</td></tr><tr${_scopeId}><td${_scopeId}>\u521B\u5EFA\u65F6\u95F4</td><td${_scopeId}>CREATE_TIME</td><td${_scopeId}>TextField</td><td${_scopeId}>\u521B\u5EFA\u65F6\u95F4</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>-</td></tr><tr${_scopeId}><td${_scopeId}>\u53D1\u8D77\u4EBA</td><td${_scopeId}>INITIATOR</td><td${_scopeId}>TextField</td><td${_scopeId}>\u53D1\u8D77\u4EBA</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>-</td></tr><tr${_scopeId}><td${_scopeId}>\u53D1\u8D77\u65F6\u95F4</td><td${_scopeId}>INITIATE_TIME</td><td${_scopeId}>TextField</td><td${_scopeId}>\u53D1\u8D77\u65F6\u95F4</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>-</td></tr><tr${_scopeId}><td${_scopeId}>\u5B8C\u6210\u65F6\u95F4</td><td${_scopeId}>COMPLETE_TIME</td><td${_scopeId}>TextField</td><td${_scopeId}>\u5B8C\u6210\u65F6\u95F4</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>-</td></tr><tr${_scopeId}><td${_scopeId}>\u64CD\u4F5C</td><td${_scopeId}>-</td><td${_scopeId}>Button(link)</td><td${_scopeId}>\u884C\u64CD\u4F5C\u6309\u94AE\u7EC4</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u53F3\u9501\u5B9A\u5217\uFF0C\u6839\u636E\u5408\u540C\u72B6\u6001\u52A8\u6001\u6E32\u67D3\u4E0D\u540C\u64CD\u4F5C\u6309\u94AE\uFF08\u89C1\u4E0B\u8868\uFF09</td></tr></tbody></table><p${_scopeId}>\u67E5\u8BE2SQL\uFF1A</p><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> EC.UNIFY_CONTRACT_CODE       </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>\u5408\u540C\u7EDF\u4E00\u7F16\u53F7</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>       EC.ELECTRONIC_CONTRACT_CODE  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>\u5408\u540C\u7F16\u53F7</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>       EC.SOURCE_DOCUMENT_CODE      </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>\u6765\u6E90\u5408\u540C\u7F16\u53F7</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>       EC.CONTRACT_TYPE_NAME        </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>\u5408\u540C\u7C7B\u578B</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>       EC.AGENT_NAME                </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>\u7ECF\u9500\u5546</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>       EC.SHORT_NAME                </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>\u7ECF\u9500\u5546\u7B80\u79F0</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>       EC.TRADE_COMPANY_NAME        </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>\u4EA4\u6613\u516C\u53F8</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>       EC.BEGIN_DATE                </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>\u5408\u540C\u5F00\u59CB\u65E5\u671F</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>       EC.END_DATE                  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>\u5408\u540C\u7ED3\u675F\u65E5\u671F</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>       EC.BILL_ACCT_CODE            </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>\u6CD5\u4EBA\u7F16\u7801</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>       EC.BILL_ACCT_NAME            </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>\u6CD5\u4EBA\u540D\u79F0</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>       EC.CONTRACT_STATUS_NAME      </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>\u72B6\u6001</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>       EC.REJECT_REASON             </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>\u9A73\u56DE\u539F\u56E0</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>       EC.CREATE_USER_CODE          </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>\u521B\u5EFA\u4EBA</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>       TO_CHAR(EC.CREATE_TIME,</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>YYYY-MM-DD HH24:MI:SS</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>\u521B\u5EFA\u65F6\u95F4</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>       EC.INITIATOR                 </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>\u53D1\u8D77\u4EBA</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>       TO_CHAR(EC.INITIATE_TIME,</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>YYYY-MM-DD HH24:MI:SS</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>\u53D1\u8D77\u65F6\u95F4</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>       TO_CHAR(EC.COMPLETE_TIME,</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>YYYY-MM-DD HH24:MI:SS</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>\u5B8C\u6210\u65F6\u95F4</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> ELECTRONIC_CONTRACT EC</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (:sourceDocumentCode </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>OR</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> EC.SOURCE_DOCUMENT_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>LIKE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>%</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>||</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> :sourceDocumentCode </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>||</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>%</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (:electronicContractCode </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>OR</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> EC.ELECTRONIC_CONTRACT_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>LIKE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>%</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>||</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> :electronicContractCode </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>||</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>%</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (:agentCode </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>OR</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> EC.AGENT_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>LIKE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>%</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>||</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> :agentCode </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>||</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>%</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (:contractType </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>OR</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> EC.CONTRACT_TYPE </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> :contractType)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (:contractSubType </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>OR</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> EC.CONTRACT_SUB_TYPE </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> :contractSubType)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (:</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>status</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>OR</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> EC.CONTRACT_STATUS </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> :</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>status</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ORDER BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> EC.CREATE_TIME </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>DESC</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div>`);
      } else {
        return [
          createVNode("h4", null, "\u67E5\u8BE2\u6761\u4EF6"),
          createVNode("blockquote", null, [
            createTextVNode("\u524D\u7AEF\u4EE3\u7801\uFF1A"),
            createVNode("code", null, "contract/processing/stores/listConfig.tsx"),
            createTextVNode(" \u7684 "),
            createVNode("code", null, "listDS.queryFields"),
            createTextVNode("\u3002DataSet \u901A\u8FC7 "),
            createVNode("code", null, "transport.read"),
            createTextVNode(" \u8C03\u7528 "),
            createVNode("code", null, "contractProcessingApi.query"),
            createTextVNode("\uFF08POST "),
            createVNode("code", null, "ch/contract/process/page"),
            createTextVNode("\uFF09\u3002")
          ]),
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
                createVNode("td", null, "\u6765\u6E90\u5408\u540C\u7F16\u53F7"),
                createVNode("td", null, "SOURCE_DOCUMENT_CODE"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u6309\u6765\u6E90\u5408\u540C\u7F16\u53F7\u67E5\u8BE2"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u624B\u52A8\u8F93\u5165\uFF0C\u6A21\u7CCA\u67E5\u8BE2")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5408\u540C\u7F16\u53F7"),
                createVNode("td", null, "ELECTRONIC_CONTRACT_CODE"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u6309\u5408\u540C\u7F16\u53F7\u67E5\u8BE2"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u624B\u52A8\u8F93\u5165\uFF0C\u6A21\u7CCA\u67E5\u8BE2")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7ECF\u9500\u5546\u7F16\u7801"),
                createVNode("td", null, "AGENT_CODE"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u6309\u7ECF\u9500\u5546\u7F16\u7801\u67E5\u8BE2"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u624B\u52A8\u8F93\u5165\uFF0C\u6A21\u7CCA\u67E5\u8BE2")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5408\u540C\u7C7B\u578B"),
                createVNode("td", null, "CONTRACT_TYPE"),
                createVNode("td", null, "Select"),
                createVNode("td", null, "\u6309\u5408\u540C\u7C7B\u578B\u7B5B\u9009"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u503C\u96C6 MBO.CONTRACT_TYPE")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5B50\u5408\u540C\u7C7B\u578B"),
                createVNode("td", null, "CONTRACT_SUB_TYPE"),
                createVNode("td", null, "Select"),
                createVNode("td", null, "\u6309\u5B50\u5408\u540C\u7C7B\u578B\u7B5B\u9009"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u503C\u96C6 MBO.CONTRACT_SUB_TEMPLATE\uFF08\u52A8\u6001\u503C\u96C6\uFF0ClookupAxiosConfig \u6279\u91CF\u67E5\u8BE2\uFF09")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5408\u540C\u72B6\u6001"),
                createVNode("td", null, "CONTRACT_STATUS"),
                createVNode("td", null, "Select"),
                createVNode("td", null, "\u6309\u5408\u540C\u72B6\u6001\u7B5B\u9009"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u503C\u96C6 MBO.CONTRACT_STATUS")
              ])
            ])
          ]),
          createVNode("h4", null, "\u5217\u8868\u8868\u683C"),
          createVNode("blockquote", null, [
            createTextVNode("\u524D\u7AEF\u4EE3\u7801\uFF1A"),
            createVNode("code", null, "contract/processing/stores/listConfig.tsx"),
            createTextVNode(" \u7684 "),
            createVNode("code", null, "listDScolumns"),
            createTextVNode("\u3002Table \u4F7F\u7528 "),
            createVNode("code", null, "queryBar={TableQueryBarType.professionalBar}"),
            createTextVNode("\uFF0C"),
            createVNode("code", null, 'customizedCode="column-group"'),
            createTextVNode("\uFF0C\u5217\u53EF\u62D6\u62FD/\u81EA\u5B9A\u4E49\u3002")
          ]),
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
                createVNode("td", null, "\u5408\u540C\u7EDF\u4E00\u7F16\u53F7"),
                createVNode("td", null, "UNIFY_CONTRACT_CODE"),
                createVNode("td", null, "Button(link)"),
                createVNode("td", null, "\u5408\u540C\u7EDF\u4E00\u7F16\u53F7"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u5DE6\u9501\u5B9A\u5217\uFF0C\u70B9\u51FB\u8C03\u7528 `handleAction` \u8DF3\u8F6C\u8BE6\u60C5\u9875")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5408\u540C\u7F16\u53F7"),
                createVNode("td", null, "ELECTRONIC_CONTRACT_CODE"),
                createVNode("td", null, "Button(link)"),
                createVNode("td", null, "\u5408\u540C\u4E1A\u52A1\u7F16\u53F7"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u5DE6\u9501\u5B9A\u5217\uFF0C\u70B9\u51FB\u8C03\u7528 `handleAction` \u8DF3\u8F6C\u8BE6\u60C5\u9875")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6765\u6E90\u5408\u540C\u7F16\u53F7"),
                createVNode("td", null, "SOURCE_DOCUMENT_CODE"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u6765\u6E90\u5408\u540C\u7F16\u53F7"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "-")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5408\u540C\u7C7B\u578B"),
                createVNode("td", null, "CONTRACT_TYPE_NAME"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u5408\u540C\u7C7B\u578B\u540D\u79F0"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u540E\u7AEF\u8FD4\u56DE contractTypeName")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7ECF\u9500\u5546"),
                createVNode("td", null, "AGENT_NAME"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u7ECF\u9500\u5546\u540D\u79F0"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "-")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7ECF\u9500\u5546\u7B80\u79F0"),
                createVNode("td", null, "SHORT_NAME"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u7ECF\u9500\u5546\u7B80\u79F0"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "-")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u4EA4\u6613\u516C\u53F8"),
                createVNode("td", null, "TRADE_COMPANY_NAME"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u4EA4\u6613\u516C\u53F8\u540D\u79F0"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "-")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5408\u540C\u6709\u6548\u671F"),
                createVNode("td", null, "BEGIN_DATE"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u5408\u540C\u6709\u6548\u671F\uFF08\u8D77-\u6B62\uFF09"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u6E32\u67D3\u4E3A `${moment(beginDate).format('YYYY-MM-DD')} ~ ${moment(endDate).format('YYYY-MM-DD')}`")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6CD5\u4EBA\u7F16\u7801"),
                createVNode("td", null, "BILL_ACCT_CODE"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u6CD5\u4EBA\u7F16\u7801"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "-")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6CD5\u4EBA\u540D\u79F0"),
                createVNode("td", null, "BILL_ACCT_NAME"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u6CD5\u4EBA\u540D\u79F0"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "-")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u72B6\u6001"),
                createVNode("td", null, "CONTRACT_STATUS_NAME"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u5408\u540C\u72B6\u6001\u540D\u79F0"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u540E\u7AEF\u8FD4\u56DE contractStatusName")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u9A73\u56DE\u539F\u56E0"),
                createVNode("td", null, "REJECT_REASON"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u9A73\u56DE\u539F\u56E0"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "-")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u521B\u5EFA\u4EBA"),
                createVNode("td", null, "CREATE_USER_CODE"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u521B\u5EFA\u4EBA\u7F16\u7801"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "-")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u521B\u5EFA\u65F6\u95F4"),
                createVNode("td", null, "CREATE_TIME"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u521B\u5EFA\u65F6\u95F4"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "-")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u53D1\u8D77\u4EBA"),
                createVNode("td", null, "INITIATOR"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u53D1\u8D77\u4EBA"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "-")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u53D1\u8D77\u65F6\u95F4"),
                createVNode("td", null, "INITIATE_TIME"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u53D1\u8D77\u65F6\u95F4"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "-")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5B8C\u6210\u65F6\u95F4"),
                createVNode("td", null, "COMPLETE_TIME"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u5B8C\u6210\u65F6\u95F4"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "-")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u64CD\u4F5C"),
                createVNode("td", null, "-"),
                createVNode("td", null, "Button(link)"),
                createVNode("td", null, "\u884C\u64CD\u4F5C\u6309\u94AE\u7EC4"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u53F3\u9501\u5B9A\u5217\uFF0C\u6839\u636E\u5408\u540C\u72B6\u6001\u52A8\u6001\u6E32\u67D3\u4E0D\u540C\u64CD\u4F5C\u6309\u94AE\uFF08\u89C1\u4E0B\u8868\uFF09")
              ])
            ])
          ]),
          createVNode("p", null, "\u67E5\u8BE2SQL\uFF1A"),
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " EC.UNIFY_CONTRACT_CODE       "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "\u5408\u540C\u7EDF\u4E00\u7F16\u53F7"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "       EC.ELECTRONIC_CONTRACT_CODE  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "\u5408\u540C\u7F16\u53F7"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "       EC.SOURCE_DOCUMENT_CODE      "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "\u6765\u6E90\u5408\u540C\u7F16\u53F7"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "       EC.CONTRACT_TYPE_NAME        "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "\u5408\u540C\u7C7B\u578B"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "       EC.AGENT_NAME                "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "\u7ECF\u9500\u5546"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "       EC.SHORT_NAME                "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "\u7ECF\u9500\u5546\u7B80\u79F0"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "       EC.TRADE_COMPANY_NAME        "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "\u4EA4\u6613\u516C\u53F8"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "       EC.BEGIN_DATE                "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "\u5408\u540C\u5F00\u59CB\u65E5\u671F"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "       EC.END_DATE                  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "\u5408\u540C\u7ED3\u675F\u65E5\u671F"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "       EC.BILL_ACCT_CODE            "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "\u6CD5\u4EBA\u7F16\u7801"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "       EC.BILL_ACCT_NAME            "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "\u6CD5\u4EBA\u540D\u79F0"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "       EC.CONTRACT_STATUS_NAME      "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "\u72B6\u6001"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "       EC.REJECT_REASON             "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "\u9A73\u56DE\u539F\u56E0"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "       EC.CREATE_USER_CODE          "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "\u521B\u5EFA\u4EBA"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "       TO_CHAR(EC.CREATE_TIME,"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "YYYY-MM-DD HH24:MI:SS"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "\u521B\u5EFA\u65F6\u95F4"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "       EC.INITIATOR                 "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "\u53D1\u8D77\u4EBA"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "       TO_CHAR(EC.INITIATE_TIME,"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "YYYY-MM-DD HH24:MI:SS"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "\u53D1\u8D77\u65F6\u95F4"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "       TO_CHAR(EC.COMPLETE_TIME,"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "YYYY-MM-DD HH24:MI:SS"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "\u5B8C\u6210\u65F6\u95F4"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " ELECTRONIC_CONTRACT EC")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " (:sourceDocumentCode "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NULL"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "OR"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " EC.SOURCE_DOCUMENT_CODE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "LIKE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "%"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "||"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " :sourceDocumentCode "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "||"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "%"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ")")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " (:electronicContractCode "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NULL"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "OR"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " EC.ELECTRONIC_CONTRACT_CODE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "LIKE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "%"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "||"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " :electronicContractCode "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "||"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "%"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ")")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " (:agentCode "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NULL"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "OR"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " EC.AGENT_CODE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "LIKE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "%"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "||"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " :agentCode "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "||"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "%"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ")")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " (:contractType "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NULL"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "OR"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " EC.CONTRACT_TYPE "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " :contractType)")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " (:contractSubType "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NULL"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "OR"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " EC.CONTRACT_SUB_TYPE "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " :contractSubType)")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " (:"),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "status"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NULL"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "OR"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " EC.CONTRACT_STATUS "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " :"),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "status"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ")")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ORDER BY"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " EC.CREATE_TIME "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "DESC"),
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
  _push(ssrRenderComponent(_component_KbCard, { title: "\u9009\u62E9\u5F39\u7A97" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h4${_scopeId}>\u5F39\u7A971\uFF1A\u4FEE\u6539\u5408\u540C\u72B6\u6001\u5F39\u7A97\uFF08UpdateContractStatus \u7EC4\u4EF6\uFF09</h4><blockquote${_scopeId}>\u524D\u7AEF\u4EE3\u7801\uFF1A<code${_scopeId}>contract/processing/components/UpdateContractStatus.tsx</code>\u3002\u901A\u8FC7 <code${_scopeId}>updateContractStatusRef.current.open(data)</code> \u6253\u5F00\uFF0Cdata \u5305\u542B id\u3001electronicContractCode\u3001contractStatus\u3001newContractStatus\u3002</blockquote><table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5B57\u6BB5\u540D</th><th${_scopeId}>\u6570\u636E\u5E93\u5217\u540D</th><th${_scopeId}>\u7EC4\u4EF6</th><th${_scopeId}>\u4E1A\u52A1\u91CA\u4E49</th><th${_scopeId}>\u663E\u9690\u6761\u4EF6</th><th${_scopeId}>\u53D6\u503C/\u8D4B\u503C\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u5408\u540C\u7F16\u53F7</td><td${_scopeId}>ELECTRONIC_CONTRACT_CODE</td><td${_scopeId}>TextField</td><td${_scopeId}>\u5F53\u524D\u5408\u540C\u7F16\u53F7</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>disabled\uFF0C\u7531\u884C\u6570\u636E\u4F20\u5165</td></tr><tr${_scopeId}><td${_scopeId}>\u5F53\u524D\u5408\u540C\u72B6\u6001</td><td${_scopeId}>CONTRACT_STATUS</td><td${_scopeId}>Select</td><td${_scopeId}>\u5F53\u524D\u5408\u540C\u72B6\u6001</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>disabled\uFF0C\u503C\u96C6 MBO.CONTRACT_STATUS\uFF0CtextField=meaning\uFF0CvalueField=value</td></tr><tr${_scopeId}><td${_scopeId}>\u4FEE\u6539\u540E\u5408\u540C\u72B6\u6001</td><td${_scopeId}>NEW_CONTRACT_STATUS</td><td${_scopeId}>Select</td><td${_scopeId}>\u4FEE\u6539\u540E\u7684\u76EE\u6807\u5408\u540C\u72B6\u6001</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>required\uFF0C\u503C\u96C6 MBO.CONTRACT_STATUS\uFF0CtextField=meaning\uFF0CvalueField=value</td></tr></tbody></table><p${_scopeId}>\u5F39\u7A97\u914D\u7F6E\uFF1A<code${_scopeId}>title=&#39;\u4FEE\u6539\u5408\u540C\u72B6\u6001&#39;</code>\uFF0C<code${_scopeId}>size=&#39;large&#39;</code>\uFF0C<code${_scopeId}>closable=true</code>\uFF0C<code${_scopeId}>resizable=true</code>\uFF0C<code${_scopeId}>destroyOnClose=true</code>\u3002</p><ul${_scopeId}><li${_scopeId}><code${_scopeId}>onOk</code>\uFF1A\u5148 <code${_scopeId}>formDS.validate()</code> \u6821\u9A8C\uFF0C\u901A\u8FC7\u540E\u8C03\u7528 <code${_scopeId}>contractProcessingApi.updateContractStatus</code>\uFF08POST <code${_scopeId}>ch/contract/process/modify/contractStatus</code>\uFF09\uFF0C\u63D0\u4EA4 <code${_scopeId}>formDS.current.toData()</code>\uFF1B\u6210\u529F\u540E\u8C03\u7528 <code${_scopeId}>onSuccess</code> \u89E6\u53D1\u5217\u8868\u5237\u65B0\u3002</li><li${_scopeId}><code${_scopeId}>onCancel</code>\uFF1A<code${_scopeId}>formDS.reset()</code> \u91CD\u7F6E\u8868\u5355\u3002</li></ul>`);
      } else {
        return [
          createVNode("h4", null, "\u5F39\u7A971\uFF1A\u4FEE\u6539\u5408\u540C\u72B6\u6001\u5F39\u7A97\uFF08UpdateContractStatus \u7EC4\u4EF6\uFF09"),
          createVNode("blockquote", null, [
            createTextVNode("\u524D\u7AEF\u4EE3\u7801\uFF1A"),
            createVNode("code", null, "contract/processing/components/UpdateContractStatus.tsx"),
            createTextVNode("\u3002\u901A\u8FC7 "),
            createVNode("code", null, "updateContractStatusRef.current.open(data)"),
            createTextVNode(" \u6253\u5F00\uFF0Cdata \u5305\u542B id\u3001electronicContractCode\u3001contractStatus\u3001newContractStatus\u3002")
          ]),
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
                createVNode("td", null, "ELECTRONIC_CONTRACT_CODE"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u5F53\u524D\u5408\u540C\u7F16\u53F7"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "disabled\uFF0C\u7531\u884C\u6570\u636E\u4F20\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5F53\u524D\u5408\u540C\u72B6\u6001"),
                createVNode("td", null, "CONTRACT_STATUS"),
                createVNode("td", null, "Select"),
                createVNode("td", null, "\u5F53\u524D\u5408\u540C\u72B6\u6001"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "disabled\uFF0C\u503C\u96C6 MBO.CONTRACT_STATUS\uFF0CtextField=meaning\uFF0CvalueField=value")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u4FEE\u6539\u540E\u5408\u540C\u72B6\u6001"),
                createVNode("td", null, "NEW_CONTRACT_STATUS"),
                createVNode("td", null, "Select"),
                createVNode("td", null, "\u4FEE\u6539\u540E\u7684\u76EE\u6807\u5408\u540C\u72B6\u6001"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "required\uFF0C\u503C\u96C6 MBO.CONTRACT_STATUS\uFF0CtextField=meaning\uFF0CvalueField=value")
              ])
            ])
          ]),
          createVNode("p", null, [
            createTextVNode("\u5F39\u7A97\u914D\u7F6E\uFF1A"),
            createVNode("code", null, "title='\u4FEE\u6539\u5408\u540C\u72B6\u6001'"),
            createTextVNode("\uFF0C"),
            createVNode("code", null, "size='large'"),
            createTextVNode("\uFF0C"),
            createVNode("code", null, "closable=true"),
            createTextVNode("\uFF0C"),
            createVNode("code", null, "resizable=true"),
            createTextVNode("\uFF0C"),
            createVNode("code", null, "destroyOnClose=true"),
            createTextVNode("\u3002")
          ]),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("code", null, "onOk"),
              createTextVNode("\uFF1A\u5148 "),
              createVNode("code", null, "formDS.validate()"),
              createTextVNode(" \u6821\u9A8C\uFF0C\u901A\u8FC7\u540E\u8C03\u7528 "),
              createVNode("code", null, "contractProcessingApi.updateContractStatus"),
              createTextVNode("\uFF08POST "),
              createVNode("code", null, "ch/contract/process/modify/contractStatus"),
              createTextVNode("\uFF09\uFF0C\u63D0\u4EA4 "),
              createVNode("code", null, "formDS.current.toData()"),
              createTextVNode("\uFF1B\u6210\u529F\u540E\u8C03\u7528 "),
              createVNode("code", null, "onSuccess"),
              createTextVNode(" \u89E6\u53D1\u5217\u8868\u5237\u65B0\u3002")
            ]),
            createVNode("li", null, [
              createVNode("code", null, "onCancel"),
              createTextVNode("\uFF1A"),
              createVNode("code", null, "formDS.reset()"),
              createTextVNode(" \u91CD\u7F6E\u8868\u5355\u3002")
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
        _push2(`<blockquote${_scopeId}>\u524D\u7AEF\u4EE3\u7801\uFF1A<code${_scopeId}>contract/processing/list.tsx</code> \u5934\u90E8\u6309\u94AE + <code${_scopeId}>contract/processing/stores/listConfig.tsx</code> \u7684 <code${_scopeId}>getOperateBtns</code> \u884C\u64CD\u4F5C\u6309\u94AE\u3002\u884C\u64CD\u4F5C\u6309\u94AE\u6839\u636E <code${_scopeId}>record.get(&#39;contractStatus&#39;)</code> \u52A8\u6001\u663E\u793A\uFF0C\u6BCF\u4E2A\u6309\u94AE\u914D\u7F6E <code${_scopeId}>permissionList</code> \u6743\u9650\u7801\u3002</blockquote><table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u6309\u94AE\u540D\u79F0</th><th${_scopeId}>\u6240\u5728\u4F4D\u7F6E</th><th${_scopeId}>\u663E\u9690\u6761\u4EF6</th><th${_scopeId}>\u6743\u9650\u7801</th><th${_scopeId}>\u529F\u80FD\u8BF4\u660E</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u53D1\u8D77\u6388\u6743\u4E66</td><td${_scopeId}>\u5934\u90E8\u6309\u94AE</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>-</td><td${_scopeId}>\u8DF3\u8F6C \`/contract/authorization/add\` \u65B0\u589E\u6388\u6743\u4E66</td></tr><tr${_scopeId}><td${_scopeId}>\u53D1\u8D77\u8054\u7EDC\u51FD</td><td${_scopeId}>\u5934\u90E8\u6309\u94AE</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>-</td><td${_scopeId}>\u8DF3\u8F6C \`/contract/contactLetter/add\` \u65B0\u589E\u8054\u7EDC\u51FD</td></tr><tr${_scopeId}><td${_scopeId}>\u4FEE\u6539\u5408\u540C\u72B6\u6001</td><td${_scopeId}>\u884C\u64CD\u4F5C</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>hzero.e_contract.brand.processing.ps.update_contract_status</td><td${_scopeId}>\u6253\u5F00&quot;\u4FEE\u6539\u5408\u540C\u72B6\u6001&quot;\u5F39\u7A97\uFF0C\u8C03\u7528 \`ch/contract/process/modify/contractStatus\` \u63A5\u53E3\u4FEE\u6539\u72B6\u6001</td></tr><tr${_scopeId}><td${_scopeId}>\u5408\u540C\u7B7E\u7F72\u53D1\u8D77</td><td${_scopeId}>\u884C\u64CD\u4F5C</td><td${_scopeId}>\u5408\u540C\u72B6\u6001\u4E3A \`temporary\`</td><td${_scopeId}>hzero.e_contract.brand.processing.ps.contract_sign_init</td><td${_scopeId}>\u8DF3\u8F6C\u7B7E\u7F72\u53D1\u8D77\u9875\u9762 \`/contract/{contractFolder}/sign/{electronicContractId}\`</td></tr><tr${_scopeId}><td${_scopeId}>\u91CD\u65B0\u63A8\u9001\u6CD5\u5927\u5927</td><td${_scopeId}>\u884C\u64CD\u4F5C</td><td${_scopeId}>\u5408\u540C\u72B6\u6001\u4E3A \`waiting_seal\`</td><td${_scopeId}>hzero.e_contract.brand.processing.ps.resend_signing_sms</td><td${_scopeId}>Modal.confirm \u786E\u8BA4\u540E\u8C03\u7528 \`ch/contract/process/noticeDistributor/rePush/{electronicContractId}\` \u63A5\u53E3\u91CD\u53D1\u7B7E\u7F72\u77ED\u4FE1\uFF0C\u5F39\u7A97\u5185\u5C55\u793A\u7B7E\u8BA2\u4E3B\u4F53\u548C\u7B7E\u8BA2\u4EBA\u4FE1\u606F</td></tr><tr${_scopeId}><td${_scopeId}>\u5408\u540C\u540C\u6B65</td><td${_scopeId}>\u884C\u64CD\u4F5C</td><td${_scopeId}>\u5408\u540C\u72B6\u6001\u4E3A \`completed\`</td><td${_scopeId}>hzero.e_contract.brand.processing.ps.contract-sync</td><td${_scopeId}>Modal.confirm \u786E\u8BA4\u540E\u8C03\u7528 \`ch/contract/callback/retry/update-signature/{unifyContractCode}\` \u63A5\u53E3\u540C\u6B65\u7B7E\u7F72\u72B6\u6001</td></tr><tr${_scopeId}><td${_scopeId}>\u5408\u540C\u91CD\u65B0\u5F52\u6863</td><td${_scopeId}>\u884C\u64CD\u4F5C</td><td${_scopeId}>\u5408\u540C\u72B6\u6001\u4E3A \`completed\`/\`submitted_oa\`/\`push_portal\`/\`pass_oa\`</td><td${_scopeId}>hzero.e_contract.brand.processing.ps.electronic_contract</td><td${_scopeId}>Modal.confirm \u786E\u8BA4\u540E\u8C03\u7528 \`ch/contract/process/fddContractFiling/{electronicContractId}\` \u63A5\u53E3\u91CD\u65B0\u5F52\u6863</td></tr><tr${_scopeId}><td${_scopeId}>\u62D2\u7B7E\u5904\u7406</td><td${_scopeId}>\u884C\u64CD\u4F5C</td><td${_scopeId}>\u5408\u540C\u72B6\u6001\u4E3A \`refuse_seal\`</td><td${_scopeId}>hzero.e_contract.brand.processing.ps.contract_reject</td><td${_scopeId}>\u8DF3\u8F6C\u8BE6\u60C5\u9875 \`/contract/{contractFolder}/detail/{electronicContractId}\`\uFF0C\u4F20\u5165 \`actionType=PROCESS\`</td></tr><tr${_scopeId}><td${_scopeId}>OA\u9A73\u56DE\u5904\u7406</td><td${_scopeId}>\u884C\u64CD\u4F5C</td><td${_scopeId}>\u5408\u540C\u72B6\u6001\u4E3A \`reject_oa\`</td><td${_scopeId}>hzero.e_contract.brand.processing.ps.reject_oa</td><td${_scopeId}>\u8DF3\u8F6C\u8BE6\u60C5\u9875\uFF0C\u4F20\u5165 \`actionType=REJECTION\`</td></tr><tr${_scopeId}><td${_scopeId}>\u63A8\u9001OA\u5904\u7406</td><td${_scopeId}>\u884C\u64CD\u4F5C</td><td${_scopeId}>\u5408\u540C\u72B6\u6001\u4E3A \`pending\`</td><td${_scopeId}>hzero.e_contract.brand.processing.ps.push_oa</td><td${_scopeId}>\u8DF3\u8F6C\u8BE6\u60C5\u9875\uFF0C\u4F20\u5165 \`actionType=PUSHOA\`</td></tr><tr${_scopeId}><td${_scopeId}>\u63A8\u9001\u95E8\u6237</td><td${_scopeId}>\u884C\u64CD\u4F5C</td><td${_scopeId}>\u5408\u540C\u72B6\u6001\u4E3A \`pass_oa\`</td><td${_scopeId}>hzero.e_contract.brand.processing.ps.push_h</td><td${_scopeId}>\u8DF3\u8F6C\u8BE6\u60C5\u9875\uFF0C\u4F20\u5165 \`actionType=PASS_OA\`</td></tr><tr${_scopeId}><td${_scopeId}>OA\u4F5C\u5E9F\u9A73\u56DE\u5904\u7406</td><td${_scopeId}>\u884C\u64CD\u4F5C</td><td${_scopeId}>\u5408\u540C\u72B6\u6001\u4E3A \`oa_invalid_reject\` \u4E14\u5408\u540C\u7C7B\u578B\u4E3A \`distribution_contract\`</td><td${_scopeId}>hzero.e_contract.brand.processing.oa_invalid_reject</td><td${_scopeId}>\u8DF3\u8F6C\u8BE6\u60C5\u9875\uFF0C\u4F20\u5165 \`actionType=OA_CANCEL_REJECT\`</td></tr></tbody></table><h4${_scopeId}>\u6309\u94AE1\uFF1A\u53D1\u8D77\u6388\u6743\u4E66\uFF08\u5934\u90E8\u6309\u94AE\uFF09</h4><p${_scopeId}>\u59CB\u7EC8\u663E\u793A\uFF0C\u70B9\u51FB\u540E\u8C03\u7528 <code${_scopeId}>openTab({ title: &#39;\u53D1\u8D77\u6388\u6743\u4E66&#39;, key: &#39;/contract/authorization/add&#39; })</code> \u8DF3\u8F6C\u6388\u6743\u4E66\u65B0\u589E\u9875\u9762\u3002</p><h4${_scopeId}>\u6309\u94AE2\uFF1A\u53D1\u8D77\u8054\u7EDC\u51FD\uFF08\u5934\u90E8\u6309\u94AE\uFF09</h4><p${_scopeId}>\u59CB\u7EC8\u663E\u793A\uFF0C\u70B9\u51FB\u540E\u8C03\u7528 <code${_scopeId}>openTab({ title: &#39;\u53D1\u8D77\u8054\u7EDC\u51FD&#39;, key: &#39;/contract/contactLetter/add&#39; })</code> \u8DF3\u8F6C\u8054\u7EDC\u51FD\u65B0\u589E\u9875\u9762\u3002</p><h4${_scopeId}>\u6309\u94AE3\uFF1A\u4FEE\u6539\u5408\u540C\u72B6\u6001\uFF08\u884C\u64CD\u4F5C\uFF09</h4><p${_scopeId}>\u59CB\u7EC8\u663E\u793A\uFF0C\u70B9\u51FB\u540E\u901A\u8FC7 <code${_scopeId}>updateContractStatusRef.current.open(data)</code> \u6253\u5F00&quot;\u4FEE\u6539\u5408\u540C\u72B6\u6001&quot;\u5F39\u7A97\uFF0Cdata \u5305\u542B id\u3001electronicContractCode\u3001contractStatus\u3001newContractStatus\u3002\u5F39\u7A97\u5185\u5C55\u793A\u5408\u540C\u7F16\u53F7\uFF08\u53EA\u8BFB\uFF09\u3001\u5F53\u524D\u5408\u540C\u72B6\u6001\uFF08\u53EA\u8BFB\uFF09\u3001\u4FEE\u6539\u540E\u5408\u540C\u72B6\u6001\uFF08\u5FC5\u586B\uFF09\uFF0C\u70B9\u51FB\u786E\u5B9A\u540E\u8C03\u7528 POST <code${_scopeId}>ch/contract/process/modify/contractStatus</code> \u63A5\u53E3\uFF0C\u63D0\u4EA4 <code${_scopeId}>formDS.current.toData()</code>\u3002\u6210\u529F\u540E\u89E6\u53D1\u5217\u8868\u5237\u65B0\u3002</p><h4${_scopeId}>\u6309\u94AE4\uFF1A\u5408\u540C\u7B7E\u7F72\u53D1\u8D77\uFF08\u884C\u64CD\u4F5C\uFF09</h4><p${_scopeId}>\u5F53\u5408\u540C\u72B6\u6001\u4E3A <code${_scopeId}>temporary</code>\uFF08\u4E34\u65F6/\u8349\u7A3F\uFF09\u65F6\u663E\u793A\uFF0C\u70B9\u51FB\u540E\u8DF3\u8F6C\u7B7E\u7F72\u53D1\u8D77\u9875\u9762 <code${_scopeId}>/contract/{contractFolder}/sign/{electronicContractId}</code>\u3002\u5176\u4E2D <code${_scopeId}>contractFolder</code> \u7531 <code${_scopeId}>CONTRACT_FOLDER_MAP[contractType]</code> \u6620\u5C04\u5F97\u5230\uFF0C<code${_scopeId}>contractLabel</code> \u7531 <code${_scopeId}>CONTRACT_LABEL_MAP[contractType]</code> \u6620\u5C04\u5F97\u5230\u3002</p><h4${_scopeId}>\u6309\u94AE5\uFF1A\u91CD\u65B0\u63A8\u9001\u6CD5\u5927\u5927\uFF08\u884C\u64CD\u4F5C\uFF09</h4><p${_scopeId}>\u5F53\u5408\u540C\u72B6\u6001\u4E3A <code${_scopeId}>waiting_seal</code>\uFF08\u5F85\u7B7E\u7F72\uFF09\u65F6\u663E\u793A\uFF0C\u70B9\u51FB\u540E\u5F39\u51FA Modal.confirm \u786E\u8BA4\u6846\uFF0C\u6807\u9898&quot;\u91CD\u53D1\u7B7E\u7F72\u77ED\u4FE1&quot;\uFF0C\u5185\u5BB9\u5C55\u793A\uFF1A</p><ul${_scopeId}><li${_scopeId}>\u2460 \u7B7E\u8BA2\u4E3B\u4F53\uFF1A<code${_scopeId}>{billAcctName || &#39;\u672A\u77E5\u4E3B\u4F53&#39;}</code></li><li${_scopeId}>\u2461 \u7B7E\u8BA2\u4EBA\uFF1A<code${_scopeId}>{signerName || &#39;\u672A\u77E5\u7B7E\u8BA2\u4EBA&#39;}\uFF08{mobile || &#39;\u672A\u77E5\u624B\u673A\u53F7&#39;}\uFF09</code></li></ul><p${_scopeId}>\u786E\u8BA4\u540E\u8C03\u7528 POST <code${_scopeId}>ch/contract/process/noticeDistributor/rePush/{electronicContractId}</code> \u63A5\u53E3\u91CD\u65B0\u63A8\u9001\u7B7E\u7F72\u77ED\u4FE1\u3002</p><h4${_scopeId}>\u6309\u94AE6\uFF1A\u5408\u540C\u540C\u6B65\uFF08\u884C\u64CD\u4F5C\uFF09</h4><p${_scopeId}>\u5F53\u5408\u540C\u72B6\u6001\u4E3A <code${_scopeId}>completed</code>\uFF08\u5DF2\u5B8C\u6210\uFF09\u65F6\u663E\u793A\uFF0C\u70B9\u51FB\u540E\u5F39\u51FA Modal.confirm \u786E\u8BA4\u6846\uFF0C\u6807\u9898&quot;\u5408\u540C\u540C\u6B65&quot;\uFF0C\u5185\u5BB9&quot;\u786E\u5B9A\u8981\u540C\u6B65\u8BE5\u5408\u540C\u5417\uFF1F&quot;\u3002\u786E\u8BA4\u540E\u8C03\u7528 POST <code${_scopeId}>ch/contract/callback/retry/update-signature/{unifyContractCode}</code> \u63A5\u53E3\u91CD\u65B0\u540C\u6B65\u7B7E\u7F72\u72B6\u6001\u3002\u6210\u529F\u540E\u89E6\u53D1\u5217\u8868\u5237\u65B0\u3002</p><h4${_scopeId}>\u6309\u94AE7\uFF1A\u5408\u540C\u91CD\u65B0\u5F52\u6863\uFF08\u884C\u64CD\u4F5C\uFF09</h4><p${_scopeId}>\u5F53\u5408\u540C\u72B6\u6001\u4E3A <code${_scopeId}>completed</code>/<code${_scopeId}>submitted_oa</code>/<code${_scopeId}>push_portal</code>/<code${_scopeId}>pass_oa</code> \u65F6\u663E\u793A\uFF0C\u70B9\u51FB\u540E\u5F39\u51FA Modal.confirm \u786E\u8BA4\u6846\uFF0C\u6807\u9898&quot;\u5408\u540C\u91CD\u65B0\u5F52\u6863&quot;\uFF0C\u5185\u5BB9&quot;\u786E\u5B9A\u8981\u91CD\u65B0\u5F52\u6863\u8BE5\u5408\u540C\u5417\uFF1F&quot;\u3002\u786E\u8BA4\u540E\u8C03\u7528 POST <code${_scopeId}>ch/contract/process/fddContractFiling/{electronicContractId}</code> \u63A5\u53E3\u91CD\u65B0\u89E6\u53D1\u6CD5\u5927\u5927\u5F52\u6863\u6D41\u7A0B\u3002\u6210\u529F\u540E\u89E6\u53D1\u5217\u8868\u5237\u65B0\u3002</p><h4${_scopeId}>\u6309\u94AE8\uFF1A\u62D2\u7B7E\u5904\u7406\uFF08\u884C\u64CD\u4F5C\uFF09</h4><p${_scopeId}>\u5F53\u5408\u540C\u72B6\u6001\u4E3A <code${_scopeId}>refuse_seal</code>\uFF08\u62D2\u7B7E\uFF09\u65F6\u663E\u793A\uFF0C\u70B9\u51FB\u540E\u8DF3\u8F6C\u8BE6\u60C5\u9875 <code${_scopeId}>/contract/{contractFolder}/detail/{electronicContractId}</code>\uFF0C\u4F20\u5165 <code${_scopeId}>actionType=PROCESS</code>\uFF0C\u5728\u8BE6\u60C5\u9875\u5904\u7406\u62D2\u7B7E\u6D41\u7A0B\u3002</p><h4${_scopeId}>\u6309\u94AE9\uFF1AOA\u9A73\u56DE\u5904\u7406\uFF08\u884C\u64CD\u4F5C\uFF09</h4><p${_scopeId}>\u5F53\u5408\u540C\u72B6\u6001\u4E3A <code${_scopeId}>reject_oa</code>\uFF08OA\u9A73\u56DE\uFF09\u65F6\u663E\u793A\uFF0C\u70B9\u51FB\u540E\u8DF3\u8F6C\u8BE6\u60C5\u9875\uFF0C\u4F20\u5165 <code${_scopeId}>actionType=REJECTION</code>\uFF0C\u5728\u8BE6\u60C5\u9875\u5904\u7406OA\u9A73\u56DE\u6D41\u7A0B\u3002</p><h4${_scopeId}>\u6309\u94AE10\uFF1A\u63A8\u9001OA\u5904\u7406\uFF08\u884C\u64CD\u4F5C\uFF09</h4><p${_scopeId}>\u5F53\u5408\u540C\u72B6\u6001\u4E3A <code${_scopeId}>pending</code>\uFF08OA\u5BA1\u6279\u4E2D\uFF09\u65F6\u663E\u793A\uFF0C\u70B9\u51FB\u540E\u8DF3\u8F6C\u8BE6\u60C5\u9875\uFF0C\u4F20\u5165 <code${_scopeId}>actionType=PUSHOA</code>\uFF0C\u5728\u8BE6\u60C5\u9875\u5904\u7406\u63A8\u9001OA\u6D41\u7A0B\u3002</p><h4${_scopeId}>\u6309\u94AE11\uFF1A\u63A8\u9001\u95E8\u6237\uFF08\u884C\u64CD\u4F5C\uFF09</h4><p${_scopeId}>\u5F53\u5408\u540C\u72B6\u6001\u4E3A <code${_scopeId}>pass_oa</code>\uFF08OA\u901A\u8FC7\uFF09\u65F6\u663E\u793A\uFF0C\u70B9\u51FB\u540E\u8DF3\u8F6C\u8BE6\u60C5\u9875\uFF0C\u4F20\u5165 <code${_scopeId}>actionType=PASS_OA</code>\uFF0C\u5728\u8BE6\u60C5\u9875\u5904\u7406\u63A8\u9001\u95E8\u6237\u6D41\u7A0B\u3002</p><h4${_scopeId}>\u6309\u94AE12\uFF1AOA\u4F5C\u5E9F\u9A73\u56DE\u5904\u7406\uFF08\u884C\u64CD\u4F5C\uFF09</h4><p${_scopeId}>\u5F53\u5408\u540C\u72B6\u6001\u4E3A <code${_scopeId}>oa_invalid_reject</code>\uFF08OA\u4F5C\u5E9F\u9A73\u56DE\uFF09\u4E14\u5408\u540C\u7C7B\u578B\u4E3A <code${_scopeId}>distribution_contract</code>\uFF08\u7ECF\u9500\u5408\u540C\uFF09\u65F6\u663E\u793A\uFF0C\u70B9\u51FB\u540E\u8DF3\u8F6C\u8BE6\u60C5\u9875\uFF0C\u4F20\u5165 <code${_scopeId}>actionType=OA_CANCEL_REJECT</code>\uFF0C\u5728\u8BE6\u60C5\u9875\u5904\u7406OA\u4F5C\u5E9F\u9A73\u56DE\u6D41\u7A0B\u3002</p>`);
      } else {
        return [
          createVNode("blockquote", null, [
            createTextVNode("\u524D\u7AEF\u4EE3\u7801\uFF1A"),
            createVNode("code", null, "contract/processing/list.tsx"),
            createTextVNode(" \u5934\u90E8\u6309\u94AE + "),
            createVNode("code", null, "contract/processing/stores/listConfig.tsx"),
            createTextVNode(" \u7684 "),
            createVNode("code", null, "getOperateBtns"),
            createTextVNode(" \u884C\u64CD\u4F5C\u6309\u94AE\u3002\u884C\u64CD\u4F5C\u6309\u94AE\u6839\u636E "),
            createVNode("code", null, "record.get('contractStatus')"),
            createTextVNode(" \u52A8\u6001\u663E\u793A\uFF0C\u6BCF\u4E2A\u6309\u94AE\u914D\u7F6E "),
            createVNode("code", null, "permissionList"),
            createTextVNode(" \u6743\u9650\u7801\u3002")
          ]),
          createVNode("table", { class: "kb-field-tbl" }, [
            createVNode("thead", null, [
              createVNode("tr", null, [
                createVNode("th", null, "\u6309\u94AE\u540D\u79F0"),
                createVNode("th", null, "\u6240\u5728\u4F4D\u7F6E"),
                createVNode("th", null, "\u663E\u9690\u6761\u4EF6"),
                createVNode("th", null, "\u6743\u9650\u7801"),
                createVNode("th", null, "\u529F\u80FD\u8BF4\u660E")
              ])
            ]),
            createVNode("tbody", null, [
              createVNode("tr", null, [
                createVNode("td", null, "\u53D1\u8D77\u6388\u6743\u4E66"),
                createVNode("td", null, "\u5934\u90E8\u6309\u94AE"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u8DF3\u8F6C `/contract/authorization/add` \u65B0\u589E\u6388\u6743\u4E66")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u53D1\u8D77\u8054\u7EDC\u51FD"),
                createVNode("td", null, "\u5934\u90E8\u6309\u94AE"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u8DF3\u8F6C `/contract/contactLetter/add` \u65B0\u589E\u8054\u7EDC\u51FD")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u4FEE\u6539\u5408\u540C\u72B6\u6001"),
                createVNode("td", null, "\u884C\u64CD\u4F5C"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "hzero.e_contract.brand.processing.ps.update_contract_status"),
                createVNode("td", null, '\u6253\u5F00"\u4FEE\u6539\u5408\u540C\u72B6\u6001"\u5F39\u7A97\uFF0C\u8C03\u7528 `ch/contract/process/modify/contractStatus` \u63A5\u53E3\u4FEE\u6539\u72B6\u6001')
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5408\u540C\u7B7E\u7F72\u53D1\u8D77"),
                createVNode("td", null, "\u884C\u64CD\u4F5C"),
                createVNode("td", null, "\u5408\u540C\u72B6\u6001\u4E3A `temporary`"),
                createVNode("td", null, "hzero.e_contract.brand.processing.ps.contract_sign_init"),
                createVNode("td", null, "\u8DF3\u8F6C\u7B7E\u7F72\u53D1\u8D77\u9875\u9762 `/contract/{contractFolder}/sign/{electronicContractId}`")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u91CD\u65B0\u63A8\u9001\u6CD5\u5927\u5927"),
                createVNode("td", null, "\u884C\u64CD\u4F5C"),
                createVNode("td", null, "\u5408\u540C\u72B6\u6001\u4E3A `waiting_seal`"),
                createVNode("td", null, "hzero.e_contract.brand.processing.ps.resend_signing_sms"),
                createVNode("td", null, "Modal.confirm \u786E\u8BA4\u540E\u8C03\u7528 `ch/contract/process/noticeDistributor/rePush/{electronicContractId}` \u63A5\u53E3\u91CD\u53D1\u7B7E\u7F72\u77ED\u4FE1\uFF0C\u5F39\u7A97\u5185\u5C55\u793A\u7B7E\u8BA2\u4E3B\u4F53\u548C\u7B7E\u8BA2\u4EBA\u4FE1\u606F")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5408\u540C\u540C\u6B65"),
                createVNode("td", null, "\u884C\u64CD\u4F5C"),
                createVNode("td", null, "\u5408\u540C\u72B6\u6001\u4E3A `completed`"),
                createVNode("td", null, "hzero.e_contract.brand.processing.ps.contract-sync"),
                createVNode("td", null, "Modal.confirm \u786E\u8BA4\u540E\u8C03\u7528 `ch/contract/callback/retry/update-signature/{unifyContractCode}` \u63A5\u53E3\u540C\u6B65\u7B7E\u7F72\u72B6\u6001")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5408\u540C\u91CD\u65B0\u5F52\u6863"),
                createVNode("td", null, "\u884C\u64CD\u4F5C"),
                createVNode("td", null, "\u5408\u540C\u72B6\u6001\u4E3A `completed`/`submitted_oa`/`push_portal`/`pass_oa`"),
                createVNode("td", null, "hzero.e_contract.brand.processing.ps.electronic_contract"),
                createVNode("td", null, "Modal.confirm \u786E\u8BA4\u540E\u8C03\u7528 `ch/contract/process/fddContractFiling/{electronicContractId}` \u63A5\u53E3\u91CD\u65B0\u5F52\u6863")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u62D2\u7B7E\u5904\u7406"),
                createVNode("td", null, "\u884C\u64CD\u4F5C"),
                createVNode("td", null, "\u5408\u540C\u72B6\u6001\u4E3A `refuse_seal`"),
                createVNode("td", null, "hzero.e_contract.brand.processing.ps.contract_reject"),
                createVNode("td", null, "\u8DF3\u8F6C\u8BE6\u60C5\u9875 `/contract/{contractFolder}/detail/{electronicContractId}`\uFF0C\u4F20\u5165 `actionType=PROCESS`")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "OA\u9A73\u56DE\u5904\u7406"),
                createVNode("td", null, "\u884C\u64CD\u4F5C"),
                createVNode("td", null, "\u5408\u540C\u72B6\u6001\u4E3A `reject_oa`"),
                createVNode("td", null, "hzero.e_contract.brand.processing.ps.reject_oa"),
                createVNode("td", null, "\u8DF3\u8F6C\u8BE6\u60C5\u9875\uFF0C\u4F20\u5165 `actionType=REJECTION`")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u63A8\u9001OA\u5904\u7406"),
                createVNode("td", null, "\u884C\u64CD\u4F5C"),
                createVNode("td", null, "\u5408\u540C\u72B6\u6001\u4E3A `pending`"),
                createVNode("td", null, "hzero.e_contract.brand.processing.ps.push_oa"),
                createVNode("td", null, "\u8DF3\u8F6C\u8BE6\u60C5\u9875\uFF0C\u4F20\u5165 `actionType=PUSHOA`")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u63A8\u9001\u95E8\u6237"),
                createVNode("td", null, "\u884C\u64CD\u4F5C"),
                createVNode("td", null, "\u5408\u540C\u72B6\u6001\u4E3A `pass_oa`"),
                createVNode("td", null, "hzero.e_contract.brand.processing.ps.push_h"),
                createVNode("td", null, "\u8DF3\u8F6C\u8BE6\u60C5\u9875\uFF0C\u4F20\u5165 `actionType=PASS_OA`")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "OA\u4F5C\u5E9F\u9A73\u56DE\u5904\u7406"),
                createVNode("td", null, "\u884C\u64CD\u4F5C"),
                createVNode("td", null, "\u5408\u540C\u72B6\u6001\u4E3A `oa_invalid_reject` \u4E14\u5408\u540C\u7C7B\u578B\u4E3A `distribution_contract`"),
                createVNode("td", null, "hzero.e_contract.brand.processing.oa_invalid_reject"),
                createVNode("td", null, "\u8DF3\u8F6C\u8BE6\u60C5\u9875\uFF0C\u4F20\u5165 `actionType=OA_CANCEL_REJECT`")
              ])
            ])
          ]),
          createVNode("h4", null, "\u6309\u94AE1\uFF1A\u53D1\u8D77\u6388\u6743\u4E66\uFF08\u5934\u90E8\u6309\u94AE\uFF09"),
          createVNode("p", null, [
            createTextVNode("\u59CB\u7EC8\u663E\u793A\uFF0C\u70B9\u51FB\u540E\u8C03\u7528 "),
            createVNode("code", null, "openTab({ title: '\u53D1\u8D77\u6388\u6743\u4E66', key: '/contract/authorization/add' })"),
            createTextVNode(" \u8DF3\u8F6C\u6388\u6743\u4E66\u65B0\u589E\u9875\u9762\u3002")
          ]),
          createVNode("h4", null, "\u6309\u94AE2\uFF1A\u53D1\u8D77\u8054\u7EDC\u51FD\uFF08\u5934\u90E8\u6309\u94AE\uFF09"),
          createVNode("p", null, [
            createTextVNode("\u59CB\u7EC8\u663E\u793A\uFF0C\u70B9\u51FB\u540E\u8C03\u7528 "),
            createVNode("code", null, "openTab({ title: '\u53D1\u8D77\u8054\u7EDC\u51FD', key: '/contract/contactLetter/add' })"),
            createTextVNode(" \u8DF3\u8F6C\u8054\u7EDC\u51FD\u65B0\u589E\u9875\u9762\u3002")
          ]),
          createVNode("h4", null, "\u6309\u94AE3\uFF1A\u4FEE\u6539\u5408\u540C\u72B6\u6001\uFF08\u884C\u64CD\u4F5C\uFF09"),
          createVNode("p", null, [
            createTextVNode("\u59CB\u7EC8\u663E\u793A\uFF0C\u70B9\u51FB\u540E\u901A\u8FC7 "),
            createVNode("code", null, "updateContractStatusRef.current.open(data)"),
            createTextVNode(' \u6253\u5F00"\u4FEE\u6539\u5408\u540C\u72B6\u6001"\u5F39\u7A97\uFF0Cdata \u5305\u542B id\u3001electronicContractCode\u3001contractStatus\u3001newContractStatus\u3002\u5F39\u7A97\u5185\u5C55\u793A\u5408\u540C\u7F16\u53F7\uFF08\u53EA\u8BFB\uFF09\u3001\u5F53\u524D\u5408\u540C\u72B6\u6001\uFF08\u53EA\u8BFB\uFF09\u3001\u4FEE\u6539\u540E\u5408\u540C\u72B6\u6001\uFF08\u5FC5\u586B\uFF09\uFF0C\u70B9\u51FB\u786E\u5B9A\u540E\u8C03\u7528 POST '),
            createVNode("code", null, "ch/contract/process/modify/contractStatus"),
            createTextVNode(" \u63A5\u53E3\uFF0C\u63D0\u4EA4 "),
            createVNode("code", null, "formDS.current.toData()"),
            createTextVNode("\u3002\u6210\u529F\u540E\u89E6\u53D1\u5217\u8868\u5237\u65B0\u3002")
          ]),
          createVNode("h4", null, "\u6309\u94AE4\uFF1A\u5408\u540C\u7B7E\u7F72\u53D1\u8D77\uFF08\u884C\u64CD\u4F5C\uFF09"),
          createVNode("p", null, [
            createTextVNode("\u5F53\u5408\u540C\u72B6\u6001\u4E3A "),
            createVNode("code", null, "temporary"),
            createTextVNode("\uFF08\u4E34\u65F6/\u8349\u7A3F\uFF09\u65F6\u663E\u793A\uFF0C\u70B9\u51FB\u540E\u8DF3\u8F6C\u7B7E\u7F72\u53D1\u8D77\u9875\u9762 "),
            createVNode("code", null, "/contract/{contractFolder}/sign/{electronicContractId}"),
            createTextVNode("\u3002\u5176\u4E2D "),
            createVNode("code", null, "contractFolder"),
            createTextVNode(" \u7531 "),
            createVNode("code", null, "CONTRACT_FOLDER_MAP[contractType]"),
            createTextVNode(" \u6620\u5C04\u5F97\u5230\uFF0C"),
            createVNode("code", null, "contractLabel"),
            createTextVNode(" \u7531 "),
            createVNode("code", null, "CONTRACT_LABEL_MAP[contractType]"),
            createTextVNode(" \u6620\u5C04\u5F97\u5230\u3002")
          ]),
          createVNode("h4", null, "\u6309\u94AE5\uFF1A\u91CD\u65B0\u63A8\u9001\u6CD5\u5927\u5927\uFF08\u884C\u64CD\u4F5C\uFF09"),
          createVNode("p", null, [
            createTextVNode("\u5F53\u5408\u540C\u72B6\u6001\u4E3A "),
            createVNode("code", null, "waiting_seal"),
            createTextVNode('\uFF08\u5F85\u7B7E\u7F72\uFF09\u65F6\u663E\u793A\uFF0C\u70B9\u51FB\u540E\u5F39\u51FA Modal.confirm \u786E\u8BA4\u6846\uFF0C\u6807\u9898"\u91CD\u53D1\u7B7E\u7F72\u77ED\u4FE1"\uFF0C\u5185\u5BB9\u5C55\u793A\uFF1A')
          ]),
          createVNode("ul", null, [
            createVNode("li", null, [
              createTextVNode("\u2460 \u7B7E\u8BA2\u4E3B\u4F53\uFF1A"),
              createVNode("code", null, "{billAcctName || '\u672A\u77E5\u4E3B\u4F53'}")
            ]),
            createVNode("li", null, [
              createTextVNode("\u2461 \u7B7E\u8BA2\u4EBA\uFF1A"),
              createVNode("code", null, "{signerName || '\u672A\u77E5\u7B7E\u8BA2\u4EBA'}\uFF08{mobile || '\u672A\u77E5\u624B\u673A\u53F7'}\uFF09")
            ])
          ]),
          createVNode("p", null, [
            createTextVNode("\u786E\u8BA4\u540E\u8C03\u7528 POST "),
            createVNode("code", null, "ch/contract/process/noticeDistributor/rePush/{electronicContractId}"),
            createTextVNode(" \u63A5\u53E3\u91CD\u65B0\u63A8\u9001\u7B7E\u7F72\u77ED\u4FE1\u3002")
          ]),
          createVNode("h4", null, "\u6309\u94AE6\uFF1A\u5408\u540C\u540C\u6B65\uFF08\u884C\u64CD\u4F5C\uFF09"),
          createVNode("p", null, [
            createTextVNode("\u5F53\u5408\u540C\u72B6\u6001\u4E3A "),
            createVNode("code", null, "completed"),
            createTextVNode('\uFF08\u5DF2\u5B8C\u6210\uFF09\u65F6\u663E\u793A\uFF0C\u70B9\u51FB\u540E\u5F39\u51FA Modal.confirm \u786E\u8BA4\u6846\uFF0C\u6807\u9898"\u5408\u540C\u540C\u6B65"\uFF0C\u5185\u5BB9"\u786E\u5B9A\u8981\u540C\u6B65\u8BE5\u5408\u540C\u5417\uFF1F"\u3002\u786E\u8BA4\u540E\u8C03\u7528 POST '),
            createVNode("code", null, "ch/contract/callback/retry/update-signature/{unifyContractCode}"),
            createTextVNode(" \u63A5\u53E3\u91CD\u65B0\u540C\u6B65\u7B7E\u7F72\u72B6\u6001\u3002\u6210\u529F\u540E\u89E6\u53D1\u5217\u8868\u5237\u65B0\u3002")
          ]),
          createVNode("h4", null, "\u6309\u94AE7\uFF1A\u5408\u540C\u91CD\u65B0\u5F52\u6863\uFF08\u884C\u64CD\u4F5C\uFF09"),
          createVNode("p", null, [
            createTextVNode("\u5F53\u5408\u540C\u72B6\u6001\u4E3A "),
            createVNode("code", null, "completed"),
            createTextVNode("/"),
            createVNode("code", null, "submitted_oa"),
            createTextVNode("/"),
            createVNode("code", null, "push_portal"),
            createTextVNode("/"),
            createVNode("code", null, "pass_oa"),
            createTextVNode(' \u65F6\u663E\u793A\uFF0C\u70B9\u51FB\u540E\u5F39\u51FA Modal.confirm \u786E\u8BA4\u6846\uFF0C\u6807\u9898"\u5408\u540C\u91CD\u65B0\u5F52\u6863"\uFF0C\u5185\u5BB9"\u786E\u5B9A\u8981\u91CD\u65B0\u5F52\u6863\u8BE5\u5408\u540C\u5417\uFF1F"\u3002\u786E\u8BA4\u540E\u8C03\u7528 POST '),
            createVNode("code", null, "ch/contract/process/fddContractFiling/{electronicContractId}"),
            createTextVNode(" \u63A5\u53E3\u91CD\u65B0\u89E6\u53D1\u6CD5\u5927\u5927\u5F52\u6863\u6D41\u7A0B\u3002\u6210\u529F\u540E\u89E6\u53D1\u5217\u8868\u5237\u65B0\u3002")
          ]),
          createVNode("h4", null, "\u6309\u94AE8\uFF1A\u62D2\u7B7E\u5904\u7406\uFF08\u884C\u64CD\u4F5C\uFF09"),
          createVNode("p", null, [
            createTextVNode("\u5F53\u5408\u540C\u72B6\u6001\u4E3A "),
            createVNode("code", null, "refuse_seal"),
            createTextVNode("\uFF08\u62D2\u7B7E\uFF09\u65F6\u663E\u793A\uFF0C\u70B9\u51FB\u540E\u8DF3\u8F6C\u8BE6\u60C5\u9875 "),
            createVNode("code", null, "/contract/{contractFolder}/detail/{electronicContractId}"),
            createTextVNode("\uFF0C\u4F20\u5165 "),
            createVNode("code", null, "actionType=PROCESS"),
            createTextVNode("\uFF0C\u5728\u8BE6\u60C5\u9875\u5904\u7406\u62D2\u7B7E\u6D41\u7A0B\u3002")
          ]),
          createVNode("h4", null, "\u6309\u94AE9\uFF1AOA\u9A73\u56DE\u5904\u7406\uFF08\u884C\u64CD\u4F5C\uFF09"),
          createVNode("p", null, [
            createTextVNode("\u5F53\u5408\u540C\u72B6\u6001\u4E3A "),
            createVNode("code", null, "reject_oa"),
            createTextVNode("\uFF08OA\u9A73\u56DE\uFF09\u65F6\u663E\u793A\uFF0C\u70B9\u51FB\u540E\u8DF3\u8F6C\u8BE6\u60C5\u9875\uFF0C\u4F20\u5165 "),
            createVNode("code", null, "actionType=REJECTION"),
            createTextVNode("\uFF0C\u5728\u8BE6\u60C5\u9875\u5904\u7406OA\u9A73\u56DE\u6D41\u7A0B\u3002")
          ]),
          createVNode("h4", null, "\u6309\u94AE10\uFF1A\u63A8\u9001OA\u5904\u7406\uFF08\u884C\u64CD\u4F5C\uFF09"),
          createVNode("p", null, [
            createTextVNode("\u5F53\u5408\u540C\u72B6\u6001\u4E3A "),
            createVNode("code", null, "pending"),
            createTextVNode("\uFF08OA\u5BA1\u6279\u4E2D\uFF09\u65F6\u663E\u793A\uFF0C\u70B9\u51FB\u540E\u8DF3\u8F6C\u8BE6\u60C5\u9875\uFF0C\u4F20\u5165 "),
            createVNode("code", null, "actionType=PUSHOA"),
            createTextVNode("\uFF0C\u5728\u8BE6\u60C5\u9875\u5904\u7406\u63A8\u9001OA\u6D41\u7A0B\u3002")
          ]),
          createVNode("h4", null, "\u6309\u94AE11\uFF1A\u63A8\u9001\u95E8\u6237\uFF08\u884C\u64CD\u4F5C\uFF09"),
          createVNode("p", null, [
            createTextVNode("\u5F53\u5408\u540C\u72B6\u6001\u4E3A "),
            createVNode("code", null, "pass_oa"),
            createTextVNode("\uFF08OA\u901A\u8FC7\uFF09\u65F6\u663E\u793A\uFF0C\u70B9\u51FB\u540E\u8DF3\u8F6C\u8BE6\u60C5\u9875\uFF0C\u4F20\u5165 "),
            createVNode("code", null, "actionType=PASS_OA"),
            createTextVNode("\uFF0C\u5728\u8BE6\u60C5\u9875\u5904\u7406\u63A8\u9001\u95E8\u6237\u6D41\u7A0B\u3002")
          ]),
          createVNode("h4", null, "\u6309\u94AE12\uFF1AOA\u4F5C\u5E9F\u9A73\u56DE\u5904\u7406\uFF08\u884C\u64CD\u4F5C\uFF09"),
          createVNode("p", null, [
            createTextVNode("\u5F53\u5408\u540C\u72B6\u6001\u4E3A "),
            createVNode("code", null, "oa_invalid_reject"),
            createTextVNode("\uFF08OA\u4F5C\u5E9F\u9A73\u56DE\uFF09\u4E14\u5408\u540C\u7C7B\u578B\u4E3A "),
            createVNode("code", null, "distribution_contract"),
            createTextVNode("\uFF08\u7ECF\u9500\u5408\u540C\uFF09\u65F6\u663E\u793A\uFF0C\u70B9\u51FB\u540E\u8DF3\u8F6C\u8BE6\u60C5\u9875\uFF0C\u4F20\u5165 "),
            createVNode("code", null, "actionType=OA_CANCEL_REJECT"),
            createTextVNode("\uFF0C\u5728\u8BE6\u60C5\u9875\u5904\u7406OA\u4F5C\u5E9F\u9A73\u56DE\u6D41\u7A0B\u3002")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, { title: "\u4FDD\u5B58/\u63D0\u4EA4\u6821\u9A8C" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}>\u6821\u9A8C1\uFF1A\u4FEE\u6539\u5408\u540C\u72B6\u6001\u65F6\u76EE\u6807\u72B6\u6001\u5FC5\u586B \u2014\u2014 \u786E\u4FDD\u72B6\u6001\u53D8\u66F4\u76EE\u6807\u660E\u786E</li><li${_scopeId}>\u6821\u9A8C2\uFF1A\u64CD\u4F5C\u65F6\u9700\u9009\u62E9\u4E00\u6761\u6570\u636E \u2014\u2014 \u786E\u4FDD\u64CD\u4F5C\u5BF9\u8C61\u660E\u786E</li><li${_scopeId}>\u6821\u9A8C3\uFF1A\u5408\u540C\u5B58\u5728\u6027\u6821\u9A8C \u2014\u2014 \u786E\u4FDD\u5408\u540CID\u6709\u6548</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, "\u6821\u9A8C1\uFF1A\u4FEE\u6539\u5408\u540C\u72B6\u6001\u65F6\u76EE\u6807\u72B6\u6001\u5FC5\u586B \u2014\u2014 \u786E\u4FDD\u72B6\u6001\u53D8\u66F4\u76EE\u6807\u660E\u786E"),
            createVNode("li", null, "\u6821\u9A8C2\uFF1A\u64CD\u4F5C\u65F6\u9700\u9009\u62E9\u4E00\u6761\u6570\u636E \u2014\u2014 \u786E\u4FDD\u64CD\u4F5C\u5BF9\u8C61\u660E\u786E"),
            createVNode("li", null, "\u6821\u9A8C3\uFF1A\u5408\u540C\u5B58\u5728\u6027\u6821\u9A8C \u2014\u2014 \u786E\u4FDD\u5408\u540CID\u6709\u6548")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, { title: "\u72B6\u6001\u673A" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>[\u7B7E\u7F72\u8D85\u65F6] </span><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>--\u91CD\u53D1\u77ED\u4FE1--&gt; [\u5F85\u7B7E\u7F72] --\u7B7E\u7F72\u6210\u529F--&gt; [\u5DF2\u5B8C\u6210]</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>                                    </span><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>--\u7B7E\u7F72\u5931\u8D25--&gt; [\u7B7E\u7F72\u5931\u8D25]</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>[\u7B7E\u7F72\u5931\u8D25] </span><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>--\u4FEE\u6539\u72B6\u6001--&gt; [\u76EE\u6807\u72B6\u6001]</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>           </span><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>--\u5408\u540C\u540C\u6B65--&gt; [\u6B63\u5E38\u72B6\u6001]</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>[\u5F52\u6863\u5931\u8D25] </span><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>--\u91CD\u65B0\u5F52\u6863--&gt; [\u5DF2\u5F52\u6863]</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>[\u56DE\u8C03\u5931\u8D25] </span><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>--\u5408\u540C\u540C\u6B65--&gt; [\u6B63\u5E38\u72B6\u6001]</span></span>
<span class="line"${_scopeId}></span></code></pre></div><table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u72B6\u6001</th><th${_scopeId}>\u72B6\u6001\u8BF4\u660E</th><th${_scopeId}>\u53EF\u6267\u884C\u64CD\u4F5C</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u7B7E\u7F72\u8D85\u65F6</td><td${_scopeId}>\u7B7E\u7F72\u6D41\u7A0B\u8D85\u65F6</td><td${_scopeId}>\u91CD\u53D1\u7B7E\u7F72\u77ED\u4FE1\u3001\u4FEE\u6539\u5408\u540C\u72B6\u6001\u3001\u5408\u540C\u540C\u6B65</td></tr><tr${_scopeId}><td${_scopeId}>\u7B7E\u7F72\u5931\u8D25</td><td${_scopeId}>\u7B7E\u7F72\u6D41\u7A0B\u5931\u8D25</td><td${_scopeId}>\u91CD\u53D1\u7B7E\u7F72\u77ED\u4FE1\u3001\u4FEE\u6539\u5408\u540C\u72B6\u6001\u3001\u5408\u540C\u540C\u6B65</td></tr><tr${_scopeId}><td${_scopeId}>\u5F52\u6863\u5931\u8D25</td><td${_scopeId}>\u5F52\u6863\u6D41\u7A0B\u5931\u8D25</td><td${_scopeId}>\u91CD\u65B0\u5F52\u6863\u3001\u4FEE\u6539\u5408\u540C\u72B6\u6001</td></tr><tr${_scopeId}><td${_scopeId}>\u56DE\u8C03\u5931\u8D25</td><td${_scopeId}>\u56DE\u8C03\u540C\u6B65\u5931\u8D25</td><td${_scopeId}>\u5408\u540C\u540C\u6B65\u3001\u4FEE\u6539\u5408\u540C\u72B6\u6001</td></tr><tr${_scopeId}><td${_scopeId}>\u5F85\u7B7E\u7F72</td><td${_scopeId}>\u7B49\u5F85\u7ECF\u9500\u5546\u7B7E\u7F72</td><td${_scopeId}>\u4FEE\u6539\u5408\u540C\u72B6\u6001</td></tr><tr${_scopeId}><td${_scopeId}>\u5DF2\u5B8C\u6210</td><td${_scopeId}>\u7B7E\u7F72\u5B8C\u6210</td><td${_scopeId}>\u4FEE\u6539\u5408\u540C\u72B6\u6001</td></tr><tr${_scopeId}><td${_scopeId}>\u5DF2\u5F52\u6863</td><td${_scopeId}>\u5F52\u6863\u5B8C\u6210</td><td${_scopeId}>\u4FEE\u6539\u5408\u540C\u72B6\u6001</td></tr></tbody></table>`);
      } else {
        return [
          createVNode("div", { class: "language-sql" }, [
            createVNode("button", {
              title: "Copy Code",
              class: "copy"
            }),
            createVNode("span", { class: "lang" }, "sql"),
            createVNode("pre", { class: "shiki" }, [
              createVNode("code", null, [
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "[\u7B7E\u7F72\u8D85\u65F6] "),
                  createVNode("span", { style: { "color": "#676E95" } }, "--\u91CD\u53D1\u77ED\u4FE1--> [\u5F85\u7B7E\u7F72] --\u7B7E\u7F72\u6210\u529F--> [\u5DF2\u5B8C\u6210]")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#89DDFF" } }, "                                    "),
                  createVNode("span", { style: { "color": "#676E95" } }, "--\u7B7E\u7F72\u5931\u8D25--> [\u7B7E\u7F72\u5931\u8D25]")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "[\u7B7E\u7F72\u5931\u8D25] "),
                  createVNode("span", { style: { "color": "#676E95" } }, "--\u4FEE\u6539\u72B6\u6001--> [\u76EE\u6807\u72B6\u6001]")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#89DDFF" } }, "           "),
                  createVNode("span", { style: { "color": "#676E95" } }, "--\u5408\u540C\u540C\u6B65--> [\u6B63\u5E38\u72B6\u6001]")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "[\u5F52\u6863\u5931\u8D25] "),
                  createVNode("span", { style: { "color": "#676E95" } }, "--\u91CD\u65B0\u5F52\u6863--> [\u5DF2\u5F52\u6863]")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "[\u56DE\u8C03\u5931\u8D25] "),
                  createVNode("span", { style: { "color": "#676E95" } }, "--\u5408\u540C\u540C\u6B65--> [\u6B63\u5E38\u72B6\u6001]")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("table", { class: "kb-field-tbl" }, [
            createVNode("thead", null, [
              createVNode("tr", null, [
                createVNode("th", null, "\u72B6\u6001"),
                createVNode("th", null, "\u72B6\u6001\u8BF4\u660E"),
                createVNode("th", null, "\u53EF\u6267\u884C\u64CD\u4F5C")
              ])
            ]),
            createVNode("tbody", null, [
              createVNode("tr", null, [
                createVNode("td", null, "\u7B7E\u7F72\u8D85\u65F6"),
                createVNode("td", null, "\u7B7E\u7F72\u6D41\u7A0B\u8D85\u65F6"),
                createVNode("td", null, "\u91CD\u53D1\u7B7E\u7F72\u77ED\u4FE1\u3001\u4FEE\u6539\u5408\u540C\u72B6\u6001\u3001\u5408\u540C\u540C\u6B65")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7B7E\u7F72\u5931\u8D25"),
                createVNode("td", null, "\u7B7E\u7F72\u6D41\u7A0B\u5931\u8D25"),
                createVNode("td", null, "\u91CD\u53D1\u7B7E\u7F72\u77ED\u4FE1\u3001\u4FEE\u6539\u5408\u540C\u72B6\u6001\u3001\u5408\u540C\u540C\u6B65")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5F52\u6863\u5931\u8D25"),
                createVNode("td", null, "\u5F52\u6863\u6D41\u7A0B\u5931\u8D25"),
                createVNode("td", null, "\u91CD\u65B0\u5F52\u6863\u3001\u4FEE\u6539\u5408\u540C\u72B6\u6001")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u56DE\u8C03\u5931\u8D25"),
                createVNode("td", null, "\u56DE\u8C03\u540C\u6B65\u5931\u8D25"),
                createVNode("td", null, "\u5408\u540C\u540C\u6B65\u3001\u4FEE\u6539\u5408\u540C\u72B6\u6001")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5F85\u7B7E\u7F72"),
                createVNode("td", null, "\u7B49\u5F85\u7ECF\u9500\u5546\u7B7E\u7F72"),
                createVNode("td", null, "\u4FEE\u6539\u5408\u540C\u72B6\u6001")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5DF2\u5B8C\u6210"),
                createVNode("td", null, "\u7B7E\u7F72\u5B8C\u6210"),
                createVNode("td", null, "\u4FEE\u6539\u5408\u540C\u72B6\u6001")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5DF2\u5F52\u6863"),
                createVNode("td", null, "\u5F52\u6863\u5B8C\u6210"),
                createVNode("td", null, "\u4FEE\u6539\u5408\u540C\u72B6\u6001")
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, { title: "\u5BFC\u5165" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p${_scopeId}>\u4E0D\u652F\u6301\u5BFC\u5165\u529F\u80FD\u3002</p>`);
      } else {
        return [
          createVNode("p", null, "\u4E0D\u652F\u6301\u5BFC\u5165\u529F\u80FD\u3002")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, { title: "ELECTRONIC_CONTRACT\uFF08\u7535\u5B50\u5408\u540C\u8868\uFF09" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5B57\u6BB5\u540D</th><th${_scopeId}>\u7C7B\u578B</th><th${_scopeId}>\u91CA\u4E49</th><th${_scopeId}>\u5BF9\u5E94\u754C\u9762\u5B57\u6BB5</th><th${_scopeId}>\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>ELECTRONIC_CONTRACT_ID</td><td${_scopeId}>NUMBER</td><td${_scopeId}>\u5408\u540CID</td><td${_scopeId}>-</td><td${_scopeId}>\u4E3B\u952E</td></tr><tr${_scopeId}><td${_scopeId}>ELECTRONIC_CONTRACT_CODE</td><td${_scopeId}>VARCHAR2(64)</td><td${_scopeId}>\u5408\u540C\u4E1A\u52A1\u7F16\u7801</td><td${_scopeId}>\u5408\u540C\u7F16\u53F7</td><td${_scopeId}>\u7CFB\u7EDF\u81EA\u52A8\u751F\u6210</td></tr><tr${_scopeId}><td${_scopeId}>UNIFY_CONTRACT_CODE</td><td${_scopeId}>VARCHAR2(64)</td><td${_scopeId}>\u7EDF\u4E00\u5408\u540C\u7F16\u7801</td><td${_scopeId}>-</td><td${_scopeId}>\u8DE8\u7CFB\u7EDF\u5173\u8054</td></tr><tr${_scopeId}><td${_scopeId}>CONTRACT_NAME</td><td${_scopeId}>VARCHAR2(256)</td><td${_scopeId}>\u5408\u540C\u540D\u79F0</td><td${_scopeId}>\u5408\u540C\u540D\u79F0</td><td${_scopeId}>-</td></tr><tr${_scopeId}><td${_scopeId}>CONTRACT_TYPE</td><td${_scopeId}>VARCHAR2(32)</td><td${_scopeId}>\u5408\u540C\u7C7B\u578B</td><td${_scopeId}>\u5408\u540C\u7C7B\u578B</td><td${_scopeId}>\u503C\u96C6 MBO.CONTRACT_TEMPLATE</td></tr><tr${_scopeId}><td${_scopeId}>CONTRACT_STATUS</td><td${_scopeId}>VARCHAR2(32)</td><td${_scopeId}>\u5408\u540C\u72B6\u6001</td><td${_scopeId}>\u7B7E\u7F72\u72B6\u6001</td><td${_scopeId}>\u503C\u96C6 MBO.CONTRACT_STATUS</td></tr><tr${_scopeId}><td${_scopeId}>EXCEPTION_TYPE</td><td${_scopeId}>VARCHAR2(32)</td><td${_scopeId}>\u5F02\u5E38\u7C7B\u578B</td><td${_scopeId}>\u5F02\u5E38\u7C7B\u578B</td><td${_scopeId}>\u503C\u96C6 MBO.CONTRACT_EXCEPTION_TYPE</td></tr><tr${_scopeId}><td${_scopeId}>EXCEPTION_INFO</td><td${_scopeId}>VARCHAR2(512)</td><td${_scopeId}>\u5F02\u5E38\u4FE1\u606F</td><td${_scopeId}>\u5F02\u5E38\u4FE1\u606F</td><td${_scopeId}>\u5F02\u5E38\u53D1\u751F\u65F6\u8BB0\u5F55</td></tr><tr${_scopeId}><td${_scopeId}>AGENT_ID</td><td${_scopeId}>NUMBER</td><td${_scopeId}>\u7ECF\u9500\u5546ID</td><td${_scopeId}>-</td><td${_scopeId}>\u5173\u8054\u7ECF\u9500\u5546</td></tr><tr${_scopeId}><td${_scopeId}>AGENT_NAME</td><td${_scopeId}>VARCHAR2(128)</td><td${_scopeId}>\u7ECF\u9500\u5546\u540D\u79F0</td><td${_scopeId}>\u7ECF\u9500\u5546</td><td${_scopeId}>-</td></tr><tr${_scopeId}><td${_scopeId}>BRAND_ID</td><td${_scopeId}>NUMBER</td><td${_scopeId}>\u54C1\u724C\u65B9ID</td><td${_scopeId}>-</td><td${_scopeId}>-</td></tr><tr${_scopeId}><td${_scopeId}>SIGN_URL</td><td${_scopeId}>VARCHAR2(512)</td><td${_scopeId}>\u7B7E\u7F72\u94FE\u63A5</td><td${_scopeId}>-</td><td${_scopeId}>-</td></tr><tr${_scopeId}><td${_scopeId}>SEAL_STATUS</td><td${_scopeId}>VARCHAR2(32)</td><td${_scopeId}>\u7528\u5370\u72B6\u6001</td><td${_scopeId}>-</td><td${_scopeId}>-</td></tr><tr${_scopeId}><td${_scopeId}>OA_STATUS</td><td${_scopeId}>VARCHAR2(32)</td><td${_scopeId}>OA\u5BA1\u6279\u72B6\u6001</td><td${_scopeId}>-</td><td${_scopeId}>-</td></tr><tr${_scopeId}><td${_scopeId}>OBJECT_VERSION_NUMBER</td><td${_scopeId}>NUMBER</td><td${_scopeId}>\u4E50\u89C2\u9501\u7248\u672C\u53F7</td><td${_scopeId}>-</td><td${_scopeId}>-</td></tr><tr${_scopeId}><td${_scopeId}>CREATED_BY</td><td${_scopeId}>NUMBER</td><td${_scopeId}>\u521B\u5EFA\u4EBA</td><td${_scopeId}>-</td><td${_scopeId}>\u7CFB\u7EDF\u81EA\u52A8</td></tr><tr${_scopeId}><td${_scopeId}>CREATION_DATE</td><td${_scopeId}>DATE</td><td${_scopeId}>\u521B\u5EFA\u65F6\u95F4</td><td${_scopeId}>\u521B\u5EFA\u65F6\u95F4</td><td${_scopeId}>\u7CFB\u7EDF\u81EA\u52A8</td></tr><tr${_scopeId}><td${_scopeId}>LAST_UPDATED_BY</td><td${_scopeId}>NUMBER</td><td${_scopeId}>\u6700\u540E\u66F4\u65B0\u4EBA</td><td${_scopeId}>-</td><td${_scopeId}>\u7CFB\u7EDF\u81EA\u52A8</td></tr><tr${_scopeId}><td${_scopeId}>LAST_UPDATE_DATE</td><td${_scopeId}>DATE</td><td${_scopeId}>\u6700\u540E\u66F4\u65B0\u65F6\u95F4</td><td${_scopeId}>\u66F4\u65B0\u65F6\u95F4</td><td${_scopeId}>\u7CFB\u7EDF\u81EA\u52A8</td></tr></tbody></table>`);
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
                createVNode("td", null, "ELECTRONIC_CONTRACT_ID"),
                createVNode("td", null, "NUMBER"),
                createVNode("td", null, "\u5408\u540CID"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u4E3B\u952E")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "ELECTRONIC_CONTRACT_CODE"),
                createVNode("td", null, "VARCHAR2(64)"),
                createVNode("td", null, "\u5408\u540C\u4E1A\u52A1\u7F16\u7801"),
                createVNode("td", null, "\u5408\u540C\u7F16\u53F7"),
                createVNode("td", null, "\u7CFB\u7EDF\u81EA\u52A8\u751F\u6210")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "UNIFY_CONTRACT_CODE"),
                createVNode("td", null, "VARCHAR2(64)"),
                createVNode("td", null, "\u7EDF\u4E00\u5408\u540C\u7F16\u7801"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u8DE8\u7CFB\u7EDF\u5173\u8054")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "CONTRACT_NAME"),
                createVNode("td", null, "VARCHAR2(256)"),
                createVNode("td", null, "\u5408\u540C\u540D\u79F0"),
                createVNode("td", null, "\u5408\u540C\u540D\u79F0"),
                createVNode("td", null, "-")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "CONTRACT_TYPE"),
                createVNode("td", null, "VARCHAR2(32)"),
                createVNode("td", null, "\u5408\u540C\u7C7B\u578B"),
                createVNode("td", null, "\u5408\u540C\u7C7B\u578B"),
                createVNode("td", null, "\u503C\u96C6 MBO.CONTRACT_TEMPLATE")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "CONTRACT_STATUS"),
                createVNode("td", null, "VARCHAR2(32)"),
                createVNode("td", null, "\u5408\u540C\u72B6\u6001"),
                createVNode("td", null, "\u7B7E\u7F72\u72B6\u6001"),
                createVNode("td", null, "\u503C\u96C6 MBO.CONTRACT_STATUS")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "EXCEPTION_TYPE"),
                createVNode("td", null, "VARCHAR2(32)"),
                createVNode("td", null, "\u5F02\u5E38\u7C7B\u578B"),
                createVNode("td", null, "\u5F02\u5E38\u7C7B\u578B"),
                createVNode("td", null, "\u503C\u96C6 MBO.CONTRACT_EXCEPTION_TYPE")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "EXCEPTION_INFO"),
                createVNode("td", null, "VARCHAR2(512)"),
                createVNode("td", null, "\u5F02\u5E38\u4FE1\u606F"),
                createVNode("td", null, "\u5F02\u5E38\u4FE1\u606F"),
                createVNode("td", null, "\u5F02\u5E38\u53D1\u751F\u65F6\u8BB0\u5F55")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "AGENT_ID"),
                createVNode("td", null, "NUMBER"),
                createVNode("td", null, "\u7ECF\u9500\u5546ID"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u5173\u8054\u7ECF\u9500\u5546")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "AGENT_NAME"),
                createVNode("td", null, "VARCHAR2(128)"),
                createVNode("td", null, "\u7ECF\u9500\u5546\u540D\u79F0"),
                createVNode("td", null, "\u7ECF\u9500\u5546"),
                createVNode("td", null, "-")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "BRAND_ID"),
                createVNode("td", null, "NUMBER"),
                createVNode("td", null, "\u54C1\u724C\u65B9ID"),
                createVNode("td", null, "-"),
                createVNode("td", null, "-")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "SIGN_URL"),
                createVNode("td", null, "VARCHAR2(512)"),
                createVNode("td", null, "\u7B7E\u7F72\u94FE\u63A5"),
                createVNode("td", null, "-"),
                createVNode("td", null, "-")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "SEAL_STATUS"),
                createVNode("td", null, "VARCHAR2(32)"),
                createVNode("td", null, "\u7528\u5370\u72B6\u6001"),
                createVNode("td", null, "-"),
                createVNode("td", null, "-")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "OA_STATUS"),
                createVNode("td", null, "VARCHAR2(32)"),
                createVNode("td", null, "OA\u5BA1\u6279\u72B6\u6001"),
                createVNode("td", null, "-"),
                createVNode("td", null, "-")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "OBJECT_VERSION_NUMBER"),
                createVNode("td", null, "NUMBER"),
                createVNode("td", null, "\u4E50\u89C2\u9501\u7248\u672C\u53F7"),
                createVNode("td", null, "-"),
                createVNode("td", null, "-")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "CREATED_BY"),
                createVNode("td", null, "NUMBER"),
                createVNode("td", null, "\u521B\u5EFA\u4EBA"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u7CFB\u7EDF\u81EA\u52A8")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "CREATION_DATE"),
                createVNode("td", null, "DATE"),
                createVNode("td", null, "\u521B\u5EFA\u65F6\u95F4"),
                createVNode("td", null, "\u521B\u5EFA\u65F6\u95F4"),
                createVNode("td", null, "\u7CFB\u7EDF\u81EA\u52A8")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "LAST_UPDATED_BY"),
                createVNode("td", null, "NUMBER"),
                createVNode("td", null, "\u6700\u540E\u66F4\u65B0\u4EBA"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u7CFB\u7EDF\u81EA\u52A8")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "LAST_UPDATE_DATE"),
                createVNode("td", null, "DATE"),
                createVNode("td", null, "\u6700\u540E\u66F4\u65B0\u65F6\u95F4"),
                createVNode("td", null, "\u66F4\u65B0\u65F6\u95F4"),
                createVNode("td", null, "\u7CFB\u7EDF\u81EA\u52A8")
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
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u62A5\u9519\u4FE1\u606F</th><th${_scopeId}>\u63D0\u793A\u8282\u70B9</th><th${_scopeId}>\u6839\u56E0\u4E0E\u89E3\u51B3\u65B9\u6848</th><th${_scopeId}>\u7B49\u7EA7</th><th${_scopeId}>\u8BE6\u7EC6\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u5408\u540C\u72B6\u6001\u4E0D\u5141\u8BB8\u6B64\u64CD\u4F5C</td><td${_scopeId}>\u72B6\u6001\u64CD\u4F5C</td><td${_scopeId}>\u5F53\u524D\u72B6\u6001\u4E0D\u53EF\u6267\u884C\u8BE5\u64CD\u4F5C\uFF0C\u786E\u8BA4\u5408\u540C\u5F53\u524D\u72B6\u6001\u662F\u5426\u6B63\u786E</td><td${_scopeId}>error</td><td${_scopeId}>\u540E\u7AEF\u6821\u9A8C\u5408\u540C\u72B6\u6001\u4E0E\u64CD\u4F5C\u5339\u914D\u6027</td></tr><tr${_scopeId}><td${_scopeId}>\u91CD\u65B0\u5F52\u6863\u5931\u8D25</td><td${_scopeId}>\u91CD\u65B0\u5F52\u6863</td><td${_scopeId}>\u6CD5\u5927\u5927\u63A5\u53E3\u8C03\u7528\u5F02\u5E38\uFF0C\u68C0\u67E5\u6CD5\u5927\u5927\u670D\u52A1\u8FDE\u901A\u6027\u540E\u91CD\u8BD5</td><td${_scopeId}>error</td><td${_scopeId}>fddContractFiling \u63A5\u53E3\u8FD4\u56DE\u5931\u8D25</td></tr><tr${_scopeId}><td${_scopeId}>\u91CD\u53D1\u77ED\u4FE1\u5931\u8D25</td><td${_scopeId}>\u91CD\u53D1\u7B7E\u7F72\u77ED\u4FE1</td><td${_scopeId}>\u77ED\u4FE1\u5E73\u53F0\u63A5\u53E3\u5F02\u5E38\uFF0C\u68C0\u67E5\u77ED\u4FE1\u5E73\u53F0\u670D\u52A1\u72B6\u6001</td><td${_scopeId}>error</td><td${_scopeId}>noticeDistributor/rePush \u63A5\u53E3\u8FD4\u56DE\u5931\u8D25</td></tr><tr${_scopeId}><td${_scopeId}>\u5408\u540C\u540C\u6B65\u5931\u8D25</td><td${_scopeId}>\u5408\u540C\u540C\u6B65</td><td${_scopeId}>\u56DE\u8C03\u63A5\u53E3\u5F02\u5E38\uFF0C\u68C0\u67E5\u5916\u90E8\u7CFB\u7EDF\u72B6\u6001\u540E\u91CD\u8BD5</td><td${_scopeId}>error</td><td${_scopeId}>callback/retry/update-signature \u63A5\u53E3\u8FD4\u56DE\u5931\u8D25</td></tr><tr${_scopeId}><td${_scopeId}>\u5408\u540C\u4E0D\u5B58\u5728</td><td${_scopeId}>\u5904\u7406\u65F6</td><td${_scopeId}>\u5408\u540CID\u65E0\u6548\uFF0C\u68C0\u67E5\u5408\u540CID</td><td${_scopeId}>error</td><td${_scopeId}>\u540E\u7AEF\u6821\u9A8C\u5408\u540C\u5B58\u5728\u6027</td></tr><tr${_scopeId}><td${_scopeId}>\u7F51\u7EDC\u5F02\u5E38/\u63A5\u53E3\u8D85\u65F6</td><td${_scopeId}>\u4EFB\u610F\u63A5\u53E3\u8C03\u7528</td><td${_scopeId}>\u7F51\u7EDC\u4E2D\u65AD\u6216\u63A5\u53E3\u54CD\u5E94\u8D85\u65F6\uFF0C\u68C0\u67E5\u7F51\u7EDC\u53CA\u540E\u7AEF\u8D85\u65F6\u914D\u7F6E</td><td${_scopeId}>error</td><td${_scopeId}>axios catch \u6216 timeout</td></tr><tr${_scopeId}><td${_scopeId}>\u6743\u9650\u4E0D\u8DB3</td><td${_scopeId}>\u70B9\u51FB\u64CD\u4F5C\u6309\u94AE</td><td${_scopeId}>\u5F53\u524D\u7528\u6237\u65E0\u5BF9\u5E94\u6309\u94AE\u6743\u9650\u7801\uFF0C\u8054\u7CFB\u7BA1\u7406\u5458\u6388\u6743</td><td${_scopeId}>error</td><td${_scopeId}>permissionList \u6821\u9A8C\u672A\u901A\u8FC7</td></tr><tr${_scopeId}><td${_scopeId}>\u6CD5\u5927\u5927\u670D\u52A1\u4E0D\u53EF\u7528</td><td${_scopeId}>\u91CD\u65B0\u5F52\u6863/\u5408\u540C\u540C\u6B65</td><td${_scopeId}>\u6CD5\u5927\u5927\u670D\u52A1\u5F02\u5E38\uFF0C\u68C0\u67E5\u6CD5\u5927\u5927\u670D\u52A1\u72B6\u6001</td><td${_scopeId}>error</td><td${_scopeId}>\u6CD5\u5927\u5927\u63A5\u53E3\u8FD4\u56DE\u5931\u8D25</td></tr><tr${_scopeId}><td${_scopeId}>\u77ED\u4FE1\u5E73\u53F0\u4E0D\u53EF\u7528</td><td${_scopeId}>\u91CD\u53D1\u77ED\u4FE1</td><td${_scopeId}>\u77ED\u4FE1\u5E73\u53F0\u670D\u52A1\u5F02\u5E38\uFF0C\u68C0\u67E5\u77ED\u4FE1\u5E73\u53F0\u72B6\u6001</td><td${_scopeId}>error</td><td${_scopeId}>\u77ED\u4FE1\u5E73\u53F0\u63A5\u53E3\u8FD4\u56DE\u5931\u8D25</td></tr><tr${_scopeId}><td${_scopeId}>\u503C\u96C6\u6570\u636E\u4E0D\u663E\u793A</td><td${_scopeId}>\u4E0B\u62C9\u9009\u9879</td><td${_scopeId}>\u503C\u96C6 MBO.CONTRACT_EXCEPTION_TYPE \u7B49\u672A\u914D\u7F6E\uFF0C\u68C0\u67E5\u503C\u96C6\u914D\u7F6E</td><td${_scopeId}>warning</td><td${_scopeId}>lookupCode \u67E5\u8BE2\u8FD4\u56DE\u7A7A</td></tr><tr${_scopeId}><td${_scopeId}>\u7ECF\u9500\u5546\u624B\u673A\u53F7\u7F3A\u5931</td><td${_scopeId}>\u91CD\u53D1\u77ED\u4FE1</td><td${_scopeId}>\u7ECF\u9500\u5546\u624B\u673A\u53F7\u4E3A\u7A7A\u6216\u683C\u5F0F\u9519\u8BEF\uFF0C\u68C0\u67E5\u7ECF\u9500\u5546\u6863\u6848\u624B\u673A\u53F7</td><td${_scopeId}>error</td><td${_scopeId}>\u540E\u7AEF\u6821\u9A8C\u624B\u673A\u53F7\u975E\u7A7A</td></tr></tbody></table><h4${_scopeId}>\u62A5\u95191\uFF1A\u5408\u540C\u72B6\u6001\u4E0D\u5141\u8BB8\u6B64\u64CD\u4F5C</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u6267\u884C\u91CD\u65B0\u5F52\u6863\u3001\u4FEE\u6539\u5408\u540C\u72B6\u6001\u3001\u91CD\u53D1\u7B7E\u7F72\u77ED\u4FE1\u3001\u5408\u540C\u540C\u6B65\u7B49\u64CD\u4F5C\u65F6\uFF0C\u5F53\u524D\u5408\u540C\u72B6\u6001\u4E0D\u5141\u8BB8\u8BE5\u64CD\u4F5C</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u540E\u7AEF\u6821\u9A8C\u5408\u540C\u72B6\u6001\u4E0E\u64CD\u4F5C\u5339\u914D\u6027\uFF0C\u5982\u5F52\u6863\u5931\u8D25\u72B6\u6001\u624D\u5141\u8BB8\u91CD\u65B0\u5F52\u6863\u3001\u7B7E\u7F72\u8D85\u65F6/\u7B7E\u7F72\u5931\u8D25\u72B6\u6001\u624D\u5141\u8BB8\u91CD\u53D1\u77ED\u4FE1\u3001\u56DE\u8C03\u5931\u8D25\u72B6\u6001\u624D\u5141\u8BB8\u5408\u540C\u540C\u6B65\u3002\u82E5\u5F53\u524D\u72B6\u6001\u4E0E\u64CD\u4F5C\u4E0D\u5339\u914D\u5219\u63D0\u793A&quot;\u5408\u540C\u72B6\u6001\u4E0D\u5141\u8BB8\u6B64\u64CD\u4F5C&quot;\u3002\u786E\u4FDD\u64CD\u4F5C\u5408\u6CD5\u6027\uFF0C\u907F\u514D\u5728\u9519\u8BEF\u72B6\u6001\u4E0B\u6267\u884C\u64CD\u4F5C\u5BFC\u81F4\u6570\u636E\u6DF7\u4E71</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> ELECTRONIC_CONTRACT_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5408\u540C\u7F16\u53F7,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>CONTRACT_NAME</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5408\u540C\u540D\u79F0,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         CONTRACT_STATUS </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7B7E\u7F72\u72B6\u6001,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         EXCEPTION_TYPE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5F02\u5E38\u7C7B\u578B,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         EXCEPTION_INFO </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5F02\u5E38\u4FE1\u606F</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> ELECTRONIC_CONTRACT</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> EXCEPTION_TYPE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NOT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> CONTRACT_STATUS </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NOT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>signing_timeout</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>signing_failed</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>                                </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>filing_failed</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>callback_failed</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>                                </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>pending_sign</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>completed</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>filed</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>);</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95192\uFF1A\u91CD\u65B0\u5F52\u6863\u5931\u8D25</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u8C03\u7528 fddContractFiling \u63A5\u53E3\u91CD\u65B0\u5F52\u6863\u65F6\uFF0C\u6CD5\u5927\u5927\u63A5\u53E3\u8C03\u7528\u5F02\u5E38</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u540E\u7AEF\u8C03\u7528\u6CD5\u5927\u5927\u5F52\u6863\u63A5\u53E3 fddContractFiling\uFF0C\u82E5\u6CD5\u5927\u5927\u670D\u52A1\u4E0D\u53EF\u7528\u3001\u7F51\u7EDC\u5F02\u5E38\u3001\u5F52\u6863\u53C2\u6570\u9519\u8BEF\u3001\u5408\u540C\u5DF2\u5F52\u6863\u7B49\u5219\u63A5\u53E3\u8FD4\u56DE\u5931\u8D25\uFF0C\u63D0\u793A&quot;\u91CD\u65B0\u5F52\u6863\u5931\u8D25&quot;\u3002\u9700\u68C0\u67E5\u6CD5\u5927\u5927\u670D\u52A1\u8FDE\u901A\u6027\u3001\u5408\u540C\u5F52\u6863\u53C2\u6570\u3001\u6CD5\u5927\u5927\u670D\u52A1\u65E5\u5FD7</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> ELECTRONIC_CONTRACT_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5408\u540C\u7F16\u53F7,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>CONTRACT_NAME</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5408\u540C\u540D\u79F0,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         CONTRACT_STATUS </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7B7E\u7F72\u72B6\u6001,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         EXCEPTION_TYPE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5F02\u5E38\u7C7B\u578B,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         EXCEPTION_INFO </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5F02\u5E38\u4FE1\u606F,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         TO_CHAR(LAST_UPDATE_DATE,</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>YYYY-MM-DD HH24:MI:SS</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u6700\u540E\u66F4\u65B0\u65F6\u95F4</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> ELECTRONIC_CONTRACT</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> EXCEPTION_TYPE </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>filing_failed</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ORDER BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> LAST_UPDATE_DATE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>DESC</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95193\uFF1A\u91CD\u53D1\u77ED\u4FE1\u5931\u8D25</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u8C03\u7528 noticeDistributor/rePush \u63A5\u53E3\u91CD\u53D1\u7B7E\u7F72\u77ED\u4FE1\u65F6\uFF0C\u77ED\u4FE1\u5E73\u53F0\u63A5\u53E3\u5F02\u5E38</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u540E\u7AEF\u8C03\u7528\u77ED\u4FE1\u5E73\u53F0\u63A5\u53E3 noticeDistributor/rePush\uFF0C\u82E5\u77ED\u4FE1\u5E73\u53F0\u670D\u52A1\u4E0D\u53EF\u7528\u3001\u7F51\u7EDC\u5F02\u5E38\u3001\u7ECF\u9500\u5546\u624B\u673A\u53F7\u7F3A\u5931\u6216\u9519\u8BEF\u3001\u77ED\u4FE1\u6A21\u677F\u914D\u7F6E\u9519\u8BEF\u7B49\u5219\u63A5\u53E3\u8FD4\u56DE\u5931\u8D25\uFF0C\u63D0\u793A&quot;\u91CD\u53D1\u77ED\u4FE1\u5931\u8D25&quot;\u3002\u9700\u68C0\u67E5\u77ED\u4FE1\u5E73\u53F0\u670D\u52A1\u72B6\u6001\u3001\u7ECF\u9500\u5546\u624B\u673A\u53F7\u3001\u77ED\u4FE1\u6A21\u677F\u914D\u7F6E</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> ELECTRONIC_CONTRACT_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5408\u540C\u7F16\u53F7,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>CONTRACT_NAME</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5408\u540C\u540D\u79F0,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         AGENT_NAME </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7ECF\u9500\u5546,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         CONTRACT_STATUS </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7B7E\u7F72\u72B6\u6001,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         EXCEPTION_TYPE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5F02\u5E38\u7C7B\u578B,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         EXCEPTION_INFO </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5F02\u5E38\u4FE1\u606F</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> ELECTRONIC_CONTRACT</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> EXCEPTION_TYPE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>signing_timeout</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>signing_failed</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ORDER BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> LAST_UPDATE_DATE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>DESC</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95194\uFF1A\u5408\u540C\u540C\u6B65\u5931\u8D25</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u8C03\u7528 callback/retry/update-signature \u63A5\u53E3\u5408\u540C\u540C\u6B65\u65F6\uFF0C\u56DE\u8C03\u63A5\u53E3\u5F02\u5E38</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u540E\u7AEF\u8C03\u7528\u56DE\u8C03\u63A5\u53E3 callback/retry/update-signature\uFF0C\u82E5\u5916\u90E8\u7CFB\u7EDF\uFF08\u6CD5\u5927\u5927/OA\uFF09\u4E0D\u53EF\u7528\u3001\u7F51\u7EDC\u5F02\u5E38\u3001unifyContractCode \u65E0\u6548\u3001\u7B7E\u7F72\u72B6\u6001\u4E0D\u5339\u914D\u7B49\u5219\u63A5\u53E3\u8FD4\u56DE\u5931\u8D25\uFF0C\u63D0\u793A&quot;\u5408\u540C\u540C\u6B65\u5931\u8D25&quot;\u3002\u9700\u68C0\u67E5\u5916\u90E8\u7CFB\u7EDF\u72B6\u6001\u3001unifyContractCode \u6709\u6548\u6027\u3001\u5916\u90E8\u7CFB\u7EDF\u7B7E\u7F72\u72B6\u6001</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> ELECTRONIC_CONTRACT_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5408\u540C\u7F16\u53F7,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         UNIFY_CONTRACT_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7EDF\u4E00\u5408\u540C\u7F16\u7801,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>CONTRACT_NAME</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5408\u540C\u540D\u79F0,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         CONTRACT_STATUS </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7B7E\u7F72\u72B6\u6001,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         EXCEPTION_TYPE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5F02\u5E38\u7C7B\u578B,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         EXCEPTION_INFO </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5F02\u5E38\u4FE1\u606F</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> ELECTRONIC_CONTRACT</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> EXCEPTION_TYPE </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>callback_failed</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ORDER BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> LAST_UPDATE_DATE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>DESC</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95195\uFF1A\u5408\u540C\u4E0D\u5B58\u5728</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u6267\u884C\u5F02\u5E38\u5904\u7406\u64CD\u4F5C\u65F6\uFF0C\u4F20\u5165\u7684 electronicContractId \u6216 unifyContractCode \u5728\u6570\u636E\u5E93\u4E2D\u4E0D\u5B58\u5728</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u540E\u7AEF\u6821\u9A8C\u5408\u540C\u5B58\u5728\u6027\uFF0C\u6839\u636E\u4F20\u5165\u7684 electronicContractId \u6216 unifyContractCode \u67E5\u8BE2 ELECTRONIC_CONTRACT \u8868\uFF0C\u82E5\u4E0D\u5B58\u5728\u5219\u63D0\u793A&quot;\u5408\u540C\u4E0D\u5B58\u5728&quot;\u3002\u5E38\u89C1\u6839\u56E0\u5305\u62EC\uFF1A\u5408\u540CID\u88AB\u5220\u9664\u3001\u5408\u540CID\u4F20\u53C2\u9519\u8BEF\u3001\u5408\u540C\u7F16\u7801\u88AB\u4FEE\u6539\u7B49</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> ELECTRONIC_CONTRACT_ID </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5408\u540CID,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         ELECTRONIC_CONTRACT_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5408\u540C\u7F16\u53F7,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         UNIFY_CONTRACT_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7EDF\u4E00\u5408\u540C\u7F16\u7801,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>CONTRACT_NAME</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5408\u540C\u540D\u79F0,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         CONTRACT_STATUS </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7B7E\u7F72\u72B6\u6001</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> ELECTRONIC_CONTRACT</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> ELECTRONIC_CONTRACT_ID </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>     </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>OR</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> UNIFY_CONTRACT_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95196\uFF1A\u7F51\u7EDC\u5F02\u5E38/\u63A5\u53E3\u8D85\u65F6</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u4EFB\u610F\u63A5\u53E3\u8C03\u7528\u65F6\uFF0C\u7F51\u7EDC\u4E2D\u65AD\u6216\u63A5\u53E3\u54CD\u5E94\u8D85\u8FC7 axios timeout \u914D\u7F6E</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u524D\u7AEF axios \u8BF7\u6C42\u672A\u6536\u5230\u54CD\u5E94\u6216\u54CD\u5E94\u8D85\u65F6\uFF0C\u89E6\u53D1 catch \u56DE\u8C03\u7EDF\u4E00\u63D0\u793A&quot;\u8BF7\u6C42\u5931\u8D25&quot;\u3002\u5E38\u89C1\u6839\u56E0\uFF1A\u7F51\u7EDC\u4E2D\u65AD\u3001mbo-business \u670D\u52A1\u5047\u6B7B\u3001\u6570\u636E\u5E93\u6162\u67E5\u8BE2\u3001\u6CD5\u5927\u5927/\u77ED\u4FE1\u5E73\u53F0\u54CD\u5E94\u6162\u7B49\u3002\u9700\u68C0\u67E5\u7F51\u7EDC\u8FDE\u901A\u6027\u3001\u540E\u7AEF\u670D\u52A1\u8D1F\u8F7D\u3001\u5916\u90E8\u7CFB\u7EDF\u72B6\u6001</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> ELECTRONIC_CONTRACT_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5408\u540C\u7F16\u53F7, </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>CONTRACT_NAME</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5408\u540C\u540D\u79F0,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         CONTRACT_STATUS </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7B7E\u7F72\u72B6\u6001,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         TO_CHAR(LAST_UPDATE_DATE,</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>YYYY-MM-DD HH24:MI:SS</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u6700\u540E\u66F4\u65B0\u65F6\u95F4</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> ELECTRONIC_CONTRACT</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> LAST_UPDATE_DATE </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>SYSDATE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>-</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>1</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ORDER BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> LAST_UPDATE_DATE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>DESC</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95197\uFF1A\u6743\u9650\u4E0D\u8DB3</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u70B9\u51FB\u91CD\u65B0\u5F52\u6863\u3001\u4FEE\u6539\u5408\u540C\u72B6\u6001\u3001\u91CD\u53D1\u77ED\u4FE1\u3001\u5408\u540C\u540C\u6B65\u7B49\u6309\u94AE\u65F6\uFF0C\u5F53\u524D\u7528\u6237\u65E0\u5BF9\u5E94 permissionList \u6743\u9650\u7801</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u524D\u7AEF Button \u7EC4\u4EF6\u901A\u8FC7 permissionList \u914D\u7F6E\u6743\u9650\u7801\uFF0CHZERO \u6846\u67B6\u6821\u9A8C\u5F53\u524D\u7528\u6237\u89D2\u8272\u662F\u5426\u5305\u542B\u8BE5\u6743\u9650\u7801\uFF0C\u672A\u5305\u542B\u5219\u6309\u94AE\u4E0D\u53EF\u89C1\u6216\u7981\u7528\u3002\u82E5\u5F3A\u5236\u8C03\u7528\u63A5\u53E3\uFF0C\u540E\u7AEF\u4E5F\u4F1A\u6821\u9A8C\u6743\u9650\u8FD4\u56DE403\u3002\u9700\u8054\u7CFB\u7BA1\u7406\u5458\u914D\u7F6E\u5BF9\u5E94\u89D2\u8272\u6743\u9650</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> U.USER_NAME </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7528\u6237\u540D, R.ROLE_NAME </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u89D2\u8272\u540D, P.PERMISSION_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u6743\u9650\u7801</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> SYS_USER U</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>LEFT JOIN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> SYS_USER_ROLE UR </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ON</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> U.USER_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> UR.USER_ID</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>LEFT JOIN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> SYS_ROLE R </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ON</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> UR.ROLE_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> R.ROLE_ID</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>LEFT JOIN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> SYS_ROLE_PERMISSION RP </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ON</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> R.ROLE_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> RP.ROLE_ID</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>LEFT JOIN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> SYS_PERMISSION P </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ON</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> RP.PERMISSION_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> P.PERMISSION_ID</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> P.PERMISSION_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>LIKE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>%contract_exception%</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ORDER BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> U.USER_NAME;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95198\uFF1A\u6CD5\u5927\u5927\u670D\u52A1\u4E0D\u53EF\u7528</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u8C03\u7528\u91CD\u65B0\u5F52\u6863\u3001\u5408\u540C\u540C\u6B65\u7B49\u6D89\u53CA\u6CD5\u5927\u5927\u7684\u63A5\u53E3\u65F6\uFF0C\u6CD5\u5927\u5927\u670D\u52A1\u5F02\u5E38</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u540E\u7AEF\u8C03\u7528\u6CD5\u5927\u5927\u63A5\u53E3\uFF0C\u82E5\u6CD5\u5927\u5927\u670D\u52A1\u4E0D\u53EF\u7528\u3001\u7F51\u7EDC\u5F02\u5E38\u3001\u63A5\u53E3\u8D85\u65F6\u7B49\u5219\u63A5\u53E3\u8FD4\u56DE\u5931\u8D25\u3002\u9700\u68C0\u67E5\u6CD5\u5927\u5927\u670D\u52A1\u8FD0\u884C\u72B6\u6001\u3001\u7F51\u7EDC\u8FDE\u901A\u6027\u3001\u6CD5\u5927\u5927\u63A5\u53E3\u914D\u7F6E</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> ELECTRONIC_CONTRACT_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5408\u540C\u7F16\u53F7, </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>CONTRACT_NAME</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5408\u540C\u540D\u79F0,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         CONTRACT_STATUS </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7B7E\u7F72\u72B6\u6001, EXCEPTION_TYPE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5F02\u5E38\u7C7B\u578B,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         EXCEPTION_INFO </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5F02\u5E38\u4FE1\u606F,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         TO_CHAR(LAST_UPDATE_DATE,</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>YYYY-MM-DD HH24:MI:SS</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u6700\u540E\u66F4\u65B0\u65F6\u95F4</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> ELECTRONIC_CONTRACT</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> EXCEPTION_TYPE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>filing_failed</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>,</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>callback_failed</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> LAST_UPDATE_DATE </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>SYSDATE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>-</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>7</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ORDER BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> LAST_UPDATE_DATE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>DESC</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95199\uFF1A\u77ED\u4FE1\u5E73\u53F0\u4E0D\u53EF\u7528</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u8C03\u7528\u91CD\u53D1\u77ED\u4FE1\u63A5\u53E3\u65F6\uFF0C\u77ED\u4FE1\u5E73\u53F0\u670D\u52A1\u5F02\u5E38</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u540E\u7AEF\u8C03\u7528\u77ED\u4FE1\u5E73\u53F0\u63A5\u53E3\uFF0C\u82E5\u77ED\u4FE1\u5E73\u53F0\u670D\u52A1\u4E0D\u53EF\u7528\u3001\u7F51\u7EDC\u5F02\u5E38\u3001\u63A5\u53E3\u8D85\u65F6\u7B49\u5219\u63A5\u53E3\u8FD4\u56DE\u5931\u8D25\u3002\u9700\u68C0\u67E5\u77ED\u4FE1\u5E73\u53F0\u670D\u52A1\u72B6\u6001\u3001\u7F51\u7EDC\u8FDE\u901A\u6027\u3001\u77ED\u4FE1\u5E73\u53F0\u914D\u7F6E</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> ELECTRONIC_CONTRACT_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5408\u540C\u7F16\u53F7, AGENT_NAME </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7ECF\u9500\u5546,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         CONTRACT_STATUS </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7B7E\u7F72\u72B6\u6001, EXCEPTION_TYPE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5F02\u5E38\u7C7B\u578B,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         EXCEPTION_INFO </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5F02\u5E38\u4FE1\u606F</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> ELECTRONIC_CONTRACT</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> EXCEPTION_TYPE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>signing_timeout</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>,</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>signing_failed</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> LAST_UPDATE_DATE </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>SYSDATE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>-</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>7</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ORDER BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> LAST_UPDATE_DATE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>DESC</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u951910\uFF1A\u503C\u96C6\u6570\u636E\u4E0D\u663E\u793A</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u67E5\u8BE2\u6761\u4EF6\u6216\u5217\u8868\u4E2D\u5F02\u5E38\u7C7B\u578B\u7B49\u4E0B\u62C9\u9009\u9879\u4E3A\u7A7A</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u524D\u7AEF\u901A\u8FC7 lookupCode \u67E5\u8BE2\u503C\u96C6 MBO.CONTRACT_EXCEPTION_TYPE\u3001MBO.CONTRACT_STATUS \u7B49\uFF0C\u503C\u96C6\u672A\u914D\u7F6E\u6216\u672A\u542F\u7528\u5219\u4E0B\u62C9\u9009\u9879\u4E3A\u7A7A\u3002\u9700\u5728\u503C\u96C6\u7BA1\u7406\u9875\u9762\u914D\u7F6E\u5BF9\u5E94\u503C\u96C6</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> LOOKUP_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u503C\u96C6\u7F16\u7801, LOOKUP_VALUE_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u503C\u7F16\u7801,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         LOOKUP_VALUE_NAME </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u503C\u540D\u79F0, ENABLE_FLAG </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u542F\u7528\u6807\u8BB0</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> SYS_LOOKUP_VALUE</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> LOOKUP_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>MBO.CONTRACT_EXCEPTION_TYPE</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>,</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>MBO.CONTRACT_STATUS</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> ENABLE_FLAG </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>N</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ORDER BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> LOOKUP_CODE;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u951911\uFF1A\u7ECF\u9500\u5546\u624B\u673A\u53F7\u7F3A\u5931</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u91CD\u53D1\u7B7E\u7F72\u77ED\u4FE1\u65F6\uFF0C\u7ECF\u9500\u5546\u624B\u673A\u53F7\u4E3A\u7A7A\u6216\u683C\u5F0F\u9519\u8BEF</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u540E\u7AEF\u6821\u9A8C\u7ECF\u9500\u5546\u624B\u673A\u53F7\u975E\u7A7A\u4E14\u683C\u5F0F\u6B63\u786E\uFF0C\u82E5\u624B\u673A\u53F7\u4E3A\u7A7A\u6216\u683C\u5F0F\u9519\u8BEF\u5219\u8FD4\u56DE\u4E1A\u52A1\u5F02\u5E38\u3002\u9700\u68C0\u67E5\u7ECF\u9500\u5546\u6863\u6848\u4E2D\u7684\u624B\u673A\u53F7\u5B57\u6BB5</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> C.ELECTRONIC_CONTRACT_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5408\u540C\u7F16\u53F7, C.AGENT_NAME </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7ECF\u9500\u5546,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         D.MOBILE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u624B\u673A\u53F7, D.CONTACT_PHONE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u8054\u7CFB\u7535\u8BDD</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> ELECTRONIC_CONTRACT C</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>LEFT JOIN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> DISTRIBUTOR D </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ON</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> C.AGENT_CODE </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> D.DISTRIBUTOR_CODE</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> C.CONTRACT_STATUS </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>signing_timeout</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>,</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>signing_failed</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (D.MOBILE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>OR</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> D.MOBILE </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;&#39;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>OR</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> REGEXP_LIKE(D.MOBILE, </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>^[^1][^3-9]</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> FALSE);</span></span>
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
                createVNode("td", null, "\u5408\u540C\u72B6\u6001\u4E0D\u5141\u8BB8\u6B64\u64CD\u4F5C"),
                createVNode("td", null, "\u72B6\u6001\u64CD\u4F5C"),
                createVNode("td", null, "\u5F53\u524D\u72B6\u6001\u4E0D\u53EF\u6267\u884C\u8BE5\u64CD\u4F5C\uFF0C\u786E\u8BA4\u5408\u540C\u5F53\u524D\u72B6\u6001\u662F\u5426\u6B63\u786E"),
                createVNode("td", null, "error"),
                createVNode("td", null, "\u540E\u7AEF\u6821\u9A8C\u5408\u540C\u72B6\u6001\u4E0E\u64CD\u4F5C\u5339\u914D\u6027")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u91CD\u65B0\u5F52\u6863\u5931\u8D25"),
                createVNode("td", null, "\u91CD\u65B0\u5F52\u6863"),
                createVNode("td", null, "\u6CD5\u5927\u5927\u63A5\u53E3\u8C03\u7528\u5F02\u5E38\uFF0C\u68C0\u67E5\u6CD5\u5927\u5927\u670D\u52A1\u8FDE\u901A\u6027\u540E\u91CD\u8BD5"),
                createVNode("td", null, "error"),
                createVNode("td", null, "fddContractFiling \u63A5\u53E3\u8FD4\u56DE\u5931\u8D25")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u91CD\u53D1\u77ED\u4FE1\u5931\u8D25"),
                createVNode("td", null, "\u91CD\u53D1\u7B7E\u7F72\u77ED\u4FE1"),
                createVNode("td", null, "\u77ED\u4FE1\u5E73\u53F0\u63A5\u53E3\u5F02\u5E38\uFF0C\u68C0\u67E5\u77ED\u4FE1\u5E73\u53F0\u670D\u52A1\u72B6\u6001"),
                createVNode("td", null, "error"),
                createVNode("td", null, "noticeDistributor/rePush \u63A5\u53E3\u8FD4\u56DE\u5931\u8D25")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5408\u540C\u540C\u6B65\u5931\u8D25"),
                createVNode("td", null, "\u5408\u540C\u540C\u6B65"),
                createVNode("td", null, "\u56DE\u8C03\u63A5\u53E3\u5F02\u5E38\uFF0C\u68C0\u67E5\u5916\u90E8\u7CFB\u7EDF\u72B6\u6001\u540E\u91CD\u8BD5"),
                createVNode("td", null, "error"),
                createVNode("td", null, "callback/retry/update-signature \u63A5\u53E3\u8FD4\u56DE\u5931\u8D25")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5408\u540C\u4E0D\u5B58\u5728"),
                createVNode("td", null, "\u5904\u7406\u65F6"),
                createVNode("td", null, "\u5408\u540CID\u65E0\u6548\uFF0C\u68C0\u67E5\u5408\u540CID"),
                createVNode("td", null, "error"),
                createVNode("td", null, "\u540E\u7AEF\u6821\u9A8C\u5408\u540C\u5B58\u5728\u6027")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7F51\u7EDC\u5F02\u5E38/\u63A5\u53E3\u8D85\u65F6"),
                createVNode("td", null, "\u4EFB\u610F\u63A5\u53E3\u8C03\u7528"),
                createVNode("td", null, "\u7F51\u7EDC\u4E2D\u65AD\u6216\u63A5\u53E3\u54CD\u5E94\u8D85\u65F6\uFF0C\u68C0\u67E5\u7F51\u7EDC\u53CA\u540E\u7AEF\u8D85\u65F6\u914D\u7F6E"),
                createVNode("td", null, "error"),
                createVNode("td", null, "axios catch \u6216 timeout")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6743\u9650\u4E0D\u8DB3"),
                createVNode("td", null, "\u70B9\u51FB\u64CD\u4F5C\u6309\u94AE"),
                createVNode("td", null, "\u5F53\u524D\u7528\u6237\u65E0\u5BF9\u5E94\u6309\u94AE\u6743\u9650\u7801\uFF0C\u8054\u7CFB\u7BA1\u7406\u5458\u6388\u6743"),
                createVNode("td", null, "error"),
                createVNode("td", null, "permissionList \u6821\u9A8C\u672A\u901A\u8FC7")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6CD5\u5927\u5927\u670D\u52A1\u4E0D\u53EF\u7528"),
                createVNode("td", null, "\u91CD\u65B0\u5F52\u6863/\u5408\u540C\u540C\u6B65"),
                createVNode("td", null, "\u6CD5\u5927\u5927\u670D\u52A1\u5F02\u5E38\uFF0C\u68C0\u67E5\u6CD5\u5927\u5927\u670D\u52A1\u72B6\u6001"),
                createVNode("td", null, "error"),
                createVNode("td", null, "\u6CD5\u5927\u5927\u63A5\u53E3\u8FD4\u56DE\u5931\u8D25")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u77ED\u4FE1\u5E73\u53F0\u4E0D\u53EF\u7528"),
                createVNode("td", null, "\u91CD\u53D1\u77ED\u4FE1"),
                createVNode("td", null, "\u77ED\u4FE1\u5E73\u53F0\u670D\u52A1\u5F02\u5E38\uFF0C\u68C0\u67E5\u77ED\u4FE1\u5E73\u53F0\u72B6\u6001"),
                createVNode("td", null, "error"),
                createVNode("td", null, "\u77ED\u4FE1\u5E73\u53F0\u63A5\u53E3\u8FD4\u56DE\u5931\u8D25")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u503C\u96C6\u6570\u636E\u4E0D\u663E\u793A"),
                createVNode("td", null, "\u4E0B\u62C9\u9009\u9879"),
                createVNode("td", null, "\u503C\u96C6 MBO.CONTRACT_EXCEPTION_TYPE \u7B49\u672A\u914D\u7F6E\uFF0C\u68C0\u67E5\u503C\u96C6\u914D\u7F6E"),
                createVNode("td", null, "warning"),
                createVNode("td", null, "lookupCode \u67E5\u8BE2\u8FD4\u56DE\u7A7A")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7ECF\u9500\u5546\u624B\u673A\u53F7\u7F3A\u5931"),
                createVNode("td", null, "\u91CD\u53D1\u77ED\u4FE1"),
                createVNode("td", null, "\u7ECF\u9500\u5546\u624B\u673A\u53F7\u4E3A\u7A7A\u6216\u683C\u5F0F\u9519\u8BEF\uFF0C\u68C0\u67E5\u7ECF\u9500\u5546\u6863\u6848\u624B\u673A\u53F7"),
                createVNode("td", null, "error"),
                createVNode("td", null, "\u540E\u7AEF\u6821\u9A8C\u624B\u673A\u53F7\u975E\u7A7A")
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95191\uFF1A\u5408\u540C\u72B6\u6001\u4E0D\u5141\u8BB8\u6B64\u64CD\u4F5C"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u6267\u884C\u91CD\u65B0\u5F52\u6863\u3001\u4FEE\u6539\u5408\u540C\u72B6\u6001\u3001\u91CD\u53D1\u7B7E\u7F72\u77ED\u4FE1\u3001\u5408\u540C\u540C\u6B65\u7B49\u64CD\u4F5C\u65F6\uFF0C\u5F53\u524D\u5408\u540C\u72B6\u6001\u4E0D\u5141\u8BB8\u8BE5\u64CD\u4F5C")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode('\uFF1A\u540E\u7AEF\u6821\u9A8C\u5408\u540C\u72B6\u6001\u4E0E\u64CD\u4F5C\u5339\u914D\u6027\uFF0C\u5982\u5F52\u6863\u5931\u8D25\u72B6\u6001\u624D\u5141\u8BB8\u91CD\u65B0\u5F52\u6863\u3001\u7B7E\u7F72\u8D85\u65F6/\u7B7E\u7F72\u5931\u8D25\u72B6\u6001\u624D\u5141\u8BB8\u91CD\u53D1\u77ED\u4FE1\u3001\u56DE\u8C03\u5931\u8D25\u72B6\u6001\u624D\u5141\u8BB8\u5408\u540C\u540C\u6B65\u3002\u82E5\u5F53\u524D\u72B6\u6001\u4E0E\u64CD\u4F5C\u4E0D\u5339\u914D\u5219\u63D0\u793A"\u5408\u540C\u72B6\u6001\u4E0D\u5141\u8BB8\u6B64\u64CD\u4F5C"\u3002\u786E\u4FDD\u64CD\u4F5C\u5408\u6CD5\u6027\uFF0C\u907F\u514D\u5728\u9519\u8BEF\u72B6\u6001\u4E0B\u6267\u884C\u64CD\u4F5C\u5BFC\u81F4\u6570\u636E\u6DF7\u4E71')
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " ELECTRONIC_CONTRACT_CODE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5408\u540C\u7F16\u53F7,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "CONTRACT_NAME"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5408\u540C\u540D\u79F0,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         CONTRACT_STATUS "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7B7E\u7F72\u72B6\u6001,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         EXCEPTION_TYPE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5F02\u5E38\u7C7B\u578B,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         EXCEPTION_INFO "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5F02\u5E38\u4FE1\u606F")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " ELECTRONIC_CONTRACT")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " EXCEPTION_TYPE "),
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " CONTRACT_STATUS "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NOT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IN"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " ("),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "signing_timeout"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ", "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "signing_failed"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "                                "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "filing_failed"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ", "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "callback_failed"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "                                "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "pending_sign"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ", "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "completed"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ", "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "filed"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ");")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95192\uFF1A\u91CD\u65B0\u5F52\u6863\u5931\u8D25"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u8C03\u7528 fddContractFiling \u63A5\u53E3\u91CD\u65B0\u5F52\u6863\u65F6\uFF0C\u6CD5\u5927\u5927\u63A5\u53E3\u8C03\u7528\u5F02\u5E38")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode('\uFF1A\u540E\u7AEF\u8C03\u7528\u6CD5\u5927\u5927\u5F52\u6863\u63A5\u53E3 fddContractFiling\uFF0C\u82E5\u6CD5\u5927\u5927\u670D\u52A1\u4E0D\u53EF\u7528\u3001\u7F51\u7EDC\u5F02\u5E38\u3001\u5F52\u6863\u53C2\u6570\u9519\u8BEF\u3001\u5408\u540C\u5DF2\u5F52\u6863\u7B49\u5219\u63A5\u53E3\u8FD4\u56DE\u5931\u8D25\uFF0C\u63D0\u793A"\u91CD\u65B0\u5F52\u6863\u5931\u8D25"\u3002\u9700\u68C0\u67E5\u6CD5\u5927\u5927\u670D\u52A1\u8FDE\u901A\u6027\u3001\u5408\u540C\u5F52\u6863\u53C2\u6570\u3001\u6CD5\u5927\u5927\u670D\u52A1\u65E5\u5FD7')
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " ELECTRONIC_CONTRACT_CODE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5408\u540C\u7F16\u53F7,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "CONTRACT_NAME"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5408\u540C\u540D\u79F0,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         CONTRACT_STATUS "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7B7E\u7F72\u72B6\u6001,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         EXCEPTION_TYPE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5F02\u5E38\u7C7B\u578B,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         EXCEPTION_INFO "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5F02\u5E38\u4FE1\u606F,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         TO_CHAR(LAST_UPDATE_DATE,"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "YYYY-MM-DD HH24:MI:SS"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u6700\u540E\u66F4\u65B0\u65F6\u95F4")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " ELECTRONIC_CONTRACT")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " EXCEPTION_TYPE "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "filing_failed"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ORDER BY"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " LAST_UPDATE_DATE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "DESC"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95193\uFF1A\u91CD\u53D1\u77ED\u4FE1\u5931\u8D25"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u8C03\u7528 noticeDistributor/rePush \u63A5\u53E3\u91CD\u53D1\u7B7E\u7F72\u77ED\u4FE1\u65F6\uFF0C\u77ED\u4FE1\u5E73\u53F0\u63A5\u53E3\u5F02\u5E38")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode('\uFF1A\u540E\u7AEF\u8C03\u7528\u77ED\u4FE1\u5E73\u53F0\u63A5\u53E3 noticeDistributor/rePush\uFF0C\u82E5\u77ED\u4FE1\u5E73\u53F0\u670D\u52A1\u4E0D\u53EF\u7528\u3001\u7F51\u7EDC\u5F02\u5E38\u3001\u7ECF\u9500\u5546\u624B\u673A\u53F7\u7F3A\u5931\u6216\u9519\u8BEF\u3001\u77ED\u4FE1\u6A21\u677F\u914D\u7F6E\u9519\u8BEF\u7B49\u5219\u63A5\u53E3\u8FD4\u56DE\u5931\u8D25\uFF0C\u63D0\u793A"\u91CD\u53D1\u77ED\u4FE1\u5931\u8D25"\u3002\u9700\u68C0\u67E5\u77ED\u4FE1\u5E73\u53F0\u670D\u52A1\u72B6\u6001\u3001\u7ECF\u9500\u5546\u624B\u673A\u53F7\u3001\u77ED\u4FE1\u6A21\u677F\u914D\u7F6E')
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " ELECTRONIC_CONTRACT_CODE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5408\u540C\u7F16\u53F7,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "CONTRACT_NAME"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5408\u540C\u540D\u79F0,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         AGENT_NAME "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7ECF\u9500\u5546,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         CONTRACT_STATUS "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7B7E\u7F72\u72B6\u6001,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         EXCEPTION_TYPE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5F02\u5E38\u7C7B\u578B,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         EXCEPTION_INFO "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5F02\u5E38\u4FE1\u606F")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " ELECTRONIC_CONTRACT")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " EXCEPTION_TYPE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IN"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " ("),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "signing_timeout"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ", "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "signing_failed"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ")")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ORDER BY"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " LAST_UPDATE_DATE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "DESC"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95194\uFF1A\u5408\u540C\u540C\u6B65\u5931\u8D25"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u8C03\u7528 callback/retry/update-signature \u63A5\u53E3\u5408\u540C\u540C\u6B65\u65F6\uFF0C\u56DE\u8C03\u63A5\u53E3\u5F02\u5E38")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode('\uFF1A\u540E\u7AEF\u8C03\u7528\u56DE\u8C03\u63A5\u53E3 callback/retry/update-signature\uFF0C\u82E5\u5916\u90E8\u7CFB\u7EDF\uFF08\u6CD5\u5927\u5927/OA\uFF09\u4E0D\u53EF\u7528\u3001\u7F51\u7EDC\u5F02\u5E38\u3001unifyContractCode \u65E0\u6548\u3001\u7B7E\u7F72\u72B6\u6001\u4E0D\u5339\u914D\u7B49\u5219\u63A5\u53E3\u8FD4\u56DE\u5931\u8D25\uFF0C\u63D0\u793A"\u5408\u540C\u540C\u6B65\u5931\u8D25"\u3002\u9700\u68C0\u67E5\u5916\u90E8\u7CFB\u7EDF\u72B6\u6001\u3001unifyContractCode \u6709\u6548\u6027\u3001\u5916\u90E8\u7CFB\u7EDF\u7B7E\u7F72\u72B6\u6001')
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " ELECTRONIC_CONTRACT_CODE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5408\u540C\u7F16\u53F7,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         UNIFY_CONTRACT_CODE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7EDF\u4E00\u5408\u540C\u7F16\u7801,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "CONTRACT_NAME"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5408\u540C\u540D\u79F0,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         CONTRACT_STATUS "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7B7E\u7F72\u72B6\u6001,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         EXCEPTION_TYPE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5F02\u5E38\u7C7B\u578B,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         EXCEPTION_INFO "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5F02\u5E38\u4FE1\u606F")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " ELECTRONIC_CONTRACT")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " EXCEPTION_TYPE "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "callback_failed"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ORDER BY"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " LAST_UPDATE_DATE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "DESC"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95195\uFF1A\u5408\u540C\u4E0D\u5B58\u5728"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u6267\u884C\u5F02\u5E38\u5904\u7406\u64CD\u4F5C\u65F6\uFF0C\u4F20\u5165\u7684 electronicContractId \u6216 unifyContractCode \u5728\u6570\u636E\u5E93\u4E2D\u4E0D\u5B58\u5728")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode('\uFF1A\u540E\u7AEF\u6821\u9A8C\u5408\u540C\u5B58\u5728\u6027\uFF0C\u6839\u636E\u4F20\u5165\u7684 electronicContractId \u6216 unifyContractCode \u67E5\u8BE2 ELECTRONIC_CONTRACT \u8868\uFF0C\u82E5\u4E0D\u5B58\u5728\u5219\u63D0\u793A"\u5408\u540C\u4E0D\u5B58\u5728"\u3002\u5E38\u89C1\u6839\u56E0\u5305\u62EC\uFF1A\u5408\u540CID\u88AB\u5220\u9664\u3001\u5408\u540CID\u4F20\u53C2\u9519\u8BEF\u3001\u5408\u540C\u7F16\u7801\u88AB\u4FEE\u6539\u7B49')
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " ELECTRONIC_CONTRACT_ID "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5408\u540CID,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         ELECTRONIC_CONTRACT_CODE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5408\u540C\u7F16\u53F7,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         UNIFY_CONTRACT_CODE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7EDF\u4E00\u5408\u540C\u7F16\u7801,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "CONTRACT_NAME"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5408\u540C\u540D\u79F0,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         CONTRACT_STATUS "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7B7E\u7F72\u72B6\u6001")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " ELECTRONIC_CONTRACT")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " ELECTRONIC_CONTRACT_ID "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NULL")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "     "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "OR"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " UNIFY_CONTRACT_CODE "),
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
          createVNode("h4", null, "\u62A5\u95196\uFF1A\u7F51\u7EDC\u5F02\u5E38/\u63A5\u53E3\u8D85\u65F6"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u4EFB\u610F\u63A5\u53E3\u8C03\u7528\u65F6\uFF0C\u7F51\u7EDC\u4E2D\u65AD\u6216\u63A5\u53E3\u54CD\u5E94\u8D85\u8FC7 axios timeout \u914D\u7F6E")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode('\uFF1A\u524D\u7AEF axios \u8BF7\u6C42\u672A\u6536\u5230\u54CD\u5E94\u6216\u54CD\u5E94\u8D85\u65F6\uFF0C\u89E6\u53D1 catch \u56DE\u8C03\u7EDF\u4E00\u63D0\u793A"\u8BF7\u6C42\u5931\u8D25"\u3002\u5E38\u89C1\u6839\u56E0\uFF1A\u7F51\u7EDC\u4E2D\u65AD\u3001mbo-business \u670D\u52A1\u5047\u6B7B\u3001\u6570\u636E\u5E93\u6162\u67E5\u8BE2\u3001\u6CD5\u5927\u5927/\u77ED\u4FE1\u5E73\u53F0\u54CD\u5E94\u6162\u7B49\u3002\u9700\u68C0\u67E5\u7F51\u7EDC\u8FDE\u901A\u6027\u3001\u540E\u7AEF\u670D\u52A1\u8D1F\u8F7D\u3001\u5916\u90E8\u7CFB\u7EDF\u72B6\u6001')
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " ELECTRONIC_CONTRACT_CODE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5408\u540C\u7F16\u53F7, "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "CONTRACT_NAME"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5408\u540C\u540D\u79F0,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         CONTRACT_STATUS "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7B7E\u7F72\u72B6\u6001,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         TO_CHAR(LAST_UPDATE_DATE,"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "YYYY-MM-DD HH24:MI:SS"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u6700\u540E\u66F4\u65B0\u65F6\u95F4")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " ELECTRONIC_CONTRACT")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " LAST_UPDATE_DATE "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, ">="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#C792EA" } }, "SYSDATE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "-"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "1")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ORDER BY"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " LAST_UPDATE_DATE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "DESC"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95197\uFF1A\u6743\u9650\u4E0D\u8DB3"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u70B9\u51FB\u91CD\u65B0\u5F52\u6863\u3001\u4FEE\u6539\u5408\u540C\u72B6\u6001\u3001\u91CD\u53D1\u77ED\u4FE1\u3001\u5408\u540C\u540C\u6B65\u7B49\u6309\u94AE\u65F6\uFF0C\u5F53\u524D\u7528\u6237\u65E0\u5BF9\u5E94 permissionList \u6743\u9650\u7801")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u524D\u7AEF Button \u7EC4\u4EF6\u901A\u8FC7 permissionList \u914D\u7F6E\u6743\u9650\u7801\uFF0CHZERO \u6846\u67B6\u6821\u9A8C\u5F53\u524D\u7528\u6237\u89D2\u8272\u662F\u5426\u5305\u542B\u8BE5\u6743\u9650\u7801\uFF0C\u672A\u5305\u542B\u5219\u6309\u94AE\u4E0D\u53EF\u89C1\u6216\u7981\u7528\u3002\u82E5\u5F3A\u5236\u8C03\u7528\u63A5\u53E3\uFF0C\u540E\u7AEF\u4E5F\u4F1A\u6821\u9A8C\u6743\u9650\u8FD4\u56DE403\u3002\u9700\u8054\u7CFB\u7BA1\u7406\u5458\u914D\u7F6E\u5BF9\u5E94\u89D2\u8272\u6743\u9650")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " U.USER_NAME "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7528\u6237\u540D, R.ROLE_NAME "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u89D2\u8272\u540D, P.PERMISSION_CODE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u6743\u9650\u7801")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " SYS_USER U")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "LEFT JOIN"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " SYS_USER_ROLE UR "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ON"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " U.USER_ID "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " UR.USER_ID")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "LEFT JOIN"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " SYS_ROLE R "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ON"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " UR.ROLE_ID "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " R.ROLE_ID")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "LEFT JOIN"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " SYS_ROLE_PERMISSION RP "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ON"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " R.ROLE_ID "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " RP.ROLE_ID")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "LEFT JOIN"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " SYS_PERMISSION P "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ON"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " RP.PERMISSION_ID "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " P.PERMISSION_ID")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " P.PERMISSION_CODE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "LIKE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "%contract_exception%"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ORDER BY"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " U.USER_NAME;")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95198\uFF1A\u6CD5\u5927\u5927\u670D\u52A1\u4E0D\u53EF\u7528"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u8C03\u7528\u91CD\u65B0\u5F52\u6863\u3001\u5408\u540C\u540C\u6B65\u7B49\u6D89\u53CA\u6CD5\u5927\u5927\u7684\u63A5\u53E3\u65F6\uFF0C\u6CD5\u5927\u5927\u670D\u52A1\u5F02\u5E38")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u540E\u7AEF\u8C03\u7528\u6CD5\u5927\u5927\u63A5\u53E3\uFF0C\u82E5\u6CD5\u5927\u5927\u670D\u52A1\u4E0D\u53EF\u7528\u3001\u7F51\u7EDC\u5F02\u5E38\u3001\u63A5\u53E3\u8D85\u65F6\u7B49\u5219\u63A5\u53E3\u8FD4\u56DE\u5931\u8D25\u3002\u9700\u68C0\u67E5\u6CD5\u5927\u5927\u670D\u52A1\u8FD0\u884C\u72B6\u6001\u3001\u7F51\u7EDC\u8FDE\u901A\u6027\u3001\u6CD5\u5927\u5927\u63A5\u53E3\u914D\u7F6E")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " ELECTRONIC_CONTRACT_CODE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5408\u540C\u7F16\u53F7, "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "CONTRACT_NAME"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5408\u540C\u540D\u79F0,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         CONTRACT_STATUS "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7B7E\u7F72\u72B6\u6001, EXCEPTION_TYPE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5F02\u5E38\u7C7B\u578B,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         EXCEPTION_INFO "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5F02\u5E38\u4FE1\u606F,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         TO_CHAR(LAST_UPDATE_DATE,"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "YYYY-MM-DD HH24:MI:SS"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u6700\u540E\u66F4\u65B0\u65F6\u95F4")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " ELECTRONIC_CONTRACT")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " EXCEPTION_TYPE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IN"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " ("),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "filing_failed"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ","),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "callback_failed"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ")")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " LAST_UPDATE_DATE "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, ">="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#C792EA" } }, "SYSDATE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "-"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "7")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ORDER BY"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " LAST_UPDATE_DATE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "DESC"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95199\uFF1A\u77ED\u4FE1\u5E73\u53F0\u4E0D\u53EF\u7528"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u8C03\u7528\u91CD\u53D1\u77ED\u4FE1\u63A5\u53E3\u65F6\uFF0C\u77ED\u4FE1\u5E73\u53F0\u670D\u52A1\u5F02\u5E38")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u540E\u7AEF\u8C03\u7528\u77ED\u4FE1\u5E73\u53F0\u63A5\u53E3\uFF0C\u82E5\u77ED\u4FE1\u5E73\u53F0\u670D\u52A1\u4E0D\u53EF\u7528\u3001\u7F51\u7EDC\u5F02\u5E38\u3001\u63A5\u53E3\u8D85\u65F6\u7B49\u5219\u63A5\u53E3\u8FD4\u56DE\u5931\u8D25\u3002\u9700\u68C0\u67E5\u77ED\u4FE1\u5E73\u53F0\u670D\u52A1\u72B6\u6001\u3001\u7F51\u7EDC\u8FDE\u901A\u6027\u3001\u77ED\u4FE1\u5E73\u53F0\u914D\u7F6E")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " ELECTRONIC_CONTRACT_CODE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5408\u540C\u7F16\u53F7, AGENT_NAME "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7ECF\u9500\u5546,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         CONTRACT_STATUS "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7B7E\u7F72\u72B6\u6001, EXCEPTION_TYPE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5F02\u5E38\u7C7B\u578B,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         EXCEPTION_INFO "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5F02\u5E38\u4FE1\u606F")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " ELECTRONIC_CONTRACT")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " EXCEPTION_TYPE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IN"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " ("),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "signing_timeout"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ","),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "signing_failed"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ")")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " LAST_UPDATE_DATE "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, ">="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#C792EA" } }, "SYSDATE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "-"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "7")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ORDER BY"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " LAST_UPDATE_DATE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "DESC"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u951910\uFF1A\u503C\u96C6\u6570\u636E\u4E0D\u663E\u793A"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u67E5\u8BE2\u6761\u4EF6\u6216\u5217\u8868\u4E2D\u5F02\u5E38\u7C7B\u578B\u7B49\u4E0B\u62C9\u9009\u9879\u4E3A\u7A7A")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u524D\u7AEF\u901A\u8FC7 lookupCode \u67E5\u8BE2\u503C\u96C6 MBO.CONTRACT_EXCEPTION_TYPE\u3001MBO.CONTRACT_STATUS \u7B49\uFF0C\u503C\u96C6\u672A\u914D\u7F6E\u6216\u672A\u542F\u7528\u5219\u4E0B\u62C9\u9009\u9879\u4E3A\u7A7A\u3002\u9700\u5728\u503C\u96C6\u7BA1\u7406\u9875\u9762\u914D\u7F6E\u5BF9\u5E94\u503C\u96C6")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " LOOKUP_CODE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u503C\u96C6\u7F16\u7801, LOOKUP_VALUE_CODE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u503C\u7F16\u7801,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         LOOKUP_VALUE_NAME "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u503C\u540D\u79F0, ENABLE_FLAG "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u542F\u7528\u6807\u8BB0")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " SYS_LOOKUP_VALUE")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " LOOKUP_CODE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IN"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " ("),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "MBO.CONTRACT_EXCEPTION_TYPE"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ","),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "MBO.CONTRACT_STATUS"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ")")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " ENABLE_FLAG "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "N"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ORDER BY"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " LOOKUP_CODE;")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u951911\uFF1A\u7ECF\u9500\u5546\u624B\u673A\u53F7\u7F3A\u5931"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u91CD\u53D1\u7B7E\u7F72\u77ED\u4FE1\u65F6\uFF0C\u7ECF\u9500\u5546\u624B\u673A\u53F7\u4E3A\u7A7A\u6216\u683C\u5F0F\u9519\u8BEF")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u540E\u7AEF\u6821\u9A8C\u7ECF\u9500\u5546\u624B\u673A\u53F7\u975E\u7A7A\u4E14\u683C\u5F0F\u6B63\u786E\uFF0C\u82E5\u624B\u673A\u53F7\u4E3A\u7A7A\u6216\u683C\u5F0F\u9519\u8BEF\u5219\u8FD4\u56DE\u4E1A\u52A1\u5F02\u5E38\u3002\u9700\u68C0\u67E5\u7ECF\u9500\u5546\u6863\u6848\u4E2D\u7684\u624B\u673A\u53F7\u5B57\u6BB5")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " C.ELECTRONIC_CONTRACT_CODE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5408\u540C\u7F16\u53F7, C.AGENT_NAME "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7ECF\u9500\u5546,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         D.MOBILE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u624B\u673A\u53F7, D.CONTACT_PHONE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u8054\u7CFB\u7535\u8BDD")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " ELECTRONIC_CONTRACT C")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "LEFT JOIN"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " DISTRIBUTOR D "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ON"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " C.AGENT_CODE "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " D.DISTRIBUTOR_CODE")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " C.CONTRACT_STATUS "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IN"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " ("),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "signing_timeout"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ","),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "signing_failed"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ")")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " (D.MOBILE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NULL"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "OR"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " D.MOBILE "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "''")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "OR"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " REGEXP_LIKE(D.MOBILE, "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "^[^1][^3-9]"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " FALSE);")
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
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u95EE\u9898</th><th${_scopeId}>\u6392\u67E5\u65B9\u5F0F</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u5F02\u5E38\u7C7B\u578B\u6709\u54EA\u4E9B</td><td${_scopeId}>\u7B7E\u7F72\u8D85\u65F6\u3001\u7B7E\u7F72\u5931\u8D25\u3001\u5F52\u6863\u5931\u8D25\u3001\u56DE\u8C03\u5931\u8D25\u7B49\uFF0C\u67E5\u770B\u503C\u96C6 MBO.CONTRACT_EXCEPTION_TYPE</td></tr><tr${_scopeId}><td${_scopeId}>\u91CD\u65B0\u5F52\u6863\u540E\u5408\u540C\u72B6\u6001\u672A\u66F4\u65B0</td><td${_scopeId}>\u68C0\u67E5\u6CD5\u5927\u5927\u5F52\u6863\u63A5\u53E3\u8FD4\u56DE\u7ED3\u679C\uFF0C\u786E\u8BA4\u5F52\u6863\u662F\u5426\u6210\u529F</td></tr><tr${_scopeId}><td${_scopeId}>\u91CD\u53D1\u77ED\u4FE1\u540E\u7ECF\u9500\u5546\u672A\u6536\u5230</td><td${_scopeId}>\u68C0\u67E5\u77ED\u4FE1\u5E73\u53F0\u53D1\u9001\u8BB0\u5F55\uFF0C\u786E\u8BA4\u7ECF\u9500\u5546\u624B\u673A\u53F7\u662F\u5426\u6B63\u786E</td></tr><tr${_scopeId}><td${_scopeId}>\u5408\u540C\u540C\u6B65\u540E\u72B6\u6001\u4ECD\u4E0D\u4E00\u81F4</td><td${_scopeId}>\u68C0\u67E5\u5916\u90E8\u7CFB\u7EDF\u7B7E\u7F72\u72B6\u6001\uFF0C\u786E\u8BA4 unifyContractCode \u662F\u5426\u6B63\u786E</td></tr><tr${_scopeId}><td${_scopeId}>\u4FEE\u6539\u5408\u540C\u72B6\u6001\u540E\u6D41\u7A0B\u672A\u7EE7\u7EED</td><td${_scopeId}>\u68C0\u67E5\u76EE\u6807\u72B6\u6001\u662F\u5426\u5408\u6CD5\uFF0C\u786E\u8BA4\u72B6\u6001\u6D41\u8F6C\u89C4\u5219</td></tr></tbody></table>`);
      } else {
        return [
          createVNode("table", { class: "kb-field-tbl" }, [
            createVNode("thead", null, [
              createVNode("tr", null, [
                createVNode("th", null, "\u95EE\u9898"),
                createVNode("th", null, "\u6392\u67E5\u65B9\u5F0F")
              ])
            ]),
            createVNode("tbody", null, [
              createVNode("tr", null, [
                createVNode("td", null, "\u5F02\u5E38\u7C7B\u578B\u6709\u54EA\u4E9B"),
                createVNode("td", null, "\u7B7E\u7F72\u8D85\u65F6\u3001\u7B7E\u7F72\u5931\u8D25\u3001\u5F52\u6863\u5931\u8D25\u3001\u56DE\u8C03\u5931\u8D25\u7B49\uFF0C\u67E5\u770B\u503C\u96C6 MBO.CONTRACT_EXCEPTION_TYPE")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u91CD\u65B0\u5F52\u6863\u540E\u5408\u540C\u72B6\u6001\u672A\u66F4\u65B0"),
                createVNode("td", null, "\u68C0\u67E5\u6CD5\u5927\u5927\u5F52\u6863\u63A5\u53E3\u8FD4\u56DE\u7ED3\u679C\uFF0C\u786E\u8BA4\u5F52\u6863\u662F\u5426\u6210\u529F")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u91CD\u53D1\u77ED\u4FE1\u540E\u7ECF\u9500\u5546\u672A\u6536\u5230"),
                createVNode("td", null, "\u68C0\u67E5\u77ED\u4FE1\u5E73\u53F0\u53D1\u9001\u8BB0\u5F55\uFF0C\u786E\u8BA4\u7ECF\u9500\u5546\u624B\u673A\u53F7\u662F\u5426\u6B63\u786E")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5408\u540C\u540C\u6B65\u540E\u72B6\u6001\u4ECD\u4E0D\u4E00\u81F4"),
                createVNode("td", null, "\u68C0\u67E5\u5916\u90E8\u7CFB\u7EDF\u7B7E\u7F72\u72B6\u6001\uFF0C\u786E\u8BA4 unifyContractCode \u662F\u5426\u6B63\u786E")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u4FEE\u6539\u5408\u540C\u72B6\u6001\u540E\u6D41\u7A0B\u672A\u7EE7\u7EED"),
                createVNode("td", null, "\u68C0\u67E5\u76EE\u6807\u72B6\u6001\u662F\u5426\u5408\u6CD5\uFF0C\u786E\u8BA4\u72B6\u6001\u6D41\u8F6C\u89C4\u5219")
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
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u65E5\u671F</th><th${_scopeId}>\u63D0\u4EA4ID</th><th${_scopeId}>\u63D0\u4EA4\u4EBA</th><th${_scopeId}>\u63D0\u4EA4\u5185\u5BB9</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>2025-11-12</td><td${_scopeId}>-</td><td${_scopeId}>hfy</td><td${_scopeId}>\u521D\u59CB\u521B\u5EFA</td></tr><tr${_scopeId}><td${_scopeId}>2026-07-31</td><td${_scopeId}>-</td><td${_scopeId}>AI</td><td${_scopeId}>\u5BF9\u6BD4\u7F51\u7AD9\u8865\u5145\u5B9A\u4E49\u3001\u8BE6\u7EC6\u903B\u8F91\u3001\u6570\u636E\u5E93\u8868\u5B57\u6BB5\u7B49</td></tr><tr${_scopeId}><td${_scopeId}>2026-08-30</td><td${_scopeId}>-</td><td${_scopeId}>AI</td><td${_scopeId}>\u6309skill\u89C4\u8303\u683C\u5F0F\u91CD\u5199</td></tr></tbody></table>`);
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
                createVNode("td", null, "2025-11-12"),
                createVNode("td", null, "-"),
                createVNode("td", null, "hfy"),
                createVNode("td", null, "\u521D\u59CB\u521B\u5EFA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "2026-07-31"),
                createVNode("td", null, "-"),
                createVNode("td", null, "AI"),
                createVNode("td", null, "\u5BF9\u6BD4\u7F51\u7AD9\u8865\u5145\u5B9A\u4E49\u3001\u8BE6\u7EC6\u903B\u8F91\u3001\u6570\u636E\u5E93\u8868\u5B57\u6BB5\u7B49")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "2026-08-30"),
                createVNode("td", null, "-"),
                createVNode("td", null, "AI"),
                createVNode("td", null, "\u6309skill\u89C4\u8303\u683C\u5F0F\u91CD\u5199")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("\u7535\u5B50\u5408\u540C\u7BA1\u7406/\u54C1\u724C\u65B9/\u5408\u540C\u7B7E\u7F72\u5F02\u5E38\u5904\u7406/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
