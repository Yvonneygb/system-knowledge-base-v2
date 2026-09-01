import { resolveComponent, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.6ab74304.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"\u70B9\u5C06\u7BA1\u7406/\u57FA\u7840\u7BA1\u7406/\u8BB2\u5E08\u6392\u671F/index.md"}');
const _sfc_main = { name: "\u70B9\u5C06\u7BA1\u7406/\u57FA\u7840\u7BA1\u7406/\u8BB2\u5E08\u6392\u671F/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_BreadcrumbTabs = resolveComponent("BreadcrumbTabs");
  const _component_KbCard = resolveComponent("KbCard");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_BreadcrumbTabs, null, null, _parent));
  _push(`<div id="biz-intro" style="${ssrRenderStyle({ "display": "none" })}"><div class="tab-pad"><div class="kl-wrap"><div class="kl-card"><div class="biz-kl-hdr"><span class="biz-tag" style="${ssrRenderStyle({ "background": "rgba(124,58,237,0.08)", "color": "#7C3AED", "border-color": "rgba(124,58,237,0.18)" })}"> \u5B9A\u4E49</span><h2>\u8BB2\u5E08\u6392\u671F\u662F\u4EC0\u4E48</h2><p>\u8BB0\u5F55\u8BB2\u5E08\u7684\u65F6\u95F4\u5360\u7528\uFF0C\u51B3\u5B9A\u70B9\u5C06\u65F6\u8C01\u53EF\u7528\u3001\u8C01\u5DF2\u88AB\u5360</p></div><div class="biz-2col-inner"><div class="kl-col-box"><div style="${ssrRenderStyle({ "display": "flex", "align-items": "center", "gap": "10px", "margin-bottom": "12px" })}"><div style="${ssrRenderStyle({ "width": "40px", "height": "40px", "border-radius": "10px", "display": "flex", "align-items": "center", "justify-content": "center", "flex-shrink": "0", "background": "linear-gradient(135deg,#7C3AED,#6D28D9)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2.5" y="3.5" width="11" height="10" rx="1.5" stroke="white" stroke-width="1.5"></rect><path d="M2.5 6.5H13.5" stroke="white" stroke-width="1.5"></path><path d="M5.5 2V4" stroke="white" stroke-width="1.5" stroke-linecap="round"></path><path d="M10.5 2V4" stroke="white" stroke-width="1.5" stroke-linecap="round"></path><path d="M6 9.5H10" stroke="white" stroke-width="1.5" stroke-linecap="round"></path></svg></div><h4 style="${ssrRenderStyle({ "font-size": "1rem", "font-weight": "800", "color": "#1F2937", "margin": "0" })}">\u7BA1\u4EC0\u4E48</h4></div><p style="${ssrRenderStyle({ "font-size": "0.78rem", "font-weight": "600", "color": "#6B7280", "margin": "0 0 10px" })}">\u8BB2\u5E08\u7684\u65F6\u95F4\u53EF\u7528\u6027</p><div style="${ssrRenderStyle({ "display": "flex", "flex-direction": "column", "gap": "8px" })}"><div style="${ssrRenderStyle({ "display": "flex", "align-items": "flex-start", "gap": "8px", "padding": "8px 10px", "background": "#F5F3FF", "border-radius": "8px" })}"><div style="${ssrRenderStyle({ "font-size": ".75rem" })}"><strong>\u6DFB\u52A0\u6392\u671F</strong> \u2014 \u4E3A\u8BB2\u5E08\u767B\u8BB0\u67D0\u4E2A\u65F6\u95F4\u6BB5\u7684\u6388\u8BFE\u6216\u6D3B\u52A8\u5360\u7528\uFF0C\u8BE5\u65F6\u95F4\u6BB5\u6807\u8BB0\u4E3A\u5DF2\u6392\u671F\u3002</div></div><div style="${ssrRenderStyle({ "display": "flex", "align-items": "flex-start", "gap": "8px", "padding": "8px 10px", "background": "#F5F3FF", "border-radius": "8px" })}"><div style="${ssrRenderStyle({ "font-size": ".75rem" })}"><strong>\u53D6\u6D88\u6392\u671F</strong> \u2014 \u91CA\u653E\u8BE5\u65F6\u95F4\u6BB5\u7684\u5360\u7528\uFF0C\u8BB2\u5E08\u6062\u590D\u4E3A\u53EF\u7528\u72B6\u6001\u3002</div></div></div></div><div class="kl-col-box alt"><div style="${ssrRenderStyle({ "display": "flex", "align-items": "center", "gap": "10px", "margin-bottom": "12px" })}"><div style="${ssrRenderStyle({ "width": "40px", "height": "40px", "border-radius": "10px", "display": "flex", "align-items": "center", "justify-content": "center", "flex-shrink": "0", "background": "linear-gradient(135deg,#16A34A,#22C55E)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 2L3 4V8C3 11 8 14 8 14C8 14 13 11 13 8V4L8 2Z" stroke="white" stroke-width="1.5" stroke-linejoin="round"></path><path d="M6 8L7.5 9.5L10 6.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></div><h4 style="${ssrRenderStyle({ "font-size": "1rem", "font-weight": "800", "color": "#1F2937", "margin": "0" })}">\u4E3A\u4EC0\u4E48\u8981\u6392</h4></div><p style="${ssrRenderStyle({ "font-size": "0.78rem", "font-weight": "600", "color": "#6B7280", "margin": "0 0 10px" })}">\u9632\u6B62\u4E00\u4EBA\u591A\u5904\u88AB\u70B9</p><div style="${ssrRenderStyle({ "display": "flex", "flex-direction": "column", "gap": "8px" })}"><div style="${ssrRenderStyle({ "display": "flex", "align-items": "flex-start", "gap": "8px", "padding": "8px 10px", "background": "#F0FDF4", "border-radius": "8px" })}"><div style="${ssrRenderStyle({ "font-size": ".75rem" })}"><strong>\u907F\u514D\u649E\u671F</strong> \u2014 \u540C\u4E00\u8BB2\u5E08\u540C\u4E00\u65F6\u95F4\u53EA\u80FD\u627F\u63A5\u4E00\u9879\u4EFB\u52A1\uFF0C\u6392\u671F\u662F\u552F\u4E00\u7684\u5360\u7528\u4F9D\u636E\u3002</div></div><div style="${ssrRenderStyle({ "display": "flex", "align-items": "flex-start", "gap": "8px", "padding": "8px 10px", "background": "#F0FDF4", "border-radius": "8px" })}"><div style="${ssrRenderStyle({ "font-size": ".75rem" })}"><strong>\u652F\u6491\u70B9\u5C06</strong> \u2014 \u5355\u5E97\u70B9\u5C06\u3001\u7279\u8BAD\u8425\u70B9\u5C06\u3001\u6D3B\u52A8\u70B9\u5C06\u9009\u4EBA\u65F6\u90FD\u4EE5\u6392\u671F\u5224\u65AD\u8BB2\u5E08\u662F\u5426\u53EF\u7528\u3002</div></div></div></div></div></div><div class="kl-card"><div class="biz-kl-hdr"><span class="biz-tag" style="${ssrRenderStyle({ "background": "rgba(124,58,237,0.08)", "color": "#7C3AED", "border-color": "rgba(124,58,237,0.18)" })}"> \u6D41\u7A0B</span><h2>\u8BB2\u5E08\u6392\u671F\u600E\u4E48\u6D41\u8F6C</h2><p>\u5373\u65F6\u751F\u6548\u7684\u4E09\u6B65\u7EF4\u62A4\u52A8\u4F5C</p></div><div class="biz-steps"><div class="biz-step-item"><div class="biz-step-circle" style="${ssrRenderStyle({ "background": "linear-gradient(135deg,#7C3AED,#6D28D9)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="7" cy="7" r="4.2" stroke="white" stroke-width="1.5"></circle><path d="M10.2 10.2L13.5 13.5" stroke="white" stroke-width="1.5" stroke-linecap="round"></path></svg></div><h5>\u67E5\u8BE2\u6392\u671F</h5><small>\u6309\u8BB2\u5E08\u4E0E\u65F6\u95F4\u8303\u56F4<br>\u67E5\u770B\u73B0\u6709\u5360\u7528\u60C5\u51B5</small></div><div class="biz-step-arrow">\u2192</div><div class="biz-step-item"><div class="biz-step-circle" style="${ssrRenderStyle({ "background": "linear-gradient(135deg,#8B5CF6,#A78BFA)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2.5" y="3.5" width="11" height="10" rx="1.5" stroke="white" stroke-width="1.5"></rect><path d="M2.5 6.5H13.5" stroke="white" stroke-width="1.5"></path><path d="M5.5 2V4" stroke="white" stroke-width="1.5" stroke-linecap="round"></path><path d="M10.5 2V4" stroke="white" stroke-width="1.5" stroke-linecap="round"></path><path d="M6 9.5H10" stroke="white" stroke-width="1.5" stroke-linecap="round"></path></svg></div><h5>\u7EF4\u62A4\u6392\u671F</h5><small>\u6DFB\u52A0\u65F6\u6821\u9A8C\u51B2\u7A81<br>\u6216\u53D6\u6D88\u91CA\u653E\u65F6\u95F4</small></div><div class="biz-step-arrow">\u2192</div><div class="biz-step-item"><div class="biz-step-circle" style="${ssrRenderStyle({ "background": "linear-gradient(135deg,#16A34A,#22C55E)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 12L6 8L10 10L14 4" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2 14H14" stroke="white" stroke-width="1.5" stroke-linecap="round"></path></svg></div><h5>\u4F9B\u70B9\u5C06\u4F7F\u7528</h5><small>\u70B9\u5C06\u67E5\u8BE2\u53EF\u7528\u8BB2\u5E08<br>\u5E76\u7EDF\u8BA1\u8BB2\u5E08\u9971\u548C\u5EA6</small></div></div></div><div class="kl-card"><div class="biz-kl-hdr"><span class="biz-tag" style="${ssrRenderStyle({ "background": "rgba(124,58,237,0.08)", "color": "#7C3AED", "border-color": "rgba(124,58,237,0.18)" })}"> \u89C4\u5219</span><h2>\u5173\u952E\u4E1A\u52A1\u89C4\u5219</h2><p>\u51B2\u7A81\u6821\u9A8C\u3001\u5373\u65F6\u751F\u6548\u4E0E\u4E0B\u6E38\u53D6\u6570\u53E3\u5F84</p></div><div class="biz-3col"><div class="kl-col-box" style="${ssrRenderStyle({ "margin-bottom": "0" })}"><div style="${ssrRenderStyle({ "display": "flex", "gap": "12px", "align-items": "flex-start" })}"><div style="${ssrRenderStyle({ "width": "36px", "height": "36px", "border-radius": "10px", "display": "flex", "align-items": "center", "justify-content": "center", "flex-shrink": "0", "background": "linear-gradient(135deg,#F97316,#FB923C)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 2.5L14 13H2L8 2.5Z" stroke="white" stroke-width="1.5" stroke-linejoin="round"></path><path d="M8 6.5V9.2" stroke="white" stroke-width="1.5" stroke-linecap="round"></path><path d="M8 11H8.01" stroke="white" stroke-width="1.5" stroke-linecap="round"></path></svg></div><div><h5 style="${ssrRenderStyle({ "font-size": "0.88rem", "font-weight": "800", "color": "#1F2937", "margin": "0 0 6px" })}">\u540C\u671F\u4E0D\u53EF\u91CD\u590D</h5><p style="${ssrRenderStyle({ "font-size": "0.73rem", "color": "#6B7280", "margin": "0", "line-height": "1.6" })}">\u5DF2\u6392\u671F\u7684\u65F6\u95F4\u6BB5\u4E0D\u5141\u8BB8\u518D\u6B21\u6392\u671F\uFF0C\u6DFB\u52A0\u65F6\u4F1A\u505A\u51B2\u7A81\u6821\u9A8C\uFF0C\u4ECE\u6E90\u5934\u907F\u514D\u8BB2\u5E08\u88AB\u91CD\u590D\u70B9\u7528\u3002</p></div></div></div><div class="kl-col-box alt" style="${ssrRenderStyle({ "margin-bottom": "0" })}"><div style="${ssrRenderStyle({ "display": "flex", "gap": "12px", "align-items": "flex-start" })}"><div style="${ssrRenderStyle({ "width": "36px", "height": "36px", "border-radius": "10px", "display": "flex", "align-items": "center", "justify-content": "center", "flex-shrink": "0", "background": "linear-gradient(135deg,#7C3AED,#6D28D9)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="5.5" stroke="white" stroke-width="1.5"></circle><path d="M8 5V8L10.2 9.6" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></div><div><h5 style="${ssrRenderStyle({ "font-size": "0.88rem", "font-weight": "800", "color": "#1F2937", "margin": "0 0 6px" })}">\u5373\u65F6\u751F\u6548</h5><p style="${ssrRenderStyle({ "font-size": "0.73rem", "color": "#6B7280", "margin": "0", "line-height": "1.6" })}">\u6392\u671F\u4E0D\u8D70\u5BA1\u6279\u6D41\u7A0B\uFF0C\u6DFB\u52A0\u4E0E\u53D6\u6D88\u5747\u7ACB\u5373\u751F\u6548\uFF0C\u4FBF\u4E8E\u4E1A\u52A1\u4E34\u65F6\u8C03\u6574\u8BB2\u5E08\u5B89\u6392\u3002</p></div></div></div><div class="kl-col-box" style="${ssrRenderStyle({ "margin-bottom": "0" })}"><div style="${ssrRenderStyle({ "display": "flex", "gap": "12px", "align-items": "flex-start" })}"><div style="${ssrRenderStyle({ "width": "36px", "height": "36px", "border-radius": "10px", "display": "flex", "align-items": "center", "justify-content": "center", "flex-shrink": "0", "background": "linear-gradient(135deg,#16A34A,#22C55E)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 12L6 8L10 10L14 4" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2 14H14" stroke="white" stroke-width="1.5" stroke-linecap="round"></path></svg></div><div><h5 style="${ssrRenderStyle({ "font-size": "0.88rem", "font-weight": "800", "color": "#1F2937", "margin": "0 0 6px" })}">\u9A71\u52A8\u53EF\u7528\u6807\u8BC6</h5><p style="${ssrRenderStyle({ "font-size": "0.73rem", "color": "#6B7280", "margin": "0", "line-height": "1.6" })}">\u6392\u671F\u7ED3\u679C\u51B3\u5B9A\u8BB2\u5E08\u5728\u70B9\u5C06\u9009\u4EBA\u5217\u8868\u4E2D\u7684\u53EF\u7528\u6807\u8BC6\uFF0C\u4E5F\u662F\u8BB2\u5E08\u9971\u548C\u5EA6\u7EDF\u8BA1\u7684\u6570\u636E\u6765\u6E90\u3002</p></div></div></div></div><div class="kl-tip" style="${ssrRenderStyle({ "margin-top": "14px" })}"><strong>\u4F7F\u7528\u539F\u5219\uFF1A\u6392\u671F\u53EA\u53CD\u6620\u65F6\u95F4\u5360\u7528\uFF0C\u4E0D\u4EE3\u8868\u70B9\u5C06\u5355\u636E\u672C\u8EAB\uFF1B\u70B9\u5C06\u53D6\u6D88\u540E\u9700\u53CA\u65F6\u53D6\u6D88\u5BF9\u5E94\u6392\u671F\uFF0C\u907F\u514D\u8BB2\u5E08\u8D44\u6E90\u88AB\u957F\u671F\u865A\u5360\u3002</strong></div></div></div></div></div><div id="biz-flow" style="${ssrRenderStyle({ "display": "none" })}"><div class="tab-pad"><div class="bf-truth-flow"><h4 class="bf-main-title">\u8BB2\u5E08\u6392\u671F \u2014 \u5168\u94FE\u8DEF\u6D41\u7A0B\u56FE</h4><p class="bf-main-sub">\u5F00\u59CB \u2192 \u67E5\u8BE2\u8BB2\u5E08\u6392\u671F \u2192 \u2605\u6392\u671F\u7EF4\u62A4\u2605 \u2192 \u8BB2\u5E08\u65F6\u95F4\u5360\u7528/\u91CA\u653E \u2192 \u4F9B\u70B9\u5C06\u67E5\u8BE2\u53EF\u7528\u65F6\u95F4 \u2192 \u7ED3\u675F\uFF08\u4E0A\u6E38\uFF1A\u8BB2\u5E08\u6863\u6848/\u70B9\u5C06\u4E1A\u52A1\uFF09</p><div class="bf-fc-svg-wrap"><svg class="bf-fc-svg" style="${ssrRenderStyle({ "max-height": "none" })}" viewBox="0 0 1200 760" xmlns="http://www.w3.org/2000/svg"><defs><marker id="arr-green" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon points="0,0 10,5 0,10" fill="#16A34A"></polygon></marker><marker id="arr-gray" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon points="0,0 10,5 0,10" fill="#9CA3AF"></polygon></marker><marker id="arr-blue" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon points="0,0 10,5 0,10" fill="#3B82F6"></polygon></marker><marker id="arr-red" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon points="0,0 10,5 0,10" fill="#EF4444"></polygon></marker><filter id="shadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000" flood-opacity="0.15"></feDropShadow></filter></defs><rect x="50" y="20" width="1100" height="95" rx="8" fill="#EFF6FF" stroke="#3B82F6" stroke-width="1.5" stroke-dasharray="6,4"></rect><text x="600" y="42" text-anchor="middle" fill="#1D4ED8" font-size="13" font-weight="600">\u4E0A\u6E38\u652F\u6491</text><rect x="116" y="56" width="230" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"></rect><text x="231" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">\u8BB2\u5E08\u6863\u6848</text><rect x="362" y="56" width="230" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"></rect><text x="477" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">\u5355\u5E97\u70B9\u5C06</text><rect x="608" y="56" width="230" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"></rect><text x="723" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">\u7279\u8BAD\u8425\u70B9\u5C06</text><rect x="854" y="56" width="230" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"></rect><text x="969" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">\u6D3B\u52A8\u70B9\u5C06</text><line x1="560" y1="115" x2="560" y2="150" stroke="#3B82F6" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#arr-blue)"></line><rect x="515" y="150" width="90" height="44" rx="6" fill="#FAF5FF" stroke="#9333EA" stroke-width="1.5" stroke-dasharray="5,3"></rect><text x="560" y="177" text-anchor="middle" fill="#7C3AED" font-size="13" font-weight="600">\u5F00\u59CB</text><line x1="560" y1="194" x2="560" y2="228" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"></line><rect x="460" y="228" width="200" height="44" rx="6" fill="#F0FDF4" stroke="#16A34A" stroke-width="2"></rect><text x="560" y="255" text-anchor="middle" fill="#166534" font-size="13" font-weight="600">\u67E5\u8BE2\u8BB2\u5E08\u6392\u671F</text><line x1="560" y1="272" x2="560" y2="300" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"></line><rect x="450" y="300" width="220" height="54" rx="6" fill="#16A34A" stroke="#15803D" stroke-width="2" filter="url(#shadow)"></rect><text x="560" y="325" text-anchor="middle" fill="#FFFFFF" font-size="13" font-weight="700">\u2605\u8BB2\u5E08\u6392\u671F\u7EF4\u62A4\u2605</text><text x="560" y="345" text-anchor="middle" fill="#DCFCE7" font-size="10">\u6DFB\u52A0(\u51B2\u7A81\u6821\u9A8C)\xB7\u53D6\u6D88\u91CA\u653E</text><line x1="560" y1="354" x2="560" y2="386" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"></line><rect x="475" y="386" width="170" height="44" rx="6" fill="#F0FDF4" stroke="#16A34A" stroke-width="2"></rect><text x="560" y="413" text-anchor="middle" fill="#166534" font-size="13" font-weight="600">\u8BB2\u5E08\u65F6\u95F4\u5360\u7528/\u91CA\u653E</text><line x1="560" y1="430" x2="560" y2="460" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"></line><rect x="465" y="460" width="190" height="44" rx="6" fill="#F0FDF4" stroke="#16A34A" stroke-width="2"></rect><text x="560" y="487" text-anchor="middle" fill="#166534" font-size="13" font-weight="600">\u4F9B\u70B9\u5C06\u67E5\u8BE2\u53EF\u7528\u65F6\u95F4</text><line x1="560" y1="504" x2="560" y2="540" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"></line><rect x="515" y="540" width="90" height="40" rx="6" fill="#FAF5FF" stroke="#9333EA" stroke-width="1.5" stroke-dasharray="5,3"></rect><text x="560" y="565" text-anchor="middle" fill="#7C3AED" font-size="13" font-weight="600">\u7ED3\u675F</text><line x1="560" y1="580" x2="560" y2="600" stroke="#16A34A" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#arr-green)"></line><rect x="50" y="600" width="1100" height="95" rx="8" fill="#F0FDF4" stroke="#16A34A" stroke-width="1.5" stroke-dasharray="6,4"></rect><text x="600" y="622" text-anchor="middle" fill="#166534" font-size="13" font-weight="600">\u4E0B\u6E38\u5F71\u54CD</text><rect x="280" y="638" width="300" height="36" rx="5" fill="#FFFFFF" stroke="#16A34A" stroke-width="1.2"></rect><text x="430" y="661" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">\u70B9\u5C06\u4E1A\u52A1(\u8BB2\u5E08\u9009\u62E9)</text><rect x="620" y="638" width="300" height="36" rx="5" fill="#FFFFFF" stroke="#16A34A" stroke-width="1.2"></rect><text x="770" y="661" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">\u8BB2\u5E08\u9971\u548C\u5EA6\u7EDF\u8BA1</text></svg></div><div class="bf-fc-legend"><span class="bf-fc-legend-item"><span class="bf-fc-dot bf-fc-dot-green"></span> \u4E3B\u6D41\u7A0B\u6B65\u9AA4</span><span class="bf-fc-legend-item"><span class="bf-fc-dot bf-fc-dot-purple"></span> \u5F00\u59CB/\u7ED3\u675F/\u5224\u65AD</span><span class="bf-fc-legend-item"><span class="bf-fc-dot bf-fc-dot-blue"></span> \u4E0A\u6E38\u652F\u6491\u670D\u52A1</span><span class="bf-fc-legend-item"><span style="${ssrRenderStyle({ "display": "inline-block", "width": "22px", "height": "2px", "background": "#16A34A" })}"></span> \u4E0B\u6E38\u5F71\u54CD/\u6570\u636E\u5C55\u793A</span></div></div></div></div><div id="key-logic" style="${ssrRenderStyle({ "display": "none" })}"><div class="tab-pad"><div class="kl-wrap">`);
  _push(ssrRenderComponent(_component_KbCard, {
    num: "1",
    title: "\u91CD\u70B9\u903B\u8F911\uFF1A\u540C\u671F\u4E0D\u53EF\u91CD\u590D"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u610F\u4E49</strong>\uFF1A\u4ECE\u6E90\u5934\u907F\u514D\u8BB2\u5E08\u88AB\u91CD\u590D\u70B9\u7528\uFF0C\u4FDD\u8BC1\u6392\u671F\u6570\u636E\u7684\u552F\u4E00\u6027</li><li${_scopeId}><strong${_scopeId}>\u5177\u4F53\u903B\u8F91\u63CF\u8FF0</strong>\uFF1A</li><li${_scopeId}>\u5DF2\u6392\u671F\u7684\u65F6\u95F4\u6BB5\u4E0D\u5141\u8BB8\u518D\u6B21\u6392\u671F</li><li${_scopeId}>\u6DFB\u52A0\u65F6\u505A\u51B2\u7A81\u6821\u9A8C\uFF1A\u65B0\u6392\u671F\u65F6\u95F4\u6BB5\u4E0E\u5DF2\u6709\u6392\u671F\u65F6\u95F4\u6BB5\u5B58\u5728\u4EA4\u96C6\u5373\u4E3A\u51B2\u7A81</li><li${_scopeId}>\u51B2\u7A81\u65F6\u63D0\u793A&quot;\u8BE5\u8BB2\u5E08\u5728\u6307\u5B9A\u65F6\u95F4\u6BB5\u5DF2\u6709\u6392\u671F\uFF0C\u8BF7\u91CD\u65B0\u9009\u62E9&quot;</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u610F\u4E49"),
              createTextVNode("\uFF1A\u4ECE\u6E90\u5934\u907F\u514D\u8BB2\u5E08\u88AB\u91CD\u590D\u70B9\u7528\uFF0C\u4FDD\u8BC1\u6392\u671F\u6570\u636E\u7684\u552F\u4E00\u6027")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u5177\u4F53\u903B\u8F91\u63CF\u8FF0"),
              createTextVNode("\uFF1A")
            ]),
            createVNode("li", null, "\u5DF2\u6392\u671F\u7684\u65F6\u95F4\u6BB5\u4E0D\u5141\u8BB8\u518D\u6B21\u6392\u671F"),
            createVNode("li", null, "\u6DFB\u52A0\u65F6\u505A\u51B2\u7A81\u6821\u9A8C\uFF1A\u65B0\u6392\u671F\u65F6\u95F4\u6BB5\u4E0E\u5DF2\u6709\u6392\u671F\u65F6\u95F4\u6BB5\u5B58\u5728\u4EA4\u96C6\u5373\u4E3A\u51B2\u7A81"),
            createVNode("li", null, '\u51B2\u7A81\u65F6\u63D0\u793A"\u8BE5\u8BB2\u5E08\u5728\u6307\u5B9A\u65F6\u95F4\u6BB5\u5DF2\u6709\u6392\u671F\uFF0C\u8BF7\u91CD\u65B0\u9009\u62E9"')
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, {
    num: "2",
    title: "\u91CD\u70B9\u903B\u8F912\uFF1A\u5373\u65F6\u751F\u6548"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u610F\u4E49</strong>\uFF1A\u4FBF\u4E8E\u4E1A\u52A1\u4E34\u65F6\u8C03\u6574\u8BB2\u5E08\u5B89\u6392\uFF0C\u65E0\u9700\u7B49\u5F85\u5BA1\u6279</li><li${_scopeId}><strong${_scopeId}>\u5177\u4F53\u903B\u8F91\u63CF\u8FF0</strong>\uFF1A</li><li${_scopeId}>\u6392\u671F\u4E0D\u8D70\u5BA1\u6279\u6D41\u7A0B</li><li${_scopeId}>\u6DFB\u52A0\u4E0E\u53D6\u6D88\u5747\u7ACB\u5373\u751F\u6548</li><li${_scopeId}>\u65E0\u5DE5\u4F5C\u6D41\u7F16\u7801</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u610F\u4E49"),
              createTextVNode("\uFF1A\u4FBF\u4E8E\u4E1A\u52A1\u4E34\u65F6\u8C03\u6574\u8BB2\u5E08\u5B89\u6392\uFF0C\u65E0\u9700\u7B49\u5F85\u5BA1\u6279")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u5177\u4F53\u903B\u8F91\u63CF\u8FF0"),
              createTextVNode("\uFF1A")
            ]),
            createVNode("li", null, "\u6392\u671F\u4E0D\u8D70\u5BA1\u6279\u6D41\u7A0B"),
            createVNode("li", null, "\u6DFB\u52A0\u4E0E\u53D6\u6D88\u5747\u7ACB\u5373\u751F\u6548"),
            createVNode("li", null, "\u65E0\u5DE5\u4F5C\u6D41\u7F16\u7801")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, {
    num: "3",
    title: "\u91CD\u70B9\u903B\u8F913\uFF1A\u9A71\u52A8\u53EF\u7528\u6807\u8BC6"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u610F\u4E49</strong>\uFF1A\u6392\u671F\u662F\u70B9\u5C06\u9009\u4EBA\u4E0E\u9971\u548C\u5EA6\u7EDF\u8BA1\u7684\u57FA\u7840\u6570\u636E</li><li${_scopeId}><strong${_scopeId}>\u5177\u4F53\u903B\u8F91\u63CF\u8FF0</strong>\uFF1A</li><li${_scopeId}>\u6392\u671F\u7ED3\u679C\u51B3\u5B9A\u8BB2\u5E08\u5728\u70B9\u5C06\u9009\u4EBA\u5217\u8868\u4E2D\u7684\u53EF\u7528\u6807\u8BC6</li><li${_scopeId}>\u6392\u671F\u6570\u636E\u662F\u8BB2\u5E08\u9971\u548C\u5EA6\u7EDF\u8BA1\u7684\u6570\u636E\u6765\u6E90</li><li${_scopeId}>\u5DF2\u6392\u671F\u65F6\u95F4\u6BB5\u8BB2\u5E08\u5728\u70B9\u5C06\u5217\u8868\u4E2D\u6807\u8BB0\u4E3A\u4E0D\u53EF\u7528</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u610F\u4E49"),
              createTextVNode("\uFF1A\u6392\u671F\u662F\u70B9\u5C06\u9009\u4EBA\u4E0E\u9971\u548C\u5EA6\u7EDF\u8BA1\u7684\u57FA\u7840\u6570\u636E")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u5177\u4F53\u903B\u8F91\u63CF\u8FF0"),
              createTextVNode("\uFF1A")
            ]),
            createVNode("li", null, "\u6392\u671F\u7ED3\u679C\u51B3\u5B9A\u8BB2\u5E08\u5728\u70B9\u5C06\u9009\u4EBA\u5217\u8868\u4E2D\u7684\u53EF\u7528\u6807\u8BC6"),
            createVNode("li", null, "\u6392\u671F\u6570\u636E\u662F\u8BB2\u5E08\u9971\u548C\u5EA6\u7EDF\u8BA1\u7684\u6570\u636E\u6765\u6E90"),
            createVNode("li", null, "\u5DF2\u6392\u671F\u65F6\u95F4\u6BB5\u8BB2\u5E08\u5728\u70B9\u5C06\u5217\u8868\u4E2D\u6807\u8BB0\u4E3A\u4E0D\u53EF\u7528")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, {
    num: "4",
    title: "\u91CD\u70B9\u903B\u8F914\uFF1A\u65B0\u5EFA\u6392\u671F"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u610F\u4E49</strong>\uFF1A\u767B\u8BB0\u8BB2\u5E08\u65F6\u95F4\u5360\u7528\uFF0C\u6807\u8BB0\u4E0D\u53EF\u7528\u65F6\u6BB5</li><li${_scopeId}><strong${_scopeId}>\u5177\u4F53\u903B\u8F91\u63CF\u8FF0</strong>\uFF1A</li></ul><p${_scopeId}>1. \u70B9\u51FB&quot;\u65B0\u5EFA\u6392\u671F&quot;\u6309\u94AE\uFF0C\u6253\u5F00 Modal \u5F39\u7A97</p><p${_scopeId}>2. \u586B\u5199\u65E5\u671F\u7C7B\u578B\uFF08dateType\uFF0CSelect \u5FC5\u586B\uFF0C\u503C\u96C6 MBO.DATE_TYPE\uFF09</p><p${_scopeId}>3. \u586B\u5199\u65E5\u671F\uFF08date\uFF0CDatePicker \u8303\u56F4\u5FC5\u586B\uFF0C\u8F6C\u6362\u4E3A startDate \u548C endDate\uFF09</p><p${_scopeId}>4. \u586B\u5199\u539F\u56E0\uFF08reason\uFF0CTextField \u9009\u586B\uFF09</p><p${_scopeId}>5. \u63D0\u4EA4\u65F6\u5C06\u65E5\u671F\u6570\u7EC4\u8F6C\u6362\u4E3A startDate \u548C endDate\uFF08\u683C\u5F0F YYYY-MM-DD\uFF09</p><p${_scopeId}>6. \u8C03\u7528 <code${_scopeId}>POST mlt/maLecturerSchedule/save</code> \u63A5\u53E3</p><p${_scopeId}>7. \u6210\u529F\u540E\u901A\u8FC7 <code${_scopeId}>setToggleTag(!toggleTag)</code> \u5237\u65B0\u65E5\u5386\u7EC4\u4EF6</p>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u610F\u4E49"),
              createTextVNode("\uFF1A\u767B\u8BB0\u8BB2\u5E08\u65F6\u95F4\u5360\u7528\uFF0C\u6807\u8BB0\u4E0D\u53EF\u7528\u65F6\u6BB5")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u5177\u4F53\u903B\u8F91\u63CF\u8FF0"),
              createTextVNode("\uFF1A")
            ])
          ]),
          createVNode("p", null, '1. \u70B9\u51FB"\u65B0\u5EFA\u6392\u671F"\u6309\u94AE\uFF0C\u6253\u5F00 Modal \u5F39\u7A97'),
          createVNode("p", null, "2. \u586B\u5199\u65E5\u671F\u7C7B\u578B\uFF08dateType\uFF0CSelect \u5FC5\u586B\uFF0C\u503C\u96C6 MBO.DATE_TYPE\uFF09"),
          createVNode("p", null, "3. \u586B\u5199\u65E5\u671F\uFF08date\uFF0CDatePicker \u8303\u56F4\u5FC5\u586B\uFF0C\u8F6C\u6362\u4E3A startDate \u548C endDate\uFF09"),
          createVNode("p", null, "4. \u586B\u5199\u539F\u56E0\uFF08reason\uFF0CTextField \u9009\u586B\uFF09"),
          createVNode("p", null, "5. \u63D0\u4EA4\u65F6\u5C06\u65E5\u671F\u6570\u7EC4\u8F6C\u6362\u4E3A startDate \u548C endDate\uFF08\u683C\u5F0F YYYY-MM-DD\uFF09"),
          createVNode("p", null, [
            createTextVNode("6. \u8C03\u7528 "),
            createVNode("code", null, "POST mlt/maLecturerSchedule/save"),
            createTextVNode(" \u63A5\u53E3")
          ]),
          createVNode("p", null, [
            createTextVNode("7. \u6210\u529F\u540E\u901A\u8FC7 "),
            createVNode("code", null, "setToggleTag(!toggleTag)"),
            createTextVNode(" \u5237\u65B0\u65E5\u5386\u7EC4\u4EF6")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, {
    num: "5",
    title: "\u91CD\u70B9\u903B\u8F915\uFF1A\u53D6\u6D88\u6392\u671F"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u610F\u4E49</strong>\uFF1A\u91CA\u653E\u8BB2\u5E08\u65F6\u95F4\u5360\u7528\uFF0C\u6062\u590D\u53EF\u7528\u72B6\u6001</li><li${_scopeId}><strong${_scopeId}>\u5177\u4F53\u903B\u8F91\u63CF\u8FF0</strong>\uFF1A</li></ul><p${_scopeId}>1. \u70B9\u51FB&quot;\u53D6\u6D88\u6392\u671F&quot;\u6309\u94AE\uFF0C\u6253\u5F00 Modal \u5F39\u7A97</p><p${_scopeId}>2. \u586B\u5199\u65E5\u671F\uFF08date\uFF0CDatePicker \u8303\u56F4\u5FC5\u586B\uFF09</p><p${_scopeId}>3. \u63D0\u4EA4\u65F6\u8F6C\u6362\u4E3A startDate \u548C endDate\uFF0C\u901A\u8FC7 params \u53C2\u6570\u4F20\u9012</p><p${_scopeId}>4. \u8C03\u7528 <code${_scopeId}>POST mlt/maLecturerSchedule/cancel</code> \u63A5\u53E3</p><p${_scopeId}>5. \u6210\u529F\u540E\u5237\u65B0\u65E5\u5386</p>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u610F\u4E49"),
              createTextVNode("\uFF1A\u91CA\u653E\u8BB2\u5E08\u65F6\u95F4\u5360\u7528\uFF0C\u6062\u590D\u53EF\u7528\u72B6\u6001")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u5177\u4F53\u903B\u8F91\u63CF\u8FF0"),
              createTextVNode("\uFF1A")
            ])
          ]),
          createVNode("p", null, '1. \u70B9\u51FB"\u53D6\u6D88\u6392\u671F"\u6309\u94AE\uFF0C\u6253\u5F00 Modal \u5F39\u7A97'),
          createVNode("p", null, "2. \u586B\u5199\u65E5\u671F\uFF08date\uFF0CDatePicker \u8303\u56F4\u5FC5\u586B\uFF09"),
          createVNode("p", null, "3. \u63D0\u4EA4\u65F6\u8F6C\u6362\u4E3A startDate \u548C endDate\uFF0C\u901A\u8FC7 params \u53C2\u6570\u4F20\u9012"),
          createVNode("p", null, [
            createTextVNode("4. \u8C03\u7528 "),
            createVNode("code", null, "POST mlt/maLecturerSchedule/cancel"),
            createTextVNode(" \u63A5\u53E3")
          ]),
          createVNode("p", null, "5. \u6210\u529F\u540E\u5237\u65B0\u65E5\u5386")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, {
    num: "6",
    title: "\u91CD\u70B9\u903B\u8F916\uFF1A\u65E5\u5386\u5237\u65B0\u673A\u5236"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u610F\u4E49</strong>\uFF1A\u4FDD\u8BC1\u6392\u671F\u64CD\u4F5C\u540E\u65E5\u5386\u89C6\u56FE\u53CA\u65F6\u66F4\u65B0</li><li${_scopeId}><strong${_scopeId}>\u5177\u4F53\u903B\u8F91\u63CF\u8FF0</strong>\uFF1A</li><li${_scopeId}>\u901A\u8FC7 <code${_scopeId}>toggleTag</code> \u72B6\u6001\u53D8\u91CF\u63A7\u5236\u65E5\u5386\u5237\u65B0</li><li${_scopeId}>\u65B0\u5EFA/\u53D6\u6D88\u6392\u671F\u6210\u529F\u540E\u6267\u884C <code${_scopeId}>setToggleTag(!toggleTag)</code></li><li${_scopeId}>LecturerCalendar \u7EC4\u4EF6\u63A5\u6536 <code${_scopeId}>refresh</code> \u5C5E\u6027\uFF0C\u503C\u53D8\u5316\u65F6\u91CD\u65B0\u52A0\u8F7D\u6570\u636E</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u610F\u4E49"),
              createTextVNode("\uFF1A\u4FDD\u8BC1\u6392\u671F\u64CD\u4F5C\u540E\u65E5\u5386\u89C6\u56FE\u53CA\u65F6\u66F4\u65B0")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u5177\u4F53\u903B\u8F91\u63CF\u8FF0"),
              createTextVNode("\uFF1A")
            ]),
            createVNode("li", null, [
              createTextVNode("\u901A\u8FC7 "),
              createVNode("code", null, "toggleTag"),
              createTextVNode(" \u72B6\u6001\u53D8\u91CF\u63A7\u5236\u65E5\u5386\u5237\u65B0")
            ]),
            createVNode("li", null, [
              createTextVNode("\u65B0\u5EFA/\u53D6\u6D88\u6392\u671F\u6210\u529F\u540E\u6267\u884C "),
              createVNode("code", null, "setToggleTag(!toggleTag)")
            ]),
            createVNode("li", null, [
              createTextVNode("LecturerCalendar \u7EC4\u4EF6\u63A5\u6536 "),
              createVNode("code", null, "refresh"),
              createTextVNode(" \u5C5E\u6027\uFF0C\u503C\u53D8\u5316\u65F6\u91CD\u65B0\u52A0\u8F7D\u6570\u636E")
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, {
    num: "7",
    title: "\u91CD\u70B9\u903B\u8F917\uFF1A\u8868\u5355\u52A8\u6001\u6E32\u67D3"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u610F\u4E49</strong>\uFF1A\u590D\u7528\u5F39\u7A97\u7ED3\u6784\uFF0C\u6309\u5B57\u6BB5\u914D\u7F6E\u52A8\u6001\u6E32\u67D3\u8868\u5355\u9879</li><li${_scopeId}><strong${_scopeId}>\u5177\u4F53\u903B\u8F91\u63CF\u8FF0</strong>\uFF1A</li><li${_scopeId}>\u65B0\u5EFA\u548C\u53D6\u6D88\u5F39\u7A97\u7684\u8868\u5355\u9879\u901A\u8FC7 <code${_scopeId}>createDSProps.fields</code> \u548C <code${_scopeId}>cancelDSProps.fields</code> \u52A8\u6001\u6E32\u67D3</li><li${_scopeId}><code${_scopeId}>dateType</code> \u5B57\u6BB5\u6E32\u67D3\u4E3A Select \u7EC4\u4EF6</li><li${_scopeId}><code${_scopeId}>date</code> \u5B57\u6BB5\u6E32\u67D3\u4E3A DatePicker \u7EC4\u4EF6</li><li${_scopeId}>\u5176\u4ED6\u5B57\u6BB5\u6E32\u67D3\u4E3A TextField \u7EC4\u4EF6</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u610F\u4E49"),
              createTextVNode("\uFF1A\u590D\u7528\u5F39\u7A97\u7ED3\u6784\uFF0C\u6309\u5B57\u6BB5\u914D\u7F6E\u52A8\u6001\u6E32\u67D3\u8868\u5355\u9879")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u5177\u4F53\u903B\u8F91\u63CF\u8FF0"),
              createTextVNode("\uFF1A")
            ]),
            createVNode("li", null, [
              createTextVNode("\u65B0\u5EFA\u548C\u53D6\u6D88\u5F39\u7A97\u7684\u8868\u5355\u9879\u901A\u8FC7 "),
              createVNode("code", null, "createDSProps.fields"),
              createTextVNode(" \u548C "),
              createVNode("code", null, "cancelDSProps.fields"),
              createTextVNode(" \u52A8\u6001\u6E32\u67D3")
            ]),
            createVNode("li", null, [
              createVNode("code", null, "dateType"),
              createTextVNode(" \u5B57\u6BB5\u6E32\u67D3\u4E3A Select \u7EC4\u4EF6")
            ]),
            createVNode("li", null, [
              createVNode("code", null, "date"),
              createTextVNode(" \u5B57\u6BB5\u6E32\u67D3\u4E3A DatePicker \u7EC4\u4EF6")
            ]),
            createVNode("li", null, "\u5176\u4ED6\u5B57\u6BB5\u6E32\u67D3\u4E3A TextField \u7EC4\u4EF6")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div><div id="detail-logic" style="${ssrRenderStyle({ "display": "none" })}"><div class="tab-pad"><div class="kl-wrap">`);
  _push(ssrRenderComponent(_component_KbCard, { title: "\u5217\u8868\u9875" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u8DEF\u7531</strong>\uFF1A<code${_scopeId}>/general/base/lecturerSchedule</code></li><li${_scopeId}><strong${_scopeId}>\u4E3B\u67E5\u8BE2 API</strong>\uFF1A<code${_scopeId}>POST mlt/maLecturerSchedule/list</code></li><li${_scopeId}><strong${_scopeId}>\u9875\u9762\u4E3B\u4F53</strong>\uFF1ALecturerCalendar \u65E5\u5386\u7EC4\u4EF6\u5C55\u793A\u6392\u671F</li><li${_scopeId}><strong${_scopeId}>\u64CD\u4F5C\u6309\u94AE</strong>\uFF1A\u65B0\u5EFA\u6392\u671F\u3001\u53D6\u6D88\u6392\u671F</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u8DEF\u7531"),
              createTextVNode("\uFF1A"),
              createVNode("code", null, "/general/base/lecturerSchedule")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u4E3B\u67E5\u8BE2 API"),
              createTextVNode("\uFF1A"),
              createVNode("code", null, "POST mlt/maLecturerSchedule/list")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u9875\u9762\u4E3B\u4F53"),
              createTextVNode("\uFF1ALecturerCalendar \u65E5\u5386\u7EC4\u4EF6\u5C55\u793A\u6392\u671F")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u64CD\u4F5C\u6309\u94AE"),
              createTextVNode("\uFF1A\u65B0\u5EFA\u6392\u671F\u3001\u53D6\u6D88\u6392\u671F")
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, { title: "\u754C\u9762\u6A21\u5757" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h4${_scopeId}>\u65B0\u5EFA\u6392\u671F\u5F39\u7A97\u5B57\u6BB5</h4><table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5B57\u6BB5\u540D</th><th${_scopeId}>\u6570\u636E\u5E93\u5217\u540D</th><th${_scopeId}>\u7EC4\u4EF6</th><th${_scopeId}>\u4E1A\u52A1\u91CA\u4E49</th><th${_scopeId}>\u663E\u9690\u6761\u4EF6</th><th${_scopeId}>\u53D6\u503C/\u8D4B\u503C\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u65E5\u671F\u7C7B\u578B</td><td${_scopeId}>DATE_TYPE</td><td${_scopeId}>Select</td><td${_scopeId}>\u6392\u671F\u65E5\u671F\u7C7B\u578B</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u5FC5\u586B\uFF0C\u503C\u96C6 MBO.DATE_TYPE</td></tr><tr${_scopeId}><td${_scopeId}>\u65E5\u671F</td><td${_scopeId}>START_DATE/END_DATE</td><td${_scopeId}>DatePicker(range)</td><td${_scopeId}>\u6392\u671F\u65E5\u671F\u8303\u56F4</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u5FC5\u586B\uFF0C\u8F6C\u6362\u4E3A startDate/endDate\uFF08YYYY-MM-DD\uFF09</td></tr><tr${_scopeId}><td${_scopeId}>\u539F\u56E0</td><td${_scopeId}>REASON</td><td${_scopeId}>TextField</td><td${_scopeId}>\u6392\u671F\u539F\u56E0\u8BF4\u660E</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u9009\u586B</td></tr></tbody></table><h4${_scopeId}>\u53D6\u6D88\u6392\u671F\u5F39\u7A97\u5B57\u6BB5</h4><table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5B57\u6BB5\u540D</th><th${_scopeId}>\u6570\u636E\u5E93\u5217\u540D</th><th${_scopeId}>\u7EC4\u4EF6</th><th${_scopeId}>\u4E1A\u52A1\u91CA\u4E49</th><th${_scopeId}>\u663E\u9690\u6761\u4EF6</th><th${_scopeId}>\u53D6\u503C/\u8D4B\u503C\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u65E5\u671F</td><td${_scopeId}>START_DATE/END_DATE</td><td${_scopeId}>DatePicker(range)</td><td${_scopeId}>\u53D6\u6D88\u6392\u671F\u65E5\u671F\u8303\u56F4</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u5FC5\u586B\uFF0C\u8F6C\u6362\u4E3A startDate/endDate\uFF08YYYY-MM-DD\uFF09</td></tr></tbody></table>`);
      } else {
        return [
          createVNode("h4", null, "\u65B0\u5EFA\u6392\u671F\u5F39\u7A97\u5B57\u6BB5"),
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
                createVNode("td", null, "\u65E5\u671F\u7C7B\u578B"),
                createVNode("td", null, "DATE_TYPE"),
                createVNode("td", null, "Select"),
                createVNode("td", null, "\u6392\u671F\u65E5\u671F\u7C7B\u578B"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u5FC5\u586B\uFF0C\u503C\u96C6 MBO.DATE_TYPE")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u65E5\u671F"),
                createVNode("td", null, "START_DATE/END_DATE"),
                createVNode("td", null, "DatePicker(range)"),
                createVNode("td", null, "\u6392\u671F\u65E5\u671F\u8303\u56F4"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u5FC5\u586B\uFF0C\u8F6C\u6362\u4E3A startDate/endDate\uFF08YYYY-MM-DD\uFF09")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u539F\u56E0"),
                createVNode("td", null, "REASON"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u6392\u671F\u539F\u56E0\u8BF4\u660E"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u9009\u586B")
              ])
            ])
          ]),
          createVNode("h4", null, "\u53D6\u6D88\u6392\u671F\u5F39\u7A97\u5B57\u6BB5"),
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
                createVNode("td", null, "\u65E5\u671F"),
                createVNode("td", null, "START_DATE/END_DATE"),
                createVNode("td", null, "DatePicker(range)"),
                createVNode("td", null, "\u53D6\u6D88\u6392\u671F\u65E5\u671F\u8303\u56F4"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u5FC5\u586B\uFF0C\u8F6C\u6362\u4E3A startDate/endDate\uFF08YYYY-MM-DD\uFF09")
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
        _push2(`<p${_scopeId}>\u65E0\u9009\u62E9\u5F39\u7A97\u3002\u9875\u9762\u4E3B\u4F53\u662F LecturerCalendar \u65E5\u5386\u7EC4\u4EF6\u5C55\u793A\u6392\u671F\u3002</p>`);
      } else {
        return [
          createVNode("p", null, "\u65E0\u9009\u62E9\u5F39\u7A97\u3002\u9875\u9762\u4E3B\u4F53\u662F LecturerCalendar \u65E5\u5386\u7EC4\u4EF6\u5C55\u793A\u6392\u671F\u3002")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, { title: "\u5176\u4ED6\u6309\u94AE" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u6309\u94AE\u540D\u79F0</th><th${_scopeId}>\u6309\u94AE\u4F5C\u7528</th><th${_scopeId}>\u6240\u5728\u4F4D\u7F6E</th><th${_scopeId}>\u663E\u9690\u6761\u4EF6/\u53EF\u70B9\u51FB\u6761\u4EF6</th><th${_scopeId}>\u5F71\u54CD</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u65B0\u5EFA\u6392\u671F</td><td${_scopeId}>\u5F39\u7A97\u586B\u5199\u6392\u671F\u4FE1\u606F\u5E76\u63D0\u4EA4</td><td${_scopeId}>\u5217\u8868\u8868\u5934</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u8C03\u7528 save \u63A5\u53E3\uFF0C\u5237\u65B0\u65E5\u5386</td></tr><tr${_scopeId}><td${_scopeId}>\u53D6\u6D88\u6392\u671F</td><td${_scopeId}>\u5F39\u7A97\u586B\u5199\u65E5\u671F\u8303\u56F4\u5E76\u53D6\u6D88</td><td${_scopeId}>\u5217\u8868\u8868\u5934</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u8C03\u7528 cancel \u63A5\u53E3\uFF0C\u5237\u65B0\u65E5\u5386</td></tr></tbody></table><h4${_scopeId}>\u6309\u94AE1\uFF1A\u65B0\u5EFA\u6392\u671F\uFF08\u5217\u8868\u8868\u5934\uFF09</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u53EF\u70B9\u51FB\u6761\u4EF6</strong>\uFF1A\u59CB\u7EC8\u53EF\u70B9\u51FB</li><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u903B\u8F91</strong>\uFF1A\u6253\u5F00\u65B0\u5EFA\u6392\u671F\u5F39\u7A97 \u2192 \u586B\u5199\u65E5\u671F\u7C7B\u578B\u3001\u65E5\u671F\u8303\u56F4\u3001\u539F\u56E0 \u2192 \u63D0\u4EA4 <code${_scopeId}>POST mlt/maLecturerSchedule/save</code></li><li${_scopeId}><strong${_scopeId}>\u6210\u529F\u540E\u5904\u7406</strong>\uFF1A<code${_scopeId}>setToggleTag(!toggleTag)</code> \u5237\u65B0\u65E5\u5386</li><li${_scopeId}><strong${_scopeId}>\u6743\u9650\u7F16\u7801</strong>\uFF1A<code${_scopeId}>hzero.general_manage.base_manage.lecturer_schedule.ps.save</code></li></ul><h4${_scopeId}>\u6309\u94AE2\uFF1A\u53D6\u6D88\u6392\u671F\uFF08\u5217\u8868\u8868\u5934\uFF09</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u53EF\u70B9\u51FB\u6761\u4EF6</strong>\uFF1A\u59CB\u7EC8\u53EF\u70B9\u51FB</li><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u903B\u8F91</strong>\uFF1A\u6253\u5F00\u53D6\u6D88\u6392\u671F\u5F39\u7A97 \u2192 \u586B\u5199\u65E5\u671F\u8303\u56F4 \u2192 \u63D0\u4EA4 <code${_scopeId}>POST mlt/maLecturerSchedule/cancel</code></li><li${_scopeId}><strong${_scopeId}>\u6210\u529F\u540E\u5904\u7406</strong>\uFF1A\u5237\u65B0\u65E5\u5386</li><li${_scopeId}><strong${_scopeId}>\u6743\u9650\u7F16\u7801</strong>\uFF1A<code${_scopeId}>hzero.general_manage.base_manage.lecturer_schedule.ps.cancel</code></li></ul>`);
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
                createVNode("td", null, "\u65B0\u5EFA\u6392\u671F"),
                createVNode("td", null, "\u5F39\u7A97\u586B\u5199\u6392\u671F\u4FE1\u606F\u5E76\u63D0\u4EA4"),
                createVNode("td", null, "\u5217\u8868\u8868\u5934"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u8C03\u7528 save \u63A5\u53E3\uFF0C\u5237\u65B0\u65E5\u5386")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u53D6\u6D88\u6392\u671F"),
                createVNode("td", null, "\u5F39\u7A97\u586B\u5199\u65E5\u671F\u8303\u56F4\u5E76\u53D6\u6D88"),
                createVNode("td", null, "\u5217\u8868\u8868\u5934"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u8C03\u7528 cancel \u63A5\u53E3\uFF0C\u5237\u65B0\u65E5\u5386")
              ])
            ])
          ]),
          createVNode("h4", null, "\u6309\u94AE1\uFF1A\u65B0\u5EFA\u6392\u671F\uFF08\u5217\u8868\u8868\u5934\uFF09"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u53EF\u70B9\u51FB\u6761\u4EF6"),
              createTextVNode("\uFF1A\u59CB\u7EC8\u53EF\u70B9\u51FB")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u903B\u8F91"),
              createTextVNode("\uFF1A\u6253\u5F00\u65B0\u5EFA\u6392\u671F\u5F39\u7A97 \u2192 \u586B\u5199\u65E5\u671F\u7C7B\u578B\u3001\u65E5\u671F\u8303\u56F4\u3001\u539F\u56E0 \u2192 \u63D0\u4EA4 "),
              createVNode("code", null, "POST mlt/maLecturerSchedule/save")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u6210\u529F\u540E\u5904\u7406"),
              createTextVNode("\uFF1A"),
              createVNode("code", null, "setToggleTag(!toggleTag)"),
              createTextVNode(" \u5237\u65B0\u65E5\u5386")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u6743\u9650\u7F16\u7801"),
              createTextVNode("\uFF1A"),
              createVNode("code", null, "hzero.general_manage.base_manage.lecturer_schedule.ps.save")
            ])
          ]),
          createVNode("h4", null, "\u6309\u94AE2\uFF1A\u53D6\u6D88\u6392\u671F\uFF08\u5217\u8868\u8868\u5934\uFF09"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u53EF\u70B9\u51FB\u6761\u4EF6"),
              createTextVNode("\uFF1A\u59CB\u7EC8\u53EF\u70B9\u51FB")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u903B\u8F91"),
              createTextVNode("\uFF1A\u6253\u5F00\u53D6\u6D88\u6392\u671F\u5F39\u7A97 \u2192 \u586B\u5199\u65E5\u671F\u8303\u56F4 \u2192 \u63D0\u4EA4 "),
              createVNode("code", null, "POST mlt/maLecturerSchedule/cancel")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u6210\u529F\u540E\u5904\u7406"),
              createTextVNode("\uFF1A\u5237\u65B0\u65E5\u5386")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u6743\u9650\u7F16\u7801"),
              createTextVNode("\uFF1A"),
              createVNode("code", null, "hzero.general_manage.base_manage.lecturer_schedule.ps.cancel")
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, { title: "\u4FDD\u5B58/\u63D0\u4EA4\u6821\u9A8C" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}>\u6821\u9A8C1\uFF1A\u65B0\u5EFA\u6392\u671F\u65F6 dateType\uFF08\u65E5\u671F\u7C7B\u578B\uFF09\u5FC5\u586B \u2014\u2014 \u533A\u5206\u6392\u671F\u7C7B\u578B\u4FBF\u4E8E\u7EDF\u8BA1</li><li${_scopeId}><strong${_scopeId}>\u8BE6\u7EC6\u903B\u8F91</strong>\uFF1AdateType \u5B57\u6BB5\u4E3A\u7A7A\u65F6\u963B\u6B62\u63D0\u4EA4</li><li${_scopeId}><strong${_scopeId}>\u7CFB\u7EDF\u4F53\u73B0</strong>\uFF1A\u524D\u7AEF\u8868\u5355\u6821\u9A8C\uFF0C\u63D0\u793A&quot;\u65E5\u671F\u7C7B\u578B\u4E0D\u80FD\u4E3A\u7A7A&quot;</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> LECTURER_SCHEDULE_ID, LECTURER_ARCHIVES_CODE, </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>START_DATE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>, END_DATE</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> MA_LECTURER_SCHEDULE</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> DATE_TYPE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>OR</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> DATE_TYPE </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><ul${_scopeId}><li${_scopeId}>\u6821\u9A8C2\uFF1A\u65B0\u5EFA\u6392\u671F\u65F6 date\uFF08\u65E5\u671F\u8303\u56F4\uFF09\u5FC5\u586B \u2014\u2014 \u6392\u671F\u65F6\u95F4\u533A\u95F4\u662F\u6392\u671F\u7684\u6838\u5FC3\u6570\u636E</li><li${_scopeId}><strong${_scopeId}>\u8BE6\u7EC6\u903B\u8F91</strong>\uFF1Adate \u5B57\u6BB5\u4E3A\u7A7A\u65F6\u963B\u6B62\u63D0\u4EA4\uFF0C\u63D0\u4EA4\u65F6\u8F6C\u6362\u4E3A startDate/endDate</li><li${_scopeId}><strong${_scopeId}>\u7CFB\u7EDF\u4F53\u73B0</strong>\uFF1A\u524D\u7AEF\u8868\u5355\u6821\u9A8C\uFF0C\u63D0\u793A&quot;\u65E5\u671F\u4E0D\u80FD\u4E3A\u7A7A&quot;</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> LECTURER_SCHEDULE_ID, LECTURER_ARCHIVES_CODE</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> MA_LECTURER_SCHEDULE</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>START_DATE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>OR</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> END_DATE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><ul${_scopeId}><li${_scopeId}>\u6821\u9A8C3\uFF1A\u53D6\u6D88\u6392\u671F\u65F6 date\uFF08\u65E5\u671F\u8303\u56F4\uFF09\u5FC5\u586B \u2014\u2014 \u660E\u786E\u53D6\u6D88\u7684\u65F6\u95F4\u533A\u95F4</li><li${_scopeId}><strong${_scopeId}>\u8BE6\u7EC6\u903B\u8F91</strong>\uFF1Adate \u5B57\u6BB5\u4E3A\u7A7A\u65F6\u963B\u6B62\u63D0\u4EA4</li><li${_scopeId}><strong${_scopeId}>\u7CFB\u7EDF\u4F53\u73B0</strong>\uFF1A\u524D\u7AEF\u8868\u5355\u6821\u9A8C\uFF0C\u63D0\u793A&quot;\u65E5\u671F\u4E0D\u80FD\u4E3A\u7A7A&quot;</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> LECTURER_SCHEDULE_ID, LECTURER_ARCHIVES_CODE, </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>STATUS</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> MA_LECTURER_SCHEDULE</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>STATUS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>cancelled</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>START_DATE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>OR</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> END_DATE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>);</span></span>
<span class="line"${_scopeId}></span></code></pre></div><ul${_scopeId}><li${_scopeId}>\u6821\u9A8C4\uFF1A\u6392\u671F\u65F6\u95F4\u6BB5\u4E0D\u53EF\u4E0E\u8BE5\u8BB2\u5E08\u5DF2\u6709\u6392\u671F\u51B2\u7A81 \u2014\u2014 \u907F\u514D\u8BB2\u5E08\u88AB\u91CD\u590D\u70B9\u7528</li><li${_scopeId}><strong${_scopeId}>\u8BE6\u7EC6\u903B\u8F91</strong>\uFF1A\u65B0\u6392\u671F\u65F6\u95F4\u6BB5\u4E0E\u5DF2\u6709\u6709\u6548\u6392\u671F\u65F6\u95F4\u6BB5\u5B58\u5728\u4EA4\u96C6\u5373\u51B2\u7A81</li><li${_scopeId}><strong${_scopeId}>\u7CFB\u7EDF\u4F53\u73B0</strong>\uFF1A\u540E\u7AEF save \u63A5\u53E3\u6821\u9A8C\uFF0C\u51B2\u7A81\u65F6\u8FD4\u56DE\u4E1A\u52A1\u5F02\u5E38</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> a.LECTURER_SCHEDULE_ID </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u6392\u671F1, b.LECTURER_SCHEDULE_ID </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u6392\u671F2,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>           a.LECTURER_ARCHIVES_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u8BB2\u5E08\u6863\u6848\u7F16\u7801,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>           TO_CHAR(a.START_DATE,</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>YYYY-MM-DD</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u6392\u671F1\u5F00\u59CB,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>           TO_CHAR(a.END_DATE,</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>YYYY-MM-DD</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u6392\u671F1\u7ED3\u675F,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>           TO_CHAR(b.START_DATE,</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>YYYY-MM-DD</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u6392\u671F2\u5F00\u59CB,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>           TO_CHAR(b.END_DATE,</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>YYYY-MM-DD</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u6392\u671F2\u7ED3\u675F</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> MA_LECTURER_SCHEDULE a</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>JOIN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> MA_LECTURER_SCHEDULE b </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ON</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> a.LECTURER_SCHEDULE_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&lt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> b.LECTURER_SCHEDULE_ID</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>      </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> a.LECTURER_ARCHIVES_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> b.LECTURER_ARCHIVES_ID</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>      </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> a.STATUS </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>active</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> b.STATUS </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>active</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>      </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> a.START_DATE </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&lt;=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> b.END_DATE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> a.END_DATE </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> b.START_DATE;</span></span>
<span class="line"${_scopeId}></span></code></pre></div>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, "\u6821\u9A8C1\uFF1A\u65B0\u5EFA\u6392\u671F\u65F6 dateType\uFF08\u65E5\u671F\u7C7B\u578B\uFF09\u5FC5\u586B \u2014\u2014 \u533A\u5206\u6392\u671F\u7C7B\u578B\u4FBF\u4E8E\u7EDF\u8BA1"),
            createVNode("li", null, [
              createVNode("strong", null, "\u8BE6\u7EC6\u903B\u8F91"),
              createTextVNode("\uFF1AdateType \u5B57\u6BB5\u4E3A\u7A7A\u65F6\u963B\u6B62\u63D0\u4EA4")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u7CFB\u7EDF\u4F53\u73B0"),
              createTextVNode('\uFF1A\u524D\u7AEF\u8868\u5355\u6821\u9A8C\uFF0C\u63D0\u793A"\u65E5\u671F\u7C7B\u578B\u4E0D\u80FD\u4E3A\u7A7A"')
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " LECTURER_SCHEDULE_ID, LECTURER_ARCHIVES_CODE, "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "START_DATE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ", END_DATE")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " MA_LECTURER_SCHEDULE")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " DATE_TYPE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NULL"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "OR"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " DATE_TYPE "),
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
          createVNode("ul", null, [
            createVNode("li", null, "\u6821\u9A8C2\uFF1A\u65B0\u5EFA\u6392\u671F\u65F6 date\uFF08\u65E5\u671F\u8303\u56F4\uFF09\u5FC5\u586B \u2014\u2014 \u6392\u671F\u65F6\u95F4\u533A\u95F4\u662F\u6392\u671F\u7684\u6838\u5FC3\u6570\u636E"),
            createVNode("li", null, [
              createVNode("strong", null, "\u8BE6\u7EC6\u903B\u8F91"),
              createTextVNode("\uFF1Adate \u5B57\u6BB5\u4E3A\u7A7A\u65F6\u963B\u6B62\u63D0\u4EA4\uFF0C\u63D0\u4EA4\u65F6\u8F6C\u6362\u4E3A startDate/endDate")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u7CFB\u7EDF\u4F53\u73B0"),
              createTextVNode('\uFF1A\u524D\u7AEF\u8868\u5355\u6821\u9A8C\uFF0C\u63D0\u793A"\u65E5\u671F\u4E0D\u80FD\u4E3A\u7A7A"')
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " LECTURER_SCHEDULE_ID, LECTURER_ARCHIVES_CODE")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " MA_LECTURER_SCHEDULE")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "START_DATE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NULL"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "OR"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " END_DATE "),
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
          createVNode("ul", null, [
            createVNode("li", null, "\u6821\u9A8C3\uFF1A\u53D6\u6D88\u6392\u671F\u65F6 date\uFF08\u65E5\u671F\u8303\u56F4\uFF09\u5FC5\u586B \u2014\u2014 \u660E\u786E\u53D6\u6D88\u7684\u65F6\u95F4\u533A\u95F4"),
            createVNode("li", null, [
              createVNode("strong", null, "\u8BE6\u7EC6\u903B\u8F91"),
              createTextVNode("\uFF1Adate \u5B57\u6BB5\u4E3A\u7A7A\u65F6\u963B\u6B62\u63D0\u4EA4")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u7CFB\u7EDF\u4F53\u73B0"),
              createTextVNode('\uFF1A\u524D\u7AEF\u8868\u5355\u6821\u9A8C\uFF0C\u63D0\u793A"\u65E5\u671F\u4E0D\u80FD\u4E3A\u7A7A"')
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " LECTURER_SCHEDULE_ID, LECTURER_ARCHIVES_CODE, "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "STATUS")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " MA_LECTURER_SCHEDULE")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "STATUS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "cancelled"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " ("),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "START_DATE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NULL"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "OR"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " END_DATE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NULL"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ");")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u6821\u9A8C4\uFF1A\u6392\u671F\u65F6\u95F4\u6BB5\u4E0D\u53EF\u4E0E\u8BE5\u8BB2\u5E08\u5DF2\u6709\u6392\u671F\u51B2\u7A81 \u2014\u2014 \u907F\u514D\u8BB2\u5E08\u88AB\u91CD\u590D\u70B9\u7528"),
            createVNode("li", null, [
              createVNode("strong", null, "\u8BE6\u7EC6\u903B\u8F91"),
              createTextVNode("\uFF1A\u65B0\u6392\u671F\u65F6\u95F4\u6BB5\u4E0E\u5DF2\u6709\u6709\u6548\u6392\u671F\u65F6\u95F4\u6BB5\u5B58\u5728\u4EA4\u96C6\u5373\u51B2\u7A81")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u7CFB\u7EDF\u4F53\u73B0"),
              createTextVNode("\uFF1A\u540E\u7AEF save \u63A5\u53E3\u6821\u9A8C\uFF0C\u51B2\u7A81\u65F6\u8FD4\u56DE\u4E1A\u52A1\u5F02\u5E38")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " a.LECTURER_SCHEDULE_ID "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u6392\u671F1, b.LECTURER_SCHEDULE_ID "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u6392\u671F2,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "           a.LECTURER_ARCHIVES_CODE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u8BB2\u5E08\u6863\u6848\u7F16\u7801,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "           TO_CHAR(a.START_DATE,"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "YYYY-MM-DD"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u6392\u671F1\u5F00\u59CB,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "           TO_CHAR(a.END_DATE,"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "YYYY-MM-DD"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u6392\u671F1\u7ED3\u675F,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "           TO_CHAR(b.START_DATE,"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "YYYY-MM-DD"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u6392\u671F2\u5F00\u59CB,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "           TO_CHAR(b.END_DATE,"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "YYYY-MM-DD"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u6392\u671F2\u7ED3\u675F")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " MA_LECTURER_SCHEDULE a")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "JOIN"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " MA_LECTURER_SCHEDULE b "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ON"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " a.LECTURER_SCHEDULE_ID "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " b.LECTURER_SCHEDULE_ID")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " a.LECTURER_ARCHIVES_ID "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " b.LECTURER_ARCHIVES_ID")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " a.STATUS "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "active"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " b.STATUS "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "active"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " a.START_DATE "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "<="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " b.END_DATE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " a.END_DATE "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, ">="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " b.START_DATE;")
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
        _push2(`<div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>\u6709\u6548(active) \u2500\u2500\u53D6\u6D88\u6392\u671F\u2500\u2500\u2192 \u5DF2\u53D6\u6D88(cancelled)</span></span>
<span class="line"${_scopeId}></span></code></pre></div><table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u72B6\u6001\u673A\u540D\u79F0</th><th${_scopeId}>\u72B6\u6001\u91CA\u4E49</th><th${_scopeId}>\u53EF\u6267\u884C\u7684\u64CD\u4F5C</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u6709\u6548\uFF08active\uFF09</td><td${_scopeId}>\u6392\u671F\u751F\u6548\u4E2D\uFF0C\u8BB2\u5E08\u5BF9\u5E94\u65F6\u95F4\u6BB5\u88AB\u5360\u7528</td><td${_scopeId}>\u53D6\u6D88\u6392\u671F</td></tr><tr${_scopeId}><td${_scopeId}>\u5DF2\u53D6\u6D88\uFF08cancelled\uFF09</td><td${_scopeId}>\u6392\u671F\u5DF2\u53D6\u6D88\uFF0C\u8BB2\u5E08\u5BF9\u5E94\u65F6\u95F4\u6BB5\u91CA\u653E\u4E3A\u53EF\u7528</td><td${_scopeId}>\u65E0\uFF08\u7EC8\u6001\uFF09</td></tr></tbody></table>`);
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "\u6709\u6548(active) \u2500\u2500\u53D6\u6D88\u6392\u671F\u2500\u2500\u2192 \u5DF2\u53D6\u6D88(cancelled)")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
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
                createVNode("td", null, "\u6709\u6548\uFF08active\uFF09"),
                createVNode("td", null, "\u6392\u671F\u751F\u6548\u4E2D\uFF0C\u8BB2\u5E08\u5BF9\u5E94\u65F6\u95F4\u6BB5\u88AB\u5360\u7528"),
                createVNode("td", null, "\u53D6\u6D88\u6392\u671F")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5DF2\u53D6\u6D88\uFF08cancelled\uFF09"),
                createVNode("td", null, "\u6392\u671F\u5DF2\u53D6\u6D88\uFF0C\u8BB2\u5E08\u5BF9\u5E94\u65F6\u95F4\u6BB5\u91CA\u653E\u4E3A\u53EF\u7528"),
                createVNode("td", null, "\u65E0\uFF08\u7EC8\u6001\uFF09")
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, { title: "\u503C\u96C6\u4F9D\u8D56" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u503C\u96C6\u7F16\u7801</th><th${_scopeId}>\u7528\u9014</th><th${_scopeId}>\u4F7F\u7528\u4F4D\u7F6E</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>MBO.DATE_TYPE</td><td${_scopeId}>\u65E5\u671F\u7C7B\u578B</td><td${_scopeId}>\u65B0\u5EFA\u6392\u671F\u5F39\u7A97-\u65E5\u671F\u7C7B\u578B\u5B57\u6BB5</td></tr></tbody></table>`);
      } else {
        return [
          createVNode("table", { class: "kb-field-tbl" }, [
            createVNode("thead", null, [
              createVNode("tr", null, [
                createVNode("th", null, "\u503C\u96C6\u7F16\u7801"),
                createVNode("th", null, "\u7528\u9014"),
                createVNode("th", null, "\u4F7F\u7528\u4F4D\u7F6E")
              ])
            ]),
            createVNode("tbody", null, [
              createVNode("tr", null, [
                createVNode("td", null, "MBO.DATE_TYPE"),
                createVNode("td", null, "\u65E5\u671F\u7C7B\u578B"),
                createVNode("td", null, "\u65B0\u5EFA\u6392\u671F\u5F39\u7A97-\u65E5\u671F\u7C7B\u578B\u5B57\u6BB5")
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, { title: "API \u6E05\u5355" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>API \u8DEF\u5F84</th><th${_scopeId}>\u65B9\u6CD5</th><th${_scopeId}>\u8BF4\u660E</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>mlt/maLecturerSchedule/list</td><td${_scopeId}>POST</td><td${_scopeId}>\u67E5\u8BE2\u6392\u671F\u5217\u8868</td></tr><tr${_scopeId}><td${_scopeId}>mlt/maLecturerSchedule/save</td><td${_scopeId}>POST</td><td${_scopeId}>\u6DFB\u52A0\u6392\u671F</td></tr><tr${_scopeId}><td${_scopeId}>mlt/maLecturerSchedule/cancel</td><td${_scopeId}>POST</td><td${_scopeId}>\u53D6\u6D88\u6392\u671F</td></tr></tbody></table>`);
      } else {
        return [
          createVNode("table", { class: "kb-field-tbl" }, [
            createVNode("thead", null, [
              createVNode("tr", null, [
                createVNode("th", null, "API \u8DEF\u5F84"),
                createVNode("th", null, "\u65B9\u6CD5"),
                createVNode("th", null, "\u8BF4\u660E")
              ])
            ]),
            createVNode("tbody", null, [
              createVNode("tr", null, [
                createVNode("td", null, "mlt/maLecturerSchedule/list"),
                createVNode("td", null, "POST"),
                createVNode("td", null, "\u67E5\u8BE2\u6392\u671F\u5217\u8868")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "mlt/maLecturerSchedule/save"),
                createVNode("td", null, "POST"),
                createVNode("td", null, "\u6DFB\u52A0\u6392\u671F")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "mlt/maLecturerSchedule/cancel"),
                createVNode("td", null, "POST"),
                createVNode("td", null, "\u53D6\u6D88\u6392\u671F")
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
  _push(ssrRenderComponent(_component_KbCard, { title: "MA_LECTURER_SCHEDULE\uFF08\u8BB2\u5E08\u6392\u671F\u8868\uFF09" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5B57\u6BB5\u540D</th><th${_scopeId}>\u7C7B\u578B</th><th${_scopeId}>\u91CA\u4E49</th><th${_scopeId}>\u5BF9\u5E94\u754C\u9762\u5B57\u6BB5</th><th${_scopeId}>\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>LECTURER_SCHEDULE_ID</td><td${_scopeId}>VARCHAR2</td><td${_scopeId}>\u4E3B\u952EID</td><td${_scopeId}>-</td><td${_scopeId}>\u4E3B\u952E\uFF0C\u5E8F\u5217\u81EA\u589E</td></tr><tr${_scopeId}><td${_scopeId}>LECTURER_SCHEDULE_CODE</td><td${_scopeId}>VARCHAR2</td><td${_scopeId}>\u6392\u671F\u7F16\u7801</td><td${_scopeId}>-</td><td${_scopeId}>\u4E1A\u52A1\u552F\u4E00\u952E\uFF0C\u7CFB\u7EDF\u751F\u6210</td></tr><tr${_scopeId}><td${_scopeId}>LECTURER_ARCHIVES_ID</td><td${_scopeId}>NUMBER</td><td${_scopeId}>\u8BB2\u5E08\u6863\u6848ID</td><td${_scopeId}>-</td><td${_scopeId}>\u5173\u8054 MA_LECTURER_ARCHIVE</td></tr><tr${_scopeId}><td${_scopeId}>LECTURER_ARCHIVES_CODE</td><td${_scopeId}>VARCHAR2(64)</td><td${_scopeId}>\u5173\u8054\u8BB2\u5E08\u6863\u6848\u7F16\u7801</td><td${_scopeId}>-</td><td${_scopeId}>\u5916\u952E\u5173\u8054 MA_LECTURER_ARCHIVE</td></tr><tr${_scopeId}><td${_scopeId}>LECTURER_NAME</td><td${_scopeId}>VARCHAR2</td><td${_scopeId}>\u8BB2\u5E08\u59D3\u540D</td><td${_scopeId}>-</td><td${_scopeId}>\u5197\u4F59\u5B58\u50A8\u4FBF\u4E8E\u67E5\u8BE2</td></tr><tr${_scopeId}><td${_scopeId}>DATE_TYPE</td><td${_scopeId}>VARCHAR2(32)</td><td${_scopeId}>\u65E5\u671F\u7C7B\u578B</td><td${_scopeId}>\u65E5\u671F\u7C7B\u578B</td><td${_scopeId}>\u503C\u96C6 MBO.DATE_TYPE</td></tr><tr${_scopeId}><td${_scopeId}>START_DATE</td><td${_scopeId}>DATE</td><td${_scopeId}>\u6392\u671F\u5F00\u59CB\u65E5\u671F</td><td${_scopeId}>\u65E5\u671F(\u8D77)</td><td${_scopeId}>\u65B0\u5EFA\u6392\u671F\u65F6\u586B\u5199</td></tr><tr${_scopeId}><td${_scopeId}>END_DATE</td><td${_scopeId}>DATE</td><td${_scopeId}>\u6392\u671F\u7ED3\u675F\u65E5\u671F</td><td${_scopeId}>\u65E5\u671F(\u6B62)</td><td${_scopeId}>\u65B0\u5EFA\u6392\u671F\u65F6\u586B\u5199</td></tr><tr${_scopeId}><td${_scopeId}>REASON</td><td${_scopeId}>VARCHAR2(2000)</td><td${_scopeId}>\u6392\u671F\u539F\u56E0</td><td${_scopeId}>\u539F\u56E0</td><td${_scopeId}>\u65B0\u5EFA\u6392\u671F\u65F6\u586B\u5199</td></tr><tr${_scopeId}><td${_scopeId}>STATUS</td><td${_scopeId}>VARCHAR2(32)</td><td${_scopeId}>\u6392\u671F\u72B6\u6001</td><td${_scopeId}>-</td><td${_scopeId}>active/cancelled</td></tr><tr${_scopeId}><td${_scopeId}>RELATED_ORDER_CODE</td><td${_scopeId}>VARCHAR2</td><td${_scopeId}>\u5173\u8054\u70B9\u5C06\u5355\u53F7</td><td${_scopeId}>-</td><td${_scopeId}>\u70B9\u5C06\u4E1A\u52A1\u521B\u5EFA\u65F6\u56DE\u5199</td></tr><tr${_scopeId}><td${_scopeId}>CREATE_DATE</td><td${_scopeId}>TIMESTAMP</td><td${_scopeId}>\u521B\u5EFA\u65F6\u95F4</td><td${_scopeId}>-</td><td${_scopeId}>\u7CFB\u7EDF\u81EA\u52A8</td></tr><tr${_scopeId}><td${_scopeId}>CREATE_BY</td><td${_scopeId}>VARCHAR2(64)</td><td${_scopeId}>\u521B\u5EFA\u4EBA</td><td${_scopeId}>-</td><td${_scopeId}>\u7CFB\u7EDF\u81EA\u52A8</td></tr><tr${_scopeId}><td${_scopeId}>CANCEL_DATE</td><td${_scopeId}>TIMESTAMP</td><td${_scopeId}>\u53D6\u6D88\u65F6\u95F4</td><td${_scopeId}>-</td><td${_scopeId}>\u53D6\u6D88\u6392\u671F\u65F6\u5199\u5165</td></tr><tr${_scopeId}><td${_scopeId}>CANCEL_BY</td><td${_scopeId}>VARCHAR2(64)</td><td${_scopeId}>\u53D6\u6D88\u4EBA</td><td${_scopeId}>-</td><td${_scopeId}>\u53D6\u6D88\u6392\u671F\u65F6\u5199\u5165</td></tr><tr${_scopeId}><td${_scopeId}>LAST_UPDATED_BY</td><td${_scopeId}>VARCHAR2</td><td${_scopeId}>\u6700\u540E\u66F4\u65B0\u4EBA</td><td${_scopeId}>-</td><td${_scopeId}>\u7CFB\u7EDF\u81EA\u52A8</td></tr><tr${_scopeId}><td${_scopeId}>LAST_UPDATE_DATE</td><td${_scopeId}>DATE</td><td${_scopeId}>\u6700\u540E\u66F4\u65B0\u65F6\u95F4</td><td${_scopeId}>-</td><td${_scopeId}>\u7CFB\u7EDF\u81EA\u52A8</td></tr><tr${_scopeId}><td${_scopeId}>OBJECT_VERSION_NUMBER</td><td${_scopeId}>NUMBER</td><td${_scopeId}>\u4E50\u89C2\u9501\u7248\u672C\u53F7</td><td${_scopeId}>-</td><td${_scopeId}>\u6846\u67B6\u81EA\u52A8\u7EF4\u62A4</td></tr></tbody></table>`);
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
                createVNode("td", null, "LECTURER_SCHEDULE_ID"),
                createVNode("td", null, "VARCHAR2"),
                createVNode("td", null, "\u4E3B\u952EID"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u4E3B\u952E\uFF0C\u5E8F\u5217\u81EA\u589E")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "LECTURER_SCHEDULE_CODE"),
                createVNode("td", null, "VARCHAR2"),
                createVNode("td", null, "\u6392\u671F\u7F16\u7801"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u4E1A\u52A1\u552F\u4E00\u952E\uFF0C\u7CFB\u7EDF\u751F\u6210")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "LECTURER_ARCHIVES_ID"),
                createVNode("td", null, "NUMBER"),
                createVNode("td", null, "\u8BB2\u5E08\u6863\u6848ID"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u5173\u8054 MA_LECTURER_ARCHIVE")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "LECTURER_ARCHIVES_CODE"),
                createVNode("td", null, "VARCHAR2(64)"),
                createVNode("td", null, "\u5173\u8054\u8BB2\u5E08\u6863\u6848\u7F16\u7801"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u5916\u952E\u5173\u8054 MA_LECTURER_ARCHIVE")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "LECTURER_NAME"),
                createVNode("td", null, "VARCHAR2"),
                createVNode("td", null, "\u8BB2\u5E08\u59D3\u540D"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u5197\u4F59\u5B58\u50A8\u4FBF\u4E8E\u67E5\u8BE2")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "DATE_TYPE"),
                createVNode("td", null, "VARCHAR2(32)"),
                createVNode("td", null, "\u65E5\u671F\u7C7B\u578B"),
                createVNode("td", null, "\u65E5\u671F\u7C7B\u578B"),
                createVNode("td", null, "\u503C\u96C6 MBO.DATE_TYPE")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "START_DATE"),
                createVNode("td", null, "DATE"),
                createVNode("td", null, "\u6392\u671F\u5F00\u59CB\u65E5\u671F"),
                createVNode("td", null, "\u65E5\u671F(\u8D77)"),
                createVNode("td", null, "\u65B0\u5EFA\u6392\u671F\u65F6\u586B\u5199")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "END_DATE"),
                createVNode("td", null, "DATE"),
                createVNode("td", null, "\u6392\u671F\u7ED3\u675F\u65E5\u671F"),
                createVNode("td", null, "\u65E5\u671F(\u6B62)"),
                createVNode("td", null, "\u65B0\u5EFA\u6392\u671F\u65F6\u586B\u5199")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "REASON"),
                createVNode("td", null, "VARCHAR2(2000)"),
                createVNode("td", null, "\u6392\u671F\u539F\u56E0"),
                createVNode("td", null, "\u539F\u56E0"),
                createVNode("td", null, "\u65B0\u5EFA\u6392\u671F\u65F6\u586B\u5199")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "STATUS"),
                createVNode("td", null, "VARCHAR2(32)"),
                createVNode("td", null, "\u6392\u671F\u72B6\u6001"),
                createVNode("td", null, "-"),
                createVNode("td", null, "active/cancelled")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "RELATED_ORDER_CODE"),
                createVNode("td", null, "VARCHAR2"),
                createVNode("td", null, "\u5173\u8054\u70B9\u5C06\u5355\u53F7"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u70B9\u5C06\u4E1A\u52A1\u521B\u5EFA\u65F6\u56DE\u5199")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "CREATE_DATE"),
                createVNode("td", null, "TIMESTAMP"),
                createVNode("td", null, "\u521B\u5EFA\u65F6\u95F4"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u7CFB\u7EDF\u81EA\u52A8")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "CREATE_BY"),
                createVNode("td", null, "VARCHAR2(64)"),
                createVNode("td", null, "\u521B\u5EFA\u4EBA"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u7CFB\u7EDF\u81EA\u52A8")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "CANCEL_DATE"),
                createVNode("td", null, "TIMESTAMP"),
                createVNode("td", null, "\u53D6\u6D88\u65F6\u95F4"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u53D6\u6D88\u6392\u671F\u65F6\u5199\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "CANCEL_BY"),
                createVNode("td", null, "VARCHAR2(64)"),
                createVNode("td", null, "\u53D6\u6D88\u4EBA"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u53D6\u6D88\u6392\u671F\u65F6\u5199\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "LAST_UPDATED_BY"),
                createVNode("td", null, "VARCHAR2"),
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
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "OBJECT_VERSION_NUMBER"),
                createVNode("td", null, "NUMBER"),
                createVNode("td", null, "\u4E50\u89C2\u9501\u7248\u672C\u53F7"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u6846\u67B6\u81EA\u52A8\u7EF4\u62A4")
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, { title: "\u5173\u952E\u7D22\u5F15" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u7D22\u5F15\u540D</th><th${_scopeId}>\u5B57\u6BB5</th><th${_scopeId}>\u8BF4\u660E</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>IDX_SCHEDULE_LECTURER</td><td${_scopeId}>LECTURER_ARCHIVES_CODE, START_DATE</td><td${_scopeId}>\u6309\u8BB2\u5E08+\u65E5\u671F\u67E5\u8BE2\u6392\u671F\uFF0C\u7528\u4E8E\u51B2\u7A81\u6821\u9A8C</td></tr><tr${_scopeId}><td${_scopeId}>IDX_SCHEDULE_STATUS</td><td${_scopeId}>STATUS</td><td${_scopeId}>\u6309\u72B6\u6001\u8FC7\u6EE4\u6709\u6548\u6392\u671F</td></tr></tbody></table>`);
      } else {
        return [
          createVNode("table", { class: "kb-field-tbl" }, [
            createVNode("thead", null, [
              createVNode("tr", null, [
                createVNode("th", null, "\u7D22\u5F15\u540D"),
                createVNode("th", null, "\u5B57\u6BB5"),
                createVNode("th", null, "\u8BF4\u660E")
              ])
            ]),
            createVNode("tbody", null, [
              createVNode("tr", null, [
                createVNode("td", null, "IDX_SCHEDULE_LECTURER"),
                createVNode("td", null, "LECTURER_ARCHIVES_CODE, START_DATE"),
                createVNode("td", null, "\u6309\u8BB2\u5E08+\u65E5\u671F\u67E5\u8BE2\u6392\u671F\uFF0C\u7528\u4E8E\u51B2\u7A81\u6821\u9A8C")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "IDX_SCHEDULE_STATUS"),
                createVNode("td", null, "STATUS"),
                createVNode("td", null, "\u6309\u72B6\u6001\u8FC7\u6EE4\u6709\u6548\u6392\u671F")
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, { title: "\u6392\u67E5SQL" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- \u67E5\u8BE2\u8BB2\u5E08\u6392\u671F\u5217\u8868</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  ls.LECTURER_ARCHIVES_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u8BB2\u5E08\u6863\u6848\u7F16\u7801,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  la.LECTURER_NAME     </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u8BB2\u5E08\u59D3\u540D,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  ls.DATE_TYPE         </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u65E5\u671F\u7C7B\u578B,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  TO_CHAR(ls.START_DATE, </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>YYYY-MM-DD</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5F00\u59CB\u65E5\u671F,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  TO_CHAR(ls.END_DATE, </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>YYYY-MM-DD</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7ED3\u675F\u65E5\u671F,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  ls.REASON            </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u539F\u56E0,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  ls.STATUS            </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u72B6\u6001</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> MA_LECTURER_SCHEDULE ls</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>LEFT JOIN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> MA_LECTURER_ARCHIVE la </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ON</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> ls.LECTURER_ARCHIVES_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> la.LECTURER_ARCHIVES_ID</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> ls.STATUS </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>active</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ORDER BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> ls.START_DATE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>DESC</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- \u67E5\u8BE2\u67D0\u65E5\u671F\u8303\u56F4\u5185\u6709\u6392\u671F\u7684\u8BB2\u5E08</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT DISTINCT</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  ls.LECTURER_ARCHIVES_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u8BB2\u5E08\u6863\u6848\u7F16\u7801,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  la.LECTURER_NAME     </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u8BB2\u5E08\u59D3\u540D,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  TO_CHAR(ls.START_DATE, </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>YYYY-MM-DD</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u6392\u671F\u5F00\u59CB,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  TO_CHAR(ls.END_DATE, </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>YYYY-MM-DD</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u6392\u671F\u7ED3\u675F</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> MA_LECTURER_SCHEDULE ls</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>LEFT JOIN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> MA_LECTURER_ARCHIVE la </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ON</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> ls.LECTURER_ARCHIVES_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> la.LECTURER_ARCHIVES_ID</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> ls.STATUS </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>active</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> ls.START_DATE </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&lt;=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> TO_DATE(</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>2026-12-31</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>YYYY-MM-DD</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> ls.END_DATE </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> TO_DATE(</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>2026-01-01</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>YYYY-MM-DD</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>);</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- \u67E5\u8BE2\u6392\u671F\u51B2\u7A81\u7684\u8BB2\u5E08\uFF08\u540C\u4E00\u8BB2\u5E08\u6392\u671F\u65E5\u671F\u91CD\u53E0\uFF09</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  a.LECTURER_ARCHIVES_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u8BB2\u5E08\u6863\u6848\u7F16\u7801,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  TO_CHAR(a.START_DATE, </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>YYYY-MM-DD</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u6392\u671F1\u5F00\u59CB,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  TO_CHAR(a.END_DATE, </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>YYYY-MM-DD</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u6392\u671F1\u7ED3\u675F,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  TO_CHAR(b.START_DATE, </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>YYYY-MM-DD</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u6392\u671F2\u5F00\u59CB,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  TO_CHAR(b.END_DATE, </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>YYYY-MM-DD</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u6392\u671F2\u7ED3\u675F</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> MA_LECTURER_SCHEDULE a</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>JOIN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> MA_LECTURER_SCHEDULE b </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ON</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> a.LECTURER_SCHEDULE_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&lt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> b.LECTURER_SCHEDULE_ID</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> a.LECTURER_ARCHIVES_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> b.LECTURER_ARCHIVES_ID</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> a.STATUS </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>active</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> b.STATUS </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>active</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> a.START_DATE </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&lt;=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> b.END_DATE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> a.END_DATE </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> b.START_DATE;</span></span>
<span class="line"${_scopeId}></span></code></pre></div>`);
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
                  createVNode("span", { style: { "color": "#676E95" } }, "-- \u67E5\u8BE2\u8BB2\u5E08\u6392\u671F\u5217\u8868")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "SELECT")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  ls.LECTURER_ARCHIVES_CODE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u8BB2\u5E08\u6863\u6848\u7F16\u7801,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  la.LECTURER_NAME     "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u8BB2\u5E08\u59D3\u540D,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  ls.DATE_TYPE         "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u65E5\u671F\u7C7B\u578B,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  TO_CHAR(ls.START_DATE, "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "YYYY-MM-DD"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5F00\u59CB\u65E5\u671F,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  TO_CHAR(ls.END_DATE, "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "YYYY-MM-DD"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7ED3\u675F\u65E5\u671F,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  ls.REASON            "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u539F\u56E0,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  ls.STATUS            "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u72B6\u6001")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " MA_LECTURER_SCHEDULE ls")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "LEFT JOIN"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " MA_LECTURER_ARCHIVE la "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ON"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " ls.LECTURER_ARCHIVES_ID "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " la.LECTURER_ARCHIVES_ID")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " ls.STATUS "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "active"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ORDER BY"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " ls.START_DATE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "DESC"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#676E95" } }, "-- \u67E5\u8BE2\u67D0\u65E5\u671F\u8303\u56F4\u5185\u6709\u6392\u671F\u7684\u8BB2\u5E08")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "SELECT DISTINCT")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  ls.LECTURER_ARCHIVES_CODE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u8BB2\u5E08\u6863\u6848\u7F16\u7801,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  la.LECTURER_NAME     "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u8BB2\u5E08\u59D3\u540D,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  TO_CHAR(ls.START_DATE, "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "YYYY-MM-DD"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u6392\u671F\u5F00\u59CB,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  TO_CHAR(ls.END_DATE, "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "YYYY-MM-DD"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u6392\u671F\u7ED3\u675F")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " MA_LECTURER_SCHEDULE ls")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "LEFT JOIN"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " MA_LECTURER_ARCHIVE la "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ON"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " ls.LECTURER_ARCHIVES_ID "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " la.LECTURER_ARCHIVES_ID")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " ls.STATUS "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "active"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " ls.START_DATE "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "<="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " TO_DATE("),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "2026-12-31"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ", "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "YYYY-MM-DD"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ")")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " ls.END_DATE "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, ">="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " TO_DATE("),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "2026-01-01"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ", "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "YYYY-MM-DD"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ");")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#676E95" } }, "-- \u67E5\u8BE2\u6392\u671F\u51B2\u7A81\u7684\u8BB2\u5E08\uFF08\u540C\u4E00\u8BB2\u5E08\u6392\u671F\u65E5\u671F\u91CD\u53E0\uFF09")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "SELECT")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  a.LECTURER_ARCHIVES_CODE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u8BB2\u5E08\u6863\u6848\u7F16\u7801,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  TO_CHAR(a.START_DATE, "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "YYYY-MM-DD"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u6392\u671F1\u5F00\u59CB,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  TO_CHAR(a.END_DATE, "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "YYYY-MM-DD"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u6392\u671F1\u7ED3\u675F,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  TO_CHAR(b.START_DATE, "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "YYYY-MM-DD"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u6392\u671F2\u5F00\u59CB,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  TO_CHAR(b.END_DATE, "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "YYYY-MM-DD"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u6392\u671F2\u7ED3\u675F")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " MA_LECTURER_SCHEDULE a")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "JOIN"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " MA_LECTURER_SCHEDULE b "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ON"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " a.LECTURER_SCHEDULE_ID "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " b.LECTURER_SCHEDULE_ID")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " a.LECTURER_ARCHIVES_ID "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " b.LECTURER_ARCHIVES_ID")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " a.STATUS "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "active"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " b.STATUS "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "active"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " a.START_DATE "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "<="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " b.END_DATE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " a.END_DATE "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, ">="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " b.START_DATE;")
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
  _push(`</div></div></div><div id="faq" style="${ssrRenderStyle({ "display": "none" })}"><div class="tab-pad"><div class="kl-wrap">`);
  _push(ssrRenderComponent(_component_KbCard, { title: "\u62A5\u9519\u4E00\u89C8\u8868" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u62A5\u9519\u4FE1\u606F</th><th${_scopeId}>\u63D0\u793A\u8282\u70B9</th><th${_scopeId}>\u6839\u56E0\u4E0E\u89E3\u51B3\u65B9\u6848</th><th${_scopeId}>\u7B49\u7EA7</th><th${_scopeId}>\u8BE6\u7EC6\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u65E5\u671F\u7C7B\u578B\u4E0D\u80FD\u4E3A\u7A7A</td><td${_scopeId}>\u65B0\u5EFA\u6392\u671F\u63D0\u4EA4</td><td${_scopeId}>\u672A\u9009\u62E9\u65E5\u671F\u7C7B\u578B\uFF1B\u9009\u62E9\u65E5\u671F\u7C7B\u578B\u540E\u63D0\u4EA4</td><td${_scopeId}>\u63D0\u793A</td><td${_scopeId}>\u524D\u7AEF\u6821\u9A8C dateType \u5FC5\u586B</td></tr><tr${_scopeId}><td${_scopeId}>\u65E5\u671F\u4E0D\u80FD\u4E3A\u7A7A</td><td${_scopeId}>\u65B0\u5EFA/\u53D6\u6D88\u6392\u671F\u63D0\u4EA4</td><td${_scopeId}>\u672A\u9009\u62E9\u65E5\u671F\u8303\u56F4\uFF1B\u9009\u62E9\u65E5\u671F\u8303\u56F4\u540E\u63D0\u4EA4</td><td${_scopeId}>\u63D0\u793A</td><td${_scopeId}>\u524D\u7AEF\u6821\u9A8C date \u5FC5\u586B</td></tr><tr${_scopeId}><td${_scopeId}>\u8BE5\u8BB2\u5E08\u5728\u6307\u5B9A\u65F6\u95F4\u6BB5\u5DF2\u6709\u6392\u671F\uFF0C\u8BF7\u91CD\u65B0\u9009\u62E9</td><td${_scopeId}>\u65B0\u5EFA\u6392\u671F\u63D0\u4EA4</td><td${_scopeId}>\u6392\u671F\u65F6\u95F4\u6BB5\u51B2\u7A81\uFF1B\u66F4\u6362\u65F6\u95F4\u6BB5\u6216\u5148\u53D6\u6D88\u5DF2\u6709\u6392\u671F</td><td${_scopeId}>\u63D0\u793A</td><td${_scopeId}>\u540E\u7AEF\u51B2\u7A81\u6821\u9A8C\uFF0C\u65F6\u95F4\u6BB5\u4EA4\u96C6\u5224\u65AD</td></tr><tr${_scopeId}><td${_scopeId}>\u8BF7\u6C42\u5931\u8D25</td><td${_scopeId}>\u63A5\u53E3\u8C03\u7528</td><td${_scopeId}>\u540E\u7AEF\u670D\u52A1\u5F02\u5E38\uFF1B\u68C0\u67E5 mbo-business \u5FAE\u670D\u52A1\u72B6\u6001</td><td${_scopeId}>\u9519\u8BEF</td><td${_scopeId}>HTTP \u72B6\u6001\u7801\u975E 2xx</td></tr><tr${_scopeId}><td${_scopeId}>\u7F51\u7EDC\u5F02\u5E38/\u63A5\u53E3\u8D85\u65F6</td><td${_scopeId}>\u4EFB\u610F\u63A5\u53E3\u8C03\u7528</td><td${_scopeId}>\u7F51\u7EDC\u4E2D\u65AD\u6216\u63A5\u53E3\u54CD\u5E94\u8D85\u65F6\uFF0C\u68C0\u67E5\u7F51\u7EDC\u53CA\u540E\u7AEF\u8D85\u65F6\u914D\u7F6E</td><td${_scopeId}>error</td><td${_scopeId}>axios catch \u6216 timeout</td></tr><tr${_scopeId}><td${_scopeId}>\u6743\u9650\u4E0D\u8DB3</td><td${_scopeId}>\u70B9\u51FB\u64CD\u4F5C\u6309\u94AE</td><td${_scopeId}>\u5F53\u524D\u7528\u6237\u65E0\u5BF9\u5E94\u6309\u94AE\u6743\u9650\u7801\uFF0C\u8054\u7CFB\u7BA1\u7406\u5458\u6388\u6743</td><td${_scopeId}>error</td><td${_scopeId}>permissionList \u6821\u9A8C\u672A\u901A\u8FC7</td></tr><tr${_scopeId}><td${_scopeId}>\u6570\u636E\u4E0D\u5B58\u5728</td><td${_scopeId}>\u53D6\u6D88\u6392\u671F</td><td${_scopeId}>\u6392\u671FID\u4E0D\u5B58\u5728\u6216\u5DF2\u5220\u9664\uFF0C\u68C0\u67E5 LECTURER_SCHEDULE_ID \u6709\u6548\u6027</td><td${_scopeId}>error</td><td${_scopeId}>\u63A5\u53E3\u8FD4\u56DE\u6570\u636E\u4E3A\u7A7A</td></tr><tr${_scopeId}><td${_scopeId}>\u72B6\u6001\u4E0D\u5141\u8BB8\u64CD\u4F5C</td><td${_scopeId}>\u53D6\u6D88\u6392\u671F</td><td${_scopeId}>\u6392\u671F\u72B6\u6001\u4E0D\u5141\u8BB8\u53D6\u6D88\uFF0C\u5982\u5DF2\u53D6\u6D88\u4E0D\u53EF\u91CD\u590D\u53D6\u6D88\uFF0C\u68C0\u67E5 STATUS</td><td${_scopeId}>error</td><td${_scopeId}>\u540E\u7AEF\u6821\u9A8C\u72B6\u6001\u673A\u5931\u8D25</td></tr><tr${_scopeId}><td${_scopeId}>\u503C\u96C6\u6570\u636E\u4E0D\u663E\u793A</td><td${_scopeId}>\u4E0B\u62C9\u9009\u9879</td><td${_scopeId}>\u503C\u96C6 MBO.SCHEDULE_DATE_TYPE \u7B49\u672A\u914D\u7F6E\uFF0C\u68C0\u67E5\u503C\u96C6\u914D\u7F6E</td><td${_scopeId}>warning</td><td${_scopeId}>lookupCode \u67E5\u8BE2\u8FD4\u56DE\u7A7A</td></tr><tr${_scopeId}><td${_scopeId}>\u8BB2\u5E08\u4E0D\u80FD\u4E3A\u7A7A</td><td${_scopeId}>\u65B0\u5EFA\u6392\u671F\u63D0\u4EA4</td><td${_scopeId}>\u672A\u9009\u62E9\u8BB2\u5E08\uFF0C\u9009\u62E9\u8BB2\u5E08\u540E\u63D0\u4EA4</td><td${_scopeId}>error</td><td${_scopeId}>\u524D\u7AEF\u6821\u9A8C LECTURER_ARCHIVES_CODE \u975E\u7A7A</td></tr></tbody></table><h4${_scopeId}>\u62A5\u95191\uFF1A\u65E5\u671F\u7C7B\u578B\u4E0D\u80FD\u4E3A\u7A7A</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u65B0\u5EFA\u6392\u671F\u63D0\u4EA4\u65F6\uFF0CdateType \u5B57\u6BB5\u4E3A\u7A7A</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u524D\u7AEF\u8868\u5355\u5BF9 dateType \u5B57\u6BB5\u914D\u7F6E required \u6821\u9A8C\uFF0C\u63D0\u4EA4\u524D\u6267\u884C\u5B57\u6BB5\u6821\u9A8C\uFF0C\u82E5\u503C\u4E3A\u7A7A\u5219\u963B\u6B62\u63D0\u4EA4\u5E76\u63D0\u793A&quot;\u65E5\u671F\u7C7B\u578B\u4E0D\u80FD\u4E3A\u7A7A&quot;\u3002dateType \u7528\u4E8E\u533A\u5206\u6392\u671F\u7C7B\u578B\uFF08\u5982\u51FA\u5DEE\u3001\u4F11\u5047\u3001\u57F9\u8BAD\u7B49\uFF09\uFF0C\u662F\u6392\u671F\u7EDF\u8BA1\u7684\u5206\u7C7B\u4F9D\u636E\uFF0C\u5FC5\u987B\u586B\u5199</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> LECTURER_SCHEDULE_ID </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u6392\u671FID,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         LECTURER_ARCHIVES_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u8BB2\u5E08\u6863\u6848\u7F16\u7801,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         LECTURER_NAME </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u8BB2\u5E08\u59D3\u540D,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         TO_CHAR(</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>START_DATE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>,</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>YYYY-MM-DD</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5F00\u59CB\u65E5\u671F,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         TO_CHAR(END_DATE,</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>YYYY-MM-DD</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7ED3\u675F\u65E5\u671F</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> MA_LECTURER_SCHEDULE</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> DATE_TYPE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>OR</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> DATE_TYPE </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95192\uFF1A\u65E5\u671F\u4E0D\u80FD\u4E3A\u7A7A</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u65B0\u5EFA\u6392\u671F\u6216\u53D6\u6D88\u6392\u671F\u63D0\u4EA4\u65F6\uFF0Cdate \u65E5\u671F\u8303\u56F4\u5B57\u6BB5\u4E3A\u7A7A</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u524D\u7AEF DatePicker(range) \u7EC4\u4EF6\u5BF9 date \u5B57\u6BB5\u914D\u7F6E required \u6821\u9A8C\uFF0C\u63D0\u4EA4\u524D\u6821\u9A8C\u65E5\u671F\u8303\u56F4\u662F\u5426\u586B\u5199\uFF0C\u4E3A\u7A7A\u5219\u963B\u6B62\u63D0\u4EA4\u5E76\u63D0\u793A&quot;\u65E5\u671F\u4E0D\u80FD\u4E3A\u7A7A&quot;\u3002\u65E5\u671F\u8303\u56F4\u662F\u6392\u671F\u7684\u6838\u5FC3\u6570\u636E\uFF0C\u65B0\u5EFA\u65F6\u7528\u4E8E\u786E\u5B9A\u5360\u7528\u65F6\u6BB5\uFF0C\u53D6\u6D88\u65F6\u7528\u4E8E\u786E\u5B9A\u91CA\u653E\u65F6\u6BB5\uFF0C\u5FC5\u987B\u586B\u5199</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> LECTURER_SCHEDULE_ID </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u6392\u671FID,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         LECTURER_ARCHIVES_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u8BB2\u5E08\u6863\u6848\u7F16\u7801,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         LECTURER_NAME </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u8BB2\u5E08\u59D3\u540D,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         DATE_TYPE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u65E5\u671F\u7C7B\u578B,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>STATUS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u72B6\u6001</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> MA_LECTURER_SCHEDULE</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>START_DATE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>OR</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> END_DATE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95193\uFF1A\u8BE5\u8BB2\u5E08\u5728\u6307\u5B9A\u65F6\u95F4\u6BB5\u5DF2\u6709\u6392\u671F\uFF0C\u8BF7\u91CD\u65B0\u9009\u62E9</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u65B0\u5EFA\u6392\u671F\u63D0\u4EA4\u65F6\uFF0C\u65B0\u6392\u671F\u65F6\u95F4\u6BB5\u4E0E\u8BE5\u8BB2\u5E08\u5DF2\u6709\u6709\u6548\u6392\u671F\uFF08STATUS=&#39;active&#39;\uFF09\u65F6\u95F4\u6BB5\u5B58\u5728\u4EA4\u96C6</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u540E\u7AEF save \u63A5\u53E3\u5728\u4FDD\u5B58\u524D\u6267\u884C\u51B2\u7A81\u6821\u9A8C\uFF0C\u67E5\u8BE2 MA_LECTURER_SCHEDULE \u8868\u4E2D\u540C\u4E00\u8BB2\u5E08\uFF08LECTURER_ARCHIVES_ID \u76F8\u540C\uFF09\u4E14\u72B6\u6001\u4E3A active \u7684\u6392\u671F\u8BB0\u5F55\uFF0C\u5224\u65AD\u65B0\u6392\u671F\u7684 [START_DATE, END_DATE] \u4E0E\u5DF2\u6709\u6392\u671F\u7684 [START_DATE, END_DATE] \u662F\u5426\u5B58\u5728\u4EA4\u96C6\uFF08\u65B0\u6392\u671F.START_DATE &lt;= \u5DF2\u6709.END_DATE AND \u65B0\u6392\u671F.END_DATE &gt;= \u5DF2\u6709.START_DATE\uFF09\u3002\u82E5\u5B58\u5728\u4EA4\u96C6\u5219\u629B\u51FA\u4E1A\u52A1\u5F02\u5E38\uFF0C\u63D0\u793A&quot;\u8BE5\u8BB2\u5E08\u5728\u6307\u5B9A\u65F6\u95F4\u6BB5\u5DF2\u6709\u6392\u671F\uFF0C\u8BF7\u91CD\u65B0\u9009\u62E9&quot;\u3002\u6B64\u6821\u9A8C\u4ECE\u6E90\u5934\u907F\u514D\u8BB2\u5E08\u88AB\u91CD\u590D\u70B9\u7528\uFF0C\u4FDD\u8BC1\u6392\u671F\u6570\u636E\u552F\u4E00\u6027</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> a.LECTURER_SCHEDULE_ID </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u6392\u671F1ID,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         b.LECTURER_SCHEDULE_ID </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u6392\u671F2ID,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         a.LECTURER_ARCHIVES_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u8BB2\u5E08\u6863\u6848\u7F16\u7801,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         a.LECTURER_NAME </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u8BB2\u5E08\u59D3\u540D,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         TO_CHAR(a.START_DATE,</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>YYYY-MM-DD</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u6392\u671F1\u5F00\u59CB,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         TO_CHAR(a.END_DATE,</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>YYYY-MM-DD</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u6392\u671F1\u7ED3\u675F,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         TO_CHAR(b.START_DATE,</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>YYYY-MM-DD</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u6392\u671F2\u5F00\u59CB,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         TO_CHAR(b.END_DATE,</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>YYYY-MM-DD</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u6392\u671F2\u7ED3\u675F</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> MA_LECTURER_SCHEDULE a</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>JOIN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> MA_LECTURER_SCHEDULE b </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ON</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> a.LECTURER_SCHEDULE_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&lt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> b.LECTURER_SCHEDULE_ID</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> a.LECTURER_ARCHIVES_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> b.LECTURER_ARCHIVES_ID</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> a.STATUS </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>active</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> b.STATUS </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>active</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> a.START_DATE </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&lt;=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> b.END_DATE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> a.END_DATE </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> b.START_DATE;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95194\uFF1A\u8BF7\u6C42\u5931\u8D25</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u8C03\u7528 mlt/maLecturerSchedule/save\u3001cancel \u6216 list \u63A5\u53E3\u65F6\uFF0C\u540E\u7AEF\u8FD4\u56DE HTTP \u72B6\u6001\u7801\u975E 2xx</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u524D\u7AEF\u901A\u8FC7 axios \u8C03\u7528\u540E\u7AEF\u63A5\u53E3\uFF0C\u82E5\u54CD\u5E94\u72B6\u6001\u7801\u975E 2xx \u6216\u7F51\u7EDC\u5F02\u5E38\u5219\u89E6\u53D1\u9519\u8BEF\u56DE\u8C03\uFF0C\u7EDF\u4E00\u63D0\u793A&quot;\u8BF7\u6C42\u5931\u8D25&quot;\u3002\u5E38\u89C1\u6839\u56E0\u5305\u62EC\uFF1Ambo-business \u5FAE\u670D\u52A1\u672A\u542F\u52A8\u6216\u5F02\u5E38\u3001\u6570\u636E\u5E93\u8FDE\u63A5\u5931\u8D25\u3001SQL \u6267\u884C\u8D85\u65F6\u3001\u540E\u7AEF\u4E1A\u52A1\u5F02\u5E38\u672A\u6355\u83B7\u3001\u7F51\u7EDC\u4E2D\u65AD\u7B49\u3002\u9700\u68C0\u67E5 mbo-business \u5FAE\u670D\u52A1\u8FD0\u884C\u72B6\u6001\u3001\u6570\u636E\u5E93\u8FDE\u63A5\u6C60\u3001\u540E\u7AEF\u65E5\u5FD7\u5B9A\u4F4D\u5177\u4F53\u5F02\u5E38\u5806\u6808</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- \u68C0\u67E5\u8FD1\u671F\u5F02\u5E38\u6392\u671F\u8BB0\u5F55\uFF08\u7ED3\u5408\u540E\u7AEF\u65E5\u5FD7\u65F6\u95F4\u6392\u67E5\uFF09</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> LECTURER_SCHEDULE_ID </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u6392\u671FID,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         LECTURER_ARCHIVES_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u8BB2\u5E08\u6863\u6848\u7F16\u7801,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         LECTURER_NAME </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u8BB2\u5E08\u59D3\u540D,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>STATUS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u72B6\u6001,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         TO_CHAR(LAST_UPDATE_DATE,</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>YYYY-MM-DD HH24:MI:SS</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u6700\u540E\u66F4\u65B0\u65F6\u95F4,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         LAST_UPDATED_BY </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u6700\u540E\u66F4\u65B0\u4EBA</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> MA_LECTURER_SCHEDULE</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> LAST_UPDATE_DATE </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>SYSDATE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>-</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>1</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ORDER BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> LAST_UPDATE_DATE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>DESC</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95195\uFF1A\u7F51\u7EDC\u5F02\u5E38/\u63A5\u53E3\u8D85\u65F6</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u4EFB\u610F\u63A5\u53E3\u8C03\u7528\u65F6\uFF0C\u7F51\u7EDC\u4E2D\u65AD\u6216\u63A5\u53E3\u54CD\u5E94\u8D85\u8FC7 axios timeout \u914D\u7F6E</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u524D\u7AEF axios \u8BF7\u6C42\u672A\u6536\u5230\u54CD\u5E94\u6216\u54CD\u5E94\u8D85\u65F6\uFF0C\u89E6\u53D1 catch \u56DE\u8C03\u7EDF\u4E00\u63D0\u793A&quot;\u8BF7\u6C42\u5931\u8D25&quot;\u3002\u5E38\u89C1\u6839\u56E0\uFF1A\u7F51\u7EDC\u4E2D\u65AD\u3001mbo-business \u670D\u52A1\u5047\u6B7B\u3001\u6570\u636E\u5E93\u6162\u67E5\u8BE2\u7B49\u3002\u9700\u68C0\u67E5\u7F51\u7EDC\u8FDE\u901A\u6027\u3001\u540E\u7AEF\u670D\u52A1\u8D1F\u8F7D\u3001\u6570\u636E\u5E93\u6027\u80FD</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> LECTURER_SCHEDULE_ID </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u6392\u671FID, LECTURER_NAME </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u8BB2\u5E08\u59D3\u540D,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>STATUS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u72B6\u6001,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         TO_CHAR(LAST_UPDATE_DATE,</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>YYYY-MM-DD HH24:MI:SS</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u6700\u540E\u66F4\u65B0\u65F6\u95F4</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> MA_LECTURER_SCHEDULE</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> LAST_UPDATE_DATE </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>SYSDATE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>-</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>1</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ORDER BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> LAST_UPDATE_DATE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>DESC</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95196\uFF1A\u6743\u9650\u4E0D\u8DB3</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u70B9\u51FB\u65B0\u5EFA\u3001\u53D6\u6D88\u6392\u671F\u7B49\u6309\u94AE\u65F6\uFF0C\u5F53\u524D\u7528\u6237\u65E0\u5BF9\u5E94 permissionList \u6743\u9650\u7801</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u524D\u7AEF Button \u7EC4\u4EF6\u901A\u8FC7 permissionList \u914D\u7F6E\u6743\u9650\u7801\uFF0CHZERO \u6846\u67B6\u6821\u9A8C\u5F53\u524D\u7528\u6237\u89D2\u8272\u662F\u5426\u5305\u542B\u8BE5\u6743\u9650\u7801\uFF0C\u672A\u5305\u542B\u5219\u6309\u94AE\u4E0D\u53EF\u89C1\u6216\u7981\u7528\u3002\u82E5\u5F3A\u5236\u8C03\u7528\u63A5\u53E3\uFF0C\u540E\u7AEF\u4E5F\u4F1A\u6821\u9A8C\u6743\u9650\u8FD4\u56DE403\u3002\u9700\u8054\u7CFB\u7BA1\u7406\u5458\u914D\u7F6E\u5BF9\u5E94\u89D2\u8272\u6743\u9650</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> U.USER_NAME </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7528\u6237\u540D, R.ROLE_NAME </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u89D2\u8272\u540D, P.PERMISSION_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u6743\u9650\u7801</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> SYS_USER U</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>LEFT JOIN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> SYS_USER_ROLE UR </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ON</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> U.USER_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> UR.USER_ID</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>LEFT JOIN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> SYS_ROLE R </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ON</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> UR.ROLE_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> R.ROLE_ID</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>LEFT JOIN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> SYS_ROLE_PERMISSION RP </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ON</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> R.ROLE_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> RP.ROLE_ID</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>LEFT JOIN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> SYS_PERMISSION P </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ON</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> RP.PERMISSION_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> P.PERMISSION_ID</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> P.PERMISSION_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>LIKE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>%lecturer_schedule%</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ORDER BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> U.USER_NAME;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95197\uFF1A\u6570\u636E\u4E0D\u5B58\u5728</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u53D6\u6D88\u6392\u671F\u7B49\u64CD\u4F5C\u65F6\uFF0C\u63A5\u53E3\u8FD4\u56DE\u6570\u636E\u4E3A\u7A7A\u6216\u6392\u671FID\u4E0D\u5B58\u5728</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u524D\u7AEF\u901A\u8FC7 lecturerScheduleId \u8C03\u7528\u63A5\u53E3\uFF0C\u540E\u7AEF\u67E5\u8BE2 MA_LECTURER_SCHEDULE \u8868\u65E0\u5BF9\u5E94\u8BB0\u5F55\u6216\u8BB0\u5F55\u5DF2\u903B\u8F91\u5220\u9664\uFF0C\u8FD4\u56DE\u7A7A\u6570\u636E\u3002\u5E38\u89C1\u6839\u56E0\uFF1A\u6392\u671FID\u9519\u8BEF\u3001\u6392\u671F\u5DF2\u88AB\u5220\u9664\u3001\u8DE8\u79DF\u6237\u67E5\u8BE2\u3001\u6570\u636E\u6743\u9650\u9694\u79BB\u7B49\u3002\u9700\u68C0\u67E5 LECTURER_SCHEDULE_ID \u6709\u6548\u6027\u53CA\u6570\u636E\u6743\u9650</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> LECTURER_SCHEDULE_ID </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u6392\u671FID, LECTURER_NAME </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u8BB2\u5E08\u59D3\u540D,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>STATUS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u72B6\u6001, DELETE_FLAG </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5220\u9664\u6807\u8BB0</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> MA_LECTURER_SCHEDULE</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> DELETE_FLAG </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>Y</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>OR</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> LECTURER_SCHEDULE_ID </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95198\uFF1A\u72B6\u6001\u4E0D\u5141\u8BB8\u64CD\u4F5C</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u70B9\u51FB\u53D6\u6D88\u6392\u671F\u6309\u94AE\u65F6\uFF0C\u6392\u671F\u72B6\u6001\u4E0D\u5141\u8BB8\u53D6\u6D88</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u540E\u7AEF\u6821\u9A8C\u72B6\u6001\u673A\uFF0C\u5982\u5DF2\u53D6\u6D88\uFF08cancelled\uFF09\u4E0D\u53EF\u91CD\u590D\u53D6\u6D88\u3001\u5DF2\u8FC7\u671F\u4E0D\u53EF\u53D6\u6D88\u7B49\u3002\u72B6\u6001\u4E0D\u5339\u914D\u65F6\u540E\u7AEF\u8FD4\u56DE\u4E1A\u52A1\u5F02\u5E38\u3002\u9700\u68C0\u67E5\u6392\u671F\u5F53\u524D\u72B6\u6001\u53CA\u64CD\u4F5C\u6D41\u7A0B</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> LECTURER_SCHEDULE_ID </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u6392\u671FID, LECTURER_NAME </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u8BB2\u5E08\u59D3\u540D,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>STATUS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u72B6\u6001, ERROR_INFO </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5F02\u5E38\u95EE\u9898</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> MA_LECTURER_SCHEDULE</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>STATUS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NOT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>active</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>,</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>cancelled</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>,</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>expired</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ORDER BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> CREATE_DATE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>DESC</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95199\uFF1A\u503C\u96C6\u6570\u636E\u4E0D\u663E\u793A</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u67E5\u8BE2\u6761\u4EF6\u6216\u65B0\u5EFA\u6392\u671F\u5F39\u7A97\u4E2D\u65E5\u671F\u7C7B\u578B\u7B49\u4E0B\u62C9\u9009\u9879\u4E3A\u7A7A</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u524D\u7AEF\u901A\u8FC7 lookupCode \u67E5\u8BE2\u503C\u96C6 MBO.SCHEDULE_DATE_TYPE \u7B49\uFF0C\u503C\u96C6\u672A\u914D\u7F6E\u6216\u672A\u542F\u7528\u5219\u4E0B\u62C9\u9009\u9879\u4E3A\u7A7A\u3002\u9700\u5728\u503C\u96C6\u7BA1\u7406\u9875\u9762\u914D\u7F6E\u5BF9\u5E94\u503C\u96C6</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> LOOKUP_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u503C\u96C6\u7F16\u7801, LOOKUP_VALUE_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u503C\u7F16\u7801,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         LOOKUP_VALUE_NAME </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u503C\u540D\u79F0, ENABLE_FLAG </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u542F\u7528\u6807\u8BB0</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> SYS_LOOKUP_VALUE</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> LOOKUP_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>MBO.SCHEDULE_DATE_TYPE</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> ENABLE_FLAG </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>N</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ORDER BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> LOOKUP_CODE;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u951910\uFF1A\u8BB2\u5E08\u4E0D\u80FD\u4E3A\u7A7A</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u65B0\u5EFA\u6392\u671F\u63D0\u4EA4\u65F6\uFF0CLECTURER_ARCHIVES_CODE \u5B57\u6BB5\u4E3A\u7A7A</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u524D\u7AEF\u8868\u5355\u5BF9 lecturerArchivesCode \u5B57\u6BB5\u914D\u7F6E required \u6821\u9A8C\uFF0C\u63D0\u4EA4\u524D\u6821\u9A8C\u8BB2\u5E08\u662F\u5426\u9009\u62E9\uFF0C\u4E3A\u7A7A\u5219\u963B\u6B62\u63D0\u4EA4\u5E76\u63D0\u793A&quot;\u8BB2\u5E08\u4E0D\u80FD\u4E3A\u7A7A&quot;\u3002\u8BB2\u5E08\u662F\u6392\u671F\u7684\u6838\u5FC3\u5BF9\u8C61\uFF0C\u5FC5\u987B\u660E\u786E</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> LECTURER_SCHEDULE_ID </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u6392\u671FID, LECTURER_NAME </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u8BB2\u5E08\u59D3\u540D,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         LECTURER_ARCHIVES_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u8BB2\u5E08\u6863\u6848\u7F16\u7801, </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>STATUS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u72B6\u6001</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> MA_LECTURER_SCHEDULE</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> LECTURER_ARCHIVES_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>OR</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> LECTURER_NAME </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
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
                createVNode("td", null, "\u65E5\u671F\u7C7B\u578B\u4E0D\u80FD\u4E3A\u7A7A"),
                createVNode("td", null, "\u65B0\u5EFA\u6392\u671F\u63D0\u4EA4"),
                createVNode("td", null, "\u672A\u9009\u62E9\u65E5\u671F\u7C7B\u578B\uFF1B\u9009\u62E9\u65E5\u671F\u7C7B\u578B\u540E\u63D0\u4EA4"),
                createVNode("td", null, "\u63D0\u793A"),
                createVNode("td", null, "\u524D\u7AEF\u6821\u9A8C dateType \u5FC5\u586B")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u65E5\u671F\u4E0D\u80FD\u4E3A\u7A7A"),
                createVNode("td", null, "\u65B0\u5EFA/\u53D6\u6D88\u6392\u671F\u63D0\u4EA4"),
                createVNode("td", null, "\u672A\u9009\u62E9\u65E5\u671F\u8303\u56F4\uFF1B\u9009\u62E9\u65E5\u671F\u8303\u56F4\u540E\u63D0\u4EA4"),
                createVNode("td", null, "\u63D0\u793A"),
                createVNode("td", null, "\u524D\u7AEF\u6821\u9A8C date \u5FC5\u586B")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u8BE5\u8BB2\u5E08\u5728\u6307\u5B9A\u65F6\u95F4\u6BB5\u5DF2\u6709\u6392\u671F\uFF0C\u8BF7\u91CD\u65B0\u9009\u62E9"),
                createVNode("td", null, "\u65B0\u5EFA\u6392\u671F\u63D0\u4EA4"),
                createVNode("td", null, "\u6392\u671F\u65F6\u95F4\u6BB5\u51B2\u7A81\uFF1B\u66F4\u6362\u65F6\u95F4\u6BB5\u6216\u5148\u53D6\u6D88\u5DF2\u6709\u6392\u671F"),
                createVNode("td", null, "\u63D0\u793A"),
                createVNode("td", null, "\u540E\u7AEF\u51B2\u7A81\u6821\u9A8C\uFF0C\u65F6\u95F4\u6BB5\u4EA4\u96C6\u5224\u65AD")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u8BF7\u6C42\u5931\u8D25"),
                createVNode("td", null, "\u63A5\u53E3\u8C03\u7528"),
                createVNode("td", null, "\u540E\u7AEF\u670D\u52A1\u5F02\u5E38\uFF1B\u68C0\u67E5 mbo-business \u5FAE\u670D\u52A1\u72B6\u6001"),
                createVNode("td", null, "\u9519\u8BEF"),
                createVNode("td", null, "HTTP \u72B6\u6001\u7801\u975E 2xx")
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
                createVNode("td", null, "\u6570\u636E\u4E0D\u5B58\u5728"),
                createVNode("td", null, "\u53D6\u6D88\u6392\u671F"),
                createVNode("td", null, "\u6392\u671FID\u4E0D\u5B58\u5728\u6216\u5DF2\u5220\u9664\uFF0C\u68C0\u67E5 LECTURER_SCHEDULE_ID \u6709\u6548\u6027"),
                createVNode("td", null, "error"),
                createVNode("td", null, "\u63A5\u53E3\u8FD4\u56DE\u6570\u636E\u4E3A\u7A7A")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u72B6\u6001\u4E0D\u5141\u8BB8\u64CD\u4F5C"),
                createVNode("td", null, "\u53D6\u6D88\u6392\u671F"),
                createVNode("td", null, "\u6392\u671F\u72B6\u6001\u4E0D\u5141\u8BB8\u53D6\u6D88\uFF0C\u5982\u5DF2\u53D6\u6D88\u4E0D\u53EF\u91CD\u590D\u53D6\u6D88\uFF0C\u68C0\u67E5 STATUS"),
                createVNode("td", null, "error"),
                createVNode("td", null, "\u540E\u7AEF\u6821\u9A8C\u72B6\u6001\u673A\u5931\u8D25")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u503C\u96C6\u6570\u636E\u4E0D\u663E\u793A"),
                createVNode("td", null, "\u4E0B\u62C9\u9009\u9879"),
                createVNode("td", null, "\u503C\u96C6 MBO.SCHEDULE_DATE_TYPE \u7B49\u672A\u914D\u7F6E\uFF0C\u68C0\u67E5\u503C\u96C6\u914D\u7F6E"),
                createVNode("td", null, "warning"),
                createVNode("td", null, "lookupCode \u67E5\u8BE2\u8FD4\u56DE\u7A7A")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u8BB2\u5E08\u4E0D\u80FD\u4E3A\u7A7A"),
                createVNode("td", null, "\u65B0\u5EFA\u6392\u671F\u63D0\u4EA4"),
                createVNode("td", null, "\u672A\u9009\u62E9\u8BB2\u5E08\uFF0C\u9009\u62E9\u8BB2\u5E08\u540E\u63D0\u4EA4"),
                createVNode("td", null, "error"),
                createVNode("td", null, "\u524D\u7AEF\u6821\u9A8C LECTURER_ARCHIVES_CODE \u975E\u7A7A")
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95191\uFF1A\u65E5\u671F\u7C7B\u578B\u4E0D\u80FD\u4E3A\u7A7A"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u65B0\u5EFA\u6392\u671F\u63D0\u4EA4\u65F6\uFF0CdateType \u5B57\u6BB5\u4E3A\u7A7A")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode('\uFF1A\u524D\u7AEF\u8868\u5355\u5BF9 dateType \u5B57\u6BB5\u914D\u7F6E required \u6821\u9A8C\uFF0C\u63D0\u4EA4\u524D\u6267\u884C\u5B57\u6BB5\u6821\u9A8C\uFF0C\u82E5\u503C\u4E3A\u7A7A\u5219\u963B\u6B62\u63D0\u4EA4\u5E76\u63D0\u793A"\u65E5\u671F\u7C7B\u578B\u4E0D\u80FD\u4E3A\u7A7A"\u3002dateType \u7528\u4E8E\u533A\u5206\u6392\u671F\u7C7B\u578B\uFF08\u5982\u51FA\u5DEE\u3001\u4F11\u5047\u3001\u57F9\u8BAD\u7B49\uFF09\uFF0C\u662F\u6392\u671F\u7EDF\u8BA1\u7684\u5206\u7C7B\u4F9D\u636E\uFF0C\u5FC5\u987B\u586B\u5199')
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " LECTURER_SCHEDULE_ID "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u6392\u671FID,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         LECTURER_ARCHIVES_CODE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u8BB2\u5E08\u6863\u6848\u7F16\u7801,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         LECTURER_NAME "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u8BB2\u5E08\u59D3\u540D,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         TO_CHAR("),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "START_DATE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ","),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "YYYY-MM-DD"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5F00\u59CB\u65E5\u671F,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         TO_CHAR(END_DATE,"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "YYYY-MM-DD"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7ED3\u675F\u65E5\u671F")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " MA_LECTURER_SCHEDULE")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " DATE_TYPE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NULL"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "OR"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " DATE_TYPE "),
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
          createVNode("h4", null, "\u62A5\u95192\uFF1A\u65E5\u671F\u4E0D\u80FD\u4E3A\u7A7A"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u65B0\u5EFA\u6392\u671F\u6216\u53D6\u6D88\u6392\u671F\u63D0\u4EA4\u65F6\uFF0Cdate \u65E5\u671F\u8303\u56F4\u5B57\u6BB5\u4E3A\u7A7A")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode('\uFF1A\u524D\u7AEF DatePicker(range) \u7EC4\u4EF6\u5BF9 date \u5B57\u6BB5\u914D\u7F6E required \u6821\u9A8C\uFF0C\u63D0\u4EA4\u524D\u6821\u9A8C\u65E5\u671F\u8303\u56F4\u662F\u5426\u586B\u5199\uFF0C\u4E3A\u7A7A\u5219\u963B\u6B62\u63D0\u4EA4\u5E76\u63D0\u793A"\u65E5\u671F\u4E0D\u80FD\u4E3A\u7A7A"\u3002\u65E5\u671F\u8303\u56F4\u662F\u6392\u671F\u7684\u6838\u5FC3\u6570\u636E\uFF0C\u65B0\u5EFA\u65F6\u7528\u4E8E\u786E\u5B9A\u5360\u7528\u65F6\u6BB5\uFF0C\u53D6\u6D88\u65F6\u7528\u4E8E\u786E\u5B9A\u91CA\u653E\u65F6\u6BB5\uFF0C\u5FC5\u987B\u586B\u5199')
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " LECTURER_SCHEDULE_ID "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u6392\u671FID,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         LECTURER_ARCHIVES_CODE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u8BB2\u5E08\u6863\u6848\u7F16\u7801,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         LECTURER_NAME "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u8BB2\u5E08\u59D3\u540D,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         DATE_TYPE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u65E5\u671F\u7C7B\u578B,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "STATUS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u72B6\u6001")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " MA_LECTURER_SCHEDULE")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "START_DATE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NULL"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "OR"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " END_DATE "),
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
          createVNode("h4", null, "\u62A5\u95193\uFF1A\u8BE5\u8BB2\u5E08\u5728\u6307\u5B9A\u65F6\u95F4\u6BB5\u5DF2\u6709\u6392\u671F\uFF0C\u8BF7\u91CD\u65B0\u9009\u62E9"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u65B0\u5EFA\u6392\u671F\u63D0\u4EA4\u65F6\uFF0C\u65B0\u6392\u671F\u65F6\u95F4\u6BB5\u4E0E\u8BE5\u8BB2\u5E08\u5DF2\u6709\u6709\u6548\u6392\u671F\uFF08STATUS='active'\uFF09\u65F6\u95F4\u6BB5\u5B58\u5728\u4EA4\u96C6")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode('\uFF1A\u540E\u7AEF save \u63A5\u53E3\u5728\u4FDD\u5B58\u524D\u6267\u884C\u51B2\u7A81\u6821\u9A8C\uFF0C\u67E5\u8BE2 MA_LECTURER_SCHEDULE \u8868\u4E2D\u540C\u4E00\u8BB2\u5E08\uFF08LECTURER_ARCHIVES_ID \u76F8\u540C\uFF09\u4E14\u72B6\u6001\u4E3A active \u7684\u6392\u671F\u8BB0\u5F55\uFF0C\u5224\u65AD\u65B0\u6392\u671F\u7684 [START_DATE, END_DATE] \u4E0E\u5DF2\u6709\u6392\u671F\u7684 [START_DATE, END_DATE] \u662F\u5426\u5B58\u5728\u4EA4\u96C6\uFF08\u65B0\u6392\u671F.START_DATE <= \u5DF2\u6709.END_DATE AND \u65B0\u6392\u671F.END_DATE >= \u5DF2\u6709.START_DATE\uFF09\u3002\u82E5\u5B58\u5728\u4EA4\u96C6\u5219\u629B\u51FA\u4E1A\u52A1\u5F02\u5E38\uFF0C\u63D0\u793A"\u8BE5\u8BB2\u5E08\u5728\u6307\u5B9A\u65F6\u95F4\u6BB5\u5DF2\u6709\u6392\u671F\uFF0C\u8BF7\u91CD\u65B0\u9009\u62E9"\u3002\u6B64\u6821\u9A8C\u4ECE\u6E90\u5934\u907F\u514D\u8BB2\u5E08\u88AB\u91CD\u590D\u70B9\u7528\uFF0C\u4FDD\u8BC1\u6392\u671F\u6570\u636E\u552F\u4E00\u6027')
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " a.LECTURER_SCHEDULE_ID "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u6392\u671F1ID,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         b.LECTURER_SCHEDULE_ID "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u6392\u671F2ID,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         a.LECTURER_ARCHIVES_CODE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u8BB2\u5E08\u6863\u6848\u7F16\u7801,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         a.LECTURER_NAME "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u8BB2\u5E08\u59D3\u540D,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         TO_CHAR(a.START_DATE,"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "YYYY-MM-DD"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u6392\u671F1\u5F00\u59CB,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         TO_CHAR(a.END_DATE,"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "YYYY-MM-DD"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u6392\u671F1\u7ED3\u675F,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         TO_CHAR(b.START_DATE,"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "YYYY-MM-DD"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u6392\u671F2\u5F00\u59CB,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         TO_CHAR(b.END_DATE,"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "YYYY-MM-DD"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u6392\u671F2\u7ED3\u675F")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " MA_LECTURER_SCHEDULE a")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "JOIN"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " MA_LECTURER_SCHEDULE b "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ON"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " a.LECTURER_SCHEDULE_ID "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " b.LECTURER_SCHEDULE_ID")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " a.LECTURER_ARCHIVES_ID "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " b.LECTURER_ARCHIVES_ID")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " a.STATUS "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "active"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " b.STATUS "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "active"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " a.START_DATE "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "<="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " b.END_DATE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " a.END_DATE "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, ">="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " b.START_DATE;")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95194\uFF1A\u8BF7\u6C42\u5931\u8D25"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u8C03\u7528 mlt/maLecturerSchedule/save\u3001cancel \u6216 list \u63A5\u53E3\u65F6\uFF0C\u540E\u7AEF\u8FD4\u56DE HTTP \u72B6\u6001\u7801\u975E 2xx")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode('\uFF1A\u524D\u7AEF\u901A\u8FC7 axios \u8C03\u7528\u540E\u7AEF\u63A5\u53E3\uFF0C\u82E5\u54CD\u5E94\u72B6\u6001\u7801\u975E 2xx \u6216\u7F51\u7EDC\u5F02\u5E38\u5219\u89E6\u53D1\u9519\u8BEF\u56DE\u8C03\uFF0C\u7EDF\u4E00\u63D0\u793A"\u8BF7\u6C42\u5931\u8D25"\u3002\u5E38\u89C1\u6839\u56E0\u5305\u62EC\uFF1Ambo-business \u5FAE\u670D\u52A1\u672A\u542F\u52A8\u6216\u5F02\u5E38\u3001\u6570\u636E\u5E93\u8FDE\u63A5\u5931\u8D25\u3001SQL \u6267\u884C\u8D85\u65F6\u3001\u540E\u7AEF\u4E1A\u52A1\u5F02\u5E38\u672A\u6355\u83B7\u3001\u7F51\u7EDC\u4E2D\u65AD\u7B49\u3002\u9700\u68C0\u67E5 mbo-business \u5FAE\u670D\u52A1\u8FD0\u884C\u72B6\u6001\u3001\u6570\u636E\u5E93\u8FDE\u63A5\u6C60\u3001\u540E\u7AEF\u65E5\u5FD7\u5B9A\u4F4D\u5177\u4F53\u5F02\u5E38\u5806\u6808')
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
                  createVNode("span", { style: { "color": "#676E95" } }, "-- \u68C0\u67E5\u8FD1\u671F\u5F02\u5E38\u6392\u671F\u8BB0\u5F55\uFF08\u7ED3\u5408\u540E\u7AEF\u65E5\u5FD7\u65F6\u95F4\u6392\u67E5\uFF09")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "SELECT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " LECTURER_SCHEDULE_ID "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u6392\u671FID,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         LECTURER_ARCHIVES_CODE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u8BB2\u5E08\u6863\u6848\u7F16\u7801,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         LECTURER_NAME "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u8BB2\u5E08\u59D3\u540D,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "STATUS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u72B6\u6001,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         TO_CHAR(LAST_UPDATE_DATE,"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "YYYY-MM-DD HH24:MI:SS"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u6700\u540E\u66F4\u65B0\u65F6\u95F4,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         LAST_UPDATED_BY "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u6700\u540E\u66F4\u65B0\u4EBA")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " MA_LECTURER_SCHEDULE")
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
          createVNode("h4", null, "\u62A5\u95195\uFF1A\u7F51\u7EDC\u5F02\u5E38/\u63A5\u53E3\u8D85\u65F6"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u4EFB\u610F\u63A5\u53E3\u8C03\u7528\u65F6\uFF0C\u7F51\u7EDC\u4E2D\u65AD\u6216\u63A5\u53E3\u54CD\u5E94\u8D85\u8FC7 axios timeout \u914D\u7F6E")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode('\uFF1A\u524D\u7AEF axios \u8BF7\u6C42\u672A\u6536\u5230\u54CD\u5E94\u6216\u54CD\u5E94\u8D85\u65F6\uFF0C\u89E6\u53D1 catch \u56DE\u8C03\u7EDF\u4E00\u63D0\u793A"\u8BF7\u6C42\u5931\u8D25"\u3002\u5E38\u89C1\u6839\u56E0\uFF1A\u7F51\u7EDC\u4E2D\u65AD\u3001mbo-business \u670D\u52A1\u5047\u6B7B\u3001\u6570\u636E\u5E93\u6162\u67E5\u8BE2\u7B49\u3002\u9700\u68C0\u67E5\u7F51\u7EDC\u8FDE\u901A\u6027\u3001\u540E\u7AEF\u670D\u52A1\u8D1F\u8F7D\u3001\u6570\u636E\u5E93\u6027\u80FD')
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " LECTURER_SCHEDULE_ID "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u6392\u671FID, LECTURER_NAME "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u8BB2\u5E08\u59D3\u540D,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "STATUS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u72B6\u6001,")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " MA_LECTURER_SCHEDULE")
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
          createVNode("h4", null, "\u62A5\u95196\uFF1A\u6743\u9650\u4E0D\u8DB3"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u70B9\u51FB\u65B0\u5EFA\u3001\u53D6\u6D88\u6392\u671F\u7B49\u6309\u94AE\u65F6\uFF0C\u5F53\u524D\u7528\u6237\u65E0\u5BF9\u5E94 permissionList \u6743\u9650\u7801")
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
                  createVNode("span", { style: { "color": "#C3E88D" } }, "%lecturer_schedule%"),
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
          createVNode("h4", null, "\u62A5\u95197\uFF1A\u6570\u636E\u4E0D\u5B58\u5728"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u53D6\u6D88\u6392\u671F\u7B49\u64CD\u4F5C\u65F6\uFF0C\u63A5\u53E3\u8FD4\u56DE\u6570\u636E\u4E3A\u7A7A\u6216\u6392\u671FID\u4E0D\u5B58\u5728")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u524D\u7AEF\u901A\u8FC7 lecturerScheduleId \u8C03\u7528\u63A5\u53E3\uFF0C\u540E\u7AEF\u67E5\u8BE2 MA_LECTURER_SCHEDULE \u8868\u65E0\u5BF9\u5E94\u8BB0\u5F55\u6216\u8BB0\u5F55\u5DF2\u903B\u8F91\u5220\u9664\uFF0C\u8FD4\u56DE\u7A7A\u6570\u636E\u3002\u5E38\u89C1\u6839\u56E0\uFF1A\u6392\u671FID\u9519\u8BEF\u3001\u6392\u671F\u5DF2\u88AB\u5220\u9664\u3001\u8DE8\u79DF\u6237\u67E5\u8BE2\u3001\u6570\u636E\u6743\u9650\u9694\u79BB\u7B49\u3002\u9700\u68C0\u67E5 LECTURER_SCHEDULE_ID \u6709\u6548\u6027\u53CA\u6570\u636E\u6743\u9650")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " LECTURER_SCHEDULE_ID "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u6392\u671FID, LECTURER_NAME "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u8BB2\u5E08\u59D3\u540D,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "STATUS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u72B6\u6001, DELETE_FLAG "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5220\u9664\u6807\u8BB0")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " MA_LECTURER_SCHEDULE")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " LECTURER_SCHEDULE_ID "),
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
          createVNode("h4", null, "\u62A5\u95198\uFF1A\u72B6\u6001\u4E0D\u5141\u8BB8\u64CD\u4F5C"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u70B9\u51FB\u53D6\u6D88\u6392\u671F\u6309\u94AE\u65F6\uFF0C\u6392\u671F\u72B6\u6001\u4E0D\u5141\u8BB8\u53D6\u6D88")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u540E\u7AEF\u6821\u9A8C\u72B6\u6001\u673A\uFF0C\u5982\u5DF2\u53D6\u6D88\uFF08cancelled\uFF09\u4E0D\u53EF\u91CD\u590D\u53D6\u6D88\u3001\u5DF2\u8FC7\u671F\u4E0D\u53EF\u53D6\u6D88\u7B49\u3002\u72B6\u6001\u4E0D\u5339\u914D\u65F6\u540E\u7AEF\u8FD4\u56DE\u4E1A\u52A1\u5F02\u5E38\u3002\u9700\u68C0\u67E5\u6392\u671F\u5F53\u524D\u72B6\u6001\u53CA\u64CD\u4F5C\u6D41\u7A0B")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " LECTURER_SCHEDULE_ID "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u6392\u671FID, LECTURER_NAME "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u8BB2\u5E08\u59D3\u540D,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "STATUS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u72B6\u6001, ERROR_INFO "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5F02\u5E38\u95EE\u9898")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " MA_LECTURER_SCHEDULE")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "STATUS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NOT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IN"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " ("),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "active"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ","),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "cancelled"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ","),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "expired"),
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
          createVNode("h4", null, "\u62A5\u95199\uFF1A\u503C\u96C6\u6570\u636E\u4E0D\u663E\u793A"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u67E5\u8BE2\u6761\u4EF6\u6216\u65B0\u5EFA\u6392\u671F\u5F39\u7A97\u4E2D\u65E5\u671F\u7C7B\u578B\u7B49\u4E0B\u62C9\u9009\u9879\u4E3A\u7A7A")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u524D\u7AEF\u901A\u8FC7 lookupCode \u67E5\u8BE2\u503C\u96C6 MBO.SCHEDULE_DATE_TYPE \u7B49\uFF0C\u503C\u96C6\u672A\u914D\u7F6E\u6216\u672A\u542F\u7528\u5219\u4E0B\u62C9\u9009\u9879\u4E3A\u7A7A\u3002\u9700\u5728\u503C\u96C6\u7BA1\u7406\u9875\u9762\u914D\u7F6E\u5BF9\u5E94\u503C\u96C6")
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
                  createVNode("span", { style: { "color": "#C3E88D" } }, "MBO.SCHEDULE_DATE_TYPE"),
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
          createVNode("h4", null, "\u62A5\u951910\uFF1A\u8BB2\u5E08\u4E0D\u80FD\u4E3A\u7A7A"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u65B0\u5EFA\u6392\u671F\u63D0\u4EA4\u65F6\uFF0CLECTURER_ARCHIVES_CODE \u5B57\u6BB5\u4E3A\u7A7A")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode('\uFF1A\u524D\u7AEF\u8868\u5355\u5BF9 lecturerArchivesCode \u5B57\u6BB5\u914D\u7F6E required \u6821\u9A8C\uFF0C\u63D0\u4EA4\u524D\u6821\u9A8C\u8BB2\u5E08\u662F\u5426\u9009\u62E9\uFF0C\u4E3A\u7A7A\u5219\u963B\u6B62\u63D0\u4EA4\u5E76\u63D0\u793A"\u8BB2\u5E08\u4E0D\u80FD\u4E3A\u7A7A"\u3002\u8BB2\u5E08\u662F\u6392\u671F\u7684\u6838\u5FC3\u5BF9\u8C61\uFF0C\u5FC5\u987B\u660E\u786E')
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " LECTURER_SCHEDULE_ID "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u6392\u671FID, LECTURER_NAME "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u8BB2\u5E08\u59D3\u540D,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         LECTURER_ARCHIVES_CODE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u8BB2\u5E08\u6863\u6848\u7F16\u7801, "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "STATUS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u72B6\u6001")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " MA_LECTURER_SCHEDULE")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " LECTURER_ARCHIVES_CODE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NULL"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "OR"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " LECTURER_NAME "),
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
  _push(ssrRenderComponent(_component_KbCard, { title: "\u5E38\u89C1\u95EE\u9898" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}><strong${_scopeId}>Q1\uFF1A\u6DFB\u52A0\u6392\u671F\u65F6\u65F6\u95F4\u51B2\u7A81\u5982\u4F55\u5904\u7406\uFF1F</strong></li></ul><p${_scopeId}>A\uFF1A\u7CFB\u7EDF\u81EA\u52A8\u6821\u9A8C\u6392\u671F\u51B2\u7A81\uFF0C\u5982\u8BE5\u8BB2\u5E08\u5728\u76EE\u6807\u65F6\u95F4\u6BB5\u5DF2\u6709\u6392\u671F\uFF0C\u4F1A\u63D0\u793A\u51B2\u7A81\u4FE1\u606F\uFF0C\u4E0D\u5141\u8BB8\u4FDD\u5B58\u3002</p><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>Q2\uFF1A\u53D6\u6D88\u6392\u671F\u540E\u80FD\u5426\u6062\u590D\uFF1F</strong></li></ul><p${_scopeId}>A\uFF1A\u53D6\u6D88\u6392\u671F\u4E3A\u5373\u65F6\u751F\u6548\u64CD\u4F5C\uFF0C\u53D6\u6D88\u540E\u9700\u91CD\u65B0\u6DFB\u52A0\u6392\u671F\u3002</p><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>Q3\uFF1A\u6392\u671F\u662F\u5426\u9700\u8981\u5BA1\u6279\uFF1F</strong></li></ul><p${_scopeId}>A\uFF1A\u4E0D\u9700\u8981\u3002\u8BB2\u5E08\u6392\u671F\u65E0\u5DE5\u4F5C\u6D41\uFF0C\u6DFB\u52A0\u548C\u53D6\u6D88\u5747\u4E3A\u5373\u65F6\u751F\u6548\u3002</p><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>Q4\uFF1A\u6392\u671F\u4E0E\u70B9\u5C06\u4E1A\u52A1\u5982\u4F55\u5173\u8054\uFF1F</strong></li></ul><p${_scopeId}>A\uFF1A\u70B9\u5C06\u4E1A\u52A1\u9009\u62E9\u8BB2\u5E08\u65F6\uFF0C\u901A\u8FC7\u67E5\u8BE2\u8BB2\u5E08\u6392\u671F\u5224\u65AD\u53EF\u7528\u6027\u3002\u70B9\u5C06\u5355\u521B\u5EFA\u6210\u529F\u540E\u4F1A\u56DE\u5199\u5173\u8054\u5355\u53F7\uFF08RELATED_ORDER_CODE\uFF09\u5230\u6392\u671F\u8BB0\u5F55\u3002</p><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>Q5\uFF1A\u4E00\u4E2A\u8BB2\u5E08\u4E00\u5929\u53EF\u4EE5\u6709\u591A\u5C11\u4E2A\u6392\u671F\uFF1F</strong></li></ul><p${_scopeId}>A\uFF1A\u65E0\u6570\u91CF\u9650\u5236\uFF0C\u4F46\u540C\u4E00\u8BB2\u5E08\u7684\u6392\u671F\u65F6\u95F4\u6BB5\u4E0D\u53EF\u91CD\u53E0\uFF08\u51B2\u7A81\u6821\u9A8C\uFF09\u3002</p><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>Q6\uFF1A\u65E5\u5386\u4E0D\u663E\u793A\u6392\u671F\uFF1F</strong></li></ul><p${_scopeId}>A\uFF1A\u68C0\u67E5 LecturerCalendar \u7EC4\u4EF6 refresh \u5C5E\u6027\uFF0C\u786E\u8BA4\u6392\u671F\u6570\u636E\u5B58\u5728\u3002</p><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>Q7\uFF1A\u65B0\u5EFA\u6392\u671F\u540E\u65E5\u5386\u672A\u5237\u65B0\uFF1F</strong></li></ul><p${_scopeId}>A\uFF1A\u68C0\u67E5 setToggleTag \u662F\u5426\u6267\u884C\uFF0ConSuccess \u56DE\u8C03\u662F\u5426\u89E6\u53D1\u3002</p><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>Q8\uFF1A\u53D6\u6D88\u6392\u671F\u5931\u8D25\uFF1F</strong></li></ul><p${_scopeId}>A\uFF1A\u68C0\u67E5\u65E5\u671F\u8303\u56F4\u5185\u662F\u5426\u6709\u6392\u671F\u6570\u636E\uFF0Ccancel \u63A5\u53E3\u8FD4\u56DE\u5185\u5BB9\u3002</p>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "Q1\uFF1A\u6DFB\u52A0\u6392\u671F\u65F6\u65F6\u95F4\u51B2\u7A81\u5982\u4F55\u5904\u7406\uFF1F")
            ])
          ]),
          createVNode("p", null, "A\uFF1A\u7CFB\u7EDF\u81EA\u52A8\u6821\u9A8C\u6392\u671F\u51B2\u7A81\uFF0C\u5982\u8BE5\u8BB2\u5E08\u5728\u76EE\u6807\u65F6\u95F4\u6BB5\u5DF2\u6709\u6392\u671F\uFF0C\u4F1A\u63D0\u793A\u51B2\u7A81\u4FE1\u606F\uFF0C\u4E0D\u5141\u8BB8\u4FDD\u5B58\u3002"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "Q2\uFF1A\u53D6\u6D88\u6392\u671F\u540E\u80FD\u5426\u6062\u590D\uFF1F")
            ])
          ]),
          createVNode("p", null, "A\uFF1A\u53D6\u6D88\u6392\u671F\u4E3A\u5373\u65F6\u751F\u6548\u64CD\u4F5C\uFF0C\u53D6\u6D88\u540E\u9700\u91CD\u65B0\u6DFB\u52A0\u6392\u671F\u3002"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "Q3\uFF1A\u6392\u671F\u662F\u5426\u9700\u8981\u5BA1\u6279\uFF1F")
            ])
          ]),
          createVNode("p", null, "A\uFF1A\u4E0D\u9700\u8981\u3002\u8BB2\u5E08\u6392\u671F\u65E0\u5DE5\u4F5C\u6D41\uFF0C\u6DFB\u52A0\u548C\u53D6\u6D88\u5747\u4E3A\u5373\u65F6\u751F\u6548\u3002"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "Q4\uFF1A\u6392\u671F\u4E0E\u70B9\u5C06\u4E1A\u52A1\u5982\u4F55\u5173\u8054\uFF1F")
            ])
          ]),
          createVNode("p", null, "A\uFF1A\u70B9\u5C06\u4E1A\u52A1\u9009\u62E9\u8BB2\u5E08\u65F6\uFF0C\u901A\u8FC7\u67E5\u8BE2\u8BB2\u5E08\u6392\u671F\u5224\u65AD\u53EF\u7528\u6027\u3002\u70B9\u5C06\u5355\u521B\u5EFA\u6210\u529F\u540E\u4F1A\u56DE\u5199\u5173\u8054\u5355\u53F7\uFF08RELATED_ORDER_CODE\uFF09\u5230\u6392\u671F\u8BB0\u5F55\u3002"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "Q5\uFF1A\u4E00\u4E2A\u8BB2\u5E08\u4E00\u5929\u53EF\u4EE5\u6709\u591A\u5C11\u4E2A\u6392\u671F\uFF1F")
            ])
          ]),
          createVNode("p", null, "A\uFF1A\u65E0\u6570\u91CF\u9650\u5236\uFF0C\u4F46\u540C\u4E00\u8BB2\u5E08\u7684\u6392\u671F\u65F6\u95F4\u6BB5\u4E0D\u53EF\u91CD\u53E0\uFF08\u51B2\u7A81\u6821\u9A8C\uFF09\u3002"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "Q6\uFF1A\u65E5\u5386\u4E0D\u663E\u793A\u6392\u671F\uFF1F")
            ])
          ]),
          createVNode("p", null, "A\uFF1A\u68C0\u67E5 LecturerCalendar \u7EC4\u4EF6 refresh \u5C5E\u6027\uFF0C\u786E\u8BA4\u6392\u671F\u6570\u636E\u5B58\u5728\u3002"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "Q7\uFF1A\u65B0\u5EFA\u6392\u671F\u540E\u65E5\u5386\u672A\u5237\u65B0\uFF1F")
            ])
          ]),
          createVNode("p", null, "A\uFF1A\u68C0\u67E5 setToggleTag \u662F\u5426\u6267\u884C\uFF0ConSuccess \u56DE\u8C03\u662F\u5426\u89E6\u53D1\u3002"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "Q8\uFF1A\u53D6\u6D88\u6392\u671F\u5931\u8D25\uFF1F")
            ])
          ]),
          createVNode("p", null, "A\uFF1A\u68C0\u67E5\u65E5\u671F\u8303\u56F4\u5185\u662F\u5426\u6709\u6392\u671F\u6570\u636E\uFF0Ccancel \u63A5\u53E3\u8FD4\u56DE\u5185\u5BB9\u3002")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div><div id="changelog" style="${ssrRenderStyle({ "display": "none" })}"><div class="tab-pad"><div class="kl-wrap">`);
  _push(ssrRenderComponent(_component_KbCard, { title: "\u66F4\u65B0\u8BB0\u5F55" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u65E5\u671F</th><th${_scopeId}>\u63D0\u4EA4ID</th><th${_scopeId}>\u63D0\u4EA4\u4EBA</th><th${_scopeId}>\u63D0\u4EA4\u5185\u5BB9</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>2025-11-12</td><td${_scopeId}>-</td><td${_scopeId}>hfy</td><td${_scopeId}>\u521D\u59CB\u521B\u5EFA</td></tr><tr${_scopeId}><td${_scopeId}>2026-07-31</td><td${_scopeId}>-</td><td${_scopeId}>AI</td><td${_scopeId}>\u5BF9\u6BD4\u7F51\u7AD9\u8865\u5145\u8BE6\u7EC6\u903B\u8F91\u3001\u6570\u636E\u5E93\u8868\u5B57\u6BB5\u7B49</td></tr><tr${_scopeId}><td${_scopeId}>2026-08-28</td><td${_scopeId}>-</td><td${_scopeId}>AI</td><td${_scopeId}>\u5B8C\u6574\u91CD\u5199\uFF0C\u8865\u5145\u4E1A\u52A1\u6D41\u7A0B\u3001\u754C\u9762\u6A21\u5757\u3001\u6570\u636E\u5E93\u8868\u3001FAQ\u7B49</td></tr><tr${_scopeId}><td${_scopeId}>2026-08-30</td><td${_scopeId}>-</td><td${_scopeId}>AI</td><td${_scopeId}>\u6309 skill \u89C4\u8303\u683C\u5F0F\u91CD\u5199\uFF0C\u5220\u9664\u5B9A\u4E49\u7AE0\u8282\uFF0C\u8C03\u6574\u7AE0\u8282\u987A\u5E8F\u4E0E\u8868\u683C\u5217\u6570</td></tr></tbody></table>`);
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
                createVNode("td", null, "\u5BF9\u6BD4\u7F51\u7AD9\u8865\u5145\u8BE6\u7EC6\u903B\u8F91\u3001\u6570\u636E\u5E93\u8868\u5B57\u6BB5\u7B49")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "2026-08-28"),
                createVNode("td", null, "-"),
                createVNode("td", null, "AI"),
                createVNode("td", null, "\u5B8C\u6574\u91CD\u5199\uFF0C\u8865\u5145\u4E1A\u52A1\u6D41\u7A0B\u3001\u754C\u9762\u6A21\u5757\u3001\u6570\u636E\u5E93\u8868\u3001FAQ\u7B49")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "2026-08-30"),
                createVNode("td", null, "-"),
                createVNode("td", null, "AI"),
                createVNode("td", null, "\u6309 skill \u89C4\u8303\u683C\u5F0F\u91CD\u5199\uFF0C\u5220\u9664\u5B9A\u4E49\u7AE0\u8282\uFF0C\u8C03\u6574\u7AE0\u8282\u987A\u5E8F\u4E0E\u8868\u683C\u5217\u6570")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("\u70B9\u5C06\u7BA1\u7406/\u57FA\u7840\u7BA1\u7406/\u8BB2\u5E08\u6392\u671F/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
