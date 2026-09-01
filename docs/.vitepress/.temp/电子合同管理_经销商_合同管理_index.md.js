import { resolveComponent, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.6ab74304.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"\u7535\u5B50\u5408\u540C\u7BA1\u7406/\u7ECF\u9500\u5546/\u5408\u540C\u7BA1\u7406/index.md"}');
const _sfc_main = { name: "\u7535\u5B50\u5408\u540C\u7BA1\u7406/\u7ECF\u9500\u5546/\u5408\u540C\u7BA1\u7406/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_BreadcrumbTabs = resolveComponent("BreadcrumbTabs");
  const _component_KbCard = resolveComponent("KbCard");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_BreadcrumbTabs, null, null, _parent));
  _push(`<div id="biz-intro" style="${ssrRenderStyle({ "display": "none" })}"><div class="tab-pad"><div class="kl-wrap"><div class="kl-card"><div class="biz-kl-hdr"><span class="biz-tag" style="${ssrRenderStyle({ "background": "rgba(124,58,237,0.08)", "color": "#7C3AED", "border-color": "rgba(124,58,237,0.18)" })}">\u4E1A\u52A1\u662F\u4EC0\u4E48</span><h2>\u5408\u540C\u7BA1\u7406\uFF08\u7ECF\u9500\u5546\uFF09</h2><p>\u7ECF\u9500\u5546\u5728\u7CFB\u7EDF\u4E2D\u67E5\u770B\u5E76\u7B7E\u7F72\u7535\u5B50\u5408\u540C\uFF0C\u7B7E\u7F72\u6216\u62D2\u7B7E\u540E\u95ED\u73AF\u5F52\u6863</p></div><div class="biz-2col-inner"><div class="kl-col-box"><div style="${ssrRenderStyle({ "display": "flex", "align-items": "center", "gap": "10px", "margin-bottom": "12px" })}"><div style="${ssrRenderStyle({ "width": "40px", "height": "40px", "border-radius": "10px", "display": "flex", "align-items": "center", "justify-content": "center", "flex-shrink": "0", "background": "linear-gradient(135deg,#7C3AED,#A78BFA)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" stroke-width="1.5"><circle cx="8" cy="8" r="6"></circle><path d="M8 5V8L10 10"></path></svg></div><h4 style="${ssrRenderStyle({ "font-size": "1rem", "font-weight": "800", "color": "#1F2937", "margin": "0" })}">\u4E3A\u4F55\u7ECF\u9500\u5546\u4FA7\u8981\u7BA1</h4></div><p style="${ssrRenderStyle({ "font-size": "0.78rem", "font-weight": "600", "color": "#6B7280", "margin": "0 0 10px" })}">\u89E3\u51B3\u4E24\u4E2A\u4E1A\u52A1\u8BC9\u6C42</p><div style="${ssrRenderStyle({ "display": "flex", "flex-direction": "column", "gap": "8px" })}"><div style="${ssrRenderStyle({ "display": "flex", "align-items": "flex-start", "gap": "8px", "padding": "8px 10px", "background": "#F5F3FF", "border-radius": "8px" })}"><div style="${ssrRenderStyle({ "font-size": ".75rem" })}"><strong>\u81EA\u52A9\u7B7E\u7F72</strong> \u2014 \u7ECF\u9500\u5546\u5728\u7EBF\u5B8C\u6210\u7B7E\u7F72\uFF0C\u514D\u53BB\u7EBF\u4E0B\u6D41\u8F6C</div></div><div style="${ssrRenderStyle({ "display": "flex", "align-items": "flex-start", "gap": "8px", "padding": "8px 10px", "background": "#F5F3FF", "border-radius": "8px" })}"><div style="${ssrRenderStyle({ "font-size": ".75rem" })}"><strong>\u8D23\u4EFB\u786E\u8BA4</strong> \u2014 \u7B7E\u7F72\u5373\u786E\u8BA4\u5408\u4F5C\u6761\u6B3E\uFF0C\u62D2\u7B7E\u4EA6\u7559\u75D5</div></div></div></div><div class="kl-col-box alt"><div style="${ssrRenderStyle({ "display": "flex", "align-items": "center", "gap": "10px", "margin-bottom": "12px" })}"><div style="${ssrRenderStyle({ "width": "40px", "height": "40px", "border-radius": "10px", "display": "flex", "align-items": "center", "justify-content": "center", "flex-shrink": "0", "background": "linear-gradient(135deg,#7C3AED,#A78BFA)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" stroke-width="1.5"><path d="M3 4H13V12H3Z"></path><path d="M6 7L8 9L10 6"></path></svg></div><h4 style="${ssrRenderStyle({ "font-size": "1rem", "font-weight": "800", "color": "#1F2937", "margin": "0" })}">\u5408\u540C\u600E\u4E48\u5206\u7C7B</h4></div><p style="${ssrRenderStyle({ "font-size": "0.78rem", "font-weight": "600", "color": "#6B7280", "margin": "0 0 10px" })}">\u6309\u7C7B\u578B\u5206Tab</p><div style="${ssrRenderStyle({ "display": "flex", "flex-direction": "column", "gap": "8px" })}"><div style="${ssrRenderStyle({ "display": "flex", "align-items": "flex-start", "gap": "8px", "padding": "8px 10px", "background": "#F0FDF4", "border-radius": "8px" })}"><div style="${ssrRenderStyle({ "font-size": ".75rem" })}"><strong>\u56DB\u7C7B\u5408\u540C</strong> \u2014 \u6309\u4E1A\u52A1\u7C7B\u578B\u5206\u522B\u5F52\u96C6\u67E5\u770B</div></div><div style="${ssrRenderStyle({ "display": "flex", "align-items": "flex-start", "gap": "8px", "padding": "8px 10px", "background": "#F0FDF4", "border-radius": "8px" })}"><div style="${ssrRenderStyle({ "font-size": ".75rem" })}"><strong>\u5168\u90E8\u89C6\u56FE</strong> \u2014 \u8DE8\u7C7B\u578B\u67E5\u770B\u540D\u4E0B\u5168\u90E8\u5408\u540C</div></div></div></div></div></div><div class="kl-card"><div class="biz-kl-hdr"><span class="biz-tag" style="${ssrRenderStyle({ "background": "rgba(124,58,237,0.08)", "color": "#7C3AED", "border-color": "rgba(124,58,237,0.18)" })}">\u6D41\u7A0B</span><h2>\u7ECF\u9500\u5546\u5408\u540C\u7B7E\u7F72\u6D41\u7A0B</h2><p>\u4ECE\u67E5\u770B\u5408\u540C\u5230\u5224\u65AD\u662F\u5426\u7B7E\u7F72\uFF0C\u518D\u8D70\u5DF2\u7B7E\u7F72\u6216\u62D2\u7B7E</p></div><div class="biz-steps"><div class="biz-step-item"><div class="biz-step-circle" style="${ssrRenderStyle({ "background": "linear-gradient(135deg,#7C3AED,#6D28D9)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" stroke-width="1.5"><circle cx="8" cy="8" r="6"></circle><path d="M8 5V8L10 10"></path></svg></div><h5>\u67E5\u770B\u5408\u540C</h5><small>\u6309\u7C7B\u578BTab<br>\u6D4F\u89C8\u540D\u4E0B\u5408\u540C</small></div><div class="biz-step-arrow">\u2192</div><div class="biz-step-item"><div class="biz-step-circle" style="${ssrRenderStyle({ "background": "linear-gradient(135deg,#7C3AED,#6D28D9)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" stroke-width="1.5"><circle cx="8" cy="8" r="6"></circle><path d="M8 5V8L10 10"></path></svg></div><h5>\u5224\u65AD\u662F\u5426\u7B7E\u7F72</h5><small>\u786E\u8BA4\u6761\u6B3E<br>\u51B3\u5B9A\u7B7E\u7F72\u4E0E\u5426</small></div><div class="biz-step-arrow">\u2192</div><div class="biz-step-item"><div class="biz-step-circle" style="${ssrRenderStyle({ "background": "linear-gradient(135deg,#7C3AED,#6D28D9)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" stroke-width="1.5"><path d="M3 4H13V12H3Z"></path><path d="M6 7L8 9L10 6"></path></svg></div><h5>\u5728\u7EBF\u7B7E\u7F72</h5><small>\u5B8C\u6210\u7535\u5B50\u7B7E\u7AE0<br>\u5408\u540C\u751F\u6548</small></div><div class="biz-step-arrow">\u2192</div><div class="biz-step-item"><div class="biz-step-circle" style="${ssrRenderStyle({ "background": "linear-gradient(135deg,#7C3AED,#6D28D9)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" stroke-width="1.5"><circle cx="8" cy="8" r="6"></circle><path d="M5 8H11"></path></svg></div><h5>\u62D2\u7B7E\u5904\u7406</h5><small>\u62D2\u7B7E\u7559\u75D5<br>\u6D41\u7A0B\u7EC8\u6B62</small></div></div><div class="kl-tip" style="${ssrRenderStyle({ "margin-top": "14px" })}"><strong>\u8BF4\u660E\uFF1A</strong>\u7ECF\u9500\u5546\u4EC5\u53EF\u89C1\u81EA\u8EAB\u6743\u9650\u8303\u56F4\u5185\u7684\u5408\u540C\uFF0C\u7B7E\u7F72\u4E0E\u62D2\u7B7E\u5747\u6309\u6743\u9650\u9694\u79BB\uFF0C\u4E92\u4E0D\u8D8A\u6743\u3002 </div></div><div class="kl-card"><div class="biz-kl-hdr"><span class="biz-tag" style="${ssrRenderStyle({ "background": "rgba(124,58,237,0.08)", "color": "#7C3AED", "border-color": "rgba(124,58,237,0.18)" })}">\u5173\u952E\u89C4\u5219</span><h2>\u7ECF\u9500\u5546\u5408\u540C\u7BA1\u7406\u7684\u5173\u952E\u7EA6\u675F</h2><p>\u5206\u7C7B\u67E5\u770B\u3001\u6743\u9650\u9694\u79BB\uFF0C\u7B7E\u7F72\u4E0E\u62D2\u7B7E\u5747\u4E3A\u660E\u786E\u95ED\u73AF</p></div><div class="biz-3col"><div class="kl-col-box" style="${ssrRenderStyle({ "margin-bottom": "0" })}"><div style="${ssrRenderStyle({ "display": "flex", "gap": "12px", "align-items": "flex-start" })}"><div style="${ssrRenderStyle({ "width": "36px", "height": "36px", "border-radius": "10px", "display": "flex", "align-items": "center", "justify-content": "center", "flex-shrink": "0", "background": "linear-gradient(135deg,#7C3AED,#A78BFA)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" stroke-width="1.5"><path d="M3 4H13V12H3Z"></path><path d="M6 7L8 9L10 6"></path></svg></div><div><h5 style="${ssrRenderStyle({ "font-size": "0.88rem", "font-weight": "800", "color": "#1F2937", "margin": "0 0 6px" })}">\u6309\u7C7B\u578B\u5206\u7C7B</h5><p style="${ssrRenderStyle({ "font-size": "0.73rem", "color": "#6B7280", "margin": "0", "line-height": "1.6" })}">\u5408\u540C\u6309\u56DB\u7C7B\u4E1A\u52A1\u7C7B\u578B\u5206Tab\u5C55\u793A\uFF0C\u5E76\u63D0\u4F9B\u5168\u90E8\u89C6\u56FE\u7EDF\u4E00\u67E5\u770B\u3002</p></div></div></div><div class="kl-col-box alt" style="${ssrRenderStyle({ "margin-bottom": "0" })}"><div style="${ssrRenderStyle({ "display": "flex", "gap": "12px", "align-items": "flex-start" })}"><div style="${ssrRenderStyle({ "width": "36px", "height": "36px", "border-radius": "10px", "display": "flex", "align-items": "center", "justify-content": "center", "flex-shrink": "0", "background": "linear-gradient(135deg,#7C3AED,#A78BFA)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" stroke-width="1.5"><path d="M8 2L3 4V8C3 11 8 14 8 14C8 14 13 11 13 8V4Z"></path></svg></div><div><h5 style="${ssrRenderStyle({ "font-size": "0.88rem", "font-weight": "800", "color": "#1F2937", "margin": "0 0 6px" })}">\u6743\u9650\u9694\u79BB</h5><p style="${ssrRenderStyle({ "font-size": "0.73rem", "color": "#6B7280", "margin": "0", "line-height": "1.6" })}">\u7ECF\u9500\u5546\u4EC5\u53EF\u89C1\u81EA\u8EAB\u5408\u540C\uFF0C\u8DE8\u7ECF\u9500\u5546\u6570\u636E\u76F8\u4E92\u9694\u79BB\u4E0D\u53EF\u89C1\u3002</p></div></div></div><div class="kl-col-box" style="${ssrRenderStyle({ "margin-bottom": "0" })}"><div style="${ssrRenderStyle({ "display": "flex", "gap": "12px", "align-items": "flex-start" })}"><div style="${ssrRenderStyle({ "width": "36px", "height": "36px", "border-radius": "10px", "display": "flex", "align-items": "center", "justify-content": "center", "flex-shrink": "0", "background": "linear-gradient(135deg,#7C3AED,#A78BFA)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" stroke-width="1.5"><circle cx="8" cy="8" r="6"></circle><path d="M5 8H11"></path></svg></div><div><h5 style="${ssrRenderStyle({ "font-size": "0.88rem", "font-weight": "800", "color": "#1F2937", "margin": "0 0 6px" })}">\u7B7E\u7F72\u6216\u62D2\u7B7E</h5><p style="${ssrRenderStyle({ "font-size": "0.73rem", "color": "#6B7280", "margin": "0", "line-height": "1.6" })}">\u5728\u7EBF\u7B7E\u7F72\u4F7F\u5408\u540C\u751F\u6548\uFF0C\u62D2\u7B7E\u5219\u7559\u75D5\u5E76\u7EC8\u6B62\u8BE5\u5408\u540C\u7B7E\u7F72\u6D41\u7A0B\u3002</p></div></div></div></div></div></div></div></div><div id="biz-flow" style="${ssrRenderStyle({ "display": "none" })}"><div class="tab-pad"><div class="bf-truth-flow"><h4 class="bf-main-title">\u5408\u540C\u7BA1\u7406(\u7ECF\u9500\u5546) \u2014 \u5168\u94FE\u8DEF\u6D41\u7A0B\u56FE</h4><p class="bf-main-sub">\u5F00\u59CB \u2192 \u2605\u67E5\u770B/\u7B7E\u7F72\u7ECF\u9500\u5546\u5408\u540C\u2605 \u2192 \u2696\u662F\u5426\u7B7E\u7F72\uFF1F \u2192 \u5DF2\u7B7E\u7F72(\u72B6\u6001\u6D41\u8F6C)/\u62D2\u7B7E(\u54C1\u724C\u5904\u7406) \u2192 \u7ED3\u675F</p><div class="bf-fc-svg-wrap"><svg class="bf-fc-svg" style="${ssrRenderStyle({ "max-height": "none" })}" viewBox="0 0 1200 760" xmlns="http://www.w3.org/2000/svg"><defs><marker id="arr-green" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon points="0,0 10,5 0,10" fill="#16A34A"></polygon></marker><marker id="arr-gray" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon points="0,0 10,5 0,10" fill="#9CA3AF"></polygon></marker><marker id="arr-blue" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon points="0,0 10,5 0,10" fill="#3B82F6"></polygon></marker><marker id="arr-red" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon points="0,0 10,5 0,10" fill="#EF4444"></polygon></marker><filter id="shadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000" flood-opacity="0.15"></feDropShadow></filter></defs><rect x="50" y="20" width="1100" height="95" rx="8" fill="#EFF6FF" stroke="#3B82F6" stroke-width="1.5" stroke-dasharray="6,4"></rect><text x="600" y="42" text-anchor="middle" fill="#1D4ED8" font-size="13" font-weight="600">\u4E0A\u6E38\u652F\u6491</text><rect x="193" y="56" width="150" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"></rect><text x="268" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">\u54C1\u724C\u65B9\u5408\u540C\u7B7E\u7F72</text><rect x="359" y="56" width="150" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"></rect><text x="434" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">\u503C\u96C6(\u5408\u540C\u7C7B\u578B)</text><rect x="525" y="56" width="150" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"></rect><text x="600" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">\u503C\u96C6(\u5408\u540C\u72B6\u6001)</text><rect x="691" y="56" width="150" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"></rect><text x="766" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">\u5408\u540C\u6A21\u677F(\u6761\u6B3E)</text><rect x="857" y="56" width="150" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"></rect><text x="932" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">\u7535\u5B50\u7B7E\u7AE0\u7CFB\u7EDF</text><line x1="600" y1="115" x2="600" y2="150" stroke="#3B82F6" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#arr-blue)"></line><rect x="560" y="150" width="80" height="44" rx="6" fill="#FAF5FF" stroke="#9333EA" stroke-width="1.5" stroke-dasharray="5,3"></rect><text x="600" y="177" text-anchor="middle" fill="#7C3AED" font-size="13" font-weight="600">\u5F00\u59CB</text><line x1="600" y1="194" x2="600" y2="290" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"></line><rect x="460" y="290" width="280" height="54" rx="6" fill="#16A34A" stroke="#15803D" stroke-width="2" filter="url(#shadow)"></rect><text x="600" y="315" text-anchor="middle" fill="#FFFFFF" font-size="13" font-weight="700">\u2605\u67E5\u770B/\u7B7E\u7F72\u7ECF\u9500\u5546\u5408\u540C\u2605</text><text x="600" y="335" text-anchor="middle" fill="#DCFCE7" font-size="10">\u6309\u7C7B\u578BTab\xB7\u67E5\u770B\u8BE6\u60C5\xB7\u5728\u7EBF\u7B7E\u7F72/\u62D2\u7B7E</text><line x1="600" y1="344" x2="600" y2="372" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"></line><polygon points="600,372 670,410 600,448 530,410" fill="#FAF5FF" stroke="#9333EA" stroke-width="1.5" stroke-dasharray="5,3"></polygon><text x="600" y="414" text-anchor="middle" fill="#7C3AED" font-size="12" font-weight="600">\u2696 \u662F\u5426\u7B7E\u7F72\uFF1F</text><line x1="600" y1="448" x2="600" y2="470" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"></line><rect x="510" y="470" width="180" height="44" rx="6" fill="#F0FDF4" stroke="#16A34A" stroke-width="2"></rect><text x="600" y="497" text-anchor="middle" fill="#166534" font-size="13" font-weight="600">\u5DF2\u7B7E\u7F72(\u72B6\u6001\u6D41\u8F6C)</text><line x1="670" y1="410" x2="750" y2="410" stroke="#9CA3AF" stroke-width="2" marker-end="url(#arr-gray)"></line><rect x="750" y="392" width="150" height="40" rx="6" fill="#FFFFFF" stroke="#9CA3AF" stroke-width="1.5"></rect><text x="825" y="417" text-anchor="middle" fill="#4B5563" font-size="12" font-weight="600">\u62D2\u7B7E(\u54C1\u724C\u5904\u7406)</text><line x1="825" y1="432" x2="825" y2="580" stroke="#9CA3AF" stroke-width="1.5"></line><line x1="825" y1="580" x2="645" y2="580" stroke="#9CA3AF" stroke-width="1.5" marker-end="url(#arr-gray)"></line><line x1="600" y1="514" x2="600" y2="560" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"></line><rect x="555" y="560" width="90" height="40" rx="6" fill="#FAF5FF" stroke="#9333EA" stroke-width="1.5" stroke-dasharray="5,3"></rect><text x="600" y="585" text-anchor="middle" fill="#7C3AED" font-size="13" font-weight="600">\u7ED3\u675F</text><line x1="600" y1="600" x2="600" y2="660" stroke="#16A34A" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#arr-green)"></line><rect x="50" y="660" width="1100" height="95" rx="8" fill="#F0FDF4" stroke="#16A34A" stroke-width="1.5" stroke-dasharray="6,4"></rect><text x="600" y="682" text-anchor="middle" fill="#166534" font-size="13" font-weight="600">\u4E0B\u6E38\u5F71\u54CD</text><rect x="355" y="712" width="150" height="36" rx="5" fill="#FFFFFF" stroke="#16A34A" stroke-width="1.2"></rect><text x="430" y="735" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">\u54C1\u724C\u65B9\u5F02\u5E38\u5904\u7406</text><rect x="525" y="712" width="150" height="36" rx="5" fill="#FFFFFF" stroke="#16A34A" stroke-width="1.2"></rect><text x="600" y="735" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">\u5408\u540C\u72B6\u6001\u6D41\u8F6C</text><rect x="695" y="712" width="150" height="36" rx="5" fill="#FFFFFF" stroke="#16A34A" stroke-width="1.2"></rect><text x="770" y="735" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">\u7B7E\u7F72\u8BB0\u5F55\u5F52\u6863</text></svg></div><div class="bf-fc-legend"><span class="bf-fc-legend-item"><span class="bf-fc-dot bf-fc-dot-green"></span> \u4E3B\u6D41\u7A0B\u6B65\u9AA4</span><span class="bf-fc-legend-item"><span class="bf-fc-dot bf-fc-dot-purple"></span> \u5F00\u59CB/\u7ED3\u675F/\u5224\u65AD</span><span class="bf-fc-legend-item"><span class="bf-fc-dot bf-fc-dot-blue"></span> \u4E0A\u6E38\u652F\u6491\u670D\u52A1</span><span class="bf-fc-legend-item"><span style="${ssrRenderStyle({ "display": "inline-block", "width": "22px", "height": "2px", "background": "#9CA3AF" })}"></span> \u62D2\u7B7E\u5206\u652F</span></div></div></div></div><div id="key-logic" style="${ssrRenderStyle({ "display": "none" })}"><div class="tab-pad"><div class="kl-wrap">`);
  _push(ssrRenderComponent(_component_KbCard, {
    num: "1",
    title: "\u91CD\u70B9\u903B\u8F911\uFF1A\u7ECF\u9500\u5546\u6570\u636E\u9694\u79BB"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u610F\u4E49</strong>\uFF1A\u7ECF\u9500\u5546\u4EC5\u80FD\u67E5\u770B\u548C\u7BA1\u7406\u81EA\u5DF1\u4F5C\u4E3A\u7B7E\u7F72\u65B9\u7684\u5408\u540C\uFF0C\u4E92\u4E0D\u8D8A\u6743</li><li${_scopeId}><strong${_scopeId}>\u5177\u4F53\u903B\u8F91\u63CF\u8FF0</strong>\uFF1A\u6570\u636E\u9694\u79BB\u901A\u8FC7 API ch/contract/process/pageForAgent \u5B9E\u73B0\uFF0C\u4EC5\u8FD4\u56DE\u5F53\u524D\u7ECF\u9500\u5546\u7684\u5408\u540C</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u610F\u4E49"),
              createTextVNode("\uFF1A\u7ECF\u9500\u5546\u4EC5\u80FD\u67E5\u770B\u548C\u7BA1\u7406\u81EA\u5DF1\u4F5C\u4E3A\u7B7E\u7F72\u65B9\u7684\u5408\u540C\uFF0C\u4E92\u4E0D\u8D8A\u6743")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u5177\u4F53\u903B\u8F91\u63CF\u8FF0"),
              createTextVNode("\uFF1A\u6570\u636E\u9694\u79BB\u901A\u8FC7 API ch/contract/process/pageForAgent \u5B9E\u73B0\uFF0C\u4EC5\u8FD4\u56DE\u5F53\u524D\u7ECF\u9500\u5546\u7684\u5408\u540C")
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, {
    num: "2",
    title: "\u91CD\u70B9\u903B\u8F912\uFF1A\u5408\u540C\u7C7B\u578B\u5206\u8BE6\u60C5\u63A5\u53E3"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u610F\u4E49</strong>\uFF1A\u4E0D\u540C\u5408\u540C\u7C7B\u578B\u5173\u8054\u4E0D\u540C\u4E1A\u52A1\u7533\u8BF7\uFF0C\u9700\u8C03\u7528\u5BF9\u5E94\u8BE6\u60C5\u63A5\u53E3\u83B7\u53D6\u5173\u8054\u4FE1\u606F</li><li${_scopeId}><strong${_scopeId}>\u5177\u4F53\u903B\u8F91\u63CF\u8FF0</strong>\uFF1A\u6D3B\u52A8\u70B9\u5C06\u5408\u540C\u8C03\u7528 mlt/activityApply/detail\uFF0C\u7279\u8BAD\u8425\u70B9\u5C06\u5408\u540C\u8C03\u7528 mlt/trainCampApply/detail\uFF0C\u8BBE\u8BA1\u70B9\u5C06\u5408\u540C\u8C03\u7528 mlt/designApply/detail</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u610F\u4E49"),
              createTextVNode("\uFF1A\u4E0D\u540C\u5408\u540C\u7C7B\u578B\u5173\u8054\u4E0D\u540C\u4E1A\u52A1\u7533\u8BF7\uFF0C\u9700\u8C03\u7528\u5BF9\u5E94\u8BE6\u60C5\u63A5\u53E3\u83B7\u53D6\u5173\u8054\u4FE1\u606F")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u5177\u4F53\u903B\u8F91\u63CF\u8FF0"),
              createTextVNode("\uFF1A\u6D3B\u52A8\u70B9\u5C06\u5408\u540C\u8C03\u7528 mlt/activityApply/detail\uFF0C\u7279\u8BAD\u8425\u70B9\u5C06\u5408\u540C\u8C03\u7528 mlt/trainCampApply/detail\uFF0C\u8BBE\u8BA1\u70B9\u5C06\u5408\u540C\u8C03\u7528 mlt/designApply/detail")
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, {
    num: "3",
    title: "\u91CD\u70B9\u903B\u8F913\uFF1A\u7B7E\u7F72\u4E0E\u62D2\u7B7E"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u610F\u4E49</strong>\uFF1A\u7ECF\u9500\u5546\u53EF\u5728\u7EBF\u7B7E\u7F72\u6216\u62D2\u7B7E\uFF0C\u7B7E\u7F72\u5373\u786E\u8BA4\u5408\u4F5C\u6761\u6B3E\uFF0C\u62D2\u7B7E\u5219\u7559\u75D5\u7EC8\u6B62</li><li${_scopeId}><strong${_scopeId}>\u5177\u4F53\u903B\u8F91\u63CF\u8FF0</strong>\uFF1A\u7B7E\u7F72\u524D\u9700\u9605\u8BFB\u5E76\u540C\u610F\u5408\u540C\u6761\u6B3E\uFF0C\u7B7E\u7F72\u901A\u8FC7\u7535\u5B50\u7B7E\u7AE0\u5B8C\u6210\uFF0C\u62D2\u7B7E\u9700\u586B\u5199\u62D2\u7B7E\u539F\u56E0</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u610F\u4E49"),
              createTextVNode("\uFF1A\u7ECF\u9500\u5546\u53EF\u5728\u7EBF\u7B7E\u7F72\u6216\u62D2\u7B7E\uFF0C\u7B7E\u7F72\u5373\u786E\u8BA4\u5408\u4F5C\u6761\u6B3E\uFF0C\u62D2\u7B7E\u5219\u7559\u75D5\u7EC8\u6B62")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u5177\u4F53\u903B\u8F91\u63CF\u8FF0"),
              createTextVNode("\uFF1A\u7B7E\u7F72\u524D\u9700\u9605\u8BFB\u5E76\u540C\u610F\u5408\u540C\u6761\u6B3E\uFF0C\u7B7E\u7F72\u901A\u8FC7\u7535\u5B50\u7B7E\u7AE0\u5B8C\u6210\uFF0C\u62D2\u7B7E\u9700\u586B\u5199\u62D2\u7B7E\u539F\u56E0")
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, {
    num: "4",
    title: "\u91CD\u70B9\u903B\u8F914\uFF1A\u7ECF\u9500\u5546\u4E0D\u53EF\u4FEE\u6539\u5408\u540C"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u610F\u4E49</strong>\uFF1A\u5408\u540C\u5185\u5BB9\u7531\u54C1\u724C\u65B9\u7EF4\u62A4\uFF0C\u7ECF\u9500\u5546\u4EC5\u80FD\u7B7E\u7F72\u6216\u62D2\u7B7E</li><li${_scopeId}><strong${_scopeId}>\u5177\u4F53\u903B\u8F91\u63CF\u8FF0</strong>\uFF1A\u7ECF\u9500\u5546\u4E0D\u53EF\u4FEE\u6539\u5408\u540C\u5185\u5BB9\uFF0C\u4EC5\u80FD\u67E5\u770B\u5408\u540C\u8BE6\u60C5\u3001\u5728\u7EBF\u7B7E\u7F72\u3001\u62D2\u7B7E\u3001\u4E0B\u8F7D\u5408\u540CPDF</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u610F\u4E49"),
              createTextVNode("\uFF1A\u5408\u540C\u5185\u5BB9\u7531\u54C1\u724C\u65B9\u7EF4\u62A4\uFF0C\u7ECF\u9500\u5546\u4EC5\u80FD\u7B7E\u7F72\u6216\u62D2\u7B7E")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u5177\u4F53\u903B\u8F91\u63CF\u8FF0"),
              createTextVNode("\uFF1A\u7ECF\u9500\u5546\u4E0D\u53EF\u4FEE\u6539\u5408\u540C\u5185\u5BB9\uFF0C\u4EC5\u80FD\u67E5\u770B\u5408\u540C\u8BE6\u60C5\u3001\u5728\u7EBF\u7B7E\u7F72\u3001\u62D2\u7B7E\u3001\u4E0B\u8F7D\u5408\u540CPDF")
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
        _push2(`<h4${_scopeId}>\u67E5\u8BE2\u6761\u4EF6</h4><blockquote${_scopeId}>\u524D\u7AEF\u4EE3\u7801\uFF1A<code${_scopeId}>contract/management/stores/listConfig.tsx</code> \u7684 <code${_scopeId}>listDS.queryFields</code>\u3002DataSet \u901A\u8FC7 <code${_scopeId}>transport.read</code> \u8C03\u7528 <code${_scopeId}>contractManagementApi.query</code>\uFF08POST <code${_scopeId}>ch/contract/process/pageForAgent</code>\uFF09\u3002\u9875\u9762\u901A\u8FC7 <code${_scopeId}>Tabs</code> \u5207\u6362\u4E0D\u540C\u5408\u540C\u7C7B\u578B\uFF0C\u5207\u6362\u65F6\u8BBE\u7F6E <code${_scopeId}>setQueryParameter(&#39;contractType&#39;, key)</code> \u540E\u91CD\u65B0\u67E5\u8BE2\u3002</blockquote><table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5B57\u6BB5\u540D</th><th${_scopeId}>\u6570\u636E\u5E93\u5217\u540D</th><th${_scopeId}>\u7EC4\u4EF6</th><th${_scopeId}>\u4E1A\u52A1\u91CA\u4E49</th><th${_scopeId}>\u663E\u9690\u6761\u4EF6</th><th${_scopeId}>\u53D6\u503C/\u8D4B\u503C\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u5408\u540C\u7F16\u53F7</td><td${_scopeId}>ELECTRONIC_CONTRACT_CODE</td><td${_scopeId}>TextField</td><td${_scopeId}>\u6309\u5408\u540C\u7F16\u53F7\u67E5\u8BE2</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u624B\u52A8\u8F93\u5165\uFF0C\u6A21\u7CCA\u67E5\u8BE2</td></tr><tr${_scopeId}><td${_scopeId}>\u7B7E\u7F72\u72B6\u6001</td><td${_scopeId}>STATUS</td><td${_scopeId}>Select</td><td${_scopeId}>\u6309\u7B7E\u7F72\u72B6\u6001\u7B5B\u9009</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>options: contractStatusDS\uFF0C\u5305\u542B&quot;\u672A\u5904\u7406&quot;\uFF08value=&#39;waiting_seal&#39;\uFF09\u548C&quot;\u5DF2\u5904\u7406&quot;\uFF08value=&#39;&#39;\uFF09\uFF0CdefaultValue: &#39;waiting_seal&#39;</td></tr><tr${_scopeId}><td${_scopeId}>\u5408\u540C\u53D1\u8D77\u65E5\u671F</td><td${_scopeId}>INITIATE_TIME</td><td${_scopeId}>DatePicker(range)</td><td${_scopeId}>\u6309\u5408\u540C\u53D1\u8D77\u65E5\u671F\u8303\u56F4\u67E5\u8BE2</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>range: [&#39;initiateTimeStart&#39;, &#39;initiateTimeEnd&#39;]\uFF0CdefaultValue: \u5F53\u6708\u8D77\u6B62\u65F6\u95F4\uFF08initiateTimeDefaultValue\uFF09\uFF0CDJ\u7C7B\u578B\u65F6disabled\u4E14\u6E05\u7A7A</td></tr></tbody></table><h4${_scopeId}>\u5217\u8868\u8868\u683C</h4><blockquote${_scopeId}>\u524D\u7AEF\u4EE3\u7801\uFF1A<code${_scopeId}>contract/management/stores/listConfig.tsx</code> \u7684 <code${_scopeId}>listDScolumns</code>\u3002Table \u4F7F\u7528 <code${_scopeId}>queryBar={TableQueryBarType.professionalBar}</code>\uFF0C<code${_scopeId}>customizedCode=&quot;column-group&quot;</code>\u3002\u5217\u6839\u636E\u5F53\u524D\u6FC0\u6D3B\u7684\u5408\u540C\u7C7B\u578B\uFF08activeTab\uFF09\u52A8\u6001\u663E\u9690\uFF1A<code${_scopeId}>isDistribution</code>\uFF08\u7ECF\u9500\u5408\u540C\uFF09\u3001<code${_scopeId}>isDJ</code>\uFF08\u70B9\u5C06\u5408\u540C\uFF09\u63A7\u5236\u4E0D\u540C\u5217\u7684\u663E\u793A\u3002</blockquote><table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5B57\u6BB5\u540D</th><th${_scopeId}>\u6570\u636E\u5E93\u5217\u540D</th><th${_scopeId}>\u7EC4\u4EF6</th><th${_scopeId}>\u4E1A\u52A1\u91CA\u4E49</th><th${_scopeId}>\u663E\u9690\u6761\u4EF6</th><th${_scopeId}>\u53D6\u503C/\u8D4B\u503C\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u5E8F\u53F7</td><td${_scopeId}>-</td><td${_scopeId}>TextField</td><td${_scopeId}>\u884C\u5E8F\u53F7</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>commonLineNum \u6E32\u67D3\uFF0C\u5DE6\u9501\u5B9A\u5217\uFF08lock: true\uFF09</td></tr><tr${_scopeId}><td${_scopeId}>\u5408\u540C\u7EDF\u4E00\u7F16\u53F7</td><td${_scopeId}>UNIFY_CONTRACT_CODE</td><td${_scopeId}>TextField</td><td${_scopeId}>\u5408\u540C\u7EDF\u4E00\u7F16\u53F7</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>-</td></tr><tr${_scopeId}><td${_scopeId}>\u5408\u540C\u7F16\u53F7</td><td${_scopeId}>ELECTRONIC_CONTRACT_CODE</td><td${_scopeId}>Button(link)</td><td${_scopeId}>\u5408\u540C\u4E1A\u52A1\u7F16\u53F7</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u70B9\u51FB\u8C03\u7528 \`handleRowClick\` \u8DF3\u8F6C\u8BE6\u60C5\u9875</td></tr><tr${_scopeId}><td${_scopeId}>\u6765\u6E90\u5408\u540C\u7F16\u53F7</td><td${_scopeId}>SOURCE_DOCUMENT_CODE</td><td${_scopeId}>TextField</td><td${_scopeId}>\u6765\u6E90\u5408\u540C\u7F16\u53F7</td><td${_scopeId}>\u5408\u540C\u7C7B\u578B\u4E3A \`DJ\`\uFF08\u70B9\u5C06\u5408\u540C\uFF09\u65F6\u663E\u793A</td><td${_scopeId}>-</td></tr><tr${_scopeId}><td${_scopeId}>\u5408\u540C\u7C7B\u578B</td><td${_scopeId}>CONTRACT_TYPE_NAME</td><td${_scopeId}>TextField</td><td${_scopeId}>\u5408\u540C\u7C7B\u578B\u540D\u79F0</td><td${_scopeId}>\u5408\u540C\u7C7B\u578B\u4E3A \`DJ\`\uFF08\u70B9\u5C06\u5408\u540C\uFF09\u65F6\u663E\u793A</td><td${_scopeId}>\u540E\u7AEF\u8FD4\u56DE contractTypeName</td></tr><tr${_scopeId}><td${_scopeId}>\u5408\u540C\u5E74\u5EA6</td><td${_scopeId}>CONTRACT_YEAR</td><td${_scopeId}>TextField</td><td${_scopeId}>\u5408\u540C\u5E74\u5EA6</td><td${_scopeId}>\u5408\u540C\u7C7B\u578B\u4E3A \`DISTRIBUTION\`\uFF08\u7ECF\u9500\u5408\u540C\uFF09\u65F6\u663E\u793A</td><td${_scopeId}>-</td></tr><tr${_scopeId}><td${_scopeId}>\u5B50\u5408\u540C\u7C7B\u578B</td><td${_scopeId}>CONTRACT_SUB_TYPE_NAME</td><td${_scopeId}>TextField</td><td${_scopeId}>\u5B50\u5408\u540C\u7C7B\u578B\u540D\u79F0</td><td${_scopeId}>\u5408\u540C\u7C7B\u578B\u4E3A \`DISTRIBUTION\`\uFF08\u7ECF\u9500\u5408\u540C\uFF09\u6216 \`DJ\`\uFF08\u70B9\u5C06\u5408\u540C\uFF09\u65F6\u663E\u793A</td><td${_scopeId}>\u540E\u7AEF\u8FD4\u56DE contractSubTypeName</td></tr><tr${_scopeId}><td${_scopeId}>\u7ECF\u9500\u5546</td><td${_scopeId}>AGENT_NAME</td><td${_scopeId}>TextField</td><td${_scopeId}>\u7ECF\u9500\u5546\u540D\u79F0</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>-</td></tr><tr${_scopeId}><td${_scopeId}>\u4EA4\u6613\u516C\u53F8</td><td${_scopeId}>TRADE_COMPANY_NAME</td><td${_scopeId}>TextField</td><td${_scopeId}>\u4EA4\u6613\u516C\u53F8\u540D\u79F0</td><td${_scopeId}>\u5408\u540C\u7C7B\u578B\u975E \`DJ\`\uFF08\u70B9\u5C06\u5408\u540C\uFF09\u65F6\u663E\u793A</td><td${_scopeId}>-</td></tr><tr${_scopeId}><td${_scopeId}>\u5408\u540C\u6709\u6548\u671F</td><td${_scopeId}>CONTRACT_VIOLD_TIME</td><td${_scopeId}>TextField</td><td${_scopeId}>\u5408\u540C\u6709\u6548\u671F\uFF08\u8D77-\u6B62\uFF09</td><td${_scopeId}>\u5408\u540C\u7C7B\u578B\u4E3A \`DISTRIBUTION\`\uFF08\u7ECF\u9500\u5408\u540C\uFF09\u65F6\u663E\u793A</td><td${_scopeId}>\u6E32\u67D3\u4E3A \`\${moment(beginDate).format(DEFAULT_DATE_FORMAT)} ~ \${moment(endDate).format(DEFAULT_DATE_FORMAT)}\`</td></tr><tr${_scopeId}><td${_scopeId}>\u6CD5\u4EBA\u7F16\u7801</td><td${_scopeId}>BILL_ACCT_CODE</td><td${_scopeId}>TextField</td><td${_scopeId}>\u6CD5\u4EBA\u7F16\u7801</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>-</td></tr><tr${_scopeId}><td${_scopeId}>\u6CD5\u4EBA\u540D\u79F0</td><td${_scopeId}>BILL_ACCT_NAME</td><td${_scopeId}>TextField</td><td${_scopeId}>\u6CD5\u4EBA\u540D\u79F0</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>-</td></tr><tr${_scopeId}><td${_scopeId}>\u72B6\u6001</td><td${_scopeId}>CONTRACT_STATUS_NAME</td><td${_scopeId}>TextField</td><td${_scopeId}>\u5408\u540C\u72B6\u6001\u540D\u79F0</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u540E\u7AEF\u8FD4\u56DE contractStatusName</td></tr><tr${_scopeId}><td${_scopeId}>\u521B\u5EFA\u4EBA</td><td${_scopeId}>CREATE_USER_NAME</td><td${_scopeId}>TextField</td><td${_scopeId}>\u521B\u5EFA\u4EBA</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>-</td></tr><tr${_scopeId}><td${_scopeId}>\u521B\u5EFA\u65F6\u95F4</td><td${_scopeId}>CREATE_TIME</td><td${_scopeId}>TextField</td><td${_scopeId}>\u521B\u5EFA\u65F6\u95F4</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>-</td></tr><tr${_scopeId}><td${_scopeId}>\u53D1\u8D77\u4EBA</td><td${_scopeId}>INITIATOR</td><td${_scopeId}>TextField</td><td${_scopeId}>\u53D1\u8D77\u4EBA</td><td${_scopeId}>\u5408\u540C\u7C7B\u578B\u975E \`DJ\`\uFF08\u70B9\u5C06\u5408\u540C\uFF09\u65F6\u663E\u793A</td><td${_scopeId}>-</td></tr><tr${_scopeId}><td${_scopeId}>\u53D1\u8D77\u65F6\u95F4</td><td${_scopeId}>INITIATE_TIME</td><td${_scopeId}>TextField</td><td${_scopeId}>\u53D1\u8D77\u65F6\u95F4</td><td${_scopeId}>\u5408\u540C\u7C7B\u578B\u975E \`DJ\`\uFF08\u70B9\u5C06\u5408\u540C\uFF09\u65F6\u663E\u793A</td><td${_scopeId}>-</td></tr><tr${_scopeId}><td${_scopeId}>\u5B8C\u6210\u65F6\u95F4</td><td${_scopeId}>COMPLETE_TIME</td><td${_scopeId}>TextField</td><td${_scopeId}>\u5B8C\u6210\u65F6\u95F4</td><td${_scopeId}>\u5408\u540C\u7C7B\u578B\u975E \`DJ\`\uFF08\u70B9\u5C06\u5408\u540C\uFF09\u65F6\u663E\u793A</td><td${_scopeId}>-</td></tr></tbody></table><p${_scopeId}>\u67E5\u8BE2SQL\uFF1A</p><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> EC.UNIFY_CONTRACT_CODE       </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>\u5408\u540C\u7EDF\u4E00\u7F16\u53F7</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>       EC.ELECTRONIC_CONTRACT_CODE  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>\u5408\u540C\u7F16\u53F7</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>       EC.SOURCE_DOCUMENT_CODE      </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>\u6765\u6E90\u5408\u540C\u7F16\u53F7</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>       EC.CONTRACT_TYPE_NAME        </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>\u5408\u540C\u7C7B\u578B</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>       EC.CONTRACT_YEAR             </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>\u5408\u540C\u5E74\u5EA6</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>       EC.CONTRACT_SUB_TYPE_NAME    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>\u5B50\u5408\u540C\u7C7B\u578B</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>       EC.AGENT_NAME                </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>\u7ECF\u9500\u5546</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>       EC.TRADE_COMPANY_NAME        </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>\u4EA4\u6613\u516C\u53F8</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>       EC.CONTRACT_VIOLD_TIME       </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>\u5408\u540C\u6709\u6548\u671F</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>       EC.BILL_ACCT_CODE            </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>\u6CD5\u4EBA\u7F16\u7801</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>       EC.BILL_ACCT_NAME            </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>\u6CD5\u4EBA\u540D\u79F0</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>       EC.CONTRACT_STATUS_NAME      </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>\u72B6\u6001</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>       EC.CREATE_USER_NAME          </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>\u521B\u5EFA\u4EBA</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>       TO_CHAR(EC.CREATE_TIME,</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>YYYY-MM-DD HH24:MI:SS</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>\u521B\u5EFA\u65F6\u95F4</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>       EC.INITIATOR                 </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>\u53D1\u8D77\u4EBA</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>       TO_CHAR(EC.INITIATE_TIME,</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>YYYY-MM-DD HH24:MI:SS</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>\u53D1\u8D77\u65F6\u95F4</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>       TO_CHAR(EC.COMPLETE_TIME,</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>YYYY-MM-DD HH24:MI:SS</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>\u5B8C\u6210\u65F6\u95F4</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> ELECTRONIC_CONTRACT EC</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> EC.AGENT_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> :currentAgentId</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> EC.CONTRACT_TYPE </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> :contractType</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (:electronicContractCode </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>OR</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> EC.ELECTRONIC_CONTRACT_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>LIKE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>%</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>||</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> :electronicContractCode </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>||</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>%</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (:</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>status</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>OR</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> EC.CONTRACT_STATUS </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> :</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>status</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (:initiateTimeStart </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>OR</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> EC.INITIATE_TIME </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> TO_DATE(:initiateTimeStart, </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>YYYY-MM-DD</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>))</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (:initiateTimeEnd </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>OR</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> EC.INITIATE_TIME </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&lt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> TO_DATE(:initiateTimeEnd, </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>YYYY-MM-DD</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>+</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>1</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ORDER BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> EC.CREATE_TIME </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>DESC</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div>`);
      } else {
        return [
          createVNode("h4", null, "\u67E5\u8BE2\u6761\u4EF6"),
          createVNode("blockquote", null, [
            createTextVNode("\u524D\u7AEF\u4EE3\u7801\uFF1A"),
            createVNode("code", null, "contract/management/stores/listConfig.tsx"),
            createTextVNode(" \u7684 "),
            createVNode("code", null, "listDS.queryFields"),
            createTextVNode("\u3002DataSet \u901A\u8FC7 "),
            createVNode("code", null, "transport.read"),
            createTextVNode(" \u8C03\u7528 "),
            createVNode("code", null, "contractManagementApi.query"),
            createTextVNode("\uFF08POST "),
            createVNode("code", null, "ch/contract/process/pageForAgent"),
            createTextVNode("\uFF09\u3002\u9875\u9762\u901A\u8FC7 "),
            createVNode("code", null, "Tabs"),
            createTextVNode(" \u5207\u6362\u4E0D\u540C\u5408\u540C\u7C7B\u578B\uFF0C\u5207\u6362\u65F6\u8BBE\u7F6E "),
            createVNode("code", null, "setQueryParameter('contractType', key)"),
            createTextVNode(" \u540E\u91CD\u65B0\u67E5\u8BE2\u3002")
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
                createVNode("td", null, "\u6309\u5408\u540C\u7F16\u53F7\u67E5\u8BE2"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u624B\u52A8\u8F93\u5165\uFF0C\u6A21\u7CCA\u67E5\u8BE2")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7B7E\u7F72\u72B6\u6001"),
                createVNode("td", null, "STATUS"),
                createVNode("td", null, "Select"),
                createVNode("td", null, "\u6309\u7B7E\u7F72\u72B6\u6001\u7B5B\u9009"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, `options: contractStatusDS\uFF0C\u5305\u542B"\u672A\u5904\u7406"\uFF08value='waiting_seal'\uFF09\u548C"\u5DF2\u5904\u7406"\uFF08value=''\uFF09\uFF0CdefaultValue: 'waiting_seal'`)
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5408\u540C\u53D1\u8D77\u65E5\u671F"),
                createVNode("td", null, "INITIATE_TIME"),
                createVNode("td", null, "DatePicker(range)"),
                createVNode("td", null, "\u6309\u5408\u540C\u53D1\u8D77\u65E5\u671F\u8303\u56F4\u67E5\u8BE2"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "range: ['initiateTimeStart', 'initiateTimeEnd']\uFF0CdefaultValue: \u5F53\u6708\u8D77\u6B62\u65F6\u95F4\uFF08initiateTimeDefaultValue\uFF09\uFF0CDJ\u7C7B\u578B\u65F6disabled\u4E14\u6E05\u7A7A")
              ])
            ])
          ]),
          createVNode("h4", null, "\u5217\u8868\u8868\u683C"),
          createVNode("blockquote", null, [
            createTextVNode("\u524D\u7AEF\u4EE3\u7801\uFF1A"),
            createVNode("code", null, "contract/management/stores/listConfig.tsx"),
            createTextVNode(" \u7684 "),
            createVNode("code", null, "listDScolumns"),
            createTextVNode("\u3002Table \u4F7F\u7528 "),
            createVNode("code", null, "queryBar={TableQueryBarType.professionalBar}"),
            createTextVNode("\uFF0C"),
            createVNode("code", null, 'customizedCode="column-group"'),
            createTextVNode("\u3002\u5217\u6839\u636E\u5F53\u524D\u6FC0\u6D3B\u7684\u5408\u540C\u7C7B\u578B\uFF08activeTab\uFF09\u52A8\u6001\u663E\u9690\uFF1A"),
            createVNode("code", null, "isDistribution"),
            createTextVNode("\uFF08\u7ECF\u9500\u5408\u540C\uFF09\u3001"),
            createVNode("code", null, "isDJ"),
            createTextVNode("\uFF08\u70B9\u5C06\u5408\u540C\uFF09\u63A7\u5236\u4E0D\u540C\u5217\u7684\u663E\u793A\u3002")
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
                createVNode("td", null, "\u5E8F\u53F7"),
                createVNode("td", null, "-"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u884C\u5E8F\u53F7"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "commonLineNum \u6E32\u67D3\uFF0C\u5DE6\u9501\u5B9A\u5217\uFF08lock: true\uFF09")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5408\u540C\u7EDF\u4E00\u7F16\u53F7"),
                createVNode("td", null, "UNIFY_CONTRACT_CODE"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u5408\u540C\u7EDF\u4E00\u7F16\u53F7"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "-")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5408\u540C\u7F16\u53F7"),
                createVNode("td", null, "ELECTRONIC_CONTRACT_CODE"),
                createVNode("td", null, "Button(link)"),
                createVNode("td", null, "\u5408\u540C\u4E1A\u52A1\u7F16\u53F7"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u70B9\u51FB\u8C03\u7528 `handleRowClick` \u8DF3\u8F6C\u8BE6\u60C5\u9875")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6765\u6E90\u5408\u540C\u7F16\u53F7"),
                createVNode("td", null, "SOURCE_DOCUMENT_CODE"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u6765\u6E90\u5408\u540C\u7F16\u53F7"),
                createVNode("td", null, "\u5408\u540C\u7C7B\u578B\u4E3A `DJ`\uFF08\u70B9\u5C06\u5408\u540C\uFF09\u65F6\u663E\u793A"),
                createVNode("td", null, "-")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5408\u540C\u7C7B\u578B"),
                createVNode("td", null, "CONTRACT_TYPE_NAME"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u5408\u540C\u7C7B\u578B\u540D\u79F0"),
                createVNode("td", null, "\u5408\u540C\u7C7B\u578B\u4E3A `DJ`\uFF08\u70B9\u5C06\u5408\u540C\uFF09\u65F6\u663E\u793A"),
                createVNode("td", null, "\u540E\u7AEF\u8FD4\u56DE contractTypeName")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5408\u540C\u5E74\u5EA6"),
                createVNode("td", null, "CONTRACT_YEAR"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u5408\u540C\u5E74\u5EA6"),
                createVNode("td", null, "\u5408\u540C\u7C7B\u578B\u4E3A `DISTRIBUTION`\uFF08\u7ECF\u9500\u5408\u540C\uFF09\u65F6\u663E\u793A"),
                createVNode("td", null, "-")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5B50\u5408\u540C\u7C7B\u578B"),
                createVNode("td", null, "CONTRACT_SUB_TYPE_NAME"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u5B50\u5408\u540C\u7C7B\u578B\u540D\u79F0"),
                createVNode("td", null, "\u5408\u540C\u7C7B\u578B\u4E3A `DISTRIBUTION`\uFF08\u7ECF\u9500\u5408\u540C\uFF09\u6216 `DJ`\uFF08\u70B9\u5C06\u5408\u540C\uFF09\u65F6\u663E\u793A"),
                createVNode("td", null, "\u540E\u7AEF\u8FD4\u56DE contractSubTypeName")
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
                createVNode("td", null, "\u4EA4\u6613\u516C\u53F8"),
                createVNode("td", null, "TRADE_COMPANY_NAME"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u4EA4\u6613\u516C\u53F8\u540D\u79F0"),
                createVNode("td", null, "\u5408\u540C\u7C7B\u578B\u975E `DJ`\uFF08\u70B9\u5C06\u5408\u540C\uFF09\u65F6\u663E\u793A"),
                createVNode("td", null, "-")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5408\u540C\u6709\u6548\u671F"),
                createVNode("td", null, "CONTRACT_VIOLD_TIME"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u5408\u540C\u6709\u6548\u671F\uFF08\u8D77-\u6B62\uFF09"),
                createVNode("td", null, "\u5408\u540C\u7C7B\u578B\u4E3A `DISTRIBUTION`\uFF08\u7ECF\u9500\u5408\u540C\uFF09\u65F6\u663E\u793A"),
                createVNode("td", null, "\u6E32\u67D3\u4E3A `${moment(beginDate).format(DEFAULT_DATE_FORMAT)} ~ ${moment(endDate).format(DEFAULT_DATE_FORMAT)}`")
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
                createVNode("td", null, "\u521B\u5EFA\u4EBA"),
                createVNode("td", null, "CREATE_USER_NAME"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u521B\u5EFA\u4EBA"),
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
                createVNode("td", null, "\u5408\u540C\u7C7B\u578B\u975E `DJ`\uFF08\u70B9\u5C06\u5408\u540C\uFF09\u65F6\u663E\u793A"),
                createVNode("td", null, "-")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u53D1\u8D77\u65F6\u95F4"),
                createVNode("td", null, "INITIATE_TIME"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u53D1\u8D77\u65F6\u95F4"),
                createVNode("td", null, "\u5408\u540C\u7C7B\u578B\u975E `DJ`\uFF08\u70B9\u5C06\u5408\u540C\uFF09\u65F6\u663E\u793A"),
                createVNode("td", null, "-")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5B8C\u6210\u65F6\u95F4"),
                createVNode("td", null, "COMPLETE_TIME"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u5B8C\u6210\u65F6\u95F4"),
                createVNode("td", null, "\u5408\u540C\u7C7B\u578B\u975E `DJ`\uFF08\u70B9\u5C06\u5408\u540C\uFF09\u65F6\u663E\u793A"),
                createVNode("td", null, "-")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "       EC.CONTRACT_YEAR             "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "\u5408\u540C\u5E74\u5EA6"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "       EC.CONTRACT_SUB_TYPE_NAME    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "\u5B50\u5408\u540C\u7C7B\u578B"),
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "       EC.CONTRACT_VIOLD_TIME       "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "\u5408\u540C\u6709\u6548\u671F"),
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "       EC.CREATE_USER_NAME          "),
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " EC.AGENT_ID "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " :currentAgentId")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " EC.CONTRACT_TYPE "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " :contractType")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " (:initiateTimeStart "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NULL"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "OR"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " EC.INITIATE_TIME "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, ">="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " TO_DATE(:initiateTimeStart, "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "YYYY-MM-DD"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "))")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " (:initiateTimeEnd "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NULL"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "OR"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " EC.INITIATE_TIME "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " TO_DATE(:initiateTimeEnd, "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "YYYY-MM-DD"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "+"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "1"),
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
  _push(ssrRenderComponent(_component_KbCard, { title: "\u6807\u7B7E\u9875\uFF08Tabs\uFF09" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<blockquote${_scopeId}>\u524D\u7AEF\u4EE3\u7801\uFF1A<code${_scopeId}>contract/management/list.tsx</code> \u7684 <code${_scopeId}>tableTabs</code> + <code${_scopeId}>handleChangeTab</code>\u3002\u9875\u9762\u901A\u8FC7 <code${_scopeId}>Tabs</code> \u7EC4\u4EF6\u5207\u6362\u4E0D\u540C\u5408\u540C\u7C7B\u578B\uFF0C\u5207\u6362\u65F6\u8C03\u7528 <code${_scopeId}>handleChangeTab</code> \u91CD\u65B0\u67E5\u8BE2\u5217\u8868\u3002</blockquote><table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u6807\u7B7E\u9875\u540D\u79F0</th><th${_scopeId}>\u5408\u540C\u7C7B\u578B key</th><th${_scopeId}>\u8BF4\u660E</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u7ECF\u9500\u5408\u540C</td><td${_scopeId}>DISTRIBUTION</td><td${_scopeId}>\u7ECF\u9500\u5408\u540C\u5217\u8868</td></tr><tr${_scopeId}><td${_scopeId}>\u88C5\u4FEE\u534F\u8BAE</td><td${_scopeId}>DECORATION</td><td${_scopeId}>\u88C5\u4FEE\u534F\u8BAE\u5217\u8868</td></tr><tr${_scopeId}><td${_scopeId}>\u5E7F\u544A\u534F\u8BAE</td><td${_scopeId}>ADVERTISING</td><td${_scopeId}>\u5E7F\u544A\u534F\u8BAE\u5217\u8868</td></tr><tr${_scopeId}><td${_scopeId}>\u70B9\u5C06\u5408\u540C</td><td${_scopeId}>DJ</td><td${_scopeId}>\u70B9\u5C06\u5408\u540C\u5217\u8868\uFF08\u8BBE\u8BA1/\u6D3B\u52A8/\u7279\u8BAD\u8425\uFF09</td></tr></tbody></table><h4${_scopeId}>\u6807\u7B7E\u9875\u5207\u6362\u903B\u8F91</h4><p${_scopeId}>1. \u70B9\u51FB\u6807\u7B7E\u9875\u8C03\u7528 <code${_scopeId}>handleChangeTab(key)</code></p><p${_scopeId}>2. <code${_scopeId}>setActiveTab(key)</code> \u8BBE\u7F6E\u5F53\u524D\u6FC0\u6D3B\u6807\u7B7E\u9875</p><p${_scopeId}>3. <code${_scopeId}>tableDS?.queryDataSet?.getField(&#39;initiateTime&#39;)?.set(&#39;disabled&#39;, isDJ)</code> \u6839\u636E\u5408\u540C\u7C7B\u578B\u7981\u7528/\u542F\u7528\u5408\u540C\u53D1\u8D77\u65E5\u671F\u67E5\u8BE2\u5B57\u6BB5\uFF08DJ\u7C7B\u578B\u65F6\u7981\u7528\uFF09</p><p${_scopeId}>4. <code${_scopeId}>tableDS?.queryDataSet?.current?.set(&#39;initiateTime&#39;, isDJ ? undefined : initiateTimeDefaultValue)</code> \u8BBE\u7F6E\u5408\u540C\u53D1\u8D77\u65E5\u671F\u9ED8\u8BA4\u503C\uFF08DJ\u7C7B\u578B\u65F6\u6E05\u7A7A\uFF0C\u5176\u4ED6\u7C7B\u578B\u8BBE\u7F6E\u4E3A\u5F53\u6708\u8D77\u6B62\u65F6\u95F4\uFF09</p><p${_scopeId}>5. <code${_scopeId}>tableDS.setQueryParameter(&#39;contractType&#39;, key)</code> \u8BBE\u7F6E\u67E5\u8BE2\u53C2\u6570 contractType</p><p${_scopeId}>6. <code${_scopeId}>tableDS.query()</code> \u91CD\u65B0\u67E5\u8BE2\u5217\u8868</p>`);
      } else {
        return [
          createVNode("blockquote", null, [
            createTextVNode("\u524D\u7AEF\u4EE3\u7801\uFF1A"),
            createVNode("code", null, "contract/management/list.tsx"),
            createTextVNode(" \u7684 "),
            createVNode("code", null, "tableTabs"),
            createTextVNode(" + "),
            createVNode("code", null, "handleChangeTab"),
            createTextVNode("\u3002\u9875\u9762\u901A\u8FC7 "),
            createVNode("code", null, "Tabs"),
            createTextVNode(" \u7EC4\u4EF6\u5207\u6362\u4E0D\u540C\u5408\u540C\u7C7B\u578B\uFF0C\u5207\u6362\u65F6\u8C03\u7528 "),
            createVNode("code", null, "handleChangeTab"),
            createTextVNode(" \u91CD\u65B0\u67E5\u8BE2\u5217\u8868\u3002")
          ]),
          createVNode("table", { class: "kb-field-tbl" }, [
            createVNode("thead", null, [
              createVNode("tr", null, [
                createVNode("th", null, "\u6807\u7B7E\u9875\u540D\u79F0"),
                createVNode("th", null, "\u5408\u540C\u7C7B\u578B key"),
                createVNode("th", null, "\u8BF4\u660E")
              ])
            ]),
            createVNode("tbody", null, [
              createVNode("tr", null, [
                createVNode("td", null, "\u7ECF\u9500\u5408\u540C"),
                createVNode("td", null, "DISTRIBUTION"),
                createVNode("td", null, "\u7ECF\u9500\u5408\u540C\u5217\u8868")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u88C5\u4FEE\u534F\u8BAE"),
                createVNode("td", null, "DECORATION"),
                createVNode("td", null, "\u88C5\u4FEE\u534F\u8BAE\u5217\u8868")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5E7F\u544A\u534F\u8BAE"),
                createVNode("td", null, "ADVERTISING"),
                createVNode("td", null, "\u5E7F\u544A\u534F\u8BAE\u5217\u8868")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u70B9\u5C06\u5408\u540C"),
                createVNode("td", null, "DJ"),
                createVNode("td", null, "\u70B9\u5C06\u5408\u540C\u5217\u8868\uFF08\u8BBE\u8BA1/\u6D3B\u52A8/\u7279\u8BAD\u8425\uFF09")
              ])
            ])
          ]),
          createVNode("h4", null, "\u6807\u7B7E\u9875\u5207\u6362\u903B\u8F91"),
          createVNode("p", null, [
            createTextVNode("1. \u70B9\u51FB\u6807\u7B7E\u9875\u8C03\u7528 "),
            createVNode("code", null, "handleChangeTab(key)")
          ]),
          createVNode("p", null, [
            createTextVNode("2. "),
            createVNode("code", null, "setActiveTab(key)"),
            createTextVNode(" \u8BBE\u7F6E\u5F53\u524D\u6FC0\u6D3B\u6807\u7B7E\u9875")
          ]),
          createVNode("p", null, [
            createTextVNode("3. "),
            createVNode("code", null, "tableDS?.queryDataSet?.getField('initiateTime')?.set('disabled', isDJ)"),
            createTextVNode(" \u6839\u636E\u5408\u540C\u7C7B\u578B\u7981\u7528/\u542F\u7528\u5408\u540C\u53D1\u8D77\u65E5\u671F\u67E5\u8BE2\u5B57\u6BB5\uFF08DJ\u7C7B\u578B\u65F6\u7981\u7528\uFF09")
          ]),
          createVNode("p", null, [
            createTextVNode("4. "),
            createVNode("code", null, "tableDS?.queryDataSet?.current?.set('initiateTime', isDJ ? undefined : initiateTimeDefaultValue)"),
            createTextVNode(" \u8BBE\u7F6E\u5408\u540C\u53D1\u8D77\u65E5\u671F\u9ED8\u8BA4\u503C\uFF08DJ\u7C7B\u578B\u65F6\u6E05\u7A7A\uFF0C\u5176\u4ED6\u7C7B\u578B\u8BBE\u7F6E\u4E3A\u5F53\u6708\u8D77\u6B62\u65F6\u95F4\uFF09")
          ]),
          createVNode("p", null, [
            createTextVNode("5. "),
            createVNode("code", null, "tableDS.setQueryParameter('contractType', key)"),
            createTextVNode(" \u8BBE\u7F6E\u67E5\u8BE2\u53C2\u6570 contractType")
          ]),
          createVNode("p", null, [
            createTextVNode("6. "),
            createVNode("code", null, "tableDS.query()"),
            createTextVNode(" \u91CD\u65B0\u67E5\u8BE2\u5217\u8868")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, { title: "\u884C\u70B9\u51FB\u8DF3\u8F6C\u8BE6\u60C5\u9875" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<blockquote${_scopeId}>\u524D\u7AEF\u4EE3\u7801\uFF1A<code${_scopeId}>contract/management/list.tsx</code> \u7684 <code${_scopeId}>handleRowClick</code>\u3002\u70B9\u51FB\u5408\u540C\u7F16\u53F7\u5217\u8C03\u7528 <code${_scopeId}>handleRowClick(record)</code>\uFF0C\u6839\u636E\u5F53\u524D\u6FC0\u6D3B\u7684\u6807\u7B7E\u9875\uFF08\u5408\u540C\u7C7B\u578B\uFF09\u8DF3\u8F6C\u4E0D\u540C\u8BE6\u60C5\u9875\u3002\u8DF3\u8F6C\u65F6\u4F20\u5165 <code${_scopeId}>state: { from: &#39;dealer&#39;, applyCode: record?.get(&#39;sourceDocumentCode&#39;) }</code>\u3002</blockquote><table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5408\u540C\u7C7B\u578B</th><th${_scopeId}>\u8DF3\u8F6C\u8DEF\u5F84</th><th${_scopeId}>\u8BF4\u660E</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>DISTRIBUTION\uFF08\u7ECF\u9500\u5408\u540C\uFF09</td><td${_scopeId}>\`/contract/distribution/detail/{electronicContractId}\`</td><td${_scopeId}>\u7ECF\u9500\u5408\u540C\u8BE6\u60C5\u9875</td></tr><tr${_scopeId}><td${_scopeId}>DECORATION\uFF08\u88C5\u4FEE\u534F\u8BAE\uFF09</td><td${_scopeId}>\`/contract/decoration/detail/{electronicContractId}\`</td><td${_scopeId}>\u88C5\u4FEE\u534F\u8BAE\u8BE6\u60C5\u9875</td></tr><tr${_scopeId}><td${_scopeId}>ADVERTISING\uFF08\u5E7F\u544A\u534F\u8BAE\uFF09</td><td${_scopeId}>\`/contract/advertising/detail/{electronicContractId}\`</td><td${_scopeId}>\u5E7F\u544A\u534F\u8BAE\u8BE6\u60C5\u9875</td></tr><tr${_scopeId}><td${_scopeId}>DJ\uFF08\u70B9\u5C06\u5408\u540C\uFF09</td><td${_scopeId}>\u6839\u636E\u5408\u540C\u5B50\u7C7B\u578B\u8DF3\u8F6C</td><td${_scopeId}>\u89C1\u4E0B\u8868</td></tr></tbody></table><table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5408\u540C\u5B50\u7C7B\u578B</th><th${_scopeId}>\u8DF3\u8F6C\u8DEF\u5F84</th><th${_scopeId}>\u8BF4\u660E</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>design_apply / design_settle</td><td${_scopeId}>\`/contract/dj/design/detail/{electronicContractId}\`</td><td${_scopeId}>\u8BBE\u8BA1\u70B9\u5C06\u8BE6\u60C5\u9875</td></tr><tr${_scopeId}><td${_scopeId}>camp_apply / camp_settle</td><td${_scopeId}>\`/contract/dj/camp/detail/{electronicContractId}\`</td><td${_scopeId}>\u7279\u8BAD\u8425\u70B9\u5C06\u8BE6\u60C5\u9875</td></tr><tr${_scopeId}><td${_scopeId}>activity_apply / activity_settle</td><td${_scopeId}>\`/contract/dj/activity/detail/{electronicContractId}\`</td><td${_scopeId}>\u6D3B\u52A8\u70B9\u5C06\u8BE6\u60C5\u9875</td></tr></tbody></table>`);
      } else {
        return [
          createVNode("blockquote", null, [
            createTextVNode("\u524D\u7AEF\u4EE3\u7801\uFF1A"),
            createVNode("code", null, "contract/management/list.tsx"),
            createTextVNode(" \u7684 "),
            createVNode("code", null, "handleRowClick"),
            createTextVNode("\u3002\u70B9\u51FB\u5408\u540C\u7F16\u53F7\u5217\u8C03\u7528 "),
            createVNode("code", null, "handleRowClick(record)"),
            createTextVNode("\uFF0C\u6839\u636E\u5F53\u524D\u6FC0\u6D3B\u7684\u6807\u7B7E\u9875\uFF08\u5408\u540C\u7C7B\u578B\uFF09\u8DF3\u8F6C\u4E0D\u540C\u8BE6\u60C5\u9875\u3002\u8DF3\u8F6C\u65F6\u4F20\u5165 "),
            createVNode("code", null, "state: { from: 'dealer', applyCode: record?.get('sourceDocumentCode') }"),
            createTextVNode("\u3002")
          ]),
          createVNode("table", { class: "kb-field-tbl" }, [
            createVNode("thead", null, [
              createVNode("tr", null, [
                createVNode("th", null, "\u5408\u540C\u7C7B\u578B"),
                createVNode("th", null, "\u8DF3\u8F6C\u8DEF\u5F84"),
                createVNode("th", null, "\u8BF4\u660E")
              ])
            ]),
            createVNode("tbody", null, [
              createVNode("tr", null, [
                createVNode("td", null, "DISTRIBUTION\uFF08\u7ECF\u9500\u5408\u540C\uFF09"),
                createVNode("td", null, "`/contract/distribution/detail/{electronicContractId}`"),
                createVNode("td", null, "\u7ECF\u9500\u5408\u540C\u8BE6\u60C5\u9875")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "DECORATION\uFF08\u88C5\u4FEE\u534F\u8BAE\uFF09"),
                createVNode("td", null, "`/contract/decoration/detail/{electronicContractId}`"),
                createVNode("td", null, "\u88C5\u4FEE\u534F\u8BAE\u8BE6\u60C5\u9875")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "ADVERTISING\uFF08\u5E7F\u544A\u534F\u8BAE\uFF09"),
                createVNode("td", null, "`/contract/advertising/detail/{electronicContractId}`"),
                createVNode("td", null, "\u5E7F\u544A\u534F\u8BAE\u8BE6\u60C5\u9875")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "DJ\uFF08\u70B9\u5C06\u5408\u540C\uFF09"),
                createVNode("td", null, "\u6839\u636E\u5408\u540C\u5B50\u7C7B\u578B\u8DF3\u8F6C"),
                createVNode("td", null, "\u89C1\u4E0B\u8868")
              ])
            ])
          ]),
          createVNode("table", { class: "kb-field-tbl" }, [
            createVNode("thead", null, [
              createVNode("tr", null, [
                createVNode("th", null, "\u5408\u540C\u5B50\u7C7B\u578B"),
                createVNode("th", null, "\u8DF3\u8F6C\u8DEF\u5F84"),
                createVNode("th", null, "\u8BF4\u660E")
              ])
            ]),
            createVNode("tbody", null, [
              createVNode("tr", null, [
                createVNode("td", null, "design_apply / design_settle"),
                createVNode("td", null, "`/contract/dj/design/detail/{electronicContractId}`"),
                createVNode("td", null, "\u8BBE\u8BA1\u70B9\u5C06\u8BE6\u60C5\u9875")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "camp_apply / camp_settle"),
                createVNode("td", null, "`/contract/dj/camp/detail/{electronicContractId}`"),
                createVNode("td", null, "\u7279\u8BAD\u8425\u70B9\u5C06\u8BE6\u60C5\u9875")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "activity_apply / activity_settle"),
                createVNode("td", null, "`/contract/dj/activity/detail/{electronicContractId}`"),
                createVNode("td", null, "\u6D3B\u52A8\u70B9\u5C06\u8BE6\u60C5\u9875")
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
        _push2(`<blockquote${_scopeId}>\u524D\u7AEF\u4EE3\u7801\uFF1A<code${_scopeId}>contract/management/list.tsx</code> \u7684 <code${_scopeId}>getHeaderButtons</code>\u3002\u5934\u90E8\u6309\u94AE\u901A\u8FC7 <code${_scopeId}>Header</code> \u7EC4\u4EF6\u6E32\u67D3\u3002</blockquote><table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u6309\u94AE\u540D\u79F0</th><th${_scopeId}>\u6240\u5728\u4F4D\u7F6E</th><th${_scopeId}>\u663E\u9690\u6761\u4EF6</th><th${_scopeId}>\u6743\u9650\u7801</th><th${_scopeId}>\u529F\u80FD\u8BF4\u660E</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u6CD5\u5927\u5927\u95E8\u6237</td><td${_scopeId}>\u5934\u90E8\u6309\u94AE</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>-</td><td${_scopeId}>\u8C03\u7528 \`handleOpenFDD\`\uFF08\u6765\u81EA \`useFDD\` hook\uFF09\u6253\u5F00\u6CD5\u5927\u5927\u95E8\u6237</td></tr></tbody></table><h4${_scopeId}>\u6309\u94AE1\uFF1A\u6CD5\u5927\u5927\u95E8\u6237\uFF08\u5934\u90E8\u6309\u94AE\uFF09</h4><p${_scopeId}>\u59CB\u7EC8\u663E\u793A\uFF0C\u70B9\u51FB\u540E\u8C03\u7528 <code${_scopeId}>handleOpenFDD</code>\uFF08\u6765\u81EA <code${_scopeId}>useFDD</code> hook\uFF09\u6253\u5F00\u6CD5\u5927\u5927\u95E8\u6237\u3002\u6CD5\u5927\u5927\u95E8\u6237\u7528\u4E8E\u7ECF\u9500\u5546\u8FDB\u884C\u7535\u5B50\u7B7E\u7AE0\u5B9E\u540D\u8BA4\u8BC1\u3001\u7B7E\u7F72\u5408\u540C\u7B49\u64CD\u4F5C\u3002</p>`);
      } else {
        return [
          createVNode("blockquote", null, [
            createTextVNode("\u524D\u7AEF\u4EE3\u7801\uFF1A"),
            createVNode("code", null, "contract/management/list.tsx"),
            createTextVNode(" \u7684 "),
            createVNode("code", null, "getHeaderButtons"),
            createTextVNode("\u3002\u5934\u90E8\u6309\u94AE\u901A\u8FC7 "),
            createVNode("code", null, "Header"),
            createTextVNode(" \u7EC4\u4EF6\u6E32\u67D3\u3002")
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
                createVNode("td", null, "\u6CD5\u5927\u5927\u95E8\u6237"),
                createVNode("td", null, "\u5934\u90E8\u6309\u94AE"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u8C03\u7528 `handleOpenFDD`\uFF08\u6765\u81EA `useFDD` hook\uFF09\u6253\u5F00\u6CD5\u5927\u5927\u95E8\u6237")
              ])
            ])
          ]),
          createVNode("h4", null, "\u6309\u94AE1\uFF1A\u6CD5\u5927\u5927\u95E8\u6237\uFF08\u5934\u90E8\u6309\u94AE\uFF09"),
          createVNode("p", null, [
            createTextVNode("\u59CB\u7EC8\u663E\u793A\uFF0C\u70B9\u51FB\u540E\u8C03\u7528 "),
            createVNode("code", null, "handleOpenFDD"),
            createTextVNode("\uFF08\u6765\u81EA "),
            createVNode("code", null, "useFDD"),
            createTextVNode(" hook\uFF09\u6253\u5F00\u6CD5\u5927\u5927\u95E8\u6237\u3002\u6CD5\u5927\u5927\u95E8\u6237\u7528\u4E8E\u7ECF\u9500\u5546\u8FDB\u884C\u7535\u5B50\u7B7E\u7AE0\u5B9E\u540D\u8BA4\u8BC1\u3001\u7B7E\u7F72\u5408\u540C\u7B49\u64CD\u4F5C\u3002")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, { title: "\u4FDD\u5B58/\u63D0\u4EA4\u6821\u9A8C" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}>\u6821\u9A8C1\uFF1A\u7B7E\u7F72\u524D\u9700\u52FE\u9009\u540C\u610F\u5408\u540C\u6761\u6B3E \u2014\u2014 \u786E\u4FDD\u7ECF\u9500\u5546\u5DF2\u786E\u8BA4\u5408\u4F5C\u6761\u6B3E</li><li${_scopeId}>\u6821\u9A8C2\uFF1A\u62D2\u7B7E\u65F6\u62D2\u7B7E\u539F\u56E0\u5FC5\u586B \u2014\u2014 \u786E\u4FDD\u62D2\u7B7E\u539F\u56E0\u53EF\u8FFD\u6EAF</li><li${_scopeId}>\u6821\u9A8C3\uFF1A\u7B7E\u7F72\u65F6\u7535\u5B50\u7B7E\u7AE0\u670D\u52A1\u53EF\u7528 \u2014\u2014 \u786E\u4FDD\u7B7E\u7F72\u670D\u52A1\u6B63\u5E38</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, "\u6821\u9A8C1\uFF1A\u7B7E\u7F72\u524D\u9700\u52FE\u9009\u540C\u610F\u5408\u540C\u6761\u6B3E \u2014\u2014 \u786E\u4FDD\u7ECF\u9500\u5546\u5DF2\u786E\u8BA4\u5408\u4F5C\u6761\u6B3E"),
            createVNode("li", null, "\u6821\u9A8C2\uFF1A\u62D2\u7B7E\u65F6\u62D2\u7B7E\u539F\u56E0\u5FC5\u586B \u2014\u2014 \u786E\u4FDD\u62D2\u7B7E\u539F\u56E0\u53EF\u8FFD\u6EAF"),
            createVNode("li", null, "\u6821\u9A8C3\uFF1A\u7B7E\u7F72\u65F6\u7535\u5B50\u7B7E\u7AE0\u670D\u52A1\u53EF\u7528 \u2014\u2014 \u786E\u4FDD\u7B7E\u7F72\u670D\u52A1\u6B63\u5E38")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, { title: "\u72B6\u6001\u673A" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>[\u54C1\u724C\u65B9\u53D1\u8D77\u7B7E\u7F72] </span><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>--\u63A8\u9001--&gt; [\u5F85\u7B7E\u7F72(waiting_sign)]</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>                                |</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>                      </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>+</span><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>---------+---------+</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>                      v                   v</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>                [\u7ECF\u9500\u5546\u7B7E\u7F72]          [\u7ECF\u9500\u5546\u62D2\u7B7E]</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>                      |                   |</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>                      v                   v</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>              [\u5DF2\u7B7E\u7F72(signed)]     [\u62D2\u7B7E(refuse_seal)]</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>                      |                   |</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>                      v                   v</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>              [\u54C1\u724C\u65B9\u7EE7\u7EED\u5904\u7406]     [\u54C1\u724C\u65B9\u5F02\u5E38\u5904\u7406]</span></span>
<span class="line"${_scopeId}></span></code></pre></div><table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u72B6\u6001</th><th${_scopeId}>\u72B6\u6001\u8BF4\u660E</th><th${_scopeId}>\u7ECF\u9500\u5546\u53EF\u6267\u884C\u64CD\u4F5C</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>temporary</td><td${_scopeId}>\u4E34\u65F6/\u8349\u7A3F</td><td${_scopeId}>\u65E0(\u54C1\u724C\u65B9\u7F16\u8F91\u4E2D)</td></tr><tr${_scopeId}><td${_scopeId}>waiting_sign</td><td${_scopeId}>\u5F85\u7B7E\u7F72</td><td${_scopeId}>\u7B7E\u7F72\u5408\u540C\u3001\u67E5\u770B\u8BE6\u60C5</td></tr><tr${_scopeId}><td${_scopeId}>signed</td><td${_scopeId}>\u5DF2\u7B7E\u7F72</td><td${_scopeId}>\u67E5\u770B\u8BE6\u60C5\u3001\u4E0B\u8F7D\u5408\u540C</td></tr><tr${_scopeId}><td${_scopeId}>refuse_seal</td><td${_scopeId}>\u62D2\u7B7E</td><td${_scopeId}>\u67E5\u770B\u8BE6\u60C5</td></tr><tr${_scopeId}><td${_scopeId}>completed</td><td${_scopeId}>\u5DF2\u5B8C\u6210</td><td${_scopeId}>\u67E5\u770B\u8BE6\u60C5\u3001\u4E0B\u8F7D\u5408\u540C</td></tr><tr${_scopeId}><td${_scopeId}>reject_oa</td><td${_scopeId}>OA\u9A73\u56DE</td><td${_scopeId}>\u67E5\u770B\u8BE6\u60C5</td></tr><tr${_scopeId}><td${_scopeId}>pending</td><td${_scopeId}>OA\u5BA1\u6279\u4E2D</td><td${_scopeId}>\u67E5\u770B\u8BE6\u60C5</td></tr></tbody></table>`);
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "[\u54C1\u724C\u65B9\u53D1\u8D77\u7B7E\u7F72] "),
                  createVNode("span", { style: { "color": "#676E95" } }, "--\u63A8\u9001--> [\u5F85\u7B7E\u7F72(waiting_sign)]")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "                                |")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "                      "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "+"),
                  createVNode("span", { style: { "color": "#676E95" } }, "---------+---------+")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "                      v                   v")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "                [\u7ECF\u9500\u5546\u7B7E\u7F72]          [\u7ECF\u9500\u5546\u62D2\u7B7E]")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "                      |                   |")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "                      v                   v")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "              [\u5DF2\u7B7E\u7F72(signed)]     [\u62D2\u7B7E(refuse_seal)]")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "                      |                   |")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "                      v                   v")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "              [\u54C1\u724C\u65B9\u7EE7\u7EED\u5904\u7406]     [\u54C1\u724C\u65B9\u5F02\u5E38\u5904\u7406]")
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
                createVNode("th", null, "\u7ECF\u9500\u5546\u53EF\u6267\u884C\u64CD\u4F5C")
              ])
            ]),
            createVNode("tbody", null, [
              createVNode("tr", null, [
                createVNode("td", null, "temporary"),
                createVNode("td", null, "\u4E34\u65F6/\u8349\u7A3F"),
                createVNode("td", null, "\u65E0(\u54C1\u724C\u65B9\u7F16\u8F91\u4E2D)")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "waiting_sign"),
                createVNode("td", null, "\u5F85\u7B7E\u7F72"),
                createVNode("td", null, "\u7B7E\u7F72\u5408\u540C\u3001\u67E5\u770B\u8BE6\u60C5")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "signed"),
                createVNode("td", null, "\u5DF2\u7B7E\u7F72"),
                createVNode("td", null, "\u67E5\u770B\u8BE6\u60C5\u3001\u4E0B\u8F7D\u5408\u540C")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "refuse_seal"),
                createVNode("td", null, "\u62D2\u7B7E"),
                createVNode("td", null, "\u67E5\u770B\u8BE6\u60C5")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "completed"),
                createVNode("td", null, "\u5DF2\u5B8C\u6210"),
                createVNode("td", null, "\u67E5\u770B\u8BE6\u60C5\u3001\u4E0B\u8F7D\u5408\u540C")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "reject_oa"),
                createVNode("td", null, "OA\u9A73\u56DE"),
                createVNode("td", null, "\u67E5\u770B\u8BE6\u60C5")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "pending"),
                createVNode("td", null, "OA\u5BA1\u6279\u4E2D"),
                createVNode("td", null, "\u67E5\u770B\u8BE6\u60C5")
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
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5B57\u6BB5\u540D</th><th${_scopeId}>\u7C7B\u578B</th><th${_scopeId}>\u91CA\u4E49</th><th${_scopeId}>\u5BF9\u5E94\u754C\u9762\u5B57\u6BB5</th><th${_scopeId}>\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>ELECTRONIC_CONTRACT_ID</td><td${_scopeId}>NUMBER</td><td${_scopeId}>\u5408\u540CID</td><td${_scopeId}>-</td><td${_scopeId}>\u4E3B\u952E</td></tr><tr${_scopeId}><td${_scopeId}>ELECTRONIC_CONTRACT_CODE</td><td${_scopeId}>VARCHAR2(64)</td><td${_scopeId}>\u5408\u540C\u4E1A\u52A1\u7F16\u7801</td><td${_scopeId}>\u5408\u540C\u7F16\u53F7</td><td${_scopeId}>\u7CFB\u7EDF\u81EA\u52A8\u751F\u6210</td></tr><tr${_scopeId}><td${_scopeId}>UNIFY_CONTRACT_CODE</td><td${_scopeId}>VARCHAR2(64)</td><td${_scopeId}>\u7EDF\u4E00\u5408\u540C\u7F16\u7801</td><td${_scopeId}>-</td><td${_scopeId}>\u8DE8\u7CFB\u7EDF\u5173\u8054</td></tr><tr${_scopeId}><td${_scopeId}>CONTRACT_NAME</td><td${_scopeId}>VARCHAR2(256)</td><td${_scopeId}>\u5408\u540C\u540D\u79F0</td><td${_scopeId}>\u5408\u540C\u540D\u79F0</td><td${_scopeId}>-</td></tr><tr${_scopeId}><td${_scopeId}>CONTRACT_TYPE</td><td${_scopeId}>VARCHAR2(32)</td><td${_scopeId}>\u5408\u540C\u7C7B\u578B</td><td${_scopeId}>\u5408\u540C\u7C7B\u578B</td><td${_scopeId}>\u6D3B\u52A8\u70B9\u5C06/\u7279\u8BAD\u8425\u70B9\u5C06/\u8BBE\u8BA1\u70B9\u5C06</td></tr><tr${_scopeId}><td${_scopeId}>CONTRACT_STATUS</td><td${_scopeId}>VARCHAR2(32)</td><td${_scopeId}>\u5408\u540C\u72B6\u6001</td><td${_scopeId}>\u7B7E\u7F72\u72B6\u6001</td><td${_scopeId}>\u503C\u96C6 MBO.CONTRACT_STATUS</td></tr><tr${_scopeId}><td${_scopeId}>SIGN_TIME</td><td${_scopeId}>DATE</td><td${_scopeId}>\u7B7E\u7F72\u65F6\u95F4</td><td${_scopeId}>\u7B7E\u7F72\u65F6\u95F4</td><td${_scopeId}>\u7ECF\u9500\u5546\u7B7E\u7F72\u65F6\u8BB0\u5F55</td></tr><tr${_scopeId}><td${_scopeId}>AGENT_ID</td><td${_scopeId}>NUMBER</td><td${_scopeId}>\u7ECF\u9500\u5546ID</td><td${_scopeId}>-</td><td${_scopeId}>\u5173\u8054\u7ECF\u9500\u5546</td></tr><tr${_scopeId}><td${_scopeId}>AGENT_NAME</td><td${_scopeId}>VARCHAR2(128)</td><td${_scopeId}>\u7ECF\u9500\u5546\u540D\u79F0</td><td${_scopeId}>\u7ECF\u9500\u5546</td><td${_scopeId}>-</td></tr><tr${_scopeId}><td${_scopeId}>BRAND_ID</td><td${_scopeId}>NUMBER</td><td${_scopeId}>\u54C1\u724C\u65B9ID</td><td${_scopeId}>-</td><td${_scopeId}>-</td></tr><tr${_scopeId}><td${_scopeId}>TEMPLATE_ID</td><td${_scopeId}>NUMBER</td><td${_scopeId}>\u5173\u8054\u6A21\u677FID</td><td${_scopeId}>-</td><td${_scopeId}>-</td></tr><tr${_scopeId}><td${_scopeId}>SIGN_URL</td><td${_scopeId}>VARCHAR2(512)</td><td${_scopeId}>\u7B7E\u7F72\u94FE\u63A5</td><td${_scopeId}>-</td><td${_scopeId}>-</td></tr><tr${_scopeId}><td${_scopeId}>PDF_URL</td><td${_scopeId}>VARCHAR2(512)</td><td${_scopeId}>\u5408\u540CPDF\u5730\u5740</td><td${_scopeId}>-</td><td${_scopeId}>\u7B7E\u7F72\u5B8C\u6210\u540E\u751F\u6210</td></tr><tr${_scopeId}><td${_scopeId}>REFUSE_REASON</td><td${_scopeId}>VARCHAR2(512)</td><td${_scopeId}>\u62D2\u7B7E\u539F\u56E0</td><td${_scopeId}>-</td><td${_scopeId}>\u62D2\u7B7E\u65F6\u586B\u5199</td></tr><tr${_scopeId}><td${_scopeId}>OBJECT_VERSION_NUMBER</td><td${_scopeId}>NUMBER</td><td${_scopeId}>\u4E50\u89C2\u9501\u7248\u672C\u53F7</td><td${_scopeId}>-</td><td${_scopeId}>-</td></tr><tr${_scopeId}><td${_scopeId}>CREATED_BY</td><td${_scopeId}>NUMBER</td><td${_scopeId}>\u521B\u5EFA\u4EBA</td><td${_scopeId}>-</td><td${_scopeId}>\u7CFB\u7EDF\u81EA\u52A8</td></tr><tr${_scopeId}><td${_scopeId}>CREATION_DATE</td><td${_scopeId}>DATE</td><td${_scopeId}>\u521B\u5EFA\u65F6\u95F4</td><td${_scopeId}>\u521B\u5EFA\u65F6\u95F4</td><td${_scopeId}>\u7CFB\u7EDF\u81EA\u52A8</td></tr><tr${_scopeId}><td${_scopeId}>LAST_UPDATED_BY</td><td${_scopeId}>NUMBER</td><td${_scopeId}>\u6700\u540E\u66F4\u65B0\u4EBA</td><td${_scopeId}>-</td><td${_scopeId}>\u7CFB\u7EDF\u81EA\u52A8</td></tr><tr${_scopeId}><td${_scopeId}>LAST_UPDATE_DATE</td><td${_scopeId}>DATE</td><td${_scopeId}>\u6700\u540E\u66F4\u65B0\u65F6\u95F4</td><td${_scopeId}>-</td><td${_scopeId}>\u7CFB\u7EDF\u81EA\u52A8</td></tr></tbody></table>`);
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
                createVNode("td", null, "\u6D3B\u52A8\u70B9\u5C06/\u7279\u8BAD\u8425\u70B9\u5C06/\u8BBE\u8BA1\u70B9\u5C06")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "CONTRACT_STATUS"),
                createVNode("td", null, "VARCHAR2(32)"),
                createVNode("td", null, "\u5408\u540C\u72B6\u6001"),
                createVNode("td", null, "\u7B7E\u7F72\u72B6\u6001"),
                createVNode("td", null, "\u503C\u96C6 MBO.CONTRACT_STATUS")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "SIGN_TIME"),
                createVNode("td", null, "DATE"),
                createVNode("td", null, "\u7B7E\u7F72\u65F6\u95F4"),
                createVNode("td", null, "\u7B7E\u7F72\u65F6\u95F4"),
                createVNode("td", null, "\u7ECF\u9500\u5546\u7B7E\u7F72\u65F6\u8BB0\u5F55")
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
                createVNode("td", null, "TEMPLATE_ID"),
                createVNode("td", null, "NUMBER"),
                createVNode("td", null, "\u5173\u8054\u6A21\u677FID"),
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
                createVNode("td", null, "PDF_URL"),
                createVNode("td", null, "VARCHAR2(512)"),
                createVNode("td", null, "\u5408\u540CPDF\u5730\u5740"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u7B7E\u7F72\u5B8C\u6210\u540E\u751F\u6210")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "REFUSE_REASON"),
                createVNode("td", null, "VARCHAR2(512)"),
                createVNode("td", null, "\u62D2\u7B7E\u539F\u56E0"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u62D2\u7B7E\u65F6\u586B\u5199")
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
                createVNode("td", null, "-"),
                createVNode("td", null, "\u7CFB\u7EDF\u81EA\u52A8")
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, { title: "ELECTRONIC_CONTRACT_SIGN_RECORD\uFF08\u7535\u5B50\u5408\u540C\u7B7E\u7F72\u8BB0\u5F55\u8868\uFF09" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5B57\u6BB5\u540D</th><th${_scopeId}>\u7C7B\u578B</th><th${_scopeId}>\u91CA\u4E49</th><th${_scopeId}>\u5BF9\u5E94\u754C\u9762\u5B57\u6BB5</th><th${_scopeId}>\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>SIGN_RECORD_ID</td><td${_scopeId}>NUMBER</td><td${_scopeId}>\u7B7E\u7F72\u8BB0\u5F55ID</td><td${_scopeId}>-</td><td${_scopeId}>\u4E3B\u952E</td></tr><tr${_scopeId}><td${_scopeId}>ELECTRONIC_CONTRACT_ID</td><td${_scopeId}>NUMBER</td><td${_scopeId}>\u5173\u8054\u5408\u540CID</td><td${_scopeId}>-</td><td${_scopeId}>\u5916\u952E</td></tr><tr${_scopeId}><td${_scopeId}>SIGN_NODE</td><td${_scopeId}>VARCHAR2(32)</td><td${_scopeId}>\u7B7E\u7F72\u8282\u70B9</td><td${_scopeId}>-</td><td${_scopeId}>-</td></tr><tr${_scopeId}><td${_scopeId}>SIGN_TYPE</td><td${_scopeId}>VARCHAR2(32)</td><td${_scopeId}>\u7B7E\u7F72\u7C7B\u578B</td><td${_scopeId}>-</td><td${_scopeId}>-</td></tr><tr${_scopeId}><td${_scopeId}>SIGN_STATUS</td><td${_scopeId}>VARCHAR2(32)</td><td${_scopeId}>\u7B7E\u7F72\u72B6\u6001</td><td${_scopeId}>-</td><td${_scopeId}>-</td></tr><tr${_scopeId}><td${_scopeId}>SIGN_TIME</td><td${_scopeId}>DATE</td><td${_scopeId}>\u7B7E\u7F72\u65F6\u95F4</td><td${_scopeId}>-</td><td${_scopeId}>-</td></tr><tr${_scopeId}><td${_scopeId}>SIGN_USER</td><td${_scopeId}>VARCHAR2(64)</td><td${_scopeId}>\u7B7E\u7F72\u4EBA</td><td${_scopeId}>-</td><td${_scopeId}>-</td></tr><tr${_scopeId}><td${_scopeId}>SIGN_RESULT</td><td${_scopeId}>VARCHAR2(32)</td><td${_scopeId}>\u7B7E\u7F72\u7ED3\u679C</td><td${_scopeId}>-</td><td${_scopeId}>-</td></tr><tr${_scopeId}><td${_scopeId}>SIGN_REMARK</td><td${_scopeId}>VARCHAR2(512)</td><td${_scopeId}>\u7B7E\u7F72\u5907\u6CE8</td><td${_scopeId}>-</td><td${_scopeId}>-</td></tr><tr${_scopeId}><td${_scopeId}>OBJECT_VERSION_NUMBER</td><td${_scopeId}>NUMBER</td><td${_scopeId}>\u4E50\u89C2\u9501\u7248\u672C\u53F7</td><td${_scopeId}>-</td><td${_scopeId}>-</td></tr><tr${_scopeId}><td${_scopeId}>CREATED_BY</td><td${_scopeId}>NUMBER</td><td${_scopeId}>\u521B\u5EFA\u4EBA</td><td${_scopeId}>-</td><td${_scopeId}>\u7CFB\u7EDF\u81EA\u52A8</td></tr><tr${_scopeId}><td${_scopeId}>CREATION_DATE</td><td${_scopeId}>DATE</td><td${_scopeId}>\u521B\u5EFA\u65F6\u95F4</td><td${_scopeId}>-</td><td${_scopeId}>\u7CFB\u7EDF\u81EA\u52A8</td></tr></tbody></table>`);
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
                createVNode("td", null, "SIGN_RECORD_ID"),
                createVNode("td", null, "NUMBER"),
                createVNode("td", null, "\u7B7E\u7F72\u8BB0\u5F55ID"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u4E3B\u952E")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "ELECTRONIC_CONTRACT_ID"),
                createVNode("td", null, "NUMBER"),
                createVNode("td", null, "\u5173\u8054\u5408\u540CID"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u5916\u952E")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "SIGN_NODE"),
                createVNode("td", null, "VARCHAR2(32)"),
                createVNode("td", null, "\u7B7E\u7F72\u8282\u70B9"),
                createVNode("td", null, "-"),
                createVNode("td", null, "-")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "SIGN_TYPE"),
                createVNode("td", null, "VARCHAR2(32)"),
                createVNode("td", null, "\u7B7E\u7F72\u7C7B\u578B"),
                createVNode("td", null, "-"),
                createVNode("td", null, "-")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "SIGN_STATUS"),
                createVNode("td", null, "VARCHAR2(32)"),
                createVNode("td", null, "\u7B7E\u7F72\u72B6\u6001"),
                createVNode("td", null, "-"),
                createVNode("td", null, "-")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "SIGN_TIME"),
                createVNode("td", null, "DATE"),
                createVNode("td", null, "\u7B7E\u7F72\u65F6\u95F4"),
                createVNode("td", null, "-"),
                createVNode("td", null, "-")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "SIGN_USER"),
                createVNode("td", null, "VARCHAR2(64)"),
                createVNode("td", null, "\u7B7E\u7F72\u4EBA"),
                createVNode("td", null, "-"),
                createVNode("td", null, "-")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "SIGN_RESULT"),
                createVNode("td", null, "VARCHAR2(32)"),
                createVNode("td", null, "\u7B7E\u7F72\u7ED3\u679C"),
                createVNode("td", null, "-"),
                createVNode("td", null, "-")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "SIGN_REMARK"),
                createVNode("td", null, "VARCHAR2(512)"),
                createVNode("td", null, "\u7B7E\u7F72\u5907\u6CE8"),
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
                createVNode("td", null, "-"),
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
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u62A5\u9519\u4FE1\u606F</th><th${_scopeId}>\u63D0\u793A\u8282\u70B9</th><th${_scopeId}>\u6839\u56E0\u4E0E\u89E3\u51B3\u65B9\u6848</th><th${_scopeId}>\u7B49\u7EA7</th><th${_scopeId}>\u8BE6\u7EC6\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u8BF7\u5148\u9605\u8BFB\u5E76\u540C\u610F\u5408\u540C\u6761\u6B3E</td><td${_scopeId}>\u7B7E\u7F72\u524D\u672A\u52FE\u9009\u540C\u610F\u6761\u6B3E</td><td${_scopeId}>\u52FE\u9009\u540C\u610F\u6761\u6B3E\u590D\u9009\u6846\u540E\u7B7E\u7F72</td><td${_scopeId}>warning</td><td${_scopeId}>\u524D\u7AEF\u6821\u9A8C\u540C\u610F\u6761\u6B3E\u590D\u9009\u6846</td></tr><tr${_scopeId}><td${_scopeId}>\u8BF7\u586B\u5199\u62D2\u7B7E\u539F\u56E0</td><td${_scopeId}>\u62D2\u7B7E\u65F6\u62D2\u7B7E\u539F\u56E0\u4E3A\u7A7A</td><td${_scopeId}>\u586B\u5199\u62D2\u7B7E\u539F\u56E0\u540E\u63D0\u4EA4</td><td${_scopeId}>error</td><td${_scopeId}>\u524D\u7AEF\u6821\u9A8C REFUSE_REASON \u975E\u7A7A</td></tr><tr${_scopeId}><td${_scopeId}>\u5408\u540CPDF\u751F\u6210\u4E2D\uFF0C\u8BF7\u7A0D\u540E</td><td${_scopeId}>\u5408\u540C\u5B8C\u6210\u4F46PDF\u672A\u751F\u6210</td><td${_scopeId}>\u7A0D\u540E\u5237\u65B0\u9875\u9762\u91CD\u8BD5\u4E0B\u8F7D</td><td${_scopeId}>warning</td><td${_scopeId}>PDF\u5F02\u6B65\u751F\u6210\u672A\u5B8C\u6210</td></tr><tr${_scopeId}><td${_scopeId}>\u7B7E\u7F72\u670D\u52A1\u4E0D\u53EF\u7528</td><td${_scopeId}>\u7535\u5B50\u7B7E\u7AE0\u7CFB\u7EDF\u5F02\u5E38</td><td${_scopeId}>\u8054\u7CFB\u8FD0\u7EF4\u68C0\u67E5\u7B7E\u7AE0\u7CFB\u7EDF</td><td${_scopeId}>error</td><td${_scopeId}>\u7B7E\u7AE0\u670D\u52A1\u63A5\u53E3\u8FD4\u56DE\u5931\u8D25</td></tr><tr${_scopeId}><td${_scopeId}>\u7B7E\u7F72\u5F02\u5E38</td><td${_scopeId}>\u7B7E\u7F72\u65F6</td><td${_scopeId}>\u7535\u5B50\u7B7E\u7F72\u5931\u8D25\uFF0C\u68C0\u67E5\u7B7E\u7F72\u670D\u52A1</td><td${_scopeId}>error</td><td${_scopeId}>\u7B7E\u7AE0\u63A5\u53E3\u8FD4\u56DE\u975E\u6210\u529F\u72B6\u6001</td></tr><tr${_scopeId}><td${_scopeId}>\u7F51\u7EDC\u5F02\u5E38/\u63A5\u53E3\u8D85\u65F6</td><td${_scopeId}>\u4EFB\u610F\u63A5\u53E3\u8C03\u7528</td><td${_scopeId}>\u7F51\u7EDC\u4E2D\u65AD\u6216\u63A5\u53E3\u54CD\u5E94\u8D85\u65F6\uFF0C\u68C0\u67E5\u7F51\u7EDC\u53CA\u540E\u7AEF\u8D85\u65F6\u914D\u7F6E</td><td${_scopeId}>error</td><td${_scopeId}>axios catch \u6216 timeout</td></tr><tr${_scopeId}><td${_scopeId}>\u6743\u9650\u4E0D\u8DB3</td><td${_scopeId}>\u7B7E\u7F72/\u62D2\u7B7E</td><td${_scopeId}>\u5F53\u524D\u7528\u6237\u65E0\u5BF9\u5E94\u64CD\u4F5C\u6743\u9650\u7801\uFF0C\u8054\u7CFB\u7BA1\u7406\u5458\u6388\u6743</td><td${_scopeId}>error</td><td${_scopeId}>permissionList \u6821\u9A8C\u672A\u901A\u8FC7</td></tr><tr${_scopeId}><td${_scopeId}>\u5408\u540C\u4E0D\u5B58\u5728</td><td${_scopeId}>\u67E5\u770B/\u7B7E\u7F72</td><td${_scopeId}>\u5408\u540C\u7F16\u7801\u4E0D\u5B58\u5728\u6216\u5DF2\u5220\u9664\uFF0C\u68C0\u67E5 ELECTRONIC_CONTRACT_CODE \u6709\u6548\u6027</td><td${_scopeId}>error</td><td${_scopeId}>\u63A5\u53E3\u8FD4\u56DE\u6570\u636E\u4E3A\u7A7A</td></tr><tr${_scopeId}><td${_scopeId}>\u72B6\u6001\u4E0D\u5141\u8BB8\u64CD\u4F5C</td><td${_scopeId}>\u7B7E\u7F72/\u62D2\u7B7E</td><td${_scopeId}>\u5408\u540C\u72B6\u6001\u4E0D\u5141\u8BB8\u8BE5\u64CD\u4F5C\uFF0C\u5982\u5DF2\u7B7E\u7F72\u4E0D\u53EF\u91CD\u590D\u7B7E\u7F72\uFF0C\u68C0\u67E5 CONTRACT_STATUS</td><td${_scopeId}>error</td><td${_scopeId}>\u540E\u7AEF\u6821\u9A8C\u72B6\u6001\u673A\u5931\u8D25</td></tr><tr${_scopeId}><td${_scopeId}>\u503C\u96C6\u6570\u636E\u4E0D\u663E\u793A</td><td${_scopeId}>\u4E0B\u62C9\u9009\u9879</td><td${_scopeId}>\u503C\u96C6 MBO.CONTRACT_STATUS \u7B49\u672A\u914D\u7F6E\uFF0C\u68C0\u67E5\u503C\u96C6\u914D\u7F6E</td><td${_scopeId}>warning</td><td${_scopeId}>lookupCode \u67E5\u8BE2\u8FD4\u56DE\u7A7A</td></tr><tr${_scopeId}><td${_scopeId}>\u77ED\u4FE1\u9A8C\u8BC1\u7801\u9519\u8BEF</td><td${_scopeId}>\u7B7E\u7F72\u9A8C\u8BC1</td><td${_scopeId}>\u77ED\u4FE1\u9A8C\u8BC1\u7801\u8F93\u5165\u9519\u8BEF\u6216\u5DF2\u8FC7\u671F\uFF0C\u91CD\u65B0\u83B7\u53D6\u9A8C\u8BC1\u7801</td><td${_scopeId}>error</td><td${_scopeId}>\u540E\u7AEF\u6821\u9A8C\u9A8C\u8BC1\u7801\u5931\u8D25</td></tr></tbody></table><h4${_scopeId}>\u62A5\u95191\uFF1A\u8BF7\u5148\u9605\u8BFB\u5E76\u540C\u610F\u5408\u540C\u6761\u6B3E</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u70B9\u51FB\u7B7E\u7F72\u6309\u94AE\u65F6\uFF0C\u672A\u52FE\u9009\u540C\u610F\u5408\u540C\u6761\u6B3E\u590D\u9009\u6846</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u524D\u7AEF\u6821\u9A8C\u540C\u610F\u6761\u6B3E\u590D\u9009\u6846\u662F\u5426\u52FE\u9009\uFF0C\u672A\u52FE\u9009\u5219\u963B\u6B62\u7B7E\u7F72\u5E76\u63D0\u793A&quot;\u8BF7\u5148\u9605\u8BFB\u5E76\u540C\u610F\u5408\u540C\u6761\u6B3E&quot;\u3002\u786E\u4FDD\u7ECF\u9500\u5546\u5DF2\u9605\u8BFB\u5E76\u786E\u8BA4\u5408\u4F5C\u6761\u6B3E\uFF0C\u5177\u5907\u7B7E\u7F72\u610F\u613F\u7684\u6CD5\u5F8B\u4F9D\u636E</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> ELECTRONIC_CONTRACT_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5408\u540C\u7F16\u53F7,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>CONTRACT_NAME</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5408\u540C\u540D\u79F0,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         CONTRACT_STATUS </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7B7E\u7F72\u72B6\u6001,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         AGENT_NAME </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7ECF\u9500\u5546</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> ELECTRONIC_CONTRACT</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> CONTRACT_STATUS </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>waiting_sign</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ORDER BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> CREATION_DATE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>DESC</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95192\uFF1A\u8BF7\u586B\u5199\u62D2\u7B7E\u539F\u56E0</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u62D2\u7B7E\u63D0\u4EA4\u65F6\uFF0CREFUSE_REASON \u5B57\u6BB5\u4E3A\u7A7A</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u524D\u7AEF\u62D2\u7B7E\u5F39\u7A97\u5BF9 refuseReason \u5B57\u6BB5\u914D\u7F6E required \u6821\u9A8C\uFF0C\u63D0\u4EA4\u524D\u6821\u9A8C\u62D2\u7B7E\u539F\u56E0\u662F\u5426\u586B\u5199\uFF0C\u4E3A\u7A7A\u5219\u963B\u6B62\u63D0\u4EA4\u5E76\u63D0\u793A&quot;\u8BF7\u586B\u5199\u62D2\u7B7E\u539F\u56E0&quot;\u3002\u62D2\u7B7E\u539F\u56E0\u7528\u4E8E\u8BB0\u5F55\u7ECF\u9500\u5546\u62D2\u7B7E\u4F9D\u636E\uFF0C\u4FBF\u4E8E\u54C1\u724C\u65B9\u540E\u7EED\u5904\u7406</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> ELECTRONIC_CONTRACT_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5408\u540C\u7F16\u53F7,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>CONTRACT_NAME</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5408\u540C\u540D\u79F0,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         CONTRACT_STATUS </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7B7E\u7F72\u72B6\u6001,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         REFUSE_REASON </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u62D2\u7B7E\u539F\u56E0,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         TO_CHAR(SIGN_TIME,</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>YYYY-MM-DD HH24:MI:SS</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7B7E\u7F72\u65F6\u95F4</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> ELECTRONIC_CONTRACT</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> CONTRACT_STATUS </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>refuse_seal</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (REFUSE_REASON </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>OR</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> REFUSE_REASON </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>);</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95193\uFF1A\u5408\u540CPDF\u751F\u6210\u4E2D\uFF0C\u8BF7\u7A0D\u540E</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u4E0B\u8F7D\u5408\u540CPDF\u65F6\uFF0C\u5408\u540C\u5DF2\u5B8C\u6210\u4F46PDF\u672A\u751F\u6210</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u524D\u7AEF\u6821\u9A8C PDF_URL \u5B57\u6BB5\u975E\u7A7A\uFF0C\u82E5\u4E3A\u7A7A\u8BF4\u660EPDF\u5F02\u6B65\u751F\u6210\u672A\u5B8C\u6210\uFF0C\u63D0\u793A&quot;\u5408\u540CPDF\u751F\u6210\u4E2D\uFF0C\u8BF7\u7A0D\u540E&quot;\u3002\u5408\u540CPDF\u7531\u7B7E\u7F72\u5B8C\u6210\u540E\u5F02\u6B65\u751F\u6210\uFF0C\u901A\u5E38\u51E0\u79D2\u5185\u5B8C\u6210\uFF0C\u5237\u65B0\u9875\u9762\u540E\u91CD\u8BD5\u5373\u53EF</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> ELECTRONIC_CONTRACT_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5408\u540C\u7F16\u53F7,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>CONTRACT_NAME</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5408\u540C\u540D\u79F0,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         CONTRACT_STATUS </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7B7E\u7F72\u72B6\u6001,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         PDF_URL </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5408\u540CPDF\u5730\u5740,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         TO_CHAR(SIGN_TIME,</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>YYYY-MM-DD HH24:MI:SS</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7B7E\u7F72\u65F6\u95F4</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> ELECTRONIC_CONTRACT</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> CONTRACT_STATUS </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>signed</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>completed</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (PDF_URL </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>OR</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> PDF_URL </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>);</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95194\uFF1A\u7B7E\u7F72\u670D\u52A1\u4E0D\u53EF\u7528</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u8C03\u7528\u7535\u5B50\u7B7E\u7AE0\u63A5\u53E3\u65F6\uFF0C\u7B7E\u7AE0\u7CFB\u7EDF\u5F02\u5E38</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u540E\u7AEF\u8C03\u7528\u7535\u5B50\u7B7E\u7AE0\u7CFB\u7EDF\u63A5\u53E3\uFF0C\u82E5\u7B7E\u7AE0\u670D\u52A1\u4E0D\u53EF\u7528\u3001\u7F51\u7EDC\u5F02\u5E38\u3001\u7B7E\u7AE0\u53C2\u6570\u9519\u8BEF\u7B49\u5219\u63A5\u53E3\u8FD4\u56DE\u5931\u8D25\uFF0C\u63D0\u793A&quot;\u7B7E\u7F72\u670D\u52A1\u4E0D\u53EF\u7528&quot;\u3002\u9700\u8054\u7CFB\u8FD0\u7EF4\u68C0\u67E5\u7B7E\u7AE0\u7CFB\u7EDF\u8FD0\u884C\u72B6\u6001\u3001\u7F51\u7EDC\u8FDE\u901A\u6027\u3001\u7B7E\u7AE0\u670D\u52A1\u914D\u7F6E</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> ELECTRONIC_CONTRACT_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5408\u540C\u7F16\u53F7,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>CONTRACT_NAME</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5408\u540C\u540D\u79F0,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         CONTRACT_STATUS </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7B7E\u7F72\u72B6\u6001,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         AGENT_NAME </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7ECF\u9500\u5546,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         TO_CHAR(LAST_UPDATE_DATE,</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>YYYY-MM-DD HH24:MI:SS</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u6700\u540E\u66F4\u65B0\u65F6\u95F4</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> ELECTRONIC_CONTRACT</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> CONTRACT_STATUS </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>waiting_sign</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ORDER BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> LAST_UPDATE_DATE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>DESC</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95195\uFF1A\u7B7E\u7F72\u5F02\u5E38</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u8C03\u7528\u7B7E\u7AE0\u63A5\u53E3\u65F6\uFF0C\u8FD4\u56DE\u975E\u6210\u529F\u72B6\u6001</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u540E\u7AEF\u8C03\u7528\u7B7E\u7AE0\u63A5\u53E3\uFF0C\u82E5\u7B7E\u7AE0\u6D41\u7A0B\u5F02\u5E38\u3001\u7B7E\u7F72\u4EBA\u4FE1\u606F\u9519\u8BEF\u3001\u5408\u540C\u5185\u5BB9\u5F02\u5E38\u3001\u7B7E\u7AE0\u670D\u52A1\u8D85\u65F6\u7B49\u5219\u63A5\u53E3\u8FD4\u56DE\u975E\u6210\u529F\u72B6\u6001\uFF0C\u63D0\u793A&quot;\u7B7E\u7F72\u5F02\u5E38: {\u5177\u4F53\u9519\u8BEF\u4FE1\u606F}&quot;\u3002\u9700\u68C0\u67E5\u7B7E\u7AE0\u670D\u52A1\u65E5\u5FD7\u3001\u7B7E\u7F72\u4EBA\u4FE1\u606F\u3001\u5408\u540C\u5185\u5BB9\u5B8C\u6574\u6027</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> ELECTRONIC_CONTRACT_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5408\u540C\u7F16\u53F7,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>CONTRACT_NAME</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5408\u540C\u540D\u79F0,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         CONTRACT_STATUS </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7B7E\u7F72\u72B6\u6001,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         AGENT_NAME </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7ECF\u9500\u5546,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         SIGN_URL </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7B7E\u7F72\u94FE\u63A5</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> ELECTRONIC_CONTRACT</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> CONTRACT_STATUS </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>waiting_sign</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (SIGN_URL </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>OR</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> SIGN_URL </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>);</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95196\uFF1A\u7F51\u7EDC\u5F02\u5E38/\u63A5\u53E3\u8D85\u65F6</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u4EFB\u610F\u63A5\u53E3\u8C03\u7528\u65F6\uFF0C\u7F51\u7EDC\u4E2D\u65AD\u6216\u63A5\u53E3\u54CD\u5E94\u8D85\u8FC7 axios timeout \u914D\u7F6E</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u524D\u7AEF axios \u8BF7\u6C42\u672A\u6536\u5230\u54CD\u5E94\u6216\u54CD\u5E94\u8D85\u65F6\uFF0C\u89E6\u53D1 catch \u56DE\u8C03\u7EDF\u4E00\u63D0\u793A&quot;\u8BF7\u6C42\u5931\u8D25&quot;\u3002\u5E38\u89C1\u6839\u56E0\uFF1A\u7F51\u7EDC\u4E2D\u65AD\u3001mbo-business \u670D\u52A1\u5047\u6B7B\u3001\u6570\u636E\u5E93\u6162\u67E5\u8BE2\u3001\u7B7E\u7AE0\u7CFB\u7EDF\u54CD\u5E94\u6162\u7B49\u3002\u9700\u68C0\u67E5\u7F51\u7EDC\u8FDE\u901A\u6027\u3001\u540E\u7AEF\u670D\u52A1\u8D1F\u8F7D\u3001\u7B7E\u7AE0\u7CFB\u7EDF\u72B6\u6001</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> ELECTRONIC_CONTRACT_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5408\u540C\u7F16\u53F7, </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>CONTRACT_NAME</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5408\u540C\u540D\u79F0,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         CONTRACT_STATUS </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7B7E\u7F72\u72B6\u6001,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         TO_CHAR(LAST_UPDATE_DATE,</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>YYYY-MM-DD HH24:MI:SS</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u6700\u540E\u66F4\u65B0\u65F6\u95F4</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> ELECTRONIC_CONTRACT</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> LAST_UPDATE_DATE </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>SYSDATE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>-</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>1</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ORDER BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> LAST_UPDATE_DATE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>DESC</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95197\uFF1A\u6743\u9650\u4E0D\u8DB3</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u70B9\u51FB\u7B7E\u7F72\u3001\u62D2\u7B7E\u7B49\u6309\u94AE\u65F6\uFF0C\u5F53\u524D\u7528\u6237\u65E0\u5BF9\u5E94 permissionList \u6743\u9650\u7801</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u524D\u7AEF Button \u7EC4\u4EF6\u901A\u8FC7 permissionList \u914D\u7F6E\u6743\u9650\u7801\uFF0CHZERO \u6846\u67B6\u6821\u9A8C\u5F53\u524D\u7528\u6237\u89D2\u8272\u662F\u5426\u5305\u542B\u8BE5\u6743\u9650\u7801\uFF0C\u672A\u5305\u542B\u5219\u6309\u94AE\u4E0D\u53EF\u89C1\u6216\u7981\u7528\u3002\u82E5\u5F3A\u5236\u8C03\u7528\u63A5\u53E3\uFF0C\u540E\u7AEF\u4E5F\u4F1A\u6821\u9A8C\u6743\u9650\u8FD4\u56DE403\u3002\u9700\u8054\u7CFB\u7BA1\u7406\u5458\u914D\u7F6E\u5BF9\u5E94\u89D2\u8272\u6743\u9650</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> U.USER_NAME </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7528\u6237\u540D, R.ROLE_NAME </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u89D2\u8272\u540D, P.PERMISSION_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u6743\u9650\u7801</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> SYS_USER U</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>LEFT JOIN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> SYS_USER_ROLE UR </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ON</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> U.USER_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> UR.USER_ID</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>LEFT JOIN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> SYS_ROLE R </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ON</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> UR.ROLE_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> R.ROLE_ID</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>LEFT JOIN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> SYS_ROLE_PERMISSION RP </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ON</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> R.ROLE_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> RP.ROLE_ID</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>LEFT JOIN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> SYS_PERMISSION P </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ON</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> RP.PERMISSION_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> P.PERMISSION_ID</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> P.PERMISSION_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>LIKE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>%electronic_contract%</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ORDER BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> U.USER_NAME;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95198\uFF1A\u5408\u540C\u4E0D\u5B58\u5728</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u67E5\u770B\u3001\u7B7E\u7F72\u7B49\u64CD\u4F5C\u65F6\uFF0C\u63A5\u53E3\u8FD4\u56DE\u6570\u636E\u4E3A\u7A7A\u6216\u5408\u540C\u7F16\u7801\u4E0D\u5B58\u5728</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u524D\u7AEF\u901A\u8FC7 contractCode \u8C03\u7528\u8BE6\u60C5\u63A5\u53E3\uFF0C\u540E\u7AEF\u67E5\u8BE2 ELECTRONIC_CONTRACT \u8868\u65E0\u5BF9\u5E94\u8BB0\u5F55\u6216\u8BB0\u5F55\u5DF2\u903B\u8F91\u5220\u9664\uFF0C\u8FD4\u56DE\u7A7A\u6570\u636E\u3002\u5E38\u89C1\u6839\u56E0\uFF1A\u5408\u540C\u7F16\u7801\u9519\u8BEF\u3001\u5408\u540C\u5DF2\u88AB\u5220\u9664\u3001\u8DE8\u79DF\u6237\u67E5\u8BE2\u3001\u6570\u636E\u6743\u9650\u9694\u79BB\u7B49\u3002\u9700\u68C0\u67E5 ELECTRONIC_CONTRACT_CODE \u6709\u6548\u6027\u53CA\u6570\u636E\u6743\u9650</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> ELECTRONIC_CONTRACT_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5408\u540C\u7F16\u53F7, </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>CONTRACT_NAME</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5408\u540C\u540D\u79F0,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         CONTRACT_STATUS </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7B7E\u7F72\u72B6\u6001, DELETE_FLAG </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5220\u9664\u6807\u8BB0</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> ELECTRONIC_CONTRACT</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> DELETE_FLAG </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>Y</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>OR</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> ELECTRONIC_CONTRACT_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95199\uFF1A\u72B6\u6001\u4E0D\u5141\u8BB8\u64CD\u4F5C</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u70B9\u51FB\u7B7E\u7F72\u3001\u62D2\u7B7E\u7B49\u6309\u94AE\u65F6\uFF0C\u5408\u540C\u72B6\u6001\u4E0D\u5141\u8BB8\u8BE5\u64CD\u4F5C</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u540E\u7AEF\u6821\u9A8C\u72B6\u6001\u673A\uFF0C\u5982\u5DF2\u7B7E\u7F72\uFF08signed\uFF09\u4E0D\u53EF\u91CD\u590D\u7B7E\u7F72\u3001\u5DF2\u5B8C\u6210\uFF08completed\uFF09\u4E0D\u53EF\u62D2\u7B7E\u7B49\u3002\u72B6\u6001\u4E0D\u5339\u914D\u65F6\u540E\u7AEF\u8FD4\u56DE\u4E1A\u52A1\u5F02\u5E38\u3002\u9700\u68C0\u67E5\u5408\u540C\u5F53\u524D\u72B6\u6001\u53CA\u64CD\u4F5C\u6D41\u7A0B</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> ELECTRONIC_CONTRACT_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5408\u540C\u7F16\u53F7, </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>CONTRACT_NAME</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5408\u540C\u540D\u79F0,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         CONTRACT_STATUS </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7B7E\u7F72\u72B6\u6001, ERROR_INFO </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5F02\u5E38\u95EE\u9898</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> ELECTRONIC_CONTRACT</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> CONTRACT_STATUS </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NOT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>waiting_sign</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>,</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>signed</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>,</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>completed</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>,</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>refuse_seal</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ORDER BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> CREATE_DATE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>DESC</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u951910\uFF1A\u503C\u96C6\u6570\u636E\u4E0D\u663E\u793A</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u67E5\u8BE2\u6761\u4EF6\u6216\u5217\u8868\u4E2D\u5408\u540C\u72B6\u6001\u7B49\u4E0B\u62C9\u9009\u9879\u4E3A\u7A7A</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u524D\u7AEF\u901A\u8FC7 lookupCode \u67E5\u8BE2\u503C\u96C6 MBO.CONTRACT_STATUS \u7B49\uFF0C\u503C\u96C6\u672A\u914D\u7F6E\u6216\u672A\u542F\u7528\u5219\u4E0B\u62C9\u9009\u9879\u4E3A\u7A7A\u3002\u9700\u5728\u503C\u96C6\u7BA1\u7406\u9875\u9762\u914D\u7F6E\u5BF9\u5E94\u503C\u96C6</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> LOOKUP_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u503C\u96C6\u7F16\u7801, LOOKUP_VALUE_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u503C\u7F16\u7801,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         LOOKUP_VALUE_NAME </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u503C\u540D\u79F0, ENABLE_FLAG </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u542F\u7528\u6807\u8BB0</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> SYS_LOOKUP_VALUE</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> LOOKUP_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>MBO.CONTRACT_STATUS</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>,</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>MBO.CONTRACT_TYPE</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> ENABLE_FLAG </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>N</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ORDER BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> LOOKUP_CODE;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u951911\uFF1A\u77ED\u4FE1\u9A8C\u8BC1\u7801\u9519\u8BEF</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u7B7E\u7F72\u9A8C\u8BC1\u65F6\uFF0C\u77ED\u4FE1\u9A8C\u8BC1\u7801\u8F93\u5165\u9519\u8BEF\u6216\u5DF2\u8FC7\u671F</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u540E\u7AEF\u6821\u9A8C\u77ED\u4FE1\u9A8C\u8BC1\u7801\u4E0E\u53D1\u9001\u8BB0\u5F55\u662F\u5426\u4E00\u81F4\u4E14\u5728\u6709\u6548\u671F\u5185\uFF0C\u6821\u9A8C\u5931\u8D25\u5219\u8FD4\u56DE\u4E1A\u52A1\u5F02\u5E38\u3002\u9700\u91CD\u65B0\u83B7\u53D6\u9A8C\u8BC1\u7801\u540E\u8F93\u5165</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> ELECTRONIC_CONTRACT_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5408\u540C\u7F16\u53F7, AGENT_NAME </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7ECF\u9500\u5546,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         SMS_SEND_TIME </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u77ED\u4FE1\u53D1\u9001\u65F6\u95F4, SMS_EXPIRE_TIME </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u77ED\u4FE1\u8FC7\u671F\u65F6\u95F4,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         VERIFY_STATUS </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u9A8C\u8BC1\u72B6\u6001</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> ELECTRONIC_CONTRACT_SMS</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> VERIFY_STATUS </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>fail</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> SMS_SEND_TIME </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>SYSDATE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>-</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>1</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ORDER BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> SMS_SEND_TIME </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>DESC</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
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
                createVNode("td", null, "\u8BF7\u5148\u9605\u8BFB\u5E76\u540C\u610F\u5408\u540C\u6761\u6B3E"),
                createVNode("td", null, "\u7B7E\u7F72\u524D\u672A\u52FE\u9009\u540C\u610F\u6761\u6B3E"),
                createVNode("td", null, "\u52FE\u9009\u540C\u610F\u6761\u6B3E\u590D\u9009\u6846\u540E\u7B7E\u7F72"),
                createVNode("td", null, "warning"),
                createVNode("td", null, "\u524D\u7AEF\u6821\u9A8C\u540C\u610F\u6761\u6B3E\u590D\u9009\u6846")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u8BF7\u586B\u5199\u62D2\u7B7E\u539F\u56E0"),
                createVNode("td", null, "\u62D2\u7B7E\u65F6\u62D2\u7B7E\u539F\u56E0\u4E3A\u7A7A"),
                createVNode("td", null, "\u586B\u5199\u62D2\u7B7E\u539F\u56E0\u540E\u63D0\u4EA4"),
                createVNode("td", null, "error"),
                createVNode("td", null, "\u524D\u7AEF\u6821\u9A8C REFUSE_REASON \u975E\u7A7A")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5408\u540CPDF\u751F\u6210\u4E2D\uFF0C\u8BF7\u7A0D\u540E"),
                createVNode("td", null, "\u5408\u540C\u5B8C\u6210\u4F46PDF\u672A\u751F\u6210"),
                createVNode("td", null, "\u7A0D\u540E\u5237\u65B0\u9875\u9762\u91CD\u8BD5\u4E0B\u8F7D"),
                createVNode("td", null, "warning"),
                createVNode("td", null, "PDF\u5F02\u6B65\u751F\u6210\u672A\u5B8C\u6210")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7B7E\u7F72\u670D\u52A1\u4E0D\u53EF\u7528"),
                createVNode("td", null, "\u7535\u5B50\u7B7E\u7AE0\u7CFB\u7EDF\u5F02\u5E38"),
                createVNode("td", null, "\u8054\u7CFB\u8FD0\u7EF4\u68C0\u67E5\u7B7E\u7AE0\u7CFB\u7EDF"),
                createVNode("td", null, "error"),
                createVNode("td", null, "\u7B7E\u7AE0\u670D\u52A1\u63A5\u53E3\u8FD4\u56DE\u5931\u8D25")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7B7E\u7F72\u5F02\u5E38"),
                createVNode("td", null, "\u7B7E\u7F72\u65F6"),
                createVNode("td", null, "\u7535\u5B50\u7B7E\u7F72\u5931\u8D25\uFF0C\u68C0\u67E5\u7B7E\u7F72\u670D\u52A1"),
                createVNode("td", null, "error"),
                createVNode("td", null, "\u7B7E\u7AE0\u63A5\u53E3\u8FD4\u56DE\u975E\u6210\u529F\u72B6\u6001")
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
                createVNode("td", null, "\u7B7E\u7F72/\u62D2\u7B7E"),
                createVNode("td", null, "\u5F53\u524D\u7528\u6237\u65E0\u5BF9\u5E94\u64CD\u4F5C\u6743\u9650\u7801\uFF0C\u8054\u7CFB\u7BA1\u7406\u5458\u6388\u6743"),
                createVNode("td", null, "error"),
                createVNode("td", null, "permissionList \u6821\u9A8C\u672A\u901A\u8FC7")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5408\u540C\u4E0D\u5B58\u5728"),
                createVNode("td", null, "\u67E5\u770B/\u7B7E\u7F72"),
                createVNode("td", null, "\u5408\u540C\u7F16\u7801\u4E0D\u5B58\u5728\u6216\u5DF2\u5220\u9664\uFF0C\u68C0\u67E5 ELECTRONIC_CONTRACT_CODE \u6709\u6548\u6027"),
                createVNode("td", null, "error"),
                createVNode("td", null, "\u63A5\u53E3\u8FD4\u56DE\u6570\u636E\u4E3A\u7A7A")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u72B6\u6001\u4E0D\u5141\u8BB8\u64CD\u4F5C"),
                createVNode("td", null, "\u7B7E\u7F72/\u62D2\u7B7E"),
                createVNode("td", null, "\u5408\u540C\u72B6\u6001\u4E0D\u5141\u8BB8\u8BE5\u64CD\u4F5C\uFF0C\u5982\u5DF2\u7B7E\u7F72\u4E0D\u53EF\u91CD\u590D\u7B7E\u7F72\uFF0C\u68C0\u67E5 CONTRACT_STATUS"),
                createVNode("td", null, "error"),
                createVNode("td", null, "\u540E\u7AEF\u6821\u9A8C\u72B6\u6001\u673A\u5931\u8D25")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u503C\u96C6\u6570\u636E\u4E0D\u663E\u793A"),
                createVNode("td", null, "\u4E0B\u62C9\u9009\u9879"),
                createVNode("td", null, "\u503C\u96C6 MBO.CONTRACT_STATUS \u7B49\u672A\u914D\u7F6E\uFF0C\u68C0\u67E5\u503C\u96C6\u914D\u7F6E"),
                createVNode("td", null, "warning"),
                createVNode("td", null, "lookupCode \u67E5\u8BE2\u8FD4\u56DE\u7A7A")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u77ED\u4FE1\u9A8C\u8BC1\u7801\u9519\u8BEF"),
                createVNode("td", null, "\u7B7E\u7F72\u9A8C\u8BC1"),
                createVNode("td", null, "\u77ED\u4FE1\u9A8C\u8BC1\u7801\u8F93\u5165\u9519\u8BEF\u6216\u5DF2\u8FC7\u671F\uFF0C\u91CD\u65B0\u83B7\u53D6\u9A8C\u8BC1\u7801"),
                createVNode("td", null, "error"),
                createVNode("td", null, "\u540E\u7AEF\u6821\u9A8C\u9A8C\u8BC1\u7801\u5931\u8D25")
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95191\uFF1A\u8BF7\u5148\u9605\u8BFB\u5E76\u540C\u610F\u5408\u540C\u6761\u6B3E"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u70B9\u51FB\u7B7E\u7F72\u6309\u94AE\u65F6\uFF0C\u672A\u52FE\u9009\u540C\u610F\u5408\u540C\u6761\u6B3E\u590D\u9009\u6846")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode('\uFF1A\u524D\u7AEF\u6821\u9A8C\u540C\u610F\u6761\u6B3E\u590D\u9009\u6846\u662F\u5426\u52FE\u9009\uFF0C\u672A\u52FE\u9009\u5219\u963B\u6B62\u7B7E\u7F72\u5E76\u63D0\u793A"\u8BF7\u5148\u9605\u8BFB\u5E76\u540C\u610F\u5408\u540C\u6761\u6B3E"\u3002\u786E\u4FDD\u7ECF\u9500\u5546\u5DF2\u9605\u8BFB\u5E76\u786E\u8BA4\u5408\u4F5C\u6761\u6B3E\uFF0C\u5177\u5907\u7B7E\u7F72\u610F\u613F\u7684\u6CD5\u5F8B\u4F9D\u636E')
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         AGENT_NAME "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7ECF\u9500\u5546")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " CONTRACT_STATUS "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "waiting_sign"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ORDER BY"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " CREATION_DATE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "DESC"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95192\uFF1A\u8BF7\u586B\u5199\u62D2\u7B7E\u539F\u56E0"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u62D2\u7B7E\u63D0\u4EA4\u65F6\uFF0CREFUSE_REASON \u5B57\u6BB5\u4E3A\u7A7A")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode('\uFF1A\u524D\u7AEF\u62D2\u7B7E\u5F39\u7A97\u5BF9 refuseReason \u5B57\u6BB5\u914D\u7F6E required \u6821\u9A8C\uFF0C\u63D0\u4EA4\u524D\u6821\u9A8C\u62D2\u7B7E\u539F\u56E0\u662F\u5426\u586B\u5199\uFF0C\u4E3A\u7A7A\u5219\u963B\u6B62\u63D0\u4EA4\u5E76\u63D0\u793A"\u8BF7\u586B\u5199\u62D2\u7B7E\u539F\u56E0"\u3002\u62D2\u7B7E\u539F\u56E0\u7528\u4E8E\u8BB0\u5F55\u7ECF\u9500\u5546\u62D2\u7B7E\u4F9D\u636E\uFF0C\u4FBF\u4E8E\u54C1\u724C\u65B9\u540E\u7EED\u5904\u7406')
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         REFUSE_REASON "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u62D2\u7B7E\u539F\u56E0,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         TO_CHAR(SIGN_TIME,"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "YYYY-MM-DD HH24:MI:SS"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7B7E\u7F72\u65F6\u95F4")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " CONTRACT_STATUS "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "refuse_seal"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " (REFUSE_REASON "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NULL"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "OR"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " REFUSE_REASON "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "''"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ");")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95193\uFF1A\u5408\u540CPDF\u751F\u6210\u4E2D\uFF0C\u8BF7\u7A0D\u540E"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u4E0B\u8F7D\u5408\u540CPDF\u65F6\uFF0C\u5408\u540C\u5DF2\u5B8C\u6210\u4F46PDF\u672A\u751F\u6210")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode('\uFF1A\u524D\u7AEF\u6821\u9A8C PDF_URL \u5B57\u6BB5\u975E\u7A7A\uFF0C\u82E5\u4E3A\u7A7A\u8BF4\u660EPDF\u5F02\u6B65\u751F\u6210\u672A\u5B8C\u6210\uFF0C\u63D0\u793A"\u5408\u540CPDF\u751F\u6210\u4E2D\uFF0C\u8BF7\u7A0D\u540E"\u3002\u5408\u540CPDF\u7531\u7B7E\u7F72\u5B8C\u6210\u540E\u5F02\u6B65\u751F\u6210\uFF0C\u901A\u5E38\u51E0\u79D2\u5185\u5B8C\u6210\uFF0C\u5237\u65B0\u9875\u9762\u540E\u91CD\u8BD5\u5373\u53EF')
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         PDF_URL "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5408\u540CPDF\u5730\u5740,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         TO_CHAR(SIGN_TIME,"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "YYYY-MM-DD HH24:MI:SS"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7B7E\u7F72\u65F6\u95F4")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " CONTRACT_STATUS "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IN"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " ("),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "signed"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ", "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "completed"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ")")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " (PDF_URL "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NULL"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "OR"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " PDF_URL "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "''"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ");")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95194\uFF1A\u7B7E\u7F72\u670D\u52A1\u4E0D\u53EF\u7528"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u8C03\u7528\u7535\u5B50\u7B7E\u7AE0\u63A5\u53E3\u65F6\uFF0C\u7B7E\u7AE0\u7CFB\u7EDF\u5F02\u5E38")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode('\uFF1A\u540E\u7AEF\u8C03\u7528\u7535\u5B50\u7B7E\u7AE0\u7CFB\u7EDF\u63A5\u53E3\uFF0C\u82E5\u7B7E\u7AE0\u670D\u52A1\u4E0D\u53EF\u7528\u3001\u7F51\u7EDC\u5F02\u5E38\u3001\u7B7E\u7AE0\u53C2\u6570\u9519\u8BEF\u7B49\u5219\u63A5\u53E3\u8FD4\u56DE\u5931\u8D25\uFF0C\u63D0\u793A"\u7B7E\u7F72\u670D\u52A1\u4E0D\u53EF\u7528"\u3002\u9700\u8054\u7CFB\u8FD0\u7EF4\u68C0\u67E5\u7B7E\u7AE0\u7CFB\u7EDF\u8FD0\u884C\u72B6\u6001\u3001\u7F51\u7EDC\u8FDE\u901A\u6027\u3001\u7B7E\u7AE0\u670D\u52A1\u914D\u7F6E')
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         AGENT_NAME "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7ECF\u9500\u5546,")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " CONTRACT_STATUS "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "waiting_sign"),
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
          createVNode("h4", null, "\u62A5\u95195\uFF1A\u7B7E\u7F72\u5F02\u5E38"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u8C03\u7528\u7B7E\u7AE0\u63A5\u53E3\u65F6\uFF0C\u8FD4\u56DE\u975E\u6210\u529F\u72B6\u6001")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode('\uFF1A\u540E\u7AEF\u8C03\u7528\u7B7E\u7AE0\u63A5\u53E3\uFF0C\u82E5\u7B7E\u7AE0\u6D41\u7A0B\u5F02\u5E38\u3001\u7B7E\u7F72\u4EBA\u4FE1\u606F\u9519\u8BEF\u3001\u5408\u540C\u5185\u5BB9\u5F02\u5E38\u3001\u7B7E\u7AE0\u670D\u52A1\u8D85\u65F6\u7B49\u5219\u63A5\u53E3\u8FD4\u56DE\u975E\u6210\u529F\u72B6\u6001\uFF0C\u63D0\u793A"\u7B7E\u7F72\u5F02\u5E38: {\u5177\u4F53\u9519\u8BEF\u4FE1\u606F}"\u3002\u9700\u68C0\u67E5\u7B7E\u7AE0\u670D\u52A1\u65E5\u5FD7\u3001\u7B7E\u7F72\u4EBA\u4FE1\u606F\u3001\u5408\u540C\u5185\u5BB9\u5B8C\u6574\u6027')
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         AGENT_NAME "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7ECF\u9500\u5546,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         SIGN_URL "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7B7E\u7F72\u94FE\u63A5")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " CONTRACT_STATUS "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "waiting_sign"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " (SIGN_URL "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NULL"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "OR"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " SIGN_URL "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "''"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ");")
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
              createTextVNode('\uFF1A\u524D\u7AEF axios \u8BF7\u6C42\u672A\u6536\u5230\u54CD\u5E94\u6216\u54CD\u5E94\u8D85\u65F6\uFF0C\u89E6\u53D1 catch \u56DE\u8C03\u7EDF\u4E00\u63D0\u793A"\u8BF7\u6C42\u5931\u8D25"\u3002\u5E38\u89C1\u6839\u56E0\uFF1A\u7F51\u7EDC\u4E2D\u65AD\u3001mbo-business \u670D\u52A1\u5047\u6B7B\u3001\u6570\u636E\u5E93\u6162\u67E5\u8BE2\u3001\u7B7E\u7AE0\u7CFB\u7EDF\u54CD\u5E94\u6162\u7B49\u3002\u9700\u68C0\u67E5\u7F51\u7EDC\u8FDE\u901A\u6027\u3001\u540E\u7AEF\u670D\u52A1\u8D1F\u8F7D\u3001\u7B7E\u7AE0\u7CFB\u7EDF\u72B6\u6001')
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
              createTextVNode("\uFF1A\u70B9\u51FB\u7B7E\u7F72\u3001\u62D2\u7B7E\u7B49\u6309\u94AE\u65F6\uFF0C\u5F53\u524D\u7528\u6237\u65E0\u5BF9\u5E94 permissionList \u6743\u9650\u7801")
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
                  createVNode("span", { style: { "color": "#C3E88D" } }, "%electronic_contract%"),
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
          createVNode("h4", null, "\u62A5\u95198\uFF1A\u5408\u540C\u4E0D\u5B58\u5728"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u67E5\u770B\u3001\u7B7E\u7F72\u7B49\u64CD\u4F5C\u65F6\uFF0C\u63A5\u53E3\u8FD4\u56DE\u6570\u636E\u4E3A\u7A7A\u6216\u5408\u540C\u7F16\u7801\u4E0D\u5B58\u5728")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u524D\u7AEF\u901A\u8FC7 contractCode \u8C03\u7528\u8BE6\u60C5\u63A5\u53E3\uFF0C\u540E\u7AEF\u67E5\u8BE2 ELECTRONIC_CONTRACT \u8868\u65E0\u5BF9\u5E94\u8BB0\u5F55\u6216\u8BB0\u5F55\u5DF2\u903B\u8F91\u5220\u9664\uFF0C\u8FD4\u56DE\u7A7A\u6570\u636E\u3002\u5E38\u89C1\u6839\u56E0\uFF1A\u5408\u540C\u7F16\u7801\u9519\u8BEF\u3001\u5408\u540C\u5DF2\u88AB\u5220\u9664\u3001\u8DE8\u79DF\u6237\u67E5\u8BE2\u3001\u6570\u636E\u6743\u9650\u9694\u79BB\u7B49\u3002\u9700\u68C0\u67E5 ELECTRONIC_CONTRACT_CODE \u6709\u6548\u6027\u53CA\u6570\u636E\u6743\u9650")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7B7E\u7F72\u72B6\u6001, DELETE_FLAG "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5220\u9664\u6807\u8BB0")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " DELETE_FLAG "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "Y"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "OR"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " ELECTRONIC_CONTRACT_CODE "),
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
          createVNode("h4", null, "\u62A5\u95199\uFF1A\u72B6\u6001\u4E0D\u5141\u8BB8\u64CD\u4F5C"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u70B9\u51FB\u7B7E\u7F72\u3001\u62D2\u7B7E\u7B49\u6309\u94AE\u65F6\uFF0C\u5408\u540C\u72B6\u6001\u4E0D\u5141\u8BB8\u8BE5\u64CD\u4F5C")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u540E\u7AEF\u6821\u9A8C\u72B6\u6001\u673A\uFF0C\u5982\u5DF2\u7B7E\u7F72\uFF08signed\uFF09\u4E0D\u53EF\u91CD\u590D\u7B7E\u7F72\u3001\u5DF2\u5B8C\u6210\uFF08completed\uFF09\u4E0D\u53EF\u62D2\u7B7E\u7B49\u3002\u72B6\u6001\u4E0D\u5339\u914D\u65F6\u540E\u7AEF\u8FD4\u56DE\u4E1A\u52A1\u5F02\u5E38\u3002\u9700\u68C0\u67E5\u5408\u540C\u5F53\u524D\u72B6\u6001\u53CA\u64CD\u4F5C\u6D41\u7A0B")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7B7E\u7F72\u72B6\u6001, ERROR_INFO "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5F02\u5E38\u95EE\u9898")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " CONTRACT_STATUS "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NOT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IN"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " ("),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "waiting_sign"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ","),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "signed"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ","),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "completed"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ","),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "refuse_seal"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ")")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ORDER BY"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " CREATE_DATE "),
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
              createTextVNode("\uFF1A\u67E5\u8BE2\u6761\u4EF6\u6216\u5217\u8868\u4E2D\u5408\u540C\u72B6\u6001\u7B49\u4E0B\u62C9\u9009\u9879\u4E3A\u7A7A")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u524D\u7AEF\u901A\u8FC7 lookupCode \u67E5\u8BE2\u503C\u96C6 MBO.CONTRACT_STATUS \u7B49\uFF0C\u503C\u96C6\u672A\u914D\u7F6E\u6216\u672A\u542F\u7528\u5219\u4E0B\u62C9\u9009\u9879\u4E3A\u7A7A\u3002\u9700\u5728\u503C\u96C6\u7BA1\u7406\u9875\u9762\u914D\u7F6E\u5BF9\u5E94\u503C\u96C6")
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
                  createVNode("span", { style: { "color": "#C3E88D" } }, "MBO.CONTRACT_STATUS"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ","),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "MBO.CONTRACT_TYPE"),
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
          createVNode("h4", null, "\u62A5\u951911\uFF1A\u77ED\u4FE1\u9A8C\u8BC1\u7801\u9519\u8BEF"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u7B7E\u7F72\u9A8C\u8BC1\u65F6\uFF0C\u77ED\u4FE1\u9A8C\u8BC1\u7801\u8F93\u5165\u9519\u8BEF\u6216\u5DF2\u8FC7\u671F")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u540E\u7AEF\u6821\u9A8C\u77ED\u4FE1\u9A8C\u8BC1\u7801\u4E0E\u53D1\u9001\u8BB0\u5F55\u662F\u5426\u4E00\u81F4\u4E14\u5728\u6709\u6548\u671F\u5185\uFF0C\u6821\u9A8C\u5931\u8D25\u5219\u8FD4\u56DE\u4E1A\u52A1\u5F02\u5E38\u3002\u9700\u91CD\u65B0\u83B7\u53D6\u9A8C\u8BC1\u7801\u540E\u8F93\u5165")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         SMS_SEND_TIME "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u77ED\u4FE1\u53D1\u9001\u65F6\u95F4, SMS_EXPIRE_TIME "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u77ED\u4FE1\u8FC7\u671F\u65F6\u95F4,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         VERIFY_STATUS "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u9A8C\u8BC1\u72B6\u6001")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " ELECTRONIC_CONTRACT_SMS")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " VERIFY_STATUS "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "fail"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " SMS_SEND_TIME "),
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " SMS_SEND_TIME "),
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
  _push(ssrRenderComponent(_component_KbCard, { title: "\u5E38\u89C1\u95EE\u9898" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u95EE\u9898</th><th${_scopeId}>\u6392\u67E5\u65B9\u5F0F</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u7ECF\u9500\u5546\u80FD\u4FEE\u6539\u5408\u540C\u5185\u5BB9\u5417</td><td${_scopeId}>\u4E0D\u80FD\uFF0C\u7ECF\u9500\u5546\u4EC5\u80FD\u67E5\u770B\u5408\u540C\u5185\u5BB9\u5E76\u8FDB\u884C\u7B7E\u7F72\u6216\u62D2\u7B7E\uFF0C\u5408\u540C\u5185\u5BB9\u7531\u54C1\u724C\u65B9\u7EF4\u62A4</td></tr><tr${_scopeId}><td${_scopeId}>\u62D2\u7B7E\u540E\u8FD8\u80FD\u91CD\u65B0\u7B7E\u7F72\u5417</td><td${_scopeId}>\u4E0D\u80FD\uFF0C\u62D2\u7B7E\u540E\u5408\u540C\u8FDB\u5165\u62D2\u7B7E\u72B6\u6001\uFF0C\u9700\u54C1\u724C\u65B9\u91CD\u65B0\u53D1\u8D77\u7B7E\u7F72\u6D41\u7A0B</td></tr><tr${_scopeId}><td${_scopeId}>\u5408\u540C\u5217\u8868\u4E3A\u4EC0\u4E48\u770B\u4E0D\u5230\u67D0\u4E9B\u5408\u540C</td><td${_scopeId}>\u7ECF\u9500\u5546\u4EC5\u80FD\u770B\u5230\u81EA\u5DF1\u4F5C\u4E3A\u7B7E\u7F72\u65B9\u7684\u5408\u540C\uFF0C\u6570\u636E\u901A\u8FC7 pageForAgent \u63A5\u53E3\u9694\u79BB</td></tr><tr${_scopeId}><td${_scopeId}>\u4E0B\u8F7D\u5408\u540CPDF\u63D0\u793A\u751F\u6210\u4E2D\u600E\u4E48\u529E</td><td${_scopeId}>\u5408\u540C\u5B8C\u6210\u540EPDF\u5F02\u6B65\u751F\u6210\uFF0C\u901A\u5E38\u51E0\u79D2\u5185\u5B8C\u6210\uFF0C\u5237\u65B0\u9875\u9762\u540E\u91CD\u8BD5\u5373\u53EF</td></tr><tr${_scopeId}><td${_scopeId}>\u4E0D\u540C\u5408\u540C\u7C7B\u578B\u67E5\u770B\u8BE6\u60C5\u8DF3\u8F6C\u4E0D\u540C\u9875\u9762</td><td${_scopeId}>\u6D3B\u52A8\u70B9\u5C06\u8C03\u7528 activityApply/detail\uFF0C\u7279\u8BAD\u8425\u70B9\u5C06\u8C03\u7528 trainCampApply/detail\uFF0C\u8BBE\u8BA1\u70B9\u5C06\u8C03\u7528 designApply/detail</td></tr></tbody></table>`);
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
                createVNode("td", null, "\u7ECF\u9500\u5546\u80FD\u4FEE\u6539\u5408\u540C\u5185\u5BB9\u5417"),
                createVNode("td", null, "\u4E0D\u80FD\uFF0C\u7ECF\u9500\u5546\u4EC5\u80FD\u67E5\u770B\u5408\u540C\u5185\u5BB9\u5E76\u8FDB\u884C\u7B7E\u7F72\u6216\u62D2\u7B7E\uFF0C\u5408\u540C\u5185\u5BB9\u7531\u54C1\u724C\u65B9\u7EF4\u62A4")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u62D2\u7B7E\u540E\u8FD8\u80FD\u91CD\u65B0\u7B7E\u7F72\u5417"),
                createVNode("td", null, "\u4E0D\u80FD\uFF0C\u62D2\u7B7E\u540E\u5408\u540C\u8FDB\u5165\u62D2\u7B7E\u72B6\u6001\uFF0C\u9700\u54C1\u724C\u65B9\u91CD\u65B0\u53D1\u8D77\u7B7E\u7F72\u6D41\u7A0B")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5408\u540C\u5217\u8868\u4E3A\u4EC0\u4E48\u770B\u4E0D\u5230\u67D0\u4E9B\u5408\u540C"),
                createVNode("td", null, "\u7ECF\u9500\u5546\u4EC5\u80FD\u770B\u5230\u81EA\u5DF1\u4F5C\u4E3A\u7B7E\u7F72\u65B9\u7684\u5408\u540C\uFF0C\u6570\u636E\u901A\u8FC7 pageForAgent \u63A5\u53E3\u9694\u79BB")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u4E0B\u8F7D\u5408\u540CPDF\u63D0\u793A\u751F\u6210\u4E2D\u600E\u4E48\u529E"),
                createVNode("td", null, "\u5408\u540C\u5B8C\u6210\u540EPDF\u5F02\u6B65\u751F\u6210\uFF0C\u901A\u5E38\u51E0\u79D2\u5185\u5B8C\u6210\uFF0C\u5237\u65B0\u9875\u9762\u540E\u91CD\u8BD5\u5373\u53EF")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u4E0D\u540C\u5408\u540C\u7C7B\u578B\u67E5\u770B\u8BE6\u60C5\u8DF3\u8F6C\u4E0D\u540C\u9875\u9762"),
                createVNode("td", null, "\u6D3B\u52A8\u70B9\u5C06\u8C03\u7528 activityApply/detail\uFF0C\u7279\u8BAD\u8425\u70B9\u5C06\u8C03\u7528 trainCampApply/detail\uFF0C\u8BBE\u8BA1\u70B9\u5C06\u8C03\u7528 designApply/detail")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("\u7535\u5B50\u5408\u540C\u7BA1\u7406/\u7ECF\u9500\u5546/\u5408\u540C\u7BA1\u7406/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
