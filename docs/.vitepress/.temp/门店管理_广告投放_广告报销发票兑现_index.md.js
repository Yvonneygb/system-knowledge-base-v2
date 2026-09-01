import { resolveComponent, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.6ab74304.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"\u95E8\u5E97\u7BA1\u7406/\u5E7F\u544A\u6295\u653E/\u5E7F\u544A\u62A5\u9500\u53D1\u7968\u5151\u73B0/index.md"}');
const _sfc_main = { name: "\u95E8\u5E97\u7BA1\u7406/\u5E7F\u544A\u6295\u653E/\u5E7F\u544A\u62A5\u9500\u53D1\u7968\u5151\u73B0/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_BreadcrumbTabs = resolveComponent("BreadcrumbTabs");
  const _component_KbCard = resolveComponent("KbCard");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_BreadcrumbTabs, null, null, _parent));
  _push(`<div id="biz-intro" style="${ssrRenderStyle({ "display": "none" })}"><div class="tab-pad"><div class="kl-wrap"><div class="kl-card"><div class="biz-kl-hdr"><span class="biz-tag" style="${ssrRenderStyle({ "background": "rgba(124,58,237,0.08)", "color": "#7C3AED", "border-color": "rgba(124,58,237,0.18)" })}"> \u5B9A\u4E49</span><h2>\u5E7F\u544A\u62A5\u9500\u53D1\u7968\u5151\u73B0\u662F\u4EC0\u4E48</h2><p>\u5E7F\u544A\u8D39\u62A5\u9500\u901A\u8FC7\u540E\uFF0C\u5C06\u62A5\u9500\u91D1\u989D\u5151\u73B0\u4E3A\u5B9E\u9645\u8D44\u91D1\u7684\u73AF\u8282</p></div><div class="biz-2col-inner"><div class="kl-col-box"><div style="${ssrRenderStyle({ "display": "flex", "align-items": "center", "gap": "10px", "margin-bottom": "12px" })}"><div style="${ssrRenderStyle({ "width": "40px", "height": "40px", "border-radius": "10px", "display": "flex", "align-items": "center", "justify-content": "center", "background": "linear-gradient(135deg,#7c3aed,#6d28d9)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="6" stroke="white" stroke-width="1.5"></circle><circle cx="8" cy="8" r="3" stroke="white" stroke-width="1.5"></circle><circle cx="8" cy="8" r="1" fill="white"></circle></svg></div><h4 style="${ssrRenderStyle({ "font-size": "1rem", "font-weight": "800", "color": "#1F2937", "margin": "0" })}">\u5151\u73B0\u8FB9\u754C</h4></div><p style="${ssrRenderStyle({ "font-size": "0.78rem", "font-weight": "600", "color": "#6B7280", "margin": "0 0 10px" })}">\u62A5\u9500\u5230\u5151\u73B0\u7684\u6865\u63A5\u5355</p><div style="${ssrRenderStyle({ "display": "flex", "flex-direction": "column", "gap": "8px" })}"><div style="${ssrRenderStyle({ "display": "flex", "align-items": "flex-start", "gap": "8px", "padding": "8px 10px", "background": "#F5F3FF", "border-radius": "8px" })}"><div style="${ssrRenderStyle({ "font-size": ".75rem" })}"><strong>\u524D\u7F6E\u6761\u4EF6</strong> \u2014 \u5E7F\u544A\u8D39\u62A5\u9500\u5FC5\u987B\u5DF2\u5BA1\u6279\u901A\u8FC7</div></div><div style="${ssrRenderStyle({ "display": "flex", "align-items": "flex-start", "gap": "8px", "padding": "8px 10px", "background": "#F5F3FF", "border-radius": "8px" })}"><div style="${ssrRenderStyle({ "font-size": ".75rem" })}"><strong>\u652F\u6301\u5206\u6279</strong> \u2014 \u53EF\u5206\u591A\u6B21\u6309\u53EF\u5151\u73B0\u91D1\u989D\u5151\u73B0</div></div><div style="${ssrRenderStyle({ "display": "flex", "align-items": "flex-start", "gap": "8px", "padding": "8px 10px", "background": "#F5F3FF", "border-radius": "8px" })}"><div style="${ssrRenderStyle({ "font-size": ".75rem" })}"><strong>\u5206\u989D\u5185/\u989D\u5916</strong> \u2014 \u989D\u5EA6\u5185\u4E0E\u989D\u5EA6\u5916\u5151\u73B0\u89C4\u5219\u4E0D\u540C</div></div></div></div><div class="kl-col-box alt"><div style="${ssrRenderStyle({ "display": "flex", "align-items": "center", "gap": "10px", "margin-bottom": "12px" })}"><div style="${ssrRenderStyle({ "width": "40px", "height": "40px", "border-radius": "10px", "display": "flex", "align-items": "center", "justify-content": "center", "background": "linear-gradient(135deg,#10b981,#059669)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="1" y="4" width="14" height="10" rx="1" stroke="white" stroke-width="1.5"></rect><path d="M1 7H12" stroke="white" stroke-width="1.5"></path><circle cx="12" cy="10.5" r="1.5" fill="white"></circle></svg></div><h4 style="${ssrRenderStyle({ "font-size": "1rem", "font-weight": "800", "color": "#1F2937", "margin": "0" })}">\u5151\u73B0\u53BB\u5411</h4></div><p style="${ssrRenderStyle({ "font-size": "0.78rem", "font-weight": "600", "color": "#6B7280", "margin": "0 0 10px" })}">\u5BA1\u6279\u901A\u8FC7\u540E\u8FDB\u5165\u8D44\u91D1\u6D41\u8F6C</p><div style="${ssrRenderStyle({ "display": "flex", "flex-direction": "column", "gap": "8px" })}"><div style="${ssrRenderStyle({ "display": "flex", "align-items": "flex-start", "gap": "8px", "padding": "8px 10px", "background": "#F0FDF4", "border-radius": "8px", "border": "1px solid #D1FAE5" })}"><div style="${ssrRenderStyle({ "font-size": ".75rem" })}"><strong>\u989D\u5EA6\u5185</strong> \u2014 \u540C\u6B65\u5230\u8D44\u91D1\u6C60\u5E76\u56DE\u5199\u4EA4\u6613\u516C\u53F8</div></div><div style="${ssrRenderStyle({ "display": "flex", "align-items": "flex-start", "gap": "8px", "padding": "8px 10px", "background": "#F0FDF4", "border-radius": "8px", "border": "1px solid #D1FAE5" })}"><div style="${ssrRenderStyle({ "font-size": ".75rem" })}"><strong>\u989D\u5EA6\u5916</strong> \u2014 \u540C\u6B65\u989D\u5EA6\u5916\u9884\u7B97\u6A21\u5757\u66F4\u65B0\u5DF2\u4F7F\u7528</div></div><div style="${ssrRenderStyle({ "display": "flex", "align-items": "flex-start", "gap": "8px", "padding": "8px 10px", "background": "#EDE9FE", "border-radius": "8px", "border": "1px solid #DBEAFE" })}"><div style="${ssrRenderStyle({ "font-size": ".75rem" })}"><strong>\u5BF9\u5916</strong> \u2014 \u63A8\u9001 ERP \u8D44\u91D1\u6C60\u4E0E MBO \u7CFB\u7EDF</div></div></div></div></div></div><div class="kl-card"><div class="biz-kl-hdr"><span class="biz-tag" style="${ssrRenderStyle({ "background": "rgba(124,58,237,0.08)", "color": "#7C3AED", "border-color": "rgba(124,58,237,0.18)" })}"> \u6D41\u7A0B</span><h2>\u5E7F\u544A\u62A5\u9500\u53D1\u7968\u5151\u73B0\u5168\u6D41\u7A0B</h2><p>\u4ECE\u62A5\u9500\u901A\u8FC7\u5230\u8D44\u91D1\u63A8\u9001\uFF0C\u56DB\u6B65\u95ED\u73AF</p></div><div class="biz-steps"><div class="biz-step-item"><div class="biz-step-circle" style="${ssrRenderStyle({ "background": "linear-gradient(135deg,#7C3AED,#6D28D9)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="12" height="12" rx="1" stroke="white" stroke-width="1.5"></rect><path d="M8 2V14" stroke="white" stroke-width="1.5"></path><path d="M2 8H14" stroke="white" stroke-width="1.5"></path></svg></div><h5>\u62A5\u9500\u5DF2\u901A\u8FC7</h5><small>\u5E7F\u544A\u8D39\u62A5\u9500\u5355<br>\u5BA1\u6279\u901A\u8FC7\u4F5C\u4E3A\u524D\u63D0</small></div><div class="biz-step-arrow">\u2192</div><div class="biz-step-item"><div class="biz-step-circle" style="${ssrRenderStyle({ "background": "linear-gradient(135deg,#7c3aed,#6d28d9)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="12" height="12" rx="1" stroke="white" stroke-width="1.5"></rect><path d="M8 5V11" stroke="white" stroke-width="1.5" stroke-linecap="round"></path><path d="M5 8H11" stroke="white" stroke-width="1.5" stroke-linecap="round"></path></svg></div><h5>\u65B0\u5EFA\u5151\u73B0</h5><small>\u5F55\u5165\u672C\u6B21\u5151\u73B0\u91D1\u989D<br>\u533A\u5206\u989D\u5EA6\u5185/\u989D\u5EA6\u5916</small></div><div class="biz-step-arrow">\u2192</div><div class="biz-step-item"><div class="biz-step-circle" style="${ssrRenderStyle({ "background": "linear-gradient(135deg,#10b981,#059669)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 2L3 4V8C3 11 8 14 8 14C8 14 13 11 13 8V4L8 2Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6 8L7.5 9.5L10.5 6.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></div><h5>\u63D0\u4EA4\u5BA1\u6279</h5><small>\u6821\u9A8C\u5151\u73B0\u91D1\u989D\u4E0D\u8D85\u53EF\u5151\u73B0\u603B\u989D<br>\u989D\u5EA6\u5916\u9700\u6263\u9664\u5DF2\u5360\u7528\u91D1\u989D</small></div><div class="biz-step-arrow">\u2192</div><div class="biz-step-item"><div class="biz-step-circle" style="${ssrRenderStyle({ "background": "linear-gradient(135deg,#f59e0b,#d97706)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 3L5 10" stroke="white" stroke-width="1.5" stroke-linecap="round"></path><path d="M8 10H11C12.1046 10 13 9.10457 13 8V7" stroke="white" stroke-width="1.5" stroke-linecap="round"></path><path d="M10 5H7C5.89543 5 5 5.89543 5 7V8" stroke="white" stroke-width="1.5" stroke-linecap="round"></path></svg></div><h5>\u8D44\u91D1\u63A8\u9001</h5><small>\u901A\u8FC7\u540E\u63A8\u9001 ERP \u8D44\u91D1\u6C60/MBO<br>\u989D\u5EA6\u5916\u540C\u6B65\u9884\u7B97\u66F4\u65B0</small></div></div></div><div class="kl-card" style="${ssrRenderStyle({ "margin-bottom": "0" })}"><div class="biz-kl-hdr"><span class="biz-tag" style="${ssrRenderStyle({ "background": "rgba(124,58,237,0.08)", "color": "#7C3AED", "border-color": "rgba(124,58,237,0.18)" })}"> \u5173\u952E\u89C4\u5219</span><h2>\u5151\u73B0\u4E0E\u989D\u5EA6\u6838\u5FC3\u89C4\u5219</h2><p>\u91D1\u989D\u6821\u9A8C\u3001\u9884\u7B97\u540C\u6B65\u4E0E\u56DE\u5199\u7EA6\u675F</p></div><div class="biz-3col"><div class="kl-col-box" style="${ssrRenderStyle({ "margin-bottom": "0" })}"><div style="${ssrRenderStyle({ "display": "flex", "gap": "12px", "align-items": "flex-start" })}"><div style="${ssrRenderStyle({ "width": "36px", "height": "36px", "border-radius": "10px", "display": "flex", "align-items": "center", "justify-content": "center", "flex-shrink": "0", "background": "linear-gradient(135deg,#7C3AED,#A78BFA)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="12" height="12" rx="1" stroke="white" stroke-width="1.5"></rect><path d="M8 2V14" stroke="white" stroke-width="1.5"></path><path d="M2 8H14" stroke="white" stroke-width="1.5"></path></svg></div><div><h5 style="${ssrRenderStyle({ "font-size": "0.88rem", "font-weight": "800", "color": "#1F2937", "margin": "0 0 6px" })}">\u91D1\u989D\u4E0D\u8D85\u5151</h5><p style="${ssrRenderStyle({ "font-size": "0.73rem", "color": "#6B7280", "margin": "0", "line-height": "1.6" })}">\u672C\u6B21\u5151\u73B0\u91D1\u989D\u53E0\u52A0\u5DF2\u5151\u73B0\u4E0D\u5F97\u8D85\u51FA\u53EF\u5151\u73B0\u603B\u989D\uFF0C\u9632\u6B62\u8D85\u989D\u5151\u73B0\u3002</p></div></div></div><div class="kl-col-box alt" style="${ssrRenderStyle({ "margin-bottom": "0" })}"><div style="${ssrRenderStyle({ "display": "flex", "gap": "12px", "align-items": "flex-start" })}"><div style="${ssrRenderStyle({ "width": "36px", "height": "36px", "border-radius": "10px", "display": "flex", "align-items": "center", "justify-content": "center", "flex-shrink": "0", "background": "linear-gradient(135deg,#F59E0B,#FBBF24)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="6" stroke="white" stroke-width="1.5"></circle><path d="M8 4V8L10.5 10" stroke="white" stroke-width="1.5" stroke-linecap="round"></path></svg></div><div><h5 style="${ssrRenderStyle({ "font-size": "0.88rem", "font-weight": "800", "color": "#1F2937", "margin": "0 0 6px" })}">\u989D\u5EA6\u5916\u540C\u6B65</h5><p style="${ssrRenderStyle({ "font-size": "0.73rem", "color": "#6B7280", "margin": "0", "line-height": "1.6" })}">\u989D\u5EA6\u5916\u5151\u73B0\u5BA1\u6279\u901A\u8FC7\u540E\uFF0C\u6309\u6BD4\u4F8B\u540C\u6B65\u989D\u5EA6\u5916\u9884\u7B97\uFF0C\u66F4\u65B0\u5DF2\u4F7F\u7528\u91D1\u989D\u3002</p></div></div></div><div class="kl-col-box" style="${ssrRenderStyle({ "margin-bottom": "0" })}"><div style="${ssrRenderStyle({ "display": "flex", "gap": "12px", "align-items": "flex-start" })}"><div style="${ssrRenderStyle({ "width": "36px", "height": "36px", "border-radius": "10px", "display": "flex", "align-items": "center", "justify-content": "center", "flex-shrink": "0", "background": "linear-gradient(135deg,#10B981,#34D399)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 5L6 2L9 5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6 2V14" stroke="white" stroke-width="1.5" stroke-linecap="round"></path><path d="M12 8L9 11L6 8" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></div><div><h5 style="${ssrRenderStyle({ "font-size": "0.88rem", "font-weight": "800", "color": "#1F2937", "margin": "0 0 6px" })}">\u989D\u5EA6\u5185\u56DE\u5199</h5><p style="${ssrRenderStyle({ "font-size": "0.73rem", "color": "#6B7280", "margin": "0", "line-height": "1.6" })}">\u989D\u5EA6\u5185\u5151\u73B0\u901A\u8FC7\u540E\uFF0C\u5C06\u4EA4\u6613\u516C\u53F8\u56DE\u5199\u5230\u4E0A\u6E38\u7533\u8BF7\u5355\u3001\u9A8C\u6536\u5355\u4E0E\u62A5\u9500\u5355\u3002</p></div></div></div></div><div class="kl-tip" style="${ssrRenderStyle({ "margin-top": "14px" })}"><strong>\u4E1A\u52A1\u7EA6\u675F\uFF1A</strong>\u53D1\u7968\u5151\u73B0\u662F\u5E7F\u544A\u8D39\u62A5\u9500\u8D44\u91D1\u843D\u5730\u7684\u6700\u540E\u4E00\u73AF\uFF0C\u5FC5\u987B\u5728\u62A5\u9500\u5BA1\u6279\u901A\u8FC7\u540E\u53D1\u8D77\uFF0C\u5E76\u6309\u989D\u5EA6\u5185\u5916\u5DEE\u5F02\u5316\u5904\u7406\u8D44\u91D1\u6C60\u540C\u6B65\u4E0E\u9884\u7B97\u66F4\u65B0\u3002 </div></div></div></div></div><div id="biz-flow" style="${ssrRenderStyle({ "display": "none" })}"><div class="tab-pad"><div class="bf-truth-flow"><h4 class="bf-main-title">\u5E7F\u544A\u62A5\u9500\u53D1\u7968\u5151\u73B0 \u2014 \u5168\u94FE\u8DEF\u6D41\u7A0B\u56FE</h4><p class="bf-main-sub">\u5F00\u59CB \u2192 \u5E7F\u544A\u8D39\u62A5\u9500(\u5DF2\u901A\u8FC7) \u2192 \u2605\u65B0\u5EFA\u5E7F\u544A\u62A5\u9500\u53D1\u7968\u5151\u73B0\u2605 \u2192 \u2696\u5BA1\u6279\u901A\u8FC7\uFF1F \u2192 \u63A8\u9001ERP\u8D44\u91D1\u6C60/\u63A8\u9001MBO \u2192 \u7ED3\u675F</p><div class="bf-fc-svg-wrap"><svg class="bf-fc-svg" style="${ssrRenderStyle({ "max-height": "none" })}" viewBox="0 0 1100 675" xmlns="http://www.w3.org/2000/svg"><defs><marker id="arr-green" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon points="0,0 10,5 0,10" fill="#16A34A"></polygon></marker><marker id="arr-gray" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon points="0,0 10,5 0,10" fill="#9CA3AF"></polygon></marker><marker id="arr-blue" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon points="0,0 10,5 0,10" fill="#3B82F6"></polygon></marker><marker id="arr-red" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon points="0,0 10,5 0,10" fill="#EF4444"></polygon></marker><filter id="shadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000" flood-opacity="0.15"></feDropShadow></filter></defs><rect x="20" y="20" width="1060" height="95" rx="8" fill="#EFF6FF" stroke="#3B82F6" stroke-width="1.5" stroke-dasharray="6,4"></rect><text x="550" y="42" text-anchor="middle" fill="#1D4ED8" font-size="13" font-weight="600">\u4E0A\u6E38\u652F\u6491</text><rect x="230" y="56" width="120" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"></rect><text x="290" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">\u5E7F\u544A\u8D39\u62A5\u9500\u5355</text><rect x="360" y="56" width="120" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"></rect><text x="420" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">\u5E7F\u544A\u6295\u653E\u7533\u8BF7\u5355</text><rect x="490" y="56" width="120" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"></rect><text x="550" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">\u989D\u5EA6\u5916\u9884\u7B97\u6A21\u5757</text><rect x="620" y="56" width="120" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"></rect><text x="680" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">ERP\u8D44\u91D1\u6C60\u63A5\u53E3</text><rect x="750" y="56" width="120" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"></rect><text x="810" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">MBO\u7CFB\u7EDF</text><line x1="550" y1="115" x2="550" y2="150" stroke="#3B82F6" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#arr-blue)"></line><rect x="500" y="150" width="100" height="44" rx="6" fill="#FAF5FF" stroke="#9333EA" stroke-width="1.5" stroke-dasharray="5,3"></rect><text x="550" y="177" text-anchor="middle" fill="#7C3AED" font-size="13" font-weight="600">\u5F00\u59CB</text><line x1="550" y1="194" x2="550" y2="210" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"></line><rect x="420" y="210" width="260" height="40" rx="6" fill="#F0FDF4" stroke="#16A34A" stroke-width="2"></rect><text x="550" y="235" text-anchor="middle" fill="#166534" font-size="13" font-weight="600">\u5E7F\u544A\u8D39\u62A5\u9500(\u5DF2\u5BA1\u6279\u901A\u8FC7)</text><line x1="550" y1="250" x2="550" y2="268" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"></line><rect x="430" y="268" width="240" height="54" rx="6" fill="#16A34A" stroke="#15803D" stroke-width="2" filter="url(#shadow)"></rect><text x="550" y="292" text-anchor="middle" fill="#FFFFFF" font-size="13" font-weight="700">\u2605\u65B0\u5EFA\u5E7F\u544A\u62A5\u9500\u53D1\u7968\u5151\u73B0\u2605</text><text x="550" y="310" text-anchor="middle" fill="#DCFCE7" font-size="10">\u5F55\u5165\u5151\u73B0\u91D1\u989D\xB7\u63D0\u4EA4\u5BA1\u6279</text><line x1="550" y1="322" x2="550" y2="340" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"></line><polygon points="550,340 622,378 550,416 478,378" fill="#FAF5FF" stroke="#9333EA" stroke-width="1.5" stroke-dasharray="5,3"></polygon><text x="550" y="382" text-anchor="middle" fill="#7C3AED" font-size="12" font-weight="600">\u2696 \u5BA1\u6279\u901A\u8FC7\uFF1F</text><line x1="622" y1="378" x2="712" y2="378" stroke="#EF4444" stroke-width="2" marker-end="url(#arr-red)"></line><rect x="667" y="363" width="90" height="28" rx="4" fill="#FEF2F2" stroke="#EF4444" stroke-width="1"></rect><text x="712" y="382" text-anchor="middle" fill="#DC2626" font-size="11" font-weight="600">\u62D2\u7EDD \u2717</text><line x1="712" y1="363" x2="712" y2="295" stroke="#EF4444" stroke-width="1.5"></line><line x1="712" y1="295" x2="640" y2="295" stroke="#EF4444" stroke-width="1.5" marker-end="url(#arr-red)"></line><line x1="550" y1="416" x2="550" y2="432" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"></line><rect x="430" y="432" width="240" height="40" rx="6" fill="#F0FDF4" stroke="#16A34A" stroke-width="2"></rect><text x="550" y="457" text-anchor="middle" fill="#166534" font-size="13" font-weight="600">\u63A8\u9001ERP\u8D44\u91D1\u6C60/\u63A8\u9001MBO</text><line x1="550" y1="472" x2="550" y2="500" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"></line><rect x="495" y="500" width="110" height="40" rx="6" fill="#FAF5FF" stroke="#9333EA" stroke-width="1.5" stroke-dasharray="5,3"></rect><text x="550" y="525" text-anchor="middle" fill="#7C3AED" font-size="13" font-weight="600">\u7ED3\u675F</text><line x1="550" y1="540" x2="550" y2="560" stroke="#16A34A" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#arr-green)"></line><rect x="20" y="560" width="1060" height="95" rx="8" fill="#F0FDF4" stroke="#16A34A" stroke-width="1.5" stroke-dasharray="6,4"></rect><text x="550" y="582" text-anchor="middle" fill="#166534" font-size="13" font-weight="600">\u4E0B\u6E38\u5F71\u54CD</text><rect x="305" y="598" width="150" height="36" rx="5" fill="#FFFFFF" stroke="#16A34A" stroke-width="1.2"></rect><text x="380" y="621" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">\u989D\u5EA6\u5916\u9884\u7B97\u6570\u636E\u66F4\u65B0</text><rect x="475" y="598" width="150" height="36" rx="5" fill="#FFFFFF" stroke="#16A34A" stroke-width="1.2"></rect><text x="550" y="621" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">\u4EA4\u6613\u516C\u53F8\u56DE\u5199</text><rect x="645" y="598" width="150" height="36" rx="5" fill="#FFFFFF" stroke="#16A34A" stroke-width="1.2"></rect><text x="720" y="621" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">ERP\u7CFB\u7EDF</text></svg></div><div class="bf-fc-legend"><span class="bf-fc-legend-item"><span class="bf-fc-dot bf-fc-dot-green"></span> \u4E3B\u6D41\u7A0B\u6B65\u9AA4</span><span class="bf-fc-legend-item"><span class="bf-fc-dot bf-fc-dot-purple"></span> \u5F00\u59CB/\u7ED3\u675F/\u5224\u65AD</span><span class="bf-fc-legend-item"><span class="bf-fc-dot bf-fc-dot-blue"></span> \u4E0A\u6E38\u652F\u6491\u670D\u52A1</span><span class="bf-fc-legend-item"><span style="${ssrRenderStyle({ "display": "inline-block", "width": "22px", "height": "2px", "background": "#EF4444" })}"></span> \u5BA1\u6279\u62D2\u7EDD/\u9A73\u56DE</span></div></div></div></div><div id="key-logic" style="${ssrRenderStyle({ "display": "none" })}"><div class="tab-pad"><div class="kl-wrap">`);
  _push(ssrRenderComponent(_component_KbCard, {
    num: "1",
    title: "\u91CD\u70B9\u903B\u8F911\uFF1A\u989D\u5EA6\u5185\u4E0E\u989D\u5EA6\u5916\u5151\u73B0\u533A\u5206 {\u5151\u73B0\u7C7B\u578B}"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u610F\u4E49</strong>\uFF1A\u5151\u73B0\u5206\u4E3A\u989D\u5EA6\u5185\u548C\u989D\u5EA6\u5916\uFF0C\u6821\u9A8C\u548C\u9884\u7B97\u5904\u7406\u903B\u8F91\u4E0D\u540C</li></ul><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u5177\u4F53\u903B\u8F91\u63CF\u8FF0</strong></li></ul><ul${_scopeId}><li${_scopeId}>\u7B2C1\u70B9\uFF1AcashoutType=1\u4E3A\u989D\u5EA6\u5185\uFF0C\u6821\u9A8C\u672C\u6B21\u6838\u9500\u91D1\u989D\u4E0D\u8D85\u8FC7\u989D\u5EA6\u5185\u53EF\u7528\u91D1\u989D</li></ul><ul${_scopeId}><li${_scopeId}>\u7B2C2\u70B9\uFF1AcashoutType=2\u4E3A\u989D\u5EA6\u5916\uFF0C\u6821\u9A8C\u672C\u6B21\u5151\u73B0\u91D1\u989D\u4E0D\u8D85\u8FC7\u989D\u5EA6\u5916\u53EF\u7528\u91D1\u989D-\u5DF2\u5360\u7528\u91D1\u989D</li></ul><ul${_scopeId}><li${_scopeId}>\u7B2C3\u70B9\uFF1A\u989D\u5EA6\u5916\u5BA1\u6279\u901A\u8FC7\u540E\u66F4\u65B0\u989D\u5EA6\u5916\u9884\u7B97\u5DF2\u4F7F\u7528\u91D1\u989D\uFF0C\u6309\u6708\u4EFD\u533A\u5206\u5F53\u5E74/\u6B21\u5E74</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u610F\u4E49"),
              createTextVNode("\uFF1A\u5151\u73B0\u5206\u4E3A\u989D\u5EA6\u5185\u548C\u989D\u5EA6\u5916\uFF0C\u6821\u9A8C\u548C\u9884\u7B97\u5904\u7406\u903B\u8F91\u4E0D\u540C")
            ])
          ]),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u5177\u4F53\u903B\u8F91\u63CF\u8FF0")
            ])
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u7B2C1\u70B9\uFF1AcashoutType=1\u4E3A\u989D\u5EA6\u5185\uFF0C\u6821\u9A8C\u672C\u6B21\u6838\u9500\u91D1\u989D\u4E0D\u8D85\u8FC7\u989D\u5EA6\u5185\u53EF\u7528\u91D1\u989D")
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u7B2C2\u70B9\uFF1AcashoutType=2\u4E3A\u989D\u5EA6\u5916\uFF0C\u6821\u9A8C\u672C\u6B21\u5151\u73B0\u91D1\u989D\u4E0D\u8D85\u8FC7\u989D\u5EA6\u5916\u53EF\u7528\u91D1\u989D-\u5DF2\u5360\u7528\u91D1\u989D")
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u7B2C3\u70B9\uFF1A\u989D\u5EA6\u5916\u5BA1\u6279\u901A\u8FC7\u540E\u66F4\u65B0\u989D\u5EA6\u5916\u9884\u7B97\u5DF2\u4F7F\u7528\u91D1\u989D\uFF0C\u6309\u6708\u4EFD\u533A\u5206\u5F53\u5E74/\u6B21\u5E74")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, {
    num: "2",
    title: "\u91CD\u70B9\u903B\u8F912\uFF1A\u5151\u73B0\u91D1\u989D\u6821\u9A8C {\u6838\u5FC3\u6821\u9A8C}"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u610F\u4E49</strong>\uFF1A\u786E\u4FDD\u5151\u73B0\u91D1\u989D\u4E0D\u8D85\u8FC7\u5269\u4F59\u53EF\u5151\u73B0\u91D1\u989D</li></ul><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u5177\u4F53\u903B\u8F91\u63CF\u8FF0</strong></li></ul><ul${_scopeId}><li${_scopeId}>\u7B2C1\u70B9\uFF1A\u672C\u6B21\u5151\u73B0\u91D1\u989D&lt;=\u53EF\u5151\u73B0\u603B\u989D-\u5DF2\u5151\u73B0\u603B\u989D</li></ul><ul${_scopeId}><li${_scopeId}>\u7B2C2\u70B9\uFF1A\u652F\u4ED8\u65B9\u5F0F\u975E3\uFF08\u975E\u865A\u62DF\u6536\u6B3E\uFF09\u65F6\uFF0C\u53D1\u7968\u91D1\u989D\u5FC5\u987B&gt;0</li></ul><ul${_scopeId}><li${_scopeId}>\u7B2C3\u70B9\uFF1A\u63D0\u4EA4\u65F6\u6821\u9A8C\u7533\u8BF7\u5151\u73B0\u91D1\u989D\u4E0D\u8D85\u8FC7\u5269\u4F59\u672A\u5151\u73B0\u603B\u989D</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u610F\u4E49"),
              createTextVNode("\uFF1A\u786E\u4FDD\u5151\u73B0\u91D1\u989D\u4E0D\u8D85\u8FC7\u5269\u4F59\u53EF\u5151\u73B0\u91D1\u989D")
            ])
          ]),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u5177\u4F53\u903B\u8F91\u63CF\u8FF0")
            ])
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u7B2C1\u70B9\uFF1A\u672C\u6B21\u5151\u73B0\u91D1\u989D<=\u53EF\u5151\u73B0\u603B\u989D-\u5DF2\u5151\u73B0\u603B\u989D")
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u7B2C2\u70B9\uFF1A\u652F\u4ED8\u65B9\u5F0F\u975E3\uFF08\u975E\u865A\u62DF\u6536\u6B3E\uFF09\u65F6\uFF0C\u53D1\u7968\u91D1\u989D\u5FC5\u987B>0")
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u7B2C3\u70B9\uFF1A\u63D0\u4EA4\u65F6\u6821\u9A8C\u7533\u8BF7\u5151\u73B0\u91D1\u989D\u4E0D\u8D85\u8FC7\u5269\u4F59\u672A\u5151\u73B0\u603B\u989D")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, {
    num: "3",
    title: "\u91CD\u70B9\u903B\u8F913\uFF1AERP\u8D44\u91D1\u6C60\u540C\u6B65 {ERP\u96C6\u6210}"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u610F\u4E49</strong>\uFF1A\u5BA1\u6279\u901A\u8FC7\u540E\u540C\u6B65\u8D44\u91D1\u6C60\u8C03\u6574\u5230ERP</li></ul><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u5177\u4F53\u903B\u8F91\u63CF\u8FF0</strong></li></ul><ul${_scopeId}><li${_scopeId}>\u7B2C1\u70B9\uFF1A\u7EC4\u88C5\u8D44\u91D1\u6C60\u6570\u636E\uFF08\u6E90\u5355\u636EID\u3001\u4EA4\u6613\u516C\u53F8\u3001\u5BA2\u6237\u3001\u91D1\u989D\u7B49\uFF09</li></ul><ul${_scopeId}><li${_scopeId}>\u7B2C2\u70B9\uFF1A\u989D\u5EA6\u5185sourceType=&quot;\u5E7F\u544A\u8D39\uFF08\u989D\u5185\uFF09&quot;\uFF0C\u989D\u5EA6\u5916sourceType=&quot;\u5E7F\u544A\u8D39\uFF08\u989D\u5916\uFF09&quot;</li></ul><ul${_scopeId}><li${_scopeId}>\u7B2C3\u70B9\uFF1A\u8C03\u7528ERP\u63A5\u53E3cashPoolAdjust\uFF0C\u8FD4\u56DEProcessStatus=S\u8868\u793A\u6210\u529F</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u610F\u4E49"),
              createTextVNode("\uFF1A\u5BA1\u6279\u901A\u8FC7\u540E\u540C\u6B65\u8D44\u91D1\u6C60\u8C03\u6574\u5230ERP")
            ])
          ]),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u5177\u4F53\u903B\u8F91\u63CF\u8FF0")
            ])
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u7B2C1\u70B9\uFF1A\u7EC4\u88C5\u8D44\u91D1\u6C60\u6570\u636E\uFF08\u6E90\u5355\u636EID\u3001\u4EA4\u6613\u516C\u53F8\u3001\u5BA2\u6237\u3001\u91D1\u989D\u7B49\uFF09")
          ]),
          createVNode("ul", null, [
            createVNode("li", null, '\u7B2C2\u70B9\uFF1A\u989D\u5EA6\u5185sourceType="\u5E7F\u544A\u8D39\uFF08\u989D\u5185\uFF09"\uFF0C\u989D\u5EA6\u5916sourceType="\u5E7F\u544A\u8D39\uFF08\u989D\u5916\uFF09"')
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u7B2C3\u70B9\uFF1A\u8C03\u7528ERP\u63A5\u53E3cashPoolAdjust\uFF0C\u8FD4\u56DEProcessStatus=S\u8868\u793A\u6210\u529F")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, {
    num: "4",
    title: "\u91CD\u70B9\u903B\u8F914\uFF1A\u989D\u5EA6\u5916\u9884\u7B97\u66F4\u65B0 {\u9884\u7B97\u63A7\u5236}"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u610F\u4E49</strong>\uFF1A\u989D\u5EA6\u5916\u5151\u73B0\u5BA1\u6279\u901A\u8FC7\u540E\u66F4\u65B0\u9884\u7B97\u5DF2\u4F7F\u7528\u91D1\u989D</li></ul><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u5177\u4F53\u903B\u8F91\u63CF\u8FF0</strong></li></ul><ul${_scopeId}><li${_scopeId}>\u7B2C1\u70B9\uFF1A\u6309\u5F53\u524D\u6708\u4EFD\u66F4\u65B0\u5BF9\u5E94\u7684\u9884\u7B97\u5B57\u6BB5\uFF08\u5F53\u5E74this_outlimit_bud_used_\u6708/\u6B21\u5E74next_outlimit_bud_used_\u6708\uFF09</li></ul><ul${_scopeId}><li${_scopeId}>\u7B2C2\u70B9\uFF1A\u4F7F\u7528\u91D1\u989D=\u539F\u5DF2\u4F7F\u7528+\u672C\u6B21\u7533\u8BF7\u91D1\u989D\xD7\u5151\u73B0\u6BD4\u4F8B\uFF0C\u518D\u9664\u4EE5\u7A0E\u7387</li></ul><ul${_scopeId}><li${_scopeId}>\u7B2C3\u70B9\uFF1A\u6700\u7EC8\u5151\u73B0(isEnd=2)\u65F6\u5C06\u989D\u5EA6\u5916\u9884\u7B97\u5269\u4F59\u7F6E\u4E3A0</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u610F\u4E49"),
              createTextVNode("\uFF1A\u989D\u5EA6\u5916\u5151\u73B0\u5BA1\u6279\u901A\u8FC7\u540E\u66F4\u65B0\u9884\u7B97\u5DF2\u4F7F\u7528\u91D1\u989D")
            ])
          ]),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u5177\u4F53\u903B\u8F91\u63CF\u8FF0")
            ])
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u7B2C1\u70B9\uFF1A\u6309\u5F53\u524D\u6708\u4EFD\u66F4\u65B0\u5BF9\u5E94\u7684\u9884\u7B97\u5B57\u6BB5\uFF08\u5F53\u5E74this_outlimit_bud_used_\u6708/\u6B21\u5E74next_outlimit_bud_used_\u6708\uFF09")
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u7B2C2\u70B9\uFF1A\u4F7F\u7528\u91D1\u989D=\u539F\u5DF2\u4F7F\u7528+\u672C\u6B21\u7533\u8BF7\u91D1\u989D\xD7\u5151\u73B0\u6BD4\u4F8B\uFF0C\u518D\u9664\u4EE5\u7A0E\u7387")
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u7B2C3\u70B9\uFF1A\u6700\u7EC8\u5151\u73B0(isEnd=2)\u65F6\u5C06\u989D\u5EA6\u5916\u9884\u7B97\u5269\u4F59\u7F6E\u4E3A0")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, {
    num: "5",
    title: "\u91CD\u70B9\u903B\u8F915\uFF1A\u7535\u5B50\u7B7E\u7AE0\u6821\u9A8C {\u7B7E\u7AE0}"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u610F\u4E49</strong>\uFF1A\u786E\u4FDD\u5355\u636E\u5DF2\u5B8C\u6210\u7535\u5B50\u7B7E\u7AE0\u624D\u80FD\u7EE7\u7EED\u6D41\u7A0B</li></ul><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u5177\u4F53\u903B\u8F91\u63CF\u8FF0</strong></li></ul><ul${_scopeId}><li${_scopeId}>\u7B2C1\u70B9\uFF1A\u6821\u9A8C\u7B7E\u7AE0\u72B6\u6001(signatureState)\u662F\u5426\u4E3A2\uFF08?\uFF08\u5DF2\u7B7E\u7AE0\uFF09</li></ul><ul${_scopeId}><li${_scopeId}>\u7B2C2\u70B9\uFF1A\u5DF2\u7B7E\u7AE0\u4F46\u9700\u91CD\u7B7E(isResign=2)\u65F6\u8FD4\u56DEfalse</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u610F\u4E49"),
              createTextVNode("\uFF1A\u786E\u4FDD\u5355\u636E\u5DF2\u5B8C\u6210\u7535\u5B50\u7B7E\u7AE0\u624D\u80FD\u7EE7\u7EED\u6D41\u7A0B")
            ])
          ]),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u5177\u4F53\u903B\u8F91\u63CF\u8FF0")
            ])
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u7B2C1\u70B9\uFF1A\u6821\u9A8C\u7B7E\u7AE0\u72B6\u6001(signatureState)\u662F\u5426\u4E3A2\uFF08?\uFF08\u5DF2\u7B7E\u7AE0\uFF09")
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u7B2C2\u70B9\uFF1A\u5DF2\u7B7E\u7AE0\u4F46\u9700\u91CD\u7B7E(isResign=2)\u65F6\u8FD4\u56DEfalse")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div><div id="detail-logic" style="${ssrRenderStyle({ "display": "none" })}"><div class="tab-pad"><div class="kl-wrap">`);
  _push(ssrRenderComponent(_component_KbCard, { title: "\u754C\u9762\u6A21\u57571\uFF1A\u53D1\u7968\u5151\u73B0\u5217\u8868\u9875" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5B57\u6BB5\u540D</th><th${_scopeId}>\u6570\u636E\u5E93\u5217\u540D</th><th${_scopeId}>\u7EC4\u4EF6</th><th${_scopeId}>\u4E1A\u52A1\u91CA\u4E49</th><th${_scopeId}>\u663E\u9690\u6761\u4EF6</th><th${_scopeId}>\u53D6\u503C/\u8D4B\u503C\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u5151\u73B0\u5355\u53F7</td><td${_scopeId}>FIN_FEE_CASHOUT_HEADER.FEE_CASHOUT_NO</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u5151\u73B0\u5355\u7F16\u53F7</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u81EA\u52A8\u751F\u6210</td></tr><tr${_scopeId}><td${_scopeId}>\u62A5\u9500\u5355\u53F7</td><td${_scopeId}>FIN_FEE_CASHOUT_HEADER.BX_NO</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u5173\u8054\u62A5\u9500\u5355\u53F7</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u4ECE\u62A5\u9500\u5355\u5E26\u5165</td></tr><tr${_scopeId}><td${_scopeId}>\u7ECF\u9500\u5546\u540D\u79F0</td><td${_scopeId}>FIN_FEE_CASHOUT_HEADER.CUST_NAME</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u7ECF\u9500\u5546\u540D\u79F0</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u4ECE\u62A5\u9500\u5355\u5E26\u5165</td></tr><tr${_scopeId}><td${_scopeId}>\u5151\u73B0\u7C7B\u578B</td><td${_scopeId}>FIN_FEE_CASHOUT_HEADER.CASHOUT_TYPE</td><td${_scopeId}>\u4E0B\u62C9\u9009\u62E9\u6846</td><td${_scopeId}>\u989D\u5EA6\u5185/\u989D\u5EA6\u5916</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>1=\u989D\u5EA6\u5185\uFF0C2=\u989D\u5EA6\u5916</td></tr><tr${_scopeId}><td${_scopeId}>\u672C\u6B21\u5151\u73B0\u91D1\u989D</td><td${_scopeId}>FIN_FEE_CASHOUT_HEADER.THIS_CASHOUT_AMT</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u672C\u6B21\u5151\u73B0\u91D1\u989D</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u7528\u6237\u8F93\u5165</td></tr><tr${_scopeId}><td${_scopeId}>\u5355\u636E\u72B6\u6001</td><td${_scopeId}>FIN_FEE_CASHOUT_HEADER.STAT</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u5355\u636E\u72B6\u6001</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>-</td></tr><tr${_scopeId}><td${_scopeId}>\u5BA1\u6279\u72B6\u6001</td><td${_scopeId}>FIN_FEE_CASHOUT_HEADER.HZ_APPROVE_STATUS</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u5BA1\u6279\u72B6\u6001</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>NEW/RUN/APPROVED</td></tr><tr${_scopeId}><td${_scopeId}>\u7533\u8BF7\u4EBA</td><td${_scopeId}>FIN_FEE_CASHOUT_HEADER.CREATOR</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u7533\u8BF7\u4EBA</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u7CFB\u7EDF\u81EA\u52A8\u8BB0\u5F55</td></tr><tr${_scopeId}><td${_scopeId}>\u7533\u8BF7\u65F6\u95F4</td><td${_scopeId}>FIN_FEE_CASHOUT_HEADER.CREATE_TIME</td><td${_scopeId}>\u65E5\u671F\u9009\u62E9\u6846</td><td${_scopeId}>\u7533\u8BF7\u65F6\u95F4</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u7CFB\u7EDF\u81EA\u52A8\u8BB0\u5F55</td></tr></tbody></table>`);
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
                createVNode("td", null, "\u5151\u73B0\u5355\u53F7"),
                createVNode("td", null, "FIN_FEE_CASHOUT_HEADER.FEE_CASHOUT_NO"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u5151\u73B0\u5355\u7F16\u53F7"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u81EA\u52A8\u751F\u6210")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u62A5\u9500\u5355\u53F7"),
                createVNode("td", null, "FIN_FEE_CASHOUT_HEADER.BX_NO"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u5173\u8054\u62A5\u9500\u5355\u53F7"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u4ECE\u62A5\u9500\u5355\u5E26\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7ECF\u9500\u5546\u540D\u79F0"),
                createVNode("td", null, "FIN_FEE_CASHOUT_HEADER.CUST_NAME"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u7ECF\u9500\u5546\u540D\u79F0"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u4ECE\u62A5\u9500\u5355\u5E26\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5151\u73B0\u7C7B\u578B"),
                createVNode("td", null, "FIN_FEE_CASHOUT_HEADER.CASHOUT_TYPE"),
                createVNode("td", null, "\u4E0B\u62C9\u9009\u62E9\u6846"),
                createVNode("td", null, "\u989D\u5EA6\u5185/\u989D\u5EA6\u5916"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "1=\u989D\u5EA6\u5185\uFF0C2=\u989D\u5EA6\u5916")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u672C\u6B21\u5151\u73B0\u91D1\u989D"),
                createVNode("td", null, "FIN_FEE_CASHOUT_HEADER.THIS_CASHOUT_AMT"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u672C\u6B21\u5151\u73B0\u91D1\u989D"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u7528\u6237\u8F93\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5355\u636E\u72B6\u6001"),
                createVNode("td", null, "FIN_FEE_CASHOUT_HEADER.STAT"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u5355\u636E\u72B6\u6001"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "-")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5BA1\u6279\u72B6\u6001"),
                createVNode("td", null, "FIN_FEE_CASHOUT_HEADER.HZ_APPROVE_STATUS"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u5BA1\u6279\u72B6\u6001"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "NEW/RUN/APPROVED")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7533\u8BF7\u4EBA"),
                createVNode("td", null, "FIN_FEE_CASHOUT_HEADER.CREATOR"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u7533\u8BF7\u4EBA"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u7CFB\u7EDF\u81EA\u52A8\u8BB0\u5F55")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7533\u8BF7\u65F6\u95F4"),
                createVNode("td", null, "FIN_FEE_CASHOUT_HEADER.CREATE_TIME"),
                createVNode("td", null, "\u65E5\u671F\u9009\u62E9\u6846"),
                createVNode("td", null, "\u7533\u8BF7\u65F6\u95F4"),
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
  _push(ssrRenderComponent(_component_KbCard, { title: "\u754C\u9762\u6A21\u57572\uFF1A\u53D1\u7968\u5151\u73B0\u8BE6\u60C5\u9875\uFF08\u5934\u8868\u5355\uFF09" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5B57\u6BB5\u540D</th><th${_scopeId}>\u6570\u636E\u5E93\u5217\u540D</th><th${_scopeId}>\u7EC4\u4EF6</th><th${_scopeId}>\u4E1A\u52A1\u91CA\u4E49</th><th${_scopeId}>\u663E\u9690\u6761\u4EF6</th><th${_scopeId}>\u53D6\u503C/\u8D4B\u503C\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u5151\u73B0\u5355\u53F7</td><td${_scopeId}>FIN_FEE_CASHOUT_HEADER.FEE_CASHOUT_NO</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u5151\u73B0\u5355\u7F16\u53F7</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u81EA\u52A8\u751F\u6210\uFF0C\u4E0D\u53EF\u7F16\u8F91</td></tr><tr${_scopeId}><td${_scopeId}>\u62A5\u9500\u5355\u53F7</td><td${_scopeId}>FIN_FEE_CASHOUT_HEADER.BX_NO</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u5173\u8054\u62A5\u9500\u5355\u53F7</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u4ECE\u62A5\u9500\u5355\u5E26\u5165</td></tr><tr${_scopeId}><td${_scopeId}>\u5151\u73B0\u7C7B\u578B</td><td${_scopeId}>FIN_FEE_CASHOUT_HEADER.CASHOUT_TYPE</td><td${_scopeId}>\u5355\u9009\u6846</td><td${_scopeId}>\u989D\u5EA6\u5185/\u989D\u5EA6\u5916</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>1=\u989D\u5EA6\u5185\uFF0C2=\u989D\u5EA6\u5916</td></tr><tr${_scopeId}><td${_scopeId}>\u6A21\u5757\u7C7B\u578B</td><td${_scopeId}>FIN_FEE_CASHOUT_HEADER.SAVE_TYPE</td><td${_scopeId}>\u9690\u85CF</td><td${_scopeId}>\u533A\u5206\u88C5\u4FEE/\u5E7F\u544A</td><td${_scopeId}>\u9690\u85CF</td><td${_scopeId}>1=\u95E8\u5E97\u88C5\u4FEE\u62A5\u9500\uFF0C2=\u5E7F\u544A\u8D39\u62A5\u9500</td></tr><tr${_scopeId}><td${_scopeId}>\u7ECF\u9500\u5546\u540D\u79F0</td><td${_scopeId}>FIN_FEE_CASHOUT_HEADER.CUST_NAME</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u7ECF\u9500\u5546\u540D\u79F0</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u4ECE\u62A5\u9500\u5355\u5E26\u5165</td></tr><tr${_scopeId}><td${_scopeId}>\u95E8\u5E97\u540D\u79F0</td><td${_scopeId}>FIN_FEE_CASHOUT_HEADER.TERMINAL_NAME</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u95E8\u5E97\u540D\u79F0</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u4ECE\u62A5\u9500\u5355\u5E26\u5165</td></tr><tr${_scopeId}><td${_scopeId}>\u53EF\u5151\u73B0\u603B\u989D</td><td${_scopeId}>FIN_FEE_CASHOUT_HEADER.TOTAL_CAN_CASHOUT_AMT</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u53EF\u5151\u73B0\u603B\u989D</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u4ECE\u62A5\u9500\u5355\u5E26\u5165</td></tr><tr${_scopeId}><td${_scopeId}>\u5DF2\u5151\u73B0\u603B\u989D</td><td${_scopeId}>FIN_FEE_CASHOUT_HEADER.USED_CASHOUT_AMT</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u5DF2\u5151\u73B0\u603B\u989D</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u81EA\u52A8\u8BA1\u7B97</td></tr><tr${_scopeId}><td${_scopeId}>\u5269\u4F59\u672A\u5151\u73B0\u603B\u989D</td><td${_scopeId}>FIN_FEE_CASHOUT_HEADER.SUR_CASHOUT_AMT</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u5269\u4F59\u672A\u5151\u73B0</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u81EA\u52A8\u8BA1\u7B97=\u53EF\u5151\u73B0\u603B\u989D-\u5DF2\u5151\u73B0\u603B\u989D</td></tr><tr${_scopeId}><td${_scopeId}>\u672C\u6B21\u5151\u73B0\u91D1\u989D</td><td${_scopeId}>FIN_FEE_CASHOUT_HEADER.THIS_CASHOUT_AMT</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u672C\u6B21\u5151\u73B0\u91D1\u989D</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u53EF\u7F16\u8F91\uFF0C\u9700&gt;0\u4E14\u4E0D\u8D85\u8FC7\u5269\u4F59\u53EF\u5151\u73B0</td></tr><tr${_scopeId}><td${_scopeId}>\u989D\u5EA6\u5185\u53EF\u7528\u91D1\u989D</td><td${_scopeId}>FIN_FEE_CASHOUT_HEADER.IN_CAN_USE_AMT</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u989D\u5EA6\u5185\u53EF\u7528\u91D1\u989D</td><td${_scopeId}>\u5151\u73B0\u7C7B\u578B=\u989D\u5EA6\u5185</td><td${_scopeId}>\u4ECE\u8D44\u6E90\u989D\u5EA6\u67E5\u8BE2</td></tr><tr${_scopeId}><td${_scopeId}>\u989D\u5EA6\u5916\u53EF\u7528\u91D1\u989D</td><td${_scopeId}>FIN_FEE_CASHOUT_HEADER.OUT_CAN_USE_AMT</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u989D\u5EA6\u5916\u53EF\u7528\u91D1\u989D</td><td${_scopeId}>\u5151\u73B0\u7C7B\u578B=\u989D\u5EA6\u5916</td><td${_scopeId}>\u4ECE\u989D\u5EA6\u5916\u9884\u7B97\u67E5\u8BE2</td></tr><tr${_scopeId}><td${_scopeId}>\u672C\u6B21\u6838\u9500\u91D1\u989D</td><td${_scopeId}>FIN_FEE_CASHOUT_HEADER.THIS_WRITEOFF_AMT</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u672C\u6B21\u6838\u9500\u91D1\u989D</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u53EF\u7F16\u8F91</td></tr><tr${_scopeId}><td${_scopeId}>\u652F\u4ED8\u65B9\u5F0F</td><td${_scopeId}>FIN_FEE_CASHOUT_HEADER.PAY_TYPE</td><td${_scopeId}>\u4E0B\u62C9\u9009\u62E9\u6846</td><td${_scopeId}>\u652F\u4ED8\u65B9\u5F0F</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u6765\u6E90\u503C\u96C6AE_PAY_TYPE</td></tr><tr${_scopeId}><td${_scopeId}>\u4EA4\u6613\u516C\u53F8</td><td${_scopeId}>FIN_FEE_CASHOUT_HEADER.TRADING_COMPANY_NAME</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u4EA4\u6613\u516C\u53F8</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u4ECE\u62A5\u9500\u5355\u5E26\u5165</td></tr><tr${_scopeId}><td${_scopeId}>\u5F00\u7968\u5355\u4F4D</td><td${_scopeId}>FIN_FEE_CASHOUT_HEADER.BILLING_UNIT_NAME</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u5F00\u7968\u5355\u4F4D</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u4ECE\u62A5\u9500\u5355\u5E26\u5165</td></tr><tr${_scopeId}><td${_scopeId}>\u6210\u672C\u4E2D\u5FC3</td><td${_scopeId}>FIN_FEE_CASHOUT_HEADER.COST_CENTER_NAME</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u6210\u672C\u4E2D\u5FC3</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>-</td></tr><tr${_scopeId}><td${_scopeId}>\u662F\u5426\u6700\u7EC8\u5151\u73B0</td><td${_scopeId}>FIN_FEE_CASHOUT_HEADER.IS_END</td><td${_scopeId}>\u5355\u9009\u6846</td><td${_scopeId}>\u662F\u5426\u6700\u7EC8\u5151\u73B0</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>2=\u662F</td></tr><tr${_scopeId}><td${_scopeId}>\u662F\u5426\u8BA1\u5165\u62A5\u8868</td><td${_scopeId}>FIN_FEE_CASHOUT_HEADER.IS_INCLUDED_REPORT</td><td${_scopeId}>\u5355\u9009\u6846</td><td${_scopeId}>\u662F\u5426\u8BA1\u5165\u5E7F\u544A\u8D39\u62A5\u8868</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>1=\u662F\uFF0C0=\u5426</td></tr><tr${_scopeId}><td${_scopeId}>\u4F9B\u5E94\u5546\u540D\u79F0</td><td${_scopeId}>FIN_FEE_CASHOUT_HEADER.SUPPLY_NAME</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u4F9B\u5E94\u5546\u540D\u79F0</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>-</td></tr><tr${_scopeId}><td${_scopeId}>\u5907\u6CE8</td><td${_scopeId}>FIN_FEE_CASHOUT_HEADER.NOTE</td><td${_scopeId}>\u6587\u672C\u57DF</td><td${_scopeId}>\u5907\u6CE8</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u53EF\u7F16\u8F91</td></tr><tr${_scopeId}><td${_scopeId}>\u5BA1\u6279\u72B6\u6001</td><td${_scopeId}>FIN_FEE_CASHOUT_HEADER.HZ_APPROVE_STATUS</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u5BA1\u6279\u72B6\u6001</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>NEW/RUN/APPROVED</td></tr><tr${_scopeId}><td${_scopeId}>\u7535\u5B50\u7B7E\u7AE0\u72B6\u6001</td><td${_scopeId}>FIN_FEE_CASHOUT_HEADER.SIGNATURE_STATE</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u7B7E\u7AE0\u72B6\u6001</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>2=\u5DF2\u7B7E\u7AE0</td></tr></tbody></table>`);
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
                createVNode("td", null, "\u5151\u73B0\u5355\u53F7"),
                createVNode("td", null, "FIN_FEE_CASHOUT_HEADER.FEE_CASHOUT_NO"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u5151\u73B0\u5355\u7F16\u53F7"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u81EA\u52A8\u751F\u6210\uFF0C\u4E0D\u53EF\u7F16\u8F91")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u62A5\u9500\u5355\u53F7"),
                createVNode("td", null, "FIN_FEE_CASHOUT_HEADER.BX_NO"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u5173\u8054\u62A5\u9500\u5355\u53F7"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u4ECE\u62A5\u9500\u5355\u5E26\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5151\u73B0\u7C7B\u578B"),
                createVNode("td", null, "FIN_FEE_CASHOUT_HEADER.CASHOUT_TYPE"),
                createVNode("td", null, "\u5355\u9009\u6846"),
                createVNode("td", null, "\u989D\u5EA6\u5185/\u989D\u5EA6\u5916"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "1=\u989D\u5EA6\u5185\uFF0C2=\u989D\u5EA6\u5916")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6A21\u5757\u7C7B\u578B"),
                createVNode("td", null, "FIN_FEE_CASHOUT_HEADER.SAVE_TYPE"),
                createVNode("td", null, "\u9690\u85CF"),
                createVNode("td", null, "\u533A\u5206\u88C5\u4FEE/\u5E7F\u544A"),
                createVNode("td", null, "\u9690\u85CF"),
                createVNode("td", null, "1=\u95E8\u5E97\u88C5\u4FEE\u62A5\u9500\uFF0C2=\u5E7F\u544A\u8D39\u62A5\u9500")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7ECF\u9500\u5546\u540D\u79F0"),
                createVNode("td", null, "FIN_FEE_CASHOUT_HEADER.CUST_NAME"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u7ECF\u9500\u5546\u540D\u79F0"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u4ECE\u62A5\u9500\u5355\u5E26\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u95E8\u5E97\u540D\u79F0"),
                createVNode("td", null, "FIN_FEE_CASHOUT_HEADER.TERMINAL_NAME"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u95E8\u5E97\u540D\u79F0"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u4ECE\u62A5\u9500\u5355\u5E26\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u53EF\u5151\u73B0\u603B\u989D"),
                createVNode("td", null, "FIN_FEE_CASHOUT_HEADER.TOTAL_CAN_CASHOUT_AMT"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u53EF\u5151\u73B0\u603B\u989D"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u4ECE\u62A5\u9500\u5355\u5E26\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5DF2\u5151\u73B0\u603B\u989D"),
                createVNode("td", null, "FIN_FEE_CASHOUT_HEADER.USED_CASHOUT_AMT"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u5DF2\u5151\u73B0\u603B\u989D"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u81EA\u52A8\u8BA1\u7B97")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5269\u4F59\u672A\u5151\u73B0\u603B\u989D"),
                createVNode("td", null, "FIN_FEE_CASHOUT_HEADER.SUR_CASHOUT_AMT"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u5269\u4F59\u672A\u5151\u73B0"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u81EA\u52A8\u8BA1\u7B97=\u53EF\u5151\u73B0\u603B\u989D-\u5DF2\u5151\u73B0\u603B\u989D")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u672C\u6B21\u5151\u73B0\u91D1\u989D"),
                createVNode("td", null, "FIN_FEE_CASHOUT_HEADER.THIS_CASHOUT_AMT"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u672C\u6B21\u5151\u73B0\u91D1\u989D"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u53EF\u7F16\u8F91\uFF0C\u9700>0\u4E14\u4E0D\u8D85\u8FC7\u5269\u4F59\u53EF\u5151\u73B0")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u989D\u5EA6\u5185\u53EF\u7528\u91D1\u989D"),
                createVNode("td", null, "FIN_FEE_CASHOUT_HEADER.IN_CAN_USE_AMT"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u989D\u5EA6\u5185\u53EF\u7528\u91D1\u989D"),
                createVNode("td", null, "\u5151\u73B0\u7C7B\u578B=\u989D\u5EA6\u5185"),
                createVNode("td", null, "\u4ECE\u8D44\u6E90\u989D\u5EA6\u67E5\u8BE2")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u989D\u5EA6\u5916\u53EF\u7528\u91D1\u989D"),
                createVNode("td", null, "FIN_FEE_CASHOUT_HEADER.OUT_CAN_USE_AMT"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u989D\u5EA6\u5916\u53EF\u7528\u91D1\u989D"),
                createVNode("td", null, "\u5151\u73B0\u7C7B\u578B=\u989D\u5EA6\u5916"),
                createVNode("td", null, "\u4ECE\u989D\u5EA6\u5916\u9884\u7B97\u67E5\u8BE2")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u672C\u6B21\u6838\u9500\u91D1\u989D"),
                createVNode("td", null, "FIN_FEE_CASHOUT_HEADER.THIS_WRITEOFF_AMT"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u672C\u6B21\u6838\u9500\u91D1\u989D"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u53EF\u7F16\u8F91")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u652F\u4ED8\u65B9\u5F0F"),
                createVNode("td", null, "FIN_FEE_CASHOUT_HEADER.PAY_TYPE"),
                createVNode("td", null, "\u4E0B\u62C9\u9009\u62E9\u6846"),
                createVNode("td", null, "\u652F\u4ED8\u65B9\u5F0F"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u6765\u6E90\u503C\u96C6AE_PAY_TYPE")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u4EA4\u6613\u516C\u53F8"),
                createVNode("td", null, "FIN_FEE_CASHOUT_HEADER.TRADING_COMPANY_NAME"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u4EA4\u6613\u516C\u53F8"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u4ECE\u62A5\u9500\u5355\u5E26\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5F00\u7968\u5355\u4F4D"),
                createVNode("td", null, "FIN_FEE_CASHOUT_HEADER.BILLING_UNIT_NAME"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u5F00\u7968\u5355\u4F4D"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u4ECE\u62A5\u9500\u5355\u5E26\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6210\u672C\u4E2D\u5FC3"),
                createVNode("td", null, "FIN_FEE_CASHOUT_HEADER.COST_CENTER_NAME"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u6210\u672C\u4E2D\u5FC3"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "-")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u662F\u5426\u6700\u7EC8\u5151\u73B0"),
                createVNode("td", null, "FIN_FEE_CASHOUT_HEADER.IS_END"),
                createVNode("td", null, "\u5355\u9009\u6846"),
                createVNode("td", null, "\u662F\u5426\u6700\u7EC8\u5151\u73B0"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "2=\u662F")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u662F\u5426\u8BA1\u5165\u62A5\u8868"),
                createVNode("td", null, "FIN_FEE_CASHOUT_HEADER.IS_INCLUDED_REPORT"),
                createVNode("td", null, "\u5355\u9009\u6846"),
                createVNode("td", null, "\u662F\u5426\u8BA1\u5165\u5E7F\u544A\u8D39\u62A5\u8868"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "1=\u662F\uFF0C0=\u5426")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u4F9B\u5E94\u5546\u540D\u79F0"),
                createVNode("td", null, "FIN_FEE_CASHOUT_HEADER.SUPPLY_NAME"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u4F9B\u5E94\u5546\u540D\u79F0"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "-")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5907\u6CE8"),
                createVNode("td", null, "FIN_FEE_CASHOUT_HEADER.NOTE"),
                createVNode("td", null, "\u6587\u672C\u57DF"),
                createVNode("td", null, "\u5907\u6CE8"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u53EF\u7F16\u8F91")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5BA1\u6279\u72B6\u6001"),
                createVNode("td", null, "FIN_FEE_CASHOUT_HEADER.HZ_APPROVE_STATUS"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u5BA1\u6279\u72B6\u6001"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "NEW/RUN/APPROVED")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7535\u5B50\u7B7E\u7AE0\u72B6\u6001"),
                createVNode("td", null, "FIN_FEE_CASHOUT_HEADER.SIGNATURE_STATE"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u7B7E\u7AE0\u72B6\u6001"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "2=\u5DF2\u7B7E\u7AE0")
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
        _push2(`<h4${_scopeId}>\u5F39\u7A971\uFF1A\u5E7F\u544A\u8D39\u62A5\u9500\u5355\u9009\u62E9\u5F39\u7A97\uFF08\u5355\u9009\uFF09</h4><table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5165\u53C2</th><th${_scopeId}></th><th${_scopeId}></th><th${_scopeId}></th><th${_scopeId}>\u6570\u636E\u8303\u56F4</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u5B57\u6BB5\u540D</td><td${_scopeId}>\u4E2D\u6587\u540D</td><td${_scopeId}>\u91CA\u4E49</td><td${_scopeId}>\u793A\u4F8B</td><td${_scopeId}></td></tr><tr${_scopeId}><td${_scopeId}>custId</td><td${_scopeId}>\u7ECF\u9500\u5546ID</td><td${_scopeId}>\u7ECF\u9500\u5546ID</td><td${_scopeId}>12345</td><td${_scopeId}>\u5DF2\u5BA1\u6279\u901A\u8FC7\u4E14\u6709\u5269\u4F59\u53EF\u5151\u73B0\u91D1\u989D\u7684\u5E7F\u544A\u8D39\u62A5\u9500\u5355</td></tr><tr${_scopeId}><td${_scopeId}>saveType</td><td${_scopeId}>\u6A21\u5757\u7C7B\u578B</td><td${_scopeId}>2=\u5E7F\u544A\u8D39\u62A5\u9500</td><td${_scopeId}>2</td><td${_scopeId}></td></tr></tbody></table><blockquote${_scopeId}>\u67E5\u8BE2SQL\uFF08\u540E\u7AEF\u63A5\u53E3Mapper\uFF1AFinFeeCashoutHeaderMapper\uFF09\uFF1A</blockquote><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> bx_id, bx_no, cust_name, total_can_cashout_amt, used_cashout_amt</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> fin_fee_bx_header </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> stat </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>7</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> save_type </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>2</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> cust_id </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> #{custId}</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> total_can_cashout_amt </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>-</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> used_cashout_amt </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>0</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div>`);
      } else {
        return [
          createVNode("h4", null, "\u5F39\u7A971\uFF1A\u5E7F\u544A\u8D39\u62A5\u9500\u5355\u9009\u62E9\u5F39\u7A97\uFF08\u5355\u9009\uFF09"),
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
                createVNode("td", null, "custId"),
                createVNode("td", null, "\u7ECF\u9500\u5546ID"),
                createVNode("td", null, "\u7ECF\u9500\u5546ID"),
                createVNode("td", null, "12345"),
                createVNode("td", null, "\u5DF2\u5BA1\u6279\u901A\u8FC7\u4E14\u6709\u5269\u4F59\u53EF\u5151\u73B0\u91D1\u989D\u7684\u5E7F\u544A\u8D39\u62A5\u9500\u5355")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "saveType"),
                createVNode("td", null, "\u6A21\u5757\u7C7B\u578B"),
                createVNode("td", null, "2=\u5E7F\u544A\u8D39\u62A5\u9500"),
                createVNode("td", null, "2"),
                createVNode("td")
              ])
            ])
          ]),
          createVNode("blockquote", null, "\u67E5\u8BE2SQL\uFF08\u540E\u7AEF\u63A5\u53E3Mapper\uFF1AFinFeeCashoutHeaderMapper\uFF09\uFF1A"),
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " bx_id, bx_no, cust_name, total_can_cashout_amt, used_cashout_amt")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " fin_fee_bx_header "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " stat "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "7"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " save_type "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "2"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " cust_id "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " #{custId}")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " total_can_cashout_amt "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "-"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " used_cashout_amt "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
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
  _push(ssrRenderComponent(_component_KbCard, { title: "\u5176\u4ED6\u6309\u94AE" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u6309\u94AE\u540D\u79F0</th><th${_scopeId}>\u6309\u94AE\u4F5C\u7528</th><th${_scopeId}>\u6240\u5728\u4F4D\u7F6E</th><th${_scopeId}>\u663E\u9690\u6761\u4EF6/\u53EF\u70B9\u51FB\u6761\u4EF6</th><th${_scopeId}>\u5F71\u54CD</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u65B0\u5EFA</td><td${_scopeId}>\u65B0\u5EFA\u53D1\u7968\u5151\u73B0</td><td${_scopeId}>\u5217\u8868\u9875</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u8DF3\u8F6C\u65B0\u5EFA\u9875\u9762</td></tr><tr${_scopeId}><td${_scopeId}>\u4FDD\u5B58</td><td${_scopeId}>\u4FDD\u5B58\u5151\u73B0\u5355</td><td${_scopeId}>\u8BE6\u60C5\u9875</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u4FDD\u5B58\u5230FIN_FEE_CASHOUT_HEADER</td></tr><tr${_scopeId}><td${_scopeId}>\u63D0\u4EA4</td><td${_scopeId}>\u63D0\u4EA4\u5BA1\u6279</td><td${_scopeId}>\u8BE6\u60C5\u9875</td><td${_scopeId}>\u5BA1\u6279\u72B6\u6001\u4E3ANEW\u4E14\u7B7E\u7AE0\u901A\u8FC7</td><td${_scopeId}>\u6821\u9A8C\u91D1\u989D\uFF0C\u53D1\u8D77\u5DE5\u4F5C\u6D41</td></tr><tr${_scopeId}><td${_scopeId}>\u6253\u5370</td><td${_scopeId}>\u6253\u5370\u5151\u73B0\u5355</td><td${_scopeId}>\u8BE6\u60C5\u9875</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u8C03\u7528detail/print\u63A5\u53E3</td></tr><tr${_scopeId}><td${_scopeId}>\u7535\u5B50\u7B7E\u7AE0</td><td${_scopeId}>\u53D1\u8D77\u7535\u5B50\u7B7E\u7AE0</td><td${_scopeId}>\u8BE6\u60C5\u9875</td><td${_scopeId}>\u5BA1\u6279\u72B6\u6001\u4E3ANEW</td><td${_scopeId}>\u66F4\u65B0\u7B7E\u7AE0\u72B6\u6001</td></tr></tbody></table><h4${_scopeId}>\u6309\u94AE1\uFF1A\u63D0\u4EA4\uFF08\u8BE6\u60C5\u9875\uFF09</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u5BA1\u6279\u72B6\u6001\u4E3ANEW\u4E14\u7B7E\u7AE0\u6821\u9A8C\u901A\u8FC7</li><li${_scopeId}><strong${_scopeId}>\u6267\u884C\u903B\u8F91</strong>\uFF1A</li><li${_scopeId}>\u7B2C1\u70B9\uFF1A\u6821\u9A8C;\u9A8C\u53D1\u7968\u91D1\u989D&gt;0\uFF08\u652F\u4ED8\u65B9\u5F0F\u975E3\u65F6\uFF09</li><li${_scopeId}>\u7B2C2\u70B9\uFF1A\u6821\u9A8C\u672C\u6B21\u5151\u73B0\u91D1\u989D&lt;=\u5269\u4F59\u53EF\u5151\u73B0\u91D1\u989D</li><li${_scopeId}>\u7B2C3\u70B9\uFF1A\u989D\u5EA6\u5185\u6821\u9A8C\u672C\u6B21\u6838\u9500\u91D1\u989D&lt;=\u989D\u5EA6\u5185\u53EF\u7528\u91D1\u989D</li><li${_scopeId}>\u7B2C4\u70B9\uFF1A\u989D\u5EA6\u5916\u6821\u9A8C\u672C\u6B21\u5151\u73B0\u91D1\u989D&lt;=\u989D\u5EA6\u5916\u53EF\u7528\u91D1\u989D-\u5DF2\u5360\u7528\u91D1\u989D</li><li${_scopeId}>\u7B2C5\u70B9\uFF1A\u53D1\u8D77\u5DE5\u4F5C\u6D41ADJ_GGBXFPDX</li><li${_scopeId}><strong${_scopeId}>\u63A5\u53E3\u8C03\u7528</strong>\uFF1A\u5DE5\u4F5C\u6D41\u53D1\u8D77\u63A5\u53E3</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> fee_cashout_id, fee_cashout_no, cashout_type, this_cashout_amt, total_can_cashout_amt,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>       in_can_use_amt, out_can_use_amt, hz_approve_status</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> fin_fee_cashout_header </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> fee_cashout_id </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> {id};</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u6309\u94AE2\uFF1A\u6253\u5370\uFF08\u8BE6\u60C5\u9875\uFF09</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u5E38\u663E</li><li${_scopeId}><strong${_scopeId}>\u6267\u884C\u903B\u8F91</strong>\uFF1A</li><li${_scopeId}>\u7B2C1\u70B9\uFF1A\u67E5\u8BE2\u5151\u73B0\u5355\u5934\u8868\u548C\u884C\u8868\u6570\u636E</li><li${_scopeId}>\u7B2C2\u70B9\uFF1A\u7FFB\u8BD1\u503C\u96C6\uFF08\u5151\u73B0\u7C7B\u578B\u3001\u652F\u4ED8\u65B9\u5F0F\u3001\u53D1\u7968\u7C7B\u578B\uFF09</li><li${_scopeId}>\u7B2C3\u70B9\uFF1A\u67E5\u8BE2\u6D41\u7A0B\u5BA1\u6279\u5386\u53F2</li><li${_scopeId}><strong${_scopeId}>\u63A5\u53E3\u8C03\u7528</strong>\uFF1AGET /v1/{organizationId}/fin-fee-cashout-headers/detail/print</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A\u65E0</li></ul>`);
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
                createVNode("td", null, "\u65B0\u5EFA\u53D1\u7968\u5151\u73B0"),
                createVNode("td", null, "\u5217\u8868\u9875"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u8DF3\u8F6C\u65B0\u5EFA\u9875\u9762")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u4FDD\u5B58"),
                createVNode("td", null, "\u4FDD\u5B58\u5151\u73B0\u5355"),
                createVNode("td", null, "\u8BE6\u60C5\u9875"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u4FDD\u5B58\u5230FIN_FEE_CASHOUT_HEADER")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u63D0\u4EA4"),
                createVNode("td", null, "\u63D0\u4EA4\u5BA1\u6279"),
                createVNode("td", null, "\u8BE6\u60C5\u9875"),
                createVNode("td", null, "\u5BA1\u6279\u72B6\u6001\u4E3ANEW\u4E14\u7B7E\u7AE0\u901A\u8FC7"),
                createVNode("td", null, "\u6821\u9A8C\u91D1\u989D\uFF0C\u53D1\u8D77\u5DE5\u4F5C\u6D41")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6253\u5370"),
                createVNode("td", null, "\u6253\u5370\u5151\u73B0\u5355"),
                createVNode("td", null, "\u8BE6\u60C5\u9875"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u8C03\u7528detail/print\u63A5\u53E3")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7535\u5B50\u7B7E\u7AE0"),
                createVNode("td", null, "\u53D1\u8D77\u7535\u5B50\u7B7E\u7AE0"),
                createVNode("td", null, "\u8BE6\u60C5\u9875"),
                createVNode("td", null, "\u5BA1\u6279\u72B6\u6001\u4E3ANEW"),
                createVNode("td", null, "\u66F4\u65B0\u7B7E\u7AE0\u72B6\u6001")
              ])
            ])
          ]),
          createVNode("h4", null, "\u6309\u94AE1\uFF1A\u63D0\u4EA4\uFF08\u8BE6\u60C5\u9875\uFF09"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u5BA1\u6279\u72B6\u6001\u4E3ANEW\u4E14\u7B7E\u7AE0\u6821\u9A8C\u901A\u8FC7")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u6267\u884C\u903B\u8F91"),
              createTextVNode("\uFF1A")
            ]),
            createVNode("li", null, "\u7B2C1\u70B9\uFF1A\u6821\u9A8C;\u9A8C\u53D1\u7968\u91D1\u989D>0\uFF08\u652F\u4ED8\u65B9\u5F0F\u975E3\u65F6\uFF09"),
            createVNode("li", null, "\u7B2C2\u70B9\uFF1A\u6821\u9A8C\u672C\u6B21\u5151\u73B0\u91D1\u989D<=\u5269\u4F59\u53EF\u5151\u73B0\u91D1\u989D"),
            createVNode("li", null, "\u7B2C3\u70B9\uFF1A\u989D\u5EA6\u5185\u6821\u9A8C\u672C\u6B21\u6838\u9500\u91D1\u989D<=\u989D\u5EA6\u5185\u53EF\u7528\u91D1\u989D"),
            createVNode("li", null, "\u7B2C4\u70B9\uFF1A\u989D\u5EA6\u5916\u6821\u9A8C\u672C\u6B21\u5151\u73B0\u91D1\u989D<=\u989D\u5EA6\u5916\u53EF\u7528\u91D1\u989D-\u5DF2\u5360\u7528\u91D1\u989D"),
            createVNode("li", null, "\u7B2C5\u70B9\uFF1A\u53D1\u8D77\u5DE5\u4F5C\u6D41ADJ_GGBXFPDX"),
            createVNode("li", null, [
              createVNode("strong", null, "\u63A5\u53E3\u8C03\u7528"),
              createTextVNode("\uFF1A\u5DE5\u4F5C\u6D41\u53D1\u8D77\u63A5\u53E3")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " fee_cashout_id, fee_cashout_no, cashout_type, this_cashout_amt, total_can_cashout_amt,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "       in_can_use_amt, out_can_use_amt, hz_approve_status")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " fin_fee_cashout_header "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " fee_cashout_id "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " {id};")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u6309\u94AE2\uFF1A\u6253\u5370\uFF08\u8BE6\u60C5\u9875\uFF09"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u5E38\u663E")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u6267\u884C\u903B\u8F91"),
              createTextVNode("\uFF1A")
            ]),
            createVNode("li", null, "\u7B2C1\u70B9\uFF1A\u67E5\u8BE2\u5151\u73B0\u5355\u5934\u8868\u548C\u884C\u8868\u6570\u636E"),
            createVNode("li", null, "\u7B2C2\u70B9\uFF1A\u7FFB\u8BD1\u503C\u96C6\uFF08\u5151\u73B0\u7C7B\u578B\u3001\u652F\u4ED8\u65B9\u5F0F\u3001\u53D1\u7968\u7C7B\u578B\uFF09"),
            createVNode("li", null, "\u7B2C3\u70B9\uFF1A\u67E5\u8BE2\u6D41\u7A0B\u5BA1\u6279\u5386\u53F2"),
            createVNode("li", null, [
              createVNode("strong", null, "\u63A5\u53E3\u8C03\u7528"),
              createTextVNode("\uFF1AGET /v1/{organizationId}/fin-fee-cashout-headers/detail/print")
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
        _push2(`<ul${_scopeId}><li${_scopeId}>\u6821\u9A8C1\uFF1A\u53D1\u7968\u91D1\u989D\u6821\u9A8C \u2014\u2014 \u786E\u4FDD\u53D1\u7968\u91D1\u989D\u5927\u4E8E0</li></ul><ul${_scopeId}><li${_scopeId}>\u8BE6\u7EC6\u903B\u8F91</li></ul><p${_scopeId}>- \u7B2C1\u70B9\uFF1A\u652F\u4ED8\u65B9\u5F0F\u975E3\uFF08\u975E\u865A\u62DF\u6536\u6B3E\uFF09\u65F6\uFF0C\u5B9E\u9645\u5151\u73B0\u91D1\u989D(factInvoiceAmt)\u5FC5\u987B&gt;0</p><p${_scopeId}>- \u7B2C2\u70B9\uFF1A\u91D1\u989D&lt;=0\u65F6\u62A5\u9519&quot;\u53D1\u7968\u91D1\u989D\u5F02\u5E38\uFF0C\u8BF7\u68C0\u67E5\uFF01&quot;</p><ul${_scopeId}><li${_scopeId}>\u7CFB\u7EDF\u4F53\u73B0\uFF1A\u963B\u65AD\u6027\u62A5\u9519</li></ul><ul${_scopeId}><li${_scopeId}>\u6392\u67E5SQL\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> pay_type, fact_invoice_amt </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> fin_fee_cashout_header </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> fee_cashout_id </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> {id};</span></span>
<span class="line"${_scopeId}></span></code></pre></div><ul${_scopeId}><li${_scopeId}>\u6821\u9A8C2\uFF1A\u5269\u4F59\u53EF\u5151\u73B0\u91D1\u989D\u6821\u9A8C \u2014\u2014 \u786E\u4FDD\u5151\u73B0\u91D1\u989D\u4E0D\u8D85\u5269\u4F59</li></ul><ul${_scopeId}><li${_scopeId}>\u8BE6\u7EC6\u903B\u8F91</li></ul><p${_scopeId}>- \u7B2C1\u70B9\uFF1A\u5269\u4F59\u53EF\u5151\u73B0\u91D1\u989D=\u53EF\u5151\u73B0\u603B\u989D-\u5DF2\u5151\u73B0\u603B\u989D</p><p${_scopeId}>- \u7B2C2\u70B9\uFF1A\u672C\u6B21\u5151\u73B0\u91D1\u989D&gt;\u5269\u4F59\u53EF\u5151\u73B0\u91D1\u989D\u65F6\u62A5\u9519</p><ul${_scopeId}><li${_scopeId}>\u7CFB\u7EDF\u4F53\u73B0\uFF1A\u963B\u65AD\u6027\u62A5\u9519</li></ul><ul${_scopeId}><li${_scopeId}>\u6392\u67E5SQL\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> total_can_cashout_amt, used_cashout_amt, this_cashout_amt </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> fin_fee_cashout_header </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> fee_cashout_id </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> {id};</span></span>
<span class="line"${_scopeId}></span></code></pre></div><ul${_scopeId}><li${_scopeId}>\u6821\u9A8C3\uFF1A\u989D\u5EA6\u5185\u53EF\u7528\u91D1\u989D\u6821\u9A8C \u2014\u2014 \u989D\u5EA6\u5185\u6838\u9500\u91D1\u989D\u4E0D\u8D85\u53EF\u7528</li></ul><ul${_scopeId}><li${_scopeId}>\u8BE6\u7EC6\u903B\u8F91</li></ul><p${_scopeId}>- \u7B2C1\u70B9\uFF1A\u5151\u73B0\u7C7B\u578B=\u989D\u5EA6\u5185\u65F6\uFF0C\u672C\u6B21\u6838\u9500\u91D1\u989D&lt;=\u989D\u5EA6\u5185\u53EF\u7528\u91D1\u989D</p><p${_scopeId}>- \u7B2C2\u70B9\uFF1A\u8D85\u51FA\u65F6\u62A5\u9519&quot;\u672C\u6B21\u6838\u9500\u91D1\u989D\u4E0D\u53EF\u8D85\u8FC7\u989D\u5EA6\u5185\u53EF\u7528\u91D1\u989D&quot;</p><ul${_scopeId}><li${_scopeId}>\u7CFB\u7EDF\u4F53\u73B0\uFF1A\u963B\u65AD\u6027\u62A5\u9519</li></ul><ul${_scopeId}><li${_scopeId}>\u6392\u67E5SQL\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> this_writeoff_amt, in_can_use_amt </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> fin_fee_cashout_header </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> fee_cashout_id </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> {id} </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> cashout_type </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>1</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><ul${_scopeId}><li${_scopeId}>\u6821\u9A8C4\uFF1A\u989D\u5EA6\u5916\u53EF\u7528\u91D1\u989D\u6821\u9A8C \u2014\u2014 \u989D\u5EA6\u5916\u5151\u73B0\u91D1\u989D\u4E0D\u8D85\u53EF\u7528</li></ul><ul${_scopeId}><li${_scopeId}>\u8BE6\u7EC6\u903B\u8F91</li></ul><p${_scopeId}>- \u7B2C1\u70B9\uFF1A\u5151\u73B0\u7C7B\u578B=\u989D\u5EA6\u5916\u65F6\uFF0C\u672C\u6B21\u5151\u73B0\u91D1\u989D&lt;=\u989D\u5EA6\u5916\u53EF\u7528\u91D1\u989D-\u5DF2\u5360\u7528\u91D1\u989D</p><p${_scopeId}>- \u7B2C2\u70B9\uFF1A\u8D85\u51FA\u65F6\u62A5\u9519&quot;\u989D\u5EA6\u5916\u91D1\u989D\u5DF2\u5360\u7528&quot;</p><ul${_scopeId}><li${_scopeId}>\u7CFB\u7EDF\u4F53\u73B0\uFF1A\u963B\u65AD\u6027\u62A5\u9519</li></ul><ul${_scopeId}><li${_scopeId}>\u6392\u67E5SQL\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> this_cashout_amt, out_can_use_amt </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> fin_fee_cashout_header </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> fee_cashout_id </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> {id} </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> cashout_type </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>2</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, "\u6821\u9A8C1\uFF1A\u53D1\u7968\u91D1\u989D\u6821\u9A8C \u2014\u2014 \u786E\u4FDD\u53D1\u7968\u91D1\u989D\u5927\u4E8E0")
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u8BE6\u7EC6\u903B\u8F91")
          ]),
          createVNode("p", null, "- \u7B2C1\u70B9\uFF1A\u652F\u4ED8\u65B9\u5F0F\u975E3\uFF08\u975E\u865A\u62DF\u6536\u6B3E\uFF09\u65F6\uFF0C\u5B9E\u9645\u5151\u73B0\u91D1\u989D(factInvoiceAmt)\u5FC5\u987B>0"),
          createVNode("p", null, '- \u7B2C2\u70B9\uFF1A\u91D1\u989D<=0\u65F6\u62A5\u9519"\u53D1\u7968\u91D1\u989D\u5F02\u5E38\uFF0C\u8BF7\u68C0\u67E5\uFF01"'),
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " pay_type, fact_invoice_amt "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " fin_fee_cashout_header "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " fee_cashout_id "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " {id};")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u6821\u9A8C2\uFF1A\u5269\u4F59\u53EF\u5151\u73B0\u91D1\u989D\u6821\u9A8C \u2014\u2014 \u786E\u4FDD\u5151\u73B0\u91D1\u989D\u4E0D\u8D85\u5269\u4F59")
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u8BE6\u7EC6\u903B\u8F91")
          ]),
          createVNode("p", null, "- \u7B2C1\u70B9\uFF1A\u5269\u4F59\u53EF\u5151\u73B0\u91D1\u989D=\u53EF\u5151\u73B0\u603B\u989D-\u5DF2\u5151\u73B0\u603B\u989D"),
          createVNode("p", null, "- \u7B2C2\u70B9\uFF1A\u672C\u6B21\u5151\u73B0\u91D1\u989D>\u5269\u4F59\u53EF\u5151\u73B0\u91D1\u989D\u65F6\u62A5\u9519"),
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " total_can_cashout_amt, used_cashout_amt, this_cashout_amt "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " fin_fee_cashout_header "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " fee_cashout_id "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " {id};")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u6821\u9A8C3\uFF1A\u989D\u5EA6\u5185\u53EF\u7528\u91D1\u989D\u6821\u9A8C \u2014\u2014 \u989D\u5EA6\u5185\u6838\u9500\u91D1\u989D\u4E0D\u8D85\u53EF\u7528")
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u8BE6\u7EC6\u903B\u8F91")
          ]),
          createVNode("p", null, "- \u7B2C1\u70B9\uFF1A\u5151\u73B0\u7C7B\u578B=\u989D\u5EA6\u5185\u65F6\uFF0C\u672C\u6B21\u6838\u9500\u91D1\u989D<=\u989D\u5EA6\u5185\u53EF\u7528\u91D1\u989D"),
          createVNode("p", null, '- \u7B2C2\u70B9\uFF1A\u8D85\u51FA\u65F6\u62A5\u9519"\u672C\u6B21\u6838\u9500\u91D1\u989D\u4E0D\u53EF\u8D85\u8FC7\u989D\u5EA6\u5185\u53EF\u7528\u91D1\u989D"'),
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " this_writeoff_amt, in_can_use_amt "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " fin_fee_cashout_header "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " fee_cashout_id "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " {id} "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " cashout_type "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "1"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u6821\u9A8C4\uFF1A\u989D\u5EA6\u5916\u53EF\u7528\u91D1\u989D\u6821\u9A8C \u2014\u2014 \u989D\u5EA6\u5916\u5151\u73B0\u91D1\u989D\u4E0D\u8D85\u53EF\u7528")
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u8BE6\u7EC6\u903B\u8F91")
          ]),
          createVNode("p", null, "- \u7B2C1\u70B9\uFF1A\u5151\u73B0\u7C7B\u578B=\u989D\u5EA6\u5916\u65F6\uFF0C\u672C\u6B21\u5151\u73B0\u91D1\u989D<=\u989D\u5EA6\u5916\u53EF\u7528\u91D1\u989D-\u5DF2\u5360\u7528\u91D1\u989D"),
          createVNode("p", null, '- \u7B2C2\u70B9\uFF1A\u8D85\u51FA\u65F6\u62A5\u9519"\u989D\u5EA6\u5916\u91D1\u989D\u5DF2\u5360\u7528"'),
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " this_cashout_amt, out_can_use_amt "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " fin_fee_cashout_header "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " fee_cashout_id "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " {id} "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " cashout_type "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "2"),
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
        _push2(`<ul${_scopeId}><li${_scopeId}>\u6821\u9A8C1\uFF1A\u5269\u4F59\u672A\u5151\u73B0\u603B\u989D\u6821\u9A8C \u2014\u2014 \u786E\u4FDD\u7533\u8BF7\u91D1\u989D\u4E0D\u8D85\u5269\u4F59</li></ul><ul${_scopeId}><li${_scopeId}>\u8BE6\u7EC6\u903B\u8F91</li></ul><p${_scopeId}>- \u7B2C1\u70B9\uFF1A\u67E5\u8BE2\u5DF2\u4F7F\u7528\u5151\u73B0\u91D1\u989D</p><p${_scopeId}>- \u7B2C2\u70B9\uFF1A\u53EF\u5151\u73B0\u603B\u989D-\u5DF2\u4F7F\u7528-\u672C\u6B21\u5151\u73B0&lt;0\u65F6\u62A5\u9519</p><ul${_scopeId}><li${_scopeId}>\u7CFB\u7EDF\u4F53\u73B0\uFF1A\u963B\u65AD\u6027\u62A5\u9519</li></ul><ul${_scopeId}><li${_scopeId}>\u6392\u67E5SQL\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> total_can_cashout_amt, this_cashout_amt </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> fin_fee_cashout_header </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> fee_cashout_id </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> {id};</span></span>
<span class="line"${_scopeId}></span></code></pre></div>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, "\u6821\u9A8C1\uFF1A\u5269\u4F59\u672A\u5151\u73B0\u603B\u989D\u6821\u9A8C \u2014\u2014 \u786E\u4FDD\u7533\u8BF7\u91D1\u989D\u4E0D\u8D85\u5269\u4F59")
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u8BE6\u7EC6\u903B\u8F91")
          ]),
          createVNode("p", null, "- \u7B2C1\u70B9\uFF1A\u67E5\u8BE2\u5DF2\u4F7F\u7528\u5151\u73B0\u91D1\u989D"),
          createVNode("p", null, "- \u7B2C2\u70B9\uFF1A\u53EF\u5151\u73B0\u603B\u989D-\u5DF2\u4F7F\u7528-\u672C\u6B21\u5151\u73B0<0\u65F6\u62A5\u9519"),
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " total_can_cashout_amt, this_cashout_amt "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " fin_fee_cashout_header "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " fee_cashout_id "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " {id};")
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
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>                   \u56DE\u5230NEW</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}></span></span></code></pre></div><h4${_scopeId}>\u72B6\u6001\u673A\u5217\u8868</h4><table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u72B6\u6001\u673A\u540D\u79F0</th><th${_scopeId}>\u72B6\u6001\u91CA\u4E49</th><th${_scopeId}>\u53EF\u6267\u884C\u7684\u64CD\u4F5C</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>NEW</td><td${_scopeId}>\u65B0\u5EFA\uFF0C\u672A\u63D0\u4EA4</td><td${_scopeId}>\u7F16\u8F91\u3001\u4FDD\u5B58\u3001\u63D0\u4EA4\u3001\u7535\u5B50\u7B7E\u7AE0</td></tr><tr${_scopeId}><td${_scopeId}>RUN</td><td${_scopeId}>\u5BA1\u6279\u4E2D\uFF0C\u5DE5\u4F5C\u6D41\u8FD0\u884C\u4E2D</td><td${_scopeId}>\u65E0\uFF08\u7B49\u5F85\u5BA1\u6279\u7ED3\u679C\uFF09</td></tr><tr${_scopeId}><td${_scopeId}>APPROVED</td><td${_scopeId}>\u5DF2\u5BA1\u6838\uFF0C\u5BA1\u6279\u901A\u8FC7</td><td${_scopeId}>\u6253\u5370</td></tr></tbody></table>`);
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "                   \u56DE\u5230NEW")
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
                createVNode("td", null, "\u7F16\u8F91\u3001\u4FDD\u5B58\u3001\u63D0\u4EA4\u3001\u7535\u5B50\u7B7E\u7AE0")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "RUN"),
                createVNode("td", null, "\u5BA1\u6279\u4E2D\uFF0C\u5DE5\u4F5C\u6D41\u8FD0\u884C\u4E2D"),
                createVNode("td", null, "\u65E0\uFF08\u7B49\u5F85\u5BA1\u6279\u7ED3\u679C\uFF09")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "APPROVED"),
                createVNode("td", null, "\u5DF2\u5BA1\u6838\uFF0C\u5BA1\u6279\u901A\u8FC7"),
                createVNode("td", null, "\u6253\u5370")
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, { title: "\u88681\uFF1AFIN_FEE_CASHOUT_HEADER\uFF08\u62A5\u9500\u53D1\u7968\u5151\u73B0\u4E3B\u8868\uFF09" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5B57\u6BB5\u540D</th><th${_scopeId}>\u7C7B\u578B</th><th${_scopeId}>\u91CA\u4E49</th><th${_scopeId}>\u5BF9\u5E94\u754C\u9762\u5B57\u6BB5</th><th${_scopeId}>\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>FEE_CASHOUT_ID</td><td${_scopeId}>NUMBER</td><td${_scopeId}>\u5151\u73B0ID</td><td${_scopeId}>-</td><td${_scopeId}>\u4E3B\u952E\uFF0C\u81EA\u589E</td></tr><tr${_scopeId}><td${_scopeId}>FEE_CASHOUT_NO</td><td${_scopeId}>VARCHAR2</td><td${_scopeId}>\u5151\u73B0\u5355\u53F7</td><td${_scopeId}>\u5151\u73B0\u5355\u53F7</td><td${_scopeId}>\u81EA\u52A8\u751F\u6210</td></tr><tr${_scopeId}><td${_scopeId}>BX_ID</td><td${_scopeId}>NUMBER</td><td${_scopeId}>\u62A5\u9500\u5355ID</td><td${_scopeId}>-</td><td${_scopeId}>\u5173\u8054\u62A5\u9500\u5355</td></tr><tr${_scopeId}><td${_scopeId}>BX_NO</td><td${_scopeId}>VARCHAR2</td><td${_scopeId}>\u62A5\u9500\u5355\u53F7</td><td${_scopeId}>\u62A5\u9500\u5355\u53F7</td><td${_scopeId}>\u4ECE\u62A5\u9500\u5355\u5E26\u5165</td></tr><tr${_scopeId}><td${_scopeId}>CASHOUT_TYPE</td><td${_scopeId}>NUMBER</td><td${_scopeId}>\u5151\u73B0\u7C7B\u578B</td><td${_scopeId}>\u5151\u73B0\u7C7B\u578B</td><td${_scopeId}>1=\u989D\u5EA6\u5185\uFF0C2=\u989D\u5EA6\u5916</td></tr><tr${_scopeId}><td${_scopeId}>SAVE_TYPE</td><td${_scopeId}>NUMBER</td><td${_scopeId}>\u6A21\u5757\u7C7B\u578B</td><td${_scopeId}>\u6A21\u5757\u7C7B\u578B</td><td${_scopeId}>1=\u95E8\u5E97\u88C5\u4FEE\u62A5\u9500\uFF0C2=\u5E7F\u544A\u8D39\u62A5\u9500</td></tr><tr${_scopeId}><td${_scopeId}>TOTAL_CAN_CASHOUT_AMT</td><td${_scopeId}>DECIMAL</td><td${_scopeId}>\u53EF\u5151\u73B0\u603B\u989D</td><td${_scopeId}>\u53EF\u5151\u73B0\u603B\u989D</td><td${_scopeId}>\u4ECE\u62A5\u9500\u5355\u5E26\u5165</td></tr><tr${_scopeId}><td${_scopeId}>USED_CASHOUT_AMT</td><td${_scopeId}>NUMBER</td><td${_scopeId}>\u5DF2\u5151\u73B0\u603B\u989D</td><td${_scopeId}>\u5DF2\u5151\u73B0\u603B\u989D</td><td${_scopeId}>\u81EA\u52A8\u8BA1\u7B97</td></tr></tbody></table><table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>SUR_CASHOUT_AMT</th><th${_scopeId}>NUMBER</th><th${_scopeId}>\u5269\u4F59\u672A\u5151\u73B0\u603B\u989D</th><th${_scopeId}>\u5269\u4F59\u672A\u5151\u73B0\u603B\u989D</th><th${_scopeId}>=\u53EF\u5151\u73B0\u603B\u989D-\u5DF2\u5151\u73B0\u603B\u989D</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>CUST_ID</td><td${_scopeId}>NUMBER</td><td${_scopeId}>\u7ECF\u9500\u5546ID</td><td${_scopeId}>-</td><td${_scopeId}>\u4ECE\u62A5\u9500\u5355\u5E26\u5165</td></tr><tr${_scopeId}><td${_scopeId}>CUST_NAME</td><td${_scopeId}>VARCHAR2</td><td${_scopeId}>\u7ECF\u9500\u5546\u540D\u79F0</td><td${_scopeId}>\u7ECF\u9500\u5546\u540D\u79F0</td><td${_scopeId}>\u4ECE\u62A5\u9500\u5355\u5E26\u5165</td></tr><tr${_scopeId}><td${_scopeId}>BUD_YEAR</td><td${_scopeId}>VARCHAR2</td><td${_scopeId}>\u9884\u7B97\u5E74\u5EA6</td><td${_scopeId}>-</td><td${_scopeId}>\u4ECE\u62A5\u9500\u5355\u5E26\u5165</td></tr><tr${_scopeId}><td${_scopeId}>STAT</td><td${_scopeId}>NUMBER</td><td${_scopeId}>\u5355\u636E\u72B6\u6001</td><td${_scopeId}>\u5355\u636E\u72B6\u6001</td><td${_scopeId}>-</td></tr><tr${_scopeId}><td${_scopeId}>IN_CAN_USE_AMT</td><td${_scopeId}>NUMBER</td><td${_scopeId}>\u989D\u5EA6\u5185\u53EF\u7528\u91D1\u989D</td><td${_scopeId}>\u989D\u5EA6\u5185\u53EF\u7528\u91D1\u989D</td><td${_scopeId}>\u4ECE\u8D44\u6E90\u989D\u5EA6\u67E5\u8BE2</td></tr><tr${_scopeId}><td${_scopeId}>OUT_CAN_USE_AMT</td><td${_scopeId}>NUMBER</td><td${_scopeId}>\u989D\u5EA6\u5916\u53EF\u7528\u91D1\u989D</td><td${_scopeId}>\u989D\u5EA6\u5916\u53EF\u7528\u91D1\u989D</td><td${_scopeId}>\u4ECE\u989D\u5EA6\u5916\u9884\u7B97\u67E5\u8BE2</td></tr><tr${_scopeId}><td${_scopeId}>THIS_APPLY_AMT</td><td${_scopeId}>NUMBER</td><td${_scopeId}>\u672C\u6B21\u7533\u8BF7\u91D1\u989D</td><td${_scopeId}>-</td><td${_scopeId}>-</td></tr><tr${_scopeId}><td${_scopeId}>THIS_WRITEOFF_AMT</td><td${_scopeId}>NUMBER</td><td${_scopeId}>\u672C\u6B21\u6838\u9500\u91D1\u989D</td><td${_scopeId}>\u672C\u6B21\u6838\u9500\u91D1\u989D</td><td${_scopeId}>\u7528\u6237\u8F93\u5165</td></tr><tr${_scopeId}><td${_scopeId}>FACT_INVOICE_AMT</td><td${_scopeId}>NUMBER</td><td${_scopeId}>\u5B9E\u9645\u5151\u73B0\u91D1\u989D</td><td${_scopeId}>-</td><td${_scopeId}>-</td></tr><tr${_scopeId}><td${_scopeId}>PAY_TYPE</td><td${_scopeId}>NUMBER</td><td${_scopeId}>\u652F\u4ED8\u65B9\u5F0F</td><td${_scopeId}>\u652F\u4ED8\u65B9\u5F0F</td><td${_scopeId}>\u6765\u6E90\u503C\u96C6AE_PAY_TYPE</td></tr><tr${_scopeId}><td${_scopeId}>TRADING_COMPANY_ID</td><td${_scopeId}>NUMBER</td><td${_scopeId}>\u4EA4\u6613\u516C\u53F8ID</td><td${_scopeId}>-</td><td${_scopeId}>\u4ECE\u62A5\u9500\u5355\u5E26\u5165</td></tr><tr${_scopeId}><td${_scopeId}>TRADING_COMPANY_NAME</td><td${_scopeId}>VARCHAR2</td><td${_scopeId}>\u4EA4\u6613\u516C\u53F8\u540D\u79F0</td><td${_scopeId}>\u4EA4\u6613\u516C\u53F8</td><td${_scopeId}>\u4ECE\u62A5\u9500\u5355\u5E26\u5165</td></tr><tr${_scopeId}><td${_scopeId}>BILLING_UNIT_NAME</td><td${_scopeId}>VARCHAR2</td><td${_scopeId}>\u5F00\u7968\u5355\u4F4D</td><td${_scopeId}>\u5F00\u7968\u5355\u4F4D</td><td${_scopeId}>\u4ECE\u62A5\u9500\u5355\u5E26\u5165</td></tr><tr${_scopeId}><td${_scopeId}>COST_CENTER_NAME</td><td${_scopeId}>VARCHAR2</td><td${_scopeId}>\u6210\u672C\u4E2D\u5FC3\u540D\u79F0</td><td${_scopeId}>\u6210\u672C\u4E2D\u5FC3</td><td${_scopeId}>-</td></tr><tr${_scopeId}><td${_scopeId}>IS_END</td><td${_scopeId}>NUMBER</td><td${_scopeId}>\u662F\u5426\u6700\u7EC8\u5151\u73B0</td><td${_scopeId}>\u662F\u5426\u6700\u7EC8\u5151\u73B0</td><td${_scopeId}>2=\u662F</td></tr><tr${_scopeId}><td${_scopeId}>IS_INCLUDED_REPORT</td><td${_scopeId}>NUMBER</td><td${_scopeId}>\u662F\u5426\u8BA1\u5165\u62A5\u8868</td><td${_scopeId}>\u662F\u5426\u8BA1\u5165\u62A5\u8868</td><td${_scopeId}>1=\u662F\uFF0C0=\u5426</td></tr><tr${_scopeId}><td${_scopeId}>SUPPLY_NAME</td><td${_scopeId}>VARCHAR2</td><td${_scopeId}>\u4F9B\u5E94\u5546\u540D\u79F0</td><td${_scopeId}>\u4F9B\u5E94\u5546\u540D\u79F0</td><td${_scopeId}>-</td></tr><tr${_scopeId}><td${_scopeId}>NOTE</td><td${_scopeId}>VARCHAR2</td><td${_scopeId}>\u5907\u6CE8</td><td${_scopeId}>\u5907\u6CE8</td><td${_scopeId}>\u7528\u6237\u8F93\u5165</td></tr><tr${_scopeId}><td${_scopeId}>CREATOR</td><td${_scopeId}>VARCHAR2</td><td${_scopeId}>\u7533\u8BF7\u4EBA</td><td${_scopeId}>\u7533\u8BF7\u4EBA</td><td${_scopeId}>\u7CFB\u7EDF\u81EA\u52A8\u8BB0\u5F55</td></tr><tr${_scopeId}><td${_scopeId}>CREATE_TIME</td><td${_scopeId}>DATE</td><td${_scopeId}>\u7533\u8BF7\u65F6\u95F4</td><td${_scopeId}>\u7533\u8BF7\u65F6\u95F4</td><td${_scopeId}>\u7CFB\u7EDF\u81EA\u52A8\u8BB0\u5F55</td></tr><tr${_scopeId}><td${_scopeId}>CHECKER</td><td${_scopeId}>VARCHAR2</td><td${_scopeId}>\u5BA1\u6838\u4EBA</td><td${_scopeId}>-</td><td${_scopeId}>\u5BA1\u6279\u901A\u8FC7\u65F6\u5199\u5165</td></tr><tr${_scopeId}><td${_scopeId}>CHECK_TIME</td><td${_scopeId}>DATE</td><td${_scopeId}>\u5BA1\u6838\u65F6\u95F4</td><td${_scopeId}>-</td><td${_scopeId}>\u5BA1\u6279\u901A\u8FC7\u65F6\u5199\u5165</td></tr><tr${_scopeId}><td${_scopeId}>HZ_APPROVE_STATUS</td><td${_scopeId}>VARCHAR2</td><td${_scopeId}>\u5BA1\u6279\u72B6\u6001</td><td${_scopeId}>\u5BA1\u6279\u72B6\u6001</td><td${_scopeId}>NEW/RUN/APPROVED</td></tr><tr${_scopeId}><td${_scopeId}>HZ_INSTANCE_ID</td><td${_scopeId}>NUMBER</td><td${_scopeId}>\u5BA1\u6279\u5B9E\u4F8BID</td><td${_scopeId}>-</td><td${_scopeId}>\u5DE5\u4F5C\u6D41\u5B9E\u4F8BID</td></tr><tr${_scopeId}><td${_scopeId}>SIGNATURE_STATE</td><td${_scopeId}>NUMBER</td><td${_scopeId}>\u7535\u5B50\u7B7E\u7AE0\u72B6\u6001</td><td${_scopeId}>\u7535\u5B50\u7B7E\u7AE0\u72B6\u6001</td><td${_scopeId}>2=\u5DF2\u7B7E\u7AE0</td></tr><tr${_scopeId}><td${_scopeId}>SIGNATURE_URL</td><td${_scopeId}>VARCHAR2</td><td${_scopeId}>\u7535\u5B50\u7B7E\u7AE0\u5730\u5740</td><td${_scopeId}>-</td><td${_scopeId}>-</td></tr><tr${_scopeId}><td${_scopeId}>IS_RESIGN</td><td${_scopeId}>NUMBER</td><td${_scopeId}>\u9700\u8981\u91CD\u7B7E</td><td${_scopeId}>-</td><td${_scopeId}>2=\u9700\u8981\u91CD\u7B7E</td></tr><tr${_scopeId}><td${_scopeId}>TERMINAL_CODE</td><td${_scopeId}>VARCHAR2</td><td${_scopeId}>\u95E8\u5E97\u7F16\u7801</td><td${_scopeId}>-</td><td${_scopeId}>\u4ECE\u62A5\u9500\u5355\u5E26\u5165</td></tr><tr${_scopeId}><td${_scopeId}>TERMINAL_NAME</td><td${_scopeId}>VARCHAR2</td><td${_scopeId}>\u95E8\u5E97\u540D\u79F0</td><td${_scopeId}>\u95E8\u5E97\u540D\u79F0</td><td${_scopeId}>\u4ECE\u62A5\u9500\u5355\u5E26\u5165</td></tr><tr${_scopeId}><td${_scopeId}>INVOICE_PAID_DATE</td><td${_scopeId}>TIMESTAMP</td><td${_scopeId}>\u53D1\u7968\u5230\u6B3E\u65E5\u671F</td><td${_scopeId}>-</td><td${_scopeId}>\u652F\u4ED8\u65B9\u5F0F=3\u65F6\u5199\u5165</td></tr><tr${_scopeId}><td${_scopeId}>INVOICE_PAID_AMOUNT</td><td${_scopeId}>DECIMAL</td><td${_scopeId}>\u53D1\u7968\u5230\u6B3E\u91D1\u989D</td><td${_scopeId}>-</td><td${_scopeId}>\u652F\u4ED8\u65B9\u5F0F=3\u65F6\u5199\u5165</td></tr><tr${_scopeId}><td${_scopeId}>LEDGER_DATE</td><td${_scopeId}>DATE</td><td${_scopeId}>\u603B\u8D26\u65E5\u671F</td><td${_scopeId}>-</td><td${_scopeId}>\u652F\u4ED8\u65B9\u5F0F=3\u65F6\u5199\u5165</td></tr><tr${_scopeId}><td${_scopeId}>ORGANIZATION_ID</td><td${_scopeId}>NUMBER</td><td${_scopeId}>\u7EC4\u7EC7ID</td><td${_scopeId}>-</td><td${_scopeId}>\u5F53\u524D\u4E8B\u4E1A\u90E8</td></tr></tbody></table>`);
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
                createVNode("td", null, "FEE_CASHOUT_ID"),
                createVNode("td", null, "NUMBER"),
                createVNode("td", null, "\u5151\u73B0ID"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u4E3B\u952E\uFF0C\u81EA\u589E")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "FEE_CASHOUT_NO"),
                createVNode("td", null, "VARCHAR2"),
                createVNode("td", null, "\u5151\u73B0\u5355\u53F7"),
                createVNode("td", null, "\u5151\u73B0\u5355\u53F7"),
                createVNode("td", null, "\u81EA\u52A8\u751F\u6210")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "BX_ID"),
                createVNode("td", null, "NUMBER"),
                createVNode("td", null, "\u62A5\u9500\u5355ID"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u5173\u8054\u62A5\u9500\u5355")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "BX_NO"),
                createVNode("td", null, "VARCHAR2"),
                createVNode("td", null, "\u62A5\u9500\u5355\u53F7"),
                createVNode("td", null, "\u62A5\u9500\u5355\u53F7"),
                createVNode("td", null, "\u4ECE\u62A5\u9500\u5355\u5E26\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "CASHOUT_TYPE"),
                createVNode("td", null, "NUMBER"),
                createVNode("td", null, "\u5151\u73B0\u7C7B\u578B"),
                createVNode("td", null, "\u5151\u73B0\u7C7B\u578B"),
                createVNode("td", null, "1=\u989D\u5EA6\u5185\uFF0C2=\u989D\u5EA6\u5916")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "SAVE_TYPE"),
                createVNode("td", null, "NUMBER"),
                createVNode("td", null, "\u6A21\u5757\u7C7B\u578B"),
                createVNode("td", null, "\u6A21\u5757\u7C7B\u578B"),
                createVNode("td", null, "1=\u95E8\u5E97\u88C5\u4FEE\u62A5\u9500\uFF0C2=\u5E7F\u544A\u8D39\u62A5\u9500")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "TOTAL_CAN_CASHOUT_AMT"),
                createVNode("td", null, "DECIMAL"),
                createVNode("td", null, "\u53EF\u5151\u73B0\u603B\u989D"),
                createVNode("td", null, "\u53EF\u5151\u73B0\u603B\u989D"),
                createVNode("td", null, "\u4ECE\u62A5\u9500\u5355\u5E26\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "USED_CASHOUT_AMT"),
                createVNode("td", null, "NUMBER"),
                createVNode("td", null, "\u5DF2\u5151\u73B0\u603B\u989D"),
                createVNode("td", null, "\u5DF2\u5151\u73B0\u603B\u989D"),
                createVNode("td", null, "\u81EA\u52A8\u8BA1\u7B97")
              ])
            ])
          ]),
          createVNode("table", { class: "kb-field-tbl" }, [
            createVNode("thead", null, [
              createVNode("tr", null, [
                createVNode("th", null, "SUR_CASHOUT_AMT"),
                createVNode("th", null, "NUMBER"),
                createVNode("th", null, "\u5269\u4F59\u672A\u5151\u73B0\u603B\u989D"),
                createVNode("th", null, "\u5269\u4F59\u672A\u5151\u73B0\u603B\u989D"),
                createVNode("th", null, "=\u53EF\u5151\u73B0\u603B\u989D-\u5DF2\u5151\u73B0\u603B\u989D")
              ])
            ]),
            createVNode("tbody", null, [
              createVNode("tr", null, [
                createVNode("td", null, "CUST_ID"),
                createVNode("td", null, "NUMBER"),
                createVNode("td", null, "\u7ECF\u9500\u5546ID"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u4ECE\u62A5\u9500\u5355\u5E26\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "CUST_NAME"),
                createVNode("td", null, "VARCHAR2"),
                createVNode("td", null, "\u7ECF\u9500\u5546\u540D\u79F0"),
                createVNode("td", null, "\u7ECF\u9500\u5546\u540D\u79F0"),
                createVNode("td", null, "\u4ECE\u62A5\u9500\u5355\u5E26\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "BUD_YEAR"),
                createVNode("td", null, "VARCHAR2"),
                createVNode("td", null, "\u9884\u7B97\u5E74\u5EA6"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u4ECE\u62A5\u9500\u5355\u5E26\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "STAT"),
                createVNode("td", null, "NUMBER"),
                createVNode("td", null, "\u5355\u636E\u72B6\u6001"),
                createVNode("td", null, "\u5355\u636E\u72B6\u6001"),
                createVNode("td", null, "-")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "IN_CAN_USE_AMT"),
                createVNode("td", null, "NUMBER"),
                createVNode("td", null, "\u989D\u5EA6\u5185\u53EF\u7528\u91D1\u989D"),
                createVNode("td", null, "\u989D\u5EA6\u5185\u53EF\u7528\u91D1\u989D"),
                createVNode("td", null, "\u4ECE\u8D44\u6E90\u989D\u5EA6\u67E5\u8BE2")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "OUT_CAN_USE_AMT"),
                createVNode("td", null, "NUMBER"),
                createVNode("td", null, "\u989D\u5EA6\u5916\u53EF\u7528\u91D1\u989D"),
                createVNode("td", null, "\u989D\u5EA6\u5916\u53EF\u7528\u91D1\u989D"),
                createVNode("td", null, "\u4ECE\u989D\u5EA6\u5916\u9884\u7B97\u67E5\u8BE2")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "THIS_APPLY_AMT"),
                createVNode("td", null, "NUMBER"),
                createVNode("td", null, "\u672C\u6B21\u7533\u8BF7\u91D1\u989D"),
                createVNode("td", null, "-"),
                createVNode("td", null, "-")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "THIS_WRITEOFF_AMT"),
                createVNode("td", null, "NUMBER"),
                createVNode("td", null, "\u672C\u6B21\u6838\u9500\u91D1\u989D"),
                createVNode("td", null, "\u672C\u6B21\u6838\u9500\u91D1\u989D"),
                createVNode("td", null, "\u7528\u6237\u8F93\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "FACT_INVOICE_AMT"),
                createVNode("td", null, "NUMBER"),
                createVNode("td", null, "\u5B9E\u9645\u5151\u73B0\u91D1\u989D"),
                createVNode("td", null, "-"),
                createVNode("td", null, "-")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "PAY_TYPE"),
                createVNode("td", null, "NUMBER"),
                createVNode("td", null, "\u652F\u4ED8\u65B9\u5F0F"),
                createVNode("td", null, "\u652F\u4ED8\u65B9\u5F0F"),
                createVNode("td", null, "\u6765\u6E90\u503C\u96C6AE_PAY_TYPE")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "TRADING_COMPANY_ID"),
                createVNode("td", null, "NUMBER"),
                createVNode("td", null, "\u4EA4\u6613\u516C\u53F8ID"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u4ECE\u62A5\u9500\u5355\u5E26\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "TRADING_COMPANY_NAME"),
                createVNode("td", null, "VARCHAR2"),
                createVNode("td", null, "\u4EA4\u6613\u516C\u53F8\u540D\u79F0"),
                createVNode("td", null, "\u4EA4\u6613\u516C\u53F8"),
                createVNode("td", null, "\u4ECE\u62A5\u9500\u5355\u5E26\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "BILLING_UNIT_NAME"),
                createVNode("td", null, "VARCHAR2"),
                createVNode("td", null, "\u5F00\u7968\u5355\u4F4D"),
                createVNode("td", null, "\u5F00\u7968\u5355\u4F4D"),
                createVNode("td", null, "\u4ECE\u62A5\u9500\u5355\u5E26\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "COST_CENTER_NAME"),
                createVNode("td", null, "VARCHAR2"),
                createVNode("td", null, "\u6210\u672C\u4E2D\u5FC3\u540D\u79F0"),
                createVNode("td", null, "\u6210\u672C\u4E2D\u5FC3"),
                createVNode("td", null, "-")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "IS_END"),
                createVNode("td", null, "NUMBER"),
                createVNode("td", null, "\u662F\u5426\u6700\u7EC8\u5151\u73B0"),
                createVNode("td", null, "\u662F\u5426\u6700\u7EC8\u5151\u73B0"),
                createVNode("td", null, "2=\u662F")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "IS_INCLUDED_REPORT"),
                createVNode("td", null, "NUMBER"),
                createVNode("td", null, "\u662F\u5426\u8BA1\u5165\u62A5\u8868"),
                createVNode("td", null, "\u662F\u5426\u8BA1\u5165\u62A5\u8868"),
                createVNode("td", null, "1=\u662F\uFF0C0=\u5426")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "SUPPLY_NAME"),
                createVNode("td", null, "VARCHAR2"),
                createVNode("td", null, "\u4F9B\u5E94\u5546\u540D\u79F0"),
                createVNode("td", null, "\u4F9B\u5E94\u5546\u540D\u79F0"),
                createVNode("td", null, "-")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "NOTE"),
                createVNode("td", null, "VARCHAR2"),
                createVNode("td", null, "\u5907\u6CE8"),
                createVNode("td", null, "\u5907\u6CE8"),
                createVNode("td", null, "\u7528\u6237\u8F93\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "CREATOR"),
                createVNode("td", null, "VARCHAR2"),
                createVNode("td", null, "\u7533\u8BF7\u4EBA"),
                createVNode("td", null, "\u7533\u8BF7\u4EBA"),
                createVNode("td", null, "\u7CFB\u7EDF\u81EA\u52A8\u8BB0\u5F55")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "CREATE_TIME"),
                createVNode("td", null, "DATE"),
                createVNode("td", null, "\u7533\u8BF7\u65F6\u95F4"),
                createVNode("td", null, "\u7533\u8BF7\u65F6\u95F4"),
                createVNode("td", null, "\u7CFB\u7EDF\u81EA\u52A8\u8BB0\u5F55")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "CHECKER"),
                createVNode("td", null, "VARCHAR2"),
                createVNode("td", null, "\u5BA1\u6838\u4EBA"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u5BA1\u6279\u901A\u8FC7\u65F6\u5199\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "CHECK_TIME"),
                createVNode("td", null, "DATE"),
                createVNode("td", null, "\u5BA1\u6838\u65F6\u95F4"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u5BA1\u6279\u901A\u8FC7\u65F6\u5199\u5165")
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
                createVNode("td", null, "\u5DE5\u4F5C\u6D41\u5B9E\u4F8BID")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "SIGNATURE_STATE"),
                createVNode("td", null, "NUMBER"),
                createVNode("td", null, "\u7535\u5B50\u7B7E\u7AE0\u72B6\u6001"),
                createVNode("td", null, "\u7535\u5B50\u7B7E\u7AE0\u72B6\u6001"),
                createVNode("td", null, "2=\u5DF2\u7B7E\u7AE0")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "SIGNATURE_URL"),
                createVNode("td", null, "VARCHAR2"),
                createVNode("td", null, "\u7535\u5B50\u7B7E\u7AE0\u5730\u5740"),
                createVNode("td", null, "-"),
                createVNode("td", null, "-")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "IS_RESIGN"),
                createVNode("td", null, "NUMBER"),
                createVNode("td", null, "\u9700\u8981\u91CD\u7B7E"),
                createVNode("td", null, "-"),
                createVNode("td", null, "2=\u9700\u8981\u91CD\u7B7E")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "TERMINAL_CODE"),
                createVNode("td", null, "VARCHAR2"),
                createVNode("td", null, "\u95E8\u5E97\u7F16\u7801"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u4ECE\u62A5\u9500\u5355\u5E26\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "TERMINAL_NAME"),
                createVNode("td", null, "VARCHAR2"),
                createVNode("td", null, "\u95E8\u5E97\u540D\u79F0"),
                createVNode("td", null, "\u95E8\u5E97\u540D\u79F0"),
                createVNode("td", null, "\u4ECE\u62A5\u9500\u5355\u5E26\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "INVOICE_PAID_DATE"),
                createVNode("td", null, "TIMESTAMP"),
                createVNode("td", null, "\u53D1\u7968\u5230\u6B3E\u65E5\u671F"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u652F\u4ED8\u65B9\u5F0F=3\u65F6\u5199\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "INVOICE_PAID_AMOUNT"),
                createVNode("td", null, "DECIMAL"),
                createVNode("td", null, "\u53D1\u7968\u5230\u6B3E\u91D1\u989D"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u652F\u4ED8\u65B9\u5F0F=3\u65F6\u5199\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "LEDGER_DATE"),
                createVNode("td", null, "DATE"),
                createVNode("td", null, "\u603B\u8D26\u65E5\u671F"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u652F\u4ED8\u65B9\u5F0F=3\u65F6\u5199\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "ORGANIZATION_ID"),
                createVNode("td", null, "NUMBER"),
                createVNode("td", null, "\u7EC4\u7EC7ID"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u5F53\u524D\u4E8B\u4E1A\u90E8")
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
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u62A5\u9519\u4FE1\u606F</th><th${_scopeId}>\u63D0\u793A\u8282\u70B9</th><th${_scopeId}>\u6839\u56E0\u4E0E\u89E3\u51B3\u65B9\u6848</th><th${_scopeId}>\u7B49\u7EA7</th><th${_scopeId}>\u8BE6\u7EC6\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u53D1\u7968\u91D1\u989D\u5F02\u5E38\uFF0C\u8BF7\u68C0\u67E5\uFF01</td><td${_scopeId}>\u63D0\u4EA4</td><td${_scopeId}>\u5B9E\u9645\u5151\u73B0\u91D1\u989D&lt;=0\uFF0C\u68C0\u67E5\u53D1\u7968\u91D1\u989D</td><td${_scopeId}>\u963B\u65AD\u6027\u62A5\u9519</td><td${_scopeId}>[\u67E5\u770B](#\u62A5\u95191\u53D1\u7968\u91D1\u989D\u5F02\u5E38\u8BF7\u68C0\u67E5)</td></tr><tr${_scopeId}><td${_scopeId}>\u672C\u6B21\u7533\u8BF7\u5151\u73B0\u91D1\u989D\u4E0D\u53EF\u8D85\u8FC7\u8BE5\u62A5\u9500\u5355\u636E\u5269\u4F59\u7684\u53EF\u5151\u73B0\u91D1\u989D</td><td${_scopeId}>\u63D0\u4EA4</td><td${_scopeId}>\u5151\u73B0\u91D1\u989D\u8D85\u9650\uFF0C\u51CF\u5C11\u672C\u6B21\u5151\u73B0\u91D1\u989D</td><td${_scopeId}>\u963B\u65AD\u6027\u62A5\u9519</td><td${_scopeId}>[\u67E5\u770B](#\u62A5\u95192\u672C\u6B21\u7533\u8BF7\u5151\u73B0\u91D1\u989D\u4E0D\u53EF\u8D85\u8FC7\u8BE5\u62A5\u9500\u5355\u636E\u5269\u4F59\u7684\u53EF\u5151\u73B0\u91D1\u989D)</td></tr><tr${_scopeId}><td${_scopeId}>\u672C\u6B21\u6838\u9500\u91D1\u989D\u4E0D\u53EF\u8D85\u8FC7\u989D\u5EA6\u5185\u53EF\u7528\u91D1\u989D</td><td${_scopeId}>\u63D0\u4EA4</td><td${_scopeId}>\u989D\u5EA6\u5185\u6838\u9500\u91D1\u989D\u8D85\u9650\uFF0C\u51CF\u5C11\u6838\u9500\u91D1\u989D</td><td${_scopeId}>\u963B\u65AD\u6027\u62A5\u9519</td><td${_scopeId}>[\u67E5\u770B](#\u62A5\u95193\u672C\u6B21\u6838\u9500\u91D1\u989D\u4E0D\u53EF\u8D85\u8FC7\u989D\u5EA6\u5185\u53EF\u7528\u91D1\u989D)</td></tr><tr${_scopeId}><td${_scopeId}>\u672C\u6B21\u7533\u8BF7\u5151\u73B0\u91D1\u989D\u4E0D\u53EF\u8D85\u8FC7\u989D\u5EA6\u5916\u53EF\u7528\u91D1\u989D</td><td${_scopeId}>\u63D0\u4EA4</td><td${_scopeId}>\u989D\u5EA6\u5916\u5151\u73B0\u91D1\u989D\u8D85\u9650\uFF0C\u51CF\u5C11\u5151\u73B0\u91D1\u989D</td><td${_scopeId}>\u963B\u65AD\u6027\u62A5\u9519</td><td${_scopeId}>[\u67E5\u770B](#\u62A5\u95194\u672C\u6B21\u7533\u8BF7\u5151\u73B0\u91D1\u989D\u4E0D\u53EF\u8D85\u8FC7\u989D\u5EA6\u5916\u53EF\u7528\u91D1\u989D)</td></tr><tr${_scopeId}><td${_scopeId}>\u989D\u5EA6\u5916\u91D1\u989D\u5DF2\u5360\u7528</td><td${_scopeId}>\u63D0\u4EA4</td><td${_scopeId}>\u989D\u5EA6\u5916\u53EF\u7528\u91D1\u989D\u5DF2\u88AB\u5176\u4ED6\u5355\u636E\u5360\u7528\uFF0C\u51CF\u5C11\u5151\u73B0\u91D1\u989D</td><td${_scopeId}>\u963B\u65AD\u6027\u62A5\u9519</td><td${_scopeId}>[\u67E5\u770B](#\u62A5\u95195\u989D\u5EA6\u5916\u91D1\u989D\u5DF2\u5360\u7528)</td></tr><tr${_scopeId}><td${_scopeId}>\u7533\u8BF7\u5151\u73B0\u91D1\u989D\u5DF2\u8D85\u5269\u4F59\u672A\u5151\u73B0\u603B\u989D</td><td${_scopeId}>\u63D0\u4EA4</td><td${_scopeId}>\u5E76\u53D1\u5151\u73B0\u5BFC\u81F4\u5269\u4F59\u4E0D\u8DB3\uFF0C\u5237\u65B0\u540E\u91CD\u65B0\u63D0\u4EA4</td><td${_scopeId}>\u963B\u65AD\u6027\u62A5\u9519</td><td${_scopeId}>[\u67E5\u770B](#\u62A5\u95196\u7533\u8BF7\u5151\u73B0\u91D1\u989D\u5DF2\u8D85\u5269\u4F59\u672A\u5151\u73B0\u603B\u989D)</td></tr><tr${_scopeId}><td${_scopeId}>\u6D41\u7A0B\u4E2Dobjid\u4E3A0\uFF0C\u6D41\u7A0B\u5931\u8D25\uFF01</td><td${_scopeId}>\u63D0\u4EA4</td><td${_scopeId}>\u5DE5\u4F5C\u6D41\u7F3A\u5C11\u5355\u636EID</td><td${_scopeId}>\u963B\u65AD\u6027\u62A5\u9519</td><td${_scopeId}>[\u67E5\u770B](#\u62A5\u95197\u6D41\u7A0B\u4E2Dobjid\u4E3A0\u6D41\u7A0B\u5931\u8D25)</td></tr><tr${_scopeId}><td${_scopeId}>\u5151\u73B0\u7C7B\u578B\u5F02\u5E38\uFF01</td><td${_scopeId}>ERP\u540C\u6B65</td><td${_scopeId}>\u5151\u73B0\u7C7B\u578B\u975E1\u62162\uFF0C\u68C0\u67E5\u6570\u636E</td><td${_scopeId}>\u963B\u65AD\u6027\u62A5\u9519</td><td${_scopeId}>[\u67E5\u770B](#\u62A5\u95198\u5151\u73B0\u7C7B\u578B\u5F02\u5E38)</td></tr><tr${_scopeId}><td${_scopeId}>\u8BE5\u5355\u636E\u6D41\u7A0B\u4FE1\u606F\u4E0D\u5B58\u5728</td><td${_scopeId}>\u7B7E\u7AE0\u6821\u9A8C</td><td${_scopeId}>\u5355\u636E\u4E0D\u5B58\u5728\u6216\u6D41\u7A0B\u4FE1\u606F\u7F3A\u5931</td><td${_scopeId}>\u963B\u65AD\u6027\u62A5\u9519</td><td${_scopeId}>[\u67E5\u770B](#\u62A5\u95199\u8BE5\u5355\u636E\u6D41\u7A0B\u4FE1\u606F\u4E0D\u5B58\u5728)</td></tr><tr${_scopeId}><td${_scopeId}>\u95E8\u5E97\u7F16\u7801\u6216\u9884\u7B97\u5E74\u5EA6\u4E0D\u80FD\u4E3A\u7A7A</td><td${_scopeId}>\u989D\u5EA6\u5916\u9884\u7B97\u66F4\u65B0</td><td${_scopeId}>\u95E8\u5E97\u7F16\u7801\u6216\u9884\u7B97\u5E74\u5EA6\u7F3A\u5931</td><td${_scopeId}>\u963B\u65AD\u6027\u62A5\u9519</td><td${_scopeId}>[\u67E5\u770B](#\u62A5\u951910\u95E8\u5E97\u7F16\u7801\u6216\u9884\u7B97\u5E74\u5EA6\u4E0D\u80FD\u4E3A\u7A7A)</td></tr><tr${_scopeId}><td${_scopeId}>\u53EF\u5151\u73B0\u603B\u989D\u4E0D\u80FD\u4E3A\u96F6\u6216\u8D1F\u6570</td><td${_scopeId}>\u989D\u5EA6\u5916\u9884\u7B97\u66F4\u65B0</td><td${_scopeId}>\u53EF\u5151\u73B0\u603B\u989D\u5F02\u5E38</td><td${_scopeId}>\u963B\u65AD\u6027\u62A5\u9519</td><td${_scopeId}>[\u67E5\u770B](#\u62A5\u951911\u53EF\u5151\u73B0\u603B\u989D\u4E0D\u80FD\u4E3A\u96F6\u6216\u8D1F\u6570)</td></tr><tr${_scopeId}><td${_scopeId}>\u7A0E\u7387\u914D\u7F6E\u683C\u5F0F\u9519\u8BEF</td><td${_scopeId}>\u989D\u5EA6\u5916\u9884\u7B97\u66F4\u65B0</td><td${_scopeId}>\u7CFB\u7EDF\u914D\u7F6EOutlimit_Tax_Rate\u683C\u5F0F\u9519\u8BEF</td><td${_scopeId}>\u963B\u65AD\u6027\u62A5\u9519</td><td${_scopeId}>[\u67E5\u770B](#\u62A5\u951912\u7A0E\u7387\u914D\u7F6E\u683C\u5F0F\u9519\u8BEF)</td></tr><tr${_scopeId}><td${_scopeId}>\u989D\u5EA6\u5916\u9884\u7B97\u6570\u636E\u4E0D\u5B58\u5728\uFF0C\u8BF7\u68C0\u67E5\uFF01</td><td${_scopeId}>\u989D\u5EA6\u5916\u9884\u7B97\u66F4\u65B0</td><td${_scopeId}>\u989D\u5EA6\u5916\u9884\u7B97\u672A\u914D\u7F6E</td><td${_scopeId}>\u963B\u65AD\u6027\u62A5\u9519</td><td${_scopeId}>[\u67E5\u770B](#\u62A5\u951913\u989D\u5EA6\u5916\u9884\u7B97\u6570\u636E\u4E0D\u5B58\u5728\u8BF7\u68C0\u67E5)</td></tr></tbody></table><h4${_scopeId}>\u62A5\u95191\uFF1A\u53D1\u7968\u91D1\u989D\u5F02\u5E38\uFF0C\u8BF7\u68C0\u67E5\uFF01</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u70B9\u51FB&quot;\u63D0\u4EA4&quot;\u6216&quot;\u4FDD\u5B58&quot;\u6309\u94AE\uFF0C\u652F\u4ED8\u65B9\u5F0F\u975E3\uFF08\u975E\u865A\u62DF\u6536\u6B3E\uFF09\u65F6\uFF0C\u6821\u9A8C\u53D1\u7968\u5B9E\u9645\u5151\u73B0\u91D1\u989DfactInvoiceAmt&lt;=0</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u5151\u73B0\u5355\u9700\u6709\u6709\u6548\u53D1\u7968\u91D1\u989D\u624D\u80FD\u8FDB\u884C\u6838\u9500\u4E0E\u9884\u7B97\u66F4\u65B0\u3002\u6821\u9A8C\u903B\u8F91\u8BFB\u53D6FIN_FEE_CASHOUT_HEADER.FACT_INVOICE_AMT\uFF0C\u5F53PAY_TYPE\u22603\u4E14FACT_INVOICE_AMT&lt;=0\u65F6\u629B\u51FA\u963B\u65AD\u6027\u5F02\u5E38\u3002\u5E38\u89C1\u6839\u56E0\uFF1A\u7528\u6237\u672A\u586B\u5199\u53D1\u7968\u91D1\u989D\u3001\u53D1\u7968\u91D1\u989D\u88AB\u9519\u8BEF\u7F6E0\u6216\u8D1F\u6570\u3001\u6216\u524D\u7AEF\u672A\u505A\u5FC5\u586B\u6821\u9A8C\u76F4\u63A5\u63D0\u4EA4\u7A7A\u5355\u3002</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> fee_cashout_id      </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5151\u73B0\u5355ID,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         fee_cashout_no      </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5151\u73B0\u5355\u53F7,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         pay_type            </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u652F\u4ED8\u65B9\u5F0F,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         fact_invoice_amt    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5B9E\u9645\u5151\u73B0\u91D1\u989D,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         hz_approve_status   </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5BA1\u6279\u72B6\u6001</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>   fin_fee_cashout_header</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  save_type </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>2</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    pay_type </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&lt;&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>3</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    (fact_invoice_amt </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>OR</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> fact_invoice_amt </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&lt;=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>0</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ORDER  BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> create_time </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>DESC</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95192\uFF1A\u672C\u6B21\u7533\u8BF7\u5151\u73B0\u91D1\u989D\u4E0D\u53EF\u8D85\u8FC7\u8BE5\u62A5\u9500\u5355\u636E\u5269\u4F59\u7684\u53EF\u5151\u73B0\u91D1\u989D</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u70B9\u51FB&quot;\u63D0\u4EA4&quot;\u6309\u94AE\uFF0C\u6821\u9A8C\u672C\u6B21\u5151\u73B0\u91D1\u989DthisCashoutAmt&gt;\u62A5\u9500\u5355\u5269\u4F59\u53EF\u5151\u73B0\u91D1\u989D\uFF08TOTAL_CAN_CASHOUT_AMT-USED_CASHOUT_AMT\uFF09</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u5151\u73B0\u91D1\u989D\u53D7\u62A5\u9500\u5355\u53EF\u5151\u73B0\u603B\u989D\u7EA6\u675F\u3002\u6821\u9A8C\u903B\u8F91\u4ECE\u5173\u8054\u62A5\u9500\u5355FIN_FEE_BX_HEADER\u8BFB\u53D6\u53EF\u5151\u73B0\u603B\u989D\u4E0E\u5DF2\u5151\u73B0\u603B\u989D\uFF0C\u82E5\u672C\u6B21\u5151\u73B0\u91D1\u989D\u8D85\u8FC7\u5269\u4F59\u53EF\u5151\u73B0\uFF08\u53EF\u5151\u73B0\u603B\u989D-\u5DF2\u5151\u73B0\u603B\u989D\uFF09\u5219\u629B\u5F02\u5E38\u3002\u5E38\u89C1\u6839\u56E0\uFF1A\u7528\u6237\u8F93\u5165\u91D1\u989D\u8D85\u9650\u3001\u62A5\u9500\u5355\u5DF2\u88AB\u5176\u4ED6\u5151\u73B0\u5355\u5360\u7528\u90E8\u5206\u989D\u5EA6\u3001\u6216\u524D\u7AEF\u672A\u5B9E\u65F6\u5237\u65B0\u5269\u4F59\u53EF\u5151\u73B0\u91D1\u989D\u3002</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> c.fee_cashout_id      </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5151\u73B0\u5355ID,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         c.fee_cashout_no      </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5151\u73B0\u5355\u53F7,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         c.bx_no               </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u62A5\u9500\u5355\u53F7,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         c.this_cashout_amt    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u672C\u6B21\u5151\u73B0\u91D1\u989D,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         c.total_can_cashout_amt </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u53EF\u5151\u73B0\u603B\u989D,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         c.used_cashout_amt    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5DF2\u5151\u73B0\u603B\u989D,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         c.total_can_cashout_amt </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>-</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> c.used_cashout_amt </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5269\u4F59\u53EF\u5151\u73B0</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>   fin_fee_cashout_header c</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  c.save_type </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>2</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    c.this_cashout_amt </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (c.total_can_cashout_amt </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>-</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> c.used_cashout_amt)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ORDER  BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> c.create_time </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>DESC</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95193\uFF1A\u672C\u6B21\u6838\u9500\u91D1\u989D\u4E0D\u53EF\u8D85\u8FC7\u989D\u5EA6\u5185\u53EF\u7528\u91D1\u989D</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u70B9\u51FB&quot;\u63D0\u4EA4&quot;\u6309\u94AE\uFF0C\u5151\u73B0\u7C7B\u578B\u4E3A\u989D\u5EA6\u5185\uFF08CASHOUT_TYPE=1\uFF09\u65F6\uFF0C\u6821\u9A8C\u672C\u6B21\u6838\u9500\u91D1\u989DthisWriteoffAmt&gt;\u989D\u5EA6\u5185\u53EF\u7528\u91D1\u989DinCanUseAmt</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u989D\u5EA6\u5185\u5151\u73B0\u9700\u6838\u9500\u8D44\u6E90\u989D\u5EA6\uFF0C\u6838\u9500\u91D1\u989D\u4E0D\u80FD\u8D85\u8FC7\u5F53\u524D\u53EF\u7528\u989D\u5EA6\u3002\u6821\u9A8C\u903B\u8F91\u8BFB\u53D6FIN_FEE_CASHOUT_HEADER.THIS_WRITEOFF_AMT\u4E0EIN_CAN_USE_AMT\uFF0C\u5F53CASHOUT_TYPE=1\u4E14THIS_WRITEOFF_AMT&gt;IN_CAN_USE_AMT\u65F6\u629B\u5F02\u5E38\u3002\u5E38\u89C1\u6839\u56E0\uFF1A\u8D44\u6E90\u989D\u5EA6\u5DF2\u88AB\u5176\u4ED6\u5355\u636E\u5360\u7528\u3001\u989D\u5EA6\u672A\u53CA\u65F6\u5237\u65B0\u3001\u6216\u7528\u6237\u8F93\u5165\u6838\u9500\u91D1\u989D\u8D85\u9650\u3002</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> fee_cashout_id      </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5151\u73B0\u5355ID,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         fee_cashout_no      </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5151\u73B0\u5355\u53F7,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         cashout_type        </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5151\u73B0\u7C7B\u578B,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         this_writeoff_amt   </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u672C\u6B21\u6838\u9500\u91D1\u989D,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         in_can_use_amt      </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u989D\u5EA6\u5185\u53EF\u7528\u91D1\u989D,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         hz_approve_status   </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5BA1\u6279\u72B6\u6001</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>   fin_fee_cashout_header</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  save_type </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>2</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    cashout_type </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>1</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    this_writeoff_amt </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> in_can_use_amt</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ORDER  BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> create_time </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>DESC</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95194\uFF1A\u672C\u6B21\u7533\u8BF7\u5151\u73B0\u91D1\u989D\u4E0D\u53EF\u8D85\u8FC7\u989D\u5EA6\u5916\u53EF\u7528\u91D1\u989D</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u70B9\u51FB&quot;\u63D0\u4EA4&quot;\u6309\u94AE\uFF0C\u5151\u73B0\u7C7B\u578B\u4E3A\u989D\u5EA6\u5916\uFF08CASHOUT_TYPE=2\uFF09\u65F6\uFF0C\u6821\u9A8C\u672C\u6B21\u5151\u73B0\u91D1\u989DthisCashoutAmt&gt;\u989D\u5EA6\u5916\u53EF\u7528\u91D1\u989DoutCanUseAmt</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u989D\u5EA6\u5916\u5151\u73B0\u53D7\u989D\u5EA6\u5916\u9884\u7B97\u53EF\u7528\u91D1\u989D\u7EA6\u675F\u3002\u6821\u9A8C\u903B\u8F91\u8BFB\u53D6FIN_FEE_CASHOUT_HEADER.THIS_CASHOUT_AMT\u4E0EOUT_CAN_USE_AMT\uFF0C\u5F53CASHOUT_TYPE=2\u4E14THIS_CASHOUT_AMT&gt;OUT_CAN_USE_AMT\u65F6\u629B\u5F02\u5E38\u3002\u5E38\u89C1\u6839\u56E0\uFF1A\u989D\u5EA6\u5916\u9884\u7B97\u5DF2\u4F7F\u7528\u8F83\u591A\u3001\u53EF\u7528\u91D1\u989D\u672A\u53CA\u65F6\u5237\u65B0\u3001\u6216\u7528\u6237\u8F93\u5165\u5151\u73B0\u91D1\u989D\u8D85\u9650\u3002</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> fee_cashout_id      </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5151\u73B0\u5355ID,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         fee_cashout_no      </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5151\u73B0\u5355\u53F7,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         cashout_type        </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5151\u73B0\u7C7B\u578B,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         this_cashout_amt    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u672C\u6B21\u5151\u73B0\u91D1\u989D,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         out_can_use_amt     </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u989D\u5EA6\u5916\u53EF\u7528\u91D1\u989D,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         hz_approve_status   </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5BA1\u6279\u72B6\u6001</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>   fin_fee_cashout_header</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  save_type </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>2</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    cashout_type </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>2</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    this_cashout_amt </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> out_can_use_amt</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ORDER  BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> create_time </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>DESC</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95195\uFF1A\u989D\u5EA6\u5916\u91D1\u989D\u5DF2\u5360\u7528</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u70B9\u51FB&quot;\u63D0\u4EA4&quot;\u6309\u94AE\uFF0C\u5151\u73B0\u7C7B\u578B\u4E3A\u989D\u5EA6\u5916\uFF08CASHOUT_TYPE=2\uFF09\u65F6\uFF0C\u6821\u9A8C\u672C\u6B21\u5151\u73B0\u91D1\u989D&gt;\u989D\u5EA6\u5916\u53EF\u7528\u91D1\u989D-\u5DF2\u5360\u7528\u91D1\u989D</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u989D\u5EA6\u5916\u53EF\u7528\u91D1\u989D\u9700\u6263\u9664\u5DF2\u88AB\u5176\u4ED6\u5355\u636E\u5360\u7528\u90E8\u5206\u3002\u6821\u9A8C\u903B\u8F91\u67E5\u8BE2MKT_OUTLIMIT_BUD_HEADER\u7684\u5DF2\u5360\u7528\u91D1\u989D\uFF0C\u82E5\u672C\u6B21\u5151\u73B0\u91D1\u989D\u8D85\u8FC7\u5269\u4F59\u53EF\u7528\uFF08\u53EF\u7528\u91D1\u989D-\u5DF2\u5360\u7528\u91D1\u989D\uFF09\u5219\u629B\u5F02\u5E38\u3002\u5E38\u89C1\u6839\u56E0\uFF1A\u5E76\u53D1\u63D0\u4EA4\u5BFC\u81F4\u989D\u5EA6\u5916\u53EF\u7528\u91D1\u989D\u88AB\u5176\u4ED6\u5151\u73B0\u5355\u5360\u7528\u3001\u6216\u524D\u7AEF\u672A\u5B9E\u65F6\u83B7\u53D6\u6700\u65B0\u5DF2\u5360\u7528\u91D1\u989D\u3002</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> c.fee_cashout_id      </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5151\u73B0\u5355ID,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         c.fee_cashout_no      </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5151\u73B0\u5355\u53F7,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         c.this_cashout_amt    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u672C\u6B21\u5151\u73B0\u91D1\u989D,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         c.out_can_use_amt     </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u989D\u5EA6\u5916\u53EF\u7528\u91D1\u989D,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         b.this_outlimit_bud_used_amt </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5DF2\u5360\u7528\u91D1\u989D,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         c.out_can_use_amt </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>-</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> b.this_outlimit_bud_used_amt </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5269\u4F59\u53EF\u7528</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>   fin_fee_cashout_header c</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>LEFT   JOIN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> mkt_outlimit_bud_header b</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ON</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> b.terminal_code </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> c.terminal_code</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>        </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> b.bud_year </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> c.bud_year</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  c.save_type </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>2</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    c.cashout_type </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>2</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    c.this_cashout_amt </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (c.out_can_use_amt </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>-</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> NVL(b.this_outlimit_bud_used_amt, </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>0</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>))</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ORDER  BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> c.create_time </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>DESC</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95196\uFF1A\u7533\u8BF7\u5151\u73B0\u91D1\u989D\u5DF2\u8D85\u5269\u4F59\u672A\u5151\u73B0\u603B\u989D</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u70B9\u51FB&quot;\u63D0\u4EA4&quot;\u6309\u94AE\uFF0C\u63D0\u4EA4\u65F6\u4E8C\u6B21\u6821\u9A8C\u53EF\u5151\u73B0\u603B\u989D-\u5DF2\u4F7F\u7528\u5151\u73B0\u91D1\u989D-\u672C\u6B21\u5151\u73B0\u91D1\u989D&lt;0</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u63D0\u4EA4\u65F6\u518D\u6B21\u6821\u9A8C\u9632\u6B62\u5E76\u53D1\u5151\u73B0\u5BFC\u81F4\u8D85\u989D\u3002\u6821\u9A8C\u903B\u8F91\u91CD\u65B0\u67E5\u8BE2\u5173\u8054\u62A5\u9500\u5355\u7684\u5DF2\u4F7F\u7528\u5151\u73B0\u91D1\u989D\uFF0C\u82E5\u53EF\u5151\u73B0\u603B\u989D-\u5DF2\u4F7F\u7528-\u672C\u6B21\u5151\u73B0&lt;0\u5219\u629B\u5F02\u5E38\u3002\u5E38\u89C1\u6839\u56E0\uFF1A\u591A\u7528\u6237\u5E76\u53D1\u5BF9\u540C\u4E00\u62A5\u9500\u5355\u63D0\u4EA4\u5151\u73B0\u3001\u6216\u4FDD\u5B58\u540E\u5230\u63D0\u4EA4\u671F\u95F4\u5176\u4ED6\u5151\u73B0\u5355\u5DF2\u5360\u7528\u989D\u5EA6\uFF0C\u9700\u5237\u65B0\u540E\u91CD\u65B0\u63D0\u4EA4\u3002</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> c.fee_cashout_id      </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5151\u73B0\u5355ID,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         c.fee_cashout_no      </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5151\u73B0\u5355\u53F7,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         c.bx_id               </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u62A5\u9500\u5355ID,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         c.total_can_cashout_amt </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u53EF\u5151\u73B0\u603B\u989D,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         c.used_cashout_amt    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5DF2\u5151\u73B0\u603B\u989D,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         c.this_cashout_amt    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u672C\u6B21\u5151\u73B0\u91D1\u989D,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         c.total_can_cashout_amt </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>-</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> c.used_cashout_amt </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>-</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> c.this_cashout_amt </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u63D0\u4EA4\u540E\u5269\u4F59</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>   fin_fee_cashout_header c</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  c.save_type </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>2</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    c.hz_approve_status </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>NEW</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    (c.total_can_cashout_amt </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>-</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> c.used_cashout_amt </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>-</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> c.this_cashout_amt) </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&lt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>0</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ORDER  BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> c.create_time </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>DESC</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95197\uFF1A\u6D41\u7A0B\u4E2Dobjid\u4E3A0\uFF0C\u6D41\u7A0B\u5931\u8D25\uFF01</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u70B9\u51FB&quot;\u63D0\u4EA4&quot;\u6309\u94AE\uFF0C\u53D1\u8D77\u5DE5\u4F5C\u6D41ADJ_GGBXFPDX\u65F6\uFF0C\u4F20\u5165\u7684objid\uFF08\u5355\u636E\u4E3B\u952EFEE_CASHOUT_ID\uFF09\u4E3A0\u6216null</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u5DE5\u4F5C\u6D41\u5F15\u64CE\u9700\u7528objid\u5173\u8054\u4E1A\u52A1\u5355\u636E\u3002\u82E5\u4FDD\u5B58\u65F6\u672A\u6B63\u786E\u56DE\u5199FEE_CASHOUT_ID\uFF08\u5982\u81EA\u589E\u5E8F\u5217\u672A\u53D6\u56DE\u3001\u4E8B\u52A1\u672A\u63D0\u4EA4\u5373\u53D1\u8D77\u6D41\u7A0B\uFF09\uFF0C\u6216\u524D\u7AEF\u672A\u4F20id\u5B57\u6BB5\uFF0C\u4F1A\u5BFC\u81F4objid=0\u3002\u5DE5\u4F5C\u6D41\u65E0\u6CD5\u5B9A\u4F4D\u5151\u73B0\u5355\uFF0C\u6D41\u7A0B\u53D1\u8D77\u5931\u8D25\u3002</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> fee_cashout_id      </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5151\u73B0\u5355ID,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         fee_cashout_no      </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5151\u73B0\u5355\u53F7,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         hz_instance_id      </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5DE5\u4F5C\u6D41\u5B9E\u4F8BID,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         hz_approve_status   </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5BA1\u6279\u72B6\u6001</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>   fin_fee_cashout_header</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  save_type </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>2</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    (fee_cashout_id </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>0</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>OR</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> fee_cashout_id </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ORDER  BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> create_time </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>DESC</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95198\uFF1A\u5151\u73B0\u7C7B\u578B\u5F02\u5E38\uFF01</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1AERP\u8D44\u91D1\u6C60\u540C\u6B65\u65F6\uFF0C\u8BFB\u53D6\u5151\u73B0\u5355CASHOUT_TYPE\u65E2\u975E1\uFF08\u989D\u5EA6\u5185\uFF09\u4E5F\u975E2\uFF08\u989D\u5EA6\u5916\uFF09</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1AERP\u540C\u6B65\u9700\u6839\u636E\u5151\u73B0\u7C7B\u578B\u51B3\u5B9AsourceType\uFF08\u989D\u5EA6\u5185=&quot;\u5E7F\u544A\u8D39\uFF08\u989D\u5185\uFF09&quot;\uFF0C\u989D\u5EA6\u5916=&quot;\u5E7F\u544A\u8D39\uFF08\u989D\u5916\uFF09&quot;\uFF09\u3002\u82E5CASHOUT_TYPE\u88AB\u9519\u8BEF\u5199\u5165\u5176\u4ED6\u503C\uFF08\u59820\u30013\u3001null\uFF09\uFF0C\u65E0\u6CD5\u5339\u914DsourceType\u5206\u652F\uFF0C\u629B\u5F02\u5E38\u7EC8\u6B62\u540C\u6B65\u3002\u5E38\u89C1\u6839\u56E0\uFF1A\u6570\u636E\u8FC1\u79FB\u9519\u8BEF\u3001\u624B\u52A8\u4FEE\u6539\u6570\u636E\u5E93\u3001\u6216\u65B0\u5EFA\u65F6\u672A\u6B63\u786E\u521D\u59CB\u5316\u5151\u73B0\u7C7B\u578B\u3002</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> fee_cashout_id      </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5151\u73B0\u5355ID,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         fee_cashout_no      </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5151\u73B0\u5355\u53F7,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         cashout_type        </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5151\u73B0\u7C7B\u578B,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         hz_approve_status   </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5BA1\u6279\u72B6\u6001</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>   fin_fee_cashout_header</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  save_type </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>2</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    cashout_type </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NOT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>1</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>2</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ORDER  BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> create_time </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>DESC</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95199\uFF1A\u8BE5\u5355\u636E\u6D41\u7A0B\u4FE1\u606F\u4E0D\u5B58\u5728</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u7535\u5B50\u7B7E\u7AE0\u6821\u9A8C\u65F6\uFF0C\u6309\u5151\u73B0\u5355ID\u67E5\u8BE2\u5DE5\u4F5C\u6D41\u6D41\u7A0B\u4FE1\u606F\u8FD4\u56DEnull</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u7535\u5B50\u7B7E\u7AE0\u9700\u5173\u8054\u5DE5\u4F5C\u6D41\u5B9E\u4F8B\u3002\u82E5\u5151\u73B0\u5355\u672A\u53D1\u8D77\u5DE5\u4F5C\u6D41\uFF08HZ_INSTANCE_ID\u4E3A\u7A7A\uFF09\u3001\u5DE5\u4F5C\u6D41\u5B9E\u4F8B\u5DF2\u88AB\u6E05\u7406\u3001\u6216\u5151\u73B0\u5355\u5DF2\u88AB\u5220\u9664\uFF0C\u67E5\u8BE2\u6D41\u7A0B\u4FE1\u606F\u8FD4\u56DE\u7A7A\uFF0C\u7B7E\u7AE0\u6821\u9A8C\u5931\u8D25\u3002\u5E38\u89C1\u6839\u56E0\uFF1A\u5355\u636E\u672A\u63D0\u4EA4\u5373\u89E6\u53D1\u7B7E\u7AE0\u3001\u5DE5\u4F5C\u6D41\u5B9E\u4F8B\u8FC7\u671F\u3001\u6216\u5355\u636EID\u4F20\u503C\u9519\u8BEF\u3002</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> fee_cashout_id      </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5151\u73B0\u5355ID,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         fee_cashout_no      </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5151\u73B0\u5355\u53F7,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         hz_instance_id      </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5DE5\u4F5C\u6D41\u5B9E\u4F8BID,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         hz_approve_status   </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5BA1\u6279\u72B6\u6001,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         signature_state     </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7B7E\u7AE0\u72B6\u6001</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>   fin_fee_cashout_header</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  save_type </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>2</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    (hz_instance_id </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>OR</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> hz_approve_status </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>NEW</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ORDER  BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> create_time </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>DESC</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u951910\uFF1A\u95E8\u5E97\u7F16\u7801\u6216\u9884\u7B97\u5E74\u5EA6\u4E0D\u80FD\u4E3A\u7A7A</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u989D\u5EA6\u5916\u5151\u73B0\u5BA1\u6279\u901A\u8FC7\u540E\u66F4\u65B0\u989D\u5EA6\u5916\u9884\u7B97\u65F6\uFF0C\u95E8\u5E97\u7F16\u7801TERMINAL_CODE\u6216\u9884\u7B97\u5E74\u5EA6BUD_YEAR\u4E3A\u7A7A</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u989D\u5EA6\u5916\u9884\u7B97\u66F4\u65B0\u9700\u7528\u95E8\u5E97\u7F16\u7801\u548C\u9884\u7B97\u5E74\u5EA6\u5B9A\u4F4DMKT_OUTLIMIT_BUD_HEADER\u8BB0\u5F55\u3002\u82E5\u62A5\u9500\u5355\u672A\u5E26\u5165\u95E8\u5E97\u7F16\u7801\u3001\u9884\u7B97\u5E74\u5EA6\u672A\u586B\u5199\uFF0C\u6216\u5B57\u6BB5\u5728\u6D41\u8F6C\u4E2D\u4E22\u5931\uFF0C\u540E\u7AEF\u6821\u9A8C\u4E3A\u7A7A\u5373\u629B\u5F02\u5E38\uFF0C\u65E0\u6CD5\u66F4\u65B0\u9884\u7B97\u5DF2\u4F7F\u7528\u91D1\u989D\u3002</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> fee_cashout_id      </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5151\u73B0\u5355ID,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         fee_cashout_no      </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5151\u73B0\u5355\u53F7,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         terminal_code       </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u95E8\u5E97\u7F16\u7801,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         bud_year            </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u9884\u7B97\u5E74\u5EA6,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         cashout_type        </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5151\u73B0\u7C7B\u578B</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>   fin_fee_cashout_header</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  save_type </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>2</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    cashout_type </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>2</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    (terminal_code </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>OR</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> bud_year </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ORDER  BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> create_time </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>DESC</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u951911\uFF1A\u53EF\u5151\u73B0\u603B\u989D\u4E0D\u80FD\u4E3A\u96F6\u6216\u8D1F\u6570</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u989D\u5EA6\u5916\u9884\u7B97\u66F4\u65B0\u65F6\uFF0C\u8BFB\u53D6\u62A5\u9500\u5355\u53EF\u5151\u73B0\u603B\u989DTOTAL_CAN_CASHOUT_AMT&lt;=0</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u989D\u5EA6\u5916\u9884\u7B97\u66F4\u65B0\u9700\u7528\u53EF\u5151\u73B0\u603B\u989D\u8BA1\u7B97\u4F7F\u7528\u91D1\u989D\uFF08\u4F7F\u7528\u91D1\u989D=\u672C\u6B21\u7533\u8BF7\u91D1\u989D\xD7\u5151\u73B0\u6BD4\u4F8B\xF7\u7A0E\u7387\uFF09\u3002\u82E5\u53EF\u5151\u73B0\u603B\u989D\u4E3A0\u6216\u8D1F\u6570\uFF0C\u8BA1\u7B97\u7ED3\u679C\u5F02\u5E38\uFF0C\u629B\u5F02\u5E38\u7EC8\u6B62\u9884\u7B97\u66F4\u65B0\u3002\u5E38\u89C1\u6839\u56E0\uFF1A\u62A5\u9500\u5355\u53EF\u5151\u73B0\u603B\u989D\u88AB\u9519\u8BEF\u7F6E0\u3001\u6570\u636E\u8FC1\u79FB\u9519\u8BEF\u3001\u6216\u62A5\u9500\u5355\u672C\u8EAB\u91D1\u989D\u5F02\u5E38\u3002</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> fee_cashout_id      </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5151\u73B0\u5355ID,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         fee_cashout_no      </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5151\u73B0\u5355\u53F7,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         total_can_cashout_amt </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u53EF\u5151\u73B0\u603B\u989D,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         used_cashout_amt    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5DF2\u5151\u73B0\u603B\u989D,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         cashout_type        </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5151\u73B0\u7C7B\u578B</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>   fin_fee_cashout_header</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  save_type </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>2</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    cashout_type </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>2</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    (total_can_cashout_amt </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>OR</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> total_can_cashout_amt </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&lt;=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>0</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ORDER  BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> create_time </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>DESC</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u951912\uFF1A\u7A0E\u7387\u914D\u7F6E\u683C\u5F0F\u9519\u8BEF</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u989D\u5EA6\u5916\u9884\u7B97\u66F4\u65B0\u65F6\uFF0C\u8BFB\u53D6\u7CFB\u7EDF\u914D\u7F6ESCPSYSCONF\u4E2DOutlimit_Tax_Rate\u7684\u503C\u683C\u5F0F\u9519\u8BEF\uFF08\u975E\u6570\u5B57\u6216\u4E3A\u7A7A\uFF09</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u989D\u5EA6\u5916\u9884\u7B97\u4F7F\u7528\u91D1\u989D\u9700\u9664\u4EE5\u7A0E\u7387\uFF08\u4F7F\u7528\u91D1\u989D=\u672C\u6B21\u7533\u8BF7\u91D1\u989D\xD7\u5151\u73B0\u6BD4\u4F8B\xF7\u7A0E\u7387\uFF09\u3002\u7A0E\u7387\u4ECE\u7CFB\u7EDF\u914D\u7F6EOutlimit_Tax_Rate\u8BFB\u53D6\uFF0C\u82E5\u914D\u7F6E\u7F3A\u5931\u3001\u503C\u4E3A\u975E\u6570\u5B57\u5B57\u7B26\u4E32\u3001\u6216\u4E3A0\uFF08\u9664\u96F6\u5F02\u5E38\uFF09\uFF0C\u629B\u5F02\u5E38\u7EC8\u6B62\u9884\u7B97\u66F4\u65B0\u3002\u5E38\u89C1\u6839\u56E0\uFF1A\u8FD0\u7EF4\u672A\u914D\u7F6EOutlimit_Tax_Rate\u3001\u914D\u7F6E\u503C\u88AB\u8BEF\u6539\u3001\u6216\u683C\u5F0F\u4E0D\u89C4\u8303\u3002</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> confname            </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u914D\u7F6E\u540D\u79F0,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         confvalue           </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u914D\u7F6E\u503C</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>   scpsysconf</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  confname </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>Outlimit_Tax_Rate</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u951913\uFF1A\u989D\u5EA6\u5916\u9884\u7B97\u6570\u636E\u4E0D\u5B58\u5728\uFF0C\u8BF7\u68C0\u67E5\uFF01</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u989D\u5EA6\u5916\u5151\u73B0\u5BA1\u6279\u901A\u8FC7\u540E\u66F4\u65B0\u9884\u7B97\u65F6\uFF0C\u6309\u95E8\u5E97\u7F16\u7801+\u9884\u7B97\u5E74\u5EA6\u67E5\u8BE2MKT_OUTLIMIT_BUD_HEADER\u8FD4\u56DEnull</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u989D\u5EA6\u5916\u9884\u7B97\u66F4\u65B0\u9700\u5B9A\u4F4D\u9884\u7B97\u5934\u8868\u8BB0\u5F55\u3002\u82E5\u8BE5\u95E8\u5E97\u8BE5\u5E74\u5EA6\u672A\u914D\u7F6E\u989D\u5EA6\u5916\u9884\u7B97\u3001\u9884\u7B97\u5DF2\u88AB\u5220\u9664\u3001\u6216\u95E8\u5E97\u7F16\u7801\u4E0E\u9884\u7B97\u5E74\u5EA6\u4E0D\u5339\u914D\uFF0C\u67E5\u8BE2\u8FD4\u56DE\u7A7A\uFF0C\u65E0\u6CD5\u66F4\u65B0\u5DF2\u4F7F\u7528\u91D1\u989D\uFF0C\u629B\u5F02\u5E38\u3002\u5E38\u89C1\u6839\u56E0\uFF1A\u9884\u7B97\u672A\u914D\u7F6E\u3001\u95E8\u5E97\u672A\u7EB3\u5165\u9884\u7B97\u8303\u56F4\u3001\u6216\u9884\u7B97\u5E74\u5EA6\u9519\u8BEF\u3002</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> c.fee_cashout_id      </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5151\u73B0\u5355ID,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         c.fee_cashout_no      </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5151\u73B0\u5355\u53F7,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         c.terminal_code       </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u95E8\u5E97\u7F16\u7801,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         c.bud_year            </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u9884\u7B97\u5E74\u5EA6,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         b.terminal_code       </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u9884\u7B97\u95E8\u5E97\u7F16\u7801</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>   fin_fee_cashout_header c</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>LEFT   JOIN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> mkt_outlimit_bud_header b</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ON</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> b.terminal_code </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> c.terminal_code</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>        </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> b.bud_year </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> c.bud_year</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  c.save_type </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>2</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    c.cashout_type </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>2</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    b.terminal_code </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ORDER  BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> c.create_time </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>DESC</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
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
                createVNode("td", null, "\u53D1\u7968\u91D1\u989D\u5F02\u5E38\uFF0C\u8BF7\u68C0\u67E5\uFF01"),
                createVNode("td", null, "\u63D0\u4EA4"),
                createVNode("td", null, "\u5B9E\u9645\u5151\u73B0\u91D1\u989D<=0\uFF0C\u68C0\u67E5\u53D1\u7968\u91D1\u989D"),
                createVNode("td", null, "\u963B\u65AD\u6027\u62A5\u9519"),
                createVNode("td", null, "[\u67E5\u770B](#\u62A5\u95191\u53D1\u7968\u91D1\u989D\u5F02\u5E38\u8BF7\u68C0\u67E5)")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u672C\u6B21\u7533\u8BF7\u5151\u73B0\u91D1\u989D\u4E0D\u53EF\u8D85\u8FC7\u8BE5\u62A5\u9500\u5355\u636E\u5269\u4F59\u7684\u53EF\u5151\u73B0\u91D1\u989D"),
                createVNode("td", null, "\u63D0\u4EA4"),
                createVNode("td", null, "\u5151\u73B0\u91D1\u989D\u8D85\u9650\uFF0C\u51CF\u5C11\u672C\u6B21\u5151\u73B0\u91D1\u989D"),
                createVNode("td", null, "\u963B\u65AD\u6027\u62A5\u9519"),
                createVNode("td", null, "[\u67E5\u770B](#\u62A5\u95192\u672C\u6B21\u7533\u8BF7\u5151\u73B0\u91D1\u989D\u4E0D\u53EF\u8D85\u8FC7\u8BE5\u62A5\u9500\u5355\u636E\u5269\u4F59\u7684\u53EF\u5151\u73B0\u91D1\u989D)")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u672C\u6B21\u6838\u9500\u91D1\u989D\u4E0D\u53EF\u8D85\u8FC7\u989D\u5EA6\u5185\u53EF\u7528\u91D1\u989D"),
                createVNode("td", null, "\u63D0\u4EA4"),
                createVNode("td", null, "\u989D\u5EA6\u5185\u6838\u9500\u91D1\u989D\u8D85\u9650\uFF0C\u51CF\u5C11\u6838\u9500\u91D1\u989D"),
                createVNode("td", null, "\u963B\u65AD\u6027\u62A5\u9519"),
                createVNode("td", null, "[\u67E5\u770B](#\u62A5\u95193\u672C\u6B21\u6838\u9500\u91D1\u989D\u4E0D\u53EF\u8D85\u8FC7\u989D\u5EA6\u5185\u53EF\u7528\u91D1\u989D)")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u672C\u6B21\u7533\u8BF7\u5151\u73B0\u91D1\u989D\u4E0D\u53EF\u8D85\u8FC7\u989D\u5EA6\u5916\u53EF\u7528\u91D1\u989D"),
                createVNode("td", null, "\u63D0\u4EA4"),
                createVNode("td", null, "\u989D\u5EA6\u5916\u5151\u73B0\u91D1\u989D\u8D85\u9650\uFF0C\u51CF\u5C11\u5151\u73B0\u91D1\u989D"),
                createVNode("td", null, "\u963B\u65AD\u6027\u62A5\u9519"),
                createVNode("td", null, "[\u67E5\u770B](#\u62A5\u95194\u672C\u6B21\u7533\u8BF7\u5151\u73B0\u91D1\u989D\u4E0D\u53EF\u8D85\u8FC7\u989D\u5EA6\u5916\u53EF\u7528\u91D1\u989D)")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u989D\u5EA6\u5916\u91D1\u989D\u5DF2\u5360\u7528"),
                createVNode("td", null, "\u63D0\u4EA4"),
                createVNode("td", null, "\u989D\u5EA6\u5916\u53EF\u7528\u91D1\u989D\u5DF2\u88AB\u5176\u4ED6\u5355\u636E\u5360\u7528\uFF0C\u51CF\u5C11\u5151\u73B0\u91D1\u989D"),
                createVNode("td", null, "\u963B\u65AD\u6027\u62A5\u9519"),
                createVNode("td", null, "[\u67E5\u770B](#\u62A5\u95195\u989D\u5EA6\u5916\u91D1\u989D\u5DF2\u5360\u7528)")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7533\u8BF7\u5151\u73B0\u91D1\u989D\u5DF2\u8D85\u5269\u4F59\u672A\u5151\u73B0\u603B\u989D"),
                createVNode("td", null, "\u63D0\u4EA4"),
                createVNode("td", null, "\u5E76\u53D1\u5151\u73B0\u5BFC\u81F4\u5269\u4F59\u4E0D\u8DB3\uFF0C\u5237\u65B0\u540E\u91CD\u65B0\u63D0\u4EA4"),
                createVNode("td", null, "\u963B\u65AD\u6027\u62A5\u9519"),
                createVNode("td", null, "[\u67E5\u770B](#\u62A5\u95196\u7533\u8BF7\u5151\u73B0\u91D1\u989D\u5DF2\u8D85\u5269\u4F59\u672A\u5151\u73B0\u603B\u989D)")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6D41\u7A0B\u4E2Dobjid\u4E3A0\uFF0C\u6D41\u7A0B\u5931\u8D25\uFF01"),
                createVNode("td", null, "\u63D0\u4EA4"),
                createVNode("td", null, "\u5DE5\u4F5C\u6D41\u7F3A\u5C11\u5355\u636EID"),
                createVNode("td", null, "\u963B\u65AD\u6027\u62A5\u9519"),
                createVNode("td", null, "[\u67E5\u770B](#\u62A5\u95197\u6D41\u7A0B\u4E2Dobjid\u4E3A0\u6D41\u7A0B\u5931\u8D25)")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5151\u73B0\u7C7B\u578B\u5F02\u5E38\uFF01"),
                createVNode("td", null, "ERP\u540C\u6B65"),
                createVNode("td", null, "\u5151\u73B0\u7C7B\u578B\u975E1\u62162\uFF0C\u68C0\u67E5\u6570\u636E"),
                createVNode("td", null, "\u963B\u65AD\u6027\u62A5\u9519"),
                createVNode("td", null, "[\u67E5\u770B](#\u62A5\u95198\u5151\u73B0\u7C7B\u578B\u5F02\u5E38)")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u8BE5\u5355\u636E\u6D41\u7A0B\u4FE1\u606F\u4E0D\u5B58\u5728"),
                createVNode("td", null, "\u7B7E\u7AE0\u6821\u9A8C"),
                createVNode("td", null, "\u5355\u636E\u4E0D\u5B58\u5728\u6216\u6D41\u7A0B\u4FE1\u606F\u7F3A\u5931"),
                createVNode("td", null, "\u963B\u65AD\u6027\u62A5\u9519"),
                createVNode("td", null, "[\u67E5\u770B](#\u62A5\u95199\u8BE5\u5355\u636E\u6D41\u7A0B\u4FE1\u606F\u4E0D\u5B58\u5728)")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u95E8\u5E97\u7F16\u7801\u6216\u9884\u7B97\u5E74\u5EA6\u4E0D\u80FD\u4E3A\u7A7A"),
                createVNode("td", null, "\u989D\u5EA6\u5916\u9884\u7B97\u66F4\u65B0"),
                createVNode("td", null, "\u95E8\u5E97\u7F16\u7801\u6216\u9884\u7B97\u5E74\u5EA6\u7F3A\u5931"),
                createVNode("td", null, "\u963B\u65AD\u6027\u62A5\u9519"),
                createVNode("td", null, "[\u67E5\u770B](#\u62A5\u951910\u95E8\u5E97\u7F16\u7801\u6216\u9884\u7B97\u5E74\u5EA6\u4E0D\u80FD\u4E3A\u7A7A)")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u53EF\u5151\u73B0\u603B\u989D\u4E0D\u80FD\u4E3A\u96F6\u6216\u8D1F\u6570"),
                createVNode("td", null, "\u989D\u5EA6\u5916\u9884\u7B97\u66F4\u65B0"),
                createVNode("td", null, "\u53EF\u5151\u73B0\u603B\u989D\u5F02\u5E38"),
                createVNode("td", null, "\u963B\u65AD\u6027\u62A5\u9519"),
                createVNode("td", null, "[\u67E5\u770B](#\u62A5\u951911\u53EF\u5151\u73B0\u603B\u989D\u4E0D\u80FD\u4E3A\u96F6\u6216\u8D1F\u6570)")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7A0E\u7387\u914D\u7F6E\u683C\u5F0F\u9519\u8BEF"),
                createVNode("td", null, "\u989D\u5EA6\u5916\u9884\u7B97\u66F4\u65B0"),
                createVNode("td", null, "\u7CFB\u7EDF\u914D\u7F6EOutlimit_Tax_Rate\u683C\u5F0F\u9519\u8BEF"),
                createVNode("td", null, "\u963B\u65AD\u6027\u62A5\u9519"),
                createVNode("td", null, "[\u67E5\u770B](#\u62A5\u951912\u7A0E\u7387\u914D\u7F6E\u683C\u5F0F\u9519\u8BEF)")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u989D\u5EA6\u5916\u9884\u7B97\u6570\u636E\u4E0D\u5B58\u5728\uFF0C\u8BF7\u68C0\u67E5\uFF01"),
                createVNode("td", null, "\u989D\u5EA6\u5916\u9884\u7B97\u66F4\u65B0"),
                createVNode("td", null, "\u989D\u5EA6\u5916\u9884\u7B97\u672A\u914D\u7F6E"),
                createVNode("td", null, "\u963B\u65AD\u6027\u62A5\u9519"),
                createVNode("td", null, "[\u67E5\u770B](#\u62A5\u951913\u989D\u5EA6\u5916\u9884\u7B97\u6570\u636E\u4E0D\u5B58\u5728\u8BF7\u68C0\u67E5)")
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95191\uFF1A\u53D1\u7968\u91D1\u989D\u5F02\u5E38\uFF0C\u8BF7\u68C0\u67E5\uFF01"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode('\uFF1A\u70B9\u51FB"\u63D0\u4EA4"\u6216"\u4FDD\u5B58"\u6309\u94AE\uFF0C\u652F\u4ED8\u65B9\u5F0F\u975E3\uFF08\u975E\u865A\u62DF\u6536\u6B3E\uFF09\u65F6\uFF0C\u6821\u9A8C\u53D1\u7968\u5B9E\u9645\u5151\u73B0\u91D1\u989DfactInvoiceAmt<=0')
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u5151\u73B0\u5355\u9700\u6709\u6709\u6548\u53D1\u7968\u91D1\u989D\u624D\u80FD\u8FDB\u884C\u6838\u9500\u4E0E\u9884\u7B97\u66F4\u65B0\u3002\u6821\u9A8C\u903B\u8F91\u8BFB\u53D6FIN_FEE_CASHOUT_HEADER.FACT_INVOICE_AMT\uFF0C\u5F53PAY_TYPE\u22603\u4E14FACT_INVOICE_AMT<=0\u65F6\u629B\u51FA\u963B\u65AD\u6027\u5F02\u5E38\u3002\u5E38\u89C1\u6839\u56E0\uFF1A\u7528\u6237\u672A\u586B\u5199\u53D1\u7968\u91D1\u989D\u3001\u53D1\u7968\u91D1\u989D\u88AB\u9519\u8BEF\u7F6E0\u6216\u8D1F\u6570\u3001\u6216\u524D\u7AEF\u672A\u505A\u5FC5\u586B\u6821\u9A8C\u76F4\u63A5\u63D0\u4EA4\u7A7A\u5355\u3002")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " fee_cashout_id      "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5151\u73B0\u5355ID,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         fee_cashout_no      "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5151\u73B0\u5355\u53F7,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         pay_type            "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u652F\u4ED8\u65B9\u5F0F,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         fact_invoice_amt    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5B9E\u9645\u5151\u73B0\u91D1\u989D,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         hz_approve_status   "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5BA1\u6279\u72B6\u6001")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "   fin_fee_cashout_header")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  save_type "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "2")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    pay_type "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "<>"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "3")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    (fact_invoice_amt "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NULL"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "OR"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " fact_invoice_amt "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "<="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ")")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ORDER  BY"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " create_time "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "DESC"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95192\uFF1A\u672C\u6B21\u7533\u8BF7\u5151\u73B0\u91D1\u989D\u4E0D\u53EF\u8D85\u8FC7\u8BE5\u62A5\u9500\u5355\u636E\u5269\u4F59\u7684\u53EF\u5151\u73B0\u91D1\u989D"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode('\uFF1A\u70B9\u51FB"\u63D0\u4EA4"\u6309\u94AE\uFF0C\u6821\u9A8C\u672C\u6B21\u5151\u73B0\u91D1\u989DthisCashoutAmt>\u62A5\u9500\u5355\u5269\u4F59\u53EF\u5151\u73B0\u91D1\u989D\uFF08TOTAL_CAN_CASHOUT_AMT-USED_CASHOUT_AMT\uFF09')
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u5151\u73B0\u91D1\u989D\u53D7\u62A5\u9500\u5355\u53EF\u5151\u73B0\u603B\u989D\u7EA6\u675F\u3002\u6821\u9A8C\u903B\u8F91\u4ECE\u5173\u8054\u62A5\u9500\u5355FIN_FEE_BX_HEADER\u8BFB\u53D6\u53EF\u5151\u73B0\u603B\u989D\u4E0E\u5DF2\u5151\u73B0\u603B\u989D\uFF0C\u82E5\u672C\u6B21\u5151\u73B0\u91D1\u989D\u8D85\u8FC7\u5269\u4F59\u53EF\u5151\u73B0\uFF08\u53EF\u5151\u73B0\u603B\u989D-\u5DF2\u5151\u73B0\u603B\u989D\uFF09\u5219\u629B\u5F02\u5E38\u3002\u5E38\u89C1\u6839\u56E0\uFF1A\u7528\u6237\u8F93\u5165\u91D1\u989D\u8D85\u9650\u3001\u62A5\u9500\u5355\u5DF2\u88AB\u5176\u4ED6\u5151\u73B0\u5355\u5360\u7528\u90E8\u5206\u989D\u5EA6\u3001\u6216\u524D\u7AEF\u672A\u5B9E\u65F6\u5237\u65B0\u5269\u4F59\u53EF\u5151\u73B0\u91D1\u989D\u3002")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " c.fee_cashout_id      "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5151\u73B0\u5355ID,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         c.fee_cashout_no      "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5151\u73B0\u5355\u53F7,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         c.bx_no               "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u62A5\u9500\u5355\u53F7,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         c.this_cashout_amt    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u672C\u6B21\u5151\u73B0\u91D1\u989D,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         c.total_can_cashout_amt "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u53EF\u5151\u73B0\u603B\u989D,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         c.used_cashout_amt    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5DF2\u5151\u73B0\u603B\u989D,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         c.total_can_cashout_amt "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "-"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " c.used_cashout_amt "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5269\u4F59\u53EF\u5151\u73B0")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "   fin_fee_cashout_header c")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  c.save_type "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "2")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    c.this_cashout_amt "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " (c.total_can_cashout_amt "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "-"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " c.used_cashout_amt)")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ORDER  BY"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " c.create_time "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "DESC"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95193\uFF1A\u672C\u6B21\u6838\u9500\u91D1\u989D\u4E0D\u53EF\u8D85\u8FC7\u989D\u5EA6\u5185\u53EF\u7528\u91D1\u989D"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode('\uFF1A\u70B9\u51FB"\u63D0\u4EA4"\u6309\u94AE\uFF0C\u5151\u73B0\u7C7B\u578B\u4E3A\u989D\u5EA6\u5185\uFF08CASHOUT_TYPE=1\uFF09\u65F6\uFF0C\u6821\u9A8C\u672C\u6B21\u6838\u9500\u91D1\u989DthisWriteoffAmt>\u989D\u5EA6\u5185\u53EF\u7528\u91D1\u989DinCanUseAmt')
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u989D\u5EA6\u5185\u5151\u73B0\u9700\u6838\u9500\u8D44\u6E90\u989D\u5EA6\uFF0C\u6838\u9500\u91D1\u989D\u4E0D\u80FD\u8D85\u8FC7\u5F53\u524D\u53EF\u7528\u989D\u5EA6\u3002\u6821\u9A8C\u903B\u8F91\u8BFB\u53D6FIN_FEE_CASHOUT_HEADER.THIS_WRITEOFF_AMT\u4E0EIN_CAN_USE_AMT\uFF0C\u5F53CASHOUT_TYPE=1\u4E14THIS_WRITEOFF_AMT>IN_CAN_USE_AMT\u65F6\u629B\u5F02\u5E38\u3002\u5E38\u89C1\u6839\u56E0\uFF1A\u8D44\u6E90\u989D\u5EA6\u5DF2\u88AB\u5176\u4ED6\u5355\u636E\u5360\u7528\u3001\u989D\u5EA6\u672A\u53CA\u65F6\u5237\u65B0\u3001\u6216\u7528\u6237\u8F93\u5165\u6838\u9500\u91D1\u989D\u8D85\u9650\u3002")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " fee_cashout_id      "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5151\u73B0\u5355ID,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         fee_cashout_no      "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5151\u73B0\u5355\u53F7,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         cashout_type        "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5151\u73B0\u7C7B\u578B,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         this_writeoff_amt   "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u672C\u6B21\u6838\u9500\u91D1\u989D,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         in_can_use_amt      "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u989D\u5EA6\u5185\u53EF\u7528\u91D1\u989D,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         hz_approve_status   "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5BA1\u6279\u72B6\u6001")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "   fin_fee_cashout_header")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  save_type "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "2")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    cashout_type "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "1")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    this_writeoff_amt "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " in_can_use_amt")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ORDER  BY"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " create_time "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "DESC"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95194\uFF1A\u672C\u6B21\u7533\u8BF7\u5151\u73B0\u91D1\u989D\u4E0D\u53EF\u8D85\u8FC7\u989D\u5EA6\u5916\u53EF\u7528\u91D1\u989D"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode('\uFF1A\u70B9\u51FB"\u63D0\u4EA4"\u6309\u94AE\uFF0C\u5151\u73B0\u7C7B\u578B\u4E3A\u989D\u5EA6\u5916\uFF08CASHOUT_TYPE=2\uFF09\u65F6\uFF0C\u6821\u9A8C\u672C\u6B21\u5151\u73B0\u91D1\u989DthisCashoutAmt>\u989D\u5EA6\u5916\u53EF\u7528\u91D1\u989DoutCanUseAmt')
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u989D\u5EA6\u5916\u5151\u73B0\u53D7\u989D\u5EA6\u5916\u9884\u7B97\u53EF\u7528\u91D1\u989D\u7EA6\u675F\u3002\u6821\u9A8C\u903B\u8F91\u8BFB\u53D6FIN_FEE_CASHOUT_HEADER.THIS_CASHOUT_AMT\u4E0EOUT_CAN_USE_AMT\uFF0C\u5F53CASHOUT_TYPE=2\u4E14THIS_CASHOUT_AMT>OUT_CAN_USE_AMT\u65F6\u629B\u5F02\u5E38\u3002\u5E38\u89C1\u6839\u56E0\uFF1A\u989D\u5EA6\u5916\u9884\u7B97\u5DF2\u4F7F\u7528\u8F83\u591A\u3001\u53EF\u7528\u91D1\u989D\u672A\u53CA\u65F6\u5237\u65B0\u3001\u6216\u7528\u6237\u8F93\u5165\u5151\u73B0\u91D1\u989D\u8D85\u9650\u3002")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " fee_cashout_id      "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5151\u73B0\u5355ID,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         fee_cashout_no      "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5151\u73B0\u5355\u53F7,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         cashout_type        "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5151\u73B0\u7C7B\u578B,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         this_cashout_amt    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u672C\u6B21\u5151\u73B0\u91D1\u989D,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         out_can_use_amt     "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u989D\u5EA6\u5916\u53EF\u7528\u91D1\u989D,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         hz_approve_status   "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5BA1\u6279\u72B6\u6001")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "   fin_fee_cashout_header")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  save_type "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "2")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    cashout_type "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "2")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    this_cashout_amt "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " out_can_use_amt")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ORDER  BY"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " create_time "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "DESC"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95195\uFF1A\u989D\u5EA6\u5916\u91D1\u989D\u5DF2\u5360\u7528"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode('\uFF1A\u70B9\u51FB"\u63D0\u4EA4"\u6309\u94AE\uFF0C\u5151\u73B0\u7C7B\u578B\u4E3A\u989D\u5EA6\u5916\uFF08CASHOUT_TYPE=2\uFF09\u65F6\uFF0C\u6821\u9A8C\u672C\u6B21\u5151\u73B0\u91D1\u989D>\u989D\u5EA6\u5916\u53EF\u7528\u91D1\u989D-\u5DF2\u5360\u7528\u91D1\u989D')
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u989D\u5EA6\u5916\u53EF\u7528\u91D1\u989D\u9700\u6263\u9664\u5DF2\u88AB\u5176\u4ED6\u5355\u636E\u5360\u7528\u90E8\u5206\u3002\u6821\u9A8C\u903B\u8F91\u67E5\u8BE2MKT_OUTLIMIT_BUD_HEADER\u7684\u5DF2\u5360\u7528\u91D1\u989D\uFF0C\u82E5\u672C\u6B21\u5151\u73B0\u91D1\u989D\u8D85\u8FC7\u5269\u4F59\u53EF\u7528\uFF08\u53EF\u7528\u91D1\u989D-\u5DF2\u5360\u7528\u91D1\u989D\uFF09\u5219\u629B\u5F02\u5E38\u3002\u5E38\u89C1\u6839\u56E0\uFF1A\u5E76\u53D1\u63D0\u4EA4\u5BFC\u81F4\u989D\u5EA6\u5916\u53EF\u7528\u91D1\u989D\u88AB\u5176\u4ED6\u5151\u73B0\u5355\u5360\u7528\u3001\u6216\u524D\u7AEF\u672A\u5B9E\u65F6\u83B7\u53D6\u6700\u65B0\u5DF2\u5360\u7528\u91D1\u989D\u3002")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " c.fee_cashout_id      "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5151\u73B0\u5355ID,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         c.fee_cashout_no      "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5151\u73B0\u5355\u53F7,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         c.this_cashout_amt    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u672C\u6B21\u5151\u73B0\u91D1\u989D,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         c.out_can_use_amt     "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u989D\u5EA6\u5916\u53EF\u7528\u91D1\u989D,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         b.this_outlimit_bud_used_amt "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5DF2\u5360\u7528\u91D1\u989D,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         c.out_can_use_amt "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "-"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " b.this_outlimit_bud_used_amt "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5269\u4F59\u53EF\u7528")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "   fin_fee_cashout_header c")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "LEFT   JOIN"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " mkt_outlimit_bud_header b")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ON"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " b.terminal_code "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " c.terminal_code")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "        "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " b.bud_year "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " c.bud_year")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  c.save_type "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "2")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    c.cashout_type "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "2")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    c.this_cashout_amt "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " (c.out_can_use_amt "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "-"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " NVL(b.this_outlimit_bud_used_amt, "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "))")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ORDER  BY"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " c.create_time "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "DESC"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95196\uFF1A\u7533\u8BF7\u5151\u73B0\u91D1\u989D\u5DF2\u8D85\u5269\u4F59\u672A\u5151\u73B0\u603B\u989D"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode('\uFF1A\u70B9\u51FB"\u63D0\u4EA4"\u6309\u94AE\uFF0C\u63D0\u4EA4\u65F6\u4E8C\u6B21\u6821\u9A8C\u53EF\u5151\u73B0\u603B\u989D-\u5DF2\u4F7F\u7528\u5151\u73B0\u91D1\u989D-\u672C\u6B21\u5151\u73B0\u91D1\u989D<0')
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u63D0\u4EA4\u65F6\u518D\u6B21\u6821\u9A8C\u9632\u6B62\u5E76\u53D1\u5151\u73B0\u5BFC\u81F4\u8D85\u989D\u3002\u6821\u9A8C\u903B\u8F91\u91CD\u65B0\u67E5\u8BE2\u5173\u8054\u62A5\u9500\u5355\u7684\u5DF2\u4F7F\u7528\u5151\u73B0\u91D1\u989D\uFF0C\u82E5\u53EF\u5151\u73B0\u603B\u989D-\u5DF2\u4F7F\u7528-\u672C\u6B21\u5151\u73B0<0\u5219\u629B\u5F02\u5E38\u3002\u5E38\u89C1\u6839\u56E0\uFF1A\u591A\u7528\u6237\u5E76\u53D1\u5BF9\u540C\u4E00\u62A5\u9500\u5355\u63D0\u4EA4\u5151\u73B0\u3001\u6216\u4FDD\u5B58\u540E\u5230\u63D0\u4EA4\u671F\u95F4\u5176\u4ED6\u5151\u73B0\u5355\u5DF2\u5360\u7528\u989D\u5EA6\uFF0C\u9700\u5237\u65B0\u540E\u91CD\u65B0\u63D0\u4EA4\u3002")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " c.fee_cashout_id      "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5151\u73B0\u5355ID,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         c.fee_cashout_no      "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5151\u73B0\u5355\u53F7,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         c.bx_id               "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u62A5\u9500\u5355ID,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         c.total_can_cashout_amt "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u53EF\u5151\u73B0\u603B\u989D,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         c.used_cashout_amt    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5DF2\u5151\u73B0\u603B\u989D,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         c.this_cashout_amt    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u672C\u6B21\u5151\u73B0\u91D1\u989D,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         c.total_can_cashout_amt "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "-"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " c.used_cashout_amt "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "-"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " c.this_cashout_amt "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u63D0\u4EA4\u540E\u5269\u4F59")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "   fin_fee_cashout_header c")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  c.save_type "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "2")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    c.hz_approve_status "),
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    (c.total_can_cashout_amt "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "-"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " c.used_cashout_amt "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "-"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " c.this_cashout_amt) "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "0")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ORDER  BY"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " c.create_time "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "DESC"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95197\uFF1A\u6D41\u7A0B\u4E2Dobjid\u4E3A0\uFF0C\u6D41\u7A0B\u5931\u8D25\uFF01"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode('\uFF1A\u70B9\u51FB"\u63D0\u4EA4"\u6309\u94AE\uFF0C\u53D1\u8D77\u5DE5\u4F5C\u6D41ADJ_GGBXFPDX\u65F6\uFF0C\u4F20\u5165\u7684objid\uFF08\u5355\u636E\u4E3B\u952EFEE_CASHOUT_ID\uFF09\u4E3A0\u6216null')
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u5DE5\u4F5C\u6D41\u5F15\u64CE\u9700\u7528objid\u5173\u8054\u4E1A\u52A1\u5355\u636E\u3002\u82E5\u4FDD\u5B58\u65F6\u672A\u6B63\u786E\u56DE\u5199FEE_CASHOUT_ID\uFF08\u5982\u81EA\u589E\u5E8F\u5217\u672A\u53D6\u56DE\u3001\u4E8B\u52A1\u672A\u63D0\u4EA4\u5373\u53D1\u8D77\u6D41\u7A0B\uFF09\uFF0C\u6216\u524D\u7AEF\u672A\u4F20id\u5B57\u6BB5\uFF0C\u4F1A\u5BFC\u81F4objid=0\u3002\u5DE5\u4F5C\u6D41\u65E0\u6CD5\u5B9A\u4F4D\u5151\u73B0\u5355\uFF0C\u6D41\u7A0B\u53D1\u8D77\u5931\u8D25\u3002")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " fee_cashout_id      "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5151\u73B0\u5355ID,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         fee_cashout_no      "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5151\u73B0\u5355\u53F7,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         hz_instance_id      "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5DE5\u4F5C\u6D41\u5B9E\u4F8BID,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         hz_approve_status   "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5BA1\u6279\u72B6\u6001")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "   fin_fee_cashout_header")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  save_type "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "2")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    (fee_cashout_id "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "OR"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " fee_cashout_id "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NULL"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ")")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ORDER  BY"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " create_time "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "DESC"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95198\uFF1A\u5151\u73B0\u7C7B\u578B\u5F02\u5E38\uFF01"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1AERP\u8D44\u91D1\u6C60\u540C\u6B65\u65F6\uFF0C\u8BFB\u53D6\u5151\u73B0\u5355CASHOUT_TYPE\u65E2\u975E1\uFF08\u989D\u5EA6\u5185\uFF09\u4E5F\u975E2\uFF08\u989D\u5EA6\u5916\uFF09")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode('\uFF1AERP\u540C\u6B65\u9700\u6839\u636E\u5151\u73B0\u7C7B\u578B\u51B3\u5B9AsourceType\uFF08\u989D\u5EA6\u5185="\u5E7F\u544A\u8D39\uFF08\u989D\u5185\uFF09"\uFF0C\u989D\u5EA6\u5916="\u5E7F\u544A\u8D39\uFF08\u989D\u5916\uFF09"\uFF09\u3002\u82E5CASHOUT_TYPE\u88AB\u9519\u8BEF\u5199\u5165\u5176\u4ED6\u503C\uFF08\u59820\u30013\u3001null\uFF09\uFF0C\u65E0\u6CD5\u5339\u914DsourceType\u5206\u652F\uFF0C\u629B\u5F02\u5E38\u7EC8\u6B62\u540C\u6B65\u3002\u5E38\u89C1\u6839\u56E0\uFF1A\u6570\u636E\u8FC1\u79FB\u9519\u8BEF\u3001\u624B\u52A8\u4FEE\u6539\u6570\u636E\u5E93\u3001\u6216\u65B0\u5EFA\u65F6\u672A\u6B63\u786E\u521D\u59CB\u5316\u5151\u73B0\u7C7B\u578B\u3002')
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " fee_cashout_id      "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5151\u73B0\u5355ID,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         fee_cashout_no      "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5151\u73B0\u5355\u53F7,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         cashout_type        "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5151\u73B0\u7C7B\u578B,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         hz_approve_status   "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5BA1\u6279\u72B6\u6001")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "   fin_fee_cashout_header")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  save_type "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "2")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    cashout_type "),
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " create_time "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "DESC"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95199\uFF1A\u8BE5\u5355\u636E\u6D41\u7A0B\u4FE1\u606F\u4E0D\u5B58\u5728"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u7535\u5B50\u7B7E\u7AE0\u6821\u9A8C\u65F6\uFF0C\u6309\u5151\u73B0\u5355ID\u67E5\u8BE2\u5DE5\u4F5C\u6D41\u6D41\u7A0B\u4FE1\u606F\u8FD4\u56DEnull")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u7535\u5B50\u7B7E\u7AE0\u9700\u5173\u8054\u5DE5\u4F5C\u6D41\u5B9E\u4F8B\u3002\u82E5\u5151\u73B0\u5355\u672A\u53D1\u8D77\u5DE5\u4F5C\u6D41\uFF08HZ_INSTANCE_ID\u4E3A\u7A7A\uFF09\u3001\u5DE5\u4F5C\u6D41\u5B9E\u4F8B\u5DF2\u88AB\u6E05\u7406\u3001\u6216\u5151\u73B0\u5355\u5DF2\u88AB\u5220\u9664\uFF0C\u67E5\u8BE2\u6D41\u7A0B\u4FE1\u606F\u8FD4\u56DE\u7A7A\uFF0C\u7B7E\u7AE0\u6821\u9A8C\u5931\u8D25\u3002\u5E38\u89C1\u6839\u56E0\uFF1A\u5355\u636E\u672A\u63D0\u4EA4\u5373\u89E6\u53D1\u7B7E\u7AE0\u3001\u5DE5\u4F5C\u6D41\u5B9E\u4F8B\u8FC7\u671F\u3001\u6216\u5355\u636EID\u4F20\u503C\u9519\u8BEF\u3002")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " fee_cashout_id      "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5151\u73B0\u5355ID,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         fee_cashout_no      "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5151\u73B0\u5355\u53F7,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         hz_instance_id      "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5DE5\u4F5C\u6D41\u5B9E\u4F8BID,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         hz_approve_status   "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5BA1\u6279\u72B6\u6001,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         signature_state     "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7B7E\u7AE0\u72B6\u6001")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "   fin_fee_cashout_header")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  save_type "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "2")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    (hz_instance_id "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NULL"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "OR"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " hz_approve_status "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "NEW"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ")")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ORDER  BY"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " create_time "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "DESC"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u951910\uFF1A\u95E8\u5E97\u7F16\u7801\u6216\u9884\u7B97\u5E74\u5EA6\u4E0D\u80FD\u4E3A\u7A7A"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u989D\u5EA6\u5916\u5151\u73B0\u5BA1\u6279\u901A\u8FC7\u540E\u66F4\u65B0\u989D\u5EA6\u5916\u9884\u7B97\u65F6\uFF0C\u95E8\u5E97\u7F16\u7801TERMINAL_CODE\u6216\u9884\u7B97\u5E74\u5EA6BUD_YEAR\u4E3A\u7A7A")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u989D\u5EA6\u5916\u9884\u7B97\u66F4\u65B0\u9700\u7528\u95E8\u5E97\u7F16\u7801\u548C\u9884\u7B97\u5E74\u5EA6\u5B9A\u4F4DMKT_OUTLIMIT_BUD_HEADER\u8BB0\u5F55\u3002\u82E5\u62A5\u9500\u5355\u672A\u5E26\u5165\u95E8\u5E97\u7F16\u7801\u3001\u9884\u7B97\u5E74\u5EA6\u672A\u586B\u5199\uFF0C\u6216\u5B57\u6BB5\u5728\u6D41\u8F6C\u4E2D\u4E22\u5931\uFF0C\u540E\u7AEF\u6821\u9A8C\u4E3A\u7A7A\u5373\u629B\u5F02\u5E38\uFF0C\u65E0\u6CD5\u66F4\u65B0\u9884\u7B97\u5DF2\u4F7F\u7528\u91D1\u989D\u3002")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " fee_cashout_id      "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5151\u73B0\u5355ID,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         fee_cashout_no      "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5151\u73B0\u5355\u53F7,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         terminal_code       "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u95E8\u5E97\u7F16\u7801,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         bud_year            "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u9884\u7B97\u5E74\u5EA6,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         cashout_type        "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5151\u73B0\u7C7B\u578B")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "   fin_fee_cashout_header")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  save_type "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "2")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    cashout_type "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "2")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    (terminal_code "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NULL"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "OR"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " bud_year "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NULL"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ")")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ORDER  BY"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " create_time "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "DESC"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u951911\uFF1A\u53EF\u5151\u73B0\u603B\u989D\u4E0D\u80FD\u4E3A\u96F6\u6216\u8D1F\u6570"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u989D\u5EA6\u5916\u9884\u7B97\u66F4\u65B0\u65F6\uFF0C\u8BFB\u53D6\u62A5\u9500\u5355\u53EF\u5151\u73B0\u603B\u989DTOTAL_CAN_CASHOUT_AMT<=0")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u989D\u5EA6\u5916\u9884\u7B97\u66F4\u65B0\u9700\u7528\u53EF\u5151\u73B0\u603B\u989D\u8BA1\u7B97\u4F7F\u7528\u91D1\u989D\uFF08\u4F7F\u7528\u91D1\u989D=\u672C\u6B21\u7533\u8BF7\u91D1\u989D\xD7\u5151\u73B0\u6BD4\u4F8B\xF7\u7A0E\u7387\uFF09\u3002\u82E5\u53EF\u5151\u73B0\u603B\u989D\u4E3A0\u6216\u8D1F\u6570\uFF0C\u8BA1\u7B97\u7ED3\u679C\u5F02\u5E38\uFF0C\u629B\u5F02\u5E38\u7EC8\u6B62\u9884\u7B97\u66F4\u65B0\u3002\u5E38\u89C1\u6839\u56E0\uFF1A\u62A5\u9500\u5355\u53EF\u5151\u73B0\u603B\u989D\u88AB\u9519\u8BEF\u7F6E0\u3001\u6570\u636E\u8FC1\u79FB\u9519\u8BEF\u3001\u6216\u62A5\u9500\u5355\u672C\u8EAB\u91D1\u989D\u5F02\u5E38\u3002")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " fee_cashout_id      "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5151\u73B0\u5355ID,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         fee_cashout_no      "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5151\u73B0\u5355\u53F7,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         total_can_cashout_amt "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u53EF\u5151\u73B0\u603B\u989D,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         used_cashout_amt    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5DF2\u5151\u73B0\u603B\u989D,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         cashout_type        "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5151\u73B0\u7C7B\u578B")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "   fin_fee_cashout_header")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  save_type "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "2")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    cashout_type "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "2")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    (total_can_cashout_amt "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NULL"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "OR"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " total_can_cashout_amt "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "<="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ")")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ORDER  BY"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " create_time "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "DESC"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u951912\uFF1A\u7A0E\u7387\u914D\u7F6E\u683C\u5F0F\u9519\u8BEF"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u989D\u5EA6\u5916\u9884\u7B97\u66F4\u65B0\u65F6\uFF0C\u8BFB\u53D6\u7CFB\u7EDF\u914D\u7F6ESCPSYSCONF\u4E2DOutlimit_Tax_Rate\u7684\u503C\u683C\u5F0F\u9519\u8BEF\uFF08\u975E\u6570\u5B57\u6216\u4E3A\u7A7A\uFF09")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u989D\u5EA6\u5916\u9884\u7B97\u4F7F\u7528\u91D1\u989D\u9700\u9664\u4EE5\u7A0E\u7387\uFF08\u4F7F\u7528\u91D1\u989D=\u672C\u6B21\u7533\u8BF7\u91D1\u989D\xD7\u5151\u73B0\u6BD4\u4F8B\xF7\u7A0E\u7387\uFF09\u3002\u7A0E\u7387\u4ECE\u7CFB\u7EDF\u914D\u7F6EOutlimit_Tax_Rate\u8BFB\u53D6\uFF0C\u82E5\u914D\u7F6E\u7F3A\u5931\u3001\u503C\u4E3A\u975E\u6570\u5B57\u5B57\u7B26\u4E32\u3001\u6216\u4E3A0\uFF08\u9664\u96F6\u5F02\u5E38\uFF09\uFF0C\u629B\u5F02\u5E38\u7EC8\u6B62\u9884\u7B97\u66F4\u65B0\u3002\u5E38\u89C1\u6839\u56E0\uFF1A\u8FD0\u7EF4\u672A\u914D\u7F6EOutlimit_Tax_Rate\u3001\u914D\u7F6E\u503C\u88AB\u8BEF\u6539\u3001\u6216\u683C\u5F0F\u4E0D\u89C4\u8303\u3002")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " confname            "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u914D\u7F6E\u540D\u79F0,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         confvalue           "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u914D\u7F6E\u503C")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "   scpsysconf")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  confname "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "Outlimit_Tax_Rate"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u951913\uFF1A\u989D\u5EA6\u5916\u9884\u7B97\u6570\u636E\u4E0D\u5B58\u5728\uFF0C\u8BF7\u68C0\u67E5\uFF01"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u989D\u5EA6\u5916\u5151\u73B0\u5BA1\u6279\u901A\u8FC7\u540E\u66F4\u65B0\u9884\u7B97\u65F6\uFF0C\u6309\u95E8\u5E97\u7F16\u7801+\u9884\u7B97\u5E74\u5EA6\u67E5\u8BE2MKT_OUTLIMIT_BUD_HEADER\u8FD4\u56DEnull")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u989D\u5EA6\u5916\u9884\u7B97\u66F4\u65B0\u9700\u5B9A\u4F4D\u9884\u7B97\u5934\u8868\u8BB0\u5F55\u3002\u82E5\u8BE5\u95E8\u5E97\u8BE5\u5E74\u5EA6\u672A\u914D\u7F6E\u989D\u5EA6\u5916\u9884\u7B97\u3001\u9884\u7B97\u5DF2\u88AB\u5220\u9664\u3001\u6216\u95E8\u5E97\u7F16\u7801\u4E0E\u9884\u7B97\u5E74\u5EA6\u4E0D\u5339\u914D\uFF0C\u67E5\u8BE2\u8FD4\u56DE\u7A7A\uFF0C\u65E0\u6CD5\u66F4\u65B0\u5DF2\u4F7F\u7528\u91D1\u989D\uFF0C\u629B\u5F02\u5E38\u3002\u5E38\u89C1\u6839\u56E0\uFF1A\u9884\u7B97\u672A\u914D\u7F6E\u3001\u95E8\u5E97\u672A\u7EB3\u5165\u9884\u7B97\u8303\u56F4\u3001\u6216\u9884\u7B97\u5E74\u5EA6\u9519\u8BEF\u3002")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " c.fee_cashout_id      "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5151\u73B0\u5355ID,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         c.fee_cashout_no      "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5151\u73B0\u5355\u53F7,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         c.terminal_code       "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u95E8\u5E97\u7F16\u7801,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         c.bud_year            "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u9884\u7B97\u5E74\u5EA6,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         b.terminal_code       "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u9884\u7B97\u95E8\u5E97\u7F16\u7801")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "   fin_fee_cashout_header c")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "LEFT   JOIN"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " mkt_outlimit_bud_header b")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ON"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " b.terminal_code "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " c.terminal_code")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "        "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " b.bud_year "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " c.bud_year")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  c.save_type "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "2")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    c.cashout_type "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "2")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    b.terminal_code "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NULL")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ORDER  BY"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " c.create_time "),
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
        _push2(`<ul${_scopeId}><li${_scopeId}>\u95EE\u98981\uFF1AERP\u8D44\u91D1\u6C60\u540C\u6B65\u5931\u8D25</li><li${_scopeId}>\u539F\u56E0\uFF1AERP\u63A5\u53E3\u4E0D\u53EF\u7528\u6216\u6570\u636E\u5F02\u5E38</li><li${_scopeId}>\u89E3\u51B3\u601D\u8DEF\uFF1A\u68C0\u67E5ERP\u63A5\u53E3\u72B6\u6001\u548C\u6570\u636E\u5B8C\u6574\u6027</li></ul><ul${_scopeId}><li${_scopeId}>\u95EE\u98982\uFF1A\u989D\u5EA6\u5916\u9884\u7B97\u66F4\u65B0\u4E0D\u6B63\u786E</li><li${_scopeId}>\u539F\u56E0\uFF1A\u9884\u7B97\u8868\u6570\u636E\u5F02\u5E38\u6216\u7A0E\u7387\u914D\u7F6E\u9519\u8BEF</li><li${_scopeId}>\u89E3\u51B3\u601D\u8DEF\uFF1A\u68C0\u67E5\u989D\u5EA6\u5916\u9884\u7B97\u8868\u548COutlimit_Tax_Rate\u914D\u7F6E</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>*</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> mkt_outlimit_bud_header </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> terminal_code </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> #{code} </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> bud_year </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> #{</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}>year</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>};</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> confname, confvalue </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> scpsysconf </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> confname </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>Outlimit_Tax_Rate</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, "\u95EE\u98981\uFF1AERP\u8D44\u91D1\u6C60\u540C\u6B65\u5931\u8D25"),
            createVNode("li", null, "\u539F\u56E0\uFF1AERP\u63A5\u53E3\u4E0D\u53EF\u7528\u6216\u6570\u636E\u5F02\u5E38"),
            createVNode("li", null, "\u89E3\u51B3\u601D\u8DEF\uFF1A\u68C0\u67E5ERP\u63A5\u53E3\u72B6\u6001\u548C\u6570\u636E\u5B8C\u6574\u6027")
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u95EE\u98982\uFF1A\u989D\u5EA6\u5916\u9884\u7B97\u66F4\u65B0\u4E0D\u6B63\u786E"),
            createVNode("li", null, "\u539F\u56E0\uFF1A\u9884\u7B97\u8868\u6570\u636E\u5F02\u5E38\u6216\u7A0E\u7387\u914D\u7F6E\u9519\u8BEF"),
            createVNode("li", null, "\u89E3\u51B3\u601D\u8DEF\uFF1A\u68C0\u67E5\u989D\u5EA6\u5916\u9884\u7B97\u8868\u548COutlimit_Tax_Rate\u914D\u7F6E")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " mkt_outlimit_bud_header "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " terminal_code "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " #{code} "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " bud_year "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " #{"),
                  createVNode("span", { style: { "color": "#82AAFF" } }, "year"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "};")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "SELECT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " confname, confvalue "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " scpsysconf "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " confname "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "Outlimit_Tax_Rate"),
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
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u65E5\u671F</th><th${_scopeId}>\u63D0\u4EA4ID</th><th${_scopeId}>\u63D0\u4EA4\u4EBA</th><th${_scopeId}>\u63D0\u4EA4\u5185\u5BB9</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>2026-08-30</td><td${_scopeId}>-</td><td${_scopeId}>-</td><td${_scopeId}>\u6309skill\u89C4\u8303\u91CD\u5199\u77E5\u8BC6\u5E93\u6587\u6863</td></tr><tr${_scopeId}><td${_scopeId}>2025-10-29</td><td${_scopeId}>-</td><td${_scopeId}>tyc</td><td${_scopeId}>\u521D\u59CB\u521B\u5EFA\u62A5\u9500\u53D1\u7968\u5151\u73B0\u529F\u80FD</td></tr></tbody></table>`);
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
                createVNode("td", null, "2025-10-29"),
                createVNode("td", null, "-"),
                createVNode("td", null, "tyc"),
                createVNode("td", null, "\u521D\u59CB\u521B\u5EFA\u62A5\u9500\u53D1\u7968\u5151\u73B0\u529F\u80FD")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("\u95E8\u5E97\u7BA1\u7406/\u5E7F\u544A\u6295\u653E/\u5E7F\u544A\u62A5\u9500\u53D1\u7968\u5151\u73B0/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
