import { resolveComponent, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.6ab74304.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"\u95E8\u5E97\u7BA1\u7406/\u95E8\u5E97\u88C5\u4FEE/\u989D\u5EA6\u5185\u5151\u73B0\u6279\u91CF\u590D\u6838/index.md"}');
const _sfc_main = { name: "\u95E8\u5E97\u7BA1\u7406/\u95E8\u5E97\u88C5\u4FEE/\u989D\u5EA6\u5185\u5151\u73B0\u6279\u91CF\u590D\u6838/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_BreadcrumbTabs = resolveComponent("BreadcrumbTabs");
  const _component_KbCard = resolveComponent("KbCard");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_BreadcrumbTabs, null, null, _parent));
  _push(`<div id="biz-intro" style="${ssrRenderStyle({ "display": "none" })}"><div class="tab-pad"><div class="kl-wrap"><div class="kl-card"><div class="biz-kl-hdr"><span class="biz-tag" style="${ssrRenderStyle({ "background": "rgba(124,58,237,0.08)", "color": "#7C3AED", "border-color": "rgba(124,58,237,0.18)" })}"> \u5B9A\u4E49</span><h2>\u989D\u5EA6\u5185\u5151\u73B0\u6279\u91CF\u590D\u6838\u662F\u4EC0\u4E48</h2><p>\u5C06\u591A\u5F20\u95E8\u5E97\u88C5\u4FEE\u989D\u5EA6\u5185\u5151\u73B0\u5355\u6C47\u603B\u5230\u4E00\u5F20\u590D\u6838\u5355\u4E2D\uFF0C\u7EDF\u4E00\u5BA1\u6279\u5E76\u4E00\u6B21\u6027\u63A8\u9001\u5171\u4EAB\u4E0E\u8D44\u91D1\u6C60\uFF0C\u63D0\u5347\u6279\u91CF\u5151\u4ED8\u7684\u6548\u7387</p></div><div class="biz-2col-inner"><div class="kl-col-box"><div style="${ssrRenderStyle({ "display": "flex", "align-items": "center", "gap": "10px", "margin-bottom": "12px" })}"><div style="${ssrRenderStyle({ "width": "40px", "height": "40px", "border-radius": "10px", "display": "flex", "align-items": "center", "justify-content": "center", "background": "linear-gradient(135deg,#7c3aed,#6d28d9)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="3" width="5" height="5" rx="1" stroke="white" stroke-width="1.5"></rect><path d="M3 6.5L4.5 8L7 5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9 5H14" stroke="white" stroke-width="1.5" stroke-linecap="round"></path><rect x="2" y="10" width="5" height="3" rx="1" stroke="white" stroke-width="1.5"></rect><path d="M9 10H14" stroke="white" stroke-width="1.5" stroke-linecap="round"></path><path d="M9 13H13" stroke="white" stroke-width="1.5" stroke-linecap="round"></path></svg></div><h4 style="${ssrRenderStyle({ "font-size": "1rem", "font-weight": "800", "color": "#1F2937", "margin": "0" })}">\u8FD9\u5F20\u5355\u89E3\u51B3\u4EC0\u4E48</h4></div><p style="${ssrRenderStyle({ "font-size": "0.78rem", "font-weight": "600", "color": "#6B7280", "margin": "0 0 10px" })}">\u4E1A\u52A1\u52A8\u673A</p><div style="${ssrRenderStyle({ "display": "flex", "flex-direction": "column", "gap": "8px" })}"><div style="${ssrRenderStyle({ "display": "flex", "align-items": "flex-start", "gap": "8px", "padding": "8px 10px", "background": "#F5F3FF", "border-radius": "8px" })}"><div style="${ssrRenderStyle({ "font-size": ".75rem" })}"><strong>\u6279\u91CF\u5904\u7406</strong> \u2014 \u5C06\u591A\u5F20\u989D\u5EA6\u5185\u5151\u73B0\u5355\u5408\u5E76\u590D\u6838\uFF0C\u51CF\u5C11\u9010\u5355\u5BA1\u6279\u6210\u672C</div></div><div style="${ssrRenderStyle({ "display": "flex", "align-items": "flex-start", "gap": "8px", "padding": "8px 10px", "background": "#F5F3FF", "border-radius": "8px" })}"><div style="${ssrRenderStyle({ "font-size": ".75rem" })}"><strong>\u7EDF\u4E00\u652F\u4ED8</strong> \u2014 \u5BA1\u6279\u901A\u8FC7\u540E\u7EDF\u4E00\u63A8\u9001\u7ED9\u5171\u4EAB\u4E0E\u8D44\u91D1\u6C60\uFF0C\u5B8C\u6210\u6279\u91CF\u5165\u8D26</div></div><div style="${ssrRenderStyle({ "display": "flex", "align-items": "flex-start", "gap": "8px", "padding": "8px 10px", "background": "#F5F3FF", "border-radius": "8px" })}"><div style="${ssrRenderStyle({ "font-size": ".75rem" })}"><strong>\u72B6\u6001\u8054\u52A8</strong> \u2014 \u6279\u91CF\u66F4\u65B0\u88AB\u7ED1\u5B9A\u5151\u73B0\u5355\u7684\u5BA1\u6838\u72B6\u6001\uFF0C\u4FDD\u8BC1\u8D26\u52A1\u4E00\u81F4</div></div></div></div><div class="kl-col-box alt"><div style="${ssrRenderStyle({ "display": "flex", "align-items": "center", "gap": "10px", "margin-bottom": "12px" })}"><div style="${ssrRenderStyle({ "width": "40px", "height": "40px", "border-radius": "10px", "display": "flex", "align-items": "center", "justify-content": "center", "background": "linear-gradient(135deg,#16A34A,#15803D)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="2" width="10" height="12" rx="2" stroke="white" stroke-width="1.5"></rect><path d="M5.5 6L7 7.5L10.5 4.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></div><h4 style="${ssrRenderStyle({ "font-size": "1rem", "font-weight": "800", "color": "#1F2937", "margin": "0" })}">\u5355\u636E\u8FB9\u754C</h4></div><p style="${ssrRenderStyle({ "font-size": "0.78rem", "font-weight": "600", "color": "#6B7280", "margin": "0 0 10px" })}">\u9002\u7528\u8303\u56F4</p><div style="${ssrRenderStyle({ "display": "flex", "flex-direction": "column", "gap": "8px" })}"><div style="${ssrRenderStyle({ "display": "flex", "align-items": "flex-start", "gap": "8px", "padding": "8px 10px", "background": "#F0FDF4", "border-radius": "8px" })}"><div style="${ssrRenderStyle({ "font-size": ".75rem" })}"><strong>\u4EC5\u989D\u5EA6\u5185</strong> \u2014 \u9488\u5BF9\u95E8\u5E97\u88C5\u4FEE\u989D\u5EA6\u5185\u5151\u73B0\u5355\uFF0C\u4E0D\u5305\u542B\u989D\u5EA6\u5916\u5151\u73B0</div></div><div style="${ssrRenderStyle({ "display": "flex", "align-items": "flex-start", "gap": "8px", "padding": "8px 10px", "background": "#F0FDF4", "border-radius": "8px" })}"><div style="${ssrRenderStyle({ "font-size": ".75rem" })}"><strong>\u7ED1\u5B9A\u5173\u7CFB</strong> \u2014 \u590D\u6838\u5355\u4E0E\u5151\u73B0\u5355\u4E3A\u7ED1\u5B9A\u5173\u7CFB\uFF0C\u53EF\u8C03\u6574\u7ED1\u5B9A\u8303\u56F4</div></div><div style="${ssrRenderStyle({ "display": "flex", "align-items": "flex-start", "gap": "8px", "padding": "8px 10px", "background": "#F0FDF4", "border-radius": "8px" })}"><div style="${ssrRenderStyle({ "font-size": ".75rem" })}"><strong>\u6765\u6E90\u5B8C\u6574</strong> \u2014 \u7ED1\u5B9A\u7684\u5151\u73B0\u5355\u987B\u5173\u8054\u9A8C\u6536\u62A5\u9500\u5355\u6216\u95E8\u5934\u5151\u73B0\u5355\uFF0C\u5426\u5219\u65E0\u6CD5\u63A8\u9001</div></div></div></div></div></div><div class="kl-card"><div class="biz-kl-hdr"><span class="biz-tag" style="${ssrRenderStyle({ "background": "rgba(124,58,237,0.08)", "color": "#7C3AED", "border-color": "rgba(124,58,237,0.18)" })}"> \u6D41\u7A0B</span><h2>\u8C01\u5728\u7528\uFF0C\u600E\u4E48\u6D41\u8F6C</h2><p>\u7531\u8D22\u52A1\u6216\u590D\u6838\u4EBA\u5458\u53D1\u8D77\uFF0C\u7ED1\u5B9A\u591A\u5F20\u5151\u73B0\u5355\uFF0C\u5BA1\u6279\u901A\u8FC7\u540E\u7EDF\u4E00\u63A8\u9001\u7ED3\u7B97</p></div><div class="biz-steps"><div class="biz-step-item"><div class="biz-step-circle" style="${ssrRenderStyle({ "background": "linear-gradient(135deg,#7C3AED,#6D28D9)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 3V13" stroke="white" stroke-width="1.5" stroke-linecap="round"></path><path d="M4 6L8 3L12 6" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></div><h5>\u65B0\u5EFA\u590D\u6838\u5355</h5><small>\u9009\u62E9\u989D\u5EA6\u5185\u5151\u73B0\u5355<br>\u7ED1\u5B9A\u5230\u4E00\u8D77</small></div><div class="biz-step-arrow">\u2192</div><div class="biz-step-item"><div class="biz-step-circle" style="${ssrRenderStyle({ "background": "linear-gradient(135deg,#3B82F6,#2563EB)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="2" width="10" height="12" rx="2" stroke="white" stroke-width="1.5"></rect><path d="M5.5 8L7 9.5L10.5 5.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></div><h5>\u5BA1\u6279\u6D41\u8F6C</h5><small>\u6309\u5DE5\u4F5C\u6D41\u9010\u7EA7<br>\u5BA1\u6838\u590D\u6838\u5355</small></div><div class="biz-step-arrow">\u2192</div><div class="biz-step-item"><div class="biz-step-circle" style="${ssrRenderStyle({ "background": "linear-gradient(135deg,#16A34A,#15803D)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="5.5" stroke="white" stroke-width="1.5"></circle><path d="M8 5.5V8L9.5 9.5" stroke="white" stroke-width="1.5" stroke-linecap="round"></path></svg></div><h5>\u63A8\u9001\u5171\u4EAB</h5><small>\u5BA1\u6279\u901A\u8FC7\u540E<br>\u63A8\u9001\u5171\u4EAB/\u8D44\u91D1\u6C60</small></div><div class="biz-step-arrow">\u2192</div><div class="biz-step-item"><div class="biz-step-circle" style="${ssrRenderStyle({ "background": "linear-gradient(135deg,#F59E0B,#D97706)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="4" width="12" height="9" rx="1.5" stroke="white" stroke-width="1.5"></rect><path d="M5 4V3H11V4" stroke="white" stroke-width="1.5"></path></svg></div><h5>\u72B6\u6001\u66F4\u65B0</h5><small>\u5151\u73B0\u5355\u6807\u8BB0\u5BA1\u6838\u5B8C\u6210<br>\u5B8C\u6210\u5165\u8D26</small></div></div></div><div class="kl-card"><div class="biz-kl-hdr"><span class="biz-tag" style="${ssrRenderStyle({ "background": "rgba(124,58,237,0.08)", "color": "#7C3AED", "border-color": "rgba(124,58,237,0.18)" })}"> \u89C4\u5219</span><h2>\u5173\u952E\u4E1A\u52A1\u89C4\u5219</h2><p>\u7ED1\u5B9A\u5173\u7CFB\u53EF\u8C03\u6574\uFF0C\u63A8\u9001\u524D\u9700\u786E\u4FDD\u6765\u6E90\u5355\u636E\u9F50\u5168</p></div><div class="biz-3col"><div class="kl-col-box" style="${ssrRenderStyle({ "margin-bottom": "0" })}"><div style="${ssrRenderStyle({ "display": "flex", "gap": "12px", "align-items": "flex-start" })}"><div style="${ssrRenderStyle({ "width": "36px", "height": "36px", "border-radius": "10px", "display": "flex", "align-items": "center", "justify-content": "center", "flex-shrink": "0", "background": "linear-gradient(135deg,#7C3AED,#A78BFA)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 8H14" stroke="white" stroke-width="1.5" stroke-linecap="round"></path><path d="M10 4L14 8L10 12" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></div><div><h5 style="${ssrRenderStyle({ "font-size": "0.88rem", "font-weight": "800", "color": "#1F2937", "margin": "0 0 6px" })}">\u7ED1\u5B9A\u53EF\u53D8</h5><p style="${ssrRenderStyle({ "font-size": "0.73rem", "color": "#6B7280", "margin": "0", "line-height": "1.6" })}">\u66F4\u65B0\u65F6\u53EF\u89E3\u7ED1\u65E7\u5151\u73B0\u5355\u5E76\u7ED1\u5B9A\u65B0\u5355\uFF0C\u5355\u5220\u9664\u65F6\u540C\u6B65\u6E05\u7A7A\u7ED1\u5B9A\u5173\u7CFB</p></div></div></div><div class="kl-col-box alt" style="${ssrRenderStyle({ "margin-bottom": "0" })}"><div style="${ssrRenderStyle({ "display": "flex", "gap": "12px", "align-items": "flex-start" })}"><div style="${ssrRenderStyle({ "width": "36px", "height": "36px", "border-radius": "10px", "display": "flex", "align-items": "center", "justify-content": "center", "flex-shrink": "0", "background": "linear-gradient(135deg,#16A34A,#15803D)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="3" width="12" height="10" rx="1.5" stroke="white" stroke-width="1.5"></rect><path d="M5 6.5L7 8.5L11 5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></div><div><h5 style="${ssrRenderStyle({ "font-size": "0.88rem", "font-weight": "800", "color": "#1F2937", "margin": "0 0 6px" })}">\u6765\u6E90\u5FC5\u586B</h5><p style="${ssrRenderStyle({ "font-size": "0.73rem", "color": "#6B7280", "margin": "0", "line-height": "1.6" })}">\u88AB\u7ED1\u5B9A\u7684\u5151\u73B0\u5355\u5FC5\u987B\u5173\u8054\u9A8C\u6536\u62A5\u9500\u5355\u53F7\u6216\u95E8\u5934\u5151\u73B0\u5355\u53F7\uFF0C\u5426\u5219\u63A8\u9001\u5931\u8D25</p></div></div></div><div class="kl-col-box" style="${ssrRenderStyle({ "margin-bottom": "0" })}"><div style="${ssrRenderStyle({ "display": "flex", "gap": "12px", "align-items": "flex-start" })}"><div style="${ssrRenderStyle({ "width": "36px", "height": "36px", "border-radius": "10px", "display": "flex", "align-items": "center", "justify-content": "center", "flex-shrink": "0", "background": "linear-gradient(135deg,#DC2626,#B91C1C)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="2" width="10" height="12" rx="2" stroke="white" stroke-width="1.5"></rect><path d="M6 6.5L10 10.5M10 6.5L6 10.5" stroke="white" stroke-width="1.5" stroke-linecap="round"></path></svg></div><div><h5 style="${ssrRenderStyle({ "font-size": "0.88rem", "font-weight": "800", "color": "#1F2937", "margin": "0 0 6px" })}">\u63A8\u9001\u53E3\u5F84</h5><p style="${ssrRenderStyle({ "font-size": "0.73rem", "color": "#6B7280", "margin": "0", "line-height": "1.6" })}">\u6309\u5151\u73B0\u5355\u652F\u4ED8\u65B9\u5F0F\u533A\u5206\uFF1A\u6298\u6263\u6298\u8BA9\u63A8\u9001\u8D44\u91D1\u6C60\uFF0C\u5176\u4F59\u63A8\u9001\u5171\u4EAB\u63A5\u53E3</p></div></div></div></div><div class="kl-tip" style="${ssrRenderStyle({ "margin-top": "14px" })}"><strong>\u6838\u5FC3\u7EA6\u675F\uFF1A</strong>\u989D\u5EA6\u5185\u5151\u73B0\u6279\u91CF\u590D\u6838\u4EC5\u4F5C\u7528\u4E8E\u989D\u5EA6\u5185\u5151\u73B0\u5355\uFF0C\u63A8\u9001\u524D\u5FC5\u987B\u4FDD\u8BC1\u6BCF\u5F20\u7ED1\u5B9A\u5355\u7684\u6765\u6E90\u62A5\u9500\u5355\u9F50\u5168\uFF0C\u907F\u514D\u7ED3\u7B97\u6570\u636E\u7F3A\u5931\u3002 </div></div></div></div></div><div id="biz-flow" style="${ssrRenderStyle({ "display": "none" })}"><div class="tab-pad"><div class="bf-truth-flow"><h4 class="bf-main-title">\u3010\u989D\u5EA6\u5185\u5151\u73B0\u6279\u91CF\u590D\u6838\u3011 \u2014 \u5168\u94FE\u8DEF\u6D41\u7A0B\u56FE</h4><p class="bf-main-sub">\u5F00\u59CB \u2192 \u989D\u5EA6\u5185\u5151\u73B0\u5355 \u2192 \u2605\u65B0\u5EFA\u989D\u5EA6\u5185\u5151\u73B0\u6279\u91CF\u590D\u6838\u5355\u2605 \u2192 \u2696\u5BA1\u6279\u901A\u8FC7\uFF1F \u2192 \u63A8\u9001\u5171\u4EAB/\u8D44\u91D1\u6C60 \u2192 \u7ED3\u675F\uFF08\u62D2\u7EDD\u5219\u4FEE\u6539\u91CD\u63D0\uFF09</p><div class="bf-fc-svg-wrap"><svg class="bf-fc-svg" style="${ssrRenderStyle({ "max-height": "none" })}" viewBox="0 0 1200 720" xmlns="http://www.w3.org/2000/svg"><defs><marker id="arr-green" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon points="0,0 10,5 0,10" fill="#16A34A"></polygon></marker><marker id="arr-gray" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon points="0,0 10,5 0,10" fill="#9CA3AF"></polygon></marker><marker id="arr-blue" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon points="0,0 10,5 0,10" fill="#3B82F6"></polygon></marker><marker id="arr-red" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon points="0,0 10,5 0,10" fill="#EF4444"></polygon></marker><filter id="shadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000" flood-opacity="0.15"></feDropShadow></filter></defs><rect x="50" y="20" width="1100" height="95" rx="8" fill="#EFF6FF" stroke="#3B82F6" stroke-width="1.5" stroke-dasharray="6,4"></rect><text x="600" y="42" text-anchor="middle" fill="#1D4ED8" font-size="13" font-weight="600">\u4E0A\u6E38\u652F\u6491</text><rect x="280" y="56" width="120" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"></rect><text x="340" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">\u989D\u5EA6\u5185\u5151\u73B0\u5355</text><rect x="410" y="56" width="120" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"></rect><text x="470" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">\u7ECF\u9500\u5546/\u95E8\u5E97</text><rect x="540" y="56" width="120" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"></rect><text x="600" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">\u4E8B\u4E1A\u90E8</text><rect x="670" y="56" width="120" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"></rect><text x="730" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">\u7F16\u7801\u89C4\u5219</text><rect x="800" y="56" width="120" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"></rect><text x="860" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">\u5DE5\u4F5C\u6D41\u5F15\u64CE</text><line x1="600" y1="115" x2="600" y2="150" stroke="#3B82F6" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#arr-blue)"></line><rect x="560" y="150" width="80" height="44" rx="6" fill="#FAF5FF" stroke="#9333EA" stroke-width="1.5" stroke-dasharray="5,3"></rect><text x="600" y="177" text-anchor="middle" fill="#7C3AED" font-size="13" font-weight="600">\u5F00\u59CB</text><line x1="600" y1="194" x2="600" y2="222" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"></line><rect x="515" y="222" width="170" height="54" rx="6" fill="#16A34A" stroke="#15803D" stroke-width="2" filter="url(#shadow)"></rect><text x="600" y="246" text-anchor="middle" fill="#FFFFFF" font-size="13" font-weight="700">\u2605\u65B0\u5EFA\u989D\u5EA6\u5185\u5151\u73B0\u6279\u91CF\u590D\u6838\u5355\u2605</text><text x="600" y="266" text-anchor="middle" fill="#DCFCE7" font-size="10">\u9009\u5151\u73B0\u5355\xB7\u7ED1\u5B9A\xB7\u4FDD\u5B58</text><line x1="600" y1="276" x2="600" y2="304" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"></line><polygon points="600,304 670,334 600,364 530,334" fill="#FAF5FF" stroke="#9333EA" stroke-width="1.5" stroke-dasharray="5,3"></polygon><text x="600" y="338" text-anchor="middle" fill="#7C3AED" font-size="12" font-weight="600">\u2696 \u5BA1\u6279\u901A\u8FC7\uFF1F</text><line x1="670" y1="334" x2="780" y2="334" stroke="#EF4444" stroke-width="2" marker-end="url(#arr-red)"></line><rect x="735" y="319" width="90" height="28" rx="4" fill="#FEF2F2" stroke="#EF4444" stroke-width="1"></rect><text x="780" y="338" text-anchor="middle" fill="#DC2626" font-size="11" font-weight="600">\u62D2\u7EDD \u2717</text><line x1="780" y1="319" x2="780" y2="249" stroke="#EF4444" stroke-width="1.5"></line><line x1="780" y1="249" x2="515" y2="249" stroke="#EF4444" stroke-width="1.5" marker-end="url(#arr-red)"></line><line x1="600" y1="364" x2="600" y2="392" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"></line><rect x="520" y="392" width="160" height="44" rx="6" fill="#F0FDF4" stroke="#16A34A" stroke-width="2"></rect><text x="600" y="419" text-anchor="middle" fill="#166534" font-size="13" font-weight="600">\u63A8\u9001\u5171\u4EAB/\u8D44\u91D1\u6C60</text><line x1="600" y1="436" x2="600" y2="464" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"></line><rect x="545" y="464" width="110" height="44" rx="6" fill="#FAF5FF" stroke="#9333EA" stroke-width="1.5" stroke-dasharray="5,3"></rect><text x="600" y="491" text-anchor="middle" fill="#7C3AED" font-size="13" font-weight="600">\u7ED3\u675F</text><line x1="600" y1="508" x2="600" y2="528" stroke="#16A34A" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#arr-green)"></line><rect x="50" y="528" width="1100" height="95" rx="8" fill="#F0FDF4" stroke="#16A34A" stroke-width="1.5" stroke-dasharray="6,4"></rect><text x="600" y="550" text-anchor="middle" fill="#166534" font-size="13" font-weight="600">\u4E0B\u6E38\u5F71\u54CD</text><rect x="270" y="562" width="150" height="36" rx="5" fill="#FFFFFF" stroke="#16A34A" stroke-width="1.2"></rect><text x="345" y="585" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">\u5171\u4EAB/EBS\u63A5\u53E3</text><rect x="440" y="562" width="150" height="36" rx="5" fill="#FFFFFF" stroke="#16A34A" stroke-width="1.2"></rect><text x="515" y="585" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">\u8D44\u91D1\u6C60(EBS)</text><rect x="610" y="562" width="150" height="36" rx="5" fill="#FFFFFF" stroke="#16A34A" stroke-width="1.2"></rect><text x="685" y="585" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">\u5151\u73B0\u5355\u72B6\u6001\u66F4\u65B0</text><rect x="780" y="562" width="150" height="36" rx="5" fill="#FFFFFF" stroke="#16A34A" stroke-width="1.2"></rect><text x="855" y="585" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">\u62A5\u9500\u6838\u7B97</text></svg></div><div class="bf-fc-legend"><span class="bf-fc-legend-item"><span class="bf-fc-dot bf-fc-dot-green"></span> \u4E3B\u6D41\u7A0B\u6B65\u9AA4</span><span class="bf-fc-legend-item"><span class="bf-fc-dot bf-fc-dot-purple"></span> \u5F00\u59CB/\u7ED3\u675F/\u5224\u65AD</span><span class="bf-fc-legend-item"><span class="bf-fc-dot bf-fc-dot-blue"></span> \u4E0A\u6E38\u652F\u6491\u670D\u52A1</span><span class="bf-fc-legend-item"><span style="${ssrRenderStyle({ "display": "inline-block", "width": "22px", "height": "2px", "background": "#EF4444" })}"></span> \u5BA1\u6279\u62D2\u7EDD/\u9A73\u56DE</span></div></div></div></div><div id="key-logic" style="${ssrRenderStyle({ "display": "none" })}"><div class="tab-pad"><div class="kl-wrap">`);
  _push(ssrRenderComponent(_component_KbCard, {
    num: "1",
    title: "\u91CD\u70B9\u903B\u8F911\uFF1A\u6279\u91CF\u5173\u8054\u5151\u73B0\u5355"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u610F\u4E49</strong>\uFF1A\u5C06\u591A\u5F20\u989D\u5EA6\u5185\u5151\u73B0\u5355\u901A\u8FC7batchCashId\u7EDF\u4E00\u5173\u8054\uFF0C\u6279\u91CF\u63D0\u4EA4\u5BA1\u6279</li><li${_scopeId}><strong${_scopeId}>\u5177\u4F53\u903B\u8F91\u63CF\u8FF0</strong>\uFF1A</li><li${_scopeId}>\u521B\u5EFA\u6279\u91CF\u590D\u6838\u5355FIN_FEE_IN_CASH_HEAD</li><li${_scopeId}>\u591A\u5F20FIN_FEE_TERMINAL_CASHOUT\u901A\u8FC7batchCashId\u5173\u8054\u5230\u6279\u91CF\u590D\u6838\u5355</li><li${_scopeId}>\u6279\u91CF\u63D0\u4EA4\u540E\u7EDF\u4E00\u8D70\u5BA1\u6279\u6D41\u7A0B</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u610F\u4E49"),
              createTextVNode("\uFF1A\u5C06\u591A\u5F20\u989D\u5EA6\u5185\u5151\u73B0\u5355\u901A\u8FC7batchCashId\u7EDF\u4E00\u5173\u8054\uFF0C\u6279\u91CF\u63D0\u4EA4\u5BA1\u6279")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u5177\u4F53\u903B\u8F91\u63CF\u8FF0"),
              createTextVNode("\uFF1A")
            ]),
            createVNode("li", null, "\u521B\u5EFA\u6279\u91CF\u590D\u6838\u5355FIN_FEE_IN_CASH_HEAD"),
            createVNode("li", null, "\u591A\u5F20FIN_FEE_TERMINAL_CASHOUT\u901A\u8FC7batchCashId\u5173\u8054\u5230\u6279\u91CF\u590D\u6838\u5355"),
            createVNode("li", null, "\u6279\u91CF\u63D0\u4EA4\u540E\u7EDF\u4E00\u8D70\u5BA1\u6279\u6D41\u7A0B")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, {
    num: "2",
    title: "\u91CD\u70B9\u903B\u8F912\uFF1A\u6279\u91CF\u5BA1\u6279\u901A\u8FC7\u5904\u7406"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u610F\u4E49</strong>\uFF1A\u5BA1\u6279\u901A\u8FC7\u540E\u6279\u91CF\u5904\u7406\u6240\u6709\u5173\u8054\u7684\u5151\u73B0\u5355</li><li${_scopeId}><strong${_scopeId}>\u5177\u4F53\u903B\u8F91\u63CF\u8FF0</strong>\uFF1A</li><li${_scopeId}>\u6279\u91CF\u56DE\u5199\u5151\u73B0\u5355\u5BA1\u6279\u72B6\u6001\u4E3AAPPROVED</li><li${_scopeId}>\u6279\u91CF\u540C\u6B65\u8D44\u91D1\u6C60(EBS)</li><li${_scopeId}>\u6279\u91CF\u63A8\u9001MBO\u7CFB\u7EDF</li><li${_scopeId}>\u6279\u91CF\u56DE\u5199\u9A8C\u6536\u62A5\u9500\u5355\u5151\u73B0\u4FE1\u606F</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u610F\u4E49"),
              createTextVNode("\uFF1A\u5BA1\u6279\u901A\u8FC7\u540E\u6279\u91CF\u5904\u7406\u6240\u6709\u5173\u8054\u7684\u5151\u73B0\u5355")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u5177\u4F53\u903B\u8F91\u63CF\u8FF0"),
              createTextVNode("\uFF1A")
            ]),
            createVNode("li", null, "\u6279\u91CF\u56DE\u5199\u5151\u73B0\u5355\u5BA1\u6279\u72B6\u6001\u4E3AAPPROVED"),
            createVNode("li", null, "\u6279\u91CF\u540C\u6B65\u8D44\u91D1\u6C60(EBS)"),
            createVNode("li", null, "\u6279\u91CF\u63A8\u9001MBO\u7CFB\u7EDF"),
            createVNode("li", null, "\u6279\u91CF\u56DE\u5199\u9A8C\u6536\u62A5\u9500\u5355\u5151\u73B0\u4FE1\u606F")
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
        _push2(`<p${_scopeId}>\u672C\u9875\u9762\u4E3Ahlod\u4F4E\u4EE3\u7801\u9875\u9762\uFF0C\u524D\u7AEF\u5C1A\u65E0\u72EC\u7ACBReact\u7EC4\u4EF6\u3002\u540E\u7AEFController(FinFeeInCashHeadController)\u63D0\u4F9B4\u4E2AAPI\u3002</p><h4${_scopeId}>\u5934\u90E8\u4FE1\u606F\u533A</h4><table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5B57\u6BB5\u540D</th><th${_scopeId}>\u6570\u636E\u5E93\u5217\u540D</th><th${_scopeId}>\u7EC4\u4EF6</th><th${_scopeId}>\u4E1A\u52A1\u91CA\u4E49</th><th${_scopeId}>\u663E\u9690\u6761\u4EF6</th><th${_scopeId}>\u53D6\u503C/\u8D4B\u503C\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u6279\u91CF\u590D\u6838\u5355\u53F7</td><td${_scopeId}>CASH_CODE</td><td${_scopeId}>TextField</td><td${_scopeId}>\u6279\u91CF\u590D\u6838\u5355\u53F7</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>\u7F16\u7801\u89C4\u5219\u751F\u6210</td></tr><tr${_scopeId}><td${_scopeId}>\u7533\u8BF7\u4EBA</td><td${_scopeId}>CREATOR_NAME</td><td${_scopeId}>TextField</td><td${_scopeId}>\u7533\u8BF7\u4EBA</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>\u9ED8\u8BA4\u5F53\u524D\u7528\u6237</td></tr><tr${_scopeId}><td${_scopeId}>\u7533\u8BF7\u65E5\u671F</td><td${_scopeId}>CREATE_TIME</td><td${_scopeId}>DatePicker</td><td${_scopeId}>\u7533\u8BF7\u65E5\u671F</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>\u9ED8\u8BA4\u5F53\u524D\u65F6\u95F4</td></tr><tr${_scopeId}><td${_scopeId}>\u5BA1\u6838\u72B6\u6001</td><td${_scopeId}>HZ_APPROVE_STATUS</td><td${_scopeId}>Select(HWKF.APPROVE_STATUS)</td><td${_scopeId}>\u5BA1\u6838\u72B6\u6001</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>\u9ED8\u8BA4NEW</td></tr><tr${_scopeId}><td${_scopeId}>\u5BA1\u6838\u4EBA</td><td${_scopeId}>CHECKER</td><td${_scopeId}>TextField</td><td${_scopeId}>\u5BA1\u6838\u4EBA</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>\u5BA1\u6279\u901A\u8FC7\u65F6\u8D4B\u503C</td></tr><tr${_scopeId}><td${_scopeId}>\u5BA1\u6838\u65F6\u95F4</td><td${_scopeId}>CHECK_TIME</td><td${_scopeId}>DatePicker</td><td${_scopeId}>\u5BA1\u6838\u65F6\u95F4</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>\u5BA1\u6279\u901A\u8FC7\u65F6\u8D4B\u503C</td></tr></tbody></table>`);
      } else {
        return [
          createVNode("p", null, "\u672C\u9875\u9762\u4E3Ahlod\u4F4E\u4EE3\u7801\u9875\u9762\uFF0C\u524D\u7AEF\u5C1A\u65E0\u72EC\u7ACBReact\u7EC4\u4EF6\u3002\u540E\u7AEFController(FinFeeInCashHeadController)\u63D0\u4F9B4\u4E2AAPI\u3002"),
          createVNode("h4", null, "\u5934\u90E8\u4FE1\u606F\u533A"),
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
                createVNode("td", null, "\u6279\u91CF\u590D\u6838\u5355\u53F7"),
                createVNode("td", null, "CASH_CODE"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u6279\u91CF\u590D\u6838\u5355\u53F7"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "\u7F16\u7801\u89C4\u5219\u751F\u6210")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7533\u8BF7\u4EBA"),
                createVNode("td", null, "CREATOR_NAME"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u7533\u8BF7\u4EBA"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "\u9ED8\u8BA4\u5F53\u524D\u7528\u6237")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7533\u8BF7\u65E5\u671F"),
                createVNode("td", null, "CREATE_TIME"),
                createVNode("td", null, "DatePicker"),
                createVNode("td", null, "\u7533\u8BF7\u65E5\u671F"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "\u9ED8\u8BA4\u5F53\u524D\u65F6\u95F4")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5BA1\u6838\u72B6\u6001"),
                createVNode("td", null, "HZ_APPROVE_STATUS"),
                createVNode("td", null, "Select(HWKF.APPROVE_STATUS)"),
                createVNode("td", null, "\u5BA1\u6838\u72B6\u6001"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "\u9ED8\u8BA4NEW")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5BA1\u6838\u4EBA"),
                createVNode("td", null, "CHECKER"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u5BA1\u6838\u4EBA"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "\u5BA1\u6279\u901A\u8FC7\u65F6\u8D4B\u503C")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5BA1\u6838\u65F6\u95F4"),
                createVNode("td", null, "CHECK_TIME"),
                createVNode("td", null, "DatePicker"),
                createVNode("td", null, "\u5BA1\u6838\u65F6\u95F4"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "\u5BA1\u6279\u901A\u8FC7\u65F6\u8D4B\u503C")
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, { title: "\u540E\u7AEF\u63A5\u53E3" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u63A5\u53E3</th><th${_scopeId}>\u65B9\u6CD5</th><th${_scopeId}>\u8DEF\u5F84</th><th${_scopeId}>\u8BF4\u660E</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u5217\u8868\u67E5\u8BE2</td><td${_scopeId}>GET</td><td${_scopeId}>\`/v1/{organizationId}/fin-fee-in-cash-heads\`</td><td${_scopeId}>\u67E5\u8BE2\u6279\u91CF\u590D\u6838\u5217\u8868</td></tr><tr${_scopeId}><td${_scopeId}>\u8BE6\u60C5\u67E5\u8BE2</td><td${_scopeId}>GET</td><td${_scopeId}>\`/v1/{organizationId}/fin-fee-in-cash-heads/{cashId}/detail\`</td><td${_scopeId}>\u67E5\u8BE2\u6279\u91CF\u590D\u6838\u8BE6\u60C5(\u542B\u5173\u8054\u5151\u73B0\u5355)</td></tr><tr${_scopeId}><td${_scopeId}>\u4FDD\u5B58</td><td${_scopeId}>POST</td><td${_scopeId}>\`/v1/{organizationId}/fin-fee-in-cash-heads\`</td><td${_scopeId}>\u521B\u5EFA\u6216\u66F4\u65B0\u6279\u91CF\u590D\u6838</td></tr><tr${_scopeId}><td${_scopeId}>\u5220\u9664</td><td${_scopeId}>DELETE</td><td${_scopeId}>\`/v1/{organizationId}/fin-fee-in-cash-heads\`</td><td${_scopeId}>\u5220\u9664\u6279\u91CF\u590D\u6838(\u4EC5NEW\u72B6\u6001)</td></tr></tbody></table>`);
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
                createVNode("td", null, "`/v1/{organizationId}/fin-fee-in-cash-heads`"),
                createVNode("td", null, "\u67E5\u8BE2\u6279\u91CF\u590D\u6838\u5217\u8868")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u8BE6\u60C5\u67E5\u8BE2"),
                createVNode("td", null, "GET"),
                createVNode("td", null, "`/v1/{organizationId}/fin-fee-in-cash-heads/{cashId}/detail`"),
                createVNode("td", null, "\u67E5\u8BE2\u6279\u91CF\u590D\u6838\u8BE6\u60C5(\u542B\u5173\u8054\u5151\u73B0\u5355)")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u4FDD\u5B58"),
                createVNode("td", null, "POST"),
                createVNode("td", null, "`/v1/{organizationId}/fin-fee-in-cash-heads`"),
                createVNode("td", null, "\u521B\u5EFA\u6216\u66F4\u65B0\u6279\u91CF\u590D\u6838")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5220\u9664"),
                createVNode("td", null, "DELETE"),
                createVNode("td", null, "`/v1/{organizationId}/fin-fee-in-cash-heads`"),
                createVNode("td", null, "\u5220\u9664\u6279\u91CF\u590D\u6838(\u4EC5NEW\u72B6\u6001)")
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
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5F39\u7A97\u540D\u79F0</th><th${_scopeId}>LOV\u7F16\u7801</th><th${_scopeId}>\u53C2\u6570</th><th${_scopeId}>\u8BF4\u660E</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u989D\u5EA6\u5185\u5151\u73B0\u5355</td><td${_scopeId}>-</td><td${_scopeId}>-</td><td${_scopeId}>\u9009\u62E9\u591A\u5F20NEW\u72B6\u6001\u7684\u989D\u5EA6\u5185\u5151\u73B0\u5355(FIN_FEE_TERMINAL_CASHOUT)</td></tr></tbody></table>`);
      } else {
        return [
          createVNode("table", { class: "kb-field-tbl" }, [
            createVNode("thead", null, [
              createVNode("tr", null, [
                createVNode("th", null, "\u5F39\u7A97\u540D\u79F0"),
                createVNode("th", null, "LOV\u7F16\u7801"),
                createVNode("th", null, "\u53C2\u6570"),
                createVNode("th", null, "\u8BF4\u660E")
              ])
            ]),
            createVNode("tbody", null, [
              createVNode("tr", null, [
                createVNode("td", null, "\u989D\u5EA6\u5185\u5151\u73B0\u5355"),
                createVNode("td", null, "-"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u9009\u62E9\u591A\u5F20NEW\u72B6\u6001\u7684\u989D\u5EA6\u5185\u5151\u73B0\u5355(FIN_FEE_TERMINAL_CASHOUT)")
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
        _push2(`<p${_scopeId}>\u672C\u9875\u9762\u65E0\u5BFC\u5165\u529F\u80FD\u3002</p>`);
      } else {
        return [
          createVNode("p", null, "\u672C\u9875\u9762\u65E0\u5BFC\u5165\u529F\u80FD\u3002")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, { title: "\u5176\u4ED6\u6309\u94AE" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u6309\u94AE\u540D\u79F0</th><th${_scopeId}>\u89E6\u53D1\u6761\u4EF6</th><th${_scopeId}>\u6267\u884C\u903B\u8F91</th><th${_scopeId}>\u63A5\u53E3\u8C03\u7528</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u5220\u9664</td><td${_scopeId}>HZ_APPROVE_STATUS\u4E3ANEW</td><td${_scopeId}>\u5220\u9664\u6279\u91CF\u590D\u6838\u5355\uFF0C\u89E3\u9664\u5151\u73B0\u5355\u5173\u8054</td><td${_scopeId}>DELETE</td></tr></tbody></table>`);
      } else {
        return [
          createVNode("table", { class: "kb-field-tbl" }, [
            createVNode("thead", null, [
              createVNode("tr", null, [
                createVNode("th", null, "\u6309\u94AE\u540D\u79F0"),
                createVNode("th", null, "\u89E6\u53D1\u6761\u4EF6"),
                createVNode("th", null, "\u6267\u884C\u903B\u8F91"),
                createVNode("th", null, "\u63A5\u53E3\u8C03\u7528")
              ])
            ]),
            createVNode("tbody", null, [
              createVNode("tr", null, [
                createVNode("td", null, "\u5220\u9664"),
                createVNode("td", null, "HZ_APPROVE_STATUS\u4E3ANEW"),
                createVNode("td", null, "\u5220\u9664\u6279\u91CF\u590D\u6838\u5355\uFF0C\u89E3\u9664\u5151\u73B0\u5355\u5173\u8054"),
                createVNode("td", null, "DELETE")
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
        _push2(`<ul${_scopeId}><li${_scopeId}>\u6821\u9A8C1\uFF1A\u81F3\u5C11\u9009\u62E9\u4E00\u5F20\u5151\u73B0\u5355 \u2014\u2014 \u786E\u4FDD\u6279\u91CF\u590D\u6838\u6709\u5173\u8054\u6570\u636E</li><li${_scopeId}><strong${_scopeId}>\u8BE6\u7EC6\u903B\u8F91</strong>\uFF1A\u524D\u7AEF\u6821\u9A8C\u5DF2\u9009\u62E9\u5151\u73B0\u5355\u6570\u91CF&gt;0</li><li${_scopeId}><strong${_scopeId}>\u7CFB\u7EDF\u4F53\u73B0</strong>\uFF1A\u524D\u7AEF\u6821\u9A8C</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A<code${_scopeId}>SELECT COUNT(*) FROM FIN_FEE_TERMINAL_CASHOUT WHERE BATCH_CASH_ID={cashId}</code></li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, "\u6821\u9A8C1\uFF1A\u81F3\u5C11\u9009\u62E9\u4E00\u5F20\u5151\u73B0\u5355 \u2014\u2014 \u786E\u4FDD\u6279\u91CF\u590D\u6838\u6709\u5173\u8054\u6570\u636E"),
            createVNode("li", null, [
              createVNode("strong", null, "\u8BE6\u7EC6\u903B\u8F91"),
              createTextVNode("\uFF1A\u524D\u7AEF\u6821\u9A8C\u5DF2\u9009\u62E9\u5151\u73B0\u5355\u6570\u91CF>0")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u7CFB\u7EDF\u4F53\u73B0"),
              createTextVNode("\uFF1A\u524D\u7AEF\u6821\u9A8C")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u6392\u67E5SQL"),
              createTextVNode("\uFF1A"),
              createVNode("code", null, "SELECT COUNT(*) FROM FIN_FEE_TERMINAL_CASHOUT WHERE BATCH_CASH_ID={cashId}")
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
        _push2(`<ul${_scopeId}><li${_scopeId}>\u6821\u9A8C1\uFF1A\u5173\u8054\u5151\u73B0\u5355\u72B6\u6001\u6821\u9A8C \u2014\u2014 \u786E\u4FDD\u6240\u6709\u5173\u8054\u5151\u73B0\u5355\u4E3ANEW\u72B6\u6001</li><li${_scopeId}><strong${_scopeId}>\u8BE6\u7EC6\u903B\u8F91</strong>\uFF1A\u63D0\u4EA4\u65F6\u6821\u9A8C\u6240\u6709\u5173\u8054\u5151\u73B0\u5355hzApproveStatus=NEW</li><li${_scopeId}><strong${_scopeId}>\u7CFB\u7EDF\u4F53\u73B0</strong>\uFF1A\u540E\u7AEF\u6821\u9A8C</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A<code${_scopeId}>SELECT * FROM FIN_FEE_TERMINAL_CASHOUT WHERE BATCH_CASH_ID={cashId} AND HZ_APPROVE_STATUS!=&#39;NEW&#39;</code></li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, "\u6821\u9A8C1\uFF1A\u5173\u8054\u5151\u73B0\u5355\u72B6\u6001\u6821\u9A8C \u2014\u2014 \u786E\u4FDD\u6240\u6709\u5173\u8054\u5151\u73B0\u5355\u4E3ANEW\u72B6\u6001"),
            createVNode("li", null, [
              createVNode("strong", null, "\u8BE6\u7EC6\u903B\u8F91"),
              createTextVNode("\uFF1A\u63D0\u4EA4\u65F6\u6821\u9A8C\u6240\u6709\u5173\u8054\u5151\u73B0\u5355hzApproveStatus=NEW")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u7CFB\u7EDF\u4F53\u73B0"),
              createTextVNode("\uFF1A\u540E\u7AEF\u6821\u9A8C")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u6392\u67E5SQL"),
              createTextVNode("\uFF1A"),
              createVNode("code", null, "SELECT * FROM FIN_FEE_TERMINAL_CASHOUT WHERE BATCH_CASH_ID={cashId} AND HZ_APPROVE_STATUS!='NEW'")
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
        _push2(`<div class="language-text"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>text</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>NEW(\u65B0\u5EFA) \u2500\u2500\u63D0\u4EA4\u5BA1\u6279\u2500\u2500\u2192 RUN(\u5BA1\u6279\u4E2D) \u2500\u2500\u252C\u2500\u2500\u5BA1\u6279\u901A\u8FC7\u2500\u2500\u2192 APPROVED(\u5DF2\u5BA1\u6279)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>                                       \u2502              \u251C\u2500 \u6279\u91CF\u56DE\u5199\u5151\u73B0\u5355APPROVED</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>                                       \u2502              \u251C\u2500 \u6279\u91CF\u540C\u6B65\u8D44\u91D1\u6C60</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>                                       \u2502              \u2514\u2500 \u6279\u91CF\u63A8\u9001MBO</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>                                       \u2502</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>                                       \u2514\u2500\u2500\u5BA1\u6279\u9A73\u56DE\u2500\u2500\u2192 REJECTED(\u5DF2\u9A73\u56DE)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}></span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>NEW \u2500\u2500\u5220\u9664\u2500\u2500\u2192 (\u5220\u9664)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}></span></span></code></pre></div>`);
      } else {
        return [
          createVNode("div", { class: "language-text" }, [
            createVNode("button", {
              title: "Copy Code",
              class: "copy"
            }),
            createVNode("span", { class: "lang" }, "text"),
            createVNode("pre", { class: "shiki" }, [
              createVNode("code", null, [
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "NEW(\u65B0\u5EFA) \u2500\u2500\u63D0\u4EA4\u5BA1\u6279\u2500\u2500\u2192 RUN(\u5BA1\u6279\u4E2D) \u2500\u2500\u252C\u2500\u2500\u5BA1\u6279\u901A\u8FC7\u2500\u2500\u2192 APPROVED(\u5DF2\u5BA1\u6279)")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "                                       \u2502              \u251C\u2500 \u6279\u91CF\u56DE\u5199\u5151\u73B0\u5355APPROVED")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "                                       \u2502              \u251C\u2500 \u6279\u91CF\u540C\u6B65\u8D44\u91D1\u6C60")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "                                       \u2502              \u2514\u2500 \u6279\u91CF\u63A8\u9001MBO")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "                                       \u2502")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "                                       \u2514\u2500\u2500\u5BA1\u6279\u9A73\u56DE\u2500\u2500\u2192 REJECTED(\u5DF2\u9A73\u56DE)")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } })
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "NEW \u2500\u2500\u5220\u9664\u2500\u2500\u2192 (\u5220\u9664)")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } })
                ])
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, { title: "\u5DE5\u4F5C\u6D41" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u5DE5\u4F5C\u6D41\u7F16\u7801</strong>\uFF1A<code${_scopeId}>STORE_FIN_FEE_IN_CASH_HEAD</code>\uFF08MCS_AW\u989D\u5EA6\u5185\u6279\u91CF\u590D\u6838\uFF09</li><li${_scopeId}><strong${_scopeId}>\u7F16\u7801\u89C4\u5219</strong>\uFF1A\u6279\u91CF\u590D\u6838\u5355\u53F7\u7531\u7CFB\u7EDF\u751F\u6210</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u5DE5\u4F5C\u6D41\u7F16\u7801"),
              createTextVNode("\uFF1A"),
              createVNode("code", null, "STORE_FIN_FEE_IN_CASH_HEAD"),
              createTextVNode("\uFF08MCS_AW\u989D\u5EA6\u5185\u6279\u91CF\u590D\u6838\uFF09")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u7F16\u7801\u89C4\u5219"),
              createTextVNode("\uFF1A\u6279\u91CF\u590D\u6838\u5355\u53F7\u7531\u7CFB\u7EDF\u751F\u6210")
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, { title: "FIN_FEE_IN_CASH_HEAD\uFF08\u989D\u5EA6\u5185\u5151\u73B0\u6279\u91CF\u590D\u6838\u8868\uFF09" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5B57\u6BB5\u540D</th><th${_scopeId}>\u7C7B\u578B</th><th${_scopeId}>\u91CA\u4E49</th><th${_scopeId}>\u5BF9\u5E94\u754C\u9762\u5B57\u6BB5</th><th${_scopeId}>\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>CASH_ID</td><td${_scopeId}>Long</td><td${_scopeId}>\u4E3B\u952EID</td><td${_scopeId}>-</td><td${_scopeId}>\u81EA\u589E</td></tr><tr${_scopeId}><td${_scopeId}>CASH_CODE</td><td${_scopeId}>String</td><td${_scopeId}>\u6279\u91CF\u590D\u6838\u5355\u53F7</td><td${_scopeId}>\u6279\u91CF\u590D\u6838\u5355\u53F7</td><td${_scopeId}>\u7F16\u7801\u89C4\u5219\u751F\u6210</td></tr><tr${_scopeId}><td${_scopeId}>ORGANIZATION_ID</td><td${_scopeId}>Long</td><td${_scopeId}>\u7EC4\u7EC7ID</td><td${_scopeId}>-</td><td${_scopeId}>\u7CFB\u7EDF\u8D4B\u503C</td></tr><tr${_scopeId}><td${_scopeId}>CREATOR</td><td${_scopeId}>String</td><td${_scopeId}>\u7533\u8BF7\u4EBA</td><td${_scopeId}>-</td><td${_scopeId}>\u7CFB\u7EDF\u8D4B\u503C</td></tr><tr${_scopeId}><td${_scopeId}>CREATE_TIME</td><td${_scopeId}>Date</td><td${_scopeId}>\u7533\u8BF7\u65E5\u671F</td><td${_scopeId}>\u7533\u8BF7\u65E5\u671F</td><td${_scopeId}>\u7CFB\u7EDF\u8D4B\u503C</td></tr><tr${_scopeId}><td${_scopeId}>CREATOR_NAME</td><td${_scopeId}>String</td><td${_scopeId}>\u7533\u8BF7\u4EBA\u540D\u79F0</td><td${_scopeId}>\u7533\u8BF7\u4EBA</td><td${_scopeId}>\u7CFB\u7EDF\u8D4B\u503C</td></tr><tr${_scopeId}><td${_scopeId}>UPDATOR</td><td${_scopeId}>String</td><td${_scopeId}>\u66F4\u65B0\u4EBA</td><td${_scopeId}>-</td><td${_scopeId}>\u7CFB\u7EDF\u8D4B\u503C</td></tr><tr${_scopeId}><td${_scopeId}>UPDATE_TIME</td><td${_scopeId}>Date</td><td${_scopeId}>\u66F4\u65B0\u65E5\u671F</td><td${_scopeId}>-</td><td${_scopeId}>\u7CFB\u7EDF\u8D4B\u503C</td></tr><tr${_scopeId}><td${_scopeId}>UPDATOR_NAME</td><td${_scopeId}>String</td><td${_scopeId}>\u66F4\u65B0\u4EBA\u540D\u79F0</td><td${_scopeId}>-</td><td${_scopeId}>\u7CFB\u7EDF\u8D4B\u503C</td></tr><tr${_scopeId}><td${_scopeId}>STAT</td><td${_scopeId}>Long</td><td${_scopeId}>\u5355\u636E\u72B6\u6001</td><td${_scopeId}>-</td><td${_scopeId}>\u7CFB\u7EDF\u7EF4\u62A4</td></tr><tr${_scopeId}><td${_scopeId}>WFID</td><td${_scopeId}>Long</td><td${_scopeId}>\u6D41\u7A0BID</td><td${_scopeId}>-</td><td${_scopeId}>\u7CFB\u7EDF\u7EF4\u62A4</td></tr><tr${_scopeId}><td${_scopeId}>WFFLAG</td><td${_scopeId}>Long</td><td${_scopeId}>\u6D41\u7A0B\u72B6\u6001</td><td${_scopeId}>-</td><td${_scopeId}>\u7CFB\u7EDF\u7EF4\u62A4</td></tr><tr${_scopeId}><td${_scopeId}>CHECKER</td><td${_scopeId}>String</td><td${_scopeId}>\u5BA1\u6838\u4EBA</td><td${_scopeId}>\u5BA1\u6838\u4EBA</td><td${_scopeId}>\u5BA1\u6279\u901A\u8FC7\u65F6\u8D4B\u503C</td></tr><tr${_scopeId}><td${_scopeId}>CHECK_TIME</td><td${_scopeId}>Date</td><td${_scopeId}>\u5BA1\u6838\u65F6\u95F4</td><td${_scopeId}>\u5BA1\u6838\u65F6\u95F4</td><td${_scopeId}>\u5BA1\u6279\u901A\u8FC7\u65F6\u8D4B\u503C</td></tr><tr${_scopeId}><td${_scopeId}>AUDIT_STAT</td><td${_scopeId}>String</td><td${_scopeId}>\u5BA1\u6838\u72B6\u6001</td><td${_scopeId}>-</td><td${_scopeId}>\u7CFB\u7EDF\u7EF4\u62A4</td></tr><tr${_scopeId}><td${_scopeId}>HZ_INSTANCE_ID</td><td${_scopeId}>Long</td><td${_scopeId}>\u6D41\u7A0B\u5B9E\u4F8BID</td><td${_scopeId}>-</td><td${_scopeId}>\u5DE5\u4F5C\u6D41\u542F\u52A8\u540E\u8D4B\u503C</td></tr><tr${_scopeId}><td${_scopeId}>HZ_APPROVE_STATUS</td><td${_scopeId}>String</td><td${_scopeId}>\u6D41\u7A0B\u5BA1\u6279\u72B6\u6001</td><td${_scopeId}>\u5BA1\u6838\u72B6\u6001</td><td${_scopeId}>NEW/RUN/APPROVED/REJECTED</td></tr></tbody></table>`);
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
                createVNode("td", null, "CASH_ID"),
                createVNode("td", null, "Long"),
                createVNode("td", null, "\u4E3B\u952EID"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u81EA\u589E")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "CASH_CODE"),
                createVNode("td", null, "String"),
                createVNode("td", null, "\u6279\u91CF\u590D\u6838\u5355\u53F7"),
                createVNode("td", null, "\u6279\u91CF\u590D\u6838\u5355\u53F7"),
                createVNode("td", null, "\u7F16\u7801\u89C4\u5219\u751F\u6210")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "ORGANIZATION_ID"),
                createVNode("td", null, "Long"),
                createVNode("td", null, "\u7EC4\u7EC7ID"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u7CFB\u7EDF\u8D4B\u503C")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "CREATOR"),
                createVNode("td", null, "String"),
                createVNode("td", null, "\u7533\u8BF7\u4EBA"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u7CFB\u7EDF\u8D4B\u503C")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "CREATE_TIME"),
                createVNode("td", null, "Date"),
                createVNode("td", null, "\u7533\u8BF7\u65E5\u671F"),
                createVNode("td", null, "\u7533\u8BF7\u65E5\u671F"),
                createVNode("td", null, "\u7CFB\u7EDF\u8D4B\u503C")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "CREATOR_NAME"),
                createVNode("td", null, "String"),
                createVNode("td", null, "\u7533\u8BF7\u4EBA\u540D\u79F0"),
                createVNode("td", null, "\u7533\u8BF7\u4EBA"),
                createVNode("td", null, "\u7CFB\u7EDF\u8D4B\u503C")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "UPDATOR"),
                createVNode("td", null, "String"),
                createVNode("td", null, "\u66F4\u65B0\u4EBA"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u7CFB\u7EDF\u8D4B\u503C")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "UPDATE_TIME"),
                createVNode("td", null, "Date"),
                createVNode("td", null, "\u66F4\u65B0\u65E5\u671F"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u7CFB\u7EDF\u8D4B\u503C")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "UPDATOR_NAME"),
                createVNode("td", null, "String"),
                createVNode("td", null, "\u66F4\u65B0\u4EBA\u540D\u79F0"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u7CFB\u7EDF\u8D4B\u503C")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "STAT"),
                createVNode("td", null, "Long"),
                createVNode("td", null, "\u5355\u636E\u72B6\u6001"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u7CFB\u7EDF\u7EF4\u62A4")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "WFID"),
                createVNode("td", null, "Long"),
                createVNode("td", null, "\u6D41\u7A0BID"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u7CFB\u7EDF\u7EF4\u62A4")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "WFFLAG"),
                createVNode("td", null, "Long"),
                createVNode("td", null, "\u6D41\u7A0B\u72B6\u6001"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u7CFB\u7EDF\u7EF4\u62A4")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "CHECKER"),
                createVNode("td", null, "String"),
                createVNode("td", null, "\u5BA1\u6838\u4EBA"),
                createVNode("td", null, "\u5BA1\u6838\u4EBA"),
                createVNode("td", null, "\u5BA1\u6279\u901A\u8FC7\u65F6\u8D4B\u503C")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "CHECK_TIME"),
                createVNode("td", null, "Date"),
                createVNode("td", null, "\u5BA1\u6838\u65F6\u95F4"),
                createVNode("td", null, "\u5BA1\u6838\u65F6\u95F4"),
                createVNode("td", null, "\u5BA1\u6279\u901A\u8FC7\u65F6\u8D4B\u503C")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "AUDIT_STAT"),
                createVNode("td", null, "String"),
                createVNode("td", null, "\u5BA1\u6838\u72B6\u6001"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u7CFB\u7EDF\u7EF4\u62A4")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "HZ_INSTANCE_ID"),
                createVNode("td", null, "Long"),
                createVNode("td", null, "\u6D41\u7A0B\u5B9E\u4F8BID"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u5DE5\u4F5C\u6D41\u542F\u52A8\u540E\u8D4B\u503C")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "HZ_APPROVE_STATUS"),
                createVNode("td", null, "String"),
                createVNode("td", null, "\u6D41\u7A0B\u5BA1\u6279\u72B6\u6001"),
                createVNode("td", null, "\u5BA1\u6838\u72B6\u6001"),
                createVNode("td", null, "NEW/RUN/APPROVED/REJECTED")
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, { title: "FIN_FEE_TERMINAL_CASHOUT\uFF08\u989D\u5EA6\u5185\u95E8\u5E97\u88C5\u4FEE\u5151\u73B0\u8868\uFF0C\u5173\u8054\u8868\uFF09" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5B57\u6BB5\u540D</th><th${_scopeId}>\u7C7B\u578B</th><th${_scopeId}>\u91CA\u4E49</th><th${_scopeId}>\u5BF9\u5E94\u754C\u9762\u5B57\u6BB5</th><th${_scopeId}>\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>TERMINAL_CASHOUT_ID</td><td${_scopeId}>Long</td><td${_scopeId}>\u5151\u73B0ID</td><td${_scopeId}>-</td><td${_scopeId}>\u81EA\u589E</td></tr><tr${_scopeId}><td${_scopeId}>CASH_ID</td><td${_scopeId}>Long</td><td${_scopeId}>\u6279\u91CF\u590D\u6838ID</td><td${_scopeId}>-</td><td${_scopeId}>\u5173\u8054FIN_FEE_IN_CASH_HEAD</td></tr><tr${_scopeId}><td${_scopeId}>TERMINAL_CASHOUT_CODE</td><td${_scopeId}>String</td><td${_scopeId}>\u5151\u73B0\u5355\u53F7</td><td${_scopeId}>-</td><td${_scopeId}>\u7F16\u7801\u89C4\u5219\u751F\u6210</td></tr><tr${_scopeId}><td${_scopeId}>CHECK_BX_ID</td><td${_scopeId}>Long</td><td${_scopeId}>\u9A8C\u6536\u62A5\u9500\u5355ID</td><td${_scopeId}>-</td><td${_scopeId}>\u5173\u8054\u9A8C\u6536\u62A5\u9500\u5355</td></tr><tr${_scopeId}><td${_scopeId}>IN_THIS_CASHOUT_AMT</td><td${_scopeId}>BigDecimal</td><td${_scopeId}>\u989D\u5EA6\u5185\u672C\u6B21\u5151\u73B0\u91D1\u989D</td><td${_scopeId}>-</td><td${_scopeId}>\u7528\u6237\u8F93\u5165</td></tr><tr${_scopeId}><td${_scopeId}>HZ_APPROVE_STATUS</td><td${_scopeId}>String</td><td${_scopeId}>\u6D41\u7A0B\u5BA1\u6279\u72B6\u6001</td><td${_scopeId}>-</td><td${_scopeId}>\u968F\u6279\u91CF\u590D\u6838\u5355\u72B6\u6001\u8054\u52A8</td></tr></tbody></table>`);
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
                createVNode("td", null, "TERMINAL_CASHOUT_ID"),
                createVNode("td", null, "Long"),
                createVNode("td", null, "\u5151\u73B0ID"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u81EA\u589E")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "CASH_ID"),
                createVNode("td", null, "Long"),
                createVNode("td", null, "\u6279\u91CF\u590D\u6838ID"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u5173\u8054FIN_FEE_IN_CASH_HEAD")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "TERMINAL_CASHOUT_CODE"),
                createVNode("td", null, "String"),
                createVNode("td", null, "\u5151\u73B0\u5355\u53F7"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u7F16\u7801\u89C4\u5219\u751F\u6210")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "CHECK_BX_ID"),
                createVNode("td", null, "Long"),
                createVNode("td", null, "\u9A8C\u6536\u62A5\u9500\u5355ID"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u5173\u8054\u9A8C\u6536\u62A5\u9500\u5355")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "IN_THIS_CASHOUT_AMT"),
                createVNode("td", null, "BigDecimal"),
                createVNode("td", null, "\u989D\u5EA6\u5185\u672C\u6B21\u5151\u73B0\u91D1\u989D"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u7528\u6237\u8F93\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "HZ_APPROVE_STATUS"),
                createVNode("td", null, "String"),
                createVNode("td", null, "\u6D41\u7A0B\u5BA1\u6279\u72B6\u6001"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u968F\u6279\u91CF\u590D\u6838\u5355\u72B6\u6001\u8054\u52A8")
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div><div id="faq" style="${ssrRenderStyle({ "display": "none" })}"><div class="tab-pad"><div class="kl-wrap">`);
  _push(ssrRenderComponent(_component_KbCard, { title: "Q1\uFF1A\u63D0\u4EA4\u65F6\u62A5\u5173\u8054\u5151\u73B0\u5355\u72B6\u6001\u5F02\u5E38" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p${_scopeId}><strong${_scopeId}>\u6839\u56E0</strong>\uFF1A\u5173\u8054\u7684\u5151\u73B0\u5355\u4E2D\u5B58\u5728\u975ENEW\u72B6\u6001\u7684\u8BB0\u5F55</p><p${_scopeId}><strong${_scopeId}>\u89E3\u51B3\u65B9\u6848</strong>\uFF1A\u786E\u4FDD\u6240\u6709\u5173\u8054\u5151\u73B0\u5355\u5747\u4E3ANEW\u72B6\u6001\u540E\u518D\u63D0\u4EA4</p>`);
      } else {
        return [
          createVNode("p", null, [
            createVNode("strong", null, "\u6839\u56E0"),
            createTextVNode("\uFF1A\u5173\u8054\u7684\u5151\u73B0\u5355\u4E2D\u5B58\u5728\u975ENEW\u72B6\u6001\u7684\u8BB0\u5F55")
          ]),
          createVNode("p", null, [
            createVNode("strong", null, "\u89E3\u51B3\u65B9\u6848"),
            createTextVNode("\uFF1A\u786E\u4FDD\u6240\u6709\u5173\u8054\u5151\u73B0\u5355\u5747\u4E3ANEW\u72B6\u6001\u540E\u518D\u63D0\u4EA4")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, { title: "Q2\uFF1A\u5220\u9664\u65F6\u62A5\u72B6\u6001\u4E0D\u5141\u8BB8" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p${_scopeId}><strong${_scopeId}>\u6839\u56E0</strong>\uFF1A\u6279\u91CF\u590D\u6838\u5355\u72B6\u6001\u975ENEW</p><p${_scopeId}><strong${_scopeId}>\u89E3\u51B3\u65B9\u6848</strong>\uFF1A\u4EC5NEW\u72B6\u6001\u53EF\u5220\u9664</p>`);
      } else {
        return [
          createVNode("p", null, [
            createVNode("strong", null, "\u6839\u56E0"),
            createTextVNode("\uFF1A\u6279\u91CF\u590D\u6838\u5355\u72B6\u6001\u975ENEW")
          ]),
          createVNode("p", null, [
            createVNode("strong", null, "\u89E3\u51B3\u65B9\u6848"),
            createTextVNode("\uFF1A\u4EC5NEW\u72B6\u6001\u53EF\u5220\u9664")
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
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u65E5\u671F</th><th${_scopeId}>\u63D0\u4EA4ID</th><th${_scopeId}>\u63D0\u4EA4\u4EBA</th><th${_scopeId}>\u63D0\u4EA4\u5185\u5BB9</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>2025-12-01</td><td${_scopeId}>-</td><td${_scopeId}>hfy</td><td${_scopeId}>\u521D\u59CB\u521B\u5EFAFinFeeInCashHeadServiceImpl\u5E94\u7528\u670D\u52A1</td></tr><tr${_scopeId}><td${_scopeId}>2026-08-30</td><td${_scopeId}>-</td><td${_scopeId}>-</td><td${_scopeId}>\u6309skill\u89C4\u8303\u91CD\u5199\u4E1A\u52A1\u903B\u8F91\u68B3\u7406MD\u6587\u4EF6</td></tr></tbody></table>`);
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
                createVNode("td", null, "2025-12-01"),
                createVNode("td", null, "-"),
                createVNode("td", null, "hfy"),
                createVNode("td", null, "\u521D\u59CB\u521B\u5EFAFinFeeInCashHeadServiceImpl\u5E94\u7528\u670D\u52A1")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "2026-08-30"),
                createVNode("td", null, "-"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u6309skill\u89C4\u8303\u91CD\u5199\u4E1A\u52A1\u903B\u8F91\u68B3\u7406MD\u6587\u4EF6")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("\u95E8\u5E97\u7BA1\u7406/\u95E8\u5E97\u88C5\u4FEE/\u989D\u5EA6\u5185\u5151\u73B0\u6279\u91CF\u590D\u6838/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
