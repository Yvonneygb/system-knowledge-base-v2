import { resolveComponent, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.6ab74304.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"\u95E8\u5E97\u7BA1\u7406/\u88C5\u4FEE\u62A5\u8868/\u5151\u73B0\u6C47\u603B/index.md"}');
const _sfc_main = { name: "\u95E8\u5E97\u7BA1\u7406/\u88C5\u4FEE\u62A5\u8868/\u5151\u73B0\u6C47\u603B/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_BreadcrumbTabs = resolveComponent("BreadcrumbTabs");
  const _component_KbCard = resolveComponent("KbCard");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_BreadcrumbTabs, null, null, _parent));
  _push(`<div id="biz-intro" style="${ssrRenderStyle({ "display": "none" })}"><div class="tab-pad"><div class="kl-wrap"><div class="kl-card"><div class="biz-kl-hdr"><span class="biz-tag" style="${ssrRenderStyle({ "background": "rgba(124,58,237,0.08)", "color": "#7C3AED", "border-color": "rgba(124,58,237,0.18)" })}"> \u5B9A\u4E49</span><h2>\u67E5\u4EC0\u4E48</h2><p>\u989D\u5EA6\u5185\u4E0E\u989D\u5EA6\u5916\u5151\u73B0\u6570\u636E\u7684\u5408\u5E76\u6C47\u603B\u7EDF\u8BA1</p></div><div class="biz-3col"><div class="kl-col-box" style="${ssrRenderStyle({ "margin-bottom": "0" })}"><div style="${ssrRenderStyle({ "display": "flex", "gap": "12px", "align-items": "flex-start" })}"><div style="${ssrRenderStyle({ "width": "36px", "height": "36px", "border-radius": "10px", "display": "flex", "align-items": "center", "justify-content": "center", "flex-shrink": "0", "background": "linear-gradient(135deg,#7C3AED,#A78BFA)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 12L6 8L10 10L14 4" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></div><div><h5 style="${ssrRenderStyle({ "font-size": "0.88rem", "font-weight": "800", "color": "#1F2937", "margin": "0 0 6px" })}">\u6570\u636E\u53E3\u5F84</h5><p style="${ssrRenderStyle({ "font-size": "0.73rem", "color": "#6B7280", "margin": "0", "line-height": "1.6" })}">\u540C\u65F6\u6C47\u603B\u989D\u5EA6\u5185\u4E0E\u989D\u5EA6\u5916\u5151\u73B0\u6570\u636E\uFF0C\u5408\u5E76\u5C55\u793A\u95E8\u5E97\u7EF4\u5EA6\u7684\u5151\u73B0\u60C5\u51B5\u3002</p></div></div></div><div class="kl-col-box alt" style="${ssrRenderStyle({ "margin-bottom": "0" })}"><div style="${ssrRenderStyle({ "display": "flex", "gap": "12px", "align-items": "flex-start" })}"><div style="${ssrRenderStyle({ "width": "36px", "height": "36px", "border-radius": "10px", "display": "flex", "align-items": "center", "justify-content": "center", "flex-shrink": "0", "background": "linear-gradient(135deg,#F59E0B,#FBBF24)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="6" stroke="white" stroke-width="1.5"></circle><path d="M8 4V8L10.5 10" stroke="white" stroke-width="1.5" stroke-linecap="round"></path></svg></div><div><h5 style="${ssrRenderStyle({ "font-size": "0.88rem", "font-weight": "800", "color": "#1F2937", "margin": "0 0 6px" })}">\u533A\u5206\u7C7B\u578B</h5><p style="${ssrRenderStyle({ "font-size": "0.73rem", "color": "#6B7280", "margin": "0", "line-height": "1.6" })}">\u6309\u5151\u73B0\u7C7B\u578B\u533A\u5206\u989D\u5EA6\u5185/\u989D\u5EA6\u5916\uFF0C\u53EF\u5355\u72EC\u7B5B\u9009\u67E5\u770B\u7279\u5B9A\u7C7B\u578B\u7684\u5151\u73B0\u6570\u636E\u3002</p></div></div></div><div class="kl-col-box" style="${ssrRenderStyle({ "margin-bottom": "0" })}"><div style="${ssrRenderStyle({ "display": "flex", "gap": "12px", "align-items": "flex-start" })}"><div style="${ssrRenderStyle({ "width": "36px", "height": "36px", "border-radius": "10px", "display": "flex", "align-items": "center", "justify-content": "center", "flex-shrink": "0", "background": "linear-gradient(135deg,#10B981,#34D399)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="5" width="12" height="10" rx="1" stroke="white" stroke-width="1.5"></rect><path d="M2 8H14" stroke="white" stroke-width="1.5"></path><path d="M8 5V8" stroke="white" stroke-width="1.5"></path><path d="M5 3H11" stroke="white" stroke-width="1.5" stroke-linecap="round"></path></svg></div><div><h5 style="${ssrRenderStyle({ "font-size": "0.88rem", "font-weight": "800", "color": "#1F2937", "margin": "0 0 6px" })}">\u53EA\u8BFB\u67E5\u8BE2</h5><p style="${ssrRenderStyle({ "font-size": "0.73rem", "color": "#6B7280", "margin": "0", "line-height": "1.6" })}">\u7EAF\u7EDF\u8BA1\u62A5\u8868\uFF0C\u4EC5\u652F\u6301\u67E5\u770B\u4E0E\u5BFC\u51FA\uFF0C\u4E0D\u652F\u6301\u65B0\u589E\u3001\u4FEE\u6539\u3001\u5220\u9664\u7B49\u5199\u64CD\u4F5C\u3002</p></div></div></div></div></div><div class="kl-card" style="${ssrRenderStyle({ "margin-bottom": "0" })}"><div class="biz-kl-hdr"><span class="biz-tag" style="${ssrRenderStyle({ "background": "rgba(124,58,237,0.08)", "color": "#7C3AED", "border-color": "rgba(124,58,237,0.18)" })}"> \u4F7F\u7528</span><h2>\u600E\u4E48\u7528</h2><p>\u4E09\u6B65\u5B8C\u6210\u5151\u73B0\u6574\u4F53\u60C5\u51B5\u67E5\u770B\u4E0E\u5F52\u6863</p></div><div class="biz-steps"><div class="biz-step-item"><div class="biz-step-circle" style="${ssrRenderStyle({ "background": "linear-gradient(135deg,#7C3AED,#6D28D9)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 4H13" stroke="white" stroke-width="1.5" stroke-linecap="round"></path><path d="M3 8H13" stroke="white" stroke-width="1.5" stroke-linecap="round"></path><path d="M3 12H13" stroke="white" stroke-width="1.5" stroke-linecap="round"></path><circle cx="2.5" cy="4" r="1" fill="white"></circle><circle cx="2.5" cy="8" r="1" fill="white"></circle><circle cx="2.5" cy="12" r="1" fill="white"></circle></svg></div><h5>\u8BBE\u5B9A\u6761\u4EF6</h5><small>\u6309\u95E8\u5E97\u3001\u7ECF\u9500\u5546\u3001\u65E5\u671F\u3001<br>\u5151\u73B0\u7C7B\u578B\u7B49\u6761\u4EF6\u7B5B\u9009</small></div><div class="biz-step-arrow">\u2192</div><div class="biz-step-item"><div class="biz-step-circle" style="${ssrRenderStyle({ "background": "linear-gradient(135deg,#10b981,#059669)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 12L6 8L10 10L14 4" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11 4H14V7" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></div><h5>\u67E5\u8BE2\u5C55\u793A</h5><small>\u989D\u5EA6\u5185\u5916\u5408\u5E76\u6C47\u603B\u5217\u8868<br>\u67E5\u770B\u5151\u73B0\u6574\u4F53\u60C5\u51B5\u4E0E\u8D44\u91D1\u5206\u5E03</small></div><div class="biz-step-arrow">\u2192</div><div class="biz-step-item"><div class="biz-step-circle" style="${ssrRenderStyle({ "background": "linear-gradient(135deg,#f59e0b,#d97706)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 5H12" stroke="white" stroke-width="1.5" stroke-linecap="round"></path><path d="M4 8H12" stroke="white" stroke-width="1.5" stroke-linecap="round"></path><path d="M4 11H8" stroke="white" stroke-width="1.5" stroke-linecap="round"></path><path d="M11 11L13 9L14.5 10.5L12.5 12.5L11 11Z" stroke="white" stroke-width="1.5" stroke-linejoin="round"></path></svg></div><h5>\u5BFC\u51FA\u5F52\u6863</h5><small>\u5BFC\u51FA Excel<br>\u4F9B\u5185\u90E8\u7BA1\u7406\u51B3\u7B56\u4E0E\u5F52\u6863\u4F7F\u7528</small></div></div></div></div></div></div><div id="biz-flow" style="${ssrRenderStyle({ "display": "none" })}"><div class="tab-pad"><div class="bf-truth-flow"><h4 class="bf-main-title">\u5151\u73B0\u6C47\u603B \u2014 \u5168\u94FE\u8DEF\u6D41\u7A0B\u56FE</h4><p class="bf-main-sub">\u5F00\u59CB \u2192 \u95E8\u5E97\u9A8C\u6536\u4E0E\u62A5\u9500\u5355 \u2192 \u2696\u5151\u73B0\u7C7B\u578B\uFF1F \u2192 \u989D\u5EA6\u5185/\u989D\u5EA6\u5916\u5151\u73B0\u5355 \u2192 \u2605\u5151\u73B0\u6C47\u603B\u62A5\u8868\u2605 \u2192 \u5BFC\u51FA/\u67E5\u770B \u2192 \u7ED3\u675F\uFF08\u53EA\u8BFB\u62A5\u8868\uFF0C\u65E0\u5199\u56DE\uFF09</p><div class="bf-fc-svg-wrap"><svg class="bf-fc-svg" style="${ssrRenderStyle({ "max-height": "none" })}" viewBox="0 0 1200 818" xmlns="http://www.w3.org/2000/svg"><defs><marker id="arr-green" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon points="0,0 10,5 0,10" fill="#16A34A"></polygon></marker><marker id="arr-gray" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon points="0,0 10,5 0,10" fill="#9CA3AF"></polygon></marker><marker id="arr-blue" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon points="0,0 10,5 0,10" fill="#3B82F6"></polygon></marker><marker id="arr-red" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon points="0,0 10,5 0,10" fill="#EF4444"></polygon></marker><filter id="shadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000" flood-opacity="0.15"></feDropShadow></filter></defs><rect x="50" y="20" width="1100" height="95" rx="8" fill="#EFF6FF" stroke="#3B82F6" stroke-width="1.5" stroke-dasharray="6,4"></rect><text x="600" y="42" text-anchor="middle" fill="#1D4ED8" font-size="13" font-weight="600">\u4E0A\u6E38\u652F\u6491</text><rect x="263" y="56" width="104" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"></rect><text x="315" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">\u95E8\u5E97\u9A8C\u6536\u4E0E\u62A5\u9500\u5355</text><rect x="377" y="56" width="104" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"></rect><text x="429" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">\u989D\u5EA6\u5185\u5151\u73B0\u5355</text><rect x="491" y="56" width="104" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"></rect><text x="543" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">\u989D\u5EA6\u5916\u5151\u73B0\u5355</text><rect x="605" y="56" width="104" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"></rect><text x="657" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">\u95E8\u5E97\u88C5\u4FEE\u7533\u8BF7\u5355</text><rect x="719" y="56" width="104" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"></rect><text x="771" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">hlod\u62A5\u8868\u5F15\u64CE</text><rect x="833" y="56" width="104" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"></rect><text x="885" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">\u7EC4\u7EC7/\u95E8\u5E97\u4E3B\u6570\u636E</text><line x1="600" y1="115" x2="600" y2="150" stroke="#3B82F6" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#arr-blue)"></line><rect x="560" y="150" width="80" height="44" rx="6" fill="#FAF5FF" stroke="#9333EA" stroke-width="1.5" stroke-dasharray="5,3"></rect><text x="600" y="177" text-anchor="middle" fill="#7C3AED" font-size="13" font-weight="600">\u5F00\u59CB</text><line x1="600" y1="194" x2="600" y2="220" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"></line><rect x="480" y="220" width="240" height="44" rx="6" fill="#F0FDF4" stroke="#16A34A" stroke-width="2"></rect><text x="600" y="247" text-anchor="middle" fill="#166534" font-size="13" font-weight="600">\u95E8\u5E97\u9A8C\u6536\u4E0E\u62A5\u9500\u5355</text><line x1="600" y1="264" x2="600" y2="284" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"></line><polygon points="600,284 680,324 600,364 520,324" fill="#FAF5FF" stroke="#9333EA" stroke-width="1.5" stroke-dasharray="5,3"></polygon><text x="600" y="328" text-anchor="middle" fill="#7C3AED" font-size="12" font-weight="600">\u2696 \u5151\u73B0\u7C7B\u578B\uFF1F</text><line x1="600" y1="364" x2="600" y2="376" stroke="#16A34A" stroke-width="2"></line><line x1="600" y1="376" x2="500" y2="376" stroke="#16A34A" stroke-width="2"></line><line x1="600" y1="376" x2="700" y2="376" stroke="#16A34A" stroke-width="2"></line><line x1="500" y1="376" x2="500" y2="397" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"></line><line x1="700" y1="376" x2="700" y2="397" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"></line><rect x="420" y="397" width="160" height="40" rx="6" fill="#F0FDF4" stroke="#16A34A" stroke-width="2"></rect><text x="500" y="422" text-anchor="middle" fill="#166534" font-size="13" font-weight="600">\u989D\u5EA6\u5185\u5151\u73B0\u5355</text><rect x="620" y="397" width="160" height="40" rx="6" fill="#F0FDF4" stroke="#16A34A" stroke-width="2"></rect><text x="700" y="422" text-anchor="middle" fill="#166534" font-size="13" font-weight="600">\u989D\u5EA6\u5916\u5151\u73B0\u5355</text><line x1="500" y1="437" x2="500" y2="457" stroke="#16A34A" stroke-width="2"></line><line x1="700" y1="437" x2="700" y2="457" stroke="#16A34A" stroke-width="2"></line><line x1="500" y1="457" x2="600" y2="457" stroke="#16A34A" stroke-width="2"></line><line x1="700" y1="457" x2="600" y2="457" stroke="#16A34A" stroke-width="2"></line><line x1="600" y1="457" x2="600" y2="483" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"></line><rect x="400" y="483" width="400" height="54" rx="6" fill="#16A34A" stroke="#15803D" stroke-width="2" filter="url(#shadow)"></rect><text x="600" y="507" text-anchor="middle" fill="#FFFFFF" font-size="13" font-weight="700">\u2605 \u5151\u73B0\u6C47\u603B\u62A5\u8868 \u2605</text><text x="600" y="525" text-anchor="middle" fill="#DCFCE7" font-size="10">\u67E5\u8BE2\u6761\u4EF6(\u95E8\u5E97/\u7ECF\u9500\u5546/\u65E5\u671F/\u5151\u73B0\u7C7B\u578B)\xB7\u989D\u5EA6\u5185\u5916\u5408\u5E76\u6C47\u603B\xB7\u5217\u8868\u5C55\u793A</text><line x1="600" y1="537" x2="600" y2="563" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"></line><rect x="470" y="563" width="260" height="44" rx="6" fill="#F0FDF4" stroke="#16A34A" stroke-width="2"></rect><text x="600" y="590" text-anchor="middle" fill="#166534" font-size="13" font-weight="600">\u5BFC\u51FA\u62A5\u8868 / \u9875\u9762\u67E5\u770B</text><line x1="600" y1="607" x2="600" y2="633" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"></line><rect x="545" y="633" width="110" height="40" rx="6" fill="#FAF5FF" stroke="#9333EA" stroke-width="1.5" stroke-dasharray="5,3"></rect><text x="600" y="658" text-anchor="middle" fill="#7C3AED" font-size="13" font-weight="600">\u7ED3\u675F</text><line x1="600" y1="673" x2="600" y2="703" stroke="#16A34A" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#arr-green)"></line><rect x="50" y="703" width="1100" height="95" rx="8" fill="#F0FDF4" stroke="#16A34A" stroke-width="1.5" stroke-dasharray="6,4"></rect><text x="600" y="725" text-anchor="middle" fill="#166534" font-size="13" font-weight="600">\u4E0B\u6E38\u5F71\u54CD</text><rect x="290" y="739" width="140" height="36" rx="5" fill="#FFFFFF" stroke="#16A34A" stroke-width="1.2"></rect><text x="360" y="763" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">\u5151\u73B0\u6574\u4F53\u60C5\u51B5\u67E5\u770B</text><rect x="450" y="739" width="140" height="36" rx="5" fill="#FFFFFF" stroke="#16A34A" stroke-width="1.2"></rect><text x="520" y="763" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">\u8D44\u91D1\u4F7F\u7528\u5206\u5E03\u5206\u6790</text><rect x="610" y="739" width="140" height="36" rx="5" fill="#FFFFFF" stroke="#16A34A" stroke-width="1.2"></rect><text x="680" y="763" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">Excel\u5BFC\u51FA\u5F52\u6863</text><rect x="770" y="739" width="140" height="36" rx="5" fill="#FFFFFF" stroke="#16A34A" stroke-width="1.2"></rect><text x="840" y="763" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">\u5185\u90E8\u7BA1\u7406\u51B3\u7B56\u53C2\u8003</text></svg></div><div class="bf-fc-legend"><span class="bf-fc-legend-item"><span class="bf-fc-dot bf-fc-dot-green"></span> \u4E3B\u6D41\u7A0B\u6B65\u9AA4</span><span class="bf-fc-legend-item"><span class="bf-fc-dot bf-fc-dot-purple"></span> \u5F00\u59CB/\u7ED3\u675F/\u5224\u65AD</span><span class="bf-fc-legend-item"><span class="bf-fc-dot bf-fc-dot-blue"></span> \u4E0A\u6E38\u652F\u6491\u670D\u52A1</span><span class="bf-fc-legend-item"><span style="${ssrRenderStyle({ "display": "inline-block", "width": "12px", "height": "12px", "background": "#16A34A", "border-radius": "2px" })}"></span> \u672C\u83DC\u5355\u6838\u5FC3\u62A5\u8868\u8282\u70B9</span></div></div></div></div><div id="key-logic" style="${ssrRenderStyle({ "display": "none" })}"><div class="tab-pad"><div class="kl-wrap">`);
  _push(ssrRenderComponent(_component_KbCard, {
    num: "1",
    title: "\u91CD\u70B9\u903B\u8F911\uFF1A\u5151\u73B0\u6570\u636E\u6C47\u603B\u7EDF\u8BA1 {\u6570\u636E\u6C47\u603B}"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u610F\u4E49</strong>\uFF1A\u6309\u591A\u7EF4\u5EA6\u6C47\u603B\u5151\u73B0\u6570\u636E\uFF0C\u652F\u6301\u7BA1\u7406\u5C42\u51B3\u7B56</li></ul><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u5177\u4F53\u903B\u8F91\u63CF\u8FF0</strong></li></ul><ul${_scopeId}><li${_scopeId}>\u7B2C1\u70B9\uFF1A\u6309\u5E74\u5EA6\u3001\u7ECF\u9500\u5546\u3001\u95E8\u5E97\u3001\u5151\u73B0\u7C7B\u578B\u7B49\u7EF4\u5EA6\u6C47\u603B</li></ul><ul${_scopeId}><li${_scopeId}>\u7B2C2\u70B9\uFF1A\u7EDF\u8BA1\u53EF\u5151\u73B0\u603B\u989D\u3001\u5DF2\u5151\u73B0\u91D1\u989D\u3001\u5269\u4F59\u53EF\u5151\u73B0\u91D1\u989D</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u610F\u4E49"),
              createTextVNode("\uFF1A\u6309\u591A\u7EF4\u5EA6\u6C47\u603B\u5151\u73B0\u6570\u636E\uFF0C\u652F\u6301\u7BA1\u7406\u5C42\u51B3\u7B56")
            ])
          ]),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u5177\u4F53\u903B\u8F91\u63CF\u8FF0")
            ])
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u7B2C1\u70B9\uFF1A\u6309\u5E74\u5EA6\u3001\u7ECF\u9500\u5546\u3001\u95E8\u5E97\u3001\u5151\u73B0\u7C7B\u578B\u7B49\u7EF4\u5EA6\u6C47\u603B")
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u7B2C2\u70B9\uFF1A\u7EDF\u8BA1\u53EF\u5151\u73B0\u603B\u989D\u3001\u5DF2\u5151\u73B0\u91D1\u989D\u3001\u5269\u4F59\u53EF\u5151\u73B0\u91D1\u989D")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div><div id="detail-logic" style="${ssrRenderStyle({ "display": "none" })}"><div class="tab-pad"><div class="kl-wrap">`);
  _push(ssrRenderComponent(_component_KbCard, { title: "\u754C\u9762\u6A21\u57571\uFF1A\u5151\u73B0\u6C47\u603B\u62A5\u8868\u67E5\u8BE2\u9875" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5B57\u6BB5\u540D</th><th${_scopeId}>\u6570\u636E\u5E93\u5217\u540D</th><th${_scopeId}>\u7EC4\u4EF6</th><th${_scopeId}>\u4E1A\u52A1\u91CA\u4E49</th><th${_scopeId}>\u663E\u9690\u6761\u4EF6</th><th${_scopeId}>\u53D6\u503C/\u8D4B\u503C\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u5E74\u5EA6</td><td${_scopeId}>-</td><td${_scopeId}>\u4E0B\u62C9\u9009\u62E9\u6846</td><td${_scopeId}>\u67E5\u8BE2\u5E74\u5EA6</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u9ED8\u8BA4\u5F53\u524D\u5E74\u5EA6</td></tr><tr${_scopeId}><td${_scopeId}>\u7ECF\u9500\u5546\u540D\u79F0</td><td${_scopeId}>-</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u67E5\u8BE2\u7ECF\u9500\u5546</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u53EF\u8F93\u5165\u7B5B\u9009</td></tr><tr${_scopeId}><td${_scopeId}>\u95E8\u5E97\u540D\u79F0</td><td${_scopeId}>-</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u67E5\u8BE2\u95E8\u5E97</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u53EF\u8F93\u5165\u7B5B\u9009</td></tr><tr${_scopeId}><td${_scopeId}>\u5151\u73B0\u7C7B\u578B</td><td${_scopeId}>-</td><td${_scopeId}>\u4E0B\u62C9\u9009\u62E9\u6846</td><td${_scopeId}>\u989D\u5EA6\u5185/\u989D\u5EA6\u5916</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>1=\u989D\u5EA6\u5185\uFF0C2=\u989D\u5EA6\u5916</td></tr><tr${_scopeId}><td${_scopeId}>\u65F6\u95F4\u8303\u56F4</td><td${_scopeId}>-</td><td${_scopeId}>\u65E5\u671F\u8303\u56F4\u9009\u62E9\u6846</td><td${_scopeId}>\u67E5\u8BE2\u65F6\u95F4\u8303\u56F4</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u53EF\u9009\u62E9\u8D77\u6B62\u65E5\u671F</td></tr></tbody></table>`);
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
                createVNode("td", null, "\u5E74\u5EA6"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u4E0B\u62C9\u9009\u62E9\u6846"),
                createVNode("td", null, "\u67E5\u8BE2\u5E74\u5EA6"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u9ED8\u8BA4\u5F53\u524D\u5E74\u5EA6")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7ECF\u9500\u5546\u540D\u79F0"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u67E5\u8BE2\u7ECF\u9500\u5546"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u53EF\u8F93\u5165\u7B5B\u9009")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u95E8\u5E97\u540D\u79F0"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u67E5\u8BE2\u95E8\u5E97"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u53EF\u8F93\u5165\u7B5B\u9009")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5151\u73B0\u7C7B\u578B"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u4E0B\u62C9\u9009\u62E9\u6846"),
                createVNode("td", null, "\u989D\u5EA6\u5185/\u989D\u5EA6\u5916"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "1=\u989D\u5EA6\u5185\uFF0C2=\u989D\u5EA6\u5916")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u65F6\u95F4\u8303\u56F4"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u65E5\u671F\u8303\u56F4\u9009\u62E9\u6846"),
                createVNode("td", null, "\u67E5\u8BE2\u65F6\u95F4\u8303\u56F4"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u53EF\u9009\u62E9\u8D77\u6B62\u65E5\u671F")
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, { title: "\u754C\u9762\u6A21\u57572\uFF1A\u5151\u73B0\u6C47\u603B\u62A5\u8868\u7ED3\u679C\u5217\u8868" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5B57\u6BB5\u540D</th><th${_scopeId}>\u6570\u636E\u5E93\u5217\u540D</th><th${_scopeId}>\u7EC4\u4EF6</th><th${_scopeId}>\u4E1A\u52A1\u91CA\u4E49</th><th${_scopeId}>\u663E\u9690\u6761\u4EF6</th><th${_scopeId}>\u53D6\u503C/\u8D4B\u503C\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u7ECF\u9500\u5546\u540D\u79F0</td><td${_scopeId}>-</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u7ECF\u9500\u5546\u540D\u79F0</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u67E5\u8BE2\u7ED3\u679C</td></tr><tr${_scopeId}><td${_scopeId}>\u95E8\u5E97\u540D\u79F0</td><td${_scopeId}>-</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u95E8\u5E97\u540D\u79F0</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u67E5\u8BE2\u7ED3\u679C</td></tr><tr${_scopeId}><td${_scopeId}>\u5151\u73B0\u5355\u53F7</td><td${_scopeId}>-</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u5151\u73B0\u5355\u53F7</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u67E5\u8BE2\u7ED3\u679C</td></tr><tr${_scopeId}><td${_scopeId}>\u62A5\u9500\u5355\u53F7</td><td${_scopeId}>-</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u5173\u8054\u62A5\u9500\u5355\u53F7</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u67E5\u8BE2\u7ED3\u679C</td></tr><tr${_scopeId}><td${_scopeId}>\u5151\u73B0\u7C7B\u578B</td><td${_scopeId}>-</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u989D\u5EA6\u5185/\u989D\u5EA6\u5916</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u67E5\u8BE2\u7ED3\u679C</td></tr><tr${_scopeId}><td${_scopeId}>\u53EF\u5151\u73B0\u603B\u989D</td><td${_scopeId}>-</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u53EF\u5151\u73B0\u603B\u989D</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u67E5\u8BE2\u7ED3\u679C</td></tr><tr${_scopeId}><td${_scopeId}>\u5DF2\u5151\u73B0\u91D1\u989D</td><td${_scopeId}>-</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u5DF2\u5151\u73B0\u91D1\u989D</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u67E5\u8BE2\u7ED3\u679C</td></tr><tr${_scopeId}><td${_scopeId}>\u672C\u6B21\u5151\u73B0\u91D1\u989D</td><td${_scopeId}>-</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u672C\u6B21\u5151\u73B0\u91D1\u989D</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u67E5\u8BE2\u7ED3\u679C</td></tr><tr${_scopeId}><td${_scopeId}>\u5BA1\u6279\u72B6\u6001</td><td${_scopeId}>-</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u5BA1\u6279\u72B6\u6001</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u67E5\u8BE2\u7ED3\u679C</td></tr></tbody></table>`);
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
                createVNode("td", null, "\u7ECF\u9500\u5546\u540D\u79F0"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u7ECF\u9500\u5546\u540D\u79F0"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u67E5\u8BE2\u7ED3\u679C")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u95E8\u5E97\u540D\u79F0"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u95E8\u5E97\u540D\u79F0"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u67E5\u8BE2\u7ED3\u679C")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5151\u73B0\u5355\u53F7"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u5151\u73B0\u5355\u53F7"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u67E5\u8BE2\u7ED3\u679C")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u62A5\u9500\u5355\u53F7"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u5173\u8054\u62A5\u9500\u5355\u53F7"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u67E5\u8BE2\u7ED3\u679C")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5151\u73B0\u7C7B\u578B"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u989D\u5EA6\u5185/\u989D\u5EA6\u5916"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u67E5\u8BE2\u7ED3\u679C")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u53EF\u5151\u73B0\u603B\u989D"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u53EF\u5151\u73B0\u603B\u989D"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u67E5\u8BE2\u7ED3\u679C")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5DF2\u5151\u73B0\u91D1\u989D"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u5DF2\u5151\u73B0\u91D1\u989D"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u67E5\u8BE2\u7ED3\u679C")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u672C\u6B21\u5151\u73B0\u91D1\u989D"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u672C\u6B21\u5151\u73B0\u91D1\u989D"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u67E5\u8BE2\u7ED3\u679C")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5BA1\u6279\u72B6\u6001"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u5BA1\u6279\u72B6\u6001"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u67E5\u8BE2\u7ED3\u679C")
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
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u6309\u94AE\u540D\u79F0</th><th${_scopeId}>\u6309\u94AE\u4F5C\u7528</th><th${_scopeId}>\u6240\u5728\u4F4D\u7F6E</th><th${_scopeId}>\u663E\u9690\u6761\u4EF6/\u53EF\u70B9\u51FB\u6761\u4EF6</th><th${_scopeId}>\u5F71\u54CD</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u67E5\u8BE2</td><td${_scopeId}>\u67E5\u8BE2\u62A5\u8868\u6570\u636E</td><td${_scopeId}>\u67E5\u8BE2\u9875</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u8C03\u7528search\u63A5\u53E3</td></tr><tr${_scopeId}><td${_scopeId}>\u91CD\u7F6E</td><td${_scopeId}>\u91CD\u7F6E\u67E5\u8BE2\u6761\u4EF6</td><td${_scopeId}>\u67E5\u8BE2\u9875</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u6E05\u7A7A\u67E5\u8BE2\u6761\u4EF6</td></tr></tbody></table><h4${_scopeId}>\u6309\u94AE1\uFF1A\u67E5\u8BE2\uFF08\u67E5\u8BE2\u9875\uFF09</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u5E38\u663E</li><li${_scopeId}><strong${_scopeId}>\u6267\u884C\u903B\u8F91</strong>\uFF1A</li><li${_scopeId}>\u7B2C1\u70B9\uFF1A\u6309\u67E5\u8BE2\u6761\u4EF6\u8C03\u7528\u62A5\u8868\u67E5\u8BE2\u63A5\u53E3</li><li${_scopeId}>\u7B2C2\u70B9\uFF1A\u5206\u9875\u8FD4\u56DE\u5151\u73B0\u6C47\u603B\u6570\u636E</li><li${_scopeId}><strong${_scopeId}>\u63A5\u53E3\u8C03\u7528</strong>\uFF1APOST /v1/{organizationId}/terminalReport/fin-fee-cashout-summary/search</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>*</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> fin_fee_cashout_header </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>1</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>1</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (#{budYear} </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>OR</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> bud_year </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> #{budYear})</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (#{custName} </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>OR</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> cust_name </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>LIKE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>%</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>||</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>#{custName}</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>||</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>%</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (#{terminalName} </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>OR</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> terminal_name </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>LIKE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>%</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>||</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>#{terminalName}</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>||</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>%</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (#{cashoutType} </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>OR</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> cashout_type </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> #{cashoutType})</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (#{startDate} </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>OR</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> create_time </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> #{startDate})</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (#{endDate} </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>OR</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> create_time </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&lt;=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> #{endDate})</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ORDER BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> create_time </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>DESC</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
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
                createVNode("td", null, "\u67E5\u8BE2\u62A5\u8868\u6570\u636E"),
                createVNode("td", null, "\u67E5\u8BE2\u9875"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u8C03\u7528search\u63A5\u53E3")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u91CD\u7F6E"),
                createVNode("td", null, "\u91CD\u7F6E\u67E5\u8BE2\u6761\u4EF6"),
                createVNode("td", null, "\u67E5\u8BE2\u9875"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u6E05\u7A7A\u67E5\u8BE2\u6761\u4EF6")
              ])
            ])
          ]),
          createVNode("h4", null, "\u6309\u94AE1\uFF1A\u67E5\u8BE2\uFF08\u67E5\u8BE2\u9875\uFF09"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u5E38\u663E")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u6267\u884C\u903B\u8F91"),
              createTextVNode("\uFF1A")
            ]),
            createVNode("li", null, "\u7B2C1\u70B9\uFF1A\u6309\u67E5\u8BE2\u6761\u4EF6\u8C03\u7528\u62A5\u8868\u67E5\u8BE2\u63A5\u53E3"),
            createVNode("li", null, "\u7B2C2\u70B9\uFF1A\u5206\u9875\u8FD4\u56DE\u5151\u73B0\u6C47\u603B\u6570\u636E"),
            createVNode("li", null, [
              createVNode("strong", null, "\u63A5\u53E3\u8C03\u7528"),
              createTextVNode("\uFF1APOST /v1/{organizationId}/terminalReport/fin-fee-cashout-summary/search")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " fin_fee_cashout_header "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "1"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "1")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " (#{budYear} "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NULL"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "OR"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " bud_year "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " #{budYear})")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " (#{custName} "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NULL"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "OR"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " cust_name "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "LIKE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "%"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "||"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "#{custName}"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "||"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "%"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ")")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " (#{terminalName} "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NULL"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "OR"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " terminal_name "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "LIKE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "%"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "||"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "#{terminalName}"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "||"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "%"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ")")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " (#{cashoutType} "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NULL"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "OR"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " cashout_type "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " #{cashoutType})")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " (#{startDate} "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NULL"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "OR"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " create_time "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, ">="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " #{startDate})")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " (#{endDate} "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NULL"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "OR"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " create_time "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "<="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " #{endDate})")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ORDER BY"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " create_time "),
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
  _push(ssrRenderComponent(_component_KbCard, { title: "\u76F8\u5173\u8868\uFF1AFIN_FEE_CASHOUT_HEADER\uFF08\u62A5\u9500\u53D1\u7968\u5151\u73B0\u4E3B\u8868-\u67E5\u8BE2\u6765\u6E90\uFF09" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5B57\u6BB5\u540D</th><th${_scopeId}>\u7C7B\u578B</th><th${_scopeId}>\u91CA\u4E49</th><th${_scopeId}>\u5BF9\u5E94\u754C\u9762\u5B57\u6BB5</th><th${_scopeId}>\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>FEE_CASHOUT_NO</td><td${_scopeId}>VARCHAR2</td><td${_scopeId}>\u5151\u73B0\u5355\u53F7</td><td${_scopeId}>\u5151\u73B0\u5355\u53F7</td><td${_scopeId}>\u67E5\u8BE2\u6765\u6E90</td></tr><tr${_scopeId}><td${_scopeId}>BX_NO</td><td${_scopeId}>VARCHAR2</td><td${_scopeId}>\u62A5\u9500\u5355\u53F7</td><td${_scopeId}>\u62A5\u9500\u5355\u53F7</td><td${_scopeId}>\u67E5\u8BE2\u6765\u6E90</td></tr><tr${_scopeId}><td${_scopeId}>CASHOUT_TYPE</td><td${_scopeId}>NUMBER</td><td${_scopeId}>\u5151\u73B0\u7C7B\u578B</td><td${_scopeId}>\u5151\u73B0\u7C7B\u578B</td><td${_scopeId}>1=\u989D\u5EA6\u5185\uFF0C2=\u989D\u5EA6\u5916</td></tr><tr${_scopeId}><td${_scopeId}>TOTAL_CAN_CASHOUT_AMT</td><td${_scopeId}>DECIMAL</td><td${_scopeId}>\u53EF\u5151\u73B0\u603B\u989D</td><td${_scopeId}>\u53EF\u5151\u73B0\u603B\u989D</td><td${_scopeId}>\u67E5\u8BE2\u6765\u6E90</td></tr><tr${_scopeId}><td${_scopeId}>THIS_CASHOUT_AMT</td><td${_scopeId}>DECIMAL</td><td${_scopeId}>\u672C\u6B21\u5151\u73B0\u91D1\u989D</td><td${_scopeId}>\u672C\u6B21\u5151\u73B0\u91D1\u989D</td><td${_scopeId}>\u67E5\u8BE2\u6765\u6E90</td></tr><tr${_scopeId}><td${_scopeId}>CUST_NAME</td><td${_scopeId}>VARCHAR2</td><td${_scopeId}>\u7ECF\u9500\u5546\u540D\u79F0</td><td${_scopeId}>\u7ECF\u9500\u5546\u540D\u79F0</td><td${_scopeId}>\u67E5\u8BE2\u6765\u6E90</td></tr><tr${_scopeId}><td${_scopeId}>TERMINAL_NAME</td><td${_scopeId}>VARCHAR2</td><td${_scopeId}>\u95E8\u5E97\u540D\u79F0</td><td${_scopeId}>\u95E8\u5E97\u540D\u79F0</td><td${_scopeId}>\u67E5\u8BE2\u6765\u6E90</td></tr><tr${_scopeId}><td${_scopeId}>HZ_APPROVE_STATUS</td><td${_scopeId}>VARCHAR2</td><td${_scopeId}>\u5BA1\u6279\u72B6\u6001</td><td${_scopeId}>\u5BA1\u6279\u72B6\u6001</td><td${_scopeId}>\u67E5\u8BE2\u6765\u6E90</td></tr></tbody></table>`);
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
                createVNode("td", null, "FEE_CASHOUT_NO"),
                createVNode("td", null, "VARCHAR2"),
                createVNode("td", null, "\u5151\u73B0\u5355\u53F7"),
                createVNode("td", null, "\u5151\u73B0\u5355\u53F7"),
                createVNode("td", null, "\u67E5\u8BE2\u6765\u6E90")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "BX_NO"),
                createVNode("td", null, "VARCHAR2"),
                createVNode("td", null, "\u62A5\u9500\u5355\u53F7"),
                createVNode("td", null, "\u62A5\u9500\u5355\u53F7"),
                createVNode("td", null, "\u67E5\u8BE2\u6765\u6E90")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "CASHOUT_TYPE"),
                createVNode("td", null, "NUMBER"),
                createVNode("td", null, "\u5151\u73B0\u7C7B\u578B"),
                createVNode("td", null, "\u5151\u73B0\u7C7B\u578B"),
                createVNode("td", null, "1=\u989D\u5EA6\u5185\uFF0C2=\u989D\u5EA6\u5916")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "TOTAL_CAN_CASHOUT_AMT"),
                createVNode("td", null, "DECIMAL"),
                createVNode("td", null, "\u53EF\u5151\u73B0\u603B\u989D"),
                createVNode("td", null, "\u53EF\u5151\u73B0\u603B\u989D"),
                createVNode("td", null, "\u67E5\u8BE2\u6765\u6E90")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "THIS_CASHOUT_AMT"),
                createVNode("td", null, "DECIMAL"),
                createVNode("td", null, "\u672C\u6B21\u5151\u73B0\u91D1\u989D"),
                createVNode("td", null, "\u672C\u6B21\u5151\u73B0\u91D1\u989D"),
                createVNode("td", null, "\u67E5\u8BE2\u6765\u6E90")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "CUST_NAME"),
                createVNode("td", null, "VARCHAR2"),
                createVNode("td", null, "\u7ECF\u9500\u5546\u540D\u79F0"),
                createVNode("td", null, "\u7ECF\u9500\u5546\u540D\u79F0"),
                createVNode("td", null, "\u67E5\u8BE2\u6765\u6E90")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "TERMINAL_NAME"),
                createVNode("td", null, "VARCHAR2"),
                createVNode("td", null, "\u95E8\u5E97\u540D\u79F0"),
                createVNode("td", null, "\u95E8\u5E97\u540D\u79F0"),
                createVNode("td", null, "\u67E5\u8BE2\u6765\u6E90")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "HZ_APPROVE_STATUS"),
                createVNode("td", null, "VARCHAR2"),
                createVNode("td", null, "\u5BA1\u6279\u72B6\u6001"),
                createVNode("td", null, "\u5BA1\u6279\u72B6\u6001"),
                createVNode("td", null, "\u67E5\u8BE2\u6765\u6E90")
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
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u62A5\u9519\u4FE1\u606F</th><th${_scopeId}>\u63D0\u793A\u8282\u70B9</th><th${_scopeId}>\u6839\u56E0\u4E0E\u89E3\u51B3\u65B9\u6848</th><th${_scopeId}>\u7B49\u7EA7</th><th${_scopeId}>\u8BE6\u7EC6\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u67E5\u8BE2\u5E74\u5EA6\u4E0D\u80FD\u4E3A\u7A7A</td><td${_scopeId}>\u67E5\u8BE2</td><td${_scopeId}>\u672A\u9009\u62E9\u67E5\u8BE2\u5E74\u5EA6\uFF0C\u9009\u62E9\u5E74\u5EA6\u540E\u67E5\u8BE2</td><td${_scopeId}>\u963B\u65AD\u6027\u62A5\u9519</td><td${_scopeId}>[\u67E5\u770B](#\u62A5\u95191\u67E5\u8BE2\u5E74\u5EA6\u4E0D\u80FD\u4E3A\u7A7A)</td></tr><tr${_scopeId}><td${_scopeId}>\u67E5\u8BE2\u65F6\u95F4\u8303\u56F4\u5F02\u5E38</td><td${_scopeId}>\u67E5\u8BE2</td><td${_scopeId}>\u8D77\u59CB\u65E5\u671F\u5927\u4E8E\u7ED3\u675F\u65E5\u671F\uFF0C\u8C03\u6574\u65F6\u95F4\u8303\u56F4</td><td${_scopeId}>\u963B\u65AD\u6027\u62A5\u9519</td><td${_scopeId}>[\u67E5\u770B](#\u62A5\u95192\u67E5\u8BE2\u65F6\u95F4\u8303\u56F4\u5F02\u5E38)</td></tr><tr${_scopeId}><td${_scopeId}>\u5151\u73B0\u7C7B\u578B\u5F02\u5E38</td><td${_scopeId}>\u67E5\u8BE2</td><td${_scopeId}>\u5151\u73B0\u7C7B\u578B\u975E1\u62162\uFF0C\u91CD\u65B0\u9009\u62E9\u5151\u73B0\u7C7B\u578B</td><td${_scopeId}>\u963B\u65AD\u6027\u62A5\u9519</td><td${_scopeId}>[\u67E5\u770B](#\u62A5\u95193\u5151\u73B0\u7C7B\u578B\u5F02\u5E38)</td></tr><tr${_scopeId}><td${_scopeId}>\u7F51\u7EDC\u8BF7\u6C42\u5931\u8D25/\u63A5\u53E3\u8C03\u7528\u5F02\u5E38</td><td${_scopeId}>\u67E5\u8BE2</td><td${_scopeId}>\u540E\u7AEF\u63A5\u53E3\u8C03\u7528\u5931\u8D25\uFF0C\u68C0\u67E5\u7F51\u7EDC\u8FDE\u63A5\u6216\u540E\u7AEF\u670D\u52A1\u72B6\u6001</td><td${_scopeId}>\u963B\u65AD\u6027\u62A5\u9519</td><td${_scopeId}>[\u67E5\u770B](#\u62A5\u95194\u7F51\u7EDC\u8BF7\u6C42\u5931\u8D25\u63A5\u53E3\u8C03\u7528\u5F02\u5E38)</td></tr><tr${_scopeId}><td${_scopeId}>\u6743\u9650\u4E0D\u8DB3/\u672A\u767B\u5F55</td><td${_scopeId}>\u9875\u9762\u52A0\u8F7D/\u67E5\u8BE2</td><td${_scopeId}>\u5F53\u524D\u7528\u6237\u65E0\u7EC4\u7EC7\u7EA7\u6743\u9650\u6216\u767B\u5F55\u6001\u5931\u6548\uFF0C\u91CD\u65B0\u767B\u5F55\u6216\u8054\u7CFB\u7BA1\u7406\u5458\u5206\u914D\u6743\u9650</td><td${_scopeId}>\u963B\u65AD\u6027\u62A5\u9519</td><td${_scopeId}>[\u67E5\u770B](#\u62A5\u95195\u6743\u9650\u4E0D\u8DB3\u672A\u767B\u5F55)</td></tr></tbody></table><h4${_scopeId}>\u62A5\u95191\uFF1A\u67E5\u8BE2\u5E74\u5EA6\u4E0D\u80FD\u4E3A\u7A7A</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u70B9\u51FB&quot;\u67E5\u8BE2&quot;\u6309\u94AE\uFF0C\u8C03\u7528search\u63A5\u53E3\u65F6\uFF0C\u4F20\u5165\u7684\u67E5\u8BE2\u5E74\u5EA6budYear\u53C2\u6570\u4E3Anull\u6216\u7A7A\u5B57\u7B26\u4E32</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u5151\u73B0\u6C47\u603B\u62A5\u8868\u6309\u5E74\u5EA6\u7EF4\u5EA6\u7EDF\u8BA1\u6570\u636E\uFF0C\u5E74\u5EA6\u662F\u6838\u5FC3\u67E5\u8BE2\u6761\u4EF6\u3002\u6821\u9A8C\u903B\u8F91\u68C0\u67E5\u5165\u53C2budYear\uFF0C\u4E3A\u7A7A\u5219\u629B\u5F02\u5E38\u963B\u6B62\u67E5\u8BE2\u3002\u5E38\u89C1\u6839\u56E0\uFF1A\u7528\u6237\u672A\u9009\u62E9\u5E74\u5EA6\u3001\u5E74\u5EA6\u4E0B\u62C9\u6846\u672A\u9ED8\u8BA4\u8D4B\u503C\u5F53\u524D\u5E74\u5EA6\u3001\u6216\u524D\u7AEF\u4F20\u53C2\u4E22\u5931\u3002</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}>COUNT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>*</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>)            </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5151\u73B0\u5355\u6570\u91CF</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>   fin_fee_cashout_header</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  bud_year </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    hz_approve_status </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>APPROVED</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95192\uFF1A\u67E5\u8BE2\u65F6\u95F4\u8303\u56F4\u5F02\u5E38</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u70B9\u51FB&quot;\u67E5\u8BE2&quot;\u6309\u94AE\uFF0C\u8C03\u7528search\u63A5\u53E3\u65F6\uFF0C\u4F20\u5165\u7684\u8D77\u59CB\u65E5\u671FstartDate&gt;\u7ED3\u675F\u65E5\u671FendDate</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u65F6\u95F4\u8303\u56F4\u67E5\u8BE2\u8981\u6C42\u8D77\u59CB\u65E5\u671F\u4E0D\u665A\u4E8E\u7ED3\u675F\u65E5\u671F\u3002\u6821\u9A8C\u903B\u8F91\u68C0\u67E5\u5165\u53C2startDate\u4E0EendDate\uFF0C\u5F53startDate&gt;endDate\u5219\u629B\u5F02\u5E38\u963B\u6B62\u67E5\u8BE2\u3002\u5E38\u89C1\u6839\u56E0\uFF1A\u7528\u6237\u624B\u52A8\u9009\u62E9\u65E5\u671F\u8303\u56F4\u9519\u8BEF\u3001\u65E5\u671F\u9009\u62E9\u7EC4\u4EF6\u672A\u505A\u8303\u56F4\u9650\u5236\u3001\u6216\u524D\u7AEF\u4F20\u53C2\u987A\u5E8F\u98A0\u5012\u3002</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> fee_cashout_id      </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5151\u73B0\u5355ID,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         fee_cashout_no      </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5151\u73B0\u5355\u53F7,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         create_time         </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u521B\u5EFA\u65F6\u95F4,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         hz_approve_status   </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5BA1\u6279\u72B6\u6001</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>   fin_fee_cashout_header</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  hz_approve_status </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>APPROVED</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    create_time </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>BETWEEN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> #{startDate} </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> #{endDate}</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    #{startDate} </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> #{endDate}</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ORDER  BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> create_time </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>DESC</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95193\uFF1A\u5151\u73B0\u7C7B\u578B\u5F02\u5E38</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u70B9\u51FB&quot;\u67E5\u8BE2&quot;\u6309\u94AE\uFF0C\u8C03\u7528search\u63A5\u53E3\u65F6\uFF0C\u4F20\u5165\u7684\u5151\u73B0\u7C7B\u578BcashoutType\u65E2\u975E1\uFF08\u989D\u5EA6\u5185\uFF09\u4E5F\u975E2\uFF08\u989D\u5EA6\u5916\uFF09\u4E14\u975E\u7A7A</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u5151\u73B0\u7C7B\u578B\u4EC5\u652F\u6301\u989D\u5EA6\u5185(1)\u548C\u989D\u5EA6\u5916(2)\u4E24\u79CD\uFF0C\u4F20\u5165\u5176\u4ED6\u503C\u4F1A\u5BFC\u81F4\u67E5\u8BE2\u6761\u4EF6\u5F02\u5E38\u3002\u6821\u9A8C\u903B\u8F91\u68C0\u67E5\u5165\u53C2cashoutType\uFF0C\u975E\u7A7A\u4E14\u4E0D\u5728(1,2)\u8303\u56F4\u5185\u5219\u629B\u5F02\u5E38\u3002\u5E38\u89C1\u6839\u56E0\uFF1A\u524D\u7AEF\u4E0B\u62C9\u6846\u503C\u96C6\u914D\u7F6E\u9519\u8BEF\u3001\u4F20\u53C2\u88AB\u7BE1\u6539\u3001\u6216\u6570\u636E\u8FC1\u79FB\u5BFC\u81F4\u810F\u6570\u636E\u3002</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> fee_cashout_id      </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5151\u73B0\u5355ID,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         fee_cashout_no      </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5151\u73B0\u5355\u53F7,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         cashout_type        </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5151\u73B0\u7C7B\u578B,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         hz_approve_status   </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5BA1\u6279\u72B6\u6001</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>   fin_fee_cashout_header</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  cashout_type </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NOT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    cashout_type </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NOT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>1</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>2</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ORDER  BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> create_time </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>DESC</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95194\uFF1A\u7F51\u7EDC\u8BF7\u6C42\u5931\u8D25/\u63A5\u53E3\u8C03\u7528\u5F02\u5E38</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u70B9\u51FB&quot;\u67E5\u8BE2&quot;\u6309\u94AE\uFF0C\u8C03\u7528POST /v1/{organizationId}/terminalReport/fin-fee-cashout-summary/search\u63A5\u53E3\u65F6\uFF0C\u524D\u7AEF\u672A\u6536\u5230\u54CD\u5E94\u6216\u6536\u5230\u975E2xx\u72B6\u6001\u7801\uFF08\u5982500\u3001502\u3001504\uFF09</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u672C\u9875\u9762\u4E3Ahlod\u4F4E\u4EE3\u7801\u62A5\u8868\u9875\u9762\uFF0C\u67E5\u8BE2\u4F9D\u8D56\u540E\u7AEFTerminalReportController.finFeeCashoutSummarySearch\u63A5\u53E3\u5206\u9875\u67E5\u8BE2FIN_FEE_CASHOUT_HEADER\u3002\u82E5\u540E\u7AEF\u670D\u52A1\u672A\u542F\u52A8\u3001\u6570\u636E\u5E93\u8FDE\u63A5\u5F02\u5E38\u3001SQL\u6267\u884C\u8D85\u65F6\uFF08\u5982\u5168\u8868\u626B\u63CF\u65E0\u7D22\u5F15\uFF09\u3001\u7F51\u7EDC\u4E2D\u65AD\u3001\u6216\u53CD\u5411\u4EE3\u7406\uFF08\u7F51\u5173\uFF09\u8F6C\u53D1\u5931\u8D25\uFF0C\u5747\u4F1A\u5BFC\u81F4\u63A5\u53E3\u8C03\u7528\u5F02\u5E38\u3002\u5E38\u89C1\u6839\u56E0\uFF1A\u540E\u7AEFae-report\u670D\u52A1\u5B95\u673A\u3001Oracle\u6570\u636E\u5E93\u8FDE\u63A5\u6C60\u8017\u5C3D\u3001\u67E5\u8BE2\u6761\u4EF6\u8FC7\u5BBD\u5BFC\u81F4\u6162SQL\u3001\u6216\u7F51\u7EDC\u6296\u52A8\u3002\u9700\u68C0\u67E5\u540E\u7AEF\u670D\u52A1\u5065\u5EB7\u72B6\u6001\u3001\u6570\u636E\u5E93\u8FDE\u63A5\u3001\u7F51\u7EDC\u8FDE\u901A\u6027\u3002</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}>COUNT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>*</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>)            </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5151\u73B0\u5355\u603B\u6570,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}>MIN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>(create_time)    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u6700\u65E9\u521B\u5EFA\u65F6\u95F4,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}>MAX</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>(create_time)    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u6700\u665A\u521B\u5EFA\u65F6\u95F4</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>   fin_fee_cashout_header</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  hz_approve_status </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>APPROVED</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95195\uFF1A\u6743\u9650\u4E0D\u8DB3/\u672A\u767B\u5F55</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u9875\u9762\u52A0\u8F7D\u6216\u70B9\u51FB&quot;\u67E5\u8BE2&quot;\u6309\u94AE\u65F6\uFF0C\u63A5\u53E3\u8FD4\u56DE401\u672A\u6388\u6743\u6216403\u7981\u6B62\u8BBF\u95EE\uFF0C\u6216\u524D\u7AEF\u8DEF\u7531\u5B88\u536B\u62E6\u622A</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u672C\u62A5\u8868\u63A5\u53E3\u58F0\u660E@Permission(level = ResourceLevel.ORGANIZATION)\uFF0C\u8981\u6C42\u7528\u6237\u5177\u5907\u7EC4\u7EC7\u7EA7\u6743\u9650\u3002\u82E5\u7528\u6237\u672A\u767B\u5F55\uFF08token\u8FC7\u671F/\u4E22\u5931\uFF09\u3001\u6216\u5F53\u524D\u89D2\u8272\u672A\u5206\u914D\u8BE5\u62A5\u8868\u83DC\u5355\u6743\u9650\u3001\u6216organizationId\u8DEF\u5F84\u53C2\u6570\u4E0E\u7528\u6237\u6240\u5C5E\u7EC4\u7EC7\u4E0D\u5339\u914D\uFF0C\u5747\u4F1A\u89E6\u53D1\u6743\u9650\u6821\u9A8C\u5931\u8D25\u3002hlod\u4F4E\u4EE3\u7801\u9875\u9762\u901A\u8FC7\u8DEF\u7531\u914D\u7F6E\u548C\u63A5\u53E3\u6743\u9650\u53CC\u91CD\u6821\u9A8C\uFF0C\u4EFB\u4E00\u73AF\u8282\u5931\u8D25\u5747\u963B\u65AD\u8BBF\u95EE\u3002\u9700\u91CD\u65B0\u767B\u5F55\u6216\u8054\u7CFB\u7BA1\u7406\u5458\u5206\u914D\u62A5\u8868\u67E5\u770B\u6743\u9650\u3002</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>\u6743\u9650\u6821\u9A8C\u4E3A\u5E94\u7528\u5C42\u903B\u8F91\uFF0C\u65E0\u5BF9\u5E94\u6570\u636E\u8868</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u63D0\u793A</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>   dual;</span></span>
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
                createVNode("td", null, "\u67E5\u8BE2\u5E74\u5EA6\u4E0D\u80FD\u4E3A\u7A7A"),
                createVNode("td", null, "\u67E5\u8BE2"),
                createVNode("td", null, "\u672A\u9009\u62E9\u67E5\u8BE2\u5E74\u5EA6\uFF0C\u9009\u62E9\u5E74\u5EA6\u540E\u67E5\u8BE2"),
                createVNode("td", null, "\u963B\u65AD\u6027\u62A5\u9519"),
                createVNode("td", null, "[\u67E5\u770B](#\u62A5\u95191\u67E5\u8BE2\u5E74\u5EA6\u4E0D\u80FD\u4E3A\u7A7A)")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u67E5\u8BE2\u65F6\u95F4\u8303\u56F4\u5F02\u5E38"),
                createVNode("td", null, "\u67E5\u8BE2"),
                createVNode("td", null, "\u8D77\u59CB\u65E5\u671F\u5927\u4E8E\u7ED3\u675F\u65E5\u671F\uFF0C\u8C03\u6574\u65F6\u95F4\u8303\u56F4"),
                createVNode("td", null, "\u963B\u65AD\u6027\u62A5\u9519"),
                createVNode("td", null, "[\u67E5\u770B](#\u62A5\u95192\u67E5\u8BE2\u65F6\u95F4\u8303\u56F4\u5F02\u5E38)")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5151\u73B0\u7C7B\u578B\u5F02\u5E38"),
                createVNode("td", null, "\u67E5\u8BE2"),
                createVNode("td", null, "\u5151\u73B0\u7C7B\u578B\u975E1\u62162\uFF0C\u91CD\u65B0\u9009\u62E9\u5151\u73B0\u7C7B\u578B"),
                createVNode("td", null, "\u963B\u65AD\u6027\u62A5\u9519"),
                createVNode("td", null, "[\u67E5\u770B](#\u62A5\u95193\u5151\u73B0\u7C7B\u578B\u5F02\u5E38)")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7F51\u7EDC\u8BF7\u6C42\u5931\u8D25/\u63A5\u53E3\u8C03\u7528\u5F02\u5E38"),
                createVNode("td", null, "\u67E5\u8BE2"),
                createVNode("td", null, "\u540E\u7AEF\u63A5\u53E3\u8C03\u7528\u5931\u8D25\uFF0C\u68C0\u67E5\u7F51\u7EDC\u8FDE\u63A5\u6216\u540E\u7AEF\u670D\u52A1\u72B6\u6001"),
                createVNode("td", null, "\u963B\u65AD\u6027\u62A5\u9519"),
                createVNode("td", null, "[\u67E5\u770B](#\u62A5\u95194\u7F51\u7EDC\u8BF7\u6C42\u5931\u8D25\u63A5\u53E3\u8C03\u7528\u5F02\u5E38)")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6743\u9650\u4E0D\u8DB3/\u672A\u767B\u5F55"),
                createVNode("td", null, "\u9875\u9762\u52A0\u8F7D/\u67E5\u8BE2"),
                createVNode("td", null, "\u5F53\u524D\u7528\u6237\u65E0\u7EC4\u7EC7\u7EA7\u6743\u9650\u6216\u767B\u5F55\u6001\u5931\u6548\uFF0C\u91CD\u65B0\u767B\u5F55\u6216\u8054\u7CFB\u7BA1\u7406\u5458\u5206\u914D\u6743\u9650"),
                createVNode("td", null, "\u963B\u65AD\u6027\u62A5\u9519"),
                createVNode("td", null, "[\u67E5\u770B](#\u62A5\u95195\u6743\u9650\u4E0D\u8DB3\u672A\u767B\u5F55)")
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95191\uFF1A\u67E5\u8BE2\u5E74\u5EA6\u4E0D\u80FD\u4E3A\u7A7A"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode('\uFF1A\u70B9\u51FB"\u67E5\u8BE2"\u6309\u94AE\uFF0C\u8C03\u7528search\u63A5\u53E3\u65F6\uFF0C\u4F20\u5165\u7684\u67E5\u8BE2\u5E74\u5EA6budYear\u53C2\u6570\u4E3Anull\u6216\u7A7A\u5B57\u7B26\u4E32')
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u5151\u73B0\u6C47\u603B\u62A5\u8868\u6309\u5E74\u5EA6\u7EF4\u5EA6\u7EDF\u8BA1\u6570\u636E\uFF0C\u5E74\u5EA6\u662F\u6838\u5FC3\u67E5\u8BE2\u6761\u4EF6\u3002\u6821\u9A8C\u903B\u8F91\u68C0\u67E5\u5165\u53C2budYear\uFF0C\u4E3A\u7A7A\u5219\u629B\u5F02\u5E38\u963B\u6B62\u67E5\u8BE2\u3002\u5E38\u89C1\u6839\u56E0\uFF1A\u7528\u6237\u672A\u9009\u62E9\u5E74\u5EA6\u3001\u5E74\u5EA6\u4E0B\u62C9\u6846\u672A\u9ED8\u8BA4\u8D4B\u503C\u5F53\u524D\u5E74\u5EA6\u3001\u6216\u524D\u7AEF\u4F20\u53C2\u4E22\u5931\u3002")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ")            "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5151\u73B0\u5355\u6570\u91CF")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  bud_year "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NULL")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    hz_approve_status "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "APPROVED"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95192\uFF1A\u67E5\u8BE2\u65F6\u95F4\u8303\u56F4\u5F02\u5E38"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode('\uFF1A\u70B9\u51FB"\u67E5\u8BE2"\u6309\u94AE\uFF0C\u8C03\u7528search\u63A5\u53E3\u65F6\uFF0C\u4F20\u5165\u7684\u8D77\u59CB\u65E5\u671FstartDate>\u7ED3\u675F\u65E5\u671FendDate')
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u65F6\u95F4\u8303\u56F4\u67E5\u8BE2\u8981\u6C42\u8D77\u59CB\u65E5\u671F\u4E0D\u665A\u4E8E\u7ED3\u675F\u65E5\u671F\u3002\u6821\u9A8C\u903B\u8F91\u68C0\u67E5\u5165\u53C2startDate\u4E0EendDate\uFF0C\u5F53startDate>endDate\u5219\u629B\u5F02\u5E38\u963B\u6B62\u67E5\u8BE2\u3002\u5E38\u89C1\u6839\u56E0\uFF1A\u7528\u6237\u624B\u52A8\u9009\u62E9\u65E5\u671F\u8303\u56F4\u9519\u8BEF\u3001\u65E5\u671F\u9009\u62E9\u7EC4\u4EF6\u672A\u505A\u8303\u56F4\u9650\u5236\u3001\u6216\u524D\u7AEF\u4F20\u53C2\u987A\u5E8F\u98A0\u5012\u3002")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         create_time         "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u521B\u5EFA\u65F6\u95F4,")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  hz_approve_status "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "APPROVED"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    create_time "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "BETWEEN"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " #{startDate} "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " #{endDate}")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    #{startDate} "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " #{endDate}")
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
          createVNode("h4", null, "\u62A5\u95193\uFF1A\u5151\u73B0\u7C7B\u578B\u5F02\u5E38"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode('\uFF1A\u70B9\u51FB"\u67E5\u8BE2"\u6309\u94AE\uFF0C\u8C03\u7528search\u63A5\u53E3\u65F6\uFF0C\u4F20\u5165\u7684\u5151\u73B0\u7C7B\u578BcashoutType\u65E2\u975E1\uFF08\u989D\u5EA6\u5185\uFF09\u4E5F\u975E2\uFF08\u989D\u5EA6\u5916\uFF09\u4E14\u975E\u7A7A')
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u5151\u73B0\u7C7B\u578B\u4EC5\u652F\u6301\u989D\u5EA6\u5185(1)\u548C\u989D\u5EA6\u5916(2)\u4E24\u79CD\uFF0C\u4F20\u5165\u5176\u4ED6\u503C\u4F1A\u5BFC\u81F4\u67E5\u8BE2\u6761\u4EF6\u5F02\u5E38\u3002\u6821\u9A8C\u903B\u8F91\u68C0\u67E5\u5165\u53C2cashoutType\uFF0C\u975E\u7A7A\u4E14\u4E0D\u5728(1,2)\u8303\u56F4\u5185\u5219\u629B\u5F02\u5E38\u3002\u5E38\u89C1\u6839\u56E0\uFF1A\u524D\u7AEF\u4E0B\u62C9\u6846\u503C\u96C6\u914D\u7F6E\u9519\u8BEF\u3001\u4F20\u53C2\u88AB\u7BE1\u6539\u3001\u6216\u6570\u636E\u8FC1\u79FB\u5BFC\u81F4\u810F\u6570\u636E\u3002")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  cashout_type "),
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
          createVNode("h4", null, "\u62A5\u95194\uFF1A\u7F51\u7EDC\u8BF7\u6C42\u5931\u8D25/\u63A5\u53E3\u8C03\u7528\u5F02\u5E38"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode('\uFF1A\u70B9\u51FB"\u67E5\u8BE2"\u6309\u94AE\uFF0C\u8C03\u7528POST /v1/{organizationId}/terminalReport/fin-fee-cashout-summary/search\u63A5\u53E3\u65F6\uFF0C\u524D\u7AEF\u672A\u6536\u5230\u54CD\u5E94\u6216\u6536\u5230\u975E2xx\u72B6\u6001\u7801\uFF08\u5982500\u3001502\u3001504\uFF09')
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u672C\u9875\u9762\u4E3Ahlod\u4F4E\u4EE3\u7801\u62A5\u8868\u9875\u9762\uFF0C\u67E5\u8BE2\u4F9D\u8D56\u540E\u7AEFTerminalReportController.finFeeCashoutSummarySearch\u63A5\u53E3\u5206\u9875\u67E5\u8BE2FIN_FEE_CASHOUT_HEADER\u3002\u82E5\u540E\u7AEF\u670D\u52A1\u672A\u542F\u52A8\u3001\u6570\u636E\u5E93\u8FDE\u63A5\u5F02\u5E38\u3001SQL\u6267\u884C\u8D85\u65F6\uFF08\u5982\u5168\u8868\u626B\u63CF\u65E0\u7D22\u5F15\uFF09\u3001\u7F51\u7EDC\u4E2D\u65AD\u3001\u6216\u53CD\u5411\u4EE3\u7406\uFF08\u7F51\u5173\uFF09\u8F6C\u53D1\u5931\u8D25\uFF0C\u5747\u4F1A\u5BFC\u81F4\u63A5\u53E3\u8C03\u7528\u5F02\u5E38\u3002\u5E38\u89C1\u6839\u56E0\uFF1A\u540E\u7AEFae-report\u670D\u52A1\u5B95\u673A\u3001Oracle\u6570\u636E\u5E93\u8FDE\u63A5\u6C60\u8017\u5C3D\u3001\u67E5\u8BE2\u6761\u4EF6\u8FC7\u5BBD\u5BFC\u81F4\u6162SQL\u3001\u6216\u7F51\u7EDC\u6296\u52A8\u3002\u9700\u68C0\u67E5\u540E\u7AEF\u670D\u52A1\u5065\u5EB7\u72B6\u6001\u3001\u6570\u636E\u5E93\u8FDE\u63A5\u3001\u7F51\u7EDC\u8FDE\u901A\u6027\u3002")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ")            "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5151\u73B0\u5355\u603B\u6570,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         "),
                  createVNode("span", { style: { "color": "#82AAFF" } }, "MIN"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "(create_time)    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u6700\u65E9\u521B\u5EFA\u65F6\u95F4,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         "),
                  createVNode("span", { style: { "color": "#82AAFF" } }, "MAX"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "(create_time)    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u6700\u665A\u521B\u5EFA\u65F6\u95F4")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  hz_approve_status "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "APPROVED"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95195\uFF1A\u6743\u9650\u4E0D\u8DB3/\u672A\u767B\u5F55"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode('\uFF1A\u9875\u9762\u52A0\u8F7D\u6216\u70B9\u51FB"\u67E5\u8BE2"\u6309\u94AE\u65F6\uFF0C\u63A5\u53E3\u8FD4\u56DE401\u672A\u6388\u6743\u6216403\u7981\u6B62\u8BBF\u95EE\uFF0C\u6216\u524D\u7AEF\u8DEF\u7531\u5B88\u536B\u62E6\u622A')
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u672C\u62A5\u8868\u63A5\u53E3\u58F0\u660E@Permission(level = ResourceLevel.ORGANIZATION)\uFF0C\u8981\u6C42\u7528\u6237\u5177\u5907\u7EC4\u7EC7\u7EA7\u6743\u9650\u3002\u82E5\u7528\u6237\u672A\u767B\u5F55\uFF08token\u8FC7\u671F/\u4E22\u5931\uFF09\u3001\u6216\u5F53\u524D\u89D2\u8272\u672A\u5206\u914D\u8BE5\u62A5\u8868\u83DC\u5355\u6743\u9650\u3001\u6216organizationId\u8DEF\u5F84\u53C2\u6570\u4E0E\u7528\u6237\u6240\u5C5E\u7EC4\u7EC7\u4E0D\u5339\u914D\uFF0C\u5747\u4F1A\u89E6\u53D1\u6743\u9650\u6821\u9A8C\u5931\u8D25\u3002hlod\u4F4E\u4EE3\u7801\u9875\u9762\u901A\u8FC7\u8DEF\u7531\u914D\u7F6E\u548C\u63A5\u53E3\u6743\u9650\u53CC\u91CD\u6821\u9A8C\uFF0C\u4EFB\u4E00\u73AF\u8282\u5931\u8D25\u5747\u963B\u65AD\u8BBF\u95EE\u3002\u9700\u91CD\u65B0\u767B\u5F55\u6216\u8054\u7CFB\u7BA1\u7406\u5458\u5206\u914D\u62A5\u8868\u67E5\u770B\u6743\u9650\u3002")
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
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "\u6743\u9650\u6821\u9A8C\u4E3A\u5E94\u7528\u5C42\u903B\u8F91\uFF0C\u65E0\u5BF9\u5E94\u6570\u636E\u8868"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u63D0\u793A")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "   dual;")
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
        _push2(`<ul${_scopeId}><li${_scopeId}>\u95EE\u98981\uFF1A\u62A5\u8868\u6570\u636E\u4E3A\u7A7A</li><li${_scopeId}>\u539F\u56E0\uFF1A\u67E5\u8BE2\u6761\u4EF6\u8FC7\u7A84\u6216\u65E0\u7B26\u5408\u6761\u4EF6\u7684\u5151\u73B0\u6570\u636E</li><li${_scopeId}>\u89E3\u51B3\u601D\u8DEF\uFF1A\u653E\u5BBD\u67E5\u8BE2\u6761\u4EF6\uFF0C\u68C0\u67E5\u662F\u5426\u6709\u5DF2\u5BA1\u6279\u901A\u8FC7\u7684\u5151\u73B0\u5355</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, "\u95EE\u98981\uFF1A\u62A5\u8868\u6570\u636E\u4E3A\u7A7A"),
            createVNode("li", null, "\u539F\u56E0\uFF1A\u67E5\u8BE2\u6761\u4EF6\u8FC7\u7A84\u6216\u65E0\u7B26\u5408\u6761\u4EF6\u7684\u5151\u73B0\u6570\u636E"),
            createVNode("li", null, "\u89E3\u51B3\u601D\u8DEF\uFF1A\u653E\u5BBD\u67E5\u8BE2\u6761\u4EF6\uFF0C\u68C0\u67E5\u662F\u5426\u6709\u5DF2\u5BA1\u6279\u901A\u8FC7\u7684\u5151\u73B0\u5355")
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
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u65E5\u671F</th><th${_scopeId}>\u63D0\u4EA4ID</th><th${_scopeId}>\u63D0\u4EA4\u4EBA</th><th${_scopeId}>\u63D0\u4EA4\u5185\u5BB9</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>2026-08-30</td><td${_scopeId}>-</td><td${_scopeId}>-</td><td${_scopeId}>\u6309skill\u89C4\u8303\u91CD\u5199\u77E5\u8BC6\u5E93\u6587\u6863</td></tr><tr${_scopeId}><td${_scopeId}>2025-12-10</td><td${_scopeId}>-</td><td${_scopeId}>HZERO</td><td${_scopeId}>\u521D\u59CB\u521B\u5EFA\u62A5\u8868\u529F\u80FD</td></tr></tbody></table>`);
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
                createVNode("td", null, "2025-12-10"),
                createVNode("td", null, "-"),
                createVNode("td", null, "HZERO"),
                createVNode("td", null, "\u521D\u59CB\u521B\u5EFA\u62A5\u8868\u529F\u80FD")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("\u95E8\u5E97\u7BA1\u7406/\u88C5\u4FEE\u62A5\u8868/\u5151\u73B0\u6C47\u603B/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
