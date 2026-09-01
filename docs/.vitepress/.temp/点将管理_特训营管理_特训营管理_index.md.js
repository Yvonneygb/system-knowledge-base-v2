import { resolveComponent, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.6ab74304.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"\u70B9\u5C06\u7BA1\u7406/\u7279\u8BAD\u8425\u7BA1\u7406/\u7279\u8BAD\u8425\u7BA1\u7406/index.md"}');
const _sfc_main = { name: "\u70B9\u5C06\u7BA1\u7406/\u7279\u8BAD\u8425\u7BA1\u7406/\u7279\u8BAD\u8425\u7BA1\u7406/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_BreadcrumbTabs = resolveComponent("BreadcrumbTabs");
  const _component_KbCard = resolveComponent("KbCard");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_BreadcrumbTabs, null, null, _parent));
  _push(`<div id="biz-intro" style="${ssrRenderStyle({ "display": "none" })}"><div class="tab-pad"><div class="kl-wrap"><div class="kl-card"><div class="biz-kl-hdr"><span class="biz-tag" style="${ssrRenderStyle({ "background": "rgba(124,58,237,0.08)", "color": "#7C3AED", "border-color": "rgba(124,58,237,0.18)" })}"> \u5B9A\u4E49</span><h2>\u7279\u8BAD\u8425\u7BA1\u7406\u7EF4\u62A4\u4EC0\u4E48</h2><p>\u7279\u8BAD\u8425\u7684\u4E3B\u6570\u636E\uFF0C\u662F\u6240\u6709\u7279\u8BAD\u8425\u70B9\u5C06\u4E0E\u57F9\u8BAD\u6267\u884C\u7684\u6E90\u5934</p></div><div class="biz-2col-inner"><div class="kl-col-box"><div style="${ssrRenderStyle({ "display": "flex", "align-items": "center", "gap": "10px", "margin-bottom": "12px" })}"><div style="${ssrRenderStyle({ "width": "40px", "height": "40px", "border-radius": "10px", "display": "flex", "align-items": "center", "justify-content": "center", "flex-shrink": "0", "background": "linear-gradient(135deg,#7C3AED,#6D28D9)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 2L14 5V11L8 14L2 11V5L8 2Z" stroke="white" stroke-width="1.5" stroke-linejoin="round"></path><path d="M2 5L8 8L14 5" stroke="white" stroke-width="1.5" stroke-linejoin="round"></path><path d="M8 8V14" stroke="white" stroke-width="1.5"></path></svg></div><h4 style="${ssrRenderStyle({ "font-size": "1rem", "font-weight": "800", "color": "#1F2937", "margin": "0" })}">\u7EF4\u62A4\u4EC0\u4E48</h4></div><p style="${ssrRenderStyle({ "font-size": "0.78rem", "font-weight": "600", "color": "#6B7280", "margin": "0 0 10px" })}">\u4E00\u671F\u7279\u8BAD\u8425\u7684\u57FA\u672C\u8BBE\u5B9A</p><div style="${ssrRenderStyle({ "display": "flex", "flex-direction": "column", "gap": "8px" })}"><div style="${ssrRenderStyle({ "display": "flex", "align-items": "flex-start", "gap": "8px", "padding": "8px 10px", "background": "#F5F3FF", "border-radius": "8px" })}"><div style="${ssrRenderStyle({ "font-size": ".75rem" })}"><strong>\u57FA\u672C\u4FE1\u606F</strong> \u2014 \u767B\u8BB0\u7279\u8BAD\u8425\u540D\u79F0\u4E0E\u7F16\u7801\uFF0C\u4F5C\u4E3A\u8BE5\u671F\u57F9\u8BAD\u5728\u7CFB\u7EDF\u5185\u7684\u552F\u4E00\u6807\u8BC6\u3002</div></div><div style="${ssrRenderStyle({ "display": "flex", "align-items": "flex-start", "gap": "8px", "padding": "8px 10px", "background": "#F5F3FF", "border-radius": "8px" })}"><div style="${ssrRenderStyle({ "font-size": ".75rem" })}"><strong>\u5F00\u73ED\u914D\u7F6E</strong> \u2014 \u914D\u7F6E\u4E3E\u529E\u65F6\u95F4\u3001\u4E3E\u529E\u5730\u70B9\u4E0E\u6388\u8BFE\u8BB2\u5E08\uFF0C\u754C\u5B9A\u8FD9\u671F\u8425\u7684\u4EA4\u4ED8\u6761\u4EF6\u3002</div></div></div></div><div class="kl-col-box alt"><div style="${ssrRenderStyle({ "display": "flex", "align-items": "center", "gap": "10px", "margin-bottom": "12px" })}"><div style="${ssrRenderStyle({ "width": "40px", "height": "40px", "border-radius": "10px", "display": "flex", "align-items": "center", "justify-content": "center", "flex-shrink": "0", "background": "linear-gradient(135deg,#16A34A,#22C55E)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="2.2" stroke="white" stroke-width="1.5"></circle><path d="M8 2V3.6" stroke="white" stroke-width="1.5" stroke-linecap="round"></path><path d="M8 12.4V14" stroke="white" stroke-width="1.5" stroke-linecap="round"></path><path d="M2 8H3.6" stroke="white" stroke-width="1.5" stroke-linecap="round"></path><path d="M12.4 8H14" stroke="white" stroke-width="1.5" stroke-linecap="round"></path><path d="M4.2 4.2L5.3 5.3" stroke="white" stroke-width="1.5" stroke-linecap="round"></path><path d="M10.7 10.7L11.8 11.8" stroke="white" stroke-width="1.5" stroke-linecap="round"></path></svg></div><h4 style="${ssrRenderStyle({ "font-size": "1rem", "font-weight": "800", "color": "#1F2937", "margin": "0" })}">\u4E3A\u4EC0\u4E48\u8981\u5EFA</h4></div><p style="${ssrRenderStyle({ "font-size": "0.78rem", "font-weight": "600", "color": "#6B7280", "margin": "0 0 10px" })}">\u5148\u6709\u8425\uFF0C\u624D\u80FD\u70B9\u5C06</p><div style="${ssrRenderStyle({ "display": "flex", "flex-direction": "column", "gap": "8px" })}"><div style="${ssrRenderStyle({ "display": "flex", "align-items": "flex-start", "gap": "8px", "padding": "8px 10px", "background": "#F0FDF4", "border-radius": "8px" })}"><div style="${ssrRenderStyle({ "font-size": ".75rem" })}"><strong>\u7EDF\u4E00\u53E3\u5F84</strong> \u2014 \u70B9\u5C06\u7533\u8BF7\u53EA\u80FD\u9009\u62E9\u5DF2\u5EFA\u7ACB\u5E76\u542F\u52A8\u7684\u7279\u8BAD\u8425\uFF0C\u907F\u514D\u53E3\u5F84\u4E0D\u4E00\u81F4\u7684\u57F9\u8BAD\u5B89\u6392\u3002</div></div><div style="${ssrRenderStyle({ "display": "flex", "align-items": "flex-start", "gap": "8px", "padding": "8px 10px", "background": "#F0FDF4", "border-radius": "8px" })}"><div style="${ssrRenderStyle({ "font-size": ".75rem" })}"><strong>\u8D44\u6E90\u524D\u7F6E</strong> \u2014 \u8BB2\u5E08\u4E0E\u573A\u5730\u5728\u5EFA\u8425\u65F6\u5C31\u5DF2\u660E\u786E\uFF0C\u70B9\u5C06\u65F6\u65E0\u9700\u91CD\u590D\u786E\u8BA4\u57FA\u7840\u5B89\u6392\u3002</div></div></div></div></div></div><div class="kl-card"><div class="biz-kl-hdr"><span class="biz-tag" style="${ssrRenderStyle({ "background": "rgba(124,58,237,0.08)", "color": "#7C3AED", "border-color": "rgba(124,58,237,0.18)" })}"> \u6D41\u7A0B</span><h2>\u7279\u8BAD\u8425\u7684\u751F\u547D\u5468\u671F</h2><p>\u4ECE\u5EFA\u6863\u914D\u7F6E\u5230\u542F\u52A8\u3001\u7ED3\u675F\u7684\u4E09\u6BB5\u72B6\u6001</p></div><div class="biz-steps"><div class="biz-step-item"><div class="biz-step-circle" style="${ssrRenderStyle({ "background": "linear-gradient(135deg,#7C3AED,#6D28D9)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 2L14 5V11L8 14L2 11V5L8 2Z" stroke="white" stroke-width="1.5" stroke-linejoin="round"></path><path d="M2 5L8 8L14 5" stroke="white" stroke-width="1.5" stroke-linejoin="round"></path><path d="M8 8V14" stroke="white" stroke-width="1.5"></path></svg></div><h5>\u5EFA\u6863\u914D\u7F6E</h5><small>\u65B0\u589E\u7279\u8BAD\u8425\u5E76\u914D\u7F6E<br>\u65F6\u95F4\xB7\u5730\u70B9\xB7\u8BB2\u5E08</small></div><div class="biz-step-arrow">\u2192</div><div class="biz-step-item"><div class="biz-step-circle" style="${ssrRenderStyle({ "background": "linear-gradient(135deg,#16A34A,#22C55E)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="5.5" stroke="white" stroke-width="1.5"></circle><path d="M6.8 5.8L10.2 8L6.8 10.2V5.8Z" stroke="white" stroke-width="1.5" stroke-linejoin="round"></path></svg></div><h5>\u542F\u52A8\u7279\u8BAD\u8425</h5><small>\u5BF9\u5916\u5F00\u653E<br>\u53EF\u88AB\u70B9\u5C06\u7533\u8BF7\u9009\u62E9</small></div><div class="biz-step-arrow">\u2192</div><div class="biz-step-item"><div class="biz-step-circle" style="${ssrRenderStyle({ "background": "linear-gradient(135deg,#F97316,#FB923C)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="5.5" stroke="white" stroke-width="1.5"></circle><rect x="6.2" y="6.2" width="3.6" height="3.6" rx="0.8" stroke="white" stroke-width="1.5"></rect></svg></div><h5>\u7ED3\u675F\u7279\u8BAD\u8425</h5><small>\u57F9\u8BAD\u4EA4\u4ED8\u5B8C\u6210<br>\u4E0D\u518D\u63A5\u53D7\u65B0\u7684\u70B9\u5C06</small></div></div></div><div class="kl-card"><div class="biz-kl-hdr"><span class="biz-tag" style="${ssrRenderStyle({ "background": "rgba(124,58,237,0.08)", "color": "#7C3AED", "border-color": "rgba(124,58,237,0.18)" })}"> \u5F71\u54CD</span><h2>\u5173\u952E\u89C4\u5219\u4E0E\u5F71\u54CD\u8303\u56F4</h2><p>\u72B6\u6001\u51B3\u5B9A\u53EF\u70B9\u5C06\u6027\uFF0C\u4E3B\u6570\u636E\u88AB\u591A\u5904\u4E0B\u6E38\u5F15\u7528</p></div><div class="biz-3col"><div class="kl-col-box" style="${ssrRenderStyle({ "margin-bottom": "0" })}"><div style="${ssrRenderStyle({ "display": "flex", "gap": "12px", "align-items": "flex-start" })}"><div style="${ssrRenderStyle({ "width": "36px", "height": "36px", "border-radius": "10px", "display": "flex", "align-items": "center", "justify-content": "center", "flex-shrink": "0", "background": "linear-gradient(135deg,#7C3AED,#6D28D9)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="3" width="5" height="5" rx="1" stroke="white" stroke-width="1.5"></rect><path d="M3 6.5L4.5 8L7 5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9 5H14" stroke="white" stroke-width="1.5" stroke-linecap="round"></path><rect x="2" y="10" width="5" height="3" rx="1" stroke="white" stroke-width="1.5"></rect><path d="M9 10H14" stroke="white" stroke-width="1.5" stroke-linecap="round"></path><path d="M9 13H13" stroke="white" stroke-width="1.5" stroke-linecap="round"></path></svg></div><div><h5 style="${ssrRenderStyle({ "font-size": "0.88rem", "font-weight": "800", "color": "#1F2937", "margin": "0 0 6px" })}">\u542F\u52A8\u540E\u624D\u53EF\u70B9\u5C06</h5><p style="${ssrRenderStyle({ "font-size": "0.73rem", "color": "#6B7280", "margin": "0", "line-height": "1.6" })}">\u53EA\u6709\u5904\u4E8E\u542F\u52A8\u72B6\u6001\u7684\u7279\u8BAD\u8425\u624D\u4F1A\u51FA\u73B0\u5728\u70B9\u5C06\u7533\u8BF7\u7684\u53EF\u9009\u8303\u56F4\u5185\uFF0C\u5DF2\u7ED3\u675F\u7684\u8425\u4E0D\u518D\u63A5\u53D7\u65B0\u70B9\u5C06\u3002</p></div></div></div><div class="kl-col-box alt" style="${ssrRenderStyle({ "margin-bottom": "0" })}"><div style="${ssrRenderStyle({ "display": "flex", "gap": "12px", "align-items": "flex-start" })}"><div style="${ssrRenderStyle({ "width": "36px", "height": "36px", "border-radius": "10px", "display": "flex", "align-items": "center", "justify-content": "center", "flex-shrink": "0", "background": "linear-gradient(135deg,#3B82F6,#60A5FA)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="5.5" r="2.2" stroke="white" stroke-width="1.5"></circle><path d="M2 13.5C2 11.2 3.8 9.8 6 9.8C8.2 9.8 10 11.2 10 13.5" stroke="white" stroke-width="1.5" stroke-linecap="round"></path><path d="M11 4.2C12.2 4.5 13 5.4 13 6.5C13 7.6 12.3 8.4 11.2 8.7" stroke="white" stroke-width="1.5" stroke-linecap="round"></path><path d="M12 13.5C12 11.8 13 10.6 14.5 10.4" stroke="white" stroke-width="1.5" stroke-linecap="round"></path></svg></div><div><h5 style="${ssrRenderStyle({ "font-size": "0.88rem", "font-weight": "800", "color": "#1F2937", "margin": "0 0 6px" })}">\u652F\u6491\u70B9\u5C06\u4E0E\u53C2\u8BAD</h5><p style="${ssrRenderStyle({ "font-size": "0.73rem", "color": "#6B7280", "margin": "0", "line-height": "1.6" })}">\u7279\u8BAD\u8425\u4E3B\u6570\u636E\u88AB\u7279\u8BAD\u8425\u70B9\u5C06\u3001\u57F9\u8BAD\u6267\u884C\u4E0E\u53C2\u8BAD\u8BB0\u5F55\u76F4\u63A5\u5F15\u7528\uFF0C\u662F\u8FD9\u4E9B\u4E1A\u52A1\u7684\u5171\u540C\u57FA\u51C6\u3002</p></div></div></div><div class="kl-col-box" style="${ssrRenderStyle({ "margin-bottom": "0" })}"><div style="${ssrRenderStyle({ "display": "flex", "gap": "12px", "align-items": "flex-start" })}"><div style="${ssrRenderStyle({ "width": "36px", "height": "36px", "border-radius": "10px", "display": "flex", "align-items": "center", "justify-content": "center", "flex-shrink": "0", "background": "linear-gradient(135deg,#16A34A,#22C55E)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2.5" y="3.5" width="11" height="10" rx="1.5" stroke="white" stroke-width="1.5"></rect><path d="M2.5 6.5H13.5" stroke="white" stroke-width="1.5"></path><path d="M5.5 2V4" stroke="white" stroke-width="1.5" stroke-linecap="round"></path><path d="M10.5 2V4" stroke="white" stroke-width="1.5" stroke-linecap="round"></path><path d="M6 9.5H10" stroke="white" stroke-width="1.5" stroke-linecap="round"></path></svg></div><div><h5 style="${ssrRenderStyle({ "font-size": "0.88rem", "font-weight": "800", "color": "#1F2937", "margin": "0 0 6px" })}">\u5E26\u51FA\u8BB2\u5E08\u5360\u7528</h5><p style="${ssrRenderStyle({ "font-size": "0.73rem", "color": "#6B7280", "margin": "0", "line-height": "1.6" })}">\u5EFA\u8425\u65F6\u6307\u5B9A\u7684\u8BB2\u5E08\u4E0E\u65F6\u95F4\u4F1A\u4F53\u73B0\u4E3A\u8BB2\u5E08\u6392\u671F\u5360\u7528\uFF0C\u907F\u514D\u540C\u4E00\u8BB2\u5E08\u88AB\u5B89\u6392\u5230\u51B2\u7A81\u7684\u8425\u671F\u3002</p></div></div></div></div><div class="kl-tip" style="${ssrRenderStyle({ "margin-top": "14px" })}"><strong>\u7EF4\u62A4\u539F\u5219\uFF1A\u7279\u8BAD\u8425\u4E3B\u6570\u636E\u662F\u70B9\u5C06\u4E0E\u57F9\u8BAD\u6267\u884C\u7684\u5171\u540C\u57FA\u51C6\uFF0C\u5DF2\u4EA7\u751F\u70B9\u5C06\u7684\u7279\u8BAD\u8425\u8C03\u6574\u65F6\u95F4\u6216\u8BB2\u5E08\u4F1A\u5F71\u54CD\u5728\u9014\u7533\u8BF7\uFF0C\u5E94\u8C28\u614E\u53D8\u66F4\u3002</strong></div></div></div></div></div><div id="biz-flow" style="${ssrRenderStyle({ "display": "none" })}"><div class="tab-pad"><div class="bf-truth-flow"><h4 class="bf-main-title">\u7279\u8BAD\u8425\u7BA1\u7406 \u2014 \u5168\u94FE\u8DEF\u6D41\u7A0B\u56FE</h4><p class="bf-main-sub">\u5F00\u59CB \u2192 \u2605\u7279\u8BAD\u8425\u4E3B\u6570\u636E\u7EF4\u62A4\u2605(\u65B0\u589E\u2192\u7F16\u8F91\u914D\u7F6E) \u2192 \u542F\u52A8\u7279\u8BAD\u8425 \u2192 \u7ED3\u675F\u7279\u8BAD\u8425 \u2192 \u7ED3\u675F</p><div class="bf-fc-svg-wrap"><svg class="bf-fc-svg" style="${ssrRenderStyle({ "max-height": "none" })}" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg"><defs><marker id="arr-green" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon points="0,0 10,5 0,10" fill="#16A34A"></polygon></marker><marker id="arr-gray" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon points="0,0 10,5 0,10" fill="#9CA3AF"></polygon></marker><marker id="arr-blue" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon points="0,0 10,5 0,10" fill="#3B82F6"></polygon></marker><marker id="arr-red" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon points="0,0 10,5 0,10" fill="#EF4444"></polygon></marker><filter id="shadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000" flood-opacity="0.15"></feDropShadow></filter></defs><rect x="50" y="20" width="1100" height="95" rx="8" fill="#EFF6FF" stroke="#3B82F6" stroke-width="1.5" stroke-dasharray="6,4"></rect><text x="600" y="42" text-anchor="middle" fill="#1D4ED8" font-size="13" font-weight="600">\u4E0A\u6E38\u652F\u6491</text><rect x="270" y="56" width="150" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"></rect><text x="345" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">\u8BB2\u5E08\u4E3B\u6863</text><rect x="440" y="56" width="150" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"></rect><text x="515" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">\u7ECF\u9500\u5546\xB7\u95E8\u5E97\u4E3B\u6863</text><rect x="610" y="56" width="150" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"></rect><text x="685" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">\u7F16\u7801\u89C4\u5219</text><rect x="780" y="56" width="150" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"></rect><text x="855" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">\u70B9\u5C06\u6765\u6E90\u7533\u8BF7</text><line x1="235" y1="115" x2="235" y2="150" stroke="#3B82F6" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#arr-blue)"></line><rect x="195" y="150" width="80" height="44" rx="6" fill="#FAF5FF" stroke="#9333EA" stroke-width="1.5" stroke-dasharray="5,3"></rect><text x="235" y="177" text-anchor="middle" fill="#7C3AED" font-size="13" font-weight="600">\u5F00\u59CB</text><line x1="235" y1="194" x2="235" y2="230" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"></line><rect x="155" y="230" width="160" height="54" rx="6" fill="#16A34A" stroke="#15803D" stroke-width="2" filter="url(#shadow)"></rect><text x="235" y="254" text-anchor="middle" fill="#FFFFFF" font-size="13" font-weight="700">\u2605\u7279\u8BAD\u8425\u4E3B\u6570\u636E\u7EF4\u62A4\u2605</text><text x="235" y="272" text-anchor="middle" fill="#DCFCE7" font-size="10">\u65B0\u589E\xB7\u7F16\u8F91\u914D\u7F6E(\u65F6\u95F4/\u5730\u70B9/\u8BB2\u5E08)</text><line x1="235" y1="284" x2="235" y2="310" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"></line><rect x="150" y="310" width="170" height="40" rx="6" fill="#F0FDF4" stroke="#16A34A" stroke-width="2"></rect><text x="235" y="335" text-anchor="middle" fill="#166534" font-size="13" font-weight="600">\u542F\u52A8\u7279\u8BAD\u8425</text><line x1="235" y1="350" x2="235" y2="370" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"></line><rect x="150" y="370" width="170" height="40" rx="6" fill="#F0FDF4" stroke="#16A34A" stroke-width="2"></rect><text x="235" y="395" text-anchor="middle" fill="#166534" font-size="13" font-weight="600">\u7ED3\u675F\u7279\u8BAD\u8425</text><line x1="235" y1="410" x2="235" y2="430" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"></line><rect x="180" y="430" width="110" height="40" rx="6" fill="#FAF5FF" stroke="#9333EA" stroke-width="1.5" stroke-dasharray="5,3"></rect><text x="235" y="455" text-anchor="middle" fill="#7C3AED" font-size="13" font-weight="600">\u7ED3\u675F</text><line x1="235" y1="470" x2="235" y2="510" stroke="#16A34A" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#arr-green)"></line><rect x="50" y="510" width="1100" height="95" rx="8" fill="#F0FDF4" stroke="#16A34A" stroke-width="1.5" stroke-dasharray="6,4"></rect><text x="600" y="532" text-anchor="middle" fill="#166534" font-size="13" font-weight="600">\u4E0B\u6E38\u5F71\u54CD</text><rect x="270" y="550" width="150" height="36" rx="5" fill="#FFFFFF" stroke="#16A34A" stroke-width="1.2"></rect><text x="345" y="573" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">\u7279\u8BAD\u8425\u70B9\u5C06</text><rect x="440" y="550" width="150" height="36" rx="5" fill="#FFFFFF" stroke="#16A34A" stroke-width="1.2"></rect><text x="515" y="573" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">\u57F9\u8BAD\u6267\u884C</text><rect x="610" y="550" width="150" height="36" rx="5" fill="#FFFFFF" stroke="#16A34A" stroke-width="1.2"></rect><text x="685" y="573" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">\u53C2\u8BAD\u8BB0\u5F55</text><rect x="780" y="550" width="150" height="36" rx="5" fill="#FFFFFF" stroke="#16A34A" stroke-width="1.2"></rect><text x="855" y="573" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">\u8BB2\u5E08\u6392\u671F</text></svg></div><div class="bf-fc-legend"><span class="bf-fc-legend-item"><span class="bf-fc-dot bf-fc-dot-green"></span> \u4E3B\u6D41\u7A0B\u6B65\u9AA4</span><span class="bf-fc-legend-item"><span class="bf-fc-dot bf-fc-dot-purple"></span> \u5F00\u59CB/\u7ED3\u675F</span><span class="bf-fc-legend-item"><span class="bf-fc-dot bf-fc-dot-blue"></span> \u4E0A\u6E38\u652F\u6491</span><span class="bf-fc-legend-item"><span style="${ssrRenderStyle({ "display": "inline-block", "width": "22px", "height": "2px", "background": "#EF4444" })}"></span> \u5BA1\u6279\u62D2\u7EDD/\u9A73\u56DE</span></div></div></div></div><div id="key-logic" style="${ssrRenderStyle({ "display": "none" })}"><div class="tab-pad"><div class="kl-wrap">`);
  _push(ssrRenderComponent(_component_KbCard, {
    num: "1",
    title: "\u91CD\u70B9\u903B\u8F911\uFF1A\u7F16\u8F91\u72B6\u6001\u6821\u9A8C"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u610F\u4E49</strong>\uFF1A\u9650\u5236\u4EC5\u8349\u7A3F\u72B6\u6001\u53EF\u7F16\u8F91\uFF0C\u4FDD\u8BC1\u751F\u6548\u6570\u636E\u7A33\u5B9A\u6027\u3002</li><li${_scopeId}><strong${_scopeId}>\u5177\u4F53\u903B\u8F91\u63CF\u8FF0</strong>\uFF1A</li><li${_scopeId}>\u70B9\u51FB&quot;\u7F16\u8F91&quot;\u6309\u94AE\u65F6\u6821\u9A8C\u7279\u8BAD\u8425\u72B6\u6001\u3002</li><li${_scopeId}>\u72B6\u6001\u5FC5\u987B\u4E3A <code${_scopeId}>draft</code>\uFF08\u8349\u7A3F\uFF09\uFF0C\u5426\u5219\u63D0\u793A&quot;\u5F53\u524D\u72B6\u6001\u6570\u636E\u65E0\u6CD5\u7F16\u8F91\uFF01&quot;\u3002</li><li${_scopeId}>\u6821\u9A8C\u901A\u8FC7\u8DF3\u8F6C\u7F16\u8F91\u8BE6\u60C5\u9875 <code${_scopeId}>/detail/{specialTrainCampId}/edit</code>\u3002</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u610F\u4E49"),
              createTextVNode("\uFF1A\u9650\u5236\u4EC5\u8349\u7A3F\u72B6\u6001\u53EF\u7F16\u8F91\uFF0C\u4FDD\u8BC1\u751F\u6548\u6570\u636E\u7A33\u5B9A\u6027\u3002")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u5177\u4F53\u903B\u8F91\u63CF\u8FF0"),
              createTextVNode("\uFF1A")
            ]),
            createVNode("li", null, '\u70B9\u51FB"\u7F16\u8F91"\u6309\u94AE\u65F6\u6821\u9A8C\u7279\u8BAD\u8425\u72B6\u6001\u3002'),
            createVNode("li", null, [
              createTextVNode("\u72B6\u6001\u5FC5\u987B\u4E3A "),
              createVNode("code", null, "draft"),
              createTextVNode('\uFF08\u8349\u7A3F\uFF09\uFF0C\u5426\u5219\u63D0\u793A"\u5F53\u524D\u72B6\u6001\u6570\u636E\u65E0\u6CD5\u7F16\u8F91\uFF01"\u3002')
            ]),
            createVNode("li", null, [
              createTextVNode("\u6821\u9A8C\u901A\u8FC7\u8DF3\u8F6C\u7F16\u8F91\u8BE6\u60C5\u9875 "),
              createVNode("code", null, "/detail/{specialTrainCampId}/edit"),
              createTextVNode("\u3002")
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, {
    num: "2",
    title: "\u91CD\u70B9\u903B\u8F912\uFF1A\u62A5\u540D\u622A\u6B62\u903B\u8F91"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u610F\u4E49</strong>\uFF1A\u63A7\u5236\u62A5\u540D\u622A\u6B62\u65F6\u673A\uFF0C\u907F\u514D\u5F00\u8BFE\u540E\u4ECD\u53EF\u62A5\u540D\u3002</li><li${_scopeId}><strong${_scopeId}>\u5177\u4F53\u903B\u8F91\u63CF\u8FF0</strong>\uFF1A</li><li${_scopeId}>\u62A5\u540D\u622A\u6B62\u4E3A\u884C\u64CD\u4F5C\u6309\u94AE\uFF0C\u663E\u793A\u6761\u4EF6\uFF1A</li></ul><p${_scopeId}>1. <code${_scopeId}>status === &#39;valid&#39;</code>\uFF08\u7279\u8BAD\u8425\u5DF2\u751F\u6548\uFF09</p><p${_scopeId}>2. <code${_scopeId}>new Date(planStartTime) &gt; new Date()</code>\uFF08\u8BA1\u5212\u5F00\u59CB\u65F6\u95F4\u665A\u4E8E\u5F53\u524D\u65F6\u95F4\uFF09</p><ul${_scopeId}><li${_scopeId}>\u70B9\u51FB\u540E\u5F39\u7A97\u9009\u62E9\u62A5\u540D\u7ED3\u675F\u65F6\u95F4\u3002</li><li${_scopeId}>\u63D0\u4EA4\u8C03\u7528 <code${_scopeId}>signEnd</code> \u63A5\u53E3\uFF0C\u53C2\u6570 <code${_scopeId}>campCode</code> \u548C <code${_scopeId}>campsignEndTimeCode</code>\uFF08\u683C\u5F0F <code${_scopeId}>YYYY-MM-DD</code>\uFF09\u3002</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u610F\u4E49"),
              createTextVNode("\uFF1A\u63A7\u5236\u62A5\u540D\u622A\u6B62\u65F6\u673A\uFF0C\u907F\u514D\u5F00\u8BFE\u540E\u4ECD\u53EF\u62A5\u540D\u3002")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u5177\u4F53\u903B\u8F91\u63CF\u8FF0"),
              createTextVNode("\uFF1A")
            ]),
            createVNode("li", null, "\u62A5\u540D\u622A\u6B62\u4E3A\u884C\u64CD\u4F5C\u6309\u94AE\uFF0C\u663E\u793A\u6761\u4EF6\uFF1A")
          ]),
          createVNode("p", null, [
            createTextVNode("1. "),
            createVNode("code", null, "status === 'valid'"),
            createTextVNode("\uFF08\u7279\u8BAD\u8425\u5DF2\u751F\u6548\uFF09")
          ]),
          createVNode("p", null, [
            createTextVNode("2. "),
            createVNode("code", null, "new Date(planStartTime) > new Date()"),
            createTextVNode("\uFF08\u8BA1\u5212\u5F00\u59CB\u65F6\u95F4\u665A\u4E8E\u5F53\u524D\u65F6\u95F4\uFF09")
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u70B9\u51FB\u540E\u5F39\u7A97\u9009\u62E9\u62A5\u540D\u7ED3\u675F\u65F6\u95F4\u3002"),
            createVNode("li", null, [
              createTextVNode("\u63D0\u4EA4\u8C03\u7528 "),
              createVNode("code", null, "signEnd"),
              createTextVNode(" \u63A5\u53E3\uFF0C\u53C2\u6570 "),
              createVNode("code", null, "campCode"),
              createTextVNode(" \u548C "),
              createVNode("code", null, "campsignEndTimeCode"),
              createTextVNode("\uFF08\u683C\u5F0F "),
              createVNode("code", null, "YYYY-MM-DD"),
              createTextVNode("\uFF09\u3002")
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, {
    num: "3",
    title: "\u91CD\u70B9\u903B\u8F913\uFF1A\u751F\u6548/\u5931\u6548\u903B\u8F91"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u610F\u4E49</strong>\uFF1A\u6279\u91CF\u63A7\u5236\u7279\u8BAD\u8425\u72B6\u6001\uFF0C\u751F\u6548\u540E\u7ECF\u9500\u5546\u53EF\u62A5\u540D\u70B9\u5C06\u3002</li><li${_scopeId}><strong${_scopeId}>\u5177\u4F53\u903B\u8F91\u63CF\u8FF0</strong>\uFF1A</li><li${_scopeId}>\u751F\u6548/\u5931\u6548\u64CD\u4F5C\u652F\u6301\u6279\u91CF\uFF08\u591A\u9009\uFF09\u3002</li><li${_scopeId}>\u8C03\u7528 <code${_scopeId}>batchValidData</code> \u63A5\u53E3\uFF0C\u53C2\u6570\uFF1A<code${_scopeId}>specialTrainCampId</code> \u6570\u7EC4\u3001<code${_scopeId}>status</code>\uFF08valid/invalid\uFF09\u3002</li><li${_scopeId}>\u63A5\u53E3\u8FD4\u56DE <code${_scopeId}>res.data</code> \u975E\u7A7A\u65F6\u8868\u793A\u9519\u8BEF\u4FE1\u606F\uFF0C<code${_scopeId}>res.message</code> \u4E3A\u6210\u529F\u4FE1\u606F\u3002</li><li${_scopeId}>\u6210\u529F\u540E\u5237\u65B0\u5F53\u524D\u9875\u5217\u8868\u3002</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u610F\u4E49"),
              createTextVNode("\uFF1A\u6279\u91CF\u63A7\u5236\u7279\u8BAD\u8425\u72B6\u6001\uFF0C\u751F\u6548\u540E\u7ECF\u9500\u5546\u53EF\u62A5\u540D\u70B9\u5C06\u3002")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u5177\u4F53\u903B\u8F91\u63CF\u8FF0"),
              createTextVNode("\uFF1A")
            ]),
            createVNode("li", null, "\u751F\u6548/\u5931\u6548\u64CD\u4F5C\u652F\u6301\u6279\u91CF\uFF08\u591A\u9009\uFF09\u3002"),
            createVNode("li", null, [
              createTextVNode("\u8C03\u7528 "),
              createVNode("code", null, "batchValidData"),
              createTextVNode(" \u63A5\u53E3\uFF0C\u53C2\u6570\uFF1A"),
              createVNode("code", null, "specialTrainCampId"),
              createTextVNode(" \u6570\u7EC4\u3001"),
              createVNode("code", null, "status"),
              createTextVNode("\uFF08valid/invalid\uFF09\u3002")
            ]),
            createVNode("li", null, [
              createTextVNode("\u63A5\u53E3\u8FD4\u56DE "),
              createVNode("code", null, "res.data"),
              createTextVNode(" \u975E\u7A7A\u65F6\u8868\u793A\u9519\u8BEF\u4FE1\u606F\uFF0C"),
              createVNode("code", null, "res.message"),
              createTextVNode(" \u4E3A\u6210\u529F\u4FE1\u606F\u3002")
            ]),
            createVNode("li", null, "\u6210\u529F\u540E\u5237\u65B0\u5F53\u524D\u9875\u5217\u8868\u3002")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, {
    num: "4",
    title: "\u91CD\u70B9\u903B\u8F914\uFF1A\u7279\u8BAD\u8425\u65F6\u95F4\u5C55\u793A"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u610F\u4E49</strong>\uFF1A\u76F4\u89C2\u5C55\u793A\u7279\u8BAD\u8425\u8BA1\u5212\u65F6\u95F4\u8303\u56F4\uFF0C\u4FBF\u4E8E\u638C\u63E1\u57F9\u8BAD\u5468\u671F\u3002</li><li${_scopeId}><strong${_scopeId}>\u5177\u4F53\u903B\u8F91\u63CF\u8FF0</strong>\uFF1A</li><li${_scopeId}>\u5217\u8868&quot;\u7279\u8BAD\u8425\u65F6\u95F4&quot;\u5217\u901A\u8FC7 renderer \u6E32\u67D3\u3002</li><li${_scopeId}>\u5C55\u793A <code${_scopeId}>planStartTime</code> \u81F3 <code${_scopeId}>planEndTime</code> \u7684\u65F6\u95F4\u8303\u56F4\u3002</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u610F\u4E49"),
              createTextVNode("\uFF1A\u76F4\u89C2\u5C55\u793A\u7279\u8BAD\u8425\u8BA1\u5212\u65F6\u95F4\u8303\u56F4\uFF0C\u4FBF\u4E8E\u638C\u63E1\u57F9\u8BAD\u5468\u671F\u3002")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u5177\u4F53\u903B\u8F91\u63CF\u8FF0"),
              createTextVNode("\uFF1A")
            ]),
            createVNode("li", null, '\u5217\u8868"\u7279\u8BAD\u8425\u65F6\u95F4"\u5217\u901A\u8FC7 renderer \u6E32\u67D3\u3002'),
            createVNode("li", null, [
              createTextVNode("\u5C55\u793A "),
              createVNode("code", null, "planStartTime"),
              createTextVNode(" \u81F3 "),
              createVNode("code", null, "planEndTime"),
              createTextVNode(" \u7684\u65F6\u95F4\u8303\u56F4\u3002")
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, {
    num: "5",
    title: "\u91CD\u70B9\u903B\u8F915\uFF1A\u5220\u9664\u903B\u8F91"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u610F\u4E49</strong>\uFF1A\u6279\u91CF\u5220\u9664\u8349\u7A3F\u6570\u636E\uFF0C\u907F\u514D\u810F\u6570\u636E\u5806\u79EF\u3002</li><li${_scopeId}><strong${_scopeId}>\u5177\u4F53\u903B\u8F91\u63CF\u8FF0</strong>\uFF1A</li><li${_scopeId}>\u5220\u9664\u64CD\u4F5C\u652F\u6301\u6279\u91CF\uFF08\u591A\u9009\uFF09\u3002</li><li${_scopeId}>\u8C03\u7528 <code${_scopeId}>batchDelData</code> \u63A5\u53E3\uFF0C\u53C2\u6570\uFF1A<code${_scopeId}>specialTrainCampId</code> \u6570\u7EC4\u3002</li><li${_scopeId}>\u786E\u8BA4\u5F39\u7A97\u540E\u6267\u884C\u5220\u9664\u3002</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u610F\u4E49"),
              createTextVNode("\uFF1A\u6279\u91CF\u5220\u9664\u8349\u7A3F\u6570\u636E\uFF0C\u907F\u514D\u810F\u6570\u636E\u5806\u79EF\u3002")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u5177\u4F53\u903B\u8F91\u63CF\u8FF0"),
              createTextVNode("\uFF1A")
            ]),
            createVNode("li", null, "\u5220\u9664\u64CD\u4F5C\u652F\u6301\u6279\u91CF\uFF08\u591A\u9009\uFF09\u3002"),
            createVNode("li", null, [
              createTextVNode("\u8C03\u7528 "),
              createVNode("code", null, "batchDelData"),
              createTextVNode(" \u63A5\u53E3\uFF0C\u53C2\u6570\uFF1A"),
              createVNode("code", null, "specialTrainCampId"),
              createTextVNode(" \u6570\u7EC4\u3002")
            ]),
            createVNode("li", null, "\u786E\u8BA4\u5F39\u7A97\u540E\u6267\u884C\u5220\u9664\u3002")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div><div id="detail-logic" style="${ssrRenderStyle({ "display": "none" })}"><div class="tab-pad"><div class="kl-wrap">`);
  _push(ssrRenderComponent(_component_KbCard, { title: "\u524D\u7AEF\u8DEF\u7531" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u8DEF\u7531</th><th${_scopeId}>\u7528\u9014</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\`/general/specialTrainingCamp/camp/list\`</td><td${_scopeId}>\u7279\u8BAD\u8425\u7BA1\u7406\u5217\u8868\u9875</td></tr><tr${_scopeId}><td${_scopeId}>\`/general/specialTrainingCamp/camp/detail/:id/:type\`</td><td${_scopeId}>\u7279\u8BAD\u8425\u8BE6\u60C5\u9875\uFF08type=add/edit/view\uFF09</td></tr></tbody></table>`);
      } else {
        return [
          createVNode("table", { class: "kb-field-tbl" }, [
            createVNode("thead", null, [
              createVNode("tr", null, [
                createVNode("th", null, "\u8DEF\u7531"),
                createVNode("th", null, "\u7528\u9014")
              ])
            ]),
            createVNode("tbody", null, [
              createVNode("tr", null, [
                createVNode("td", null, "`/general/specialTrainingCamp/camp/list`"),
                createVNode("td", null, "\u7279\u8BAD\u8425\u7BA1\u7406\u5217\u8868\u9875")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "`/general/specialTrainingCamp/camp/detail/:id/:type`"),
                createVNode("td", null, "\u7279\u8BAD\u8425\u8BE6\u60C5\u9875\uFF08type=add/edit/view\uFF09")
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, { title: "API\u63A5\u53E3" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u63A5\u53E3\u8DEF\u5F84</th><th${_scopeId}>\u65B9\u6CD5</th><th${_scopeId}>\u8BF4\u660E</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\`mlt/trainCamp/page\`</td><td${_scopeId}>POST</td><td${_scopeId}>\u5206\u9875\u67E5\u8BE2\u7279\u8BAD\u8425\u5217\u8868</td></tr><tr${_scopeId}><td${_scopeId}>\`mlt/trainCamp/save\`</td><td${_scopeId}>POST</td><td${_scopeId}>\u4FDD\u5B58\u7279\u8BAD\u8425</td></tr><tr${_scopeId}><td${_scopeId}>\`mlt/trainCamp/saveAndValid\`</td><td${_scopeId}>POST</td><td${_scopeId}>\u4FDD\u5B58\u5E76\u751F\u6548</td></tr><tr${_scopeId}><td${_scopeId}>\`mlt/trainCamp/update\`</td><td${_scopeId}>POST</td><td${_scopeId}>\u66F4\u65B0\u7279\u8BAD\u8425</td></tr><tr${_scopeId}><td${_scopeId}>\`mlt/trainCamp/batchDelData\`</td><td${_scopeId}>POST</td><td${_scopeId}>\u6279\u91CF\u5220\u9664</td></tr><tr${_scopeId}><td${_scopeId}>\`mlt/trainCamp/batchValidData\`</td><td${_scopeId}>POST</td><td${_scopeId}>\u6279\u91CF\u751F\u6548/\u5931\u6548</td></tr><tr${_scopeId}><td${_scopeId}>\`mlt/trainCamp/detail\`</td><td${_scopeId}>GET</td><td${_scopeId}>\u67E5\u8BE2\u7279\u8BAD\u8425\u8BE6\u60C5</td></tr><tr${_scopeId}><td${_scopeId}>\`mlt/trainCamp/signEnd\`</td><td${_scopeId}>GET</td><td${_scopeId}>\u62A5\u540D\u7ED3\u675F</td></tr><tr${_scopeId}><td${_scopeId}>\`mlt/trainCamp/mktterminalPage\`</td><td${_scopeId}>POST</td><td${_scopeId}>\u95E8\u5E97\u5206\u9875</td></tr><tr${_scopeId}><td${_scopeId}>\`mlt/trainCamp/mktterminalList\`</td><td${_scopeId}>POST</td><td${_scopeId}>\u95E8\u5E97\u5217\u8868</td></tr><tr${_scopeId}><td${_scopeId}>\`mlt/trainCamp/pageByLecturerCode\`</td><td${_scopeId}>POST</td><td${_scopeId}>\u6309\u8BB2\u5E08\u5206\u9875</td></tr><tr${_scopeId}><td${_scopeId}>\`mlt/maLecturerArchive/maLecturerPage\`</td><td${_scopeId}>POST</td><td${_scopeId}>\u8BB2\u5E08\u5217\u8868</td></tr></tbody></table>`);
      } else {
        return [
          createVNode("table", { class: "kb-field-tbl" }, [
            createVNode("thead", null, [
              createVNode("tr", null, [
                createVNode("th", null, "\u63A5\u53E3\u8DEF\u5F84"),
                createVNode("th", null, "\u65B9\u6CD5"),
                createVNode("th", null, "\u8BF4\u660E")
              ])
            ]),
            createVNode("tbody", null, [
              createVNode("tr", null, [
                createVNode("td", null, "`mlt/trainCamp/page`"),
                createVNode("td", null, "POST"),
                createVNode("td", null, "\u5206\u9875\u67E5\u8BE2\u7279\u8BAD\u8425\u5217\u8868")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "`mlt/trainCamp/save`"),
                createVNode("td", null, "POST"),
                createVNode("td", null, "\u4FDD\u5B58\u7279\u8BAD\u8425")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "`mlt/trainCamp/saveAndValid`"),
                createVNode("td", null, "POST"),
                createVNode("td", null, "\u4FDD\u5B58\u5E76\u751F\u6548")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "`mlt/trainCamp/update`"),
                createVNode("td", null, "POST"),
                createVNode("td", null, "\u66F4\u65B0\u7279\u8BAD\u8425")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "`mlt/trainCamp/batchDelData`"),
                createVNode("td", null, "POST"),
                createVNode("td", null, "\u6279\u91CF\u5220\u9664")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "`mlt/trainCamp/batchValidData`"),
                createVNode("td", null, "POST"),
                createVNode("td", null, "\u6279\u91CF\u751F\u6548/\u5931\u6548")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "`mlt/trainCamp/detail`"),
                createVNode("td", null, "GET"),
                createVNode("td", null, "\u67E5\u8BE2\u7279\u8BAD\u8425\u8BE6\u60C5")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "`mlt/trainCamp/signEnd`"),
                createVNode("td", null, "GET"),
                createVNode("td", null, "\u62A5\u540D\u7ED3\u675F")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "`mlt/trainCamp/mktterminalPage`"),
                createVNode("td", null, "POST"),
                createVNode("td", null, "\u95E8\u5E97\u5206\u9875")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "`mlt/trainCamp/mktterminalList`"),
                createVNode("td", null, "POST"),
                createVNode("td", null, "\u95E8\u5E97\u5217\u8868")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "`mlt/trainCamp/pageByLecturerCode`"),
                createVNode("td", null, "POST"),
                createVNode("td", null, "\u6309\u8BB2\u5E08\u5206\u9875")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "`mlt/maLecturerArchive/maLecturerPage`"),
                createVNode("td", null, "POST"),
                createVNode("td", null, "\u8BB2\u5E08\u5217\u8868")
              ])
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
        _push2(`<h4${_scopeId}>\u67E5\u8BE2\u680F\u5B57\u6BB5</h4><table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5B57\u6BB5\u540D</th><th${_scopeId}>\u6570\u636E\u5E93\u5217\u540D</th><th${_scopeId}>\u7EC4\u4EF6</th><th${_scopeId}>\u4E1A\u52A1\u91CA\u4E49</th><th${_scopeId}>\u663E\u9690\u6761\u4EF6</th><th${_scopeId}>\u53D6\u503C/\u8D4B\u503C\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u7279\u8BAD\u8425\u7F16\u53F7</td><td${_scopeId}>CAMP_CODE</td><td${_scopeId}>TextField</td><td${_scopeId}>\u7279\u8BAD\u8425\u7F16\u53F7\u6A21\u7CCA\u67E5\u8BE2</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u624B\u52A8\u8F93\u5165\uFF0Cname=campCode</td></tr><tr${_scopeId}><td${_scopeId}>\u7279\u8BAD\u8425\u540D\u79F0</td><td${_scopeId}>CAMP_NAME</td><td${_scopeId}>TextField</td><td${_scopeId}>\u7279\u8BAD\u8425\u540D\u79F0\u6A21\u7CCA\u67E5\u8BE2</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u624B\u52A8\u8F93\u5165\uFF0Cname=campName</td></tr><tr${_scopeId}><td${_scopeId}>\u7279\u8BAD\u8425\u7C7B\u578B</td><td${_scopeId}>CAMP_TYPE</td><td${_scopeId}>Select</td><td${_scopeId}>\u7279\u8BAD\u8425\u7C7B\u578B\u7B5B\u9009</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u503C\u96C6MBO.CAMP_TYPE</td></tr><tr${_scopeId}><td${_scopeId}>\u7279\u8BAD\u8425\u72B6\u6001</td><td${_scopeId}>STATUS</td><td${_scopeId}>Select</td><td${_scopeId}>\u7279\u8BAD\u8425\u72B6\u6001\u7B5B\u9009</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u503C\u96C6MBO.CAMP_STATUS</td></tr></tbody></table><h4${_scopeId}>\u5217\u8868\u5C55\u793A\u5B57\u6BB5</h4><table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5B57\u6BB5\u540D</th><th${_scopeId}>\u6570\u636E\u5E93\u5217\u540D</th><th${_scopeId}>\u7EC4\u4EF6</th><th${_scopeId}>\u4E1A\u52A1\u91CA\u4E49</th><th${_scopeId}>\u663E\u9690\u6761\u4EF6</th><th${_scopeId}>\u53D6\u503C/\u8D4B\u503C\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u7279\u8BAD\u8425\u7F16\u53F7</td><td${_scopeId}>CAMP_CODE</td><td${_scopeId}>TextField</td><td${_scopeId}>\u7279\u8BAD\u8425\u552F\u4E00\u7F16\u7801</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u5DE6\u9501\u5B9A\u5217\uFF0Cwidth=150</td></tr><tr${_scopeId}><td${_scopeId}>\u7279\u8BAD\u8425\u540D\u79F0</td><td${_scopeId}>CAMP_NAME</td><td${_scopeId}>Button(link)</td><td${_scopeId}>\u7279\u8BAD\u8425\u540D\u79F0\uFF0C\u53EF\u70B9\u51FB\u8DF3\u8F6C\u8BE6\u60C5</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u5DE6\u9501\u5B9A\u5217\uFF0C\u70B9\u51FB\u8C03\u7528handleToDetail\u8DF3\u8F6C\u8BE6\u60C5\u9875</td></tr><tr${_scopeId}><td${_scopeId}>\u7C7B\u578B</td><td${_scopeId}>CAMP_TYPE</td><td${_scopeId}>TextField</td><td${_scopeId}>\u7279\u8BAD\u8425\u7C7B\u578B</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u503C\u96C6MBO.CAMP_TYPE\u7FFB\u8BD1\u663E\u793A</td></tr><tr${_scopeId}><td${_scopeId}>\u6240\u5C5E\u90E8\u95E8</td><td${_scopeId}>ORG_NAME</td><td${_scopeId}>TextField</td><td${_scopeId}>\u6240\u5C5E\u90E8\u95E8\u540D\u79F0</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u540E\u7AEF\u8FD4\u56DE</td></tr><tr${_scopeId}><td${_scopeId}>\u8D23\u4EFB\u4E8B\u4E1A\u90E8</td><td${_scopeId}>DIVISION_NAME</td><td${_scopeId}>TextField</td><td${_scopeId}>\u8D23\u4EFB\u4E8B\u4E1A\u90E8\u540D\u79F0</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u540E\u7AEF\u8FD4\u56DE</td></tr><tr${_scopeId}><td${_scopeId}>\u7279\u8BAD\u8425\u72B6\u6001</td><td${_scopeId}>STATUS</td><td${_scopeId}>TextField</td><td${_scopeId}>\u7279\u8BAD\u8425\u72B6\u6001</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u503C\u96C6MBO.CAMP_STATUS\u7FFB\u8BD1\u663E\u793A</td></tr><tr${_scopeId}><td${_scopeId}>\u7279\u8BAD\u8425\u65F6\u95F4</td><td${_scopeId}>PLAN_START_TIME/PLAN_END_TIME</td><td${_scopeId}>TextField(renderer)</td><td${_scopeId}>\u8BA1\u5212\u5F00\u59CB\u81F3\u7ED3\u675F\u65F6\u95F4\u8303\u56F4</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>renderer\u6E32\u67D3\uFF1AplanStartTime \u81F3 planEndTime</td></tr><tr${_scopeId}><td${_scopeId}>\u6700\u540E\u4FEE\u6539\u4EBA</td><td${_scopeId}>UPDATE_NAME</td><td${_scopeId}>TextField</td><td${_scopeId}>\u6700\u540E\u4FEE\u6539\u4EBA\u59D3\u540D</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u540E\u7AEF\u8FD4\u56DE</td></tr><tr${_scopeId}><td${_scopeId}>\u5DF2\u62A5\u540D</td><td${_scopeId}>REGISTERED</td><td${_scopeId}>TextField</td><td${_scopeId}>\u5DF2\u62A5\u540D\u4EBA\u6570</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u540E\u7AEF\u8FD4\u56DE</td></tr><tr${_scopeId}><td${_scopeId}>\u5DF2\u786E\u8BA4</td><td${_scopeId}>CONFIRMED</td><td${_scopeId}>TextField</td><td${_scopeId}>\u5DF2\u786E\u8BA4\u4EBA\u6570</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u540E\u7AEF\u8FD4\u56DE</td></tr><tr${_scopeId}><td${_scopeId}>\u64CD\u4F5C</td><td${_scopeId}>-</td><td${_scopeId}>Button(link)</td><td${_scopeId}>\u884C\u64CD\u4F5C\u6309\u94AE</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u53F3\u9501\u5B9A\u5217\uFF0Crenderer\u6E32\u67D3\u62A5\u540D\u622A\u6B62\u6309\u94AE</td></tr></tbody></table><h4${_scopeId}>\u8BE6\u60C5\u9875\u5B57\u6BB5\uFF08\u57FA\u7840\u4FE1\u606F\u8868\u5355\uFF09</h4><blockquote${_scopeId}>\u8BE6\u60C5\u9875\u8DEF\u7531 <code${_scopeId}>/general/specialTrainingCamp/camp/detail/:id/:type</code>\uFF0Ctype=add/edit/view\u3002\u67E5\u770B(view)\u65F6\u8868\u5355disabled\u3002</blockquote><table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5B57\u6BB5\u540D</th><th${_scopeId}>\u6570\u636E\u5E93\u5217\u540D</th><th${_scopeId}>\u7EC4\u4EF6</th><th${_scopeId}>\u4E1A\u52A1\u91CA\u4E49</th><th${_scopeId}>\u663E\u9690\u6761\u4EF6</th><th${_scopeId}>\u53D6\u503C/\u8D4B\u503C\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u7279\u8BAD\u8425\u540D\u79F0</td><td${_scopeId}>CAMP_NAME</td><td${_scopeId}>TextField</td><td${_scopeId}>\u7279\u8BAD\u8425\u540D\u79F0</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u624B\u52A8\u8F93\u5165\uFF0C\u5FC5\u586B</td></tr><tr${_scopeId}><td${_scopeId}>\u7279\u8BAD\u8425\u7C7B\u578B</td><td${_scopeId}>CAMP_TYPE</td><td${_scopeId}>Select</td><td${_scopeId}>\u7279\u8BAD\u8425\u7C7B\u578B</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u503C\u96C6MBO.CAMP_TYPE\uFF0C\u5FC5\u586B\uFF1B\u9009\u62E9\u540E\u8054\u52A8\u5237\u65B0\u6536\u8D39\u6807\u51C6</td></tr><tr${_scopeId}><td${_scopeId}>\u7279\u8BAD\u8425\u5730\u5740</td><td${_scopeId}>ADDRESS</td><td${_scopeId}>TextField</td><td${_scopeId}>\u7279\u8BAD\u8425\u4E3E\u529E\u5730\u5740</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u624B\u52A8\u8F93\u5165\uFF0C\u5FC5\u586B</td></tr><tr${_scopeId}><td${_scopeId}>\u7279\u8BAD\u8425\u4ECB\u7ECD</td><td${_scopeId}>INTRODUCTION</td><td${_scopeId}>TextField</td><td${_scopeId}>\u7279\u8BAD\u8425\u4ECB\u7ECD\u8BF4\u660E</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u624B\u52A8\u8F93\u5165\uFF0C\u5FC5\u586B</td></tr><tr${_scopeId}><td${_scopeId}>\u6240\u5C5E\u90E8\u95E8</td><td${_scopeId}>ORG_CODE/ORG_NAME</td><td${_scopeId}>TreeSelect</td><td${_scopeId}>\u6240\u5C5E\u90E8\u95E8</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>options=orgDS\uFF0CtextField=unitName\uFF0CvalueField=unitCode\uFF0C\u5FC5\u586B</td></tr><tr${_scopeId}><td${_scopeId}>\u8D1F\u8D23\u4E8B\u4E1A\u90E8</td><td${_scopeId}>DIVISION_CODE/DIVISION_NAME</td><td${_scopeId}>Select</td><td${_scopeId}>\u8D23\u4EFB\u4E8B\u4E1A\u90E8</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>options=divisionDS\uFF0CtextField=divisionName\uFF0CvalueField=divisionCode\uFF0C\u5FC5\u586B\uFF1B\u9009\u62E9\u540E\u8054\u52A8\u5237\u65B0\u6536\u8D39\u6807\u51C6</td></tr><tr${_scopeId}><td${_scopeId}>\u6240\u5C5E\u8FD0\u8425\u4E2D\u5FC3</td><td${_scopeId}>OP_CENTER</td><td${_scopeId}>Select</td><td${_scopeId}>\u6240\u5C5E\u8FD0\u8425\u4E2D\u5FC3</td><td${_scopeId}>campType=region\u65F6\u663E\u793A</td><td${_scopeId}>\u503C\u96C6MBO.OP_CENTER\uFF1BcampType=region\u65F6\u5FC5\u586B</td></tr><tr${_scopeId}><td${_scopeId}>\u7279\u8BAD\u8425\u65F6\u95F4</td><td${_scopeId}>PLAN_START_TIME/PLAN_END_TIME</td><td${_scopeId}>DatePicker(range)</td><td${_scopeId}>\u7279\u8BAD\u8425\u8D77\u6B62\u65F6\u95F4</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>range=true\uFF0C\u5FC5\u586B\uFF1B\u63D0\u4EA4\u65F6\u62C6\u5206\u4E3AplanStartTime/planEndTime(YYYY-MM-DD)</td></tr><tr${_scopeId}><td${_scopeId}>\u6536\u8D39\u6807\u51C6</td><td${_scopeId}>CAMP_PRICE/PRICE_UNIT/PROD_CODE</td><td${_scopeId}>Select</td><td${_scopeId}>\u6536\u8D39\u6807\u51C6</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>options=priceDS\uFF0C\u5FC5\u586B\uFF1B\u4F9D\u8D56\u4E8B\u4E1A\u90E8divisionCode+\u7279\u8BAD\u8425\u7C7B\u578BcampType\u8054\u52A8\u67E5\u8BE2</td></tr></tbody></table><h4${_scopeId}>\u8BE6\u60C5\u9875 - \u7279\u8BAD\u8425\u8BB2\u5E08\u8868\u683C</h4><blockquote${_scopeId}>\u8BE6\u60C5\u9875&quot;\u7279\u8BAD\u8425\u8BB2\u5E08&quot;\u533A\u57DF\uFF0C\u975E\u67E5\u770B\u6A21\u5F0F\u663E\u793A&quot;\u6DFB\u52A0\u8BB2\u5E08&quot;\u6309\u94AE\uFF0C\u70B9\u51FB\u5F39\u51FA&quot;\u9009\u62E9\u8BB2\u5E08&quot;\u5F39\u7A97\u3002</blockquote><table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5B57\u6BB5\u540D</th><th${_scopeId}>\u6570\u636E\u5E93\u5217\u540D</th><th${_scopeId}>\u7EC4\u4EF6</th><th${_scopeId}>\u4E1A\u52A1\u91CA\u4E49</th><th${_scopeId}>\u663E\u9690\u6761\u4EF6</th><th${_scopeId}>\u53D6\u503C/\u8D4B\u503C\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u5DE5\u53F7</td><td${_scopeId}>LECTURER_CODE</td><td${_scopeId}>TextField</td><td${_scopeId}>\u8BB2\u5E08\u5DE5\u53F7</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u5DE6\u9501\u5B9A\u5217</td></tr><tr${_scopeId}><td${_scopeId}>\u59D3\u540D</td><td${_scopeId}>LECTURER_NAME</td><td${_scopeId}>TextField</td><td${_scopeId}>\u8BB2\u5E08\u59D3\u540D</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u5DE6\u9501\u5B9A\u5217</td></tr><tr${_scopeId}><td${_scopeId}>\u90E8\u95E8</td><td${_scopeId}>ORG_NAME</td><td${_scopeId}>TextField</td><td${_scopeId}>\u8BB2\u5E08\u6240\u5C5E\u90E8\u95E8</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u540E\u7AEF\u8FD4\u56DE</td></tr><tr${_scopeId}><td${_scopeId}>\u5F00\u59CB\u65E5\u671F</td><td${_scopeId}>START_DATE</td><td${_scopeId}>DatePicker</td><td${_scopeId}>\u8BB2\u5E08\u6388\u8BFE\u5F00\u59CB\u65E5\u671F</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u975E\u67E5\u770B\u6A21\u5F0F\u53EF\u7F16\u8F91\uFF1B\u6821\u9A8C\u4E0D\u5C0F\u4E8E\u7279\u8BAD\u8425\u5F00\u59CB\u65E5\u671F</td></tr><tr${_scopeId}><td${_scopeId}>\u7ED3\u675F\u65E5\u671F</td><td${_scopeId}>END_DATE</td><td${_scopeId}>DatePicker</td><td${_scopeId}>\u8BB2\u5E08\u6388\u8BFE\u7ED3\u675F\u65E5\u671F</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u975E\u67E5\u770B\u6A21\u5F0F\u53EF\u7F16\u8F91\uFF1B\u6821\u9A8C\u4E0D\u5927\u4E8E\u7279\u8BAD\u8425\u7ED3\u675F\u65E5\u671F</td></tr><tr${_scopeId}><td${_scopeId}>\u8BB2\u5E08\u4ECB\u7ECD</td><td${_scopeId}>LECTURER_INTRODUCE</td><td${_scopeId}>TextField</td><td${_scopeId}>\u8BB2\u5E08\u4ECB\u7ECD</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u975E\u67E5\u770B\u6A21\u5F0F\u53EF\u7F16\u8F91\uFF0C\u5FC5\u586B</td></tr><tr${_scopeId}><td${_scopeId}>\u64CD\u4F5C</td><td${_scopeId}>-</td><td${_scopeId}>Button(link)</td><td${_scopeId}>\u5220\u9664\u8BB2\u5E08</td><td${_scopeId}>\u975E\u67E5\u770B\u6A21\u5F0F\u663E\u793A</td><td${_scopeId}>\u53F3\u9501\u5B9A\u5217\uFF0C\u70B9\u51FB\u5220\u9664\u8BE5\u884C</td></tr></tbody></table><h4${_scopeId}>\u8BE6\u60C5\u9875 - \u9644\u4EF6</h4><blockquote${_scopeId}>\u4F7F\u7528 LecturerCase \u7EC4\u4EF6\uFF0C\u652F\u6301\u6587\u4EF6\u4E0A\u4F20\u3002\u5B57\u6BB5\uFF1A\u9644\u4EF6\u540D\u79F0(FILE_NAME)\u3001\u9644\u4EF6\u5730\u5740(FILE_URL)\u3002</blockquote><h4${_scopeId}>\u9009\u62E9\u5F39\u7A97</h4><h5${_scopeId}>\u5F39\u7A971\uFF1A\u62A5\u540D\u622A\u6B62\u5F39\u7A97</h5><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1</strong>\uFF1A\u5217\u8868\u884C\u64CD\u4F5C&quot;\u62A5\u540D\u622A\u6B62&quot;\u6309\u94AE\u3002</li><li${_scopeId}><strong${_scopeId}>\u5185\u5BB9</strong>\uFF1ADatePicker \u9009\u62E9\u62A5\u540D\u7ED3\u675F\u65F6\u95F4\u3002</li><li${_scopeId}><strong${_scopeId}>\u63D0\u4EA4\u6821\u9A8C</strong>\uFF1A\u62A5\u540D\u7ED3\u675F\u65F6\u95F4\u5FC5\u586B\uFF0C\u5426\u5219\u63D0\u793A&quot;\u8BF7\u9009\u62E9\u62A5\u540D\u7ED3\u675F\u65F6\u95F4&quot;\u3002</li><li${_scopeId}><strong${_scopeId}>\u63D0\u4EA4\u63A5\u53E3</strong>\uFF1A<code${_scopeId}>GET mlt/trainCamp/signEnd</code>\uFF0C\u53C2\u6570 <code${_scopeId}>campCode</code>\u3001<code${_scopeId}>campsignEndTimeCode</code>\uFF08\u683C\u5F0F <code${_scopeId}>YYYY-MM-DD</code>\uFF09\u3002</li></ul><h5${_scopeId}>\u5F39\u7A972\uFF1A\u9009\u62E9\u8BB2\u5E08\u5F39\u7A97\uFF08\u8BE6\u60C5\u9875\uFF09</h5><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1</strong>\uFF1A\u8BE6\u60C5\u9875&quot;\u7279\u8BAD\u8425\u8BB2\u5E08&quot;\u533A\u57DF&quot;\u6DFB\u52A0\u8BB2\u5E08&quot;\u6309\u94AE\u3002</li><li${_scopeId}><strong${_scopeId}>\u524D\u7F6E\u6821\u9A8C</strong>\uFF1A\u9700\u5148\u9009\u62E9\u8D1F\u8D23\u4E8B\u4E1A\u90E8\uFF0C\u5426\u5219\u63D0\u793A&quot;\u8BF7\u5148\u9009\u62E9\u8D1F\u8D23\u4E8B\u4E1A\u90E8&quot;\u3002</li><li${_scopeId}><strong${_scopeId}>\u5F39\u7A97\u67E5\u8BE2\u6761\u4EF6</strong>\uFF1A\u8BB2\u5E08\u59D3\u540D(lecturerName)\u3002</li><li${_scopeId}><strong${_scopeId}>\u5F39\u7A97\u5217\u8868\u5B57\u6BB5</strong>\uFF1A</li></ul><table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5B57\u6BB5\u540D</th><th${_scopeId}>\u6570\u636E\u5E93\u5217\u540D</th><th${_scopeId}>\u7EC4\u4EF6</th><th${_scopeId}>\u4E1A\u52A1\u91CA\u4E49</th><th${_scopeId}>\u663E\u9690\u6761\u4EF6</th><th${_scopeId}>\u53D6\u503C/\u8D4B\u503C\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u8BB2\u5E08\u59D3\u540D</td><td${_scopeId}>LECTURER_NAME</td><td${_scopeId}>TextField</td><td${_scopeId}>\u8BB2\u5E08\u59D3\u540D</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u5DE6\u9501\u5B9A\u5217</td></tr><tr${_scopeId}><td${_scopeId}>\u7EA7\u522B</td><td${_scopeId}>LECTURER_LEVEL</td><td${_scopeId}>TextField</td><td${_scopeId}>\u8BB2\u5E08\u7EA7\u522B</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u503C\u96C6MBO.TRAIN_LECTURER_LEVEL</td></tr><tr${_scopeId}><td${_scopeId}>\u62A5\u4EF7</td><td${_scopeId}>PRICE</td><td${_scopeId}>TextField</td><td${_scopeId}>\u8BB2\u5E08\u62A5\u4EF7</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u540E\u7AEF\u8FD4\u56DE</td></tr><tr${_scopeId}><td${_scopeId}>\u8BB2\u5E08\u7C7B\u578B</td><td${_scopeId}>LECTURER_TYPE</td><td${_scopeId}>TextField</td><td${_scopeId}>\u8BB2\u5E08\u7C7B\u578B</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u503C\u96C6MBO.LECTURER_TYPE</td></tr><tr${_scopeId}><td${_scopeId}>\u8D1F\u8D23\u533A\u57DF</td><td${_scopeId}>COVER_AREA</td><td${_scopeId}>TextField</td><td${_scopeId}>\u8BB2\u5E08\u8D1F\u8D23\u533A\u57DF</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u540E\u7AEF\u8FD4\u56DE</td></tr><tr${_scopeId}><td${_scopeId}>\u8D23\u4EFB\u4E8B\u4E1A\u90E8</td><td${_scopeId}>RESPONSIBLE_DEPARTMENT_NAME</td><td${_scopeId}>TextField</td><td${_scopeId}>\u8D23\u4EFB\u4E8B\u4E1A\u90E8</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u540E\u7AEF\u8FD4\u56DE</td></tr><tr${_scopeId}><td${_scopeId}>\u6807\u7B7E</td><td${_scopeId}>LECTURER_LABEL</td><td${_scopeId}>TextField</td><td${_scopeId}>\u8BB2\u5E08\u6807\u7B7E</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u540E\u7AEF\u8FD4\u56DE</td></tr><tr${_scopeId}><td${_scopeId}>\u64CD\u4F5C</td><td${_scopeId}>-</td><td${_scopeId}>Button(link)</td><td${_scopeId}>\u67E5\u770B\u65E5\u7A0B</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u53F3\u9501\u5B9A\u5217\uFF0C\u70B9\u51FB\u5F39\u51FA&quot;\u67E5\u770B\u65E5\u7A0B&quot;\u5F39\u7A97(LecturerCalendar)</td></tr></tbody></table><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u786E\u8BA4\u903B\u8F91</strong>\uFF1A\u652F\u6301\u591A\u9009\uFF0C\u786E\u8BA4\u540E\u8FC7\u6EE4\u5DF2\u5B58\u5728\u8BB2\u5E08\uFF08\u6309lecturerArchivesId\u53BB\u91CD\uFF09\uFF0C\u8FFD\u52A0\u5230\u8BB2\u5E08\u5217\u8868\u3002</li><li${_scopeId}><strong${_scopeId}>\u67E5\u8BE2\u63A5\u53E3</strong>\uFF1A<code${_scopeId}>POST mlt/maLecturerArchive/maLecturerPage</code>\uFF0C\u53C2\u6570\u9644\u52A0 <code${_scopeId}>pageType=train</code>\u3001<code${_scopeId}>responsibleDepartmentCode</code>\u3002</li></ul><h4${_scopeId}>\u5BFC\u5165</h4><p${_scopeId}>\u4E0D\u652F\u6301\u5BFC\u5165\u529F\u80FD\u3002</p><h4${_scopeId}>\u5176\u4ED6\u6309\u94AE</h4><table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5E8F\u53F7</th><th${_scopeId}>\u6309\u94AE\u540D\u79F0</th><th${_scopeId}>\u6240\u5728\u4F4D\u7F6E</th><th${_scopeId}>\u6743\u9650\u7F16\u7801</th><th${_scopeId}>\u663E\u9690\u6761\u4EF6</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>1</td><td${_scopeId}>\u65B0\u5EFA</td><td${_scopeId}>\u5DE5\u5177\u680F</td><td${_scopeId}>\`hzero.general_manage.special_training_camp.camp_list.ps.save\`</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td></tr><tr${_scopeId}><td${_scopeId}>2</td><td${_scopeId}>\u7F16\u8F91</td><td${_scopeId}>\u5DE5\u5177\u680F</td><td${_scopeId}>\`hzero.general_manage.special_training_camp.camp_list.ps.edit\`</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td></tr><tr${_scopeId}><td${_scopeId}>3</td><td${_scopeId}>\u5220\u9664</td><td${_scopeId}>\u5DE5\u5177\u680F</td><td${_scopeId}>\`hzero.general_manage.special_training_camp.camp_list.ps.delete\`</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td></tr><tr${_scopeId}><td${_scopeId}>4</td><td${_scopeId}>\u751F\u6548</td><td${_scopeId}>\u5DE5\u5177\u680F</td><td${_scopeId}>\`hzero.general_manage.special_training_camp.camp_list.ps.valid\`</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td></tr><tr${_scopeId}><td${_scopeId}>5</td><td${_scopeId}>\u5931\u6548</td><td${_scopeId}>\u5DE5\u5177\u680F</td><td${_scopeId}>\`hzero.general_manage.special_training_camp.camp_list.ps.invalid\`</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td></tr><tr${_scopeId}><td${_scopeId}>6</td><td${_scopeId}>\u62A5\u540D\u622A\u6B62</td><td${_scopeId}>\u884C\u64CD\u4F5C</td><td${_scopeId}>\u65E0\uFF08renderer\u6E32\u67D3\uFF09</td><td${_scopeId}>status=valid\u4E14planStartTime&gt;now</td></tr><tr${_scopeId}><td${_scopeId}>7</td><td${_scopeId}>\u4FDD\u5B58</td><td${_scopeId}>\u8BE6\u60C5\u9875\u5DE5\u5177\u680F</td><td${_scopeId}>\`hzero.general_manage.special_training_camp.camp_list.ps.save\`</td><td${_scopeId}>\u975E\u67E5\u770B\u6A21\u5F0F\u663E\u793A</td></tr><tr${_scopeId}><td${_scopeId}>8</td><td${_scopeId}>\u4FDD\u5B58\u5E76\u751F\u6548</td><td${_scopeId}>\u8BE6\u60C5\u9875\u5DE5\u5177\u680F</td><td${_scopeId}>\`hzero.general_manage.special_training_camp.camp_list.ps.save\`</td><td${_scopeId}>\u975E\u67E5\u770B\u6A21\u5F0F\u663E\u793A</td></tr><tr${_scopeId}><td${_scopeId}>9</td><td${_scopeId}>\u6DFB\u52A0\u8BB2\u5E08</td><td${_scopeId}>\u8BE6\u60C5\u9875\u8BB2\u5E08\u533A</td><td${_scopeId}>\u65E0</td><td${_scopeId}>\u975E\u67E5\u770B\u6A21\u5F0F\u663E\u793A</td></tr></tbody></table><blockquote${_scopeId}>\u8BF4\u660E\uFF1A\u5217\u8868&quot;\u7279\u8BAD\u8425\u540D\u79F0&quot;\u5217\u4E3AButton(link)\uFF0C\u70B9\u51FB\u5373\u8DF3\u8F6C\u8BE6\u60C5\u9875(view)\uFF0C\u65E0\u5355\u72EC&quot;\u67E5\u770B\u8BE6\u60C5&quot;\u884C\u64CD\u4F5C\u6309\u94AE\u3002</blockquote><h5${_scopeId}>\u6309\u94AE1\uFF1A\u65B0\u5EFA\uFF08\u5DE5\u5177\u680F\uFF09</h5><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u903B\u8F91</strong>\uFF1AopenTab \u65B0\u6807\u7B7E\u9875\u8DF3\u8F6C\u65B0\u5EFA\u8BE6\u60C5\u9875 <code${_scopeId}>/detail/null/add</code>\u3002</li><li${_scopeId}><strong${_scopeId}>\u8C03\u7528\u63A5\u53E3</strong>\uFF1A\u65E0\u3002</li></ul><h5${_scopeId}>\u6309\u94AE2\uFF1A\u7F16\u8F91\uFF08\u5DE5\u5177\u680F\uFF09</h5><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u903B\u8F91</strong>\uFF1A\u6821\u9A8C\u9009\u4E2D\u884C\u6570\u4E3A1\uFF0C\u6821\u9A8C\u72B6\u6001\u4E3A <code${_scopeId}>draft</code>\uFF08\u5426\u5219\u63D0\u793A&quot;\u5F53\u524D\u72B6\u6001\u6570\u636E\u65E0\u6CD5\u7F16\u8F91\uFF01&quot;\uFF09\uFF0CopenTab \u8DF3\u8F6C\u7F16\u8F91\u8BE6\u60C5\u9875 <code${_scopeId}>/detail/{specialTrainCampId}/edit</code>\u3002</li><li${_scopeId}><strong${_scopeId}>\u8C03\u7528\u63A5\u53E3</strong>\uFF1A\u65E0\u3002</li></ul><h5${_scopeId}>\u6309\u94AE3\uFF1A\u5220\u9664\uFF08\u5DE5\u5177\u680F\uFF09</h5><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u903B\u8F91</strong>\uFF1A\u6821\u9A8C\u9009\u4E2D\u81F3\u5C111\u6761\uFF0CModal.confirm \u786E\u8BA4\u5F39\u7A97&quot;\u786E\u5B9A\u8981\u5220\u9664\u5F53\u524D\u6570\u636E\u5417\uFF1F&quot;\uFF0C\u8C03\u7528 <code${_scopeId}>batchDelData</code> \u63A5\u53E3\uFF0C\u53C2\u6570 specialTrainCampId \u6570\u7EC4\uFF0C\u6210\u529F\u540E\u5237\u65B0\u5217\u8868\u3002</li><li${_scopeId}><strong${_scopeId}>\u8C03\u7528\u63A5\u53E3</strong>\uFF1A<code${_scopeId}>POST mlt/trainCamp/batchDelData</code>\u3002</li></ul><h5${_scopeId}>\u6309\u94AE4\uFF1A\u751F\u6548\uFF08\u5DE5\u5177\u680F\uFF09</h5><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u903B\u8F91</strong>\uFF1A\u6821\u9A8C\u9009\u4E2D\u81F3\u5C111\u6761\uFF0CModal.confirm \u786E\u8BA4\u5F39\u7A97&quot;\u786E\u8BA4\u751F\u6548\u5417\uFF1F&quot;\uFF0C\u8C03\u7528 <code${_scopeId}>batchValidData</code> \u63A5\u53E3\uFF0C\u53C2\u6570 specialTrainCampId \u6570\u7EC4 + status=valid\u3002\u82E5 res.data \u975E\u7A7A\u5219\u63D0\u793A\u9519\u8BEF\uFF0C\u5426\u5219\u63D0\u793A\u6210\u529F\u5E76\u5237\u65B0\u3002</li><li${_scopeId}><strong${_scopeId}>\u8C03\u7528\u63A5\u53E3</strong>\uFF1A<code${_scopeId}>POST mlt/trainCamp/batchValidData</code>\u3002</li></ul><h5${_scopeId}>\u6309\u94AE5\uFF1A\u5931\u6548\uFF08\u5DE5\u5177\u680F\uFF09</h5><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u903B\u8F91</strong>\uFF1A\u6821\u9A8C\u9009\u4E2D\u81F3\u5C111\u6761\uFF0CModal.confirm \u786E\u8BA4\u5F39\u7A97&quot;\u786E\u8BA4\u5931\u6548\u5417\uFF1F&quot;\uFF0C\u8C03\u7528 <code${_scopeId}>batchValidData</code> \u63A5\u53E3\uFF0C\u53C2\u6570 specialTrainCampId \u6570\u7EC4 + status=invalid\u3002\u82E5 res.data \u975E\u7A7A\u5219\u63D0\u793A\u9519\u8BEF\uFF0C\u5426\u5219\u63D0\u793A\u6210\u529F\u5E76\u5237\u65B0\u3002</li><li${_scopeId}><strong${_scopeId}>\u8C03\u7528\u63A5\u53E3</strong>\uFF1A<code${_scopeId}>POST mlt/trainCamp/batchValidData</code>\u3002</li></ul><h5${_scopeId}>\u6309\u94AE6\uFF1A\u62A5\u540D\u622A\u6B62\uFF08\u884C\u64CD\u4F5C\uFF09</h5><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u903B\u8F91</strong>\uFF1A\u5F39\u7A97\u9009\u62E9\u62A5\u540D\u7ED3\u675F\u65F6\u95F4(DatePicker)\uFF0C\u6821\u9A8C\u5FC5\u586B\uFF0C\u8C03\u7528 <code${_scopeId}>signEnd</code> \u63A5\u53E3\uFF0C\u53C2\u6570 <code${_scopeId}>campCode</code> \u548C <code${_scopeId}>campsignEndTimeCode</code>\uFF08\u683C\u5F0F <code${_scopeId}>YYYY-MM-DD</code>\uFF09\uFF0C\u6210\u529F\u540E\u5237\u65B0\u5217\u8868\u3002</li><li${_scopeId}><strong${_scopeId}>\u8C03\u7528\u63A5\u53E3</strong>\uFF1A<code${_scopeId}>GET mlt/trainCamp/signEnd</code>\u3002</li></ul><h5${_scopeId}>\u6309\u94AE7\uFF1A\u4FDD\u5B58\uFF08\u8BE6\u60C5\u9875\u5DE5\u5177\u680F\uFF09</h5><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u903B\u8F91</strong>\uFF1A\u6821\u9A8C\u57FA\u7840\u4FE1\u606F\u8868\u5355\u5FC5\u586B\u9879\uFF0C\u6821\u9A8C\u8BB2\u5E08\u5217\u8868\uFF08\u975E\u7A7A\u3001\u5F00\u59CB/\u7ED3\u675F\u65E5\u671F\u3001\u8BB2\u5E08\u4ECB\u7ECD\uFF09\uFF0C\u7EC4\u88C5\u6570\u636E\u63D0\u4EA4\u3002\u6570\u636E\u5305\u542B planStartTime/planEndTime(\u7531date\u62C6\u5206)\u3001divisionCode/divisionName\u3001orgCode/orgName\u3001campPrice/priceUnit/prodCode(\u7531priceInfo\u62C6\u5206)\u3001lecturerDTOList\u3001fileDTOList\u3002</li><li${_scopeId}><strong${_scopeId}>\u8C03\u7528\u63A5\u53E3</strong>\uFF1A<code${_scopeId}>POST mlt/trainCamp/save</code>\u3002</li></ul><h5${_scopeId}>\u6309\u94AE8\uFF1A\u4FDD\u5B58\u5E76\u751F\u6548\uFF08\u8BE6\u60C5\u9875\u5DE5\u5177\u680F\uFF09</h5><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u903B\u8F91</strong>\uFF1A\u540C\u4FDD\u5B58\u903B\u8F91\uFF0C\u8C03\u7528 saveAndValid \u63A5\u53E3\uFF0C\u4FDD\u5B58\u5E76\u76F4\u63A5\u751F\u6548\u3002</li><li${_scopeId}><strong${_scopeId}>\u8C03\u7528\u63A5\u53E3</strong>\uFF1A<code${_scopeId}>POST mlt/trainCamp/saveAndValid</code>\u3002</li></ul><h5${_scopeId}>\u6309\u94AE9\uFF1A\u6DFB\u52A0\u8BB2\u5E08\uFF08\u8BE6\u60C5\u9875\u8BB2\u5E08\u533A\uFF09</h5><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u903B\u8F91</strong>\uFF1A\u6821\u9A8C\u5DF2\u9009\u62E9\u8D1F\u8D23\u4E8B\u4E1A\u90E8\uFF0C\u5F39\u51FA&quot;\u9009\u62E9\u8BB2\u5E08&quot;\u5F39\u7A97\uFF0C\u6309 divisionCode \u67E5\u8BE2\u8BB2\u5E08\u5217\u8868\uFF0C\u591A\u9009\u786E\u8BA4\u540E\u53BB\u91CD\u8FFD\u52A0\u5230\u8BB2\u5E08\u5217\u8868\u3002</li></ul>`);
      } else {
        return [
          createVNode("h4", null, "\u67E5\u8BE2\u680F\u5B57\u6BB5"),
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
                createVNode("td", null, "\u7279\u8BAD\u8425\u7F16\u53F7"),
                createVNode("td", null, "CAMP_CODE"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u7279\u8BAD\u8425\u7F16\u53F7\u6A21\u7CCA\u67E5\u8BE2"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u624B\u52A8\u8F93\u5165\uFF0Cname=campCode")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7279\u8BAD\u8425\u540D\u79F0"),
                createVNode("td", null, "CAMP_NAME"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u7279\u8BAD\u8425\u540D\u79F0\u6A21\u7CCA\u67E5\u8BE2"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u624B\u52A8\u8F93\u5165\uFF0Cname=campName")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7279\u8BAD\u8425\u7C7B\u578B"),
                createVNode("td", null, "CAMP_TYPE"),
                createVNode("td", null, "Select"),
                createVNode("td", null, "\u7279\u8BAD\u8425\u7C7B\u578B\u7B5B\u9009"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u503C\u96C6MBO.CAMP_TYPE")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7279\u8BAD\u8425\u72B6\u6001"),
                createVNode("td", null, "STATUS"),
                createVNode("td", null, "Select"),
                createVNode("td", null, "\u7279\u8BAD\u8425\u72B6\u6001\u7B5B\u9009"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u503C\u96C6MBO.CAMP_STATUS")
              ])
            ])
          ]),
          createVNode("h4", null, "\u5217\u8868\u5C55\u793A\u5B57\u6BB5"),
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
                createVNode("td", null, "\u7279\u8BAD\u8425\u7F16\u53F7"),
                createVNode("td", null, "CAMP_CODE"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u7279\u8BAD\u8425\u552F\u4E00\u7F16\u7801"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u5DE6\u9501\u5B9A\u5217\uFF0Cwidth=150")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7279\u8BAD\u8425\u540D\u79F0"),
                createVNode("td", null, "CAMP_NAME"),
                createVNode("td", null, "Button(link)"),
                createVNode("td", null, "\u7279\u8BAD\u8425\u540D\u79F0\uFF0C\u53EF\u70B9\u51FB\u8DF3\u8F6C\u8BE6\u60C5"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u5DE6\u9501\u5B9A\u5217\uFF0C\u70B9\u51FB\u8C03\u7528handleToDetail\u8DF3\u8F6C\u8BE6\u60C5\u9875")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7C7B\u578B"),
                createVNode("td", null, "CAMP_TYPE"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u7279\u8BAD\u8425\u7C7B\u578B"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u503C\u96C6MBO.CAMP_TYPE\u7FFB\u8BD1\u663E\u793A")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6240\u5C5E\u90E8\u95E8"),
                createVNode("td", null, "ORG_NAME"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u6240\u5C5E\u90E8\u95E8\u540D\u79F0"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u540E\u7AEF\u8FD4\u56DE")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u8D23\u4EFB\u4E8B\u4E1A\u90E8"),
                createVNode("td", null, "DIVISION_NAME"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u8D23\u4EFB\u4E8B\u4E1A\u90E8\u540D\u79F0"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u540E\u7AEF\u8FD4\u56DE")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7279\u8BAD\u8425\u72B6\u6001"),
                createVNode("td", null, "STATUS"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u7279\u8BAD\u8425\u72B6\u6001"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u503C\u96C6MBO.CAMP_STATUS\u7FFB\u8BD1\u663E\u793A")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7279\u8BAD\u8425\u65F6\u95F4"),
                createVNode("td", null, "PLAN_START_TIME/PLAN_END_TIME"),
                createVNode("td", null, "TextField(renderer)"),
                createVNode("td", null, "\u8BA1\u5212\u5F00\u59CB\u81F3\u7ED3\u675F\u65F6\u95F4\u8303\u56F4"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "renderer\u6E32\u67D3\uFF1AplanStartTime \u81F3 planEndTime")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6700\u540E\u4FEE\u6539\u4EBA"),
                createVNode("td", null, "UPDATE_NAME"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u6700\u540E\u4FEE\u6539\u4EBA\u59D3\u540D"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u540E\u7AEF\u8FD4\u56DE")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5DF2\u62A5\u540D"),
                createVNode("td", null, "REGISTERED"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u5DF2\u62A5\u540D\u4EBA\u6570"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u540E\u7AEF\u8FD4\u56DE")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5DF2\u786E\u8BA4"),
                createVNode("td", null, "CONFIRMED"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u5DF2\u786E\u8BA4\u4EBA\u6570"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u540E\u7AEF\u8FD4\u56DE")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u64CD\u4F5C"),
                createVNode("td", null, "-"),
                createVNode("td", null, "Button(link)"),
                createVNode("td", null, "\u884C\u64CD\u4F5C\u6309\u94AE"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u53F3\u9501\u5B9A\u5217\uFF0Crenderer\u6E32\u67D3\u62A5\u540D\u622A\u6B62\u6309\u94AE")
              ])
            ])
          ]),
          createVNode("h4", null, "\u8BE6\u60C5\u9875\u5B57\u6BB5\uFF08\u57FA\u7840\u4FE1\u606F\u8868\u5355\uFF09"),
          createVNode("blockquote", null, [
            createTextVNode("\u8BE6\u60C5\u9875\u8DEF\u7531 "),
            createVNode("code", null, "/general/specialTrainingCamp/camp/detail/:id/:type"),
            createTextVNode("\uFF0Ctype=add/edit/view\u3002\u67E5\u770B(view)\u65F6\u8868\u5355disabled\u3002")
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
                createVNode("td", null, "\u7279\u8BAD\u8425\u540D\u79F0"),
                createVNode("td", null, "CAMP_NAME"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u7279\u8BAD\u8425\u540D\u79F0"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u624B\u52A8\u8F93\u5165\uFF0C\u5FC5\u586B")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7279\u8BAD\u8425\u7C7B\u578B"),
                createVNode("td", null, "CAMP_TYPE"),
                createVNode("td", null, "Select"),
                createVNode("td", null, "\u7279\u8BAD\u8425\u7C7B\u578B"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u503C\u96C6MBO.CAMP_TYPE\uFF0C\u5FC5\u586B\uFF1B\u9009\u62E9\u540E\u8054\u52A8\u5237\u65B0\u6536\u8D39\u6807\u51C6")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7279\u8BAD\u8425\u5730\u5740"),
                createVNode("td", null, "ADDRESS"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u7279\u8BAD\u8425\u4E3E\u529E\u5730\u5740"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u624B\u52A8\u8F93\u5165\uFF0C\u5FC5\u586B")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7279\u8BAD\u8425\u4ECB\u7ECD"),
                createVNode("td", null, "INTRODUCTION"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u7279\u8BAD\u8425\u4ECB\u7ECD\u8BF4\u660E"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u624B\u52A8\u8F93\u5165\uFF0C\u5FC5\u586B")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6240\u5C5E\u90E8\u95E8"),
                createVNode("td", null, "ORG_CODE/ORG_NAME"),
                createVNode("td", null, "TreeSelect"),
                createVNode("td", null, "\u6240\u5C5E\u90E8\u95E8"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "options=orgDS\uFF0CtextField=unitName\uFF0CvalueField=unitCode\uFF0C\u5FC5\u586B")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u8D1F\u8D23\u4E8B\u4E1A\u90E8"),
                createVNode("td", null, "DIVISION_CODE/DIVISION_NAME"),
                createVNode("td", null, "Select"),
                createVNode("td", null, "\u8D23\u4EFB\u4E8B\u4E1A\u90E8"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "options=divisionDS\uFF0CtextField=divisionName\uFF0CvalueField=divisionCode\uFF0C\u5FC5\u586B\uFF1B\u9009\u62E9\u540E\u8054\u52A8\u5237\u65B0\u6536\u8D39\u6807\u51C6")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6240\u5C5E\u8FD0\u8425\u4E2D\u5FC3"),
                createVNode("td", null, "OP_CENTER"),
                createVNode("td", null, "Select"),
                createVNode("td", null, "\u6240\u5C5E\u8FD0\u8425\u4E2D\u5FC3"),
                createVNode("td", null, "campType=region\u65F6\u663E\u793A"),
                createVNode("td", null, "\u503C\u96C6MBO.OP_CENTER\uFF1BcampType=region\u65F6\u5FC5\u586B")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7279\u8BAD\u8425\u65F6\u95F4"),
                createVNode("td", null, "PLAN_START_TIME/PLAN_END_TIME"),
                createVNode("td", null, "DatePicker(range)"),
                createVNode("td", null, "\u7279\u8BAD\u8425\u8D77\u6B62\u65F6\u95F4"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "range=true\uFF0C\u5FC5\u586B\uFF1B\u63D0\u4EA4\u65F6\u62C6\u5206\u4E3AplanStartTime/planEndTime(YYYY-MM-DD)")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6536\u8D39\u6807\u51C6"),
                createVNode("td", null, "CAMP_PRICE/PRICE_UNIT/PROD_CODE"),
                createVNode("td", null, "Select"),
                createVNode("td", null, "\u6536\u8D39\u6807\u51C6"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "options=priceDS\uFF0C\u5FC5\u586B\uFF1B\u4F9D\u8D56\u4E8B\u4E1A\u90E8divisionCode+\u7279\u8BAD\u8425\u7C7B\u578BcampType\u8054\u52A8\u67E5\u8BE2")
              ])
            ])
          ]),
          createVNode("h4", null, "\u8BE6\u60C5\u9875 - \u7279\u8BAD\u8425\u8BB2\u5E08\u8868\u683C"),
          createVNode("blockquote", null, '\u8BE6\u60C5\u9875"\u7279\u8BAD\u8425\u8BB2\u5E08"\u533A\u57DF\uFF0C\u975E\u67E5\u770B\u6A21\u5F0F\u663E\u793A"\u6DFB\u52A0\u8BB2\u5E08"\u6309\u94AE\uFF0C\u70B9\u51FB\u5F39\u51FA"\u9009\u62E9\u8BB2\u5E08"\u5F39\u7A97\u3002'),
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
                createVNode("td", null, "\u5DE5\u53F7"),
                createVNode("td", null, "LECTURER_CODE"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u8BB2\u5E08\u5DE5\u53F7"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u5DE6\u9501\u5B9A\u5217")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u59D3\u540D"),
                createVNode("td", null, "LECTURER_NAME"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u8BB2\u5E08\u59D3\u540D"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u5DE6\u9501\u5B9A\u5217")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u90E8\u95E8"),
                createVNode("td", null, "ORG_NAME"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u8BB2\u5E08\u6240\u5C5E\u90E8\u95E8"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u540E\u7AEF\u8FD4\u56DE")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5F00\u59CB\u65E5\u671F"),
                createVNode("td", null, "START_DATE"),
                createVNode("td", null, "DatePicker"),
                createVNode("td", null, "\u8BB2\u5E08\u6388\u8BFE\u5F00\u59CB\u65E5\u671F"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u975E\u67E5\u770B\u6A21\u5F0F\u53EF\u7F16\u8F91\uFF1B\u6821\u9A8C\u4E0D\u5C0F\u4E8E\u7279\u8BAD\u8425\u5F00\u59CB\u65E5\u671F")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7ED3\u675F\u65E5\u671F"),
                createVNode("td", null, "END_DATE"),
                createVNode("td", null, "DatePicker"),
                createVNode("td", null, "\u8BB2\u5E08\u6388\u8BFE\u7ED3\u675F\u65E5\u671F"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u975E\u67E5\u770B\u6A21\u5F0F\u53EF\u7F16\u8F91\uFF1B\u6821\u9A8C\u4E0D\u5927\u4E8E\u7279\u8BAD\u8425\u7ED3\u675F\u65E5\u671F")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u8BB2\u5E08\u4ECB\u7ECD"),
                createVNode("td", null, "LECTURER_INTRODUCE"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u8BB2\u5E08\u4ECB\u7ECD"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u975E\u67E5\u770B\u6A21\u5F0F\u53EF\u7F16\u8F91\uFF0C\u5FC5\u586B")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u64CD\u4F5C"),
                createVNode("td", null, "-"),
                createVNode("td", null, "Button(link)"),
                createVNode("td", null, "\u5220\u9664\u8BB2\u5E08"),
                createVNode("td", null, "\u975E\u67E5\u770B\u6A21\u5F0F\u663E\u793A"),
                createVNode("td", null, "\u53F3\u9501\u5B9A\u5217\uFF0C\u70B9\u51FB\u5220\u9664\u8BE5\u884C")
              ])
            ])
          ]),
          createVNode("h4", null, "\u8BE6\u60C5\u9875 - \u9644\u4EF6"),
          createVNode("blockquote", null, "\u4F7F\u7528 LecturerCase \u7EC4\u4EF6\uFF0C\u652F\u6301\u6587\u4EF6\u4E0A\u4F20\u3002\u5B57\u6BB5\uFF1A\u9644\u4EF6\u540D\u79F0(FILE_NAME)\u3001\u9644\u4EF6\u5730\u5740(FILE_URL)\u3002"),
          createVNode("h4", null, "\u9009\u62E9\u5F39\u7A97"),
          createVNode("h5", null, "\u5F39\u7A971\uFF1A\u62A5\u540D\u622A\u6B62\u5F39\u7A97"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1"),
              createTextVNode('\uFF1A\u5217\u8868\u884C\u64CD\u4F5C"\u62A5\u540D\u622A\u6B62"\u6309\u94AE\u3002')
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u5185\u5BB9"),
              createTextVNode("\uFF1ADatePicker \u9009\u62E9\u62A5\u540D\u7ED3\u675F\u65F6\u95F4\u3002")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u63D0\u4EA4\u6821\u9A8C"),
              createTextVNode('\uFF1A\u62A5\u540D\u7ED3\u675F\u65F6\u95F4\u5FC5\u586B\uFF0C\u5426\u5219\u63D0\u793A"\u8BF7\u9009\u62E9\u62A5\u540D\u7ED3\u675F\u65F6\u95F4"\u3002')
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u63D0\u4EA4\u63A5\u53E3"),
              createTextVNode("\uFF1A"),
              createVNode("code", null, "GET mlt/trainCamp/signEnd"),
              createTextVNode("\uFF0C\u53C2\u6570 "),
              createVNode("code", null, "campCode"),
              createTextVNode("\u3001"),
              createVNode("code", null, "campsignEndTimeCode"),
              createTextVNode("\uFF08\u683C\u5F0F "),
              createVNode("code", null, "YYYY-MM-DD"),
              createTextVNode("\uFF09\u3002")
            ])
          ]),
          createVNode("h5", null, "\u5F39\u7A972\uFF1A\u9009\u62E9\u8BB2\u5E08\u5F39\u7A97\uFF08\u8BE6\u60C5\u9875\uFF09"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1"),
              createTextVNode('\uFF1A\u8BE6\u60C5\u9875"\u7279\u8BAD\u8425\u8BB2\u5E08"\u533A\u57DF"\u6DFB\u52A0\u8BB2\u5E08"\u6309\u94AE\u3002')
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u524D\u7F6E\u6821\u9A8C"),
              createTextVNode('\uFF1A\u9700\u5148\u9009\u62E9\u8D1F\u8D23\u4E8B\u4E1A\u90E8\uFF0C\u5426\u5219\u63D0\u793A"\u8BF7\u5148\u9009\u62E9\u8D1F\u8D23\u4E8B\u4E1A\u90E8"\u3002')
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u5F39\u7A97\u67E5\u8BE2\u6761\u4EF6"),
              createTextVNode("\uFF1A\u8BB2\u5E08\u59D3\u540D(lecturerName)\u3002")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u5F39\u7A97\u5217\u8868\u5B57\u6BB5"),
              createTextVNode("\uFF1A")
            ])
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
                createVNode("td", null, "\u8BB2\u5E08\u59D3\u540D"),
                createVNode("td", null, "LECTURER_NAME"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u8BB2\u5E08\u59D3\u540D"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u5DE6\u9501\u5B9A\u5217")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7EA7\u522B"),
                createVNode("td", null, "LECTURER_LEVEL"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u8BB2\u5E08\u7EA7\u522B"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u503C\u96C6MBO.TRAIN_LECTURER_LEVEL")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u62A5\u4EF7"),
                createVNode("td", null, "PRICE"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u8BB2\u5E08\u62A5\u4EF7"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u540E\u7AEF\u8FD4\u56DE")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u8BB2\u5E08\u7C7B\u578B"),
                createVNode("td", null, "LECTURER_TYPE"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u8BB2\u5E08\u7C7B\u578B"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u503C\u96C6MBO.LECTURER_TYPE")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u8D1F\u8D23\u533A\u57DF"),
                createVNode("td", null, "COVER_AREA"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u8BB2\u5E08\u8D1F\u8D23\u533A\u57DF"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u540E\u7AEF\u8FD4\u56DE")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u8D23\u4EFB\u4E8B\u4E1A\u90E8"),
                createVNode("td", null, "RESPONSIBLE_DEPARTMENT_NAME"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u8D23\u4EFB\u4E8B\u4E1A\u90E8"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u540E\u7AEF\u8FD4\u56DE")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6807\u7B7E"),
                createVNode("td", null, "LECTURER_LABEL"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u8BB2\u5E08\u6807\u7B7E"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u540E\u7AEF\u8FD4\u56DE")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u64CD\u4F5C"),
                createVNode("td", null, "-"),
                createVNode("td", null, "Button(link)"),
                createVNode("td", null, "\u67E5\u770B\u65E5\u7A0B"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, '\u53F3\u9501\u5B9A\u5217\uFF0C\u70B9\u51FB\u5F39\u51FA"\u67E5\u770B\u65E5\u7A0B"\u5F39\u7A97(LecturerCalendar)')
              ])
            ])
          ]),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u786E\u8BA4\u903B\u8F91"),
              createTextVNode("\uFF1A\u652F\u6301\u591A\u9009\uFF0C\u786E\u8BA4\u540E\u8FC7\u6EE4\u5DF2\u5B58\u5728\u8BB2\u5E08\uFF08\u6309lecturerArchivesId\u53BB\u91CD\uFF09\uFF0C\u8FFD\u52A0\u5230\u8BB2\u5E08\u5217\u8868\u3002")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u67E5\u8BE2\u63A5\u53E3"),
              createTextVNode("\uFF1A"),
              createVNode("code", null, "POST mlt/maLecturerArchive/maLecturerPage"),
              createTextVNode("\uFF0C\u53C2\u6570\u9644\u52A0 "),
              createVNode("code", null, "pageType=train"),
              createTextVNode("\u3001"),
              createVNode("code", null, "responsibleDepartmentCode"),
              createTextVNode("\u3002")
            ])
          ]),
          createVNode("h4", null, "\u5BFC\u5165"),
          createVNode("p", null, "\u4E0D\u652F\u6301\u5BFC\u5165\u529F\u80FD\u3002"),
          createVNode("h4", null, "\u5176\u4ED6\u6309\u94AE"),
          createVNode("table", { class: "kb-field-tbl" }, [
            createVNode("thead", null, [
              createVNode("tr", null, [
                createVNode("th", null, "\u5E8F\u53F7"),
                createVNode("th", null, "\u6309\u94AE\u540D\u79F0"),
                createVNode("th", null, "\u6240\u5728\u4F4D\u7F6E"),
                createVNode("th", null, "\u6743\u9650\u7F16\u7801"),
                createVNode("th", null, "\u663E\u9690\u6761\u4EF6")
              ])
            ]),
            createVNode("tbody", null, [
              createVNode("tr", null, [
                createVNode("td", null, "1"),
                createVNode("td", null, "\u65B0\u5EFA"),
                createVNode("td", null, "\u5DE5\u5177\u680F"),
                createVNode("td", null, "`hzero.general_manage.special_training_camp.camp_list.ps.save`"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "2"),
                createVNode("td", null, "\u7F16\u8F91"),
                createVNode("td", null, "\u5DE5\u5177\u680F"),
                createVNode("td", null, "`hzero.general_manage.special_training_camp.camp_list.ps.edit`"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "3"),
                createVNode("td", null, "\u5220\u9664"),
                createVNode("td", null, "\u5DE5\u5177\u680F"),
                createVNode("td", null, "`hzero.general_manage.special_training_camp.camp_list.ps.delete`"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "4"),
                createVNode("td", null, "\u751F\u6548"),
                createVNode("td", null, "\u5DE5\u5177\u680F"),
                createVNode("td", null, "`hzero.general_manage.special_training_camp.camp_list.ps.valid`"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "5"),
                createVNode("td", null, "\u5931\u6548"),
                createVNode("td", null, "\u5DE5\u5177\u680F"),
                createVNode("td", null, "`hzero.general_manage.special_training_camp.camp_list.ps.invalid`"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "6"),
                createVNode("td", null, "\u62A5\u540D\u622A\u6B62"),
                createVNode("td", null, "\u884C\u64CD\u4F5C"),
                createVNode("td", null, "\u65E0\uFF08renderer\u6E32\u67D3\uFF09"),
                createVNode("td", null, "status=valid\u4E14planStartTime>now")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "7"),
                createVNode("td", null, "\u4FDD\u5B58"),
                createVNode("td", null, "\u8BE6\u60C5\u9875\u5DE5\u5177\u680F"),
                createVNode("td", null, "`hzero.general_manage.special_training_camp.camp_list.ps.save`"),
                createVNode("td", null, "\u975E\u67E5\u770B\u6A21\u5F0F\u663E\u793A")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "8"),
                createVNode("td", null, "\u4FDD\u5B58\u5E76\u751F\u6548"),
                createVNode("td", null, "\u8BE6\u60C5\u9875\u5DE5\u5177\u680F"),
                createVNode("td", null, "`hzero.general_manage.special_training_camp.camp_list.ps.save`"),
                createVNode("td", null, "\u975E\u67E5\u770B\u6A21\u5F0F\u663E\u793A")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "9"),
                createVNode("td", null, "\u6DFB\u52A0\u8BB2\u5E08"),
                createVNode("td", null, "\u8BE6\u60C5\u9875\u8BB2\u5E08\u533A"),
                createVNode("td", null, "\u65E0"),
                createVNode("td", null, "\u975E\u67E5\u770B\u6A21\u5F0F\u663E\u793A")
              ])
            ])
          ]),
          createVNode("blockquote", null, '\u8BF4\u660E\uFF1A\u5217\u8868"\u7279\u8BAD\u8425\u540D\u79F0"\u5217\u4E3AButton(link)\uFF0C\u70B9\u51FB\u5373\u8DF3\u8F6C\u8BE6\u60C5\u9875(view)\uFF0C\u65E0\u5355\u72EC"\u67E5\u770B\u8BE6\u60C5"\u884C\u64CD\u4F5C\u6309\u94AE\u3002'),
          createVNode("h5", null, "\u6309\u94AE1\uFF1A\u65B0\u5EFA\uFF08\u5DE5\u5177\u680F\uFF09"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u903B\u8F91"),
              createTextVNode("\uFF1AopenTab \u65B0\u6807\u7B7E\u9875\u8DF3\u8F6C\u65B0\u5EFA\u8BE6\u60C5\u9875 "),
              createVNode("code", null, "/detail/null/add"),
              createTextVNode("\u3002")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u8C03\u7528\u63A5\u53E3"),
              createTextVNode("\uFF1A\u65E0\u3002")
            ])
          ]),
          createVNode("h5", null, "\u6309\u94AE2\uFF1A\u7F16\u8F91\uFF08\u5DE5\u5177\u680F\uFF09"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u903B\u8F91"),
              createTextVNode("\uFF1A\u6821\u9A8C\u9009\u4E2D\u884C\u6570\u4E3A1\uFF0C\u6821\u9A8C\u72B6\u6001\u4E3A "),
              createVNode("code", null, "draft"),
              createTextVNode('\uFF08\u5426\u5219\u63D0\u793A"\u5F53\u524D\u72B6\u6001\u6570\u636E\u65E0\u6CD5\u7F16\u8F91\uFF01"\uFF09\uFF0CopenTab \u8DF3\u8F6C\u7F16\u8F91\u8BE6\u60C5\u9875 '),
              createVNode("code", null, "/detail/{specialTrainCampId}/edit"),
              createTextVNode("\u3002")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u8C03\u7528\u63A5\u53E3"),
              createTextVNode("\uFF1A\u65E0\u3002")
            ])
          ]),
          createVNode("h5", null, "\u6309\u94AE3\uFF1A\u5220\u9664\uFF08\u5DE5\u5177\u680F\uFF09"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u903B\u8F91"),
              createTextVNode('\uFF1A\u6821\u9A8C\u9009\u4E2D\u81F3\u5C111\u6761\uFF0CModal.confirm \u786E\u8BA4\u5F39\u7A97"\u786E\u5B9A\u8981\u5220\u9664\u5F53\u524D\u6570\u636E\u5417\uFF1F"\uFF0C\u8C03\u7528 '),
              createVNode("code", null, "batchDelData"),
              createTextVNode(" \u63A5\u53E3\uFF0C\u53C2\u6570 specialTrainCampId \u6570\u7EC4\uFF0C\u6210\u529F\u540E\u5237\u65B0\u5217\u8868\u3002")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u8C03\u7528\u63A5\u53E3"),
              createTextVNode("\uFF1A"),
              createVNode("code", null, "POST mlt/trainCamp/batchDelData"),
              createTextVNode("\u3002")
            ])
          ]),
          createVNode("h5", null, "\u6309\u94AE4\uFF1A\u751F\u6548\uFF08\u5DE5\u5177\u680F\uFF09"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u903B\u8F91"),
              createTextVNode('\uFF1A\u6821\u9A8C\u9009\u4E2D\u81F3\u5C111\u6761\uFF0CModal.confirm \u786E\u8BA4\u5F39\u7A97"\u786E\u8BA4\u751F\u6548\u5417\uFF1F"\uFF0C\u8C03\u7528 '),
              createVNode("code", null, "batchValidData"),
              createTextVNode(" \u63A5\u53E3\uFF0C\u53C2\u6570 specialTrainCampId \u6570\u7EC4 + status=valid\u3002\u82E5 res.data \u975E\u7A7A\u5219\u63D0\u793A\u9519\u8BEF\uFF0C\u5426\u5219\u63D0\u793A\u6210\u529F\u5E76\u5237\u65B0\u3002")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u8C03\u7528\u63A5\u53E3"),
              createTextVNode("\uFF1A"),
              createVNode("code", null, "POST mlt/trainCamp/batchValidData"),
              createTextVNode("\u3002")
            ])
          ]),
          createVNode("h5", null, "\u6309\u94AE5\uFF1A\u5931\u6548\uFF08\u5DE5\u5177\u680F\uFF09"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u903B\u8F91"),
              createTextVNode('\uFF1A\u6821\u9A8C\u9009\u4E2D\u81F3\u5C111\u6761\uFF0CModal.confirm \u786E\u8BA4\u5F39\u7A97"\u786E\u8BA4\u5931\u6548\u5417\uFF1F"\uFF0C\u8C03\u7528 '),
              createVNode("code", null, "batchValidData"),
              createTextVNode(" \u63A5\u53E3\uFF0C\u53C2\u6570 specialTrainCampId \u6570\u7EC4 + status=invalid\u3002\u82E5 res.data \u975E\u7A7A\u5219\u63D0\u793A\u9519\u8BEF\uFF0C\u5426\u5219\u63D0\u793A\u6210\u529F\u5E76\u5237\u65B0\u3002")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u8C03\u7528\u63A5\u53E3"),
              createTextVNode("\uFF1A"),
              createVNode("code", null, "POST mlt/trainCamp/batchValidData"),
              createTextVNode("\u3002")
            ])
          ]),
          createVNode("h5", null, "\u6309\u94AE6\uFF1A\u62A5\u540D\u622A\u6B62\uFF08\u884C\u64CD\u4F5C\uFF09"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u903B\u8F91"),
              createTextVNode("\uFF1A\u5F39\u7A97\u9009\u62E9\u62A5\u540D\u7ED3\u675F\u65F6\u95F4(DatePicker)\uFF0C\u6821\u9A8C\u5FC5\u586B\uFF0C\u8C03\u7528 "),
              createVNode("code", null, "signEnd"),
              createTextVNode(" \u63A5\u53E3\uFF0C\u53C2\u6570 "),
              createVNode("code", null, "campCode"),
              createTextVNode(" \u548C "),
              createVNode("code", null, "campsignEndTimeCode"),
              createTextVNode("\uFF08\u683C\u5F0F "),
              createVNode("code", null, "YYYY-MM-DD"),
              createTextVNode("\uFF09\uFF0C\u6210\u529F\u540E\u5237\u65B0\u5217\u8868\u3002")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u8C03\u7528\u63A5\u53E3"),
              createTextVNode("\uFF1A"),
              createVNode("code", null, "GET mlt/trainCamp/signEnd"),
              createTextVNode("\u3002")
            ])
          ]),
          createVNode("h5", null, "\u6309\u94AE7\uFF1A\u4FDD\u5B58\uFF08\u8BE6\u60C5\u9875\u5DE5\u5177\u680F\uFF09"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u903B\u8F91"),
              createTextVNode("\uFF1A\u6821\u9A8C\u57FA\u7840\u4FE1\u606F\u8868\u5355\u5FC5\u586B\u9879\uFF0C\u6821\u9A8C\u8BB2\u5E08\u5217\u8868\uFF08\u975E\u7A7A\u3001\u5F00\u59CB/\u7ED3\u675F\u65E5\u671F\u3001\u8BB2\u5E08\u4ECB\u7ECD\uFF09\uFF0C\u7EC4\u88C5\u6570\u636E\u63D0\u4EA4\u3002\u6570\u636E\u5305\u542B planStartTime/planEndTime(\u7531date\u62C6\u5206)\u3001divisionCode/divisionName\u3001orgCode/orgName\u3001campPrice/priceUnit/prodCode(\u7531priceInfo\u62C6\u5206)\u3001lecturerDTOList\u3001fileDTOList\u3002")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u8C03\u7528\u63A5\u53E3"),
              createTextVNode("\uFF1A"),
              createVNode("code", null, "POST mlt/trainCamp/save"),
              createTextVNode("\u3002")
            ])
          ]),
          createVNode("h5", null, "\u6309\u94AE8\uFF1A\u4FDD\u5B58\u5E76\u751F\u6548\uFF08\u8BE6\u60C5\u9875\u5DE5\u5177\u680F\uFF09"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u903B\u8F91"),
              createTextVNode("\uFF1A\u540C\u4FDD\u5B58\u903B\u8F91\uFF0C\u8C03\u7528 saveAndValid \u63A5\u53E3\uFF0C\u4FDD\u5B58\u5E76\u76F4\u63A5\u751F\u6548\u3002")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u8C03\u7528\u63A5\u53E3"),
              createTextVNode("\uFF1A"),
              createVNode("code", null, "POST mlt/trainCamp/saveAndValid"),
              createTextVNode("\u3002")
            ])
          ]),
          createVNode("h5", null, "\u6309\u94AE9\uFF1A\u6DFB\u52A0\u8BB2\u5E08\uFF08\u8BE6\u60C5\u9875\u8BB2\u5E08\u533A\uFF09"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u903B\u8F91"),
              createTextVNode('\uFF1A\u6821\u9A8C\u5DF2\u9009\u62E9\u8D1F\u8D23\u4E8B\u4E1A\u90E8\uFF0C\u5F39\u51FA"\u9009\u62E9\u8BB2\u5E08"\u5F39\u7A97\uFF0C\u6309 divisionCode \u67E5\u8BE2\u8BB2\u5E08\u5217\u8868\uFF0C\u591A\u9009\u786E\u8BA4\u540E\u53BB\u91CD\u8FFD\u52A0\u5230\u8BB2\u5E08\u5217\u8868\u3002')
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, { title: "\u8BE6\u60C5\u9875\u4FDD\u5B58\u6821\u9A8C\u903B\u8F91" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u57FA\u7840\u4FE1\u606F\u6821\u9A8C</strong>\uFF1AbaseFormDS.validate() \u6821\u9A8C\u6240\u6709\u5FC5\u586B\u5B57\u6BB5\u3002</li><li${_scopeId}><strong${_scopeId}>\u8BB2\u5E08\u5217\u8868\u6821\u9A8C</strong>(validateLectorerList)\uFF1A</li></ul><p${_scopeId}>1. \u8BB2\u5E08\u5217\u8868\u4E0D\u80FD\u4E3A\u7A7A\u3002</p><p${_scopeId}>2. \u6BCF\u4F4D\u8BB2\u5E08\u5F00\u59CB\u65E5\u671F\u4E0D\u80FD\u4E3A\u7A7A\u3002</p><p${_scopeId}>3. \u6BCF\u4F4D\u8BB2\u5E08\u7ED3\u675F\u65E5\u671F\u4E0D\u80FD\u4E3A\u7A7A\u3002</p><p${_scopeId}>4. \u8BB2\u5E08\u5F00\u59CB\u65E5\u671F\u4E0D\u80FD\u5927\u4E8E\u7ED3\u675F\u65E5\u671F\u3002</p><p${_scopeId}>5. \u8BB2\u5E08\u5F00\u59CB\u65E5\u671F\u4E0D\u80FD\u5C0F\u4E8E\u7279\u8BAD\u8425\u5F00\u59CB\u65E5\u671F\u3002</p><p${_scopeId}>6. \u8BB2\u5E08\u7ED3\u675F\u65E5\u671F\u4E0D\u80FD\u5927\u4E8E\u7279\u8BAD\u8425\u7ED3\u675F\u65E5\u671F\u3002</p><p${_scopeId}>7. \u8BB2\u5E08\u4ECB\u7ECD\u4E0D\u80FD\u4E3A\u7A7A\u3002</p><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u8054\u52A8\u903B\u8F91</strong>\uFF1A</li><li${_scopeId}>\u7279\u8BAD\u8425\u7C7B\u578B(campType)\u6216\u8D1F\u8D23\u4E8B\u4E1A\u90E8(division)\u53D8\u66F4\u65F6\uFF0C\u8054\u52A8\u67E5\u8BE2\u6536\u8D39\u6807\u51C6(priceDS)\uFF0C\u53C2\u6570 divisionCode + lecturerType(=campType)\uFF0C\u5E76\u6E05\u7A7A\u5DF2\u9009\u6536\u8D39\u6807\u51C6\u3002</li><li${_scopeId}>\u7279\u8BAD\u8425\u7C7B\u578B\u4E3A region \u65F6\u663E\u793A&quot;\u6240\u5C5E\u8FD0\u8425\u4E2D\u5FC3&quot;\u5B57\u6BB5\u4E14\u5FC5\u586B\u3002</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u57FA\u7840\u4FE1\u606F\u6821\u9A8C"),
              createTextVNode("\uFF1AbaseFormDS.validate() \u6821\u9A8C\u6240\u6709\u5FC5\u586B\u5B57\u6BB5\u3002")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u8BB2\u5E08\u5217\u8868\u6821\u9A8C"),
              createTextVNode("(validateLectorerList)\uFF1A")
            ])
          ]),
          createVNode("p", null, "1. \u8BB2\u5E08\u5217\u8868\u4E0D\u80FD\u4E3A\u7A7A\u3002"),
          createVNode("p", null, "2. \u6BCF\u4F4D\u8BB2\u5E08\u5F00\u59CB\u65E5\u671F\u4E0D\u80FD\u4E3A\u7A7A\u3002"),
          createVNode("p", null, "3. \u6BCF\u4F4D\u8BB2\u5E08\u7ED3\u675F\u65E5\u671F\u4E0D\u80FD\u4E3A\u7A7A\u3002"),
          createVNode("p", null, "4. \u8BB2\u5E08\u5F00\u59CB\u65E5\u671F\u4E0D\u80FD\u5927\u4E8E\u7ED3\u675F\u65E5\u671F\u3002"),
          createVNode("p", null, "5. \u8BB2\u5E08\u5F00\u59CB\u65E5\u671F\u4E0D\u80FD\u5C0F\u4E8E\u7279\u8BAD\u8425\u5F00\u59CB\u65E5\u671F\u3002"),
          createVNode("p", null, "6. \u8BB2\u5E08\u7ED3\u675F\u65E5\u671F\u4E0D\u80FD\u5927\u4E8E\u7279\u8BAD\u8425\u7ED3\u675F\u65E5\u671F\u3002"),
          createVNode("p", null, "7. \u8BB2\u5E08\u4ECB\u7ECD\u4E0D\u80FD\u4E3A\u7A7A\u3002"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u8054\u52A8\u903B\u8F91"),
              createTextVNode("\uFF1A")
            ]),
            createVNode("li", null, "\u7279\u8BAD\u8425\u7C7B\u578B(campType)\u6216\u8D1F\u8D23\u4E8B\u4E1A\u90E8(division)\u53D8\u66F4\u65F6\uFF0C\u8054\u52A8\u67E5\u8BE2\u6536\u8D39\u6807\u51C6(priceDS)\uFF0C\u53C2\u6570 divisionCode + lecturerType(=campType)\uFF0C\u5E76\u6E05\u7A7A\u5DF2\u9009\u6536\u8D39\u6807\u51C6\u3002"),
            createVNode("li", null, '\u7279\u8BAD\u8425\u7C7B\u578B\u4E3A region \u65F6\u663E\u793A"\u6240\u5C5E\u8FD0\u8425\u4E2D\u5FC3"\u5B57\u6BB5\u4E14\u5FC5\u586B\u3002')
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, { title: "\u4FDD\u5B58\u6821\u9A8C" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}>\u6821\u9A8C1\uFF1A\u7F16\u8F91\u72B6\u6001\u6821\u9A8C \u2014\u2014 \u4FDD\u8BC1\u751F\u6548\u6570\u636E\u7A33\u5B9A\u6027</li><li${_scopeId}><strong${_scopeId}>\u8BE6\u7EC6\u903B\u8F91</strong>\uFF1A\u7F16\u8F91\u65F6\u6821\u9A8C\u72B6\u6001\u5FC5\u987B\u4E3A <code${_scopeId}>draft</code>\uFF0C\u5426\u5219\u63D0\u793A&quot;\u5F53\u524D\u72B6\u6001\u6570\u636E\u65E0\u6CD5\u7F16\u8F91\uFF01&quot;\u3002</li><li${_scopeId}><strong${_scopeId}>\u7CFB\u7EDF\u4F53\u73B0</strong>\uFF1A\u524D\u7AEF\u72B6\u6001\u6821\u9A8C\uFF0C\u540E\u7AEF\u4E8C\u6B21\u6821\u9A8C\u3002</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> tc.CAMP_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7279\u8BAD\u8425\u7F16\u7801, tc.CAMP_NAME </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7279\u8BAD\u8425\u540D\u79F0, tc.STATUS </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u72B6\u6001</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> TRAIN_CAMP tc</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> tc.STATUS </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&lt;&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>draft</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, "\u6821\u9A8C1\uFF1A\u7F16\u8F91\u72B6\u6001\u6821\u9A8C \u2014\u2014 \u4FDD\u8BC1\u751F\u6548\u6570\u636E\u7A33\u5B9A\u6027"),
            createVNode("li", null, [
              createVNode("strong", null, "\u8BE6\u7EC6\u903B\u8F91"),
              createTextVNode("\uFF1A\u7F16\u8F91\u65F6\u6821\u9A8C\u72B6\u6001\u5FC5\u987B\u4E3A "),
              createVNode("code", null, "draft"),
              createTextVNode('\uFF0C\u5426\u5219\u63D0\u793A"\u5F53\u524D\u72B6\u6001\u6570\u636E\u65E0\u6CD5\u7F16\u8F91\uFF01"\u3002')
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u7CFB\u7EDF\u4F53\u73B0"),
              createTextVNode("\uFF1A\u524D\u7AEF\u72B6\u6001\u6821\u9A8C\uFF0C\u540E\u7AEF\u4E8C\u6B21\u6821\u9A8C\u3002")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " tc.CAMP_CODE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7279\u8BAD\u8425\u7F16\u7801, tc.CAMP_NAME "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7279\u8BAD\u8425\u540D\u79F0, tc.STATUS "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u72B6\u6001")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " TRAIN_CAMP tc")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " tc.STATUS "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "<>"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "draft"),
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
  _push(ssrRenderComponent(_component_KbCard, { title: "\u63D0\u4EA4\u6821\u9A8C" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}>\u6821\u9A8C1\uFF1A\u62A5\u540D\u7ED3\u675F\u65F6\u95F4\u5FC5\u586B \u2014\u2014 \u786E\u4FDD\u62A5\u540D\u622A\u6B62\u65F6\u95F4\u6709\u6548</li><li${_scopeId}><strong${_scopeId}>\u8BE6\u7EC6\u903B\u8F91</strong>\uFF1A\u62A5\u540D\u622A\u6B62\u63D0\u4EA4\u65F6\u6821\u9A8C <code${_scopeId}>campsignEndTimeCode</code> \u5FC5\u586B\u3002</li><li${_scopeId}><strong${_scopeId}>\u7CFB\u7EDF\u4F53\u73B0</strong>\uFF1A\u524D\u7AEF\u5F39\u7A97\u6821\u9A8C\uFF0C\u540E\u7AEF\u4E8C\u6B21\u6821\u9A8C\u3002</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> tc.CAMP_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7279\u8BAD\u8425\u7F16\u7801, tc.CAMPSIGN_END_TIME </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u62A5\u540D\u7ED3\u675F\u65F6\u95F4</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> TRAIN_CAMP tc</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> tc.STATUS </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>valid</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>      </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> tc.PLAN_START_TIME </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>SYSDATE</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>      </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> tc.CAMPSIGN_END_TIME </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, "\u6821\u9A8C1\uFF1A\u62A5\u540D\u7ED3\u675F\u65F6\u95F4\u5FC5\u586B \u2014\u2014 \u786E\u4FDD\u62A5\u540D\u622A\u6B62\u65F6\u95F4\u6709\u6548"),
            createVNode("li", null, [
              createVNode("strong", null, "\u8BE6\u7EC6\u903B\u8F91"),
              createTextVNode("\uFF1A\u62A5\u540D\u622A\u6B62\u63D0\u4EA4\u65F6\u6821\u9A8C "),
              createVNode("code", null, "campsignEndTimeCode"),
              createTextVNode(" \u5FC5\u586B\u3002")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u7CFB\u7EDF\u4F53\u73B0"),
              createTextVNode("\uFF1A\u524D\u7AEF\u5F39\u7A97\u6821\u9A8C\uFF0C\u540E\u7AEF\u4E8C\u6B21\u6821\u9A8C\u3002")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " tc.CAMP_CODE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7279\u8BAD\u8425\u7F16\u7801, tc.CAMPSIGN_END_TIME "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u62A5\u540D\u7ED3\u675F\u65F6\u95F4")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " TRAIN_CAMP tc")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " tc.STATUS "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "valid"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " tc.PLAN_START_TIME "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#C792EA" } }, "SYSDATE")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " tc.CAMPSIGN_END_TIME "),
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
  _push(ssrRenderComponent(_component_KbCard, { title: "\u72B6\u6001\u673A" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>\u8349\u7A3F \u2500\u2500\u751F\u6548\u2500\u2500\u2192 \u751F\u6548 \u2500\u2500\u5931\u6548\u2500\u2500\u2192 \u5931\u6548</span></span>
<span class="line"${_scopeId}></span></code></pre></div><table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5F53\u524D\u72B6\u6001</th><th${_scopeId}>\u89E6\u53D1\u52A8\u4F5C</th><th${_scopeId}>\u76EE\u6807\u72B6\u6001</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u8349\u7A3F</td><td${_scopeId}>\u751F\u6548(batchValidData)</td><td${_scopeId}>\u751F\u6548</td></tr><tr${_scopeId}><td${_scopeId}>\u751F\u6548</td><td${_scopeId}>\u5931\u6548(batchValidData)</td><td${_scopeId}>\u5931\u6548</td></tr></tbody></table>`);
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "\u8349\u7A3F \u2500\u2500\u751F\u6548\u2500\u2500\u2192 \u751F\u6548 \u2500\u2500\u5931\u6548\u2500\u2500\u2192 \u5931\u6548")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("table", { class: "kb-field-tbl" }, [
            createVNode("thead", null, [
              createVNode("tr", null, [
                createVNode("th", null, "\u5F53\u524D\u72B6\u6001"),
                createVNode("th", null, "\u89E6\u53D1\u52A8\u4F5C"),
                createVNode("th", null, "\u76EE\u6807\u72B6\u6001")
              ])
            ]),
            createVNode("tbody", null, [
              createVNode("tr", null, [
                createVNode("td", null, "\u8349\u7A3F"),
                createVNode("td", null, "\u751F\u6548(batchValidData)"),
                createVNode("td", null, "\u751F\u6548")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u751F\u6548"),
                createVNode("td", null, "\u5931\u6548(batchValidData)"),
                createVNode("td", null, "\u5931\u6548")
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, { title: "TRAIN_CAMP\uFF08\u7279\u8BAD\u8425\u7BA1\u7406\u8868\uFF09" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5B57\u6BB5\u540D</th><th${_scopeId}>\u7C7B\u578B</th><th${_scopeId}>\u91CA\u4E49</th><th${_scopeId}>\u5BF9\u5E94\u754C\u9762\u5B57\u6BB5</th><th${_scopeId}>\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>ID</td><td${_scopeId}>NUMBER</td><td${_scopeId}>\u4E3B\u952EID</td><td${_scopeId}>-</td><td${_scopeId}>\u5E8F\u5217\u81EA\u589E</td></tr><tr${_scopeId}><td${_scopeId}>CAMP_CODE</td><td${_scopeId}>VARCHAR2(64)</td><td${_scopeId}>\u7279\u8BAD\u8425\u7F16\u7801</td><td${_scopeId}>\u7279\u8BAD\u8425\u7F16\u7801</td><td${_scopeId}>\u7CFB\u7EDF\u751F\u6210\uFF0C\u552F\u4E00</td></tr><tr${_scopeId}><td${_scopeId}>CAMP_NAME</td><td${_scopeId}>VARCHAR2(255)</td><td${_scopeId}>\u7279\u8BAD\u8425\u540D\u79F0</td><td${_scopeId}>\u7279\u8BAD\u8425\u540D\u79F0</td><td${_scopeId}>\u5F55\u5165\u65F6\u586B\u5199</td></tr><tr${_scopeId}><td${_scopeId}>LECTURER</td><td${_scopeId}>VARCHAR2(255)</td><td${_scopeId}>\u8BB2\u5E08\u59D3\u540D</td><td${_scopeId}>\u8BB2\u5E08\u59D3\u540D</td><td${_scopeId}>\u5173\u8054\u8BB2\u5E08\u6863\u6848</td></tr><tr${_scopeId}><td${_scopeId}>STATUS</td><td${_scopeId}>VARCHAR2(32)</td><td${_scopeId}>\u72B6\u6001</td><td${_scopeId}>\u72B6\u6001</td><td${_scopeId}>\u503C\u96C6MBO.CAMP_STATUS\uFF0C\u8349\u7A3F/\u751F\u6548/\u5931\u6548</td></tr><tr${_scopeId}><td${_scopeId}>PLAN_START_TIME</td><td${_scopeId}>DATE</td><td${_scopeId}>\u5F00\u59CB\u65F6\u95F4</td><td${_scopeId}>\u5F00\u59CB\u65F6\u95F4</td><td${_scopeId}>\u5F55\u5165\u65F6\u586B\u5199</td></tr><tr${_scopeId}><td${_scopeId}>PLAN_END_TIME</td><td${_scopeId}>DATE</td><td${_scopeId}>\u7ED3\u675F\u65F6\u95F4</td><td${_scopeId}>\u7ED3\u675F\u65F6\u95F4</td><td${_scopeId}>\u5F55\u5165\u65F6\u586B\u5199</td></tr><tr${_scopeId}><td${_scopeId}>CAMPSIGN_END_TIME</td><td${_scopeId}>DATE</td><td${_scopeId}>\u62A5\u540D\u7ED3\u675F\u65F6\u95F4</td><td${_scopeId}>\u62A5\u540D\u7ED3\u675F\u65F6\u95F4</td><td${_scopeId}>\u62A5\u540D\u622A\u6B62\u64CD\u4F5C\u8BBE\u7F6E</td></tr><tr${_scopeId}><td${_scopeId}>CREATION_DATE</td><td${_scopeId}>TIMESTAMP</td><td${_scopeId}>\u521B\u5EFA\u65F6\u95F4</td><td${_scopeId}>\u521B\u5EFA\u65F6\u95F4</td><td${_scopeId}>\u7CFB\u7EDF\u81EA\u52A8</td></tr><tr${_scopeId}><td${_scopeId}>CREATED_BY</td><td${_scopeId}>NUMBER</td><td${_scopeId}>\u521B\u5EFA\u4EBA</td><td${_scopeId}>-</td><td${_scopeId}>\u7CFB\u7EDF\u81EA\u52A8</td></tr><tr${_scopeId}><td${_scopeId}>LAST_UPDATED_BY</td><td${_scopeId}>NUMBER</td><td${_scopeId}>\u6700\u540E\u66F4\u65B0\u4EBA</td><td${_scopeId}>-</td><td${_scopeId}>\u7CFB\u7EDF\u81EA\u52A8</td></tr><tr${_scopeId}><td${_scopeId}>LAST_UPDATE_DATE</td><td${_scopeId}>DATE</td><td${_scopeId}>\u6700\u540E\u66F4\u65B0\u65F6\u95F4</td><td${_scopeId}>-</td><td${_scopeId}>\u7CFB\u7EDF\u81EA\u52A8</td></tr></tbody></table>`);
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
                createVNode("td", null, "\u4E3B\u952EID"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u5E8F\u5217\u81EA\u589E")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "CAMP_CODE"),
                createVNode("td", null, "VARCHAR2(64)"),
                createVNode("td", null, "\u7279\u8BAD\u8425\u7F16\u7801"),
                createVNode("td", null, "\u7279\u8BAD\u8425\u7F16\u7801"),
                createVNode("td", null, "\u7CFB\u7EDF\u751F\u6210\uFF0C\u552F\u4E00")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "CAMP_NAME"),
                createVNode("td", null, "VARCHAR2(255)"),
                createVNode("td", null, "\u7279\u8BAD\u8425\u540D\u79F0"),
                createVNode("td", null, "\u7279\u8BAD\u8425\u540D\u79F0"),
                createVNode("td", null, "\u5F55\u5165\u65F6\u586B\u5199")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "LECTURER"),
                createVNode("td", null, "VARCHAR2(255)"),
                createVNode("td", null, "\u8BB2\u5E08\u59D3\u540D"),
                createVNode("td", null, "\u8BB2\u5E08\u59D3\u540D"),
                createVNode("td", null, "\u5173\u8054\u8BB2\u5E08\u6863\u6848")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "STATUS"),
                createVNode("td", null, "VARCHAR2(32)"),
                createVNode("td", null, "\u72B6\u6001"),
                createVNode("td", null, "\u72B6\u6001"),
                createVNode("td", null, "\u503C\u96C6MBO.CAMP_STATUS\uFF0C\u8349\u7A3F/\u751F\u6548/\u5931\u6548")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "PLAN_START_TIME"),
                createVNode("td", null, "DATE"),
                createVNode("td", null, "\u5F00\u59CB\u65F6\u95F4"),
                createVNode("td", null, "\u5F00\u59CB\u65F6\u95F4"),
                createVNode("td", null, "\u5F55\u5165\u65F6\u586B\u5199")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "PLAN_END_TIME"),
                createVNode("td", null, "DATE"),
                createVNode("td", null, "\u7ED3\u675F\u65F6\u95F4"),
                createVNode("td", null, "\u7ED3\u675F\u65F6\u95F4"),
                createVNode("td", null, "\u5F55\u5165\u65F6\u586B\u5199")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "CAMPSIGN_END_TIME"),
                createVNode("td", null, "DATE"),
                createVNode("td", null, "\u62A5\u540D\u7ED3\u675F\u65F6\u95F4"),
                createVNode("td", null, "\u62A5\u540D\u7ED3\u675F\u65F6\u95F4"),
                createVNode("td", null, "\u62A5\u540D\u622A\u6B62\u64CD\u4F5C\u8BBE\u7F6E")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "CREATION_DATE"),
                createVNode("td", null, "TIMESTAMP"),
                createVNode("td", null, "\u521B\u5EFA\u65F6\u95F4"),
                createVNode("td", null, "\u521B\u5EFA\u65F6\u95F4"),
                createVNode("td", null, "\u7CFB\u7EDF\u81EA\u52A8")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "CREATED_BY"),
                createVNode("td", null, "NUMBER"),
                createVNode("td", null, "\u521B\u5EFA\u4EBA"),
                createVNode("td", null, "-"),
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
  _push(ssrRenderComponent(_component_KbCard, { title: "\u6392\u67E5SQL" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- \u67E5\u8BE2\u7279\u8BAD\u8425\u5217\u8868</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  tc.CAMP_CODE      </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7279\u8BAD\u8425\u7F16\u7801,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  tc.CAMP_NAME      </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7279\u8BAD\u8425\u540D\u79F0,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  tc.LECTURER       </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u8BB2\u5E08\u59D3\u540D,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  TO_CHAR(tc.PLAN_START_TIME, </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>YYYY-MM-DD</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5F00\u59CB\u65F6\u95F4,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  TO_CHAR(tc.PLAN_END_TIME, </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>YYYY-MM-DD</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7ED3\u675F\u65F6\u95F4,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  TO_CHAR(tc.CAMPSIGN_END_TIME, </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>YYYY-MM-DD</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u62A5\u540D\u7ED3\u675F\u65F6\u95F4,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  tc.STATUS         </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u72B6\u6001,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  TO_CHAR(tc.CREATION_DATE, </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>YYYY-MM-DD HH24:MI:SS</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u521B\u5EFA\u65F6\u95F4</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> TRAIN_CAMP tc</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ORDER BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> tc.CREATION_DATE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>DESC</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- \u67E5\u8BE2\u53EF\u62A5\u540D\u622A\u6B62\u7684\u7279\u8BAD\u8425\uFF08\u751F\u6548\u4E14\u672A\u5F00\u59CB\uFF09</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  tc.CAMP_CODE      </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7279\u8BAD\u8425\u7F16\u7801,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  tc.CAMP_NAME      </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7279\u8BAD\u8425\u540D\u79F0,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  TO_CHAR(tc.PLAN_START_TIME, </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>YYYY-MM-DD</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u8BA1\u5212\u5F00\u59CB\u65F6\u95F4,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  TO_CHAR(tc.CAMPSIGN_END_TIME, </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>YYYY-MM-DD</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u62A5\u540D\u622A\u6B62\u65F6\u95F4</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> TRAIN_CAMP tc</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> tc.STATUS </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>valid</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> tc.PLAN_START_TIME </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>SYSDATE</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> tc.CAMPSIGN_END_TIME </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- \u67E5\u8BE2\u5DF2\u751F\u6548\u7684\u7279\u8BAD\u8425</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  tc.CAMP_CODE      </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7279\u8BAD\u8425\u7F16\u7801,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  tc.CAMP_NAME      </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7279\u8BAD\u8425\u540D\u79F0,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  tc.LECTURER       </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u8BB2\u5E08\u59D3\u540D,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  tc.STATUS         </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u72B6\u6001</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> TRAIN_CAMP tc</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> tc.STATUS </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>valid</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ORDER BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> tc.PLAN_START_TIME </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>DESC</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
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
                  createVNode("span", { style: { "color": "#676E95" } }, "-- \u67E5\u8BE2\u7279\u8BAD\u8425\u5217\u8868")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "SELECT")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  tc.CAMP_CODE      "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7279\u8BAD\u8425\u7F16\u7801,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  tc.CAMP_NAME      "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7279\u8BAD\u8425\u540D\u79F0,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  tc.LECTURER       "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u8BB2\u5E08\u59D3\u540D,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  TO_CHAR(tc.PLAN_START_TIME, "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "YYYY-MM-DD"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5F00\u59CB\u65F6\u95F4,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  TO_CHAR(tc.PLAN_END_TIME, "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "YYYY-MM-DD"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7ED3\u675F\u65F6\u95F4,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  TO_CHAR(tc.CAMPSIGN_END_TIME, "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "YYYY-MM-DD"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u62A5\u540D\u7ED3\u675F\u65F6\u95F4,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  tc.STATUS         "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u72B6\u6001,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  TO_CHAR(tc.CREATION_DATE, "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "YYYY-MM-DD HH24:MI:SS"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u521B\u5EFA\u65F6\u95F4")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " TRAIN_CAMP tc")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ORDER BY"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " tc.CREATION_DATE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "DESC"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#676E95" } }, "-- \u67E5\u8BE2\u53EF\u62A5\u540D\u622A\u6B62\u7684\u7279\u8BAD\u8425\uFF08\u751F\u6548\u4E14\u672A\u5F00\u59CB\uFF09")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "SELECT")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  tc.CAMP_CODE      "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7279\u8BAD\u8425\u7F16\u7801,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  tc.CAMP_NAME      "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7279\u8BAD\u8425\u540D\u79F0,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  TO_CHAR(tc.PLAN_START_TIME, "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "YYYY-MM-DD"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u8BA1\u5212\u5F00\u59CB\u65F6\u95F4,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  TO_CHAR(tc.CAMPSIGN_END_TIME, "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "YYYY-MM-DD"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u62A5\u540D\u622A\u6B62\u65F6\u95F4")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " TRAIN_CAMP tc")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " tc.STATUS "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "valid"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " tc.PLAN_START_TIME "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#C792EA" } }, "SYSDATE")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " tc.CAMPSIGN_END_TIME "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NULL"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#676E95" } }, "-- \u67E5\u8BE2\u5DF2\u751F\u6548\u7684\u7279\u8BAD\u8425")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "SELECT")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  tc.CAMP_CODE      "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7279\u8BAD\u8425\u7F16\u7801,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  tc.CAMP_NAME      "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7279\u8BAD\u8425\u540D\u79F0,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  tc.LECTURER       "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u8BB2\u5E08\u59D3\u540D,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  tc.STATUS         "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u72B6\u6001")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " TRAIN_CAMP tc")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " tc.STATUS "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "valid"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ORDER BY"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " tc.PLAN_START_TIME "),
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
  _push(`</div></div></div><div id="faq" style="${ssrRenderStyle({ "display": "none" })}"><div class="tab-pad"><div class="kl-wrap">`);
  _push(ssrRenderComponent(_component_KbCard, { title: "\u62A5\u9519\u4E00\u89C8\u8868" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u62A5\u9519\u4FE1\u606F</th><th${_scopeId}>\u63D0\u793A\u8282\u70B9</th><th${_scopeId}>\u6839\u56E0\u4E0E\u89E3\u51B3\u65B9\u6848</th><th${_scopeId}>\u7B49\u7EA7</th><th${_scopeId}>\u8BE6\u7EC6\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u8BF7\u9009\u62E9\u4E00\u6761\u6570\u636E</td><td${_scopeId}>\u7F16\u8F91\u6309\u94AE</td><td${_scopeId}>\u672A\u9009\u62E9\u6216\u9009\u62E9\u591A\u884C\uFF1B\u9009\u62E9\u4E00\u6761\u6570\u636E\u540E\u64CD\u4F5C</td><td${_scopeId}>\u666E\u901A</td><td${_scopeId}>\u524D\u7AEF\u9009\u4E2D\u884C\u6570\u6821\u9A8C</td></tr><tr${_scopeId}><td${_scopeId}>\u8BF7\u9009\u62E9\u81F3\u5C11\u4E00\u6761\u6570\u636E</td><td${_scopeId}>\u5220\u9664/\u751F\u6548</td><td${_scopeId}>\u672A\u9009\u62E9\u6570\u636E\uFF1B\u9009\u62E9\u81F3\u5C11\u4E00\u6761\u6570\u636E\u540E\u64CD\u4F5C</td><td${_scopeId}>\u666E\u901A</td><td${_scopeId}>\u524D\u7AEF\u9009\u4E2D\u884C\u6570\u6821\u9A8C</td></tr><tr${_scopeId}><td${_scopeId}>\u5F53\u524D\u72B6\u6001\u6570\u636E\u65E0\u6CD5\u7F16\u8F91\uFF01</td><td${_scopeId}>\u7F16\u8F91\u6309\u94AE</td><td${_scopeId}>\u7279\u8BAD\u8425\u72B6\u6001\u975Edraft\uFF1B\u4EC5\u8349\u7A3F\u72B6\u6001\u53EF\u7F16\u8F91</td><td${_scopeId}>\u666E\u901A</td><td${_scopeId}>\u524D\u7AEF STATUS \u72B6\u6001\u6821\u9A8C</td></tr><tr${_scopeId}><td${_scopeId}>\u8BF7\u9009\u62E9\u62A5\u540D\u7ED3\u675F\u65F6\u95F4</td><td${_scopeId}>\u62A5\u540D\u622A\u6B62\u63D0\u4EA4</td><td${_scopeId}>\u672A\u9009\u62E9\u65F6\u95F4\uFF1B\u9009\u62E9\u62A5\u540D\u7ED3\u675F\u65F6\u95F4\u540E\u63D0\u4EA4</td><td${_scopeId}>\u666E\u901A</td><td${_scopeId}>\u524D\u7AEF campsignEndTimeCode \u5FC5\u586B\u6821\u9A8C</td></tr><tr${_scopeId}><td${_scopeId}>\u8BF7\u6C42\u5931\u8D25</td><td${_scopeId}>\u63A5\u53E3\u8C03\u7528</td><td${_scopeId}>\u540E\u7AEF\u670D\u52A1\u5F02\u5E38\uFF1B\u68C0\u67E5\u540E\u7AEF\u670D\u52A1\u72B6\u6001</td><td${_scopeId}>\u4E25\u91CD</td><td${_scopeId}>HTTP\u8BF7\u6C42\u5F02\u5E38\u6355\u83B7</td></tr><tr${_scopeId}><td${_scopeId}>\u7F51\u7EDC\u5F02\u5E38/\u63A5\u53E3\u8D85\u65F6</td><td${_scopeId}>\u4EFB\u610F\u63A5\u53E3\u8C03\u7528</td><td${_scopeId}>\u7F51\u7EDC\u4E2D\u65AD\u6216\u63A5\u53E3\u54CD\u5E94\u8D85\u65F6\uFF0C\u68C0\u67E5\u7F51\u7EDC\u53CA\u540E\u7AEF\u8D85\u65F6\u914D\u7F6E</td><td${_scopeId}>error</td><td${_scopeId}>axios catch \u6216 timeout</td></tr><tr${_scopeId}><td${_scopeId}>\u6743\u9650\u4E0D\u8DB3</td><td${_scopeId}>\u70B9\u51FB\u64CD\u4F5C\u6309\u94AE</td><td${_scopeId}>\u5F53\u524D\u7528\u6237\u65E0\u5BF9\u5E94\u6309\u94AE\u6743\u9650\u7801\uFF0C\u8054\u7CFB\u7BA1\u7406\u5458\u6388\u6743</td><td${_scopeId}>error</td><td${_scopeId}>permissionList \u6821\u9A8C\u672A\u901A\u8FC7</td></tr><tr${_scopeId}><td${_scopeId}>\u6570\u636E\u4E0D\u5B58\u5728</td><td${_scopeId}>\u7F16\u8F91/\u5220\u9664/\u751F\u6548\u5931\u6548</td><td${_scopeId}>\u7279\u8BAD\u8425\u7F16\u7801\u4E0D\u5B58\u5728\u6216\u5DF2\u5220\u9664\uFF0C\u68C0\u67E5 CAMP_CODE \u6709\u6548\u6027</td><td${_scopeId}>error</td><td${_scopeId}>\u63A5\u53E3\u8FD4\u56DE\u6570\u636E\u4E3A\u7A7A</td></tr><tr${_scopeId}><td${_scopeId}>\u72B6\u6001\u4E0D\u5141\u8BB8\u64CD\u4F5C</td><td${_scopeId}>\u751F\u6548/\u5931\u6548</td><td${_scopeId}>\u7279\u8BAD\u8425\u72B6\u6001\u4E0D\u5141\u8BB8\u8BE5\u64CD\u4F5C\uFF0C\u5982\u5DF2\u751F\u6548\u4E0D\u53EF\u518D\u751F\u6548\uFF0C\u68C0\u67E5 STATUS</td><td${_scopeId}>error</td><td${_scopeId}>\u540E\u7AEF\u6821\u9A8C\u72B6\u6001\u673A\u5931\u8D25</td></tr><tr${_scopeId}><td${_scopeId}>\u503C\u96C6\u6570\u636E\u4E0D\u663E\u793A</td><td${_scopeId}>\u4E0B\u62C9\u9009\u9879</td><td${_scopeId}>\u503C\u96C6 MBO.TRAIN_CAMP_STATUS \u7B49\u672A\u914D\u7F6E\uFF0C\u68C0\u67E5\u503C\u96C6\u914D\u7F6E</td><td${_scopeId}>warning</td><td${_scopeId}>lookupCode \u67E5\u8BE2\u8FD4\u56DE\u7A7A</td></tr><tr${_scopeId}><td${_scopeId}>\u7279\u8BAD\u8425\u7F16\u7801\u5DF2\u5B58\u5728</td><td${_scopeId}>\u65B0\u5EFA\u4FDD\u5B58</td><td${_scopeId}>\u7279\u8BAD\u8425\u7F16\u7801\u91CD\u590D\uFF0C\u66F4\u6362\u7F16\u7801\u540E\u4FDD\u5B58</td><td${_scopeId}>error</td><td${_scopeId}>\u540E\u7AEF\u6821\u9A8C CAMP_CODE \u552F\u4E00\u6027</td></tr><tr${_scopeId}><td${_scopeId}>\u62A5\u540D\u7ED3\u675F\u65F6\u95F4\u5FC5\u987B\u665A\u4E8E\u5F53\u524D\u65F6\u95F4</td><td${_scopeId}>\u62A5\u540D\u622A\u6B62\u63D0\u4EA4</td><td${_scopeId}>\u62A5\u540D\u7ED3\u675F\u65F6\u95F4\u65E9\u4E8E\u5F53\u524D\u65F6\u95F4\uFF0C\u91CD\u65B0\u9009\u62E9\u65F6\u95F4</td><td${_scopeId}>error</td><td${_scopeId}>\u540E\u7AEF\u6821\u9A8C CAMPSIGN_END_TIME &gt; SYSDATE</td></tr></tbody></table><h4${_scopeId}>\u62A5\u95191\uFF1A\u8BF7\u9009\u62E9\u4E00\u6761\u6570\u636E</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u70B9\u51FB\u7F16\u8F91\u6309\u94AE\u65F6\uFF0C\u672A\u9009\u62E9\u6570\u636E\u6216\u9009\u62E9\u4E86\u591A\u884C</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u524D\u7AEF\u5728\u6267\u884C\u7F16\u8F91\u64CD\u4F5C\u524D\u6821\u9A8C\u9009\u4E2D\u884C\u6570\u91CF\uFF0C\u82E5 selectedRows.length \u2260 1 \u5219\u963B\u6B62\u64CD\u4F5C\u5E76\u63D0\u793A&quot;\u8BF7\u9009\u62E9\u4E00\u6761\u6570\u636E&quot;\u3002\u7F16\u8F91\u64CD\u4F5C\u9700\u8981\u660E\u786E\u7684\u76EE\u6807\u7279\u8BAD\u8425\uFF0C\u672A\u9009\u62E9\u65F6\u65E0\u6CD5\u786E\u5B9A\u64CD\u4F5C\u5BF9\u8C61\uFF0C\u591A\u9009\u65F6\u64CD\u4F5C\u5BF9\u8C61\u4E0D\u552F\u4E00</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> CAMP_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7279\u8BAD\u8425\u7F16\u7801,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         CAMP_NAME </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7279\u8BAD\u8425\u540D\u79F0,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>STATUS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u72B6\u6001</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> TRAIN_CAMP</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ORDER BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> CREATION_DATE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>DESC</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95192\uFF1A\u8BF7\u9009\u62E9\u81F3\u5C11\u4E00\u6761\u6570\u636E</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u70B9\u51FB\u5220\u9664\u6216\u751F\u6548/\u5931\u6548\u6309\u94AE\u65F6\uFF0C\u672A\u9009\u62E9\u4EFB\u4F55\u6570\u636E</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u524D\u7AEF\u5728\u6267\u884C\u6279\u91CF\u64CD\u4F5C\u524D\u6821\u9A8C\u9009\u4E2D\u884C\u6570\u91CF\uFF0C\u82E5 selectedRows.length &lt; 1 \u5219\u963B\u6B62\u64CD\u4F5C\u5E76\u63D0\u793A&quot;\u8BF7\u9009\u62E9\u81F3\u5C11\u4E00\u6761\u6570\u636E&quot;\u3002\u5220\u9664\u548C\u751F\u6548/\u5931\u6548\u652F\u6301\u6279\u91CF\u64CD\u4F5C\uFF0C\u4F46\u81F3\u5C11\u9700\u8981\u4E00\u6761\u76EE\u6807\u6570\u636E</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> CAMP_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7279\u8BAD\u8425\u7F16\u7801,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         CAMP_NAME </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7279\u8BAD\u8425\u540D\u79F0,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>STATUS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u72B6\u6001</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> TRAIN_CAMP</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>STATUS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>draft</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>valid</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>invalid</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>);</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95193\uFF1A\u5F53\u524D\u72B6\u6001\u6570\u636E\u65E0\u6CD5\u7F16\u8F91\uFF01</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u70B9\u51FB\u7F16\u8F91\u6309\u94AE\u65F6\uFF0C\u7279\u8BAD\u8425\u72B6\u6001\u4E0D\u4E3A draft\uFF08\u8349\u7A3F\uFF09</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u524D\u7AEF\u6821\u9A8C STATUS = &#39;draft&#39;\uFF0C\u4EC5\u8349\u7A3F\u72B6\u6001\u7684\u7279\u8BAD\u8425\u5141\u8BB8\u7F16\u8F91\u3002\u751F\u6548\uFF08valid\uFF09\u6216\u5931\u6548\uFF08invalid\uFF09\u72B6\u6001\u7684\u7279\u8BAD\u8425\u5DF2\u88AB\u7ECF\u9500\u5546\u62A5\u540D\u70B9\u5C06\u5F15\u7528\uFF0C\u7F16\u8F91\u53EF\u80FD\u5F71\u54CD\u5DF2\u53D1\u8D77\u7684\u70B9\u5C06\u7533\u8BF7\u6570\u636E\u4E00\u81F4\u6027\uFF0C\u6545\u9650\u5236\u7F16\u8F91\u3002\u6821\u9A8C\u4E0D\u901A\u8FC7\u63D0\u793A&quot;\u5F53\u524D\u72B6\u6001\u6570\u636E\u65E0\u6CD5\u7F16\u8F91\uFF01&quot;</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> CAMP_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7279\u8BAD\u8425\u7F16\u7801,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         CAMP_NAME </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7279\u8BAD\u8425\u540D\u79F0,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>STATUS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u72B6\u6001,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         TO_CHAR(LAST_UPDATE_DATE,</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>YYYY-MM-DD HH24:MI:SS</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u6700\u540E\u66F4\u65B0\u65F6\u95F4</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> TRAIN_CAMP</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>STATUS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&lt;&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>draft</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95194\uFF1A\u8BF7\u9009\u62E9\u62A5\u540D\u7ED3\u675F\u65F6\u95F4</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u62A5\u540D\u622A\u6B62\u63D0\u4EA4\u65F6\uFF0CcampsignEndTimeCode \u5B57\u6BB5\u4E3A\u7A7A</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u524D\u7AEF\u62A5\u540D\u622A\u6B62\u5F39\u7A97\u5BF9 campsignEndTimeCode \u5B57\u6BB5\u914D\u7F6E required \u6821\u9A8C\uFF0C\u63D0\u4EA4\u524D\u6821\u9A8C\u62A5\u540D\u7ED3\u675F\u65F6\u95F4\u662F\u5426\u9009\u62E9\uFF0C\u4E3A\u7A7A\u5219\u963B\u6B62\u63D0\u4EA4\u5E76\u63D0\u793A&quot;\u8BF7\u9009\u62E9\u62A5\u540D\u7ED3\u675F\u65F6\u95F4&quot;\u3002\u62A5\u540D\u7ED3\u675F\u65F6\u95F4\u7528\u4E8E\u63A7\u5236\u7ECF\u9500\u5546\u62A5\u540D\u622A\u6B62\u65F6\u673A\uFF0C\u5FC5\u987B\u660E\u786E\u6307\u5B9A</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> CAMP_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7279\u8BAD\u8425\u7F16\u7801,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         CAMP_NAME </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7279\u8BAD\u8425\u540D\u79F0,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         TO_CHAR(PLAN_START_TIME,</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>YYYY-MM-DD</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u8BA1\u5212\u5F00\u59CB\u65F6\u95F4,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         TO_CHAR(CAMPSIGN_END_TIME,</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>YYYY-MM-DD</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u62A5\u540D\u7ED3\u675F\u65F6\u95F4</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> TRAIN_CAMP</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>STATUS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>valid</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> PLAN_START_TIME </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>SYSDATE</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> CAMPSIGN_END_TIME </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95195\uFF1A\u8BF7\u6C42\u5931\u8D25</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u8C03\u7528 mlt/trainCamp/* \u7CFB\u5217\u63A5\u53E3\u65F6\uFF0C\u540E\u7AEF\u8FD4\u56DE HTTP \u72B6\u6001\u7801\u975E 2xx</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u524D\u7AEF\u901A\u8FC7 axios \u8C03\u7528\u540E\u7AEF\u63A5\u53E3\uFF0C\u82E5\u54CD\u5E94\u72B6\u6001\u7801\u975E 2xx \u6216\u7F51\u7EDC\u5F02\u5E38\u5219\u89E6\u53D1\u9519\u8BEF\u56DE\u8C03\uFF0C\u7EDF\u4E00\u63D0\u793A&quot;\u8BF7\u6C42\u5931\u8D25&quot;\u3002\u5E38\u89C1\u6839\u56E0\u5305\u62EC\uFF1Ambo-business \u5FAE\u670D\u52A1\u672A\u542F\u52A8\u6216\u5F02\u5E38\u3001\u6570\u636E\u5E93\u8FDE\u63A5\u5931\u8D25\u3001SQL \u6267\u884C\u8D85\u65F6\u3001\u540E\u7AEF\u4E1A\u52A1\u5F02\u5E38\u672A\u6355\u83B7\uFF08\u5982\u751F\u6548\u65F6\u5B58\u5728\u5173\u8054\u70B9\u5C06\u7533\u8BF7\u4E0D\u5141\u8BB8\u5931\u6548\uFF09\u3001\u7F51\u7EDC\u4E2D\u65AD\u7B49\u3002\u9700\u68C0\u67E5 mbo-business \u5FAE\u670D\u52A1\u8FD0\u884C\u72B6\u6001\u3001\u6570\u636E\u5E93\u8FDE\u63A5\u6C60\u3001\u540E\u7AEF\u65E5\u5FD7\u5B9A\u4F4D\u5177\u4F53\u5F02\u5E38\u5806\u6808</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> CAMP_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7279\u8BAD\u8425\u7F16\u7801,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         CAMP_NAME </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7279\u8BAD\u8425\u540D\u79F0,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>STATUS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u72B6\u6001,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         TO_CHAR(LAST_UPDATE_DATE,</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>YYYY-MM-DD HH24:MI:SS</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u6700\u540E\u66F4\u65B0\u65F6\u95F4,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         LAST_UPDATED_BY </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u6700\u540E\u66F4\u65B0\u4EBA</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> TRAIN_CAMP</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> LAST_UPDATE_DATE </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>SYSDATE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>-</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>1</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ORDER BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> LAST_UPDATE_DATE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>DESC</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95196\uFF1A\u7F51\u7EDC\u5F02\u5E38/\u63A5\u53E3\u8D85\u65F6</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u4EFB\u610F\u63A5\u53E3\u8C03\u7528\u65F6\uFF0C\u7F51\u7EDC\u4E2D\u65AD\u6216\u63A5\u53E3\u54CD\u5E94\u8D85\u8FC7 axios timeout \u914D\u7F6E</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u524D\u7AEF axios \u8BF7\u6C42\u672A\u6536\u5230\u54CD\u5E94\u6216\u54CD\u5E94\u8D85\u65F6\uFF0C\u89E6\u53D1 catch \u56DE\u8C03\u7EDF\u4E00\u63D0\u793A&quot;\u8BF7\u6C42\u5931\u8D25&quot;\u3002\u5E38\u89C1\u6839\u56E0\uFF1A\u7F51\u7EDC\u4E2D\u65AD\u3001mbo-business \u670D\u52A1\u5047\u6B7B\u3001\u6570\u636E\u5E93\u6162\u67E5\u8BE2\u7B49\u3002\u9700\u68C0\u67E5\u7F51\u7EDC\u8FDE\u901A\u6027\u3001\u540E\u7AEF\u670D\u52A1\u8D1F\u8F7D\u3001\u6570\u636E\u5E93\u6027\u80FD</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> CAMP_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7279\u8BAD\u8425\u7F16\u7801, CAMP_NAME </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7279\u8BAD\u8425\u540D\u79F0, </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>STATUS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u72B6\u6001,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         TO_CHAR(LAST_UPDATE_DATE,</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>YYYY-MM-DD HH24:MI:SS</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u6700\u540E\u66F4\u65B0\u65F6\u95F4</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> TRAIN_CAMP</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> LAST_UPDATE_DATE </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>SYSDATE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>-</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>1</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ORDER BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> LAST_UPDATE_DATE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>DESC</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95197\uFF1A\u6743\u9650\u4E0D\u8DB3</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u70B9\u51FB\u65B0\u5EFA\u3001\u7F16\u8F91\u3001\u5220\u9664\u3001\u751F\u6548/\u5931\u6548\u3001\u62A5\u540D\u622A\u6B62\u7B49\u6309\u94AE\u65F6\uFF0C\u5F53\u524D\u7528\u6237\u65E0\u5BF9\u5E94 permissionList \u6743\u9650\u7801</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u524D\u7AEF Button \u7EC4\u4EF6\u901A\u8FC7 permissionList \u914D\u7F6E\u6743\u9650\u7801\uFF0CHZERO \u6846\u67B6\u6821\u9A8C\u5F53\u524D\u7528\u6237\u89D2\u8272\u662F\u5426\u5305\u542B\u8BE5\u6743\u9650\u7801\uFF0C\u672A\u5305\u542B\u5219\u6309\u94AE\u4E0D\u53EF\u89C1\u6216\u7981\u7528\u3002\u82E5\u5F3A\u5236\u8C03\u7528\u63A5\u53E3\uFF0C\u540E\u7AEF\u4E5F\u4F1A\u6821\u9A8C\u6743\u9650\u8FD4\u56DE403\u3002\u9700\u8054\u7CFB\u7BA1\u7406\u5458\u914D\u7F6E\u5BF9\u5E94\u89D2\u8272\u6743\u9650</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> U.USER_NAME </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7528\u6237\u540D, R.ROLE_NAME </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u89D2\u8272\u540D, P.PERMISSION_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u6743\u9650\u7801</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> SYS_USER U</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>LEFT JOIN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> SYS_USER_ROLE UR </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ON</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> U.USER_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> UR.USER_ID</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>LEFT JOIN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> SYS_ROLE R </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ON</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> UR.ROLE_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> R.ROLE_ID</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>LEFT JOIN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> SYS_ROLE_PERMISSION RP </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ON</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> R.ROLE_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> RP.ROLE_ID</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>LEFT JOIN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> SYS_PERMISSION P </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ON</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> RP.PERMISSION_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> P.PERMISSION_ID</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> P.PERMISSION_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>LIKE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>%train_camp%</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ORDER BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> U.USER_NAME;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95198\uFF1A\u6570\u636E\u4E0D\u5B58\u5728</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u7F16\u8F91\u3001\u5220\u9664\u3001\u751F\u6548/\u5931\u6548\u7B49\u64CD\u4F5C\u65F6\uFF0C\u63A5\u53E3\u8FD4\u56DE\u6570\u636E\u4E3A\u7A7A\u6216\u7279\u8BAD\u8425\u7F16\u7801\u4E0D\u5B58\u5728</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u524D\u7AEF\u901A\u8FC7 campCode \u8C03\u7528\u8BE6\u60C5\u63A5\u53E3\uFF0C\u540E\u7AEF\u67E5\u8BE2 TRAIN_CAMP \u8868\u65E0\u5BF9\u5E94\u8BB0\u5F55\u6216\u8BB0\u5F55\u5DF2\u903B\u8F91\u5220\u9664\uFF0C\u8FD4\u56DE\u7A7A\u6570\u636E\u3002\u5E38\u89C1\u6839\u56E0\uFF1A\u7279\u8BAD\u8425\u7F16\u7801\u9519\u8BEF\u3001\u7279\u8BAD\u8425\u5DF2\u88AB\u5220\u9664\u3001\u8DE8\u79DF\u6237\u67E5\u8BE2\u3001\u6570\u636E\u6743\u9650\u9694\u79BB\u7B49\u3002\u9700\u68C0\u67E5 CAMP_CODE \u6709\u6548\u6027\u53CA\u6570\u636E\u6743\u9650</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> CAMP_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7279\u8BAD\u8425\u7F16\u7801, CAMP_NAME </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7279\u8BAD\u8425\u540D\u79F0,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>STATUS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u72B6\u6001, DELETE_FLAG </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5220\u9664\u6807\u8BB0</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> TRAIN_CAMP</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> DELETE_FLAG </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>Y</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>OR</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> CAMP_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95199\uFF1A\u72B6\u6001\u4E0D\u5141\u8BB8\u64CD\u4F5C</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u70B9\u51FB\u751F\u6548/\u5931\u6548\u6309\u94AE\u65F6\uFF0C\u7279\u8BAD\u8425\u72B6\u6001\u4E0D\u5141\u8BB8\u8BE5\u64CD\u4F5C</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u540E\u7AEF\u6821\u9A8C\u72B6\u6001\u673A\uFF0C\u5982\u5DF2\u751F\u6548\u4E0D\u53EF\u518D\u751F\u6548\u3001\u5DF2\u5931\u6548\u4E0D\u53EF\u518D\u5931\u6548\u3001\u8349\u7A3F\u4E0D\u53EF\u76F4\u63A5\u5931\u6548\u7B49\u3002\u72B6\u6001\u4E0D\u5339\u914D\u65F6\u540E\u7AEF\u8FD4\u56DE\u4E1A\u52A1\u5F02\u5E38\u3002\u9700\u68C0\u67E5\u7279\u8BAD\u8425\u5F53\u524D\u72B6\u6001\u53CA\u64CD\u4F5C\u6D41\u7A0B</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> CAMP_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7279\u8BAD\u8425\u7F16\u7801, CAMP_NAME </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7279\u8BAD\u8425\u540D\u79F0,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>STATUS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u72B6\u6001, ERROR_INFO </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5F02\u5E38\u95EE\u9898</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> TRAIN_CAMP</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>STATUS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NOT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>draft</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>,</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>valid</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>,</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>invalid</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ORDER BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> CREATE_DATE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>DESC</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u951910\uFF1A\u503C\u96C6\u6570\u636E\u4E0D\u663E\u793A</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u67E5\u8BE2\u6761\u4EF6\u6216\u5217\u8868\u4E2D\u7279\u8BAD\u8425\u72B6\u6001\u4E0B\u62C9\u9009\u9879\u4E3A\u7A7A</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u524D\u7AEF\u901A\u8FC7 lookupCode \u67E5\u8BE2\u503C\u96C6 MBO.TRAIN_CAMP_STATUS \u7B49\uFF0C\u503C\u96C6\u672A\u914D\u7F6E\u6216\u672A\u542F\u7528\u5219\u4E0B\u62C9\u9009\u9879\u4E3A\u7A7A\u3002\u9700\u5728\u503C\u96C6\u7BA1\u7406\u9875\u9762\u914D\u7F6E\u5BF9\u5E94\u503C\u96C6</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> LOOKUP_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u503C\u96C6\u7F16\u7801, LOOKUP_VALUE_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u503C\u7F16\u7801,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         LOOKUP_VALUE_NAME </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u503C\u540D\u79F0, ENABLE_FLAG </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u542F\u7528\u6807\u8BB0</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> SYS_LOOKUP_VALUE</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> LOOKUP_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>MBO.TRAIN_CAMP_STATUS</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>,</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>MBO.CAMP_TYPE</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> ENABLE_FLAG </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>N</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ORDER BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> LOOKUP_CODE;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u951911\uFF1A\u7279\u8BAD\u8425\u7F16\u7801\u5DF2\u5B58\u5728</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u65B0\u5EFA\u7279\u8BAD\u8425\u4FDD\u5B58\u65F6\uFF0CCAMP_CODE \u5DF2\u5B58\u5728\u4E8E TRAIN_CAMP \u8868</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u540E\u7AEF\u6821\u9A8C CAMP_CODE \u552F\u4E00\u6027\uFF0C\u82E5\u5DF2\u5B58\u5728\u5219\u8FD4\u56DE\u4E1A\u52A1\u5F02\u5E38\u3002\u9700\u66F4\u6362\u7279\u8BAD\u8425\u7F16\u7801\u540E\u4FDD\u5B58</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> CAMP_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7279\u8BAD\u8425\u7F16\u7801, </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}>COUNT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>*</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u91CD\u590D\u6570</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> TRAIN_CAMP</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> DELETE_FLAG </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>N</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>GROUP BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> CAMP_CODE</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>HAVING</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}>COUNT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>*</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>1</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u951912\uFF1A\u62A5\u540D\u7ED3\u675F\u65F6\u95F4\u5FC5\u987B\u665A\u4E8E\u5F53\u524D\u65F6\u95F4</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u62A5\u540D\u622A\u6B62\u63D0\u4EA4\u65F6\uFF0CCAMPSIGN_END_TIME &lt;= SYSDATE</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u540E\u7AEF\u6821\u9A8C\u62A5\u540D\u7ED3\u675F\u65F6\u95F4\u5FC5\u987B\u665A\u4E8E\u5F53\u524D\u65F6\u95F4\uFF0C\u5426\u5219\u7ECF\u9500\u5546\u65E0\u6CD5\u62A5\u540D\u3002\u9700\u91CD\u65B0\u9009\u62E9\u62A5\u540D\u7ED3\u675F\u65F6\u95F4</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> CAMP_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7279\u8BAD\u8425\u7F16\u7801, CAMP_NAME </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7279\u8BAD\u8425\u540D\u79F0,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         TO_CHAR(CAMPSIGN_END_TIME,</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>YYYY-MM-DD</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u62A5\u540D\u7ED3\u675F\u65F6\u95F4,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         TO_CHAR(</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>SYSDATE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>,</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>YYYY-MM-DD</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5F53\u524D\u65F6\u95F4</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> TRAIN_CAMP</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> CAMPSIGN_END_TIME </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NOT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> CAMPSIGN_END_TIME </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&lt;=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>SYSDATE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
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
                createVNode("td", null, "\u8BF7\u9009\u62E9\u4E00\u6761\u6570\u636E"),
                createVNode("td", null, "\u7F16\u8F91\u6309\u94AE"),
                createVNode("td", null, "\u672A\u9009\u62E9\u6216\u9009\u62E9\u591A\u884C\uFF1B\u9009\u62E9\u4E00\u6761\u6570\u636E\u540E\u64CD\u4F5C"),
                createVNode("td", null, "\u666E\u901A"),
                createVNode("td", null, "\u524D\u7AEF\u9009\u4E2D\u884C\u6570\u6821\u9A8C")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u8BF7\u9009\u62E9\u81F3\u5C11\u4E00\u6761\u6570\u636E"),
                createVNode("td", null, "\u5220\u9664/\u751F\u6548"),
                createVNode("td", null, "\u672A\u9009\u62E9\u6570\u636E\uFF1B\u9009\u62E9\u81F3\u5C11\u4E00\u6761\u6570\u636E\u540E\u64CD\u4F5C"),
                createVNode("td", null, "\u666E\u901A"),
                createVNode("td", null, "\u524D\u7AEF\u9009\u4E2D\u884C\u6570\u6821\u9A8C")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5F53\u524D\u72B6\u6001\u6570\u636E\u65E0\u6CD5\u7F16\u8F91\uFF01"),
                createVNode("td", null, "\u7F16\u8F91\u6309\u94AE"),
                createVNode("td", null, "\u7279\u8BAD\u8425\u72B6\u6001\u975Edraft\uFF1B\u4EC5\u8349\u7A3F\u72B6\u6001\u53EF\u7F16\u8F91"),
                createVNode("td", null, "\u666E\u901A"),
                createVNode("td", null, "\u524D\u7AEF STATUS \u72B6\u6001\u6821\u9A8C")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u8BF7\u9009\u62E9\u62A5\u540D\u7ED3\u675F\u65F6\u95F4"),
                createVNode("td", null, "\u62A5\u540D\u622A\u6B62\u63D0\u4EA4"),
                createVNode("td", null, "\u672A\u9009\u62E9\u65F6\u95F4\uFF1B\u9009\u62E9\u62A5\u540D\u7ED3\u675F\u65F6\u95F4\u540E\u63D0\u4EA4"),
                createVNode("td", null, "\u666E\u901A"),
                createVNode("td", null, "\u524D\u7AEF campsignEndTimeCode \u5FC5\u586B\u6821\u9A8C")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u8BF7\u6C42\u5931\u8D25"),
                createVNode("td", null, "\u63A5\u53E3\u8C03\u7528"),
                createVNode("td", null, "\u540E\u7AEF\u670D\u52A1\u5F02\u5E38\uFF1B\u68C0\u67E5\u540E\u7AEF\u670D\u52A1\u72B6\u6001"),
                createVNode("td", null, "\u4E25\u91CD"),
                createVNode("td", null, "HTTP\u8BF7\u6C42\u5F02\u5E38\u6355\u83B7")
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
                createVNode("td", null, "\u7F16\u8F91/\u5220\u9664/\u751F\u6548\u5931\u6548"),
                createVNode("td", null, "\u7279\u8BAD\u8425\u7F16\u7801\u4E0D\u5B58\u5728\u6216\u5DF2\u5220\u9664\uFF0C\u68C0\u67E5 CAMP_CODE \u6709\u6548\u6027"),
                createVNode("td", null, "error"),
                createVNode("td", null, "\u63A5\u53E3\u8FD4\u56DE\u6570\u636E\u4E3A\u7A7A")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u72B6\u6001\u4E0D\u5141\u8BB8\u64CD\u4F5C"),
                createVNode("td", null, "\u751F\u6548/\u5931\u6548"),
                createVNode("td", null, "\u7279\u8BAD\u8425\u72B6\u6001\u4E0D\u5141\u8BB8\u8BE5\u64CD\u4F5C\uFF0C\u5982\u5DF2\u751F\u6548\u4E0D\u53EF\u518D\u751F\u6548\uFF0C\u68C0\u67E5 STATUS"),
                createVNode("td", null, "error"),
                createVNode("td", null, "\u540E\u7AEF\u6821\u9A8C\u72B6\u6001\u673A\u5931\u8D25")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u503C\u96C6\u6570\u636E\u4E0D\u663E\u793A"),
                createVNode("td", null, "\u4E0B\u62C9\u9009\u9879"),
                createVNode("td", null, "\u503C\u96C6 MBO.TRAIN_CAMP_STATUS \u7B49\u672A\u914D\u7F6E\uFF0C\u68C0\u67E5\u503C\u96C6\u914D\u7F6E"),
                createVNode("td", null, "warning"),
                createVNode("td", null, "lookupCode \u67E5\u8BE2\u8FD4\u56DE\u7A7A")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7279\u8BAD\u8425\u7F16\u7801\u5DF2\u5B58\u5728"),
                createVNode("td", null, "\u65B0\u5EFA\u4FDD\u5B58"),
                createVNode("td", null, "\u7279\u8BAD\u8425\u7F16\u7801\u91CD\u590D\uFF0C\u66F4\u6362\u7F16\u7801\u540E\u4FDD\u5B58"),
                createVNode("td", null, "error"),
                createVNode("td", null, "\u540E\u7AEF\u6821\u9A8C CAMP_CODE \u552F\u4E00\u6027")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u62A5\u540D\u7ED3\u675F\u65F6\u95F4\u5FC5\u987B\u665A\u4E8E\u5F53\u524D\u65F6\u95F4"),
                createVNode("td", null, "\u62A5\u540D\u622A\u6B62\u63D0\u4EA4"),
                createVNode("td", null, "\u62A5\u540D\u7ED3\u675F\u65F6\u95F4\u65E9\u4E8E\u5F53\u524D\u65F6\u95F4\uFF0C\u91CD\u65B0\u9009\u62E9\u65F6\u95F4"),
                createVNode("td", null, "error"),
                createVNode("td", null, "\u540E\u7AEF\u6821\u9A8C CAMPSIGN_END_TIME > SYSDATE")
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95191\uFF1A\u8BF7\u9009\u62E9\u4E00\u6761\u6570\u636E"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u70B9\u51FB\u7F16\u8F91\u6309\u94AE\u65F6\uFF0C\u672A\u9009\u62E9\u6570\u636E\u6216\u9009\u62E9\u4E86\u591A\u884C")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode('\uFF1A\u524D\u7AEF\u5728\u6267\u884C\u7F16\u8F91\u64CD\u4F5C\u524D\u6821\u9A8C\u9009\u4E2D\u884C\u6570\u91CF\uFF0C\u82E5 selectedRows.length \u2260 1 \u5219\u963B\u6B62\u64CD\u4F5C\u5E76\u63D0\u793A"\u8BF7\u9009\u62E9\u4E00\u6761\u6570\u636E"\u3002\u7F16\u8F91\u64CD\u4F5C\u9700\u8981\u660E\u786E\u7684\u76EE\u6807\u7279\u8BAD\u8425\uFF0C\u672A\u9009\u62E9\u65F6\u65E0\u6CD5\u786E\u5B9A\u64CD\u4F5C\u5BF9\u8C61\uFF0C\u591A\u9009\u65F6\u64CD\u4F5C\u5BF9\u8C61\u4E0D\u552F\u4E00')
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " CAMP_CODE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7279\u8BAD\u8425\u7F16\u7801,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         CAMP_NAME "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7279\u8BAD\u8425\u540D\u79F0,")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " TRAIN_CAMP")
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
          createVNode("h4", null, "\u62A5\u95192\uFF1A\u8BF7\u9009\u62E9\u81F3\u5C11\u4E00\u6761\u6570\u636E"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u70B9\u51FB\u5220\u9664\u6216\u751F\u6548/\u5931\u6548\u6309\u94AE\u65F6\uFF0C\u672A\u9009\u62E9\u4EFB\u4F55\u6570\u636E")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode('\uFF1A\u524D\u7AEF\u5728\u6267\u884C\u6279\u91CF\u64CD\u4F5C\u524D\u6821\u9A8C\u9009\u4E2D\u884C\u6570\u91CF\uFF0C\u82E5 selectedRows.length < 1 \u5219\u963B\u6B62\u64CD\u4F5C\u5E76\u63D0\u793A"\u8BF7\u9009\u62E9\u81F3\u5C11\u4E00\u6761\u6570\u636E"\u3002\u5220\u9664\u548C\u751F\u6548/\u5931\u6548\u652F\u6301\u6279\u91CF\u64CD\u4F5C\uFF0C\u4F46\u81F3\u5C11\u9700\u8981\u4E00\u6761\u76EE\u6807\u6570\u636E')
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " CAMP_CODE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7279\u8BAD\u8425\u7F16\u7801,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         CAMP_NAME "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7279\u8BAD\u8425\u540D\u79F0,")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " TRAIN_CAMP")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "STATUS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IN"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " ("),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "draft"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ", "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "valid"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ", "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "invalid"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ");")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95193\uFF1A\u5F53\u524D\u72B6\u6001\u6570\u636E\u65E0\u6CD5\u7F16\u8F91\uFF01"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u70B9\u51FB\u7F16\u8F91\u6309\u94AE\u65F6\uFF0C\u7279\u8BAD\u8425\u72B6\u6001\u4E0D\u4E3A draft\uFF08\u8349\u7A3F\uFF09")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode(`\uFF1A\u524D\u7AEF\u6821\u9A8C STATUS = 'draft'\uFF0C\u4EC5\u8349\u7A3F\u72B6\u6001\u7684\u7279\u8BAD\u8425\u5141\u8BB8\u7F16\u8F91\u3002\u751F\u6548\uFF08valid\uFF09\u6216\u5931\u6548\uFF08invalid\uFF09\u72B6\u6001\u7684\u7279\u8BAD\u8425\u5DF2\u88AB\u7ECF\u9500\u5546\u62A5\u540D\u70B9\u5C06\u5F15\u7528\uFF0C\u7F16\u8F91\u53EF\u80FD\u5F71\u54CD\u5DF2\u53D1\u8D77\u7684\u70B9\u5C06\u7533\u8BF7\u6570\u636E\u4E00\u81F4\u6027\uFF0C\u6545\u9650\u5236\u7F16\u8F91\u3002\u6821\u9A8C\u4E0D\u901A\u8FC7\u63D0\u793A"\u5F53\u524D\u72B6\u6001\u6570\u636E\u65E0\u6CD5\u7F16\u8F91\uFF01"`)
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " CAMP_CODE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7279\u8BAD\u8425\u7F16\u7801,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         CAMP_NAME "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7279\u8BAD\u8425\u540D\u79F0,")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " TRAIN_CAMP")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "STATUS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "<>"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "draft"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95194\uFF1A\u8BF7\u9009\u62E9\u62A5\u540D\u7ED3\u675F\u65F6\u95F4"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u62A5\u540D\u622A\u6B62\u63D0\u4EA4\u65F6\uFF0CcampsignEndTimeCode \u5B57\u6BB5\u4E3A\u7A7A")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode('\uFF1A\u524D\u7AEF\u62A5\u540D\u622A\u6B62\u5F39\u7A97\u5BF9 campsignEndTimeCode \u5B57\u6BB5\u914D\u7F6E required \u6821\u9A8C\uFF0C\u63D0\u4EA4\u524D\u6821\u9A8C\u62A5\u540D\u7ED3\u675F\u65F6\u95F4\u662F\u5426\u9009\u62E9\uFF0C\u4E3A\u7A7A\u5219\u963B\u6B62\u63D0\u4EA4\u5E76\u63D0\u793A"\u8BF7\u9009\u62E9\u62A5\u540D\u7ED3\u675F\u65F6\u95F4"\u3002\u62A5\u540D\u7ED3\u675F\u65F6\u95F4\u7528\u4E8E\u63A7\u5236\u7ECF\u9500\u5546\u62A5\u540D\u622A\u6B62\u65F6\u673A\uFF0C\u5FC5\u987B\u660E\u786E\u6307\u5B9A')
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " CAMP_CODE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7279\u8BAD\u8425\u7F16\u7801,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         CAMP_NAME "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7279\u8BAD\u8425\u540D\u79F0,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         TO_CHAR(PLAN_START_TIME,"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "YYYY-MM-DD"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u8BA1\u5212\u5F00\u59CB\u65F6\u95F4,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         TO_CHAR(CAMPSIGN_END_TIME,"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "YYYY-MM-DD"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u62A5\u540D\u7ED3\u675F\u65F6\u95F4")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " TRAIN_CAMP")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "STATUS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "valid"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " PLAN_START_TIME "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#C792EA" } }, "SYSDATE")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " CAMPSIGN_END_TIME "),
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
          createVNode("h4", null, "\u62A5\u95195\uFF1A\u8BF7\u6C42\u5931\u8D25"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u8C03\u7528 mlt/trainCamp/* \u7CFB\u5217\u63A5\u53E3\u65F6\uFF0C\u540E\u7AEF\u8FD4\u56DE HTTP \u72B6\u6001\u7801\u975E 2xx")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode('\uFF1A\u524D\u7AEF\u901A\u8FC7 axios \u8C03\u7528\u540E\u7AEF\u63A5\u53E3\uFF0C\u82E5\u54CD\u5E94\u72B6\u6001\u7801\u975E 2xx \u6216\u7F51\u7EDC\u5F02\u5E38\u5219\u89E6\u53D1\u9519\u8BEF\u56DE\u8C03\uFF0C\u7EDF\u4E00\u63D0\u793A"\u8BF7\u6C42\u5931\u8D25"\u3002\u5E38\u89C1\u6839\u56E0\u5305\u62EC\uFF1Ambo-business \u5FAE\u670D\u52A1\u672A\u542F\u52A8\u6216\u5F02\u5E38\u3001\u6570\u636E\u5E93\u8FDE\u63A5\u5931\u8D25\u3001SQL \u6267\u884C\u8D85\u65F6\u3001\u540E\u7AEF\u4E1A\u52A1\u5F02\u5E38\u672A\u6355\u83B7\uFF08\u5982\u751F\u6548\u65F6\u5B58\u5728\u5173\u8054\u70B9\u5C06\u7533\u8BF7\u4E0D\u5141\u8BB8\u5931\u6548\uFF09\u3001\u7F51\u7EDC\u4E2D\u65AD\u7B49\u3002\u9700\u68C0\u67E5 mbo-business \u5FAE\u670D\u52A1\u8FD0\u884C\u72B6\u6001\u3001\u6570\u636E\u5E93\u8FDE\u63A5\u6C60\u3001\u540E\u7AEF\u65E5\u5FD7\u5B9A\u4F4D\u5177\u4F53\u5F02\u5E38\u5806\u6808')
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " CAMP_CODE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7279\u8BAD\u8425\u7F16\u7801,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         CAMP_NAME "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7279\u8BAD\u8425\u540D\u79F0,")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " TRAIN_CAMP")
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
          createVNode("h4", null, "\u62A5\u95196\uFF1A\u7F51\u7EDC\u5F02\u5E38/\u63A5\u53E3\u8D85\u65F6"),
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " CAMP_CODE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7279\u8BAD\u8425\u7F16\u7801, CAMP_NAME "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7279\u8BAD\u8425\u540D\u79F0, "),
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " TRAIN_CAMP")
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
              createTextVNode("\uFF1A\u70B9\u51FB\u65B0\u5EFA\u3001\u7F16\u8F91\u3001\u5220\u9664\u3001\u751F\u6548/\u5931\u6548\u3001\u62A5\u540D\u622A\u6B62\u7B49\u6309\u94AE\u65F6\uFF0C\u5F53\u524D\u7528\u6237\u65E0\u5BF9\u5E94 permissionList \u6743\u9650\u7801")
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
                  createVNode("span", { style: { "color": "#C3E88D" } }, "%train_camp%"),
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
          createVNode("h4", null, "\u62A5\u95198\uFF1A\u6570\u636E\u4E0D\u5B58\u5728"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u7F16\u8F91\u3001\u5220\u9664\u3001\u751F\u6548/\u5931\u6548\u7B49\u64CD\u4F5C\u65F6\uFF0C\u63A5\u53E3\u8FD4\u56DE\u6570\u636E\u4E3A\u7A7A\u6216\u7279\u8BAD\u8425\u7F16\u7801\u4E0D\u5B58\u5728")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u524D\u7AEF\u901A\u8FC7 campCode \u8C03\u7528\u8BE6\u60C5\u63A5\u53E3\uFF0C\u540E\u7AEF\u67E5\u8BE2 TRAIN_CAMP \u8868\u65E0\u5BF9\u5E94\u8BB0\u5F55\u6216\u8BB0\u5F55\u5DF2\u903B\u8F91\u5220\u9664\uFF0C\u8FD4\u56DE\u7A7A\u6570\u636E\u3002\u5E38\u89C1\u6839\u56E0\uFF1A\u7279\u8BAD\u8425\u7F16\u7801\u9519\u8BEF\u3001\u7279\u8BAD\u8425\u5DF2\u88AB\u5220\u9664\u3001\u8DE8\u79DF\u6237\u67E5\u8BE2\u3001\u6570\u636E\u6743\u9650\u9694\u79BB\u7B49\u3002\u9700\u68C0\u67E5 CAMP_CODE \u6709\u6548\u6027\u53CA\u6570\u636E\u6743\u9650")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " CAMP_CODE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7279\u8BAD\u8425\u7F16\u7801, CAMP_NAME "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7279\u8BAD\u8425\u540D\u79F0,")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " TRAIN_CAMP")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " CAMP_CODE "),
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
              createTextVNode("\uFF1A\u70B9\u51FB\u751F\u6548/\u5931\u6548\u6309\u94AE\u65F6\uFF0C\u7279\u8BAD\u8425\u72B6\u6001\u4E0D\u5141\u8BB8\u8BE5\u64CD\u4F5C")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u540E\u7AEF\u6821\u9A8C\u72B6\u6001\u673A\uFF0C\u5982\u5DF2\u751F\u6548\u4E0D\u53EF\u518D\u751F\u6548\u3001\u5DF2\u5931\u6548\u4E0D\u53EF\u518D\u5931\u6548\u3001\u8349\u7A3F\u4E0D\u53EF\u76F4\u63A5\u5931\u6548\u7B49\u3002\u72B6\u6001\u4E0D\u5339\u914D\u65F6\u540E\u7AEF\u8FD4\u56DE\u4E1A\u52A1\u5F02\u5E38\u3002\u9700\u68C0\u67E5\u7279\u8BAD\u8425\u5F53\u524D\u72B6\u6001\u53CA\u64CD\u4F5C\u6D41\u7A0B")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " CAMP_CODE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7279\u8BAD\u8425\u7F16\u7801, CAMP_NAME "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7279\u8BAD\u8425\u540D\u79F0,")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " TRAIN_CAMP")
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
                  createVNode("span", { style: { "color": "#C3E88D" } }, "draft"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ","),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "valid"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ","),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "invalid"),
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
              createTextVNode("\uFF1A\u67E5\u8BE2\u6761\u4EF6\u6216\u5217\u8868\u4E2D\u7279\u8BAD\u8425\u72B6\u6001\u4E0B\u62C9\u9009\u9879\u4E3A\u7A7A")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u524D\u7AEF\u901A\u8FC7 lookupCode \u67E5\u8BE2\u503C\u96C6 MBO.TRAIN_CAMP_STATUS \u7B49\uFF0C\u503C\u96C6\u672A\u914D\u7F6E\u6216\u672A\u542F\u7528\u5219\u4E0B\u62C9\u9009\u9879\u4E3A\u7A7A\u3002\u9700\u5728\u503C\u96C6\u7BA1\u7406\u9875\u9762\u914D\u7F6E\u5BF9\u5E94\u503C\u96C6")
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
                  createVNode("span", { style: { "color": "#C3E88D" } }, "MBO.TRAIN_CAMP_STATUS"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ","),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "MBO.CAMP_TYPE"),
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
          createVNode("h4", null, "\u62A5\u951911\uFF1A\u7279\u8BAD\u8425\u7F16\u7801\u5DF2\u5B58\u5728"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u65B0\u5EFA\u7279\u8BAD\u8425\u4FDD\u5B58\u65F6\uFF0CCAMP_CODE \u5DF2\u5B58\u5728\u4E8E TRAIN_CAMP \u8868")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u540E\u7AEF\u6821\u9A8C CAMP_CODE \u552F\u4E00\u6027\uFF0C\u82E5\u5DF2\u5B58\u5728\u5219\u8FD4\u56DE\u4E1A\u52A1\u5F02\u5E38\u3002\u9700\u66F4\u6362\u7279\u8BAD\u8425\u7F16\u7801\u540E\u4FDD\u5B58")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " CAMP_CODE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7279\u8BAD\u8425\u7F16\u7801, "),
                  createVNode("span", { style: { "color": "#82AAFF" } }, "COUNT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "("),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "*"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u91CD\u590D\u6570")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " TRAIN_CAMP")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " DELETE_FLAG "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "N"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "GROUP BY"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " CAMP_CODE")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "HAVING"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#82AAFF" } }, "COUNT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "("),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "*"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "1"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u951912\uFF1A\u62A5\u540D\u7ED3\u675F\u65F6\u95F4\u5FC5\u987B\u665A\u4E8E\u5F53\u524D\u65F6\u95F4"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u62A5\u540D\u622A\u6B62\u63D0\u4EA4\u65F6\uFF0CCAMPSIGN_END_TIME <= SYSDATE")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u540E\u7AEF\u6821\u9A8C\u62A5\u540D\u7ED3\u675F\u65F6\u95F4\u5FC5\u987B\u665A\u4E8E\u5F53\u524D\u65F6\u95F4\uFF0C\u5426\u5219\u7ECF\u9500\u5546\u65E0\u6CD5\u62A5\u540D\u3002\u9700\u91CD\u65B0\u9009\u62E9\u62A5\u540D\u7ED3\u675F\u65F6\u95F4")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " CAMP_CODE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7279\u8BAD\u8425\u7F16\u7801, CAMP_NAME "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7279\u8BAD\u8425\u540D\u79F0,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         TO_CHAR(CAMPSIGN_END_TIME,"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "YYYY-MM-DD"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u62A5\u540D\u7ED3\u675F\u65F6\u95F4,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         TO_CHAR("),
                  createVNode("span", { style: { "color": "#C792EA" } }, "SYSDATE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ","),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "YYYY-MM-DD"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5F53\u524D\u65F6\u95F4")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " TRAIN_CAMP")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " CAMPSIGN_END_TIME "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NOT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NULL"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " CAMPSIGN_END_TIME "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "<="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#C792EA" } }, "SYSDATE"),
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
        _push2(`<p${_scopeId}><strong${_scopeId}>Q1\uFF1A\u62A5\u540D\u622A\u6B62\u6309\u94AE\u4E0D\u663E\u793A\uFF1F</strong></p><p${_scopeId}>A\uFF1A\u68C0\u67E5\u7279\u8BAD\u8425\u72B6\u6001\u662F\u5426\u4E3A <code${_scopeId}>valid</code>\uFF0C\u8BA1\u5212\u5F00\u59CB\u65F6\u95F4\u662F\u5426\u665A\u4E8E\u5F53\u524D\u65F6\u95F4\u3002</p><p${_scopeId}><strong${_scopeId}>Q2\uFF1A\u7F16\u8F91\u6309\u94AE\u63D0\u793A\u65E0\u6CD5\u7F16\u8F91\uFF1F</strong></p><p${_scopeId}>A\uFF1A\u786E\u8BA4\u7279\u8BAD\u8425\u72B6\u6001\u4E3A <code${_scopeId}>draft</code>\uFF0C\u975E\u8349\u7A3F\u72B6\u6001\u4E0D\u53EF\u7F16\u8F91\u3002</p><p${_scopeId}><strong${_scopeId}>Q3\uFF1A\u751F\u6548/\u5931\u6548\u8FD4\u56DE\u9519\u8BEF\u4FE1\u606F\uFF1F</strong></p><p${_scopeId}>A\uFF1A\u68C0\u67E5\u63A5\u53E3\u8FD4\u56DE <code${_scopeId}>res.data</code> \u5185\u5BB9\uFF0C\u53EF\u80FD\u6709\u4E1A\u52A1\u6821\u9A8C\u4E0D\u901A\u8FC7\u3002</p><table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u95EE\u9898</th><th${_scopeId}>\u6392\u67E5\u65B9\u5F0F</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u62A5\u540D\u622A\u6B62\u6309\u94AE\u4E0D\u663E\u793A</td><td${_scopeId}>\u68C0\u67E5 STATUS \u662F\u5426\u4E3A valid\uFF0CPLAN_START_TIME \u662F\u5426\u665A\u4E8E\u5F53\u524D\u65F6\u95F4</td></tr><tr${_scopeId}><td${_scopeId}>\u7F16\u8F91\u6309\u94AE\u63D0\u793A\u65E0\u6CD5\u7F16\u8F91</td><td${_scopeId}>\u786E\u8BA4 STATUS \u4E3A draft\uFF0C\u975E\u8349\u7A3F\u72B6\u6001\u4E0D\u53EF\u7F16\u8F91</td></tr><tr${_scopeId}><td${_scopeId}>\u751F\u6548/\u5931\u6548\u8FD4\u56DE\u9519\u8BEF\u4FE1\u606F</td><td${_scopeId}>\u68C0\u67E5\u63A5\u53E3\u8FD4\u56DE res.data \u5185\u5BB9\uFF0C\u53EF\u80FD\u6709\u4E1A\u52A1\u6821\u9A8C\u4E0D\u901A\u8FC7</td></tr></tbody></table>`);
      } else {
        return [
          createVNode("p", null, [
            createVNode("strong", null, "Q1\uFF1A\u62A5\u540D\u622A\u6B62\u6309\u94AE\u4E0D\u663E\u793A\uFF1F")
          ]),
          createVNode("p", null, [
            createTextVNode("A\uFF1A\u68C0\u67E5\u7279\u8BAD\u8425\u72B6\u6001\u662F\u5426\u4E3A "),
            createVNode("code", null, "valid"),
            createTextVNode("\uFF0C\u8BA1\u5212\u5F00\u59CB\u65F6\u95F4\u662F\u5426\u665A\u4E8E\u5F53\u524D\u65F6\u95F4\u3002")
          ]),
          createVNode("p", null, [
            createVNode("strong", null, "Q2\uFF1A\u7F16\u8F91\u6309\u94AE\u63D0\u793A\u65E0\u6CD5\u7F16\u8F91\uFF1F")
          ]),
          createVNode("p", null, [
            createTextVNode("A\uFF1A\u786E\u8BA4\u7279\u8BAD\u8425\u72B6\u6001\u4E3A "),
            createVNode("code", null, "draft"),
            createTextVNode("\uFF0C\u975E\u8349\u7A3F\u72B6\u6001\u4E0D\u53EF\u7F16\u8F91\u3002")
          ]),
          createVNode("p", null, [
            createVNode("strong", null, "Q3\uFF1A\u751F\u6548/\u5931\u6548\u8FD4\u56DE\u9519\u8BEF\u4FE1\u606F\uFF1F")
          ]),
          createVNode("p", null, [
            createTextVNode("A\uFF1A\u68C0\u67E5\u63A5\u53E3\u8FD4\u56DE "),
            createVNode("code", null, "res.data"),
            createTextVNode(" \u5185\u5BB9\uFF0C\u53EF\u80FD\u6709\u4E1A\u52A1\u6821\u9A8C\u4E0D\u901A\u8FC7\u3002")
          ]),
          createVNode("table", { class: "kb-field-tbl" }, [
            createVNode("thead", null, [
              createVNode("tr", null, [
                createVNode("th", null, "\u95EE\u9898"),
                createVNode("th", null, "\u6392\u67E5\u65B9\u5F0F")
              ])
            ]),
            createVNode("tbody", null, [
              createVNode("tr", null, [
                createVNode("td", null, "\u62A5\u540D\u622A\u6B62\u6309\u94AE\u4E0D\u663E\u793A"),
                createVNode("td", null, "\u68C0\u67E5 STATUS \u662F\u5426\u4E3A valid\uFF0CPLAN_START_TIME \u662F\u5426\u665A\u4E8E\u5F53\u524D\u65F6\u95F4")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7F16\u8F91\u6309\u94AE\u63D0\u793A\u65E0\u6CD5\u7F16\u8F91"),
                createVNode("td", null, "\u786E\u8BA4 STATUS \u4E3A draft\uFF0C\u975E\u8349\u7A3F\u72B6\u6001\u4E0D\u53EF\u7F16\u8F91")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u751F\u6548/\u5931\u6548\u8FD4\u56DE\u9519\u8BEF\u4FE1\u606F"),
                createVNode("td", null, "\u68C0\u67E5\u63A5\u53E3\u8FD4\u56DE res.data \u5185\u5BB9\uFF0C\u53EF\u80FD\u6709\u4E1A\u52A1\u6821\u9A8C\u4E0D\u901A\u8FC7")
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
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u65E5\u671F</th><th${_scopeId}>\u63D0\u4EA4ID</th><th${_scopeId}>\u63D0\u4EA4\u4EBA</th><th${_scopeId}>\u63D0\u4EA4\u5185\u5BB9</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>2025-11-12</td><td${_scopeId}>-</td><td${_scopeId}>hfy</td><td${_scopeId}>\u521D\u59CB\u521B\u5EFA</td></tr><tr${_scopeId}><td${_scopeId}>2026-08-28</td><td${_scopeId}>-</td><td${_scopeId}>AI</td><td${_scopeId}>\u5B8C\u6574\u91CD\u5199\uFF0C\u8865\u5145\u4E1A\u52A1\u6D41\u7A0B\u3001\u754C\u9762\u6A21\u5757\u3001\u6570\u636E\u5E93\u8868\u3001FAQ\u7B49</td></tr><tr${_scopeId}><td${_scopeId}>2026-08-30</td><td${_scopeId}>-</td><td${_scopeId}>AI</td><td${_scopeId}>\u6309skill\u89C4\u8303\u683C\u5F0F\u91CD\u5199\uFF0C\u4FEE\u6B63\u6570\u636E\u5E93\u8868\u4E3ATRAIN_CAMP\uFF0C\u8865\u5145API\u63A5\u53E3\u4E0E\u6309\u94AE\u903B\u8F91</td></tr></tbody></table>`);
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
                createVNode("td", null, "2026-08-28"),
                createVNode("td", null, "-"),
                createVNode("td", null, "AI"),
                createVNode("td", null, "\u5B8C\u6574\u91CD\u5199\uFF0C\u8865\u5145\u4E1A\u52A1\u6D41\u7A0B\u3001\u754C\u9762\u6A21\u5757\u3001\u6570\u636E\u5E93\u8868\u3001FAQ\u7B49")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "2026-08-30"),
                createVNode("td", null, "-"),
                createVNode("td", null, "AI"),
                createVNode("td", null, "\u6309skill\u89C4\u8303\u683C\u5F0F\u91CD\u5199\uFF0C\u4FEE\u6B63\u6570\u636E\u5E93\u8868\u4E3ATRAIN_CAMP\uFF0C\u8865\u5145API\u63A5\u53E3\u4E0E\u6309\u94AE\u903B\u8F91")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("\u70B9\u5C06\u7BA1\u7406/\u7279\u8BAD\u8425\u7BA1\u7406/\u7279\u8BAD\u8425\u7BA1\u7406/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
