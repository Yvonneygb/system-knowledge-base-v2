import { resolveComponent, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.6ab74304.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"\u95E8\u5E97\u7BA1\u7406/\u95E8\u5E97\u88C5\u4FEE/\u95E8\u5E97\u9A8C\u6536\u4E0E\u62A5\u9500\u5355/index.md"}');
const _sfc_main = { name: "\u95E8\u5E97\u7BA1\u7406/\u95E8\u5E97\u88C5\u4FEE/\u95E8\u5E97\u9A8C\u6536\u4E0E\u62A5\u9500\u5355/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_BreadcrumbTabs = resolveComponent("BreadcrumbTabs");
  const _component_KbCard = resolveComponent("KbCard");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_BreadcrumbTabs, null, null, _parent));
  _push(`<div id="biz-intro" style="${ssrRenderStyle({ "display": "none" })}"><div class="tab-pad"><div class="kl-wrap"><div class="kl-card"><div class="biz-kl-hdr"><span class="biz-tag" style="${ssrRenderStyle({ "background": "rgba(124,58,237,0.08)", "color": "#7C3AED", "border-color": "rgba(124,58,237,0.18)" })}"> \u5B9A\u4E49</span><h2>\u95E8\u5E97\u9A8C\u6536\u4E0E\u62A5\u9500\u5355\u662F\u4EC0\u4E48</h2><p>\u95E8\u5E97\u88C5\u4FEE\u5B8C\u5DE5\u540E\uFF0C\u5BF9\u88C5\u4FEE\u6210\u679C\u8FDB\u884C\u9A8C\u6536\u786E\u8BA4\uFF0C\u5E76\u636E\u9A8C\u6536\u9762\u79EF\u3001\u8BC4\u5206\u4E0E\u88C5\u4FEE\u6807\u51C6\u8BA1\u7B97\u53EF\u62A5\u9500\u91D1\u989D\uFF0C\u5F62\u6210\u540E\u7EED\u88C5\u4FEE\u5151\u73B0\u7684\u4F9D\u636E</p></div><div class="biz-2col-inner"><div class="kl-col-box"><div style="${ssrRenderStyle({ "display": "flex", "align-items": "center", "gap": "10px", "margin-bottom": "12px" })}"><div style="${ssrRenderStyle({ "width": "40px", "height": "40px", "border-radius": "10px", "display": "flex", "align-items": "center", "justify-content": "center", "background": "linear-gradient(135deg,#7c3aed,#6d28d9)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="3" width="5" height="5" rx="1" stroke="white" stroke-width="1.5"></rect><path d="M3 6.5L4.5 8L7 5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9 5H14" stroke="white" stroke-width="1.5" stroke-linecap="round"></path><rect x="2" y="10" width="5" height="3" rx="1" stroke="white" stroke-width="1.5"></rect><path d="M9 10H14" stroke="white" stroke-width="1.5" stroke-linecap="round"></path><path d="M9 13H13" stroke="white" stroke-width="1.5" stroke-linecap="round"></path></svg></div><h4 style="${ssrRenderStyle({ "font-size": "1rem", "font-weight": "800", "color": "#1F2937", "margin": "0" })}">\u8FD9\u5F20\u5355\u89E3\u51B3\u4EC0\u4E48</h4></div><p style="${ssrRenderStyle({ "font-size": "0.78rem", "font-weight": "600", "color": "#6B7280", "margin": "0 0 10px" })}">\u4E1A\u52A1\u52A8\u673A</p><div style="${ssrRenderStyle({ "display": "flex", "flex-direction": "column", "gap": "8px" })}"><div style="${ssrRenderStyle({ "display": "flex", "align-items": "flex-start", "gap": "8px", "padding": "8px 10px", "background": "#F5F3FF", "border-radius": "8px" })}"><div style="${ssrRenderStyle({ "font-size": ".75rem" })}"><strong>\u9A8C\u6536\u786E\u8BA4</strong> \u2014 \u8BB0\u5F55\u88C5\u4FEE\u662F\u5426\u5408\u683C\uFF0C\u4F5C\u4E3A\u62A5\u9500\u4E0E\u5151\u73B0\u7684\u524D\u7F6E\u6761\u4EF6</div></div><div style="${ssrRenderStyle({ "display": "flex", "align-items": "flex-start", "gap": "8px", "padding": "8px 10px", "background": "#F5F3FF", "border-radius": "8px" })}"><div style="${ssrRenderStyle({ "font-size": ".75rem" })}"><strong>\u7B97\u53EF\u62A5\u9500</strong> \u2014 \u636E\u9A8C\u6536\u9762\u79EF\u3001\u8BC4\u5206\u7387\u4E0E\u6807\u51C6\u81EA\u52A8\u5F97\u51FA\u989D\u5EA6\u5185/\u5916\u53EF\u62A5\u9500\u91D1\u989D</div></div><div style="${ssrRenderStyle({ "display": "flex", "align-items": "flex-start", "gap": "8px", "padding": "8px 10px", "background": "#F5F3FF", "border-radius": "8px" })}"><div style="${ssrRenderStyle({ "font-size": ".75rem" })}"><strong>\u652F\u6491\u5151\u73B0</strong> \u2014 \u9A8C\u6536\u62A5\u9500\u5355\u662F\u540E\u7EED\u989D\u5EA6\u5185/\u5916\u88C5\u4FEE\u5151\u73B0\u7684\u6570\u636E\u6765\u6E90</div></div></div></div><div class="kl-col-box alt"><div style="${ssrRenderStyle({ "display": "flex", "align-items": "center", "gap": "10px", "margin-bottom": "12px" })}"><div style="${ssrRenderStyle({ "width": "40px", "height": "40px", "border-radius": "10px", "display": "flex", "align-items": "center", "justify-content": "center", "background": "linear-gradient(135deg,#16A34A,#15803D)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="2" width="10" height="12" rx="2" stroke="white" stroke-width="1.5"></rect><path d="M5.5 6L7 7.5L10.5 4.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></div><h4 style="${ssrRenderStyle({ "font-size": "1rem", "font-weight": "800", "color": "#1F2937", "margin": "0" })}">\u5355\u636E\u8FB9\u754C</h4></div><p style="${ssrRenderStyle({ "font-size": "0.78rem", "font-weight": "600", "color": "#6B7280", "margin": "0 0 10px" })}">\u9002\u7528\u8303\u56F4</p><div style="${ssrRenderStyle({ "display": "flex", "flex-direction": "column", "gap": "8px" })}"><div style="${ssrRenderStyle({ "display": "flex", "align-items": "flex-start", "gap": "8px", "padding": "8px 10px", "background": "#F0FDF4", "border-radius": "8px" })}"><div style="${ssrRenderStyle({ "font-size": ".75rem" })}"><strong>\u6E90\u4E8E\u7533\u8BF7</strong> \u2014 \u5FC5\u987B\u5173\u8054\u5DF2\u5BA1\u6279\u7684\u95E8\u5E97\u88C5\u4FEE\u7533\u8BF7\u5355\uFF0C\u627F\u63A5\u5176\u88C5\u4FEE\u6807\u51C6</div></div><div style="${ssrRenderStyle({ "display": "flex", "align-items": "flex-start", "gap": "8px", "padding": "8px 10px", "background": "#F0FDF4", "border-radius": "8px" })}"><div style="${ssrRenderStyle({ "font-size": ".75rem" })}"><strong>\u4E09\u5757\u91D1\u989D</strong> \u2014 \u533A\u5206\u989D\u5EA6\u5185\u3001\u989D\u5EA6\u5916\u3001\u95E8\u5934\u4E09\u7C7B\u5206\u522B\u6838\u7B97\u53EF\u62A5\u9500\u91D1\u989D</div></div><div style="${ssrRenderStyle({ "display": "flex", "align-items": "flex-start", "gap": "8px", "padding": "8px 10px", "background": "#F0FDF4", "border-radius": "8px" })}"><div style="${ssrRenderStyle({ "font-size": ".75rem" })}"><strong>\u53EF\u4F5C\u5E9F</strong> \u2014 \u5F02\u5E38\u60C5\u51B5\u4E0B\u53EF\u4F5C\u5E9F\uFF0C\u4F5C\u5E9F\u540E\u91CA\u653E\u76F8\u5173\u989D\u5EA6\u5360\u7528</div></div></div></div></div></div><div class="kl-card"><div class="biz-kl-hdr"><span class="biz-tag" style="${ssrRenderStyle({ "background": "rgba(124,58,237,0.08)", "color": "#7C3AED", "border-color": "rgba(124,58,237,0.18)" })}"> \u6D41\u7A0B</span><h2>\u8C01\u5728\u7528\uFF0C\u600E\u4E48\u6D41\u8F6C</h2><p>\u7531\u95E8\u5E97\u4E1A\u52A1\u4EBA\u5458\u53D1\u8D77\u9A8C\u6536\u62A5\u9500\uFF0C\u7ECF\u5BA1\u6279\u901A\u8FC7\u540E\u5373\u53EF\u53D1\u8D77\u88C5\u4FEE\u5151\u73B0</p></div><div class="biz-steps"><div class="biz-step-item"><div class="biz-step-circle" style="${ssrRenderStyle({ "background": "linear-gradient(135deg,#7C3AED,#6D28D9)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 3V13" stroke="white" stroke-width="1.5" stroke-linecap="round"></path><path d="M4 6L8 3L12 6" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></div><h5>\u65B0\u5EFA\u62A5\u9500\u5355</h5><small>\u5173\u8054\u88C5\u4FEE\u7533\u8BF7<br>\u586B\u5199\u9A8C\u6536/\u62A5\u9500\u4FE1\u606F</small></div><div class="biz-step-arrow">\u2192</div><div class="biz-step-item"><div class="biz-step-circle" style="${ssrRenderStyle({ "background": "linear-gradient(135deg,#3B82F6,#2563EB)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="2" width="10" height="12" rx="2" stroke="white" stroke-width="1.5"></rect><path d="M5.5 8L7 9.5L10.5 5.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></div><h5>\u5BA1\u6279\u6D41\u8F6C</h5><small>\u6309\u5DE5\u4F5C\u6D41\u9010\u7EA7<br>\u5BA1\u6838\u62A5\u9500\u91D1\u989D</small></div><div class="biz-step-arrow">\u2192</div><div class="biz-step-item"><div class="biz-step-circle" style="${ssrRenderStyle({ "background": "linear-gradient(135deg,#16A34A,#15803D)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="5.5" stroke="white" stroke-width="1.5"></circle><path d="M8 5.5V8L9.5 9.5" stroke="white" stroke-width="1.5" stroke-linecap="round"></path></svg></div><h5>\u751F\u6548</h5><small>\u5BA1\u6279\u901A\u8FC7<br>\u91D1\u989D\u6B63\u5F0F\u751F\u6548</small></div><div class="biz-step-arrow">\u2192</div><div class="biz-step-item"><div class="biz-step-circle" style="${ssrRenderStyle({ "background": "linear-gradient(135deg,#F59E0B,#D97706)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="5.5" stroke="white" stroke-width="1.5"></circle><path d="M8 5.5V8" stroke="white" stroke-width="1.5" stroke-linecap="round"></path></svg></div><h5>\u53D1\u8D77\u5151\u73B0</h5><small>\u4F5C\u4E3A\u6765\u6E90<br>\u53D1\u8D77\u88C5\u4FEE\u5151\u73B0</small></div></div></div><div class="kl-card"><div class="biz-kl-hdr"><span class="biz-tag" style="${ssrRenderStyle({ "background": "rgba(124,58,237,0.08)", "color": "#7C3AED", "border-color": "rgba(124,58,237,0.18)" })}"> \u89C4\u5219</span><h2>\u5173\u952E\u4E1A\u52A1\u89C4\u5219</h2><p>\u53EF\u62A5\u9500\u91D1\u989D\u7531\u9A8C\u6536\u7ED3\u679C\u4E0E\u88C5\u4FEE\u6807\u51C6\u5171\u540C\u51B3\u5B9A\uFF0C\u5B58\u5728\u591A\u9879\u6263\u51CF</p></div><div class="biz-3col"><div class="kl-col-box" style="${ssrRenderStyle({ "margin-bottom": "0" })}"><div style="${ssrRenderStyle({ "display": "flex", "gap": "12px", "align-items": "flex-start" })}"><div style="${ssrRenderStyle({ "width": "36px", "height": "36px", "border-radius": "10px", "display": "flex", "align-items": "center", "justify-content": "center", "flex-shrink": "0", "background": "linear-gradient(135deg,#7C3AED,#A78BFA)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 8H13" stroke="white" stroke-width="1.5" stroke-linecap="round"></path><path d="M9 4L13 8L9 12" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></div><div><h5 style="${ssrRenderStyle({ "font-size": "0.88rem", "font-weight": "800", "color": "#1F2937", "margin": "0 0 6px" })}">\u8BA1\u7B97\u53E3\u5F84</h5><p style="${ssrRenderStyle({ "font-size": "0.73rem", "color": "#6B7280", "margin": "0", "line-height": "1.6" })}">\u53EF\u62A5\u9500\u91D1\u989D = \u9A8C\u6536\u9762\u79EF \xD7 \u9A8C\u6536\u8BC4\u5206\u7387 \xD7 \u7533\u8BF7\u6807\u51C6\uFF0C\u95E8\u5934\u53E6\u6309\u95E8\u5934\u6807\u51C6\u8BA1\u7B97</p></div></div></div><div class="kl-col-box alt" style="${ssrRenderStyle({ "margin-bottom": "0" })}"><div style="${ssrRenderStyle({ "display": "flex", "gap": "12px", "align-items": "flex-start" })}"><div style="${ssrRenderStyle({ "width": "36px", "height": "36px", "border-radius": "10px", "display": "flex", "align-items": "center", "justify-content": "center", "flex-shrink": "0", "background": "linear-gradient(135deg,#16A34A,#15803D)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="3" width="12" height="10" rx="1.5" stroke="white" stroke-width="1.5"></rect><path d="M5 6.5L7 8.5L11 5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></div><div><h5 style="${ssrRenderStyle({ "font-size": "0.88rem", "font-weight": "800", "color": "#1F2937", "margin": "0 0 6px" })}">\u6263\u51CF\u9879</h5><p style="${ssrRenderStyle({ "font-size": "0.73rem", "color": "#6B7280", "margin": "0", "line-height": "1.6" })}">\u8D28\u91CF\u6263\u51CF\u3001\u53D1\u7968\u7A0E\u7387\u6263\u51CF\u7B49\u4F1A\u5F71\u54CD\u6700\u7EC8\u53EF\u62A5\u9500\u91D1\u989D</p></div></div></div><div class="kl-col-box" style="${ssrRenderStyle({ "margin-bottom": "0" })}"><div style="${ssrRenderStyle({ "display": "flex", "gap": "12px", "align-items": "flex-start" })}"><div style="${ssrRenderStyle({ "width": "36px", "height": "36px", "border-radius": "10px", "display": "flex", "align-items": "center", "justify-content": "center", "flex-shrink": "0", "background": "linear-gradient(135deg,#DC2626,#B91C1C)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="2" width="10" height="12" rx="2" stroke="white" stroke-width="1.5"></rect><path d="M6 6.5L10 10.5M10 6.5L6 10.5" stroke="white" stroke-width="1.5" stroke-linecap="round"></path></svg></div><div><h5 style="${ssrRenderStyle({ "font-size": "0.88rem", "font-weight": "800", "color": "#1F2937", "margin": "0 0 6px" })}">\u5173\u8054\u7EA6\u675F</h5><p style="${ssrRenderStyle({ "font-size": "0.73rem", "color": "#6B7280", "margin": "0", "line-height": "1.6" })}">\u53EF\u6346\u7ED1\u5BA2\u6237\u5173\u7CFB\u7BA1\u7406\u7CFB\u7EDF\u7684\u8F6F\u88C5\u706F\u5177\u8BA2\u5355\uFF0C\u9700\u5B8C\u6574\u5173\u8054\u5426\u5219\u6570\u636E\u4E0D\u5168</p></div></div></div></div><div class="kl-tip" style="${ssrRenderStyle({ "margin-top": "14px" })}"><strong>\u6838\u5FC3\u7EA6\u675F\uFF1A</strong>\u95E8\u5E97\u9A8C\u6536\u4E0E\u62A5\u9500\u5355\u662F\u88C5\u4FEE\u5151\u73B0\u7684\u552F\u4E00\u6570\u636E\u6765\u6E90\uFF0C\u9A8C\u6536\u8BC4\u5206\u4E0E\u88C5\u4FEE\u6807\u51C6\u5171\u540C\u51B3\u5B9A\u53EF\u62A5\u9500\u91D1\u989D\uFF0C\u91D1\u989D\u8BA1\u7B97\u987B\u5B8C\u6574\u51C6\u786E\u65B9\u53EF\u8FDB\u5165\u5151\u73B0\u3002 </div></div></div></div></div><div id="biz-flow" style="${ssrRenderStyle({ "display": "none" })}"><div class="tab-pad"><div class="bf-truth-flow"><h4 class="bf-main-title">\u95E8\u5E97\u9A8C\u6536\u4E0E\u62A5\u9500\u5355 \u2014 \u5168\u94FE\u8DEF\u6D41\u7A0B\u56FE</h4><p class="bf-main-sub">\u5F00\u59CB \u2192 \u2605\u65B0\u5EFA\u9A8C\u6536\u62A5\u9500\u5355\u2605 \u2192 \u2696\u5BA1\u6279\u901A\u8FC7\uFF1F \u2192 \u53EF\u53D1\u8D77\u88C5\u4FEE\u5151\u73B0 \u2192 \u7ED3\u675F\uFF08\u62D2\u7EDD\u5219\u4FEE\u6539\u540E\u91CD\u63D0\uFF09</p><div class="bf-fc-svg-wrap"><svg class="bf-fc-svg" style="${ssrRenderStyle({ "max-height": "none" })}" viewBox="0 0 1100 660" xmlns="http://www.w3.org/2000/svg"><defs><marker id="arr-green" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon points="0,0 10,5 0,10" fill="#16A34A"></polygon></marker><marker id="arr-gray" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon points="0,0 10,5 0,10" fill="#9CA3AF"></polygon></marker><marker id="arr-blue" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon points="0,0 10,5 0,10" fill="#3B82F6"></polygon></marker><marker id="arr-red" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon points="0,0 10,5 0,10" fill="#EF4444"></polygon></marker><filter id="shadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000" flood-opacity="0.15"></feDropShadow></filter></defs><rect x="25" y="20" width="1050" height="95" rx="8" fill="#EFF6FF" stroke="#3B82F6" stroke-width="1.5" stroke-dasharray="6,4"></rect><text x="550" y="42" text-anchor="middle" fill="#1D4ED8" font-size="13" font-weight="600">\u4E0A\u6E38\u652F\u6491</text><rect x="159" y="56" width="150" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"></rect><text x="234" y="79" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">\u5DF2\u5BA1\u6279\u88C5\u4FEE\u7533\u8BF7\u5355</text><rect x="317" y="56" width="150" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"></rect><text x="392" y="79" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">\u88C5\u4FEE\u6807\u51C6</text><rect x="475" y="56" width="150" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"></rect><text x="550" y="79" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">CRM\u8F6F\u88C5\u706F\u5177</text><rect x="633" y="56" width="150" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"></rect><text x="708" y="79" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">\u653F\u7B56\u6027\u8865\u8D34</text><rect x="791" y="56" width="150" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"></rect><text x="866" y="79" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">\u5DE5\u4F5C\u6D41\u5F15\u64CE</text><line x1="235" y1="115" x2="235" y2="150" stroke="#3B82F6" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#arr-blue)"></line><rect x="195" y="150" width="80" height="44" rx="6" fill="#FAF5FF" stroke="#9333EA" stroke-width="1.5" stroke-dasharray="5,3"></rect><text x="235" y="177" text-anchor="middle" fill="#7C3AED" font-size="13" font-weight="600">\u5F00\u59CB</text><line x1="235" y1="194" x2="235" y2="210" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"></line><rect x="148" y="210" width="174" height="54" rx="6" fill="#16A34A" stroke="#15803D" stroke-width="2" filter="url(#shadow)"></rect><text x="235" y="232" text-anchor="middle" fill="#FFFFFF" font-size="13" font-weight="700">\u2605\u65B0\u5EFA\u9A8C\u6536\u62A5\u9500\u5355\u2605</text><text x="235" y="252" text-anchor="middle" fill="#DCFCE7" font-size="10">\u5173\u8054\u7533\u8BF7\xB7\u586B\u9A8C\u6536/\u62A5\u9500\u91D1\u989D\xB7\u7B97\u53EF\u62A5\u9500</text><line x1="235" y1="264" x2="235" y2="290" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"></line><polygon points="235,290 305,320 235,350 165,320" fill="#FAF5FF" stroke="#9333EA" stroke-width="1.5" stroke-dasharray="5,3"></polygon><text x="235" y="324" text-anchor="middle" fill="#7C3AED" font-size="12" font-weight="600">\u2696 \u5BA1\u6279\u901A\u8FC7\uFF1F</text><line x1="305" y1="320" x2="410" y2="320" stroke="#EF4444" stroke-width="2" marker-end="url(#arr-red)"></line><rect x="410" y="306" width="80" height="28" rx="4" fill="#FEF2F2" stroke="#EF4444" stroke-width="1"></rect><text x="450" y="325" text-anchor="middle" fill="#DC2626" font-size="11" font-weight="600">\u62D2\u7EDD \u2717</text><line x1="450" y1="306" x2="450" y2="237" stroke="#EF4444" stroke-width="1.5"></line><line x1="450" y1="237" x2="322" y2="237" stroke="#EF4444" stroke-width="1.5" marker-end="url(#arr-red)"></line><line x1="235" y1="350" x2="235" y2="366" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"></line><rect x="150" y="366" width="170" height="40" rx="6" fill="#F0FDF4" stroke="#16A34A" stroke-width="2"></rect><text x="235" y="391" text-anchor="middle" fill="#166534" font-size="13" font-weight="600">\u5BA1\u6279\u901A\u8FC7\u751F\u6548</text><line x1="235" y1="406" x2="235" y2="422" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"></line><rect x="150" y="422" width="170" height="40" rx="6" fill="#F0FDF4" stroke="#16A34A" stroke-width="2"></rect><text x="235" y="447" text-anchor="middle" fill="#166534" font-size="13" font-weight="600">\u53EF\u53D1\u8D77\u88C5\u4FEE\u5151\u73B0</text><line x1="235" y1="462" x2="235" y2="478" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"></line><rect x="180" y="478" width="110" height="40" rx="6" fill="#FAF5FF" stroke="#9333EA" stroke-width="1.5" stroke-dasharray="5,3"></rect><text x="235" y="503" text-anchor="middle" fill="#7C3AED" font-size="13" font-weight="600">\u7ED3\u675F</text><line x1="235" y1="518" x2="235" y2="540" stroke="#16A34A" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#arr-green)"></line><rect x="25" y="540" width="1050" height="95" rx="8" fill="#F0FDF4" stroke="#16A34A" stroke-width="1.5" stroke-dasharray="6,4"></rect><text x="550" y="562" text-anchor="middle" fill="#166534" font-size="13" font-weight="600">\u4E0B\u6E38\u5F71\u54CD</text><rect x="238" y="576" width="150" height="36" rx="5" fill="#FFFFFF" stroke="#16A34A" stroke-width="1.2"></rect><text x="313" y="601" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">\u95E8\u5E97\u88C5\u4FEE\u989D\u5EA6\u5185\u5151\u73B0</text><rect x="396" y="576" width="150" height="36" rx="5" fill="#FFFFFF" stroke="#16A34A" stroke-width="1.2"></rect><text x="471" y="601" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">\u95E8\u5E97\u88C5\u4FEE\u989D\u5EA6\u5916\u5151\u73B0</text><rect x="554" y="576" width="150" height="36" rx="5" fill="#FFFFFF" stroke="#16A34A" stroke-width="1.2"></rect><text x="629" y="601" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">\u9A8C\u6536\u8BC4\u5206\u7387</text><rect x="712" y="576" width="150" height="36" rx="5" fill="#FFFFFF" stroke="#16A34A" stroke-width="1.2"></rect><text x="787" y="601" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">\u53EF\u62A5\u9500\u91D1\u989D</text></svg></div><div class="bf-fc-legend"><span class="bf-fc-legend-item"><span class="bf-fc-dot bf-fc-dot-green"></span> \u4E3B\u6D41\u7A0B\u6B65\u9AA4</span><span class="bf-fc-legend-item"><span class="bf-fc-dot bf-fc-dot-purple"></span> \u5F00\u59CB/\u7ED3\u675F/\u5224\u65AD</span><span class="bf-fc-legend-item"><span class="bf-fc-dot bf-fc-dot-blue"></span> \u4E0A\u6E38\u652F\u6491\u670D\u52A1</span><span class="bf-fc-legend-item"><span style="${ssrRenderStyle({ "display": "inline-block", "width": "22px", "height": "2px", "background": "#EF4444" })}"></span> \u5BA1\u6279\u62D2\u7EDD/\u9A73\u56DE</span></div></div></div></div><div id="key-logic" style="${ssrRenderStyle({ "display": "none" })}"><div class="tab-pad"><div class="kl-wrap">`);
  _push(ssrRenderComponent(_component_KbCard, {
    num: "1",
    title: "\u91CD\u70B9\u903B\u8F911\uFF1A\u57FA\u4E8E\u5DF2\u5BA1\u6279\u88C5\u4FEE\u7533\u8BF7"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u610F\u4E49</strong>\uFF1A\u9A8C\u6536\u62A5\u9500\u5FC5\u987B\u5173\u8054\u5DF2\u5BA1\u6279\u901A\u8FC7\u7684\u88C5\u4FEE\u7533\u8BF7\u5355</li><li${_scopeId}><strong${_scopeId}>\u5177\u4F53\u903B\u8F91\u63CF\u8FF0</strong>\uFF1A</li><li${_scopeId}>\u9009\u62E9APPROVED\u72B6\u6001\u7684FinFeeApplyFinishedHeader</li><li${_scopeId}>\u8054\u52A8\u5E26\u51FA\u95E8\u5E97/\u7ECF\u9500\u5546/\u88C5\u4FEE\u9762\u79EF/\u88C5\u4FEE\u6807\u51C6\u7B49\u5168\u90E8\u4FE1\u606F</li><li${_scopeId}>\u67E5\u8BE2\u88C5\u4FEE\u6807\u51C6(doSearchDecorate)\u83B7\u53D6\u653F\u7B56\u8865\u8D34\u6807\u51C6</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u610F\u4E49"),
              createTextVNode("\uFF1A\u9A8C\u6536\u62A5\u9500\u5FC5\u987B\u5173\u8054\u5DF2\u5BA1\u6279\u901A\u8FC7\u7684\u88C5\u4FEE\u7533\u8BF7\u5355")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u5177\u4F53\u903B\u8F91\u63CF\u8FF0"),
              createTextVNode("\uFF1A")
            ]),
            createVNode("li", null, "\u9009\u62E9APPROVED\u72B6\u6001\u7684FinFeeApplyFinishedHeader"),
            createVNode("li", null, "\u8054\u52A8\u5E26\u51FA\u95E8\u5E97/\u7ECF\u9500\u5546/\u88C5\u4FEE\u9762\u79EF/\u88C5\u4FEE\u6807\u51C6\u7B49\u5168\u90E8\u4FE1\u606F"),
            createVNode("li", null, "\u67E5\u8BE2\u88C5\u4FEE\u6807\u51C6(doSearchDecorate)\u83B7\u53D6\u653F\u7B56\u8865\u8D34\u6807\u51C6")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, {
    num: "2",
    title: "\u91CD\u70B9\u903B\u8F912\uFF1ACRM\u8F6F\u88C5\u706F\u5177\u8BA2\u5355\u7ED1\u5B9A"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u610F\u4E49</strong>\uFF1A\u9A8C\u6536\u65F6\u7ED1\u5B9ACRM\u7CFB\u7EDF\u7684\u8F6F\u88C5\u706F\u5177\u91C7\u8D2D\u8BA2\u5355</li><li${_scopeId}><strong${_scopeId}>\u5177\u4F53\u903B\u8F91\u63CF\u8FF0</strong>\uFF1A</li><li${_scopeId}>select-crm-soft-order\u67E5\u8BE2\u53EF\u7ED1\u5B9A\u7684CRM\u8F6F\u88C5\u706F\u5177\u8BA2\u5355</li><li${_scopeId}>confirm-crm-soft-order\u786E\u8BA4\u7ED1\u5B9A</li><li${_scopeId}>query-bind-crm-soft-order\u67E5\u8BE2\u5DF2\u7ED1\u5B9A\u8BA2\u5355</li><li${_scopeId}>unbind-soft-order\u53D6\u6D88\u7ED1\u5B9A</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u610F\u4E49"),
              createTextVNode("\uFF1A\u9A8C\u6536\u65F6\u7ED1\u5B9ACRM\u7CFB\u7EDF\u7684\u8F6F\u88C5\u706F\u5177\u91C7\u8D2D\u8BA2\u5355")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u5177\u4F53\u903B\u8F91\u63CF\u8FF0"),
              createTextVNode("\uFF1A")
            ]),
            createVNode("li", null, "select-crm-soft-order\u67E5\u8BE2\u53EF\u7ED1\u5B9A\u7684CRM\u8F6F\u88C5\u706F\u5177\u8BA2\u5355"),
            createVNode("li", null, "confirm-crm-soft-order\u786E\u8BA4\u7ED1\u5B9A"),
            createVNode("li", null, "query-bind-crm-soft-order\u67E5\u8BE2\u5DF2\u7ED1\u5B9A\u8BA2\u5355"),
            createVNode("li", null, "unbind-soft-order\u53D6\u6D88\u7ED1\u5B9A")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, {
    num: "3",
    title: "\u91CD\u70B9\u903B\u8F913\uFF1A\u5BA1\u6279\u901A\u8FC7\u751F\u6210\u5151\u73B0\u8BB0\u5F55"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u610F\u4E49</strong>\uFF1A\u9A8C\u6536\u62A5\u9500\u5BA1\u6279\u901A\u8FC7\u540E\u81EA\u52A8\u751F\u6210\u989D\u5EA6\u5185/\u5916\u5151\u73B0\u8BB0\u5F55</li><li${_scopeId}><strong${_scopeId}>\u5177\u4F53\u903B\u8F91\u63CF\u8FF0</strong>\uFF1A</li><li${_scopeId}>\u751F\u6210FIN_FEE_TERMINAL_CASHOUT(\u989D\u5EA6\u5185\u5151\u73B0)\u8BB0\u5F55</li><li${_scopeId}>\u751F\u6210FIN_FEE_TERMINAL_RE_CASHOUT(\u989D\u5EA6\u5916\u5151\u73B0)\u8BB0\u5F55</li><li${_scopeId}>\u56DE\u5199\u88C5\u4FEE\u7533\u8BF7\u5355\u7684\u9A8C\u6536\u4FE1\u606F</li><li${_scopeId}>\u540C\u6B65\u8D44\u91D1\u6C60</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u610F\u4E49"),
              createTextVNode("\uFF1A\u9A8C\u6536\u62A5\u9500\u5BA1\u6279\u901A\u8FC7\u540E\u81EA\u52A8\u751F\u6210\u989D\u5EA6\u5185/\u5916\u5151\u73B0\u8BB0\u5F55")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u5177\u4F53\u903B\u8F91\u63CF\u8FF0"),
              createTextVNode("\uFF1A")
            ]),
            createVNode("li", null, "\u751F\u6210FIN_FEE_TERMINAL_CASHOUT(\u989D\u5EA6\u5185\u5151\u73B0)\u8BB0\u5F55"),
            createVNode("li", null, "\u751F\u6210FIN_FEE_TERMINAL_RE_CASHOUT(\u989D\u5EA6\u5916\u5151\u73B0)\u8BB0\u5F55"),
            createVNode("li", null, "\u56DE\u5199\u88C5\u4FEE\u7533\u8BF7\u5355\u7684\u9A8C\u6536\u4FE1\u606F"),
            createVNode("li", null, "\u540C\u6B65\u8D44\u91D1\u6C60")
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
        _push2(`<p${_scopeId}>\u672C\u9875\u9762\u4E3A\u524D\u7AEFReact\u9875\u9762\uFF0C\u4F4D\u4E8E<code${_scopeId}>arrow-ae/src/pages/storeManage/storeAcceptanceReimbursementInfo/</code>\uFF0C\u542B\u5217\u8868\u9875\u548C\u8BE6\u60C5\u9875\u3002</p><h4${_scopeId}>\u5934\u90E8\u4FE1\u606F\u533A</h4><table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5B57\u6BB5\u540D</th><th${_scopeId}>\u6570\u636E\u5E93\u5217\u540D</th><th${_scopeId}>\u7EC4\u4EF6</th><th${_scopeId}>\u4E1A\u52A1\u91CA\u4E49</th><th${_scopeId}>\u663E\u9690\u6761\u4EF6</th><th${_scopeId}>\u53D6\u503C/\u8D4B\u503C\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u9A8C\u6536\u62A5\u9500\u5355\u53F7</td><td${_scopeId}>CHECK_BX_CODE</td><td${_scopeId}>TextField</td><td${_scopeId}>\u9A8C\u6536\u62A5\u9500\u5355\u53F7</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>\u7F16\u7801\u89C4\u5219\u751F\u6210</td></tr><tr${_scopeId}><td${_scopeId}>\u88C5\u4FEE\u7533\u8BF7\u5355\u53F7</td><td${_scopeId}>TERMINAL_APPLY_NO</td><td${_scopeId}>Lov</td><td${_scopeId}>\u9009\u62E9\u88C5\u4FEE\u7533\u8BF7\u5355</td><td${_scopeId}>hzApproveStatus=NEW\u65F6\u53EF\u7F16\u8F91</td><td${_scopeId}>\u9009\u62E9\u5DF2\u5BA1\u6279\u7684\u88C5\u4FEE\u7533\u8BF7\u5355\uFF0C\u5FC5\u586B</td></tr><tr${_scopeId}><td${_scopeId}>\u95E8\u5E97\u7F16\u7801</td><td${_scopeId}>TERMINAL_CODE</td><td${_scopeId}>TextField</td><td${_scopeId}>\u95E8\u5E97\u7F16\u7801</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>\u4ECE\u7533\u8BF7\u5355\u5E26\u5165\uFF0C\u5FC5\u586B</td></tr><tr${_scopeId}><td${_scopeId}>\u95E8\u5E97\u540D\u79F0</td><td${_scopeId}>TERMINAL_NAME</td><td${_scopeId}>TextField</td><td${_scopeId}>\u95E8\u5E97\u540D\u79F0</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>\u4ECE\u7533\u8BF7\u5355\u5E26\u5165\uFF0C\u5FC5\u586B</td></tr><tr${_scopeId}><td${_scopeId}>\u7ECF\u9500\u5546\u540D\u79F0</td><td${_scopeId}>CUST_NAME</td><td${_scopeId}>TextField</td><td${_scopeId}>\u7ECF\u9500\u5546\u540D\u79F0</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>\u4ECE\u7533\u8BF7\u5355\u5E26\u5165\uFF0C\u5FC5\u586B</td></tr><tr${_scopeId}><td${_scopeId}>\u7ECF\u9500\u5546\u7B80\u79F0</td><td${_scopeId}>SHORT_NAME</td><td${_scopeId}>TextField</td><td${_scopeId}>\u7ECF\u9500\u5546\u7B80\u79F0</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>\u4ECE\u7533\u8BF7\u5355\u5E26\u5165</td></tr><tr${_scopeId}><td${_scopeId}>\u4EA4\u6613\u516C\u53F8</td><td${_scopeId}>TRADING_COMPANY_NAME</td><td${_scopeId}>TextField</td><td${_scopeId}>\u4EA4\u6613\u516C\u53F8</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>\u4ECE\u7533\u8BF7\u5355\u5E26\u5165</td></tr><tr${_scopeId}><td${_scopeId}>\u6CD5\u4EBA\u5BA2\u6237</td><td${_scopeId}>BILLING_UNIT_NAME</td><td${_scopeId}>TextField</td><td${_scopeId}>\u6CD5\u4EBA\u5BA2\u6237</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>\u4ECE\u7533\u8BF7\u5355\u5E26\u5165</td></tr><tr${_scopeId}><td${_scopeId}>\u88C5\u4FEE\u7B49\u7EA7</td><td${_scopeId}>FIXUP_GRADE</td><td${_scopeId}>Select(AE.FIXUP_GRADE)</td><td${_scopeId}>\u88C5\u4FEE\u7B49\u7EA7</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>\u4ECE\u7533\u8BF7\u5355\u5E26\u5165</td></tr><tr${_scopeId}><td${_scopeId}>\u95E8\u5E97\u9762\u79EF</td><td${_scopeId}>TERMINAL_AREA</td><td${_scopeId}>NumberField</td><td${_scopeId}>\u95E8\u5E97\u9762\u79EF</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>\u4ECE\u7533\u8BF7\u5355\u5E26\u5165</td></tr><tr${_scopeId}><td${_scopeId}>\u5B9E\u9645\u88C5\u4FEE\u9762\u79EF</td><td${_scopeId}>THIS_TERMINAL_AREA</td><td${_scopeId}>NumberField</td><td${_scopeId}>\u5B9E\u9645\u88C5\u4FEE\u9762\u79EF</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>\u4ECE\u7533\u8BF7\u5355\u5E26\u5165</td></tr><tr${_scopeId}><td${_scopeId}>\u989D\u5EA6\u5185\u62A5\u9500\u91D1\u989D</td><td${_scopeId}>IN_BX_AMT</td><td${_scopeId}>NumberField</td><td${_scopeId}>\u989D\u5EA6\u5185\u62A5\u9500\u91D1\u989D</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>\u7CFB\u7EDF\u8BA1\u7B97</td></tr><tr${_scopeId}><td${_scopeId}>\u989D\u5EA6\u5916\u62A5\u9500\u91D1\u989D</td><td${_scopeId}>OUT_BX_AMT</td><td${_scopeId}>NumberField</td><td${_scopeId}>\u989D\u5EA6\u5916\u62A5\u9500\u91D1\u989D</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>\u7CFB\u7EDF\u8BA1\u7B97</td></tr><tr${_scopeId}><td${_scopeId}>\u9A8C\u6536\u65E5\u671F</td><td${_scopeId}>CHECK_DATE</td><td${_scopeId}>DatePicker</td><td${_scopeId}>\u9A8C\u6536\u65E5\u671F</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>\u7528\u6237\u8F93\u5165</td></tr><tr${_scopeId}><td${_scopeId}>\u5907\u6CE8</td><td${_scopeId}>NOTE</td><td${_scopeId}>TextField</td><td${_scopeId}>\u5907\u6CE8</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>\u7528\u6237\u8F93\u5165</td></tr><tr${_scopeId}><td${_scopeId}>\u7533\u8BF7\u65E5\u671F</td><td${_scopeId}>CREATION_DATE</td><td${_scopeId}>TextField</td><td${_scopeId}>\u521B\u5EFA\u65F6\u95F4</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>\u9ED8\u8BA4\u5F53\u524D\u65F6\u95F4\uFF0C\u53EA\u8BFB</td></tr><tr${_scopeId}><td${_scopeId}>\u521B\u5EFA\u4EBA</td><td${_scopeId}>CREATED_BY_NAME</td><td${_scopeId}>TextField</td><td${_scopeId}>\u521B\u5EFA\u4EBA\u59D3\u540D</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>\u9ED8\u8BA4\u5F53\u524D\u7528\u6237\uFF0C\u53EA\u8BFB</td></tr><tr${_scopeId}><td${_scopeId}>\u5BA1\u6838\u72B6\u6001</td><td${_scopeId}>HZ_APPROVE_STATUS</td><td${_scopeId}>Select(HWKF.APPROVE_STATUS)</td><td${_scopeId}>\u5DE5\u4F5C\u6D41\u5BA1\u6279\u72B6\u6001</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>\u9ED8\u8BA4NEW\uFF0C\u53EA\u8BFB</td></tr><tr${_scopeId}><td${_scopeId}>\u5BA1\u6838\u72B6\u6001</td><td${_scopeId}>AUDIT_STAT</td><td${_scopeId}>TextField</td><td${_scopeId}>\u5BA1\u6838\u72B6\u6001</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>\u7CFB\u7EDF\u7EF4\u62A4</td></tr><tr${_scopeId}><td${_scopeId}>\u7ECF\u8425\u5C5E\u6027</td><td${_scopeId}>CUSTOMER_CLASS</td><td${_scopeId}>Select(AE.CUSTOMER_CLASS)</td><td${_scopeId}>\u7ECF\u8425\u5C5E\u6027</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>\u4ECE\u7533\u8BF7\u5355\u5E26\u5165</td></tr><tr${_scopeId}><td${_scopeId}>\u6CD5\u4EBA\u5BA2\u6237\u7F16\u7801</td><td${_scopeId}>BILLING_UNIT_CODE</td><td${_scopeId}>TextField</td><td${_scopeId}>\u6CD5\u4EBA\u5BA2\u6237\u7F16\u7801</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>\u4ECE\u7533\u8BF7\u5355\u5E26\u5165</td></tr><tr${_scopeId}><td${_scopeId}>\u9500\u552E\u533A\u57DF</td><td${_scopeId}>SALEZONE_ORG_NAME</td><td${_scopeId}>TextField</td><td${_scopeId}>\u9500\u552E\u533A\u57DF\u540D\u79F0</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>\u4ECE\u7533\u8BF7\u5355\u5E26\u5165</td></tr><tr${_scopeId}><td${_scopeId}>\u8FD0\u8425\u4E2D\u5FC3</td><td${_scopeId}>OPERAT_CENTER_ORG_NAME</td><td${_scopeId}>TextField</td><td${_scopeId}>\u8FD0\u8425\u4E2D\u5FC3\u540D\u79F0</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>\u4ECE\u7533\u8BF7\u5355\u5E26\u5165</td></tr><tr${_scopeId}><td${_scopeId}>\u6210\u672C\u4E2D\u5FC3\u7F16\u7801</td><td${_scopeId}>COST_CENTER_CODE</td><td${_scopeId}>TextField</td><td${_scopeId}>\u6210\u672C\u4E2D\u5FC3\u7F16\u7801</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>\u4ECE\u7533\u8BF7\u5355\u5E26\u5165</td></tr><tr${_scopeId}><td${_scopeId}>\u6210\u672C\u4E2D\u5FC3\u540D\u79F0</td><td${_scopeId}>COST_CENTER_NAME</td><td${_scopeId}>TextField</td><td${_scopeId}>\u6210\u672C\u4E2D\u5FC3\u540D\u79F0</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>\u4ECE\u7533\u8BF7\u5355\u5E26\u5165</td></tr><tr${_scopeId}><td${_scopeId}>\u9879\u76EE\u7F16\u7801</td><td${_scopeId}>OBJECT_CODE</td><td${_scopeId}>TextField</td><td${_scopeId}>\u9879\u76EE\u7F16\u7801</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>\u4ECE\u7533\u8BF7\u5355\u5E26\u5165</td></tr><tr${_scopeId}><td${_scopeId}>\u9879\u76EE\u540D\u79F0</td><td${_scopeId}>OBJECT_NAME</td><td${_scopeId}>TextField</td><td${_scopeId}>\u9879\u76EE\u540D\u79F0</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>\u4ECE\u7533\u8BF7\u5355\u5E26\u5165</td></tr><tr${_scopeId}><td${_scopeId}>\u9884\u7B97\u5E74\u5EA6</td><td${_scopeId}>BUD_YEAR</td><td${_scopeId}>TextField</td><td${_scopeId}>\u9884\u7B97\u5E74\u5EA6</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>\u4ECE\u7533\u8BF7\u5355\u5E26\u5165</td></tr><tr${_scopeId}><td${_scopeId}>\u5C55\u793A\u8BBE\u8BA1\u5E08</td><td${_scopeId}>DESIGNER</td><td${_scopeId}>TextField</td><td${_scopeId}>\u5C55\u793A\u8BBE\u8BA1\u5E08</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>\u4ECE\u7533\u8BF7\u5355\u5E26\u5165</td></tr><tr${_scopeId}><td${_scopeId}>\u8BBE\u8BA1\u5E08\u7528\u6237\u540D</td><td${_scopeId}>USERNAME</td><td${_scopeId}>TextField</td><td${_scopeId}>\u8BBE\u8BA1\u5E08\u7528\u6237\u540D</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>\u4ECE\u7533\u8BF7\u5355\u5E26\u5165</td></tr><tr${_scopeId}><td${_scopeId}>\u8BBE\u8BA1\u5E08\u624B\u673A\u53F7</td><td${_scopeId}>MOBIL</td><td${_scopeId}>TextField</td><td${_scopeId}>\u8BBE\u8BA1\u5E08\u624B\u673A\u53F7</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>\u4ECE\u7533\u8BF7\u5355\u5E26\u5165</td></tr><tr${_scopeId}><td${_scopeId}>\u8F6F\u88C5\u8BBE\u8BA1\u5E08</td><td${_scopeId}>SOFT_DESIGNER</td><td${_scopeId}>TextField</td><td${_scopeId}>\u8F6F\u88C5\u8BBE\u8BA1\u5E08</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>\u4ECE\u7533\u8BF7\u5355\u5E26\u5165</td></tr><tr${_scopeId}><td${_scopeId}>\u4F4D\u7F6E\u7C7B\u578B</td><td${_scopeId}>STORE_LOCATION_TYPE</td><td${_scopeId}>Select(AE.STORE_LOCATION_TYPE)</td><td${_scopeId}>\u4F4D\u7F6E\u7C7B\u578B</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>\u4ECE\u7533\u8BF7\u5355\u5E26\u5165</td></tr><tr${_scopeId}><td${_scopeId}>\u88C5\u4FEE\u5468\u671F</td><td${_scopeId}>DECORATION_DAYS</td><td${_scopeId}>NumberField</td><td${_scopeId}>\u88C5\u4FEE\u5929\u6570</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>\u4ECE\u7533\u8BF7\u5355\u5E26\u5165</td></tr><tr${_scopeId}><td${_scopeId}>\u95E8\u5E97\u7C7B\u578B</td><td${_scopeId}>TERMINAL_TYPE</td><td${_scopeId}>Select(AE.TERMINAL_TYPE)</td><td${_scopeId}>\u95E8\u5E97\u7C7B\u578B</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>\u4ECE\u7533\u8BF7\u5355\u5E26\u5165</td></tr><tr${_scopeId}><td${_scopeId}>\u95E8\u5E97\u8BE6\u7EC6\u5730\u5740</td><td${_scopeId}>ADDR</td><td${_scopeId}>TextField</td><td${_scopeId}>\u95E8\u5E97\u8BE6\u7EC6\u5730\u5740</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>\u4ECE\u7533\u8BF7\u5355\u5E26\u5165</td></tr><tr${_scopeId}><td${_scopeId}>\u88C5\u4FEE\u6027\u8D28</td><td${_scopeId}>DECORATION_TYPE</td><td${_scopeId}>Select(AE.DECORATION_TYPE)</td><td${_scopeId}>\u88C5\u4FEE\u6027\u8D28</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>\u4ECE\u7533\u8BF7\u5355\u5E26\u5165</td></tr><tr${_scopeId}><td${_scopeId}>\u65E7\u5E97\u4E0A\u6B21\u88C5\u4FEE\u65F6\u95F4</td><td${_scopeId}>LAST_DECORATION_DATE</td><td${_scopeId}>DatePicker</td><td${_scopeId}>\u65E7\u5E97\u4E0A\u6B21\u88C5\u4FEE\u65F6\u95F4</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>\u4ECE\u7533\u8BF7\u5355\u5E26\u5165</td></tr><tr${_scopeId}><td${_scopeId}>\u8D85\u671F\u5929\u6570</td><td${_scopeId}>OVER_DATE</td><td${_scopeId}>NumberField</td><td${_scopeId}>\u88C5\u4FEE\u8D85\u671F\u5929\u6570</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>\u7CFB\u7EDF\u8BA1\u7B97</td></tr><tr${_scopeId}><td${_scopeId}>\u7EBF\u4E0B\u9A8C\u6536\u65E5\u671F</td><td${_scopeId}>OFFLINE_CHECK_DATE</td><td${_scopeId}>DatePicker</td><td${_scopeId}>\u7EBF\u4E0B\u9A8C\u6536\u65E5\u671F</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>\u7528\u6237\u8F93\u5165</td></tr><tr${_scopeId}><td${_scopeId}>\u88C5\u4FEE\u98CE\u683C</td><td${_scopeId}>DECORATION_STYLE</td><td${_scopeId}>Select(AE.DECORATION_STYLE)</td><td${_scopeId}>\u88C5\u4FEE\u98CE\u683C</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>\u4ECE\u7533\u8BF7\u5355\u5E26\u5165</td></tr><tr${_scopeId}><td${_scopeId}>\u672C\u6B21\u88C5\u4FEE\u98CE\u683C</td><td${_scopeId}>THIS_DECORATION_STYLE</td><td${_scopeId}>Select(AE.DECORATION_STYLE)</td><td${_scopeId}>\u672C\u6B21\u88C5\u4FEE\u98CE\u683C</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>\u4ECE\u7533\u8BF7\u5355\u5E26\u5165</td></tr><tr${_scopeId}><td${_scopeId}>\u989D\u5EA6\u5185\u6709\u6548\u671F</td><td${_scopeId}>IN_VALIDITY_DATE</td><td${_scopeId}>DatePicker</td><td${_scopeId}>\u989D\u5EA6\u5185\u6709\u6548\u671F</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>\u4ECE\u7533\u8BF7\u5355\u5E26\u5165</td></tr><tr${_scopeId}><td${_scopeId}>\u989D\u5EA6\u5916\u5151\u73B0\u7ED3\u675F\u65F6\u95F4</td><td${_scopeId}>OUT_CASHOUT_END_TIME</td><td${_scopeId}>DatePicker</td><td${_scopeId}>\u989D\u5EA6\u5916\u5151\u73B0\u7ED3\u675F\u65F6\u95F4</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>\u4ECE\u7533\u8BF7\u5355\u5E26\u5165</td></tr><tr${_scopeId}><td${_scopeId}>\u95E8\u5934\u88C5\u4FEE\u7B49\u7EA7</td><td${_scopeId}>FRONTDOOR_FIXUP_GRADE</td><td${_scopeId}>TextField</td><td${_scopeId}>\u95E8\u5934\u88C5\u4FEE\u7B49\u7EA7</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>\u4ECE\u7533\u8BF7\u5355\u5E26\u5165</td></tr><tr${_scopeId}><td${_scopeId}>\u9A8C\u6536\u8D85\u671F\u5929\u6570</td><td${_scopeId}>CHECK_OVER_DAY</td><td${_scopeId}>NumberField</td><td${_scopeId}>\u9A8C\u6536\u8D85\u671F\u5929\u6570</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>\u7CFB\u7EDF\u8BA1\u7B97</td></tr><tr${_scopeId}><td${_scopeId}>\u662F\u5426\u8D85\u6807\u51C6</td><td${_scopeId}>IS_OVER_STANDARD</td><td${_scopeId}>NumberField</td><td${_scopeId}>\u662F\u5426\u8D85\u6807\u51C6</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>\u7CFB\u7EDF\u8BA1\u7B97</td></tr><tr${_scopeId}><td${_scopeId}>\u88C5\u4FEE\u8D85\u671F\u514D\u8D23\u4EFD\u6570</td><td${_scopeId}>DECORATION_OVERTIME_FREE_COPY</td><td${_scopeId}>NumberField</td><td${_scopeId}>\u88C5\u4FEE\u8D85\u671F\u514D\u8D23\u4EFD\u6570</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>\u7CFB\u7EDF\u53C2\u6570</td></tr><tr${_scopeId}><td${_scopeId}>\u9A8C\u6536\u8D85\u671F\u514D\u8D23\u4EFD\u6570</td><td${_scopeId}>CHECK_OVERTIME_FREE_COPY</td><td${_scopeId}>NumberField</td><td${_scopeId}>\u9A8C\u6536\u8D85\u671F\u514D\u8D23\u4EFD\u6570</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>\u7CFB\u7EDF\u53C2\u6570</td></tr><tr${_scopeId}><td${_scopeId}>\u5BA1\u6838\u5907\u6CE8</td><td${_scopeId}>REVIEW_NOTE</td><td${_scopeId}>TextField</td><td${_scopeId}>\u5BA1\u6838\u5907\u6CE8</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>\u5BA1\u6279\u8282\u70B9\u53EF\u7F16\u8F91</td></tr><tr${_scopeId}><td${_scopeId}>\u53D1\u7968\u7A0E\u7387</td><td${_scopeId}>INVOICE_TAX_RATE</td><td${_scopeId}>Select</td><td${_scopeId}>\u53D1\u7968\u7A0E\u7387</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>\u7528\u6237\u9009\u62E9</td></tr><tr${_scopeId}><td${_scopeId}>\u53D1\u7968\u7C7B\u578B</td><td${_scopeId}>INVOICE_TYPE</td><td${_scopeId}>Select</td><td${_scopeId}>\u53D1\u7968\u7C7B\u578B</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>\u7528\u6237\u9009\u62E9</td></tr><tr${_scopeId}><td${_scopeId}>\u5F00\u7968\u529E\u516C\u5BA4\u7F16\u7801</td><td${_scopeId}>ISSUING_OFFICE_CODE</td><td${_scopeId}>TextField</td><td${_scopeId}>\u5F00\u7968\u529E\u516C\u5BA4\u7F16\u7801</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>\u4ECELOV\u5E26\u5165</td></tr><tr${_scopeId}><td${_scopeId}>\u5F00\u7968\u529E\u516C\u5BA4</td><td${_scopeId}>ISSUING_OFFICE</td><td${_scopeId}>TextField</td><td${_scopeId}>\u5F00\u7968\u529E\u516C\u5BA4</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>\u4ECELOV\u5E26\u5165</td></tr><tr${_scopeId}><td${_scopeId}>\u4ED8\u6B3E\u65B9\u5F0F</td><td${_scopeId}>PAY_TYPE</td><td${_scopeId}>Select(AE.PAY_TYPE)</td><td${_scopeId}>\u4ED8\u6B3E\u65B9\u5F0F</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>\u7528\u6237\u9009\u62E9</td></tr><tr${_scopeId}><td${_scopeId}>\u4F9B\u5E94\u5546\u7F16\u7801</td><td${_scopeId}>VENDOR_CODE</td><td${_scopeId}>TextField</td><td${_scopeId}>\u4F9B\u5E94\u5546\u7F16\u7801</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>\u4ECELOV\u5E26\u5165</td></tr><tr${_scopeId}><td${_scopeId}>\u4F9B\u5E94\u5546\u540D\u79F0</td><td${_scopeId}>VENDOR_NAME</td><td${_scopeId}>TextField</td><td${_scopeId}>\u4F9B\u5E94\u5546\u540D\u79F0</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>\u4ECELOV\u5E26\u5165</td></tr><tr${_scopeId}><td${_scopeId}>\u8054\u7CFB\u4EBA</td><td${_scopeId}>CONTACT</td><td${_scopeId}>TextField</td><td${_scopeId}>\u8054\u7CFB\u4EBA</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>\u4ECELOV\u5E26\u5165</td></tr><tr${_scopeId}><td${_scopeId}>\u8054\u7CFB\u7535\u8BDD</td><td${_scopeId}>TELE</td><td${_scopeId}>TextField</td><td${_scopeId}>\u8054\u7CFB\u7535\u8BDD</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>\u4ECELOV\u5E26\u5165</td></tr><tr${_scopeId}><td${_scopeId}>\u989D\u5EA6\u5916\u9A8C\u6536\u91D1\u989D</td><td${_scopeId}>OUT_CHECK_AMT</td><td${_scopeId}>NumberField</td><td${_scopeId}>\u989D\u5EA6\u5916\u9A8C\u6536\u91D1\u989D</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>\u7CFB\u7EDF\u8BA1\u7B97</td></tr><tr${_scopeId}><td${_scopeId}>\u6211\u53F8\u5F00\u7968</td><td${_scopeId}>OUR_INVOICING</td><td${_scopeId}>Select</td><td${_scopeId}>\u6211\u53F8\u5F00\u7968</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>\u7528\u6237\u9009\u62E9</td></tr><tr${_scopeId}><td${_scopeId}>\u4E09\u65B9\u534F\u8BAE</td><td${_scopeId}>TRIPAR_AGREE</td><td${_scopeId}>Select</td><td${_scopeId}>\u4E09\u65B9\u534F\u8BAE</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>\u7528\u6237\u9009\u62E9</td></tr><tr${_scopeId}><td${_scopeId}>\u662F\u5426\u91CD\u7B7E</td><td${_scopeId}>IS_RESIGN</td><td${_scopeId}>Select</td><td${_scopeId}>\u662F\u5426\u91CD\u7B7E</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>\u7CFB\u7EDF\u7EF4\u62A4</td></tr><tr${_scopeId}><td${_scopeId}>\u4EFB\u52A1\u540D\u79F0</td><td${_scopeId}>TASK_NAME</td><td${_scopeId}>TextField</td><td${_scopeId}>\u5F53\u524D\u5BA1\u6279\u4EFB\u52A1\u540D\u79F0</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>\u5DE5\u4F5C\u6D41\u5E26\u5165</td></tr><tr${_scopeId}><td${_scopeId}>\u63D0\u524D\u5151\u73B0\u6807\u8BC6</td><td${_scopeId}>EARLY_ENCASHMENT_FLAG</td><td${_scopeId}>TextField</td><td${_scopeId}>\u63D0\u524D\u5151\u73B0\u6807\u8BC6</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>\u7CFB\u7EDF\u7EF4\u62A4</td></tr><tr${_scopeId}><td${_scopeId}>\u8F6F\u88C5\u8865\u8D34\u91D1\u989D</td><td${_scopeId}>SOFT_PURCHASE_AMT</td><td${_scopeId}>NumberField</td><td${_scopeId}>\u8F6F\u88C5\u8865\u8D34\u91D1\u989D</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>\u7CFB\u7EDF\u8BA1\u7B97</td></tr><tr${_scopeId}><td${_scopeId}>\u8F6F\u88C5\u5E7F\u544A\u8D39\u91C7\u8D2D\u91D1\u989D</td><td${_scopeId}>SOFT_ADV_PURCHASE_AMT</td><td${_scopeId}>NumberField</td><td${_scopeId}>\u8F6F\u88C5\u5E7F\u544A\u8D39\u91C7\u8D2D\u91D1\u989D</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>\u7CFB\u7EDF\u8BA1\u7B97</td></tr><tr${_scopeId}><td${_scopeId}>\u8F6F\u88C5\u7269\u54C1\u91C7\u8D2D\u91D1\u989D</td><td${_scopeId}>SOFT_GOODS_PURCHASE_AMT</td><td${_scopeId}>NumberField</td><td${_scopeId}>\u8F6F\u88C5\u7269\u54C1\u91C7\u8D2D\u91D1\u989D</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>\u7CFB\u7EDF\u8BA1\u7B97</td></tr><tr${_scopeId}><td${_scopeId}>\u8F6F\u88C5\u91C7\u8D2D\u6807\u51C6</td><td${_scopeId}>SOFT_PURCHASE_STANDARD</td><td${_scopeId}>TextField</td><td${_scopeId}>\u8F6F\u88C5\u91C7\u8D2D\u6807\u51C6</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>\u4ECE\u88C5\u4FEE\u6807\u51C6\u5E26\u5165</td></tr><tr${_scopeId}><td${_scopeId}>\u8F6F\u88C5\u91C7\u8D2D\u6807\u51C6\u91D1\u989D</td><td${_scopeId}>SOFT_PURCHASE_STANDARD_AMT</td><td${_scopeId}>NumberField</td><td${_scopeId}>\u8F6F\u88C5\u91C7\u8D2D\u6807\u51C6\u91D1\u989D</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>\u7CFB\u7EDF\u8BA1\u7B97</td></tr><tr${_scopeId}><td${_scopeId}>\u8F6F\u88C5\u8FBE\u6210\u91C7\u8D2D\u91D1\u989D</td><td${_scopeId}>SOFT_REACH_PURCHASE_AMT</td><td${_scopeId}>NumberField</td><td${_scopeId}>\u8F6F\u88C5\u8FBE\u6210\u91C7\u8D2D\u91D1\u989D</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>\u7CFB\u7EDF\u8BA1\u7B97</td></tr><tr${_scopeId}><td${_scopeId}>\u8F6F\u88C5\u5BA1\u6279\u6807\u51C6\u4E34\u65F6</td><td${_scopeId}>SOFT_APPROVAL_STANDARD_TMP</td><td${_scopeId}>NumberField</td><td${_scopeId}>\u8F6F\u88C5\u5BA1\u6279\u6807\u51C6\u4E34\u65F6</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>\u5BA1\u6279\u8282\u70B9\u53EF\u7F16\u8F91</td></tr><tr${_scopeId}><td${_scopeId}>\u8F6F\u88C5\u91C7\u8D2D\u767E\u5206\u6BD4</td><td${_scopeId}>SOFT_PURCHASE_PERCENT</td><td${_scopeId}>NumberField</td><td${_scopeId}>\u8F6F\u88C5\u91C7\u8D2D\u767E\u5206\u6BD4</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>\u7CFB\u7EDF\u8BA1\u7B97</td></tr><tr${_scopeId}><td${_scopeId}>\u8F6F\u88C5\u6263\u51CF\u91D1\u989D</td><td${_scopeId}>SOFT_DEDUCT_AMT</td><td${_scopeId}>NumberField</td><td${_scopeId}>\u8F6F\u88C5\u6263\u51CF\u91D1\u989D</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>\u7CFB\u7EDF\u8BA1\u7B97</td></tr><tr${_scopeId}><td${_scopeId}>\u706F\u5177\u8865\u8D34\u91D1\u989D</td><td${_scopeId}>LANTERN_AMT</td><td${_scopeId}>NumberField</td><td${_scopeId}>\u706F\u5177\u8865\u8D34\u91D1\u989D</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>\u7CFB\u7EDF\u8BA1\u7B97</td></tr><tr${_scopeId}><td${_scopeId}>\u706F\u5177\u5E7F\u544A\u8D39\u91D1\u989D</td><td${_scopeId}>LANTERN_ADV_AMT</td><td${_scopeId}>NumberField</td><td${_scopeId}>\u706F\u5177\u5E7F\u544A\u8D39\u91D1\u989D</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>\u7CFB\u7EDF\u8BA1\u7B97</td></tr><tr${_scopeId}><td${_scopeId}>\u706F\u5177\u7269\u54C1\u91D1\u989D</td><td${_scopeId}>LANTERN_GOODS_AMT</td><td${_scopeId}>NumberField</td><td${_scopeId}>\u706F\u5177\u7269\u54C1\u91D1\u989D</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>\u7CFB\u7EDF\u8BA1\u7B97</td></tr><tr${_scopeId}><td${_scopeId}>\u706F\u5177\u6807\u51C6</td><td${_scopeId}>LANTERN_STANDARD</td><td${_scopeId}>TextField</td><td${_scopeId}>\u706F\u5177\u6807\u51C6</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>\u4ECE\u88C5\u4FEE\u6807\u51C6\u5E26\u5165</td></tr><tr${_scopeId}><td${_scopeId}>\u706F\u5177\u6807\u51C6\u91D1\u989D</td><td${_scopeId}>LANTERN_STANDARD_AMT</td><td${_scopeId}>NumberField</td><td${_scopeId}>\u706F\u5177\u6807\u51C6\u91D1\u989D</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>\u7CFB\u7EDF\u8BA1\u7B97</td></tr><tr${_scopeId}><td${_scopeId}>\u706F\u5177\u8FBE\u6210\u91D1\u989D</td><td${_scopeId}>LANTERN_REACH_AMT</td><td${_scopeId}>NumberField</td><td${_scopeId}>\u706F\u5177\u8FBE\u6210\u91D1\u989D</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>\u7CFB\u7EDF\u8BA1\u7B97</td></tr><tr${_scopeId}><td${_scopeId}>\u706F\u5177\u5BA1\u6279\u6807\u51C6\u4E34\u65F6</td><td${_scopeId}>LANTERN_APPROVAL_STANDARD_TMP</td><td${_scopeId}>NumberField</td><td${_scopeId}>\u706F\u5177\u5BA1\u6279\u6807\u51C6\u4E34\u65F6</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>\u5BA1\u6279\u8282\u70B9\u53EF\u7F16\u8F91</td></tr><tr${_scopeId}><td${_scopeId}>\u706F\u5177\u767E\u5206\u6BD4</td><td${_scopeId}>LANTERN_PERCENT</td><td${_scopeId}>NumberField</td><td${_scopeId}>\u706F\u5177\u767E\u5206\u6BD4</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>\u7CFB\u7EDF\u8BA1\u7B97</td></tr><tr${_scopeId}><td${_scopeId}>\u706F\u5177\u6263\u51CF\u91D1\u989D</td><td${_scopeId}>LANTERN_DEDUCT_AMT</td><td${_scopeId}>NumberField</td><td${_scopeId}>\u706F\u5177\u6263\u51CF\u91D1\u989D</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>\u7CFB\u7EDF\u8BA1\u7B97</td></tr><tr${_scopeId}><td${_scopeId}>\u8F6F\u88C5\u706F\u5177\u6263\u7F5A\u91D1\u989D</td><td${_scopeId}>ALL_DEDUCT_AMT</td><td${_scopeId}>NumberField</td><td${_scopeId}>\u8F6F\u88C5\u706F\u5177\u6263\u7F5A\u91D1\u989D(\u5143)</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>\u7CFB\u7EDF\u8BA1\u7B97</td></tr><tr${_scopeId}><td${_scopeId}>\u95E8\u5E97\u6240\u5728\u5730</td><td${_scopeId}>AREA_OBJ</td><td${_scopeId}>Select(\u7701\u5E02\u533A\u7EA7\u8054)</td><td${_scopeId}>\u95E8\u5E97\u6240\u5728\u5730</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>\u4ECE\u7533\u8BF7\u5355\u5E26\u5165\uFF0C\u7701\u5E02\u533A\u4E09\u7EA7\u7EA7\u8054\u9009\u62E9</td></tr><tr${_scopeId}><td${_scopeId}>\u7EC4\u7EC7ID</td><td${_scopeId}>ENTID</td><td${_scopeId}>TextField</td><td${_scopeId}>\u4E8B\u4E1A\u90E8/\u7EC4\u7EC7ID</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>\u7CFB\u7EDF\u81EA\u52A8\u8D4B\u503C</td></tr><tr${_scopeId}><td${_scopeId}>\u9644\u4EF6\u5173\u8054</td><td${_scopeId}>OBJ_ATTACH_REL_DTOS</td><td${_scopeId}>-</td><td${_scopeId}>\u9644\u4EF6\u5173\u8054\u5BF9\u8C61</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>\u4E0A\u4F20\u9644\u4EF6\u65F6\u5173\u8054</td></tr></tbody></table>`);
      } else {
        return [
          createVNode("p", null, [
            createTextVNode("\u672C\u9875\u9762\u4E3A\u524D\u7AEFReact\u9875\u9762\uFF0C\u4F4D\u4E8E"),
            createVNode("code", null, "arrow-ae/src/pages/storeManage/storeAcceptanceReimbursementInfo/"),
            createTextVNode("\uFF0C\u542B\u5217\u8868\u9875\u548C\u8BE6\u60C5\u9875\u3002")
          ]),
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
                createVNode("td", null, "\u9A8C\u6536\u62A5\u9500\u5355\u53F7"),
                createVNode("td", null, "CHECK_BX_CODE"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u9A8C\u6536\u62A5\u9500\u5355\u53F7"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "\u7F16\u7801\u89C4\u5219\u751F\u6210")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u88C5\u4FEE\u7533\u8BF7\u5355\u53F7"),
                createVNode("td", null, "TERMINAL_APPLY_NO"),
                createVNode("td", null, "Lov"),
                createVNode("td", null, "\u9009\u62E9\u88C5\u4FEE\u7533\u8BF7\u5355"),
                createVNode("td", null, "hzApproveStatus=NEW\u65F6\u53EF\u7F16\u8F91"),
                createVNode("td", null, "\u9009\u62E9\u5DF2\u5BA1\u6279\u7684\u88C5\u4FEE\u7533\u8BF7\u5355\uFF0C\u5FC5\u586B")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u95E8\u5E97\u7F16\u7801"),
                createVNode("td", null, "TERMINAL_CODE"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u95E8\u5E97\u7F16\u7801"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "\u4ECE\u7533\u8BF7\u5355\u5E26\u5165\uFF0C\u5FC5\u586B")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u95E8\u5E97\u540D\u79F0"),
                createVNode("td", null, "TERMINAL_NAME"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u95E8\u5E97\u540D\u79F0"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "\u4ECE\u7533\u8BF7\u5355\u5E26\u5165\uFF0C\u5FC5\u586B")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7ECF\u9500\u5546\u540D\u79F0"),
                createVNode("td", null, "CUST_NAME"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u7ECF\u9500\u5546\u540D\u79F0"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "\u4ECE\u7533\u8BF7\u5355\u5E26\u5165\uFF0C\u5FC5\u586B")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7ECF\u9500\u5546\u7B80\u79F0"),
                createVNode("td", null, "SHORT_NAME"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u7ECF\u9500\u5546\u7B80\u79F0"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "\u4ECE\u7533\u8BF7\u5355\u5E26\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u4EA4\u6613\u516C\u53F8"),
                createVNode("td", null, "TRADING_COMPANY_NAME"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u4EA4\u6613\u516C\u53F8"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "\u4ECE\u7533\u8BF7\u5355\u5E26\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6CD5\u4EBA\u5BA2\u6237"),
                createVNode("td", null, "BILLING_UNIT_NAME"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u6CD5\u4EBA\u5BA2\u6237"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "\u4ECE\u7533\u8BF7\u5355\u5E26\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u88C5\u4FEE\u7B49\u7EA7"),
                createVNode("td", null, "FIXUP_GRADE"),
                createVNode("td", null, "Select(AE.FIXUP_GRADE)"),
                createVNode("td", null, "\u88C5\u4FEE\u7B49\u7EA7"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "\u4ECE\u7533\u8BF7\u5355\u5E26\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u95E8\u5E97\u9762\u79EF"),
                createVNode("td", null, "TERMINAL_AREA"),
                createVNode("td", null, "NumberField"),
                createVNode("td", null, "\u95E8\u5E97\u9762\u79EF"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "\u4ECE\u7533\u8BF7\u5355\u5E26\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5B9E\u9645\u88C5\u4FEE\u9762\u79EF"),
                createVNode("td", null, "THIS_TERMINAL_AREA"),
                createVNode("td", null, "NumberField"),
                createVNode("td", null, "\u5B9E\u9645\u88C5\u4FEE\u9762\u79EF"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "\u4ECE\u7533\u8BF7\u5355\u5E26\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u989D\u5EA6\u5185\u62A5\u9500\u91D1\u989D"),
                createVNode("td", null, "IN_BX_AMT"),
                createVNode("td", null, "NumberField"),
                createVNode("td", null, "\u989D\u5EA6\u5185\u62A5\u9500\u91D1\u989D"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "\u7CFB\u7EDF\u8BA1\u7B97")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u989D\u5EA6\u5916\u62A5\u9500\u91D1\u989D"),
                createVNode("td", null, "OUT_BX_AMT"),
                createVNode("td", null, "NumberField"),
                createVNode("td", null, "\u989D\u5EA6\u5916\u62A5\u9500\u91D1\u989D"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "\u7CFB\u7EDF\u8BA1\u7B97")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u9A8C\u6536\u65E5\u671F"),
                createVNode("td", null, "CHECK_DATE"),
                createVNode("td", null, "DatePicker"),
                createVNode("td", null, "\u9A8C\u6536\u65E5\u671F"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "\u7528\u6237\u8F93\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5907\u6CE8"),
                createVNode("td", null, "NOTE"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u5907\u6CE8"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "\u7528\u6237\u8F93\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7533\u8BF7\u65E5\u671F"),
                createVNode("td", null, "CREATION_DATE"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u521B\u5EFA\u65F6\u95F4"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "\u9ED8\u8BA4\u5F53\u524D\u65F6\u95F4\uFF0C\u53EA\u8BFB")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u521B\u5EFA\u4EBA"),
                createVNode("td", null, "CREATED_BY_NAME"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u521B\u5EFA\u4EBA\u59D3\u540D"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "\u9ED8\u8BA4\u5F53\u524D\u7528\u6237\uFF0C\u53EA\u8BFB")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5BA1\u6838\u72B6\u6001"),
                createVNode("td", null, "HZ_APPROVE_STATUS"),
                createVNode("td", null, "Select(HWKF.APPROVE_STATUS)"),
                createVNode("td", null, "\u5DE5\u4F5C\u6D41\u5BA1\u6279\u72B6\u6001"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "\u9ED8\u8BA4NEW\uFF0C\u53EA\u8BFB")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5BA1\u6838\u72B6\u6001"),
                createVNode("td", null, "AUDIT_STAT"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u5BA1\u6838\u72B6\u6001"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "\u7CFB\u7EDF\u7EF4\u62A4")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7ECF\u8425\u5C5E\u6027"),
                createVNode("td", null, "CUSTOMER_CLASS"),
                createVNode("td", null, "Select(AE.CUSTOMER_CLASS)"),
                createVNode("td", null, "\u7ECF\u8425\u5C5E\u6027"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "\u4ECE\u7533\u8BF7\u5355\u5E26\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6CD5\u4EBA\u5BA2\u6237\u7F16\u7801"),
                createVNode("td", null, "BILLING_UNIT_CODE"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u6CD5\u4EBA\u5BA2\u6237\u7F16\u7801"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "\u4ECE\u7533\u8BF7\u5355\u5E26\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u9500\u552E\u533A\u57DF"),
                createVNode("td", null, "SALEZONE_ORG_NAME"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u9500\u552E\u533A\u57DF\u540D\u79F0"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "\u4ECE\u7533\u8BF7\u5355\u5E26\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u8FD0\u8425\u4E2D\u5FC3"),
                createVNode("td", null, "OPERAT_CENTER_ORG_NAME"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u8FD0\u8425\u4E2D\u5FC3\u540D\u79F0"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "\u4ECE\u7533\u8BF7\u5355\u5E26\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6210\u672C\u4E2D\u5FC3\u7F16\u7801"),
                createVNode("td", null, "COST_CENTER_CODE"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u6210\u672C\u4E2D\u5FC3\u7F16\u7801"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "\u4ECE\u7533\u8BF7\u5355\u5E26\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6210\u672C\u4E2D\u5FC3\u540D\u79F0"),
                createVNode("td", null, "COST_CENTER_NAME"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u6210\u672C\u4E2D\u5FC3\u540D\u79F0"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "\u4ECE\u7533\u8BF7\u5355\u5E26\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u9879\u76EE\u7F16\u7801"),
                createVNode("td", null, "OBJECT_CODE"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u9879\u76EE\u7F16\u7801"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "\u4ECE\u7533\u8BF7\u5355\u5E26\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u9879\u76EE\u540D\u79F0"),
                createVNode("td", null, "OBJECT_NAME"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u9879\u76EE\u540D\u79F0"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "\u4ECE\u7533\u8BF7\u5355\u5E26\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u9884\u7B97\u5E74\u5EA6"),
                createVNode("td", null, "BUD_YEAR"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u9884\u7B97\u5E74\u5EA6"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "\u4ECE\u7533\u8BF7\u5355\u5E26\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5C55\u793A\u8BBE\u8BA1\u5E08"),
                createVNode("td", null, "DESIGNER"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u5C55\u793A\u8BBE\u8BA1\u5E08"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "\u4ECE\u7533\u8BF7\u5355\u5E26\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u8BBE\u8BA1\u5E08\u7528\u6237\u540D"),
                createVNode("td", null, "USERNAME"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u8BBE\u8BA1\u5E08\u7528\u6237\u540D"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "\u4ECE\u7533\u8BF7\u5355\u5E26\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u8BBE\u8BA1\u5E08\u624B\u673A\u53F7"),
                createVNode("td", null, "MOBIL"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u8BBE\u8BA1\u5E08\u624B\u673A\u53F7"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "\u4ECE\u7533\u8BF7\u5355\u5E26\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u8F6F\u88C5\u8BBE\u8BA1\u5E08"),
                createVNode("td", null, "SOFT_DESIGNER"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u8F6F\u88C5\u8BBE\u8BA1\u5E08"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "\u4ECE\u7533\u8BF7\u5355\u5E26\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u4F4D\u7F6E\u7C7B\u578B"),
                createVNode("td", null, "STORE_LOCATION_TYPE"),
                createVNode("td", null, "Select(AE.STORE_LOCATION_TYPE)"),
                createVNode("td", null, "\u4F4D\u7F6E\u7C7B\u578B"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "\u4ECE\u7533\u8BF7\u5355\u5E26\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u88C5\u4FEE\u5468\u671F"),
                createVNode("td", null, "DECORATION_DAYS"),
                createVNode("td", null, "NumberField"),
                createVNode("td", null, "\u88C5\u4FEE\u5929\u6570"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "\u4ECE\u7533\u8BF7\u5355\u5E26\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u95E8\u5E97\u7C7B\u578B"),
                createVNode("td", null, "TERMINAL_TYPE"),
                createVNode("td", null, "Select(AE.TERMINAL_TYPE)"),
                createVNode("td", null, "\u95E8\u5E97\u7C7B\u578B"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "\u4ECE\u7533\u8BF7\u5355\u5E26\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u95E8\u5E97\u8BE6\u7EC6\u5730\u5740"),
                createVNode("td", null, "ADDR"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u95E8\u5E97\u8BE6\u7EC6\u5730\u5740"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "\u4ECE\u7533\u8BF7\u5355\u5E26\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u88C5\u4FEE\u6027\u8D28"),
                createVNode("td", null, "DECORATION_TYPE"),
                createVNode("td", null, "Select(AE.DECORATION_TYPE)"),
                createVNode("td", null, "\u88C5\u4FEE\u6027\u8D28"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "\u4ECE\u7533\u8BF7\u5355\u5E26\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u65E7\u5E97\u4E0A\u6B21\u88C5\u4FEE\u65F6\u95F4"),
                createVNode("td", null, "LAST_DECORATION_DATE"),
                createVNode("td", null, "DatePicker"),
                createVNode("td", null, "\u65E7\u5E97\u4E0A\u6B21\u88C5\u4FEE\u65F6\u95F4"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "\u4ECE\u7533\u8BF7\u5355\u5E26\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u8D85\u671F\u5929\u6570"),
                createVNode("td", null, "OVER_DATE"),
                createVNode("td", null, "NumberField"),
                createVNode("td", null, "\u88C5\u4FEE\u8D85\u671F\u5929\u6570"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "\u7CFB\u7EDF\u8BA1\u7B97")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7EBF\u4E0B\u9A8C\u6536\u65E5\u671F"),
                createVNode("td", null, "OFFLINE_CHECK_DATE"),
                createVNode("td", null, "DatePicker"),
                createVNode("td", null, "\u7EBF\u4E0B\u9A8C\u6536\u65E5\u671F"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "\u7528\u6237\u8F93\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u88C5\u4FEE\u98CE\u683C"),
                createVNode("td", null, "DECORATION_STYLE"),
                createVNode("td", null, "Select(AE.DECORATION_STYLE)"),
                createVNode("td", null, "\u88C5\u4FEE\u98CE\u683C"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "\u4ECE\u7533\u8BF7\u5355\u5E26\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u672C\u6B21\u88C5\u4FEE\u98CE\u683C"),
                createVNode("td", null, "THIS_DECORATION_STYLE"),
                createVNode("td", null, "Select(AE.DECORATION_STYLE)"),
                createVNode("td", null, "\u672C\u6B21\u88C5\u4FEE\u98CE\u683C"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "\u4ECE\u7533\u8BF7\u5355\u5E26\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u989D\u5EA6\u5185\u6709\u6548\u671F"),
                createVNode("td", null, "IN_VALIDITY_DATE"),
                createVNode("td", null, "DatePicker"),
                createVNode("td", null, "\u989D\u5EA6\u5185\u6709\u6548\u671F"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "\u4ECE\u7533\u8BF7\u5355\u5E26\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u989D\u5EA6\u5916\u5151\u73B0\u7ED3\u675F\u65F6\u95F4"),
                createVNode("td", null, "OUT_CASHOUT_END_TIME"),
                createVNode("td", null, "DatePicker"),
                createVNode("td", null, "\u989D\u5EA6\u5916\u5151\u73B0\u7ED3\u675F\u65F6\u95F4"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "\u4ECE\u7533\u8BF7\u5355\u5E26\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u95E8\u5934\u88C5\u4FEE\u7B49\u7EA7"),
                createVNode("td", null, "FRONTDOOR_FIXUP_GRADE"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u95E8\u5934\u88C5\u4FEE\u7B49\u7EA7"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "\u4ECE\u7533\u8BF7\u5355\u5E26\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u9A8C\u6536\u8D85\u671F\u5929\u6570"),
                createVNode("td", null, "CHECK_OVER_DAY"),
                createVNode("td", null, "NumberField"),
                createVNode("td", null, "\u9A8C\u6536\u8D85\u671F\u5929\u6570"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "\u7CFB\u7EDF\u8BA1\u7B97")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u662F\u5426\u8D85\u6807\u51C6"),
                createVNode("td", null, "IS_OVER_STANDARD"),
                createVNode("td", null, "NumberField"),
                createVNode("td", null, "\u662F\u5426\u8D85\u6807\u51C6"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "\u7CFB\u7EDF\u8BA1\u7B97")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u88C5\u4FEE\u8D85\u671F\u514D\u8D23\u4EFD\u6570"),
                createVNode("td", null, "DECORATION_OVERTIME_FREE_COPY"),
                createVNode("td", null, "NumberField"),
                createVNode("td", null, "\u88C5\u4FEE\u8D85\u671F\u514D\u8D23\u4EFD\u6570"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "\u7CFB\u7EDF\u53C2\u6570")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u9A8C\u6536\u8D85\u671F\u514D\u8D23\u4EFD\u6570"),
                createVNode("td", null, "CHECK_OVERTIME_FREE_COPY"),
                createVNode("td", null, "NumberField"),
                createVNode("td", null, "\u9A8C\u6536\u8D85\u671F\u514D\u8D23\u4EFD\u6570"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "\u7CFB\u7EDF\u53C2\u6570")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5BA1\u6838\u5907\u6CE8"),
                createVNode("td", null, "REVIEW_NOTE"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u5BA1\u6838\u5907\u6CE8"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "\u5BA1\u6279\u8282\u70B9\u53EF\u7F16\u8F91")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u53D1\u7968\u7A0E\u7387"),
                createVNode("td", null, "INVOICE_TAX_RATE"),
                createVNode("td", null, "Select"),
                createVNode("td", null, "\u53D1\u7968\u7A0E\u7387"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "\u7528\u6237\u9009\u62E9")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u53D1\u7968\u7C7B\u578B"),
                createVNode("td", null, "INVOICE_TYPE"),
                createVNode("td", null, "Select"),
                createVNode("td", null, "\u53D1\u7968\u7C7B\u578B"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "\u7528\u6237\u9009\u62E9")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5F00\u7968\u529E\u516C\u5BA4\u7F16\u7801"),
                createVNode("td", null, "ISSUING_OFFICE_CODE"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u5F00\u7968\u529E\u516C\u5BA4\u7F16\u7801"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "\u4ECELOV\u5E26\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5F00\u7968\u529E\u516C\u5BA4"),
                createVNode("td", null, "ISSUING_OFFICE"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u5F00\u7968\u529E\u516C\u5BA4"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "\u4ECELOV\u5E26\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u4ED8\u6B3E\u65B9\u5F0F"),
                createVNode("td", null, "PAY_TYPE"),
                createVNode("td", null, "Select(AE.PAY_TYPE)"),
                createVNode("td", null, "\u4ED8\u6B3E\u65B9\u5F0F"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "\u7528\u6237\u9009\u62E9")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u4F9B\u5E94\u5546\u7F16\u7801"),
                createVNode("td", null, "VENDOR_CODE"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u4F9B\u5E94\u5546\u7F16\u7801"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "\u4ECELOV\u5E26\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u4F9B\u5E94\u5546\u540D\u79F0"),
                createVNode("td", null, "VENDOR_NAME"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u4F9B\u5E94\u5546\u540D\u79F0"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "\u4ECELOV\u5E26\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u8054\u7CFB\u4EBA"),
                createVNode("td", null, "CONTACT"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u8054\u7CFB\u4EBA"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "\u4ECELOV\u5E26\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u8054\u7CFB\u7535\u8BDD"),
                createVNode("td", null, "TELE"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u8054\u7CFB\u7535\u8BDD"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "\u4ECELOV\u5E26\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u989D\u5EA6\u5916\u9A8C\u6536\u91D1\u989D"),
                createVNode("td", null, "OUT_CHECK_AMT"),
                createVNode("td", null, "NumberField"),
                createVNode("td", null, "\u989D\u5EA6\u5916\u9A8C\u6536\u91D1\u989D"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "\u7CFB\u7EDF\u8BA1\u7B97")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6211\u53F8\u5F00\u7968"),
                createVNode("td", null, "OUR_INVOICING"),
                createVNode("td", null, "Select"),
                createVNode("td", null, "\u6211\u53F8\u5F00\u7968"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "\u7528\u6237\u9009\u62E9")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u4E09\u65B9\u534F\u8BAE"),
                createVNode("td", null, "TRIPAR_AGREE"),
                createVNode("td", null, "Select"),
                createVNode("td", null, "\u4E09\u65B9\u534F\u8BAE"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "\u7528\u6237\u9009\u62E9")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u662F\u5426\u91CD\u7B7E"),
                createVNode("td", null, "IS_RESIGN"),
                createVNode("td", null, "Select"),
                createVNode("td", null, "\u662F\u5426\u91CD\u7B7E"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "\u7CFB\u7EDF\u7EF4\u62A4")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u4EFB\u52A1\u540D\u79F0"),
                createVNode("td", null, "TASK_NAME"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u5F53\u524D\u5BA1\u6279\u4EFB\u52A1\u540D\u79F0"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "\u5DE5\u4F5C\u6D41\u5E26\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u63D0\u524D\u5151\u73B0\u6807\u8BC6"),
                createVNode("td", null, "EARLY_ENCASHMENT_FLAG"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u63D0\u524D\u5151\u73B0\u6807\u8BC6"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "\u7CFB\u7EDF\u7EF4\u62A4")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u8F6F\u88C5\u8865\u8D34\u91D1\u989D"),
                createVNode("td", null, "SOFT_PURCHASE_AMT"),
                createVNode("td", null, "NumberField"),
                createVNode("td", null, "\u8F6F\u88C5\u8865\u8D34\u91D1\u989D"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "\u7CFB\u7EDF\u8BA1\u7B97")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u8F6F\u88C5\u5E7F\u544A\u8D39\u91C7\u8D2D\u91D1\u989D"),
                createVNode("td", null, "SOFT_ADV_PURCHASE_AMT"),
                createVNode("td", null, "NumberField"),
                createVNode("td", null, "\u8F6F\u88C5\u5E7F\u544A\u8D39\u91C7\u8D2D\u91D1\u989D"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "\u7CFB\u7EDF\u8BA1\u7B97")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u8F6F\u88C5\u7269\u54C1\u91C7\u8D2D\u91D1\u989D"),
                createVNode("td", null, "SOFT_GOODS_PURCHASE_AMT"),
                createVNode("td", null, "NumberField"),
                createVNode("td", null, "\u8F6F\u88C5\u7269\u54C1\u91C7\u8D2D\u91D1\u989D"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "\u7CFB\u7EDF\u8BA1\u7B97")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u8F6F\u88C5\u91C7\u8D2D\u6807\u51C6"),
                createVNode("td", null, "SOFT_PURCHASE_STANDARD"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u8F6F\u88C5\u91C7\u8D2D\u6807\u51C6"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "\u4ECE\u88C5\u4FEE\u6807\u51C6\u5E26\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u8F6F\u88C5\u91C7\u8D2D\u6807\u51C6\u91D1\u989D"),
                createVNode("td", null, "SOFT_PURCHASE_STANDARD_AMT"),
                createVNode("td", null, "NumberField"),
                createVNode("td", null, "\u8F6F\u88C5\u91C7\u8D2D\u6807\u51C6\u91D1\u989D"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "\u7CFB\u7EDF\u8BA1\u7B97")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u8F6F\u88C5\u8FBE\u6210\u91C7\u8D2D\u91D1\u989D"),
                createVNode("td", null, "SOFT_REACH_PURCHASE_AMT"),
                createVNode("td", null, "NumberField"),
                createVNode("td", null, "\u8F6F\u88C5\u8FBE\u6210\u91C7\u8D2D\u91D1\u989D"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "\u7CFB\u7EDF\u8BA1\u7B97")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u8F6F\u88C5\u5BA1\u6279\u6807\u51C6\u4E34\u65F6"),
                createVNode("td", null, "SOFT_APPROVAL_STANDARD_TMP"),
                createVNode("td", null, "NumberField"),
                createVNode("td", null, "\u8F6F\u88C5\u5BA1\u6279\u6807\u51C6\u4E34\u65F6"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "\u5BA1\u6279\u8282\u70B9\u53EF\u7F16\u8F91")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u8F6F\u88C5\u91C7\u8D2D\u767E\u5206\u6BD4"),
                createVNode("td", null, "SOFT_PURCHASE_PERCENT"),
                createVNode("td", null, "NumberField"),
                createVNode("td", null, "\u8F6F\u88C5\u91C7\u8D2D\u767E\u5206\u6BD4"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "\u7CFB\u7EDF\u8BA1\u7B97")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u8F6F\u88C5\u6263\u51CF\u91D1\u989D"),
                createVNode("td", null, "SOFT_DEDUCT_AMT"),
                createVNode("td", null, "NumberField"),
                createVNode("td", null, "\u8F6F\u88C5\u6263\u51CF\u91D1\u989D"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "\u7CFB\u7EDF\u8BA1\u7B97")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u706F\u5177\u8865\u8D34\u91D1\u989D"),
                createVNode("td", null, "LANTERN_AMT"),
                createVNode("td", null, "NumberField"),
                createVNode("td", null, "\u706F\u5177\u8865\u8D34\u91D1\u989D"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "\u7CFB\u7EDF\u8BA1\u7B97")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u706F\u5177\u5E7F\u544A\u8D39\u91D1\u989D"),
                createVNode("td", null, "LANTERN_ADV_AMT"),
                createVNode("td", null, "NumberField"),
                createVNode("td", null, "\u706F\u5177\u5E7F\u544A\u8D39\u91D1\u989D"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "\u7CFB\u7EDF\u8BA1\u7B97")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u706F\u5177\u7269\u54C1\u91D1\u989D"),
                createVNode("td", null, "LANTERN_GOODS_AMT"),
                createVNode("td", null, "NumberField"),
                createVNode("td", null, "\u706F\u5177\u7269\u54C1\u91D1\u989D"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "\u7CFB\u7EDF\u8BA1\u7B97")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u706F\u5177\u6807\u51C6"),
                createVNode("td", null, "LANTERN_STANDARD"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u706F\u5177\u6807\u51C6"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "\u4ECE\u88C5\u4FEE\u6807\u51C6\u5E26\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u706F\u5177\u6807\u51C6\u91D1\u989D"),
                createVNode("td", null, "LANTERN_STANDARD_AMT"),
                createVNode("td", null, "NumberField"),
                createVNode("td", null, "\u706F\u5177\u6807\u51C6\u91D1\u989D"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "\u7CFB\u7EDF\u8BA1\u7B97")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u706F\u5177\u8FBE\u6210\u91D1\u989D"),
                createVNode("td", null, "LANTERN_REACH_AMT"),
                createVNode("td", null, "NumberField"),
                createVNode("td", null, "\u706F\u5177\u8FBE\u6210\u91D1\u989D"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "\u7CFB\u7EDF\u8BA1\u7B97")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u706F\u5177\u5BA1\u6279\u6807\u51C6\u4E34\u65F6"),
                createVNode("td", null, "LANTERN_APPROVAL_STANDARD_TMP"),
                createVNode("td", null, "NumberField"),
                createVNode("td", null, "\u706F\u5177\u5BA1\u6279\u6807\u51C6\u4E34\u65F6"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "\u5BA1\u6279\u8282\u70B9\u53EF\u7F16\u8F91")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u706F\u5177\u767E\u5206\u6BD4"),
                createVNode("td", null, "LANTERN_PERCENT"),
                createVNode("td", null, "NumberField"),
                createVNode("td", null, "\u706F\u5177\u767E\u5206\u6BD4"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "\u7CFB\u7EDF\u8BA1\u7B97")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u706F\u5177\u6263\u51CF\u91D1\u989D"),
                createVNode("td", null, "LANTERN_DEDUCT_AMT"),
                createVNode("td", null, "NumberField"),
                createVNode("td", null, "\u706F\u5177\u6263\u51CF\u91D1\u989D"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "\u7CFB\u7EDF\u8BA1\u7B97")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u8F6F\u88C5\u706F\u5177\u6263\u7F5A\u91D1\u989D"),
                createVNode("td", null, "ALL_DEDUCT_AMT"),
                createVNode("td", null, "NumberField"),
                createVNode("td", null, "\u8F6F\u88C5\u706F\u5177\u6263\u7F5A\u91D1\u989D(\u5143)"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "\u7CFB\u7EDF\u8BA1\u7B97")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u95E8\u5E97\u6240\u5728\u5730"),
                createVNode("td", null, "AREA_OBJ"),
                createVNode("td", null, "Select(\u7701\u5E02\u533A\u7EA7\u8054)"),
                createVNode("td", null, "\u95E8\u5E97\u6240\u5728\u5730"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "\u4ECE\u7533\u8BF7\u5355\u5E26\u5165\uFF0C\u7701\u5E02\u533A\u4E09\u7EA7\u7EA7\u8054\u9009\u62E9")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7EC4\u7EC7ID"),
                createVNode("td", null, "ENTID"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u4E8B\u4E1A\u90E8/\u7EC4\u7EC7ID"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "\u7CFB\u7EDF\u81EA\u52A8\u8D4B\u503C")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u9644\u4EF6\u5173\u8054"),
                createVNode("td", null, "OBJ_ATTACH_REL_DTOS"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u9644\u4EF6\u5173\u8054\u5BF9\u8C61"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "\u4E0A\u4F20\u9644\u4EF6\u65F6\u5173\u8054")
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, { title: "\u5B50\u8868\u683C\u6A21\u5757" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p${_scopeId}>\u672C\u9875\u9762\u5305\u542B\u591A\u4E2A\u5B50\u8868\u683CTab\uFF0C\u5728\u8BE6\u60C5\u9875\u4E2D\u4EE5Collapse\u9762\u677F\u6216Tabs\u5448\u73B0\u3002</p><h4${_scopeId}>\u88C5\u4FEE\u91D1\u989D\u4FE1\u606F\u8868</h4><table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5B57\u6BB5\u540D</th><th${_scopeId}>\u6570\u636E\u5E93\u5217\u540D</th><th${_scopeId}>\u7EC4\u4EF6</th><th${_scopeId}>\u4E1A\u52A1\u91CA\u4E49</th><th${_scopeId}>\u663E\u9690\u6761\u4EF6</th><th${_scopeId}>\u53D6\u503C/\u8D4B\u503C\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u53D1\u7968\u7A0E\u70B9</td><td${_scopeId}>INVOICE_TAX_RATE</td><td${_scopeId}>NumberField</td><td${_scopeId}>\u53D1\u7968\u7A0E\u70B9(%)</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>\u7528\u6237\u8F93\u5165\uFF0C0~13</td></tr><tr${_scopeId}><td${_scopeId}>\u53D1\u7968\u7C7B\u578B</td><td${_scopeId}>INVOICE_TYPE</td><td${_scopeId}>Select(AE.MKT.INVOICE_TYPE)</td><td${_scopeId}>\u53D1\u7968\u7C7B\u578B</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>\u7528\u6237\u9009\u62E9</td></tr><tr${_scopeId}><td${_scopeId}>\u5F00\u7968\u5355\u4F4D</td><td${_scopeId}>ISSUING_OFFICE_CODE/ISSUING_OFFICE</td><td${_scopeId}>Lov(AE.SALE_TRADING_COMPANY_CUSTOMER)</td><td${_scopeId}>\u5F00\u7968\u5355\u4F4D</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>\u4ECELOV\u9009\u62E9\uFF0C\u5E26\u51FA\u7F16\u7801\u548C\u540D\u79F0</td></tr><tr${_scopeId}><td${_scopeId}>\u652F\u4ED8\u65B9\u5F0F</td><td${_scopeId}>PAY_TYPE</td><td${_scopeId}>Select(AE.PAY_TYPE)</td><td${_scopeId}>\u652F\u4ED8\u65B9\u5F0F</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>\u7528\u6237\u9009\u62E9\uFF0C\u9ED8\u8BA43(\u6298\u6263\u6298\u8BA9)</td></tr><tr${_scopeId}><td${_scopeId}>\u4F9B\u5E94\u5546\u7F16\u7801</td><td${_scopeId}>VENDOR_CODE</td><td${_scopeId}>Lov(AE.VENDOR_VIEW_VIEW)</td><td${_scopeId}>\u4F9B\u5E94\u5546\u7F16\u7801</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>\u4ECELOV\u9009\u62E9</td></tr><tr${_scopeId}><td${_scopeId}>\u4F9B\u5E94\u5546\u540D\u79F0</td><td${_scopeId}>VENDOR_NAME</td><td${_scopeId}>TextField</td><td${_scopeId}>\u4F9B\u5E94\u5546\u540D\u79F0</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>\u4ECELOV\u5E26\u5165</td></tr><tr${_scopeId}><td${_scopeId}>\u8054\u7CFB\u4EBA</td><td${_scopeId}>CONTACT</td><td${_scopeId}>TextField</td><td${_scopeId}>\u4F9B\u5E94\u5546\u8054\u7CFB\u4EBA</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>\u4ECELOV\u5E26\u5165</td></tr><tr${_scopeId}><td${_scopeId}>\u8054\u7CFB\u7535\u8BDD</td><td${_scopeId}>TELE</td><td${_scopeId}>TextField</td><td${_scopeId}>\u4F9B\u5E94\u5546\u7535\u8BDD</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>\u4ECELOV\u5E26\u5165</td></tr><tr${_scopeId}><td${_scopeId}>\u989D\u5EA6\u5916\u9A8C\u6536\u603B\u989D</td><td${_scopeId}>OUT_CHECK_AMT</td><td${_scopeId}>NumberField</td><td${_scopeId}>\u989D\u5EA6\u5916\u9A8C\u6536\u603B\u989D</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>\u7CFB\u7EDF\u8BA1\u7B97</td></tr><tr${_scopeId}><td${_scopeId}>\u672C\u65B9\u5F00\u7968</td><td${_scopeId}>OUR_INVOICING</td><td${_scopeId}>Select</td><td${_scopeId}>\u672C\u65B9\u5F00\u7968</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>\u7528\u6237\u9009\u62E9\uFF0CtrueValue=2(\u662F)\uFF0CfalseValue=1(\u5426)\uFF0C\u9ED8\u8BA42</td></tr><tr${_scopeId}><td${_scopeId}>\u4E09\u65B9\u534F\u8BAE</td><td${_scopeId}>TRIPAR_AGREE</td><td${_scopeId}>Select</td><td${_scopeId}>\u4E09\u65B9\u534F\u8BAE</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>\u7528\u6237\u9009\u62E9\uFF0CtrueValue=2(\u662F)\uFF0CfalseValue=1(\u5426)\uFF0C\u9ED8\u8BA41</td></tr><tr${_scopeId}><td${_scopeId}>\u9700\u91CD\u7B7E\u534F\u8BAE</td><td${_scopeId}>IS_RESIGN</td><td${_scopeId}>Select</td><td${_scopeId}>\u9700\u91CD\u7B7E\u534F\u8BAE</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>\u4ECE\u7533\u8BF7\u5355\u5E26\u5165</td></tr></tbody></table><h4${_scopeId}>\u88C5\u4FEE\u6807\u51C6\u8868</h4><table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5B57\u6BB5\u540D</th><th${_scopeId}>\u6570\u636E\u5E93\u5217\u540D</th><th${_scopeId}>\u7EC4\u4EF6</th><th${_scopeId}>\u4E1A\u52A1\u91CA\u4E49</th><th${_scopeId}>\u663E\u9690\u6761\u4EF6</th><th${_scopeId}>\u53D6\u503C/\u8D4B\u503C\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u8865\u8D34\u6807\u51C6CODE</td><td${_scopeId}>-</td><td${_scopeId}>TextField</td><td${_scopeId}>\u8865\u8D34\u6807\u51C6\u7F16\u7801</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>\u4ECE\u88C5\u4FEE\u6807\u51C6\u63A5\u53E3\u5E26\u5165</td></tr><tr${_scopeId}><td${_scopeId}>\u8865\u8D34\u6807\u51C6\u540D\u79F0</td><td${_scopeId}>-</td><td${_scopeId}>TextField</td><td${_scopeId}>\u8865\u8D34\u6807\u51C6\u540D\u79F0</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>\u4ECE\u88C5\u4FEE\u6807\u51C6\u63A5\u53E3\u5E26\u5165</td></tr><tr${_scopeId}><td${_scopeId}>\u6807\u51C6\u503C</td><td${_scopeId}>-</td><td${_scopeId}>NumberField</td><td${_scopeId}>\u6807\u51C6\u503C</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>\u4ECE\u88C5\u4FEE\u6807\u51C6\u63A5\u53E3\u5E26\u5165</td></tr><tr${_scopeId}><td${_scopeId}>\u6807\u51C6\u952E</td><td${_scopeId}>-</td><td${_scopeId}>TextField</td><td${_scopeId}>\u6807\u51C6\u952E</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>\u4ECE\u88C5\u4FEE\u6807\u51C6\u63A5\u53E3\u5E26\u5165</td></tr></tbody></table><h4${_scopeId}>\u8D44\u6E90\u9884\u7B97\u4FE1\u606F\u8868</h4><table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5B57\u6BB5\u540D</th><th${_scopeId}>\u6570\u636E\u5E93\u5217\u540D</th><th${_scopeId}>\u7EC4\u4EF6</th><th${_scopeId}>\u4E1A\u52A1\u91CA\u4E49</th><th${_scopeId}>\u663E\u9690\u6761\u4EF6</th><th${_scopeId}>\u53D6\u503C/\u8D4B\u503C\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u8D44\u6E90\u9884\u7B97\u7F16\u7801</td><td${_scopeId}>-</td><td${_scopeId}>TextField</td><td${_scopeId}>\u8D44\u6E90\u9884\u7B97\u7F16\u7801</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>\u7CFB\u7EDF\u5E26\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>\u8D44\u6E90\u9884\u7B97\u540D\u79F0</td><td${_scopeId}>-</td><td${_scopeId}>TextField</td><td${_scopeId}>\u8D44\u6E90\u9884\u7B97\u540D\u79F0</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>\u7CFB\u7EDF\u5E26\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>\u8D44\u6E90\u9884\u7B97\u91D1\u989D</td><td${_scopeId}>-</td><td${_scopeId}>NumberField</td><td${_scopeId}>\u8D44\u6E90\u9884\u7B97\u91D1\u989D</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>\u7CFB\u7EDF\u5E26\u51FA</td></tr></tbody></table><h4${_scopeId}>\u5E97\u9762\u9A8C\u6536\u8D28\u91CF\u4FE1\u606F\u8868</h4><table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5B57\u6BB5\u540D</th><th${_scopeId}>\u6570\u636E\u5E93\u5217\u540D</th><th${_scopeId}>\u7EC4\u4EF6</th><th${_scopeId}>\u4E1A\u52A1\u91CA\u4E49</th><th${_scopeId}>\u663E\u9690\u6761\u4EF6</th><th${_scopeId}>\u53D6\u503C/\u8D4B\u503C\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u9A8C\u6536\u9879\u76EE</td><td${_scopeId}>-</td><td${_scopeId}>TextField</td><td${_scopeId}>\u9A8C\u6536\u9879\u76EE\u540D\u79F0</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>\u7CFB\u7EDF\u5E26\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>\u9879\u76EE\u7C7B\u578B</td><td${_scopeId}>-</td><td${_scopeId}>TextField</td><td${_scopeId}>\u9A8C\u6536\u9879\u76EE\u7C7B\u578B</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>\u7CFB\u7EDF\u5E26\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>\u5B9E\u9645\u60C5\u51B5</td><td${_scopeId}>-</td><td${_scopeId}>TextField</td><td${_scopeId}>\u5B9E\u9645\u60C5\u51B5</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>\u7528\u6237\u8F93\u5165</td></tr><tr${_scopeId}><td${_scopeId}>\u9A8C\u6536\u7ED3\u679C</td><td${_scopeId}>-</td><td${_scopeId}>Select</td><td${_scopeId}>\u9A8C\u6536\u7ED3\u679C(\u5408\u683C/\u4E0D\u5408\u683C)</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>\u7528\u6237\u9009\u62E9</td></tr></tbody></table><h4${_scopeId}>\u95E8\u5934\u9A8C\u6536\u8D28\u91CF\u4FE1\u606F\u8868</h4><table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5B57\u6BB5\u540D</th><th${_scopeId}>\u6570\u636E\u5E93\u5217\u540D</th><th${_scopeId}>\u7EC4\u4EF6</th><th${_scopeId}>\u4E1A\u52A1\u91CA\u4E49</th><th${_scopeId}>\u663E\u9690\u6761\u4EF6</th><th${_scopeId}>\u53D6\u503C/\u8D4B\u503C\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u9A8C\u6536\u9879\u76EE</td><td${_scopeId}>-</td><td${_scopeId}>TextField</td><td${_scopeId}>\u95E8\u5934\u9A8C\u6536\u9879\u76EE\u540D\u79F0</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>\u7CFB\u7EDF\u5E26\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>\u9879\u76EE\u7C7B\u578B</td><td${_scopeId}>-</td><td${_scopeId}>TextField</td><td${_scopeId}>\u95E8\u5934\u9A8C\u6536\u9879\u76EE\u7C7B\u578B</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>\u7CFB\u7EDF\u5E26\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>\u5B9E\u9645\u60C5\u51B5</td><td${_scopeId}>-</td><td${_scopeId}>TextField</td><td${_scopeId}>\u5B9E\u9645\u60C5\u51B5</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>\u7528\u6237\u8F93\u5165</td></tr><tr${_scopeId}><td${_scopeId}>\u9A8C\u6536\u7ED3\u679C</td><td${_scopeId}>-</td><td${_scopeId}>Select</td><td${_scopeId}>\u9A8C\u6536\u7ED3\u679C(\u5408\u683C/\u4E0D\u5408\u683C)</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>\u7528\u6237\u9009\u62E9</td></tr></tbody></table><h4${_scopeId}>\u6263\u5206\u6BD4\u4F8B\u8868\uFF08\u7528\u4E8E\u7F5A\u91D1\u8BA1\u7B97\uFF09</h4><table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5B57\u6BB5\u540D</th><th${_scopeId}>\u6570\u636E\u5E93\u5217\u540D</th><th${_scopeId}>\u7EC4\u4EF6</th><th${_scopeId}>\u4E1A\u52A1\u91CA\u4E49</th><th${_scopeId}>\u663E\u9690\u6761\u4EF6</th><th${_scopeId}>\u53D6\u503C/\u8D4B\u503C\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u6263\u9664\u9879\u76EE</td><td${_scopeId}>-</td><td${_scopeId}>TextField</td><td${_scopeId}>\u6263\u5206\u9879\u76EE\u540D\u79F0</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>\u7CFB\u7EDF\u5E26\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>\u6263\u9664\u6BD4\u4F8B(%)</td><td${_scopeId}>-</td><td${_scopeId}>NumberField</td><td${_scopeId}>\u6263\u9664\u6BD4\u4F8B</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>\u7CFB\u7EDF\u8BA1\u7B97\u6216\u7528\u6237\u8F93\u5165</td></tr><tr${_scopeId}><td${_scopeId}>\u9A8C\u6536\u6BD4\u4F8B(%)</td><td${_scopeId}>-</td><td${_scopeId}>NumberField</td><td${_scopeId}>\u9A8C\u6536\u6BD4\u4F8B</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>\u7CFB\u7EDF\u8BA1\u7B97</td></tr><tr${_scopeId}><td${_scopeId}>\u5151\u73B0\u6BD4\u4F8B(%)</td><td${_scopeId}>-</td><td${_scopeId}>NumberField</td><td${_scopeId}>\u5151\u73B0\u6BD4\u4F8B</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>\u7CFB\u7EDF\u8BA1\u7B97\uFF0C0~100%</td></tr><tr${_scopeId}><td${_scopeId}>\u6263\u51CF\u91D1\u989D</td><td${_scopeId}>-</td><td${_scopeId}>NumberField</td><td${_scopeId}>\u6263\u51CF\u91D1\u989D</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>\u7CFB\u7EDF\u8BA1\u7B97</td></tr></tbody></table><h4${_scopeId}>\u53D1\u7968\u4FE1\u606F\u8868</h4><table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5B57\u6BB5\u540D</th><th${_scopeId}>\u6570\u636E\u5E93\u5217\u540D</th><th${_scopeId}>\u7EC4\u4EF6</th><th${_scopeId}>\u4E1A\u52A1\u91CA\u4E49</th><th${_scopeId}>\u663E\u9690\u6761\u4EF6</th><th${_scopeId}>\u53D6\u503C/\u8D4B\u503C\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u53D1\u7968\u7C7B\u578B</td><td${_scopeId}>-</td><td${_scopeId}>TextField</td><td${_scopeId}>\u53D1\u7968\u7C7B\u578B</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>\u7CFB\u7EDF\u5E26\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>\u53D1\u7968\u53F7\u7801</td><td${_scopeId}>-</td><td${_scopeId}>TextField</td><td${_scopeId}>\u53D1\u7968\u53F7\u7801</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>\u7CFB\u7EDF\u5E26\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>\u53D1\u7968\u91D1\u989D</td><td${_scopeId}>-</td><td${_scopeId}>NumberField</td><td${_scopeId}>\u53D1\u7968\u91D1\u989D</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>\u7CFB\u7EDF\u5E26\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>\u7A0E\u989D</td><td${_scopeId}>-</td><td${_scopeId}>NumberField</td><td${_scopeId}>\u7A0E\u989D</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>\u7CFB\u7EDF\u8BA1\u7B97</td></tr></tbody></table><h4${_scopeId}>\u8D22\u52A1\u590D\u6838\u8868</h4><table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5B57\u6BB5\u540D</th><th${_scopeId}>\u6570\u636E\u5E93\u5217\u540D</th><th${_scopeId}>\u7EC4\u4EF6</th><th${_scopeId}>\u4E1A\u52A1\u91CA\u4E49</th><th${_scopeId}>\u663E\u9690\u6761\u4EF6</th><th${_scopeId}>\u53D6\u503C/\u8D4B\u503C\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u590D\u6838\u9879\u76EE</td><td${_scopeId}>-</td><td${_scopeId}>TextField</td><td${_scopeId}>\u590D\u6838\u9879\u76EE\u540D\u79F0</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>\u7CFB\u7EDF\u5E26\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>\u8865\u8D34\u6807\u51C6</td><td${_scopeId}>-</td><td${_scopeId}>NumberField</td><td${_scopeId}>\u8865\u8D34\u6807\u51C6</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>\u7CFB\u7EDF\u5E26\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>\u53EF\u62A5\u9500\u91D1\u989D(\u542B\u7A0E)</td><td${_scopeId}>-</td><td${_scopeId}>NumberField</td><td${_scopeId}>\u53EF\u62A5\u9500\u542B\u7A0E\u91D1\u989D</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>\u7CFB\u7EDF\u8BA1\u7B97</td></tr><tr${_scopeId}><td${_scopeId}>\u590D\u6838\u7ED3\u679C</td><td${_scopeId}>-</td><td${_scopeId}>TextField</td><td${_scopeId}>\u590D\u6838\u7ED3\u679C</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>\u7528\u6237\u8F93\u5165</td></tr></tbody></table><h4${_scopeId}>\u8D22\u52A1\u590D\u6838\u7ED3\u679C\u8868</h4><table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5B57\u6BB5\u540D</th><th${_scopeId}>\u6570\u636E\u5E93\u5217\u540D</th><th${_scopeId}>\u7EC4\u4EF6</th><th${_scopeId}>\u4E1A\u52A1\u91CA\u4E49</th><th${_scopeId}>\u663E\u9690\u6761\u4EF6</th><th${_scopeId}>\u53D6\u503C/\u8D4B\u503C\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u590D\u6838\u6807\u51C6</td><td${_scopeId}>-</td><td${_scopeId}>NumberField</td><td${_scopeId}>\u590D\u6838\u6807\u51C6</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>\u7CFB\u7EDF\u5E26\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>\u590D\u6838\u9762\u79EF</td><td${_scopeId}>-</td><td${_scopeId}>NumberField</td><td${_scopeId}>\u590D\u6838\u9762\u79EF</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>\u7528\u6237\u8F93\u5165</td></tr><tr${_scopeId}><td${_scopeId}>\u590D\u6838\u91D1\u989D</td><td${_scopeId}>-</td><td${_scopeId}>NumberField</td><td${_scopeId}>\u590D\u6838\u91D1\u989D</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>\u7CFB\u7EDF\u8BA1\u7B97</td></tr></tbody></table><h4${_scopeId}>\u95E8\u5E97\u88C5\u4FEE\u7167\u7247\u8868</h4><table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5B57\u6BB5\u540D</th><th${_scopeId}>\u6570\u636E\u5E93\u5217\u540D</th><th${_scopeId}>\u7EC4\u4EF6</th><th${_scopeId}>\u4E1A\u52A1\u91CA\u4E49</th><th${_scopeId}>\u663E\u9690\u6761\u4EF6</th><th${_scopeId}>\u53D6\u503C/\u8D4B\u503C\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u7167\u7247\u7C7B\u578B</td><td${_scopeId}>-</td><td${_scopeId}>Select</td><td${_scopeId}>\u7167\u7247\u7C7B\u578B(\u95E8\u5934/\u5E97\u5185/\u536B\u751F\u95F4\u7B49)</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>\u7528\u6237\u9009\u62E9</td></tr><tr${_scopeId}><td${_scopeId}>\u7167\u7247</td><td${_scopeId}>-</td><td${_scopeId}>Upload</td><td${_scopeId}>\u88C5\u4FEE\u7167\u7247\u4E0A\u4F20</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>\u652F\u6301\u4E0A\u4F20/\u9884\u89C8/\u4E0B\u8F7D</td></tr><tr${_scopeId}><td${_scopeId}>\u4E0A\u4F20\u65F6\u95F4</td><td${_scopeId}>-</td><td${_scopeId}>DatePicker</td><td${_scopeId}>\u4E0A\u4F20\u65F6\u95F4</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>\u7CFB\u7EDF\u81EA\u52A8\u8BB0\u5F55</td></tr><tr${_scopeId}><td${_scopeId}>\u5907\u6CE8</td><td${_scopeId}>-</td><td${_scopeId}>TextField</td><td${_scopeId}>\u7167\u7247\u8BF4\u660E</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>\u7528\u6237\u8F93\u5165</td></tr></tbody></table><h4${_scopeId}>\u4FDD\u8BC1\u4E66\u4FE1\u606F</h4><table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5B57\u6BB5\u540D</th><th${_scopeId}>\u6570\u636E\u5E93\u5217\u540D</th><th${_scopeId}>\u7EC4\u4EF6</th><th${_scopeId}>\u4E1A\u52A1\u91CA\u4E49</th><th${_scopeId}>\u663E\u9690\u6761\u4EF6</th><th${_scopeId}>\u53D6\u503C/\u8D4B\u503C\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u536B\u751F\u95F4\u5408\u683C</td><td${_scopeId}>RESTROOM_A</td><td${_scopeId}>Switch</td><td${_scopeId}>\u8BBE\u8BA1\u5E08\u4FDD\u8BC1\u4E66-\u536B\u751F\u95F4\u5408\u683C</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>trueValue=2, falseValue=1</td></tr><tr${_scopeId}><td${_scopeId}>\u6742\u7269\u95F4\u5408\u683C</td><td${_scopeId}>HOVEL_A</td><td${_scopeId}>Switch</td><td${_scopeId}>\u8BBE\u8BA1\u5E08\u4FDD\u8BC1\u4E66-\u6742\u7269\u95F4\u5408\u683C</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>trueValue=2, falseValue=1</td></tr><tr${_scopeId}><td${_scopeId}>\u529E\u516C\u5BA4\u5408\u683C</td><td${_scopeId}>OFFICE_A</td><td${_scopeId}>Switch</td><td${_scopeId}>\u8BBE\u8BA1\u5E08\u4FDD\u8BC1\u4E66-\u529E\u516C\u5BA4\u5408\u683C</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>trueValue=2, falseValue=1</td></tr><tr${_scopeId}><td${_scopeId}>\u5176\u4ED6\u533A\u57DF\u5408\u683C</td><td${_scopeId}>OTHER_AREA_A</td><td${_scopeId}>Switch</td><td${_scopeId}>\u8BBE\u8BA1\u5E08\u4FDD\u8BC1\u4E66-\u5176\u4ED6\u533A\u57DF\u5408\u683C</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>trueValue=2, falseValue=1</td></tr><tr${_scopeId}><td${_scopeId}>\u8BBE\u8BA1\u5E08\u7B7E\u540D</td><td${_scopeId}>DESIGNER_NAME</td><td${_scopeId}>TextField</td><td${_scopeId}>\u8BBE\u8BA1\u5E08\u4FDD\u8BC1\u4E66-\u8BBE\u8BA1\u5E08\u59D3\u540D</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>\u8BBE\u8BA1\u5E08\u786E\u8BA4\u65F6\u7B7E\u540D</td></tr><tr${_scopeId}><td${_scopeId}>\u8BBE\u8BA1\u5E08\u786E\u8BA4\u65F6\u95F4</td><td${_scopeId}>DESIGNER_TIME</td><td${_scopeId}>DatePicker</td><td${_scopeId}>\u8BBE\u8BA1\u5E08\u4FDD\u8BC1\u4E66-\u786E\u8BA4\u65F6\u95F4</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>\u8BBE\u8BA1\u5E08\u786E\u8BA4\u65F6\u81EA\u52A8\u8BB0\u5F55</td></tr><tr${_scopeId}><td${_scopeId}>\u536B\u751F\u95F4\u5408\u683C(\u533A\u57DF\u7ECF\u7406)</td><td${_scopeId}>RESTROOM_B</td><td${_scopeId}>Switch</td><td${_scopeId}>\u533A\u57DF\u7ECF\u7406\u4FDD\u8BC1\u4E66-\u536B\u751F\u95F4\u5408\u683C</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>trueValue=2, falseValue=1</td></tr><tr${_scopeId}><td${_scopeId}>\u6742\u7269\u95F4\u5408\u683C(\u533A\u57DF\u7ECF\u7406)</td><td${_scopeId}>HOVEL_B</td><td${_scopeId}>Switch</td><td${_scopeId}>\u533A\u57DF\u7ECF\u7406\u4FDD\u8BC1\u4E66-\u6742\u7269\u95F4\u5408\u683C</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>trueValue=2, falseValue=1</td></tr><tr${_scopeId}><td${_scopeId}>\u529E\u516C\u5BA4\u5408\u683C(\u533A\u57DF\u7ECF\u7406)</td><td${_scopeId}>OFFICE_B</td><td${_scopeId}>Switch</td><td${_scopeId}>\u533A\u57DF\u7ECF\u7406\u4FDD\u8BC1\u4E66-\u529E\u516C\u5BA4\u5408\u683C</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>trueValue=2, falseValue=1</td></tr><tr${_scopeId}><td${_scopeId}>\u5176\u4ED6\u533A\u57DF\u5408\u683C(\u533A\u57DF\u7ECF\u7406)</td><td${_scopeId}>OTHER_AREA_B</td><td${_scopeId}>Switch</td><td${_scopeId}>\u533A\u57DF\u7ECF\u7406\u4FDD\u8BC1\u4E66-\u5176\u4ED6\u533A\u57DF\u5408\u683C</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>trueValue=2, falseValue=1</td></tr><tr${_scopeId}><td${_scopeId}>\u533A\u57DF\u7ECF\u7406\u7B7E\u540D</td><td${_scopeId}>REGIONAL_MANAGER</td><td${_scopeId}>TextField</td><td${_scopeId}>\u533A\u57DF\u7ECF\u7406\u7B7E\u540D</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>\u533A\u57DF\u7ECF\u7406\u786E\u8BA4\u65F6\u7B7E\u540D</td></tr><tr${_scopeId}><td${_scopeId}>\u533A\u57DF\u7ECF\u7406\u786E\u8BA4\u65F6\u95F4</td><td${_scopeId}>REGIONAL_MANAGER_TIME</td><td${_scopeId}>DatePicker</td><td${_scopeId}>\u533A\u57DF\u7ECF\u7406\u786E\u8BA4\u65F6\u95F4</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>\u533A\u57DF\u7ECF\u7406\u786E\u8BA4\u65F6\u81EA\u52A8\u8BB0\u5F55</td></tr><tr${_scopeId}><td${_scopeId}>\u672A\u8BBE\u8BA1</td><td${_scopeId}>NOT_DESIGN</td><td${_scopeId}>Switch</td><td${_scopeId}>\u8F6F\u88C5\u8BBE\u8BA1\u5E08\u4FDD\u8BC1\u4E66-\u672A\u8BBE\u8BA1</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>trueValue=2, falseValue=1</td></tr><tr${_scopeId}><td${_scopeId}>\u4E0D\u5339\u914D</td><td${_scopeId}>NOT_MATCHED</td><td${_scopeId}>Switch</td><td${_scopeId}>\u8F6F\u88C5\u8BBE\u8BA1\u5E08\u4FDD\u8BC1\u4E66-\u4E0D\u5339\u914D</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>trueValue=2, falseValue=1</td></tr><tr${_scopeId}><td${_scopeId}>\u4E0D\u5408\u683C</td><td${_scopeId}>UNQUALIFIED</td><td${_scopeId}>Switch</td><td${_scopeId}>\u8F6F\u88C5\u8BBE\u8BA1\u5E08\u4FDD\u8BC1\u4E66-\u4E0D\u5408\u683C</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>trueValue=2, falseValue=1</td></tr><tr${_scopeId}><td${_scopeId}>\u5408\u683C</td><td${_scopeId}>QUALIFIED</td><td${_scopeId}>Switch</td><td${_scopeId}>\u8F6F\u88C5\u8BBE\u8BA1\u5E08\u4FDD\u8BC1\u4E66-\u5408\u683C</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>trueValue=2, falseValue=1</td></tr><tr${_scopeId}><td${_scopeId}>\u8F6F\u88C5\u8BBE\u8BA1\u5E08\u7B7E\u540D</td><td${_scopeId}>SOFT_DESIGNER_NAME</td><td${_scopeId}>TextField</td><td${_scopeId}>\u8F6F\u88C5\u8BBE\u8BA1\u5E08\u7B7E\u540D</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>\u8F6F\u88C5\u8BBE\u8BA1\u5E08\u786E\u8BA4\u65F6\u7B7E\u540D</td></tr><tr${_scopeId}><td${_scopeId}>\u8F6F\u88C5\u8BBE\u8BA1\u5E08\u786E\u8BA4\u65F6\u95F4</td><td${_scopeId}>SOFT_DESIGNER_TIME</td><td${_scopeId}>DatePicker</td><td${_scopeId}>\u8F6F\u88C5\u8BBE\u8BA1\u5E08\u786E\u8BA4\u65F6\u95F4</td><td${_scopeId}>\u59CB\u7EC8</td><td${_scopeId}>\u8F6F\u88C5\u8BBE\u8BA1\u5E08\u786E\u8BA4\u65F6\u81EA\u52A8\u8BB0\u5F55</td></tr></tbody></table>`);
      } else {
        return [
          createVNode("p", null, "\u672C\u9875\u9762\u5305\u542B\u591A\u4E2A\u5B50\u8868\u683CTab\uFF0C\u5728\u8BE6\u60C5\u9875\u4E2D\u4EE5Collapse\u9762\u677F\u6216Tabs\u5448\u73B0\u3002"),
          createVNode("h4", null, "\u88C5\u4FEE\u91D1\u989D\u4FE1\u606F\u8868"),
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
                createVNode("td", null, "\u53D1\u7968\u7A0E\u70B9"),
                createVNode("td", null, "INVOICE_TAX_RATE"),
                createVNode("td", null, "NumberField"),
                createVNode("td", null, "\u53D1\u7968\u7A0E\u70B9(%)"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "\u7528\u6237\u8F93\u5165\uFF0C0~13")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u53D1\u7968\u7C7B\u578B"),
                createVNode("td", null, "INVOICE_TYPE"),
                createVNode("td", null, "Select(AE.MKT.INVOICE_TYPE)"),
                createVNode("td", null, "\u53D1\u7968\u7C7B\u578B"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "\u7528\u6237\u9009\u62E9")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5F00\u7968\u5355\u4F4D"),
                createVNode("td", null, "ISSUING_OFFICE_CODE/ISSUING_OFFICE"),
                createVNode("td", null, "Lov(AE.SALE_TRADING_COMPANY_CUSTOMER)"),
                createVNode("td", null, "\u5F00\u7968\u5355\u4F4D"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "\u4ECELOV\u9009\u62E9\uFF0C\u5E26\u51FA\u7F16\u7801\u548C\u540D\u79F0")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u652F\u4ED8\u65B9\u5F0F"),
                createVNode("td", null, "PAY_TYPE"),
                createVNode("td", null, "Select(AE.PAY_TYPE)"),
                createVNode("td", null, "\u652F\u4ED8\u65B9\u5F0F"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "\u7528\u6237\u9009\u62E9\uFF0C\u9ED8\u8BA43(\u6298\u6263\u6298\u8BA9)")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u4F9B\u5E94\u5546\u7F16\u7801"),
                createVNode("td", null, "VENDOR_CODE"),
                createVNode("td", null, "Lov(AE.VENDOR_VIEW_VIEW)"),
                createVNode("td", null, "\u4F9B\u5E94\u5546\u7F16\u7801"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "\u4ECELOV\u9009\u62E9")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u4F9B\u5E94\u5546\u540D\u79F0"),
                createVNode("td", null, "VENDOR_NAME"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u4F9B\u5E94\u5546\u540D\u79F0"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "\u4ECELOV\u5E26\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u8054\u7CFB\u4EBA"),
                createVNode("td", null, "CONTACT"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u4F9B\u5E94\u5546\u8054\u7CFB\u4EBA"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "\u4ECELOV\u5E26\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u8054\u7CFB\u7535\u8BDD"),
                createVNode("td", null, "TELE"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u4F9B\u5E94\u5546\u7535\u8BDD"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "\u4ECELOV\u5E26\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u989D\u5EA6\u5916\u9A8C\u6536\u603B\u989D"),
                createVNode("td", null, "OUT_CHECK_AMT"),
                createVNode("td", null, "NumberField"),
                createVNode("td", null, "\u989D\u5EA6\u5916\u9A8C\u6536\u603B\u989D"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "\u7CFB\u7EDF\u8BA1\u7B97")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u672C\u65B9\u5F00\u7968"),
                createVNode("td", null, "OUR_INVOICING"),
                createVNode("td", null, "Select"),
                createVNode("td", null, "\u672C\u65B9\u5F00\u7968"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "\u7528\u6237\u9009\u62E9\uFF0CtrueValue=2(\u662F)\uFF0CfalseValue=1(\u5426)\uFF0C\u9ED8\u8BA42")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u4E09\u65B9\u534F\u8BAE"),
                createVNode("td", null, "TRIPAR_AGREE"),
                createVNode("td", null, "Select"),
                createVNode("td", null, "\u4E09\u65B9\u534F\u8BAE"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "\u7528\u6237\u9009\u62E9\uFF0CtrueValue=2(\u662F)\uFF0CfalseValue=1(\u5426)\uFF0C\u9ED8\u8BA41")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u9700\u91CD\u7B7E\u534F\u8BAE"),
                createVNode("td", null, "IS_RESIGN"),
                createVNode("td", null, "Select"),
                createVNode("td", null, "\u9700\u91CD\u7B7E\u534F\u8BAE"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "\u4ECE\u7533\u8BF7\u5355\u5E26\u5165")
              ])
            ])
          ]),
          createVNode("h4", null, "\u88C5\u4FEE\u6807\u51C6\u8868"),
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
                createVNode("td", null, "\u8865\u8D34\u6807\u51C6CODE"),
                createVNode("td", null, "-"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u8865\u8D34\u6807\u51C6\u7F16\u7801"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "\u4ECE\u88C5\u4FEE\u6807\u51C6\u63A5\u53E3\u5E26\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u8865\u8D34\u6807\u51C6\u540D\u79F0"),
                createVNode("td", null, "-"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u8865\u8D34\u6807\u51C6\u540D\u79F0"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "\u4ECE\u88C5\u4FEE\u6807\u51C6\u63A5\u53E3\u5E26\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6807\u51C6\u503C"),
                createVNode("td", null, "-"),
                createVNode("td", null, "NumberField"),
                createVNode("td", null, "\u6807\u51C6\u503C"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "\u4ECE\u88C5\u4FEE\u6807\u51C6\u63A5\u53E3\u5E26\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6807\u51C6\u952E"),
                createVNode("td", null, "-"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u6807\u51C6\u952E"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "\u4ECE\u88C5\u4FEE\u6807\u51C6\u63A5\u53E3\u5E26\u5165")
              ])
            ])
          ]),
          createVNode("h4", null, "\u8D44\u6E90\u9884\u7B97\u4FE1\u606F\u8868"),
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
                createVNode("td", null, "\u8D44\u6E90\u9884\u7B97\u7F16\u7801"),
                createVNode("td", null, "-"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u8D44\u6E90\u9884\u7B97\u7F16\u7801"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "\u7CFB\u7EDF\u5E26\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u8D44\u6E90\u9884\u7B97\u540D\u79F0"),
                createVNode("td", null, "-"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u8D44\u6E90\u9884\u7B97\u540D\u79F0"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "\u7CFB\u7EDF\u5E26\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u8D44\u6E90\u9884\u7B97\u91D1\u989D"),
                createVNode("td", null, "-"),
                createVNode("td", null, "NumberField"),
                createVNode("td", null, "\u8D44\u6E90\u9884\u7B97\u91D1\u989D"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "\u7CFB\u7EDF\u5E26\u51FA")
              ])
            ])
          ]),
          createVNode("h4", null, "\u5E97\u9762\u9A8C\u6536\u8D28\u91CF\u4FE1\u606F\u8868"),
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
                createVNode("td", null, "\u9A8C\u6536\u9879\u76EE"),
                createVNode("td", null, "-"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u9A8C\u6536\u9879\u76EE\u540D\u79F0"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "\u7CFB\u7EDF\u5E26\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u9879\u76EE\u7C7B\u578B"),
                createVNode("td", null, "-"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u9A8C\u6536\u9879\u76EE\u7C7B\u578B"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "\u7CFB\u7EDF\u5E26\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5B9E\u9645\u60C5\u51B5"),
                createVNode("td", null, "-"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u5B9E\u9645\u60C5\u51B5"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "\u7528\u6237\u8F93\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u9A8C\u6536\u7ED3\u679C"),
                createVNode("td", null, "-"),
                createVNode("td", null, "Select"),
                createVNode("td", null, "\u9A8C\u6536\u7ED3\u679C(\u5408\u683C/\u4E0D\u5408\u683C)"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "\u7528\u6237\u9009\u62E9")
              ])
            ])
          ]),
          createVNode("h4", null, "\u95E8\u5934\u9A8C\u6536\u8D28\u91CF\u4FE1\u606F\u8868"),
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
                createVNode("td", null, "\u9A8C\u6536\u9879\u76EE"),
                createVNode("td", null, "-"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u95E8\u5934\u9A8C\u6536\u9879\u76EE\u540D\u79F0"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "\u7CFB\u7EDF\u5E26\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u9879\u76EE\u7C7B\u578B"),
                createVNode("td", null, "-"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u95E8\u5934\u9A8C\u6536\u9879\u76EE\u7C7B\u578B"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "\u7CFB\u7EDF\u5E26\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5B9E\u9645\u60C5\u51B5"),
                createVNode("td", null, "-"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u5B9E\u9645\u60C5\u51B5"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "\u7528\u6237\u8F93\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u9A8C\u6536\u7ED3\u679C"),
                createVNode("td", null, "-"),
                createVNode("td", null, "Select"),
                createVNode("td", null, "\u9A8C\u6536\u7ED3\u679C(\u5408\u683C/\u4E0D\u5408\u683C)"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "\u7528\u6237\u9009\u62E9")
              ])
            ])
          ]),
          createVNode("h4", null, "\u6263\u5206\u6BD4\u4F8B\u8868\uFF08\u7528\u4E8E\u7F5A\u91D1\u8BA1\u7B97\uFF09"),
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
                createVNode("td", null, "\u6263\u9664\u9879\u76EE"),
                createVNode("td", null, "-"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u6263\u5206\u9879\u76EE\u540D\u79F0"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "\u7CFB\u7EDF\u5E26\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6263\u9664\u6BD4\u4F8B(%)"),
                createVNode("td", null, "-"),
                createVNode("td", null, "NumberField"),
                createVNode("td", null, "\u6263\u9664\u6BD4\u4F8B"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "\u7CFB\u7EDF\u8BA1\u7B97\u6216\u7528\u6237\u8F93\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u9A8C\u6536\u6BD4\u4F8B(%)"),
                createVNode("td", null, "-"),
                createVNode("td", null, "NumberField"),
                createVNode("td", null, "\u9A8C\u6536\u6BD4\u4F8B"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "\u7CFB\u7EDF\u8BA1\u7B97")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5151\u73B0\u6BD4\u4F8B(%)"),
                createVNode("td", null, "-"),
                createVNode("td", null, "NumberField"),
                createVNode("td", null, "\u5151\u73B0\u6BD4\u4F8B"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "\u7CFB\u7EDF\u8BA1\u7B97\uFF0C0~100%")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6263\u51CF\u91D1\u989D"),
                createVNode("td", null, "-"),
                createVNode("td", null, "NumberField"),
                createVNode("td", null, "\u6263\u51CF\u91D1\u989D"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "\u7CFB\u7EDF\u8BA1\u7B97")
              ])
            ])
          ]),
          createVNode("h4", null, "\u53D1\u7968\u4FE1\u606F\u8868"),
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
                createVNode("td", null, "\u53D1\u7968\u7C7B\u578B"),
                createVNode("td", null, "-"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u53D1\u7968\u7C7B\u578B"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "\u7CFB\u7EDF\u5E26\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u53D1\u7968\u53F7\u7801"),
                createVNode("td", null, "-"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u53D1\u7968\u53F7\u7801"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "\u7CFB\u7EDF\u5E26\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u53D1\u7968\u91D1\u989D"),
                createVNode("td", null, "-"),
                createVNode("td", null, "NumberField"),
                createVNode("td", null, "\u53D1\u7968\u91D1\u989D"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "\u7CFB\u7EDF\u5E26\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7A0E\u989D"),
                createVNode("td", null, "-"),
                createVNode("td", null, "NumberField"),
                createVNode("td", null, "\u7A0E\u989D"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "\u7CFB\u7EDF\u8BA1\u7B97")
              ])
            ])
          ]),
          createVNode("h4", null, "\u8D22\u52A1\u590D\u6838\u8868"),
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
                createVNode("td", null, "\u590D\u6838\u9879\u76EE"),
                createVNode("td", null, "-"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u590D\u6838\u9879\u76EE\u540D\u79F0"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "\u7CFB\u7EDF\u5E26\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u8865\u8D34\u6807\u51C6"),
                createVNode("td", null, "-"),
                createVNode("td", null, "NumberField"),
                createVNode("td", null, "\u8865\u8D34\u6807\u51C6"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "\u7CFB\u7EDF\u5E26\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u53EF\u62A5\u9500\u91D1\u989D(\u542B\u7A0E)"),
                createVNode("td", null, "-"),
                createVNode("td", null, "NumberField"),
                createVNode("td", null, "\u53EF\u62A5\u9500\u542B\u7A0E\u91D1\u989D"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "\u7CFB\u7EDF\u8BA1\u7B97")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u590D\u6838\u7ED3\u679C"),
                createVNode("td", null, "-"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u590D\u6838\u7ED3\u679C"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "\u7528\u6237\u8F93\u5165")
              ])
            ])
          ]),
          createVNode("h4", null, "\u8D22\u52A1\u590D\u6838\u7ED3\u679C\u8868"),
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
                createVNode("td", null, "\u590D\u6838\u6807\u51C6"),
                createVNode("td", null, "-"),
                createVNode("td", null, "NumberField"),
                createVNode("td", null, "\u590D\u6838\u6807\u51C6"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "\u7CFB\u7EDF\u5E26\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u590D\u6838\u9762\u79EF"),
                createVNode("td", null, "-"),
                createVNode("td", null, "NumberField"),
                createVNode("td", null, "\u590D\u6838\u9762\u79EF"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "\u7528\u6237\u8F93\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u590D\u6838\u91D1\u989D"),
                createVNode("td", null, "-"),
                createVNode("td", null, "NumberField"),
                createVNode("td", null, "\u590D\u6838\u91D1\u989D"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "\u7CFB\u7EDF\u8BA1\u7B97")
              ])
            ])
          ]),
          createVNode("h4", null, "\u95E8\u5E97\u88C5\u4FEE\u7167\u7247\u8868"),
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
                createVNode("td", null, "\u7167\u7247\u7C7B\u578B"),
                createVNode("td", null, "-"),
                createVNode("td", null, "Select"),
                createVNode("td", null, "\u7167\u7247\u7C7B\u578B(\u95E8\u5934/\u5E97\u5185/\u536B\u751F\u95F4\u7B49)"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "\u7528\u6237\u9009\u62E9")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7167\u7247"),
                createVNode("td", null, "-"),
                createVNode("td", null, "Upload"),
                createVNode("td", null, "\u88C5\u4FEE\u7167\u7247\u4E0A\u4F20"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "\u652F\u6301\u4E0A\u4F20/\u9884\u89C8/\u4E0B\u8F7D")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u4E0A\u4F20\u65F6\u95F4"),
                createVNode("td", null, "-"),
                createVNode("td", null, "DatePicker"),
                createVNode("td", null, "\u4E0A\u4F20\u65F6\u95F4"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "\u7CFB\u7EDF\u81EA\u52A8\u8BB0\u5F55")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5907\u6CE8"),
                createVNode("td", null, "-"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u7167\u7247\u8BF4\u660E"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "\u7528\u6237\u8F93\u5165")
              ])
            ])
          ]),
          createVNode("h4", null, "\u4FDD\u8BC1\u4E66\u4FE1\u606F"),
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
                createVNode("td", null, "\u536B\u751F\u95F4\u5408\u683C"),
                createVNode("td", null, "RESTROOM_A"),
                createVNode("td", null, "Switch"),
                createVNode("td", null, "\u8BBE\u8BA1\u5E08\u4FDD\u8BC1\u4E66-\u536B\u751F\u95F4\u5408\u683C"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "trueValue=2, falseValue=1")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6742\u7269\u95F4\u5408\u683C"),
                createVNode("td", null, "HOVEL_A"),
                createVNode("td", null, "Switch"),
                createVNode("td", null, "\u8BBE\u8BA1\u5E08\u4FDD\u8BC1\u4E66-\u6742\u7269\u95F4\u5408\u683C"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "trueValue=2, falseValue=1")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u529E\u516C\u5BA4\u5408\u683C"),
                createVNode("td", null, "OFFICE_A"),
                createVNode("td", null, "Switch"),
                createVNode("td", null, "\u8BBE\u8BA1\u5E08\u4FDD\u8BC1\u4E66-\u529E\u516C\u5BA4\u5408\u683C"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "trueValue=2, falseValue=1")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5176\u4ED6\u533A\u57DF\u5408\u683C"),
                createVNode("td", null, "OTHER_AREA_A"),
                createVNode("td", null, "Switch"),
                createVNode("td", null, "\u8BBE\u8BA1\u5E08\u4FDD\u8BC1\u4E66-\u5176\u4ED6\u533A\u57DF\u5408\u683C"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "trueValue=2, falseValue=1")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u8BBE\u8BA1\u5E08\u7B7E\u540D"),
                createVNode("td", null, "DESIGNER_NAME"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u8BBE\u8BA1\u5E08\u4FDD\u8BC1\u4E66-\u8BBE\u8BA1\u5E08\u59D3\u540D"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "\u8BBE\u8BA1\u5E08\u786E\u8BA4\u65F6\u7B7E\u540D")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u8BBE\u8BA1\u5E08\u786E\u8BA4\u65F6\u95F4"),
                createVNode("td", null, "DESIGNER_TIME"),
                createVNode("td", null, "DatePicker"),
                createVNode("td", null, "\u8BBE\u8BA1\u5E08\u4FDD\u8BC1\u4E66-\u786E\u8BA4\u65F6\u95F4"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "\u8BBE\u8BA1\u5E08\u786E\u8BA4\u65F6\u81EA\u52A8\u8BB0\u5F55")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u536B\u751F\u95F4\u5408\u683C(\u533A\u57DF\u7ECF\u7406)"),
                createVNode("td", null, "RESTROOM_B"),
                createVNode("td", null, "Switch"),
                createVNode("td", null, "\u533A\u57DF\u7ECF\u7406\u4FDD\u8BC1\u4E66-\u536B\u751F\u95F4\u5408\u683C"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "trueValue=2, falseValue=1")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6742\u7269\u95F4\u5408\u683C(\u533A\u57DF\u7ECF\u7406)"),
                createVNode("td", null, "HOVEL_B"),
                createVNode("td", null, "Switch"),
                createVNode("td", null, "\u533A\u57DF\u7ECF\u7406\u4FDD\u8BC1\u4E66-\u6742\u7269\u95F4\u5408\u683C"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "trueValue=2, falseValue=1")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u529E\u516C\u5BA4\u5408\u683C(\u533A\u57DF\u7ECF\u7406)"),
                createVNode("td", null, "OFFICE_B"),
                createVNode("td", null, "Switch"),
                createVNode("td", null, "\u533A\u57DF\u7ECF\u7406\u4FDD\u8BC1\u4E66-\u529E\u516C\u5BA4\u5408\u683C"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "trueValue=2, falseValue=1")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5176\u4ED6\u533A\u57DF\u5408\u683C(\u533A\u57DF\u7ECF\u7406)"),
                createVNode("td", null, "OTHER_AREA_B"),
                createVNode("td", null, "Switch"),
                createVNode("td", null, "\u533A\u57DF\u7ECF\u7406\u4FDD\u8BC1\u4E66-\u5176\u4ED6\u533A\u57DF\u5408\u683C"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "trueValue=2, falseValue=1")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u533A\u57DF\u7ECF\u7406\u7B7E\u540D"),
                createVNode("td", null, "REGIONAL_MANAGER"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u533A\u57DF\u7ECF\u7406\u7B7E\u540D"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "\u533A\u57DF\u7ECF\u7406\u786E\u8BA4\u65F6\u7B7E\u540D")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u533A\u57DF\u7ECF\u7406\u786E\u8BA4\u65F6\u95F4"),
                createVNode("td", null, "REGIONAL_MANAGER_TIME"),
                createVNode("td", null, "DatePicker"),
                createVNode("td", null, "\u533A\u57DF\u7ECF\u7406\u786E\u8BA4\u65F6\u95F4"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "\u533A\u57DF\u7ECF\u7406\u786E\u8BA4\u65F6\u81EA\u52A8\u8BB0\u5F55")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u672A\u8BBE\u8BA1"),
                createVNode("td", null, "NOT_DESIGN"),
                createVNode("td", null, "Switch"),
                createVNode("td", null, "\u8F6F\u88C5\u8BBE\u8BA1\u5E08\u4FDD\u8BC1\u4E66-\u672A\u8BBE\u8BA1"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "trueValue=2, falseValue=1")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u4E0D\u5339\u914D"),
                createVNode("td", null, "NOT_MATCHED"),
                createVNode("td", null, "Switch"),
                createVNode("td", null, "\u8F6F\u88C5\u8BBE\u8BA1\u5E08\u4FDD\u8BC1\u4E66-\u4E0D\u5339\u914D"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "trueValue=2, falseValue=1")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u4E0D\u5408\u683C"),
                createVNode("td", null, "UNQUALIFIED"),
                createVNode("td", null, "Switch"),
                createVNode("td", null, "\u8F6F\u88C5\u8BBE\u8BA1\u5E08\u4FDD\u8BC1\u4E66-\u4E0D\u5408\u683C"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "trueValue=2, falseValue=1")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5408\u683C"),
                createVNode("td", null, "QUALIFIED"),
                createVNode("td", null, "Switch"),
                createVNode("td", null, "\u8F6F\u88C5\u8BBE\u8BA1\u5E08\u4FDD\u8BC1\u4E66-\u5408\u683C"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "trueValue=2, falseValue=1")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u8F6F\u88C5\u8BBE\u8BA1\u5E08\u7B7E\u540D"),
                createVNode("td", null, "SOFT_DESIGNER_NAME"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u8F6F\u88C5\u8BBE\u8BA1\u5E08\u7B7E\u540D"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "\u8F6F\u88C5\u8BBE\u8BA1\u5E08\u786E\u8BA4\u65F6\u7B7E\u540D")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u8F6F\u88C5\u8BBE\u8BA1\u5E08\u786E\u8BA4\u65F6\u95F4"),
                createVNode("td", null, "SOFT_DESIGNER_TIME"),
                createVNode("td", null, "DatePicker"),
                createVNode("td", null, "\u8F6F\u88C5\u8BBE\u8BA1\u5E08\u786E\u8BA4\u65F6\u95F4"),
                createVNode("td", null, "\u59CB\u7EC8"),
                createVNode("td", null, "\u8F6F\u88C5\u8BBE\u8BA1\u5E08\u786E\u8BA4\u65F6\u81EA\u52A8\u8BB0\u5F55")
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, { title: "\u5217\u8868\u9875\u67E5\u8BE2\u5B57\u6BB5" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5B57\u6BB5\u540D</th><th${_scopeId}>\u6570\u636E\u5E93\u5217\u540D</th><th${_scopeId}>\u7EC4\u4EF6</th><th${_scopeId}>\u4E1A\u52A1\u91CA\u4E49</th><th${_scopeId}>\u663E\u9690\u6761\u4EF6</th><th${_scopeId}>\u53D6\u503C/\u8D4B\u503C\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u5355\u636E\u72B6\u6001</td><td${_scopeId}>HZ_APPROVE_STATUS</td><td${_scopeId}>Select(HWKF.APPROVE_STATUS)</td><td${_scopeId}>\u5BA1\u6838\u72B6\u6001\u67E5\u8BE2</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u503C\u96C6\u67E5\u8BE2</td></tr><tr${_scopeId}><td${_scopeId}>\u9A8C\u6536\u62A5\u9500\u5355\u53F7</td><td${_scopeId}>CHECK_BX_CODE</td><td${_scopeId}>TextField</td><td${_scopeId}>\u5355\u53F7\u6A21\u7CCA\u67E5\u8BE2</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u7528\u6237\u8F93\u5165</td></tr><tr${_scopeId}><td${_scopeId}>\u88C5\u4FEE\u7533\u8BF7\u5355\u53F7</td><td${_scopeId}>TERMINAL_APPLY_NO</td><td${_scopeId}>TextField</td><td${_scopeId}>\u88C5\u4FEE\u7533\u8BF7\u5355\u53F7\u67E5\u8BE2</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u7528\u6237\u8F93\u5165</td></tr><tr${_scopeId}><td${_scopeId}>\u7ECF\u9500\u5546\u7F16\u7801</td><td${_scopeId}>CUST_CODE</td><td${_scopeId}>TextField</td><td${_scopeId}>\u7ECF\u9500\u5546\u7F16\u7801\u67E5\u8BE2</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u7528\u6237\u8F93\u5165</td></tr><tr${_scopeId}><td${_scopeId}>\u7ECF\u9500\u5546\u540D\u79F0</td><td${_scopeId}>CUST_NAME</td><td${_scopeId}>TextField</td><td${_scopeId}>\u7ECF\u9500\u5546\u540D\u79F0\u67E5\u8BE2</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u7528\u6237\u8F93\u5165</td></tr><tr${_scopeId}><td${_scopeId}>\u7ECF\u9500\u5546\u7B80\u79F0</td><td${_scopeId}>SHORT_NAME</td><td${_scopeId}>TextField</td><td${_scopeId}>\u7ECF\u9500\u5546\u7B80\u79F0\u67E5\u8BE2</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u7528\u6237\u8F93\u5165</td></tr><tr${_scopeId}><td${_scopeId}>\u7ECF\u8425\u5C5E\u6027</td><td${_scopeId}>CUSTOMER_CLASS</td><td${_scopeId}>Select(AE.CUSTOMER_CLASS)</td><td${_scopeId}>\u7ECF\u8425\u5C5E\u6027\u67E5\u8BE2</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u503C\u96C6\u67E5\u8BE2</td></tr><tr${_scopeId}><td${_scopeId}>\u4EA4\u6613\u516C\u53F8</td><td${_scopeId}>TRADING_COMPANY_NAME</td><td${_scopeId}>TextField</td><td${_scopeId}>\u4EA4\u6613\u516C\u53F8\u67E5\u8BE2</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u7528\u6237\u8F93\u5165</td></tr><tr${_scopeId}><td${_scopeId}>\u6CD5\u4EBA\u5BA2\u6237\u7F16\u7801</td><td${_scopeId}>BILLING_UNIT_CODE</td><td${_scopeId}>TextField</td><td${_scopeId}>\u6CD5\u4EBA\u7F16\u7801\u67E5\u8BE2</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u7528\u6237\u8F93\u5165</td></tr><tr${_scopeId}><td${_scopeId}>\u9500\u552E\u533A\u57DF</td><td${_scopeId}>SALEZONE_ORG_NAME</td><td${_scopeId}>TextField</td><td${_scopeId}>\u9500\u552E\u533A\u57DF\u67E5\u8BE2</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u7528\u6237\u8F93\u5165</td></tr><tr${_scopeId}><td${_scopeId}>\u8FD0\u8425\u4E2D\u5FC3</td><td${_scopeId}>OPERAT_CENTER_ORG_NAME</td><td${_scopeId}>TextField</td><td${_scopeId}>\u8FD0\u8425\u4E2D\u5FC3\u67E5\u8BE2</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u7528\u6237\u8F93\u5165</td></tr><tr${_scopeId}><td${_scopeId}>\u6210\u672C\u4E2D\u5FC3\u7F16\u7801</td><td${_scopeId}>COST_CENTER_CODE</td><td${_scopeId}>TextField</td><td${_scopeId}>\u6210\u672C\u4E2D\u5FC3\u7F16\u7801\u67E5\u8BE2</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u7528\u6237\u8F93\u5165</td></tr><tr${_scopeId}><td${_scopeId}>\u6210\u672C\u4E2D\u5FC3\u540D\u79F0</td><td${_scopeId}>COST_CENTER_NAME</td><td${_scopeId}>TextField</td><td${_scopeId}>\u6210\u672C\u4E2D\u5FC3\u540D\u79F0\u67E5\u8BE2</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u7528\u6237\u8F93\u5165</td></tr><tr${_scopeId}><td${_scopeId}>\u8D39\u7528\u9879\u76EE\u7F16\u7801</td><td${_scopeId}>OBJECT_CODE</td><td${_scopeId}>TextField</td><td${_scopeId}>\u9879\u76EE\u7F16\u7801\u67E5\u8BE2</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u7528\u6237\u8F93\u5165</td></tr><tr${_scopeId}><td${_scopeId}>\u8D39\u7528\u9879\u76EE\u540D\u79F0</td><td${_scopeId}>OBJECT_NAME</td><td${_scopeId}>TextField</td><td${_scopeId}>\u9879\u76EE\u540D\u79F0\u67E5\u8BE2</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u7528\u6237\u8F93\u5165</td></tr><tr${_scopeId}><td${_scopeId}>\u95E8\u5E97\u7F16\u7801</td><td${_scopeId}>TERMINAL_CODE</td><td${_scopeId}>TextField</td><td${_scopeId}>\u95E8\u5E97\u7F16\u7801\u67E5\u8BE2</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u7528\u6237\u8F93\u5165</td></tr><tr${_scopeId}><td${_scopeId}>\u95E8\u5E97\u540D\u79F0</td><td${_scopeId}>TERMINAL_NAME</td><td${_scopeId}>TextField</td><td${_scopeId}>\u95E8\u5E97\u540D\u79F0\u67E5\u8BE2</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u7528\u6237\u8F93\u5165</td></tr></tbody></table>`);
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
                createVNode("td", null, "\u5355\u636E\u72B6\u6001"),
                createVNode("td", null, "HZ_APPROVE_STATUS"),
                createVNode("td", null, "Select(HWKF.APPROVE_STATUS)"),
                createVNode("td", null, "\u5BA1\u6838\u72B6\u6001\u67E5\u8BE2"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u503C\u96C6\u67E5\u8BE2")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u9A8C\u6536\u62A5\u9500\u5355\u53F7"),
                createVNode("td", null, "CHECK_BX_CODE"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u5355\u53F7\u6A21\u7CCA\u67E5\u8BE2"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u7528\u6237\u8F93\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u88C5\u4FEE\u7533\u8BF7\u5355\u53F7"),
                createVNode("td", null, "TERMINAL_APPLY_NO"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u88C5\u4FEE\u7533\u8BF7\u5355\u53F7\u67E5\u8BE2"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u7528\u6237\u8F93\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7ECF\u9500\u5546\u7F16\u7801"),
                createVNode("td", null, "CUST_CODE"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u7ECF\u9500\u5546\u7F16\u7801\u67E5\u8BE2"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u7528\u6237\u8F93\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7ECF\u9500\u5546\u540D\u79F0"),
                createVNode("td", null, "CUST_NAME"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u7ECF\u9500\u5546\u540D\u79F0\u67E5\u8BE2"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u7528\u6237\u8F93\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7ECF\u9500\u5546\u7B80\u79F0"),
                createVNode("td", null, "SHORT_NAME"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u7ECF\u9500\u5546\u7B80\u79F0\u67E5\u8BE2"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u7528\u6237\u8F93\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7ECF\u8425\u5C5E\u6027"),
                createVNode("td", null, "CUSTOMER_CLASS"),
                createVNode("td", null, "Select(AE.CUSTOMER_CLASS)"),
                createVNode("td", null, "\u7ECF\u8425\u5C5E\u6027\u67E5\u8BE2"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u503C\u96C6\u67E5\u8BE2")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u4EA4\u6613\u516C\u53F8"),
                createVNode("td", null, "TRADING_COMPANY_NAME"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u4EA4\u6613\u516C\u53F8\u67E5\u8BE2"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u7528\u6237\u8F93\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6CD5\u4EBA\u5BA2\u6237\u7F16\u7801"),
                createVNode("td", null, "BILLING_UNIT_CODE"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u6CD5\u4EBA\u7F16\u7801\u67E5\u8BE2"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u7528\u6237\u8F93\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u9500\u552E\u533A\u57DF"),
                createVNode("td", null, "SALEZONE_ORG_NAME"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u9500\u552E\u533A\u57DF\u67E5\u8BE2"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u7528\u6237\u8F93\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u8FD0\u8425\u4E2D\u5FC3"),
                createVNode("td", null, "OPERAT_CENTER_ORG_NAME"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u8FD0\u8425\u4E2D\u5FC3\u67E5\u8BE2"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u7528\u6237\u8F93\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6210\u672C\u4E2D\u5FC3\u7F16\u7801"),
                createVNode("td", null, "COST_CENTER_CODE"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u6210\u672C\u4E2D\u5FC3\u7F16\u7801\u67E5\u8BE2"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u7528\u6237\u8F93\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6210\u672C\u4E2D\u5FC3\u540D\u79F0"),
                createVNode("td", null, "COST_CENTER_NAME"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u6210\u672C\u4E2D\u5FC3\u540D\u79F0\u67E5\u8BE2"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u7528\u6237\u8F93\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u8D39\u7528\u9879\u76EE\u7F16\u7801"),
                createVNode("td", null, "OBJECT_CODE"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u9879\u76EE\u7F16\u7801\u67E5\u8BE2"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u7528\u6237\u8F93\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u8D39\u7528\u9879\u76EE\u540D\u79F0"),
                createVNode("td", null, "OBJECT_NAME"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u9879\u76EE\u540D\u79F0\u67E5\u8BE2"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u7528\u6237\u8F93\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u95E8\u5E97\u7F16\u7801"),
                createVNode("td", null, "TERMINAL_CODE"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u95E8\u5E97\u7F16\u7801\u67E5\u8BE2"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u7528\u6237\u8F93\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u95E8\u5E97\u540D\u79F0"),
                createVNode("td", null, "TERMINAL_NAME"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u95E8\u5E97\u540D\u79F0\u67E5\u8BE2"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u7528\u6237\u8F93\u5165")
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, { title: "\u5217\u8868\u9875\u5C55\u793A\u5B57\u6BB5" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5B57\u6BB5\u540D</th><th${_scopeId}>\u6570\u636E\u5E93\u5217\u540D</th><th${_scopeId}>\u7EC4\u4EF6</th><th${_scopeId}>\u4E1A\u52A1\u91CA\u4E49</th><th${_scopeId}>\u663E\u9690\u6761\u4EF6</th><th${_scopeId}>\u53D6\u503C/\u8D4B\u503C\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u5355\u636E\u72B6\u6001</td><td${_scopeId}>HZ_APPROVE_STATUS</td><td${_scopeId}>Select(HWKF.APPROVE_STATUS)</td><td${_scopeId}>\u5BA1\u6279\u72B6\u6001</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u7CFB\u7EDF\u7EF4\u62A4</td></tr><tr${_scopeId}><td${_scopeId}>\u5BA1\u6838\u72B6\u6001</td><td${_scopeId}>AUDIT_STAT</td><td${_scopeId}>TextField</td><td${_scopeId}>OA\u5BA1\u6838\u72B6\u6001</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u7CFB\u7EDF\u7EF4\u62A4</td></tr><tr${_scopeId}><td${_scopeId}>\u6D41\u7A0B\u8282\u70B9</td><td${_scopeId}>TASK_NAME</td><td${_scopeId}>TextField</td><td${_scopeId}>\u5F53\u524D\u5BA1\u6279\u4EFB\u52A1\u540D\u79F0</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u5DE5\u4F5C\u6D41\u5E26\u5165</td></tr><tr${_scopeId}><td${_scopeId}>\u7535\u5B50\u7B7E\u7AE0\u72B6\u6001</td><td${_scopeId}>SIGNATURE_STATE</td><td${_scopeId}>Select(AE.SIGNATURE_STATE)</td><td${_scopeId}>\u7535\u5B50\u7B7E\u7AE0\u72B6\u6001</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u7CFB\u7EDF\u7EF4\u62A4</td></tr><tr${_scopeId}><td${_scopeId}>\u4E8B\u4E1A\u90E8</td><td${_scopeId}>DIVISION_NAME</td><td${_scopeId}>TextField</td><td${_scopeId}>\u4E8B\u4E1A\u90E8\u540D\u79F0</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u4ECE\u7533\u8BF7\u5355\u5E26\u5165</td></tr><tr${_scopeId}><td${_scopeId}>\u9A8C\u6536\u62A5\u9500\u5355\u53F7</td><td${_scopeId}>CHECK_BX_CODE</td><td${_scopeId}>TextField</td><td${_scopeId}>\u9A8C\u6536\u62A5\u9500\u5355\u53F7</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u7F16\u7801\u89C4\u5219\u751F\u6210</td></tr><tr${_scopeId}><td${_scopeId}>\u88C5\u4FEE\u7533\u8BF7\u5355\u53F7</td><td${_scopeId}>TERMINAL_APPLY_NO</td><td${_scopeId}>TextField</td><td${_scopeId}>\u88C5\u4FEE\u7533\u8BF7\u5355\u53F7</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u4ECE\u7533\u8BF7\u5355\u5E26\u5165</td></tr><tr${_scopeId}><td${_scopeId}>\u7ECF\u9500\u5546\u7F16\u7801</td><td${_scopeId}>CUST_CODE</td><td${_scopeId}>TextField</td><td${_scopeId}>\u7ECF\u9500\u5546\u7F16\u7801</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u4ECE\u7533\u8BF7\u5355\u5E26\u5165</td></tr><tr${_scopeId}><td${_scopeId}>\u7ECF\u9500\u5546\u540D\u79F0</td><td${_scopeId}>CUST_NAME</td><td${_scopeId}>TextField</td><td${_scopeId}>\u7ECF\u9500\u5546\u540D\u79F0</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u4ECE\u7533\u8BF7\u5355\u5E26\u5165</td></tr><tr${_scopeId}><td${_scopeId}>\u7ECF\u9500\u5546\u7B80\u79F0</td><td${_scopeId}>SHORT_NAME</td><td${_scopeId}>TextField</td><td${_scopeId}>\u7ECF\u9500\u5546\u7B80\u79F0</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u4ECE\u7533\u8BF7\u5355\u5E26\u5165</td></tr><tr${_scopeId}><td${_scopeId}>\u7ECF\u8425\u5C5E\u6027</td><td${_scopeId}>CUSTOMER_CLASS</td><td${_scopeId}>Select(AE.CUSTOMER_CLASS)</td><td${_scopeId}>\u7ECF\u8425\u5C5E\u6027</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u4ECE\u7533\u8BF7\u5355\u5E26\u5165</td></tr><tr${_scopeId}><td${_scopeId}>\u4EA4\u6613\u516C\u53F8</td><td${_scopeId}>TRADING_COMPANY_NAME</td><td${_scopeId}>TextField</td><td${_scopeId}>\u4EA4\u6613\u516C\u53F8\u540D\u79F0</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u4ECE\u7533\u8BF7\u5355\u5E26\u5165</td></tr><tr${_scopeId}><td${_scopeId}>\u6CD5\u4EBA\u5BA2\u6237\u7F16\u7801</td><td${_scopeId}>BILLING_UNIT_CODE</td><td${_scopeId}>TextField</td><td${_scopeId}>\u6CD5\u4EBA\u5BA2\u6237\u7F16\u7801</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u4ECE\u7533\u8BF7\u5355\u5E26\u5165</td></tr><tr${_scopeId}><td${_scopeId}>\u6CD5\u4EBA\u5BA2\u6237\u540D\u79F0</td><td${_scopeId}>BILLING_UNIT_NAME</td><td${_scopeId}>TextField</td><td${_scopeId}>\u6CD5\u4EBA\u5BA2\u6237\u540D\u79F0</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u4ECE\u7533\u8BF7\u5355\u5E26\u5165</td></tr><tr${_scopeId}><td${_scopeId}>\u9500\u552E\u533A\u57DF</td><td${_scopeId}>SALEZONE_ORG_NAME</td><td${_scopeId}>TextField</td><td${_scopeId}>\u9500\u552E\u533A\u57DF\u540D\u79F0</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u4ECE\u7533\u8BF7\u5355\u5E26\u5165</td></tr><tr${_scopeId}><td${_scopeId}>\u8FD0\u8425\u4E2D\u5FC3</td><td${_scopeId}>OPERAT_CENTER_ORG_NAME</td><td${_scopeId}>TextField</td><td${_scopeId}>\u8FD0\u8425\u4E2D\u5FC3\u540D\u79F0</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u4ECE\u7533\u8BF7\u5355\u5E26\u5165</td></tr><tr${_scopeId}><td${_scopeId}>\u6210\u672C\u4E2D\u5FC3\u7F16\u7801</td><td${_scopeId}>COST_CENTER_CODE</td><td${_scopeId}>TextField</td><td${_scopeId}>\u6210\u672C\u4E2D\u5FC3\u7F16\u7801</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u4ECE\u7533\u8BF7\u5355\u5E26\u5165</td></tr><tr${_scopeId}><td${_scopeId}>\u6210\u672C\u4E2D\u5FC3\u540D\u79F0</td><td${_scopeId}>COST_CENTER_NAME</td><td${_scopeId}>TextField</td><td${_scopeId}>\u6210\u672C\u4E2D\u5FC3\u540D\u79F0</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u4ECE\u7533\u8BF7\u5355\u5E26\u5165</td></tr><tr${_scopeId}><td${_scopeId}>\u8D39\u7528\u9879\u76EE\u7F16\u7801</td><td${_scopeId}>OBJECT_CODE</td><td${_scopeId}>TextField</td><td${_scopeId}>\u9879\u76EE\u7F16\u7801</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u4ECE\u7533\u8BF7\u5355\u5E26\u5165</td></tr><tr${_scopeId}><td${_scopeId}>\u8D39\u7528\u9879\u76EE\u540D\u79F0</td><td${_scopeId}>OBJECT_NAME</td><td${_scopeId}>TextField</td><td${_scopeId}>\u9879\u76EE\u540D\u79F0</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u4ECE\u7533\u8BF7\u5355\u5E26\u5165</td></tr><tr${_scopeId}><td${_scopeId}>\u95E8\u5E97\u7F16\u7801</td><td${_scopeId}>TERMINAL_CODE</td><td${_scopeId}>TextField</td><td${_scopeId}>\u95E8\u5E97\u7F16\u7801</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u4ECE\u7533\u8BF7\u5355\u5E26\u5165</td></tr><tr${_scopeId}><td${_scopeId}>\u95E8\u5E97\u540D\u79F0</td><td${_scopeId}>TERMINAL_NAME</td><td${_scopeId}>TextField</td><td${_scopeId}>\u95E8\u5E97\u540D\u79F0</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u4ECE\u7533\u8BF7\u5355\u5E26\u5165</td></tr><tr${_scopeId}><td${_scopeId}>\u521B\u5EFA\u4EBA</td><td${_scopeId}>CREATED_BY_NAME</td><td${_scopeId}>TextField</td><td${_scopeId}>\u521B\u5EFA\u4EBA</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u5F53\u524D\u7528\u6237</td></tr><tr${_scopeId}><td${_scopeId}>\u521B\u5EFA\u65F6\u95F4</td><td${_scopeId}>CREATION_DATE</td><td${_scopeId}>TextField</td><td${_scopeId}>\u521B\u5EFA\u65F6\u95F4</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u5F53\u524D\u65F6\u95F4</td></tr></tbody></table>`);
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
                createVNode("td", null, "\u5355\u636E\u72B6\u6001"),
                createVNode("td", null, "HZ_APPROVE_STATUS"),
                createVNode("td", null, "Select(HWKF.APPROVE_STATUS)"),
                createVNode("td", null, "\u5BA1\u6279\u72B6\u6001"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u7CFB\u7EDF\u7EF4\u62A4")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5BA1\u6838\u72B6\u6001"),
                createVNode("td", null, "AUDIT_STAT"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "OA\u5BA1\u6838\u72B6\u6001"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u7CFB\u7EDF\u7EF4\u62A4")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6D41\u7A0B\u8282\u70B9"),
                createVNode("td", null, "TASK_NAME"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u5F53\u524D\u5BA1\u6279\u4EFB\u52A1\u540D\u79F0"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u5DE5\u4F5C\u6D41\u5E26\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7535\u5B50\u7B7E\u7AE0\u72B6\u6001"),
                createVNode("td", null, "SIGNATURE_STATE"),
                createVNode("td", null, "Select(AE.SIGNATURE_STATE)"),
                createVNode("td", null, "\u7535\u5B50\u7B7E\u7AE0\u72B6\u6001"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u7CFB\u7EDF\u7EF4\u62A4")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u4E8B\u4E1A\u90E8"),
                createVNode("td", null, "DIVISION_NAME"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u4E8B\u4E1A\u90E8\u540D\u79F0"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u4ECE\u7533\u8BF7\u5355\u5E26\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u9A8C\u6536\u62A5\u9500\u5355\u53F7"),
                createVNode("td", null, "CHECK_BX_CODE"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u9A8C\u6536\u62A5\u9500\u5355\u53F7"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u7F16\u7801\u89C4\u5219\u751F\u6210")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u88C5\u4FEE\u7533\u8BF7\u5355\u53F7"),
                createVNode("td", null, "TERMINAL_APPLY_NO"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u88C5\u4FEE\u7533\u8BF7\u5355\u53F7"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u4ECE\u7533\u8BF7\u5355\u5E26\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7ECF\u9500\u5546\u7F16\u7801"),
                createVNode("td", null, "CUST_CODE"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u7ECF\u9500\u5546\u7F16\u7801"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u4ECE\u7533\u8BF7\u5355\u5E26\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7ECF\u9500\u5546\u540D\u79F0"),
                createVNode("td", null, "CUST_NAME"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u7ECF\u9500\u5546\u540D\u79F0"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u4ECE\u7533\u8BF7\u5355\u5E26\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7ECF\u9500\u5546\u7B80\u79F0"),
                createVNode("td", null, "SHORT_NAME"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u7ECF\u9500\u5546\u7B80\u79F0"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u4ECE\u7533\u8BF7\u5355\u5E26\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7ECF\u8425\u5C5E\u6027"),
                createVNode("td", null, "CUSTOMER_CLASS"),
                createVNode("td", null, "Select(AE.CUSTOMER_CLASS)"),
                createVNode("td", null, "\u7ECF\u8425\u5C5E\u6027"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u4ECE\u7533\u8BF7\u5355\u5E26\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u4EA4\u6613\u516C\u53F8"),
                createVNode("td", null, "TRADING_COMPANY_NAME"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u4EA4\u6613\u516C\u53F8\u540D\u79F0"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u4ECE\u7533\u8BF7\u5355\u5E26\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6CD5\u4EBA\u5BA2\u6237\u7F16\u7801"),
                createVNode("td", null, "BILLING_UNIT_CODE"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u6CD5\u4EBA\u5BA2\u6237\u7F16\u7801"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u4ECE\u7533\u8BF7\u5355\u5E26\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6CD5\u4EBA\u5BA2\u6237\u540D\u79F0"),
                createVNode("td", null, "BILLING_UNIT_NAME"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u6CD5\u4EBA\u5BA2\u6237\u540D\u79F0"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u4ECE\u7533\u8BF7\u5355\u5E26\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u9500\u552E\u533A\u57DF"),
                createVNode("td", null, "SALEZONE_ORG_NAME"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u9500\u552E\u533A\u57DF\u540D\u79F0"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u4ECE\u7533\u8BF7\u5355\u5E26\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u8FD0\u8425\u4E2D\u5FC3"),
                createVNode("td", null, "OPERAT_CENTER_ORG_NAME"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u8FD0\u8425\u4E2D\u5FC3\u540D\u79F0"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u4ECE\u7533\u8BF7\u5355\u5E26\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6210\u672C\u4E2D\u5FC3\u7F16\u7801"),
                createVNode("td", null, "COST_CENTER_CODE"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u6210\u672C\u4E2D\u5FC3\u7F16\u7801"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u4ECE\u7533\u8BF7\u5355\u5E26\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6210\u672C\u4E2D\u5FC3\u540D\u79F0"),
                createVNode("td", null, "COST_CENTER_NAME"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u6210\u672C\u4E2D\u5FC3\u540D\u79F0"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u4ECE\u7533\u8BF7\u5355\u5E26\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u8D39\u7528\u9879\u76EE\u7F16\u7801"),
                createVNode("td", null, "OBJECT_CODE"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u9879\u76EE\u7F16\u7801"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u4ECE\u7533\u8BF7\u5355\u5E26\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u8D39\u7528\u9879\u76EE\u540D\u79F0"),
                createVNode("td", null, "OBJECT_NAME"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u9879\u76EE\u540D\u79F0"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u4ECE\u7533\u8BF7\u5355\u5E26\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u95E8\u5E97\u7F16\u7801"),
                createVNode("td", null, "TERMINAL_CODE"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u95E8\u5E97\u7F16\u7801"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u4ECE\u7533\u8BF7\u5355\u5E26\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u95E8\u5E97\u540D\u79F0"),
                createVNode("td", null, "TERMINAL_NAME"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u95E8\u5E97\u540D\u79F0"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u4ECE\u7533\u8BF7\u5355\u5E26\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u521B\u5EFA\u4EBA"),
                createVNode("td", null, "CREATED_BY_NAME"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u521B\u5EFA\u4EBA"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u5F53\u524D\u7528\u6237")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u521B\u5EFA\u65F6\u95F4"),
                createVNode("td", null, "CREATION_DATE"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u521B\u5EFA\u65F6\u95F4"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u5F53\u524D\u65F6\u95F4")
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
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u63A5\u53E3</th><th${_scopeId}>\u65B9\u6CD5</th><th${_scopeId}>\u8DEF\u5F84</th><th${_scopeId}>\u8BF4\u660E</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u5217\u8868\u67E5\u8BE2</td><td${_scopeId}>GET</td><td${_scopeId}>\`/v1/{organizationId}/fin-fee-check-bx-headers/search\`</td><td${_scopeId}>\u67E5\u8BE2\u9A8C\u6536\u62A5\u9500\u5217\u8868</td></tr><tr${_scopeId}><td${_scopeId}>\u4FDD\u5B58</td><td${_scopeId}>POST</td><td${_scopeId}>\`/v1/{organizationId}/fin-fee-check-bx-headers/save\`</td><td${_scopeId}>\u65B0\u589E\u9A8C\u6536\u62A5\u9500</td></tr><tr${_scopeId}><td${_scopeId}>\u66F4\u65B0</td><td${_scopeId}>POST</td><td${_scopeId}>\`/v1/{organizationId}/fin-fee-check-bx-headers/update\`</td><td${_scopeId}>\u66F4\u65B0\u9A8C\u6536\u62A5\u9500</td></tr><tr${_scopeId}><td${_scopeId}>\u8BE6\u60C5\u67E5\u8BE2</td><td${_scopeId}>GET</td><td${_scopeId}>\`/v1/{organizationId}/fin-fee-check-bx-headers/detail/{checkBxId}\`</td><td${_scopeId}>\u67E5\u8BE2\u9A8C\u6536\u62A5\u9500\u8BE6\u60C5</td></tr><tr${_scopeId}><td${_scopeId}>\u6253\u5370</td><td${_scopeId}>GET</td><td${_scopeId}>\`/v1/{organizationId}/fin-fee-check-bx-headers/detail/print\`</td><td${_scopeId}>\u83B7\u53D6\u6253\u5370\u6570\u636E</td></tr><tr${_scopeId}><td${_scopeId}>\u989D\u5EA6\u5185\u5151\u73B0\u8BE6\u60C5</td><td${_scopeId}>GET</td><td${_scopeId}>\`/v1/{organizationId}/fin-fee-check-bx-headers/do-select\`</td><td${_scopeId}>\u989D\u5EA6\u5185\u5151\u73B0\u65B0\u589E-\u8BE6\u60C5</td></tr><tr${_scopeId}><td${_scopeId}>\u4F5C\u5E9F</td><td${_scopeId}>POST</td><td${_scopeId}>\`/v1/{organizationId}/fin-fee-check-bx-headers/cancel\`</td><td${_scopeId}>\u4F5C\u5E9F\u9A8C\u6536\u62A5\u9500</td></tr><tr${_scopeId}><td${_scopeId}>\u5220\u9664</td><td${_scopeId}>DELETE</td><td${_scopeId}>\`/v1/{organizationId}/fin-fee-check-bx-headers/do-delete\`</td><td${_scopeId}>\u5220\u9664\u9A8C\u6536\u62A5\u9500</td></tr><tr${_scopeId}><td${_scopeId}>\u67E5\u8BE2CRM\u8F6F\u88C5\u706F\u5177</td><td${_scopeId}>GET</td><td${_scopeId}>\`/v1/{organizationId}/fin-fee-check-bx-headers/select-crm-soft-order\`</td><td${_scopeId}>\u67E5\u8BE2\u53EF\u7ED1\u5B9A\u7684CRM\u8F6F\u88C5\u706F\u5177\u8BA2\u5355</td></tr><tr${_scopeId}><td${_scopeId}>\u7ED1\u5B9A\u8F6F\u88C5\u8BA2\u5355</td><td${_scopeId}>POST</td><td${_scopeId}>\`/v1/{organizationId}/fin-fee-check-bx-headers/confirm-crm-soft-order\`</td><td${_scopeId}>\u7ED1\u5B9ACRM\u8F6F\u88C5\u706F\u5177\u8BA2\u5355</td></tr><tr${_scopeId}><td${_scopeId}>\u67E5\u8BE2\u5DF2\u7ED1\u5B9A\u8BA2\u5355</td><td${_scopeId}>GET</td><td${_scopeId}>\`/v1/{organizationId}/fin-fee-check-bx-headers/query-bind-crm-soft-order\`</td><td${_scopeId}>\u67E5\u8BE2\u5DF2\u7ED1\u5B9A\u7684\u8F6F\u88C5\u8BA2\u5355</td></tr><tr${_scopeId}><td${_scopeId}>\u53D6\u6D88\u7ED1\u5B9A</td><td${_scopeId}>POST</td><td${_scopeId}>\`/v1/{organizationId}/fin-fee-check-bx-headers/unbind-soft-order\`</td><td${_scopeId}>\u53D6\u6D88\u7ED1\u5B9A\u8F6F\u88C5\u8BA2\u5355</td></tr><tr${_scopeId}><td${_scopeId}>\u67E5\u8BE2\u88C5\u4FEE\u6807\u51C6</td><td${_scopeId}>POST</td><td${_scopeId}>\`/v1/{organizationId}/fin-fee-check-bx-headers/doSearchDecorate\`</td><td${_scopeId}>\u67E5\u8BE2\u88C5\u4FEE\u6807\u51C6</td></tr><tr${_scopeId}><td${_scopeId}>\u67E5\u8BE2\u88C5\u4FEE\u6807\u51C6(\u65B0)</td><td${_scopeId}>POST</td><td${_scopeId}>\`/v1/{organizationId}/fin-fee-check-bx-headers/do-search-decorate\`</td><td${_scopeId}>\u67E5\u8BE2\u88C5\u4FEE\u6807\u51C6</td></tr><tr${_scopeId}><td${_scopeId}>\u67E5\u8BE2\u91C7\u8D2D\u6E05\u5355\u91D1\u989D</td><td${_scopeId}>POST</td><td${_scopeId}>\`/v1/{organizationId}/fin-fee-check-bx-headers/get-inv-order-amt\`</td><td${_scopeId}>\u67E5\u8BE2\u91C7\u8D2D\u6E05\u5355\u53CA\u91D1\u989D</td></tr><tr${_scopeId}><td${_scopeId}>\u83B7\u53D6\u8D28\u91CF\u4FE1\u606F</td><td${_scopeId}>POST</td><td${_scopeId}>\`/v1/{organizationId}/fin-fee-check-bx-headers/get-acceptance-info\`</td><td${_scopeId}>\u83B7\u53D6\u8D28\u91CF\u4FE1\u606F\u8BBE\u7F6E</td></tr><tr${_scopeId}><td${_scopeId}>\u653F\u7B56\u6027\u8865\u8D34\u67E5\u8BE2</td><td${_scopeId}>GET</td><td${_scopeId}>\`/v1/{organizationId}/fin-fee-check-bx-headers/get-lov-search\`</td><td${_scopeId}>\u653F\u7B56\u6027\u8865\u8D34search</td></tr></tbody></table>`);
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
                createVNode("td", null, "`/v1/{organizationId}/fin-fee-check-bx-headers/search`"),
                createVNode("td", null, "\u67E5\u8BE2\u9A8C\u6536\u62A5\u9500\u5217\u8868")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u4FDD\u5B58"),
                createVNode("td", null, "POST"),
                createVNode("td", null, "`/v1/{organizationId}/fin-fee-check-bx-headers/save`"),
                createVNode("td", null, "\u65B0\u589E\u9A8C\u6536\u62A5\u9500")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u66F4\u65B0"),
                createVNode("td", null, "POST"),
                createVNode("td", null, "`/v1/{organizationId}/fin-fee-check-bx-headers/update`"),
                createVNode("td", null, "\u66F4\u65B0\u9A8C\u6536\u62A5\u9500")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u8BE6\u60C5\u67E5\u8BE2"),
                createVNode("td", null, "GET"),
                createVNode("td", null, "`/v1/{organizationId}/fin-fee-check-bx-headers/detail/{checkBxId}`"),
                createVNode("td", null, "\u67E5\u8BE2\u9A8C\u6536\u62A5\u9500\u8BE6\u60C5")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6253\u5370"),
                createVNode("td", null, "GET"),
                createVNode("td", null, "`/v1/{organizationId}/fin-fee-check-bx-headers/detail/print`"),
                createVNode("td", null, "\u83B7\u53D6\u6253\u5370\u6570\u636E")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u989D\u5EA6\u5185\u5151\u73B0\u8BE6\u60C5"),
                createVNode("td", null, "GET"),
                createVNode("td", null, "`/v1/{organizationId}/fin-fee-check-bx-headers/do-select`"),
                createVNode("td", null, "\u989D\u5EA6\u5185\u5151\u73B0\u65B0\u589E-\u8BE6\u60C5")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u4F5C\u5E9F"),
                createVNode("td", null, "POST"),
                createVNode("td", null, "`/v1/{organizationId}/fin-fee-check-bx-headers/cancel`"),
                createVNode("td", null, "\u4F5C\u5E9F\u9A8C\u6536\u62A5\u9500")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5220\u9664"),
                createVNode("td", null, "DELETE"),
                createVNode("td", null, "`/v1/{organizationId}/fin-fee-check-bx-headers/do-delete`"),
                createVNode("td", null, "\u5220\u9664\u9A8C\u6536\u62A5\u9500")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u67E5\u8BE2CRM\u8F6F\u88C5\u706F\u5177"),
                createVNode("td", null, "GET"),
                createVNode("td", null, "`/v1/{organizationId}/fin-fee-check-bx-headers/select-crm-soft-order`"),
                createVNode("td", null, "\u67E5\u8BE2\u53EF\u7ED1\u5B9A\u7684CRM\u8F6F\u88C5\u706F\u5177\u8BA2\u5355")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7ED1\u5B9A\u8F6F\u88C5\u8BA2\u5355"),
                createVNode("td", null, "POST"),
                createVNode("td", null, "`/v1/{organizationId}/fin-fee-check-bx-headers/confirm-crm-soft-order`"),
                createVNode("td", null, "\u7ED1\u5B9ACRM\u8F6F\u88C5\u706F\u5177\u8BA2\u5355")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u67E5\u8BE2\u5DF2\u7ED1\u5B9A\u8BA2\u5355"),
                createVNode("td", null, "GET"),
                createVNode("td", null, "`/v1/{organizationId}/fin-fee-check-bx-headers/query-bind-crm-soft-order`"),
                createVNode("td", null, "\u67E5\u8BE2\u5DF2\u7ED1\u5B9A\u7684\u8F6F\u88C5\u8BA2\u5355")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u53D6\u6D88\u7ED1\u5B9A"),
                createVNode("td", null, "POST"),
                createVNode("td", null, "`/v1/{organizationId}/fin-fee-check-bx-headers/unbind-soft-order`"),
                createVNode("td", null, "\u53D6\u6D88\u7ED1\u5B9A\u8F6F\u88C5\u8BA2\u5355")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u67E5\u8BE2\u88C5\u4FEE\u6807\u51C6"),
                createVNode("td", null, "POST"),
                createVNode("td", null, "`/v1/{organizationId}/fin-fee-check-bx-headers/doSearchDecorate`"),
                createVNode("td", null, "\u67E5\u8BE2\u88C5\u4FEE\u6807\u51C6")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u67E5\u8BE2\u88C5\u4FEE\u6807\u51C6(\u65B0)"),
                createVNode("td", null, "POST"),
                createVNode("td", null, "`/v1/{organizationId}/fin-fee-check-bx-headers/do-search-decorate`"),
                createVNode("td", null, "\u67E5\u8BE2\u88C5\u4FEE\u6807\u51C6")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u67E5\u8BE2\u91C7\u8D2D\u6E05\u5355\u91D1\u989D"),
                createVNode("td", null, "POST"),
                createVNode("td", null, "`/v1/{organizationId}/fin-fee-check-bx-headers/get-inv-order-amt`"),
                createVNode("td", null, "\u67E5\u8BE2\u91C7\u8D2D\u6E05\u5355\u53CA\u91D1\u989D")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u83B7\u53D6\u8D28\u91CF\u4FE1\u606F"),
                createVNode("td", null, "POST"),
                createVNode("td", null, "`/v1/{organizationId}/fin-fee-check-bx-headers/get-acceptance-info`"),
                createVNode("td", null, "\u83B7\u53D6\u8D28\u91CF\u4FE1\u606F\u8BBE\u7F6E")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u653F\u7B56\u6027\u8865\u8D34\u67E5\u8BE2"),
                createVNode("td", null, "GET"),
                createVNode("td", null, "`/v1/{organizationId}/fin-fee-check-bx-headers/get-lov-search`"),
                createVNode("td", null, "\u653F\u7B56\u6027\u8865\u8D34search")
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
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5F39\u7A97\u540D\u79F0</th><th${_scopeId}>LOV\u7F16\u7801</th><th${_scopeId}>\u53C2\u6570</th><th${_scopeId}>\u8BF4\u660E</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u88C5\u4FEE\u7533\u8BF7\u5355\u53F7</td><td${_scopeId}>\`AE.STORE_FINFEEAPPLYCLOSE_DATA_CHANGE_VIEW\`</td><td${_scopeId}>organizationId</td><td${_scopeId}>\u9009\u62E9\u5DF2\u5BA1\u6279(APPROVED)\u7684\u88C5\u4FEE\u7533\u8BF7\u5355\uFF0C\u8054\u52A8\u5E26\u51FA\u95E8\u5E97/\u7ECF\u9500\u5546/\u88C5\u4FEE\u4FE1\u606F</td></tr><tr${_scopeId}><td${_scopeId}>CRM\u8F6F\u88C5\u706F\u5177\u8BA2\u5355</td><td${_scopeId}>-</td><td${_scopeId}>terminalApplyNo</td><td${_scopeId}>\u67E5\u8BE2\u53EF\u7ED1\u5B9A\u7684CRM\u8F6F\u88C5\u706F\u5177\u91C7\u8D2D\u8BA2\u5355</td></tr></tbody></table>`);
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
                createVNode("td", null, "\u88C5\u4FEE\u7533\u8BF7\u5355\u53F7"),
                createVNode("td", null, "`AE.STORE_FINFEEAPPLYCLOSE_DATA_CHANGE_VIEW`"),
                createVNode("td", null, "organizationId"),
                createVNode("td", null, "\u9009\u62E9\u5DF2\u5BA1\u6279(APPROVED)\u7684\u88C5\u4FEE\u7533\u8BF7\u5355\uFF0C\u8054\u52A8\u5E26\u51FA\u95E8\u5E97/\u7ECF\u9500\u5546/\u88C5\u4FEE\u4FE1\u606F")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "CRM\u8F6F\u88C5\u706F\u5177\u8BA2\u5355"),
                createVNode("td", null, "-"),
                createVNode("td", null, "terminalApplyNo"),
                createVNode("td", null, "\u67E5\u8BE2\u53EF\u7ED1\u5B9A\u7684CRM\u8F6F\u88C5\u706F\u5177\u91C7\u8D2D\u8BA2\u5355")
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
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u6309\u94AE\u540D\u79F0</th><th${_scopeId}>\u89E6\u53D1\u6761\u4EF6</th><th${_scopeId}>\u6267\u884C\u903B\u8F91</th><th${_scopeId}>\u63A5\u53E3\u8C03\u7528</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u4F5C\u5E9F</td><td${_scopeId}>HZ_APPROVE_STATUS\u4E3ANEW\u6216REJECTED</td><td${_scopeId}>\u5F39\u7A97\u786E\u8BA4\u2192\u6807\u8BB0INTERRUPT</td><td${_scopeId}>POST /cancel</td></tr><tr${_scopeId}><td${_scopeId}>\u5220\u9664</td><td${_scopeId}>HZ_APPROVE_STATUS\u4E3ANEW</td><td${_scopeId}>\u5F39\u7A97\u786E\u8BA4\u2192\u5220\u9664</td><td${_scopeId}>DELETE /do-delete</td></tr><tr${_scopeId}><td${_scopeId}>\u6253\u5370</td><td${_scopeId}>\u4EFB\u610F\u72B6\u6001</td><td${_scopeId}>\u83B7\u53D6\u6253\u5370\u6570\u636E\u2192\u6253\u5370</td><td${_scopeId}>GET /detail/print</td></tr><tr${_scopeId}><td${_scopeId}>\u7ED1\u5B9A\u8F6F\u88C5\u8BA2\u5355</td><td${_scopeId}>\u7F16\u8F91\u6A21\u5F0F</td><td${_scopeId}>\u67E5\u8BE2\u53EF\u7ED1\u5B9A\u8BA2\u5355\u2192\u9009\u62E9\u2192\u786E\u8BA4\u7ED1\u5B9A</td><td${_scopeId}>GET /select-crm-soft-order \u2192 POST /confirm-crm-soft-order</td></tr><tr${_scopeId}><td${_scopeId}>\u53D6\u6D88\u7ED1\u5B9A\u8F6F\u88C5\u8BA2\u5355</td><td${_scopeId}>\u5DF2\u7ED1\u5B9A\u8BA2\u5355</td><td${_scopeId}>\u9009\u62E9\u5DF2\u7ED1\u5B9A\u8BA2\u5355\u2192\u53D6\u6D88\u7ED1\u5B9A</td><td${_scopeId}>POST /unbind-soft-order</td></tr></tbody></table>`);
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
                createVNode("td", null, "\u4F5C\u5E9F"),
                createVNode("td", null, "HZ_APPROVE_STATUS\u4E3ANEW\u6216REJECTED"),
                createVNode("td", null, "\u5F39\u7A97\u786E\u8BA4\u2192\u6807\u8BB0INTERRUPT"),
                createVNode("td", null, "POST /cancel")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5220\u9664"),
                createVNode("td", null, "HZ_APPROVE_STATUS\u4E3ANEW"),
                createVNode("td", null, "\u5F39\u7A97\u786E\u8BA4\u2192\u5220\u9664"),
                createVNode("td", null, "DELETE /do-delete")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6253\u5370"),
                createVNode("td", null, "\u4EFB\u610F\u72B6\u6001"),
                createVNode("td", null, "\u83B7\u53D6\u6253\u5370\u6570\u636E\u2192\u6253\u5370"),
                createVNode("td", null, "GET /detail/print")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7ED1\u5B9A\u8F6F\u88C5\u8BA2\u5355"),
                createVNode("td", null, "\u7F16\u8F91\u6A21\u5F0F"),
                createVNode("td", null, "\u67E5\u8BE2\u53EF\u7ED1\u5B9A\u8BA2\u5355\u2192\u9009\u62E9\u2192\u786E\u8BA4\u7ED1\u5B9A"),
                createVNode("td", null, "GET /select-crm-soft-order \u2192 POST /confirm-crm-soft-order")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u53D6\u6D88\u7ED1\u5B9A\u8F6F\u88C5\u8BA2\u5355"),
                createVNode("td", null, "\u5DF2\u7ED1\u5B9A\u8BA2\u5355"),
                createVNode("td", null, "\u9009\u62E9\u5DF2\u7ED1\u5B9A\u8BA2\u5355\u2192\u53D6\u6D88\u7ED1\u5B9A"),
                createVNode("td", null, "POST /unbind-soft-order")
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
        _push2(`<ul${_scopeId}><li${_scopeId}>\u6821\u9A8C1\uFF1A\u88C5\u4FEE\u7533\u8BF7\u5355\u5FC5\u586B \u2014\u2014 \u786E\u4FDD\u5173\u8054\u6709\u6548\u7684\u88C5\u4FEE\u7533\u8BF7</li><li${_scopeId}><strong${_scopeId}>\u8BE6\u7EC6\u903B\u8F91</strong>\uFF1A\u524D\u7AEF\u5FC5\u586B\u6821\u9A8C</li><li${_scopeId}><strong${_scopeId}>\u7CFB\u7EDF\u4F53\u73B0</strong>\uFF1AC7N\u5185\u7F6E\u6821\u9A8C</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A<code${_scopeId}>SELECT CHECK_BX_ID FROM FIN_FEE_CHECK_BX_HEADER WHERE TERMINAL_APPLY_ID IS NULL</code></li></ul><ul${_scopeId}><li${_scopeId}>\u6821\u9A8C2\uFF1A\u9A8C\u6536\u6570\u636E\u5B8C\u6574\u6027 \u2014\u2014 \u786E\u4FDD\u9A8C\u6536\u9762\u79EF/\u91D1\u989D\u7B49\u5173\u952E\u5B57\u6BB5\u5B8C\u6574</li><li${_scopeId}><strong${_scopeId}>\u8BE6\u7EC6\u903B\u8F91</strong>\uFF1A\u540E\u7AEF\u6821\u9A8C\u5173\u952E\u5B57\u6BB5\u975E\u7A7A</li><li${_scopeId}><strong${_scopeId}>\u7CFB\u7EDF\u4F53\u73B0</strong>\uFF1A\u540E\u7AEF\u629B\u5F02\u5E38</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A<code${_scopeId}>SELECT CHECK_BX_ID FROM FIN_FEE_CHECK_BX_HEADER WHERE THIS_TERMINAL_AREA IS NULL</code></li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, "\u6821\u9A8C1\uFF1A\u88C5\u4FEE\u7533\u8BF7\u5355\u5FC5\u586B \u2014\u2014 \u786E\u4FDD\u5173\u8054\u6709\u6548\u7684\u88C5\u4FEE\u7533\u8BF7"),
            createVNode("li", null, [
              createVNode("strong", null, "\u8BE6\u7EC6\u903B\u8F91"),
              createTextVNode("\uFF1A\u524D\u7AEF\u5FC5\u586B\u6821\u9A8C")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u7CFB\u7EDF\u4F53\u73B0"),
              createTextVNode("\uFF1AC7N\u5185\u7F6E\u6821\u9A8C")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u6392\u67E5SQL"),
              createTextVNode("\uFF1A"),
              createVNode("code", null, "SELECT CHECK_BX_ID FROM FIN_FEE_CHECK_BX_HEADER WHERE TERMINAL_APPLY_ID IS NULL")
            ])
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u6821\u9A8C2\uFF1A\u9A8C\u6536\u6570\u636E\u5B8C\u6574\u6027 \u2014\u2014 \u786E\u4FDD\u9A8C\u6536\u9762\u79EF/\u91D1\u989D\u7B49\u5173\u952E\u5B57\u6BB5\u5B8C\u6574"),
            createVNode("li", null, [
              createVNode("strong", null, "\u8BE6\u7EC6\u903B\u8F91"),
              createTextVNode("\uFF1A\u540E\u7AEF\u6821\u9A8C\u5173\u952E\u5B57\u6BB5\u975E\u7A7A")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u7CFB\u7EDF\u4F53\u73B0"),
              createTextVNode("\uFF1A\u540E\u7AEF\u629B\u5F02\u5E38")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u6392\u67E5SQL"),
              createTextVNode("\uFF1A"),
              createVNode("code", null, "SELECT CHECK_BX_ID FROM FIN_FEE_CHECK_BX_HEADER WHERE THIS_TERMINAL_AREA IS NULL")
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
        _push2(`<ul${_scopeId}><li${_scopeId}>\u6821\u9A8C1\uFF1A\u88C5\u4FEE\u7533\u8BF7\u5355\u5DF2\u5BA1\u6279 \u2014\u2014 \u786E\u4FDD\u5173\u8054\u7684\u88C5\u4FEE\u7533\u8BF7\u5355\u72B6\u6001\u4E3AAPPROVED</li><li${_scopeId}><strong${_scopeId}>\u8BE6\u7EC6\u903B\u8F91</strong>\uFF1A\u63D0\u4EA4\u65F6\u6821\u9A8C\u539F\u7533\u8BF7\u5355hzApproveStatus=APPROVED</li><li${_scopeId}><strong${_scopeId}>\u7CFB\u7EDF\u4F53\u73B0</strong>\uFF1A\u540E\u7AEF\u6821\u9A8C</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A<code${_scopeId}>SELECT * FROM FIN_FEE_APPLY_FINISHED_HEADER WHERE TERMINAL_APPLY_ID={id} AND HZ_APPROVE_STATUS!=&#39;APPROVED&#39;</code></li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, "\u6821\u9A8C1\uFF1A\u88C5\u4FEE\u7533\u8BF7\u5355\u5DF2\u5BA1\u6279 \u2014\u2014 \u786E\u4FDD\u5173\u8054\u7684\u88C5\u4FEE\u7533\u8BF7\u5355\u72B6\u6001\u4E3AAPPROVED"),
            createVNode("li", null, [
              createVNode("strong", null, "\u8BE6\u7EC6\u903B\u8F91"),
              createTextVNode("\uFF1A\u63D0\u4EA4\u65F6\u6821\u9A8C\u539F\u7533\u8BF7\u5355hzApproveStatus=APPROVED")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u7CFB\u7EDF\u4F53\u73B0"),
              createTextVNode("\uFF1A\u540E\u7AEF\u6821\u9A8C")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u6392\u67E5SQL"),
              createTextVNode("\uFF1A"),
              createVNode("code", null, "SELECT * FROM FIN_FEE_APPLY_FINISHED_HEADER WHERE TERMINAL_APPLY_ID={id} AND HZ_APPROVE_STATUS!='APPROVED'")
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
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>                                       \u2502              \u251C\u2500 \u751F\u6210\u989D\u5EA6\u5185/\u5916\u5151\u73B0\u8BB0\u5F55</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>                                       \u2502              \u251C\u2500 \u56DE\u5199\u88C5\u4FEE\u7533\u8BF7\u5355</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>                                       \u2502              \u2514\u2500 \u540C\u6B65\u8D44\u91D1\u6C60</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>                                       \u2502</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>                                       \u251C\u2500\u2500\u5BA1\u6279\u9A73\u56DE\u2500\u2500\u2192 REJECTED(\u5DF2\u9A73\u56DE)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>                                       \u2502</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>                                       \u2514\u2500\u2500\u9000\u56DE\u2500\u2500\u2192 REBUT(\u5DF2\u9000\u56DE)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}></span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>NEW/REJECTED \u2500\u2500\u4F5C\u5E9F\u2500\u2500\u2192 INTERRUPT(\u5DF2\u4F5C\u5E9F)</span></span>
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "                                       \u2502              \u251C\u2500 \u751F\u6210\u989D\u5EA6\u5185/\u5916\u5151\u73B0\u8BB0\u5F55")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "                                       \u2502              \u251C\u2500 \u56DE\u5199\u88C5\u4FEE\u7533\u8BF7\u5355")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "                                       \u2502              \u2514\u2500 \u540C\u6B65\u8D44\u91D1\u6C60")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "                                       \u2502")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "                                       \u251C\u2500\u2500\u5BA1\u6279\u9A73\u56DE\u2500\u2500\u2192 REJECTED(\u5DF2\u9A73\u56DE)")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "                                       \u2502")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "                                       \u2514\u2500\u2500\u9000\u56DE\u2500\u2500\u2192 REBUT(\u5DF2\u9000\u56DE)")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } })
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "NEW/REJECTED \u2500\u2500\u4F5C\u5E9F\u2500\u2500\u2192 INTERRUPT(\u5DF2\u4F5C\u5E9F)")
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
        _push2(`<ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u5DE5\u4F5C\u6D41\u7F16\u7801</strong>\uFF1A<code${_scopeId}>SUB_STORE_MDYSYBXD</code>\uFF08\u95E8\u5E97\u9A8C\u6536\u4E0E\u62A5\u9500\u5355\uFF09</li><li${_scopeId}><strong${_scopeId}>\u7F16\u7801\u89C4\u5219</strong>\uFF1A\u9A8C\u6536\u62A5\u9500\u5355\u53F7\u7531\u7CFB\u7EDF\u751F\u6210</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u5DE5\u4F5C\u6D41\u7F16\u7801"),
              createTextVNode("\uFF1A"),
              createVNode("code", null, "SUB_STORE_MDYSYBXD"),
              createTextVNode("\uFF08\u95E8\u5E97\u9A8C\u6536\u4E0E\u62A5\u9500\u5355\uFF09")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u7F16\u7801\u89C4\u5219"),
              createTextVNode("\uFF1A\u9A8C\u6536\u62A5\u9500\u5355\u53F7\u7531\u7CFB\u7EDF\u751F\u6210")
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, { title: "FIN_FEE_CHECK_BX_HEADER\uFF08\u95E8\u5E97\u9A8C\u6536\u4E0E\u62A5\u9500\u5355\u8868\uFF09" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5B57\u6BB5\u540D</th><th${_scopeId}>\u7C7B\u578B</th><th${_scopeId}>\u91CA\u4E49</th><th${_scopeId}>\u5BF9\u5E94\u754C\u9762\u5B57\u6BB5</th><th${_scopeId}>\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>CHECK_BX_ID</td><td${_scopeId}>Long</td><td${_scopeId}>\u4E3B\u952EID</td><td${_scopeId}>-</td><td${_scopeId}>\u81EA\u589E</td></tr><tr${_scopeId}><td${_scopeId}>CHECK_BX_CODE</td><td${_scopeId}>String</td><td${_scopeId}>\u9A8C\u6536\u62A5\u9500\u5355\u53F7</td><td${_scopeId}>\u9A8C\u6536\u62A5\u9500\u5355\u53F7</td><td${_scopeId}>\u7F16\u7801\u89C4\u5219\u751F\u6210</td></tr><tr${_scopeId}><td${_scopeId}>TERMINAL_APPLY_ID</td><td${_scopeId}>Long</td><td${_scopeId}>\u88C5\u4FEE\u7533\u8BF7ID</td><td${_scopeId}>-</td><td${_scopeId}>\u7528\u6237\u9009\u62E9(LOV)</td></tr><tr${_scopeId}><td${_scopeId}>TERMINAL_APPLY_NO</td><td${_scopeId}>String</td><td${_scopeId}>\u88C5\u4FEE\u7533\u8BF7\u5355\u53F7</td><td${_scopeId}>\u88C5\u4FEE\u7533\u8BF7\u5355\u53F7</td><td${_scopeId}>\u9009\u62E9\u65F6\u5E26\u5165</td></tr><tr${_scopeId}><td${_scopeId}>TERMINAL_ID</td><td${_scopeId}>Long</td><td${_scopeId}>\u95E8\u5E97ID</td><td${_scopeId}>-</td><td${_scopeId}>\u4ECE\u7533\u8BF7\u5355\u5E26\u5165</td></tr><tr${_scopeId}><td${_scopeId}>TERMINAL_CODE</td><td${_scopeId}>String</td><td${_scopeId}>\u95E8\u5E97\u7F16\u7801</td><td${_scopeId}>\u95E8\u5E97\u7F16\u7801</td><td${_scopeId}>\u4ECE\u7533\u8BF7\u5355\u5E26\u5165</td></tr><tr${_scopeId}><td${_scopeId}>TERMINAL_NAME</td><td${_scopeId}>String</td><td${_scopeId}>\u95E8\u5E97\u540D\u79F0</td><td${_scopeId}>\u95E8\u5E97\u540D\u79F0</td><td${_scopeId}>\u4ECE\u7533\u8BF7\u5355\u5E26\u5165</td></tr><tr${_scopeId}><td${_scopeId}>CUST_ID</td><td${_scopeId}>Long</td><td${_scopeId}>\u7ECF\u9500\u5546ID</td><td${_scopeId}>-</td><td${_scopeId}>\u4ECE\u7533\u8BF7\u5355\u5E26\u5165</td></tr><tr${_scopeId}><td${_scopeId}>CUST_CODE</td><td${_scopeId}>String</td><td${_scopeId}>\u7ECF\u9500\u5546\u7F16\u7801</td><td${_scopeId}>-</td><td${_scopeId}>\u4ECE\u7533\u8BF7\u5355\u5E26\u5165</td></tr><tr${_scopeId}><td${_scopeId}>CUST_NAME</td><td${_scopeId}>String</td><td${_scopeId}>\u7ECF\u9500\u5546\u540D\u79F0</td><td${_scopeId}>\u7ECF\u9500\u5546\u540D\u79F0</td><td${_scopeId}>\u4ECE\u7533\u8BF7\u5355\u5E26\u5165</td></tr><tr${_scopeId}><td${_scopeId}>SHORT_NAME</td><td${_scopeId}>String</td><td${_scopeId}>\u7ECF\u9500\u5546\u7B80\u79F0</td><td${_scopeId}>\u7ECF\u9500\u5546\u7B80\u79F0</td><td${_scopeId}>\u4ECE\u7533\u8BF7\u5355\u5E26\u5165</td></tr><tr${_scopeId}><td${_scopeId}>TRADING_COMPANY_ID</td><td${_scopeId}>Long</td><td${_scopeId}>\u4EA4\u6613\u516C\u53F8ID</td><td${_scopeId}>-</td><td${_scopeId}>\u4ECE\u7533\u8BF7\u5355\u5E26\u5165</td></tr><tr${_scopeId}><td${_scopeId}>TRADING_COMPANY_CODE</td><td${_scopeId}>String</td><td${_scopeId}>\u4EA4\u6613\u516C\u53F8\u7F16\u7801</td><td${_scopeId}>-</td><td${_scopeId}>\u4ECE\u7533\u8BF7\u5355\u5E26\u5165</td></tr><tr${_scopeId}><td${_scopeId}>TRADING_COMPANY_NAME</td><td${_scopeId}>String</td><td${_scopeId}>\u4EA4\u6613\u516C\u53F8\u540D\u79F0</td><td${_scopeId}>\u4EA4\u6613\u516C\u53F8</td><td${_scopeId}>\u4ECE\u7533\u8BF7\u5355\u5E26\u5165</td></tr><tr${_scopeId}><td${_scopeId}>BILLING_UNIT_ID</td><td${_scopeId}>Long</td><td${_scopeId}>\u6CD5\u4EBA\u5BA2\u6237ID</td><td${_scopeId}>-</td><td${_scopeId}>\u4ECE\u7533\u8BF7\u5355\u5E26\u5165</td></tr><tr${_scopeId}><td${_scopeId}>BILLING_UNIT_CODE</td><td${_scopeId}>String</td><td${_scopeId}>\u6CD5\u4EBA\u5BA2\u6237\u7F16\u7801</td><td${_scopeId}>-</td><td${_scopeId}>\u4ECE\u7533\u8BF7\u5355\u5E26\u5165</td></tr><tr${_scopeId}><td${_scopeId}>BILLING_UNIT_NAME</td><td${_scopeId}>String</td><td${_scopeId}>\u6CD5\u4EBA\u5BA2\u6237\u540D\u79F0</td><td${_scopeId}>\u6CD5\u4EBA\u5BA2\u6237</td><td${_scopeId}>\u4ECE\u7533\u8BF7\u5355\u5E26\u5165</td></tr><tr${_scopeId}><td${_scopeId}>FIXUP_GRADE</td><td${_scopeId}>Long</td><td${_scopeId}>\u88C5\u4FEE\u7B49\u7EA7</td><td${_scopeId}>\u88C5\u4FEE\u7B49\u7EA7</td><td${_scopeId}>\u4ECE\u7533\u8BF7\u5355\u5E26\u5165</td></tr><tr${_scopeId}><td${_scopeId}>TERMINAL_AREA</td><td${_scopeId}>BigDecimal</td><td${_scopeId}>\u95E8\u5E97\u9762\u79EF</td><td${_scopeId}>\u95E8\u5E97\u9762\u79EF</td><td${_scopeId}>\u4ECE\u7533\u8BF7\u5355\u5E26\u5165</td></tr><tr${_scopeId}><td${_scopeId}>THIS_TERMINAL_AREA</td><td${_scopeId}>BigDecimal</td><td${_scopeId}>\u5B9E\u9645\u88C5\u4FEE\u9762\u79EF</td><td${_scopeId}>\u5B9E\u9645\u88C5\u4FEE\u9762\u79EF</td><td${_scopeId}>\u4ECE\u7533\u8BF7\u5355\u5E26\u5165</td></tr><tr${_scopeId}><td${_scopeId}>IN_BX_AMT</td><td${_scopeId}>BigDecimal</td><td${_scopeId}>\u989D\u5EA6\u5185\u62A5\u9500\u91D1\u989D</td><td${_scopeId}>\u989D\u5EA6\u5185\u62A5\u9500\u91D1\u989D</td><td${_scopeId}>\u7CFB\u7EDF\u8BA1\u7B97</td></tr><tr${_scopeId}><td${_scopeId}>OUT_BX_AMT</td><td${_scopeId}>BigDecimal</td><td${_scopeId}>\u989D\u5EA6\u5916\u62A5\u9500\u91D1\u989D</td><td${_scopeId}>\u989D\u5EA6\u5916\u62A5\u9500\u91D1\u989D</td><td${_scopeId}>\u7CFB\u7EDF\u8BA1\u7B97</td></tr><tr${_scopeId}><td${_scopeId}>CHECK_DATE</td><td${_scopeId}>LocalDate</td><td${_scopeId}>\u9A8C\u6536\u65E5\u671F</td><td${_scopeId}>\u9A8C\u6536\u65E5\u671F</td><td${_scopeId}>\u7528\u6237\u8F93\u5165</td></tr><tr${_scopeId}><td${_scopeId}>NOTE</td><td${_scopeId}>String</td><td${_scopeId}>\u5907\u6CE8</td><td${_scopeId}>\u5907\u6CE8</td><td${_scopeId}>\u7528\u6237\u8F93\u5165</td></tr><tr${_scopeId}><td${_scopeId}>CREATOR</td><td${_scopeId}>String</td><td${_scopeId}>\u521B\u5EFA\u4EBA</td><td${_scopeId}>-</td><td${_scopeId}>\u7CFB\u7EDF\u8D4B\u503C</td></tr><tr${_scopeId}><td${_scopeId}>CREATE_TIME</td><td${_scopeId}>Date</td><td${_scopeId}>\u521B\u5EFA\u65F6\u95F4</td><td${_scopeId}>-</td><td${_scopeId}>\u7CFB\u7EDF\u8D4B\u503C</td></tr><tr${_scopeId}><td${_scopeId}>CHECKER</td><td${_scopeId}>String</td><td${_scopeId}>\u5BA1\u6838\u4EBA</td><td${_scopeId}>-</td><td${_scopeId}>\u5BA1\u6279\u901A\u8FC7\u65F6\u8D4B\u503C</td></tr><tr${_scopeId}><td${_scopeId}>CHECK_TIME</td><td${_scopeId}>LocalDateTime</td><td${_scopeId}>\u5BA1\u6838\u65F6\u95F4</td><td${_scopeId}>-</td><td${_scopeId}>\u5BA1\u6279\u901A\u8FC7\u65F6\u8D4B\u503C</td></tr><tr${_scopeId}><td${_scopeId}>ORGANIZATION_ID</td><td${_scopeId}>Long</td><td${_scopeId}>\u7EC4\u7EC7ID</td><td${_scopeId}>-</td><td${_scopeId}>\u7CFB\u7EDF\u8D4B\u503C</td></tr><tr${_scopeId}><td${_scopeId}>HZ_INSTANCE_ID</td><td${_scopeId}>String</td><td${_scopeId}>\u6D41\u7A0B\u5B9E\u4F8BID</td><td${_scopeId}>-</td><td${_scopeId}>\u5DE5\u4F5C\u6D41\u542F\u52A8\u540E\u8D4B\u503C</td></tr><tr${_scopeId}><td${_scopeId}>HZ_APPROVE_STATUS</td><td${_scopeId}>String</td><td${_scopeId}>\u6D41\u7A0B\u5BA1\u6279\u72B6\u6001</td><td${_scopeId}>-</td><td${_scopeId}>NEW/RUN/APPROVED/REJECTED/REBUT/INTERRUPT</td></tr></tbody></table><p${_scopeId}>\u6CE8\uFF1AEntity\u5171836\u884C\uFF0C\u542B100+\u5B57\u6BB5\uFF0C\u4E0A\u8868\u5217\u51FA\u6838\u5FC3\u5B57\u6BB5\u3002\u5B8C\u6574\u5B57\u6BB5\u5305\u62EC\u5404\u7C7B\u62A5\u9500\u91D1\u989D/\u7A0E\u989D/\u53D1\u7968\u4FE1\u606F/\u4F9B\u5E94\u5546\u4FE1\u606F/\u6210\u672C\u4E2D\u5FC3/\u9500\u552E\u533A\u57DF/\u8FD0\u8425\u4E2D\u5FC3/\u8BBE\u8BA1\u5E08/\u8F6F\u88C5\u91C7\u8D2D/\u706F\u5177\u91C7\u8D2D\u7B49\u3002</p>`);
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
                createVNode("td", null, "CHECK_BX_ID"),
                createVNode("td", null, "Long"),
                createVNode("td", null, "\u4E3B\u952EID"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u81EA\u589E")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "CHECK_BX_CODE"),
                createVNode("td", null, "String"),
                createVNode("td", null, "\u9A8C\u6536\u62A5\u9500\u5355\u53F7"),
                createVNode("td", null, "\u9A8C\u6536\u62A5\u9500\u5355\u53F7"),
                createVNode("td", null, "\u7F16\u7801\u89C4\u5219\u751F\u6210")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "TERMINAL_APPLY_ID"),
                createVNode("td", null, "Long"),
                createVNode("td", null, "\u88C5\u4FEE\u7533\u8BF7ID"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u7528\u6237\u9009\u62E9(LOV)")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "TERMINAL_APPLY_NO"),
                createVNode("td", null, "String"),
                createVNode("td", null, "\u88C5\u4FEE\u7533\u8BF7\u5355\u53F7"),
                createVNode("td", null, "\u88C5\u4FEE\u7533\u8BF7\u5355\u53F7"),
                createVNode("td", null, "\u9009\u62E9\u65F6\u5E26\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "TERMINAL_ID"),
                createVNode("td", null, "Long"),
                createVNode("td", null, "\u95E8\u5E97ID"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u4ECE\u7533\u8BF7\u5355\u5E26\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "TERMINAL_CODE"),
                createVNode("td", null, "String"),
                createVNode("td", null, "\u95E8\u5E97\u7F16\u7801"),
                createVNode("td", null, "\u95E8\u5E97\u7F16\u7801"),
                createVNode("td", null, "\u4ECE\u7533\u8BF7\u5355\u5E26\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "TERMINAL_NAME"),
                createVNode("td", null, "String"),
                createVNode("td", null, "\u95E8\u5E97\u540D\u79F0"),
                createVNode("td", null, "\u95E8\u5E97\u540D\u79F0"),
                createVNode("td", null, "\u4ECE\u7533\u8BF7\u5355\u5E26\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "CUST_ID"),
                createVNode("td", null, "Long"),
                createVNode("td", null, "\u7ECF\u9500\u5546ID"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u4ECE\u7533\u8BF7\u5355\u5E26\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "CUST_CODE"),
                createVNode("td", null, "String"),
                createVNode("td", null, "\u7ECF\u9500\u5546\u7F16\u7801"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u4ECE\u7533\u8BF7\u5355\u5E26\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "CUST_NAME"),
                createVNode("td", null, "String"),
                createVNode("td", null, "\u7ECF\u9500\u5546\u540D\u79F0"),
                createVNode("td", null, "\u7ECF\u9500\u5546\u540D\u79F0"),
                createVNode("td", null, "\u4ECE\u7533\u8BF7\u5355\u5E26\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "SHORT_NAME"),
                createVNode("td", null, "String"),
                createVNode("td", null, "\u7ECF\u9500\u5546\u7B80\u79F0"),
                createVNode("td", null, "\u7ECF\u9500\u5546\u7B80\u79F0"),
                createVNode("td", null, "\u4ECE\u7533\u8BF7\u5355\u5E26\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "TRADING_COMPANY_ID"),
                createVNode("td", null, "Long"),
                createVNode("td", null, "\u4EA4\u6613\u516C\u53F8ID"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u4ECE\u7533\u8BF7\u5355\u5E26\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "TRADING_COMPANY_CODE"),
                createVNode("td", null, "String"),
                createVNode("td", null, "\u4EA4\u6613\u516C\u53F8\u7F16\u7801"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u4ECE\u7533\u8BF7\u5355\u5E26\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "TRADING_COMPANY_NAME"),
                createVNode("td", null, "String"),
                createVNode("td", null, "\u4EA4\u6613\u516C\u53F8\u540D\u79F0"),
                createVNode("td", null, "\u4EA4\u6613\u516C\u53F8"),
                createVNode("td", null, "\u4ECE\u7533\u8BF7\u5355\u5E26\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "BILLING_UNIT_ID"),
                createVNode("td", null, "Long"),
                createVNode("td", null, "\u6CD5\u4EBA\u5BA2\u6237ID"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u4ECE\u7533\u8BF7\u5355\u5E26\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "BILLING_UNIT_CODE"),
                createVNode("td", null, "String"),
                createVNode("td", null, "\u6CD5\u4EBA\u5BA2\u6237\u7F16\u7801"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u4ECE\u7533\u8BF7\u5355\u5E26\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "BILLING_UNIT_NAME"),
                createVNode("td", null, "String"),
                createVNode("td", null, "\u6CD5\u4EBA\u5BA2\u6237\u540D\u79F0"),
                createVNode("td", null, "\u6CD5\u4EBA\u5BA2\u6237"),
                createVNode("td", null, "\u4ECE\u7533\u8BF7\u5355\u5E26\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "FIXUP_GRADE"),
                createVNode("td", null, "Long"),
                createVNode("td", null, "\u88C5\u4FEE\u7B49\u7EA7"),
                createVNode("td", null, "\u88C5\u4FEE\u7B49\u7EA7"),
                createVNode("td", null, "\u4ECE\u7533\u8BF7\u5355\u5E26\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "TERMINAL_AREA"),
                createVNode("td", null, "BigDecimal"),
                createVNode("td", null, "\u95E8\u5E97\u9762\u79EF"),
                createVNode("td", null, "\u95E8\u5E97\u9762\u79EF"),
                createVNode("td", null, "\u4ECE\u7533\u8BF7\u5355\u5E26\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "THIS_TERMINAL_AREA"),
                createVNode("td", null, "BigDecimal"),
                createVNode("td", null, "\u5B9E\u9645\u88C5\u4FEE\u9762\u79EF"),
                createVNode("td", null, "\u5B9E\u9645\u88C5\u4FEE\u9762\u79EF"),
                createVNode("td", null, "\u4ECE\u7533\u8BF7\u5355\u5E26\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "IN_BX_AMT"),
                createVNode("td", null, "BigDecimal"),
                createVNode("td", null, "\u989D\u5EA6\u5185\u62A5\u9500\u91D1\u989D"),
                createVNode("td", null, "\u989D\u5EA6\u5185\u62A5\u9500\u91D1\u989D"),
                createVNode("td", null, "\u7CFB\u7EDF\u8BA1\u7B97")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "OUT_BX_AMT"),
                createVNode("td", null, "BigDecimal"),
                createVNode("td", null, "\u989D\u5EA6\u5916\u62A5\u9500\u91D1\u989D"),
                createVNode("td", null, "\u989D\u5EA6\u5916\u62A5\u9500\u91D1\u989D"),
                createVNode("td", null, "\u7CFB\u7EDF\u8BA1\u7B97")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "CHECK_DATE"),
                createVNode("td", null, "LocalDate"),
                createVNode("td", null, "\u9A8C\u6536\u65E5\u671F"),
                createVNode("td", null, "\u9A8C\u6536\u65E5\u671F"),
                createVNode("td", null, "\u7528\u6237\u8F93\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "NOTE"),
                createVNode("td", null, "String"),
                createVNode("td", null, "\u5907\u6CE8"),
                createVNode("td", null, "\u5907\u6CE8"),
                createVNode("td", null, "\u7528\u6237\u8F93\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "CREATOR"),
                createVNode("td", null, "String"),
                createVNode("td", null, "\u521B\u5EFA\u4EBA"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u7CFB\u7EDF\u8D4B\u503C")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "CREATE_TIME"),
                createVNode("td", null, "Date"),
                createVNode("td", null, "\u521B\u5EFA\u65F6\u95F4"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u7CFB\u7EDF\u8D4B\u503C")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "CHECKER"),
                createVNode("td", null, "String"),
                createVNode("td", null, "\u5BA1\u6838\u4EBA"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u5BA1\u6279\u901A\u8FC7\u65F6\u8D4B\u503C")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "CHECK_TIME"),
                createVNode("td", null, "LocalDateTime"),
                createVNode("td", null, "\u5BA1\u6838\u65F6\u95F4"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u5BA1\u6279\u901A\u8FC7\u65F6\u8D4B\u503C")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "ORGANIZATION_ID"),
                createVNode("td", null, "Long"),
                createVNode("td", null, "\u7EC4\u7EC7ID"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u7CFB\u7EDF\u8D4B\u503C")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "HZ_INSTANCE_ID"),
                createVNode("td", null, "String"),
                createVNode("td", null, "\u6D41\u7A0B\u5B9E\u4F8BID"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u5DE5\u4F5C\u6D41\u542F\u52A8\u540E\u8D4B\u503C")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "HZ_APPROVE_STATUS"),
                createVNode("td", null, "String"),
                createVNode("td", null, "\u6D41\u7A0B\u5BA1\u6279\u72B6\u6001"),
                createVNode("td", null, "-"),
                createVNode("td", null, "NEW/RUN/APPROVED/REJECTED/REBUT/INTERRUPT")
              ])
            ])
          ]),
          createVNode("p", null, "\u6CE8\uFF1AEntity\u5171836\u884C\uFF0C\u542B100+\u5B57\u6BB5\uFF0C\u4E0A\u8868\u5217\u51FA\u6838\u5FC3\u5B57\u6BB5\u3002\u5B8C\u6574\u5B57\u6BB5\u5305\u62EC\u5404\u7C7B\u62A5\u9500\u91D1\u989D/\u7A0E\u989D/\u53D1\u7968\u4FE1\u606F/\u4F9B\u5E94\u5546\u4FE1\u606F/\u6210\u672C\u4E2D\u5FC3/\u9500\u552E\u533A\u57DF/\u8FD0\u8425\u4E2D\u5FC3/\u8BBE\u8BA1\u5E08/\u8F6F\u88C5\u91C7\u8D2D/\u706F\u5177\u91C7\u8D2D\u7B49\u3002")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div><div id="faq" style="${ssrRenderStyle({ "display": "none" })}"><div class="tab-pad"><div class="kl-wrap">`);
  _push(ssrRenderComponent(_component_KbCard, { title: "Q1\uFF1A\u65E0\u6CD5\u9009\u62E9\u88C5\u4FEE\u7533\u8BF7\u5355" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p${_scopeId}><strong${_scopeId}>\u6839\u56E0</strong>\uFF1A\u6CA1\u6709APPROVED\u72B6\u6001\u7684\u88C5\u4FEE\u7533\u8BF7\u5355</p><p${_scopeId}><strong${_scopeId}>\u89E3\u51B3\u65B9\u6848</strong>\uFF1A\u786E\u8BA4FIN_FEE_APPLY_FINISHED_HEADER\u4E2D\u5B58\u5728APPROVED\u72B6\u6001\u7684\u8BB0\u5F55</p>`);
      } else {
        return [
          createVNode("p", null, [
            createVNode("strong", null, "\u6839\u56E0"),
            createTextVNode("\uFF1A\u6CA1\u6709APPROVED\u72B6\u6001\u7684\u88C5\u4FEE\u7533\u8BF7\u5355")
          ]),
          createVNode("p", null, [
            createVNode("strong", null, "\u89E3\u51B3\u65B9\u6848"),
            createTextVNode("\uFF1A\u786E\u8BA4FIN_FEE_APPLY_FINISHED_HEADER\u4E2D\u5B58\u5728APPROVED\u72B6\u6001\u7684\u8BB0\u5F55")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, { title: "Q2\uFF1A\u4F5C\u5E9F\u65F6\u62A5\u72B6\u6001\u4E0D\u5141\u8BB8" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p${_scopeId}><strong${_scopeId}>\u6839\u56E0</strong>\uFF1A\u5355\u636E\u72B6\u6001\u975ENEW\u6216REJECTED</p><p${_scopeId}><strong${_scopeId}>\u89E3\u51B3\u65B9\u6848</strong>\uFF1A\u4EC5NEW\u548CREJECTED\u72B6\u6001\u53EF\u4F5C\u5E9F</p>`);
      } else {
        return [
          createVNode("p", null, [
            createVNode("strong", null, "\u6839\u56E0"),
            createTextVNode("\uFF1A\u5355\u636E\u72B6\u6001\u975ENEW\u6216REJECTED")
          ]),
          createVNode("p", null, [
            createVNode("strong", null, "\u89E3\u51B3\u65B9\u6848"),
            createTextVNode("\uFF1A\u4EC5NEW\u548CREJECTED\u72B6\u6001\u53EF\u4F5C\u5E9F")
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
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u65E5\u671F</th><th${_scopeId}>\u63D0\u4EA4ID</th><th${_scopeId}>\u63D0\u4EA4\u4EBA</th><th${_scopeId}>\u63D0\u4EA4\u5185\u5BB9</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>2026-08-30</td><td${_scopeId}>-</td><td${_scopeId}>-</td><td${_scopeId}>\u6309skill\u89C4\u8303\u91CD\u5199\u4E1A\u52A1\u903B\u8F91\u68B3\u7406MD\u6587\u4EF6</td></tr></tbody></table>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("\u95E8\u5E97\u7BA1\u7406/\u95E8\u5E97\u88C5\u4FEE/\u95E8\u5E97\u9A8C\u6536\u4E0E\u62A5\u9500\u5355/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
