import { resolveComponent, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.6ab74304.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"\u95E8\u5E97\u7BA1\u7406/\u88C5\u4FEE\u62A5\u8868/\u95E8\u989D\u5EA6\u5185\u5151\u73B0\u7EDF\u8BA1\u62A5\u8868/index.md"}');
const _sfc_main = { name: "\u95E8\u5E97\u7BA1\u7406/\u88C5\u4FEE\u62A5\u8868/\u95E8\u989D\u5EA6\u5185\u5151\u73B0\u7EDF\u8BA1\u62A5\u8868/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_BreadcrumbTabs = resolveComponent("BreadcrumbTabs");
  const _component_KbCard = resolveComponent("KbCard");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_BreadcrumbTabs, null, null, _parent));
  _push(`<div id="biz-intro" style="${ssrRenderStyle({ "display": "none" })}"><div class="tab-pad"><div class="kl-wrap"><div class="kl-card"><div class="biz-kl-hdr"><span class="biz-tag" style="${ssrRenderStyle({ "background": "rgba(124,58,237,0.08)", "color": "#7C3AED", "border-color": "rgba(124,58,237,0.18)" })}"> \u5B9A\u4E49</span><h2>\u67E5\u4EC0\u4E48</h2><p>\u989D\u5EA6\u5185\u5151\u73B0\u6570\u636E\u53CA\u5176\u6279\u91CF\u590D\u6838\u4FE1\u606F\u7684\u6C47\u603B\u7EDF\u8BA1</p></div><div class="biz-3col"><div class="kl-col-box" style="${ssrRenderStyle({ "margin-bottom": "0" })}"><div style="${ssrRenderStyle({ "display": "flex", "gap": "12px", "align-items": "flex-start" })}"><div style="${ssrRenderStyle({ "width": "36px", "height": "36px", "border-radius": "10px", "display": "flex", "align-items": "center", "justify-content": "center", "flex-shrink": "0", "background": "linear-gradient(135deg,#7C3AED,#A78BFA)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 12L6 8L10 10L14 4" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></div><div><h5 style="${ssrRenderStyle({ "font-size": "0.88rem", "font-weight": "800", "color": "#1F2937", "margin": "0 0 6px" })}">\u6570\u636E\u53E3\u5F84</h5><p style="${ssrRenderStyle({ "font-size": "0.73rem", "color": "#6B7280", "margin": "0", "line-height": "1.6" })}">\u6309\u95E8\u5E97\u3001\u7ECF\u9500\u5546\u3001\u4EA4\u6613\u516C\u53F8\u3001\u9884\u7B97\u5E74\u5EA6\u7B49\u7EF4\u5EA6\u7EDF\u8BA1\u989D\u5EA6\u5185\u5151\u73B0\u6C47\u603B\u6570\u636E\u3002</p></div></div></div><div class="kl-col-box alt" style="${ssrRenderStyle({ "margin-bottom": "0" })}"><div style="${ssrRenderStyle({ "display": "flex", "gap": "12px", "align-items": "flex-start" })}"><div style="${ssrRenderStyle({ "width": "36px", "height": "36px", "border-radius": "10px", "display": "flex", "align-items": "center", "justify-content": "center", "flex-shrink": "0", "background": "linear-gradient(135deg,#F59E0B,#FBBF24)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="6" stroke="white" stroke-width="1.5"></circle><path d="M8 4V8L10.5 10" stroke="white" stroke-width="1.5" stroke-linecap="round"></path></svg></div><div><h5 style="${ssrRenderStyle({ "font-size": "0.88rem", "font-weight": "800", "color": "#1F2937", "margin": "0 0 6px" })}">\u5151\u73B0\u6307\u6807</h5><p style="${ssrRenderStyle({ "font-size": "0.73rem", "color": "#6B7280", "margin": "0", "line-height": "1.6" })}">\u6C47\u603B\u53EF\u5151\u73B0\u603B\u989D\u3001\u5DF2\u5151\u73B0\u91D1\u989D\u3001\u5269\u4F59\u672A\u5151\u73B0\u91D1\u989D\u7B49\u5173\u952E\u6307\u6807\u3002</p></div></div></div><div class="kl-col-box" style="${ssrRenderStyle({ "margin-bottom": "0" })}"><div style="${ssrRenderStyle({ "display": "flex", "gap": "12px", "align-items": "flex-start" })}"><div style="${ssrRenderStyle({ "width": "36px", "height": "36px", "border-radius": "10px", "display": "flex", "align-items": "center", "justify-content": "center", "flex-shrink": "0", "background": "linear-gradient(135deg,#10B981,#34D399)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="5" width="12" height="10" rx="1" stroke="white" stroke-width="1.5"></rect><path d="M2 8H14" stroke="white" stroke-width="1.5"></path><path d="M8 5V8" stroke="white" stroke-width="1.5"></path><path d="M5 3H11" stroke="white" stroke-width="1.5" stroke-linecap="round"></path></svg></div><div><h5 style="${ssrRenderStyle({ "font-size": "0.88rem", "font-weight": "800", "color": "#1F2937", "margin": "0 0 6px" })}">\u590D\u6838\u8FDB\u5EA6</h5><p style="${ssrRenderStyle({ "font-size": "0.73rem", "color": "#6B7280", "margin": "0", "line-height": "1.6" })}">\u5173\u8054\u6279\u91CF\u590D\u6838\u4FE1\u606F\uFF0C\u8DDF\u8E2A\u5151\u73B0\u5355\u7684\u590D\u6838\u72B6\u6001\u4E0E\u8FDB\u5EA6\u3002</p></div></div></div></div></div><div class="kl-card" style="${ssrRenderStyle({ "margin-bottom": "0" })}"><div class="biz-kl-hdr"><span class="biz-tag" style="${ssrRenderStyle({ "background": "rgba(124,58,237,0.08)", "color": "#7C3AED", "border-color": "rgba(124,58,237,0.18)" })}"> \u4F7F\u7528</span><h2>\u600E\u4E48\u7528</h2><p>\u4E09\u6B65\u5B8C\u6210\u989D\u5EA6\u5185\u5151\u73B0\u7EDF\u8BA1\u4E0E\u590D\u6838\u8DDF\u8E2A</p></div><div class="biz-steps"><div class="biz-step-item"><div class="biz-step-circle" style="${ssrRenderStyle({ "background": "linear-gradient(135deg,#7C3AED,#6D28D9)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 4H13" stroke="white" stroke-width="1.5" stroke-linecap="round"></path><path d="M3 8H13" stroke="white" stroke-width="1.5" stroke-linecap="round"></path><path d="M3 12H13" stroke="white" stroke-width="1.5" stroke-linecap="round"></path><circle cx="2.5" cy="4" r="1" fill="white"></circle><circle cx="2.5" cy="8" r="1" fill="white"></circle><circle cx="2.5" cy="12" r="1" fill="white"></circle></svg></div><h5>\u8BBE\u5B9A\u6761\u4EF6</h5><small>\u6309\u95E8\u5E97\u3001\u7ECF\u9500\u5546\u3001\u5E74\u5EA6\u3001<br>\u5BA1\u6279\u72B6\u6001\u7B49\u6761\u4EF6\u7B5B\u9009</small></div><div class="biz-step-arrow">\u2192</div><div class="biz-step-item"><div class="biz-step-circle" style="${ssrRenderStyle({ "background": "linear-gradient(135deg,#10b981,#059669)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 12L6 8L10 10L14 4" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11 4H14V7" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></div><h5>\u67E5\u8BE2\u5C55\u793A</h5><small>\u5151\u73B0\u4E0E\u590D\u6838\u5173\u8054\u7EDF\u8BA1\u5217\u8868<br>\u67E5\u770B\u5151\u73B0\u60C5\u51B5\u4E0E\u590D\u6838\u8FDB\u5EA6</small></div><div class="biz-step-arrow">\u2192</div><div class="biz-step-item"><div class="biz-step-circle" style="${ssrRenderStyle({ "background": "linear-gradient(135deg,#f59e0b,#d97706)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 5H12" stroke="white" stroke-width="1.5" stroke-linecap="round"></path><path d="M4 8H12" stroke="white" stroke-width="1.5" stroke-linecap="round"></path><path d="M4 11H8" stroke="white" stroke-width="1.5" stroke-linecap="round"></path><path d="M11 11L13 9L14.5 10.5L12.5 12.5L11 11Z" stroke="white" stroke-width="1.5" stroke-linejoin="round"></path></svg></div><h5>\u5BFC\u51FA\u5F52\u6863</h5><small>\u5BFC\u51FA Excel<br>\u4F9B\u5185\u90E8\u7BA1\u7406\u51B3\u7B56\u4E0E\u5F52\u6863\u4F7F\u7528</small></div></div></div></div></div></div><div id="biz-flow" style="${ssrRenderStyle({ "display": "none" })}"><div class="tab-pad"><div class="bf-truth-flow"><h4 class="bf-main-title">\u95E8\u989D\u5EA6\u5185\u5151\u73B0\u7EDF\u8BA1\u62A5\u8868 \u2014 \u5168\u94FE\u8DEF\u6D41\u7A0B\u56FE</h4><p class="bf-main-sub">\u5F00\u59CB \u2192 \u95E8\u5E97\u9A8C\u6536\u4E0E\u62A5\u9500\u5355 \u2192 \u989D\u5EA6\u5185\u5151\u73B0\u5355 \u2192 \u989D\u5EA6\u5185\u5151\u73B0\u6279\u91CF\u590D\u6838\u5355 \u2192 \u2605\u95E8\u989D\u5EA6\u5185\u5151\u73B0\u7EDF\u8BA1\u62A5\u8868\u2605 \u2192 \u2696\u8F93\u51FA\u65B9\u5F0F\uFF1F \u2192 \u9875\u9762\u67E5\u770B/\u5BFC\u51FAExcel \u2192 \u7ED3\u675F</p><div class="bf-fc-svg-wrap"><svg class="bf-fc-svg" style="${ssrRenderStyle({ "max-height": "none" })}" viewBox="0 0 1200 888" xmlns="http://www.w3.org/2000/svg"><defs><marker id="arr-green" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon points="0,0 10,5 0,10" fill="#16A34A"></polygon></marker><marker id="arr-gray" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon points="0,0 10,5 0,10" fill="#9CA3AF"></polygon></marker><marker id="arr-blue" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon points="0,0 10,5 0,10" fill="#3B82F6"></polygon></marker><marker id="arr-red" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon points="0,0 10,5 0,10" fill="#EF4444"></polygon></marker><filter id="shadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000" flood-opacity="0.15"></feDropShadow></filter></defs><rect x="50" y="20" width="1100" height="95" rx="8" fill="#EFF6FF" stroke="#3B82F6" stroke-width="1.5" stroke-dasharray="6,4"></rect><text x="600" y="42" text-anchor="middle" fill="#1D4ED8" font-size="13" font-weight="600">\u4E0A\u6E38\u652F\u6491</text><rect x="263" y="56" width="104" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"></rect><text x="315" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">\u95E8\u5E97\u9A8C\u6536\u4E0E\u62A5\u9500\u5355</text><rect x="377" y="56" width="104" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"></rect><text x="429" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">\u989D\u5EA6\u5185\u5151\u73B0\u5355</text><rect x="491" y="56" width="104" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"></rect><text x="543" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">\u989D\u5EA6\u5185\u6279\u91CF\u590D\u6838</text><rect x="605" y="56" width="104" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"></rect><text x="657" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">hlod\u62A5\u8868\u5F15\u64CE</text><rect x="719" y="56" width="104" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"></rect><text x="771" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">\u9884\u7B97\u5E74\u5EA6/\u7EC4\u7EC7</text><rect x="833" y="56" width="104" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"></rect><text x="885" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">\u95E8\u5E97\u4E3B\u6570\u636E</text><line x1="600" y1="115" x2="600" y2="150" stroke="#3B82F6" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#arr-blue)"></line><rect x="560" y="150" width="80" height="44" rx="6" fill="#FAF5FF" stroke="#9333EA" stroke-width="1.5" stroke-dasharray="5,3"></rect><text x="600" y="177" text-anchor="middle" fill="#7C3AED" font-size="13" font-weight="600">\u5F00\u59CB</text><line x1="600" y1="194" x2="600" y2="220" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"></line><rect x="480" y="220" width="240" height="44" rx="6" fill="#F0FDF4" stroke="#16A34A" stroke-width="2"></rect><text x="600" y="247" text-anchor="middle" fill="#166534" font-size="13" font-weight="600">\u95E8\u5E97\u9A8C\u6536\u4E0E\u62A5\u9500\u5355</text><line x1="600" y1="264" x2="600" y2="290" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"></line><rect x="480" y="290" width="240" height="44" rx="6" fill="#F0FDF4" stroke="#16A34A" stroke-width="2"></rect><text x="600" y="317" text-anchor="middle" fill="#166534" font-size="13" font-weight="600">\u989D\u5EA6\u5185\u5151\u73B0\u5355</text><line x1="600" y1="334" x2="600" y2="360" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"></line><rect x="460" y="360" width="280" height="44" rx="6" fill="#F0FDF4" stroke="#16A34A" stroke-width="2"></rect><text x="600" y="387" text-anchor="middle" fill="#166534" font-size="13" font-weight="600">\u989D\u5EA6\u5185\u5151\u73B0\u6279\u91CF\u590D\u6838\u5355</text><line x1="600" y1="404" x2="600" y2="430" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"></line><rect x="400" y="430" width="400" height="54" rx="6" fill="#16A34A" stroke="#15803D" stroke-width="2" filter="url(#shadow)"></rect><text x="600" y="454" text-anchor="middle" fill="#FFFFFF" font-size="13" font-weight="700">\u2605 \u95E8\u989D\u5EA6\u5185\u5151\u73B0\u7EDF\u8BA1\u62A5\u8868 \u2605</text><text x="600" y="472" text-anchor="middle" fill="#DCFCE7" font-size="10">\u67E5\u8BE2\u6761\u4EF6(\u95E8\u5E97/\u7ECF\u9500\u5546/\u5E74\u5EA6/\u5BA1\u6279\u72B6\u6001)\xB7\u5151\u73B0\u4E0E\u6279\u91CF\u590D\u6838\u5173\u8054\u7EDF\u8BA1</text><line x1="600" y1="484" x2="600" y2="504" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"></line><polygon points="600,504 680,544 600,584 520,544" fill="#FAF5FF" stroke="#9333EA" stroke-width="1.5" stroke-dasharray="5,3"></polygon><text x="600" y="548" text-anchor="middle" fill="#7C3AED" font-size="12" font-weight="600">\u2696 \u8F93\u51FA\u65B9\u5F0F\uFF1F</text><line x1="600" y1="584" x2="600" y2="596" stroke="#16A34A" stroke-width="2"></line><line x1="600" y1="596" x2="500" y2="596" stroke="#16A34A" stroke-width="2"></line><line x1="600" y1="596" x2="700" y2="596" stroke="#16A34A" stroke-width="2"></line><line x1="500" y1="596" x2="500" y2="617" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"></line><line x1="700" y1="596" x2="700" y2="617" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"></line><rect x="420" y="617" width="160" height="40" rx="6" fill="#F0FDF4" stroke="#16A34A" stroke-width="2"></rect><text x="500" y="642" text-anchor="middle" fill="#166534" font-size="13" font-weight="600">\u9875\u9762\u67E5\u770B</text><rect x="620" y="617" width="160" height="40" rx="6" fill="#F0FDF4" stroke="#16A34A" stroke-width="2"></rect><text x="700" y="642" text-anchor="middle" fill="#166534" font-size="13" font-weight="600">\u5BFC\u51FAExcel</text><line x1="500" y1="657" x2="500" y2="677" stroke="#16A34A" stroke-width="2"></line><line x1="700" y1="657" x2="700" y2="677" stroke="#16A34A" stroke-width="2"></line><line x1="500" y1="677" x2="600" y2="677" stroke="#16A34A" stroke-width="2"></line><line x1="700" y1="677" x2="600" y2="677" stroke="#16A34A" stroke-width="2"></line><line x1="600" y1="677" x2="600" y2="703" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"></line><rect x="545" y="703" width="110" height="40" rx="6" fill="#FAF5FF" stroke="#9333EA" stroke-width="1.5" stroke-dasharray="5,3"></rect><text x="600" y="728" text-anchor="middle" fill="#7C3AED" font-size="13" font-weight="600">\u7ED3\u675F</text><line x1="600" y1="743" x2="600" y2="773" stroke="#16A34A" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#arr-green)"></line><rect x="50" y="773" width="1100" height="95" rx="8" fill="#F0FDF4" stroke="#16A34A" stroke-width="1.5" stroke-dasharray="6,4"></rect><text x="600" y="795" text-anchor="middle" fill="#166534" font-size="13" font-weight="600">\u4E0B\u6E38\u5F71\u54CD</text><rect x="290" y="809" width="140" height="36" rx="5" fill="#FFFFFF" stroke="#16A34A" stroke-width="1.2"></rect><text x="360" y="833" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">\u989D\u5EA6\u5185\u5151\u73B0\u7EDF\u8BA1</text><rect x="450" y="809" width="140" height="36" rx="5" fill="#FFFFFF" stroke="#16A34A" stroke-width="1.2"></rect><text x="520" y="833" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">\u6279\u91CF\u590D\u6838\u8FDB\u5EA6\u8DDF\u8E2A</text><rect x="610" y="809" width="140" height="36" rx="5" fill="#FFFFFF" stroke="#16A34A" stroke-width="1.2"></rect><text x="680" y="833" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">Excel\u5BFC\u51FA\u5F52\u6863</text><rect x="770" y="809" width="140" height="36" rx="5" fill="#FFFFFF" stroke="#16A34A" stroke-width="1.2"></rect><text x="840" y="833" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">\u5185\u90E8\u7BA1\u7406\u51B3\u7B56\u53C2\u8003</text></svg></div><div class="bf-fc-legend"><span class="bf-fc-legend-item"><span class="bf-fc-dot bf-fc-dot-green"></span> \u4E3B\u6D41\u7A0B\u6B65\u9AA4</span><span class="bf-fc-legend-item"><span class="bf-fc-dot bf-fc-dot-purple"></span> \u5F00\u59CB/\u7ED3\u675F/\u5224\u65AD</span><span class="bf-fc-legend-item"><span class="bf-fc-dot bf-fc-dot-blue"></span> \u4E0A\u6E38\u652F\u6491\u670D\u52A1</span><span class="bf-fc-legend-item"><span style="${ssrRenderStyle({ "display": "inline-block", "width": "12px", "height": "12px", "background": "#16A34A", "border-radius": "2px" })}"></span> \u672C\u83DC\u5355\u6838\u5FC3\u62A5\u8868\u8282\u70B9</span></div></div></div></div><div id="key-logic" style="${ssrRenderStyle({ "display": "none" })}"><div class="tab-pad"><div class="kl-wrap">`);
  _push(ssrRenderComponent(_component_KbCard, {
    num: "1",
    title: "\u91CD\u70B9\u903B\u8F911\uFF1A\u7EAF\u62A5\u8868\u67E5\u8BE2\u9875\u9762\u3010\u53EA\u8BFB\u67E5\u8BE2\u3011"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u610F\u4E49</strong>\uFF1A\u4F9B\u5185\u90E8\u4EBA\u5458\u67E5\u8BE2\u95E8\u5E97\u88C5\u4FEE\u989D\u5EA6\u5185\u5151\u73B0\u7684\u6C47\u603B\u7EDF\u8BA1\u62A5\u8868\u4FE1\u606F\uFF0C\u4E86\u89E3\u989D\u5EA6\u5185\u5151\u73B0\u7684\u6574\u4F53\u60C5\u51B5</li><li${_scopeId}><strong${_scopeId}>\u5177\u4F53\u903B\u8F91\u63CF\u8FF0</strong>\uFF1A</li><li${_scopeId}>\u672C\u9875\u9762\u4E3Ahlod\u4F4E\u4EE3\u7801\u62A5\u8868\u9875\u9762\uFF0C\u65E0\u72EC\u7ACB\u524D\u7AEF\u6E90\u7801</li><li${_scopeId}>\u4EC5\u63D0\u4F9B\u67E5\u8BE2\u548C\u5BFC\u51FA\u529F\u80FD\uFF0C\u4E0D\u652F\u6301\u65B0\u589E\u3001\u4FEE\u6539\u3001\u5220\u9664\u64CD\u4F5C</li><li${_scopeId}>\u4E3B\u67E5\u8BE2\u6570\u636E\u6765\u6E90\u4E8E\u89C6\u56FE <code${_scopeId}>EPMS.FIN_FEE_TERMINAL_CASHOUT_VIEW</code>\uFF0C\u5305\u542B\u53EF\u5151\u73B0\u603B\u989D\u3001\u5DF2\u5151\u73B0\u91D1\u989D\u3001\u5269\u4F59\u672A\u5151\u73B0\u91D1\u989D\u7B49\u6C47\u603B\u6307\u6807</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u610F\u4E49"),
              createTextVNode("\uFF1A\u4F9B\u5185\u90E8\u4EBA\u5458\u67E5\u8BE2\u95E8\u5E97\u88C5\u4FEE\u989D\u5EA6\u5185\u5151\u73B0\u7684\u6C47\u603B\u7EDF\u8BA1\u62A5\u8868\u4FE1\u606F\uFF0C\u4E86\u89E3\u989D\u5EA6\u5185\u5151\u73B0\u7684\u6574\u4F53\u60C5\u51B5")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u5177\u4F53\u903B\u8F91\u63CF\u8FF0"),
              createTextVNode("\uFF1A")
            ]),
            createVNode("li", null, "\u672C\u9875\u9762\u4E3Ahlod\u4F4E\u4EE3\u7801\u62A5\u8868\u9875\u9762\uFF0C\u65E0\u72EC\u7ACB\u524D\u7AEF\u6E90\u7801"),
            createVNode("li", null, "\u4EC5\u63D0\u4F9B\u67E5\u8BE2\u548C\u5BFC\u51FA\u529F\u80FD\uFF0C\u4E0D\u652F\u6301\u65B0\u589E\u3001\u4FEE\u6539\u3001\u5220\u9664\u64CD\u4F5C"),
            createVNode("li", null, [
              createTextVNode("\u4E3B\u67E5\u8BE2\u6570\u636E\u6765\u6E90\u4E8E\u89C6\u56FE "),
              createVNode("code", null, "EPMS.FIN_FEE_TERMINAL_CASHOUT_VIEW"),
              createTextVNode("\uFF0C\u5305\u542B\u53EF\u5151\u73B0\u603B\u989D\u3001\u5DF2\u5151\u73B0\u91D1\u989D\u3001\u5269\u4F59\u672A\u5151\u73B0\u91D1\u989D\u7B49\u6C47\u603B\u6307\u6807")
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, {
    num: "2",
    title: "\u91CD\u70B9\u903B\u8F912\uFF1A\u4E3B\u67E5\u8BE2\u4E0E\u660E\u7EC6\u67E5\u8BE2\u53CC\u63A5\u53E3"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u610F\u4E49</strong>\uFF1A\u4E3B\u67E5\u8BE2\u5C55\u793A\u6C47\u603B\u7EDF\u8BA1\uFF0C\u660E\u7EC6\u67E5\u8BE2\u5C55\u793A\u6BCF\u7B14\u5151\u73B0\u5355\u8BE6\u60C5\uFF0C\u6EE1\u8DB3\u4E0D\u540C\u7C92\u5EA6\u7684\u6570\u636E\u67E5\u770B\u9700\u6C42</li><li${_scopeId}><strong${_scopeId}>\u5177\u4F53\u903B\u8F91\u63CF\u8FF0</strong>\uFF1A</li><li${_scopeId}>\u4E3B\u67E5\u8BE2\uFF08finFeeTerminalCashoutListSearch\uFF09\uFF1A\u67E5\u8BE2 <code${_scopeId}>EPMS.FIN_FEE_TERMINAL_CASHOUT_VIEW</code> \u89C6\u56FE\uFF0C\u8FD4\u56DE\u6C47\u603B\u6570\u636E\uFF0C\u6309CHECK_BX_ID\u964D\u5E8F\u6392\u5217</li><li${_scopeId}>\u660E\u7EC6\u67E5\u8BE2\uFF08finFeeTerminalCashoutListGetCashoutLine\uFF09\uFF1A\u67E5\u8BE2 <code${_scopeId}>FIN_FEE_TERMINAL_CASHOUT</code> \u8868\uFF0CLEFT JOIN <code${_scopeId}>FIN_FEE_CHECK_BX_HEADER</code> \u548C <code${_scopeId}>DIVISION_BASE_SET</code>\uFF0C\u8FD4\u56DE\u6BCF\u7B14\u5151\u73B0\u5355\u8BE6\u60C5</li><li${_scopeId}>\u660E\u7EC6\u67E5\u8BE2\u6392\u9664&quot;\u8D85\u989D\u4F5C\u5E9F&quot;\u8BB0\u5F55\uFF1A<code${_scopeId}>h.audit_stat != &#39;\u8D85\u989D\u4F5C\u5E9F&#39;</code></li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u610F\u4E49"),
              createTextVNode("\uFF1A\u4E3B\u67E5\u8BE2\u5C55\u793A\u6C47\u603B\u7EDF\u8BA1\uFF0C\u660E\u7EC6\u67E5\u8BE2\u5C55\u793A\u6BCF\u7B14\u5151\u73B0\u5355\u8BE6\u60C5\uFF0C\u6EE1\u8DB3\u4E0D\u540C\u7C92\u5EA6\u7684\u6570\u636E\u67E5\u770B\u9700\u6C42")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u5177\u4F53\u903B\u8F91\u63CF\u8FF0"),
              createTextVNode("\uFF1A")
            ]),
            createVNode("li", null, [
              createTextVNode("\u4E3B\u67E5\u8BE2\uFF08finFeeTerminalCashoutListSearch\uFF09\uFF1A\u67E5\u8BE2 "),
              createVNode("code", null, "EPMS.FIN_FEE_TERMINAL_CASHOUT_VIEW"),
              createTextVNode(" \u89C6\u56FE\uFF0C\u8FD4\u56DE\u6C47\u603B\u6570\u636E\uFF0C\u6309CHECK_BX_ID\u964D\u5E8F\u6392\u5217")
            ]),
            createVNode("li", null, [
              createTextVNode("\u660E\u7EC6\u67E5\u8BE2\uFF08finFeeTerminalCashoutListGetCashoutLine\uFF09\uFF1A\u67E5\u8BE2 "),
              createVNode("code", null, "FIN_FEE_TERMINAL_CASHOUT"),
              createTextVNode(" \u8868\uFF0CLEFT JOIN "),
              createVNode("code", null, "FIN_FEE_CHECK_BX_HEADER"),
              createTextVNode(" \u548C "),
              createVNode("code", null, "DIVISION_BASE_SET"),
              createTextVNode("\uFF0C\u8FD4\u56DE\u6BCF\u7B14\u5151\u73B0\u5355\u8BE6\u60C5")
            ]),
            createVNode("li", null, [
              createTextVNode('\u660E\u7EC6\u67E5\u8BE2\u6392\u9664"\u8D85\u989D\u4F5C\u5E9F"\u8BB0\u5F55\uFF1A'),
              createVNode("code", null, "h.audit_stat != '\u8D85\u989D\u4F5C\u5E9F'")
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, {
    num: "3",
    title: "\u91CD\u70B9\u903B\u8F913\uFF1A\u91D1\u989D\u5B57\u6BB5\u683C\u5F0F\u5316"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u610F\u4E49</strong>\uFF1A\u7EDF\u4E00\u91D1\u989D\u5C55\u793A\u683C\u5F0F\uFF0C\u786E\u4FDD\u62A5\u8868\u6570\u636E\u53EF\u8BFB\u6027</li><li${_scopeId}><strong${_scopeId}>\u5177\u4F53\u903B\u8F91\u63CF\u8FF0</strong>\uFF1A</li><li${_scopeId}>\u4E3B\u67E5\u8BE2\uFF1A\u91D1\u989D\u5B57\u6BB5\u4F7F\u7528 <code${_scopeId}>TO_CHAR(..., &#39;999999999990.99&#39;)</code> \u683C\u5F0F\u5316\uFF08\u65E0FM\u524D\u7F00\uFF0C\u4FDD\u7559\u524D\u5BFC\u7A7A\u683C\uFF09</li><li${_scopeId}>\u660E\u7EC6\u67E5\u8BE2\uFF1A\u91D1\u989D\u5B57\u6BB5\u4F7F\u7528 <code${_scopeId}>TO_CHAR(..., &#39;FM999999999990.00&#39;)</code> \u683C\u5F0F\u5316\uFF08\u5E26FM\u524D\u7F00\uFF0C\u65E0\u524D\u5BFC\u7A7A\u683C\uFF0C2\u4F4D\u5C0F\u6570\uFF09</li><li${_scopeId}>\u65E5\u671F\u5B57\u6BB5\u7EDF\u4E00 <code${_scopeId}>TO_CHAR(..., &#39;YYYY-MM-DD&#39;)</code> \u683C\u5F0F\u5316</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u610F\u4E49"),
              createTextVNode("\uFF1A\u7EDF\u4E00\u91D1\u989D\u5C55\u793A\u683C\u5F0F\uFF0C\u786E\u4FDD\u62A5\u8868\u6570\u636E\u53EF\u8BFB\u6027")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u5177\u4F53\u903B\u8F91\u63CF\u8FF0"),
              createTextVNode("\uFF1A")
            ]),
            createVNode("li", null, [
              createTextVNode("\u4E3B\u67E5\u8BE2\uFF1A\u91D1\u989D\u5B57\u6BB5\u4F7F\u7528 "),
              createVNode("code", null, "TO_CHAR(..., '999999999990.99')"),
              createTextVNode(" \u683C\u5F0F\u5316\uFF08\u65E0FM\u524D\u7F00\uFF0C\u4FDD\u7559\u524D\u5BFC\u7A7A\u683C\uFF09")
            ]),
            createVNode("li", null, [
              createTextVNode("\u660E\u7EC6\u67E5\u8BE2\uFF1A\u91D1\u989D\u5B57\u6BB5\u4F7F\u7528 "),
              createVNode("code", null, "TO_CHAR(..., 'FM999999999990.00')"),
              createTextVNode(" \u683C\u5F0F\u5316\uFF08\u5E26FM\u524D\u7F00\uFF0C\u65E0\u524D\u5BFC\u7A7A\u683C\uFF0C2\u4F4D\u5C0F\u6570\uFF09")
            ]),
            createVNode("li", null, [
              createTextVNode("\u65E5\u671F\u5B57\u6BB5\u7EDF\u4E00 "),
              createVNode("code", null, "TO_CHAR(..., 'YYYY-MM-DD')"),
              createTextVNode(" \u683C\u5F0F\u5316")
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, {
    num: "4",
    title: "\u91CD\u70B9\u903B\u8F914\uFF1A\u652F\u4ED8\u65B9\u5F0F\u503C\u96C6\u7FFB\u8BD1"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u610F\u4E49</strong>\uFF1A\u5C06\u652F\u4ED8\u65B9\u5F0F\u7F16\u7801\u7FFB\u8BD1\u4E3A\u53EF\u8BFB\u542B\u4E49</li><li${_scopeId}><strong${_scopeId}>\u5177\u4F53\u903B\u8F91\u63CF\u8FF0</strong>\uFF1A</li><li${_scopeId}>\u901A\u8FC7\u5B50\u67E5\u8BE2 <code${_scopeId}>HZERO.HPFM_LOV_VALUE</code> \u7FFB\u8BD1\uFF0CLOV_CODE = &#39;AE.PAY_TYPE&#39;</li><li${_scopeId}>SQL\uFF1A<code${_scopeId}>(SELECT meaning FROM HZERO.HPFM_LOV_VALUE WHERE LOV_CODE = &#39;AE.PAY_TYPE&#39; and value = v.PAY_TYPE)</code></li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u610F\u4E49"),
              createTextVNode("\uFF1A\u5C06\u652F\u4ED8\u65B9\u5F0F\u7F16\u7801\u7FFB\u8BD1\u4E3A\u53EF\u8BFB\u542B\u4E49")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u5177\u4F53\u903B\u8F91\u63CF\u8FF0"),
              createTextVNode("\uFF1A")
            ]),
            createVNode("li", null, [
              createTextVNode("\u901A\u8FC7\u5B50\u67E5\u8BE2 "),
              createVNode("code", null, "HZERO.HPFM_LOV_VALUE"),
              createTextVNode(" \u7FFB\u8BD1\uFF0CLOV_CODE = 'AE.PAY_TYPE'")
            ]),
            createVNode("li", null, [
              createTextVNode("SQL\uFF1A"),
              createVNode("code", null, "(SELECT meaning FROM HZERO.HPFM_LOV_VALUE WHERE LOV_CODE = 'AE.PAY_TYPE' and value = v.PAY_TYPE)")
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, {
    num: "5",
    title: "\u91CD\u70B9\u903B\u8F915\uFF1A\u67E5\u8BE2\u6761\u4EF6\u5339\u914D\u89C4\u5219"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u610F\u4E49</strong>\uFF1A\u652F\u6301\u591A\u7EF4\u5EA6\u7075\u6D3B\u7B5B\u9009\u989D\u5EA6\u5185\u5151\u73B0\u6570\u636E</li><li${_scopeId}><strong${_scopeId}>\u5177\u4F53\u903B\u8F91\u63CF\u8FF0</strong>\uFF1A</li><li${_scopeId}>\u6A21\u7CCA\u67E5\u8BE2\uFF08LIKE &#39;%xxx%&#39;\uFF09\uFF1A\u9A8C\u6536\u62A5\u9500\u5355\u53F7\u3001\u4E8B\u4E1A\u90E8\u540D\u79F0\u3001\u5F00\u7968\u5355\u4F4D\u540D\u79F0\u3001\u4EA4\u6613\u516C\u53F8\u540D\u79F0\u3001\u7ECF\u9500\u5546\u540D\u79F0</li><li${_scopeId}>\u7CBE\u786E\u67E5\u8BE2\uFF1A\u4E8B\u4E1A\u90E8ID\u3001\u5F00\u7968\u5355\u4F4D\u7F16\u7801\u3001\u95E8\u5E97\u7F16\u7801\u3001\u7ECF\u9500\u5546\u7F16\u7801</li><li${_scopeId}>\u4E3B\u67E5\u8BE2\u548C\u660E\u7EC6\u67E5\u8BE2\u4F7F\u7528\u76F8\u540C\u7684\u67E5\u8BE2\u6761\u4EF6\u53C2\u6570\u96C6</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u610F\u4E49"),
              createTextVNode("\uFF1A\u652F\u6301\u591A\u7EF4\u5EA6\u7075\u6D3B\u7B5B\u9009\u989D\u5EA6\u5185\u5151\u73B0\u6570\u636E")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u5177\u4F53\u903B\u8F91\u63CF\u8FF0"),
              createTextVNode("\uFF1A")
            ]),
            createVNode("li", null, "\u6A21\u7CCA\u67E5\u8BE2\uFF08LIKE '%xxx%'\uFF09\uFF1A\u9A8C\u6536\u62A5\u9500\u5355\u53F7\u3001\u4E8B\u4E1A\u90E8\u540D\u79F0\u3001\u5F00\u7968\u5355\u4F4D\u540D\u79F0\u3001\u4EA4\u6613\u516C\u53F8\u540D\u79F0\u3001\u7ECF\u9500\u5546\u540D\u79F0"),
            createVNode("li", null, "\u7CBE\u786E\u67E5\u8BE2\uFF1A\u4E8B\u4E1A\u90E8ID\u3001\u5F00\u7968\u5355\u4F4D\u7F16\u7801\u3001\u95E8\u5E97\u7F16\u7801\u3001\u7ECF\u9500\u5546\u7F16\u7801"),
            createVNode("li", null, "\u4E3B\u67E5\u8BE2\u548C\u660E\u7EC6\u67E5\u8BE2\u4F7F\u7528\u76F8\u540C\u7684\u67E5\u8BE2\u6761\u4EF6\u53C2\u6570\u96C6")
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
        _push2(`<h4${_scopeId}>\u67E5\u8BE2\u6761\u4EF6\u533A\u57DF</h4><table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5B57\u6BB5\u540D</th><th${_scopeId}>\u6570\u636E\u5E93\u5217\u540D</th><th${_scopeId}>\u7EC4\u4EF6</th><th${_scopeId}>\u4E1A\u52A1\u91CA\u4E49</th><th${_scopeId}>\u663E\u9690\u6761\u4EF6</th><th${_scopeId}>\u53D6\u503C/\u8D4B\u503C\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u7EC4\u7EC7ID</td><td${_scopeId}>ORGANIZATION_ID</td><td${_scopeId}>\u9690\u85CF</td><td${_scopeId}>\u5F53\u524D\u7528\u6237\u7EC4\u7EC7ID</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u81EA\u52A8\u83B7\u53D6\u5F53\u524D\u7528\u6237\u7EC4\u7EC7ID\uFF0C\u9690\u85CF\u5B57\u6BB5</td></tr><tr${_scopeId}><td${_scopeId}>\u9A8C\u6536\u62A5\u9500\u5355\u53F7</td><td${_scopeId}>CHECK_BX_CODE</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u6309\u9A8C\u6536\u62A5\u9500\u5355\u53F7\u7B5B\u9009</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u7528\u6237\u8F93\u5165\uFF0C\u6A21\u7CCA\u5339\u914D\uFF08LIKE &#39;%xxx%&#39;\uFF09</td></tr><tr${_scopeId}><td${_scopeId}>\u4E8B\u4E1A\u90E8ID</td><td${_scopeId}>DIVISION_ID</td><td${_scopeId}>\u4E0B\u62C9\u9009\u62E9\u6846</td><td${_scopeId}>\u6309\u4E8B\u4E1A\u90E8\u7B5B\u9009</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u7528\u6237\u9009\u62E9\uFF0C\u7CBE\u786E\u5339\u914D</td></tr><tr${_scopeId}><td${_scopeId}>\u4E8B\u4E1A\u90E8\u540D\u79F0</td><td${_scopeId}>DIVISION_NAME</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u6309\u4E8B\u4E1A\u90E8\u540D\u79F0\u7B5B\u9009</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u7528\u6237\u8F93\u5165\uFF0C\u6A21\u7CCA\u5339\u914D\uFF08LIKE &#39;%xxx%&#39;\uFF09</td></tr><tr${_scopeId}><td${_scopeId}>\u4EA4\u6613\u516C\u53F8\u540D\u79F0</td><td${_scopeId}>TRADING_COMPANY_NAME</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u6309\u4EA4\u6613\u516C\u53F8\u540D\u79F0\u7B5B\u9009</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u7528\u6237\u8F93\u5165\uFF0C\u6A21\u7CCA\u5339\u914D\uFF08LIKE &#39;%xxx%&#39;\uFF09</td></tr><tr${_scopeId}><td${_scopeId}>\u7ECF\u9500\u5546\u7F16\u7801</td><td${_scopeId}>CUST_CODE</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u6309\u7ECF\u9500\u5546\u7F16\u7801\u7B5B\u9009</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u7528\u6237\u8F93\u5165\uFF0C\u7CBE\u786E\u5339\u914D</td></tr><tr${_scopeId}><td${_scopeId}>\u7ECF\u9500\u5546\u540D\u79F0</td><td${_scopeId}>CUST_NAME</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u6309\u7ECF\u9500\u5546\u540D\u79F0\u7B5B\u9009</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u7528\u6237\u8F93\u5165\uFF0C\u6A21\u7CCA\u5339\u914D\uFF08LIKE &#39;%xxx%&#39;\uFF09</td></tr><tr${_scopeId}><td${_scopeId}>\u5F00\u7968\u5355\u4F4D\u7F16\u7801</td><td${_scopeId}>BILLING_UNIT_CODE</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u6309\u5F00\u7968\u5355\u4F4D\u7F16\u7801\u7B5B\u9009</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u7528\u6237\u8F93\u5165\uFF0C\u7CBE\u786E\u5339\u914D</td></tr><tr${_scopeId}><td${_scopeId}>\u5F00\u7968\u5355\u4F4D\u540D\u79F0</td><td${_scopeId}>BILLING_UNIT_NAME</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u6309\u5F00\u7968\u5355\u4F4D\u540D\u79F0\u7B5B\u9009</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u7528\u6237\u8F93\u5165\uFF0C\u6A21\u7CCA\u5339\u914D\uFF08LIKE &#39;%xxx%&#39;\uFF09</td></tr><tr${_scopeId}><td${_scopeId}>\u95E8\u5E97\u7F16\u7801</td><td${_scopeId}>TERMINAL_CODE</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u6309\u95E8\u5E97\u7F16\u7801\u7B5B\u9009</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u7528\u6237\u8F93\u5165\uFF0C\u7CBE\u786E\u5339\u914D</td></tr></tbody></table><h4${_scopeId}>\u62A5\u8868\u6570\u636E\u533A\u57DF\uFF08\u4E3B\u67E5\u8BE2\uFF09</h4><table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5B57\u6BB5\u540D</th><th${_scopeId}>\u6570\u636E\u5E93\u5217\u540D</th><th${_scopeId}>\u7EC4\u4EF6</th><th${_scopeId}>\u4E1A\u52A1\u91CA\u4E49</th><th${_scopeId}>\u663E\u9690\u6761\u4EF6</th><th${_scopeId}>\u53D6\u503C/\u8D4B\u503C\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u9A8C\u6536\u62A5\u9500\u5355ID</td><td${_scopeId}>CHECK_BX_ID</td><td${_scopeId}>\u9690\u85CF</td><td${_scopeId}>\u9A8C\u6536\u62A5\u9500\u5355\u4E3B\u952E</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u89C6\u56FE\u5B57\u6BB5\u76F4\u63A5\u8F93\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>\u9A8C\u6536\u62A5\u9500\u5355\u53F7</td><td${_scopeId}>CHECK_BX_CODE</td><td${_scopeId}>\u6587\u672C</td><td${_scopeId}>\u9A8C\u6536\u4E0E\u62A5\u9500\u5355\u636E\u7F16\u53F7</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u89C6\u56FE\u5B57\u6BB5\u76F4\u63A5\u8F93\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>\u4E8B\u4E1A\u90E8ID</td><td${_scopeId}>DIVISION_ID</td><td${_scopeId}>\u9690\u85CF</td><td${_scopeId}>\u4E8B\u4E1A\u90E8\u4E3B\u952EID</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u89C6\u56FE\u5B57\u6BB5\u76F4\u63A5\u8F93\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>\u4E8B\u4E1A\u90E8\u540D\u79F0</td><td${_scopeId}>DIVISION_NAME</td><td${_scopeId}>\u6587\u672C</td><td${_scopeId}>\u4E8B\u4E1A\u90E8\u540D\u79F0</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u89C6\u56FE\u5B57\u6BB5\u76F4\u63A5\u8F93\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>\u4EA4\u6613\u516C\u53F8\u540D\u79F0</td><td${_scopeId}>TRADING_COMPANY_NAME</td><td${_scopeId}>\u6587\u672C</td><td${_scopeId}>\u4EA4\u6613\u516C\u53F8\u540D\u79F0</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u89C6\u56FE\u5B57\u6BB5\u76F4\u63A5\u8F93\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>\u7ECF\u9500\u5546\u7F16\u7801</td><td${_scopeId}>CUST_CODE</td><td${_scopeId}>\u6587\u672C</td><td${_scopeId}>\u7ECF\u9500\u5546\u7F16\u7801</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u89C6\u56FE\u5B57\u6BB5\u76F4\u63A5\u8F93\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>\u7ECF\u9500\u5546\u540D\u79F0</td><td${_scopeId}>CUST_NAME</td><td${_scopeId}>\u6587\u672C</td><td${_scopeId}>\u7ECF\u9500\u5546\u540D\u79F0</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u89C6\u56FE\u5B57\u6BB5\u76F4\u63A5\u8F93\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>\u5F00\u7968\u5355\u4F4D\u7F16\u7801</td><td${_scopeId}>BILLING_UNIT_CODE</td><td${_scopeId}>\u6587\u672C</td><td${_scopeId}>\u6CD5\u4EBA\u7F16\u7801</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u89C6\u56FE\u5B57\u6BB5\u76F4\u63A5\u8F93\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>\u5F00\u7968\u5355\u4F4D\u540D\u79F0</td><td${_scopeId}>BILLING_UNIT_NAME</td><td${_scopeId}>\u6587\u672C</td><td${_scopeId}>\u6CD5\u4EBA\u540D\u79F0</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u89C6\u56FE\u5B57\u6BB5\u76F4\u63A5\u8F93\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>\u95E8\u5E97\u7F16\u7801</td><td${_scopeId}>TERMINAL_CODE</td><td${_scopeId}>\u6587\u672C</td><td${_scopeId}>\u95E8\u5E97\u7F16\u7801</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u89C6\u56FE\u5B57\u6BB5\u76F4\u63A5\u8F93\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>\u6210\u672C\u4E2D\u5FC3</td><td${_scopeId}>COST_CENTER_NAME</td><td${_scopeId}>\u6587\u672C</td><td${_scopeId}>\u6210\u672C\u4E2D\u5FC3\u540D\u79F0</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u89C6\u56FE\u5B57\u6BB5\u76F4\u63A5\u8F93\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>\u652F\u4ED8\u65B9\u5F0F</td><td${_scopeId}>PAY_TYPE</td><td${_scopeId}>\u6587\u672C</td><td${_scopeId}>\u652F\u4ED8\u65B9\u5F0F</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u5B50\u67E5\u8BE2HPFM_LOV_VALUE\u7FFB\u8BD1\u4E3A\u542B\u4E49</td></tr><tr${_scopeId}><td${_scopeId}>\u9700\u6838\u9500\u91D1\u989D</td><td${_scopeId}>REDUCE_AMT</td><td${_scopeId}>\u6570\u503C</td><td${_scopeId}>\u9700\u6838\u9500\u91D1\u989D</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>TO_CHAR\u683C\u5F0F\u5316\uFF0C2\u4F4D\u5C0F\u6570</td></tr><tr${_scopeId}><td${_scopeId}>\u53EF\u5151\u73B0\u603B\u989D(\u4E0D\u542B\u7A0E)</td><td${_scopeId}>CASHOUT_AMT</td><td${_scopeId}>\u6570\u503C</td><td${_scopeId}>\u53EF\u5151\u73B0\u603B\u989D(\u4E0D\u542B\u7A0E)</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>TO_CHAR\u683C\u5F0F\u5316\uFF0C2\u4F4D\u5C0F\u6570</td></tr><tr${_scopeId}><td${_scopeId}>\u7D2F\u8BA1\u5DF2\u6838\u9500\u91D1\u989D</td><td${_scopeId}>ALL_REDUCE_AMT</td><td${_scopeId}>\u6570\u503C</td><td${_scopeId}>\u7D2F\u8BA1\u5DF2\u6838\u9500\u91D1\u989D</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>TO_CHAR\u683C\u5F0F\u5316\uFF0C2\u4F4D\u5C0F\u6570</td></tr><tr${_scopeId}><td${_scopeId}>\u7D2F\u8BA1\u5DF2\u5151\u73B0\u91D1\u989D(\u4E0D\u542B\u7A0E)</td><td${_scopeId}>ALL_CASHOUT_AMT</td><td${_scopeId}>\u6570\u503C</td><td${_scopeId}>\u7D2F\u8BA1\u5DF2\u5151\u73B0\u91D1\u989D(\u4E0D\u542B\u7A0E)</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>TO_CHAR\u683C\u5F0F\u5316\uFF0C2\u4F4D\u5C0F\u6570</td></tr><tr${_scopeId}><td${_scopeId}>\u5269\u4F59\u672A\u6838\u9500\u91D1\u989D</td><td${_scopeId}>NO_REDUCE_AMT</td><td${_scopeId}>\u6570\u503C</td><td${_scopeId}>\u5269\u4F59\u672A\u6838\u9500\u91D1\u989D</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>TO_CHAR\u683C\u5F0F\u5316\uFF0C2\u4F4D\u5C0F\u6570</td></tr><tr${_scopeId}><td${_scopeId}>\u5269\u4F59\u672A\u5151\u73B0\u91D1\u989D(\u4E0D\u542B\u7A0E)</td><td${_scopeId}>NO_CASHOUT_AMT</td><td${_scopeId}>\u6570\u503C</td><td${_scopeId}>\u5269\u4F59\u672A\u5151\u73B0\u91D1\u989D(\u4E0D\u542B\u7A0E)</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>TO_CHAR\u683C\u5F0F\u5316\uFF0C2\u4F4D\u5C0F\u6570</td></tr></tbody></table><h4${_scopeId}>\u62A5\u8868\u6570\u636E\u533A\u57DF\uFF08\u660E\u7EC6\u67E5\u8BE2\uFF09</h4><table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5B57\u6BB5\u540D</th><th${_scopeId}>\u6570\u636E\u5E93\u5217\u540D</th><th${_scopeId}>\u7EC4\u4EF6</th><th${_scopeId}>\u4E1A\u52A1\u91CA\u4E49</th><th${_scopeId}>\u663E\u9690\u6761\u4EF6</th><th${_scopeId}>\u53D6\u503C/\u8D4B\u503C\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u5151\u73B0ID</td><td${_scopeId}>TERMINAL_CASHOUT_ID</td><td${_scopeId}>\u9690\u85CF</td><td${_scopeId}>\u5151\u73B0\u5355\u4E3B\u952E</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u8868\u5B57\u6BB5\u76F4\u63A5\u8F93\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>\u7533\u8BF7\u65F6\u95F4</td><td${_scopeId}>CREATE_TIME</td><td${_scopeId}>\u65E5\u671F</td><td${_scopeId}>\u521B\u5EFA\u65F6\u95F4</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>TO_CHAR\u683C\u5F0F\u5316YYYY-MM-DD</td></tr><tr${_scopeId}><td${_scopeId}>\u7533\u8BF7\u4EBA</td><td${_scopeId}>CREATOR</td><td${_scopeId}>\u6587\u672C</td><td${_scopeId}>\u521B\u5EFA\u4EBA</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u8868\u5B57\u6BB5\u76F4\u63A5\u8F93\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>\u521B\u5EFA\u4EBA</td><td${_scopeId}>CREATOR_NAME</td><td${_scopeId}>\u6587\u672C</td><td${_scopeId}>\u521B\u5EFA\u4EBA\u59D3\u540D</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u8868\u5B57\u6BB5\u76F4\u63A5\u8F93\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>\u66F4\u65B0\u65F6\u95F4</td><td${_scopeId}>UPDATE_TIME</td><td${_scopeId}>\u65E5\u671F</td><td${_scopeId}>\u66F4\u65B0\u65F6\u95F4</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>TO_CHAR\u683C\u5F0F\u5316YYYY-MM-DD</td></tr><tr${_scopeId}><td${_scopeId}>\u66F4\u65B0\u4EBA</td><td${_scopeId}>UPDATOR</td><td${_scopeId}>\u6587\u672C</td><td${_scopeId}>\u66F4\u65B0\u4EBA</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u8868\u5B57\u6BB5\u76F4\u63A5\u8F93\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>\u7ECF\u9500\u5546\u7F16\u7801</td><td${_scopeId}>CUST_CODE</td><td${_scopeId}>\u6587\u672C</td><td${_scopeId}>\u7ECF\u9500\u5546\u7F16\u7801</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u8868\u5B57\u6BB5\u76F4\u63A5\u8F93\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>\u7ECF\u9500\u5546\u540D\u79F0</td><td${_scopeId}>CUST_NAME</td><td${_scopeId}>\u6587\u672C</td><td${_scopeId}>\u7ECF\u9500\u5546\u540D\u79F0</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u8868\u5B57\u6BB5\u76F4\u63A5\u8F93\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>\u5F00\u7968\u5355\u4F4D\u7F16\u7801</td><td${_scopeId}>BILLING_UNIT_CODE</td><td${_scopeId}>\u6587\u672C</td><td${_scopeId}>\u6CD5\u4EBA\u7F16\u7801</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u8868\u5B57\u6BB5\u76F4\u63A5\u8F93\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>\u5F00\u7968\u5355\u4F4D\u540D\u79F0</td><td${_scopeId}>BILLING_UNIT_NAME</td><td${_scopeId}>\u6587\u672C</td><td${_scopeId}>\u6CD5\u4EBA\u540D\u79F0</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u8868\u5B57\u6BB5\u76F4\u63A5\u8F93\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>\u9A8C\u6536\u62A5\u9500\u5355\u53F7</td><td${_scopeId}>CHECK_BX_CODE</td><td${_scopeId}>\u6587\u672C</td><td${_scopeId}>\u9A8C\u6536\u62A5\u9500\u5355\u53F7</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u8868\u5B57\u6BB5\u76F4\u63A5\u8F93\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>\u95E8\u5E97\u7F16\u7801</td><td${_scopeId}>TERMINAL_CODE</td><td${_scopeId}>\u6587\u672C</td><td${_scopeId}>\u95E8\u5E97\u7F16\u7801</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u8868\u5B57\u6BB5\u76F4\u63A5\u8F93\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>\u95E8\u5E97\u540D\u79F0</td><td${_scopeId}>TERMINAL_NAME</td><td${_scopeId}>\u6587\u672C</td><td${_scopeId}>\u95E8\u5E97\u540D\u79F0</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u8868\u5B57\u6BB5\u76F4\u63A5\u8F93\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>\u6210\u672C\u4E2D\u5FC3\u7F16\u7801</td><td${_scopeId}>COST_CENTER_CODE</td><td${_scopeId}>\u6587\u672C</td><td${_scopeId}>\u6210\u672C\u4E2D\u5FC3\u7F16\u7801</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u8868\u5B57\u6BB5\u76F4\u63A5\u8F93\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>\u6210\u672C\u4E2D\u5FC3\u540D\u79F0</td><td${_scopeId}>COST_CENTER_NAME</td><td${_scopeId}>\u6587\u672C</td><td${_scopeId}>\u6210\u672C\u4E2D\u5FC3\u540D\u79F0</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u8868\u5B57\u6BB5\u76F4\u63A5\u8F93\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>\u5151\u73B0\u751F\u6548\u65E5\u671F</td><td${_scopeId}>START_CASHOUT_TIME</td><td${_scopeId}>\u65E5\u671F</td><td${_scopeId}>\u5151\u73B0\u751F\u6548\u65E5\u671F</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>TO_CHAR\u683C\u5F0F\u5316YYYY-MM-DD</td></tr><tr${_scopeId}><td${_scopeId}>\u5151\u73B0\u5931\u6548\u65E5\u671F</td><td${_scopeId}>END_CASHOUT_TIME</td><td${_scopeId}>\u65E5\u671F</td><td${_scopeId}>\u5151\u73B0\u5931\u6548\u65E5\u671F</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>TO_CHAR\u683C\u5F0F\u5316YYYY-MM-DD</td></tr><tr${_scopeId}><td${_scopeId}>\u672C\u6708\u6838\u9500\u91D1\u989D</td><td${_scopeId}>MONTH_REDUCE_AMT</td><td${_scopeId}>\u6570\u503C</td><td${_scopeId}>\u672C\u6708\u6838\u9500\u91D1\u989D</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>TO_CHAR\u683C\u5F0F\u5316FM999999999990.00</td></tr><tr${_scopeId}><td${_scopeId}>\u8D22\u52A1\u590D\u6838\u6838\u9500\u91D1\u989D</td><td${_scopeId}>IN_REDUCE_AMT</td><td${_scopeId}>\u6570\u503C</td><td${_scopeId}>\u8D22\u52A1\u590D\u6838\u6838\u9500\u91D1\u989D</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>TO_CHAR\u683C\u5F0F\u5316FM999999999990.00</td></tr><tr${_scopeId}><td${_scopeId}>\u989D\u5EA6\u5185\u672C\u6B21\u5151\u73B0\u91D1\u989D</td><td${_scopeId}>IN_THIS_CASHOUT_AMT</td><td${_scopeId}>\u6570\u503C</td><td${_scopeId}>\u989D\u5EA6\u5185\u672C\u6B21\u5151\u73B0\u91D1\u989D</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>TO_CHAR\u683C\u5F0F\u5316FM999999999990.00</td></tr><tr${_scopeId}><td${_scopeId}>\u53EF\u5151\u73B0\u603B\u989D</td><td${_scopeId}>IN_CAN_NOT_TAX_BX_AMT</td><td${_scopeId}>\u6570\u503C</td><td${_scopeId}>\u53EF\u5151\u73B0\u603B\u989D</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>TO_CHAR\u683C\u5F0F\u5316FM999999999990.00</td></tr><tr${_scopeId}><td${_scopeId}>\u4E0A\u6708\u7D2F\u8BA1\u5DF2\u5151\u73B0\u91D1\u989D</td><td${_scopeId}>LAST_SUM_CASHOUT_AMT</td><td${_scopeId}>\u6570\u503C</td><td${_scopeId}>\u4E0A\u6708\u7D2F\u8BA1\u5DF2\u5151\u73B0\u91D1\u989D</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>TO_CHAR\u683C\u5F0F\u5316FM999999999990.00</td></tr><tr${_scopeId}><td${_scopeId}>\u672C\u6708\u7D2F\u8BA1\u5DF2\u5151\u73B0\u91D1\u989D</td><td${_scopeId}>THIS_MONTH_CASHOUT_AMT</td><td${_scopeId}>\u6570\u503C</td><td${_scopeId}>\u672C\u6708\u7D2F\u8BA1\u5DF2\u5151\u73B0\u91D1\u989D</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>TO_CHAR\u683C\u5F0F\u5316FM999999999990.00</td></tr><tr${_scopeId}><td${_scopeId}>\u989D\u5EA6\u5185\u5269\u4F59\u672A\u5151\u73B0\u91D1\u989D</td><td${_scopeId}>IN_THIS_SUR_CASHOUT_AMT</td><td${_scopeId}>\u6570\u503C</td><td${_scopeId}>\u989D\u5EA6\u5185\u5269\u4F59\u672A\u5151\u73B0\u91D1\u989D</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>TO_CHAR\u683C\u5F0F\u5316FM999999999990.00</td></tr><tr${_scopeId}><td${_scopeId}>\u5907\u6CE8</td><td${_scopeId}>NOTE</td><td${_scopeId}>\u6587\u672C</td><td${_scopeId}>\u5907\u6CE8</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u8868\u5B57\u6BB5\u76F4\u63A5\u8F93\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>\u5BA1\u6838\u4EBA</td><td${_scopeId}>CHECKER</td><td${_scopeId}>\u6587\u672C</td><td${_scopeId}>\u5BA1\u6838\u4EBA</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u8868\u5B57\u6BB5\u76F4\u63A5\u8F93\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>\u5BA1\u6838\u65F6\u95F4</td><td${_scopeId}>CHECK_TIME</td><td${_scopeId}>\u65E5\u671F</td><td${_scopeId}>\u5BA1\u6838\u65F6\u95F4</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>TO_CHAR\u683C\u5F0F\u5316YYYY-MM-DD</td></tr><tr${_scopeId}><td${_scopeId}>\u5165\u8D26\u65E5\u671F</td><td${_scopeId}>INVOICE_PAID_DATE</td><td${_scopeId}>\u65E5\u671F</td><td${_scopeId}>\u5165\u8D26\u65E5\u671F</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>TO_CHAR\u683C\u5F0F\u5316YYYY-MM-DD</td></tr><tr${_scopeId}><td${_scopeId}>\u63A8\u9001\u5171\u4EAB\u5355\u53F7</td><td${_scopeId}>ORDER_PLAN_SHARE_NO</td><td${_scopeId}>\u6587\u672C</td><td${_scopeId}>\u63A8\u9001\u5171\u4EAB\u5355\u53F7</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u8868\u5B57\u6BB5\u76F4\u63A5\u8F93\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>\u4E8B\u4E1A\u90E8ID</td><td${_scopeId}>DIVISION_ID</td><td${_scopeId}>\u9690\u85CF</td><td${_scopeId}>\u4E8B\u4E1A\u90E8ID</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u5173\u8054DIVISION_BASE_SET\u83B7\u53D6</td></tr><tr${_scopeId}><td${_scopeId}>\u4E8B\u4E1A\u90E8\u540D\u79F0</td><td${_scopeId}>DIVISION_NAME</td><td${_scopeId}>\u6587\u672C</td><td${_scopeId}>\u4E8B\u4E1A\u90E8\u540D\u79F0</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u5173\u8054DIVISION_BASE_SET\u83B7\u53D6</td></tr><tr${_scopeId}><td${_scopeId}>\u652F\u4ED8\u65B9\u5F0F</td><td${_scopeId}>PAY_TYPE</td><td${_scopeId}>\u6587\u672C</td><td${_scopeId}>\u652F\u4ED8\u65B9\u5F0F</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u5B50\u67E5\u8BE2HPFM_LOV_VALUE\u7FFB\u8BD1\u4E3A\u542B\u4E49</td></tr><tr${_scopeId}><td${_scopeId}>\u5BA1\u6838\u72B6\u6001</td><td${_scopeId}>AUDIT_STAT</td><td${_scopeId}>\u6587\u672C</td><td${_scopeId}>\u5BA1\u6838\u72B6\u6001</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u8868\u5B57\u6BB5\u76F4\u63A5\u8F93\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>\u5DE5\u4F5C\u6D41\u5BA1\u6279\u72B6\u6001</td><td${_scopeId}>HZ_APPROVE_STATUS</td><td${_scopeId}>\u6587\u672C</td><td${_scopeId}>H0\u6D41\u7A0B\u5BA1\u6279\u72B6\u6001</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u8868\u5B57\u6BB5\u76F4\u63A5\u8F93\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>\u4EA4\u6613\u516C\u53F8\u540D\u79F0</td><td${_scopeId}>TRADING_COMPANY_NAME</td><td${_scopeId}>\u6587\u672C</td><td${_scopeId}>\u4EA4\u6613\u516C\u53F8\u540D\u79F0</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u8868\u5B57\u6BB5\u76F4\u63A5\u8F93\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>\u4F9B\u5E94\u5546\u7F16\u7801</td><td${_scopeId}>VENDOR_CODE</td><td${_scopeId}>\u6587\u672C</td><td${_scopeId}>\u4F9B\u5E94\u5546\u7F16\u7801</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u8868\u5B57\u6BB5\u76F4\u63A5\u8F93\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>\u4F9B\u5E94\u5546\u540D\u79F0</td><td${_scopeId}>VENDOR_NAME</td><td${_scopeId}>\u6587\u672C</td><td${_scopeId}>\u4F9B\u5E94\u5546\u540D\u79F0</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u8868\u5B57\u6BB5\u76F4\u63A5\u8F93\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>\u603B\u8D26\u65E5\u671F</td><td${_scopeId}>LEDGER_DATE</td><td${_scopeId}>\u65E5\u671F</td><td${_scopeId}>\u603B\u8D26\u65E5\u671F</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>TO_CHAR\u683C\u5F0F\u5316YYYY-MM-DD</td></tr><tr${_scopeId}><td${_scopeId}>\u5151\u73B0\u7387</td><td${_scopeId}>CASHOUT_RATE</td><td${_scopeId}>\u6570\u503C</td><td${_scopeId}>\u5E97\u9762\u5151\u73B0\u7387</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u8868\u5B57\u6BB5\u76F4\u63A5\u8F93\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>\u865A\u62DF\u6536\u6B3E\u72B6\u6001</td><td${_scopeId}>RECEIPT_STATUS</td><td${_scopeId}>\u6587\u672C</td><td${_scopeId}>\u865A\u62DF\u6536\u6B3E\u72B6\u6001</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u8868\u5B57\u6BB5\u76F4\u63A5\u8F93\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>\u53D1\u7968\u5230\u6B3E\u91D1\u989D</td><td${_scopeId}>INVOICE_PAID_AMOUNT</td><td${_scopeId}>\u6570\u503C</td><td${_scopeId}>\u53D1\u7968\u5230\u6B3E\u91D1\u989D</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>TO_CHAR\u683C\u5F0F\u5316FM999999999990.00</td></tr></tbody></table><h4${_scopeId}>\u5176\u4ED6\u6309\u94AE</h4><table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u6309\u94AE\u540D\u79F0</th><th${_scopeId}>\u6309\u94AE\u4F5C\u7528</th><th${_scopeId}>\u6240\u5728\u4F4D\u7F6E</th><th${_scopeId}>\u663E\u9690\u6761\u4EF6/\u53EF\u70B9\u51FB\u6761\u4EF6</th><th${_scopeId}>\u5F71\u54CD</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u67E5\u8BE2</td><td${_scopeId}>\u67E5\u8BE2\u989D\u5EA6\u5185\u5151\u73B0\u7EDF\u8BA1\u62A5\u8868\u6570\u636E</td><td${_scopeId}>\u5217\u8868\u9875\u67E5\u8BE2\u533A\u57DF</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u8C03\u7528POST /fin_fee_terminal_cashout_list/search\u63A5\u53E3\uFF0C\u5206\u9875\u8FD4\u56DE\u6C47\u603B\u6570\u636E</td></tr><tr${_scopeId}><td${_scopeId}>\u5BFC\u51FA</td><td${_scopeId}>\u5BFC\u51FA\u62A5\u8868\u6570\u636E\u4E3AExcel</td><td${_scopeId}>\u5217\u8868\u9875\u67E5\u8BE2\u533A\u57DF</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u5BFC\u51FA\u5F53\u524D\u67E5\u8BE2\u7ED3\u679C\u4E3AExcel\u6587\u4EF6</td></tr></tbody></table><h4${_scopeId}>\u6309\u94AE1\uFF1A\u67E5\u8BE2\uFF08\u5217\u8868\u9875\u67E5\u8BE2\u533A\u57DF\uFF09</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u610F\u4E49</strong>\uFF1A\u6839\u636E\u67E5\u8BE2\u6761\u4EF6\u641C\u7D22\u989D\u5EA6\u5185\u5151\u73B0\u7EDF\u8BA1\u62A5\u8868\u6570\u636E</li><li${_scopeId}><strong${_scopeId}>\u5177\u4F53\u903B\u8F91\u63CF\u8FF0</strong>\uFF1A</li><li${_scopeId}>\u70B9\u51FB\u67E5\u8BE2\u6309\u94AE\uFF0C\u89E6\u53D1POST <code${_scopeId}>/v1/{organizationId}/terminalReport/fin_fee_terminal_cashout_list/search</code> \u63A5\u53E3</li><li${_scopeId}>\u8BF7\u6C42\u53C2\u6570\u4E3AFinFeeTerminalCashoutViewSearchDTO\uFF0C\u5305\u542BorganizationId\u3001checkBxCode\u3001divisionId\u3001divisionName\u3001tradingCompanyName\u3001custCode\u3001custName\u3001billingUnitCode\u3001billingUnitName\u3001terminalCode</li><li${_scopeId}>\u540E\u7AEF\u901A\u8FC7PageHelper.doPageAndSort\u5B9E\u73B0\u5206\u9875\u67E5\u8BE2</li><li${_scopeId}>\u67E5\u8BE2\u89C6\u56FE <code${_scopeId}>EPMS.FIN_FEE_TERMINAL_CASHOUT_VIEW</code>\uFF0C\u6309CHECK_BX_ID\u964D\u5E8F\u6392\u5217</li><li${_scopeId}>\u8FD4\u56DEFinFeeTerminalCashoutViewSearchVO\u5206\u9875\u7ED3\u679C</li></ul><h4${_scopeId}>\u6309\u94AE2\uFF1A\u5BFC\u51FA\uFF08\u5217\u8868\u9875\u67E5\u8BE2\u533A\u57DF\uFF09</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u610F\u4E49</strong>\uFF1A\u5C06\u67E5\u8BE2\u7ED3\u679C\u5BFC\u51FA\u4E3AExcel\u6587\u4EF6\uFF0C\u4F9B\u5185\u90E8\u7BA1\u7406\u51B3\u7B56\u4E0E\u5F52\u6863\u4F7F\u7528</li><li${_scopeId}><strong${_scopeId}>\u5177\u4F53\u903B\u8F91\u63CF\u8FF0</strong>\uFF1A</li><li${_scopeId}>\u70B9\u51FB\u5BFC\u51FA\u6309\u94AE\uFF0C\u5C06\u5F53\u524D\u67E5\u8BE2\u6761\u4EF6\u4E0B\u7684\u62A5\u8868\u6570\u636E\u5BFC\u51FA\u4E3AExcel</li><li${_scopeId}>\u5BFC\u51FA\u6570\u636E\u4E0E\u67E5\u8BE2\u7ED3\u679C\u4E00\u81F4</li></ul>`);
      } else {
        return [
          createVNode("h4", null, "\u67E5\u8BE2\u6761\u4EF6\u533A\u57DF"),
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
                createVNode("td", null, "\u7EC4\u7EC7ID"),
                createVNode("td", null, "ORGANIZATION_ID"),
                createVNode("td", null, "\u9690\u85CF"),
                createVNode("td", null, "\u5F53\u524D\u7528\u6237\u7EC4\u7EC7ID"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u81EA\u52A8\u83B7\u53D6\u5F53\u524D\u7528\u6237\u7EC4\u7EC7ID\uFF0C\u9690\u85CF\u5B57\u6BB5")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u9A8C\u6536\u62A5\u9500\u5355\u53F7"),
                createVNode("td", null, "CHECK_BX_CODE"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u6309\u9A8C\u6536\u62A5\u9500\u5355\u53F7\u7B5B\u9009"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u7528\u6237\u8F93\u5165\uFF0C\u6A21\u7CCA\u5339\u914D\uFF08LIKE '%xxx%'\uFF09")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u4E8B\u4E1A\u90E8ID"),
                createVNode("td", null, "DIVISION_ID"),
                createVNode("td", null, "\u4E0B\u62C9\u9009\u62E9\u6846"),
                createVNode("td", null, "\u6309\u4E8B\u4E1A\u90E8\u7B5B\u9009"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u7528\u6237\u9009\u62E9\uFF0C\u7CBE\u786E\u5339\u914D")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u4E8B\u4E1A\u90E8\u540D\u79F0"),
                createVNode("td", null, "DIVISION_NAME"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u6309\u4E8B\u4E1A\u90E8\u540D\u79F0\u7B5B\u9009"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u7528\u6237\u8F93\u5165\uFF0C\u6A21\u7CCA\u5339\u914D\uFF08LIKE '%xxx%'\uFF09")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u4EA4\u6613\u516C\u53F8\u540D\u79F0"),
                createVNode("td", null, "TRADING_COMPANY_NAME"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u6309\u4EA4\u6613\u516C\u53F8\u540D\u79F0\u7B5B\u9009"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u7528\u6237\u8F93\u5165\uFF0C\u6A21\u7CCA\u5339\u914D\uFF08LIKE '%xxx%'\uFF09")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7ECF\u9500\u5546\u7F16\u7801"),
                createVNode("td", null, "CUST_CODE"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u6309\u7ECF\u9500\u5546\u7F16\u7801\u7B5B\u9009"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u7528\u6237\u8F93\u5165\uFF0C\u7CBE\u786E\u5339\u914D")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7ECF\u9500\u5546\u540D\u79F0"),
                createVNode("td", null, "CUST_NAME"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u6309\u7ECF\u9500\u5546\u540D\u79F0\u7B5B\u9009"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u7528\u6237\u8F93\u5165\uFF0C\u6A21\u7CCA\u5339\u914D\uFF08LIKE '%xxx%'\uFF09")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5F00\u7968\u5355\u4F4D\u7F16\u7801"),
                createVNode("td", null, "BILLING_UNIT_CODE"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u6309\u5F00\u7968\u5355\u4F4D\u7F16\u7801\u7B5B\u9009"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u7528\u6237\u8F93\u5165\uFF0C\u7CBE\u786E\u5339\u914D")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5F00\u7968\u5355\u4F4D\u540D\u79F0"),
                createVNode("td", null, "BILLING_UNIT_NAME"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u6309\u5F00\u7968\u5355\u4F4D\u540D\u79F0\u7B5B\u9009"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u7528\u6237\u8F93\u5165\uFF0C\u6A21\u7CCA\u5339\u914D\uFF08LIKE '%xxx%'\uFF09")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u95E8\u5E97\u7F16\u7801"),
                createVNode("td", null, "TERMINAL_CODE"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u6309\u95E8\u5E97\u7F16\u7801\u7B5B\u9009"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u7528\u6237\u8F93\u5165\uFF0C\u7CBE\u786E\u5339\u914D")
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u8868\u6570\u636E\u533A\u57DF\uFF08\u4E3B\u67E5\u8BE2\uFF09"),
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
                createVNode("td", null, "\u9A8C\u6536\u62A5\u9500\u5355ID"),
                createVNode("td", null, "CHECK_BX_ID"),
                createVNode("td", null, "\u9690\u85CF"),
                createVNode("td", null, "\u9A8C\u6536\u62A5\u9500\u5355\u4E3B\u952E"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u89C6\u56FE\u5B57\u6BB5\u76F4\u63A5\u8F93\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u9A8C\u6536\u62A5\u9500\u5355\u53F7"),
                createVNode("td", null, "CHECK_BX_CODE"),
                createVNode("td", null, "\u6587\u672C"),
                createVNode("td", null, "\u9A8C\u6536\u4E0E\u62A5\u9500\u5355\u636E\u7F16\u53F7"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u89C6\u56FE\u5B57\u6BB5\u76F4\u63A5\u8F93\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u4E8B\u4E1A\u90E8ID"),
                createVNode("td", null, "DIVISION_ID"),
                createVNode("td", null, "\u9690\u85CF"),
                createVNode("td", null, "\u4E8B\u4E1A\u90E8\u4E3B\u952EID"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u89C6\u56FE\u5B57\u6BB5\u76F4\u63A5\u8F93\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u4E8B\u4E1A\u90E8\u540D\u79F0"),
                createVNode("td", null, "DIVISION_NAME"),
                createVNode("td", null, "\u6587\u672C"),
                createVNode("td", null, "\u4E8B\u4E1A\u90E8\u540D\u79F0"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u89C6\u56FE\u5B57\u6BB5\u76F4\u63A5\u8F93\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u4EA4\u6613\u516C\u53F8\u540D\u79F0"),
                createVNode("td", null, "TRADING_COMPANY_NAME"),
                createVNode("td", null, "\u6587\u672C"),
                createVNode("td", null, "\u4EA4\u6613\u516C\u53F8\u540D\u79F0"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u89C6\u56FE\u5B57\u6BB5\u76F4\u63A5\u8F93\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7ECF\u9500\u5546\u7F16\u7801"),
                createVNode("td", null, "CUST_CODE"),
                createVNode("td", null, "\u6587\u672C"),
                createVNode("td", null, "\u7ECF\u9500\u5546\u7F16\u7801"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u89C6\u56FE\u5B57\u6BB5\u76F4\u63A5\u8F93\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7ECF\u9500\u5546\u540D\u79F0"),
                createVNode("td", null, "CUST_NAME"),
                createVNode("td", null, "\u6587\u672C"),
                createVNode("td", null, "\u7ECF\u9500\u5546\u540D\u79F0"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u89C6\u56FE\u5B57\u6BB5\u76F4\u63A5\u8F93\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5F00\u7968\u5355\u4F4D\u7F16\u7801"),
                createVNode("td", null, "BILLING_UNIT_CODE"),
                createVNode("td", null, "\u6587\u672C"),
                createVNode("td", null, "\u6CD5\u4EBA\u7F16\u7801"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u89C6\u56FE\u5B57\u6BB5\u76F4\u63A5\u8F93\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5F00\u7968\u5355\u4F4D\u540D\u79F0"),
                createVNode("td", null, "BILLING_UNIT_NAME"),
                createVNode("td", null, "\u6587\u672C"),
                createVNode("td", null, "\u6CD5\u4EBA\u540D\u79F0"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u89C6\u56FE\u5B57\u6BB5\u76F4\u63A5\u8F93\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u95E8\u5E97\u7F16\u7801"),
                createVNode("td", null, "TERMINAL_CODE"),
                createVNode("td", null, "\u6587\u672C"),
                createVNode("td", null, "\u95E8\u5E97\u7F16\u7801"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u89C6\u56FE\u5B57\u6BB5\u76F4\u63A5\u8F93\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6210\u672C\u4E2D\u5FC3"),
                createVNode("td", null, "COST_CENTER_NAME"),
                createVNode("td", null, "\u6587\u672C"),
                createVNode("td", null, "\u6210\u672C\u4E2D\u5FC3\u540D\u79F0"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u89C6\u56FE\u5B57\u6BB5\u76F4\u63A5\u8F93\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u652F\u4ED8\u65B9\u5F0F"),
                createVNode("td", null, "PAY_TYPE"),
                createVNode("td", null, "\u6587\u672C"),
                createVNode("td", null, "\u652F\u4ED8\u65B9\u5F0F"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u5B50\u67E5\u8BE2HPFM_LOV_VALUE\u7FFB\u8BD1\u4E3A\u542B\u4E49")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u9700\u6838\u9500\u91D1\u989D"),
                createVNode("td", null, "REDUCE_AMT"),
                createVNode("td", null, "\u6570\u503C"),
                createVNode("td", null, "\u9700\u6838\u9500\u91D1\u989D"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "TO_CHAR\u683C\u5F0F\u5316\uFF0C2\u4F4D\u5C0F\u6570")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u53EF\u5151\u73B0\u603B\u989D(\u4E0D\u542B\u7A0E)"),
                createVNode("td", null, "CASHOUT_AMT"),
                createVNode("td", null, "\u6570\u503C"),
                createVNode("td", null, "\u53EF\u5151\u73B0\u603B\u989D(\u4E0D\u542B\u7A0E)"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "TO_CHAR\u683C\u5F0F\u5316\uFF0C2\u4F4D\u5C0F\u6570")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7D2F\u8BA1\u5DF2\u6838\u9500\u91D1\u989D"),
                createVNode("td", null, "ALL_REDUCE_AMT"),
                createVNode("td", null, "\u6570\u503C"),
                createVNode("td", null, "\u7D2F\u8BA1\u5DF2\u6838\u9500\u91D1\u989D"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "TO_CHAR\u683C\u5F0F\u5316\uFF0C2\u4F4D\u5C0F\u6570")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7D2F\u8BA1\u5DF2\u5151\u73B0\u91D1\u989D(\u4E0D\u542B\u7A0E)"),
                createVNode("td", null, "ALL_CASHOUT_AMT"),
                createVNode("td", null, "\u6570\u503C"),
                createVNode("td", null, "\u7D2F\u8BA1\u5DF2\u5151\u73B0\u91D1\u989D(\u4E0D\u542B\u7A0E)"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "TO_CHAR\u683C\u5F0F\u5316\uFF0C2\u4F4D\u5C0F\u6570")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5269\u4F59\u672A\u6838\u9500\u91D1\u989D"),
                createVNode("td", null, "NO_REDUCE_AMT"),
                createVNode("td", null, "\u6570\u503C"),
                createVNode("td", null, "\u5269\u4F59\u672A\u6838\u9500\u91D1\u989D"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "TO_CHAR\u683C\u5F0F\u5316\uFF0C2\u4F4D\u5C0F\u6570")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5269\u4F59\u672A\u5151\u73B0\u91D1\u989D(\u4E0D\u542B\u7A0E)"),
                createVNode("td", null, "NO_CASHOUT_AMT"),
                createVNode("td", null, "\u6570\u503C"),
                createVNode("td", null, "\u5269\u4F59\u672A\u5151\u73B0\u91D1\u989D(\u4E0D\u542B\u7A0E)"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "TO_CHAR\u683C\u5F0F\u5316\uFF0C2\u4F4D\u5C0F\u6570")
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u8868\u6570\u636E\u533A\u57DF\uFF08\u660E\u7EC6\u67E5\u8BE2\uFF09"),
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
                createVNode("td", null, "\u5151\u73B0ID"),
                createVNode("td", null, "TERMINAL_CASHOUT_ID"),
                createVNode("td", null, "\u9690\u85CF"),
                createVNode("td", null, "\u5151\u73B0\u5355\u4E3B\u952E"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u8868\u5B57\u6BB5\u76F4\u63A5\u8F93\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7533\u8BF7\u65F6\u95F4"),
                createVNode("td", null, "CREATE_TIME"),
                createVNode("td", null, "\u65E5\u671F"),
                createVNode("td", null, "\u521B\u5EFA\u65F6\u95F4"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "TO_CHAR\u683C\u5F0F\u5316YYYY-MM-DD")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7533\u8BF7\u4EBA"),
                createVNode("td", null, "CREATOR"),
                createVNode("td", null, "\u6587\u672C"),
                createVNode("td", null, "\u521B\u5EFA\u4EBA"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u8868\u5B57\u6BB5\u76F4\u63A5\u8F93\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u521B\u5EFA\u4EBA"),
                createVNode("td", null, "CREATOR_NAME"),
                createVNode("td", null, "\u6587\u672C"),
                createVNode("td", null, "\u521B\u5EFA\u4EBA\u59D3\u540D"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u8868\u5B57\u6BB5\u76F4\u63A5\u8F93\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u66F4\u65B0\u65F6\u95F4"),
                createVNode("td", null, "UPDATE_TIME"),
                createVNode("td", null, "\u65E5\u671F"),
                createVNode("td", null, "\u66F4\u65B0\u65F6\u95F4"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "TO_CHAR\u683C\u5F0F\u5316YYYY-MM-DD")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u66F4\u65B0\u4EBA"),
                createVNode("td", null, "UPDATOR"),
                createVNode("td", null, "\u6587\u672C"),
                createVNode("td", null, "\u66F4\u65B0\u4EBA"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u8868\u5B57\u6BB5\u76F4\u63A5\u8F93\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7ECF\u9500\u5546\u7F16\u7801"),
                createVNode("td", null, "CUST_CODE"),
                createVNode("td", null, "\u6587\u672C"),
                createVNode("td", null, "\u7ECF\u9500\u5546\u7F16\u7801"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u8868\u5B57\u6BB5\u76F4\u63A5\u8F93\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7ECF\u9500\u5546\u540D\u79F0"),
                createVNode("td", null, "CUST_NAME"),
                createVNode("td", null, "\u6587\u672C"),
                createVNode("td", null, "\u7ECF\u9500\u5546\u540D\u79F0"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u8868\u5B57\u6BB5\u76F4\u63A5\u8F93\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5F00\u7968\u5355\u4F4D\u7F16\u7801"),
                createVNode("td", null, "BILLING_UNIT_CODE"),
                createVNode("td", null, "\u6587\u672C"),
                createVNode("td", null, "\u6CD5\u4EBA\u7F16\u7801"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u8868\u5B57\u6BB5\u76F4\u63A5\u8F93\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5F00\u7968\u5355\u4F4D\u540D\u79F0"),
                createVNode("td", null, "BILLING_UNIT_NAME"),
                createVNode("td", null, "\u6587\u672C"),
                createVNode("td", null, "\u6CD5\u4EBA\u540D\u79F0"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u8868\u5B57\u6BB5\u76F4\u63A5\u8F93\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u9A8C\u6536\u62A5\u9500\u5355\u53F7"),
                createVNode("td", null, "CHECK_BX_CODE"),
                createVNode("td", null, "\u6587\u672C"),
                createVNode("td", null, "\u9A8C\u6536\u62A5\u9500\u5355\u53F7"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u8868\u5B57\u6BB5\u76F4\u63A5\u8F93\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u95E8\u5E97\u7F16\u7801"),
                createVNode("td", null, "TERMINAL_CODE"),
                createVNode("td", null, "\u6587\u672C"),
                createVNode("td", null, "\u95E8\u5E97\u7F16\u7801"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u8868\u5B57\u6BB5\u76F4\u63A5\u8F93\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u95E8\u5E97\u540D\u79F0"),
                createVNode("td", null, "TERMINAL_NAME"),
                createVNode("td", null, "\u6587\u672C"),
                createVNode("td", null, "\u95E8\u5E97\u540D\u79F0"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u8868\u5B57\u6BB5\u76F4\u63A5\u8F93\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6210\u672C\u4E2D\u5FC3\u7F16\u7801"),
                createVNode("td", null, "COST_CENTER_CODE"),
                createVNode("td", null, "\u6587\u672C"),
                createVNode("td", null, "\u6210\u672C\u4E2D\u5FC3\u7F16\u7801"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u8868\u5B57\u6BB5\u76F4\u63A5\u8F93\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6210\u672C\u4E2D\u5FC3\u540D\u79F0"),
                createVNode("td", null, "COST_CENTER_NAME"),
                createVNode("td", null, "\u6587\u672C"),
                createVNode("td", null, "\u6210\u672C\u4E2D\u5FC3\u540D\u79F0"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u8868\u5B57\u6BB5\u76F4\u63A5\u8F93\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5151\u73B0\u751F\u6548\u65E5\u671F"),
                createVNode("td", null, "START_CASHOUT_TIME"),
                createVNode("td", null, "\u65E5\u671F"),
                createVNode("td", null, "\u5151\u73B0\u751F\u6548\u65E5\u671F"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "TO_CHAR\u683C\u5F0F\u5316YYYY-MM-DD")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5151\u73B0\u5931\u6548\u65E5\u671F"),
                createVNode("td", null, "END_CASHOUT_TIME"),
                createVNode("td", null, "\u65E5\u671F"),
                createVNode("td", null, "\u5151\u73B0\u5931\u6548\u65E5\u671F"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "TO_CHAR\u683C\u5F0F\u5316YYYY-MM-DD")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u672C\u6708\u6838\u9500\u91D1\u989D"),
                createVNode("td", null, "MONTH_REDUCE_AMT"),
                createVNode("td", null, "\u6570\u503C"),
                createVNode("td", null, "\u672C\u6708\u6838\u9500\u91D1\u989D"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "TO_CHAR\u683C\u5F0F\u5316FM999999999990.00")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u8D22\u52A1\u590D\u6838\u6838\u9500\u91D1\u989D"),
                createVNode("td", null, "IN_REDUCE_AMT"),
                createVNode("td", null, "\u6570\u503C"),
                createVNode("td", null, "\u8D22\u52A1\u590D\u6838\u6838\u9500\u91D1\u989D"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "TO_CHAR\u683C\u5F0F\u5316FM999999999990.00")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u989D\u5EA6\u5185\u672C\u6B21\u5151\u73B0\u91D1\u989D"),
                createVNode("td", null, "IN_THIS_CASHOUT_AMT"),
                createVNode("td", null, "\u6570\u503C"),
                createVNode("td", null, "\u989D\u5EA6\u5185\u672C\u6B21\u5151\u73B0\u91D1\u989D"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "TO_CHAR\u683C\u5F0F\u5316FM999999999990.00")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u53EF\u5151\u73B0\u603B\u989D"),
                createVNode("td", null, "IN_CAN_NOT_TAX_BX_AMT"),
                createVNode("td", null, "\u6570\u503C"),
                createVNode("td", null, "\u53EF\u5151\u73B0\u603B\u989D"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "TO_CHAR\u683C\u5F0F\u5316FM999999999990.00")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u4E0A\u6708\u7D2F\u8BA1\u5DF2\u5151\u73B0\u91D1\u989D"),
                createVNode("td", null, "LAST_SUM_CASHOUT_AMT"),
                createVNode("td", null, "\u6570\u503C"),
                createVNode("td", null, "\u4E0A\u6708\u7D2F\u8BA1\u5DF2\u5151\u73B0\u91D1\u989D"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "TO_CHAR\u683C\u5F0F\u5316FM999999999990.00")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u672C\u6708\u7D2F\u8BA1\u5DF2\u5151\u73B0\u91D1\u989D"),
                createVNode("td", null, "THIS_MONTH_CASHOUT_AMT"),
                createVNode("td", null, "\u6570\u503C"),
                createVNode("td", null, "\u672C\u6708\u7D2F\u8BA1\u5DF2\u5151\u73B0\u91D1\u989D"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "TO_CHAR\u683C\u5F0F\u5316FM999999999990.00")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u989D\u5EA6\u5185\u5269\u4F59\u672A\u5151\u73B0\u91D1\u989D"),
                createVNode("td", null, "IN_THIS_SUR_CASHOUT_AMT"),
                createVNode("td", null, "\u6570\u503C"),
                createVNode("td", null, "\u989D\u5EA6\u5185\u5269\u4F59\u672A\u5151\u73B0\u91D1\u989D"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "TO_CHAR\u683C\u5F0F\u5316FM999999999990.00")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5907\u6CE8"),
                createVNode("td", null, "NOTE"),
                createVNode("td", null, "\u6587\u672C"),
                createVNode("td", null, "\u5907\u6CE8"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u8868\u5B57\u6BB5\u76F4\u63A5\u8F93\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5BA1\u6838\u4EBA"),
                createVNode("td", null, "CHECKER"),
                createVNode("td", null, "\u6587\u672C"),
                createVNode("td", null, "\u5BA1\u6838\u4EBA"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u8868\u5B57\u6BB5\u76F4\u63A5\u8F93\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5BA1\u6838\u65F6\u95F4"),
                createVNode("td", null, "CHECK_TIME"),
                createVNode("td", null, "\u65E5\u671F"),
                createVNode("td", null, "\u5BA1\u6838\u65F6\u95F4"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "TO_CHAR\u683C\u5F0F\u5316YYYY-MM-DD")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5165\u8D26\u65E5\u671F"),
                createVNode("td", null, "INVOICE_PAID_DATE"),
                createVNode("td", null, "\u65E5\u671F"),
                createVNode("td", null, "\u5165\u8D26\u65E5\u671F"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "TO_CHAR\u683C\u5F0F\u5316YYYY-MM-DD")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u63A8\u9001\u5171\u4EAB\u5355\u53F7"),
                createVNode("td", null, "ORDER_PLAN_SHARE_NO"),
                createVNode("td", null, "\u6587\u672C"),
                createVNode("td", null, "\u63A8\u9001\u5171\u4EAB\u5355\u53F7"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u8868\u5B57\u6BB5\u76F4\u63A5\u8F93\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u4E8B\u4E1A\u90E8ID"),
                createVNode("td", null, "DIVISION_ID"),
                createVNode("td", null, "\u9690\u85CF"),
                createVNode("td", null, "\u4E8B\u4E1A\u90E8ID"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u5173\u8054DIVISION_BASE_SET\u83B7\u53D6")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u4E8B\u4E1A\u90E8\u540D\u79F0"),
                createVNode("td", null, "DIVISION_NAME"),
                createVNode("td", null, "\u6587\u672C"),
                createVNode("td", null, "\u4E8B\u4E1A\u90E8\u540D\u79F0"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u5173\u8054DIVISION_BASE_SET\u83B7\u53D6")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u652F\u4ED8\u65B9\u5F0F"),
                createVNode("td", null, "PAY_TYPE"),
                createVNode("td", null, "\u6587\u672C"),
                createVNode("td", null, "\u652F\u4ED8\u65B9\u5F0F"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u5B50\u67E5\u8BE2HPFM_LOV_VALUE\u7FFB\u8BD1\u4E3A\u542B\u4E49")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5BA1\u6838\u72B6\u6001"),
                createVNode("td", null, "AUDIT_STAT"),
                createVNode("td", null, "\u6587\u672C"),
                createVNode("td", null, "\u5BA1\u6838\u72B6\u6001"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u8868\u5B57\u6BB5\u76F4\u63A5\u8F93\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5DE5\u4F5C\u6D41\u5BA1\u6279\u72B6\u6001"),
                createVNode("td", null, "HZ_APPROVE_STATUS"),
                createVNode("td", null, "\u6587\u672C"),
                createVNode("td", null, "H0\u6D41\u7A0B\u5BA1\u6279\u72B6\u6001"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u8868\u5B57\u6BB5\u76F4\u63A5\u8F93\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u4EA4\u6613\u516C\u53F8\u540D\u79F0"),
                createVNode("td", null, "TRADING_COMPANY_NAME"),
                createVNode("td", null, "\u6587\u672C"),
                createVNode("td", null, "\u4EA4\u6613\u516C\u53F8\u540D\u79F0"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u8868\u5B57\u6BB5\u76F4\u63A5\u8F93\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u4F9B\u5E94\u5546\u7F16\u7801"),
                createVNode("td", null, "VENDOR_CODE"),
                createVNode("td", null, "\u6587\u672C"),
                createVNode("td", null, "\u4F9B\u5E94\u5546\u7F16\u7801"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u8868\u5B57\u6BB5\u76F4\u63A5\u8F93\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u4F9B\u5E94\u5546\u540D\u79F0"),
                createVNode("td", null, "VENDOR_NAME"),
                createVNode("td", null, "\u6587\u672C"),
                createVNode("td", null, "\u4F9B\u5E94\u5546\u540D\u79F0"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u8868\u5B57\u6BB5\u76F4\u63A5\u8F93\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u603B\u8D26\u65E5\u671F"),
                createVNode("td", null, "LEDGER_DATE"),
                createVNode("td", null, "\u65E5\u671F"),
                createVNode("td", null, "\u603B\u8D26\u65E5\u671F"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "TO_CHAR\u683C\u5F0F\u5316YYYY-MM-DD")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5151\u73B0\u7387"),
                createVNode("td", null, "CASHOUT_RATE"),
                createVNode("td", null, "\u6570\u503C"),
                createVNode("td", null, "\u5E97\u9762\u5151\u73B0\u7387"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u8868\u5B57\u6BB5\u76F4\u63A5\u8F93\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u865A\u62DF\u6536\u6B3E\u72B6\u6001"),
                createVNode("td", null, "RECEIPT_STATUS"),
                createVNode("td", null, "\u6587\u672C"),
                createVNode("td", null, "\u865A\u62DF\u6536\u6B3E\u72B6\u6001"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u8868\u5B57\u6BB5\u76F4\u63A5\u8F93\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u53D1\u7968\u5230\u6B3E\u91D1\u989D"),
                createVNode("td", null, "INVOICE_PAID_AMOUNT"),
                createVNode("td", null, "\u6570\u503C"),
                createVNode("td", null, "\u53D1\u7968\u5230\u6B3E\u91D1\u989D"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "TO_CHAR\u683C\u5F0F\u5316FM999999999990.00")
              ])
            ])
          ]),
          createVNode("h4", null, "\u5176\u4ED6\u6309\u94AE"),
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
                createVNode("td", null, "\u67E5\u8BE2\u989D\u5EA6\u5185\u5151\u73B0\u7EDF\u8BA1\u62A5\u8868\u6570\u636E"),
                createVNode("td", null, "\u5217\u8868\u9875\u67E5\u8BE2\u533A\u57DF"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u8C03\u7528POST /fin_fee_terminal_cashout_list/search\u63A5\u53E3\uFF0C\u5206\u9875\u8FD4\u56DE\u6C47\u603B\u6570\u636E")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5BFC\u51FA"),
                createVNode("td", null, "\u5BFC\u51FA\u62A5\u8868\u6570\u636E\u4E3AExcel"),
                createVNode("td", null, "\u5217\u8868\u9875\u67E5\u8BE2\u533A\u57DF"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u5BFC\u51FA\u5F53\u524D\u67E5\u8BE2\u7ED3\u679C\u4E3AExcel\u6587\u4EF6")
              ])
            ])
          ]),
          createVNode("h4", null, "\u6309\u94AE1\uFF1A\u67E5\u8BE2\uFF08\u5217\u8868\u9875\u67E5\u8BE2\u533A\u57DF\uFF09"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u610F\u4E49"),
              createTextVNode("\uFF1A\u6839\u636E\u67E5\u8BE2\u6761\u4EF6\u641C\u7D22\u989D\u5EA6\u5185\u5151\u73B0\u7EDF\u8BA1\u62A5\u8868\u6570\u636E")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u5177\u4F53\u903B\u8F91\u63CF\u8FF0"),
              createTextVNode("\uFF1A")
            ]),
            createVNode("li", null, [
              createTextVNode("\u70B9\u51FB\u67E5\u8BE2\u6309\u94AE\uFF0C\u89E6\u53D1POST "),
              createVNode("code", null, "/v1/{organizationId}/terminalReport/fin_fee_terminal_cashout_list/search"),
              createTextVNode(" \u63A5\u53E3")
            ]),
            createVNode("li", null, "\u8BF7\u6C42\u53C2\u6570\u4E3AFinFeeTerminalCashoutViewSearchDTO\uFF0C\u5305\u542BorganizationId\u3001checkBxCode\u3001divisionId\u3001divisionName\u3001tradingCompanyName\u3001custCode\u3001custName\u3001billingUnitCode\u3001billingUnitName\u3001terminalCode"),
            createVNode("li", null, "\u540E\u7AEF\u901A\u8FC7PageHelper.doPageAndSort\u5B9E\u73B0\u5206\u9875\u67E5\u8BE2"),
            createVNode("li", null, [
              createTextVNode("\u67E5\u8BE2\u89C6\u56FE "),
              createVNode("code", null, "EPMS.FIN_FEE_TERMINAL_CASHOUT_VIEW"),
              createTextVNode("\uFF0C\u6309CHECK_BX_ID\u964D\u5E8F\u6392\u5217")
            ]),
            createVNode("li", null, "\u8FD4\u56DEFinFeeTerminalCashoutViewSearchVO\u5206\u9875\u7ED3\u679C")
          ]),
          createVNode("h4", null, "\u6309\u94AE2\uFF1A\u5BFC\u51FA\uFF08\u5217\u8868\u9875\u67E5\u8BE2\u533A\u57DF\uFF09"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u610F\u4E49"),
              createTextVNode("\uFF1A\u5C06\u67E5\u8BE2\u7ED3\u679C\u5BFC\u51FA\u4E3AExcel\u6587\u4EF6\uFF0C\u4F9B\u5185\u90E8\u7BA1\u7406\u51B3\u7B56\u4E0E\u5F52\u6863\u4F7F\u7528")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u5177\u4F53\u903B\u8F91\u63CF\u8FF0"),
              createTextVNode("\uFF1A")
            ]),
            createVNode("li", null, "\u70B9\u51FB\u5BFC\u51FA\u6309\u94AE\uFF0C\u5C06\u5F53\u524D\u67E5\u8BE2\u6761\u4EF6\u4E0B\u7684\u62A5\u8868\u6570\u636E\u5BFC\u51FA\u4E3AExcel"),
            createVNode("li", null, "\u5BFC\u51FA\u6570\u636E\u4E0E\u67E5\u8BE2\u7ED3\u679C\u4E00\u81F4")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, { title: "\u540E\u7AEF\u63A5\u53E3" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u63A5\u53E3\u540D\u79F0</th><th${_scopeId}>\u8BF7\u6C42\u65B9\u5F0F</th><th${_scopeId}>\u63A5\u53E3\u8DEF\u5F84</th><th${_scopeId}>\u6743\u9650</th><th${_scopeId}>\u8BF4\u660E</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u989D\u5EA6\u5185\u5151\u73B0\u7EDF\u8BA1\u62A5\u8868\u67E5\u8BE2</td><td${_scopeId}>POST</td><td${_scopeId}>\`/v1/{organizationId}/terminalReport/fin_fee_terminal_cashout_list/search\`</td><td${_scopeId}>\u7EC4\u7EC7\u7EA7\u6743\u9650</td><td${_scopeId}>\u5206\u9875\u67E5\u8BE2\u989D\u5EA6\u5185\u5151\u73B0\u6C47\u603B\u6570\u636E</td></tr><tr${_scopeId}><td${_scopeId}>\u989D\u5EA6\u5185\u5151\u73B0\u7EDF\u8BA1\u62A5\u8868\u660E\u7EC6</td><td${_scopeId}>POST</td><td${_scopeId}>\`/v1/{organizationId}/terminalReport/fin_fee_terminal_cashout_list/getCashoutLine\`</td><td${_scopeId}>\u7EC4\u7EC7\u7EA7\u6743\u9650</td><td${_scopeId}>\u5206\u9875\u67E5\u8BE2\u989D\u5EA6\u5185\u5151\u73B0\u660E\u7EC6\u6570\u636E</td></tr></tbody></table><p${_scopeId}><strong${_scopeId}>\u63A5\u53E3\u5165\u53C2\uFF08FinFeeTerminalCashoutViewSearchDTO\uFF09\uFF1A</strong></p><table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u53C2\u6570\u540D</th><th${_scopeId}>\u7C7B\u578B</th><th${_scopeId}>\u8BF4\u660E</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>organizationId</td><td${_scopeId}>String</td><td${_scopeId}>\u7EC4\u7EC7ID\uFF08\u9690\u85CF\u5B57\u6BB5\uFF0C\u540E\u7AEF\u6CE8\u5165\uFF09</td></tr><tr${_scopeId}><td${_scopeId}>checkBxCode</td><td${_scopeId}>String</td><td${_scopeId}>\u9A8C\u6536\u62A5\u9500\u5355\u53F7\uFF08\u6A21\u7CCA\u5339\u914D\uFF09</td></tr><tr${_scopeId}><td${_scopeId}>divisionId</td><td${_scopeId}>String</td><td${_scopeId}>\u4E8B\u4E1A\u90E8ID\uFF08\u7CBE\u786E\u5339\u914D\uFF09</td></tr><tr${_scopeId}><td${_scopeId}>divisionName</td><td${_scopeId}>String</td><td${_scopeId}>\u4E8B\u4E1A\u90E8\u540D\u79F0\uFF08\u6A21\u7CCA\u5339\u914D\uFF09</td></tr><tr${_scopeId}><td${_scopeId}>tradingCompanyName</td><td${_scopeId}>String</td><td${_scopeId}>\u4EA4\u6613\u516C\u53F8\u540D\u79F0\uFF08\u6A21\u7CCA\u5339\u914D\uFF09</td></tr><tr${_scopeId}><td${_scopeId}>custCode</td><td${_scopeId}>String</td><td${_scopeId}>\u7ECF\u9500\u5546\u7F16\u7801\uFF08\u7CBE\u786E\u5339\u914D\uFF09</td></tr><tr${_scopeId}><td${_scopeId}>custName</td><td${_scopeId}>String</td><td${_scopeId}>\u7ECF\u9500\u5546\u540D\u79F0\uFF08\u6A21\u7CCA\u5339\u914D\uFF09</td></tr><tr${_scopeId}><td${_scopeId}>billingUnitCode</td><td${_scopeId}>String</td><td${_scopeId}>\u5F00\u7968\u5355\u4F4D\u7F16\u7801\uFF08\u7CBE\u786E\u5339\u914D\uFF09</td></tr><tr${_scopeId}><td${_scopeId}>billingUnitName</td><td${_scopeId}>String</td><td${_scopeId}>\u5F00\u7968\u5355\u4F4D\u540D\u79F0\uFF08\u6A21\u7CCA\u5339\u914D\uFF09</td></tr><tr${_scopeId}><td${_scopeId}>terminalCode</td><td${_scopeId}>String</td><td${_scopeId}>\u95E8\u5E97\u7F16\u7801\uFF08\u7CBE\u786E\u5339\u914D\uFF09</td></tr></tbody></table>`);
      } else {
        return [
          createVNode("table", { class: "kb-field-tbl" }, [
            createVNode("thead", null, [
              createVNode("tr", null, [
                createVNode("th", null, "\u63A5\u53E3\u540D\u79F0"),
                createVNode("th", null, "\u8BF7\u6C42\u65B9\u5F0F"),
                createVNode("th", null, "\u63A5\u53E3\u8DEF\u5F84"),
                createVNode("th", null, "\u6743\u9650"),
                createVNode("th", null, "\u8BF4\u660E")
              ])
            ]),
            createVNode("tbody", null, [
              createVNode("tr", null, [
                createVNode("td", null, "\u989D\u5EA6\u5185\u5151\u73B0\u7EDF\u8BA1\u62A5\u8868\u67E5\u8BE2"),
                createVNode("td", null, "POST"),
                createVNode("td", null, "`/v1/{organizationId}/terminalReport/fin_fee_terminal_cashout_list/search`"),
                createVNode("td", null, "\u7EC4\u7EC7\u7EA7\u6743\u9650"),
                createVNode("td", null, "\u5206\u9875\u67E5\u8BE2\u989D\u5EA6\u5185\u5151\u73B0\u6C47\u603B\u6570\u636E")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u989D\u5EA6\u5185\u5151\u73B0\u7EDF\u8BA1\u62A5\u8868\u660E\u7EC6"),
                createVNode("td", null, "POST"),
                createVNode("td", null, "`/v1/{organizationId}/terminalReport/fin_fee_terminal_cashout_list/getCashoutLine`"),
                createVNode("td", null, "\u7EC4\u7EC7\u7EA7\u6743\u9650"),
                createVNode("td", null, "\u5206\u9875\u67E5\u8BE2\u989D\u5EA6\u5185\u5151\u73B0\u660E\u7EC6\u6570\u636E")
              ])
            ])
          ]),
          createVNode("p", null, [
            createVNode("strong", null, "\u63A5\u53E3\u5165\u53C2\uFF08FinFeeTerminalCashoutViewSearchDTO\uFF09\uFF1A")
          ]),
          createVNode("table", { class: "kb-field-tbl" }, [
            createVNode("thead", null, [
              createVNode("tr", null, [
                createVNode("th", null, "\u53C2\u6570\u540D"),
                createVNode("th", null, "\u7C7B\u578B"),
                createVNode("th", null, "\u8BF4\u660E")
              ])
            ]),
            createVNode("tbody", null, [
              createVNode("tr", null, [
                createVNode("td", null, "organizationId"),
                createVNode("td", null, "String"),
                createVNode("td", null, "\u7EC4\u7EC7ID\uFF08\u9690\u85CF\u5B57\u6BB5\uFF0C\u540E\u7AEF\u6CE8\u5165\uFF09")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "checkBxCode"),
                createVNode("td", null, "String"),
                createVNode("td", null, "\u9A8C\u6536\u62A5\u9500\u5355\u53F7\uFF08\u6A21\u7CCA\u5339\u914D\uFF09")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "divisionId"),
                createVNode("td", null, "String"),
                createVNode("td", null, "\u4E8B\u4E1A\u90E8ID\uFF08\u7CBE\u786E\u5339\u914D\uFF09")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "divisionName"),
                createVNode("td", null, "String"),
                createVNode("td", null, "\u4E8B\u4E1A\u90E8\u540D\u79F0\uFF08\u6A21\u7CCA\u5339\u914D\uFF09")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "tradingCompanyName"),
                createVNode("td", null, "String"),
                createVNode("td", null, "\u4EA4\u6613\u516C\u53F8\u540D\u79F0\uFF08\u6A21\u7CCA\u5339\u914D\uFF09")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "custCode"),
                createVNode("td", null, "String"),
                createVNode("td", null, "\u7ECF\u9500\u5546\u7F16\u7801\uFF08\u7CBE\u786E\u5339\u914D\uFF09")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "custName"),
                createVNode("td", null, "String"),
                createVNode("td", null, "\u7ECF\u9500\u5546\u540D\u79F0\uFF08\u6A21\u7CCA\u5339\u914D\uFF09")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "billingUnitCode"),
                createVNode("td", null, "String"),
                createVNode("td", null, "\u5F00\u7968\u5355\u4F4D\u7F16\u7801\uFF08\u7CBE\u786E\u5339\u914D\uFF09")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "billingUnitName"),
                createVNode("td", null, "String"),
                createVNode("td", null, "\u5F00\u7968\u5355\u4F4D\u540D\u79F0\uFF08\u6A21\u7CCA\u5339\u914D\uFF09")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "terminalCode"),
                createVNode("td", null, "String"),
                createVNode("td", null, "\u95E8\u5E97\u7F16\u7801\uFF08\u7CBE\u786E\u5339\u914D\uFF09")
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, { title: "\u540E\u7AEF\u63A5\u53E3Mapper SQL" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p${_scopeId}><strong${_scopeId}>\u4E3B\u67E5\u8BE2SQL\uFF1A</strong></p><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- \u989D\u5EA6\u5185\u5151\u73B0\u7EDF\u8BA1\u62A5\u8868\u4E3B\u67E5\u8BE2</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    v.CHECK_BX_ID,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    v.CHECK_BX_CODE,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    v.DIVISION_ID,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    v.DIVISION_NAME,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    v.TRADING_COMPANY_NAME,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    v.CUST_CODE,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    v.CUST_NAME,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    v.BILLING_UNIT_CODE,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    v.BILLING_UNIT_NAME,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    v.TERMINAL_CODE,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    v.COST_CENTER_NAME,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    TO_CHAR(v.REDUCE_AMT, </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>999999999990.99</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> REDUCE_AMT,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    TO_CHAR(v.CASHOUT_AMT, </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>999999999990.99</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> CASHOUT_AMT,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    TO_CHAR(v.ALL_REDUCE_AMT, </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>999999999990.99</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> ALL_REDUCE_AMT,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    TO_CHAR(v.ALL_CASHOUT_AMT, </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>999999999990.99</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> ALL_CASHOUT_AMT,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    (</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> meaning </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> HZERO.HPFM_LOV_VALUE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> LOV_CODE </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>AE.PAY_TYPE</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>value</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> v.PAY_TYPE) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> PAY_TYPE,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    TO_CHAR(v.NO_REDUCE_AMT, </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>999999999990.99</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> NO_REDUCE_AMT,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    TO_CHAR(v.NO_CASHOUT_AMT, </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>999999999990.99</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> NO_CASHOUT_AMT</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> epms.FIN_FEE_TERMINAL_CASHOUT_VIEW v</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>1</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>1</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> v.check_bx_code </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>LIKE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>%</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>||</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> #{checkBxCode} </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>||</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>%</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>       </span><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- \u9A8C\u6536\u62A5\u9500\u5355\u53F7\uFF08\u6A21\u7CCA\uFF09</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> v.division_id </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> #{divisionId}                           </span><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- \u4E8B\u4E1A\u90E8ID\uFF08\u7CBE\u786E\uFF09</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> v.division_name </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>LIKE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>%</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>||</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> #{divisionName} </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>||</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>%</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>      </span><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- \u4E8B\u4E1A\u90E8\u540D\u79F0\uFF08\u6A21\u7CCA\uFF09</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> v.billing_unit_code </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> #{billingUnitCode}                </span><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- \u5F00\u7968\u5355\u4F4D\u7F16\u7801\uFF08\u7CBE\u786E\uFF09</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> v.billing_unit_name </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>LIKE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>%</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>||</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> #{billingUnitName} </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>||</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>%</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- \u5F00\u7968\u5355\u4F4D\u540D\u79F0\uFF08\u6A21\u7CCA\uFF09</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> v.trading_company_name </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>LIKE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>%</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>||</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> #{tradingCompanyName} </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>||</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>%</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- \u4EA4\u6613\u516C\u53F8\u540D\u79F0\uFF08\u6A21\u7CCA\uFF09</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> v.terminal_code </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> #{terminalCode}                       </span><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- \u95E8\u5E97\u7F16\u7801\uFF08\u7CBE\u786E\uFF09</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> v.cust_code </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> #{custCode}                               </span><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- \u7ECF\u9500\u5546\u7F16\u7801\uFF08\u7CBE\u786E\uFF09</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> v.cust_name </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>LIKE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>%</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>||</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> #{custName} </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>||</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>%</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>              </span><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- \u7ECF\u9500\u5546\u540D\u79F0\uFF08\u6A21\u7CCA\uFF09</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ORDER BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> v.CHECK_BX_ID </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>DESC</span></span>
<span class="line"${_scopeId}></span></code></pre></div><p${_scopeId}><strong${_scopeId}>\u660E\u7EC6\u67E5\u8BE2SQL\uFF1A</strong></p><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- \u989D\u5EA6\u5185\u5151\u73B0\u7EDF\u8BA1\u62A5\u8868\u660E\u7EC6\u67E5\u8BE2</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> m.</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>*</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>        h.TERMINAL_CASHOUT_ID,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>        TO_CHAR(h.CREATE_TIME, </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>YYYY-MM-DD</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> CREATE_TIME,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>        h.CREATOR, h.UPDATOR_NAME, h.CREATOR_NAME,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>        TO_CHAR(h.UPDATE_TIME, </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>YYYY-MM-DD</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> UPDATE_TIME,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>        h.UPDATOR, h.CUST_NAME, h.CUST_ID, h.CUST_CODE,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>        h.BILLING_UNIT_CODE, h.BILLING_UNIT_ID, h.BILLING_UNIT_NAME,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>        h.CHECK_BX_ID, h.CHECK_BX_CODE,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>        h.TERMINAL_CODE, h.TERMINAL_NAME, h.TERMINAL_ID,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>        TO_CHAR(h.START_CASHOUT_TIME, </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>YYYY-MM-DD</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> START_CASHOUT_TIME_OTEHER,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>        TO_CHAR(h.END_CASHOUT_TIME, </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>YYYY-MM-DD</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> END_CASHOUT_TIME_OTEHER,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>        h.COST_CENTER_CODE, h.COST_CENTER_NAME,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>        TO_CHAR(h.MONTH_REDUCE_AMT, </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>FM999999999990.00</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> MONTH_REDUCE_AMT,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>        TO_CHAR(h.IN_REDUCE_AMT, </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>FM999999999990.00</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> IN_REDUCE_AMT,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>        TO_CHAR(h.IN_THIS_CASHOUT_AMT, </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>FM999999999990.00</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> IN_THIS_CASHOUT_AMT,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>        TO_CHAR(h.IN_CAN_NOT_TAX_BX_AMT, </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>FM999999999990.00</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> IN_CAN_NOT_TAX_BX_AMT,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>        TO_CHAR(h.LAST_SUM_CASHOUT_AMT, </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>FM999999999990.00</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> LAST_SUM_CASHOUT_AMT,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>        TO_CHAR(h.THIS_MONTH_CASHOUT_AMT, </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>FM999999999990.00</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> THIS_MONTH_CASHOUT_AMT,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>        TO_CHAR(h.IN_THIS_SUR_CASHOUT_AMT, </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>FM999999999990.00</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> IN_THIS_SUR_CASHOUT_AMT,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>        h.NOTE, h.CHECKER,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>        TO_CHAR(h.CHECK_TIME, </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>YYYY-MM-DD</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> CHECK_TIME,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>        TO_CHAR(h.INVOICE_PAID_DATE, </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>YYYY-MM-DD</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> INVOICE_PAID_DATE,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>        h.ORDER_PLAN_SHARE_NO, h.ORGANIZATION_ID, h.IS_SHARE, h.ERROR, h.PROCESS_STATUS,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>        h.TRADING_COMPANY_NAME, h.TRADING_COMPANY_ID, h.TRADING_COMPANY_CODE,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>        h.VENDOR_ORG_ID, h.VENDOR_CODE, h.VENDOR_NAME, h.BX_WFID,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>        TO_CHAR(h.MONTH_CASHOUT_AMT, </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>FM999999999990.00</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> MONTH_CASHOUT_AMT,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>        h.CASHOUT_RATE, h.SHARE_FLAG,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>        TO_CHAR(h.THIS_MONTH_CHECK_AMT, </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>FM999999999990.00</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> THIS_MONTH_CHECK_AMT,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>        TO_CHAR(h.LAST_SUM_CHECK_AMT, </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>FM999999999990.00</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> LAST_SUM_CHECK_AMT,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>        TO_CHAR(h.IN_THIS_SUR_CHECK_AMT, </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>FM999999999990.00</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> IN_THIS_SUR_CHECK_AMT,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>        h.RECEIPT_STATUS,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>        TO_CHAR(h.INVOICE_PAID_AMOUNT, </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>FM999999999990.00</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> INVOICE_PAID_AMOUNT,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>        TO_CHAR(h.LEDGER_DATE, </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>YYYY-MM-DD</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> LEDGER_DATE,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>        h.AUDIT_STAT, h.ENTNAME, h.CASH_ID, h.IS_INCLUDED_REPORT, h.POST_FLAG,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>        h.DH_CASHOUT_ID, h.DH_CASHOUT_NO, h.OBJECT_VERSION_NUMBER,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>        h.CREATED_BY, TO_CHAR(h.CREATION_DATE, </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>YYYY-MM-DD</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> CREATION_DATE,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>        h.LAST_UPDATED_BY, TO_CHAR(h.LAST_UPDATE_DATE, </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>YYYY-MM-DD</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> LAST_UPDATE_DATE,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>        h.HZ_INSTANCE_ID, h.HZ_APPROVE_STATUS,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>        der.division_id, der.division_name,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>        (</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> meaning </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> HZERO.HPFM_LOV_VALUE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> LOV_CODE </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>AE.PAY_TYPE</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>value</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> c.pay_type) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> paytype</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> fin_fee_terminal_cashout h</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>LEFT JOIN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> fin_fee_check_bx_header c </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ON</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> h.CHECK_BX_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> c.check_bx_id</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>LEFT JOIN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> division_base_set der </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ON</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> h.organization_id </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> der.organization_id</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> h.audit_stat </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>!=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>\u8D85\u989D\u4F5C\u5E9F</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) m</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>1</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>1</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> m.check_bx_code </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>LIKE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>%</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>||</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> #{checkBxCode} </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>||</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>%</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> m.division_id </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> #{divisionId}</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> m.division_name </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>LIKE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>%</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>||</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> #{divisionName} </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>||</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>%</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> m.billing_unit_code </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> #{billingUnitCode}</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> m.billing_unit_name </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>LIKE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>%</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>||</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> #{billingUnitName} </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>||</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>%</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> m.trading_company_name </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>LIKE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>%</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>||</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> #{tradingCompanyName} </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>||</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>%</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> m.terminal_code </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> #{terminalCode}</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> m.cust_code </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> #{custCode}</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> m.cust_name </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>LIKE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>%</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>||</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> #{custName} </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>||</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>%</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span></span>
<span class="line"${_scopeId}></span></code></pre></div>`);
      } else {
        return [
          createVNode("p", null, [
            createVNode("strong", null, "\u4E3B\u67E5\u8BE2SQL\uFF1A")
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
                  createVNode("span", { style: { "color": "#676E95" } }, "-- \u989D\u5EA6\u5185\u5151\u73B0\u7EDF\u8BA1\u62A5\u8868\u4E3B\u67E5\u8BE2")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "SELECT")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    v.CHECK_BX_ID,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    v.CHECK_BX_CODE,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    v.DIVISION_ID,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    v.DIVISION_NAME,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    v.TRADING_COMPANY_NAME,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    v.CUST_CODE,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    v.CUST_NAME,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    v.BILLING_UNIT_CODE,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    v.BILLING_UNIT_NAME,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    v.TERMINAL_CODE,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    v.COST_CENTER_NAME,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    TO_CHAR(v.REDUCE_AMT, "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "999999999990.99"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " REDUCE_AMT,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    TO_CHAR(v.CASHOUT_AMT, "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "999999999990.99"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " CASHOUT_AMT,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    TO_CHAR(v.ALL_REDUCE_AMT, "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "999999999990.99"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " ALL_REDUCE_AMT,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    TO_CHAR(v.ALL_CASHOUT_AMT, "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "999999999990.99"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " ALL_CASHOUT_AMT,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    ("),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "SELECT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " meaning "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " HZERO.HPFM_LOV_VALUE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " LOV_CODE "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "AE.PAY_TYPE"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "value"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " v.PAY_TYPE) "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " PAY_TYPE,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    TO_CHAR(v.NO_REDUCE_AMT, "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "999999999990.99"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " NO_REDUCE_AMT,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    TO_CHAR(v.NO_CASHOUT_AMT, "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "999999999990.99"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " NO_CASHOUT_AMT")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " epms.FIN_FEE_TERMINAL_CASHOUT_VIEW v")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "1"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "1")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " v.check_bx_code "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "LIKE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "%"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "||"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " #{checkBxCode} "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "||"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "%"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "       "),
                  createVNode("span", { style: { "color": "#676E95" } }, "-- \u9A8C\u6536\u62A5\u9500\u5355\u53F7\uFF08\u6A21\u7CCA\uFF09")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " v.division_id "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " #{divisionId}                           "),
                  createVNode("span", { style: { "color": "#676E95" } }, "-- \u4E8B\u4E1A\u90E8ID\uFF08\u7CBE\u786E\uFF09")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " v.division_name "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "LIKE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "%"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "||"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " #{divisionName} "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "||"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "%"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                  createVNode("span", { style: { "color": "#676E95" } }, "-- \u4E8B\u4E1A\u90E8\u540D\u79F0\uFF08\u6A21\u7CCA\uFF09")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " v.billing_unit_code "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " #{billingUnitCode}                "),
                  createVNode("span", { style: { "color": "#676E95" } }, "-- \u5F00\u7968\u5355\u4F4D\u7F16\u7801\uFF08\u7CBE\u786E\uFF09")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " v.billing_unit_name "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "LIKE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "%"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "||"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " #{billingUnitName} "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "||"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "%"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#676E95" } }, "-- \u5F00\u7968\u5355\u4F4D\u540D\u79F0\uFF08\u6A21\u7CCA\uFF09")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " v.trading_company_name "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "LIKE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "%"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "||"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " #{tradingCompanyName} "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "||"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "%"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#676E95" } }, "-- \u4EA4\u6613\u516C\u53F8\u540D\u79F0\uFF08\u6A21\u7CCA\uFF09")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " v.terminal_code "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " #{terminalCode}                       "),
                  createVNode("span", { style: { "color": "#676E95" } }, "-- \u95E8\u5E97\u7F16\u7801\uFF08\u7CBE\u786E\uFF09")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " v.cust_code "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " #{custCode}                               "),
                  createVNode("span", { style: { "color": "#676E95" } }, "-- \u7ECF\u9500\u5546\u7F16\u7801\uFF08\u7CBE\u786E\uFF09")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " v.cust_name "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "LIKE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "%"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "||"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " #{custName} "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "||"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "%"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "              "),
                  createVNode("span", { style: { "color": "#676E95" } }, "-- \u7ECF\u9500\u5546\u540D\u79F0\uFF08\u6A21\u7CCA\uFF09")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ORDER BY"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " v.CHECK_BX_ID "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "DESC")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("p", null, [
            createVNode("strong", null, "\u660E\u7EC6\u67E5\u8BE2SQL\uFF1A")
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
                  createVNode("span", { style: { "color": "#676E95" } }, "-- \u989D\u5EA6\u5185\u5151\u73B0\u7EDF\u8BA1\u62A5\u8868\u660E\u7EC6\u67E5\u8BE2")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "SELECT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " m."),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "*")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " (")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "SELECT")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "        h.TERMINAL_CASHOUT_ID,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "        TO_CHAR(h.CREATE_TIME, "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "YYYY-MM-DD"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " CREATE_TIME,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "        h.CREATOR, h.UPDATOR_NAME, h.CREATOR_NAME,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "        TO_CHAR(h.UPDATE_TIME, "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "YYYY-MM-DD"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " UPDATE_TIME,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "        h.UPDATOR, h.CUST_NAME, h.CUST_ID, h.CUST_CODE,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "        h.BILLING_UNIT_CODE, h.BILLING_UNIT_ID, h.BILLING_UNIT_NAME,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "        h.CHECK_BX_ID, h.CHECK_BX_CODE,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "        h.TERMINAL_CODE, h.TERMINAL_NAME, h.TERMINAL_ID,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "        TO_CHAR(h.START_CASHOUT_TIME, "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "YYYY-MM-DD"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " START_CASHOUT_TIME_OTEHER,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "        TO_CHAR(h.END_CASHOUT_TIME, "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "YYYY-MM-DD"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " END_CASHOUT_TIME_OTEHER,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "        h.COST_CENTER_CODE, h.COST_CENTER_NAME,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "        TO_CHAR(h.MONTH_REDUCE_AMT, "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "FM999999999990.00"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " MONTH_REDUCE_AMT,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "        TO_CHAR(h.IN_REDUCE_AMT, "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "FM999999999990.00"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " IN_REDUCE_AMT,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "        TO_CHAR(h.IN_THIS_CASHOUT_AMT, "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "FM999999999990.00"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " IN_THIS_CASHOUT_AMT,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "        TO_CHAR(h.IN_CAN_NOT_TAX_BX_AMT, "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "FM999999999990.00"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " IN_CAN_NOT_TAX_BX_AMT,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "        TO_CHAR(h.LAST_SUM_CASHOUT_AMT, "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "FM999999999990.00"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " LAST_SUM_CASHOUT_AMT,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "        TO_CHAR(h.THIS_MONTH_CASHOUT_AMT, "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "FM999999999990.00"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " THIS_MONTH_CASHOUT_AMT,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "        TO_CHAR(h.IN_THIS_SUR_CASHOUT_AMT, "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "FM999999999990.00"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " IN_THIS_SUR_CASHOUT_AMT,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "        h.NOTE, h.CHECKER,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "        TO_CHAR(h.CHECK_TIME, "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "YYYY-MM-DD"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " CHECK_TIME,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "        TO_CHAR(h.INVOICE_PAID_DATE, "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "YYYY-MM-DD"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " INVOICE_PAID_DATE,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "        h.ORDER_PLAN_SHARE_NO, h.ORGANIZATION_ID, h.IS_SHARE, h.ERROR, h.PROCESS_STATUS,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "        h.TRADING_COMPANY_NAME, h.TRADING_COMPANY_ID, h.TRADING_COMPANY_CODE,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "        h.VENDOR_ORG_ID, h.VENDOR_CODE, h.VENDOR_NAME, h.BX_WFID,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "        TO_CHAR(h.MONTH_CASHOUT_AMT, "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "FM999999999990.00"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " MONTH_CASHOUT_AMT,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "        h.CASHOUT_RATE, h.SHARE_FLAG,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "        TO_CHAR(h.THIS_MONTH_CHECK_AMT, "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "FM999999999990.00"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " THIS_MONTH_CHECK_AMT,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "        TO_CHAR(h.LAST_SUM_CHECK_AMT, "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "FM999999999990.00"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " LAST_SUM_CHECK_AMT,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "        TO_CHAR(h.IN_THIS_SUR_CHECK_AMT, "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "FM999999999990.00"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " IN_THIS_SUR_CHECK_AMT,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "        h.RECEIPT_STATUS,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "        TO_CHAR(h.INVOICE_PAID_AMOUNT, "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "FM999999999990.00"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " INVOICE_PAID_AMOUNT,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "        TO_CHAR(h.LEDGER_DATE, "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "YYYY-MM-DD"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " LEDGER_DATE,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "        h.AUDIT_STAT, h.ENTNAME, h.CASH_ID, h.IS_INCLUDED_REPORT, h.POST_FLAG,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "        h.DH_CASHOUT_ID, h.DH_CASHOUT_NO, h.OBJECT_VERSION_NUMBER,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "        h.CREATED_BY, TO_CHAR(h.CREATION_DATE, "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "YYYY-MM-DD"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " CREATION_DATE,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "        h.LAST_UPDATED_BY, TO_CHAR(h.LAST_UPDATE_DATE, "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "YYYY-MM-DD"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " LAST_UPDATE_DATE,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "        h.HZ_INSTANCE_ID, h.HZ_APPROVE_STATUS,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "        der.division_id, der.division_name,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "        ("),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "SELECT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " meaning "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " HZERO.HPFM_LOV_VALUE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " LOV_CODE "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "AE.PAY_TYPE"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "value"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " c.pay_type) "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " paytype")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " fin_fee_terminal_cashout h")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "LEFT JOIN"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " fin_fee_check_bx_header c "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ON"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " h.CHECK_BX_ID "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " c.check_bx_id")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "LEFT JOIN"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " division_base_set der "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ON"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " h.organization_id "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " der.organization_id")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " h.audit_stat "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "!="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "\u8D85\u989D\u4F5C\u5E9F"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ") m")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "1"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "1")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " m.check_bx_code "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "LIKE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "%"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "||"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " #{checkBxCode} "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "||"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "%"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " m.division_id "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " #{divisionId}")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " m.division_name "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "LIKE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "%"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "||"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " #{divisionName} "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "||"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "%"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " m.billing_unit_code "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " #{billingUnitCode}")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " m.billing_unit_name "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "LIKE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "%"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "||"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " #{billingUnitName} "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "||"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "%"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " m.trading_company_name "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "LIKE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "%"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "||"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " #{tradingCompanyName} "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "||"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "%"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " m.terminal_code "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " #{terminalCode}")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " m.cust_code "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " #{custCode}")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " m.cust_name "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "LIKE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "%"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "||"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " #{custName} "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "||"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "%"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'")
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
        _push2(`<blockquote${_scopeId}>\u672C\u9875\u9762\u4E3A\u7EAF\u67E5\u8BE2\u62A5\u8868\u9875\u9762\uFF0C\u65E0\u72B6\u6001\u6D41\u8F6C\u3002</blockquote>`);
      } else {
        return [
          createVNode("blockquote", null, "\u672C\u9875\u9762\u4E3A\u7EAF\u67E5\u8BE2\u62A5\u8868\u9875\u9762\uFF0C\u65E0\u72B6\u6001\u6D41\u8F6C\u3002")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, { title: "\u4E0A\u6E38\u4F9D\u8D56" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u4E0A\u6E38\u6A21\u5757</th><th${_scopeId}>\u4F9D\u8D56\u7C7B\u578B</th><th${_scopeId}>\u4F9D\u8D56\u8BF4\u660E</th><th${_scopeId}>\u4F9D\u8D56\u6210\u7ACB\u6761\u4EF6</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u989D\u5EA6\u5185\u5151\u73B0\u5355</td><td${_scopeId}>\u6570\u636E\u6765\u6E90</td><td${_scopeId}>\u660E\u7EC6\u67E5\u8BE2\u6570\u636E\u6765\u6E90\u4E8E\u5151\u73B0\u8868\uFF08FIN_FEE_TERMINAL_CASHOUT\uFF09</td><td${_scopeId}>\u989D\u5EA6\u5185\u5151\u73B0\u5355\u5DF2\u521B\u5EFA</td></tr><tr${_scopeId}><td${_scopeId}>FIN_FEE_TERMINAL_CASHOUT_VIEW</td><td${_scopeId}>\u6570\u636E\u89C6\u56FE</td><td${_scopeId}>\u4E3B\u67E5\u8BE2\u76F4\u63A5\u8BFB\u53D6\u8BE5\u89C6\u56FE\uFF0C\u89C6\u56FE\u6574\u5408\u5151\u73B0\u6C47\u603B\u6570\u636E</td><td${_scopeId}>\u89C6\u56FE\u5DF2\u521B\u5EFA\u5E76\u7EF4\u62A4</td></tr><tr${_scopeId}><td${_scopeId}>\u95E8\u5E97\u9A8C\u6536\u4E0E\u62A5\u9500\u5355</td><td${_scopeId}>\u6570\u636E\u5173\u8054</td><td${_scopeId}>\u660E\u7EC6\u67E5\u8BE2\u5173\u8054FIN_FEE_CHECK_BX_HEADER\u83B7\u53D6\u652F\u4ED8\u65B9\u5F0F</td><td${_scopeId}>\u9A8C\u6536\u62A5\u9500\u5355\u5DF2\u521B\u5EFA</td></tr><tr${_scopeId}><td${_scopeId}>\u4E8B\u4E1A\u90E8\u57FA\u7840\u8BBE\u7F6E</td><td${_scopeId}>\u6570\u636E\u5173\u8054</td><td${_scopeId}>\u5173\u8054DIVISION_BASE_SET\u83B7\u53D6\u4E8B\u4E1A\u90E8\u540D\u79F0\u548CID</td><td${_scopeId}>\u4E8B\u4E1A\u90E8\u5DF2\u914D\u7F6E</td></tr><tr${_scopeId}><td${_scopeId}>\u503C\u96C6\uFF08HPFM_LOV_VALUE\uFF09</td><td${_scopeId}>\u6570\u636E\u7FFB\u8BD1</td><td${_scopeId}>\u5B50\u67E5\u8BE2\u7FFB\u8BD1\u652F\u4ED8\u65B9\u5F0F\u7F16\u7801\u4E3A\u542B\u4E49\uFF08LOV_CODE=&#39;AE.PAY_TYPE&#39;\uFF09</td><td${_scopeId}>\u503C\u96C6\u5DF2\u7EF4\u62A4</td></tr></tbody></table>`);
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
                createVNode("td", null, "\u989D\u5EA6\u5185\u5151\u73B0\u5355"),
                createVNode("td", null, "\u6570\u636E\u6765\u6E90"),
                createVNode("td", null, "\u660E\u7EC6\u67E5\u8BE2\u6570\u636E\u6765\u6E90\u4E8E\u5151\u73B0\u8868\uFF08FIN_FEE_TERMINAL_CASHOUT\uFF09"),
                createVNode("td", null, "\u989D\u5EA6\u5185\u5151\u73B0\u5355\u5DF2\u521B\u5EFA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "FIN_FEE_TERMINAL_CASHOUT_VIEW"),
                createVNode("td", null, "\u6570\u636E\u89C6\u56FE"),
                createVNode("td", null, "\u4E3B\u67E5\u8BE2\u76F4\u63A5\u8BFB\u53D6\u8BE5\u89C6\u56FE\uFF0C\u89C6\u56FE\u6574\u5408\u5151\u73B0\u6C47\u603B\u6570\u636E"),
                createVNode("td", null, "\u89C6\u56FE\u5DF2\u521B\u5EFA\u5E76\u7EF4\u62A4")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u95E8\u5E97\u9A8C\u6536\u4E0E\u62A5\u9500\u5355"),
                createVNode("td", null, "\u6570\u636E\u5173\u8054"),
                createVNode("td", null, "\u660E\u7EC6\u67E5\u8BE2\u5173\u8054FIN_FEE_CHECK_BX_HEADER\u83B7\u53D6\u652F\u4ED8\u65B9\u5F0F"),
                createVNode("td", null, "\u9A8C\u6536\u62A5\u9500\u5355\u5DF2\u521B\u5EFA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u4E8B\u4E1A\u90E8\u57FA\u7840\u8BBE\u7F6E"),
                createVNode("td", null, "\u6570\u636E\u5173\u8054"),
                createVNode("td", null, "\u5173\u8054DIVISION_BASE_SET\u83B7\u53D6\u4E8B\u4E1A\u90E8\u540D\u79F0\u548CID"),
                createVNode("td", null, "\u4E8B\u4E1A\u90E8\u5DF2\u914D\u7F6E")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u503C\u96C6\uFF08HPFM_LOV_VALUE\uFF09"),
                createVNode("td", null, "\u6570\u636E\u7FFB\u8BD1"),
                createVNode("td", null, "\u5B50\u67E5\u8BE2\u7FFB\u8BD1\u652F\u4ED8\u65B9\u5F0F\u7F16\u7801\u4E3A\u542B\u4E49\uFF08LOV_CODE='AE.PAY_TYPE'\uFF09"),
                createVNode("td", null, "\u503C\u96C6\u5DF2\u7EF4\u62A4")
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
        _push2(`<ul${_scopeId}><li${_scopeId}>\u989D\u5EA6\u5185\u5151\u73B0\u60C5\u51B5\u5206\u6790\uFF1A\u7BA1\u7406\u5C42\u901A\u8FC7\u62A5\u8868\u4E86\u89E3\u989D\u5EA6\u5185\u5151\u73B0\u7684\u6574\u4F53\u60C5\u51B5</li><li${_scopeId}>\u6838\u9500/\u5151\u73B0\u91D1\u989D\u6838\u5BF9\uFF1A\u8D22\u52A1\u4EBA\u5458\u6838\u5BF9\u53EF\u5151\u73B0\u603B\u989D\u3001\u5DF2\u5151\u73B0\u91D1\u989D\u3001\u5269\u4F59\u672A\u5151\u73B0\u91D1\u989D</li><li${_scopeId}>\u590D\u6838\u8FDB\u5EA6\u76D1\u63A7\uFF1A\u901A\u8FC7\u660E\u7EC6\u67E5\u8BE2\u76D1\u63A7\u5404\u5151\u73B0\u5355\u7684\u5BA1\u6838\u72B6\u6001\u548C\u590D\u6838\u8FDB\u5EA6</li><li${_scopeId}>Excel\u5BFC\u51FA\u5F52\u6863\uFF1A\u5BFC\u51FA\u62A5\u8868\u6570\u636E\u4F9B\u5185\u90E8\u7BA1\u7406\u51B3\u7B56\u4E0E\u5F52\u6863\u4F7F\u7528</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, "\u989D\u5EA6\u5185\u5151\u73B0\u60C5\u51B5\u5206\u6790\uFF1A\u7BA1\u7406\u5C42\u901A\u8FC7\u62A5\u8868\u4E86\u89E3\u989D\u5EA6\u5185\u5151\u73B0\u7684\u6574\u4F53\u60C5\u51B5"),
            createVNode("li", null, "\u6838\u9500/\u5151\u73B0\u91D1\u989D\u6838\u5BF9\uFF1A\u8D22\u52A1\u4EBA\u5458\u6838\u5BF9\u53EF\u5151\u73B0\u603B\u989D\u3001\u5DF2\u5151\u73B0\u91D1\u989D\u3001\u5269\u4F59\u672A\u5151\u73B0\u91D1\u989D"),
            createVNode("li", null, "\u590D\u6838\u8FDB\u5EA6\u76D1\u63A7\uFF1A\u901A\u8FC7\u660E\u7EC6\u67E5\u8BE2\u76D1\u63A7\u5404\u5151\u73B0\u5355\u7684\u5BA1\u6838\u72B6\u6001\u548C\u590D\u6838\u8FDB\u5EA6"),
            createVNode("li", null, "Excel\u5BFC\u51FA\u5F52\u6863\uFF1A\u5BFC\u51FA\u62A5\u8868\u6570\u636E\u4F9B\u5185\u90E8\u7BA1\u7406\u51B3\u7B56\u4E0E\u5F52\u6863\u4F7F\u7528")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, { title: "FIN_FEE_TERMINAL_CASHOUT_VIEW\uFF08\u989D\u5EA6\u5185\u5151\u73B0\u7EDF\u8BA1\u89C6\u56FE\uFF09" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5B57\u6BB5\u540D</th><th${_scopeId}>\u7C7B\u578B</th><th${_scopeId}>\u91CA\u4E49</th><th${_scopeId}>\u5BF9\u5E94\u754C\u9762\u5B57\u6BB5</th><th${_scopeId}>\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>CHECK_BX_ID</td><td${_scopeId}>NUMBER</td><td${_scopeId}>\u9A8C\u6536\u62A5\u9500\u5355ID</td><td${_scopeId}>\u9A8C\u6536\u62A5\u9500\u5355ID</td><td${_scopeId}>\u5173\u8054FIN_FEE_CHECK_BX_HEADER</td></tr><tr${_scopeId}><td${_scopeId}>CHECK_BX_CODE</td><td${_scopeId}>VARCHAR2</td><td${_scopeId}>\u9A8C\u6536\u62A5\u9500\u5355\u53F7</td><td${_scopeId}>\u9A8C\u6536\u62A5\u9500\u5355\u53F7</td><td${_scopeId}>\u5173\u8054\u9A8C\u6536\u62A5\u9500\u5355</td></tr><tr${_scopeId}><td${_scopeId}>DIVISION_ID</td><td${_scopeId}>NUMBER</td><td${_scopeId}>\u4E8B\u4E1A\u90E8ID</td><td${_scopeId}>\u4E8B\u4E1A\u90E8ID</td><td${_scopeId}>\u6765\u81EA\u4E8B\u4E1A\u90E8\u57FA\u7840\u8BBE\u7F6E</td></tr><tr${_scopeId}><td${_scopeId}>DIVISION_NAME</td><td${_scopeId}>VARCHAR2</td><td${_scopeId}>\u4E8B\u4E1A\u90E8\u540D\u79F0</td><td${_scopeId}>\u4E8B\u4E1A\u90E8\u540D\u79F0</td><td${_scopeId}>\u6765\u81EA\u4E8B\u4E1A\u90E8\u57FA\u7840\u8BBE\u7F6E</td></tr><tr${_scopeId}><td${_scopeId}>TRADING_COMPANY_NAME</td><td${_scopeId}>VARCHAR2</td><td${_scopeId}>\u4EA4\u6613\u516C\u53F8\u540D\u79F0</td><td${_scopeId}>\u4EA4\u6613\u516C\u53F8\u540D\u79F0</td><td${_scopeId}>\u6765\u81EA\u4EA4\u6613\u516C\u53F8\u4E3B\u6570\u636E</td></tr><tr${_scopeId}><td${_scopeId}>CUST_CODE</td><td${_scopeId}>VARCHAR2</td><td${_scopeId}>\u7ECF\u9500\u5546\u7F16\u7801</td><td${_scopeId}>\u7ECF\u9500\u5546\u7F16\u7801</td><td${_scopeId}>\u6765\u81EA\u7ECF\u9500\u5546\u4E3B\u6570\u636E</td></tr><tr${_scopeId}><td${_scopeId}>CUST_NAME</td><td${_scopeId}>VARCHAR2</td><td${_scopeId}>\u7ECF\u9500\u5546\u540D\u79F0</td><td${_scopeId}>\u7ECF\u9500\u5546\u540D\u79F0</td><td${_scopeId}>\u6765\u81EA\u7ECF\u9500\u5546\u4E3B\u6570\u636E</td></tr><tr${_scopeId}><td${_scopeId}>BILLING_UNIT_CODE</td><td${_scopeId}>VARCHAR2</td><td${_scopeId}>\u6CD5\u4EBA\u7F16\u7801</td><td${_scopeId}>\u5F00\u7968\u5355\u4F4D\u7F16\u7801</td><td${_scopeId}>\u6765\u81EA\u4EA4\u6613\u516C\u53F8\u4E3B\u6570\u636E</td></tr><tr${_scopeId}><td${_scopeId}>BILLING_UNIT_NAME</td><td${_scopeId}>VARCHAR2</td><td${_scopeId}>\u6CD5\u4EBA\u540D\u79F0</td><td${_scopeId}>\u5F00\u7968\u5355\u4F4D\u540D\u79F0</td><td${_scopeId}>\u6765\u81EA\u4EA4\u6613\u516C\u53F8\u4E3B\u6570\u636E</td></tr><tr${_scopeId}><td${_scopeId}>TERMINAL_CODE</td><td${_scopeId}>VARCHAR2</td><td${_scopeId}>\u95E8\u5E97\u7F16\u7801</td><td${_scopeId}>\u95E8\u5E97\u7F16\u7801</td><td${_scopeId}>\u6765\u81EA\u95E8\u5E97\u4E3B\u6570\u636E</td></tr><tr${_scopeId}><td${_scopeId}>COST_CENTER_NAME</td><td${_scopeId}>VARCHAR2</td><td${_scopeId}>\u6210\u672C\u4E2D\u5FC3\u540D\u79F0</td><td${_scopeId}>\u6210\u672C\u4E2D\u5FC3</td><td${_scopeId}>\u6765\u81EA\u6210\u672C\u4E2D\u5FC3\u4E3B\u6570\u636E</td></tr><tr${_scopeId}><td${_scopeId}>PAY_TYPE</td><td${_scopeId}>VARCHAR2</td><td${_scopeId}>\u652F\u4ED8\u65B9\u5F0F\u7F16\u7801</td><td${_scopeId}>\u652F\u4ED8\u65B9\u5F0F</td><td${_scopeId}>\u5B50\u67E5\u8BE2HPFM_LOV_VALUE\u7FFB\u8BD1</td></tr><tr${_scopeId}><td${_scopeId}>REDUCE_AMT</td><td${_scopeId}>NUMBER</td><td${_scopeId}>\u9700\u6838\u9500\u91D1\u989D</td><td${_scopeId}>\u9700\u6838\u9500\u91D1\u989D</td><td${_scopeId}>\u89C6\u56FE\u8BA1\u7B97\u5F97\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>CASHOUT_AMT</td><td${_scopeId}>NUMBER</td><td${_scopeId}>\u53EF\u5151\u73B0\u603B\u989D(\u4E0D\u542B\u7A0E)</td><td${_scopeId}>\u53EF\u5151\u73B0\u603B\u989D(\u4E0D\u542B\u7A0E)</td><td${_scopeId}>\u89C6\u56FE\u8BA1\u7B97\u5F97\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>ALL_REDUCE_AMT</td><td${_scopeId}>NUMBER</td><td${_scopeId}>\u7D2F\u8BA1\u5DF2\u6838\u9500\u91D1\u989D</td><td${_scopeId}>\u7D2F\u8BA1\u5DF2\u6838\u9500\u91D1\u989D</td><td${_scopeId}>\u89C6\u56FE\u6C47\u603B\u5F97\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>ALL_CASHOUT_AMT</td><td${_scopeId}>NUMBER</td><td${_scopeId}>\u7D2F\u8BA1\u5DF2\u5151\u73B0\u91D1\u989D(\u4E0D\u542B\u7A0E)</td><td${_scopeId}>\u7D2F\u8BA1\u5DF2\u5151\u73B0\u91D1\u989D(\u4E0D\u542B\u7A0E)</td><td${_scopeId}>\u89C6\u56FE\u6C47\u603B\u5F97\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>NO_REDUCE_AMT</td><td${_scopeId}>NUMBER</td><td${_scopeId}>\u5269\u4F59\u672A\u6838\u9500\u91D1\u989D</td><td${_scopeId}>\u5269\u4F59\u672A\u6838\u9500\u91D1\u989D</td><td${_scopeId}>\u9700\u6838\u9500-\u5DF2\u6838\u9500</td></tr><tr${_scopeId}><td${_scopeId}>NO_CASHOUT_AMT</td><td${_scopeId}>NUMBER</td><td${_scopeId}>\u5269\u4F59\u672A\u5151\u73B0\u91D1\u989D(\u4E0D\u542B\u7A0E)</td><td${_scopeId}>\u5269\u4F59\u672A\u5151\u73B0\u91D1\u989D(\u4E0D\u542B\u7A0E)</td><td${_scopeId}>\u53EF\u5151\u73B0-\u5DF2\u5151\u73B0</td></tr></tbody></table>`);
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
                createVNode("td", null, "NUMBER"),
                createVNode("td", null, "\u9A8C\u6536\u62A5\u9500\u5355ID"),
                createVNode("td", null, "\u9A8C\u6536\u62A5\u9500\u5355ID"),
                createVNode("td", null, "\u5173\u8054FIN_FEE_CHECK_BX_HEADER")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "CHECK_BX_CODE"),
                createVNode("td", null, "VARCHAR2"),
                createVNode("td", null, "\u9A8C\u6536\u62A5\u9500\u5355\u53F7"),
                createVNode("td", null, "\u9A8C\u6536\u62A5\u9500\u5355\u53F7"),
                createVNode("td", null, "\u5173\u8054\u9A8C\u6536\u62A5\u9500\u5355")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "DIVISION_ID"),
                createVNode("td", null, "NUMBER"),
                createVNode("td", null, "\u4E8B\u4E1A\u90E8ID"),
                createVNode("td", null, "\u4E8B\u4E1A\u90E8ID"),
                createVNode("td", null, "\u6765\u81EA\u4E8B\u4E1A\u90E8\u57FA\u7840\u8BBE\u7F6E")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "DIVISION_NAME"),
                createVNode("td", null, "VARCHAR2"),
                createVNode("td", null, "\u4E8B\u4E1A\u90E8\u540D\u79F0"),
                createVNode("td", null, "\u4E8B\u4E1A\u90E8\u540D\u79F0"),
                createVNode("td", null, "\u6765\u81EA\u4E8B\u4E1A\u90E8\u57FA\u7840\u8BBE\u7F6E")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "TRADING_COMPANY_NAME"),
                createVNode("td", null, "VARCHAR2"),
                createVNode("td", null, "\u4EA4\u6613\u516C\u53F8\u540D\u79F0"),
                createVNode("td", null, "\u4EA4\u6613\u516C\u53F8\u540D\u79F0"),
                createVNode("td", null, "\u6765\u81EA\u4EA4\u6613\u516C\u53F8\u4E3B\u6570\u636E")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "CUST_CODE"),
                createVNode("td", null, "VARCHAR2"),
                createVNode("td", null, "\u7ECF\u9500\u5546\u7F16\u7801"),
                createVNode("td", null, "\u7ECF\u9500\u5546\u7F16\u7801"),
                createVNode("td", null, "\u6765\u81EA\u7ECF\u9500\u5546\u4E3B\u6570\u636E")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "CUST_NAME"),
                createVNode("td", null, "VARCHAR2"),
                createVNode("td", null, "\u7ECF\u9500\u5546\u540D\u79F0"),
                createVNode("td", null, "\u7ECF\u9500\u5546\u540D\u79F0"),
                createVNode("td", null, "\u6765\u81EA\u7ECF\u9500\u5546\u4E3B\u6570\u636E")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "BILLING_UNIT_CODE"),
                createVNode("td", null, "VARCHAR2"),
                createVNode("td", null, "\u6CD5\u4EBA\u7F16\u7801"),
                createVNode("td", null, "\u5F00\u7968\u5355\u4F4D\u7F16\u7801"),
                createVNode("td", null, "\u6765\u81EA\u4EA4\u6613\u516C\u53F8\u4E3B\u6570\u636E")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "BILLING_UNIT_NAME"),
                createVNode("td", null, "VARCHAR2"),
                createVNode("td", null, "\u6CD5\u4EBA\u540D\u79F0"),
                createVNode("td", null, "\u5F00\u7968\u5355\u4F4D\u540D\u79F0"),
                createVNode("td", null, "\u6765\u81EA\u4EA4\u6613\u516C\u53F8\u4E3B\u6570\u636E")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "TERMINAL_CODE"),
                createVNode("td", null, "VARCHAR2"),
                createVNode("td", null, "\u95E8\u5E97\u7F16\u7801"),
                createVNode("td", null, "\u95E8\u5E97\u7F16\u7801"),
                createVNode("td", null, "\u6765\u81EA\u95E8\u5E97\u4E3B\u6570\u636E")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "COST_CENTER_NAME"),
                createVNode("td", null, "VARCHAR2"),
                createVNode("td", null, "\u6210\u672C\u4E2D\u5FC3\u540D\u79F0"),
                createVNode("td", null, "\u6210\u672C\u4E2D\u5FC3"),
                createVNode("td", null, "\u6765\u81EA\u6210\u672C\u4E2D\u5FC3\u4E3B\u6570\u636E")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "PAY_TYPE"),
                createVNode("td", null, "VARCHAR2"),
                createVNode("td", null, "\u652F\u4ED8\u65B9\u5F0F\u7F16\u7801"),
                createVNode("td", null, "\u652F\u4ED8\u65B9\u5F0F"),
                createVNode("td", null, "\u5B50\u67E5\u8BE2HPFM_LOV_VALUE\u7FFB\u8BD1")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "REDUCE_AMT"),
                createVNode("td", null, "NUMBER"),
                createVNode("td", null, "\u9700\u6838\u9500\u91D1\u989D"),
                createVNode("td", null, "\u9700\u6838\u9500\u91D1\u989D"),
                createVNode("td", null, "\u89C6\u56FE\u8BA1\u7B97\u5F97\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "CASHOUT_AMT"),
                createVNode("td", null, "NUMBER"),
                createVNode("td", null, "\u53EF\u5151\u73B0\u603B\u989D(\u4E0D\u542B\u7A0E)"),
                createVNode("td", null, "\u53EF\u5151\u73B0\u603B\u989D(\u4E0D\u542B\u7A0E)"),
                createVNode("td", null, "\u89C6\u56FE\u8BA1\u7B97\u5F97\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "ALL_REDUCE_AMT"),
                createVNode("td", null, "NUMBER"),
                createVNode("td", null, "\u7D2F\u8BA1\u5DF2\u6838\u9500\u91D1\u989D"),
                createVNode("td", null, "\u7D2F\u8BA1\u5DF2\u6838\u9500\u91D1\u989D"),
                createVNode("td", null, "\u89C6\u56FE\u6C47\u603B\u5F97\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "ALL_CASHOUT_AMT"),
                createVNode("td", null, "NUMBER"),
                createVNode("td", null, "\u7D2F\u8BA1\u5DF2\u5151\u73B0\u91D1\u989D(\u4E0D\u542B\u7A0E)"),
                createVNode("td", null, "\u7D2F\u8BA1\u5DF2\u5151\u73B0\u91D1\u989D(\u4E0D\u542B\u7A0E)"),
                createVNode("td", null, "\u89C6\u56FE\u6C47\u603B\u5F97\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "NO_REDUCE_AMT"),
                createVNode("td", null, "NUMBER"),
                createVNode("td", null, "\u5269\u4F59\u672A\u6838\u9500\u91D1\u989D"),
                createVNode("td", null, "\u5269\u4F59\u672A\u6838\u9500\u91D1\u989D"),
                createVNode("td", null, "\u9700\u6838\u9500-\u5DF2\u6838\u9500")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "NO_CASHOUT_AMT"),
                createVNode("td", null, "NUMBER"),
                createVNode("td", null, "\u5269\u4F59\u672A\u5151\u73B0\u91D1\u989D(\u4E0D\u542B\u7A0E)"),
                createVNode("td", null, "\u5269\u4F59\u672A\u5151\u73B0\u91D1\u989D(\u4E0D\u542B\u7A0E)"),
                createVNode("td", null, "\u53EF\u5151\u73B0-\u5DF2\u5151\u73B0")
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, { title: "FIN_FEE_TERMINAL_CASHOUT\uFF08\u989D\u5EA6\u5185\u5151\u73B0\u8868\uFF0C\u5173\u8054\u8868\uFF09" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5B57\u6BB5\u540D</th><th${_scopeId}>\u7C7B\u578B</th><th${_scopeId}>\u91CA\u4E49</th><th${_scopeId}>\u5BF9\u5E94\u754C\u9762\u5B57\u6BB5</th><th${_scopeId}>\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>TERMINAL_CASHOUT_ID</td><td${_scopeId}>NUMBER</td><td${_scopeId}>\u5151\u73B0ID(\u4E3B\u952E)</td><td${_scopeId}>\u5151\u73B0ID</td><td${_scopeId}>\u4E3B\u952E\uFF0C\u81EA\u589E</td></tr><tr${_scopeId}><td${_scopeId}>CREATE_TIME</td><td${_scopeId}>DATE</td><td${_scopeId}>\u521B\u5EFA\u65F6\u95F4</td><td${_scopeId}>\u7533\u8BF7\u65F6\u95F4</td><td${_scopeId}>\u7CFB\u7EDF\u81EA\u52A8\u8D4B\u503C</td></tr><tr${_scopeId}><td${_scopeId}>CREATOR</td><td${_scopeId}>VARCHAR2</td><td${_scopeId}>\u521B\u5EFA\u4EBA</td><td${_scopeId}>\u7533\u8BF7\u4EBA</td><td${_scopeId}>\u7CFB\u7EDF\u81EA\u52A8\u8D4B\u503C</td></tr><tr${_scopeId}><td${_scopeId}>CUST_CODE</td><td${_scopeId}>VARCHAR2</td><td${_scopeId}>\u7ECF\u9500\u5546\u7F16\u7801</td><td${_scopeId}>\u7ECF\u9500\u5546\u7F16\u7801</td><td${_scopeId}>\u4FDD\u5B58\u65F6\u5E26\u5165</td></tr><tr${_scopeId}><td${_scopeId}>CUST_NAME</td><td${_scopeId}>VARCHAR2</td><td${_scopeId}>\u7ECF\u9500\u5546\u540D\u79F0</td><td${_scopeId}>\u7ECF\u9500\u5546\u540D\u79F0</td><td${_scopeId}>\u4FDD\u5B58\u65F6\u5E26\u5165</td></tr><tr${_scopeId}><td${_scopeId}>BILLING_UNIT_CODE</td><td${_scopeId}>VARCHAR2</td><td${_scopeId}>\u6CD5\u4EBA\u7F16\u7801</td><td${_scopeId}>\u5F00\u7968\u5355\u4F4D\u7F16\u7801</td><td${_scopeId}>\u4FDD\u5B58\u65F6\u5E26\u5165</td></tr><tr${_scopeId}><td${_scopeId}>BILLING_UNIT_NAME</td><td${_scopeId}>VARCHAR2</td><td${_scopeId}>\u6CD5\u4EBA\u540D\u79F0</td><td${_scopeId}>\u5F00\u7968\u5355\u4F4D\u540D\u79F0</td><td${_scopeId}>\u4FDD\u5B58\u65F6\u5E26\u5165</td></tr><tr${_scopeId}><td${_scopeId}>CHECK_BX_ID</td><td${_scopeId}>NUMBER</td><td${_scopeId}>\u9A8C\u6536\u62A5\u9500\u5355ID</td><td${_scopeId}>\u9A8C\u6536\u62A5\u9500\u5355ID</td><td${_scopeId}>\u5173\u8054FIN_FEE_CHECK_BX_HEADER</td></tr><tr${_scopeId}><td${_scopeId}>CHECK_BX_CODE</td><td${_scopeId}>VARCHAR2</td><td${_scopeId}>\u9A8C\u6536\u62A5\u9500\u5355\u53F7</td><td${_scopeId}>\u9A8C\u6536\u62A5\u9500\u5355\u53F7</td><td${_scopeId}>\u5173\u8054\u9A8C\u6536\u62A5\u9500\u5355</td></tr><tr${_scopeId}><td${_scopeId}>TERMINAL_CODE</td><td${_scopeId}>VARCHAR2</td><td${_scopeId}>\u95E8\u5E97\u7F16\u7801</td><td${_scopeId}>\u95E8\u5E97\u7F16\u7801</td><td${_scopeId}>\u4FDD\u5B58\u65F6\u5E26\u5165</td></tr><tr${_scopeId}><td${_scopeId}>TERMINAL_NAME</td><td${_scopeId}>VARCHAR2</td><td${_scopeId}>\u95E8\u5E97\u540D\u79F0</td><td${_scopeId}>\u95E8\u5E97\u540D\u79F0</td><td${_scopeId}>\u4FDD\u5B58\u65F6\u5E26\u5165</td></tr><tr${_scopeId}><td${_scopeId}>START_CASHOUT_TIME</td><td${_scopeId}>DATE</td><td${_scopeId}>\u5151\u73B0\u751F\u6548\u65E5\u671F</td><td${_scopeId}>\u5151\u73B0\u751F\u6548\u65E5\u671F</td><td${_scopeId}>\u5151\u73B0\u5BA1\u6279\u901A\u8FC7\u65F6\u8D4B\u503C</td></tr><tr${_scopeId}><td${_scopeId}>END_CASHOUT_TIME</td><td${_scopeId}>DATE</td><td${_scopeId}>\u5151\u73B0\u5931\u6548\u65E5\u671F</td><td${_scopeId}>\u5151\u73B0\u5931\u6548\u65E5\u671F</td><td${_scopeId}>\u5151\u73B0\u5BA1\u6279\u901A\u8FC7\u65F6\u8D4B\u503C</td></tr><tr${_scopeId}><td${_scopeId}>MONTH_REDUCE_AMT</td><td${_scopeId}>DECIMAL</td><td${_scopeId}>\u672C\u6708\u6838\u9500\u91D1\u989D</td><td${_scopeId}>\u672C\u6708\u6838\u9500\u91D1\u989D</td><td${_scopeId}>\u8BA1\u7B97\u5F97\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>IN_REDUCE_AMT</td><td${_scopeId}>DECIMAL</td><td${_scopeId}>\u8D22\u52A1\u590D\u6838\u6838\u9500\u91D1\u989D</td><td${_scopeId}>\u8D22\u52A1\u590D\u6838\u6838\u9500\u91D1\u989D</td><td${_scopeId}>\u8D22\u52A1\u590D\u6838\u65F6\u66F4\u65B0</td></tr><tr${_scopeId}><td${_scopeId}>IN_THIS_CASHOUT_AMT</td><td${_scopeId}>DECIMAL</td><td${_scopeId}>\u989D\u5EA6\u5185\u672C\u6B21\u5151\u73B0\u91D1\u989D</td><td${_scopeId}>\u989D\u5EA6\u5185\u672C\u6B21\u5151\u73B0\u91D1\u989D</td><td${_scopeId}>\u8BA1\u7B97\u5F97\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>IN_CAN_NOT_TAX_BX_AMT</td><td${_scopeId}>DECIMAL</td><td${_scopeId}>\u53EF\u5151\u73B0\u603B\u989D</td><td${_scopeId}>\u53EF\u5151\u73B0\u603B\u989D</td><td${_scopeId}>\u8BA1\u7B97\u5F97\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>IN_THIS_SUR_CASHOUT_AMT</td><td${_scopeId}>DECIMAL</td><td${_scopeId}>\u989D\u5EA6\u5185\u5269\u4F59\u672A\u5151\u73B0\u91D1\u989D</td><td${_scopeId}>\u989D\u5EA6\u5185\u5269\u4F59\u672A\u5151\u73B0\u91D1\u989D</td><td${_scopeId}>\u53EF\u5151\u73B0-\u5DF2\u5151\u73B0</td></tr><tr${_scopeId}><td${_scopeId}>AUDIT_STAT</td><td${_scopeId}>VARCHAR2</td><td${_scopeId}>\u5BA1\u6838\u72B6\u6001</td><td${_scopeId}>\u5BA1\u6838\u72B6\u6001</td><td${_scopeId}>\u6392\u9664&quot;\u8D85\u989D\u4F5C\u5E9F&quot;</td></tr><tr${_scopeId}><td${_scopeId}>HZ_APPROVE_STATUS</td><td${_scopeId}>VARCHAR2</td><td${_scopeId}>\u5DE5\u4F5C\u6D41\u5BA1\u6279\u72B6\u6001</td><td${_scopeId}>\u5DE5\u4F5C\u6D41\u5BA1\u6279\u72B6\u6001</td><td${_scopeId}>NEW/RUN/APPROVED/REJECTED</td></tr><tr${_scopeId}><td${_scopeId}>ORGANIZATION_ID</td><td${_scopeId}>NUMBER</td><td${_scopeId}>\u7EC4\u7EC7ID</td><td${_scopeId}>-</td><td${_scopeId}>\u79DF\u6237\u7EC4\u7EC7\u6807\u8BC6</td></tr></tbody></table>`);
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
                createVNode("td", null, "NUMBER"),
                createVNode("td", null, "\u5151\u73B0ID(\u4E3B\u952E)"),
                createVNode("td", null, "\u5151\u73B0ID"),
                createVNode("td", null, "\u4E3B\u952E\uFF0C\u81EA\u589E")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "CREATE_TIME"),
                createVNode("td", null, "DATE"),
                createVNode("td", null, "\u521B\u5EFA\u65F6\u95F4"),
                createVNode("td", null, "\u7533\u8BF7\u65F6\u95F4"),
                createVNode("td", null, "\u7CFB\u7EDF\u81EA\u52A8\u8D4B\u503C")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "CREATOR"),
                createVNode("td", null, "VARCHAR2"),
                createVNode("td", null, "\u521B\u5EFA\u4EBA"),
                createVNode("td", null, "\u7533\u8BF7\u4EBA"),
                createVNode("td", null, "\u7CFB\u7EDF\u81EA\u52A8\u8D4B\u503C")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "CUST_CODE"),
                createVNode("td", null, "VARCHAR2"),
                createVNode("td", null, "\u7ECF\u9500\u5546\u7F16\u7801"),
                createVNode("td", null, "\u7ECF\u9500\u5546\u7F16\u7801"),
                createVNode("td", null, "\u4FDD\u5B58\u65F6\u5E26\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "CUST_NAME"),
                createVNode("td", null, "VARCHAR2"),
                createVNode("td", null, "\u7ECF\u9500\u5546\u540D\u79F0"),
                createVNode("td", null, "\u7ECF\u9500\u5546\u540D\u79F0"),
                createVNode("td", null, "\u4FDD\u5B58\u65F6\u5E26\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "BILLING_UNIT_CODE"),
                createVNode("td", null, "VARCHAR2"),
                createVNode("td", null, "\u6CD5\u4EBA\u7F16\u7801"),
                createVNode("td", null, "\u5F00\u7968\u5355\u4F4D\u7F16\u7801"),
                createVNode("td", null, "\u4FDD\u5B58\u65F6\u5E26\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "BILLING_UNIT_NAME"),
                createVNode("td", null, "VARCHAR2"),
                createVNode("td", null, "\u6CD5\u4EBA\u540D\u79F0"),
                createVNode("td", null, "\u5F00\u7968\u5355\u4F4D\u540D\u79F0"),
                createVNode("td", null, "\u4FDD\u5B58\u65F6\u5E26\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "CHECK_BX_ID"),
                createVNode("td", null, "NUMBER"),
                createVNode("td", null, "\u9A8C\u6536\u62A5\u9500\u5355ID"),
                createVNode("td", null, "\u9A8C\u6536\u62A5\u9500\u5355ID"),
                createVNode("td", null, "\u5173\u8054FIN_FEE_CHECK_BX_HEADER")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "CHECK_BX_CODE"),
                createVNode("td", null, "VARCHAR2"),
                createVNode("td", null, "\u9A8C\u6536\u62A5\u9500\u5355\u53F7"),
                createVNode("td", null, "\u9A8C\u6536\u62A5\u9500\u5355\u53F7"),
                createVNode("td", null, "\u5173\u8054\u9A8C\u6536\u62A5\u9500\u5355")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "TERMINAL_CODE"),
                createVNode("td", null, "VARCHAR2"),
                createVNode("td", null, "\u95E8\u5E97\u7F16\u7801"),
                createVNode("td", null, "\u95E8\u5E97\u7F16\u7801"),
                createVNode("td", null, "\u4FDD\u5B58\u65F6\u5E26\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "TERMINAL_NAME"),
                createVNode("td", null, "VARCHAR2"),
                createVNode("td", null, "\u95E8\u5E97\u540D\u79F0"),
                createVNode("td", null, "\u95E8\u5E97\u540D\u79F0"),
                createVNode("td", null, "\u4FDD\u5B58\u65F6\u5E26\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "START_CASHOUT_TIME"),
                createVNode("td", null, "DATE"),
                createVNode("td", null, "\u5151\u73B0\u751F\u6548\u65E5\u671F"),
                createVNode("td", null, "\u5151\u73B0\u751F\u6548\u65E5\u671F"),
                createVNode("td", null, "\u5151\u73B0\u5BA1\u6279\u901A\u8FC7\u65F6\u8D4B\u503C")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "END_CASHOUT_TIME"),
                createVNode("td", null, "DATE"),
                createVNode("td", null, "\u5151\u73B0\u5931\u6548\u65E5\u671F"),
                createVNode("td", null, "\u5151\u73B0\u5931\u6548\u65E5\u671F"),
                createVNode("td", null, "\u5151\u73B0\u5BA1\u6279\u901A\u8FC7\u65F6\u8D4B\u503C")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "MONTH_REDUCE_AMT"),
                createVNode("td", null, "DECIMAL"),
                createVNode("td", null, "\u672C\u6708\u6838\u9500\u91D1\u989D"),
                createVNode("td", null, "\u672C\u6708\u6838\u9500\u91D1\u989D"),
                createVNode("td", null, "\u8BA1\u7B97\u5F97\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "IN_REDUCE_AMT"),
                createVNode("td", null, "DECIMAL"),
                createVNode("td", null, "\u8D22\u52A1\u590D\u6838\u6838\u9500\u91D1\u989D"),
                createVNode("td", null, "\u8D22\u52A1\u590D\u6838\u6838\u9500\u91D1\u989D"),
                createVNode("td", null, "\u8D22\u52A1\u590D\u6838\u65F6\u66F4\u65B0")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "IN_THIS_CASHOUT_AMT"),
                createVNode("td", null, "DECIMAL"),
                createVNode("td", null, "\u989D\u5EA6\u5185\u672C\u6B21\u5151\u73B0\u91D1\u989D"),
                createVNode("td", null, "\u989D\u5EA6\u5185\u672C\u6B21\u5151\u73B0\u91D1\u989D"),
                createVNode("td", null, "\u8BA1\u7B97\u5F97\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "IN_CAN_NOT_TAX_BX_AMT"),
                createVNode("td", null, "DECIMAL"),
                createVNode("td", null, "\u53EF\u5151\u73B0\u603B\u989D"),
                createVNode("td", null, "\u53EF\u5151\u73B0\u603B\u989D"),
                createVNode("td", null, "\u8BA1\u7B97\u5F97\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "IN_THIS_SUR_CASHOUT_AMT"),
                createVNode("td", null, "DECIMAL"),
                createVNode("td", null, "\u989D\u5EA6\u5185\u5269\u4F59\u672A\u5151\u73B0\u91D1\u989D"),
                createVNode("td", null, "\u989D\u5EA6\u5185\u5269\u4F59\u672A\u5151\u73B0\u91D1\u989D"),
                createVNode("td", null, "\u53EF\u5151\u73B0-\u5DF2\u5151\u73B0")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "AUDIT_STAT"),
                createVNode("td", null, "VARCHAR2"),
                createVNode("td", null, "\u5BA1\u6838\u72B6\u6001"),
                createVNode("td", null, "\u5BA1\u6838\u72B6\u6001"),
                createVNode("td", null, '\u6392\u9664"\u8D85\u989D\u4F5C\u5E9F"')
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "HZ_APPROVE_STATUS"),
                createVNode("td", null, "VARCHAR2"),
                createVNode("td", null, "\u5DE5\u4F5C\u6D41\u5BA1\u6279\u72B6\u6001"),
                createVNode("td", null, "\u5DE5\u4F5C\u6D41\u5BA1\u6279\u72B6\u6001"),
                createVNode("td", null, "NEW/RUN/APPROVED/REJECTED")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "ORGANIZATION_ID"),
                createVNode("td", null, "NUMBER"),
                createVNode("td", null, "\u7EC4\u7EC7ID"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u79DF\u6237\u7EC4\u7EC7\u6807\u8BC6")
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, { title: "FIN_FEE_CHECK_BX_HEADER\uFF08\u9A8C\u6536\u62A5\u9500\u5355\u5934\u8868\uFF0C\u5173\u8054\u8868\uFF09" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5B57\u6BB5\u540D</th><th${_scopeId}>\u7C7B\u578B</th><th${_scopeId}>\u91CA\u4E49</th><th${_scopeId}>\u5BF9\u5E94\u754C\u9762\u5B57\u6BB5</th><th${_scopeId}>\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>CHECK_BX_ID</td><td${_scopeId}>NUMBER</td><td${_scopeId}>\u9A8C\u6536\u62A5\u9500\u5355ID(\u4E3B\u952E)</td><td${_scopeId}>-</td><td${_scopeId}>\u5173\u8054FIN_FEE_TERMINAL_CASHOUT.CHECK_BX_ID</td></tr><tr${_scopeId}><td${_scopeId}>PAY_TYPE</td><td${_scopeId}>VARCHAR2</td><td${_scopeId}>\u652F\u4ED8\u65B9\u5F0F</td><td${_scopeId}>-</td><td${_scopeId}>\u660E\u7EC6\u67E5\u8BE2\u4E2D\u7528\u4E8E\u7FFB\u8BD1\u652F\u4ED8\u65B9\u5F0F\u542B\u4E49</td></tr></tbody></table>`);
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
                createVNode("td", null, "NUMBER"),
                createVNode("td", null, "\u9A8C\u6536\u62A5\u9500\u5355ID(\u4E3B\u952E)"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u5173\u8054FIN_FEE_TERMINAL_CASHOUT.CHECK_BX_ID")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "PAY_TYPE"),
                createVNode("td", null, "VARCHAR2"),
                createVNode("td", null, "\u652F\u4ED8\u65B9\u5F0F"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u660E\u7EC6\u67E5\u8BE2\u4E2D\u7528\u4E8E\u7FFB\u8BD1\u652F\u4ED8\u65B9\u5F0F\u542B\u4E49")
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
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u62A5\u9519\u4FE1\u606F</th><th${_scopeId}>\u63D0\u793A\u8282\u70B9</th><th${_scopeId}>\u6839\u56E0\u4E0E\u89E3\u51B3\u65B9\u6848</th><th${_scopeId}>\u7B49\u7EA7</th><th${_scopeId}>\u8BE6\u7EC6\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u67E5\u8BE2\u7ED3\u679C\u4E3A\u7A7A</td><td${_scopeId}>\u67E5\u8BE2\u6309\u94AE\u70B9\u51FB\u65F6</td><td${_scopeId}>\u5F53\u524D\u67E5\u8BE2\u6761\u4EF6\u4E0B\u65E0\u989D\u5EA6\u5185\u5151\u73B0\u6570\u636E\uFF0C\u8BF7\u8C03\u6574\u67E5\u8BE2\u6761\u4EF6\u540E\u91CD\u8BD5</td><td${_scopeId}>\u4F4E</td><td${_scopeId}>[\u67E5\u770B](#\u62A5\u95191\u67E5\u8BE2\u7ED3\u679C\u4E3A\u7A7A)</td></tr><tr${_scopeId}><td${_scopeId}>\u652F\u4ED8\u65B9\u5F0F\u7FFB\u8BD1\u4E3A\u7A7A</td><td${_scopeId}>\u67E5\u8BE2\u7ED3\u679C\u5C55\u793A\u65F6</td><td${_scopeId}>HPFM_LOV_VALUE\u4E2D\u7F3A\u5C11AE.PAY_TYPE\u5BF9\u5E94\u7684\u503C\u96C6\u914D\u7F6E</td><td${_scopeId}>\u4F4E</td><td${_scopeId}>[\u67E5\u770B](#\u62A5\u95192\u652F\u4ED8\u65B9\u5F0F\u7FFB\u8BD1\u4E3A\u7A7A)</td></tr><tr${_scopeId}><td${_scopeId}>\u7F51\u7EDC\u8BF7\u6C42\u5931\u8D25/\u63A5\u53E3\u8C03\u7528\u5F02\u5E38</td><td${_scopeId}>\u67E5\u8BE2/\u5BFC\u51FA</td><td${_scopeId}>\u540E\u7AEF\u63A5\u53E3\u8C03\u7528\u5931\u8D25\uFF0C\u68C0\u67E5\u7F51\u7EDC\u8FDE\u63A5\u6216\u540E\u7AEF\u670D\u52A1\u72B6\u6001</td><td${_scopeId}>\u963B\u65AD\u6027\u62A5\u9519</td><td${_scopeId}>[\u67E5\u770B](#\u62A5\u95193\u7F51\u7EDC\u8BF7\u6C42\u5931\u8D25\u63A5\u53E3\u8C03\u7528\u5F02\u5E38)</td></tr><tr${_scopeId}><td${_scopeId}>\u6743\u9650\u4E0D\u8DB3/\u672A\u767B\u5F55</td><td${_scopeId}>\u9875\u9762\u52A0\u8F7D/\u67E5\u8BE2</td><td${_scopeId}>\u5F53\u524D\u7528\u6237\u65E0\u7EC4\u7EC7\u7EA7\u6743\u9650\u6216\u767B\u5F55\u6001\u5931\u6548\uFF0C\u91CD\u65B0\u767B\u5F55\u6216\u8054\u7CFB\u7BA1\u7406\u5458\u5206\u914D\u6743\u9650</td><td${_scopeId}>\u963B\u65AD\u6027\u62A5\u9519</td><td${_scopeId}>[\u67E5\u770B](#\u62A5\u95194\u6743\u9650\u4E0D\u8DB3\u672A\u767B\u5F55)</td></tr><tr${_scopeId}><td${_scopeId}>\u5BFC\u51FA\u5931\u8D25\uFF1A\u7F51\u7EDC\u5F02\u5E38</td><td${_scopeId}>\u5BFC\u51FA</td><td${_scopeId}>\u5BFC\u51FA\u63A5\u53E3\u8C03\u7528\u8FC7\u7A0B\u4E2D\u7F51\u7EDC\u4E2D\u65AD\u6216\u540E\u7AEF\u54CD\u5E94\u8D85\u65F6\uFF0C\u91CD\u8BD5\u5BFC\u51FA\u6216\u7F29\u5C0F\u67E5\u8BE2\u8303\u56F4</td><td${_scopeId}>\u963B\u65AD\u6027\u62A5\u9519</td><td${_scopeId}>[\u67E5\u770B](#\u62A5\u95195\u5BFC\u51FA\u5931\u8D25\u7F51\u7EDC\u5F02\u5E38)</td></tr></tbody></table><h4${_scopeId}>\u62A5\u95191\uFF1A\u67E5\u8BE2\u7ED3\u679C\u4E3A\u7A7A</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u70B9\u51FB&quot;\u67E5\u8BE2&quot;\u6309\u94AE\uFF0C\u6309\u5F53\u524D\u67E5\u8BE2\u6761\u4EF6\uFF08\u9A8C\u6536\u62A5\u9500\u5355\u53F7\u3001\u4E8B\u4E1A\u90E8\u3001\u4EA4\u6613\u516C\u53F8\u3001\u7ECF\u9500\u5546\u3001\u95E8\u5E97\u3001\u5F00\u7968\u5355\u4F4D\u7B49\uFF09\u67E5\u8BE2EPMS.FIN_FEE_TERMINAL_CASHOUT_VIEW\u89C6\u56FE\u8FD4\u56DE\u7A7A\u7ED3\u679C\u96C6</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u4E3B\u67E5\u8BE2\u4ECEFIN_FEE_TERMINAL_CASHOUT_VIEW\u89C6\u56FE\u6C47\u603B\u989D\u5EA6\u5185\u5151\u73B0\u6570\u636E\uFF0C\u660E\u7EC6\u67E5\u8BE2\u4ECEFIN_FEE_TERMINAL_CASHOUT\u8868\u67E5\u8BE2\u5E76\u6392\u9664&quot;\u8D85\u989D\u4F5C\u5E9F&quot;\u8BB0\u5F55\u3002\u82E5\u67E5\u8BE2\u6761\u4EF6\u8FC7\u4E25\uFF08\u5982\u7ECF\u9500\u5546\u7F16\u7801\u62FC\u5199\u9519\u8BEF\u3001\u4E8B\u4E1A\u90E8ID\u4E0D\u5339\u914D\uFF09\u3001\u6216\u9A8C\u6536\u62A5\u9500\u5355\u5C1A\u672A\u751F\u6210\u5151\u73B0\u5355\u3001\u6216\u5151\u73B0\u5355\u5168\u90E8\u4E3A&quot;\u8D85\u989D\u4F5C\u5E9F&quot;\u88AB\u6392\u9664\u3001\u6216\u7528\u6237\u7EC4\u7EC7ID\u4E0E\u6570\u636E\u4E0D\u5339\u914D\uFF0C\u5747\u4F1A\u8FD4\u56DE\u7A7A\u7ED3\u679C\u3002\u8BE5\u62A5\u9519\u4E3A\u63D0\u793A\u6027\uFF0C\u4E0D\u5F71\u54CD\u7CFB\u7EDF\u3002</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> check_bx_id          </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u9A8C\u6536\u62A5\u9500\u5355ID,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         check_bx_code        </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u9A8C\u6536\u62A5\u9500\u5355\u53F7,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         cust_name            </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7ECF\u9500\u5546\u540D\u79F0,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         terminal_name        </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u95E8\u5E97\u540D\u79F0,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         audit_stat           </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5BA1\u6838\u72B6\u6001,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         organization_id      </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7EC4\u7EC7ID</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>   fin_fee_terminal_cashout</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  organization_id </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> #{\u5F53\u524D\u7528\u6237\u7EC4\u7EC7ID}</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    audit_stat </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>!=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>\u8D85\u989D\u4F5C\u5E9F</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ORDER  BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> create_time </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>DESC</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95192\uFF1A\u652F\u4ED8\u65B9\u5F0F\u7FFB\u8BD1\u4E3A\u7A7A</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u67E5\u8BE2\u7ED3\u679C\u5C55\u793A\u65F6\uFF0C\u5B50\u67E5\u8BE2 <code${_scopeId}>(SELECT meaning FROM HZERO.HPFM_LOV_VALUE WHERE LOV_CODE = &#39;AE.PAY_TYPE&#39; AND value = v.PAY_TYPE)</code> \u8FD4\u56DE\u7A7A</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u62A5\u8868\u901A\u8FC7\u5B50\u67E5\u8BE2\u5173\u8054HZERO.HPFM_LOV_VALUE\u503C\u96C6\u8868\u7FFB\u8BD1\u652F\u4ED8\u65B9\u5F0F\u7F16\u7801\u4E3A\u53EF\u8BFB\u542B\u4E49\uFF08\u5982&quot;\u73B0\u91D1&quot;\u3001&quot;\u94F6\u884C\u8F6C\u8D26&quot;\uFF09\u3002\u82E5\u503C\u96C6\u914D\u7F6E\u7F3A\u5931\uFF08LOV_CODE=&#39;AE.PAY_TYPE&#39;\u672A\u914D\u7F6E\uFF09\u3001\u6216\u5151\u73B0\u5355\u7684PAY_TYPE\u503C\u672A\u5728\u503C\u96C6\u4E2D\u7EF4\u62A4\uFF08\u5982\u65B0\u589E\u652F\u4ED8\u65B9\u5F0F\u672A\u540C\u6B65\u503C\u96C6\uFF09\u3001\u6216\u503C\u8868\u6570\u636E\u88AB\u8BEF\u5220\uFF0C\u5B50\u67E5\u8BE2\u8FD4\u56DE\u7A7A\uFF0C\u652F\u4ED8\u65B9\u5F0F\u5217\u663E\u793A\u7A7A\u767D\uFF0C\u5F71\u54CD\u62A5\u8868\u53EF\u8BFB\u6027\u4F46\u4E0D\u963B\u65AD\u67E5\u8BE2\u3002</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> v.pay_type                </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u652F\u4ED8\u65B9\u5F0F\u7F16\u7801,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}>COUNT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>*</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>)                  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5151\u73B0\u5355\u6570\u91CF</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>   fin_fee_terminal_cashout v</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  v.pay_type </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NOT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NOT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>EXISTS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>           </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>1</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>           </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>   hzero.hpfm_lov_value lv</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>           </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  lv.lov_code </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>AE.PAY_TYPE</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>           </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    lv.value </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> v.pay_type</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         )</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>GROUP  BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> v.pay_type</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ORDER  BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5151\u73B0\u5355\u6570\u91CF </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>DESC</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95193\uFF1A\u7F51\u7EDC\u8BF7\u6C42\u5931\u8D25/\u63A5\u53E3\u8C03\u7528\u5F02\u5E38</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u70B9\u51FB&quot;\u67E5\u8BE2&quot;\u6216&quot;\u5BFC\u51FA&quot;\u6309\u94AE\uFF0C\u8C03\u7528POST /v1/{organizationId}/terminalReport/fin_fee_terminal_cashout_list/search\u6216/getCashoutLine\u63A5\u53E3\u65F6\uFF0C\u524D\u7AEF\u672A\u6536\u5230\u54CD\u5E94\u6216\u6536\u5230\u975E2xx\u72B6\u6001\u7801\uFF08\u5982500\u3001502\u3001504\uFF09</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u672C\u9875\u9762\u4E3Ahlod\u4F4E\u4EE3\u7801\u62A5\u8868\u9875\u9762\uFF0C\u4E3B\u67E5\u8BE2\u4F9D\u8D56TerminalReportController.finFeeTerminalCashoutListSearch\u63A5\u53E3\u67E5\u8BE2EPMS.FIN_FEE_TERMINAL_CASHOUT_VIEW\u89C6\u56FE\uFF0C\u660E\u7EC6\u67E5\u8BE2\u4F9D\u8D56finFeeTerminalCashoutListGetCashoutLine\u63A5\u53E3\u67E5\u8BE2FIN_FEE_TERMINAL_CASHOUT\u5173\u8054FIN_FEE_CHECK_BX_HEADER\u3001DIVISION_BASE_SET\u3002\u82E5\u540E\u7AEFae-report\u670D\u52A1\u672A\u542F\u52A8\u3001Oracle\u6570\u636E\u5E93\u8FDE\u63A5\u5F02\u5E38\u3001\u89C6\u56FE\u7F16\u8BD1\u9519\u8BEF\u3001\u5B50\u67E5\u8BE2HPFM_LOV_VALUE\u8FD4\u56DE\u591A\u884C\u89E6\u53D1ORA-01427\u3001SQL\u6267\u884C\u8D85\u65F6\u3001\u7F51\u7EDC\u4E2D\u65AD\u3001\u6216\u7F51\u5173\u8F6C\u53D1\u5931\u8D25\uFF0C\u5747\u4F1A\u5BFC\u81F4\u63A5\u53E3\u8C03\u7528\u5F02\u5E38\u3002\u9700\u68C0\u67E5\u540E\u7AEF\u670D\u52A1\u5065\u5EB7\u72B6\u6001\u3001\u6570\u636E\u5E93\u8FDE\u63A5\u3001\u89C6\u56FE\u72B6\u6001\u3001\u7F51\u7EDC\u8FDE\u901A\u6027\u3002</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}>COUNT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>*</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>)            </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u989D\u5EA6\u5185\u5151\u73B0\u5355\u603B\u6570,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}>MIN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>(create_time)    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u6700\u65E9\u521B\u5EFA\u65F6\u95F4,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}>MAX</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>(create_time)    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u6700\u665A\u521B\u5EFA\u65F6\u95F4</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>   fin_fee_terminal_cashout</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  audit_stat </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>!=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>\u8D85\u989D\u4F5C\u5E9F</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95194\uFF1A\u6743\u9650\u4E0D\u8DB3/\u672A\u767B\u5F55</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u9875\u9762\u52A0\u8F7D\u6216\u70B9\u51FB&quot;\u67E5\u8BE2&quot;/&quot;\u5BFC\u51FA&quot;\u6309\u94AE\u65F6\uFF0C\u63A5\u53E3\u8FD4\u56DE401\u672A\u6388\u6743\u6216403\u7981\u6B62\u8BBF\u95EE\uFF0C\u6216\u524D\u7AEF\u8DEF\u7531\u5B88\u536B\u62E6\u622A</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u672C\u62A5\u8868\u63A5\u53E3\u58F0\u660E@Permission(level = ResourceLevel.ORGANIZATION)\uFF0C\u8981\u6C42\u7528\u6237\u5177\u5907\u7EC4\u7EC7\u7EA7\u6743\u9650\u3002\u82E5\u7528\u6237\u672A\u767B\u5F55\uFF08token\u8FC7\u671F/\u4E22\u5931\uFF09\u3001\u6216\u5F53\u524D\u89D2\u8272\u672A\u5206\u914D\u8BE5\u62A5\u8868\u83DC\u5355\u6743\u9650\u3001\u6216organizationId\u8DEF\u5F84\u53C2\u6570\u4E0E\u7528\u6237\u6240\u5C5E\u7EC4\u7EC7\u4E0D\u5339\u914D\uFF0C\u5747\u4F1A\u89E6\u53D1\u6743\u9650\u6821\u9A8C\u5931\u8D25\u3002hlod\u4F4E\u4EE3\u7801\u9875\u9762\u901A\u8FC7\u8DEF\u7531\u914D\u7F6E\u548C\u63A5\u53E3\u6743\u9650\u53CC\u91CD\u6821\u9A8C\uFF0C\u4EFB\u4E00\u73AF\u8282\u5931\u8D25\u5747\u963B\u65AD\u8BBF\u95EE\u3002\u9700\u91CD\u65B0\u767B\u5F55\u6216\u8054\u7CFB\u7BA1\u7406\u5458\u5206\u914D\u62A5\u8868\u67E5\u770B\u6743\u9650\u3002</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>\u6743\u9650\u6821\u9A8C\u4E3A\u5E94\u7528\u5C42\u903B\u8F91\uFF0C\u65E0\u5BF9\u5E94\u6570\u636E\u8868</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u63D0\u793A</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>   dual;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95195\uFF1A\u5BFC\u51FA\u5931\u8D25\uFF1A\u7F51\u7EDC\u5F02\u5E38</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u70B9\u51FB&quot;\u5BFC\u51FA&quot;\u6309\u94AE\uFF0C\u5BFC\u51FAExcel\u8FC7\u7A0B\u4E2D\u7F51\u7EDC\u4E2D\u65AD\u3001\u540E\u7AEF\u54CD\u5E94\u8D85\u65F6\u6216Excel\u6587\u4EF6\u6D41\u4F20\u8F93\u4E2D\u65AD</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u5BFC\u51FA\u63A5\u53E3\u5C06\u5F53\u524D\u67E5\u8BE2\u6761\u4EF6\u4E0B\u7684\u989D\u5EA6\u5185\u5151\u73B0\u6570\u636E\u5168\u91CF\u67E5\u8BE2\u540E\u751F\u6210Excel\u6587\u4EF6\u6D41\u8FD4\u56DE\u3002\u82E5\u67E5\u8BE2\u6570\u636E\u91CF\u8F83\u5927\u5BFC\u81F4\u54CD\u5E94\u8D85\u65F6\u3001\u6216\u751F\u6210Excel\u8FC7\u7A0B\u4E2D\u5185\u5B58\u6EA2\u51FA\u3001\u6216\u7F51\u7EDC\u4E0D\u7A33\u5B9A\u5BFC\u81F4\u6587\u4EF6\u6D41\u4E2D\u65AD\u3001\u6216\u6D4F\u89C8\u5668\u4E0B\u8F7D\u88AB\u62E6\u622A\uFF0C\u5747\u4F1A\u89E6\u53D1\u5BFC\u51FA\u5931\u8D25\u3002\u9700\u91CD\u8BD5\u5BFC\u51FA\u6216\u7F29\u5C0F\u67E5\u8BE2\u6761\u4EF6\uFF08\u5982\u9650\u5B9A\u9A8C\u6536\u62A5\u9500\u5355\u53F7\u3001\u4E8B\u4E1A\u90E8\uFF09\u51CF\u5C11\u6570\u636E\u91CF\u3002</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> TO_CHAR(create_time, </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>YYYY</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5E74\u5EA6,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}>COUNT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>*</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>)                     </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5151\u73B0\u5355\u6570\u91CF</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>   fin_fee_terminal_cashout</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  audit_stat </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>!=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>\u8D85\u989D\u4F5C\u5E9F</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>GROUP  BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> TO_CHAR(create_time, </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>YYYY</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ORDER  BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5E74\u5EA6 </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>DESC</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
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
                createVNode("td", null, "\u67E5\u8BE2\u7ED3\u679C\u4E3A\u7A7A"),
                createVNode("td", null, "\u67E5\u8BE2\u6309\u94AE\u70B9\u51FB\u65F6"),
                createVNode("td", null, "\u5F53\u524D\u67E5\u8BE2\u6761\u4EF6\u4E0B\u65E0\u989D\u5EA6\u5185\u5151\u73B0\u6570\u636E\uFF0C\u8BF7\u8C03\u6574\u67E5\u8BE2\u6761\u4EF6\u540E\u91CD\u8BD5"),
                createVNode("td", null, "\u4F4E"),
                createVNode("td", null, "[\u67E5\u770B](#\u62A5\u95191\u67E5\u8BE2\u7ED3\u679C\u4E3A\u7A7A)")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u652F\u4ED8\u65B9\u5F0F\u7FFB\u8BD1\u4E3A\u7A7A"),
                createVNode("td", null, "\u67E5\u8BE2\u7ED3\u679C\u5C55\u793A\u65F6"),
                createVNode("td", null, "HPFM_LOV_VALUE\u4E2D\u7F3A\u5C11AE.PAY_TYPE\u5BF9\u5E94\u7684\u503C\u96C6\u914D\u7F6E"),
                createVNode("td", null, "\u4F4E"),
                createVNode("td", null, "[\u67E5\u770B](#\u62A5\u95192\u652F\u4ED8\u65B9\u5F0F\u7FFB\u8BD1\u4E3A\u7A7A)")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7F51\u7EDC\u8BF7\u6C42\u5931\u8D25/\u63A5\u53E3\u8C03\u7528\u5F02\u5E38"),
                createVNode("td", null, "\u67E5\u8BE2/\u5BFC\u51FA"),
                createVNode("td", null, "\u540E\u7AEF\u63A5\u53E3\u8C03\u7528\u5931\u8D25\uFF0C\u68C0\u67E5\u7F51\u7EDC\u8FDE\u63A5\u6216\u540E\u7AEF\u670D\u52A1\u72B6\u6001"),
                createVNode("td", null, "\u963B\u65AD\u6027\u62A5\u9519"),
                createVNode("td", null, "[\u67E5\u770B](#\u62A5\u95193\u7F51\u7EDC\u8BF7\u6C42\u5931\u8D25\u63A5\u53E3\u8C03\u7528\u5F02\u5E38)")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6743\u9650\u4E0D\u8DB3/\u672A\u767B\u5F55"),
                createVNode("td", null, "\u9875\u9762\u52A0\u8F7D/\u67E5\u8BE2"),
                createVNode("td", null, "\u5F53\u524D\u7528\u6237\u65E0\u7EC4\u7EC7\u7EA7\u6743\u9650\u6216\u767B\u5F55\u6001\u5931\u6548\uFF0C\u91CD\u65B0\u767B\u5F55\u6216\u8054\u7CFB\u7BA1\u7406\u5458\u5206\u914D\u6743\u9650"),
                createVNode("td", null, "\u963B\u65AD\u6027\u62A5\u9519"),
                createVNode("td", null, "[\u67E5\u770B](#\u62A5\u95194\u6743\u9650\u4E0D\u8DB3\u672A\u767B\u5F55)")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5BFC\u51FA\u5931\u8D25\uFF1A\u7F51\u7EDC\u5F02\u5E38"),
                createVNode("td", null, "\u5BFC\u51FA"),
                createVNode("td", null, "\u5BFC\u51FA\u63A5\u53E3\u8C03\u7528\u8FC7\u7A0B\u4E2D\u7F51\u7EDC\u4E2D\u65AD\u6216\u540E\u7AEF\u54CD\u5E94\u8D85\u65F6\uFF0C\u91CD\u8BD5\u5BFC\u51FA\u6216\u7F29\u5C0F\u67E5\u8BE2\u8303\u56F4"),
                createVNode("td", null, "\u963B\u65AD\u6027\u62A5\u9519"),
                createVNode("td", null, "[\u67E5\u770B](#\u62A5\u95195\u5BFC\u51FA\u5931\u8D25\u7F51\u7EDC\u5F02\u5E38)")
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95191\uFF1A\u67E5\u8BE2\u7ED3\u679C\u4E3A\u7A7A"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode('\uFF1A\u70B9\u51FB"\u67E5\u8BE2"\u6309\u94AE\uFF0C\u6309\u5F53\u524D\u67E5\u8BE2\u6761\u4EF6\uFF08\u9A8C\u6536\u62A5\u9500\u5355\u53F7\u3001\u4E8B\u4E1A\u90E8\u3001\u4EA4\u6613\u516C\u53F8\u3001\u7ECF\u9500\u5546\u3001\u95E8\u5E97\u3001\u5F00\u7968\u5355\u4F4D\u7B49\uFF09\u67E5\u8BE2EPMS.FIN_FEE_TERMINAL_CASHOUT_VIEW\u89C6\u56FE\u8FD4\u56DE\u7A7A\u7ED3\u679C\u96C6')
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode('\uFF1A\u4E3B\u67E5\u8BE2\u4ECEFIN_FEE_TERMINAL_CASHOUT_VIEW\u89C6\u56FE\u6C47\u603B\u989D\u5EA6\u5185\u5151\u73B0\u6570\u636E\uFF0C\u660E\u7EC6\u67E5\u8BE2\u4ECEFIN_FEE_TERMINAL_CASHOUT\u8868\u67E5\u8BE2\u5E76\u6392\u9664"\u8D85\u989D\u4F5C\u5E9F"\u8BB0\u5F55\u3002\u82E5\u67E5\u8BE2\u6761\u4EF6\u8FC7\u4E25\uFF08\u5982\u7ECF\u9500\u5546\u7F16\u7801\u62FC\u5199\u9519\u8BEF\u3001\u4E8B\u4E1A\u90E8ID\u4E0D\u5339\u914D\uFF09\u3001\u6216\u9A8C\u6536\u62A5\u9500\u5355\u5C1A\u672A\u751F\u6210\u5151\u73B0\u5355\u3001\u6216\u5151\u73B0\u5355\u5168\u90E8\u4E3A"\u8D85\u989D\u4F5C\u5E9F"\u88AB\u6392\u9664\u3001\u6216\u7528\u6237\u7EC4\u7EC7ID\u4E0E\u6570\u636E\u4E0D\u5339\u914D\uFF0C\u5747\u4F1A\u8FD4\u56DE\u7A7A\u7ED3\u679C\u3002\u8BE5\u62A5\u9519\u4E3A\u63D0\u793A\u6027\uFF0C\u4E0D\u5F71\u54CD\u7CFB\u7EDF\u3002')
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " check_bx_id          "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u9A8C\u6536\u62A5\u9500\u5355ID,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         check_bx_code        "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u9A8C\u6536\u62A5\u9500\u5355\u53F7,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         cust_name            "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7ECF\u9500\u5546\u540D\u79F0,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         terminal_name        "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u95E8\u5E97\u540D\u79F0,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         audit_stat           "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5BA1\u6838\u72B6\u6001,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         organization_id      "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7EC4\u7EC7ID")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "   fin_fee_terminal_cashout")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  organization_id "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " #{\u5F53\u524D\u7528\u6237\u7EC4\u7EC7ID}")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    audit_stat "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "!="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "\u8D85\u989D\u4F5C\u5E9F"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'")
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
          createVNode("h4", null, "\u62A5\u95192\uFF1A\u652F\u4ED8\u65B9\u5F0F\u7FFB\u8BD1\u4E3A\u7A7A"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u67E5\u8BE2\u7ED3\u679C\u5C55\u793A\u65F6\uFF0C\u5B50\u67E5\u8BE2 "),
              createVNode("code", null, "(SELECT meaning FROM HZERO.HPFM_LOV_VALUE WHERE LOV_CODE = 'AE.PAY_TYPE' AND value = v.PAY_TYPE)"),
              createTextVNode(" \u8FD4\u56DE\u7A7A")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode(`\uFF1A\u62A5\u8868\u901A\u8FC7\u5B50\u67E5\u8BE2\u5173\u8054HZERO.HPFM_LOV_VALUE\u503C\u96C6\u8868\u7FFB\u8BD1\u652F\u4ED8\u65B9\u5F0F\u7F16\u7801\u4E3A\u53EF\u8BFB\u542B\u4E49\uFF08\u5982"\u73B0\u91D1"\u3001"\u94F6\u884C\u8F6C\u8D26"\uFF09\u3002\u82E5\u503C\u96C6\u914D\u7F6E\u7F3A\u5931\uFF08LOV_CODE='AE.PAY_TYPE'\u672A\u914D\u7F6E\uFF09\u3001\u6216\u5151\u73B0\u5355\u7684PAY_TYPE\u503C\u672A\u5728\u503C\u96C6\u4E2D\u7EF4\u62A4\uFF08\u5982\u65B0\u589E\u652F\u4ED8\u65B9\u5F0F\u672A\u540C\u6B65\u503C\u96C6\uFF09\u3001\u6216\u503C\u8868\u6570\u636E\u88AB\u8BEF\u5220\uFF0C\u5B50\u67E5\u8BE2\u8FD4\u56DE\u7A7A\uFF0C\u652F\u4ED8\u65B9\u5F0F\u5217\u663E\u793A\u7A7A\u767D\uFF0C\u5F71\u54CD\u62A5\u8868\u53EF\u8BFB\u6027\u4F46\u4E0D\u963B\u65AD\u67E5\u8BE2\u3002`)
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " v.pay_type                "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u652F\u4ED8\u65B9\u5F0F\u7F16\u7801,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         "),
                  createVNode("span", { style: { "color": "#82AAFF" } }, "COUNT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "("),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "*"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ")                  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5151\u73B0\u5355\u6570\u91CF")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "   fin_fee_terminal_cashout v")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  v.pay_type "),
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " (")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "           "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "SELECT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "1")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "           "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "   hzero.hpfm_lov_value lv")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "           "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  lv.lov_code "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "AE.PAY_TYPE"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "           "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    lv.value "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " v.pay_type")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         )")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "GROUP  BY"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " v.pay_type")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ORDER  BY"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5151\u73B0\u5355\u6570\u91CF "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "DESC"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95193\uFF1A\u7F51\u7EDC\u8BF7\u6C42\u5931\u8D25/\u63A5\u53E3\u8C03\u7528\u5F02\u5E38"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode('\uFF1A\u70B9\u51FB"\u67E5\u8BE2"\u6216"\u5BFC\u51FA"\u6309\u94AE\uFF0C\u8C03\u7528POST /v1/{organizationId}/terminalReport/fin_fee_terminal_cashout_list/search\u6216/getCashoutLine\u63A5\u53E3\u65F6\uFF0C\u524D\u7AEF\u672A\u6536\u5230\u54CD\u5E94\u6216\u6536\u5230\u975E2xx\u72B6\u6001\u7801\uFF08\u5982500\u3001502\u3001504\uFF09')
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u672C\u9875\u9762\u4E3Ahlod\u4F4E\u4EE3\u7801\u62A5\u8868\u9875\u9762\uFF0C\u4E3B\u67E5\u8BE2\u4F9D\u8D56TerminalReportController.finFeeTerminalCashoutListSearch\u63A5\u53E3\u67E5\u8BE2EPMS.FIN_FEE_TERMINAL_CASHOUT_VIEW\u89C6\u56FE\uFF0C\u660E\u7EC6\u67E5\u8BE2\u4F9D\u8D56finFeeTerminalCashoutListGetCashoutLine\u63A5\u53E3\u67E5\u8BE2FIN_FEE_TERMINAL_CASHOUT\u5173\u8054FIN_FEE_CHECK_BX_HEADER\u3001DIVISION_BASE_SET\u3002\u82E5\u540E\u7AEFae-report\u670D\u52A1\u672A\u542F\u52A8\u3001Oracle\u6570\u636E\u5E93\u8FDE\u63A5\u5F02\u5E38\u3001\u89C6\u56FE\u7F16\u8BD1\u9519\u8BEF\u3001\u5B50\u67E5\u8BE2HPFM_LOV_VALUE\u8FD4\u56DE\u591A\u884C\u89E6\u53D1ORA-01427\u3001SQL\u6267\u884C\u8D85\u65F6\u3001\u7F51\u7EDC\u4E2D\u65AD\u3001\u6216\u7F51\u5173\u8F6C\u53D1\u5931\u8D25\uFF0C\u5747\u4F1A\u5BFC\u81F4\u63A5\u53E3\u8C03\u7528\u5F02\u5E38\u3002\u9700\u68C0\u67E5\u540E\u7AEF\u670D\u52A1\u5065\u5EB7\u72B6\u6001\u3001\u6570\u636E\u5E93\u8FDE\u63A5\u3001\u89C6\u56FE\u72B6\u6001\u3001\u7F51\u7EDC\u8FDE\u901A\u6027\u3002")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u989D\u5EA6\u5185\u5151\u73B0\u5355\u603B\u6570,")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "   fin_fee_terminal_cashout")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  audit_stat "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "!="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "\u8D85\u989D\u4F5C\u5E9F"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95194\uFF1A\u6743\u9650\u4E0D\u8DB3/\u672A\u767B\u5F55"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode('\uFF1A\u9875\u9762\u52A0\u8F7D\u6216\u70B9\u51FB"\u67E5\u8BE2"/"\u5BFC\u51FA"\u6309\u94AE\u65F6\uFF0C\u63A5\u53E3\u8FD4\u56DE401\u672A\u6388\u6743\u6216403\u7981\u6B62\u8BBF\u95EE\uFF0C\u6216\u524D\u7AEF\u8DEF\u7531\u5B88\u536B\u62E6\u622A')
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
          ]),
          createVNode("h4", null, "\u62A5\u95195\uFF1A\u5BFC\u51FA\u5931\u8D25\uFF1A\u7F51\u7EDC\u5F02\u5E38"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode('\uFF1A\u70B9\u51FB"\u5BFC\u51FA"\u6309\u94AE\uFF0C\u5BFC\u51FAExcel\u8FC7\u7A0B\u4E2D\u7F51\u7EDC\u4E2D\u65AD\u3001\u540E\u7AEF\u54CD\u5E94\u8D85\u65F6\u6216Excel\u6587\u4EF6\u6D41\u4F20\u8F93\u4E2D\u65AD')
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u5BFC\u51FA\u63A5\u53E3\u5C06\u5F53\u524D\u67E5\u8BE2\u6761\u4EF6\u4E0B\u7684\u989D\u5EA6\u5185\u5151\u73B0\u6570\u636E\u5168\u91CF\u67E5\u8BE2\u540E\u751F\u6210Excel\u6587\u4EF6\u6D41\u8FD4\u56DE\u3002\u82E5\u67E5\u8BE2\u6570\u636E\u91CF\u8F83\u5927\u5BFC\u81F4\u54CD\u5E94\u8D85\u65F6\u3001\u6216\u751F\u6210Excel\u8FC7\u7A0B\u4E2D\u5185\u5B58\u6EA2\u51FA\u3001\u6216\u7F51\u7EDC\u4E0D\u7A33\u5B9A\u5BFC\u81F4\u6587\u4EF6\u6D41\u4E2D\u65AD\u3001\u6216\u6D4F\u89C8\u5668\u4E0B\u8F7D\u88AB\u62E6\u622A\uFF0C\u5747\u4F1A\u89E6\u53D1\u5BFC\u51FA\u5931\u8D25\u3002\u9700\u91CD\u8BD5\u5BFC\u51FA\u6216\u7F29\u5C0F\u67E5\u8BE2\u6761\u4EF6\uFF08\u5982\u9650\u5B9A\u9A8C\u6536\u62A5\u9500\u5355\u53F7\u3001\u4E8B\u4E1A\u90E8\uFF09\u51CF\u5C11\u6570\u636E\u91CF\u3002")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " TO_CHAR(create_time, "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "YYYY"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5E74\u5EA6,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         "),
                  createVNode("span", { style: { "color": "#82AAFF" } }, "COUNT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "("),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "*"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ")                     "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5151\u73B0\u5355\u6570\u91CF")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "   fin_fee_terminal_cashout")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  audit_stat "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "!="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "\u8D85\u989D\u4F5C\u5E9F"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "GROUP  BY"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " TO_CHAR(create_time, "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "YYYY"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ")")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ORDER  BY"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5E74\u5EA6 "),
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
        _push2(`<p${_scopeId}><strong${_scopeId}>Q1\uFF1A\u4E3B\u67E5\u8BE2\u548C\u660E\u7EC6\u67E5\u8BE2\u7684\u533A\u522B\uFF1F</strong></p><p${_scopeId}>A\uFF1A\u4E3B\u67E5\u8BE2\uFF08finFeeTerminalCashoutListSearch\uFF09\u67E5\u8BE2 <code${_scopeId}>EPMS.FIN_FEE_TERMINAL_CASHOUT_VIEW</code> \u89C6\u56FE\uFF0C\u8FD4\u56DE\u6309\u9A8C\u6536\u62A5\u9500\u5355\u6C47\u603B\u7684\u7EDF\u8BA1\u6570\u636E\uFF1B\u660E\u7EC6\u67E5\u8BE2\uFF08finFeeTerminalCashoutListGetCashoutLine\uFF09\u67E5\u8BE2 <code${_scopeId}>FIN_FEE_TERMINAL_CASHOUT</code> \u8868\uFF0C\u8FD4\u56DE\u6BCF\u7B14\u5151\u73B0\u5355\u7684\u8BE6\u7EC6\u4FE1\u606F\u3002</p><p${_scopeId}><strong${_scopeId}>Q2\uFF1A\u660E\u7EC6\u67E5\u8BE2\u6392\u9664\u4E86\u54EA\u4E9B\u6570\u636E\uFF1F</strong></p><p${_scopeId}>A\uFF1A\u6392\u9664\u4E86\u5BA1\u6838\u72B6\u6001\u4E3A&quot;\u8D85\u989D\u4F5C\u5E9F&quot;\u7684\u8BB0\u5F55\uFF1A<code${_scopeId}>h.audit_stat != &#39;\u8D85\u989D\u4F5C\u5E9F&#39;</code>\u3002</p><p${_scopeId}><strong${_scopeId}>Q3\uFF1A\u91D1\u989D\u5B57\u6BB5\u683C\u5F0F\u5316\u65B9\u5F0F\uFF1F</strong></p><p${_scopeId}>A\uFF1A\u4E3B\u67E5\u8BE2\u4F7F\u7528 <code${_scopeId}>TO_CHAR(..., &#39;999999999990.99&#39;)</code>\uFF08\u65E0FM\u524D\u7F00\uFF09\uFF0C\u660E\u7EC6\u67E5\u8BE2\u4F7F\u7528 <code${_scopeId}>TO_CHAR(..., &#39;FM999999999990.00&#39;)</code>\uFF08\u5E26FM\u524D\u7F00\uFF0C\u65E0\u524D\u5BFC\u7A7A\u683C\uFF09\u3002</p><p${_scopeId}><strong${_scopeId}>Q4\uFF1A\u652F\u4ED8\u65B9\u5F0F\u5982\u4F55\u5C55\u793A\uFF1F</strong></p><p${_scopeId}>A\uFF1A\u901A\u8FC7\u5B50\u67E5\u8BE2 <code${_scopeId}>HZERO.HPFM_LOV_VALUE</code>\uFF08LOV_CODE = &#39;AE.PAY_TYPE&#39;\uFF09\u5C06\u7F16\u7801\u7FFB\u8BD1\u4E3A\u53EF\u8BFB\u542B\u4E49\u3002</p><p${_scopeId}><strong${_scopeId}>Q5\uFF1A\u62A5\u8868\u662F\u5426\u652F\u6301\u65B0\u589E/\u4FEE\u6539/\u5220\u9664\uFF1F</strong></p><p${_scopeId}>A\uFF1A\u4E0D\u652F\u6301\uFF0C\u672C\u9875\u9762\u4E3A\u7EAF\u67E5\u8BE2\u62A5\u8868\uFF0C\u4EC5\u652F\u6301\u67E5\u770B\u548C\u5BFC\u51FA\u3002</p>`);
      } else {
        return [
          createVNode("p", null, [
            createVNode("strong", null, "Q1\uFF1A\u4E3B\u67E5\u8BE2\u548C\u660E\u7EC6\u67E5\u8BE2\u7684\u533A\u522B\uFF1F")
          ]),
          createVNode("p", null, [
            createTextVNode("A\uFF1A\u4E3B\u67E5\u8BE2\uFF08finFeeTerminalCashoutListSearch\uFF09\u67E5\u8BE2 "),
            createVNode("code", null, "EPMS.FIN_FEE_TERMINAL_CASHOUT_VIEW"),
            createTextVNode(" \u89C6\u56FE\uFF0C\u8FD4\u56DE\u6309\u9A8C\u6536\u62A5\u9500\u5355\u6C47\u603B\u7684\u7EDF\u8BA1\u6570\u636E\uFF1B\u660E\u7EC6\u67E5\u8BE2\uFF08finFeeTerminalCashoutListGetCashoutLine\uFF09\u67E5\u8BE2 "),
            createVNode("code", null, "FIN_FEE_TERMINAL_CASHOUT"),
            createTextVNode(" \u8868\uFF0C\u8FD4\u56DE\u6BCF\u7B14\u5151\u73B0\u5355\u7684\u8BE6\u7EC6\u4FE1\u606F\u3002")
          ]),
          createVNode("p", null, [
            createVNode("strong", null, "Q2\uFF1A\u660E\u7EC6\u67E5\u8BE2\u6392\u9664\u4E86\u54EA\u4E9B\u6570\u636E\uFF1F")
          ]),
          createVNode("p", null, [
            createTextVNode('A\uFF1A\u6392\u9664\u4E86\u5BA1\u6838\u72B6\u6001\u4E3A"\u8D85\u989D\u4F5C\u5E9F"\u7684\u8BB0\u5F55\uFF1A'),
            createVNode("code", null, "h.audit_stat != '\u8D85\u989D\u4F5C\u5E9F'"),
            createTextVNode("\u3002")
          ]),
          createVNode("p", null, [
            createVNode("strong", null, "Q3\uFF1A\u91D1\u989D\u5B57\u6BB5\u683C\u5F0F\u5316\u65B9\u5F0F\uFF1F")
          ]),
          createVNode("p", null, [
            createTextVNode("A\uFF1A\u4E3B\u67E5\u8BE2\u4F7F\u7528 "),
            createVNode("code", null, "TO_CHAR(..., '999999999990.99')"),
            createTextVNode("\uFF08\u65E0FM\u524D\u7F00\uFF09\uFF0C\u660E\u7EC6\u67E5\u8BE2\u4F7F\u7528 "),
            createVNode("code", null, "TO_CHAR(..., 'FM999999999990.00')"),
            createTextVNode("\uFF08\u5E26FM\u524D\u7F00\uFF0C\u65E0\u524D\u5BFC\u7A7A\u683C\uFF09\u3002")
          ]),
          createVNode("p", null, [
            createVNode("strong", null, "Q4\uFF1A\u652F\u4ED8\u65B9\u5F0F\u5982\u4F55\u5C55\u793A\uFF1F")
          ]),
          createVNode("p", null, [
            createTextVNode("A\uFF1A\u901A\u8FC7\u5B50\u67E5\u8BE2 "),
            createVNode("code", null, "HZERO.HPFM_LOV_VALUE"),
            createTextVNode("\uFF08LOV_CODE = 'AE.PAY_TYPE'\uFF09\u5C06\u7F16\u7801\u7FFB\u8BD1\u4E3A\u53EF\u8BFB\u542B\u4E49\u3002")
          ]),
          createVNode("p", null, [
            createVNode("strong", null, "Q5\uFF1A\u62A5\u8868\u662F\u5426\u652F\u6301\u65B0\u589E/\u4FEE\u6539/\u5220\u9664\uFF1F")
          ]),
          createVNode("p", null, "A\uFF1A\u4E0D\u652F\u6301\uFF0C\u672C\u9875\u9762\u4E3A\u7EAF\u67E5\u8BE2\u62A5\u8868\uFF0C\u4EC5\u652F\u6301\u67E5\u770B\u548C\u5BFC\u51FA\u3002")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div><div id="changelog" style="${ssrRenderStyle({ "display": "none" })}"><div class="tab-pad"><div class="kl-wrap">`);
  _push(ssrRenderComponent(_component_KbCard, { title: "\u66F4\u65B0\u8BB0\u5F55" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u65E5\u671F</th><th${_scopeId}>\u63D0\u4EA4ID</th><th${_scopeId}>\u63D0\u4EA4\u4EBA</th><th${_scopeId}>\u63D0\u4EA4\u5185\u5BB9</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>2025-12-12</td><td${_scopeId}>-</td><td${_scopeId}>lingma</td><td${_scopeId}>\u521D\u59CB\u521B\u5EFA\u989D\u5EA6\u5185\u5151\u73B0\u7EDF\u8BA1\u62A5\u8868\u67E5\u8BE2\u63A5\u53E3\uFF08\u4E3B\u67E5\u8BE2+\u660E\u7EC6\u67E5\u8BE2\uFF09</td></tr><tr${_scopeId}><td${_scopeId}>2025-12-10</td><td${_scopeId}>-</td><td${_scopeId}>HZERO</td><td${_scopeId}>\u521D\u59CB\u521B\u5EFATerminalReportController</td></tr></tbody></table>`);
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
                createVNode("td", null, "2025-12-12"),
                createVNode("td", null, "-"),
                createVNode("td", null, "lingma"),
                createVNode("td", null, "\u521D\u59CB\u521B\u5EFA\u989D\u5EA6\u5185\u5151\u73B0\u7EDF\u8BA1\u62A5\u8868\u67E5\u8BE2\u63A5\u53E3\uFF08\u4E3B\u67E5\u8BE2+\u660E\u7EC6\u67E5\u8BE2\uFF09")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "2025-12-10"),
                createVNode("td", null, "-"),
                createVNode("td", null, "HZERO"),
                createVNode("td", null, "\u521D\u59CB\u521B\u5EFATerminalReportController")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("\u95E8\u5E97\u7BA1\u7406/\u88C5\u4FEE\u62A5\u8868/\u95E8\u989D\u5EA6\u5185\u5151\u73B0\u7EDF\u8BA1\u62A5\u8868/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
