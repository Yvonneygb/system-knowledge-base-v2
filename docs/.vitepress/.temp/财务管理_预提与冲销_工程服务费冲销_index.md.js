import { resolveComponent, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.6ab74304.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"\u8D22\u52A1\u7BA1\u7406/\u9884\u63D0\u4E0E\u51B2\u9500/\u5DE5\u7A0B\u670D\u52A1\u8D39\u51B2\u9500/index.md"}');
const _sfc_main = { name: "\u8D22\u52A1\u7BA1\u7406/\u9884\u63D0\u4E0E\u51B2\u9500/\u5DE5\u7A0B\u670D\u52A1\u8D39\u51B2\u9500/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_BreadcrumbTabs = resolveComponent("BreadcrumbTabs");
  const _component_KbCard = resolveComponent("KbCard");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_BreadcrumbTabs, null, null, _parent));
  _push(`<div id="biz-intro" style="${ssrRenderStyle({ "display": "none" })}"><div class="tab-pad"><div class="kl-wrap"><div class="kl-card"><div class="biz-kl-hdr"><span class="biz-tag" style="${ssrRenderStyle({ "background": "rgba(124,58,237,0.08)", "color": "#7C3AED", "border-color": "rgba(124,58,237,0.18)" })}"> \u5B9A\u4E49</span><h2>\u5DE5\u7A0B\u670D\u52A1\u8D39\u51B2\u9500\u662F\u4EC0\u4E48</h2><p>\u5C06\u5DF2\u9884\u63D0\u7684\u5DE5\u7A0B\u670D\u52A1\u8D39\u81EA\u52A8\u6C47\u603B\u751F\u6210\u51B2\u9500\u5355\uFF0C\u63A8\u9001\u5171\u4EAB\u7CFB\u7EDF\u91CA\u653E\u9884\u7B97</p></div><div class="biz-2col-inner"><div class="kl-col-box"><div style="${ssrRenderStyle({ "display": "flex", "align-items": "center", "gap": "10px", "margin-bottom": "12px" })}"><div style="${ssrRenderStyle({ "width": "40px", "height": "40px", "border-radius": "10px", "display": "flex", "align-items": "center", "justify-content": "center", "background": "linear-gradient(135deg,#7c3aed,#6d28d9)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="3" width="5" height="5" rx="1" stroke="white" stroke-width="1.5"></rect><path d="M3 6.5L4.5 8L7 5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9 5H14" stroke="white" stroke-width="1.5" stroke-linecap="round"></path><rect x="2" y="10" width="5" height="3" rx="1" stroke="white" stroke-width="1.5"></rect><path d="M9 10H14" stroke="white" stroke-width="1.5" stroke-linecap="round"></path></svg></div><h4 style="${ssrRenderStyle({ "font-size": "1rem", "font-weight": "800", "color": "#1F2937", "margin": "0" })}">\u4E1A\u52A1\u672C\u8D28</h4></div><p style="${ssrRenderStyle({ "font-size": "0.78rem", "font-weight": "600", "color": "#6B7280", "margin": "0 0 10px" })}">\u51B2\u9500\u5DF2\u9884\u63D0\u5DE5\u7A0B\u670D\u52A1\u8D39</p><div style="${ssrRenderStyle({ "display": "flex", "flex-direction": "column", "gap": "8px" })}"><div style="${ssrRenderStyle({ "display": "flex", "align-items": "flex-start", "gap": "8px", "padding": "8px 10px", "background": "#F5F3FF", "border-radius": "8px" })}"><div style="${ssrRenderStyle({ "font-size": ".75rem" })}"><strong>\u81EA\u52A8\u6C47\u603B</strong> \u2014 \u6309\u65F6\u95F4\u6BB5\u81EA\u52A8\u6C47\u603B\u5DE5\u7A0B\u670D\u52A1\u8D39\u9884\u63D0\u6570\u636E\uFF0C\u751F\u6210\u51B2\u9500\u5355\uFF0C\u907F\u514D\u4EBA\u5DE5\u9057\u6F0F\u3002</div></div><div style="${ssrRenderStyle({ "display": "flex", "align-items": "flex-start", "gap": "8px", "padding": "8px 10px", "background": "#F5F3FF", "border-radius": "8px" })}"><div style="${ssrRenderStyle({ "font-size": ".75rem" })}"><strong>\u91CA\u653E\u9884\u7B97</strong> \u2014 \u51B2\u9500\u6570\u636E\u63A8\u9001\u5171\u4EAB\u7CFB\u7EDF\uFF0C\u5B9E\u73B0\u9884\u7B97\u91CA\u653E\u4E0E\u8D22\u52A1\u51B2\u9500\u5165\u8D26\u3002</div></div></div></div><div class="kl-col-box alt"><div style="${ssrRenderStyle({ "display": "flex", "align-items": "center", "gap": "10px", "margin-bottom": "12px" })}"><div style="${ssrRenderStyle({ "width": "40px", "height": "40px", "border-radius": "10px", "display": "flex", "align-items": "center", "justify-content": "center", "background": "linear-gradient(135deg,#16A34A,#4ADE80)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 2L13 4V8C13 11 8 14 8 14C8 14 3 11 3 8V4L8 2Z" stroke="white" stroke-width="1.5" stroke-linejoin="round"></path></svg></div><h4 style="${ssrRenderStyle({ "font-size": "1rem", "font-weight": "800", "color": "#1F2937", "margin": "0" })}">\u4E3A\u4EC0\u4E48\u8981\u51B2\u9500</h4></div><p style="${ssrRenderStyle({ "font-size": "0.78rem", "font-weight": "600", "color": "#6B7280", "margin": "0 0 10px" })}">\u53CA\u65F6\u91CA\u653E\u9884\u63D0\u9884\u7B97</p><div style="${ssrRenderStyle({ "display": "flex", "flex-direction": "column", "gap": "8px" })}"><div style="${ssrRenderStyle({ "display": "flex", "align-items": "flex-start", "gap": "8px", "padding": "8px 10px", "background": "#F0FDF4", "border-radius": "8px" })}"><div style="${ssrRenderStyle({ "font-size": ".75rem" })}"><strong>\u907F\u514D\u865A\u5360</strong> \u2014 \u9884\u63D0\u8D39\u7528\u5230\u671F\u51B2\u9500\uFF0C\u53CA\u65F6\u91CA\u653E\u88AB\u5360\u7528\u7684\u9884\u7B97\u989D\u5EA6\u3002</div></div><div style="${ssrRenderStyle({ "display": "flex", "align-items": "flex-start", "gap": "8px", "padding": "8px 10px", "background": "#F0FDF4", "border-radius": "8px" })}"><div style="${ssrRenderStyle({ "font-size": ".75rem" })}"><strong>\u81EA\u52A8\u53EF\u9760</strong> \u2014 \u5B9A\u65F6\u4EFB\u52A1\u81EA\u52A8\u751F\u6210\uFF0C\u51CF\u5C11\u4EBA\u5DE5\u64CD\u4F5C\u4E0E\u9057\u6F0F\u98CE\u9669\u3002</div></div></div></div></div></div><div class="kl-card"><div class="biz-kl-hdr"><span class="biz-tag" style="${ssrRenderStyle({ "background": "rgba(124,58,237,0.08)", "color": "#7C3AED", "border-color": "rgba(124,58,237,0.18)" })}"> \u6D41\u7A0B</span><h2>\u5DE5\u7A0B\u670D\u52A1\u8D39\u51B2\u9500\u6D41\u8F6C\u8FC7\u7A0B</h2><p>\u6C47\u603B\u9884\u63D0\u6570\u636E\u751F\u6210\u51B2\u9500\u5355\uFF0C\u5BA1\u6279\u540E\u63A8\u9001\u5171\u4EAB\u7CFB\u7EDF</p></div><div class="biz-steps"><div class="biz-step-item"><div class="biz-step-circle" style="${ssrRenderStyle({ "background": "linear-gradient(135deg,#7C3AED,#6D28D9)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="3" width="5" height="5" rx="1" stroke="white" stroke-width="1.5"></rect><path d="M3 6.5L4.5 8L7 5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9 5H14" stroke="white" stroke-width="1.5" stroke-linecap="round"></path></svg></div><h5>\u6C47\u603B\u9884\u63D0</h5><small>\u6309\u65F6\u95F4\u6BB5\u6C47\u603B<br>\u9884\u63D0\u6570\u636E</small></div><div class="biz-step-arrow">\u2192</div><div class="biz-step-item"><div class="biz-step-circle" style="${ssrRenderStyle({ "background": "linear-gradient(135deg,#7C3AED,#6D28D9)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="12" height="12" rx="2" stroke="white" stroke-width="1.5"></rect><path d="M4 5H12" stroke="white" stroke-width="1.5" stroke-linecap="round"></path><path d="M4 8H9" stroke="white" stroke-width="1.5" stroke-linecap="round"></path></svg></div><h5>\u751F\u6210\u51B2\u9500\u5355</h5><small>\u5B9A\u65F6\u4EFB\u52A1\u81EA\u52A8<br>\u751F\u6210\u51B2\u9500\u5355</small></div><div class="biz-step-arrow">\u2192</div><div class="biz-step-item"><div class="biz-step-circle" style="${ssrRenderStyle({ "background": "linear-gradient(135deg,#F59E0B,#FBBF24)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 2L13 4V8C13 11 8 14 8 14C8 14 3 11 3 8V4L8 2Z" stroke="white" stroke-width="1.5" stroke-linejoin="round"></path></svg></div><h5>\u5BA1\u6279</h5><small>\u51B2\u9500\u5355\u8D70<br>\u5DE5\u4F5C\u6D41\u5BA1\u6279</small></div><div class="biz-step-arrow">\u2192</div><div class="biz-step-item"><div class="biz-step-circle" style="${ssrRenderStyle({ "background": "linear-gradient(135deg,#16A34A,#4ADE80)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 5H14" stroke="white" stroke-width="1.5" stroke-linecap="round"></path><path d="M4 3V7" stroke="white" stroke-width="1.5" stroke-linecap="round"></path><path d="M12 3V7" stroke="white" stroke-width="1.5" stroke-linecap="round"></path></svg></div><h5>\u63A8\u9001\u5171\u4EAB</h5><small>\u63A8\u9001\u5171\u4EAB\u7CFB\u7EDF<br>\u91CA\u653E\u9884\u7B97</small></div></div></div><div class="kl-card"><div class="biz-kl-hdr"><span class="biz-tag" style="${ssrRenderStyle({ "background": "rgba(124,58,237,0.08)", "color": "#7C3AED", "border-color": "rgba(124,58,237,0.18)" })}"> \u5173\u952E\u89C4\u5219</span><h2>\u5DE5\u7A0B\u670D\u52A1\u8D39\u51B2\u9500\u5173\u952E\u89C4\u5219</h2><p>\u660E\u786E\u51B2\u9500\u53E3\u5F84\u4E0E\u5165\u8D26\u8FB9\u754C</p></div><div class="biz-3col"><div class="kl-col-box" style="${ssrRenderStyle({ "margin-bottom": "0" })}"><div style="${ssrRenderStyle({ "display": "flex", "gap": "12px", "align-items": "flex-start" })}"><div style="${ssrRenderStyle({ "width": "36px", "height": "36px", "border-radius": "10px", "display": "flex", "align-items": "center", "justify-content": "center", "flex-shrink": "0", "background": "linear-gradient(135deg,#7C3AED,#A78BFA)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 2V14" stroke="white" stroke-width="1.5" stroke-linecap="round"></path><path d="M4 5L8 2L12 5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></div><div><h5 style="${ssrRenderStyle({ "font-size": "0.88rem", "font-weight": "800", "color": "#1F2937", "margin": "0 0 6px" })}">\u6279\u6B21\u5F52\u96C6</h5><p style="${ssrRenderStyle({ "font-size": "0.73rem", "color": "#6B7280", "margin": "0", "line-height": "1.6" })}">\u51B2\u9500\u5934\u5355\u53F7\u6309\u89C4\u5219\u751F\u6210\uFF0C\u540C\u6279\u6B21\u6570\u636E\u5171\u4EAB\u540C\u4E00\u5934\u5355\u53F7\uFF0C\u4FBF\u4E8E\u8FFD\u6EAF\u3002</p></div></div></div><div class="kl-col-box alt" style="${ssrRenderStyle({ "margin-bottom": "0" })}"><div style="${ssrRenderStyle({ "display": "flex", "gap": "12px", "align-items": "flex-start" })}"><div style="${ssrRenderStyle({ "width": "36px", "height": "36px", "border-radius": "10px", "display": "flex", "align-items": "center", "justify-content": "center", "flex-shrink": "0", "background": "linear-gradient(135deg,#16A34A,#4ADE80)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 5H14" stroke="white" stroke-width="1.5" stroke-linecap="round"></path><path d="M4 3V7" stroke="white" stroke-width="1.5" stroke-linecap="round"></path><path d="M12 3V7" stroke="white" stroke-width="1.5" stroke-linecap="round"></path></svg></div><div><h5 style="${ssrRenderStyle({ "font-size": "0.88rem", "font-weight": "800", "color": "#1F2937", "margin": "0 0 6px" })}">\u9884\u7B97\u91CA\u653E</h5><p style="${ssrRenderStyle({ "font-size": "0.73rem", "color": "#6B7280", "margin": "0", "line-height": "1.6" })}">\u5BA1\u6279\u901A\u8FC7\u5E76\u63A8\u9001\u5171\u4EAB\u7CFB\u7EDF\u540E\uFF0C\u5BF9\u5E94\u9884\u63D0\u9884\u7B97\u5B8C\u6210\u91CA\u653E\u4E0E\u51B2\u9500\u5165\u8D26\u3002</p></div></div></div><div class="kl-col-box" style="${ssrRenderStyle({ "margin-bottom": "0" })}"><div style="${ssrRenderStyle({ "display": "flex", "gap": "12px", "align-items": "flex-start" })}"><div style="${ssrRenderStyle({ "width": "36px", "height": "36px", "border-radius": "10px", "display": "flex", "align-items": "center", "justify-content": "center", "flex-shrink": "0", "background": "linear-gradient(135deg,#F59E0B,#FBBF24)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 2L13 4V8C13 11 8 14 8 14C8 14 3 11 3 8V4L8 2Z" stroke="white" stroke-width="1.5" stroke-linejoin="round"></path></svg></div><div><h5 style="${ssrRenderStyle({ "font-size": "0.88rem", "font-weight": "800", "color": "#1F2937", "margin": "0 0 6px" })}">\u81EA\u52A8\u89E6\u53D1</h5><p style="${ssrRenderStyle({ "font-size": "0.73rem", "color": "#6B7280", "margin": "0", "line-height": "1.6" })}">\u51B2\u9500\u5355\u7531\u5B9A\u65F6\u4EFB\u52A1\u6309\u65F6\u95F4\u6BB5\u81EA\u52A8\u751F\u6210\uFF0C\u4FDD\u8BC1\u51B2\u9500\u53CA\u65F6\u6027\u3002</p></div></div></div></div><div class="kl-tip" style="${ssrRenderStyle({ "margin-top": "14px" })}"><strong>\u51B2\u9500\u539F\u5219\uFF1A</strong>\u4EC5\u5BA1\u6279\u901A\u8FC7\u7684\u51B2\u9500\u5355\u624D\u63A8\u9001\u5171\u4EAB\u7CFB\u7EDF\u91CA\u653E\u9884\u7B97\uFF1B\u63A8\u9001\u5931\u8D25\u65F6\u6309\u5931\u8D25\u8DEF\u5F84\u5904\u7406\uFF0C\u4E0D\u81EA\u52A8\u91CA\u653E\u9884\u7B97\u3002 </div></div></div></div></div><div id="biz-flow" style="${ssrRenderStyle({ "display": "none" })}"><div class="tab-pad"><div class="bf-truth-flow"><h4 class="bf-main-title">\u5DE5\u7A0B\u670D\u52A1\u8D39\u51B2\u9500 \u2014 \u5168\u94FE\u8DEF\u6D41\u7A0B\u56FE</h4><p class="bf-main-sub">\u5F00\u59CB \u2192 \u5DE5\u7A0B\u670D\u52A1\u8D39\u9884\u63D0\u6570\u636E \u2192 \u2605\u751F\u6210\u5DE5\u7A0B\u670D\u52A1\u8D39\u51B2\u9500\u5355\u2605(\u5B9A\u65F6\u4EFB\u52A1) \u2192 \u2696\u5BA1\u6279\u901A\u8FC7\uFF1F(\u5DE5\u4F5C\u6D41FIN_SVC_EXP_ACC) \u2192 \u63A8\u9001FSSC \u2192 \u7ED3\u675F</p><div class="bf-fc-svg-wrap"><svg class="bf-fc-svg" style="${ssrRenderStyle({ "max-height": "none" })}" viewBox="0 0 1100 700" xmlns="http://www.w3.org/2000/svg"><defs><marker id="arr-green" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon points="0,0 10,5 0,10" fill="#16A34A"></polygon></marker><marker id="arr-gray" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon points="0,0 10,5 0,10" fill="#9CA3AF"></polygon></marker><marker id="arr-blue" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon points="0,0 10,5 0,10" fill="#3B82F6"></polygon></marker><marker id="arr-red" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon points="0,0 10,5 0,10" fill="#EF4444"></polygon></marker><filter id="shadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000" flood-opacity="0.15"></feDropShadow></filter></defs><rect x="20" y="20" width="1060" height="95" rx="8" fill="#EFF6FF" stroke="#3B82F6" stroke-width="1.5" stroke-dasharray="6,4"></rect><text x="550" y="42" text-anchor="middle" fill="#1D4ED8" font-size="13" font-weight="600">\u4E0A\u6E38\u652F\u6491</text><rect x="100" y="56" width="120" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"></rect><text x="160" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">\u5DE5\u7A0B\u670D\u52A1\u8D39\u9884\u63D0\u6570\u636E</text><rect x="230" y="56" width="120" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"></rect><text x="290" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">\u4E8B\u4E1A\u90E8\u57FA\u7840\u8BBE\u7F6E</text><rect x="360" y="56" width="120" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"></rect><text x="420" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">\u51B2\u9500\u7A0E\u7387</text><rect x="490" y="56" width="120" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"></rect><text x="550" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">\u6210\u672C\u4E2D\u5FC3</text><rect x="620" y="56" width="120" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"></rect><text x="680" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">\u5171\u4EAB\u63A5\u53E3</text><rect x="750" y="56" width="120" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"></rect><text x="810" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">\u7F16\u7801\u89C4\u5219</text><rect x="880" y="56" width="120" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"></rect><text x="940" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">\u5DE5\u4F5C\u6D41</text><line x1="550" y1="115" x2="550" y2="150" stroke="#3B82F6" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#arr-blue)"></line><rect x="500" y="150" width="100" height="44" rx="6" fill="#FAF5FF" stroke="#9333EA" stroke-width="1.5" stroke-dasharray="5,3"></rect><text x="550" y="177" text-anchor="middle" fill="#7C3AED" font-size="13" font-weight="600">\u5F00\u59CB</text><line x1="550" y1="194" x2="550" y2="210" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"></line><rect x="430" y="210" width="240" height="40" rx="6" fill="#F0FDF4" stroke="#16A34A" stroke-width="2"></rect><text x="550" y="235" text-anchor="middle" fill="#166534" font-size="13" font-weight="600">\u5DE5\u7A0B\u670D\u52A1\u8D39\u9884\u63D0\u6570\u636E</text><line x1="550" y1="250" x2="550" y2="268" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"></line><rect x="440" y="268" width="220" height="54" rx="6" fill="#16A34A" stroke="#15803D" stroke-width="2" filter="url(#shadow)"></rect><text x="550" y="292" text-anchor="middle" fill="#FFFFFF" font-size="13" font-weight="700">\u2605\u751F\u6210\u5DE5\u7A0B\u670D\u52A1\u8D39\u51B2\u9500\u5355\u2605</text><text x="550" y="310" text-anchor="middle" fill="#DCFCE7" font-size="10">\u5B9A\u65F6\u4EFB\u52A1ExpenseWriteoffInQuotaJob\u6C47\u603B</text><line x1="550" y1="322" x2="550" y2="340" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"></line><polygon points="550,340 622,378 550,416 478,378" fill="#FAF5FF" stroke="#9333EA" stroke-width="1.5" stroke-dasharray="5,3"></polygon><text x="550" y="382" text-anchor="middle" fill="#7C3AED" font-size="12" font-weight="600">\u2696 \u5BA1\u6279\u901A\u8FC7\uFF1F</text><line x1="622" y1="378" x2="712" y2="378" stroke="#EF4444" stroke-width="2" marker-end="url(#arr-red)"></line><rect x="667" y="363" width="90" height="28" rx="4" fill="#FEF2F2" stroke="#EF4444" stroke-width="1"></rect><text x="712" y="382" text-anchor="middle" fill="#DC2626" font-size="11" font-weight="600">\u62D2\u7EDD \u2717</text><line x1="712" y1="363" x2="712" y2="295" stroke="#EF4444" stroke-width="1.5"></line><line x1="712" y1="295" x2="640" y2="295" stroke="#EF4444" stroke-width="1.5" marker-end="url(#arr-red)"></line><line x1="550" y1="416" x2="550" y2="432" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"></line><rect x="460" y="432" width="180" height="40" rx="6" fill="#F0FDF4" stroke="#16A34A" stroke-width="2"></rect><text x="550" y="457" text-anchor="middle" fill="#166534" font-size="13" font-weight="600">\u63A8\u9001FSSC</text><line x1="550" y1="472" x2="550" y2="500" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"></line><rect x="495" y="500" width="110" height="40" rx="6" fill="#FAF5FF" stroke="#9333EA" stroke-width="1.5" stroke-dasharray="5,3"></rect><text x="550" y="525" text-anchor="middle" fill="#7C3AED" font-size="13" font-weight="600">\u7ED3\u675F</text><line x1="550" y1="540" x2="550" y2="584" stroke="#16A34A" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#arr-green)"></line><rect x="20" y="584" width="1060" height="95" rx="8" fill="#F0FDF4" stroke="#16A34A" stroke-width="1.5" stroke-dasharray="6,4"></rect><text x="550" y="606" text-anchor="middle" fill="#166534" font-size="13" font-weight="600">\u4E0B\u6E38\u5F71\u54CD</text><rect x="390" y="622" width="150" height="36" rx="5" fill="#FFFFFF" stroke="#16A34A" stroke-width="1.2"></rect><text x="465" y="645" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">\u8D22\u52A1\u5171\u4EAB(FSCC)</text><rect x="560" y="622" width="150" height="36" rx="5" fill="#FFFFFF" stroke="#16A34A" stroke-width="1.2"></rect><text x="635" y="645" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">\u670D\u52A1\u8D39\u51B2\u9500</text></svg></div><div class="bf-fc-legend"><span class="bf-fc-legend-item"><span class="bf-fc-dot bf-fc-dot-green"></span> \u4E3B\u6D41\u7A0B\u6B65\u9AA4</span><span class="bf-fc-legend-item"><span class="bf-fc-dot bf-fc-dot-purple"></span> \u5F00\u59CB/\u7ED3\u675F/\u5224\u65AD</span><span class="bf-fc-legend-item"><span class="bf-fc-dot bf-fc-dot-blue"></span> \u4E0A\u6E38\u652F\u6491\u670D\u52A1</span><span class="bf-fc-legend-item"><span style="${ssrRenderStyle({ "display": "inline-block", "width": "22px", "height": "2px", "background": "#EF4444" })}"></span> \u5BA1\u6279\u62D2\u7EDD/\u9A73\u56DE</span></div></div></div></div><div id="key-logic" style="${ssrRenderStyle({ "display": "none" })}"><div class="tab-pad"><div class="kl-wrap">`);
  _push(ssrRenderComponent(_component_KbCard, {
    num: "1",
    title: "\u91CD\u70B9\u903B\u8F911\uFF1A\u5B9A\u65F6\u4EFB\u52A1\u751F\u6210\u51B2\u9500\u6570\u636E {\u6570\u636E\u751F\u6210}"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u610F\u4E49</strong>\uFF1A\u901A\u8FC7\u5B9A\u65F6\u4EFB\u52A1\u5B9A\u671F\u751F\u6210\u51B2\u9500\u6570\u636E\uFF0C\u786E\u4FDD\u6570\u636E\u53CA\u65F6\u66F4\u65B0</li></ul><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u5177\u4F53\u903B\u8F91\u63CF\u8FF0</strong></li></ul><ul${_scopeId}><li${_scopeId}>\u7B2C1\u70B9\uFF1AExpenseWriteoffInQuotaJob\u5B9A\u65F6\u4EFB\u52A1\u6309\u914D\u7F6E\u95F4\u9694\u6267\u884C</li></ul><ul${_scopeId}><li${_scopeId}>\u7B2C2\u70B9\uFF1A\u4ECE\u5DE5\u7A0B\u670D\u52A1\u8D39\u5151\u73B0\u5BA1\u6279\u901A\u8FC7\u7684\u6570\u636E\u4E2D\u63D0\u53D6\u51B2\u9500\u4FE1\u606F</li></ul><ul${_scopeId}><li${_scopeId}>\u7B2C3\u70B9\uFF1A\u751F\u6210\u51B2\u9500\u8BB0\u5F55\u5199\u5165EXPENSE_WRITEOFF_IN_QUOTA\u8868</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u610F\u4E49"),
              createTextVNode("\uFF1A\u901A\u8FC7\u5B9A\u65F6\u4EFB\u52A1\u5B9A\u671F\u751F\u6210\u51B2\u9500\u6570\u636E\uFF0C\u786E\u4FDD\u6570\u636E\u53CA\u65F6\u66F4\u65B0")
            ])
          ]),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u5177\u4F53\u903B\u8F91\u63CF\u8FF0")
            ])
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u7B2C1\u70B9\uFF1AExpenseWriteoffInQuotaJob\u5B9A\u65F6\u4EFB\u52A1\u6309\u914D\u7F6E\u95F4\u9694\u6267\u884C")
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u7B2C2\u70B9\uFF1A\u4ECE\u5DE5\u7A0B\u670D\u52A1\u8D39\u5151\u73B0\u5BA1\u6279\u901A\u8FC7\u7684\u6570\u636E\u4E2D\u63D0\u53D6\u51B2\u9500\u4FE1\u606F")
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u7B2C3\u70B9\uFF1A\u751F\u6210\u51B2\u9500\u8BB0\u5F55\u5199\u5165EXPENSE_WRITEOFF_IN_QUOTA\u8868")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, {
    num: "2",
    title: "\u91CD\u70B9\u903B\u8F912\uFF1A\u63A8\u9001\u5171\u4EAB\u8D22\u52A1\u7CFB\u7EDF {\u6570\u636E\u63A8\u9001}"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u610F\u4E49</strong>\uFF1A\u51B2\u9500\u6570\u636E\u63A8\u9001\u81F3\u5171\u4EAB\u8D22\u52A1\u7CFB\u7EDF(GCCX)\uFF0C\u786E\u4FDD\u8D22\u52A1\u6838\u7B97\u540C\u6B65</li></ul><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u5177\u4F53\u903B\u8F91\u63CF\u8FF0</strong></li></ul><ul${_scopeId}><li${_scopeId}>\u7B2C1\u70B9\uFF1A\u901A\u8FC7doserviceWithHolding\u63A5\u53E3\u63A8\u9001\u51B2\u9500\u6570\u636E</li></ul><ul${_scopeId}><li${_scopeId}>\u7B2C2\u70B9\uFF1A\u63A8\u9001\u5230\u5171\u4EAB\u8D22\u52A1\u7CFB\u7EDF(GCCX)\uFF0C\u5355\u636E\u7C7B\u578B\u5728SharedBillTypeEnum\u4E2D\u5B9A\u4E49</li></ul><ul${_scopeId}><li${_scopeId}>\u7B2C3\u70B9\uFF1A\u7F16\u7801\u89C4\u5219\u5728CodeRuleConstants\u4E2D\u5B9A\u4E49\uFF08\u5DE5\u7A0B\u670D\u52A1\u8D39\u51B2\u9500\uFF09</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u610F\u4E49"),
              createTextVNode("\uFF1A\u51B2\u9500\u6570\u636E\u63A8\u9001\u81F3\u5171\u4EAB\u8D22\u52A1\u7CFB\u7EDF(GCCX)\uFF0C\u786E\u4FDD\u8D22\u52A1\u6838\u7B97\u540C\u6B65")
            ])
          ]),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u5177\u4F53\u903B\u8F91\u63CF\u8FF0")
            ])
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u7B2C1\u70B9\uFF1A\u901A\u8FC7doserviceWithHolding\u63A5\u53E3\u63A8\u9001\u51B2\u9500\u6570\u636E")
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u7B2C2\u70B9\uFF1A\u63A8\u9001\u5230\u5171\u4EAB\u8D22\u52A1\u7CFB\u7EDF(GCCX)\uFF0C\u5355\u636E\u7C7B\u578B\u5728SharedBillTypeEnum\u4E2D\u5B9A\u4E49")
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u7B2C3\u70B9\uFF1A\u7F16\u7801\u89C4\u5219\u5728CodeRuleConstants\u4E2D\u5B9A\u4E49\uFF08\u5DE5\u7A0B\u670D\u52A1\u8D39\u51B2\u9500\uFF09")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div><div id="detail-logic" style="${ssrRenderStyle({ "display": "none" })}"><div class="tab-pad"><div class="kl-wrap">`);
  _push(ssrRenderComponent(_component_KbCard, { title: "\u754C\u9762\u6A21\u57571\uFF1A\u5DE5\u7A0B\u670D\u52A1\u8D39\u51B2\u9500\u5217\u8868\u9875" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5B57\u6BB5\u540D</th><th${_scopeId}>\u6570\u636E\u5E93\u5217\u540D</th><th${_scopeId}>\u7EC4\u4EF6</th><th${_scopeId}>\u4E1A\u52A1\u91CA\u4E49</th><th${_scopeId}>\u663E\u9690\u6761\u4EF6</th><th${_scopeId}>\u53D6\u503C/\u8D4B\u503C\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u51B2\u9500\u5355\u53F7</td><td${_scopeId}>EXPENSE_WRITEOFF_IN_QUOTA.WRITEOFF_NO</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u51B2\u9500\u5355\u53F7</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u7CFB\u7EDF\u751F\u6210</td></tr><tr${_scopeId}><td${_scopeId}>\u51B2\u9500\u5934\u5355\u636E\u7F16\u7801</td><td${_scopeId}>EXPENSE_WRITEOFF_IN_QUOTA.WRITEOFF_HEADNO</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u5173\u8054\u51B2\u9500\u5934\u5355\u636E</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u7CFB\u7EDF\u5E26\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>\u5E74\u6708</td><td${_scopeId}>EXPENSE_WRITEOFF_IN_QUOTA.YEARMONTH</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u51B2\u9500\u5E74\u6708</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u7CFB\u7EDF\u5E26\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>\u6CD5\u4EBA\u7F16\u7801</td><td${_scopeId}>EXPENSE_WRITEOFF_IN_QUOTA.BILLING_UNIT_CODE</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u6CD5\u4EBA\u7F16\u7801</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u7CFB\u7EDF\u5E26\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>\u6CD5\u4EBA\u540D\u79F0</td><td${_scopeId}>EXPENSE_WRITEOFF_IN_QUOTA.BILLING_UNIT_NAME</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u6CD5\u4EBA\u5BA2\u6237\u540D\u79F0</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u7CFB\u7EDF\u5E26\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>\u4E8B\u4E1A\u90E8</td><td${_scopeId}>EXPENSE_WRITEOFF_IN_QUOTA.ENTNAME</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u4E8B\u4E1A\u90E8\u540D\u79F0</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u7CFB\u7EDF\u5E26\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>\u6210\u672C\u4E2D\u5FC3</td><td${_scopeId}>EXPENSE_WRITEOFF_IN_QUOTA.COST_CENTER_NAME</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u6210\u672C\u4E2D\u5FC3\u540D\u79F0</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u7CFB\u7EDF\u5E26\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>\u4EA4\u6613\u516C\u53F8</td><td${_scopeId}>EXPENSE_WRITEOFF_IN_QUOTA.TRADING_COMPANY_NAME</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u4EA4\u6613\u516C\u53F8\u540D\u79F0</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u7CFB\u7EDF\u5E26\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>\u51B2\u9500\u542B\u7A0E\u603B\u989D</td><td${_scopeId}>EXPENSE_WRITEOFF_IN_QUOTA.WRITEOFF_TAX_AMT</td><td${_scopeId}>\u6570\u5B57\u663E\u793A\u6846</td><td${_scopeId}>\u51B2\u9500\u542B\u7A0E\u91D1\u989D</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u7CFB\u7EDF\u8BA1\u7B97</td></tr><tr${_scopeId}><td${_scopeId}>\u51B2\u9500\u4E0D\u542B\u7A0E\u603B\u989D</td><td${_scopeId}>EXPENSE_WRITEOFF_IN_QUOTA.WRITEOFF_NOTAX_AMT</td><td${_scopeId}>\u6570\u5B57\u663E\u793A\u6846</td><td${_scopeId}>\u51B2\u9500\u4E0D\u542B\u7A0E\u91D1\u989D</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u7CFB\u7EDF\u8BA1\u7B97</td></tr><tr${_scopeId}><td${_scopeId}>\u51FA\u5E93\u51B2\u9500\u603B\u989D</td><td${_scopeId}>EXPENSE_WRITEOFF_IN_QUOTA.WRITEOFF_SUMAMT</td><td${_scopeId}>\u6570\u5B57\u663E\u793A\u6846</td><td${_scopeId}>\u51FA\u5E93\u51B2\u9500\u603B\u989D</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u7CFB\u7EDF\u8BA1\u7B97</td></tr><tr${_scopeId}><td${_scopeId}>\u540C\u6B65\u65F6\u95F4</td><td${_scopeId}>EXPENSE_WRITEOFF_IN_QUOTA.SYNC_ITEM</td><td${_scopeId}>\u65E5\u671F\u663E\u793A\u6846</td><td${_scopeId}>\u540C\u6B65\u65F6\u95F4</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u63A8\u9001\u540E\u66F4\u65B0</td></tr><tr${_scopeId}><td${_scopeId}>\u5355\u636E\u72B6\u6001</td><td${_scopeId}>EXPENSE_WRITEOFF_IN_QUOTA.BILL_STATUS</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u5355\u636E\u72B6\u6001</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u7CFB\u7EDF\u66F4\u65B0</td></tr><tr${_scopeId}><td${_scopeId}>\u662F\u5426\u5BB6\u88C5</td><td${_scopeId}>EXPENSE_WRITEOFF_IN_QUOTA.IS_HOME</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u662F\u5426\u5BB6\u88C5\u5408\u540C</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>2=\u662F</td></tr></tbody></table>`);
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
                createVNode("td", null, "\u51B2\u9500\u5355\u53F7"),
                createVNode("td", null, "EXPENSE_WRITEOFF_IN_QUOTA.WRITEOFF_NO"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u51B2\u9500\u5355\u53F7"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u7CFB\u7EDF\u751F\u6210")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u51B2\u9500\u5934\u5355\u636E\u7F16\u7801"),
                createVNode("td", null, "EXPENSE_WRITEOFF_IN_QUOTA.WRITEOFF_HEADNO"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u5173\u8054\u51B2\u9500\u5934\u5355\u636E"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u7CFB\u7EDF\u5E26\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5E74\u6708"),
                createVNode("td", null, "EXPENSE_WRITEOFF_IN_QUOTA.YEARMONTH"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u51B2\u9500\u5E74\u6708"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u7CFB\u7EDF\u5E26\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6CD5\u4EBA\u7F16\u7801"),
                createVNode("td", null, "EXPENSE_WRITEOFF_IN_QUOTA.BILLING_UNIT_CODE"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u6CD5\u4EBA\u7F16\u7801"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u7CFB\u7EDF\u5E26\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6CD5\u4EBA\u540D\u79F0"),
                createVNode("td", null, "EXPENSE_WRITEOFF_IN_QUOTA.BILLING_UNIT_NAME"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u6CD5\u4EBA\u5BA2\u6237\u540D\u79F0"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u7CFB\u7EDF\u5E26\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u4E8B\u4E1A\u90E8"),
                createVNode("td", null, "EXPENSE_WRITEOFF_IN_QUOTA.ENTNAME"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u4E8B\u4E1A\u90E8\u540D\u79F0"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u7CFB\u7EDF\u5E26\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6210\u672C\u4E2D\u5FC3"),
                createVNode("td", null, "EXPENSE_WRITEOFF_IN_QUOTA.COST_CENTER_NAME"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u6210\u672C\u4E2D\u5FC3\u540D\u79F0"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u7CFB\u7EDF\u5E26\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u4EA4\u6613\u516C\u53F8"),
                createVNode("td", null, "EXPENSE_WRITEOFF_IN_QUOTA.TRADING_COMPANY_NAME"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u4EA4\u6613\u516C\u53F8\u540D\u79F0"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u7CFB\u7EDF\u5E26\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u51B2\u9500\u542B\u7A0E\u603B\u989D"),
                createVNode("td", null, "EXPENSE_WRITEOFF_IN_QUOTA.WRITEOFF_TAX_AMT"),
                createVNode("td", null, "\u6570\u5B57\u663E\u793A\u6846"),
                createVNode("td", null, "\u51B2\u9500\u542B\u7A0E\u91D1\u989D"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u7CFB\u7EDF\u8BA1\u7B97")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u51B2\u9500\u4E0D\u542B\u7A0E\u603B\u989D"),
                createVNode("td", null, "EXPENSE_WRITEOFF_IN_QUOTA.WRITEOFF_NOTAX_AMT"),
                createVNode("td", null, "\u6570\u5B57\u663E\u793A\u6846"),
                createVNode("td", null, "\u51B2\u9500\u4E0D\u542B\u7A0E\u91D1\u989D"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u7CFB\u7EDF\u8BA1\u7B97")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u51FA\u5E93\u51B2\u9500\u603B\u989D"),
                createVNode("td", null, "EXPENSE_WRITEOFF_IN_QUOTA.WRITEOFF_SUMAMT"),
                createVNode("td", null, "\u6570\u5B57\u663E\u793A\u6846"),
                createVNode("td", null, "\u51FA\u5E93\u51B2\u9500\u603B\u989D"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u7CFB\u7EDF\u8BA1\u7B97")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u540C\u6B65\u65F6\u95F4"),
                createVNode("td", null, "EXPENSE_WRITEOFF_IN_QUOTA.SYNC_ITEM"),
                createVNode("td", null, "\u65E5\u671F\u663E\u793A\u6846"),
                createVNode("td", null, "\u540C\u6B65\u65F6\u95F4"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u63A8\u9001\u540E\u66F4\u65B0")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5355\u636E\u72B6\u6001"),
                createVNode("td", null, "EXPENSE_WRITEOFF_IN_QUOTA.BILL_STATUS"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u5355\u636E\u72B6\u6001"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u7CFB\u7EDF\u66F4\u65B0")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u662F\u5426\u5BB6\u88C5"),
                createVNode("td", null, "EXPENSE_WRITEOFF_IN_QUOTA.IS_HOME"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u662F\u5426\u5BB6\u88C5\u5408\u540C"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "2=\u662F")
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
        _push2(`<blockquote${_scopeId}>\u672C\u9875\u9762\u4E3A\u67E5\u8BE2\u9875\u9762\uFF0C\u65E0\u72EC\u7ACB\u5F39\u7A97\u3002</blockquote>`);
      } else {
        return [
          createVNode("blockquote", null, "\u672C\u9875\u9762\u4E3A\u67E5\u8BE2\u9875\u9762\uFF0C\u65E0\u72EC\u7ACB\u5F39\u7A97\u3002")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, { title: "\u5BFC\u5165" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<blockquote${_scopeId}>\u672C\u9875\u9762\u65E0\u5BFC\u5165\u529F\u80FD\u3002\u51B2\u9500\u6570\u636E\u7531\u5B9A\u65F6\u4EFB\u52A1\u81EA\u52A8\u751F\u6210\u3002</blockquote>`);
      } else {
        return [
          createVNode("blockquote", null, "\u672C\u9875\u9762\u65E0\u5BFC\u5165\u529F\u80FD\u3002\u51B2\u9500\u6570\u636E\u7531\u5B9A\u65F6\u4EFB\u52A1\u81EA\u52A8\u751F\u6210\u3002")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, { title: "\u5176\u4ED6\u6309\u94AE" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u6309\u94AE\u540D\u79F0</th><th${_scopeId}>\u6309\u94AE\u4F5C\u7528</th><th${_scopeId}>\u6240\u5728\u4F4D\u7F6E</th><th${_scopeId}>\u663E\u9690\u6761\u4EF6/\u53EF\u70B9\u51FB\u6761\u4EF6</th><th${_scopeId}>\u5F71\u54CD</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u67E5\u8BE2</td><td${_scopeId}>\u6309\u6761\u4EF6\u67E5\u8BE2\u51B2\u9500\u5217\u8868</td><td${_scopeId}>\u5217\u8868\u9875</td><td${_scopeId}>\u59CB\u7EC8\u53EF\u7528</td><td${_scopeId}>\u8C03\u7528list\u63A5\u53E3</td></tr><tr${_scopeId}><td${_scopeId}>\u67E5\u770B\u660E\u7EC6</td><td${_scopeId}>\u67E5\u770B\u51B2\u9500\u660E\u7EC6</td><td${_scopeId}>\u5217\u8868\u9875</td><td${_scopeId}>\u9009\u4E2D\u4E00\u6761\u8BB0\u5F55</td><td${_scopeId}>\u8C03\u7528detail\u63A5\u53E3</td></tr><tr${_scopeId}><td${_scopeId}>\u63A8\u9001\u5171\u4EAB\u8D22\u52A1</td><td${_scopeId}>\u63A8\u9001\u51B2\u9500\u6570\u636E\u81F3\u5171\u4EAB\u8D22\u52A1\u7CFB\u7EDF</td><td${_scopeId}>\u5217\u8868\u9875</td><td${_scopeId}>\u9009\u4E2D\u672A\u63A8\u9001\u8BB0\u5F55</td><td${_scopeId}>\u8C03\u7528doserviceWithHolding\u63A5\u53E3</td></tr></tbody></table><h4${_scopeId}>\u6309\u94AE1\uFF1A\u67E5\u8BE2\uFF08\u5217\u8868\u9875\uFF09</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u59CB\u7EC8\u53EF\u7528</li><li${_scopeId}><strong${_scopeId}>\u6267\u884C\u903B\u8F91</strong>\uFF1A\u6309\u5E74\u6708\u3001\u4E8B\u4E1A\u90E8\u3001\u4EA4\u6613\u516C\u53F8\u3001\u6CD5\u4EBA\u7B49\u6761\u4EF6\u67E5\u8BE2\u51B2\u9500\u6570\u636E</li><li${_scopeId}><strong${_scopeId}>\u63A5\u53E3\u8C03\u7528</strong>\uFF1AGET <code${_scopeId}>/v1/{organizationId}/expense-writeoff-in-quotas/list</code></li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>*</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> EXPENSE_WRITEOFF_IN_QUOTA </span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (YEARMONTH </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> #{yearmonth} </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>OR</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> #{yearmonth} </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (ENTID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> #{entid} </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>OR</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> #{entid} </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ORDER BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> YEARMONTH </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>DESC</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>, WRITEOFF_NO</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u6309\u94AE2\uFF1A\u63A8\u9001\u5171\u4EAB\u8D22\u52A1\uFF08\u5217\u8868\u9875\uFF09</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u9009\u4E2D\u672A\u63A8\u9001\u8BB0\u5F55</li><li${_scopeId}><strong${_scopeId}>\u6267\u884C\u903B\u8F91</strong>\uFF1A</li><li${_scopeId}>\u7B2C1\u70B9\uFF1A\u5C06\u9009\u4E2D\u51B2\u9500\u6570\u636E\u63A8\u9001\u5230\u5171\u4EAB\u8D22\u52A1\u7CFB\u7EDF(GCCX)</li><li${_scopeId}>\u7B2C2\u70B9\uFF1A\u66F4\u65B0\u540C\u6B65\u65F6\u95F4\u548C\u5355\u636E\u72B6\u6001</li><li${_scopeId}><strong${_scopeId}>\u63A5\u53E3\u8C03\u7528</strong>\uFF1APOST <code${_scopeId}>/v1/{organizationId}/expense-writeoff-in-quotas/doserviceWithHolding</code></li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>*</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> EXPENSE_WRITEOFF_IN_QUOTA </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> WRITEOFF_ID </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (#{ids}) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> BILL_STATUS </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>!=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>1</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
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
                createVNode("td", null, "\u67E5\u8BE2"),
                createVNode("td", null, "\u6309\u6761\u4EF6\u67E5\u8BE2\u51B2\u9500\u5217\u8868"),
                createVNode("td", null, "\u5217\u8868\u9875"),
                createVNode("td", null, "\u59CB\u7EC8\u53EF\u7528"),
                createVNode("td", null, "\u8C03\u7528list\u63A5\u53E3")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u67E5\u770B\u660E\u7EC6"),
                createVNode("td", null, "\u67E5\u770B\u51B2\u9500\u660E\u7EC6"),
                createVNode("td", null, "\u5217\u8868\u9875"),
                createVNode("td", null, "\u9009\u4E2D\u4E00\u6761\u8BB0\u5F55"),
                createVNode("td", null, "\u8C03\u7528detail\u63A5\u53E3")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u63A8\u9001\u5171\u4EAB\u8D22\u52A1"),
                createVNode("td", null, "\u63A8\u9001\u51B2\u9500\u6570\u636E\u81F3\u5171\u4EAB\u8D22\u52A1\u7CFB\u7EDF"),
                createVNode("td", null, "\u5217\u8868\u9875"),
                createVNode("td", null, "\u9009\u4E2D\u672A\u63A8\u9001\u8BB0\u5F55"),
                createVNode("td", null, "\u8C03\u7528doserviceWithHolding\u63A5\u53E3")
              ])
            ])
          ]),
          createVNode("h4", null, "\u6309\u94AE1\uFF1A\u67E5\u8BE2\uFF08\u5217\u8868\u9875\uFF09"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u59CB\u7EC8\u53EF\u7528")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u6267\u884C\u903B\u8F91"),
              createTextVNode("\uFF1A\u6309\u5E74\u6708\u3001\u4E8B\u4E1A\u90E8\u3001\u4EA4\u6613\u516C\u53F8\u3001\u6CD5\u4EBA\u7B49\u6761\u4EF6\u67E5\u8BE2\u51B2\u9500\u6570\u636E")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u63A5\u53E3\u8C03\u7528"),
              createTextVNode("\uFF1AGET "),
              createVNode("code", null, "/v1/{organizationId}/expense-writeoff-in-quotas/list")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " EXPENSE_WRITEOFF_IN_QUOTA ")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " (YEARMONTH "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " #{yearmonth} "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "OR"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " #{yearmonth} "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NULL"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ")")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " (ENTID "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " #{entid} "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "OR"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " #{entid} "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NULL"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ")")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ORDER BY"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " YEARMONTH "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "DESC"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ", WRITEOFF_NO")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u6309\u94AE2\uFF1A\u63A8\u9001\u5171\u4EAB\u8D22\u52A1\uFF08\u5217\u8868\u9875\uFF09"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u9009\u4E2D\u672A\u63A8\u9001\u8BB0\u5F55")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u6267\u884C\u903B\u8F91"),
              createTextVNode("\uFF1A")
            ]),
            createVNode("li", null, "\u7B2C1\u70B9\uFF1A\u5C06\u9009\u4E2D\u51B2\u9500\u6570\u636E\u63A8\u9001\u5230\u5171\u4EAB\u8D22\u52A1\u7CFB\u7EDF(GCCX)"),
            createVNode("li", null, "\u7B2C2\u70B9\uFF1A\u66F4\u65B0\u540C\u6B65\u65F6\u95F4\u548C\u5355\u636E\u72B6\u6001"),
            createVNode("li", null, [
              createVNode("strong", null, "\u63A5\u53E3\u8C03\u7528"),
              createTextVNode("\uFF1APOST "),
              createVNode("code", null, "/v1/{organizationId}/expense-writeoff-in-quotas/doserviceWithHolding")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " EXPENSE_WRITEOFF_IN_QUOTA "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " WRITEOFF_ID "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IN"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " (#{ids}) "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " BILL_STATUS "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "!="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "1"),
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
  _push(ssrRenderComponent(_component_KbCard, { title: "\u4FDD\u5B58\u6821\u9A8C" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<blockquote${_scopeId}>\u672C\u9875\u9762\u4E3A\u67E5\u8BE2\u9875\u9762\uFF0C\u65E0\u4FDD\u5B58\u64CD\u4F5C\u3002</blockquote>`);
      } else {
        return [
          createVNode("blockquote", null, "\u672C\u9875\u9762\u4E3A\u67E5\u8BE2\u9875\u9762\uFF0C\u65E0\u4FDD\u5B58\u64CD\u4F5C\u3002")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, { title: "\u63D0\u4EA4\u6821\u9A8C" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<blockquote${_scopeId}>\u672C\u9875\u9762\u65E0\u63D0\u4EA4\u64CD\u4F5C\u3002</blockquote>`);
      } else {
        return [
          createVNode("blockquote", null, "\u672C\u9875\u9762\u65E0\u63D0\u4EA4\u64CD\u4F5C\u3002")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, { title: "\u72B6\u6001\u673A" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h4${_scopeId}>\u72B6\u6001\u673A\u6D41\u8F6C\u56FE</h4><div class="language-text"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>text</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>\u5B9A\u65F6\u4EFB\u52A1\u751F\u6210 \u2500\u2500\u2192 \u5F85\u63A8\u9001 \u2500\u2500\u63A8\u9001\u5171\u4EAB\u8D22\u52A1\u2500\u2500\u2192 \u5DF2\u63A8\u9001</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}></span></span></code></pre></div><h4${_scopeId}>\u72B6\u6001\u673A\u5217\u8868</h4><table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u72B6\u6001\u673A\u540D\u79F0</th><th${_scopeId}>\u72B6\u6001\u91CA\u4E49</th><th${_scopeId}>\u53EF\u6267\u884C\u7684\u64CD\u4F5C</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>0</td><td${_scopeId}>\u5F85\u63A8\u9001</td><td${_scopeId}>\u67E5\u8BE2\u3001\u67E5\u770B\u660E\u7EC6\u3001\u63A8\u9001\u5171\u4EAB\u8D22\u52A1</td></tr><tr${_scopeId}><td${_scopeId}>1</td><td${_scopeId}>\u5DF2\u63A8\u9001</td><td${_scopeId}>\u67E5\u8BE2\u3001\u67E5\u770B\u660E\u7EC6</td></tr></tbody></table>`);
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "\u5B9A\u65F6\u4EFB\u52A1\u751F\u6210 \u2500\u2500\u2192 \u5F85\u63A8\u9001 \u2500\u2500\u63A8\u9001\u5171\u4EAB\u8D22\u52A1\u2500\u2500\u2192 \u5DF2\u63A8\u9001")
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
                createVNode("td", null, "0"),
                createVNode("td", null, "\u5F85\u63A8\u9001"),
                createVNode("td", null, "\u67E5\u8BE2\u3001\u67E5\u770B\u660E\u7EC6\u3001\u63A8\u9001\u5171\u4EAB\u8D22\u52A1")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "1"),
                createVNode("td", null, "\u5DF2\u63A8\u9001"),
                createVNode("td", null, "\u67E5\u8BE2\u3001\u67E5\u770B\u660E\u7EC6")
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, { title: "\u88681\uFF1AEXPENSE_WRITEOFF_IN_QUOTA\uFF08\u5DE5\u7A0B\u670D\u52A1\u8D39\u51B2\u9500\u6570\u636E\u8868\uFF09" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5B57\u6BB5\u540D</th><th${_scopeId}>\u7C7B\u578B</th><th${_scopeId}>\u91CA\u4E49</th><th${_scopeId}>\u5BF9\u5E94\u754C\u9762\u5B57\u6BB5</th><th${_scopeId}>\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>WRITEOFF_ID</td><td${_scopeId}>BIGINT</td><td${_scopeId}>\u51B2\u9500\u4E3B\u952E</td><td${_scopeId}>-</td><td${_scopeId}>\u81EA\u589E\u4E3B\u952E</td></tr><tr${_scopeId}><td${_scopeId}>WRITEOFF_NO</td><td${_scopeId}>VARCHAR</td><td${_scopeId}>\u51B2\u9500\u5355\u53F7</td><td${_scopeId}>\u51B2\u9500\u5355\u53F7</td><td${_scopeId}>\u7CFB\u7EDF\u751F\u6210</td></tr><tr${_scopeId}><td${_scopeId}>WRITEOFF_HEADNO</td><td${_scopeId}>VARCHAR</td><td${_scopeId}>\u51B2\u9500\u5934\u5355\u636E\u7F16\u7801</td><td${_scopeId}>\u51B2\u9500\u5934\u5355\u636E\u7F16\u7801</td><td${_scopeId}>\u7CFB\u7EDF\u5E26\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>YEARMONTH</td><td${_scopeId}>VARCHAR</td><td${_scopeId}>\u5E74\u6708</td><td${_scopeId}>\u5E74\u6708</td><td${_scopeId}>\u7CFB\u7EDF\u5E26\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>BILLING_UNIT_CODE</td><td${_scopeId}>VARCHAR</td><td${_scopeId}>\u6CD5\u4EBA\u7F16\u7801</td><td${_scopeId}>\u6CD5\u4EBA\u7F16\u7801</td><td${_scopeId}>\u7CFB\u7EDF\u5E26\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>BILLING_UNIT_NAME</td><td${_scopeId}>VARCHAR</td><td${_scopeId}>\u6CD5\u4EBA\u5BA2\u6237\u540D\u79F0</td><td${_scopeId}>\u6CD5\u4EBA\u540D\u79F0</td><td${_scopeId}>\u7CFB\u7EDF\u5E26\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>DIVISION_ID</td><td${_scopeId}>BIGINT</td><td${_scopeId}>\u4E8B\u4E1A\u90E8\u8BCD\u6C47\u503C</td><td${_scopeId}>-</td><td${_scopeId}>\u7CFB\u7EDF\u5E26\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>ENTID</td><td${_scopeId}>BIGINT</td><td${_scopeId}>\u7EC4\u7EC7ID</td><td${_scopeId}>-</td><td${_scopeId}>\u7CFB\u7EDF\u5E26\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>ENTNAME</td><td${_scopeId}>VARCHAR</td><td${_scopeId}>\u4E8B\u4E1A\u90E8\u540D\u79F0</td><td${_scopeId}>\u4E8B\u4E1A\u90E8</td><td${_scopeId}>\u7CFB\u7EDF\u5E26\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>COST_CENTER_CODE</td><td${_scopeId}>VARCHAR</td><td${_scopeId}>\u6210\u672C\u4E2D\u5FC3\u7F16\u7801</td><td${_scopeId}>-</td><td${_scopeId}>\u7CFB\u7EDF\u5E26\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>COST_CENTER_NAME</td><td${_scopeId}>VARCHAR</td><td${_scopeId}>\u6210\u672C\u4E2D\u5FC3\u540D\u79F0</td><td${_scopeId}>\u6210\u672C\u4E2D\u5FC3</td><td${_scopeId}>\u7CFB\u7EDF\u5E26\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>TRADING_COMPANY_NAME</td><td${_scopeId}>VARCHAR</td><td${_scopeId}>\u4EA4\u6613\u516C\u53F8</td><td${_scopeId}>\u4EA4\u6613\u516C\u53F8</td><td${_scopeId}>\u7CFB\u7EDF\u5E26\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>TRADING_COMPANY_CODE</td><td${_scopeId}>VARCHAR</td><td${_scopeId}>\u4EA4\u6613\u516C\u53F8\u7F16\u7801</td><td${_scopeId}>-</td><td${_scopeId}>\u7CFB\u7EDF\u5E26\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>WRITEOFF_TAX_AMT</td><td${_scopeId}>DECIMAL</td><td${_scopeId}>\u51B2\u9500\u542B\u7A0E\u603B\u989D</td><td${_scopeId}>\u51B2\u9500\u542B\u7A0E\u603B\u989D</td><td${_scopeId}>\u7CFB\u7EDF\u8BA1\u7B97</td></tr><tr${_scopeId}><td${_scopeId}>WRITEOFF_NOTAX_AMT</td><td${_scopeId}>DECIMAL</td><td${_scopeId}>\u51B2\u9500\u4E0D\u542B\u7A0E\u603B\u989D</td><td${_scopeId}>\u51B2\u9500\u4E0D\u542B\u7A0E\u603B\u989D</td><td${_scopeId}>\u7CFB\u7EDF\u8BA1\u7B97</td></tr><tr${_scopeId}><td${_scopeId}>WRITEOFF_SUMAMT</td><td${_scopeId}>DECIMAL</td><td${_scopeId}>\u51FA\u5E93\u51B2\u9500\u603B\u989D</td><td${_scopeId}>\u51FA\u5E93\u51B2\u9500\u603B\u989D</td><td${_scopeId}>\u7CFB\u7EDF\u8BA1\u7B97</td></tr><tr${_scopeId}><td${_scopeId}>SYNC_ITEM</td><td${_scopeId}>DATE</td><td${_scopeId}>\u540C\u6B65\u65F6\u95F4</td><td${_scopeId}>\u540C\u6B65\u65F6\u95F4</td><td${_scopeId}>\u63A8\u9001\u540E\u66F4\u65B0</td></tr><tr${_scopeId}><td${_scopeId}>BILL_STATUS</td><td${_scopeId}>BIGINT</td><td${_scopeId}>\u5355\u636E\u72B6\u6001</td><td${_scopeId}>\u5355\u636E\u72B6\u6001</td><td${_scopeId}>\u7CFB\u7EDF\u66F4\u65B0</td></tr><tr${_scopeId}><td${_scopeId}>IS_HOME</td><td${_scopeId}>BIGINT</td><td${_scopeId}>\u662F\u5426\u5BB6\u88C5\u5408\u540C</td><td${_scopeId}>\u662F\u5426\u5BB6\u88C5</td><td${_scopeId}>2=\u662F</td></tr></tbody></table>`);
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
                createVNode("td", null, "WRITEOFF_ID"),
                createVNode("td", null, "BIGINT"),
                createVNode("td", null, "\u51B2\u9500\u4E3B\u952E"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u81EA\u589E\u4E3B\u952E")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "WRITEOFF_NO"),
                createVNode("td", null, "VARCHAR"),
                createVNode("td", null, "\u51B2\u9500\u5355\u53F7"),
                createVNode("td", null, "\u51B2\u9500\u5355\u53F7"),
                createVNode("td", null, "\u7CFB\u7EDF\u751F\u6210")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "WRITEOFF_HEADNO"),
                createVNode("td", null, "VARCHAR"),
                createVNode("td", null, "\u51B2\u9500\u5934\u5355\u636E\u7F16\u7801"),
                createVNode("td", null, "\u51B2\u9500\u5934\u5355\u636E\u7F16\u7801"),
                createVNode("td", null, "\u7CFB\u7EDF\u5E26\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "YEARMONTH"),
                createVNode("td", null, "VARCHAR"),
                createVNode("td", null, "\u5E74\u6708"),
                createVNode("td", null, "\u5E74\u6708"),
                createVNode("td", null, "\u7CFB\u7EDF\u5E26\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "BILLING_UNIT_CODE"),
                createVNode("td", null, "VARCHAR"),
                createVNode("td", null, "\u6CD5\u4EBA\u7F16\u7801"),
                createVNode("td", null, "\u6CD5\u4EBA\u7F16\u7801"),
                createVNode("td", null, "\u7CFB\u7EDF\u5E26\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "BILLING_UNIT_NAME"),
                createVNode("td", null, "VARCHAR"),
                createVNode("td", null, "\u6CD5\u4EBA\u5BA2\u6237\u540D\u79F0"),
                createVNode("td", null, "\u6CD5\u4EBA\u540D\u79F0"),
                createVNode("td", null, "\u7CFB\u7EDF\u5E26\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "DIVISION_ID"),
                createVNode("td", null, "BIGINT"),
                createVNode("td", null, "\u4E8B\u4E1A\u90E8\u8BCD\u6C47\u503C"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u7CFB\u7EDF\u5E26\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "ENTID"),
                createVNode("td", null, "BIGINT"),
                createVNode("td", null, "\u7EC4\u7EC7ID"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u7CFB\u7EDF\u5E26\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "ENTNAME"),
                createVNode("td", null, "VARCHAR"),
                createVNode("td", null, "\u4E8B\u4E1A\u90E8\u540D\u79F0"),
                createVNode("td", null, "\u4E8B\u4E1A\u90E8"),
                createVNode("td", null, "\u7CFB\u7EDF\u5E26\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "COST_CENTER_CODE"),
                createVNode("td", null, "VARCHAR"),
                createVNode("td", null, "\u6210\u672C\u4E2D\u5FC3\u7F16\u7801"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u7CFB\u7EDF\u5E26\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "COST_CENTER_NAME"),
                createVNode("td", null, "VARCHAR"),
                createVNode("td", null, "\u6210\u672C\u4E2D\u5FC3\u540D\u79F0"),
                createVNode("td", null, "\u6210\u672C\u4E2D\u5FC3"),
                createVNode("td", null, "\u7CFB\u7EDF\u5E26\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "TRADING_COMPANY_NAME"),
                createVNode("td", null, "VARCHAR"),
                createVNode("td", null, "\u4EA4\u6613\u516C\u53F8"),
                createVNode("td", null, "\u4EA4\u6613\u516C\u53F8"),
                createVNode("td", null, "\u7CFB\u7EDF\u5E26\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "TRADING_COMPANY_CODE"),
                createVNode("td", null, "VARCHAR"),
                createVNode("td", null, "\u4EA4\u6613\u516C\u53F8\u7F16\u7801"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u7CFB\u7EDF\u5E26\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "WRITEOFF_TAX_AMT"),
                createVNode("td", null, "DECIMAL"),
                createVNode("td", null, "\u51B2\u9500\u542B\u7A0E\u603B\u989D"),
                createVNode("td", null, "\u51B2\u9500\u542B\u7A0E\u603B\u989D"),
                createVNode("td", null, "\u7CFB\u7EDF\u8BA1\u7B97")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "WRITEOFF_NOTAX_AMT"),
                createVNode("td", null, "DECIMAL"),
                createVNode("td", null, "\u51B2\u9500\u4E0D\u542B\u7A0E\u603B\u989D"),
                createVNode("td", null, "\u51B2\u9500\u4E0D\u542B\u7A0E\u603B\u989D"),
                createVNode("td", null, "\u7CFB\u7EDF\u8BA1\u7B97")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "WRITEOFF_SUMAMT"),
                createVNode("td", null, "DECIMAL"),
                createVNode("td", null, "\u51FA\u5E93\u51B2\u9500\u603B\u989D"),
                createVNode("td", null, "\u51FA\u5E93\u51B2\u9500\u603B\u989D"),
                createVNode("td", null, "\u7CFB\u7EDF\u8BA1\u7B97")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "SYNC_ITEM"),
                createVNode("td", null, "DATE"),
                createVNode("td", null, "\u540C\u6B65\u65F6\u95F4"),
                createVNode("td", null, "\u540C\u6B65\u65F6\u95F4"),
                createVNode("td", null, "\u63A8\u9001\u540E\u66F4\u65B0")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "BILL_STATUS"),
                createVNode("td", null, "BIGINT"),
                createVNode("td", null, "\u5355\u636E\u72B6\u6001"),
                createVNode("td", null, "\u5355\u636E\u72B6\u6001"),
                createVNode("td", null, "\u7CFB\u7EDF\u66F4\u65B0")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "IS_HOME"),
                createVNode("td", null, "BIGINT"),
                createVNode("td", null, "\u662F\u5426\u5BB6\u88C5\u5408\u540C"),
                createVNode("td", null, "\u662F\u5426\u5BB6\u88C5"),
                createVNode("td", null, "2=\u662F")
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
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u62A5\u9519\u4FE1\u606F</th><th${_scopeId}>\u63D0\u793A\u8282\u70B9</th><th${_scopeId}>\u6839\u56E0\u4E0E\u89E3\u51B3\u65B9\u6848</th><th${_scopeId}>\u7B49\u7EA7</th><th${_scopeId}>\u8BE6\u7EC6\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u63A8\u9001\u5171\u4EAB\u8D22\u52A1\u5931\u8D25</td><td${_scopeId}>\u63A8\u9001\u65F6</td><td${_scopeId}>\u5171\u4EAB\u8D22\u52A1\u7CFB\u7EDF\u4E0D\u53EF\u7528\u6216\u6570\u636E\u5F02\u5E38\uFF0C\u68C0\u67E5GCCX\u7CFB\u7EDF\u72B6\u6001</td><td${_scopeId}>toast\u63D0\u9192</td><td${_scopeId}>[\u67E5\u770B]</td></tr><tr${_scopeId}><td${_scopeId}>\u51B2\u9500\u6570\u636E\u672A\u751F\u6210</td><td${_scopeId}>\u67E5\u8BE2\u65F6</td><td${_scopeId}>\u5B9A\u65F6\u4EFB\u52A1\u672A\u6267\u884C\uFF0C\u786E\u8BA4ExpenseWriteoffInQuotaJob\u5DF2\u8FD0\u884C</td><td${_scopeId}>toast\u63D0\u9192</td><td${_scopeId}>[\u67E5\u770B]</td></tr><tr${_scopeId}><td${_scopeId}>\u8BF7\u4F20\u5165\u51B2\u9500\u5355\u53F7</td><td${_scopeId}>\u63A8\u9001\u65F6</td><td${_scopeId}>\u672A\u4F20\u5165\u51B2\u9500\u5934\u5355\u53F7\uFF0C\u9700\u9009\u62E9\u6709\u6548\u51B2\u9500\u8BB0\u5F55</td><td${_scopeId}>toast\u63D0\u9192</td><td${_scopeId}>[\u67E5\u770B]</td></tr><tr${_scopeId}><td${_scopeId}>\u63A8\u5171\u4EAB\u9884\u63D0\u65F6\u95F4\u8F6C\u6362\u5F02\u5E38</td><td${_scopeId}>\u63A8\u9001\u65F6</td><td${_scopeId}>\u51B2\u9500\u5E74\u6708\u683C\u5F0F\u9519\u8BEF\u6216\u4E3A\u7A7A\uFF0C\u68C0\u67E5YEARMONTH\u5B57\u6BB5</td><td${_scopeId}>toast\u63D0\u9192</td><td${_scopeId}>[\u67E5\u770B]</td></tr><tr${_scopeId}><td${_scopeId}>\u65F6\u95F4\u683C\u5F0F\u9519\u8BEF\uFF0C\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u65F6\u95F4\u683C\u5F0F\uFF1Ayyyy-MM</td><td${_scopeId}>\u5B9A\u65F6\u4EFB\u52A1</td><td${_scopeId}>\u5B9A\u65F6\u4EFB\u52A1\u53C2\u6570startDate/endDate\u683C\u5F0F\u9519\u8BEF</td><td${_scopeId}>toast\u63D0\u9192</td><td${_scopeId}>[\u67E5\u770B]</td></tr></tbody></table><h4${_scopeId}>\u62A5\u95191\uFF1A\u63A8\u9001\u5171\u4EAB\u8D22\u52A1\u5931\u8D25</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u7528\u6237\u9009\u4E2D\u672A\u63A8\u9001\u8BB0\u5F55\u70B9\u51FB&quot;\u63A8\u9001\u5171\u4EAB\u8D22\u52A1&quot;\uFF0CdoserviceWithHolding\u63A5\u53E3\u63A8\u9001\u81F3GCCX\u7CFB\u7EDF\u65F6\u8FD4\u56DE\u5931\u8D25</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u63A8\u9001\u63A5\u53E3\u5C06EXPENSE_WRITEOFF_IN_QUOTA\u51B2\u9500\u6570\u636E\u63A8\u9001\u81F3\u5171\u4EAB\u8D22\u52A1\u7CFB\u7EDF\uFF08GCCX\uFF09\uFF0C\u5355\u636E\u7C7B\u578B\u5728SharedBillTypeEnum\u4E2D\u5B9A\u4E49\uFF0C\u7F16\u7801\u89C4\u5219\u5728CodeRuleConstants\u4E2D\u5B9A\u4E49\u3002\u5931\u8D25\u6839\u56E0\u6709\u4E09\u7C7B\uFF1A(1)GCCX\u5171\u4EAB\u8D22\u52A1\u7CFB\u7EDF\u4E0D\u53EF\u7528\u6216\u7F51\u7EDC\u4E2D\u65AD\uFF1B(2)\u63A8\u9001\u6570\u636E\u5F02\u5E38\uFF0C\u5982\u51B2\u9500\u542B\u7A0E/\u4E0D\u542B\u7A0E\u91D1\u989D\u4E3A0\u3001\u6CD5\u4EBA\u7F16\u7801\uFF08BILLING_UNIT_CODE\uFF09\u5728GCCX\u4E2D\u4E0D\u5B58\u5728\u3001\u6210\u672C\u4E2D\u5FC3\u7F16\u7801\u4E0D\u5339\u914D\uFF1B(3)GCCX\u4FA7\u91CD\u590D\u63A8\u9001\u6821\u9A8C\u3002\u63A8\u9001\u5931\u8D25\u9700\u68C0\u67E5SYNC_ITEM\u548CBILL_STATUS\u5B57\u6BB5\uFF0C\u4FEE\u590D\u540E\u91CD\u63A8</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> WRITEOFF_ID, WRITEOFF_NO, YEARMONTH, BILLING_UNIT_CODE, BILLING_UNIT_NAME,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         WRITEOFF_TAX_AMT, WRITEOFF_NOTAX_AMT, WRITEOFF_SUMAMT, SYNC_ITEM, BILL_STATUS</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> EXPENSE_WRITEOFF_IN_QUOTA</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> BILL_STATUS </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>!=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>1</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>OR</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> SYNC_ITEM </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95192\uFF1A\u51B2\u9500\u6570\u636E\u672A\u751F\u6210</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u7528\u6237\u6309\u5E74\u6708/\u4E8B\u4E1A\u90E8/\u4EA4\u6613\u516C\u53F8\u67E5\u8BE2\u51B2\u9500\u6570\u636E\uFF0CEXPENSE_WRITEOFF_IN_QUOTA\u8868\u8FD4\u56DE\u7A7A\u7ED3\u679C\u96C6</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u51B2\u9500\u6570\u636E\u7531\u5B9A\u65F6\u4EFB\u52A1ExpenseWriteoffInQuotaJob\u5B9A\u671F\u6267\u884C\u751F\u6210\uFF0C\u4ECE\u5DE5\u7A0B\u670D\u52A1\u8D39\u5151\u73B0\uFF08EXPENSE_TO_CASH\uFF09\u5BA1\u6279\u901A\u8FC7\u7684\u6570\u636E\u4E2D\u63D0\u53D6\u51B2\u9500\u4FE1\u606F\u5199\u5165EXPENSE_WRITEOFF_IN_QUOTA\u8868\u3002\u65E0\u6570\u636E\u6839\u56E0\u6709\u4E09\u7C7B\uFF1A(1)\u5B9A\u65F6\u4EFB\u52A1ExpenseWriteoffInQuotaJob\u672A\u914D\u7F6E\u6216\u672A\u542F\u52A8\uFF1B(2)\u4E0A\u6E38\u5DE5\u7A0B\u670D\u52A1\u8D39\u5151\u73B0\u5355\u672A\u5BA1\u6279\u901A\u8FC7\uFF0C\u65E0\u51B2\u9500\u6570\u636E\u6765\u6E90\uFF1B(3)\u67E5\u8BE2\u7684\u5E74\u6708/\u4E8B\u4E1A\u90E8\u533A\u95F4\u5185\u65E0\u51B2\u9500\u8BB0\u5F55\u3002\u9700\u5148\u786E\u8BA4\u5B9A\u65F6\u4EFB\u52A1\u6267\u884C\u65E5\u5FD7\uFF0C\u518D\u6838\u67E5\u4E0A\u6E38\u5151\u73B0\u5BA1\u6279\u72B6\u6001</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> WRITEOFF_ID, WRITEOFF_NO, YEARMONTH, ENTNAME, TRADING_COMPANY_NAME,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         WRITEOFF_TAX_AMT, BILL_STATUS, SYNC_ITEM</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> EXPENSE_WRITEOFF_IN_QUOTA</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (YEARMONTH </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> #{yearmonth} </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>OR</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> #{yearmonth} </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (ENTID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> #{entid} </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>OR</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> #{entid} </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ORDER BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> YEARMONTH </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>DESC</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>, WRITEOFF_NO;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95193\uFF1A\u8BF7\u4F20\u5165\u51B2\u9500\u5355\u53F7</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u7528\u6237\u70B9\u51FB&quot;\u63A8\u9001\u5171\u4EAB\u8D22\u52A1&quot;\u4F46\u672A\u4F20\u5165\u51B2\u9500\u5934\u5355\u53F7\uFF08headNo\u4E3A\u7A7A\u6216\u7A7A\u5B57\u7B26\u4E32\uFF09</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1AdoserviceWithHolding\u63A5\u53E3\u5728ExpenseWriteoffInQuotaServiceImpl.java:93\u5904\u901A\u8FC7StringUtils.isBlank(headNo)\u6821\u9A8C\u51B2\u9500\u5355\u53F7\u4E3A\u7A7A\u65F6\u629B\u51FACommonException(&quot;\u8BF7\u4F20\u5165\u51B2\u9500\u5355\u53F7\uFF01&quot;)\u3002\u8BE5\u6821\u9A8C\u4E3A\u524D\u7F6E\u53C2\u6570\u6821\u9A8C\uFF0CheadNo\u7528\u4E8E\u67E5\u8BE2\u8868\u5934\u6570\u636E\uFF08selectHead\uFF09\u548C\u7ECF\u9500\u5546\u660E\u7EC6\uFF08selectDealerDetail\uFF09\u3002\u9700\u5728\u5217\u8868\u9875\u9009\u4E2D\u6709\u6548\u7684\u51B2\u9500\u8BB0\u5F55\u540E\u518D\u70B9\u51FB\u63A8\u9001</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> WRITEOFF_ID, WRITEOFF_NO, WRITEOFF_HEADNO, YEARMONTH, BILL_STATUS</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> EXPENSE_WRITEOFF_IN_QUOTA</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> WRITEOFF_HEADNO </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> #{headNo};</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95194\uFF1A\u63A8\u5171\u4EAB\u9884\u63D0\u65F6\u95F4\u8F6C\u6362\u5F02\u5E38</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u63A8\u9001\u5171\u4EAB\u8D22\u52A1\u65F6\uFF0C\u51B2\u9500\u8BB0\u5F55\u7684YEARMONTH\uFF08\u5E74\u6708\uFF09\u5B57\u6BB5\u683C\u5F0F\u9519\u8BEF\u6216\u4E3A\u7A7A\uFF0CLocalDate.parse\u89E3\u6790\u5931\u8D25</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1AdoserviceWithHolding\u63A5\u53E3\u5728ExpenseWriteoffInQuotaServiceImpl.java:161\u548C193\u5904\u5BF9ATTRIBUTE2\uFF08\u5E74\u6708\uFF09\u548CfeeHappendDate\u8FDB\u884CLocalDate.parse\u89E3\u6790\uFF0C\u683C\u5F0F\u4E3Ayyyy-MM-dd\u3002\u5F53YEARMONTH\u683C\u5F0F\u975Eyyyy-MM\uFF08\u5982\u7A7A\u503C\u3001\u4E71\u7801\u3001\u7F3A\u5C11\u5206\u9694\u7B26\uFF09\u65F6\u629B\u51FACommonException(&quot;\u63A8\u5171\u4EAB\u9884\u63D0 \u65F6\u95F4\u8F6C\u6362\u5F02\u5E38&quot;)\u3002\u6839\u56E0\u6709\u4E8C\uFF1A(1)\u5B9A\u65F6\u4EFB\u52A1\u751F\u6210\u51B2\u9500\u6570\u636E\u65F6YEARMONTH\u5B57\u6BB5\u5199\u5165\u5F02\u5E38\uFF1B(2)\u5386\u53F2\u6570\u636EYEARMONTH\u683C\u5F0F\u4E0D\u89C4\u8303\u3002\u9700\u6838\u67E5\u51B2\u9500\u8BB0\u5F55\u7684YEARMONTH\u5B57\u6BB5\u683C\u5F0F</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> WRITEOFF_ID, WRITEOFF_NO, YEARMONTH, BILL_STATUS</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> EXPENSE_WRITEOFF_IN_QUOTA</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> WRITEOFF_HEADNO </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> #{headNo}</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (YEARMONTH </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>OR</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>LENGTH</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>(YEARMONTH) </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>!=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>7</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>OR</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> INSTR(YEARMONTH, </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>-</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>!=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>5</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>);</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95195\uFF1A\u65F6\u95F4\u683C\u5F0F\u9519\u8BEF\uFF0C\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u65F6\u95F4\u683C\u5F0F\uFF1Ayyyy-MM</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u5B9A\u65F6\u4EFB\u52A1ExpenseWriteoffInQuotaJob\u6267\u884C\u65F6\uFF0C\u4F20\u5165\u7684startDate\u6216endDate\u53C2\u6570\u683C\u5F0F\u4E0D\u7B26\u5408yyyy-MM</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1AgenerateExpenseWriteoffInQuota\u65B9\u6CD5\u5728ExpenseWriteoffInQuotaServiceImpl.java:351\u5904\u901A\u8FC7checkDateFormat\u6821\u9A8C\u65F6\u95F4\u683C\u5F0F\uFF0C\u4F7F\u7528SimpleDateFormat(&quot;yyyy-MM&quot;)\u89E3\u6790\uFF0C\u89E3\u6790\u5931\u8D25\u629B\u51FACommonException(&quot;\u3010&quot; + dateStr + &quot;\u3011\u8BE5\u65F6\u95F4\u683C\u5F0F\u9519\u8BEF\uFF0C\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u65F6\u95F4\u683C\u5F0F\uFF1Ayyyy-MM&quot;)\u3002\u8BE5\u5F02\u5E38\u9488\u5BF9\u5B9A\u65F6\u4EFB\u52A1\u53C2\u6570\u914D\u7F6E\uFF0C\u975E\u9875\u9762\u64CD\u4F5C\u89E6\u53D1\u3002\u9700\u68C0\u67E5\u5B9A\u65F6\u4EFB\u52A1\u53C2\u6570\u914D\u7F6E\u4E2DPARAM_START_DATE\u548CPARAM_END_DATE\u7684\u683C\u5F0F</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- \u6838\u67E5\u5B9A\u65F6\u4EFB\u52A1\u53C2\u6570\u914D\u7F6E\uFF08\u4F2ASQL\uFF0C\u5177\u4F53\u8868\u540D\u4F9D\u5B9A\u65F6\u4EFB\u52A1\u6846\u67B6\u800C\u5B9A\uFF09</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> JOB_NAME, PARAM_START_DATE, PARAM_END_DATE</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> JOB_CONFIG</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> JOB_NAME </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>com.arrow.dms.ae.biz.job.api.ExpenseWriteoffInQuotaJob</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
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
                createVNode("td", null, "\u63A8\u9001\u5171\u4EAB\u8D22\u52A1\u5931\u8D25"),
                createVNode("td", null, "\u63A8\u9001\u65F6"),
                createVNode("td", null, "\u5171\u4EAB\u8D22\u52A1\u7CFB\u7EDF\u4E0D\u53EF\u7528\u6216\u6570\u636E\u5F02\u5E38\uFF0C\u68C0\u67E5GCCX\u7CFB\u7EDF\u72B6\u6001"),
                createVNode("td", null, "toast\u63D0\u9192"),
                createVNode("td", null, "[\u67E5\u770B]")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u51B2\u9500\u6570\u636E\u672A\u751F\u6210"),
                createVNode("td", null, "\u67E5\u8BE2\u65F6"),
                createVNode("td", null, "\u5B9A\u65F6\u4EFB\u52A1\u672A\u6267\u884C\uFF0C\u786E\u8BA4ExpenseWriteoffInQuotaJob\u5DF2\u8FD0\u884C"),
                createVNode("td", null, "toast\u63D0\u9192"),
                createVNode("td", null, "[\u67E5\u770B]")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u8BF7\u4F20\u5165\u51B2\u9500\u5355\u53F7"),
                createVNode("td", null, "\u63A8\u9001\u65F6"),
                createVNode("td", null, "\u672A\u4F20\u5165\u51B2\u9500\u5934\u5355\u53F7\uFF0C\u9700\u9009\u62E9\u6709\u6548\u51B2\u9500\u8BB0\u5F55"),
                createVNode("td", null, "toast\u63D0\u9192"),
                createVNode("td", null, "[\u67E5\u770B]")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u63A8\u5171\u4EAB\u9884\u63D0\u65F6\u95F4\u8F6C\u6362\u5F02\u5E38"),
                createVNode("td", null, "\u63A8\u9001\u65F6"),
                createVNode("td", null, "\u51B2\u9500\u5E74\u6708\u683C\u5F0F\u9519\u8BEF\u6216\u4E3A\u7A7A\uFF0C\u68C0\u67E5YEARMONTH\u5B57\u6BB5"),
                createVNode("td", null, "toast\u63D0\u9192"),
                createVNode("td", null, "[\u67E5\u770B]")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u65F6\u95F4\u683C\u5F0F\u9519\u8BEF\uFF0C\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u65F6\u95F4\u683C\u5F0F\uFF1Ayyyy-MM"),
                createVNode("td", null, "\u5B9A\u65F6\u4EFB\u52A1"),
                createVNode("td", null, "\u5B9A\u65F6\u4EFB\u52A1\u53C2\u6570startDate/endDate\u683C\u5F0F\u9519\u8BEF"),
                createVNode("td", null, "toast\u63D0\u9192"),
                createVNode("td", null, "[\u67E5\u770B]")
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95191\uFF1A\u63A8\u9001\u5171\u4EAB\u8D22\u52A1\u5931\u8D25"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode('\uFF1A\u7528\u6237\u9009\u4E2D\u672A\u63A8\u9001\u8BB0\u5F55\u70B9\u51FB"\u63A8\u9001\u5171\u4EAB\u8D22\u52A1"\uFF0CdoserviceWithHolding\u63A5\u53E3\u63A8\u9001\u81F3GCCX\u7CFB\u7EDF\u65F6\u8FD4\u56DE\u5931\u8D25')
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u63A8\u9001\u63A5\u53E3\u5C06EXPENSE_WRITEOFF_IN_QUOTA\u51B2\u9500\u6570\u636E\u63A8\u9001\u81F3\u5171\u4EAB\u8D22\u52A1\u7CFB\u7EDF\uFF08GCCX\uFF09\uFF0C\u5355\u636E\u7C7B\u578B\u5728SharedBillTypeEnum\u4E2D\u5B9A\u4E49\uFF0C\u7F16\u7801\u89C4\u5219\u5728CodeRuleConstants\u4E2D\u5B9A\u4E49\u3002\u5931\u8D25\u6839\u56E0\u6709\u4E09\u7C7B\uFF1A(1)GCCX\u5171\u4EAB\u8D22\u52A1\u7CFB\u7EDF\u4E0D\u53EF\u7528\u6216\u7F51\u7EDC\u4E2D\u65AD\uFF1B(2)\u63A8\u9001\u6570\u636E\u5F02\u5E38\uFF0C\u5982\u51B2\u9500\u542B\u7A0E/\u4E0D\u542B\u7A0E\u91D1\u989D\u4E3A0\u3001\u6CD5\u4EBA\u7F16\u7801\uFF08BILLING_UNIT_CODE\uFF09\u5728GCCX\u4E2D\u4E0D\u5B58\u5728\u3001\u6210\u672C\u4E2D\u5FC3\u7F16\u7801\u4E0D\u5339\u914D\uFF1B(3)GCCX\u4FA7\u91CD\u590D\u63A8\u9001\u6821\u9A8C\u3002\u63A8\u9001\u5931\u8D25\u9700\u68C0\u67E5SYNC_ITEM\u548CBILL_STATUS\u5B57\u6BB5\uFF0C\u4FEE\u590D\u540E\u91CD\u63A8")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " WRITEOFF_ID, WRITEOFF_NO, YEARMONTH, BILLING_UNIT_CODE, BILLING_UNIT_NAME,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         WRITEOFF_TAX_AMT, WRITEOFF_NOTAX_AMT, WRITEOFF_SUMAMT, SYNC_ITEM, BILL_STATUS")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " EXPENSE_WRITEOFF_IN_QUOTA")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " BILL_STATUS "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "!="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "1"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "OR"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " SYNC_ITEM "),
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
          createVNode("h4", null, "\u62A5\u95192\uFF1A\u51B2\u9500\u6570\u636E\u672A\u751F\u6210"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u7528\u6237\u6309\u5E74\u6708/\u4E8B\u4E1A\u90E8/\u4EA4\u6613\u516C\u53F8\u67E5\u8BE2\u51B2\u9500\u6570\u636E\uFF0CEXPENSE_WRITEOFF_IN_QUOTA\u8868\u8FD4\u56DE\u7A7A\u7ED3\u679C\u96C6")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u51B2\u9500\u6570\u636E\u7531\u5B9A\u65F6\u4EFB\u52A1ExpenseWriteoffInQuotaJob\u5B9A\u671F\u6267\u884C\u751F\u6210\uFF0C\u4ECE\u5DE5\u7A0B\u670D\u52A1\u8D39\u5151\u73B0\uFF08EXPENSE_TO_CASH\uFF09\u5BA1\u6279\u901A\u8FC7\u7684\u6570\u636E\u4E2D\u63D0\u53D6\u51B2\u9500\u4FE1\u606F\u5199\u5165EXPENSE_WRITEOFF_IN_QUOTA\u8868\u3002\u65E0\u6570\u636E\u6839\u56E0\u6709\u4E09\u7C7B\uFF1A(1)\u5B9A\u65F6\u4EFB\u52A1ExpenseWriteoffInQuotaJob\u672A\u914D\u7F6E\u6216\u672A\u542F\u52A8\uFF1B(2)\u4E0A\u6E38\u5DE5\u7A0B\u670D\u52A1\u8D39\u5151\u73B0\u5355\u672A\u5BA1\u6279\u901A\u8FC7\uFF0C\u65E0\u51B2\u9500\u6570\u636E\u6765\u6E90\uFF1B(3)\u67E5\u8BE2\u7684\u5E74\u6708/\u4E8B\u4E1A\u90E8\u533A\u95F4\u5185\u65E0\u51B2\u9500\u8BB0\u5F55\u3002\u9700\u5148\u786E\u8BA4\u5B9A\u65F6\u4EFB\u52A1\u6267\u884C\u65E5\u5FD7\uFF0C\u518D\u6838\u67E5\u4E0A\u6E38\u5151\u73B0\u5BA1\u6279\u72B6\u6001")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " WRITEOFF_ID, WRITEOFF_NO, YEARMONTH, ENTNAME, TRADING_COMPANY_NAME,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         WRITEOFF_TAX_AMT, BILL_STATUS, SYNC_ITEM")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " EXPENSE_WRITEOFF_IN_QUOTA")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " (YEARMONTH "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " #{yearmonth} "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "OR"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " #{yearmonth} "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NULL"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ")")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " (ENTID "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " #{entid} "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "OR"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " #{entid} "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NULL"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ")")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ORDER BY"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " YEARMONTH "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "DESC"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ", WRITEOFF_NO;")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95193\uFF1A\u8BF7\u4F20\u5165\u51B2\u9500\u5355\u53F7"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode('\uFF1A\u7528\u6237\u70B9\u51FB"\u63A8\u9001\u5171\u4EAB\u8D22\u52A1"\u4F46\u672A\u4F20\u5165\u51B2\u9500\u5934\u5355\u53F7\uFF08headNo\u4E3A\u7A7A\u6216\u7A7A\u5B57\u7B26\u4E32\uFF09')
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode('\uFF1AdoserviceWithHolding\u63A5\u53E3\u5728ExpenseWriteoffInQuotaServiceImpl.java:93\u5904\u901A\u8FC7StringUtils.isBlank(headNo)\u6821\u9A8C\u51B2\u9500\u5355\u53F7\u4E3A\u7A7A\u65F6\u629B\u51FACommonException("\u8BF7\u4F20\u5165\u51B2\u9500\u5355\u53F7\uFF01")\u3002\u8BE5\u6821\u9A8C\u4E3A\u524D\u7F6E\u53C2\u6570\u6821\u9A8C\uFF0CheadNo\u7528\u4E8E\u67E5\u8BE2\u8868\u5934\u6570\u636E\uFF08selectHead\uFF09\u548C\u7ECF\u9500\u5546\u660E\u7EC6\uFF08selectDealerDetail\uFF09\u3002\u9700\u5728\u5217\u8868\u9875\u9009\u4E2D\u6709\u6548\u7684\u51B2\u9500\u8BB0\u5F55\u540E\u518D\u70B9\u51FB\u63A8\u9001')
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " WRITEOFF_ID, WRITEOFF_NO, WRITEOFF_HEADNO, YEARMONTH, BILL_STATUS")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " EXPENSE_WRITEOFF_IN_QUOTA")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " WRITEOFF_HEADNO "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " #{headNo};")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95194\uFF1A\u63A8\u5171\u4EAB\u9884\u63D0\u65F6\u95F4\u8F6C\u6362\u5F02\u5E38"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u63A8\u9001\u5171\u4EAB\u8D22\u52A1\u65F6\uFF0C\u51B2\u9500\u8BB0\u5F55\u7684YEARMONTH\uFF08\u5E74\u6708\uFF09\u5B57\u6BB5\u683C\u5F0F\u9519\u8BEF\u6216\u4E3A\u7A7A\uFF0CLocalDate.parse\u89E3\u6790\u5931\u8D25")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode('\uFF1AdoserviceWithHolding\u63A5\u53E3\u5728ExpenseWriteoffInQuotaServiceImpl.java:161\u548C193\u5904\u5BF9ATTRIBUTE2\uFF08\u5E74\u6708\uFF09\u548CfeeHappendDate\u8FDB\u884CLocalDate.parse\u89E3\u6790\uFF0C\u683C\u5F0F\u4E3Ayyyy-MM-dd\u3002\u5F53YEARMONTH\u683C\u5F0F\u975Eyyyy-MM\uFF08\u5982\u7A7A\u503C\u3001\u4E71\u7801\u3001\u7F3A\u5C11\u5206\u9694\u7B26\uFF09\u65F6\u629B\u51FACommonException("\u63A8\u5171\u4EAB\u9884\u63D0 \u65F6\u95F4\u8F6C\u6362\u5F02\u5E38")\u3002\u6839\u56E0\u6709\u4E8C\uFF1A(1)\u5B9A\u65F6\u4EFB\u52A1\u751F\u6210\u51B2\u9500\u6570\u636E\u65F6YEARMONTH\u5B57\u6BB5\u5199\u5165\u5F02\u5E38\uFF1B(2)\u5386\u53F2\u6570\u636EYEARMONTH\u683C\u5F0F\u4E0D\u89C4\u8303\u3002\u9700\u6838\u67E5\u51B2\u9500\u8BB0\u5F55\u7684YEARMONTH\u5B57\u6BB5\u683C\u5F0F')
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " WRITEOFF_ID, WRITEOFF_NO, YEARMONTH, BILL_STATUS")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " EXPENSE_WRITEOFF_IN_QUOTA")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " WRITEOFF_HEADNO "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " #{headNo}")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " (YEARMONTH "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NULL"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "OR"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "LENGTH"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "(YEARMONTH) "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "!="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "7"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "OR"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " INSTR(YEARMONTH, "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "-"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "!="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "5"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ");")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95195\uFF1A\u65F6\u95F4\u683C\u5F0F\u9519\u8BEF\uFF0C\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u65F6\u95F4\u683C\u5F0F\uFF1Ayyyy-MM"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u5B9A\u65F6\u4EFB\u52A1ExpenseWriteoffInQuotaJob\u6267\u884C\u65F6\uFF0C\u4F20\u5165\u7684startDate\u6216endDate\u53C2\u6570\u683C\u5F0F\u4E0D\u7B26\u5408yyyy-MM")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode('\uFF1AgenerateExpenseWriteoffInQuota\u65B9\u6CD5\u5728ExpenseWriteoffInQuotaServiceImpl.java:351\u5904\u901A\u8FC7checkDateFormat\u6821\u9A8C\u65F6\u95F4\u683C\u5F0F\uFF0C\u4F7F\u7528SimpleDateFormat("yyyy-MM")\u89E3\u6790\uFF0C\u89E3\u6790\u5931\u8D25\u629B\u51FACommonException("\u3010" + dateStr + "\u3011\u8BE5\u65F6\u95F4\u683C\u5F0F\u9519\u8BEF\uFF0C\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u65F6\u95F4\u683C\u5F0F\uFF1Ayyyy-MM")\u3002\u8BE5\u5F02\u5E38\u9488\u5BF9\u5B9A\u65F6\u4EFB\u52A1\u53C2\u6570\u914D\u7F6E\uFF0C\u975E\u9875\u9762\u64CD\u4F5C\u89E6\u53D1\u3002\u9700\u68C0\u67E5\u5B9A\u65F6\u4EFB\u52A1\u53C2\u6570\u914D\u7F6E\u4E2DPARAM_START_DATE\u548CPARAM_END_DATE\u7684\u683C\u5F0F')
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
                  createVNode("span", { style: { "color": "#676E95" } }, "-- \u6838\u67E5\u5B9A\u65F6\u4EFB\u52A1\u53C2\u6570\u914D\u7F6E\uFF08\u4F2ASQL\uFF0C\u5177\u4F53\u8868\u540D\u4F9D\u5B9A\u65F6\u4EFB\u52A1\u6846\u67B6\u800C\u5B9A\uFF09")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "SELECT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " JOB_NAME, PARAM_START_DATE, PARAM_END_DATE")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " JOB_CONFIG")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " JOB_NAME "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "com.arrow.dms.ae.biz.job.api.ExpenseWriteoffInQuotaJob"),
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
  _push(ssrRenderComponent(_component_KbCard, { title: "\u5E38\u89C1\u95EE\u9898" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}>\u95EE\u98981\uFF1A\u51B2\u9500\u6570\u636E\u4E0D\u53CA\u65F6</li><li${_scopeId}>\u539F\u56E0\uFF1A\u5B9A\u65F6\u4EFB\u52A1ExpenseWriteoffInQuotaJob\u672A\u6267\u884C\u6216\u6267\u884C\u95F4\u9694\u8FC7\u957F</li><li${_scopeId}>\u89E3\u51B3\u601D\u8DEF\uFF1A\u68C0\u67E5\u5B9A\u65F6\u4EFB\u52A1\u914D\u7F6E\uFF0C\u786E\u8BA4\u6267\u884C\u9891\u7387</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, "\u95EE\u98981\uFF1A\u51B2\u9500\u6570\u636E\u4E0D\u53CA\u65F6"),
            createVNode("li", null, "\u539F\u56E0\uFF1A\u5B9A\u65F6\u4EFB\u52A1ExpenseWriteoffInQuotaJob\u672A\u6267\u884C\u6216\u6267\u884C\u95F4\u9694\u8FC7\u957F"),
            createVNode("li", null, "\u89E3\u51B3\u601D\u8DEF\uFF1A\u68C0\u67E5\u5B9A\u65F6\u4EFB\u52A1\u914D\u7F6E\uFF0C\u786E\u8BA4\u6267\u884C\u9891\u7387")
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
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u65E5\u671F</th><th${_scopeId}>\u63D0\u4EA4ID</th><th${_scopeId}>\u63D0\u4EA4\u4EBA</th><th${_scopeId}>\u63D0\u4EA4\u5185\u5BB9</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>2026-08-30</td><td${_scopeId}>-</td><td${_scopeId}>AI</td><td${_scopeId}>\u6309skill\u89C4\u8303\u91CD\u5199\uFF0C\u8865\u5145\u754C\u9762\u6A21\u5757\u3001\u6570\u636E\u5E93\u8868\u8BE6\u89E3</td></tr><tr${_scopeId}><td${_scopeId}>2025-10-29</td><td${_scopeId}>-</td><td${_scopeId}>-</td><td${_scopeId}>\u521D\u59CB\u521B\u5EFAExpenseWriteoffInQuota\u5B9E\u4F53</td></tr></tbody></table>`);
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
                createVNode("td", null, "AI"),
                createVNode("td", null, "\u6309skill\u89C4\u8303\u91CD\u5199\uFF0C\u8865\u5145\u754C\u9762\u6A21\u5757\u3001\u6570\u636E\u5E93\u8868\u8BE6\u89E3")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "2025-10-29"),
                createVNode("td", null, "-"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u521D\u59CB\u521B\u5EFAExpenseWriteoffInQuota\u5B9E\u4F53")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("\u8D22\u52A1\u7BA1\u7406/\u9884\u63D0\u4E0E\u51B2\u9500/\u5DE5\u7A0B\u670D\u52A1\u8D39\u51B2\u9500/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
