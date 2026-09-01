import { resolveComponent, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.6ab74304.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"\u70B9\u5C06\u7BA1\u7406/\u7ECF\u9500\u5546\u70B9\u5C06/\u7279\u8BAD\u8425/index.md"}');
const _sfc_main = { name: "\u70B9\u5C06\u7BA1\u7406/\u7ECF\u9500\u5546\u70B9\u5C06/\u7279\u8BAD\u8425/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_BreadcrumbTabs = resolveComponent("BreadcrumbTabs");
  const _component_KbCard = resolveComponent("KbCard");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_BreadcrumbTabs, null, null, _parent));
  _push(`<div id="biz-intro" style="${ssrRenderStyle({ "display": "none" })}"><div class="tab-pad"><div class="kl-wrap"><div class="kl-card"><div class="biz-kl-hdr"><span class="biz-tag" style="${ssrRenderStyle({ "background": "rgba(124,58,237,0.08)", "color": "#7C3AED", "border-color": "rgba(124,58,237,0.18)" })}"> \u5B9A\u4E49</span><h2>\u7ECF\u9500\u5546\u4FA7\u7684\u7279\u8BAD\u8425\u662F\u4EC0\u4E48</h2><p>\u7ECF\u9500\u5546\u67E5\u770B\u88AB\u70B9\u5C06\u53C2\u52A0\u7684\u96C6\u4E2D\u5F0F\u7279\u8BAD\u8425\u5B89\u6392\u5E76\u786E\u8BA4\u53C2\u8BAD</p></div><div class="biz-2col-inner"><div class="kl-col-box"><div style="${ssrRenderStyle({ "display": "flex", "align-items": "center", "gap": "10px", "margin-bottom": "12px" })}"><div style="${ssrRenderStyle({ "width": "40px", "height": "40px", "border-radius": "10px", "display": "flex", "align-items": "center", "justify-content": "center", "background": "linear-gradient(135deg,#7c3aed,#6d28d9)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="3" width="5" height="5" rx="1" stroke="white" stroke-width="1.5"></rect><path d="M3 6.5L4.5 8L7 5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9 5H14" stroke="white" stroke-width="1.5" stroke-linecap="round"></path><rect x="2" y="10" width="5" height="3" rx="1" stroke="white" stroke-width="1.5"></rect><path d="M9 10H14" stroke="white" stroke-width="1.5" stroke-linecap="round"></path><path d="M9 13H13" stroke="white" stroke-width="1.5" stroke-linecap="round"></path></svg></div><h4 style="${ssrRenderStyle({ "font-size": "1rem", "font-weight": "800", "color": "#1F2937", "margin": "0" })}">\u89E3\u51B3\u4EC0\u4E48\u95EE\u9898</h4></div><p style="${ssrRenderStyle({ "font-size": "0.78rem", "font-weight": "600", "color": "#6B7280", "margin": "0 0 10px" })}">\u8BA9\u7ECF\u9500\u5546\u53CA\u65F6\u638C\u63E1\u96C6\u4E2D\u57F9\u8BAD\u7684\u53C2\u8BAD\u8981\u6C42</p><div style="${ssrRenderStyle({ "display": "flex", "flex-direction": "column", "gap": "8px" })}"><div style="${ssrRenderStyle({ "display": "flex", "align-items": "flex-start", "gap": "8px", "padding": "8px 10px", "background": "#F5F3FF", "border-radius": "8px" })}"><div style="${ssrRenderStyle({ "font-size": ".75rem" })}"><strong>\u7279\u8BAD\u8425\u662F\u96C6\u4E2D\u57F9\u8BAD</strong> \u2014 \u4E0E\u5230\u5E97\u57F9\u8BAD\u4E0D\u540C\uFF0C\u7279\u8BAD\u8425\u5728\u7EDF\u4E00\u5730\u70B9\u96C6\u4E2D\u5F00\u529E\uFF0C\u7531\u603B\u90E8\u6216\u5927\u533A\u70B9\u6D3E\u53C2\u8BAD\u5BF9\u8C61\u3002</div></div><div style="${ssrRenderStyle({ "display": "flex", "align-items": "flex-start", "gap": "8px", "padding": "8px 10px", "background": "#F5F3FF", "border-radius": "8px" })}"><div style="${ssrRenderStyle({ "font-size": ".75rem" })}"><strong>\u53C2\u8BAD\u9700\u5F02\u5730\u5B89\u6392</strong> \u2014 \u6D89\u53CA\u5916\u51FA\u5B66\u4E60\uFF0C\u7ECF\u9500\u5546\u8981\u63D0\u524D\u6392\u73ED\u3001\u62A5\u540D\u4EBA\u5458\u4E0E\u884C\u7A0B\uFF0C\u4FE1\u606F\u5FC5\u987B\u63D0\u524D\u53EF\u89C1\u3002</div></div></div></div><div class="kl-col-box alt"><div style="${ssrRenderStyle({ "display": "flex", "align-items": "center", "gap": "10px", "margin-bottom": "12px" })}"><div style="${ssrRenderStyle({ "width": "40px", "height": "40px", "border-radius": "10px", "display": "flex", "align-items": "center", "justify-content": "center", "background": "linear-gradient(135deg,#10b981,#059669)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="2" width="10" height="12" rx="1.5" stroke="white" stroke-width="1.5"></rect><path d="M5 6H11M5 9H9" stroke="white" stroke-width="1.5" stroke-linecap="round"></path></svg></div><h4 style="${ssrRenderStyle({ "font-size": "1rem", "font-weight": "800", "color": "#1F2937", "margin": "0" })}">\u80FD\u770B\u5230\u4EC0\u4E48</h4></div><p style="${ssrRenderStyle({ "font-size": "0.78rem", "font-weight": "600", "color": "#6B7280", "margin": "0 0 10px" })}">\u4E00\u671F\u7279\u8BAD\u8425\u7684\u5173\u952E\u4FE1\u606F</p><div style="${ssrRenderStyle({ "display": "flex", "flex-direction": "column", "gap": "8px" })}"><div style="${ssrRenderStyle({ "display": "flex", "align-items": "flex-start", "gap": "8px", "padding": "8px 10px", "background": "#F0FDF4", "border-radius": "8px", "border": "1px solid #D1FAE5" })}"><div style="${ssrRenderStyle({ "font-size": ".75rem" })}"><strong>\u57F9\u8BAD\u4E3B\u9898\u4E0E\u65F6\u95F4</strong> \u2014 \u672C\u671F\u7279\u8BAD\u8425\u8BB2\u4EC0\u4E48\u3001\u4EC0\u4E48\u65F6\u5019\u5F00\u73ED\u7ED3\u73ED\u3002</div></div><div style="${ssrRenderStyle({ "display": "flex", "align-items": "flex-start", "gap": "8px", "padding": "8px 10px", "background": "#F0FDF4", "border-radius": "8px", "border": "1px solid #D1FAE5" })}"><div style="${ssrRenderStyle({ "font-size": ".75rem" })}"><strong>\u57F9\u8BAD\u5730\u70B9\u4E0E\u8BB2\u5E08</strong> \u2014 \u5728\u54EA\u91CC\u96C6\u4E2D\u5F00\u529E\u3001\u7531\u54EA\u4F4D\u8BB2\u5E08\u6388\u8BFE\u3002</div></div><div style="${ssrRenderStyle({ "display": "flex", "align-items": "flex-start", "gap": "8px", "padding": "8px 10px", "background": "#EDE9FE", "border-radius": "8px" })}"><div style="${ssrRenderStyle({ "font-size": ".75rem" })}"><strong>\u53C2\u8BAD\u95E8\u5E97\u4E0E\u72B6\u6001</strong> \u2014 \u672C\u5546\u6237\u54EA\u4E9B\u95E8\u5E97\u88AB\u70B9\u5C06\uFF0C\u4EE5\u53CA\u70B9\u5C06\u5F53\u524D\u72B6\u6001\u3002</div></div></div></div></div></div><div class="kl-card"><div class="biz-kl-hdr"><span class="biz-tag" style="${ssrRenderStyle({ "background": "rgba(124,58,237,0.08)", "color": "#7C3AED", "border-color": "rgba(124,58,237,0.18)" })}"> \u6D41\u7A0B</span><h2>\u7ECF\u9500\u5546\u4FA7\u7684\u5904\u7406\u94FE\u8DEF</h2><p>\u63A5\u5230\u901A\u77E5 \u2192 \u67E5\u770B\u5F00\u73ED\u5B89\u6392 \u2192 \u786E\u8BA4\u53C2\u8BAD \u2192 \u57F9\u8BAD\u6267\u884C\u7559\u75D5</p></div><div class="biz-steps"><div class="biz-step-item"><div class="biz-step-circle" style="${ssrRenderStyle({ "background": "linear-gradient(135deg,#7C3AED,#6D28D9)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 2C5.5 2 4 3.8 4 6V9L2.5 11.5H13.5L12 9V6C12 3.8 10.5 2 8 2Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6.5 11.5C6.5 12.6 7.2 13.5 8 13.5C8.8 13.5 9.5 12.6 9.5 11.5" stroke="white" stroke-width="1.5" stroke-linecap="round"></path></svg></div><h5>\u63A5\u6536\u70B9\u5C06\u901A\u77E5</h5><small>\u4E0A\u6E38\u5F00\u73ED\u70B9\u5C06\u540E<br>\u7ECF\u9500\u5546\u4FA7\u53EF\u89C1</small></div><div class="biz-step-arrow">\u2192</div><div class="biz-step-item"><div class="biz-step-circle" style="${ssrRenderStyle({ "background": "linear-gradient(135deg,#F59E0B,#FBBF24)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="2" width="10" height="12" rx="1.5" stroke="white" stroke-width="1.5"></rect><path d="M5 6H11M5 9H11" stroke="white" stroke-width="1.5" stroke-linecap="round"></path></svg></div><h5>\u67E5\u770B\u5F00\u73ED\u8BE6\u60C5</h5><small>\u6838\u5BF9\u4E3B\u9898\xB7\u65F6\u95F4<br>\u5730\u70B9\u4E0E\u8BB2\u5E08</small></div><div class="biz-step-arrow">\u2192</div><div class="biz-step-item"><div class="biz-step-circle" style="${ssrRenderStyle({ "background": "linear-gradient(135deg,#10B981,#34D399)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="6" stroke="white" stroke-width="1.5"></circle><path d="M5 8L7 10L11 6" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></div><h5>\u786E\u8BA4\u53C2\u8BAD\u72B6\u6001</h5><small>\u53CD\u9988\u53C2\u8BAD\u4EBA\u5458<br>\u4E0E\u884C\u7A0B\u5B89\u6392</small></div><div class="biz-step-arrow">\u2192</div><div class="biz-step-item"><div class="biz-step-circle" style="${ssrRenderStyle({ "background": "linear-gradient(135deg,#3B82F6,#60A5FA)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 12L6 8L10 10L14 4" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></div><h5>\u57F9\u8BAD\u6267\u884C\u7559\u75D5</h5><small>\u5F62\u6210\u57F9\u8BAD\u6267\u884C\u8BB0\u5F55<br>\u4E0E\u70B9\u5C06\u72B6\u6001\u66F4\u65B0</small></div></div><div class="kl-tip" style="${ssrRenderStyle({ "margin-top": "14px" })}"><strong>\u6570\u636E\u8FB9\u754C\uFF1A</strong>\u672C\u9875\u4E3A\u7ECF\u9500\u5546\u89C6\u89D2\u7684\u53EA\u8BFB\u67E5\u8BE2\uFF0C\u53EA\u5C55\u793A\u5F53\u524D\u767B\u5F55\u7ECF\u9500\u5546\u81EA\u8EAB\u88AB\u70B9\u5C06\u7684\u7279\u8BAD\u8425\u8BB0\u5F55\uFF0C\u4E0D\u80FD\u65B0\u5EFA\u6216\u4FEE\u6539\uFF1B\u5F00\u73ED\u4E0E\u70B9\u5C06\u53D1\u8D77\u5728\u603B\u90E8\u4FA7\u5B8C\u6210\u3002 </div></div></div></div></div><div id="biz-flow" style="${ssrRenderStyle({ "display": "none" })}"><div class="tab-pad"><div class="bf-truth-flow"><h4 class="bf-main-title">\u7279\u8BAD\u8425 \u2014 \u5168\u94FE\u8DEF\u6D41\u7A0B\u56FE</h4><p class="bf-main-sub">\u5F00\u59CB \u2192 \u63A5\u6536\u88AB\u70B9\u5C06\u901A\u77E5 \u2192 \u2605\u67E5\u770B\u5E76\u786E\u8BA4\u7279\u8BAD\u8425\u70B9\u5C06\u2605 \u2192 \u786E\u8BA4/\u53CD\u9988\u53C2\u8BAD\u72B6\u6001 \u2192 \u7ED3\u675F</p><div class="bf-fc-svg-wrap"><svg class="bf-fc-svg" style="${ssrRenderStyle({ "max-height": "none" })}" viewBox="0 0 1200 580" xmlns="http://www.w3.org/2000/svg"><defs><marker id="arr-green" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon points="0,0 10,5 0,10" fill="#16A34A"></polygon></marker><marker id="arr-gray" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon points="0,0 10,5 0,10" fill="#9CA3AF"></polygon></marker><marker id="arr-blue" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon points="0,0 10,5 0,10" fill="#3B82F6"></polygon></marker><marker id="arr-red" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon points="0,0 10,5 0,10" fill="#EF4444"></polygon></marker><filter id="shadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000" flood-opacity="0.15"></feDropShadow></filter></defs><rect x="50" y="20" width="1100" height="95" rx="8" fill="#EFF6FF" stroke="#3B82F6" stroke-width="1.5" stroke-dasharray="6,4"></rect><text x="600" y="42" text-anchor="middle" fill="#1D4ED8" font-size="13" font-weight="600">\u4E0A\u6E38\u652F\u6491</text><rect x="270" y="56" width="150" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"></rect><text x="345" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">\u603B\u90E8/\u5927\u533A\u53D1\u8D77</text><rect x="440" y="56" width="150" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"></rect><text x="515" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">\u7ECF\u9500\u5546\u4E3B\u6863</text><rect x="610" y="56" width="150" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"></rect><text x="685" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">\u8BB2\u5E08\u4E3B\u6863</text><rect x="780" y="56" width="150" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"></rect><text x="855" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">\u7279\u8BAD\u8425\u4E3B\u6570\u636E</text><line x1="235" y1="115" x2="235" y2="150" stroke="#3B82F6" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#arr-blue)"></line><rect x="195" y="150" width="80" height="44" rx="6" fill="#FAF5FF" stroke="#9333EA" stroke-width="1.5" stroke-dasharray="5,3"></rect><text x="235" y="177" text-anchor="middle" fill="#7C3AED" font-size="13" font-weight="600">\u5F00\u59CB</text><line x1="235" y1="194" x2="235" y2="230" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"></line><rect x="155" y="230" width="160" height="54" rx="6" fill="#16A34A" stroke="#15803D" stroke-width="2" filter="url(#shadow)"></rect><text x="235" y="254" text-anchor="middle" fill="#FFFFFF" font-size="13" font-weight="700">\u2605\u67E5\u770B\u5E76\u786E\u8BA4\u7279\u8BAD\u8425\u70B9\u5C06\u2605</text><text x="235" y="272" text-anchor="middle" fill="#DCFCE7" font-size="10">\u67E5\u770B\u4E3B\u9898/\u65F6\u95F4/\u5730\u70B9/\u8BB2\u5E08</text><line x1="235" y1="284" x2="235" y2="310" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"></line><rect x="150" y="310" width="170" height="40" rx="6" fill="#F0FDF4" stroke="#16A34A" stroke-width="2"></rect><text x="235" y="335" text-anchor="middle" fill="#166534" font-size="13" font-weight="600">\u786E\u8BA4/\u53CD\u9988\u53C2\u8BAD\u72B6\u6001</text><line x1="235" y1="350" x2="235" y2="370" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"></line><rect x="180" y="370" width="110" height="40" rx="6" fill="#FAF5FF" stroke="#9333EA" stroke-width="1.5" stroke-dasharray="5,3"></rect><text x="235" y="395" text-anchor="middle" fill="#7C3AED" font-size="13" font-weight="600">\u7ED3\u675F</text><line x1="235" y1="410" x2="235" y2="460" stroke="#16A34A" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#arr-green)"></line><rect x="50" y="460" width="1100" height="95" rx="8" fill="#F0FDF4" stroke="#16A34A" stroke-width="1.5" stroke-dasharray="6,4"></rect><text x="600" y="482" text-anchor="middle" fill="#166534" font-size="13" font-weight="600">\u4E0B\u6E38\u5F71\u54CD</text><rect x="355" y="500" width="150" height="36" rx="5" fill="#FFFFFF" stroke="#16A34A" stroke-width="1.2"></rect><text x="430" y="523" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">\u53C2\u8BAD\u786E\u8BA4\u56DE\u6267</text><rect x="525" y="500" width="150" height="36" rx="5" fill="#FFFFFF" stroke="#16A34A" stroke-width="1.2"></rect><text x="600" y="523" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">\u57F9\u8BAD\u6267\u884C\u8BB0\u5F55</text><rect x="695" y="500" width="150" height="36" rx="5" fill="#FFFFFF" stroke="#16A34A" stroke-width="1.2"></rect><text x="770" y="523" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">\u70B9\u5C06\u72B6\u6001\u66F4\u65B0</text></svg></div><div class="bf-fc-legend"><span class="bf-fc-legend-item"><span class="bf-fc-dot bf-fc-dot-green"></span> \u4E3B\u6D41\u7A0B\u6B65\u9AA4</span><span class="bf-fc-legend-item"><span class="bf-fc-dot bf-fc-dot-purple"></span> \u5F00\u59CB/\u7ED3\u675F</span><span class="bf-fc-legend-item"><span class="bf-fc-dot bf-fc-dot-blue"></span> \u4E0A\u6E38\u652F\u6491</span><span class="bf-fc-legend-item"><span style="${ssrRenderStyle({ "display": "inline-block", "width": "22px", "height": "2px", "background": "#EF4444" })}"></span> \u5BA1\u6279\u62D2\u7EDD/\u9A73\u56DE</span></div></div></div></div><div id="key-logic" style="${ssrRenderStyle({ "display": "none" })}"><div class="tab-pad"><div class="kl-wrap">`);
  _push(ssrRenderComponent(_component_KbCard, {
    num: "1",
    title: "\u91CD\u70B9\u903B\u8F911\uFF1A\u7ECF\u9500\u5546\u53D1\u8D77\u89C6\u89D2"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u610F\u4E49</strong>\uFF1A\u672C\u83DC\u5355\u7531\u7ECF\u9500\u5546\u4E3B\u52A8\u53D1\u8D77\u7279\u8BAD\u8425\u70B9\u5C06\u7533\u8BF7\uFF0C\u7ECF\u9500\u5546\u81EA\u4E3B\u9009\u62E9\u7279\u8BAD\u8425\u3001\u6CD5\u4EBA\u4E3B\u4F53\u4E0E\u8BB2\u5E08\u3002</li><li${_scopeId}><strong${_scopeId}>\u5177\u4F53\u903B\u8F91\u63CF\u8FF0</strong>\uFF1A\u901A\u8FC7<code${_scopeId}>pageForDealer</code>\u63A5\u53E3\u5B9E\u73B0\u7ECF\u9500\u5546\u53D1\u8D77\uFF0C\u540E\u7AEF\u81EA\u52A8\u6309\u5F53\u524D\u767B\u5F55\u7ECF\u9500\u5546\u8FC7\u6EE4\u6570\u636E\u5E76\u5199\u5165DEALER_CODE\u3001DEALER_NAME\u3002</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u610F\u4E49"),
              createTextVNode("\uFF1A\u672C\u83DC\u5355\u7531\u7ECF\u9500\u5546\u4E3B\u52A8\u53D1\u8D77\u7279\u8BAD\u8425\u70B9\u5C06\u7533\u8BF7\uFF0C\u7ECF\u9500\u5546\u81EA\u4E3B\u9009\u62E9\u7279\u8BAD\u8425\u3001\u6CD5\u4EBA\u4E3B\u4F53\u4E0E\u8BB2\u5E08\u3002")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u5177\u4F53\u903B\u8F91\u63CF\u8FF0"),
              createTextVNode("\uFF1A\u901A\u8FC7"),
              createVNode("code", null, "pageForDealer"),
              createTextVNode("\u63A5\u53E3\u5B9E\u73B0\u7ECF\u9500\u5546\u53D1\u8D77\uFF0C\u540E\u7AEF\u81EA\u52A8\u6309\u5F53\u524D\u767B\u5F55\u7ECF\u9500\u5546\u8FC7\u6EE4\u6570\u636E\u5E76\u5199\u5165DEALER_CODE\u3001DEALER_NAME\u3002")
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
        _push2(`<ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u610F\u4E49</strong>\uFF1A\u7ECF\u9500\u5546\u4EC5\u80FD\u67E5\u770B\u548C\u64CD\u4F5C\u81EA\u5DF1\u53D1\u8D77\u7684\u7279\u8BAD\u8425\u70B9\u5C06\u8BB0\u5F55\uFF0C\u907F\u514D\u8DE8\u7ECF\u9500\u5546\u6570\u636E\u6CC4\u9732\u3002</li><li${_scopeId}><strong${_scopeId}>\u5177\u4F53\u903B\u8F91\u63CF\u8FF0</strong>\uFF1A\u901A\u8FC7<code${_scopeId}>pageForDealer</code>\u63A5\u53E3\u81EA\u52A8\u6309\u5F53\u524D\u767B\u5F55\u7ECF\u9500\u5546\u8FC7\u6EE4\uFF0C\u524D\u7AEF\u65E0\u9700\u4F20\u7ECF\u9500\u5546\u53C2\u6570\u3002</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u610F\u4E49"),
              createTextVNode("\uFF1A\u7ECF\u9500\u5546\u4EC5\u80FD\u67E5\u770B\u548C\u64CD\u4F5C\u81EA\u5DF1\u53D1\u8D77\u7684\u7279\u8BAD\u8425\u70B9\u5C06\u8BB0\u5F55\uFF0C\u907F\u514D\u8DE8\u7ECF\u9500\u5546\u6570\u636E\u6CC4\u9732\u3002")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u5177\u4F53\u903B\u8F91\u63CF\u8FF0"),
              createTextVNode("\uFF1A\u901A\u8FC7"),
              createVNode("code", null, "pageForDealer"),
              createTextVNode("\u63A5\u53E3\u81EA\u52A8\u6309\u5F53\u524D\u767B\u5F55\u7ECF\u9500\u5546\u8FC7\u6EE4\uFF0C\u524D\u7AEF\u65E0\u9700\u4F20\u7ECF\u9500\u5546\u53C2\u6570\u3002")
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
        _push2(`<ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u610F\u4E49</strong>\uFF1A\u4FDD\u8BC1\u7279\u8BAD\u8425\u70B9\u5C06\u7533\u8BF7\u7F16\u7801\u5168\u5C40\u552F\u4E00\u3001\u53EF\u8FFD\u6EAF\uFF0C\u4F5C\u4E3A\u4E3B\u952E\u8D2F\u7A7F\u5168\u94FE\u8DEF\u3002</li><li${_scopeId}><strong${_scopeId}>\u5177\u4F53\u903B\u8F91\u63CF\u8FF0</strong>\uFF1A\u63D0\u4EA4\u7533\u8BF7\u65F6\u7CFB\u7EDF\u81EA\u52A8\u751F\u6210\u552F\u4E00\u7F16\u7801applyCode\uFF0C\u5199\u5165APPLY_CODE\u5B57\u6BB5\u3002</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u610F\u4E49"),
              createTextVNode("\uFF1A\u4FDD\u8BC1\u7279\u8BAD\u8425\u70B9\u5C06\u7533\u8BF7\u7F16\u7801\u5168\u5C40\u552F\u4E00\u3001\u53EF\u8FFD\u6EAF\uFF0C\u4F5C\u4E3A\u4E3B\u952E\u8D2F\u7A7F\u5168\u94FE\u8DEF\u3002")
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
    title: "\u91CD\u70B9\u903B\u8F914\uFF1A\u7279\u8BAD\u8425\u9009\u62E9"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u610F\u4E49</strong>\uFF1A\u4ECE\u5DF2\u53D1\u5E03\u7684\u7279\u8BAD\u8425\u4E2D\u9009\u62E9\u53C2\u8BAD\u8425\u6B21\uFF0C\u786E\u4FDD\u53C2\u8BAD\u4FE1\u606F\u6765\u6E90\u552F\u4E00\u4E14\u6709\u6548\u3002</li><li${_scopeId}><strong${_scopeId}>\u5177\u4F53\u903B\u8F91\u63CF\u8FF0</strong>\uFF1A\u70B9\u51FB&quot;\u7533\u8BF7\u70B9\u5C06&quot;\u6309\u94AE\uFF0C\u5F39\u7A97\u5C55\u793A\u7279\u8BAD\u8425\u5217\u8868\uFF08<code${_scopeId}>campApplyApi.campSelectPage</code>\uFF09\u3002\u884C\u64CD\u4F5C\uFF1A\u67E5\u770B\u4ECB\u7ECD\uFF08CampDetail\u5F39\u7A97\uFF09\u3001\u62A5\u540D\uFF08ApplyInfo\u5F39\u7A97\uFF09\u3002\u62A5\u540D\u5F39\u7A97\u586B\u5199\uFF1A\u6CD5\u4EBA\u4E3B\u4F53\u3001\u4EA4\u6613\u516C\u53F8\u3001\u53C2\u8BAD\u4EBA\u5458\u660E\u7EC6\uFF08\u5165\u804C\u65E5\u671F\u3001\u7701\u5E02\u533A\u3001\u95E8\u5E97\u7B49\uFF09\u3002</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u610F\u4E49"),
              createTextVNode("\uFF1A\u4ECE\u5DF2\u53D1\u5E03\u7684\u7279\u8BAD\u8425\u4E2D\u9009\u62E9\u53C2\u8BAD\u8425\u6B21\uFF0C\u786E\u4FDD\u53C2\u8BAD\u4FE1\u606F\u6765\u6E90\u552F\u4E00\u4E14\u6709\u6548\u3002")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u5177\u4F53\u903B\u8F91\u63CF\u8FF0"),
              createTextVNode('\uFF1A\u70B9\u51FB"\u7533\u8BF7\u70B9\u5C06"\u6309\u94AE\uFF0C\u5F39\u7A97\u5C55\u793A\u7279\u8BAD\u8425\u5217\u8868\uFF08'),
              createVNode("code", null, "campApplyApi.campSelectPage"),
              createTextVNode("\uFF09\u3002\u884C\u64CD\u4F5C\uFF1A\u67E5\u770B\u4ECB\u7ECD\uFF08CampDetail\u5F39\u7A97\uFF09\u3001\u62A5\u540D\uFF08ApplyInfo\u5F39\u7A97\uFF09\u3002\u62A5\u540D\u5F39\u7A97\u586B\u5199\uFF1A\u6CD5\u4EBA\u4E3B\u4F53\u3001\u4EA4\u6613\u516C\u53F8\u3001\u53C2\u8BAD\u4EBA\u5458\u660E\u7EC6\uFF08\u5165\u804C\u65E5\u671F\u3001\u7701\u5E02\u533A\u3001\u95E8\u5E97\u7B49\uFF09\u3002")
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, {
    num: "5",
    title: "\u91CD\u70B9\u903B\u8F915\uFF1A\u62A5\u540D\u6570\u636E\u8F6C\u6362"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u610F\u4E49</strong>\uFF1A\u5C06\u524D\u7AEF\u62A5\u540D\u4EBA\u5458\u660E\u7EC6\u6570\u636E\u8F6C\u6362\u4E3A\u540E\u7AEF\u53EF\u5B58\u50A8\u683C\u5F0F\uFF0C\u4FDD\u8BC1\u6570\u636E\u5B8C\u6574\u6027\u3002</li><li${_scopeId}><strong${_scopeId}>\u5177\u4F53\u903B\u8F91\u63CF\u8FF0</strong>\uFF1A\u63D0\u4EA4\u65F6\u5C06\u62A5\u540D\u4EBA\u5458\u660E\u7EC6\u6570\u636E\u8F6C\u6362\uFF1AentryDate\u683C\u5F0F\u5316\u4E3AYYYY-MM-DD\uFF1Bprovince\u6570\u7EC4\u62C6\u5206\u4E3AprovinceName/provinceCode\u3001cityName/cityCode\u3001areaName/areaCode\uFF1Bstore\u5BF9\u8C61\u62C6\u5206\u4E3Astore\uFF08terminalName\uFF09\u548CstoreCode\uFF08terminalCode\uFF09\u3002</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u610F\u4E49"),
              createTextVNode("\uFF1A\u5C06\u524D\u7AEF\u62A5\u540D\u4EBA\u5458\u660E\u7EC6\u6570\u636E\u8F6C\u6362\u4E3A\u540E\u7AEF\u53EF\u5B58\u50A8\u683C\u5F0F\uFF0C\u4FDD\u8BC1\u6570\u636E\u5B8C\u6574\u6027\u3002")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u5177\u4F53\u903B\u8F91\u63CF\u8FF0"),
              createTextVNode("\uFF1A\u63D0\u4EA4\u65F6\u5C06\u62A5\u540D\u4EBA\u5458\u660E\u7EC6\u6570\u636E\u8F6C\u6362\uFF1AentryDate\u683C\u5F0F\u5316\u4E3AYYYY-MM-DD\uFF1Bprovince\u6570\u7EC4\u62C6\u5206\u4E3AprovinceName/provinceCode\u3001cityName/cityCode\u3001areaName/areaCode\uFF1Bstore\u5BF9\u8C61\u62C6\u5206\u4E3Astore\uFF08terminalName\uFF09\u548CstoreCode\uFF08terminalCode\uFF09\u3002")
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, {
    num: "6",
    title: "\u91CD\u70B9\u903B\u8F916\uFF1A\u53D6\u6D88\u7533\u8BF7\u6821\u9A8C"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u610F\u4E49</strong>\uFF1A\u7EA6\u675F\u53D6\u6D88\u7533\u8BF7\u7684\u65F6\u95F4\u7A97\u53E3\u4E0E\u72B6\u6001\uFF0C\u907F\u514D\u4E34\u8FD1\u57F9\u8BAD\u53D6\u6D88\u5F71\u54CD\u8BB2\u5E08\u6392\u671F\u4E0E\u53C2\u8BAD\u5B89\u6392\u3002</li><li${_scopeId}><strong${_scopeId}>\u5177\u4F53\u903B\u8F91\u63CF\u8FF0</strong>\uFF1A\u65F6\u95F4\u6821\u9A8C timeDiff &gt;= 7\uFF08\u57F9\u8BAD\u5F00\u59CB\u524D7\u5929\uFF09\uFF0C\u57FA\u4E8EplanStartTime\uFF0C\u5426\u5219\u63D0\u793A&quot;\u53EA\u6709\u57F9\u8BAD\u65F6\u95F4\u5F00\u59CB\u524D7\u5929\u7684\u6D41\u7A0B\u53EF\u4EE5\u53D1\u8D77\u70B9\u5C06\u53D6\u6D88\u7533\u8BF7\uFF01&quot;\uFF1B\u72B6\u6001\u6821\u9A8C approvalState === &#39;fdd_sign&#39;\uFF08\u5DF2\u6CD5\u5927\u5927\u7B7E\u7EA6\uFF09\uFF1B\u53D6\u6D88\u72B6\u6001\u6821\u9A8C !cancelApprovalState || cancelApprovalState === &#39;reject&#39; || cancelApprovalState === &#39;oa_reject&#39;\u3002\u6821\u9A8C\u901A\u8FC7\u5F39\u7A97\u586B\u5199\u53D6\u6D88\u539F\u56E0\uFF0C\u8C03\u7528<code${_scopeId}>POST /mlt/trainCampApply/cancelApply</code>\u63A5\u53E3\u3002</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u610F\u4E49"),
              createTextVNode("\uFF1A\u7EA6\u675F\u53D6\u6D88\u7533\u8BF7\u7684\u65F6\u95F4\u7A97\u53E3\u4E0E\u72B6\u6001\uFF0C\u907F\u514D\u4E34\u8FD1\u57F9\u8BAD\u53D6\u6D88\u5F71\u54CD\u8BB2\u5E08\u6392\u671F\u4E0E\u53C2\u8BAD\u5B89\u6392\u3002")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u5177\u4F53\u903B\u8F91\u63CF\u8FF0"),
              createTextVNode(`\uFF1A\u65F6\u95F4\u6821\u9A8C timeDiff >= 7\uFF08\u57F9\u8BAD\u5F00\u59CB\u524D7\u5929\uFF09\uFF0C\u57FA\u4E8EplanStartTime\uFF0C\u5426\u5219\u63D0\u793A"\u53EA\u6709\u57F9\u8BAD\u65F6\u95F4\u5F00\u59CB\u524D7\u5929\u7684\u6D41\u7A0B\u53EF\u4EE5\u53D1\u8D77\u70B9\u5C06\u53D6\u6D88\u7533\u8BF7\uFF01"\uFF1B\u72B6\u6001\u6821\u9A8C approvalState === 'fdd_sign'\uFF08\u5DF2\u6CD5\u5927\u5927\u7B7E\u7EA6\uFF09\uFF1B\u53D6\u6D88\u72B6\u6001\u6821\u9A8C !cancelApprovalState || cancelApprovalState === 'reject' || cancelApprovalState === 'oa_reject'\u3002\u6821\u9A8C\u901A\u8FC7\u5F39\u7A97\u586B\u5199\u53D6\u6D88\u539F\u56E0\uFF0C\u8C03\u7528`),
              createVNode("code", null, "POST /mlt/trainCampApply/cancelApply"),
              createTextVNode("\u63A5\u53E3\u3002")
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, {
    num: "7",
    title: "\u91CD\u70B9\u903B\u8F917\uFF1A\u7ED3\u7B97\u524D\u786E\u8BA4"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u610F\u4E49</strong>\uFF1A\u5728\u7ED3\u7B97\u524D\u7531\u7ECF\u9500\u5546\u786E\u8BA4\u7ED3\u7B97\u660E\u7EC6\uFF0C\u4FDD\u969C\u7ED3\u7B97\u6570\u636E\u51C6\u786E\u3002</li><li${_scopeId}><strong${_scopeId}>\u5177\u4F53\u903B\u8F91\u63CF\u8FF0</strong>\uFF1A\u884C\u64CD\u4F5C&quot;\u7ED3\u7B97\u524D\u786E\u8BA4&quot;\uFF0C\u663E\u793A\u6761\u4EF6 beforeSettlementConfirmState === &#39;to_be_confirm&#39;\u3002\u5F39\u7A97\u5C55\u793ACampSettleDetail\u7ED3\u7B97\u660E\u7EC6\u3002\u786E\u8BA4\uFF1AbeforeSettlementConfirmState=confirm\uFF1B\u9A73\u56DE\uFF1AbeforeSettlementConfirmState=reject\u3002\u8C03\u7528<code${_scopeId}>POST /mlt/trainCampApply/settleBeforeConfirm</code>\u63A5\u53E3\u3002</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u610F\u4E49"),
              createTextVNode("\uFF1A\u5728\u7ED3\u7B97\u524D\u7531\u7ECF\u9500\u5546\u786E\u8BA4\u7ED3\u7B97\u660E\u7EC6\uFF0C\u4FDD\u969C\u7ED3\u7B97\u6570\u636E\u51C6\u786E\u3002")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u5177\u4F53\u903B\u8F91\u63CF\u8FF0"),
              createTextVNode(`\uFF1A\u884C\u64CD\u4F5C"\u7ED3\u7B97\u524D\u786E\u8BA4"\uFF0C\u663E\u793A\u6761\u4EF6 beforeSettlementConfirmState === 'to_be_confirm'\u3002\u5F39\u7A97\u5C55\u793ACampSettleDetail\u7ED3\u7B97\u660E\u7EC6\u3002\u786E\u8BA4\uFF1AbeforeSettlementConfirmState=confirm\uFF1B\u9A73\u56DE\uFF1AbeforeSettlementConfirmState=reject\u3002\u8C03\u7528`),
              createVNode("code", null, "POST /mlt/trainCampApply/settleBeforeConfirm"),
              createTextVNode("\u63A5\u53E3\u3002")
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, {
    num: "8",
    title: "\u91CD\u70B9\u903B\u8F918\uFF1A\u884C\u64CD\u4F5C\u663E\u9690"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u610F\u4E49</strong>\uFF1A\u6839\u636E\u7533\u8BF7\u72B6\u6001\u5DEE\u5F02\u5316\u5C55\u793A\u884C\u64CD\u4F5C\uFF0C\u907F\u514D\u8BEF\u64CD\u4F5C\u3002</li><li${_scopeId}><strong${_scopeId}>\u5177\u4F53\u903B\u8F91\u63CF\u8FF0</strong>\uFF1A\u7F16\u8F91\u518D\u53D1\u8D77\uFF1AapplyState === &#39;draft&#39; \u6216 approvalState \u4E3A reject/oa_reject\uFF1B\u7ED3\u7B97\u524D\u786E\u8BA4\uFF1AbeforeSettlementConfirmState === &#39;to_be_confirm&#39;\uFF1B\u5220\u9664\uFF1AapplyState === &#39;draft&#39; \u6216 approvalState \u4E3A reject/fdd_reject/oa_reject\u3002</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u610F\u4E49"),
              createTextVNode("\uFF1A\u6839\u636E\u7533\u8BF7\u72B6\u6001\u5DEE\u5F02\u5316\u5C55\u793A\u884C\u64CD\u4F5C\uFF0C\u907F\u514D\u8BEF\u64CD\u4F5C\u3002")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u5177\u4F53\u903B\u8F91\u63CF\u8FF0"),
              createTextVNode("\uFF1A\u7F16\u8F91\u518D\u53D1\u8D77\uFF1AapplyState === 'draft' \u6216 approvalState \u4E3A reject/oa_reject\uFF1B\u7ED3\u7B97\u524D\u786E\u8BA4\uFF1AbeforeSettlementConfirmState === 'to_be_confirm'\uFF1B\u5220\u9664\uFF1AapplyState === 'draft' \u6216 approvalState \u4E3A reject/fdd_reject/oa_reject\u3002")
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, {
    num: "9",
    title: "\u91CD\u70B9\u903B\u8F919\uFF1A\u8BB2\u5E08\u6392\u671F\u51B2\u7A81\u6821\u9A8C"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u610F\u4E49</strong>\uFF1A\u907F\u514D\u540C\u4E00\u8BB2\u5E08\u5728\u540C\u4E00\u65F6\u95F4\u6BB5\u88AB\u91CD\u590D\u70B9\u5C06\uFF0C\u4FDD\u969C\u8BB2\u5E08\u6863\u671F\u5408\u7406\u6027\u3002</li><li${_scopeId}><strong${_scopeId}>\u5177\u4F53\u903B\u8F91\u63CF\u8FF0</strong>\uFF1A\u4FDD\u5B58\u65F6\u6821\u9A8C\u6240\u9009\u8BB2\u5E08\u5728\u62DF\u5B9A\u5F00\u59CB\u65F6\u95F4\u81F3\u62DF\u5B9A\u7ED3\u675F\u65F6\u95F4\u533A\u95F4\u5185\u4E0D\u5B58\u5728\u5DF2\u751F\u6548\u70B9\u5C06\u8BB0\u5F55\uFF0C\u5B58\u5728\u51B2\u7A81\u5219\u63D0\u793A\u5E76\u963B\u6B62\u4FDD\u5B58\u3002</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u610F\u4E49"),
              createTextVNode("\uFF1A\u907F\u514D\u540C\u4E00\u8BB2\u5E08\u5728\u540C\u4E00\u65F6\u95F4\u6BB5\u88AB\u91CD\u590D\u70B9\u5C06\uFF0C\u4FDD\u969C\u8BB2\u5E08\u6863\u671F\u5408\u7406\u6027\u3002")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u5177\u4F53\u903B\u8F91\u63CF\u8FF0"),
              createTextVNode("\uFF1A\u4FDD\u5B58\u65F6\u6821\u9A8C\u6240\u9009\u8BB2\u5E08\u5728\u62DF\u5B9A\u5F00\u59CB\u65F6\u95F4\u81F3\u62DF\u5B9A\u7ED3\u675F\u65F6\u95F4\u533A\u95F4\u5185\u4E0D\u5B58\u5728\u5DF2\u751F\u6548\u70B9\u5C06\u8BB0\u5F55\uFF0C\u5B58\u5728\u51B2\u7A81\u5219\u63D0\u793A\u5E76\u963B\u6B62\u4FDD\u5B58\u3002")
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
        _push2(`<h4${_scopeId}>\u524D\u7AEF\u8DEF\u7531</h4><table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u8DEF\u7531</th><th${_scopeId}>\u7528\u9014</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\`/general/distributorGeneral/distributorGeneralCamp/list\`</td><td${_scopeId}>\u7279\u8BAD\u8425\u70B9\u5C06\u5217\u8868\u9875</td></tr></tbody></table><h4${_scopeId}>API\u63A5\u53E3</h4><table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u63A5\u53E3\u8DEF\u5F84</th><th${_scopeId}>\u8BF4\u660E</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\`mlt/trainCampApply/page\`</td><td${_scopeId}>\u7ECF\u9500\u5546\u5206\u9875\u67E5\u8BE2\uFF08pageForDealer\uFF09</td></tr><tr${_scopeId}><td${_scopeId}>\`mlt/trainCampApply/save\`</td><td${_scopeId}>\u4FDD\u5B58</td></tr><tr${_scopeId}><td${_scopeId}>\`mlt/trainCampApply/saveAndSubmit\`</td><td${_scopeId}>\u4FDD\u5B58\u5E76\u63D0\u4EA4</td></tr><tr${_scopeId}><td${_scopeId}>\`mlt/trainCampApply/cancel\`</td><td${_scopeId}>\u53D6\u6D88</td></tr><tr${_scopeId}><td${_scopeId}>\`mlt/trainCampApply/detail\`</td><td${_scopeId}>\u67E5\u8BE2\u7533\u8BF7\u8BE6\u60C5</td></tr><tr${_scopeId}><td${_scopeId}>\`mlt/trainCamp/dealer/page\`</td><td${_scopeId}>\u7279\u8BAD\u8425\u9009\u62E9\u5206\u9875\uFF08campSelectPage\uFF09</td></tr><tr${_scopeId}><td${_scopeId}>\`mlt/trainCampApply/companyList\`</td><td${_scopeId}>\u6CD5\u4EBA\u4E3B\u4F53\u5217\u8868\uFF08getDistributorLegalList\uFF09</td></tr><tr${_scopeId}><td${_scopeId}>\`mlt/trainCampApply/delete\`</td><td${_scopeId}>\u5220\u9664\u7533\u8BF7</td></tr><tr${_scopeId}><td${_scopeId}>\`mlt/trainCampApply/approvalPage\`</td><td${_scopeId}>\u5BA1\u6279\u5206\u9875\u67E5\u8BE2</td></tr><tr${_scopeId}><td${_scopeId}>\`mlt/trainCampApply/pushCrm\`</td><td${_scopeId}>\u540C\u6B65CRM</td></tr><tr${_scopeId}><td${_scopeId}>\`mlt/trainCampApply/pushOa\`</td><td${_scopeId}>\u540C\u6B65OA</td></tr><tr${_scopeId}><td${_scopeId}>\`mlt/trainCampApply/pushFdd\`</td><td${_scopeId}>\u540C\u6B65FDD</td></tr><tr${_scopeId}><td${_scopeId}>\`mlt/trainCampApply/cancelApply\`</td><td${_scopeId}>\u53D1\u8D77\u53D6\u6D88\u7533\u8BF7</td></tr><tr${_scopeId}><td${_scopeId}>\`mlt/trainCampApply/cancelApplyApproval\`</td><td${_scopeId}>\u53D6\u6D88\u5BA1\u6279</td></tr><tr${_scopeId}><td${_scopeId}>\`mlt/trainCampApply/campApplyApproval\`</td><td${_scopeId}>\u7279\u8BAD\u8425\u70B9\u5C06\u5BA1\u6279\uFF08applyApproval\uFF09</td></tr><tr${_scopeId}><td${_scopeId}>\`mlt/trainCampApply/getSealAuthorizers\`</td><td${_scopeId}>\u83B7\u53D6\u7528\u5370\u5BA1\u6279\u4EBA</td></tr><tr${_scopeId}><td${_scopeId}>\`mlt/trainCampApply/settleBeforeConfirm\`</td><td${_scopeId}>\u7ED3\u7B97\u524D\u786E\u8BA4</td></tr></tbody></table><h4${_scopeId}>\u5185\u7F6E\u5BA1\u6279</h4><table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5BA1\u6279\u6D41\u7F16\u7801</th><th${_scopeId}>\u8BF4\u660E</th><th${_scopeId}>\u89E6\u53D1\u65F6\u673A</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>campApplyApproval</td><td${_scopeId}>\u7279\u8BAD\u8425\u70B9\u5C06\u7533\u8BF7\u5BA1\u6279</td><td${_scopeId}>\u4FDD\u5B58\u5E76\u63D0\u4EA4\u65F6\u89E6\u53D1</td></tr></tbody></table><h4${_scopeId}>\u67E5\u8BE2\u680F\u5B57\u6BB5</h4><table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5B57\u6BB5\u540D</th><th${_scopeId}>\u6570\u636E\u5E93\u5217\u540D</th><th${_scopeId}>\u7EC4\u4EF6</th><th${_scopeId}>\u4E1A\u52A1\u91CA\u4E49</th><th${_scopeId}>\u663E\u9690\u6761\u4EF6</th><th${_scopeId}>\u53D6\u503C/\u8D4B\u503C\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u7533\u8BF7\u7F16\u7801</td><td${_scopeId}>APPLY_CODE</td><td${_scopeId}>TextField</td><td${_scopeId}>\u7533\u8BF7\u7F16\u7801\u6A21\u7CCA\u67E5\u8BE2</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u624B\u52A8\u8F93\u5165</td></tr><tr${_scopeId}><td${_scopeId}>\u72B6\u6001</td><td${_scopeId}>APPLY_STATE</td><td${_scopeId}>Select</td><td${_scopeId}>\u7533\u8BF7\u72B6\u6001\u7B5B\u9009</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u503C\u96C6MBO.CAMP_APPLY_STATE</td></tr><tr${_scopeId}><td${_scopeId}>\u7533\u8BF7\u5BA1\u6279\u72B6\u6001</td><td${_scopeId}>APPROVAL_STATE</td><td${_scopeId}>Select</td><td${_scopeId}>\u5BA1\u6279\u72B6\u6001\u7B5B\u9009</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u503C\u96C6MBO.APPLY_APPROVAL_STATE</td></tr></tbody></table><h4${_scopeId}>\u5217\u8868\u5C55\u793A\u5B57\u6BB5</h4><blockquote${_scopeId}>\u6570\u636E\u6765\u6E90\uFF1A<code${_scopeId}>stores/listConfig.tsx</code> \u7684 <code${_scopeId}>listDScolumns</code>\uFF0C\u5217\u8868 DataSet \u4F7F\u7528 <code${_scopeId}>dataKey=data.content</code>\u3001<code${_scopeId}>totalKey=data.totalElements</code>\uFF0C\u591A\u9009 <code${_scopeId}>DataSetSelection.multiple</code>\uFF0C\u63A5\u53E3 <code${_scopeId}>campApplyApi.page</code>\u3002</blockquote><table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5B57\u6BB5\u540D</th><th${_scopeId}>\u6570\u636E\u5E93\u5217\u540D</th><th${_scopeId}>\u7EC4\u4EF6</th><th${_scopeId}>\u4E1A\u52A1\u91CA\u4E49</th><th${_scopeId}>\u663E\u9690\u6761\u4EF6</th><th${_scopeId}>\u53D6\u503C/\u8D4B\u503C\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u7533\u8BF7\u7F16\u7801</td><td${_scopeId}>APPLY_CODE</td><td${_scopeId}>TextField</td><td${_scopeId}>\u7533\u8BF7\u552F\u4E00\u7F16\u7801</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u5DE6\u9501\u5B9A\u5217\uFF0Cwidth=180</td></tr><tr${_scopeId}><td${_scopeId}>\u7C7B\u578B</td><td${_scopeId}>CAMP_TYPE</td><td${_scopeId}>Select</td><td${_scopeId}>\u7279\u8BAD\u8425\u7C7B\u578B</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u503C\u96C6MBO.CAMP_TYPE\uFF0Cwidth=130</td></tr><tr${_scopeId}><td${_scopeId}>\u7279\u8BAD\u8425\u540D\u79F0</td><td${_scopeId}>CAMP_NAME</td><td${_scopeId}>Button(link)</td><td${_scopeId}>\u7279\u8BAD\u8425\u540D\u79F0\uFF0C\u53EF\u70B9\u51FB\u67E5\u770B\u8BE6\u60C5</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u5DE6\u9501\u5B9A\u5217\uFF0Cwidth=160\uFF0C\u70B9\u51FB\u89E6\u53D1handleShowDetail(type=&#39;apply&#39;)</td></tr><tr${_scopeId}><td${_scopeId}>\u72B6\u6001</td><td${_scopeId}>APPLY_STATE</td><td${_scopeId}>Select</td><td${_scopeId}>\u7533\u8BF7\u72B6\u6001</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u503C\u96C6MBO.CAMP_APPLY_STATE\uFF0Cwidth=130</td></tr><tr${_scopeId}><td${_scopeId}>\u7533\u8BF7\u5BA1\u6838\u72B6\u6001</td><td${_scopeId}>APPROVAL_STATE</td><td${_scopeId}>Select</td><td${_scopeId}>\u5BA1\u6279\u72B6\u6001</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u503C\u96C6MBO.APPLY_APPROVAL_STATE\uFF0Cwidth=130</td></tr><tr${_scopeId}><td${_scopeId}>\u57F9\u8BAD\u65F6\u95F4</td><td${_scopeId}>PLAN_START_TIME/PLAN_END_TIME</td><td${_scopeId}>TextField(\u7EC4\u5408)</td><td${_scopeId}>\u57F9\u8BAD\u65F6\u95F4\u8303\u56F4</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>width=180\uFF0C\u6E32\u67D3\u4E3A&quot;planStartTime \u81F3 planEndTime&quot;</td></tr><tr${_scopeId}><td${_scopeId}>\u57F9\u8BAD\u5730\u70B9</td><td${_scopeId}>ADDRESS</td><td${_scopeId}>TextField</td><td${_scopeId}>\u57F9\u8BAD\u5730\u70B9</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u540E\u7AEF\u8FD4\u56DE\uFF0Cwidth=130</td></tr><tr${_scopeId}><td${_scopeId}>\u8BB2\u5E08</td><td${_scopeId}>LECTURER</td><td${_scopeId}>TextField</td><td${_scopeId}>\u8BB2\u5E08\u59D3\u540D</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u540E\u7AEF\u8FD4\u56DE\uFF0Cwidth=130</td></tr><tr${_scopeId}><td${_scopeId}>\u53D6\u6D88\u7533\u8BF7\u5BA1\u6838\u72B6\u6001</td><td${_scopeId}>CANCEL_APPROVAL_STATE</td><td${_scopeId}>Select</td><td${_scopeId}>\u53D6\u6D88\u5BA1\u6279\u72B6\u6001</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u503C\u96C6MBO.CANCEL_APPROVAL_STATE\uFF0Cwidth=130</td></tr><tr${_scopeId}><td${_scopeId}>\u7ED3\u7B97\u524D\u786E\u8BA4\u72B6\u6001</td><td${_scopeId}>BEFORE_SETTLEMENT_CONFIRM_STATE</td><td${_scopeId}>Select</td><td${_scopeId}>\u7ED3\u7B97\u524D\u786E\u8BA4\u72B6\u6001</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u503C\u96C6MBO.BEFORE_SETTLEMENT_CONFIRM_STATE\uFF0Cwidth=130</td></tr><tr${_scopeId}><td${_scopeId}>\u7ED3\u7B97\u786E\u8BA4\u72B6\u6001</td><td${_scopeId}>SETTLEMENT_CONFIRM_STATE</td><td${_scopeId}>Select</td><td${_scopeId}>\u7ED3\u7B97\u786E\u8BA4\u72B6\u6001</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u503C\u96C6MBO.SETTLEMENT_COMFIRM_STATE\uFF0Cwidth=130</td></tr><tr${_scopeId}><td${_scopeId}>CRM\u5355\u53F7</td><td${_scopeId}>CRM_ORDER_CODE</td><td${_scopeId}>TextField</td><td${_scopeId}>CRM\u8BA2\u5355\u7F16\u53F7</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u63A8\u9001CRM\u540E\u8FD4\u56DE\uFF0Cwidth=130</td></tr><tr${_scopeId}><td${_scopeId}>\u7533\u8BF7\u65F6\u95F4</td><td${_scopeId}>CREATE_DATE</td><td${_scopeId}>TextField</td><td${_scopeId}>\u7533\u8BF7\u521B\u5EFA\u65F6\u95F4</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u540E\u7AEF\u8FD4\u56DE\uFF0Cwidth=150</td></tr><tr${_scopeId}><td${_scopeId}>\u64CD\u4F5C</td><td${_scopeId}>-</td><td${_scopeId}>Button(link)</td><td${_scopeId}>\u7F16\u8F91\u518D\u53D1\u8D77/\u7ED3\u7B97\u524D\u786E\u8BA4/\u67E5\u770B\u6D41\u7A0B/\u5220\u9664</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u53F3\u9501\u5B9A\u5217\uFF0Cwidth=240\uFF0C\u6309\u72B6\u6001\u6761\u4EF6\u663E\u9690</td></tr></tbody></table><h4${_scopeId}>\u8BE6\u60C5\u9875\u5B57\u6BB5</h4><blockquote${_scopeId}>\u7279\u8BAD\u8425\u65E0\u72EC\u7ACB\u8BE6\u60C5\u9875\uFF08\u65E0 detail.tsx\uFF09\uFF0C\u62A5\u540D/\u7F16\u8F91\u901A\u8FC7\u5F39\u7A97\u5185\u5D4C <code${_scopeId}>components/ApplyInfo/index.tsx</code> \u5B9E\u73B0\u3002ApplyInfo \u5305\u542B\u4E24\u4E2A\u90E8\u5206\uFF1A\u62A5\u540D\u8868\u5355\uFF08applyFormDS\uFF09+ \u53C2\u8BAD\u4EBA\u5458\u5217\u8868\uFF08userListDS\uFF09\u3002</blockquote><h5${_scopeId}>\u62A5\u540D\u8868\u5355\uFF08applyFormDS\uFF09</h5><blockquote${_scopeId}>\u6570\u636E\u6765\u6E90\uFF1A<code${_scopeId}>components/ApplyInfo/config.tsx</code> \u7684 <code${_scopeId}>applyFormDSProps</code>\u3002</blockquote><table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5B57\u6BB5\u540D</th><th${_scopeId}>\u6570\u636E\u5E93\u5217\u540D</th><th${_scopeId}>\u7EC4\u4EF6</th><th${_scopeId}>\u4E1A\u52A1\u91CA\u4E49</th><th${_scopeId}>\u663E\u9690\u6761\u4EF6</th><th${_scopeId}>\u53D6\u503C/\u8D4B\u503C\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u4EA4\u6613\u516C\u53F8</td><td${_scopeId}>TRADING_COMPANY_NAME</td><td${_scopeId}>TextField+Icon(search)</td><td${_scopeId}>\u4EA4\u6613\u516C\u53F8</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u5FC5\u586B\uFF0CreadOnly+\u641C\u7D22\u56FE\u6807\uFF0C\u70B9\u51FB\u5F39\u51FA\u4EA4\u6613\u516C\u53F8\u9009\u62E9\u5F39\u7A97</td></tr><tr${_scopeId}><td${_scopeId}>\u5F00\u7968\u8D26\u6237</td><td${_scopeId}>LEGAL_ENTITY_NAME</td><td${_scopeId}>TextField</td><td${_scopeId}>\u5F00\u7968\u8D26\u6237\uFF08\u6CD5\u4EBA\u5355\u4F4D\u540D\u79F0\uFF09</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u5FC5\u586B\uFF0Cdisabled\uFF0Cplaceholder=&quot;\u9009\u62E9\u4EA4\u6613\u516C\u53F8\u540E\u81EA\u52A8\u5E26\u51FA&quot;\uFF0C\u9009\u4EA4\u6613\u516C\u53F8\u540E\u81EA\u52A8\u5199\u5165legalEntityName/legalEntityCode/tradingCompanyName/tradingCompanyId</td></tr></tbody></table><h5${_scopeId}>\u53C2\u8BAD\u4EBA\u5458\u5217\u8868\uFF08userListDS\uFF09</h5><blockquote${_scopeId}>\u6570\u636E\u6765\u6E90\uFF1A<code${_scopeId}>components/ApplyInfo/config.tsx</code> \u7684 <code${_scopeId}>userListDSProps</code>/<code${_scopeId}>userListDSColumns</code>\u3002\u901A\u8FC7&quot;\u6DFB\u52A0&quot;\u6309\u94AE\u65B0\u589E\u884C\uFF0C\u652F\u6301\u591A\u884C\u53C2\u8BAD\u4EBA\u5458\u3002</blockquote><table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5B57\u6BB5\u540D</th><th${_scopeId}>\u6570\u636E\u5E93\u5217\u540D</th><th${_scopeId}>\u7EC4\u4EF6</th><th${_scopeId}>\u4E1A\u52A1\u91CA\u4E49</th><th${_scopeId}>\u663E\u9690\u6761\u4EF6</th><th${_scopeId}>\u53D6\u503C/\u8D4B\u503C\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u5E8F\u53F7</td><td${_scopeId}>-</td><td${_scopeId}>TextField</td><td${_scopeId}>\u884C\u5E8F\u53F7</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u81EA\u52A8\u8BA1\u7B97dataSet.indexOf(record)+1\uFF0C\u5DE6\u9501\u5B9A\u5217\uFF0Cwidth=60</td></tr><tr${_scopeId}><td${_scopeId}>\u59D3\u540D</td><td${_scopeId}>NAME</td><td${_scopeId}>TextField</td><td${_scopeId}>\u53C2\u8BAD\u4EBA\u5458\u59D3\u540D</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u5FC5\u586B\uFF0Ceditor\u6A21\u5F0F</td></tr><tr${_scopeId}><td${_scopeId}>\u624B\u673A\u53F7</td><td${_scopeId}>PHONE</td><td${_scopeId}>TextField</td><td${_scopeId}>\u53C2\u8BAD\u4EBA\u5458\u624B\u673A\u53F7</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u5FC5\u586B\uFF0Ceditor\u6A21\u5F0F\uFF0Cwidth=120\uFF0C\u6821\u9A8C\u6B63\u5219/^1[3456789]\\d{9}$/</td></tr><tr${_scopeId}><td${_scopeId}>\u6027\u522B</td><td${_scopeId}>GENDER</td><td${_scopeId}>Select</td><td${_scopeId}>\u53C2\u8BAD\u4EBA\u5458\u6027\u522B</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u5FC5\u586B\uFF0C\u503C\u96C6MBO.CAMP_USER_SEX\uFF0Cwidth=80</td></tr><tr${_scopeId}><td${_scopeId}>\u5B66\u5386</td><td${_scopeId}>EDUCATION</td><td${_scopeId}>TextField</td><td${_scopeId}>\u53C2\u8BAD\u4EBA\u5458\u5B66\u5386</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u5FC5\u586B\uFF0Ceditor\u6A21\u5F0F</td></tr><tr${_scopeId}><td${_scopeId}>\u6240\u5C5E\u95E8\u5E97</td><td${_scopeId}>STORE</td><td${_scopeId}>TextField+Icon(search)</td><td${_scopeId}>\u53C2\u8BAD\u4EBA\u5458\u6240\u5C5E\u95E8\u5E97</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u5FC5\u586B\uFF0CreadOnly+\u641C\u7D22\u56FE\u6807\uFF0C\u70B9\u51FB\u5F39\u51FA\u95E8\u5E97\u9009\u62E9\u5F39\u7A97\uFF0Cwidth=250</td></tr><tr${_scopeId}><td${_scopeId}>\u7701\u5E02\u533A</td><td${_scopeId}>PROVINCE</td><td${_scopeId}>Cascader</td><td${_scopeId}>\u53C2\u8BAD\u4EBA\u5458\u6240\u5728\u7701\u5E02\u533A</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u5FC5\u586B\uFF0C\u7EA7\u8054\u9009\u62E9\u5668\uFF0CloadAddressData\u52A8\u6001\u52A0\u8F7D\uFF0Cwidth=180</td></tr><tr${_scopeId}><td${_scopeId}>\u8BE6\u7EC6\u5730\u5740</td><td${_scopeId}>ADDRESS</td><td${_scopeId}>TextField</td><td${_scopeId}>\u53C2\u8BAD\u4EBA\u5458\u8BE6\u7EC6\u5730\u5740</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>editor\u6A21\u5F0F\uFF0Cwidth=160</td></tr><tr${_scopeId}><td${_scopeId}>\u5C97\u4F4D</td><td${_scopeId}>POST</td><td${_scopeId}>TextField</td><td${_scopeId}>\u53C2\u8BAD\u4EBA\u5458\u5C97\u4F4D</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u5FC5\u586B\uFF0Ceditor\u6A21\u5F0F</td></tr><tr${_scopeId}><td${_scopeId}>\u5165\u804C\u65E5\u671F</td><td${_scopeId}>ENTRY_DATE</td><td${_scopeId}>DatePicker</td><td${_scopeId}>\u53C2\u8BAD\u4EBA\u5458\u5165\u804C\u65E5\u671F</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u5FC5\u586B\uFF0Cwidth=120</td></tr><tr${_scopeId}><td${_scopeId}>\u5907\u6CE8</td><td${_scopeId}>REMARK</td><td${_scopeId}>TextField</td><td${_scopeId}>\u5907\u6CE8</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>editor\u6A21\u5F0F\uFF0Cwidth=140</td></tr><tr${_scopeId}><td${_scopeId}>\u64CD\u4F5C</td><td${_scopeId}>-</td><td${_scopeId}>Button(link)</td><td${_scopeId}>\u5220\u9664</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u53F3\u9501\u5B9A\u5217\uFF0Cwidth=80\uFF0C\u5220\u9664\u5F53\u524D\u884C</td></tr></tbody></table>`);
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
                createVNode("td", null, "`/general/distributorGeneral/distributorGeneralCamp/list`"),
                createVNode("td", null, "\u7279\u8BAD\u8425\u70B9\u5C06\u5217\u8868\u9875")
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
                createVNode("td", null, "`mlt/trainCampApply/page`"),
                createVNode("td", null, "\u7ECF\u9500\u5546\u5206\u9875\u67E5\u8BE2\uFF08pageForDealer\uFF09")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "`mlt/trainCampApply/save`"),
                createVNode("td", null, "\u4FDD\u5B58")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "`mlt/trainCampApply/saveAndSubmit`"),
                createVNode("td", null, "\u4FDD\u5B58\u5E76\u63D0\u4EA4")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "`mlt/trainCampApply/cancel`"),
                createVNode("td", null, "\u53D6\u6D88")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "`mlt/trainCampApply/detail`"),
                createVNode("td", null, "\u67E5\u8BE2\u7533\u8BF7\u8BE6\u60C5")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "`mlt/trainCamp/dealer/page`"),
                createVNode("td", null, "\u7279\u8BAD\u8425\u9009\u62E9\u5206\u9875\uFF08campSelectPage\uFF09")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "`mlt/trainCampApply/companyList`"),
                createVNode("td", null, "\u6CD5\u4EBA\u4E3B\u4F53\u5217\u8868\uFF08getDistributorLegalList\uFF09")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "`mlt/trainCampApply/delete`"),
                createVNode("td", null, "\u5220\u9664\u7533\u8BF7")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "`mlt/trainCampApply/approvalPage`"),
                createVNode("td", null, "\u5BA1\u6279\u5206\u9875\u67E5\u8BE2")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "`mlt/trainCampApply/pushCrm`"),
                createVNode("td", null, "\u540C\u6B65CRM")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "`mlt/trainCampApply/pushOa`"),
                createVNode("td", null, "\u540C\u6B65OA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "`mlt/trainCampApply/pushFdd`"),
                createVNode("td", null, "\u540C\u6B65FDD")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "`mlt/trainCampApply/cancelApply`"),
                createVNode("td", null, "\u53D1\u8D77\u53D6\u6D88\u7533\u8BF7")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "`mlt/trainCampApply/cancelApplyApproval`"),
                createVNode("td", null, "\u53D6\u6D88\u5BA1\u6279")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "`mlt/trainCampApply/campApplyApproval`"),
                createVNode("td", null, "\u7279\u8BAD\u8425\u70B9\u5C06\u5BA1\u6279\uFF08applyApproval\uFF09")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "`mlt/trainCampApply/getSealAuthorizers`"),
                createVNode("td", null, "\u83B7\u53D6\u7528\u5370\u5BA1\u6279\u4EBA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "`mlt/trainCampApply/settleBeforeConfirm`"),
                createVNode("td", null, "\u7ED3\u7B97\u524D\u786E\u8BA4")
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
                createVNode("td", null, "campApplyApproval"),
                createVNode("td", null, "\u7279\u8BAD\u8425\u70B9\u5C06\u7533\u8BF7\u5BA1\u6279"),
                createVNode("td", null, "\u4FDD\u5B58\u5E76\u63D0\u4EA4\u65F6\u89E6\u53D1")
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
                createVNode("td", null, "\u72B6\u6001"),
                createVNode("td", null, "APPLY_STATE"),
                createVNode("td", null, "Select"),
                createVNode("td", null, "\u7533\u8BF7\u72B6\u6001\u7B5B\u9009"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u503C\u96C6MBO.CAMP_APPLY_STATE")
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
            createVNode("code", null, "campApplyApi.page"),
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
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u7533\u8BF7\u552F\u4E00\u7F16\u7801"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u5DE6\u9501\u5B9A\u5217\uFF0Cwidth=180")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7C7B\u578B"),
                createVNode("td", null, "CAMP_TYPE"),
                createVNode("td", null, "Select"),
                createVNode("td", null, "\u7279\u8BAD\u8425\u7C7B\u578B"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u503C\u96C6MBO.CAMP_TYPE\uFF0Cwidth=130")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7279\u8BAD\u8425\u540D\u79F0"),
                createVNode("td", null, "CAMP_NAME"),
                createVNode("td", null, "Button(link)"),
                createVNode("td", null, "\u7279\u8BAD\u8425\u540D\u79F0\uFF0C\u53EF\u70B9\u51FB\u67E5\u770B\u8BE6\u60C5"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u5DE6\u9501\u5B9A\u5217\uFF0Cwidth=160\uFF0C\u70B9\u51FB\u89E6\u53D1handleShowDetail(type='apply')")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u72B6\u6001"),
                createVNode("td", null, "APPLY_STATE"),
                createVNode("td", null, "Select"),
                createVNode("td", null, "\u7533\u8BF7\u72B6\u6001"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u503C\u96C6MBO.CAMP_APPLY_STATE\uFF0Cwidth=130")
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
                createVNode("td", null, "\u57F9\u8BAD\u65F6\u95F4"),
                createVNode("td", null, "PLAN_START_TIME/PLAN_END_TIME"),
                createVNode("td", null, "TextField(\u7EC4\u5408)"),
                createVNode("td", null, "\u57F9\u8BAD\u65F6\u95F4\u8303\u56F4"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, 'width=180\uFF0C\u6E32\u67D3\u4E3A"planStartTime \u81F3 planEndTime"')
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u57F9\u8BAD\u5730\u70B9"),
                createVNode("td", null, "ADDRESS"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u57F9\u8BAD\u5730\u70B9"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u540E\u7AEF\u8FD4\u56DE\uFF0Cwidth=130")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u8BB2\u5E08"),
                createVNode("td", null, "LECTURER"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u8BB2\u5E08\u59D3\u540D"),
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
                createVNode("td", null, "\u7ED3\u7B97\u524D\u786E\u8BA4\u72B6\u6001"),
                createVNode("td", null, "BEFORE_SETTLEMENT_CONFIRM_STATE"),
                createVNode("td", null, "Select"),
                createVNode("td", null, "\u7ED3\u7B97\u524D\u786E\u8BA4\u72B6\u6001"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u503C\u96C6MBO.BEFORE_SETTLEMENT_CONFIRM_STATE\uFF0Cwidth=130")
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
                createVNode("td", null, "CRM\u5355\u53F7"),
                createVNode("td", null, "CRM_ORDER_CODE"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "CRM\u8BA2\u5355\u7F16\u53F7"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u63A8\u9001CRM\u540E\u8FD4\u56DE\uFF0Cwidth=130")
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
                createVNode("td", null, "\u64CD\u4F5C"),
                createVNode("td", null, "-"),
                createVNode("td", null, "Button(link)"),
                createVNode("td", null, "\u7F16\u8F91\u518D\u53D1\u8D77/\u7ED3\u7B97\u524D\u786E\u8BA4/\u67E5\u770B\u6D41\u7A0B/\u5220\u9664"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u53F3\u9501\u5B9A\u5217\uFF0Cwidth=240\uFF0C\u6309\u72B6\u6001\u6761\u4EF6\u663E\u9690")
              ])
            ])
          ]),
          createVNode("h4", null, "\u8BE6\u60C5\u9875\u5B57\u6BB5"),
          createVNode("blockquote", null, [
            createTextVNode("\u7279\u8BAD\u8425\u65E0\u72EC\u7ACB\u8BE6\u60C5\u9875\uFF08\u65E0 detail.tsx\uFF09\uFF0C\u62A5\u540D/\u7F16\u8F91\u901A\u8FC7\u5F39\u7A97\u5185\u5D4C "),
            createVNode("code", null, "components/ApplyInfo/index.tsx"),
            createTextVNode(" \u5B9E\u73B0\u3002ApplyInfo \u5305\u542B\u4E24\u4E2A\u90E8\u5206\uFF1A\u62A5\u540D\u8868\u5355\uFF08applyFormDS\uFF09+ \u53C2\u8BAD\u4EBA\u5458\u5217\u8868\uFF08userListDS\uFF09\u3002")
          ]),
          createVNode("h5", null, "\u62A5\u540D\u8868\u5355\uFF08applyFormDS\uFF09"),
          createVNode("blockquote", null, [
            createTextVNode("\u6570\u636E\u6765\u6E90\uFF1A"),
            createVNode("code", null, "components/ApplyInfo/config.tsx"),
            createTextVNode(" \u7684 "),
            createVNode("code", null, "applyFormDSProps"),
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
                createVNode("td", null, "\u4EA4\u6613\u516C\u53F8"),
                createVNode("td", null, "TRADING_COMPANY_NAME"),
                createVNode("td", null, "TextField+Icon(search)"),
                createVNode("td", null, "\u4EA4\u6613\u516C\u53F8"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u5FC5\u586B\uFF0CreadOnly+\u641C\u7D22\u56FE\u6807\uFF0C\u70B9\u51FB\u5F39\u51FA\u4EA4\u6613\u516C\u53F8\u9009\u62E9\u5F39\u7A97")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5F00\u7968\u8D26\u6237"),
                createVNode("td", null, "LEGAL_ENTITY_NAME"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u5F00\u7968\u8D26\u6237\uFF08\u6CD5\u4EBA\u5355\u4F4D\u540D\u79F0\uFF09"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, '\u5FC5\u586B\uFF0Cdisabled\uFF0Cplaceholder="\u9009\u62E9\u4EA4\u6613\u516C\u53F8\u540E\u81EA\u52A8\u5E26\u51FA"\uFF0C\u9009\u4EA4\u6613\u516C\u53F8\u540E\u81EA\u52A8\u5199\u5165legalEntityName/legalEntityCode/tradingCompanyName/tradingCompanyId')
              ])
            ])
          ]),
          createVNode("h5", null, "\u53C2\u8BAD\u4EBA\u5458\u5217\u8868\uFF08userListDS\uFF09"),
          createVNode("blockquote", null, [
            createTextVNode("\u6570\u636E\u6765\u6E90\uFF1A"),
            createVNode("code", null, "components/ApplyInfo/config.tsx"),
            createTextVNode(" \u7684 "),
            createVNode("code", null, "userListDSProps"),
            createTextVNode("/"),
            createVNode("code", null, "userListDSColumns"),
            createTextVNode('\u3002\u901A\u8FC7"\u6DFB\u52A0"\u6309\u94AE\u65B0\u589E\u884C\uFF0C\u652F\u6301\u591A\u884C\u53C2\u8BAD\u4EBA\u5458\u3002')
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
                createVNode("td", null, "\u81EA\u52A8\u8BA1\u7B97dataSet.indexOf(record)+1\uFF0C\u5DE6\u9501\u5B9A\u5217\uFF0Cwidth=60")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u59D3\u540D"),
                createVNode("td", null, "NAME"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u53C2\u8BAD\u4EBA\u5458\u59D3\u540D"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u5FC5\u586B\uFF0Ceditor\u6A21\u5F0F")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u624B\u673A\u53F7"),
                createVNode("td", null, "PHONE"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u53C2\u8BAD\u4EBA\u5458\u624B\u673A\u53F7"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u5FC5\u586B\uFF0Ceditor\u6A21\u5F0F\uFF0Cwidth=120\uFF0C\u6821\u9A8C\u6B63\u5219/^1[3456789]\\d{9}$/")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6027\u522B"),
                createVNode("td", null, "GENDER"),
                createVNode("td", null, "Select"),
                createVNode("td", null, "\u53C2\u8BAD\u4EBA\u5458\u6027\u522B"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u5FC5\u586B\uFF0C\u503C\u96C6MBO.CAMP_USER_SEX\uFF0Cwidth=80")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5B66\u5386"),
                createVNode("td", null, "EDUCATION"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u53C2\u8BAD\u4EBA\u5458\u5B66\u5386"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u5FC5\u586B\uFF0Ceditor\u6A21\u5F0F")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6240\u5C5E\u95E8\u5E97"),
                createVNode("td", null, "STORE"),
                createVNode("td", null, "TextField+Icon(search)"),
                createVNode("td", null, "\u53C2\u8BAD\u4EBA\u5458\u6240\u5C5E\u95E8\u5E97"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u5FC5\u586B\uFF0CreadOnly+\u641C\u7D22\u56FE\u6807\uFF0C\u70B9\u51FB\u5F39\u51FA\u95E8\u5E97\u9009\u62E9\u5F39\u7A97\uFF0Cwidth=250")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7701\u5E02\u533A"),
                createVNode("td", null, "PROVINCE"),
                createVNode("td", null, "Cascader"),
                createVNode("td", null, "\u53C2\u8BAD\u4EBA\u5458\u6240\u5728\u7701\u5E02\u533A"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u5FC5\u586B\uFF0C\u7EA7\u8054\u9009\u62E9\u5668\uFF0CloadAddressData\u52A8\u6001\u52A0\u8F7D\uFF0Cwidth=180")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u8BE6\u7EC6\u5730\u5740"),
                createVNode("td", null, "ADDRESS"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u53C2\u8BAD\u4EBA\u5458\u8BE6\u7EC6\u5730\u5740"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "editor\u6A21\u5F0F\uFF0Cwidth=160")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5C97\u4F4D"),
                createVNode("td", null, "POST"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u53C2\u8BAD\u4EBA\u5458\u5C97\u4F4D"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u5FC5\u586B\uFF0Ceditor\u6A21\u5F0F")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5165\u804C\u65E5\u671F"),
                createVNode("td", null, "ENTRY_DATE"),
                createVNode("td", null, "DatePicker"),
                createVNode("td", null, "\u53C2\u8BAD\u4EBA\u5458\u5165\u804C\u65E5\u671F"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u5FC5\u586B\uFF0Cwidth=120")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5907\u6CE8"),
                createVNode("td", null, "REMARK"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u5907\u6CE8"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "editor\u6A21\u5F0F\uFF0Cwidth=140")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u64CD\u4F5C"),
                createVNode("td", null, "-"),
                createVNode("td", null, "Button(link)"),
                createVNode("td", null, "\u5220\u9664"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u53F3\u9501\u5B9A\u5217\uFF0Cwidth=80\uFF0C\u5220\u9664\u5F53\u524D\u884C")
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
        _push2(`<h4${_scopeId}>\u5F39\u7A971\uFF1A\u7533\u8BF7\u70B9\u5C06\u5F39\u7A97\uFF08\u7279\u8BAD\u8425\u5217\u8868\u9009\u62E9\uFF0C\u5217\u8868\u9875\u5934\u90E8&quot;\u7533\u8BF7\u70B9\u5C06&quot;\u6309\u94AE\u89E6\u53D1\uFF09</h4><blockquote${_scopeId}>\u6570\u636E\u6765\u6E90\uFF1A<code${_scopeId}>list.tsx</code> \u7684 <code${_scopeId}>handleApply</code> + <code${_scopeId}>stores/listConfig.tsx</code> \u7684 <code${_scopeId}>applyListDSProps</code>/<code${_scopeId}>applyListDScolumns</code>\u3002\u63A5\u53E3 <code${_scopeId}>campApplyApi.campSelectPage</code>\u3002</blockquote><p${_scopeId}>\u5165\u53C2\uFF1A</p><table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u53C2\u6570\u540D</th><th${_scopeId}>\u6765\u6E90</th><th${_scopeId}>\u8BF4\u660E</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>campName</td><td${_scopeId}>\u67E5\u8BE2\u680F\u8F93\u5165</td><td${_scopeId}>\u7279\u8BAD\u8425\u540D\u79F0\u6A21\u7CCA\u67E5\u8BE2</td></tr></tbody></table><p${_scopeId}>\u5217\u8868\u5217\uFF1A\u5E8F\u53F7\u3001\u7C7B\u578B\uFF08\u503C\u96C6MBO.CAMP_TYPE\uFF09\u3001\u7279\u8BAD\u8425\u540D\u79F0\u3001\u57F9\u8BAD\u65F6\u95F4\uFF08planStartTime\u81F3planEndTime\u7EC4\u5408\uFF09\u3001\u57F9\u8BAD\u5730\u70B9\u3001\u8BB2\u5E08\u3001\u64CD\u4F5C\uFF08\u67E5\u770B\u4ECB\u7ECD/\u62A5\u540D\uFF09\u3002</p><p${_scopeId}>\u884C\u64CD\u4F5C\uFF1A</p><ul${_scopeId}><li${_scopeId}>\u67E5\u770B\u4ECB\u7ECD\uFF1A\u5F39\u51FA\u7279\u8BAD\u8425\u8BE6\u60C5\u5F39\u7A97\uFF08CampDetail\u7EC4\u4EF6\uFF0Ctype=&#39;camp&#39;\uFF09</li><li${_scopeId}>\u62A5\u540D\uFF1A\u8C03\u7528 <code${_scopeId}>handleSendApply</code>\uFF0C\u5F39\u51FA\u62A5\u540D\u4FE1\u606F\u5F39\u7A97</li></ul><p${_scopeId}>\u67E5\u8BE2SQL\uFF1A</p><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  tc.CAMP_CODE    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7279\u8BAD\u8425\u7F16\u7801,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  tc.CAMP_NAME    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7279\u8BAD\u8425\u540D\u79F0,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  tc.CAMP_TYPE    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7279\u8BAD\u8425\u7C7B\u578B,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  TO_CHAR(tc.PLAN_START_TIME, </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>YYYY-MM-DD</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u57F9\u8BAD\u5F00\u59CB\u65F6\u95F4,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  TO_CHAR(tc.PLAN_END_TIME, </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>YYYY-MM-DD</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u57F9\u8BAD\u7ED3\u675F\u65F6\u95F4,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  tc.LECTURER     </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u8BB2\u5E08,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  tc.ADDRESS      </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u57F9\u8BAD\u5730\u70B9</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> TRAIN_CAMP tc</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> tc.CAMP_STATUS </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>valid</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (:campName </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>OR</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> tc.CAMP_NAME </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>LIKE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>%</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>||</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> :campName </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>||</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>%</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ORDER BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> tc.CREATE_DATE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>DESC</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u5F39\u7A972\uFF1A\u7279\u8BAD\u8425\u8BE6\u60C5\u5F39\u7A97\uFF08\u7533\u8BF7\u70B9\u5C06\u5F39\u7A97\u884C\u64CD\u4F5C&quot;\u67E5\u770B\u4ECB\u7ECD&quot;\u6216\u5217\u8868&quot;\u7279\u8BAD\u8425\u540D\u79F0&quot;\u70B9\u51FB\u89E6\u53D1\uFF09</h4><blockquote${_scopeId}>\u6570\u636E\u6765\u6E90\uFF1A<code${_scopeId}>list.tsx</code> \u7684 <code${_scopeId}>handleShowDetail</code>\uFF0C\u7EC4\u4EF6 <code${_scopeId}>components/CampDetail</code>\uFF0C\u5165\u53C2 rowData + type\uFF08&#39;camp&#39;\u67E5\u770B\u4ECB\u7ECD/&#39;apply&#39;\u7533\u8BF7\u8BE6\u60C5/&#39;cancel&#39;\u53D6\u6D88\u8BE6\u60C5\uFF09\u3002\u65E0\u786E\u5B9A\u6309\u94AE\uFF0CcancelText=&#39;\u5173\u95ED&#39;\u3002</blockquote><p${_scopeId}>\u5165\u53C2\uFF1A</p><table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u53C2\u6570\u540D</th><th${_scopeId}>\u6765\u6E90</th><th${_scopeId}>\u8BF4\u660E</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>rowData</td><td${_scopeId}>\u5217\u8868/\u5F39\u7A97\u9009\u4E2D\u884C</td><td${_scopeId}>\u7279\u8BAD\u8425\u6216\u7533\u8BF7\u6570\u636E</td></tr><tr${_scopeId}><td${_scopeId}>type</td><td${_scopeId}>\u56FA\u5B9A\u503C</td><td${_scopeId}>&#39;camp&#39;=\u67E5\u770B\u4ECB\u7ECD\uFF0C&#39;apply&#39;=\u7533\u8BF7\u8BE6\u60C5\uFF0C&#39;cancel&#39;=\u53D6\u6D88\u8BE6\u60C5</td></tr></tbody></table><h4${_scopeId}>\u5F39\u7A973\uFF1A\u62A5\u540D\u4FE1\u606F\u5F39\u7A97\uFF08\u7533\u8BF7\u70B9\u5C06\u5F39\u7A97\u884C\u64CD\u4F5C&quot;\u62A5\u540D&quot;\u6216\u5217\u8868\u884C&quot;\u7F16\u8F91\u518D\u53D1\u8D77&quot;\u89E6\u53D1\uFF09</h4><blockquote${_scopeId}>\u6570\u636E\u6765\u6E90\uFF1A<code${_scopeId}>list.tsx</code> \u7684 <code${_scopeId}>handleSendApply</code>/<code${_scopeId}>handleUpdate</code>\uFF0C\u7EC4\u4EF6 <code${_scopeId}>components/ApplyInfo</code>\u3002\u5F39\u7A97\u542B\u81EA\u5B9A\u4E49footer\uFF1A\u4FDD\u5B58\uFF08onOk\uFF09\u3001\u4FDD\u5B58\u5E76\u63D0\u4EA4\uFF08\u81EA\u5B9A\u4E49\u6309\u94AE\uFF09\u3002\u7F16\u8F91\u6A21\u5F0F\u4F20\u5165applyCode\u52A0\u8F7D\u5DF2\u6709\u6570\u636E\u3002</blockquote><p${_scopeId}>\u5165\u53C2\uFF1A</p><table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u53C2\u6570\u540D</th><th${_scopeId}>\u6765\u6E90</th><th${_scopeId}>\u8BF4\u660E</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>campCode</td><td${_scopeId}>\u7279\u8BAD\u8425\u9009\u62E9</td><td${_scopeId}>\u7279\u8BAD\u8425\u7F16\u7801</td></tr><tr${_scopeId}><td${_scopeId}>specialTrainCampApplyId</td><td${_scopeId}>\u7279\u8BAD\u8425\u9009\u62E9</td><td${_scopeId}>\u7279\u8BAD\u8425\u7533\u8BF7ID</td></tr><tr${_scopeId}><td${_scopeId}>applyCode</td><td${_scopeId}>\u7F16\u8F91\u6A21\u5F0F</td><td${_scopeId}>\u7533\u8BF7\u7F16\u7801\uFF08\u7F16\u8F91\u65F6\u52A0\u8F7D\u5DF2\u6709\u6570\u636E\uFF09</td></tr><tr${_scopeId}><td${_scopeId}>tradingCompanyName</td><td${_scopeId}>\u4EA4\u6613\u516C\u53F8\u9009\u62E9</td><td${_scopeId}>\u4EA4\u6613\u516C\u53F8\u540D\u79F0</td></tr><tr${_scopeId}><td${_scopeId}>tradingCompanyId</td><td${_scopeId}>\u4EA4\u6613\u516C\u53F8\u9009\u62E9</td><td${_scopeId}>\u4EA4\u6613\u516C\u53F8ID</td></tr><tr${_scopeId}><td${_scopeId}>legalEntityName</td><td${_scopeId}>\u4EA4\u6613\u516C\u53F8\u9009\u62E9</td><td${_scopeId}>\u6CD5\u4EBA\u5355\u4F4D\u540D\u79F0</td></tr><tr${_scopeId}><td${_scopeId}>legalEntityCode</td><td${_scopeId}>\u4EA4\u6613\u516C\u53F8\u9009\u62E9</td><td${_scopeId}>\u6CD5\u4EBA\u5355\u4F4D\u7F16\u7801</td></tr><tr${_scopeId}><td${_scopeId}>tradingCompanyDetailTDTOList</td><td${_scopeId}>\u53C2\u8BAD\u4EBA\u5458\u5217\u8868</td><td${_scopeId}>\u53C2\u8BAD\u4EBA\u5458\u660E\u7EC6</td></tr></tbody></table><p${_scopeId}>\u63D0\u4EA4\u903B\u8F91\uFF1A</p><ul${_scopeId}><li${_scopeId}>\u4FDD\u5B58\uFF1A\u8C03\u7528 <code${_scopeId}>campApplyApi.save</code></li><li${_scopeId}>\u4FDD\u5B58\u5E76\u63D0\u4EA4\uFF1A\u8C03\u7528 <code${_scopeId}>campApplyApi.saveAndSubmit</code>\uFF0C\u89E6\u53D1campApplyApproval\u5BA1\u6279\u6D41</li><li${_scopeId}>\u53C2\u8BAD\u4EBA\u5458\u6570\u636E\u8F6C\u6362\uFF1AentryDate\u683C\u5F0F\u5316\u4E3AYYYY-MM-DD\uFF0Cstore\u62C6\u4E3Astore/storeCode\uFF0Cprovince\u7EA7\u8054\u62C6\u4E3AprovinceName/provinceCode/cityName/cityCode/areaName/areaCode</li></ul><h4${_scopeId}>\u5F39\u7A974\uFF1A\u4EA4\u6613\u516C\u53F8\u9009\u62E9\u5F39\u7A97\uFF08\u62A5\u540D\u4FE1\u606F\u5F39\u7A97&quot;\u4EA4\u6613\u516C\u53F8&quot;\u5B57\u6BB5\u641C\u7D22\u56FE\u6807\u89E6\u53D1\uFF09</h4><blockquote${_scopeId}>\u6570\u636E\u6765\u6E90\uFF1A<code${_scopeId}>components/ApplyInfo/index.tsx</code> \u7684 <code${_scopeId}>handleShowCompanyList</code> + <code${_scopeId}>components/ApplyInfo/config.tsx</code> \u7684 <code${_scopeId}>companyListDSProps</code>/<code${_scopeId}>companyListDSColumns</code>\u3002\u63A5\u53E3 <code${_scopeId}>campApplyApi.companyList</code>\uFF0C\u5355\u9009\uFF0C\u5165\u53C2 distributorCode\uFF08\u53D6\u81EA\u5F53\u524D\u7528\u6237 additionInfo.DC\uFF09\u3002</blockquote><p${_scopeId}>\u5165\u53C2\uFF1A</p><table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u53C2\u6570\u540D</th><th${_scopeId}>\u6765\u6E90</th><th${_scopeId}>\u8BF4\u660E</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>distributorCode</td><td${_scopeId}>\u5F53\u524D\u7528\u6237 additionInfo.DC</td><td${_scopeId}>\u7ECF\u9500\u5546\u7F16\u7801</td></tr></tbody></table><p${_scopeId}>\u5217\u8868\u5217\uFF1A\u5F00\u7968\u5355\u4F4D\u7F16\u7801(legalEntityCode)\u3001\u5F00\u7968\u5355\u4F4D\u540D\u79F0(legalEntityName)\u3001\u4EA4\u6613\u516C\u53F8ID(tradingCompanyId)\u3001\u4EA4\u6613\u516C\u53F8\u540D\u79F0(tradingCompanyName)\u3002</p><p${_scopeId}>\u9009\u62E9\u540E\u56DE\u5199\uFF1AtradingCompanyName\u3001tradingCompanyId\u3001legalEntityName\u3001legalEntityCode\u3002</p><p${_scopeId}>\u67E5\u8BE2SQL\uFF1A</p><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  tc.LEGAL_ENTITY_CODE    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5F00\u7968\u5355\u4F4D\u7F16\u7801,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  tc.LEGAL_ENTITY_NAME    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5F00\u7968\u5355\u4F4D\u540D\u79F0,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  tc.TRADING_COMPANY_ID   </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u4EA4\u6613\u516C\u53F8ID,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  tc.TRADING_COMPANY_NAME </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u4EA4\u6613\u516C\u53F8\u540D\u79F0</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> MBO_TRADING_COMPANY tc</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> tc.DISTRIBUTOR_CODE </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> :distributorCode;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u5F39\u7A975\uFF1A\u95E8\u5E97\u9009\u62E9\u5F39\u7A97\uFF08\u53C2\u8BAD\u4EBA\u5458\u5217\u8868&quot;\u6240\u5C5E\u95E8\u5E97&quot;\u5B57\u6BB5\u641C\u7D22\u56FE\u6807\u89E6\u53D1\uFF09</h4><blockquote${_scopeId}>\u6570\u636E\u6765\u6E90\uFF1A<code${_scopeId}>components/ApplyInfo/config.tsx</code> \u7684 <code${_scopeId}>handleShowStoreList</code> + <code${_scopeId}>storeDS</code>/<code${_scopeId}>storeListDSColumns</code>\u3002\u63A5\u53E3 <code${_scopeId}>campApi.storePage</code>\uFF0C\u5355\u9009\u3002</blockquote><p${_scopeId}>\u5165\u53C2\uFF1A</p><table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u53C2\u6570\u540D</th><th${_scopeId}>\u6765\u6E90</th><th${_scopeId}>\u8BF4\u660E</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>terminalCode</td><td${_scopeId}>\u67E5\u8BE2\u680F\u8F93\u5165</td><td${_scopeId}>\u95E8\u5E97\u7F16\u7801</td></tr><tr${_scopeId}><td${_scopeId}>terminalName</td><td${_scopeId}>\u67E5\u8BE2\u680F\u8F93\u5165</td><td${_scopeId}>\u95E8\u5E97\u540D\u79F0</td></tr></tbody></table><p${_scopeId}>\u5217\u8868\u5217\uFF1A\u95E8\u5E97\u7F16\u7801\u3001\u95E8\u5E97\u540D\u79F0\u3001\u95E8\u5E97\u5730\u5740\u3001\u8D1F\u8D23\u4EBA\u3001\u8054\u7CFB\u7535\u8BDD\u3002</p><p${_scopeId}>\u9009\u62E9\u540E\u56DE\u5199\uFF1Astore\uFF08\u5B8C\u6574\u5BF9\u8C61\uFF09\u5199\u5165userListDS\u5F53\u524D\u884C\u3002</p><h4${_scopeId}>\u5F39\u7A976\uFF1A\u53D6\u6D88\u7533\u8BF7\u5F39\u7A97\uFF08\u5217\u8868\u9875&quot;\u53D6\u6D88\u70B9\u5C06&quot;\u6309\u94AE\u89E6\u53D1\uFF09</h4><blockquote${_scopeId}>\u6570\u636E\u6765\u6E90\uFF1A<code${_scopeId}>list.tsx</code> \u7684 <code${_scopeId}>handleCancel</code>\uFF0CDataSet \u4E3A <code${_scopeId}>cancelApplyFormDSProps</code>\u3002\u5F39\u7A97\u5185\u5D4C\u53D6\u6D88\u539F\u56E0\u8868\u5355 + CampDetail\uFF08type=&#39;cancel&#39;\uFF09\u3002</blockquote><p${_scopeId}>\u5165\u53C2\uFF1A</p><table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u53C2\u6570\u540D</th><th${_scopeId}>\u6765\u6E90</th><th${_scopeId}>\u8BF4\u660E</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>applyCode</td><td${_scopeId}>\u5217\u8868\u9009\u4E2D\u884C</td><td${_scopeId}>\u7533\u8BF7\u7F16\u7801</td></tr><tr${_scopeId}><td${_scopeId}>cancelReason</td><td${_scopeId}>\u624B\u52A8\u8F93\u5165</td><td${_scopeId}>\u53D6\u6D88\u539F\u56E0\uFF08\u5FC5\u586B\uFF0CTextArea\uFF09</td></tr></tbody></table><p${_scopeId}>\u67E5\u8BE2SQL\uFF1A</p><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  tca.APPLY_CODE    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7533\u8BF7\u7F16\u7801,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  TO_CHAR(tca.PLAN_START_TIME, </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>YYYY-MM-DD</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u57F9\u8BAD\u5F00\u59CB\u65F6\u95F4,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  tca.APPROVAL_STATE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5BA1\u6838\u72B6\u6001,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}>ROUND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>((tca.PLAN_START_TIME </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>-</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>SYSDATE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>)) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u8DDD\u5F00\u59CB\u5929\u6570</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> TRAIN_CAMP_APPLY tca</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> tca.APPLY_CODE </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> :applyCode;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u5F39\u7A977\uFF1A\u7ED3\u7B97\u524D\u786E\u8BA4\u5F39\u7A97\uFF08\u5217\u8868\u884C&quot;\u7ED3\u7B97\u524D\u786E\u8BA4&quot;\u6309\u94AE\u89E6\u53D1\uFF09</h4><blockquote${_scopeId}>\u6570\u636E\u6765\u6E90\uFF1A<code${_scopeId}>list.tsx</code> \u7684 <code${_scopeId}>handleSettlementConfirm</code>\uFF0C\u7EC4\u4EF6 <code${_scopeId}>components/CampSettleDetail</code>\uFF0C\u5165\u53C2 rowData\u3002\u5F39\u7A97\u542B\u81EA\u5B9A\u4E49footer\uFF1A\u786E\u8BA4\uFF08onOk\uFF09\u3001\u9A73\u56DE\uFF08\u81EA\u5B9A\u4E49\u6309\u94AE\uFF09\u3002</blockquote><p${_scopeId}>\u5165\u53C2\uFF1A</p><table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u53C2\u6570\u540D</th><th${_scopeId}>\u6765\u6E90</th><th${_scopeId}>\u8BF4\u660E</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>applyCode</td><td${_scopeId}>\u5217\u8868\u9009\u4E2D\u884C</td><td${_scopeId}>\u7533\u8BF7\u7F16\u7801</td></tr><tr${_scopeId}><td${_scopeId}>beforeSettlementConfirmState</td><td${_scopeId}>\u64CD\u4F5C\u7C7B\u578B</td><td${_scopeId}>confirm=\u786E\u8BA4\uFF0Creject=\u9A73\u56DE</td></tr></tbody></table><p${_scopeId}>\u63D0\u4EA4\u63A5\u53E3\uFF1A<code${_scopeId}>campApplyApi.settleBeforeConfirm</code>\uFF0Cdata={ applyCode, beforeSettlementConfirmState }\u3002</p><p${_scopeId}>\u67E5\u8BE2SQL\uFF1A</p><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  tca.APPLY_CODE    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7533\u8BF7\u7F16\u7801,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  tca.CAMP_NAME     </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7279\u8BAD\u8425\u540D\u79F0,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  tca.BEFORE_SETTLEMENT_CONFIRM_STATE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7ED3\u7B97\u524D\u786E\u8BA4\u72B6\u6001</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> TRAIN_CAMP_APPLY tca</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> tca.APPLY_CODE </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> :applyCode</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> tca.BEFORE_SETTLEMENT_CONFIRM_STATE </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>to_be_confirm</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u5F39\u7A978\uFF1A\u6D41\u7A0B\u6458\u8981\u5F39\u7A97\uFF08\u5217\u8868\u884C&quot;\u67E5\u770B\u6D41\u7A0B&quot;\u6309\u94AE\u89E6\u53D1\uFF09</h4><blockquote${_scopeId}>\u6570\u636E\u6765\u6E90\uFF1A<code${_scopeId}>list.tsx</code> \u7684 <code${_scopeId}>handleShowProcess</code>\uFF0C\u7EC4\u4EF6 <code${_scopeId}>components/ProcessDetail</code>\uFF0C\u5165\u53C2 applyCode\u3002\u65E0\u786E\u5B9A\u6309\u94AE\uFF0CcancelText=&#39;\u5173\u95ED&#39;\u3002</blockquote><p${_scopeId}>\u5165\u53C2\uFF1A</p><table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u53C2\u6570\u540D</th><th${_scopeId}>\u6765\u6E90</th><th${_scopeId}>\u8BF4\u660E</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>applyCode</td><td${_scopeId}>\u5217\u8868\u9009\u4E2D\u884C</td><td${_scopeId}>\u7533\u8BF7\u7F16\u7801</td></tr></tbody></table>`);
      } else {
        return [
          createVNode("h4", null, '\u5F39\u7A971\uFF1A\u7533\u8BF7\u70B9\u5C06\u5F39\u7A97\uFF08\u7279\u8BAD\u8425\u5217\u8868\u9009\u62E9\uFF0C\u5217\u8868\u9875\u5934\u90E8"\u7533\u8BF7\u70B9\u5C06"\u6309\u94AE\u89E6\u53D1\uFF09'),
          createVNode("blockquote", null, [
            createTextVNode("\u6570\u636E\u6765\u6E90\uFF1A"),
            createVNode("code", null, "list.tsx"),
            createTextVNode(" \u7684 "),
            createVNode("code", null, "handleApply"),
            createTextVNode(" + "),
            createVNode("code", null, "stores/listConfig.tsx"),
            createTextVNode(" \u7684 "),
            createVNode("code", null, "applyListDSProps"),
            createTextVNode("/"),
            createVNode("code", null, "applyListDScolumns"),
            createTextVNode("\u3002\u63A5\u53E3 "),
            createVNode("code", null, "campApplyApi.campSelectPage"),
            createTextVNode("\u3002")
          ]),
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
                createVNode("td", null, "campName"),
                createVNode("td", null, "\u67E5\u8BE2\u680F\u8F93\u5165"),
                createVNode("td", null, "\u7279\u8BAD\u8425\u540D\u79F0\u6A21\u7CCA\u67E5\u8BE2")
              ])
            ])
          ]),
          createVNode("p", null, "\u5217\u8868\u5217\uFF1A\u5E8F\u53F7\u3001\u7C7B\u578B\uFF08\u503C\u96C6MBO.CAMP_TYPE\uFF09\u3001\u7279\u8BAD\u8425\u540D\u79F0\u3001\u57F9\u8BAD\u65F6\u95F4\uFF08planStartTime\u81F3planEndTime\u7EC4\u5408\uFF09\u3001\u57F9\u8BAD\u5730\u70B9\u3001\u8BB2\u5E08\u3001\u64CD\u4F5C\uFF08\u67E5\u770B\u4ECB\u7ECD/\u62A5\u540D\uFF09\u3002"),
          createVNode("p", null, "\u884C\u64CD\u4F5C\uFF1A"),
          createVNode("ul", null, [
            createVNode("li", null, "\u67E5\u770B\u4ECB\u7ECD\uFF1A\u5F39\u51FA\u7279\u8BAD\u8425\u8BE6\u60C5\u5F39\u7A97\uFF08CampDetail\u7EC4\u4EF6\uFF0Ctype='camp'\uFF09"),
            createVNode("li", null, [
              createTextVNode("\u62A5\u540D\uFF1A\u8C03\u7528 "),
              createVNode("code", null, "handleSendApply"),
              createTextVNode("\uFF0C\u5F39\u51FA\u62A5\u540D\u4FE1\u606F\u5F39\u7A97")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  tc.CAMP_CODE    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7279\u8BAD\u8425\u7F16\u7801,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  tc.CAMP_NAME    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7279\u8BAD\u8425\u540D\u79F0,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  tc.CAMP_TYPE    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7279\u8BAD\u8425\u7C7B\u578B,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  TO_CHAR(tc.PLAN_START_TIME, "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "YYYY-MM-DD"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u57F9\u8BAD\u5F00\u59CB\u65F6\u95F4,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  TO_CHAR(tc.PLAN_END_TIME, "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "YYYY-MM-DD"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u57F9\u8BAD\u7ED3\u675F\u65F6\u95F4,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  tc.LECTURER     "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u8BB2\u5E08,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  tc.ADDRESS      "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u57F9\u8BAD\u5730\u70B9")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " TRAIN_CAMP tc")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " tc.CAMP_STATUS "),
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " (:campName "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NULL"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "OR"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " tc.CAMP_NAME "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "LIKE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "%"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "||"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " :campName "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "||"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "%"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ")")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ORDER BY"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " tc.CREATE_DATE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "DESC"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, '\u5F39\u7A972\uFF1A\u7279\u8BAD\u8425\u8BE6\u60C5\u5F39\u7A97\uFF08\u7533\u8BF7\u70B9\u5C06\u5F39\u7A97\u884C\u64CD\u4F5C"\u67E5\u770B\u4ECB\u7ECD"\u6216\u5217\u8868"\u7279\u8BAD\u8425\u540D\u79F0"\u70B9\u51FB\u89E6\u53D1\uFF09'),
          createVNode("blockquote", null, [
            createTextVNode("\u6570\u636E\u6765\u6E90\uFF1A"),
            createVNode("code", null, "list.tsx"),
            createTextVNode(" \u7684 "),
            createVNode("code", null, "handleShowDetail"),
            createTextVNode("\uFF0C\u7EC4\u4EF6 "),
            createVNode("code", null, "components/CampDetail"),
            createTextVNode("\uFF0C\u5165\u53C2 rowData + type\uFF08'camp'\u67E5\u770B\u4ECB\u7ECD/'apply'\u7533\u8BF7\u8BE6\u60C5/'cancel'\u53D6\u6D88\u8BE6\u60C5\uFF09\u3002\u65E0\u786E\u5B9A\u6309\u94AE\uFF0CcancelText='\u5173\u95ED'\u3002")
          ]),
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
                createVNode("td", null, "rowData"),
                createVNode("td", null, "\u5217\u8868/\u5F39\u7A97\u9009\u4E2D\u884C"),
                createVNode("td", null, "\u7279\u8BAD\u8425\u6216\u7533\u8BF7\u6570\u636E")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "type"),
                createVNode("td", null, "\u56FA\u5B9A\u503C"),
                createVNode("td", null, "'camp'=\u67E5\u770B\u4ECB\u7ECD\uFF0C'apply'=\u7533\u8BF7\u8BE6\u60C5\uFF0C'cancel'=\u53D6\u6D88\u8BE6\u60C5")
              ])
            ])
          ]),
          createVNode("h4", null, '\u5F39\u7A973\uFF1A\u62A5\u540D\u4FE1\u606F\u5F39\u7A97\uFF08\u7533\u8BF7\u70B9\u5C06\u5F39\u7A97\u884C\u64CD\u4F5C"\u62A5\u540D"\u6216\u5217\u8868\u884C"\u7F16\u8F91\u518D\u53D1\u8D77"\u89E6\u53D1\uFF09'),
          createVNode("blockquote", null, [
            createTextVNode("\u6570\u636E\u6765\u6E90\uFF1A"),
            createVNode("code", null, "list.tsx"),
            createTextVNode(" \u7684 "),
            createVNode("code", null, "handleSendApply"),
            createTextVNode("/"),
            createVNode("code", null, "handleUpdate"),
            createTextVNode("\uFF0C\u7EC4\u4EF6 "),
            createVNode("code", null, "components/ApplyInfo"),
            createTextVNode("\u3002\u5F39\u7A97\u542B\u81EA\u5B9A\u4E49footer\uFF1A\u4FDD\u5B58\uFF08onOk\uFF09\u3001\u4FDD\u5B58\u5E76\u63D0\u4EA4\uFF08\u81EA\u5B9A\u4E49\u6309\u94AE\uFF09\u3002\u7F16\u8F91\u6A21\u5F0F\u4F20\u5165applyCode\u52A0\u8F7D\u5DF2\u6709\u6570\u636E\u3002")
          ]),
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
                createVNode("td", null, "campCode"),
                createVNode("td", null, "\u7279\u8BAD\u8425\u9009\u62E9"),
                createVNode("td", null, "\u7279\u8BAD\u8425\u7F16\u7801")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "specialTrainCampApplyId"),
                createVNode("td", null, "\u7279\u8BAD\u8425\u9009\u62E9"),
                createVNode("td", null, "\u7279\u8BAD\u8425\u7533\u8BF7ID")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "applyCode"),
                createVNode("td", null, "\u7F16\u8F91\u6A21\u5F0F"),
                createVNode("td", null, "\u7533\u8BF7\u7F16\u7801\uFF08\u7F16\u8F91\u65F6\u52A0\u8F7D\u5DF2\u6709\u6570\u636E\uFF09")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "tradingCompanyName"),
                createVNode("td", null, "\u4EA4\u6613\u516C\u53F8\u9009\u62E9"),
                createVNode("td", null, "\u4EA4\u6613\u516C\u53F8\u540D\u79F0")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "tradingCompanyId"),
                createVNode("td", null, "\u4EA4\u6613\u516C\u53F8\u9009\u62E9"),
                createVNode("td", null, "\u4EA4\u6613\u516C\u53F8ID")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "legalEntityName"),
                createVNode("td", null, "\u4EA4\u6613\u516C\u53F8\u9009\u62E9"),
                createVNode("td", null, "\u6CD5\u4EBA\u5355\u4F4D\u540D\u79F0")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "legalEntityCode"),
                createVNode("td", null, "\u4EA4\u6613\u516C\u53F8\u9009\u62E9"),
                createVNode("td", null, "\u6CD5\u4EBA\u5355\u4F4D\u7F16\u7801")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "tradingCompanyDetailTDTOList"),
                createVNode("td", null, "\u53C2\u8BAD\u4EBA\u5458\u5217\u8868"),
                createVNode("td", null, "\u53C2\u8BAD\u4EBA\u5458\u660E\u7EC6")
              ])
            ])
          ]),
          createVNode("p", null, "\u63D0\u4EA4\u903B\u8F91\uFF1A"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createTextVNode("\u4FDD\u5B58\uFF1A\u8C03\u7528 "),
              createVNode("code", null, "campApplyApi.save")
            ]),
            createVNode("li", null, [
              createTextVNode("\u4FDD\u5B58\u5E76\u63D0\u4EA4\uFF1A\u8C03\u7528 "),
              createVNode("code", null, "campApplyApi.saveAndSubmit"),
              createTextVNode("\uFF0C\u89E6\u53D1campApplyApproval\u5BA1\u6279\u6D41")
            ]),
            createVNode("li", null, "\u53C2\u8BAD\u4EBA\u5458\u6570\u636E\u8F6C\u6362\uFF1AentryDate\u683C\u5F0F\u5316\u4E3AYYYY-MM-DD\uFF0Cstore\u62C6\u4E3Astore/storeCode\uFF0Cprovince\u7EA7\u8054\u62C6\u4E3AprovinceName/provinceCode/cityName/cityCode/areaName/areaCode")
          ]),
          createVNode("h4", null, '\u5F39\u7A974\uFF1A\u4EA4\u6613\u516C\u53F8\u9009\u62E9\u5F39\u7A97\uFF08\u62A5\u540D\u4FE1\u606F\u5F39\u7A97"\u4EA4\u6613\u516C\u53F8"\u5B57\u6BB5\u641C\u7D22\u56FE\u6807\u89E6\u53D1\uFF09'),
          createVNode("blockquote", null, [
            createTextVNode("\u6570\u636E\u6765\u6E90\uFF1A"),
            createVNode("code", null, "components/ApplyInfo/index.tsx"),
            createTextVNode(" \u7684 "),
            createVNode("code", null, "handleShowCompanyList"),
            createTextVNode(" + "),
            createVNode("code", null, "components/ApplyInfo/config.tsx"),
            createTextVNode(" \u7684 "),
            createVNode("code", null, "companyListDSProps"),
            createTextVNode("/"),
            createVNode("code", null, "companyListDSColumns"),
            createTextVNode("\u3002\u63A5\u53E3 "),
            createVNode("code", null, "campApplyApi.companyList"),
            createTextVNode("\uFF0C\u5355\u9009\uFF0C\u5165\u53C2 distributorCode\uFF08\u53D6\u81EA\u5F53\u524D\u7528\u6237 additionInfo.DC\uFF09\u3002")
          ]),
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
                createVNode("td", null, "distributorCode"),
                createVNode("td", null, "\u5F53\u524D\u7528\u6237 additionInfo.DC"),
                createVNode("td", null, "\u7ECF\u9500\u5546\u7F16\u7801")
              ])
            ])
          ]),
          createVNode("p", null, "\u5217\u8868\u5217\uFF1A\u5F00\u7968\u5355\u4F4D\u7F16\u7801(legalEntityCode)\u3001\u5F00\u7968\u5355\u4F4D\u540D\u79F0(legalEntityName)\u3001\u4EA4\u6613\u516C\u53F8ID(tradingCompanyId)\u3001\u4EA4\u6613\u516C\u53F8\u540D\u79F0(tradingCompanyName)\u3002"),
          createVNode("p", null, "\u9009\u62E9\u540E\u56DE\u5199\uFF1AtradingCompanyName\u3001tradingCompanyId\u3001legalEntityName\u3001legalEntityCode\u3002"),
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  tc.LEGAL_ENTITY_CODE    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5F00\u7968\u5355\u4F4D\u7F16\u7801,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  tc.LEGAL_ENTITY_NAME    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5F00\u7968\u5355\u4F4D\u540D\u79F0,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  tc.TRADING_COMPANY_ID   "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u4EA4\u6613\u516C\u53F8ID,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  tc.TRADING_COMPANY_NAME "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u4EA4\u6613\u516C\u53F8\u540D\u79F0")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " MBO_TRADING_COMPANY tc")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " tc.DISTRIBUTOR_CODE "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " :distributorCode;")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, '\u5F39\u7A975\uFF1A\u95E8\u5E97\u9009\u62E9\u5F39\u7A97\uFF08\u53C2\u8BAD\u4EBA\u5458\u5217\u8868"\u6240\u5C5E\u95E8\u5E97"\u5B57\u6BB5\u641C\u7D22\u56FE\u6807\u89E6\u53D1\uFF09'),
          createVNode("blockquote", null, [
            createTextVNode("\u6570\u636E\u6765\u6E90\uFF1A"),
            createVNode("code", null, "components/ApplyInfo/config.tsx"),
            createTextVNode(" \u7684 "),
            createVNode("code", null, "handleShowStoreList"),
            createTextVNode(" + "),
            createVNode("code", null, "storeDS"),
            createTextVNode("/"),
            createVNode("code", null, "storeListDSColumns"),
            createTextVNode("\u3002\u63A5\u53E3 "),
            createVNode("code", null, "campApi.storePage"),
            createTextVNode("\uFF0C\u5355\u9009\u3002")
          ]),
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
                createVNode("td", null, "terminalCode"),
                createVNode("td", null, "\u67E5\u8BE2\u680F\u8F93\u5165"),
                createVNode("td", null, "\u95E8\u5E97\u7F16\u7801")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "terminalName"),
                createVNode("td", null, "\u67E5\u8BE2\u680F\u8F93\u5165"),
                createVNode("td", null, "\u95E8\u5E97\u540D\u79F0")
              ])
            ])
          ]),
          createVNode("p", null, "\u5217\u8868\u5217\uFF1A\u95E8\u5E97\u7F16\u7801\u3001\u95E8\u5E97\u540D\u79F0\u3001\u95E8\u5E97\u5730\u5740\u3001\u8D1F\u8D23\u4EBA\u3001\u8054\u7CFB\u7535\u8BDD\u3002"),
          createVNode("p", null, "\u9009\u62E9\u540E\u56DE\u5199\uFF1Astore\uFF08\u5B8C\u6574\u5BF9\u8C61\uFF09\u5199\u5165userListDS\u5F53\u524D\u884C\u3002"),
          createVNode("h4", null, '\u5F39\u7A976\uFF1A\u53D6\u6D88\u7533\u8BF7\u5F39\u7A97\uFF08\u5217\u8868\u9875"\u53D6\u6D88\u70B9\u5C06"\u6309\u94AE\u89E6\u53D1\uFF09'),
          createVNode("blockquote", null, [
            createTextVNode("\u6570\u636E\u6765\u6E90\uFF1A"),
            createVNode("code", null, "list.tsx"),
            createTextVNode(" \u7684 "),
            createVNode("code", null, "handleCancel"),
            createTextVNode("\uFF0CDataSet \u4E3A "),
            createVNode("code", null, "cancelApplyFormDSProps"),
            createTextVNode("\u3002\u5F39\u7A97\u5185\u5D4C\u53D6\u6D88\u539F\u56E0\u8868\u5355 + CampDetail\uFF08type='cancel'\uFF09\u3002")
          ]),
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
                createVNode("td", null, "\u53D6\u6D88\u539F\u56E0\uFF08\u5FC5\u586B\uFF0CTextArea\uFF09")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  tca.APPLY_CODE    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7533\u8BF7\u7F16\u7801,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  TO_CHAR(tca.PLAN_START_TIME, "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "YYYY-MM-DD"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u57F9\u8BAD\u5F00\u59CB\u65F6\u95F4,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  tca.APPROVAL_STATE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5BA1\u6838\u72B6\u6001,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#82AAFF" } }, "ROUND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "((tca.PLAN_START_TIME "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "-"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#C792EA" } }, "SYSDATE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ")) "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u8DDD\u5F00\u59CB\u5929\u6570")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " TRAIN_CAMP_APPLY tca")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " tca.APPLY_CODE "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " :applyCode;")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, '\u5F39\u7A977\uFF1A\u7ED3\u7B97\u524D\u786E\u8BA4\u5F39\u7A97\uFF08\u5217\u8868\u884C"\u7ED3\u7B97\u524D\u786E\u8BA4"\u6309\u94AE\u89E6\u53D1\uFF09'),
          createVNode("blockquote", null, [
            createTextVNode("\u6570\u636E\u6765\u6E90\uFF1A"),
            createVNode("code", null, "list.tsx"),
            createTextVNode(" \u7684 "),
            createVNode("code", null, "handleSettlementConfirm"),
            createTextVNode("\uFF0C\u7EC4\u4EF6 "),
            createVNode("code", null, "components/CampSettleDetail"),
            createTextVNode("\uFF0C\u5165\u53C2 rowData\u3002\u5F39\u7A97\u542B\u81EA\u5B9A\u4E49footer\uFF1A\u786E\u8BA4\uFF08onOk\uFF09\u3001\u9A73\u56DE\uFF08\u81EA\u5B9A\u4E49\u6309\u94AE\uFF09\u3002")
          ]),
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
                createVNode("td", null, "beforeSettlementConfirmState"),
                createVNode("td", null, "\u64CD\u4F5C\u7C7B\u578B"),
                createVNode("td", null, "confirm=\u786E\u8BA4\uFF0Creject=\u9A73\u56DE")
              ])
            ])
          ]),
          createVNode("p", null, [
            createTextVNode("\u63D0\u4EA4\u63A5\u53E3\uFF1A"),
            createVNode("code", null, "campApplyApi.settleBeforeConfirm"),
            createTextVNode("\uFF0Cdata={ applyCode, beforeSettlementConfirmState }\u3002")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  tca.APPLY_CODE    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7533\u8BF7\u7F16\u7801,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  tca.CAMP_NAME     "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7279\u8BAD\u8425\u540D\u79F0,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  tca.BEFORE_SETTLEMENT_CONFIRM_STATE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7ED3\u7B97\u524D\u786E\u8BA4\u72B6\u6001")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " TRAIN_CAMP_APPLY tca")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " tca.APPLY_CODE "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " :applyCode")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " tca.BEFORE_SETTLEMENT_CONFIRM_STATE "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "to_be_confirm"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, '\u5F39\u7A978\uFF1A\u6D41\u7A0B\u6458\u8981\u5F39\u7A97\uFF08\u5217\u8868\u884C"\u67E5\u770B\u6D41\u7A0B"\u6309\u94AE\u89E6\u53D1\uFF09'),
          createVNode("blockquote", null, [
            createTextVNode("\u6570\u636E\u6765\u6E90\uFF1A"),
            createVNode("code", null, "list.tsx"),
            createTextVNode(" \u7684 "),
            createVNode("code", null, "handleShowProcess"),
            createTextVNode("\uFF0C\u7EC4\u4EF6 "),
            createVNode("code", null, "components/ProcessDetail"),
            createTextVNode("\uFF0C\u5165\u53C2 applyCode\u3002\u65E0\u786E\u5B9A\u6309\u94AE\uFF0CcancelText='\u5173\u95ED'\u3002")
          ]),
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
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, { title: "\u5176\u4ED6\u6309\u94AE" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<blockquote${_scopeId}>\u6570\u636E\u6765\u6E90\uFF1A<code${_scopeId}>list.tsx</code>\u3002\u6743\u9650\u524D\u7F00 <code${_scopeId}>hzero.general_manage.distributor.distributor_general_camp.ps.</code>\u3002\u7279\u8BAD\u8425\u65E0\u72EC\u7ACB\u8BE6\u60C5\u9875\uFF0C\u4FDD\u5B58/\u4FDD\u5B58\u5E76\u63D0\u4EA4\u5728\u62A5\u540D\u4FE1\u606F\u5F39\u7A97footer\u4E2D\u3002</blockquote><table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5E8F\u53F7</th><th${_scopeId}>\u6309\u94AE\u540D\u79F0</th><th${_scopeId}>\u6240\u5728\u4F4D\u7F6E</th><th${_scopeId}>\u663E\u9690\u6761\u4EF6</th><th${_scopeId}>\u4E1A\u52A1\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>1</td><td${_scopeId}>\u7533\u8BF7\u70B9\u5C06</td><td${_scopeId}>\u5217\u8868\u9875\u5934\u90E8</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u5F39\u51FA\u7279\u8BAD\u8425\u5217\u8868\uFF0C\u9009\u62E9\u540E\u62A5\u540D</td></tr><tr${_scopeId}><td${_scopeId}>2</td><td${_scopeId}>\u7533\u8BF7\u786E\u8BA4</td><td${_scopeId}>\u5217\u8868\u9875\u5934\u90E8</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u6821\u9A8CFDD\u7B7E\u7F72\u4E2D\u72B6\u6001\uFF0C\u8C03\u7528FDD\u7B7E\u5408\u540C</td></tr><tr${_scopeId}><td${_scopeId}>3</td><td${_scopeId}>\u53D6\u6D88\u70B9\u5C06</td><td${_scopeId}>\u5217\u8868\u9875\u5934\u90E8</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u6821\u9A8C\u63D0\u524D7\u5929\u4E14\u5DF2\u7B7E\u7EA6\uFF0C\u5F39\u7A97\u586B\u5199\u53D6\u6D88\u539F\u56E0</td></tr><tr${_scopeId}><td${_scopeId}>4</td><td${_scopeId}>\u7F16\u8F91\u518D\u53D1\u8D77</td><td${_scopeId}>\u5217\u8868\u884C</td><td${_scopeId}>applyState=&#39;draft&#39;\u6216approvalState\u4E3Areject/oa_reject</td><td${_scopeId}>\u5F39\u51FA\u62A5\u540D\u4FE1\u606F\u5F39\u7A97\u7F16\u8F91</td></tr><tr${_scopeId}><td${_scopeId}>5</td><td${_scopeId}>\u7ED3\u7B97\u524D\u786E\u8BA4</td><td${_scopeId}>\u5217\u8868\u884C</td><td${_scopeId}>beforeSettlementConfirmState=&#39;to_be_confirm&#39;</td><td${_scopeId}>\u5F39\u7A97\u5C55\u793A\u7ED3\u7B97\u660E\u7EC6\uFF0C\u786E\u8BA4/\u9A73\u56DE</td></tr><tr${_scopeId}><td${_scopeId}>6</td><td${_scopeId}>\u67E5\u770B\u6D41\u7A0B</td><td${_scopeId}>\u5217\u8868\u884C</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u5F39\u51FA\u6D41\u7A0B\u6458\u8981\u7EC4\u4EF6</td></tr><tr${_scopeId}><td${_scopeId}>7</td><td${_scopeId}>\u5220\u9664</td><td${_scopeId}>\u5217\u8868\u884C</td><td${_scopeId}>applyState=&#39;draft&#39;\u6216approvalState\u4E3Areject/fdd_reject/oa_reject</td><td${_scopeId}>\u786E\u8BA4\u540E\u8C03\u7528delete\u63A5\u53E3</td></tr><tr${_scopeId}><td${_scopeId}>8</td><td${_scopeId}>\u4FDD\u5B58</td><td${_scopeId}>\u62A5\u540D\u4FE1\u606F\u5F39\u7A97footer</td><td${_scopeId}>\u62A5\u540D/\u7F16\u8F91\u6A21\u5F0F</td><td${_scopeId}>\u6821\u9A8C\u540E\u8C03\u7528save\u63A5\u53E3</td></tr><tr${_scopeId}><td${_scopeId}>9</td><td${_scopeId}>\u4FDD\u5B58\u5E76\u63D0\u4EA4</td><td${_scopeId}>\u62A5\u540D\u4FE1\u606F\u5F39\u7A97footer</td><td${_scopeId}>\u62A5\u540D/\u7F16\u8F91\u6A21\u5F0F</td><td${_scopeId}>\u6821\u9A8C\u540E\u8C03\u7528saveAndSubmit\u63A5\u53E3</td></tr></tbody></table><h4${_scopeId}>\u6309\u94AE1\uFF1A\u7533\u8BF7\u70B9\u5C06\uFF08\u5217\u8868\u9875\u5934\u90E8\uFF09</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u663E\u9690\u6761\u4EF6</strong>\uFF1A\u59CB\u7EC8\u663E\u793A\uFF0C\u6743\u9650\u7801 <code${_scopeId}>\${permissionPrefix}apply</code></li><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u903B\u8F91</strong>\uFF1A\u5F39\u51FA&quot;\u7533\u8BF7\u70B9\u5C06&quot;\u5F39\u7A97\uFF0C\u5C55\u793A\u7279\u8BAD\u8425\u5217\u8868\uFF08applyTableDS\uFF09\uFF0C\u652F\u6301\u6309\u7279\u8BAD\u8425\u540D\u79F0\u67E5\u8BE2\u3002\u884C\u64CD\u4F5C&quot;\u62A5\u540D&quot;\u540E\u5F39\u51FA\u62A5\u540D\u4FE1\u606F\u5F39\u7A97\u3002</li></ul><h4${_scopeId}>\u6309\u94AE2\uFF1A\u7533\u8BF7\u786E\u8BA4\uFF08\u5217\u8868\u9875\u5934\u90E8\uFF09</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u663E\u9690\u6761\u4EF6</strong>\uFF1A\u59CB\u7EC8\u663E\u793A\uFF0C\u6743\u9650\u7801 <code${_scopeId}>\${permissionPrefix}confirm_apply</code></li><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u903B\u8F91</strong>\uFF1A\u6821\u9A8C\u9009\u4E2D1\u884C\u4E14 approvalState=&#39;fdd_in_approval&#39;\uFF0C\u8C03\u7528 <code${_scopeId}>useFDD</code> \u94A9\u5B50\u7684 <code${_scopeId}>handleOpenFDD</code>\u3002\u5426\u5219\u63D0\u793A&quot;\u53EA\u6709FDD\u7B7E\u7F72\u4E2D\u7684\u7533\u8BF7\u5355\u624D\u53EF\u4EE5\u7B7E\u5408\u540C&quot;\u3002</li></ul><h4${_scopeId}>\u6309\u94AE3\uFF1A\u53D6\u6D88\u70B9\u5C06\uFF08\u5217\u8868\u9875\u5934\u90E8\uFF09</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u663E\u9690\u6761\u4EF6</strong>\uFF1A\u59CB\u7EC8\u663E\u793A\uFF0C\u6743\u9650\u7801 <code${_scopeId}>\${permissionPrefix}cancel_apply</code></li><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u903B\u8F91</strong>\uFF1A\u6821\u9A8C\u9009\u4E2D1\u884C\uFF0C\u65F6\u95F4\u6821\u9A8C timeDiff=(planStartTime-nowTime)/(24*60*60*1000) &gt;= 7\uFF0C\u72B6\u6001\u6821\u9A8C approvalState=&#39;fdd_sign&#39; \u4E14 (!cancelApprovalState || cancelApprovalState=&#39;reject&#39;/&#39;oa_reject&#39;)\u3002\u901A\u8FC7\u540E\u5F39\u51FA\u53D6\u6D88\u7533\u8BF7\u5F39\u7A97\uFF08\u542BCampDetail type=&#39;cancel&#39;\uFF09\uFF0C\u8C03\u7528 <code${_scopeId}>campApplyApi.cancelApply</code>\u3002</li><li${_scopeId}><strong${_scopeId}>\u6821\u9A8C</strong>\uFF1A\u4E0D\u6EE1\u8DB3\u63D0\u524D7\u5929\u63D0\u793A&quot;\u53EA\u6709\u57F9\u8BAD\u65F6\u95F4\u5F00\u59CB\u524D7\u5929\u7684\u6D41\u7A0B\u53EF\u4EE5\u53D1\u8D77\u70B9\u5C06\u53D6\u6D88\u7533\u8BF7\uFF01&quot;\uFF1B\u72B6\u6001\u4E0D\u7B26\u63D0\u793A&quot;\u8BE5\u72B6\u6001\u5355\u636E\u65E0\u6CD5\u53D1\u8D77\u53D6\u6D88\u7533\u8BF7\uFF01&quot;\u3002</li></ul><h4${_scopeId}>\u6309\u94AE4\uFF1A\u7F16\u8F91\u518D\u53D1\u8D77\uFF08\u5217\u8868\u884C\uFF09</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u663E\u9690\u6761\u4EF6</strong>\uFF1AapplyState=&#39;draft&#39; \u6216 approvalState \u4E3A reject/oa_reject</li><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u903B\u8F91</strong>\uFF1A\u6821\u9A8C\u901A\u8FC7\u540E\u5F39\u51FA\u62A5\u540D\u4FE1\u606F\u5F39\u7A97\uFF08ApplyInfo\uFF09\uFF0C\u4F20\u5165applyCode\u52A0\u8F7D\u5DF2\u6709\u6570\u636E\u3002\u5426\u5219\u63D0\u793A&quot;\u5F53\u524D\u72B6\u6001\u6570\u636E\u65E0\u6CD5\u7F16\u8F91\uFF01&quot;\u3002</li></ul><h4${_scopeId}>\u6309\u94AE5\uFF1A\u7ED3\u7B97\u524D\u786E\u8BA4\uFF08\u5217\u8868\u884C\uFF09</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u663E\u9690\u6761\u4EF6</strong>\uFF1AbeforeSettlementConfirmState=&#39;to_be_confirm&#39;</li><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u903B\u8F91</strong>\uFF1A\u5F39\u51FA\u7ED3\u7B97\u524D\u786E\u8BA4\u5F39\u7A97\uFF08CampSettleDetail\uFF09\uFF0ConOk\u8C03\u7528 <code${_scopeId}>campApplyApi.settleBeforeConfirm</code>\uFF08beforeSettlementConfirmState=&#39;confirm&#39;\uFF09\uFF0C\u81EA\u5B9A\u4E49&quot;\u9A73\u56DE&quot;\u6309\u94AE\u8C03\u7528 <code${_scopeId}>settleBeforeConfirm</code>\uFF08beforeSettlementConfirmState=&#39;reject&#39;\uFF09\u3002</li></ul><h4${_scopeId}>\u6309\u94AE6\uFF1A\u67E5\u770B\u6D41\u7A0B\uFF08\u5217\u8868\u884C\uFF09</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u663E\u9690\u6761\u4EF6</strong>\uFF1A\u59CB\u7EC8\u663E\u793A</li><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u903B\u8F91</strong>\uFF1A\u5F39\u51FA\u6D41\u7A0B\u6458\u8981\u5F39\u7A97\uFF0C\u6E32\u67D3 <code${_scopeId}>ProcessDetail</code> \u7EC4\u4EF6\uFF0C\u5165\u53C2 applyCode\u3002</li></ul><h4${_scopeId}>\u6309\u94AE7\uFF1A\u5220\u9664\uFF08\u5217\u8868\u884C\uFF09</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u663E\u9690\u6761\u4EF6</strong>\uFF1AapplyState=&#39;draft&#39; \u6216 approvalState \u4E3A reject/fdd_reject/oa_reject</li><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u903B\u8F91</strong>\uFF1A\u786E\u8BA4\u5F39\u7A97&quot;\u786E\u5B9A\u8981\u5220\u9664\u5F53\u524D\u6570\u636E\u5417\uFF1F&quot;\uFF0C\u786E\u8BA4\u540E\u8C03\u7528 <code${_scopeId}>campApplyApi.delete</code>\uFF08URL\u8FFD\u52A0applyCode\uFF09\uFF0C\u6210\u529F\u540E\u5237\u65B0\u5217\u8868\u3002</li></ul><h4${_scopeId}>\u6309\u94AE8\uFF1A\u4FDD\u5B58\uFF08\u62A5\u540D\u4FE1\u606F\u5F39\u7A97footer\uFF09</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u663E\u9690\u6761\u4EF6</strong>\uFF1A\u62A5\u540D/\u7F16\u8F91\u6A21\u5F0F\uFF08\u5F39\u7A97onOk\uFF09</li><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u903B\u8F91</strong>\uFF1A\u6821\u9A8C applyFormDS\uFF08\u4EA4\u6613\u516C\u53F8\u5FC5\u586B\uFF09+ userListDS\uFF08\u53C2\u8BAD\u4EBA\u5458\u6BCF\u884C\u5FC5\u586B\u3001\u624B\u673A\u53F7\u6B63\u5219\u6821\u9A8C\uFF09\u3002\u8C03\u7528 <code${_scopeId}>campApplyApi.save</code>\uFF0Cdata\u542BcampCode\u3001specialTrainCampApplyId\u3001\u4EA4\u6613\u516C\u53F8\u4FE1\u606F\u3001tradingCompanyDetailTDTOList\uFF08\u53C2\u8BAD\u4EBA\u5458\u660E\u7EC6\uFF09\u3002</li></ul><h4${_scopeId}>\u6309\u94AE9\uFF1A\u4FDD\u5B58\u5E76\u63D0\u4EA4\uFF08\u62A5\u540D\u4FE1\u606F\u5F39\u7A97footer\uFF09</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u663E\u9690\u6761\u4EF6</strong>\uFF1A\u62A5\u540D/\u7F16\u8F91\u6A21\u5F0F\uFF08\u81EA\u5B9A\u4E49\u6309\u94AE\uFF09</li><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u903B\u8F91</strong>\uFF1A\u6821\u9A8C\u540C\u4FDD\u5B58\uFF0C\u8C03\u7528 <code${_scopeId}>campApplyApi.saveAndSubmit</code>\uFF0C\u89E6\u53D1campApplyApproval\u5BA1\u6279\u6D41\uFF0C\u6210\u529F\u540E\u5173\u95ED\u5F39\u7A97\u3002</li></ul>`);
      } else {
        return [
          createVNode("blockquote", null, [
            createTextVNode("\u6570\u636E\u6765\u6E90\uFF1A"),
            createVNode("code", null, "list.tsx"),
            createTextVNode("\u3002\u6743\u9650\u524D\u7F00 "),
            createVNode("code", null, "hzero.general_manage.distributor.distributor_general_camp.ps."),
            createTextVNode("\u3002\u7279\u8BAD\u8425\u65E0\u72EC\u7ACB\u8BE6\u60C5\u9875\uFF0C\u4FDD\u5B58/\u4FDD\u5B58\u5E76\u63D0\u4EA4\u5728\u62A5\u540D\u4FE1\u606F\u5F39\u7A97footer\u4E2D\u3002")
          ]),
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
                createVNode("td", null, "\u7533\u8BF7\u70B9\u5C06"),
                createVNode("td", null, "\u5217\u8868\u9875\u5934\u90E8"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u5F39\u51FA\u7279\u8BAD\u8425\u5217\u8868\uFF0C\u9009\u62E9\u540E\u62A5\u540D")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "2"),
                createVNode("td", null, "\u7533\u8BF7\u786E\u8BA4"),
                createVNode("td", null, "\u5217\u8868\u9875\u5934\u90E8"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u6821\u9A8CFDD\u7B7E\u7F72\u4E2D\u72B6\u6001\uFF0C\u8C03\u7528FDD\u7B7E\u5408\u540C")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "3"),
                createVNode("td", null, "\u53D6\u6D88\u70B9\u5C06"),
                createVNode("td", null, "\u5217\u8868\u9875\u5934\u90E8"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u6821\u9A8C\u63D0\u524D7\u5929\u4E14\u5DF2\u7B7E\u7EA6\uFF0C\u5F39\u7A97\u586B\u5199\u53D6\u6D88\u539F\u56E0")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "4"),
                createVNode("td", null, "\u7F16\u8F91\u518D\u53D1\u8D77"),
                createVNode("td", null, "\u5217\u8868\u884C"),
                createVNode("td", null, "applyState='draft'\u6216approvalState\u4E3Areject/oa_reject"),
                createVNode("td", null, "\u5F39\u51FA\u62A5\u540D\u4FE1\u606F\u5F39\u7A97\u7F16\u8F91")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "5"),
                createVNode("td", null, "\u7ED3\u7B97\u524D\u786E\u8BA4"),
                createVNode("td", null, "\u5217\u8868\u884C"),
                createVNode("td", null, "beforeSettlementConfirmState='to_be_confirm'"),
                createVNode("td", null, "\u5F39\u7A97\u5C55\u793A\u7ED3\u7B97\u660E\u7EC6\uFF0C\u786E\u8BA4/\u9A73\u56DE")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "6"),
                createVNode("td", null, "\u67E5\u770B\u6D41\u7A0B"),
                createVNode("td", null, "\u5217\u8868\u884C"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u5F39\u51FA\u6D41\u7A0B\u6458\u8981\u7EC4\u4EF6")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "7"),
                createVNode("td", null, "\u5220\u9664"),
                createVNode("td", null, "\u5217\u8868\u884C"),
                createVNode("td", null, "applyState='draft'\u6216approvalState\u4E3Areject/fdd_reject/oa_reject"),
                createVNode("td", null, "\u786E\u8BA4\u540E\u8C03\u7528delete\u63A5\u53E3")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "8"),
                createVNode("td", null, "\u4FDD\u5B58"),
                createVNode("td", null, "\u62A5\u540D\u4FE1\u606F\u5F39\u7A97footer"),
                createVNode("td", null, "\u62A5\u540D/\u7F16\u8F91\u6A21\u5F0F"),
                createVNode("td", null, "\u6821\u9A8C\u540E\u8C03\u7528save\u63A5\u53E3")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "9"),
                createVNode("td", null, "\u4FDD\u5B58\u5E76\u63D0\u4EA4"),
                createVNode("td", null, "\u62A5\u540D\u4FE1\u606F\u5F39\u7A97footer"),
                createVNode("td", null, "\u62A5\u540D/\u7F16\u8F91\u6A21\u5F0F"),
                createVNode("td", null, "\u6821\u9A8C\u540E\u8C03\u7528saveAndSubmit\u63A5\u53E3")
              ])
            ])
          ]),
          createVNode("h4", null, "\u6309\u94AE1\uFF1A\u7533\u8BF7\u70B9\u5C06\uFF08\u5217\u8868\u9875\u5934\u90E8\uFF09"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u663E\u9690\u6761\u4EF6"),
              createTextVNode("\uFF1A\u59CB\u7EC8\u663E\u793A\uFF0C\u6743\u9650\u7801 "),
              createVNode("code", null, "${permissionPrefix}apply")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u903B\u8F91"),
              createTextVNode('\uFF1A\u5F39\u51FA"\u7533\u8BF7\u70B9\u5C06"\u5F39\u7A97\uFF0C\u5C55\u793A\u7279\u8BAD\u8425\u5217\u8868\uFF08applyTableDS\uFF09\uFF0C\u652F\u6301\u6309\u7279\u8BAD\u8425\u540D\u79F0\u67E5\u8BE2\u3002\u884C\u64CD\u4F5C"\u62A5\u540D"\u540E\u5F39\u51FA\u62A5\u540D\u4FE1\u606F\u5F39\u7A97\u3002')
            ])
          ]),
          createVNode("h4", null, "\u6309\u94AE2\uFF1A\u7533\u8BF7\u786E\u8BA4\uFF08\u5217\u8868\u9875\u5934\u90E8\uFF09"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u663E\u9690\u6761\u4EF6"),
              createTextVNode("\uFF1A\u59CB\u7EC8\u663E\u793A\uFF0C\u6743\u9650\u7801 "),
              createVNode("code", null, "${permissionPrefix}confirm_apply")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u903B\u8F91"),
              createTextVNode("\uFF1A\u6821\u9A8C\u9009\u4E2D1\u884C\u4E14 approvalState='fdd_in_approval'\uFF0C\u8C03\u7528 "),
              createVNode("code", null, "useFDD"),
              createTextVNode(" \u94A9\u5B50\u7684 "),
              createVNode("code", null, "handleOpenFDD"),
              createTextVNode('\u3002\u5426\u5219\u63D0\u793A"\u53EA\u6709FDD\u7B7E\u7F72\u4E2D\u7684\u7533\u8BF7\u5355\u624D\u53EF\u4EE5\u7B7E\u5408\u540C"\u3002')
            ])
          ]),
          createVNode("h4", null, "\u6309\u94AE3\uFF1A\u53D6\u6D88\u70B9\u5C06\uFF08\u5217\u8868\u9875\u5934\u90E8\uFF09"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u663E\u9690\u6761\u4EF6"),
              createTextVNode("\uFF1A\u59CB\u7EC8\u663E\u793A\uFF0C\u6743\u9650\u7801 "),
              createVNode("code", null, "${permissionPrefix}cancel_apply")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u903B\u8F91"),
              createTextVNode("\uFF1A\u6821\u9A8C\u9009\u4E2D1\u884C\uFF0C\u65F6\u95F4\u6821\u9A8C timeDiff=(planStartTime-nowTime)/(24*60*60*1000) >= 7\uFF0C\u72B6\u6001\u6821\u9A8C approvalState='fdd_sign' \u4E14 (!cancelApprovalState || cancelApprovalState='reject'/'oa_reject')\u3002\u901A\u8FC7\u540E\u5F39\u51FA\u53D6\u6D88\u7533\u8BF7\u5F39\u7A97\uFF08\u542BCampDetail type='cancel'\uFF09\uFF0C\u8C03\u7528 "),
              createVNode("code", null, "campApplyApi.cancelApply"),
              createTextVNode("\u3002")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u6821\u9A8C"),
              createTextVNode('\uFF1A\u4E0D\u6EE1\u8DB3\u63D0\u524D7\u5929\u63D0\u793A"\u53EA\u6709\u57F9\u8BAD\u65F6\u95F4\u5F00\u59CB\u524D7\u5929\u7684\u6D41\u7A0B\u53EF\u4EE5\u53D1\u8D77\u70B9\u5C06\u53D6\u6D88\u7533\u8BF7\uFF01"\uFF1B\u72B6\u6001\u4E0D\u7B26\u63D0\u793A"\u8BE5\u72B6\u6001\u5355\u636E\u65E0\u6CD5\u53D1\u8D77\u53D6\u6D88\u7533\u8BF7\uFF01"\u3002')
            ])
          ]),
          createVNode("h4", null, "\u6309\u94AE4\uFF1A\u7F16\u8F91\u518D\u53D1\u8D77\uFF08\u5217\u8868\u884C\uFF09"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u663E\u9690\u6761\u4EF6"),
              createTextVNode("\uFF1AapplyState='draft' \u6216 approvalState \u4E3A reject/oa_reject")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u903B\u8F91"),
              createTextVNode('\uFF1A\u6821\u9A8C\u901A\u8FC7\u540E\u5F39\u51FA\u62A5\u540D\u4FE1\u606F\u5F39\u7A97\uFF08ApplyInfo\uFF09\uFF0C\u4F20\u5165applyCode\u52A0\u8F7D\u5DF2\u6709\u6570\u636E\u3002\u5426\u5219\u63D0\u793A"\u5F53\u524D\u72B6\u6001\u6570\u636E\u65E0\u6CD5\u7F16\u8F91\uFF01"\u3002')
            ])
          ]),
          createVNode("h4", null, "\u6309\u94AE5\uFF1A\u7ED3\u7B97\u524D\u786E\u8BA4\uFF08\u5217\u8868\u884C\uFF09"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u663E\u9690\u6761\u4EF6"),
              createTextVNode("\uFF1AbeforeSettlementConfirmState='to_be_confirm'")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u903B\u8F91"),
              createTextVNode("\uFF1A\u5F39\u51FA\u7ED3\u7B97\u524D\u786E\u8BA4\u5F39\u7A97\uFF08CampSettleDetail\uFF09\uFF0ConOk\u8C03\u7528 "),
              createVNode("code", null, "campApplyApi.settleBeforeConfirm"),
              createTextVNode(`\uFF08beforeSettlementConfirmState='confirm'\uFF09\uFF0C\u81EA\u5B9A\u4E49"\u9A73\u56DE"\u6309\u94AE\u8C03\u7528 `),
              createVNode("code", null, "settleBeforeConfirm"),
              createTextVNode("\uFF08beforeSettlementConfirmState='reject'\uFF09\u3002")
            ])
          ]),
          createVNode("h4", null, "\u6309\u94AE6\uFF1A\u67E5\u770B\u6D41\u7A0B\uFF08\u5217\u8868\u884C\uFF09"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u663E\u9690\u6761\u4EF6"),
              createTextVNode("\uFF1A\u59CB\u7EC8\u663E\u793A")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u903B\u8F91"),
              createTextVNode("\uFF1A\u5F39\u51FA\u6D41\u7A0B\u6458\u8981\u5F39\u7A97\uFF0C\u6E32\u67D3 "),
              createVNode("code", null, "ProcessDetail"),
              createTextVNode(" \u7EC4\u4EF6\uFF0C\u5165\u53C2 applyCode\u3002")
            ])
          ]),
          createVNode("h4", null, "\u6309\u94AE7\uFF1A\u5220\u9664\uFF08\u5217\u8868\u884C\uFF09"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u663E\u9690\u6761\u4EF6"),
              createTextVNode("\uFF1AapplyState='draft' \u6216 approvalState \u4E3A reject/fdd_reject/oa_reject")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u903B\u8F91"),
              createTextVNode('\uFF1A\u786E\u8BA4\u5F39\u7A97"\u786E\u5B9A\u8981\u5220\u9664\u5F53\u524D\u6570\u636E\u5417\uFF1F"\uFF0C\u786E\u8BA4\u540E\u8C03\u7528 '),
              createVNode("code", null, "campApplyApi.delete"),
              createTextVNode("\uFF08URL\u8FFD\u52A0applyCode\uFF09\uFF0C\u6210\u529F\u540E\u5237\u65B0\u5217\u8868\u3002")
            ])
          ]),
          createVNode("h4", null, "\u6309\u94AE8\uFF1A\u4FDD\u5B58\uFF08\u62A5\u540D\u4FE1\u606F\u5F39\u7A97footer\uFF09"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u663E\u9690\u6761\u4EF6"),
              createTextVNode("\uFF1A\u62A5\u540D/\u7F16\u8F91\u6A21\u5F0F\uFF08\u5F39\u7A97onOk\uFF09")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u903B\u8F91"),
              createTextVNode("\uFF1A\u6821\u9A8C applyFormDS\uFF08\u4EA4\u6613\u516C\u53F8\u5FC5\u586B\uFF09+ userListDS\uFF08\u53C2\u8BAD\u4EBA\u5458\u6BCF\u884C\u5FC5\u586B\u3001\u624B\u673A\u53F7\u6B63\u5219\u6821\u9A8C\uFF09\u3002\u8C03\u7528 "),
              createVNode("code", null, "campApplyApi.save"),
              createTextVNode("\uFF0Cdata\u542BcampCode\u3001specialTrainCampApplyId\u3001\u4EA4\u6613\u516C\u53F8\u4FE1\u606F\u3001tradingCompanyDetailTDTOList\uFF08\u53C2\u8BAD\u4EBA\u5458\u660E\u7EC6\uFF09\u3002")
            ])
          ]),
          createVNode("h4", null, "\u6309\u94AE9\uFF1A\u4FDD\u5B58\u5E76\u63D0\u4EA4\uFF08\u62A5\u540D\u4FE1\u606F\u5F39\u7A97footer\uFF09"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u663E\u9690\u6761\u4EF6"),
              createTextVNode("\uFF1A\u62A5\u540D/\u7F16\u8F91\u6A21\u5F0F\uFF08\u81EA\u5B9A\u4E49\u6309\u94AE\uFF09")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u903B\u8F91"),
              createTextVNode("\uFF1A\u6821\u9A8C\u540C\u4FDD\u5B58\uFF0C\u8C03\u7528 "),
              createVNode("code", null, "campApplyApi.saveAndSubmit"),
              createTextVNode("\uFF0C\u89E6\u53D1campApplyApproval\u5BA1\u6279\u6D41\uFF0C\u6210\u529F\u540E\u5173\u95ED\u5F39\u7A97\u3002")
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
        _push2(`<blockquote${_scopeId}>\u6570\u636E\u6765\u6E90\uFF1A<code${_scopeId}>list.tsx</code> \u7684 <code${_scopeId}>submitApply</code> + <code${_scopeId}>components/ApplyInfo/index.tsx</code> \u7684 <code${_scopeId}>getApplyFormData</code>/<code${_scopeId}>getUserList</code>\u3002\u4FDD\u5B58\u4E0E\u4FDD\u5B58\u5E76\u63D0\u4EA4\u5171\u7528\u540C\u4E00\u6821\u9A8C\u903B\u8F91\u3002</blockquote><ul${_scopeId}><li${_scopeId}>\u6821\u9A8C1\uFF1A\u4EA4\u6613\u516C\u53F8\u5FC5\u586B \u2014\u2014 applyFormDS.tradingCompanyName\uFF0C\u660E\u786E\u4EA4\u6613\u4E3B\u4F53</li><li${_scopeId}>\u6821\u9A8C2\uFF1A\u5F00\u7968\u8D26\u6237\u5FC5\u586B \u2014\u2014 applyFormDS.legalEntityName\uFF08\u9009\u4EA4\u6613\u516C\u53F8\u81EA\u52A8\u5E26\u51FA\uFF09</li><li${_scopeId}>\u6821\u9A8C3\uFF1A\u53C2\u8BAD\u4EBA\u5458\u5217\u8868\u4E0D\u80FD\u4E3A\u7A7A \u2014\u2014 userListDS\u81F3\u5C111\u884C</li><li${_scopeId}>\u6821\u9A8C4\uFF1A\u53C2\u8BAD\u4EBA\u5458\u59D3\u540D\u5FC5\u586B \u2014\u2014 \u6BCF\u884Cname\u4E0D\u80FD\u4E3A\u7A7A</li><li${_scopeId}>\u6821\u9A8C5\uFF1A\u53C2\u8BAD\u4EBA\u5458\u624B\u673A\u53F7\u5FC5\u586B \u2014\u2014 \u6BCF\u884Cphone\u4E0D\u80FD\u4E3A\u7A7A\uFF0C\u4E14\u6821\u9A8C\u6B63\u5219/^1[3456789]\\d{9}$/</li><li${_scopeId}>\u6821\u9A8C6\uFF1A\u53C2\u8BAD\u4EBA\u5458\u6027\u522B\u5FC5\u586B \u2014\u2014 \u6BCF\u884Cgender\u4E0D\u80FD\u4E3A\u7A7A\uFF0C\u503C\u96C6MBO.CAMP_USER_SEX</li><li${_scopeId}>\u6821\u9A8C7\uFF1A\u53C2\u8BAD\u4EBA\u5458\u5B66\u5386\u5FC5\u586B \u2014\u2014 \u6BCF\u884Ceducation\u4E0D\u80FD\u4E3A\u7A7A</li><li${_scopeId}>\u6821\u9A8C8\uFF1A\u53C2\u8BAD\u4EBA\u5458\u6240\u5C5E\u95E8\u5E97\u5FC5\u586B \u2014\u2014 \u6BCF\u884Cstore\u4E0D\u80FD\u4E3A\u7A7A</li><li${_scopeId}>\u6821\u9A8C9\uFF1A\u53C2\u8BAD\u4EBA\u5458\u7701\u5E02\u533A\u5FC5\u586B \u2014\u2014 \u6BCF\u884Cprovince\u4E0D\u80FD\u4E3A\u7A7A</li><li${_scopeId}>\u6821\u9A8C10\uFF1A\u53C2\u8BAD\u4EBA\u5458\u5C97\u4F4D\u5FC5\u586B \u2014\u2014 \u6BCF\u884Cpost\u4E0D\u80FD\u4E3A\u7A7A</li><li${_scopeId}>\u6821\u9A8C11\uFF1A\u53C2\u8BAD\u4EBA\u5458\u5165\u804C\u65E5\u671F\u5FC5\u586B \u2014\u2014 \u6BCF\u884CentryDate\u4E0D\u80FD\u4E3A\u7A7A</li><li${_scopeId}>\u6821\u9A8C12\uFF1A\u53D6\u6D88\u7533\u8BF7\u65F6\u53D6\u6D88\u539F\u56E0\u5FC5\u586B \u2014\u2014 cancelFormDS.cancelReason</li><li${_scopeId}>\u6821\u9A8C13\uFF1A\u8BB2\u5E08\u6392\u671F\u51B2\u7A81\u6821\u9A8C\uFF08\u540E\u7AEF\uFF09 \u2014\u2014 \u907F\u514D\u540C\u4E00\u8BB2\u5E08\u540C\u4E00\u65F6\u95F4\u6BB5\u88AB\u91CD\u590D\u70B9\u5C06</li></ul>`);
      } else {
        return [
          createVNode("blockquote", null, [
            createTextVNode("\u6570\u636E\u6765\u6E90\uFF1A"),
            createVNode("code", null, "list.tsx"),
            createTextVNode(" \u7684 "),
            createVNode("code", null, "submitApply"),
            createTextVNode(" + "),
            createVNode("code", null, "components/ApplyInfo/index.tsx"),
            createTextVNode(" \u7684 "),
            createVNode("code", null, "getApplyFormData"),
            createTextVNode("/"),
            createVNode("code", null, "getUserList"),
            createTextVNode("\u3002\u4FDD\u5B58\u4E0E\u4FDD\u5B58\u5E76\u63D0\u4EA4\u5171\u7528\u540C\u4E00\u6821\u9A8C\u903B\u8F91\u3002")
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u6821\u9A8C1\uFF1A\u4EA4\u6613\u516C\u53F8\u5FC5\u586B \u2014\u2014 applyFormDS.tradingCompanyName\uFF0C\u660E\u786E\u4EA4\u6613\u4E3B\u4F53"),
            createVNode("li", null, "\u6821\u9A8C2\uFF1A\u5F00\u7968\u8D26\u6237\u5FC5\u586B \u2014\u2014 applyFormDS.legalEntityName\uFF08\u9009\u4EA4\u6613\u516C\u53F8\u81EA\u52A8\u5E26\u51FA\uFF09"),
            createVNode("li", null, "\u6821\u9A8C3\uFF1A\u53C2\u8BAD\u4EBA\u5458\u5217\u8868\u4E0D\u80FD\u4E3A\u7A7A \u2014\u2014 userListDS\u81F3\u5C111\u884C"),
            createVNode("li", null, "\u6821\u9A8C4\uFF1A\u53C2\u8BAD\u4EBA\u5458\u59D3\u540D\u5FC5\u586B \u2014\u2014 \u6BCF\u884Cname\u4E0D\u80FD\u4E3A\u7A7A"),
            createVNode("li", null, "\u6821\u9A8C5\uFF1A\u53C2\u8BAD\u4EBA\u5458\u624B\u673A\u53F7\u5FC5\u586B \u2014\u2014 \u6BCF\u884Cphone\u4E0D\u80FD\u4E3A\u7A7A\uFF0C\u4E14\u6821\u9A8C\u6B63\u5219/^1[3456789]\\d{9}$/"),
            createVNode("li", null, "\u6821\u9A8C6\uFF1A\u53C2\u8BAD\u4EBA\u5458\u6027\u522B\u5FC5\u586B \u2014\u2014 \u6BCF\u884Cgender\u4E0D\u80FD\u4E3A\u7A7A\uFF0C\u503C\u96C6MBO.CAMP_USER_SEX"),
            createVNode("li", null, "\u6821\u9A8C7\uFF1A\u53C2\u8BAD\u4EBA\u5458\u5B66\u5386\u5FC5\u586B \u2014\u2014 \u6BCF\u884Ceducation\u4E0D\u80FD\u4E3A\u7A7A"),
            createVNode("li", null, "\u6821\u9A8C8\uFF1A\u53C2\u8BAD\u4EBA\u5458\u6240\u5C5E\u95E8\u5E97\u5FC5\u586B \u2014\u2014 \u6BCF\u884Cstore\u4E0D\u80FD\u4E3A\u7A7A"),
            createVNode("li", null, "\u6821\u9A8C9\uFF1A\u53C2\u8BAD\u4EBA\u5458\u7701\u5E02\u533A\u5FC5\u586B \u2014\u2014 \u6BCF\u884Cprovince\u4E0D\u80FD\u4E3A\u7A7A"),
            createVNode("li", null, "\u6821\u9A8C10\uFF1A\u53C2\u8BAD\u4EBA\u5458\u5C97\u4F4D\u5FC5\u586B \u2014\u2014 \u6BCF\u884Cpost\u4E0D\u80FD\u4E3A\u7A7A"),
            createVNode("li", null, "\u6821\u9A8C11\uFF1A\u53C2\u8BAD\u4EBA\u5458\u5165\u804C\u65E5\u671F\u5FC5\u586B \u2014\u2014 \u6BCF\u884CentryDate\u4E0D\u80FD\u4E3A\u7A7A"),
            createVNode("li", null, "\u6821\u9A8C12\uFF1A\u53D6\u6D88\u7533\u8BF7\u65F6\u53D6\u6D88\u539F\u56E0\u5FC5\u586B \u2014\u2014 cancelFormDS.cancelReason"),
            createVNode("li", null, "\u6821\u9A8C13\uFF1A\u8BB2\u5E08\u6392\u671F\u51B2\u7A81\u6821\u9A8C\uFF08\u540E\u7AEF\uFF09 \u2014\u2014 \u907F\u514D\u540C\u4E00\u8BB2\u5E08\u540C\u4E00\u65F6\u95F4\u6BB5\u88AB\u91CD\u590D\u70B9\u5C06")
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
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>   \u2192 executing(\u6267\u884C\u4E2D) \u2192 </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>end</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>(\u5DF2\u5B8C\u6210)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>rejected(\u5BA1\u6279\u9A73\u56DE) \u2192 \u53EF\u4FEE\u6539\u91CD\u63D0</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>valid \u2192 cancel_applied(\u53D6\u6D88\u7533\u8BF7\u4E2D) \u2192 cancel_approved(\u5DF2\u53D6\u6D88)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>valid \u2192 to_be_confirm(\u5F85\u7ED3\u7B97\u524D\u786E\u8BA4) \u2192 confirm(\u5DF2\u786E\u8BA4) \u2192 \u7ED3\u7B97</span></span>
<span class="line"${_scopeId}></span></code></pre></div><p${_scopeId}>\u72B6\u6001\u5217\u8868\uFF1A</p><table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5F53\u524D\u72B6\u6001</th><th${_scopeId}>\u89E6\u53D1\u52A8\u4F5C</th><th${_scopeId}>\u76EE\u6807\u72B6\u6001</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>draft</td><td${_scopeId}>\u4FDD\u5B58\u5E76\u63D0\u4EA4</td><td${_scopeId}>submitted</td></tr><tr${_scopeId}><td${_scopeId}>submitted</td><td${_scopeId}>\u5BA1\u6279\u901A\u8FC7</td><td${_scopeId}>approved</td></tr><tr${_scopeId}><td${_scopeId}>submitted</td><td${_scopeId}>\u5BA1\u6279\u9A73\u56DE</td><td${_scopeId}>rejected</td></tr><tr${_scopeId}><td${_scopeId}>rejected</td><td${_scopeId}>\u4FEE\u6539\u540E\u91CD\u65B0\u63D0\u4EA4</td><td${_scopeId}>submitted</td></tr><tr${_scopeId}><td${_scopeId}>approved</td><td${_scopeId}>\u751F\u6548</td><td${_scopeId}>valid</td></tr><tr${_scopeId}><td${_scopeId}>valid</td><td${_scopeId}>\u5F00\u59CB\u6267\u884C</td><td${_scopeId}>executing</td></tr><tr${_scopeId}><td${_scopeId}>executing</td><td${_scopeId}>\u7ED3\u675F\u6267\u884C</td><td${_scopeId}>end</td></tr><tr${_scopeId}><td${_scopeId}>valid</td><td${_scopeId}>\u53D1\u8D77\u53D6\u6D88\u7533\u8BF7</td><td${_scopeId}>cancel_applied</td></tr><tr${_scopeId}><td${_scopeId}>cancel_applied</td><td${_scopeId}>\u53D6\u6D88\u5BA1\u6279\u901A\u8FC7</td><td${_scopeId}>cancel_approved</td></tr><tr${_scopeId}><td${_scopeId}>valid</td><td${_scopeId}>\u7ED3\u7B97\u524D\u786E\u8BA4</td><td${_scopeId}>to_be_confirm</td></tr><tr${_scopeId}><td${_scopeId}>to_be_confirm</td><td${_scopeId}>\u786E\u8BA4</td><td${_scopeId}>confirm</td></tr></tbody></table>`);
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "   \u2192 executing(\u6267\u884C\u4E2D) \u2192 "),
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "valid \u2192 to_be_confirm(\u5F85\u7ED3\u7B97\u524D\u786E\u8BA4) \u2192 confirm(\u5DF2\u786E\u8BA4) \u2192 \u7ED3\u7B97")
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
                createVNode("td", null, "\u5F00\u59CB\u6267\u884C"),
                createVNode("td", null, "executing")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "executing"),
                createVNode("td", null, "\u7ED3\u675F\u6267\u884C"),
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
                createVNode("td", null, "valid"),
                createVNode("td", null, "\u7ED3\u7B97\u524D\u786E\u8BA4"),
                createVNode("td", null, "to_be_confirm")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "to_be_confirm"),
                createVNode("td", null, "\u786E\u8BA4"),
                createVNode("td", null, "confirm")
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
  _push(ssrRenderComponent(_component_KbCard, { title: "\u7279\u8BAD\u8425\u70B9\u5C06\u7533\u8BF7\u8868\uFF08TRAIN_CAMP_APPLY\uFF09" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5B57\u6BB5\u540D</th><th${_scopeId}>\u7C7B\u578B</th><th${_scopeId}>\u91CA\u4E49</th><th${_scopeId}>\u5BF9\u5E94\u754C\u9762\u5B57\u6BB5</th><th${_scopeId}>\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>ID</td><td${_scopeId}>NUMBER</td><td${_scopeId}>\u4E3B\u952EID</td><td${_scopeId}>-</td><td${_scopeId}>\u5E8F\u5217\u81EA\u589E</td></tr><tr${_scopeId}><td${_scopeId}>APPLY_CODE</td><td${_scopeId}>VARCHAR2(64)</td><td${_scopeId}>\u7533\u8BF7\u7F16\u7801</td><td${_scopeId}>\u7533\u8BF7\u7F16\u7801</td><td${_scopeId}>\u7CFB\u7EDF\u751F\u6210\uFF0CPK</td></tr><tr${_scopeId}><td${_scopeId}>SPECIAL_TRAIN_CAMP_APPLY_ID</td><td${_scopeId}>NUMBER</td><td${_scopeId}>\u7533\u8BF7ID</td><td${_scopeId}>-</td><td${_scopeId}>\u5E8F\u5217\u81EA\u589E</td></tr><tr${_scopeId}><td${_scopeId}>CAMP_CODE</td><td${_scopeId}>VARCHAR2(64)</td><td${_scopeId}>\u7279\u8BAD\u8425\u7F16\u7801</td><td${_scopeId}>-</td><td${_scopeId}>\u5173\u8054\u7279\u8BAD\u8425</td></tr><tr${_scopeId}><td${_scopeId}>CAMP_NAME</td><td${_scopeId}>VARCHAR2(255)</td><td${_scopeId}>\u7279\u8BAD\u8425\u540D\u79F0</td><td${_scopeId}>\u7279\u8BAD\u8425\u9009\u62E9</td><td${_scopeId}>\u5173\u8054\u7279\u8BAD\u8425</td></tr><tr${_scopeId}><td${_scopeId}>CAMP_TYPE</td><td${_scopeId}>VARCHAR2(32)</td><td${_scopeId}>\u7279\u8BAD\u8425\u7C7B\u578B</td><td${_scopeId}>-</td><td${_scopeId}>\u503C\u96C6MBO.CAMP_TYPE</td></tr><tr${_scopeId}><td${_scopeId}>APPLY_STATE</td><td${_scopeId}>VARCHAR2(32)</td><td${_scopeId}>\u7533\u8BF7\u72B6\u6001</td><td${_scopeId}>\u70B9\u5C06\u72B6\u6001</td><td${_scopeId}>\u503C\u96C6MBO.CAMP_APPLY_STATE</td></tr><tr${_scopeId}><td${_scopeId}>APPROVAL_STATE</td><td${_scopeId}>VARCHAR2(32)</td><td${_scopeId}>\u5BA1\u6838\u72B6\u6001</td><td${_scopeId}>\u5BA1\u6838\u72B6\u6001</td><td${_scopeId}>\u503C\u96C6MBO.APPLY_APPROVAL_STATE</td></tr><tr${_scopeId}><td${_scopeId}>CANCEL_APPROVAL_STATE</td><td${_scopeId}>VARCHAR2(32)</td><td${_scopeId}>\u53D6\u6D88\u5BA1\u6838\u72B6\u6001</td><td${_scopeId}>-</td><td${_scopeId}>\u503C\u96C6MBO.CANCEL_APPROVAL_STATE</td></tr><tr${_scopeId}><td${_scopeId}>BEFORE_SETTLEMENT_CONFIRM_STATE</td><td${_scopeId}>VARCHAR2(32)</td><td${_scopeId}>\u7ED3\u7B97\u524D\u786E\u8BA4\u72B6\u6001</td><td${_scopeId}>-</td><td${_scopeId}>\u503C\u96C6MBO.BEFORE_SETTLEMENT_CONFIRM_STATE</td></tr><tr${_scopeId}><td${_scopeId}>SETTLEMENT_CONFIRM_STATE</td><td${_scopeId}>VARCHAR2(32)</td><td${_scopeId}>\u7ED3\u7B97\u786E\u8BA4\u72B6\u6001</td><td${_scopeId}>-</td><td${_scopeId}>\u503C\u96C6MBO.SETTLEMENT_COMFIRM_STATE</td></tr><tr${_scopeId}><td${_scopeId}>END_CONFIRM_STATE</td><td${_scopeId}>VARCHAR2(32)</td><td${_scopeId}>\u7ED3\u675F\u786E\u8BA4\u72B6\u6001</td><td${_scopeId}>\u7ED3\u675F\u786E\u8BA4\u72B6\u6001</td><td${_scopeId}>\u503C\u96C6MBO.END_COMFIRM_STATE</td></tr><tr${_scopeId}><td${_scopeId}>PLAN_START_TIME</td><td${_scopeId}>DATE</td><td${_scopeId}>\u57F9\u8BAD\u5F00\u59CB\u65F6\u95F4</td><td${_scopeId}>\u5F00\u59CB\u65F6\u95F4</td><td${_scopeId}>\u5173\u8054\u7279\u8BAD\u8425</td></tr><tr${_scopeId}><td${_scopeId}>PLAN_END_TIME</td><td${_scopeId}>DATE</td><td${_scopeId}>\u57F9\u8BAD\u7ED3\u675F\u65F6\u95F4</td><td${_scopeId}>\u7ED3\u675F\u65F6\u95F4</td><td${_scopeId}>\u5173\u8054\u7279\u8BAD\u8425</td></tr><tr${_scopeId}><td${_scopeId}>PRE_ORD_LECTURER_DAYS</td><td${_scopeId}>NUMBER</td><td${_scopeId}>\u62DF\u70B9\u5C06\u5929\u6570</td><td${_scopeId}>\u62DF\u70B9\u5C06\u5929\u6570</td><td${_scopeId}>\u7533\u8BF7\u65F6\u586B\u5199</td></tr><tr${_scopeId}><td${_scopeId}>REAL_ORD_LECTURER_DAYS</td><td${_scopeId}>NUMBER</td><td${_scopeId}>\u5B9E\u9645\u70B9\u5C06\u5929\u6570</td><td${_scopeId}>\u5B9E\u9645\u70B9\u5C06\u5929\u6570</td><td${_scopeId}>\u6267\u884C\u73AF\u8282\u586B\u5199</td></tr><tr${_scopeId}><td${_scopeId}>ADDRESS</td><td${_scopeId}>VARCHAR2(500)</td><td${_scopeId}>\u57F9\u8BAD\u5730\u70B9</td><td${_scopeId}>-</td><td${_scopeId}>\u5173\u8054\u7279\u8BAD\u8425</td></tr><tr${_scopeId}><td${_scopeId}>LECTURER</td><td${_scopeId}>VARCHAR2(255)</td><td${_scopeId}>\u8BB2\u5E08</td><td${_scopeId}>\u57F9\u8BAD\u5E08</td><td${_scopeId}>\u5173\u8054\u7279\u8BAD\u8425</td></tr><tr${_scopeId}><td${_scopeId}>LECTURER_CODE</td><td${_scopeId}>VARCHAR2(64)</td><td${_scopeId}>\u8BB2\u5E08\u7F16\u7801</td><td${_scopeId}>-</td><td${_scopeId}>\u5173\u8054\u7279\u8BAD\u8425</td></tr><tr${_scopeId}><td${_scopeId}>DEALER_CODE</td><td${_scopeId}>VARCHAR2(64)</td><td${_scopeId}>\u7ECF\u9500\u5546\u7F16\u7801</td><td${_scopeId}>-</td><td${_scopeId}>\u5F53\u524D\u767B\u5F55\u7ECF\u9500\u5546</td></tr><tr${_scopeId}><td${_scopeId}>DEALER_NAME</td><td${_scopeId}>VARCHAR2(255)</td><td${_scopeId}>\u7ECF\u9500\u5546\u540D\u79F0</td><td${_scopeId}>\u7ECF\u9500\u5546</td><td${_scopeId}>\u5F53\u524D\u767B\u5F55\u7ECF\u9500\u5546</td></tr><tr${_scopeId}><td${_scopeId}>LEGAL_ENTITY_CODE</td><td${_scopeId}>VARCHAR2(64)</td><td${_scopeId}>\u6CD5\u4EBA\u4E3B\u4F53\u7F16\u7801</td><td${_scopeId}>-</td><td${_scopeId}>\u62A5\u540D\u65F6\u9009\u62E9</td></tr><tr${_scopeId}><td${_scopeId}>LEGAL_ENTITY_NAME</td><td${_scopeId}>VARCHAR2(255)</td><td${_scopeId}>\u6CD5\u4EBA\u4E3B\u4F53\u540D\u79F0</td><td${_scopeId}>\u6CD5\u4EBA\u4E3B\u4F53</td><td${_scopeId}>\u62A5\u540D\u65F6\u9009\u62E9</td></tr><tr${_scopeId}><td${_scopeId}>TRADING_COMPANY_ID</td><td${_scopeId}>NUMBER</td><td${_scopeId}>\u4EA4\u6613\u516C\u53F8ID</td><td${_scopeId}>-</td><td${_scopeId}>\u62A5\u540D\u65F6\u9009\u62E9</td></tr><tr${_scopeId}><td${_scopeId}>TRADING_COMPANY_NAME</td><td${_scopeId}>VARCHAR2(255)</td><td${_scopeId}>\u4EA4\u6613\u516C\u53F8\u540D\u79F0</td><td${_scopeId}>-</td><td${_scopeId}>\u62A5\u540D\u65F6\u9009\u62E9</td></tr><tr${_scopeId}><td${_scopeId}>CANCEL_REASON</td><td${_scopeId}>VARCHAR2(2000)</td><td${_scopeId}>\u53D6\u6D88\u539F\u56E0</td><td${_scopeId}>-</td><td${_scopeId}>\u53D6\u6D88\u70B9\u5C06\u65F6\u586B\u5199</td></tr><tr${_scopeId}><td${_scopeId}>CRM_ORDER_CODE</td><td${_scopeId}>VARCHAR2(64)</td><td${_scopeId}>CRM\u5355\u53F7</td><td${_scopeId}>CRM\u5355\u53F7</td><td${_scopeId}>\u63A8\u9001CRM\u540E\u56DE\u5199</td></tr><tr${_scopeId}><td${_scopeId}>REMARK</td><td${_scopeId}>VARCHAR2(2000)</td><td${_scopeId}>\u5907\u6CE8</td><td${_scopeId}>\u5907\u6CE8</td><td${_scopeId}>\u624B\u52A8\u8F93\u5165</td></tr><tr${_scopeId}><td${_scopeId}>CREATE_DATE</td><td${_scopeId}>TIMESTAMP</td><td${_scopeId}>\u7533\u8BF7\u65F6\u95F4</td><td${_scopeId}>\u7533\u8BF7\u65F6\u95F4</td><td${_scopeId}>\u7CFB\u7EDF\u81EA\u52A8</td></tr><tr${_scopeId}><td${_scopeId}>CREATED_BY</td><td${_scopeId}>VARCHAR2(64)</td><td${_scopeId}>\u521B\u5EFA\u4EBA</td><td${_scopeId}>-</td><td${_scopeId}>\u7CFB\u7EDF\u81EA\u52A8</td></tr><tr${_scopeId}><td${_scopeId}>LAST_UPDATED_BY</td><td${_scopeId}>VARCHAR2(64)</td><td${_scopeId}>\u6700\u540E\u66F4\u65B0\u4EBA</td><td${_scopeId}>-</td><td${_scopeId}>\u7CFB\u7EDF\u81EA\u52A8</td></tr><tr${_scopeId}><td${_scopeId}>LAST_UPDATE_DATE</td><td${_scopeId}>TIMESTAMP</td><td${_scopeId}>\u6700\u540E\u66F4\u65B0\u65F6\u95F4</td><td${_scopeId}>-</td><td${_scopeId}>\u7CFB\u7EDF\u81EA\u52A8</td></tr></tbody></table>`);
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
                createVNode("td", null, "APPLY_CODE"),
                createVNode("td", null, "VARCHAR2(64)"),
                createVNode("td", null, "\u7533\u8BF7\u7F16\u7801"),
                createVNode("td", null, "\u7533\u8BF7\u7F16\u7801"),
                createVNode("td", null, "\u7CFB\u7EDF\u751F\u6210\uFF0CPK")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "SPECIAL_TRAIN_CAMP_APPLY_ID"),
                createVNode("td", null, "NUMBER"),
                createVNode("td", null, "\u7533\u8BF7ID"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u5E8F\u5217\u81EA\u589E")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "CAMP_CODE"),
                createVNode("td", null, "VARCHAR2(64)"),
                createVNode("td", null, "\u7279\u8BAD\u8425\u7F16\u7801"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u5173\u8054\u7279\u8BAD\u8425")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "CAMP_NAME"),
                createVNode("td", null, "VARCHAR2(255)"),
                createVNode("td", null, "\u7279\u8BAD\u8425\u540D\u79F0"),
                createVNode("td", null, "\u7279\u8BAD\u8425\u9009\u62E9"),
                createVNode("td", null, "\u5173\u8054\u7279\u8BAD\u8425")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "CAMP_TYPE"),
                createVNode("td", null, "VARCHAR2(32)"),
                createVNode("td", null, "\u7279\u8BAD\u8425\u7C7B\u578B"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u503C\u96C6MBO.CAMP_TYPE")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "APPLY_STATE"),
                createVNode("td", null, "VARCHAR2(32)"),
                createVNode("td", null, "\u7533\u8BF7\u72B6\u6001"),
                createVNode("td", null, "\u70B9\u5C06\u72B6\u6001"),
                createVNode("td", null, "\u503C\u96C6MBO.CAMP_APPLY_STATE")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "APPROVAL_STATE"),
                createVNode("td", null, "VARCHAR2(32)"),
                createVNode("td", null, "\u5BA1\u6838\u72B6\u6001"),
                createVNode("td", null, "\u5BA1\u6838\u72B6\u6001"),
                createVNode("td", null, "\u503C\u96C6MBO.APPLY_APPROVAL_STATE")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "CANCEL_APPROVAL_STATE"),
                createVNode("td", null, "VARCHAR2(32)"),
                createVNode("td", null, "\u53D6\u6D88\u5BA1\u6838\u72B6\u6001"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u503C\u96C6MBO.CANCEL_APPROVAL_STATE")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "BEFORE_SETTLEMENT_CONFIRM_STATE"),
                createVNode("td", null, "VARCHAR2(32)"),
                createVNode("td", null, "\u7ED3\u7B97\u524D\u786E\u8BA4\u72B6\u6001"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u503C\u96C6MBO.BEFORE_SETTLEMENT_CONFIRM_STATE")
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
                createVNode("td", null, "PLAN_START_TIME"),
                createVNode("td", null, "DATE"),
                createVNode("td", null, "\u57F9\u8BAD\u5F00\u59CB\u65F6\u95F4"),
                createVNode("td", null, "\u5F00\u59CB\u65F6\u95F4"),
                createVNode("td", null, "\u5173\u8054\u7279\u8BAD\u8425")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "PLAN_END_TIME"),
                createVNode("td", null, "DATE"),
                createVNode("td", null, "\u57F9\u8BAD\u7ED3\u675F\u65F6\u95F4"),
                createVNode("td", null, "\u7ED3\u675F\u65F6\u95F4"),
                createVNode("td", null, "\u5173\u8054\u7279\u8BAD\u8425")
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
                createVNode("td", null, "ADDRESS"),
                createVNode("td", null, "VARCHAR2(500)"),
                createVNode("td", null, "\u57F9\u8BAD\u5730\u70B9"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u5173\u8054\u7279\u8BAD\u8425")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "LECTURER"),
                createVNode("td", null, "VARCHAR2(255)"),
                createVNode("td", null, "\u8BB2\u5E08"),
                createVNode("td", null, "\u57F9\u8BAD\u5E08"),
                createVNode("td", null, "\u5173\u8054\u7279\u8BAD\u8425")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "LECTURER_CODE"),
                createVNode("td", null, "VARCHAR2(64)"),
                createVNode("td", null, "\u8BB2\u5E08\u7F16\u7801"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u5173\u8054\u7279\u8BAD\u8425")
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
                createVNode("td", null, "LEGAL_ENTITY_CODE"),
                createVNode("td", null, "VARCHAR2(64)"),
                createVNode("td", null, "\u6CD5\u4EBA\u4E3B\u4F53\u7F16\u7801"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u62A5\u540D\u65F6\u9009\u62E9")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "LEGAL_ENTITY_NAME"),
                createVNode("td", null, "VARCHAR2(255)"),
                createVNode("td", null, "\u6CD5\u4EBA\u4E3B\u4F53\u540D\u79F0"),
                createVNode("td", null, "\u6CD5\u4EBA\u4E3B\u4F53"),
                createVNode("td", null, "\u62A5\u540D\u65F6\u9009\u62E9")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "TRADING_COMPANY_ID"),
                createVNode("td", null, "NUMBER"),
                createVNode("td", null, "\u4EA4\u6613\u516C\u53F8ID"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u62A5\u540D\u65F6\u9009\u62E9")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "TRADING_COMPANY_NAME"),
                createVNode("td", null, "VARCHAR2(255)"),
                createVNode("td", null, "\u4EA4\u6613\u516C\u53F8\u540D\u79F0"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u62A5\u540D\u65F6\u9009\u62E9")
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
                createVNode("td", null, "CREATED_BY"),
                createVNode("td", null, "VARCHAR2(64)"),
                createVNode("td", null, "\u521B\u5EFA\u4EBA"),
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
                createVNode("td", null, "TIMESTAMP"),
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
        _push2(`<div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- \u67E5\u8BE2\u7ECF\u9500\u5546\u7279\u8BAD\u8425\u70B9\u5C06\u7533\u8BF7</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  tca.APPLY_CODE    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7533\u8BF7\u7F16\u7801,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  tca.CAMP_NAME     </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7279\u8BAD\u8425\u540D\u79F0,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  tca.LECTURER      </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u57F9\u8BAD\u5E08,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  tca.APPLY_STATE   </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u70B9\u5C06\u72B6\u6001,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  tca.APPROVAL_STATE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5BA1\u6838\u72B6\u6001,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  TO_CHAR(tca.PLAN_START_TIME, </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>YYYY-MM-DD</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5F00\u59CB\u65F6\u95F4,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  TO_CHAR(tca.PLAN_END_TIME, </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>YYYY-MM-DD</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7ED3\u675F\u65F6\u95F4,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  tca.PRE_ORD_LECTURER_DAYS </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u62DF\u70B9\u5C06\u5929\u6570,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  tca.REAL_ORD_LECTURER_DAYS </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5B9E\u9645\u70B9\u5C06\u5929\u6570</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> TRAIN_CAMP_APPLY tca</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ORDER BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> tca.CREATE_DATE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>DESC</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- \u67E5\u8BE2\u53EF\u53D6\u6D88\u7684\u7279\u8BAD\u8425\u7533\u8BF7\uFF08\u63D0\u524D7\u5929\u4E14\u5DF2\u7B7E\u7EA6\uFF09</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  tca.APPLY_CODE    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7533\u8BF7\u7F16\u7801,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  TO_CHAR(tca.PLAN_START_TIME, </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>YYYY-MM-DD</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u57F9\u8BAD\u5F00\u59CB\u65F6\u95F4,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}>ROUND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>((tca.PLAN_START_TIME </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>-</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>SYSDATE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>)) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u8DDD\u5F00\u59CB\u5929\u6570</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> TRAIN_CAMP_APPLY tca</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> tca.APPROVAL_STATE </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>fdd_sign</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> tca.PLAN_START_TIME </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>SYSDATE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>+</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>7</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (tca.CANCEL_APPROVAL_STATE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>       </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>OR</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> tca.CANCEL_APPROVAL_STATE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>reject</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>oa_reject</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>));</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- \u67E5\u8BE2\u5F85\u7ED3\u7B97\u524D\u786E\u8BA4\u7684\u7533\u8BF7</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  tca.APPLY_CODE    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7533\u8BF7\u7F16\u7801,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  tca.CAMP_NAME     </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7279\u8BAD\u8425\u540D\u79F0,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  tca.BEFORE_SETTLEMENT_CONFIRM_STATE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7ED3\u7B97\u524D\u786E\u8BA4\u72B6\u6001</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> TRAIN_CAMP_APPLY tca</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> tca.BEFORE_SETTLEMENT_CONFIRM_STATE </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>to_be_confirm</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- \u67E5\u8BE2\u8BB2\u5E08\u6392\u671F\u51B2\u7A81</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  tca.APPLY_CODE    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7533\u8BF7\u7F16\u7801,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  tca.LECTURER      </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u57F9\u8BAD\u5E08,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  TO_CHAR(tca.PLAN_START_TIME, </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>YYYY-MM-DD</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5F00\u59CB\u65F6\u95F4,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  TO_CHAR(tca.PLAN_END_TIME, </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>YYYY-MM-DD</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7ED3\u675F\u65F6\u95F4</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> TRAIN_CAMP_APPLY tca</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> tca.LECTURER_CODE </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> :lecturerCode</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> tca.APPLY_STATE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>valid</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>executing</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> tca.PLAN_START_TIME </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&lt;=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> :planEndTime</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> tca.PLAN_END_TIME </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> :planStartTime;</span></span>
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
                  createVNode("span", { style: { "color": "#676E95" } }, "-- \u67E5\u8BE2\u7ECF\u9500\u5546\u7279\u8BAD\u8425\u70B9\u5C06\u7533\u8BF7")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "SELECT")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  tca.APPLY_CODE    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7533\u8BF7\u7F16\u7801,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  tca.CAMP_NAME     "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7279\u8BAD\u8425\u540D\u79F0,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  tca.LECTURER      "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u57F9\u8BAD\u5E08,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  tca.APPLY_STATE   "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u70B9\u5C06\u72B6\u6001,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  tca.APPROVAL_STATE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5BA1\u6838\u72B6\u6001,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  TO_CHAR(tca.PLAN_START_TIME, "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "YYYY-MM-DD"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5F00\u59CB\u65F6\u95F4,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  TO_CHAR(tca.PLAN_END_TIME, "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "YYYY-MM-DD"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7ED3\u675F\u65F6\u95F4,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  tca.PRE_ORD_LECTURER_DAYS "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u62DF\u70B9\u5C06\u5929\u6570,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  tca.REAL_ORD_LECTURER_DAYS "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5B9E\u9645\u70B9\u5C06\u5929\u6570")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " TRAIN_CAMP_APPLY tca")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ORDER BY"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " tca.CREATE_DATE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "DESC"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#676E95" } }, "-- \u67E5\u8BE2\u53EF\u53D6\u6D88\u7684\u7279\u8BAD\u8425\u7533\u8BF7\uFF08\u63D0\u524D7\u5929\u4E14\u5DF2\u7B7E\u7EA6\uFF09")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "SELECT")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  tca.APPLY_CODE    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7533\u8BF7\u7F16\u7801,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  TO_CHAR(tca.PLAN_START_TIME, "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "YYYY-MM-DD"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u57F9\u8BAD\u5F00\u59CB\u65F6\u95F4,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#82AAFF" } }, "ROUND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "((tca.PLAN_START_TIME "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "-"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#C792EA" } }, "SYSDATE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ")) "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u8DDD\u5F00\u59CB\u5929\u6570")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " TRAIN_CAMP_APPLY tca")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " tca.APPROVAL_STATE "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "fdd_sign"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " tca.PLAN_START_TIME "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#C792EA" } }, "SYSDATE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "+"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "7")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " (tca.CANCEL_APPROVAL_STATE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NULL")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "       "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "OR"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " tca.CANCEL_APPROVAL_STATE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IN"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " ("),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "reject"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ", "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "oa_reject"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "));")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#676E95" } }, "-- \u67E5\u8BE2\u5F85\u7ED3\u7B97\u524D\u786E\u8BA4\u7684\u7533\u8BF7")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "SELECT")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  tca.APPLY_CODE    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7533\u8BF7\u7F16\u7801,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  tca.CAMP_NAME     "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7279\u8BAD\u8425\u540D\u79F0,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  tca.BEFORE_SETTLEMENT_CONFIRM_STATE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7ED3\u7B97\u524D\u786E\u8BA4\u72B6\u6001")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " TRAIN_CAMP_APPLY tca")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " tca.BEFORE_SETTLEMENT_CONFIRM_STATE "),
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
                  createVNode("span", { style: { "color": "#676E95" } }, "-- \u67E5\u8BE2\u8BB2\u5E08\u6392\u671F\u51B2\u7A81")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "SELECT")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  tca.APPLY_CODE    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7533\u8BF7\u7F16\u7801,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  tca.LECTURER      "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u57F9\u8BAD\u5E08,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  TO_CHAR(tca.PLAN_START_TIME, "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "YYYY-MM-DD"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5F00\u59CB\u65F6\u95F4,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  TO_CHAR(tca.PLAN_END_TIME, "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "YYYY-MM-DD"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7ED3\u675F\u65F6\u95F4")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " TRAIN_CAMP_APPLY tca")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " tca.LECTURER_CODE "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " :lecturerCode")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " tca.APPLY_STATE "),
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " tca.PLAN_START_TIME "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "<="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " :planEndTime")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " tca.PLAN_END_TIME "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, ">="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " :planStartTime;")
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
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u62A5\u9519\u4FE1\u606F</th><th${_scopeId}>\u63D0\u793A\u8282\u70B9</th><th${_scopeId}>\u6839\u56E0\u4E0E\u89E3\u51B3\u65B9\u6848</th><th${_scopeId}>\u7B49\u7EA7</th><th${_scopeId}>\u8BE6\u7EC6\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u8BF7\u9009\u62E9\u4E00\u6761\u6570\u636E</td><td${_scopeId}>\u64CD\u4F5C\u6309\u94AE\u524D\u7F6E\u6821\u9A8C</td><td${_scopeId}>\u672A\u9009\u62E9\u6216\u9009\u62E9\u591A\u884C\uFF1B\u9009\u62E9\u4E00\u6761\u6570\u636E\u540E\u91CD\u8BD5</td><td${_scopeId}>\u63D0\u793A</td><td${_scopeId}>\u901A\u7528\u5355\u9009\u6821\u9A8C</td></tr><tr${_scopeId}><td${_scopeId}>\u53EA\u6709\u57F9\u8BAD\u65F6\u95F4\u5F00\u59CB\u524D7\u5929\u7684\u6D41\u7A0B\u53EF\u4EE5\u53D1\u8D77\u70B9\u5C06\u53D6\u6D88\u7533\u8BF7\uFF01</td><td${_scopeId}>\u53D6\u6D88\u7533\u8BF7\u6309\u94AE</td><td${_scopeId}>\u4E0D\u6EE1\u8DB3\u63D0\u524D7\u5929\uFF1B\u786E\u8BA4planStartTime\u4E0E\u5F53\u524D\u65F6\u95F4\u5DEE\u503C&gt;=7</td><td${_scopeId}>\u63D0\u793A</td><td${_scopeId}>timeDiff&gt;=7</td></tr><tr${_scopeId}><td${_scopeId}>\u8BE5\u72B6\u6001\u5355\u636E\u65E0\u6CD5\u53D1\u8D77\u53D6\u6D88\u7533\u8BF7\uFF01</td><td${_scopeId}>\u53D6\u6D88\u7533\u8BF7\u6309\u94AE</td><td${_scopeId}>\u72B6\u6001\u6821\u9A8C\u4E0D\u901A\u8FC7\uFF1B\u786E\u8BA4\u5BA1\u6279\u72B6\u6001\u548C\u53D6\u6D88\u72B6\u6001</td><td${_scopeId}>\u63D0\u793A</td><td${_scopeId}>approvalState\u975Efdd_sign\u6216cancelApprovalState\u975E\u7A7A\u4E14\u975E\u9A73\u56DE</td></tr><tr${_scopeId}><td${_scopeId}>\u5F53\u524D\u72B6\u6001\u6570\u636E\u65E0\u6CD5\u7F16\u8F91\uFF01</td><td${_scopeId}>\u7F16\u8F91\u6309\u94AE</td><td${_scopeId}>\u72B6\u6001\u975E\u8349\u7A3F\u4E14\u975E\u9A73\u56DE\uFF1B\u786E\u8BA4\u7533\u8BF7\u72B6\u6001</td><td${_scopeId}>\u63D0\u793A</td><td${_scopeId}>applyState\u975Edraft\u4E14approvalState\u975E\u9A73\u56DE</td></tr><tr${_scopeId}><td${_scopeId}>\u7ECF\u9500\u5546\u4E0D\u80FD\u4E3A\u7A7A</td><td${_scopeId}>\u4FDD\u5B58\u63D0\u4EA4</td><td${_scopeId}>\u672A\u9009\u62E9\u7ECF\u9500\u5546\uFF1B\u9009\u62E9\u7ECF\u9500\u5546\u540E\u4FDD\u5B58</td><td${_scopeId}>\u63D0\u793A</td><td${_scopeId}>dealerName\u5FC5\u586B</td></tr><tr${_scopeId}><td${_scopeId}>\u7279\u8BAD\u8425\u4E0D\u80FD\u4E3A\u7A7A</td><td${_scopeId}>\u4FDD\u5B58\u63D0\u4EA4</td><td${_scopeId}>\u672A\u9009\u62E9\u7279\u8BAD\u8425\uFF1B\u9009\u62E9\u7279\u8BAD\u8425\u540E\u4FDD\u5B58</td><td${_scopeId}>\u63D0\u793A</td><td${_scopeId}>campName\u5FC5\u586B</td></tr><tr${_scopeId}><td${_scopeId}>\u6CD5\u4EBA\u4E3B\u4F53\u4E0D\u80FD\u4E3A\u7A7A</td><td${_scopeId}>\u4FDD\u5B58\u63D0\u4EA4</td><td${_scopeId}>\u672A\u9009\u62E9\u6CD5\u4EBA\u4E3B\u4F53\uFF1B\u9009\u62E9\u6CD5\u4EBA\u4E3B\u4F53\u540E\u4FDD\u5B58</td><td${_scopeId}>\u63D0\u793A</td><td${_scopeId}>legalEntityName\u5FC5\u586B</td></tr><tr${_scopeId}><td${_scopeId}>\u8BB2\u5E08\u4E0D\u80FD\u4E3A\u7A7A</td><td${_scopeId}>\u4FDD\u5B58\u63D0\u4EA4</td><td${_scopeId}>\u672A\u9009\u62E9\u8BB2\u5E08\uFF1B\u9009\u62E9\u8BB2\u5E08\u540E\u4FDD\u5B58</td><td${_scopeId}>\u63D0\u793A</td><td${_scopeId}>lecturer\u5FC5\u586B</td></tr><tr${_scopeId}><td${_scopeId}>\u62DF\u70B9\u5C06\u5929\u6570\u4E0D\u80FD\u4E3A\u7A7A</td><td${_scopeId}>\u4FDD\u5B58\u63D0\u4EA4</td><td${_scopeId}>\u672A\u586B\u5199\u62DF\u70B9\u5C06\u5929\u6570\uFF1B\u586B\u5199\u540E\u4FDD\u5B58</td><td${_scopeId}>\u63D0\u793A</td><td${_scopeId}>preOrdLecturerDays\u5FC5\u586B</td></tr><tr${_scopeId}><td${_scopeId}>\u8BB2\u5E08\u6392\u671F\u51B2\u7A81</td><td${_scopeId}>\u4FDD\u5B58\u63D0\u4EA4</td><td${_scopeId}>\u6240\u9009\u8BB2\u5E08\u5728\u65F6\u95F4\u6BB5\u5185\u5DF2\u6709\u751F\u6548\u70B9\u5C06\uFF1B\u66F4\u6362\u8BB2\u5E08\u6216\u8C03\u6574\u65F6\u95F4</td><td${_scopeId}>\u63D0\u793A</td><td${_scopeId}>\u6392\u671F\u51B2\u7A81\u6821\u9A8C</td></tr><tr${_scopeId}><td${_scopeId}>\u624B\u673A\u53F7\u683C\u5F0F\u4E0D\u6B63\u786E</td><td${_scopeId}>\u62A5\u540D\u4EBA\u5458\u660E\u7EC6</td><td${_scopeId}>\u624B\u673A\u53F7\u4E0D\u7B26\u5408\u6B63\u5219\uFF1B\u586B\u5199\u6B63\u786E\u624B\u673A\u53F7</td><td${_scopeId}>\u63D0\u793A</td><td${_scopeId}>/^1[3456789]\\d{9}$/</td></tr><tr${_scopeId}><td${_scopeId}>\u8BF7\u6C42\u5931\u8D25</td><td${_scopeId}>\u63A5\u53E3\u8C03\u7528</td><td${_scopeId}>\u540E\u7AEF\u670D\u52A1\u5F02\u5E38\uFF1B\u68C0\u67E5\u540E\u7AEF\u670D\u52A1\u72B6\u6001</td><td${_scopeId}>\u9519\u8BEF</td><td${_scopeId}>\u63A5\u53E3\u8FD4\u56DE\u975E\u6210\u529F\u72B6\u6001</td></tr><tr${_scopeId}><td${_scopeId}>\u7F51\u7EDC\u5F02\u5E38/\u63A5\u53E3\u8D85\u65F6</td><td${_scopeId}>\u4EFB\u610F\u63A5\u53E3\u8C03\u7528</td><td${_scopeId}>\u7F51\u7EDC\u4E2D\u65AD\u6216\u63A5\u53E3\u54CD\u5E94\u8D85\u65F6\uFF0C\u68C0\u67E5\u7F51\u7EDC\u53CA\u540E\u7AEF\u8D85\u65F6\u914D\u7F6E</td><td${_scopeId}>error</td><td${_scopeId}>axios catch \u6216 timeout</td></tr><tr${_scopeId}><td${_scopeId}>\u6743\u9650\u4E0D\u8DB3</td><td${_scopeId}>\u70B9\u51FB\u64CD\u4F5C\u6309\u94AE</td><td${_scopeId}>\u5F53\u524D\u7528\u6237\u65E0\u5BF9\u5E94\u6309\u94AE\u6743\u9650\u7801\uFF0C\u8054\u7CFB\u7BA1\u7406\u5458\u6388\u6743</td><td${_scopeId}>error</td><td${_scopeId}>permissionList \u6821\u9A8C\u672A\u901A\u8FC7</td></tr><tr${_scopeId}><td${_scopeId}>\u6570\u636E\u4E0D\u5B58\u5728</td><td${_scopeId}>\u67E5\u770B/\u7F16\u8F91/\u5220\u9664</td><td${_scopeId}>\u7533\u8BF7\u7F16\u7801\u4E0D\u5B58\u5728\u6216\u5DF2\u5220\u9664\uFF0C\u68C0\u67E5 APPLY_CODE \u6709\u6548\u6027</td><td${_scopeId}>error</td><td${_scopeId}>\u63A5\u53E3\u8FD4\u56DE\u6570\u636E\u4E3A\u7A7A</td></tr><tr${_scopeId}><td${_scopeId}>\u72B6\u6001\u4E0D\u5141\u8BB8\u64CD\u4F5C</td><td${_scopeId}>\u53D6\u6D88\u7533\u8BF7/\u7ED3\u7B97\u786E\u8BA4</td><td${_scopeId}>\u7533\u8BF7\u72B6\u6001\u4E0D\u5728\u5141\u8BB8\u64CD\u4F5C\u7684\u72B6\u6001\u8303\u56F4\u5185\uFF0C\u68C0\u67E5 APPLY_STATE</td><td${_scopeId}>error</td><td${_scopeId}>\u540E\u7AEF\u6821\u9A8C\u72B6\u6001\u673A\u5931\u8D25</td></tr><tr${_scopeId}><td${_scopeId}>\u503C\u96C6\u6570\u636E\u4E0D\u663E\u793A</td><td${_scopeId}>\u4E0B\u62C9\u9009\u9879</td><td${_scopeId}>\u503C\u96C6 MBO.ORDER_LECTURE_STATE \u7B49\u672A\u914D\u7F6E\uFF0C\u68C0\u67E5\u503C\u96C6\u914D\u7F6E</td><td${_scopeId}>warning</td><td${_scopeId}>lookupCode \u67E5\u8BE2\u8FD4\u56DE\u7A7A</td></tr><tr${_scopeId}><td${_scopeId}>\u62A5\u540D\u4EBA\u5458\u660E\u7EC6\u4E0D\u80FD\u4E3A\u7A7A</td><td${_scopeId}>\u4FDD\u5B58\u63D0\u4EA4</td><td${_scopeId}>\u672A\u6DFB\u52A0\u62A5\u540D\u4EBA\u5458\u660E\u7EC6\uFF0C\u6DFB\u52A0\u540E\u4FDD\u5B58</td><td${_scopeId}>error</td><td${_scopeId}>\u540E\u7AEF\u6821\u9A8C\u660E\u7EC6\u884C\u975E\u7A7A</td></tr><tr${_scopeId}><td${_scopeId}>\u62DF\u70B9\u5C06\u5929\u6570\u5FC5\u987B\u5927\u4E8E0</td><td${_scopeId}>\u4FDD\u5B58\u63D0\u4EA4</td><td${_scopeId}>\u62DF\u70B9\u5C06\u5929\u6570\u4E3A0\u6216\u8D1F\u6570\uFF0C\u68C0\u67E5 PRE_ORD_LECTURER_DAYS</td><td${_scopeId}>error</td><td${_scopeId}>\u540E\u7AEF\u6821\u9A8C PRE_ORD_LECTURER_DAYS &gt; 0</td></tr></tbody></table><h4${_scopeId}>\u62A5\u95191\uFF1A\u8BF7\u9009\u62E9\u4E00\u6761\u6570\u636E</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u70B9\u51FB\u7F16\u8F91\u3001\u5220\u9664\u3001\u53D6\u6D88\u7533\u8BF7\u3001\u7ED3\u7B97\u524D\u786E\u8BA4\u3001\u67E5\u770B\u6D41\u7A0B\u7B49\u884C\u64CD\u4F5C\u6309\u94AE\u65F6\uFF0C\u672A\u9009\u62E9\u6570\u636E\u6216\u9009\u62E9\u4E86\u591A\u884C</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u524D\u7AEF\u5728\u6267\u884C\u5355\u9009\u64CD\u4F5C\u524D\u6821\u9A8C\u9009\u4E2D\u884C\u6570\u91CF\uFF0C\u82E5 selectedRows.length \u2260 1 \u5219\u963B\u6B62\u64CD\u4F5C\u5E76\u63D0\u793A&quot;\u8BF7\u9009\u62E9\u4E00\u6761\u6570\u636E&quot;\u3002\u5355\u9009\u64CD\u4F5C\u9700\u8981\u660E\u786E\u7684\u76EE\u6807\u7533\u8BF7\uFF0C\u672A\u9009\u62E9\u65F6\u65E0\u6CD5\u786E\u5B9A\u64CD\u4F5C\u5BF9\u8C61\uFF0C\u591A\u9009\u65F6\u64CD\u4F5C\u5BF9\u8C61\u4E0D\u552F\u4E00</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> APPLY_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7533\u8BF7\u7F16\u7801,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         CAMP_NAME </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7279\u8BAD\u8425\u540D\u79F0,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         LECTURER </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u57F9\u8BAD\u5E08,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         APPLY_STATE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7533\u8BF7\u72B6\u6001,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         APPROVAL_STATE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5BA1\u6838\u72B6\u6001</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> TRAIN_CAMP_APPLY</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ORDER BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> CREATE_DATE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>DESC</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95192\uFF1A\u53EA\u6709\u57F9\u8BAD\u65F6\u95F4\u5F00\u59CB\u524D7\u5929\u7684\u6D41\u7A0B\u53EF\u4EE5\u53D1\u8D77\u70B9\u5C06\u53D6\u6D88\u7533\u8BF7\uFF01</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u70B9\u51FB\u53D6\u6D88\u7533\u8BF7\u6309\u94AE\u65F6\uFF0C\u4E0D\u6EE1\u8DB3&quot;\u57F9\u8BAD\u5F00\u59CB\u524D7\u5929&quot;\u6761\u4EF6</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u524D\u7AEF\u8BA1\u7B97\u65F6\u95F4\u5DEE\u503C timeDiff = (PLAN_START_TIME - nowTime) / (24*60*60*1000)\uFF0C\u6821\u9A8C timeDiff &gt;= 7\uFF08\u57F9\u8BAD\u5F00\u59CB\u524D\u81F3\u5C117\u5929\uFF09\u3002\u6821\u9A8C\u4E0D\u901A\u8FC7\u5219\u63D0\u793A&quot;\u53EA\u6709\u57F9\u8BAD\u65F6\u95F4\u5F00\u59CB\u524D7\u5929\u7684\u6D41\u7A0B\u53EF\u4EE5\u53D1\u8D77\u70B9\u5C06\u53D6\u6D88\u7533\u8BF7\uFF01&quot;\u3002\u6B64\u6821\u9A8C\u786E\u4FDD\u6709\u5145\u8DB3\u65F6\u95F4\u901A\u77E5\u8BB2\u5E08\u548C\u53C2\u8BAD\u4EBA\u5458\u8C03\u6574\u5B89\u6392\uFF0C\u907F\u514D\u4E34\u65F6\u53D6\u6D88\u9020\u6210\u8D44\u6E90\u6D6A\u8D39</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> APPLY_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7533\u8BF7\u7F16\u7801,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         CAMP_NAME </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7279\u8BAD\u8425\u540D\u79F0,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         TO_CHAR(PLAN_START_TIME,</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>YYYY-MM-DD</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u57F9\u8BAD\u5F00\u59CB\u65F6\u95F4,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         APPROVAL_STATE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5BA1\u6838\u72B6\u6001,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}>ROUND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>(PLAN_START_TIME </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>-</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>SYSDATE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u8DDD\u5F00\u59CB\u5929\u6570</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> TRAIN_CAMP_APPLY</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> PLAN_START_TIME </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&lt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>SYSDATE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>+</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>7</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95193\uFF1A\u8BE5\u72B6\u6001\u5355\u636E\u65E0\u6CD5\u53D1\u8D77\u53D6\u6D88\u7533\u8BF7\uFF01</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u70B9\u51FB\u53D6\u6D88\u7533\u8BF7\u6309\u94AE\u65F6\uFF0C\u5BA1\u6279\u72B6\u6001\u4E0D\u4E3A fdd_sign \u6216\u5DF2\u6709\u8FDB\u884C\u4E2D\u7684\u53D6\u6D88\u7533\u8BF7</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u524D\u7AEF\u6267\u884C\u591A\u91CD\u6821\u9A8C\uFF1A\u2460\u6821\u9A8C APPROVAL_STATE = &#39;fdd_sign&#39;\uFF08\u5DF2\u6CD5\u5927\u5927\u7B7E\u7EA6\uFF09\uFF1B\u2461\u6821\u9A8C CANCEL_APPROVAL_STATE \u4E3A\u7A7A\u6216\u4E3A reject/oa_reject\uFF08\u672A\u53D6\u6D88\u6216\u5DF2\u9A73\u56DE\uFF09\u3002\u4EFB\u4E00\u6821\u9A8C\u4E0D\u901A\u8FC7\u5219\u63D0\u793A&quot;\u8BE5\u72B6\u6001\u5355\u636E\u65E0\u6CD5\u53D1\u8D77\u53D6\u6D88\u7533\u8BF7\uFF01&quot;\u3002\u786E\u4FDD\u4EC5\u5DF2\u7B7E\u7EA6\u751F\u6548\u4E14\u672A\u91CD\u590D\u53D6\u6D88\u7684\u5355\u636E\u53EF\u53D1\u8D77\u53D6\u6D88</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> APPLY_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7533\u8BF7\u7F16\u7801,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         CAMP_NAME </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7279\u8BAD\u8425\u540D\u79F0,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         APPROVAL_STATE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5BA1\u6838\u72B6\u6001,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         CANCEL_APPROVAL_STATE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u53D6\u6D88\u5BA1\u6838\u72B6\u6001</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> TRAIN_CAMP_APPLY</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> APPROVAL_STATE </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&lt;&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>fdd_sign</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>OR</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (CANCEL_APPROVAL_STATE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NOT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>        </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> CANCEL_APPROVAL_STATE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NOT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>reject</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>oa_reject</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>));</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95194\uFF1A\u5F53\u524D\u72B6\u6001\u6570\u636E\u65E0\u6CD5\u7F16\u8F91\uFF01</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u70B9\u51FB\u7F16\u8F91\u6309\u94AE\u65F6\uFF0C\u72B6\u6001\u975E\u8349\u7A3F\u4E14\u975E\u5404\u7C7B\u9A73\u56DE\u72B6\u6001</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u524D\u7AEF\u6821\u9A8C APPLY_STATE = &#39;draft&#39;\uFF08\u8349\u7A3F\uFF09\u6216 APPROVAL_STATE \u4E3A reject/oa_reject\uFF08\u5404\u79CD\u9A73\u56DE\uFF09\uFF0C\u4EFB\u4E00\u6761\u4EF6\u6EE1\u8DB3\u624D\u5141\u8BB8\u7F16\u8F91\u3002\u5DF2\u751F\u6548\uFF08valid\uFF09\u3001\u5BA1\u6279\u4E2D\uFF08approving\uFF09\u7B49\u72B6\u6001\u7684\u7533\u8BF7\u5DF2\u88AB\u4E0B\u6E38\u5F15\u7528\uFF0C\u7F16\u8F91\u53EF\u80FD\u5F71\u54CD\u6570\u636E\u4E00\u81F4\u6027\uFF0C\u6545\u9650\u5236\u7F16\u8F91\u3002\u6821\u9A8C\u4E0D\u901A\u8FC7\u63D0\u793A&quot;\u5F53\u524D\u72B6\u6001\u6570\u636E\u65E0\u6CD5\u7F16\u8F91\uFF01&quot;</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> APPLY_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7533\u8BF7\u7F16\u7801,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         CAMP_NAME </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7279\u8BAD\u8425\u540D\u79F0,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         APPLY_STATE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7533\u8BF7\u72B6\u6001,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         APPROVAL_STATE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5BA1\u6838\u72B6\u6001</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> TRAIN_CAMP_APPLY</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> APPLY_STATE </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&lt;&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>draft</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> APPROVAL_STATE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NOT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>reject</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>oa_reject</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>);</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95195\uFF1A\u7ECF\u9500\u5546\u4E0D\u80FD\u4E3A\u7A7A</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u4FDD\u5B58\u6216\u4FDD\u5B58\u5E76\u63D0\u4EA4\u65F6\uFF0CdealerName \u5B57\u6BB5\u4E3A\u7A7A</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u524D\u7AEF\u8868\u5355\u5BF9 dealerName \u5B57\u6BB5\u914D\u7F6E required \u6821\u9A8C\uFF0C\u63D0\u4EA4\u524D\u6821\u9A8C\u7ECF\u9500\u5546\u662F\u5426\u9009\u62E9\uFF0C\u4E3A\u7A7A\u5219\u963B\u6B62\u63D0\u4EA4\u5E76\u63D0\u793A&quot;\u7ECF\u9500\u5546\u4E0D\u80FD\u4E3A\u7A7A&quot;\u3002\u7ECF\u9500\u5546\u662F\u70B9\u5C06\u7533\u8BF7\u7684\u53D1\u8D77\u4E3B\u4F53\uFF0C\u5FC5\u987B\u660E\u786E</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> APPLY_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7533\u8BF7\u7F16\u7801,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         CAMP_NAME </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7279\u8BAD\u8425\u540D\u79F0,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         DEALER_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7ECF\u9500\u5546\u7F16\u7801,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         DEALER_NAME </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7ECF\u9500\u5546\u540D\u79F0</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> TRAIN_CAMP_APPLY</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> DEALER_NAME </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>OR</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> DEALER_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95196\uFF1A\u7279\u8BAD\u8425\u4E0D\u80FD\u4E3A\u7A7A</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u4FDD\u5B58\u6216\u4FDD\u5B58\u5E76\u63D0\u4EA4\u65F6\uFF0CcampName \u5B57\u6BB5\u4E3A\u7A7A</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u524D\u7AEF\u8868\u5355\u5BF9 campName \u5B57\u6BB5\u914D\u7F6E required \u6821\u9A8C\uFF0C\u63D0\u4EA4\u524D\u6821\u9A8C\u7279\u8BAD\u8425\u662F\u5426\u9009\u62E9\uFF0C\u4E3A\u7A7A\u5219\u963B\u6B62\u63D0\u4EA4\u5E76\u63D0\u793A&quot;\u7279\u8BAD\u8425\u4E0D\u80FD\u4E3A\u7A7A&quot;\u3002\u7279\u8BAD\u8425\u662F\u70B9\u5C06\u7684\u53C2\u8BAD\u8425\u6B21\u6765\u6E90\uFF0C\u5FC5\u987B\u660E\u786E</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> APPLY_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7533\u8BF7\u7F16\u7801,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         CAMP_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7279\u8BAD\u8425\u7F16\u7801,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         CAMP_NAME </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7279\u8BAD\u8425\u540D\u79F0</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> TRAIN_CAMP_APPLY</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> CAMP_NAME </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>OR</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> CAMP_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95197\uFF1A\u6CD5\u4EBA\u4E3B\u4F53\u4E0D\u80FD\u4E3A\u7A7A</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u4FDD\u5B58\u6216\u4FDD\u5B58\u5E76\u63D0\u4EA4\u65F6\uFF0ClegalEntityName \u5B57\u6BB5\u4E3A\u7A7A</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u524D\u7AEF\u8868\u5355\u5BF9 legalEntityName \u5B57\u6BB5\u914D\u7F6E required \u6821\u9A8C\uFF0C\u63D0\u4EA4\u524D\u6821\u9A8C\u6CD5\u4EBA\u4E3B\u4F53\u662F\u5426\u9009\u62E9\uFF0C\u4E3A\u7A7A\u5219\u963B\u6B62\u63D0\u4EA4\u5E76\u63D0\u793A&quot;\u6CD5\u4EBA\u4E3B\u4F53\u4E0D\u80FD\u4E3A\u7A7A&quot;\u3002\u6CD5\u4EBA\u4E3B\u4F53\u7528\u4E8E\u540E\u7EED\u5408\u540C\u7B7E\u8BA2\u4E0E\u7ED3\u7B97\uFF0C\u5FC5\u987B\u660E\u786E</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> APPLY_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7533\u8BF7\u7F16\u7801,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         CAMP_NAME </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7279\u8BAD\u8425\u540D\u79F0,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         LEGAL_ENTITY_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u6CD5\u4EBA\u4E3B\u4F53\u7F16\u7801,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         LEGAL_ENTITY_NAME </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u6CD5\u4EBA\u4E3B\u4F53\u540D\u79F0</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> TRAIN_CAMP_APPLY</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> LEGAL_ENTITY_NAME </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>OR</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> LEGAL_ENTITY_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95198\uFF1A\u8BB2\u5E08\u4E0D\u80FD\u4E3A\u7A7A</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u4FDD\u5B58\u6216\u4FDD\u5B58\u5E76\u63D0\u4EA4\u65F6\uFF0Clecturer \u5B57\u6BB5\u4E3A\u7A7A</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u524D\u7AEF\u8868\u5355\u5BF9 lecturer \u5B57\u6BB5\u914D\u7F6E required \u6821\u9A8C\uFF0C\u63D0\u4EA4\u524D\u6821\u9A8C\u8BB2\u5E08\u662F\u5426\u9009\u62E9\uFF0C\u4E3A\u7A7A\u5219\u963B\u6B62\u63D0\u4EA4\u5E76\u63D0\u793A&quot;\u8BB2\u5E08\u4E0D\u80FD\u4E3A\u7A7A&quot;\u3002\u8BB2\u5E08\u662F\u70B9\u5C06\u7684\u6838\u5FC3\u5BF9\u8C61\uFF0C\u5FC5\u987B\u660E\u786E\u88AB\u70B9\u5C06\u4EBA</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> APPLY_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7533\u8BF7\u7F16\u7801,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         CAMP_NAME </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7279\u8BAD\u8425\u540D\u79F0,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         LECTURER_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u8BB2\u5E08\u7F16\u7801,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         LECTURER </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u8BB2\u5E08\u59D3\u540D</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> TRAIN_CAMP_APPLY</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> LECTURER </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>OR</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> LECTURER_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95199\uFF1A\u62DF\u70B9\u5C06\u5929\u6570\u4E0D\u80FD\u4E3A\u7A7A</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u4FDD\u5B58\u6216\u4FDD\u5B58\u5E76\u63D0\u4EA4\u65F6\uFF0CpreOrdLecturerDays \u5B57\u6BB5\u4E3A\u7A7A</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u524D\u7AEF\u8868\u5355\u5BF9 preOrdLecturerDays \u5B57\u6BB5\u914D\u7F6E required \u6821\u9A8C\uFF0C\u63D0\u4EA4\u524D\u6821\u9A8C\u62DF\u70B9\u5C06\u5929\u6570\u662F\u5426\u586B\u5199\uFF0C\u4E3A\u7A7A\u5219\u963B\u6B62\u63D0\u4EA4\u5E76\u63D0\u793A&quot;\u62DF\u70B9\u5C06\u5929\u6570\u4E0D\u80FD\u4E3A\u7A7A&quot;\u3002\u62DF\u70B9\u5C06\u5929\u6570\u7528\u4E8E\u8D39\u7528\u8BA1\u7B97\u4E0E\u8BB2\u5E08\u6392\u671F\uFF0C\u5FC5\u987B\u660E\u786E</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> APPLY_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7533\u8BF7\u7F16\u7801,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         CAMP_NAME </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7279\u8BAD\u8425\u540D\u79F0,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         PRE_ORD_LECTURER_DAYS </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u62DF\u70B9\u5C06\u5929\u6570</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> TRAIN_CAMP_APPLY</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> PRE_ORD_LECTURER_DAYS </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u951910\uFF1A\u8BB2\u5E08\u6392\u671F\u51B2\u7A81</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u4FDD\u5B58\u6216\u4FDD\u5B58\u5E76\u63D0\u4EA4\u65F6\uFF0C\u6240\u9009\u8BB2\u5E08\u5728\u62DF\u5B9A\u65F6\u95F4\u6BB5\u5185\u5DF2\u6709\u751F\u6548\u70B9\u5C06\u8BB0\u5F55</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u540E\u7AEF\u4FDD\u5B58\u524D\u6821\u9A8C\u8BB2\u5E08\u6392\u671F\u51B2\u7A81\uFF0C\u67E5\u8BE2 TRAIN_CAMP_APPLY \u8868\u4E2D\u540C\u4E00\u8BB2\u5E08\uFF08LECTURER_CODE \u76F8\u540C\uFF09\u4E14\u72B6\u6001\u4E3A valid \u6216 executing \u7684\u70B9\u5C06\u8BB0\u5F55\uFF0C\u5224\u65AD\u65B0\u7533\u8BF7\u7684 [PLAN_START_TIME, PLAN_END_TIME] \u4E0E\u5DF2\u6709\u8BB0\u5F55\u7684\u65F6\u95F4\u6BB5\u662F\u5426\u5B58\u5728\u4EA4\u96C6\u3002\u82E5\u5B58\u5728\u4EA4\u96C6\u5219\u63D0\u793A&quot;\u8BB2\u5E08\u6392\u671F\u51B2\u7A81&quot;\u5E76\u963B\u6B62\u4FDD\u5B58\u3002\u6B64\u6821\u9A8C\u907F\u514D\u540C\u4E00\u8BB2\u5E08\u5728\u540C\u4E00\u65F6\u95F4\u6BB5\u88AB\u91CD\u590D\u70B9\u5C06\uFF0C\u4FDD\u969C\u8BB2\u5E08\u6863\u671F\u5408\u7406\u6027</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> a.APPLY_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7533\u8BF71\u7F16\u7801,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         b.APPLY_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7533\u8BF72\u7F16\u7801,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         a.LECTURER </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u57F9\u8BAD\u5E08,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         TO_CHAR(a.PLAN_START_TIME,</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>YYYY-MM-DD</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7533\u8BF71\u5F00\u59CB,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         TO_CHAR(a.PLAN_END_TIME,</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>YYYY-MM-DD</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7533\u8BF71\u7ED3\u675F,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         TO_CHAR(b.PLAN_START_TIME,</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>YYYY-MM-DD</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7533\u8BF72\u5F00\u59CB,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         TO_CHAR(b.PLAN_END_TIME,</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>YYYY-MM-DD</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7533\u8BF72\u7ED3\u675F</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> TRAIN_CAMP_APPLY a</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>JOIN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> TRAIN_CAMP_APPLY b </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ON</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> a.APPLY_CODE </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&lt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> b.APPLY_CODE</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> a.LECTURER_CODE </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> b.LECTURER_CODE</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> a.APPLY_STATE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>valid</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>executing</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> b.APPLY_STATE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>valid</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>executing</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> a.PLAN_START_TIME </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&lt;=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> b.PLAN_END_TIME</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> a.PLAN_END_TIME </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> b.PLAN_START_TIME;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u951911\uFF1A\u624B\u673A\u53F7\u683C\u5F0F\u4E0D\u6B63\u786E</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u62A5\u540D\u4EBA\u5458\u660E\u7EC6\u4E2D\u624B\u673A\u53F7\u5B57\u6BB5\u4E0D\u7B26\u5408\u6B63\u5219 /^1[3456789]\\d{9}$/</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u524D\u7AEF\u5BF9\u62A5\u540D\u4EBA\u5458\u660E\u7EC6\u4E2D\u624B\u673A\u53F7\u5B57\u6BB5\u914D\u7F6E\u6B63\u5219\u6821\u9A8C\uFF0C\u63D0\u4EA4\u524D\u6821\u9A8C\u624B\u673A\u53F7\u683C\u5F0F\u662F\u5426\u5339\u914D /^1[3456789]\\d{9}$/\uFF081\u5F00\u5934\uFF0C\u7B2C\u4E8C\u4F4D3-9\uFF0C\u517111\u4F4D\u6570\u5B57\uFF09\u3002\u6821\u9A8C\u4E0D\u901A\u8FC7\u5219\u63D0\u793A&quot;\u624B\u673A\u53F7\u683C\u5F0F\u4E0D\u6B63\u786E&quot;\u3002\u786E\u4FDD\u53C2\u8BAD\u4EBA\u5458\u8054\u7CFB\u65B9\u5F0F\u6709\u6548\uFF0C\u4FBF\u4E8E\u540E\u7EED\u901A\u77E5</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> APPLY_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7533\u8BF7\u7F16\u7801,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         CAMP_NAME </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7279\u8BAD\u8425\u540D\u79F0</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> TRAIN_CAMP_APPLY tca</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>EXISTS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>1</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> TRAIN_CAMP_APPLY_USER u</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> u.APPLY_CODE </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> tca.APPLY_CODE</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>      </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (u.PHONE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>           </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>OR</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> u.PHONE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NOT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>LIKE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>1[3456789]________</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>           </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>OR</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>LENGTH</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>(u.PHONE) </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&lt;&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>11</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>           </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>OR</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> REGEXP_LIKE(u.PHONE, </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>[^0-9]</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>))</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  );</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u951912\uFF1A\u8BF7\u6C42\u5931\u8D25</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u8C03\u7528 mlt/trainCampApply/* \u7CFB\u5217\u63A5\u53E3\u65F6\uFF0C\u540E\u7AEF\u8FD4\u56DE HTTP \u72B6\u6001\u7801\u975E 2xx</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u524D\u7AEF\u901A\u8FC7 axios \u8C03\u7528\u540E\u7AEF\u63A5\u53E3\uFF0C\u82E5\u54CD\u5E94\u72B6\u6001\u7801\u975E 2xx \u6216\u7F51\u7EDC\u5F02\u5E38\u5219\u89E6\u53D1\u9519\u8BEF\u56DE\u8C03\uFF0C\u7EDF\u4E00\u63D0\u793A&quot;\u8BF7\u6C42\u5931\u8D25&quot;\u3002\u5E38\u89C1\u6839\u56E0\u5305\u62EC\uFF1Ambo-business \u5FAE\u670D\u52A1\u672A\u542F\u52A8\u6216\u5F02\u5E38\u3001\u6570\u636E\u5E93\u8FDE\u63A5\u5931\u8D25\u3001SQL \u6267\u884C\u8D85\u65F6\u3001\u540E\u7AEF\u4E1A\u52A1\u5F02\u5E38\u672A\u6355\u83B7\u3001\u5916\u90E8\u7CFB\u7EDF\uFF08OA/FDD/CRM\uFF09\u8C03\u7528\u5931\u8D25\u3001\u5DE5\u4F5C\u6D41\u5F15\u64CE\u5F02\u5E38\u3001\u7F51\u7EDC\u4E2D\u65AD\u7B49\u3002\u9700\u68C0\u67E5 mbo-business \u5FAE\u670D\u52A1\u8FD0\u884C\u72B6\u6001\u3001\u5916\u90E8\u7CFB\u7EDF\u8FDE\u901A\u6027\u3001\u5DE5\u4F5C\u6D41\u914D\u7F6E\u3001\u540E\u7AEF\u65E5\u5FD7\u5B9A\u4F4D\u5177\u4F53\u5F02\u5E38\u5806\u6808</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> APPLY_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7533\u8BF7\u7F16\u7801,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         CAMP_NAME </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7279\u8BAD\u8425\u540D\u79F0,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         APPLY_STATE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7533\u8BF7\u72B6\u6001,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         APPROVAL_STATE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5BA1\u6838\u72B6\u6001,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         CRM_ORDER_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> CRM\u5355\u53F7,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         TO_CHAR(LAST_UPDATE_DATE,</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>YYYY-MM-DD HH24:MI:SS</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u6700\u540E\u66F4\u65B0\u65F6\u95F4</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> TRAIN_CAMP_APPLY</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> LAST_UPDATE_DATE </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>SYSDATE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>-</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>1</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ORDER BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> LAST_UPDATE_DATE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>DESC</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u951913\uFF1A\u7F51\u7EDC\u5F02\u5E38/\u63A5\u53E3\u8D85\u65F6</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u4EFB\u610F\u63A5\u53E3\u8C03\u7528\u65F6\uFF0C\u7F51\u7EDC\u4E2D\u65AD\u6216\u63A5\u53E3\u54CD\u5E94\u8D85\u8FC7 axios timeout \u914D\u7F6E</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u524D\u7AEF axios \u8BF7\u6C42\u672A\u6536\u5230\u54CD\u5E94\u6216\u54CD\u5E94\u8D85\u65F6\uFF0C\u89E6\u53D1 catch \u56DE\u8C03\u7EDF\u4E00\u63D0\u793A&quot;\u8BF7\u6C42\u5931\u8D25&quot;\u3002\u5E38\u89C1\u6839\u56E0\uFF1A\u7F51\u7EDC\u4E2D\u65AD\u3001mbo-business \u670D\u52A1\u5047\u6B7B\u3001\u6570\u636E\u5E93\u6162\u67E5\u8BE2\u3001\u5DE5\u4F5C\u6D41\u5F15\u64CE\u54CD\u5E94\u6162\u7B49\u3002\u9700\u68C0\u67E5\u7F51\u7EDC\u8FDE\u901A\u6027\u3001\u540E\u7AEF\u670D\u52A1\u8D1F\u8F7D\u3001\u6570\u636E\u5E93\u6027\u80FD</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> APPLY_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7533\u8BF7\u7F16\u7801, CAMP_NAME </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7279\u8BAD\u8425\u540D\u79F0,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         APPLY_STATE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7533\u8BF7\u72B6\u6001,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         TO_CHAR(LAST_UPDATE_DATE,</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>YYYY-MM-DD HH24:MI:SS</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u6700\u540E\u66F4\u65B0\u65F6\u95F4</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> TRAIN_CAMP_APPLY</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> LAST_UPDATE_DATE </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>SYSDATE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>-</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>1</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ORDER BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> LAST_UPDATE_DATE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>DESC</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u951914\uFF1A\u6743\u9650\u4E0D\u8DB3</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u70B9\u51FB\u7F16\u8F91\u3001\u5220\u9664\u3001\u53D6\u6D88\u7533\u8BF7\u3001\u7ED3\u7B97\u524D\u786E\u8BA4\u7B49\u6309\u94AE\u65F6\uFF0C\u5F53\u524D\u7528\u6237\u65E0\u5BF9\u5E94 permissionList \u6743\u9650\u7801</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u524D\u7AEF Button \u7EC4\u4EF6\u901A\u8FC7 permissionList \u914D\u7F6E\u6743\u9650\u7801\uFF0CHZERO \u6846\u67B6\u6821\u9A8C\u5F53\u524D\u7528\u6237\u89D2\u8272\u662F\u5426\u5305\u542B\u8BE5\u6743\u9650\u7801\uFF0C\u672A\u5305\u542B\u5219\u6309\u94AE\u4E0D\u53EF\u89C1\u6216\u7981\u7528\u3002\u82E5\u5F3A\u5236\u8C03\u7528\u63A5\u53E3\uFF0C\u540E\u7AEF\u4E5F\u4F1A\u6821\u9A8C\u6743\u9650\u8FD4\u56DE403\u3002\u9700\u8054\u7CFB\u7BA1\u7406\u5458\u914D\u7F6E\u5BF9\u5E94\u89D2\u8272\u6743\u9650</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> U.USER_NAME </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7528\u6237\u540D, R.ROLE_NAME </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u89D2\u8272\u540D, P.PERMISSION_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u6743\u9650\u7801</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> SYS_USER U</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>LEFT JOIN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> SYS_USER_ROLE UR </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ON</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> U.USER_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> UR.USER_ID</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>LEFT JOIN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> SYS_ROLE R </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ON</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> UR.ROLE_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> R.ROLE_ID</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>LEFT JOIN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> SYS_ROLE_PERMISSION RP </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ON</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> R.ROLE_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> RP.ROLE_ID</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>LEFT JOIN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> SYS_PERMISSION P </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ON</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> RP.PERMISSION_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> P.PERMISSION_ID</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> P.PERMISSION_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>LIKE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>%camp_general%</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ORDER BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> U.USER_NAME;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u951915\uFF1A\u6570\u636E\u4E0D\u5B58\u5728</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u67E5\u770B\u3001\u7F16\u8F91\u3001\u5220\u9664\u7B49\u64CD\u4F5C\u65F6\uFF0C\u63A5\u53E3\u8FD4\u56DE\u6570\u636E\u4E3A\u7A7A\u6216\u7533\u8BF7\u7F16\u7801\u4E0D\u5B58\u5728</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u524D\u7AEF\u901A\u8FC7 applyCode \u8C03\u7528\u8BE6\u60C5\u63A5\u53E3\uFF0C\u540E\u7AEF\u67E5\u8BE2 TRAIN_CAMP_APPLY \u8868\u65E0\u5BF9\u5E94\u8BB0\u5F55\u6216\u8BB0\u5F55\u5DF2\u903B\u8F91\u5220\u9664\uFF0C\u8FD4\u56DE\u7A7A\u6570\u636E\u3002\u5E38\u89C1\u6839\u56E0\uFF1A\u7533\u8BF7\u7F16\u7801\u9519\u8BEF\u3001\u7533\u8BF7\u5DF2\u88AB\u5220\u9664\u3001\u8DE8\u79DF\u6237\u67E5\u8BE2\u3001\u6570\u636E\u6743\u9650\u9694\u79BB\u7B49\u3002\u9700\u68C0\u67E5 APPLY_CODE \u6709\u6548\u6027\u53CA\u6570\u636E\u6743\u9650</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> APPLY_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7533\u8BF7\u7F16\u7801, CAMP_NAME </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7279\u8BAD\u8425\u540D\u79F0,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         APPLY_STATE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7533\u8BF7\u72B6\u6001, DELETE_FLAG </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5220\u9664\u6807\u8BB0</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> TRAIN_CAMP_APPLY</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> DELETE_FLAG </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>Y</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>OR</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> APPLY_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u951916\uFF1A\u72B6\u6001\u4E0D\u5141\u8BB8\u64CD\u4F5C</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u70B9\u51FB\u53D6\u6D88\u7533\u8BF7\u3001\u7ED3\u7B97\u524D\u786E\u8BA4\u7B49\u6309\u94AE\u65F6\uFF0C\u7533\u8BF7\u72B6\u6001\u4E0D\u5728\u5141\u8BB8\u64CD\u4F5C\u7684\u72B6\u6001\u8303\u56F4\u5185</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u540E\u7AEF\u6821\u9A8C\u7533\u8BF7\u72B6\u6001\u673A\uFF0C\u5982\u53D6\u6D88\u7533\u8BF7\u8981\u6C42 approvalState \u4E3A fdd_sign \u4E14\u63D0\u524D7\u5929\u3001\u7ED3\u7B97\u786E\u8BA4\u8981\u6C42\u72B6\u6001\u4E3A\u6267\u884C\u5B8C\u6210\u7B49\u3002\u72B6\u6001\u4E0D\u5339\u914D\u65F6\u540E\u7AEF\u8FD4\u56DE\u4E1A\u52A1\u5F02\u5E38\uFF0C\u524D\u7AEF\u63D0\u793A\u540E\u7AEF\u8FD4\u56DE\u7684 message\u3002\u9700\u68C0\u67E5\u7533\u8BF7\u5F53\u524D\u72B6\u6001\u53CA\u64CD\u4F5C\u6D41\u7A0B</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> APPLY_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7533\u8BF7\u7F16\u7801, CAMP_NAME </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7279\u8BAD\u8425\u540D\u79F0,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         APPLY_STATE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7533\u8BF7\u72B6\u6001, APPROVAL_STATE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5BA1\u6838\u72B6\u6001,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         CANCEL_APPROVAL_STATE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u53D6\u6D88\u5BA1\u6838\u72B6\u6001, ERROR_INFO </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5F02\u5E38\u95EE\u9898</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> TRAIN_CAMP_APPLY</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> APPLY_STATE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NOT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>draft</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>,</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>valid</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>,</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>executing</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>,</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>finished</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ORDER BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> CREATE_DATE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>DESC</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u951917\uFF1A\u503C\u96C6\u6570\u636E\u4E0D\u663E\u793A</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u67E5\u8BE2\u6761\u4EF6\u6216\u5217\u8868\u4E2D\u7533\u8BF7\u72B6\u6001\u3001\u5BA1\u6838\u72B6\u6001\u7B49\u4E0B\u62C9\u9009\u9879\u4E3A\u7A7A</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u524D\u7AEF\u901A\u8FC7 lookupCode \u67E5\u8BE2\u503C\u96C6 MBO.ORDER_LECTURE_STATE\u3001MBO.APPLY_APPROVAL_STATE \u7B49\uFF0C\u503C\u96C6\u672A\u914D\u7F6E\u6216\u672A\u542F\u7528\u5219\u4E0B\u62C9\u9009\u9879\u4E3A\u7A7A\u3002\u9700\u5728\u503C\u96C6\u7BA1\u7406\u9875\u9762\u914D\u7F6E\u5BF9\u5E94\u503C\u96C6</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> LOOKUP_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u503C\u96C6\u7F16\u7801, LOOKUP_VALUE_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u503C\u7F16\u7801,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         LOOKUP_VALUE_NAME </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u503C\u540D\u79F0, ENABLE_FLAG </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u542F\u7528\u6807\u8BB0</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> SYS_LOOKUP_VALUE</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> LOOKUP_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>MBO.ORDER_LECTURE_STATE</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>,</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>MBO.APPLY_APPROVAL_STATE</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>,</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>MBO.CANCEL_APPROVAL_STATE</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> ENABLE_FLAG </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>N</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ORDER BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> LOOKUP_CODE;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u951918\uFF1A\u62A5\u540D\u4EBA\u5458\u660E\u7EC6\u4E0D\u80FD\u4E3A\u7A7A</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u4FDD\u5B58\u6216\u4FDD\u5B58\u5E76\u63D0\u4EA4\u65F6\uFF0C\u62A5\u540D\u4EBA\u5458\u660E\u7EC6\u884C\u6570\u636E\u4E3A\u7A7A</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u540E\u7AEF\u6821\u9A8C\u62A5\u540D\u4EBA\u5458\u660E\u7EC6\u884C\u975E\u7A7A\uFF0C\u7279\u8BAD\u8425\u70B9\u5C06\u9700\u660E\u786E\u62A5\u540D\u4EBA\u5458\u5217\u8868\u3002\u82E5\u660E\u7EC6\u884C\u4E3A\u7A7A\u5219\u8FD4\u56DE\u4E1A\u52A1\u5F02\u5E38\u3002\u9700\u6DFB\u52A0\u62A5\u540D\u4EBA\u5458\u660E\u7EC6\u540E\u4FDD\u5B58</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> A.APPLY_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7533\u8BF7\u7F16\u7801, A.CAMP_NAME </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7279\u8BAD\u8425\u540D\u79F0,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}>COUNT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>(B.LINE_ID) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u62A5\u540D\u4EBA\u5458\u6570</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> TRAIN_CAMP_APPLY A</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>LEFT JOIN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> TRAIN_CAMP_APPLY_LINE B </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ON</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> A.APPLY_CODE </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> B.APPLY_CODE</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> A.APPLY_STATE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>draft</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>,</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>valid</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>GROUP BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> A.APPLY_CODE, A.CAMP_NAME</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>HAVING</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}>COUNT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>(B.LINE_ID) </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>0</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u951919\uFF1A\u62DF\u70B9\u5C06\u5929\u6570\u5FC5\u987B\u5927\u4E8E0</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u4FDD\u5B58\u6216\u4FDD\u5B58\u5E76\u63D0\u4EA4\u65F6\uFF0CPRE_ORD_LECTURER_DAYS \u5B57\u6BB5\u975E\u6B63\u6570</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u540E\u7AEF\u6821\u9A8C PRE_ORD_LECTURER_DAYS &gt; 0\uFF0C\u62DF\u70B9\u5C06\u5929\u6570\u7528\u4E8E\u8D39\u7528\u8BA1\u7B97\u4E0E\u8BB2\u5E08\u6392\u671F\uFF0C\u5FC5\u987B\u4E3A\u6B63\u6570\u3002\u82E5\u4E3A0\u6216\u8D1F\u6570\u5219\u8FD4\u56DE\u4E1A\u52A1\u5F02\u5E38\u3002\u9700\u68C0\u67E5\u62DF\u70B9\u5C06\u5929\u6570\u8F93\u5165\u662F\u5426\u6B63\u786E</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> APPLY_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7533\u8BF7\u7F16\u7801, CAMP_NAME </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7279\u8BAD\u8425\u540D\u79F0,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         PRE_ORD_LECTURER_DAYS </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u62DF\u70B9\u5C06\u5929\u6570</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> TRAIN_CAMP_APPLY</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> PRE_ORD_LECTURER_DAYS </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NOT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> PRE_ORD_LECTURER_DAYS </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&lt;=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>0</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
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
                createVNode("td", null, "\u53EA\u6709\u57F9\u8BAD\u65F6\u95F4\u5F00\u59CB\u524D7\u5929\u7684\u6D41\u7A0B\u53EF\u4EE5\u53D1\u8D77\u70B9\u5C06\u53D6\u6D88\u7533\u8BF7\uFF01"),
                createVNode("td", null, "\u53D6\u6D88\u7533\u8BF7\u6309\u94AE"),
                createVNode("td", null, "\u4E0D\u6EE1\u8DB3\u63D0\u524D7\u5929\uFF1B\u786E\u8BA4planStartTime\u4E0E\u5F53\u524D\u65F6\u95F4\u5DEE\u503C>=7"),
                createVNode("td", null, "\u63D0\u793A"),
                createVNode("td", null, "timeDiff>=7")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u8BE5\u72B6\u6001\u5355\u636E\u65E0\u6CD5\u53D1\u8D77\u53D6\u6D88\u7533\u8BF7\uFF01"),
                createVNode("td", null, "\u53D6\u6D88\u7533\u8BF7\u6309\u94AE"),
                createVNode("td", null, "\u72B6\u6001\u6821\u9A8C\u4E0D\u901A\u8FC7\uFF1B\u786E\u8BA4\u5BA1\u6279\u72B6\u6001\u548C\u53D6\u6D88\u72B6\u6001"),
                createVNode("td", null, "\u63D0\u793A"),
                createVNode("td", null, "approvalState\u975Efdd_sign\u6216cancelApprovalState\u975E\u7A7A\u4E14\u975E\u9A73\u56DE")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5F53\u524D\u72B6\u6001\u6570\u636E\u65E0\u6CD5\u7F16\u8F91\uFF01"),
                createVNode("td", null, "\u7F16\u8F91\u6309\u94AE"),
                createVNode("td", null, "\u72B6\u6001\u975E\u8349\u7A3F\u4E14\u975E\u9A73\u56DE\uFF1B\u786E\u8BA4\u7533\u8BF7\u72B6\u6001"),
                createVNode("td", null, "\u63D0\u793A"),
                createVNode("td", null, "applyState\u975Edraft\u4E14approvalState\u975E\u9A73\u56DE")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7ECF\u9500\u5546\u4E0D\u80FD\u4E3A\u7A7A"),
                createVNode("td", null, "\u4FDD\u5B58\u63D0\u4EA4"),
                createVNode("td", null, "\u672A\u9009\u62E9\u7ECF\u9500\u5546\uFF1B\u9009\u62E9\u7ECF\u9500\u5546\u540E\u4FDD\u5B58"),
                createVNode("td", null, "\u63D0\u793A"),
                createVNode("td", null, "dealerName\u5FC5\u586B")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7279\u8BAD\u8425\u4E0D\u80FD\u4E3A\u7A7A"),
                createVNode("td", null, "\u4FDD\u5B58\u63D0\u4EA4"),
                createVNode("td", null, "\u672A\u9009\u62E9\u7279\u8BAD\u8425\uFF1B\u9009\u62E9\u7279\u8BAD\u8425\u540E\u4FDD\u5B58"),
                createVNode("td", null, "\u63D0\u793A"),
                createVNode("td", null, "campName\u5FC5\u586B")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6CD5\u4EBA\u4E3B\u4F53\u4E0D\u80FD\u4E3A\u7A7A"),
                createVNode("td", null, "\u4FDD\u5B58\u63D0\u4EA4"),
                createVNode("td", null, "\u672A\u9009\u62E9\u6CD5\u4EBA\u4E3B\u4F53\uFF1B\u9009\u62E9\u6CD5\u4EBA\u4E3B\u4F53\u540E\u4FDD\u5B58"),
                createVNode("td", null, "\u63D0\u793A"),
                createVNode("td", null, "legalEntityName\u5FC5\u586B")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u8BB2\u5E08\u4E0D\u80FD\u4E3A\u7A7A"),
                createVNode("td", null, "\u4FDD\u5B58\u63D0\u4EA4"),
                createVNode("td", null, "\u672A\u9009\u62E9\u8BB2\u5E08\uFF1B\u9009\u62E9\u8BB2\u5E08\u540E\u4FDD\u5B58"),
                createVNode("td", null, "\u63D0\u793A"),
                createVNode("td", null, "lecturer\u5FC5\u586B")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u62DF\u70B9\u5C06\u5929\u6570\u4E0D\u80FD\u4E3A\u7A7A"),
                createVNode("td", null, "\u4FDD\u5B58\u63D0\u4EA4"),
                createVNode("td", null, "\u672A\u586B\u5199\u62DF\u70B9\u5C06\u5929\u6570\uFF1B\u586B\u5199\u540E\u4FDD\u5B58"),
                createVNode("td", null, "\u63D0\u793A"),
                createVNode("td", null, "preOrdLecturerDays\u5FC5\u586B")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u8BB2\u5E08\u6392\u671F\u51B2\u7A81"),
                createVNode("td", null, "\u4FDD\u5B58\u63D0\u4EA4"),
                createVNode("td", null, "\u6240\u9009\u8BB2\u5E08\u5728\u65F6\u95F4\u6BB5\u5185\u5DF2\u6709\u751F\u6548\u70B9\u5C06\uFF1B\u66F4\u6362\u8BB2\u5E08\u6216\u8C03\u6574\u65F6\u95F4"),
                createVNode("td", null, "\u63D0\u793A"),
                createVNode("td", null, "\u6392\u671F\u51B2\u7A81\u6821\u9A8C")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u624B\u673A\u53F7\u683C\u5F0F\u4E0D\u6B63\u786E"),
                createVNode("td", null, "\u62A5\u540D\u4EBA\u5458\u660E\u7EC6"),
                createVNode("td", null, "\u624B\u673A\u53F7\u4E0D\u7B26\u5408\u6B63\u5219\uFF1B\u586B\u5199\u6B63\u786E\u624B\u673A\u53F7"),
                createVNode("td", null, "\u63D0\u793A"),
                createVNode("td", null, "/^1[3456789]\\d{9}$/")
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
                createVNode("td", null, "\u53D6\u6D88\u7533\u8BF7/\u7ED3\u7B97\u786E\u8BA4"),
                createVNode("td", null, "\u7533\u8BF7\u72B6\u6001\u4E0D\u5728\u5141\u8BB8\u64CD\u4F5C\u7684\u72B6\u6001\u8303\u56F4\u5185\uFF0C\u68C0\u67E5 APPLY_STATE"),
                createVNode("td", null, "error"),
                createVNode("td", null, "\u540E\u7AEF\u6821\u9A8C\u72B6\u6001\u673A\u5931\u8D25")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u503C\u96C6\u6570\u636E\u4E0D\u663E\u793A"),
                createVNode("td", null, "\u4E0B\u62C9\u9009\u9879"),
                createVNode("td", null, "\u503C\u96C6 MBO.ORDER_LECTURE_STATE \u7B49\u672A\u914D\u7F6E\uFF0C\u68C0\u67E5\u503C\u96C6\u914D\u7F6E"),
                createVNode("td", null, "warning"),
                createVNode("td", null, "lookupCode \u67E5\u8BE2\u8FD4\u56DE\u7A7A")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u62A5\u540D\u4EBA\u5458\u660E\u7EC6\u4E0D\u80FD\u4E3A\u7A7A"),
                createVNode("td", null, "\u4FDD\u5B58\u63D0\u4EA4"),
                createVNode("td", null, "\u672A\u6DFB\u52A0\u62A5\u540D\u4EBA\u5458\u660E\u7EC6\uFF0C\u6DFB\u52A0\u540E\u4FDD\u5B58"),
                createVNode("td", null, "error"),
                createVNode("td", null, "\u540E\u7AEF\u6821\u9A8C\u660E\u7EC6\u884C\u975E\u7A7A")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u62DF\u70B9\u5C06\u5929\u6570\u5FC5\u987B\u5927\u4E8E0"),
                createVNode("td", null, "\u4FDD\u5B58\u63D0\u4EA4"),
                createVNode("td", null, "\u62DF\u70B9\u5C06\u5929\u6570\u4E3A0\u6216\u8D1F\u6570\uFF0C\u68C0\u67E5 PRE_ORD_LECTURER_DAYS"),
                createVNode("td", null, "error"),
                createVNode("td", null, "\u540E\u7AEF\u6821\u9A8C PRE_ORD_LECTURER_DAYS > 0")
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95191\uFF1A\u8BF7\u9009\u62E9\u4E00\u6761\u6570\u636E"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u70B9\u51FB\u7F16\u8F91\u3001\u5220\u9664\u3001\u53D6\u6D88\u7533\u8BF7\u3001\u7ED3\u7B97\u524D\u786E\u8BA4\u3001\u67E5\u770B\u6D41\u7A0B\u7B49\u884C\u64CD\u4F5C\u6309\u94AE\u65F6\uFF0C\u672A\u9009\u62E9\u6570\u636E\u6216\u9009\u62E9\u4E86\u591A\u884C")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         CAMP_NAME "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7279\u8BAD\u8425\u540D\u79F0,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         LECTURER "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u57F9\u8BAD\u5E08,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         APPLY_STATE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7533\u8BF7\u72B6\u6001,")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " TRAIN_CAMP_APPLY")
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
          createVNode("h4", null, "\u62A5\u95192\uFF1A\u53EA\u6709\u57F9\u8BAD\u65F6\u95F4\u5F00\u59CB\u524D7\u5929\u7684\u6D41\u7A0B\u53EF\u4EE5\u53D1\u8D77\u70B9\u5C06\u53D6\u6D88\u7533\u8BF7\uFF01"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode('\uFF1A\u70B9\u51FB\u53D6\u6D88\u7533\u8BF7\u6309\u94AE\u65F6\uFF0C\u4E0D\u6EE1\u8DB3"\u57F9\u8BAD\u5F00\u59CB\u524D7\u5929"\u6761\u4EF6')
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode('\uFF1A\u524D\u7AEF\u8BA1\u7B97\u65F6\u95F4\u5DEE\u503C timeDiff = (PLAN_START_TIME - nowTime) / (24*60*60*1000)\uFF0C\u6821\u9A8C timeDiff >= 7\uFF08\u57F9\u8BAD\u5F00\u59CB\u524D\u81F3\u5C117\u5929\uFF09\u3002\u6821\u9A8C\u4E0D\u901A\u8FC7\u5219\u63D0\u793A"\u53EA\u6709\u57F9\u8BAD\u65F6\u95F4\u5F00\u59CB\u524D7\u5929\u7684\u6D41\u7A0B\u53EF\u4EE5\u53D1\u8D77\u70B9\u5C06\u53D6\u6D88\u7533\u8BF7\uFF01"\u3002\u6B64\u6821\u9A8C\u786E\u4FDD\u6709\u5145\u8DB3\u65F6\u95F4\u901A\u77E5\u8BB2\u5E08\u548C\u53C2\u8BAD\u4EBA\u5458\u8C03\u6574\u5B89\u6392\uFF0C\u907F\u514D\u4E34\u65F6\u53D6\u6D88\u9020\u6210\u8D44\u6E90\u6D6A\u8D39')
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u57F9\u8BAD\u5F00\u59CB\u65F6\u95F4,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         APPROVAL_STATE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5BA1\u6838\u72B6\u6001,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         "),
                  createVNode("span", { style: { "color": "#82AAFF" } }, "ROUND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "(PLAN_START_TIME "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "-"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#C792EA" } }, "SYSDATE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u8DDD\u5F00\u59CB\u5929\u6570")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " TRAIN_CAMP_APPLY")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " PLAN_START_TIME "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#C792EA" } }, "SYSDATE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "+"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "7"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95193\uFF1A\u8BE5\u72B6\u6001\u5355\u636E\u65E0\u6CD5\u53D1\u8D77\u53D6\u6D88\u7533\u8BF7\uFF01"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u70B9\u51FB\u53D6\u6D88\u7533\u8BF7\u6309\u94AE\u65F6\uFF0C\u5BA1\u6279\u72B6\u6001\u4E0D\u4E3A fdd_sign \u6216\u5DF2\u6709\u8FDB\u884C\u4E2D\u7684\u53D6\u6D88\u7533\u8BF7")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode(`\uFF1A\u524D\u7AEF\u6267\u884C\u591A\u91CD\u6821\u9A8C\uFF1A\u2460\u6821\u9A8C APPROVAL_STATE = 'fdd_sign'\uFF08\u5DF2\u6CD5\u5927\u5927\u7B7E\u7EA6\uFF09\uFF1B\u2461\u6821\u9A8C CANCEL_APPROVAL_STATE \u4E3A\u7A7A\u6216\u4E3A reject/oa_reject\uFF08\u672A\u53D6\u6D88\u6216\u5DF2\u9A73\u56DE\uFF09\u3002\u4EFB\u4E00\u6821\u9A8C\u4E0D\u901A\u8FC7\u5219\u63D0\u793A"\u8BE5\u72B6\u6001\u5355\u636E\u65E0\u6CD5\u53D1\u8D77\u53D6\u6D88\u7533\u8BF7\uFF01"\u3002\u786E\u4FDD\u4EC5\u5DF2\u7B7E\u7EA6\u751F\u6548\u4E14\u672A\u91CD\u590D\u53D6\u6D88\u7684\u5355\u636E\u53EF\u53D1\u8D77\u53D6\u6D88`)
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         CAMP_NAME "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7279\u8BAD\u8425\u540D\u79F0,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         APPROVAL_STATE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5BA1\u6838\u72B6\u6001,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         CANCEL_APPROVAL_STATE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u53D6\u6D88\u5BA1\u6838\u72B6\u6001")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " TRAIN_CAMP_APPLY")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " APPROVAL_STATE "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "<>"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "fdd_sign"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "OR"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " (CANCEL_APPROVAL_STATE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NOT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NULL")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "        "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " CANCEL_APPROVAL_STATE "),
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "));")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95194\uFF1A\u5F53\u524D\u72B6\u6001\u6570\u636E\u65E0\u6CD5\u7F16\u8F91\uFF01"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u70B9\u51FB\u7F16\u8F91\u6309\u94AE\u65F6\uFF0C\u72B6\u6001\u975E\u8349\u7A3F\u4E14\u975E\u5404\u7C7B\u9A73\u56DE\u72B6\u6001")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode(`\uFF1A\u524D\u7AEF\u6821\u9A8C APPLY_STATE = 'draft'\uFF08\u8349\u7A3F\uFF09\u6216 APPROVAL_STATE \u4E3A reject/oa_reject\uFF08\u5404\u79CD\u9A73\u56DE\uFF09\uFF0C\u4EFB\u4E00\u6761\u4EF6\u6EE1\u8DB3\u624D\u5141\u8BB8\u7F16\u8F91\u3002\u5DF2\u751F\u6548\uFF08valid\uFF09\u3001\u5BA1\u6279\u4E2D\uFF08approving\uFF09\u7B49\u72B6\u6001\u7684\u7533\u8BF7\u5DF2\u88AB\u4E0B\u6E38\u5F15\u7528\uFF0C\u7F16\u8F91\u53EF\u80FD\u5F71\u54CD\u6570\u636E\u4E00\u81F4\u6027\uFF0C\u6545\u9650\u5236\u7F16\u8F91\u3002\u6821\u9A8C\u4E0D\u901A\u8FC7\u63D0\u793A"\u5F53\u524D\u72B6\u6001\u6570\u636E\u65E0\u6CD5\u7F16\u8F91\uFF01"`)
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         CAMP_NAME "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7279\u8BAD\u8425\u540D\u79F0,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         APPLY_STATE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7533\u8BF7\u72B6\u6001,")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " TRAIN_CAMP_APPLY")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " APPLY_STATE "),
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ");")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95195\uFF1A\u7ECF\u9500\u5546\u4E0D\u80FD\u4E3A\u7A7A"),
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         CAMP_NAME "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7279\u8BAD\u8425\u540D\u79F0,")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " TRAIN_CAMP_APPLY")
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
          createVNode("h4", null, "\u62A5\u95196\uFF1A\u7279\u8BAD\u8425\u4E0D\u80FD\u4E3A\u7A7A"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u4FDD\u5B58\u6216\u4FDD\u5B58\u5E76\u63D0\u4EA4\u65F6\uFF0CcampName \u5B57\u6BB5\u4E3A\u7A7A")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode('\uFF1A\u524D\u7AEF\u8868\u5355\u5BF9 campName \u5B57\u6BB5\u914D\u7F6E required \u6821\u9A8C\uFF0C\u63D0\u4EA4\u524D\u6821\u9A8C\u7279\u8BAD\u8425\u662F\u5426\u9009\u62E9\uFF0C\u4E3A\u7A7A\u5219\u963B\u6B62\u63D0\u4EA4\u5E76\u63D0\u793A"\u7279\u8BAD\u8425\u4E0D\u80FD\u4E3A\u7A7A"\u3002\u7279\u8BAD\u8425\u662F\u70B9\u5C06\u7684\u53C2\u8BAD\u8425\u6B21\u6765\u6E90\uFF0C\u5FC5\u987B\u660E\u786E')
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         CAMP_CODE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7279\u8BAD\u8425\u7F16\u7801,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         CAMP_NAME "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7279\u8BAD\u8425\u540D\u79F0")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " TRAIN_CAMP_APPLY")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " CAMP_NAME "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NULL"),
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
          createVNode("h4", null, "\u62A5\u95197\uFF1A\u6CD5\u4EBA\u4E3B\u4F53\u4E0D\u80FD\u4E3A\u7A7A"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u4FDD\u5B58\u6216\u4FDD\u5B58\u5E76\u63D0\u4EA4\u65F6\uFF0ClegalEntityName \u5B57\u6BB5\u4E3A\u7A7A")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode('\uFF1A\u524D\u7AEF\u8868\u5355\u5BF9 legalEntityName \u5B57\u6BB5\u914D\u7F6E required \u6821\u9A8C\uFF0C\u63D0\u4EA4\u524D\u6821\u9A8C\u6CD5\u4EBA\u4E3B\u4F53\u662F\u5426\u9009\u62E9\uFF0C\u4E3A\u7A7A\u5219\u963B\u6B62\u63D0\u4EA4\u5E76\u63D0\u793A"\u6CD5\u4EBA\u4E3B\u4F53\u4E0D\u80FD\u4E3A\u7A7A"\u3002\u6CD5\u4EBA\u4E3B\u4F53\u7528\u4E8E\u540E\u7EED\u5408\u540C\u7B7E\u8BA2\u4E0E\u7ED3\u7B97\uFF0C\u5FC5\u987B\u660E\u786E')
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         CAMP_NAME "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7279\u8BAD\u8425\u540D\u79F0,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         LEGAL_ENTITY_CODE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u6CD5\u4EBA\u4E3B\u4F53\u7F16\u7801,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         LEGAL_ENTITY_NAME "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u6CD5\u4EBA\u4E3B\u4F53\u540D\u79F0")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " TRAIN_CAMP_APPLY")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " LEGAL_ENTITY_NAME "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NULL"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "OR"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " LEGAL_ENTITY_CODE "),
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
          createVNode("h4", null, "\u62A5\u95198\uFF1A\u8BB2\u5E08\u4E0D\u80FD\u4E3A\u7A7A"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u4FDD\u5B58\u6216\u4FDD\u5B58\u5E76\u63D0\u4EA4\u65F6\uFF0Clecturer \u5B57\u6BB5\u4E3A\u7A7A")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode('\uFF1A\u524D\u7AEF\u8868\u5355\u5BF9 lecturer \u5B57\u6BB5\u914D\u7F6E required \u6821\u9A8C\uFF0C\u63D0\u4EA4\u524D\u6821\u9A8C\u8BB2\u5E08\u662F\u5426\u9009\u62E9\uFF0C\u4E3A\u7A7A\u5219\u963B\u6B62\u63D0\u4EA4\u5E76\u63D0\u793A"\u8BB2\u5E08\u4E0D\u80FD\u4E3A\u7A7A"\u3002\u8BB2\u5E08\u662F\u70B9\u5C06\u7684\u6838\u5FC3\u5BF9\u8C61\uFF0C\u5FC5\u987B\u660E\u786E\u88AB\u70B9\u5C06\u4EBA')
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         CAMP_NAME "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7279\u8BAD\u8425\u540D\u79F0,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         LECTURER_CODE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u8BB2\u5E08\u7F16\u7801,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         LECTURER "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u8BB2\u5E08\u59D3\u540D")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " TRAIN_CAMP_APPLY")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " LECTURER "),
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
          createVNode("h4", null, "\u62A5\u95199\uFF1A\u62DF\u70B9\u5C06\u5929\u6570\u4E0D\u80FD\u4E3A\u7A7A"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u4FDD\u5B58\u6216\u4FDD\u5B58\u5E76\u63D0\u4EA4\u65F6\uFF0CpreOrdLecturerDays \u5B57\u6BB5\u4E3A\u7A7A")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode('\uFF1A\u524D\u7AEF\u8868\u5355\u5BF9 preOrdLecturerDays \u5B57\u6BB5\u914D\u7F6E required \u6821\u9A8C\uFF0C\u63D0\u4EA4\u524D\u6821\u9A8C\u62DF\u70B9\u5C06\u5929\u6570\u662F\u5426\u586B\u5199\uFF0C\u4E3A\u7A7A\u5219\u963B\u6B62\u63D0\u4EA4\u5E76\u63D0\u793A"\u62DF\u70B9\u5C06\u5929\u6570\u4E0D\u80FD\u4E3A\u7A7A"\u3002\u62DF\u70B9\u5C06\u5929\u6570\u7528\u4E8E\u8D39\u7528\u8BA1\u7B97\u4E0E\u8BB2\u5E08\u6392\u671F\uFF0C\u5FC5\u987B\u660E\u786E')
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         CAMP_NAME "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7279\u8BAD\u8425\u540D\u79F0,")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " TRAIN_CAMP_APPLY")
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
          createVNode("h4", null, "\u62A5\u951910\uFF1A\u8BB2\u5E08\u6392\u671F\u51B2\u7A81"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u4FDD\u5B58\u6216\u4FDD\u5B58\u5E76\u63D0\u4EA4\u65F6\uFF0C\u6240\u9009\u8BB2\u5E08\u5728\u62DF\u5B9A\u65F6\u95F4\u6BB5\u5185\u5DF2\u6709\u751F\u6548\u70B9\u5C06\u8BB0\u5F55")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode('\uFF1A\u540E\u7AEF\u4FDD\u5B58\u524D\u6821\u9A8C\u8BB2\u5E08\u6392\u671F\u51B2\u7A81\uFF0C\u67E5\u8BE2 TRAIN_CAMP_APPLY \u8868\u4E2D\u540C\u4E00\u8BB2\u5E08\uFF08LECTURER_CODE \u76F8\u540C\uFF09\u4E14\u72B6\u6001\u4E3A valid \u6216 executing \u7684\u70B9\u5C06\u8BB0\u5F55\uFF0C\u5224\u65AD\u65B0\u7533\u8BF7\u7684 [PLAN_START_TIME, PLAN_END_TIME] \u4E0E\u5DF2\u6709\u8BB0\u5F55\u7684\u65F6\u95F4\u6BB5\u662F\u5426\u5B58\u5728\u4EA4\u96C6\u3002\u82E5\u5B58\u5728\u4EA4\u96C6\u5219\u63D0\u793A"\u8BB2\u5E08\u6392\u671F\u51B2\u7A81"\u5E76\u963B\u6B62\u4FDD\u5B58\u3002\u6B64\u6821\u9A8C\u907F\u514D\u540C\u4E00\u8BB2\u5E08\u5728\u540C\u4E00\u65F6\u95F4\u6BB5\u88AB\u91CD\u590D\u70B9\u5C06\uFF0C\u4FDD\u969C\u8BB2\u5E08\u6863\u671F\u5408\u7406\u6027')
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " a.APPLY_CODE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7533\u8BF71\u7F16\u7801,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         b.APPLY_CODE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7533\u8BF72\u7F16\u7801,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         a.LECTURER "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u57F9\u8BAD\u5E08,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         TO_CHAR(a.PLAN_START_TIME,"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "YYYY-MM-DD"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7533\u8BF71\u5F00\u59CB,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         TO_CHAR(a.PLAN_END_TIME,"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "YYYY-MM-DD"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7533\u8BF71\u7ED3\u675F,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         TO_CHAR(b.PLAN_START_TIME,"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "YYYY-MM-DD"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7533\u8BF72\u5F00\u59CB,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         TO_CHAR(b.PLAN_END_TIME,"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "YYYY-MM-DD"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7533\u8BF72\u7ED3\u675F")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " TRAIN_CAMP_APPLY a")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "JOIN"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " TRAIN_CAMP_APPLY b "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ON"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " a.APPLY_CODE "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " b.APPLY_CODE")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " a.LECTURER_CODE "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " b.LECTURER_CODE")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " a.APPLY_STATE "),
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " b.APPLY_STATE "),
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " a.PLAN_START_TIME "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "<="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " b.PLAN_END_TIME")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " a.PLAN_END_TIME "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, ">="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " b.PLAN_START_TIME;")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u951911\uFF1A\u624B\u673A\u53F7\u683C\u5F0F\u4E0D\u6B63\u786E"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u62A5\u540D\u4EBA\u5458\u660E\u7EC6\u4E2D\u624B\u673A\u53F7\u5B57\u6BB5\u4E0D\u7B26\u5408\u6B63\u5219 /^1[3456789]\\d{9}$/")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode('\uFF1A\u524D\u7AEF\u5BF9\u62A5\u540D\u4EBA\u5458\u660E\u7EC6\u4E2D\u624B\u673A\u53F7\u5B57\u6BB5\u914D\u7F6E\u6B63\u5219\u6821\u9A8C\uFF0C\u63D0\u4EA4\u524D\u6821\u9A8C\u624B\u673A\u53F7\u683C\u5F0F\u662F\u5426\u5339\u914D /^1[3456789]\\d{9}$/\uFF081\u5F00\u5934\uFF0C\u7B2C\u4E8C\u4F4D3-9\uFF0C\u517111\u4F4D\u6570\u5B57\uFF09\u3002\u6821\u9A8C\u4E0D\u901A\u8FC7\u5219\u63D0\u793A"\u624B\u673A\u53F7\u683C\u5F0F\u4E0D\u6B63\u786E"\u3002\u786E\u4FDD\u53C2\u8BAD\u4EBA\u5458\u8054\u7CFB\u65B9\u5F0F\u6709\u6548\uFF0C\u4FBF\u4E8E\u540E\u7EED\u901A\u77E5')
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         CAMP_NAME "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7279\u8BAD\u8425\u540D\u79F0")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " TRAIN_CAMP_APPLY tca")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "EXISTS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " (")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "SELECT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "1"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " TRAIN_CAMP_APPLY_USER u")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " u.APPLY_CODE "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " tca.APPLY_CODE")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " (u.PHONE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NULL")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "           "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "OR"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " u.PHONE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NOT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "LIKE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "1[3456789]________"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "           "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "OR"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "LENGTH"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "(u.PHONE) "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "<>"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "11")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "           "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "OR"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " REGEXP_LIKE(u.PHONE, "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "[^0-9]"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "))")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  );")
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
              createTextVNode("\uFF1A\u8C03\u7528 mlt/trainCampApply/* \u7CFB\u5217\u63A5\u53E3\u65F6\uFF0C\u540E\u7AEF\u8FD4\u56DE HTTP \u72B6\u6001\u7801\u975E 2xx")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode('\uFF1A\u524D\u7AEF\u901A\u8FC7 axios \u8C03\u7528\u540E\u7AEF\u63A5\u53E3\uFF0C\u82E5\u54CD\u5E94\u72B6\u6001\u7801\u975E 2xx \u6216\u7F51\u7EDC\u5F02\u5E38\u5219\u89E6\u53D1\u9519\u8BEF\u56DE\u8C03\uFF0C\u7EDF\u4E00\u63D0\u793A"\u8BF7\u6C42\u5931\u8D25"\u3002\u5E38\u89C1\u6839\u56E0\u5305\u62EC\uFF1Ambo-business \u5FAE\u670D\u52A1\u672A\u542F\u52A8\u6216\u5F02\u5E38\u3001\u6570\u636E\u5E93\u8FDE\u63A5\u5931\u8D25\u3001SQL \u6267\u884C\u8D85\u65F6\u3001\u540E\u7AEF\u4E1A\u52A1\u5F02\u5E38\u672A\u6355\u83B7\u3001\u5916\u90E8\u7CFB\u7EDF\uFF08OA/FDD/CRM\uFF09\u8C03\u7528\u5931\u8D25\u3001\u5DE5\u4F5C\u6D41\u5F15\u64CE\u5F02\u5E38\u3001\u7F51\u7EDC\u4E2D\u65AD\u7B49\u3002\u9700\u68C0\u67E5 mbo-business \u5FAE\u670D\u52A1\u8FD0\u884C\u72B6\u6001\u3001\u5916\u90E8\u7CFB\u7EDF\u8FDE\u901A\u6027\u3001\u5DE5\u4F5C\u6D41\u914D\u7F6E\u3001\u540E\u7AEF\u65E5\u5FD7\u5B9A\u4F4D\u5177\u4F53\u5F02\u5E38\u5806\u6808')
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         CAMP_NAME "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7279\u8BAD\u8425\u540D\u79F0,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         APPLY_STATE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7533\u8BF7\u72B6\u6001,")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " TRAIN_CAMP_APPLY")
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
              createTextVNode('\uFF1A\u524D\u7AEF axios \u8BF7\u6C42\u672A\u6536\u5230\u54CD\u5E94\u6216\u54CD\u5E94\u8D85\u65F6\uFF0C\u89E6\u53D1 catch \u56DE\u8C03\u7EDF\u4E00\u63D0\u793A"\u8BF7\u6C42\u5931\u8D25"\u3002\u5E38\u89C1\u6839\u56E0\uFF1A\u7F51\u7EDC\u4E2D\u65AD\u3001mbo-business \u670D\u52A1\u5047\u6B7B\u3001\u6570\u636E\u5E93\u6162\u67E5\u8BE2\u3001\u5DE5\u4F5C\u6D41\u5F15\u64CE\u54CD\u5E94\u6162\u7B49\u3002\u9700\u68C0\u67E5\u7F51\u7EDC\u8FDE\u901A\u6027\u3001\u540E\u7AEF\u670D\u52A1\u8D1F\u8F7D\u3001\u6570\u636E\u5E93\u6027\u80FD')
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7533\u8BF7\u7F16\u7801, CAMP_NAME "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7279\u8BAD\u8425\u540D\u79F0,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         APPLY_STATE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7533\u8BF7\u72B6\u6001,")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " TRAIN_CAMP_APPLY")
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
              createTextVNode("\uFF1A\u70B9\u51FB\u7F16\u8F91\u3001\u5220\u9664\u3001\u53D6\u6D88\u7533\u8BF7\u3001\u7ED3\u7B97\u524D\u786E\u8BA4\u7B49\u6309\u94AE\u65F6\uFF0C\u5F53\u524D\u7528\u6237\u65E0\u5BF9\u5E94 permissionList \u6743\u9650\u7801")
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
                  createVNode("span", { style: { "color": "#C3E88D" } }, "%camp_general%"),
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
          createVNode("h4", null, "\u62A5\u951915\uFF1A\u6570\u636E\u4E0D\u5B58\u5728"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u67E5\u770B\u3001\u7F16\u8F91\u3001\u5220\u9664\u7B49\u64CD\u4F5C\u65F6\uFF0C\u63A5\u53E3\u8FD4\u56DE\u6570\u636E\u4E3A\u7A7A\u6216\u7533\u8BF7\u7F16\u7801\u4E0D\u5B58\u5728")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u524D\u7AEF\u901A\u8FC7 applyCode \u8C03\u7528\u8BE6\u60C5\u63A5\u53E3\uFF0C\u540E\u7AEF\u67E5\u8BE2 TRAIN_CAMP_APPLY \u8868\u65E0\u5BF9\u5E94\u8BB0\u5F55\u6216\u8BB0\u5F55\u5DF2\u903B\u8F91\u5220\u9664\uFF0C\u8FD4\u56DE\u7A7A\u6570\u636E\u3002\u5E38\u89C1\u6839\u56E0\uFF1A\u7533\u8BF7\u7F16\u7801\u9519\u8BEF\u3001\u7533\u8BF7\u5DF2\u88AB\u5220\u9664\u3001\u8DE8\u79DF\u6237\u67E5\u8BE2\u3001\u6570\u636E\u6743\u9650\u9694\u79BB\u7B49\u3002\u9700\u68C0\u67E5 APPLY_CODE \u6709\u6548\u6027\u53CA\u6570\u636E\u6743\u9650")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7533\u8BF7\u7F16\u7801, CAMP_NAME "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7279\u8BAD\u8425\u540D\u79F0,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         APPLY_STATE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7533\u8BF7\u72B6\u6001, DELETE_FLAG "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5220\u9664\u6807\u8BB0")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " TRAIN_CAMP_APPLY")
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
              createTextVNode("\uFF1A\u70B9\u51FB\u53D6\u6D88\u7533\u8BF7\u3001\u7ED3\u7B97\u524D\u786E\u8BA4\u7B49\u6309\u94AE\u65F6\uFF0C\u7533\u8BF7\u72B6\u6001\u4E0D\u5728\u5141\u8BB8\u64CD\u4F5C\u7684\u72B6\u6001\u8303\u56F4\u5185")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u540E\u7AEF\u6821\u9A8C\u7533\u8BF7\u72B6\u6001\u673A\uFF0C\u5982\u53D6\u6D88\u7533\u8BF7\u8981\u6C42 approvalState \u4E3A fdd_sign \u4E14\u63D0\u524D7\u5929\u3001\u7ED3\u7B97\u786E\u8BA4\u8981\u6C42\u72B6\u6001\u4E3A\u6267\u884C\u5B8C\u6210\u7B49\u3002\u72B6\u6001\u4E0D\u5339\u914D\u65F6\u540E\u7AEF\u8FD4\u56DE\u4E1A\u52A1\u5F02\u5E38\uFF0C\u524D\u7AEF\u63D0\u793A\u540E\u7AEF\u8FD4\u56DE\u7684 message\u3002\u9700\u68C0\u67E5\u7533\u8BF7\u5F53\u524D\u72B6\u6001\u53CA\u64CD\u4F5C\u6D41\u7A0B")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7533\u8BF7\u7F16\u7801, CAMP_NAME "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7279\u8BAD\u8425\u540D\u79F0,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         APPLY_STATE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7533\u8BF7\u72B6\u6001, APPROVAL_STATE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5BA1\u6838\u72B6\u6001,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         CANCEL_APPROVAL_STATE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u53D6\u6D88\u5BA1\u6838\u72B6\u6001, ERROR_INFO "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5F02\u5E38\u95EE\u9898")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " TRAIN_CAMP_APPLY")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " APPLY_STATE "),
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
                  createVNode("span", { style: { "color": "#C3E88D" } }, "executing"),
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
          createVNode("h4", null, "\u62A5\u951917\uFF1A\u503C\u96C6\u6570\u636E\u4E0D\u663E\u793A"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u67E5\u8BE2\u6761\u4EF6\u6216\u5217\u8868\u4E2D\u7533\u8BF7\u72B6\u6001\u3001\u5BA1\u6838\u72B6\u6001\u7B49\u4E0B\u62C9\u9009\u9879\u4E3A\u7A7A")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u524D\u7AEF\u901A\u8FC7 lookupCode \u67E5\u8BE2\u503C\u96C6 MBO.ORDER_LECTURE_STATE\u3001MBO.APPLY_APPROVAL_STATE \u7B49\uFF0C\u503C\u96C6\u672A\u914D\u7F6E\u6216\u672A\u542F\u7528\u5219\u4E0B\u62C9\u9009\u9879\u4E3A\u7A7A\u3002\u9700\u5728\u503C\u96C6\u7BA1\u7406\u9875\u9762\u914D\u7F6E\u5BF9\u5E94\u503C\u96C6")
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
                  createVNode("span", { style: { "color": "#C3E88D" } }, "MBO.ORDER_LECTURE_STATE"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ","),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "MBO.APPLY_APPROVAL_STATE"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ","),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "MBO.CANCEL_APPROVAL_STATE"),
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
          createVNode("h4", null, "\u62A5\u951918\uFF1A\u62A5\u540D\u4EBA\u5458\u660E\u7EC6\u4E0D\u80FD\u4E3A\u7A7A"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u4FDD\u5B58\u6216\u4FDD\u5B58\u5E76\u63D0\u4EA4\u65F6\uFF0C\u62A5\u540D\u4EBA\u5458\u660E\u7EC6\u884C\u6570\u636E\u4E3A\u7A7A")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u540E\u7AEF\u6821\u9A8C\u62A5\u540D\u4EBA\u5458\u660E\u7EC6\u884C\u975E\u7A7A\uFF0C\u7279\u8BAD\u8425\u70B9\u5C06\u9700\u660E\u786E\u62A5\u540D\u4EBA\u5458\u5217\u8868\u3002\u82E5\u660E\u7EC6\u884C\u4E3A\u7A7A\u5219\u8FD4\u56DE\u4E1A\u52A1\u5F02\u5E38\u3002\u9700\u6DFB\u52A0\u62A5\u540D\u4EBA\u5458\u660E\u7EC6\u540E\u4FDD\u5B58")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7533\u8BF7\u7F16\u7801, A.CAMP_NAME "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7279\u8BAD\u8425\u540D\u79F0,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         "),
                  createVNode("span", { style: { "color": "#82AAFF" } }, "COUNT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "(B.LINE_ID) "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u62A5\u540D\u4EBA\u5458\u6570")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " TRAIN_CAMP_APPLY A")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "LEFT JOIN"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " TRAIN_CAMP_APPLY_LINE B "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ON"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " A.APPLY_CODE "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " B.APPLY_CODE")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " A.APPLY_STATE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IN"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " ("),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "draft"),
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
                  createVNode("span", { style: { "color": "#F78C6C" } }, "GROUP BY"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " A.APPLY_CODE, A.CAMP_NAME")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "HAVING"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#82AAFF" } }, "COUNT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "(B.LINE_ID) "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u951919\uFF1A\u62DF\u70B9\u5C06\u5929\u6570\u5FC5\u987B\u5927\u4E8E0"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u4FDD\u5B58\u6216\u4FDD\u5B58\u5E76\u63D0\u4EA4\u65F6\uFF0CPRE_ORD_LECTURER_DAYS \u5B57\u6BB5\u975E\u6B63\u6570")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u540E\u7AEF\u6821\u9A8C PRE_ORD_LECTURER_DAYS > 0\uFF0C\u62DF\u70B9\u5C06\u5929\u6570\u7528\u4E8E\u8D39\u7528\u8BA1\u7B97\u4E0E\u8BB2\u5E08\u6392\u671F\uFF0C\u5FC5\u987B\u4E3A\u6B63\u6570\u3002\u82E5\u4E3A0\u6216\u8D1F\u6570\u5219\u8FD4\u56DE\u4E1A\u52A1\u5F02\u5E38\u3002\u9700\u68C0\u67E5\u62DF\u70B9\u5C06\u5929\u6570\u8F93\u5165\u662F\u5426\u6B63\u786E")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7533\u8BF7\u7F16\u7801, CAMP_NAME "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7279\u8BAD\u8425\u540D\u79F0,")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " TRAIN_CAMP_APPLY")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " PRE_ORD_LECTURER_DAYS "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NOT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NULL"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " PRE_ORD_LECTURER_DAYS "),
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
        _push2(`<p${_scopeId}><strong${_scopeId}>Q1\uFF1A\u7ECF\u9500\u5546\u770B\u4E0D\u5230\u81EA\u5DF1\u53D1\u8D77\u7684\u7279\u8BAD\u8425\u8BB0\u5F55\uFF1F</strong></p><p${_scopeId}>A\uFF1A\u68C0\u67E5\u8BE5\u7ECF\u9500\u5546\u662F\u5426\u6B63\u786E\u5173\u8054\u5F53\u524D\u767B\u5F55\u7528\u6237\uFF0C\u786E\u8BA4DEALER_CODE\u4E0E\u5F53\u524D\u767B\u5F55\u7528\u6237\u5173\u8054\u7684\u7ECF\u9500\u5546\u4E00\u81F4\u3002</p><p${_scopeId}><strong${_scopeId}>Q2\uFF1A\u7279\u8BAD\u8425\u72B6\u6001\u672A\u66F4\u65B0\uFF1F</strong></p><p${_scopeId}>A\uFF1A\u72B6\u6001\u7531\u5BA1\u6279\u6D41\u7A0B\u9A71\u52A8\uFF0C\u9700\u8054\u7CFB\u5BA1\u6279\u4EBA\u786E\u8BA4\u5BA1\u6279\u8FDB\u5EA6\u3002</p><p${_scopeId}><strong${_scopeId}>Q3\uFF1ApageForDealer\u63A5\u53E3\u8FD4\u56DE\u6570\u636E\u4E3A\u7A7A\uFF1F</strong></p><p${_scopeId}>A\uFF1A\u786E\u8BA4\u5F53\u524D\u767B\u5F55\u7528\u6237\u5DF2\u5173\u8054\u7ECF\u9500\u5546\u89D2\u8272\uFF0C\u4E14\u8BE5\u7ECF\u9500\u5546\u5B58\u5728\u53D1\u8D77\u8BB0\u5F55\u3002</p><p${_scopeId}><strong${_scopeId}>Q4\uFF1A\u7533\u8BF7\u70B9\u5C06\u5F39\u7A97\u65E0\u7279\u8BAD\u8425\u6570\u636E\uFF1F</strong></p><p${_scopeId}>A\uFF1A\u68C0\u67E5campApplyApi.campSelectPage\u63A5\u53E3\uFF0C\u786E\u8BA4\u6709\u751F\u6548\u7279\u8BAD\u8425\u3002</p><p${_scopeId}><strong${_scopeId}>Q5\uFF1A\u62A5\u540D\u4FDD\u5B58\u5931\u8D25\uFF1F</strong></p><p${_scopeId}>A\uFF1A\u68C0\u67E5ApplyInfo\u7EC4\u4EF6\u6570\u636E\uFF0C\u6CD5\u4EBA\u4E3B\u4F53\u548C\u4EA4\u6613\u516C\u53F8\u662F\u5426\u9009\u62E9\u3002</p><p${_scopeId}><strong${_scopeId}>Q6\uFF1A\u7ED3\u7B97\u524D\u786E\u8BA4\u6309\u94AE\u4E0D\u663E\u793A\uFF1F</strong></p><p${_scopeId}>A\uFF1A\u68C0\u67E5beforeSettlementConfirmState\u662F\u5426\u4E3Ato_be_confirm\u3002</p>`);
      } else {
        return [
          createVNode("p", null, [
            createVNode("strong", null, "Q1\uFF1A\u7ECF\u9500\u5546\u770B\u4E0D\u5230\u81EA\u5DF1\u53D1\u8D77\u7684\u7279\u8BAD\u8425\u8BB0\u5F55\uFF1F")
          ]),
          createVNode("p", null, "A\uFF1A\u68C0\u67E5\u8BE5\u7ECF\u9500\u5546\u662F\u5426\u6B63\u786E\u5173\u8054\u5F53\u524D\u767B\u5F55\u7528\u6237\uFF0C\u786E\u8BA4DEALER_CODE\u4E0E\u5F53\u524D\u767B\u5F55\u7528\u6237\u5173\u8054\u7684\u7ECF\u9500\u5546\u4E00\u81F4\u3002"),
          createVNode("p", null, [
            createVNode("strong", null, "Q2\uFF1A\u7279\u8BAD\u8425\u72B6\u6001\u672A\u66F4\u65B0\uFF1F")
          ]),
          createVNode("p", null, "A\uFF1A\u72B6\u6001\u7531\u5BA1\u6279\u6D41\u7A0B\u9A71\u52A8\uFF0C\u9700\u8054\u7CFB\u5BA1\u6279\u4EBA\u786E\u8BA4\u5BA1\u6279\u8FDB\u5EA6\u3002"),
          createVNode("p", null, [
            createVNode("strong", null, "Q3\uFF1ApageForDealer\u63A5\u53E3\u8FD4\u56DE\u6570\u636E\u4E3A\u7A7A\uFF1F")
          ]),
          createVNode("p", null, "A\uFF1A\u786E\u8BA4\u5F53\u524D\u767B\u5F55\u7528\u6237\u5DF2\u5173\u8054\u7ECF\u9500\u5546\u89D2\u8272\uFF0C\u4E14\u8BE5\u7ECF\u9500\u5546\u5B58\u5728\u53D1\u8D77\u8BB0\u5F55\u3002"),
          createVNode("p", null, [
            createVNode("strong", null, "Q4\uFF1A\u7533\u8BF7\u70B9\u5C06\u5F39\u7A97\u65E0\u7279\u8BAD\u8425\u6570\u636E\uFF1F")
          ]),
          createVNode("p", null, "A\uFF1A\u68C0\u67E5campApplyApi.campSelectPage\u63A5\u53E3\uFF0C\u786E\u8BA4\u6709\u751F\u6548\u7279\u8BAD\u8425\u3002"),
          createVNode("p", null, [
            createVNode("strong", null, "Q5\uFF1A\u62A5\u540D\u4FDD\u5B58\u5931\u8D25\uFF1F")
          ]),
          createVNode("p", null, "A\uFF1A\u68C0\u67E5ApplyInfo\u7EC4\u4EF6\u6570\u636E\uFF0C\u6CD5\u4EBA\u4E3B\u4F53\u548C\u4EA4\u6613\u516C\u53F8\u662F\u5426\u9009\u62E9\u3002"),
          createVNode("p", null, [
            createVNode("strong", null, "Q6\uFF1A\u7ED3\u7B97\u524D\u786E\u8BA4\u6309\u94AE\u4E0D\u663E\u793A\uFF1F")
          ]),
          createVNode("p", null, "A\uFF1A\u68C0\u67E5beforeSettlementConfirmState\u662F\u5426\u4E3Ato_be_confirm\u3002")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div><div id="changelog" style="${ssrRenderStyle({ "display": "none" })}"><div class="tab-pad"><div class="kl-wrap">`);
  _push(ssrRenderComponent(_component_KbCard, { title: "\u66F4\u65B0\u8BB0\u5F55" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u65E5\u671F</th><th${_scopeId}>\u63D0\u4EA4ID</th><th${_scopeId}>\u63D0\u4EA4\u4EBA</th><th${_scopeId}>\u63D0\u4EA4\u5185\u5BB9</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>2025-11-12</td><td${_scopeId}>-</td><td${_scopeId}>hfy</td><td${_scopeId}>\u521D\u59CB\u521B\u5EFA</td></tr><tr${_scopeId}><td${_scopeId}>2026-08-03</td><td${_scopeId}>-</td><td${_scopeId}>AI</td><td${_scopeId}>\u521D\u59CB\u521B\u5EFA</td></tr><tr${_scopeId}><td${_scopeId}>2026-08-28</td><td${_scopeId}>-</td><td${_scopeId}>AI</td><td${_scopeId}>\u5B8C\u6574\u91CD\u5199\uFF0C\u8865\u5145\u4E1A\u52A1\u6D41\u7A0B\u3001\u754C\u9762\u6A21\u5757\u3001\u6570\u636E\u5E93\u8868\u3001FAQ\u7B49</td></tr><tr${_scopeId}><td${_scopeId}>2026-07-31</td><td${_scopeId}>-</td><td${_scopeId}>AI</td><td${_scopeId}>\u5BF9\u6BD4\u7F51\u7AD9\u8865\u5145\u5B9A\u4E49\u3001\u8BE6\u7EC6\u903B\u8F91\u3001\u6570\u636E\u5E93\u8868\u5B57\u6BB5\u7B49</td></tr><tr${_scopeId}><td${_scopeId}>2026-08-30</td><td${_scopeId}>-</td><td${_scopeId}>AI</td><td${_scopeId}>\u6309skill\u89C4\u8303\u683C\u5F0F\u91CD\u5199\uFF0C\u8C03\u6574\u4E3A\u7ECF\u9500\u5546\u53D1\u8D77\u89C6\u89D2\uFF0C\u89C4\u8303\u4E0A\u4E0B\u6E38\u3001\u91CD\u70B9\u903B\u8F91\u3001\u5F39\u7A97\u3001\u6309\u94AE\u3001\u6821\u9A8C\u3001\u72B6\u6001\u673A\u3001\u66F4\u65B0\u8BB0\u5F55\u7B49\u683C\u5F0F</td></tr></tbody></table>`);
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
                createVNode("td", null, "\u6309skill\u89C4\u8303\u683C\u5F0F\u91CD\u5199\uFF0C\u8C03\u6574\u4E3A\u7ECF\u9500\u5546\u53D1\u8D77\u89C6\u89D2\uFF0C\u89C4\u8303\u4E0A\u4E0B\u6E38\u3001\u91CD\u70B9\u903B\u8F91\u3001\u5F39\u7A97\u3001\u6309\u94AE\u3001\u6821\u9A8C\u3001\u72B6\u6001\u673A\u3001\u66F4\u65B0\u8BB0\u5F55\u7B49\u683C\u5F0F")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("\u70B9\u5C06\u7BA1\u7406/\u7ECF\u9500\u5546\u70B9\u5C06/\u7279\u8BAD\u8425/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
