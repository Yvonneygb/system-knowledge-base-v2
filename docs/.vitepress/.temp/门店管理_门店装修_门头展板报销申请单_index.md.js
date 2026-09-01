import { resolveComponent, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.6ab74304.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"\u95E8\u5E97\u7BA1\u7406/\u95E8\u5E97\u88C5\u4FEE/\u95E8\u5934\u5C55\u677F\u62A5\u9500\u7533\u8BF7\u5355/index.md"}');
const _sfc_main = { name: "\u95E8\u5E97\u7BA1\u7406/\u95E8\u5E97\u88C5\u4FEE/\u95E8\u5934\u5C55\u677F\u62A5\u9500\u7533\u8BF7\u5355/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_BreadcrumbTabs = resolveComponent("BreadcrumbTabs");
  const _component_KbCard = resolveComponent("KbCard");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_BreadcrumbTabs, null, null, _parent));
  _push(`<div id="biz-intro" style="${ssrRenderStyle({ "display": "none" })}"><div class="tab-pad"><div class="kl-wrap"><div class="kl-card"><div class="biz-kl-hdr"><span class="biz-tag" style="${ssrRenderStyle({ "background": "rgba(124,58,237,0.08)", "color": "#7C3AED", "border-color": "rgba(124,58,237,0.18)" })}"> \u5B9A\u4E49</span><h2>\u95E8\u5934\u5C55\u677F\u62A5\u9500\u7533\u8BF7\u5355\u662F\u4EC0\u4E48</h2><p>\u7ECF\u9500\u5546\u4E3A\u95E8\u5E97\u95E8\u5934\u3001\u5C55\u677F\u5236\u4F5C\u8D39\u7528\u63D0\u51FA\u62A5\u9500\u7533\u8BF7\uFF0C\u6309\u8865\u8D34\u653F\u7B56\u533A\u5206\u989D\u5EA6\u5185\u4E0E\u989D\u5EA6\u5916\u91D1\u989D\uFF0C\u7ECF\u5BA1\u6279\u901A\u8FC7\u540E\u53EF\u53D1\u8D77\u95E8\u5934\u5151\u73B0</p></div><div class="biz-2col-inner"><div class="kl-col-box"><div style="${ssrRenderStyle({ "display": "flex", "align-items": "center", "gap": "10px", "margin-bottom": "12px" })}"><div style="${ssrRenderStyle({ "width": "40px", "height": "40px", "border-radius": "10px", "display": "flex", "align-items": "center", "justify-content": "center", "background": "linear-gradient(135deg,#7c3aed,#6d28d9)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="3" width="5" height="5" rx="1" stroke="white" stroke-width="1.5"></rect><path d="M3 6.5L4.5 8L7 5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9 5H14" stroke="white" stroke-width="1.5" stroke-linecap="round"></path><rect x="2" y="10" width="5" height="3" rx="1" stroke="white" stroke-width="1.5"></rect><path d="M9 10H14" stroke="white" stroke-width="1.5" stroke-linecap="round"></path><path d="M9 13H13" stroke="white" stroke-width="1.5" stroke-linecap="round"></path></svg></div><h4 style="${ssrRenderStyle({ "font-size": "1rem", "font-weight": "800", "color": "#1F2937", "margin": "0" })}">\u8FD9\u5F20\u5355\u89E3\u51B3\u4EC0\u4E48</h4></div><p style="${ssrRenderStyle({ "font-size": "0.78rem", "font-weight": "600", "color": "#6B7280", "margin": "0 0 10px" })}">\u4E1A\u52A1\u52A8\u673A</p><div style="${ssrRenderStyle({ "display": "flex", "flex-direction": "column", "gap": "8px" })}"><div style="${ssrRenderStyle({ "display": "flex", "align-items": "flex-start", "gap": "8px", "padding": "8px 10px", "background": "#F5F3FF", "border-radius": "8px" })}"><div style="${ssrRenderStyle({ "font-size": ".75rem" })}"><strong>\u62A5\u9500\u7533\u8BF7</strong> \u2014 \u6C47\u603B\u7ECF\u9500\u5546\u95E8\u5E97\u95E8\u5934\u5C55\u677F\u5236\u4F5C\u8D39\u7528\uFF0C\u63D0\u51FA\u62A5\u9500\u8BC9\u6C42</div></div><div style="${ssrRenderStyle({ "display": "flex", "align-items": "flex-start", "gap": "8px", "padding": "8px 10px", "background": "#F5F3FF", "border-radius": "8px" })}"><div style="${ssrRenderStyle({ "font-size": ".75rem" })}"><strong>\u5185\u5916\u5206\u8D26</strong> \u2014 \u6309\u8865\u8D34\u653F\u7B56\u533A\u5206\u989D\u5EA6\u5185\u4E0E\u989D\u5EA6\u5916\u7533\u8BF7\u91D1\u989D</div></div><div style="${ssrRenderStyle({ "display": "flex", "align-items": "flex-start", "gap": "8px", "padding": "8px 10px", "background": "#F5F3FF", "border-radius": "8px" })}"><div style="${ssrRenderStyle({ "font-size": ".75rem" })}"><strong>\u627F\u63A5\u5151\u73B0</strong> \u2014 \u5BA1\u6279\u901A\u8FC7\u662F\u540E\u7EED\u95E8\u5934\u5C55\u677F\u5151\u73B0\u7684\u524D\u7F6E\u6761\u4EF6</div></div></div></div><div class="kl-col-box alt"><div style="${ssrRenderStyle({ "display": "flex", "align-items": "center", "gap": "10px", "margin-bottom": "12px" })}"><div style="${ssrRenderStyle({ "width": "40px", "height": "40px", "border-radius": "10px", "display": "flex", "align-items": "center", "justify-content": "center", "background": "linear-gradient(135deg,#16A34A,#15803D)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="2" width="10" height="12" rx="2" stroke="white" stroke-width="1.5"></rect><path d="M5.5 6L7 7.5L10.5 4.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></div><h4 style="${ssrRenderStyle({ "font-size": "1rem", "font-weight": "800", "color": "#1F2937", "margin": "0" })}">\u5355\u636E\u8FB9\u754C</h4></div><p style="${ssrRenderStyle({ "font-size": "0.78rem", "font-weight": "600", "color": "#6B7280", "margin": "0 0 10px" })}">\u9002\u7528\u8303\u56F4</p><div style="${ssrRenderStyle({ "display": "flex", "flex-direction": "column", "gap": "8px" })}"><div style="${ssrRenderStyle({ "display": "flex", "align-items": "flex-start", "gap": "8px", "padding": "8px 10px", "background": "#F0FDF4", "border-radius": "8px" })}"><div style="${ssrRenderStyle({ "font-size": ".75rem" })}"><strong>\u7ECF\u9500\u5546\u53D1\u8D77</strong> \u2014 \u5FC5\u987B\u9009\u62E9\u7ECF\u9500\u5546\u3001\u5E74\u5EA6\u4E0E\u9002\u7528\u7684\u8865\u8D34\u653F\u7B56</div></div><div style="${ssrRenderStyle({ "display": "flex", "align-items": "flex-start", "gap": "8px", "padding": "8px 10px", "background": "#F0FDF4", "border-radius": "8px" })}"><div style="${ssrRenderStyle({ "font-size": ".75rem" })}"><strong>\u591A\u95E8\u5E97\u884C</strong> \u2014 \u4E00\u5F20\u62A5\u9500\u5355\u53EF\u5305\u542B\u591A\u4E2A\u95E8\u5E97\u7684\u95E8\u5934\u5C55\u677F\u8D39\u7528\u884C</div></div><div style="${ssrRenderStyle({ "display": "flex", "align-items": "flex-start", "gap": "8px", "padding": "8px 10px", "background": "#F0FDF4", "border-radius": "8px" })}"><div style="${ssrRenderStyle({ "font-size": ".75rem" })}"><strong>\u53D7\u989D\u5EA6\u9650</strong> \u2014 \u989D\u5EA6\u5916\u7533\u8BF7\u4E0D\u5F97\u8D85\u8FC7\u7ECF\u9500\u5546\u9650\u989D\uFF0C\u8D85\u51FA\u90E8\u5206\u53D7\u7EA6\u675F</div></div></div></div></div></div><div class="kl-card"><div class="biz-kl-hdr"><span class="biz-tag" style="${ssrRenderStyle({ "background": "rgba(124,58,237,0.08)", "color": "#7C3AED", "border-color": "rgba(124,58,237,0.18)" })}"> \u6D41\u7A0B</span><h2>\u8C01\u5728\u7528\uFF0C\u600E\u4E48\u6D41\u8F6C</h2><p>\u7531\u7ECF\u9500\u5546\u6216\u4E1A\u52A1\u4EBA\u5458\u521B\u5EFA\u62A5\u9500\u7533\u8BF7\uFF0C\u5BA1\u6279\u901A\u8FC7\u540E\u8FDB\u5165\u5151\u73B0\u4E0E\u5206\u6790</p></div><div class="biz-steps"><div class="biz-step-item"><div class="biz-step-circle" style="${ssrRenderStyle({ "background": "linear-gradient(135deg,#7C3AED,#6D28D9)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 3V13" stroke="white" stroke-width="1.5" stroke-linecap="round"></path><path d="M4 6L8 3L12 6" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></div><h5>\u65B0\u5EFA\u62A5\u9500</h5><small>\u9009\u7ECF\u9500\u5546/\u5E74\u5EA6/\u653F\u7B56<br>\u5F55\u95E8\u5E97\u91D1\u989D</small></div><div class="biz-step-arrow">\u2192</div><div class="biz-step-item"><div class="biz-step-circle" style="${ssrRenderStyle({ "background": "linear-gradient(135deg,#3B82F6,#2563EB)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="2" width="10" height="12" rx="2" stroke="white" stroke-width="1.5"></rect><path d="M5.5 8L7 9.5L10.5 5.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></div><h5>\u5BA1\u6279\u6D41\u8F6C</h5><small>\u90E8\u95E8/\u7701\u7EA7\u8D1F\u8D23\u4EBA<br>\u9010\u7EA7\u5BA1\u6838</small></div><div class="biz-step-arrow">\u2192</div><div class="biz-step-item"><div class="biz-step-circle" style="${ssrRenderStyle({ "background": "linear-gradient(135deg,#16A34A,#15803D)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="5.5" stroke="white" stroke-width="1.5"></circle><path d="M8 5.5V8L9.5 9.5" stroke="white" stroke-width="1.5" stroke-linecap="round"></path></svg></div><h5>\u5BA1\u6279\u901A\u8FC7</h5><small>\u62A5\u9500\u5355\u751F\u6548<br>\u751F\u6210\u62A5\u9500\u7F16\u7801</small></div><div class="biz-step-arrow">\u2192</div><div class="biz-step-item"><div class="biz-step-circle" style="${ssrRenderStyle({ "background": "linear-gradient(135deg,#F59E0B,#D97706)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 8H13" stroke="white" stroke-width="1.5" stroke-linecap="round"></path><path d="M9 4L13 8L9 12" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></div><h5>\u53D1\u8D77\u5151\u73B0</h5><small>\u53EF\u53D1\u8D77\u95E8\u5934\u5151\u73B0<br>\u8FDB\u5165\u5206\u6790\u7EDF\u8BA1</small></div></div></div><div class="kl-card"><div class="biz-kl-hdr"><span class="biz-tag" style="${ssrRenderStyle({ "background": "rgba(124,58,237,0.08)", "color": "#7C3AED", "border-color": "rgba(124,58,237,0.18)" })}"> \u89C4\u5219</span><h2>\u5173\u952E\u4E1A\u52A1\u89C4\u5219</h2><p>\u62A5\u9500\u533A\u5206\u5185\u5916\u91D1\u989D\uFF0C\u5BA1\u6279\u4EBA\u6309\u7EC4\u7EC7\u5C42\u7EA7\u786E\u5B9A</p></div><div class="biz-3col"><div class="kl-col-box" style="${ssrRenderStyle({ "margin-bottom": "0" })}"><div style="${ssrRenderStyle({ "display": "flex", "gap": "12px", "align-items": "flex-start" })}"><div style="${ssrRenderStyle({ "width": "36px", "height": "36px", "border-radius": "10px", "display": "flex", "align-items": "center", "justify-content": "center", "flex-shrink": "0", "background": "linear-gradient(135deg,#7C3AED,#A78BFA)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 8H13" stroke="white" stroke-width="1.5" stroke-linecap="round"></path><path d="M9 4L13 8L9 12" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></div><div><h5 style="${ssrRenderStyle({ "font-size": "0.88rem", "font-weight": "800", "color": "#1F2937", "margin": "0 0 6px" })}">\u5185\u5916\u5206\u79BB</h5><p style="${ssrRenderStyle({ "font-size": "0.73rem", "color": "#6B7280", "margin": "0", "line-height": "1.6" })}">\u5206\u522B\u6C47\u603B\u989D\u5EA6\u5185/\u989D\u5EA6\u5916\u7684\u7533\u8BF7\u3001\u4E1A\u52A1\u6279\u51C6\u4E0E\u8D22\u52A1\u6279\u51C6\u91D1\u989D</p></div></div></div><div class="kl-col-box alt" style="${ssrRenderStyle({ "margin-bottom": "0" })}"><div style="${ssrRenderStyle({ "display": "flex", "gap": "12px", "align-items": "flex-start" })}"><div style="${ssrRenderStyle({ "width": "36px", "height": "36px", "border-radius": "10px", "display": "flex", "align-items": "center", "justify-content": "center", "flex-shrink": "0", "background": "linear-gradient(135deg,#16A34A,#15803D)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="3" width="12" height="10" rx="1.5" stroke="white" stroke-width="1.5"></rect><path d="M5 6.5L7 8.5L11 5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></div><div><h5 style="${ssrRenderStyle({ "font-size": "0.88rem", "font-weight": "800", "color": "#1F2937", "margin": "0 0 6px" })}">\u5BA1\u6279\u4EBA</h5><p style="${ssrRenderStyle({ "font-size": "0.73rem", "color": "#6B7280", "margin": "0", "line-height": "1.6" })}">\u5BA1\u6279\u4EBA\u6309\u62A5\u9500\u5355\u6240\u5C5E\u90E8\u95E8\u4E0E\u7701\u7EA7\u8D1F\u8D23\u4EBA\u81EA\u52A8\u786E\u5B9A\uFF0C\u786E\u4FDD\u6743\u8D23\u5BF9\u5E94</p></div></div></div><div class="kl-col-box" style="${ssrRenderStyle({ "margin-bottom": "0" })}"><div style="${ssrRenderStyle({ "display": "flex", "gap": "12px", "align-items": "flex-start" })}"><div style="${ssrRenderStyle({ "width": "36px", "height": "36px", "border-radius": "10px", "display": "flex", "align-items": "center", "justify-content": "center", "flex-shrink": "0", "background": "linear-gradient(135deg,#DC2626,#B91C1C)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="2" width="10" height="12" rx="2" stroke="white" stroke-width="1.5"></rect><path d="M6 6.5L10 10.5M10 6.5L6 10.5" stroke="white" stroke-width="1.5" stroke-linecap="round"></path></svg></div><div><h5 style="${ssrRenderStyle({ "font-size": "0.88rem", "font-weight": "800", "color": "#1F2937", "margin": "0 0 6px" })}">\u989D\u5EA6\u7EA6\u675F</h5><p style="${ssrRenderStyle({ "font-size": "0.73rem", "color": "#6B7280", "margin": "0", "line-height": "1.6" })}">\u989D\u5EA6\u5916\u7533\u8BF7\u91D1\u989D\u53D7\u7ECF\u9500\u5546\u9650\u989D\u7EA6\u675F\uFF0C\u8D85\u9650\u90E8\u5206\u8BA1\u5165\u8D85\u9650\u91D1\u989D</p></div></div></div></div><div class="kl-tip" style="${ssrRenderStyle({ "margin-top": "14px" })}"><strong>\u6838\u5FC3\u7EA6\u675F\uFF1A</strong>\u95E8\u5934\u5C55\u677F\u62A5\u9500\u7533\u8BF7\u5355\u5FC5\u987B\u9009\u62E9\u7ECF\u9500\u5546\u3001\u5E74\u5EA6\u4E0E\u8865\u8D34\u653F\u7B56\uFF0C\u6309\u989D\u5EA6\u5185/\u5916\u5206\u522B\u6838\u7B97\uFF0C\u5BA1\u6279\u901A\u8FC7\u540E\u65B9\u53EF\u53D1\u8D77\u95E8\u5934\u5151\u73B0\u5E76\u7EB3\u5165\u62A5\u9500\u5206\u6790\u3002 </div></div></div></div></div><div id="biz-flow" style="${ssrRenderStyle({ "display": "none" })}"><div class="tab-pad"><div class="bf-truth-flow"><h4 class="bf-main-title">\u95E8\u5934\u5C55\u677F\u62A5\u9500\u7533\u8BF7\u5355 \u2014 \u5168\u94FE\u8DEF\u6D41\u7A0B\u56FE</h4><p class="bf-main-sub">\u5F00\u59CB \u2192 \u2605\u65B0\u5EFA\u95E8\u5934\u62A5\u9500\u7533\u8BF7\u5355\u2605 \u2192 \u2696\u5BA1\u6279\u901A\u8FC7\uFF1F \u2192 \u53EF\u53D1\u8D77\u95E8\u5934\u5151\u73B0 \u2192 \u7ED3\u675F\uFF08\u62D2\u7EDD\u5219\u4FEE\u6539\u540E\u91CD\u63D0\uFF09</p><div class="bf-fc-svg-wrap"><svg class="bf-fc-svg" style="${ssrRenderStyle({ "max-height": "none" })}" viewBox="0 0 1100 660" xmlns="http://www.w3.org/2000/svg"><defs><marker id="arr-green" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon points="0,0 10,5 0,10" fill="#16A34A"></polygon></marker><marker id="arr-gray" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon points="0,0 10,5 0,10" fill="#9CA3AF"></polygon></marker><marker id="arr-blue" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon points="0,0 10,5 0,10" fill="#3B82F6"></polygon></marker><marker id="arr-red" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon points="0,0 10,5 0,10" fill="#EF4444"></polygon></marker><filter id="shadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000" flood-opacity="0.15"></feDropShadow></filter></defs><rect x="25" y="20" width="1050" height="95" rx="8" fill="#EFF6FF" stroke="#3B82F6" stroke-width="1.5" stroke-dasharray="6,4"></rect><text x="550" y="42" text-anchor="middle" fill="#1D4ED8" font-size="13" font-weight="600">\u4E0A\u6E38\u652F\u6491</text><rect x="159" y="56" width="150" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"></rect><text x="234" y="79" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">\u7ECF\u9500\u5546\u4E3B\u6863</text><rect x="317" y="56" width="150" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"></rect><text x="392" y="79" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">\u8865\u8D34\u653F\u7B56</text><rect x="475" y="56" width="150" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"></rect><text x="550" y="79" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">\u95E8\u5E97\u4E3B\u6863</text><rect x="633" y="56" width="150" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"></rect><text x="708" y="79" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">\u5DE5\u4F5C\u6D41\u5F15\u64CE</text><rect x="791" y="56" width="150" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"></rect><text x="866" y="79" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">\u7F16\u7801\u89C4\u5219\u670D\u52A1</text><line x1="235" y1="115" x2="235" y2="150" stroke="#3B82F6" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#arr-blue)"></line><rect x="195" y="150" width="80" height="44" rx="6" fill="#FAF5FF" stroke="#9333EA" stroke-width="1.5" stroke-dasharray="5,3"></rect><text x="235" y="177" text-anchor="middle" fill="#7C3AED" font-size="13" font-weight="600">\u5F00\u59CB</text><line x1="235" y1="194" x2="235" y2="210" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"></line><rect x="148" y="210" width="174" height="54" rx="6" fill="#16A34A" stroke="#15803D" stroke-width="2" filter="url(#shadow)"></rect><text x="235" y="232" text-anchor="middle" fill="#FFFFFF" font-size="13" font-weight="700">\u2605\u65B0\u5EFA\u95E8\u5934\u62A5\u9500\u7533\u8BF7\u5355\u2605</text><text x="235" y="252" text-anchor="middle" fill="#DCFCE7" font-size="10">\u9009\u7ECF\u9500\u5546/\u5E74\u5EA6/\u653F\u7B56\xB7\u5F55\u95E8\u5E97\u91D1\u989D\xB7\u4FDD\u5B58</text><line x1="235" y1="264" x2="235" y2="290" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"></line><polygon points="235,290 305,320 235,350 165,320" fill="#FAF5FF" stroke="#9333EA" stroke-width="1.5" stroke-dasharray="5,3"></polygon><text x="235" y="324" text-anchor="middle" fill="#7C3AED" font-size="12" font-weight="600">\u2696 \u5BA1\u6279\u901A\u8FC7\uFF1F</text><line x1="305" y1="320" x2="410" y2="320" stroke="#EF4444" stroke-width="2" marker-end="url(#arr-red)"></line><rect x="410" y="306" width="80" height="28" rx="4" fill="#FEF2F2" stroke="#EF4444" stroke-width="1"></rect><text x="450" y="325" text-anchor="middle" fill="#DC2626" font-size="11" font-weight="600">\u62D2\u7EDD \u2717</text><line x1="450" y1="306" x2="450" y2="237" stroke="#EF4444" stroke-width="1.5"></line><line x1="450" y1="237" x2="322" y2="237" stroke="#EF4444" stroke-width="1.5" marker-end="url(#arr-red)"></line><line x1="235" y1="350" x2="235" y2="366" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"></line><rect x="150" y="366" width="170" height="40" rx="6" fill="#F0FDF4" stroke="#16A34A" stroke-width="2"></rect><text x="235" y="391" text-anchor="middle" fill="#166534" font-size="13" font-weight="600">\u5BA1\u6279\u901A\u8FC7\u751F\u6548</text><line x1="235" y1="406" x2="235" y2="422" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"></line><rect x="150" y="422" width="170" height="40" rx="6" fill="#F0FDF4" stroke="#16A34A" stroke-width="2"></rect><text x="235" y="447" text-anchor="middle" fill="#166534" font-size="13" font-weight="600">\u53EF\u53D1\u8D77\u95E8\u5934\u5151\u73B0</text><line x1="235" y1="462" x2="235" y2="478" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"></line><rect x="180" y="478" width="110" height="40" rx="6" fill="#FAF5FF" stroke="#9333EA" stroke-width="1.5" stroke-dasharray="5,3"></rect><text x="235" y="503" text-anchor="middle" fill="#7C3AED" font-size="13" font-weight="600">\u7ED3\u675F</text><line x1="235" y1="518" x2="235" y2="540" stroke="#16A34A" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#arr-green)"></line><rect x="25" y="540" width="1050" height="95" rx="8" fill="#F0FDF4" stroke="#16A34A" stroke-width="1.5" stroke-dasharray="6,4"></rect><text x="550" y="562" text-anchor="middle" fill="#166534" font-size="13" font-weight="600">\u4E0B\u6E38\u5F71\u54CD</text><rect x="238" y="576" width="150" height="36" rx="5" fill="#FFFFFF" stroke="#16A34A" stroke-width="1.2"></rect><text x="313" y="601" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">\u95E8\u5934\u5151\u73B0</text><rect x="396" y="576" width="150" height="36" rx="5" fill="#FFFFFF" stroke="#16A34A" stroke-width="1.2"></rect><text x="471" y="601" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">\u62A5\u9500\u5206\u6790\u7EDF\u8BA1</text><rect x="554" y="576" width="150" height="36" rx="5" fill="#FFFFFF" stroke="#16A34A" stroke-width="1.2"></rect><text x="629" y="601" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">\u9A8C\u6536\u4EBA\u5458\u4FDD\u8BC1\u4E66</text><rect x="712" y="576" width="150" height="36" rx="5" fill="#FFFFFF" stroke="#16A34A" stroke-width="1.2"></rect><text x="787" y="601" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">\u989D\u5EA6\u5DF2\u7533\u8BF7\u7EDF\u8BA1</text></svg></div><div class="bf-fc-legend"><span class="bf-fc-legend-item"><span class="bf-fc-dot bf-fc-dot-green"></span> \u4E3B\u6D41\u7A0B\u6B65\u9AA4</span><span class="bf-fc-legend-item"><span class="bf-fc-dot bf-fc-dot-purple"></span> \u5F00\u59CB/\u7ED3\u675F/\u5224\u65AD</span><span class="bf-fc-legend-item"><span class="bf-fc-dot bf-fc-dot-blue"></span> \u4E0A\u6E38\u652F\u6491\u670D\u52A1</span><span class="bf-fc-legend-item"><span style="${ssrRenderStyle({ "display": "inline-block", "width": "22px", "height": "2px", "background": "#EF4444" })}"></span> \u5BA1\u6279\u62D2\u7EDD/\u9A73\u56DE</span></div></div></div></div><div id="key-logic" style="${ssrRenderStyle({ "display": "none" })}"><div class="tab-pad"><div class="kl-wrap">`);
  _push(ssrRenderComponent(_component_KbCard, {
    num: "1",
    title: "\u91CD\u70B9\u903B\u8F911\uFF1A\u57FA\u4E8E\u5E97\u9762\u5EFA\u8BBE\u8865\u8D34\u653F\u7B56\u62A5\u9500"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u610F\u4E49</strong>\uFF1A\u95E8\u5934\u5C55\u677F\u62A5\u9500\u5FC5\u987B\u5173\u8054\u6709\u6548\u7684\u5E97\u9762\u5EFA\u8BBE\u8865\u8D34\u653F\u7B56\uFF0C\u6309\u653F\u7B56\u6807\u51C6\u8BA1\u7B97\u62A5\u9500\u91D1\u989D\uFF0C\u786E\u4FDD\u62A5\u9500\u6709\u636E\u53EF\u4F9D</li><li${_scopeId}><strong${_scopeId}>\u5177\u4F53\u903B\u8F91\u63CF\u8FF0</strong>\uFF1A</li><li${_scopeId}>\u9009\u62E9\u653F\u7B56LOV(AE.POLICY_STANDARD_VALID_HEAD)\uFF0C\u6309\u5F53\u524D\u7528\u6237\u7EC4\u7EC7ID(entid)\u8FC7\u6EE4</li><li${_scopeId}>\u540E\u7AEFcheckParams\u6821\u9A8C\uFF1A\u653F\u7B56\u4E0D\u80FD\u4E3A\u7A7A\u3001\u653F\u7B56\u5FC5\u987B\u6709\u6548(valid=2)\u3001\u653F\u7B56\u5728\u6709\u6548\u671F\u5185(startDate\u2264\u5F53\u524D\u65E5\u671F\u2264endDate)</li><li${_scopeId}>\u653F\u7B56\u8054\u52A8\u5E26\u51FA\u62A5\u9500\u7C7B\u578B(bxType=budgetType)\u548C\u9884\u7B97\u5E74\u5EA6(year)</li><li${_scopeId}>\u884C\u8868\u901A\u8FC7\u653F\u7B56\u884C(policyLineId)\u5173\u8054\u653F\u7B56\u660E\u7EC6\uFF0C\u83B7\u53D6\u6807\u51C6\u91D1\u989D\u3001\u6570\u91CF\u8303\u56F4\u7B49</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u610F\u4E49"),
              createTextVNode("\uFF1A\u95E8\u5934\u5C55\u677F\u62A5\u9500\u5FC5\u987B\u5173\u8054\u6709\u6548\u7684\u5E97\u9762\u5EFA\u8BBE\u8865\u8D34\u653F\u7B56\uFF0C\u6309\u653F\u7B56\u6807\u51C6\u8BA1\u7B97\u62A5\u9500\u91D1\u989D\uFF0C\u786E\u4FDD\u62A5\u9500\u6709\u636E\u53EF\u4F9D")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u5177\u4F53\u903B\u8F91\u63CF\u8FF0"),
              createTextVNode("\uFF1A")
            ]),
            createVNode("li", null, "\u9009\u62E9\u653F\u7B56LOV(AE.POLICY_STANDARD_VALID_HEAD)\uFF0C\u6309\u5F53\u524D\u7528\u6237\u7EC4\u7EC7ID(entid)\u8FC7\u6EE4"),
            createVNode("li", null, "\u540E\u7AEFcheckParams\u6821\u9A8C\uFF1A\u653F\u7B56\u4E0D\u80FD\u4E3A\u7A7A\u3001\u653F\u7B56\u5FC5\u987B\u6709\u6548(valid=2)\u3001\u653F\u7B56\u5728\u6709\u6548\u671F\u5185(startDate\u2264\u5F53\u524D\u65E5\u671F\u2264endDate)"),
            createVNode("li", null, "\u653F\u7B56\u8054\u52A8\u5E26\u51FA\u62A5\u9500\u7C7B\u578B(bxType=budgetType)\u548C\u9884\u7B97\u5E74\u5EA6(year)"),
            createVNode("li", null, "\u884C\u8868\u901A\u8FC7\u653F\u7B56\u884C(policyLineId)\u5173\u8054\u653F\u7B56\u660E\u7EC6\uFF0C\u83B7\u53D6\u6807\u51C6\u91D1\u989D\u3001\u6570\u91CF\u8303\u56F4\u7B49")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, {
    num: "2",
    title: "\u91CD\u70B9\u903B\u8F912\uFF1A\u989D\u5EA6\u5185\u5916\u5206\u5F00\u62A5\u9500"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u610F\u4E49</strong>\uFF1A\u6839\u636E\u62A5\u9500\u7C7B\u578B(\u989D\u5EA6\u5185/\u989D\u5EA6\u5916)\u533A\u5206\u91D1\u989D\uFF0C\u4E0D\u540C\u7C7B\u578B\u8D70\u4E0D\u540C\u5BA1\u6279\u548C\u9884\u7B97\u63A7\u5236</li><li${_scopeId}><strong${_scopeId}>\u5177\u4F53\u903B\u8F91\u63CF\u8FF0</strong>\uFF1A</li><li${_scopeId}>\u62A5\u9500\u7C7B\u578BbxType\uFF1A1-\u989D\u5EA6\u5185\u30012-\u989D\u5EA6\u5916</li><li${_scopeId}>computeBxLine\u6839\u636EbxType\u6E05\u7A7A\u4E0D\u7B26\u5408\u7684\u91D1\u989D\uFF1AbxType=1\u65F6\u989D\u5EA6\u5916\u91D1\u989D\u7F6E0\uFF0CbxType=2\u65F6\u989D\u5EA6\u5185\u91D1\u989D\u7F6E0</li><li${_scopeId}>\u884C\u8868\u542B\u989D\u5EA6\u5185\u7533\u8BF7\u91D1\u989D(inApplyAmt)\u3001\u989D\u5EA6\u5916\u7533\u8BF7\u91D1\u989D(outApplyAmt)\u3001\u4E1A\u52A1\u6279\u51C6\u91D1\u989D(inBizAmt/outBizAmt)\u3001\u8D22\u52A1\u6279\u51C6\u91D1\u989D(inFinAmt/outFinAmt)</li><li${_scopeId}>\u65B0\u589E\u65F6\u4E1A\u52A1\u6279\u51C6\u91D1\u989D=\u7533\u8BF7\u91D1\u989D\u3001\u8D22\u52A1\u6279\u51C6\u91D1\u989D=\u7533\u8BF7\u91D1\u989D(computeBxLine\u81EA\u52A8\u8D4B\u503C)</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u610F\u4E49"),
              createTextVNode("\uFF1A\u6839\u636E\u62A5\u9500\u7C7B\u578B(\u989D\u5EA6\u5185/\u989D\u5EA6\u5916)\u533A\u5206\u91D1\u989D\uFF0C\u4E0D\u540C\u7C7B\u578B\u8D70\u4E0D\u540C\u5BA1\u6279\u548C\u9884\u7B97\u63A7\u5236")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u5177\u4F53\u903B\u8F91\u63CF\u8FF0"),
              createTextVNode("\uFF1A")
            ]),
            createVNode("li", null, "\u62A5\u9500\u7C7B\u578BbxType\uFF1A1-\u989D\u5EA6\u5185\u30012-\u989D\u5EA6\u5916"),
            createVNode("li", null, "computeBxLine\u6839\u636EbxType\u6E05\u7A7A\u4E0D\u7B26\u5408\u7684\u91D1\u989D\uFF1AbxType=1\u65F6\u989D\u5EA6\u5916\u91D1\u989D\u7F6E0\uFF0CbxType=2\u65F6\u989D\u5EA6\u5185\u91D1\u989D\u7F6E0"),
            createVNode("li", null, "\u884C\u8868\u542B\u989D\u5EA6\u5185\u7533\u8BF7\u91D1\u989D(inApplyAmt)\u3001\u989D\u5EA6\u5916\u7533\u8BF7\u91D1\u989D(outApplyAmt)\u3001\u4E1A\u52A1\u6279\u51C6\u91D1\u989D(inBizAmt/outBizAmt)\u3001\u8D22\u52A1\u6279\u51C6\u91D1\u989D(inFinAmt/outFinAmt)"),
            createVNode("li", null, "\u65B0\u589E\u65F6\u4E1A\u52A1\u6279\u51C6\u91D1\u989D=\u7533\u8BF7\u91D1\u989D\u3001\u8D22\u52A1\u6279\u51C6\u91D1\u989D=\u7533\u8BF7\u91D1\u989D(computeBxLine\u81EA\u52A8\u8D4B\u503C)")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, {
    num: "3",
    title: "\u91CD\u70B9\u903B\u8F913\uFF1A\u884C\u6570\u636E\u6821\u9A8C\u4E0E\u8BA1\u7B97(computeBxLine)"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u610F\u4E49</strong>\uFF1A\u6BCF\u884C\u95E8\u5E97\u88C5\u4FEE\u660E\u7EC6\u9700\u6821\u9A8C\u6570\u91CF\u8303\u56F4\u548C\u9644\u4EF6\u5B8C\u6574\u6027\uFF0C\u786E\u4FDD\u62A5\u9500\u660E\u7EC6\u5408\u89C4</li><li${_scopeId}><strong${_scopeId}>\u5177\u4F53\u903B\u8F91\u63CF\u8FF0</strong>\uFF1A</li><li${_scopeId}>\u7533\u8BF7\u6570\u91CF\u5FC5\u987B&gt;0\uFF0C\u4E14\u5728\u653F\u7B56\u6570\u91CF\u8303\u56F4\u5185(minNum\u2264applyNum\u2264maxNum)\uFF0C\u5426\u5219\u62A5&quot;\u62A5\u9500\u7533\u8BF7\u6570\u91CF\u5FC5\u987B\u5728\u653F\u7B56\u6570\u91CF\u8303\u56F4\u5185&quot;</li><li${_scopeId}>\u88C5\u4FEE\u524D\u7167\u7247(beforeDocId)\u5FC5\u4F20\uFF0C\u5426\u5219\u62A5&quot;\u8BF7\u4E0A\u4F20\u88C5\u4FEE\u524D\u6587\u4EF6&quot;</li><li${_scopeId}>\u88C5\u4FEE\u540E\u7167\u7247(afterDocId)\u5FC5\u4F20\uFF0C\u5426\u5219\u62A5&quot;\u8BF7\u4E0A\u4F20\u88C5\u4FEE\u540E\u6587\u4EF6&quot;</li><li${_scopeId}>\u884C\u91D1\u989D\u6821\u9A8C\uFF1A\u975E\u8D85\u989D\u62A5\u9500\u65F6(excessFlag!=Y)\uFF0C\u7533\u8BF7/\u4E1A\u52A1\u6279\u51C6\u91D1\u989D\u4E0D\u80FD\u5927\u4E8E\u6807\u51C6\u91D1\u989D(inStandardAmt/outStandardAmt)</li><li${_scopeId}>\u524D\u7AEFvalidator\u6821\u9A8C\uFF1A\u7533\u8BF7\u6570\u91CF\u8303\u56F4\u3001\u989D\u5EA6\u5185/\u5916\u7533\u8BF7\u91D1\u989D\u4E0D\u8D85\u6807\u51C6\u91D1\u989D</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u610F\u4E49"),
              createTextVNode("\uFF1A\u6BCF\u884C\u95E8\u5E97\u88C5\u4FEE\u660E\u7EC6\u9700\u6821\u9A8C\u6570\u91CF\u8303\u56F4\u548C\u9644\u4EF6\u5B8C\u6574\u6027\uFF0C\u786E\u4FDD\u62A5\u9500\u660E\u7EC6\u5408\u89C4")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u5177\u4F53\u903B\u8F91\u63CF\u8FF0"),
              createTextVNode("\uFF1A")
            ]),
            createVNode("li", null, '\u7533\u8BF7\u6570\u91CF\u5FC5\u987B>0\uFF0C\u4E14\u5728\u653F\u7B56\u6570\u91CF\u8303\u56F4\u5185(minNum\u2264applyNum\u2264maxNum)\uFF0C\u5426\u5219\u62A5"\u62A5\u9500\u7533\u8BF7\u6570\u91CF\u5FC5\u987B\u5728\u653F\u7B56\u6570\u91CF\u8303\u56F4\u5185"'),
            createVNode("li", null, '\u88C5\u4FEE\u524D\u7167\u7247(beforeDocId)\u5FC5\u4F20\uFF0C\u5426\u5219\u62A5"\u8BF7\u4E0A\u4F20\u88C5\u4FEE\u524D\u6587\u4EF6"'),
            createVNode("li", null, '\u88C5\u4FEE\u540E\u7167\u7247(afterDocId)\u5FC5\u4F20\uFF0C\u5426\u5219\u62A5"\u8BF7\u4E0A\u4F20\u88C5\u4FEE\u540E\u6587\u4EF6"'),
            createVNode("li", null, "\u884C\u91D1\u989D\u6821\u9A8C\uFF1A\u975E\u8D85\u989D\u62A5\u9500\u65F6(excessFlag!=Y)\uFF0C\u7533\u8BF7/\u4E1A\u52A1\u6279\u51C6\u91D1\u989D\u4E0D\u80FD\u5927\u4E8E\u6807\u51C6\u91D1\u989D(inStandardAmt/outStandardAmt)"),
            createVNode("li", null, "\u524D\u7AEFvalidator\u6821\u9A8C\uFF1A\u7533\u8BF7\u6570\u91CF\u8303\u56F4\u3001\u989D\u5EA6\u5185/\u5916\u7533\u8BF7\u91D1\u989D\u4E0D\u8D85\u6807\u51C6\u91D1\u989D")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, {
    num: "4",
    title: "\u91CD\u70B9\u903B\u8F914\uFF1A\u63D0\u4EA4\u65F6\u8BA1\u7B97\u5B9E\u9645\u62A5\u9500\u91D1\u989D(computeAndUpdateBxAmt)"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u610F\u4E49</strong>\uFF1A\u63D0\u4EA4\u5BA1\u6279\u65F6\u6839\u636E\u662F\u5426\u9650\u989D\u8BA1\u7B97\u5B9E\u9645\u62A5\u9500\u91D1\u989D\uFF0C\u6821\u9A8C\u989D\u5EA6\u5916\u9884\u7B97\u5145\u8DB3</li><li${_scopeId}><strong${_scopeId}>\u5177\u4F53\u903B\u8F91\u63CF\u8FF0</strong>\uFF1A</li><li${_scopeId}>\u9650\u989D\u6A21\u5F0F(custLimitFlag=Y)\uFF1A\u8C03\u7528computeLimitBxAmt</li></ul><p${_scopeId}>- \u83B7\u53D6\u7ECF\u9500\u5546\u9650\u989D(getCustLimit)</p><p${_scopeId}>- \u8BA1\u7B97\u5DF2\u62A5\u9500\u91D1\u989D(getOutBxUsedAmt\uFF0C\u540C\u4E00\u7ECF\u9500\u5546+\u653F\u7B56\u7684RUN/RETURN/APPROVED\u72B6\u6001\u62A5\u9500\u5355)</p><p${_scopeId}>- \u989D\u5EA6\u5916\u8D85\u9650\u91D1\u989D = min(\u7ECF\u9500\u5546\u9650\u989D - \u5DF2\u62A5\u9500\u91D1\u989D - \u8D22\u52A1\u6279\u51C6\u603B\u989D(\u989D\u5EA6\u5916), 0)</p><p${_scopeId}>- \u989D\u5EA6\u5916\u5B9E\u9645\u62A5\u9500\u91D1\u989D = \u8D22\u52A1\u6279\u51C6\u603B\u989D(\u989D\u5EA6\u5916) + \u8D85\u9650\u91D1\u989D</p><p${_scopeId}>- \u8D85\u9650\u5904\u7406\u7B56\u7565(extraBudgetExcessStrategy)\uFF1A1-\u8D85\u51FA\u4E0D\u8BA1(\u989D\u5EA6\u5185\u5B9E\u9645\u62A5\u9500=\u8D22\u52A1\u6279\u51C6)\u30012-\u8F6C\u989D\u5EA6\u5185(\u989D\u5EA6\u5185\u5B9E\u9645\u62A5\u9500=\u8D22\u52A1\u6279\u51C6-\u8D85\u9650\u91D1\u989D)</p><ul${_scopeId}><li${_scopeId}>\u975E\u9650\u989D\u6A21\u5F0F(custLimitFlag!=Y)\uFF1A\u8C03\u7528computeNotLimitBxAmt\uFF0C\u5B9E\u9645\u62A5\u9500\u91D1\u989D=\u8D22\u52A1\u6279\u51C6\u91D1\u989D</li><li${_scopeId}>\u989D\u5EA6\u5916\u9884\u7B97\u6821\u9A8C(validBxAmt)\uFF1AuseExtraBudgetFlag=Y\u65F6\uFF0C\u989D\u5EA6\u5916\u5B9E\u9645\u62A5\u9500\u91D1\u989D\u2264\u5269\u4F59\u989D\u5EA6\u5916\u53EF\u7528\u9884\u7B97(viewOverBudgetAmt)\uFF0C\u5426\u5219\u62A5&quot;X\u5E74\u7684\u989D\u5EA6\u5916\u9884\u7B97\u4E0D\u8DB3&quot;</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u610F\u4E49"),
              createTextVNode("\uFF1A\u63D0\u4EA4\u5BA1\u6279\u65F6\u6839\u636E\u662F\u5426\u9650\u989D\u8BA1\u7B97\u5B9E\u9645\u62A5\u9500\u91D1\u989D\uFF0C\u6821\u9A8C\u989D\u5EA6\u5916\u9884\u7B97\u5145\u8DB3")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u5177\u4F53\u903B\u8F91\u63CF\u8FF0"),
              createTextVNode("\uFF1A")
            ]),
            createVNode("li", null, "\u9650\u989D\u6A21\u5F0F(custLimitFlag=Y)\uFF1A\u8C03\u7528computeLimitBxAmt")
          ]),
          createVNode("p", null, "- \u83B7\u53D6\u7ECF\u9500\u5546\u9650\u989D(getCustLimit)"),
          createVNode("p", null, "- \u8BA1\u7B97\u5DF2\u62A5\u9500\u91D1\u989D(getOutBxUsedAmt\uFF0C\u540C\u4E00\u7ECF\u9500\u5546+\u653F\u7B56\u7684RUN/RETURN/APPROVED\u72B6\u6001\u62A5\u9500\u5355)"),
          createVNode("p", null, "- \u989D\u5EA6\u5916\u8D85\u9650\u91D1\u989D = min(\u7ECF\u9500\u5546\u9650\u989D - \u5DF2\u62A5\u9500\u91D1\u989D - \u8D22\u52A1\u6279\u51C6\u603B\u989D(\u989D\u5EA6\u5916), 0)"),
          createVNode("p", null, "- \u989D\u5EA6\u5916\u5B9E\u9645\u62A5\u9500\u91D1\u989D = \u8D22\u52A1\u6279\u51C6\u603B\u989D(\u989D\u5EA6\u5916) + \u8D85\u9650\u91D1\u989D"),
          createVNode("p", null, "- \u8D85\u9650\u5904\u7406\u7B56\u7565(extraBudgetExcessStrategy)\uFF1A1-\u8D85\u51FA\u4E0D\u8BA1(\u989D\u5EA6\u5185\u5B9E\u9645\u62A5\u9500=\u8D22\u52A1\u6279\u51C6)\u30012-\u8F6C\u989D\u5EA6\u5185(\u989D\u5EA6\u5185\u5B9E\u9645\u62A5\u9500=\u8D22\u52A1\u6279\u51C6-\u8D85\u9650\u91D1\u989D)"),
          createVNode("ul", null, [
            createVNode("li", null, "\u975E\u9650\u989D\u6A21\u5F0F(custLimitFlag!=Y)\uFF1A\u8C03\u7528computeNotLimitBxAmt\uFF0C\u5B9E\u9645\u62A5\u9500\u91D1\u989D=\u8D22\u52A1\u6279\u51C6\u91D1\u989D"),
            createVNode("li", null, '\u989D\u5EA6\u5916\u9884\u7B97\u6821\u9A8C(validBxAmt)\uFF1AuseExtraBudgetFlag=Y\u65F6\uFF0C\u989D\u5EA6\u5916\u5B9E\u9645\u62A5\u9500\u91D1\u989D\u2264\u5269\u4F59\u989D\u5EA6\u5916\u53EF\u7528\u9884\u7B97(viewOverBudgetAmt)\uFF0C\u5426\u5219\u62A5"X\u5E74\u7684\u989D\u5EA6\u5916\u9884\u7B97\u4E0D\u8DB3"')
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, {
    num: "5",
    title: "\u91CD\u70B9\u903B\u8F915\uFF1A\u5DE5\u4F5C\u6D41\u591A\u8282\u70B9\u5BA1\u6279"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u610F\u4E49</strong>\uFF1A\u95E8\u5934\u62A5\u9500\u7533\u8BF7\u7ECF\u533A\u57DF\u7ECF\u7406\u548C\u9500\u552E\u4F1A\u8BA1\u4E24\u7EA7\u5BA1\u6279\uFF0C\u5404\u8282\u70B9\u53EF\u4FEE\u6539\u4E0D\u540C\u5B57\u6BB5</li><li${_scopeId}><strong${_scopeId}>\u5177\u4F53\u903B\u8F91\u63CF\u8FF0</strong>\uFF1A</li><li${_scopeId}>\u5DE5\u4F5C\u6D41\u7F16\u7801\uFF1ASUB_STORE_HEAD_PROCESS_DOOR(\u95E8\u5934\u62A5\u9500\u7533\u8BF7\u6D41\u7A0B)</li><li${_scopeId}>\u63D0\u4EA4\u65F6wfProcSubmit\uFF1A\u5148\u8BA1\u7B97\u62A5\u9500\u91D1\u989D(onUserSubmit)\uFF0C\u518D\u542F\u52A8\u5DE5\u4F5C\u6D41\u5B9E\u4F8B\uFF0C\u8BBE\u7F6EHZ_INSTANCE_ID\u548CHZ_APPROVE_STATUS=RUN</li><li${_scopeId}>\u533A\u57DF\u7ECF\u7406\u5BA1\u6279(bizNodeUpdate)\uFF1A\u4FEE\u6539\u4E1A\u52A1\u6279\u51C6\u91D1\u989D(inBizAmt/outBizAmt)\uFF0C\u6821\u9A8C\u975E\u8D85\u989D\u65F6\u4E0D\u8D85\u653F\u7B56\u6807\u51C6\uFF0C\u8D22\u52A1\u6279\u51C6\u91D1\u989D\u540C\u6B65\u66F4\u65B0</li><li${_scopeId}>\u9500\u552E\u4F1A\u8BA1\u5BA1\u6279(finNodeUpdate)\uFF1A\u4FEE\u6539\u8D22\u52A1\u6279\u51C6\u91D1\u989D(inFinAmt/outFinAmt)\uFF0C\u6839\u636EbxType\u6E05\u7A7A\u4E0D\u7B26\u5408\u7684\u91D1\u989D</li><li${_scopeId}>\u5BA1\u6279\u901A\u8FC7(onWfComplete)\uFF1A\u8BBE\u7F6EHZ_APPROVE_STATUS=APPROVED</li><li${_scopeId}>eventExecute\u5904\u7406\uFF1ASEND_MBO(\u53D1\u9001\u81F3MBO\u7CFB\u7EDF)\u3001OUT_BX_AMT(\u66F4\u65B0\u6D41\u7A0B\u53D8\u91CFreSignFlag\u548CoutBxAmt)</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u610F\u4E49"),
              createTextVNode("\uFF1A\u95E8\u5934\u62A5\u9500\u7533\u8BF7\u7ECF\u533A\u57DF\u7ECF\u7406\u548C\u9500\u552E\u4F1A\u8BA1\u4E24\u7EA7\u5BA1\u6279\uFF0C\u5404\u8282\u70B9\u53EF\u4FEE\u6539\u4E0D\u540C\u5B57\u6BB5")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u5177\u4F53\u903B\u8F91\u63CF\u8FF0"),
              createTextVNode("\uFF1A")
            ]),
            createVNode("li", null, "\u5DE5\u4F5C\u6D41\u7F16\u7801\uFF1ASUB_STORE_HEAD_PROCESS_DOOR(\u95E8\u5934\u62A5\u9500\u7533\u8BF7\u6D41\u7A0B)"),
            createVNode("li", null, "\u63D0\u4EA4\u65F6wfProcSubmit\uFF1A\u5148\u8BA1\u7B97\u62A5\u9500\u91D1\u989D(onUserSubmit)\uFF0C\u518D\u542F\u52A8\u5DE5\u4F5C\u6D41\u5B9E\u4F8B\uFF0C\u8BBE\u7F6EHZ_INSTANCE_ID\u548CHZ_APPROVE_STATUS=RUN"),
            createVNode("li", null, "\u533A\u57DF\u7ECF\u7406\u5BA1\u6279(bizNodeUpdate)\uFF1A\u4FEE\u6539\u4E1A\u52A1\u6279\u51C6\u91D1\u989D(inBizAmt/outBizAmt)\uFF0C\u6821\u9A8C\u975E\u8D85\u989D\u65F6\u4E0D\u8D85\u653F\u7B56\u6807\u51C6\uFF0C\u8D22\u52A1\u6279\u51C6\u91D1\u989D\u540C\u6B65\u66F4\u65B0"),
            createVNode("li", null, "\u9500\u552E\u4F1A\u8BA1\u5BA1\u6279(finNodeUpdate)\uFF1A\u4FEE\u6539\u8D22\u52A1\u6279\u51C6\u91D1\u989D(inFinAmt/outFinAmt)\uFF0C\u6839\u636EbxType\u6E05\u7A7A\u4E0D\u7B26\u5408\u7684\u91D1\u989D"),
            createVNode("li", null, "\u5BA1\u6279\u901A\u8FC7(onWfComplete)\uFF1A\u8BBE\u7F6EHZ_APPROVE_STATUS=APPROVED"),
            createVNode("li", null, "eventExecute\u5904\u7406\uFF1ASEND_MBO(\u53D1\u9001\u81F3MBO\u7CFB\u7EDF)\u3001OUT_BX_AMT(\u66F4\u65B0\u6D41\u7A0B\u53D8\u91CFreSignFlag\u548CoutBxAmt)")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, {
    num: "6",
    title: "\u91CD\u70B9\u903B\u8F916\uFF1A\u5355\u72EC\u95E8\u5E97\u7533\u8BF7\u6821\u9A8C"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u610F\u4E49</strong>\uFF1A\u90E8\u5206\u653F\u7B56\u8981\u6C42\u6BCF\u6B21\u62A5\u9500\u53EA\u80FD\u7533\u8BF7\u4E00\u4E2A\u95E8\u5E97\uFF0C\u9632\u6B62\u6279\u91CF\u62A5\u9500\u6DF7\u7528</li><li${_scopeId}><strong${_scopeId}>\u5177\u4F53\u903B\u8F91\u63CF\u8FF0</strong>\uFF1A</li><li${_scopeId}>\u5F53\u653F\u7B56singleStoreApplyFlag=Y\u65F6\uFF0CcheckParams\u6821\u9A8C\u884C\u8868\u4E2D\u95E8\u5E97ID(terminalId)\u53BB\u91CD\u540E\u6570\u91CF=1</li><li${_scopeId}>\u5426\u5219\u62A5&quot;\u5355\u72EC\u95E8\u5E97\u7533\u8BF7\uFF0C\u53EA\u80FD\u62A5\u9500\u4E00\u4E2A\u95E8\u5E97&quot;</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u610F\u4E49"),
              createTextVNode("\uFF1A\u90E8\u5206\u653F\u7B56\u8981\u6C42\u6BCF\u6B21\u62A5\u9500\u53EA\u80FD\u7533\u8BF7\u4E00\u4E2A\u95E8\u5E97\uFF0C\u9632\u6B62\u6279\u91CF\u62A5\u9500\u6DF7\u7528")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u5177\u4F53\u903B\u8F91\u63CF\u8FF0"),
              createTextVNode("\uFF1A")
            ]),
            createVNode("li", null, "\u5F53\u653F\u7B56singleStoreApplyFlag=Y\u65F6\uFF0CcheckParams\u6821\u9A8C\u884C\u8868\u4E2D\u95E8\u5E97ID(terminalId)\u53BB\u91CD\u540E\u6570\u91CF=1"),
            createVNode("li", null, '\u5426\u5219\u62A5"\u5355\u72EC\u95E8\u5E97\u7533\u8BF7\uFF0C\u53EA\u80FD\u62A5\u9500\u4E00\u4E2A\u95E8\u5E97"')
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, {
    num: "7",
    title: "\u91CD\u70B9\u903B\u8F917\uFF1A\u7F16\u7801\u751F\u6210"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u610F\u4E49</strong>\uFF1A\u95E8\u5934\u62A5\u9500\u7533\u8BF7\u5355\u53F7\u6309\u89C4\u5219\u81EA\u52A8\u751F\u6210\uFF0C\u786E\u4FDD\u552F\u4E00\u6027\u548C\u53EF\u8FFD\u6EAF\u6027</li><li${_scopeId}><strong${_scopeId}>\u5177\u4F53\u903B\u8F91\u63CF\u8FF0</strong>\uFF1A</li><li${_scopeId}>\u7F16\u7801\u89C4\u5219\uFF1AAE.DH_REIMBURSE_HEAD_NO</li><li${_scopeId}>\u751F\u6210\u65B9\u5F0F\uFF1AprefixCode + suffixCode\uFF0CprefixCode\u4E3A\u4E8B\u4E1A\u90E8\u7F16\u7801(divisionCode)\uFF0C\u82E5\u4E3A\u7A7A\u5219\u7528&quot;ARR&quot;</li><li${_scopeId}>suffixCode\u901A\u8FC7CodeRuleBuilder.generateCode\u751F\u6210\u6D41\u6C34\u53F7</li><li${_scopeId}>\u751F\u6210\u65F6\u673A\uFF1AdoInsert\u65F6\u8C03\u7528genReimburseCode\u65B9\u6CD5</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u610F\u4E49"),
              createTextVNode("\uFF1A\u95E8\u5934\u62A5\u9500\u7533\u8BF7\u5355\u53F7\u6309\u89C4\u5219\u81EA\u52A8\u751F\u6210\uFF0C\u786E\u4FDD\u552F\u4E00\u6027\u548C\u53EF\u8FFD\u6EAF\u6027")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u5177\u4F53\u903B\u8F91\u63CF\u8FF0"),
              createTextVNode("\uFF1A")
            ]),
            createVNode("li", null, "\u7F16\u7801\u89C4\u5219\uFF1AAE.DH_REIMBURSE_HEAD_NO"),
            createVNode("li", null, '\u751F\u6210\u65B9\u5F0F\uFF1AprefixCode + suffixCode\uFF0CprefixCode\u4E3A\u4E8B\u4E1A\u90E8\u7F16\u7801(divisionCode)\uFF0C\u82E5\u4E3A\u7A7A\u5219\u7528"ARR"'),
            createVNode("li", null, "suffixCode\u901A\u8FC7CodeRuleBuilder.generateCode\u751F\u6210\u6D41\u6C34\u53F7"),
            createVNode("li", null, "\u751F\u6210\u65F6\u673A\uFF1AdoInsert\u65F6\u8C03\u7528genReimburseCode\u65B9\u6CD5")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, {
    num: "8",
    title: "\u91CD\u70B9\u903B\u8F918\uFF1A\u91CD\u7B7E\u534F\u8BAE\u6807\u8BC6(reSignFlag)"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u610F\u4E49</strong>\uFF1A\u5224\u65AD\u662F\u5426\u9700\u8981\u91CD\u65B0\u7B7E\u7F72MBO\u5408\u540C\u534F\u8BAE\uFF0C\u5F71\u54CD\u5DE5\u4F5C\u6D41\u5206\u652F</li><li${_scopeId}><strong${_scopeId}>\u5177\u4F53\u903B\u8F91\u63CF\u8FF0</strong>\uFF1A</li><li${_scopeId}>reSignFlag\u5B57\u6BB5\uFF1AY-\u9700\u91CD\u7B7E\u3001N-\u65E0\u9700\u91CD\u7B7E\uFF0C\u9ED8\u8BA4N</li><li${_scopeId}>eventExecute\u4E2DOUT_BX_AMT\u4E8B\u4EF6\u65F6\u8C03\u7528reSignFlag\u65B9\u6CD5\u5224\u65AD</li><li${_scopeId}>\u82E5reSignFlag=Y\u76F4\u63A5\u8FD4\u56DEY\uFF1B\u5426\u5219\u67E5\u8BE2MBO\u5408\u540C\u9644\u4EF6\u6570\u91CF(getAttachmentFileCount)\uFF0C\u9644\u4EF6\u4E3A0\u65F6\u8FD4\u56DEY</li><li${_scopeId}>\u66F4\u65B0\u5DE5\u4F5C\u6D41\u53D8\u91CFreSignFlag\u548CoutBxAmt\uFF0C\u5F71\u54CD\u540E\u7EED\u5BA1\u6279\u8282\u70B9</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u610F\u4E49"),
              createTextVNode("\uFF1A\u5224\u65AD\u662F\u5426\u9700\u8981\u91CD\u65B0\u7B7E\u7F72MBO\u5408\u540C\u534F\u8BAE\uFF0C\u5F71\u54CD\u5DE5\u4F5C\u6D41\u5206\u652F")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u5177\u4F53\u903B\u8F91\u63CF\u8FF0"),
              createTextVNode("\uFF1A")
            ]),
            createVNode("li", null, "reSignFlag\u5B57\u6BB5\uFF1AY-\u9700\u91CD\u7B7E\u3001N-\u65E0\u9700\u91CD\u7B7E\uFF0C\u9ED8\u8BA4N"),
            createVNode("li", null, "eventExecute\u4E2DOUT_BX_AMT\u4E8B\u4EF6\u65F6\u8C03\u7528reSignFlag\u65B9\u6CD5\u5224\u65AD"),
            createVNode("li", null, "\u82E5reSignFlag=Y\u76F4\u63A5\u8FD4\u56DEY\uFF1B\u5426\u5219\u67E5\u8BE2MBO\u5408\u540C\u9644\u4EF6\u6570\u91CF(getAttachmentFileCount)\uFF0C\u9644\u4EF6\u4E3A0\u65F6\u8FD4\u56DEY"),
            createVNode("li", null, "\u66F4\u65B0\u5DE5\u4F5C\u6D41\u53D8\u91CFreSignFlag\u548CoutBxAmt\uFF0C\u5F71\u54CD\u540E\u7EED\u5BA1\u6279\u8282\u70B9")
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
        _push2(`<p${_scopeId}>\u5217\u8868\u9875\u4E3Ahlod\u4F4E\u4EE3\u7801\u9875\u9762\uFF0C\u8BE6\u60C5/\u65B0\u589E\u9875\u4E3AReact\u72EC\u7ACB\u7EC4\u4EF6\uFF0C\u4F4D\u4E8E<code${_scopeId}>arrow-ae/src/pages/storeManage/custDhReimburseHead/index.tsx</code>\uFF0C\u6807\u9898&quot;\u95E8\u5934\u5C55\u677F\u62A5\u9500\u7533\u8BF7&quot;\u3002</p><p${_scopeId}><strong${_scopeId}>\u57FA\u7840\u4FE1\u606F\u9762\u677F</strong></p><table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5B57\u6BB5\u540D</th><th${_scopeId}>\u6570\u636E\u5E93\u5217\u540D</th><th${_scopeId}>\u7EC4\u4EF6</th><th${_scopeId}>\u4E1A\u52A1\u91CA\u4E49</th><th${_scopeId}>\u663E\u9690\u6761\u4EF6</th><th${_scopeId}>\u53D6\u503C/\u8D4B\u503C\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u7533\u8BF7\u5355\u53F7</td><td${_scopeId}>REIMBURSE_CODE</td><td${_scopeId}>TextField</td><td${_scopeId}>\u62A5\u9500\u5355\u7F16\u7801</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u4FDD\u5B58\u65F6\u7531\u7F16\u7801\u89C4\u5219AE.DH_REIMBURSE_HEAD_NO\u751F\u6210\uFF0C\u53EA\u8BFB</td></tr><tr${_scopeId}><td${_scopeId}>\u7533\u8BF7\u65E5\u671F</td><td${_scopeId}>CREATION_DATE</td><td${_scopeId}>DatePicker</td><td${_scopeId}>\u521B\u5EFA\u65F6\u95F4</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u9ED8\u8BA4\u5F53\u524D\u65F6\u95F4\uFF0C\u53EA\u8BFB</td></tr><tr${_scopeId}><td${_scopeId}>\u7533\u8BF7\u4EBA</td><td${_scopeId}>CREATOR</td><td${_scopeId}>TextField</td><td${_scopeId}>\u521B\u5EFA\u4EBA\u59D3\u540D</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u9ED8\u8BA4\u5F53\u524D\u7528\u6237realName\uFF0C\u53EA\u8BFB</td></tr><tr${_scopeId}><td${_scopeId}>\u5BA1\u6838\u72B6\u6001</td><td${_scopeId}>HZ_APPROVE_STATUS</td><td${_scopeId}>TextField</td><td${_scopeId}>\u5DE5\u4F5C\u6D41\u5BA1\u6279\u72B6\u6001</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>lookupCode=HWKF.APPROVE_STATUS\uFF0C\u9ED8\u8BA4NEW\uFF0C\u53EA\u8BFB</td></tr><tr${_scopeId}><td${_scopeId}>\u7ECF\u9500\u5546\u7F16\u7801</td><td${_scopeId}>CUSTOMER_ID</td><td${_scopeId}>Lov</td><td${_scopeId}>\u7ECF\u9500\u5546\u9009\u62E9</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>lovCode=BASIC_CUSTOM_ORG_LOV_2\uFF0C\u5FC5\u586B\uFF0C\u8054\u52A8\u5E26\u51FA\u7F16\u7801/\u540D\u79F0/\u7B80\u79F0/\u7ECF\u8425\u5C5E\u6027/\u9500\u552E\u533A\u57DF/\u8FD0\u8425\u4E2D\u5FC3</td></tr><tr${_scopeId}><td${_scopeId}>\u7ECF\u9500\u5546\u540D\u79F0</td><td${_scopeId}>CUSTOMER_NAME</td><td${_scopeId}>TextField</td><td${_scopeId}>\u7ECF\u9500\u5546\u540D\u79F0</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>bind=customerLov.customerName\uFF0C\u53EA\u8BFB</td></tr><tr${_scopeId}><td${_scopeId}>\u7ECF\u9500\u5546\u7B80\u79F0</td><td${_scopeId}>SHORT_NAME</td><td${_scopeId}>TextField</td><td${_scopeId}>\u7ECF\u9500\u5546\u7B80\u79F0</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>bind=customerLov.shortName\uFF0C\u53EA\u8BFB</td></tr><tr${_scopeId}><td${_scopeId}>\u7ECF\u8425\u5C5E\u6027</td><td${_scopeId}>CUSTOMER_CLASS</td><td${_scopeId}>TextField</td><td${_scopeId}>\u7ECF\u9500\u5546\u7ECF\u8425\u5C5E\u6027</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>lookupCode=AE.CUSTOMER_CLASS\uFF0C\u53EA\u8BFB</td></tr><tr${_scopeId}><td${_scopeId}>\u9500\u552E\u533A\u57DF</td><td${_scopeId}>SALEZONE_ORG_NAME</td><td${_scopeId}>TextField</td><td${_scopeId}>\u9500\u552E\u533A\u57DF\u540D\u79F0</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>bind=customerLov.salezoneOrgName\uFF0C\u53EA\u8BFB</td></tr><tr${_scopeId}><td${_scopeId}>\u8FD0\u8425\u4E2D\u5FC3</td><td${_scopeId}>OPERAT_CENTER_ORG_NAME</td><td${_scopeId}>TextField</td><td${_scopeId}>\u8FD0\u8425\u4E2D\u5FC3\u540D\u79F0</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>bind=customerLov.operatCenterOrgName\uFF0C\u53EA\u8BFB</td></tr><tr${_scopeId}><td${_scopeId}>\u4EA4\u6613\u516C\u53F8</td><td${_scopeId}>TRADING_COMPANY_ID</td><td${_scopeId}>Lov</td><td${_scopeId}>\u4EA4\u6613\u516C\u53F8\u9009\u62E9</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>lovCode=MBO.DISTRIBUTOR_COMPANY_VO\uFF0C\u6309\u7ECF\u9500\u5546\u8FC7\u6EE4\uFF0C\u5FC5\u586B</td></tr><tr${_scopeId}><td${_scopeId}>\u4EA4\u6613\u516C\u53F8\u7F16\u7801</td><td${_scopeId}>TRADING_COMPANY_CODE</td><td${_scopeId}>TextField</td><td${_scopeId}>\u4EA4\u6613\u516C\u53F8\u7F16\u7801</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>bind=tradingCompanyLov.tradingCompanyCode\uFF0C\u53EA\u8BFB</td></tr><tr${_scopeId}><td${_scopeId}>\u4EA4\u6613\u516C\u53F8\u540D\u79F0</td><td${_scopeId}>TRADING_COMPANY_NAME</td><td${_scopeId}>TextField</td><td${_scopeId}>\u4EA4\u6613\u516C\u53F8\u540D\u79F0</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>bind=tradingCompanyLov.tradingCompanyName\uFF0C\u53EA\u8BFB</td></tr><tr${_scopeId}><td${_scopeId}>\u6CD5\u4EBA\u5BA2\u6237\u7F16\u7801</td><td${_scopeId}>LEGAL_ENTITY_ID</td><td${_scopeId}>Lov</td><td${_scopeId}>\u6CD5\u4EBA\u5BA2\u6237\u9009\u62E9</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>lovCode=MBO.DISTRIBUTOR_COMPANY_LEGAL_VO\uFF0C\u6309\u7ECF\u9500\u5546+\u4EA4\u6613\u516C\u53F8\u8FC7\u6EE4\uFF0C\u5FC5\u586B</td></tr><tr${_scopeId}><td${_scopeId}>\u6CD5\u4EBA\u5BA2\u6237\u540D\u79F0</td><td${_scopeId}>LEGAL_ENTITY_NAME</td><td${_scopeId}>TextField</td><td${_scopeId}>\u6CD5\u4EBA\u540D\u79F0</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>bind=legalEntityLov.legalEntityName\uFF0C\u53EA\u8BFB</td></tr><tr${_scopeId}><td${_scopeId}>\u5E97\u9762\u5EFA\u8BBE\u8865\u8D34\u653F\u7B56</td><td${_scopeId}>POLICY_STANDARD_ID</td><td${_scopeId}>Lov</td><td${_scopeId}>\u653F\u7B56\u9009\u62E9</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>lovCode=AE.POLICY_STANDARD_VALID_HEAD\uFF0C\u6309entid\u8FC7\u6EE4\uFF0C\u5FC5\u586B\uFF0C\u8054\u52A8\u5E26\u51FA\u62A5\u9500\u7C7B\u578B/\u9884\u7B97\u5E74\u5EA6</td></tr><tr${_scopeId}><td${_scopeId}>\u653F\u7B56\u7F16\u7801</td><td${_scopeId}>STANDARD_CODE</td><td${_scopeId}>TextField</td><td${_scopeId}>\u653F\u7B56\u7F16\u7801</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>bind=policyStandardLov.standardCode\uFF0C\u53EA\u8BFB</td></tr><tr${_scopeId}><td${_scopeId}>\u653F\u7B56\u540D\u79F0</td><td${_scopeId}>STANDARD_NAME</td><td${_scopeId}>TextField</td><td${_scopeId}>\u653F\u7B56\u540D\u79F0</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>bind=policyStandardLov.standardName\uFF0C\u53EA\u8BFB</td></tr><tr${_scopeId}><td${_scopeId}>\u62A5\u9500\u7C7B\u578B</td><td${_scopeId}>BX_TYPE</td><td${_scopeId}>TextField</td><td${_scopeId}>\u989D\u5EA6\u5185/\u989D\u5EA6\u5916</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>lookupCode=AE.QUOTA_TYPE\uFF0Cbind=policyStandardLov.budgetType\uFF0C\u5FC5\u586B</td></tr><tr${_scopeId}><td${_scopeId}>\u652F\u4ED8\u65B9\u5F0F</td><td${_scopeId}>PAY_TYPE</td><td${_scopeId}>TextField</td><td${_scopeId}>\u652F\u4ED8\u65B9\u5F0F</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>lookupCode=AE.PAY_TYPE\uFF0C\u9ED8\u8BA43(\u7ECF\u9500\u5546\u627F\u62C5)\uFF0C\u5FC5\u586B</td></tr><tr${_scopeId}><td${_scopeId}>\u9884\u7B97\u5E74\u5EA6</td><td${_scopeId}>YEAR</td><td${_scopeId}>TextField</td><td${_scopeId}>\u9884\u7B97\u5E74\u5EA6</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>bind=policyStandardLov.year\uFF0C\u989D\u5EA6\u5916\u65F6\u5FC5\u586B</td></tr><tr${_scopeId}><td${_scopeId}>\u63D0\u524D\u5151\u73B0\u6BD4\u4F8B</td><td${_scopeId}>IN_EARLY_CASHOUT_RATIO</td><td${_scopeId}>TextField</td><td${_scopeId}>\u989D\u5EA6\u5185\u63D0\u524D\u5151\u73B0\u6BD4\u4F8B</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>lookupCode=AE.EARLY_ENCASHMENT_RATIO\uFF0C\u9ED8\u8BA40</td></tr><tr${_scopeId}><td${_scopeId}>\u9700\u91CD\u7B7E\u534F\u8BAE</td><td${_scopeId}>RE_SIGN_FLAG</td><td${_scopeId}>TextField</td><td${_scopeId}>\u9700\u91CD\u7B7EMBO\u534F\u8BAE\u6807\u8BC6</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>lookupCode=AE.YN\uFF0C\u9ED8\u8BA4N</td></tr><tr${_scopeId}><td${_scopeId}>\u5907\u6CE8</td><td${_scopeId}>REMARK</td><td${_scopeId}>TextField</td><td${_scopeId}>\u5907\u6CE8\u4FE1\u606F</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u7528\u6237\u8F93\u5165</td></tr><tr${_scopeId}><td${_scopeId}>\u7ECF\u9500\u5546\u7F16\u7801</td><td${_scopeId}>CUSTOMER_CODE</td><td${_scopeId}>TextField</td><td${_scopeId}>\u7ECF\u9500\u5546\u7F16\u7801</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>bind=customerLov.customerCode\uFF0C\u53EA\u8BFB</td></tr><tr${_scopeId}><td${_scopeId}>\u6CD5\u4EBA\u5BA2\u6237\u7F16\u7801</td><td${_scopeId}>LEGAL_ENTITY_CODE</td><td${_scopeId}>TextField</td><td${_scopeId}>\u6CD5\u4EBA\u5BA2\u6237\u7F16\u7801</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>bind=legalEntityLov.legalEntityCode\uFF0C\u53EA\u8BFB</td></tr><tr${_scopeId}><td${_scopeId}>\u5BA2\u6237\u989D\u5EA6\u9650\u5236\u6807\u5FD7</td><td${_scopeId}>CUST_LIMIT_FLAG</td><td${_scopeId}>TextField</td><td${_scopeId}>\u662F\u5426\u9650\u989D\u62A5\u9500</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>bind=policyStandardLov.custLimitFlag\uFF0C\u53EA\u8BFB</td></tr><tr${_scopeId}><td${_scopeId}>\u62A5\u9500\u5206\u6790</td><td${_scopeId}>BX_FX</td><td${_scopeId}>TextField</td><td${_scopeId}>\u62A5\u9500\u5206\u6790</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u7CFB\u7EDF\u7EF4\u62A4</td></tr></tbody></table><p${_scopeId}><strong${_scopeId}>\u91D1\u989D\u6C47\u603B\u4FE1\u606F</strong></p><table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5B57\u6BB5\u540D</th><th${_scopeId}>\u6570\u636E\u5E93\u5217\u540D</th><th${_scopeId}>\u7EC4\u4EF6</th><th${_scopeId}>\u4E1A\u52A1\u91CA\u4E49</th><th${_scopeId}>\u663E\u9690\u6761\u4EF6</th><th${_scopeId}>\u53D6\u503C/\u8D4B\u503C\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u6807\u51C6\u603B\u989D</td><td${_scopeId}>SUM_STANDARD_AMT</td><td${_scopeId}>Currency</td><td${_scopeId}>\u6807\u51C6\u91D1\u989D\u5408\u8BA1</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u884C\u8868\u6807\u51C6\u91D1\u989D\u6C47\u603B\uFF0C\u53EA\u8BFB</td></tr><tr${_scopeId}><td${_scopeId}>\u7533\u8BF7\u603B\u989D</td><td${_scopeId}>SUM_APPLY_AMT</td><td${_scopeId}>Currency</td><td${_scopeId}>\u7533\u8BF7\u91D1\u989D\u5408\u8BA1</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u884C\u8868\u7533\u8BF7\u91D1\u989D\u6C47\u603B\uFF0C\u53EA\u8BFB</td></tr><tr${_scopeId}><td${_scopeId}>\u4E1A\u52A1\u6279\u51C6\u603B\u989D</td><td${_scopeId}>SUM_BIZ_AMT</td><td${_scopeId}>Currency</td><td${_scopeId}>\u4E1A\u52A1\u6279\u51C6\u91D1\u989D\u5408\u8BA1</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u884C\u8868\u4E1A\u52A1\u6279\u51C6\u91D1\u989D\u6C47\u603B\uFF0C\u53EA\u8BFB</td></tr><tr${_scopeId}><td${_scopeId}>\u8D22\u52A1\u6279\u51C6\u603B\u989D</td><td${_scopeId}>SUM_FIN_AMT</td><td${_scopeId}>Currency</td><td${_scopeId}>\u8D22\u52A1\u6279\u51C6\u91D1\u989D\u5408\u8BA1</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u884C\u8868\u8D22\u52A1\u6279\u51C6\u91D1\u989D\u6C47\u603B\uFF0C\u53EA\u8BFB</td></tr><tr${_scopeId}><td${_scopeId}>\u5B9E\u9645\u7533\u8BF7\u91D1\u989D(\u989D\u5EA6\u5185)</td><td${_scopeId}>IN_ACTUAL_APPLY_AMT</td><td${_scopeId}>Currency</td><td${_scopeId}>\u989D\u5EA6\u5185\u5B9E\u9645\u7533\u8BF7\u603B\u989D</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u63D0\u4EA4\u65F6\u8BA1\u7B97\uFF0C\u53EA\u8BFB</td></tr><tr${_scopeId}><td${_scopeId}>\u5B9E\u9645\u62A5\u9500\u91D1\u989D(\u989D\u5EA6\u5185)</td><td${_scopeId}>IN_BX_AMT</td><td${_scopeId}>Currency</td><td${_scopeId}>\u989D\u5EA6\u5185\u5B9E\u9645\u62A5\u9500\u603B\u989D</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u63D0\u4EA4\u65F6\u8BA1\u7B97\uFF0C\u53EA\u8BFB</td></tr><tr${_scopeId}><td${_scopeId}>\u5B9E\u9645\u7533\u8BF7\u91D1\u989D(\u989D\u5EA6\u5916)</td><td${_scopeId}>OUT_ACTUAL_APPLY_AMT</td><td${_scopeId}>Currency</td><td${_scopeId}>\u989D\u5EA6\u5916\u5B9E\u9645\u7533\u8BF7\u603B\u989D</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u63D0\u4EA4\u65F6\u8BA1\u7B97\uFF0C\u53EA\u8BFB</td></tr><tr${_scopeId}><td${_scopeId}>\u5B9E\u9645\u62A5\u9500\u91D1\u989D(\u989D\u5EA6\u5916)</td><td${_scopeId}>OUT_BX_AMT</td><td${_scopeId}>Currency</td><td${_scopeId}>\u989D\u5EA6\u5916\u5B9E\u9645\u62A5\u9500\u603B\u989D</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u63D0\u4EA4\u65F6\u8BA1\u7B97\uFF0C\u53EA\u8BFB</td></tr><tr${_scopeId}><td${_scopeId}>\u989D\u5EA6\u5916\u8D85\u9650\u91D1\u989D</td><td${_scopeId}>OUT_EXCESS_AMT</td><td${_scopeId}>Currency</td><td${_scopeId}>\u989D\u5EA6\u5916\u8D85\u9650\u91D1\u989D</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u63D0\u4EA4\u65F6\u8BA1\u7B97\uFF0C\u53EA\u8BFB</td></tr><tr${_scopeId}><td${_scopeId}>\u989D\u5EA6\u5916\u5DF2\u62A5\u9500\u91D1\u989D</td><td${_scopeId}>OUT_BX_USED_AMT</td><td${_scopeId}>Currency</td><td${_scopeId}>\u540C\u7ECF\u9500\u5546+\u653F\u7B56\u5DF2\u62A5\u9500\u91D1\u989D</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u63D0\u4EA4\u65F6\u8BA1\u7B97\uFF0C\u53EA\u8BFB</td></tr><tr${_scopeId}><td${_scopeId}>\u7ECF\u9500\u5546\u9650\u989D</td><td${_scopeId}>CUST_LIMIT_AMT</td><td${_scopeId}>Currency</td><td${_scopeId}>\u7ECF\u9500\u5546\u9650\u989D</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u63D0\u4EA4\u65F6\u83B7\u53D6\uFF0C\u53EA\u8BFB</td></tr></tbody></table><p${_scopeId}><strong${_scopeId}>\u95E8\u5E97\u88C5\u4FEE\u660E\u7EC6\u884C\u8868\u683C(terminalTableDS)</strong></p><table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5B57\u6BB5\u540D</th><th${_scopeId}>\u6570\u636E\u5E93\u5217\u540D</th><th${_scopeId}>\u7EC4\u4EF6</th><th${_scopeId}>\u4E1A\u52A1\u91CA\u4E49</th><th${_scopeId}>\u663E\u9690\u6761\u4EF6</th><th${_scopeId}>\u53D6\u503C/\u8D4B\u503C\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u95E8\u5E97\u7F16\u7801</td><td${_scopeId}>TERMINAL_ID</td><td${_scopeId}>Lov</td><td${_scopeId}>\u95E8\u5E97\u9009\u62E9</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>lovCode=AE.STORE_LIST_HEAD_VIEW\uFF0C\u5FC5\u586B\uFF0C\u8054\u52A8\u5E26\u51FA\u540D\u79F0/\u7C7B\u578B/\u9762\u79EF/\u5730\u5740</td></tr><tr${_scopeId}><td${_scopeId}>\u95E8\u5E97\u540D\u79F0</td><td${_scopeId}>TERMINAL_NAME</td><td${_scopeId}>TextField</td><td${_scopeId}>\u95E8\u5E97\u540D\u79F0</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>bind=terminalCodeObj.terminalName\uFF0C\u53EA\u8BFB</td></tr><tr${_scopeId}><td${_scopeId}>\u95E8\u5E97\u7C7B\u578B</td><td${_scopeId}>TERMINAL_TYPE</td><td${_scopeId}>TextField</td><td${_scopeId}>\u95E8\u5E97\u7C7B\u578B</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>lookupCode=AE.TERMINAL_TYPE\uFF0C\u53EA\u8BFB</td></tr><tr${_scopeId}><td${_scopeId}>\u95E8\u5E97\u9762\u79EF</td><td${_scopeId}>TERMINAL_AREA</td><td${_scopeId}>NumberField</td><td${_scopeId}>\u95E8\u5E97\u9762\u79EF(m\xB2)</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>bind=terminalCodeObj.terminalArea\uFF0C\u53EA\u8BFB</td></tr><tr${_scopeId}><td${_scopeId}>\u95E8\u5E97\u5730\u5740</td><td${_scopeId}>ADDR</td><td${_scopeId}>TextField</td><td${_scopeId}>\u95E8\u5E97\u5730\u5740</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>bind=terminalCodeObj.addr\uFF0C\u53EA\u8BFB</td></tr><tr${_scopeId}><td${_scopeId}>\u8865\u8D34\u9879\u76EE</td><td${_scopeId}>DECORATE_PROJECT</td><td${_scopeId}>Lov</td><td${_scopeId}>\u88C5\u4FEE\u9879\u76EE\u9009\u62E9</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>lovCode=AE.SUBSIDY_PROGRAM_VIEW\uFF0C\u6309\u653F\u7B56+\u95E8\u5E97\u7C7B\u578B\u8FC7\u6EE4\uFF0C\u5FC5\u586B</td></tr><tr${_scopeId}><td${_scopeId}>\u5355\u4F4D\u7C7B\u578B</td><td${_scopeId}>UNIT_TYPE</td><td${_scopeId}>TextField</td><td${_scopeId}>\u5355\u4F4D\u7C7B\u578B</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>lookupCode=AE.MKT.POLICY_STANDARD_UNIT_TYPE</td></tr><tr${_scopeId}><td${_scopeId}>\u6807\u51C6\u7B49\u7EA7</td><td${_scopeId}>STANDARD_GRADE</td><td${_scopeId}>TextField</td><td${_scopeId}>\u6807\u51C6\u7B49\u7EA7</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u4ECE\u653F\u7B56\u884C\u8868\u5E26\u5165</td></tr><tr${_scopeId}><td${_scopeId}>\u6570\u91CF\u4E0B\u9650</td><td${_scopeId}>MIN_NUM</td><td${_scopeId}>NumberField</td><td${_scopeId}>\u653F\u7B56\u6570\u91CF\u4E0B\u9650</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u4ECE\u653F\u7B56\u884C\u8868\u5E26\u5165\uFF0C\u53EA\u8BFB</td></tr><tr${_scopeId}><td${_scopeId}>\u6570\u91CF\u4E0A\u9650</td><td${_scopeId}>MAX_NUM</td><td${_scopeId}>NumberField</td><td${_scopeId}>\u653F\u7B56\u6570\u91CF\u4E0A\u9650</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u4ECE\u653F\u7B56\u884C\u8868\u5E26\u5165\uFF0C\u53EA\u8BFB</td></tr><tr${_scopeId}><td${_scopeId}>\u989D\u5EA6\u5185\u6807\u51C6</td><td${_scopeId}>IN_STANDARD</td><td${_scopeId}>Currency</td><td${_scopeId}>\u989D\u5EA6\u5185\u6807\u51C6\u5355\u4EF7</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u4ECE\u653F\u7B56\u884C\u8868\u5E26\u5165\uFF0C\u53EA\u8BFB</td></tr><tr${_scopeId}><td${_scopeId}>\u989D\u5EA6\u5185\u6807\u51C6\u91D1\u989D</td><td${_scopeId}>IN_STANDARD_AMT</td><td${_scopeId}>Currency</td><td${_scopeId}>\u989D\u5EA6\u5185\u6807\u51C6\u91D1\u989D</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>= \u6807\u51C6\u5355\u4EF7 \xD7 \u6570\u91CF\uFF0C\u53EA\u8BFB</td></tr><tr${_scopeId}><td${_scopeId}>\u989D\u5EA6\u5916\u6807\u51C6</td><td${_scopeId}>OUT_STANDARD</td><td${_scopeId}>Currency</td><td${_scopeId}>\u989D\u5EA6\u5916\u6807\u51C6\u5355\u4EF7</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u4ECE\u653F\u7B56\u884C\u8868\u5E26\u5165\uFF0C\u53EA\u8BFB</td></tr><tr${_scopeId}><td${_scopeId}>\u989D\u5EA6\u5916\u6807\u51C6\u91D1\u989D</td><td${_scopeId}>OUT_STANDARD_AMT</td><td${_scopeId}>Currency</td><td${_scopeId}>\u989D\u5EA6\u5916\u6807\u51C6\u91D1\u989D</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>= \u6807\u51C6\u5355\u4EF7 \xD7 \u6570\u91CF\uFF0C\u53EA\u8BFB</td></tr><tr${_scopeId}><td${_scopeId}>\u6570\u91CF</td><td${_scopeId}>APPLY_NUM</td><td${_scopeId}>NumberField</td><td${_scopeId}>\u7533\u8BF7\u6570\u91CF</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u7528\u6237\u8F93\u5165\uFF0C\u5FC5\u586B\uFF0C\u6821\u9A8C\u8303\u56F4[minNum, maxNum]</td></tr><tr${_scopeId}><td${_scopeId}>\u989D\u5EA6\u5185\u7533\u8BF7\u91D1\u989D</td><td${_scopeId}>IN_APPLY_AMT</td><td${_scopeId}>Currency</td><td${_scopeId}>\u989D\u5EA6\u5185\u7533\u8BF7\u91D1\u989D</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u7528\u6237\u8F93\u5165\uFF0C\u975E\u8D85\u989D\u65F6\u4E0D\u8D85\u6807\u51C6\u91D1\u989D</td></tr><tr${_scopeId}><td${_scopeId}>\u989D\u5EA6\u5916\u7533\u8BF7\u91D1\u989D</td><td${_scopeId}>OUT_APPLY_AMT</td><td${_scopeId}>Currency</td><td${_scopeId}>\u989D\u5EA6\u5916\u7533\u8BF7\u91D1\u989D</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u7528\u6237\u8F93\u5165\uFF0C\u975E\u8D85\u989D\u65F6\u4E0D\u8D85\u6807\u51C6\u91D1\u989D</td></tr><tr${_scopeId}><td${_scopeId}>\u989D\u5EA6\u5185\u5BA1\u6279\u91D1\u989D</td><td${_scopeId}>IN_BIZ_AMT</td><td${_scopeId}>Currency</td><td${_scopeId}>\u989D\u5EA6\u5185\u4E1A\u52A1\u6279\u51C6\u91D1\u989D</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u533A\u57DF\u7ECF\u7406\u5BA1\u6279\u8282\u70B9\u53EF\u7F16\u8F91\uFF0C\u975E\u8D85\u989D\u65F6\u4E0D\u8D85\u6807\u51C6\u91D1\u989D</td></tr><tr${_scopeId}><td${_scopeId}>\u989D\u5EA6\u5916\u5BA1\u6279\u91D1\u989D</td><td${_scopeId}>OUT_BIZ_AMT</td><td${_scopeId}>Currency</td><td${_scopeId}>\u989D\u5EA6\u5916\u4E1A\u52A1\u6279\u51C6\u91D1\u989D</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u533A\u57DF\u7ECF\u7406\u5BA1\u6279\u8282\u70B9\u53EF\u7F16\u8F91\uFF0C\u975E\u8D85\u989D\u65F6\u4E0D\u8D85\u6807\u51C6\u91D1\u989D</td></tr><tr${_scopeId}><td${_scopeId}>\u989D\u5EA6\u5185\u6279\u51C6\u91D1\u989D</td><td${_scopeId}>IN_FIN_AMT</td><td${_scopeId}>Currency</td><td${_scopeId}>\u989D\u5EA6\u5185\u8D22\u52A1\u6279\u51C6\u91D1\u989D</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u9500\u552E\u4F1A\u8BA1\u5BA1\u6279\u8282\u70B9\u53EF\u7F16\u8F91</td></tr><tr${_scopeId}><td${_scopeId}>\u989D\u5EA6\u5916\u6279\u51C6\u91D1\u989D</td><td${_scopeId}>OUT_FIN_AMT</td><td${_scopeId}>Currency</td><td${_scopeId}>\u989D\u5EA6\u5916\u8D22\u52A1\u6279\u51C6\u91D1\u989D</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u9500\u552E\u4F1A\u8BA1\u5BA1\u6279\u8282\u70B9\u53EF\u7F16\u8F91</td></tr><tr${_scopeId}><td${_scopeId}>\u88C5\u4FEE\u524D\u7167\u7247</td><td${_scopeId}>BEFORE_DOC_NAME</td><td${_scopeId}>TextField</td><td${_scopeId}>\u88C5\u4FEE\u524D\u7167\u7247</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u4E0A\u4F20\u9644\u4EF6\uFF0C\u5FC5\u586B\uFF0C\u652F\u6301\u4E0B\u8F7D/\u9884\u89C8</td></tr><tr${_scopeId}><td${_scopeId}>\u88C5\u4FEE\u524D\u7167\u7247ID</td><td${_scopeId}>BEFORE_DOC_ID</td><td${_scopeId}>TextField</td><td${_scopeId}>\u88C5\u4FEE\u524D\u7167\u7247\u9644\u4EF6UUID</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u4E0A\u4F20\u9644\u4EF6\u83B7\u53D6</td></tr><tr${_scopeId}><td${_scopeId}>\u88C5\u4FEE\u540E\u7167\u7247</td><td${_scopeId}>AFTER_DOC_NAME</td><td${_scopeId}>TextField</td><td${_scopeId}>\u88C5\u4FEE\u540E\u7167\u7247</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u4E0A\u4F20\u9644\u4EF6\uFF0C\u5FC5\u586B\uFF0C\u652F\u6301\u4E0B\u8F7D/\u9884\u89C8</td></tr><tr${_scopeId}><td${_scopeId}>\u88C5\u4FEE\u540E\u7167\u7247ID</td><td${_scopeId}>AFTER_DOC_ID</td><td${_scopeId}>TextField</td><td${_scopeId}>\u88C5\u4FEE\u540E\u7167\u7247\u9644\u4EF6UUID</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u4E0A\u4F20\u9644\u4EF6\u83B7\u53D6</td></tr><tr${_scopeId}><td${_scopeId}>\u88C5\u4FEE\u9879\u76EE\u540D\u79F0</td><td${_scopeId}>DECORATE_PROJECT_NAME</td><td${_scopeId}>TextField</td><td${_scopeId}>\u88C5\u4FEE\u9879\u76EE\u540D\u79F0</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u4ECE\u8865\u8D34\u9879\u76EELOV\u5E26\u5165\uFF0C\u53EA\u8BFB</td></tr><tr${_scopeId}><td${_scopeId}>\u5907\u6CE8</td><td${_scopeId}>LINE_REMARK</td><td${_scopeId}>TextField</td><td${_scopeId}>\u884C\u5907\u6CE8</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u7528\u6237\u8F93\u5165</td></tr></tbody></table>`);
      } else {
        return [
          createVNode("p", null, [
            createTextVNode("\u5217\u8868\u9875\u4E3Ahlod\u4F4E\u4EE3\u7801\u9875\u9762\uFF0C\u8BE6\u60C5/\u65B0\u589E\u9875\u4E3AReact\u72EC\u7ACB\u7EC4\u4EF6\uFF0C\u4F4D\u4E8E"),
            createVNode("code", null, "arrow-ae/src/pages/storeManage/custDhReimburseHead/index.tsx"),
            createTextVNode('\uFF0C\u6807\u9898"\u95E8\u5934\u5C55\u677F\u62A5\u9500\u7533\u8BF7"\u3002')
          ]),
          createVNode("p", null, [
            createVNode("strong", null, "\u57FA\u7840\u4FE1\u606F\u9762\u677F")
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
                createVNode("td", null, "\u7533\u8BF7\u5355\u53F7"),
                createVNode("td", null, "REIMBURSE_CODE"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u62A5\u9500\u5355\u7F16\u7801"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u4FDD\u5B58\u65F6\u7531\u7F16\u7801\u89C4\u5219AE.DH_REIMBURSE_HEAD_NO\u751F\u6210\uFF0C\u53EA\u8BFB")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7533\u8BF7\u65E5\u671F"),
                createVNode("td", null, "CREATION_DATE"),
                createVNode("td", null, "DatePicker"),
                createVNode("td", null, "\u521B\u5EFA\u65F6\u95F4"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u9ED8\u8BA4\u5F53\u524D\u65F6\u95F4\uFF0C\u53EA\u8BFB")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7533\u8BF7\u4EBA"),
                createVNode("td", null, "CREATOR"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u521B\u5EFA\u4EBA\u59D3\u540D"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u9ED8\u8BA4\u5F53\u524D\u7528\u6237realName\uFF0C\u53EA\u8BFB")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5BA1\u6838\u72B6\u6001"),
                createVNode("td", null, "HZ_APPROVE_STATUS"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u5DE5\u4F5C\u6D41\u5BA1\u6279\u72B6\u6001"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "lookupCode=HWKF.APPROVE_STATUS\uFF0C\u9ED8\u8BA4NEW\uFF0C\u53EA\u8BFB")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7ECF\u9500\u5546\u7F16\u7801"),
                createVNode("td", null, "CUSTOMER_ID"),
                createVNode("td", null, "Lov"),
                createVNode("td", null, "\u7ECF\u9500\u5546\u9009\u62E9"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "lovCode=BASIC_CUSTOM_ORG_LOV_2\uFF0C\u5FC5\u586B\uFF0C\u8054\u52A8\u5E26\u51FA\u7F16\u7801/\u540D\u79F0/\u7B80\u79F0/\u7ECF\u8425\u5C5E\u6027/\u9500\u552E\u533A\u57DF/\u8FD0\u8425\u4E2D\u5FC3")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7ECF\u9500\u5546\u540D\u79F0"),
                createVNode("td", null, "CUSTOMER_NAME"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u7ECF\u9500\u5546\u540D\u79F0"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "bind=customerLov.customerName\uFF0C\u53EA\u8BFB")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7ECF\u9500\u5546\u7B80\u79F0"),
                createVNode("td", null, "SHORT_NAME"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u7ECF\u9500\u5546\u7B80\u79F0"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "bind=customerLov.shortName\uFF0C\u53EA\u8BFB")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7ECF\u8425\u5C5E\u6027"),
                createVNode("td", null, "CUSTOMER_CLASS"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u7ECF\u9500\u5546\u7ECF\u8425\u5C5E\u6027"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "lookupCode=AE.CUSTOMER_CLASS\uFF0C\u53EA\u8BFB")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u9500\u552E\u533A\u57DF"),
                createVNode("td", null, "SALEZONE_ORG_NAME"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u9500\u552E\u533A\u57DF\u540D\u79F0"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "bind=customerLov.salezoneOrgName\uFF0C\u53EA\u8BFB")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u8FD0\u8425\u4E2D\u5FC3"),
                createVNode("td", null, "OPERAT_CENTER_ORG_NAME"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u8FD0\u8425\u4E2D\u5FC3\u540D\u79F0"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "bind=customerLov.operatCenterOrgName\uFF0C\u53EA\u8BFB")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u4EA4\u6613\u516C\u53F8"),
                createVNode("td", null, "TRADING_COMPANY_ID"),
                createVNode("td", null, "Lov"),
                createVNode("td", null, "\u4EA4\u6613\u516C\u53F8\u9009\u62E9"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "lovCode=MBO.DISTRIBUTOR_COMPANY_VO\uFF0C\u6309\u7ECF\u9500\u5546\u8FC7\u6EE4\uFF0C\u5FC5\u586B")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u4EA4\u6613\u516C\u53F8\u7F16\u7801"),
                createVNode("td", null, "TRADING_COMPANY_CODE"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u4EA4\u6613\u516C\u53F8\u7F16\u7801"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "bind=tradingCompanyLov.tradingCompanyCode\uFF0C\u53EA\u8BFB")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u4EA4\u6613\u516C\u53F8\u540D\u79F0"),
                createVNode("td", null, "TRADING_COMPANY_NAME"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u4EA4\u6613\u516C\u53F8\u540D\u79F0"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "bind=tradingCompanyLov.tradingCompanyName\uFF0C\u53EA\u8BFB")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6CD5\u4EBA\u5BA2\u6237\u7F16\u7801"),
                createVNode("td", null, "LEGAL_ENTITY_ID"),
                createVNode("td", null, "Lov"),
                createVNode("td", null, "\u6CD5\u4EBA\u5BA2\u6237\u9009\u62E9"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "lovCode=MBO.DISTRIBUTOR_COMPANY_LEGAL_VO\uFF0C\u6309\u7ECF\u9500\u5546+\u4EA4\u6613\u516C\u53F8\u8FC7\u6EE4\uFF0C\u5FC5\u586B")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6CD5\u4EBA\u5BA2\u6237\u540D\u79F0"),
                createVNode("td", null, "LEGAL_ENTITY_NAME"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u6CD5\u4EBA\u540D\u79F0"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "bind=legalEntityLov.legalEntityName\uFF0C\u53EA\u8BFB")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5E97\u9762\u5EFA\u8BBE\u8865\u8D34\u653F\u7B56"),
                createVNode("td", null, "POLICY_STANDARD_ID"),
                createVNode("td", null, "Lov"),
                createVNode("td", null, "\u653F\u7B56\u9009\u62E9"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "lovCode=AE.POLICY_STANDARD_VALID_HEAD\uFF0C\u6309entid\u8FC7\u6EE4\uFF0C\u5FC5\u586B\uFF0C\u8054\u52A8\u5E26\u51FA\u62A5\u9500\u7C7B\u578B/\u9884\u7B97\u5E74\u5EA6")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u653F\u7B56\u7F16\u7801"),
                createVNode("td", null, "STANDARD_CODE"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u653F\u7B56\u7F16\u7801"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "bind=policyStandardLov.standardCode\uFF0C\u53EA\u8BFB")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u653F\u7B56\u540D\u79F0"),
                createVNode("td", null, "STANDARD_NAME"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u653F\u7B56\u540D\u79F0"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "bind=policyStandardLov.standardName\uFF0C\u53EA\u8BFB")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u62A5\u9500\u7C7B\u578B"),
                createVNode("td", null, "BX_TYPE"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u989D\u5EA6\u5185/\u989D\u5EA6\u5916"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "lookupCode=AE.QUOTA_TYPE\uFF0Cbind=policyStandardLov.budgetType\uFF0C\u5FC5\u586B")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u652F\u4ED8\u65B9\u5F0F"),
                createVNode("td", null, "PAY_TYPE"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u652F\u4ED8\u65B9\u5F0F"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "lookupCode=AE.PAY_TYPE\uFF0C\u9ED8\u8BA43(\u7ECF\u9500\u5546\u627F\u62C5)\uFF0C\u5FC5\u586B")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u9884\u7B97\u5E74\u5EA6"),
                createVNode("td", null, "YEAR"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u9884\u7B97\u5E74\u5EA6"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "bind=policyStandardLov.year\uFF0C\u989D\u5EA6\u5916\u65F6\u5FC5\u586B")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u63D0\u524D\u5151\u73B0\u6BD4\u4F8B"),
                createVNode("td", null, "IN_EARLY_CASHOUT_RATIO"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u989D\u5EA6\u5185\u63D0\u524D\u5151\u73B0\u6BD4\u4F8B"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "lookupCode=AE.EARLY_ENCASHMENT_RATIO\uFF0C\u9ED8\u8BA40")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u9700\u91CD\u7B7E\u534F\u8BAE"),
                createVNode("td", null, "RE_SIGN_FLAG"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u9700\u91CD\u7B7EMBO\u534F\u8BAE\u6807\u8BC6"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "lookupCode=AE.YN\uFF0C\u9ED8\u8BA4N")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5907\u6CE8"),
                createVNode("td", null, "REMARK"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u5907\u6CE8\u4FE1\u606F"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u7528\u6237\u8F93\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7ECF\u9500\u5546\u7F16\u7801"),
                createVNode("td", null, "CUSTOMER_CODE"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u7ECF\u9500\u5546\u7F16\u7801"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "bind=customerLov.customerCode\uFF0C\u53EA\u8BFB")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6CD5\u4EBA\u5BA2\u6237\u7F16\u7801"),
                createVNode("td", null, "LEGAL_ENTITY_CODE"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u6CD5\u4EBA\u5BA2\u6237\u7F16\u7801"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "bind=legalEntityLov.legalEntityCode\uFF0C\u53EA\u8BFB")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5BA2\u6237\u989D\u5EA6\u9650\u5236\u6807\u5FD7"),
                createVNode("td", null, "CUST_LIMIT_FLAG"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u662F\u5426\u9650\u989D\u62A5\u9500"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "bind=policyStandardLov.custLimitFlag\uFF0C\u53EA\u8BFB")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u62A5\u9500\u5206\u6790"),
                createVNode("td", null, "BX_FX"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u62A5\u9500\u5206\u6790"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u7CFB\u7EDF\u7EF4\u62A4")
              ])
            ])
          ]),
          createVNode("p", null, [
            createVNode("strong", null, "\u91D1\u989D\u6C47\u603B\u4FE1\u606F")
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
                createVNode("td", null, "\u6807\u51C6\u603B\u989D"),
                createVNode("td", null, "SUM_STANDARD_AMT"),
                createVNode("td", null, "Currency"),
                createVNode("td", null, "\u6807\u51C6\u91D1\u989D\u5408\u8BA1"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u884C\u8868\u6807\u51C6\u91D1\u989D\u6C47\u603B\uFF0C\u53EA\u8BFB")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7533\u8BF7\u603B\u989D"),
                createVNode("td", null, "SUM_APPLY_AMT"),
                createVNode("td", null, "Currency"),
                createVNode("td", null, "\u7533\u8BF7\u91D1\u989D\u5408\u8BA1"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u884C\u8868\u7533\u8BF7\u91D1\u989D\u6C47\u603B\uFF0C\u53EA\u8BFB")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u4E1A\u52A1\u6279\u51C6\u603B\u989D"),
                createVNode("td", null, "SUM_BIZ_AMT"),
                createVNode("td", null, "Currency"),
                createVNode("td", null, "\u4E1A\u52A1\u6279\u51C6\u91D1\u989D\u5408\u8BA1"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u884C\u8868\u4E1A\u52A1\u6279\u51C6\u91D1\u989D\u6C47\u603B\uFF0C\u53EA\u8BFB")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u8D22\u52A1\u6279\u51C6\u603B\u989D"),
                createVNode("td", null, "SUM_FIN_AMT"),
                createVNode("td", null, "Currency"),
                createVNode("td", null, "\u8D22\u52A1\u6279\u51C6\u91D1\u989D\u5408\u8BA1"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u884C\u8868\u8D22\u52A1\u6279\u51C6\u91D1\u989D\u6C47\u603B\uFF0C\u53EA\u8BFB")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5B9E\u9645\u7533\u8BF7\u91D1\u989D(\u989D\u5EA6\u5185)"),
                createVNode("td", null, "IN_ACTUAL_APPLY_AMT"),
                createVNode("td", null, "Currency"),
                createVNode("td", null, "\u989D\u5EA6\u5185\u5B9E\u9645\u7533\u8BF7\u603B\u989D"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u63D0\u4EA4\u65F6\u8BA1\u7B97\uFF0C\u53EA\u8BFB")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5B9E\u9645\u62A5\u9500\u91D1\u989D(\u989D\u5EA6\u5185)"),
                createVNode("td", null, "IN_BX_AMT"),
                createVNode("td", null, "Currency"),
                createVNode("td", null, "\u989D\u5EA6\u5185\u5B9E\u9645\u62A5\u9500\u603B\u989D"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u63D0\u4EA4\u65F6\u8BA1\u7B97\uFF0C\u53EA\u8BFB")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5B9E\u9645\u7533\u8BF7\u91D1\u989D(\u989D\u5EA6\u5916)"),
                createVNode("td", null, "OUT_ACTUAL_APPLY_AMT"),
                createVNode("td", null, "Currency"),
                createVNode("td", null, "\u989D\u5EA6\u5916\u5B9E\u9645\u7533\u8BF7\u603B\u989D"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u63D0\u4EA4\u65F6\u8BA1\u7B97\uFF0C\u53EA\u8BFB")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5B9E\u9645\u62A5\u9500\u91D1\u989D(\u989D\u5EA6\u5916)"),
                createVNode("td", null, "OUT_BX_AMT"),
                createVNode("td", null, "Currency"),
                createVNode("td", null, "\u989D\u5EA6\u5916\u5B9E\u9645\u62A5\u9500\u603B\u989D"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u63D0\u4EA4\u65F6\u8BA1\u7B97\uFF0C\u53EA\u8BFB")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u989D\u5EA6\u5916\u8D85\u9650\u91D1\u989D"),
                createVNode("td", null, "OUT_EXCESS_AMT"),
                createVNode("td", null, "Currency"),
                createVNode("td", null, "\u989D\u5EA6\u5916\u8D85\u9650\u91D1\u989D"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u63D0\u4EA4\u65F6\u8BA1\u7B97\uFF0C\u53EA\u8BFB")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u989D\u5EA6\u5916\u5DF2\u62A5\u9500\u91D1\u989D"),
                createVNode("td", null, "OUT_BX_USED_AMT"),
                createVNode("td", null, "Currency"),
                createVNode("td", null, "\u540C\u7ECF\u9500\u5546+\u653F\u7B56\u5DF2\u62A5\u9500\u91D1\u989D"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u63D0\u4EA4\u65F6\u8BA1\u7B97\uFF0C\u53EA\u8BFB")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7ECF\u9500\u5546\u9650\u989D"),
                createVNode("td", null, "CUST_LIMIT_AMT"),
                createVNode("td", null, "Currency"),
                createVNode("td", null, "\u7ECF\u9500\u5546\u9650\u989D"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u63D0\u4EA4\u65F6\u83B7\u53D6\uFF0C\u53EA\u8BFB")
              ])
            ])
          ]),
          createVNode("p", null, [
            createVNode("strong", null, "\u95E8\u5E97\u88C5\u4FEE\u660E\u7EC6\u884C\u8868\u683C(terminalTableDS)")
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
                createVNode("td", null, "\u95E8\u5E97\u7F16\u7801"),
                createVNode("td", null, "TERMINAL_ID"),
                createVNode("td", null, "Lov"),
                createVNode("td", null, "\u95E8\u5E97\u9009\u62E9"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "lovCode=AE.STORE_LIST_HEAD_VIEW\uFF0C\u5FC5\u586B\uFF0C\u8054\u52A8\u5E26\u51FA\u540D\u79F0/\u7C7B\u578B/\u9762\u79EF/\u5730\u5740")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u95E8\u5E97\u540D\u79F0"),
                createVNode("td", null, "TERMINAL_NAME"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u95E8\u5E97\u540D\u79F0"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "bind=terminalCodeObj.terminalName\uFF0C\u53EA\u8BFB")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u95E8\u5E97\u7C7B\u578B"),
                createVNode("td", null, "TERMINAL_TYPE"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u95E8\u5E97\u7C7B\u578B"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "lookupCode=AE.TERMINAL_TYPE\uFF0C\u53EA\u8BFB")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u95E8\u5E97\u9762\u79EF"),
                createVNode("td", null, "TERMINAL_AREA"),
                createVNode("td", null, "NumberField"),
                createVNode("td", null, "\u95E8\u5E97\u9762\u79EF(m\xB2)"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "bind=terminalCodeObj.terminalArea\uFF0C\u53EA\u8BFB")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u95E8\u5E97\u5730\u5740"),
                createVNode("td", null, "ADDR"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u95E8\u5E97\u5730\u5740"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "bind=terminalCodeObj.addr\uFF0C\u53EA\u8BFB")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u8865\u8D34\u9879\u76EE"),
                createVNode("td", null, "DECORATE_PROJECT"),
                createVNode("td", null, "Lov"),
                createVNode("td", null, "\u88C5\u4FEE\u9879\u76EE\u9009\u62E9"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "lovCode=AE.SUBSIDY_PROGRAM_VIEW\uFF0C\u6309\u653F\u7B56+\u95E8\u5E97\u7C7B\u578B\u8FC7\u6EE4\uFF0C\u5FC5\u586B")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5355\u4F4D\u7C7B\u578B"),
                createVNode("td", null, "UNIT_TYPE"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u5355\u4F4D\u7C7B\u578B"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "lookupCode=AE.MKT.POLICY_STANDARD_UNIT_TYPE")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6807\u51C6\u7B49\u7EA7"),
                createVNode("td", null, "STANDARD_GRADE"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u6807\u51C6\u7B49\u7EA7"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u4ECE\u653F\u7B56\u884C\u8868\u5E26\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6570\u91CF\u4E0B\u9650"),
                createVNode("td", null, "MIN_NUM"),
                createVNode("td", null, "NumberField"),
                createVNode("td", null, "\u653F\u7B56\u6570\u91CF\u4E0B\u9650"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u4ECE\u653F\u7B56\u884C\u8868\u5E26\u5165\uFF0C\u53EA\u8BFB")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6570\u91CF\u4E0A\u9650"),
                createVNode("td", null, "MAX_NUM"),
                createVNode("td", null, "NumberField"),
                createVNode("td", null, "\u653F\u7B56\u6570\u91CF\u4E0A\u9650"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u4ECE\u653F\u7B56\u884C\u8868\u5E26\u5165\uFF0C\u53EA\u8BFB")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u989D\u5EA6\u5185\u6807\u51C6"),
                createVNode("td", null, "IN_STANDARD"),
                createVNode("td", null, "Currency"),
                createVNode("td", null, "\u989D\u5EA6\u5185\u6807\u51C6\u5355\u4EF7"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u4ECE\u653F\u7B56\u884C\u8868\u5E26\u5165\uFF0C\u53EA\u8BFB")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u989D\u5EA6\u5185\u6807\u51C6\u91D1\u989D"),
                createVNode("td", null, "IN_STANDARD_AMT"),
                createVNode("td", null, "Currency"),
                createVNode("td", null, "\u989D\u5EA6\u5185\u6807\u51C6\u91D1\u989D"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "= \u6807\u51C6\u5355\u4EF7 \xD7 \u6570\u91CF\uFF0C\u53EA\u8BFB")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u989D\u5EA6\u5916\u6807\u51C6"),
                createVNode("td", null, "OUT_STANDARD"),
                createVNode("td", null, "Currency"),
                createVNode("td", null, "\u989D\u5EA6\u5916\u6807\u51C6\u5355\u4EF7"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u4ECE\u653F\u7B56\u884C\u8868\u5E26\u5165\uFF0C\u53EA\u8BFB")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u989D\u5EA6\u5916\u6807\u51C6\u91D1\u989D"),
                createVNode("td", null, "OUT_STANDARD_AMT"),
                createVNode("td", null, "Currency"),
                createVNode("td", null, "\u989D\u5EA6\u5916\u6807\u51C6\u91D1\u989D"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "= \u6807\u51C6\u5355\u4EF7 \xD7 \u6570\u91CF\uFF0C\u53EA\u8BFB")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6570\u91CF"),
                createVNode("td", null, "APPLY_NUM"),
                createVNode("td", null, "NumberField"),
                createVNode("td", null, "\u7533\u8BF7\u6570\u91CF"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u7528\u6237\u8F93\u5165\uFF0C\u5FC5\u586B\uFF0C\u6821\u9A8C\u8303\u56F4[minNum, maxNum]")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u989D\u5EA6\u5185\u7533\u8BF7\u91D1\u989D"),
                createVNode("td", null, "IN_APPLY_AMT"),
                createVNode("td", null, "Currency"),
                createVNode("td", null, "\u989D\u5EA6\u5185\u7533\u8BF7\u91D1\u989D"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u7528\u6237\u8F93\u5165\uFF0C\u975E\u8D85\u989D\u65F6\u4E0D\u8D85\u6807\u51C6\u91D1\u989D")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u989D\u5EA6\u5916\u7533\u8BF7\u91D1\u989D"),
                createVNode("td", null, "OUT_APPLY_AMT"),
                createVNode("td", null, "Currency"),
                createVNode("td", null, "\u989D\u5EA6\u5916\u7533\u8BF7\u91D1\u989D"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u7528\u6237\u8F93\u5165\uFF0C\u975E\u8D85\u989D\u65F6\u4E0D\u8D85\u6807\u51C6\u91D1\u989D")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u989D\u5EA6\u5185\u5BA1\u6279\u91D1\u989D"),
                createVNode("td", null, "IN_BIZ_AMT"),
                createVNode("td", null, "Currency"),
                createVNode("td", null, "\u989D\u5EA6\u5185\u4E1A\u52A1\u6279\u51C6\u91D1\u989D"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u533A\u57DF\u7ECF\u7406\u5BA1\u6279\u8282\u70B9\u53EF\u7F16\u8F91\uFF0C\u975E\u8D85\u989D\u65F6\u4E0D\u8D85\u6807\u51C6\u91D1\u989D")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u989D\u5EA6\u5916\u5BA1\u6279\u91D1\u989D"),
                createVNode("td", null, "OUT_BIZ_AMT"),
                createVNode("td", null, "Currency"),
                createVNode("td", null, "\u989D\u5EA6\u5916\u4E1A\u52A1\u6279\u51C6\u91D1\u989D"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u533A\u57DF\u7ECF\u7406\u5BA1\u6279\u8282\u70B9\u53EF\u7F16\u8F91\uFF0C\u975E\u8D85\u989D\u65F6\u4E0D\u8D85\u6807\u51C6\u91D1\u989D")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u989D\u5EA6\u5185\u6279\u51C6\u91D1\u989D"),
                createVNode("td", null, "IN_FIN_AMT"),
                createVNode("td", null, "Currency"),
                createVNode("td", null, "\u989D\u5EA6\u5185\u8D22\u52A1\u6279\u51C6\u91D1\u989D"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u9500\u552E\u4F1A\u8BA1\u5BA1\u6279\u8282\u70B9\u53EF\u7F16\u8F91")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u989D\u5EA6\u5916\u6279\u51C6\u91D1\u989D"),
                createVNode("td", null, "OUT_FIN_AMT"),
                createVNode("td", null, "Currency"),
                createVNode("td", null, "\u989D\u5EA6\u5916\u8D22\u52A1\u6279\u51C6\u91D1\u989D"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u9500\u552E\u4F1A\u8BA1\u5BA1\u6279\u8282\u70B9\u53EF\u7F16\u8F91")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u88C5\u4FEE\u524D\u7167\u7247"),
                createVNode("td", null, "BEFORE_DOC_NAME"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u88C5\u4FEE\u524D\u7167\u7247"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u4E0A\u4F20\u9644\u4EF6\uFF0C\u5FC5\u586B\uFF0C\u652F\u6301\u4E0B\u8F7D/\u9884\u89C8")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u88C5\u4FEE\u524D\u7167\u7247ID"),
                createVNode("td", null, "BEFORE_DOC_ID"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u88C5\u4FEE\u524D\u7167\u7247\u9644\u4EF6UUID"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u4E0A\u4F20\u9644\u4EF6\u83B7\u53D6")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u88C5\u4FEE\u540E\u7167\u7247"),
                createVNode("td", null, "AFTER_DOC_NAME"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u88C5\u4FEE\u540E\u7167\u7247"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u4E0A\u4F20\u9644\u4EF6\uFF0C\u5FC5\u586B\uFF0C\u652F\u6301\u4E0B\u8F7D/\u9884\u89C8")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u88C5\u4FEE\u540E\u7167\u7247ID"),
                createVNode("td", null, "AFTER_DOC_ID"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u88C5\u4FEE\u540E\u7167\u7247\u9644\u4EF6UUID"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u4E0A\u4F20\u9644\u4EF6\u83B7\u53D6")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u88C5\u4FEE\u9879\u76EE\u540D\u79F0"),
                createVNode("td", null, "DECORATE_PROJECT_NAME"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u88C5\u4FEE\u9879\u76EE\u540D\u79F0"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u4ECE\u8865\u8D34\u9879\u76EELOV\u5E26\u5165\uFF0C\u53EA\u8BFB")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5907\u6CE8"),
                createVNode("td", null, "LINE_REMARK"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u884C\u5907\u6CE8"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u7528\u6237\u8F93\u5165")
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, { title: "API\u63A5\u53E3\u5217\u8868" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u63A5\u53E3</th><th${_scopeId}>\u65B9\u6CD5</th><th${_scopeId}>\u8DEF\u5F84</th><th${_scopeId}>\u8BF4\u660E</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u5217\u8868\u67E5\u8BE2</td><td${_scopeId}>GET</td><td${_scopeId}>\`/v1/{organizationId}/cust-dh-reimburse-heads/get-reimburse-head-list\`</td><td${_scopeId}>\u67E5\u8BE2\u62A5\u9500\u7533\u8BF7\u5217\u8868</td></tr><tr${_scopeId}><td${_scopeId}>\u8BE6\u60C5\u67E5\u8BE2</td><td${_scopeId}>GET</td><td${_scopeId}>\`/v1/{organizationId}/cust-dh-reimburse-heads/do-select\`</td><td${_scopeId}>\u67E5\u8BE2\u62A5\u9500\u7533\u8BF7\u8BE6\u60C5(\u542B\u884C\u8868)</td></tr><tr${_scopeId}><td${_scopeId}>\u6253\u5370</td><td${_scopeId}>GET</td><td${_scopeId}>\`/v1/{organizationId}/cust-dh-reimburse-heads/do-select-print\`</td><td${_scopeId}>\u83B7\u53D6\u6253\u5370\u6570\u636E(\u542B\u8BCD\u6C47\u7FFB\u8BD1\u3001\u5BA1\u6279\u5386\u53F2)</td></tr><tr${_scopeId}><td${_scopeId}>\u4FDD\u5B58</td><td${_scopeId}>POST</td><td${_scopeId}>\`/v1/{organizationId}/cust-dh-reimburse-heads/do-save\`</td><td${_scopeId}>\u65B0\u589E\u6216\u66F4\u65B0\u62A5\u9500\u7533\u8BF7</td></tr><tr${_scopeId}><td${_scopeId}>\u5220\u9664</td><td${_scopeId}>DELETE</td><td${_scopeId}>\`/v1/{organizationId}/cust-dh-reimburse-heads/do-delete\`</td><td${_scopeId}>\u5220\u9664\u62A5\u9500\u7533\u8BF7(\u542B\u884C\u8868\u3001\u9644\u4EF6)</td></tr><tr${_scopeId}><td${_scopeId}>\u5151\u73B0\u67E5\u8BE2</td><td${_scopeId}>GET</td><td${_scopeId}>\`/v1/{organizationId}/cust-dh-reimburse-heads/get-cashout-search\`</td><td${_scopeId}>\u67E5\u8BE2\u53EF\u5151\u73B0\u4FE1\u606F</td></tr><tr${_scopeId}><td${_scopeId}>\u5151\u73B0LOV</td><td${_scopeId}>GET</td><td${_scopeId}>\`/v1/{organizationId}/cust-dh-reimburse-heads/get-cashout-lov\`</td><td${_scopeId}>\u67E5\u8BE2\u53EF\u5151\u73B0\u7684\u62A5\u9500\u5355\u5217\u8868(\u4F9B\u5151\u73B0\u5355\u9009\u62E9)</td></tr><tr${_scopeId}><td${_scopeId}>\u90E8\u95E8\u8D1F\u8D23\u4EBA</td><td${_scopeId}>POST</td><td${_scopeId}>\`/v1/{organizationId}/cust-dh-reimburse-heads/get-unit-manage-users\`</td><td${_scopeId}>\u83B7\u53D6\u95E8\u5934\u5C55\u677F\u62A5\u9500\u90E8\u95E8\u8D1F\u8D23\u4EBA(\u5BA1\u6279\u4EBA)</td></tr><tr${_scopeId}><td${_scopeId}>\u7701\u7EA7\u8D1F\u8D23\u4EBA</td><td${_scopeId}>POST</td><td${_scopeId}>\`/v1/{organizationId}/cust-dh-reimburse-heads/get-provincial-manage-users\`</td><td${_scopeId}>\u83B7\u53D6\u95E8\u5934\u5C55\u677F\u62A5\u9500\u7701\u7EA7\u8D1F\u8D23\u4EBA(\u5BA1\u6279\u4EBA)</td></tr><tr${_scopeId}><td${_scopeId}>\u63D0\u4EA4\u5DE5\u4F5C\u6D41</td><td${_scopeId}>POST</td><td${_scopeId}>\`/v1/0/workflow/proc-submit\`</td><td${_scopeId}>\u63D0\u4EA4OA\u5BA1\u6279(subject=SUB_STORE_HEAD_PROCESS_DOOR)</td></tr></tbody></table>`);
      } else {
        return [
          createVNode("table", { class: "kb-field-tbl" }, [
            createVNode("thead", null, [
              createVNode("tr", null, [
                createVNode("th", null, "\u63A5\u53E3"),
                createVNode("th", null, "\u65B9\u6CD5"),
                createVNode("th", null, "\u8DEF\u5F84"),
                createVNode("th", null, "\u8BF4\u660E")
              ])
            ]),
            createVNode("tbody", null, [
              createVNode("tr", null, [
                createVNode("td", null, "\u5217\u8868\u67E5\u8BE2"),
                createVNode("td", null, "GET"),
                createVNode("td", null, "`/v1/{organizationId}/cust-dh-reimburse-heads/get-reimburse-head-list`"),
                createVNode("td", null, "\u67E5\u8BE2\u62A5\u9500\u7533\u8BF7\u5217\u8868")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u8BE6\u60C5\u67E5\u8BE2"),
                createVNode("td", null, "GET"),
                createVNode("td", null, "`/v1/{organizationId}/cust-dh-reimburse-heads/do-select`"),
                createVNode("td", null, "\u67E5\u8BE2\u62A5\u9500\u7533\u8BF7\u8BE6\u60C5(\u542B\u884C\u8868)")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6253\u5370"),
                createVNode("td", null, "GET"),
                createVNode("td", null, "`/v1/{organizationId}/cust-dh-reimburse-heads/do-select-print`"),
                createVNode("td", null, "\u83B7\u53D6\u6253\u5370\u6570\u636E(\u542B\u8BCD\u6C47\u7FFB\u8BD1\u3001\u5BA1\u6279\u5386\u53F2)")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u4FDD\u5B58"),
                createVNode("td", null, "POST"),
                createVNode("td", null, "`/v1/{organizationId}/cust-dh-reimburse-heads/do-save`"),
                createVNode("td", null, "\u65B0\u589E\u6216\u66F4\u65B0\u62A5\u9500\u7533\u8BF7")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5220\u9664"),
                createVNode("td", null, "DELETE"),
                createVNode("td", null, "`/v1/{organizationId}/cust-dh-reimburse-heads/do-delete`"),
                createVNode("td", null, "\u5220\u9664\u62A5\u9500\u7533\u8BF7(\u542B\u884C\u8868\u3001\u9644\u4EF6)")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5151\u73B0\u67E5\u8BE2"),
                createVNode("td", null, "GET"),
                createVNode("td", null, "`/v1/{organizationId}/cust-dh-reimburse-heads/get-cashout-search`"),
                createVNode("td", null, "\u67E5\u8BE2\u53EF\u5151\u73B0\u4FE1\u606F")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5151\u73B0LOV"),
                createVNode("td", null, "GET"),
                createVNode("td", null, "`/v1/{organizationId}/cust-dh-reimburse-heads/get-cashout-lov`"),
                createVNode("td", null, "\u67E5\u8BE2\u53EF\u5151\u73B0\u7684\u62A5\u9500\u5355\u5217\u8868(\u4F9B\u5151\u73B0\u5355\u9009\u62E9)")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u90E8\u95E8\u8D1F\u8D23\u4EBA"),
                createVNode("td", null, "POST"),
                createVNode("td", null, "`/v1/{organizationId}/cust-dh-reimburse-heads/get-unit-manage-users`"),
                createVNode("td", null, "\u83B7\u53D6\u95E8\u5934\u5C55\u677F\u62A5\u9500\u90E8\u95E8\u8D1F\u8D23\u4EBA(\u5BA1\u6279\u4EBA)")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7701\u7EA7\u8D1F\u8D23\u4EBA"),
                createVNode("td", null, "POST"),
                createVNode("td", null, "`/v1/{organizationId}/cust-dh-reimburse-heads/get-provincial-manage-users`"),
                createVNode("td", null, "\u83B7\u53D6\u95E8\u5934\u5C55\u677F\u62A5\u9500\u7701\u7EA7\u8D1F\u8D23\u4EBA(\u5BA1\u6279\u4EBA)")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u63D0\u4EA4\u5DE5\u4F5C\u6D41"),
                createVNode("td", null, "POST"),
                createVNode("td", null, "`/v1/0/workflow/proc-submit`"),
                createVNode("td", null, "\u63D0\u4EA4OA\u5BA1\u6279(subject=SUB_STORE_HEAD_PROCESS_DOOR)")
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
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5F39\u7A97\u540D\u79F0</th><th${_scopeId}>LOV\u7F16\u7801/\u63A5\u53E3</th><th${_scopeId}>\u89E6\u53D1\u5B57\u6BB5</th><th${_scopeId}>\u9009\u62E9\u540E\u8054\u52A8</th><th${_scopeId}>\u8BF4\u660E</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u7ECF\u9500\u5546\u9009\u62E9</td><td${_scopeId}>LOV: BASIC_CUSTOM_ORG_LOV_2</td><td${_scopeId}>customerLov</td><td${_scopeId}>\u8054\u52A8\u5E26\u51FA: \u7ECF\u9500\u5546\u7F16\u7801\u3001\u540D\u79F0\u3001\u7B80\u79F0\u3001\u7ECF\u8425\u5C5E\u6027\u3001\u9500\u552E\u533A\u57DF\u3001\u8FD0\u8425\u4E2D\u5FC3</td><td${_scopeId}>\u7ECF\u9500\u5546\u57FA\u7840\u6570\u636ELOV</td></tr><tr${_scopeId}><td${_scopeId}>\u4EA4\u6613\u516C\u53F8\u9009\u62E9</td><td${_scopeId}>LOV: MBO.DISTRIBUTOR_COMPANY_VO</td><td${_scopeId}>tradingCompanyLov</td><td${_scopeId}>\u8054\u52A8\u5E26\u51FA: \u4EA4\u6613\u516C\u53F8\u7F16\u7801\u3001\u540D\u79F0</td><td${_scopeId}>\u6309\u7ECF\u9500\u5546\u7F16\u7801(customerCode)\u8FC7\u6EE4</td></tr><tr${_scopeId}><td${_scopeId}>\u6CD5\u4EBA\u5BA2\u6237\u9009\u62E9</td><td${_scopeId}>LOV: MBO.DISTRIBUTOR_COMPANY_LEGAL_VO</td><td${_scopeId}>legalEntityLov</td><td${_scopeId}>\u8054\u52A8\u5E26\u51FA: \u6CD5\u4EBA\u5BA2\u6237\u7F16\u7801\u3001\u540D\u79F0</td><td${_scopeId}>\u6309\u7ECF\u9500\u5546\u7F16\u7801+\u4EA4\u6613\u516C\u53F8ID\u8FC7\u6EE4</td></tr><tr${_scopeId}><td${_scopeId}>\u5E97\u9762\u5EFA\u8BBE\u8865\u8D34\u653F\u7B56</td><td${_scopeId}>LOV: AE.POLICY_STANDARD_VALID_HEAD</td><td${_scopeId}>policyStandardLov</td><td${_scopeId}>\u8054\u52A8\u5E26\u51FA: \u653F\u7B56\u7F16\u7801\u3001\u540D\u79F0\u3001\u62A5\u9500\u7C7B\u578B(budgetType)\u3001\u9884\u7B97\u5E74\u5EA6\u3001\u5BA2\u6237\u989D\u5EA6\u9650\u5236\u6807\u5FD7</td><td${_scopeId}>\u6309\u5F53\u524D\u7528\u6237\u7EC4\u7EC7ID(entid)\u8FC7\u6EE4\uFF0C\u4EC5\u663E\u793A\u6709\u6548\u653F\u7B56</td></tr><tr${_scopeId}><td${_scopeId}>\u95E8\u5E97\u9009\u62E9</td><td${_scopeId}>LOV: AE.STORE_LIST_HEAD_VIEW</td><td${_scopeId}>terminalCodeObj</td><td${_scopeId}>\u8054\u52A8\u5E26\u51FA: \u95E8\u5E97\u540D\u79F0\u3001\u7C7B\u578B\u3001\u9762\u79EF\u3001\u5730\u5740</td><td${_scopeId}>\u95E8\u5E97\u57FA\u7840\u6570\u636ELOV</td></tr><tr${_scopeId}><td${_scopeId}>\u8865\u8D34\u9879\u76EE\u9009\u62E9</td><td${_scopeId}>LOV: AE.SUBSIDY_PROGRAM_VIEW</td><td${_scopeId}>decorateProjectObj</td><td${_scopeId}>\u8054\u52A8\u5E26\u51FA: \u88C5\u4FEE\u9879\u76EE\u540D\u79F0\u3001\u5355\u4F4D\u7C7B\u578B\u3001\u6807\u51C6\u7B49\u7EA7\u3001\u6570\u91CF\u8303\u56F4\u3001\u6807\u51C6\u91D1\u989D</td><td${_scopeId}>\u6309\u653F\u7B56ID(policyStandardId)+\u95E8\u5E97\u7C7B\u578B(terminalType)\u8FC7\u6EE4</td></tr></tbody></table>`);
      } else {
        return [
          createVNode("table", { class: "kb-field-tbl" }, [
            createVNode("thead", null, [
              createVNode("tr", null, [
                createVNode("th", null, "\u5F39\u7A97\u540D\u79F0"),
                createVNode("th", null, "LOV\u7F16\u7801/\u63A5\u53E3"),
                createVNode("th", null, "\u89E6\u53D1\u5B57\u6BB5"),
                createVNode("th", null, "\u9009\u62E9\u540E\u8054\u52A8"),
                createVNode("th", null, "\u8BF4\u660E")
              ])
            ]),
            createVNode("tbody", null, [
              createVNode("tr", null, [
                createVNode("td", null, "\u7ECF\u9500\u5546\u9009\u62E9"),
                createVNode("td", null, "LOV: BASIC_CUSTOM_ORG_LOV_2"),
                createVNode("td", null, "customerLov"),
                createVNode("td", null, "\u8054\u52A8\u5E26\u51FA: \u7ECF\u9500\u5546\u7F16\u7801\u3001\u540D\u79F0\u3001\u7B80\u79F0\u3001\u7ECF\u8425\u5C5E\u6027\u3001\u9500\u552E\u533A\u57DF\u3001\u8FD0\u8425\u4E2D\u5FC3"),
                createVNode("td", null, "\u7ECF\u9500\u5546\u57FA\u7840\u6570\u636ELOV")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u4EA4\u6613\u516C\u53F8\u9009\u62E9"),
                createVNode("td", null, "LOV: MBO.DISTRIBUTOR_COMPANY_VO"),
                createVNode("td", null, "tradingCompanyLov"),
                createVNode("td", null, "\u8054\u52A8\u5E26\u51FA: \u4EA4\u6613\u516C\u53F8\u7F16\u7801\u3001\u540D\u79F0"),
                createVNode("td", null, "\u6309\u7ECF\u9500\u5546\u7F16\u7801(customerCode)\u8FC7\u6EE4")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6CD5\u4EBA\u5BA2\u6237\u9009\u62E9"),
                createVNode("td", null, "LOV: MBO.DISTRIBUTOR_COMPANY_LEGAL_VO"),
                createVNode("td", null, "legalEntityLov"),
                createVNode("td", null, "\u8054\u52A8\u5E26\u51FA: \u6CD5\u4EBA\u5BA2\u6237\u7F16\u7801\u3001\u540D\u79F0"),
                createVNode("td", null, "\u6309\u7ECF\u9500\u5546\u7F16\u7801+\u4EA4\u6613\u516C\u53F8ID\u8FC7\u6EE4")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5E97\u9762\u5EFA\u8BBE\u8865\u8D34\u653F\u7B56"),
                createVNode("td", null, "LOV: AE.POLICY_STANDARD_VALID_HEAD"),
                createVNode("td", null, "policyStandardLov"),
                createVNode("td", null, "\u8054\u52A8\u5E26\u51FA: \u653F\u7B56\u7F16\u7801\u3001\u540D\u79F0\u3001\u62A5\u9500\u7C7B\u578B(budgetType)\u3001\u9884\u7B97\u5E74\u5EA6\u3001\u5BA2\u6237\u989D\u5EA6\u9650\u5236\u6807\u5FD7"),
                createVNode("td", null, "\u6309\u5F53\u524D\u7528\u6237\u7EC4\u7EC7ID(entid)\u8FC7\u6EE4\uFF0C\u4EC5\u663E\u793A\u6709\u6548\u653F\u7B56")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u95E8\u5E97\u9009\u62E9"),
                createVNode("td", null, "LOV: AE.STORE_LIST_HEAD_VIEW"),
                createVNode("td", null, "terminalCodeObj"),
                createVNode("td", null, "\u8054\u52A8\u5E26\u51FA: \u95E8\u5E97\u540D\u79F0\u3001\u7C7B\u578B\u3001\u9762\u79EF\u3001\u5730\u5740"),
                createVNode("td", null, "\u95E8\u5E97\u57FA\u7840\u6570\u636ELOV")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u8865\u8D34\u9879\u76EE\u9009\u62E9"),
                createVNode("td", null, "LOV: AE.SUBSIDY_PROGRAM_VIEW"),
                createVNode("td", null, "decorateProjectObj"),
                createVNode("td", null, "\u8054\u52A8\u5E26\u51FA: \u88C5\u4FEE\u9879\u76EE\u540D\u79F0\u3001\u5355\u4F4D\u7C7B\u578B\u3001\u6807\u51C6\u7B49\u7EA7\u3001\u6570\u91CF\u8303\u56F4\u3001\u6807\u51C6\u91D1\u989D"),
                createVNode("td", null, "\u6309\u653F\u7B56ID(policyStandardId)+\u95E8\u5E97\u7C7B\u578B(terminalType)\u8FC7\u6EE4")
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
        _push2(`<p${_scopeId}>\u4E0D\u652F\u6301\u5BFC\u5165\u529F\u80FD\u3002\u95E8\u5934\u5C55\u677F\u62A5\u9500\u7533\u8BF7\u9700\u9010\u884C\u6DFB\u52A0\u95E8\u5E97\u88C5\u4FEE\u660E\u7EC6\uFF0C\u5305\u542B\u88C5\u4FEE\u524D/\u540E\u7167\u7247\u4E0A\u4F20\uFF0C\u65E0\u6CD5\u901A\u8FC7\u6279\u91CF\u5BFC\u5165\u5B8C\u6210\u3002</p>`);
      } else {
        return [
          createVNode("p", null, "\u4E0D\u652F\u6301\u5BFC\u5165\u529F\u80FD\u3002\u95E8\u5934\u5C55\u677F\u62A5\u9500\u7533\u8BF7\u9700\u9010\u884C\u6DFB\u52A0\u95E8\u5E97\u88C5\u4FEE\u660E\u7EC6\uFF0C\u5305\u542B\u88C5\u4FEE\u524D/\u540E\u7167\u7247\u4E0A\u4F20\uFF0C\u65E0\u6CD5\u901A\u8FC7\u6279\u91CF\u5BFC\u5165\u5B8C\u6210\u3002")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, { title: "\u5176\u4ED6\u6309\u94AE" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5E8F\u53F7</th><th${_scopeId}>\u6309\u94AE\u540D</th><th${_scopeId}>\u6240\u5728\u4F4D\u7F6E</th><th${_scopeId}>\u663E\u793A\u6761\u4EF6</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>1</td><td${_scopeId}>\u63D0\u4EA4</td><td${_scopeId}>\u8BE6\u60C5\u9875Header</td><td${_scopeId}>!businessKey(\u975E\u5DE5\u4F5C\u6D41\u5D4C\u5165\u65F6)\u4E14\u53EF\u7F16\u8F91\u72B6\u6001</td></tr><tr${_scopeId}><td${_scopeId}>2</td><td${_scopeId}>\u4FDD\u5B58</td><td${_scopeId}>\u8BE6\u60C5\u9875Header</td><td${_scopeId}>\u53EF\u7F16\u8F91\u72B6\u6001\u6216\u5BA1\u6279\u8282\u70B9</td></tr><tr${_scopeId}><td${_scopeId}>3</td><td${_scopeId}>\u6253\u5370</td><td${_scopeId}>\u8BE6\u60C5\u9875Header</td><td${_scopeId}>\u8BE6\u60C5\u9875(\u6709ID)</td></tr><tr${_scopeId}><td${_scopeId}>4</td><td${_scopeId}>\u4E0B\u8F7D</td><td${_scopeId}>\u95E8\u5E97\u88C5\u4FEE\u660E\u7EC6\u884C</td><td${_scopeId}>\u88C5\u4FEE\u524D/\u540E\u7167\u7247\u5B58\u5728</td></tr><tr${_scopeId}><td${_scopeId}>5</td><td${_scopeId}>\u9884\u89C8</td><td${_scopeId}>\u95E8\u5E97\u88C5\u4FEE\u660E\u7EC6\u884C</td><td${_scopeId}>\u88C5\u4FEE\u524D/\u540E\u7167\u7247\u5B58\u5728</td></tr></tbody></table><h4${_scopeId}>\u6309\u94AE1\uFF1A\u63D0\u4EA4\uFF08\u8BE6\u60C5\u9875Header\uFF09</h4><ul${_scopeId}><li${_scopeId}>\u70B9\u51FB\u540E\u6267\u884C\u4FDD\u5B58\u6821\u9A8C\uFF0C\u6821\u9A8C\u901A\u8FC7\u540E\u663E\u793A\u5DE5\u4F5C\u6D41\u5F39\u6846(Workflow\u7EC4\u4EF6)</li><li${_scopeId}>\u5DE5\u4F5C\u6D41\u5F39\u6846\u4E2D\u9009\u62E9\u6D41\u7A0B\u540E\u8C03\u7528submitWorkflow({objId, subject: &#39;SUB_STORE_HEAD_PROCESS_DOOR&#39;, flowCode})</li><li${_scopeId}>\u540E\u7AEFwfProcSubmit\uFF1A\u5148\u8C03\u7528onUserSubmit\u8BA1\u7B97\u5B9E\u9645\u62A5\u9500\u91D1\u989D(\u9650\u989D/\u975E\u9650\u989D)\uFF0C\u6821\u9A8C\u989D\u5EA6\u5916\u9884\u7B97(validBxAmt)\uFF0C\u518D\u542F\u52A8\u5DE5\u4F5C\u6D41\u5B9E\u4F8B</li><li${_scopeId}>\u63D0\u4EA4\u6210\u529F\u540E\u5173\u95ED\u5F53\u524D\u6807\u7B7E\u9875\uFF0C\u8DF3\u8F6C\u81F3hlod\u5217\u8868\u9875</li></ul><h4${_scopeId}>\u6309\u94AE2\uFF1A\u4FDD\u5B58\uFF08\u8BE6\u60C5\u9875Header\uFF09</h4><ul${_scopeId}><li${_scopeId}>\u70B9\u51FB\u540E\u6267\u884C\u4FDD\u5B58\u6821\u9A8C\uFF0C\u65B0\u589E\u65F6\u8C03\u7528doInsert\uFF0C\u66F4\u65B0\u65F6\u8C03\u7528doUpdate</li><li${_scopeId}>\u5BA1\u6279\u8282\u70B9\u4FDD\u5B58\u65F6(taskName\u4E3A\u533A\u57DF\u7ECF\u7406\u5BA1\u6279/\u9500\u552E\u4F1A\u8BA1\u5BA1\u6279)\u8C03\u7528nodeEditSave\uFF0C\u6309\u8282\u70B9\u5206\u53D1\u5230\u4E0D\u540C\u66F4\u65B0\u65B9\u6CD5</li><li${_scopeId}>\u4FDD\u5B58\u6210\u529F\u540E\u5237\u65B0\u8BE6\u60C5\u6570\u636E</li></ul><h4${_scopeId}>\u6309\u94AE3\uFF1A\u6253\u5370\uFF08\u8BE6\u60C5\u9875Header\uFF09</h4><ul${_scopeId}><li${_scopeId}>\u4F7F\u7528PrintReportBtn\u7EC4\u4EF6\uFF0C\u8C03\u7528GET <code${_scopeId}>/cust-dh-reimburse-heads/do-select-print</code>\u83B7\u53D6\u6253\u5370\u6570\u636E</li><li${_scopeId}>\u6253\u5370\u6570\u636E\u5305\u542B\u8BCD\u6C47\u7FFB\u8BD1(\u7ECF\u8425\u5C5E\u6027\u3001\u652F\u4ED8\u65B9\u5F0F\u3001\u5BA1\u6279\u72B6\u6001\u3001\u95E8\u5E97\u7C7B\u578B\u3001\u88C5\u4FEE\u9879\u76EE)\u548C\u5BA1\u6279\u5386\u53F2</li></ul><h4${_scopeId}>\u6309\u94AE4\uFF1A\u4E0B\u8F7D\uFF08\u95E8\u5E97\u88C5\u4FEE\u660E\u7EC6\u884C\uFF09</h4><ul${_scopeId}><li${_scopeId}>\u4E0B\u8F7D\u88C5\u4FEE\u524D/\u540E\u7167\u7247\uFF0C\u8C03\u7528\u6C34\u5370\u4E0B\u8F7D\u63A5\u53E3</li></ul><h4${_scopeId}>\u6309\u94AE5\uFF1A\u9884\u89C8\uFF08\u95E8\u5E97\u88C5\u4FEE\u660E\u7EC6\u884C\uFF09</h4><ul${_scopeId}><li${_scopeId}>\u56FE\u7247\u7C7B\u578B\uFF1AModal\u5F39\u6846\u5168\u5C4F\u9884\u89C8\uFF1B\u5176\u4ED6\u6587\u4EF6\uFF1Awindow.open\u65B0\u7A97\u53E3\u6253\u5F00</li></ul>`);
      } else {
        return [
          createVNode("table", { class: "kb-field-tbl" }, [
            createVNode("thead", null, [
              createVNode("tr", null, [
                createVNode("th", null, "\u5E8F\u53F7"),
                createVNode("th", null, "\u6309\u94AE\u540D"),
                createVNode("th", null, "\u6240\u5728\u4F4D\u7F6E"),
                createVNode("th", null, "\u663E\u793A\u6761\u4EF6")
              ])
            ]),
            createVNode("tbody", null, [
              createVNode("tr", null, [
                createVNode("td", null, "1"),
                createVNode("td", null, "\u63D0\u4EA4"),
                createVNode("td", null, "\u8BE6\u60C5\u9875Header"),
                createVNode("td", null, "!businessKey(\u975E\u5DE5\u4F5C\u6D41\u5D4C\u5165\u65F6)\u4E14\u53EF\u7F16\u8F91\u72B6\u6001")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "2"),
                createVNode("td", null, "\u4FDD\u5B58"),
                createVNode("td", null, "\u8BE6\u60C5\u9875Header"),
                createVNode("td", null, "\u53EF\u7F16\u8F91\u72B6\u6001\u6216\u5BA1\u6279\u8282\u70B9")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "3"),
                createVNode("td", null, "\u6253\u5370"),
                createVNode("td", null, "\u8BE6\u60C5\u9875Header"),
                createVNode("td", null, "\u8BE6\u60C5\u9875(\u6709ID)")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "4"),
                createVNode("td", null, "\u4E0B\u8F7D"),
                createVNode("td", null, "\u95E8\u5E97\u88C5\u4FEE\u660E\u7EC6\u884C"),
                createVNode("td", null, "\u88C5\u4FEE\u524D/\u540E\u7167\u7247\u5B58\u5728")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "5"),
                createVNode("td", null, "\u9884\u89C8"),
                createVNode("td", null, "\u95E8\u5E97\u88C5\u4FEE\u660E\u7EC6\u884C"),
                createVNode("td", null, "\u88C5\u4FEE\u524D/\u540E\u7167\u7247\u5B58\u5728")
              ])
            ])
          ]),
          createVNode("h4", null, "\u6309\u94AE1\uFF1A\u63D0\u4EA4\uFF08\u8BE6\u60C5\u9875Header\uFF09"),
          createVNode("ul", null, [
            createVNode("li", null, "\u70B9\u51FB\u540E\u6267\u884C\u4FDD\u5B58\u6821\u9A8C\uFF0C\u6821\u9A8C\u901A\u8FC7\u540E\u663E\u793A\u5DE5\u4F5C\u6D41\u5F39\u6846(Workflow\u7EC4\u4EF6)"),
            createVNode("li", null, "\u5DE5\u4F5C\u6D41\u5F39\u6846\u4E2D\u9009\u62E9\u6D41\u7A0B\u540E\u8C03\u7528submitWorkflow({objId, subject: 'SUB_STORE_HEAD_PROCESS_DOOR', flowCode})"),
            createVNode("li", null, "\u540E\u7AEFwfProcSubmit\uFF1A\u5148\u8C03\u7528onUserSubmit\u8BA1\u7B97\u5B9E\u9645\u62A5\u9500\u91D1\u989D(\u9650\u989D/\u975E\u9650\u989D)\uFF0C\u6821\u9A8C\u989D\u5EA6\u5916\u9884\u7B97(validBxAmt)\uFF0C\u518D\u542F\u52A8\u5DE5\u4F5C\u6D41\u5B9E\u4F8B"),
            createVNode("li", null, "\u63D0\u4EA4\u6210\u529F\u540E\u5173\u95ED\u5F53\u524D\u6807\u7B7E\u9875\uFF0C\u8DF3\u8F6C\u81F3hlod\u5217\u8868\u9875")
          ]),
          createVNode("h4", null, "\u6309\u94AE2\uFF1A\u4FDD\u5B58\uFF08\u8BE6\u60C5\u9875Header\uFF09"),
          createVNode("ul", null, [
            createVNode("li", null, "\u70B9\u51FB\u540E\u6267\u884C\u4FDD\u5B58\u6821\u9A8C\uFF0C\u65B0\u589E\u65F6\u8C03\u7528doInsert\uFF0C\u66F4\u65B0\u65F6\u8C03\u7528doUpdate"),
            createVNode("li", null, "\u5BA1\u6279\u8282\u70B9\u4FDD\u5B58\u65F6(taskName\u4E3A\u533A\u57DF\u7ECF\u7406\u5BA1\u6279/\u9500\u552E\u4F1A\u8BA1\u5BA1\u6279)\u8C03\u7528nodeEditSave\uFF0C\u6309\u8282\u70B9\u5206\u53D1\u5230\u4E0D\u540C\u66F4\u65B0\u65B9\u6CD5"),
            createVNode("li", null, "\u4FDD\u5B58\u6210\u529F\u540E\u5237\u65B0\u8BE6\u60C5\u6570\u636E")
          ]),
          createVNode("h4", null, "\u6309\u94AE3\uFF1A\u6253\u5370\uFF08\u8BE6\u60C5\u9875Header\uFF09"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createTextVNode("\u4F7F\u7528PrintReportBtn\u7EC4\u4EF6\uFF0C\u8C03\u7528GET "),
              createVNode("code", null, "/cust-dh-reimburse-heads/do-select-print"),
              createTextVNode("\u83B7\u53D6\u6253\u5370\u6570\u636E")
            ]),
            createVNode("li", null, "\u6253\u5370\u6570\u636E\u5305\u542B\u8BCD\u6C47\u7FFB\u8BD1(\u7ECF\u8425\u5C5E\u6027\u3001\u652F\u4ED8\u65B9\u5F0F\u3001\u5BA1\u6279\u72B6\u6001\u3001\u95E8\u5E97\u7C7B\u578B\u3001\u88C5\u4FEE\u9879\u76EE)\u548C\u5BA1\u6279\u5386\u53F2")
          ]),
          createVNode("h4", null, "\u6309\u94AE4\uFF1A\u4E0B\u8F7D\uFF08\u95E8\u5E97\u88C5\u4FEE\u660E\u7EC6\u884C\uFF09"),
          createVNode("ul", null, [
            createVNode("li", null, "\u4E0B\u8F7D\u88C5\u4FEE\u524D/\u540E\u7167\u7247\uFF0C\u8C03\u7528\u6C34\u5370\u4E0B\u8F7D\u63A5\u53E3")
          ]),
          createVNode("h4", null, "\u6309\u94AE5\uFF1A\u9884\u89C8\uFF08\u95E8\u5E97\u88C5\u4FEE\u660E\u7EC6\u884C\uFF09"),
          createVNode("ul", null, [
            createVNode("li", null, "\u56FE\u7247\u7C7B\u578B\uFF1AModal\u5F39\u6846\u5168\u5C4F\u9884\u89C8\uFF1B\u5176\u4ED6\u6587\u4EF6\uFF1Awindow.open\u65B0\u7A97\u53E3\u6253\u5F00")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, { title: "\u4FDD\u5B58\u6821\u9A8C" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}>\u6821\u9A8C1\uFF1A\u7ECF\u9500\u5546\u5FC5\u586B \u2014\u2014 \u786E\u4FDD\u62A5\u9500\u5355\u5173\u8054\u6709\u6548\u7ECF\u9500\u5546</li><li${_scopeId}>\u8BE6\u7EC6\u903B\u8F91\uFF1A\u524D\u7AEFDataSet required=true\u6821\u9A8C\uFF0C\u540E\u7AEFcheckParams\u6821\u9A8CcustomerId\u4E3A\u7A7A\u62A5&quot;\u7ECF\u9500\u5546\u6CD5\u4EBA\u4E0D\u80FD\u4E3A\u7A7A&quot;</li><li${_scopeId}>\u7CFB\u7EDF\u4F53\u73B0\uFF1A\u524D\u7AEFC7N\u5FC5\u586B\u63D0\u793A\uFF0C\u540E\u7AEFCommonException</li><li${_scopeId}>\u6392\u67E5SQL\uFF1A<code${_scopeId}>SELECT * FROM CUSTOMER WHERE CUSTOMER_ID = #{customerId}</code></li></ul><ul${_scopeId}><li${_scopeId}>\u6821\u9A8C2\uFF1A\u4EA4\u6613\u516C\u53F8\u5FC5\u586B \u2014\u2014 \u786E\u4FDD\u62A5\u9500\u5355\u5173\u8054\u6709\u6548\u4EA4\u6613\u516C\u53F8</li><li${_scopeId}>\u8BE6\u7EC6\u903B\u8F91\uFF1A\u524D\u7AEFDataSet required=true\u6821\u9A8C\uFF0C\u540E\u7AEFgetCustLegal\u67E5\u8BE2\u6CD5\u4EBA\u4FE1\u606F\u5931\u8D25\u62A5&quot;\u83B7\u53D6\u6CD5\u4EBA\u4FE1\u606F\u5931\u8D25&quot;</li><li${_scopeId}>\u7CFB\u7EDF\u4F53\u73B0\uFF1A\u524D\u7AEFC7N\u5FC5\u586B\u63D0\u793A\uFF0C\u540E\u7AEFCommonException</li></ul><ul${_scopeId}><li${_scopeId}>\u6821\u9A8C3\uFF1A\u6CD5\u4EBA\u5BA2\u6237\u5FC5\u586B \u2014\u2014 \u786E\u4FDD\u62A5\u9500\u5355\u5173\u8054\u6709\u6548\u6CD5\u4EBA</li><li${_scopeId}>\u8BE6\u7EC6\u903B\u8F91\uFF1A\u524D\u7AEFDataSet required=true\u6821\u9A8C\uFF0C\u540E\u7AEFcheckParams\u6821\u9A8CcustomerLegalId\u4E3A\u7A7A\u62A5&quot;\u7ECF\u9500\u5546\u6CD5\u4EBA\u4E0D\u80FD\u4E3A\u7A7A&quot;</li><li${_scopeId}>\u7CFB\u7EDF\u4F53\u73B0\uFF1A\u524D\u7AEFC7N\u5FC5\u586B\u63D0\u793A\uFF0C\u540E\u7AEFCommonException</li></ul><ul${_scopeId}><li${_scopeId}>\u6821\u9A8C4\uFF1A\u8865\u8D34\u653F\u7B56\u5FC5\u586B\u4E14\u6709\u6548 \u2014\u2014 \u786E\u4FDD\u62A5\u9500\u57FA\u4E8E\u6709\u6548\u653F\u7B56</li><li${_scopeId}>\u8BE6\u7EC6\u903B\u8F91\uFF1A\u540E\u7AEFcheckParams\u6821\u9A8CpolicyStandardHead\u4E3A\u7A7A\u62A5&quot;\u62A5\u9500\u653F\u7B56\u4E0D\u80FD\u4E3A\u7A7A&quot;\uFF0Cvalid!=2\u62A5&quot;\u62A5\u9500\u653F\u7B56\u5DF2\u5931\u6548&quot;\uFF0C\u4E0D\u5728\u6709\u6548\u671F\u5185\u62A5&quot;\u62A5\u9500\u653F\u7B56\u5DF2\u8FC7\u671F&quot;</li><li${_scopeId}>\u7CFB\u7EDF\u4F53\u73B0\uFF1A\u540E\u7AEFCommonException</li><li${_scopeId}>\u6392\u67E5SQL\uFF1A<code${_scopeId}>SELECT * FROM POLICY_STANDARD_HEAD WHERE POLICY_STANDARD_ID = #{policyStandardId} AND VALID = 2 AND START_DATE &lt;= SYSDATE AND END_DATE &gt;= SYSDATE</code></li></ul><ul${_scopeId}><li${_scopeId}>\u6821\u9A8C5\uFF1A\u62A5\u9500\u7C7B\u578B\u5FC5\u586B \u2014\u2014 \u786E\u4FDD\u9009\u62E9\u989D\u5EA6\u5185\u6216\u989D\u5EA6\u5916</li><li${_scopeId}>\u8BE6\u7EC6\u903B\u8F91\uFF1A\u540E\u7AEFcheckParams\u6821\u9A8CbxType\u4E3A\u7A7A\u62A5&quot;\u8BF7\u9009\u62E9\u62A5\u9500\u7C7B\u578B&quot;</li><li${_scopeId}>\u7CFB\u7EDF\u4F53\u73B0\uFF1A\u540E\u7AEFCommonException</li></ul><ul${_scopeId}><li${_scopeId}>\u6821\u9A8C6\uFF1A\u884C\u8868\u4E0D\u80FD\u4E3A\u7A7A \u2014\u2014 \u786E\u4FDD\u6709\u95E8\u5E97\u88C5\u4FEE\u660E\u7EC6</li><li${_scopeId}>\u8BE6\u7EC6\u903B\u8F91\uFF1A\u540E\u7AEFcheckParams\u6821\u9A8Clines\u4E3A\u7A7A\u62A5&quot;\u62A5\u9500\u660E\u7EC6\u4E0D\u80FD\u4E3A\u7A7A&quot;</li><li${_scopeId}>\u7CFB\u7EDF\u4F53\u73B0\uFF1A\u540E\u7AEFCommonException</li><li${_scopeId}>\u6392\u67E5SQL\uFF1A<code${_scopeId}>SELECT COUNT(*) FROM CUST_DH_REIMBURSE_LINE WHERE HEAD_ID = #{headId}</code></li></ul><ul${_scopeId}><li${_scopeId}>\u6821\u9A8C7\uFF1A\u5355\u72EC\u95E8\u5E97\u7533\u8BF7\u6821\u9A8C \u2014\u2014 \u653F\u7B56\u8981\u6C42\u65F6\u53EA\u80FD\u4E00\u4E2A\u95E8\u5E97</li><li${_scopeId}>\u8BE6\u7EC6\u903B\u8F91\uFF1A\u540E\u7AEFcheckParams\u5F53singleStoreApplyFlag=Y\u65F6\u6821\u9A8C\u884C\u8868\u95E8\u5E97ID\u53BB\u91CD\u6570=1\uFF0C\u5426\u5219\u62A5&quot;\u5355\u72EC\u95E8\u5E97\u7533\u8BF7\uFF0C\u53EA\u80FD\u62A5\u9500\u4E00\u4E2A\u95E8\u5E97&quot;</li><li${_scopeId}>\u7CFB\u7EDF\u4F53\u73B0\uFF1A\u540E\u7AEFCommonException</li></ul><ul${_scopeId}><li${_scopeId}>\u6821\u9A8C8\uFF1A\u7533\u8BF7\u6570\u91CF\u8303\u56F4\u6821\u9A8C \u2014\u2014 \u786E\u4FDD\u6570\u91CF\u5728\u653F\u7B56\u8303\u56F4\u5185</li><li${_scopeId}>\u8BE6\u7EC6\u903B\u8F91\uFF1A\u524D\u7AEFvalidator\u6821\u9A8CapplyNum &lt; minNum\u6216&gt; maxNum\u62A5&quot;\u88C5\u4FEE\u9879\u76EE\u6570\u91CF\u9650\u5236\u8303\u56F4\u4E3AX-Y&quot;\uFF1B\u540E\u7AEFcomputeBxLine\u6821\u9A8CapplyNum=0\u62A5&quot;\u7533\u8BF7\u6570\u91CF\u5FC5\u987B\u5927\u4E8E0&quot;\uFF0C\u4E0D\u5728\u8303\u56F4\u62A5&quot;\u62A5\u9500\u7533\u8BF7\u6570\u91CF\u5FC5\u987B\u5728\u653F\u7B56\u6570\u91CF\u8303\u56F4\u5185&quot;</li><li${_scopeId}>\u7CFB\u7EDF\u4F53\u73B0\uFF1A\u524D\u7AEF\u5B57\u6BB5validator\u63D0\u793A\uFF0C\u540E\u7AEFCommonException</li></ul><ul${_scopeId}><li${_scopeId}>\u6821\u9A8C9\uFF1A\u88C5\u4FEE\u524D/\u540E\u7167\u7247\u5FC5\u4F20 \u2014\u2014 \u786E\u4FDD\u88C5\u4FEE\u8BC1\u636E\u5B8C\u6574</li><li${_scopeId}>\u8BE6\u7EC6\u903B\u8F91\uFF1A\u524D\u7AEFbeforeDocName/afterDocName required=true\uFF1B\u540E\u7AEFcomputeBxLine\u6821\u9A8CbeforeDocId\u4E3A\u7A7A\u62A5&quot;\u8BF7\u4E0A\u4F20\u88C5\u4FEE\u524D\u6587\u4EF6&quot;\uFF0CafterDocId\u4E3A\u7A7A\u62A5&quot;\u8BF7\u4E0A\u4F20\u88C5\u4FEE\u540E\u6587\u4EF6&quot;</li><li${_scopeId}>\u7CFB\u7EDF\u4F53\u73B0\uFF1A\u524D\u7AEFC7N\u5FC5\u586B\u63D0\u793A\uFF0C\u540E\u7AEFCommonException</li></ul><ul${_scopeId}><li${_scopeId}>\u6821\u9A8C10\uFF1A\u91D1\u989D\u4E0D\u8D85\u6807\u51C6(\u975E\u8D85\u989D\u62A5\u9500) \u2014\u2014 \u786E\u4FDD\u62A5\u9500\u91D1\u989D\u4E0D\u8D85\u653F\u7B56\u6807\u51C6</li><li${_scopeId}>\u8BE6\u7EC6\u903B\u8F91\uFF1A\u524D\u7AEFvalidator\u6821\u9A8C\u975E\u8D85\u989D\u65F6(excessFlag!=Y)\u7533\u8BF7/\u4E1A\u52A1\u6279\u51C6\u91D1\u989D\u4E0D\u8D85\u6807\u51C6\u91D1\u989D\uFF0C\u62A5&quot;\u8F93\u5165\u7684\u91D1\u989D\u4E0D\u80FD\u5927\u4E8E\u5BF9\u5E94\u7684\u989D\u5EA6(\u5185/\u5916)\u6807\u51C6\u91D1\u989D&quot;\uFF1B\u540E\u7AEFbizNodeUpdate\u6821\u9A8C\u975E\u8D85\u989D\u65F6\u4E1A\u52A1\u6279\u51C6\u91D1\u989D\u4E0D\u8D85\u6807\u51C6\uFF0C\u62A5&quot;\u975E\u8D85\u989D\u62A5\u9500\uFF0C\u989D\u5EA6\u5185/\u5916\u91D1\u989D\u4E0D\u5141\u8BB8\u5927\u4E8E\u653F\u7B56\u6807\u51C6&quot;</li><li${_scopeId}>\u7CFB\u7EDF\u4F53\u73B0\uFF1A\u524D\u7AEF\u5B57\u6BB5validator\u63D0\u793A\uFF0C\u540E\u7AEFCommonException</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, "\u6821\u9A8C1\uFF1A\u7ECF\u9500\u5546\u5FC5\u586B \u2014\u2014 \u786E\u4FDD\u62A5\u9500\u5355\u5173\u8054\u6709\u6548\u7ECF\u9500\u5546"),
            createVNode("li", null, '\u8BE6\u7EC6\u903B\u8F91\uFF1A\u524D\u7AEFDataSet required=true\u6821\u9A8C\uFF0C\u540E\u7AEFcheckParams\u6821\u9A8CcustomerId\u4E3A\u7A7A\u62A5"\u7ECF\u9500\u5546\u6CD5\u4EBA\u4E0D\u80FD\u4E3A\u7A7A"'),
            createVNode("li", null, "\u7CFB\u7EDF\u4F53\u73B0\uFF1A\u524D\u7AEFC7N\u5FC5\u586B\u63D0\u793A\uFF0C\u540E\u7AEFCommonException"),
            createVNode("li", null, [
              createTextVNode("\u6392\u67E5SQL\uFF1A"),
              createVNode("code", null, "SELECT * FROM CUSTOMER WHERE CUSTOMER_ID = #{customerId}")
            ])
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u6821\u9A8C2\uFF1A\u4EA4\u6613\u516C\u53F8\u5FC5\u586B \u2014\u2014 \u786E\u4FDD\u62A5\u9500\u5355\u5173\u8054\u6709\u6548\u4EA4\u6613\u516C\u53F8"),
            createVNode("li", null, '\u8BE6\u7EC6\u903B\u8F91\uFF1A\u524D\u7AEFDataSet required=true\u6821\u9A8C\uFF0C\u540E\u7AEFgetCustLegal\u67E5\u8BE2\u6CD5\u4EBA\u4FE1\u606F\u5931\u8D25\u62A5"\u83B7\u53D6\u6CD5\u4EBA\u4FE1\u606F\u5931\u8D25"'),
            createVNode("li", null, "\u7CFB\u7EDF\u4F53\u73B0\uFF1A\u524D\u7AEFC7N\u5FC5\u586B\u63D0\u793A\uFF0C\u540E\u7AEFCommonException")
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u6821\u9A8C3\uFF1A\u6CD5\u4EBA\u5BA2\u6237\u5FC5\u586B \u2014\u2014 \u786E\u4FDD\u62A5\u9500\u5355\u5173\u8054\u6709\u6548\u6CD5\u4EBA"),
            createVNode("li", null, '\u8BE6\u7EC6\u903B\u8F91\uFF1A\u524D\u7AEFDataSet required=true\u6821\u9A8C\uFF0C\u540E\u7AEFcheckParams\u6821\u9A8CcustomerLegalId\u4E3A\u7A7A\u62A5"\u7ECF\u9500\u5546\u6CD5\u4EBA\u4E0D\u80FD\u4E3A\u7A7A"'),
            createVNode("li", null, "\u7CFB\u7EDF\u4F53\u73B0\uFF1A\u524D\u7AEFC7N\u5FC5\u586B\u63D0\u793A\uFF0C\u540E\u7AEFCommonException")
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u6821\u9A8C4\uFF1A\u8865\u8D34\u653F\u7B56\u5FC5\u586B\u4E14\u6709\u6548 \u2014\u2014 \u786E\u4FDD\u62A5\u9500\u57FA\u4E8E\u6709\u6548\u653F\u7B56"),
            createVNode("li", null, '\u8BE6\u7EC6\u903B\u8F91\uFF1A\u540E\u7AEFcheckParams\u6821\u9A8CpolicyStandardHead\u4E3A\u7A7A\u62A5"\u62A5\u9500\u653F\u7B56\u4E0D\u80FD\u4E3A\u7A7A"\uFF0Cvalid!=2\u62A5"\u62A5\u9500\u653F\u7B56\u5DF2\u5931\u6548"\uFF0C\u4E0D\u5728\u6709\u6548\u671F\u5185\u62A5"\u62A5\u9500\u653F\u7B56\u5DF2\u8FC7\u671F"'),
            createVNode("li", null, "\u7CFB\u7EDF\u4F53\u73B0\uFF1A\u540E\u7AEFCommonException"),
            createVNode("li", null, [
              createTextVNode("\u6392\u67E5SQL\uFF1A"),
              createVNode("code", null, "SELECT * FROM POLICY_STANDARD_HEAD WHERE POLICY_STANDARD_ID = #{policyStandardId} AND VALID = 2 AND START_DATE <= SYSDATE AND END_DATE >= SYSDATE")
            ])
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u6821\u9A8C5\uFF1A\u62A5\u9500\u7C7B\u578B\u5FC5\u586B \u2014\u2014 \u786E\u4FDD\u9009\u62E9\u989D\u5EA6\u5185\u6216\u989D\u5EA6\u5916"),
            createVNode("li", null, '\u8BE6\u7EC6\u903B\u8F91\uFF1A\u540E\u7AEFcheckParams\u6821\u9A8CbxType\u4E3A\u7A7A\u62A5"\u8BF7\u9009\u62E9\u62A5\u9500\u7C7B\u578B"'),
            createVNode("li", null, "\u7CFB\u7EDF\u4F53\u73B0\uFF1A\u540E\u7AEFCommonException")
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u6821\u9A8C6\uFF1A\u884C\u8868\u4E0D\u80FD\u4E3A\u7A7A \u2014\u2014 \u786E\u4FDD\u6709\u95E8\u5E97\u88C5\u4FEE\u660E\u7EC6"),
            createVNode("li", null, '\u8BE6\u7EC6\u903B\u8F91\uFF1A\u540E\u7AEFcheckParams\u6821\u9A8Clines\u4E3A\u7A7A\u62A5"\u62A5\u9500\u660E\u7EC6\u4E0D\u80FD\u4E3A\u7A7A"'),
            createVNode("li", null, "\u7CFB\u7EDF\u4F53\u73B0\uFF1A\u540E\u7AEFCommonException"),
            createVNode("li", null, [
              createTextVNode("\u6392\u67E5SQL\uFF1A"),
              createVNode("code", null, "SELECT COUNT(*) FROM CUST_DH_REIMBURSE_LINE WHERE HEAD_ID = #{headId}")
            ])
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u6821\u9A8C7\uFF1A\u5355\u72EC\u95E8\u5E97\u7533\u8BF7\u6821\u9A8C \u2014\u2014 \u653F\u7B56\u8981\u6C42\u65F6\u53EA\u80FD\u4E00\u4E2A\u95E8\u5E97"),
            createVNode("li", null, '\u8BE6\u7EC6\u903B\u8F91\uFF1A\u540E\u7AEFcheckParams\u5F53singleStoreApplyFlag=Y\u65F6\u6821\u9A8C\u884C\u8868\u95E8\u5E97ID\u53BB\u91CD\u6570=1\uFF0C\u5426\u5219\u62A5"\u5355\u72EC\u95E8\u5E97\u7533\u8BF7\uFF0C\u53EA\u80FD\u62A5\u9500\u4E00\u4E2A\u95E8\u5E97"'),
            createVNode("li", null, "\u7CFB\u7EDF\u4F53\u73B0\uFF1A\u540E\u7AEFCommonException")
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u6821\u9A8C8\uFF1A\u7533\u8BF7\u6570\u91CF\u8303\u56F4\u6821\u9A8C \u2014\u2014 \u786E\u4FDD\u6570\u91CF\u5728\u653F\u7B56\u8303\u56F4\u5185"),
            createVNode("li", null, '\u8BE6\u7EC6\u903B\u8F91\uFF1A\u524D\u7AEFvalidator\u6821\u9A8CapplyNum < minNum\u6216> maxNum\u62A5"\u88C5\u4FEE\u9879\u76EE\u6570\u91CF\u9650\u5236\u8303\u56F4\u4E3AX-Y"\uFF1B\u540E\u7AEFcomputeBxLine\u6821\u9A8CapplyNum=0\u62A5"\u7533\u8BF7\u6570\u91CF\u5FC5\u987B\u5927\u4E8E0"\uFF0C\u4E0D\u5728\u8303\u56F4\u62A5"\u62A5\u9500\u7533\u8BF7\u6570\u91CF\u5FC5\u987B\u5728\u653F\u7B56\u6570\u91CF\u8303\u56F4\u5185"'),
            createVNode("li", null, "\u7CFB\u7EDF\u4F53\u73B0\uFF1A\u524D\u7AEF\u5B57\u6BB5validator\u63D0\u793A\uFF0C\u540E\u7AEFCommonException")
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u6821\u9A8C9\uFF1A\u88C5\u4FEE\u524D/\u540E\u7167\u7247\u5FC5\u4F20 \u2014\u2014 \u786E\u4FDD\u88C5\u4FEE\u8BC1\u636E\u5B8C\u6574"),
            createVNode("li", null, '\u8BE6\u7EC6\u903B\u8F91\uFF1A\u524D\u7AEFbeforeDocName/afterDocName required=true\uFF1B\u540E\u7AEFcomputeBxLine\u6821\u9A8CbeforeDocId\u4E3A\u7A7A\u62A5"\u8BF7\u4E0A\u4F20\u88C5\u4FEE\u524D\u6587\u4EF6"\uFF0CafterDocId\u4E3A\u7A7A\u62A5"\u8BF7\u4E0A\u4F20\u88C5\u4FEE\u540E\u6587\u4EF6"'),
            createVNode("li", null, "\u7CFB\u7EDF\u4F53\u73B0\uFF1A\u524D\u7AEFC7N\u5FC5\u586B\u63D0\u793A\uFF0C\u540E\u7AEFCommonException")
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u6821\u9A8C10\uFF1A\u91D1\u989D\u4E0D\u8D85\u6807\u51C6(\u975E\u8D85\u989D\u62A5\u9500) \u2014\u2014 \u786E\u4FDD\u62A5\u9500\u91D1\u989D\u4E0D\u8D85\u653F\u7B56\u6807\u51C6"),
            createVNode("li", null, '\u8BE6\u7EC6\u903B\u8F91\uFF1A\u524D\u7AEFvalidator\u6821\u9A8C\u975E\u8D85\u989D\u65F6(excessFlag!=Y)\u7533\u8BF7/\u4E1A\u52A1\u6279\u51C6\u91D1\u989D\u4E0D\u8D85\u6807\u51C6\u91D1\u989D\uFF0C\u62A5"\u8F93\u5165\u7684\u91D1\u989D\u4E0D\u80FD\u5927\u4E8E\u5BF9\u5E94\u7684\u989D\u5EA6(\u5185/\u5916)\u6807\u51C6\u91D1\u989D"\uFF1B\u540E\u7AEFbizNodeUpdate\u6821\u9A8C\u975E\u8D85\u989D\u65F6\u4E1A\u52A1\u6279\u51C6\u91D1\u989D\u4E0D\u8D85\u6807\u51C6\uFF0C\u62A5"\u975E\u8D85\u989D\u62A5\u9500\uFF0C\u989D\u5EA6\u5185/\u5916\u91D1\u989D\u4E0D\u5141\u8BB8\u5927\u4E8E\u653F\u7B56\u6807\u51C6"'),
            createVNode("li", null, "\u7CFB\u7EDF\u4F53\u73B0\uFF1A\u524D\u7AEF\u5B57\u6BB5validator\u63D0\u793A\uFF0C\u540E\u7AEFCommonException")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, { title: "\u63D0\u4EA4\u6821\u9A8C" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}>\u6821\u9A8C1\uFF1A\u989D\u5EA6\u5916\u9884\u7B97\u5145\u8DB3 \u2014\u2014 \u9632\u6B62\u8D85\u989D\u62A5\u9500</li><li${_scopeId}>\u8BE6\u7EC6\u903B\u8F91\uFF1A\u63D0\u4EA4\u65F6validBxAmt\uFF0C\u5F53useExtraBudgetFlag=Y\u4E14\u989D\u5EA6\u5916\u5B9E\u9645\u62A5\u9500\u91D1\u989D&gt;0\u65F6\uFF0C\u67E5\u8BE2\u5269\u4F59\u989D\u5EA6\u5916\u53EF\u7528\u9884\u7B97(viewOverBudgetAmt)\uFF0C\u5B9E\u9645\u62A5\u9500\u91D1\u989D&gt;\u5269\u4F59\u9884\u7B97\u62A5&quot;X\u5E74\u7684\u989D\u5EA6\u5916\u9884\u7B97\u4E0D\u8DB3\uFF0C\u6709\u7591\u95EE\u8BF7\u8054\u7CFB\u8D22\u52A1&quot;</li><li${_scopeId}>\u7CFB\u7EDF\u4F53\u73B0\uFF1A\u540E\u7AEFCommonException</li><li${_scopeId}>\u6392\u67E5SQL\uFF1A<code${_scopeId}>SELECT * FROM FIN_FEE_CHECK_BX_HEADER WHERE BUD_YEAR = #{year} AND FEE_TYPE_ID = 66014602 AND DIVISION_ID = #{divisionId}</code></li></ul><ul${_scopeId}><li${_scopeId}>\u6821\u9A8C2\uFF1A\u7ECF\u9500\u5546\u9650\u989D\u6821\u9A8C(\u9650\u989D\u6A21\u5F0F) \u2014\u2014 \u9632\u6B62\u8D85\u8FC7\u7ECF\u9500\u5546\u9650\u989D</li><li${_scopeId}>\u8BE6\u7EC6\u903B\u8F91\uFF1A\u63D0\u4EA4\u65F6computeLimitBxAmt\uFF0C\u5F53custLimitFlag=Y\u65F6\u8BA1\u7B97\u8D85\u9650\u91D1\u989D=min(\u7ECF\u9500\u5546\u9650\u989D-\u5DF2\u62A5\u9500\u91D1\u989D-\u8D22\u52A1\u6279\u51C6\u603B\u989D, 0)\uFF0C\u6839\u636E\u8D85\u9650\u5904\u7406\u7B56\u7565\u5904\u7406</li><li${_scopeId}>\u7CFB\u7EDF\u4F53\u73B0\uFF1A\u540E\u7AEFCommonException</li></ul><ul${_scopeId}><li${_scopeId}>\u6821\u9A8C3\uFF1A\u8D85\u9650\u5904\u7406\u7B56\u7565\u6821\u9A8C \u2014\u2014 \u786E\u4FDD\u8D85\u9650\u5904\u7406\u914D\u7F6E\u6B63\u786E</li><li${_scopeId}>\u8BE6\u7EC6\u903B\u8F91\uFF1AcomputeLimitBxAmt\u5F53extraBudgetExcessStrategy\u975E1\u975E2\u65F6\u62A5&quot;\u5F53\u524D\u989D\u5EA6\u5916\u8D85\u9650\u5904\u7406\u4E0D\u5B58\u5728\uFF0C\u8BF7\u8054\u7CFB\u76F8\u5173\u4EBA\u5458\u5904\u7406&quot;</li><li${_scopeId}>\u7CFB\u7EDF\u4F53\u73B0\uFF1A\u540E\u7AEFCommonException</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, "\u6821\u9A8C1\uFF1A\u989D\u5EA6\u5916\u9884\u7B97\u5145\u8DB3 \u2014\u2014 \u9632\u6B62\u8D85\u989D\u62A5\u9500"),
            createVNode("li", null, '\u8BE6\u7EC6\u903B\u8F91\uFF1A\u63D0\u4EA4\u65F6validBxAmt\uFF0C\u5F53useExtraBudgetFlag=Y\u4E14\u989D\u5EA6\u5916\u5B9E\u9645\u62A5\u9500\u91D1\u989D>0\u65F6\uFF0C\u67E5\u8BE2\u5269\u4F59\u989D\u5EA6\u5916\u53EF\u7528\u9884\u7B97(viewOverBudgetAmt)\uFF0C\u5B9E\u9645\u62A5\u9500\u91D1\u989D>\u5269\u4F59\u9884\u7B97\u62A5"X\u5E74\u7684\u989D\u5EA6\u5916\u9884\u7B97\u4E0D\u8DB3\uFF0C\u6709\u7591\u95EE\u8BF7\u8054\u7CFB\u8D22\u52A1"'),
            createVNode("li", null, "\u7CFB\u7EDF\u4F53\u73B0\uFF1A\u540E\u7AEFCommonException"),
            createVNode("li", null, [
              createTextVNode("\u6392\u67E5SQL\uFF1A"),
              createVNode("code", null, "SELECT * FROM FIN_FEE_CHECK_BX_HEADER WHERE BUD_YEAR = #{year} AND FEE_TYPE_ID = 66014602 AND DIVISION_ID = #{divisionId}")
            ])
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u6821\u9A8C2\uFF1A\u7ECF\u9500\u5546\u9650\u989D\u6821\u9A8C(\u9650\u989D\u6A21\u5F0F) \u2014\u2014 \u9632\u6B62\u8D85\u8FC7\u7ECF\u9500\u5546\u9650\u989D"),
            createVNode("li", null, "\u8BE6\u7EC6\u903B\u8F91\uFF1A\u63D0\u4EA4\u65F6computeLimitBxAmt\uFF0C\u5F53custLimitFlag=Y\u65F6\u8BA1\u7B97\u8D85\u9650\u91D1\u989D=min(\u7ECF\u9500\u5546\u9650\u989D-\u5DF2\u62A5\u9500\u91D1\u989D-\u8D22\u52A1\u6279\u51C6\u603B\u989D, 0)\uFF0C\u6839\u636E\u8D85\u9650\u5904\u7406\u7B56\u7565\u5904\u7406"),
            createVNode("li", null, "\u7CFB\u7EDF\u4F53\u73B0\uFF1A\u540E\u7AEFCommonException")
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u6821\u9A8C3\uFF1A\u8D85\u9650\u5904\u7406\u7B56\u7565\u6821\u9A8C \u2014\u2014 \u786E\u4FDD\u8D85\u9650\u5904\u7406\u914D\u7F6E\u6B63\u786E"),
            createVNode("li", null, '\u8BE6\u7EC6\u903B\u8F91\uFF1AcomputeLimitBxAmt\u5F53extraBudgetExcessStrategy\u975E1\u975E2\u65F6\u62A5"\u5F53\u524D\u989D\u5EA6\u5916\u8D85\u9650\u5904\u7406\u4E0D\u5B58\u5728\uFF0C\u8BF7\u8054\u7CFB\u76F8\u5173\u4EBA\u5458\u5904\u7406"'),
            createVNode("li", null, "\u7CFB\u7EDF\u4F53\u73B0\uFF1A\u540E\u7AEFCommonException")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, { title: "\u660E\u7EC6\u5B57\u6BB5\u5217\u8868" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p${_scopeId}><strong${_scopeId}>CUST_DH_REIMBURSE_LINE\uFF08\u95E8\u5934\u62A5\u9500\u884C\u8868\uFF09\u660E\u7EC6\u5B57\u6BB5</strong></p><table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5B57\u6BB5\u540D</th><th${_scopeId}>\u6570\u636E\u5E93\u5217\u540D</th><th${_scopeId}>\u7EC4\u4EF6</th><th${_scopeId}>\u4E1A\u52A1\u91CA\u4E49</th><th${_scopeId}>\u663E\u9690\u6761\u4EF6</th><th${_scopeId}>\u53D6\u503C/\u8D4B\u503C\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u4E3B\u952E</td><td${_scopeId}>ID</td><td${_scopeId}>-</td><td${_scopeId}>\u884C\u8868\u4E3B\u952E</td><td${_scopeId}>-</td><td${_scopeId}>\u81EA\u589E</td></tr><tr${_scopeId}><td${_scopeId}>\u62A5\u9500\u5355ID</td><td${_scopeId}>HEAD_ID</td><td${_scopeId}>-</td><td${_scopeId}>\u5173\u8054\u5934\u8868ID</td><td${_scopeId}>-</td><td${_scopeId}>\u4ECE\u5934\u8868\u5E26\u5165</td></tr><tr${_scopeId}><td${_scopeId}>\u95E8\u5E97ID</td><td${_scopeId}>TERMINAL_ID</td><td${_scopeId}>Lov</td><td${_scopeId}>\u95E8\u5E97\u9009\u62E9</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>LOV\u9009\u62E9\uFF0C\u5FC5\u586B</td></tr><tr${_scopeId}><td${_scopeId}>\u88C5\u4FEE\u9879\u76EE</td><td${_scopeId}>DECORATE_PROJECT</td><td${_scopeId}>Lov</td><td${_scopeId}>\u8865\u8D34\u9879\u76EE\u9009\u62E9</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>LOV\u9009\u62E9\uFF0C\u5FC5\u586B\uFF0C\u6309\u653F\u7B56+\u95E8\u5E97\u7C7B\u578B\u8FC7\u6EE4</td></tr><tr${_scopeId}><td${_scopeId}>\u6570\u91CF</td><td${_scopeId}>APPLY_NUM</td><td${_scopeId}>NumberField</td><td${_scopeId}>\u7533\u8BF7\u6570\u91CF</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u7528\u6237\u8F93\u5165\uFF0C\u5FC5\u586B\uFF0C\u6821\u9A8C\u8303\u56F4[minNum, maxNum]</td></tr><tr${_scopeId}><td${_scopeId}>\u989D\u5EA6\u5185\u7533\u8BF7\u91D1\u989D</td><td${_scopeId}>IN_APPLY_AMT</td><td${_scopeId}>Currency</td><td${_scopeId}>\u989D\u5EA6\u5185\u7533\u8BF7\u91D1\u989D</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u7528\u6237\u8F93\u5165\uFF0C\u975E\u8D85\u989D\u65F6\u4E0D\u8D85\u6807\u51C6\u91D1\u989D</td></tr><tr${_scopeId}><td${_scopeId}>\u989D\u5EA6\u5916\u7533\u8BF7\u91D1\u989D</td><td${_scopeId}>OUT_APPLY_AMT</td><td${_scopeId}>Currency</td><td${_scopeId}>\u989D\u5EA6\u5916\u7533\u8BF7\u91D1\u989D</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u7528\u6237\u8F93\u5165\uFF0C\u975E\u8D85\u989D\u65F6\u4E0D\u8D85\u6807\u51C6\u91D1\u989D</td></tr><tr${_scopeId}><td${_scopeId}>\u989D\u5EA6\u5185\u4E1A\u52A1\u6279\u51C6\u91D1\u989D</td><td${_scopeId}>IN_BIZ_AMT</td><td${_scopeId}>Currency</td><td${_scopeId}>\u533A\u57DF\u7ECF\u7406\u5BA1\u6279\u91D1\u989D</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u533A\u57DF\u7ECF\u7406\u5BA1\u6279\u8282\u70B9\u53EF\u7F16\u8F91\uFF0C\u65B0\u589E\u65F6=\u7533\u8BF7\u91D1\u989D</td></tr><tr${_scopeId}><td${_scopeId}>\u989D\u5EA6\u5916\u4E1A\u52A1\u6279\u51C6\u91D1\u989D</td><td${_scopeId}>OUT_BIZ_AMT</td><td${_scopeId}>Currency</td><td${_scopeId}>\u533A\u57DF\u7ECF\u7406\u5BA1\u6279\u91D1\u989D</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u533A\u57DF\u7ECF\u7406\u5BA1\u6279\u8282\u70B9\u53EF\u7F16\u8F91\uFF0C\u65B0\u589E\u65F6=\u7533\u8BF7\u91D1\u989D</td></tr><tr${_scopeId}><td${_scopeId}>\u989D\u5EA6\u5185\u8D22\u52A1\u6279\u51C6\u91D1\u989D</td><td${_scopeId}>IN_FIN_AMT</td><td${_scopeId}>Currency</td><td${_scopeId}>\u9500\u552E\u4F1A\u8BA1\u5BA1\u6279\u91D1\u989D</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u9500\u552E\u4F1A\u8BA1\u5BA1\u6279\u8282\u70B9\u53EF\u7F16\u8F91\uFF0C\u65B0\u589E\u65F6=\u7533\u8BF7\u91D1\u989D</td></tr><tr${_scopeId}><td${_scopeId}>\u989D\u5EA6\u5916\u8D22\u52A1\u6279\u51C6\u91D1\u989D</td><td${_scopeId}>OUT_FIN_AMT</td><td${_scopeId}>Currency</td><td${_scopeId}>\u9500\u552E\u4F1A\u8BA1\u5BA1\u6279\u91D1\u989D</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u9500\u552E\u4F1A\u8BA1\u5BA1\u6279\u8282\u70B9\u53EF\u7F16\u8F91\uFF0C\u65B0\u589E\u65F6=\u7533\u8BF7\u91D1\u989D</td></tr><tr${_scopeId}><td${_scopeId}>\u5907\u6CE8</td><td${_scopeId}>LINE_REMARK</td><td${_scopeId}>TextField</td><td${_scopeId}>\u884C\u5907\u6CE8</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u7528\u6237\u8F93\u5165</td></tr><tr${_scopeId}><td${_scopeId}>\u88C5\u4FEE\u524D\u7167\u7247ID</td><td${_scopeId}>BEFORE_DOC_ID</td><td${_scopeId}>-</td><td${_scopeId}>\u88C5\u4FEE\u524D\u7167\u7247\u9644\u4EF6UUID</td><td${_scopeId}>-</td><td${_scopeId}>\u4E0A\u4F20\u9644\u4EF6\u83B7\u53D6</td></tr><tr${_scopeId}><td${_scopeId}>\u88C5\u4FEE\u524D\u7167\u7247\u540D\u79F0</td><td${_scopeId}>BEFORE_DOC_NAME</td><td${_scopeId}>TextField</td><td${_scopeId}>\u88C5\u4FEE\u524D\u7167\u7247\u6587\u4EF6\u540D</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u4E0A\u4F20\u9644\u4EF6\uFF0C\u5FC5\u586B</td></tr><tr${_scopeId}><td${_scopeId}>\u88C5\u4FEE\u540E\u7167\u7247ID</td><td${_scopeId}>AFTER_DOC_ID</td><td${_scopeId}>-</td><td${_scopeId}>\u88C5\u4FEE\u540E\u7167\u7247\u9644\u4EF6UUID</td><td${_scopeId}>-</td><td${_scopeId}>\u4E0A\u4F20\u9644\u4EF6\u83B7\u53D6</td></tr><tr${_scopeId}><td${_scopeId}>\u88C5\u4FEE\u540E\u7167\u7247\u540D\u79F0</td><td${_scopeId}>AFTER_DOC_NAME</td><td${_scopeId}>TextField</td><td${_scopeId}>\u88C5\u4FEE\u540E\u7167\u7247\u6587\u4EF6\u540D</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u4E0A\u4F20\u9644\u4EF6\uFF0C\u5FC5\u586B</td></tr><tr${_scopeId}><td${_scopeId}>\u6807\u51C6\u7B49\u7EA7</td><td${_scopeId}>STANDARD_GRADE</td><td${_scopeId}>TextField</td><td${_scopeId}>\u6807\u51C6\u7B49\u7EA7</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u4ECE\u653F\u7B56\u884C\u8868\u5E26\u5165</td></tr><tr${_scopeId}><td${_scopeId}>\u5355\u4F4D\u7C7B\u578B</td><td${_scopeId}>UNIT_TYPE</td><td${_scopeId}>TextField</td><td${_scopeId}>\u5355\u4F4D\u7C7B\u578B</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u4ECE\u653F\u7B56\u884C\u8868\u5E26\u5165</td></tr><tr${_scopeId}><td${_scopeId}>\u989D\u5EA6\u5185\u6807\u51C6\u91D1\u989D</td><td${_scopeId}>IN_STANDARD_AMT</td><td${_scopeId}>Currency</td><td${_scopeId}>\u989D\u5EA6\u5185\u6807\u51C6\u91D1\u989D</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>= \u6807\u51C6\u5355\u4EF7 \xD7 \u6570\u91CF\uFF0C\u4ECE\u653F\u7B56\u884C\u8868\u8BA1\u7B97</td></tr><tr${_scopeId}><td${_scopeId}>\u989D\u5EA6\u5916\u6807\u51C6\u91D1\u989D</td><td${_scopeId}>OUT_STANDARD_AMT</td><td${_scopeId}>Currency</td><td${_scopeId}>\u989D\u5EA6\u5916\u6807\u51C6\u91D1\u989D</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>= \u6807\u51C6\u5355\u4EF7 \xD7 \u6570\u91CF\uFF0C\u4ECE\u653F\u7B56\u884C\u8868\u8BA1\u7B97</td></tr><tr${_scopeId}><td${_scopeId}>\u653F\u7B56\u884CID</td><td${_scopeId}>POLICY_LINE_ID</td><td${_scopeId}>-</td><td${_scopeId}>\u5173\u8054\u653F\u7B56\u660E\u7EC6\u884CID</td><td${_scopeId}>-</td><td${_scopeId}>\u4ECE\u653F\u7B56\u884C\u8868\u5E26\u5165</td></tr></tbody></table>`);
      } else {
        return [
          createVNode("p", null, [
            createVNode("strong", null, "CUST_DH_REIMBURSE_LINE\uFF08\u95E8\u5934\u62A5\u9500\u884C\u8868\uFF09\u660E\u7EC6\u5B57\u6BB5")
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
                createVNode("td", null, "\u4E3B\u952E"),
                createVNode("td", null, "ID"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u884C\u8868\u4E3B\u952E"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u81EA\u589E")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u62A5\u9500\u5355ID"),
                createVNode("td", null, "HEAD_ID"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u5173\u8054\u5934\u8868ID"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u4ECE\u5934\u8868\u5E26\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u95E8\u5E97ID"),
                createVNode("td", null, "TERMINAL_ID"),
                createVNode("td", null, "Lov"),
                createVNode("td", null, "\u95E8\u5E97\u9009\u62E9"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "LOV\u9009\u62E9\uFF0C\u5FC5\u586B")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u88C5\u4FEE\u9879\u76EE"),
                createVNode("td", null, "DECORATE_PROJECT"),
                createVNode("td", null, "Lov"),
                createVNode("td", null, "\u8865\u8D34\u9879\u76EE\u9009\u62E9"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "LOV\u9009\u62E9\uFF0C\u5FC5\u586B\uFF0C\u6309\u653F\u7B56+\u95E8\u5E97\u7C7B\u578B\u8FC7\u6EE4")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6570\u91CF"),
                createVNode("td", null, "APPLY_NUM"),
                createVNode("td", null, "NumberField"),
                createVNode("td", null, "\u7533\u8BF7\u6570\u91CF"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u7528\u6237\u8F93\u5165\uFF0C\u5FC5\u586B\uFF0C\u6821\u9A8C\u8303\u56F4[minNum, maxNum]")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u989D\u5EA6\u5185\u7533\u8BF7\u91D1\u989D"),
                createVNode("td", null, "IN_APPLY_AMT"),
                createVNode("td", null, "Currency"),
                createVNode("td", null, "\u989D\u5EA6\u5185\u7533\u8BF7\u91D1\u989D"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u7528\u6237\u8F93\u5165\uFF0C\u975E\u8D85\u989D\u65F6\u4E0D\u8D85\u6807\u51C6\u91D1\u989D")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u989D\u5EA6\u5916\u7533\u8BF7\u91D1\u989D"),
                createVNode("td", null, "OUT_APPLY_AMT"),
                createVNode("td", null, "Currency"),
                createVNode("td", null, "\u989D\u5EA6\u5916\u7533\u8BF7\u91D1\u989D"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u7528\u6237\u8F93\u5165\uFF0C\u975E\u8D85\u989D\u65F6\u4E0D\u8D85\u6807\u51C6\u91D1\u989D")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u989D\u5EA6\u5185\u4E1A\u52A1\u6279\u51C6\u91D1\u989D"),
                createVNode("td", null, "IN_BIZ_AMT"),
                createVNode("td", null, "Currency"),
                createVNode("td", null, "\u533A\u57DF\u7ECF\u7406\u5BA1\u6279\u91D1\u989D"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u533A\u57DF\u7ECF\u7406\u5BA1\u6279\u8282\u70B9\u53EF\u7F16\u8F91\uFF0C\u65B0\u589E\u65F6=\u7533\u8BF7\u91D1\u989D")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u989D\u5EA6\u5916\u4E1A\u52A1\u6279\u51C6\u91D1\u989D"),
                createVNode("td", null, "OUT_BIZ_AMT"),
                createVNode("td", null, "Currency"),
                createVNode("td", null, "\u533A\u57DF\u7ECF\u7406\u5BA1\u6279\u91D1\u989D"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u533A\u57DF\u7ECF\u7406\u5BA1\u6279\u8282\u70B9\u53EF\u7F16\u8F91\uFF0C\u65B0\u589E\u65F6=\u7533\u8BF7\u91D1\u989D")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u989D\u5EA6\u5185\u8D22\u52A1\u6279\u51C6\u91D1\u989D"),
                createVNode("td", null, "IN_FIN_AMT"),
                createVNode("td", null, "Currency"),
                createVNode("td", null, "\u9500\u552E\u4F1A\u8BA1\u5BA1\u6279\u91D1\u989D"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u9500\u552E\u4F1A\u8BA1\u5BA1\u6279\u8282\u70B9\u53EF\u7F16\u8F91\uFF0C\u65B0\u589E\u65F6=\u7533\u8BF7\u91D1\u989D")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u989D\u5EA6\u5916\u8D22\u52A1\u6279\u51C6\u91D1\u989D"),
                createVNode("td", null, "OUT_FIN_AMT"),
                createVNode("td", null, "Currency"),
                createVNode("td", null, "\u9500\u552E\u4F1A\u8BA1\u5BA1\u6279\u91D1\u989D"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u9500\u552E\u4F1A\u8BA1\u5BA1\u6279\u8282\u70B9\u53EF\u7F16\u8F91\uFF0C\u65B0\u589E\u65F6=\u7533\u8BF7\u91D1\u989D")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5907\u6CE8"),
                createVNode("td", null, "LINE_REMARK"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u884C\u5907\u6CE8"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u7528\u6237\u8F93\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u88C5\u4FEE\u524D\u7167\u7247ID"),
                createVNode("td", null, "BEFORE_DOC_ID"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u88C5\u4FEE\u524D\u7167\u7247\u9644\u4EF6UUID"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u4E0A\u4F20\u9644\u4EF6\u83B7\u53D6")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u88C5\u4FEE\u524D\u7167\u7247\u540D\u79F0"),
                createVNode("td", null, "BEFORE_DOC_NAME"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u88C5\u4FEE\u524D\u7167\u7247\u6587\u4EF6\u540D"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u4E0A\u4F20\u9644\u4EF6\uFF0C\u5FC5\u586B")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u88C5\u4FEE\u540E\u7167\u7247ID"),
                createVNode("td", null, "AFTER_DOC_ID"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u88C5\u4FEE\u540E\u7167\u7247\u9644\u4EF6UUID"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u4E0A\u4F20\u9644\u4EF6\u83B7\u53D6")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u88C5\u4FEE\u540E\u7167\u7247\u540D\u79F0"),
                createVNode("td", null, "AFTER_DOC_NAME"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u88C5\u4FEE\u540E\u7167\u7247\u6587\u4EF6\u540D"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u4E0A\u4F20\u9644\u4EF6\uFF0C\u5FC5\u586B")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6807\u51C6\u7B49\u7EA7"),
                createVNode("td", null, "STANDARD_GRADE"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u6807\u51C6\u7B49\u7EA7"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u4ECE\u653F\u7B56\u884C\u8868\u5E26\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5355\u4F4D\u7C7B\u578B"),
                createVNode("td", null, "UNIT_TYPE"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u5355\u4F4D\u7C7B\u578B"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u4ECE\u653F\u7B56\u884C\u8868\u5E26\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u989D\u5EA6\u5185\u6807\u51C6\u91D1\u989D"),
                createVNode("td", null, "IN_STANDARD_AMT"),
                createVNode("td", null, "Currency"),
                createVNode("td", null, "\u989D\u5EA6\u5185\u6807\u51C6\u91D1\u989D"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "= \u6807\u51C6\u5355\u4EF7 \xD7 \u6570\u91CF\uFF0C\u4ECE\u653F\u7B56\u884C\u8868\u8BA1\u7B97")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u989D\u5EA6\u5916\u6807\u51C6\u91D1\u989D"),
                createVNode("td", null, "OUT_STANDARD_AMT"),
                createVNode("td", null, "Currency"),
                createVNode("td", null, "\u989D\u5EA6\u5916\u6807\u51C6\u91D1\u989D"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "= \u6807\u51C6\u5355\u4EF7 \xD7 \u6570\u91CF\uFF0C\u4ECE\u653F\u7B56\u884C\u8868\u8BA1\u7B97")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u653F\u7B56\u884CID"),
                createVNode("td", null, "POLICY_LINE_ID"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u5173\u8054\u653F\u7B56\u660E\u7EC6\u884CID"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u4ECE\u653F\u7B56\u884C\u8868\u5E26\u5165")
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, { title: "\u4E0A\u6E38\u4F9D\u8D56" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u4E0A\u6E38\u6A21\u5757</th><th${_scopeId}>\u4F9D\u8D56\u7C7B\u578B</th><th${_scopeId}>\u4F9D\u8D56\u8BF4\u660E</th><th${_scopeId}>\u4F9D\u8D56\u6210\u7ACB\u6761\u4EF6</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u5E97\u9762\u5EFA\u8BBE\u8865\u8D34\u653F\u7B56(POLICY_STANDARD_HEAD)</td><td${_scopeId}>\u914D\u7F6E\u4F9D\u8D56</td><td${_scopeId}>\u62A5\u9500\u5FC5\u987B\u5173\u8054\u6709\u6548\u653F\u7B56\uFF0C\u4ECE\u4E2D\u83B7\u53D6\u62A5\u9500\u7C7B\u578B\u3001\u9884\u7B97\u5E74\u5EA6\u3001\u6807\u51C6\u91D1\u989D\u3001\u6570\u91CF\u8303\u56F4</td><td${_scopeId}>\u653F\u7B56valid=2\u4E14\u5728\u6709\u6548\u671F\u5185</td></tr><tr${_scopeId}><td${_scopeId}>\u653F\u7B56\u660E\u7EC6\u884C(POLICY_STANDARD_LINE)</td><td${_scopeId}>\u914D\u7F6E\u4F9D\u8D56</td><td${_scopeId}>\u884C\u8868\u5173\u8054\u653F\u7B56\u660E\u7EC6\u83B7\u53D6\u6807\u51C6\u91D1\u989D\u548C\u6570\u91CF\u8303\u56F4</td><td${_scopeId}>policyLineId\u6709\u6548</td></tr><tr${_scopeId}><td${_scopeId}>\u7ECF\u9500\u5546(CUSTOMER)</td><td${_scopeId}>\u6570\u636E\u4F9D\u8D56</td><td${_scopeId}>\u62A5\u9500\u5173\u8054\u7ECF\u9500\u5546\uFF0C\u83B7\u53D6\u7F16\u7801\u3001\u540D\u79F0\u3001\u7ECF\u8425\u5C5E\u6027\u7B49</td><td${_scopeId}>\u7ECF\u9500\u5546\u5B58\u5728</td></tr><tr${_scopeId}><td${_scopeId}>\u4EA4\u6613\u516C\u53F8\u6CD5\u4EBA\u4E2D\u95F4\u8868</td><td${_scopeId}>\u6570\u636E\u4F9D\u8D56</td><td${_scopeId}>\u83B7\u53D6\u4EA4\u6613\u516C\u53F8\u7F16\u7801\u548C\u6CD5\u4EBA\u5173\u8054ID</td><td${_scopeId}>\u7ECF\u9500\u5546+\u4EA4\u6613\u516C\u53F8+\u6CD5\u4EBA\u7EC4\u5408\u5B58\u5728</td></tr><tr${_scopeId}><td${_scopeId}>\u7F16\u7801\u89C4\u5219(AE.DH_REIMBURSE_HEAD_NO)</td><td${_scopeId}>\u670D\u52A1\u4F9D\u8D56</td><td${_scopeId}>\u751F\u6210\u62A5\u9500\u5355\u53F7</td><td${_scopeId}>\u65B0\u589E\u4FDD\u5B58\u65F6</td></tr><tr${_scopeId}><td${_scopeId}>\u5DE5\u4F5C\u6D41(SUB_STORE_HEAD_PROCESS_DOOR)</td><td${_scopeId}>\u6D41\u7A0B\u4F9D\u8D56</td><td${_scopeId}>\u9A71\u52A8\u591A\u8282\u70B9\u5BA1\u6279</td><td${_scopeId}>\u63D0\u4EA4\u5BA1\u6279\u65F6</td></tr><tr${_scopeId}><td${_scopeId}>\u4E8B\u4E1A\u90E8\u57FA\u7840\u8BBE\u7F6E(DIVISION_BASE_SET)</td><td${_scopeId}>\u914D\u7F6E\u4F9D\u8D56</td><td${_scopeId}>\u83B7\u53D6\u4E8B\u4E1A\u90E8ID\u3001\u7F16\u7801</td><td${_scopeId}>\u65B0\u589E\u4FDD\u5B58\u65F6</td></tr><tr${_scopeId}><td${_scopeId}>\u989D\u5EA6\u5916\u9884\u7B97(FIN_FEE_CHECK_BX_HEADER)</td><td${_scopeId}>\u6570\u636E\u4F9D\u8D56</td><td${_scopeId}>\u6821\u9A8C\u989D\u5EA6\u5916\u9884\u7B97\u5145\u8DB3</td><td${_scopeId}>useExtraBudgetFlag=Y\u4E14\u989D\u5EA6\u5916\u91D1\u989D&gt;0</td></tr><tr${_scopeId}><td${_scopeId}>\u7ECF\u9500\u5546\u9650\u989D</td><td${_scopeId}>\u6570\u636E\u4F9D\u8D56</td><td${_scopeId}>\u9650\u989D\u6A21\u5F0F\u4E0B\u83B7\u53D6\u7ECF\u9500\u5546\u9650\u989D</td><td${_scopeId}>custLimitFlag=Y</td></tr></tbody></table>`);
      } else {
        return [
          createVNode("table", { class: "kb-field-tbl" }, [
            createVNode("thead", null, [
              createVNode("tr", null, [
                createVNode("th", null, "\u4E0A\u6E38\u6A21\u5757"),
                createVNode("th", null, "\u4F9D\u8D56\u7C7B\u578B"),
                createVNode("th", null, "\u4F9D\u8D56\u8BF4\u660E"),
                createVNode("th", null, "\u4F9D\u8D56\u6210\u7ACB\u6761\u4EF6")
              ])
            ]),
            createVNode("tbody", null, [
              createVNode("tr", null, [
                createVNode("td", null, "\u5E97\u9762\u5EFA\u8BBE\u8865\u8D34\u653F\u7B56(POLICY_STANDARD_HEAD)"),
                createVNode("td", null, "\u914D\u7F6E\u4F9D\u8D56"),
                createVNode("td", null, "\u62A5\u9500\u5FC5\u987B\u5173\u8054\u6709\u6548\u653F\u7B56\uFF0C\u4ECE\u4E2D\u83B7\u53D6\u62A5\u9500\u7C7B\u578B\u3001\u9884\u7B97\u5E74\u5EA6\u3001\u6807\u51C6\u91D1\u989D\u3001\u6570\u91CF\u8303\u56F4"),
                createVNode("td", null, "\u653F\u7B56valid=2\u4E14\u5728\u6709\u6548\u671F\u5185")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u653F\u7B56\u660E\u7EC6\u884C(POLICY_STANDARD_LINE)"),
                createVNode("td", null, "\u914D\u7F6E\u4F9D\u8D56"),
                createVNode("td", null, "\u884C\u8868\u5173\u8054\u653F\u7B56\u660E\u7EC6\u83B7\u53D6\u6807\u51C6\u91D1\u989D\u548C\u6570\u91CF\u8303\u56F4"),
                createVNode("td", null, "policyLineId\u6709\u6548")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7ECF\u9500\u5546(CUSTOMER)"),
                createVNode("td", null, "\u6570\u636E\u4F9D\u8D56"),
                createVNode("td", null, "\u62A5\u9500\u5173\u8054\u7ECF\u9500\u5546\uFF0C\u83B7\u53D6\u7F16\u7801\u3001\u540D\u79F0\u3001\u7ECF\u8425\u5C5E\u6027\u7B49"),
                createVNode("td", null, "\u7ECF\u9500\u5546\u5B58\u5728")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u4EA4\u6613\u516C\u53F8\u6CD5\u4EBA\u4E2D\u95F4\u8868"),
                createVNode("td", null, "\u6570\u636E\u4F9D\u8D56"),
                createVNode("td", null, "\u83B7\u53D6\u4EA4\u6613\u516C\u53F8\u7F16\u7801\u548C\u6CD5\u4EBA\u5173\u8054ID"),
                createVNode("td", null, "\u7ECF\u9500\u5546+\u4EA4\u6613\u516C\u53F8+\u6CD5\u4EBA\u7EC4\u5408\u5B58\u5728")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7F16\u7801\u89C4\u5219(AE.DH_REIMBURSE_HEAD_NO)"),
                createVNode("td", null, "\u670D\u52A1\u4F9D\u8D56"),
                createVNode("td", null, "\u751F\u6210\u62A5\u9500\u5355\u53F7"),
                createVNode("td", null, "\u65B0\u589E\u4FDD\u5B58\u65F6")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5DE5\u4F5C\u6D41(SUB_STORE_HEAD_PROCESS_DOOR)"),
                createVNode("td", null, "\u6D41\u7A0B\u4F9D\u8D56"),
                createVNode("td", null, "\u9A71\u52A8\u591A\u8282\u70B9\u5BA1\u6279"),
                createVNode("td", null, "\u63D0\u4EA4\u5BA1\u6279\u65F6")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u4E8B\u4E1A\u90E8\u57FA\u7840\u8BBE\u7F6E(DIVISION_BASE_SET)"),
                createVNode("td", null, "\u914D\u7F6E\u4F9D\u8D56"),
                createVNode("td", null, "\u83B7\u53D6\u4E8B\u4E1A\u90E8ID\u3001\u7F16\u7801"),
                createVNode("td", null, "\u65B0\u589E\u4FDD\u5B58\u65F6")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u989D\u5EA6\u5916\u9884\u7B97(FIN_FEE_CHECK_BX_HEADER)"),
                createVNode("td", null, "\u6570\u636E\u4F9D\u8D56"),
                createVNode("td", null, "\u6821\u9A8C\u989D\u5EA6\u5916\u9884\u7B97\u5145\u8DB3"),
                createVNode("td", null, "useExtraBudgetFlag=Y\u4E14\u989D\u5EA6\u5916\u91D1\u989D>0")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7ECF\u9500\u5546\u9650\u989D"),
                createVNode("td", null, "\u6570\u636E\u4F9D\u8D56"),
                createVNode("td", null, "\u9650\u989D\u6A21\u5F0F\u4E0B\u83B7\u53D6\u7ECF\u9500\u5546\u9650\u989D"),
                createVNode("td", null, "custLimitFlag=Y")
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, { title: "\u4E0B\u6E38\u5F71\u54CD" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u95E8\u5934\u5C55\u677F\u5151\u73B0(CUST_DH_CASHOUT_HEAD)</strong>\uFF1A\u62A5\u9500\u5355\u5BA1\u6279\u901A\u8FC7(APPROVED)\u540E\u53EF\u53D1\u8D77\u95E8\u5934\u5C55\u677F\u5151\u73B0(\u83DC\u535580)\uFF0C\u5151\u73B0\u5355\u901A\u8FC7REIMBURSE_HEAD_ID\u5173\u8054\u62A5\u9500\u5355</li><li${_scopeId}><strong${_scopeId}>MBO\u7CFB\u7EDF</strong>\uFF1A\u5BA1\u6279\u8FC7\u7A0B\u4E2DeventExecute\u5904\u7406SEND_MBO\u4E8B\u4EF6\u65F6\uFF0C\u901A\u8FC7mboFeignClient.advDecAdd\u63A8\u9001\u81F3MBO\u7CFB\u7EDF\uFF0CbillFlag=6\uFF0CreimbursementType=\u95E8\u5934\u62A5\u9500</li><li${_scopeId}><strong${_scopeId}>\u989D\u5EA6\u5916\u9884\u7B97\u5360\u7528</strong>\uFF1A\u62A5\u9500\u5355\u63D0\u4EA4\u540E\u5360\u7528\u989D\u5EA6\u5916\u9884\u7B97(outBxAmt)\uFF0C\u5F71\u54CD\u540E\u7EED\u62A5\u9500\u5355\u7684\u9884\u7B97\u6821\u9A8C</li><li${_scopeId}><strong${_scopeId}>\u7ECF\u9500\u5546\u9650\u989D\u5360\u7528</strong>\uFF1A\u9650\u989D\u6A21\u5F0F\u4E0B\u62A5\u9500\u5355\u5360\u7528\u7ECF\u9500\u5546\u9650\u989D(outBxUsedAmt)\uFF0C\u5F71\u54CD\u540C\u7ECF\u9500\u5546\u540E\u7EED\u62A5\u9500</li><li${_scopeId}><strong${_scopeId}>\u9644\u4EF6(OBJ_ATTACH_REL)</strong>\uFF1A\u62A5\u9500\u5355\u5173\u8054\u9644\u4EF6(attachConfId=20250516)\uFF0C\u5305\u62EC\u88C5\u4FEE\u524D/\u540E\u7167\u7247\u3001MBO\u5408\u540C\u7B49</li><li${_scopeId}><strong${_scopeId}>\u5DE5\u4F5C\u6D41\u53D8\u91CF</strong>\uFF1AeventExecute\u66F4\u65B0\u5DE5\u4F5C\u6D41\u53D8\u91CFreSignFlag\u548CoutBxAmt\uFF0C\u5F71\u54CD\u5BA1\u6279\u5206\u652F\u8DEF\u7531</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u95E8\u5934\u5C55\u677F\u5151\u73B0(CUST_DH_CASHOUT_HEAD)"),
              createTextVNode("\uFF1A\u62A5\u9500\u5355\u5BA1\u6279\u901A\u8FC7(APPROVED)\u540E\u53EF\u53D1\u8D77\u95E8\u5934\u5C55\u677F\u5151\u73B0(\u83DC\u535580)\uFF0C\u5151\u73B0\u5355\u901A\u8FC7REIMBURSE_HEAD_ID\u5173\u8054\u62A5\u9500\u5355")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "MBO\u7CFB\u7EDF"),
              createTextVNode("\uFF1A\u5BA1\u6279\u8FC7\u7A0B\u4E2DeventExecute\u5904\u7406SEND_MBO\u4E8B\u4EF6\u65F6\uFF0C\u901A\u8FC7mboFeignClient.advDecAdd\u63A8\u9001\u81F3MBO\u7CFB\u7EDF\uFF0CbillFlag=6\uFF0CreimbursementType=\u95E8\u5934\u62A5\u9500")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u989D\u5EA6\u5916\u9884\u7B97\u5360\u7528"),
              createTextVNode("\uFF1A\u62A5\u9500\u5355\u63D0\u4EA4\u540E\u5360\u7528\u989D\u5EA6\u5916\u9884\u7B97(outBxAmt)\uFF0C\u5F71\u54CD\u540E\u7EED\u62A5\u9500\u5355\u7684\u9884\u7B97\u6821\u9A8C")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u7ECF\u9500\u5546\u9650\u989D\u5360\u7528"),
              createTextVNode("\uFF1A\u9650\u989D\u6A21\u5F0F\u4E0B\u62A5\u9500\u5355\u5360\u7528\u7ECF\u9500\u5546\u9650\u989D(outBxUsedAmt)\uFF0C\u5F71\u54CD\u540C\u7ECF\u9500\u5546\u540E\u7EED\u62A5\u9500")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u9644\u4EF6(OBJ_ATTACH_REL)"),
              createTextVNode("\uFF1A\u62A5\u9500\u5355\u5173\u8054\u9644\u4EF6(attachConfId=20250516)\uFF0C\u5305\u62EC\u88C5\u4FEE\u524D/\u540E\u7167\u7247\u3001MBO\u5408\u540C\u7B49")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u5DE5\u4F5C\u6D41\u53D8\u91CF"),
              createTextVNode("\uFF1AeventExecute\u66F4\u65B0\u5DE5\u4F5C\u6D41\u53D8\u91CFreSignFlag\u548CoutBxAmt\uFF0C\u5F71\u54CD\u5BA1\u6279\u5206\u652F\u8DEF\u7531")
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, { title: "CUST_DH_REIMBURSE_HEAD\uFF08\u95E8\u5934\u62A5\u9500\u7533\u8BF7\u8868\uFF09" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5B57\u6BB5\u540D</th><th${_scopeId}>\u7C7B\u578B</th><th${_scopeId}>\u91CA\u4E49</th><th${_scopeId}>\u5BF9\u5E94\u754C\u9762\u5B57\u6BB5</th><th${_scopeId}>\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>ID</td><td${_scopeId}>Long</td><td${_scopeId}>\u4E3B\u952E</td><td${_scopeId}>id</td><td${_scopeId}>\u81EA\u589E</td></tr><tr${_scopeId}><td${_scopeId}>REIMBURSE_CODE</td><td${_scopeId}>String</td><td${_scopeId}>\u62A5\u9500\u7F16\u7801</td><td${_scopeId}>reimburseCode</td><td${_scopeId}>\u7F16\u7801\u89C4\u5219AE.DH_REIMBURSE_HEAD_NO\u751F\u6210\uFF0C\u524D\u7F00=divisionCode</td></tr><tr${_scopeId}><td${_scopeId}>CUSTOMER_LEGAL_ID</td><td${_scopeId}>Long</td><td${_scopeId}>\u4EA4\u6613\u516C\u53F8\u6CD5\u4EBA\u4E2D\u95F4\u8868ID</td><td${_scopeId}>-</td><td${_scopeId}>getCustLegal\u83B7\u53D6</td></tr><tr${_scopeId}><td${_scopeId}>POLICY_STANDARD_ID</td><td${_scopeId}>Long</td><td${_scopeId}>\u8865\u8D34\u653F\u7B56ID</td><td${_scopeId}>policyStandardId</td><td${_scopeId}>LOV\u9009\u62E9\u653F\u7B56\u65F6\u5E26\u5165</td></tr><tr${_scopeId}><td${_scopeId}>YEAR</td><td${_scopeId}>Long</td><td${_scopeId}>\u5E74\u5EA6</td><td${_scopeId}>year</td><td${_scopeId}>\u65B0\u589E\u65F6\u53D6\u5F53\u524D\u5E74\u4EFD</td></tr><tr${_scopeId}><td${_scopeId}>REMARK</td><td${_scopeId}>String</td><td${_scopeId}>\u5907\u6CE8</td><td${_scopeId}>remark</td><td${_scopeId}>\u7528\u6237\u8F93\u5165</td></tr><tr${_scopeId}><td${_scopeId}>PAY_TYPE</td><td${_scopeId}>Long</td><td${_scopeId}>\u652F\u4ED8\u65B9\u5F0F</td><td${_scopeId}>payType</td><td${_scopeId}>\u7528\u6237\u9009\u62E9\uFF0C\u9ED8\u8BA43(\u7ECF\u9500\u5546\u627F\u62C5)</td></tr><tr${_scopeId}><td${_scopeId}>CUSTOMER_ID</td><td${_scopeId}>Long</td><td${_scopeId}>\u7ECF\u9500\u5546ID</td><td${_scopeId}>customerId</td><td${_scopeId}>LOV\u9009\u62E9\u7ECF\u9500\u5546\u65F6\u5E26\u5165</td></tr><tr${_scopeId}><td${_scopeId}>BX_TYPE</td><td${_scopeId}>Long</td><td${_scopeId}>\u62A5\u9500\u7C7B\u578B(1-\u989D\u5EA6\u5185/2-\u989D\u5EA6\u5916)</td><td${_scopeId}>bxType</td><td${_scopeId}>\u4ECE\u653F\u7B56budgetType\u5E26\u5165</td></tr><tr${_scopeId}><td${_scopeId}>CUST_LIMIT_AMT</td><td${_scopeId}>BigDecimal</td><td${_scopeId}>\u7ECF\u9500\u5546\u9650\u989D</td><td${_scopeId}>custLimitAmt</td><td${_scopeId}>\u63D0\u4EA4\u65F6getCustLimit\u83B7\u53D6</td></tr><tr${_scopeId}><td${_scopeId}>OUT_EXCESS_AMT</td><td${_scopeId}>BigDecimal</td><td${_scopeId}>\u989D\u5EA6\u5916\u8D85\u9650\u91D1\u989D</td><td${_scopeId}>outExcessAmt</td><td${_scopeId}>\u63D0\u4EA4\u65F6\u8BA1\u7B97\uFF0Cmin(\u9650\u989D-\u5DF2\u62A5\u9500-\u8D22\u52A1\u6279\u51C6, 0)</td></tr><tr${_scopeId}><td${_scopeId}>OUT_BX_AMT</td><td${_scopeId}>BigDecimal</td><td${_scopeId}>\u989D\u5EA6\u5916\u5B9E\u9645\u62A5\u9500\u91D1\u989D</td><td${_scopeId}>outBxAmt</td><td${_scopeId}>\u63D0\u4EA4\u65F6\u8BA1\u7B97\uFF0C= \u8D22\u52A1\u6279\u51C6\u603B\u989D(\u989D\u5EA6\u5916) + \u8D85\u9650\u91D1\u989D</td></tr><tr${_scopeId}><td${_scopeId}>IN_BX_AMT</td><td${_scopeId}>BigDecimal</td><td${_scopeId}>\u989D\u5EA6\u5185\u5B9E\u9645\u62A5\u9500\u91D1\u989D</td><td${_scopeId}>inBxAmt</td><td${_scopeId}>\u63D0\u4EA4\u65F6\u8BA1\u7B97\uFF0C\u6839\u636E\u8D85\u9650\u5904\u7406\u7B56\u7565</td></tr><tr${_scopeId}><td${_scopeId}>OUT_ACTUAL_APPLY_AMT</td><td${_scopeId}>BigDecimal</td><td${_scopeId}>\u989D\u5EA6\u5916\u5B9E\u9645\u7533\u8BF7\u603B\u989D</td><td${_scopeId}>outActualApplyAmt</td><td${_scopeId}>\u63D0\u4EA4\u65F6\u8BA1\u7B97\uFF0C\u884C\u8868\u989D\u5EA6\u5916\u7533\u8BF7\u91D1\u989D\u6C47\u603B</td></tr><tr${_scopeId}><td${_scopeId}>IN_ACTUAL_APPLY_AMT</td><td${_scopeId}>BigDecimal</td><td${_scopeId}>\u989D\u5EA6\u5185\u5B9E\u9645\u7533\u8BF7\u91D1\u989D</td><td${_scopeId}>inActualApplyAmt</td><td${_scopeId}>\u63D0\u4EA4\u65F6\u8BA1\u7B97\uFF0C\u884C\u8868\u989D\u5EA6\u5185\u7533\u8BF7\u91D1\u989D\u6C47\u603B</td></tr><tr${_scopeId}><td${_scopeId}>OUT_BX_USED_AMT</td><td${_scopeId}>BigDecimal</td><td${_scopeId}>\u989D\u5EA6\u5916\u5DF2\u62A5\u9500\u91D1\u989D</td><td${_scopeId}>outBxUsedAmt</td><td${_scopeId}>\u63D0\u4EA4\u65F6\u8BA1\u7B97\uFF0C\u540C\u7ECF\u9500\u5546+\u653F\u7B56\u7684\u5DF2\u62A5\u9500\u91D1\u989D</td></tr><tr${_scopeId}><td${_scopeId}>TRADING_COMPANY_CODE</td><td${_scopeId}>String</td><td${_scopeId}>\u4EA4\u6613\u516C\u53F8\u7F16\u7801</td><td${_scopeId}>tradingCompanyCode</td><td${_scopeId}>getCustLegal\u83B7\u53D6</td></tr><tr${_scopeId}><td${_scopeId}>IN_EARLY_CASHOUT_RATIO</td><td${_scopeId}>BigDecimal</td><td${_scopeId}>\u989D\u5EA6\u5185\u63D0\u524D\u5151\u73B0\u6BD4\u4F8B</td><td${_scopeId}>inEarlyCashoutRatio</td><td${_scopeId}>\u65B0\u589E\u65F6\u9ED8\u8BA40\uFF0C\u533A\u57DF\u7ECF\u7406\u5BA1\u6279\u8282\u70B9\u53EF\u4FEE\u6539(earlyEncashmentFlag=Y\u65F6)</td></tr><tr${_scopeId}><td${_scopeId}>SIGNATURE_STATE</td><td${_scopeId}>Long</td><td${_scopeId}>\u7535\u5B50\u7B7E\u7AE0\u72B6\u6001</td><td${_scopeId}>-</td><td${_scopeId}>\u7B7E\u7AE0\u670D\u52A1\u7EF4\u62A4</td></tr><tr${_scopeId}><td${_scopeId}>SIGNATURE_URL</td><td${_scopeId}>String</td><td${_scopeId}>\u7535\u5B50\u7B7E\u7AE0\u5730\u5740</td><td${_scopeId}>-</td><td${_scopeId}>\u7B7E\u7AE0\u670D\u52A1\u7EF4\u62A4</td></tr><tr${_scopeId}><td${_scopeId}>RE_SIGN_FLAG</td><td${_scopeId}>String</td><td${_scopeId}>\u9700\u91CD\u7B7E\u6807\u8BC6(Y/N)</td><td${_scopeId}>reSignFlag</td><td${_scopeId}>\u9ED8\u8BA4N\uFF0CeventExecute\u65F6\u6839\u636EMBO\u5408\u540C\u9644\u4EF6\u5224\u65AD</td></tr><tr${_scopeId}><td${_scopeId}>ENTID</td><td${_scopeId}>Long</td><td${_scopeId}>\u4E8B\u4E1A\u90E8ID</td><td${_scopeId}>-</td><td${_scopeId}>\u4ECE\u7528\u6237\u4E0A\u4E0B\u6587\u83B7\u53D6(divisionBaseSet)</td></tr><tr${_scopeId}><td${_scopeId}>DIVISION_ID</td><td${_scopeId}>Long</td><td${_scopeId}>\u4E8B\u4E1A\u90E8\u8BCD\u6C47\u503C</td><td${_scopeId}>-</td><td${_scopeId}>\u4ECE\u7528\u6237\u4E0A\u4E0B\u6587\u83B7\u53D6(divisionBaseSet)</td></tr><tr${_scopeId}><td${_scopeId}>HZ_INSTANCE_ID</td><td${_scopeId}>Long</td><td${_scopeId}>H0\u6D41\u7A0B\u5B9E\u4F8BID</td><td${_scopeId}>hzInstanceId</td><td${_scopeId}>\u5DE5\u4F5C\u6D41\u542F\u52A8\u540E\u56DE\u586B</td></tr><tr${_scopeId}><td${_scopeId}>HZ_APPROVE_STATUS</td><td${_scopeId}>String</td><td${_scopeId}>H0\u6D41\u7A0B\u5BA1\u6279\u72B6\u6001(\u5FC5\u586B)</td><td${_scopeId}>hzApproveStatus</td><td${_scopeId}>NEW\u2192RUN\u2192APPROVED/REBUT</td></tr><tr${_scopeId}><td${_scopeId}>CREATION_DATE</td><td${_scopeId}>LocalDateTime</td><td${_scopeId}>\u521B\u5EFA\u65F6\u95F4</td><td${_scopeId}>creationDate</td><td${_scopeId}>\u7CFB\u7EDF\u81EA\u52A8</td></tr><tr${_scopeId}><td${_scopeId}>CREATED_BY</td><td${_scopeId}>Long</td><td${_scopeId}>\u521B\u5EFA\u4EBAID</td><td${_scopeId}>-</td><td${_scopeId}>\u7CFB\u7EDF\u81EA\u52A8</td></tr><tr${_scopeId}><td${_scopeId}>LAST_UPDATE_DATE</td><td${_scopeId}>LocalDateTime</td><td${_scopeId}>\u6700\u540E\u66F4\u65B0\u65F6\u95F4</td><td${_scopeId}>-</td><td${_scopeId}>\u7CFB\u7EDF\u81EA\u52A8</td></tr><tr${_scopeId}><td${_scopeId}>LAST_UPDATED_BY</td><td${_scopeId}>Long</td><td${_scopeId}>\u6700\u540E\u66F4\u65B0\u4EBAID</td><td${_scopeId}>-</td><td${_scopeId}>\u7CFB\u7EDF\u81EA\u52A8</td></tr><tr${_scopeId}><td${_scopeId}>OBJECT_VERSION_NUMBER</td><td${_scopeId}>Long</td><td${_scopeId}>\u5BF9\u8C61\u7248\u672C\u53F7</td><td${_scopeId}>-</td><td${_scopeId}>\u7CFB\u7EDF\u81EA\u52A8\uFF0C\u4E50\u89C2\u9501</td></tr></tbody></table>`);
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
                createVNode("td", null, "Long"),
                createVNode("td", null, "\u4E3B\u952E"),
                createVNode("td", null, "id"),
                createVNode("td", null, "\u81EA\u589E")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "REIMBURSE_CODE"),
                createVNode("td", null, "String"),
                createVNode("td", null, "\u62A5\u9500\u7F16\u7801"),
                createVNode("td", null, "reimburseCode"),
                createVNode("td", null, "\u7F16\u7801\u89C4\u5219AE.DH_REIMBURSE_HEAD_NO\u751F\u6210\uFF0C\u524D\u7F00=divisionCode")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "CUSTOMER_LEGAL_ID"),
                createVNode("td", null, "Long"),
                createVNode("td", null, "\u4EA4\u6613\u516C\u53F8\u6CD5\u4EBA\u4E2D\u95F4\u8868ID"),
                createVNode("td", null, "-"),
                createVNode("td", null, "getCustLegal\u83B7\u53D6")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "POLICY_STANDARD_ID"),
                createVNode("td", null, "Long"),
                createVNode("td", null, "\u8865\u8D34\u653F\u7B56ID"),
                createVNode("td", null, "policyStandardId"),
                createVNode("td", null, "LOV\u9009\u62E9\u653F\u7B56\u65F6\u5E26\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "YEAR"),
                createVNode("td", null, "Long"),
                createVNode("td", null, "\u5E74\u5EA6"),
                createVNode("td", null, "year"),
                createVNode("td", null, "\u65B0\u589E\u65F6\u53D6\u5F53\u524D\u5E74\u4EFD")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "REMARK"),
                createVNode("td", null, "String"),
                createVNode("td", null, "\u5907\u6CE8"),
                createVNode("td", null, "remark"),
                createVNode("td", null, "\u7528\u6237\u8F93\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "PAY_TYPE"),
                createVNode("td", null, "Long"),
                createVNode("td", null, "\u652F\u4ED8\u65B9\u5F0F"),
                createVNode("td", null, "payType"),
                createVNode("td", null, "\u7528\u6237\u9009\u62E9\uFF0C\u9ED8\u8BA43(\u7ECF\u9500\u5546\u627F\u62C5)")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "CUSTOMER_ID"),
                createVNode("td", null, "Long"),
                createVNode("td", null, "\u7ECF\u9500\u5546ID"),
                createVNode("td", null, "customerId"),
                createVNode("td", null, "LOV\u9009\u62E9\u7ECF\u9500\u5546\u65F6\u5E26\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "BX_TYPE"),
                createVNode("td", null, "Long"),
                createVNode("td", null, "\u62A5\u9500\u7C7B\u578B(1-\u989D\u5EA6\u5185/2-\u989D\u5EA6\u5916)"),
                createVNode("td", null, "bxType"),
                createVNode("td", null, "\u4ECE\u653F\u7B56budgetType\u5E26\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "CUST_LIMIT_AMT"),
                createVNode("td", null, "BigDecimal"),
                createVNode("td", null, "\u7ECF\u9500\u5546\u9650\u989D"),
                createVNode("td", null, "custLimitAmt"),
                createVNode("td", null, "\u63D0\u4EA4\u65F6getCustLimit\u83B7\u53D6")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "OUT_EXCESS_AMT"),
                createVNode("td", null, "BigDecimal"),
                createVNode("td", null, "\u989D\u5EA6\u5916\u8D85\u9650\u91D1\u989D"),
                createVNode("td", null, "outExcessAmt"),
                createVNode("td", null, "\u63D0\u4EA4\u65F6\u8BA1\u7B97\uFF0Cmin(\u9650\u989D-\u5DF2\u62A5\u9500-\u8D22\u52A1\u6279\u51C6, 0)")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "OUT_BX_AMT"),
                createVNode("td", null, "BigDecimal"),
                createVNode("td", null, "\u989D\u5EA6\u5916\u5B9E\u9645\u62A5\u9500\u91D1\u989D"),
                createVNode("td", null, "outBxAmt"),
                createVNode("td", null, "\u63D0\u4EA4\u65F6\u8BA1\u7B97\uFF0C= \u8D22\u52A1\u6279\u51C6\u603B\u989D(\u989D\u5EA6\u5916) + \u8D85\u9650\u91D1\u989D")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "IN_BX_AMT"),
                createVNode("td", null, "BigDecimal"),
                createVNode("td", null, "\u989D\u5EA6\u5185\u5B9E\u9645\u62A5\u9500\u91D1\u989D"),
                createVNode("td", null, "inBxAmt"),
                createVNode("td", null, "\u63D0\u4EA4\u65F6\u8BA1\u7B97\uFF0C\u6839\u636E\u8D85\u9650\u5904\u7406\u7B56\u7565")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "OUT_ACTUAL_APPLY_AMT"),
                createVNode("td", null, "BigDecimal"),
                createVNode("td", null, "\u989D\u5EA6\u5916\u5B9E\u9645\u7533\u8BF7\u603B\u989D"),
                createVNode("td", null, "outActualApplyAmt"),
                createVNode("td", null, "\u63D0\u4EA4\u65F6\u8BA1\u7B97\uFF0C\u884C\u8868\u989D\u5EA6\u5916\u7533\u8BF7\u91D1\u989D\u6C47\u603B")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "IN_ACTUAL_APPLY_AMT"),
                createVNode("td", null, "BigDecimal"),
                createVNode("td", null, "\u989D\u5EA6\u5185\u5B9E\u9645\u7533\u8BF7\u91D1\u989D"),
                createVNode("td", null, "inActualApplyAmt"),
                createVNode("td", null, "\u63D0\u4EA4\u65F6\u8BA1\u7B97\uFF0C\u884C\u8868\u989D\u5EA6\u5185\u7533\u8BF7\u91D1\u989D\u6C47\u603B")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "OUT_BX_USED_AMT"),
                createVNode("td", null, "BigDecimal"),
                createVNode("td", null, "\u989D\u5EA6\u5916\u5DF2\u62A5\u9500\u91D1\u989D"),
                createVNode("td", null, "outBxUsedAmt"),
                createVNode("td", null, "\u63D0\u4EA4\u65F6\u8BA1\u7B97\uFF0C\u540C\u7ECF\u9500\u5546+\u653F\u7B56\u7684\u5DF2\u62A5\u9500\u91D1\u989D")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "TRADING_COMPANY_CODE"),
                createVNode("td", null, "String"),
                createVNode("td", null, "\u4EA4\u6613\u516C\u53F8\u7F16\u7801"),
                createVNode("td", null, "tradingCompanyCode"),
                createVNode("td", null, "getCustLegal\u83B7\u53D6")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "IN_EARLY_CASHOUT_RATIO"),
                createVNode("td", null, "BigDecimal"),
                createVNode("td", null, "\u989D\u5EA6\u5185\u63D0\u524D\u5151\u73B0\u6BD4\u4F8B"),
                createVNode("td", null, "inEarlyCashoutRatio"),
                createVNode("td", null, "\u65B0\u589E\u65F6\u9ED8\u8BA40\uFF0C\u533A\u57DF\u7ECF\u7406\u5BA1\u6279\u8282\u70B9\u53EF\u4FEE\u6539(earlyEncashmentFlag=Y\u65F6)")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "SIGNATURE_STATE"),
                createVNode("td", null, "Long"),
                createVNode("td", null, "\u7535\u5B50\u7B7E\u7AE0\u72B6\u6001"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u7B7E\u7AE0\u670D\u52A1\u7EF4\u62A4")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "SIGNATURE_URL"),
                createVNode("td", null, "String"),
                createVNode("td", null, "\u7535\u5B50\u7B7E\u7AE0\u5730\u5740"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u7B7E\u7AE0\u670D\u52A1\u7EF4\u62A4")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "RE_SIGN_FLAG"),
                createVNode("td", null, "String"),
                createVNode("td", null, "\u9700\u91CD\u7B7E\u6807\u8BC6(Y/N)"),
                createVNode("td", null, "reSignFlag"),
                createVNode("td", null, "\u9ED8\u8BA4N\uFF0CeventExecute\u65F6\u6839\u636EMBO\u5408\u540C\u9644\u4EF6\u5224\u65AD")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "ENTID"),
                createVNode("td", null, "Long"),
                createVNode("td", null, "\u4E8B\u4E1A\u90E8ID"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u4ECE\u7528\u6237\u4E0A\u4E0B\u6587\u83B7\u53D6(divisionBaseSet)")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "DIVISION_ID"),
                createVNode("td", null, "Long"),
                createVNode("td", null, "\u4E8B\u4E1A\u90E8\u8BCD\u6C47\u503C"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u4ECE\u7528\u6237\u4E0A\u4E0B\u6587\u83B7\u53D6(divisionBaseSet)")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "HZ_INSTANCE_ID"),
                createVNode("td", null, "Long"),
                createVNode("td", null, "H0\u6D41\u7A0B\u5B9E\u4F8BID"),
                createVNode("td", null, "hzInstanceId"),
                createVNode("td", null, "\u5DE5\u4F5C\u6D41\u542F\u52A8\u540E\u56DE\u586B")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "HZ_APPROVE_STATUS"),
                createVNode("td", null, "String"),
                createVNode("td", null, "H0\u6D41\u7A0B\u5BA1\u6279\u72B6\u6001(\u5FC5\u586B)"),
                createVNode("td", null, "hzApproveStatus"),
                createVNode("td", null, "NEW\u2192RUN\u2192APPROVED/REBUT")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "CREATION_DATE"),
                createVNode("td", null, "LocalDateTime"),
                createVNode("td", null, "\u521B\u5EFA\u65F6\u95F4"),
                createVNode("td", null, "creationDate"),
                createVNode("td", null, "\u7CFB\u7EDF\u81EA\u52A8")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "CREATED_BY"),
                createVNode("td", null, "Long"),
                createVNode("td", null, "\u521B\u5EFA\u4EBAID"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u7CFB\u7EDF\u81EA\u52A8")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "LAST_UPDATE_DATE"),
                createVNode("td", null, "LocalDateTime"),
                createVNode("td", null, "\u6700\u540E\u66F4\u65B0\u65F6\u95F4"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u7CFB\u7EDF\u81EA\u52A8")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "LAST_UPDATED_BY"),
                createVNode("td", null, "Long"),
                createVNode("td", null, "\u6700\u540E\u66F4\u65B0\u4EBAID"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u7CFB\u7EDF\u81EA\u52A8")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "OBJECT_VERSION_NUMBER"),
                createVNode("td", null, "Long"),
                createVNode("td", null, "\u5BF9\u8C61\u7248\u672C\u53F7"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u7CFB\u7EDF\u81EA\u52A8\uFF0C\u4E50\u89C2\u9501")
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, { title: "CUST_DH_REIMBURSE_LINE\uFF08\u95E8\u5934\u62A5\u9500\u884C\u8868\uFF09" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5B57\u6BB5\u540D</th><th${_scopeId}>\u7C7B\u578B</th><th${_scopeId}>\u91CA\u4E49</th><th${_scopeId}>\u5BF9\u5E94\u754C\u9762\u5B57\u6BB5</th><th${_scopeId}>\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>ID</td><td${_scopeId}>Long</td><td${_scopeId}>\u4E3B\u952E</td><td${_scopeId}>id</td><td${_scopeId}>\u81EA\u589E</td></tr><tr${_scopeId}><td${_scopeId}>HEAD_ID</td><td${_scopeId}>Long</td><td${_scopeId}>\u62A5\u9500\u5355ID</td><td${_scopeId}>-</td><td${_scopeId}>\u5173\u8054CUST_DH_REIMBURSE_HEAD.ID</td></tr><tr${_scopeId}><td${_scopeId}>TERMINAL_ID</td><td${_scopeId}>Long</td><td${_scopeId}>\u95E8\u5E97ID</td><td${_scopeId}>terminalId</td><td${_scopeId}>LOV\u9009\u62E9\u95E8\u5E97\u65F6\u5E26\u5165</td></tr><tr${_scopeId}><td${_scopeId}>DECORATE_PROJECT</td><td${_scopeId}>String</td><td${_scopeId}>\u88C5\u4FEE\u9879\u76EE</td><td${_scopeId}>decorateProject</td><td${_scopeId}>LOV\u9009\u62E9\u8865\u8D34\u9879\u76EE\u65F6\u5E26\u5165</td></tr><tr${_scopeId}><td${_scopeId}>APPLY_NUM</td><td${_scopeId}>BigDecimal</td><td${_scopeId}>\u6570\u91CF</td><td${_scopeId}>applyNum</td><td${_scopeId}>\u7528\u6237\u8F93\u5165\uFF0C\u6821\u9A8C\u8303\u56F4</td></tr><tr${_scopeId}><td${_scopeId}>IN_APPLY_AMT</td><td${_scopeId}>BigDecimal</td><td${_scopeId}>\u989D\u5EA6\u5185\u7533\u8BF7\u91D1\u989D</td><td${_scopeId}>inApplyAmt</td><td${_scopeId}>\u7528\u6237\u8F93\u5165</td></tr><tr${_scopeId}><td${_scopeId}>OUT_APPLY_AMT</td><td${_scopeId}>BigDecimal</td><td${_scopeId}>\u989D\u5EA6\u5916\u7533\u8BF7\u91D1\u989D</td><td${_scopeId}>outApplyAmt</td><td${_scopeId}>\u7528\u6237\u8F93\u5165</td></tr><tr${_scopeId}><td${_scopeId}>IN_BIZ_AMT</td><td${_scopeId}>BigDecimal</td><td${_scopeId}>\u989D\u5EA6\u5185\u4E1A\u52A1\u6279\u51C6\u91D1\u989D</td><td${_scopeId}>inBizAmt</td><td${_scopeId}>\u533A\u57DF\u7ECF\u7406\u5BA1\u6279\u8282\u70B9\u586B\u5199\uFF0C\u65B0\u589E\u65F6=\u7533\u8BF7\u91D1\u989D</td></tr><tr${_scopeId}><td${_scopeId}>OUT_BIZ_AMT</td><td${_scopeId}>BigDecimal</td><td${_scopeId}>\u989D\u5EA6\u5916\u4E1A\u52A1\u6279\u51C6\u91D1\u989D</td><td${_scopeId}>outBizAmt</td><td${_scopeId}>\u533A\u57DF\u7ECF\u7406\u5BA1\u6279\u8282\u70B9\u586B\u5199\uFF0C\u65B0\u589E\u65F6=\u7533\u8BF7\u91D1\u989D</td></tr><tr${_scopeId}><td${_scopeId}>IN_FIN_AMT</td><td${_scopeId}>BigDecimal</td><td${_scopeId}>\u989D\u5EA6\u5185\u8D22\u52A1\u6279\u51C6\u91D1\u989D</td><td${_scopeId}>inFinAmt</td><td${_scopeId}>\u9500\u552E\u4F1A\u8BA1\u5BA1\u6279\u8282\u70B9\u586B\u5199\uFF0C\u65B0\u589E\u65F6=\u7533\u8BF7\u91D1\u989D</td></tr><tr${_scopeId}><td${_scopeId}>OUT_FIN_AMT</td><td${_scopeId}>BigDecimal</td><td${_scopeId}>\u989D\u5EA6\u5916\u8D22\u52A1\u6279\u51C6\u91D1\u989D</td><td${_scopeId}>outFinAmt</td><td${_scopeId}>\u9500\u552E\u4F1A\u8BA1\u5BA1\u6279\u8282\u70B9\u586B\u5199\uFF0C\u65B0\u589E\u65F6=\u7533\u8BF7\u91D1\u989D</td></tr><tr${_scopeId}><td${_scopeId}>LINE_REMARK</td><td${_scopeId}>String</td><td${_scopeId}>\u5907\u6CE8</td><td${_scopeId}>lineRemark</td><td${_scopeId}>\u7528\u6237\u8F93\u5165</td></tr><tr${_scopeId}><td${_scopeId}>BEFORE_DOC_ID</td><td${_scopeId}>String</td><td${_scopeId}>\u88C5\u4FEE\u524D\u7167\u7247\u9644\u4EF6UUID</td><td${_scopeId}>beforeDocId</td><td${_scopeId}>\u4E0A\u4F20\u9644\u4EF6\u83B7\u53D6</td></tr><tr${_scopeId}><td${_scopeId}>BEFORE_DOC_NAME</td><td${_scopeId}>String</td><td${_scopeId}>\u88C5\u4FEE\u524D\u7167\u7247\u6587\u4EF6\u540D</td><td${_scopeId}>beforeDocName</td><td${_scopeId}>\u4E0A\u4F20\u9644\u4EF6\u83B7\u53D6</td></tr><tr${_scopeId}><td${_scopeId}>AFTER_DOC_ID</td><td${_scopeId}>String</td><td${_scopeId}>\u88C5\u4FEE\u540E\u7167\u7247\u9644\u4EF6UUID</td><td${_scopeId}>afterDocId</td><td${_scopeId}>\u4E0A\u4F20\u9644\u4EF6\u83B7\u53D6</td></tr><tr${_scopeId}><td${_scopeId}>AFTER_DOC_NAME</td><td${_scopeId}>String</td><td${_scopeId}>\u88C5\u4FEE\u540E\u7167\u7247\u6587\u4EF6\u540D</td><td${_scopeId}>afterDocName</td><td${_scopeId}>\u4E0A\u4F20\u9644\u4EF6\u83B7\u53D6</td></tr><tr${_scopeId}><td${_scopeId}>STANDARD_GRADE</td><td${_scopeId}>String</td><td${_scopeId}>\u6807\u51C6\u7B49\u7EA7</td><td${_scopeId}>standardGrade</td><td${_scopeId}>\u4ECE\u653F\u7B56\u884C\u8868\u5E26\u5165</td></tr><tr${_scopeId}><td${_scopeId}>UNIT_TYPE</td><td${_scopeId}>String</td><td${_scopeId}>\u5355\u4F4D\u7C7B\u578B</td><td${_scopeId}>unitType</td><td${_scopeId}>\u4ECE\u653F\u7B56\u884C\u8868\u5E26\u5165</td></tr><tr${_scopeId}><td${_scopeId}>IN_STANDARD_AMT</td><td${_scopeId}>BigDecimal</td><td${_scopeId}>\u989D\u5EA6\u5185\u6807\u51C6\u91D1\u989D</td><td${_scopeId}>inStandardAmt</td><td${_scopeId}>= \u6807\u51C6\u5355\u4EF7 \xD7 \u6570\u91CF</td></tr><tr${_scopeId}><td${_scopeId}>OUT_STANDARD_AMT</td><td${_scopeId}>BigDecimal</td><td${_scopeId}>\u989D\u5EA6\u5916\u6807\u51C6\u91D1\u989D</td><td${_scopeId}>outStandardAmt</td><td${_scopeId}>= \u6807\u51C6\u5355\u4EF7 \xD7 \u6570\u91CF</td></tr><tr${_scopeId}><td${_scopeId}>POLICY_LINE_ID</td><td${_scopeId}>Long</td><td${_scopeId}>\u653F\u7B56\u884CID</td><td${_scopeId}>policyLineId</td><td${_scopeId}>\u5173\u8054POLICY_STANDARD_LINE.ID</td></tr></tbody></table>`);
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
                createVNode("td", null, "Long"),
                createVNode("td", null, "\u4E3B\u952E"),
                createVNode("td", null, "id"),
                createVNode("td", null, "\u81EA\u589E")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "HEAD_ID"),
                createVNode("td", null, "Long"),
                createVNode("td", null, "\u62A5\u9500\u5355ID"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u5173\u8054CUST_DH_REIMBURSE_HEAD.ID")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "TERMINAL_ID"),
                createVNode("td", null, "Long"),
                createVNode("td", null, "\u95E8\u5E97ID"),
                createVNode("td", null, "terminalId"),
                createVNode("td", null, "LOV\u9009\u62E9\u95E8\u5E97\u65F6\u5E26\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "DECORATE_PROJECT"),
                createVNode("td", null, "String"),
                createVNode("td", null, "\u88C5\u4FEE\u9879\u76EE"),
                createVNode("td", null, "decorateProject"),
                createVNode("td", null, "LOV\u9009\u62E9\u8865\u8D34\u9879\u76EE\u65F6\u5E26\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "APPLY_NUM"),
                createVNode("td", null, "BigDecimal"),
                createVNode("td", null, "\u6570\u91CF"),
                createVNode("td", null, "applyNum"),
                createVNode("td", null, "\u7528\u6237\u8F93\u5165\uFF0C\u6821\u9A8C\u8303\u56F4")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "IN_APPLY_AMT"),
                createVNode("td", null, "BigDecimal"),
                createVNode("td", null, "\u989D\u5EA6\u5185\u7533\u8BF7\u91D1\u989D"),
                createVNode("td", null, "inApplyAmt"),
                createVNode("td", null, "\u7528\u6237\u8F93\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "OUT_APPLY_AMT"),
                createVNode("td", null, "BigDecimal"),
                createVNode("td", null, "\u989D\u5EA6\u5916\u7533\u8BF7\u91D1\u989D"),
                createVNode("td", null, "outApplyAmt"),
                createVNode("td", null, "\u7528\u6237\u8F93\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "IN_BIZ_AMT"),
                createVNode("td", null, "BigDecimal"),
                createVNode("td", null, "\u989D\u5EA6\u5185\u4E1A\u52A1\u6279\u51C6\u91D1\u989D"),
                createVNode("td", null, "inBizAmt"),
                createVNode("td", null, "\u533A\u57DF\u7ECF\u7406\u5BA1\u6279\u8282\u70B9\u586B\u5199\uFF0C\u65B0\u589E\u65F6=\u7533\u8BF7\u91D1\u989D")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "OUT_BIZ_AMT"),
                createVNode("td", null, "BigDecimal"),
                createVNode("td", null, "\u989D\u5EA6\u5916\u4E1A\u52A1\u6279\u51C6\u91D1\u989D"),
                createVNode("td", null, "outBizAmt"),
                createVNode("td", null, "\u533A\u57DF\u7ECF\u7406\u5BA1\u6279\u8282\u70B9\u586B\u5199\uFF0C\u65B0\u589E\u65F6=\u7533\u8BF7\u91D1\u989D")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "IN_FIN_AMT"),
                createVNode("td", null, "BigDecimal"),
                createVNode("td", null, "\u989D\u5EA6\u5185\u8D22\u52A1\u6279\u51C6\u91D1\u989D"),
                createVNode("td", null, "inFinAmt"),
                createVNode("td", null, "\u9500\u552E\u4F1A\u8BA1\u5BA1\u6279\u8282\u70B9\u586B\u5199\uFF0C\u65B0\u589E\u65F6=\u7533\u8BF7\u91D1\u989D")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "OUT_FIN_AMT"),
                createVNode("td", null, "BigDecimal"),
                createVNode("td", null, "\u989D\u5EA6\u5916\u8D22\u52A1\u6279\u51C6\u91D1\u989D"),
                createVNode("td", null, "outFinAmt"),
                createVNode("td", null, "\u9500\u552E\u4F1A\u8BA1\u5BA1\u6279\u8282\u70B9\u586B\u5199\uFF0C\u65B0\u589E\u65F6=\u7533\u8BF7\u91D1\u989D")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "LINE_REMARK"),
                createVNode("td", null, "String"),
                createVNode("td", null, "\u5907\u6CE8"),
                createVNode("td", null, "lineRemark"),
                createVNode("td", null, "\u7528\u6237\u8F93\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "BEFORE_DOC_ID"),
                createVNode("td", null, "String"),
                createVNode("td", null, "\u88C5\u4FEE\u524D\u7167\u7247\u9644\u4EF6UUID"),
                createVNode("td", null, "beforeDocId"),
                createVNode("td", null, "\u4E0A\u4F20\u9644\u4EF6\u83B7\u53D6")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "BEFORE_DOC_NAME"),
                createVNode("td", null, "String"),
                createVNode("td", null, "\u88C5\u4FEE\u524D\u7167\u7247\u6587\u4EF6\u540D"),
                createVNode("td", null, "beforeDocName"),
                createVNode("td", null, "\u4E0A\u4F20\u9644\u4EF6\u83B7\u53D6")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "AFTER_DOC_ID"),
                createVNode("td", null, "String"),
                createVNode("td", null, "\u88C5\u4FEE\u540E\u7167\u7247\u9644\u4EF6UUID"),
                createVNode("td", null, "afterDocId"),
                createVNode("td", null, "\u4E0A\u4F20\u9644\u4EF6\u83B7\u53D6")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "AFTER_DOC_NAME"),
                createVNode("td", null, "String"),
                createVNode("td", null, "\u88C5\u4FEE\u540E\u7167\u7247\u6587\u4EF6\u540D"),
                createVNode("td", null, "afterDocName"),
                createVNode("td", null, "\u4E0A\u4F20\u9644\u4EF6\u83B7\u53D6")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "STANDARD_GRADE"),
                createVNode("td", null, "String"),
                createVNode("td", null, "\u6807\u51C6\u7B49\u7EA7"),
                createVNode("td", null, "standardGrade"),
                createVNode("td", null, "\u4ECE\u653F\u7B56\u884C\u8868\u5E26\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "UNIT_TYPE"),
                createVNode("td", null, "String"),
                createVNode("td", null, "\u5355\u4F4D\u7C7B\u578B"),
                createVNode("td", null, "unitType"),
                createVNode("td", null, "\u4ECE\u653F\u7B56\u884C\u8868\u5E26\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "IN_STANDARD_AMT"),
                createVNode("td", null, "BigDecimal"),
                createVNode("td", null, "\u989D\u5EA6\u5185\u6807\u51C6\u91D1\u989D"),
                createVNode("td", null, "inStandardAmt"),
                createVNode("td", null, "= \u6807\u51C6\u5355\u4EF7 \xD7 \u6570\u91CF")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "OUT_STANDARD_AMT"),
                createVNode("td", null, "BigDecimal"),
                createVNode("td", null, "\u989D\u5EA6\u5916\u6807\u51C6\u91D1\u989D"),
                createVNode("td", null, "outStandardAmt"),
                createVNode("td", null, "= \u6807\u51C6\u5355\u4EF7 \xD7 \u6570\u91CF")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "POLICY_LINE_ID"),
                createVNode("td", null, "Long"),
                createVNode("td", null, "\u653F\u7B56\u884CID"),
                createVNode("td", null, "policyLineId"),
                createVNode("td", null, "\u5173\u8054POLICY_STANDARD_LINE.ID")
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, { title: "\u62A5\u9519\u4E00\u89C8\u8868" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u62A5\u9519\u4FE1\u606F</th><th${_scopeId}>\u63D0\u793A\u8282\u70B9</th><th${_scopeId}>\u6839\u56E0\u4E0E\u89E3\u51B3\u65B9\u6848</th><th${_scopeId}>\u7B49\u7EA7</th><th${_scopeId}>\u8BE6\u7EC6\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u62A5\u9500\u653F\u7B56\u4E0D\u80FD\u4E3A\u7A7A</td><td${_scopeId}>\u4FDD\u5B58</td><td${_scopeId}>\u672A\u9009\u62E9\u8865\u8D34\u653F\u7B56\u3002\u9009\u62E9\u6709\u6548\u7684\u5E97\u9762\u5EFA\u8BBE\u8865\u8D34\u653F\u7B56</td><td${_scopeId}>\u9AD8</td><td${_scopeId}>[\u67E5\u770B](#\u62A5\u95191\u62A5\u9500\u653F\u7B56\u4E0D\u80FD\u4E3A\u7A7A)</td></tr><tr${_scopeId}><td${_scopeId}>\u62A5\u9500\u653F\u7B56\u5DF2\u5931\u6548\uFF0C\u8BF7\u91CD\u65B0\u9009\u62E9\u6709\u6548\u62A5\u9500\u653F\u7B56</td><td${_scopeId}>\u4FDD\u5B58</td><td${_scopeId}>\u653F\u7B56valid!=2\u3002\u9009\u62E9\u6709\u6548\u7684\u653F\u7B56</td><td${_scopeId}>\u9AD8</td><td${_scopeId}>[\u67E5\u770B](#\u62A5\u95192\u62A5\u9500\u653F\u7B56\u5DF2\u5931\u6548\u8BF7\u91CD\u65B0\u9009\u62E9\u6709\u6548\u62A5\u9500\u653F\u7B56)</td></tr><tr${_scopeId}><td${_scopeId}>\u7ECF\u9500\u5546\u6CD5\u4EBA\u4E0D\u80FD\u4E3A\u7A7A</td><td${_scopeId}>\u4FDD\u5B58</td><td${_scopeId}>\u672A\u9009\u62E9\u7ECF\u9500\u5546\u6216\u6CD5\u4EBA\u3002\u9009\u62E9\u7ECF\u9500\u5546\u3001\u4EA4\u6613\u516C\u53F8\u3001\u6CD5\u4EBA\u5BA2\u6237</td><td${_scopeId}>\u9AD8</td><td${_scopeId}>[\u67E5\u770B](#\u62A5\u95193\u7ECF\u9500\u5546\u6CD5\u4EBA\u4E0D\u80FD\u4E3A\u7A7A)</td></tr><tr${_scopeId}><td${_scopeId}>\u62A5\u9500\u653F\u7B56\u5DF2\u8FC7\u671F\uFF0C\u8BF7\u91CD\u65B0\u9009\u62E9\u6709\u6548\u62A5\u9500\u653F\u7B56</td><td${_scopeId}>\u4FDD\u5B58</td><td${_scopeId}>\u653F\u7B56\u4E0D\u5728\u6709\u6548\u671F\u5185\u3002\u9009\u62E9\u6709\u6548\u671F\u5185\u7684\u653F\u7B56</td><td${_scopeId}>\u9AD8</td><td${_scopeId}>[\u67E5\u770B](#\u62A5\u95194\u62A5\u9500\u653F\u7B56\u5DF2\u8FC7\u671F\u8BF7\u91CD\u65B0\u9009\u62E9\u6709\u6548\u62A5\u9500\u653F\u7B56)</td></tr><tr${_scopeId}><td${_scopeId}>\u8BF7\u9009\u62E9\u62A5\u9500\u7C7B\u578B</td><td${_scopeId}>\u4FDD\u5B58</td><td${_scopeId}>\u672A\u9009\u62E9\u62A5\u9500\u7C7B\u578B\u3002\u9009\u62E9\u989D\u5EA6\u5185\u6216\u989D\u5EA6\u5916</td><td${_scopeId}>\u4E2D</td><td${_scopeId}>[\u67E5\u770B](#\u62A5\u95195\u8BF7\u9009\u62E9\u62A5\u9500\u7C7B\u578B)</td></tr><tr${_scopeId}><td${_scopeId}>\u62A5\u9500\u660E\u7EC6\u4E0D\u80FD\u4E3A\u7A7A</td><td${_scopeId}>\u4FDD\u5B58</td><td${_scopeId}>\u672A\u6DFB\u52A0\u95E8\u5E97\u88C5\u4FEE\u660E\u7EC6\u3002\u6DFB\u52A0\u81F3\u5C11\u4E00\u884C\u660E\u7EC6</td><td${_scopeId}>\u9AD8</td><td${_scopeId}>[\u67E5\u770B](#\u62A5\u95196\u62A5\u9500\u660E\u7EC6\u4E0D\u80FD\u4E3A\u7A7A)</td></tr><tr${_scopeId}><td${_scopeId}>\u5355\u72EC\u95E8\u5E97\u7533\u8BF7\uFF0C\u53EA\u80FD\u62A5\u9500\u4E00\u4E2A\u95E8\u5E97</td><td${_scopeId}>\u4FDD\u5B58</td><td${_scopeId}>\u653F\u7B56\u8981\u6C42\u5355\u72EC\u95E8\u5E97\u7533\u8BF7\u4F46\u9009\u62E9\u4E86\u591A\u4E2A\u95E8\u5E97\u3002\u53EA\u4FDD\u7559\u4E00\u4E2A\u95E8\u5E97</td><td${_scopeId}>\u4E2D</td><td${_scopeId}>[\u67E5\u770B](#\u62A5\u95197\u5355\u72EC\u95E8\u5E97\u7533\u8BF7\u53EA\u80FD\u62A5\u9500\u4E00\u4E2A\u95E8\u5E97)</td></tr><tr${_scopeId}><td${_scopeId}>\u7533\u8BF7\u6570\u91CF\u5FC5\u987B\u5927\u4E8E0</td><td${_scopeId}>\u4FDD\u5B58</td><td${_scopeId}>\u7533\u8BF7\u6570\u91CF\u4E3A0\u3002\u586B\u5199\u5927\u4E8E0\u7684\u6570\u91CF</td><td${_scopeId}>\u9AD8</td><td${_scopeId}>[\u67E5\u770B](#\u62A5\u95198\u7533\u8BF7\u6570\u91CF\u5FC5\u987B\u5927\u4E8E0)</td></tr><tr${_scopeId}><td${_scopeId}>\u62A5\u9500\u7533\u8BF7\u6570\u91CF\u5FC5\u987B\u5728\u653F\u7B56\u6570\u91CF\u8303\u56F4\u5185</td><td${_scopeId}>\u4FDD\u5B58</td><td${_scopeId}>\u6570\u91CF\u8D85\u51FA\u653F\u7B56\u8303\u56F4\u3002\u4FEE\u6539\u6570\u91CF\u81F3[minNum, maxNum]\u8303\u56F4</td><td${_scopeId}>\u9AD8</td><td${_scopeId}>[\u67E5\u770B](#\u62A5\u95199\u62A5\u9500\u7533\u8BF7\u6570\u91CF\u5FC5\u987B\u5728\u653F\u7B56\u6570\u91CF\u8303\u56F4\u5185)</td></tr><tr${_scopeId}><td${_scopeId}>\u8BF7\u4E0A\u4F20\u88C5\u4FEE\u524D\u6587\u4EF6</td><td${_scopeId}>\u4FDD\u5B58</td><td${_scopeId}>\u672A\u4E0A\u4F20\u88C5\u4FEE\u524D\u7167\u7247\u3002\u4E0A\u4F20\u88C5\u4FEE\u524D\u7167\u7247</td><td${_scopeId}>\u9AD8</td><td${_scopeId}>[\u67E5\u770B](#\u62A5\u951910\u8BF7\u4E0A\u4F20\u88C5\u4FEE\u524D\u6587\u4EF6)</td></tr><tr${_scopeId}><td${_scopeId}>\u8BF7\u4E0A\u4F20\u88C5\u4FEE\u540E\u6587\u4EF6</td><td${_scopeId}>\u4FDD\u5B58</td><td${_scopeId}>\u672A\u4E0A\u4F20\u88C5\u4FEE\u540E\u7167\u7247\u3002\u4E0A\u4F20\u88C5\u4FEE\u540E\u7167\u7247</td><td${_scopeId}>\u9AD8</td><td${_scopeId}>[\u67E5\u770B](#\u62A5\u951911\u8BF7\u4E0A\u4F20\u88C5\u4FEE\u540E\u6587\u4EF6)</td></tr><tr${_scopeId}><td${_scopeId}>\u62A5\u9500\u660E\u7EC6\u65E0\u6CD5\u5173\u8054\u5230\u653F\u7B56</td><td${_scopeId}>\u4FDD\u5B58</td><td${_scopeId}>\u884C\u8868policyLineId\u65E0\u6CD5\u5339\u914D\u653F\u7B56\u660E\u7EC6\u3002\u91CD\u65B0\u9009\u62E9\u8865\u8D34\u9879\u76EE</td><td${_scopeId}>\u9AD8</td><td${_scopeId}>[\u67E5\u770B](#\u62A5\u951912\u62A5\u9500\u660E\u7EC6\u65E0\u6CD5\u5173\u8054\u5230\u653F\u7B56)</td></tr><tr${_scopeId}><td${_scopeId}>\u83B7\u53D6\u6CD5\u4EBA\u4FE1\u606F\u5931\u8D25</td><td${_scopeId}>\u4FDD\u5B58</td><td${_scopeId}>\u7ECF\u9500\u5546+\u4EA4\u6613\u516C\u53F8+\u6CD5\u4EBA\u7EC4\u5408\u4E0D\u5B58\u5728\u3002\u68C0\u67E5\u57FA\u7840\u6570\u636E</td><td${_scopeId}>\u9AD8</td><td${_scopeId}>[\u67E5\u770B](#\u62A5\u951913\u83B7\u53D6\u6CD5\u4EBA\u4FE1\u606F\u5931\u8D25)</td></tr><tr${_scopeId}><td${_scopeId}>X\u5E74\u7684\u989D\u5EA6\u5916\u9884\u7B97\u4E0D\u8DB3\uFF0C\u6709\u7591\u95EE\u8BF7\u8054\u7CFB\u8D22\u52A1</td><td${_scopeId}>\u63D0\u4EA4</td><td${_scopeId}>\u989D\u5EA6\u5916\u5B9E\u9645\u62A5\u9500\u91D1\u989D\u8D85\u8FC7\u5269\u4F59\u9884\u7B97\u3002\u8054\u7CFB\u8D22\u52A1\u786E\u8BA4\u9884\u7B97\u6216\u51CF\u5C11\u7533\u8BF7\u91D1\u989D</td><td${_scopeId}>\u9AD8</td><td${_scopeId}>[\u67E5\u770B](#\u62A5\u951914x\u5E74\u7684\u989D\u5EA6\u5916\u9884\u7B97\u4E0D\u8DB3\u6709\u7591\u95EE\u8BF7\u8054\u7CFB\u8D22\u52A1)</td></tr><tr${_scopeId}><td${_scopeId}>\u5F53\u524D\u989D\u5EA6\u5916\u8D85\u9650\u5904\u7406\u4E0D\u5B58\u5728\uFF0C\u8BF7\u8054\u7CFB\u76F8\u5173\u4EBA\u5458\u5904\u7406</td><td${_scopeId}>\u63D0\u4EA4</td><td${_scopeId}>\u653F\u7B56extraBudgetExcessStrategy\u914D\u7F6E\u9519\u8BEF\u3002\u8054\u7CFB\u7BA1\u7406\u5458\u4FEE\u6B63\u914D\u7F6E</td><td${_scopeId}>\u9AD8</td><td${_scopeId}>[\u67E5\u770B](#\u62A5\u951915\u5F53\u524D\u989D\u5EA6\u5916\u8D85\u9650\u5904\u7406\u4E0D\u5B58\u5728\u8BF7\u8054\u7CFB\u76F8\u5173\u4EBA\u5458\u5904\u7406)</td></tr><tr${_scopeId}><td${_scopeId}>\u975E\u8D85\u989D\u62A5\u9500\uFF0C\u989D\u5EA6\u5185\u91D1\u989D\u4E0D\u5141\u8BB8\u5927\u4E8E\u653F\u7B56\u6807\u51C6</td><td${_scopeId}>\u533A\u57DF\u7ECF\u7406\u5BA1\u6279</td><td${_scopeId}>\u975E\u8D85\u989D\u62A5\u9500\u65F6\u4E1A\u52A1\u6279\u51C6\u91D1\u989D\u8D85\u6807\u51C6\u3002\u4FEE\u6539\u91D1\u989D\u81F3\u2264\u6807\u51C6\u91D1\u989D</td><td${_scopeId}>\u4E2D</td><td${_scopeId}>[\u67E5\u770B](#\u62A5\u951916\u975E\u8D85\u989D\u62A5\u9500\u989D\u5EA6\u5185\u91D1\u989D\u4E0D\u5141\u8BB8\u5927\u4E8E\u653F\u7B56\u6807\u51C6)</td></tr><tr${_scopeId}><td${_scopeId}>\u975E\u8D85\u989D\u62A5\u9500\uFF0C\u989D\u5EA6\u5916\u91D1\u989D\u4E0D\u5141\u8BB8\u5927\u4E8E\u653F\u7B56\u6807\u51C6</td><td${_scopeId}>\u533A\u57DF\u7ECF\u7406\u5BA1\u6279</td><td${_scopeId}>\u975E\u8D85\u989D\u62A5\u9500\u65F6\u4E1A\u52A1\u6279\u51C6\u91D1\u989D\u8D85\u6807\u51C6\u3002\u4FEE\u6539\u91D1\u989D\u81F3\u2264\u6807\u51C6\u91D1\u989D</td><td${_scopeId}>\u4E2D</td><td${_scopeId}>[\u67E5\u770B](#\u62A5\u951917\u975E\u8D85\u989D\u62A5\u9500\u989D\u5EA6\u5916\u91D1\u989D\u4E0D\u5141\u8BB8\u5927\u4E8E\u653F\u7B56\u6807\u51C6)</td></tr><tr${_scopeId}><td${_scopeId}>\u989D\u5EA6\u5185\u6807\u51C6\u4E3A0\uFF0C\u4E0D\u5141\u8BB8\u4FEE\u6539</td><td${_scopeId}>\u533A\u57DF\u7ECF\u7406\u5BA1\u6279</td><td${_scopeId}>\u989D\u5EA6\u5185\u6807\u51C6\u91D1\u989D\u4E3A0\u65F6\u4FEE\u6539\u4E1A\u52A1\u6279\u51C6\u91D1\u989D\u3002\u68C0\u67E5\u653F\u7B56\u914D\u7F6E</td><td${_scopeId}>\u4E2D</td><td${_scopeId}>[\u67E5\u770B](#\u62A5\u951918\u989D\u5EA6\u5185\u6807\u51C6\u4E3A0\u4E0D\u5141\u8BB8\u4FEE\u6539)</td></tr><tr${_scopeId}><td${_scopeId}>\u989D\u5EA6\u5916\u6807\u51C6\u4E3A0\uFF0C\u4E0D\u5141\u8BB8\u4FEE\u6539</td><td${_scopeId}>\u533A\u57DF\u7ECF\u7406\u5BA1\u6279</td><td${_scopeId}>\u989D\u5EA6\u5916\u6807\u51C6\u91D1\u989D\u4E3A0\u65F6\u4FEE\u6539\u4E1A\u52A1\u6279\u51C6\u91D1\u989D\u3002\u68C0\u67E5\u653F\u7B56\u914D\u7F6E</td><td${_scopeId}>\u4E2D</td><td${_scopeId}>[\u67E5\u770B](#\u62A5\u951919\u989D\u5EA6\u5916\u6807\u51C6\u4E3A0\u4E0D\u5141\u8BB8\u4FEE\u6539)</td></tr><tr${_scopeId}><td${_scopeId}>\u4FEE\u6539\u7684\u884C\u8868id\u4E0D\u80FD\u4E3A\u7A7A</td><td${_scopeId}>\u5BA1\u6279\u8282\u70B9\u4FDD\u5B58</td><td${_scopeId}>\u884C\u8868\u7F3A\u5C11ID\u3002\u786E\u8BA4\u884C\u6570\u636E\u5B8C\u6574</td><td${_scopeId}>\u4F4E</td><td${_scopeId}>[\u67E5\u770B](#\u62A5\u951920\u4FEE\u6539\u7684\u884C\u8868id\u4E0D\u80FD\u4E3A\u7A7A)</td></tr><tr${_scopeId}><td${_scopeId}>\u83B7\u53D6\u884C\u6570\u636E\u5931\u8D25</td><td${_scopeId}>\u5BA1\u6279\u8282\u70B9\u4FDD\u5B58</td><td${_scopeId}>\u884CID\u65E0\u6CD5\u5339\u914D\u539F\u6570\u636E\u3002\u5237\u65B0\u9875\u9762\u91CD\u8BD5</td><td${_scopeId}>\u4F4E</td><td${_scopeId}>[\u67E5\u770B](#\u62A5\u951921\u83B7\u53D6\u884C\u6570\u636E\u5931\u8D25)</td></tr><tr${_scopeId}><td${_scopeId}>\u5F53\u524D\u5BA1\u6279\u8282\u70B9\u4E0D\u80FD\u4FEE\u6539</td><td${_scopeId}>\u5BA1\u6279\u8282\u70B9\u4FDD\u5B58</td><td${_scopeId}>\u672A\u5339\u914D\u5230\u6B63\u786E\u7684\u5BA1\u6279\u8282\u70B9\u3002\u786E\u8BA4\u5F53\u524DtaskName</td><td${_scopeId}>\u4F4E</td><td${_scopeId}>[\u67E5\u770B](#\u62A5\u951922\u5F53\u524D\u5BA1\u6279\u8282\u70B9\u4E0D\u80FD\u4FEE\u6539)</td></tr><tr${_scopeId}><td${_scopeId}>\u95E8\u5934\u62A5\u9500\u7533\u8BF7\u4E0D\u5B58\u5728</td><td${_scopeId}>\u5DE5\u4F5C\u6D41\u56DE\u8C03</td><td${_scopeId}>\u62A5\u9500\u5355\u4E0D\u5B58\u5728\u6216\u5DF2\u5220\u9664\u3002\u68C0\u67E5\u6570\u636E</td><td${_scopeId}>\u4F4E</td><td${_scopeId}>[\u67E5\u770B](#\u62A5\u951923\u95E8\u5934\u62A5\u9500\u7533\u8BF7\u4E0D\u5B58\u5728)</td></tr><tr${_scopeId}><td${_scopeId}>\u5355\u636Eid \u4E0D\u80FD\u4E3A\u7A7A</td><td${_scopeId}>\u66F4\u65B0/\u5220\u9664</td><td${_scopeId}>\u672A\u4F20\u5165\u5355\u636EID\u3002\u786E\u8BA4\u64CD\u4F5C\u4E0A\u4E0B\u6587</td><td${_scopeId}>\u4F4E</td><td${_scopeId}>[\u67E5\u770B](#\u62A5\u951924\u5355\u636Eid\u4E0D\u80FD\u4E3A\u7A7A)</td></tr><tr${_scopeId}><td${_scopeId}>\u5F53\u524D\u6570\u636E\u5F02\u5E38\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5</td><td${_scopeId}>\u66F4\u65B0/\u5220\u9664</td><td${_scopeId}>\u6570\u636E\u4E0D\u5B58\u5728\u6216\u5DF2\u88AB\u5220\u9664\u3002\u5237\u65B0\u5217\u8868\u9875</td><td${_scopeId}>\u4F4E</td><td${_scopeId}>[\u67E5\u770B](#\u62A5\u951925\u5F53\u524D\u6570\u636E\u5F02\u5E38\u8BF7\u7A0D\u540E\u518D\u8BD5)</td></tr><tr${_scopeId}><td${_scopeId}>\u6570\u636E\u5F02\u5E38,\u8BF7\u7A0D\u540E\u518D\u8BD5</td><td${_scopeId}>\u67E5\u8BE2\u8BE6\u60C5</td><td${_scopeId}>\u62A5\u9500\u5355\u4E0D\u5B58\u5728\u6216\u5DF2\u88AB\u5220\u9664</td><td${_scopeId}>\u9AD8</td><td${_scopeId}>[\u67E5\u770B](#\u62A5\u951926\u6570\u636E\u5F02\u5E38\u8BF7\u7A0D\u540E\u518D\u8BD5)</td></tr><tr${_scopeId}><td${_scopeId}>\u5355\u636E\u4FE1\u606F\u4E0D\u5408\u6CD5</td><td${_scopeId}>\u5DE5\u4F5C\u6D41\u56DE\u8C03</td><td${_scopeId}>\u62A5\u9500\u5355\u72B6\u6001\u6216\u6570\u636E\u4E0D\u5408\u6CD5</td><td${_scopeId}>\u9AD8</td><td${_scopeId}>[\u67E5\u770B](#\u62A5\u951927\u5355\u636E\u4FE1\u606F\u4E0D\u5408\u6CD5)</td></tr><tr${_scopeId}><td${_scopeId}>\u62A5\u9500\u5355\u4E0D\u5B58\u5728</td><td${_scopeId}>\u83B7\u53D6\u7ECF\u9500\u5546\u9650\u989D</td><td${_scopeId}>\u63D0\u4EA4\u65F6\u6309id\u67E5\u8BE2CUST_DH_REIMBURSE_HEAD\u8FD4\u56DEnull</td><td${_scopeId}>\u9AD8</td><td${_scopeId}>[\u67E5\u770B](#\u62A5\u951928\u62A5\u9500\u5355\u4E0D\u5B58\u5728)</td></tr><tr${_scopeId}><td${_scopeId}>\u8BF7\u5148\u9009\u62E9\u7ECF\u9500\u5546\u548C\u5E97\u9762\u5EFA\u8BBE\u8865\u8D34\u653F\u7B56</td><td${_scopeId}>\u6DFB\u52A0\u660E\u7EC6\u884C</td><td${_scopeId}>\u672A\u9009\u62E9\u7ECF\u9500\u5546\u6216\u653F\u7B56\u5373\u6DFB\u52A0\u884C</td><td${_scopeId}>\u4E2D</td><td${_scopeId}>[\u67E5\u770B](#\u62A5\u951929\u8BF7\u5148\u9009\u62E9\u7ECF\u9500\u5546\u548C\u5E97\u9762\u5EFA\u8BBE\u8865\u8D34\u653F\u7B56)</td></tr><tr${_scopeId}><td${_scopeId}>\u8BF7\u9009\u62E9\u8981\u5220\u9664\u7684\u884C</td><td${_scopeId}>\u5220\u9664\u660E\u7EC6\u884C</td><td${_scopeId}>\u672A\u9009\u62E9\u884C\u5373\u70B9\u51FB\u5220\u9664</td><td${_scopeId}>\u4F4E</td><td${_scopeId}>[\u67E5\u770B](#\u62A5\u951930\u8BF7\u9009\u62E9\u8981\u5220\u9664\u7684\u884C)</td></tr><tr${_scopeId}><td${_scopeId}>\u8BF7\u81F3\u5C11\u6DFB\u52A0\u4E00\u6761\u95E8\u5E97\u4FE1\u606F</td><td${_scopeId}>\u4FDD\u5B58/\u63D0\u4EA4</td><td${_scopeId}>terminalData\u4E3A\u7A7A</td><td${_scopeId}>\u9AD8</td><td${_scopeId}>[\u67E5\u770B](#\u62A5\u951931\u8BF7\u81F3\u5C11\u6DFB\u52A0\u4E00\u6761\u95E8\u5E97\u4FE1\u606F)</td></tr></tbody></table><h4${_scopeId}>\u62A5\u95191\uFF1A\u62A5\u9500\u653F\u7B56\u4E0D\u80FD\u4E3A\u7A7A</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u70B9\u51FB&quot;\u4FDD\u5B58&quot;\u6309\u94AE\uFF0CcheckParams\u6821\u9A8CpolicyStandardHead\u4E3Anull\uFF08\u672A\u9009\u62E9\u8865\u8D34\u653F\u7B56\uFF09</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u95E8\u5934\u5C55\u677F\u62A5\u9500\u5FC5\u987B\u5173\u8054\u6709\u6548\u7684\u5E97\u9762\u5EFA\u8BBE\u8865\u8D34\u653F\u7B56\uFF0C\u6309\u653F\u7B56\u6807\u51C6\u8BA1\u7B97\u62A5\u9500\u91D1\u989D\u3002\u82E5\u7528\u6237\u672A\u901A\u8FC7LOV(AE.POLICY_STANDARD_VALID_HEAD)\u9009\u62E9\u653F\u7B56\u3001policyStandardId\u4F20\u503C\u4E22\u5931\u3001\u6216\u524D\u7AEF\u672A\u89E6\u53D1\u8054\u52A8\u67E5\u8BE2\uFF0CpolicyStandardHead\u4E3Anull\u629B\u5F02\u5E38\u3002\u9700\u5728\u65B0\u589E\u9875\u9762\u9009\u62E9\u6709\u6548\u7684\u8865\u8D34\u653F\u7B56\u3002</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> h.id           </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u653F\u7B56ID,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         h.policy_name  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u653F\u7B56\u540D\u79F0,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         h.valid        </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u6709\u6548\u72B6\u6001,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         h.start_date   </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5F00\u59CB\u65E5\u671F,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         h.end_date     </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7ED3\u675F\u65E5\u671F</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>   policy_standard_head h</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  h.entid </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> #{\u5F53\u524D\u7528\u6237\u7EC4\u7EC7ID}</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    h.valid </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>2</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    h.start_date </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&lt;=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>SYSDATE</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    h.end_date </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>SYSDATE</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ORDER  BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> h.start_date </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>DESC</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95192\uFF1A\u62A5\u9500\u653F\u7B56\u5DF2\u5931\u6548\uFF0C\u8BF7\u91CD\u65B0\u9009\u62E9\u6709\u6548\u62A5\u9500\u653F\u7B56</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u70B9\u51FB&quot;\u4FDD\u5B58&quot;\u6309\u94AE\uFF0CcheckParams\u6821\u9A8CpolicyStandardHead.getValid()\u22602</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u653F\u7B56valid=2\u8868\u793A\u6709\u6548\uFF0C\u5176\u4ED6\u503C\u8868\u793A\u5931\u6548/\u8349\u7A3F/\u4F5C\u5E9F\u3002\u82E5\u7528\u6237\u9009\u62E9\u4E86\u5DF2\u5931\u6548\u7684\u653F\u7B56\uFF08\u5982\u653F\u7B56\u88AB\u7BA1\u7406\u5458\u7F6E\u4E3A\u65E0\u6548\u540E\u7528\u6237\u4ECD\u4F7F\u7528\u524D\u7AEF\u7F13\u5B58LOV\uFF09\u3001\u6216\u653F\u7B56valid\u5B57\u6BB5\u914D\u7F6E\u5F02\u5E38\uFF0C\u6821\u9A8C\u4E0D\u901A\u8FC7\u629B\u5F02\u5E38\u3002\u9700\u91CD\u65B0\u9009\u62E9\u6709\u6548(valid=2)\u653F\u7B56\u3002</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> h.id           </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u653F\u7B56ID,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         h.policy_name  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u653F\u7B56\u540D\u79F0,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         h.valid        </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u6709\u6548\u72B6\u6001,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>CASE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> h.valid </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHEN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>2</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>THEN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>\u6709\u6548</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ELSE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>\u5931\u6548</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>END</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u72B6\u6001\u8BF4\u660E</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>   policy_standard_head h</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  h.id </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> #{\u4F20\u5165\u7684policyStandardId};</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95193\uFF1A\u7ECF\u9500\u5546\u6CD5\u4EBA\u4E0D\u80FD\u4E3A\u7A7A</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u70B9\u51FB&quot;\u4FDD\u5B58&quot;\u6309\u94AE\uFF0CcheckParams\u6821\u9A8CcustomerId\u6216customerLegalId\u4E3A\u7A7A</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u62A5\u9500\u5355\u9700\u5173\u8054\u7ECF\u9500\u5546\u548C\u4EA4\u6613\u516C\u53F8\u6CD5\u4EBA\u7EC4\u5408\uFF0C\u7528\u4E8E\u540E\u7EED\u63A8\u9001MBO\u548C\u8D44\u91D1\u6C60\u3002\u82E5\u7528\u6237\u672A\u9009\u62E9\u7ECF\u9500\u5546\u3001\u672A\u9009\u62E9\u4EA4\u6613\u516C\u53F8/\u6CD5\u4EBA\u3001\u6216\u8054\u52A8\u67E5\u8BE2getCustLegal\u672A\u8FD4\u56DEcustomerLegalId\uFF0C\u6821\u9A8C\u4E0D\u901A\u8FC7\u629B\u5F02\u5E38\u3002\u9700\u4F9D\u6B21\u9009\u62E9\u7ECF\u9500\u5546\u2192\u4EA4\u6613\u516C\u53F8\u2192\u6CD5\u4EBA\u5BA2\u6237\u3002</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> r.id                 </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u62A5\u9500\u5355ID,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         r.reimburse_code     </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u62A5\u9500\u5355\u53F7,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         r.customer_id        </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7ECF\u9500\u5546ID,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         r.customer_legal_id  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u6CD5\u4EBA\u4E2D\u95F4\u8868ID,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         r.trading_company_code </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u4EA4\u6613\u516C\u53F8\u7F16\u7801</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>   cust_dh_reimburse_head r</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  r.hz_approve_status </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>NEW</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    (r.customer_id </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>OR</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> r.customer_legal_id </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ORDER  BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> r.creation_date </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>DESC</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95194\uFF1A\u62A5\u9500\u653F\u7B56\u5DF2\u8FC7\u671F\uFF0C\u8BF7\u91CD\u65B0\u9009\u62E9\u6709\u6548\u62A5\u9500\u653F\u7B56</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u70B9\u51FB&quot;\u4FDD\u5B58&quot;\u6309\u94AE\uFF0CcheckParams\u6821\u9A8CpolicyStandardHead.startDate&gt;\u5F53\u524D\u65E5\u671F\u6216endDate&lt;\u5F53\u524D\u65E5\u671F</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u653F\u7B56\u6709\u6709\u6548\u671F\u9650\u5236\uFF0C\u4EC5\u5728[startDate, endDate]\u533A\u95F4\u5185\u6709\u6548\u3002\u82E5\u7528\u6237\u9009\u62E9\u4E86\u5DF2\u8FC7\u671F\u6216\u672A\u751F\u6548\u7684\u653F\u7B56\uFF08\u5982\u653F\u7B56endDate&lt;\u5F53\u524D\u65E5\u671F\u5DF2\u7ED3\u675F\u3001\u6216startDate&gt;\u5F53\u524D\u65E5\u671F\u5C1A\u672A\u751F\u6548\uFF09\uFF0C\u6821\u9A8C\u4E0D\u901A\u8FC7\u629B\u5F02\u5E38\u3002\u9700\u9009\u62E9\u5F53\u524D\u65E5\u671F\u5728\u6709\u6548\u671F\u5185\u7684\u653F\u7B56\u3002</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> h.id           </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u653F\u7B56ID,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         h.policy_name  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u653F\u7B56\u540D\u79F0,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         h.start_date   </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5F00\u59CB\u65E5\u671F,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         h.end_date     </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7ED3\u675F\u65E5\u671F,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>SYSDATE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>        </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5F53\u524D\u65E5\u671F</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>   policy_standard_head h</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  h.valid </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>2</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    (h.start_date </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>SYSDATE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>OR</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> h.end_date </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&lt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>SYSDATE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ORDER  BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> h.end_date </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>DESC</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95195\uFF1A\u8BF7\u9009\u62E9\u62A5\u9500\u7C7B\u578B</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u70B9\u51FB&quot;\u4FDD\u5B58&quot;\u6309\u94AE\uFF0CcheckParams\u6821\u9A8CbxType\u4E3A\u7A7A</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u62A5\u9500\u7C7B\u578BbxType\u533A\u5206\u989D\u5EA6\u5185(1)/\u989D\u5EA6\u5916(2)\uFF0C\u51B3\u5B9A\u540E\u7EED\u91D1\u989D\u8BA1\u7B97\u548C\u9884\u7B97\u63A7\u5236\u903B\u8F91\u3002\u82E5\u7528\u6237\u672A\u9009\u62E9\u62A5\u9500\u7C7B\u578B\u3001\u6216\u653F\u7B56budgetType\u672A\u6B63\u786E\u8054\u52A8\u8D4B\u503C\uFF0CbxType\u4E3A\u7A7A\u629B\u5F02\u5E38\u3002\u9700\u9009\u62E9\u62A5\u9500\u7C7B\u578B\u3002</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> r.id           </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u62A5\u9500\u5355ID,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         r.reimburse_code </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u62A5\u9500\u5355\u53F7,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         r.bx_type      </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u62A5\u9500\u7C7B\u578B,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         r.policy_standard_id </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u653F\u7B56ID</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>   cust_dh_reimburse_head r</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  r.hz_approve_status </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>NEW</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    r.bx_type </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ORDER  BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> r.creation_date </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>DESC</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95196\uFF1A\u62A5\u9500\u660E\u7EC6\u4E0D\u80FD\u4E3A\u7A7A</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u70B9\u51FB&quot;\u4FDD\u5B58&quot;\u6309\u94AE\uFF0CcheckParams/computeBxLine\u6821\u9A8Clines\u96C6\u5408\u4E3A\u7A7A</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u62A5\u9500\u5355\u9700\u81F3\u5C11\u4E00\u884C\u95E8\u5E97\u88C5\u4FEE\u660E\u7EC6\uFF0C\u542B\u95E8\u5E97\u3001\u8865\u8D34\u9879\u76EE\u3001\u6570\u91CF\u3001\u91D1\u989D\u3001\u88C5\u4FEE\u524D\u540E\u7167\u7247\u7B49\u3002\u82E5\u7528\u6237\u672A\u6DFB\u52A0\u660E\u7EC6\u884C\u3001\u524D\u7AEF\u884C\u6570\u636E\u6E90\u672A\u6B63\u786E\u7ED1\u5B9A\u3001\u6216\u884C\u6570\u636E\u88AB\u8BEF\u6E05\u7A7A\uFF0Clines\u4E3A\u7A7A\u629B\u5F02\u5E38\u3002\u9700\u6DFB\u52A0\u81F3\u5C11\u4E00\u884C\u660E\u7EC6\u3002</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> r.id              </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u62A5\u9500\u5355ID,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         r.reimburse_code  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u62A5\u9500\u5355\u53F7,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         (</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}>COUNT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>1</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>          </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>   cust_dh_reimburse_line l</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>          </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  l.head_id </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> r.id) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u884C\u8868\u8BB0\u5F55\u6570</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>   cust_dh_reimburse_head r</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  r.hz_approve_status </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>NEW</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NOT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>EXISTS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>1</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> cust_dh_reimburse_line l </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> l.head_id </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> r.id)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ORDER  BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> r.creation_date </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>DESC</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95197\uFF1A\u5355\u72EC\u95E8\u5E97\u7533\u8BF7\uFF0C\u53EA\u80FD\u62A5\u9500\u4E00\u4E2A\u95E8\u5E97</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u70B9\u51FB&quot;\u4FDD\u5B58&quot;\u6309\u94AE\uFF0CcheckParams\u6821\u9A8C\u653F\u7B56singleStoreApplyFlag=Y\u65F6\uFF0C\u884C\u8868\u4E2DterminalId\u53BB\u91CD\u540E\u6570\u91CF\u22601</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u90E8\u5206\u653F\u7B56\u8981\u6C42\u6BCF\u6B21\u62A5\u9500\u53EA\u80FD\u7533\u8BF7\u4E00\u4E2A\u95E8\u5E97\uFF0C\u9632\u6B62\u6279\u91CF\u62A5\u9500\u6DF7\u7528\u6807\u51C6\u3002\u82E5\u653F\u7B56singleStoreApplyFlag=Y\u4F46\u7528\u6237\u5728\u591A\u884C\u660E\u7EC6\u4E2D\u9009\u62E9\u4E86\u4E0D\u540C\u95E8\u5E97\uFF0C\u6821\u9A8C\u4E0D\u901A\u8FC7\u629B\u5F02\u5E38\u3002\u9700\u53EA\u4FDD\u7559\u4E00\u4E2A\u95E8\u5E97\u7684\u660E\u7EC6\u884C\u3002</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> r.id              </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u62A5\u9500\u5355ID,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         r.reimburse_code  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u62A5\u9500\u5355\u53F7,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         r.policy_standard_id </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u653F\u7B56ID,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}>COUNT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>DISTINCT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> l.terminal_id) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u95E8\u5E97\u53BB\u91CD\u6570</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>   cust_dh_reimburse_head r</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>JOIN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>   cust_dh_reimburse_line l </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ON</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> l.head_id </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> r.id</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  r.hz_approve_status </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>NEW</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>GROUP  BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> r.id, r.reimburse_code, r.policy_standard_id</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>HAVING</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}>COUNT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>DISTINCT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> l.terminal_id) </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>1</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ORDER  BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> r.creation_date </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>DESC</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95198\uFF1A\u7533\u8BF7\u6570\u91CF\u5FC5\u987B\u5927\u4E8E0</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u70B9\u51FB&quot;\u4FDD\u5B58&quot;\u6309\u94AE\uFF0CcomputeBxLine\u6821\u9A8C\u67D0\u884CapplyNum=0\u6216\u4E3A\u7A7A</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u7533\u8BF7\u6570\u91CF\u7528\u4E8E\u8BA1\u7B97\u6807\u51C6\u91D1\u989D(=\u6807\u51C6\u5355\u4EF7\xD7\u6570\u91CF)\uFF0C\u5FC5\u987B\u4E3A\u6B63\u6570\u3002\u82E5\u7528\u6237\u672A\u586B\u5199\u6570\u91CF\u3001\u6570\u91CF\u88AB\u8BEF\u7F6E0\u3001\u6216\u524D\u7AEFNumberField\u672A\u505A\u5FC5\u586B\u6821\u9A8C\uFF0CapplyNum=0\u629B\u5F02\u5E38\u3002\u9700\u586B\u5199\u5927\u4E8E0\u7684\u6570\u91CF\u3002</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> l.id            </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u884CID,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         l.head_id       </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u62A5\u9500\u5355ID,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         l.terminal_id   </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u95E8\u5E97ID,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         l.apply_num     </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7533\u8BF7\u6570\u91CF,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         l.decorate_project </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u88C5\u4FEE\u9879\u76EE</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>   cust_dh_reimburse_line l</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  NVL(l.apply_num, </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>0</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>0</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ORDER  BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> l.id </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>DESC</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95199\uFF1A\u62A5\u9500\u7533\u8BF7\u6570\u91CF\u5FC5\u987B\u5728\u653F\u7B56\u6570\u91CF\u8303\u56F4\u5185</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u70B9\u51FB&quot;\u4FDD\u5B58&quot;\u6309\u94AE\uFF0CcomputeBxLine\u6821\u9A8C\u67D0\u884CapplyNum&lt;minNum\u6216applyNum&gt;maxNum</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u653F\u7B56\u660E\u7EC6\u884C\u89C4\u5B9A\u4E86\u6570\u91CF\u4E0A\u4E0B\u9650(minNum, maxNum)\uFF0C\u786E\u4FDD\u62A5\u9500\u6570\u91CF\u5728\u653F\u7B56\u5141\u8BB8\u8303\u56F4\u5185\u3002\u82E5\u7528\u6237\u586B\u5199\u7684\u6570\u91CF\u8D85\u51FA[minNum, maxNum]\u533A\u95F4\uFF08\u5982\u653F\u7B56\u96501~5\u4F46\u586B\u4E8610\uFF09\uFF0C\u6821\u9A8C\u4E0D\u901A\u8FC7\u629B\u5F02\u5E38\u3002\u9700\u4FEE\u6539\u6570\u91CF\u81F3\u653F\u7B56\u8303\u56F4\u5185\u3002</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> l.id            </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u884CID,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         l.head_id       </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u62A5\u9500\u5355ID,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         l.apply_num     </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7533\u8BF7\u6570\u91CF,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         p.min_num       </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u653F\u7B56\u6570\u91CF\u4E0B\u9650,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         p.max_num       </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u653F\u7B56\u6570\u91CF\u4E0A\u9650</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>   cust_dh_reimburse_line l</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>JOIN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>   policy_standard_line p </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ON</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> p.id </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> l.policy_line_id</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  l.apply_num </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&lt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> p.min_num </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>OR</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> l.apply_num </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> p.max_num</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ORDER  BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> l.id </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>DESC</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u951910\uFF1A\u8BF7\u4E0A\u4F20\u88C5\u4FEE\u524D\u6587\u4EF6</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u70B9\u51FB&quot;\u4FDD\u5B58&quot;\u6309\u94AE\uFF0CcomputeBxLine\u6821\u9A8C\u67D0\u884CbeforeDocId\u4E3A\u7A7A</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u88C5\u4FEE\u524D\u7167\u7247\u7528\u4E8E\u8BC1\u660E\u95E8\u5E97\u88C5\u4FEE\u524D\u539F\u8C8C\uFF0C\u662F\u62A5\u9500\u5FC5\u8981\u51ED\u8BC1\u3002\u82E5\u7528\u6237\u672A\u4E0A\u4F20\u88C5\u4FEE\u524D\u7167\u7247\u3001\u4E0A\u4F20\u540EbeforeDocId\u672A\u6B63\u786E\u56DE\u586B\u3001\u6216\u9644\u4EF6\u88AB\u8BEF\u5220\u9664\uFF0CbeforeDocId\u4E3A\u7A7A\u629B\u5F02\u5E38\u3002\u9700\u4E0A\u4F20\u88C5\u4FEE\u524D\u7167\u7247\u3002</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> l.id            </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u884CID,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         l.head_id       </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u62A5\u9500\u5355ID,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         l.terminal_id   </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u95E8\u5E97ID,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         l.before_doc_id </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u88C5\u4FEE\u524D\u7167\u7247UUID,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         l.before_doc_name </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u88C5\u4FEE\u524D\u7167\u7247\u540D</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>   cust_dh_reimburse_line l</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  l.before_doc_id </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ORDER  BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> l.id </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>DESC</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u951911\uFF1A\u8BF7\u4E0A\u4F20\u88C5\u4FEE\u540E\u6587\u4EF6</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u70B9\u51FB&quot;\u4FDD\u5B58&quot;\u6309\u94AE\uFF0CcomputeBxLine\u6821\u9A8C\u67D0\u884CafterDocId\u4E3A\u7A7A</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u88C5\u4FEE\u540E\u7167\u7247\u7528\u4E8E\u8BC1\u660E\u95E8\u5E97\u88C5\u4FEE\u5B8C\u6210\u60C5\u51B5\uFF0C\u662F\u62A5\u9500\u5FC5\u8981\u51ED\u8BC1\u3002\u82E5\u7528\u6237\u672A\u4E0A\u4F20\u88C5\u4FEE\u540E\u7167\u7247\u3001\u4E0A\u4F20\u540EafterDocId\u672A\u6B63\u786E\u56DE\u586B\u3001\u6216\u9644\u4EF6\u88AB\u8BEF\u5220\u9664\uFF0CafterDocId\u4E3A\u7A7A\u629B\u5F02\u5E38\u3002\u9700\u4E0A\u4F20\u88C5\u4FEE\u540E\u7167\u7247\u3002</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> l.id            </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u884CID,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         l.head_id       </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u62A5\u9500\u5355ID,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         l.terminal_id   </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u95E8\u5E97ID,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         l.after_doc_id  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u88C5\u4FEE\u540E\u7167\u7247UUID,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         l.after_doc_name </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u88C5\u4FEE\u540E\u7167\u7247\u540D</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>   cust_dh_reimburse_line l</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  l.after_doc_id </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ORDER  BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> l.id </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>DESC</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u951912\uFF1A\u62A5\u9500\u660E\u7EC6\u65E0\u6CD5\u5173\u8054\u5230\u653F\u7B56</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u70B9\u51FB&quot;\u4FDD\u5B58&quot;\u6309\u94AE\uFF0CcomputeBxLine\u6309policyLineId\u67E5\u8BE2POLICY_STANDARD_LINE\u8FD4\u56DEnull\uFF08targetPolicy\u4E3Anull\uFF09</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u62A5\u9500\u660E\u7EC6\u884C\u9700\u5173\u8054\u653F\u7B56\u660E\u7EC6\u884C\u83B7\u53D6\u6807\u51C6\u91D1\u989D\u3001\u6570\u91CF\u8303\u56F4\u7B49\u3002\u82E5policyLineId\u4F20\u503C\u9519\u8BEF\uFF08\u5982\u524D\u7AEF\u7F13\u5B58\u4E86\u5DF2\u5931\u6548\u653F\u7B56\u884C\uFF09\u3001\u653F\u7B56\u660E\u7EC6\u884C\u88AB\u5220\u9664\u3001\u6216\u653F\u7B56\u884C\u4E0E\u653F\u7B56\u5934\u4E0D\u5339\u914D\uFF0CtargetPolicy\u4E3Anull\u629B\u5F02\u5E38\u3002\u9700\u91CD\u65B0\u9009\u62E9\u8865\u8D34\u9879\u76EE\u3002</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> l.id              </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u884CID,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         l.head_id         </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u62A5\u9500\u5355ID,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         l.policy_line_id  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u653F\u7B56\u884CID,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         l.decorate_project </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u88C5\u4FEE\u9879\u76EE</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>   cust_dh_reimburse_line l</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  l.policy_line_id </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NOT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NOT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>EXISTS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>1</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> policy_standard_line p </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> p.id </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> l.policy_line_id)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ORDER  BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> l.id </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>DESC</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u951913\uFF1A\u83B7\u53D6\u6CD5\u4EBA\u4FE1\u606F\u5931\u8D25</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u70B9\u51FB&quot;\u4FDD\u5B58&quot;\u6309\u94AE\uFF0CgetCustLegal\u6309\u7ECF\u9500\u5546+\u4EA4\u6613\u516C\u53F8+\u6CD5\u4EBA\u7EC4\u5408\u67E5\u8BE2\u8FD4\u56DEnull</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u62A5\u9500\u5355\u9700\u5173\u8054\u4EA4\u6613\u516C\u53F8\u6CD5\u4EBA\u4E2D\u95F4\u8868\uFF0C\u7528\u4E8E\u540E\u7EED\u63A8\u9001MBO\u548C\u8D44\u91D1\u6C60\u3002\u82E5\u7ECF\u9500\u5546+\u4EA4\u6613\u516C\u53F8+\u6CD5\u4EBA\u7EC4\u5408\u5728\u4E2D\u95F4\u8868\u4E2D\u4E0D\u5B58\u5728\uFF08\u57FA\u7840\u6570\u636E\u672A\u7EF4\u62A4\u3001\u7EC4\u5408\u5173\u7CFB\u88AB\u5220\u9664\uFF09\u3001\u6216\u4F20\u503C\u9519\u8BEF\uFF0CgetCustLegal\u8FD4\u56DEnull\u629B\u5F02\u5E38\u3002\u9700\u68C0\u67E5\u7ECF\u9500\u5546\u3001\u4EA4\u6613\u516C\u53F8\u3001\u6CD5\u4EBA\u57FA\u7840\u6570\u636E\u5B8C\u6574\u6027\u3002</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> r.id                 </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u62A5\u9500\u5355ID,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         r.reimburse_code     </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u62A5\u9500\u5355\u53F7,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         r.customer_id        </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7ECF\u9500\u5546ID,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         r.trading_company_code </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u4EA4\u6613\u516C\u53F8\u7F16\u7801,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         r.customer_legal_id  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u6CD5\u4EBA\u4E2D\u95F4\u8868ID</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>   cust_dh_reimburse_head r</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  r.hz_approve_status </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>NEW</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    r.customer_legal_id </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ORDER  BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> r.creation_date </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>DESC</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u951914\uFF1AX\u5E74\u7684\u989D\u5EA6\u5916\u9884\u7B97\u4E0D\u8DB3\uFF0C\u6709\u7591\u95EE\u8BF7\u8054\u7CFB\u8D22\u52A1</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u70B9\u51FB&quot;\u63D0\u4EA4&quot;\u6309\u94AE\uFF0CvalidBxAmt\u6821\u9A8CuseExtraBudgetFlag=Y\u65F6\uFF0C\u5269\u4F59\u989D\u5EA6\u5916\u53EF\u7528\u9884\u7B97(viewOverBudgetAmt)-\u989D\u5EA6\u5916\u5B9E\u9645\u62A5\u9500\u91D1\u989D(outBxAmt)&lt;0</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u989D\u5EA6\u5916\u62A5\u9500\u5360\u7528\u5E74\u5EA6\u9884\u7B97\u603B\u989D\uFF0C\u9700\u786E\u4FDD\u9884\u7B97\u5145\u8DB3\u3002\u6821\u9A8C\u903B\u8F91\u67E5\u8BE2FIN_FEE_CHECK_BX_HEADER\u4E2D\u5F53\u524D\u5E74\u4EFD\u540C\u4E8B\u4E1A\u90E8\u7684\u5269\u4F59\u53EF\u7528\u9884\u7B97\uFF0C\u82E5\u672C\u6B21\u989D\u5EA6\u5916\u5B9E\u9645\u62A5\u9500\u91D1\u989D\u8D85\u8FC7\u5269\u4F59\u9884\u7B97\u5373\u629B\u5F02\u5E38\u3002\u5E38\u89C1\u6839\u56E0\uFF1A\u5E74\u5EA6\u9884\u7B97\u914D\u7F6E\u4E0D\u8DB3\u3001\u5386\u53F2\u62A5\u9500\u5355\u5360\u7528\u8FC7\u591A\u3001\u6216\u672C\u6B21\u7533\u8BF7\u91D1\u989D\u8FC7\u5927\u3002\u9700\u8054\u7CFB\u8D22\u52A1\u786E\u8BA4\u9884\u7B97\u6216\u51CF\u5C11\u7533\u8BF7\u91D1\u989D\u3002</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> b.bud_year              </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u9884\u7B97\u5E74\u5EA6,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         b.division_id           </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u4E8B\u4E1A\u90E8ID,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         b.total_amt             </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5E74\u5EA6\u603B\u9884\u7B97,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         NVL((</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}>SUM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>(r.out_bx_amt)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>              </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>   cust_dh_reimburse_head r</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>              </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  r.year </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> b.bud_year</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>              </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    r.division_id </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> b.division_id</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>              </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    r.hz_approve_status </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>RUN</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>,</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>APPROVED</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>,</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>RETURN</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>)), </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>0</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5DF2\u5360\u7528\u91D1\u989D,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         b.total_amt </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>-</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> NVL((</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}>SUM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>(r.out_bx_amt)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>              </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>   cust_dh_reimburse_head r</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>              </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  r.year </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> b.bud_year</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>              </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    r.division_id </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> b.division_id</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>              </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    r.hz_approve_status </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>RUN</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>,</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>APPROVED</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>,</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>RETURN</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>)), </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>0</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5269\u4F59\u53EF\u7528\u9884\u7B97</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>   fin_fee_check_bx_header b</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  b.fee_type_id </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>66014602</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    b.bud_year </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> #{\u5F53\u524D\u5E74\u4EFD}</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ORDER  BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> b.division_id;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u951915\uFF1A\u5F53\u524D\u989D\u5EA6\u5916\u8D85\u9650\u5904\u7406\u4E0D\u5B58\u5728\uFF0C\u8BF7\u8054\u7CFB\u76F8\u5173\u4EBA\u5458\u5904\u7406</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u70B9\u51FB&quot;\u63D0\u4EA4&quot;\u6309\u94AE\uFF0CcomputeLimitBxAmt\u6821\u9A8C\u653F\u7B56extraBudgetExcessStrategy\u975E1\u975E2</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u9650\u989D\u6A21\u5F0F\u4E0B\u7ECF\u9500\u5546\u8D85\u989D\u65F6\u9700\u6309\u7B56\u7565\u5904\u7406\uFF1A1-\u8D85\u51FA\u4E0D\u8BA1(\u989D\u5EA6\u5185\u5B9E\u9645\u62A5\u9500=\u8D22\u52A1\u6279\u51C6)\u30012-\u8F6C\u989D\u5EA6\u5185(\u989D\u5EA6\u5185\u5B9E\u9645\u62A5\u9500=\u8D22\u52A1\u6279\u51C6-\u8D85\u9650\u91D1\u989D)\u3002\u82E5\u653F\u7B56extraBudgetExcessStrategy\u672A\u914D\u7F6E\u3001\u914D\u7F6E\u4E3A\u975E1\u975E2\u7684\u975E\u6CD5\u503C\u3001\u6216\u653F\u7B56\u88AB\u9519\u8BEF\u4FEE\u6539\uFF0C\u6821\u9A8C\u4E0D\u901A\u8FC7\u629B\u5F02\u5E38\u3002\u9700\u8054\u7CFB\u7BA1\u7406\u5458\u4FEE\u6B63\u653F\u7B56\u914D\u7F6E\u3002</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> h.id                       </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u653F\u7B56ID,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         h.policy_name              </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u653F\u7B56\u540D\u79F0,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         h.extra_budget_excess_strategy </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u8D85\u9650\u5904\u7406\u7B56\u7565,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         h.cust_limit_flag          </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7ECF\u9500\u5546\u9650\u989D\u6807\u8BC6</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>   policy_standard_head h</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  h.cust_limit_flag </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>Y</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    h.extra_budget_excess_strategy </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NOT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>1</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>2</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ORDER  BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> h.id;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u951916\uFF1A\u975E\u8D85\u989D\u62A5\u9500\uFF0C\u989D\u5EA6\u5185\u91D1\u989D\u4E0D\u5141\u8BB8\u5927\u4E8E\u653F\u7B56\u6807\u51C6</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u533A\u57DF\u7ECF\u7406\u5BA1\u6279\u8282\u70B9\u4FDD\u5B58\uFF0CbizNodeUpdate\u6821\u9A8C\u653F\u7B56excessFlag\u2260Y\u4E14newInBizAmt&gt;=inStandardAmt</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u975E\u8D85\u989D\u62A5\u9500(excessFlag\u2260Y)\u65F6\uFF0C\u4E1A\u52A1\u6279\u51C6\u91D1\u989D\u4E0D\u80FD\u8D85\u8FC7\u653F\u7B56\u6807\u51C6\u91D1\u989D\uFF0C\u786E\u4FDD\u62A5\u9500\u5408\u89C4\u3002\u82E5\u533A\u57DF\u7ECF\u7406\u4FEE\u6539\u7684\u989D\u5EA6\u5185\u4E1A\u52A1\u6279\u51C6\u91D1\u989D\u8D85\u8FC7\u6807\u51C6\u91D1\u989D\u3001\u6216\u653F\u7B56excessFlag\u914D\u7F6E\u9519\u8BEF\u5BFC\u81F4\u6821\u9A8C\u903B\u8F91\u8BEF\u5224\uFF0C\u629B\u5F02\u5E38\u3002\u9700\u4FEE\u6539\u91D1\u989D\u81F3\u2264\u6807\u51C6\u91D1\u989D\u3002</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> l.id              </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u884CID,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         l.head_id         </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u62A5\u9500\u5355ID,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         l.in_biz_amt      </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u989D\u5EA6\u5185\u4E1A\u52A1\u6279\u51C6\u91D1\u989D,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         l.in_standard_amt </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u989D\u5EA6\u5185\u6807\u51C6\u91D1\u989D,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         h.excess_flag     </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u8D85\u989D\u6807\u8BC6</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>   cust_dh_reimburse_line l</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>JOIN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>   cust_dh_reimburse_head r </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ON</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> r.id </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> l.head_id</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>JOIN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>   policy_standard_head h </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ON</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> h.id </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> r.policy_standard_id</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  r.hz_approve_status </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>RUN</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    NVL(h.excess_flag, </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>N</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&lt;&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>Y</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    l.in_biz_amt </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> l.in_standard_amt</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ORDER  BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> l.id </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>DESC</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u951917\uFF1A\u975E\u8D85\u989D\u62A5\u9500\uFF0C\u989D\u5EA6\u5916\u91D1\u989D\u4E0D\u5141\u8BB8\u5927\u4E8E\u653F\u7B56\u6807\u51C6</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u533A\u57DF\u7ECF\u7406\u5BA1\u6279\u8282\u70B9\u4FDD\u5B58\uFF0CbizNodeUpdate\u6821\u9A8C\u653F\u7B56excessFlag\u2260Y\u4E14newOutBizAmt&gt;=outStandardAmt</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u4E0E\u989D\u5EA6\u5185\u6821\u9A8C\u540C\u7406\uFF0C\u975E\u8D85\u989D\u62A5\u9500\u65F6\u989D\u5EA6\u5916\u4E1A\u52A1\u6279\u51C6\u91D1\u989D\u4E0D\u80FD\u8D85\u8FC7\u653F\u7B56\u6807\u51C6\u91D1\u989D\u3002\u82E5\u533A\u57DF\u7ECF\u7406\u4FEE\u6539\u7684\u989D\u5EA6\u5916\u4E1A\u52A1\u6279\u51C6\u91D1\u989D\u8D85\u8FC7\u6807\u51C6\u91D1\u989D\uFF0C\u629B\u5F02\u5E38\u3002\u9700\u4FEE\u6539\u91D1\u989D\u81F3\u2264\u6807\u51C6\u91D1\u989D\u3002</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> l.id              </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u884CID,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         l.head_id         </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u62A5\u9500\u5355ID,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         l.out_biz_amt     </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u989D\u5EA6\u5916\u4E1A\u52A1\u6279\u51C6\u91D1\u989D,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         l.out_standard_amt </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u989D\u5EA6\u5916\u6807\u51C6\u91D1\u989D,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         h.excess_flag     </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u8D85\u989D\u6807\u8BC6</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>   cust_dh_reimburse_line l</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>JOIN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>   cust_dh_reimburse_head r </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ON</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> r.id </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> l.head_id</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>JOIN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>   policy_standard_head h </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ON</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> h.id </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> r.policy_standard_id</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  r.hz_approve_status </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>RUN</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    NVL(h.excess_flag, </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>N</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&lt;&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>Y</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    l.out_biz_amt </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> l.out_standard_amt</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ORDER  BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> l.id </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>DESC</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u951918\uFF1A\u989D\u5EA6\u5185\u6807\u51C6\u4E3A0\uFF0C\u4E0D\u5141\u8BB8\u4FEE\u6539</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u533A\u57DF\u7ECF\u7406\u5BA1\u6279\u8282\u70B9\u4FDD\u5B58\uFF0CbizNodeUpdate\u6821\u9A8C\u67D0\u884CinStandardAmt&lt;=0\u65F6\u533A\u57DF\u7ECF\u7406\u4FEE\u6539\u4E86inBizAmt</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u989D\u5EA6\u5185\u6807\u51C6\u91D1\u989D\u4E3A0\u8BF4\u660E\u653F\u7B56\u672A\u914D\u7F6E\u8BE5\u884C\u989D\u5EA6\u5185\u6807\u51C6\uFF0C\u4E0D\u5E94\u6709\u989D\u5EA6\u5185\u62A5\u9500\u91D1\u989D\u3002\u82E5\u533A\u57DF\u7ECF\u7406\u5728\u6807\u51C6\u4E3A0\u7684\u884C\u4E0A\u4FEE\u6539\u4E1A\u52A1\u6279\u51C6\u91D1\u989D\uFF0C\u6821\u9A8C\u4E0D\u901A\u8FC7\u629B\u5F02\u5E38\u3002\u9700\u68C0\u67E5\u653F\u7B56\u914D\u7F6E\u662F\u5426\u9057\u6F0F\u989D\u5EA6\u5185\u6807\u51C6\u3002</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> l.id              </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u884CID,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         l.head_id         </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u62A5\u9500\u5355ID,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         l.in_standard_amt </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u989D\u5EA6\u5185\u6807\u51C6\u91D1\u989D,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         l.in_biz_amt      </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u989D\u5EA6\u5185\u4E1A\u52A1\u6279\u51C6\u91D1\u989D</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>   cust_dh_reimburse_line l</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  NVL(l.in_standard_amt, </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>0</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>0</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    NVL(l.in_biz_amt, </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>0</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>0</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ORDER  BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> l.id </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>DESC</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u951919\uFF1A\u989D\u5EA6\u5916\u6807\u51C6\u4E3A0\uFF0C\u4E0D\u5141\u8BB8\u4FEE\u6539</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u533A\u57DF\u7ECF\u7406\u5BA1\u6279\u8282\u70B9\u4FDD\u5B58\uFF0CbizNodeUpdate\u6821\u9A8C\u67D0\u884CoutStandardAmt&lt;=0\u65F6\u533A\u57DF\u7ECF\u7406\u4FEE\u6539\u4E86outBizAmt</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u4E0E\u989D\u5EA6\u5185\u6821\u9A8C\u540C\u7406\uFF0C\u989D\u5EA6\u5916\u6807\u51C6\u91D1\u989D\u4E3A0\u8BF4\u660E\u653F\u7B56\u672A\u914D\u7F6E\u8BE5\u884C\u989D\u5EA6\u5916\u6807\u51C6\u3002\u82E5\u533A\u57DF\u7ECF\u7406\u5728\u6807\u51C6\u4E3A0\u7684\u884C\u4E0A\u4FEE\u6539\u4E1A\u52A1\u6279\u51C6\u91D1\u989D\uFF0C\u6821\u9A8C\u4E0D\u901A\u8FC7\u629B\u5F02\u5E38\u3002\u9700\u68C0\u67E5\u653F\u7B56\u914D\u7F6E\u662F\u5426\u9057\u6F0F\u989D\u5EA6\u5916\u6807\u51C6\u3002</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> l.id              </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u884CID,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         l.head_id         </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u62A5\u9500\u5355ID,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         l.out_standard_amt </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u989D\u5EA6\u5916\u6807\u51C6\u91D1\u989D,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         l.out_biz_amt     </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u989D\u5EA6\u5916\u4E1A\u52A1\u6279\u51C6\u91D1\u989D</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>   cust_dh_reimburse_line l</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  NVL(l.out_standard_amt, </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>0</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>0</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    NVL(l.out_biz_amt, </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>0</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>0</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ORDER  BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> l.id </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>DESC</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u951920\uFF1A\u4FEE\u6539\u7684\u884C\u8868id\u4E0D\u80FD\u4E3A\u7A7A</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u5BA1\u6279\u8282\u70B9\u4FDD\u5B58\uFF0CnodeEditSave/bizNodeUpdate\u6821\u9A8C\u67D0\u884ClineId\u4E3A\u7A7A</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u5BA1\u6279\u8282\u70B9\u4FEE\u6539\u884C\u8868\u6570\u636E\u9700\u6309lineId\u5B9A\u4F4D\u66F4\u65B0\u8BB0\u5F55\u3002\u82E5\u524D\u7AEF\u672A\u4F20lineId\uFF08\u5982\u65B0\u589E\u884C\u672A\u4FDD\u5B58\u5373\u63D0\u4EA4\u5BA1\u6279\u3001\u884C\u6570\u636E\u672A\u7ED1\u5B9AID\uFF09\u3001\u6216lineId\u5B57\u6BB5\u540D\u62FC\u5199\u9519\u8BEF\uFF0C\u6821\u9A8C\u4E0D\u901A\u8FC7\u629B\u5F02\u5E38\u3002\u9700\u786E\u8BA4\u884C\u6570\u636E\u5B8C\u6574\u3002</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> l.id         </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u884CID,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         l.head_id    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u62A5\u9500\u5355ID,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         l.terminal_id </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u95E8\u5E97ID</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>   cust_dh_reimburse_line l</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  l.id </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ORDER  BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> l.head_id </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>DESC</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u951921\uFF1A\u83B7\u53D6\u884C\u6570\u636E\u5931\u8D25</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u5BA1\u6279\u8282\u70B9\u4FDD\u5B58\uFF0CbizNodeUpdate\u6309lineId\u67E5\u8BE2\u539F\u884C\u6570\u636EoriginLine\u8FD4\u56DEnull</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u5BA1\u6279\u8282\u70B9\u4FEE\u6539\u884C\u8868\u9700\u5148\u67E5\u8BE2\u539F\u884C\u6570\u636E\u7528\u4E8E\u6821\u9A8C\u548C\u540C\u6B65\u66F4\u65B0\u3002\u82E5\u884C\u6570\u636E\u5728\u5BA1\u6279\u671F\u95F4\u88AB\u5220\u9664\u3001lineId\u4F20\u503C\u9519\u8BEF\u3001\u6216\u5E76\u53D1\u573A\u666F\u4E0B\u88AB\u6E05\u7406\uFF0CoriginLine\u4E3Anull\u629B\u5F02\u5E38\u3002\u9700\u5237\u65B0\u9875\u9762\u91CD\u8BD5\u3002</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> l.id         </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u884CID,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         l.head_id    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u62A5\u9500\u5355ID,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         l.terminal_id </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u95E8\u5E97ID,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         l.apply_num  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7533\u8BF7\u6570\u91CF</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>   cust_dh_reimburse_line l</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  l.id </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> #{\u4F20\u5165\u7684lineId};</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u951922\uFF1A\u5F53\u524D\u5BA1\u6279\u8282\u70B9\u4E0D\u80FD\u4FEE\u6539</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u5BA1\u6279\u8282\u70B9\u4FDD\u5B58\uFF0CnodeEditSave\u6839\u636EtaskName\u672A\u5339\u914D\u5230\u533A\u57DF\u7ECF\u7406/\u9500\u552E\u4F1A\u8BA1\u4EFB\u4E00\u8282\u70B9</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u5BA1\u6279\u8282\u70B9\u4FDD\u5B58\u9700\u6839\u636E\u5F53\u524DtaskName\u5206\u53D1\u5230\u5BF9\u5E94\u66F4\u65B0\u65B9\u6CD5\u3002\u82E5taskName\u672A\u914D\u7F6E\u3001\u5DE5\u4F5C\u6D41\u8282\u70B9\u540D\u79F0\u4E0E\u4EE3\u7801\u9884\u671F\u4E0D\u4E00\u81F4\u3001\u6216\u5F53\u524D\u7528\u6237\u4E0D\u5728\u5BA1\u6279\u8282\u70B9\u4E0A\uFF0C\u65E0\u6CD5\u5339\u914D\u5230\u5904\u7406\u65B9\u6CD5\u5373\u629B\u5F02\u5E38\u3002\u9700\u786E\u8BA4\u5F53\u524DtaskName\u662F\u5426\u4E3A\u9884\u671F\u503C\uFF08\u533A\u57DF\u7ECF\u7406\u5BA1\u6279/\u9500\u552E\u4F1A\u8BA1\u5BA1\u6279\uFF09\u3002</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> r.id               </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u62A5\u9500\u5355ID,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         r.reimburse_code   </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u62A5\u9500\u5355\u53F7,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         r.hz_instance_id   </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5DE5\u4F5C\u6D41\u5B9E\u4F8BID,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         r.hz_approve_status </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5BA1\u6279\u72B6\u6001,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         r.last_update_date </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u6700\u540E\u66F4\u65B0\u65F6\u95F4</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>   cust_dh_reimburse_head r</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  r.hz_approve_status </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>RUN</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ORDER  BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> r.last_update_date </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>DESC</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u951923\uFF1A\u95E8\u5934\u62A5\u9500\u7533\u8BF7\u4E0D\u5B58\u5728</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u5DE5\u4F5C\u6D41\u56DE\u8C03(onWfComplete/wfProcSubmit/onWfBreak)\u6309id\u67E5\u8BE2CUST_DH_REIMBURSE_HEAD\u8FD4\u56DEnull</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u5DE5\u4F5C\u6D41\u56DE\u8C03\u9700\u67E5\u8BE2\u62A5\u9500\u5355\u66F4\u65B0\u5BA1\u6279\u72B6\u6001\u3001\u8BA1\u7B97\u62A5\u9500\u91D1\u989D\u7B49\u3002\u82E5\u56DE\u8C03\u671F\u95F4\u62A5\u9500\u5355\u88AB\u5220\u9664\u3001id\u4F20\u503C\u9519\u8BEF\u3001\u6216OA\u56DE\u8C03\u62A5\u6587\u4E0EDMS\u4E0D\u4E00\u81F4\uFF0C\u67E5\u8BE2\u8FD4\u56DE\u7A7A\u629B\u5F02\u5E38\u3002\u9700\u6838\u67E5\u62A5\u9500\u5355\u6570\u636E\u4E0E\u5DE5\u4F5C\u6D41\u5B9E\u4F8B\u4E00\u81F4\u6027\u3002</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> r.id               </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u62A5\u9500\u5355ID,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         r.reimburse_code   </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u62A5\u9500\u5355\u53F7,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         r.hz_approve_status </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5BA1\u6279\u72B6\u6001,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         r.hz_instance_id   </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5DE5\u4F5C\u6D41\u5B9E\u4F8BID,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         r.last_update_date </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u6700\u540E\u66F4\u65B0\u65F6\u95F4</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>   cust_dh_reimburse_head r</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  r.hz_approve_status </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>RUN</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    r.last_update_date </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&lt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>SYSDATE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>-</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>1</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ORDER  BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> r.last_update_date </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>DESC</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u951924\uFF1A\u5355\u636Eid \u4E0D\u80FD\u4E3A\u7A7A</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u66F4\u65B0/\u5220\u9664\u64CD\u4F5C\uFF0CcheckUpOrDelete\u6821\u9A8C\u4F20\u5165\u7684id\u53C2\u6570\u4E3Anull</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u66F4\u65B0\u548C\u5220\u9664\u64CD\u4F5C\u9700\u6309\u5355\u636EID\u5B9A\u4F4D\u62A5\u9500\u5355\u3002\u82E5\u524D\u7AEF\u672A\u4F20id\uFF08\u5982\u5217\u8868\u884C\u672A\u7ED1\u5B9AID\u3001\u64CD\u4F5C\u4E0A\u4E0B\u6587\u4E22\u5931\uFF09\u3001\u6216id\u5B57\u6BB5\u540D\u62FC\u5199\u9519\u8BEF\uFF0C\u540E\u7AEF\u6821\u9A8Cid\u4E3A\u7A7A\u5373\u629B\u5F02\u5E38\u3002\u9700\u786E\u8BA4\u8BF7\u6C42\u53C2\u6570\u4E2D\u5305\u542B\u6709\u6548\u7684\u5355\u636EID\u3002</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> r.id              </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u62A5\u9500\u5355ID,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         r.reimburse_code  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u62A5\u9500\u5355\u53F7,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         r.hz_approve_status </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5BA1\u6279\u72B6\u6001</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>   cust_dh_reimburse_head r</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  r.id </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ORDER  BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> r.creation_date </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>DESC</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u951925\uFF1A\u5F53\u524D\u6570\u636E\u5F02\u5E38\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u66F4\u65B0/\u5220\u9664\u64CD\u4F5C\uFF0CcheckUpOrDelete\u6309id\u67E5\u8BE2CUST_DH_REIMBURSE_HEAD\u8FD4\u56DEnull</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u66F4\u65B0\u3001\u5220\u9664\u64CD\u4F5C\u9700\u5148\u6821\u9A8C\u62A5\u9500\u5355\u5B58\u5728\u3002\u82E5\u62A5\u9500\u5355\u5728\u64CD\u4F5C\u671F\u95F4\u88AB\u5176\u4ED6\u7528\u6237\u5220\u9664\u3001id\u4F20\u503C\u9519\u8BEF\u3001\u6216\u5E76\u53D1\u573A\u666F\u4E0B\u88AB\u6E05\u7406\uFF0C\u67E5\u8BE2\u8FD4\u56DE\u7A7A\u629B\u5F02\u5E38\u3002\u9700\u5237\u65B0\u5217\u8868\u9875\u91CD\u65B0\u83B7\u53D6\u6709\u6548\u6570\u636E\u3002</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> r.id              </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u62A5\u9500\u5355ID,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         r.reimburse_code  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u62A5\u9500\u5355\u53F7,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         r.hz_approve_status </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5BA1\u6279\u72B6\u6001,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         r.last_update_date </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u6700\u540E\u66F4\u65B0\u65F6\u95F4</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>   cust_dh_reimburse_head r</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  r.id </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> #{\u4F20\u5165\u7684id};</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u951926\uFF1A\u6570\u636E\u5F02\u5E38,\u8BF7\u7A0D\u540E\u518D\u8BD5</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1AdoSelect\u67E5\u8BE2\u8BE6\u60C5\u65F6\uFF0C\u6309id\u67E5\u8BE2CUST_DH_REIMBURSE_HEAD\u8FD4\u56DEnull</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u8BE6\u60C5\u9875\u52A0\u8F7D\u9700\u67E5\u8BE2\u62A5\u9500\u5355\u5B8C\u6574\u4FE1\u606F\uFF08\u542B\u884C\u8868\u3001\u9644\u4EF6\u7B49\uFF09\u3002\u82E5\u62A5\u9500\u5355\u5728\u64CD\u4F5C\u671F\u95F4\u88AB\u5220\u9664\u3001id\u4F20\u503C\u9519\u8BEF\uFF08\u5982\u524D\u7AEF\u7F13\u5B58\u5931\u6548ID\uFF09\u3001\u6216\u5E76\u53D1\u573A\u666F\u4E0B\u88AB\u6E05\u7406\uFF0C\u67E5\u8BE2\u8FD4\u56DE\u7A7A\u629B\u5F02\u5E38\u3002\u9700\u8FD4\u56DE\u5217\u8868\u9875\u91CD\u65B0\u8FDB\u5165\u8BE6\u60C5\u3002</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> r.id              </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u62A5\u9500\u5355ID,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         r.reimburse_code  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u62A5\u9500\u5355\u53F7,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         r.hz_approve_status </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5BA1\u6279\u72B6\u6001,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         r.last_update_date </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u6700\u540E\u66F4\u65B0\u65F6\u95F4</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>   cust_dh_reimburse_head r</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  r.id </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> #{\u4F20\u5165\u7684id};</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u951927\uFF1A\u5355\u636E\u4FE1\u606F\u4E0D\u5408\u6CD5</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u5DE5\u4F5C\u6D41\u56DE\u8C03(wfProcSubmit/onWfComplete\u7B49)\u65F6\uFF0C\u6821\u9A8C\u62A5\u9500\u5355\u72B6\u6001\u6216\u6570\u636E\u4E0D\u5408\u6CD5</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u5DE5\u4F5C\u6D41\u56DE\u8C03\u9700\u6821\u9A8C\u62A5\u9500\u5355\u6570\u636E\u5408\u6CD5\u6027\u540E\u66F4\u65B0\u5BA1\u6279\u72B6\u6001\u3002\u82E5\u62A5\u9500\u5355\u72B6\u6001\u4E0E\u5DE5\u4F5C\u6D41\u64CD\u4F5C\u4E0D\u5339\u914D\uFF08\u5982\u5DF2APPROVED\u7684\u62A5\u9500\u5355\u518D\u6B21\u63D0\u4EA4\uFF09\u3001\u6570\u636E\u88AB\u975E\u6CD5\u4FEE\u6539\u3001\u6216\u5DE5\u4F5C\u6D41\u5B9E\u4F8B\u4E0E\u62A5\u9500\u5355\u72B6\u6001\u4E0D\u4E00\u81F4\uFF0C\u6821\u9A8C\u4E0D\u901A\u8FC7\u629B\u5F02\u5E38\u3002\u9700\u6838\u67E5\u62A5\u9500\u5355\u72B6\u6001\u4E0E\u5DE5\u4F5C\u6D41\u5B9E\u4F8B\u4E00\u81F4\u6027\u3002</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> r.id               </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u62A5\u9500\u5355ID,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         r.reimburse_code   </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u62A5\u9500\u5355\u53F7,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         r.hz_approve_status </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5BA1\u6279\u72B6\u6001,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         r.hz_instance_id   </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5DE5\u4F5C\u6D41\u5B9E\u4F8BID,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         r.last_update_date </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u6700\u540E\u66F4\u65B0\u65F6\u95F4</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>   cust_dh_reimburse_head r</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  r.hz_approve_status </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>RUN</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ORDER  BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> r.last_update_date </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>DESC</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u951928\uFF1A\u62A5\u9500\u5355\u4E0D\u5B58\u5728</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u63D0\u4EA4\u5BA1\u6279getCustLimit\u83B7\u53D6\u7ECF\u9500\u5546\u9650\u989D\u65F6\uFF0C\u6309id\u67E5\u8BE2CUST_DH_REIMBURSE_HEAD\u8FD4\u56DEnull</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u63D0\u4EA4\u5BA1\u6279\u9700\u67E5\u8BE2\u62A5\u9500\u5355\u83B7\u53D6\u7ECF\u9500\u5546ID\u548C\u653F\u7B56ID\uFF0C\u8FDB\u800C\u83B7\u53D6\u7ECF\u9500\u5546\u9650\u989D\u3002\u82E5\u62A5\u9500\u5355\u5728\u63D0\u4EA4\u671F\u95F4\u88AB\u5220\u9664\u3001id\u4F20\u503C\u9519\u8BEF\u3001\u6216\u5E76\u53D1\u573A\u666F\u4E0B\u88AB\u6E05\u7406\uFF0C\u67E5\u8BE2\u8FD4\u56DE\u7A7A\u629B\u5F02\u5E38\u3002\u9700\u6838\u67E5\u62A5\u9500\u5355\u6570\u636E\u5B8C\u6574\u6027\u3002</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> r.id               </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u62A5\u9500\u5355ID,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         r.reimburse_code   </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u62A5\u9500\u5355\u53F7,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         r.customer_id      </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7ECF\u9500\u5546ID,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         r.policy_standard_id </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u653F\u7B56ID,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         r.hz_approve_status </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5BA1\u6279\u72B6\u6001</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>   cust_dh_reimburse_head r</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  r.id </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> #{\u4F20\u5165\u7684id};</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u951929\uFF1A\u8BF7\u5148\u9009\u62E9\u7ECF\u9500\u5546\u548C\u5E97\u9762\u5EFA\u8BBE\u8865\u8D34\u653F\u7B56</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u6DFB\u52A0\u95E8\u5E97\u88C5\u4FEE\u660E\u7EC6\u884C\u65F6\uFF0C\u524D\u7AEF\u6821\u9A8C\u672A\u9009\u62E9\u7ECF\u9500\u5546(customerId\u4E3A\u7A7A)\u6216\u653F\u7B56(policyStandardId\u4E3A\u7A7A)</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u6DFB\u52A0\u660E\u7EC6\u884C\u9700\u57FA\u4E8E\u7ECF\u9500\u5546\u548C\u653F\u7B56\u8054\u52A8\u5E26\u51FA\u95E8\u5E97LOV\u548C\u8865\u8D34\u9879\u76EELOV\u3002\u82E5\u7528\u6237\u672A\u9009\u62E9\u7ECF\u9500\u5546\u6216\u653F\u7B56\u5373\u70B9\u51FB\u6DFB\u52A0\u884C\uFF0C\u65E0\u6CD5\u89E6\u53D1\u8054\u52A8\u67E5\u8BE2\uFF0C\u524D\u7AEFmessage.error\u63D0\u793A\u3002\u9700\u5148\u9009\u62E9\u7ECF\u9500\u5546\u548C\u5E97\u9762\u5EFA\u8BBE\u8865\u8D34\u653F\u7B56\u3002</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> r.id                 </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u62A5\u9500\u5355ID,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         r.reimburse_code     </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u62A5\u9500\u5355\u53F7,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         r.customer_id        </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7ECF\u9500\u5546ID,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         r.policy_standard_id </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u653F\u7B56ID,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         r.hz_approve_status  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5BA1\u6279\u72B6\u6001</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>   cust_dh_reimburse_head r</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  r.hz_approve_status </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>NEW</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    (r.customer_id </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>OR</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> r.policy_standard_id </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ORDER  BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> r.creation_date </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>DESC</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u951930\uFF1A\u8BF7\u9009\u62E9\u8981\u5220\u9664\u7684\u884C</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u5220\u9664\u95E8\u5E97\u88C5\u4FEE\u660E\u7EC6\u884C\u65F6\uFF0C\u524D\u7AEF\u6821\u9A8C\u672A\u9009\u62E9\u4EFB\u4F55\u884C\u5373\u70B9\u51FB\u5220\u9664</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u5220\u9664\u884C\u64CD\u4F5C\u9700\u9009\u4E2D\u76EE\u6807\u884C\u3002\u82E5\u7528\u6237\u672A\u5728\u884C\u8868\u683C\u4E2D\u9009\u62E9\u4EFB\u4F55\u884C\u5373\u70B9\u51FB\u5220\u9664\u6309\u94AE\uFF0C\u524D\u7AEFmessage.error\u63D0\u793A\u3002\u9700\u5148\u9009\u4E2D\u8981\u5220\u9664\u7684\u884C\u518D\u70B9\u51FB\u5220\u9664\u3002</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> r.id              </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u62A5\u9500\u5355ID,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         r.reimburse_code  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u62A5\u9500\u5355\u53F7,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         (</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}>COUNT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>1</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>          </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>   cust_dh_reimburse_line l</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>          </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  l.head_id </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> r.id) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u884C\u8868\u8BB0\u5F55\u6570</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>   cust_dh_reimburse_head r</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  r.hz_approve_status </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>NEW</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ORDER  BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> r.creation_date </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>DESC</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u951931\uFF1A\u8BF7\u81F3\u5C11\u6DFB\u52A0\u4E00\u6761\u95E8\u5E97\u4FE1\u606F</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u70B9\u51FB&quot;\u4FDD\u5B58&quot;\u6216&quot;\u63D0\u4EA4&quot;\u6309\u94AE\uFF0C\u524D\u7AEFhandleSave/handleSaveWithWorkflow\u6821\u9A8CterminalData\u4E3A\u7A7A\u6216length=0</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u62A5\u9500\u5355\u9700\u81F3\u5C11\u4E00\u884C\u95E8\u5E97\u88C5\u4FEE\u660E\u7EC6\uFF0C\u524D\u7AEF\u901A\u8FC7terminalTableDSRef\u7BA1\u7406\u884C\u6570\u636E\u3002\u82E5\u7528\u6237\u672A\u6DFB\u52A0\u660E\u7EC6\u884C\u3001\u884C\u6570\u636E\u88AB\u8BEF\u6E05\u7A7A\u3001\u6216\u884C\u6570\u636E\u6E90\u672A\u6B63\u786E\u7ED1\u5B9A\uFF0CterminalData\u4E3A\u7A7A\u524D\u7AEFmessage.error\u63D0\u793A\u3002\u9700\u6DFB\u52A0\u81F3\u5C11\u4E00\u884C\u95E8\u5E97\u88C5\u4FEE\u660E\u7EC6\u3002</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> r.id              </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u62A5\u9500\u5355ID,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         r.reimburse_code  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u62A5\u9500\u5355\u53F7,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         (</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}>COUNT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>1</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>          </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>   cust_dh_reimburse_line l</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>          </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  l.head_id </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> r.id) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u884C\u8868\u8BB0\u5F55\u6570</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>   cust_dh_reimburse_head r</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  r.hz_approve_status </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>NEW</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NOT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>EXISTS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>1</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> cust_dh_reimburse_line l </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> l.head_id </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> r.id)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ORDER  BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> r.creation_date </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>DESC</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
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
                createVNode("td", null, "\u62A5\u9500\u653F\u7B56\u4E0D\u80FD\u4E3A\u7A7A"),
                createVNode("td", null, "\u4FDD\u5B58"),
                createVNode("td", null, "\u672A\u9009\u62E9\u8865\u8D34\u653F\u7B56\u3002\u9009\u62E9\u6709\u6548\u7684\u5E97\u9762\u5EFA\u8BBE\u8865\u8D34\u653F\u7B56"),
                createVNode("td", null, "\u9AD8"),
                createVNode("td", null, "[\u67E5\u770B](#\u62A5\u95191\u62A5\u9500\u653F\u7B56\u4E0D\u80FD\u4E3A\u7A7A)")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u62A5\u9500\u653F\u7B56\u5DF2\u5931\u6548\uFF0C\u8BF7\u91CD\u65B0\u9009\u62E9\u6709\u6548\u62A5\u9500\u653F\u7B56"),
                createVNode("td", null, "\u4FDD\u5B58"),
                createVNode("td", null, "\u653F\u7B56valid!=2\u3002\u9009\u62E9\u6709\u6548\u7684\u653F\u7B56"),
                createVNode("td", null, "\u9AD8"),
                createVNode("td", null, "[\u67E5\u770B](#\u62A5\u95192\u62A5\u9500\u653F\u7B56\u5DF2\u5931\u6548\u8BF7\u91CD\u65B0\u9009\u62E9\u6709\u6548\u62A5\u9500\u653F\u7B56)")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7ECF\u9500\u5546\u6CD5\u4EBA\u4E0D\u80FD\u4E3A\u7A7A"),
                createVNode("td", null, "\u4FDD\u5B58"),
                createVNode("td", null, "\u672A\u9009\u62E9\u7ECF\u9500\u5546\u6216\u6CD5\u4EBA\u3002\u9009\u62E9\u7ECF\u9500\u5546\u3001\u4EA4\u6613\u516C\u53F8\u3001\u6CD5\u4EBA\u5BA2\u6237"),
                createVNode("td", null, "\u9AD8"),
                createVNode("td", null, "[\u67E5\u770B](#\u62A5\u95193\u7ECF\u9500\u5546\u6CD5\u4EBA\u4E0D\u80FD\u4E3A\u7A7A)")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u62A5\u9500\u653F\u7B56\u5DF2\u8FC7\u671F\uFF0C\u8BF7\u91CD\u65B0\u9009\u62E9\u6709\u6548\u62A5\u9500\u653F\u7B56"),
                createVNode("td", null, "\u4FDD\u5B58"),
                createVNode("td", null, "\u653F\u7B56\u4E0D\u5728\u6709\u6548\u671F\u5185\u3002\u9009\u62E9\u6709\u6548\u671F\u5185\u7684\u653F\u7B56"),
                createVNode("td", null, "\u9AD8"),
                createVNode("td", null, "[\u67E5\u770B](#\u62A5\u95194\u62A5\u9500\u653F\u7B56\u5DF2\u8FC7\u671F\u8BF7\u91CD\u65B0\u9009\u62E9\u6709\u6548\u62A5\u9500\u653F\u7B56)")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u8BF7\u9009\u62E9\u62A5\u9500\u7C7B\u578B"),
                createVNode("td", null, "\u4FDD\u5B58"),
                createVNode("td", null, "\u672A\u9009\u62E9\u62A5\u9500\u7C7B\u578B\u3002\u9009\u62E9\u989D\u5EA6\u5185\u6216\u989D\u5EA6\u5916"),
                createVNode("td", null, "\u4E2D"),
                createVNode("td", null, "[\u67E5\u770B](#\u62A5\u95195\u8BF7\u9009\u62E9\u62A5\u9500\u7C7B\u578B)")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u62A5\u9500\u660E\u7EC6\u4E0D\u80FD\u4E3A\u7A7A"),
                createVNode("td", null, "\u4FDD\u5B58"),
                createVNode("td", null, "\u672A\u6DFB\u52A0\u95E8\u5E97\u88C5\u4FEE\u660E\u7EC6\u3002\u6DFB\u52A0\u81F3\u5C11\u4E00\u884C\u660E\u7EC6"),
                createVNode("td", null, "\u9AD8"),
                createVNode("td", null, "[\u67E5\u770B](#\u62A5\u95196\u62A5\u9500\u660E\u7EC6\u4E0D\u80FD\u4E3A\u7A7A)")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5355\u72EC\u95E8\u5E97\u7533\u8BF7\uFF0C\u53EA\u80FD\u62A5\u9500\u4E00\u4E2A\u95E8\u5E97"),
                createVNode("td", null, "\u4FDD\u5B58"),
                createVNode("td", null, "\u653F\u7B56\u8981\u6C42\u5355\u72EC\u95E8\u5E97\u7533\u8BF7\u4F46\u9009\u62E9\u4E86\u591A\u4E2A\u95E8\u5E97\u3002\u53EA\u4FDD\u7559\u4E00\u4E2A\u95E8\u5E97"),
                createVNode("td", null, "\u4E2D"),
                createVNode("td", null, "[\u67E5\u770B](#\u62A5\u95197\u5355\u72EC\u95E8\u5E97\u7533\u8BF7\u53EA\u80FD\u62A5\u9500\u4E00\u4E2A\u95E8\u5E97)")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7533\u8BF7\u6570\u91CF\u5FC5\u987B\u5927\u4E8E0"),
                createVNode("td", null, "\u4FDD\u5B58"),
                createVNode("td", null, "\u7533\u8BF7\u6570\u91CF\u4E3A0\u3002\u586B\u5199\u5927\u4E8E0\u7684\u6570\u91CF"),
                createVNode("td", null, "\u9AD8"),
                createVNode("td", null, "[\u67E5\u770B](#\u62A5\u95198\u7533\u8BF7\u6570\u91CF\u5FC5\u987B\u5927\u4E8E0)")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u62A5\u9500\u7533\u8BF7\u6570\u91CF\u5FC5\u987B\u5728\u653F\u7B56\u6570\u91CF\u8303\u56F4\u5185"),
                createVNode("td", null, "\u4FDD\u5B58"),
                createVNode("td", null, "\u6570\u91CF\u8D85\u51FA\u653F\u7B56\u8303\u56F4\u3002\u4FEE\u6539\u6570\u91CF\u81F3[minNum, maxNum]\u8303\u56F4"),
                createVNode("td", null, "\u9AD8"),
                createVNode("td", null, "[\u67E5\u770B](#\u62A5\u95199\u62A5\u9500\u7533\u8BF7\u6570\u91CF\u5FC5\u987B\u5728\u653F\u7B56\u6570\u91CF\u8303\u56F4\u5185)")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u8BF7\u4E0A\u4F20\u88C5\u4FEE\u524D\u6587\u4EF6"),
                createVNode("td", null, "\u4FDD\u5B58"),
                createVNode("td", null, "\u672A\u4E0A\u4F20\u88C5\u4FEE\u524D\u7167\u7247\u3002\u4E0A\u4F20\u88C5\u4FEE\u524D\u7167\u7247"),
                createVNode("td", null, "\u9AD8"),
                createVNode("td", null, "[\u67E5\u770B](#\u62A5\u951910\u8BF7\u4E0A\u4F20\u88C5\u4FEE\u524D\u6587\u4EF6)")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u8BF7\u4E0A\u4F20\u88C5\u4FEE\u540E\u6587\u4EF6"),
                createVNode("td", null, "\u4FDD\u5B58"),
                createVNode("td", null, "\u672A\u4E0A\u4F20\u88C5\u4FEE\u540E\u7167\u7247\u3002\u4E0A\u4F20\u88C5\u4FEE\u540E\u7167\u7247"),
                createVNode("td", null, "\u9AD8"),
                createVNode("td", null, "[\u67E5\u770B](#\u62A5\u951911\u8BF7\u4E0A\u4F20\u88C5\u4FEE\u540E\u6587\u4EF6)")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u62A5\u9500\u660E\u7EC6\u65E0\u6CD5\u5173\u8054\u5230\u653F\u7B56"),
                createVNode("td", null, "\u4FDD\u5B58"),
                createVNode("td", null, "\u884C\u8868policyLineId\u65E0\u6CD5\u5339\u914D\u653F\u7B56\u660E\u7EC6\u3002\u91CD\u65B0\u9009\u62E9\u8865\u8D34\u9879\u76EE"),
                createVNode("td", null, "\u9AD8"),
                createVNode("td", null, "[\u67E5\u770B](#\u62A5\u951912\u62A5\u9500\u660E\u7EC6\u65E0\u6CD5\u5173\u8054\u5230\u653F\u7B56)")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u83B7\u53D6\u6CD5\u4EBA\u4FE1\u606F\u5931\u8D25"),
                createVNode("td", null, "\u4FDD\u5B58"),
                createVNode("td", null, "\u7ECF\u9500\u5546+\u4EA4\u6613\u516C\u53F8+\u6CD5\u4EBA\u7EC4\u5408\u4E0D\u5B58\u5728\u3002\u68C0\u67E5\u57FA\u7840\u6570\u636E"),
                createVNode("td", null, "\u9AD8"),
                createVNode("td", null, "[\u67E5\u770B](#\u62A5\u951913\u83B7\u53D6\u6CD5\u4EBA\u4FE1\u606F\u5931\u8D25)")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "X\u5E74\u7684\u989D\u5EA6\u5916\u9884\u7B97\u4E0D\u8DB3\uFF0C\u6709\u7591\u95EE\u8BF7\u8054\u7CFB\u8D22\u52A1"),
                createVNode("td", null, "\u63D0\u4EA4"),
                createVNode("td", null, "\u989D\u5EA6\u5916\u5B9E\u9645\u62A5\u9500\u91D1\u989D\u8D85\u8FC7\u5269\u4F59\u9884\u7B97\u3002\u8054\u7CFB\u8D22\u52A1\u786E\u8BA4\u9884\u7B97\u6216\u51CF\u5C11\u7533\u8BF7\u91D1\u989D"),
                createVNode("td", null, "\u9AD8"),
                createVNode("td", null, "[\u67E5\u770B](#\u62A5\u951914x\u5E74\u7684\u989D\u5EA6\u5916\u9884\u7B97\u4E0D\u8DB3\u6709\u7591\u95EE\u8BF7\u8054\u7CFB\u8D22\u52A1)")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5F53\u524D\u989D\u5EA6\u5916\u8D85\u9650\u5904\u7406\u4E0D\u5B58\u5728\uFF0C\u8BF7\u8054\u7CFB\u76F8\u5173\u4EBA\u5458\u5904\u7406"),
                createVNode("td", null, "\u63D0\u4EA4"),
                createVNode("td", null, "\u653F\u7B56extraBudgetExcessStrategy\u914D\u7F6E\u9519\u8BEF\u3002\u8054\u7CFB\u7BA1\u7406\u5458\u4FEE\u6B63\u914D\u7F6E"),
                createVNode("td", null, "\u9AD8"),
                createVNode("td", null, "[\u67E5\u770B](#\u62A5\u951915\u5F53\u524D\u989D\u5EA6\u5916\u8D85\u9650\u5904\u7406\u4E0D\u5B58\u5728\u8BF7\u8054\u7CFB\u76F8\u5173\u4EBA\u5458\u5904\u7406)")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u975E\u8D85\u989D\u62A5\u9500\uFF0C\u989D\u5EA6\u5185\u91D1\u989D\u4E0D\u5141\u8BB8\u5927\u4E8E\u653F\u7B56\u6807\u51C6"),
                createVNode("td", null, "\u533A\u57DF\u7ECF\u7406\u5BA1\u6279"),
                createVNode("td", null, "\u975E\u8D85\u989D\u62A5\u9500\u65F6\u4E1A\u52A1\u6279\u51C6\u91D1\u989D\u8D85\u6807\u51C6\u3002\u4FEE\u6539\u91D1\u989D\u81F3\u2264\u6807\u51C6\u91D1\u989D"),
                createVNode("td", null, "\u4E2D"),
                createVNode("td", null, "[\u67E5\u770B](#\u62A5\u951916\u975E\u8D85\u989D\u62A5\u9500\u989D\u5EA6\u5185\u91D1\u989D\u4E0D\u5141\u8BB8\u5927\u4E8E\u653F\u7B56\u6807\u51C6)")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u975E\u8D85\u989D\u62A5\u9500\uFF0C\u989D\u5EA6\u5916\u91D1\u989D\u4E0D\u5141\u8BB8\u5927\u4E8E\u653F\u7B56\u6807\u51C6"),
                createVNode("td", null, "\u533A\u57DF\u7ECF\u7406\u5BA1\u6279"),
                createVNode("td", null, "\u975E\u8D85\u989D\u62A5\u9500\u65F6\u4E1A\u52A1\u6279\u51C6\u91D1\u989D\u8D85\u6807\u51C6\u3002\u4FEE\u6539\u91D1\u989D\u81F3\u2264\u6807\u51C6\u91D1\u989D"),
                createVNode("td", null, "\u4E2D"),
                createVNode("td", null, "[\u67E5\u770B](#\u62A5\u951917\u975E\u8D85\u989D\u62A5\u9500\u989D\u5EA6\u5916\u91D1\u989D\u4E0D\u5141\u8BB8\u5927\u4E8E\u653F\u7B56\u6807\u51C6)")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u989D\u5EA6\u5185\u6807\u51C6\u4E3A0\uFF0C\u4E0D\u5141\u8BB8\u4FEE\u6539"),
                createVNode("td", null, "\u533A\u57DF\u7ECF\u7406\u5BA1\u6279"),
                createVNode("td", null, "\u989D\u5EA6\u5185\u6807\u51C6\u91D1\u989D\u4E3A0\u65F6\u4FEE\u6539\u4E1A\u52A1\u6279\u51C6\u91D1\u989D\u3002\u68C0\u67E5\u653F\u7B56\u914D\u7F6E"),
                createVNode("td", null, "\u4E2D"),
                createVNode("td", null, "[\u67E5\u770B](#\u62A5\u951918\u989D\u5EA6\u5185\u6807\u51C6\u4E3A0\u4E0D\u5141\u8BB8\u4FEE\u6539)")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u989D\u5EA6\u5916\u6807\u51C6\u4E3A0\uFF0C\u4E0D\u5141\u8BB8\u4FEE\u6539"),
                createVNode("td", null, "\u533A\u57DF\u7ECF\u7406\u5BA1\u6279"),
                createVNode("td", null, "\u989D\u5EA6\u5916\u6807\u51C6\u91D1\u989D\u4E3A0\u65F6\u4FEE\u6539\u4E1A\u52A1\u6279\u51C6\u91D1\u989D\u3002\u68C0\u67E5\u653F\u7B56\u914D\u7F6E"),
                createVNode("td", null, "\u4E2D"),
                createVNode("td", null, "[\u67E5\u770B](#\u62A5\u951919\u989D\u5EA6\u5916\u6807\u51C6\u4E3A0\u4E0D\u5141\u8BB8\u4FEE\u6539)")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u4FEE\u6539\u7684\u884C\u8868id\u4E0D\u80FD\u4E3A\u7A7A"),
                createVNode("td", null, "\u5BA1\u6279\u8282\u70B9\u4FDD\u5B58"),
                createVNode("td", null, "\u884C\u8868\u7F3A\u5C11ID\u3002\u786E\u8BA4\u884C\u6570\u636E\u5B8C\u6574"),
                createVNode("td", null, "\u4F4E"),
                createVNode("td", null, "[\u67E5\u770B](#\u62A5\u951920\u4FEE\u6539\u7684\u884C\u8868id\u4E0D\u80FD\u4E3A\u7A7A)")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u83B7\u53D6\u884C\u6570\u636E\u5931\u8D25"),
                createVNode("td", null, "\u5BA1\u6279\u8282\u70B9\u4FDD\u5B58"),
                createVNode("td", null, "\u884CID\u65E0\u6CD5\u5339\u914D\u539F\u6570\u636E\u3002\u5237\u65B0\u9875\u9762\u91CD\u8BD5"),
                createVNode("td", null, "\u4F4E"),
                createVNode("td", null, "[\u67E5\u770B](#\u62A5\u951921\u83B7\u53D6\u884C\u6570\u636E\u5931\u8D25)")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5F53\u524D\u5BA1\u6279\u8282\u70B9\u4E0D\u80FD\u4FEE\u6539"),
                createVNode("td", null, "\u5BA1\u6279\u8282\u70B9\u4FDD\u5B58"),
                createVNode("td", null, "\u672A\u5339\u914D\u5230\u6B63\u786E\u7684\u5BA1\u6279\u8282\u70B9\u3002\u786E\u8BA4\u5F53\u524DtaskName"),
                createVNode("td", null, "\u4F4E"),
                createVNode("td", null, "[\u67E5\u770B](#\u62A5\u951922\u5F53\u524D\u5BA1\u6279\u8282\u70B9\u4E0D\u80FD\u4FEE\u6539)")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u95E8\u5934\u62A5\u9500\u7533\u8BF7\u4E0D\u5B58\u5728"),
                createVNode("td", null, "\u5DE5\u4F5C\u6D41\u56DE\u8C03"),
                createVNode("td", null, "\u62A5\u9500\u5355\u4E0D\u5B58\u5728\u6216\u5DF2\u5220\u9664\u3002\u68C0\u67E5\u6570\u636E"),
                createVNode("td", null, "\u4F4E"),
                createVNode("td", null, "[\u67E5\u770B](#\u62A5\u951923\u95E8\u5934\u62A5\u9500\u7533\u8BF7\u4E0D\u5B58\u5728)")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5355\u636Eid \u4E0D\u80FD\u4E3A\u7A7A"),
                createVNode("td", null, "\u66F4\u65B0/\u5220\u9664"),
                createVNode("td", null, "\u672A\u4F20\u5165\u5355\u636EID\u3002\u786E\u8BA4\u64CD\u4F5C\u4E0A\u4E0B\u6587"),
                createVNode("td", null, "\u4F4E"),
                createVNode("td", null, "[\u67E5\u770B](#\u62A5\u951924\u5355\u636Eid\u4E0D\u80FD\u4E3A\u7A7A)")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5F53\u524D\u6570\u636E\u5F02\u5E38\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5"),
                createVNode("td", null, "\u66F4\u65B0/\u5220\u9664"),
                createVNode("td", null, "\u6570\u636E\u4E0D\u5B58\u5728\u6216\u5DF2\u88AB\u5220\u9664\u3002\u5237\u65B0\u5217\u8868\u9875"),
                createVNode("td", null, "\u4F4E"),
                createVNode("td", null, "[\u67E5\u770B](#\u62A5\u951925\u5F53\u524D\u6570\u636E\u5F02\u5E38\u8BF7\u7A0D\u540E\u518D\u8BD5)")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6570\u636E\u5F02\u5E38,\u8BF7\u7A0D\u540E\u518D\u8BD5"),
                createVNode("td", null, "\u67E5\u8BE2\u8BE6\u60C5"),
                createVNode("td", null, "\u62A5\u9500\u5355\u4E0D\u5B58\u5728\u6216\u5DF2\u88AB\u5220\u9664"),
                createVNode("td", null, "\u9AD8"),
                createVNode("td", null, "[\u67E5\u770B](#\u62A5\u951926\u6570\u636E\u5F02\u5E38\u8BF7\u7A0D\u540E\u518D\u8BD5)")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5355\u636E\u4FE1\u606F\u4E0D\u5408\u6CD5"),
                createVNode("td", null, "\u5DE5\u4F5C\u6D41\u56DE\u8C03"),
                createVNode("td", null, "\u62A5\u9500\u5355\u72B6\u6001\u6216\u6570\u636E\u4E0D\u5408\u6CD5"),
                createVNode("td", null, "\u9AD8"),
                createVNode("td", null, "[\u67E5\u770B](#\u62A5\u951927\u5355\u636E\u4FE1\u606F\u4E0D\u5408\u6CD5)")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u62A5\u9500\u5355\u4E0D\u5B58\u5728"),
                createVNode("td", null, "\u83B7\u53D6\u7ECF\u9500\u5546\u9650\u989D"),
                createVNode("td", null, "\u63D0\u4EA4\u65F6\u6309id\u67E5\u8BE2CUST_DH_REIMBURSE_HEAD\u8FD4\u56DEnull"),
                createVNode("td", null, "\u9AD8"),
                createVNode("td", null, "[\u67E5\u770B](#\u62A5\u951928\u62A5\u9500\u5355\u4E0D\u5B58\u5728)")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u8BF7\u5148\u9009\u62E9\u7ECF\u9500\u5546\u548C\u5E97\u9762\u5EFA\u8BBE\u8865\u8D34\u653F\u7B56"),
                createVNode("td", null, "\u6DFB\u52A0\u660E\u7EC6\u884C"),
                createVNode("td", null, "\u672A\u9009\u62E9\u7ECF\u9500\u5546\u6216\u653F\u7B56\u5373\u6DFB\u52A0\u884C"),
                createVNode("td", null, "\u4E2D"),
                createVNode("td", null, "[\u67E5\u770B](#\u62A5\u951929\u8BF7\u5148\u9009\u62E9\u7ECF\u9500\u5546\u548C\u5E97\u9762\u5EFA\u8BBE\u8865\u8D34\u653F\u7B56)")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u8BF7\u9009\u62E9\u8981\u5220\u9664\u7684\u884C"),
                createVNode("td", null, "\u5220\u9664\u660E\u7EC6\u884C"),
                createVNode("td", null, "\u672A\u9009\u62E9\u884C\u5373\u70B9\u51FB\u5220\u9664"),
                createVNode("td", null, "\u4F4E"),
                createVNode("td", null, "[\u67E5\u770B](#\u62A5\u951930\u8BF7\u9009\u62E9\u8981\u5220\u9664\u7684\u884C)")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u8BF7\u81F3\u5C11\u6DFB\u52A0\u4E00\u6761\u95E8\u5E97\u4FE1\u606F"),
                createVNode("td", null, "\u4FDD\u5B58/\u63D0\u4EA4"),
                createVNode("td", null, "terminalData\u4E3A\u7A7A"),
                createVNode("td", null, "\u9AD8"),
                createVNode("td", null, "[\u67E5\u770B](#\u62A5\u951931\u8BF7\u81F3\u5C11\u6DFB\u52A0\u4E00\u6761\u95E8\u5E97\u4FE1\u606F)")
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95191\uFF1A\u62A5\u9500\u653F\u7B56\u4E0D\u80FD\u4E3A\u7A7A"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode('\uFF1A\u70B9\u51FB"\u4FDD\u5B58"\u6309\u94AE\uFF0CcheckParams\u6821\u9A8CpolicyStandardHead\u4E3Anull\uFF08\u672A\u9009\u62E9\u8865\u8D34\u653F\u7B56\uFF09')
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u95E8\u5934\u5C55\u677F\u62A5\u9500\u5FC5\u987B\u5173\u8054\u6709\u6548\u7684\u5E97\u9762\u5EFA\u8BBE\u8865\u8D34\u653F\u7B56\uFF0C\u6309\u653F\u7B56\u6807\u51C6\u8BA1\u7B97\u62A5\u9500\u91D1\u989D\u3002\u82E5\u7528\u6237\u672A\u901A\u8FC7LOV(AE.POLICY_STANDARD_VALID_HEAD)\u9009\u62E9\u653F\u7B56\u3001policyStandardId\u4F20\u503C\u4E22\u5931\u3001\u6216\u524D\u7AEF\u672A\u89E6\u53D1\u8054\u52A8\u67E5\u8BE2\uFF0CpolicyStandardHead\u4E3Anull\u629B\u5F02\u5E38\u3002\u9700\u5728\u65B0\u589E\u9875\u9762\u9009\u62E9\u6709\u6548\u7684\u8865\u8D34\u653F\u7B56\u3002")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " h.id           "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u653F\u7B56ID,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         h.policy_name  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u653F\u7B56\u540D\u79F0,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         h.valid        "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u6709\u6548\u72B6\u6001,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         h.start_date   "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5F00\u59CB\u65E5\u671F,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         h.end_date     "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7ED3\u675F\u65E5\u671F")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "   policy_standard_head h")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  h.entid "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " #{\u5F53\u524D\u7528\u6237\u7EC4\u7EC7ID}")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    h.valid "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "2")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    h.start_date "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "<="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#C792EA" } }, "SYSDATE")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    h.end_date "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, ">="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#C792EA" } }, "SYSDATE")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ORDER  BY"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " h.start_date "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "DESC"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95192\uFF1A\u62A5\u9500\u653F\u7B56\u5DF2\u5931\u6548\uFF0C\u8BF7\u91CD\u65B0\u9009\u62E9\u6709\u6548\u62A5\u9500\u653F\u7B56"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode('\uFF1A\u70B9\u51FB"\u4FDD\u5B58"\u6309\u94AE\uFF0CcheckParams\u6821\u9A8CpolicyStandardHead.getValid()\u22602')
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u653F\u7B56valid=2\u8868\u793A\u6709\u6548\uFF0C\u5176\u4ED6\u503C\u8868\u793A\u5931\u6548/\u8349\u7A3F/\u4F5C\u5E9F\u3002\u82E5\u7528\u6237\u9009\u62E9\u4E86\u5DF2\u5931\u6548\u7684\u653F\u7B56\uFF08\u5982\u653F\u7B56\u88AB\u7BA1\u7406\u5458\u7F6E\u4E3A\u65E0\u6548\u540E\u7528\u6237\u4ECD\u4F7F\u7528\u524D\u7AEF\u7F13\u5B58LOV\uFF09\u3001\u6216\u653F\u7B56valid\u5B57\u6BB5\u914D\u7F6E\u5F02\u5E38\uFF0C\u6821\u9A8C\u4E0D\u901A\u8FC7\u629B\u5F02\u5E38\u3002\u9700\u91CD\u65B0\u9009\u62E9\u6709\u6548(valid=2)\u653F\u7B56\u3002")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " h.id           "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u653F\u7B56ID,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         h.policy_name  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u653F\u7B56\u540D\u79F0,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         h.valid        "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u6709\u6548\u72B6\u6001,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "CASE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " h.valid "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHEN"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "2"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "THEN"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "\u6709\u6548"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ELSE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "\u5931\u6548"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "END"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u72B6\u6001\u8BF4\u660E")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "   policy_standard_head h")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  h.id "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " #{\u4F20\u5165\u7684policyStandardId};")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95193\uFF1A\u7ECF\u9500\u5546\u6CD5\u4EBA\u4E0D\u80FD\u4E3A\u7A7A"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode('\uFF1A\u70B9\u51FB"\u4FDD\u5B58"\u6309\u94AE\uFF0CcheckParams\u6821\u9A8CcustomerId\u6216customerLegalId\u4E3A\u7A7A')
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u62A5\u9500\u5355\u9700\u5173\u8054\u7ECF\u9500\u5546\u548C\u4EA4\u6613\u516C\u53F8\u6CD5\u4EBA\u7EC4\u5408\uFF0C\u7528\u4E8E\u540E\u7EED\u63A8\u9001MBO\u548C\u8D44\u91D1\u6C60\u3002\u82E5\u7528\u6237\u672A\u9009\u62E9\u7ECF\u9500\u5546\u3001\u672A\u9009\u62E9\u4EA4\u6613\u516C\u53F8/\u6CD5\u4EBA\u3001\u6216\u8054\u52A8\u67E5\u8BE2getCustLegal\u672A\u8FD4\u56DEcustomerLegalId\uFF0C\u6821\u9A8C\u4E0D\u901A\u8FC7\u629B\u5F02\u5E38\u3002\u9700\u4F9D\u6B21\u9009\u62E9\u7ECF\u9500\u5546\u2192\u4EA4\u6613\u516C\u53F8\u2192\u6CD5\u4EBA\u5BA2\u6237\u3002")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " r.id                 "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u62A5\u9500\u5355ID,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         r.reimburse_code     "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u62A5\u9500\u5355\u53F7,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         r.customer_id        "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7ECF\u9500\u5546ID,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         r.customer_legal_id  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u6CD5\u4EBA\u4E2D\u95F4\u8868ID,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         r.trading_company_code "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u4EA4\u6613\u516C\u53F8\u7F16\u7801")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "   cust_dh_reimburse_head r")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  r.hz_approve_status "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "NEW"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    (r.customer_id "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NULL"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "OR"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " r.customer_legal_id "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NULL"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ")")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ORDER  BY"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " r.creation_date "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "DESC"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95194\uFF1A\u62A5\u9500\u653F\u7B56\u5DF2\u8FC7\u671F\uFF0C\u8BF7\u91CD\u65B0\u9009\u62E9\u6709\u6548\u62A5\u9500\u653F\u7B56"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode('\uFF1A\u70B9\u51FB"\u4FDD\u5B58"\u6309\u94AE\uFF0CcheckParams\u6821\u9A8CpolicyStandardHead.startDate>\u5F53\u524D\u65E5\u671F\u6216endDate<\u5F53\u524D\u65E5\u671F')
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u653F\u7B56\u6709\u6709\u6548\u671F\u9650\u5236\uFF0C\u4EC5\u5728[startDate, endDate]\u533A\u95F4\u5185\u6709\u6548\u3002\u82E5\u7528\u6237\u9009\u62E9\u4E86\u5DF2\u8FC7\u671F\u6216\u672A\u751F\u6548\u7684\u653F\u7B56\uFF08\u5982\u653F\u7B56endDate<\u5F53\u524D\u65E5\u671F\u5DF2\u7ED3\u675F\u3001\u6216startDate>\u5F53\u524D\u65E5\u671F\u5C1A\u672A\u751F\u6548\uFF09\uFF0C\u6821\u9A8C\u4E0D\u901A\u8FC7\u629B\u5F02\u5E38\u3002\u9700\u9009\u62E9\u5F53\u524D\u65E5\u671F\u5728\u6709\u6548\u671F\u5185\u7684\u653F\u7B56\u3002")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " h.id           "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u653F\u7B56ID,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         h.policy_name  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u653F\u7B56\u540D\u79F0,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         h.start_date   "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5F00\u59CB\u65E5\u671F,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         h.end_date     "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7ED3\u675F\u65E5\u671F,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         "),
                  createVNode("span", { style: { "color": "#C792EA" } }, "SYSDATE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "        "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5F53\u524D\u65E5\u671F")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "   policy_standard_head h")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  h.valid "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "2")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    (h.start_date "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#C792EA" } }, "SYSDATE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "OR"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " h.end_date "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#C792EA" } }, "SYSDATE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ")")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ORDER  BY"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " h.end_date "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "DESC"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95195\uFF1A\u8BF7\u9009\u62E9\u62A5\u9500\u7C7B\u578B"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode('\uFF1A\u70B9\u51FB"\u4FDD\u5B58"\u6309\u94AE\uFF0CcheckParams\u6821\u9A8CbxType\u4E3A\u7A7A')
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u62A5\u9500\u7C7B\u578BbxType\u533A\u5206\u989D\u5EA6\u5185(1)/\u989D\u5EA6\u5916(2)\uFF0C\u51B3\u5B9A\u540E\u7EED\u91D1\u989D\u8BA1\u7B97\u548C\u9884\u7B97\u63A7\u5236\u903B\u8F91\u3002\u82E5\u7528\u6237\u672A\u9009\u62E9\u62A5\u9500\u7C7B\u578B\u3001\u6216\u653F\u7B56budgetType\u672A\u6B63\u786E\u8054\u52A8\u8D4B\u503C\uFF0CbxType\u4E3A\u7A7A\u629B\u5F02\u5E38\u3002\u9700\u9009\u62E9\u62A5\u9500\u7C7B\u578B\u3002")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " r.id           "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u62A5\u9500\u5355ID,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         r.reimburse_code "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u62A5\u9500\u5355\u53F7,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         r.bx_type      "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u62A5\u9500\u7C7B\u578B,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         r.policy_standard_id "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u653F\u7B56ID")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "   cust_dh_reimburse_head r")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  r.hz_approve_status "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "NEW"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    r.bx_type "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NULL")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ORDER  BY"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " r.creation_date "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "DESC"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95196\uFF1A\u62A5\u9500\u660E\u7EC6\u4E0D\u80FD\u4E3A\u7A7A"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode('\uFF1A\u70B9\u51FB"\u4FDD\u5B58"\u6309\u94AE\uFF0CcheckParams/computeBxLine\u6821\u9A8Clines\u96C6\u5408\u4E3A\u7A7A')
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u62A5\u9500\u5355\u9700\u81F3\u5C11\u4E00\u884C\u95E8\u5E97\u88C5\u4FEE\u660E\u7EC6\uFF0C\u542B\u95E8\u5E97\u3001\u8865\u8D34\u9879\u76EE\u3001\u6570\u91CF\u3001\u91D1\u989D\u3001\u88C5\u4FEE\u524D\u540E\u7167\u7247\u7B49\u3002\u82E5\u7528\u6237\u672A\u6DFB\u52A0\u660E\u7EC6\u884C\u3001\u524D\u7AEF\u884C\u6570\u636E\u6E90\u672A\u6B63\u786E\u7ED1\u5B9A\u3001\u6216\u884C\u6570\u636E\u88AB\u8BEF\u6E05\u7A7A\uFF0Clines\u4E3A\u7A7A\u629B\u5F02\u5E38\u3002\u9700\u6DFB\u52A0\u81F3\u5C11\u4E00\u884C\u660E\u7EC6\u3002")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " r.id              "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u62A5\u9500\u5355ID,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         r.reimburse_code  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u62A5\u9500\u5355\u53F7,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         ("),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "SELECT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#82AAFF" } }, "COUNT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "("),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "1"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ")")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "          "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "   cust_dh_reimburse_line l")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "          "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  l.head_id "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " r.id) "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u884C\u8868\u8BB0\u5F55\u6570")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "   cust_dh_reimburse_head r")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  r.hz_approve_status "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "NEW"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NOT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "EXISTS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " ("),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "SELECT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "1"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " cust_dh_reimburse_line l "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " l.head_id "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " r.id)")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ORDER  BY"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " r.creation_date "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "DESC"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95197\uFF1A\u5355\u72EC\u95E8\u5E97\u7533\u8BF7\uFF0C\u53EA\u80FD\u62A5\u9500\u4E00\u4E2A\u95E8\u5E97"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode('\uFF1A\u70B9\u51FB"\u4FDD\u5B58"\u6309\u94AE\uFF0CcheckParams\u6821\u9A8C\u653F\u7B56singleStoreApplyFlag=Y\u65F6\uFF0C\u884C\u8868\u4E2DterminalId\u53BB\u91CD\u540E\u6570\u91CF\u22601')
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u90E8\u5206\u653F\u7B56\u8981\u6C42\u6BCF\u6B21\u62A5\u9500\u53EA\u80FD\u7533\u8BF7\u4E00\u4E2A\u95E8\u5E97\uFF0C\u9632\u6B62\u6279\u91CF\u62A5\u9500\u6DF7\u7528\u6807\u51C6\u3002\u82E5\u653F\u7B56singleStoreApplyFlag=Y\u4F46\u7528\u6237\u5728\u591A\u884C\u660E\u7EC6\u4E2D\u9009\u62E9\u4E86\u4E0D\u540C\u95E8\u5E97\uFF0C\u6821\u9A8C\u4E0D\u901A\u8FC7\u629B\u5F02\u5E38\u3002\u9700\u53EA\u4FDD\u7559\u4E00\u4E2A\u95E8\u5E97\u7684\u660E\u7EC6\u884C\u3002")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " r.id              "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u62A5\u9500\u5355ID,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         r.reimburse_code  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u62A5\u9500\u5355\u53F7,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         r.policy_standard_id "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u653F\u7B56ID,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         "),
                  createVNode("span", { style: { "color": "#82AAFF" } }, "COUNT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "("),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "DISTINCT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " l.terminal_id) "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u95E8\u5E97\u53BB\u91CD\u6570")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "   cust_dh_reimburse_head r")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "JOIN"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "   cust_dh_reimburse_line l "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ON"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " l.head_id "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " r.id")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  r.hz_approve_status "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "NEW"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "GROUP  BY"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " r.id, r.reimburse_code, r.policy_standard_id")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "HAVING"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#82AAFF" } }, "COUNT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "("),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "DISTINCT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " l.terminal_id) "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "1")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ORDER  BY"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " r.creation_date "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "DESC"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95198\uFF1A\u7533\u8BF7\u6570\u91CF\u5FC5\u987B\u5927\u4E8E0"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode('\uFF1A\u70B9\u51FB"\u4FDD\u5B58"\u6309\u94AE\uFF0CcomputeBxLine\u6821\u9A8C\u67D0\u884CapplyNum=0\u6216\u4E3A\u7A7A')
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u7533\u8BF7\u6570\u91CF\u7528\u4E8E\u8BA1\u7B97\u6807\u51C6\u91D1\u989D(=\u6807\u51C6\u5355\u4EF7\xD7\u6570\u91CF)\uFF0C\u5FC5\u987B\u4E3A\u6B63\u6570\u3002\u82E5\u7528\u6237\u672A\u586B\u5199\u6570\u91CF\u3001\u6570\u91CF\u88AB\u8BEF\u7F6E0\u3001\u6216\u524D\u7AEFNumberField\u672A\u505A\u5FC5\u586B\u6821\u9A8C\uFF0CapplyNum=0\u629B\u5F02\u5E38\u3002\u9700\u586B\u5199\u5927\u4E8E0\u7684\u6570\u91CF\u3002")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " l.id            "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u884CID,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         l.head_id       "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u62A5\u9500\u5355ID,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         l.terminal_id   "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u95E8\u5E97ID,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         l.apply_num     "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7533\u8BF7\u6570\u91CF,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         l.decorate_project "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u88C5\u4FEE\u9879\u76EE")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "   cust_dh_reimburse_line l")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  NVL(l.apply_num, "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "0")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ORDER  BY"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " l.id "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "DESC"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95199\uFF1A\u62A5\u9500\u7533\u8BF7\u6570\u91CF\u5FC5\u987B\u5728\u653F\u7B56\u6570\u91CF\u8303\u56F4\u5185"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode('\uFF1A\u70B9\u51FB"\u4FDD\u5B58"\u6309\u94AE\uFF0CcomputeBxLine\u6821\u9A8C\u67D0\u884CapplyNum<minNum\u6216applyNum>maxNum')
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u653F\u7B56\u660E\u7EC6\u884C\u89C4\u5B9A\u4E86\u6570\u91CF\u4E0A\u4E0B\u9650(minNum, maxNum)\uFF0C\u786E\u4FDD\u62A5\u9500\u6570\u91CF\u5728\u653F\u7B56\u5141\u8BB8\u8303\u56F4\u5185\u3002\u82E5\u7528\u6237\u586B\u5199\u7684\u6570\u91CF\u8D85\u51FA[minNum, maxNum]\u533A\u95F4\uFF08\u5982\u653F\u7B56\u96501~5\u4F46\u586B\u4E8610\uFF09\uFF0C\u6821\u9A8C\u4E0D\u901A\u8FC7\u629B\u5F02\u5E38\u3002\u9700\u4FEE\u6539\u6570\u91CF\u81F3\u653F\u7B56\u8303\u56F4\u5185\u3002")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " l.id            "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u884CID,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         l.head_id       "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u62A5\u9500\u5355ID,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         l.apply_num     "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7533\u8BF7\u6570\u91CF,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         p.min_num       "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u653F\u7B56\u6570\u91CF\u4E0B\u9650,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         p.max_num       "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u653F\u7B56\u6570\u91CF\u4E0A\u9650")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "   cust_dh_reimburse_line l")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "JOIN"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "   policy_standard_line p "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ON"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " p.id "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " l.policy_line_id")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  l.apply_num "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " p.min_num "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "OR"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " l.apply_num "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " p.max_num")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ORDER  BY"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " l.id "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "DESC"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u951910\uFF1A\u8BF7\u4E0A\u4F20\u88C5\u4FEE\u524D\u6587\u4EF6"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode('\uFF1A\u70B9\u51FB"\u4FDD\u5B58"\u6309\u94AE\uFF0CcomputeBxLine\u6821\u9A8C\u67D0\u884CbeforeDocId\u4E3A\u7A7A')
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u88C5\u4FEE\u524D\u7167\u7247\u7528\u4E8E\u8BC1\u660E\u95E8\u5E97\u88C5\u4FEE\u524D\u539F\u8C8C\uFF0C\u662F\u62A5\u9500\u5FC5\u8981\u51ED\u8BC1\u3002\u82E5\u7528\u6237\u672A\u4E0A\u4F20\u88C5\u4FEE\u524D\u7167\u7247\u3001\u4E0A\u4F20\u540EbeforeDocId\u672A\u6B63\u786E\u56DE\u586B\u3001\u6216\u9644\u4EF6\u88AB\u8BEF\u5220\u9664\uFF0CbeforeDocId\u4E3A\u7A7A\u629B\u5F02\u5E38\u3002\u9700\u4E0A\u4F20\u88C5\u4FEE\u524D\u7167\u7247\u3002")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " l.id            "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u884CID,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         l.head_id       "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u62A5\u9500\u5355ID,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         l.terminal_id   "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u95E8\u5E97ID,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         l.before_doc_id "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u88C5\u4FEE\u524D\u7167\u7247UUID,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         l.before_doc_name "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u88C5\u4FEE\u524D\u7167\u7247\u540D")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "   cust_dh_reimburse_line l")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  l.before_doc_id "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NULL")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ORDER  BY"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " l.id "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "DESC"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u951911\uFF1A\u8BF7\u4E0A\u4F20\u88C5\u4FEE\u540E\u6587\u4EF6"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode('\uFF1A\u70B9\u51FB"\u4FDD\u5B58"\u6309\u94AE\uFF0CcomputeBxLine\u6821\u9A8C\u67D0\u884CafterDocId\u4E3A\u7A7A')
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u88C5\u4FEE\u540E\u7167\u7247\u7528\u4E8E\u8BC1\u660E\u95E8\u5E97\u88C5\u4FEE\u5B8C\u6210\u60C5\u51B5\uFF0C\u662F\u62A5\u9500\u5FC5\u8981\u51ED\u8BC1\u3002\u82E5\u7528\u6237\u672A\u4E0A\u4F20\u88C5\u4FEE\u540E\u7167\u7247\u3001\u4E0A\u4F20\u540EafterDocId\u672A\u6B63\u786E\u56DE\u586B\u3001\u6216\u9644\u4EF6\u88AB\u8BEF\u5220\u9664\uFF0CafterDocId\u4E3A\u7A7A\u629B\u5F02\u5E38\u3002\u9700\u4E0A\u4F20\u88C5\u4FEE\u540E\u7167\u7247\u3002")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " l.id            "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u884CID,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         l.head_id       "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u62A5\u9500\u5355ID,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         l.terminal_id   "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u95E8\u5E97ID,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         l.after_doc_id  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u88C5\u4FEE\u540E\u7167\u7247UUID,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         l.after_doc_name "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u88C5\u4FEE\u540E\u7167\u7247\u540D")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "   cust_dh_reimburse_line l")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  l.after_doc_id "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NULL")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ORDER  BY"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " l.id "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "DESC"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u951912\uFF1A\u62A5\u9500\u660E\u7EC6\u65E0\u6CD5\u5173\u8054\u5230\u653F\u7B56"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode('\uFF1A\u70B9\u51FB"\u4FDD\u5B58"\u6309\u94AE\uFF0CcomputeBxLine\u6309policyLineId\u67E5\u8BE2POLICY_STANDARD_LINE\u8FD4\u56DEnull\uFF08targetPolicy\u4E3Anull\uFF09')
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u62A5\u9500\u660E\u7EC6\u884C\u9700\u5173\u8054\u653F\u7B56\u660E\u7EC6\u884C\u83B7\u53D6\u6807\u51C6\u91D1\u989D\u3001\u6570\u91CF\u8303\u56F4\u7B49\u3002\u82E5policyLineId\u4F20\u503C\u9519\u8BEF\uFF08\u5982\u524D\u7AEF\u7F13\u5B58\u4E86\u5DF2\u5931\u6548\u653F\u7B56\u884C\uFF09\u3001\u653F\u7B56\u660E\u7EC6\u884C\u88AB\u5220\u9664\u3001\u6216\u653F\u7B56\u884C\u4E0E\u653F\u7B56\u5934\u4E0D\u5339\u914D\uFF0CtargetPolicy\u4E3Anull\u629B\u5F02\u5E38\u3002\u9700\u91CD\u65B0\u9009\u62E9\u8865\u8D34\u9879\u76EE\u3002")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " l.id              "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u884CID,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         l.head_id         "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u62A5\u9500\u5355ID,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         l.policy_line_id  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u653F\u7B56\u884CID,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         l.decorate_project "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u88C5\u4FEE\u9879\u76EE")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "   cust_dh_reimburse_line l")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  l.policy_line_id "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NOT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NULL")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NOT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "EXISTS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " ("),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "SELECT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "1"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " policy_standard_line p "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " p.id "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " l.policy_line_id)")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ORDER  BY"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " l.id "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "DESC"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u951913\uFF1A\u83B7\u53D6\u6CD5\u4EBA\u4FE1\u606F\u5931\u8D25"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode('\uFF1A\u70B9\u51FB"\u4FDD\u5B58"\u6309\u94AE\uFF0CgetCustLegal\u6309\u7ECF\u9500\u5546+\u4EA4\u6613\u516C\u53F8+\u6CD5\u4EBA\u7EC4\u5408\u67E5\u8BE2\u8FD4\u56DEnull')
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u62A5\u9500\u5355\u9700\u5173\u8054\u4EA4\u6613\u516C\u53F8\u6CD5\u4EBA\u4E2D\u95F4\u8868\uFF0C\u7528\u4E8E\u540E\u7EED\u63A8\u9001MBO\u548C\u8D44\u91D1\u6C60\u3002\u82E5\u7ECF\u9500\u5546+\u4EA4\u6613\u516C\u53F8+\u6CD5\u4EBA\u7EC4\u5408\u5728\u4E2D\u95F4\u8868\u4E2D\u4E0D\u5B58\u5728\uFF08\u57FA\u7840\u6570\u636E\u672A\u7EF4\u62A4\u3001\u7EC4\u5408\u5173\u7CFB\u88AB\u5220\u9664\uFF09\u3001\u6216\u4F20\u503C\u9519\u8BEF\uFF0CgetCustLegal\u8FD4\u56DEnull\u629B\u5F02\u5E38\u3002\u9700\u68C0\u67E5\u7ECF\u9500\u5546\u3001\u4EA4\u6613\u516C\u53F8\u3001\u6CD5\u4EBA\u57FA\u7840\u6570\u636E\u5B8C\u6574\u6027\u3002")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " r.id                 "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u62A5\u9500\u5355ID,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         r.reimburse_code     "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u62A5\u9500\u5355\u53F7,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         r.customer_id        "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7ECF\u9500\u5546ID,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         r.trading_company_code "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u4EA4\u6613\u516C\u53F8\u7F16\u7801,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         r.customer_legal_id  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u6CD5\u4EBA\u4E2D\u95F4\u8868ID")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "   cust_dh_reimburse_head r")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  r.hz_approve_status "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "NEW"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    r.customer_legal_id "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NULL")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ORDER  BY"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " r.creation_date "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "DESC"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u951914\uFF1AX\u5E74\u7684\u989D\u5EA6\u5916\u9884\u7B97\u4E0D\u8DB3\uFF0C\u6709\u7591\u95EE\u8BF7\u8054\u7CFB\u8D22\u52A1"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode('\uFF1A\u70B9\u51FB"\u63D0\u4EA4"\u6309\u94AE\uFF0CvalidBxAmt\u6821\u9A8CuseExtraBudgetFlag=Y\u65F6\uFF0C\u5269\u4F59\u989D\u5EA6\u5916\u53EF\u7528\u9884\u7B97(viewOverBudgetAmt)-\u989D\u5EA6\u5916\u5B9E\u9645\u62A5\u9500\u91D1\u989D(outBxAmt)<0')
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u989D\u5EA6\u5916\u62A5\u9500\u5360\u7528\u5E74\u5EA6\u9884\u7B97\u603B\u989D\uFF0C\u9700\u786E\u4FDD\u9884\u7B97\u5145\u8DB3\u3002\u6821\u9A8C\u903B\u8F91\u67E5\u8BE2FIN_FEE_CHECK_BX_HEADER\u4E2D\u5F53\u524D\u5E74\u4EFD\u540C\u4E8B\u4E1A\u90E8\u7684\u5269\u4F59\u53EF\u7528\u9884\u7B97\uFF0C\u82E5\u672C\u6B21\u989D\u5EA6\u5916\u5B9E\u9645\u62A5\u9500\u91D1\u989D\u8D85\u8FC7\u5269\u4F59\u9884\u7B97\u5373\u629B\u5F02\u5E38\u3002\u5E38\u89C1\u6839\u56E0\uFF1A\u5E74\u5EA6\u9884\u7B97\u914D\u7F6E\u4E0D\u8DB3\u3001\u5386\u53F2\u62A5\u9500\u5355\u5360\u7528\u8FC7\u591A\u3001\u6216\u672C\u6B21\u7533\u8BF7\u91D1\u989D\u8FC7\u5927\u3002\u9700\u8054\u7CFB\u8D22\u52A1\u786E\u8BA4\u9884\u7B97\u6216\u51CF\u5C11\u7533\u8BF7\u91D1\u989D\u3002")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " b.bud_year              "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u9884\u7B97\u5E74\u5EA6,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         b.division_id           "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u4E8B\u4E1A\u90E8ID,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         b.total_amt             "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5E74\u5EA6\u603B\u9884\u7B97,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         NVL(("),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "SELECT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#82AAFF" } }, "SUM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "(r.out_bx_amt)")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "              "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "   cust_dh_reimburse_head r")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "              "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  r.year "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " b.bud_year")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "              "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    r.division_id "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " b.division_id")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "              "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    r.hz_approve_status "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IN"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " ("),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "RUN"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ","),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "APPROVED"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ","),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "RETURN"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ")), "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5DF2\u5360\u7528\u91D1\u989D,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         b.total_amt "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "-"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " NVL(("),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "SELECT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#82AAFF" } }, "SUM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "(r.out_bx_amt)")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "              "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "   cust_dh_reimburse_head r")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "              "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  r.year "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " b.bud_year")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "              "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    r.division_id "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " b.division_id")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "              "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    r.hz_approve_status "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IN"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " ("),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "RUN"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ","),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "APPROVED"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ","),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "RETURN"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ")), "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5269\u4F59\u53EF\u7528\u9884\u7B97")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "   fin_fee_check_bx_header b")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  b.fee_type_id "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "66014602")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    b.bud_year "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " #{\u5F53\u524D\u5E74\u4EFD}")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ORDER  BY"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " b.division_id;")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u951915\uFF1A\u5F53\u524D\u989D\u5EA6\u5916\u8D85\u9650\u5904\u7406\u4E0D\u5B58\u5728\uFF0C\u8BF7\u8054\u7CFB\u76F8\u5173\u4EBA\u5458\u5904\u7406"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode('\uFF1A\u70B9\u51FB"\u63D0\u4EA4"\u6309\u94AE\uFF0CcomputeLimitBxAmt\u6821\u9A8C\u653F\u7B56extraBudgetExcessStrategy\u975E1\u975E2')
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u9650\u989D\u6A21\u5F0F\u4E0B\u7ECF\u9500\u5546\u8D85\u989D\u65F6\u9700\u6309\u7B56\u7565\u5904\u7406\uFF1A1-\u8D85\u51FA\u4E0D\u8BA1(\u989D\u5EA6\u5185\u5B9E\u9645\u62A5\u9500=\u8D22\u52A1\u6279\u51C6)\u30012-\u8F6C\u989D\u5EA6\u5185(\u989D\u5EA6\u5185\u5B9E\u9645\u62A5\u9500=\u8D22\u52A1\u6279\u51C6-\u8D85\u9650\u91D1\u989D)\u3002\u82E5\u653F\u7B56extraBudgetExcessStrategy\u672A\u914D\u7F6E\u3001\u914D\u7F6E\u4E3A\u975E1\u975E2\u7684\u975E\u6CD5\u503C\u3001\u6216\u653F\u7B56\u88AB\u9519\u8BEF\u4FEE\u6539\uFF0C\u6821\u9A8C\u4E0D\u901A\u8FC7\u629B\u5F02\u5E38\u3002\u9700\u8054\u7CFB\u7BA1\u7406\u5458\u4FEE\u6B63\u653F\u7B56\u914D\u7F6E\u3002")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " h.id                       "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u653F\u7B56ID,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         h.policy_name              "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u653F\u7B56\u540D\u79F0,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         h.extra_budget_excess_strategy "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u8D85\u9650\u5904\u7406\u7B56\u7565,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         h.cust_limit_flag          "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7ECF\u9500\u5546\u9650\u989D\u6807\u8BC6")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "   policy_standard_head h")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  h.cust_limit_flag "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "Y"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    h.extra_budget_excess_strategy "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NOT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IN"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " ("),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "1"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ", "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "2"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ")")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ORDER  BY"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " h.id;")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u951916\uFF1A\u975E\u8D85\u989D\u62A5\u9500\uFF0C\u989D\u5EA6\u5185\u91D1\u989D\u4E0D\u5141\u8BB8\u5927\u4E8E\u653F\u7B56\u6807\u51C6"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u533A\u57DF\u7ECF\u7406\u5BA1\u6279\u8282\u70B9\u4FDD\u5B58\uFF0CbizNodeUpdate\u6821\u9A8C\u653F\u7B56excessFlag\u2260Y\u4E14newInBizAmt>=inStandardAmt")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u975E\u8D85\u989D\u62A5\u9500(excessFlag\u2260Y)\u65F6\uFF0C\u4E1A\u52A1\u6279\u51C6\u91D1\u989D\u4E0D\u80FD\u8D85\u8FC7\u653F\u7B56\u6807\u51C6\u91D1\u989D\uFF0C\u786E\u4FDD\u62A5\u9500\u5408\u89C4\u3002\u82E5\u533A\u57DF\u7ECF\u7406\u4FEE\u6539\u7684\u989D\u5EA6\u5185\u4E1A\u52A1\u6279\u51C6\u91D1\u989D\u8D85\u8FC7\u6807\u51C6\u91D1\u989D\u3001\u6216\u653F\u7B56excessFlag\u914D\u7F6E\u9519\u8BEF\u5BFC\u81F4\u6821\u9A8C\u903B\u8F91\u8BEF\u5224\uFF0C\u629B\u5F02\u5E38\u3002\u9700\u4FEE\u6539\u91D1\u989D\u81F3\u2264\u6807\u51C6\u91D1\u989D\u3002")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " l.id              "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u884CID,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         l.head_id         "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u62A5\u9500\u5355ID,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         l.in_biz_amt      "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u989D\u5EA6\u5185\u4E1A\u52A1\u6279\u51C6\u91D1\u989D,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         l.in_standard_amt "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u989D\u5EA6\u5185\u6807\u51C6\u91D1\u989D,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         h.excess_flag     "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u8D85\u989D\u6807\u8BC6")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "   cust_dh_reimburse_line l")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "JOIN"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "   cust_dh_reimburse_head r "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ON"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " r.id "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " l.head_id")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "JOIN"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "   policy_standard_head h "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ON"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " h.id "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " r.policy_standard_id")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  r.hz_approve_status "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "RUN"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    NVL(h.excess_flag, "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "N"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "<>"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "Y"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    l.in_biz_amt "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " l.in_standard_amt")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ORDER  BY"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " l.id "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "DESC"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u951917\uFF1A\u975E\u8D85\u989D\u62A5\u9500\uFF0C\u989D\u5EA6\u5916\u91D1\u989D\u4E0D\u5141\u8BB8\u5927\u4E8E\u653F\u7B56\u6807\u51C6"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u533A\u57DF\u7ECF\u7406\u5BA1\u6279\u8282\u70B9\u4FDD\u5B58\uFF0CbizNodeUpdate\u6821\u9A8C\u653F\u7B56excessFlag\u2260Y\u4E14newOutBizAmt>=outStandardAmt")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u4E0E\u989D\u5EA6\u5185\u6821\u9A8C\u540C\u7406\uFF0C\u975E\u8D85\u989D\u62A5\u9500\u65F6\u989D\u5EA6\u5916\u4E1A\u52A1\u6279\u51C6\u91D1\u989D\u4E0D\u80FD\u8D85\u8FC7\u653F\u7B56\u6807\u51C6\u91D1\u989D\u3002\u82E5\u533A\u57DF\u7ECF\u7406\u4FEE\u6539\u7684\u989D\u5EA6\u5916\u4E1A\u52A1\u6279\u51C6\u91D1\u989D\u8D85\u8FC7\u6807\u51C6\u91D1\u989D\uFF0C\u629B\u5F02\u5E38\u3002\u9700\u4FEE\u6539\u91D1\u989D\u81F3\u2264\u6807\u51C6\u91D1\u989D\u3002")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " l.id              "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u884CID,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         l.head_id         "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u62A5\u9500\u5355ID,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         l.out_biz_amt     "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u989D\u5EA6\u5916\u4E1A\u52A1\u6279\u51C6\u91D1\u989D,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         l.out_standard_amt "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u989D\u5EA6\u5916\u6807\u51C6\u91D1\u989D,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         h.excess_flag     "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u8D85\u989D\u6807\u8BC6")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "   cust_dh_reimburse_line l")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "JOIN"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "   cust_dh_reimburse_head r "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ON"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " r.id "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " l.head_id")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "JOIN"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "   policy_standard_head h "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ON"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " h.id "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " r.policy_standard_id")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  r.hz_approve_status "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "RUN"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    NVL(h.excess_flag, "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "N"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "<>"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "Y"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    l.out_biz_amt "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " l.out_standard_amt")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ORDER  BY"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " l.id "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "DESC"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u951918\uFF1A\u989D\u5EA6\u5185\u6807\u51C6\u4E3A0\uFF0C\u4E0D\u5141\u8BB8\u4FEE\u6539"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u533A\u57DF\u7ECF\u7406\u5BA1\u6279\u8282\u70B9\u4FDD\u5B58\uFF0CbizNodeUpdate\u6821\u9A8C\u67D0\u884CinStandardAmt<=0\u65F6\u533A\u57DF\u7ECF\u7406\u4FEE\u6539\u4E86inBizAmt")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u989D\u5EA6\u5185\u6807\u51C6\u91D1\u989D\u4E3A0\u8BF4\u660E\u653F\u7B56\u672A\u914D\u7F6E\u8BE5\u884C\u989D\u5EA6\u5185\u6807\u51C6\uFF0C\u4E0D\u5E94\u6709\u989D\u5EA6\u5185\u62A5\u9500\u91D1\u989D\u3002\u82E5\u533A\u57DF\u7ECF\u7406\u5728\u6807\u51C6\u4E3A0\u7684\u884C\u4E0A\u4FEE\u6539\u4E1A\u52A1\u6279\u51C6\u91D1\u989D\uFF0C\u6821\u9A8C\u4E0D\u901A\u8FC7\u629B\u5F02\u5E38\u3002\u9700\u68C0\u67E5\u653F\u7B56\u914D\u7F6E\u662F\u5426\u9057\u6F0F\u989D\u5EA6\u5185\u6807\u51C6\u3002")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " l.id              "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u884CID,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         l.head_id         "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u62A5\u9500\u5355ID,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         l.in_standard_amt "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u989D\u5EA6\u5185\u6807\u51C6\u91D1\u989D,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         l.in_biz_amt      "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u989D\u5EA6\u5185\u4E1A\u52A1\u6279\u51C6\u91D1\u989D")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "   cust_dh_reimburse_line l")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  NVL(l.in_standard_amt, "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "0")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    NVL(l.in_biz_amt, "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "0")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ORDER  BY"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " l.id "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "DESC"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u951919\uFF1A\u989D\u5EA6\u5916\u6807\u51C6\u4E3A0\uFF0C\u4E0D\u5141\u8BB8\u4FEE\u6539"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u533A\u57DF\u7ECF\u7406\u5BA1\u6279\u8282\u70B9\u4FDD\u5B58\uFF0CbizNodeUpdate\u6821\u9A8C\u67D0\u884CoutStandardAmt<=0\u65F6\u533A\u57DF\u7ECF\u7406\u4FEE\u6539\u4E86outBizAmt")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u4E0E\u989D\u5EA6\u5185\u6821\u9A8C\u540C\u7406\uFF0C\u989D\u5EA6\u5916\u6807\u51C6\u91D1\u989D\u4E3A0\u8BF4\u660E\u653F\u7B56\u672A\u914D\u7F6E\u8BE5\u884C\u989D\u5EA6\u5916\u6807\u51C6\u3002\u82E5\u533A\u57DF\u7ECF\u7406\u5728\u6807\u51C6\u4E3A0\u7684\u884C\u4E0A\u4FEE\u6539\u4E1A\u52A1\u6279\u51C6\u91D1\u989D\uFF0C\u6821\u9A8C\u4E0D\u901A\u8FC7\u629B\u5F02\u5E38\u3002\u9700\u68C0\u67E5\u653F\u7B56\u914D\u7F6E\u662F\u5426\u9057\u6F0F\u989D\u5EA6\u5916\u6807\u51C6\u3002")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " l.id              "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u884CID,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         l.head_id         "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u62A5\u9500\u5355ID,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         l.out_standard_amt "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u989D\u5EA6\u5916\u6807\u51C6\u91D1\u989D,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         l.out_biz_amt     "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u989D\u5EA6\u5916\u4E1A\u52A1\u6279\u51C6\u91D1\u989D")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "   cust_dh_reimburse_line l")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  NVL(l.out_standard_amt, "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "0")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    NVL(l.out_biz_amt, "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "0")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ORDER  BY"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " l.id "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "DESC"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u951920\uFF1A\u4FEE\u6539\u7684\u884C\u8868id\u4E0D\u80FD\u4E3A\u7A7A"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u5BA1\u6279\u8282\u70B9\u4FDD\u5B58\uFF0CnodeEditSave/bizNodeUpdate\u6821\u9A8C\u67D0\u884ClineId\u4E3A\u7A7A")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u5BA1\u6279\u8282\u70B9\u4FEE\u6539\u884C\u8868\u6570\u636E\u9700\u6309lineId\u5B9A\u4F4D\u66F4\u65B0\u8BB0\u5F55\u3002\u82E5\u524D\u7AEF\u672A\u4F20lineId\uFF08\u5982\u65B0\u589E\u884C\u672A\u4FDD\u5B58\u5373\u63D0\u4EA4\u5BA1\u6279\u3001\u884C\u6570\u636E\u672A\u7ED1\u5B9AID\uFF09\u3001\u6216lineId\u5B57\u6BB5\u540D\u62FC\u5199\u9519\u8BEF\uFF0C\u6821\u9A8C\u4E0D\u901A\u8FC7\u629B\u5F02\u5E38\u3002\u9700\u786E\u8BA4\u884C\u6570\u636E\u5B8C\u6574\u3002")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " l.id         "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u884CID,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         l.head_id    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u62A5\u9500\u5355ID,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         l.terminal_id "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u95E8\u5E97ID")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "   cust_dh_reimburse_line l")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  l.id "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NULL")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ORDER  BY"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " l.head_id "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "DESC"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u951921\uFF1A\u83B7\u53D6\u884C\u6570\u636E\u5931\u8D25"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u5BA1\u6279\u8282\u70B9\u4FDD\u5B58\uFF0CbizNodeUpdate\u6309lineId\u67E5\u8BE2\u539F\u884C\u6570\u636EoriginLine\u8FD4\u56DEnull")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u5BA1\u6279\u8282\u70B9\u4FEE\u6539\u884C\u8868\u9700\u5148\u67E5\u8BE2\u539F\u884C\u6570\u636E\u7528\u4E8E\u6821\u9A8C\u548C\u540C\u6B65\u66F4\u65B0\u3002\u82E5\u884C\u6570\u636E\u5728\u5BA1\u6279\u671F\u95F4\u88AB\u5220\u9664\u3001lineId\u4F20\u503C\u9519\u8BEF\u3001\u6216\u5E76\u53D1\u573A\u666F\u4E0B\u88AB\u6E05\u7406\uFF0CoriginLine\u4E3Anull\u629B\u5F02\u5E38\u3002\u9700\u5237\u65B0\u9875\u9762\u91CD\u8BD5\u3002")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " l.id         "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u884CID,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         l.head_id    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u62A5\u9500\u5355ID,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         l.terminal_id "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u95E8\u5E97ID,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         l.apply_num  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7533\u8BF7\u6570\u91CF")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "   cust_dh_reimburse_line l")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  l.id "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " #{\u4F20\u5165\u7684lineId};")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u951922\uFF1A\u5F53\u524D\u5BA1\u6279\u8282\u70B9\u4E0D\u80FD\u4FEE\u6539"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u5BA1\u6279\u8282\u70B9\u4FDD\u5B58\uFF0CnodeEditSave\u6839\u636EtaskName\u672A\u5339\u914D\u5230\u533A\u57DF\u7ECF\u7406/\u9500\u552E\u4F1A\u8BA1\u4EFB\u4E00\u8282\u70B9")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u5BA1\u6279\u8282\u70B9\u4FDD\u5B58\u9700\u6839\u636E\u5F53\u524DtaskName\u5206\u53D1\u5230\u5BF9\u5E94\u66F4\u65B0\u65B9\u6CD5\u3002\u82E5taskName\u672A\u914D\u7F6E\u3001\u5DE5\u4F5C\u6D41\u8282\u70B9\u540D\u79F0\u4E0E\u4EE3\u7801\u9884\u671F\u4E0D\u4E00\u81F4\u3001\u6216\u5F53\u524D\u7528\u6237\u4E0D\u5728\u5BA1\u6279\u8282\u70B9\u4E0A\uFF0C\u65E0\u6CD5\u5339\u914D\u5230\u5904\u7406\u65B9\u6CD5\u5373\u629B\u5F02\u5E38\u3002\u9700\u786E\u8BA4\u5F53\u524DtaskName\u662F\u5426\u4E3A\u9884\u671F\u503C\uFF08\u533A\u57DF\u7ECF\u7406\u5BA1\u6279/\u9500\u552E\u4F1A\u8BA1\u5BA1\u6279\uFF09\u3002")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " r.id               "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u62A5\u9500\u5355ID,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         r.reimburse_code   "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u62A5\u9500\u5355\u53F7,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         r.hz_instance_id   "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5DE5\u4F5C\u6D41\u5B9E\u4F8BID,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         r.hz_approve_status "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5BA1\u6279\u72B6\u6001,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         r.last_update_date "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u6700\u540E\u66F4\u65B0\u65F6\u95F4")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "   cust_dh_reimburse_head r")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  r.hz_approve_status "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "RUN"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ORDER  BY"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " r.last_update_date "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "DESC"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u951923\uFF1A\u95E8\u5934\u62A5\u9500\u7533\u8BF7\u4E0D\u5B58\u5728"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u5DE5\u4F5C\u6D41\u56DE\u8C03(onWfComplete/wfProcSubmit/onWfBreak)\u6309id\u67E5\u8BE2CUST_DH_REIMBURSE_HEAD\u8FD4\u56DEnull")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u5DE5\u4F5C\u6D41\u56DE\u8C03\u9700\u67E5\u8BE2\u62A5\u9500\u5355\u66F4\u65B0\u5BA1\u6279\u72B6\u6001\u3001\u8BA1\u7B97\u62A5\u9500\u91D1\u989D\u7B49\u3002\u82E5\u56DE\u8C03\u671F\u95F4\u62A5\u9500\u5355\u88AB\u5220\u9664\u3001id\u4F20\u503C\u9519\u8BEF\u3001\u6216OA\u56DE\u8C03\u62A5\u6587\u4E0EDMS\u4E0D\u4E00\u81F4\uFF0C\u67E5\u8BE2\u8FD4\u56DE\u7A7A\u629B\u5F02\u5E38\u3002\u9700\u6838\u67E5\u62A5\u9500\u5355\u6570\u636E\u4E0E\u5DE5\u4F5C\u6D41\u5B9E\u4F8B\u4E00\u81F4\u6027\u3002")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " r.id               "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u62A5\u9500\u5355ID,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         r.reimburse_code   "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u62A5\u9500\u5355\u53F7,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         r.hz_approve_status "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5BA1\u6279\u72B6\u6001,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         r.hz_instance_id   "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5DE5\u4F5C\u6D41\u5B9E\u4F8BID,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         r.last_update_date "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u6700\u540E\u66F4\u65B0\u65F6\u95F4")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "   cust_dh_reimburse_head r")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  r.hz_approve_status "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "RUN"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    r.last_update_date "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
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
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ORDER  BY"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " r.last_update_date "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "DESC"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u951924\uFF1A\u5355\u636Eid \u4E0D\u80FD\u4E3A\u7A7A"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u66F4\u65B0/\u5220\u9664\u64CD\u4F5C\uFF0CcheckUpOrDelete\u6821\u9A8C\u4F20\u5165\u7684id\u53C2\u6570\u4E3Anull")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u66F4\u65B0\u548C\u5220\u9664\u64CD\u4F5C\u9700\u6309\u5355\u636EID\u5B9A\u4F4D\u62A5\u9500\u5355\u3002\u82E5\u524D\u7AEF\u672A\u4F20id\uFF08\u5982\u5217\u8868\u884C\u672A\u7ED1\u5B9AID\u3001\u64CD\u4F5C\u4E0A\u4E0B\u6587\u4E22\u5931\uFF09\u3001\u6216id\u5B57\u6BB5\u540D\u62FC\u5199\u9519\u8BEF\uFF0C\u540E\u7AEF\u6821\u9A8Cid\u4E3A\u7A7A\u5373\u629B\u5F02\u5E38\u3002\u9700\u786E\u8BA4\u8BF7\u6C42\u53C2\u6570\u4E2D\u5305\u542B\u6709\u6548\u7684\u5355\u636EID\u3002")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " r.id              "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u62A5\u9500\u5355ID,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         r.reimburse_code  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u62A5\u9500\u5355\u53F7,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         r.hz_approve_status "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5BA1\u6279\u72B6\u6001")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "   cust_dh_reimburse_head r")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  r.id "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NULL")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ORDER  BY"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " r.creation_date "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "DESC"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u951925\uFF1A\u5F53\u524D\u6570\u636E\u5F02\u5E38\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u66F4\u65B0/\u5220\u9664\u64CD\u4F5C\uFF0CcheckUpOrDelete\u6309id\u67E5\u8BE2CUST_DH_REIMBURSE_HEAD\u8FD4\u56DEnull")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u66F4\u65B0\u3001\u5220\u9664\u64CD\u4F5C\u9700\u5148\u6821\u9A8C\u62A5\u9500\u5355\u5B58\u5728\u3002\u82E5\u62A5\u9500\u5355\u5728\u64CD\u4F5C\u671F\u95F4\u88AB\u5176\u4ED6\u7528\u6237\u5220\u9664\u3001id\u4F20\u503C\u9519\u8BEF\u3001\u6216\u5E76\u53D1\u573A\u666F\u4E0B\u88AB\u6E05\u7406\uFF0C\u67E5\u8BE2\u8FD4\u56DE\u7A7A\u629B\u5F02\u5E38\u3002\u9700\u5237\u65B0\u5217\u8868\u9875\u91CD\u65B0\u83B7\u53D6\u6709\u6548\u6570\u636E\u3002")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " r.id              "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u62A5\u9500\u5355ID,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         r.reimburse_code  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u62A5\u9500\u5355\u53F7,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         r.hz_approve_status "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5BA1\u6279\u72B6\u6001,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         r.last_update_date "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u6700\u540E\u66F4\u65B0\u65F6\u95F4")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "   cust_dh_reimburse_head r")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  r.id "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " #{\u4F20\u5165\u7684id};")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u951926\uFF1A\u6570\u636E\u5F02\u5E38,\u8BF7\u7A0D\u540E\u518D\u8BD5"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1AdoSelect\u67E5\u8BE2\u8BE6\u60C5\u65F6\uFF0C\u6309id\u67E5\u8BE2CUST_DH_REIMBURSE_HEAD\u8FD4\u56DEnull")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u8BE6\u60C5\u9875\u52A0\u8F7D\u9700\u67E5\u8BE2\u62A5\u9500\u5355\u5B8C\u6574\u4FE1\u606F\uFF08\u542B\u884C\u8868\u3001\u9644\u4EF6\u7B49\uFF09\u3002\u82E5\u62A5\u9500\u5355\u5728\u64CD\u4F5C\u671F\u95F4\u88AB\u5220\u9664\u3001id\u4F20\u503C\u9519\u8BEF\uFF08\u5982\u524D\u7AEF\u7F13\u5B58\u5931\u6548ID\uFF09\u3001\u6216\u5E76\u53D1\u573A\u666F\u4E0B\u88AB\u6E05\u7406\uFF0C\u67E5\u8BE2\u8FD4\u56DE\u7A7A\u629B\u5F02\u5E38\u3002\u9700\u8FD4\u56DE\u5217\u8868\u9875\u91CD\u65B0\u8FDB\u5165\u8BE6\u60C5\u3002")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " r.id              "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u62A5\u9500\u5355ID,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         r.reimburse_code  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u62A5\u9500\u5355\u53F7,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         r.hz_approve_status "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5BA1\u6279\u72B6\u6001,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         r.last_update_date "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u6700\u540E\u66F4\u65B0\u65F6\u95F4")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "   cust_dh_reimburse_head r")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  r.id "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " #{\u4F20\u5165\u7684id};")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u951927\uFF1A\u5355\u636E\u4FE1\u606F\u4E0D\u5408\u6CD5"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u5DE5\u4F5C\u6D41\u56DE\u8C03(wfProcSubmit/onWfComplete\u7B49)\u65F6\uFF0C\u6821\u9A8C\u62A5\u9500\u5355\u72B6\u6001\u6216\u6570\u636E\u4E0D\u5408\u6CD5")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u5DE5\u4F5C\u6D41\u56DE\u8C03\u9700\u6821\u9A8C\u62A5\u9500\u5355\u6570\u636E\u5408\u6CD5\u6027\u540E\u66F4\u65B0\u5BA1\u6279\u72B6\u6001\u3002\u82E5\u62A5\u9500\u5355\u72B6\u6001\u4E0E\u5DE5\u4F5C\u6D41\u64CD\u4F5C\u4E0D\u5339\u914D\uFF08\u5982\u5DF2APPROVED\u7684\u62A5\u9500\u5355\u518D\u6B21\u63D0\u4EA4\uFF09\u3001\u6570\u636E\u88AB\u975E\u6CD5\u4FEE\u6539\u3001\u6216\u5DE5\u4F5C\u6D41\u5B9E\u4F8B\u4E0E\u62A5\u9500\u5355\u72B6\u6001\u4E0D\u4E00\u81F4\uFF0C\u6821\u9A8C\u4E0D\u901A\u8FC7\u629B\u5F02\u5E38\u3002\u9700\u6838\u67E5\u62A5\u9500\u5355\u72B6\u6001\u4E0E\u5DE5\u4F5C\u6D41\u5B9E\u4F8B\u4E00\u81F4\u6027\u3002")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " r.id               "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u62A5\u9500\u5355ID,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         r.reimburse_code   "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u62A5\u9500\u5355\u53F7,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         r.hz_approve_status "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5BA1\u6279\u72B6\u6001,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         r.hz_instance_id   "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5DE5\u4F5C\u6D41\u5B9E\u4F8BID,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         r.last_update_date "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u6700\u540E\u66F4\u65B0\u65F6\u95F4")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "   cust_dh_reimburse_head r")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  r.hz_approve_status "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "RUN"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ORDER  BY"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " r.last_update_date "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "DESC"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u951928\uFF1A\u62A5\u9500\u5355\u4E0D\u5B58\u5728"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u63D0\u4EA4\u5BA1\u6279getCustLimit\u83B7\u53D6\u7ECF\u9500\u5546\u9650\u989D\u65F6\uFF0C\u6309id\u67E5\u8BE2CUST_DH_REIMBURSE_HEAD\u8FD4\u56DEnull")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u63D0\u4EA4\u5BA1\u6279\u9700\u67E5\u8BE2\u62A5\u9500\u5355\u83B7\u53D6\u7ECF\u9500\u5546ID\u548C\u653F\u7B56ID\uFF0C\u8FDB\u800C\u83B7\u53D6\u7ECF\u9500\u5546\u9650\u989D\u3002\u82E5\u62A5\u9500\u5355\u5728\u63D0\u4EA4\u671F\u95F4\u88AB\u5220\u9664\u3001id\u4F20\u503C\u9519\u8BEF\u3001\u6216\u5E76\u53D1\u573A\u666F\u4E0B\u88AB\u6E05\u7406\uFF0C\u67E5\u8BE2\u8FD4\u56DE\u7A7A\u629B\u5F02\u5E38\u3002\u9700\u6838\u67E5\u62A5\u9500\u5355\u6570\u636E\u5B8C\u6574\u6027\u3002")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " r.id               "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u62A5\u9500\u5355ID,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         r.reimburse_code   "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u62A5\u9500\u5355\u53F7,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         r.customer_id      "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7ECF\u9500\u5546ID,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         r.policy_standard_id "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u653F\u7B56ID,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         r.hz_approve_status "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5BA1\u6279\u72B6\u6001")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "   cust_dh_reimburse_head r")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  r.id "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " #{\u4F20\u5165\u7684id};")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u951929\uFF1A\u8BF7\u5148\u9009\u62E9\u7ECF\u9500\u5546\u548C\u5E97\u9762\u5EFA\u8BBE\u8865\u8D34\u653F\u7B56"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u6DFB\u52A0\u95E8\u5E97\u88C5\u4FEE\u660E\u7EC6\u884C\u65F6\uFF0C\u524D\u7AEF\u6821\u9A8C\u672A\u9009\u62E9\u7ECF\u9500\u5546(customerId\u4E3A\u7A7A)\u6216\u653F\u7B56(policyStandardId\u4E3A\u7A7A)")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u6DFB\u52A0\u660E\u7EC6\u884C\u9700\u57FA\u4E8E\u7ECF\u9500\u5546\u548C\u653F\u7B56\u8054\u52A8\u5E26\u51FA\u95E8\u5E97LOV\u548C\u8865\u8D34\u9879\u76EELOV\u3002\u82E5\u7528\u6237\u672A\u9009\u62E9\u7ECF\u9500\u5546\u6216\u653F\u7B56\u5373\u70B9\u51FB\u6DFB\u52A0\u884C\uFF0C\u65E0\u6CD5\u89E6\u53D1\u8054\u52A8\u67E5\u8BE2\uFF0C\u524D\u7AEFmessage.error\u63D0\u793A\u3002\u9700\u5148\u9009\u62E9\u7ECF\u9500\u5546\u548C\u5E97\u9762\u5EFA\u8BBE\u8865\u8D34\u653F\u7B56\u3002")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " r.id                 "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u62A5\u9500\u5355ID,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         r.reimburse_code     "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u62A5\u9500\u5355\u53F7,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         r.customer_id        "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7ECF\u9500\u5546ID,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         r.policy_standard_id "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u653F\u7B56ID,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         r.hz_approve_status  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5BA1\u6279\u72B6\u6001")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "   cust_dh_reimburse_head r")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  r.hz_approve_status "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "NEW"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    (r.customer_id "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NULL"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "OR"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " r.policy_standard_id "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NULL"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ")")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ORDER  BY"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " r.creation_date "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "DESC"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u951930\uFF1A\u8BF7\u9009\u62E9\u8981\u5220\u9664\u7684\u884C"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u5220\u9664\u95E8\u5E97\u88C5\u4FEE\u660E\u7EC6\u884C\u65F6\uFF0C\u524D\u7AEF\u6821\u9A8C\u672A\u9009\u62E9\u4EFB\u4F55\u884C\u5373\u70B9\u51FB\u5220\u9664")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u5220\u9664\u884C\u64CD\u4F5C\u9700\u9009\u4E2D\u76EE\u6807\u884C\u3002\u82E5\u7528\u6237\u672A\u5728\u884C\u8868\u683C\u4E2D\u9009\u62E9\u4EFB\u4F55\u884C\u5373\u70B9\u51FB\u5220\u9664\u6309\u94AE\uFF0C\u524D\u7AEFmessage.error\u63D0\u793A\u3002\u9700\u5148\u9009\u4E2D\u8981\u5220\u9664\u7684\u884C\u518D\u70B9\u51FB\u5220\u9664\u3002")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " r.id              "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u62A5\u9500\u5355ID,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         r.reimburse_code  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u62A5\u9500\u5355\u53F7,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         ("),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "SELECT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#82AAFF" } }, "COUNT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "("),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "1"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ")")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "          "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "   cust_dh_reimburse_line l")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "          "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  l.head_id "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " r.id) "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u884C\u8868\u8BB0\u5F55\u6570")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "   cust_dh_reimburse_head r")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  r.hz_approve_status "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "NEW"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ORDER  BY"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " r.creation_date "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "DESC"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u951931\uFF1A\u8BF7\u81F3\u5C11\u6DFB\u52A0\u4E00\u6761\u95E8\u5E97\u4FE1\u606F"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode('\uFF1A\u70B9\u51FB"\u4FDD\u5B58"\u6216"\u63D0\u4EA4"\u6309\u94AE\uFF0C\u524D\u7AEFhandleSave/handleSaveWithWorkflow\u6821\u9A8CterminalData\u4E3A\u7A7A\u6216length=0')
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u62A5\u9500\u5355\u9700\u81F3\u5C11\u4E00\u884C\u95E8\u5E97\u88C5\u4FEE\u660E\u7EC6\uFF0C\u524D\u7AEF\u901A\u8FC7terminalTableDSRef\u7BA1\u7406\u884C\u6570\u636E\u3002\u82E5\u7528\u6237\u672A\u6DFB\u52A0\u660E\u7EC6\u884C\u3001\u884C\u6570\u636E\u88AB\u8BEF\u6E05\u7A7A\u3001\u6216\u884C\u6570\u636E\u6E90\u672A\u6B63\u786E\u7ED1\u5B9A\uFF0CterminalData\u4E3A\u7A7A\u524D\u7AEFmessage.error\u63D0\u793A\u3002\u9700\u6DFB\u52A0\u81F3\u5C11\u4E00\u884C\u95E8\u5E97\u88C5\u4FEE\u660E\u7EC6\u3002")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " r.id              "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u62A5\u9500\u5355ID,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         r.reimburse_code  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u62A5\u9500\u5355\u53F7,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         ("),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "SELECT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#82AAFF" } }, "COUNT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "("),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "1"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ")")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "          "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "   cust_dh_reimburse_line l")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "          "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  l.head_id "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " r.id) "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u884C\u8868\u8BB0\u5F55\u6570")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "   cust_dh_reimburse_head r")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  r.hz_approve_status "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "NEW"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NOT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "EXISTS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " ("),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "SELECT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "1"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " cust_dh_reimburse_line l "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " l.head_id "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " r.id)")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ORDER  BY"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " r.creation_date "),
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
  _push(ssrRenderComponent(_component_KbCard, { title: "\u5E38\u89C1\u95EE\u9898" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p${_scopeId}><strong${_scopeId}>Q1\uFF1A\u8865\u8D34\u653F\u7B56LOV\u65E0\u6570\u636E\uFF1F</strong></p><p${_scopeId}>A\uFF1A\u68C0\u67E5POLICY_STANDARD_HEAD\u8868\u4E2D\u662F\u5426\u5B58\u5728VALID=2\u4E14START_DATE\u2264\u5F53\u524D\u65E5\u671F\u2264END_DATE\u7684\u8BB0\u5F55\u3002\u6392\u67E5SQL\uFF1A<code${_scopeId}>SELECT * FROM POLICY_STANDARD_HEAD WHERE VALID = 2 AND START_DATE &lt;= SYSDATE AND END_DATE &gt;= SYSDATE AND ENTID = #{\u5F53\u524D\u7528\u6237\u7EC4\u7EC7ID}</code></p><p${_scopeId}><strong${_scopeId}>Q2\uFF1A\u989D\u5EA6\u5916\u9884\u7B97\u4E0D\u8DB3\uFF1F</strong></p><p${_scopeId}>A\uFF1A\u68C0\u67E5\u5F53\u524D\u5E74\u4EFD\u989D\u5EA6\u5916\u603B\u9884\u7B97\u662F\u5426\u5145\u8DB3\u3002\u6392\u67E5SQL\uFF1A<code${_scopeId}>SELECT * FROM FIN_FEE_CHECK_BX_HEADER WHERE BUD_YEAR = #{year} AND FEE_TYPE_ID = 66014602 AND DIVISION_ID = #{divisionId}</code>\u3002\u540C\u65F6\u68C0\u67E5\u540C\u7ECF\u9500\u5546+\u653F\u7B56\u5DF2\u62A5\u9500\u91D1\u989D\uFF1A<code${_scopeId}>SELECT SUM(OUT_BX_AMT) FROM CUST_DH_REIMBURSE_HEAD WHERE POLICY_STANDARD_ID = #{policyStandardId} AND CUSTOMER_ID = #{customerId} AND HZ_APPROVE_STATUS IN (&#39;RUN&#39;,&#39;RETURN&#39;,&#39;APPROVED&#39;) AND ID != #{currentId}</code></p><p${_scopeId}><strong${_scopeId}>Q3\uFF1A\u7ECF\u9500\u5546\u9650\u989D\u5982\u4F55\u8BA1\u7B97\uFF1F</strong></p><p${_scopeId}>A\uFF1A\u9650\u989D\u6A21\u5F0F\u4E0B(custLimitFlag=Y)\uFF0C\u901A\u8FC7getCustLimit\u67E5\u8BE2\u7ECF\u9500\u5546\u9650\u989D\u8868\u3002\u5DF2\u62A5\u9500\u91D1\u989D=getOutBxUsedAmt(\u540C\u4E00\u7ECF\u9500\u5546+\u653F\u7B56\u7684RUN/RETURN/APPROVED\u72B6\u6001\u62A5\u9500\u5355OUT_BX_AMT\u4E4B\u548C)\u3002\u8D85\u9650\u91D1\u989D=min(\u9650\u989D-\u5DF2\u62A5\u9500-\u8D22\u52A1\u6279\u51C6, 0)\u3002</p><p${_scopeId}><strong${_scopeId}>Q4\uFF1A\u533A\u57DF\u7ECF\u7406\u5BA1\u6279\u65F6\u91D1\u989D\u65E0\u6CD5\u4FEE\u6539\uFF1F</strong></p><p${_scopeId}>A\uFF1A\u68C0\u67E5\u653F\u7B56excessFlag\u662F\u5426\u4E3AY(\u8D85\u989D\u62A5\u9500)\u3002\u975E\u8D85\u989D\u62A5\u9500\u65F6(excessFlag!=Y)\uFF0C\u4E1A\u52A1\u6279\u51C6\u91D1\u989D\u4E0D\u80FD\u8D85\u8FC7\u653F\u7B56\u6807\u51C6\u91D1\u989D(inStandardAmt/outStandardAmt)\u3002\u82E5\u6807\u51C6\u91D1\u989D\u4E3A0\u5219\u4E0D\u5141\u8BB8\u4FEE\u6539\u3002</p><p${_scopeId}><strong${_scopeId}>Q5\uFF1A\u5BA1\u6279\u901A\u8FC7\u540E\u5982\u4F55\u53D1\u8D77\u5151\u73B0\uFF1F</strong></p><p${_scopeId}>A\uFF1A\u62A5\u9500\u5355HZ_APPROVE_STATUS=APPROVED\u540E\uFF0C\u5728\u95E8\u5934\u5C55\u677F\u5151\u73B0(\u83DC\u535580)\u65B0\u5EFA\u9875\u9762\u901A\u8FC7LOV(AE.CUSTDHCASHOUTHEADLIST.VIEW)\u9009\u62E9\u8BE5\u62A5\u9500\u5355\u53D1\u8D77\u5151\u73B0\u3002\u5151\u73B0\u5355\u901A\u8FC7REIMBURSE_HEAD_ID\u5173\u8054\u62A5\u9500\u5355\u3002</p><p${_scopeId}><strong${_scopeId}>Q6\uFF1A\u9700\u91CD\u7B7E\u534F\u8BAE\u6807\u8BC6\u5982\u4F55\u5224\u65AD\uFF1F</strong></p><p${_scopeId}>A\uFF1AreSignFlag\u65B9\u6CD5\uFF1A\u82E5\u5B57\u6BB5\u5DF2\u4E3AY\u5219\u76F4\u63A5\u8FD4\u56DEY\uFF1B\u5426\u5219\u67E5\u8BE2MBO\u5408\u540C\u9644\u4EF6\u6570\u91CF(getAttachmentFileCount)\uFF0C\u82E5\u9644\u4EF6\u4E3A0\u5219\u8FD4\u56DEY(\u9700\u91CD\u7B7E)\uFF0C\u5426\u5219\u8FD4\u56DEN\u3002\u8BE5\u6807\u8BC6\u5F71\u54CD\u5DE5\u4F5C\u6D41\u5BA1\u6279\u5206\u652F\u3002</p>`);
      } else {
        return [
          createVNode("p", null, [
            createVNode("strong", null, "Q1\uFF1A\u8865\u8D34\u653F\u7B56LOV\u65E0\u6570\u636E\uFF1F")
          ]),
          createVNode("p", null, [
            createTextVNode("A\uFF1A\u68C0\u67E5POLICY_STANDARD_HEAD\u8868\u4E2D\u662F\u5426\u5B58\u5728VALID=2\u4E14START_DATE\u2264\u5F53\u524D\u65E5\u671F\u2264END_DATE\u7684\u8BB0\u5F55\u3002\u6392\u67E5SQL\uFF1A"),
            createVNode("code", null, "SELECT * FROM POLICY_STANDARD_HEAD WHERE VALID = 2 AND START_DATE <= SYSDATE AND END_DATE >= SYSDATE AND ENTID = #{\u5F53\u524D\u7528\u6237\u7EC4\u7EC7ID}")
          ]),
          createVNode("p", null, [
            createVNode("strong", null, "Q2\uFF1A\u989D\u5EA6\u5916\u9884\u7B97\u4E0D\u8DB3\uFF1F")
          ]),
          createVNode("p", null, [
            createTextVNode("A\uFF1A\u68C0\u67E5\u5F53\u524D\u5E74\u4EFD\u989D\u5EA6\u5916\u603B\u9884\u7B97\u662F\u5426\u5145\u8DB3\u3002\u6392\u67E5SQL\uFF1A"),
            createVNode("code", null, "SELECT * FROM FIN_FEE_CHECK_BX_HEADER WHERE BUD_YEAR = #{year} AND FEE_TYPE_ID = 66014602 AND DIVISION_ID = #{divisionId}"),
            createTextVNode("\u3002\u540C\u65F6\u68C0\u67E5\u540C\u7ECF\u9500\u5546+\u653F\u7B56\u5DF2\u62A5\u9500\u91D1\u989D\uFF1A"),
            createVNode("code", null, "SELECT SUM(OUT_BX_AMT) FROM CUST_DH_REIMBURSE_HEAD WHERE POLICY_STANDARD_ID = #{policyStandardId} AND CUSTOMER_ID = #{customerId} AND HZ_APPROVE_STATUS IN ('RUN','RETURN','APPROVED') AND ID != #{currentId}")
          ]),
          createVNode("p", null, [
            createVNode("strong", null, "Q3\uFF1A\u7ECF\u9500\u5546\u9650\u989D\u5982\u4F55\u8BA1\u7B97\uFF1F")
          ]),
          createVNode("p", null, "A\uFF1A\u9650\u989D\u6A21\u5F0F\u4E0B(custLimitFlag=Y)\uFF0C\u901A\u8FC7getCustLimit\u67E5\u8BE2\u7ECF\u9500\u5546\u9650\u989D\u8868\u3002\u5DF2\u62A5\u9500\u91D1\u989D=getOutBxUsedAmt(\u540C\u4E00\u7ECF\u9500\u5546+\u653F\u7B56\u7684RUN/RETURN/APPROVED\u72B6\u6001\u62A5\u9500\u5355OUT_BX_AMT\u4E4B\u548C)\u3002\u8D85\u9650\u91D1\u989D=min(\u9650\u989D-\u5DF2\u62A5\u9500-\u8D22\u52A1\u6279\u51C6, 0)\u3002"),
          createVNode("p", null, [
            createVNode("strong", null, "Q4\uFF1A\u533A\u57DF\u7ECF\u7406\u5BA1\u6279\u65F6\u91D1\u989D\u65E0\u6CD5\u4FEE\u6539\uFF1F")
          ]),
          createVNode("p", null, "A\uFF1A\u68C0\u67E5\u653F\u7B56excessFlag\u662F\u5426\u4E3AY(\u8D85\u989D\u62A5\u9500)\u3002\u975E\u8D85\u989D\u62A5\u9500\u65F6(excessFlag!=Y)\uFF0C\u4E1A\u52A1\u6279\u51C6\u91D1\u989D\u4E0D\u80FD\u8D85\u8FC7\u653F\u7B56\u6807\u51C6\u91D1\u989D(inStandardAmt/outStandardAmt)\u3002\u82E5\u6807\u51C6\u91D1\u989D\u4E3A0\u5219\u4E0D\u5141\u8BB8\u4FEE\u6539\u3002"),
          createVNode("p", null, [
            createVNode("strong", null, "Q5\uFF1A\u5BA1\u6279\u901A\u8FC7\u540E\u5982\u4F55\u53D1\u8D77\u5151\u73B0\uFF1F")
          ]),
          createVNode("p", null, "A\uFF1A\u62A5\u9500\u5355HZ_APPROVE_STATUS=APPROVED\u540E\uFF0C\u5728\u95E8\u5934\u5C55\u677F\u5151\u73B0(\u83DC\u535580)\u65B0\u5EFA\u9875\u9762\u901A\u8FC7LOV(AE.CUSTDHCASHOUTHEADLIST.VIEW)\u9009\u62E9\u8BE5\u62A5\u9500\u5355\u53D1\u8D77\u5151\u73B0\u3002\u5151\u73B0\u5355\u901A\u8FC7REIMBURSE_HEAD_ID\u5173\u8054\u62A5\u9500\u5355\u3002"),
          createVNode("p", null, [
            createVNode("strong", null, "Q6\uFF1A\u9700\u91CD\u7B7E\u534F\u8BAE\u6807\u8BC6\u5982\u4F55\u5224\u65AD\uFF1F")
          ]),
          createVNode("p", null, "A\uFF1AreSignFlag\u65B9\u6CD5\uFF1A\u82E5\u5B57\u6BB5\u5DF2\u4E3AY\u5219\u76F4\u63A5\u8FD4\u56DEY\uFF1B\u5426\u5219\u67E5\u8BE2MBO\u5408\u540C\u9644\u4EF6\u6570\u91CF(getAttachmentFileCount)\uFF0C\u82E5\u9644\u4EF6\u4E3A0\u5219\u8FD4\u56DEY(\u9700\u91CD\u7B7E)\uFF0C\u5426\u5219\u8FD4\u56DEN\u3002\u8BE5\u6807\u8BC6\u5F71\u54CD\u5DE5\u4F5C\u6D41\u5BA1\u6279\u5206\u652F\u3002")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div><div id="changelog" style="${ssrRenderStyle({ "display": "none" })}"><div class="tab-pad"><div class="kl-wrap">`);
  _push(ssrRenderComponent(_component_KbCard, { title: "\u66F4\u65B0\u8BB0\u5F55" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u65E5\u671F</th><th${_scopeId}>\u63D0\u4EA4ID</th><th${_scopeId}>\u63D0\u4EA4\u4EBA</th><th${_scopeId}>\u63D0\u4EA4\u5185\u5BB9</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>2025-09-29</td><td${_scopeId}>-</td><td${_scopeId}>jiaqiang.fu01</td><td${_scopeId}>\u521D\u59CB\u521B\u5EFA\u95E8\u5934\u62A5\u9500\u7533\u8BF7Controller/Service/Entity</td></tr><tr${_scopeId}><td${_scopeId}>2026-08-30</td><td${_scopeId}>-</td><td${_scopeId}>AI</td><td${_scopeId}>\u6309skill\u89C4\u8303\u91CD\u5199\uFF0C\u8865\u5145\u660E\u7EC6\u5B57\u6BB5\u5217\u8868\u3001\u5BFC\u5165\u903B\u8F91\u3001\u63D0\u4EA4\u6821\u9A8C\u3001\u9009\u62E9\u5F39\u7A97\u7B49\u7AE0\u8282</td></tr></tbody></table>`);
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
                createVNode("td", null, "2025-09-29"),
                createVNode("td", null, "-"),
                createVNode("td", null, "jiaqiang.fu01"),
                createVNode("td", null, "\u521D\u59CB\u521B\u5EFA\u95E8\u5934\u62A5\u9500\u7533\u8BF7Controller/Service/Entity")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "2026-08-30"),
                createVNode("td", null, "-"),
                createVNode("td", null, "AI"),
                createVNode("td", null, "\u6309skill\u89C4\u8303\u91CD\u5199\uFF0C\u8865\u5145\u660E\u7EC6\u5B57\u6BB5\u5217\u8868\u3001\u5BFC\u5165\u903B\u8F91\u3001\u63D0\u4EA4\u6821\u9A8C\u3001\u9009\u62E9\u5F39\u7A97\u7B49\u7AE0\u8282")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("\u95E8\u5E97\u7BA1\u7406/\u95E8\u5E97\u88C5\u4FEE/\u95E8\u5934\u5C55\u677F\u62A5\u9500\u7533\u8BF7\u5355/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
