import { resolveComponent, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.6ab74304.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"\u5DE5\u7A0B\u7BA1\u7406/\u9879\u76EE\u5F80\u6765/\u5DE5\u7A0B\u771F\u5B9E\u6027\u6838\u9500/index.md"}');
const _sfc_main = { name: "\u5DE5\u7A0B\u7BA1\u7406/\u9879\u76EE\u5F80\u6765/\u5DE5\u7A0B\u771F\u5B9E\u6027\u6838\u9500/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_BreadcrumbTabs = resolveComponent("BreadcrumbTabs");
  const _component_KbCard = resolveComponent("KbCard");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_BreadcrumbTabs, null, null, _parent));
  _push(`<div id="biz-intro" style="${ssrRenderStyle({ "display": "none" })}"><div class="tab-pad"><div class="kl-wrap"><div class="kl-card"><div class="biz-kl-hdr"><span class="biz-tag" style="${ssrRenderStyle({ "background": "rgba(124,58,237,0.08)", "color": "#7C3AED", "border-color": "rgba(124,58,237,0.18)" })}">\u4E1A\u52A1\u662F\u4EC0\u4E48</span><h2>\u5DE5\u7A0B\u771F\u5B9E\u6027\u6838\u9500</h2><p>\u5C06\u4F9B\u5E94\u5546\u53D1\u7968\u4E0E\u51FA\u5E93\u884C\u9010\u7B14\u5BF9\u5E94\u6838\u9500\uFF0C\u786E\u8BA4\u4E1A\u52A1\u771F\u5B9E\u53D1\u751F\uFF0C\u5E76\u89E6\u53D1\u8FD4\u5229\u8BA1\u7B97</p></div><div class="biz-2col-inner"><div class="kl-col-box"><div style="${ssrRenderStyle({ "display": "flex", "align-items": "center", "gap": "10px", "margin-bottom": "12px" })}"><div style="${ssrRenderStyle({ "width": "40px", "height": "40px", "border-radius": "10px", "display": "flex", "align-items": "center", "justify-content": "center", "flex-shrink": "0", "background": "linear-gradient(135deg,#7C3AED,#A78BFA)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" stroke-width="1.5"><path d="M8 2L3 4V8C3 11 8 14 8 14C8 14 13 11 13 8V4Z"></path></svg></div><h4 style="${ssrRenderStyle({ "font-size": "1rem", "font-weight": "800", "color": "#1F2937", "margin": "0" })}">\u4E3A\u4F55\u8981\u505A\u771F\u5B9E\u6027\u6838\u9500</h4></div><p style="${ssrRenderStyle({ "font-size": "0.78rem", "font-weight": "600", "color": "#6B7280", "margin": "0 0 10px" })}">\u89E3\u51B3\u4E24\u4E2A\u4E1A\u52A1\u8BC9\u6C42</p><div style="${ssrRenderStyle({ "display": "flex", "flex-direction": "column", "gap": "8px" })}"><div style="${ssrRenderStyle({ "display": "flex", "align-items": "flex-start", "gap": "8px", "padding": "8px 10px", "background": "#F5F3FF", "border-radius": "8px" })}"><div style="${ssrRenderStyle({ "font-size": ".75rem" })}"><strong>\u9632\u865A\u5047\u6838\u9500</strong> \u2014 \u53D1\u7968\u4E0E\u51FA\u5E93\u884C\u5FC5\u987B\u771F\u5B9E\u5BF9\u5E94\uFF0C\u675C\u7EDD\u7A7A\u6838\u9500\u5957\u5229</div></div><div style="${ssrRenderStyle({ "display": "flex", "align-items": "flex-start", "gap": "8px", "padding": "8px 10px", "background": "#F5F3FF", "border-radius": "8px" })}"><div style="${ssrRenderStyle({ "font-size": ".75rem" })}"><strong>\u89E6\u53D1\u8FD4\u5229</strong> \u2014 \u6838\u9500\u786E\u8BA4\u540E\u81EA\u52A8\u6838\u7B97\u4F9B\u5E94\u5546\u5E94\u5F97\u8FD4\u5229</div></div></div></div><div class="kl-col-box alt"><div style="${ssrRenderStyle({ "display": "flex", "align-items": "center", "gap": "10px", "margin-bottom": "12px" })}"><div style="${ssrRenderStyle({ "width": "40px", "height": "40px", "border-radius": "10px", "display": "flex", "align-items": "center", "justify-content": "center", "flex-shrink": "0", "background": "linear-gradient(135deg,#7C3AED,#A78BFA)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" stroke-width="1.5"><path d="M3 4H13V12H3Z"></path><path d="M6 7L8 9L10 6"></path></svg></div><h4 style="${ssrRenderStyle({ "font-size": "1rem", "font-weight": "800", "color": "#1F2937", "margin": "0" })}">\u6838\u9500\u5355\u5305\u542B\u4EC0\u4E48</h4></div><p style="${ssrRenderStyle({ "font-size": "0.78rem", "font-weight": "600", "color": "#6B7280", "margin": "0 0 10px" })}">\u4E24\u7C7B\u6838\u5FC3\u5185\u5BB9</p><div style="${ssrRenderStyle({ "display": "flex", "flex-direction": "column", "gap": "8px" })}"><div style="${ssrRenderStyle({ "display": "flex", "align-items": "flex-start", "gap": "8px", "padding": "8px 10px", "background": "#F0FDF4", "border-radius": "8px" })}"><div style="${ssrRenderStyle({ "font-size": ".75rem" })}"><strong>\u6838\u9500\u884C</strong> \u2014 \u9009\u62E9\u51FA\u5E93\u884C\uFF0C\u586B\u5199\u672C\u6B21\u6838\u9500\u6570\u91CF</div></div><div style="${ssrRenderStyle({ "display": "flex", "align-items": "flex-start", "gap": "8px", "padding": "8px 10px", "background": "#F0FDF4", "border-radius": "8px" })}"><div style="${ssrRenderStyle({ "font-size": ".75rem" })}"><strong>\u53D1\u7968\u660E\u7EC6</strong> \u2014 \u5173\u8054\u5DF2\u4E0A\u4F20\u7684\u6709\u6548\u53D1\u7968\u660E\u7EC6</div></div></div></div></div></div><div class="kl-card"><div class="biz-kl-hdr"><span class="biz-tag" style="${ssrRenderStyle({ "background": "rgba(124,58,237,0.08)", "color": "#7C3AED", "border-color": "rgba(124,58,237,0.18)" })}">\u6D41\u7A0B</span><h2>\u771F\u5B9E\u6027\u6838\u9500\u6D41\u7A0B</h2><p>\u4ECE\u5173\u8054\u53D1\u7968\u4E0A\u4F20\u5355\u5230\u63D0\u4EA4\u5BA1\u6279\uFF0C\u901A\u8FC7\u540E\u66F4\u65B0\u51FA\u5E93\u884C\u4E0E\u53D1\u7968\u5E76\u89E6\u53D1\u8FD4\u5229</p></div><div class="biz-steps"><div class="biz-step-item"><div class="biz-step-circle" style="${ssrRenderStyle({ "background": "linear-gradient(135deg,#7C3AED,#6D28D9)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" stroke-width="1.5"><path d="M3 4H13V12H3Z"></path><path d="M6 7L8 9L10 6"></path></svg></div><h5>\u5173\u8054\u53D1\u7968\u4E0A\u4F20\u5355</h5><small>\u9009\u62E9\u5DF2\u751F\u6548\u7684<br>\u53D1\u7968\u4E0A\u4F20\u5355</small></div><div class="biz-step-arrow">\u2192</div><div class="biz-step-item"><div class="biz-step-circle" style="${ssrRenderStyle({ "background": "linear-gradient(135deg,#7C3AED,#6D28D9)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" stroke-width="1.5"><path d="M3 4H13V12H3Z"></path><path d="M6 8H10"></path></svg></div><h5>\u65B0\u5EFA\u6838\u9500\u5355</h5><small>\u5F55\u5165\u6838\u9500\u884C\u4E0E<br>\u53D1\u7968\u660E\u7EC6\u5E76\u4FDD\u5B58</small></div><div class="biz-step-arrow">\u2192</div><div class="biz-step-item"><div class="biz-step-circle" style="${ssrRenderStyle({ "background": "linear-gradient(135deg,#7C3AED,#6D28D9)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" stroke-width="1.5"><circle cx="8" cy="8" r="6"></circle><path d="M5 8H11"></path></svg></div><h5>\u63D0\u4EA4\u5BA1\u6279</h5><small>\u8D70\u771F\u5B9E\u6027\u6838\u9500<br>\u5DE5\u4F5C\u6D41\u5BA1\u6279</small></div><div class="biz-step-arrow">\u2192</div><div class="biz-step-item"><div class="biz-step-circle" style="${ssrRenderStyle({ "background": "linear-gradient(135deg,#7C3AED,#6D28D9)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" stroke-width="1.5"><path d="M3 4H13V12H3Z"></path><path d="M6 7L8 9L10 6"></path></svg></div><h5>\u5BA1\u6279\u901A\u8FC7\u751F\u6548</h5><small>\u66F4\u65B0\u51FA\u5E93\u884C/\u53D1\u7968<br>\u89E6\u53D1\u8FD4\u5229</small></div></div><div class="kl-tip" style="${ssrRenderStyle({ "margin-top": "14px" })}"><strong>\u53D6\u6D88\u4E0E\u7EC8\u6B62\uFF1A</strong>\u6838\u9500\u652F\u6301\u591A\u79CD\u7C7B\u578B\u7684\u53D6\u6D88\u64CD\u4F5C\uFF1B\u5DF2\u63D0\u4EA4\u4F46\u9700\u4E2D\u6B62\u65F6\u652F\u6301\u7EC8\u6B62\uFF0C\u5E76\u53EF\u5728\u6EE1\u8DB3\u6761\u4EF6\u65F6\u64A4\u56DE\u7EC8\u6B62\u6062\u590D\u3002 </div></div><div class="kl-card"><div class="biz-kl-hdr"><span class="biz-tag" style="${ssrRenderStyle({ "background": "rgba(124,58,237,0.08)", "color": "#7C3AED", "border-color": "rgba(124,58,237,0.18)" })}">\u5173\u952E\u89C4\u5219</span><h2>\u6838\u9500\u7684\u5173\u952E\u7EA6\u675F</h2><p>\u6838\u9500\u6570\u91CF\u4E0D\u53EF\u8D85\u989D\uFF0C\u5FC5\u987B\u4EE5\u771F\u5B9E\u6709\u6548\u53D1\u7968\u4E3A\u4F9D\u636E</p></div><div class="biz-3col"><div class="kl-col-box" style="${ssrRenderStyle({ "margin-bottom": "0" })}"><div style="${ssrRenderStyle({ "display": "flex", "gap": "12px", "align-items": "flex-start" })}"><div style="${ssrRenderStyle({ "width": "36px", "height": "36px", "border-radius": "10px", "display": "flex", "align-items": "center", "justify-content": "center", "flex-shrink": "0", "background": "linear-gradient(135deg,#7C3AED,#A78BFA)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" stroke-width="1.5"><rect x="3" y="3" width="10" height="10" rx="2"></rect><path d="M6 8L7 9L10 6"></path></svg></div><div><h5 style="${ssrRenderStyle({ "font-size": "0.88rem", "font-weight": "800", "color": "#1F2937", "margin": "0 0 6px" })}">\u6838\u9500\u884C+\u53D1\u7968\u660E\u7EC6</h5><p style="${ssrRenderStyle({ "font-size": "0.73rem", "color": "#6B7280", "margin": "0", "line-height": "1.6" })}">\u6BCF\u884C\u6838\u9500\u9700\u660E\u786E\u51FA\u5E93\u884C\u4E0E\u5BF9\u5E94\u53D1\u7968\u660E\u7EC6\uFF0C\u4FDD\u8BC1\u8D26\u5B9E\u76F8\u7B26\u3002</p></div></div></div><div class="kl-col-box alt" style="${ssrRenderStyle({ "margin-bottom": "0" })}"><div style="${ssrRenderStyle({ "display": "flex", "gap": "12px", "align-items": "flex-start" })}"><div style="${ssrRenderStyle({ "width": "36px", "height": "36px", "border-radius": "10px", "display": "flex", "align-items": "center", "justify-content": "center", "flex-shrink": "0", "background": "linear-gradient(135deg,#7C3AED,#A78BFA)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" stroke-width="1.5"><path d="M4 8L8 4L12 8"></path><path d="M8 4V12"></path></svg></div><div><h5 style="${ssrRenderStyle({ "font-size": "0.88rem", "font-weight": "800", "color": "#1F2937", "margin": "0 0 6px" })}">\u6838\u9500\u6570\u91CF\u4E0D\u8D85\u989D</h5><p style="${ssrRenderStyle({ "font-size": "0.73rem", "color": "#6B7280", "margin": "0", "line-height": "1.6" })}">\u672C\u6B21\u6838\u9500\u6570\u91CF\u53D7\u51FA\u5E93\u884C\u53EF\u6838\u9500\u4F59\u989D\u7EA6\u675F\uFF0C\u8D85\u989D\u5C06\u88AB\u62E6\u622A\u3002</p></div></div></div><div class="kl-col-box" style="${ssrRenderStyle({ "margin-bottom": "0" })}"><div style="${ssrRenderStyle({ "display": "flex", "gap": "12px", "align-items": "flex-start" })}"><div style="${ssrRenderStyle({ "width": "36px", "height": "36px", "border-radius": "10px", "display": "flex", "align-items": "center", "justify-content": "center", "flex-shrink": "0", "background": "linear-gradient(135deg,#7C3AED,#A78BFA)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" stroke-width="1.5"><circle cx="8" cy="8" r="6"></circle><path d="M5 8H11"></path></svg></div><div><h5 style="${ssrRenderStyle({ "font-size": "0.88rem", "font-weight": "800", "color": "#1F2937", "margin": "0 0 6px" })}">\u5BA1\u6279\u540E\u8054\u52A8</h5><p style="${ssrRenderStyle({ "font-size": "0.73rem", "color": "#6B7280", "margin": "0", "line-height": "1.6" })}">\u5BA1\u6279\u901A\u8FC7\u66F4\u65B0\u51FA\u5E93\u884C\u4E0E\u53D1\u7968\u72B6\u6001\uFF0C\u5E76\u89E6\u53D1\u4F9B\u5E94\u5546\u8FD4\u5229\u8BA1\u7B97\u3002</p></div></div></div></div></div></div></div></div><div id="biz-flow" style="${ssrRenderStyle({ "display": "none" })}"><div class="tab-pad"><div class="bf-truth-flow"><h4 class="bf-main-title">\u5DE5\u7A0B\u771F\u5B9E\u6027\u6838\u9500 \u2014 \u5168\u94FE\u8DEF\u6D41\u7A0B\u56FE</h4><p class="bf-main-sub">\u5F00\u59CB \u2192 \u6838\u9500\u53D1\u7968\u4E0A\u4F20\u5355(\u5173\u8054) \u2192 \u2605\u65B0\u5EFA\u771F\u5B9E\u6027\u6838\u9500\u5355\u2605 \u2192 \u63D0\u4EA4\u5BA1\u6279(\u5DE5\u4F5C\u6D41TRUTH_VERIFY) \u2192 \u2696\u5BA1\u6279\u901A\u8FC7\uFF1F \u2192 \u66F4\u65B0\u51FA\u5E93\u884C/\u53D1\u7968\u72B6\u6001/\u89E6\u53D1\u8FD4\u5229 / \u9A73\u56DE\u4E2D\u65AD \u2192 \u7ED3\u675F</p><div class="bf-fc-svg-wrap"><svg class="bf-fc-svg" style="${ssrRenderStyle({ "max-height": "none" })}" viewBox="0 0 1200 760" xmlns="http://www.w3.org/2000/svg"><defs><marker id="arr-green" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#16A34A"></path></marker><marker id="arr-gray" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#9CA3AF"></path></marker><marker id="arr-blue" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#3B82F6"></path></marker><marker id="arr-red" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#EF4444"></path></marker><filter id="shadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000" flood-opacity="0.15"></feDropShadow></filter></defs><rect x="50" y="20" width="1100" height="95" rx="8" fill="#EFF6FF" stroke="#3B82F6" stroke-width="1.5" stroke-dasharray="6,4"></rect><text x="600" y="42" text-anchor="middle" fill="#1D4ED8" font-size="13" font-weight="600">\u4E0A\u6E38\u652F\u6491</text><rect x="120" y="56" width="110" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"></rect><text x="175" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">\u6838\u9500\u53D1\u7968\u4E0A\u4F20</text><rect x="250" y="56" width="110" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"></rect><text x="305" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">\u51FA\u5E93\u5355\u884C</text><rect x="380" y="56" width="110" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"></rect><text x="435" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">\u6298\u6263\u653F\u7B56</text><rect x="510" y="56" width="110" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"></rect><text x="565" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">\u7F16\u7801\u89C4\u5219</text><rect x="640" y="56" width="110" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"></rect><text x="695" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">\u5DE5\u4F5C\u6D41</text><line x1="235" y1="115" x2="235" y2="150" stroke="#3B82F6" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#arr-blue)"></line><rect x="195" y="150" width="80" height="44" rx="6" fill="#FAF5FF" stroke="#9333EA" stroke-width="1.5" stroke-dasharray="5,3"></rect><text x="235" y="177" text-anchor="middle" fill="#7C3AED" font-size="13" font-weight="600">\u5F00\u59CB</text><line x1="235" y1="194" x2="235" y2="210" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"></line><rect x="145" y="210" width="180" height="40" rx="6" fill="#F0FDF4" stroke="#16A34A" stroke-width="2"></rect><text x="235" y="235" text-anchor="middle" fill="#166534" font-size="12" font-weight="600">\u6838\u9500\u53D1\u7968\u4E0A\u4F20\u5355(\u5173\u8054)</text><line x1="235" y1="250" x2="235" y2="266" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"></line><rect x="155" y="266" width="160" height="54" rx="6" fill="#16A34A" stroke="#15803D" stroke-width="2" filter="url(#shadow)"></rect><text x="235" y="290" text-anchor="middle" fill="#FFFFFF" font-size="13" font-weight="700">\u2605\u65B0\u5EFA\u771F\u5B9E\u6027\u6838\u9500\u5355\u2605</text><text x="235" y="308" text-anchor="middle" fill="#DCFCE7" font-size="10">\u9009\u51FA\u5E93\u884C/\u53D1\u7968/\u586B\u6570\u91CF\xB7\u4FDD\u5B58</text><line x1="235" y1="320" x2="235" y2="336" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"></line><rect x="150" y="336" width="170" height="40" rx="6" fill="#F0FDF4" stroke="#16A34A" stroke-width="2"></rect><text x="235" y="361" text-anchor="middle" fill="#166534" font-size="12" font-weight="600">\u63D0\u4EA4\u5BA1\u6279(\u5DE5\u4F5C\u6D41TRUTH_VERIFY)</text><line x1="235" y1="376" x2="235" y2="392" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"></line><polygon points="235,392 305,432 235,472 165,432" fill="#FAF5FF" stroke="#9333EA" stroke-width="1.5" stroke-dasharray="5,3"></polygon><text x="235" y="436" text-anchor="middle" fill="#7C3AED" font-size="12" font-weight="600">\u2696 \u5BA1\u6279\u901A\u8FC7\uFF1F</text><line x1="235" y1="472" x2="235" y2="488" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"></line><rect x="140" y="488" width="190" height="40" rx="6" fill="#F0FDF4" stroke="#16A34A" stroke-width="2"></rect><text x="235" y="513" text-anchor="middle" fill="#166534" font-size="12" font-weight="600">\u66F4\u65B0\u51FA\u5E93\u884C/\u53D1\u7968\u72B6\u6001/\u89E6\u53D1\u8FD4\u5229</text><line x1="235" y1="528" x2="235" y2="544" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"></line><rect x="180" y="544" width="110" height="40" rx="6" fill="#FAF5FF" stroke="#9333EA" stroke-width="1.5" stroke-dasharray="5,3"></rect><text x="235" y="569" text-anchor="middle" fill="#7C3AED" font-size="13" font-weight="600">\u7ED3\u675F</text><line x1="235" y1="584" x2="235" y2="600" stroke="#16A34A" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#arr-green)"></line><line x1="305" y1="432" x2="430" y2="432" stroke="#EF4444" stroke-width="2" marker-end="url(#arr-red)"></line><rect x="380" y="417" width="100" height="28" rx="4" fill="#FEF2F2" stroke="#EF4444" stroke-width="1"></rect><text x="430" y="436" text-anchor="middle" fill="#DC2626" font-size="11" font-weight="600">\u9A73\u56DE\u4E2D\u65AD\u2717</text><line x1="430" y1="432" x2="430" y2="293" stroke="#EF4444" stroke-width="1.5"></line><line x1="430" y1="293" x2="315" y2="293" stroke="#EF4444" stroke-width="1.5" marker-end="url(#arr-red)"></line><rect x="50" y="600" width="1100" height="95" rx="8" fill="#F0FDF4" stroke="#16A34A" stroke-width="1.5" stroke-dasharray="6,4"></rect><text x="600" y="622" text-anchor="middle" fill="#166534" font-size="13" font-weight="600">\u4E0B\u6E38\u5F71\u54CD</text><rect x="200" y="638" width="150" height="36" rx="5" fill="#FFFFFF" stroke="#16A34A" stroke-width="1.2"></rect><text x="275" y="661" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">\u51FA\u5E93\u786E\u8BA4\xB7\u6838\u9500\u6570\u91CF</text><rect x="375" y="638" width="150" height="36" rx="5" fill="#FFFFFF" stroke="#16A34A" stroke-width="1.2"></rect><text x="450" y="661" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">\u53D1\u7968\u7BA1\u7406\xB7\u72B6\u6001</text><rect x="550" y="638" width="150" height="36" rx="5" fill="#FFFFFF" stroke="#16A34A" stroke-width="1.2"></rect><text x="625" y="661" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">\u8FD4\u5229\u8BA1\u7B97\xB7\u89E6\u53D1\u91CD\u7B97</text><rect x="725" y="638" width="150" height="36" rx="5" fill="#FFFFFF" stroke="#16A34A" stroke-width="1.2"></rect><text x="800" y="661" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">\u6838\u9500\u5355\u636E\xB7\u53D6\u6D88\u5904\u7406</text></svg></div><div class="bf-fc-legend"><span class="bf-fc-legend-item"><span class="bf-fc-dot bf-fc-dot-green"></span> \u4E3B\u6D41\u7A0B\u6B65\u9AA4</span><span class="bf-fc-legend-item"><span class="bf-fc-dot bf-fc-dot-purple"></span> \u5F00\u59CB/\u7ED3\u675F/\u5224\u65AD</span><span class="bf-fc-legend-item"><span class="bf-fc-dot bf-fc-dot-blue"></span> \u4E0A\u6E38\u652F\u6491</span><span class="bf-fc-legend-item"><span style="${ssrRenderStyle({ "display": "inline-block", "width": "22px", "height": "2px", "background": "#EF4444" })}"></span> \u5BA1\u6279\u9A73\u56DE/\u4E2D\u65AD</span></div></div></div></div><div id="key-logic" style="${ssrRenderStyle({ "display": "none" })}"><div class="tab-pad"><div class="kl-wrap">`);
  _push(ssrRenderComponent(_component_KbCard, {
    num: "1",
    title: "\u91CD\u70B9\u903B\u8F911\uFF1A\u771F\u5B9E\u6027\u6838\u9500\u4FDD\u5B58\u903B\u8F91"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u610F\u4E49</strong>\uFF1A\u4FDD\u5B58\u771F\u5B9E\u6027\u6838\u9500\u5355\uFF0C\u5305\u542B\u51FA\u5E93\u5355\u884C\u548C\u53D1\u7968\u6838\u9500\u660E\u7EC6\uFF0C\u786E\u8BA4\u4E1A\u52A1\u771F\u5B9E\u53D1\u751F</li><li${_scopeId}><strong${_scopeId}>\u5177\u4F53\u903B\u8F91\u63CF\u8FF0</strong>\uFF1A</li><li${_scopeId}>\u65B0\u589E\u65F6\u81EA\u52A8\u751F\u6210\u6838\u9500\u5355\u53F7(\u7F16\u7801\u89C4\u5219AE.INVOICE_AUTHENTICITY_VERIFI/AE.JZ_INVOICE_AUTHENTICITY_VER)\uFF0C\u521D\u59CB\u72B6\u6001\u4E3A\u65B0\u5EFA</li><li${_scopeId}>\u4FDD\u5B58\u6570\u636E\u5305\u542B\u4E24\u90E8\u5206\uFF1A\u6838\u9500\u884C(EPM_INVOICE_TRUTH_LINE)\u548C\u6838\u9500\u53D1\u7968\u660E\u7EC6(EPM_VERIFER_INVOICE_DETAILS)</li><li${_scopeId}>\u6BCF\u884C\u6838\u9500\u6570\u636E\u5305\u542B\uFF1A\u51FA\u5E93\u5355\u53F7\u3001\u53D1\u8D27\u65E5\u671F\u3001\u4EA7\u54C1\u7F16\u7801\u3001\u53EF\u6838\u9500\u6570\u91CF\u3001\u5269\u4F59\u53EF\u6838\u9500\u6570\u91CF\u3001\u672C\u6B21\u6838\u9500\u6570\u91CF</li><li${_scopeId}>\u672C\u6B21\u6838\u9500\u6570\u91CF\u7684\u5C0F\u6570\u4F4D\u4E0D\u53EF\u8D85\u8FC73\u4F4D</li><li${_scopeId}>\u4FEE\u6539\u65F6\u91C7\u7528\u5148\u5220\u540E\u63D2\u7B56\u7565\u5904\u7406\u5B50\u8868\u6570\u636E</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u610F\u4E49"),
              createTextVNode("\uFF1A\u4FDD\u5B58\u771F\u5B9E\u6027\u6838\u9500\u5355\uFF0C\u5305\u542B\u51FA\u5E93\u5355\u884C\u548C\u53D1\u7968\u6838\u9500\u660E\u7EC6\uFF0C\u786E\u8BA4\u4E1A\u52A1\u771F\u5B9E\u53D1\u751F")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u5177\u4F53\u903B\u8F91\u63CF\u8FF0"),
              createTextVNode("\uFF1A")
            ]),
            createVNode("li", null, "\u65B0\u589E\u65F6\u81EA\u52A8\u751F\u6210\u6838\u9500\u5355\u53F7(\u7F16\u7801\u89C4\u5219AE.INVOICE_AUTHENTICITY_VERIFI/AE.JZ_INVOICE_AUTHENTICITY_VER)\uFF0C\u521D\u59CB\u72B6\u6001\u4E3A\u65B0\u5EFA"),
            createVNode("li", null, "\u4FDD\u5B58\u6570\u636E\u5305\u542B\u4E24\u90E8\u5206\uFF1A\u6838\u9500\u884C(EPM_INVOICE_TRUTH_LINE)\u548C\u6838\u9500\u53D1\u7968\u660E\u7EC6(EPM_VERIFER_INVOICE_DETAILS)"),
            createVNode("li", null, "\u6BCF\u884C\u6838\u9500\u6570\u636E\u5305\u542B\uFF1A\u51FA\u5E93\u5355\u53F7\u3001\u53D1\u8D27\u65E5\u671F\u3001\u4EA7\u54C1\u7F16\u7801\u3001\u53EF\u6838\u9500\u6570\u91CF\u3001\u5269\u4F59\u53EF\u6838\u9500\u6570\u91CF\u3001\u672C\u6B21\u6838\u9500\u6570\u91CF"),
            createVNode("li", null, "\u672C\u6B21\u6838\u9500\u6570\u91CF\u7684\u5C0F\u6570\u4F4D\u4E0D\u53EF\u8D85\u8FC73\u4F4D"),
            createVNode("li", null, "\u4FEE\u6539\u65F6\u91C7\u7528\u5148\u5220\u540E\u63D2\u7B56\u7565\u5904\u7406\u5B50\u8868\u6570\u636E")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, {
    num: "2",
    title: "\u91CD\u70B9\u903B\u8F912\uFF1A\u6838\u9500\u6570\u91CF\u6821\u9A8C"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u610F\u4E49</strong>\uFF1A\u786E\u4FDD\u672C\u6B21\u6838\u9500\u6570\u91CF\u4E0D\u8D85\u8FC7\u5269\u4F59\u53EF\u6838\u9500\u6570\u91CF\uFF0C\u9632\u6B62\u8D85\u989D\u6838\u9500</li><li${_scopeId}><strong${_scopeId}>\u5177\u4F53\u903B\u8F91\u63CF\u8FF0</strong>\uFF1A</li><li${_scopeId}>\u4FDD\u5B58\u65F6\u6821\u9A8C\u6BCF\u884C\u7684\u672C\u6B21\u6838\u9500\u6570\u91CF\u662F\u5426\u5927\u4E8E\u5269\u4F59\u53EF\u6838\u9500\u6570\u91CF</li><li${_scopeId}>\u5269\u4F59\u53EF\u6838\u9500\u6570\u91CF\u6765\u6E90\u4E8E\u51FA\u5E93\u5355\u884C\u7684\u53EF\u6838\u9500\u6570\u91CF(CAN_VERIFY_NUM)</li><li${_scopeId}>\u6821\u9A8C\u53D1\u8D27\u65E5\u671F\u548C\u4EA7\u54C1\u7F16\u7801\u662F\u5426\u5339\u914D</li><li${_scopeId}>\u5355\u4F4D\u8F6C\u6362\u901A\u8FC7UOM_RATE\u5904\u7406\uFF0C\u8F6C\u5316\u540E\u5269\u4F59\u53EF\u6838\u9500\u6570\u91CF=\u5269\u4F59\u53EF\u6838\u9500\u6570\u91CF\xD7UOM_RATE</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u610F\u4E49"),
              createTextVNode("\uFF1A\u786E\u4FDD\u672C\u6B21\u6838\u9500\u6570\u91CF\u4E0D\u8D85\u8FC7\u5269\u4F59\u53EF\u6838\u9500\u6570\u91CF\uFF0C\u9632\u6B62\u8D85\u989D\u6838\u9500")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u5177\u4F53\u903B\u8F91\u63CF\u8FF0"),
              createTextVNode("\uFF1A")
            ]),
            createVNode("li", null, "\u4FDD\u5B58\u65F6\u6821\u9A8C\u6BCF\u884C\u7684\u672C\u6B21\u6838\u9500\u6570\u91CF\u662F\u5426\u5927\u4E8E\u5269\u4F59\u53EF\u6838\u9500\u6570\u91CF"),
            createVNode("li", null, "\u5269\u4F59\u53EF\u6838\u9500\u6570\u91CF\u6765\u6E90\u4E8E\u51FA\u5E93\u5355\u884C\u7684\u53EF\u6838\u9500\u6570\u91CF(CAN_VERIFY_NUM)"),
            createVNode("li", null, "\u6821\u9A8C\u53D1\u8D27\u65E5\u671F\u548C\u4EA7\u54C1\u7F16\u7801\u662F\u5426\u5339\u914D"),
            createVNode("li", null, "\u5355\u4F4D\u8F6C\u6362\u901A\u8FC7UOM_RATE\u5904\u7406\uFF0C\u8F6C\u5316\u540E\u5269\u4F59\u53EF\u6838\u9500\u6570\u91CF=\u5269\u4F59\u53EF\u6838\u9500\u6570\u91CF\xD7UOM_RATE")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, {
    num: "3",
    title: "\u91CD\u70B9\u903B\u8F913\uFF1A\u5BA1\u6279\u901A\u8FC7\u540E\u5904\u7406"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u610F\u4E49</strong>\uFF1A\u5BA1\u6279\u901A\u8FC7\u540E\u66F4\u65B0\u51FA\u5E93\u5355\u884C\u6838\u9500\u6570\u91CF\uFF0C\u89E6\u53D1\u8FD4\u5229\u8BA1\u7B97</li><li${_scopeId}><strong${_scopeId}>\u5177\u4F53\u903B\u8F91\u63CF\u8FF0</strong>\uFF1A</li><li${_scopeId}>\u66F4\u65B0\u51FA\u5E93\u5355\u884C\u7684\u5DF2\u6838\u9500\u6570\u91CF\u589E\u52A0\u672C\u6B21\u6838\u9500\u6570\u91CF\uFF0C\u53EF\u6838\u9500\u6570\u91CF\u51CF\u5C11\u672C\u6B21\u6838\u9500\u6570\u91CF</li><li${_scopeId}>\u66F4\u65B0\u6838\u9500\u53D1\u7968\u660E\u7EC6\u6709\u6548\u72B6\u6001\u4E3Avalid</li><li${_scopeId}>\u82E5\u51FA\u5E93\u5355\u884C\u6E20\u9053\u4E0A\u8C03\u4EF7&gt;0\uFF0C\u89E6\u53D1\u8FD4\u5229\u8BA1\u7B97(operationRebateBiz)</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u610F\u4E49"),
              createTextVNode("\uFF1A\u5BA1\u6279\u901A\u8FC7\u540E\u66F4\u65B0\u51FA\u5E93\u5355\u884C\u6838\u9500\u6570\u91CF\uFF0C\u89E6\u53D1\u8FD4\u5229\u8BA1\u7B97")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u5177\u4F53\u903B\u8F91\u63CF\u8FF0"),
              createTextVNode("\uFF1A")
            ]),
            createVNode("li", null, "\u66F4\u65B0\u51FA\u5E93\u5355\u884C\u7684\u5DF2\u6838\u9500\u6570\u91CF\u589E\u52A0\u672C\u6B21\u6838\u9500\u6570\u91CF\uFF0C\u53EF\u6838\u9500\u6570\u91CF\u51CF\u5C11\u672C\u6B21\u6838\u9500\u6570\u91CF"),
            createVNode("li", null, "\u66F4\u65B0\u6838\u9500\u53D1\u7968\u660E\u7EC6\u6709\u6548\u72B6\u6001\u4E3Avalid"),
            createVNode("li", null, "\u82E5\u51FA\u5E93\u5355\u884C\u6E20\u9053\u4E0A\u8C03\u4EF7>0\uFF0C\u89E6\u53D1\u8FD4\u5229\u8BA1\u7B97(operationRebateBiz)")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, {
    num: "4",
    title: "\u91CD\u70B9\u903B\u8F914\uFF1A\u53D6\u6D88\u6838\u9500/\u4F5C\u5E9F\u53D1\u7968"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u610F\u4E49</strong>\uFF1A\u652F\u6301\u591A\u79CD\u7EF4\u5EA6\u53D6\u6D88\u6838\u9500\u6216\u4F5C\u5E9F\u53D1\u7968\uFF0C\u7075\u6D3B\u5904\u7406\u6838\u9500\u5F02\u5E38</li><li${_scopeId}><strong${_scopeId}>\u5177\u4F53\u903B\u8F91\u63CF\u8FF0</strong>\uFF1A</li><li${_scopeId}>\u652F\u63015\u79CD\u64CD\u4F5C\u7C7B\u578B\uFF1Ainvoice(\u6309\u53D1\u7968)/invoiceDetail(\u6309\u53D1\u7968\u660E\u7EC6)/invLine(\u6309\u51FA\u5E93\u5355\u884C)/veriferDetail(\u6309\u6838\u9500\u660E\u7EC6)/obsInvoice(\u4F5C\u5E9F\u53D1\u7968)</li><li${_scopeId}>\u53D6\u6D88\u6838\u9500\u65F6\uFF0C\u67E5\u8BE2\u53D7\u5F71\u54CD\u7684\u6838\u9500\u660E\u7EC6\uFF0C\u66F4\u65B0\u6709\u6548\u72B6\u6001\u4E3Acanceled\uFF0C\u8BB0\u5F55\u53D6\u6D88\u64CD\u4F5C\u4EBA\u548C\u65F6\u95F4</li><li${_scopeId}>\u82E5\u53D7\u5F71\u54CD\u7684\u6838\u9500\u5355\u5904\u4E8E\u5BA1\u6279\u4E2D(stat=3)\uFF0C\u5219\u4E2D\u65AD\u5BA1\u6279\uFF0C\u5C06\u6838\u9500\u5355\u72B6\u6001\u91CD\u7F6E\u4E3A\u65B0\u5EFA</li><li${_scopeId}>\u66F4\u65B0\u51FA\u5E93\u5355\u884C\uFF1A\u53EF\u6838\u9500\u6570\u91CF\u56DE\u52A0\u53D6\u6D88\u6570\u91CF\uFF0C\u5DF2\u6838\u9500\u6570\u91CF\u51CF\u5C11\u53D6\u6D88\u6570\u91CF</li><li${_scopeId}>\u4F5C\u5E9F\u53D1\u7968\u65F6\uFF0C\u66F4\u65B0\u53D1\u7968\u4E3B\u8981\u4FE1\u606F\u6709\u6548\u72B6\u6001\u4E3Aobsolete\uFF0C\u540C\u65F6\u66F4\u65B0\u5173\u8054\u6838\u9500\u660E\u7EC6\u72B6\u6001</li><li${_scopeId}>\u53D6\u6D88\u64CD\u4F5C\u4F7F\u7528\u5206\u5E03\u5F0F\u9501\u63A7\u5236\u5E76\u53D1\uFF0C\u907F\u514D\u540C\u65F6\u53D6\u6D88\u5BFC\u81F4\u6570\u636E\u4E0D\u4E00\u81F4</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u610F\u4E49"),
              createTextVNode("\uFF1A\u652F\u6301\u591A\u79CD\u7EF4\u5EA6\u53D6\u6D88\u6838\u9500\u6216\u4F5C\u5E9F\u53D1\u7968\uFF0C\u7075\u6D3B\u5904\u7406\u6838\u9500\u5F02\u5E38")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u5177\u4F53\u903B\u8F91\u63CF\u8FF0"),
              createTextVNode("\uFF1A")
            ]),
            createVNode("li", null, "\u652F\u63015\u79CD\u64CD\u4F5C\u7C7B\u578B\uFF1Ainvoice(\u6309\u53D1\u7968)/invoiceDetail(\u6309\u53D1\u7968\u660E\u7EC6)/invLine(\u6309\u51FA\u5E93\u5355\u884C)/veriferDetail(\u6309\u6838\u9500\u660E\u7EC6)/obsInvoice(\u4F5C\u5E9F\u53D1\u7968)"),
            createVNode("li", null, "\u53D6\u6D88\u6838\u9500\u65F6\uFF0C\u67E5\u8BE2\u53D7\u5F71\u54CD\u7684\u6838\u9500\u660E\u7EC6\uFF0C\u66F4\u65B0\u6709\u6548\u72B6\u6001\u4E3Acanceled\uFF0C\u8BB0\u5F55\u53D6\u6D88\u64CD\u4F5C\u4EBA\u548C\u65F6\u95F4"),
            createVNode("li", null, "\u82E5\u53D7\u5F71\u54CD\u7684\u6838\u9500\u5355\u5904\u4E8E\u5BA1\u6279\u4E2D(stat=3)\uFF0C\u5219\u4E2D\u65AD\u5BA1\u6279\uFF0C\u5C06\u6838\u9500\u5355\u72B6\u6001\u91CD\u7F6E\u4E3A\u65B0\u5EFA"),
            createVNode("li", null, "\u66F4\u65B0\u51FA\u5E93\u5355\u884C\uFF1A\u53EF\u6838\u9500\u6570\u91CF\u56DE\u52A0\u53D6\u6D88\u6570\u91CF\uFF0C\u5DF2\u6838\u9500\u6570\u91CF\u51CF\u5C11\u53D6\u6D88\u6570\u91CF"),
            createVNode("li", null, "\u4F5C\u5E9F\u53D1\u7968\u65F6\uFF0C\u66F4\u65B0\u53D1\u7968\u4E3B\u8981\u4FE1\u606F\u6709\u6548\u72B6\u6001\u4E3Aobsolete\uFF0C\u540C\u65F6\u66F4\u65B0\u5173\u8054\u6838\u9500\u660E\u7EC6\u72B6\u6001"),
            createVNode("li", null, "\u53D6\u6D88\u64CD\u4F5C\u4F7F\u7528\u5206\u5E03\u5F0F\u9501\u63A7\u5236\u5E76\u53D1\uFF0C\u907F\u514D\u540C\u65F6\u53D6\u6D88\u5BFC\u81F4\u6570\u636E\u4E0D\u4E00\u81F4")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, {
    num: "5",
    title: "\u91CD\u70B9\u903B\u8F915\uFF1A\u7EC8\u6B62\u4E0E\u64A4\u56DE\u7EC8\u6B62"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u610F\u4E49</strong>\uFF1A\u5BF9\u771F\u5B9E\u6027\u6838\u9500\u5355\u8FDB\u884C\u7EC8\u6B62\u64CD\u4F5C\uFF0C\u652F\u6301\u64A4\u56DE\u7EC8\u6B62\u6062\u590D</li><li${_scopeId}><strong${_scopeId}>\u5177\u4F53\u903B\u8F91\u63CF\u8FF0</strong>\uFF1A</li><li${_scopeId}>\u7EC8\u6B62(terminate)\uFF1A\u6807\u8BB0\u6838\u9500\u5355\u4E3A\u7EC8\u6B62\u72B6\u6001\uFF0C\u8BB0\u5F55\u7EC8\u6B62\u5386\u53F2</li><li${_scopeId}>\u64A4\u56DE\u7EC8\u6B62(undoTerminate)\uFF1A\u6062\u590D\u4E3A\u6B63\u5E38\u72B6\u6001</li><li${_scopeId}>bizType\u533A\u5206\uFF1AisHome=2\u4E3A211115(\u5BB6\u88C5)\uFF0C\u5426\u5219210916(\u5DE5\u7A0B)</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u610F\u4E49"),
              createTextVNode("\uFF1A\u5BF9\u771F\u5B9E\u6027\u6838\u9500\u5355\u8FDB\u884C\u7EC8\u6B62\u64CD\u4F5C\uFF0C\u652F\u6301\u64A4\u56DE\u7EC8\u6B62\u6062\u590D")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u5177\u4F53\u903B\u8F91\u63CF\u8FF0"),
              createTextVNode("\uFF1A")
            ]),
            createVNode("li", null, "\u7EC8\u6B62(terminate)\uFF1A\u6807\u8BB0\u6838\u9500\u5355\u4E3A\u7EC8\u6B62\u72B6\u6001\uFF0C\u8BB0\u5F55\u7EC8\u6B62\u5386\u53F2"),
            createVNode("li", null, "\u64A4\u56DE\u7EC8\u6B62(undoTerminate)\uFF1A\u6062\u590D\u4E3A\u6B63\u5E38\u72B6\u6001"),
            createVNode("li", null, "bizType\u533A\u5206\uFF1AisHome=2\u4E3A211115(\u5BB6\u88C5)\uFF0C\u5426\u5219210916(\u5DE5\u7A0B)")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, {
    num: "6",
    title: "\u91CD\u70B9\u903B\u8F916\uFF1A\u6570\u91CF\u8F6C\u5316"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u610F\u4E49</strong>\uFF1A\u5904\u7406\u53D1\u7968\u660E\u7EC6\u5355\u4F4D\u4E0E\u6838\u9500\u5355\u4F4D\u4E0D\u4E00\u81F4\u65F6\u7684\u6570\u91CF\u8F6C\u6362</li><li${_scopeId}><strong${_scopeId}>\u5177\u4F53\u903B\u8F91\u63CF\u8FF0</strong>\uFF1A</li><li${_scopeId}>convertNum\u63A5\u53E3\u5904\u7406\u5355\u4F4D\u8F6C\u6362</li><li${_scopeId}>\u901A\u8FC7UOM_RATE\u8BA1\u7B97\u8F6C\u5316\u540E\u5269\u4F59\u53EF\u6838\u9500\u6570\u91CF(CONVERT_SUR_VERIFER_NUMBER)</li><li${_scopeId}>\u4FDD\u8BC1\u6838\u9500\u6570\u91CF\u5728\u4E0D\u540C\u8BA1\u91CF\u5355\u4F4D\u4E0B\u51C6\u786E</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u610F\u4E49"),
              createTextVNode("\uFF1A\u5904\u7406\u53D1\u7968\u660E\u7EC6\u5355\u4F4D\u4E0E\u6838\u9500\u5355\u4F4D\u4E0D\u4E00\u81F4\u65F6\u7684\u6570\u91CF\u8F6C\u6362")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u5177\u4F53\u903B\u8F91\u63CF\u8FF0"),
              createTextVNode("\uFF1A")
            ]),
            createVNode("li", null, "convertNum\u63A5\u53E3\u5904\u7406\u5355\u4F4D\u8F6C\u6362"),
            createVNode("li", null, "\u901A\u8FC7UOM_RATE\u8BA1\u7B97\u8F6C\u5316\u540E\u5269\u4F59\u53EF\u6838\u9500\u6570\u91CF(CONVERT_SUR_VERIFER_NUMBER)"),
            createVNode("li", null, "\u4FDD\u8BC1\u6838\u9500\u6570\u91CF\u5728\u4E0D\u540C\u8BA1\u91CF\u5355\u4F4D\u4E0B\u51C6\u786E")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div><div id="detail-logic" style="${ssrRenderStyle({ "display": "none" })}"><div class="tab-pad"><div class="kl-wrap">`);
  _push(ssrRenderComponent(_component_KbCard, { title: "\u754C\u9762\u6A21\u57571\uFF1A\u67E5\u8BE2\u533A" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5B57\u6BB5\u540D</th><th${_scopeId}>\u6570\u636E\u5E93\u5217\u540D</th><th${_scopeId}>\u7EC4\u4EF6</th><th${_scopeId}>\u4E1A\u52A1\u91CA\u4E49</th><th${_scopeId}>\u663E\u9690\u6761\u4EF6</th><th${_scopeId}>\u53D6\u503C/\u8D4B\u503C\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u6838\u9500\u5355\u53F7</td><td${_scopeId}>EPM_INVOICE_TRUTH_HEADER.INVOICE_TRUTH_NO</td><td${_scopeId}>\u6587\u672C\u8F93\u5165\u6846</td><td${_scopeId}>\u6A21\u7CCA\u67E5\u8BE2\u6838\u9500\u5355\u53F7</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u624B\u52A8\u8F93\u5165</td></tr><tr${_scopeId}><td${_scopeId}>\u9879\u76EE\u7F16\u7801</td><td${_scopeId}>EPM_INVOICE_TRUTH_HEADER.PROJECT_CODE</td><td${_scopeId}>\u6587\u672C\u8F93\u5165\u6846</td><td${_scopeId}>\u6A21\u7CCA\u67E5\u8BE2\u9879\u76EE</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u624B\u52A8\u8F93\u5165</td></tr><tr${_scopeId}><td${_scopeId}>\u5408\u540C\u7F16\u7801</td><td${_scopeId}>EPM_INVOICE_TRUTH_HEADER.CONTRACT_CODE</td><td${_scopeId}>\u6587\u672C\u8F93\u5165\u6846</td><td${_scopeId}>\u6A21\u7CCA\u67E5\u8BE2\u5408\u540C</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u624B\u52A8\u8F93\u5165</td></tr><tr${_scopeId}><td${_scopeId}>\u7ECF\u9500\u5546\u540D\u79F0</td><td${_scopeId}>EPM_INVOICE_TRUTH_HEADER.CUSTOMER_NAME</td><td${_scopeId}>\u6587\u672C\u8F93\u5165\u6846</td><td${_scopeId}>\u6A21\u7CCA\u67E5\u8BE2\u7ECF\u9500\u5546</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u624B\u52A8\u8F93\u5165</td></tr><tr${_scopeId}><td${_scopeId}>\u5BA1\u6279\u72B6\u6001</td><td${_scopeId}>EPM_INVOICE_TRUTH_HEADER.HZ_APPROVE_STATUS</td><td${_scopeId}>\u4E0B\u62C9\u9009\u62E9\u6846</td><td${_scopeId}>\u7B5B\u9009\u5BA1\u6279\u72B6\u6001</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u503C\u96C6HWKF.APPROVE_STATUS</td></tr><tr${_scopeId}><td${_scopeId}>\u751F\u6548\u72B6\u6001</td><td${_scopeId}>EPM_VERIFER_INVOICE_DETAILS.EFFECT_STATUS</td><td${_scopeId}>\u4E0B\u62C9\u9009\u62E9\u6846</td><td${_scopeId}>\u7B5B\u9009\u751F\u6548\u72B6\u6001</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u503C\u96C6VERIFER_EFFECT_STATUS</td></tr></tbody></table>`);
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
                createVNode("td", null, "\u6838\u9500\u5355\u53F7"),
                createVNode("td", null, "EPM_INVOICE_TRUTH_HEADER.INVOICE_TRUTH_NO"),
                createVNode("td", null, "\u6587\u672C\u8F93\u5165\u6846"),
                createVNode("td", null, "\u6A21\u7CCA\u67E5\u8BE2\u6838\u9500\u5355\u53F7"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u624B\u52A8\u8F93\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u9879\u76EE\u7F16\u7801"),
                createVNode("td", null, "EPM_INVOICE_TRUTH_HEADER.PROJECT_CODE"),
                createVNode("td", null, "\u6587\u672C\u8F93\u5165\u6846"),
                createVNode("td", null, "\u6A21\u7CCA\u67E5\u8BE2\u9879\u76EE"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u624B\u52A8\u8F93\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5408\u540C\u7F16\u7801"),
                createVNode("td", null, "EPM_INVOICE_TRUTH_HEADER.CONTRACT_CODE"),
                createVNode("td", null, "\u6587\u672C\u8F93\u5165\u6846"),
                createVNode("td", null, "\u6A21\u7CCA\u67E5\u8BE2\u5408\u540C"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u624B\u52A8\u8F93\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7ECF\u9500\u5546\u540D\u79F0"),
                createVNode("td", null, "EPM_INVOICE_TRUTH_HEADER.CUSTOMER_NAME"),
                createVNode("td", null, "\u6587\u672C\u8F93\u5165\u6846"),
                createVNode("td", null, "\u6A21\u7CCA\u67E5\u8BE2\u7ECF\u9500\u5546"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u624B\u52A8\u8F93\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5BA1\u6279\u72B6\u6001"),
                createVNode("td", null, "EPM_INVOICE_TRUTH_HEADER.HZ_APPROVE_STATUS"),
                createVNode("td", null, "\u4E0B\u62C9\u9009\u62E9\u6846"),
                createVNode("td", null, "\u7B5B\u9009\u5BA1\u6279\u72B6\u6001"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u503C\u96C6HWKF.APPROVE_STATUS")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u751F\u6548\u72B6\u6001"),
                createVNode("td", null, "EPM_VERIFER_INVOICE_DETAILS.EFFECT_STATUS"),
                createVNode("td", null, "\u4E0B\u62C9\u9009\u62E9\u6846"),
                createVNode("td", null, "\u7B5B\u9009\u751F\u6548\u72B6\u6001"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u503C\u96C6VERIFER_EFFECT_STATUS")
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, { title: "\u754C\u9762\u6A21\u57572\uFF1A\u5217\u8868\u8868\u683C" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5B57\u6BB5\u540D</th><th${_scopeId}>\u6570\u636E\u5E93\u5217\u540D</th><th${_scopeId}>\u7EC4\u4EF6</th><th${_scopeId}>\u4E1A\u52A1\u91CA\u4E49</th><th${_scopeId}>\u663E\u9690\u6761\u4EF6</th><th${_scopeId}>\u53D6\u503C/\u8D4B\u503C\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u6838\u9500\u5355\u53F7</td><td${_scopeId}>EPM_INVOICE_TRUTH_HEADER.INVOICE_TRUTH_NO</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u771F\u5B9E\u6027\u6838\u9500\u5355\u53F7</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u65B0\u589E\u65F6\u6309\u7F16\u7801\u89C4\u5219\u81EA\u52A8\u751F\u6210\uFF0C\u4E0D\u53EF\u7F16\u8F91</td></tr><tr${_scopeId}><td${_scopeId}>\u9879\u76EE\u7F16\u7801</td><td${_scopeId}>EPM_INVOICE_TRUTH_HEADER.PROJECT_CODE</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u5173\u8054\u9879\u76EE\u7F16\u7801</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u6765\u6E90\u4E8E\u9879\u76EE\u9009\u62E9\uFF0C\u4E0D\u53EF\u7F16\u8F91</td></tr><tr${_scopeId}><td${_scopeId}>\u9879\u76EE\u540D\u79F0</td><td${_scopeId}>EPM_INVOICE_TRUTH_HEADER.PROJECT_NAME</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u5173\u8054\u9879\u76EE\u540D\u79F0</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u6765\u6E90\u4E8E\u9879\u76EE\u9009\u62E9\uFF0C\u4E0D\u53EF\u7F16\u8F91</td></tr><tr${_scopeId}><td${_scopeId}>\u5408\u540C\u7F16\u7801</td><td${_scopeId}>EPM_INVOICE_TRUTH_HEADER.CONTRACT_CODE</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u5173\u8054\u5408\u540C\u7F16\u7801</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u6765\u6E90\u4E8E\u5408\u540C\u9009\u62E9\uFF0C\u4E0D\u53EF\u7F16\u8F91</td></tr><tr${_scopeId}><td${_scopeId}>\u7ECF\u9500\u5546\u540D\u79F0</td><td${_scopeId}>EPM_INVOICE_TRUTH_HEADER.CUSTOMER_NAME</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u7ECF\u9500\u5546\u540D\u79F0</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u6765\u6E90\u4E8E\u9879\u76EE/\u5408\u540C\uFF0C\u4E0D\u53EF\u7F16\u8F91</td></tr><tr${_scopeId}><td${_scopeId}>\u6838\u9500\u53D1\u7968\u4E0A\u4F20\u5355\u53F7</td><td${_scopeId}>EPM_INVOICE_TRUTH_HEADER.INVOICE_VERIFER_NO</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u5173\u8054\u7684\u6838\u9500\u53D1\u7968\u4E0A\u4F20\u5355\u53F7</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u9009\u62E9\u6838\u9500\u53D1\u7968\u4E0A\u4F20\u5355\u540E\u5E26\u5165</td></tr><tr${_scopeId}><td${_scopeId}>\u6838\u9500\u7C7B\u578B</td><td${_scopeId}>EPM_INVOICE_TRUTH_HEADER.VERIFER_TYPE</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u6838\u9500\u7C7B\u578B</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u6765\u6E90\u4E8E\u6838\u9500\u53D1\u7968\u4E0A\u4F20\u5355</td></tr><tr${_scopeId}><td${_scopeId}>\u5BA1\u6279\u72B6\u6001</td><td${_scopeId}>EPM_INVOICE_TRUTH_HEADER.HZ_APPROVE_STATUS</td><td${_scopeId}>\u6807\u7B7E</td><td${_scopeId}>H0\u6D41\u7A0B\u5BA1\u6279\u72B6\u6001</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u503C\u96C6HWKF.APPROVE_STATUS\u7FFB\u8BD1</td></tr><tr${_scopeId}><td${_scopeId}>\u662F\u5426\u5BB6\u88C5</td><td${_scopeId}>EPM_INVOICE_TRUTH_HEADER.IS_HOME</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u662F\u5426\u5BB6\u88C5</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>1-\u5DE5\u7A0B/2-\u5BB6\u88C5</td></tr><tr${_scopeId}><td${_scopeId}>\u6298\u6263\u653F\u7B56</td><td${_scopeId}>EPM_INVOICE_TRUTH_HEADER.DISCOUNT_POLICY_NAME</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u5173\u8054\u6298\u6263\u653F\u7B56\u540D\u79F0</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u9009\u62E9\u6298\u6263\u653F\u7B56\u540E\u5E26\u5165</td></tr><tr${_scopeId}><td${_scopeId}>\u521B\u5EFA\u4EBA</td><td${_scopeId}>EPM_INVOICE_TRUTH_HEADER.CREATOR_NAME</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u521B\u5EFA\u4EBA</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u7CFB\u7EDF\u81EA\u52A8\u8BB0\u5F55</td></tr><tr${_scopeId}><td${_scopeId}>\u521B\u5EFA\u65F6\u95F4</td><td${_scopeId}>EPM_INVOICE_TRUTH_HEADER.CREATE_TIME</td><td${_scopeId}>\u65E5\u671F</td><td${_scopeId}>\u521B\u5EFA\u65F6\u95F4</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u7CFB\u7EDF\u81EA\u52A8\u8BB0\u5F55</td></tr></tbody></table>`);
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
                createVNode("td", null, "\u6838\u9500\u5355\u53F7"),
                createVNode("td", null, "EPM_INVOICE_TRUTH_HEADER.INVOICE_TRUTH_NO"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u771F\u5B9E\u6027\u6838\u9500\u5355\u53F7"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u65B0\u589E\u65F6\u6309\u7F16\u7801\u89C4\u5219\u81EA\u52A8\u751F\u6210\uFF0C\u4E0D\u53EF\u7F16\u8F91")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u9879\u76EE\u7F16\u7801"),
                createVNode("td", null, "EPM_INVOICE_TRUTH_HEADER.PROJECT_CODE"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u5173\u8054\u9879\u76EE\u7F16\u7801"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u6765\u6E90\u4E8E\u9879\u76EE\u9009\u62E9\uFF0C\u4E0D\u53EF\u7F16\u8F91")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u9879\u76EE\u540D\u79F0"),
                createVNode("td", null, "EPM_INVOICE_TRUTH_HEADER.PROJECT_NAME"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u5173\u8054\u9879\u76EE\u540D\u79F0"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u6765\u6E90\u4E8E\u9879\u76EE\u9009\u62E9\uFF0C\u4E0D\u53EF\u7F16\u8F91")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5408\u540C\u7F16\u7801"),
                createVNode("td", null, "EPM_INVOICE_TRUTH_HEADER.CONTRACT_CODE"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u5173\u8054\u5408\u540C\u7F16\u7801"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u6765\u6E90\u4E8E\u5408\u540C\u9009\u62E9\uFF0C\u4E0D\u53EF\u7F16\u8F91")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7ECF\u9500\u5546\u540D\u79F0"),
                createVNode("td", null, "EPM_INVOICE_TRUTH_HEADER.CUSTOMER_NAME"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u7ECF\u9500\u5546\u540D\u79F0"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u6765\u6E90\u4E8E\u9879\u76EE/\u5408\u540C\uFF0C\u4E0D\u53EF\u7F16\u8F91")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6838\u9500\u53D1\u7968\u4E0A\u4F20\u5355\u53F7"),
                createVNode("td", null, "EPM_INVOICE_TRUTH_HEADER.INVOICE_VERIFER_NO"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u5173\u8054\u7684\u6838\u9500\u53D1\u7968\u4E0A\u4F20\u5355\u53F7"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u9009\u62E9\u6838\u9500\u53D1\u7968\u4E0A\u4F20\u5355\u540E\u5E26\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6838\u9500\u7C7B\u578B"),
                createVNode("td", null, "EPM_INVOICE_TRUTH_HEADER.VERIFER_TYPE"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u6838\u9500\u7C7B\u578B"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u6765\u6E90\u4E8E\u6838\u9500\u53D1\u7968\u4E0A\u4F20\u5355")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5BA1\u6279\u72B6\u6001"),
                createVNode("td", null, "EPM_INVOICE_TRUTH_HEADER.HZ_APPROVE_STATUS"),
                createVNode("td", null, "\u6807\u7B7E"),
                createVNode("td", null, "H0\u6D41\u7A0B\u5BA1\u6279\u72B6\u6001"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u503C\u96C6HWKF.APPROVE_STATUS\u7FFB\u8BD1")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u662F\u5426\u5BB6\u88C5"),
                createVNode("td", null, "EPM_INVOICE_TRUTH_HEADER.IS_HOME"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u662F\u5426\u5BB6\u88C5"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "1-\u5DE5\u7A0B/2-\u5BB6\u88C5")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6298\u6263\u653F\u7B56"),
                createVNode("td", null, "EPM_INVOICE_TRUTH_HEADER.DISCOUNT_POLICY_NAME"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u5173\u8054\u6298\u6263\u653F\u7B56\u540D\u79F0"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u9009\u62E9\u6298\u6263\u653F\u7B56\u540E\u5E26\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u521B\u5EFA\u4EBA"),
                createVNode("td", null, "EPM_INVOICE_TRUTH_HEADER.CREATOR_NAME"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u521B\u5EFA\u4EBA"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u7CFB\u7EDF\u81EA\u52A8\u8BB0\u5F55")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u521B\u5EFA\u65F6\u95F4"),
                createVNode("td", null, "EPM_INVOICE_TRUTH_HEADER.CREATE_TIME"),
                createVNode("td", null, "\u65E5\u671F"),
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
  _push(ssrRenderComponent(_component_KbCard, { title: "\u754C\u9762\u6A21\u57573\uFF1A\u8BE6\u60C5\u9875-\u6838\u9500\u884C\uFF08\u660E\u7EC6\u5B57\u6BB5\u5217\u8868\uFF09" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5B57\u6BB5\u540D</th><th${_scopeId}>\u6570\u636E\u5E93\u5217\u540D</th><th${_scopeId}>\u7EC4\u4EF6</th><th${_scopeId}>\u4E1A\u52A1\u91CA\u4E49</th><th${_scopeId}>\u663E\u9690\u6761\u4EF6</th><th${_scopeId}>\u53D6\u503C/\u8D4B\u503C\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u51FA\u5E93\u5355\u53F7</td><td${_scopeId}>EPM_INVOICE_TRUTH_LINE.INVBILLNO</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>ERP\u51FA\u5E93\u5355\u53F7</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u6765\u6E90\u4E8E\u51FA\u5E93\u5355\u884C\uFF0C\u4E0D\u53EF\u7F16\u8F91</td></tr><tr${_scopeId}><td${_scopeId}>\u53D1\u8D27\u65E5\u671F</td><td${_scopeId}>EPM_INVOICE_TRUTH_LINE.DATE_INVBILL</td><td${_scopeId}>\u65E5\u671F\u9009\u62E9\u6846</td><td${_scopeId}>\u53D1\u8D27\u65E5\u671F</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u6765\u6E90\u4E8E\u51FA\u5E93\u5355\u884C\uFF0C\u4E0D\u53EF\u7F16\u8F91</td></tr><tr${_scopeId}><td${_scopeId}>\u4EA7\u54C1\u7F16\u7801</td><td${_scopeId}>EPM_INVOICE_TRUTH_LINE.ITEM_CODE</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u4EA7\u54C1\u7F16\u7801</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u6765\u6E90\u4E8E\u51FA\u5E93\u5355\u884C\uFF0C\u4E0D\u53EF\u7F16\u8F91</td></tr><tr${_scopeId}><td${_scopeId}>\u4EA7\u54C1\u540D\u79F0</td><td${_scopeId}>EPM_INVOICE_TRUTH_LINE.ITEM_NAME</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u4EA7\u54C1\u540D\u79F0</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u6765\u6E90\u4E8E\u51FA\u5E93\u5355\u884C\uFF0C\u4E0D\u53EF\u7F16\u8F91</td></tr><tr${_scopeId}><td${_scopeId}>\u5B9E\u53D1\u6570\u91CF</td><td${_scopeId}>EPM_INVOICE_TRUTH_LINE.QTY_BILL</td><td${_scopeId}>\u6570\u503C\u6846</td><td${_scopeId}>\u5B9E\u53D1\u6570\u91CF</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u6765\u6E90\u4E8E\u51FA\u5E93\u5355\u884C\uFF0C\u4E0D\u53EF\u7F16\u8F91</td></tr><tr${_scopeId}><td${_scopeId}>\u53EF\u6838\u9500\u6570\u91CF</td><td${_scopeId}>EPM_INVOICE_TRUTH_LINE.CAN_VERIFER_NUMBER</td><td${_scopeId}>\u6570\u503C\u6846</td><td${_scopeId}>\u51FA\u5E93\u5355\u884C\u53EF\u6838\u9500\u6570\u91CF</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u6765\u6E90\u4E8E\u51FA\u5E93\u5355\u884CCAN_VERIFY_NUM\uFF0C\u4E0D\u53EF\u7F16\u8F91</td></tr><tr${_scopeId}><td${_scopeId}>\u5269\u4F59\u53EF\u6838\u9500\u6570\u91CF</td><td${_scopeId}>EPM_INVOICE_TRUTH_LINE.SURPLUS_CAN_VERIFER_NUMBER</td><td${_scopeId}>\u6570\u503C\u6846</td><td${_scopeId}>\u5269\u4F59\u53EF\u6838\u9500\u6570\u91CF</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u53EF\u6838\u9500\u6570\u91CF-\u5DF2\u6838\u9500\u6570\u91CF\uFF0C\u4E0D\u53EF\u7F16\u8F91</td></tr><tr${_scopeId}><td${_scopeId}>\u672C\u6B21\u6838\u9500\u6570\u91CF</td><td${_scopeId}>EPM_INVOICE_TRUTH_LINE.THIS_VERIFER_NUMBER</td><td${_scopeId}>\u6570\u503C\u6846</td><td${_scopeId}>\u672C\u6B21\u6838\u9500\u6570\u91CF</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u624B\u5DE5\u5F55\u5165\uFF0C\u53EF\u7F16\u8F91\uFF0C\u5C0F\u6570\u4F4D\u22643\uFF0C&gt;0\u4E14\u2264\u5269\u4F59\u53EF\u6838\u9500\u6570\u91CF</td></tr><tr${_scopeId}><td${_scopeId}>\u6838\u9500\u622A\u6B62\u65E5</td><td${_scopeId}>EPM_INVOICE_TRUTH_LINE.VERIFER_END_DATE</td><td${_scopeId}>\u65E5\u671F\u9009\u62E9\u6846</td><td${_scopeId}>\u6838\u9500\u622A\u6B62\u65E5\u671F</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u624B\u5DE5\u5F55\u5165\uFF0C\u53EF\u7F16\u8F91</td></tr><tr${_scopeId}><td${_scopeId}>\u8865\u6838\u9500\u622A\u6B62\u65E5</td><td${_scopeId}>EPM_INVOICE_TRUTH_LINE.REPAIR_VERIFER_END_DATE</td><td${_scopeId}>\u65E5\u671F\u9009\u62E9\u6846</td><td${_scopeId}>\u8865\u6838\u9500\u622A\u6B62\u65E5\u671F</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u624B\u5DE5\u5F55\u5165\uFF0C\u53EF\u7F16\u8F91</td></tr><tr${_scopeId}><td${_scopeId}>\u53D1\u7968\u53F7\u7801</td><td${_scopeId}>EPM_INVOICE_TRUTH_LINE.INVOICE_NUMBER</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u5173\u8054\u53D1\u7968\u53F7\u7801</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u6765\u6E90\u4E8E\u53D1\u7968\u4FE1\u606F\uFF0C\u4E0D\u53EF\u7F16\u8F91</td></tr><tr${_scopeId}><td${_scopeId}>\u53D1\u7968\u4EE3\u7801</td><td${_scopeId}>EPM_INVOICE_TRUTH_LINE.INVOICE_CODE</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u5173\u8054\u53D1\u7968\u4EE3\u7801</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u6765\u6E90\u4E8E\u53D1\u7968\u4FE1\u606F\uFF0C\u4E0D\u53EF\u7F16\u8F91</td></tr></tbody></table>`);
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
                createVNode("td", null, "\u51FA\u5E93\u5355\u53F7"),
                createVNode("td", null, "EPM_INVOICE_TRUTH_LINE.INVBILLNO"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "ERP\u51FA\u5E93\u5355\u53F7"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u6765\u6E90\u4E8E\u51FA\u5E93\u5355\u884C\uFF0C\u4E0D\u53EF\u7F16\u8F91")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u53D1\u8D27\u65E5\u671F"),
                createVNode("td", null, "EPM_INVOICE_TRUTH_LINE.DATE_INVBILL"),
                createVNode("td", null, "\u65E5\u671F\u9009\u62E9\u6846"),
                createVNode("td", null, "\u53D1\u8D27\u65E5\u671F"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u6765\u6E90\u4E8E\u51FA\u5E93\u5355\u884C\uFF0C\u4E0D\u53EF\u7F16\u8F91")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u4EA7\u54C1\u7F16\u7801"),
                createVNode("td", null, "EPM_INVOICE_TRUTH_LINE.ITEM_CODE"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u4EA7\u54C1\u7F16\u7801"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u6765\u6E90\u4E8E\u51FA\u5E93\u5355\u884C\uFF0C\u4E0D\u53EF\u7F16\u8F91")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u4EA7\u54C1\u540D\u79F0"),
                createVNode("td", null, "EPM_INVOICE_TRUTH_LINE.ITEM_NAME"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u4EA7\u54C1\u540D\u79F0"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u6765\u6E90\u4E8E\u51FA\u5E93\u5355\u884C\uFF0C\u4E0D\u53EF\u7F16\u8F91")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5B9E\u53D1\u6570\u91CF"),
                createVNode("td", null, "EPM_INVOICE_TRUTH_LINE.QTY_BILL"),
                createVNode("td", null, "\u6570\u503C\u6846"),
                createVNode("td", null, "\u5B9E\u53D1\u6570\u91CF"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u6765\u6E90\u4E8E\u51FA\u5E93\u5355\u884C\uFF0C\u4E0D\u53EF\u7F16\u8F91")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u53EF\u6838\u9500\u6570\u91CF"),
                createVNode("td", null, "EPM_INVOICE_TRUTH_LINE.CAN_VERIFER_NUMBER"),
                createVNode("td", null, "\u6570\u503C\u6846"),
                createVNode("td", null, "\u51FA\u5E93\u5355\u884C\u53EF\u6838\u9500\u6570\u91CF"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u6765\u6E90\u4E8E\u51FA\u5E93\u5355\u884CCAN_VERIFY_NUM\uFF0C\u4E0D\u53EF\u7F16\u8F91")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5269\u4F59\u53EF\u6838\u9500\u6570\u91CF"),
                createVNode("td", null, "EPM_INVOICE_TRUTH_LINE.SURPLUS_CAN_VERIFER_NUMBER"),
                createVNode("td", null, "\u6570\u503C\u6846"),
                createVNode("td", null, "\u5269\u4F59\u53EF\u6838\u9500\u6570\u91CF"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u53EF\u6838\u9500\u6570\u91CF-\u5DF2\u6838\u9500\u6570\u91CF\uFF0C\u4E0D\u53EF\u7F16\u8F91")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u672C\u6B21\u6838\u9500\u6570\u91CF"),
                createVNode("td", null, "EPM_INVOICE_TRUTH_LINE.THIS_VERIFER_NUMBER"),
                createVNode("td", null, "\u6570\u503C\u6846"),
                createVNode("td", null, "\u672C\u6B21\u6838\u9500\u6570\u91CF"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u624B\u5DE5\u5F55\u5165\uFF0C\u53EF\u7F16\u8F91\uFF0C\u5C0F\u6570\u4F4D\u22643\uFF0C>0\u4E14\u2264\u5269\u4F59\u53EF\u6838\u9500\u6570\u91CF")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6838\u9500\u622A\u6B62\u65E5"),
                createVNode("td", null, "EPM_INVOICE_TRUTH_LINE.VERIFER_END_DATE"),
                createVNode("td", null, "\u65E5\u671F\u9009\u62E9\u6846"),
                createVNode("td", null, "\u6838\u9500\u622A\u6B62\u65E5\u671F"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u624B\u5DE5\u5F55\u5165\uFF0C\u53EF\u7F16\u8F91")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u8865\u6838\u9500\u622A\u6B62\u65E5"),
                createVNode("td", null, "EPM_INVOICE_TRUTH_LINE.REPAIR_VERIFER_END_DATE"),
                createVNode("td", null, "\u65E5\u671F\u9009\u62E9\u6846"),
                createVNode("td", null, "\u8865\u6838\u9500\u622A\u6B62\u65E5\u671F"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u624B\u5DE5\u5F55\u5165\uFF0C\u53EF\u7F16\u8F91")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u53D1\u7968\u53F7\u7801"),
                createVNode("td", null, "EPM_INVOICE_TRUTH_LINE.INVOICE_NUMBER"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u5173\u8054\u53D1\u7968\u53F7\u7801"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u6765\u6E90\u4E8E\u53D1\u7968\u4FE1\u606F\uFF0C\u4E0D\u53EF\u7F16\u8F91")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u53D1\u7968\u4EE3\u7801"),
                createVNode("td", null, "EPM_INVOICE_TRUTH_LINE.INVOICE_CODE"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u5173\u8054\u53D1\u7968\u4EE3\u7801"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u6765\u6E90\u4E8E\u53D1\u7968\u4FE1\u606F\uFF0C\u4E0D\u53EF\u7F16\u8F91")
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, { title: "\u754C\u9762\u6A21\u57574\uFF1A\u8BE6\u60C5\u9875-\u6838\u9500\u53D1\u7968\u660E\u7EC6" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5B57\u6BB5\u540D</th><th${_scopeId}>\u6570\u636E\u5E93\u5217\u540D</th><th${_scopeId}>\u7EC4\u4EF6</th><th${_scopeId}>\u4E1A\u52A1\u91CA\u4E49</th><th${_scopeId}>\u663E\u9690\u6761\u4EF6</th><th${_scopeId}>\u53D6\u503C/\u8D4B\u503C\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u53D1\u7968\u53F7\u7801</td><td${_scopeId}>EPM_VERIFER_INVOICE_DETAILS.INVOICE_NUMBER</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u53D1\u7968\u53F7\u7801</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u6765\u6E90\u4E8E\u6838\u9500\u53D1\u7968\u4E0A\u4F20\uFF0C\u4E0D\u53EF\u7F16\u8F91</td></tr><tr${_scopeId}><td${_scopeId}>\u53D1\u7968\u4EE3\u7801</td><td${_scopeId}>EPM_VERIFER_INVOICE_DETAILS.INVOICE_CODE</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u53D1\u7968\u4EE3\u7801</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u6765\u6E90\u4E8E\u6838\u9500\u53D1\u7968\u4E0A\u4F20\uFF0C\u4E0D\u53EF\u7F16\u8F91</td></tr><tr${_scopeId}><td${_scopeId}>\u8D27\u7269\u6216\u670D\u52A1\u540D\u79F0</td><td${_scopeId}>EPM_VERIFER_INVOICE_DETAILS.SERVICES_NAME</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u8D27\u7269\u6216\u670D\u52A1\u540D\u79F0</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u6765\u6E90\u4E8E\u6838\u9500\u53D1\u7968\u4E0A\u4F20\uFF0C\u4E0D\u53EF\u7F16\u8F91</td></tr><tr${_scopeId}><td${_scopeId}>\u4EA7\u54C1\u7F16\u7801</td><td${_scopeId}>EPM_VERIFER_INVOICE_DETAILS.SERVICES_CODE</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u4EA7\u54C1\u7F16\u7801</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u6765\u6E90\u4E8E\u6838\u9500\u53D1\u7968\u4E0A\u4F20\uFF0C\u4E0D\u53EF\u7F16\u8F91</td></tr><tr${_scopeId}><td${_scopeId}>\u53EF\u6838\u9500\u6570\u91CF</td><td${_scopeId}>EPM_VERIFER_INVOICE_DETAILS.CAN_VERIFER_NUMBER</td><td${_scopeId}>\u6570\u503C\u6846</td><td${_scopeId}>\u53EF\u6838\u9500\u6570\u91CF</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u6765\u6E90\u4E8E\u53D1\u7968\u660E\u7EC6\uFF0C\u4E0D\u53EF\u7F16\u8F91</td></tr><tr${_scopeId}><td${_scopeId}>\u5269\u4F59\u53EF\u6838\u9500\u6570\u91CF</td><td${_scopeId}>EPM_VERIFER_INVOICE_DETAILS.SURPLUS_CAN_VERIFER_NUMBER</td><td${_scopeId}>\u6570\u503C\u6846</td><td${_scopeId}>\u5269\u4F59\u53EF\u6838\u9500\u6570\u91CF</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u6765\u6E90\u4E8E\u53D1\u7968\u660E\u7EC6\uFF0C\u4E0D\u53EF\u7F16\u8F91</td></tr><tr${_scopeId}><td${_scopeId}>\u672C\u6B21\u6838\u9500\u6570\u91CF</td><td${_scopeId}>EPM_VERIFER_INVOICE_DETAILS.THIS_VERIFER_NUMBER</td><td${_scopeId}>\u6570\u503C\u6846</td><td${_scopeId}>\u672C\u6B21\u6838\u9500\u6570\u91CF</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u6765\u6E90\u4E8E\u6838\u9500\u884C\uFF0C\u4E0D\u53EF\u7F16\u8F91</td></tr><tr${_scopeId}><td${_scopeId}>\u5355\u4F4D\u8F6C\u6362\u7387</td><td${_scopeId}>EPM_VERIFER_INVOICE_DETAILS.UOM_RATE</td><td${_scopeId}>\u6570\u503C\u6846</td><td${_scopeId}>\u5355\u4F4D\u8F6C\u6362\u7387</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u8BA1\u91CF\u5355\u4F4D\u8F6C\u6362</td></tr><tr${_scopeId}><td${_scopeId}>\u8F6C\u5316\u540E\u5269\u4F59\u53EF\u6838\u9500\u6570\u91CF</td><td${_scopeId}>EPM_VERIFER_INVOICE_DETAILS.CONVERT_SUR_VERIFER_NUMBER</td><td${_scopeId}>\u6570\u503C\u6846</td><td${_scopeId}>\u8F6C\u5316\u540E\u5269\u4F59\u53EF\u6838\u9500\u6570\u91CF</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u5269\u4F59\u53EF\u6838\u9500\u6570\u91CF\xD7UOM_RATE</td></tr><tr${_scopeId}><td${_scopeId}>\u8D2D\u4E70\u65B9\u4E00\u81F4</td><td${_scopeId}>EPM_VERIFER_INVOICE_DETAILS.UNIT_NAME_IS_AGREEMENT</td><td${_scopeId}>\u6807\u7B7E</td><td${_scopeId}>\u53D1\u7968\u8D2D\u4E70\u65B9\u4E0E\u5DE5\u7A0B\u91C7\u8D2D\u5355\u4F4D\u4E00\u81F4</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>1=\u4E00\u81F4</td></tr><tr${_scopeId}><td${_scopeId}>\u9500\u552E\u65B9\u4E00\u81F4</td><td${_scopeId}>EPM_VERIFER_INVOICE_DETAILS.BILLING_NAME_IS_AGREEMENT</td><td${_scopeId}>\u6807\u7B7E</td><td${_scopeId}>\u53D1\u7968\u9500\u552E\u65B9\u4E0E\u7ECF\u9500\u5546\u6CD5\u4EBA\u4E00\u81F4</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>1=\u4E00\u81F4</td></tr><tr${_scopeId}><td${_scopeId}>\u65E5\u671F\u4E00\u81F4</td><td${_scopeId}>EPM_VERIFER_INVOICE_DETAILS.DATE_IS_AGREEMENT</td><td${_scopeId}>\u6807\u7B7E</td><td${_scopeId}>\u53D1\u7968\u65E5\u671F\u5728\u53D1\u8D27\u65E5\u671F\u4E4B\u524D</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>1=\u4E00\u81F4</td></tr><tr${_scopeId}><td${_scopeId}>\u6709\u6548\u72B6\u6001</td><td${_scopeId}>EPM_VERIFER_INVOICE_DETAILS.EFFECT_STATUS</td><td${_scopeId}>\u6807\u7B7E</td><td${_scopeId}>\u6709\u6548\u72B6\u6001</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>invalid/valid/canceled</td></tr><tr${_scopeId}><td${_scopeId}>\u53D6\u6D88\u7C7B\u578B</td><td${_scopeId}>EPM_VERIFER_INVOICE_DETAILS.CANCEL_TYPE</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u53D6\u6D88\u6838\u9500\u7C7B\u578B</td><td${_scopeId}>\u5DF2\u53D6\u6D88\u65F6\u663E\u793A</td><td${_scopeId}>invoice/invoiceDetail/invLine/veriferDetail/obsInvoice</td></tr><tr${_scopeId}><td${_scopeId}>\u53D6\u6D88\u64CD\u4F5C\u4EBA</td><td${_scopeId}>EPM_VERIFER_INVOICE_DETAILS.CANCEL_OPERATOR</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u6838\u9500\u53D6\u6D88\u64CD\u4F5C\u4EBA</td><td${_scopeId}>\u5DF2\u53D6\u6D88\u65F6\u663E\u793A</td><td${_scopeId}>\u7CFB\u7EDF\u81EA\u52A8\u8BB0\u5F55</td></tr><tr${_scopeId}><td${_scopeId}>\u53D6\u6D88\u65F6\u95F4</td><td${_scopeId}>EPM_VERIFER_INVOICE_DETAILS.CANCEL_TIME</td><td${_scopeId}>\u65E5\u671F</td><td${_scopeId}>\u6838\u9500\u53D6\u6D88\u64CD\u4F5C\u65F6\u95F4</td><td${_scopeId}>\u5DF2\u53D6\u6D88\u65F6\u663E\u793A</td><td${_scopeId}>\u7CFB\u7EDF\u81EA\u52A8\u8BB0\u5F55</td></tr></tbody></table>`);
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
                createVNode("td", null, "\u53D1\u7968\u53F7\u7801"),
                createVNode("td", null, "EPM_VERIFER_INVOICE_DETAILS.INVOICE_NUMBER"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u53D1\u7968\u53F7\u7801"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u6765\u6E90\u4E8E\u6838\u9500\u53D1\u7968\u4E0A\u4F20\uFF0C\u4E0D\u53EF\u7F16\u8F91")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u53D1\u7968\u4EE3\u7801"),
                createVNode("td", null, "EPM_VERIFER_INVOICE_DETAILS.INVOICE_CODE"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u53D1\u7968\u4EE3\u7801"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u6765\u6E90\u4E8E\u6838\u9500\u53D1\u7968\u4E0A\u4F20\uFF0C\u4E0D\u53EF\u7F16\u8F91")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u8D27\u7269\u6216\u670D\u52A1\u540D\u79F0"),
                createVNode("td", null, "EPM_VERIFER_INVOICE_DETAILS.SERVICES_NAME"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u8D27\u7269\u6216\u670D\u52A1\u540D\u79F0"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u6765\u6E90\u4E8E\u6838\u9500\u53D1\u7968\u4E0A\u4F20\uFF0C\u4E0D\u53EF\u7F16\u8F91")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u4EA7\u54C1\u7F16\u7801"),
                createVNode("td", null, "EPM_VERIFER_INVOICE_DETAILS.SERVICES_CODE"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u4EA7\u54C1\u7F16\u7801"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u6765\u6E90\u4E8E\u6838\u9500\u53D1\u7968\u4E0A\u4F20\uFF0C\u4E0D\u53EF\u7F16\u8F91")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u53EF\u6838\u9500\u6570\u91CF"),
                createVNode("td", null, "EPM_VERIFER_INVOICE_DETAILS.CAN_VERIFER_NUMBER"),
                createVNode("td", null, "\u6570\u503C\u6846"),
                createVNode("td", null, "\u53EF\u6838\u9500\u6570\u91CF"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u6765\u6E90\u4E8E\u53D1\u7968\u660E\u7EC6\uFF0C\u4E0D\u53EF\u7F16\u8F91")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5269\u4F59\u53EF\u6838\u9500\u6570\u91CF"),
                createVNode("td", null, "EPM_VERIFER_INVOICE_DETAILS.SURPLUS_CAN_VERIFER_NUMBER"),
                createVNode("td", null, "\u6570\u503C\u6846"),
                createVNode("td", null, "\u5269\u4F59\u53EF\u6838\u9500\u6570\u91CF"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u6765\u6E90\u4E8E\u53D1\u7968\u660E\u7EC6\uFF0C\u4E0D\u53EF\u7F16\u8F91")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u672C\u6B21\u6838\u9500\u6570\u91CF"),
                createVNode("td", null, "EPM_VERIFER_INVOICE_DETAILS.THIS_VERIFER_NUMBER"),
                createVNode("td", null, "\u6570\u503C\u6846"),
                createVNode("td", null, "\u672C\u6B21\u6838\u9500\u6570\u91CF"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u6765\u6E90\u4E8E\u6838\u9500\u884C\uFF0C\u4E0D\u53EF\u7F16\u8F91")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5355\u4F4D\u8F6C\u6362\u7387"),
                createVNode("td", null, "EPM_VERIFER_INVOICE_DETAILS.UOM_RATE"),
                createVNode("td", null, "\u6570\u503C\u6846"),
                createVNode("td", null, "\u5355\u4F4D\u8F6C\u6362\u7387"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u8BA1\u91CF\u5355\u4F4D\u8F6C\u6362")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u8F6C\u5316\u540E\u5269\u4F59\u53EF\u6838\u9500\u6570\u91CF"),
                createVNode("td", null, "EPM_VERIFER_INVOICE_DETAILS.CONVERT_SUR_VERIFER_NUMBER"),
                createVNode("td", null, "\u6570\u503C\u6846"),
                createVNode("td", null, "\u8F6C\u5316\u540E\u5269\u4F59\u53EF\u6838\u9500\u6570\u91CF"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u5269\u4F59\u53EF\u6838\u9500\u6570\u91CF\xD7UOM_RATE")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u8D2D\u4E70\u65B9\u4E00\u81F4"),
                createVNode("td", null, "EPM_VERIFER_INVOICE_DETAILS.UNIT_NAME_IS_AGREEMENT"),
                createVNode("td", null, "\u6807\u7B7E"),
                createVNode("td", null, "\u53D1\u7968\u8D2D\u4E70\u65B9\u4E0E\u5DE5\u7A0B\u91C7\u8D2D\u5355\u4F4D\u4E00\u81F4"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "1=\u4E00\u81F4")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u9500\u552E\u65B9\u4E00\u81F4"),
                createVNode("td", null, "EPM_VERIFER_INVOICE_DETAILS.BILLING_NAME_IS_AGREEMENT"),
                createVNode("td", null, "\u6807\u7B7E"),
                createVNode("td", null, "\u53D1\u7968\u9500\u552E\u65B9\u4E0E\u7ECF\u9500\u5546\u6CD5\u4EBA\u4E00\u81F4"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "1=\u4E00\u81F4")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u65E5\u671F\u4E00\u81F4"),
                createVNode("td", null, "EPM_VERIFER_INVOICE_DETAILS.DATE_IS_AGREEMENT"),
                createVNode("td", null, "\u6807\u7B7E"),
                createVNode("td", null, "\u53D1\u7968\u65E5\u671F\u5728\u53D1\u8D27\u65E5\u671F\u4E4B\u524D"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "1=\u4E00\u81F4")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6709\u6548\u72B6\u6001"),
                createVNode("td", null, "EPM_VERIFER_INVOICE_DETAILS.EFFECT_STATUS"),
                createVNode("td", null, "\u6807\u7B7E"),
                createVNode("td", null, "\u6709\u6548\u72B6\u6001"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "invalid/valid/canceled")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u53D6\u6D88\u7C7B\u578B"),
                createVNode("td", null, "EPM_VERIFER_INVOICE_DETAILS.CANCEL_TYPE"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u53D6\u6D88\u6838\u9500\u7C7B\u578B"),
                createVNode("td", null, "\u5DF2\u53D6\u6D88\u65F6\u663E\u793A"),
                createVNode("td", null, "invoice/invoiceDetail/invLine/veriferDetail/obsInvoice")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u53D6\u6D88\u64CD\u4F5C\u4EBA"),
                createVNode("td", null, "EPM_VERIFER_INVOICE_DETAILS.CANCEL_OPERATOR"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u6838\u9500\u53D6\u6D88\u64CD\u4F5C\u4EBA"),
                createVNode("td", null, "\u5DF2\u53D6\u6D88\u65F6\u663E\u793A"),
                createVNode("td", null, "\u7CFB\u7EDF\u81EA\u52A8\u8BB0\u5F55")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u53D6\u6D88\u65F6\u95F4"),
                createVNode("td", null, "EPM_VERIFER_INVOICE_DETAILS.CANCEL_TIME"),
                createVNode("td", null, "\u65E5\u671F"),
                createVNode("td", null, "\u6838\u9500\u53D6\u6D88\u64CD\u4F5C\u65F6\u95F4"),
                createVNode("td", null, "\u5DF2\u53D6\u6D88\u65F6\u663E\u793A"),
                createVNode("td", null, "\u7CFB\u7EDF\u81EA\u52A8\u8BB0\u5F55")
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
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u63A5\u53E3\u540D\u79F0</th><th${_scopeId}>Controller</th><th${_scopeId}>Service</th><th${_scopeId}>\u8DEF\u5F84</th><th${_scopeId}>\u8BF4\u660E</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u67E5\u8BE2\u9879\u76EE</td><td${_scopeId}>EpmInvoiceTruthHeaderController</td><td${_scopeId}>queryProjectList</td><td${_scopeId}>GET /search-project</td><td${_scopeId}>\u67E5\u8BE2\u53EF\u6838\u9500\u9879\u76EE</td></tr><tr${_scopeId}><td${_scopeId}>\u4FDD\u5B58</td><td${_scopeId}>EpmInvoiceTruthHeaderController</td><td${_scopeId}>save</td><td${_scopeId}>POST /save</td><td${_scopeId}>\u4FDD\u5B58\u771F\u5B9E\u6027\u6838\u9500\u5355</td></tr><tr${_scopeId}><td${_scopeId}>\u4FEE\u6539</td><td${_scopeId}>EpmInvoiceTruthHeaderController</td><td${_scopeId}>update</td><td${_scopeId}>POST /update</td><td${_scopeId}>\u4FEE\u6539\u771F\u5B9E\u6027\u6838\u9500\u5355</td></tr><tr${_scopeId}><td${_scopeId}>\u5217\u8868\u67E5\u8BE2</td><td${_scopeId}>EpmInvoiceTruthHeaderController</td><td${_scopeId}>searchList</td><td${_scopeId}>GET /invoice-truth/list</td><td${_scopeId}>\u5206\u9875\u67E5\u8BE2\u6838\u9500\u5217\u8868</td></tr><tr${_scopeId}><td${_scopeId}>\u660E\u7EC6\u67E5\u8BE2</td><td${_scopeId}>EpmInvoiceTruthHeaderController</td><td${_scopeId}>searchDetail</td><td${_scopeId}>GET /invoice-truth/detail/{id}</td><td${_scopeId}>\u67E5\u8BE2\u6838\u9500\u660E\u7EC6</td></tr><tr${_scopeId}><td${_scopeId}>\u5220\u9664</td><td${_scopeId}>EpmInvoiceTruthHeaderController</td><td${_scopeId}>invoiceTruthDelete</td><td${_scopeId}>POST /invoice-truth/delete/{id}</td><td${_scopeId}>\u5220\u9664\u6838\u9500\u5355</td></tr><tr${_scopeId}><td${_scopeId}>\u67E5\u8BE2\u4EA4\u6613\u516C\u53F8</td><td${_scopeId}>EpmInvoiceTruthHeaderController</td><td${_scopeId}>doSearchTradingCompany</td><td${_scopeId}>GET /do-search-trading-company</td><td${_scopeId}>\u67E5\u8BE2\u4EA4\u6613\u516C\u53F8</td></tr><tr${_scopeId}><td${_scopeId}>\u6570\u91CF\u8F6C\u5316</td><td${_scopeId}>EpmInvoiceTruthHeaderController</td><td${_scopeId}>convertNum</td><td${_scopeId}>POST /convert-num</td><td${_scopeId}>\u5355\u4F4D\u8F6C\u6362\u6570\u91CF\u8BA1\u7B97</td></tr><tr${_scopeId}><td${_scopeId}>\u7EC8\u6B62</td><td${_scopeId}>EpmInvoiceTruthHeaderController</td><td${_scopeId}>terminate</td><td${_scopeId}>POST /terminate</td><td${_scopeId}>\u7EC8\u6B62\u6838\u9500\u5355</td></tr><tr${_scopeId}><td${_scopeId}>\u64A4\u56DE\u7EC8\u6B62</td><td${_scopeId}>EpmInvoiceTruthHeaderController</td><td${_scopeId}>undoTerminate</td><td${_scopeId}>POST /undo-terminate</td><td${_scopeId}>\u64A4\u56DE\u7EC8\u6B62</td></tr><tr${_scopeId}><td${_scopeId}>\u67E5\u8BE2</td><td${_scopeId}>EpmInvoiceTruthHeaderController</td><td${_scopeId}>doSelect</td><td${_scopeId}>POST /select</td><td${_scopeId}>\u67E5\u8BE2\u6838\u9500\u8BE6\u60C5</td></tr><tr${_scopeId}><td${_scopeId}>\u67E5\u8BE2\u51FA\u5E93\u5355\u62A5\u8868</td><td${_scopeId}>EpmInvoiceTruthHeaderController</td><td${_scopeId}>doSearchOutbillReport</td><td${_scopeId}>POST /search-outbill-report</td><td${_scopeId}>\u67E5\u8BE2\u5DE5\u7A0B\u51FA\u5E93\u5355</td></tr><tr${_scopeId}><td${_scopeId}>\u67E5\u8BE2\u53D1\u7968\u4FE1\u606F</td><td${_scopeId}>EpmInvoiceTruthHeaderController</td><td${_scopeId}>doGetInvoiceInfo</td><td${_scopeId}>POST /search-invoice-info</td><td${_scopeId}>\u67E5\u8BE2\u6838\u9500\u53D1\u7968\u4FE1\u606F</td></tr><tr${_scopeId}><td${_scopeId}>\u660E\u7EC6</td><td${_scopeId}>EpmInvoiceTruthHeaderController</td><td${_scopeId}>selectDetailByInvoiceTruthId</td><td${_scopeId}>GET /truth-detail</td><td${_scopeId}>\u67E5\u8BE2\u6838\u9500\u660E\u7EC6</td></tr><tr${_scopeId}><td${_scopeId}>\u53D1\u7968\u660E\u7EC6</td><td${_scopeId}>EpmInvoiceTruthHeaderController</td><td${_scopeId}>queryInvoiceDetailListByTruthId</td><td${_scopeId}>GET /invoice-detail-list</td><td${_scopeId}>\u67E5\u8BE2\u53D1\u7968\u660E\u7EC6\u5217\u8868</td></tr><tr${_scopeId}><td${_scopeId}>\u9879\u76EE\u67E5\u8BE2</td><td${_scopeId}>EpmInvoiceTruthHeaderController</td><td${_scopeId}>searchProject</td><td${_scopeId}>GET /invoice-truth/search-project</td><td${_scopeId}>\u771F\u5B9E\u6027\u6838\u9500\u9879\u76EE\u67E5\u8BE2</td></tr><tr${_scopeId}><td${_scopeId}>\u51FA\u5E93\u5355\u5217\u8868</td><td${_scopeId}>EpmInvoiceTruthHeaderController</td><td${_scopeId}>searchOutBill</td><td${_scopeId}>GET /invoice-truth/search-out-bill</td><td${_scopeId}>\u51FA\u5E93\u5355\u5217\u8868\u67E5\u8BE2</td></tr><tr${_scopeId}><td${_scopeId}>\u53D1\u7968\u5217\u8868</td><td${_scopeId}>EpmInvoiceTruthHeaderController</td><td${_scopeId}>invoiceInfo</td><td${_scopeId}>GET /invoice-truth/invoice-info</td><td${_scopeId}>\u53D1\u7968\u5217\u8868\u67E5\u8BE2</td></tr><tr${_scopeId}><td${_scopeId}>\u6838\u5BF9</td><td${_scopeId}>EpmInvoiceTruthHeaderController</td><td${_scopeId}>queryInvoiceDetail</td><td${_scopeId}>GET /invoice-truth/query-invoice-detail/{id}</td><td${_scopeId}>\u6838\u9500\u6838\u5BF9\u67E5\u8BE2</td></tr><tr${_scopeId}><td${_scopeId}>\u53D6\u6D88/\u4F5C\u5E9F</td><td${_scopeId}>EpmInvoiceTruthHeaderController</td><td${_scopeId}>cancel</td><td${_scopeId}>POST /invoice-truth/cancel</td><td${_scopeId}>\u53D6\u6D88\u6838\u9500\u6216\u4F5C\u5E9F\u53D1\u7968</td></tr><tr${_scopeId}><td${_scopeId}>\u83B7\u53D6\u51FA\u5E93\u5355</td><td${_scopeId}>EpmInvoiceTruthHeaderController</td><td${_scopeId}>queryInvOutBillHeadList</td><td${_scopeId}>POST /invoutlist</td><td${_scopeId}>\u83B7\u53D6\u51FA\u5E93\u5355\u5217\u8868</td></tr><tr${_scopeId}><td${_scopeId}>\u83B7\u53D6\u53D1\u7968\u4FE1\u606F</td><td${_scopeId}>EpmInvoiceTruthHeaderController</td><td${_scopeId}>queryInvoiceInfoList</td><td${_scopeId}>POST /invoice-info</td><td${_scopeId}>\u83B7\u53D6\u53D1\u7968\u4FE1\u606F\u5217\u8868</td></tr></tbody></table>`);
      } else {
        return [
          createVNode("table", { class: "kb-field-tbl" }, [
            createVNode("thead", null, [
              createVNode("tr", null, [
                createVNode("th", null, "\u63A5\u53E3\u540D\u79F0"),
                createVNode("th", null, "Controller"),
                createVNode("th", null, "Service"),
                createVNode("th", null, "\u8DEF\u5F84"),
                createVNode("th", null, "\u8BF4\u660E")
              ])
            ]),
            createVNode("tbody", null, [
              createVNode("tr", null, [
                createVNode("td", null, "\u67E5\u8BE2\u9879\u76EE"),
                createVNode("td", null, "EpmInvoiceTruthHeaderController"),
                createVNode("td", null, "queryProjectList"),
                createVNode("td", null, "GET /search-project"),
                createVNode("td", null, "\u67E5\u8BE2\u53EF\u6838\u9500\u9879\u76EE")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u4FDD\u5B58"),
                createVNode("td", null, "EpmInvoiceTruthHeaderController"),
                createVNode("td", null, "save"),
                createVNode("td", null, "POST /save"),
                createVNode("td", null, "\u4FDD\u5B58\u771F\u5B9E\u6027\u6838\u9500\u5355")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u4FEE\u6539"),
                createVNode("td", null, "EpmInvoiceTruthHeaderController"),
                createVNode("td", null, "update"),
                createVNode("td", null, "POST /update"),
                createVNode("td", null, "\u4FEE\u6539\u771F\u5B9E\u6027\u6838\u9500\u5355")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5217\u8868\u67E5\u8BE2"),
                createVNode("td", null, "EpmInvoiceTruthHeaderController"),
                createVNode("td", null, "searchList"),
                createVNode("td", null, "GET /invoice-truth/list"),
                createVNode("td", null, "\u5206\u9875\u67E5\u8BE2\u6838\u9500\u5217\u8868")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u660E\u7EC6\u67E5\u8BE2"),
                createVNode("td", null, "EpmInvoiceTruthHeaderController"),
                createVNode("td", null, "searchDetail"),
                createVNode("td", null, "GET /invoice-truth/detail/{id}"),
                createVNode("td", null, "\u67E5\u8BE2\u6838\u9500\u660E\u7EC6")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5220\u9664"),
                createVNode("td", null, "EpmInvoiceTruthHeaderController"),
                createVNode("td", null, "invoiceTruthDelete"),
                createVNode("td", null, "POST /invoice-truth/delete/{id}"),
                createVNode("td", null, "\u5220\u9664\u6838\u9500\u5355")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u67E5\u8BE2\u4EA4\u6613\u516C\u53F8"),
                createVNode("td", null, "EpmInvoiceTruthHeaderController"),
                createVNode("td", null, "doSearchTradingCompany"),
                createVNode("td", null, "GET /do-search-trading-company"),
                createVNode("td", null, "\u67E5\u8BE2\u4EA4\u6613\u516C\u53F8")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6570\u91CF\u8F6C\u5316"),
                createVNode("td", null, "EpmInvoiceTruthHeaderController"),
                createVNode("td", null, "convertNum"),
                createVNode("td", null, "POST /convert-num"),
                createVNode("td", null, "\u5355\u4F4D\u8F6C\u6362\u6570\u91CF\u8BA1\u7B97")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7EC8\u6B62"),
                createVNode("td", null, "EpmInvoiceTruthHeaderController"),
                createVNode("td", null, "terminate"),
                createVNode("td", null, "POST /terminate"),
                createVNode("td", null, "\u7EC8\u6B62\u6838\u9500\u5355")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u64A4\u56DE\u7EC8\u6B62"),
                createVNode("td", null, "EpmInvoiceTruthHeaderController"),
                createVNode("td", null, "undoTerminate"),
                createVNode("td", null, "POST /undo-terminate"),
                createVNode("td", null, "\u64A4\u56DE\u7EC8\u6B62")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u67E5\u8BE2"),
                createVNode("td", null, "EpmInvoiceTruthHeaderController"),
                createVNode("td", null, "doSelect"),
                createVNode("td", null, "POST /select"),
                createVNode("td", null, "\u67E5\u8BE2\u6838\u9500\u8BE6\u60C5")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u67E5\u8BE2\u51FA\u5E93\u5355\u62A5\u8868"),
                createVNode("td", null, "EpmInvoiceTruthHeaderController"),
                createVNode("td", null, "doSearchOutbillReport"),
                createVNode("td", null, "POST /search-outbill-report"),
                createVNode("td", null, "\u67E5\u8BE2\u5DE5\u7A0B\u51FA\u5E93\u5355")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u67E5\u8BE2\u53D1\u7968\u4FE1\u606F"),
                createVNode("td", null, "EpmInvoiceTruthHeaderController"),
                createVNode("td", null, "doGetInvoiceInfo"),
                createVNode("td", null, "POST /search-invoice-info"),
                createVNode("td", null, "\u67E5\u8BE2\u6838\u9500\u53D1\u7968\u4FE1\u606F")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u660E\u7EC6"),
                createVNode("td", null, "EpmInvoiceTruthHeaderController"),
                createVNode("td", null, "selectDetailByInvoiceTruthId"),
                createVNode("td", null, "GET /truth-detail"),
                createVNode("td", null, "\u67E5\u8BE2\u6838\u9500\u660E\u7EC6")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u53D1\u7968\u660E\u7EC6"),
                createVNode("td", null, "EpmInvoiceTruthHeaderController"),
                createVNode("td", null, "queryInvoiceDetailListByTruthId"),
                createVNode("td", null, "GET /invoice-detail-list"),
                createVNode("td", null, "\u67E5\u8BE2\u53D1\u7968\u660E\u7EC6\u5217\u8868")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u9879\u76EE\u67E5\u8BE2"),
                createVNode("td", null, "EpmInvoiceTruthHeaderController"),
                createVNode("td", null, "searchProject"),
                createVNode("td", null, "GET /invoice-truth/search-project"),
                createVNode("td", null, "\u771F\u5B9E\u6027\u6838\u9500\u9879\u76EE\u67E5\u8BE2")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u51FA\u5E93\u5355\u5217\u8868"),
                createVNode("td", null, "EpmInvoiceTruthHeaderController"),
                createVNode("td", null, "searchOutBill"),
                createVNode("td", null, "GET /invoice-truth/search-out-bill"),
                createVNode("td", null, "\u51FA\u5E93\u5355\u5217\u8868\u67E5\u8BE2")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u53D1\u7968\u5217\u8868"),
                createVNode("td", null, "EpmInvoiceTruthHeaderController"),
                createVNode("td", null, "invoiceInfo"),
                createVNode("td", null, "GET /invoice-truth/invoice-info"),
                createVNode("td", null, "\u53D1\u7968\u5217\u8868\u67E5\u8BE2")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6838\u5BF9"),
                createVNode("td", null, "EpmInvoiceTruthHeaderController"),
                createVNode("td", null, "queryInvoiceDetail"),
                createVNode("td", null, "GET /invoice-truth/query-invoice-detail/{id}"),
                createVNode("td", null, "\u6838\u9500\u6838\u5BF9\u67E5\u8BE2")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u53D6\u6D88/\u4F5C\u5E9F"),
                createVNode("td", null, "EpmInvoiceTruthHeaderController"),
                createVNode("td", null, "cancel"),
                createVNode("td", null, "POST /invoice-truth/cancel"),
                createVNode("td", null, "\u53D6\u6D88\u6838\u9500\u6216\u4F5C\u5E9F\u53D1\u7968")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u83B7\u53D6\u51FA\u5E93\u5355"),
                createVNode("td", null, "EpmInvoiceTruthHeaderController"),
                createVNode("td", null, "queryInvOutBillHeadList"),
                createVNode("td", null, "POST /invoutlist"),
                createVNode("td", null, "\u83B7\u53D6\u51FA\u5E93\u5355\u5217\u8868")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u83B7\u53D6\u53D1\u7968\u4FE1\u606F"),
                createVNode("td", null, "EpmInvoiceTruthHeaderController"),
                createVNode("td", null, "queryInvoiceInfoList"),
                createVNode("td", null, "POST /invoice-info"),
                createVNode("td", null, "\u83B7\u53D6\u53D1\u7968\u4FE1\u606F\u5217\u8868")
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
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5F39\u7A97\u540D\u79F0</th><th${_scopeId}>\u89E6\u53D1\u4F4D\u7F6E</th><th${_scopeId}>\u4F5C\u7528</th><th${_scopeId}>\u5165\u53C2</th><th${_scopeId}>\u51FA\u53C2</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u9879\u76EE\u9009\u62E9\u5F39\u7A97</td><td${_scopeId}>\u8BE6\u60C5\u9875\u9009\u62E9\u9879\u76EE</td><td${_scopeId}>\u9009\u62E9\u53EF\u6838\u9500\u9879\u76EE</td><td${_scopeId}>\u7EC4\u7EC7ID</td><td${_scopeId}>projectId/projectCode/projectName</td></tr><tr${_scopeId}><td${_scopeId}>\u5408\u540C\u9009\u62E9\u5F39\u7A97</td><td${_scopeId}>\u8BE6\u60C5\u9875\u9009\u62E9\u5408\u540C</td><td${_scopeId}>\u9009\u62E9\u5173\u8054\u5408\u540C</td><td${_scopeId}>projectId</td><td${_scopeId}>contractId/contractCode/contractName</td></tr><tr${_scopeId}><td${_scopeId}>\u51FA\u5E93\u5355\u9009\u62E9\u5F39\u7A97</td><td${_scopeId}>\u8BE6\u60C5\u9875\u9009\u62E9\u51FA\u5E93\u5355\u884C</td><td${_scopeId}>\u9009\u62E9\u9700\u6838\u9500\u7684\u51FA\u5E93\u5355\u884C</td><td${_scopeId}>projectId/contractId</td><td${_scopeId}>invbillno/dateInvbill/itemCode/qtyBill/canVerifyNum</td></tr><tr${_scopeId}><td${_scopeId}>\u53D1\u7968\u4E0A\u4F20\u5355\u9009\u62E9\u5F39\u7A97</td><td${_scopeId}>\u8BE6\u60C5\u9875\u9009\u62E9\u53D1\u7968</td><td${_scopeId}>\u9009\u62E9\u5DF2\u751F\u6548\u7684\u6838\u9500\u53D1\u7968\u4E0A\u4F20\u5355</td><td${_scopeId}>projectId/contractId</td><td${_scopeId}>invoiceVeriferId/invoiceVeriferNo</td></tr><tr${_scopeId}><td${_scopeId}>\u6298\u6263\u653F\u7B56\u9009\u62E9\u5F39\u7A97</td><td${_scopeId}>\u8BE6\u60C5\u9875\u9009\u62E9\u6298\u6263\u653F\u7B56</td><td${_scopeId}>\u9009\u62E9\u5173\u8054\u6298\u6263\u653F\u7B56</td><td${_scopeId}>projectId/contractId</td><td${_scopeId}>discountPolicyId/discountPolicyCode/discountPolicyName</td></tr><tr${_scopeId}><td${_scopeId}>\u4EA4\u6613\u516C\u53F8\u9009\u62E9\u5F39\u7A97</td><td${_scopeId}>\u8BE6\u60C5\u9875\u9009\u62E9\u4EA4\u6613\u516C\u53F8</td><td${_scopeId}>\u9009\u62E9\u4EA4\u6613\u516C\u53F8</td><td${_scopeId}>\u7EC4\u7EC7ID</td><td${_scopeId}>tradingCompanyId/tradingCompanyName</td></tr></tbody></table>`);
      } else {
        return [
          createVNode("table", { class: "kb-field-tbl" }, [
            createVNode("thead", null, [
              createVNode("tr", null, [
                createVNode("th", null, "\u5F39\u7A97\u540D\u79F0"),
                createVNode("th", null, "\u89E6\u53D1\u4F4D\u7F6E"),
                createVNode("th", null, "\u4F5C\u7528"),
                createVNode("th", null, "\u5165\u53C2"),
                createVNode("th", null, "\u51FA\u53C2")
              ])
            ]),
            createVNode("tbody", null, [
              createVNode("tr", null, [
                createVNode("td", null, "\u9879\u76EE\u9009\u62E9\u5F39\u7A97"),
                createVNode("td", null, "\u8BE6\u60C5\u9875\u9009\u62E9\u9879\u76EE"),
                createVNode("td", null, "\u9009\u62E9\u53EF\u6838\u9500\u9879\u76EE"),
                createVNode("td", null, "\u7EC4\u7EC7ID"),
                createVNode("td", null, "projectId/projectCode/projectName")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5408\u540C\u9009\u62E9\u5F39\u7A97"),
                createVNode("td", null, "\u8BE6\u60C5\u9875\u9009\u62E9\u5408\u540C"),
                createVNode("td", null, "\u9009\u62E9\u5173\u8054\u5408\u540C"),
                createVNode("td", null, "projectId"),
                createVNode("td", null, "contractId/contractCode/contractName")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u51FA\u5E93\u5355\u9009\u62E9\u5F39\u7A97"),
                createVNode("td", null, "\u8BE6\u60C5\u9875\u9009\u62E9\u51FA\u5E93\u5355\u884C"),
                createVNode("td", null, "\u9009\u62E9\u9700\u6838\u9500\u7684\u51FA\u5E93\u5355\u884C"),
                createVNode("td", null, "projectId/contractId"),
                createVNode("td", null, "invbillno/dateInvbill/itemCode/qtyBill/canVerifyNum")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u53D1\u7968\u4E0A\u4F20\u5355\u9009\u62E9\u5F39\u7A97"),
                createVNode("td", null, "\u8BE6\u60C5\u9875\u9009\u62E9\u53D1\u7968"),
                createVNode("td", null, "\u9009\u62E9\u5DF2\u751F\u6548\u7684\u6838\u9500\u53D1\u7968\u4E0A\u4F20\u5355"),
                createVNode("td", null, "projectId/contractId"),
                createVNode("td", null, "invoiceVeriferId/invoiceVeriferNo")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6298\u6263\u653F\u7B56\u9009\u62E9\u5F39\u7A97"),
                createVNode("td", null, "\u8BE6\u60C5\u9875\u9009\u62E9\u6298\u6263\u653F\u7B56"),
                createVNode("td", null, "\u9009\u62E9\u5173\u8054\u6298\u6263\u653F\u7B56"),
                createVNode("td", null, "projectId/contractId"),
                createVNode("td", null, "discountPolicyId/discountPolicyCode/discountPolicyName")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u4EA4\u6613\u516C\u53F8\u9009\u62E9\u5F39\u7A97"),
                createVNode("td", null, "\u8BE6\u60C5\u9875\u9009\u62E9\u4EA4\u6613\u516C\u53F8"),
                createVNode("td", null, "\u9009\u62E9\u4EA4\u6613\u516C\u53F8"),
                createVNode("td", null, "\u7EC4\u7EC7ID"),
                createVNode("td", null, "tradingCompanyId/tradingCompanyName")
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
        _push2(`<p${_scopeId}>\u672C\u9875\u9762\u65E0\u5BFC\u5165\u529F\u80FD\u3002\u6838\u9500\u6570\u636E\u901A\u8FC7\u9009\u62E9\u51FA\u5E93\u5355\u884C\u548C\u53D1\u7968\u4E0A\u4F20\u5355\u81EA\u52A8\u5E26\u5165\uFF0C\u624B\u5DE5\u586B\u5199\u672C\u6B21\u6838\u9500\u6570\u91CF\u3002</p>`);
      } else {
        return [
          createVNode("p", null, "\u672C\u9875\u9762\u65E0\u5BFC\u5165\u529F\u80FD\u3002\u6838\u9500\u6570\u636E\u901A\u8FC7\u9009\u62E9\u51FA\u5E93\u5355\u884C\u548C\u53D1\u7968\u4E0A\u4F20\u5355\u81EA\u52A8\u5E26\u5165\uFF0C\u624B\u5DE5\u586B\u5199\u672C\u6B21\u6838\u9500\u6570\u91CF\u3002")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, { title: "\u5176\u4ED6\u6309\u94AE" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u6309\u94AE\u540D\u79F0</th><th${_scopeId}>\u6309\u94AE\u4F5C\u7528</th><th${_scopeId}>\u6240\u5728\u4F4D\u7F6E</th><th${_scopeId}>\u663E\u9690\u6761\u4EF6/\u53EF\u70B9\u51FB\u6761\u4EF6</th><th${_scopeId}>\u5F71\u54CD</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u4FDD\u5B58</td><td${_scopeId}>\u4FDD\u5B58\u771F\u5B9E\u6027\u6838\u9500\u5355</td><td${_scopeId}>\u8BE6\u60C5\u9875</td><td${_scopeId}>\u65B0\u5EFA/\u7F16\u8F91\u72B6\u6001</td><td${_scopeId}>\u8C03\u7528save/update\u63A5\u53E3\uFF0C\u4FDD\u5B58\u6838\u9500\u884C\u548C\u6838\u9500\u660E\u7EC6</td></tr><tr${_scopeId}><td${_scopeId}>\u63D0\u4EA4</td><td${_scopeId}>\u63D0\u4EA4\u5BA1\u6279</td><td${_scopeId}>\u8BE6\u60C5\u9875</td><td${_scopeId}>\u6838\u9500\u5355\u5DF2\u4FDD\u5B58</td><td${_scopeId}>\u542F\u52A8\u5DE5\u4F5C\u6D41PROJECT_XMZSXHX_AW/PROJECT_JZXMZSXHX_AW</td></tr><tr${_scopeId}><td${_scopeId}>\u5220\u9664</td><td${_scopeId}>\u5220\u9664\u6838\u9500\u5355</td><td${_scopeId}>\u8BE6\u60C5\u9875</td><td${_scopeId}>\u65B0\u5EFA\u72B6\u6001</td><td${_scopeId}>\u8C03\u7528invoiceTruthDelete\u63A5\u53E3</td></tr><tr${_scopeId}><td${_scopeId}>\u7EC8\u6B62</td><td${_scopeId}>\u7EC8\u6B62\u6838\u9500\u5355</td><td${_scopeId}>\u8BE6\u60C5\u9875</td><td${_scopeId}>\u975E\u7EC8\u6B62\u72B6\u6001</td><td${_scopeId}>\u8C03\u7528terminate\u63A5\u53E3</td></tr><tr${_scopeId}><td${_scopeId}>\u64A4\u56DE\u7EC8\u6B62</td><td${_scopeId}>\u64A4\u56DE\u7EC8\u6B62</td><td${_scopeId}>\u8BE6\u60C5\u9875</td><td${_scopeId}>\u5DF2\u7EC8\u6B62\u72B6\u6001</td><td${_scopeId}>\u8C03\u7528undoTerminate\u63A5\u53E3</td></tr><tr${_scopeId}><td${_scopeId}>\u53D6\u6D88\u6838\u9500</td><td${_scopeId}>\u53D6\u6D88\u5DF2\u6838\u9500\u7684\u660E\u7EC6</td><td${_scopeId}>\u8BE6\u60C5\u9875</td><td${_scopeId}>\u5B58\u5728\u6709\u6548\u6838\u9500\u660E\u7EC6</td><td${_scopeId}>\u8C03\u7528cancel\u63A5\u53E3\uFF0C\u652F\u63015\u79CD\u64CD\u4F5C\u7C7B\u578B</td></tr><tr${_scopeId}><td${_scopeId}>\u4F5C\u5E9F\u53D1\u7968</td><td${_scopeId}>\u4F5C\u5E9F\u6307\u5B9A\u53D1\u7968</td><td${_scopeId}>\u8BE6\u60C5\u9875</td><td${_scopeId}>\u5B58\u5728\u6709\u6548\u53D1\u7968</td><td${_scopeId}>\u8C03\u7528cancel\u63A5\u53E3(actionType=obsInvoice)</td></tr><tr${_scopeId}><td${_scopeId}>\u6570\u91CF\u8F6C\u5316</td><td${_scopeId}>\u5355\u4F4D\u8F6C\u6362\u6570\u91CF\u8BA1\u7B97</td><td${_scopeId}>\u8BE6\u60C5\u9875</td><td${_scopeId}>\u9700\u5355\u4F4D\u8F6C\u6362\u65F6</td><td${_scopeId}>\u8C03\u7528convertNum\u63A5\u53E3</td></tr><tr${_scopeId}><td${_scopeId}>\u67E5\u8BE2\u51FA\u5E93\u5355</td><td${_scopeId}>\u67E5\u8BE2\u53EF\u6838\u9500\u51FA\u5E93\u5355</td><td${_scopeId}>\u8BE6\u60C5\u9875</td><td${_scopeId}>\u5DF2\u9009\u9879\u76EE</td><td${_scopeId}>\u8C03\u7528searchOutBill\u63A5\u53E3</td></tr><tr${_scopeId}><td${_scopeId}>\u67E5\u8BE2\u53D1\u7968\u4FE1\u606F</td><td${_scopeId}>\u67E5\u8BE2\u53EF\u6838\u9500\u53D1\u7968</td><td${_scopeId}>\u8BE6\u60C5\u9875</td><td${_scopeId}>\u5DF2\u9009\u9879\u76EE</td><td${_scopeId}>\u8C03\u7528invoiceInfo\u63A5\u53E3</td></tr></tbody></table><h4${_scopeId}>\u6309\u94AE1\uFF1A\u4FDD\u5B58\uFF08\u8BE6\u60C5\u9875\uFF09</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u65B0\u5EFA\u6216\u7F16\u8F91\u72B6\u6001</li><li${_scopeId}><strong${_scopeId}>\u5904\u7406\u903B\u8F91</strong>\uFF1A</li></ul><p${_scopeId}>1. \u6821\u9A8C\u672C\u6B21\u6838\u9500\u6570\u91CF&gt;0\u4E14\u2264\u5269\u4F59\u53EF\u6838\u9500\u6570\u91CF\uFF0C\u5C0F\u6570\u4F4D\u22643</p><p${_scopeId}>2. \u6821\u9A8C\u53D1\u8D27\u65E5\u671F\u548C\u4EA7\u54C1\u7F16\u7801\u5339\u914D</p><p${_scopeId}>3. \u65B0\u589E\u65F6\u751F\u6210\u6838\u9500\u5355\u53F7(\u7F16\u7801\u89C4\u5219AE.INVOICE_AUTHENTICITY_VERIFI/AE.JZ_INVOICE_AUTHENTICITY_VER)</p><p${_scopeId}>4. \u4FDD\u5B58\u6838\u9500\u884C(EPM_INVOICE_TRUTH_LINE)\u548C\u6838\u9500\u53D1\u7968\u660E\u7EC6(EPM_VERIFER_INVOICE_DETAILS)</p><h4${_scopeId}>\u6309\u94AE2\uFF1A\u63D0\u4EA4\u5BA1\u6279\uFF08\u8BE6\u60C5\u9875\uFF09</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u6838\u9500\u5355\u5DF2\u4FDD\u5B58\u4E14\u5B58\u5728\u672C\u6B21\u6838\u9500\u6570\u91CF&gt;0\u7684\u884C</li><li${_scopeId}><strong${_scopeId}>\u5904\u7406\u903B\u8F91</strong>\uFF1A</li></ul><p${_scopeId}>1. \u6821\u9A8C\u6838\u9500\u5355\u4E0B\u5B58\u5728\u6838\u9500\u884C\u6570\u636E\u4E14\u5B58\u5728\u672C\u6B21\u6838\u9500\u6570\u91CF&gt;0\u7684\u8BB0\u5F55</p><p${_scopeId}>2. \u6309isHome\u9009\u62E9\u5DE5\u4F5C\u6D41\u7F16\u7801(\u5DE5\u7A0BPROJECT_XMZSXHX_AW/\u5BB6\u88C5PROJECT_JZXMZSXHX_AW)</p><p${_scopeId}>3. \u542F\u52A8\u5DE5\u4F5C\u6D41\u5B9E\u4F8B\uFF0C\u66F4\u65B0hzInstanceId\u548ChzApproveStatus=RUN</p><h4${_scopeId}>\u6309\u94AE3\uFF1A\u53D6\u6D88\u6838\u9500\uFF08\u8BE6\u60C5\u9875\uFF09</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u5B58\u5728\u6709\u6548\u6838\u9500\u660E\u7EC6</li><li${_scopeId}><strong${_scopeId}>\u5904\u7406\u903B\u8F91</strong>\uFF1A</li></ul><p${_scopeId}>1. \u6821\u9A8CactionType\u975E\u7A7A\u4E14\u57285\u79CD\u5408\u6CD5\u503C\u8303\u56F4\u5185(invoice/invoiceDetail/invLine/veriferDetail/obsInvoice)</p><p${_scopeId}>2. \u6821\u9A8CidList\u975E\u7A7A</p><p${_scopeId}>3. \u67E5\u8BE2\u53D7\u5F71\u54CD\u7684\u6838\u9500\u660E\u7EC6\uFF0C\u66F4\u65B0\u6709\u6548\u72B6\u6001\u4E3Acanceled\uFF0C\u8BB0\u5F55\u53D6\u6D88\u64CD\u4F5C\u4EBA\u548C\u65F6\u95F4</p><p${_scopeId}>4. \u82E5\u53D7\u5F71\u54CD\u6838\u9500\u5355\u5904\u4E8E\u5BA1\u6279\u4E2D\uFF0C\u4E2D\u65AD\u5BA1\u6279\u91CD\u7F6E\u4E3A\u65B0\u5EFA</p><p${_scopeId}>5. \u66F4\u65B0\u51FA\u5E93\u5355\u884C\uFF1A\u53EF\u6838\u9500\u6570\u91CF\u56DE\u52A0\uFF0C\u5DF2\u6838\u9500\u6570\u91CF\u51CF\u5C11</p><p${_scopeId}>6. \u4F5C\u5E9F\u53D1\u7968\u65F6\u66F4\u65B0\u53D1\u7968\u4E3B\u8981\u4FE1\u606F\u72B6\u6001\u4E3Aobsolete</p>`);
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
                createVNode("td", null, "\u4FDD\u5B58"),
                createVNode("td", null, "\u4FDD\u5B58\u771F\u5B9E\u6027\u6838\u9500\u5355"),
                createVNode("td", null, "\u8BE6\u60C5\u9875"),
                createVNode("td", null, "\u65B0\u5EFA/\u7F16\u8F91\u72B6\u6001"),
                createVNode("td", null, "\u8C03\u7528save/update\u63A5\u53E3\uFF0C\u4FDD\u5B58\u6838\u9500\u884C\u548C\u6838\u9500\u660E\u7EC6")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u63D0\u4EA4"),
                createVNode("td", null, "\u63D0\u4EA4\u5BA1\u6279"),
                createVNode("td", null, "\u8BE6\u60C5\u9875"),
                createVNode("td", null, "\u6838\u9500\u5355\u5DF2\u4FDD\u5B58"),
                createVNode("td", null, "\u542F\u52A8\u5DE5\u4F5C\u6D41PROJECT_XMZSXHX_AW/PROJECT_JZXMZSXHX_AW")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5220\u9664"),
                createVNode("td", null, "\u5220\u9664\u6838\u9500\u5355"),
                createVNode("td", null, "\u8BE6\u60C5\u9875"),
                createVNode("td", null, "\u65B0\u5EFA\u72B6\u6001"),
                createVNode("td", null, "\u8C03\u7528invoiceTruthDelete\u63A5\u53E3")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7EC8\u6B62"),
                createVNode("td", null, "\u7EC8\u6B62\u6838\u9500\u5355"),
                createVNode("td", null, "\u8BE6\u60C5\u9875"),
                createVNode("td", null, "\u975E\u7EC8\u6B62\u72B6\u6001"),
                createVNode("td", null, "\u8C03\u7528terminate\u63A5\u53E3")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u64A4\u56DE\u7EC8\u6B62"),
                createVNode("td", null, "\u64A4\u56DE\u7EC8\u6B62"),
                createVNode("td", null, "\u8BE6\u60C5\u9875"),
                createVNode("td", null, "\u5DF2\u7EC8\u6B62\u72B6\u6001"),
                createVNode("td", null, "\u8C03\u7528undoTerminate\u63A5\u53E3")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u53D6\u6D88\u6838\u9500"),
                createVNode("td", null, "\u53D6\u6D88\u5DF2\u6838\u9500\u7684\u660E\u7EC6"),
                createVNode("td", null, "\u8BE6\u60C5\u9875"),
                createVNode("td", null, "\u5B58\u5728\u6709\u6548\u6838\u9500\u660E\u7EC6"),
                createVNode("td", null, "\u8C03\u7528cancel\u63A5\u53E3\uFF0C\u652F\u63015\u79CD\u64CD\u4F5C\u7C7B\u578B")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u4F5C\u5E9F\u53D1\u7968"),
                createVNode("td", null, "\u4F5C\u5E9F\u6307\u5B9A\u53D1\u7968"),
                createVNode("td", null, "\u8BE6\u60C5\u9875"),
                createVNode("td", null, "\u5B58\u5728\u6709\u6548\u53D1\u7968"),
                createVNode("td", null, "\u8C03\u7528cancel\u63A5\u53E3(actionType=obsInvoice)")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6570\u91CF\u8F6C\u5316"),
                createVNode("td", null, "\u5355\u4F4D\u8F6C\u6362\u6570\u91CF\u8BA1\u7B97"),
                createVNode("td", null, "\u8BE6\u60C5\u9875"),
                createVNode("td", null, "\u9700\u5355\u4F4D\u8F6C\u6362\u65F6"),
                createVNode("td", null, "\u8C03\u7528convertNum\u63A5\u53E3")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u67E5\u8BE2\u51FA\u5E93\u5355"),
                createVNode("td", null, "\u67E5\u8BE2\u53EF\u6838\u9500\u51FA\u5E93\u5355"),
                createVNode("td", null, "\u8BE6\u60C5\u9875"),
                createVNode("td", null, "\u5DF2\u9009\u9879\u76EE"),
                createVNode("td", null, "\u8C03\u7528searchOutBill\u63A5\u53E3")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u67E5\u8BE2\u53D1\u7968\u4FE1\u606F"),
                createVNode("td", null, "\u67E5\u8BE2\u53EF\u6838\u9500\u53D1\u7968"),
                createVNode("td", null, "\u8BE6\u60C5\u9875"),
                createVNode("td", null, "\u5DF2\u9009\u9879\u76EE"),
                createVNode("td", null, "\u8C03\u7528invoiceInfo\u63A5\u53E3")
              ])
            ])
          ]),
          createVNode("h4", null, "\u6309\u94AE1\uFF1A\u4FDD\u5B58\uFF08\u8BE6\u60C5\u9875\uFF09"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u65B0\u5EFA\u6216\u7F16\u8F91\u72B6\u6001")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u5904\u7406\u903B\u8F91"),
              createTextVNode("\uFF1A")
            ])
          ]),
          createVNode("p", null, "1. \u6821\u9A8C\u672C\u6B21\u6838\u9500\u6570\u91CF>0\u4E14\u2264\u5269\u4F59\u53EF\u6838\u9500\u6570\u91CF\uFF0C\u5C0F\u6570\u4F4D\u22643"),
          createVNode("p", null, "2. \u6821\u9A8C\u53D1\u8D27\u65E5\u671F\u548C\u4EA7\u54C1\u7F16\u7801\u5339\u914D"),
          createVNode("p", null, "3. \u65B0\u589E\u65F6\u751F\u6210\u6838\u9500\u5355\u53F7(\u7F16\u7801\u89C4\u5219AE.INVOICE_AUTHENTICITY_VERIFI/AE.JZ_INVOICE_AUTHENTICITY_VER)"),
          createVNode("p", null, "4. \u4FDD\u5B58\u6838\u9500\u884C(EPM_INVOICE_TRUTH_LINE)\u548C\u6838\u9500\u53D1\u7968\u660E\u7EC6(EPM_VERIFER_INVOICE_DETAILS)"),
          createVNode("h4", null, "\u6309\u94AE2\uFF1A\u63D0\u4EA4\u5BA1\u6279\uFF08\u8BE6\u60C5\u9875\uFF09"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u6838\u9500\u5355\u5DF2\u4FDD\u5B58\u4E14\u5B58\u5728\u672C\u6B21\u6838\u9500\u6570\u91CF>0\u7684\u884C")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u5904\u7406\u903B\u8F91"),
              createTextVNode("\uFF1A")
            ])
          ]),
          createVNode("p", null, "1. \u6821\u9A8C\u6838\u9500\u5355\u4E0B\u5B58\u5728\u6838\u9500\u884C\u6570\u636E\u4E14\u5B58\u5728\u672C\u6B21\u6838\u9500\u6570\u91CF>0\u7684\u8BB0\u5F55"),
          createVNode("p", null, "2. \u6309isHome\u9009\u62E9\u5DE5\u4F5C\u6D41\u7F16\u7801(\u5DE5\u7A0BPROJECT_XMZSXHX_AW/\u5BB6\u88C5PROJECT_JZXMZSXHX_AW)"),
          createVNode("p", null, "3. \u542F\u52A8\u5DE5\u4F5C\u6D41\u5B9E\u4F8B\uFF0C\u66F4\u65B0hzInstanceId\u548ChzApproveStatus=RUN"),
          createVNode("h4", null, "\u6309\u94AE3\uFF1A\u53D6\u6D88\u6838\u9500\uFF08\u8BE6\u60C5\u9875\uFF09"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u5B58\u5728\u6709\u6548\u6838\u9500\u660E\u7EC6")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u5904\u7406\u903B\u8F91"),
              createTextVNode("\uFF1A")
            ])
          ]),
          createVNode("p", null, "1. \u6821\u9A8CactionType\u975E\u7A7A\u4E14\u57285\u79CD\u5408\u6CD5\u503C\u8303\u56F4\u5185(invoice/invoiceDetail/invLine/veriferDetail/obsInvoice)"),
          createVNode("p", null, "2. \u6821\u9A8CidList\u975E\u7A7A"),
          createVNode("p", null, "3. \u67E5\u8BE2\u53D7\u5F71\u54CD\u7684\u6838\u9500\u660E\u7EC6\uFF0C\u66F4\u65B0\u6709\u6548\u72B6\u6001\u4E3Acanceled\uFF0C\u8BB0\u5F55\u53D6\u6D88\u64CD\u4F5C\u4EBA\u548C\u65F6\u95F4"),
          createVNode("p", null, "4. \u82E5\u53D7\u5F71\u54CD\u6838\u9500\u5355\u5904\u4E8E\u5BA1\u6279\u4E2D\uFF0C\u4E2D\u65AD\u5BA1\u6279\u91CD\u7F6E\u4E3A\u65B0\u5EFA"),
          createVNode("p", null, "5. \u66F4\u65B0\u51FA\u5E93\u5355\u884C\uFF1A\u53EF\u6838\u9500\u6570\u91CF\u56DE\u52A0\uFF0C\u5DF2\u6838\u9500\u6570\u91CF\u51CF\u5C11"),
          createVNode("p", null, "6. \u4F5C\u5E9F\u53D1\u7968\u65F6\u66F4\u65B0\u53D1\u7968\u4E3B\u8981\u4FE1\u606F\u72B6\u6001\u4E3Aobsolete")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, { title: "\u4FDD\u5B58\u6821\u9A8C" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h4${_scopeId}>\u6821\u9A8C1\uFF1A\u672C\u6B21\u6838\u9500\u6570\u91CF\u4E0D\u53EF\u8D85\u8FC7\u5269\u4F59\u53EF\u6838\u9500\u6570\u91CF \u2014\u2014 \u9632\u6B62\u8D85\u989D\u6838\u9500</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u8BE6\u7EC6\u903B\u8F91</strong>\uFF1A\u6BCF\u884C\u7684\u672C\u6B21\u6838\u9500\u6570\u91CF(THIS_VERIFER_NUMBER)\u4E0D\u53EF\u5927\u4E8E\u5269\u4F59\u53EF\u6838\u9500\u6570\u91CF(SURPLUS_CAN_VERIFER_NUMBER)\uFF0C\u5C0F\u6570\u4F4D\u22643</li><li${_scopeId}><strong${_scopeId}>\u7CFB\u7EDF\u4F53\u73B0</strong>\uFF1A\u4FDD\u5B58\u65F6\u9010\u884C\u6821\u9A8C</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> INVBILLNO, ITEM_CODE, SURPLUS_CAN_VERIFER_NUMBER, THIS_VERIFER_NUMBER</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> EPM_INVOICE_TRUTH_LINE</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> INVOICE_TRUTH_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> #{invoiceTruthId}</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> THIS_VERIFER_NUMBER </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> SURPLUS_CAN_VERIFER_NUMBER;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u6821\u9A8C2\uFF1A\u53D1\u8D27\u65E5\u671F\u548C\u4EA7\u54C1\u7F16\u7801\u6821\u9A8C \u2014\u2014 \u786E\u4FDD\u6838\u9500\u884C\u4E0E\u51FA\u5E93\u5355\u884C\u5339\u914D</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u8BE6\u7EC6\u903B\u8F91</strong>\uFF1A\u6821\u9A8C\u6838\u9500\u884C\u7684\u53D1\u8D27\u65E5\u671F\u548C\u4EA7\u54C1\u7F16\u7801\u4E0E\u51FA\u5E93\u5355\u884C\u4E00\u81F4</li><li${_scopeId}><strong${_scopeId}>\u7CFB\u7EDF\u4F53\u73B0</strong>\uFF1AcheckDateAndItemCode\u65B9\u6CD5\u6821\u9A8C</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> l.INVBILLNO, l.DATE_INVBILL, l.ITEM_CODE, iobl.INV_OUT_BILL_LINE_ID</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> EPM_INVOICE_TRUTH_LINE l</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>JOIN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> INV_OUT_BILL_LINE iobl </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ON</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> l.INV_OUT_BILL_LINE_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> iobl.INV_OUT_BILL_LINE_ID</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> l.INVOICE_TRUTH_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> #{invoiceTruthId};</span></span>
<span class="line"${_scopeId}></span></code></pre></div>`);
      } else {
        return [
          createVNode("h4", null, "\u6821\u9A8C1\uFF1A\u672C\u6B21\u6838\u9500\u6570\u91CF\u4E0D\u53EF\u8D85\u8FC7\u5269\u4F59\u53EF\u6838\u9500\u6570\u91CF \u2014\u2014 \u9632\u6B62\u8D85\u989D\u6838\u9500"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u8BE6\u7EC6\u903B\u8F91"),
              createTextVNode("\uFF1A\u6BCF\u884C\u7684\u672C\u6B21\u6838\u9500\u6570\u91CF(THIS_VERIFER_NUMBER)\u4E0D\u53EF\u5927\u4E8E\u5269\u4F59\u53EF\u6838\u9500\u6570\u91CF(SURPLUS_CAN_VERIFER_NUMBER)\uFF0C\u5C0F\u6570\u4F4D\u22643")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u7CFB\u7EDF\u4F53\u73B0"),
              createTextVNode("\uFF1A\u4FDD\u5B58\u65F6\u9010\u884C\u6821\u9A8C")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " INVBILLNO, ITEM_CODE, SURPLUS_CAN_VERIFER_NUMBER, THIS_VERIFER_NUMBER")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " EPM_INVOICE_TRUTH_LINE")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " INVOICE_TRUTH_ID "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " #{invoiceTruthId}")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " THIS_VERIFER_NUMBER "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " SURPLUS_CAN_VERIFER_NUMBER;")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u6821\u9A8C2\uFF1A\u53D1\u8D27\u65E5\u671F\u548C\u4EA7\u54C1\u7F16\u7801\u6821\u9A8C \u2014\u2014 \u786E\u4FDD\u6838\u9500\u884C\u4E0E\u51FA\u5E93\u5355\u884C\u5339\u914D"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u8BE6\u7EC6\u903B\u8F91"),
              createTextVNode("\uFF1A\u6821\u9A8C\u6838\u9500\u884C\u7684\u53D1\u8D27\u65E5\u671F\u548C\u4EA7\u54C1\u7F16\u7801\u4E0E\u51FA\u5E93\u5355\u884C\u4E00\u81F4")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u7CFB\u7EDF\u4F53\u73B0"),
              createTextVNode("\uFF1AcheckDateAndItemCode\u65B9\u6CD5\u6821\u9A8C")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " l.INVBILLNO, l.DATE_INVBILL, l.ITEM_CODE, iobl.INV_OUT_BILL_LINE_ID")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " EPM_INVOICE_TRUTH_LINE l")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "JOIN"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " INV_OUT_BILL_LINE iobl "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ON"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " l.INV_OUT_BILL_LINE_ID "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " iobl.INV_OUT_BILL_LINE_ID")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " l.INVOICE_TRUTH_ID "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " #{invoiceTruthId};")
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
        _push2(`<h4${_scopeId}>\u6821\u9A8C1\uFF1A\u6838\u9500\u5355\u5FC5\u987B\u5B58\u5728\u6709\u6548\u660E\u7EC6\u884C \u2014\u2014 \u786E\u4FDD\u6709\u6838\u9500\u6570\u636E\u53EF\u63D0\u4EA4</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u8BE6\u7EC6\u903B\u8F91</strong>\uFF1A\u68C0\u67E5\u6838\u9500\u5355\u4E0B\u662F\u5426\u5B58\u5728\u6838\u9500\u884C\u6570\u636E\u4E14\u5B58\u5728\u672C\u6B21\u6838\u9500\u6570\u91CF&gt;0\u7684\u8BB0\u5F55</li><li${_scopeId}><strong${_scopeId}>\u7CFB\u7EDF\u4F53\u73B0</strong>\uFF1A\u63D0\u4EA4\u524D\u67E5\u8BE2EPM_INVOICE_TRUTH_LINE\uFF0C\u65E0\u6570\u636E\u6216\u65E0\u672C\u6B21\u6838\u9500\u6570\u91CF&gt;0\u7684\u884C\u5219\u62A5\u9519</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}>COUNT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>*</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> EPM_INVOICE_TRUTH_LINE</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> INVOICE_TRUTH_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> #{invoiceTruthId}</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> THIS_VERIFER_NUMBER </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>0</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div>`);
      } else {
        return [
          createVNode("h4", null, "\u6821\u9A8C1\uFF1A\u6838\u9500\u5355\u5FC5\u987B\u5B58\u5728\u6709\u6548\u660E\u7EC6\u884C \u2014\u2014 \u786E\u4FDD\u6709\u6838\u9500\u6570\u636E\u53EF\u63D0\u4EA4"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u8BE6\u7EC6\u903B\u8F91"),
              createTextVNode("\uFF1A\u68C0\u67E5\u6838\u9500\u5355\u4E0B\u662F\u5426\u5B58\u5728\u6838\u9500\u884C\u6570\u636E\u4E14\u5B58\u5728\u672C\u6B21\u6838\u9500\u6570\u91CF>0\u7684\u8BB0\u5F55")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u7CFB\u7EDF\u4F53\u73B0"),
              createTextVNode("\uFF1A\u63D0\u4EA4\u524D\u67E5\u8BE2EPM_INVOICE_TRUTH_LINE\uFF0C\u65E0\u6570\u636E\u6216\u65E0\u672C\u6B21\u6838\u9500\u6570\u91CF>0\u7684\u884C\u5219\u62A5\u9519")
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
                  createVNode("span", { style: { "color": "#82AAFF" } }, "COUNT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "("),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "*"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " EPM_INVOICE_TRUTH_LINE")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " INVOICE_TRUTH_ID "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " #{invoiceTruthId}")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " THIS_VERIFER_NUMBER "),
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
  _push(ssrRenderComponent(_component_KbCard, { title: "\u72B6\u6001\u673A" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="language-text"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>text</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>[\u65B0\u5EFAstat=1] \u2500\u2500\u63D0\u4EA4\u2500\u2500&gt; [\u5BA1\u6279\u4E2Dstat=3] \u2500\u2500\u5BA1\u6279\u901A\u8FC7\u2500\u2500&gt; [\u5DF2\u5BA1\u6279stat=5]</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>                         \u2502</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>                         \u2514\u2500\u2500\u5BA1\u6279\u9A73\u56DE\u2500\u2500&gt; [\u5DF2\u4E2D\u65AD]</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>[\u4EFB\u610F\u72B6\u6001] \u2500\u2500\u7EC8\u6B62\u2500\u2500&gt; [\u5DF2\u7EC8\u6B62]</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>[\u5DF2\u7EC8\u6B62] \u2500\u2500\u64A4\u56DE\u7EC8\u6B62\u2500\u2500&gt; [\u539F\u72B6\u6001]</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>[\u5BA1\u6279\u4E2D] \u2500\u2500\u53D6\u6D88\u6838\u9500\u2500\u2500&gt; [\u65B0\u5EFAstat=1] (\u4E2D\u65AD\u5BA1\u6279)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}></span></span></code></pre></div><table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u72B6\u6001\u503C</th><th${_scopeId}>\u72B6\u6001\u540D\u79F0</th><th${_scopeId}>\u53EF\u6267\u884C\u64CD\u4F5C</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>1</td><td${_scopeId}>\u65B0\u5EFA</td><td${_scopeId}>\u4FDD\u5B58\u3001\u63D0\u4EA4\u3001\u5220\u9664\u3001\u7EC8\u6B62\u3001\u53D6\u6D88\u6838\u9500</td></tr><tr${_scopeId}><td${_scopeId}>3</td><td${_scopeId}>\u5BA1\u6279\u4E2D</td><td${_scopeId}>\u7EC8\u6B62\u3001\u53D6\u6D88\u6838\u9500(\u4E2D\u65AD\u5BA1\u6279)</td></tr><tr${_scopeId}><td${_scopeId}>5</td><td${_scopeId}>\u5BA1\u6279\u901A\u8FC7</td><td${_scopeId}>\u7EC8\u6B62\u3001\u53D6\u6D88\u6838\u9500</td></tr><tr${_scopeId}><td${_scopeId}>INTERRUPT</td><td${_scopeId}>\u5BA1\u6279\u9A73\u56DE</td><td${_scopeId}>\u7EC8\u6B62\u3001\u53D6\u6D88\u6838\u9500</td></tr><tr${_scopeId}><td${_scopeId}>TERMINATED</td><td${_scopeId}>\u5DF2\u7EC8\u6B62</td><td${_scopeId}>\u64A4\u56DE\u7EC8\u6B62</td></tr></tbody></table>`);
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "[\u65B0\u5EFAstat=1] \u2500\u2500\u63D0\u4EA4\u2500\u2500> [\u5BA1\u6279\u4E2Dstat=3] \u2500\u2500\u5BA1\u6279\u901A\u8FC7\u2500\u2500> [\u5DF2\u5BA1\u6279stat=5]")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "                         \u2502")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "                         \u2514\u2500\u2500\u5BA1\u6279\u9A73\u56DE\u2500\u2500> [\u5DF2\u4E2D\u65AD]")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "[\u4EFB\u610F\u72B6\u6001] \u2500\u2500\u7EC8\u6B62\u2500\u2500> [\u5DF2\u7EC8\u6B62]")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "[\u5DF2\u7EC8\u6B62] \u2500\u2500\u64A4\u56DE\u7EC8\u6B62\u2500\u2500> [\u539F\u72B6\u6001]")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "[\u5BA1\u6279\u4E2D] \u2500\u2500\u53D6\u6D88\u6838\u9500\u2500\u2500> [\u65B0\u5EFAstat=1] (\u4E2D\u65AD\u5BA1\u6279)")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } })
                ])
              ])
            ])
          ]),
          createVNode("table", { class: "kb-field-tbl" }, [
            createVNode("thead", null, [
              createVNode("tr", null, [
                createVNode("th", null, "\u72B6\u6001\u503C"),
                createVNode("th", null, "\u72B6\u6001\u540D\u79F0"),
                createVNode("th", null, "\u53EF\u6267\u884C\u64CD\u4F5C")
              ])
            ]),
            createVNode("tbody", null, [
              createVNode("tr", null, [
                createVNode("td", null, "1"),
                createVNode("td", null, "\u65B0\u5EFA"),
                createVNode("td", null, "\u4FDD\u5B58\u3001\u63D0\u4EA4\u3001\u5220\u9664\u3001\u7EC8\u6B62\u3001\u53D6\u6D88\u6838\u9500")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "3"),
                createVNode("td", null, "\u5BA1\u6279\u4E2D"),
                createVNode("td", null, "\u7EC8\u6B62\u3001\u53D6\u6D88\u6838\u9500(\u4E2D\u65AD\u5BA1\u6279)")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "5"),
                createVNode("td", null, "\u5BA1\u6279\u901A\u8FC7"),
                createVNode("td", null, "\u7EC8\u6B62\u3001\u53D6\u6D88\u6838\u9500")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "INTERRUPT"),
                createVNode("td", null, "\u5BA1\u6279\u9A73\u56DE"),
                createVNode("td", null, "\u7EC8\u6B62\u3001\u53D6\u6D88\u6838\u9500")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "TERMINATED"),
                createVNode("td", null, "\u5DF2\u7EC8\u6B62"),
                createVNode("td", null, "\u64A4\u56DE\u7EC8\u6B62")
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
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u4E0A\u6E38\u6A21\u5757</th><th${_scopeId}>\u4F9D\u8D56\u7C7B\u578B</th><th${_scopeId}>\u4F9D\u8D56\u8BF4\u660E</th><th${_scopeId}>\u4F9D\u8D56\u6210\u7ACB\u6761\u4EF6</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>EPM_UPLOAD_INVOICE_VERIFER(\u6838\u9500\u53D1\u7968\u4E0A\u4F20)</td><td${_scopeId}>\u6570\u636E\u5173\u8054</td><td${_scopeId}>\u8BFB\u53D6\u5DF2\u4E0A\u4F20\u7684\u6838\u9500\u53D1\u7968\u4FE1\u606F\uFF0C\u5173\u8054\u53D1\u7968\u53F7\u7801\u3001\u4EE3\u7801\u3001\u91D1\u989D</td><td${_scopeId}>\u53D1\u7968\u4E0A\u4F20\u5355\u5DF2\u5BA1\u6279\u901A\u8FC7(effectStatus=valid)</td></tr><tr${_scopeId}><td${_scopeId}>EPM_INVOICE_TRUTH_LINE(\u771F\u5B9E\u6027\u6838\u9500\u884C)</td><td${_scopeId}>\u6570\u636E\u5173\u8054</td><td${_scopeId}>\u8BFB\u53D6\u6838\u9500\u660E\u7EC6\u884C\uFF0C\u5173\u8054\u4EA7\u54C1\u548C\u670D\u52A1</td><td${_scopeId}>\u6838\u9500\u884C\u5DF2\u4FDD\u5B58</td></tr><tr${_scopeId}><td${_scopeId}>INV_OUT_BILL_LINE(\u51FA\u5E93\u5355\u884C)</td><td${_scopeId}>\u6570\u636E\u5173\u8054</td><td${_scopeId}>\u8BFB\u53D6\u51FA\u5E93\u5355\u884C\u53EF\u6838\u9500\u6570\u91CF\u3001\u53D1\u8D27\u65E5\u671F\u3001\u4EA7\u54C1\u4FE1\u606F</td><td${_scopeId}>\u51FA\u5E93\u5355\u884C\u5B58\u5728\u4E14\u6709\u53EF\u6838\u9500\u6570\u91CF</td></tr><tr${_scopeId}><td${_scopeId}>EPM_DISCOUNT_POLICY(\u6298\u6263\u653F\u7B56)</td><td${_scopeId}>\u6570\u636E\u5173\u8054</td><td${_scopeId}>\u8BFB\u53D6\u6298\u6263\u653F\u7B56\u4FE1\u606F</td><td${_scopeId}>\u6298\u6263\u653F\u7B56\u5DF2\u5B58\u5728</td></tr><tr${_scopeId}><td${_scopeId}>HPFM_CODE_RULE(\u7F16\u7801\u89C4\u5219)</td><td${_scopeId}>\u7F16\u7801\u89C4\u5219</td><td${_scopeId}>\u751F\u6210\u6838\u9500\u5355\u53F7AE.INVOICE_AUTHENTICITY_VERIFI/AE.JZ_INVOICE_AUTHENTICITY_VER</td><td${_scopeId}>\u7F16\u7801\u89C4\u5219\u5DF2\u914D\u7F6E</td></tr><tr${_scopeId}><td${_scopeId}>H0 Workflow(\u5DE5\u4F5C\u6D41)</td><td${_scopeId}>\u5DE5\u4F5C\u6D41</td><td${_scopeId}>\u89E6\u53D1\u5DE5\u4F5C\u6D41PROJECT_XMZSXHX_AW/PROJECT_JZXMZSXHX_AW</td><td${_scopeId}>\u5DE5\u4F5C\u6D41\u5DF2\u90E8\u7F72</td></tr></tbody></table>`);
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
                createVNode("td", null, "EPM_UPLOAD_INVOICE_VERIFER(\u6838\u9500\u53D1\u7968\u4E0A\u4F20)"),
                createVNode("td", null, "\u6570\u636E\u5173\u8054"),
                createVNode("td", null, "\u8BFB\u53D6\u5DF2\u4E0A\u4F20\u7684\u6838\u9500\u53D1\u7968\u4FE1\u606F\uFF0C\u5173\u8054\u53D1\u7968\u53F7\u7801\u3001\u4EE3\u7801\u3001\u91D1\u989D"),
                createVNode("td", null, "\u53D1\u7968\u4E0A\u4F20\u5355\u5DF2\u5BA1\u6279\u901A\u8FC7(effectStatus=valid)")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "EPM_INVOICE_TRUTH_LINE(\u771F\u5B9E\u6027\u6838\u9500\u884C)"),
                createVNode("td", null, "\u6570\u636E\u5173\u8054"),
                createVNode("td", null, "\u8BFB\u53D6\u6838\u9500\u660E\u7EC6\u884C\uFF0C\u5173\u8054\u4EA7\u54C1\u548C\u670D\u52A1"),
                createVNode("td", null, "\u6838\u9500\u884C\u5DF2\u4FDD\u5B58")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "INV_OUT_BILL_LINE(\u51FA\u5E93\u5355\u884C)"),
                createVNode("td", null, "\u6570\u636E\u5173\u8054"),
                createVNode("td", null, "\u8BFB\u53D6\u51FA\u5E93\u5355\u884C\u53EF\u6838\u9500\u6570\u91CF\u3001\u53D1\u8D27\u65E5\u671F\u3001\u4EA7\u54C1\u4FE1\u606F"),
                createVNode("td", null, "\u51FA\u5E93\u5355\u884C\u5B58\u5728\u4E14\u6709\u53EF\u6838\u9500\u6570\u91CF")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "EPM_DISCOUNT_POLICY(\u6298\u6263\u653F\u7B56)"),
                createVNode("td", null, "\u6570\u636E\u5173\u8054"),
                createVNode("td", null, "\u8BFB\u53D6\u6298\u6263\u653F\u7B56\u4FE1\u606F"),
                createVNode("td", null, "\u6298\u6263\u653F\u7B56\u5DF2\u5B58\u5728")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "HPFM_CODE_RULE(\u7F16\u7801\u89C4\u5219)"),
                createVNode("td", null, "\u7F16\u7801\u89C4\u5219"),
                createVNode("td", null, "\u751F\u6210\u6838\u9500\u5355\u53F7AE.INVOICE_AUTHENTICITY_VERIFI/AE.JZ_INVOICE_AUTHENTICITY_VER"),
                createVNode("td", null, "\u7F16\u7801\u89C4\u5219\u5DF2\u914D\u7F6E")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "H0 Workflow(\u5DE5\u4F5C\u6D41)"),
                createVNode("td", null, "\u5DE5\u4F5C\u6D41"),
                createVNode("td", null, "\u89E6\u53D1\u5DE5\u4F5C\u6D41PROJECT_XMZSXHX_AW/PROJECT_JZXMZSXHX_AW"),
                createVNode("td", null, "\u5DE5\u4F5C\u6D41\u5DF2\u90E8\u7F72")
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
        _push2(`<ul${_scopeId}><li${_scopeId}><strong${_scopeId}>EPM_VERIFER_INVOICE_DETAILS(\u6838\u9500\u53D1\u7968\u660E\u7EC6)</strong>\uFF1A\u65B0\u589E\u6838\u9500\u8BB0\u5F55\uFF0C\u66F4\u65B0\u751F\u6548\u72B6\u6001\u3001\u5269\u4F59\u53EF\u6838\u9500\u6570\u91CF</li><li${_scopeId}><strong${_scopeId}>EPM_INVOICE_TRUTH_LINE(\u771F\u5B9E\u6027\u6838\u9500\u884C)</strong>\uFF1A\u66F4\u65B0\u6838\u9500\u884C\u72B6\u6001\u548C\u5DF2\u6838\u9500\u6570\u91CF</li><li${_scopeId}><strong${_scopeId}>INV_OUT_BILL_LINE(\u51FA\u5E93\u5355\u884C)</strong>\uFF1A\u6838\u9500\u751F\u6548\u540E\u66F4\u65B0\u5DF2\u6838\u9500\u6570\u91CF\u548C\u53EF\u6838\u9500\u6570\u91CF</li><li${_scopeId}><strong${_scopeId}>INVOICE_TRUTH_CANCEL_RECORD(\u6838\u9500\u7EC8\u6B62\u8BB0\u5F55)</strong>\uFF1A\u53D6\u6D88\u6838\u9500\u65F6\u8BB0\u5F55\u7EC8\u6B62\u5386\u53F2</li><li${_scopeId}><strong${_scopeId}>\u8FD4\u5229\u8BA1\u7B97</strong>\uFF1A\u5BA1\u6279\u901A\u8FC7\u540E\u82E5\u51FA\u5E93\u5355\u884C\u6E20\u9053\u4E0A\u8C03\u4EF7&gt;0\uFF0C\u89E6\u53D1\u4F9B\u5E94\u5546\u8FD4\u5229\u8BA1\u7B97</li><li${_scopeId}><strong${_scopeId}>\u53D1\u7968\u7BA1\u7406</strong>\uFF1A\u4F5C\u5E9F\u53D1\u7968\u65F6\u66F4\u65B0\u53D1\u7968\u4E3B\u8981\u4FE1\u606F\u6709\u6548\u72B6\u6001\u4E3Aobsolete</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "EPM_VERIFER_INVOICE_DETAILS(\u6838\u9500\u53D1\u7968\u660E\u7EC6)"),
              createTextVNode("\uFF1A\u65B0\u589E\u6838\u9500\u8BB0\u5F55\uFF0C\u66F4\u65B0\u751F\u6548\u72B6\u6001\u3001\u5269\u4F59\u53EF\u6838\u9500\u6570\u91CF")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "EPM_INVOICE_TRUTH_LINE(\u771F\u5B9E\u6027\u6838\u9500\u884C)"),
              createTextVNode("\uFF1A\u66F4\u65B0\u6838\u9500\u884C\u72B6\u6001\u548C\u5DF2\u6838\u9500\u6570\u91CF")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "INV_OUT_BILL_LINE(\u51FA\u5E93\u5355\u884C)"),
              createTextVNode("\uFF1A\u6838\u9500\u751F\u6548\u540E\u66F4\u65B0\u5DF2\u6838\u9500\u6570\u91CF\u548C\u53EF\u6838\u9500\u6570\u91CF")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "INVOICE_TRUTH_CANCEL_RECORD(\u6838\u9500\u7EC8\u6B62\u8BB0\u5F55)"),
              createTextVNode("\uFF1A\u53D6\u6D88\u6838\u9500\u65F6\u8BB0\u5F55\u7EC8\u6B62\u5386\u53F2")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u8FD4\u5229\u8BA1\u7B97"),
              createTextVNode("\uFF1A\u5BA1\u6279\u901A\u8FC7\u540E\u82E5\u51FA\u5E93\u5355\u884C\u6E20\u9053\u4E0A\u8C03\u4EF7>0\uFF0C\u89E6\u53D1\u4F9B\u5E94\u5546\u8FD4\u5229\u8BA1\u7B97")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u53D1\u7968\u7BA1\u7406"),
              createTextVNode("\uFF1A\u4F5C\u5E9F\u53D1\u7968\u65F6\u66F4\u65B0\u53D1\u7968\u4E3B\u8981\u4FE1\u606F\u6709\u6548\u72B6\u6001\u4E3Aobsolete")
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, { title: "EPM_INVOICE_TRUTH_HEADER\uFF08\u771F\u5B9E\u6027\u6838\u9500\u5934\u8868\uFF09" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5B57\u6BB5\u540D</th><th${_scopeId}>\u7C7B\u578B</th><th${_scopeId}>\u91CA\u4E49</th><th${_scopeId}>\u5BF9\u5E94\u754C\u9762\u5B57\u6BB5</th><th${_scopeId}>\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>INVOICE_TRUTH_ID</td><td${_scopeId}>Long</td><td${_scopeId}>\u771F\u5B9E\u6027\u6838\u9500ID</td><td${_scopeId}>-</td><td${_scopeId}>\u81EA\u589E\u4E3B\u952E\uFF0C@Id @GeneratedValue</td></tr><tr${_scopeId}><td${_scopeId}>INVOICE_TRUTH_NO</td><td${_scopeId}>String</td><td${_scopeId}>\u771F\u5B9E\u6027\u6838\u9500\u5355\u53F7</td><td${_scopeId}>\u6838\u9500\u5355\u53F7</td><td${_scopeId}>\u6309\u7F16\u7801\u89C4\u5219AE.INVOICE_AUTHENTICITY_VERIFI(\u5DE5\u7A0B)/AE.JZ_INVOICE_AUTHENTICITY_VER(\u5BB6\u88C5)\u751F\u6210</td></tr><tr${_scopeId}><td${_scopeId}>PROJECT_ID</td><td${_scopeId}>BigDecimal</td><td${_scopeId}>\u9879\u76EEID</td><td${_scopeId}>-</td><td${_scopeId}>\u5173\u8054EPM_PROJECT</td></tr><tr${_scopeId}><td${_scopeId}>PROJECT_CODE</td><td${_scopeId}>String</td><td${_scopeId}>\u9879\u76EE\u7F16\u7801</td><td${_scopeId}>\u9879\u76EE\u7F16\u7801</td><td${_scopeId}>\u5197\u4F59\u81EAEPM_PROJECT</td></tr><tr${_scopeId}><td${_scopeId}>PROJECT_NAME</td><td${_scopeId}>String</td><td${_scopeId}>\u9879\u76EE\u540D\u79F0</td><td${_scopeId}>\u9879\u76EE\u540D\u79F0</td><td${_scopeId}>\u5197\u4F59\u81EAEPM_PROJECT</td></tr><tr${_scopeId}><td${_scopeId}>CONTRACT_ID</td><td${_scopeId}>BigDecimal</td><td${_scopeId}>\u5408\u540CID</td><td${_scopeId}>-</td><td${_scopeId}>\u5173\u8054EPM_PROJECT_CONTRACT</td></tr><tr${_scopeId}><td${_scopeId}>CONTRACT_CODE</td><td${_scopeId}>String</td><td${_scopeId}>\u5408\u540C\u7F16\u7801</td><td${_scopeId}>\u5408\u540C\u7F16\u7801</td><td${_scopeId}>\u5197\u4F59\u81EAEPM_PROJECT_CONTRACT</td></tr><tr${_scopeId}><td${_scopeId}>CONTRACT_NAME</td><td${_scopeId}>String</td><td${_scopeId}>\u5408\u540C\u540D\u79F0</td><td${_scopeId}>\u5408\u540C\u540D\u79F0</td><td${_scopeId}>\u5197\u4F59\u81EAEPM_PROJECT_CONTRACT</td></tr><tr${_scopeId}><td${_scopeId}>CUSTOMER_ID</td><td${_scopeId}>BigDecimal</td><td${_scopeId}>\u7ECF\u9500\u5546ID</td><td${_scopeId}>-</td><td${_scopeId}>\u5173\u8054CUSTOMER</td></tr><tr${_scopeId}><td${_scopeId}>CUSTOMER_CODE</td><td${_scopeId}>String</td><td${_scopeId}>\u7ECF\u9500\u5546\u7F16\u7801</td><td${_scopeId}>\u7ECF\u9500\u5546\u7F16\u7801</td><td${_scopeId}>\u5197\u4F59\u81EACUSTOMER</td></tr><tr${_scopeId}><td${_scopeId}>CUSTOMER_NAME</td><td${_scopeId}>String</td><td${_scopeId}>\u7ECF\u9500\u5546\u540D\u79F0</td><td${_scopeId}>\u7ECF\u9500\u5546\u540D\u79F0</td><td${_scopeId}>\u5197\u4F59\u81EACUSTOMER</td></tr><tr${_scopeId}><td${_scopeId}>TRADING_COMPANY_ID</td><td${_scopeId}>BigDecimal</td><td${_scopeId}>\u4EA4\u6613\u516C\u53F8ID</td><td${_scopeId}>-</td><td${_scopeId}>\u5173\u8054\u4EA4\u6613\u516C\u53F8</td></tr><tr${_scopeId}><td${_scopeId}>TRADING_COMPANY_CODE</td><td${_scopeId}>String</td><td${_scopeId}>\u4EA4\u6613\u516C\u53F8\u7F16\u7801</td><td${_scopeId}>-</td><td${_scopeId}>\u5197\u4F59\u81EA\u4EA4\u6613\u516C\u53F8</td></tr><tr${_scopeId}><td${_scopeId}>TRADING_COMPANY_NAME</td><td${_scopeId}>String</td><td${_scopeId}>\u4EA4\u6613\u516C\u53F8\u540D\u79F0</td><td${_scopeId}>\u4EA4\u6613\u516C\u53F8</td><td${_scopeId}>\u5197\u4F59\u81EA\u4EA4\u6613\u516C\u53F8</td></tr><tr${_scopeId}><td${_scopeId}>BILLING_UNIT_ID</td><td${_scopeId}>BigDecimal</td><td${_scopeId}>\u5F00\u7968\u5355\u4F4DID</td><td${_scopeId}>-</td><td${_scopeId}>\u5173\u8054CUSTOMER</td></tr><tr${_scopeId}><td${_scopeId}>BILLING_UNIT_CODE</td><td${_scopeId}>String</td><td${_scopeId}>\u5F00\u7968\u5355\u4F4D\u7F16\u7801</td><td${_scopeId}>-</td><td${_scopeId}>\u5197\u4F59\u81EACUSTOMER</td></tr><tr${_scopeId}><td${_scopeId}>BILLING_UNIT_NAME</td><td${_scopeId}>String</td><td${_scopeId}>\u5F00\u7968\u5355\u4F4D\u540D\u79F0</td><td${_scopeId}>-</td><td${_scopeId}>\u5197\u4F59\u81EACUSTOMER</td></tr><tr${_scopeId}><td${_scopeId}>CONTRACT_UNIT</td><td${_scopeId}>String</td><td${_scopeId}>\u5DE5\u7A0B\u7B7E\u7EA6\u5355\u4F4D</td><td${_scopeId}>-</td><td${_scopeId}>-</td></tr><tr${_scopeId}><td${_scopeId}>IS_HOME</td><td${_scopeId}>Integer</td><td${_scopeId}>\u662F\u5426\u5BB6\u88C5</td><td${_scopeId}>\u662F\u5426\u5BB6\u88C5</td><td${_scopeId}>1-\u5DE5\u7A0B/2-\u5BB6\u88C5\uFF0CNotNull</td></tr><tr${_scopeId}><td${_scopeId}>VERIFER_TYPE</td><td${_scopeId}>BigDecimal</td><td${_scopeId}>\u6838\u9500\u7C7B\u578B</td><td${_scopeId}>\u6838\u9500\u7C7B\u578B</td><td${_scopeId}>\u6765\u6E90\u4E8E\u6838\u9500\u53D1\u7968\u4E0A\u4F20\u5355</td></tr><tr${_scopeId}><td${_scopeId}>INVOICE_VERIFER_ID</td><td${_scopeId}>BigDecimal</td><td${_scopeId}>\u6838\u9500\u53D1\u7968\u4E0A\u4F20ID</td><td${_scopeId}>-</td><td${_scopeId}>\u5173\u8054EPM_UPLOAD_INVOICE_VERIFER</td></tr><tr${_scopeId}><td${_scopeId}>INVOICE_VERIFER_NO</td><td${_scopeId}>String</td><td${_scopeId}>\u6838\u9500\u53D1\u7968\u4E0A\u4F20\u5355\u53F7</td><td${_scopeId}>\u6838\u9500\u53D1\u7968\u4E0A\u4F20\u5355\u53F7</td><td${_scopeId}>\u6765\u6E90\u4E8E\u6838\u9500\u53D1\u7968\u4E0A\u4F20\u5355</td></tr><tr${_scopeId}><td${_scopeId}>DISCOUNT_POLICY_ID</td><td${_scopeId}>BigDecimal</td><td${_scopeId}>\u6298\u6263\u653F\u7B56ID</td><td${_scopeId}>-</td><td${_scopeId}>\u5173\u8054EPM_DISCOUNT_POLICY</td></tr><tr${_scopeId}><td${_scopeId}>DISCOUNT_POLICY_CODE</td><td${_scopeId}>String</td><td${_scopeId}>\u6298\u6263\u653F\u7B56\u7F16\u7801</td><td${_scopeId}>-</td><td${_scopeId}>\u5197\u4F59\u81EA\u6298\u6263\u653F\u7B56</td></tr><tr${_scopeId}><td${_scopeId}>DISCOUNT_POLICY_NAME</td><td${_scopeId}>String</td><td${_scopeId}>\u6298\u6263\u653F\u7B56\u540D\u79F0</td><td${_scopeId}>\u6298\u6263\u653F\u7B56</td><td${_scopeId}>\u5197\u4F59\u81EA\u6298\u6263\u653F\u7B56</td></tr><tr${_scopeId}><td${_scopeId}>STAT</td><td${_scopeId}>Long</td><td${_scopeId}>\u5355\u636E\u72B6\u6001(\u5DF2\u5F03\u7528)</td><td${_scopeId}>-</td><td${_scopeId}>\u4F7F\u7528HZ_APPROVE_STATUS\u66FF\u4EE3\uFF0CNotNull</td></tr><tr${_scopeId}><td${_scopeId}>WFID</td><td${_scopeId}>Long</td><td${_scopeId}>\u6D41\u7A0BID</td><td${_scopeId}>-</td><td${_scopeId}>\u65E7\u5B57\u6BB5\uFF0CNotNull</td></tr><tr${_scopeId}><td${_scopeId}>WFFLAG</td><td${_scopeId}>Long</td><td${_scopeId}>\u6D41\u7A0B\u6807\u8BC6</td><td${_scopeId}>-</td><td${_scopeId}>\u65E7\u5B57\u6BB5\uFF0CNotNull</td></tr><tr${_scopeId}><td${_scopeId}>HZ_APPROVE_STATUS</td><td${_scopeId}>String</td><td${_scopeId}>H0\u6D41\u7A0B\u5BA1\u6279\u72B6\u6001</td><td${_scopeId}>\u5BA1\u6279\u72B6\u6001</td><td${_scopeId}>NEW/RUN/APPROVED/INTERRUPT\uFF0CNotBlank</td></tr><tr${_scopeId}><td${_scopeId}>HZ_INSTANCE_ID</td><td${_scopeId}>Long</td><td${_scopeId}>H0\u6D41\u7A0B\u5B9E\u4F8BID</td><td${_scopeId}>-</td><td${_scopeId}>\u5DE5\u4F5C\u6D41\u8FD4\u56DE</td></tr><tr${_scopeId}><td${_scopeId}>AUDIT_STAT</td><td${_scopeId}>String</td><td${_scopeId}>\u5BA1\u6838\u72B6\u6001</td><td${_scopeId}>-</td><td${_scopeId}>\u5BA1\u6838\u72B6\u6001</td></tr><tr${_scopeId}><td${_scopeId}>VERIFY_STAT</td><td${_scopeId}>String</td><td${_scopeId}>\u6838\u9500\u7C7B\u578B</td><td${_scopeId}>-</td><td${_scopeId}>\u5BF9\u5E94\u5B57\u5178truth_header.verify_stat</td></tr><tr${_scopeId}><td${_scopeId}>NOTE</td><td${_scopeId}>String</td><td${_scopeId}>\u5907\u6CE8</td><td${_scopeId}>-</td><td${_scopeId}>\u7528\u6237\u8F93\u5165</td></tr><tr${_scopeId}><td${_scopeId}>ORGANIZATION_ID</td><td${_scopeId}>BigDecimal</td><td${_scopeId}>\u7EC4\u7EC7ID</td><td${_scopeId}>-</td><td${_scopeId}>\u5F53\u524D\u7528\u6237\u4E8B\u4E1A\u90E8</td></tr><tr${_scopeId}><td${_scopeId}>CREATE_TIME</td><td${_scopeId}>Date</td><td${_scopeId}>\u6838\u9500\u53D1\u8D77\u65E5\u671F</td><td${_scopeId}>\u521B\u5EFA\u65F6\u95F4</td><td${_scopeId}>\u7CFB\u7EDF\u81EA\u52A8\u8BB0\u5F55</td></tr><tr${_scopeId}><td${_scopeId}>CREATOR</td><td${_scopeId}>String</td><td${_scopeId}>\u521B\u5EFA\u4EBA</td><td${_scopeId}>-</td><td${_scopeId}>\u7CFB\u7EDF\u81EA\u52A8\u8BB0\u5F55</td></tr><tr${_scopeId}><td${_scopeId}>CREATOR_NAME</td><td${_scopeId}>String</td><td${_scopeId}>\u521B\u5EFA\u4EBA\u59D3\u540D</td><td${_scopeId}>\u521B\u5EFA\u4EBA</td><td${_scopeId}>\u7CFB\u7EDF\u81EA\u52A8\u8BB0\u5F55</td></tr></tbody></table><p${_scopeId}><strong${_scopeId}>\u67E5\u8BE2SQL</strong>\uFF1A</p><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>*</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> EPM_INVOICE_TRUTH_HEADER</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> ORGANIZATION_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> #{organizationId}</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> NVL(INVOICE_TRUTH_NO, </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>LIKE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>%</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>||</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> #{invoiceTruthNo} </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>||</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>%</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> NVL(PROJECT_CODE, </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>LIKE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>%</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>||</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> #{projectCode} </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>||</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>%</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ORDER BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> LAST_UPDATE_DATE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>DESC</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div>`);
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
                createVNode("td", null, "INVOICE_TRUTH_ID"),
                createVNode("td", null, "Long"),
                createVNode("td", null, "\u771F\u5B9E\u6027\u6838\u9500ID"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u81EA\u589E\u4E3B\u952E\uFF0C@Id @GeneratedValue")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "INVOICE_TRUTH_NO"),
                createVNode("td", null, "String"),
                createVNode("td", null, "\u771F\u5B9E\u6027\u6838\u9500\u5355\u53F7"),
                createVNode("td", null, "\u6838\u9500\u5355\u53F7"),
                createVNode("td", null, "\u6309\u7F16\u7801\u89C4\u5219AE.INVOICE_AUTHENTICITY_VERIFI(\u5DE5\u7A0B)/AE.JZ_INVOICE_AUTHENTICITY_VER(\u5BB6\u88C5)\u751F\u6210")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "PROJECT_ID"),
                createVNode("td", null, "BigDecimal"),
                createVNode("td", null, "\u9879\u76EEID"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u5173\u8054EPM_PROJECT")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "PROJECT_CODE"),
                createVNode("td", null, "String"),
                createVNode("td", null, "\u9879\u76EE\u7F16\u7801"),
                createVNode("td", null, "\u9879\u76EE\u7F16\u7801"),
                createVNode("td", null, "\u5197\u4F59\u81EAEPM_PROJECT")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "PROJECT_NAME"),
                createVNode("td", null, "String"),
                createVNode("td", null, "\u9879\u76EE\u540D\u79F0"),
                createVNode("td", null, "\u9879\u76EE\u540D\u79F0"),
                createVNode("td", null, "\u5197\u4F59\u81EAEPM_PROJECT")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "CONTRACT_ID"),
                createVNode("td", null, "BigDecimal"),
                createVNode("td", null, "\u5408\u540CID"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u5173\u8054EPM_PROJECT_CONTRACT")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "CONTRACT_CODE"),
                createVNode("td", null, "String"),
                createVNode("td", null, "\u5408\u540C\u7F16\u7801"),
                createVNode("td", null, "\u5408\u540C\u7F16\u7801"),
                createVNode("td", null, "\u5197\u4F59\u81EAEPM_PROJECT_CONTRACT")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "CONTRACT_NAME"),
                createVNode("td", null, "String"),
                createVNode("td", null, "\u5408\u540C\u540D\u79F0"),
                createVNode("td", null, "\u5408\u540C\u540D\u79F0"),
                createVNode("td", null, "\u5197\u4F59\u81EAEPM_PROJECT_CONTRACT")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "CUSTOMER_ID"),
                createVNode("td", null, "BigDecimal"),
                createVNode("td", null, "\u7ECF\u9500\u5546ID"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u5173\u8054CUSTOMER")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "CUSTOMER_CODE"),
                createVNode("td", null, "String"),
                createVNode("td", null, "\u7ECF\u9500\u5546\u7F16\u7801"),
                createVNode("td", null, "\u7ECF\u9500\u5546\u7F16\u7801"),
                createVNode("td", null, "\u5197\u4F59\u81EACUSTOMER")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "CUSTOMER_NAME"),
                createVNode("td", null, "String"),
                createVNode("td", null, "\u7ECF\u9500\u5546\u540D\u79F0"),
                createVNode("td", null, "\u7ECF\u9500\u5546\u540D\u79F0"),
                createVNode("td", null, "\u5197\u4F59\u81EACUSTOMER")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "TRADING_COMPANY_ID"),
                createVNode("td", null, "BigDecimal"),
                createVNode("td", null, "\u4EA4\u6613\u516C\u53F8ID"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u5173\u8054\u4EA4\u6613\u516C\u53F8")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "TRADING_COMPANY_CODE"),
                createVNode("td", null, "String"),
                createVNode("td", null, "\u4EA4\u6613\u516C\u53F8\u7F16\u7801"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u5197\u4F59\u81EA\u4EA4\u6613\u516C\u53F8")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "TRADING_COMPANY_NAME"),
                createVNode("td", null, "String"),
                createVNode("td", null, "\u4EA4\u6613\u516C\u53F8\u540D\u79F0"),
                createVNode("td", null, "\u4EA4\u6613\u516C\u53F8"),
                createVNode("td", null, "\u5197\u4F59\u81EA\u4EA4\u6613\u516C\u53F8")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "BILLING_UNIT_ID"),
                createVNode("td", null, "BigDecimal"),
                createVNode("td", null, "\u5F00\u7968\u5355\u4F4DID"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u5173\u8054CUSTOMER")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "BILLING_UNIT_CODE"),
                createVNode("td", null, "String"),
                createVNode("td", null, "\u5F00\u7968\u5355\u4F4D\u7F16\u7801"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u5197\u4F59\u81EACUSTOMER")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "BILLING_UNIT_NAME"),
                createVNode("td", null, "String"),
                createVNode("td", null, "\u5F00\u7968\u5355\u4F4D\u540D\u79F0"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u5197\u4F59\u81EACUSTOMER")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "CONTRACT_UNIT"),
                createVNode("td", null, "String"),
                createVNode("td", null, "\u5DE5\u7A0B\u7B7E\u7EA6\u5355\u4F4D"),
                createVNode("td", null, "-"),
                createVNode("td", null, "-")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "IS_HOME"),
                createVNode("td", null, "Integer"),
                createVNode("td", null, "\u662F\u5426\u5BB6\u88C5"),
                createVNode("td", null, "\u662F\u5426\u5BB6\u88C5"),
                createVNode("td", null, "1-\u5DE5\u7A0B/2-\u5BB6\u88C5\uFF0CNotNull")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "VERIFER_TYPE"),
                createVNode("td", null, "BigDecimal"),
                createVNode("td", null, "\u6838\u9500\u7C7B\u578B"),
                createVNode("td", null, "\u6838\u9500\u7C7B\u578B"),
                createVNode("td", null, "\u6765\u6E90\u4E8E\u6838\u9500\u53D1\u7968\u4E0A\u4F20\u5355")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "INVOICE_VERIFER_ID"),
                createVNode("td", null, "BigDecimal"),
                createVNode("td", null, "\u6838\u9500\u53D1\u7968\u4E0A\u4F20ID"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u5173\u8054EPM_UPLOAD_INVOICE_VERIFER")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "INVOICE_VERIFER_NO"),
                createVNode("td", null, "String"),
                createVNode("td", null, "\u6838\u9500\u53D1\u7968\u4E0A\u4F20\u5355\u53F7"),
                createVNode("td", null, "\u6838\u9500\u53D1\u7968\u4E0A\u4F20\u5355\u53F7"),
                createVNode("td", null, "\u6765\u6E90\u4E8E\u6838\u9500\u53D1\u7968\u4E0A\u4F20\u5355")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "DISCOUNT_POLICY_ID"),
                createVNode("td", null, "BigDecimal"),
                createVNode("td", null, "\u6298\u6263\u653F\u7B56ID"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u5173\u8054EPM_DISCOUNT_POLICY")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "DISCOUNT_POLICY_CODE"),
                createVNode("td", null, "String"),
                createVNode("td", null, "\u6298\u6263\u653F\u7B56\u7F16\u7801"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u5197\u4F59\u81EA\u6298\u6263\u653F\u7B56")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "DISCOUNT_POLICY_NAME"),
                createVNode("td", null, "String"),
                createVNode("td", null, "\u6298\u6263\u653F\u7B56\u540D\u79F0"),
                createVNode("td", null, "\u6298\u6263\u653F\u7B56"),
                createVNode("td", null, "\u5197\u4F59\u81EA\u6298\u6263\u653F\u7B56")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "STAT"),
                createVNode("td", null, "Long"),
                createVNode("td", null, "\u5355\u636E\u72B6\u6001(\u5DF2\u5F03\u7528)"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u4F7F\u7528HZ_APPROVE_STATUS\u66FF\u4EE3\uFF0CNotNull")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "WFID"),
                createVNode("td", null, "Long"),
                createVNode("td", null, "\u6D41\u7A0BID"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u65E7\u5B57\u6BB5\uFF0CNotNull")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "WFFLAG"),
                createVNode("td", null, "Long"),
                createVNode("td", null, "\u6D41\u7A0B\u6807\u8BC6"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u65E7\u5B57\u6BB5\uFF0CNotNull")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "HZ_APPROVE_STATUS"),
                createVNode("td", null, "String"),
                createVNode("td", null, "H0\u6D41\u7A0B\u5BA1\u6279\u72B6\u6001"),
                createVNode("td", null, "\u5BA1\u6279\u72B6\u6001"),
                createVNode("td", null, "NEW/RUN/APPROVED/INTERRUPT\uFF0CNotBlank")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "HZ_INSTANCE_ID"),
                createVNode("td", null, "Long"),
                createVNode("td", null, "H0\u6D41\u7A0B\u5B9E\u4F8BID"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u5DE5\u4F5C\u6D41\u8FD4\u56DE")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "AUDIT_STAT"),
                createVNode("td", null, "String"),
                createVNode("td", null, "\u5BA1\u6838\u72B6\u6001"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u5BA1\u6838\u72B6\u6001")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "VERIFY_STAT"),
                createVNode("td", null, "String"),
                createVNode("td", null, "\u6838\u9500\u7C7B\u578B"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u5BF9\u5E94\u5B57\u5178truth_header.verify_stat")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "NOTE"),
                createVNode("td", null, "String"),
                createVNode("td", null, "\u5907\u6CE8"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u7528\u6237\u8F93\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "ORGANIZATION_ID"),
                createVNode("td", null, "BigDecimal"),
                createVNode("td", null, "\u7EC4\u7EC7ID"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u5F53\u524D\u7528\u6237\u4E8B\u4E1A\u90E8")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "CREATE_TIME"),
                createVNode("td", null, "Date"),
                createVNode("td", null, "\u6838\u9500\u53D1\u8D77\u65E5\u671F"),
                createVNode("td", null, "\u521B\u5EFA\u65F6\u95F4"),
                createVNode("td", null, "\u7CFB\u7EDF\u81EA\u52A8\u8BB0\u5F55")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "CREATOR"),
                createVNode("td", null, "String"),
                createVNode("td", null, "\u521B\u5EFA\u4EBA"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u7CFB\u7EDF\u81EA\u52A8\u8BB0\u5F55")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "CREATOR_NAME"),
                createVNode("td", null, "String"),
                createVNode("td", null, "\u521B\u5EFA\u4EBA\u59D3\u540D"),
                createVNode("td", null, "\u521B\u5EFA\u4EBA"),
                createVNode("td", null, "\u7CFB\u7EDF\u81EA\u52A8\u8BB0\u5F55")
              ])
            ])
          ]),
          createVNode("p", null, [
            createVNode("strong", null, "\u67E5\u8BE2SQL"),
            createTextVNode("\uFF1A")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " EPM_INVOICE_TRUTH_HEADER")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " ORGANIZATION_ID "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " #{organizationId}")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " NVL(INVOICE_TRUTH_NO, "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "''"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "LIKE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "%"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "||"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " #{invoiceTruthNo} "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "||"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "%"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " NVL(PROJECT_CODE, "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "''"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "LIKE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "%"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "||"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " #{projectCode} "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "||"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "%"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ORDER BY"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " LAST_UPDATE_DATE "),
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
  _push(ssrRenderComponent(_component_KbCard, { title: "EPM_INVOICE_TRUTH_LINE\uFF08\u771F\u5B9E\u6027\u6838\u9500\u884C\u8868\uFF09" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5B57\u6BB5\u540D</th><th${_scopeId}>\u7C7B\u578B</th><th${_scopeId}>\u91CA\u4E49</th><th${_scopeId}>\u5BF9\u5E94\u754C\u9762\u5B57\u6BB5</th><th${_scopeId}>\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>INVOICE_TRUTH_LINE_ID</td><td${_scopeId}>Long</td><td${_scopeId}>\u6838\u9500\u884CID</td><td${_scopeId}>-</td><td${_scopeId}>\u81EA\u589E\u4E3B\u952E\uFF0C@Id @GeneratedValue</td></tr><tr${_scopeId}><td${_scopeId}>INVOICE_TRUTH_ID</td><td${_scopeId}>Long</td><td${_scopeId}>\u6838\u9500\u5355ID</td><td${_scopeId}>-</td><td${_scopeId}>\u5173\u8054EPM_INVOICE_TRUTH_HEADER</td></tr><tr${_scopeId}><td${_scopeId}>INVBILLNO</td><td${_scopeId}>String</td><td${_scopeId}>ERP\u51FA\u5E93\u5355\u53F7</td><td${_scopeId}>\u51FA\u5E93\u5355\u53F7</td><td${_scopeId}>\u6765\u6E90\u4E8E\u51FA\u5E93\u5355\u884C</td></tr><tr${_scopeId}><td${_scopeId}>DATE_INVBILL</td><td${_scopeId}>Date</td><td${_scopeId}>\u53D1\u8D27\u65E5\u671F</td><td${_scopeId}>\u53D1\u8D27\u65E5\u671F</td><td${_scopeId}>\u6765\u6E90\u4E8E\u51FA\u5E93\u5355\u884C</td></tr><tr${_scopeId}><td${_scopeId}>VERIFER_END_DATE</td><td${_scopeId}>Date</td><td${_scopeId}>\u6838\u9500\u622A\u6B62\u65E5</td><td${_scopeId}>\u6838\u9500\u622A\u6B62\u65E5</td><td${_scopeId}>\u624B\u5DE5\u5F55\u5165</td></tr><tr${_scopeId}><td${_scopeId}>REPAIR_VERIFER_END_DATE</td><td${_scopeId}>Date</td><td${_scopeId}>\u8865\u6838\u9500\u622A\u6B62\u65E5</td><td${_scopeId}>\u8865\u6838\u9500\u622A\u6B62\u65E5</td><td${_scopeId}>\u624B\u5DE5\u5F55\u5165</td></tr><tr${_scopeId}><td${_scopeId}>ITEM_CODE</td><td${_scopeId}>String</td><td${_scopeId}>\u4EA7\u54C1\u7F16\u7801</td><td${_scopeId}>\u4EA7\u54C1\u7F16\u7801</td><td${_scopeId}>\u6765\u6E90\u4E8E\u51FA\u5E93\u5355\u884C</td></tr><tr${_scopeId}><td${_scopeId}>ITEM_NAME</td><td${_scopeId}>String</td><td${_scopeId}>\u4EA7\u54C1\u540D\u79F0</td><td${_scopeId}>\u4EA7\u54C1\u540D\u79F0</td><td${_scopeId}>\u6765\u6E90\u4E8E\u51FA\u5E93\u5355\u884C</td></tr><tr${_scopeId}><td${_scopeId}>ITEM_ID</td><td${_scopeId}>Long</td><td${_scopeId}>\u4EA7\u54C1ID</td><td${_scopeId}>-</td><td${_scopeId}>\u6765\u6E90\u4E8E\u51FA\u5E93\u5355\u884C</td></tr><tr${_scopeId}><td${_scopeId}>QTY_BILL</td><td${_scopeId}>Long</td><td${_scopeId}>\u5B9E\u53D1\u6570\u91CF</td><td${_scopeId}>\u5B9E\u53D1\u6570\u91CF</td><td${_scopeId}>\u6765\u6E90\u4E8E\u51FA\u5E93\u5355\u884C</td></tr><tr${_scopeId}><td${_scopeId}>INVOICE_NUMBER</td><td${_scopeId}>String</td><td${_scopeId}>\u53D1\u7968\u53F7\u7801</td><td${_scopeId}>\u53D1\u7968\u53F7\u7801</td><td${_scopeId}>\u6765\u6E90\u4E8E\u53D1\u7968\u4FE1\u606F</td></tr><tr${_scopeId}><td${_scopeId}>INVOICE_CODE</td><td${_scopeId}>String</td><td${_scopeId}>\u53D1\u7968\u4EE3\u7801</td><td${_scopeId}>\u53D1\u7968\u4EE3\u7801</td><td${_scopeId}>\u6765\u6E90\u4E8E\u53D1\u7968\u4FE1\u606F</td></tr><tr${_scopeId}><td${_scopeId}>SERVICES_NAME</td><td${_scopeId}>String</td><td${_scopeId}>\u8D27\u7269\u6216\u670D\u52A1\u540D\u79F0</td><td${_scopeId}>-</td><td${_scopeId}>\u6765\u6E90\u4E8E\u53D1\u7968\u660E\u7EC6</td></tr><tr${_scopeId}><td${_scopeId}>CAN_VERIFER_NUMBER</td><td${_scopeId}>Long</td><td${_scopeId}>\u53EF\u6838\u9500\u6570\u91CF</td><td${_scopeId}>\u53EF\u6838\u9500\u6570\u91CF</td><td${_scopeId}>\u6765\u6E90\u4E8E\u51FA\u5E93\u5355\u884CCAN_VERIFY_NUM</td></tr><tr${_scopeId}><td${_scopeId}>SURPLUS_CAN_VERIFER_NUMBER</td><td${_scopeId}>Long</td><td${_scopeId}>\u5269\u4F59\u53EF\u6838\u9500\u6570\u91CF</td><td${_scopeId}>\u5269\u4F59\u53EF\u6838\u9500\u6570\u91CF</td><td${_scopeId}>\u53EF\u6838\u9500\u6570\u91CF-\u5DF2\u6838\u9500\u6570\u91CF</td></tr><tr${_scopeId}><td${_scopeId}>THIS_VERIFER_NUMBER</td><td${_scopeId}>BigDecimal</td><td${_scopeId}>\u672C\u6B21\u6838\u9500\u6570\u91CF</td><td${_scopeId}>\u672C\u6B21\u6838\u9500\u6570\u91CF</td><td${_scopeId}>\u624B\u5DE5\u5F55\u5165\uFF0C\u5C0F\u6570\u4F4D\u22643</td></tr><tr${_scopeId}><td${_scopeId}>SEQ</td><td${_scopeId}>Long</td><td${_scopeId}>\u884CID</td><td${_scopeId}>-</td><td${_scopeId}>\u884C\u5E8F\u53F7</td></tr><tr${_scopeId}><td${_scopeId}>INVOICE_DETAILS_ID</td><td${_scopeId}>Long</td><td${_scopeId}>\u53D1\u7968\u8BE6\u7EC6\u4FE1\u606FID</td><td${_scopeId}>-</td><td${_scopeId}>\u5173\u8054EPM_UPLOAD_INVOICE_DETAILS</td></tr><tr${_scopeId}><td${_scopeId}>INV_OUT_BILL_LINE_ID</td><td${_scopeId}>Long</td><td${_scopeId}>\u51FA\u5E93\u5355\u884CID</td><td${_scopeId}>-</td><td${_scopeId}>\u5173\u8054INV_OUT_BILL_LINE</td></tr><tr${_scopeId}><td${_scopeId}>SUR_VERIFY_NUM</td><td${_scopeId}>Long</td><td${_scopeId}>\u51FA\u5E93\u5355\u53EF\u6838\u9500\u6570\u91CF</td><td${_scopeId}>-</td><td${_scopeId}>\u6765\u6E90\u4E8E\u51FA\u5E93\u5355\u884C</td></tr><tr${_scopeId}><td${_scopeId}>CAN_VERIFY_NUM</td><td${_scopeId}>Long</td><td${_scopeId}>\u51FA\u5E93\u5355\u53EF\u6838\u9500\u6570\u91CF</td><td${_scopeId}>-</td><td${_scopeId}>\u6765\u6E90\u4E8E\u51FA\u5E93\u5355\u884C</td></tr><tr${_scopeId}><td${_scopeId}>UNIT_NAME_IS_AGREEMENT</td><td${_scopeId}>Long</td><td${_scopeId}>\u8D2D\u4E70\u65B9\u4E0E\u91C7\u8D2D\u5355\u4F4D\u4E00\u81F4</td><td${_scopeId}>-</td><td${_scopeId}>1=\u4E00\u81F4</td></tr><tr${_scopeId}><td${_scopeId}>BILLING_NAME_IS_AGREEMENT</td><td${_scopeId}>Long</td><td${_scopeId}>\u9500\u552E\u65B9\u4E0E\u7ECF\u9500\u5546\u6CD5\u4EBA\u4E00\u81F4</td><td${_scopeId}>-</td><td${_scopeId}>1=\u4E00\u81F4</td></tr><tr${_scopeId}><td${_scopeId}>DATE_IS_AGREEMENT</td><td${_scopeId}>Long</td><td${_scopeId}>\u53D1\u7968\u65E5\u671F\u5728\u53D1\u8D27\u65E5\u671F\u524D</td><td${_scopeId}>-</td><td${_scopeId}>1=\u4E00\u81F4</td></tr></tbody></table>`);
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
                createVNode("td", null, "INVOICE_TRUTH_LINE_ID"),
                createVNode("td", null, "Long"),
                createVNode("td", null, "\u6838\u9500\u884CID"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u81EA\u589E\u4E3B\u952E\uFF0C@Id @GeneratedValue")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "INVOICE_TRUTH_ID"),
                createVNode("td", null, "Long"),
                createVNode("td", null, "\u6838\u9500\u5355ID"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u5173\u8054EPM_INVOICE_TRUTH_HEADER")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "INVBILLNO"),
                createVNode("td", null, "String"),
                createVNode("td", null, "ERP\u51FA\u5E93\u5355\u53F7"),
                createVNode("td", null, "\u51FA\u5E93\u5355\u53F7"),
                createVNode("td", null, "\u6765\u6E90\u4E8E\u51FA\u5E93\u5355\u884C")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "DATE_INVBILL"),
                createVNode("td", null, "Date"),
                createVNode("td", null, "\u53D1\u8D27\u65E5\u671F"),
                createVNode("td", null, "\u53D1\u8D27\u65E5\u671F"),
                createVNode("td", null, "\u6765\u6E90\u4E8E\u51FA\u5E93\u5355\u884C")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "VERIFER_END_DATE"),
                createVNode("td", null, "Date"),
                createVNode("td", null, "\u6838\u9500\u622A\u6B62\u65E5"),
                createVNode("td", null, "\u6838\u9500\u622A\u6B62\u65E5"),
                createVNode("td", null, "\u624B\u5DE5\u5F55\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "REPAIR_VERIFER_END_DATE"),
                createVNode("td", null, "Date"),
                createVNode("td", null, "\u8865\u6838\u9500\u622A\u6B62\u65E5"),
                createVNode("td", null, "\u8865\u6838\u9500\u622A\u6B62\u65E5"),
                createVNode("td", null, "\u624B\u5DE5\u5F55\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "ITEM_CODE"),
                createVNode("td", null, "String"),
                createVNode("td", null, "\u4EA7\u54C1\u7F16\u7801"),
                createVNode("td", null, "\u4EA7\u54C1\u7F16\u7801"),
                createVNode("td", null, "\u6765\u6E90\u4E8E\u51FA\u5E93\u5355\u884C")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "ITEM_NAME"),
                createVNode("td", null, "String"),
                createVNode("td", null, "\u4EA7\u54C1\u540D\u79F0"),
                createVNode("td", null, "\u4EA7\u54C1\u540D\u79F0"),
                createVNode("td", null, "\u6765\u6E90\u4E8E\u51FA\u5E93\u5355\u884C")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "ITEM_ID"),
                createVNode("td", null, "Long"),
                createVNode("td", null, "\u4EA7\u54C1ID"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u6765\u6E90\u4E8E\u51FA\u5E93\u5355\u884C")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "QTY_BILL"),
                createVNode("td", null, "Long"),
                createVNode("td", null, "\u5B9E\u53D1\u6570\u91CF"),
                createVNode("td", null, "\u5B9E\u53D1\u6570\u91CF"),
                createVNode("td", null, "\u6765\u6E90\u4E8E\u51FA\u5E93\u5355\u884C")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "INVOICE_NUMBER"),
                createVNode("td", null, "String"),
                createVNode("td", null, "\u53D1\u7968\u53F7\u7801"),
                createVNode("td", null, "\u53D1\u7968\u53F7\u7801"),
                createVNode("td", null, "\u6765\u6E90\u4E8E\u53D1\u7968\u4FE1\u606F")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "INVOICE_CODE"),
                createVNode("td", null, "String"),
                createVNode("td", null, "\u53D1\u7968\u4EE3\u7801"),
                createVNode("td", null, "\u53D1\u7968\u4EE3\u7801"),
                createVNode("td", null, "\u6765\u6E90\u4E8E\u53D1\u7968\u4FE1\u606F")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "SERVICES_NAME"),
                createVNode("td", null, "String"),
                createVNode("td", null, "\u8D27\u7269\u6216\u670D\u52A1\u540D\u79F0"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u6765\u6E90\u4E8E\u53D1\u7968\u660E\u7EC6")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "CAN_VERIFER_NUMBER"),
                createVNode("td", null, "Long"),
                createVNode("td", null, "\u53EF\u6838\u9500\u6570\u91CF"),
                createVNode("td", null, "\u53EF\u6838\u9500\u6570\u91CF"),
                createVNode("td", null, "\u6765\u6E90\u4E8E\u51FA\u5E93\u5355\u884CCAN_VERIFY_NUM")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "SURPLUS_CAN_VERIFER_NUMBER"),
                createVNode("td", null, "Long"),
                createVNode("td", null, "\u5269\u4F59\u53EF\u6838\u9500\u6570\u91CF"),
                createVNode("td", null, "\u5269\u4F59\u53EF\u6838\u9500\u6570\u91CF"),
                createVNode("td", null, "\u53EF\u6838\u9500\u6570\u91CF-\u5DF2\u6838\u9500\u6570\u91CF")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "THIS_VERIFER_NUMBER"),
                createVNode("td", null, "BigDecimal"),
                createVNode("td", null, "\u672C\u6B21\u6838\u9500\u6570\u91CF"),
                createVNode("td", null, "\u672C\u6B21\u6838\u9500\u6570\u91CF"),
                createVNode("td", null, "\u624B\u5DE5\u5F55\u5165\uFF0C\u5C0F\u6570\u4F4D\u22643")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "SEQ"),
                createVNode("td", null, "Long"),
                createVNode("td", null, "\u884CID"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u884C\u5E8F\u53F7")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "INVOICE_DETAILS_ID"),
                createVNode("td", null, "Long"),
                createVNode("td", null, "\u53D1\u7968\u8BE6\u7EC6\u4FE1\u606FID"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u5173\u8054EPM_UPLOAD_INVOICE_DETAILS")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "INV_OUT_BILL_LINE_ID"),
                createVNode("td", null, "Long"),
                createVNode("td", null, "\u51FA\u5E93\u5355\u884CID"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u5173\u8054INV_OUT_BILL_LINE")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "SUR_VERIFY_NUM"),
                createVNode("td", null, "Long"),
                createVNode("td", null, "\u51FA\u5E93\u5355\u53EF\u6838\u9500\u6570\u91CF"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u6765\u6E90\u4E8E\u51FA\u5E93\u5355\u884C")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "CAN_VERIFY_NUM"),
                createVNode("td", null, "Long"),
                createVNode("td", null, "\u51FA\u5E93\u5355\u53EF\u6838\u9500\u6570\u91CF"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u6765\u6E90\u4E8E\u51FA\u5E93\u5355\u884C")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "UNIT_NAME_IS_AGREEMENT"),
                createVNode("td", null, "Long"),
                createVNode("td", null, "\u8D2D\u4E70\u65B9\u4E0E\u91C7\u8D2D\u5355\u4F4D\u4E00\u81F4"),
                createVNode("td", null, "-"),
                createVNode("td", null, "1=\u4E00\u81F4")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "BILLING_NAME_IS_AGREEMENT"),
                createVNode("td", null, "Long"),
                createVNode("td", null, "\u9500\u552E\u65B9\u4E0E\u7ECF\u9500\u5546\u6CD5\u4EBA\u4E00\u81F4"),
                createVNode("td", null, "-"),
                createVNode("td", null, "1=\u4E00\u81F4")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "DATE_IS_AGREEMENT"),
                createVNode("td", null, "Long"),
                createVNode("td", null, "\u53D1\u7968\u65E5\u671F\u5728\u53D1\u8D27\u65E5\u671F\u524D"),
                createVNode("td", null, "-"),
                createVNode("td", null, "1=\u4E00\u81F4")
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, { title: "EPM_VERIFER_INVOICE_DETAILS\uFF08\u6838\u9500\u53D1\u7968\u660E\u7EC6\u8868\uFF09" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5B57\u6BB5\u540D</th><th${_scopeId}>\u7C7B\u578B</th><th${_scopeId}>\u91CA\u4E49</th><th${_scopeId}>\u5BF9\u5E94\u754C\u9762\u5B57\u6BB5</th><th${_scopeId}>\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>PK_ID</td><td${_scopeId}>Long</td><td${_scopeId}>\u4E3B\u952EID</td><td${_scopeId}>-</td><td${_scopeId}>\u81EA\u589E\u4E3B\u952E\uFF0C@Id @GeneratedValue</td></tr><tr${_scopeId}><td${_scopeId}>INVOICE_NUMBER</td><td${_scopeId}>String</td><td${_scopeId}>\u53D1\u7968\u53F7\u7801</td><td${_scopeId}>\u53D1\u7968\u53F7\u7801</td><td${_scopeId}>\u6765\u6E90\u4E8E\u6838\u9500\u53D1\u7968\u4E0A\u4F20</td></tr><tr${_scopeId}><td${_scopeId}>INVOICE_CODE</td><td${_scopeId}>String</td><td${_scopeId}>\u53D1\u7968\u4EE3\u7801</td><td${_scopeId}>\u53D1\u7968\u4EE3\u7801</td><td${_scopeId}>\u6765\u6E90\u4E8E\u6838\u9500\u53D1\u7968\u4E0A\u4F20</td></tr><tr${_scopeId}><td${_scopeId}>SERVICES_NAME</td><td${_scopeId}>String</td><td${_scopeId}>\u8D27\u7269\u6216\u670D\u52A1\u540D\u79F0</td><td${_scopeId}>\u8D27\u7269\u6216\u670D\u52A1\u540D\u79F0</td><td${_scopeId}>\u6765\u6E90\u4E8E\u6838\u9500\u53D1\u7968\u4E0A\u4F20</td></tr><tr${_scopeId}><td${_scopeId}>SERVICES_CODE</td><td${_scopeId}>String</td><td${_scopeId}>\u4EA7\u54C1\u7F16\u7801</td><td${_scopeId}>\u4EA7\u54C1\u7F16\u7801</td><td${_scopeId}>\u6765\u6E90\u4E8E\u6838\u9500\u53D1\u7968\u4E0A\u4F20</td></tr><tr${_scopeId}><td${_scopeId}>INVOICE_DETAILS_ID</td><td${_scopeId}>Long</td><td${_scopeId}>\u53D1\u7968\u8BE6\u7EC6\u4FE1\u606FID</td><td${_scopeId}>-</td><td${_scopeId}>\u5173\u8054EPM_UPLOAD_INVOICE_DETAILS</td></tr><tr${_scopeId}><td${_scopeId}>VERIFER_INVOICE_DETAILS_ID</td><td${_scopeId}>Long</td><td${_scopeId}>\u6838\u9500\u53D1\u7968\u4FE1\u606FID</td><td${_scopeId}>-</td><td${_scopeId}>\u5173\u8054\u6838\u9500\u53D1\u7968</td></tr><tr${_scopeId}><td${_scopeId}>INVOICE_TRUTH_LINE_ID</td><td${_scopeId}>Long</td><td${_scopeId}>\u771F\u5B9E\u6027\u6838\u9500\u884CID</td><td${_scopeId}>-</td><td${_scopeId}>\u5173\u8054EPM_INVOICE_TRUTH_LINE</td></tr><tr${_scopeId}><td${_scopeId}>CAN_VERIFER_NUMBER</td><td${_scopeId}>String</td><td${_scopeId}>\u53EF\u6838\u9500\u6570\u91CF</td><td${_scopeId}>\u53EF\u6838\u9500\u6570\u91CF</td><td${_scopeId}>\u6765\u6E90\u4E8E\u53D1\u7968\u660E\u7EC6</td></tr><tr${_scopeId}><td${_scopeId}>SURPLUS_CAN_VERIFER_NUMBER</td><td${_scopeId}>String</td><td${_scopeId}>\u5269\u4F59\u53EF\u6838\u9500\u6570\u91CF</td><td${_scopeId}>\u5269\u4F59\u53EF\u6838\u9500\u6570\u91CF</td><td${_scopeId}>\u53EF\u6838\u9500\u6570\u91CF-\u5DF2\u6838\u9500\u6570\u91CF</td></tr><tr${_scopeId}><td${_scopeId}>THIS_VERIFER_NUMBER</td><td${_scopeId}>Long</td><td${_scopeId}>\u672C\u6B21\u6838\u9500\u6570\u91CF</td><td${_scopeId}>\u672C\u6B21\u6838\u9500\u6570\u91CF</td><td${_scopeId}>\u6765\u6E90\u4E8E\u6838\u9500\u884C</td></tr><tr${_scopeId}><td${_scopeId}>UOM_RATE</td><td${_scopeId}>String</td><td${_scopeId}>\u5355\u4F4D\u8F6C\u6362\u7387</td><td${_scopeId}>\u5355\u4F4D\u8F6C\u6362\u7387</td><td${_scopeId}>\u8BA1\u91CF\u5355\u4F4D\u8F6C\u6362</td></tr><tr${_scopeId}><td${_scopeId}>CONVERT_SUR_VERIFER_NUMBER</td><td${_scopeId}>String</td><td${_scopeId}>\u8F6C\u5316\u540E\u5269\u4F59\u53EF\u6838\u9500\u6570\u91CF</td><td${_scopeId}>\u8F6C\u5316\u540E\u5269\u4F59\u53EF\u6838\u9500\u6570\u91CF</td><td${_scopeId}>\u5269\u4F59\u53EF\u6838\u9500\u6570\u91CF\xD7UOM_RATE</td></tr><tr${_scopeId}><td${_scopeId}>SEQ</td><td${_scopeId}>Long</td><td${_scopeId}>\u884CID</td><td${_scopeId}>-</td><td${_scopeId}>\u884C\u5E8F\u53F7</td></tr><tr${_scopeId}><td${_scopeId}>EFFECT_STATUS</td><td${_scopeId}>String</td><td${_scopeId}>\u6709\u6548\u72B6\u6001</td><td${_scopeId}>\u6709\u6548\u72B6\u6001</td><td${_scopeId}>invalid/valid/canceled\uFF0C\u5B57\u5178VERIFER_EFFECT_STATUS</td></tr><tr${_scopeId}><td${_scopeId}>CANCEL_OPERATOR</td><td${_scopeId}>String</td><td${_scopeId}>\u6838\u9500\u53D6\u6D88\u64CD\u4F5C\u4EBA</td><td${_scopeId}>\u53D6\u6D88\u64CD\u4F5C\u4EBA</td><td${_scopeId}>\u53D6\u6D88\u65F6\u8BB0\u5F55\u5F53\u524D\u7528\u6237</td></tr><tr${_scopeId}><td${_scopeId}>CANCEL_TIME</td><td${_scopeId}>Date</td><td${_scopeId}>\u6838\u9500\u53D6\u6D88\u64CD\u4F5C\u65F6\u95F4</td><td${_scopeId}>\u53D6\u6D88\u65F6\u95F4</td><td${_scopeId}>\u53D6\u6D88\u65F6\u8BB0\u5F55\u7CFB\u7EDF\u65F6\u95F4</td></tr><tr${_scopeId}><td${_scopeId}>CANCEL_TYPE</td><td${_scopeId}>String</td><td${_scopeId}>\u53D6\u6D88\u6838\u9500\u7C7B\u578B</td><td${_scopeId}>\u53D6\u6D88\u7C7B\u578B</td><td${_scopeId}>invoice/invoiceDetail/invLine/veriferDetail/obsInvoice\uFF0C\u5B57\u5178CANCEL_TYPE</td></tr><tr${_scopeId}><td${_scopeId}>UNIT_NAME_IS_AGREEMENT</td><td${_scopeId}>Long</td><td${_scopeId}>\u8D2D\u4E70\u65B9\u4E0E\u91C7\u8D2D\u5355\u4F4D\u4E00\u81F4</td><td${_scopeId}>\u8D2D\u4E70\u65B9\u4E00\u81F4</td><td${_scopeId}>1=\u4E00\u81F4</td></tr><tr${_scopeId}><td${_scopeId}>BILLING_NAME_IS_AGREEMENT</td><td${_scopeId}>Long</td><td${_scopeId}>\u9500\u552E\u65B9\u4E0E\u7ECF\u9500\u5546\u6CD5\u4EBA\u4E00\u81F4</td><td${_scopeId}>\u9500\u552E\u65B9\u4E00\u81F4</td><td${_scopeId}>1=\u4E00\u81F4</td></tr><tr${_scopeId}><td${_scopeId}>DATE_IS_AGREEMENT</td><td${_scopeId}>Long</td><td${_scopeId}>\u53D1\u7968\u65E5\u671F\u5728\u53D1\u8D27\u65E5\u671F\u524D</td><td${_scopeId}>\u65E5\u671F\u4E00\u81F4</td><td${_scopeId}>1=\u4E00\u81F4</td></tr></tbody></table><p${_scopeId}><strong${_scopeId}>\u53D6\u6D88\u6838\u9500\u66F4\u65B0SQL</strong>\uFF1A</p><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>UPDATE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> EPM_VERIFER_INVOICE_DETAILS</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SET</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> EFFECT_STATUS </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>canceled</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    CANCEL_OPERATOR </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> #{cancelOperator},</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    CANCEL_TIME </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>SYSDATE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    CANCEL_TYPE </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> #{cancelType}</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> VERIFER_INVOICE_DETAILS_ID </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (#{detailIdList});</span></span>
<span class="line"${_scopeId}></span></code></pre></div>`);
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
                createVNode("td", null, "PK_ID"),
                createVNode("td", null, "Long"),
                createVNode("td", null, "\u4E3B\u952EID"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u81EA\u589E\u4E3B\u952E\uFF0C@Id @GeneratedValue")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "INVOICE_NUMBER"),
                createVNode("td", null, "String"),
                createVNode("td", null, "\u53D1\u7968\u53F7\u7801"),
                createVNode("td", null, "\u53D1\u7968\u53F7\u7801"),
                createVNode("td", null, "\u6765\u6E90\u4E8E\u6838\u9500\u53D1\u7968\u4E0A\u4F20")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "INVOICE_CODE"),
                createVNode("td", null, "String"),
                createVNode("td", null, "\u53D1\u7968\u4EE3\u7801"),
                createVNode("td", null, "\u53D1\u7968\u4EE3\u7801"),
                createVNode("td", null, "\u6765\u6E90\u4E8E\u6838\u9500\u53D1\u7968\u4E0A\u4F20")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "SERVICES_NAME"),
                createVNode("td", null, "String"),
                createVNode("td", null, "\u8D27\u7269\u6216\u670D\u52A1\u540D\u79F0"),
                createVNode("td", null, "\u8D27\u7269\u6216\u670D\u52A1\u540D\u79F0"),
                createVNode("td", null, "\u6765\u6E90\u4E8E\u6838\u9500\u53D1\u7968\u4E0A\u4F20")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "SERVICES_CODE"),
                createVNode("td", null, "String"),
                createVNode("td", null, "\u4EA7\u54C1\u7F16\u7801"),
                createVNode("td", null, "\u4EA7\u54C1\u7F16\u7801"),
                createVNode("td", null, "\u6765\u6E90\u4E8E\u6838\u9500\u53D1\u7968\u4E0A\u4F20")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "INVOICE_DETAILS_ID"),
                createVNode("td", null, "Long"),
                createVNode("td", null, "\u53D1\u7968\u8BE6\u7EC6\u4FE1\u606FID"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u5173\u8054EPM_UPLOAD_INVOICE_DETAILS")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "VERIFER_INVOICE_DETAILS_ID"),
                createVNode("td", null, "Long"),
                createVNode("td", null, "\u6838\u9500\u53D1\u7968\u4FE1\u606FID"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u5173\u8054\u6838\u9500\u53D1\u7968")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "INVOICE_TRUTH_LINE_ID"),
                createVNode("td", null, "Long"),
                createVNode("td", null, "\u771F\u5B9E\u6027\u6838\u9500\u884CID"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u5173\u8054EPM_INVOICE_TRUTH_LINE")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "CAN_VERIFER_NUMBER"),
                createVNode("td", null, "String"),
                createVNode("td", null, "\u53EF\u6838\u9500\u6570\u91CF"),
                createVNode("td", null, "\u53EF\u6838\u9500\u6570\u91CF"),
                createVNode("td", null, "\u6765\u6E90\u4E8E\u53D1\u7968\u660E\u7EC6")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "SURPLUS_CAN_VERIFER_NUMBER"),
                createVNode("td", null, "String"),
                createVNode("td", null, "\u5269\u4F59\u53EF\u6838\u9500\u6570\u91CF"),
                createVNode("td", null, "\u5269\u4F59\u53EF\u6838\u9500\u6570\u91CF"),
                createVNode("td", null, "\u53EF\u6838\u9500\u6570\u91CF-\u5DF2\u6838\u9500\u6570\u91CF")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "THIS_VERIFER_NUMBER"),
                createVNode("td", null, "Long"),
                createVNode("td", null, "\u672C\u6B21\u6838\u9500\u6570\u91CF"),
                createVNode("td", null, "\u672C\u6B21\u6838\u9500\u6570\u91CF"),
                createVNode("td", null, "\u6765\u6E90\u4E8E\u6838\u9500\u884C")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "UOM_RATE"),
                createVNode("td", null, "String"),
                createVNode("td", null, "\u5355\u4F4D\u8F6C\u6362\u7387"),
                createVNode("td", null, "\u5355\u4F4D\u8F6C\u6362\u7387"),
                createVNode("td", null, "\u8BA1\u91CF\u5355\u4F4D\u8F6C\u6362")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "CONVERT_SUR_VERIFER_NUMBER"),
                createVNode("td", null, "String"),
                createVNode("td", null, "\u8F6C\u5316\u540E\u5269\u4F59\u53EF\u6838\u9500\u6570\u91CF"),
                createVNode("td", null, "\u8F6C\u5316\u540E\u5269\u4F59\u53EF\u6838\u9500\u6570\u91CF"),
                createVNode("td", null, "\u5269\u4F59\u53EF\u6838\u9500\u6570\u91CF\xD7UOM_RATE")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "SEQ"),
                createVNode("td", null, "Long"),
                createVNode("td", null, "\u884CID"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u884C\u5E8F\u53F7")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "EFFECT_STATUS"),
                createVNode("td", null, "String"),
                createVNode("td", null, "\u6709\u6548\u72B6\u6001"),
                createVNode("td", null, "\u6709\u6548\u72B6\u6001"),
                createVNode("td", null, "invalid/valid/canceled\uFF0C\u5B57\u5178VERIFER_EFFECT_STATUS")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "CANCEL_OPERATOR"),
                createVNode("td", null, "String"),
                createVNode("td", null, "\u6838\u9500\u53D6\u6D88\u64CD\u4F5C\u4EBA"),
                createVNode("td", null, "\u53D6\u6D88\u64CD\u4F5C\u4EBA"),
                createVNode("td", null, "\u53D6\u6D88\u65F6\u8BB0\u5F55\u5F53\u524D\u7528\u6237")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "CANCEL_TIME"),
                createVNode("td", null, "Date"),
                createVNode("td", null, "\u6838\u9500\u53D6\u6D88\u64CD\u4F5C\u65F6\u95F4"),
                createVNode("td", null, "\u53D6\u6D88\u65F6\u95F4"),
                createVNode("td", null, "\u53D6\u6D88\u65F6\u8BB0\u5F55\u7CFB\u7EDF\u65F6\u95F4")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "CANCEL_TYPE"),
                createVNode("td", null, "String"),
                createVNode("td", null, "\u53D6\u6D88\u6838\u9500\u7C7B\u578B"),
                createVNode("td", null, "\u53D6\u6D88\u7C7B\u578B"),
                createVNode("td", null, "invoice/invoiceDetail/invLine/veriferDetail/obsInvoice\uFF0C\u5B57\u5178CANCEL_TYPE")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "UNIT_NAME_IS_AGREEMENT"),
                createVNode("td", null, "Long"),
                createVNode("td", null, "\u8D2D\u4E70\u65B9\u4E0E\u91C7\u8D2D\u5355\u4F4D\u4E00\u81F4"),
                createVNode("td", null, "\u8D2D\u4E70\u65B9\u4E00\u81F4"),
                createVNode("td", null, "1=\u4E00\u81F4")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "BILLING_NAME_IS_AGREEMENT"),
                createVNode("td", null, "Long"),
                createVNode("td", null, "\u9500\u552E\u65B9\u4E0E\u7ECF\u9500\u5546\u6CD5\u4EBA\u4E00\u81F4"),
                createVNode("td", null, "\u9500\u552E\u65B9\u4E00\u81F4"),
                createVNode("td", null, "1=\u4E00\u81F4")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "DATE_IS_AGREEMENT"),
                createVNode("td", null, "Long"),
                createVNode("td", null, "\u53D1\u7968\u65E5\u671F\u5728\u53D1\u8D27\u65E5\u671F\u524D"),
                createVNode("td", null, "\u65E5\u671F\u4E00\u81F4"),
                createVNode("td", null, "1=\u4E00\u81F4")
              ])
            ])
          ]),
          createVNode("p", null, [
            createVNode("strong", null, "\u53D6\u6D88\u6838\u9500\u66F4\u65B0SQL"),
            createTextVNode("\uFF1A")
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
                  createVNode("span", { style: { "color": "#F78C6C" } }, "UPDATE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " EPM_VERIFER_INVOICE_DETAILS")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "SET"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " EFFECT_STATUS "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "canceled"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    CANCEL_OPERATOR "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " #{cancelOperator},")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    CANCEL_TIME "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#C792EA" } }, "SYSDATE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    CANCEL_TYPE "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " #{cancelType}")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " VERIFER_INVOICE_DETAILS_ID "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IN"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " (#{detailIdList});")
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
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u62A5\u9519\u4FE1\u606F</th><th${_scopeId}>\u63D0\u793A\u8282\u70B9</th><th${_scopeId}>\u6839\u56E0\u4E0E\u89E3\u51B3\u65B9\u6848</th><th${_scopeId}>\u7B49\u7EA7</th><th${_scopeId}>\u8BE6\u7EC6\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u672C\u6B21\u6838\u9500\u6570\u91CF\u7684\u5C0F\u6570\u4F4D\u4E0D\u80FD\u8D85\u8FC73\u4F4D</td><td${_scopeId}>\u4FDD\u5B58</td><td${_scopeId}>\u6838\u9500\u6570\u91CF\u7CBE\u5EA6\u8D85\u9650\u3002\u8C03\u6574\u5C0F\u6570\u4F4D\u81F3\u22643\u4F4D</td><td${_scopeId}>\u9AD8</td><td${_scopeId}>\u4FDD\u5B58\u65F6\u6821\u9A8CTHIS_VERIFER_NUMBER\u5C0F\u6570\u4F4D</td></tr><tr${_scopeId}><td${_scopeId}>\u53C2\u6570\u4E0D\u80FD\u4E3A\u7A7A</td><td${_scopeId}>\u4FDD\u5B58</td><td${_scopeId}>\u6838\u9500\u53C2\u6570\u672A\u586B\u5199\u3002\u8865\u5168\u6838\u9500\u53C2\u6570\u540E\u4FDD\u5B58</td><td${_scopeId}>\u9AD8</td><td${_scopeId}>\u4FDD\u5B58\u65F6\u53C2\u6570\u975E\u7A7A\u6821\u9A8C</td></tr><tr${_scopeId}><td${_scopeId}>\u6838\u9500\u6570\u91CF\u5FC5\u987B\u5927\u4E8E0</td><td${_scopeId}>\u4FDD\u5B58</td><td${_scopeId}>\u6838\u9500\u6570\u91CF\u22640\u3002\u8C03\u6574\u6838\u9500\u6570\u91CF\u5927\u4E8E0</td><td${_scopeId}>\u9AD8</td><td${_scopeId}>\u4FDD\u5B58\u65F6\u6821\u9A8CTHIS_VERIFER_NUMBER&gt;0</td></tr><tr${_scopeId}><td${_scopeId}>\u6838\u9500\u6570\u91CF\u8D85\u8FC7\u5269\u4F59\u53EF\u6838\u9500\u6570\u91CF</td><td${_scopeId}>\u4FDD\u5B58</td><td${_scopeId}>\u672C\u6B21\u6838\u9500\u6570\u91CF\u8D85\u8FC7\u5269\u4F59\u53EF\u6838\u9500\u6570\u91CF\u3002\u8C03\u6574\u81F3\u5269\u4F59\u53EF\u6838\u9500\u8303\u56F4\u5185</td><td${_scopeId}>\u9AD8</td><td${_scopeId}>\u4FDD\u5B58\u65F6\u6821\u9A8CTHIS_VERIFER_NUMBER\u2264SURPLUS_CAN_VERIFER_NUMBER</td></tr><tr${_scopeId}><td${_scopeId}>\u53D1\u7968\u5FC5\u987B\u4E0A\u4F20</td><td${_scopeId}>\u4FDD\u5B58</td><td${_scopeId}>\u672A\u4E0A\u4F20\u6838\u9500\u53D1\u7968\u3002\u5148\u4E0A\u4F20\u6838\u9500\u53D1\u7968\u518D\u4FDD\u5B58</td><td${_scopeId}>\u9AD8</td><td${_scopeId}>\u4FDD\u5B58\u65F6\u6821\u9A8C\u53D1\u7968\u5173\u8054</td></tr><tr${_scopeId}><td${_scopeId}>\u6838\u9500\u884C\u4E0D\u5B58\u5728</td><td${_scopeId}>\u4FDD\u5B58</td><td${_scopeId}>INVOICE_TRUTH_LINE_ID\u5BF9\u5E94\u6838\u9500\u884C\u4E0D\u5B58\u5728\u3002\u786E\u8BA4\u6838\u9500\u884C\u6709\u6548\u6027</td><td${_scopeId}>\u9AD8</td><td${_scopeId}>\u4FDD\u5B58\u65F6\u6821\u9A8C\u6838\u9500\u884C\u5B58\u5728</td></tr><tr${_scopeId}><td${_scopeId}>\u64CD\u4F5C\u7C7B\u578B\u4E0D\u80FD\u4E3A\u7A7A</td><td${_scopeId}>\u53D6\u6D88\u6838\u9500</td><td${_scopeId}>actionType\u53C2\u6570\u4E3A\u7A7A\u3002\u4F20\u5165\u5408\u6CD5actionType</td><td${_scopeId}>\u9AD8</td><td${_scopeId}>cancel\u65B9\u6CD5\u4E2DactionType\u975E\u7A7A\u6821\u9A8C</td></tr><tr${_scopeId}><td${_scopeId}>\u5BF9\u5E94\u5217\u8868id\u6570\u7EC4\u4E0D\u80FD\u4E3A\u7A7A</td><td${_scopeId}>\u53D6\u6D88\u6838\u9500</td><td${_scopeId}>idList\u53C2\u6570\u4E3A\u7A7A\u3002\u4F20\u5165\u9700\u53D6\u6D88\u7684ID\u5217\u8868</td><td${_scopeId}>\u9AD8</td><td${_scopeId}>cancel\u65B9\u6CD5\u4E2DidList\u975E\u7A7A\u6821\u9A8C</td></tr><tr${_scopeId}><td${_scopeId}>\u4E0D\u652F\u6301xxx\u64CD\u4F5C</td><td${_scopeId}>\u53D6\u6D88\u6838\u9500</td><td${_scopeId}>actionType\u4E0D\u57285\u79CD\u5408\u6CD5\u503C\u8303\u56F4\u5185\u3002\u4F20\u5165\u5408\u6CD5actionType</td><td${_scopeId}>\u9AD8</td><td${_scopeId}>cancel\u65B9\u6CD5\u4E2DactionType\u5408\u6CD5\u6027\u6821\u9A8C</td></tr><tr${_scopeId}><td${_scopeId}>\u6838\u9500\u53D6\u6D88\u6570\u636E\u4E3A\u7A7A</td><td${_scopeId}>\u53D6\u6D88\u6838\u9500</td><td${_scopeId}>\u6309\u6761\u4EF6\u67E5\u8BE2\u4E0D\u5230\u53EF\u53D6\u6D88\u7684\u6838\u9500\u660E\u7EC6\u3002\u786E\u8BA4\u6570\u636E\u72B6\u6001</td><td${_scopeId}>\u9AD8</td><td${_scopeId}>\u67E5\u8BE2\u53D7\u5F71\u54CD\u6838\u9500\u660E\u7EC6\u4E3A\u7A7A\u65F6\u629B\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>\u6838\u9500\u660E\u7EC6\u72B6\u6001\u5F02\u5E38,\u8BF7\u5237\u65B0\u6570\u636E\u540E\u91CD\u8BD5</td><td${_scopeId}>\u53D6\u6D88\u6838\u9500</td><td${_scopeId}>\u66F4\u65B0canceled\u72B6\u6001\u65F6\u5F71\u54CD\u884C\u6570\u4E0E\u9884\u671F\u4E0D\u4E00\u81F4\u3002\u5237\u65B0\u6570\u636E\u540E\u91CD\u8BD5</td><td${_scopeId}>\u9AD8</td><td${_scopeId}>\u66F4\u65B0\u5F71\u54CD\u884C\u6570\u6821\u9A8C</td></tr><tr${_scopeId}><td${_scopeId}>\u66F4\u65B0\u5931\u8D25,\u53D6\u6D88\u540E\u51FA\u5E93\u5355\u884C\u5DF2\u6838\u9500\u6570\u91CF\u5C0F\u4E8E0</td><td${_scopeId}>\u53D6\u6D88\u6838\u9500</td><td${_scopeId}>\u53D6\u6D88\u6570\u91CF\u5927\u4E8E\u51FA\u5E93\u5355\u884C\u5DF2\u6838\u9500\u6570\u91CF\u3002\u68C0\u67E5\u6570\u636E\u4E00\u81F4\u6027</td><td${_scopeId}>\u9AD8</td><td${_scopeId}>\u51FA\u5E93\u5355\u884C\u5DF2\u6838\u9500\u6570\u91CF\u6821\u9A8C</td></tr><tr${_scopeId}><td${_scopeId}>\u8BF7\u9009\u62E9\u6838\u9500\u7C7B\u578B</td><td${_scopeId}>\u67E5\u8BE2\u51FA\u5E93\u5355/\u53D1\u7968</td><td${_scopeId}>\u672A\u9009\u62E9\u6838\u9500\u7C7B\u578B(veriferType)\u3002\u5148\u9009\u62E9\u6838\u9500\u7C7B\u578B\u518D\u67E5\u8BE2</td><td${_scopeId}>\u9AD8</td><td${_scopeId}>doSearchOutbillReport/doGetInvoiceInfo\u4E2DveriferType\u975E\u7A7A\u6821\u9A8C</td></tr><tr${_scopeId}><td${_scopeId}>\u6838\u9500\u51FA\u5E93\u5355\u660E\u7EC6\u4E0D\u53EF\u4E3A\u7A7A</td><td${_scopeId}>\u63D0\u4EA4\u5BA1\u6279</td><td${_scopeId}>\u6838\u9500\u5355\u4E0B\u65E0\u6838\u9500\u884C\u6570\u636E\u3002\u5148\u6DFB\u52A0\u6838\u9500\u884C\u518D\u63D0\u4EA4</td><td${_scopeId}>\u9AD8</td><td${_scopeId}>checkWorkFlowData\u4E2D\u6838\u9500\u884C\u5217\u8868\u4E3A\u7A7A\u6821\u9A8C</td></tr><tr${_scopeId}><td${_scopeId}>\u672C\u6B21\u6838\u9500\u6570\u91CF\u4E0D\u80FD\u5927\u4E8E\u53EF\u6838\u9500\u6570\u91CF</td><td${_scopeId}>\u4FDD\u5B58</td><td${_scopeId}>\u6838\u9500\u884C\u672C\u6B21\u6838\u9500\u6570\u91CF\u5408\u8BA1\u8D85\u8FC7\u51FA\u5E93\u5355\u884C\u53EF\u6838\u9500\u6570\u91CF\u3002\u8C03\u6574\u6838\u9500\u6570\u91CF</td><td${_scopeId}>\u9AD8</td><td${_scopeId}>checkVeriferInvoice\u4E2DsumThisVeriferNumber&gt;canVerifyNum\u6821\u9A8C</td></tr><tr${_scopeId}><td${_scopeId}>\u5BF9\u5E94\u7684\u51FA\u5E93\u5355\u660E\u7EC6\u4E0D\u5B58\u5728</td><td${_scopeId}>\u63D0\u4EA4\u5BA1\u6279</td><td${_scopeId}>\u6838\u9500\u884C\u5173\u8054\u7684\u51FA\u5E93\u5355\u884C(INV_OUT_BILL_LINE_ID)\u4E0D\u5B58\u5728\u3002\u786E\u8BA4\u51FA\u5E93\u5355\u884C\u6709\u6548\u6027</td><td${_scopeId}>\u9AD8</td><td${_scopeId}>checkWorkFlowData\u4E2DinvOutBillLineId\u4E3A\u7A7A\u6821\u9A8C</td></tr><tr${_scopeId}><td${_scopeId}>\u5BF9\u5E94\u7684\u51FA\u5E93\u5355\u660E\u7EC6\u53EF\u6838\u9500\u6570\u91CF\u4E0D\u8DB3</td><td${_scopeId}>\u63D0\u4EA4\u5BA1\u6279</td><td${_scopeId}>\u51FA\u5E93\u5355\u884C\u53EF\u6838\u9500\u6570\u91CF&lt;0\u3002\u68C0\u67E5\u51FA\u5E93\u5355\u884C\u53EF\u6838\u9500\u6570\u91CF</td><td${_scopeId}>\u9AD8</td><td${_scopeId}>checkWorkFlowData\u4E2DselectCanVerifyNumOfLine&lt;0\u6821\u9A8C</td></tr><tr${_scopeId}><td${_scopeId}>\u53D1\u7968\u6838\u9500\u6570\u91CF\u8D85\u8FC7\u5269\u4F59\u53EF\u6838\u9500\u6570\u91CF</td><td${_scopeId}>\u63D0\u4EA4\u5BA1\u6279</td><td${_scopeId}>\u53D1\u7968\u660E\u7EC6\u672C\u6B21\u6838\u9500\u6570\u91CF\u8D85\u8FC7\u5269\u4F59\u53EF\u6838\u9500\u6570\u91CF\u3002\u8C03\u6574\u6838\u9500\u6570\u91CF</td><td${_scopeId}>\u9AD8</td><td${_scopeId}>checkWorkFlowData\u4E2DsurplusCanVeriferNumber&lt;0\u6821\u9A8C</td></tr></tbody></table><h4${_scopeId}>\u62A5\u95191\uFF1A\u672C\u6B21\u6838\u9500\u6570\u91CF\u7684\u5C0F\u6570\u4F4D\u4E0D\u80FD\u8D85\u8FC73\u4F4D</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u4FDD\u5B58\u6838\u9500\u65F6\uFF0C\u672C\u6B21\u6838\u9500\u6570\u91CF(THIS_VERIFER_NUMBER)\u5C0F\u6570\u4F4D\u8D85\u8FC73\u4F4D</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u4FDD\u5B58\u6821\u9A8C\u4E2D\u68C0\u67E5THIS_VERIFER_NUMBER\u7684\u5C0F\u6570\u4F4D\u6570\uFF0C\u8D85\u8FC73\u4F4D\u5219\u629B\u51FA\u963B\u65AD\u6027\u62A5\u9519\u3002\u9700\u8C03\u6574\u5C0F\u6570\u4F4D\u81F3\u22643\u4F4D</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> vid.VERIFER_INVOICE_DETAILS_ID, vid.THIS_VERIFER_NUMBER, vid.INVOICE_TRUTH_LINE_ID</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> EPM_VERIFER_INVOICE_DETAILS vid</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> vid.SA_OUT_BILL_HEAD_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> :saOutBillHeadId</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>LENGTH</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>(TO_CHAR(vid.THIS_VERIFER_NUMBER </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>-</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> TRUNC(vid.THIS_VERIFER_NUMBER))) </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>-</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>1</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>3</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- \u67E5\u51FA\u5C0F\u6570\u4F4D\u8D85\u8FC73\u4F4D\u7684\u6838\u9500\u660E\u7EC6</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95192\uFF1A\u53C2\u6570\u4E0D\u80FD\u4E3A\u7A7A</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u4FDD\u5B58\u6838\u9500\u65F6\uFF0C\u6838\u9500\u53C2\u6570(\u5982\u6838\u9500\u5355ID\u3001\u660E\u7EC6ID\u7B49)\u672A\u586B\u5199</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u4FDD\u5B58\u65B9\u6CD5\u4E2D\u6821\u9A8C\u5173\u952E\u53C2\u6570\u975E\u7A7A\uFF0C\u7F3A\u5931\u5219\u629B\u51FA\u963B\u65AD\u6027\u62A5\u9519\u3002\u9700\u8865\u5168\u6838\u9500\u53C2\u6570\u540E\u4FDD\u5B58</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> vid.VERIFER_INVOICE_DETAILS_ID, vid.VERIFER_INVOICE_ID, vid.INVOICE_TRUTH_LINE_ID,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         vid.THIS_VERIFER_NUMBER, vid.SA_OUT_BILL_HEAD_ID</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> EPM_VERIFER_INVOICE_DETAILS vid</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> vid.VERIFER_INVOICE_ID </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>     </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>OR</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> vid.INVOICE_TRUTH_LINE_ID </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>     </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>OR</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> vid.THIS_VERIFER_NUMBER </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- \u67E5\u51FA\u5173\u952E\u53C2\u6570\u4E3A\u7A7A\u7684\u6838\u9500\u660E\u7EC6</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95193\uFF1A\u6838\u9500\u6570\u91CF\u5FC5\u987B\u5927\u4E8E0</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u4FDD\u5B58\u6838\u9500\u65F6\uFF0C\u672C\u6B21\u6838\u9500\u6570\u91CF(THIS_VERIFER_NUMBER)\u22640</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u4FDD\u5B58\u6821\u9A8C\u4E2D\u68C0\u67E5THIS_VERIFER_NUMBER&gt;0\uFF0C\u56E0\u6838\u9500\u6570\u91CF\u5FC5\u987B\u4E3A\u6B63\u6570\u3002\u9700\u8C03\u6574\u6838\u9500\u6570\u91CF\u5927\u4E8E0</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> vid.VERIFER_INVOICE_DETAILS_ID, vid.THIS_VERIFER_NUMBER, vid.INVOICE_TRUTH_LINE_ID</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> EPM_VERIFER_INVOICE_DETAILS vid</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> vid.THIS_VERIFER_NUMBER </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&lt;=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>0</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- \u67E5\u51FA\u6838\u9500\u6570\u91CF\u22640\u7684\u5F02\u5E38\u6570\u636E</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95194\uFF1A\u6838\u9500\u6570\u91CF\u8D85\u8FC7\u5269\u4F59\u53EF\u6838\u9500\u6570\u91CF</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u4FDD\u5B58\u6838\u9500\u65F6\uFF0C\u672C\u6B21\u6838\u9500\u6570\u91CF(THIS_VERIFER_NUMBER)\u8D85\u8FC7\u5269\u4F59\u53EF\u6838\u9500\u6570\u91CF(SURPLUS_CAN_VERIFER_NUMBER)</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u4FDD\u5B58\u6821\u9A8C\u4E2D\u6309INVOICE_TRUTH_LINE_ID\u67E5\u8BE2\u5269\u4F59\u53EF\u6838\u9500\u6570\u91CF\uFF0C\u82E5THIS_VERIFER_NUMBER&gt;SURPLUS_CAN_VERIFER_NUMBER\u5219\u629B\u51FA\u963B\u65AD\u6027\u62A5\u9519\u3002\u9700\u8C03\u6574\u81F3\u5269\u4F59\u53EF\u6838\u9500\u8303\u56F4\u5185</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> vid.VERIFER_INVOICE_DETAILS_ID, vid.THIS_VERIFER_NUMBER,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         itl.SURPLUS_CAN_VERIFER_NUMBER, itl.CAN_VERIFER_NUMBER, itl.VERIFERED_NUMBER</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> EPM_VERIFER_INVOICE_DETAILS vid</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>JOIN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> EPM_INVOICE_TRUTH_LINE itl </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ON</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> vid.INVOICE_TRUTH_LINE_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> itl.INVOICE_TRUTH_LINE_ID</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> vid.THIS_VERIFER_NUMBER </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> itl.SURPLUS_CAN_VERIFER_NUMBER</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- \u67E5\u51FA\u6838\u9500\u6570\u91CF\u8D85\u9650\u7684\u660E\u7EC6</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95195\uFF1A\u53D1\u7968\u5FC5\u987B\u4E0A\u4F20</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u4FDD\u5B58\u6838\u9500\u65F6\uFF0C\u672A\u4E0A\u4F20\u6838\u9500\u53D1\u7968(\u53D1\u7968\u5173\u8054\u4E3A\u7A7A)</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u4FDD\u5B58\u6821\u9A8C\u4E2D\u68C0\u67E5\u53D1\u7968\u5173\u8054\u975E\u7A7A\uFF0C\u56E0\u6838\u9500\u5FC5\u987B\u5173\u8054\u5DF2\u4E0A\u4F20\u7684\u53D1\u7968\u3002\u9700\u5148\u4E0A\u4F20\u6838\u9500\u53D1\u7968\u518D\u4FDD\u5B58</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> vid.VERIFER_INVOICE_DETAILS_ID, vid.VERIFER_INVOICE_ID, vid.INVOICE_TRUTH_LINE_ID,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         ith.INVOICE_TRUTH_ID, ith.INVOICE_NO</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> EPM_VERIFER_INVOICE_DETAILS vid</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>LEFT JOIN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> EPM_INVOICE_TRUTH_HEADER ith </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ON</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> vid.INVOICE_TRUTH_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> ith.INVOICE_TRUTH_ID</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> vid.VERIFER_INVOICE_ID </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>OR</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> ith.INVOICE_TRUTH_ID </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- \u67E5\u51FA\u672A\u5173\u8054\u53D1\u7968\u7684\u6838\u9500\u660E\u7EC6</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95196\uFF1A\u6838\u9500\u884C\u4E0D\u5B58\u5728</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u4FDD\u5B58\u6838\u9500\u65F6\uFF0CINVOICE_TRUTH_LINE_ID\u5BF9\u5E94\u7684\u6838\u9500\u884C\u4E0D\u5B58\u5728</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u4FDD\u5B58\u6821\u9A8C\u4E2D\u6309INVOICE_TRUTH_LINE_ID\u67E5\u8BE2EPM_INVOICE_TRUTH_LINE\uFF0C\u82E5\u8FD4\u56DEnull\u5219\u629B\u51FA\u963B\u65AD\u6027\u62A5\u9519\u3002\u9700\u786E\u8BA4\u6838\u9500\u884C\u6709\u6548\u6027</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> vid.VERIFER_INVOICE_DETAILS_ID, vid.INVOICE_TRUTH_LINE_ID,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         itl.INVOICE_TRUTH_LINE_ID </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u6838\u9500\u884C\u5B58\u5728\u6027, itl.CAN_VERIFER_NUMBER</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> EPM_VERIFER_INVOICE_DETAILS vid</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>LEFT JOIN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> EPM_INVOICE_TRUTH_LINE itl </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ON</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> vid.INVOICE_TRUTH_LINE_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> itl.INVOICE_TRUTH_LINE_ID</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> itl.INVOICE_TRUTH_LINE_ID </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- \u67E5\u51FA\u6838\u9500\u884C\u4E0D\u5B58\u5728\u7684\u660E\u7EC6</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95197\uFF1A\u64CD\u4F5C\u7C7B\u578B\u4E0D\u80FD\u4E3A\u7A7A</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u53D6\u6D88\u6838\u9500\u65F6\uFF0CactionType\u53C2\u6570\u4E3A\u7A7A</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1Acancel\u65B9\u6CD5\u4E2D\u6821\u9A8CactionType\u975E\u7A7A\uFF0C\u56E0\u9700\u6839\u636E\u64CD\u4F5C\u7C7B\u578B\u786E\u5B9A\u53D6\u6D88\u8303\u56F4\u3002\u9700\u4F20\u5165\u5408\u6CD5actionType(invoice/invoiceDetail/invLine/veriferDetail/obsInvoice)</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> vid.VERIFER_INVOICE_DETAILS_ID, vid.EFFECT_STATUS, vid.ACTION_TYPE</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> EPM_VERIFER_INVOICE_DETAILS vid</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> vid.ACTION_TYPE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- \u67E5\u51FA\u64CD\u4F5C\u7C7B\u578B\u4E3A\u7A7A\u7684\u6838\u9500\u660E\u7EC6</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95198\uFF1A\u5BF9\u5E94\u5217\u8868id\u6570\u7EC4\u4E0D\u80FD\u4E3A\u7A7A</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u53D6\u6D88\u6838\u9500\u65F6\uFF0CidList\u53C2\u6570\u4E3A\u7A7A</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1Acancel\u65B9\u6CD5\u4E2D\u6821\u9A8CidList\u975E\u7A7A\uFF0C\u56E0\u9700\u6307\u5B9A\u8981\u53D6\u6D88\u7684\u6838\u9500\u660E\u7EC6ID\u5217\u8868\u3002\u9700\u4F20\u5165\u9700\u53D6\u6D88\u7684ID\u5217\u8868</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> vid.VERIFER_INVOICE_DETAILS_ID, vid.EFFECT_STATUS, vid.VERIFER_INVOICE_ID</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> EPM_VERIFER_INVOICE_DETAILS vid</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> vid.VERIFER_INVOICE_DETAILS_ID </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (:idList)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- \u6821\u9A8C\u4F20\u5165\u7684ID\u5217\u8868\u5BF9\u5E94\u6570\u636E\u662F\u5426\u5B58\u5728</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95199\uFF1A\u4E0D\u652F\u6301xxx\u64CD\u4F5C</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u53D6\u6D88\u6838\u9500\u65F6\uFF0CactionType\u4E0D\u57285\u79CD\u5408\u6CD5\u503C(invoice/invoiceDetail/invLine/veriferDetail/obsInvoice)\u8303\u56F4\u5185</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1Acancel\u65B9\u6CD5\u4E2D\u6821\u9A8CactionType\u5408\u6CD5\u6027\uFF0C\u4E0D\u57285\u79CD\u5408\u6CD5\u503C\u5185\u5219\u629B\u51FA\u963B\u65AD\u6027\u62A5\u9519\u3002\u9700\u4F20\u5165\u5408\u6CD5actionType</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> vid.VERIFER_INVOICE_DETAILS_ID, vid.ACTION_TYPE, vid.EFFECT_STATUS</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> EPM_VERIFER_INVOICE_DETAILS vid</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> vid.ACTION_TYPE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NOT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>invoice</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>invoiceDetail</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>invLine</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>veriferDetail</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>obsInvoice</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- \u67E5\u51FA\u64CD\u4F5C\u7C7B\u578B\u4E0D\u5408\u6CD5\u7684\u6838\u9500\u660E\u7EC6</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u951910\uFF1A\u6838\u9500\u53D6\u6D88\u6570\u636E\u4E3A\u7A7A</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u53D6\u6D88\u6838\u9500\u65F6\uFF0C\u6309\u6761\u4EF6\u67E5\u8BE2\u4E0D\u5230\u53EF\u53D6\u6D88\u7684\u6838\u9500\u660E\u7EC6</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1Acancel\u65B9\u6CD5\u4E2D\u6309actionType\u548CidList\u67E5\u8BE2\u53D7\u5F71\u54CD\u7684\u6838\u9500\u660E\u7EC6\uFF0C\u82E5\u4E3A\u7A7A\u5219\u629B\u51FA\u963B\u65AD\u6027\u62A5\u9519\u3002\u9700\u786E\u8BA4\u6570\u636E\u72B6\u6001</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> vid.VERIFER_INVOICE_DETAILS_ID, vid.EFFECT_STATUS, vid.VERIFER_INVOICE_ID,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         vid.INVOICE_TRUTH_LINE_ID, vid.SA_OUT_BILL_HEAD_ID</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> EPM_VERIFER_INVOICE_DETAILS vid</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> vid.VERIFER_INVOICE_DETAILS_ID </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (:idList)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> vid.EFFECT_STATUS </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>valid</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>invalid</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- \u82E5\u8FD4\u56DE\u7A7A\uFF0C\u8BF4\u660E\u65E0\u53EF\u53D6\u6D88\u7684\u6838\u9500\u660E\u7EC6</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u951911\uFF1A\u6838\u9500\u660E\u7EC6\u72B6\u6001\u5F02\u5E38,\u8BF7\u5237\u65B0\u6570\u636E\u540E\u91CD\u8BD5</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u53D6\u6D88\u6838\u9500\u65F6\uFF0C\u66F4\u65B0canceled\u72B6\u6001\u65F6\u5F71\u54CD\u884C\u6570\u4E0E\u9884\u671F\u4E0D\u4E00\u81F4</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1Acancel\u65B9\u6CD5\u4E2D\u66F4\u65B0EFFECT_STATUS\u4E3Acanceled\uFF0C\u82E5\u66F4\u65B0\u5F71\u54CD\u884C\u6570\u4E0E\u9884\u671F\u4E0D\u4E00\u81F4(\u5E76\u53D1\u4FEE\u6539\u6216\u6570\u636E\u5DF2\u88AB\u5176\u4ED6\u64CD\u4F5C\u53D8\u66F4)\u5219\u629B\u51FA\u963B\u65AD\u6027\u62A5\u9519\u3002\u9700\u5237\u65B0\u6570\u636E\u540E\u91CD\u8BD5</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> vid.VERIFER_INVOICE_DETAILS_ID, vid.EFFECT_STATUS, vid.LAST_UPDATE_DATE, vid.OBJECT_VERSION_NUMBER</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> EPM_VERIFER_INVOICE_DETAILS vid</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> vid.VERIFER_INVOICE_DETAILS_ID </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (:idList)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- \u68C0\u67E5\u6838\u9500\u660E\u7EC6\u5F53\u524D\u72B6\u6001\u548C\u7248\u672C\u53F7\uFF0C\u5224\u65AD\u662F\u5426\u88AB\u5E76\u53D1\u4FEE\u6539</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u951912\uFF1A\u66F4\u65B0\u5931\u8D25,\u53D6\u6D88\u540E\u51FA\u5E93\u5355\u884C\u5DF2\u6838\u9500\u6570\u91CF\u5C0F\u4E8E0</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u53D6\u6D88\u6838\u9500\u65F6\uFF0C\u53D6\u6D88\u6570\u91CF\u5927\u4E8E\u51FA\u5E93\u5355\u884C\u5DF2\u6838\u9500\u6570\u91CF</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1Acancel\u65B9\u6CD5\u4E2D\u66F4\u65B0INV_OUT_BILL_LINE\u7684\u5DF2\u6838\u9500\u6570\u91CF(\u539F\u5DF2\u6838\u9500\u6570\u91CF-\u53D6\u6D88\u6570\u91CF)\uFF0C\u82E5\u7ED3\u679C&lt;0\u5219\u629B\u51FA\u963B\u65AD\u6027\u62A5\u9519\u3002\u9700\u68C0\u67E5\u6570\u636E\u4E00\u81F4\u6027</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> iobl.INV_OUT_BILL_LINE_ID, iobl.VERIFERED_NUMBER, iobl.CAN_VERIFER_NUMBER,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         vid.THIS_VERIFER_NUMBER, vid.VERIFER_INVOICE_DETAILS_ID,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         iobl.VERIFERED_NUMBER </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>-</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> vid.THIS_VERIFER_NUMBER </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u53D6\u6D88\u540E\u5DF2\u6838\u9500\u6570\u91CF</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> EPM_VERIFER_INVOICE_DETAILS vid</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>JOIN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> INV_OUT_BILL_LINE iobl </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ON</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> vid.INV_OUT_BILL_LINE_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> iobl.INV_OUT_BILL_LINE_ID</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> vid.VERIFER_INVOICE_DETAILS_ID </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (:idList)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> iobl.VERIFERED_NUMBER </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>-</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> vid.THIS_VERIFER_NUMBER </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&lt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>0</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- \u67E5\u51FA\u53D6\u6D88\u540E\u5DF2\u6838\u9500\u6570\u91CF&lt;0\u7684\u5F02\u5E38\u6570\u636E</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u951913\uFF1A\u8BF7\u9009\u62E9\u6838\u9500\u7C7B\u578B</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u67E5\u8BE2\u51FA\u5E93\u5355(doSearchOutbillReport)\u6216\u67E5\u8BE2\u53D1\u7968\u4FE1\u606F(doGetInvoiceInfo)\u65F6\uFF0C\u672A\u9009\u62E9\u6838\u9500\u7C7B\u578B(VERIFER_TYPE\u4E3A\u7A7A)</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1AdoSearchOutbillReport\u548CdoGetInvoiceInfo\u65B9\u6CD5\u4E2D\u6821\u9A8CveriferType\u975E\u7A7A\uFF0C\u56E0\u6838\u9500\u7C7B\u578B\u51B3\u5B9A\u67E5\u8BE2\u51FA\u5E93\u5355\u7684SQL\u903B\u8F91(\u5DE5\u7A0B\u65B9queryProjectOutbillReportForInvoiceTruth/\u7ECF\u9500\u5546\u65B9queryDealerOutbillReportForInvoiceTruth)\u3002\u9700\u5148\u9009\u62E9\u6838\u9500\u7C7B\u578B\u518D\u67E5\u8BE2</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> ith.INVOICE_TRUTH_ID, ith.INVOICE_TRUTH_NO, ith.VERIFER_TYPE</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> EPM_INVOICE_TRUTH_HEADER ith</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> ith.VERIFER_TYPE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- \u67E5\u51FA\u6838\u9500\u7C7B\u578B\u4E3A\u7A7A\u7684\u6838\u9500\u5355</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u951914\uFF1A\u6838\u9500\u51FA\u5E93\u5355\u660E\u7EC6\u4E0D\u53EF\u4E3A\u7A7A</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u63D0\u4EA4\u5BA1\u6279\u65F6\uFF0C\u6838\u9500\u5355\u4E0B\u65E0\u6838\u9500\u884C\u6570\u636E(EPM_INVOICE_TRUTH_LINE\u4E3A\u7A7A)</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1AcheckWorkFlowData\u65B9\u6CD5\u4E2D\u6309INVOICE_TRUTH_ID\u67E5\u8BE2\u6838\u9500\u884C\u5217\u8868\uFF0C\u82E5\u4E3A\u7A7A\u5219\u629B\u51FA\u963B\u65AD\u6027\u62A5\u9519\u3002\u9700\u5148\u6DFB\u52A0\u6838\u9500\u884C\u518D\u63D0\u4EA4</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> ith.INVOICE_TRUTH_ID, ith.INVOICE_TRUTH_NO, ith.HZ_APPROVE_STATUS,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         (</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}>COUNT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>*</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> EPM_INVOICE_TRUTH_LINE itl</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>          </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> itl.INVOICE_TRUTH_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> ith.INVOICE_TRUTH_ID) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u6838\u9500\u884C\u6570</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> EPM_INVOICE_TRUTH_HEADER ith</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> ith.INVOICE_TRUTH_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> :invoiceTruthId</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- \u82E5\u6838\u9500\u884C\u6570\u4E3A0\uFF0C\u5219\u89E6\u53D1\u8BE5\u62A5\u9519</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u951915\uFF1A\u672C\u6B21\u6838\u9500\u6570\u91CF\u4E0D\u80FD\u5927\u4E8E\u53EF\u6838\u9500\u6570\u91CF</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u4FDD\u5B58\u6838\u9500\u65F6\uFF0C\u6838\u9500\u884C\u4E0B\u6240\u6709\u53D1\u7968\u660E\u7EC6\u7684\u672C\u6B21\u6838\u9500\u6570\u91CF\u5408\u8BA1\u8D85\u8FC7\u51FA\u5E93\u5355\u884C\u53EF\u6838\u9500\u6570\u91CF(CAN_VERIFY_NUM)</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1AcheckVeriferInvoice\u65B9\u6CD5\u4E2D\u7D2F\u8BA1\u6838\u9500\u884C\u4E0B\u6240\u6709\u53D1\u7968\u660E\u7EC6\u7684\u672C\u6B21\u6838\u9500\u6570\u91CF(sumThisVeriferNumber)\uFF0C\u82E5\u8D85\u8FC7\u51FA\u5E93\u5355\u884C\u53EF\u6838\u9500\u6570\u91CF(canVerifyNum)\u5219\u629B\u51FA\u963B\u65AD\u6027\u62A5\u9519\u3002\u4E0E&quot;\u6838\u9500\u6570\u91CF\u8D85\u8FC7\u5269\u4F59\u53EF\u6838\u9500\u6570\u91CF&quot;\u4E0D\u540C\uFF0C\u8BE5\u6821\u9A8C\u9488\u5BF9\u5355\u884C\u53D1\u7968\u660E\u7EC6\uFF0C\u672C\u6821\u9A8C\u9488\u5BF9\u6838\u9500\u884C\u5408\u8BA1</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> itl.INVOICE_TRUTH_LINE_ID, itl.INVBILLNO, itl.ITEM_CODE,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         itl.CAN_VERIFER_NUMBER, itl.SUR_VERIFY_NUM,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         (</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}>SUM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>(vid.THIS_VERIFER_NUMBER) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> EPM_VERIFER_INVOICE_DETAILS vid</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>          </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> vid.INVOICE_TRUTH_LINE_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> itl.INVOICE_TRUTH_LINE_ID) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5408\u8BA1\u6838\u9500\u6570\u91CF</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> EPM_INVOICE_TRUTH_LINE itl</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}>SUM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>(vid.THIS_VERIFER_NUMBER) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> EPM_VERIFER_INVOICE_DETAILS vid</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> vid.INVOICE_TRUTH_LINE_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> itl.INVOICE_TRUTH_LINE_ID) </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> itl.SUR_VERIFY_NUM</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- \u67E5\u51FA\u5408\u8BA1\u6838\u9500\u6570\u91CF\u8D85\u8FC7\u53EF\u6838\u9500\u6570\u91CF\u7684\u6838\u9500\u884C</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u951916\uFF1A\u5BF9\u5E94\u7684\u51FA\u5E93\u5355\u660E\u7EC6\u4E0D\u5B58\u5728</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u63D0\u4EA4\u5BA1\u6279\u65F6\uFF0C\u6838\u9500\u884C\u5173\u8054\u7684\u51FA\u5E93\u5355\u884C(INV_OUT_BILL_LINE_ID)\u4E0D\u5B58\u5728\u6216\u4E3A\u7A7A</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1AcheckWorkFlowData\u65B9\u6CD5\u4E2D\u904D\u5386\u6838\u9500\u884C\uFF0C\u82E5invOutBillLineId\u4E3A\u7A7A\u5219\u6536\u96C6\u9519\u8BEF\u4FE1\u606F\u5E76\u629B\u51FA\u963B\u65AD\u6027\u62A5\u9519\u3002\u9700\u786E\u8BA4\u51FA\u5E93\u5355\u884C\u6709\u6548\u6027</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> itl.INVOICE_TRUTH_LINE_ID, itl.INVBILLNO, itl.ITEM_CODE, itl.INV_OUT_BILL_LINE_ID</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> EPM_INVOICE_TRUTH_LINE itl</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> itl.INVOICE_TRUTH_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> :invoiceTruthId</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (itl.INV_OUT_BILL_LINE_ID </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>OR</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NOT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>EXISTS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>1</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> INV_OUT_BILL_LINE iobl</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>                        </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> iobl.INV_OUT_BILL_LINE_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> itl.INV_OUT_BILL_LINE_ID))</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- \u67E5\u51FA\u51FA\u5E93\u5355\u884C\u4E0D\u5B58\u5728\u7684\u6838\u9500\u884C</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u951917\uFF1A\u5BF9\u5E94\u7684\u51FA\u5E93\u5355\u660E\u7EC6\u53EF\u6838\u9500\u6570\u91CF\u4E0D\u8DB3</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u63D0\u4EA4\u5BA1\u6279\u65F6\uFF0C\u51FA\u5E93\u5355\u884C\u53EF\u6838\u9500\u6570\u91CF(selectCanVerifyNumOfLine)&lt;0</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1AcheckWorkFlowData\u65B9\u6CD5\u4E2D\u6309invOutBillLineId\u67E5\u8BE2\u51FA\u5E93\u5355\u884C\u53EF\u6838\u9500\u6570\u91CF\uFF0C\u82E5&lt;0\u5219\u6536\u96C6\u9519\u8BEF\u4FE1\u606F\u5E76\u629B\u51FA\u963B\u65AD\u6027\u62A5\u9519\u3002\u53EF\u80FD\u539F\u56E0\uFF1A\u5E76\u53D1\u6838\u9500\u5BFC\u81F4\u53EF\u6838\u9500\u6570\u91CF\u88AB\u5360\u7528\u3002\u9700\u68C0\u67E5\u51FA\u5E93\u5355\u884C\u53EF\u6838\u9500\u6570\u91CF</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> iobl.INV_OUT_BILL_LINE_ID, iobl.INV_BILL_NO, iobl.ITEM_CODE,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         iobl.CAN_VERIFY_NUM, iobl.USED_VERIFY_NUM,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         iobl.CAN_VERIFY_NUM </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>-</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> NVL(iobl.USED_VERIFY_NUM, </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>0</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5269\u4F59\u53EF\u6838\u9500\u6570\u91CF</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> INV_OUT_BILL_LINE iobl</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> iobl.INV_OUT_BILL_LINE_ID </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> itl.INV_OUT_BILL_LINE_ID </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> EPM_INVOICE_TRUTH_LINE itl</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> itl.INVOICE_TRUTH_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> :invoiceTruthId</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  )</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> iobl.CAN_VERIFY_NUM </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>-</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> NVL(iobl.USED_VERIFY_NUM, </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>0</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&lt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>0</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- \u67E5\u51FA\u53EF\u6838\u9500\u6570\u91CF\u4E0D\u8DB3\u7684\u51FA\u5E93\u5355\u884C</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u951918\uFF1A\u53D1\u7968\u6838\u9500\u6570\u91CF\u8D85\u8FC7\u5269\u4F59\u53EF\u6838\u9500\u6570\u91CF</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u63D0\u4EA4\u5BA1\u6279\u65F6\uFF0C\u53D1\u7968\u660E\u7EC6\u7684\u672C\u6B21\u6838\u9500\u6570\u91CF\u5408\u8BA1\u8D85\u8FC7\u53D1\u7968\u660E\u7EC6\u5269\u4F59\u53EF\u6838\u9500\u6570\u91CF(SURPLUS_CAN_VERIFER_NUMBER&lt;0)</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1AcheckWorkFlowData\u65B9\u6CD5\u4E2D\u6309\u53D1\u7968\u660E\u7EC6ID\u6C47\u603B\u672C\u6B21\u6838\u9500\u6570\u91CF\uFF0C\u67E5\u8BE2\u53D1\u7968\u660E\u7EC6\u5269\u4F59\u53EF\u6838\u9500\u6570\u91CF\uFF0C\u82E5\u5269\u4F59\u53EF\u6838\u9500\u6570\u91CF&lt;0\u5219\u6536\u96C6\u9519\u8BEF\u4FE1\u606F\u5E76\u629B\u51FA\u963B\u65AD\u6027\u62A5\u9519\u3002\u9700\u8C03\u6574\u6838\u9500\u6570\u91CF</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>uid</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>.INVOICE_DETAILS_ID, </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>uid</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>.INVOICE_NUMBER, </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>uid</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>.SERVICES_NAME,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>uid</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>.SURPLUS_CAN_VERIFER_NUMBER,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         (</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}>SUM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>(vid.THIS_VERIFER_NUMBER) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> EPM_VERIFER_INVOICE_DETAILS vid</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>          </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> vid.INVOICE_DETAILS_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>uid</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>.INVOICE_DETAILS_ID) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u672C\u6B21\u6838\u9500\u5408\u8BA1</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> EPM_UPLOAD_INVOICE_DETAILS </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>uid</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>uid</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>.INVOICE_DETAILS_ID </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> vid.INVOICE_DETAILS_ID </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> EPM_VERIFER_INVOICE_DETAILS vid</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>JOIN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> EPM_INVOICE_TRUTH_LINE itl </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ON</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> vid.INVOICE_TRUTH_LINE_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> itl.INVOICE_TRUTH_LINE_ID</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> itl.INVOICE_TRUTH_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> :invoiceTruthId</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  )</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>uid</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>.SURPLUS_CAN_VERIFER_NUMBER </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&lt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>0</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- \u67E5\u51FA\u5269\u4F59\u53EF\u6838\u9500\u6570\u91CF&lt;0\u7684\u53D1\u7968\u660E\u7EC6</span></span>
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
                createVNode("td", null, "\u672C\u6B21\u6838\u9500\u6570\u91CF\u7684\u5C0F\u6570\u4F4D\u4E0D\u80FD\u8D85\u8FC73\u4F4D"),
                createVNode("td", null, "\u4FDD\u5B58"),
                createVNode("td", null, "\u6838\u9500\u6570\u91CF\u7CBE\u5EA6\u8D85\u9650\u3002\u8C03\u6574\u5C0F\u6570\u4F4D\u81F3\u22643\u4F4D"),
                createVNode("td", null, "\u9AD8"),
                createVNode("td", null, "\u4FDD\u5B58\u65F6\u6821\u9A8CTHIS_VERIFER_NUMBER\u5C0F\u6570\u4F4D")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u53C2\u6570\u4E0D\u80FD\u4E3A\u7A7A"),
                createVNode("td", null, "\u4FDD\u5B58"),
                createVNode("td", null, "\u6838\u9500\u53C2\u6570\u672A\u586B\u5199\u3002\u8865\u5168\u6838\u9500\u53C2\u6570\u540E\u4FDD\u5B58"),
                createVNode("td", null, "\u9AD8"),
                createVNode("td", null, "\u4FDD\u5B58\u65F6\u53C2\u6570\u975E\u7A7A\u6821\u9A8C")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6838\u9500\u6570\u91CF\u5FC5\u987B\u5927\u4E8E0"),
                createVNode("td", null, "\u4FDD\u5B58"),
                createVNode("td", null, "\u6838\u9500\u6570\u91CF\u22640\u3002\u8C03\u6574\u6838\u9500\u6570\u91CF\u5927\u4E8E0"),
                createVNode("td", null, "\u9AD8"),
                createVNode("td", null, "\u4FDD\u5B58\u65F6\u6821\u9A8CTHIS_VERIFER_NUMBER>0")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6838\u9500\u6570\u91CF\u8D85\u8FC7\u5269\u4F59\u53EF\u6838\u9500\u6570\u91CF"),
                createVNode("td", null, "\u4FDD\u5B58"),
                createVNode("td", null, "\u672C\u6B21\u6838\u9500\u6570\u91CF\u8D85\u8FC7\u5269\u4F59\u53EF\u6838\u9500\u6570\u91CF\u3002\u8C03\u6574\u81F3\u5269\u4F59\u53EF\u6838\u9500\u8303\u56F4\u5185"),
                createVNode("td", null, "\u9AD8"),
                createVNode("td", null, "\u4FDD\u5B58\u65F6\u6821\u9A8CTHIS_VERIFER_NUMBER\u2264SURPLUS_CAN_VERIFER_NUMBER")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u53D1\u7968\u5FC5\u987B\u4E0A\u4F20"),
                createVNode("td", null, "\u4FDD\u5B58"),
                createVNode("td", null, "\u672A\u4E0A\u4F20\u6838\u9500\u53D1\u7968\u3002\u5148\u4E0A\u4F20\u6838\u9500\u53D1\u7968\u518D\u4FDD\u5B58"),
                createVNode("td", null, "\u9AD8"),
                createVNode("td", null, "\u4FDD\u5B58\u65F6\u6821\u9A8C\u53D1\u7968\u5173\u8054")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6838\u9500\u884C\u4E0D\u5B58\u5728"),
                createVNode("td", null, "\u4FDD\u5B58"),
                createVNode("td", null, "INVOICE_TRUTH_LINE_ID\u5BF9\u5E94\u6838\u9500\u884C\u4E0D\u5B58\u5728\u3002\u786E\u8BA4\u6838\u9500\u884C\u6709\u6548\u6027"),
                createVNode("td", null, "\u9AD8"),
                createVNode("td", null, "\u4FDD\u5B58\u65F6\u6821\u9A8C\u6838\u9500\u884C\u5B58\u5728")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u64CD\u4F5C\u7C7B\u578B\u4E0D\u80FD\u4E3A\u7A7A"),
                createVNode("td", null, "\u53D6\u6D88\u6838\u9500"),
                createVNode("td", null, "actionType\u53C2\u6570\u4E3A\u7A7A\u3002\u4F20\u5165\u5408\u6CD5actionType"),
                createVNode("td", null, "\u9AD8"),
                createVNode("td", null, "cancel\u65B9\u6CD5\u4E2DactionType\u975E\u7A7A\u6821\u9A8C")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5BF9\u5E94\u5217\u8868id\u6570\u7EC4\u4E0D\u80FD\u4E3A\u7A7A"),
                createVNode("td", null, "\u53D6\u6D88\u6838\u9500"),
                createVNode("td", null, "idList\u53C2\u6570\u4E3A\u7A7A\u3002\u4F20\u5165\u9700\u53D6\u6D88\u7684ID\u5217\u8868"),
                createVNode("td", null, "\u9AD8"),
                createVNode("td", null, "cancel\u65B9\u6CD5\u4E2DidList\u975E\u7A7A\u6821\u9A8C")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u4E0D\u652F\u6301xxx\u64CD\u4F5C"),
                createVNode("td", null, "\u53D6\u6D88\u6838\u9500"),
                createVNode("td", null, "actionType\u4E0D\u57285\u79CD\u5408\u6CD5\u503C\u8303\u56F4\u5185\u3002\u4F20\u5165\u5408\u6CD5actionType"),
                createVNode("td", null, "\u9AD8"),
                createVNode("td", null, "cancel\u65B9\u6CD5\u4E2DactionType\u5408\u6CD5\u6027\u6821\u9A8C")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6838\u9500\u53D6\u6D88\u6570\u636E\u4E3A\u7A7A"),
                createVNode("td", null, "\u53D6\u6D88\u6838\u9500"),
                createVNode("td", null, "\u6309\u6761\u4EF6\u67E5\u8BE2\u4E0D\u5230\u53EF\u53D6\u6D88\u7684\u6838\u9500\u660E\u7EC6\u3002\u786E\u8BA4\u6570\u636E\u72B6\u6001"),
                createVNode("td", null, "\u9AD8"),
                createVNode("td", null, "\u67E5\u8BE2\u53D7\u5F71\u54CD\u6838\u9500\u660E\u7EC6\u4E3A\u7A7A\u65F6\u629B\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6838\u9500\u660E\u7EC6\u72B6\u6001\u5F02\u5E38,\u8BF7\u5237\u65B0\u6570\u636E\u540E\u91CD\u8BD5"),
                createVNode("td", null, "\u53D6\u6D88\u6838\u9500"),
                createVNode("td", null, "\u66F4\u65B0canceled\u72B6\u6001\u65F6\u5F71\u54CD\u884C\u6570\u4E0E\u9884\u671F\u4E0D\u4E00\u81F4\u3002\u5237\u65B0\u6570\u636E\u540E\u91CD\u8BD5"),
                createVNode("td", null, "\u9AD8"),
                createVNode("td", null, "\u66F4\u65B0\u5F71\u54CD\u884C\u6570\u6821\u9A8C")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u66F4\u65B0\u5931\u8D25,\u53D6\u6D88\u540E\u51FA\u5E93\u5355\u884C\u5DF2\u6838\u9500\u6570\u91CF\u5C0F\u4E8E0"),
                createVNode("td", null, "\u53D6\u6D88\u6838\u9500"),
                createVNode("td", null, "\u53D6\u6D88\u6570\u91CF\u5927\u4E8E\u51FA\u5E93\u5355\u884C\u5DF2\u6838\u9500\u6570\u91CF\u3002\u68C0\u67E5\u6570\u636E\u4E00\u81F4\u6027"),
                createVNode("td", null, "\u9AD8"),
                createVNode("td", null, "\u51FA\u5E93\u5355\u884C\u5DF2\u6838\u9500\u6570\u91CF\u6821\u9A8C")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u8BF7\u9009\u62E9\u6838\u9500\u7C7B\u578B"),
                createVNode("td", null, "\u67E5\u8BE2\u51FA\u5E93\u5355/\u53D1\u7968"),
                createVNode("td", null, "\u672A\u9009\u62E9\u6838\u9500\u7C7B\u578B(veriferType)\u3002\u5148\u9009\u62E9\u6838\u9500\u7C7B\u578B\u518D\u67E5\u8BE2"),
                createVNode("td", null, "\u9AD8"),
                createVNode("td", null, "doSearchOutbillReport/doGetInvoiceInfo\u4E2DveriferType\u975E\u7A7A\u6821\u9A8C")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6838\u9500\u51FA\u5E93\u5355\u660E\u7EC6\u4E0D\u53EF\u4E3A\u7A7A"),
                createVNode("td", null, "\u63D0\u4EA4\u5BA1\u6279"),
                createVNode("td", null, "\u6838\u9500\u5355\u4E0B\u65E0\u6838\u9500\u884C\u6570\u636E\u3002\u5148\u6DFB\u52A0\u6838\u9500\u884C\u518D\u63D0\u4EA4"),
                createVNode("td", null, "\u9AD8"),
                createVNode("td", null, "checkWorkFlowData\u4E2D\u6838\u9500\u884C\u5217\u8868\u4E3A\u7A7A\u6821\u9A8C")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u672C\u6B21\u6838\u9500\u6570\u91CF\u4E0D\u80FD\u5927\u4E8E\u53EF\u6838\u9500\u6570\u91CF"),
                createVNode("td", null, "\u4FDD\u5B58"),
                createVNode("td", null, "\u6838\u9500\u884C\u672C\u6B21\u6838\u9500\u6570\u91CF\u5408\u8BA1\u8D85\u8FC7\u51FA\u5E93\u5355\u884C\u53EF\u6838\u9500\u6570\u91CF\u3002\u8C03\u6574\u6838\u9500\u6570\u91CF"),
                createVNode("td", null, "\u9AD8"),
                createVNode("td", null, "checkVeriferInvoice\u4E2DsumThisVeriferNumber>canVerifyNum\u6821\u9A8C")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5BF9\u5E94\u7684\u51FA\u5E93\u5355\u660E\u7EC6\u4E0D\u5B58\u5728"),
                createVNode("td", null, "\u63D0\u4EA4\u5BA1\u6279"),
                createVNode("td", null, "\u6838\u9500\u884C\u5173\u8054\u7684\u51FA\u5E93\u5355\u884C(INV_OUT_BILL_LINE_ID)\u4E0D\u5B58\u5728\u3002\u786E\u8BA4\u51FA\u5E93\u5355\u884C\u6709\u6548\u6027"),
                createVNode("td", null, "\u9AD8"),
                createVNode("td", null, "checkWorkFlowData\u4E2DinvOutBillLineId\u4E3A\u7A7A\u6821\u9A8C")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5BF9\u5E94\u7684\u51FA\u5E93\u5355\u660E\u7EC6\u53EF\u6838\u9500\u6570\u91CF\u4E0D\u8DB3"),
                createVNode("td", null, "\u63D0\u4EA4\u5BA1\u6279"),
                createVNode("td", null, "\u51FA\u5E93\u5355\u884C\u53EF\u6838\u9500\u6570\u91CF<0\u3002\u68C0\u67E5\u51FA\u5E93\u5355\u884C\u53EF\u6838\u9500\u6570\u91CF"),
                createVNode("td", null, "\u9AD8"),
                createVNode("td", null, "checkWorkFlowData\u4E2DselectCanVerifyNumOfLine<0\u6821\u9A8C")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u53D1\u7968\u6838\u9500\u6570\u91CF\u8D85\u8FC7\u5269\u4F59\u53EF\u6838\u9500\u6570\u91CF"),
                createVNode("td", null, "\u63D0\u4EA4\u5BA1\u6279"),
                createVNode("td", null, "\u53D1\u7968\u660E\u7EC6\u672C\u6B21\u6838\u9500\u6570\u91CF\u8D85\u8FC7\u5269\u4F59\u53EF\u6838\u9500\u6570\u91CF\u3002\u8C03\u6574\u6838\u9500\u6570\u91CF"),
                createVNode("td", null, "\u9AD8"),
                createVNode("td", null, "checkWorkFlowData\u4E2DsurplusCanVeriferNumber<0\u6821\u9A8C")
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95191\uFF1A\u672C\u6B21\u6838\u9500\u6570\u91CF\u7684\u5C0F\u6570\u4F4D\u4E0D\u80FD\u8D85\u8FC73\u4F4D"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u4FDD\u5B58\u6838\u9500\u65F6\uFF0C\u672C\u6B21\u6838\u9500\u6570\u91CF(THIS_VERIFER_NUMBER)\u5C0F\u6570\u4F4D\u8D85\u8FC73\u4F4D")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u4FDD\u5B58\u6821\u9A8C\u4E2D\u68C0\u67E5THIS_VERIFER_NUMBER\u7684\u5C0F\u6570\u4F4D\u6570\uFF0C\u8D85\u8FC73\u4F4D\u5219\u629B\u51FA\u963B\u65AD\u6027\u62A5\u9519\u3002\u9700\u8C03\u6574\u5C0F\u6570\u4F4D\u81F3\u22643\u4F4D")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " vid.VERIFER_INVOICE_DETAILS_ID, vid.THIS_VERIFER_NUMBER, vid.INVOICE_TRUTH_LINE_ID")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " EPM_VERIFER_INVOICE_DETAILS vid")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " vid.SA_OUT_BILL_HEAD_ID "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " :saOutBillHeadId")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "LENGTH"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "(TO_CHAR(vid.THIS_VERIFER_NUMBER "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "-"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " TRUNC(vid.THIS_VERIFER_NUMBER))) "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "-"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "1"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "3")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#89DDFF" } }, "  "),
                  createVNode("span", { style: { "color": "#676E95" } }, "-- \u67E5\u51FA\u5C0F\u6570\u4F4D\u8D85\u8FC73\u4F4D\u7684\u6838\u9500\u660E\u7EC6")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95192\uFF1A\u53C2\u6570\u4E0D\u80FD\u4E3A\u7A7A"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u4FDD\u5B58\u6838\u9500\u65F6\uFF0C\u6838\u9500\u53C2\u6570(\u5982\u6838\u9500\u5355ID\u3001\u660E\u7EC6ID\u7B49)\u672A\u586B\u5199")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u4FDD\u5B58\u65B9\u6CD5\u4E2D\u6821\u9A8C\u5173\u952E\u53C2\u6570\u975E\u7A7A\uFF0C\u7F3A\u5931\u5219\u629B\u51FA\u963B\u65AD\u6027\u62A5\u9519\u3002\u9700\u8865\u5168\u6838\u9500\u53C2\u6570\u540E\u4FDD\u5B58")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " vid.VERIFER_INVOICE_DETAILS_ID, vid.VERIFER_INVOICE_ID, vid.INVOICE_TRUTH_LINE_ID,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         vid.THIS_VERIFER_NUMBER, vid.SA_OUT_BILL_HEAD_ID")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " EPM_VERIFER_INVOICE_DETAILS vid")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " vid.VERIFER_INVOICE_ID "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NULL")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "     "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "OR"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " vid.INVOICE_TRUTH_LINE_ID "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NULL")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "     "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "OR"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " vid.THIS_VERIFER_NUMBER "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NULL")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#89DDFF" } }, "  "),
                  createVNode("span", { style: { "color": "#676E95" } }, "-- \u67E5\u51FA\u5173\u952E\u53C2\u6570\u4E3A\u7A7A\u7684\u6838\u9500\u660E\u7EC6")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95193\uFF1A\u6838\u9500\u6570\u91CF\u5FC5\u987B\u5927\u4E8E0"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u4FDD\u5B58\u6838\u9500\u65F6\uFF0C\u672C\u6B21\u6838\u9500\u6570\u91CF(THIS_VERIFER_NUMBER)\u22640")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u4FDD\u5B58\u6821\u9A8C\u4E2D\u68C0\u67E5THIS_VERIFER_NUMBER>0\uFF0C\u56E0\u6838\u9500\u6570\u91CF\u5FC5\u987B\u4E3A\u6B63\u6570\u3002\u9700\u8C03\u6574\u6838\u9500\u6570\u91CF\u5927\u4E8E0")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " vid.VERIFER_INVOICE_DETAILS_ID, vid.THIS_VERIFER_NUMBER, vid.INVOICE_TRUTH_LINE_ID")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " EPM_VERIFER_INVOICE_DETAILS vid")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " vid.THIS_VERIFER_NUMBER "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "<="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "0")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#89DDFF" } }, "  "),
                  createVNode("span", { style: { "color": "#676E95" } }, "-- \u67E5\u51FA\u6838\u9500\u6570\u91CF\u22640\u7684\u5F02\u5E38\u6570\u636E")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95194\uFF1A\u6838\u9500\u6570\u91CF\u8D85\u8FC7\u5269\u4F59\u53EF\u6838\u9500\u6570\u91CF"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u4FDD\u5B58\u6838\u9500\u65F6\uFF0C\u672C\u6B21\u6838\u9500\u6570\u91CF(THIS_VERIFER_NUMBER)\u8D85\u8FC7\u5269\u4F59\u53EF\u6838\u9500\u6570\u91CF(SURPLUS_CAN_VERIFER_NUMBER)")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u4FDD\u5B58\u6821\u9A8C\u4E2D\u6309INVOICE_TRUTH_LINE_ID\u67E5\u8BE2\u5269\u4F59\u53EF\u6838\u9500\u6570\u91CF\uFF0C\u82E5THIS_VERIFER_NUMBER>SURPLUS_CAN_VERIFER_NUMBER\u5219\u629B\u51FA\u963B\u65AD\u6027\u62A5\u9519\u3002\u9700\u8C03\u6574\u81F3\u5269\u4F59\u53EF\u6838\u9500\u8303\u56F4\u5185")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " vid.VERIFER_INVOICE_DETAILS_ID, vid.THIS_VERIFER_NUMBER,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         itl.SURPLUS_CAN_VERIFER_NUMBER, itl.CAN_VERIFER_NUMBER, itl.VERIFERED_NUMBER")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " EPM_VERIFER_INVOICE_DETAILS vid")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "JOIN"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " EPM_INVOICE_TRUTH_LINE itl "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ON"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " vid.INVOICE_TRUTH_LINE_ID "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " itl.INVOICE_TRUTH_LINE_ID")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " vid.THIS_VERIFER_NUMBER "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " itl.SURPLUS_CAN_VERIFER_NUMBER")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#89DDFF" } }, "  "),
                  createVNode("span", { style: { "color": "#676E95" } }, "-- \u67E5\u51FA\u6838\u9500\u6570\u91CF\u8D85\u9650\u7684\u660E\u7EC6")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95195\uFF1A\u53D1\u7968\u5FC5\u987B\u4E0A\u4F20"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u4FDD\u5B58\u6838\u9500\u65F6\uFF0C\u672A\u4E0A\u4F20\u6838\u9500\u53D1\u7968(\u53D1\u7968\u5173\u8054\u4E3A\u7A7A)")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u4FDD\u5B58\u6821\u9A8C\u4E2D\u68C0\u67E5\u53D1\u7968\u5173\u8054\u975E\u7A7A\uFF0C\u56E0\u6838\u9500\u5FC5\u987B\u5173\u8054\u5DF2\u4E0A\u4F20\u7684\u53D1\u7968\u3002\u9700\u5148\u4E0A\u4F20\u6838\u9500\u53D1\u7968\u518D\u4FDD\u5B58")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " vid.VERIFER_INVOICE_DETAILS_ID, vid.VERIFER_INVOICE_ID, vid.INVOICE_TRUTH_LINE_ID,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         ith.INVOICE_TRUTH_ID, ith.INVOICE_NO")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " EPM_VERIFER_INVOICE_DETAILS vid")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "LEFT JOIN"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " EPM_INVOICE_TRUTH_HEADER ith "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ON"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " vid.INVOICE_TRUTH_ID "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " ith.INVOICE_TRUTH_ID")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " vid.VERIFER_INVOICE_ID "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NULL"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "OR"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " ith.INVOICE_TRUTH_ID "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NULL")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#89DDFF" } }, "  "),
                  createVNode("span", { style: { "color": "#676E95" } }, "-- \u67E5\u51FA\u672A\u5173\u8054\u53D1\u7968\u7684\u6838\u9500\u660E\u7EC6")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95196\uFF1A\u6838\u9500\u884C\u4E0D\u5B58\u5728"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u4FDD\u5B58\u6838\u9500\u65F6\uFF0CINVOICE_TRUTH_LINE_ID\u5BF9\u5E94\u7684\u6838\u9500\u884C\u4E0D\u5B58\u5728")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u4FDD\u5B58\u6821\u9A8C\u4E2D\u6309INVOICE_TRUTH_LINE_ID\u67E5\u8BE2EPM_INVOICE_TRUTH_LINE\uFF0C\u82E5\u8FD4\u56DEnull\u5219\u629B\u51FA\u963B\u65AD\u6027\u62A5\u9519\u3002\u9700\u786E\u8BA4\u6838\u9500\u884C\u6709\u6548\u6027")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " vid.VERIFER_INVOICE_DETAILS_ID, vid.INVOICE_TRUTH_LINE_ID,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         itl.INVOICE_TRUTH_LINE_ID "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u6838\u9500\u884C\u5B58\u5728\u6027, itl.CAN_VERIFER_NUMBER")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " EPM_VERIFER_INVOICE_DETAILS vid")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "LEFT JOIN"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " EPM_INVOICE_TRUTH_LINE itl "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ON"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " vid.INVOICE_TRUTH_LINE_ID "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " itl.INVOICE_TRUTH_LINE_ID")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " itl.INVOICE_TRUTH_LINE_ID "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NULL")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#89DDFF" } }, "  "),
                  createVNode("span", { style: { "color": "#676E95" } }, "-- \u67E5\u51FA\u6838\u9500\u884C\u4E0D\u5B58\u5728\u7684\u660E\u7EC6")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95197\uFF1A\u64CD\u4F5C\u7C7B\u578B\u4E0D\u80FD\u4E3A\u7A7A"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u53D6\u6D88\u6838\u9500\u65F6\uFF0CactionType\u53C2\u6570\u4E3A\u7A7A")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1Acancel\u65B9\u6CD5\u4E2D\u6821\u9A8CactionType\u975E\u7A7A\uFF0C\u56E0\u9700\u6839\u636E\u64CD\u4F5C\u7C7B\u578B\u786E\u5B9A\u53D6\u6D88\u8303\u56F4\u3002\u9700\u4F20\u5165\u5408\u6CD5actionType(invoice/invoiceDetail/invLine/veriferDetail/obsInvoice)")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " vid.VERIFER_INVOICE_DETAILS_ID, vid.EFFECT_STATUS, vid.ACTION_TYPE")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " EPM_VERIFER_INVOICE_DETAILS vid")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " vid.ACTION_TYPE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NULL")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#89DDFF" } }, "  "),
                  createVNode("span", { style: { "color": "#676E95" } }, "-- \u67E5\u51FA\u64CD\u4F5C\u7C7B\u578B\u4E3A\u7A7A\u7684\u6838\u9500\u660E\u7EC6")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95198\uFF1A\u5BF9\u5E94\u5217\u8868id\u6570\u7EC4\u4E0D\u80FD\u4E3A\u7A7A"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u53D6\u6D88\u6838\u9500\u65F6\uFF0CidList\u53C2\u6570\u4E3A\u7A7A")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1Acancel\u65B9\u6CD5\u4E2D\u6821\u9A8CidList\u975E\u7A7A\uFF0C\u56E0\u9700\u6307\u5B9A\u8981\u53D6\u6D88\u7684\u6838\u9500\u660E\u7EC6ID\u5217\u8868\u3002\u9700\u4F20\u5165\u9700\u53D6\u6D88\u7684ID\u5217\u8868")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " vid.VERIFER_INVOICE_DETAILS_ID, vid.EFFECT_STATUS, vid.VERIFER_INVOICE_ID")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " EPM_VERIFER_INVOICE_DETAILS vid")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " vid.VERIFER_INVOICE_DETAILS_ID "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IN"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " (:idList)")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#89DDFF" } }, "  "),
                  createVNode("span", { style: { "color": "#676E95" } }, "-- \u6821\u9A8C\u4F20\u5165\u7684ID\u5217\u8868\u5BF9\u5E94\u6570\u636E\u662F\u5426\u5B58\u5728")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95199\uFF1A\u4E0D\u652F\u6301xxx\u64CD\u4F5C"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u53D6\u6D88\u6838\u9500\u65F6\uFF0CactionType\u4E0D\u57285\u79CD\u5408\u6CD5\u503C(invoice/invoiceDetail/invLine/veriferDetail/obsInvoice)\u8303\u56F4\u5185")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1Acancel\u65B9\u6CD5\u4E2D\u6821\u9A8CactionType\u5408\u6CD5\u6027\uFF0C\u4E0D\u57285\u79CD\u5408\u6CD5\u503C\u5185\u5219\u629B\u51FA\u963B\u65AD\u6027\u62A5\u9519\u3002\u9700\u4F20\u5165\u5408\u6CD5actionType")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " vid.VERIFER_INVOICE_DETAILS_ID, vid.ACTION_TYPE, vid.EFFECT_STATUS")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " EPM_VERIFER_INVOICE_DETAILS vid")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " vid.ACTION_TYPE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NOT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IN"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " ("),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "invoice"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ", "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "invoiceDetail"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ", "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "invLine"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ", "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "veriferDetail"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ", "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "obsInvoice"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ")")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#89DDFF" } }, "  "),
                  createVNode("span", { style: { "color": "#676E95" } }, "-- \u67E5\u51FA\u64CD\u4F5C\u7C7B\u578B\u4E0D\u5408\u6CD5\u7684\u6838\u9500\u660E\u7EC6")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u951910\uFF1A\u6838\u9500\u53D6\u6D88\u6570\u636E\u4E3A\u7A7A"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u53D6\u6D88\u6838\u9500\u65F6\uFF0C\u6309\u6761\u4EF6\u67E5\u8BE2\u4E0D\u5230\u53EF\u53D6\u6D88\u7684\u6838\u9500\u660E\u7EC6")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1Acancel\u65B9\u6CD5\u4E2D\u6309actionType\u548CidList\u67E5\u8BE2\u53D7\u5F71\u54CD\u7684\u6838\u9500\u660E\u7EC6\uFF0C\u82E5\u4E3A\u7A7A\u5219\u629B\u51FA\u963B\u65AD\u6027\u62A5\u9519\u3002\u9700\u786E\u8BA4\u6570\u636E\u72B6\u6001")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " vid.VERIFER_INVOICE_DETAILS_ID, vid.EFFECT_STATUS, vid.VERIFER_INVOICE_ID,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         vid.INVOICE_TRUTH_LINE_ID, vid.SA_OUT_BILL_HEAD_ID")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " EPM_VERIFER_INVOICE_DETAILS vid")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " vid.VERIFER_INVOICE_DETAILS_ID "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IN"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " (:idList)")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " vid.EFFECT_STATUS "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IN"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " ("),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "valid"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ", "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "invalid"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ")")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#89DDFF" } }, "  "),
                  createVNode("span", { style: { "color": "#676E95" } }, "-- \u82E5\u8FD4\u56DE\u7A7A\uFF0C\u8BF4\u660E\u65E0\u53EF\u53D6\u6D88\u7684\u6838\u9500\u660E\u7EC6")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u951911\uFF1A\u6838\u9500\u660E\u7EC6\u72B6\u6001\u5F02\u5E38,\u8BF7\u5237\u65B0\u6570\u636E\u540E\u91CD\u8BD5"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u53D6\u6D88\u6838\u9500\u65F6\uFF0C\u66F4\u65B0canceled\u72B6\u6001\u65F6\u5F71\u54CD\u884C\u6570\u4E0E\u9884\u671F\u4E0D\u4E00\u81F4")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1Acancel\u65B9\u6CD5\u4E2D\u66F4\u65B0EFFECT_STATUS\u4E3Acanceled\uFF0C\u82E5\u66F4\u65B0\u5F71\u54CD\u884C\u6570\u4E0E\u9884\u671F\u4E0D\u4E00\u81F4(\u5E76\u53D1\u4FEE\u6539\u6216\u6570\u636E\u5DF2\u88AB\u5176\u4ED6\u64CD\u4F5C\u53D8\u66F4)\u5219\u629B\u51FA\u963B\u65AD\u6027\u62A5\u9519\u3002\u9700\u5237\u65B0\u6570\u636E\u540E\u91CD\u8BD5")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " vid.VERIFER_INVOICE_DETAILS_ID, vid.EFFECT_STATUS, vid.LAST_UPDATE_DATE, vid.OBJECT_VERSION_NUMBER")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " EPM_VERIFER_INVOICE_DETAILS vid")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " vid.VERIFER_INVOICE_DETAILS_ID "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IN"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " (:idList)")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#89DDFF" } }, "  "),
                  createVNode("span", { style: { "color": "#676E95" } }, "-- \u68C0\u67E5\u6838\u9500\u660E\u7EC6\u5F53\u524D\u72B6\u6001\u548C\u7248\u672C\u53F7\uFF0C\u5224\u65AD\u662F\u5426\u88AB\u5E76\u53D1\u4FEE\u6539")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u951912\uFF1A\u66F4\u65B0\u5931\u8D25,\u53D6\u6D88\u540E\u51FA\u5E93\u5355\u884C\u5DF2\u6838\u9500\u6570\u91CF\u5C0F\u4E8E0"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u53D6\u6D88\u6838\u9500\u65F6\uFF0C\u53D6\u6D88\u6570\u91CF\u5927\u4E8E\u51FA\u5E93\u5355\u884C\u5DF2\u6838\u9500\u6570\u91CF")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1Acancel\u65B9\u6CD5\u4E2D\u66F4\u65B0INV_OUT_BILL_LINE\u7684\u5DF2\u6838\u9500\u6570\u91CF(\u539F\u5DF2\u6838\u9500\u6570\u91CF-\u53D6\u6D88\u6570\u91CF)\uFF0C\u82E5\u7ED3\u679C<0\u5219\u629B\u51FA\u963B\u65AD\u6027\u62A5\u9519\u3002\u9700\u68C0\u67E5\u6570\u636E\u4E00\u81F4\u6027")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " iobl.INV_OUT_BILL_LINE_ID, iobl.VERIFERED_NUMBER, iobl.CAN_VERIFER_NUMBER,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         vid.THIS_VERIFER_NUMBER, vid.VERIFER_INVOICE_DETAILS_ID,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         iobl.VERIFERED_NUMBER "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "-"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " vid.THIS_VERIFER_NUMBER "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u53D6\u6D88\u540E\u5DF2\u6838\u9500\u6570\u91CF")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " EPM_VERIFER_INVOICE_DETAILS vid")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "JOIN"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " INV_OUT_BILL_LINE iobl "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ON"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " vid.INV_OUT_BILL_LINE_ID "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " iobl.INV_OUT_BILL_LINE_ID")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " vid.VERIFER_INVOICE_DETAILS_ID "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IN"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " (:idList)")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " iobl.VERIFERED_NUMBER "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "-"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " vid.THIS_VERIFER_NUMBER "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "0")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#89DDFF" } }, "  "),
                  createVNode("span", { style: { "color": "#676E95" } }, "-- \u67E5\u51FA\u53D6\u6D88\u540E\u5DF2\u6838\u9500\u6570\u91CF<0\u7684\u5F02\u5E38\u6570\u636E")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u951913\uFF1A\u8BF7\u9009\u62E9\u6838\u9500\u7C7B\u578B"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u67E5\u8BE2\u51FA\u5E93\u5355(doSearchOutbillReport)\u6216\u67E5\u8BE2\u53D1\u7968\u4FE1\u606F(doGetInvoiceInfo)\u65F6\uFF0C\u672A\u9009\u62E9\u6838\u9500\u7C7B\u578B(VERIFER_TYPE\u4E3A\u7A7A)")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1AdoSearchOutbillReport\u548CdoGetInvoiceInfo\u65B9\u6CD5\u4E2D\u6821\u9A8CveriferType\u975E\u7A7A\uFF0C\u56E0\u6838\u9500\u7C7B\u578B\u51B3\u5B9A\u67E5\u8BE2\u51FA\u5E93\u5355\u7684SQL\u903B\u8F91(\u5DE5\u7A0B\u65B9queryProjectOutbillReportForInvoiceTruth/\u7ECF\u9500\u5546\u65B9queryDealerOutbillReportForInvoiceTruth)\u3002\u9700\u5148\u9009\u62E9\u6838\u9500\u7C7B\u578B\u518D\u67E5\u8BE2")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " ith.INVOICE_TRUTH_ID, ith.INVOICE_TRUTH_NO, ith.VERIFER_TYPE")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " EPM_INVOICE_TRUTH_HEADER ith")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " ith.VERIFER_TYPE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NULL")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#89DDFF" } }, "  "),
                  createVNode("span", { style: { "color": "#676E95" } }, "-- \u67E5\u51FA\u6838\u9500\u7C7B\u578B\u4E3A\u7A7A\u7684\u6838\u9500\u5355")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u951914\uFF1A\u6838\u9500\u51FA\u5E93\u5355\u660E\u7EC6\u4E0D\u53EF\u4E3A\u7A7A"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u63D0\u4EA4\u5BA1\u6279\u65F6\uFF0C\u6838\u9500\u5355\u4E0B\u65E0\u6838\u9500\u884C\u6570\u636E(EPM_INVOICE_TRUTH_LINE\u4E3A\u7A7A)")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1AcheckWorkFlowData\u65B9\u6CD5\u4E2D\u6309INVOICE_TRUTH_ID\u67E5\u8BE2\u6838\u9500\u884C\u5217\u8868\uFF0C\u82E5\u4E3A\u7A7A\u5219\u629B\u51FA\u963B\u65AD\u6027\u62A5\u9519\u3002\u9700\u5148\u6DFB\u52A0\u6838\u9500\u884C\u518D\u63D0\u4EA4")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " ith.INVOICE_TRUTH_ID, ith.INVOICE_TRUTH_NO, ith.HZ_APPROVE_STATUS,")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " EPM_INVOICE_TRUTH_LINE itl")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "          "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " itl.INVOICE_TRUTH_ID "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " ith.INVOICE_TRUTH_ID) "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u6838\u9500\u884C\u6570")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " EPM_INVOICE_TRUTH_HEADER ith")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " ith.INVOICE_TRUTH_ID "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " :invoiceTruthId")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#89DDFF" } }, "  "),
                  createVNode("span", { style: { "color": "#676E95" } }, "-- \u82E5\u6838\u9500\u884C\u6570\u4E3A0\uFF0C\u5219\u89E6\u53D1\u8BE5\u62A5\u9519")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u951915\uFF1A\u672C\u6B21\u6838\u9500\u6570\u91CF\u4E0D\u80FD\u5927\u4E8E\u53EF\u6838\u9500\u6570\u91CF"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u4FDD\u5B58\u6838\u9500\u65F6\uFF0C\u6838\u9500\u884C\u4E0B\u6240\u6709\u53D1\u7968\u660E\u7EC6\u7684\u672C\u6B21\u6838\u9500\u6570\u91CF\u5408\u8BA1\u8D85\u8FC7\u51FA\u5E93\u5355\u884C\u53EF\u6838\u9500\u6570\u91CF(CAN_VERIFY_NUM)")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode('\uFF1AcheckVeriferInvoice\u65B9\u6CD5\u4E2D\u7D2F\u8BA1\u6838\u9500\u884C\u4E0B\u6240\u6709\u53D1\u7968\u660E\u7EC6\u7684\u672C\u6B21\u6838\u9500\u6570\u91CF(sumThisVeriferNumber)\uFF0C\u82E5\u8D85\u8FC7\u51FA\u5E93\u5355\u884C\u53EF\u6838\u9500\u6570\u91CF(canVerifyNum)\u5219\u629B\u51FA\u963B\u65AD\u6027\u62A5\u9519\u3002\u4E0E"\u6838\u9500\u6570\u91CF\u8D85\u8FC7\u5269\u4F59\u53EF\u6838\u9500\u6570\u91CF"\u4E0D\u540C\uFF0C\u8BE5\u6821\u9A8C\u9488\u5BF9\u5355\u884C\u53D1\u7968\u660E\u7EC6\uFF0C\u672C\u6821\u9A8C\u9488\u5BF9\u6838\u9500\u884C\u5408\u8BA1')
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " itl.INVOICE_TRUTH_LINE_ID, itl.INVBILLNO, itl.ITEM_CODE,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         itl.CAN_VERIFER_NUMBER, itl.SUR_VERIFY_NUM,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         ("),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "SELECT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#82AAFF" } }, "SUM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "(vid.THIS_VERIFER_NUMBER) "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " EPM_VERIFER_INVOICE_DETAILS vid")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "          "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " vid.INVOICE_TRUTH_LINE_ID "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " itl.INVOICE_TRUTH_LINE_ID) "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5408\u8BA1\u6838\u9500\u6570\u91CF")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " EPM_INVOICE_TRUTH_LINE itl")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " ("),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "SELECT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#82AAFF" } }, "SUM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "(vid.THIS_VERIFER_NUMBER) "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " EPM_VERIFER_INVOICE_DETAILS vid")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " vid.INVOICE_TRUTH_LINE_ID "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " itl.INVOICE_TRUTH_LINE_ID) "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " itl.SUR_VERIFY_NUM")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#89DDFF" } }, "  "),
                  createVNode("span", { style: { "color": "#676E95" } }, "-- \u67E5\u51FA\u5408\u8BA1\u6838\u9500\u6570\u91CF\u8D85\u8FC7\u53EF\u6838\u9500\u6570\u91CF\u7684\u6838\u9500\u884C")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u951916\uFF1A\u5BF9\u5E94\u7684\u51FA\u5E93\u5355\u660E\u7EC6\u4E0D\u5B58\u5728"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u63D0\u4EA4\u5BA1\u6279\u65F6\uFF0C\u6838\u9500\u884C\u5173\u8054\u7684\u51FA\u5E93\u5355\u884C(INV_OUT_BILL_LINE_ID)\u4E0D\u5B58\u5728\u6216\u4E3A\u7A7A")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1AcheckWorkFlowData\u65B9\u6CD5\u4E2D\u904D\u5386\u6838\u9500\u884C\uFF0C\u82E5invOutBillLineId\u4E3A\u7A7A\u5219\u6536\u96C6\u9519\u8BEF\u4FE1\u606F\u5E76\u629B\u51FA\u963B\u65AD\u6027\u62A5\u9519\u3002\u9700\u786E\u8BA4\u51FA\u5E93\u5355\u884C\u6709\u6548\u6027")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " itl.INVOICE_TRUTH_LINE_ID, itl.INVBILLNO, itl.ITEM_CODE, itl.INV_OUT_BILL_LINE_ID")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " EPM_INVOICE_TRUTH_LINE itl")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " itl.INVOICE_TRUTH_ID "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " :invoiceTruthId")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " (itl.INV_OUT_BILL_LINE_ID "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NULL")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "OR"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NOT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "EXISTS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " ("),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "SELECT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "1"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " INV_OUT_BILL_LINE iobl")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "                        "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " iobl.INV_OUT_BILL_LINE_ID "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " itl.INV_OUT_BILL_LINE_ID))")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#89DDFF" } }, "  "),
                  createVNode("span", { style: { "color": "#676E95" } }, "-- \u67E5\u51FA\u51FA\u5E93\u5355\u884C\u4E0D\u5B58\u5728\u7684\u6838\u9500\u884C")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u951917\uFF1A\u5BF9\u5E94\u7684\u51FA\u5E93\u5355\u660E\u7EC6\u53EF\u6838\u9500\u6570\u91CF\u4E0D\u8DB3"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u63D0\u4EA4\u5BA1\u6279\u65F6\uFF0C\u51FA\u5E93\u5355\u884C\u53EF\u6838\u9500\u6570\u91CF(selectCanVerifyNumOfLine)<0")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1AcheckWorkFlowData\u65B9\u6CD5\u4E2D\u6309invOutBillLineId\u67E5\u8BE2\u51FA\u5E93\u5355\u884C\u53EF\u6838\u9500\u6570\u91CF\uFF0C\u82E5<0\u5219\u6536\u96C6\u9519\u8BEF\u4FE1\u606F\u5E76\u629B\u51FA\u963B\u65AD\u6027\u62A5\u9519\u3002\u53EF\u80FD\u539F\u56E0\uFF1A\u5E76\u53D1\u6838\u9500\u5BFC\u81F4\u53EF\u6838\u9500\u6570\u91CF\u88AB\u5360\u7528\u3002\u9700\u68C0\u67E5\u51FA\u5E93\u5355\u884C\u53EF\u6838\u9500\u6570\u91CF")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " iobl.INV_OUT_BILL_LINE_ID, iobl.INV_BILL_NO, iobl.ITEM_CODE,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         iobl.CAN_VERIFY_NUM, iobl.USED_VERIFY_NUM,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         iobl.CAN_VERIFY_NUM "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "-"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " NVL(iobl.USED_VERIFY_NUM, "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5269\u4F59\u53EF\u6838\u9500\u6570\u91CF")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " INV_OUT_BILL_LINE iobl")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " iobl.INV_OUT_BILL_LINE_ID "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IN"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " (")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "SELECT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " itl.INV_OUT_BILL_LINE_ID "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " EPM_INVOICE_TRUTH_LINE itl")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " itl.INVOICE_TRUTH_ID "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " :invoiceTruthId")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  )")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " iobl.CAN_VERIFY_NUM "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "-"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " NVL(iobl.USED_VERIFY_NUM, "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "0")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#89DDFF" } }, "  "),
                  createVNode("span", { style: { "color": "#676E95" } }, "-- \u67E5\u51FA\u53EF\u6838\u9500\u6570\u91CF\u4E0D\u8DB3\u7684\u51FA\u5E93\u5355\u884C")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u951918\uFF1A\u53D1\u7968\u6838\u9500\u6570\u91CF\u8D85\u8FC7\u5269\u4F59\u53EF\u6838\u9500\u6570\u91CF"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u63D0\u4EA4\u5BA1\u6279\u65F6\uFF0C\u53D1\u7968\u660E\u7EC6\u7684\u672C\u6B21\u6838\u9500\u6570\u91CF\u5408\u8BA1\u8D85\u8FC7\u53D1\u7968\u660E\u7EC6\u5269\u4F59\u53EF\u6838\u9500\u6570\u91CF(SURPLUS_CAN_VERIFER_NUMBER<0)")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1AcheckWorkFlowData\u65B9\u6CD5\u4E2D\u6309\u53D1\u7968\u660E\u7EC6ID\u6C47\u603B\u672C\u6B21\u6838\u9500\u6570\u91CF\uFF0C\u67E5\u8BE2\u53D1\u7968\u660E\u7EC6\u5269\u4F59\u53EF\u6838\u9500\u6570\u91CF\uFF0C\u82E5\u5269\u4F59\u53EF\u6838\u9500\u6570\u91CF<0\u5219\u6536\u96C6\u9519\u8BEF\u4FE1\u606F\u5E76\u629B\u51FA\u963B\u65AD\u6027\u62A5\u9519\u3002\u9700\u8C03\u6574\u6838\u9500\u6570\u91CF")
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
                  createVNode("span", { style: { "color": "#F78C6C" } }, "uid"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ".INVOICE_DETAILS_ID, "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "uid"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ".INVOICE_NUMBER, "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "uid"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ".SERVICES_NAME,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "uid"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ".SURPLUS_CAN_VERIFER_NUMBER,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         ("),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "SELECT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#82AAFF" } }, "SUM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "(vid.THIS_VERIFER_NUMBER) "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " EPM_VERIFER_INVOICE_DETAILS vid")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "          "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " vid.INVOICE_DETAILS_ID "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "uid"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ".INVOICE_DETAILS_ID) "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u672C\u6B21\u6838\u9500\u5408\u8BA1")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " EPM_UPLOAD_INVOICE_DETAILS "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "uid")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "uid"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ".INVOICE_DETAILS_ID "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IN"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " (")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "SELECT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " vid.INVOICE_DETAILS_ID "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " EPM_VERIFER_INVOICE_DETAILS vid")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "JOIN"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " EPM_INVOICE_TRUTH_LINE itl "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ON"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " vid.INVOICE_TRUTH_LINE_ID "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " itl.INVOICE_TRUTH_LINE_ID")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " itl.INVOICE_TRUTH_ID "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " :invoiceTruthId")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  )")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "uid"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ".SURPLUS_CAN_VERIFER_NUMBER "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "0")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#89DDFF" } }, "  "),
                  createVNode("span", { style: { "color": "#676E95" } }, "-- \u67E5\u51FA\u5269\u4F59\u53EF\u6838\u9500\u6570\u91CF<0\u7684\u53D1\u7968\u660E\u7EC6")
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
        _push2(`<p${_scopeId}><strong${_scopeId}>Q1: \u771F\u5B9E\u6027\u6838\u9500\u51ED\u8BC1\u53F7\u5982\u4F55\u751F\u6210\uFF1F</strong></p><p${_scopeId}>A: \u901A\u8FC7\u7F16\u7801\u89C4\u5219AE.INVOICE_CANCELLATION_UPLOAD\u81EA\u52A8\u751F\u6210(RuleCodeEnum.INVOICE_CANCELLATION_UPLOAD_NO)\u3002\u6838\u9500\u5355\u53F7\u901A\u8FC7AE.INVOICE_AUTHENTICITY_VERIFI(\u5DE5\u7A0B)/AE.JZ_INVOICE_AUTHENTICITY_VER(\u5BB6\u88C5)\u751F\u6210\u3002</p><p${_scopeId}><strong${_scopeId}>Q2: \u53D6\u6D88\u6838\u9500\u7684\u4E94\u79CD\u7C7B\u578B\u533A\u522B\uFF1F</strong></p><p${_scopeId}>A: invoice=\u53D6\u6D88\u6574\u5F20\u53D1\u7968\uFF0CinvoiceDetail=\u53D6\u6D88\u5355\u6761\u53D1\u7968\u660E\u7EC6\uFF0CinvLine=\u53D6\u6D88\u51FA\u5E93\u5355\u884C\u6838\u9500\uFF0CveriferDetail=\u53D6\u6D88\u6838\u9500\u660E\u7EC6\u884C\uFF0CobsInvoice=\u4F5C\u5E9F\u53D1\u7968\u3002\u4E0D\u540C\u7C7B\u578B\u5F71\u54CD\u7684\u6570\u636E\u8303\u56F4\u4E0D\u540C\uFF0C\u53D6\u6D88\u65F6\u5747\u66F4\u65B0EFFECT_STATUS\u4E3Acanceled\u5E76\u8BB0\u5F55\u53D6\u6D88\u4FE1\u606F\u3002</p><p${_scopeId}><strong${_scopeId}>Q3: \u4E09\u6027\u6821\u9A8C\u662F\u4EC0\u4E48\uFF1F</strong></p><p${_scopeId}>A: \u53D1\u7968\u8D2D\u4E70\u65B9\u4E0E\u5DE5\u7A0B\u91C7\u8D2D\u5355\u4F4D\u540D\u79F0\u4E00\u81F4\u6027(UNIT_NAME_IS_AGREEMENT)\u3001\u53D1\u7968\u9500\u552E\u65B9\u4E0E\u7ECF\u9500\u5546\u6CD5\u4EBA\u540D\u79F0\u4E00\u81F4\u6027(BILLING_NAME_IS_AGREEMENT)\u3001\u53D1\u7968\u65E5\u671F\u662F\u5426\u5728\u53D1\u8D27\u65E5\u671F\u4E4B\u524D(DATE_IS_AGREEMENT)\uFF0C\u7528\u4E8E\u9A8C\u8BC1\u53D1\u7968\u771F\u5B9E\u6027\u3002</p><p${_scopeId}><strong${_scopeId}>Q4: \u53D6\u6D88\u6838\u9500\u540E\u51FA\u5E93\u5355\u884C\u53EF\u6838\u9500\u6570\u91CF\u672A\u56DE\u52A0</strong></p><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u539F\u56E0</strong>\uFF1AupdateClData\u4E2DinvLine\u4E3A\u7A7A(\u65E0\u5BA1\u6279\u901A\u8FC7\u7684\u6838\u9500\u660E\u7EC6)\uFF0C\u6216\u5206\u5E03\u5F0F\u9501\u83B7\u53D6\u5931\u8D25</li><li${_scopeId}><strong${_scopeId}>\u5904\u7406</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> vid.VERIFER_INVOICE_DETAILS_ID, vid.EFFECT_STATUS, ith.HZ_APPROVE_STATUS</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> EPM_VERIFER_INVOICE_DETAILS vid</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>JOIN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> EPM_INVOICE_TRUTH_LINE itl </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ON</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> vid.INVOICE_TRUTH_LINE_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> itl.INVOICE_TRUTH_LINE_ID</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>JOIN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> EPM_INVOICE_TRUTH_HEADER ith </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ON</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> ith.INVOICE_TRUTH_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> itl.INVOICE_TRUTH_ID</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> vid.EFFECT_STATUS </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>invalid</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>,</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>valid</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> ith.HZ_APPROVE_STATUS </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>NEW</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>,</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>RUN</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>,</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>APPROVED</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>);</span></span>
<span class="line"${_scopeId}></span></code></pre></div><p${_scopeId}><strong${_scopeId}>Q5: \u5BA1\u6279\u901A\u8FC7\u540E\u51FA\u5E93\u5355\u884C\u6838\u9500\u6570\u91CF\u672A\u66F4\u65B0</strong></p><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u539F\u56E0</strong>\uFF1AwfComplete\u56DE\u8C03\u672A\u6B63\u786E\u6267\u884C\uFF0C\u6216\u6838\u9500\u660E\u7EC6\u6709\u6548\u72B6\u6001\u66F4\u65B0\u5931\u8D25</li><li${_scopeId}><strong${_scopeId}>\u5904\u7406</strong>\uFF1A\u68C0\u67E5EPM_VERIFER_INVOICE_DETAILS\u7684EFFECT_STATUS\u662F\u5426\u4E3Avalid\uFF0C\u68C0\u67E5INV_OUT_BILL_LINE\u7684\u5DF2\u6838\u9500\u6570\u91CF/\u53EF\u6838\u9500\u6570\u91CF</li></ul><p${_scopeId}><strong${_scopeId}>Q6: \u5355\u4F4D\u8F6C\u6362\u7387\u7684\u4F5C\u7528\uFF1F</strong></p><p${_scopeId}>A: UOM_RATE\u7528\u4E8E\u8BA1\u91CF\u5355\u4F4D\u8F6C\u6362\uFF0C\u5F53\u53D1\u7968\u660E\u7EC6\u5355\u4F4D\u4E0E\u6838\u9500\u5355\u4F4D\u4E0D\u4E00\u81F4\u65F6\uFF0C\u901A\u8FC7\u8F6C\u6362\u7387\u8BA1\u7B97\u8F6C\u5316\u540E\u5269\u4F59\u53EF\u6838\u9500\u6570\u91CF(CONVERT_SUR_VERIFER_NUMBER=\u5269\u4F59\u53EF\u6838\u9500\u6570\u91CF\xD7UOM_RATE)\uFF0C\u4FDD\u8BC1\u6838\u9500\u6570\u91CF\u51C6\u786E\u3002</p>`);
      } else {
        return [
          createVNode("p", null, [
            createVNode("strong", null, "Q1: \u771F\u5B9E\u6027\u6838\u9500\u51ED\u8BC1\u53F7\u5982\u4F55\u751F\u6210\uFF1F")
          ]),
          createVNode("p", null, "A: \u901A\u8FC7\u7F16\u7801\u89C4\u5219AE.INVOICE_CANCELLATION_UPLOAD\u81EA\u52A8\u751F\u6210(RuleCodeEnum.INVOICE_CANCELLATION_UPLOAD_NO)\u3002\u6838\u9500\u5355\u53F7\u901A\u8FC7AE.INVOICE_AUTHENTICITY_VERIFI(\u5DE5\u7A0B)/AE.JZ_INVOICE_AUTHENTICITY_VER(\u5BB6\u88C5)\u751F\u6210\u3002"),
          createVNode("p", null, [
            createVNode("strong", null, "Q2: \u53D6\u6D88\u6838\u9500\u7684\u4E94\u79CD\u7C7B\u578B\u533A\u522B\uFF1F")
          ]),
          createVNode("p", null, "A: invoice=\u53D6\u6D88\u6574\u5F20\u53D1\u7968\uFF0CinvoiceDetail=\u53D6\u6D88\u5355\u6761\u53D1\u7968\u660E\u7EC6\uFF0CinvLine=\u53D6\u6D88\u51FA\u5E93\u5355\u884C\u6838\u9500\uFF0CveriferDetail=\u53D6\u6D88\u6838\u9500\u660E\u7EC6\u884C\uFF0CobsInvoice=\u4F5C\u5E9F\u53D1\u7968\u3002\u4E0D\u540C\u7C7B\u578B\u5F71\u54CD\u7684\u6570\u636E\u8303\u56F4\u4E0D\u540C\uFF0C\u53D6\u6D88\u65F6\u5747\u66F4\u65B0EFFECT_STATUS\u4E3Acanceled\u5E76\u8BB0\u5F55\u53D6\u6D88\u4FE1\u606F\u3002"),
          createVNode("p", null, [
            createVNode("strong", null, "Q3: \u4E09\u6027\u6821\u9A8C\u662F\u4EC0\u4E48\uFF1F")
          ]),
          createVNode("p", null, "A: \u53D1\u7968\u8D2D\u4E70\u65B9\u4E0E\u5DE5\u7A0B\u91C7\u8D2D\u5355\u4F4D\u540D\u79F0\u4E00\u81F4\u6027(UNIT_NAME_IS_AGREEMENT)\u3001\u53D1\u7968\u9500\u552E\u65B9\u4E0E\u7ECF\u9500\u5546\u6CD5\u4EBA\u540D\u79F0\u4E00\u81F4\u6027(BILLING_NAME_IS_AGREEMENT)\u3001\u53D1\u7968\u65E5\u671F\u662F\u5426\u5728\u53D1\u8D27\u65E5\u671F\u4E4B\u524D(DATE_IS_AGREEMENT)\uFF0C\u7528\u4E8E\u9A8C\u8BC1\u53D1\u7968\u771F\u5B9E\u6027\u3002"),
          createVNode("p", null, [
            createVNode("strong", null, "Q4: \u53D6\u6D88\u6838\u9500\u540E\u51FA\u5E93\u5355\u884C\u53EF\u6838\u9500\u6570\u91CF\u672A\u56DE\u52A0")
          ]),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u539F\u56E0"),
              createTextVNode("\uFF1AupdateClData\u4E2DinvLine\u4E3A\u7A7A(\u65E0\u5BA1\u6279\u901A\u8FC7\u7684\u6838\u9500\u660E\u7EC6)\uFF0C\u6216\u5206\u5E03\u5F0F\u9501\u83B7\u53D6\u5931\u8D25")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u5904\u7406"),
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " vid.VERIFER_INVOICE_DETAILS_ID, vid.EFFECT_STATUS, ith.HZ_APPROVE_STATUS")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " EPM_VERIFER_INVOICE_DETAILS vid")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "JOIN"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " EPM_INVOICE_TRUTH_LINE itl "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ON"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " vid.INVOICE_TRUTH_LINE_ID "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " itl.INVOICE_TRUTH_LINE_ID")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "JOIN"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " EPM_INVOICE_TRUTH_HEADER ith "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ON"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " ith.INVOICE_TRUTH_ID "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " itl.INVOICE_TRUTH_ID")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " vid.EFFECT_STATUS "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IN"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " ("),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "invalid"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ","),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "valid"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ")")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " ith.HZ_APPROVE_STATUS "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IN"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " ("),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "NEW"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ","),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "RUN"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ","),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "APPROVED"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ");")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("p", null, [
            createVNode("strong", null, "Q5: \u5BA1\u6279\u901A\u8FC7\u540E\u51FA\u5E93\u5355\u884C\u6838\u9500\u6570\u91CF\u672A\u66F4\u65B0")
          ]),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u539F\u56E0"),
              createTextVNode("\uFF1AwfComplete\u56DE\u8C03\u672A\u6B63\u786E\u6267\u884C\uFF0C\u6216\u6838\u9500\u660E\u7EC6\u6709\u6548\u72B6\u6001\u66F4\u65B0\u5931\u8D25")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u5904\u7406"),
              createTextVNode("\uFF1A\u68C0\u67E5EPM_VERIFER_INVOICE_DETAILS\u7684EFFECT_STATUS\u662F\u5426\u4E3Avalid\uFF0C\u68C0\u67E5INV_OUT_BILL_LINE\u7684\u5DF2\u6838\u9500\u6570\u91CF/\u53EF\u6838\u9500\u6570\u91CF")
            ])
          ]),
          createVNode("p", null, [
            createVNode("strong", null, "Q6: \u5355\u4F4D\u8F6C\u6362\u7387\u7684\u4F5C\u7528\uFF1F")
          ]),
          createVNode("p", null, "A: UOM_RATE\u7528\u4E8E\u8BA1\u91CF\u5355\u4F4D\u8F6C\u6362\uFF0C\u5F53\u53D1\u7968\u660E\u7EC6\u5355\u4F4D\u4E0E\u6838\u9500\u5355\u4F4D\u4E0D\u4E00\u81F4\u65F6\uFF0C\u901A\u8FC7\u8F6C\u6362\u7387\u8BA1\u7B97\u8F6C\u5316\u540E\u5269\u4F59\u53EF\u6838\u9500\u6570\u91CF(CONVERT_SUR_VERIFER_NUMBER=\u5269\u4F59\u53EF\u6838\u9500\u6570\u91CF\xD7UOM_RATE)\uFF0C\u4FDD\u8BC1\u6838\u9500\u6570\u91CF\u51C6\u786E\u3002")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div><div id="changelog" style="${ssrRenderStyle({ "display": "none" })}"><div class="tab-pad"><div class="kl-wrap">`);
  _push(ssrRenderComponent(_component_KbCard, { title: "\u66F4\u65B0\u8BB0\u5F55" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u65E5\u671F</th><th${_scopeId}>\u63D0\u4EA4ID</th><th${_scopeId}>\u63D0\u4EA4\u4EBA</th><th${_scopeId}>\u63D0\u4EA4\u5185\u5BB9</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>2025-09-23</td><td${_scopeId}>-</td><td${_scopeId}>-</td><td${_scopeId}>\u521D\u59CB\u7248\u672C\uFF0C\u5DE5\u7A0B\u771F\u5B9E\u6027\u6838\u9500\u529F\u80FD</td></tr><tr${_scopeId}><td${_scopeId}>2026-07-31</td><td${_scopeId}>-</td><td${_scopeId}>-</td><td${_scopeId}>\u521D\u59CB\u751F\u6210\u77E5\u8BC6\u5E93\u6587\u6863</td></tr><tr${_scopeId}><td${_scopeId}>2026-08-30</td><td${_scopeId}>-</td><td${_scopeId}>CodeArts</td><td${_scopeId}>\u6309skill\u89C4\u8303\u91CD\u5199\uFF1A\u79FB\u9664\u7F51\u7AD9\u5185\u5BB9\u8865\u5145/\u4E1A\u52A1\u662F\u4EC0\u4E48/\u6743\u9650\u63A7\u5236/\u5386\u53F2\u6392\u67E5\u8BB0\u5F55\u7AE0\u8282\u3001\u7AE0\u8282\u53BB\u7F16\u53F7\u3001\u754C\u9762\u6A21\u5757\u8868\u683C\u6539\u4E3A6\u5217\u3001\u4E0A\u6E38\u4F9D\u8D56\u6539\u4E3A4\u5217\u3001\u4E0B\u6E38\u5F71\u54CD\u6539\u4E3Abullet points\u3001\u6570\u636E\u5E93\u8868\u6539\u4E3A5\u5217\u3001\u62A5\u9519\u8868\u6539\u4E3A5\u5217\u3001\u65B0\u589E\u660E\u7EC6\u5B57\u6BB5\u5217\u8868/\u9009\u62E9\u5F39\u7A97/\u5BFC\u5165/\u63D0\u4EA4\u6821\u9A8C\u7AE0\u8282\u3001\u5408\u5E766\u4E2A\u91CD\u70B9\u903B\u8F91\u548C22\u4E2A\u540E\u7AEF\u63A5\u53E3</td></tr></tbody></table>`);
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
                createVNode("td", null, "2025-09-23"),
                createVNode("td", null, "-"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u521D\u59CB\u7248\u672C\uFF0C\u5DE5\u7A0B\u771F\u5B9E\u6027\u6838\u9500\u529F\u80FD")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "2026-07-31"),
                createVNode("td", null, "-"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u521D\u59CB\u751F\u6210\u77E5\u8BC6\u5E93\u6587\u6863")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "2026-08-30"),
                createVNode("td", null, "-"),
                createVNode("td", null, "CodeArts"),
                createVNode("td", null, "\u6309skill\u89C4\u8303\u91CD\u5199\uFF1A\u79FB\u9664\u7F51\u7AD9\u5185\u5BB9\u8865\u5145/\u4E1A\u52A1\u662F\u4EC0\u4E48/\u6743\u9650\u63A7\u5236/\u5386\u53F2\u6392\u67E5\u8BB0\u5F55\u7AE0\u8282\u3001\u7AE0\u8282\u53BB\u7F16\u53F7\u3001\u754C\u9762\u6A21\u5757\u8868\u683C\u6539\u4E3A6\u5217\u3001\u4E0A\u6E38\u4F9D\u8D56\u6539\u4E3A4\u5217\u3001\u4E0B\u6E38\u5F71\u54CD\u6539\u4E3Abullet points\u3001\u6570\u636E\u5E93\u8868\u6539\u4E3A5\u5217\u3001\u62A5\u9519\u8868\u6539\u4E3A5\u5217\u3001\u65B0\u589E\u660E\u7EC6\u5B57\u6BB5\u5217\u8868/\u9009\u62E9\u5F39\u7A97/\u5BFC\u5165/\u63D0\u4EA4\u6821\u9A8C\u7AE0\u8282\u3001\u5408\u5E766\u4E2A\u91CD\u70B9\u903B\u8F91\u548C22\u4E2A\u540E\u7AEF\u63A5\u53E3")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("\u5DE5\u7A0B\u7BA1\u7406/\u9879\u76EE\u5F80\u6765/\u5DE5\u7A0B\u771F\u5B9E\u6027\u6838\u9500/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
