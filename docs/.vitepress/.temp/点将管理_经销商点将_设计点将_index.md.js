import { resolveComponent, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.6ab74304.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"\u70B9\u5C06\u7BA1\u7406/\u7ECF\u9500\u5546\u70B9\u5C06/\u8BBE\u8BA1\u70B9\u5C06/index.md"}');
const _sfc_main = { name: "\u70B9\u5C06\u7BA1\u7406/\u7ECF\u9500\u5546\u70B9\u5C06/\u8BBE\u8BA1\u70B9\u5C06/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_BreadcrumbTabs = resolveComponent("BreadcrumbTabs");
  const _component_KbCard = resolveComponent("KbCard");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_BreadcrumbTabs, null, null, _parent));
  _push(`<div id="biz-intro" style="${ssrRenderStyle({ "display": "none" })}"><div class="tab-pad"><div class="kl-wrap"><div class="kl-card"><div class="biz-kl-hdr"><span class="biz-tag" style="${ssrRenderStyle({ "background": "rgba(124,58,237,0.08)", "color": "#7C3AED", "border-color": "rgba(124,58,237,0.18)" })}"> \u5B9A\u4E49</span><h2>\u7ECF\u9500\u5546\u4FA7\u7684\u8BBE\u8BA1\u70B9\u5C06\u662F\u4EC0\u4E48</h2><p>\u7ECF\u9500\u5546\u67E5\u770B\u8BBE\u8BA1\u5E08\u6D3E\u9A7B\u672C\u5546\u6237\u95E8\u5E97\u7684\u670D\u52A1\u5B89\u6392\u5E76\u786E\u8BA4\u63A5\u5F85</p></div><div class="biz-2col-inner"><div class="kl-col-box"><div style="${ssrRenderStyle({ "display": "flex", "align-items": "center", "gap": "10px", "margin-bottom": "12px" })}"><div style="${ssrRenderStyle({ "width": "40px", "height": "40px", "border-radius": "10px", "display": "flex", "align-items": "center", "justify-content": "center", "background": "linear-gradient(135deg,#7c3aed,#6d28d9)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="3" width="5" height="5" rx="1" stroke="white" stroke-width="1.5"></rect><path d="M3 6.5L4.5 8L7 5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9 5H14" stroke="white" stroke-width="1.5" stroke-linecap="round"></path><rect x="2" y="10" width="5" height="3" rx="1" stroke="white" stroke-width="1.5"></rect><path d="M9 10H14" stroke="white" stroke-width="1.5" stroke-linecap="round"></path><path d="M9 13H13" stroke="white" stroke-width="1.5" stroke-linecap="round"></path></svg></div><h4 style="${ssrRenderStyle({ "font-size": "1rem", "font-weight": "800", "color": "#1F2937", "margin": "0" })}">\u89E3\u51B3\u4EC0\u4E48\u95EE\u9898</h4></div><p style="${ssrRenderStyle({ "font-size": "0.78rem", "font-weight": "600", "color": "#6B7280", "margin": "0 0 10px" })}">\u8BA9\u95E8\u5E97\u6E05\u695A\u77E5\u9053\u8C01\u6765\u3001\u4EC0\u4E48\u65F6\u5019\u6765\u505A\u8BBE\u8BA1\u652F\u6301</p><div style="${ssrRenderStyle({ "display": "flex", "flex-direction": "column", "gap": "8px" })}"><div style="${ssrRenderStyle({ "display": "flex", "align-items": "flex-start", "gap": "8px", "padding": "8px 10px", "background": "#F5F3FF", "border-radius": "8px" })}"><div style="${ssrRenderStyle({ "font-size": ".75rem" })}"><strong>\u8BBE\u8BA1\u80FD\u529B\u9700\u5916\u90E8\u652F\u6301</strong> \u2014 \u95E8\u5E97\u7F3A\u5C11\u4E13\u804C\u8BBE\u8BA1\u5E08\uFF0C\u9700\u8981\u96C6\u56E2\u8BBE\u8BA1\u5E08\u5230\u5E97\u652F\u6301\u65B9\u6848\u4E0E\u5BA2\u6237\u8DDF\u5355\u3002</div></div><div style="${ssrRenderStyle({ "display": "flex", "align-items": "flex-start", "gap": "8px", "padding": "8px 10px", "background": "#F5F3FF", "border-radius": "8px" })}"><div style="${ssrRenderStyle({ "font-size": ".75rem" })}"><strong>\u670D\u52A1\u671F\u8981\u63D0\u524D\u5BF9\u9F50</strong> \u2014 \u95E8\u5E97\u9700\u6309\u8BBE\u8BA1\u5E08\u670D\u52A1\u671F\u5B89\u6392\u5BA2\u6237\u9884\u7EA6\u3001\u91CF\u623F\u4E0E\u65B9\u6848\u6C9F\u901A\uFF0C\u907F\u514D\u8D44\u6E90\u7A7A\u8F6C\u3002</div></div></div></div><div class="kl-col-box alt"><div style="${ssrRenderStyle({ "display": "flex", "align-items": "center", "gap": "10px", "margin-bottom": "12px" })}"><div style="${ssrRenderStyle({ "width": "40px", "height": "40px", "border-radius": "10px", "display": "flex", "align-items": "center", "justify-content": "center", "background": "linear-gradient(135deg,#10b981,#059669)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="2" width="10" height="12" rx="1.5" stroke="white" stroke-width="1.5"></rect><path d="M5 6H11M5 9H9" stroke="white" stroke-width="1.5" stroke-linecap="round"></path></svg></div><h4 style="${ssrRenderStyle({ "font-size": "1rem", "font-weight": "800", "color": "#1F2937", "margin": "0" })}">\u80FD\u770B\u5230\u4EC0\u4E48</h4></div><p style="${ssrRenderStyle({ "font-size": "0.78rem", "font-weight": "600", "color": "#6B7280", "margin": "0 0 10px" })}">\u4E00\u6761\u8BBE\u8BA1\u70B9\u5C06\u7684\u5173\u952E\u4FE1\u606F</p><div style="${ssrRenderStyle({ "display": "flex", "flex-direction": "column", "gap": "8px" })}"><div style="${ssrRenderStyle({ "display": "flex", "align-items": "flex-start", "gap": "8px", "padding": "8px 10px", "background": "#F0FDF4", "border-radius": "8px", "border": "1px solid #D1FAE5" })}"><div style="${ssrRenderStyle({ "font-size": ".75rem" })}"><strong>\u8BBE\u8BA1\u5E08\u4E0E\u7EA7\u522B</strong> \u2014 \u6D3E\u9A7B\u7684\u662F\u54EA\u4F4D\u8BBE\u8BA1\u5E08\u3001\u5904\u4E8E\u4EC0\u4E48\u7EA7\u522B\u3002</div></div><div style="${ssrRenderStyle({ "display": "flex", "align-items": "flex-start", "gap": "8px", "padding": "8px 10px", "background": "#F0FDF4", "border-radius": "8px", "border": "1px solid #D1FAE5" })}"><div style="${ssrRenderStyle({ "font-size": ".75rem" })}"><strong>\u670D\u52A1\u95E8\u5E97\u4E0E\u670D\u52A1\u671F</strong> \u2014 \u670D\u52A1\u54EA\u5BB6\u95E8\u5E97\u3001\u670D\u52A1\u8D77\u6B62\u65F6\u95F4\u3002</div></div><div style="${ssrRenderStyle({ "display": "flex", "align-items": "flex-start", "gap": "8px", "padding": "8px 10px", "background": "#EDE9FE", "border-radius": "8px" })}"><div style="${ssrRenderStyle({ "font-size": ".75rem" })}"><strong>\u5F53\u524D\u72B6\u6001</strong> \u2014 \u8BE5\u70B9\u5C06\u5904\u4E8E\u7533\u8BF7\u3001\u5BA1\u6279\u8FD8\u662F\u5DF2\u751F\u6548\u5F85\u670D\u52A1\u9636\u6BB5\u3002</div></div></div></div></div></div><div class="kl-card"><div class="biz-kl-hdr"><span class="biz-tag" style="${ssrRenderStyle({ "background": "rgba(124,58,237,0.08)", "color": "#7C3AED", "border-color": "rgba(124,58,237,0.18)" })}"> \u6D41\u7A0B</span><h2>\u7ECF\u9500\u5546\u4FA7\u7684\u5904\u7406\u94FE\u8DEF</h2><p>\u63A5\u5230\u901A\u77E5 \u2192 \u67E5\u770B\u670D\u52A1\u5B89\u6392 \u2192 \u786E\u8BA4\u63A5\u5F85 \u2192 \u670D\u52A1\u6267\u884C\u7559\u75D5</p></div><div class="biz-steps"><div class="biz-step-item"><div class="biz-step-circle" style="${ssrRenderStyle({ "background": "linear-gradient(135deg,#7C3AED,#6D28D9)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 2C5.5 2 4 3.8 4 6V9L2.5 11.5H13.5L12 9V6C12 3.8 10.5 2 8 2Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6.5 11.5C6.5 12.6 7.2 13.5 8 13.5C8.8 13.5 9.5 12.6 9.5 11.5" stroke="white" stroke-width="1.5" stroke-linecap="round"></path></svg></div><h5>\u63A5\u6536\u70B9\u5C06\u901A\u77E5</h5><small>\u8BBE\u8BA1\u5E08\u4FA7\u53D1\u8D77\u70B9\u5C06<br>\u540E\u7ECF\u9500\u5546\u4FA7\u53EF\u89C1</small></div><div class="biz-step-arrow">\u2192</div><div class="biz-step-item"><div class="biz-step-circle" style="${ssrRenderStyle({ "background": "linear-gradient(135deg,#F59E0B,#FBBF24)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="2" width="10" height="12" rx="1.5" stroke="white" stroke-width="1.5"></rect><path d="M5 6H11M5 9H11" stroke="white" stroke-width="1.5" stroke-linecap="round"></path></svg></div><h5>\u67E5\u770B\u670D\u52A1\u8BE6\u60C5</h5><small>\u6838\u5BF9\u8BBE\u8BA1\u5E08\xB7\u95E8\u5E97<br>\u4E0E\u670D\u52A1\u65F6\u95F4</small></div><div class="biz-step-arrow">\u2192</div><div class="biz-step-item"><div class="biz-step-circle" style="${ssrRenderStyle({ "background": "linear-gradient(135deg,#10B981,#34D399)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="6" stroke="white" stroke-width="1.5"></circle><path d="M5 8L7 10L11 6" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></div><h5>\u786E\u8BA4\u670D\u52A1\u5B89\u6392</h5><small>\u53CD\u9988\u5230\u5E97\u63A5\u5F85<br>\u4E0E\u5BA2\u6237\u5BF9\u63A5\u5B89\u6392</small></div><div class="biz-step-arrow">\u2192</div><div class="biz-step-item"><div class="biz-step-circle" style="${ssrRenderStyle({ "background": "linear-gradient(135deg,#3B82F6,#60A5FA)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 12L6 8L10 10L14 4" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></div><h5>\u670D\u52A1\u6267\u884C\u7559\u75D5</h5><small>\u5F62\u6210\u670D\u52A1\u6267\u884C\u8BB0\u5F55<br>\u4E0E\u70B9\u5C06\u72B6\u6001\u66F4\u65B0</small></div></div><div class="kl-tip" style="${ssrRenderStyle({ "margin-top": "14px" })}"><strong>\u6570\u636E\u8FB9\u754C\uFF1A</strong>\u672C\u9875\u4E3A\u7ECF\u9500\u5546\u89C6\u89D2\u7684\u53EA\u8BFB\u67E5\u8BE2\uFF0C\u4EC5\u5C55\u793A\u5F53\u524D\u767B\u5F55\u7ECF\u9500\u5546\u81EA\u8EAB\u7684\u8BBE\u8BA1\u70B9\u5C06\uFF0C\u4E0D\u80FD\u65B0\u5EFA\u6216\u4FEE\u6539\uFF1B\u70B9\u5C06\u7684\u7533\u8BF7\u4E0E\u5BA1\u6279\u5728\u8BBE\u8BA1\u5E08\u70B9\u5C06\u7BA1\u7406\u4E2D\u5B8C\u6210\u3002 </div></div></div></div></div><div id="biz-flow" style="${ssrRenderStyle({ "display": "none" })}"><div class="tab-pad"><div class="bf-truth-flow"><h4 class="bf-main-title">\u8BBE\u8BA1\u70B9\u5C06 \u2014 \u5168\u94FE\u8DEF\u6D41\u7A0B\u56FE</h4><p class="bf-main-sub">\u5F00\u59CB \u2192 \u63A5\u6536\u88AB\u70B9\u5C06\u901A\u77E5 \u2192 \u2605\u67E5\u770B\u5E76\u786E\u8BA4\u8BBE\u8BA1\u70B9\u5C06\u2605 \u2192 \u786E\u8BA4/\u53CD\u9988\u670D\u52A1\u5B89\u6392 \u2192 \u7ED3\u675F</p><div class="bf-fc-svg-wrap"><svg class="bf-fc-svg" style="${ssrRenderStyle({ "max-height": "none" })}" viewBox="0 0 1200 580" xmlns="http://www.w3.org/2000/svg"><defs><marker id="arr-green" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon points="0,0 10,5 0,10" fill="#16A34A"></polygon></marker><marker id="arr-gray" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon points="0,0 10,5 0,10" fill="#9CA3AF"></polygon></marker><marker id="arr-blue" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon points="0,0 10,5 0,10" fill="#3B82F6"></polygon></marker><marker id="arr-red" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon points="0,0 10,5 0,10" fill="#EF4444"></polygon></marker><filter id="shadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000" flood-opacity="0.15"></feDropShadow></filter></defs><rect x="50" y="20" width="1100" height="95" rx="8" fill="#EFF6FF" stroke="#3B82F6" stroke-width="1.5" stroke-dasharray="6,4"></rect><text x="600" y="42" text-anchor="middle" fill="#1D4ED8" font-size="13" font-weight="600">\u4E0A\u6E38\u652F\u6491</text><rect x="270" y="56" width="150" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"></rect><text x="345" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">\u8BBE\u8BA1\u5E08\u53D1\u8D77</text><rect x="440" y="56" width="150" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"></rect><text x="515" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">\u7ECF\u9500\u5546\u4E3B\u6863</text><rect x="610" y="56" width="150" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"></rect><text x="685" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">\u95E8\u5E97\u4E3B\u6863</text><rect x="780" y="56" width="150" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"></rect><text x="855" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">\u8BBE\u8BA1\u5E08\u4E3B\u6863</text><line x1="235" y1="115" x2="235" y2="150" stroke="#3B82F6" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#arr-blue)"></line><rect x="195" y="150" width="80" height="44" rx="6" fill="#FAF5FF" stroke="#9333EA" stroke-width="1.5" stroke-dasharray="5,3"></rect><text x="235" y="177" text-anchor="middle" fill="#7C3AED" font-size="13" font-weight="600">\u5F00\u59CB</text><line x1="235" y1="194" x2="235" y2="230" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"></line><rect x="155" y="230" width="160" height="54" rx="6" fill="#16A34A" stroke="#15803D" stroke-width="2" filter="url(#shadow)"></rect><text x="235" y="254" text-anchor="middle" fill="#FFFFFF" font-size="13" font-weight="700">\u2605\u67E5\u770B\u5E76\u786E\u8BA4\u8BBE\u8BA1\u70B9\u5C06\u2605</text><text x="235" y="272" text-anchor="middle" fill="#DCFCE7" font-size="10">\u67E5\u770B\u8BBE\u8BA1\u5E08/\u670D\u52A1\u65F6\u95F4/\u95E8\u5E97</text><line x1="235" y1="284" x2="235" y2="310" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"></line><rect x="150" y="310" width="170" height="40" rx="6" fill="#F0FDF4" stroke="#16A34A" stroke-width="2"></rect><text x="235" y="335" text-anchor="middle" fill="#166534" font-size="13" font-weight="600">\u786E\u8BA4/\u53CD\u9988\u670D\u52A1\u5B89\u6392</text><line x1="235" y1="350" x2="235" y2="370" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"></line><rect x="180" y="370" width="110" height="40" rx="6" fill="#FAF5FF" stroke="#9333EA" stroke-width="1.5" stroke-dasharray="5,3"></rect><text x="235" y="395" text-anchor="middle" fill="#7C3AED" font-size="13" font-weight="600">\u7ED3\u675F</text><line x1="235" y1="410" x2="235" y2="460" stroke="#16A34A" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#arr-green)"></line><rect x="50" y="460" width="1100" height="95" rx="8" fill="#F0FDF4" stroke="#16A34A" stroke-width="1.5" stroke-dasharray="6,4"></rect><text x="600" y="482" text-anchor="middle" fill="#166534" font-size="13" font-weight="600">\u4E0B\u6E38\u5F71\u54CD</text><rect x="355" y="500" width="150" height="36" rx="5" fill="#FFFFFF" stroke="#16A34A" stroke-width="1.2"></rect><text x="430" y="523" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">\u670D\u52A1\u786E\u8BA4\u56DE\u6267</text><rect x="525" y="500" width="150" height="36" rx="5" fill="#FFFFFF" stroke="#16A34A" stroke-width="1.2"></rect><text x="600" y="523" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">\u670D\u52A1\u6267\u884C\u8BB0\u5F55</text><rect x="695" y="500" width="150" height="36" rx="5" fill="#FFFFFF" stroke="#16A34A" stroke-width="1.2"></rect><text x="770" y="523" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">\u70B9\u5C06\u72B6\u6001\u66F4\u65B0</text></svg></div><div class="bf-fc-legend"><span class="bf-fc-legend-item"><span class="bf-fc-dot bf-fc-dot-green"></span> \u4E3B\u6D41\u7A0B\u6B65\u9AA4</span><span class="bf-fc-legend-item"><span class="bf-fc-dot bf-fc-dot-purple"></span> \u5F00\u59CB/\u7ED3\u675F</span><span class="bf-fc-legend-item"><span class="bf-fc-dot bf-fc-dot-blue"></span> \u4E0A\u6E38\u652F\u6491</span><span class="bf-fc-legend-item"><span style="${ssrRenderStyle({ "display": "inline-block", "width": "22px", "height": "2px", "background": "#EF4444" })}"></span> \u5BA1\u6279\u62D2\u7EDD/\u9A73\u56DE</span></div></div></div></div><div id="key-logic" style="${ssrRenderStyle({ "display": "none" })}"><div class="tab-pad"><div class="kl-wrap">`);
  _push(ssrRenderComponent(_component_KbCard, {
    num: "1",
    title: "\u91CD\u70B9\u903B\u8F911\uFF1A\u7ECF\u9500\u5546\u53D1\u8D77\u89C6\u89D2"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u610F\u4E49</strong>\uFF1A\u672C\u83DC\u5355\u7531\u7ECF\u9500\u5546\u4E3B\u52A8\u53D1\u8D77\u8BBE\u8BA1\u70B9\u5C06\u7533\u8BF7\uFF0C\u7ECF\u9500\u5546\u81EA\u4E3B\u9009\u62E9\u95E8\u5E97\u3001\u8BBE\u8BA1\u5E08\u4E0E\u8BBE\u8BA1\u4FE1\u606F\u3002</li><li${_scopeId}><strong${_scopeId}>\u5177\u4F53\u903B\u8F91\u63CF\u8FF0</strong>\uFF1A\u901A\u8FC7<code${_scopeId}>dealer</code>\u8DEF\u5F84\u63A5\u53E3\uFF08dealerPage\u3001dealerSave\u3001dealerSaveAndSubmit\uFF09\u5B9E\u73B0\u7ECF\u9500\u5546\u53D1\u8D77\uFF0C\u540E\u7AEF\u81EA\u52A8\u6309\u5F53\u524D\u767B\u5F55\u7ECF\u9500\u5546\u8FC7\u6EE4\u6570\u636E\u5E76\u5199\u5165DEALER_CODE\u3001DEALER_NAME\u3002</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u610F\u4E49"),
              createTextVNode("\uFF1A\u672C\u83DC\u5355\u7531\u7ECF\u9500\u5546\u4E3B\u52A8\u53D1\u8D77\u8BBE\u8BA1\u70B9\u5C06\u7533\u8BF7\uFF0C\u7ECF\u9500\u5546\u81EA\u4E3B\u9009\u62E9\u95E8\u5E97\u3001\u8BBE\u8BA1\u5E08\u4E0E\u8BBE\u8BA1\u4FE1\u606F\u3002")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u5177\u4F53\u903B\u8F91\u63CF\u8FF0"),
              createTextVNode("\uFF1A\u901A\u8FC7"),
              createVNode("code", null, "dealer"),
              createTextVNode("\u8DEF\u5F84\u63A5\u53E3\uFF08dealerPage\u3001dealerSave\u3001dealerSaveAndSubmit\uFF09\u5B9E\u73B0\u7ECF\u9500\u5546\u53D1\u8D77\uFF0C\u540E\u7AEF\u81EA\u52A8\u6309\u5F53\u524D\u767B\u5F55\u7ECF\u9500\u5546\u8FC7\u6EE4\u6570\u636E\u5E76\u5199\u5165DEALER_CODE\u3001DEALER_NAME\u3002")
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, {
    num: "2",
    title: "\u91CD\u70B9\u903B\u8F912\uFF1A\u6570\u636E\u8303\u56F4\u9694\u79BB"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u610F\u4E49</strong>\uFF1A\u7ECF\u9500\u5546\u4EC5\u80FD\u67E5\u770B\u548C\u64CD\u4F5C\u81EA\u5DF1\u53D1\u8D77\u7684\u8BBE\u8BA1\u70B9\u5C06\u8BB0\u5F55\uFF0C\u907F\u514D\u8DE8\u7ECF\u9500\u5546\u6570\u636E\u6CC4\u9732\u3002</li><li${_scopeId}><strong${_scopeId}>\u5177\u4F53\u903B\u8F91\u63CF\u8FF0</strong>\uFF1A\u901A\u8FC7<code${_scopeId}>dealer</code>\u8DEF\u5F84\u63A5\u53E3\u81EA\u52A8\u6309\u5F53\u524D\u767B\u5F55\u7ECF\u9500\u5546\u8FC7\u6EE4\uFF0C\u524D\u7AEF\u65E0\u9700\u4F20\u7ECF\u9500\u5546\u53C2\u6570\u3002</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u610F\u4E49"),
              createTextVNode("\uFF1A\u7ECF\u9500\u5546\u4EC5\u80FD\u67E5\u770B\u548C\u64CD\u4F5C\u81EA\u5DF1\u53D1\u8D77\u7684\u8BBE\u8BA1\u70B9\u5C06\u8BB0\u5F55\uFF0C\u907F\u514D\u8DE8\u7ECF\u9500\u5546\u6570\u636E\u6CC4\u9732\u3002")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u5177\u4F53\u903B\u8F91\u63CF\u8FF0"),
              createTextVNode("\uFF1A\u901A\u8FC7"),
              createVNode("code", null, "dealer"),
              createTextVNode("\u8DEF\u5F84\u63A5\u53E3\u81EA\u52A8\u6309\u5F53\u524D\u767B\u5F55\u7ECF\u9500\u5546\u8FC7\u6EE4\uFF0C\u524D\u7AEF\u65E0\u9700\u4F20\u7ECF\u9500\u5546\u53C2\u6570\u3002")
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, {
    num: "3",
    title: "\u91CD\u70B9\u903B\u8F913\uFF1AapplyCode\u81EA\u52A8\u751F\u6210"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u610F\u4E49</strong>\uFF1A\u4FDD\u8BC1\u8BBE\u8BA1\u70B9\u5C06\u7533\u8BF7\u7F16\u7801\u5168\u5C40\u552F\u4E00\u3001\u53EF\u8FFD\u6EAF\uFF0C\u4F5C\u4E3A\u4E3B\u952E\u8D2F\u7A7F\u5168\u94FE\u8DEF\u3002</li><li${_scopeId}><strong${_scopeId}>\u5177\u4F53\u903B\u8F91\u63CF\u8FF0</strong>\uFF1A\u63D0\u4EA4\u7533\u8BF7\u65F6\u7CFB\u7EDF\u81EA\u52A8\u751F\u6210\u552F\u4E00\u7F16\u7801applyCode\uFF0C\u5199\u5165APPLY_CODE\u5B57\u6BB5\u3002</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u610F\u4E49"),
              createTextVNode("\uFF1A\u4FDD\u8BC1\u8BBE\u8BA1\u70B9\u5C06\u7533\u8BF7\u7F16\u7801\u5168\u5C40\u552F\u4E00\u3001\u53EF\u8FFD\u6EAF\uFF0C\u4F5C\u4E3A\u4E3B\u952E\u8D2F\u7A7F\u5168\u94FE\u8DEF\u3002")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u5177\u4F53\u903B\u8F91\u63CF\u8FF0"),
              createTextVNode("\uFF1A\u63D0\u4EA4\u7533\u8BF7\u65F6\u7CFB\u7EDF\u81EA\u52A8\u751F\u6210\u552F\u4E00\u7F16\u7801applyCode\uFF0C\u5199\u5165APPLY_CODE\u5B57\u6BB5\u3002")
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, {
    num: "4",
    title: "\u91CD\u70B9\u903B\u8F914\uFF1A\u8BBE\u8BA1\u70B9\u5C06\u72EC\u7279\u6D41\u7A0B"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u610F\u4E49</strong>\uFF1A\u8BBE\u8BA1\u70B9\u5C06\u533A\u522B\u4E8E\u5176\u4ED6\u70B9\u5C06\u7C7B\u578B\uFF0C\u5305\u542B\u5B8C\u6574\u7684\u8BBE\u8BA1\u670D\u52A1\u6D41\u7A0B\uFF1A\u7533\u8BF7\u2192\u5BA1\u6279\u2192\u5F00\u59CB\u8BBE\u8BA1\u2192\u4E0A\u4F20\u56FE\u7EB8\u2192\u56FE\u7EB8\u786E\u8BA4\u2192\u4E0B\u5355\u2192\u5B8C\u6210\u3002</li><li${_scopeId}><strong${_scopeId}>\u5177\u4F53\u903B\u8F91\u63CF\u8FF0</strong>\uFF1A\u5BA1\u6279\u901A\u8FC7\u540E\u7531\u8BBE\u8BA1\u5E08\u5F00\u59CB\u8BBE\u8BA1\uFF08startDesign\uFF09\uFF0C\u4E0A\u4F20\u8BBE\u8BA1\u56FE\u7EB8\uFF08upload\uFF09\uFF0C\u7ECF\u9500\u5546\u8FDB\u884C\u56FE\u7EB8\u786E\u8BA4\uFF08startDrawingConfirm\uFF09\uFF0C\u786E\u8BA4\u540E\u4E0B\u5355\uFF08startOrder\uFF09\uFF0C\u533A\u57DF\u786E\u8BA4\uFF08areaConfirm\uFF09\uFF0C\u6700\u7EC8\u5B8C\u6210\u3002\u4EFB\u4E00\u73AF\u8282\u53EF\u7EC8\u6B62\uFF08termination\uFF09\u3002</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u610F\u4E49"),
              createTextVNode("\uFF1A\u8BBE\u8BA1\u70B9\u5C06\u533A\u522B\u4E8E\u5176\u4ED6\u70B9\u5C06\u7C7B\u578B\uFF0C\u5305\u542B\u5B8C\u6574\u7684\u8BBE\u8BA1\u670D\u52A1\u6D41\u7A0B\uFF1A\u7533\u8BF7\u2192\u5BA1\u6279\u2192\u5F00\u59CB\u8BBE\u8BA1\u2192\u4E0A\u4F20\u56FE\u7EB8\u2192\u56FE\u7EB8\u786E\u8BA4\u2192\u4E0B\u5355\u2192\u5B8C\u6210\u3002")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u5177\u4F53\u903B\u8F91\u63CF\u8FF0"),
              createTextVNode("\uFF1A\u5BA1\u6279\u901A\u8FC7\u540E\u7531\u8BBE\u8BA1\u5E08\u5F00\u59CB\u8BBE\u8BA1\uFF08startDesign\uFF09\uFF0C\u4E0A\u4F20\u8BBE\u8BA1\u56FE\u7EB8\uFF08upload\uFF09\uFF0C\u7ECF\u9500\u5546\u8FDB\u884C\u56FE\u7EB8\u786E\u8BA4\uFF08startDrawingConfirm\uFF09\uFF0C\u786E\u8BA4\u540E\u4E0B\u5355\uFF08startOrder\uFF09\uFF0C\u533A\u57DF\u786E\u8BA4\uFF08areaConfirm\uFF09\uFF0C\u6700\u7EC8\u5B8C\u6210\u3002\u4EFB\u4E00\u73AF\u8282\u53EF\u7EC8\u6B62\uFF08termination\uFF09\u3002")
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, {
    num: "5",
    title: "\u91CD\u70B9\u903B\u8F915\uFF1A\u591A\u7EA7\u5BA1\u6279\u5173\u8054"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u610F\u4E49</strong>\uFF1A\u8BBE\u8BA1\u70B9\u5C06\u6D89\u53CA\u8BB2\u5E08\u5BA1\u6279\u3001\u95E8\u5E97\u5BA1\u6279\u7B49\u591A\u7EA7\u5BA1\u6279\u6D41\u7A0B\uFF0C\u786E\u4FDD\u8BBE\u8BA1\u670D\u52A1\u5404\u65B9\u786E\u8BA4\u3002</li><li${_scopeId}><strong${_scopeId}>\u5177\u4F53\u903B\u8F91\u63CF\u8FF0</strong>\uFF1A\u8BBE\u8BA1\u70B9\u5C06\u6D89\u53CAdesignApplyApproval\uFF08\u8BB2\u5E08\u5BA1\u6279designApplyLecturerApproval\uFF09\u3001designApplyTerminalApproval\uFF08\u95E8\u5E97\u5BA1\u6279\uFF09\u3001designApplyCancelApproval\uFF08\u53D6\u6D88\u5BA1\u6279\uFF09\u7B49\u591A\u7EA7\u5BA1\u6279\u6D41\u7A0B\u3002</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u610F\u4E49"),
              createTextVNode("\uFF1A\u8BBE\u8BA1\u70B9\u5C06\u6D89\u53CA\u8BB2\u5E08\u5BA1\u6279\u3001\u95E8\u5E97\u5BA1\u6279\u7B49\u591A\u7EA7\u5BA1\u6279\u6D41\u7A0B\uFF0C\u786E\u4FDD\u8BBE\u8BA1\u670D\u52A1\u5404\u65B9\u786E\u8BA4\u3002")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u5177\u4F53\u903B\u8F91\u63CF\u8FF0"),
              createTextVNode("\uFF1A\u8BBE\u8BA1\u70B9\u5C06\u6D89\u53CAdesignApplyApproval\uFF08\u8BB2\u5E08\u5BA1\u6279designApplyLecturerApproval\uFF09\u3001designApplyTerminalApproval\uFF08\u95E8\u5E97\u5BA1\u6279\uFF09\u3001designApplyCancelApproval\uFF08\u53D6\u6D88\u5BA1\u6279\uFF09\u7B49\u591A\u7EA7\u5BA1\u6279\u6D41\u7A0B\u3002")
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, {
    num: "6",
    title: "\u91CD\u70B9\u903B\u8F916\uFF1A\u4E0B\u8F7D\u56FE\u7EB8\u4E0E\u53CD\u9988"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u610F\u4E49</strong>\uFF1A\u7ECF\u9500\u5546\u53EF\u4E0B\u8F7D\u8BBE\u8BA1\u5E08\u4E0A\u4F20\u7684\u56FE\u7EB8\u5E76\u53CD\u9988\u610F\u89C1\uFF0C\u5F62\u6210\u8BBE\u8BA1\u6C9F\u901A\u95ED\u73AF\u3002</li><li${_scopeId}><strong${_scopeId}>\u5177\u4F53\u903B\u8F91\u63CF\u8FF0</strong>\uFF1A\u884C\u64CD\u4F5C&quot;\u4E0B\u8F7D\u56FE\u7EB8&quot;\uFF0C\u5F39\u7A97\u5C55\u793A\u4E09\u7C7B\u56FE\u7EB8\uFF1A\u8BBE\u8BA1\u56FE\uFF08designTableDS\uFF09\u3001\u6548\u679C\u56FE\uFF08renderingTableDS\uFF09\u3001\u65BD\u5DE5\u53CA\u8F6F\u88C5\u56FE\uFF08constructionTableDS\uFF09\u3002\u901A\u8FC7<code${_scopeId}>downloadDrawing</code>\u63A5\u53E3\u52A0\u8F7D\uFF0C\u6BCF\u7C7B\u56FE\u7EB8\u5C55\u793A\u6587\u4EF6\u540D\u79F0\uFF08\u53EF\u70B9\u51FB\u9884\u89C8\uFF09\u548C\u53CD\u9988\u6309\u94AE\u3002\u70B9\u51FB\u53CD\u9988\u6309\u94AE\u5F39\u7A97\u5C55\u793A\u53CD\u9988\u610F\u89C1\uFF08feedbackComments\uFF0CTextArea\uFF0C\u5FC5\u586B\uFF09\u548C\u5386\u53F2\u53CD\u9988\u8BB0\u5F55\uFF08feedbackListDS\uFF0C\u901A\u8FC7<code${_scopeId}>queryFeedback</code>\u63A5\u53E3\u52A0\u8F7D\uFF09\u3002\u901A\u8FC7\uFF1AfeedbackResult=approved\uFF1B\u9A73\u56DE\uFF1AfeedbackResult=reject\u3002\u8C03\u7528<code${_scopeId}>POST feedback</code>\u63A5\u53E3\uFF0C\u53C2\u6570\u5305\u542BapplyCode\u3001designDrawingId\u3001feedbackResult\u3002</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u610F\u4E49"),
              createTextVNode("\uFF1A\u7ECF\u9500\u5546\u53EF\u4E0B\u8F7D\u8BBE\u8BA1\u5E08\u4E0A\u4F20\u7684\u56FE\u7EB8\u5E76\u53CD\u9988\u610F\u89C1\uFF0C\u5F62\u6210\u8BBE\u8BA1\u6C9F\u901A\u95ED\u73AF\u3002")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u5177\u4F53\u903B\u8F91\u63CF\u8FF0"),
              createTextVNode('\uFF1A\u884C\u64CD\u4F5C"\u4E0B\u8F7D\u56FE\u7EB8"\uFF0C\u5F39\u7A97\u5C55\u793A\u4E09\u7C7B\u56FE\u7EB8\uFF1A\u8BBE\u8BA1\u56FE\uFF08designTableDS\uFF09\u3001\u6548\u679C\u56FE\uFF08renderingTableDS\uFF09\u3001\u65BD\u5DE5\u53CA\u8F6F\u88C5\u56FE\uFF08constructionTableDS\uFF09\u3002\u901A\u8FC7'),
              createVNode("code", null, "downloadDrawing"),
              createTextVNode("\u63A5\u53E3\u52A0\u8F7D\uFF0C\u6BCF\u7C7B\u56FE\u7EB8\u5C55\u793A\u6587\u4EF6\u540D\u79F0\uFF08\u53EF\u70B9\u51FB\u9884\u89C8\uFF09\u548C\u53CD\u9988\u6309\u94AE\u3002\u70B9\u51FB\u53CD\u9988\u6309\u94AE\u5F39\u7A97\u5C55\u793A\u53CD\u9988\u610F\u89C1\uFF08feedbackComments\uFF0CTextArea\uFF0C\u5FC5\u586B\uFF09\u548C\u5386\u53F2\u53CD\u9988\u8BB0\u5F55\uFF08feedbackListDS\uFF0C\u901A\u8FC7"),
              createVNode("code", null, "queryFeedback"),
              createTextVNode("\u63A5\u53E3\u52A0\u8F7D\uFF09\u3002\u901A\u8FC7\uFF1AfeedbackResult=approved\uFF1B\u9A73\u56DE\uFF1AfeedbackResult=reject\u3002\u8C03\u7528"),
              createVNode("code", null, "POST feedback"),
              createTextVNode("\u63A5\u53E3\uFF0C\u53C2\u6570\u5305\u542BapplyCode\u3001designDrawingId\u3001feedbackResult\u3002")
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, {
    num: "7",
    title: "\u91CD\u70B9\u903B\u8F917\uFF1A\u9762\u79EF\u786E\u8BA4/\u56FE\u7EB8\u786E\u8BA4"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u610F\u4E49</strong>\uFF1A\u9762\u79EF\u786E\u8BA4\u7528\u4E8E\u786E\u8BA4\u8BBE\u8BA1\u9762\u79EF\u4EE5\u8BA1\u7B97\u8D39\u7528\uFF0C\u56FE\u7EB8\u786E\u8BA4\u7528\u4E8E\u786E\u8BA4\u8BBE\u8BA1\u56FE\u7EB8\u6EE1\u8DB3\u9700\u6C42\u3002</li><li${_scopeId}><strong${_scopeId}>\u5177\u4F53\u903B\u8F91\u63CF\u8FF0</strong>\uFF1A\u9762\u79EF\u786E\u8BA4\u6821\u9A8C approvalState === &#39;fdd_in_approval&#39;\uFF08FDD\u7B7E\u7F72\u4E2D\uFF09\uFF0C\u8C03\u7528<code${_scopeId}>useFDD</code>\u7B7E\u5408\u540C\uFF1B\u56FE\u7EB8\u786E\u8BA4\u6821\u9A8C settlementConfirmState === &#39;to_be_confirm&#39;\uFF08\u5F85\u786E\u8BA4\uFF09\uFF0C\u8C03\u7528<code${_scopeId}>useFDD</code>\u7B7E\u7ED3\u7B97\u5408\u540C\u3002</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u610F\u4E49"),
              createTextVNode("\uFF1A\u9762\u79EF\u786E\u8BA4\u7528\u4E8E\u786E\u8BA4\u8BBE\u8BA1\u9762\u79EF\u4EE5\u8BA1\u7B97\u8D39\u7528\uFF0C\u56FE\u7EB8\u786E\u8BA4\u7528\u4E8E\u786E\u8BA4\u8BBE\u8BA1\u56FE\u7EB8\u6EE1\u8DB3\u9700\u6C42\u3002")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u5177\u4F53\u903B\u8F91\u63CF\u8FF0"),
              createTextVNode("\uFF1A\u9762\u79EF\u786E\u8BA4\u6821\u9A8C approvalState === 'fdd_in_approval'\uFF08FDD\u7B7E\u7F72\u4E2D\uFF09\uFF0C\u8C03\u7528"),
              createVNode("code", null, "useFDD"),
              createTextVNode("\u7B7E\u5408\u540C\uFF1B\u56FE\u7EB8\u786E\u8BA4\u6821\u9A8C settlementConfirmState === 'to_be_confirm'\uFF08\u5F85\u786E\u8BA4\uFF09\uFF0C\u8C03\u7528"),
              createVNode("code", null, "useFDD"),
              createTextVNode("\u7B7E\u7ED3\u7B97\u5408\u540C\u3002")
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, {
    num: "8",
    title: "\u91CD\u70B9\u903B\u8F918\uFF1A\u6548\u679C\u56FE\u8865\u7533"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u610F\u4E49</strong>\uFF1A\u5BF9\u5DF2\u5B8C\u6210\u7684\u7533\u8BF7\u8FDB\u884C\u6548\u679C\u56FE\u8865\u5145\u7533\u8BF7\uFF0C\u5173\u8054\u539F\u7533\u8BF7\u3002</li><li${_scopeId}><strong${_scopeId}>\u5177\u4F53\u903B\u8F91\u63CF\u8FF0</strong>\uFF1A\u884C\u64CD\u4F5C&quot;\u6548\u679C\u56FE\u8865\u7533&quot;\uFF0C\u8DF3\u8F6C<code${_scopeId}>/detail/{applyCode}/supplement</code>\uFF0C\u4F7F\u7528dealerSaveSupplement/dealerSaveAndSubmitSupplement\u63A5\u53E3\u4FDD\u5B58\uFF0C\u5199\u5165RELATION_APPLY_CODE\u5173\u8054\u539F\u7533\u8BF7\uFF0CAPPLY_TYPE=&#39;supplement&#39;\u3002</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u610F\u4E49"),
              createTextVNode("\uFF1A\u5BF9\u5DF2\u5B8C\u6210\u7684\u7533\u8BF7\u8FDB\u884C\u6548\u679C\u56FE\u8865\u5145\u7533\u8BF7\uFF0C\u5173\u8054\u539F\u7533\u8BF7\u3002")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u5177\u4F53\u903B\u8F91\u63CF\u8FF0"),
              createTextVNode('\uFF1A\u884C\u64CD\u4F5C"\u6548\u679C\u56FE\u8865\u7533"\uFF0C\u8DF3\u8F6C'),
              createVNode("code", null, "/detail/{applyCode}/supplement"),
              createTextVNode("\uFF0C\u4F7F\u7528dealerSaveSupplement/dealerSaveAndSubmitSupplement\u63A5\u53E3\u4FDD\u5B58\uFF0C\u5199\u5165RELATION_APPLY_CODE\u5173\u8054\u539F\u7533\u8BF7\uFF0CAPPLY_TYPE='supplement'\u3002")
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, {
    num: "9",
    title: "\u91CD\u70B9\u903B\u8F919\uFF1A\u8BBE\u8BA1\u6539\u6D3E"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u610F\u4E49</strong>\uFF1A\u5BF9\u5DF2\u751F\u6548\u7684\u8BBE\u8BA1\u70B9\u5C06\u53EF\u6539\u6D3E\u8BBE\u8BA1\u5E08\uFF0C\u5E94\u5BF9\u8BBE\u8BA1\u5E08\u6863\u671F\u53D8\u66F4\u3002</li><li${_scopeId}><strong${_scopeId}>\u5177\u4F53\u903B\u8F91\u63CF\u8FF0</strong>\uFF1A\u8C03\u7528<code${_scopeId}>designReassignment</code>\u63A5\u53E3\uFF0C\u66F4\u6362\u8BBE\u8BA1\u5E08\u5E76\u91CD\u65B0\u8D70\u5BA1\u6279\u6D41\u7A0B\u3002</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u610F\u4E49"),
              createTextVNode("\uFF1A\u5BF9\u5DF2\u751F\u6548\u7684\u8BBE\u8BA1\u70B9\u5C06\u53EF\u6539\u6D3E\u8BBE\u8BA1\u5E08\uFF0C\u5E94\u5BF9\u8BBE\u8BA1\u5E08\u6863\u671F\u53D8\u66F4\u3002")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u5177\u4F53\u903B\u8F91\u63CF\u8FF0"),
              createTextVNode("\uFF1A\u8C03\u7528"),
              createVNode("code", null, "designReassignment"),
              createTextVNode("\u63A5\u53E3\uFF0C\u66F4\u6362\u8BBE\u8BA1\u5E08\u5E76\u91CD\u65B0\u8D70\u5BA1\u6279\u6D41\u7A0B\u3002")
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, {
    num: "10",
    title: "\u91CD\u70B9\u903B\u8F9110\uFF1A\u884C\u64CD\u4F5C\u663E\u9690"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u610F\u4E49</strong>\uFF1A\u6839\u636E\u7533\u8BF7\u72B6\u6001\u5DEE\u5F02\u5316\u5C55\u793A\u884C\u64CD\u4F5C\uFF0C\u907F\u514D\u8BEF\u64CD\u4F5C\u3002</li><li${_scopeId}><strong${_scopeId}>\u5177\u4F53\u903B\u8F91\u63CF\u8FF0</strong>\uFF1A\u7F16\u8F91\u518D\u53D1\u8D77\uFF1AorderLectureState === &#39;draft&#39; \u6216 approvalState \u4E3A reject/oa_reject/fdd_reject\uFF1B\u6548\u679C\u56FE\u8865\u7533\uFF1A\u59CB\u7EC8\u663E\u793A\uFF0C\u8DF3\u8F6C<code${_scopeId}>/detail/{applyCode}/supplement</code>\uFF1B\u4E0B\u8F7D\u56FE\u7EB8\uFF1A\u59CB\u7EC8\u663E\u793A\uFF1B\u7EC8\u6B62\uFF1A\u6839\u636E\u8BBE\u8BA1\u6D41\u7A0B\u72B6\u6001\u663E\u793A\u3002</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u610F\u4E49"),
              createTextVNode("\uFF1A\u6839\u636E\u7533\u8BF7\u72B6\u6001\u5DEE\u5F02\u5316\u5C55\u793A\u884C\u64CD\u4F5C\uFF0C\u907F\u514D\u8BEF\u64CD\u4F5C\u3002")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u5177\u4F53\u903B\u8F91\u63CF\u8FF0"),
              createTextVNode("\uFF1A\u7F16\u8F91\u518D\u53D1\u8D77\uFF1AorderLectureState === 'draft' \u6216 approvalState \u4E3A reject/oa_reject/fdd_reject\uFF1B\u6548\u679C\u56FE\u8865\u7533\uFF1A\u59CB\u7EC8\u663E\u793A\uFF0C\u8DF3\u8F6C"),
              createVNode("code", null, "/detail/{applyCode}/supplement"),
              createTextVNode("\uFF1B\u4E0B\u8F7D\u56FE\u7EB8\uFF1A\u59CB\u7EC8\u663E\u793A\uFF1B\u7EC8\u6B62\uFF1A\u6839\u636E\u8BBE\u8BA1\u6D41\u7A0B\u72B6\u6001\u663E\u793A\u3002")
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, {
    num: "11",
    title: "\u91CD\u70B9\u903B\u8F9111\uFF1A\u70B9\u5C06\u8BBE\u8BA1\u9762\u79EF\u8BF4\u660E"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u610F\u4E49</strong>\uFF1A\u660E\u786E\u8BBE\u8BA1\u9762\u79EF\u8BA1\u7B97\u53E3\u5F84\uFF0C\u4E3A\u8D39\u7528\u8BA1\u7B97\u63D0\u4F9B\u4F9D\u636E\u3002</li><li${_scopeId}><strong${_scopeId}>\u5177\u4F53\u903B\u8F91\u63CF\u8FF0</strong>\uFF1A\u70B9\u5C06\u8BBE\u8BA1\u9762\u79EF\u4E3A\u5E97\u9762\u539F\u59CB\u7ED3\u6784\u51C0\u7A7A\u9762\u79EF\uFF0C\u7528\u4E8E\u8BA1\u7B97\u8BBE\u8BA1\u70B9\u5C06\u8D39\u7528\u3002</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u610F\u4E49"),
              createTextVNode("\uFF1A\u660E\u786E\u8BBE\u8BA1\u9762\u79EF\u8BA1\u7B97\u53E3\u5F84\uFF0C\u4E3A\u8D39\u7528\u8BA1\u7B97\u63D0\u4F9B\u4F9D\u636E\u3002")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u5177\u4F53\u903B\u8F91\u63CF\u8FF0"),
              createTextVNode("\uFF1A\u70B9\u5C06\u8BBE\u8BA1\u9762\u79EF\u4E3A\u5E97\u9762\u539F\u59CB\u7ED3\u6784\u51C0\u7A7A\u9762\u79EF\uFF0C\u7528\u4E8E\u8BA1\u7B97\u8BBE\u8BA1\u70B9\u5C06\u8D39\u7528\u3002")
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
        _push2(`<h4${_scopeId}>\u524D\u7AEF\u8DEF\u7531</h4><table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u8DEF\u7531</th><th${_scopeId}>\u7528\u9014</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\`/general/distributorGeneral/distributorGeneralDesign/list\`</td><td${_scopeId}>\u8BBE\u8BA1\u70B9\u5C06\u5217\u8868\u9875</td></tr><tr${_scopeId}><td${_scopeId}>\`/general/distributorGeneral/distributorGeneralDesign/detail/:applyCode/:type\`</td><td${_scopeId}>\u8BBE\u8BA1\u70B9\u5C06\u8BE6\u60C5\u9875</td></tr></tbody></table><h4${_scopeId}>API\u63A5\u53E3</h4><table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u63A5\u53E3\u8DEF\u5F84</th><th${_scopeId}>\u8BF4\u660E</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\`mlt/designApply/dealerPage\`</td><td${_scopeId}>\u7ECF\u9500\u5546\u5206\u9875\u67E5\u8BE2\uFF08pageForDealer\uFF09</td></tr><tr${_scopeId}><td${_scopeId}>\`mlt/designApply/dealerSave\`</td><td${_scopeId}>\u7ECF\u9500\u5546\u4FDD\u5B58</td></tr><tr${_scopeId}><td${_scopeId}>\`mlt/designApply/dealerSaveAndSubmit\`</td><td${_scopeId}>\u7ECF\u9500\u5546\u4FDD\u5B58\u5E76\u63D0\u4EA4</td></tr><tr${_scopeId}><td${_scopeId}>\`mlt/designApply/dealerSaveSupplement\`</td><td${_scopeId}>\u7ECF\u9500\u5546\u4FDD\u5B58\u8865\u5145\u7533\u8BF7</td></tr><tr${_scopeId}><td${_scopeId}>\`mlt/designApply/dealerSaveAndSubmitSupplement\`</td><td${_scopeId}>\u7ECF\u9500\u5546\u4FDD\u5B58\u5E76\u63D0\u4EA4\u8865\u5145\u7533\u8BF7</td></tr><tr${_scopeId}><td${_scopeId}>\`mlt/designApply/detail\`</td><td${_scopeId}>\u67E5\u8BE2\u7533\u8BF7\u8BE6\u60C5</td></tr><tr${_scopeId}><td${_scopeId}>\`mlt/designApply/delete\`</td><td${_scopeId}>\u5220\u9664\u7533\u8BF7</td></tr><tr${_scopeId}><td${_scopeId}>\`mlt/designApply/page\`</td><td${_scopeId}>\u5206\u9875\u67E5\u8BE2</td></tr><tr${_scopeId}><td${_scopeId}>\`mlt/designApply/designApplyApproval\`</td><td${_scopeId}>\u8BBE\u8BA1\u70B9\u5C06\u5BA1\u6279\uFF08applyApproval\uFF09</td></tr><tr${_scopeId}><td${_scopeId}>\`mlt/designApply/designApplyCancelApproval\`</td><td${_scopeId}>\u53D6\u6D88\u5BA1\u6279\uFF08cancelApplyApproval\uFF09</td></tr><tr${_scopeId}><td${_scopeId}>\`mlt/designApply/designApplyLecturerApproval\`</td><td${_scopeId}>\u8BB2\u5E08\u5BA1\u6279\uFF08designApplyApproval\uFF09</td></tr><tr${_scopeId}><td${_scopeId}>\`mlt/designApply/designApplyTerminalApproval\`</td><td${_scopeId}>\u95E8\u5E97\u5BA1\u6279</td></tr><tr${_scopeId}><td${_scopeId}>\`mlt/designApply/pushOa\`</td><td${_scopeId}>\u540C\u6B65OA</td></tr><tr${_scopeId}><td${_scopeId}>\`mlt/designApply/pushFdd\`</td><td${_scopeId}>\u540C\u6B65FDD</td></tr><tr${_scopeId}><td${_scopeId}>\`mlt/designApply/pushCrm\`</td><td${_scopeId}>\u540C\u6B65CRM\uFF08sendCrmOrder\uFF09</td></tr><tr${_scopeId}><td${_scopeId}>\`mlt/designApply/cancelApply\`</td><td${_scopeId}>\u53D1\u8D77\u53D6\u6D88\u7533\u8BF7</td></tr><tr${_scopeId}><td${_scopeId}>\`mlt/designApply/downloadDesignDrawing\`</td><td${_scopeId}>\u4E0B\u8F7D\u8BBE\u8BA1\u56FE\u7EB8\uFF08downloadDrawing\uFF09</td></tr><tr${_scopeId}><td${_scopeId}>\`mlt/designApply/designReassignment\`</td><td${_scopeId}>\u8BBE\u8BA1\u6539\u6D3E</td></tr><tr${_scopeId}><td${_scopeId}>\`mlt/designApply/queryFeedback\`</td><td${_scopeId}>\u67E5\u8BE2\u53CD\u9988</td></tr><tr${_scopeId}><td${_scopeId}>\`mlt/designApply/dealer/feedback\`</td><td${_scopeId}>\u53CD\u9988\uFF08feedback\uFF09</td></tr><tr${_scopeId}><td${_scopeId}>\`mlt/designApply/getUploadDetail\`</td><td${_scopeId}>\u83B7\u53D6\u4E0A\u4F20\u8BE6\u60C5</td></tr><tr${_scopeId}><td${_scopeId}>\`mlt/designApply/upload\`</td><td${_scopeId}>\u4E0A\u4F20\u8BBE\u8BA1\u56FE\u7EB8\uFF08uploadDrawing\uFF09</td></tr><tr${_scopeId}><td${_scopeId}>\`mlt/designApply/startOrder\`</td><td${_scopeId}>\u4E0B\u5355</td></tr><tr${_scopeId}><td${_scopeId}>\`mlt/designApply/areaConfirm\`</td><td${_scopeId}>\u533A\u57DF\u786E\u8BA4</td></tr><tr${_scopeId}><td${_scopeId}>\`mlt/designApply/startDesign\`</td><td${_scopeId}>\u5F00\u59CB\u8BBE\u8BA1</td></tr><tr${_scopeId}><td${_scopeId}>\`mlt/designApply/startDrawingConfirm\`</td><td${_scopeId}>\u56FE\u7EB8\u786E\u8BA4\uFF08drawingConfirm\uFF09</td></tr><tr${_scopeId}><td${_scopeId}>\`mlt/designApply/termination\`</td><td${_scopeId}>\u7EC8\u6B62</td></tr></tbody></table><h4${_scopeId}>\u5185\u7F6E\u5BA1\u6279</h4><table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5BA1\u6279\u6D41\u7F16\u7801</th><th${_scopeId}>\u8BF4\u660E</th><th${_scopeId}>\u89E6\u53D1\u65F6\u673A</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>designApplyApproval</td><td${_scopeId}>\u8BBE\u8BA1\u70B9\u5C06\u7533\u8BF7\u5BA1\u6279</td><td${_scopeId}>\u4FDD\u5B58\u5E76\u63D0\u4EA4\u65F6\u89E6\u53D1</td></tr><tr${_scopeId}><td${_scopeId}>designApplyLecturerApproval</td><td${_scopeId}>\u8BBE\u8BA1\u70B9\u5C06\u8BB2\u5E08\u5BA1\u6279</td><td${_scopeId}>\u8BB2\u5E08\u5BA1\u6279\u73AF\u8282</td></tr><tr${_scopeId}><td${_scopeId}>designApplyTerminalApproval</td><td${_scopeId}>\u8BBE\u8BA1\u70B9\u5C06\u95E8\u5E97\u5BA1\u6279</td><td${_scopeId}>\u95E8\u5E97\u5BA1\u6279\u73AF\u8282</td></tr><tr${_scopeId}><td${_scopeId}>designApplyCancelApproval</td><td${_scopeId}>\u8BBE\u8BA1\u70B9\u5C06\u53D6\u6D88\u5BA1\u6279</td><td${_scopeId}>\u53D1\u8D77\u53D6\u6D88\u7533\u8BF7\u65F6\u89E6\u53D1</td></tr></tbody></table><h4${_scopeId}>\u67E5\u8BE2\u680F\u5B57\u6BB5</h4><table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5B57\u6BB5\u540D</th><th${_scopeId}>\u6570\u636E\u5E93\u5217\u540D</th><th${_scopeId}>\u7EC4\u4EF6</th><th${_scopeId}>\u4E1A\u52A1\u91CA\u4E49</th><th${_scopeId}>\u663E\u9690\u6761\u4EF6</th><th${_scopeId}>\u53D6\u503C/\u8D4B\u503C\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u7533\u8BF7\u7F16\u7801</td><td${_scopeId}>APPLY_CODE</td><td${_scopeId}>TextField</td><td${_scopeId}>\u7533\u8BF7\u7F16\u7801\u6A21\u7CCA\u67E5\u8BE2</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u624B\u52A8\u8F93\u5165</td></tr><tr${_scopeId}><td${_scopeId}>\u7533\u8BF7\u7C7B\u578B</td><td${_scopeId}>APPLY_TYPE</td><td${_scopeId}>Select</td><td${_scopeId}>\u7533\u8BF7\u7C7B\u578B\u7B5B\u9009</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u503C\u96C6MBO.DESIGN_APPLY_TYPE</td></tr><tr${_scopeId}><td${_scopeId}>\u7533\u8BF7\u5BA1\u6279\u72B6\u6001</td><td${_scopeId}>APPROVAL_STATE</td><td${_scopeId}>Select</td><td${_scopeId}>\u5BA1\u6279\u72B6\u6001\u7B5B\u9009</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u503C\u96C6MBO.APPLY_APPROVAL_STATE</td></tr></tbody></table><h4${_scopeId}>\u5217\u8868\u5C55\u793A\u5B57\u6BB5</h4><blockquote${_scopeId}>\u6570\u636E\u6765\u6E90\uFF1A<code${_scopeId}>stores/listConfig.tsx</code> \u7684 <code${_scopeId}>listDScolumns</code>\uFF0C\u5217\u8868 DataSet \u4F7F\u7528 <code${_scopeId}>dataKey=data.content</code>\u3001<code${_scopeId}>totalKey=data.totalElements</code>\uFF0C\u591A\u9009 <code${_scopeId}>DataSetSelection.multiple</code>\uFF0C\u63A5\u53E3 <code${_scopeId}>designApplyApi.dealerPage</code>\u3002</blockquote><table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5B57\u6BB5\u540D</th><th${_scopeId}>\u6570\u636E\u5E93\u5217\u540D</th><th${_scopeId}>\u7EC4\u4EF6</th><th${_scopeId}>\u4E1A\u52A1\u91CA\u4E49</th><th${_scopeId}>\u663E\u9690\u6761\u4EF6</th><th${_scopeId}>\u53D6\u503C/\u8D4B\u503C\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u7533\u8BF7\u7F16\u7801</td><td${_scopeId}>APPLY_CODE</td><td${_scopeId}>Button(link)</td><td${_scopeId}>\u7533\u8BF7\u7F16\u7801\uFF0C\u53EF\u70B9\u51FB\u8DF3\u8F6C\u8BE6\u60C5</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u5DE6\u9501\u5B9A\u5217\uFF0Cwidth=160\uFF0C\u70B9\u51FB\u89E6\u53D1handleShowDetail</td></tr><tr${_scopeId}><td${_scopeId}>\u7533\u8BF7\u7C7B\u578B</td><td${_scopeId}>APPLY_TYPE</td><td${_scopeId}>Select</td><td${_scopeId}>\u7533\u8BF7\u7C7B\u578B</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u503C\u96C6MBO.DESIGN_APPLY_TYPE</td></tr><tr${_scopeId}><td${_scopeId}>\u88AB\u70B9\u5C06\u4EBA</td><td${_scopeId}>LECTURER_NAME</td><td${_scopeId}>TextField</td><td${_scopeId}>\u88AB\u70B9\u5C06\u8BBE\u8BA1\u5E08\u59D3\u540D</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u540E\u7AEF\u8FD4\u56DE</td></tr><tr${_scopeId}><td${_scopeId}>\u70B9\u5C06\u72B6\u6001</td><td${_scopeId}>ORDER_LECTURE_STATE</td><td${_scopeId}>Select</td><td${_scopeId}>\u70B9\u5C06\u6D41\u7A0B\u72B6\u6001</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u503C\u96C6MBO.ORDER_LECTURE_STATE\uFF0Cwidth=130</td></tr><tr${_scopeId}><td${_scopeId}>\u8BBE\u8BA1\u72B6\u6001</td><td${_scopeId}>DESIGN_STATE</td><td${_scopeId}>Select</td><td${_scopeId}>\u8BBE\u8BA1\u72B6\u6001</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u503C\u96C6MBO.DESIGN_STATE</td></tr><tr${_scopeId}><td${_scopeId}>\u7533\u8BF7\u5BA1\u6838\u72B6\u6001</td><td${_scopeId}>APPROVAL_STATE</td><td${_scopeId}>Select</td><td${_scopeId}>\u5BA1\u6279\u72B6\u6001</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u503C\u96C6MBO.APPLY_APPROVAL_STATE\uFF0Cwidth=130</td></tr><tr${_scopeId}><td${_scopeId}>\u7533\u8BF7\u4EBA</td><td${_scopeId}>DISTRIBUTOR_NAME</td><td${_scopeId}>TextField</td><td${_scopeId}>\u7533\u8BF7\u4EBA\uFF08\u7ECF\u9500\u5546\u540D\u79F0\uFF09</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u540E\u7AEF\u8FD4\u56DE\uFF0Cwidth=130</td></tr><tr${_scopeId}><td${_scopeId}>\u53D6\u6D88\u7533\u8BF7\u5BA1\u6838\u72B6\u6001</td><td${_scopeId}>CANCEL_APPROVAL_STATE</td><td${_scopeId}>Select</td><td${_scopeId}>\u53D6\u6D88\u5BA1\u6279\u72B6\u6001</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u503C\u96C6MBO.CANCEL_APPROVAL_STATE\uFF0Cwidth=130</td></tr><tr${_scopeId}><td${_scopeId}>\u7ECF\u9500\u5546\u53CD\u9988\u6B21\u6570</td><td${_scopeId}>FEEDBACK_NUMBER</td><td${_scopeId}>TextField</td><td${_scopeId}>\u7ECF\u9500\u5546\u53CD\u9988\u6B21\u6570</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u540E\u7AEF\u8FD4\u56DE\uFF0Cwidth=130</td></tr><tr${_scopeId}><td${_scopeId}>\u7ED3\u7B97\u786E\u8BA4\u72B6\u6001</td><td${_scopeId}>SETTLEMENT_CONFIRM_STATE</td><td${_scopeId}>Select</td><td${_scopeId}>\u7ED3\u7B97\u786E\u8BA4\u72B6\u6001</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u503C\u96C6MBO.SETTLEMENT_COMFIRM_STATE\uFF0Cwidth=130</td></tr><tr${_scopeId}><td${_scopeId}>\u5173\u8054\u5355\u636E</td><td${_scopeId}>RELATION_APPLY_CODE</td><td${_scopeId}>TextField</td><td${_scopeId}>\u5173\u8054\u7684\u539F\u7533\u8BF7\u7F16\u7801</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u6548\u679C\u56FE\u8865\u7533\u65F6\u5173\u8054\u539F\u7533\u8BF7\uFF0Cwidth=160</td></tr><tr${_scopeId}><td${_scopeId}>\u7533\u8BF7\u65F6\u95F4</td><td${_scopeId}>CREATE_DATE</td><td${_scopeId}>TextField</td><td${_scopeId}>\u7533\u8BF7\u521B\u5EFA\u65F6\u95F4</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u540E\u7AEF\u8FD4\u56DE\uFF0Cwidth=150</td></tr><tr${_scopeId}><td${_scopeId}>\u66F4\u65B0\u65F6\u95F4</td><td${_scopeId}>UPDATE_DATE</td><td${_scopeId}>TextField</td><td${_scopeId}>\u6700\u540E\u66F4\u65B0\u65F6\u95F4</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u540E\u7AEF\u8FD4\u56DE\uFF0Cwidth=150</td></tr><tr${_scopeId}><td${_scopeId}>CRM\u5355\u53F7</td><td${_scopeId}>CRM_ORDER_CODE</td><td${_scopeId}>TextField</td><td${_scopeId}>CRM\u8BA2\u5355\u7F16\u53F7</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u63A8\u9001CRM\u540E\u8FD4\u56DE\uFF0Cwidth=130</td></tr><tr${_scopeId}><td${_scopeId}>\u64CD\u4F5C</td><td${_scopeId}>-</td><td${_scopeId}>Button(link)</td><td${_scopeId}>\u7F16\u8F91\u518D\u53D1\u8D77/\u67E5\u770B\u6D41\u7A0B/\u5220\u9664/\u6548\u679C\u56FE\u8865\u7533/\u4E0B\u8F7D\u56FE\u7EB8</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u53F3\u9501\u5B9A\u5217\uFF0Cwidth=280\uFF0C\u6309\u72B6\u6001\u6761\u4EF6\u663E\u9690</td></tr></tbody></table><h4${_scopeId}>\u8BE6\u60C5\u9875\u5B57\u6BB5</h4><blockquote${_scopeId}>\u6570\u636E\u6765\u6E90\uFF1A<code${_scopeId}>stores/detailConfig.tsx</code> \u5B9A\u4E49\u4E24\u4E2A DataSet\uFF1A<code${_scopeId}>generalInfoFormDSProps</code>\uFF08\u70B9\u5C06\u4FE1\u606F\u8868\u5355\uFF09\u4E0E <code${_scopeId}>designInfoFormDSProps</code>\uFF08\u7533\u8BF7\u4FE1\u606F\u8868\u5355\uFF09\u3002\u8BE6\u60C5\u9875\u7531 <code${_scopeId}>components/DesignApplyDetail/index.tsx</code> \u6E32\u67D3\uFF0C\u5206\u4E24\u4E2A ContentCard\uFF1A\u70B9\u5C06\u4FE1\u606F\u3001\u7533\u8BF7\u4FE1\u606F\u3002<code${_scopeId}>isDetail = (type === &#39;view&#39;)</code>\uFF0C<code${_scopeId}>isSupplement = (type === &#39;supplement&#39; || state.isSupplement)</code>\uFF0C<code${_scopeId}>isConfirmArea = state.isConfirmArea</code>\u3002\u6548\u679C\u56FE\u589E\u8865\u6A21\u5F0F\u65F6\u7533\u8BF7\u4FE1\u606F\u8868\u5355\u6574\u4F53disabled\u3002</blockquote><h5${_scopeId}>\u8868\u53551\uFF1A\u70B9\u5C06\u4FE1\u606F\uFF08generalInfoFormDS\uFF09</h5><table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5B57\u6BB5\u540D</th><th${_scopeId}>\u6570\u636E\u5E93\u5217\u540D</th><th${_scopeId}>\u7EC4\u4EF6</th><th${_scopeId}>\u4E1A\u52A1\u91CA\u4E49</th><th${_scopeId}>\u663E\u9690\u6761\u4EF6</th><th${_scopeId}>\u53D6\u503C/\u8D4B\u503C\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u8BBE\u8BA1\u5E08</td><td${_scopeId}>LECTURER_NAME</td><td${_scopeId}>TextField</td><td${_scopeId}>\u88AB\u70B9\u5C06\u8BBE\u8BA1\u5E08\u59D3\u540D</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>disabled\uFF0C\u7531\u7533\u8BF7\u70B9\u5C06\u5F39\u7A97\u9009\u62E9\u8BBE\u8BA1\u5E08\u540E\u5E26\u5165state</td></tr><tr${_scopeId}><td${_scopeId}>\u90E8\u95E8</td><td${_scopeId}>ORG_NAME</td><td${_scopeId}>TextField</td><td${_scopeId}>\u8BBE\u8BA1\u5E08\u6240\u5C5E\u90E8\u95E8</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>disabled\uFF0C\u7531\u8BBE\u8BA1\u5E08\u4FE1\u606F\u5E26\u5165</td></tr><tr${_scopeId}><td${_scopeId}>\u8BBE\u8BA1\u5E08\u7EA7\u522B</td><td${_scopeId}>LECTURER_LEVEL</td><td${_scopeId}>Select</td><td${_scopeId}>\u8BBE\u8BA1\u5E08\u7EA7\u522B</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>disabled\uFF0C\u503C\u96C6MBO.DESIGN_LECTURER_LEVEL\uFF0C\u7531\u8BBE\u8BA1\u5E08\u4FE1\u606F\u5E26\u5165</td></tr><tr${_scopeId}><td${_scopeId}>\u8BBE\u8BA1\u8D39\u7528</td><td${_scopeId}>PRICE</td><td${_scopeId}>TextField</td><td${_scopeId}>\u8BBE\u8BA1\u5E08\u62A5\u4EF7\uFF08\u70B9\u5C06\u8D39\u5355\u4EF7\uFF09</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>disabled\uFF0C\u7531\u8BBE\u8BA1\u5E08\u4FE1\u606F\u5E26\u5165\uFF08lecturerPrice\u5B57\u6BB5\uFF09</td></tr><tr${_scopeId}><td${_scopeId}>\u6548\u679C\u56FE\u6570\u91CF(500\u5143/\u5F20)</td><td${_scopeId}>RENDERING_NUMBER</td><td${_scopeId}>NumberField</td><td${_scopeId}>\u6548\u679C\u56FE\u6570\u91CF</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u65B0\u589E/\u7F16\u8F91\u5FC5\u586B\uFF0Cprecision=0\uFF0ConChange\u89E6\u53D1\u8D39\u7528\u5C0F\u8BA1\u8BA1\u7B97</td></tr><tr${_scopeId}><td${_scopeId}>\u9E1F\u77B0\u56FE(1250\u5143/\u5F20)</td><td${_scopeId}>AIRSCAPE_NUMBER</td><td${_scopeId}>NumberField</td><td${_scopeId}>\u9E1F\u77B0\u56FE\u6570\u91CF</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u65B0\u589E/\u7F16\u8F91\u5FC5\u586B\uFF0Cprecision=0\uFF0ConChange\u89E6\u53D1\u8D39\u7528\u5C0F\u8BA1\u8BA1\u7B97</td></tr><tr${_scopeId}><td${_scopeId}>\u5E97\u9762\u9762\u79EF(\u33A1)</td><td${_scopeId}>STORE_AREA</td><td${_scopeId}>NumberField</td><td${_scopeId}>\u5E97\u9762\u9762\u79EF</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u65B0\u589E/\u7F16\u8F91\u5FC5\u586B(\u975E\u589E\u8865\u65F6)\uFF0Cmin=0.0001\uFF0Cstep=0.01\uFF0Cprecision=2\uFF0ConChange\u89E6\u53D1\u8D39\u7528\u5C0F\u8BA1\u8BA1\u7B97\u3002\u589E\u8865\u6A21\u5F0Fdisabled</td></tr><tr${_scopeId}><td${_scopeId}>\u8D39\u7528\u5C0F\u8BA1(\u4EC5\u4F9B\u53C2\u8003)</td><td${_scopeId}>SETTLEMENT_AMOUNT</td><td${_scopeId}>TextField</td><td${_scopeId}>\u8D39\u7528\u5C0F\u8BA1\u91D1\u989D</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>disabled\uFF0C\u81EA\u52A8\u8BA1\u7B97</td></tr><tr${_scopeId}><td${_scopeId}>\u590D\u5C3A\u9762\u79EF(\u33A1)</td><td${_scopeId}>SCALE_AREA</td><td${_scopeId}>NumberField</td><td${_scopeId}>\u590D\u5C3A\u9762\u79EF</td><td${_scopeId}>\u4EC5isConfirmArea\u65F6\u663E\u793A</td><td${_scopeId}>\u5FC5\u586B\uFF0C\u533A\u57DF\u786E\u8BA4\u65F6\u586B\u5199</td></tr><tr${_scopeId}><td${_scopeId}>\u7B7E\u8BA2\u4EBA</td><td${_scopeId}>SIGNER_ID/SIGNER_NAME</td><td${_scopeId}>Select(object)</td><td${_scopeId}>\u7B7E\u8BA2\u4EBA</td><td${_scopeId}>haveSigner=true\u65F6\u663E\u793A</td><td${_scopeId}>options=signerDS\uFF0CtextField=name\uFF0CvalueField=accountId\uFF0C\u5FC5\u586B</td></tr></tbody></table><h5${_scopeId}>\u8868\u53552\uFF1A\u7533\u8BF7\u4FE1\u606F\uFF08designInfoFormDS\uFF09</h5><table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5B57\u6BB5\u540D</th><th${_scopeId}>\u6570\u636E\u5E93\u5217\u540D</th><th${_scopeId}>\u7EC4\u4EF6</th><th${_scopeId}>\u4E1A\u52A1\u91CA\u4E49</th><th${_scopeId}>\u663E\u9690\u6761\u4EF6</th><th${_scopeId}>\u53D6\u503C/\u8D4B\u503C\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u7ECF\u9500\u5546\u7F16\u7801</td><td${_scopeId}>DISTRIBUTOR_CODE</td><td${_scopeId}>TextField</td><td${_scopeId}>\u7ECF\u9500\u5546\u7F16\u7801</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>disabled\uFF0Cplaceholder=&quot;\u63D0\u4EA4/\u4FDD\u5B58\u540E\u81EA\u52A8\u751F\u6210&quot;</td></tr><tr${_scopeId}><td${_scopeId}>\u7ECF\u9500\u5546\u540D\u79F0</td><td${_scopeId}>DISTRIBUTOR_NAME</td><td${_scopeId}>TextField</td><td${_scopeId}>\u7ECF\u9500\u5546\u540D\u79F0</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>disabled\uFF0Cplaceholder=&quot;\u63D0\u4EA4/\u4FDD\u5B58\u540E\u81EA\u52A8\u751F\u6210&quot;</td></tr><tr${_scopeId}><td${_scopeId}>\u6240\u5C5E\u8FD0\u8425\u4E2D\u5FC3</td><td${_scopeId}>OP_CENTER_CODE/OP_CENTER_NAME</td><td${_scopeId}>Select(object)</td><td${_scopeId}>\u6240\u5C5E\u8FD0\u8425\u4E2D\u5FC3</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u503C\u96C6MBO.OP_CENTER\uFF0C\u65B0\u589E/\u7F16\u8F91\u5FC5\u586B</td></tr><tr${_scopeId}><td${_scopeId}>\u4EA4\u6613\u516C\u53F8</td><td${_scopeId}>TRADING_COMPANY_NAME</td><td${_scopeId}>TextField+Icon(search)</td><td${_scopeId}>\u4EA4\u6613\u516C\u53F8</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u65B0\u589E/\u7F16\u8F91\u5FC5\u586B\uFF0CreadOnly+\u641C\u7D22\u56FE\u6807\uFF0C\u70B9\u51FB\u5F39\u51FA\u4EA4\u6613\u516C\u53F8\u9009\u62E9\u5F39\u7A97\u3002\u67E5\u770B\u6A21\u5F0F\u7EAFTextField</td></tr><tr${_scopeId}><td${_scopeId}>\u5F00\u7968\u8D26\u6237</td><td${_scopeId}>LEGAL_ENTITY_NAME</td><td${_scopeId}>TextField</td><td${_scopeId}>\u5F00\u7968\u8D26\u6237\uFF08\u6CD5\u4EBA\u5355\u4F4D\u540D\u79F0\uFF09</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>disabled\uFF0Cplaceholder=&quot;\u9009\u62E9\u4EA4\u6613\u516C\u53F8\u540E\u81EA\u52A8\u5E26\u51FA&quot;\uFF0C\u9009\u4EA4\u6613\u516C\u53F8\u540E\u81EA\u52A8\u5199\u5165</td></tr><tr${_scopeId}><td${_scopeId}>\u95E8\u5E97\u540D\u79F0</td><td${_scopeId}>STORE_NAME</td><td${_scopeId}>TextField+Icon(search)</td><td${_scopeId}>\u95E8\u5E97\u540D\u79F0</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u65B0\u589E/\u7F16\u8F91\u5FC5\u586B\uFF0CreadOnly+\u641C\u7D22\u56FE\u6807\uFF0C\u70B9\u51FB\u5F39\u51FA\u95E8\u5E97\u9009\u62E9\u5F39\u7A97\u3002\u67E5\u770B\u6A21\u5F0F\u7EAFTextField</td></tr><tr${_scopeId}><td${_scopeId}>\u95E8\u5E97\u5730\u5740</td><td${_scopeId}>STORE_AREA</td><td${_scopeId}>TextField</td><td${_scopeId}>\u95E8\u5E97\u5730\u5740\uFF08\u7701/\u5E02/\u533A\uFF09</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>disabled\uFF0Cplaceholder=&quot;\u8BF7\u9009\u62E9\u95E8\u5E97\u540E\u81EA\u52A8\u5E26\u51FA&quot;\uFF0C\u9009\u95E8\u5E97\u540E\u81EA\u52A8\u62FC\u63A5\u4E3A&quot;\u7701/\u5E02/\u533A&quot;\u3002\u4E0B\u65B9\u8DDF\u968F\u663E\u793AstoreAddress\uFF08\u95E8\u5E97\u8BE6\u7EC6\u5730\u5740\uFF0Cdisabled\uFF09</td></tr><tr${_scopeId}><td${_scopeId}>\u95E8\u5E97\u7F16\u7801</td><td${_scopeId}>STORE_CODE</td><td${_scopeId}>TextField</td><td${_scopeId}>\u95E8\u5E97\u7F16\u7801</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>disabled\uFF0Cplaceholder=&quot;\u8BF7\u9009\u62E9\u95E8\u5E97\u540E\u81EA\u52A8\u5E26\u51FA&quot;\uFF0C\u9009\u95E8\u5E97\u540E\u81EA\u52A8\u5199\u5165</td></tr><tr${_scopeId}><td${_scopeId}>\u5E97\u9762\u7C7B\u578B</td><td${_scopeId}>STORE_TYPE</td><td${_scopeId}>Select</td><td${_scopeId}>\u5E97\u9762\u7C7B\u578B</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u503C\u96C6MBO.ORD_LECTURER_STORE_TYPE\uFF0C\u65B0\u589E/\u7F16\u8F91\u5FC5\u586B</td></tr><tr${_scopeId}><td${_scopeId}>\u5E97\u9762\u8D1F\u8D23\u4EBA</td><td${_scopeId}>SHOPMANAGER_NAME</td><td${_scopeId}>TextField</td><td${_scopeId}>\u5E97\u9762\u8D1F\u8D23\u4EBA</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>disabled\uFF0Cplaceholder=&quot;\u8BF7\u9009\u62E9\u95E8\u5E97\u540E\u81EA\u52A8\u5E26\u51FA&quot;\uFF0C\u9009\u95E8\u5E97\u540E\u81EA\u52A8\u5199\u5165</td></tr><tr${_scopeId}><td${_scopeId}>\u8D1F\u8D23\u4EBA\u7535\u8BDD</td><td${_scopeId}>SHOPMANAGER_MOB</td><td${_scopeId}>TextField</td><td${_scopeId}>\u8D1F\u8D23\u4EBA\u7535\u8BDD</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>disabled\uFF0Cplaceholder=&quot;\u8BF7\u9009\u62E9\u95E8\u5E97\u540E\u81EA\u52A8\u5E26\u51FA&quot;\uFF0C\u9009\u95E8\u5E97\u540E\u81EA\u52A8\u5199\u5165</td></tr><tr${_scopeId}><td${_scopeId}>\u7533\u8BF7\u7C7B\u578B</td><td${_scopeId}>_APPLY_TYPE</td><td${_scopeId}>TextField</td><td${_scopeId}>\u7533\u8BF7\u7C7B\u578B</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>disabled\uFF0C\u81EA\u52A8\u5224\u65AD\uFF1A\u6548\u679C\u56FE\u589E\u8865(isSupplement)\u65F6\u663E\u793A&quot;\u6548\u679C\u56FE\u589E\u8865&quot;\uFF0C\u5426\u5219\u663E\u793A&quot;\u95E8\u5E97\u8BBE\u8BA1&quot;</td></tr></tbody></table>`);
      } else {
        return [
          createVNode("h4", null, "\u524D\u7AEF\u8DEF\u7531"),
          createVNode("table", { class: "kb-field-tbl" }, [
            createVNode("thead", null, [
              createVNode("tr", null, [
                createVNode("th", null, "\u8DEF\u7531"),
                createVNode("th", null, "\u7528\u9014")
              ])
            ]),
            createVNode("tbody", null, [
              createVNode("tr", null, [
                createVNode("td", null, "`/general/distributorGeneral/distributorGeneralDesign/list`"),
                createVNode("td", null, "\u8BBE\u8BA1\u70B9\u5C06\u5217\u8868\u9875")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "`/general/distributorGeneral/distributorGeneralDesign/detail/:applyCode/:type`"),
                createVNode("td", null, "\u8BBE\u8BA1\u70B9\u5C06\u8BE6\u60C5\u9875")
              ])
            ])
          ]),
          createVNode("h4", null, "API\u63A5\u53E3"),
          createVNode("table", { class: "kb-field-tbl" }, [
            createVNode("thead", null, [
              createVNode("tr", null, [
                createVNode("th", null, "\u63A5\u53E3\u8DEF\u5F84"),
                createVNode("th", null, "\u8BF4\u660E")
              ])
            ]),
            createVNode("tbody", null, [
              createVNode("tr", null, [
                createVNode("td", null, "`mlt/designApply/dealerPage`"),
                createVNode("td", null, "\u7ECF\u9500\u5546\u5206\u9875\u67E5\u8BE2\uFF08pageForDealer\uFF09")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "`mlt/designApply/dealerSave`"),
                createVNode("td", null, "\u7ECF\u9500\u5546\u4FDD\u5B58")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "`mlt/designApply/dealerSaveAndSubmit`"),
                createVNode("td", null, "\u7ECF\u9500\u5546\u4FDD\u5B58\u5E76\u63D0\u4EA4")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "`mlt/designApply/dealerSaveSupplement`"),
                createVNode("td", null, "\u7ECF\u9500\u5546\u4FDD\u5B58\u8865\u5145\u7533\u8BF7")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "`mlt/designApply/dealerSaveAndSubmitSupplement`"),
                createVNode("td", null, "\u7ECF\u9500\u5546\u4FDD\u5B58\u5E76\u63D0\u4EA4\u8865\u5145\u7533\u8BF7")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "`mlt/designApply/detail`"),
                createVNode("td", null, "\u67E5\u8BE2\u7533\u8BF7\u8BE6\u60C5")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "`mlt/designApply/delete`"),
                createVNode("td", null, "\u5220\u9664\u7533\u8BF7")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "`mlt/designApply/page`"),
                createVNode("td", null, "\u5206\u9875\u67E5\u8BE2")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "`mlt/designApply/designApplyApproval`"),
                createVNode("td", null, "\u8BBE\u8BA1\u70B9\u5C06\u5BA1\u6279\uFF08applyApproval\uFF09")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "`mlt/designApply/designApplyCancelApproval`"),
                createVNode("td", null, "\u53D6\u6D88\u5BA1\u6279\uFF08cancelApplyApproval\uFF09")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "`mlt/designApply/designApplyLecturerApproval`"),
                createVNode("td", null, "\u8BB2\u5E08\u5BA1\u6279\uFF08designApplyApproval\uFF09")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "`mlt/designApply/designApplyTerminalApproval`"),
                createVNode("td", null, "\u95E8\u5E97\u5BA1\u6279")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "`mlt/designApply/pushOa`"),
                createVNode("td", null, "\u540C\u6B65OA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "`mlt/designApply/pushFdd`"),
                createVNode("td", null, "\u540C\u6B65FDD")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "`mlt/designApply/pushCrm`"),
                createVNode("td", null, "\u540C\u6B65CRM\uFF08sendCrmOrder\uFF09")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "`mlt/designApply/cancelApply`"),
                createVNode("td", null, "\u53D1\u8D77\u53D6\u6D88\u7533\u8BF7")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "`mlt/designApply/downloadDesignDrawing`"),
                createVNode("td", null, "\u4E0B\u8F7D\u8BBE\u8BA1\u56FE\u7EB8\uFF08downloadDrawing\uFF09")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "`mlt/designApply/designReassignment`"),
                createVNode("td", null, "\u8BBE\u8BA1\u6539\u6D3E")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "`mlt/designApply/queryFeedback`"),
                createVNode("td", null, "\u67E5\u8BE2\u53CD\u9988")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "`mlt/designApply/dealer/feedback`"),
                createVNode("td", null, "\u53CD\u9988\uFF08feedback\uFF09")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "`mlt/designApply/getUploadDetail`"),
                createVNode("td", null, "\u83B7\u53D6\u4E0A\u4F20\u8BE6\u60C5")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "`mlt/designApply/upload`"),
                createVNode("td", null, "\u4E0A\u4F20\u8BBE\u8BA1\u56FE\u7EB8\uFF08uploadDrawing\uFF09")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "`mlt/designApply/startOrder`"),
                createVNode("td", null, "\u4E0B\u5355")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "`mlt/designApply/areaConfirm`"),
                createVNode("td", null, "\u533A\u57DF\u786E\u8BA4")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "`mlt/designApply/startDesign`"),
                createVNode("td", null, "\u5F00\u59CB\u8BBE\u8BA1")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "`mlt/designApply/startDrawingConfirm`"),
                createVNode("td", null, "\u56FE\u7EB8\u786E\u8BA4\uFF08drawingConfirm\uFF09")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "`mlt/designApply/termination`"),
                createVNode("td", null, "\u7EC8\u6B62")
              ])
            ])
          ]),
          createVNode("h4", null, "\u5185\u7F6E\u5BA1\u6279"),
          createVNode("table", { class: "kb-field-tbl" }, [
            createVNode("thead", null, [
              createVNode("tr", null, [
                createVNode("th", null, "\u5BA1\u6279\u6D41\u7F16\u7801"),
                createVNode("th", null, "\u8BF4\u660E"),
                createVNode("th", null, "\u89E6\u53D1\u65F6\u673A")
              ])
            ]),
            createVNode("tbody", null, [
              createVNode("tr", null, [
                createVNode("td", null, "designApplyApproval"),
                createVNode("td", null, "\u8BBE\u8BA1\u70B9\u5C06\u7533\u8BF7\u5BA1\u6279"),
                createVNode("td", null, "\u4FDD\u5B58\u5E76\u63D0\u4EA4\u65F6\u89E6\u53D1")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "designApplyLecturerApproval"),
                createVNode("td", null, "\u8BBE\u8BA1\u70B9\u5C06\u8BB2\u5E08\u5BA1\u6279"),
                createVNode("td", null, "\u8BB2\u5E08\u5BA1\u6279\u73AF\u8282")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "designApplyTerminalApproval"),
                createVNode("td", null, "\u8BBE\u8BA1\u70B9\u5C06\u95E8\u5E97\u5BA1\u6279"),
                createVNode("td", null, "\u95E8\u5E97\u5BA1\u6279\u73AF\u8282")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "designApplyCancelApproval"),
                createVNode("td", null, "\u8BBE\u8BA1\u70B9\u5C06\u53D6\u6D88\u5BA1\u6279"),
                createVNode("td", null, "\u53D1\u8D77\u53D6\u6D88\u7533\u8BF7\u65F6\u89E6\u53D1")
              ])
            ])
          ]),
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
                createVNode("td", null, "\u7533\u8BF7\u7F16\u7801"),
                createVNode("td", null, "APPLY_CODE"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u7533\u8BF7\u7F16\u7801\u6A21\u7CCA\u67E5\u8BE2"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u624B\u52A8\u8F93\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7533\u8BF7\u7C7B\u578B"),
                createVNode("td", null, "APPLY_TYPE"),
                createVNode("td", null, "Select"),
                createVNode("td", null, "\u7533\u8BF7\u7C7B\u578B\u7B5B\u9009"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u503C\u96C6MBO.DESIGN_APPLY_TYPE")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7533\u8BF7\u5BA1\u6279\u72B6\u6001"),
                createVNode("td", null, "APPROVAL_STATE"),
                createVNode("td", null, "Select"),
                createVNode("td", null, "\u5BA1\u6279\u72B6\u6001\u7B5B\u9009"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u503C\u96C6MBO.APPLY_APPROVAL_STATE")
              ])
            ])
          ]),
          createVNode("h4", null, "\u5217\u8868\u5C55\u793A\u5B57\u6BB5"),
          createVNode("blockquote", null, [
            createTextVNode("\u6570\u636E\u6765\u6E90\uFF1A"),
            createVNode("code", null, "stores/listConfig.tsx"),
            createTextVNode(" \u7684 "),
            createVNode("code", null, "listDScolumns"),
            createTextVNode("\uFF0C\u5217\u8868 DataSet \u4F7F\u7528 "),
            createVNode("code", null, "dataKey=data.content"),
            createTextVNode("\u3001"),
            createVNode("code", null, "totalKey=data.totalElements"),
            createTextVNode("\uFF0C\u591A\u9009 "),
            createVNode("code", null, "DataSetSelection.multiple"),
            createTextVNode("\uFF0C\u63A5\u53E3 "),
            createVNode("code", null, "designApplyApi.dealerPage"),
            createTextVNode("\u3002")
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
                createVNode("td", null, "\u7533\u8BF7\u7F16\u7801"),
                createVNode("td", null, "APPLY_CODE"),
                createVNode("td", null, "Button(link)"),
                createVNode("td", null, "\u7533\u8BF7\u7F16\u7801\uFF0C\u53EF\u70B9\u51FB\u8DF3\u8F6C\u8BE6\u60C5"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u5DE6\u9501\u5B9A\u5217\uFF0Cwidth=160\uFF0C\u70B9\u51FB\u89E6\u53D1handleShowDetail")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7533\u8BF7\u7C7B\u578B"),
                createVNode("td", null, "APPLY_TYPE"),
                createVNode("td", null, "Select"),
                createVNode("td", null, "\u7533\u8BF7\u7C7B\u578B"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u503C\u96C6MBO.DESIGN_APPLY_TYPE")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u88AB\u70B9\u5C06\u4EBA"),
                createVNode("td", null, "LECTURER_NAME"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u88AB\u70B9\u5C06\u8BBE\u8BA1\u5E08\u59D3\u540D"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u540E\u7AEF\u8FD4\u56DE")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u70B9\u5C06\u72B6\u6001"),
                createVNode("td", null, "ORDER_LECTURE_STATE"),
                createVNode("td", null, "Select"),
                createVNode("td", null, "\u70B9\u5C06\u6D41\u7A0B\u72B6\u6001"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u503C\u96C6MBO.ORDER_LECTURE_STATE\uFF0Cwidth=130")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u8BBE\u8BA1\u72B6\u6001"),
                createVNode("td", null, "DESIGN_STATE"),
                createVNode("td", null, "Select"),
                createVNode("td", null, "\u8BBE\u8BA1\u72B6\u6001"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u503C\u96C6MBO.DESIGN_STATE")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7533\u8BF7\u5BA1\u6838\u72B6\u6001"),
                createVNode("td", null, "APPROVAL_STATE"),
                createVNode("td", null, "Select"),
                createVNode("td", null, "\u5BA1\u6279\u72B6\u6001"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u503C\u96C6MBO.APPLY_APPROVAL_STATE\uFF0Cwidth=130")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7533\u8BF7\u4EBA"),
                createVNode("td", null, "DISTRIBUTOR_NAME"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u7533\u8BF7\u4EBA\uFF08\u7ECF\u9500\u5546\u540D\u79F0\uFF09"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u540E\u7AEF\u8FD4\u56DE\uFF0Cwidth=130")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u53D6\u6D88\u7533\u8BF7\u5BA1\u6838\u72B6\u6001"),
                createVNode("td", null, "CANCEL_APPROVAL_STATE"),
                createVNode("td", null, "Select"),
                createVNode("td", null, "\u53D6\u6D88\u5BA1\u6279\u72B6\u6001"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u503C\u96C6MBO.CANCEL_APPROVAL_STATE\uFF0Cwidth=130")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7ECF\u9500\u5546\u53CD\u9988\u6B21\u6570"),
                createVNode("td", null, "FEEDBACK_NUMBER"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u7ECF\u9500\u5546\u53CD\u9988\u6B21\u6570"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u540E\u7AEF\u8FD4\u56DE\uFF0Cwidth=130")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7ED3\u7B97\u786E\u8BA4\u72B6\u6001"),
                createVNode("td", null, "SETTLEMENT_CONFIRM_STATE"),
                createVNode("td", null, "Select"),
                createVNode("td", null, "\u7ED3\u7B97\u786E\u8BA4\u72B6\u6001"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u503C\u96C6MBO.SETTLEMENT_COMFIRM_STATE\uFF0Cwidth=130")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5173\u8054\u5355\u636E"),
                createVNode("td", null, "RELATION_APPLY_CODE"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u5173\u8054\u7684\u539F\u7533\u8BF7\u7F16\u7801"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u6548\u679C\u56FE\u8865\u7533\u65F6\u5173\u8054\u539F\u7533\u8BF7\uFF0Cwidth=160")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7533\u8BF7\u65F6\u95F4"),
                createVNode("td", null, "CREATE_DATE"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u7533\u8BF7\u521B\u5EFA\u65F6\u95F4"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u540E\u7AEF\u8FD4\u56DE\uFF0Cwidth=150")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u66F4\u65B0\u65F6\u95F4"),
                createVNode("td", null, "UPDATE_DATE"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u6700\u540E\u66F4\u65B0\u65F6\u95F4"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u540E\u7AEF\u8FD4\u56DE\uFF0Cwidth=150")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "CRM\u5355\u53F7"),
                createVNode("td", null, "CRM_ORDER_CODE"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "CRM\u8BA2\u5355\u7F16\u53F7"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u63A8\u9001CRM\u540E\u8FD4\u56DE\uFF0Cwidth=130")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u64CD\u4F5C"),
                createVNode("td", null, "-"),
                createVNode("td", null, "Button(link)"),
                createVNode("td", null, "\u7F16\u8F91\u518D\u53D1\u8D77/\u67E5\u770B\u6D41\u7A0B/\u5220\u9664/\u6548\u679C\u56FE\u8865\u7533/\u4E0B\u8F7D\u56FE\u7EB8"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u53F3\u9501\u5B9A\u5217\uFF0Cwidth=280\uFF0C\u6309\u72B6\u6001\u6761\u4EF6\u663E\u9690")
              ])
            ])
          ]),
          createVNode("h4", null, "\u8BE6\u60C5\u9875\u5B57\u6BB5"),
          createVNode("blockquote", null, [
            createTextVNode("\u6570\u636E\u6765\u6E90\uFF1A"),
            createVNode("code", null, "stores/detailConfig.tsx"),
            createTextVNode(" \u5B9A\u4E49\u4E24\u4E2A DataSet\uFF1A"),
            createVNode("code", null, "generalInfoFormDSProps"),
            createTextVNode("\uFF08\u70B9\u5C06\u4FE1\u606F\u8868\u5355\uFF09\u4E0E "),
            createVNode("code", null, "designInfoFormDSProps"),
            createTextVNode("\uFF08\u7533\u8BF7\u4FE1\u606F\u8868\u5355\uFF09\u3002\u8BE6\u60C5\u9875\u7531 "),
            createVNode("code", null, "components/DesignApplyDetail/index.tsx"),
            createTextVNode(" \u6E32\u67D3\uFF0C\u5206\u4E24\u4E2A ContentCard\uFF1A\u70B9\u5C06\u4FE1\u606F\u3001\u7533\u8BF7\u4FE1\u606F\u3002"),
            createVNode("code", null, "isDetail = (type === 'view')"),
            createTextVNode("\uFF0C"),
            createVNode("code", null, "isSupplement = (type === 'supplement' || state.isSupplement)"),
            createTextVNode("\uFF0C"),
            createVNode("code", null, "isConfirmArea = state.isConfirmArea"),
            createTextVNode("\u3002\u6548\u679C\u56FE\u589E\u8865\u6A21\u5F0F\u65F6\u7533\u8BF7\u4FE1\u606F\u8868\u5355\u6574\u4F53disabled\u3002")
          ]),
          createVNode("h5", null, "\u8868\u53551\uFF1A\u70B9\u5C06\u4FE1\u606F\uFF08generalInfoFormDS\uFF09"),
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
                createVNode("td", null, "\u8BBE\u8BA1\u5E08"),
                createVNode("td", null, "LECTURER_NAME"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u88AB\u70B9\u5C06\u8BBE\u8BA1\u5E08\u59D3\u540D"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "disabled\uFF0C\u7531\u7533\u8BF7\u70B9\u5C06\u5F39\u7A97\u9009\u62E9\u8BBE\u8BA1\u5E08\u540E\u5E26\u5165state")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u90E8\u95E8"),
                createVNode("td", null, "ORG_NAME"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u8BBE\u8BA1\u5E08\u6240\u5C5E\u90E8\u95E8"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "disabled\uFF0C\u7531\u8BBE\u8BA1\u5E08\u4FE1\u606F\u5E26\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u8BBE\u8BA1\u5E08\u7EA7\u522B"),
                createVNode("td", null, "LECTURER_LEVEL"),
                createVNode("td", null, "Select"),
                createVNode("td", null, "\u8BBE\u8BA1\u5E08\u7EA7\u522B"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "disabled\uFF0C\u503C\u96C6MBO.DESIGN_LECTURER_LEVEL\uFF0C\u7531\u8BBE\u8BA1\u5E08\u4FE1\u606F\u5E26\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u8BBE\u8BA1\u8D39\u7528"),
                createVNode("td", null, "PRICE"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u8BBE\u8BA1\u5E08\u62A5\u4EF7\uFF08\u70B9\u5C06\u8D39\u5355\u4EF7\uFF09"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "disabled\uFF0C\u7531\u8BBE\u8BA1\u5E08\u4FE1\u606F\u5E26\u5165\uFF08lecturerPrice\u5B57\u6BB5\uFF09")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6548\u679C\u56FE\u6570\u91CF(500\u5143/\u5F20)"),
                createVNode("td", null, "RENDERING_NUMBER"),
                createVNode("td", null, "NumberField"),
                createVNode("td", null, "\u6548\u679C\u56FE\u6570\u91CF"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u65B0\u589E/\u7F16\u8F91\u5FC5\u586B\uFF0Cprecision=0\uFF0ConChange\u89E6\u53D1\u8D39\u7528\u5C0F\u8BA1\u8BA1\u7B97")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u9E1F\u77B0\u56FE(1250\u5143/\u5F20)"),
                createVNode("td", null, "AIRSCAPE_NUMBER"),
                createVNode("td", null, "NumberField"),
                createVNode("td", null, "\u9E1F\u77B0\u56FE\u6570\u91CF"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u65B0\u589E/\u7F16\u8F91\u5FC5\u586B\uFF0Cprecision=0\uFF0ConChange\u89E6\u53D1\u8D39\u7528\u5C0F\u8BA1\u8BA1\u7B97")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5E97\u9762\u9762\u79EF(\u33A1)"),
                createVNode("td", null, "STORE_AREA"),
                createVNode("td", null, "NumberField"),
                createVNode("td", null, "\u5E97\u9762\u9762\u79EF"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u65B0\u589E/\u7F16\u8F91\u5FC5\u586B(\u975E\u589E\u8865\u65F6)\uFF0Cmin=0.0001\uFF0Cstep=0.01\uFF0Cprecision=2\uFF0ConChange\u89E6\u53D1\u8D39\u7528\u5C0F\u8BA1\u8BA1\u7B97\u3002\u589E\u8865\u6A21\u5F0Fdisabled")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u8D39\u7528\u5C0F\u8BA1(\u4EC5\u4F9B\u53C2\u8003)"),
                createVNode("td", null, "SETTLEMENT_AMOUNT"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u8D39\u7528\u5C0F\u8BA1\u91D1\u989D"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "disabled\uFF0C\u81EA\u52A8\u8BA1\u7B97")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u590D\u5C3A\u9762\u79EF(\u33A1)"),
                createVNode("td", null, "SCALE_AREA"),
                createVNode("td", null, "NumberField"),
                createVNode("td", null, "\u590D\u5C3A\u9762\u79EF"),
                createVNode("td", null, "\u4EC5isConfirmArea\u65F6\u663E\u793A"),
                createVNode("td", null, "\u5FC5\u586B\uFF0C\u533A\u57DF\u786E\u8BA4\u65F6\u586B\u5199")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7B7E\u8BA2\u4EBA"),
                createVNode("td", null, "SIGNER_ID/SIGNER_NAME"),
                createVNode("td", null, "Select(object)"),
                createVNode("td", null, "\u7B7E\u8BA2\u4EBA"),
                createVNode("td", null, "haveSigner=true\u65F6\u663E\u793A"),
                createVNode("td", null, "options=signerDS\uFF0CtextField=name\uFF0CvalueField=accountId\uFF0C\u5FC5\u586B")
              ])
            ])
          ]),
          createVNode("h5", null, "\u8868\u53552\uFF1A\u7533\u8BF7\u4FE1\u606F\uFF08designInfoFormDS\uFF09"),
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
                createVNode("td", null, "\u7ECF\u9500\u5546\u7F16\u7801"),
                createVNode("td", null, "DISTRIBUTOR_CODE"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u7ECF\u9500\u5546\u7F16\u7801"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, 'disabled\uFF0Cplaceholder="\u63D0\u4EA4/\u4FDD\u5B58\u540E\u81EA\u52A8\u751F\u6210"')
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7ECF\u9500\u5546\u540D\u79F0"),
                createVNode("td", null, "DISTRIBUTOR_NAME"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u7ECF\u9500\u5546\u540D\u79F0"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, 'disabled\uFF0Cplaceholder="\u63D0\u4EA4/\u4FDD\u5B58\u540E\u81EA\u52A8\u751F\u6210"')
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6240\u5C5E\u8FD0\u8425\u4E2D\u5FC3"),
                createVNode("td", null, "OP_CENTER_CODE/OP_CENTER_NAME"),
                createVNode("td", null, "Select(object)"),
                createVNode("td", null, "\u6240\u5C5E\u8FD0\u8425\u4E2D\u5FC3"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u503C\u96C6MBO.OP_CENTER\uFF0C\u65B0\u589E/\u7F16\u8F91\u5FC5\u586B")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u4EA4\u6613\u516C\u53F8"),
                createVNode("td", null, "TRADING_COMPANY_NAME"),
                createVNode("td", null, "TextField+Icon(search)"),
                createVNode("td", null, "\u4EA4\u6613\u516C\u53F8"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u65B0\u589E/\u7F16\u8F91\u5FC5\u586B\uFF0CreadOnly+\u641C\u7D22\u56FE\u6807\uFF0C\u70B9\u51FB\u5F39\u51FA\u4EA4\u6613\u516C\u53F8\u9009\u62E9\u5F39\u7A97\u3002\u67E5\u770B\u6A21\u5F0F\u7EAFTextField")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5F00\u7968\u8D26\u6237"),
                createVNode("td", null, "LEGAL_ENTITY_NAME"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u5F00\u7968\u8D26\u6237\uFF08\u6CD5\u4EBA\u5355\u4F4D\u540D\u79F0\uFF09"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, 'disabled\uFF0Cplaceholder="\u9009\u62E9\u4EA4\u6613\u516C\u53F8\u540E\u81EA\u52A8\u5E26\u51FA"\uFF0C\u9009\u4EA4\u6613\u516C\u53F8\u540E\u81EA\u52A8\u5199\u5165')
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u95E8\u5E97\u540D\u79F0"),
                createVNode("td", null, "STORE_NAME"),
                createVNode("td", null, "TextField+Icon(search)"),
                createVNode("td", null, "\u95E8\u5E97\u540D\u79F0"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u65B0\u589E/\u7F16\u8F91\u5FC5\u586B\uFF0CreadOnly+\u641C\u7D22\u56FE\u6807\uFF0C\u70B9\u51FB\u5F39\u51FA\u95E8\u5E97\u9009\u62E9\u5F39\u7A97\u3002\u67E5\u770B\u6A21\u5F0F\u7EAFTextField")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u95E8\u5E97\u5730\u5740"),
                createVNode("td", null, "STORE_AREA"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u95E8\u5E97\u5730\u5740\uFF08\u7701/\u5E02/\u533A\uFF09"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, 'disabled\uFF0Cplaceholder="\u8BF7\u9009\u62E9\u95E8\u5E97\u540E\u81EA\u52A8\u5E26\u51FA"\uFF0C\u9009\u95E8\u5E97\u540E\u81EA\u52A8\u62FC\u63A5\u4E3A"\u7701/\u5E02/\u533A"\u3002\u4E0B\u65B9\u8DDF\u968F\u663E\u793AstoreAddress\uFF08\u95E8\u5E97\u8BE6\u7EC6\u5730\u5740\uFF0Cdisabled\uFF09')
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u95E8\u5E97\u7F16\u7801"),
                createVNode("td", null, "STORE_CODE"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u95E8\u5E97\u7F16\u7801"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, 'disabled\uFF0Cplaceholder="\u8BF7\u9009\u62E9\u95E8\u5E97\u540E\u81EA\u52A8\u5E26\u51FA"\uFF0C\u9009\u95E8\u5E97\u540E\u81EA\u52A8\u5199\u5165')
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5E97\u9762\u7C7B\u578B"),
                createVNode("td", null, "STORE_TYPE"),
                createVNode("td", null, "Select"),
                createVNode("td", null, "\u5E97\u9762\u7C7B\u578B"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u503C\u96C6MBO.ORD_LECTURER_STORE_TYPE\uFF0C\u65B0\u589E/\u7F16\u8F91\u5FC5\u586B")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5E97\u9762\u8D1F\u8D23\u4EBA"),
                createVNode("td", null, "SHOPMANAGER_NAME"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u5E97\u9762\u8D1F\u8D23\u4EBA"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, 'disabled\uFF0Cplaceholder="\u8BF7\u9009\u62E9\u95E8\u5E97\u540E\u81EA\u52A8\u5E26\u51FA"\uFF0C\u9009\u95E8\u5E97\u540E\u81EA\u52A8\u5199\u5165')
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u8D1F\u8D23\u4EBA\u7535\u8BDD"),
                createVNode("td", null, "SHOPMANAGER_MOB"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u8D1F\u8D23\u4EBA\u7535\u8BDD"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, 'disabled\uFF0Cplaceholder="\u8BF7\u9009\u62E9\u95E8\u5E97\u540E\u81EA\u52A8\u5E26\u51FA"\uFF0C\u9009\u95E8\u5E97\u540E\u81EA\u52A8\u5199\u5165')
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7533\u8BF7\u7C7B\u578B"),
                createVNode("td", null, "_APPLY_TYPE"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u7533\u8BF7\u7C7B\u578B"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, 'disabled\uFF0C\u81EA\u52A8\u5224\u65AD\uFF1A\u6548\u679C\u56FE\u589E\u8865(isSupplement)\u65F6\u663E\u793A"\u6548\u679C\u56FE\u589E\u8865"\uFF0C\u5426\u5219\u663E\u793A"\u95E8\u5E97\u8BBE\u8BA1"')
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, { title: "\u81EA\u52A8\u8BA1\u7B97\u903B\u8F91" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u8BA1\u7B97\u9879</th><th${_scopeId}>\u8BA1\u7B97\u516C\u5F0F</th><th${_scopeId}>\u89E6\u53D1\u65F6\u673A</th><th${_scopeId}>\u6570\u636E\u6765\u6E90</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u8D39\u7528\u5C0F\u8BA1</td><td${_scopeId}>settlementAmount = (\u975E\u589E\u8865\u65F6) storeArea * lecturerPrice + renderingNumber * 500 + airscapeNumber * 1250</td><td${_scopeId}>\u6548\u679C\u56FE\u6570\u91CF/\u9E1F\u77B0\u56FE\u6570\u91CF/\u5E97\u9762\u9762\u79EF onChange</td><td${_scopeId}>\`DesignApplyDetail/index.tsx\` \u7684 \`computedSettlementAmount\`</td></tr><tr${_scopeId}><td${_scopeId}>\u95E8\u5E97\u5730\u5740</td><td${_scopeId}>storeArea(\u8868\u53552) = provinceName + &#39;/&#39; + cityName + &#39;/&#39; + areaName</td><td${_scopeId}>\u9009\u62E9\u95E8\u5E97\u5F39\u7A97\u786E\u8BA4</td><td${_scopeId}>\`handleShowStoreList\` \u7684 onOk</td></tr><tr${_scopeId}><td${_scopeId}>\u95E8\u5E97\u8BE6\u7EC6\u5730\u5740</td><td${_scopeId}>storeAddress = storeInfo.addr</td><td${_scopeId}>\u9009\u62E9\u95E8\u5E97\u5F39\u7A97\u786E\u8BA4</td><td${_scopeId}>\`handleShowStoreList\` \u7684 onOk</td></tr><tr${_scopeId}><td${_scopeId}>\u95E8\u5E97\u7F16\u7801</td><td${_scopeId}>storeCode = storeInfo.terminalCode</td><td${_scopeId}>\u9009\u62E9\u95E8\u5E97\u5F39\u7A97\u786E\u8BA4</td><td${_scopeId}>\`handleShowStoreList\` \u7684 onOk</td></tr><tr${_scopeId}><td${_scopeId}>\u5E97\u9762\u8D1F\u8D23\u4EBA</td><td${_scopeId}>shopmanagerName = storeInfo.shopmanagerName</td><td${_scopeId}>\u9009\u62E9\u95E8\u5E97\u5F39\u7A97\u786E\u8BA4</td><td${_scopeId}>\`handleShowStoreList\` \u7684 onOk</td></tr><tr${_scopeId}><td${_scopeId}>\u8D1F\u8D23\u4EBA\u7535\u8BDD</td><td${_scopeId}>shopmanagerMob = storeInfo.shopmanagerMob</td><td${_scopeId}>\u9009\u62E9\u95E8\u5E97\u5F39\u7A97\u786E\u8BA4</td><td${_scopeId}>\`handleShowStoreList\` \u7684 onOk</td></tr><tr${_scopeId}><td${_scopeId}>\u5F00\u7968\u8D26\u6237</td><td${_scopeId}>legalEntityName/legalEntityCode</td><td${_scopeId}>\u9009\u62E9\u4EA4\u6613\u516C\u53F8\u5F39\u7A97\u786E\u8BA4</td><td${_scopeId}>\`handleShowCompanyList\` \u7684 onOk</td></tr></tbody></table>`);
      } else {
        return [
          createVNode("table", { class: "kb-field-tbl" }, [
            createVNode("thead", null, [
              createVNode("tr", null, [
                createVNode("th", null, "\u8BA1\u7B97\u9879"),
                createVNode("th", null, "\u8BA1\u7B97\u516C\u5F0F"),
                createVNode("th", null, "\u89E6\u53D1\u65F6\u673A"),
                createVNode("th", null, "\u6570\u636E\u6765\u6E90")
              ])
            ]),
            createVNode("tbody", null, [
              createVNode("tr", null, [
                createVNode("td", null, "\u8D39\u7528\u5C0F\u8BA1"),
                createVNode("td", null, "settlementAmount = (\u975E\u589E\u8865\u65F6) storeArea * lecturerPrice + renderingNumber * 500 + airscapeNumber * 1250"),
                createVNode("td", null, "\u6548\u679C\u56FE\u6570\u91CF/\u9E1F\u77B0\u56FE\u6570\u91CF/\u5E97\u9762\u9762\u79EF onChange"),
                createVNode("td", null, "`DesignApplyDetail/index.tsx` \u7684 `computedSettlementAmount`")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u95E8\u5E97\u5730\u5740"),
                createVNode("td", null, "storeArea(\u8868\u53552) = provinceName + '/' + cityName + '/' + areaName"),
                createVNode("td", null, "\u9009\u62E9\u95E8\u5E97\u5F39\u7A97\u786E\u8BA4"),
                createVNode("td", null, "`handleShowStoreList` \u7684 onOk")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u95E8\u5E97\u8BE6\u7EC6\u5730\u5740"),
                createVNode("td", null, "storeAddress = storeInfo.addr"),
                createVNode("td", null, "\u9009\u62E9\u95E8\u5E97\u5F39\u7A97\u786E\u8BA4"),
                createVNode("td", null, "`handleShowStoreList` \u7684 onOk")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u95E8\u5E97\u7F16\u7801"),
                createVNode("td", null, "storeCode = storeInfo.terminalCode"),
                createVNode("td", null, "\u9009\u62E9\u95E8\u5E97\u5F39\u7A97\u786E\u8BA4"),
                createVNode("td", null, "`handleShowStoreList` \u7684 onOk")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5E97\u9762\u8D1F\u8D23\u4EBA"),
                createVNode("td", null, "shopmanagerName = storeInfo.shopmanagerName"),
                createVNode("td", null, "\u9009\u62E9\u95E8\u5E97\u5F39\u7A97\u786E\u8BA4"),
                createVNode("td", null, "`handleShowStoreList` \u7684 onOk")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u8D1F\u8D23\u4EBA\u7535\u8BDD"),
                createVNode("td", null, "shopmanagerMob = storeInfo.shopmanagerMob"),
                createVNode("td", null, "\u9009\u62E9\u95E8\u5E97\u5F39\u7A97\u786E\u8BA4"),
                createVNode("td", null, "`handleShowStoreList` \u7684 onOk")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5F00\u7968\u8D26\u6237"),
                createVNode("td", null, "legalEntityName/legalEntityCode"),
                createVNode("td", null, "\u9009\u62E9\u4EA4\u6613\u516C\u53F8\u5F39\u7A97\u786E\u8BA4"),
                createVNode("td", null, "`handleShowCompanyList` \u7684 onOk")
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
        _push2(`<h4${_scopeId}>\u5F39\u7A971\uFF1A\u53D6\u6D88\u7533\u8BF7\u5F39\u7A97\uFF08\u5355\u9009\uFF09</h4><p${_scopeId}>\u5165\u53C2\uFF1A</p><table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u53C2\u6570\u540D</th><th${_scopeId}>\u6765\u6E90</th><th${_scopeId}>\u8BF4\u660E</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>applyCode</td><td${_scopeId}>\u5217\u8868\u9009\u4E2D\u884C</td><td${_scopeId}>\u7533\u8BF7\u7F16\u7801</td></tr><tr${_scopeId}><td${_scopeId}>cancelReason</td><td${_scopeId}>\u624B\u52A8\u8F93\u5165</td><td${_scopeId}>\u53D6\u6D88\u539F\u56E0\uFF08\u5FC5\u586B\uFF09</td></tr></tbody></table><p${_scopeId}>\u67E5\u8BE2SQL\uFF1A</p><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  da.APPLY_CODE    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7533\u8BF7\u7F16\u7801,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  da.ORDER_LECTURE_STATE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u70B9\u5C06\u72B6\u6001,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  da.APPROVAL_STATE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5BA1\u6838\u72B6\u6001</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> DESIGN_APPLY da</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> da.APPLY_CODE </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> :applyCode;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u5F39\u7A972\uFF1A\u8BBE\u8BA1\u56FE\u7EB8\u5F39\u7A97\uFF08\u5355\u9009\uFF09</h4><p${_scopeId}>\u5165\u53C2\uFF1A</p><table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u53C2\u6570\u540D</th><th${_scopeId}>\u6765\u6E90</th><th${_scopeId}>\u8BF4\u660E</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>applyCode</td><td${_scopeId}>\u5217\u8868\u9009\u4E2D\u884C</td><td${_scopeId}>\u7533\u8BF7\u7F16\u7801</td></tr></tbody></table><p${_scopeId}>\u67E5\u8BE2SQL\uFF1A</p><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  dd.DESIGN_DRAWING_ID </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u56FE\u7EB8ID,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  dd.APPLY_CODE    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7533\u8BF7\u7F16\u7801,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  dd.FILE_NAME     </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u6587\u4EF6\u540D\u79F0,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  dd.FILE_URL      </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u6587\u4EF6URL,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  dd.DRAWING_TYPE  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u56FE\u7EB8\u7C7B\u578B,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  dd.FEEDBACK_RESULT </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u53CD\u9988\u7ED3\u679C,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  dd.FEEDBACK_COMMENTS </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u53CD\u9988\u610F\u89C1</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> DESIGN_DRAWING dd</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> dd.APPLY_CODE </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> :applyCode</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ORDER BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> dd.DRAWING_TYPE, dd.OPERATION_TIME </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>DESC</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u5F39\u7A973\uFF1A\u53CD\u9988\u5F39\u7A97\uFF08\u5355\u9009\uFF09</h4><p${_scopeId}>\u5165\u53C2\uFF1A</p><table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u53C2\u6570\u540D</th><th${_scopeId}>\u6765\u6E90</th><th${_scopeId}>\u8BF4\u660E</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>applyCode</td><td${_scopeId}>\u5217\u8868\u9009\u4E2D\u884C</td><td${_scopeId}>\u7533\u8BF7\u7F16\u7801</td></tr><tr${_scopeId}><td${_scopeId}>designDrawingId</td><td${_scopeId}>\u56FE\u7EB8\u884C</td><td${_scopeId}>\u56FE\u7EB8ID</td></tr><tr${_scopeId}><td${_scopeId}>feedbackComments</td><td${_scopeId}>\u624B\u52A8\u8F93\u5165</td><td${_scopeId}>\u53CD\u9988\u610F\u89C1\uFF08\u5FC5\u586B\uFF09</td></tr><tr${_scopeId}><td${_scopeId}>feedbackResult</td><td${_scopeId}>\u624B\u52A8\u9009\u62E9</td><td${_scopeId}>approved/reject</td></tr></tbody></table><p${_scopeId}>\u67E5\u8BE2SQL\uFF1A</p><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  dd.DESIGN_DRAWING_ID </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u56FE\u7EB8ID,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  dd.FEEDBACK_COMMENTS </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u53CD\u9988\u610F\u89C1,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  dd.FEEDBACK_RESULT </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u53CD\u9988\u7ED3\u679C,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  TO_CHAR(dd.OPERATION_TIME, </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>YYYY-MM-DD HH24:MI:SS</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u53CD\u9988\u65F6\u95F4</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> DESIGN_DRAWING dd</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> dd.APPLY_CODE </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> :applyCode</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> dd.FEEDBACK_RESULT </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NOT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ORDER BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> dd.OPERATION_TIME </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>DESC</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u5F39\u7A974\uFF1A\u67E5\u770B\u9971\u548C\u5EA6\u5F39\u7A97\uFF08\u5355\u9009\uFF09</h4><p${_scopeId}>\u5165\u53C2\uFF1A</p><table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u53C2\u6570\u540D</th><th${_scopeId}>\u6765\u6E90</th><th${_scopeId}>\u8BF4\u660E</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>lecturerCode</td><td${_scopeId}>\u8BBE\u8BA1\u5E08\u884C</td><td${_scopeId}>\u8BBE\u8BA1\u5E08\u7F16\u7801</td></tr></tbody></table><p${_scopeId}>\u67E5\u8BE2SQL\uFF1A</p><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  da.LECTURER_NAME </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u8BBE\u8BA1\u5E08,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}>COUNT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>*</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>)         </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u670D\u52A1\u4E2D\u5355\u636E\u6570</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> DESIGN_APPLY da</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> da.LECTURER_CODE </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> :lecturerCode</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> da.ORDER_LECTURE_STATE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>valid</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>executing</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>GROUP BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> da.LECTURER_NAME;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u5F39\u7A975\uFF1A\u6D41\u7A0B\u6458\u8981\u5F39\u7A97\uFF08\u5355\u9009\uFF09</h4><p${_scopeId}>\u5165\u53C2\uFF1A</p><table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u53C2\u6570\u540D</th><th${_scopeId}>\u6765\u6E90</th><th${_scopeId}>\u8BF4\u660E</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>applyCode</td><td${_scopeId}>\u5217\u8868\u9009\u4E2D\u884C</td><td${_scopeId}>\u7533\u8BF7\u7F16\u7801</td></tr></tbody></table><p${_scopeId}>\u67E5\u8BE2SQL\uFF1A</p><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>*</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> DESIGN_APPLY da</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> da.APPLY_CODE </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> :applyCode;</span></span>
<span class="line"${_scopeId}></span></code></pre></div>`);
      } else {
        return [
          createVNode("h4", null, "\u5F39\u7A971\uFF1A\u53D6\u6D88\u7533\u8BF7\u5F39\u7A97\uFF08\u5355\u9009\uFF09"),
          createVNode("p", null, "\u5165\u53C2\uFF1A"),
          createVNode("table", { class: "kb-field-tbl" }, [
            createVNode("thead", null, [
              createVNode("tr", null, [
                createVNode("th", null, "\u53C2\u6570\u540D"),
                createVNode("th", null, "\u6765\u6E90"),
                createVNode("th", null, "\u8BF4\u660E")
              ])
            ]),
            createVNode("tbody", null, [
              createVNode("tr", null, [
                createVNode("td", null, "applyCode"),
                createVNode("td", null, "\u5217\u8868\u9009\u4E2D\u884C"),
                createVNode("td", null, "\u7533\u8BF7\u7F16\u7801")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "cancelReason"),
                createVNode("td", null, "\u624B\u52A8\u8F93\u5165"),
                createVNode("td", null, "\u53D6\u6D88\u539F\u56E0\uFF08\u5FC5\u586B\uFF09")
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
                  createVNode("span", { style: { "color": "#F78C6C" } }, "SELECT")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  da.APPLY_CODE    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7533\u8BF7\u7F16\u7801,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  da.ORDER_LECTURE_STATE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u70B9\u5C06\u72B6\u6001,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  da.APPROVAL_STATE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5BA1\u6838\u72B6\u6001")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " DESIGN_APPLY da")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " da.APPLY_CODE "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " :applyCode;")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u5F39\u7A972\uFF1A\u8BBE\u8BA1\u56FE\u7EB8\u5F39\u7A97\uFF08\u5355\u9009\uFF09"),
          createVNode("p", null, "\u5165\u53C2\uFF1A"),
          createVNode("table", { class: "kb-field-tbl" }, [
            createVNode("thead", null, [
              createVNode("tr", null, [
                createVNode("th", null, "\u53C2\u6570\u540D"),
                createVNode("th", null, "\u6765\u6E90"),
                createVNode("th", null, "\u8BF4\u660E")
              ])
            ]),
            createVNode("tbody", null, [
              createVNode("tr", null, [
                createVNode("td", null, "applyCode"),
                createVNode("td", null, "\u5217\u8868\u9009\u4E2D\u884C"),
                createVNode("td", null, "\u7533\u8BF7\u7F16\u7801")
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
                  createVNode("span", { style: { "color": "#F78C6C" } }, "SELECT")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  dd.DESIGN_DRAWING_ID "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u56FE\u7EB8ID,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  dd.APPLY_CODE    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7533\u8BF7\u7F16\u7801,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  dd.FILE_NAME     "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u6587\u4EF6\u540D\u79F0,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  dd.FILE_URL      "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u6587\u4EF6URL,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  dd.DRAWING_TYPE  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u56FE\u7EB8\u7C7B\u578B,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  dd.FEEDBACK_RESULT "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u53CD\u9988\u7ED3\u679C,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  dd.FEEDBACK_COMMENTS "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u53CD\u9988\u610F\u89C1")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " DESIGN_DRAWING dd")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " dd.APPLY_CODE "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " :applyCode")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ORDER BY"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " dd.DRAWING_TYPE, dd.OPERATION_TIME "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "DESC"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u5F39\u7A973\uFF1A\u53CD\u9988\u5F39\u7A97\uFF08\u5355\u9009\uFF09"),
          createVNode("p", null, "\u5165\u53C2\uFF1A"),
          createVNode("table", { class: "kb-field-tbl" }, [
            createVNode("thead", null, [
              createVNode("tr", null, [
                createVNode("th", null, "\u53C2\u6570\u540D"),
                createVNode("th", null, "\u6765\u6E90"),
                createVNode("th", null, "\u8BF4\u660E")
              ])
            ]),
            createVNode("tbody", null, [
              createVNode("tr", null, [
                createVNode("td", null, "applyCode"),
                createVNode("td", null, "\u5217\u8868\u9009\u4E2D\u884C"),
                createVNode("td", null, "\u7533\u8BF7\u7F16\u7801")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "designDrawingId"),
                createVNode("td", null, "\u56FE\u7EB8\u884C"),
                createVNode("td", null, "\u56FE\u7EB8ID")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "feedbackComments"),
                createVNode("td", null, "\u624B\u52A8\u8F93\u5165"),
                createVNode("td", null, "\u53CD\u9988\u610F\u89C1\uFF08\u5FC5\u586B\uFF09")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "feedbackResult"),
                createVNode("td", null, "\u624B\u52A8\u9009\u62E9"),
                createVNode("td", null, "approved/reject")
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
                  createVNode("span", { style: { "color": "#F78C6C" } }, "SELECT")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  dd.DESIGN_DRAWING_ID "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u56FE\u7EB8ID,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  dd.FEEDBACK_COMMENTS "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u53CD\u9988\u610F\u89C1,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  dd.FEEDBACK_RESULT "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u53CD\u9988\u7ED3\u679C,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  TO_CHAR(dd.OPERATION_TIME, "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "YYYY-MM-DD HH24:MI:SS"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u53CD\u9988\u65F6\u95F4")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " DESIGN_DRAWING dd")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " dd.APPLY_CODE "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " :applyCode")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " dd.FEEDBACK_RESULT "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NOT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NULL")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ORDER BY"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " dd.OPERATION_TIME "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "DESC"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u5F39\u7A974\uFF1A\u67E5\u770B\u9971\u548C\u5EA6\u5F39\u7A97\uFF08\u5355\u9009\uFF09"),
          createVNode("p", null, "\u5165\u53C2\uFF1A"),
          createVNode("table", { class: "kb-field-tbl" }, [
            createVNode("thead", null, [
              createVNode("tr", null, [
                createVNode("th", null, "\u53C2\u6570\u540D"),
                createVNode("th", null, "\u6765\u6E90"),
                createVNode("th", null, "\u8BF4\u660E")
              ])
            ]),
            createVNode("tbody", null, [
              createVNode("tr", null, [
                createVNode("td", null, "lecturerCode"),
                createVNode("td", null, "\u8BBE\u8BA1\u5E08\u884C"),
                createVNode("td", null, "\u8BBE\u8BA1\u5E08\u7F16\u7801")
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
                  createVNode("span", { style: { "color": "#F78C6C" } }, "SELECT")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  da.LECTURER_NAME "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u8BBE\u8BA1\u5E08,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#82AAFF" } }, "COUNT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "("),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "*"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ")         "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u670D\u52A1\u4E2D\u5355\u636E\u6570")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " DESIGN_APPLY da")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " da.LECTURER_CODE "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " :lecturerCode")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " da.ORDER_LECTURE_STATE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IN"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " ("),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "valid"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ", "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "executing"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ")")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "GROUP BY"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " da.LECTURER_NAME;")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u5F39\u7A975\uFF1A\u6D41\u7A0B\u6458\u8981\u5F39\u7A97\uFF08\u5355\u9009\uFF09"),
          createVNode("p", null, "\u5165\u53C2\uFF1A"),
          createVNode("table", { class: "kb-field-tbl" }, [
            createVNode("thead", null, [
              createVNode("tr", null, [
                createVNode("th", null, "\u53C2\u6570\u540D"),
                createVNode("th", null, "\u6765\u6E90"),
                createVNode("th", null, "\u8BF4\u660E")
              ])
            ]),
            createVNode("tbody", null, [
              createVNode("tr", null, [
                createVNode("td", null, "applyCode"),
                createVNode("td", null, "\u5217\u8868\u9009\u4E2D\u884C"),
                createVNode("td", null, "\u7533\u8BF7\u7F16\u7801")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "*")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " DESIGN_APPLY da")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " da.APPLY_CODE "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " :applyCode;")
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
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5E8F\u53F7</th><th${_scopeId}>\u6309\u94AE\u540D\u79F0</th><th${_scopeId}>\u6240\u5728\u4F4D\u7F6E</th><th${_scopeId}>\u663E\u9690\u6761\u4EF6</th><th${_scopeId}>\u4E1A\u52A1\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>1</td><td${_scopeId}>\u65B0\u5EFA</td><td${_scopeId}>\u5217\u8868\u9875\u5934\u90E8</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u8DF3\u8F6C\u8BE6\u60C5\u9875(/detail/null/add)</td></tr><tr${_scopeId}><td${_scopeId}>2</td><td${_scopeId}>\u7F16\u8F91</td><td${_scopeId}>\u5217\u8868\u884C</td><td${_scopeId}>\u8349\u7A3F\u6216\u9A73\u56DE\u72B6\u6001</td><td${_scopeId}>\u8DF3\u8F6C\u8BE6\u60C5\u9875\u7F16\u8F91</td></tr><tr${_scopeId}><td${_scopeId}>3</td><td${_scopeId}>\u5220\u9664</td><td${_scopeId}>\u5217\u8868\u884C</td><td${_scopeId}>\u8349\u7A3F\u6216\u9A73\u56DE\u72B6\u6001</td><td${_scopeId}>\u8C03\u7528delete\u63A5\u53E3</td></tr><tr${_scopeId}><td${_scopeId}>4</td><td${_scopeId}>\u4FDD\u5B58</td><td${_scopeId}>\u8BE6\u60C5\u9875</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u8C03\u7528dealerSave\u63A5\u53E3</td></tr><tr${_scopeId}><td${_scopeId}>5</td><td${_scopeId}>\u4FDD\u5B58\u5E76\u63D0\u4EA4</td><td${_scopeId}>\u8BE6\u60C5\u9875</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u8C03\u7528dealerSaveAndSubmit\u63A5\u53E3</td></tr><tr${_scopeId}><td${_scopeId}>6</td><td${_scopeId}>\u53D6\u6D88\u7533\u8BF7</td><td${_scopeId}>\u5217\u8868\u884C</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u5F39\u7A97\u586B\u5199\u53D6\u6D88\u539F\u56E0\uFF0C\u8C03\u7528cancelApply</td></tr><tr${_scopeId}><td${_scopeId}>7</td><td${_scopeId}>\u4E0B\u8F7D\u8BBE\u8BA1\u56FE\u7EB8</td><td${_scopeId}>\u5217\u8868\u884C</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u5F39\u7A97\u5C55\u793A\u4E09\u7C7B\u56FE\u7EB8\uFF0C\u53EF\u9884\u89C8\u4E0E\u53CD\u9988</td></tr><tr${_scopeId}><td${_scopeId}>8</td><td${_scopeId}>\u8BBE\u8BA1\u6539\u6D3E</td><td${_scopeId}>\u5217\u8868\u884C</td><td${_scopeId}>\u5DF2\u751F\u6548\u72B6\u6001</td><td${_scopeId}>\u8C03\u7528designReassignment\u63A5\u53E3</td></tr><tr${_scopeId}><td${_scopeId}>9</td><td${_scopeId}>\u67E5\u770B\u53CD\u9988</td><td${_scopeId}>\u5217\u8868\u884C</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u8C03\u7528queryFeedback\u63A5\u53E3\u67E5\u770B\u5386\u53F2\u53CD\u9988</td></tr><tr${_scopeId}><td${_scopeId}>10</td><td${_scopeId}>\u4E0A\u4F20\u8BBE\u8BA1\u56FE\u7EB8</td><td${_scopeId}>\u8BE6\u60C5\u9875</td><td${_scopeId}>\u8BBE\u8BA1\u4E2D\u72B6\u6001</td><td${_scopeId}>\u8C03\u7528upload\u63A5\u53E3\u4E0A\u4F20\u56FE\u7EB8</td></tr><tr${_scopeId}><td${_scopeId}>11</td><td${_scopeId}>\u4E0B\u5355</td><td${_scopeId}>\u8BE6\u60C5\u9875</td><td${_scopeId}>\u56FE\u7EB8\u786E\u8BA4\u540E</td><td${_scopeId}>\u8C03\u7528startOrder\u63A5\u53E3</td></tr><tr${_scopeId}><td${_scopeId}>12</td><td${_scopeId}>\u533A\u57DF\u786E\u8BA4</td><td${_scopeId}>\u8BE6\u60C5\u9875</td><td${_scopeId}>FDD\u7B7E\u7F72\u4E2D</td><td${_scopeId}>\u8C03\u7528areaConfirm\u63A5\u53E3\uFF0CuseFDD\u7B7E\u5408\u540C</td></tr><tr${_scopeId}><td${_scopeId}>13</td><td${_scopeId}>\u5F00\u59CB\u8BBE\u8BA1</td><td${_scopeId}>\u8BE6\u60C5\u9875</td><td${_scopeId}>\u5BA1\u6279\u901A\u8FC7\u540E</td><td${_scopeId}>\u8C03\u7528startDesign\u63A5\u53E3</td></tr><tr${_scopeId}><td${_scopeId}>14</td><td${_scopeId}>\u56FE\u7EB8\u786E\u8BA4</td><td${_scopeId}>\u8BE6\u60C5\u9875</td><td${_scopeId}>\u5F85\u786E\u8BA4\u72B6\u6001</td><td${_scopeId}>\u8C03\u7528startDrawingConfirm\u63A5\u53E3\uFF0CuseFDD\u7B7E\u7ED3\u7B97\u5408\u540C</td></tr><tr${_scopeId}><td${_scopeId}>15</td><td${_scopeId}>\u7EC8\u6B62</td><td${_scopeId}>\u5217\u8868\u884C</td><td${_scopeId}>\u8BBE\u8BA1\u6D41\u7A0B\u4E2D</td><td${_scopeId}>\u8C03\u7528termination\u63A5\u53E3</td></tr><tr${_scopeId}><td${_scopeId}>16</td><td${_scopeId}>\u6548\u679C\u56FE\u8865\u7533</td><td${_scopeId}>\u5217\u8868\u884C</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u8DF3\u8F6C\u8BE6\u60C5\u9875(/detail/{id}/supplement)</td></tr></tbody></table><h4${_scopeId}>\u6309\u94AE1\uFF1A\u65B0\u5EFA\uFF08\u5217\u8868\u9875\u5934\u90E8\uFF09</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u663E\u9690\u6761\u4EF6</strong>\uFF1A\u59CB\u7EC8\u663E\u793A</li><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u903B\u8F91</strong>\uFF1A\u8DF3\u8F6C\u8BE6\u60C5\u9875<code${_scopeId}>/detail/null/add</code>\uFF0C\u4F20\u5165\u65B0\u589E\u6A21\u5F0F\u53C2\u6570\u3002</li></ul><h4${_scopeId}>\u6309\u94AE2\uFF1A\u7F16\u8F91\uFF08\u5217\u8868\u884C\uFF09</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u663E\u9690\u6761\u4EF6</strong>\uFF1AorderLectureState=&#39;draft&#39; \u6216 approvalState \u4E3A reject/oa_reject/fdd_reject</li><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u903B\u8F91</strong>\uFF1A\u8DF3\u8F6C\u8BE6\u60C5\u9875\u7F16\u8F91\u6A21\u5F0F\uFF0C\u52A0\u8F7D\u5DF2\u6709\u6570\u636E\u3002</li></ul><h4${_scopeId}>\u6309\u94AE3\uFF1A\u5220\u9664\uFF08\u5217\u8868\u884C\uFF09</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u663E\u9690\u6761\u4EF6</strong>\uFF1AorderLectureState=&#39;draft&#39; \u6216 approvalState \u4E3A reject/fdd_reject/oa_reject</li><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u903B\u8F91</strong>\uFF1A\u786E\u8BA4\u540E\u8C03\u7528<code${_scopeId}>POST delete</code>\u63A5\u53E3\u5220\u9664\u7533\u8BF7\u3002</li></ul><h4${_scopeId}>\u6309\u94AE4\uFF1A\u4FDD\u5B58\uFF08\u8BE6\u60C5\u9875\uFF09</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u663E\u9690\u6761\u4EF6</strong>\uFF1A\u59CB\u7EC8\u663E\u793A</li><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u903B\u8F91</strong>\uFF1A\u6821\u9A8C\u901A\u8FC7\u540E\u8C03\u7528<code${_scopeId}>POST dealerSave</code>\u63A5\u53E3\u4FDD\u5B58\u4E3A\u8349\u7A3F\u3002</li></ul><h4${_scopeId}>\u6309\u94AE5\uFF1A\u4FDD\u5B58\u5E76\u63D0\u4EA4\uFF08\u8BE6\u60C5\u9875\uFF09</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u663E\u9690\u6761\u4EF6</strong>\uFF1A\u59CB\u7EC8\u663E\u793A</li><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u903B\u8F91</strong>\uFF1A\u6821\u9A8C\u901A\u8FC7\u540E\u8C03\u7528<code${_scopeId}>POST dealerSaveAndSubmit</code>\u63A5\u53E3\u4FDD\u5B58\u5E76\u63D0\u4EA4\u5BA1\u6279\uFF0C\u89E6\u53D1designApplyApproval\u5BA1\u6279\u6D41\u3002</li></ul><h4${_scopeId}>\u6309\u94AE6\uFF1A\u53D6\u6D88\u7533\u8BF7\uFF08\u5217\u8868\u884C\uFF09</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u663E\u9690\u6761\u4EF6</strong>\uFF1A\u59CB\u7EC8\u663E\u793A</li><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u903B\u8F91</strong>\uFF1A\u5F39\u7A97\u586B\u5199\u53D6\u6D88\u539F\u56E0\uFF0C\u8C03\u7528<code${_scopeId}>POST cancelApply</code>\u63A5\u53E3\u3002</li><li${_scopeId}><strong${_scopeId}>\u6821\u9A8C</strong>\uFF1A\u53D6\u6D88\u539F\u56E0\u5FC5\u586B\u3002</li></ul><h4${_scopeId}>\u6309\u94AE7\uFF1A\u4E0B\u8F7D\u8BBE\u8BA1\u56FE\u7EB8\uFF08\u5217\u8868\u884C\uFF09</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u663E\u9690\u6761\u4EF6</strong>\uFF1A\u59CB\u7EC8\u663E\u793A</li><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u903B\u8F91</strong>\uFF1A\u5F39\u7A97\u5C55\u793A\u4E09\u7C7B\u56FE\u7EB8\uFF08\u8BBE\u8BA1\u56FE\u3001\u6548\u679C\u56FE\u3001\u65BD\u5DE5\u53CA\u8F6F\u88C5\u56FE\uFF09\uFF0C\u901A\u8FC7<code${_scopeId}>downloadDrawing</code>\u63A5\u53E3\u52A0\u8F7D\uFF0C\u6BCF\u7C7B\u56FE\u7EB8\u5C55\u793A\u6587\u4EF6\u540D\u79F0\uFF08\u53EF\u70B9\u51FB\u9884\u89C8\uFF09\u548C\u53CD\u9988\u6309\u94AE\u3002</li></ul><h4${_scopeId}>\u6309\u94AE8\uFF1A\u8BBE\u8BA1\u6539\u6D3E\uFF08\u5217\u8868\u884C\uFF09</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u663E\u9690\u6761\u4EF6</strong>\uFF1A\u5DF2\u751F\u6548\u72B6\u6001</li><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u903B\u8F91</strong>\uFF1A\u8C03\u7528<code${_scopeId}>designReassignment</code>\u63A5\u53E3\uFF0C\u66F4\u6362\u8BBE\u8BA1\u5E08\u5E76\u91CD\u65B0\u8D70\u5BA1\u6279\u6D41\u7A0B\u3002</li></ul><h4${_scopeId}>\u6309\u94AE9\uFF1A\u67E5\u770B\u53CD\u9988\uFF08\u5217\u8868\u884C\uFF09</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u663E\u9690\u6761\u4EF6</strong>\uFF1A\u59CB\u7EC8\u663E\u793A</li><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u903B\u8F91</strong>\uFF1A\u8C03\u7528<code${_scopeId}>queryFeedback</code>\u63A5\u53E3\u67E5\u770B\u5386\u53F2\u53CD\u9988\u8BB0\u5F55\u3002</li></ul><h4${_scopeId}>\u6309\u94AE10\uFF1A\u4E0A\u4F20\u8BBE\u8BA1\u56FE\u7EB8\uFF08\u8BE6\u60C5\u9875\uFF09</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u663E\u9690\u6761\u4EF6</strong>\uFF1A\u8BBE\u8BA1\u4E2D\u72B6\u6001</li><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u903B\u8F91</strong>\uFF1A\u8C03\u7528<code${_scopeId}>upload</code>\u63A5\u53E3\u4E0A\u4F20\u8BBE\u8BA1\u56FE\u7EB8\uFF0C\u53EF\u9009\u7C7B\u578B\u4E3A\u8BBE\u8BA1\u56FE/\u6548\u679C\u56FE/\u65BD\u5DE5\u53CA\u8F6F\u88C5\u56FE\u3002</li></ul><h4${_scopeId}>\u6309\u94AE11\uFF1A\u4E0B\u5355\uFF08\u8BE6\u60C5\u9875\uFF09</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u663E\u9690\u6761\u4EF6</strong>\uFF1A\u56FE\u7EB8\u786E\u8BA4\u540E</li><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u903B\u8F91</strong>\uFF1A\u8C03\u7528<code${_scopeId}>startOrder</code>\u63A5\u53E3\u4E0B\u53D1\u8BA2\u5355\u3002</li></ul><h4${_scopeId}>\u6309\u94AE12\uFF1A\u533A\u57DF\u786E\u8BA4\uFF08\u8BE6\u60C5\u9875\uFF09</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u663E\u9690\u6761\u4EF6</strong>\uFF1AFDD\u7B7E\u7F72\u4E2D\uFF08approvalState=&#39;fdd_in_approval&#39;\uFF09</li><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u903B\u8F91</strong>\uFF1A\u6821\u9A8C\u901A\u8FC7\u540E\u8C03\u7528<code${_scopeId}>areaConfirm</code>\u63A5\u53E3\uFF0CuseFDD\u7B7E\u5408\u540C\u3002</li></ul><h4${_scopeId}>\u6309\u94AE13\uFF1A\u5F00\u59CB\u8BBE\u8BA1\uFF08\u8BE6\u60C5\u9875\uFF09</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u663E\u9690\u6761\u4EF6</strong>\uFF1A\u5BA1\u6279\u901A\u8FC7\u540E</li><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u903B\u8F91</strong>\uFF1A\u8C03\u7528<code${_scopeId}>startDesign</code>\u63A5\u53E3\u5F00\u59CB\u8BBE\u8BA1\u6D41\u7A0B\u3002</li></ul><h4${_scopeId}>\u6309\u94AE14\uFF1A\u56FE\u7EB8\u786E\u8BA4\uFF08\u8BE6\u60C5\u9875\uFF09</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u663E\u9690\u6761\u4EF6</strong>\uFF1A\u5F85\u786E\u8BA4\u72B6\u6001\uFF08settlementConfirmState=&#39;to_be_confirm&#39;\uFF09</li><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u903B\u8F91</strong>\uFF1A\u6821\u9A8C\u901A\u8FC7\u540E\u8C03\u7528<code${_scopeId}>startDrawingConfirm</code>\u63A5\u53E3\uFF0CuseFDD\u7B7E\u7ED3\u7B97\u5408\u540C\u3002</li></ul><h4${_scopeId}>\u6309\u94AE15\uFF1A\u7EC8\u6B62\uFF08\u5217\u8868\u884C\uFF09</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u663E\u9690\u6761\u4EF6</strong>\uFF1A\u8BBE\u8BA1\u6D41\u7A0B\u4E2D</li><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u903B\u8F91</strong>\uFF1A\u8C03\u7528<code${_scopeId}>termination</code>\u63A5\u53E3\u7EC8\u6B62\u8BBE\u8BA1\u6D41\u7A0B\u3002</li></ul><h4${_scopeId}>\u6309\u94AE16\uFF1A\u6548\u679C\u56FE\u8865\u7533\uFF08\u5217\u8868\u884C\uFF09</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u663E\u9690\u6761\u4EF6</strong>\uFF1A\u59CB\u7EC8\u663E\u793A</li><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u903B\u8F91</strong>\uFF1A\u8DF3\u8F6C\u8BE6\u60C5\u9875<code${_scopeId}>/detail/{applyCode}/supplement</code>\uFF0C\u4F7F\u7528dealerSaveSupplement/dealerSaveAndSubmitSupplement\u63A5\u53E3\u4FDD\u5B58\u8865\u5145\u7533\u8BF7\uFF0C\u5173\u8054\u539F\u7533\u8BF7\u3002</li></ul>`);
      } else {
        return [
          createVNode("table", { class: "kb-field-tbl" }, [
            createVNode("thead", null, [
              createVNode("tr", null, [
                createVNode("th", null, "\u5E8F\u53F7"),
                createVNode("th", null, "\u6309\u94AE\u540D\u79F0"),
                createVNode("th", null, "\u6240\u5728\u4F4D\u7F6E"),
                createVNode("th", null, "\u663E\u9690\u6761\u4EF6"),
                createVNode("th", null, "\u4E1A\u52A1\u903B\u8F91")
              ])
            ]),
            createVNode("tbody", null, [
              createVNode("tr", null, [
                createVNode("td", null, "1"),
                createVNode("td", null, "\u65B0\u5EFA"),
                createVNode("td", null, "\u5217\u8868\u9875\u5934\u90E8"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u8DF3\u8F6C\u8BE6\u60C5\u9875(/detail/null/add)")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "2"),
                createVNode("td", null, "\u7F16\u8F91"),
                createVNode("td", null, "\u5217\u8868\u884C"),
                createVNode("td", null, "\u8349\u7A3F\u6216\u9A73\u56DE\u72B6\u6001"),
                createVNode("td", null, "\u8DF3\u8F6C\u8BE6\u60C5\u9875\u7F16\u8F91")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "3"),
                createVNode("td", null, "\u5220\u9664"),
                createVNode("td", null, "\u5217\u8868\u884C"),
                createVNode("td", null, "\u8349\u7A3F\u6216\u9A73\u56DE\u72B6\u6001"),
                createVNode("td", null, "\u8C03\u7528delete\u63A5\u53E3")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "4"),
                createVNode("td", null, "\u4FDD\u5B58"),
                createVNode("td", null, "\u8BE6\u60C5\u9875"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u8C03\u7528dealerSave\u63A5\u53E3")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "5"),
                createVNode("td", null, "\u4FDD\u5B58\u5E76\u63D0\u4EA4"),
                createVNode("td", null, "\u8BE6\u60C5\u9875"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u8C03\u7528dealerSaveAndSubmit\u63A5\u53E3")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "6"),
                createVNode("td", null, "\u53D6\u6D88\u7533\u8BF7"),
                createVNode("td", null, "\u5217\u8868\u884C"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u5F39\u7A97\u586B\u5199\u53D6\u6D88\u539F\u56E0\uFF0C\u8C03\u7528cancelApply")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "7"),
                createVNode("td", null, "\u4E0B\u8F7D\u8BBE\u8BA1\u56FE\u7EB8"),
                createVNode("td", null, "\u5217\u8868\u884C"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u5F39\u7A97\u5C55\u793A\u4E09\u7C7B\u56FE\u7EB8\uFF0C\u53EF\u9884\u89C8\u4E0E\u53CD\u9988")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "8"),
                createVNode("td", null, "\u8BBE\u8BA1\u6539\u6D3E"),
                createVNode("td", null, "\u5217\u8868\u884C"),
                createVNode("td", null, "\u5DF2\u751F\u6548\u72B6\u6001"),
                createVNode("td", null, "\u8C03\u7528designReassignment\u63A5\u53E3")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "9"),
                createVNode("td", null, "\u67E5\u770B\u53CD\u9988"),
                createVNode("td", null, "\u5217\u8868\u884C"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u8C03\u7528queryFeedback\u63A5\u53E3\u67E5\u770B\u5386\u53F2\u53CD\u9988")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "10"),
                createVNode("td", null, "\u4E0A\u4F20\u8BBE\u8BA1\u56FE\u7EB8"),
                createVNode("td", null, "\u8BE6\u60C5\u9875"),
                createVNode("td", null, "\u8BBE\u8BA1\u4E2D\u72B6\u6001"),
                createVNode("td", null, "\u8C03\u7528upload\u63A5\u53E3\u4E0A\u4F20\u56FE\u7EB8")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "11"),
                createVNode("td", null, "\u4E0B\u5355"),
                createVNode("td", null, "\u8BE6\u60C5\u9875"),
                createVNode("td", null, "\u56FE\u7EB8\u786E\u8BA4\u540E"),
                createVNode("td", null, "\u8C03\u7528startOrder\u63A5\u53E3")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "12"),
                createVNode("td", null, "\u533A\u57DF\u786E\u8BA4"),
                createVNode("td", null, "\u8BE6\u60C5\u9875"),
                createVNode("td", null, "FDD\u7B7E\u7F72\u4E2D"),
                createVNode("td", null, "\u8C03\u7528areaConfirm\u63A5\u53E3\uFF0CuseFDD\u7B7E\u5408\u540C")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "13"),
                createVNode("td", null, "\u5F00\u59CB\u8BBE\u8BA1"),
                createVNode("td", null, "\u8BE6\u60C5\u9875"),
                createVNode("td", null, "\u5BA1\u6279\u901A\u8FC7\u540E"),
                createVNode("td", null, "\u8C03\u7528startDesign\u63A5\u53E3")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "14"),
                createVNode("td", null, "\u56FE\u7EB8\u786E\u8BA4"),
                createVNode("td", null, "\u8BE6\u60C5\u9875"),
                createVNode("td", null, "\u5F85\u786E\u8BA4\u72B6\u6001"),
                createVNode("td", null, "\u8C03\u7528startDrawingConfirm\u63A5\u53E3\uFF0CuseFDD\u7B7E\u7ED3\u7B97\u5408\u540C")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "15"),
                createVNode("td", null, "\u7EC8\u6B62"),
                createVNode("td", null, "\u5217\u8868\u884C"),
                createVNode("td", null, "\u8BBE\u8BA1\u6D41\u7A0B\u4E2D"),
                createVNode("td", null, "\u8C03\u7528termination\u63A5\u53E3")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "16"),
                createVNode("td", null, "\u6548\u679C\u56FE\u8865\u7533"),
                createVNode("td", null, "\u5217\u8868\u884C"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u8DF3\u8F6C\u8BE6\u60C5\u9875(/detail/{id}/supplement)")
              ])
            ])
          ]),
          createVNode("h4", null, "\u6309\u94AE1\uFF1A\u65B0\u5EFA\uFF08\u5217\u8868\u9875\u5934\u90E8\uFF09"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u663E\u9690\u6761\u4EF6"),
              createTextVNode("\uFF1A\u59CB\u7EC8\u663E\u793A")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u903B\u8F91"),
              createTextVNode("\uFF1A\u8DF3\u8F6C\u8BE6\u60C5\u9875"),
              createVNode("code", null, "/detail/null/add"),
              createTextVNode("\uFF0C\u4F20\u5165\u65B0\u589E\u6A21\u5F0F\u53C2\u6570\u3002")
            ])
          ]),
          createVNode("h4", null, "\u6309\u94AE2\uFF1A\u7F16\u8F91\uFF08\u5217\u8868\u884C\uFF09"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u663E\u9690\u6761\u4EF6"),
              createTextVNode("\uFF1AorderLectureState='draft' \u6216 approvalState \u4E3A reject/oa_reject/fdd_reject")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u903B\u8F91"),
              createTextVNode("\uFF1A\u8DF3\u8F6C\u8BE6\u60C5\u9875\u7F16\u8F91\u6A21\u5F0F\uFF0C\u52A0\u8F7D\u5DF2\u6709\u6570\u636E\u3002")
            ])
          ]),
          createVNode("h4", null, "\u6309\u94AE3\uFF1A\u5220\u9664\uFF08\u5217\u8868\u884C\uFF09"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u663E\u9690\u6761\u4EF6"),
              createTextVNode("\uFF1AorderLectureState='draft' \u6216 approvalState \u4E3A reject/fdd_reject/oa_reject")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u903B\u8F91"),
              createTextVNode("\uFF1A\u786E\u8BA4\u540E\u8C03\u7528"),
              createVNode("code", null, "POST delete"),
              createTextVNode("\u63A5\u53E3\u5220\u9664\u7533\u8BF7\u3002")
            ])
          ]),
          createVNode("h4", null, "\u6309\u94AE4\uFF1A\u4FDD\u5B58\uFF08\u8BE6\u60C5\u9875\uFF09"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u663E\u9690\u6761\u4EF6"),
              createTextVNode("\uFF1A\u59CB\u7EC8\u663E\u793A")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u903B\u8F91"),
              createTextVNode("\uFF1A\u6821\u9A8C\u901A\u8FC7\u540E\u8C03\u7528"),
              createVNode("code", null, "POST dealerSave"),
              createTextVNode("\u63A5\u53E3\u4FDD\u5B58\u4E3A\u8349\u7A3F\u3002")
            ])
          ]),
          createVNode("h4", null, "\u6309\u94AE5\uFF1A\u4FDD\u5B58\u5E76\u63D0\u4EA4\uFF08\u8BE6\u60C5\u9875\uFF09"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u663E\u9690\u6761\u4EF6"),
              createTextVNode("\uFF1A\u59CB\u7EC8\u663E\u793A")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u903B\u8F91"),
              createTextVNode("\uFF1A\u6821\u9A8C\u901A\u8FC7\u540E\u8C03\u7528"),
              createVNode("code", null, "POST dealerSaveAndSubmit"),
              createTextVNode("\u63A5\u53E3\u4FDD\u5B58\u5E76\u63D0\u4EA4\u5BA1\u6279\uFF0C\u89E6\u53D1designApplyApproval\u5BA1\u6279\u6D41\u3002")
            ])
          ]),
          createVNode("h4", null, "\u6309\u94AE6\uFF1A\u53D6\u6D88\u7533\u8BF7\uFF08\u5217\u8868\u884C\uFF09"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u663E\u9690\u6761\u4EF6"),
              createTextVNode("\uFF1A\u59CB\u7EC8\u663E\u793A")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u903B\u8F91"),
              createTextVNode("\uFF1A\u5F39\u7A97\u586B\u5199\u53D6\u6D88\u539F\u56E0\uFF0C\u8C03\u7528"),
              createVNode("code", null, "POST cancelApply"),
              createTextVNode("\u63A5\u53E3\u3002")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u6821\u9A8C"),
              createTextVNode("\uFF1A\u53D6\u6D88\u539F\u56E0\u5FC5\u586B\u3002")
            ])
          ]),
          createVNode("h4", null, "\u6309\u94AE7\uFF1A\u4E0B\u8F7D\u8BBE\u8BA1\u56FE\u7EB8\uFF08\u5217\u8868\u884C\uFF09"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u663E\u9690\u6761\u4EF6"),
              createTextVNode("\uFF1A\u59CB\u7EC8\u663E\u793A")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u903B\u8F91"),
              createTextVNode("\uFF1A\u5F39\u7A97\u5C55\u793A\u4E09\u7C7B\u56FE\u7EB8\uFF08\u8BBE\u8BA1\u56FE\u3001\u6548\u679C\u56FE\u3001\u65BD\u5DE5\u53CA\u8F6F\u88C5\u56FE\uFF09\uFF0C\u901A\u8FC7"),
              createVNode("code", null, "downloadDrawing"),
              createTextVNode("\u63A5\u53E3\u52A0\u8F7D\uFF0C\u6BCF\u7C7B\u56FE\u7EB8\u5C55\u793A\u6587\u4EF6\u540D\u79F0\uFF08\u53EF\u70B9\u51FB\u9884\u89C8\uFF09\u548C\u53CD\u9988\u6309\u94AE\u3002")
            ])
          ]),
          createVNode("h4", null, "\u6309\u94AE8\uFF1A\u8BBE\u8BA1\u6539\u6D3E\uFF08\u5217\u8868\u884C\uFF09"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u663E\u9690\u6761\u4EF6"),
              createTextVNode("\uFF1A\u5DF2\u751F\u6548\u72B6\u6001")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u903B\u8F91"),
              createTextVNode("\uFF1A\u8C03\u7528"),
              createVNode("code", null, "designReassignment"),
              createTextVNode("\u63A5\u53E3\uFF0C\u66F4\u6362\u8BBE\u8BA1\u5E08\u5E76\u91CD\u65B0\u8D70\u5BA1\u6279\u6D41\u7A0B\u3002")
            ])
          ]),
          createVNode("h4", null, "\u6309\u94AE9\uFF1A\u67E5\u770B\u53CD\u9988\uFF08\u5217\u8868\u884C\uFF09"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u663E\u9690\u6761\u4EF6"),
              createTextVNode("\uFF1A\u59CB\u7EC8\u663E\u793A")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u903B\u8F91"),
              createTextVNode("\uFF1A\u8C03\u7528"),
              createVNode("code", null, "queryFeedback"),
              createTextVNode("\u63A5\u53E3\u67E5\u770B\u5386\u53F2\u53CD\u9988\u8BB0\u5F55\u3002")
            ])
          ]),
          createVNode("h4", null, "\u6309\u94AE10\uFF1A\u4E0A\u4F20\u8BBE\u8BA1\u56FE\u7EB8\uFF08\u8BE6\u60C5\u9875\uFF09"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u663E\u9690\u6761\u4EF6"),
              createTextVNode("\uFF1A\u8BBE\u8BA1\u4E2D\u72B6\u6001")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u903B\u8F91"),
              createTextVNode("\uFF1A\u8C03\u7528"),
              createVNode("code", null, "upload"),
              createTextVNode("\u63A5\u53E3\u4E0A\u4F20\u8BBE\u8BA1\u56FE\u7EB8\uFF0C\u53EF\u9009\u7C7B\u578B\u4E3A\u8BBE\u8BA1\u56FE/\u6548\u679C\u56FE/\u65BD\u5DE5\u53CA\u8F6F\u88C5\u56FE\u3002")
            ])
          ]),
          createVNode("h4", null, "\u6309\u94AE11\uFF1A\u4E0B\u5355\uFF08\u8BE6\u60C5\u9875\uFF09"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u663E\u9690\u6761\u4EF6"),
              createTextVNode("\uFF1A\u56FE\u7EB8\u786E\u8BA4\u540E")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u903B\u8F91"),
              createTextVNode("\uFF1A\u8C03\u7528"),
              createVNode("code", null, "startOrder"),
              createTextVNode("\u63A5\u53E3\u4E0B\u53D1\u8BA2\u5355\u3002")
            ])
          ]),
          createVNode("h4", null, "\u6309\u94AE12\uFF1A\u533A\u57DF\u786E\u8BA4\uFF08\u8BE6\u60C5\u9875\uFF09"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u663E\u9690\u6761\u4EF6"),
              createTextVNode("\uFF1AFDD\u7B7E\u7F72\u4E2D\uFF08approvalState='fdd_in_approval'\uFF09")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u903B\u8F91"),
              createTextVNode("\uFF1A\u6821\u9A8C\u901A\u8FC7\u540E\u8C03\u7528"),
              createVNode("code", null, "areaConfirm"),
              createTextVNode("\u63A5\u53E3\uFF0CuseFDD\u7B7E\u5408\u540C\u3002")
            ])
          ]),
          createVNode("h4", null, "\u6309\u94AE13\uFF1A\u5F00\u59CB\u8BBE\u8BA1\uFF08\u8BE6\u60C5\u9875\uFF09"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u663E\u9690\u6761\u4EF6"),
              createTextVNode("\uFF1A\u5BA1\u6279\u901A\u8FC7\u540E")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u903B\u8F91"),
              createTextVNode("\uFF1A\u8C03\u7528"),
              createVNode("code", null, "startDesign"),
              createTextVNode("\u63A5\u53E3\u5F00\u59CB\u8BBE\u8BA1\u6D41\u7A0B\u3002")
            ])
          ]),
          createVNode("h4", null, "\u6309\u94AE14\uFF1A\u56FE\u7EB8\u786E\u8BA4\uFF08\u8BE6\u60C5\u9875\uFF09"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u663E\u9690\u6761\u4EF6"),
              createTextVNode("\uFF1A\u5F85\u786E\u8BA4\u72B6\u6001\uFF08settlementConfirmState='to_be_confirm'\uFF09")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u903B\u8F91"),
              createTextVNode("\uFF1A\u6821\u9A8C\u901A\u8FC7\u540E\u8C03\u7528"),
              createVNode("code", null, "startDrawingConfirm"),
              createTextVNode("\u63A5\u53E3\uFF0CuseFDD\u7B7E\u7ED3\u7B97\u5408\u540C\u3002")
            ])
          ]),
          createVNode("h4", null, "\u6309\u94AE15\uFF1A\u7EC8\u6B62\uFF08\u5217\u8868\u884C\uFF09"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u663E\u9690\u6761\u4EF6"),
              createTextVNode("\uFF1A\u8BBE\u8BA1\u6D41\u7A0B\u4E2D")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u903B\u8F91"),
              createTextVNode("\uFF1A\u8C03\u7528"),
              createVNode("code", null, "termination"),
              createTextVNode("\u63A5\u53E3\u7EC8\u6B62\u8BBE\u8BA1\u6D41\u7A0B\u3002")
            ])
          ]),
          createVNode("h4", null, "\u6309\u94AE16\uFF1A\u6548\u679C\u56FE\u8865\u7533\uFF08\u5217\u8868\u884C\uFF09"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u663E\u9690\u6761\u4EF6"),
              createTextVNode("\uFF1A\u59CB\u7EC8\u663E\u793A")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u903B\u8F91"),
              createTextVNode("\uFF1A\u8DF3\u8F6C\u8BE6\u60C5\u9875"),
              createVNode("code", null, "/detail/{applyCode}/supplement"),
              createTextVNode("\uFF0C\u4F7F\u7528dealerSaveSupplement/dealerSaveAndSubmitSupplement\u63A5\u53E3\u4FDD\u5B58\u8865\u5145\u7533\u8BF7\uFF0C\u5173\u8054\u539F\u7533\u8BF7\u3002")
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
        _push2(`<blockquote${_scopeId}>\u6570\u636E\u6765\u6E90\uFF1A<code${_scopeId}>detail.tsx</code> \u7684 <code${_scopeId}>handleSave</code> + <code${_scopeId}>stores/detailConfig.tsx</code> \u5B57\u6BB5 required \u914D\u7F6E\u3002\u4FDD\u5B58\u4E0E\u4FDD\u5B58\u5E76\u63D0\u4EA4\u5171\u7528\u540C\u4E00\u6821\u9A8C\u903B\u8F91\uFF0C\u4F9D\u6B21\u6821\u9A8C generalFormDS \u548C designInfoFormDS\u3002\u6548\u679C\u56FE\u589E\u8865\u6A21\u5F0F\u4F7F\u7528 dealerSaveSupplement/dealerSaveAndSubmitSupplement \u63A5\u53E3\u3002</blockquote><ul${_scopeId}><li${_scopeId}>\u6821\u9A8C1\uFF1A\u6548\u679C\u56FE\u6570\u91CF\u5FC5\u586B \u2014\u2014 generalFormDS.renderingNumber\uFF0Cprecision=0</li><li${_scopeId}>\u6821\u9A8C2\uFF1A\u9E1F\u77B0\u56FE\u5FC5\u586B \u2014\u2014 generalFormDS.airscapeNumber\uFF0Cprecision=0</li><li${_scopeId}>\u6821\u9A8C3\uFF1A\u5E97\u9762\u9762\u79EF\u5FC5\u586B\uFF08\u975E\u589E\u8865\u6A21\u5F0F\uFF09 \u2014\u2014 generalFormDS.storeArea\uFF0Cmin=0.0001\uFF0Cstep=0.01\uFF0Cprecision=2</li><li${_scopeId}>\u6821\u9A8C4\uFF1A\u590D\u5C3A\u9762\u79EF\u5FC5\u586B\uFF08isConfirmArea\u65F6\uFF09 \u2014\u2014 generalFormDS.scaleArea</li><li${_scopeId}>\u6821\u9A8C5\uFF1A\u7B7E\u8BA2\u4EBA\u5FC5\u586B\uFF08haveSigner\u65F6\uFF09 \u2014\u2014 generalFormDS.signer</li><li${_scopeId}>\u6821\u9A8C6\uFF1A\u6240\u5C5E\u8FD0\u8425\u4E2D\u5FC3\u5FC5\u586B \u2014\u2014 designInfoFormDS.opCenter</li><li${_scopeId}>\u6821\u9A8C7\uFF1A\u4EA4\u6613\u516C\u53F8\u5FC5\u586B \u2014\u2014 designInfoFormDS.tradingCompanyName</li><li${_scopeId}>\u6821\u9A8C8\uFF1A\u5F00\u7968\u8D26\u6237\u5FC5\u586B \u2014\u2014 designInfoFormDS.legalEntityName\uFF08\u9009\u4EA4\u6613\u516C\u53F8\u81EA\u52A8\u5E26\u51FA\uFF09</li><li${_scopeId}>\u6821\u9A8C9\uFF1A\u95E8\u5E97\u540D\u79F0\u5FC5\u586B \u2014\u2014 designInfoFormDS.storeName</li><li${_scopeId}>\u6821\u9A8C10\uFF1A\u95E8\u5E97\u5730\u5740\u5FC5\u586B \u2014\u2014 designInfoFormDS.storeArea\uFF08\u9009\u95E8\u5E97\u81EA\u52A8\u5E26\u51FA\uFF09</li><li${_scopeId}>\u6821\u9A8C11\uFF1A\u5E97\u9762\u7C7B\u578B\u5FC5\u586B \u2014\u2014 designInfoFormDS.storeType\uFF0C\u503C\u96C6MBO.ORD_LECTURER_STORE_TYPE</li><li${_scopeId}>\u6821\u9A8C12\uFF1A\u53D6\u6D88\u7533\u8BF7\u65F6\u53D6\u6D88\u539F\u56E0\u5FC5\u586B \u2014\u2014 cancelFormDS.cancelReason</li><li${_scopeId}>\u6821\u9A8C13\uFF1A\u56FE\u7EB8\u53CD\u9988\u65F6\u53CD\u9988\u610F\u89C1\u5FC5\u586B \u2014\u2014 feedbackFormDS.feedbackComments</li></ul>`);
      } else {
        return [
          createVNode("blockquote", null, [
            createTextVNode("\u6570\u636E\u6765\u6E90\uFF1A"),
            createVNode("code", null, "detail.tsx"),
            createTextVNode(" \u7684 "),
            createVNode("code", null, "handleSave"),
            createTextVNode(" + "),
            createVNode("code", null, "stores/detailConfig.tsx"),
            createTextVNode(" \u5B57\u6BB5 required \u914D\u7F6E\u3002\u4FDD\u5B58\u4E0E\u4FDD\u5B58\u5E76\u63D0\u4EA4\u5171\u7528\u540C\u4E00\u6821\u9A8C\u903B\u8F91\uFF0C\u4F9D\u6B21\u6821\u9A8C generalFormDS \u548C designInfoFormDS\u3002\u6548\u679C\u56FE\u589E\u8865\u6A21\u5F0F\u4F7F\u7528 dealerSaveSupplement/dealerSaveAndSubmitSupplement \u63A5\u53E3\u3002")
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u6821\u9A8C1\uFF1A\u6548\u679C\u56FE\u6570\u91CF\u5FC5\u586B \u2014\u2014 generalFormDS.renderingNumber\uFF0Cprecision=0"),
            createVNode("li", null, "\u6821\u9A8C2\uFF1A\u9E1F\u77B0\u56FE\u5FC5\u586B \u2014\u2014 generalFormDS.airscapeNumber\uFF0Cprecision=0"),
            createVNode("li", null, "\u6821\u9A8C3\uFF1A\u5E97\u9762\u9762\u79EF\u5FC5\u586B\uFF08\u975E\u589E\u8865\u6A21\u5F0F\uFF09 \u2014\u2014 generalFormDS.storeArea\uFF0Cmin=0.0001\uFF0Cstep=0.01\uFF0Cprecision=2"),
            createVNode("li", null, "\u6821\u9A8C4\uFF1A\u590D\u5C3A\u9762\u79EF\u5FC5\u586B\uFF08isConfirmArea\u65F6\uFF09 \u2014\u2014 generalFormDS.scaleArea"),
            createVNode("li", null, "\u6821\u9A8C5\uFF1A\u7B7E\u8BA2\u4EBA\u5FC5\u586B\uFF08haveSigner\u65F6\uFF09 \u2014\u2014 generalFormDS.signer"),
            createVNode("li", null, "\u6821\u9A8C6\uFF1A\u6240\u5C5E\u8FD0\u8425\u4E2D\u5FC3\u5FC5\u586B \u2014\u2014 designInfoFormDS.opCenter"),
            createVNode("li", null, "\u6821\u9A8C7\uFF1A\u4EA4\u6613\u516C\u53F8\u5FC5\u586B \u2014\u2014 designInfoFormDS.tradingCompanyName"),
            createVNode("li", null, "\u6821\u9A8C8\uFF1A\u5F00\u7968\u8D26\u6237\u5FC5\u586B \u2014\u2014 designInfoFormDS.legalEntityName\uFF08\u9009\u4EA4\u6613\u516C\u53F8\u81EA\u52A8\u5E26\u51FA\uFF09"),
            createVNode("li", null, "\u6821\u9A8C9\uFF1A\u95E8\u5E97\u540D\u79F0\u5FC5\u586B \u2014\u2014 designInfoFormDS.storeName"),
            createVNode("li", null, "\u6821\u9A8C10\uFF1A\u95E8\u5E97\u5730\u5740\u5FC5\u586B \u2014\u2014 designInfoFormDS.storeArea\uFF08\u9009\u95E8\u5E97\u81EA\u52A8\u5E26\u51FA\uFF09"),
            createVNode("li", null, "\u6821\u9A8C11\uFF1A\u5E97\u9762\u7C7B\u578B\u5FC5\u586B \u2014\u2014 designInfoFormDS.storeType\uFF0C\u503C\u96C6MBO.ORD_LECTURER_STORE_TYPE"),
            createVNode("li", null, "\u6821\u9A8C12\uFF1A\u53D6\u6D88\u7533\u8BF7\u65F6\u53D6\u6D88\u539F\u56E0\u5FC5\u586B \u2014\u2014 cancelFormDS.cancelReason"),
            createVNode("li", null, "\u6821\u9A8C13\uFF1A\u56FE\u7EB8\u53CD\u9988\u65F6\u53CD\u9988\u610F\u89C1\u5FC5\u586B \u2014\u2014 feedbackFormDS.feedbackComments")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, { title: "\u72B6\u6001\u673A" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p${_scopeId}>\u6D41\u8F6C\u56FE\uFF1A</p><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>draft(\u65B0\u5EFA) \u2192 submitted(\u5DF2\u63D0\u4EA4) \u2192 approved(\u5BA1\u6279\u901A\u8FC7) \u2192 valid(\u751F\u6548)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>   \u2192 designing(\u5F00\u59CB\u8BBE\u8BA1) \u2192 drawing_uploaded(\u56FE\u7EB8\u5DF2\u4E0A\u4F20) \u2192 drawing_confirmed(\u56FE\u7EB8\u786E\u8BA4)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>   \u2192 ordered(\u5DF2\u4E0B\u5355) \u2192 area_confirmed(\u533A\u57DF\u786E\u8BA4) \u2192 </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>end</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>(\u5DF2\u5B8C\u6210)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>rejected(\u5BA1\u6279\u9A73\u56DE) \u2192 \u53EF\u4FEE\u6539\u91CD\u63D0</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>valid \u2192 cancel_applied(\u53D6\u6D88\u7533\u8BF7\u4E2D) \u2192 cancel_approved(\u5DF2\u53D6\u6D88)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>\u4EFB\u4E00\u73AF\u8282 \u2192 terminated(\u5DF2\u7EC8\u6B62)</span></span>
<span class="line"${_scopeId}></span></code></pre></div><p${_scopeId}>\u72B6\u6001\u5217\u8868\uFF1A</p><table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5F53\u524D\u72B6\u6001</th><th${_scopeId}>\u89E6\u53D1\u52A8\u4F5C</th><th${_scopeId}>\u76EE\u6807\u72B6\u6001</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>draft</td><td${_scopeId}>\u4FDD\u5B58\u5E76\u63D0\u4EA4</td><td${_scopeId}>submitted</td></tr><tr${_scopeId}><td${_scopeId}>submitted</td><td${_scopeId}>\u5BA1\u6279\u901A\u8FC7</td><td${_scopeId}>approved</td></tr><tr${_scopeId}><td${_scopeId}>submitted</td><td${_scopeId}>\u5BA1\u6279\u9A73\u56DE</td><td${_scopeId}>rejected</td></tr><tr${_scopeId}><td${_scopeId}>rejected</td><td${_scopeId}>\u4FEE\u6539\u540E\u91CD\u65B0\u63D0\u4EA4</td><td${_scopeId}>submitted</td></tr><tr${_scopeId}><td${_scopeId}>approved</td><td${_scopeId}>\u751F\u6548</td><td${_scopeId}>valid</td></tr><tr${_scopeId}><td${_scopeId}>valid</td><td${_scopeId}>\u5F00\u59CB\u8BBE\u8BA1</td><td${_scopeId}>designing</td></tr><tr${_scopeId}><td${_scopeId}>designing</td><td${_scopeId}>\u4E0A\u4F20\u56FE\u7EB8</td><td${_scopeId}>drawing_uploaded</td></tr><tr${_scopeId}><td${_scopeId}>drawing_uploaded</td><td${_scopeId}>\u56FE\u7EB8\u786E\u8BA4</td><td${_scopeId}>drawing_confirmed</td></tr><tr${_scopeId}><td${_scopeId}>drawing_confirmed</td><td${_scopeId}>\u4E0B\u5355</td><td${_scopeId}>ordered</td></tr><tr${_scopeId}><td${_scopeId}>ordered</td><td${_scopeId}>\u533A\u57DF\u786E\u8BA4</td><td${_scopeId}>area_confirmed</td></tr><tr${_scopeId}><td${_scopeId}>area_confirmed</td><td${_scopeId}>\u5B8C\u6210</td><td${_scopeId}>end</td></tr><tr${_scopeId}><td${_scopeId}>valid</td><td${_scopeId}>\u53D1\u8D77\u53D6\u6D88\u7533\u8BF7</td><td${_scopeId}>cancel_applied</td></tr><tr${_scopeId}><td${_scopeId}>cancel_applied</td><td${_scopeId}>\u53D6\u6D88\u5BA1\u6279\u901A\u8FC7</td><td${_scopeId}>cancel_approved</td></tr><tr${_scopeId}><td${_scopeId}>\u4EFB\u4E00\u8BBE\u8BA1\u6D41\u7A0B\u72B6\u6001</td><td${_scopeId}>\u7EC8\u6B62</td><td${_scopeId}>terminated</td></tr></tbody></table>`);
      } else {
        return [
          createVNode("p", null, "\u6D41\u8F6C\u56FE\uFF1A"),
          createVNode("div", { class: "language-sql" }, [
            createVNode("button", {
              title: "Copy Code",
              class: "copy"
            }),
            createVNode("span", { class: "lang" }, "sql"),
            createVNode("pre", { class: "shiki" }, [
              createVNode("code", null, [
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "draft(\u65B0\u5EFA) \u2192 submitted(\u5DF2\u63D0\u4EA4) \u2192 approved(\u5BA1\u6279\u901A\u8FC7) \u2192 valid(\u751F\u6548)")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "   \u2192 designing(\u5F00\u59CB\u8BBE\u8BA1) \u2192 drawing_uploaded(\u56FE\u7EB8\u5DF2\u4E0A\u4F20) \u2192 drawing_confirmed(\u56FE\u7EB8\u786E\u8BA4)")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "   \u2192 ordered(\u5DF2\u4E0B\u5355) \u2192 area_confirmed(\u533A\u57DF\u786E\u8BA4) \u2192 "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "end"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "(\u5DF2\u5B8C\u6210)")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "rejected(\u5BA1\u6279\u9A73\u56DE) \u2192 \u53EF\u4FEE\u6539\u91CD\u63D0")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "valid \u2192 cancel_applied(\u53D6\u6D88\u7533\u8BF7\u4E2D) \u2192 cancel_approved(\u5DF2\u53D6\u6D88)")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "\u4EFB\u4E00\u73AF\u8282 \u2192 terminated(\u5DF2\u7EC8\u6B62)")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("p", null, "\u72B6\u6001\u5217\u8868\uFF1A"),
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
                createVNode("td", null, "draft"),
                createVNode("td", null, "\u4FDD\u5B58\u5E76\u63D0\u4EA4"),
                createVNode("td", null, "submitted")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "submitted"),
                createVNode("td", null, "\u5BA1\u6279\u901A\u8FC7"),
                createVNode("td", null, "approved")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "submitted"),
                createVNode("td", null, "\u5BA1\u6279\u9A73\u56DE"),
                createVNode("td", null, "rejected")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "rejected"),
                createVNode("td", null, "\u4FEE\u6539\u540E\u91CD\u65B0\u63D0\u4EA4"),
                createVNode("td", null, "submitted")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "approved"),
                createVNode("td", null, "\u751F\u6548"),
                createVNode("td", null, "valid")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "valid"),
                createVNode("td", null, "\u5F00\u59CB\u8BBE\u8BA1"),
                createVNode("td", null, "designing")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "designing"),
                createVNode("td", null, "\u4E0A\u4F20\u56FE\u7EB8"),
                createVNode("td", null, "drawing_uploaded")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "drawing_uploaded"),
                createVNode("td", null, "\u56FE\u7EB8\u786E\u8BA4"),
                createVNode("td", null, "drawing_confirmed")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "drawing_confirmed"),
                createVNode("td", null, "\u4E0B\u5355"),
                createVNode("td", null, "ordered")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "ordered"),
                createVNode("td", null, "\u533A\u57DF\u786E\u8BA4"),
                createVNode("td", null, "area_confirmed")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "area_confirmed"),
                createVNode("td", null, "\u5B8C\u6210"),
                createVNode("td", null, "end")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "valid"),
                createVNode("td", null, "\u53D1\u8D77\u53D6\u6D88\u7533\u8BF7"),
                createVNode("td", null, "cancel_applied")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "cancel_applied"),
                createVNode("td", null, "\u53D6\u6D88\u5BA1\u6279\u901A\u8FC7"),
                createVNode("td", null, "cancel_approved")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u4EFB\u4E00\u8BBE\u8BA1\u6D41\u7A0B\u72B6\u6001"),
                createVNode("td", null, "\u7EC8\u6B62"),
                createVNode("td", null, "terminated")
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
  _push(ssrRenderComponent(_component_KbCard, { title: "\u8BBE\u8BA1\u70B9\u5C06\u7533\u8BF7\u8868\uFF08DESIGN_APPLY\uFF09" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5B57\u6BB5\u540D</th><th${_scopeId}>\u7C7B\u578B</th><th${_scopeId}>\u91CA\u4E49</th><th${_scopeId}>\u5BF9\u5E94\u754C\u9762\u5B57\u6BB5</th><th${_scopeId}>\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>DESIGN_APPLY_ID</td><td${_scopeId}>NUMBER</td><td${_scopeId}>\u4E3B\u952EID</td><td${_scopeId}>-</td><td${_scopeId}>\u5E8F\u5217\u81EA\u589E</td></tr><tr${_scopeId}><td${_scopeId}>APPLY_CODE</td><td${_scopeId}>VARCHAR2(64)</td><td${_scopeId}>\u7533\u8BF7\u7F16\u7801</td><td${_scopeId}>\u7533\u8BF7\u7F16\u7801</td><td${_scopeId}>PK\uFF0C\u7CFB\u7EDF\u751F\u6210</td></tr><tr${_scopeId}><td${_scopeId}>APPLY_TYPE</td><td${_scopeId}>VARCHAR2(32)</td><td${_scopeId}>\u7533\u8BF7\u7C7B\u578B</td><td${_scopeId}>\u7533\u8BF7\u7C7B\u578B</td><td${_scopeId}>\u503C\u96C6MBO.DESIGN_APPLY_TYPE\uFF08apply/supplement\uFF09</td></tr><tr${_scopeId}><td${_scopeId}>DESIGN_NAME</td><td${_scopeId}>VARCHAR2(255)</td><td${_scopeId}>\u8BBE\u8BA1\u540D\u79F0</td><td${_scopeId}>\u8BBE\u8BA1\u540D\u79F0</td><td${_scopeId}>\u7533\u8BF7\u65F6\u586B\u5199\uFF0CNOT NULL</td></tr><tr${_scopeId}><td${_scopeId}>DESIGN_THEME</td><td${_scopeId}>VARCHAR2(500)</td><td${_scopeId}>\u8BBE\u8BA1\u4E3B\u9898</td><td${_scopeId}>\u8BBE\u8BA1\u4E3B\u9898</td><td${_scopeId}>\u7533\u8BF7\u65F6\u586B\u5199</td></tr><tr${_scopeId}><td${_scopeId}>LECTURER_CODE</td><td${_scopeId}>VARCHAR2(64)</td><td${_scopeId}>\u8BBE\u8BA1\u5E08\u7F16\u7801</td><td${_scopeId}>-</td><td${_scopeId}>\u5173\u8054\u8BBE\u8BA1\u5E08\u4E3B\u6863</td></tr><tr${_scopeId}><td${_scopeId}>LECTURER_NAME</td><td${_scopeId}>VARCHAR2(255)</td><td${_scopeId}>\u88AB\u70B9\u5C06\u4EBA</td><td${_scopeId}>\u8BBE\u8BA1\u5E08</td><td${_scopeId}>\u9009\u62E9\u8BBE\u8BA1\u5E08\u65F6\u5199\u5165</td></tr><tr${_scopeId}><td${_scopeId}>LECTURER_LEVEL</td><td${_scopeId}>VARCHAR2(32)</td><td${_scopeId}>\u8BBE\u8BA1\u5E08\u7EA7\u522B</td><td${_scopeId}>-</td><td${_scopeId}>\u5173\u8054\u8BBE\u8BA1\u5E08\u4E3B\u6863</td></tr><tr${_scopeId}><td${_scopeId}>DEALER_CODE</td><td${_scopeId}>VARCHAR2(64)</td><td${_scopeId}>\u7ECF\u9500\u5546\u7F16\u7801</td><td${_scopeId}>-</td><td${_scopeId}>\u5F53\u524D\u767B\u5F55\u7ECF\u9500\u5546</td></tr><tr${_scopeId}><td${_scopeId}>DEALER_NAME</td><td${_scopeId}>VARCHAR2(255)</td><td${_scopeId}>\u7ECF\u9500\u5546\u540D\u79F0</td><td${_scopeId}>\u7ECF\u9500\u5546</td><td${_scopeId}>\u5F53\u524D\u767B\u5F55\u7ECF\u9500\u5546</td></tr><tr${_scopeId}><td${_scopeId}>TERMINAL_CODE</td><td${_scopeId}>VARCHAR2(64)</td><td${_scopeId}>\u95E8\u5E97\u7F16\u7801</td><td${_scopeId}>-</td><td${_scopeId}>\u5173\u8054\u95E8\u5E97\u4E3B\u6863</td></tr><tr${_scopeId}><td${_scopeId}>TERMINAL_NAME</td><td${_scopeId}>VARCHAR2(255)</td><td${_scopeId}>\u95E8\u5E97\u540D\u79F0</td><td${_scopeId}>\u95E8\u5E97</td><td${_scopeId}>\u5173\u8054\u95E8\u5E97\u4E3B\u6863</td></tr><tr${_scopeId}><td${_scopeId}>DISTRIBUTOR_NAME</td><td${_scopeId}>VARCHAR2(255)</td><td${_scopeId}>\u7533\u8BF7\u4EBA</td><td${_scopeId}>-</td><td${_scopeId}>\u7ECF\u9500\u5546\u53D1\u8D77\u65F6\u5199\u5165</td></tr><tr${_scopeId}><td${_scopeId}>ORDER_LECTURE_STATE</td><td${_scopeId}>VARCHAR2(32)</td><td${_scopeId}>\u70B9\u5C06\u72B6\u6001</td><td${_scopeId}>\u70B9\u5C06\u72B6\u6001</td><td${_scopeId}>\u503C\u96C6MBO.ORDER_LECTURE_STATE</td></tr><tr${_scopeId}><td${_scopeId}>DESIGN_STATE</td><td${_scopeId}>VARCHAR2(32)</td><td${_scopeId}>\u8BBE\u8BA1\u72B6\u6001</td><td${_scopeId}>-</td><td${_scopeId}>\u503C\u96C6MBO.DESIGN_STATE</td></tr><tr${_scopeId}><td${_scopeId}>APPROVAL_STATE</td><td${_scopeId}>VARCHAR2(32)</td><td${_scopeId}>\u5BA1\u6838\u72B6\u6001</td><td${_scopeId}>\u5BA1\u6838\u72B6\u6001</td><td${_scopeId}>\u503C\u96C6MBO.APPLY_APPROVAL_STATE</td></tr><tr${_scopeId}><td${_scopeId}>APPLY_STATUS</td><td${_scopeId}>VARCHAR2(32)</td><td${_scopeId}>\u7533\u8BF7\u72B6\u6001</td><td${_scopeId}>-</td><td${_scopeId}>\u7533\u8BF7\u65F6\u8BBE\u7F6E</td></tr><tr${_scopeId}><td${_scopeId}>CANCEL_APPROVAL_STATE</td><td${_scopeId}>VARCHAR2(32)</td><td${_scopeId}>\u53D6\u6D88\u5BA1\u6838\u72B6\u6001</td><td${_scopeId}>-</td><td${_scopeId}>\u503C\u96C6MBO.CANCEL_APPROVAL_STATE</td></tr><tr${_scopeId}><td${_scopeId}>SETTLEMENT_CONFIRM_STATE</td><td${_scopeId}>VARCHAR2(32)</td><td${_scopeId}>\u7ED3\u7B97\u786E\u8BA4\u72B6\u6001</td><td${_scopeId}>-</td><td${_scopeId}>\u503C\u96C6MBO.SETTLEMENT_COMFIRM_STATE</td></tr><tr${_scopeId}><td${_scopeId}>END_CONFIRM_STATE</td><td${_scopeId}>VARCHAR2(32)</td><td${_scopeId}>\u7ED3\u675F\u786E\u8BA4\u72B6\u6001</td><td${_scopeId}>\u7ED3\u675F\u786E\u8BA4\u72B6\u6001</td><td${_scopeId}>\u503C\u96C6MBO.END_COMFIRM_STATE</td></tr><tr${_scopeId}><td${_scopeId}>FEEDBACK_NUMBER</td><td${_scopeId}>NUMBER</td><td${_scopeId}>\u7ECF\u9500\u5546\u53CD\u9988\u6B21\u6570</td><td${_scopeId}>-</td><td${_scopeId}>\u7CFB\u7EDF\u7EDF\u8BA1</td></tr><tr${_scopeId}><td${_scopeId}>RELATION_APPLY_CODE</td><td${_scopeId}>VARCHAR2(64)</td><td${_scopeId}>\u5173\u8054\u5355\u636E\u7F16\u7801</td><td${_scopeId}>-</td><td${_scopeId}>\u6548\u679C\u56FE\u8865\u7533\u65F6\u5173\u8054\u539F\u7533\u8BF7</td></tr><tr${_scopeId}><td${_scopeId}>SERVICE_START_DATE</td><td${_scopeId}>DATE</td><td${_scopeId}>\u670D\u52A1\u5F00\u59CB\u65F6\u95F4</td><td${_scopeId}>\u5F00\u59CB\u65F6\u95F4</td><td${_scopeId}>\u7533\u8BF7\u65F6\u586B\u5199</td></tr><tr${_scopeId}><td${_scopeId}>SERVICE_END_DATE</td><td${_scopeId}>DATE</td><td${_scopeId}>\u670D\u52A1\u7ED3\u675F\u65F6\u95F4</td><td${_scopeId}>\u7ED3\u675F\u65F6\u95F4</td><td${_scopeId}>\u7533\u8BF7\u65F6\u586B\u5199</td></tr><tr${_scopeId}><td${_scopeId}>PRE_ORD_LECTURER_DAYS</td><td${_scopeId}>NUMBER</td><td${_scopeId}>\u62DF\u70B9\u5C06\u5929\u6570</td><td${_scopeId}>\u62DF\u70B9\u5C06\u5929\u6570</td><td${_scopeId}>\u7533\u8BF7\u65F6\u586B\u5199</td></tr><tr${_scopeId}><td${_scopeId}>REAL_ORD_LECTURER_DAYS</td><td${_scopeId}>NUMBER</td><td${_scopeId}>\u5B9E\u9645\u70B9\u5C06\u5929\u6570</td><td${_scopeId}>\u5B9E\u9645\u70B9\u5C06\u5929\u6570</td><td${_scopeId}>\u6267\u884C\u73AF\u8282\u586B\u5199</td></tr><tr${_scopeId}><td${_scopeId}>CANCEL_REASON</td><td${_scopeId}>VARCHAR2(2000)</td><td${_scopeId}>\u53D6\u6D88\u539F\u56E0</td><td${_scopeId}>-</td><td${_scopeId}>\u53D6\u6D88\u70B9\u5C06\u65F6\u586B\u5199</td></tr><tr${_scopeId}><td${_scopeId}>CRM_ORDER_CODE</td><td${_scopeId}>VARCHAR2(64)</td><td${_scopeId}>CRM\u5355\u53F7</td><td${_scopeId}>CRM\u5355\u53F7</td><td${_scopeId}>\u63A8\u9001CRM\u540E\u56DE\u5199</td></tr><tr${_scopeId}><td${_scopeId}>REMARK</td><td${_scopeId}>VARCHAR2(2000)</td><td${_scopeId}>\u5907\u6CE8</td><td${_scopeId}>\u5907\u6CE8</td><td${_scopeId}>\u624B\u52A8\u8F93\u5165</td></tr><tr${_scopeId}><td${_scopeId}>CREATE_DATE</td><td${_scopeId}>TIMESTAMP</td><td${_scopeId}>\u7533\u8BF7\u65F6\u95F4</td><td${_scopeId}>\u7533\u8BF7\u65F6\u95F4</td><td${_scopeId}>\u7CFB\u7EDF\u81EA\u52A8</td></tr><tr${_scopeId}><td${_scopeId}>UPDATE_DATE</td><td${_scopeId}>TIMESTAMP</td><td${_scopeId}>\u66F4\u65B0\u65F6\u95F4</td><td${_scopeId}>-</td><td${_scopeId}>\u7CFB\u7EDF\u81EA\u52A8</td></tr><tr${_scopeId}><td${_scopeId}>CREATED_BY</td><td${_scopeId}>VARCHAR2(64)</td><td${_scopeId}>\u521B\u5EFA\u4EBA</td><td${_scopeId}>-</td><td${_scopeId}>\u7CFB\u7EDF\u81EA\u52A8</td></tr><tr${_scopeId}><td${_scopeId}>CREATION_DATE</td><td${_scopeId}>DATE</td><td${_scopeId}>\u521B\u5EFA\u65F6\u95F4</td><td${_scopeId}>-</td><td${_scopeId}>\u7CFB\u7EDF\u81EA\u52A8</td></tr><tr${_scopeId}><td${_scopeId}>LAST_UPDATED_BY</td><td${_scopeId}>VARCHAR2(64)</td><td${_scopeId}>\u6700\u540E\u66F4\u65B0\u4EBA</td><td${_scopeId}>-</td><td${_scopeId}>\u7CFB\u7EDF\u81EA\u52A8</td></tr><tr${_scopeId}><td${_scopeId}>LAST_UPDATE_DATE</td><td${_scopeId}>DATE</td><td${_scopeId}>\u6700\u540E\u66F4\u65B0\u65F6\u95F4</td><td${_scopeId}>-</td><td${_scopeId}>\u7CFB\u7EDF\u81EA\u52A8</td></tr></tbody></table>`);
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
                createVNode("td", null, "DESIGN_APPLY_ID"),
                createVNode("td", null, "NUMBER"),
                createVNode("td", null, "\u4E3B\u952EID"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u5E8F\u5217\u81EA\u589E")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "APPLY_CODE"),
                createVNode("td", null, "VARCHAR2(64)"),
                createVNode("td", null, "\u7533\u8BF7\u7F16\u7801"),
                createVNode("td", null, "\u7533\u8BF7\u7F16\u7801"),
                createVNode("td", null, "PK\uFF0C\u7CFB\u7EDF\u751F\u6210")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "APPLY_TYPE"),
                createVNode("td", null, "VARCHAR2(32)"),
                createVNode("td", null, "\u7533\u8BF7\u7C7B\u578B"),
                createVNode("td", null, "\u7533\u8BF7\u7C7B\u578B"),
                createVNode("td", null, "\u503C\u96C6MBO.DESIGN_APPLY_TYPE\uFF08apply/supplement\uFF09")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "DESIGN_NAME"),
                createVNode("td", null, "VARCHAR2(255)"),
                createVNode("td", null, "\u8BBE\u8BA1\u540D\u79F0"),
                createVNode("td", null, "\u8BBE\u8BA1\u540D\u79F0"),
                createVNode("td", null, "\u7533\u8BF7\u65F6\u586B\u5199\uFF0CNOT NULL")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "DESIGN_THEME"),
                createVNode("td", null, "VARCHAR2(500)"),
                createVNode("td", null, "\u8BBE\u8BA1\u4E3B\u9898"),
                createVNode("td", null, "\u8BBE\u8BA1\u4E3B\u9898"),
                createVNode("td", null, "\u7533\u8BF7\u65F6\u586B\u5199")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "LECTURER_CODE"),
                createVNode("td", null, "VARCHAR2(64)"),
                createVNode("td", null, "\u8BBE\u8BA1\u5E08\u7F16\u7801"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u5173\u8054\u8BBE\u8BA1\u5E08\u4E3B\u6863")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "LECTURER_NAME"),
                createVNode("td", null, "VARCHAR2(255)"),
                createVNode("td", null, "\u88AB\u70B9\u5C06\u4EBA"),
                createVNode("td", null, "\u8BBE\u8BA1\u5E08"),
                createVNode("td", null, "\u9009\u62E9\u8BBE\u8BA1\u5E08\u65F6\u5199\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "LECTURER_LEVEL"),
                createVNode("td", null, "VARCHAR2(32)"),
                createVNode("td", null, "\u8BBE\u8BA1\u5E08\u7EA7\u522B"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u5173\u8054\u8BBE\u8BA1\u5E08\u4E3B\u6863")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "DEALER_CODE"),
                createVNode("td", null, "VARCHAR2(64)"),
                createVNode("td", null, "\u7ECF\u9500\u5546\u7F16\u7801"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u5F53\u524D\u767B\u5F55\u7ECF\u9500\u5546")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "DEALER_NAME"),
                createVNode("td", null, "VARCHAR2(255)"),
                createVNode("td", null, "\u7ECF\u9500\u5546\u540D\u79F0"),
                createVNode("td", null, "\u7ECF\u9500\u5546"),
                createVNode("td", null, "\u5F53\u524D\u767B\u5F55\u7ECF\u9500\u5546")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "TERMINAL_CODE"),
                createVNode("td", null, "VARCHAR2(64)"),
                createVNode("td", null, "\u95E8\u5E97\u7F16\u7801"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u5173\u8054\u95E8\u5E97\u4E3B\u6863")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "TERMINAL_NAME"),
                createVNode("td", null, "VARCHAR2(255)"),
                createVNode("td", null, "\u95E8\u5E97\u540D\u79F0"),
                createVNode("td", null, "\u95E8\u5E97"),
                createVNode("td", null, "\u5173\u8054\u95E8\u5E97\u4E3B\u6863")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "DISTRIBUTOR_NAME"),
                createVNode("td", null, "VARCHAR2(255)"),
                createVNode("td", null, "\u7533\u8BF7\u4EBA"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u7ECF\u9500\u5546\u53D1\u8D77\u65F6\u5199\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "ORDER_LECTURE_STATE"),
                createVNode("td", null, "VARCHAR2(32)"),
                createVNode("td", null, "\u70B9\u5C06\u72B6\u6001"),
                createVNode("td", null, "\u70B9\u5C06\u72B6\u6001"),
                createVNode("td", null, "\u503C\u96C6MBO.ORDER_LECTURE_STATE")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "DESIGN_STATE"),
                createVNode("td", null, "VARCHAR2(32)"),
                createVNode("td", null, "\u8BBE\u8BA1\u72B6\u6001"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u503C\u96C6MBO.DESIGN_STATE")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "APPROVAL_STATE"),
                createVNode("td", null, "VARCHAR2(32)"),
                createVNode("td", null, "\u5BA1\u6838\u72B6\u6001"),
                createVNode("td", null, "\u5BA1\u6838\u72B6\u6001"),
                createVNode("td", null, "\u503C\u96C6MBO.APPLY_APPROVAL_STATE")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "APPLY_STATUS"),
                createVNode("td", null, "VARCHAR2(32)"),
                createVNode("td", null, "\u7533\u8BF7\u72B6\u6001"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u7533\u8BF7\u65F6\u8BBE\u7F6E")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "CANCEL_APPROVAL_STATE"),
                createVNode("td", null, "VARCHAR2(32)"),
                createVNode("td", null, "\u53D6\u6D88\u5BA1\u6838\u72B6\u6001"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u503C\u96C6MBO.CANCEL_APPROVAL_STATE")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "SETTLEMENT_CONFIRM_STATE"),
                createVNode("td", null, "VARCHAR2(32)"),
                createVNode("td", null, "\u7ED3\u7B97\u786E\u8BA4\u72B6\u6001"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u503C\u96C6MBO.SETTLEMENT_COMFIRM_STATE")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "END_CONFIRM_STATE"),
                createVNode("td", null, "VARCHAR2(32)"),
                createVNode("td", null, "\u7ED3\u675F\u786E\u8BA4\u72B6\u6001"),
                createVNode("td", null, "\u7ED3\u675F\u786E\u8BA4\u72B6\u6001"),
                createVNode("td", null, "\u503C\u96C6MBO.END_COMFIRM_STATE")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "FEEDBACK_NUMBER"),
                createVNode("td", null, "NUMBER"),
                createVNode("td", null, "\u7ECF\u9500\u5546\u53CD\u9988\u6B21\u6570"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u7CFB\u7EDF\u7EDF\u8BA1")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "RELATION_APPLY_CODE"),
                createVNode("td", null, "VARCHAR2(64)"),
                createVNode("td", null, "\u5173\u8054\u5355\u636E\u7F16\u7801"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u6548\u679C\u56FE\u8865\u7533\u65F6\u5173\u8054\u539F\u7533\u8BF7")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "SERVICE_START_DATE"),
                createVNode("td", null, "DATE"),
                createVNode("td", null, "\u670D\u52A1\u5F00\u59CB\u65F6\u95F4"),
                createVNode("td", null, "\u5F00\u59CB\u65F6\u95F4"),
                createVNode("td", null, "\u7533\u8BF7\u65F6\u586B\u5199")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "SERVICE_END_DATE"),
                createVNode("td", null, "DATE"),
                createVNode("td", null, "\u670D\u52A1\u7ED3\u675F\u65F6\u95F4"),
                createVNode("td", null, "\u7ED3\u675F\u65F6\u95F4"),
                createVNode("td", null, "\u7533\u8BF7\u65F6\u586B\u5199")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "PRE_ORD_LECTURER_DAYS"),
                createVNode("td", null, "NUMBER"),
                createVNode("td", null, "\u62DF\u70B9\u5C06\u5929\u6570"),
                createVNode("td", null, "\u62DF\u70B9\u5C06\u5929\u6570"),
                createVNode("td", null, "\u7533\u8BF7\u65F6\u586B\u5199")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "REAL_ORD_LECTURER_DAYS"),
                createVNode("td", null, "NUMBER"),
                createVNode("td", null, "\u5B9E\u9645\u70B9\u5C06\u5929\u6570"),
                createVNode("td", null, "\u5B9E\u9645\u70B9\u5C06\u5929\u6570"),
                createVNode("td", null, "\u6267\u884C\u73AF\u8282\u586B\u5199")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "CANCEL_REASON"),
                createVNode("td", null, "VARCHAR2(2000)"),
                createVNode("td", null, "\u53D6\u6D88\u539F\u56E0"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u53D6\u6D88\u70B9\u5C06\u65F6\u586B\u5199")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "CRM_ORDER_CODE"),
                createVNode("td", null, "VARCHAR2(64)"),
                createVNode("td", null, "CRM\u5355\u53F7"),
                createVNode("td", null, "CRM\u5355\u53F7"),
                createVNode("td", null, "\u63A8\u9001CRM\u540E\u56DE\u5199")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "REMARK"),
                createVNode("td", null, "VARCHAR2(2000)"),
                createVNode("td", null, "\u5907\u6CE8"),
                createVNode("td", null, "\u5907\u6CE8"),
                createVNode("td", null, "\u624B\u52A8\u8F93\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "CREATE_DATE"),
                createVNode("td", null, "TIMESTAMP"),
                createVNode("td", null, "\u7533\u8BF7\u65F6\u95F4"),
                createVNode("td", null, "\u7533\u8BF7\u65F6\u95F4"),
                createVNode("td", null, "\u7CFB\u7EDF\u81EA\u52A8")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "UPDATE_DATE"),
                createVNode("td", null, "TIMESTAMP"),
                createVNode("td", null, "\u66F4\u65B0\u65F6\u95F4"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u7CFB\u7EDF\u81EA\u52A8")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "CREATED_BY"),
                createVNode("td", null, "VARCHAR2(64)"),
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
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "LAST_UPDATED_BY"),
                createVNode("td", null, "VARCHAR2(64)"),
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
  _push(ssrRenderComponent(_component_KbCard, { title: "\u8BBE\u8BA1\u56FE\u7EB8\u8868\uFF08DESIGN_DRAWING\uFF09" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5B57\u6BB5\u540D</th><th${_scopeId}>\u7C7B\u578B</th><th${_scopeId}>\u91CA\u4E49</th><th${_scopeId}>\u5BF9\u5E94\u754C\u9762\u5B57\u6BB5</th><th${_scopeId}>\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>DESIGN_DRAWING_ID</td><td${_scopeId}>NUMBER</td><td${_scopeId}>\u4E3B\u952EID</td><td${_scopeId}>-</td><td${_scopeId}>\u5E8F\u5217\u81EA\u589E</td></tr><tr${_scopeId}><td${_scopeId}>APPLY_CODE</td><td${_scopeId}>VARCHAR2(64)</td><td${_scopeId}>\u7533\u8BF7\u7F16\u7801</td><td${_scopeId}>-</td><td${_scopeId}>\u5173\u8054\u8BBE\u8BA1\u7533\u8BF7</td></tr><tr${_scopeId}><td${_scopeId}>FILE_NAME</td><td${_scopeId}>VARCHAR2(255)</td><td${_scopeId}>\u6587\u4EF6\u540D\u79F0</td><td${_scopeId}>\u6587\u4EF6\u540D\u79F0</td><td${_scopeId}>\u4E0A\u4F20\u65F6\u586B\u5199</td></tr><tr${_scopeId}><td${_scopeId}>FILE_URL</td><td${_scopeId}>VARCHAR2(1000)</td><td${_scopeId}>\u6587\u4EF6URL</td><td${_scopeId}>-</td><td${_scopeId}>\u4E0A\u4F20\u540E\u751F\u6210</td></tr><tr${_scopeId}><td${_scopeId}>DRAWING_TYPE</td><td${_scopeId}>VARCHAR2(32)</td><td${_scopeId}>\u56FE\u7EB8\u7C7B\u578B</td><td${_scopeId}>-</td><td${_scopeId}>design/rendering/construction</td></tr><tr${_scopeId}><td${_scopeId}>FEEDBACK_COMMENTS</td><td${_scopeId}>VARCHAR2(2000)</td><td${_scopeId}>\u53CD\u9988\u610F\u89C1</td><td${_scopeId}>\u53CD\u9988\u610F\u89C1</td><td${_scopeId}>\u53CD\u9988\u65F6\u586B\u5199</td></tr><tr${_scopeId}><td${_scopeId}>FEEDBACK_RESULT</td><td${_scopeId}>VARCHAR2(32)</td><td${_scopeId}>\u53CD\u9988\u7ED3\u679C</td><td${_scopeId}>-</td><td${_scopeId}>approved/reject</td></tr><tr${_scopeId}><td${_scopeId}>OPERATION_TIME</td><td${_scopeId}>TIMESTAMP</td><td${_scopeId}>\u53CD\u9988\u65F6\u95F4</td><td${_scopeId}>-</td><td${_scopeId}>\u7CFB\u7EDF\u81EA\u52A8</td></tr></tbody></table>`);
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
                createVNode("td", null, "DESIGN_DRAWING_ID"),
                createVNode("td", null, "NUMBER"),
                createVNode("td", null, "\u4E3B\u952EID"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u5E8F\u5217\u81EA\u589E")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "APPLY_CODE"),
                createVNode("td", null, "VARCHAR2(64)"),
                createVNode("td", null, "\u7533\u8BF7\u7F16\u7801"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u5173\u8054\u8BBE\u8BA1\u7533\u8BF7")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "FILE_NAME"),
                createVNode("td", null, "VARCHAR2(255)"),
                createVNode("td", null, "\u6587\u4EF6\u540D\u79F0"),
                createVNode("td", null, "\u6587\u4EF6\u540D\u79F0"),
                createVNode("td", null, "\u4E0A\u4F20\u65F6\u586B\u5199")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "FILE_URL"),
                createVNode("td", null, "VARCHAR2(1000)"),
                createVNode("td", null, "\u6587\u4EF6URL"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u4E0A\u4F20\u540E\u751F\u6210")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "DRAWING_TYPE"),
                createVNode("td", null, "VARCHAR2(32)"),
                createVNode("td", null, "\u56FE\u7EB8\u7C7B\u578B"),
                createVNode("td", null, "-"),
                createVNode("td", null, "design/rendering/construction")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "FEEDBACK_COMMENTS"),
                createVNode("td", null, "VARCHAR2(2000)"),
                createVNode("td", null, "\u53CD\u9988\u610F\u89C1"),
                createVNode("td", null, "\u53CD\u9988\u610F\u89C1"),
                createVNode("td", null, "\u53CD\u9988\u65F6\u586B\u5199")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "FEEDBACK_RESULT"),
                createVNode("td", null, "VARCHAR2(32)"),
                createVNode("td", null, "\u53CD\u9988\u7ED3\u679C"),
                createVNode("td", null, "-"),
                createVNode("td", null, "approved/reject")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "OPERATION_TIME"),
                createVNode("td", null, "TIMESTAMP"),
                createVNode("td", null, "\u53CD\u9988\u65F6\u95F4"),
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
        _push2(`<div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- \u67E5\u8BE2\u7ECF\u9500\u5546\u8BBE\u8BA1\u70B9\u5C06\u7533\u8BF7</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  da.APPLY_CODE    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7533\u8BF7\u7F16\u7801,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  da.DESIGN_NAME   </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u8BBE\u8BA1\u540D\u79F0,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  da.LECTURER_NAME </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u8BBE\u8BA1\u5E08,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  da.ORDER_LECTURE_STATE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u70B9\u5C06\u72B6\u6001,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  da.DESIGN_STATE  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u8BBE\u8BA1\u72B6\u6001,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  da.APPROVAL_STATE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5BA1\u6838\u72B6\u6001,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  da.FEEDBACK_NUMBER </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u53CD\u9988\u6B21\u6570,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  da.RELATION_APPLY_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5173\u8054\u5355\u636E</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> DESIGN_APPLY da</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ORDER BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> da.CREATE_DATE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>DESC</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- \u67E5\u8BE2\u56FE\u7EB8\u53CD\u9988\u8BB0\u5F55</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  dd.APPLY_CODE    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7533\u8BF7\u7F16\u7801,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  dd.FILE_NAME     </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u6587\u4EF6\u540D\u79F0,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  dd.DRAWING_TYPE  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u56FE\u7EB8\u7C7B\u578B,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  dd.FEEDBACK_RESULT </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u53CD\u9988\u7ED3\u679C,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  dd.FEEDBACK_COMMENTS </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u53CD\u9988\u610F\u89C1,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  TO_CHAR(dd.OPERATION_TIME, </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>YYYY-MM-DD HH24:MI:SS</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u53CD\u9988\u65F6\u95F4</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> DESIGN_DRAWING dd</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> dd.FEEDBACK_RESULT </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NOT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ORDER BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> dd.OPERATION_TIME </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>DESC</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- \u67E5\u8BE2\u6548\u679C\u56FE\u8865\u7533\u7533\u8BF7</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  da.APPLY_CODE    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7533\u8BF7\u7F16\u7801,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  da.RELATION_APPLY_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5173\u8054\u539F\u7533\u8BF7,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  da.DESIGN_NAME   </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u8BBE\u8BA1\u540D\u79F0,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  da.LECTURER_NAME </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u8BBE\u8BA1\u5E08,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  da.APPROVAL_STATE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5BA1\u6838\u72B6\u6001</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> DESIGN_APPLY da</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> da.APPLY_TYPE </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>supplement</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- \u67E5\u8BE2\u5F85\u56FE\u7EB8\u786E\u8BA4\u7684\u7533\u8BF7</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  da.APPLY_CODE    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7533\u8BF7\u7F16\u7801,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  da.DESIGN_NAME   </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u8BBE\u8BA1\u540D\u79F0,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  da.SETTLEMENT_CONFIRM_STATE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7ED3\u7B97\u786E\u8BA4\u72B6\u6001</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> DESIGN_APPLY da</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> da.SETTLEMENT_CONFIRM_STATE </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>to_be_confirm</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- \u67E5\u8BE2\u8BBE\u8BA1\u5E08\u9971\u548C\u5EA6</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  da.LECTURER_NAME </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u8BBE\u8BA1\u5E08,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}>COUNT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>*</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>)         </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u670D\u52A1\u4E2D\u5355\u636E\u6570</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> DESIGN_APPLY da</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> da.ORDER_LECTURE_STATE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>valid</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>designing</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>drawing_uploaded</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>GROUP BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> da.LECTURER_NAME;</span></span>
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
                  createVNode("span", { style: { "color": "#676E95" } }, "-- \u67E5\u8BE2\u7ECF\u9500\u5546\u8BBE\u8BA1\u70B9\u5C06\u7533\u8BF7")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "SELECT")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  da.APPLY_CODE    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7533\u8BF7\u7F16\u7801,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  da.DESIGN_NAME   "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u8BBE\u8BA1\u540D\u79F0,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  da.LECTURER_NAME "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u8BBE\u8BA1\u5E08,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  da.ORDER_LECTURE_STATE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u70B9\u5C06\u72B6\u6001,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  da.DESIGN_STATE  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u8BBE\u8BA1\u72B6\u6001,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  da.APPROVAL_STATE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5BA1\u6838\u72B6\u6001,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  da.FEEDBACK_NUMBER "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u53CD\u9988\u6B21\u6570,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  da.RELATION_APPLY_CODE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5173\u8054\u5355\u636E")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " DESIGN_APPLY da")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ORDER BY"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " da.CREATE_DATE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "DESC"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#676E95" } }, "-- \u67E5\u8BE2\u56FE\u7EB8\u53CD\u9988\u8BB0\u5F55")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "SELECT")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  dd.APPLY_CODE    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7533\u8BF7\u7F16\u7801,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  dd.FILE_NAME     "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u6587\u4EF6\u540D\u79F0,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  dd.DRAWING_TYPE  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u56FE\u7EB8\u7C7B\u578B,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  dd.FEEDBACK_RESULT "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u53CD\u9988\u7ED3\u679C,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  dd.FEEDBACK_COMMENTS "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u53CD\u9988\u610F\u89C1,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  TO_CHAR(dd.OPERATION_TIME, "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "YYYY-MM-DD HH24:MI:SS"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u53CD\u9988\u65F6\u95F4")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " DESIGN_DRAWING dd")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " dd.FEEDBACK_RESULT "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NOT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NULL")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ORDER BY"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " dd.OPERATION_TIME "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "DESC"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#676E95" } }, "-- \u67E5\u8BE2\u6548\u679C\u56FE\u8865\u7533\u7533\u8BF7")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "SELECT")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  da.APPLY_CODE    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7533\u8BF7\u7F16\u7801,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  da.RELATION_APPLY_CODE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5173\u8054\u539F\u7533\u8BF7,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  da.DESIGN_NAME   "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u8BBE\u8BA1\u540D\u79F0,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  da.LECTURER_NAME "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u8BBE\u8BA1\u5E08,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  da.APPROVAL_STATE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5BA1\u6838\u72B6\u6001")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " DESIGN_APPLY da")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " da.APPLY_TYPE "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "supplement"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#676E95" } }, "-- \u67E5\u8BE2\u5F85\u56FE\u7EB8\u786E\u8BA4\u7684\u7533\u8BF7")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "SELECT")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  da.APPLY_CODE    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7533\u8BF7\u7F16\u7801,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  da.DESIGN_NAME   "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u8BBE\u8BA1\u540D\u79F0,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  da.SETTLEMENT_CONFIRM_STATE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7ED3\u7B97\u786E\u8BA4\u72B6\u6001")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " DESIGN_APPLY da")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " da.SETTLEMENT_CONFIRM_STATE "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "to_be_confirm"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#676E95" } }, "-- \u67E5\u8BE2\u8BBE\u8BA1\u5E08\u9971\u548C\u5EA6")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "SELECT")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  da.LECTURER_NAME "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u8BBE\u8BA1\u5E08,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#82AAFF" } }, "COUNT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "("),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "*"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ")         "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u670D\u52A1\u4E2D\u5355\u636E\u6570")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " DESIGN_APPLY da")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " da.ORDER_LECTURE_STATE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IN"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " ("),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "valid"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ", "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "designing"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ", "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "drawing_uploaded"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ")")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "GROUP BY"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " da.LECTURER_NAME;")
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
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u62A5\u9519\u4FE1\u606F</th><th${_scopeId}>\u63D0\u793A\u8282\u70B9</th><th${_scopeId}>\u6839\u56E0\u4E0E\u89E3\u51B3\u65B9\u6848</th><th${_scopeId}>\u7B49\u7EA7</th><th${_scopeId}>\u8BE6\u7EC6\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u8BF7\u9009\u62E9\u4E00\u6761\u6570\u636E</td><td${_scopeId}>\u64CD\u4F5C\u6309\u94AE\u524D\u7F6E\u6821\u9A8C</td><td${_scopeId}>\u672A\u9009\u62E9\u6216\u9009\u62E9\u591A\u884C\uFF1B\u9009\u62E9\u4E00\u6761\u6570\u636E\u540E\u91CD\u8BD5</td><td${_scopeId}>\u63D0\u793A</td><td${_scopeId}>\u901A\u7528\u5355\u9009\u6821\u9A8C</td></tr><tr${_scopeId}><td${_scopeId}>\u53EA\u6709FDD\u7B7E\u7F72\u4E2D\u7684\u7533\u8BF7\u5355\u624D\u53EF\u4EE5\u7B7E\u5408\u540C</td><td${_scopeId}>\u9762\u79EF\u786E\u8BA4\u6309\u94AE</td><td${_scopeId}>\u5BA1\u6279\u72B6\u6001\u975Efdd_in_approval\uFF1B\u786E\u8BA4\u5BA1\u6279\u72B6\u6001</td><td${_scopeId}>\u63D0\u793A</td><td${_scopeId}>approvalState=&#39;fdd_in_approval&#39;</td></tr><tr${_scopeId}><td${_scopeId}>\u53EA\u6709\u5F85\u786E\u8BA4\u7684\u7533\u8BF7\u5355\u624D\u53EF\u4EE5\u7B7E\u7ED3\u7B97\u5408\u540C</td><td${_scopeId}>\u56FE\u7EB8\u786E\u8BA4\u6309\u94AE</td><td${_scopeId}>\u7ED3\u7B97\u786E\u8BA4\u72B6\u6001\u975Eto_be_confirm\uFF1B\u786E\u8BA4\u7ED3\u7B97\u786E\u8BA4\u72B6\u6001</td><td${_scopeId}>\u63D0\u793A</td><td${_scopeId}>settlementConfirmState=&#39;to_be_confirm&#39;</td></tr><tr${_scopeId}><td${_scopeId}>\u6587\u4EF6url\u4E0D\u5B58\u5728\uFF01</td><td${_scopeId}>\u4E0B\u8F7D\u56FE\u7EB8\u70B9\u51FB\u6587\u4EF6</td><td${_scopeId}>\u6587\u4EF6URL\u4E3A\u7A7A\uFF1B\u68C0\u67E5\u6587\u4EF6\u4E0A\u4F20\u72B6\u6001</td><td${_scopeId}>\u63D0\u793A</td><td${_scopeId}>fileUrl\u4E3A\u7A7A</td></tr><tr${_scopeId}><td${_scopeId}>\u53CD\u9988\u610F\u89C1\u4E0D\u80FD\u4E3A\u7A7A</td><td${_scopeId}>\u56FE\u7EB8\u53CD\u9988\u63D0\u4EA4</td><td${_scopeId}>\u672A\u586B\u5199\u53CD\u9988\u610F\u89C1\uFF1B\u586B\u5199\u540E\u63D0\u4EA4</td><td${_scopeId}>\u63D0\u793A</td><td${_scopeId}>feedbackComments\u5FC5\u586B</td></tr><tr${_scopeId}><td${_scopeId}>\u7ECF\u9500\u5546\u4E0D\u80FD\u4E3A\u7A7A</td><td${_scopeId}>\u4FDD\u5B58\u63D0\u4EA4</td><td${_scopeId}>\u672A\u9009\u62E9\u7ECF\u9500\u5546\uFF1B\u9009\u62E9\u7ECF\u9500\u5546\u540E\u4FDD\u5B58</td><td${_scopeId}>\u63D0\u793A</td><td${_scopeId}>dealerName\u5FC5\u586B</td></tr><tr${_scopeId}><td${_scopeId}>\u95E8\u5E97\u4E0D\u80FD\u4E3A\u7A7A</td><td${_scopeId}>\u4FDD\u5B58\u63D0\u4EA4</td><td${_scopeId}>\u672A\u9009\u62E9\u95E8\u5E97\uFF1B\u9009\u62E9\u95E8\u5E97\u540E\u4FDD\u5B58</td><td${_scopeId}>\u63D0\u793A</td><td${_scopeId}>terminalName\u5FC5\u586B</td></tr><tr${_scopeId}><td${_scopeId}>\u8BBE\u8BA1\u5E08\u4E0D\u80FD\u4E3A\u7A7A</td><td${_scopeId}>\u4FDD\u5B58\u63D0\u4EA4</td><td${_scopeId}>\u672A\u9009\u62E9\u8BBE\u8BA1\u5E08\uFF1B\u9009\u62E9\u8BBE\u8BA1\u5E08\u540E\u4FDD\u5B58</td><td${_scopeId}>\u63D0\u793A</td><td${_scopeId}>lecturerName\u5FC5\u586B</td></tr><tr${_scopeId}><td${_scopeId}>\u8BBE\u8BA1\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A</td><td${_scopeId}>\u4FDD\u5B58\u63D0\u4EA4</td><td${_scopeId}>\u672A\u586B\u5199\u8BBE\u8BA1\u540D\u79F0\uFF1B\u586B\u5199\u540E\u4FDD\u5B58</td><td${_scopeId}>\u63D0\u793A</td><td${_scopeId}>designName\u5FC5\u586B</td></tr><tr${_scopeId}><td${_scopeId}>\u62DF\u70B9\u5C06\u5929\u6570\u4E0D\u80FD\u4E3A\u7A7A</td><td${_scopeId}>\u4FDD\u5B58\u63D0\u4EA4</td><td${_scopeId}>\u672A\u586B\u5199\u62DF\u70B9\u5C06\u5929\u6570\uFF1B\u586B\u5199\u540E\u4FDD\u5B58</td><td${_scopeId}>\u63D0\u793A</td><td${_scopeId}>preOrdLecturerDays\u5FC5\u586B</td></tr><tr${_scopeId}><td${_scopeId}>\u5F53\u524D\u72B6\u6001\u6570\u636E\u65E0\u6CD5\u7F16\u8F91\uFF01</td><td${_scopeId}>\u7F16\u8F91\u6309\u94AE</td><td${_scopeId}>\u72B6\u6001\u975E\u8349\u7A3F\u4E14\u975E\u9A73\u56DE\uFF1B\u786E\u8BA4\u7533\u8BF7\u72B6\u6001</td><td${_scopeId}>\u63D0\u793A</td><td${_scopeId}>orderLectureState\u975Edraft\u4E14approvalState\u975E\u9A73\u56DE</td></tr><tr${_scopeId}><td${_scopeId}>\u8BF7\u6C42\u5931\u8D25</td><td${_scopeId}>\u63A5\u53E3\u8C03\u7528</td><td${_scopeId}>\u540E\u7AEF\u670D\u52A1\u5F02\u5E38\uFF1B\u68C0\u67E5\u540E\u7AEF\u670D\u52A1\u72B6\u6001</td><td${_scopeId}>\u9519\u8BEF</td><td${_scopeId}>\u63A5\u53E3\u8FD4\u56DE\u975E\u6210\u529F\u72B6\u6001</td></tr><tr${_scopeId}><td${_scopeId}>\u7F51\u7EDC\u5F02\u5E38/\u63A5\u53E3\u8D85\u65F6</td><td${_scopeId}>\u4EFB\u610F\u63A5\u53E3\u8C03\u7528</td><td${_scopeId}>\u7F51\u7EDC\u4E2D\u65AD\u6216\u63A5\u53E3\u54CD\u5E94\u8D85\u65F6\uFF0C\u68C0\u67E5\u7F51\u7EDC\u53CA\u540E\u7AEF\u8D85\u65F6\u914D\u7F6E</td><td${_scopeId}>error</td><td${_scopeId}>axios catch \u6216 timeout</td></tr><tr${_scopeId}><td${_scopeId}>\u6743\u9650\u4E0D\u8DB3</td><td${_scopeId}>\u70B9\u51FB\u64CD\u4F5C\u6309\u94AE</td><td${_scopeId}>\u5F53\u524D\u7528\u6237\u65E0\u5BF9\u5E94\u6309\u94AE\u6743\u9650\u7801\uFF0C\u8054\u7CFB\u7BA1\u7406\u5458\u6388\u6743</td><td${_scopeId}>error</td><td${_scopeId}>permissionList \u6821\u9A8C\u672A\u901A\u8FC7</td></tr><tr${_scopeId}><td${_scopeId}>\u6570\u636E\u4E0D\u5B58\u5728</td><td${_scopeId}>\u67E5\u770B/\u7F16\u8F91/\u5220\u9664</td><td${_scopeId}>\u7533\u8BF7\u7F16\u7801\u4E0D\u5B58\u5728\u6216\u5DF2\u5220\u9664\uFF0C\u68C0\u67E5 APPLY_CODE \u6709\u6548\u6027</td><td${_scopeId}>error</td><td${_scopeId}>\u63A5\u53E3\u8FD4\u56DE\u6570\u636E\u4E3A\u7A7A</td></tr><tr${_scopeId}><td${_scopeId}>\u72B6\u6001\u4E0D\u5141\u8BB8\u64CD\u4F5C</td><td${_scopeId}>\u53D6\u6D88\u7533\u8BF7/\u7EC8\u6B62/\u6539\u6D3E</td><td${_scopeId}>\u7533\u8BF7\u72B6\u6001\u4E0D\u5728\u5141\u8BB8\u64CD\u4F5C\u7684\u72B6\u6001\u8303\u56F4\u5185\uFF0C\u68C0\u67E5 ORDER_LECTURE_STATE</td><td${_scopeId}>error</td><td${_scopeId}>\u540E\u7AEF\u6821\u9A8C\u72B6\u6001\u673A\u5931\u8D25</td></tr><tr${_scopeId}><td${_scopeId}>\u5355\u4E2A\u6587\u4EF6\u4E0D\u80FD\u5927\u4E8E30MB</td><td${_scopeId}>\u4E0A\u4F20\u56FE\u7EB8</td><td${_scopeId}>\u6587\u4EF6\u8D85\u8FC730MB\u9650\u5236\uFF0C\u538B\u7F29\u6216\u62C6\u5206\u540E\u91CD\u4F20</td><td${_scopeId}>error</td><td${_scopeId}>\u524D\u7AEF beforeUpload \u6821\u9A8C file.size</td></tr><tr${_scopeId}><td${_scopeId}>\u4E0A\u4F20\u5931\u8D25</td><td${_scopeId}>\u4E0A\u4F20\u56FE\u7EB8</td><td${_scopeId}>OSS \u4E0A\u4F20\u5F02\u5E38\uFF0C\u68C0\u67E5\u5B58\u50A8\u670D\u52A1\u53CA\u6587\u4EF6\u683C\u5F0F</td><td${_scopeId}>error</td><td${_scopeId}>onUploadError \u6216\u65E0 fileUrl</td></tr><tr${_scopeId}><td${_scopeId}>\u540C\u6B65\u5916\u90E8\u7CFB\u7EDF\u5931\u8D25</td><td${_scopeId}>\u540C\u6B65CRM/OA/FDD</td><td${_scopeId}>\u5916\u90E8\u7CFB\u7EDF\u5F02\u5E38\u6216\u6570\u636E\u4E0D\u7B26\u5408\u63A5\u53E3\u8981\u6C42\uFF0C\u68C0\u67E5 errorInfo \u5B57\u6BB5</td><td${_scopeId}>error</td><td${_scopeId}>pushCrm/pushOa/pushFdd \u63A5\u53E3\u8FD4\u56DE\u5931\u8D25</td></tr><tr${_scopeId}><td${_scopeId}>\u8BB2\u5E08\u6392\u671F\u51B2\u7A81</td><td${_scopeId}>\u4FDD\u5B58\u63D0\u4EA4</td><td${_scopeId}>\u8BBE\u8BA1\u5E08\u5728\u6240\u9009\u65F6\u95F4\u8303\u56F4\u5185\u5DF2\u6709\u5176\u4ED6\u6392\u671F\uFF0C\u68C0\u67E5\u8BB2\u5E08\u6863\u6848\u6392\u671F</td><td${_scopeId}>error</td><td${_scopeId}>\u540E\u7AEF\u6821\u9A8C\u6392\u671F\u51B2\u7A81</td></tr><tr${_scopeId}><td${_scopeId}>\u9762\u79EF\u5FC5\u987B\u5927\u4E8E0</td><td${_scopeId}>\u9762\u79EF\u786E\u8BA4</td><td${_scopeId}>\u786E\u8BA4\u9762\u79EF\u975E\u6B63\u6570\uFF0C\u68C0\u67E5 SCALE_AREA \u5B57\u6BB5</td><td${_scopeId}>error</td><td${_scopeId}>\u540E\u7AEF\u6821\u9A8C SCALE_AREA &gt; 0</td></tr></tbody></table><h4${_scopeId}>\u62A5\u95191\uFF1A\u8BF7\u9009\u62E9\u4E00\u6761\u6570\u636E</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u70B9\u51FB\u7F16\u8F91\u3001\u5220\u9664\u3001\u53D6\u6D88\u7533\u8BF7\u3001\u4E0B\u8F7D\u56FE\u7EB8\u3001\u8BBE\u8BA1\u6539\u6D3E\u3001\u67E5\u770B\u53CD\u9988\u3001\u7EC8\u6B62\u3001\u6548\u679C\u56FE\u8865\u7533\u7B49\u884C\u64CD\u4F5C\u6309\u94AE\u65F6\uFF0C\u672A\u9009\u62E9\u6570\u636E\u6216\u9009\u62E9\u4E86\u591A\u884C</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u524D\u7AEF\u5728\u6267\u884C\u5355\u9009\u64CD\u4F5C\u524D\u6821\u9A8C\u9009\u4E2D\u884C\u6570\u91CF\uFF0C\u82E5 selectedRows.length \u2260 1 \u5219\u963B\u6B62\u64CD\u4F5C\u5E76\u63D0\u793A&quot;\u8BF7\u9009\u62E9\u4E00\u6761\u6570\u636E&quot;\u3002\u5355\u9009\u64CD\u4F5C\u9700\u8981\u660E\u786E\u7684\u76EE\u6807\u7533\u8BF7\uFF0C\u672A\u9009\u62E9\u65F6\u65E0\u6CD5\u786E\u5B9A\u64CD\u4F5C\u5BF9\u8C61\uFF0C\u591A\u9009\u65F6\u64CD\u4F5C\u5BF9\u8C61\u4E0D\u552F\u4E00</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> APPLY_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7533\u8BF7\u7F16\u7801,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         DESIGN_NAME </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u8BBE\u8BA1\u540D\u79F0,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         LECTURER_NAME </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u8BBE\u8BA1\u5E08,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         ORDER_LECTURE_STATE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u70B9\u5C06\u72B6\u6001,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         APPROVAL_STATE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5BA1\u6838\u72B6\u6001</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> DESIGN_APPLY</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ORDER BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> CREATE_DATE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>DESC</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95192\uFF1A\u53EA\u6709FDD\u7B7E\u7F72\u4E2D\u7684\u7533\u8BF7\u5355\u624D\u53EF\u4EE5\u7B7E\u5408\u540C</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u70B9\u51FB\u9762\u79EF\u786E\u8BA4\u6309\u94AE\u65F6\uFF0C\u5BA1\u6279\u72B6\u6001\u4E0D\u4E3A fdd_in_approval</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u524D\u7AEF\u6821\u9A8C APPROVAL_STATE = &#39;fdd_in_approval&#39;\uFF08FDD\u7B7E\u7F72\u4E2D\uFF09\uFF0C\u4EC5\u5728\u6B64\u72B6\u6001\u4E0B\u624D\u5141\u8BB8\u8C03\u7528 useFDD \u7B7E\u5408\u540C\u3002\u6821\u9A8C\u4E0D\u901A\u8FC7\u63D0\u793A&quot;\u53EA\u6709FDD\u7B7E\u7F72\u4E2D\u7684\u7533\u8BF7\u5355\u624D\u53EF\u4EE5\u7B7E\u5408\u540C&quot;\u3002\u9762\u79EF\u786E\u8BA4\u6D89\u53CA\u5408\u540C\u7B7E\u8BA2\uFF0C\u9700\u5728\u6CD5\u5927\u5927\u7B7E\u7F72\u6D41\u7A0B\u4E2D\u6267\u884C</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> APPLY_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7533\u8BF7\u7F16\u7801,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         DESIGN_NAME </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u8BBE\u8BA1\u540D\u79F0,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         APPROVAL_STATE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5BA1\u6838\u72B6\u6001,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         ORDER_LECTURE_STATE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u70B9\u5C06\u72B6\u6001</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> DESIGN_APPLY</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> APPROVAL_STATE </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&lt;&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>fdd_in_approval</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> ORDER_LECTURE_STATE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>valid</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>designing</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>);</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95193\uFF1A\u53EA\u6709\u5F85\u786E\u8BA4\u7684\u7533\u8BF7\u5355\u624D\u53EF\u4EE5\u7B7E\u7ED3\u7B97\u5408\u540C</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u70B9\u51FB\u56FE\u7EB8\u786E\u8BA4\u6309\u94AE\u65F6\uFF0C\u7ED3\u7B97\u786E\u8BA4\u72B6\u6001\u4E0D\u4E3A to_be_confirm</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u524D\u7AEF\u6821\u9A8C SETTLEMENT_CONFIRM_STATE = &#39;to_be_confirm&#39;\uFF08\u5F85\u786E\u8BA4\uFF09\uFF0C\u4EC5\u5728\u6B64\u72B6\u6001\u4E0B\u624D\u5141\u8BB8\u8C03\u7528 useFDD \u7B7E\u7ED3\u7B97\u5408\u540C\u3002\u6821\u9A8C\u4E0D\u901A\u8FC7\u63D0\u793A&quot;\u53EA\u6709\u5F85\u786E\u8BA4\u7684\u7533\u8BF7\u5355\u624D\u53EF\u4EE5\u7B7E\u7ED3\u7B97\u5408\u540C&quot;\u3002\u56FE\u7EB8\u786E\u8BA4\u6D89\u53CA\u7ED3\u7B97\u5408\u540C\u7B7E\u8BA2\uFF0C\u9700\u5728\u5F85\u786E\u8BA4\u72B6\u6001\u4E0B\u6267\u884C</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> APPLY_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7533\u8BF7\u7F16\u7801,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         DESIGN_NAME </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u8BBE\u8BA1\u540D\u79F0,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         SETTLEMENT_CONFIRM_STATE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7ED3\u7B97\u786E\u8BA4\u72B6\u6001,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         ORDER_LECTURE_STATE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u70B9\u5C06\u72B6\u6001</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> DESIGN_APPLY</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> SETTLEMENT_CONFIRM_STATE </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&lt;&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>to_be_confirm</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> ORDER_LECTURE_STATE </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>drawing_uploaded</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95194\uFF1A\u6587\u4EF6url\u4E0D\u5B58\u5728\uFF01</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u4E0B\u8F7D\u56FE\u7EB8\u5F39\u7A97\u4E2D\u70B9\u51FB\u6587\u4EF6\u540D\u79F0\u9884\u89C8\u65F6\uFF0C\u6587\u4EF6URL\u4E3A\u7A7A</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u524D\u7AEF\u6821\u9A8C FILE_URL \u5B57\u6BB5\u975E\u7A7A\uFF0C\u82E5\u4E3A\u7A7A\u5219\u63D0\u793A&quot;\u6587\u4EF6url\u4E0D\u5B58\u5728\uFF01&quot;\u3002\u6587\u4EF6URL\u7531\u4E0A\u4F20\u65F6\u751F\u6210\uFF0C\u82E5\u4E3A\u7A7A\u8BF4\u660E\u6587\u4EF6\u672A\u6210\u529F\u4E0A\u4F20\u6216\u4E0A\u4F20\u540E\u672A\u56DE\u5199URL\uFF0C\u9700\u68C0\u67E5\u6587\u4EF6\u5B58\u50A8\u670D\u52A1\u72B6\u6001\u548C\u4E0A\u4F20\u63A5\u53E3\u8C03\u7528\u7ED3\u679C</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> DESIGN_DRAWING_ID </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u56FE\u7EB8ID,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         APPLY_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7533\u8BF7\u7F16\u7801,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}>FILE_NAME</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u6587\u4EF6\u540D\u79F0,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         DRAWING_TYPE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u56FE\u7EB8\u7C7B\u578B,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         FILE_URL </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u6587\u4EF6URL</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> DESIGN_DRAWING</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> FILE_URL </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>OR</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> FILE_URL </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95195\uFF1A\u53CD\u9988\u610F\u89C1\u4E0D\u80FD\u4E3A\u7A7A</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u56FE\u7EB8\u53CD\u9988\u63D0\u4EA4\u65F6\uFF0CfeedbackComments \u5B57\u6BB5\u4E3A\u7A7A</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u524D\u7AEF\u53CD\u9988\u5F39\u7A97\u5BF9 feedbackComments \u5B57\u6BB5\u914D\u7F6E required \u6821\u9A8C\uFF0C\u63D0\u4EA4\u524D\u6821\u9A8C\u53CD\u9988\u610F\u89C1\u662F\u5426\u586B\u5199\uFF0C\u4E3A\u7A7A\u5219\u963B\u6B62\u63D0\u4EA4\u5E76\u63D0\u793A&quot;\u53CD\u9988\u610F\u89C1\u4E0D\u80FD\u4E3A\u7A7A&quot;\u3002\u53CD\u9988\u610F\u89C1\u7528\u4E8E\u8BB0\u5F55\u7ECF\u9500\u5546\u5BF9\u8BBE\u8BA1\u56FE\u7EB8\u7684\u610F\u89C1\uFF0C\u662F\u8BBE\u8BA1\u6C9F\u901A\u95ED\u73AF\u7684\u6838\u5FC3\u6570\u636E</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> DESIGN_DRAWING_ID </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u56FE\u7EB8ID,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         APPLY_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7533\u8BF7\u7F16\u7801,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}>FILE_NAME</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u6587\u4EF6\u540D\u79F0,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         FEEDBACK_RESULT </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u53CD\u9988\u7ED3\u679C,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         FEEDBACK_COMMENTS </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u53CD\u9988\u610F\u89C1</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> DESIGN_DRAWING</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> FEEDBACK_RESULT </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NOT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (FEEDBACK_COMMENTS </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>OR</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> FEEDBACK_COMMENTS </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>);</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95196\uFF1A\u7ECF\u9500\u5546\u4E0D\u80FD\u4E3A\u7A7A</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u4FDD\u5B58\u6216\u4FDD\u5B58\u5E76\u63D0\u4EA4\u65F6\uFF0CdealerName \u5B57\u6BB5\u4E3A\u7A7A</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u524D\u7AEF\u8868\u5355\u5BF9 dealerName \u5B57\u6BB5\u914D\u7F6E required \u6821\u9A8C\uFF0C\u63D0\u4EA4\u524D\u6821\u9A8C\u7ECF\u9500\u5546\u662F\u5426\u9009\u62E9\uFF0C\u4E3A\u7A7A\u5219\u963B\u6B62\u63D0\u4EA4\u5E76\u63D0\u793A&quot;\u7ECF\u9500\u5546\u4E0D\u80FD\u4E3A\u7A7A&quot;\u3002\u7ECF\u9500\u5546\u662F\u70B9\u5C06\u7533\u8BF7\u7684\u53D1\u8D77\u4E3B\u4F53\uFF0C\u5FC5\u987B\u660E\u786E</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> APPLY_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7533\u8BF7\u7F16\u7801,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         DESIGN_NAME </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u8BBE\u8BA1\u540D\u79F0,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         DEALER_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7ECF\u9500\u5546\u7F16\u7801,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         DEALER_NAME </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7ECF\u9500\u5546\u540D\u79F0</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> DESIGN_APPLY</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> DEALER_NAME </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>OR</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> DEALER_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95197\uFF1A\u95E8\u5E97\u4E0D\u80FD\u4E3A\u7A7A</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u4FDD\u5B58\u6216\u4FDD\u5B58\u5E76\u63D0\u4EA4\u65F6\uFF0CterminalName \u5B57\u6BB5\u4E3A\u7A7A</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u524D\u7AEF\u8868\u5355\u5BF9 terminalName \u5B57\u6BB5\u914D\u7F6E required \u6821\u9A8C\uFF0C\u63D0\u4EA4\u524D\u6821\u9A8C\u95E8\u5E97\u662F\u5426\u9009\u62E9\uFF0C\u4E3A\u7A7A\u5219\u963B\u6B62\u63D0\u4EA4\u5E76\u63D0\u793A&quot;\u95E8\u5E97\u4E0D\u80FD\u4E3A\u7A7A&quot;\u3002\u95E8\u5E97\u662F\u8BBE\u8BA1\u670D\u52A1\u843D\u5730\u4F4D\u7F6E\uFF0C\u5FC5\u987B\u660E\u786E</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> APPLY_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7533\u8BF7\u7F16\u7801,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         DESIGN_NAME </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u8BBE\u8BA1\u540D\u79F0,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         TERMINAL_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u95E8\u5E97\u7F16\u7801,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         TERMINAL_NAME </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u95E8\u5E97\u540D\u79F0</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> DESIGN_APPLY</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> TERMINAL_NAME </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>OR</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> TERMINAL_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95198\uFF1A\u8BBE\u8BA1\u5E08\u4E0D\u80FD\u4E3A\u7A7A</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u4FDD\u5B58\u6216\u4FDD\u5B58\u5E76\u63D0\u4EA4\u65F6\uFF0ClecturerName \u5B57\u6BB5\u4E3A\u7A7A</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u524D\u7AEF\u8868\u5355\u5BF9 lecturerName \u5B57\u6BB5\u914D\u7F6E required \u6821\u9A8C\uFF0C\u63D0\u4EA4\u524D\u6821\u9A8C\u8BBE\u8BA1\u5E08\u662F\u5426\u9009\u62E9\uFF0C\u4E3A\u7A7A\u5219\u963B\u6B62\u63D0\u4EA4\u5E76\u63D0\u793A&quot;\u8BBE\u8BA1\u5E08\u4E0D\u80FD\u4E3A\u7A7A&quot;\u3002\u8BBE\u8BA1\u5E08\u662F\u70B9\u5C06\u7684\u6838\u5FC3\u5BF9\u8C61\uFF0C\u5FC5\u987B\u660E\u786E\u88AB\u70B9\u5C06\u4EBA</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> APPLY_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7533\u8BF7\u7F16\u7801,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         DESIGN_NAME </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u8BBE\u8BA1\u540D\u79F0,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         LECTURER_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u8BBE\u8BA1\u5E08\u7F16\u7801,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         LECTURER_NAME </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u8BBE\u8BA1\u5E08\u59D3\u540D</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> DESIGN_APPLY</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> LECTURER_NAME </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>OR</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> LECTURER_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95199\uFF1A\u8BBE\u8BA1\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u4FDD\u5B58\u6216\u4FDD\u5B58\u5E76\u63D0\u4EA4\u65F6\uFF0CdesignName \u5B57\u6BB5\u4E3A\u7A7A</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u524D\u7AEF\u8868\u5355\u5BF9 designName \u5B57\u6BB5\u914D\u7F6E required \u6821\u9A8C\uFF0C\u63D0\u4EA4\u524D\u6821\u9A8C\u8BBE\u8BA1\u540D\u79F0\u662F\u5426\u586B\u5199\uFF0C\u4E3A\u7A7A\u5219\u963B\u6B62\u63D0\u4EA4\u5E76\u63D0\u793A&quot;\u8BBE\u8BA1\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A&quot;\u3002\u8BBE\u8BA1\u540D\u79F0\u7528\u4E8E\u6807\u8BC6\u672C\u6B21\u8BBE\u8BA1\u670D\u52A1\uFF0C\u5FC5\u987B\u660E\u786E</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> APPLY_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7533\u8BF7\u7F16\u7801,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         DESIGN_NAME </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u8BBE\u8BA1\u540D\u79F0,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         ORDER_LECTURE_STATE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u70B9\u5C06\u72B6\u6001</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> DESIGN_APPLY</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> DESIGN_NAME </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>OR</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> DESIGN_NAME </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u951910\uFF1A\u62DF\u70B9\u5C06\u5929\u6570\u4E0D\u80FD\u4E3A\u7A7A</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u4FDD\u5B58\u6216\u4FDD\u5B58\u5E76\u63D0\u4EA4\u65F6\uFF0CpreOrdLecturerDays \u5B57\u6BB5\u4E3A\u7A7A</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u524D\u7AEF\u8868\u5355\u5BF9 preOrdLecturerDays \u5B57\u6BB5\u914D\u7F6E required \u6821\u9A8C\uFF0C\u63D0\u4EA4\u524D\u6821\u9A8C\u62DF\u70B9\u5C06\u5929\u6570\u662F\u5426\u586B\u5199\uFF0C\u4E3A\u7A7A\u5219\u963B\u6B62\u63D0\u4EA4\u5E76\u63D0\u793A&quot;\u62DF\u70B9\u5C06\u5929\u6570\u4E0D\u80FD\u4E3A\u7A7A&quot;\u3002\u62DF\u70B9\u5C06\u5929\u6570\u7528\u4E8E\u8D39\u7528\u8BA1\u7B97\u4E0E\u8BBE\u8BA1\u5E08\u6392\u671F\uFF0C\u5FC5\u987B\u660E\u786E</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> APPLY_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7533\u8BF7\u7F16\u7801,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         DESIGN_NAME </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u8BBE\u8BA1\u540D\u79F0,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         PRE_ORD_LECTURER_DAYS </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u62DF\u70B9\u5C06\u5929\u6570</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> DESIGN_APPLY</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> PRE_ORD_LECTURER_DAYS </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u951911\uFF1A\u5F53\u524D\u72B6\u6001\u6570\u636E\u65E0\u6CD5\u7F16\u8F91\uFF01</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u70B9\u51FB\u7F16\u8F91\u6309\u94AE\u65F6\uFF0C\u72B6\u6001\u975E\u8349\u7A3F\u4E14\u975E\u5404\u7C7B\u9A73\u56DE\u72B6\u6001</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u524D\u7AEF\u6821\u9A8C ORDER_LECTURE_STATE = &#39;draft&#39;\uFF08\u8349\u7A3F\uFF09\u6216 APPROVAL_STATE \u4E3A reject/oa_reject/fdd_reject\uFF08\u5404\u79CD\u9A73\u56DE\uFF09\uFF0C\u4EFB\u4E00\u6761\u4EF6\u6EE1\u8DB3\u624D\u5141\u8BB8\u7F16\u8F91\u3002\u5DF2\u751F\u6548\uFF08valid\uFF09\u3001\u5BA1\u6279\u4E2D\uFF08approving\uFF09\u7B49\u72B6\u6001\u7684\u7533\u8BF7\u5DF2\u88AB\u4E0B\u6E38\u5F15\u7528\uFF0C\u7F16\u8F91\u53EF\u80FD\u5F71\u54CD\u6570\u636E\u4E00\u81F4\u6027\uFF0C\u6545\u9650\u5236\u7F16\u8F91\u3002\u6821\u9A8C\u4E0D\u901A\u8FC7\u63D0\u793A&quot;\u5F53\u524D\u72B6\u6001\u6570\u636E\u65E0\u6CD5\u7F16\u8F91\uFF01&quot;</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> APPLY_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7533\u8BF7\u7F16\u7801,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         DESIGN_NAME </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u8BBE\u8BA1\u540D\u79F0,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         ORDER_LECTURE_STATE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u70B9\u5C06\u72B6\u6001,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         APPROVAL_STATE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5BA1\u6838\u72B6\u6001</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> DESIGN_APPLY</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> ORDER_LECTURE_STATE </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&lt;&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>draft</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> APPROVAL_STATE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NOT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>reject</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>oa_reject</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>fdd_reject</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>);</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u951912\uFF1A\u8BF7\u6C42\u5931\u8D25</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u8C03\u7528 mlt/designApply/* \u7CFB\u5217\u63A5\u53E3\u65F6\uFF0C\u540E\u7AEF\u8FD4\u56DE HTTP \u72B6\u6001\u7801\u975E 2xx</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u524D\u7AEF\u901A\u8FC7 axios \u8C03\u7528\u540E\u7AEF\u63A5\u53E3\uFF0C\u82E5\u54CD\u5E94\u72B6\u6001\u7801\u975E 2xx \u6216\u7F51\u7EDC\u5F02\u5E38\u5219\u89E6\u53D1\u9519\u8BEF\u56DE\u8C03\uFF0C\u7EDF\u4E00\u63D0\u793A&quot;\u8BF7\u6C42\u5931\u8D25&quot;\u3002\u5E38\u89C1\u6839\u56E0\u5305\u62EC\uFF1Ambo-business \u5FAE\u670D\u52A1\u672A\u542F\u52A8\u6216\u5F02\u5E38\u3001\u6570\u636E\u5E93\u8FDE\u63A5\u5931\u8D25\u3001SQL \u6267\u884C\u8D85\u65F6\u3001\u540E\u7AEF\u4E1A\u52A1\u5F02\u5E38\u672A\u6355\u83B7\u3001\u5916\u90E8\u7CFB\u7EDF\uFF08OA/FDD/CRM/\u6587\u4EF6\u5B58\u50A8\uFF09\u8C03\u7528\u5931\u8D25\u3001\u5DE5\u4F5C\u6D41\u5F15\u64CE\u5F02\u5E38\u3001\u7F51\u7EDC\u4E2D\u65AD\u7B49\u3002\u9700\u68C0\u67E5 mbo-business \u5FAE\u670D\u52A1\u8FD0\u884C\u72B6\u6001\u3001\u5916\u90E8\u7CFB\u7EDF\u8FDE\u901A\u6027\u3001\u6587\u4EF6\u5B58\u50A8\u670D\u52A1\u3001\u5DE5\u4F5C\u6D41\u914D\u7F6E\u3001\u540E\u7AEF\u65E5\u5FD7\u5B9A\u4F4D\u5177\u4F53\u5F02\u5E38\u5806\u6808</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> APPLY_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7533\u8BF7\u7F16\u7801,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         DESIGN_NAME </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u8BBE\u8BA1\u540D\u79F0,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         ORDER_LECTURE_STATE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u70B9\u5C06\u72B6\u6001,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         APPROVAL_STATE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5BA1\u6838\u72B6\u6001,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         CRM_ORDER_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> CRM\u5355\u53F7,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         TO_CHAR(LAST_UPDATE_DATE,</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>YYYY-MM-DD HH24:MI:SS</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u6700\u540E\u66F4\u65B0\u65F6\u95F4</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> DESIGN_APPLY</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> LAST_UPDATE_DATE </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>SYSDATE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>-</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>1</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ORDER BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> LAST_UPDATE_DATE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>DESC</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u951913\uFF1A\u7F51\u7EDC\u5F02\u5E38/\u63A5\u53E3\u8D85\u65F6</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u4EFB\u610F\u63A5\u53E3\u8C03\u7528\u65F6\uFF0C\u7F51\u7EDC\u4E2D\u65AD\u6216\u63A5\u53E3\u54CD\u5E94\u8D85\u8FC7 axios timeout \u914D\u7F6E</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u524D\u7AEF axios \u8BF7\u6C42\u672A\u6536\u5230\u54CD\u5E94\u6216\u54CD\u5E94\u8D85\u65F6\uFF0C\u89E6\u53D1 catch \u56DE\u8C03\u7EDF\u4E00\u63D0\u793A&quot;\u8BF7\u6C42\u5931\u8D25&quot;\u3002\u5E38\u89C1\u6839\u56E0\uFF1A\u7F51\u7EDC\u4E2D\u65AD\u3001mbo-business \u670D\u52A1\u5047\u6B7B\u3001\u6570\u636E\u5E93\u6162\u67E5\u8BE2\u3001\u5DE5\u4F5C\u6D41\u5F15\u64CE\u54CD\u5E94\u6162\u3001\u6587\u4EF6\u5B58\u50A8\u670D\u52A1\u5F02\u5E38\u7B49\u3002\u9700\u68C0\u67E5\u7F51\u7EDC\u8FDE\u901A\u6027\u3001\u540E\u7AEF\u670D\u52A1\u8D1F\u8F7D\u3001\u6570\u636E\u5E93\u6027\u80FD</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> APPLY_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7533\u8BF7\u7F16\u7801,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         ORDER_LECTURE_STATE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u70B9\u5C06\u72B6\u6001,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         TO_CHAR(LAST_UPDATE_DATE,</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>YYYY-MM-DD HH24:MI:SS</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u6700\u540E\u66F4\u65B0\u65F6\u95F4</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> DESIGN_APPLY</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> LAST_UPDATE_DATE </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>SYSDATE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>-</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>1</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ORDER BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> LAST_UPDATE_DATE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>DESC</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u951914\uFF1A\u6743\u9650\u4E0D\u8DB3</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u70B9\u51FB\u7F16\u8F91\u3001\u5220\u9664\u3001\u53D6\u6D88\u7533\u8BF7\u3001\u9762\u79EF\u786E\u8BA4\u3001\u56FE\u7EB8\u786E\u8BA4\u3001\u8BBE\u8BA1\u6539\u6D3E\u7B49\u6309\u94AE\u65F6\uFF0C\u5F53\u524D\u7528\u6237\u65E0\u5BF9\u5E94 permissionList \u6743\u9650\u7801</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u524D\u7AEF Button \u7EC4\u4EF6\u901A\u8FC7 permissionList \u914D\u7F6E\u6743\u9650\u7801\uFF0CHZERO \u6846\u67B6\u6821\u9A8C\u5F53\u524D\u7528\u6237\u89D2\u8272\u662F\u5426\u5305\u542B\u8BE5\u6743\u9650\u7801\uFF0C\u672A\u5305\u542B\u5219\u6309\u94AE\u4E0D\u53EF\u89C1\u6216\u7981\u7528\u3002\u82E5\u5F3A\u5236\u8C03\u7528\u63A5\u53E3\uFF0C\u540E\u7AEF\u4E5F\u4F1A\u6821\u9A8C\u6743\u9650\u8FD4\u56DE403\u3002\u9700\u8054\u7CFB\u7BA1\u7406\u5458\u914D\u7F6E\u5BF9\u5E94\u89D2\u8272\u6743\u9650</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> U.USER_NAME </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7528\u6237\u540D,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         R.ROLE_NAME </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u89D2\u8272\u540D,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         P.PERMISSION_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u6743\u9650\u7801</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> SYS_USER U</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>LEFT JOIN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> SYS_USER_ROLE UR </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ON</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> U.USER_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> UR.USER_ID</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>LEFT JOIN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> SYS_ROLE R </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ON</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> UR.ROLE_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> R.ROLE_ID</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>LEFT JOIN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> SYS_ROLE_PERMISSION RP </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ON</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> R.ROLE_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> RP.ROLE_ID</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>LEFT JOIN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> SYS_PERMISSION P </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ON</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> RP.PERMISSION_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> P.PERMISSION_ID</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> P.PERMISSION_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>LIKE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>%design_general%</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ORDER BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> U.USER_NAME;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u951915\uFF1A\u6570\u636E\u4E0D\u5B58\u5728</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u67E5\u770B\u3001\u7F16\u8F91\u3001\u5220\u9664\u7B49\u64CD\u4F5C\u65F6\uFF0C\u63A5\u53E3\u8FD4\u56DE\u6570\u636E\u4E3A\u7A7A\u6216\u7533\u8BF7\u7F16\u7801\u4E0D\u5B58\u5728</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u524D\u7AEF\u901A\u8FC7 applyCode \u8C03\u7528\u8BE6\u60C5\u63A5\u53E3\uFF0C\u540E\u7AEF\u67E5\u8BE2 DESIGN_APPLY \u8868\u65E0\u5BF9\u5E94\u8BB0\u5F55\u6216\u8BB0\u5F55\u5DF2\u903B\u8F91\u5220\u9664\uFF0C\u8FD4\u56DE\u7A7A\u6570\u636E\u3002\u5E38\u89C1\u6839\u56E0\uFF1A\u7533\u8BF7\u7F16\u7801\u9519\u8BEF\u3001\u7533\u8BF7\u5DF2\u88AB\u5220\u9664\u3001\u8DE8\u79DF\u6237\u67E5\u8BE2\u3001\u6570\u636E\u6743\u9650\u9694\u79BB\u7B49\u3002\u9700\u68C0\u67E5 APPLY_CODE \u6709\u6548\u6027\u53CA\u6570\u636E\u6743\u9650</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> APPLY_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7533\u8BF7\u7F16\u7801,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         APPLY_USER_NAME </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7533\u8BF7\u4EBA,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         ORDER_LECTURE_STATE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u70B9\u5C06\u72B6\u6001,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         DELETE_FLAG </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5220\u9664\u6807\u8BB0</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> DESIGN_APPLY</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> DELETE_FLAG </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>Y</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>OR</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> APPLY_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u951916\uFF1A\u72B6\u6001\u4E0D\u5141\u8BB8\u64CD\u4F5C</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u70B9\u51FB\u53D6\u6D88\u7533\u8BF7\u3001\u7EC8\u6B62\u3001\u8BBE\u8BA1\u6539\u6D3E\u7B49\u6309\u94AE\u65F6\uFF0C\u7533\u8BF7\u72B6\u6001\u4E0D\u5728\u5141\u8BB8\u64CD\u4F5C\u7684\u72B6\u6001\u8303\u56F4\u5185</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u540E\u7AEF\u6821\u9A8C\u7533\u8BF7\u72B6\u6001\u673A\uFF0C\u5982\u53D6\u6D88\u7533\u8BF7\u8981\u6C42\u5DF2\u751F\u6548\u4E14\u63D0\u524D7\u5929\u3001\u7EC8\u6B62\u8981\u6C42\u975E\u5DF2\u5B8C\u6210\u3001\u8BBE\u8BA1\u6539\u6D3E\u8981\u6C42\u5BA1\u6279\u901A\u8FC7\u7B49\u3002\u72B6\u6001\u4E0D\u5339\u914D\u65F6\u540E\u7AEF\u8FD4\u56DE\u4E1A\u52A1\u5F02\u5E38\uFF0C\u524D\u7AEF\u63D0\u793A\u540E\u7AEF\u8FD4\u56DE\u7684 message\u3002\u9700\u68C0\u67E5\u7533\u8BF7\u5F53\u524D\u72B6\u6001\u53CA\u64CD\u4F5C\u6D41\u7A0B</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> APPLY_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7533\u8BF7\u7F16\u7801,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         DESIGN_NAME </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u8BBE\u8BA1\u540D\u79F0,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         ORDER_LECTURE_STATE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u70B9\u5C06\u72B6\u6001,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         APPROVAL_STATE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5BA1\u6838\u72B6\u6001,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         ERROR_INFO </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5F02\u5E38\u95EE\u9898</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> DESIGN_APPLY</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> ORDER_LECTURE_STATE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NOT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>draft</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>,</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>valid</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>,</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>designing</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>,</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>drawing_uploaded</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>,</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>finished</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ORDER BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> CREATE_DATE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>DESC</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u951917\uFF1A\u5355\u4E2A\u6587\u4EF6\u4E0D\u80FD\u5927\u4E8E30MB</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u4E0A\u4F20\u56FE\u7EB8\u65F6\uFF0C\u6240\u9009\u6587\u4EF6 file.size &gt; 30 * 1024 * 1024\uFF0830MB\uFF09</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u524D\u7AEF UploadDrawing \u7EC4\u4EF6 beforeUpload \u94A9\u5B50\u6821\u9A8C\u6587\u4EF6\u5927\u5C0F\uFF0C\u8D85\u8FC730MB\u5219\u963B\u6B62\u4E0A\u4F20\u5E76\u63D0\u793A&quot;\u5355\u4E2A\u6587\u4EF6\u4E0D\u80FD\u5927\u4E8E30MB&quot;\u3002\u9650\u5236\u6E90\u4E8EOSS\u5B58\u50A8\u548C\u540E\u7AEF\u89E3\u6790\u6027\u80FD\u8003\u8651\uFF0C\u5927\u6587\u4EF6\u9700\u538B\u7F29\u6216\u62C6\u5206\u540E\u4E0A\u4F20</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> APPLY_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7533\u8BF7\u7F16\u7801,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}>FILE_NAME</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u6587\u4EF6\u540D,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         FILE_SIZE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u6587\u4EF6\u5927\u5C0F</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> DESIGN_DRAWING</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> FILE_SIZE </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>30</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>*</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>1024</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>*</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>1024</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ORDER BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> CREATION_DATE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>DESC</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u951918\uFF1A\u4E0A\u4F20\u5931\u8D25</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u4E0A\u4F20\u56FE\u7EB8\u65F6\uFF0COSS \u4E0A\u4F20\u629B\u9519\u6216\u4E0A\u4F20\u6210\u529F\u4F46\u54CD\u5E94\u65E0 fileUrl</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u524D\u7AEF UploadDrawing \u7EC4\u4EF6 onUploadError \u94A9\u5B50\u6355\u83B7\u4E0A\u4F20\u5F02\u5E38\u63D0\u793A&quot;\u4E0A\u4F20\u5931\u8D25\uFF1A{err.message}&quot;\uFF0ConUploadSuccess \u94A9\u5B50\u6821\u9A8C\u54CD\u5E94 fileUrl \u5B57\u6BB5\uFF0C\u4E3A\u7A7A\u5219\u63D0\u793A&quot;\u4E0A\u4F20\u5931\u8D25\uFF1A{res.message}&quot;\u3002\u5E38\u89C1\u6839\u56E0\uFF1AOSS \u5B58\u50A8\u670D\u52A1\u4E0D\u53EF\u7528\u3001bucketName \u914D\u7F6E\u9519\u8BEF\u3001\u6587\u4EF6\u683C\u5F0F\u4E0D\u88AB\u63A5\u53D7\u3001\u7F51\u7EDC\u4E2D\u65AD\u7B49</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> APPLY_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7533\u8BF7\u7F16\u7801,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}>FILE_NAME</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u6587\u4EF6\u540D,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         FILE_URL </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u6587\u4EF6\u5730\u5740,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         ERROR_INFO </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5F02\u5E38\u4FE1\u606F</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> DESIGN_DRAWING</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> FILE_URL </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>OR</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> ERROR_INFO </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NOT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ORDER BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> CREATION_DATE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>DESC</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u951919\uFF1A\u540C\u6B65\u5916\u90E8\u7CFB\u7EDF\u5931\u8D25</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u70B9\u51FB\u540C\u6B65CRM/\u540C\u6B65OA/\u540C\u6B65FDD\u6309\u94AE\uFF0C\u5BF9\u5E94\u63A8\u9001\u63A5\u53E3\u8FD4\u56DE\u5931\u8D25</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u524D\u7AEF\u901A\u8FC7 PRequest \u8C03\u7528 pushCrm/pushOa/pushFdd \u63A5\u53E3\uFF0C\u63A5\u53E3\u8FD4\u56DE success=false \u6216\u975E2xx\u72B6\u6001\u7801\u65F6\u89E6\u53D1\u9519\u8BEF\u56DE\u8C03\u3002\u5E38\u89C1\u6839\u56E0\uFF1ACRM/OA/FDD \u5916\u90E8\u7CFB\u7EDF\u4E0D\u53EF\u7528\u3001\u6570\u636E\u4E0D\u7B26\u5408\u5916\u90E8\u63A5\u53E3\u8981\u6C42\u3001\u7533\u8BF7\u72B6\u6001\u4E0D\u5141\u8BB8\u540C\u6B65\u3001\u7F51\u7EDC\u4E2D\u65AD\u7B49\u3002\u540E\u7AEF\u4F1A\u5C06\u5F02\u5E38\u5199\u5165 ERROR_INFO \u5B57\u6BB5</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> APPLY_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7533\u8BF7\u7F16\u7801,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         DESIGN_NAME </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u8BBE\u8BA1\u540D\u79F0,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         CRM_ORDER_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> CRM\u5355\u53F7,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         CRM_ORDER_STATUS </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> CRM\u8BA2\u5355\u72B6\u6001,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         ERROR_INFO </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5F02\u5E38\u95EE\u9898,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         TO_CHAR(LAST_UPDATE_DATE,</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>YYYY-MM-DD HH24:MI:SS</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u6700\u540E\u66F4\u65B0\u65F6\u95F4</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> DESIGN_APPLY</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (ERROR_INFO </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NOT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>OR</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> CRM_ORDER_STATUS </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>FAIL</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> LAST_UPDATE_DATE </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>SYSDATE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>-</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>7</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ORDER BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> LAST_UPDATE_DATE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>DESC</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u951920\uFF1A\u8BB2\u5E08\u6392\u671F\u51B2\u7A81</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u4FDD\u5B58\u6216\u4FDD\u5B58\u5E76\u63D0\u4EA4\u65F6\uFF0C\u540E\u7AEF\u6821\u9A8C\u8BBE\u8BA1\u5E08\u5728\u6240\u9009\u670D\u52A1\u65F6\u95F4\u8303\u56F4\u5185\u5DF2\u6709\u5176\u4ED6\u6392\u671F</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u540E\u7AEF\u6821\u9A8C\u8BBE\u8BA1\u5E08 SERVICE_START_DATE \u81F3 SERVICE_END_DATE \u8303\u56F4\u5185\u662F\u5426\u4E0E\u5176\u4ED6\u8BBE\u8BA1\u70B9\u5C06\u6392\u671F\u91CD\u53E0\uFF0C\u91CD\u53E0\u5219\u8FD4\u56DE\u4E1A\u52A1\u5F02\u5E38\u3002\u9700\u8C03\u6574\u670D\u52A1\u65F6\u95F4\u6216\u66F4\u6362\u8BBE\u8BA1\u5E08</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> A.APPLY_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7533\u8BF7\u7F16\u7801,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         A.LECTURER_NAME </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u8BBE\u8BA1\u5E08,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         A.SERVICE_START_DATE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u670D\u52A1\u5F00\u59CB,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         A.SERVICE_END_DATE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u670D\u52A1\u7ED3\u675F,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         B.APPLY_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u51B2\u7A81\u7533\u8BF7\u7F16\u7801,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         B.SERVICE_START_DATE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u51B2\u7A81\u5F00\u59CB,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         B.SERVICE_END_DATE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u51B2\u7A81\u7ED3\u675F</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> DESIGN_APPLY A</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>JOIN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> DESIGN_APPLY B </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ON</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> A.LECTURER_CODE </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> B.LECTURER_CODE</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> A.APPLY_CODE </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&lt;&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> B.APPLY_CODE</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> A.SERVICE_START_DATE </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&lt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> B.SERVICE_END_DATE</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> A.SERVICE_END_DATE </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> B.SERVICE_START_DATE</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> A.ORDER_LECTURE_STATE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>valid</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>,</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>designing</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> B.ORDER_LECTURE_STATE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>valid</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>,</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>designing</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>);</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u951921\uFF1A\u9762\u79EF\u5FC5\u987B\u5927\u4E8E0</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u63D0\u4EA4\u9762\u79EF\u786E\u8BA4\u65F6\uFF0CSCALE_AREA \u5B57\u6BB5\u975E\u6B63\u6570</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u540E\u7AEF\u6821\u9A8C SCALE_AREA &gt; 0\uFF0C\u9762\u79EF\u7528\u4E8E\u8BA1\u7B97\u8BBE\u8BA1\u8D39\u7528\uFF0C\u5FC5\u987B\u4E3A\u6B63\u6570\u3002\u82E5\u4E3A0\u6216\u8D1F\u6570\u5219\u8FD4\u56DE\u4E1A\u52A1\u5F02\u5E38\u3002\u9700\u68C0\u67E5\u9762\u79EF\u8F93\u5165\u662F\u5426\u6B63\u786E</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> APPLY_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7533\u8BF7\u7F16\u7801,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         DESIGN_NAME </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u8BBE\u8BA1\u540D\u79F0,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         SCALE_AREA </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u786E\u8BA4\u9762\u79EF,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         ORDER_LECTURE_STATE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u70B9\u5C06\u72B6\u6001</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> DESIGN_APPLY</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> APPLY_TYPE_ONE </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>design</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> SCALE_AREA </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NOT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> SCALE_AREA </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&lt;=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>0</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
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
                createVNode("td", null, "\u64CD\u4F5C\u6309\u94AE\u524D\u7F6E\u6821\u9A8C"),
                createVNode("td", null, "\u672A\u9009\u62E9\u6216\u9009\u62E9\u591A\u884C\uFF1B\u9009\u62E9\u4E00\u6761\u6570\u636E\u540E\u91CD\u8BD5"),
                createVNode("td", null, "\u63D0\u793A"),
                createVNode("td", null, "\u901A\u7528\u5355\u9009\u6821\u9A8C")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u53EA\u6709FDD\u7B7E\u7F72\u4E2D\u7684\u7533\u8BF7\u5355\u624D\u53EF\u4EE5\u7B7E\u5408\u540C"),
                createVNode("td", null, "\u9762\u79EF\u786E\u8BA4\u6309\u94AE"),
                createVNode("td", null, "\u5BA1\u6279\u72B6\u6001\u975Efdd_in_approval\uFF1B\u786E\u8BA4\u5BA1\u6279\u72B6\u6001"),
                createVNode("td", null, "\u63D0\u793A"),
                createVNode("td", null, "approvalState='fdd_in_approval'")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u53EA\u6709\u5F85\u786E\u8BA4\u7684\u7533\u8BF7\u5355\u624D\u53EF\u4EE5\u7B7E\u7ED3\u7B97\u5408\u540C"),
                createVNode("td", null, "\u56FE\u7EB8\u786E\u8BA4\u6309\u94AE"),
                createVNode("td", null, "\u7ED3\u7B97\u786E\u8BA4\u72B6\u6001\u975Eto_be_confirm\uFF1B\u786E\u8BA4\u7ED3\u7B97\u786E\u8BA4\u72B6\u6001"),
                createVNode("td", null, "\u63D0\u793A"),
                createVNode("td", null, "settlementConfirmState='to_be_confirm'")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6587\u4EF6url\u4E0D\u5B58\u5728\uFF01"),
                createVNode("td", null, "\u4E0B\u8F7D\u56FE\u7EB8\u70B9\u51FB\u6587\u4EF6"),
                createVNode("td", null, "\u6587\u4EF6URL\u4E3A\u7A7A\uFF1B\u68C0\u67E5\u6587\u4EF6\u4E0A\u4F20\u72B6\u6001"),
                createVNode("td", null, "\u63D0\u793A"),
                createVNode("td", null, "fileUrl\u4E3A\u7A7A")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u53CD\u9988\u610F\u89C1\u4E0D\u80FD\u4E3A\u7A7A"),
                createVNode("td", null, "\u56FE\u7EB8\u53CD\u9988\u63D0\u4EA4"),
                createVNode("td", null, "\u672A\u586B\u5199\u53CD\u9988\u610F\u89C1\uFF1B\u586B\u5199\u540E\u63D0\u4EA4"),
                createVNode("td", null, "\u63D0\u793A"),
                createVNode("td", null, "feedbackComments\u5FC5\u586B")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7ECF\u9500\u5546\u4E0D\u80FD\u4E3A\u7A7A"),
                createVNode("td", null, "\u4FDD\u5B58\u63D0\u4EA4"),
                createVNode("td", null, "\u672A\u9009\u62E9\u7ECF\u9500\u5546\uFF1B\u9009\u62E9\u7ECF\u9500\u5546\u540E\u4FDD\u5B58"),
                createVNode("td", null, "\u63D0\u793A"),
                createVNode("td", null, "dealerName\u5FC5\u586B")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u95E8\u5E97\u4E0D\u80FD\u4E3A\u7A7A"),
                createVNode("td", null, "\u4FDD\u5B58\u63D0\u4EA4"),
                createVNode("td", null, "\u672A\u9009\u62E9\u95E8\u5E97\uFF1B\u9009\u62E9\u95E8\u5E97\u540E\u4FDD\u5B58"),
                createVNode("td", null, "\u63D0\u793A"),
                createVNode("td", null, "terminalName\u5FC5\u586B")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u8BBE\u8BA1\u5E08\u4E0D\u80FD\u4E3A\u7A7A"),
                createVNode("td", null, "\u4FDD\u5B58\u63D0\u4EA4"),
                createVNode("td", null, "\u672A\u9009\u62E9\u8BBE\u8BA1\u5E08\uFF1B\u9009\u62E9\u8BBE\u8BA1\u5E08\u540E\u4FDD\u5B58"),
                createVNode("td", null, "\u63D0\u793A"),
                createVNode("td", null, "lecturerName\u5FC5\u586B")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u8BBE\u8BA1\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A"),
                createVNode("td", null, "\u4FDD\u5B58\u63D0\u4EA4"),
                createVNode("td", null, "\u672A\u586B\u5199\u8BBE\u8BA1\u540D\u79F0\uFF1B\u586B\u5199\u540E\u4FDD\u5B58"),
                createVNode("td", null, "\u63D0\u793A"),
                createVNode("td", null, "designName\u5FC5\u586B")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u62DF\u70B9\u5C06\u5929\u6570\u4E0D\u80FD\u4E3A\u7A7A"),
                createVNode("td", null, "\u4FDD\u5B58\u63D0\u4EA4"),
                createVNode("td", null, "\u672A\u586B\u5199\u62DF\u70B9\u5C06\u5929\u6570\uFF1B\u586B\u5199\u540E\u4FDD\u5B58"),
                createVNode("td", null, "\u63D0\u793A"),
                createVNode("td", null, "preOrdLecturerDays\u5FC5\u586B")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5F53\u524D\u72B6\u6001\u6570\u636E\u65E0\u6CD5\u7F16\u8F91\uFF01"),
                createVNode("td", null, "\u7F16\u8F91\u6309\u94AE"),
                createVNode("td", null, "\u72B6\u6001\u975E\u8349\u7A3F\u4E14\u975E\u9A73\u56DE\uFF1B\u786E\u8BA4\u7533\u8BF7\u72B6\u6001"),
                createVNode("td", null, "\u63D0\u793A"),
                createVNode("td", null, "orderLectureState\u975Edraft\u4E14approvalState\u975E\u9A73\u56DE")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u8BF7\u6C42\u5931\u8D25"),
                createVNode("td", null, "\u63A5\u53E3\u8C03\u7528"),
                createVNode("td", null, "\u540E\u7AEF\u670D\u52A1\u5F02\u5E38\uFF1B\u68C0\u67E5\u540E\u7AEF\u670D\u52A1\u72B6\u6001"),
                createVNode("td", null, "\u9519\u8BEF"),
                createVNode("td", null, "\u63A5\u53E3\u8FD4\u56DE\u975E\u6210\u529F\u72B6\u6001")
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
                createVNode("td", null, "\u67E5\u770B/\u7F16\u8F91/\u5220\u9664"),
                createVNode("td", null, "\u7533\u8BF7\u7F16\u7801\u4E0D\u5B58\u5728\u6216\u5DF2\u5220\u9664\uFF0C\u68C0\u67E5 APPLY_CODE \u6709\u6548\u6027"),
                createVNode("td", null, "error"),
                createVNode("td", null, "\u63A5\u53E3\u8FD4\u56DE\u6570\u636E\u4E3A\u7A7A")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u72B6\u6001\u4E0D\u5141\u8BB8\u64CD\u4F5C"),
                createVNode("td", null, "\u53D6\u6D88\u7533\u8BF7/\u7EC8\u6B62/\u6539\u6D3E"),
                createVNode("td", null, "\u7533\u8BF7\u72B6\u6001\u4E0D\u5728\u5141\u8BB8\u64CD\u4F5C\u7684\u72B6\u6001\u8303\u56F4\u5185\uFF0C\u68C0\u67E5 ORDER_LECTURE_STATE"),
                createVNode("td", null, "error"),
                createVNode("td", null, "\u540E\u7AEF\u6821\u9A8C\u72B6\u6001\u673A\u5931\u8D25")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5355\u4E2A\u6587\u4EF6\u4E0D\u80FD\u5927\u4E8E30MB"),
                createVNode("td", null, "\u4E0A\u4F20\u56FE\u7EB8"),
                createVNode("td", null, "\u6587\u4EF6\u8D85\u8FC730MB\u9650\u5236\uFF0C\u538B\u7F29\u6216\u62C6\u5206\u540E\u91CD\u4F20"),
                createVNode("td", null, "error"),
                createVNode("td", null, "\u524D\u7AEF beforeUpload \u6821\u9A8C file.size")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u4E0A\u4F20\u5931\u8D25"),
                createVNode("td", null, "\u4E0A\u4F20\u56FE\u7EB8"),
                createVNode("td", null, "OSS \u4E0A\u4F20\u5F02\u5E38\uFF0C\u68C0\u67E5\u5B58\u50A8\u670D\u52A1\u53CA\u6587\u4EF6\u683C\u5F0F"),
                createVNode("td", null, "error"),
                createVNode("td", null, "onUploadError \u6216\u65E0 fileUrl")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u540C\u6B65\u5916\u90E8\u7CFB\u7EDF\u5931\u8D25"),
                createVNode("td", null, "\u540C\u6B65CRM/OA/FDD"),
                createVNode("td", null, "\u5916\u90E8\u7CFB\u7EDF\u5F02\u5E38\u6216\u6570\u636E\u4E0D\u7B26\u5408\u63A5\u53E3\u8981\u6C42\uFF0C\u68C0\u67E5 errorInfo \u5B57\u6BB5"),
                createVNode("td", null, "error"),
                createVNode("td", null, "pushCrm/pushOa/pushFdd \u63A5\u53E3\u8FD4\u56DE\u5931\u8D25")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u8BB2\u5E08\u6392\u671F\u51B2\u7A81"),
                createVNode("td", null, "\u4FDD\u5B58\u63D0\u4EA4"),
                createVNode("td", null, "\u8BBE\u8BA1\u5E08\u5728\u6240\u9009\u65F6\u95F4\u8303\u56F4\u5185\u5DF2\u6709\u5176\u4ED6\u6392\u671F\uFF0C\u68C0\u67E5\u8BB2\u5E08\u6863\u6848\u6392\u671F"),
                createVNode("td", null, "error"),
                createVNode("td", null, "\u540E\u7AEF\u6821\u9A8C\u6392\u671F\u51B2\u7A81")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u9762\u79EF\u5FC5\u987B\u5927\u4E8E0"),
                createVNode("td", null, "\u9762\u79EF\u786E\u8BA4"),
                createVNode("td", null, "\u786E\u8BA4\u9762\u79EF\u975E\u6B63\u6570\uFF0C\u68C0\u67E5 SCALE_AREA \u5B57\u6BB5"),
                createVNode("td", null, "error"),
                createVNode("td", null, "\u540E\u7AEF\u6821\u9A8C SCALE_AREA > 0")
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95191\uFF1A\u8BF7\u9009\u62E9\u4E00\u6761\u6570\u636E"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u70B9\u51FB\u7F16\u8F91\u3001\u5220\u9664\u3001\u53D6\u6D88\u7533\u8BF7\u3001\u4E0B\u8F7D\u56FE\u7EB8\u3001\u8BBE\u8BA1\u6539\u6D3E\u3001\u67E5\u770B\u53CD\u9988\u3001\u7EC8\u6B62\u3001\u6548\u679C\u56FE\u8865\u7533\u7B49\u884C\u64CD\u4F5C\u6309\u94AE\u65F6\uFF0C\u672A\u9009\u62E9\u6570\u636E\u6216\u9009\u62E9\u4E86\u591A\u884C")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode('\uFF1A\u524D\u7AEF\u5728\u6267\u884C\u5355\u9009\u64CD\u4F5C\u524D\u6821\u9A8C\u9009\u4E2D\u884C\u6570\u91CF\uFF0C\u82E5 selectedRows.length \u2260 1 \u5219\u963B\u6B62\u64CD\u4F5C\u5E76\u63D0\u793A"\u8BF7\u9009\u62E9\u4E00\u6761\u6570\u636E"\u3002\u5355\u9009\u64CD\u4F5C\u9700\u8981\u660E\u786E\u7684\u76EE\u6807\u7533\u8BF7\uFF0C\u672A\u9009\u62E9\u65F6\u65E0\u6CD5\u786E\u5B9A\u64CD\u4F5C\u5BF9\u8C61\uFF0C\u591A\u9009\u65F6\u64CD\u4F5C\u5BF9\u8C61\u4E0D\u552F\u4E00')
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " APPLY_CODE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7533\u8BF7\u7F16\u7801,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         DESIGN_NAME "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u8BBE\u8BA1\u540D\u79F0,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         LECTURER_NAME "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u8BBE\u8BA1\u5E08,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         ORDER_LECTURE_STATE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u70B9\u5C06\u72B6\u6001,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         APPROVAL_STATE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5BA1\u6838\u72B6\u6001")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " DESIGN_APPLY")
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
          createVNode("h4", null, "\u62A5\u95192\uFF1A\u53EA\u6709FDD\u7B7E\u7F72\u4E2D\u7684\u7533\u8BF7\u5355\u624D\u53EF\u4EE5\u7B7E\u5408\u540C"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u70B9\u51FB\u9762\u79EF\u786E\u8BA4\u6309\u94AE\u65F6\uFF0C\u5BA1\u6279\u72B6\u6001\u4E0D\u4E3A fdd_in_approval")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode(`\uFF1A\u524D\u7AEF\u6821\u9A8C APPROVAL_STATE = 'fdd_in_approval'\uFF08FDD\u7B7E\u7F72\u4E2D\uFF09\uFF0C\u4EC5\u5728\u6B64\u72B6\u6001\u4E0B\u624D\u5141\u8BB8\u8C03\u7528 useFDD \u7B7E\u5408\u540C\u3002\u6821\u9A8C\u4E0D\u901A\u8FC7\u63D0\u793A"\u53EA\u6709FDD\u7B7E\u7F72\u4E2D\u7684\u7533\u8BF7\u5355\u624D\u53EF\u4EE5\u7B7E\u5408\u540C"\u3002\u9762\u79EF\u786E\u8BA4\u6D89\u53CA\u5408\u540C\u7B7E\u8BA2\uFF0C\u9700\u5728\u6CD5\u5927\u5927\u7B7E\u7F72\u6D41\u7A0B\u4E2D\u6267\u884C`)
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " APPLY_CODE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7533\u8BF7\u7F16\u7801,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         DESIGN_NAME "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u8BBE\u8BA1\u540D\u79F0,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         APPROVAL_STATE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5BA1\u6838\u72B6\u6001,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         ORDER_LECTURE_STATE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u70B9\u5C06\u72B6\u6001")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " DESIGN_APPLY")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " APPROVAL_STATE "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "<>"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "fdd_in_approval"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " ORDER_LECTURE_STATE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IN"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " ("),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "valid"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ", "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "designing"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ");")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95193\uFF1A\u53EA\u6709\u5F85\u786E\u8BA4\u7684\u7533\u8BF7\u5355\u624D\u53EF\u4EE5\u7B7E\u7ED3\u7B97\u5408\u540C"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u70B9\u51FB\u56FE\u7EB8\u786E\u8BA4\u6309\u94AE\u65F6\uFF0C\u7ED3\u7B97\u786E\u8BA4\u72B6\u6001\u4E0D\u4E3A to_be_confirm")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode(`\uFF1A\u524D\u7AEF\u6821\u9A8C SETTLEMENT_CONFIRM_STATE = 'to_be_confirm'\uFF08\u5F85\u786E\u8BA4\uFF09\uFF0C\u4EC5\u5728\u6B64\u72B6\u6001\u4E0B\u624D\u5141\u8BB8\u8C03\u7528 useFDD \u7B7E\u7ED3\u7B97\u5408\u540C\u3002\u6821\u9A8C\u4E0D\u901A\u8FC7\u63D0\u793A"\u53EA\u6709\u5F85\u786E\u8BA4\u7684\u7533\u8BF7\u5355\u624D\u53EF\u4EE5\u7B7E\u7ED3\u7B97\u5408\u540C"\u3002\u56FE\u7EB8\u786E\u8BA4\u6D89\u53CA\u7ED3\u7B97\u5408\u540C\u7B7E\u8BA2\uFF0C\u9700\u5728\u5F85\u786E\u8BA4\u72B6\u6001\u4E0B\u6267\u884C`)
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " APPLY_CODE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7533\u8BF7\u7F16\u7801,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         DESIGN_NAME "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u8BBE\u8BA1\u540D\u79F0,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         SETTLEMENT_CONFIRM_STATE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7ED3\u7B97\u786E\u8BA4\u72B6\u6001,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         ORDER_LECTURE_STATE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u70B9\u5C06\u72B6\u6001")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " DESIGN_APPLY")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " SETTLEMENT_CONFIRM_STATE "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "<>"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "to_be_confirm"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " ORDER_LECTURE_STATE "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "drawing_uploaded"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95194\uFF1A\u6587\u4EF6url\u4E0D\u5B58\u5728\uFF01"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u4E0B\u8F7D\u56FE\u7EB8\u5F39\u7A97\u4E2D\u70B9\u51FB\u6587\u4EF6\u540D\u79F0\u9884\u89C8\u65F6\uFF0C\u6587\u4EF6URL\u4E3A\u7A7A")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode('\uFF1A\u524D\u7AEF\u6821\u9A8C FILE_URL \u5B57\u6BB5\u975E\u7A7A\uFF0C\u82E5\u4E3A\u7A7A\u5219\u63D0\u793A"\u6587\u4EF6url\u4E0D\u5B58\u5728\uFF01"\u3002\u6587\u4EF6URL\u7531\u4E0A\u4F20\u65F6\u751F\u6210\uFF0C\u82E5\u4E3A\u7A7A\u8BF4\u660E\u6587\u4EF6\u672A\u6210\u529F\u4E0A\u4F20\u6216\u4E0A\u4F20\u540E\u672A\u56DE\u5199URL\uFF0C\u9700\u68C0\u67E5\u6587\u4EF6\u5B58\u50A8\u670D\u52A1\u72B6\u6001\u548C\u4E0A\u4F20\u63A5\u53E3\u8C03\u7528\u7ED3\u679C')
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " DESIGN_DRAWING_ID "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u56FE\u7EB8ID,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         APPLY_CODE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7533\u8BF7\u7F16\u7801,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         "),
                  createVNode("span", { style: { "color": "#82AAFF" } }, "FILE_NAME"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u6587\u4EF6\u540D\u79F0,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         DRAWING_TYPE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u56FE\u7EB8\u7C7B\u578B,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         FILE_URL "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u6587\u4EF6URL")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " DESIGN_DRAWING")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " FILE_URL "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NULL"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "OR"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " FILE_URL "),
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
          createVNode("h4", null, "\u62A5\u95195\uFF1A\u53CD\u9988\u610F\u89C1\u4E0D\u80FD\u4E3A\u7A7A"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u56FE\u7EB8\u53CD\u9988\u63D0\u4EA4\u65F6\uFF0CfeedbackComments \u5B57\u6BB5\u4E3A\u7A7A")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode('\uFF1A\u524D\u7AEF\u53CD\u9988\u5F39\u7A97\u5BF9 feedbackComments \u5B57\u6BB5\u914D\u7F6E required \u6821\u9A8C\uFF0C\u63D0\u4EA4\u524D\u6821\u9A8C\u53CD\u9988\u610F\u89C1\u662F\u5426\u586B\u5199\uFF0C\u4E3A\u7A7A\u5219\u963B\u6B62\u63D0\u4EA4\u5E76\u63D0\u793A"\u53CD\u9988\u610F\u89C1\u4E0D\u80FD\u4E3A\u7A7A"\u3002\u53CD\u9988\u610F\u89C1\u7528\u4E8E\u8BB0\u5F55\u7ECF\u9500\u5546\u5BF9\u8BBE\u8BA1\u56FE\u7EB8\u7684\u610F\u89C1\uFF0C\u662F\u8BBE\u8BA1\u6C9F\u901A\u95ED\u73AF\u7684\u6838\u5FC3\u6570\u636E')
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " DESIGN_DRAWING_ID "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u56FE\u7EB8ID,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         APPLY_CODE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7533\u8BF7\u7F16\u7801,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         "),
                  createVNode("span", { style: { "color": "#82AAFF" } }, "FILE_NAME"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u6587\u4EF6\u540D\u79F0,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         FEEDBACK_RESULT "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u53CD\u9988\u7ED3\u679C,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         FEEDBACK_COMMENTS "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u53CD\u9988\u610F\u89C1")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " DESIGN_DRAWING")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " FEEDBACK_RESULT "),
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " (FEEDBACK_COMMENTS "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NULL"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "OR"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " FEEDBACK_COMMENTS "),
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
          createVNode("h4", null, "\u62A5\u95196\uFF1A\u7ECF\u9500\u5546\u4E0D\u80FD\u4E3A\u7A7A"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u4FDD\u5B58\u6216\u4FDD\u5B58\u5E76\u63D0\u4EA4\u65F6\uFF0CdealerName \u5B57\u6BB5\u4E3A\u7A7A")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode('\uFF1A\u524D\u7AEF\u8868\u5355\u5BF9 dealerName \u5B57\u6BB5\u914D\u7F6E required \u6821\u9A8C\uFF0C\u63D0\u4EA4\u524D\u6821\u9A8C\u7ECF\u9500\u5546\u662F\u5426\u9009\u62E9\uFF0C\u4E3A\u7A7A\u5219\u963B\u6B62\u63D0\u4EA4\u5E76\u63D0\u793A"\u7ECF\u9500\u5546\u4E0D\u80FD\u4E3A\u7A7A"\u3002\u7ECF\u9500\u5546\u662F\u70B9\u5C06\u7533\u8BF7\u7684\u53D1\u8D77\u4E3B\u4F53\uFF0C\u5FC5\u987B\u660E\u786E')
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " APPLY_CODE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7533\u8BF7\u7F16\u7801,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         DESIGN_NAME "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u8BBE\u8BA1\u540D\u79F0,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         DEALER_CODE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7ECF\u9500\u5546\u7F16\u7801,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         DEALER_NAME "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7ECF\u9500\u5546\u540D\u79F0")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " DESIGN_APPLY")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " DEALER_NAME "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NULL"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "OR"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " DEALER_CODE "),
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
          createVNode("h4", null, "\u62A5\u95197\uFF1A\u95E8\u5E97\u4E0D\u80FD\u4E3A\u7A7A"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u4FDD\u5B58\u6216\u4FDD\u5B58\u5E76\u63D0\u4EA4\u65F6\uFF0CterminalName \u5B57\u6BB5\u4E3A\u7A7A")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode('\uFF1A\u524D\u7AEF\u8868\u5355\u5BF9 terminalName \u5B57\u6BB5\u914D\u7F6E required \u6821\u9A8C\uFF0C\u63D0\u4EA4\u524D\u6821\u9A8C\u95E8\u5E97\u662F\u5426\u9009\u62E9\uFF0C\u4E3A\u7A7A\u5219\u963B\u6B62\u63D0\u4EA4\u5E76\u63D0\u793A"\u95E8\u5E97\u4E0D\u80FD\u4E3A\u7A7A"\u3002\u95E8\u5E97\u662F\u8BBE\u8BA1\u670D\u52A1\u843D\u5730\u4F4D\u7F6E\uFF0C\u5FC5\u987B\u660E\u786E')
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " APPLY_CODE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7533\u8BF7\u7F16\u7801,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         DESIGN_NAME "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u8BBE\u8BA1\u540D\u79F0,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         TERMINAL_CODE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u95E8\u5E97\u7F16\u7801,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         TERMINAL_NAME "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u95E8\u5E97\u540D\u79F0")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " DESIGN_APPLY")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " TERMINAL_NAME "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NULL"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "OR"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " TERMINAL_CODE "),
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
          createVNode("h4", null, "\u62A5\u95198\uFF1A\u8BBE\u8BA1\u5E08\u4E0D\u80FD\u4E3A\u7A7A"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u4FDD\u5B58\u6216\u4FDD\u5B58\u5E76\u63D0\u4EA4\u65F6\uFF0ClecturerName \u5B57\u6BB5\u4E3A\u7A7A")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode('\uFF1A\u524D\u7AEF\u8868\u5355\u5BF9 lecturerName \u5B57\u6BB5\u914D\u7F6E required \u6821\u9A8C\uFF0C\u63D0\u4EA4\u524D\u6821\u9A8C\u8BBE\u8BA1\u5E08\u662F\u5426\u9009\u62E9\uFF0C\u4E3A\u7A7A\u5219\u963B\u6B62\u63D0\u4EA4\u5E76\u63D0\u793A"\u8BBE\u8BA1\u5E08\u4E0D\u80FD\u4E3A\u7A7A"\u3002\u8BBE\u8BA1\u5E08\u662F\u70B9\u5C06\u7684\u6838\u5FC3\u5BF9\u8C61\uFF0C\u5FC5\u987B\u660E\u786E\u88AB\u70B9\u5C06\u4EBA')
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " APPLY_CODE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7533\u8BF7\u7F16\u7801,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         DESIGN_NAME "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u8BBE\u8BA1\u540D\u79F0,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         LECTURER_CODE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u8BBE\u8BA1\u5E08\u7F16\u7801,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         LECTURER_NAME "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u8BBE\u8BA1\u5E08\u59D3\u540D")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " DESIGN_APPLY")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " LECTURER_NAME "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NULL"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "OR"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " LECTURER_CODE "),
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
          createVNode("h4", null, "\u62A5\u95199\uFF1A\u8BBE\u8BA1\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u4FDD\u5B58\u6216\u4FDD\u5B58\u5E76\u63D0\u4EA4\u65F6\uFF0CdesignName \u5B57\u6BB5\u4E3A\u7A7A")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode('\uFF1A\u524D\u7AEF\u8868\u5355\u5BF9 designName \u5B57\u6BB5\u914D\u7F6E required \u6821\u9A8C\uFF0C\u63D0\u4EA4\u524D\u6821\u9A8C\u8BBE\u8BA1\u540D\u79F0\u662F\u5426\u586B\u5199\uFF0C\u4E3A\u7A7A\u5219\u963B\u6B62\u63D0\u4EA4\u5E76\u63D0\u793A"\u8BBE\u8BA1\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A"\u3002\u8BBE\u8BA1\u540D\u79F0\u7528\u4E8E\u6807\u8BC6\u672C\u6B21\u8BBE\u8BA1\u670D\u52A1\uFF0C\u5FC5\u987B\u660E\u786E')
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " APPLY_CODE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7533\u8BF7\u7F16\u7801,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         DESIGN_NAME "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u8BBE\u8BA1\u540D\u79F0,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         ORDER_LECTURE_STATE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u70B9\u5C06\u72B6\u6001")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " DESIGN_APPLY")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " DESIGN_NAME "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NULL"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "OR"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " DESIGN_NAME "),
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
          createVNode("h4", null, "\u62A5\u951910\uFF1A\u62DF\u70B9\u5C06\u5929\u6570\u4E0D\u80FD\u4E3A\u7A7A"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u4FDD\u5B58\u6216\u4FDD\u5B58\u5E76\u63D0\u4EA4\u65F6\uFF0CpreOrdLecturerDays \u5B57\u6BB5\u4E3A\u7A7A")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode('\uFF1A\u524D\u7AEF\u8868\u5355\u5BF9 preOrdLecturerDays \u5B57\u6BB5\u914D\u7F6E required \u6821\u9A8C\uFF0C\u63D0\u4EA4\u524D\u6821\u9A8C\u62DF\u70B9\u5C06\u5929\u6570\u662F\u5426\u586B\u5199\uFF0C\u4E3A\u7A7A\u5219\u963B\u6B62\u63D0\u4EA4\u5E76\u63D0\u793A"\u62DF\u70B9\u5C06\u5929\u6570\u4E0D\u80FD\u4E3A\u7A7A"\u3002\u62DF\u70B9\u5C06\u5929\u6570\u7528\u4E8E\u8D39\u7528\u8BA1\u7B97\u4E0E\u8BBE\u8BA1\u5E08\u6392\u671F\uFF0C\u5FC5\u987B\u660E\u786E')
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " APPLY_CODE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7533\u8BF7\u7F16\u7801,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         DESIGN_NAME "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u8BBE\u8BA1\u540D\u79F0,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         PRE_ORD_LECTURER_DAYS "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u62DF\u70B9\u5C06\u5929\u6570")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " DESIGN_APPLY")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " PRE_ORD_LECTURER_DAYS "),
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
          createVNode("h4", null, "\u62A5\u951911\uFF1A\u5F53\u524D\u72B6\u6001\u6570\u636E\u65E0\u6CD5\u7F16\u8F91\uFF01"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u70B9\u51FB\u7F16\u8F91\u6309\u94AE\u65F6\uFF0C\u72B6\u6001\u975E\u8349\u7A3F\u4E14\u975E\u5404\u7C7B\u9A73\u56DE\u72B6\u6001")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode(`\uFF1A\u524D\u7AEF\u6821\u9A8C ORDER_LECTURE_STATE = 'draft'\uFF08\u8349\u7A3F\uFF09\u6216 APPROVAL_STATE \u4E3A reject/oa_reject/fdd_reject\uFF08\u5404\u79CD\u9A73\u56DE\uFF09\uFF0C\u4EFB\u4E00\u6761\u4EF6\u6EE1\u8DB3\u624D\u5141\u8BB8\u7F16\u8F91\u3002\u5DF2\u751F\u6548\uFF08valid\uFF09\u3001\u5BA1\u6279\u4E2D\uFF08approving\uFF09\u7B49\u72B6\u6001\u7684\u7533\u8BF7\u5DF2\u88AB\u4E0B\u6E38\u5F15\u7528\uFF0C\u7F16\u8F91\u53EF\u80FD\u5F71\u54CD\u6570\u636E\u4E00\u81F4\u6027\uFF0C\u6545\u9650\u5236\u7F16\u8F91\u3002\u6821\u9A8C\u4E0D\u901A\u8FC7\u63D0\u793A"\u5F53\u524D\u72B6\u6001\u6570\u636E\u65E0\u6CD5\u7F16\u8F91\uFF01"`)
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " APPLY_CODE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7533\u8BF7\u7F16\u7801,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         DESIGN_NAME "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u8BBE\u8BA1\u540D\u79F0,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         ORDER_LECTURE_STATE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u70B9\u5C06\u72B6\u6001,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         APPROVAL_STATE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5BA1\u6838\u72B6\u6001")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " DESIGN_APPLY")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " ORDER_LECTURE_STATE "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "<>"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "draft"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " APPROVAL_STATE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NOT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IN"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " ("),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "reject"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ", "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "oa_reject"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ", "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "fdd_reject"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ");")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u951912\uFF1A\u8BF7\u6C42\u5931\u8D25"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u8C03\u7528 mlt/designApply/* \u7CFB\u5217\u63A5\u53E3\u65F6\uFF0C\u540E\u7AEF\u8FD4\u56DE HTTP \u72B6\u6001\u7801\u975E 2xx")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode('\uFF1A\u524D\u7AEF\u901A\u8FC7 axios \u8C03\u7528\u540E\u7AEF\u63A5\u53E3\uFF0C\u82E5\u54CD\u5E94\u72B6\u6001\u7801\u975E 2xx \u6216\u7F51\u7EDC\u5F02\u5E38\u5219\u89E6\u53D1\u9519\u8BEF\u56DE\u8C03\uFF0C\u7EDF\u4E00\u63D0\u793A"\u8BF7\u6C42\u5931\u8D25"\u3002\u5E38\u89C1\u6839\u56E0\u5305\u62EC\uFF1Ambo-business \u5FAE\u670D\u52A1\u672A\u542F\u52A8\u6216\u5F02\u5E38\u3001\u6570\u636E\u5E93\u8FDE\u63A5\u5931\u8D25\u3001SQL \u6267\u884C\u8D85\u65F6\u3001\u540E\u7AEF\u4E1A\u52A1\u5F02\u5E38\u672A\u6355\u83B7\u3001\u5916\u90E8\u7CFB\u7EDF\uFF08OA/FDD/CRM/\u6587\u4EF6\u5B58\u50A8\uFF09\u8C03\u7528\u5931\u8D25\u3001\u5DE5\u4F5C\u6D41\u5F15\u64CE\u5F02\u5E38\u3001\u7F51\u7EDC\u4E2D\u65AD\u7B49\u3002\u9700\u68C0\u67E5 mbo-business \u5FAE\u670D\u52A1\u8FD0\u884C\u72B6\u6001\u3001\u5916\u90E8\u7CFB\u7EDF\u8FDE\u901A\u6027\u3001\u6587\u4EF6\u5B58\u50A8\u670D\u52A1\u3001\u5DE5\u4F5C\u6D41\u914D\u7F6E\u3001\u540E\u7AEF\u65E5\u5FD7\u5B9A\u4F4D\u5177\u4F53\u5F02\u5E38\u5806\u6808')
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " APPLY_CODE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7533\u8BF7\u7F16\u7801,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         DESIGN_NAME "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u8BBE\u8BA1\u540D\u79F0,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         ORDER_LECTURE_STATE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u70B9\u5C06\u72B6\u6001,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         APPROVAL_STATE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5BA1\u6838\u72B6\u6001,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         CRM_ORDER_CODE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " CRM\u5355\u53F7,")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " DESIGN_APPLY")
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
          createVNode("h4", null, "\u62A5\u951913\uFF1A\u7F51\u7EDC\u5F02\u5E38/\u63A5\u53E3\u8D85\u65F6"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u4EFB\u610F\u63A5\u53E3\u8C03\u7528\u65F6\uFF0C\u7F51\u7EDC\u4E2D\u65AD\u6216\u63A5\u53E3\u54CD\u5E94\u8D85\u8FC7 axios timeout \u914D\u7F6E")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode('\uFF1A\u524D\u7AEF axios \u8BF7\u6C42\u672A\u6536\u5230\u54CD\u5E94\u6216\u54CD\u5E94\u8D85\u65F6\uFF0C\u89E6\u53D1 catch \u56DE\u8C03\u7EDF\u4E00\u63D0\u793A"\u8BF7\u6C42\u5931\u8D25"\u3002\u5E38\u89C1\u6839\u56E0\uFF1A\u7F51\u7EDC\u4E2D\u65AD\u3001mbo-business \u670D\u52A1\u5047\u6B7B\u3001\u6570\u636E\u5E93\u6162\u67E5\u8BE2\u3001\u5DE5\u4F5C\u6D41\u5F15\u64CE\u54CD\u5E94\u6162\u3001\u6587\u4EF6\u5B58\u50A8\u670D\u52A1\u5F02\u5E38\u7B49\u3002\u9700\u68C0\u67E5\u7F51\u7EDC\u8FDE\u901A\u6027\u3001\u540E\u7AEF\u670D\u52A1\u8D1F\u8F7D\u3001\u6570\u636E\u5E93\u6027\u80FD')
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " APPLY_CODE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7533\u8BF7\u7F16\u7801,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         ORDER_LECTURE_STATE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u70B9\u5C06\u72B6\u6001,")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " DESIGN_APPLY")
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
          createVNode("h4", null, "\u62A5\u951914\uFF1A\u6743\u9650\u4E0D\u8DB3"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u70B9\u51FB\u7F16\u8F91\u3001\u5220\u9664\u3001\u53D6\u6D88\u7533\u8BF7\u3001\u9762\u79EF\u786E\u8BA4\u3001\u56FE\u7EB8\u786E\u8BA4\u3001\u8BBE\u8BA1\u6539\u6D3E\u7B49\u6309\u94AE\u65F6\uFF0C\u5F53\u524D\u7528\u6237\u65E0\u5BF9\u5E94 permissionList \u6743\u9650\u7801")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7528\u6237\u540D,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         R.ROLE_NAME "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u89D2\u8272\u540D,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         P.PERMISSION_CODE "),
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
                  createVNode("span", { style: { "color": "#C3E88D" } }, "%design_general%"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ORDER BY"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " U.USER_NAME;")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u951915\uFF1A\u6570\u636E\u4E0D\u5B58\u5728"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u67E5\u770B\u3001\u7F16\u8F91\u3001\u5220\u9664\u7B49\u64CD\u4F5C\u65F6\uFF0C\u63A5\u53E3\u8FD4\u56DE\u6570\u636E\u4E3A\u7A7A\u6216\u7533\u8BF7\u7F16\u7801\u4E0D\u5B58\u5728")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u524D\u7AEF\u901A\u8FC7 applyCode \u8C03\u7528\u8BE6\u60C5\u63A5\u53E3\uFF0C\u540E\u7AEF\u67E5\u8BE2 DESIGN_APPLY \u8868\u65E0\u5BF9\u5E94\u8BB0\u5F55\u6216\u8BB0\u5F55\u5DF2\u903B\u8F91\u5220\u9664\uFF0C\u8FD4\u56DE\u7A7A\u6570\u636E\u3002\u5E38\u89C1\u6839\u56E0\uFF1A\u7533\u8BF7\u7F16\u7801\u9519\u8BEF\u3001\u7533\u8BF7\u5DF2\u88AB\u5220\u9664\u3001\u8DE8\u79DF\u6237\u67E5\u8BE2\u3001\u6570\u636E\u6743\u9650\u9694\u79BB\u7B49\u3002\u9700\u68C0\u67E5 APPLY_CODE \u6709\u6548\u6027\u53CA\u6570\u636E\u6743\u9650")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " APPLY_CODE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7533\u8BF7\u7F16\u7801,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         APPLY_USER_NAME "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7533\u8BF7\u4EBA,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         ORDER_LECTURE_STATE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u70B9\u5C06\u72B6\u6001,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         DELETE_FLAG "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5220\u9664\u6807\u8BB0")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " DESIGN_APPLY")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " APPLY_CODE "),
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
          createVNode("h4", null, "\u62A5\u951916\uFF1A\u72B6\u6001\u4E0D\u5141\u8BB8\u64CD\u4F5C"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u70B9\u51FB\u53D6\u6D88\u7533\u8BF7\u3001\u7EC8\u6B62\u3001\u8BBE\u8BA1\u6539\u6D3E\u7B49\u6309\u94AE\u65F6\uFF0C\u7533\u8BF7\u72B6\u6001\u4E0D\u5728\u5141\u8BB8\u64CD\u4F5C\u7684\u72B6\u6001\u8303\u56F4\u5185")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u540E\u7AEF\u6821\u9A8C\u7533\u8BF7\u72B6\u6001\u673A\uFF0C\u5982\u53D6\u6D88\u7533\u8BF7\u8981\u6C42\u5DF2\u751F\u6548\u4E14\u63D0\u524D7\u5929\u3001\u7EC8\u6B62\u8981\u6C42\u975E\u5DF2\u5B8C\u6210\u3001\u8BBE\u8BA1\u6539\u6D3E\u8981\u6C42\u5BA1\u6279\u901A\u8FC7\u7B49\u3002\u72B6\u6001\u4E0D\u5339\u914D\u65F6\u540E\u7AEF\u8FD4\u56DE\u4E1A\u52A1\u5F02\u5E38\uFF0C\u524D\u7AEF\u63D0\u793A\u540E\u7AEF\u8FD4\u56DE\u7684 message\u3002\u9700\u68C0\u67E5\u7533\u8BF7\u5F53\u524D\u72B6\u6001\u53CA\u64CD\u4F5C\u6D41\u7A0B")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " APPLY_CODE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7533\u8BF7\u7F16\u7801,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         DESIGN_NAME "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u8BBE\u8BA1\u540D\u79F0,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         ORDER_LECTURE_STATE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u70B9\u5C06\u72B6\u6001,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         APPROVAL_STATE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5BA1\u6838\u72B6\u6001,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         ERROR_INFO "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5F02\u5E38\u95EE\u9898")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " DESIGN_APPLY")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " ORDER_LECTURE_STATE "),
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
                  createVNode("span", { style: { "color": "#C3E88D" } }, "designing"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ","),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "drawing_uploaded"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ","),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "finished"),
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
          createVNode("h4", null, "\u62A5\u951917\uFF1A\u5355\u4E2A\u6587\u4EF6\u4E0D\u80FD\u5927\u4E8E30MB"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u4E0A\u4F20\u56FE\u7EB8\u65F6\uFF0C\u6240\u9009\u6587\u4EF6 file.size > 30 * 1024 * 1024\uFF0830MB\uFF09")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode('\uFF1A\u524D\u7AEF UploadDrawing \u7EC4\u4EF6 beforeUpload \u94A9\u5B50\u6821\u9A8C\u6587\u4EF6\u5927\u5C0F\uFF0C\u8D85\u8FC730MB\u5219\u963B\u6B62\u4E0A\u4F20\u5E76\u63D0\u793A"\u5355\u4E2A\u6587\u4EF6\u4E0D\u80FD\u5927\u4E8E30MB"\u3002\u9650\u5236\u6E90\u4E8EOSS\u5B58\u50A8\u548C\u540E\u7AEF\u89E3\u6790\u6027\u80FD\u8003\u8651\uFF0C\u5927\u6587\u4EF6\u9700\u538B\u7F29\u6216\u62C6\u5206\u540E\u4E0A\u4F20')
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " APPLY_CODE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7533\u8BF7\u7F16\u7801,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         "),
                  createVNode("span", { style: { "color": "#82AAFF" } }, "FILE_NAME"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u6587\u4EF6\u540D,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         FILE_SIZE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u6587\u4EF6\u5927\u5C0F")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " DESIGN_DRAWING")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " FILE_SIZE "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "30"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "*"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "1024"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "*"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "1024")
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
          createVNode("h4", null, "\u62A5\u951918\uFF1A\u4E0A\u4F20\u5931\u8D25"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u4E0A\u4F20\u56FE\u7EB8\u65F6\uFF0COSS \u4E0A\u4F20\u629B\u9519\u6216\u4E0A\u4F20\u6210\u529F\u4F46\u54CD\u5E94\u65E0 fileUrl")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode('\uFF1A\u524D\u7AEF UploadDrawing \u7EC4\u4EF6 onUploadError \u94A9\u5B50\u6355\u83B7\u4E0A\u4F20\u5F02\u5E38\u63D0\u793A"\u4E0A\u4F20\u5931\u8D25\uFF1A{err.message}"\uFF0ConUploadSuccess \u94A9\u5B50\u6821\u9A8C\u54CD\u5E94 fileUrl \u5B57\u6BB5\uFF0C\u4E3A\u7A7A\u5219\u63D0\u793A"\u4E0A\u4F20\u5931\u8D25\uFF1A{res.message}"\u3002\u5E38\u89C1\u6839\u56E0\uFF1AOSS \u5B58\u50A8\u670D\u52A1\u4E0D\u53EF\u7528\u3001bucketName \u914D\u7F6E\u9519\u8BEF\u3001\u6587\u4EF6\u683C\u5F0F\u4E0D\u88AB\u63A5\u53D7\u3001\u7F51\u7EDC\u4E2D\u65AD\u7B49')
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " APPLY_CODE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7533\u8BF7\u7F16\u7801,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         "),
                  createVNode("span", { style: { "color": "#82AAFF" } }, "FILE_NAME"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u6587\u4EF6\u540D,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         FILE_URL "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u6587\u4EF6\u5730\u5740,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         ERROR_INFO "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5F02\u5E38\u4FE1\u606F")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " DESIGN_DRAWING")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " FILE_URL "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NULL"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "OR"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " ERROR_INFO "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NOT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NULL")
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
          createVNode("h4", null, "\u62A5\u951919\uFF1A\u540C\u6B65\u5916\u90E8\u7CFB\u7EDF\u5931\u8D25"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u70B9\u51FB\u540C\u6B65CRM/\u540C\u6B65OA/\u540C\u6B65FDD\u6309\u94AE\uFF0C\u5BF9\u5E94\u63A8\u9001\u63A5\u53E3\u8FD4\u56DE\u5931\u8D25")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u524D\u7AEF\u901A\u8FC7 PRequest \u8C03\u7528 pushCrm/pushOa/pushFdd \u63A5\u53E3\uFF0C\u63A5\u53E3\u8FD4\u56DE success=false \u6216\u975E2xx\u72B6\u6001\u7801\u65F6\u89E6\u53D1\u9519\u8BEF\u56DE\u8C03\u3002\u5E38\u89C1\u6839\u56E0\uFF1ACRM/OA/FDD \u5916\u90E8\u7CFB\u7EDF\u4E0D\u53EF\u7528\u3001\u6570\u636E\u4E0D\u7B26\u5408\u5916\u90E8\u63A5\u53E3\u8981\u6C42\u3001\u7533\u8BF7\u72B6\u6001\u4E0D\u5141\u8BB8\u540C\u6B65\u3001\u7F51\u7EDC\u4E2D\u65AD\u7B49\u3002\u540E\u7AEF\u4F1A\u5C06\u5F02\u5E38\u5199\u5165 ERROR_INFO \u5B57\u6BB5")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " APPLY_CODE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7533\u8BF7\u7F16\u7801,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         DESIGN_NAME "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u8BBE\u8BA1\u540D\u79F0,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         CRM_ORDER_CODE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " CRM\u5355\u53F7,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         CRM_ORDER_STATUS "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " CRM\u8BA2\u5355\u72B6\u6001,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         ERROR_INFO "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5F02\u5E38\u95EE\u9898,")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " DESIGN_APPLY")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " (ERROR_INFO "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NOT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NULL"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "OR"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " CRM_ORDER_STATUS "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "FAIL"),
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
          createVNode("h4", null, "\u62A5\u951920\uFF1A\u8BB2\u5E08\u6392\u671F\u51B2\u7A81"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u4FDD\u5B58\u6216\u4FDD\u5B58\u5E76\u63D0\u4EA4\u65F6\uFF0C\u540E\u7AEF\u6821\u9A8C\u8BBE\u8BA1\u5E08\u5728\u6240\u9009\u670D\u52A1\u65F6\u95F4\u8303\u56F4\u5185\u5DF2\u6709\u5176\u4ED6\u6392\u671F")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u540E\u7AEF\u6821\u9A8C\u8BBE\u8BA1\u5E08 SERVICE_START_DATE \u81F3 SERVICE_END_DATE \u8303\u56F4\u5185\u662F\u5426\u4E0E\u5176\u4ED6\u8BBE\u8BA1\u70B9\u5C06\u6392\u671F\u91CD\u53E0\uFF0C\u91CD\u53E0\u5219\u8FD4\u56DE\u4E1A\u52A1\u5F02\u5E38\u3002\u9700\u8C03\u6574\u670D\u52A1\u65F6\u95F4\u6216\u66F4\u6362\u8BBE\u8BA1\u5E08")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " A.APPLY_CODE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7533\u8BF7\u7F16\u7801,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         A.LECTURER_NAME "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u8BBE\u8BA1\u5E08,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         A.SERVICE_START_DATE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u670D\u52A1\u5F00\u59CB,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         A.SERVICE_END_DATE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u670D\u52A1\u7ED3\u675F,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         B.APPLY_CODE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u51B2\u7A81\u7533\u8BF7\u7F16\u7801,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         B.SERVICE_START_DATE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u51B2\u7A81\u5F00\u59CB,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         B.SERVICE_END_DATE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u51B2\u7A81\u7ED3\u675F")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " DESIGN_APPLY A")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "JOIN"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " DESIGN_APPLY B "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ON"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " A.LECTURER_CODE "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " B.LECTURER_CODE")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " A.APPLY_CODE "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "<>"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " B.APPLY_CODE")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " A.SERVICE_START_DATE "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " B.SERVICE_END_DATE")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " A.SERVICE_END_DATE "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " B.SERVICE_START_DATE")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " A.ORDER_LECTURE_STATE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IN"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " ("),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "valid"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ","),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "designing"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ")")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " B.ORDER_LECTURE_STATE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IN"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " ("),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "valid"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ","),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "designing"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ");")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u951921\uFF1A\u9762\u79EF\u5FC5\u987B\u5927\u4E8E0"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u63D0\u4EA4\u9762\u79EF\u786E\u8BA4\u65F6\uFF0CSCALE_AREA \u5B57\u6BB5\u975E\u6B63\u6570")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u540E\u7AEF\u6821\u9A8C SCALE_AREA > 0\uFF0C\u9762\u79EF\u7528\u4E8E\u8BA1\u7B97\u8BBE\u8BA1\u8D39\u7528\uFF0C\u5FC5\u987B\u4E3A\u6B63\u6570\u3002\u82E5\u4E3A0\u6216\u8D1F\u6570\u5219\u8FD4\u56DE\u4E1A\u52A1\u5F02\u5E38\u3002\u9700\u68C0\u67E5\u9762\u79EF\u8F93\u5165\u662F\u5426\u6B63\u786E")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " APPLY_CODE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7533\u8BF7\u7F16\u7801,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         DESIGN_NAME "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u8BBE\u8BA1\u540D\u79F0,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         SCALE_AREA "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u786E\u8BA4\u9762\u79EF,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         ORDER_LECTURE_STATE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u70B9\u5C06\u72B6\u6001")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " DESIGN_APPLY")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " APPLY_TYPE_ONE "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "design"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " SCALE_AREA "),
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " SCALE_AREA "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "<="),
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
  _push(ssrRenderComponent(_component_KbCard, { title: "\u5E38\u89C1\u95EE\u9898" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p${_scopeId}><strong${_scopeId}>Q1\uFF1A\u7ECF\u9500\u5546\u770B\u4E0D\u5230\u81EA\u5DF1\u53D1\u8D77\u7684\u8BBE\u8BA1\u70B9\u5C06\u8BB0\u5F55\uFF1F</strong></p><p${_scopeId}>A\uFF1A\u68C0\u67E5\u8BE5\u7ECF\u9500\u5546\u662F\u5426\u6B63\u786E\u5173\u8054\u5F53\u524D\u767B\u5F55\u7528\u6237\uFF0C\u786E\u8BA4DEALER_CODE\u4E0E\u5F53\u524D\u767B\u5F55\u7528\u6237\u5173\u8054\u7684\u7ECF\u9500\u5546\u4E00\u81F4\u3002</p><p${_scopeId}><strong${_scopeId}>Q2\uFF1A\u8BBE\u8BA1\u5E08\u70B9\u5C06\u7684\u5BA1\u6279\u72B6\u6001\u5982\u4F55\u67E5\u770B\uFF1F</strong></p><p${_scopeId}>A\uFF1A\u5728\u8BE6\u60C5\u9875\u4E2D\u53EF\u67E5\u770B\u5B8C\u6574\u5BA1\u6279\u94FE\u8DEF\uFF0C\u5305\u62EC\u8BB2\u5E08\u5BA1\u6279\u3001\u95E8\u5E97\u5BA1\u6279\u7B49\u5404\u73AF\u8282\u72B6\u6001\u3002</p><p${_scopeId}><strong${_scopeId}>Q3\uFF1A\u8BE6\u60C5\u9875type\u53C2\u6570\u6709\u4EC0\u4E48\u4F5C\u7528\uFF1F</strong></p><p${_scopeId}>A\uFF1A<code${_scopeId}>type</code>\u53C2\u6570\u7528\u4E8E\u533A\u5206\u8BE6\u60C5\u9875\u7684\u5C55\u793A\u6A21\u5F0F\uFF0C\u4E0D\u540C\u6A21\u5F0F\u53EF\u80FD\u5C55\u793A\u4E0D\u540C\u7684\u64CD\u4F5C\u6309\u94AE\u548C\u5B57\u6BB5\u3002</p><p${_scopeId}><strong${_scopeId}>Q4\uFF1A\u7533\u8BF7\u70B9\u5C06\u5F39\u7A97\u65E0\u8BBE\u8BA1\u5E08\u6570\u636E\uFF1F</strong></p><p${_scopeId}>A\uFF1A\u68C0\u67E5campApi.lecturerList\u63A5\u53E3\uFF0CpageType=design\u53C2\u6570\u662F\u5426\u6B63\u786E\u4F20\u9012\u3002</p><p${_scopeId}><strong${_scopeId}>Q5\uFF1A\u4E0B\u8F7D\u56FE\u7EB8\u5F39\u7A97\u65E0\u56FE\u7EB8\u6570\u636E\uFF1F</strong></p><p${_scopeId}>A\uFF1A\u68C0\u67E5downloadDrawing\u63A5\u53E3\u8FD4\u56DE\uFF0C\u786E\u8BA4\u8BBE\u8BA1\u56FE\u5DF2\u4E0A\u4F20\u3002</p><p${_scopeId}><strong${_scopeId}>Q6\uFF1A\u56FE\u7EB8\u53CD\u9988\u5931\u8D25\uFF1F</strong></p><p${_scopeId}>A\uFF1A\u68C0\u67E5feedback\u63A5\u53E3\uFF0C\u786E\u8BA4feedbackComments\u586B\u5199\u3002</p><p${_scopeId}><strong${_scopeId}>Q7\uFF1A\u9762\u79EF\u786E\u8BA4\u65E0\u6CD5\u7B7E\u5408\u540C\uFF1F</strong></p><p${_scopeId}>A\uFF1A\u68C0\u67E5approvalState\u662F\u5426\u4E3Afdd_in_approval\u3002</p><p${_scopeId}><strong${_scopeId}>Q8\uFF1A\u6548\u679C\u56FE\u8865\u7533\u8DF3\u8F6C\u5931\u8D25\uFF1F</strong></p><p${_scopeId}>A\uFF1A\u68C0\u67E5applyCode\u662F\u5426\u5B58\u5728\uFF0C\u8BE6\u60C5\u9875supplement\u8DEF\u7531\u914D\u7F6E\u3002</p>`);
      } else {
        return [
          createVNode("p", null, [
            createVNode("strong", null, "Q1\uFF1A\u7ECF\u9500\u5546\u770B\u4E0D\u5230\u81EA\u5DF1\u53D1\u8D77\u7684\u8BBE\u8BA1\u70B9\u5C06\u8BB0\u5F55\uFF1F")
          ]),
          createVNode("p", null, "A\uFF1A\u68C0\u67E5\u8BE5\u7ECF\u9500\u5546\u662F\u5426\u6B63\u786E\u5173\u8054\u5F53\u524D\u767B\u5F55\u7528\u6237\uFF0C\u786E\u8BA4DEALER_CODE\u4E0E\u5F53\u524D\u767B\u5F55\u7528\u6237\u5173\u8054\u7684\u7ECF\u9500\u5546\u4E00\u81F4\u3002"),
          createVNode("p", null, [
            createVNode("strong", null, "Q2\uFF1A\u8BBE\u8BA1\u5E08\u70B9\u5C06\u7684\u5BA1\u6279\u72B6\u6001\u5982\u4F55\u67E5\u770B\uFF1F")
          ]),
          createVNode("p", null, "A\uFF1A\u5728\u8BE6\u60C5\u9875\u4E2D\u53EF\u67E5\u770B\u5B8C\u6574\u5BA1\u6279\u94FE\u8DEF\uFF0C\u5305\u62EC\u8BB2\u5E08\u5BA1\u6279\u3001\u95E8\u5E97\u5BA1\u6279\u7B49\u5404\u73AF\u8282\u72B6\u6001\u3002"),
          createVNode("p", null, [
            createVNode("strong", null, "Q3\uFF1A\u8BE6\u60C5\u9875type\u53C2\u6570\u6709\u4EC0\u4E48\u4F5C\u7528\uFF1F")
          ]),
          createVNode("p", null, [
            createTextVNode("A\uFF1A"),
            createVNode("code", null, "type"),
            createTextVNode("\u53C2\u6570\u7528\u4E8E\u533A\u5206\u8BE6\u60C5\u9875\u7684\u5C55\u793A\u6A21\u5F0F\uFF0C\u4E0D\u540C\u6A21\u5F0F\u53EF\u80FD\u5C55\u793A\u4E0D\u540C\u7684\u64CD\u4F5C\u6309\u94AE\u548C\u5B57\u6BB5\u3002")
          ]),
          createVNode("p", null, [
            createVNode("strong", null, "Q4\uFF1A\u7533\u8BF7\u70B9\u5C06\u5F39\u7A97\u65E0\u8BBE\u8BA1\u5E08\u6570\u636E\uFF1F")
          ]),
          createVNode("p", null, "A\uFF1A\u68C0\u67E5campApi.lecturerList\u63A5\u53E3\uFF0CpageType=design\u53C2\u6570\u662F\u5426\u6B63\u786E\u4F20\u9012\u3002"),
          createVNode("p", null, [
            createVNode("strong", null, "Q5\uFF1A\u4E0B\u8F7D\u56FE\u7EB8\u5F39\u7A97\u65E0\u56FE\u7EB8\u6570\u636E\uFF1F")
          ]),
          createVNode("p", null, "A\uFF1A\u68C0\u67E5downloadDrawing\u63A5\u53E3\u8FD4\u56DE\uFF0C\u786E\u8BA4\u8BBE\u8BA1\u56FE\u5DF2\u4E0A\u4F20\u3002"),
          createVNode("p", null, [
            createVNode("strong", null, "Q6\uFF1A\u56FE\u7EB8\u53CD\u9988\u5931\u8D25\uFF1F")
          ]),
          createVNode("p", null, "A\uFF1A\u68C0\u67E5feedback\u63A5\u53E3\uFF0C\u786E\u8BA4feedbackComments\u586B\u5199\u3002"),
          createVNode("p", null, [
            createVNode("strong", null, "Q7\uFF1A\u9762\u79EF\u786E\u8BA4\u65E0\u6CD5\u7B7E\u5408\u540C\uFF1F")
          ]),
          createVNode("p", null, "A\uFF1A\u68C0\u67E5approvalState\u662F\u5426\u4E3Afdd_in_approval\u3002"),
          createVNode("p", null, [
            createVNode("strong", null, "Q8\uFF1A\u6548\u679C\u56FE\u8865\u7533\u8DF3\u8F6C\u5931\u8D25\uFF1F")
          ]),
          createVNode("p", null, "A\uFF1A\u68C0\u67E5applyCode\u662F\u5426\u5B58\u5728\uFF0C\u8BE6\u60C5\u9875supplement\u8DEF\u7531\u914D\u7F6E\u3002")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div><div id="changelog" style="${ssrRenderStyle({ "display": "none" })}"><div class="tab-pad"><div class="kl-wrap">`);
  _push(ssrRenderComponent(_component_KbCard, { title: "\u66F4\u65B0\u8BB0\u5F55" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u65E5\u671F</th><th${_scopeId}>\u63D0\u4EA4ID</th><th${_scopeId}>\u63D0\u4EA4\u4EBA</th><th${_scopeId}>\u63D0\u4EA4\u5185\u5BB9</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>2025-11-12</td><td${_scopeId}>-</td><td${_scopeId}>hfy</td><td${_scopeId}>\u521D\u59CB\u521B\u5EFA</td></tr><tr${_scopeId}><td${_scopeId}>2026-08-03</td><td${_scopeId}>-</td><td${_scopeId}>AI</td><td${_scopeId}>\u521D\u59CB\u521B\u5EFA</td></tr><tr${_scopeId}><td${_scopeId}>2026-08-28</td><td${_scopeId}>-</td><td${_scopeId}>AI</td><td${_scopeId}>\u5B8C\u6574\u91CD\u5199\uFF0C\u8865\u5145\u4E1A\u52A1\u6D41\u7A0B\u3001\u754C\u9762\u6A21\u5757\u3001\u6570\u636E\u5E93\u8868\u3001FAQ\u7B49</td></tr><tr${_scopeId}><td${_scopeId}>2026-07-31</td><td${_scopeId}>-</td><td${_scopeId}>AI</td><td${_scopeId}>\u5BF9\u6BD4\u7F51\u7AD9\u8865\u5145\u5B9A\u4E49\u3001\u8BE6\u7EC6\u903B\u8F91\u3001\u6570\u636E\u5E93\u8868\u5B57\u6BB5\u7B49</td></tr><tr${_scopeId}><td${_scopeId}>2026-08-30</td><td${_scopeId}>-</td><td${_scopeId}>AI</td><td${_scopeId}>\u6309skill\u89C4\u8303\u683C\u5F0F\u91CD\u5199\uFF0C\u8C03\u6574\u4E3A\u7ECF\u9500\u5546\u53D1\u8D77\u89C6\u89D2\uFF0C\u8865\u5145\u8BBE\u8BA1\u70B9\u5C06\u72EC\u7279\u6D41\u7A0B\u3001\u56FE\u7EB8\u53CD\u9988\u3001\u6548\u679C\u56FE\u8865\u7533\u7B49\uFF0C\u89C4\u8303\u4E0A\u4E0B\u6E38\u3001\u91CD\u70B9\u903B\u8F91\u3001\u5F39\u7A97\u3001\u6309\u94AE\u3001\u6821\u9A8C\u3001\u72B6\u6001\u673A\u3001\u66F4\u65B0\u8BB0\u5F55\u7B49\u683C\u5F0F</td></tr></tbody></table>`);
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
                createVNode("td", null, "2026-08-03"),
                createVNode("td", null, "-"),
                createVNode("td", null, "AI"),
                createVNode("td", null, "\u521D\u59CB\u521B\u5EFA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "2026-08-28"),
                createVNode("td", null, "-"),
                createVNode("td", null, "AI"),
                createVNode("td", null, "\u5B8C\u6574\u91CD\u5199\uFF0C\u8865\u5145\u4E1A\u52A1\u6D41\u7A0B\u3001\u754C\u9762\u6A21\u5757\u3001\u6570\u636E\u5E93\u8868\u3001FAQ\u7B49")
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
                createVNode("td", null, "\u6309skill\u89C4\u8303\u683C\u5F0F\u91CD\u5199\uFF0C\u8C03\u6574\u4E3A\u7ECF\u9500\u5546\u53D1\u8D77\u89C6\u89D2\uFF0C\u8865\u5145\u8BBE\u8BA1\u70B9\u5C06\u72EC\u7279\u6D41\u7A0B\u3001\u56FE\u7EB8\u53CD\u9988\u3001\u6548\u679C\u56FE\u8865\u7533\u7B49\uFF0C\u89C4\u8303\u4E0A\u4E0B\u6E38\u3001\u91CD\u70B9\u903B\u8F91\u3001\u5F39\u7A97\u3001\u6309\u94AE\u3001\u6821\u9A8C\u3001\u72B6\u6001\u673A\u3001\u66F4\u65B0\u8BB0\u5F55\u7B49\u683C\u5F0F")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("\u70B9\u5C06\u7BA1\u7406/\u7ECF\u9500\u5546\u70B9\u5C06/\u8BBE\u8BA1\u70B9\u5C06/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
